// Reading passages: dialogue lines (speaker '' = narration), tap-to-translate glosses, key words and a bank of questions (a = index of the right option).
const PASSAGES = [
 {
  "id": "vokzal",
  "topic": "vokzal",
  "title": "На вокзале",
  "difficulty": "Tom's story, part 1",
  "intro": "Tom arrives in St Petersburg. К = Катя, Т = Том.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Это Том. Том — студент. Он из Лондона. Это вокзал в Санкт-Петербурге. Вокзал большой. Вот касса, а вот выход. Где Катя? А, вот она! Катя — подруга Тома."
   },
   {
    "speaker": "К",
    "text": "Привет, Том!"
   },
   {
    "speaker": "Т",
    "text": "Привет, Катя! Как дела?"
   },
   {
    "speaker": "К",
    "text": "Отлично! А у тебя?"
   },
   {
    "speaker": "Т",
    "text": "Тоже отлично."
   },
   {
    "speaker": "К",
    "text": "Это твоя сумка?"
   },
   {
    "speaker": "Т",
    "text": "Да, это моя сумка. А это мой рюкзак."
   },
   {
    "speaker": "К",
    "text": "Хорошо. Вот такси. Пока, вокзал!"
   }
  ],
  "vocab": {
   "студент": "student",
   "лондона": "London (из Лондона — from London)",
   "вокзал": "railway station",
   "санкт-петербурге": "St Petersburg (в — in)",
   "большой": "big",
   "касса": "ticket office",
   "выход": "exit",
   "подруга": "friend (woman)",
   "тома": "Tom's",
   "твоя": "your (ты)",
   "сумка": "bag",
   "рюкзак": "rucksack",
   "такси": "taxi",
   "отлично": "excellent",
   "тоже": "also, too"
  },
  "keywords": [
   {
    "rus": "вокзал",
    "eng": "station"
   },
   {
    "rus": "касса",
    "eng": "ticket office"
   },
   {
    "rus": "выход",
    "eng": "exit"
   },
   {
    "rus": "большой",
    "eng": "big"
   },
   {
    "rus": "подруга",
    "eng": "friend (f)"
   },
   {
    "rus": "твоя",
    "eng": "your"
   }
  ],
  "questions": [
   {
    "q": "Is Tom a student?",
    "opts": [
     "Yes",
     "No",
     "It doesn't say"
    ],
    "a": 0
   },
   {
    "q": "Is the station small?",
    "opts": [
     "Yes",
     "No, it's big",
     "It doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Who is Katya?",
    "opts": [
     "Tom's sister",
     "Tom's friend",
     "a taxi driver",
     "Tom's teacher"
    ],
    "a": 1
   },
   {
    "q": "Whose bag is it?",
    "opts": [
     "Katya's",
     "Tom's",
     "the driver's"
    ],
    "a": 1
   },
   {
    "q": "Where is Tom from?",
    "opts": [
     "London",
     "Moscow",
     "St Petersburg",
     "Manchester"
    ],
    "a": 0
   },
   {
    "q": "How does Katya say she is?",
    "opts": [
     "Отлично",
     "Нормально",
     "Плохо",
     "Неплохо"
    ],
    "a": 0
   },
   {
    "q": "How do they leave the station?",
    "opts": [
     "by taxi",
     "by metro",
     "on foot",
     "by bus"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "gostinica",
  "topic": "gostinica",
  "title": "В гостинице",
  "difficulty": "Tom's story, part 2",
  "intro": "Tom checks in. И = Ирина Петровна, the receptionist; Т = Том.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Вечер. Это гостиница «Нева». Гостиница старая, но хорошая. Вот администратор. Её зовут Ирина Петровна."
   },
   {
    "speaker": "И",
    "text": "Добрый вечер!"
   },
   {
    "speaker": "Т",
    "text": "Добрый вечер! Меня зовут Том Смит."
   },
   {
    "speaker": "И",
    "text": "Ваш паспорт, пожалуйста."
   },
   {
    "speaker": "Т",
    "text": "Вот он."
   },
   {
    "speaker": "И",
    "text": "Спасибо. Ваша комната — номер 12. Вот ключ."
   },
   {
    "speaker": "Т",
    "text": "Спасибо!"
   },
   {
    "speaker": "",
    "text": "Комната маленькая, но окно большое. А там — Нева!"
   }
  ],
  "vocab": {
   "вечер": "evening",
   "гостиница": "hotel",
   "старая": "old",
   "но": "but",
   "хорошая": "good",
   "администратор": "receptionist",
   "её": "her",
   "зовут": "they call (её зовут — her name is)",
   "ваш": "your (вы)",
   "ваша": "your (вы)",
   "паспорт": "passport",
   "комната": "room",
   "номер": "number; hotel room",
   "ключ": "key",
   "маленькая": "small",
   "окно": "window",
   "большое": "big",
   "там": "there"
  },
  "keywords": [
   {
    "rus": "гостиница",
    "eng": "hotel"
   },
   {
    "rus": "старая",
    "eng": "old"
   },
   {
    "rus": "ваш, ваша",
    "eng": "your (вы)"
   },
   {
    "rus": "номер",
    "eng": "hotel room"
   },
   {
    "rus": "ключ",
    "eng": "key"
   },
   {
    "rus": "маленькая",
    "eng": "small"
   }
  ],
  "questions": [
   {
    "q": "Is the hotel new?",
    "opts": [
     "Yes",
     "No, it's old",
     "It doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Who is Ирина Петровна?",
    "opts": [
     "the receptionist",
     "Tom's friend",
     "a waiter",
     "Katya's mum"
    ],
    "a": 0
   },
   {
    "q": "What is Tom's room number?",
    "opts": [
     "12",
     "21",
     "7",
     "2"
    ],
    "a": 0
   },
   {
    "q": "Is the room big?",
    "opts": [
     "Yes",
     "No, it's small",
     "It doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What is big?",
    "opts": [
     "the window",
     "the room",
     "the key",
     "the bag"
    ],
    "a": 0
   },
   {
    "q": "What time of day is it?",
    "opts": [
     "evening",
     "morning",
     "afternoon",
     "night"
    ],
    "a": 0
   },
   {
    "q": "What does the receptionist ask for?",
    "opts": [
     "his passport",
     "his ticket",
     "his phone",
     "money"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "kafe",
  "topic": "kafe",
  "title": "В кафе «Самовар»",
  "difficulty": "Tom's story, part 3",
  "intro": "Breakfast. Д = Денис, the waiter; Т = Том; К = Катя.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Утро. Том и Катя — в кафе «Самовар». Вот меню, а вот официант. Его зовут Денис."
   },
   {
    "speaker": "Д",
    "text": "Доброе утро! Что вы хотите?"
   },
   {
    "speaker": "Т",
    "text": "Чай с лимоном, пожалуйста, и блины."
   },
   {
    "speaker": "К",
    "text": "А мне — кофе и сырники."
   },
   {
    "speaker": "Д",
    "text": "Хорошо."
   },
   {
    "speaker": "",
    "text": "Вот чай, кофе, блины и сырники. Блины очень вкусные!"
   }
  ],
  "vocab": {
   "утро": "morning",
   "меню": "menu",
   "официант": "waiter",
   "его": "his",
   "зовут": "they call (его зовут — his name is)",
   "хотите": "you want (что вы хотите? — what would you like?)",
   "лимоном": "lemon (с лимоном — with lemon)",
   "блины": "pancakes",
   "мне": "to me (а мне… — and for me…)",
   "сырники": "cottage-cheese fritters",
   "очень": "very",
   "вкусные": "tasty",
   "чай": "tea",
   "кофе": "coffee"
  },
  "keywords": [
   {
    "rus": "официант",
    "eng": "waiter"
   },
   {
    "rus": "что вы хотите?",
    "eng": "what would you like?"
   },
   {
    "rus": "с лимоном",
    "eng": "with lemon"
   },
   {
    "rus": "блины",
    "eng": "pancakes"
   },
   {
    "rus": "а мне…",
    "eng": "and for me…"
   },
   {
    "rus": "вкусные",
    "eng": "tasty"
   }
  ],
  "questions": [
   {
    "q": "What time of day is it?",
    "opts": [
     "morning",
     "afternoon",
     "evening",
     "night"
    ],
    "a": 0
   },
   {
    "q": "Who is Денис?",
    "opts": [
     "the waiter",
     "Tom's brother",
     "the cook",
     "Katya's friend"
    ],
    "a": 0
   },
   {
    "q": "What does Tom order?",
    "opts": [
     "tea with lemon and pancakes",
     "coffee and fritters",
     "tea and fritters",
     "coffee and pancakes"
    ],
    "a": 0
   },
   {
    "q": "What does Katya order?",
    "opts": [
     "coffee and fritters",
     "tea with lemon",
     "pancakes",
     "juice"
    ],
    "a": 0
   },
   {
    "q": "What is the café called?",
    "opts": [
     "Самовар",
     "Утро",
     "Нева",
     "Тройка"
    ],
    "a": 0
   },
   {
    "q": "What are very tasty?",
    "opts": [
     "the pancakes",
     "the fritters",
     "the tea",
     "the coffee"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "semya_kati",
  "topic": "semya",
  "title": "Семья Кати",
  "difficulty": "from Лист 7",
  "intro": "Katya describes her family.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Меня зовут Катя. Это моя семья. Мой папа — Михаил Петрович, он преподаватель. Моя мама — Ирина. У меня есть брат, его зовут Дима. Он студент. Моя бабушка живёт в Москве. У нас есть кот, его зовут Бегемот. Я люблю свою семью."
   }
  ],
  "vocab": {
   "семья": "family",
   "папа": "dad",
   "преподаватель": "teacher",
   "мама": "mum",
   "брат": "brother",
   "студент": "student",
   "бабушка": "grandmother",
   "живёт": "lives",
   "москве": "Moscow (в Москве — in Moscow)",
   "нас": "us (у нас есть — we have)",
   "кот": "cat",
   "люблю": "I love",
   "свою": "my (own)",
   "меня": "me (у меня есть — I have)"
  },
  "keywords": [
   {
    "rus": "у меня есть",
    "eng": "I have"
   },
   {
    "rus": "преподаватель",
    "eng": "teacher"
   },
   {
    "rus": "живёт",
    "eng": "lives"
   },
   {
    "rus": "у нас есть",
    "eng": "we have"
   },
   {
    "rus": "я люблю",
    "eng": "I love"
   }
  ],
  "questions": [
   {
    "q": "Katya's father is a teacher.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "Katya has a sister.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Dima is a student.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "Katya's grandmother lives in Moscow.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "The family has a dog.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Katya's patronymic is Михайловна.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "semya_marii",
  "topic": "semya",
  "title": "Моя семья",
  "difficulty": "from lesson 7",
  "intro": "Maria introduces her family (from the class slides).",
  "dialogue": [
   {
    "speaker": "",
    "text": "Давайте познакомимся! Меня зовут Мария. Моя фамилия — Иванова. Это моя семья."
   },
   {
    "speaker": "",
    "text": "Это мой отец. Его зовут Николай. А это моя мать. Её зовут Наталья. Мой папа и моя мама — это мои родители."
   },
   {
    "speaker": "",
    "text": "А это мой брат. Его зовут Андрей. Это его жена. Её зовут Катя. Это их дети: сын Дима и дочь Наташа. Дима — мой племянник, а Наташа — моя племянница. Я их тётя."
   },
   {
    "speaker": "",
    "text": "А это моя бабушка и мой дедушка. Я их внучка, а Андрей — их внук. Это моя тётя Елена и её муж Михаил. Михаил — мой дядя, а я его племянница."
   },
   {
    "speaker": "",
    "text": "Вот наш дом. Это наша собака. Его зовут Шарик. А где наша кошка? Вот она! Мурка!"
   }
  ],
  "vocab": {
   "давайте": "let's",
   "познакомимся": "get acquainted",
   "фамилия": "surname",
   "отец": "father",
   "мать": "mother",
   "родители": "parents",
   "жена": "wife",
   "их": "their",
   "дети": "children",
   "сын": "son",
   "дочь": "daughter",
   "племянник": "nephew",
   "племянница": "niece",
   "тётя": "aunt",
   "внучка": "granddaughter",
   "внук": "grandson",
   "муж": "husband",
   "дядя": "uncle",
   "наш": "our",
   "наша": "our",
   "дом": "house",
   "собака": "dog",
   "кошка": "cat"
  },
  "keywords": [
   {
    "rus": "фамилия",
    "eng": "surname"
   },
   {
    "rus": "родители",
    "eng": "parents"
   },
   {
    "rus": "их",
    "eng": "their"
   },
   {
    "rus": "племянник, племянница",
    "eng": "nephew, niece"
   },
   {
    "rus": "наш, наша",
    "eng": "our"
   }
  ],
  "questions": [
   {
    "q": "Мария, твоя фамилия — Петрова?",
    "opts": [
     "Нет, Иванова.",
     "Да, Петрова.",
     "Нет, Смирнова."
    ],
    "a": 0
   },
   {
    "q": "Мария, Наталья — твоя сестра?",
    "opts": [
     "Нет, это моя мать.",
     "Да, это моя сестра.",
     "Нет, это моя тётя."
    ],
    "a": 0
   },
   {
    "q": "Мария, Дима — твой дядя?",
    "opts": [
     "Нет, это мой племянник.",
     "Да, это мой дядя.",
     "Нет, это мой брат."
    ],
    "a": 0
   },
   {
    "q": "Мария, Андрей — твой отец?",
    "opts": [
     "Нет, это мой брат.",
     "Да, это мой отец.",
     "Нет, это мой дядя."
    ],
    "a": 0
   },
   {
    "q": "Мария, Шарик — твоя кошка?",
    "opts": [
     "Нет, это наша собака.",
     "Да, это наша кошка.",
     "Нет, это мой брат."
    ],
    "a": 0
   },
   {
    "q": "Мария, Михаил — твой брат?",
    "opts": [
     "Нет, это мой дядя.",
     "Да, это мой брат.",
     "Нет, это мой отец."
    ],
    "a": 0
   },
   {
    "q": "Мария, Елена — твоя племянница?",
    "opts": [
     "Нет, это моя тётя.",
     "Да, это моя племянница.",
     "Нет, это моя мать."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "semya_sashi",
  "topic": "semya",
  "title": "Семья Саши",
  "difficulty": "from lesson 8",
  "intro": "Sasha introduces his family (based on the video in lesson 8).",
  "dialogue": [
   {
    "speaker": "",
    "text": "Привет! Меня зовут Саша. Я студент. Это моя семья."
   },
   {
    "speaker": "",
    "text": "Моя мама — Таня. Она журналист. Мой папа — Миша, он инженер. Мои родители молодые и весёлые."
   },
   {
    "speaker": "",
    "text": "У меня есть младший брат. Его зовут Сеня. Сеня — школьник. Он маленький, но очень умный."
   },
   {
    "speaker": "",
    "text": "А это моя девушка. Её зовут Соня. Она тоже студентка."
   },
   {
    "speaker": "",
    "text": "Это моя бабушка Мария и мой дедушка Николай. Они пенсионеры. Бабушка добрая, а дедушка строгий, но тоже добрый."
   }
  ],
  "vocab": {
   "студент": "student",
   "семья": "family",
   "журналист": "journalist",
   "инженер": "engineer",
   "родители": "parents",
   "молодые": "young",
   "весёлые": "cheerful",
   "младший": "younger",
   "школьник": "schoolboy",
   "маленький": "little",
   "умный": "clever",
   "девушка": "girlfriend",
   "студентка": "student (woman)",
   "тоже": "also",
   "пенсионеры": "pensioners",
   "добрая": "kind",
   "строгий": "strict",
   "добрый": "kind",
   "но": "but",
   "очень": "very"
  },
  "keywords": [
   {
    "rus": "журналист",
    "eng": "journalist"
   },
   {
    "rus": "инженер",
    "eng": "engineer"
   },
   {
    "rus": "школьник",
    "eng": "schoolboy"
   },
   {
    "rus": "пенсионер",
    "eng": "pensioner"
   },
   {
    "rus": "младший брат",
    "eng": "younger brother"
   },
   {
    "rus": "девушка",
    "eng": "girlfriend"
   }
  ],
  "questions": [
   {
    "q": "What does Sasha's mum do?",
    "opts": [
     "She's a journalist.",
     "She's an engineer.",
     "She's a student.",
     "She's a pensioner."
    ],
    "a": 0
   },
   {
    "q": "What does Sasha's dad do?",
    "opts": [
     "He's an engineer.",
     "He's a journalist.",
     "He's a lawyer.",
     "He's a teacher."
    ],
    "a": 0
   },
   {
    "q": "Sasha has an older brother.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Кто Сеня?",
    "opts": [
     "школьник",
     "студент",
     "инженер",
     "пенсионер"
    ],
    "a": 0
   },
   {
    "q": "Кто Соня?",
    "opts": [
     "девушка Саши",
     "сестра Саши",
     "мама Саши",
     "бабушка Саши"
    ],
    "a": 0
   },
   {
    "q": "Sasha's grandparents still work.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Какой дедушка?",
    "opts": [
     "строгий, но добрый",
     "весёлый и молодой",
     "маленький и умный",
     "строгий и злой"
    ],
    "a": 0
   },
   {
    "q": "Какие родители Саши?",
    "opts": [
     "молодые и весёлые",
     "пожилые и строгие",
     "старые и добрые"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "kvartira",
  "topic": "prilag",
  "title": "Новая квартира",
  "difficulty": "Tom's story, part 4",
  "intro": "Katya shows Tom her new flat. К = Катя, Т = Том.",
  "dialogue": [
   {
    "speaker": "К",
    "text": "Вот моя новая квартира!"
   },
   {
    "speaker": "Т",
    "text": "Какая большая!"
   },
   {
    "speaker": "К",
    "text": "Нет, она маленькая, но светлая. Вот комната."
   },
   {
    "speaker": "Т",
    "text": "А это что?"
   },
   {
    "speaker": "К",
    "text": "Это кухня. Она маленькая, но тёплая."
   },
   {
    "speaker": "Т",
    "text": "А где окно?"
   },
   {
    "speaker": "К",
    "text": "Вот оно."
   },
   {
    "speaker": "Т",
    "text": "Какое большое окно! А там что?"
   },
   {
    "speaker": "К",
    "text": "Там Нева и старая церковь."
   },
   {
    "speaker": "Т",
    "text": "Как красиво! А это кто?"
   },
   {
    "speaker": "К",
    "text": "Это мой кот, Бегемот. Он большой и чёрный."
   },
   {
    "speaker": "Т",
    "text": "И очень умный!"
   }
  ],
  "vocab": {
   "новая": "new",
   "квартира": "flat",
   "какая": "what a…! (with она words)",
   "большая": "big",
   "маленькая": "small",
   "светлая": "bright, full of light",
   "комната": "room",
   "кухня": "kitchen",
   "тёплая": "warm",
   "окно": "window",
   "какое": "what a…! (with оно words)",
   "большое": "big",
   "там": "there",
   "нева": "the Neva (the river in St Petersburg)",
   "старая": "old",
   "церковь": "church",
   "красиво": "beautiful(ly)",
   "кот": "cat (male)",
   "большой": "big",
   "чёрный": "black",
   "умный": "clever",
   "очень": "very",
   "но": "but"
  },
  "keywords": [
   {
    "rus": "квартира",
    "eng": "flat"
   },
   {
    "rus": "светлая",
    "eng": "bright"
   },
   {
    "rus": "кухня",
    "eng": "kitchen"
   },
   {
    "rus": "церковь",
    "eng": "church"
   },
   {
    "rus": "Как красиво!",
    "eng": "How beautiful!"
   }
  ],
  "questions": [
   {
    "q": "Is Katya's flat big?",
    "opts": [
     "No, it's small but bright.",
     "Yes, it's very big.",
     "No, it's small and dark.",
     "It doesn't say."
    ],
    "a": 0
   },
   {
    "q": "Какая кухня?",
    "opts": [
     "маленькая, но тёплая",
     "большая и светлая",
     "старая и холодная",
     "новая и большая"
    ],
    "a": 0
   },
   {
    "q": "What can you see from the window?",
    "opts": [
     "the Neva and an old church",
     "a park and a museum",
     "the station",
     "the sea"
    ],
    "a": 0
   },
   {
    "q": "Какое окно?",
    "opts": [
     "большое",
     "маленькое",
     "старое",
     "новое"
    ],
    "a": 0
   },
   {
    "q": "Кто Бегемот?",
    "opts": [
     "кот Кати",
     "брат Кати",
     "собака Тома",
     "друг Тома"
    ],
    "a": 0
   },
   {
    "q": "Begemot is small and grey.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Tom says Begemot is clever.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "urok",
  "topic": "klass",
  "title": "Урок русского языка",
  "difficulty": "in class",
  "intro": "Thursday evening in class. О = Ольга Петровна, Т = Том, А = Анна.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Четверг, вечер. Это урок русского языка. Преподаватель — Ольга Петровна. Она строгая, но добрая. Студенты — Том, Анна и Джек."
   },
   {
    "speaker": "О",
    "text": "Добрый вечер! Как дела?"
   },
   {
    "speaker": "Т",
    "text": "Хорошо, спасибо. А у вас?"
   },
   {
    "speaker": "О",
    "text": "Тоже хорошо. Том, что это?"
   },
   {
    "speaker": "Т",
    "text": "Это словарь."
   },
   {
    "speaker": "О",
    "text": "Правильно! Какой это словарь?"
   },
   {
    "speaker": "Т",
    "text": "Это русский словарь. Он большой и старый."
   },
   {
    "speaker": "О",
    "text": "Молодец! Анна, а это что?"
   },
   {
    "speaker": "А",
    "text": "Извините, я не знаю."
   },
   {
    "speaker": "О",
    "text": "Это тетрадь. Она синяя."
   },
   {
    "speaker": "А",
    "text": "Повторите, пожалуйста."
   },
   {
    "speaker": "О",
    "text": "Синяя тетрадь."
   },
   {
    "speaker": "А",
    "text": "Синяя тетрадь. Спасибо!"
   },
   {
    "speaker": "О",
    "text": "Пожалуйста. Домашнее задание — страница десять."
   },
   {
    "speaker": "Т",
    "text": "Это трудное задание?"
   },
   {
    "speaker": "О",
    "text": "Нет, лёгкое!"
   }
  ],
  "vocab": {
   "четверг": "Thursday",
   "вечер": "evening",
   "урок": "lesson",
   "русского": "Russian (урок русского языка — Russian lesson)",
   "языка": "language",
   "преподаватель": "teacher",
   "строгая": "strict",
   "добрая": "kind",
   "студенты": "students",
   "словарь": "dictionary",
   "правильно": "correct",
   "какой": "what kind of",
   "русский": "Russian",
   "большой": "big",
   "старый": "old",
   "молодец": "well done",
   "извините": "sorry, excuse me",
   "знаю": "I know",
   "тетрадь": "exercise book",
   "синяя": "dark blue",
   "повторите": "repeat",
   "домашнее": "home (домашнее задание — homework)",
   "задание": "task",
   "страница": "page",
   "трудное": "difficult",
   "лёгкое": "easy"
  },
  "keywords": [
   {
    "rus": "урок",
    "eng": "lesson"
   },
   {
    "rus": "словарь",
    "eng": "dictionary"
   },
   {
    "rus": "тетрадь",
    "eng": "exercise book"
   },
   {
    "rus": "домашнее задание",
    "eng": "homework"
   },
   {
    "rus": "трудный ↔ лёгкий",
    "eng": "difficult ↔ easy"
   }
  ],
  "questions": [
   {
    "q": "When is the lesson?",
    "opts": [
     "Thursday evening",
     "Monday morning",
     "Thursday morning",
     "Friday evening"
    ],
    "a": 0
   },
   {
    "q": "Какая Ольга Петровна?",
    "opts": [
     "строгая, но добрая",
     "молодая и весёлая",
     "строгая и злая",
     "добрая и весёлая"
    ],
    "a": 0
   },
   {
    "q": "Какой словарь?",
    "opts": [
     "большой и старый",
     "маленький и новый",
     "большой и новый",
     "английский"
    ],
    "a": 0
   },
   {
    "q": "Anna knows the word for exercise book.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "What colour is the exercise book?",
    "opts": [
     "dark blue",
     "green",
     "red",
     "black"
    ],
    "a": 0
   },
   {
    "q": "Where is the homework?",
    "opts": [
     "page 10",
     "page 12",
     "page 2",
     "page 20"
    ],
    "a": 0
   },
   {
    "q": "Is the homework difficult?",
    "opts": [
     "No, it's easy.",
     "Yes, very.",
     "It doesn't say."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "obed",
  "topic": "kafe",
  "title": "Обед в кафе",
  "difficulty": "Tom's story, part 5",
  "intro": "Tom and Katya have lunch. О = официант, К = Катя, Т = Том.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Это кафе «Самовар». Кафе маленькое, но очень хорошее."
   },
   {
    "speaker": "О",
    "text": "Добрый день! Вот меню."
   },
   {
    "speaker": "К",
    "text": "Спасибо. Том, что ты будешь?"
   },
   {
    "speaker": "Т",
    "text": "Я буду борщ. Он горячий?"
   },
   {
    "speaker": "О",
    "text": "Да, горячий и очень вкусный."
   },
   {
    "speaker": "К",
    "text": "А я буду салат и чёрный чай."
   },
   {
    "speaker": "О",
    "text": "С сахаром?"
   },
   {
    "speaker": "К",
    "text": "Нет, с лимоном."
   },
   {
    "speaker": "Т",
    "text": "А мне — кофе, пожалуйста. Большой."
   },
   {
    "speaker": "О",
    "text": "Хорошо."
   },
   {
    "speaker": "",
    "text": "Потом."
   },
   {
    "speaker": "Т",
    "text": "Счёт, пожалуйста."
   },
   {
    "speaker": "О",
    "text": "Вот, пожалуйста. Восемьсот рублей."
   },
   {
    "speaker": "Т",
    "text": "Можно картой?"
   },
   {
    "speaker": "О",
    "text": "Да, конечно."
   },
   {
    "speaker": "К",
    "text": "Спасибо, Том!"
   }
  ],
  "vocab": {
   "кафе": "café",
   "маленькое": "small",
   "хорошее": "good",
   "меню": "menu",
   "будешь": "will you have",
   "буду": "I'll have",
   "борщ": "borscht (beetroot soup)",
   "горячий": "hot",
   "вкусный": "tasty",
   "салат": "salad",
   "чёрный": "black",
   "чай": "tea",
   "сахаром": "sugar (с сахаром — with sugar)",
   "лимоном": "lemon (с лимоном — with lemon)",
   "мне": "for me",
   "большой": "big",
   "потом": "later",
   "счёт": "the bill",
   "восемьсот": "eight hundred",
   "рублей": "roubles",
   "можно": "can I…?",
   "картой": "by card",
   "конечно": "of course",
   "очень": "very",
   "но": "but"
  },
  "keywords": [
   {
    "rus": "Я буду…",
    "eng": "I'll have…"
   },
   {
    "rus": "горячий",
    "eng": "hot"
   },
   {
    "rus": "вкусный",
    "eng": "tasty"
   },
   {
    "rus": "Счёт, пожалуйста.",
    "eng": "The bill, please."
   },
   {
    "rus": "Можно картой?",
    "eng": "Can I pay by card?"
   }
  ],
  "questions": [
   {
    "q": "What does Tom order to eat?",
    "opts": [
     "borscht",
     "salad",
     "pancakes",
     "fish"
    ],
    "a": 0
   },
   {
    "q": "Is the borscht hot?",
    "opts": [
     "Yes, hot and very tasty.",
     "No, it's cold.",
     "It doesn't say."
    ],
    "a": 0
   },
   {
    "q": "How does Katya have her tea?",
    "opts": [
     "black, with lemon",
     "black, with sugar",
     "green, with lemon",
     "with milk"
    ],
    "a": 0
   },
   {
    "q": "Tom wants a small coffee.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Сколько стоит обед?",
    "opts": [
     "800 ₽",
     "180 ₽",
     "80 ₽",
     "8 000 ₽"
    ],
    "a": 0
   },
   {
    "q": "Tom pays by card.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "Какое кафе?",
    "opts": [
     "маленькое, но хорошее",
     "большое и дорогое",
     "новое и шумное"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sheffield",
  "topic": "strany",
  "title": "Мой город",
  "difficulty": "countries and cities",
  "intro": "Anna writes about where she lives.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Меня зовут Анна. Я англичанка. Я живу в Шеффилде. Шеффилд — большой город. Он не очень старый, но красивый и зелёный. Тут есть парки, музеи и университет."
   },
   {
    "speaker": "",
    "text": "Мой брат живёт в Лондоне. Лондон — столица. Это большой и шумный город."
   },
   {
    "speaker": "",
    "text": "Моя подруга Джулия — итальянка. Она из Неаполя. Неаполь — старый и красивый город. Там тёплое море и очень вкусная пицца!"
   },
   {
    "speaker": "",
    "text": "Я говорю по-английски и немного по-итальянски. А сейчас я учу русский язык. Русский язык трудный, но интересный."
   }
  ],
  "vocab": {
   "англичанка": "Englishwoman",
   "живу": "I live",
   "шеффилде": "Sheffield (в Шеффилде — in Sheffield)",
   "большой": "big",
   "город": "town, city",
   "старый": "old",
   "красивый": "beautiful",
   "зелёный": "green",
   "тут": "here",
   "есть": "there is/are",
   "парки": "parks",
   "музеи": "museums",
   "университет": "university",
   "живёт": "lives",
   "лондоне": "London (в Лондоне — in London)",
   "столица": "capital",
   "шумный": "noisy",
   "подруга": "friend (woman)",
   "итальянка": "Italian woman",
   "неаполя": "Naples (из Неаполя — from Naples)",
   "там": "there",
   "тёплое": "warm",
   "море": "sea",
   "вкусная": "tasty",
   "говорю": "I speak",
   "по-английски": "in English",
   "немного": "a little",
   "по-итальянски": "in Italian",
   "сейчас": "now",
   "учу": "I'm learning",
   "русский": "Russian",
   "язык": "language",
   "трудный": "difficult",
   "интересный": "interesting",
   "очень": "very",
   "но": "but"
  },
  "keywords": [
   {
    "rus": "Я живу в…",
    "eng": "I live in…"
   },
   {
    "rus": "столица",
    "eng": "capital"
   },
   {
    "rus": "Она из…",
    "eng": "She's from…"
   },
   {
    "rus": "по-английски",
    "eng": "in English"
   },
   {
    "rus": "трудный, но интересный",
    "eng": "difficult but interesting"
   }
  ],
  "questions": [
   {
    "q": "Где живёт Анна?",
    "opts": [
     "в Шеффилде",
     "в Лондоне",
     "в Неаполе",
     "в Москве"
    ],
    "a": 0
   },
   {
    "q": "Какой Шеффилд?",
    "opts": [
     "большой, красивый и зелёный",
     "маленький и старый",
     "большой и шумный",
     "старый и серый"
    ],
    "a": 0
   },
   {
    "q": "Anna's brother lives in London.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "Откуда Джулия?",
    "opts": [
     "из Неаполя",
     "из Рима",
     "из Лондона",
     "из Шеффилда"
    ],
    "a": 0
   },
   {
    "q": "What is there in Naples, according to Anna?",
    "opts": [
     "a warm sea and tasty pizza",
     "a big university",
     "a cold sea",
     "a new museum"
    ],
    "a": 0
   },
   {
    "q": "Anna speaks Italian very well.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Какой русский язык?",
    "opts": [
     "трудный, но интересный",
     "лёгкий и интересный",
     "трудный и скучный"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "pogoda",
  "topic": "dni",
  "title": "Какая у вас погода?",
  "difficulty": "days and seasons",
  "intro": "Tom (in Sheffield) phones Katya (in Moscow). Т = Том, К = Катя.",
  "dialogue": [
   {
    "speaker": "Т",
    "text": "Привет, Катя! Как дела?"
   },
   {
    "speaker": "К",
    "text": "Хорошо! А у тебя?"
   },
   {
    "speaker": "Т",
    "text": "Нормально. Какая у вас погода?"
   },
   {
    "speaker": "К",
    "text": "Сегодня холодно. Минус десять. Зима!"
   },
   {
    "speaker": "Т",
    "text": "Минус десять! А у нас плюс пять и дождь."
   },
   {
    "speaker": "К",
    "text": "Дождь в ноябре? Скучно!"
   },
   {
    "speaker": "Т",
    "text": "Да. Я не люблю ноябрь. Я люблю лето."
   },
   {
    "speaker": "К",
    "text": "А я люблю зиму. Русская зима очень красивая: белый снег и голубое небо."
   },
   {
    "speaker": "Т",
    "text": "А какой сегодня день?"
   },
   {
    "speaker": "К",
    "text": "Сегодня пятница. До завтра?"
   },
   {
    "speaker": "Т",
    "text": "Нет, до понедельника! Пока!"
   }
  ],
  "vocab": {
   "погода": "weather",
   "сегодня": "today",
   "холодно": "it's cold",
   "минус": "minus",
   "десять": "ten",
   "зима": "winter",
   "плюс": "plus",
   "пять": "five",
   "дождь": "rain",
   "ноябре": "November (в ноябре — in November)",
   "скучно": "how boring",
   "люблю": "I love, I like",
   "ноябрь": "November",
   "лето": "summer",
   "зиму": "winter (я люблю зиму)",
   "русская": "Russian",
   "красивая": "beautiful",
   "белый": "white",
   "снег": "snow",
   "голубое": "light blue",
   "небо": "sky",
   "день": "day",
   "пятница": "Friday",
   "завтра": "tomorrow",
   "понедельника": "Monday (до понедельника — till Monday)",
   "очень": "very"
  },
  "keywords": [
   {
    "rus": "Какая погода?",
    "eng": "What's the weather like?"
   },
   {
    "rus": "холодно",
    "eng": "it's cold"
   },
   {
    "rus": "дождь",
    "eng": "rain"
   },
   {
    "rus": "снег",
    "eng": "snow"
   },
   {
    "rus": "До понедельника!",
    "eng": "See you Monday!"
   }
  ],
  "questions": [
   {
    "q": "Какая погода в Москве?",
    "opts": [
     "холодно, минус десять",
     "плюс пять и дождь",
     "тепло, плюс десять",
     "холодно, минус пять"
    ],
    "a": 0
   },
   {
    "q": "What's the weather like in Sheffield?",
    "opts": [
     "plus five and rain",
     "minus ten and snow",
     "warm and sunny",
     "minus five"
    ],
    "a": 0
   },
   {
    "q": "Tom likes November.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Какое время года любит Том?",
    "opts": [
     "лето",
     "зиму",
     "осень",
     "весну"
    ],
    "a": 0
   },
   {
    "q": "Katya loves winter.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "Какой сегодня день?",
    "opts": [
     "пятница",
     "понедельник",
     "суббота",
     "четверг"
    ],
    "a": 0
   },
   {
    "q": "When will they speak again?",
    "opts": [
     "on Monday",
     "tomorrow",
     "on Thursday",
     "next month"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "rynok",
  "topic": "chisla",
  "title": "На рынке",
  "difficulty": "numbers and prices",
  "intro": "Tom buys fruit and vegetables. П = продавец (the stallholder), Т = Том.",
  "dialogue": [
   {
    "speaker": "Т",
    "text": "Здравствуйте! Сколько стоят яблоки?"
   },
   {
    "speaker": "П",
    "text": "Сто двадцать рублей."
   },
   {
    "speaker": "Т",
    "text": "А помидоры?"
   },
   {
    "speaker": "П",
    "text": "Двести рублей. Они свежие и очень вкусные!"
   },
   {
    "speaker": "Т",
    "text": "Хорошо. Яблоки и помидоры, пожалуйста."
   },
   {
    "speaker": "П",
    "text": "Что-нибудь ещё?"
   },
   {
    "speaker": "Т",
    "text": "Да. Сколько стоит этот сыр?"
   },
   {
    "speaker": "П",
    "text": "Четыреста пятьдесят рублей."
   },
   {
    "speaker": "Т",
    "text": "Ой, дорогой! Нет, спасибо."
   },
   {
    "speaker": "П",
    "text": "Итак: яблоки и помидоры — триста двадцать рублей."
   },
   {
    "speaker": "Т",
    "text": "Вот, пожалуйста. Пятьсот рублей."
   },
   {
    "speaker": "П",
    "text": "Спасибо. Ваша сдача — сто восемьдесят рублей. Всего хорошего!"
   }
  ],
  "vocab": {
   "сколько": "how much",
   "стоят": "cost",
   "стоит": "costs",
   "яблоки": "apples",
   "сто": "a hundred",
   "двадцать": "twenty",
   "рублей": "roubles",
   "помидоры": "tomatoes",
   "двести": "two hundred",
   "свежие": "fresh",
   "вкусные": "tasty",
   "что-нибудь": "anything",
   "ещё": "else, more",
   "этот": "this",
   "сыр": "cheese",
   "четыреста": "four hundred",
   "пятьдесят": "fifty",
   "дорогой": "expensive",
   "итак": "so",
   "триста": "three hundred",
   "пятьсот": "five hundred",
   "сдача": "change (money)",
   "восемьдесят": "eighty",
   "ваша": "your",
   "очень": "very"
  },
  "keywords": [
   {
    "rus": "Сколько стоит…?",
    "eng": "How much is…?"
   },
   {
    "rus": "Что-нибудь ещё?",
    "eng": "Anything else?"
   },
   {
    "rus": "дорогой",
    "eng": "expensive"
   },
   {
    "rus": "сдача",
    "eng": "change"
   },
   {
    "rus": "двести, триста, четыреста, пятьсот",
    "eng": "200, 300, 400, 500"
   }
  ],
  "questions": [
   {
    "q": "How much are the apples?",
    "opts": [
     "120 ₽",
     "200 ₽",
     "320 ₽",
     "102 ₽"
    ],
    "a": 0
   },
   {
    "q": "Сколько стоят помидоры?",
    "opts": [
     "200 ₽",
     "120 ₽",
     "450 ₽",
     "180 ₽"
    ],
    "a": 0
   },
   {
    "q": "Какие помидоры?",
    "opts": [
     "свежие и вкусные",
     "старые и дешёвые",
     "большие и дорогие"
    ],
    "a": 0
   },
   {
    "q": "Tom buys the cheese.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Why doesn't he buy the cheese?",
    "opts": [
     "It's expensive.",
     "It isn't fresh.",
     "He doesn't like cheese.",
     "They have none."
    ],
    "a": 0
   },
   {
    "q": "How much is Tom's change?",
    "opts": [
     "180 ₽",
     "320 ₽",
     "500 ₽",
     "80 ₽"
    ],
    "a": 0
   },
   {
    "q": "How much does Tom pay in all?",
    "opts": [
     "320 ₽",
     "500 ₽",
     "770 ₽",
     "450 ₽"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "sumka",
  "topic": "cveta",
  "title": "Что в сумке?",
  "difficulty": "colours",
  "intro": "Katya empties her bag.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Это моя сумка. Она большая и коричневая. Что в сумке? Вот красная ручка, синяя тетрадь и жёлтый карандаш."
   },
   {
    "speaker": "",
    "text": "Вот мой телефон. Он новый и чёрный. А это книга. Она зелёная и очень интересная."
   },
   {
    "speaker": "",
    "text": "Вот зелёное яблоко и белая чашка. А где мой ключ? Вот он! Маленький и серый."
   },
   {
    "speaker": "",
    "text": "А это что? Розовые очки! Это очки сестры. Её зовут Маша."
   }
  ],
  "vocab": {
   "сумка": "bag",
   "сумке": "bag (в сумке — in the bag)",
   "большая": "big",
   "коричневая": "brown",
   "красная": "red",
   "ручка": "pen",
   "синяя": "dark blue",
   "тетрадь": "exercise book",
   "жёлтый": "yellow",
   "карандаш": "pencil",
   "телефон": "phone",
   "новый": "new",
   "чёрный": "black",
   "книга": "book",
   "зелёная": "green",
   "интересная": "interesting",
   "зелёное": "green",
   "яблоко": "apple",
   "белая": "white",
   "чашка": "cup",
   "ключ": "key",
   "маленький": "small",
   "серый": "grey",
   "розовые": "pink",
   "очки": "glasses",
   "сестры": "sister's (очки сестры — my sister's glasses)",
   "очень": "very"
  },
  "keywords": [
   {
    "rus": "коричневый",
    "eng": "brown"
   },
   {
    "rus": "синий",
    "eng": "dark blue"
   },
   {
    "rus": "жёлтый",
    "eng": "yellow"
   },
   {
    "rus": "серый",
    "eng": "grey"
   },
   {
    "rus": "розовый",
    "eng": "pink"
   }
  ],
  "questions": [
   {
    "q": "Какая сумка?",
    "opts": [
     "большая и коричневая",
     "маленькая и чёрная",
     "большая и красная",
     "новая и белая"
    ],
    "a": 0
   },
   {
    "q": "What colour is the pen?",
    "opts": [
     "red",
     "dark blue",
     "yellow",
     "black"
    ],
    "a": 0
   },
   {
    "q": "Какой телефон?",
    "opts": [
     "новый и чёрный",
     "старый и чёрный",
     "новый и белый",
     "маленький и серый"
    ],
    "a": 0
   },
   {
    "q": "The book is boring.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Какое яблоко?",
    "opts": [
     "зелёное",
     "красное",
     "жёлтое",
     "белое"
    ],
    "a": 0
   },
   {
    "q": "Какой ключ?",
    "opts": [
     "маленький и серый",
     "большой и жёлтый",
     "новый и чёрный"
    ],
    "a": 0
   },
   {
    "q": "Whose are the pink glasses?",
    "opts": [
     "her sister's",
     "Katya's",
     "Tom's",
     "her mum's"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "vecherinka",
  "topic": "znakom",
  "title": "На вечеринке",
  "difficulty": "meeting people",
  "intro": "Jack meets someone at a party. Д = Джек, М = Марко.",
  "dialogue": [
   {
    "speaker": "Д",
    "text": "Привет! Как тебя зовут?"
   },
   {
    "speaker": "М",
    "text": "Меня зовут Марко. А тебя?"
   },
   {
    "speaker": "Д",
    "text": "Я Джек. Очень приятно!"
   },
   {
    "speaker": "М",
    "text": "Мне тоже. Ты откуда, Джек?"
   },
   {
    "speaker": "Д",
    "text": "Я из Англии, из Шеффилда. А ты?"
   },
   {
    "speaker": "М",
    "text": "Я итальянец. Я из Рима."
   },
   {
    "speaker": "Д",
    "text": "Рим — красивый город! Ты студент?"
   },
   {
    "speaker": "М",
    "text": "Да, я студент. А ты?"
   },
   {
    "speaker": "Д",
    "text": "Нет, я инженер."
   },
   {
    "speaker": "М",
    "text": "А это кто?"
   },
   {
    "speaker": "Д",
    "text": "Это моя подруга Анна. Она англичанка. Она учит русский язык."
   },
   {
    "speaker": "М",
    "text": "Правда? Я тоже!"
   },
   {
    "speaker": "Д",
    "text": "Анна, это Марко. Он итальянец и тоже учит русский."
   }
  ],
  "vocab": {
   "тебя": "you (а тебя? — and you?)",
   "очень": "very",
   "приятно": "pleasant (очень приятно — nice to meet you)",
   "мне": "to me (мне тоже — me too)",
   "тоже": "also",
   "откуда": "where from",
   "англии": "England (из Англии — from England)",
   "шеффилда": "Sheffield (из Шеффилда — from Sheffield)",
   "итальянец": "Italian man",
   "рима": "Rome (из Рима — from Rome)",
   "рим": "Rome",
   "красивый": "beautiful",
   "город": "city",
   "студент": "student",
   "инженер": "engineer",
   "подруга": "friend (woman)",
   "англичанка": "Englishwoman",
   "учит": "is learning",
   "русский": "Russian",
   "язык": "language",
   "правда": "really"
  },
  "keywords": [
   {
    "rus": "Ты откуда?",
    "eng": "Where are you from?"
   },
   {
    "rus": "Я из…",
    "eng": "I'm from…"
   },
   {
    "rus": "итальянец / итальянка",
    "eng": "Italian (man / woman)"
   },
   {
    "rus": "Мне тоже.",
    "eng": "Me too."
   }
  ],
  "questions": [
   {
    "q": "Откуда Джек?",
    "opts": [
     "из Шеффилда",
     "из Лондона",
     "из Рима",
     "из Москвы"
    ],
    "a": 0
   },
   {
    "q": "Откуда Марко?",
    "opts": [
     "из Рима",
     "из Неаполя",
     "из Шеффилда",
     "из Милана"
    ],
    "a": 0
   },
   {
    "q": "Jack is a student.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Кто Джек?",
    "opts": [
     "инженер",
     "студент",
     "журналист",
     "преподаватель"
    ],
    "a": 0
   },
   {
    "q": "Who is Anna?",
    "opts": [
     "Jack's friend",
     "Jack's sister",
     "Marco's sister",
     "the teacher"
    ],
    "a": 0
   },
   {
    "q": "Anna and Marco are both learning Russian.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "How does Marco reply to «Очень приятно!»?",
    "opts": [
     "Мне тоже.",
     "Я тоже!",
     "Правда?",
     "Привет!"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "otzyv",
  "topic": "gostinica",
  "title": "Отзыв о гостинице",
  "difficulty": "the hotel",
  "intro": "A guest's review of a hotel in St Petersburg.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Гостиница «Белые ночи». Оценка: 4 из 5."
   },
   {
    "speaker": "",
    "text": "Гостиница маленькая, но хорошая. Номер чистый и тихий. Окно большое, а кровать удобная."
   },
   {
    "speaker": "",
    "text": "Завтрак очень вкусный: горячие блины, сыр, свежий хлеб и чёрный кофе."
   },
   {
    "speaker": "",
    "text": "Администратор молодой и очень добрый. Метро близко. Но интернет плохой, а душ холодный!"
   }
  ],
  "vocab": {
   "отзыв": "review",
   "гостинице": "hotel (о гостинице — about a hotel)",
   "гостиница": "hotel",
   "белые": "white",
   "ночи": "nights",
   "оценка": "rating",
   "из": "out of",
   "маленькая": "small",
   "хорошая": "good",
   "номер": "hotel room",
   "чистый": "clean",
   "тихий": "quiet",
   "окно": "window",
   "большое": "big",
   "кровать": "bed",
   "удобная": "comfortable",
   "завтрак": "breakfast",
   "вкусный": "tasty",
   "горячие": "hot",
   "блины": "pancakes",
   "сыр": "cheese",
   "свежий": "fresh",
   "хлеб": "bread",
   "чёрный": "black",
   "кофе": "coffee",
   "администратор": "receptionist",
   "молодой": "young",
   "добрый": "kind",
   "метро": "metro",
   "близко": "nearby",
   "интернет": "internet",
   "плохой": "bad",
   "душ": "shower",
   "холодный": "cold",
   "очень": "very",
   "но": "but"
  },
  "keywords": [
   {
    "rus": "чистый",
    "eng": "clean"
   },
   {
    "rus": "тихий",
    "eng": "quiet"
   },
   {
    "rus": "удобный",
    "eng": "comfortable"
   },
   {
    "rus": "близко",
    "eng": "nearby"
   },
   {
    "rus": "плохой",
    "eng": "bad"
   }
  ],
  "questions": [
   {
    "q": "What rating does the guest give?",
    "opts": [
     "4 out of 5",
     "5 out of 5",
     "3 out of 5",
     "2 out of 5"
    ],
    "a": 0
   },
   {
    "q": "Какой номер?",
    "opts": [
     "чистый и тихий",
     "большой и шумный",
     "маленький и холодный",
     "старый и грязный"
    ],
    "a": 0
   },
   {
    "q": "Какой завтрак?",
    "opts": [
     "очень вкусный",
     "плохой",
     "холодный",
     "дорогой"
    ],
    "a": 0
   },
   {
    "q": "The receptionist is elderly.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "The metro is a long way away.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "What two things are bad?",
    "opts": [
     "the internet and the shower",
     "the bed and the window",
     "the breakfast and the coffee",
     "the room and the metro"
    ],
    "a": 0
   },
   {
    "q": "Какая кровать?",
    "opts": [
     "удобная",
     "холодная",
     "маленькая",
     "старая"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "bilet",
  "topic": "vokzal",
  "title": "Билет в Москву",
  "difficulty": "the station",
  "intro": "Tom buys a train ticket. К = кассир (the ticket seller), Т = Том.",
  "dialogue": [
   {
    "speaker": "Т",
    "text": "Здравствуйте! Один билет в Москву, пожалуйста."
   },
   {
    "speaker": "К",
    "text": "На сегодня?"
   },
   {
    "speaker": "Т",
    "text": "Нет, на завтра."
   },
   {
    "speaker": "К",
    "text": "Есть поезд утром, в девять тридцать."
   },
   {
    "speaker": "Т",
    "text": "Хорошо. Сколько стоит билет?"
   },
   {
    "speaker": "К",
    "text": "Три тысячи двести рублей."
   },
   {
    "speaker": "Т",
    "text": "Ой, дорогой! А есть дешёвый билет?"
   },
   {
    "speaker": "К",
    "text": "Есть поезд вечером, в восемь. Билет — две тысячи рублей."
   },
   {
    "speaker": "Т",
    "text": "Отлично. Вечером, пожалуйста."
   },
   {
    "speaker": "К",
    "text": "Вагон пять, место четырнадцать. Ваш паспорт, пожалуйста."
   },
   {
    "speaker": "Т",
    "text": "Вот он."
   },
   {
    "speaker": "К",
    "text": "Спасибо. Вот ваш билет. Платформа два. Счастливого пути!"
   }
  ],
  "vocab": {
   "один": "one",
   "билет": "ticket",
   "москву": "Moscow (в Москву — to Moscow)",
   "сегодня": "today",
   "завтра": "tomorrow",
   "есть": "there is",
   "поезд": "train",
   "утром": "in the morning",
   "девять": "nine",
   "тридцать": "thirty",
   "сколько": "how much",
   "стоит": "costs",
   "три": "three",
   "тысячи": "thousand",
   "двести": "two hundred",
   "рублей": "roubles",
   "дорогой": "expensive",
   "дешёвый": "cheap",
   "вечером": "in the evening",
   "восемь": "eight",
   "две": "two",
   "тысяч": "thousand",
   "отлично": "excellent",
   "вагон": "carriage",
   "пять": "five",
   "место": "seat",
   "четырнадцать": "fourteen",
   "ваш": "your",
   "паспорт": "passport",
   "платформа": "platform",
   "счастливого": "happy",
   "пути": "journey (Счастливого пути! — Have a good trip!)"
  },
  "keywords": [
   {
    "rus": "билет в…",
    "eng": "a ticket to…"
   },
   {
    "rus": "утром / вечером",
    "eng": "in the morning / in the evening"
   },
   {
    "rus": "дорогой ↔ дешёвый",
    "eng": "expensive ↔ cheap"
   },
   {
    "rus": "Счастливого пути!",
    "eng": "Have a good trip!"
   }
  ],
  "questions": [
   {
    "q": "Where is Tom going?",
    "opts": [
     "Moscow",
     "St Petersburg",
     "London",
     "Kazan"
    ],
    "a": 0
   },
   {
    "q": "When is he travelling?",
    "opts": [
     "tomorrow",
     "today",
     "on Monday",
     "next week"
    ],
    "a": 0
   },
   {
    "q": "Сколько стоит билет утром?",
    "opts": [
     "3 200 ₽",
     "2 000 ₽",
     "930 ₽",
     "1 425 ₽"
    ],
    "a": 0
   },
   {
    "q": "Tom takes the morning train.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Когда поезд вечером?",
    "opts": [
     "в восемь",
     "в девять тридцать",
     "в пять",
     "в два"
    ],
    "a": 0
   },
   {
    "q": "Which carriage and seat?",
    "opts": [
     "carriage 5, seat 14",
     "carriage 14, seat 5",
     "carriage 2, seat 8",
     "carriage 5, seat 4"
    ],
    "a": 0
   },
   {
    "q": "What does «Счастливого пути!» mean?",
    "opts": [
     "Have a good trip!",
     "Next, please!",
     "Good night!",
     "Here's your ticket."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "metro_conversation",
  "title": "Разговор в метро",
  "difficulty": "easy",
  "intro": "А bumps into his fellow student Б, who has a companion В.",
  "dialogue": [
   {
    "speaker": "А",
    "text": "Здравствуй, Ваня. Куда ты едешь?"
   },
   {
    "speaker": "Б",
    "text": "Домой, на улицу Волгина. А ты едешь в университет?"
   },
   {
    "speaker": "А",
    "text": "Нет, я тоже еду домой. Я теперь живу на улице Вавилова."
   },
   {
    "speaker": "Б",
    "text": "Познакомьтесь. Это моя подруга Мари, она англичанка."
   },
   {
    "speaker": "В",
    "text": "Здравствуйте, Миша."
   },
   {
    "speaker": "А",
    "text": "Простите, вас зовут Мэри?"
   },
   {
    "speaker": "В",
    "text": "Нет, Мари. Это французское имя. Но я не говорю по-французски."
   }
  ],
  "vocab": {
   "здравствуй": "hello (informal)",
   "куда": "where to?",
   "едешь": "you are going",
   "домой": "home",
   "улицу": "street (acc.)",
   "университет": "university",
   "тоже": "also / too",
   "еду": "I am going",
   "теперь": "now",
   "живу": "I live",
   "улице": "street (prep.)",
   "познакомьтесь": "let me introduce you",
   "моя": "my",
   "подруга": "female friend",
   "англичанка": "Englishwoman",
   "простите": "excuse me",
   "зовут": "they call (name)",
   "французское": "French",
   "имя": "name",
   "говорю": "I speak",
   "по-французски": "in French"
  },
  "keywords": [
   {
    "rus": "куда",
    "eng": "where to?"
   },
   {
    "rus": "домой",
    "eng": "home (direction)"
   },
   {
    "rus": "улица",
    "eng": "street"
   },
   {
    "rus": "подруга",
    "eng": "female friend"
   },
   {
    "rus": "англичанка",
    "eng": "Englishwoman"
   },
   {
    "rus": "имя",
    "eng": "name"
   },
   {
    "rus": "по-французски",
    "eng": "in French"
   }
  ],
  "questions": [
   {
    "q": "What is the name of А?",
    "opts": [
     "Ваня",
     "Миша",
     "Мари",
     "Борис"
    ],
    "a": 1
   },
   {
    "q": "Where does А now live?",
    "opts": [
     "улица Волгина",
     "улица Вавилова",
     "улица Пушкина",
     "улица Ленина"
    ],
    "a": 1
   },
   {
    "q": "Where is Б going?",
    "opts": [
     "To university",
     "To the shops",
     "Home",
     "To the metro"
    ],
    "a": 2
   },
   {
    "q": "What nationality is В?",
    "opts": [
     "French",
     "Russian",
     "American",
     "English"
    ],
    "a": 3
   },
   {
    "q": "Which language does В say she does not speak?",
    "opts": [
     "Russian",
     "English",
     "French",
     "German"
    ],
    "a": 2
   },
   {
    "q": "What is the name of Б?",
    "opts": [
     "Миша",
     "Ваня",
     "Мари",
     "Наташа"
    ],
    "a": 1
   },
   {
    "q": "Where is Б going home to?",
    "opts": [
     "улица Вавилова",
     "улица Пушкина",
     "улица Волгина",
     "улица Ленина"
    ],
    "a": 2
   },
   {
    "q": "What does В say about her name?",
    "opts": [
     "It is a Russian name",
     "It is a French name",
     "It is an English name",
     "It is a German name"
    ],
    "a": 1
   },
   {
    "q": "Was А going to university?",
    "opts": [
     "Yes",
     "No",
     "He doesn't say",
     "He was already there"
    ],
    "a": 1
   },
   {
    "q": "How does А greet Б at the start?",
    "opts": [
     "Добрый день",
     "Здравствуйте",
     "Привет",
     "Здравствуй"
    ],
    "a": 3
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "restaurant",
  "title": "В ресторане",
  "difficulty": "easy",
  "intro": "Джон (Д), an Englishman visiting Moscow, sits down at a restaurant. Официантка (О) comes to take his order.",
  "dialogue": [
   {
    "speaker": "О",
    "text": "Здравствуйте. Добрый день."
   },
   {
    "speaker": "Д",
    "text": "Здравствуйте. Простите, вы говорите по-английски?"
   },
   {
    "speaker": "О",
    "text": "Нет, я не говорю по-английски. Вы говорите по-русски?"
   },
   {
    "speaker": "Д",
    "text": "Да, немного. Где меню, пожалуйста?"
   },
   {
    "speaker": "О",
    "text": "Вот меню."
   },
   {
    "speaker": "Д",
    "text": "Спасибо. Это борщ?"
   },
   {
    "speaker": "О",
    "text": "Да, это борщ. Со сметаной."
   },
   {
    "speaker": "Д",
    "text": "Хорошо. Борщ, пожалуйста. И вино. Белое вино есть?"
   },
   {
    "speaker": "О",
    "text": "Да, есть. Пожалуйста."
   },
   {
    "speaker": "Д",
    "text": "Спасибо!"
   }
  ],
  "vocab": {
   "добрый": "good",
   "день": "day",
   "говорите": "you speak",
   "по-английски": "in English",
   "по-русски": "in Russian",
   "немного": "a little",
   "меню": "menu",
   "борщ": "beetroot soup",
   "со": "with",
   "сметаной": "sour cream (instr.)",
   "хорошо": "good / fine",
   "белое": "white",
   "вино": "wine",
   "есть": "there is / is available"
  },
  "keywords": [
   {
    "rus": "немного",
    "eng": "a little"
   },
   {
    "rus": "меню",
    "eng": "menu"
   },
   {
    "rus": "борщ",
    "eng": "beetroot soup"
   },
   {
    "rus": "сметана",
    "eng": "sour cream"
   },
   {
    "rus": "белое вино",
    "eng": "white wine"
   },
   {
    "rus": "есть",
    "eng": "there is / is available"
   }
  ],
  "questions": [
   {
    "q": "What nationality is Джон?",
    "opts": [
     "American",
     "French",
     "English",
     "Australian"
    ],
    "a": 2
   },
   {
    "q": "Does the waitress speak English?",
    "opts": [
     "Yes, a little",
     "Yes, very well",
     "No",
     "She doesn't say"
    ],
    "a": 2
   },
   {
    "q": "What food does Джон order?",
    "opts": [
     "Салат",
     "Борщ",
     "Шоколад",
     "Сметана"
    ],
    "a": 1
   },
   {
    "q": "What does Джон ask about the dish before ordering?",
    "opts": [
     "Whether it is fresh",
     "Whether it is expensive",
     "Whether it is borsch",
     "Whether it comes with bread"
    ],
    "a": 2
   },
   {
    "q": "What does Джон drink with his meal?",
    "opts": [
     "Чай",
     "Водка",
     "Пиво",
     "Вино"
    ],
    "a": 3
   },
   {
    "q": "Does the борщ come with something?",
    "opts": [
     "Хлеб",
     "Сахар",
     "Сметана",
     "Шоколад"
    ],
    "a": 2
   },
   {
    "q": "How does Джон describe his Russian?",
    "opts": [
     "Very good",
     "A little",
     "Not at all",
     "Only reading"
    ],
    "a": 1
   },
   {
    "q": "What colour wine does Джон ask for?",
    "opts": [
     "Red",
     "White",
     "Rosé",
     "He doesn't specify"
    ],
    "a": 1
   },
   {
    "q": "What does Джон ask for before ordering food?",
    "opts": [
     "Water",
     "The bill",
     "The menu",
     "A table"
    ],
    "a": 2
   },
   {
    "q": "How does the waitress greet Джон?",
    "opts": [
     "Привет",
     "Здравствуй",
     "Добрый день",
     "До свидания"
    ],
    "a": 2
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "hotel",
  "title": "В гостинице",
  "difficulty": "easy",
  "intro": "Лука (Л), a Neapolitan visiting Moscow, arrives at his hotel. Администратор (А) is at the desk.",
  "dialogue": [
   {
    "speaker": "Л",
    "text": "Здравствуйте. Меня зовут Лука. Я живу в Неаполе."
   },
   {
    "speaker": "А",
    "text": "Здравствуйте. Вы говорите по-русски?"
   },
   {
    "speaker": "Л",
    "text": "Да, немного. Я изучаю русский язык."
   },
   {
    "speaker": "А",
    "text": "Хорошо! Вы говорите по-русски очень хорошо."
   },
   {
    "speaker": "Л",
    "text": "Спасибо! Простите, где метро?"
   },
   {
    "speaker": "А",
    "text": "Метро? Вот. Прямо и направо."
   },
   {
    "speaker": "Л",
    "text": "А автобус тоже там?"
   },
   {
    "speaker": "А",
    "text": "Да, автобус и троллейбус."
   },
   {
    "speaker": "Л",
    "text": "Отлично. Спасибо!"
   },
   {
    "speaker": "А",
    "text": "Пожалуйста. До свидания!"
   }
  ],
  "vocab": {
   "меня": "me (acc.)",
   "зовут": "they call (name)",
   "живу": "I live",
   "говорите": "you speak",
   "по-русски": "in Russian",
   "немного": "a little",
   "изучаю": "I am studying",
   "русский": "Russian",
   "язык": "language",
   "очень": "very",
   "метро": "metro",
   "прямо": "straight on",
   "направо": "to the right",
   "автобус": "bus",
   "тоже": "also",
   "там": "there",
   "троллейбус": "trolleybus",
   "отлично": "excellent"
  },
  "keywords": [
   {
    "rus": "изучаю",
    "eng": "I am studying"
   },
   {
    "rus": "язык",
    "eng": "language"
   },
   {
    "rus": "прямо",
    "eng": "straight on"
   },
   {
    "rus": "направо",
    "eng": "to the right"
   },
   {
    "rus": "троллейбус",
    "eng": "trolleybus"
   },
   {
    "rus": "отлично",
    "eng": "excellent"
   }
  ],
  "questions": [
   {
    "q": "Where is Лука from?",
    "opts": [
     "Rome",
     "Milan",
     "Naples",
     "Turin"
    ],
    "a": 2
   },
   {
    "q": "Why does Лука speak some Russian?",
    "opts": [
     "He has a Russian wife",
     "He is studying Russian",
     "He lived in Moscow",
     "He doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What does the administrator say about Лука's Russian?",
    "opts": [
     "It needs improvement",
     "It is very good",
     "It is a little strange",
     "It is bad"
    ],
    "a": 1
   },
   {
    "q": "What does Лука ask the administrator to help him find?",
    "opts": [
     "A restaurant",
     "A taxi",
     "The metro",
     "The post office"
    ],
    "a": 2
   },
   {
    "q": "How does the administrator direct Лука?",
    "opts": [
     "Left and then straight on",
     "Straight on and turn right",
     "Right and then left",
     "Straight on and turn left"
    ],
    "a": 1
   },
   {
    "q": "Is there a bus stop near the metro?",
    "opts": [
     "No",
     "Yes, bus and trolleybus",
     "Yes, bus only",
     "He doesn't ask"
    ],
    "a": 1
   },
   {
    "q": "Where does Лука normally live?",
    "opts": [
     "In Moscow",
     "In Rome",
     "In Naples",
     "In Milan"
    ],
    "a": 2
   },
   {
    "q": "How does Лука describe his Russian at first?",
    "opts": [
     "Very good",
     "A little",
     "Not at all",
     "Only reading"
    ],
    "a": 1
   },
   {
    "q": "What does the administrator say when Лука thanks him at the end?",
    "opts": [
     "Спасибо",
     "Привет",
     "Пожалуйста",
     "Хорошо"
    ],
    "a": 2
   },
   {
    "q": "Where is Лука speaking from at the start of the conversation?",
    "opts": [
     "A restaurant",
     "A metro station",
     "A hotel",
     "A bus stop"
    ],
    "a": 2
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "belgrade",
  "title": "Юлия в Белграде",
  "difficulty": "easy",
  "intro": "Юлия (Ю), a Russian student, now lives in Belgrade. She speaks to her friend Анна (А) on the phone.",
  "dialogue": [
   {
    "speaker": "А",
    "text": "Привет, Юля! Где ты теперь живёшь?"
   },
   {
    "speaker": "Ю",
    "text": "Привет, Аня! Я теперь живу в Белграде."
   },
   {
    "speaker": "А",
    "text": "В Белграде? Это в Сербии?"
   },
   {
    "speaker": "Ю",
    "text": "Да, в Сербии. Белград — красивый город."
   },
   {
    "speaker": "А",
    "text": "Ты говоришь по-сербски?"
   },
   {
    "speaker": "Ю",
    "text": "Немного. Но я понимаю, потому что я говорю по-русски."
   },
   {
    "speaker": "А",
    "text": "Ты едешь домой в Москву?"
   },
   {
    "speaker": "Ю",
    "text": "Нет, я не еду. Я изучаю язык здесь."
   },
   {
    "speaker": "А",
    "text": "Понятно. До свидания, Юля!"
   },
   {
    "speaker": "Ю",
    "text": "До свидания, Аня!"
   }
  ],
  "vocab": {
   "теперь": "now",
   "живёшь": "you live",
   "живу": "I live",
   "Белград": "Belgrade",
   "Сербии": "Serbia (prep.)",
   "красивый": "beautiful",
   "город": "city / town",
   "говоришь": "you speak",
   "по-сербски": "in Serbian",
   "немного": "a little",
   "понимаю": "I understand",
   "потому что": "because",
   "по-русски": "in Russian",
   "едешь": "you are going",
   "домой": "home",
   "изучаю": "I am studying",
   "язык": "language",
   "здесь": "here",
   "понятно": "I see / understood"
  },
  "keywords": [
   {
    "rus": "красивый",
    "eng": "beautiful"
   },
   {
    "rus": "город",
    "eng": "city / town"
   },
   {
    "rus": "по-сербски",
    "eng": "in Serbian"
   },
   {
    "rus": "потому что",
    "eng": "because"
   },
   {
    "rus": "понятно",
    "eng": "I see / understood"
   },
   {
    "rus": "здесь",
    "eng": "here"
   }
  ],
  "questions": [
   {
    "q": "Where does Юлия now live?",
    "opts": [
     "Moscow",
     "Warsaw",
     "Belgrade",
     "Sofia"
    ],
    "a": 2
   },
   {
    "q": "In which country is Belgrade?",
    "opts": [
     "Russia",
     "Serbia",
     "Poland",
     "Bulgaria"
    ],
    "a": 1
   },
   {
    "q": "Does Юлия speak Serbian?",
    "opts": [
     "Yes, very well",
     "A little",
     "Not at all",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Why does Юлия understand Serbian?",
    "opts": [
     "She studied it at university",
     "Because she speaks Russian",
     "She lived in Serbia before",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Is Юлия going back to Moscow?",
    "opts": [
     "Yes, soon",
     "No",
     "She doesn't know",
     "Yes, next week"
    ],
    "a": 1
   },
   {
    "q": "What is Юлия doing in Belgrade?",
    "opts": [
     "Working",
     "Studying the language",
     "Visiting friends",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What does Юлия say about Belgrade?",
    "opts": [
     "It is very big",
     "It is a beautiful city",
     "It is cold",
     "It is expensive"
    ],
    "a": 1
   },
   {
    "q": "What is the name of Юлия's friend?",
    "opts": [
     "Наташа",
     "Мари",
     "Анна",
     "Мэри"
    ],
    "a": 2
   },
   {
    "q": "How are the two friends speaking?",
    "opts": [
     "In person in Moscow",
     "On the phone",
     "By letter",
     "In Belgrade"
    ],
    "a": 1
   },
   {
    "q": "How does Юлия address her friend informally?",
    "opts": [
     "Анна",
     "Аня",
     "Анечка",
     "Аннушка"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "spartak",
  "title": "На стадионе",
  "difficulty": "easy",
  "intro": "Вадим (В) and his friend Борис (Б) are going to watch Spartak Moscow play. They talk on the metro.",
  "dialogue": [
   {
    "speaker": "В",
    "text": "Борис! Привет! Ты едешь на стадион?"
   },
   {
    "speaker": "Б",
    "text": "Да! Спартак играет сегодня. Это матч!"
   },
   {
    "speaker": "В",
    "text": "Я знаю. Спартак — мой любимый клуб."
   },
   {
    "speaker": "Б",
    "text": "И мой тоже! Ты живёшь далеко от стадиона?"
   },
   {
    "speaker": "В",
    "text": "Нет, я живу на улице Волгина. Это близко."
   },
   {
    "speaker": "Б",
    "text": "Хорошо. Я еду на автобусе обычно, но сегодня на метро."
   },
   {
    "speaker": "В",
    "text": "Метро быстрее. Где твой билет?"
   },
   {
    "speaker": "Б",
    "text": "Вот он. А твой?"
   },
   {
    "speaker": "В",
    "text": "Вот мой билет. Отлично!"
   },
   {
    "speaker": "Б",
    "text": "Спартак — чемпион!"
   }
  ],
  "vocab": {
   "стадион": "stadium",
   "играет": "is playing",
   "сегодня": "today",
   "матч": "match",
   "знаю": "I know",
   "мой": "my",
   "любимый": "favourite",
   "клуб": "club",
   "тоже": "also / too",
   "живёшь": "you live",
   "далеко": "far",
   "от": "from",
   "близко": "close / nearby",
   "обычно": "usually",
   "быстрее": "faster",
   "твой": "your (informal)",
   "билет": "ticket",
   "отлично": "excellent",
   "чемпион": "champion"
  },
  "keywords": [
   {
    "rus": "стадион",
    "eng": "stadium"
   },
   {
    "rus": "играет",
    "eng": "is playing"
   },
   {
    "rus": "сегодня",
    "eng": "today"
   },
   {
    "rus": "любимый",
    "eng": "favourite"
   },
   {
    "rus": "далеко",
    "eng": "far"
   },
   {
    "rus": "близко",
    "eng": "close / nearby"
   },
   {
    "rus": "обычно",
    "eng": "usually"
   },
   {
    "rus": "билет",
    "eng": "ticket"
   }
  ],
  "questions": [
   {
    "q": "Where are Вадим and Борис going?",
    "opts": [
     "To the cinema",
     "To the restaurant",
     "To the stadium",
     "To the hotel"
    ],
    "a": 2
   },
   {
    "q": "Which football club is playing today?",
    "opts": [
     "Динамо",
     "Спартак",
     "ЦСКА",
     "Локомотив"
    ],
    "a": 1
   },
   {
    "q": "Whose favourite club is Спартак?",
    "opts": [
     "Only Вадим's",
     "Only Борис's",
     "Both of theirs",
     "Neither of theirs"
    ],
    "a": 2
   },
   {
    "q": "Does Вадим live far from the stadium?",
    "opts": [
     "Yes, very far",
     "No, it is close",
     "He doesn't say",
     "He lives in another city"
    ],
    "a": 1
   },
   {
    "q": "How does Борис usually travel to the stadium?",
    "opts": [
     "By metro",
     "By trolleybus",
     "By bus",
     "By taxi"
    ],
    "a": 2
   },
   {
    "q": "How is Борис travelling today?",
    "opts": [
     "By bus",
     "By trolleybus",
     "By metro",
     "On foot"
    ],
    "a": 2
   },
   {
    "q": "What does Вадим say about the metro?",
    "opts": [
     "It is expensive",
     "It is faster",
     "It is far",
     "It is slow"
    ],
    "a": 1
   },
   {
    "q": "What does Борис show Вадим?",
    "opts": [
     "His passport",
     "His ticket",
     "His phone",
     "His metro card"
    ],
    "a": 1
   },
   {
    "q": "What street does Вадим live on?",
    "opts": [
     "улица Вавилова",
     "улица Ленина",
     "улица Волгина",
     "улица Пушкина"
    ],
    "a": 2
   },
   {
    "q": "What does Борис shout at the end?",
    "opts": [
     "Спартак играет!",
     "Спартак — чемпион!",
     "Спартак — клуб!",
     "Спартак — матч!"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "penguin_vokzal",
  "title": "На вокзале",
  "difficulty": "easy",
  "intro": "Анна (А) is at Moscow's Leningradsky station and asks a passerby (Б) for help.",
  "dialogue": [
   {
    "speaker": "А",
    "text": "Простите, пожалуйста. Где здесь касса?"
   },
   {
    "speaker": "Б",
    "text": "Касса? Прямо и налево."
   },
   {
    "speaker": "А",
    "text": "Спасибо. А туалет где?"
   },
   {
    "speaker": "Б",
    "text": "Туалет — направо."
   },
   {
    "speaker": "А",
    "text": "Понятно. А где ресторан? Я не знаю этот вокзал."
   },
   {
    "speaker": "Б",
    "text": "Ресторан? Вон там, налево."
   },
   {
    "speaker": "А",
    "text": "Отлично! Когда работает ресторан?"
   },
   {
    "speaker": "Б",
    "text": "Не знаю. Я думаю, что он работает сейчас."
   },
   {
    "speaker": "А",
    "text": "Спасибо большое!"
   },
   {
    "speaker": "Б",
    "text": "Пожалуйста. До свидания!"
   }
  ],
  "vocab": {
   "простите": "excuse me",
   "пожалуйста": "please / you're welcome",
   "касса": "ticket desk",
   "прямо": "straight on",
   "налево": "to the left",
   "спасибо": "thank you",
   "туалет": "toilet",
   "направо": "to the right",
   "понятно": "I see / understood",
   "ресторан": "restaurant",
   "знаю": "I know",
   "вокзал": "station",
   "отлично": "excellent",
   "когда": "when",
   "работает": "is open / works",
   "думаю": "I think",
   "что": "that (conjunction)",
   "сейчас": "now / right now",
   "большое": "big / (thank you very much)"
  },
  "keywords": [
   {
    "rus": "касса",
    "eng": "ticket desk"
   },
   {
    "rus": "вокзал",
    "eng": "station"
   },
   {
    "rus": "прямо",
    "eng": "straight on"
   },
   {
    "rus": "налево",
    "eng": "to the left"
   },
   {
    "rus": "направо",
    "eng": "to the right"
   },
   {
    "rus": "когда работает",
    "eng": "when is it open"
   },
   {
    "rus": "сейчас",
    "eng": "now / right now"
   }
  ],
  "questions": [
   {
    "q": "Where is Анна?",
    "opts": [
     "At the airport",
     "At the hotel",
     "At the station",
     "At the post office"
    ],
    "a": 2
   },
   {
    "q": "Where is the ticket desk?",
    "opts": [
     "Straight on and right",
     "Straight on and left",
     "To the right",
     "Over there on the left"
    ],
    "a": 1
   },
   {
    "q": "Where is the toilet?",
    "opts": [
     "To the left",
     "Straight on",
     "To the right",
     "Over there"
    ],
    "a": 2
   },
   {
    "q": "Where is the restaurant?",
    "opts": [
     "Straight on and left",
     "To the right",
     "Over there on the left",
     "Straight on"
    ],
    "a": 2
   },
   {
    "q": "Does Анна know the station well?",
    "opts": [
     "Yes, she knows it well",
     "No, she doesn't know it",
     "She's been here before",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What does Анна ask about the restaurant?",
    "opts": [
     "What it serves",
     "How much it costs",
     "When it is open",
     "Where exactly it is"
    ],
    "a": 2
   },
   {
    "q": "Does the passerby know when the restaurant opens?",
    "opts": [
     "Yes, it opens at noon",
     "No, but he thinks it is open now",
     "Yes, it is closed",
     "He doesn't say"
    ],
    "a": 1
   },
   {
    "q": "How does Анна thank the passerby at the end?",
    "opts": [
     "Спасибо",
     "Пожалуйста",
     "Спасибо большое",
     "Очень приятно"
    ],
    "a": 2
   },
   {
    "q": "How does the passerby direct Анна to the toilet?",
    "opts": [
     "Прямо и налево",
     "Прямо и направо",
     "Налево",
     "Направо"
    ],
    "a": 3
   },
   {
    "q": "How does the passerby say goodbye?",
    "opts": [
     "Привет!",
     "До свидания!",
     "Пока!",
     "Спасибо!"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "o_rossii",
  "title": "О России",
  "difficulty": "easy",
  "intro": "Two students, Карлос (К) and Ольга (О), talk about Russia before class.",
  "dialogue": [
   {
    "speaker": "К",
    "text": "Ольга, ты знаешь, где Иркутск?"
   },
   {
    "speaker": "О",
    "text": "Да, конечно. Иркутск в Сибири."
   },
   {
    "speaker": "К",
    "text": "А где Сибирь?"
   },
   {
    "speaker": "О",
    "text": "Сибирь — в России. Это очень большой регион."
   },
   {
    "speaker": "К",
    "text": "Когда работает музей в Иркутске?"
   },
   {
    "speaker": "О",
    "text": "Не знаю. Почему ты спрашиваешь?"
   },
   {
    "speaker": "К",
    "text": "Я еду в Иркутск в августе."
   },
   {
    "speaker": "О",
    "text": "Отлично! Ты едешь на поезде?"
   },
   {
    "speaker": "К",
    "text": "Да, на поезде. По Транссибирской магистрали!"
   },
   {
    "speaker": "О",
    "text": "Замечательно! Это красивый маршрут."
   }
  ],
  "vocab": {
   "знаешь": "you know",
   "конечно": "of course",
   "сибири": "Siberia (prep.)",
   "сибирь": "Siberia",
   "большой": "big / large",
   "регион": "region",
   "когда": "when",
   "работает": "is open / works",
   "музей": "museum",
   "почему": "why",
   "спрашиваешь": "you are asking",
   "еду": "I am going",
   "августе": "August (prep.)",
   "отлично": "excellent",
   "едешь": "you are going",
   "поезде": "train (prep.)",
   "замечательно": "wonderful",
   "красивый": "beautiful",
   "маршрут": "route"
  },
  "keywords": [
   {
    "rus": "конечно",
    "eng": "of course"
   },
   {
    "rus": "большой",
    "eng": "big / large"
   },
   {
    "rus": "музей",
    "eng": "museum"
   },
   {
    "rus": "поезд",
    "eng": "train"
   },
   {
    "rus": "маршрут",
    "eng": "route"
   },
   {
    "rus": "замечательно",
    "eng": "wonderful"
   }
  ],
  "questions": [
   {
    "q": "Where is Irkutsk?",
    "opts": [
     "In Moscow",
     "In Siberia",
     "In Ukraine",
     "In the Crimea"
    ],
    "a": 1
   },
   {
    "q": "What does Ольга say about Siberia?",
    "opts": [
     "It is cold",
     "It is very big",
     "It is beautiful",
     "It is in Ukraine"
    ],
    "a": 1
   },
   {
    "q": "What does Карлос ask about the museum?",
    "opts": [
     "Where it is",
     "How much it costs",
     "When it is open",
     "What is inside"
    ],
    "a": 2
   },
   {
    "q": "Does Ольга know when the museum is open?",
    "opts": [
     "Yes, it opens at 10",
     "No, she doesn't know",
     "Yes, it is closed",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "When is Карлос going to Irkutsk?",
    "opts": [
     "In July",
     "In September",
     "In August",
     "In June"
    ],
    "a": 2
   },
   {
    "q": "How is Карлос travelling to Irkutsk?",
    "opts": [
     "By plane",
     "By bus",
     "By train",
     "By car"
    ],
    "a": 2
   },
   {
    "q": "What is the Trans-Siberian called in Russian?",
    "opts": [
     "Транссибирская магистраль",
     "Транссибирский поезд",
     "Сибирский маршрут",
     "Сибирская дорога"
    ],
    "a": 0
   },
   {
    "q": "What does Ольга say about the Trans-Siberian route?",
    "opts": [
     "It is long",
     "It is beautiful",
     "It is expensive",
     "It is famous"
    ],
    "a": 1
   },
   {
    "q": "Why is Карлос asking about the museum?",
    "opts": [
     "He works there",
     "He is going to Irkutsk",
     "He is studying museums",
     "He doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Where is the conversation taking place?",
    "opts": [
     "On the train",
     "In Siberia",
     "Before class",
     "In a museum"
    ],
    "a": 2
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "mary_manchester",
  "title": "Мэри в Манчестере",
  "difficulty": "easy",
  "intro": "Мэри Робинсон (М) is back in England. Her friend Наташа (Н) calls her from Moscow.",
  "dialogue": [
   {
    "speaker": "Н",
    "text": "Мэри! Привет! Где ты сейчас?"
   },
   {
    "speaker": "М",
    "text": "Привет, Наташа! Я в Манчестере. В Англии."
   },
   {
    "speaker": "Н",
    "text": "Ты живёшь в центре города?"
   },
   {
    "speaker": "М",
    "text": "Нет, я живу не в центре. Я живу в институте."
   },
   {
    "speaker": "Н",
    "text": "В институте? Ты изучаешь русский язык там?"
   },
   {
    "speaker": "М",
    "text": "Да! Я изучаю русский язык в институте в Манчестере."
   },
   {
    "speaker": "Н",
    "text": "И ты говоришь по-русски очень хорошо!"
   },
   {
    "speaker": "М",
    "text": "Спасибо. Я говорю по-русски, но я не говорю по-итальянски."
   },
   {
    "speaker": "Н",
    "text": "А где живёт твой брат?"
   },
   {
    "speaker": "М",
    "text": "Он живёт в Лондоне, в центре."
   }
  ],
  "vocab": {
   "сейчас": "now / right now",
   "манчестере": "Manchester (prep.)",
   "англии": "England (prep.)",
   "живёшь": "you live",
   "центре": "centre (prep.)",
   "города": "city (gen.)",
   "институте": "institute (prep.)",
   "изучаешь": "you are studying",
   "язык": "language",
   "говоришь": "you speak",
   "по-русски": "in Russian",
   "хорошо": "well / good",
   "по-итальянски": "in Italian",
   "твой": "your (informal)",
   "брат": "brother",
   "лондоне": "London (prep.)"
  },
  "keywords": [
   {
    "rus": "сейчас",
    "eng": "now / right now"
   },
   {
    "rus": "центр",
    "eng": "centre"
   },
   {
    "rus": "институт",
    "eng": "institute"
   },
   {
    "rus": "изучаю",
    "eng": "I am studying"
   },
   {
    "rus": "по-итальянски",
    "eng": "in Italian"
   },
   {
    "rus": "твой",
    "eng": "your (informal)"
   }
  ],
  "questions": [
   {
    "q": "Where is Мэри when Наташа calls?",
    "opts": [
     "In Moscow",
     "In London",
     "In Manchester",
     "In Brighton"
    ],
    "a": 2
   },
   {
    "q": "Does Мэри live in the city centre?",
    "opts": [
     "Yes, in the centre",
     "No, she lives at the institute",
     "No, she lives in the suburbs",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What is Мэри studying in Manchester?",
    "opts": [
     "English",
     "Italian",
     "Russian",
     "French"
    ],
    "a": 2
   },
   {
    "q": "What does Наташа say about Мэри's Russian?",
    "opts": [
     "It needs work",
     "It is very good",
     "It is a little strange",
     "It is getting better"
    ],
    "a": 1
   },
   {
    "q": "Which language does Мэри say she does NOT speak?",
    "opts": [
     "Russian",
     "English",
     "French",
     "Italian"
    ],
    "a": 3
   },
   {
    "q": "Where does Мэри's brother live?",
    "opts": [
     "In Manchester",
     "In Brighton",
     "In Oxford",
     "In London"
    ],
    "a": 3
   },
   {
    "q": "Where exactly in London does her brother live?",
    "opts": [
     "In the suburbs",
     "In the centre",
     "Near the station",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Where is Наташа calling from?",
    "opts": [
     "Manchester",
     "London",
     "Moscow",
     "Brighton"
    ],
    "a": 2
   },
   {
    "q": "Where is Мэри's institute?",
    "opts": [
     "In London",
     "In Manchester",
     "In Moscow",
     "In Brighton"
    ],
    "a": 1
   },
   {
    "q": "How does Мэри address Наташа at the start?",
    "opts": [
     "Здравствуйте",
     "Привет",
     "Добрый день",
     "Простите"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 }
];
