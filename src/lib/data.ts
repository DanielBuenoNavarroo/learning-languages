import { GermanWord } from "@/types/types";

type KanjiDataType = {
  char: string;
  meaning: string;
  onyomi: string[];
  kunyomi: string[];
  jlpt: number;
}[];

export const KanjiData: KanjiDataType = [
  {
    char: "人",
    meaning: "Man, Human, Person, Character",
    onyomi: ["ジン", "ニン", "-と"],
    kunyomi: ["ひと", "-り"],
    jlpt: 5,
  },
  {
    char: "一",
    meaning: "One",
    onyomi: ["イチ", "イツ"],
    kunyomi: ["ひと.つ", "ひと-"],
    jlpt: 5,
  },
  {
    char: "日",
    meaning: "Sun, Day",
    onyomi: ["ニチ", "ジツ"],
    kunyomi: ["ひ", "-か"],
    jlpt: 5,
  },
  {
    char: "大",
    meaning: "Large, Many, Very",
    onyomi: ["ダイ", "タイ"],
    kunyomi: ["おお.きい", "おお.いに", "おお-"],
    jlpt: 5,
  },
  {
    char: "年",
    meaning: "Year",
    onyomi: ["ネン"],
    kunyomi: ["とし"],
    jlpt: 5,
  },
  {
    char: "出",
    meaning: "Appear, Go out",
    onyomi: ["シュツ", "スイ"],
    kunyomi: ["だ.す", "で.る"],
    jlpt: 5,
  },
  {
    char: "本",
    meaning: "Book",
    onyomi: ["ホン"],
    kunyomi: ["もと"],
    jlpt: 5,
  },
  {
    char: "中",
    meaning: "Middle",
    onyomi: ["チュウ", "ジュウ"],
    kunyomi: ["なか"],
    jlpt: 5,
  },
  {
    char: "子",
    meaning: "Child",
    onyomi: ["シ", "ス"],
    kunyomi: ["こ"],
    jlpt: 5,
  },
  {
    char: "見",
    meaning: "See, Idea, Opinion",
    onyomi: ["ケン"],
    kunyomi: ["み.る", "み.える", "み.せる"],
    jlpt: 5,
  },
  {
    char: "国",
    meaning: "Country",
    onyomi: ["コク"],
    kunyomi: ["くに"],
    jlpt: 5,
  },
  {
    char: "上",
    meaning: "Up, Top, Rise",
    onyomi: ["ジョウ", "ショウ"],
    kunyomi: [
      "うえ",
      "うわ-",
      "あ.げる",
      "あ.がる",
      "かみ",
      "の.ぼる",
      "のぼ.せる",
      "のぼ.す",
    ],
    jlpt: 5,
  },
  {
    char: "分",
    meaning: "Divide",
    onyomi: ["ブン", "ブ", "フン"],
    kunyomi: ["わ.ける", "わ.かる", "わ.かれる", "わ.かつ"],
    jlpt: 5,
  },
  {
    char: "生",
    meaning: "Life",
    onyomi: ["セイ", "ショウ"],
    kunyomi: [
      "なま",
      "い.かす",
      "い.きる",
      "い.ける",
      "う.まれる",
      "う.む",
      "き",
      "お.う",
      "は.える",
      "は.やす",
    ],
    jlpt: 5,
  },
  {
    char: "行",
    meaning: "To go",
    onyomi: ["コウ", "ギョウ", "アン"],
    kunyomi: ["ゆ.く", "い.く", "おこな.う"],
    jlpt: 5,
  },
  {
    char: "二",
    meaning: "Two",
    onyomi: ["ニ"],
    kunyomi: ["ふた.つ", "ふた"],
    jlpt: 5,
  },
  {
    char: "間",
    meaning: "Interval, Space, Between",
    onyomi: ["カン", "ケン"],
    kunyomi: ["あいだ", "ま"],
    jlpt: 5,
  },
  {
    char: "時",
    meaning: "Time",
    onyomi: ["ジ"],
    kunyomi: ["とき"],
    jlpt: 5,
  },
  {
    char: "気",
    meaning: "Spirit, Mind, Air",
    onyomi: ["キ", "ケ"],
    kunyomi: ["いき"],
    jlpt: 5,
  },
  {
    char: "十",
    meaning: "Ten",
    onyomi: ["ジュウ", "ジッ"],
    kunyomi: ["と", "とお"],
    jlpt: 5,
  },
  {
    char: "女",
    meaning: "Woman, Female",
    onyomi: ["ジョ", "ニョ", "ニョウ"],
    kunyomi: ["おんな", "め"],
    jlpt: 5,
  },
  {
    char: "三",
    meaning: "Three",
    onyomi: ["サン"],
    kunyomi: ["み", "みっ.つ"],
    jlpt: 5,
  },
  {
    char: "前",
    meaning: "Before",
    onyomi: ["ゼン"],
    kunyomi: ["まえ"],
    jlpt: 5,
  },
  {
    char: "入",
    meaning: "Enter",
    onyomi: ["ニュウ"],
    kunyomi: ["い.る", "はい.る", "い.れる"],
    jlpt: 5,
  },
  {
    char: "小",
    meaning: "Small",
    onyomi: ["ショウ"],
    kunyomi: ["こ- ", "お-", "ちい.さい"],
    jlpt: 5,
  },
  {
    char: "後",
    meaning: "After",
    onyomi: ["ゴ", "コウ"],
    kunyomi: ["のち", "あと", "うし.ろ", "おく.れる"],
    jlpt: 5,
  },
  {
    char: "長",
    meaning: "Long",
    onyomi: ["チョウ"],
    kunyomi: ["なが.い"],
    jlpt: 5,
  },
  {
    char: "下",
    meaning: "Below",
    onyomi: ["カ", "ゲ"],
    kunyomi: [
      "した",
      "しも",
      "もと",
      "さ.げる",
      "さ.がる",
      "くだ.る",
      "くだ.す",
      "くだ.さる",
      "お.ろす",
      "お.りる",
    ],
    jlpt: 5,
  },
  {
    char: "学",
    meaning: "Learn",
    onyomi: ["ガク"],
    kunyomi: ["まな.ぶ"],
    jlpt: 5,
  },
  {
    char: "月",
    meaning: "Month, Moon",
    onyomi: ["ガツ", "ゲツ"],
    kunyomi: ["つき"],
    jlpt: 5,
  },
  {
    char: "何",
    meaning: "What",
    onyomi: ["カ"],
    kunyomi: ["なに", "なん"],
    jlpt: 5,
  },
  {
    char: "来",
    meaning: "Come",
    onyomi: ["ライ"],
    kunyomi: ["くる", "きた.る", "きた.す"],
    jlpt: 5,
  },
  {
    char: "話",
    meaning: "Talk",
    onyomi: ["ワ"],
    kunyomi: ["はなす", "はなし"],
    jlpt: 5,
  },
  {
    char: "山",
    meaning: "Mountain",
    onyomi: ["サン"],
    kunyomi: ["やま"],
    jlpt: 5,
  },
  {
    char: "高",
    meaning: "Expensive, High",
    onyomi: ["コウ"],
    kunyomi: ["たか", "たか.い", "たか.まる", "たか.める"],
    jlpt: 5,
  },
  {
    char: "今",
    meaning: "Now",
    onyomi: ["コン", "キン"],
    kunyomi: ["いま"],
    jlpt: 5,
  },
  {
    char: "書",
    meaning: "Write",
    onyomi: ["ショ"],
    kunyomi: ["か.く"],
    jlpt: 5,
  },
  {
    char: "五",
    meaning: "Five",
    onyomi: ["ゴ"],
    kunyomi: ["いつ-", "いつ.つ"],
    jlpt: 5,
  },
  {
    char: "名",
    meaning: "Name",
    onyomi: ["メイ", "ミョウ"],
    kunyomi: ["な"],
    jlpt: 5,
  },
  {
    char: "金",
    meaning: "Gold",
    onyomi: ["キン", "コン"],
    kunyomi: ["かね"],
    jlpt: 5,
  },
  {
    char: "男",
    meaning: "Male",
    onyomi: ["ダン", "ナン"],
    kunyomi: ["おとこ"],
    jlpt: 5,
  },
  {
    char: "外",
    meaning: "Outside",
    onyomi: ["ガイ", "ゲ"],
    kunyomi: ["そと", "ほか", "は.ずす", "はず.れる"],
    jlpt: 5,
  },
  {
    char: "四",
    meaning: "Four",
    onyomi: ["シ"],
    kunyomi: ["よ", "よ.つ", "よっ.つ", "よん"],
    jlpt: 5,
  },
  {
    char: "先",
    meaning: "Ahead",
    onyomi: ["セン"],
    kunyomi: ["さき"],
    jlpt: 5,
  },
  {
    char: "川",
    meaning: "River",
    onyomi: ["セン"],
    kunyomi: ["かわ"],
    jlpt: 5,
  },
  {
    char: "東",
    meaning: "East",
    onyomi: ["トウ"],
    kunyomi: ["ひがし"],
    jlpt: 5,
  },
  {
    char: "聞",
    meaning: "Listen",
    onyomi: ["ブン", "モン"],
    kunyomi: ["き.く", "き.こえる"],
    jlpt: 5,
  },
  {
    char: "語",
    meaning: "Talk",
    onyomi: ["ゴ"],
    kunyomi: ["かた.る", "かた.らう"],
    jlpt: 5,
  },
  {
    char: "九",
    meaning: "Nine",
    onyomi: ["ク", "キュウ"],
    kunyomi: ["ここの.つ"],
    jlpt: 5,
  },
  {
    char: "食",
    meaning: "Food, Eat",
    onyomi: ["ショク", "ジキ"],
    kunyomi: ["た.べる", "く.う"],
    jlpt: 5,
  },
  {
    char: "八",
    meaning: "Eight",
    onyomi: ["ハチ"],
    kunyomi: ["や", "や.つ", "よう"],
    jlpt: 5,
  },
  {
    char: "水",
    meaning: "Water",
    onyomi: ["スイ"],
    kunyomi: ["みず"],
    jlpt: 5,
  },
  {
    char: "天",
    meaning: "Heaven",
    onyomi: ["テン"],
    kunyomi: ["あめ", "あま-"],
    jlpt: 5,
  },
  {
    char: "木",
    meaning: "Tree",
    onyomi: ["モク", "ボク"],
    kunyomi: ["き", "こ-"],
    jlpt: 5,
  },
  {
    char: "六",
    meaning: "ロク",
    onyomi: ["むっ.つ", "む.つ", "むい", "む"],
    kunyomi: [""],
    jlpt: 5,
  },
  {
    char: "万",
    meaning: "Ten thousand (10.000)",
    onyomi: ["マン", "バン"],
    kunyomi: [""],
    jlpt: 5,
  },
  {
    char: "白",
    meaning: "White",
    onyomi: ["ハク"],
    kunyomi: ["しろ.い", "しろ", "しら-"],
    jlpt: 5,
  },
  {
    char: "七",
    meaning: "Seven",
    onyomi: ["シチ"],
    kunyomi: ["なな.つ", "なな", "なの"],
    jlpt: 5,
  },
  {
    char: "円",
    meaning: "Circle, Yen",
    onyomi: ["エン"],
    kunyomi: ["まる.い"],
    jlpt: 5,
  },
  {
    char: "電",
    meaning: "Electricity",
    onyomi: ["デン"],
    kunyomi: [""],
    jlpt: 5,
  },
  {
    char: "父",
    meaning: "Father",
    onyomi: ["フ"],
    kunyomi: ["ちち"],
    jlpt: 5,
  },
  {
    char: "北",
    meaning: "North",
    onyomi: ["ホク"],
    kunyomi: ["きた"],
    jlpt: 5,
  },
  {
    char: "車",
    meaning: "Car",
    onyomi: ["シャ"],
    kunyomi: ["くるま"],
    jlpt: 5,
  },
  {
    char: "母",
    meaning: "Mother",
    onyomi: ["ボ"],
    kunyomi: ["はは"],
    jlpt: 5,
  },
  {
    char: "半",
    meaning: "Half",
    onyomi: ["ハン"],
    kunyomi: ["なか.ば"],
    jlpt: 5,
  },
  {
    char: "百",
    meaning: "Hundred (100)",
    onyomi: ["ヒャク"],
    kunyomi: [""],
    jlpt: 5,
  },
  {
    char: "土",
    meaning: "Ground, Earth",
    onyomi: ["ド", "ト"],
    kunyomi: ["つち"],
    jlpt: 5,
  },
  {
    char: "西",
    meaning: "West",
    onyomi: ["セイ", "サイ"],
    kunyomi: ["にし"],
    jlpt: 5,
  },
  {
    char: "読",
    meaning: "Read",
    onyomi: ["ドク", "トク", "トウ"],
    kunyomi: ["よ.む"],
    jlpt: 5,
  },
  {
    char: "千",
    meaning: "Thousand (1000)",
    onyomi: ["セン"],
    kunyomi: ["ち"],
    jlpt: 5,
  },
  {
    char: "校",
    meaning: "Exam",
    onyomi: ["コウ"],
    kunyomi: [""],
    jlpt: 5,
  },
  {
    char: "右",
    meaning: "Right",
    onyomi: ["ウ", "ユウ"],
    kunyomi: ["みぎ"],
    jlpt: 5,
  },
  {
    char: "南",
    meaning: "South",
    onyomi: ["ナン", "ナ"],
    kunyomi: ["みなみ"],
    jlpt: 5,
  },
  {
    char: "左",
    meaning: "Left",
    onyomi: ["サ"],
    kunyomi: ["ひだり"],
    jlpt: 5,
  },
  {
    char: "友",
    meaning: "Friend",
    onyomi: ["ユウ"],
    kunyomi: ["とも"],
    jlpt: 5,
  },
  {
    char: "火",
    meaning: "Fire",
    onyomi: ["カ"],
    kunyomi: ["ひ", "ほ-"],
    jlpt: 5,
  },
  {
    char: "毎",
    meaning: "Every, Each",
    onyomi: ["マイ"],
    kunyomi: [""],
    jlpt: 5,
  },
  {
    char: "雨",
    meaning: "ウ",
    onyomi: ["あめ"],
    kunyomi: ["あま-"],
    jlpt: 5,
  },
  {
    char: "休",
    meaning: "Rest",
    onyomi: ["キュウ"],
    kunyomi: ["やす.む", "やす.まる", "やす.める"],
    jlpt: 5,
  },
  {
    char: "午",
    meaning: "Noon",
    onyomi: ["ゴ"],
    kunyomi: [""],
    jlpt: 5,
  },
];

