/* ============================================================
   DATA — chapter lists follow the Punjab Board (PCTB) textbooks
   commonly used across Punjab boards. Explanations, MCQs and
   questions in this app are ORIGINAL study material, not the
   boards' textbook text.
============================================================ */
var SUBJECTS = [
  {id:"math",    en:"Mathematics",       ur:"ریاضی",              color:"#14532d"},
  {id:"english", en:"English",           ur:"انگریزی",            color:"#7c2d12"},
  {id:"urdu",    en:"Urdu",              ur:"اردو",               color:"#831843"},
  {id:"physics", en:"Physics",           ur:"طبیعیات",           color:"#1e3a5f"},
  {id:"chem",    en:"Chemistry",         ur:"کیمیا",              color:"#5b21b6"},
  {id:"bio",     en:"Biology",           ur:"حیاتیات",           color:"#166534"},
  {id:"cs",      en:"Computer Science",  ur:"کمپیوٹر سائنس",     color:"#0f4c5c"},
  {id:"islam",   en:"Islamiyat",         ur:"اسلامیات",           color:"#365314"},
  {id:"pak",     en:"Pakistan Studies",  ur:"مطالعہ پاکستان",    color:"#713f12"},
  {id:"quran",   en:"Tarjuma-tul-Quran", ur:"ترجمۃ القرآن",      color:"#44403c"}
];
var CLASSES = [
  {n:9,  en:"Class 9",  ur:"جماعت نہم",    sub:"Matric — Part I"},
  {n:10, en:"Class 10", ur:"جماعت دہم",    sub:"Matric — Part II"},
  {n:11, en:"Class 11", ur:"جماعت یازدہم", sub:"First Year — Intermediate Part I"},
  {n:12, en:"Class 12", ur:"جماعت دوازدہم", sub:"Second Year — Intermediate Part II"}
];

var CHAPTERS = {
/* ---------------- CLASS 9 ---------------- */
"9-math":["Matrices and Determinants","Real and Complex Numbers","Logarithms","Algebraic Expressions and Algebraic Formulas","Factorization","Algebraic Manipulation","Linear Equations and Inequalities","Linear Graphs and Their Application","Introduction to Coordinate Geometry","Congruent Triangles","Parallelograms and Triangles","Line Bisectors and Angle Bisectors","Sides and Angles of a Triangle","Ratio and Proportion","Pythagoras Theorem","Theorems Related with Area","Practical Geometry — Triangles"],
"9-physics":["Physical Quantities and Measurement","Kinematics","Dynamics","Turning Effect of Forces","Gravitation","Work and Energy","Properties of Matter","Thermal Properties of Matter","Transfer of Heat"],
"9-chem":["Fundamentals of Chemistry","Structure of Atoms","Periodic Table and Periodicity of Properties","Structure of Molecules","Physical States of Matter","Solutions","Electrochemistry","Chemical Reactivity"],
"9-bio":["Introduction to Biology","Solving a Biological Problem","Biodiversity","Cells and Tissues","Cell Cycle","Enzymes","Bioenergetics","Nutrition","Transport"],
"9-cs":["Fundamentals of Computer","Fundamentals of Operating System","Office Automation","Data Communication","Computer Networks","Computer Security and Ethics"],
"9-english":["The Saviour of Mankind (SAW)","Patriotism","Media and Its Impact","Hazrat Asma (RA)","Daffodils — Poem","The Quaid's Vision and Pakistan","Sultan Ahmad Masjid","Stopping by Woods on a Snowy Evening — Poem","All is Not Lost","Drug Addiction","Noise Pollution","Three Days to See"],
"9-urdu":["حصہ نثر: حمد و نعت اور سیرتِ نبوی ﷺ","حصہ نثر: حجۃ الوداع / اخلاقی اسباق","حصہ نثر: مرزا غالب کے خطوط","حصہ نثر: سیرت و سوانح کے منتخب اسباق","حصہ نظم: نظمیں اور تشریح","حصہ غزل: غزلیں اور تشریح","قواعد: اسم، فعل، حرف اور مرکبات","انشا: خطوط، درخواستیں اور مضامین"],
"9-islam":["قرآن مجید و حدیث نبوی ﷺ","عقائد و عبادات: توحید، رسالت، نماز، روزہ","اخلاق و آداب","سیرتِ طیبہ ﷺ","اسلامی معاشرت و حقوق العباد","غزوات و اہم تاریخی واقعات"],
"9-pak":["Ideological Basis of Pakistan","Making of Pakistan (1857–1947)","Land and Environment of Pakistan","History of Pakistan — Ancient to Medieval Period"],
"9-quran":["سورۃ البقرہ — منتخب آیات و ترجمہ","سورۃ آل عمران — منتخب آیات و ترجمہ","سورۃ النساء — منتخب آیات و ترجمہ","سورۃ المائدہ — منتخب آیات و ترجمہ","مشکل الفاظ، مفاہیم اور اسباقِ زندگی"],

/* ---------------- CLASS 10 ---------------- */
"10-math":["Quadratic Equations","Theory of Quadratic Equations","Variations","Partial Fractions","Sets and Functions","Basic Statistics","Introduction to Trigonometry","Projection of a Side of a Triangle","Chords of a Circle","Tangent to a Circle","Chords and Arcs","Angle in a Segment of a Circle","Practical Geometry — Circles"],
"10-physics":["Simple Harmonic Motion and Waves","Sound","Geometrical Optics","Electrostatics","Current Electricity","Electromagnetism","Basic Electronics","Information and Communication Technology","Atomic and Nuclear Physics"],
"10-chem":["Chemical Equilibrium","Acids, Bases and Salts","Organic Chemistry","Hydrocarbons","Biochemistry","Environmental Chemistry — I: Atmosphere","Environmental Chemistry — II: Water","Chemical Industries"],
"10-bio":["Gaseous Exchange","Homeostasis","Coordination and Control","Support and Movement","Reproduction","Inheritance","Man and His Environment","Biotechnology","Pharmacology"],
"10-cs":["Introduction to Programming","Programming in C — Data Types and I/O","Control Structures in C","Functions in C","Arrays and Strings","File Handling and Problem Solving"],
"10-english":["Hazrat Muhammad (SAW) — An Embodiment of Justice","Chinese New Year","Try Try Again — Poem","First Aid","Water Scarcity in Pakistan","Population Growth and Its Impact","The Great Reward","The Little Art of Leaving Things","Health and Hygiene","Television vs New Media","Peace — Poem","Selecting the Right Career","Human Rights and Their Importance"],
"10-urdu":["حصہ نثر: سیرت و اخلاقی اسباق","حصہ نثر: ملکی و ملی اسباق","حصہ نثر: ادبی اسباق و خاکے","حصہ نظم: نظمیں اور تشریح","حصہ غزل: غزلیں اور تشریح","ڈرامہ: منتخب ڈرامہ","قواعد و انشا: محاورات، خطوط اور مضامین"],
"10-islam":["قرآن مجید و حدیث نبوی ﷺ","زکوٰۃ، حج اور جہاد — عبادات","اخلاقِ حسنہ و معاشرتی آداب","سیرتِ نبوی ﷺ — مدنی دور","اسلام اور مغرب / عصرِ حاضر کے مسائل","حقوق اللہ و حقوق العباد"],
"10-pak":["History of Pakistan (1947–1973)","History of Pakistan (1973 to Present)","Culture of Pakistan","Population and Employment","Economy and Foreign Policy of Pakistan"],
"10-quran":["سورۃ الانفال — منتخب آیات و ترجمہ","سورۃ التوبہ — منتخب آیات و ترجمہ","سورۃ یونس و ہود — منتخب آیات و ترجمہ","سورۃ یوسف — منتخب آیات و ترجمہ","مشکل الفاظ، مفاہیم اور اسباقِ زندگی"],

/* ---------------- CLASS 11 ---------------- */
"11-math":["Number Systems","Sets, Functions and Groups","Matrices and Determinants","Quadratic Equations","Partial Fractions","Sequences and Series","Permutation, Combination and Probability","Mathematical Induction and Binomial Theorem","Fundamentals of Trigonometry","Trigonometric Identities","Trigonometric Functions and Their Graphs","Application of Trigonometry","Inverse Trigonometric Functions","Solutions of Trigonometric Equations"],
"11-physics":["Measurements","Vectors and Equilibrium","Motion and Force","Work and Energy","Rotational and Circular Motion","Fluid Dynamics","Oscillations","Waves","Physical Optics","Thermodynamics"],
"11-chem":["Basic Concepts","Experimental Techniques in Chemistry","Gases","Liquids and Solids","Atomic Structure","Chemical Bonding","Thermochemistry","Chemical Equilibrium","Solutions","Electrochemistry","Reaction Kinetics"],
"11-bio":["Biological Molecules","Enzymes","The Cell","Diversity Among Plants","Diversity Among Animals","Kingdom Prokaryotae","Kingdom Protista","Kingdom Fungi","Kingdom Plantae","Kingdom Animalia","Bioenergetics","Nutrition","Gaseous Exchange","Transport"],
"11-cs":["Overview of Computer System","Computer Memory","Data Representation","Boolean Algebra","Computer Software","Problem Solving","Programming in C — Basics","Data Types, Operators and Input/Output in C"],
"11-english":["Button, Button","Clearing in the Sky","Dark They Were, and Golden-Eyed","Thank You, Ma'am","The Piece of String","The Reward","A Mild Attack of Locusts","I Have a Dream","The Gift of the Magi","God Be Praised","Overcoat — Play","The Angel and the Author — and Others (Poems: The Rain, Night Mail, In the Street of the Fruit Stalls)"],
"11-urdu":["حصہ نثر: منتخب افسانے و اسباق","حصہ نثر: مضامین و انشائیے","حصہ نظم: نظمیں اور تشریح","حصہ غزل: غزلیں اور تشریح","قواعد: علمِ بیان و بدیع کی بنیادیں","انشا: مضمون نویسی و خطوط"],
"11-islam":["قرآن و حدیث — منتخب مطالعہ","عقائد: توحید، رسالت، آخرت","عبادات و معاملات","اسلامی نظامِ حیات","سیرت و تاریخِ اسلام","عصرِ حاضر اور اسلام"],
"11-pak":["توجیہ: مطالعہ پاکستان انٹرمیڈیٹ میں عموماً جماعت ۱۲ میں پڑھایا جاتا ہے — یہ سیکشن جماعت ۱۲ کی کتاب کی پیشگی تیاری ہے","نظریۂ پاکستان اور تحریکِ پاکستان کا جائزہ","قیامِ پاکستان کے ابتدائی مسائل — پیشگی مطالعہ"],
"11-quran":["سورۃ الکہف — منتخب آیات و ترجمہ","سورۃ مریم — منتخب آیات و ترجمہ","سورۃ طٰہٰ — منتخب آیات و ترجمہ","سورۃ الانبیاء — منتخب آیات و ترجمہ","مشکل الفاظ، مفاہیم اور اسباقِ زندگی"],

/* ---------------- CLASS 12 ---------------- */
"12-math":["Functions and Limits","Differentiation","Integration","Introduction to Analytic Geometry","Linear Inequalities and Linear Programming","Conic Section","Vectors"],
"12-physics":["Electrostatics","Current Electricity","Electromagnetism","Electromagnetic Induction","Alternating Current","Physics of Solids","Electronics","Dawn of Modern Physics","Atomic Spectra","Nuclear Physics"],
"12-chem":["s-Block and p-Block Elements","Transition Elements","Organic Compounds — Introduction","Hydrocarbons","Alkyl Halides","Alcohols, Phenols and Ethers","Aldehydes and Ketones","Carboxylic Acids","Macromolecules","Common Chemical Industries in Pakistan","Environmental Chemistry"],
"12-bio":["Homeostasis","Support and Movement","Coordination and Control","Reproduction","Growth and Development","Chromosomes and DNA","Cell Cycle","Variation and Gene–Environment Interaction","Biotechnology","Evolution","Ecosystem","Some Major Ecosystems","Man and His Environment"],
"12-cs":["Database Fundamentals","Data Models and DBMS","Programming in C — Advanced Concepts","Functions, Arrays and Pointers in C","Object-Oriented Concepts — Introduction","Computer Networks and Internet"],
"12-english":["Why Boys Fail in College","End of Term","On Destroying Books","The Man Who Was a Hospital","My Financial Career","China's Way to Progress","Goodbye, Mr. Chips — Novel (Chapters 1–9)","Goodbye, Mr. Chips — Novel (Chapters 10–18)","Poetry: The Hollow Men, A Tale of Two Cities (extract), My Neighbour Friend Brews His Own Tea, He Came to Know Himself, God's Attributes, The Delight Song"],
"12-urdu":["حصہ نثر: منتخب اسباق و افسانے","حصہ نثر: ادبی مضامین و سفرنامے","حصہ نظم: نظمیں اور تشریح","حصہ غزل: غزلیں اور تشریح","ناول / ڈرامہ — منتخب مطالعہ","قواعد و انشا: تنقید و مضمون نویسی"],
"12-islam":["قرآن و حدیث — منتخب مطالعہ","اسلامی تہذیب و ثقافت","اسلام اور جدید دور کے چیلنجز","خاندانی نظام و حقوقِ نسواں","معاشی نظامِ اسلام","سیرت و اسلامی تاریخ کے منتخب موضوعات"],
"12-pak":["نظریۂ پاکستان","تحریکِ پاکستان (1857–1947)","قیامِ پاکستان اور ابتدائی مسائل (1947–1958)","آئینی ترقی (1958–1973)","آئینِ 1973 اور جمہوری دور","پاکستان کی خارجہ پالیسی، معیشت اور ثقافت"],
"12-quran":["سورۃ النور — منتخب آیات و ترجمہ","سورۃ الفرقان — منتخب آیات و ترجمہ","سورۃ الاحزاب — منتخب آیات و ترجمہ","سورۃ محمد و الفتح — منتخب آیات و ترجمہ","مشکل الفاظ، مفاہیم اور اسباقِ زندگی"]
};

