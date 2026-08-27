#!/usr/bin/env python3
"""Local server that resolves URLs the way GitHub Pages does.

`python3 -m http.server` maps a request one-to-one onto a file, so /mathematics
is a 404 unless a file called exactly that exists. GitHub Pages instead falls
back to <path>.html, which is the whole reason the nav links can drop the
extension. Developing against the stock server would mean every link in the nav
is broken locally and working live — the worst way round, because nothing is
caught until after a push.

Two other behaviours are matched here for the same reason: serving 404.html for
anything unresolved (so the custom 404 page can actually be looked at), and
sending no-cache headers (so an edited stylesheet shows up on reload without
bumping the ?v= query string on every save).

    python3 serve.py          # port 8000
    python3 serve.py 8001
"""

import http.server
import os
import sys


class Handler(http.server.SimpleHTTPRequestHandler):

    def translate_path(self, path):
        local = super().translate_path(path)

        # A real file or a directory holding an index: nothing to do.
        if os.path.isfile(local):
            return local
        if os.path.isdir(local) and os.path.isfile(os.path.join(local, "index.html")):
            return local

        # /mathematics -> mathematics.html, which is the GitHub Pages rule.
        # Guarded on isfile so a genuinely missing path still falls through to
        # the 404 handler below rather than returning a directory listing.
        if not path.endswith("/") and os.path.isfile(local + ".html"):
            return local + ".html"

        return local

    def send_error(self, code, message=None, explain=None):
        # Serve the site's own 404.html rather than the stock error page, so the
        # thing being tested is the thing that ships.
        if code == 404:
            custom = os.path.join(os.getcwd(), "404.html")
            if os.path.isfile(custom):
                body = open(custom, "rb").read()
                self.send_response(404)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                if self.command != "HEAD":
                    self.wfile.write(body)
                return
        super().send_error(code, message, explain)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"serving {os.getcwd()} at http://localhost:{port}  (ctrl-c to stop)")
    http.server.ThreadingHTTPServer(("", port), Handler).serve_forever()