export const GermanWords: GermanWord[] = [
  {
    "id": 1,
    "word": "die Bitte",
    "plural": "die Bitten",
    "trans": "petición",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 2,
    "word": "der Dank",
    "plural": "die Danke",
    "trans": "agradecimiento",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 3,
    "word": "die Entschuldigung",
    "plural": "die Entschuldigungen",
    "trans": "disculpa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 4,
    "word": "das Wiedersehen",
    "plural": "die Wiedersehen",
    "trans": "despedida al ver a alguien",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 5,
    "word": "das Wiederhören",
    "plural": "die Wiederhören",
    "trans": "despedida telefónica",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 6,
    "word": "der Gruß",
    "plural": "die Grüße",
    "trans": "saludo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 7,
    "word": "die Zeit",
    "plural": "die Zeiten",
    "trans": "tiempo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 8,
    "word": "die Uhr",
    "plural": "die Uhren",
    "trans": "reloj",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 9,
    "word": "die Stunde",
    "plural": "die Stunden",
    "trans": "hora",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 10,
    "word": "der Moment",
    "plural": "die Momente",
    "trans": "momento",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 11,
    "word": "der Anfang",
    "plural": "die Anfänge",
    "trans": "comienzo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 12,
    "word": "das Ende",
    "plural": "die Enden",
    "trans": "final",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 13,
    "word": "die Mitte",
    "plural": "die Mitten",
    "trans": "centro",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 14,
    "word": "das Datum",
    "plural": "die Daten",
    "trans": "fecha",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 15,
    "word": "der Geburtstag",
    "plural": "die Geburtstage",
    "trans": "cumpleaños",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 16,
    "word": "das Geburtsjahr",
    "plural": "die Geburtsjahre",
    "trans": "año de nacimiento",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 17,
    "word": "der Geburtsort",
    "plural": "die Geburtsorte",
    "trans": "lugar de nacimiento",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 18,
    "word": "der Mann",
    "plural": "die Männer",
    "trans": "hombre",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 19,
    "word": "die Frau",
    "plural": "die Frauen",
    "trans": "mujer",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 20,
    "word": "der Herr",
    "plural": "die Herren",
    "trans": "señor",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 21,
    "word": "der Junge",
    "plural": "die Jungen",
    "trans": "niño",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 22,
    "word": "das Mädchen",
    "plural": "die Mädchen",
    "trans": "niña",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 23,
    "word": "das Kind",
    "plural": "die Kinder",
    "trans": "niño",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 24,
    "word": "das Baby",
    "plural": "die Babys",
    "trans": "bebé",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 25,
    "word": "der der Mensch",
    "plural": "die Menschen",
    "trans": "persona",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 26,
    "word": "die die Leute",
    "plural": "die ",
    "trans": "la gente",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 27,
    "word": "die Familie",
    "plural": "die Familien",
    "trans": "familia",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 28,
    "word": " Eltern",
    "plural": "die ",
    "trans": "padres",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 29,
    "word": "die Mutter",
    "plural": "die Mütter",
    "trans": "mamá",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 30,
    "word": "der Vater",
    "plural": "die Väter",
    "trans": "papá",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 31,
    "word": "der Sohn",
    "plural": "die Söhne",
    "trans": "hijo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 32,
    "word": "die Tochter",
    "plural": "die Töchter",
    "trans": "hija",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 33,
    "word": "der Bruder",
    "plural": "die Brüder",
    "trans": "hermano",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 34,
    "word": "die Schwester",
    "plural": "die Schwestern",
    "trans": "hermana",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 35,
    "word": "die Geschwister",
    "plural": "die ",
    "trans": "hermanos",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 36,
    "word": "der Großvater",
    "plural": "die Großväter",
    "trans": "abuelo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 37,
    "word": "die Großmutter",
    "plural": "die Großmütter",
    "trans": "abuela",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 38,
    "word": "die Großeltern",
    "plural": "die ",
    "trans": "abuelos",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 39,
    "word": "die Oma",
    "plural": "die Omas",
    "trans": "abuela",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 40,
    "word": "der Opa",
    "plural": "die Opas",
    "trans": "abuelo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 41,
    "word": "der Ehemann",
    "plural": "die Ehemänner",
    "trans": "esposo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 42,
    "word": "die Ehefrau",
    "plural": "die Ehefrauen",
    "trans": "esposa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 43,
    "word": "der Partner",
    "plural": "die Partner",
    "trans": "pareja",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 44,
    "word": "die Partnerin",
    "plural": "die Partnerinnen",
    "trans": "pareja",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 45,
    "word": "die Hausfrau",
    "plural": "die Hausfrauen",
    "trans": "ama de casa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 46,
    "word": "der Hausmann",
    "plural": "die Hausmänner",
    "trans": "amo de casa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 47,
    "word": "der Erwachsene",
    "plural": "die Erwachsenen",
    "trans": "adulto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 48,
    "word": "die Jugendliche",
    "plural": "die Jugendlichen",
    "trans": "adolescente",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 49,
    "word": "der Ausländer",
    "plural": "die Ausländer",
    "trans": "extranjero",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 50,
    "word": "der/die der/die Bekannte",
    "plural": "die Bekannten",
    "trans": "conocido",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 51,
    "word": "der Freund",
    "plural": "die Freunde",
    "trans": "amigo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 52,
    "word": "der Kollege",
    "plural": "die Kollegen",
    "trans": "compañero de trabajo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 53,
    "word": "der Schüler",
    "plural": "die Schüler",
    "trans": "estudiante",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 54,
    "word": "der Student",
    "plural": "die Studenten",
    "trans": "estudiante",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 55,
    "word": "der Lehrer",
    "plural": "die Lehrer",
    "trans": "maestro",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 56,
    "word": "der Doktor",
    "plural": "die Doktoren",
    "trans": "doctor",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 57,
    "word": "der Arzt",
    "plural": "die Ärzte",
    "trans": "doctor",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 58,
    "word": "der Chef",
    "plural": "die Chefs",
    "trans": "jefe",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 59,
    "word": "der Verkäufer",
    "plural": "die Verkäufer",
    "trans": "vendedor",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 60,
    "word": "der Empfänger",
    "plural": "die Empfänger",
    "trans": "destinatario",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 61,
    "word": "der Vermieter",
    "plural": "die Vermieter",
    "trans": "arrendador",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 62,
    "word": "der Beamte",
    "plural": "die Beamten",
    "trans": "funcionario",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 63,
    "word": "der Name",
    "plural": "die Namen",
    "trans": "nombre",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 64,
    "word": "der Vorname",
    "plural": "die Vornamen",
    "trans": "nombre",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 65,
    "word": "der Familienname",
    "plural": "die Familiennamen",
    "trans": "apellido",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 66,
    "word": "der Familienstand",
    "plural": "die Familienstände",
    "trans": "estado civil",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 67,
    "word": "die Adresse",
    "plural": "die Adressen",
    "trans": "dirección",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 68,
    "word": "die Postleitzahl",
    "plural": "die Postleitzahlen",
    "trans": "código postal",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 69,
    "word": "die Vorwahl",
    "plural": "die Vorwahlen",
    "trans": "clave lada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 70,
    "word": "die Anrede",
    "plural": "die Anreden",
    "trans": "tratamiento",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 71,
    "word": "die Unterschrift",
    "plural": "die Unterschriften",
    "trans": "firma",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 72,
    "word": "die Papiere",
    "plural": "die ",
    "trans": "documentos",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 73,
    "word": "der Ausweis",
    "plural": "die Ausweise",
    "trans": "identificación",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 74,
    "word": "der Pass",
    "plural": "die Pässe",
    "trans": "pasaporte",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 75,
    "word": "die Anmeldung",
    "plural": "die Anmeldungen",
    "trans": "registro",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 76,
    "word": "das Formular",
    "plural": "die Formulare",
    "trans": "formulario",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 77,
    "word": "die Ankunft",
    "plural": "die Ankünfte",
    "trans": "llegada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 78,
    "word": "die Abfahrt",
    "plural": "die Abfahrten",
    "trans": "salida",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 79,
    "word": "der Abflug",
    "plural": "die Abflüge",
    "trans": "salida",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 80,
    "word": "der Absender",
    "plural": "die Absender",
    "trans": "remitente",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 81,
    "word": "der Anruf",
    "plural": "die Anrufe",
    "trans": "llamada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 82,
    "word": "der Anrufbeantworter",
    "plural": "die Anrufbeantworter",
    "trans": "contestador automático",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 83,
    "word": "die Anzeige",
    "plural": "die Anzeigen",
    "trans": "anuncio",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 84,
    "word": "die Aussage",
    "plural": "die Aussagen",
    "trans": "declaración",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 85,
    "word": "die Auskunft",
    "plural": "die Auskünfte",
    "trans": "información",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 86,
    "word": "der Ausgang",
    "plural": "die Ausgänge",
    "trans": "salida",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 87,
    "word": "der Eingang",
    "plural": "die Eingänge",
    "trans": "entrada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 88,
    "word": "der Anschluss",
    "plural": "die Anschlüsse",
    "trans": "conexión",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 89,
    "word": "die Durchsage",
    "plural": "die Durchsagen",
    "trans": "anuncio",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 90,
    "word": "die Ansage",
    "plural": "die Ansagen",
    "trans": "anuncio",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 91,
    "word": "das Haus",
    "plural": "die Häuser",
    "trans": "casa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 92,
    "word": "die Wohnung",
    "plural": "die Wohnungen",
    "trans": "departamento",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 93,
    "word": "das Zimmer",
    "plural": "die Zimmer",
    "trans": "cuarto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 94,
    "word": "das Bett",
    "plural": "die Betten",
    "trans": "cama",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 95,
    "word": "das Sofa",
    "plural": "die Sofas",
    "trans": "sofá",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 96,
    "word": "der Tisch",
    "plural": "die Tische",
    "trans": "mesa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 97,
    "word": "der Schrank",
    "plural": "die Schränke",
    "trans": "armario",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 98,
    "word": "die Möbel",
    "plural": "die ",
    "trans": "muebles",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 99,
    "word": "der Balkon",
    "plural": "die Balkone",
    "trans": "balcón",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 100,
    "word": "die Dusche",
    "plural": "die Duschen",
    "trans": "regadera",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 101,
    "word": "das Bad",
    "plural": "die Bäder",
    "trans": "baño",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 102,
    "word": "die Toilette",
    "plural": "die Toiletten",
    "trans": "baño",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 103,
    "word": "die Küche",
    "plural": "die Küchen",
    "trans": "cocina",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 104,
    "word": "der Kühlschrank",
    "plural": "die Kühlschränke",
    "trans": "refrigerador",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 105,
    "word": "der Herd",
    "plural": "die Herde",
    "trans": "estufa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 106,
    "word": "die Maschine",
    "plural": "die Maschinen",
    "trans": "máquina",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 107,
    "word": "der Aufzug",
    "plural": "die Aufzüge",
    "trans": "ascensor",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 108,
    "word": "die Treppe",
    "plural": "die Treppen",
    "trans": "escalera",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 109,
    "word": "der Bogen",
    "plural": "die Bögen",
    "trans": "hoja",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 110,
    "word": "der Stock",
    "plural": "die Stockwerke",
    "trans": "piso",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 111,
    "word": "das Licht",
    "plural": "die Lichter",
    "trans": "luz",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 112,
    "word": "der Schlüssel",
    "plural": "die Schlüssel",
    "trans": "llave",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 113,
    "word": "der Kopf",
    "plural": "die Köpfe",
    "trans": "cabeza",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 114,
    "word": "die Hand",
    "plural": "die Hände",
    "trans": "mano",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 115,
    "word": "das Auge",
    "plural": "die Augen",
    "trans": "ojo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 116,
    "word": "der Mund",
    "plural": "die Münder",
    "trans": "boca",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 117,
    "word": "der Arm",
    "plural": "die Arme",
    "trans": "brazo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 118,
    "word": "das Bein",
    "plural": "die Beine",
    "trans": "pierna",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 119,
    "word": "der Bauch",
    "plural": "die Bäuche",
    "trans": "panza",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 120,
    "word": "der Fuß",
    "plural": "die Füße",
    "trans": "pie",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 121,
    "word": "das Haar",
    "plural": "die Haare",
    "trans": "cabello",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 122,
    "word": "die Kleidung",
    "plural": "die Kleidungen",
    "trans": "ropa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 123,
    "word": "die Jacke",
    "plural": "die Jacken",
    "trans": "chaqueta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 124,
    "word": "der Schuh",
    "plural": "die Schuhe",
    "trans": "zapato",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 125,
    "word": "die Tasche",
    "plural": "die Taschen",
    "trans": "bolsa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 126,
    "word": "die Stadt",
    "plural": "die Städte",
    "trans": "ciudad",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 127,
    "word": "der Ort",
    "plural": "die Orte",
    "trans": "lugar",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 128,
    "word": "der Platz",
    "plural": "die Plätze",
    "trans": "lugar",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 129,
    "word": "das Land",
    "plural": "die Länder",
    "trans": "país",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 130,
    "word": "das Dorf",
    "plural": "die Dörfer",
    "trans": "pueblo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 131,
    "word": "die Heimat",
    "plural": "die Heimaten",
    "trans": "hogar",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 132,
    "word": "die Straße",
    "plural": "die Straßen",
    "trans": "calle",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 133,
    "word": "die die Welt",
    "plural": "die Welten",
    "trans": "el mundo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 134,
    "word": "die Schule",
    "plural": "die Schulen",
    "trans": "escuela",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 135,
    "word": "die Klasse",
    "plural": "die Klassen",
    "trans": "clase",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 136,
    "word": "der Kindergarten",
    "plural": "die Kindergärten",
    "trans": "jardín de niños",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 137,
    "word": "der Arbeitsplatz",
    "plural": "die Arbeitsplätze",
    "trans": "lugar de trabajo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 138,
    "word": "der Job",
    "plural": "die Jobs",
    "trans": "empleo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 139,
    "word": "der Beruf",
    "plural": "die Berufe",
    "trans": "trabajo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 140,
    "word": "die Firma",
    "plural": "die Firmen",
    "trans": "empresa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 141,
    "word": "der Verein",
    "plural": "die Vereine",
    "trans": "club",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 142,
    "word": "die Polizei",
    "plural": "die Polizeien",
    "trans": "policía",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 143,
    "word": "die Praxis",
    "plural": "die Praxen",
    "trans": "consultorio",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 144,
    "word": "die Halle",
    "plural": "die Hallen",
    "trans": "gimnasio",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 145,
    "word": "das Restaurant",
    "plural": "die Restaurants",
    "trans": "restaurante",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 146,
    "word": "das Lokal",
    "plural": "die Lokale",
    "trans": "restaurante pequeño",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 147,
    "word": "das Café",
    "plural": "die Cafés",
    "trans": "cafetería",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 148,
    "word": "die Bäckerei",
    "plural": "die Bäckereien",
    "trans": "panadería",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 149,
    "word": "der Kiosk",
    "plural": "die Kioske",
    "trans": "puesto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 150,
    "word": "der Laden",
    "plural": "die Läden",
    "trans": "tienda",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 151,
    "word": "die Bank",
    "plural": "die Banken",
    "trans": "banco",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 152,
    "word": "die Post",
    "plural": "die Posten",
    "trans": "correo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 153,
    "word": "das Hotel",
    "plural": "die Hotels",
    "trans": "hotel",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 154,
    "word": "die Rezeption",
    "plural": "die Rezeptionen",
    "trans": "recepción",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 155,
    "word": "das Apartment",
    "plural": "die Apartments",
    "trans": "departamento pequeño",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 156,
    "word": "das Einzelzimmer",
    "plural": "die Einzelzimmer",
    "trans": "habitación individual",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 157,
    "word": "das Doppelzimmer",
    "plural": "die Doppelzimmer",
    "trans": "habitación doble",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 158,
    "word": "das Reisebüro",
    "plural": "die Reisebüros",
    "trans": "agencia de viajes",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 159,
    "word": "der Bahnhof",
    "plural": "die Bahnhöfe",
    "trans": "estación de tren",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 160,
    "word": "der Bahnsteig",
    "plural": "die Bahnsteige",
    "trans": "andén",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 161,
    "word": "die Haltestelle",
    "plural": "die Haltestellen",
    "trans": "parada de autobús",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 162,
    "word": "das Gleis",
    "plural": "die Gleise",
    "trans": "andén",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 163,
    "word": "der Flughafen",
    "plural": "die Flughäfen",
    "trans": "aeropuerto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 164,
    "word": "der Bus",
    "plural": "die Busse",
    "trans": "camión urbano",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 165,
    "word": "die Bahn",
    "plural": "die Bahnen",
    "trans": "tren",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 166,
    "word": "die Straßenbahn",
    "plural": "die Straßenbahnen",
    "trans": "tranvía",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 167,
    "word": "das Taxi",
    "plural": "die Taxis",
    "trans": "taxi",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 168,
    "word": "die Autobahn",
    "plural": "die Autobahnen",
    "trans": "autopista",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 169,
    "word": "das Auto",
    "plural": "die Autos",
    "trans": "carro",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 170,
    "word": "der Lkw",
    "plural": "die Lkws",
    "trans": "camión grande para cargas pesadas",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 171,
    "word": "das Fahrrad",
    "plural": "die Fahrräder",
    "trans": "bicicleta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 172,
    "word": "das Flugzeug",
    "plural": "die Flugzeuge",
    "trans": "avión",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 173,
    "word": "der Zug",
    "plural": "die Züge",
    "trans": "tren",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 174,
    "word": "die Reise",
    "plural": "die Reisen",
    "trans": "viaje",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 175,
    "word": "der Ausflug",
    "plural": "die Ausflüge",
    "trans": "excursión",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 176,
    "word": "der Urlaub",
    "plural": "die Urlaube",
    "trans": "vacaciones",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 177,
    "word": "die Sehenswürdigkeit",
    "plural": "die Sehenswürdigkeiten",
    "trans": "atractivo turístico",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 178,
    "word": "das Essen",
    "plural": "die Essen",
    "trans": "comida",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 179,
    "word": "das Frühstück",
    "plural": "die Frühstücke",
    "trans": "desayuno",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 180,
    "word": "das Brot",
    "plural": "die Brote",
    "trans": "pan",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 181,
    "word": "das Brötchen",
    "plural": "die Brötchen",
    "trans": "panecillo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 182,
    "word": "die Butter",
    "plural": "die Buttern",
    "trans": "mantequilla",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 183,
    "word": "die Milch",
    "plural": "die ",
    "trans": "leche",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 184,
    "word": "der Kaffee",
    "plural": "die Kaffees",
    "trans": "café",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 185,
    "word": "der Tee",
    "plural": "die Tees",
    "trans": "té",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 186,
    "word": "das Bier",
    "plural": "die Biere",
    "trans": "cerveza",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 187,
    "word": "der Wein",
    "plural": "die Weine",
    "trans": "vino",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 188,
    "word": "das Wasser",
    "plural": "die Wässer",
    "trans": "agua",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 189,
    "word": "der Saft",
    "plural": "die Säfte",
    "trans": "jugo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 190,
    "word": "das Getränk",
    "plural": "die Getränke",
    "trans": "bebida",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 191,
    "word": "das Fleisch",
    "plural": "die Fleisch",
    "trans": "carne",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 192,
    "word": "der Fisch",
    "plural": "die Fische",
    "trans": "pez",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 193,
    "word": "das Ei",
    "plural": "die Eier",
    "trans": "huevo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 194,
    "word": "das Gemüse",
    "plural": "die Gemüse",
    "trans": "verduras",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 195,
    "word": "das Obst",
    "plural": "die Obstsorten",
    "trans": "frutas",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 196,
    "word": "der Apfel",
    "plural": "die Äpfel",
    "trans": "manzana",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 197,
    "word": "die Banane",
    "plural": "die Bananen",
    "trans": "plátano",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 198,
    "word": "die Birne",
    "plural": "die Birnen",
    "trans": "pera",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 199,
    "word": "die Tomate",
    "plural": "die Tomaten",
    "trans": "jitomate",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 200,
    "word": "die Kartoffel",
    "plural": "die Kartoffeln",
    "trans": "papa",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 201,
    "word": "der Reis",
    "plural": "die Reis",
    "trans": "arroz",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 202,
    "word": "der Salat",
    "plural": "die Salate",
    "trans": "ensalada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 203,
    "word": "der Schinken",
    "plural": "die Schinken",
    "trans": "jamón",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 204,
    "word": "das Hähnchen",
    "plural": "die Hähnchen",
    "trans": "carne de pollo joven para comer",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 205,
    "word": "die Pommes frites",
    "plural": "die ",
    "trans": "papas fritas",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 206,
    "word": "der Kuchen",
    "plural": "die Kuchen",
    "trans": "pastel",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 207,
    "word": "das Glas",
    "plural": "die Gläser",
    "trans": "vaso",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 208,
    "word": "die Flasche",
    "plural": "die Flaschen",
    "trans": "botella",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 209,
    "word": "die Speisekarte",
    "plural": "die Speisekarten",
    "trans": "menú",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 210,
    "word": "die Rechnung",
    "plural": "die Rechnungen",
    "trans": "factura",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 211,
    "word": "der Hunger",
    "plural": "die ",
    "trans": "hambre",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 212,
    "word": "der Durst",
    "plural": "die ",
    "trans": "sed",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 213,
    "word": "der Appetit",
    "plural": "die ",
    "trans": "apetito",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 214,
    "word": "das Salz",
    "plural": "die Salze",
    "trans": "sal",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 215,
    "word": "das Internet",
    "plural": "die Internets",
    "trans": "internet",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 216,
    "word": "der Computer",
    "plural": "die Computer",
    "trans": "computadora",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 217,
    "word": "das Handy",
    "plural": "die Handys",
    "trans": "celular",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 218,
    "word": "das Telefon",
    "plural": "die Telefone",
    "trans": "teléfono",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 219,
    "word": "die CD",
    "plural": "die CDs",
    "trans": "disco compacto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 220,
    "word": "der Drucker",
    "plural": "die Drucker",
    "trans": "impresora",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 221,
    "word": "der Brief",
    "plural": "die Briefe",
    "trans": "carta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 222,
    "word": "die Briefmarke",
    "plural": "die Briefmarken",
    "trans": "estampilla",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 223,
    "word": "das Papier",
    "plural": "die Papiere",
    "trans": "papel",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 224,
    "word": "das Foto",
    "plural": "die Fotos",
    "trans": "foto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 225,
    "word": "das Bild",
    "plural": "die Bilder",
    "trans": "imagen",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 226,
    "word": "der Text",
    "plural": "die Texte",
    "trans": "texto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 227,
    "word": "die Zeitung",
    "plural": "die Zeitungen",
    "trans": "periódico",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 228,
    "word": "das Buch",
    "plural": "die Bücher",
    "trans": "libro",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 229,
    "word": "der Kugelschreiber",
    "plural": "die Kugelschreiber",
    "trans": "bolígrafo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 230,
    "word": "der Bleistift",
    "plural": "die Bleistifte",
    "trans": "lápiz",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 231,
    "word": "der Buchstabe",
    "plural": "die Buchstaben",
    "trans": "letra",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 232,
    "word": "die Nummer",
    "plural": "die Nummern",
    "trans": "número",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 233,
    "word": "die Karte",
    "plural": "die Karten",
    "trans": "boleto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 234,
    "word": "die Fahrkarte",
    "plural": "die Fahrkarten",
    "trans": "boleto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 235,
    "word": "das Ticket",
    "plural": "die Tickets",
    "trans": "boleto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 236,
    "word": "der Prospekt",
    "plural": "die Prospekte",
    "trans": "folleto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 237,
    "word": "die Information",
    "plural": "die Informationen",
    "trans": "información",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 238,
    "word": "das Wetter",
    "plural": "die Wetter",
    "trans": "clima",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 239,
    "word": "die Sonne",
    "plural": "die Sonnen",
    "trans": "sol",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 240,
    "word": "der Wind",
    "plural": "die Winde",
    "trans": "viento",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 241,
    "word": "der Regen",
    "plural": "die Regen",
    "trans": "lluvia",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 242,
    "word": "das Meer",
    "plural": "die Meere",
    "trans": "mar",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 243,
    "word": "die See",
    "plural": "die Seen",
    "trans": "lago",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 244,
    "word": "der Baum",
    "plural": "die Bäume",
    "trans": "árbol",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 245,
    "word": "die Blume",
    "plural": "die Blumen",
    "trans": "flor",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 246,
    "word": "der Garten",
    "plural": "die Gärten",
    "trans": "jardín",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 247,
    "word": "das Feuer",
    "plural": "die Feuer",
    "trans": "fuego",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 248,
    "word": "das Glück",
    "plural": "die Glücksfälle",
    "trans": "suerte",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 249,
    "word": "der Glückwunsch",
    "plural": "die Glückwünsche",
    "trans": "felicitación",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 250,
    "word": "das Fieber",
    "plural": "die Fieber",
    "trans": "fiebre",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 251,
    "word": "der Test",
    "plural": "die Tests",
    "trans": "examen",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 252,
    "word": "der Fehler",
    "plural": "die Fehler",
    "trans": "error",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 253,
    "word": "die Lösung",
    "plural": "die Lösungen",
    "trans": "solución",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 254,
    "word": "das Problem",
    "plural": "die Probleme",
    "trans": "problema",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 255,
    "word": "das Ergebnis",
    "plural": "die Ergebnisse",
    "trans": "resultado",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 256,
    "word": "das Thema",
    "plural": "die Themen",
    "trans": "tema",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 257,
    "word": "das Beispiel",
    "plural": "die Beispiele",
    "trans": "ejemplo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 258,
    "word": "die Frage",
    "plural": "die Fragen",
    "trans": "pregunta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 259,
    "word": "die Antwort",
    "plural": "die Antworten",
    "trans": "respuesta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 260,
    "word": "das Gespräch",
    "plural": "die Gespräche",
    "trans": "conversación",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 261,
    "word": "der Kurs",
    "plural": "die Kurse",
    "trans": "curso",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 262,
    "word": "die Prüfung",
    "plural": "die Prüfungen",
    "trans": "examen",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 263,
    "word": "der Unterricht",
    "plural": "die Unterrichte",
    "trans": "clase",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 264,
    "word": "die Hausaufgabe",
    "plural": "die Hausaufgaben",
    "trans": "tarea",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 265,
    "word": "das Praktikum",
    "plural": "die Praktika",
    "trans": "práctica",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 266,
    "word": "das Studium",
    "plural": "die Studien",
    "trans": "la carrera universitaria",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 267,
    "word": "das Leben",
    "plural": "die Leben",
    "trans": "vida",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 268,
    "word": "das Geld",
    "plural": "die Gelder",
    "trans": "dinero",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 269,
    "word": "der Teil",
    "plural": "die Teile",
    "trans": "parte",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 270,
    "word": "die Arbeit",
    "plural": "die Arbeiten",
    "trans": "trabajo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 271,
    "word": "das Alter",
    "plural": "die Alter",
    "trans": "edad",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 272,
    "word": "die Gruppe",
    "plural": "die Gruppen",
    "trans": "grupo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 273,
    "word": "die Hilfe",
    "plural": "die Hilfen",
    "trans": "ayuda",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 274,
    "word": "der Film",
    "plural": "die Filme",
    "trans": "película",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 275,
    "word": "die Stelle",
    "plural": "die Stellen",
    "trans": "puesto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 276,
    "word": "das Wort",
    "plural": "die Wörter",
    "trans": "palabra",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 277,
    "word": "der Preis",
    "plural": "die Preise",
    "trans": "precio",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 278,
    "word": "der Blick",
    "plural": "die Blicke",
    "trans": "mirada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 279,
    "word": "der Raum",
    "plural": "die Räume",
    "trans": "cuarto",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 280,
    "word": "die Sprache",
    "plural": "die Sprachen",
    "trans": "idioma",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 281,
    "word": "der Fußball",
    "plural": "die Fußbälle",
    "trans": "fútbol",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 282,
    "word": "der Sport",
    "plural": "die Sportarten",
    "trans": "deporte",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 283,
    "word": "das Angebot",
    "plural": "die Angebote",
    "trans": "oferta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 284,
    "word": "die Ordnung",
    "plural": "die Ordnungen",
    "trans": "orden",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 285,
    "word": "die Aufgabe",
    "plural": "die Aufgaben",
    "trans": "tarea",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 286,
    "word": "der Schluss",
    "plural": "die Schlüsse",
    "trans": "final",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 287,
    "word": "der Plan",
    "plural": "die Pläne",
    "trans": "plan",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 288,
    "word": "der Hund",
    "plural": "die Hunde",
    "trans": "perro",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 289,
    "word": "die Größe",
    "plural": "die Größen",
    "trans": "talla",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 290,
    "word": "die Party",
    "plural": "die Partys",
    "trans": "fiesta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 291,
    "word": "das Ausland",
    "plural": "die ",
    "trans": "extranjero",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 292,
    "word": "die Farbe",
    "plural": "die Farben",
    "trans": "color",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 293,
    "word": "die Führung",
    "plural": "die Führungen",
    "trans": "recorrido guiado",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 294,
    "word": "das Geschäft",
    "plural": "die Geschäfte",
    "trans": "tienda",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 295,
    "word": "der Fahrer",
    "plural": "die Fahrer",
    "trans": "conductor",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 296,
    "word": "die Ecke",
    "plural": "die Ecken",
    "trans": "esquina",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 297,
    "word": "das Kino",
    "plural": "die Kinos",
    "trans": "cine",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 298,
    "word": "die Pause",
    "plural": "die Pausen",
    "trans": "descanso",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 299,
    "word": "der Termin",
    "plural": "die Termine",
    "trans": "cita",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 300,
    "word": "der Gast",
    "plural": "die Gäste",
    "trans": "invitado",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 301,
    "word": "die Dame",
    "plural": "die Damen",
    "trans": "señora",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 302,
    "word": "das Gewicht",
    "plural": "die Gewichte",
    "trans": "peso",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 303,
    "word": "das Lebens mittel",
    "plural": "die ",
    "trans": "alimentos",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 304,
    "word": "das Geschenk",
    "plural": "die Geschenke",
    "trans": "regalo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 305,
    "word": "die Hochzeit",
    "plural": "die Hochzeiten",
    "trans": "boda",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 306,
    "word": "der Eintritt",
    "plural": "die Eintritte",
    "trans": "entrada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 307,
    "word": "das Öl",
    "plural": "die Öle",
    "trans": "aceite",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 308,
    "word": "das Konto",
    "plural": "die Konten",
    "trans": "cuenta bancaria",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 309,
    "word": "der Kunde",
    "plural": "die Kunden",
    "trans": "cliente",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 310,
    "word": "die Einladung",
    "plural": "die Einladungen",
    "trans": "invitación",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 311,
    "word": "die Vorsicht",
    "plural": "die Vorsichten",
    "trans": "cuidado",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 312,
    "word": "die Freizeit",
    "plural": "die Freizeiten",
    "trans": "tiempo libre",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 313,
    "word": "die Miete",
    "plural": "die Mieten",
    "trans": "renta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 314,
    "word": "der Zoll",
    "plural": "die Zölle",
    "trans": "aduana",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 315,
    "word": "die Kasse",
    "plural": "die Kassen",
    "trans": "caja",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 316,
    "word": "das Schild",
    "plural": "die Schilder",
    "trans": "cartel",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 317,
    "word": "das Hobby",
    "plural": "die Hobbys",
    "trans": "pasatiempo",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 318,
    "word": "der Koffer",
    "plural": "die Koffer",
    "trans": "maleta",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 319,
    "word": "das Gepäck",
    "plural": "die Gepäck",
    "trans": "equipaje",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 320,
    "word": "die Verwandte",
    "plural": "die Verwandten",
    "trans": "familiar",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 321,
    "word": "die Zigarette",
    "plural": "die Zigaretten",
    "trans": "cigarro",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 322,
    "word": "die KreditKarte",
    "plural": "die Kreditkarten",
    "trans": "tarjeta de crédito",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 323,
    "word": "der Feierabend",
    "plural": "die Feierabende",
    "trans": "fin de la jornada",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 324,
    "word": "die Reparatur",
    "plural": "die Reparaturen",
    "trans": "reparación",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 325,
    "word": "der Schalter",
    "plural": "die Schalter",
    "trans": "taquilla",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 326,
    "word": "das Schwimmbad",
    "plural": "die Schwimmbäder",
    "trans": "piscina",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 327,
    "word": "die Disco",
    "plural": "die Discos",
    "trans": "discoteca",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 328,
    "word": "das Fax",
    "plural": "die Faxe",
    "trans": "fax",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 329,
    "word": "der Reiseführer",
    "plural": "die Reiseführer",
    "trans": "guía de viaje",
    "type": "sustantivo",
    "level": "a1"
  },
  {
    "id": 330,
    "word": "der Automat",
    "plural": "die Automaten",
    "trans": "máquina automática",
    "type": "sustantivo",
    "level": "a1"
  }
]