/* ---------- Key formulas & definitions bank (standard textbook facts) ---------- */
var BANK = {
math:{title:"Aham Formulas — اہم فارمولے",items:[
["Quadratic Formula","x = [−b ± √(b² − 4ac)] / 2a — for ax² + bx + c = 0. Discriminant b² − 4ac roots ki noiyat batata hai."],
["Logarithm Laws","log(mn) = log m + log n · log(m/n) = log m − log n · log mⁿ = n log m · logₐb = log b / log a."],
["Algebraic Formulas","(a+b)² = a²+2ab+b² · (a−b)² = a²−2ab+b² · a²−b² = (a+b)(a−b) · (a+b)³ = a³+3a²b+3ab²+b³."],
["Distance Formula","d = √[(x₂−x₁)² + (y₂−y₁)²] — do nuqton ke darmiyan faasla."],
["Pythagoras Theorem","Qaimat-uz-zawiya maslas mein: (Hypotenuse)² = (Perpendicular)² + (Base)²."],
["Trigonometry (Class 10+)","sin²θ + cos²θ = 1 · tanθ = sinθ/cosθ · 1 + tan²θ = sec²θ."],
["Statistics","Mean = Σx/n · Median = darmiyani qeemat (tarteeb ke baad) · Mode = sab se zyada dohraai jane wali qeemat."],
["AP / GP (Class 11+)","AP: aₙ = a + (n−1)d, Sₙ = n/2[2a+(n−1)d] · GP: aₙ = arⁿ⁻¹, Sₙ = a(rⁿ−1)/(r−1)."],
["Derivative Rules (Class 12)","d/dx(xⁿ) = nxⁿ⁻¹ · d/dx(sin x) = cos x · d/dx(eˣ) = eˣ · Product rule: (uv)' = u'v + uv'."],
["Integration (Class 12)","∫xⁿ dx = xⁿ⁺¹/(n+1) + C · ∫(1/x) dx = ln|x| + C · ∫eˣ dx = eˣ + C."]]},
physics:{title:"Aham Formulas & Definitions — اہم فارمولے و تعریفات",items:[
["Speed & Velocity","v = s/t · Acceleration a = (v − u)/t · Motion equations: v = u + at, s = ut + ½at², 2as = v² − u²."],
["Newton's Second Law","F = ma — force = mass × acceleration. Unit: Newton (N)."],
["Work & Energy","W = F·s · KE = ½mv² · PE = mgh · Power P = W/t (Watt)."],
["Gravitation","F = G·m₁m₂/r² · g = GM/R² ≈ 9.8 m/s² on Earth."],
["Ohm's Law","V = IR — voltage = current × resistance. Unit of resistance: Ohm (Ω)."],
["Electric Power","P = VI = I²R = V²/R. Energy unit: kWh (unit)."],
["Waves","v = fλ — wave speed = frequency × wavelength. Unit of frequency: Hertz (Hz)."],
["Lens / Mirror Formula","1/f = 1/v + 1/u (sign convention ke saath) · Magnification m = v/u = hᵢ/hₒ."],
["Density & Pressure","ρ = m/V · P = F/A · Liquid pressure P = ρgh."],
["Photoelectric Effect (Class 12)","E = hf · KE_max = hf − φ (work function). Planck constant h = 6.63×10⁻³⁴ J·s."]]},
chem:{title:"Aham Definitions — اہم تعریفات",items:[
["Mole","Ek mole mein 6.02×10²³ particles hote hain (Avogadro number). Molar mass = ek mole ka gram mein wazan."],
["Acid & Base","Acid H⁺ deta hai, Base OH⁻ deti hai (Arrhenius). pH = −log[H⁺]; pH < 7 acidic, pH = 7 neutral, pH > 7 basic."],
["Periodic Table","Modern law: properties atomic number ki periodic function hain. Groups = vertical columns (18), Periods = horizontal rows (7)."],
["Chemical Bond","Ionic bond: electrons ka tabadla. Covalent bond: electrons ki sharing. Hydrogen bond: H aur electronegative atom (N, O, F) ke darmiyan kamzor kashish."],
["Oxidation & Reduction","Oxidation = electrons khona / oxygen pana. Reduction = electrons pana / oxygen khona. (OIL RIG)"],
["Organic Chemistry","Carbon ke compounds ka ilm. Hydrocarbons: sirf C aur H — Alkanes (CₙH₂ₙ₊₂), Alkenes (CₙH₂ₙ), Alkynes (CₙH₂ₙ₋₂)."],
["Equilibrium","Le Chatelier's Principle: system par dabao daala jaye to equilibrium us asar ko kam karne ki simt shift hota hai."],
["Electrolysis","Electric current se chemical decomposition. Cathode (−) par reduction, Anode (+) par oxidation hoti hai."],
["Isotopes","Ek hi element ke woh atoms jin ka atomic number ek, magar mass number mukhtalif ho (neutrons mukhtalif)."],
["Empirical & Molecular Formula","Empirical = sab se saada ratio. Molecular = asal atoms ki tadaad; Molecular = n × Empirical."]]},
bio:{title:"Aham Definitions — اہم تعریفات",items:[
["Cell","Zindagi ki bunyadi saakht aur kaam ki ikai (basic structural & functional unit of life)."],
["Photosynthesis","6CO₂ + 6H₂O —(sunlight, chlorophyll)→ C₆H₁₂O₆ + 6O₂. Chloroplast mein hoti hai."],
["Respiration","C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP). Aerobic = oxygen ke saath, Anaerobic = baghair oxygen."],
["Enzyme","Biological catalyst — protein jo reaction ki raftaar barhata hai, khud tabdeel nahi hota. Lock & Key / Induced Fit model."],
["Mitosis & Meiosis","Mitosis: 2 daughter cells, chromosomes barabar (growth/repair). Meiosis: 4 cells, chromosomes aadhe (gametes)."],
["Homeostasis","Androoni mahol ko mustaqil rakhna (masalan body temperature 37°C, khoon mein glucose)."],
["DNA","Double helix — deoxyribose sugar, phosphate aur nitrogen bases (A, T, C, G). A=T, C≡G pairing."],
["Inheritance","Genotype = genetic makeup. Phenotype = zahiri sifaat. Dominant allele capital letter se zahir hota hai."],
["Ecosystem","Producer (plants) → Consumer → Decomposer. Food chain mein energy ek simt behti hai; 10% law."],
["Biotechnology","Zinda ajzaa ya enzymes se insani faide ki products banana — masalan insulin ki tayyari."]]},
cs:{title:"Aham Definitions — اہم تعریفات",items:[
["Computer","Electronic machine jo data ko input lekar process karti hai aur meaningful information (output) deti hai."],
["Hardware & Software","Hardware = physical hissay (CPU, monitor). Software = programs (OS, MS Word) jo hardware ko chalate hain."],
["Data & Information","Data = kachche facts/figures. Information = process shuda, meaningful data."],
["Operating System","System software jo hardware aur user ke darmiyan rabta hai — masalan Windows, Linux, Android."],
["Network Topologies","Bus, Star, Ring, Mesh. LAN = chhota area, WAN = bara area (Internet sab se bara WAN)."],
["Binary System","Computer sirf 0 aur 1 samajhta hai. 1 Byte = 8 Bits · 1 KB = 1024 Bytes."],
["Boolean Algebra","AND: output 1 sirf jab dono input 1. OR: koi ek 1 ho to 1. NOT: ulta kar deta hai."],
["DBMS (Class 12)","Database Management System — data ko organize, store aur retrieve karne ka software (masalan MS Access, MySQL). Primary Key = har record ki munfarid pehchan."],
["Compiler vs Interpreter","Compiler poora program ek saath translate karta hai; Interpreter line-by-line."],
["Computer Security","Virus = nuqsan deh program. Firewall, antivirus aur strong password se hifazat. Data backup zaroori hai."]]},
english:{title:"Exam Toolkit — گرامر و تحریر",items:[
["Essay Writing","Introduction (thesis) → 3 body paragraphs (topic sentence + examples) → Conclusion. Board essay 250–300 words ka hota hai."],
["Letter / Application","Format: Sender address → Date → Receiver → Subject (application mein) → Salutation → Body → Subscription (Yours obediently/faithfully)."],
["Tenses — Quick Rule","Present Indefinite: rozana aadat (V1 + s/es). Past Indefinite: guzra waqea (V2). Future: will/shall + V1. Continuous: is/am/are + V-ing."],
["Active / Passive","Active: Subject + Verb + Object. Passive: Object + is/am/are/was/were + V3 + by + Subject. Tense ke mutabiq 'be' badlein."],
["Direct / Indirect","Reporting verb past ho to tense ek step peeche jata hai: is→was, will→would, can→could. 'Said to' → told/asked."],
["Translation (Urdu → English)","Pehle jumle ka subject pehchanein, tense dekhein, phir tarjuma karein. Muhawara lafzi nahi, mafhoom se translate hota hai."],
["Summary Writing","Asal paragraph ka 1/3 hissa, apne alfaaz mein, sirf aham nuktaat — misalein aur takraar nikaal dein."],
["Poem Explanation","Reference → Context → Explanation: pehle shayar/naazim ka hawala, phir ashaar ki sada alfaaz mein wazahat."]]},
urdu:{title:"قواعد و انشا — اہم نکات",items:[
["اسم، فعل، حرف","اسم: کسی چیز/شخص/جگہ کا نام۔ فعل: کام کا ہونا یا کرنا۔ حرف: وہ لفظ جو اسموں اور جملوں کو ملائے۔"],
["مرکب الفاظ","مرکبِ اضافی (کتابِ اردو)، مرکبِ توصیفی (اچھا لڑکا)، مرکبِ عطفی (ماں باپ) — امتحان میں مثالیں لازمی دیں۔"],
["تشریحِ اشعار","حوالہ (شاعر و نظم/غزل کا نام) → پس منظر → شعر کی سادہ الفاظ میں تشریح → اہم نکتہ۔"],
["غزل و نظم","غزل: ہر شعر الگ موضوع، مطلع و مقطع۔ نظم: ایک ہی موضوع پر مسلسل اشعار (حمد، نعت، مرثیہ اقسام ہیں)۔"],
["خط و درخواست","درخواست: بائیں طرف 'بخدمت' سے آغاز، موضوع واضح، مختصر متن، 'آپ کا فرمانبردار' پر اختتام۔"],
["مضمون نویسی","تمہید → تین حصے (وجوہات، فوائد/نقصانات، حل) → نتیجہ۔ اقوال و اشعار سے مضمون مضبوط ہوتا ہے۔"],
["محاورات","محاورہ اپنے اصل معنی کے بجائے مجازی معنی میں استعمال ہوتا ہے — جملوں میں استعمال امتحان کا لازمی حصہ ہے۔"]]},
islam:{title:"اہم تعریفات و نکات",items:[
["توحید","اللہ کو ذات و صفات میں یکتا ماننا — ایمان کی بنیاد۔ شرک اس کی ضد ہے۔"],
["ارکانِ اسلام","شہادت، نماز، روزہ، زکوٰۃ، حج — حدیثِ جبرائیل و حدیثِ بنی الاسلام کی روشنی میں یاد کریں۔"],
["زکوٰۃ کا نصاب","سونا ساڑھے سات تولے، چاندی ساڑھے باون تولے — مال کا چالیسواں حصہ (2.5%) زکوٰۃ ہے۔"],
["حدیث و سنت","حدیث: نبی کریم ﷺ کا قول، فعل یا تقریر۔ سنت: آپ ﷺ کا عملی طریقہ۔"],
["حقوق العباد","والدین، پڑوسی، یتیم، مسکین اور مہمان کے حقوق — امتحان کے پسندیدہ موضوعات۔"],
["جہاد کی اقسام","جہاد بالنفس (سب سے بڑا)، جہاد بالمال، جہاد بالعلم — مفہوم درست انداز میں لکھیں۔"]]},
pak:{title:"Aham Dates & Facts — اہم تاریخیں",items:[
["1857","Jang-e-Azadi — British hukoomat ke khilaf pehli bari baghawat; is ke baad East India Company khatam hui."],
["1906","Muslim League ka qayaam — Dhaka (30 December 1906). Pehle sadar: Sir Agha Khan."],
["1905 / 1909","Taqseem-e-Bengal (1905) aur Minto-Morley Reforms / Separate Electorates (1909)."],
["1916","Lucknow Pact — Congress aur Muslim League ka muahida."],
["1930","Allahabad Khutba — Allama Iqbal ne alag Muslim riyasat ka tasawwur diya (29–30 Dec 1930)."],
["1940","Qarardad-e-Pakistan (Lahore Resolution) — 23 March 1940, Minto Park Lahore, A.K. Fazlul Huq ne pesh ki."],
["1947","3 June Plan → 14 August 1947 Pakistan wujood mein aaya. Pehle Governor General: Quaid-e-Azam Muhammad Ali Jinnah. Pehle PM: Liaquat Ali Khan."],
["1956 / 1962 / 1973","Pakistan ke teen aaeen (constitutions). 1973 ka Aaeen ab tak naafiz hai — parliamentary, federal, Islamic."],
["Geography","Area ≈ 796,095 sq km. Sab se lambi sarhad: Afghanistan (Durand Line). Sab se ooncha pahar: K2 (8,611 m, duniya ka dusra buland tareen)."],
["1965 / 1971","1965 ki jang aur 1971 mein Mashriqi Pakistan ki alahdgi (Bangladesh)."]]},
quran:{title:"مطالعے کے نکات — Study Notes",items:[
["ترجمہ کا طریقہ","پہلے مشکل الفاظ کے معنی، پھر آیت کا لفظی ترجمہ، پھر مفہوم — تینوں مراحل امتحان میں نمبر دیتے ہیں۔"],
["مشکل الفاظ","ہر سورت کے مشکل عربی الفاظ کی فہرست الگ نوٹ بک میں لکھیں اور ہفتہ وار دہرائیں۔"],
["اسباقِ زندگی","ہر آیت سے عملی سبق نکالنا سیکھیں — یہی اس مضمون کے طویل سوالات کی بنیاد ہے۔"],
["حفظ و تلاوت","روزانہ چند آیات کی تلاوت و ترجمہ دہرانے سے یادداشت پختہ ہوتی ہے۔"]]}
};

