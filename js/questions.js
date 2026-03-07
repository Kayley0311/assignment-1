const questions = [
    // Math
    {
        subject: "數學",
        question: "如果一個長方形的長是8公分，寬是5公分，它的面積是多少平方公分？",
        answers: [
            { text: "13平方公分", correct: false },
            { text: "40平方公分", correct: true },
            { text: "26平方公分", correct: false },
            { text: "64平方公分", correct: false }
        ],
        explanation: "長方形的面積是長乘以寬。所以，8公分 * 5公分 = 40平方公分。"
    },
    {
        subject: "數學",
        question: "解方程式 2x + 5 = 15，x等於多少？",
        answers: [
            { text: "10", correct: false },
            { text: "5", correct: true },
            { text: "7.5", correct: false },
            { text: "20", correct: false }
        ],
        explanation: "首先，兩邊都減去5，得到 2x = 10。然後，兩邊都除以2，得到 x = 5。"
    },
    {
        subject: "數學",
        question: "一個圓的半徑是10公分，它的周長約是多少？(π ≈ 3.14)",
        answers: [
            { text: "31.4公分", correct: false },
            { text: "62.8公分", correct: true },
            { text: "314公分", correct: false },
            { text: "100公分", correct: false }
        ],
        explanation: "圓的周長公式是 2 * π * 半徑。所以，2 * 3.14 * 10公分 = 62.8公分。"
    },

    // English
    {
        subject: "英文",
        question: "Which word is a verb?",
        answers: [
            { text: "Beautiful", correct: false },
            { text: "Quickly", correct: false },
            { text: "Run", correct: true },
            { text: "House", correct: false }
        ],
        explanation: "'Run' is an action word, which makes it a verb. The others are an adjective, an adverb, and a noun."
    },
    {
        subject: "英文",
        question: "What is the plural of 'child'?",
        answers: [
            { text: "Childs", correct: false },
            { text: "Children", correct: true },
            { text: "Childes", correct: false },
            { text: "Childer", correct: false }
        ],
        explanation: "'Child' is an irregular noun. Its plural form is 'children'."
    },
    {
        subject: "英文",
        question: "Choose the correct sentence: 'They ___ to the park yesterday.'",
        answers: [
            { text: "go", correct: false },
            { text: "goes", correct: false },
            { text: "went", correct: true },
            { text: "are going", correct: false }
        ],
        explanation: "The word 'yesterday' indicates that the action happened in the past. 'Went' is the past tense of 'go'."
    },

    // Science
    {
        subject: "科學",
        question: "水在攝氏幾度結冰？",
        answers: [
            { text: "100度", correct: false },
            { text: "0度", correct: true },
            { text: "-10度", correct: false },
            { text: "4度", correct: false }
        ],
        explanation: "在標準大氣壓下，純水的凝固點是攝氏0度（0°C）或華氏32度（32°F）。"
    },
    {
        subject: "科學",
        question: "地球的哪個部分主要由鐵和鎳組成？",
        answers: [
            { text: "地殼 (Crust)", correct: false },
            { text: "地函 (Mantle)", correct: false },
            { text: "地核 (Core)", correct: true },
            { text: "大氣層 (Atmosphere)", correct: false }
        ],
        explanation: "地球的核心，特別是內核，主要由鐵和鎳的金屬合金構成。"
    },
    {
        subject: "科學",
        question: "植物用來將光轉化為能量的過程稱為什麼？",
        answers: [
            { text: "呼吸作用", correct: false },
            { text: "蒸散作用", correct: false },
            { text: "光合作用", correct: true },
            { text: "分解作用", correct: false }
        ],
        explanation: "光合作用是植物、藻類和某些細菌用來將光能轉換成化學能，並儲存在葡萄糖中的過程。"
    },

    // History
    {
        subject: "歷史",
        question: "誰是美國第一任總統？",
        answers: [
            { text: "亞伯拉罕·林肯", correct: false },
            { text: "托馬斯·傑斐遜", correct: false },
            { text: "喬治·華盛頓", correct: true },
            { text: "約翰·亞當斯", correct: false }
        ],
        explanation: "喬治·華盛頓是美國的開國元勳之一，並於1789年至1797年擔任美國第一任總統。"
    },
    {
        subject: "歷史",
        question: "古埃及文明以建造什麼宏偉的建築而聞名？",
        answers: [
            { text: "羅馬競技場", correct: false },
            { text: "長城", correct: false },
            { text: "金字塔", correct: true },
            { text: "帕德嫩神廟", correct: false }
        ],
        explanation: "古埃及人為他們的法老建造了巨大的金字塔作為陵墓，這是他們最著名的建築成就之一。"
    },
    {
        subject: "歷史",
        question: "第二次世界大戰在哪一年結束？",
        answers: [
            { text: "1943", correct: false },
            { text: "1945", correct: true },
            { text: "1950", correct: false },
            { text: "1939", correct: false }
        ],
        explanation: "第二次世界大戰於1945年結束，德國在5月投降，日本在9月投降。"
    },

    // More Math
    {
        subject: "數學",
        question: "一個等腰三角形的兩個底角都是40度，頂角是幾度？",
        answers: [
            { text: "40度", correct: false },
            { text: "80度", correct: false },
            { text: "100度", correct: true },
            { text: "140度", correct: false }
        ],
        explanation: "三角形的內角和是180度。兩個底角的和是 40 + 40 = 80度。所以頂角是 180 - 80 = 100度。"
    },
    {
        subject: "數學",
        question: "一個正方形的邊長是6公分，它的周長是多少？",
        answers: [
            { text: "12公分", correct: false },
            { text: "24公分", correct: true },
            { text: "36公分", correct: false },
            { text: "6公分", correct: false }
        ],
        explanation: "正方形的周長是邊長的4倍。所以，6公分 * 4 = 24公分。"
    },

    // More English
    {
        subject: "英文",
        question: "Which of the following is an antonym for 'brave'?",
        answers: [
            { text: "Courageous", correct: false },
            { text: "Fearful", correct: true },
            { text: "Bold", correct: false },
            { text: "Daring", correct: false }
        ],
        explanation: "'Fearful' means feeling afraid, which is the opposite of 'brave'."
    },
    {
        subject: "英文",
        question: "What is the superlative form of the adjective 'good'?",
        answers: [
            { text: "Gooder", correct: false },
            { text: "Better", correct: false },
            { text: "Best", correct: true },
            { text: "Goodest", correct: false }
        ],
        explanation: "The adjective 'good' has irregular comparative and superlative forms: good, better, best."
    },

    // More Science
    {
        subject: "科學",
        question: "哪種氣體是人類呼吸所必需的？",
        answers: [
            { text: "氮氣 (Nitrogen)", correct: false },
            { text: "二氧化碳 (Carbon Dioxide)", correct: false },
            { text: "氧氣 (Oxygen)", correct: true },
            { text: "氫氣 (Hydrogen)", correct: false }
        ],
        explanation: "人類吸入氧氣並呼出二氧化碳。氧氣是細胞呼吸作用中產生能量所必需的。"
    },
    {
        subject: "科學",
        question: "太陽系中最大的行星是哪一顆？",
        answers: [
            { text: "地球 (Earth)", correct: false },
            { text: "火星 (Mars)", correct: false },
            { text: "木星 (Jupiter)", correct: true },
            { text: "土星 (Saturn)", correct: false }
        ],
        explanation: "木星是太陽系中體積和質量最大的行星，它的質量是其他所有行星總和的兩倍多。"
    },

    // More History
    {
        subject: "歷史",
        question: "中國的哪一個朝代建造了兵馬俑？",
        answers: [
            { text: "漢朝 (Han Dynasty)", correct: false },
            { text: "唐朝 (Tang Dynasty)", correct: false },
            { text: "秦朝 (Qin Dynasty)", correct: true },
            { text: "明朝 (Ming Dynasty)", correct: false }
        ],
        explanation: "兵馬俑是為中國第一位皇帝秦始皇陪葬的，因此它是在秦朝時期建造的。"
    },
    {
        subject: "歷史",
        question: "“我思故我在”是哪位哲学家的名言？",
        answers: [
            { text: "柏拉圖 (Plato)", correct: false },
            { text: "亞里士多德 (Aristotle)", correct: false },
            { text: "勒奈·笛卡爾 (René Descartes)", correct: true },
            { text: "蘇格拉底 (Socrates)", correct: false }
        ],
        explanation: "這句話是法國哲學家勒奈·笛卡爾在其著作《方法論》中提出的基本哲學命題。"
    },

    // 5 more Math
    {
        subject: "數學",
        question: "3的4次方是多少？",
        answers: [
            { text: "12", correct: false },
            { text: "64", correct: false },
            { text: "81", correct: true },
            { text: "27", correct: false }
        ],
        explanation: "3的4次方等於 3 * 3 * 3 * 3 = 81。"
    },
    {
        subject: "數學",
        question: "一個立方體的體積是27立方公分，它的邊長是多少？",
        answers: [
            { text: "3公分", correct: true },
            { text: "9公分", correct: false },
            { text: "6公分", correct: false },
            { text: "27公分", correct: false }
        ],
        explanation: "立方體的體積是邊長的三次方。因為 3 * 3 * 3 = 27，所以邊長是3公分。"
    },
    {
        subject: "數學",
        question: "1/2 + 1/4 等於多少？",
        answers: [
            { text: "1/6", correct: false },
            { text: "2/6", correct: false },
            { text: "3/4", correct: true },
            { text: "1/8", correct: false }
        ],
        explanation: "要相加分數，需要先通分。1/2 等於 2/4。所以 2/4 + 1/4 = 3/4。"
    },
    {
        subject: "數學",
        question: "下列哪個數字是質數？",
        answers: [
            { text: "9", correct: false },
            { text: "15", correct: false },
            { text: "1", correct: false },
            { text: "17", correct: true }
        ],
        explanation: "質數是只能被1和它自己整除的大於1的自然數。17隻能被1和17整除，所以是質數。"
    },
    {
        subject: "數學",
        question: "一個旅行者以每小時60公里的速度行駛了3個小時，他行駛了多遠？",
        answers: [
            { text: "20公里", correct: false },
            { text: "180公里", correct: true },
            { text: "63公里", correct: false },
            { text: "90公里", correct: false }
        ],
        explanation: "距離等於速度乘以時間。所以，60公里/小時 * 3小時 = 180公里。"
    },

    // 5 more English
    {
        subject: "英文",
        question: "Which of these is a preposition?",
        answers: [
            { text: "And", correct: false },
            { text: "Under", correct: true },
            { text: "Them", correct: false },
            { text: "Jump", correct: false }
        ],
        explanation: "'Under' is a preposition, which shows the relationship between a noun or pronoun and other words in a sentence."
    },
    {
        subject: "英文",
        question: "What does the abbreviation 'e.g.' stand for?",
        answers: [
            { text: "For example", correct: true },
            { text: "And so on", correct: false },
            { text: "In other words", correct: false },
            { text: "Etcetera", correct: false }
        ],
        explanation: "'e.g.' is an abbreviation for the Latin phrase 'exempli gratia', which means 'for example'."
    },
    {
        subject: "英文",
        question: "Identify the noun in the following sentence: 'The cat slept peacefully.'",
        answers: [
            { text: "The", correct: false },
            { text: "Slept", correct: false },
            { text: "Peacefully", correct: false },
            { text: "Cat", correct: true }
        ],
        explanation: "'Cat' is a person, place, or thing, which makes it a noun."
    },
    {
        subject: "英文",
        question: "Which suffix can you add to the word 'danger' to make it an adjective?",
        answers: [
            { text: "-ly", correct: false },
            { text: "-ous", correct: true },
            { text: "-ment", correct: false },
            { text: "-ful", correct: false }
        ],
        explanation: "Adding '-ous' to 'danger' creates the adjective 'dangerous', which means full of danger."
    },
    {
        subject: "英文",
        question: "What is the opposite of 'ancient'?",
        answers: [
            { text: "Old", correct: false },
            { text: "Historic", correct: false },
            { text: "Modern", correct: true },
            { text: "Aged", correct: false }
        ],
        explanation: "'Modern' refers to the present or recent times, which is the opposite of 'ancient' (belonging to the very distant past)."
    },

    // 5 more Science
    {
        subject: "科學",
        question: "什麼是化學式為H₂O的物質？",
        answers: [
            { text: "鹽", correct: false },
            { text: "糖", correct: false },
            { text: "水", correct: true },
            { text: "二氧化碳", correct: false }
        ],
        explanation: "H₂O是水的化學式，代表它由兩個氫原子和一個氧原子組成。"
    },
    {
        subject: "科學",
        question: "我們的骨骼系統主要功能是什麼？",
        answers: [
            { text: "消化食物", correct: false },
            { text: "泵送血液", correct: false },
            { text: "支撐身體和保護器官", correct: true },
            { text: "思考", correct: false }
        ],
        explanation: "骨骼系統為身體提供結構和支撐，並保護內部重要器官，如大腦和心臟。"
    },
    {
        subject: "科學",
        question: "彩虹的形成是什麼物理現象造成的？",
        answers: [
            { text: "反射", correct: false },
            { text: "折射與色散", correct: true },
            { text: "繞射", correct: false },
            { text: "干涉", correct: false }
        ],
        explanation: "當陽光穿過空氣中的水滴時，光線會發生折射和色散，分解成不同的顏色，從而形成彩虹。"
    },
    {
        subject: "科學",
        question: "哪種力量使物體向地球中心掉落？",
        answers: [
            { text: "磁力", correct: false },
            { text: "摩擦力", correct: false },
            { text: "張力", correct: false },
            { text: "重力", correct: true }
        ],
        explanation: "重力是所有具有質量的物體之間相互吸引的力。地球的重力將物體拉向其中心。"
    },
    {
        subject: "科學",
        question: "構成所有物質的基本單位是什麼？",
        answers: [
            { text: "分子", correct: false },
            { text: "原子", correct: true },
            { text: "細胞", correct: false },
            { text: "電子", correct: false }
        ],
        explanation: "原子是構成化學元素的最小單位，也是構成所有物質的基本單位。"
    },

    // 5 more History
    {
        subject: "歷史",
        question: "工業革命始於哪個國家？",
        answers: [
            { text: "美國", correct: false },
            { text: "法國", correct: false },
            { text: "英國", correct: true },
            { text: "德國", correct: false }
        ],
        explanation: "工業革命是18世紀後期始於英國的一系列技術、社會和經濟變革。"
    },
    {
        subject: "歷史",
        question: "誰發明了電話？",
        answers: [
            { text: "托馬斯·愛迪生", correct: false },
            { text: "亞歷山大·格拉漢姆·貝爾", correct: true },
            { text: "尼古拉·特斯拉", correct: false },
            { text: "伽利略·伽利萊", correct: false }
        ],
        explanation: "亞歷山大·格拉漢姆·貝爾在1876年獲得了電話的第一個美國專利。"
    },
    {
        subject: "歷史",
        question: "馬丁·路德·金恩是為哪個運動奮鬥的領袖？",
        answers: [
            { text: "婦女選舉權運動", correct: false },
            { text: "美國民權運動", correct: true },
            { text: "反越戰運動", correct: false },
            { text: "環保運動", correct: false }
        ],
        explanation: "馬丁·路德·金恩是美國民權運動的傑出領袖，倡導通過非暴力方式爭取非裔美國人的權利。"
    },
    {
        subject: "歷史",
        question: "印刷術最早在哪個國家發明？",
        answers: [
            { text: "德國", correct: false },
            { text: "韓國", correct: false },
            { text: "中國", correct: true },
            { text: "英國", correct: false }
        ],
        explanation: "活字印刷術最早由中國的畢昇在北宋時期發明。"
    },
    {
        subject: "歷史",
        question: "哪座城市因維蘇威火山爆發而被掩埋？",
        answers: [
            { text: "羅馬", correct: false },
            { text: "雅典", correct: false },
            { text: "龐貝", correct: true },
            { text: "斯巴達", correct: false }
        ],
        explanation: "公元79年，維蘇威火山的災難性噴發將羅馬城市龐貝和赫庫蘭尼姆掩埋在火山灰和浮石之下。"
    }
];