/* ---------- Original practice MCQs per subject (with answers) ---------- */
var MCQS = {
math:[["If A is a matrix of order 2×3 and B of order 3×2, then AB has order:",["2×2","3×3","2×3","Not possible"],0,"Rows of A × columns of B = 2×2."],
["log 1000 (base 10) equals:",["2","3","10","100"],1,"10³ = 1000, so log₁₀1000 = 3."],
["If x² − 5x + 6 = 0, the roots are:",["1, 6","2, 3","−2, −3","5, 1"],1,"(x−2)(x−3)=0 → x = 2, 3."],
["√2 is a/an:",["Rational number","Integer","Irrational number","Natural number"],2,"√2 cannot be written as p/q, so it is irrational."],
["In a right triangle, hypotenuse² equals:",["Sum of squares of other two sides","Product of other sides","Difference of squares","Twice the base"],0,"Pythagoras theorem."]],
physics:[["SI unit of force is:",["Joule","Watt","Newton","Pascal"],2,"Force is measured in Newtons (N)."],
["Value of g on Earth is approximately:",["8.9 m/s²","9.8 m/s²","10.8 m/s²","6.7 m/s²"],1,"g ≈ 9.8 m/s²."],
["Which instrument measures current?",["Voltmeter","Ammeter","Ohmmeter","Barometer"],1,"Ammeter is connected in series to measure current."],
["Speed of light in vacuum is:",["3×10⁶ m/s","3×10⁸ m/s","1.5×10⁸ m/s","3×10⁵ m/s"],1,"c = 3×10⁸ m/s."],
["Work done is zero when force and displacement are:",["Parallel","Perpendicular","In same direction","At 45°"],1,"W = Fs cosθ; θ = 90° → cosθ = 0."]],
chem:[["Atomic number of Carbon is:",["4","6","8","12"],1,"Carbon: Z = 6, mass number 12."],
["pH of a neutral solution at 25°C is:",["0","1","7","14"],2,"Neutral pH = 7."],
["The lightest element is:",["Helium","Oxygen","Hydrogen","Lithium"],2,"Hydrogen (Z = 1) is the lightest element."],
["Avogadro number is:",["6.02×10²²","6.02×10²³","3.01×10²³","1.6×10⁻¹⁹"],1,"One mole contains 6.02×10²³ particles."],
["Which gas is called laughing gas?",["CO₂","N₂O","NO","NH₃"],1,"Nitrous oxide (N₂O) is laughing gas."]],
bio:[["Powerhouse of the cell is:",["Nucleus","Ribosome","Mitochondria","Golgi body"],2,"Mitochondria produce ATP (energy)."],
["Photosynthesis takes place in:",["Mitochondria","Chloroplast","Nucleus","Vacuole"],1,"Chlorophyll in chloroplasts traps sunlight."],
["Normal human body temperature is:",["35°C","36°C","37°C","39°C"],2,"About 37°C (98.6°F)."],
["DNA double helix model was given by:",["Darwin","Watson & Crick","Lamarck","Mendel"],1,"Watson and Crick (1953)."],
["Functional unit of kidney is:",["Neuron","Nephron","Alveolus","Villus"],1,"Nephron filters blood in the kidney."]],
cs:[["1 Byte equals:",["4 bits","8 bits","16 bits","1024 bits"],1,"1 Byte = 8 Bits."],
["CPU stands for:",["Central Processing Unit","Computer Personal Unit","Central Program Unit","Control Processing Unit"],0,"CPU is the brain of the computer."],
["Which is an operating system?",["MS Word","Windows","Photoshop","Chrome"],1,"Windows is system software (OS)."],
["Binary number system has base:",["8","10","2","16"],2,"Binary uses only 0 and 1 — base 2."],
["Which topology connects all computers to one central device?",["Bus","Ring","Star","Mesh"],2,"In Star topology all nodes connect to a central hub/switch."]],
english:[["Choose the correct passive voice: 'She writes a letter.'",["A letter is written by her.","A letter was written by her.","A letter is being write by her.","A letter written by her."],0,"Present indefinite passive: is + V3."],
["Synonym of 'Rapid' is:",["Slow","Swift","Weak","Late"],1,"Rapid means fast / swift."],
["The plural of 'Child' is:",["Childs","Childes","Children","Childrens"],2,"Child → Children (irregular plural)."],
["'He is good ___ mathematics.' Correct preposition:",["in","at","on","for"],1,"'Good at' is the correct phrase."],
["Which sentence is in Past Continuous tense?",["She sings well.","She was singing.","She has sung.","She will sing."],1,"Was/were + V-ing shows past continuous."]],
urdu:[["'غزل' کے پہلے شعر کو کہتے ہیں:",["مقطع","مطلع","ردیف","قافیہ"],1,"غزل کا پہلا شعر مطلع کہلاتا ہے جس کے دونوں مصرعے ہم قافیہ ہوتے ہیں۔"],
["اسم کی تعریف ہے:",["کام کا نام","کسی شخص، جگہ یا چیز کا نام","حالت کا نام","رابطے کا لفظ"],1,"اسم کسی شخص، جگہ، چیز یا کیفیت کا نام ہوتا ہے۔"],
["'پانی پانی ہونا' محاورے کا مفہوم ہے:",["پیاس لگنا","بہت شرمندہ ہونا","نہانا","روٹھ جانا"],1,"یہ محاورہ شرمندگی کے لیے استعمال ہوتا ہے۔"],
["میر تقی میر کو کہا جاتا ہے:",["خدائے سخن","شہنشاہِ غزل","بابائے اردو","مصورِ فطرت"],0,"میر تقی میر کو 'خدائے سخن' کہا جاتا ہے۔"],
["جملے میں کام کرنے والے کو کہتے ہیں:",["مفعول","فاعل","فعل","حرف"],1,"فاعل وہ ہے جو کام کرے۔"]],
islam:[["اسلام کا پہلا رکن ہے:",["نماز","روزہ","کلمۂ شہادت","حج"],2,"شہادت (توحید و رسالت کا اقرار) اسلام کا پہلا رکن ہے۔"],
["زکوٰۃ کا نصاب چاندی کے حساب سے ہے:",["ساڑھے سات تولے","ساڑھے باون تولے","دس تولے","بیس تولے"],1,"چاندی کا نصاب ساڑھے باون تولے ہے۔"],
["غزوۂ بدر کس ہجری میں ہوا؟",["1 ہجری","2 ہجری","3 ہجری","5 ہجری"],1,"غزوۂ بدر 2 ہجری، 17 رمضان کو ہوا۔"],
["قرآن مجید کی سب سے بڑی سورت ہے:",["سورۃ یٰسین","سورۃ البقرہ","سورۃ آل عمران","سورۃ الکہف"],1,"سورۃ البقرہ سب سے طویل سورت ہے (286 آیات)۔"],
["'خاتم النبیین' کا مطلب ہے:",["پہلے نبی","آخری نبی","بڑے نبی","سچے نبی"],1,"حضرت محمد ﷺ اللہ کے آخری نبی ہیں۔"]],
pak:[["قراردادِ پاکستان کب منظور ہوئی؟",["23 مارچ 1940","14 اگست 1947","3 جون 1947","23 مارچ 1956"],0,"23 مارچ 1940، لاہور (منٹو پارک) میں منظور ہوئی۔"],
["پاکستان کے پہلے گورنر جنرل تھے:",["لیاقت علی خان","قائداعظم محمد علی جناح","خواجہ ناظم الدین","ایوب خان"],1,"قائداعظم محمد علی جناح پہلے گورنر جنرل تھے۔"],
["مسلم لیگ کا قیام کس شہر میں ہوا؟",["لاہور","کراچی","ڈھاکہ","دہلی"],2,"30 دسمبر 1906 کو ڈھاکہ میں قیام عمل میں آیا۔"],
["پاکستان کا سب سے بڑا دریا ہے:",["دریائے جہلم","دریائے چناب","دریائے سندھ","دریائے راوی"],2,"دریائے سندھ سب سے لمبا اور بڑا دریا ہے۔"],
["1973 کا آئین کس طرز کا ہے؟",["صدارتی","پارلیمانی","آمرانہ","خلافتی"],1,"1973 کا آئین پارلیمانی و وفاقی طرز کا ہے۔"]],
quran:[["'ترجمۃ القرآن' کے امتحان میں سب سے زیادہ نمبر کس حصے سے آتے ہیں؟",["صرف تلاوت سے","مشکل الفاظ، لفظی ترجمہ اور مفہوم سے","صرف حفظ سے","تاریخ سے"],1,"مشکل الفاظ + درست ترجمہ + مفہوم تینوں پر نمبر ملتے ہیں۔"],
["قرآن مجید کی کل سورتیں ہیں:",["114","113","116","112"],0,"قرآن مجید میں کل 114 سورتیں ہیں۔"],
["سب سے پہلی وحی کس سورت کی آیات تھیں؟",["سورۃ الفاتحہ","سورۃ العلق","سورۃ المدثر","سورۃ یٰسین"],1,"سورۃ العلق کی پہلی پانچ آیات سب سے پہلے نازل ہوئیں۔"],
["'مفہوم' لکھتے وقت بہتر ہے کہ:",["صرف لفظی ترجمہ دہرایا جائے","آیت کا خلاصہ اپنے الفاظ میں لکھا جائے","لمبی تفسیر لکھی جائے","کچھ نہ لکھا جائے"],1,"مفہوم میں آیت کا خلاصہ سادہ الفاظ میں لکھا جاتا ہے۔"],
["سورۃ الفاتحہ کو کہا جاتا ہے:",["ام الکتاب","قلب القرآن","عرش کی سورت","سب سے لمبی سورت"],0,"سورۃ الفاتحہ کو 'ام الکتاب' کہا جاتا ہے۔ (قلب القرآن سورۃ یٰسین ہے)"]]
};

/* ---------- Model paper pattern (typical Punjab Board pattern — verify with your board) ---------- */
var PATTERNS = {
science:{rows:[["Section A — MCQs","17–20 MCQs × 1 mark","Poori kitab se — har chapter se kam az kam 1 MCQ ki tayari karein."],["Section B — Short Questions","3 hissay; har hisse se diye gaye sawalon mein se muntakhib jawab (2–3 lines each)","Definitions, wajahat aur farq (difference) wale sawal sab se zyada aate hain."],["Section C — Long Questions","2–3 long questions (andar choice ke saath)","Diagram wale sawal (Physics/Bio) aur numericals (Physics/Chem/Math) mein puray marks milte hain."],["Numericals / Practical Note","Physics, Chemistry, Math mein numericals lazmi","Formula pehle likhein, phir values, phir step-by-step hal — unit lazmi likhein."]],total:"Total marks subject ke mutabiq (aam tor par 60–85 theory + practical alag). Apne board ka current model paper lazmi check karein."},
math:{rows:[["Section A — MCQs","15–17 MCQs × 1 mark","Har chapter ki definitions aur formulas se MCQs bante hain."],["Section B — Short Questions","3 hissay — muntakhib sawalon ke mukhtasar hal","Har step par ½–1 mark hota hai; step skip na karein."],["Section C — Long Questions","3 sawal, 2 hal karne hote hain (aam pattern)","Theorems mein 'Given / To Prove / Construction / Proof' ka format likhein."]],total:"Math ka paper aam tor par 75 marks (Matric) hota hai. Rough work alag page par saaf karein."},
lang:{rows:[["Objective Hissa","MCQs / mukhtasar sawalat — grammar, tashreeh, mafhoom","Grammar (qawaid) ka hissa sab se asan scoring hota hai."],["Tashreeh / Khulasa","Ash'aar ki tashreeh, asbaq ka khulasa aur mafhoom","Hawala lazmi dein — baghair hawale ke tashreeh adhoori mani jati hai."],["Insha / Essay","Ek mazmoon, khat ya darkhwast","Saaf khush-khati aur paragraphing par bhi marks milte hain."]],total:"Zuban ke papers mein waqt ki taqseem pehle se tay karein; akhri sawal kabhi na chhorein."},
human:{rows:[["Section A — MCQs","15–20 MCQs × 1 mark","Dates, names aur definitions se zyada MCQs aate hain."],["Section B — Short Questions","Muntakhib mukhtasar sawal (2–4 lines)","Har jawab mein kam az kam 2 solid nuktaat likhein."],["Section C — Long Questions","Tafseeli sawal (andar choice)","Sawabiq (headings) bana kar likhein — checker ko parhna asan hota hai."]],total:"Apne board ke past papers (pichle 5 saal) hal karna sab se behtareen tayari hai."}
};
function patternFor(subj){
  if(subj==="math") return PATTERNS.math;
  if(subj==="english"||subj==="urdu") return PATTERNS.lang;
  if(subj==="physics"||subj==="chem"||subj==="bio"||subj==="cs") return PATTERNS.science;
  return PATTERNS.human;
}

/* ---------- Per-subject chapter explanation templates (original study guidance) ---------- */
var GUIDE = {
math:"Is chapter ke tamam masail ko step-by-step hal karna seekhein. Pehle definition aur formula yaad karein, phir exercise ke hal shuda masail dekhein, phir khud hal karne ki mashq karein — Math sirf parhne se nahi, hal karne se aati hai.",
physics:"Is chapter ke concepts ko roz-marra misalon se jodein. Har numerical ke liye: diya gaya data likhein → formula chunein → values rakhein → unit ke saath jawab. Definitions aur units board MCQs ki bunyad hain.",
chem:"Is chapter ki definitions, formulas aur chemical equations ko alag se yaad karein. Equations ko balance karna seekhein aur har reaction ki wajah (reason) samjhein — ratta nahi, mafhoom yaad rakhein.",
bio:"Is chapter ko diagram bana kar parhein. Har process (masalan koi nizaam ya amal) ko steps mein taqseem karein, aham istilahat (terms) ki definitions apni copy mein likhein aur labelled diagram ki mashq karein.",
cs:"Is chapter ke concepts ko practical misalon se samjhein. Definitions, abbreviations (masalan CPU, RAM, DBMS) aur farq wale sawal (difference questions) board ke pasandeeda hain — table bana kar yaad karein.",
english:"Read the lesson aloud once, then note difficult words with Urdu meanings in a notebook. Answer the textbook questions in your own words first, then improve them. For poems: learn the poet's name, theme and explanation of each stanza.",
urdu:"سبق کو بلند آواز سے پڑھیں، مشکل الفاظ کے معنی لغت سے لکھیں۔ تشریح کے لیے حوالہ، پس منظر اور مفہوم کا ترتیب وار انداز اپنائیں۔ اشعار کی تشریح میں شاعر کا نام اور نظم/غزل کا حوالہ لازمی دیں۔",
islam:"اس باب کے قرآنی و حدیثی حوالے یاد کریں۔ ہر موضوع کو نکات کی صورت میں لکھنے کی مشق کریں — تعریف، دلائل، اور عملی زندگی پر اثرات۔ سیرت کے واقعات تاریخ کے ساتھ یاد کریں۔",
pak:"Is chapter ki aham tareekhein (dates), shakhsiyaat aur waqeaat ko timeline bana kar yaad karein. Har waqea ke asbaab aur nataij (causes & effects) samjhein — long questions mein yahi poocha jata hai.",
quran:"اس باب کی آیات کا لفظی ترجمہ پہلے مشکل الفاظ سے شروع کریں۔ ہر آیت کا مفہوم اپنے الفاظ میں لکھنے کی مشق کریں اور آیت سے حاصل ہونے والا عملی سبق نوٹ کریں۔"
};

/* ============================================================ APP LOGIC */
var $ = function(s){ return document.querySelector(s); };
var state = { cls:"all", subj:"all", q:"", shelf:false };
var shelf = {};           /* in-memory only (this session) */
var fontScale = 1;

var BOOKS = [];
CLASSES.forEach(function(c){
  SUBJECTS.forEach(function(s){
    var key = c.n + "-" + s.id;
    BOOKS.push({ key:key, cls:c.n, clsEn:c.en, clsUr:c.ur, clsSub:c.sub,
      subj:s.id, en:s.en, ur:s.ur, color:s.color, chapters:CHAPTERS[key]||[] });
  });
});
$("#statChaps").textContent = BOOKS.reduce(function(a,b){return a+b.chapters.length;},0);

/* ---------- filters UI ---------- */
var tabsHtml = '<button class="tab" data-cls="all" aria-pressed="true">All Classes</button>' +
  CLASSES.map(function(c){ return '<button class="tab" data-cls="'+c.n+'" aria-pressed="false">'+c.en+' · <span class="ur">'+c.ur+'</span></button>'; }).join("");
$("#classTabs").innerHTML = tabsHtml;
$("#subjectChips").innerHTML = '<button class="chip" data-subj="all" aria-pressed="true">All Subjects</button>' +
  SUBJECTS.map(function(s){ return '<button class="chip" data-subj="'+s.id+'" aria-pressed="false">'+s.en+' · '+s.ur+'</button>'; }).join("");

document.querySelectorAll("#classTabs .tab").forEach(function(b){
  b.addEventListener("click", function(){
    state.cls = b.dataset.cls;
    document.querySelectorAll("#classTabs .tab").forEach(function(x){ x.setAttribute("aria-pressed", x===b ? "true":"false"); });
    render();
  });
});
document.querySelectorAll("#subjectChips .chip").forEach(function(b){
  b.addEventListener("click", function(){
    state.subj = b.dataset.subj;
    document.querySelectorAll("#subjectChips .chip").forEach(function(x){ x.setAttribute("aria-pressed", x===b ? "true":"false"); });
    render();
  });
});
$("#search").addEventListener("input", function(e){ state.q = e.target.value.trim().toLowerCase(); render(); });
$("#shelfToggle").addEventListener("click", function(){
  state.shelf = !state.shelf;
  this.setAttribute("aria-pressed", state.shelf ? "true":"false");
  render();
});

function bookMatches(b){
  if(state.shelf && !shelf[b.key]) return false;
  if(state.cls!=="all" && b.cls !== +state.cls) return false;
  if(state.subj!=="all" && b.subj !== state.subj) return false;
  if(state.q){
    var hay = (b.en+" "+b.ur+" "+b.clsEn+" class "+b.cls+" "+b.chapters.join(" ")).toLowerCase();
    if(hay.indexOf(state.q) === -1) return false;
  }
  return true;
}
function heartSVG(on){ return '<svg width="18" height="18" viewBox="0 0 24 24" fill="'+(on?"currentColor":"none")+'" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 20.7C6 16.6 3 13.2 3 9.6 3 7 5 5 7.5 5c1.7 0 3.4 1 4.5 2.6C13.1 6 14.8 5 16.5 5 19 5 21 7 21 9.6c0 3.6-3 7-9 11.1z"/></svg>'; }

function render(){
  var html = "", shown = 0;
  CLASSES.forEach(function(c){
    var list = BOOKS.filter(function(b){ return b.cls===c.n && bookMatches(b); });
    if(!list.length) return;
    shown += list.length;
    html += '<section class="classsec"><div class="classhead"><h2>'+c.en+'</h2><span class="ur" dir="rtl">'+c.ur+'</span><span>'+c.sub+'</span><span class="count">'+list.length+' books</span></div><div class="grid">';
    list.forEach(function(b){
      var on = !!shelf[b.key];
      html += '<div><button class="book" data-open="'+b.key+'" aria-label="Open '+b.en+' '+b.clsEn+'">' +
        '<span class="cover" style="background:linear-gradient(150deg,'+b.color+' 0%,'+b.color+' 62%,rgba(0,0,0,.34) 135%)">' +
        '<span class="cls">'+b.clsEn+'</span><span class="subj">'+b.en+'</span><span class="subj-ur">'+b.ur+'</span><span class="rule"></span>' +
        '<span class="meta">'+b.chapters.length+' chapters · Study guide<br>MCQs · Questions · Model paper</span>' +
        '<span class="board">Punjab Board · PCTB</span></span></button>' +
        '<div class="under"><span class="t">'+b.en+' — '+b.clsEn.replace("Class ","C")+'</span>' +
        '<button class="fav" data-fav="'+b.key+'" aria-pressed="'+on+'" aria-label="Save '+b.en+' to my shelf">'+heartSVG(on)+'</button></div></div>';
    });
    html += '</div></section>';
  });
  $("#sections").innerHTML = html;
  if(typeof renderMyBooks==="function") renderMyBooks();
  $("#emptyState").classList.toggle("show", shown===0 && !(typeof userBooks!=="undefined" && userBooks.length));
  $("#resultLine").textContent = shown + " of 40 books shown" + (state.q ? ' — for "'+$("#search").value.trim()+'"' : "") + (state.shelf ? " — Meri Shelf" : "");
  document.querySelectorAll("[data-open]").forEach(function(el){ el.addEventListener("click", function(){ openBook(el.dataset.open); }); });
  document.querySelectorAll("[data-fav]").forEach(function(el){
    el.addEventListener("click", function(ev){
      ev.stopPropagation();
      var k = el.dataset.fav;
      shelf[k] = !shelf[k]; if(!shelf[k]) delete shelf[k];
      toast(shelf[k] ? "Meri Shelf mein save ho gayi ♥" : "Shelf se hata di gayi");
      render();
    });
  });
}

/* ---------- toast ---------- */
var toastTimer;
function toast(msg){
  var t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(function(){ t.classList.remove("show"); }, 2400);
}

/* ---------- reader ---------- */
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"); }
function chapterMCQs(b, idx){
  var pool = MCQS[b.subj] || MCQS.pak;
  var picks = [ pool[idx % pool.length], pool[(idx+2) % pool.length] ];
  var seen = {}, out = [];
  picks.forEach(function(m){ if(!seen[m[0]]){ seen[m[0]]=1; out.push(m); } });
  return out;
}
function mcqHTML(m, idp){
  var letters = ["A","B","C","D"];
  var opts = m[1].map(function(o,i){
    return '<button class="opt" data-mcq="'+idp+'" data-i="'+i+'" data-correct="'+m[2]+'"><b>'+letters[i]+'.</b><span>'+esc(o)+'</span></button>';
  }).join("");
  return '<div class="mcq" id="'+idp+'"><p class="q">'+esc(m[0])+'</p><div class="opts">'+opts+'</div><p class="exp"><b>Answer: '+letters[m[2]]+'.</b> '+esc(m[3])+'</p></div>';
}

function openBook(key){
  var b = BOOKS.filter(function(x){ return x.key===key; })[0];
  if(!b) return;
  var bank = BANK[b.subj];
  var pat = patternFor(b.subj);
  var isMath = b.subj==="math", isSci = ["physics","chem","bio"].indexOf(b.subj)>-1;

  var chapHtml = b.chapters.map(function(ch, i){
    var mcqs = chapterMCQs(b, i).map(function(m,j){ return mcqHTML(m, "mcq-"+key+"-"+i+"-"+j); }).join("");
    var shortQ = isMath
      ? ["Is chapter ki aham tareef (definition) apne alfaaz mein likhein aur ek misal dein.","Exercise ka koi ek darmiyani mushkil masla muntakhib kar ke mukammal steps ke saath hal karein — har step ki wajah likhein.","Is chapter ke formula ko saabit (derive) karein ya ek lafzī masle (word problem) mein istemal kar ke dikhayein."]
      : isSci
      ? ["'"+esc(ch)+"' ki tareef (definition) misal ke saath likhein.","Is chapter ke aham concept ki 4–5 lines mein wazahat karein — diagram bane to lazmi banayein.","Is chapter se mutaliq ek roz-marra zindagi ki misal dein aur wajah batayein."]
      : ["'"+esc(ch)+"' ka khulasa / mafhoom apne alfaaz mein 5–6 jumlon mein likhein.","Is chapter ke aham character / shakhsiyat / waqea par mukhtasar note likhein.","Is chapter se hasil hone wala sabak (lesson) do jumlon mein wazeh karein."];
    var longQ = isMath
      ? "Is chapter ka ek theorem ya formula mukammal saabit karein, phir usi par mabni do mukhtalif masail hal karein — pehla seedha (direct), dusra lafzī (word problem)."
      : isSci
      ? "'"+esc(ch)+"' ko tafseel se bayan karein: tareef, aham ajzaa/process ke steps, saaf labelled diagram, aur roz-marra zindagi mein istemal. (Diagram par alag marks milte hain.)"
      : "'"+esc(ch)+"' ka tafseeli tajziya likhein: pas-e-manzar, aham nuktaat tartib se, aur ikhtitam par apna tajziya / sabak. Jawab headings bana kar likhein.";
    return '<details class="chap"><summary><span class="num">'+(i+1)+'</span><span class="ct">Chapter '+(i+1)+': '+esc(ch)+'<small>'+(isMath?"Solved exercises · Step-by-step":isSci?"Explanation · Numericals · MCQs":"Explanation · Questions · MCQs")+'</small></span><span class="chev">▾</span></summary>' +
      '<div class="chapbody">' +
      '<h4>Asan Urdu Wazahat — آسان وضاحت (Study Guide)</h4>' +
      '<p class="urtext" dir="rtl">'+esc(GUIDE[b.subj])+'</p>' +
      '<p style="font-size:13.5px;color:var(--muted)">Note: Ye wazahat is guide ke liye khaas likhi gayi study madad hai — asal kitab ka lafz-ba-lafz mutan nahi. Asal mutan ke liye official kitab (neeche link) parhein.</p>' +
      '<h4>'+(isMath?"Exercise & Step-by-Step Hal — Mashq":"Exercise & Numericals — مشق")+'</h4>' +
      '<ul><li>Kitab ki is chapter ki <b>tamam exercises</b> tartib se hal karein — pehle hal-shuda misalein, phir mashqi sawal.</li>' +
      (isMath?'<li>Har masle mein: <b>diya gaya data → formula/theorem → har step alag line par → akhir mein jawab ki jaanch</b> (units / sign check).</li><li>Jo masla na aaye use nishan lagayein aur dobara koshish karein — Math mein aadhe marks steps ke hote hain.</li>'
             : isSci?'<li>Numericals ke liye data, formula, substitution aur unit — chaaron cheezein lazmi likhein; yahi board marking scheme hai.</li><li>Exercise ke short questions pehle zubani, phir likh kar hal karein.</li>'
             : '<li>Kitab ke akhir mein diye gaye sawalon ke jawab pehle apne alfaaz mein likhein, phir ustaad/board ke model jawab se milayein.</li><li>Grammar / qawaid wale sawal alag copy mein mashq karein.</li>') +
      '</ul>' +
      '<h4>MCQs — Practice (jawab dekhne ke liye option dabayein)</h4>' + mcqs +
      '<h4>Short Questions — مختصر سوالات (Mashq)</h4><ul>' + shortQ.map(function(q){ return "<li>"+q+"</li>"; }).join("") + '</ul>' +
      '<h4>Long Question — طویل سوال (Mashq)</h4><p>'+longQ+'</p>' +
      '</div></details>';
  }).join("");

  var bankHtml = bank ? '<div class="kbank">' + bank.items.map(function(it){
      return '<div class="kcard"><b>'+esc(it[0])+'</b><p>'+esc(it[1])+'</p></div>';
    }).join("") + '</div>' : "";

  var patRows = pat.rows.map(function(r){
    return '<tr><td><b>'+esc(r[0])+'</b></td><td>'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>';
  }).join("");

  var poetryNote = (b.subj==="urdu"||b.subj==="english")
    ? '<div class="kcard" style="margin-bottom:10px"><b>Shayari, Ghazlein aur Tashreeh — شاعری</b><p>Is kitab ke nazm/ghazal wale abwaab mein har sher ki tashreeh is tareeqe se karein: (1) Hawala — shayar aur kalam ka naam, (2) Pas-e-manzar, (3) Sher ka sada mafhoom, (4) Aham khayal. Sabq-aamoz kahaniyon ke liye: kirdaar, waqea ki tartib, aur akhri sabak — teeno nuktaat har jawab mein shamil karein. (Asal ashaar ke liye official kitab parhein — ye guide tashreeh ka tareeqa sikhati hai, ashaar ka mutabadil nahi.)</p></div>' : "";

  $("#reader").innerHTML =
    '<button class="backbtn" id="backBtn">← Wapas Library</button>' +
    '<div class="rhead"><span class="cover" style="background:linear-gradient(150deg,'+b.color+' 0%,'+b.color+' 62%,rgba(0,0,0,.34) 135%)"><span class="cls">'+b.clsEn+'</span><span class="subj">'+b.en+'</span><span class="subj-ur">'+b.ur+'</span><span class="rule"></span><span class="meta">'+b.chapters.length+' chapters</span><span class="board">Punjab Board · PCTB</span></span>' +
    '<div class="info"><h2>'+b.en+' — '+b.clsEn+'</h2><div class="urtitle ur" dir="rtl">'+b.ur+' — '+b.clsUr+'</div>' +
    '<p class="desc">Chapter-wise study guide: har chapter ke saath asan wazahat ka tareeqa, exercise/numericals ki raahnumai, practice MCQs (jawab ke saath), short aur long questions ki mashq, aham formulas/definitions aur model paper ka khaka.</p>' +
    '<div class="rmeta"><span>'+b.chapters.length+' Chapters</span><span>'+b.clsSub+'</span><span>Board: Punjab (PCTB/PECTAA list)</span><span>Guide — not the original textbook</span></div>' +
    '<div class="ractions"><button class="btn" id="dlBtn">⬇ Notes Download karein</button>' +
    '<button class="btn ghost" id="favBtn">'+(shelf[b.key]?"♥ Shelf mein hai":"♡ Meri Shelf mein rakhein")+'</button>' +
    '<span class="fontctl"><span style="font-size:13px;color:var(--muted)">Text size</span><button id="fontMinus" aria-label="Decrease text size">A−</button><button id="fontPlus" aria-label="Increase text size">A+</button></span></div>' +
    '<p style="font-size:13px;color:var(--muted);margin:10px 0 0">Download file ko khol kar browser se "Print → Save as PDF" kar sakte hain. Asal kitab ki PDF: <a href="https://pctb.punjab.gov.pk/E-Books" target="_blank" rel="noopener">PCTB E-Books Portal</a></p>' +
    '</div></div>' +

    '<section class="rsec"><h3>All Chapters — تمام ابواب ('+b.chapters.length+')</h3><p class="sub">Kisi chapter par tap karein — wazahat, exercise, MCQs aur sawalat khul jayenge.</p>' + chapHtml + '</section>' +

    '<section class="rsec"><h3>'+(bank?esc(bank.title):"Key Points")+'</h3><p class="sub">Ye formulas/definitions standard textbook facts hain — board exam ke liye lazmi yaad karein.</p>' + poetryNote + bankHtml + '</section>' +

    '<section class="rsec"><h3>Model Paper — ماڈل پیپر (Board Pattern)</h3><p class="sub">Aam Punjab Board pattern par mabni khaka. Apne board ka current model paper official website se lazmi mila kar dekhein.</p>' +
    '<div class="paper"><h4>'+b.en+' — '+b.clsEn+' · Model Paper Structure</h4><table>' + patRows + '</table><p style="margin:10px 0 0;font-size:14px;color:var(--ink2)"><b>Total:</b> '+esc(pat.total)+'</p>' +
    '<p style="margin:6px 0 0;font-size:14px;color:var(--ink2)"><b>Exam tips:</b> Pehle asan sawal hal karein · Har jawab mein headings/steps saaf likhein · Akhri 10 minute revision ke liye rakhein · Past papers (pichle 5 saal) lazmi hal karein.</p></div></section>';

  $("#home").classList.add("hide");
  $("#reader").classList.add("open");
  window.scrollTo({top:0});

  $("#backBtn").addEventListener("click", closeBook);
  $("#favBtn").addEventListener("click", function(){
    shelf[b.key] = !shelf[b.key]; if(!shelf[b.key]) delete shelf[b.key];
    this.textContent = shelf[b.key] ? "♥ Shelf mein hai" : "♡ Meri Shelf mein rakhein";
    toast(shelf[b.key] ? "Meri Shelf mein save ho gayi ♥" : "Shelf se hata di gayi");
  });
  $("#dlBtn").addEventListener("click", function(){ downloadNotes(b); });
  $("#fontPlus").addEventListener("click", function(){ setFont(0.1); });
  $("#fontMinus").addEventListener("click", function(){ setFont(-0.1); });
  document.querySelectorAll("#reader .opt").forEach(function(btn){
    btn.addEventListener("click", function(){
      var box = btn.closest(".mcq");
      if(box.classList.contains("answered")) return;
      box.classList.add("answered");
      var correct = +btn.dataset.correct, chosen = +btn.dataset.i;
      box.querySelectorAll(".opt").forEach(function(o){
        if(+o.dataset.i === correct) o.classList.add("correct");
        else if(o === btn) o.classList.add("wrong");
        o.disabled = true;
      });
      toast(chosen === correct ? "Durust jawab! ✓" : "Ghalat — durust jawab neeche dekh lein");
    });
  });
}
function setFont(d){
  fontScale = Math.min(1.4, Math.max(0.85, fontScale + d));
  $("#reader").style.fontSize = (fontScale*100) + "%";
}
function closeBook(){
  $("#reader").classList.remove("open");
  $("#reader").innerHTML = "";
  $("#home").classList.remove("hide");
  render();
}

/* ---------- download notes (.html file the user can print to PDF) ---------- */
function downloadNotes(b){
  var bank = BANK[b.subj];
  var lines = b.chapters.map(function(ch,i){ return "<li><b>Chapter "+(i+1)+":</b> "+esc(ch)+"</li>"; }).join("");
  var bankLines = bank ? bank.items.map(function(it){ return "<p><b>"+esc(it[0])+":</b> "+esc(it[1])+"</p>"; }).join("") : "";
  var html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>'+b.en+' — '+b.clsEn+' Notes</title>' +
    '<style>body{font-family:Georgia,serif;max-width:720px;margin:32px auto;padding:0 18px;line-height:1.6}h1{font-size:26px}h2{margin-top:28px;border-bottom:2px solid #14532d;padding-bottom:4px}li{margin:4px 0}</style></head><body>' +
    '<h1>'+b.en+' — '+b.clsEn+' ('+b.ur+')</h1>' +
    '<p><i>Chapter-wise study guide notes — Digital Books Library. This is a study guide, not the original board textbook. Original PDFs: PCTB E-Books Portal (pctb.punjab.gov.pk/E-Books).</i></p>' +
    '<h2>All Chapters ('+b.chapters.length+')</h2><ol style="list-style:none;padding:0">'+lines+'</ol>' +
    '<h2>'+(bank?esc(bank.title):"Key Points")+'</h2>'+bankLines +
    '<h2>Exam Preparation</h2><p>Har chapter ki exercise mukammal hal karein, MCQs ki mashq karein, aur model paper ke pattern ke mutabiq waqt par practice karein. Past papers (5 saal) lazmi hal karein.</p>' +
    '</body></html>';
  var blob = new Blob([html], {type:"text/html"});
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = b.en.replace(/\s+/g,"-") + "-Class-" + b.cls + "-Notes.html";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 4000);
  toast("Notes download ho gaye — file khol kar Print → Save as PDF karein");
}

/* ============================================================
   MY UPLOADED BOOKS — persisted in browser IndexedDB.
   Files (Blob) + metadata are stored locally in IndexedDB so
   uploaded books survive page refresh / browser restart on
   this device/browser. Nothing is sent to a server.
   Object URLs are recreated from the stored Blob on each load.
============================================================ */
var userBooks = [];
var IDB_NAME = "digital-books-library";
var IDB_STORE = "userBooks";
var IDB_VERSION = 1;
function idbOpen(){
  return new Promise(function(resolve, reject){
    if(!window.indexedDB){ reject(new Error("IndexedDB not available")); return; }
    var req = indexedDB.open(IDB_NAME, IDB_VERSION);
    req.onupgradeneeded = function(){
      var db = req.result;
      if(!db.objectStoreNames.contains(IDB_STORE)){
        db.createObjectStore(IDB_STORE, {keyPath:"id"});
      }
    };
    req.onsuccess = function(){ resolve(req.result); };
    req.onerror = function(){ reject(req.error); };
  });
}
function idbSaveBook(u){
  return idbOpen().then(function(db){
    return new Promise(function(resolve, reject){
      var tx = db.transaction(IDB_STORE, "readwrite");
      var store = tx.objectStore(IDB_STORE);
      var rec = {
        id: u.id, title: u.title, clsLabel: u.clsLabel, subjLabel: u.subjLabel,
        author: u.author, desc: u.desc, fileName: u.fileName, size: u.size,
        kind: u.kind, color: u.color, textContent: u.textContent || "",
        blob: u.blob || null, createdAt: u.createdAt || Date.now()
      };
      var r = store.put(rec);
      r.onsuccess = function(){ resolve(); };
      r.onerror = function(){ reject(r.error); };
      tx.oncomplete = function(){ try{ db.close(); }catch(e){} };
      tx.onerror = function(){ reject(tx.error); };
    });
  });
}
function idbDeleteBook(id){
  return idbOpen().then(function(db){
    return new Promise(function(resolve, reject){
      var tx = db.transaction(IDB_STORE, "readwrite");
      var r = tx.objectStore(IDB_STORE).delete(id);
      r.onsuccess = function(){ resolve(); };
      r.onerror = function(){ reject(r.error); };
      tx.oncomplete = function(){ try{ db.close(); }catch(e){} };
    });
  }).catch(function(){});
}
function idbLoadAllBooks(){
  return idbOpen().then(function(db){
    return new Promise(function(resolve, reject){
      var tx = db.transaction(IDB_STORE, "readonly");
      var req = tx.objectStore(IDB_STORE).getAll();
      req.onsuccess = function(){
        var recs = req.result || [];
        recs.sort(function(a,b){ return (b.createdAt||0)-(a.createdAt||0); });
        var loaded = recs.map(function(rec){
          return {
            id: rec.id, title: rec.title, clsLabel: rec.clsLabel, subjLabel: rec.subjLabel,
            author: rec.author || "", desc: rec.desc || "", fileName: rec.fileName || "",
            size: rec.size || 0, kind: rec.kind, color: rec.color || "#14532d",
            textContent: rec.textContent || "", blob: rec.blob || null,
            url: rec.blob ? URL.createObjectURL(rec.blob) : null,
            createdAt: rec.createdAt || 0
          };
        });
        try{ db.close(); }catch(e){}
        resolve(loaded);
      };
      req.onerror = function(){ reject(req.error); };
    });
  });
}
var upColors = ["#14532d","#7c2d12","#1e3a5f","#5b21b6","#831843","#0f4c5c","#365314","#713f12"];
var pendingFile = null;

/* populate subject select in upload form */
(function(){
  var sel = document.getElementById("upSubject");
  if(sel){
    sel.innerHTML = SUBJECTS.map(function(s){ return '<option value="'+esc(s.en)+'">'+esc(s.en)+' · '+esc(s.ur)+'</option>'; }).join("") + '<option value="Other">Other / Digar</option>';
  }
})();

function fmtSize(bytes){
  if(!bytes && bytes!==0) return "";
  if(bytes<1024) return bytes+" B";
  if(bytes<1024*1024) return (bytes/1024).toFixed(1)+" KB";
  return (bytes/(1024*1024)).toFixed(2)+" MB";
}
function userBookMatches(u){
  if(state.shelf) return false;
  if(state.q){
    var hay = (u.title+" "+u.clsLabel+" "+u.subjLabel+" "+u.author+" "+(u.fileName||"")).toLowerCase();
    if(hay.indexOf(state.q)===-1) return false;
  }
  if(state.cls!=="all"){
    if(u.clsLabel !== "Class "+state.cls) return false;
  }
  if(state.subj!=="all"){
    var subjObj = SUBJECTS.filter(function(s){return s.id===state.subj;})[0];
    if(subjObj && u.subjLabel!==subjObj.en) return false;
  }
  return true;
}
function renderMyBooks(){
  var wrap = document.getElementById("myBooksWrap");
  if(!wrap) return;
  if(!userBooks.length){ wrap.innerHTML=""; return; }
  var list = userBooks.filter(userBookMatches);
  if(!list.length){
    wrap.innerHTML = '<section class="mysec"><div class="mysec-head"><h2>Meri Kitabein — Uploaded Books</h2><span class="badge">'+userBooks.length+' uploaded</span><p>Is search / filter mein koi uploaded book nahi mili. Filter hata kar dekhein.</p></div></section>';
    return;
  }
  var cards = list.map(function(u){
    var kindLabel = u.kind==="pdf" ? "PDF" : u.kind==="image" ? "Image" : u.kind==="text" ? "Text / Notes" : "File";
    return '<div><button class="book" data-ubook="'+u.id+'" aria-label="Open uploaded book '+esc(u.title)+'">' +
      '<span class="cover" style="background:linear-gradient(150deg,'+u.color+' 0%,'+u.color+' 62%,rgba(0,0,0,.34) 135%)"><span class="ubadge">Uploaded</span>' +
      '<span class="cls">'+esc(u.clsLabel)+'</span><span class="subj" style="font-size:19px">'+esc(u.title)+'</span><span class="rule"></span>' +
      '<span class="meta">'+esc(u.subjLabel)+(u.author?'<br>'+esc(u.author):'')+'<br>'+kindLabel+(u.fileName?' · '+esc(u.fileName):'')+'</span>' +
      '<span class="board">Meri Book · My Upload</span></span></button>' +
      '<div class="under"><span class="t">'+esc(u.title)+'</span></div>' +
      '<div class="ufilemeta">'+(u.size?fmtSize(u.size)+' · ':'')+kindLabel+' — tap kar ke parhein</div>' +
      '<div style="margin-top:6px"><button class="udel" data-udel="'+u.id+'">✕ Hata dein</button></div></div>';
  }).join("");
  wrap.innerHTML = '<section class="mysec"><div class="mysec-head"><h2>Meri Kitabein — Uploaded Books</h2><span class="badge">'+list.length+' / '+userBooks.length+' · Saved</span><span class="ur" dir="rtl" style="font-size:15px">میری اپ لوڈ کردہ کتابیں</span><p>Ye kitabein aap ne khud upload ki hain aur is browser ki storage (IndexedDB) mein mehfooz hain — refresh karne par bhi yahin rahengi. Kisi book par tap karein to woh yahin khul jayegi.</p></div><div class="grid">'+cards+'</div></section>';
  wrap.querySelectorAll("[data-ubook]").forEach(function(el){ el.addEventListener("click", function(){ openUserBook(el.dataset.ubook); }); });
  wrap.querySelectorAll("[data-udel]").forEach(function(el){ el.addEventListener("click", function(ev){ ev.stopPropagation(); removeUserBook(el.dataset.udel); }); });
}
function removeUserBook(id){
  var u = userBooks.filter(function(x){return x.id===id;})[0];
  if(u && u.url){ try{ URL.revokeObjectURL(u.url); }catch(e){} }
  userBooks = userBooks.filter(function(x){return x.id!==id;});
  idbDeleteBook(id);
  toast("Book hata di gayi");
  render();
}
function openUserBook(id){
  var u = userBooks.filter(function(x){return x.id===id;})[0];
  if(!u) return;
  var viewer = "";
  if(u.kind==="pdf" && u.url){
    viewer = '<iframe class="pdfview" src="'+u.url+'" title="'+esc(u.title)+' PDF"></iframe><p style="font-size:13.5px;color:var(--muted)">Agar PDF yahan na dikhe (kuch phones par hota hai), neeche <b>“Poori Screen Par Kholein”</b> dabayein.</p>';
  } else if(u.kind==="image" && u.url){
    viewer = '<img class="uimg" src="'+u.url+'" alt="'+esc(u.title)+'" />';
  } else if(u.kind==="text"){
    viewer = '<div class="utext">'+esc(u.textContent||"")+'</div>';
  } else if(u.url){
    viewer = '<div class="kcard"><b>File tayyar hai</b><p>Is file type ko page ke andar preview nahi kiya ja sakta. Neeche button se file kholein / download karein.</p><p style="font-weight:700">'+esc(u.fileName||"")+'</p></div>';
  } else {
    viewer = '<div class="kcard"><b>Koi file nahi</b><p>Is entry mein koi file ya text nahi hai.</p></div>';
  }
  var actions = '<div class="ractions">';
  if(u.url) actions += '<a class="btn" href="'+u.url+'" target="_blank" rel="noopener" style="text-decoration:none;display:inline-flex;align-items:center">↗ Poori Screen Par Kholein</a><a class="btn ghost" href="'+u.url+'" download="'+esc(u.fileName||u.title)+'" style="text-decoration:none;display:inline-flex;align-items:center">⬇ File Download</a>';
  actions += '<button class="btn ghost" id="udelBtn">✕ Ye Book Hata Dein</button>';
  if(u.kind==="text") actions += '<span class="fontctl"><span style="font-size:13px;color:var(--muted)">Text size</span><button id="fontMinus" aria-label="Decrease text size">A−</button><button id="fontPlus" aria-label="Increase text size">A+</button></span>';
  actions += '</div>';
  $("#reader").innerHTML =
    '<button class="backbtn" id="backBtn">← Wapas Library</button>' +
    '<div class="rhead"><span class="cover" style="background:linear-gradient(150deg,'+u.color+' 0%,'+u.color+' 62%,rgba(0,0,0,.34) 135%)"><span class="ubadge" style="position:static;display:inline-block;margin-bottom:6px">Uploaded</span><span class="cls">'+esc(u.clsLabel)+'</span><span class="subj" style="font-size:19px">'+esc(u.title)+'</span><span class="rule"></span><span class="meta">'+esc(u.subjLabel)+'</span><span class="board">Meri Book</span></span>' +
    '<div class="info"><h2>'+esc(u.title)+'</h2><div class="urtitle">'+esc(u.clsLabel)+' · '+esc(u.subjLabel)+(u.author?' · '+esc(u.author):'')+'</div>' +
    (u.desc?'<p class="desc">'+esc(u.desc)+'</p>':'<p class="desc">Aap ki upload ki hui book — neeche reader mein parhein.</p>') +
    '<div class="rmeta"><span>'+(u.kind==="pdf"?"PDF":u.kind==="image"?"Image":u.kind==="text"?"Text / Notes":"File")+'</span>'+(u.fileName?'<span>'+esc(u.fileName)+'</span>':'')+(u.size?'<span>'+fmtSize(u.size)+'</span>':'')+'<span>Browser mein mehfooz · Saved</span></div>' +
    actions + '</div></div>' +
    '<section class="rsec"><h3>Reader — کتاب پڑھیں</h3><p class="sub">'+(u.kind==="pdf"?"PDF neeche khuli hai — scroll kar ke parhein.":u.kind==="text"?"Aap ka text / notes neeche hai.":"File neeche dikhai gayi hai.")+'</p>'+viewer+'</section>';
  $("#home").classList.add("hide");
  $("#reader").classList.add("open");
  window.scrollTo({top:0});
  $("#backBtn").addEventListener("click", closeBook);
  var delBtn = document.getElementById("udelBtn");
  if(delBtn) delBtn.addEventListener("click", function(){ removeUserBook(u.id); closeBook(); });
  var fp = document.getElementById("fontPlus"), fm = document.getElementById("fontMinus");
  if(fp) fp.addEventListener("click", function(){ setFont(0.1); });
  if(fm) fm.addEventListener("click", function(){ setFont(-0.1); });
}

/* ---------- upload modal wiring ---------- */
var uploadModal = document.getElementById("uploadModal");
var upFileInput = document.getElementById("upFile");
var dropZone = document.getElementById("dropZone");
var fileNameLabel = document.getElementById("fileNameLabel");
function openUpload(){ if(uploadModal){ uploadModal.hidden=false; document.body.style.overflow="hidden"; setTimeout(function(){ var t=document.getElementById("upTitleInput"); if(t) t.focus(); },50); } }
function closeUpload(){ if(uploadModal){ uploadModal.hidden=true; document.body.style.overflow=""; } }
function setPendingFile(file){
  pendingFile = file || null;
  if(fileNameLabel) fileNameLabel.textContent = file ? ("✓ " + file.name + " · " + fmtSize(file.size)) : "";
  var titleInput = document.getElementById("upTitleInput");
  if(file && titleInput && !titleInput.value.trim()){
    titleInput.value = file.name.replace(/\.[^.]+$/,"").replace(/[-_]+/g," ");
  }
}
var openBtn = document.getElementById("uploadOpenBtn");
if(openBtn) openBtn.addEventListener("click", openUpload);
var cancelBtn = document.getElementById("uploadCancelBtn");
if(cancelBtn) cancelBtn.addEventListener("click", closeUpload);
if(uploadModal) uploadModal.addEventListener("click", function(e){ if(e.target===uploadModal) closeUpload(); });
if(dropZone){
  dropZone.addEventListener("click", function(){ if(upFileInput) upFileInput.click(); });
  dropZone.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); if(upFileInput) upFileInput.click(); } });
  dropZone.addEventListener("dragover", function(e){ e.preventDefault(); dropZone.classList.add("drag"); });
  dropZone.addEventListener("dragleave", function(){ dropZone.classList.remove("drag"); });
  dropZone.addEventListener("drop", function(e){ e.preventDefault(); dropZone.classList.remove("drag"); var f=e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]; if(f) setPendingFile(f); });
}
if(upFileInput) upFileInput.addEventListener("change", function(){ setPendingFile(upFileInput.files && upFileInput.files[0]); });

var uploadForm = document.getElementById("uploadForm");
if(uploadForm) uploadForm.addEventListener("submit", function(e){
  e.preventDefault();
  var title = document.getElementById("upTitleInput").value.trim();
  var clsLabel = document.getElementById("upClass").value;
  var subjLabel = document.getElementById("upSubject").value;
  var author = document.getElementById("upAuthor").value.trim();
  var desc = document.getElementById("upDesc").value.trim();
  var pasted = document.getElementById("upText").value.trim();
  if(!title){ toast("Pehle book ka naam likhein"); return; }
  if(!pendingFile && !pasted){ toast("File chunein ya text paste karein — dono khali hain"); return; }
  var file = pendingFile;
  function addBook(textContent, blob, kind){
    var url = blob ? URL.createObjectURL(blob) : null;
    var now = Date.now();
    var u = {
      id: "u"+now+"-"+Math.floor(Math.random()*10000),
      title: title, clsLabel: clsLabel, subjLabel: subjLabel, author: author, desc: desc,
      fileName: file ? file.name : "", size: file ? file.size : (textContent ? textContent.length : 0),
      url: url, blob: blob || null, textContent: textContent || "", kind: kind,
      color: upColors[userBooks.length % upColors.length],
      createdAt: now
    };
    userBooks.unshift(u);
    uploadForm.reset(); setPendingFile(null); if(upFileInput) upFileInput.value="";
    closeUpload();
    state.shelf=false; var st=document.getElementById("shelfToggle"); if(st) st.setAttribute("aria-pressed","false");
    render();
    /* Persist to IndexedDB — survives refresh. If storage fails (quota / private mode), book stays for this session and we warn honestly. */
    idbSaveBook(u).then(function(){
      toast("✓ Book save ho gayi — refresh ke baad bhi “Meri Kitabein” mein rahegi");
    }).catch(function(){
      toast("Book add ho gayi, lekin browser storage mein save nahi ho saki — refresh par hat sakti hai");
    });
    var wrap = document.getElementById("myBooksWrap");
    if(wrap) wrap.scrollIntoView({behavior:"smooth", block:"start"});
  }
  if(file){
    var nameLow = file.name.toLowerCase();
    var type = file.type || "";
    if(type==="application/pdf" || nameLow.endsWith(".pdf")){
      addBook("", file, "pdf");
    } else if(type.indexOf("image/")===0){
      addBook("", file, "image");
    } else if(type.indexOf("text/")===0 || nameLow.endsWith(".txt") || nameLow.endsWith(".md")){
      var reader = new FileReader();
      reader.onload = function(){ addBook(String(reader.result||pasted||""), null, "text"); };
      reader.onerror = function(){ toast("Text file parh nahi sakay — dobara koshish karein"); };
      reader.readAsText(file);
    } else {
      addBook(pasted||"", file, "file");
    }
  } else {
    addBook(pasted, null, "text");
  }
});

/* Initial render, then restore saved books from IndexedDB */
try{ if(navigator.storage && navigator.storage.persist) navigator.storage.persist(); }catch(e){}
render();
idbLoadAllBooks().then(function(loaded){
  if(loaded && loaded.length){
    /* Merge: keep any just-added books not yet in DB result, avoid duplicates by id */
    var existing = {};
    userBooks.forEach(function(b){ existing[b.id]=1; });
    var fresh = loaded.filter(function(b){ return !existing[b.id]; });
    if(fresh.length){
      userBooks = fresh.concat(userBooks);
      userBooks.sort(function(a,b){ return (b.createdAt||0)-(a.createdAt||0); });
      render();
    }
  }
}).catch(function(){ /* IndexedDB unavailable — library still works session-only */ });