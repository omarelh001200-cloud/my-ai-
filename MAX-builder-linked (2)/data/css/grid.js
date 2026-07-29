// ============================================================
// grid.js
// خصائص شبكة CSS Grid
// تتيح إنشاء تخطيطات معقدة باستخدام صفوف وأعمدة مع تحكم دقيق في مواقع العناصر
// ============================================================

const gridData = [
    // ============================================================
    // 1. خصائص الحاوية الشبكية (Grid Container)
    // ============================================================
    {
        tag: "grid-container",
        description: "خصائص الحاوية الشبكية (Grid Container) التي تحوي عناصر الشبكة، تتحكم في هيكل الأعمدة والصفوف",
        properties: [
            // -------- display: grid --------
            {
                name: "display",
                description: "يحول العنصر إلى حاوية شبكية (Grid Container) ويكوّن سياق تنسيق شبكي لعناصره الداخلية",
                values: [
                    { value: "grid", description: "يحول العنصر إلى حاوية شبكية (تبدأ في سطر جديد)" },
                    { value: "inline-grid", description: "يحول العنصر إلى حاوية شبكية داخلية (مثل inline-block)" },
                    { value: "subgrid", description: "يجعل العنصر شبكة فرعية ترث من الشبكة الأب" }
                ]
            },
            // -------- grid-template-columns --------
            {
                name: "grid-template-columns",
                description: "يحدد عدد وعرض الأعمدة في الشبكة، يمكن استخدام وحدات مختلفة (px, %, fr, minmax, repeat)",
                values: [
                    { value: "none", description: "بدون أعمدة محددة - القيمة الافتراضية" },
                    { value: "100px", description: "عمود واحد بعرض 100 بكسل" },
                    { value: "100px 200px", description: "عمودان: 100 بكسل و 200 بكسل" },
                    { value: "100px 200px 100px", description: "ثلاثة أعمدة: 100، 200، 100 بكسل" },
                    { value: "1fr 2fr 1fr", description: "ثلاثة أعمدة بنسب مرنة (fr = جزء من المساحة المتاحة)" },
                    { value: "1fr 1fr 1fr", description: "ثلاثة أعمدة متساوية" },
                    { value: "2fr 1fr", description: "عمودان: الأول ضعف الثاني" },
                    { value: "100px 1fr 200px", description: "عمود ثابت، عمود مرن، عمود ثابت" },
                    { value: "auto 1fr auto", description: "عمود تلقائي، عمود مرن، عمود تلقائي" },
                    { value: "minmax(100px, 1fr)", description: "عمود بحد أدنى 100 بكسل وحد أقصى مرن" },
                    { value: "minmax(150px, 2fr)", description: "عمود بحد أدنى 150 بكسل وحد أقصى 2fr" },
                    { value: "fit-content(200px)", description: "عمود يتناسب مع المحتوى بحد أقصى 200 بكسل" },
                    { value: "fit-content(50%)", description: "عمود يتناسب مع المحتوى بحد أقصى 50%" },
                    { value: "repeat(3, 1fr)", description: "ثلاثة أعمدة متساوية باستخدام repeat" },
                    { value: "repeat(4, 100px)", description: "أربعة أعمدة بعرض 100 بكسل" },
                    { value: "repeat(2, 1fr 2fr)", description: "نمط متكرر: 1fr, 2fr, 1fr, 2fr" },
                    { value: "repeat(auto-fill, 100px)", description: "يملأ أكبر عدد من الأعمدة بعرض 100 بكسل" },
                    { value: "repeat(auto-fill, minmax(150px, 1fr))", description: "يملأ أكبر عدد من الأعمدة بعرض 150px على الأقل، مع ترك أعمدة فارغة" },
                    { value: "repeat(auto-fit, minmax(150px, 1fr))", description: "يملأ أكبر عدد من الأعمدة ويمددها لملء الفراغ" },
                    { value: "repeat(auto-fit, minmax(200px, 1fr))", description: "تصميم متجاوب: أعمدة بعرض 200px على الأقل" },
                    { value: "subgrid", description: "يرث أعمدة الشبكة الأب (يستخدم مع display: subgrid)" },
                    { value: "100px 1fr minmax(200px, 1fr)", description: "مزيج من أنواع مختلفة" },
                    { value: "200px repeat(2, 1fr) 100px", description: "أعمدة: ثابت، مرنان، ثابت" }
                ],
                freeInput: true
            },
            // -------- grid-template-rows --------
            {
                name: "grid-template-rows",
                description: "يحدد عدد وارتفاع الصفوف في الشبكة، يمكن استخدام وحدات مختلفة (px, %, fr, minmax, auto)",
                values: [
                    { value: "none", description: "بدون صفوف محددة - القيمة الافتراضية" },
                    { value: "100px", description: "صف واحد بارتفاع 100 بكسل" },
                    { value: "100px 200px", description: "صفان: 100 بكسل و 200 بكسل" },
                    { value: "100px 200px 100px", description: "ثلاثة صفوف: 100، 200، 100 بكسل" },
                    { value: "1fr 2fr 1fr", description: "ثلاثة صفوف بنسب مرنة" },
                    { value: "1fr 1fr 1fr", description: "ثلاثة صفوف متساوية" },
                    { value: "100px 1fr 200px", description: "صف ثابت، صف مرن، صف ثابت" },
                    { value: "auto 1fr auto", description: "صف تلقائي، صف مرن، صف تلقائي" },
                    { value: "minmax(100px, 1fr)", description: "صف بحد أدنى 100 بكسل وحد أقصى مرن" },
                    { value: "minmax(150px, 2fr)", description: "صف بحد أدنى 150 بكسل وحد أقصى 2fr" },
                    { value: "fit-content(200px)", description: "صف يتناسب مع المحتوى بحد أقصى 200 بكسل" },
                    { value: "repeat(3, 1fr)", description: "ثلاثة صفوف متساوية باستخدام repeat" },
                    { value: "repeat(4, 100px)", description: "أربعة صفوف بارتفاع 100 بكسل" },
                    { value: "repeat(auto-fill, minmax(100px, 1fr))", description: "يملأ أكبر عدد من الصفوف" },
                    { value: "subgrid", description: "يرث صفوف الشبكة الأب" },
                    { value: "200px repeat(2, 1fr) 100px", description: "صفوف: ثابت، مرنان، ثابت" }
                ],
                freeInput: true
            },
            // -------- grid-template-areas --------
            {
                name: "grid-template-areas",
                description: "يحدد أسماء لمناطق الشبكة لتسهيل وضع العناصر فيها، باستخدام سلسلة نصية تمثل تخطيط الشبكة",
                values: [
                    { value: "none", description: "بدون مناطق محددة - القيمة الافتراضية" },
                    { value: "'header header header' 'sidebar main main' 'footer footer footer'", description: "شبكة 3×3: رأس، شريط جانبي، محتوى، تذييل" },
                    { value: "'header header' 'main sidebar' 'footer footer'", description: "شبكة 3×2 مع شريط جانبي" },
                    { value: "'header header header header' 'sidebar main main main' 'footer footer footer footer'", description: "شبكة 3×4: رأس، شريط جانبي، محتوى رئيسي" },
                    { value: "'header header' 'main main' 'footer footer'", description: "شبكة 3×2 بسيطة" },
                    { value: "'sidebar main' 'sidebar main'", description: "شبكة 2×2: شريط جانبي ومحتوى" },
                    { value: "'header header header' 'sidebar main main' 'sidebar main main' 'footer footer footer'", description: "شبكة 4×3 مع شريط جانبي طويل" },
                    { value: "'title title' 'image description' 'footer footer'", description: "شبكة 3×2 لعرض منتج" },
                    { value: "'. header .' '. main .' '. footer .'", description: "شبكة مع نقاط للمساحات الفارغة" },
                    { value: "'header header header' 'sidebar . main' 'footer footer footer'", description: "شبكة مع منطقة فارغة في المنتصف" }
                ],
                freeInput: true
            },
            // -------- grid-template --------
            {
                name: "grid-template",
                description: "اختصار لـ grid-template-rows و grid-template-columns و grid-template-areas معاً في سطر واحد",
                values: [
                    { value: "none", description: "بدون قالب - القيمة الافتراضية" },
                    { value: "100px 1fr / 1fr 2fr", description: "صفوف: 100px و 1fr، أعمدة: 1fr و 2fr" },
                    { value: "100px 200px / 1fr 2fr 1fr", description: "صفان، ثلاثة أعمدة" },
                    { value: "'header header' 100px 'main sidebar' 1fr / 1fr 2fr", description: "قالب كامل مع مناطق: صفوف 100px و 1fr، أعمدة 1fr و 2fr" },
                    { value: "'header header header' 100px 'sidebar main main' 1fr 'footer footer footer' 100px / 1fr 2fr 1fr", description: "قالب كامل 3×3" },
                    { value: "'title title' 50px 'image description' 1fr 'footer footer' 50px / 1fr 2fr", description: "قالب منتج" }
                ],
                freeInput: true
            },
            // -------- grid (الاختصار الشامل) --------
            {
                name: "grid",
                description: "الاختصار الشامل الذي يجمع كل خصائص القوالب (grid-template-*) وخصائص التوليد التلقائي (grid-auto-*) في تصريح واحد",
                values: [
                    { value: "none", description: "بدون قالب - القيمة الافتراضية" },
                    { value: "100px 1fr / 1fr 2fr", description: "نفس صيغة grid-template" },
                    { value: "auto-flow / 1fr 1fr 1fr", description: "أعمدة محددة مع صفوف تُنشأ تلقائياً" },
                    { value: "1fr 1fr / auto-flow", description: "صفوف محددة مع أعمدة تُنشأ تلقائياً" },
                    { value: "auto-flow dense / 1fr 1fr", description: "صفوف تلقائية مع ملء الفراغات" },
                    { value: "100px 200px / auto-flow 1fr", description: "صفوف محددة مع أعمدة تلقائية" }
                ],
                freeInput: true
            },
            // -------- grid-auto-columns --------
            {
                name: "grid-auto-columns",
                description: "يحدد عرض الأعمدة التي تُنشأ تلقائياً (عند وضع عناصر خارج الشبكة المحددة)",
                values: [
                    { value: "auto", description: "عرض تلقائي حسب المحتوى - القيمة الافتراضية" },
                    { value: "50px", description: "عرض ثابت 50 بكسل" },
                    { value: "100px", description: "عرض ثابت 100 بكسل" },
                    { value: "150px", description: "عرض ثابت 150 بكسل" },
                    { value: "200px", description: "عرض ثابت 200 بكسل" },
                    { value: "1fr", description: "عمود مرن" },
                    { value: "2fr", description: "عمود مرن بضعف" },
                    { value: "minmax(100px, 1fr)", description: "بين 100 بكسل ومرن" },
                    { value: "minmax(150px, 2fr)", description: "بين 150 بكسل ومرن" },
                    { value: "fit-content(200px)", description: "يتناسب مع المحتوى بحد أقصى 200 بكسل" }
                ],
                freeInput: true
            },
            // -------- grid-auto-rows --------
            {
                name: "grid-auto-rows",
                description: "يحدد ارتفاع الصفوف التي تُنشأ تلقائياً (عند وضع عناصر خارج الشبكة المحددة)",
                values: [
                    { value: "auto", description: "ارتفاع تلقائي حسب المحتوى - القيمة الافتراضية" },
                    { value: "50px", description: "ارتفاع ثابت 50 بكسل" },
                    { value: "100px", description: "ارتفاع ثابت 100 بكسل" },
                    { value: "150px", description: "ارتفاع ثابت 150 بكسل" },
                    { value: "200px", description: "ارتفاع ثابت 200 بكسل" },
                    { value: "1fr", description: "صف مرن" },
                    { value: "2fr", description: "صف مرن بضعف" },
                    { value: "minmax(100px, 1fr)", description: "بين 100 بكسل ومرن" },
                    { value: "fit-content(200px)", description: "يتناسب مع المحتوى بحد أقصى 200 بكسل" }
                ],
                freeInput: true
            },
            // -------- grid-auto-flow --------
            {
                name: "grid-auto-flow",
                description: "يحدد كيفية ترتيب العناصر التي لم تحدد مواقعها (صف تلو صف أم عمود تلو عمود)",
                values: [
                    { value: "row", description: "ترتيب صف تلو صف - القيمة الافتراضية" },
                    { value: "column", description: "ترتيب عمود تلو عمود" },
                    { value: "row dense", description: "ترتيب صف تلو صف مع ملء الفراغات (يحاول ملء الفجوات)" },
                    { value: "column dense", description: "ترتيب عمود تلو عمود مع ملء الفراغات" }
                ]
            },
            // -------- gap (المسافات) --------
            {
                name: "gap",
                description: "يحدد المسافة بين صفوف وأعمدة الشبكة في سطر واحد",
                values: [
                    { value: "0", description: "بدون مسافات بين العناصر - القيمة الافتراضية" },
                    { value: "2px", description: "مسافة 2 بكسل" },
                    { value: "4px", description: "مسافة 4 بكسل" },
                    { value: "6px", description: "مسافة 6 بكسل" },
                    { value: "8px", description: "مسافة 8 بكسل" },
                    { value: "10px", description: "مسافة 10 بكسل" },
                    { value: "12px", description: "مسافة 12 بكسل" },
                    { value: "15px", description: "مسافة 15 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "25px", description: "مسافة 25 بكسل" },
                    { value: "30px", description: "مسافة 30 بكسل" },
                    { value: "40px", description: "مسافة 40 بكسل" },
                    { value: "50px", description: "مسافة 50 بكسل" },
                    { value: "1rem", description: "مسافة 1rem" },
                    { value: "2rem", description: "مسافة 2rem" },
                    { value: "5%", description: "5% من عرض الحاوية" },
                    { value: "10%", description: "10% من عرض الحاوية" },
                    { value: "10px 20px", description: "مسافة 10 بكسل بين الصفوف، 20 بكسل بين الأعمدة" },
                    { value: "1rem 2rem", description: "مسافة 1rem بين الصفوف، 2rem بين الأعمدة" }
                ],
                freeInput: true
            },
            // -------- row-gap --------
            {
                name: "row-gap",
                description: "يحدد المسافة بين صفوف الشبكة فقط",
                values: [
                    { value: "0", description: "بدون مسافة بين الصفوف - القيمة الافتراضية" },
                    { value: "5px", description: "مسافة 5 بكسل" },
                    { value: "10px", description: "مسافة 10 بكسل" },
                    { value: "15px", description: "مسافة 15 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "30px", description: "مسافة 30 بكسل" },
                    { value: "1rem", description: "مسافة 1rem" },
                    { value: "5%", description: "5% من عرض الحاوية" }
                ],
                freeInput: true
            },
            // -------- column-gap --------
            {
                name: "column-gap",
                description: "يحدد المسافة بين أعمدة الشبكة فقط",
                values: [
                    { value: "0", description: "بدون مسافة بين الأعمدة - القيمة الافتراضية" },
                    { value: "5px", description: "مسافة 5 بكسل" },
                    { value: "10px", description: "مسافة 10 بكسل" },
                    { value: "15px", description: "مسافة 15 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "30px", description: "مسافة 30 بكسل" },
                    { value: "1rem", description: "مسافة 1rem" },
                    { value: "5%", description: "5% من عرض الحاوية" }
                ],
                freeInput: true
            },
            // -------- justify-items --------
            {
                name: "justify-items",
                description: "يحدد محاذاة العناصر أفقياً داخل خلايا الشبكة (على المحور الأفقي)",
                values: [
                    { value: "stretch", description: "تمتد العناصر لملء الخلية أفقياً - القيمة الافتراضية" },
                    { value: "start", description: "محاذاة إلى بداية الخلية (يسار في LTR)" },
                    { value: "end", description: "محاذاة إلى نهاية الخلية (يمين في LTR)" },
                    { value: "center", description: "محاذاة إلى منتصف الخلية أفقياً" }
                ]
            },
            // -------- align-items --------
            {
                name: "align-items",
                description: "يحدد محاذاة العناصر عمودياً داخل خلايا الشبكة (على المحور العمودي)",
                values: [
                    { value: "stretch", description: "تمتد العناصر لملء الخلية عمودياً - القيمة الافتراضية" },
                    { value: "start", description: "محاذاة إلى بداية الخلية (أعلى)" },
                    { value: "end", description: "محاذاة إلى نهاية الخلية (أسفل)" },
                    { value: "center", description: "محاذاة إلى منتصف الخلية عمودياً" }
                ]
            },
            // -------- place-items --------
            {
                name: "place-items",
                description: "اختصار لـ align-items و justify-items معاً (الترتيب: align-items ثم justify-items)",
                values: [
                    { value: "stretch", description: "تمتد العناصر في كلا الاتجاهين - القيمة الافتراضية" },
                    { value: "center", description: "وسّط العناصر أفقياً وعمودياً (align: center, justify: center)" },
                    { value: "start end", description: "align-items: start, justify-items: end" },
                    { value: "center stretch", description: "align-items: center, justify-items: stretch" },
                    { value: "end start", description: "align-items: end, justify-items: start" }
                ],
                freeInput: true
            },
            // -------- justify-content --------
            {
                name: "justify-content",
                description: "يحدد محاذاة الشبكة ككل أفقياً عندما تكون أصغر من الحاوية (على المحور الأفقي)",
                values: [
                    { value: "start", description: "محاذاة الشبكة إلى بداية الحاوية أفقياً - القيمة الافتراضية" },
                    { value: "end", description: "محاذاة الشبكة إلى نهاية الحاوية أفقياً" },
                    { value: "center", description: "محاذاة الشبكة إلى منتصف الحاوية أفقياً" },
                    { value: "stretch", description: "تمتد الشبكة لملء الحاوية أفقياً" },
                    { value: "space-between", description: "توزع الأعمدة بالتساوي، أول عمود في البداية وآخر في النهاية" },
                    { value: "space-around", description: "توزع الأعمدة مع مسافات متساوية حول كل عمود" },
                    { value: "space-evenly", description: "توزع الأعمدة مع مسافات متساوية بينها وحولها" }
                ]
            },
            // -------- align-content --------
            {
                name: "align-content",
                description: "يحدد محاذاة الشبكة ككل عمودياً عندما تكون أصغر من الحاوية (على المحور العمودي)",
                values: [
                    { value: "start", description: "محاذاة الشبكة إلى بداية الحاوية عمودياً - القيمة الافتراضية" },
                    { value: "end", description: "محاذاة الشبكة إلى نهاية الحاوية عمودياً" },
                    { value: "center", description: "محاذاة الشبكة إلى منتصف الحاوية عمودياً" },
                    { value: "stretch", description: "تمتد الشبكة لملء الحاوية عمودياً" },
                    { value: "space-between", description: "توزع الصفوف بالتساوي، أول صف في البداية وآخر في النهاية" },
                    { value: "space-around", description: "توزع الصفوف مع مسافات متساوية حول كل صف" },
                    { value: "space-evenly", description: "توزع الصفوف مع مسافات متساوية بينها وحولها" }
                ]
            },
            // -------- place-content --------
            {
                name: "place-content",
                description: "اختصار لـ align-content و justify-content معاً (الترتيب: align-content ثم justify-content)",
                values: [
                    { value: "start", description: "محاذاة المحتوى إلى البداية في كلا الاتجاهين - القيمة الافتراضية" },
                    { value: "center", description: "وسّط المحتوى أفقياً وعمودياً (align: center, justify: center)" },
                    { value: "space-between stretch", description: "align-content: space-between, justify-content: stretch" },
                    { value: "center space-around", description: "align-content: center, justify-content: space-around" },
                    { value: "end start", description: "align-content: end, justify-content: start" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. خصائص العناصر داخل الشبكة (Grid Items)
    // ============================================================
    {
        tag: "grid-items",
        description: "خصائص العناصر داخل الشبكة (Grid Items)، تتحكم في موقع وامتداد كل عنصر داخل الشبكة",
        properties: [
            // -------- grid-column-start --------
            {
                name: "grid-column-start",
                description: "يحدد بداية العمود الذي سيبدأ منه العنصر (رقم العمود أو span)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "1", description: "يبدأ من العمود الأول" },
                    { value: "2", description: "يبدأ من العمود الثاني" },
                    { value: "3", description: "يبدأ من العمود الثالث" },
                    { value: "4", description: "يبدأ من العمود الرابع" },
                    { value: "5", description: "يبدأ من العمود الخامس" },
                    { value: "-1", description: "يبدأ من العمود الأخير (معكوس)" },
                    { value: "-2", description: "يبدأ من العمود قبل الأخير" },
                    { value: "span 2", description: "يمتد على عمودين (بداية تلقائية)" },
                    { value: "span 3", description: "يمتد على ثلاثة أعمدة" },
                    { value: "span 1", description: "يمتد على عمود واحد (نفسه)" }
                ],
                freeInput: true
            },
            // -------- grid-column-end --------
            {
                name: "grid-column-end",
                description: "يحدد نهاية العمود الذي سينتهي عنده العنصر (رقم العمود أو span)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "2", description: "ينتهي عند العمود الثاني" },
                    { value: "3", description: "ينتهي عند العمود الثالث" },
                    { value: "4", description: "ينتهي عند العمود الرابع" },
                    { value: "5", description: "ينتهي عند العمود الخامس" },
                    { value: "-1", description: "ينتهي عند العمود الأخير" },
                    { value: "-2", description: "ينتهي عند العمود قبل الأخير" },
                    { value: "span 2", description: "يمتد على عمودين (نهاية تلقائية)" },
                    { value: "span 3", description: "يمتد على ثلاثة أعمدة" }
                ],
                freeInput: true
            },
            // -------- grid-column --------
            {
                name: "grid-column",
                description: "اختصار لـ grid-column-start و grid-column-end (الترتيب: start / end)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "1 / 3", description: "يبدأ من العمود 1 وينتهي عند العمود 3 (يمتد عمودين: 1 و 2)" },
                    { value: "2 / 4", description: "يبدأ من العمود 2 وينتهي عند العمود 4 (يمتد عمودين: 2 و 3)" },
                    { value: "1 / span 2", description: "يبدأ من العمود 1 ويمتد عمودين" },
                    { value: "span 3 / 5", description: "يمتد 3 أعمدة وينتهي عند العمود 5" },
                    { value: "1 / -1", description: "يمتد من العمود 1 إلى العمود الأخير" },
                    { value: "2 / -2", description: "يمتد من العمود 2 إلى العمود قبل الأخير" }
                ],
                freeInput: true
            },
            // -------- grid-row-start --------
            {
                name: "grid-row-start",
                description: "يحدد بداية الصف الذي سيبدأ منه العنصر (رقم الصف أو span)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "1", description: "يبدأ من الصف الأول" },
                    { value: "2", description: "يبدأ من الصف الثاني" },
                    { value: "3", description: "يبدأ من الصف الثالث" },
                    { value: "4", description: "يبدأ من الصف الرابع" },
                    { value: "-1", description: "يبدأ من الصف الأخير (معكوس)" },
                    { value: "-2", description: "يبدأ من الصف قبل الأخير" },
                    { value: "span 2", description: "يمتد على صفين (بداية تلقائية)" },
                    { value: "span 3", description: "يمتد على ثلاثة صفوف" }
                ],
                freeInput: true
            },
            // -------- grid-row-end --------
            {
                name: "grid-row-end",
                description: "يحدد نهاية الصف الذي سينتهي عنده العنصر (رقم الصف أو span)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "2", description: "ينتهي عند الصف الثاني" },
                    { value: "3", description: "ينتهي عند الصف الثالث" },
                    { value: "4", description: "ينتهي عند الصف الرابع" },
                    { value: "-1", description: "ينتهي عند الصف الأخير" },
                    { value: "-2", description: "ينتهي عند الصف قبل الأخير" },
                    { value: "span 2", description: "يمتد على صفين (نهاية تلقائية)" },
                    { value: "span 3", description: "يمتد على ثلاثة صفوف" }
                ],
                freeInput: true
            },
            // -------- grid-row --------
            {
                name: "grid-row",
                description: "اختصار لـ grid-row-start و grid-row-end (الترتيب: start / end)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "1 / 3", description: "يبدأ من الصف 1 وينتهي عند الصف 3" },
                    { value: "2 / 4", description: "يبدأ من الصف 2 وينتهي عند الصف 4" },
                    { value: "1 / span 2", description: "يبدأ من الصف 1 ويمتد صفين" },
                    { value: "span 3 / 5", description: "يمتد 3 صفوف وينتهي عند الصف 5" },
                    { value: "1 / -1", description: "يمتد من الصف 1 إلى الصف الأخير" },
                    { value: "2 / -2", description: "يمتد من الصف 2 إلى الصف قبل الأخير" }
                ],
                freeInput: true
            },
            // -------- grid-area --------
            {
                name: "grid-area",
                description: "يحدد موقع العنصر في الشبكة إما باستخدام اسم منطقة أو باستخدام خطوط البداية والنهاية (row-start / column-start / row-end / column-end)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "header", description: "يوضع في المنطقة المسماة 'header'" },
                    { value: "sidebar", description: "يوضع في المنطقة المسماة 'sidebar'" },
                    { value: "main", description: "يوضع في المنطقة المسماة 'main'" },
                    { value: "footer", description: "يوضع في المنطقة المسماة 'footer'" },
                    { value: "1 / 1 / 3 / 3", description: "صف البداية / عمود البداية / صف النهاية / عمود النهاية" },
                    { value: "1 / 2 / 4 / 5", description: "يبدأ من الصف 1، العمود 2، وينتهي عند الصف 4، العمود 5" },
                    { value: "2 / 1 / span 2 / span 3", description: "يبدأ من الصف 2، العمود 1، ويمتد صفين و3 أعمدة" }
                ],
                freeInput: true
            },
            // -------- justify-self --------
            {
                name: "justify-self",
                description: "يتجاوز محاذاة العنصر أفقياً داخل خليته (تختلف عن justify-items الخاصة بالحاوية)",
                values: [
                    { value: "auto", description: "يتبع justify-items الخاصة بالحاوية - القيمة الافتراضية" },
                    { value: "stretch", description: "يمتد لملء الخلية أفقياً" },
                    { value: "start", description: "محاذاة إلى بداية الخلية (يسار في LTR)" },
                    { value: "end", description: "محاذاة إلى نهاية الخلية (يمين في LTR)" },
                    { value: "center", description: "محاذاة إلى منتصف الخلية أفقياً" }
                ]
            },
            // -------- align-self --------
            {
                name: "align-self",
                description: "يتجاوز محاذاة العنصر عمودياً داخل خليته (تختلف عن align-items الخاصة بالحاوية)",
                values: [
                    { value: "auto", description: "يتبع align-items الخاصة بالحاوية - القيمة الافتراضية" },
                    { value: "stretch", description: "يمتد لملء الخلية عمودياً" },
                    { value: "start", description: "محاذاة إلى بداية الخلية (أعلى)" },
                    { value: "end", description: "محاذاة إلى نهاية الخلية (أسفل)" },
                    { value: "center", description: "محاذاة إلى منتصف الخلية عمودياً" }
                ]
            },
            // -------- place-self --------
            {
                name: "place-self",
                description: "اختصار لـ align-self و justify-self معاً (الترتيب: align-self ثم justify-self)",
                values: [
                    { value: "auto", description: "تلقائي - يتبع إعدادات الحاوية - القيمة الافتراضية" },
                    { value: "stretch", description: "يمتد في كلا الاتجاهين" },
                    { value: "center", description: "وسّط العنصر أفقياً وعمودياً (align: center, justify: center)" },
                    { value: "start end", description: "align-self: start, justify-self: end" },
                    { value: "center stretch", description: "align-self: center, justify-self: stretch" },
                    { value: "end start", description: "align-self: end, justify-self: start" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. تسمية الخطوط (Named Lines)
    // ============================================================
    {
        tag: "named-lines",
        description: "يمكن تسمية خطوط الشبكة باستخدام أقواس مربعة [name] في grid-template-columns و grid-template-rows، مما يسهل تحديد مواقع العناصر",
        properties: [
            {
                name: "تسمية الخطوط (ملاحظة)",
                description: "يمكن تسمية خطوط الشبكة لتسهيل الإشارة إليها بدلاً من استخدام الأرقام",
                values: [
                    { value: "[main-start] 1fr [main-end]", description: "تسمية بداية ونهاية العمود الرئيسي" },
                    { value: "[header-start] auto [header-end]", description: "تسمية بداية ونهاية صف الرأس" },
                    { value: "[col1] 100px [col2] 200px [col3] 100px", description: "تسمية كل عمود باسمه" },
                    { value: "[row1] 100px [row2] 200px [row3] 100px", description: "تسمية كل صف باسمه" },
                    { value: "[sidebar-start] 1fr [sidebar-end main-start] 2fr [main-end]", description: "تسمية متعددة للخطوط" }
                ],
                freeInput: true
            },
            {
                name: "استخدام الأسماء في العناصر",
                description: "استخدام الأسماء في خصائص العناصر بدلاً من الأرقام",
                values: [
                    { value: "grid-column: main-start / main-end", description: "يمتد من بداية العمود الرئيسي إلى نهايته" },
                    { value: "grid-row: header-start / header-end", description: "يمتد من بداية صف الرأس إلى نهايته" },
                    { value: "grid-area: row1 / col1 / row3 / col3", description: "يمتد باستخدام أسماء الصفوف والأعمدة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لاستخدام شبكة CSS Grid في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - تخطيط صفحة كامل",
                description: "تخطيط صفحة ويب كامل باستخدام grid-template-areas",
                values: [
                    { value: ".page { display: grid; grid-template-areas: 'header header header' 'sidebar main main' 'footer footer footer'; grid-template-columns: 250px 1fr 1fr; grid-template-rows: 80px 1fr 60px; gap: 16px; min-height: 100vh; } .header { grid-area: header; } .sidebar { grid-area: sidebar; } .main { grid-area: main; } .footer { grid-area: footer; }", description: "تخطيط صفحة كامل مع رأس وشريط جانبي ومحتوى وتذييل" }
                ]
            },
            {
                name: "مثال 2 - شبكة بطاقات متجاوبة",
                description: "شبكة بطاقات تتجاوب مع حجم الشاشة باستخدام auto-fit",
                values: [
                    { value: ".cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }", description: "بطاقات متجاوبة بعرض 250px على الأقل" }
                ]
            },
            {
                name: "مثال 3 - تخطيط معرض صور",
                description: "معرض صور بأحجام مختلفة باستخدام grid-column و grid-row",
                values: [
                    { value: ".gallery { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 200px; gap: 16px; } .image-large { grid-column: span 2; grid-row: span 2; } .image-wide { grid-column: span 2; } .image-tall { grid-row: span 2; }", description: "معرض صور بأحجام مختلفة" }
                ]
            },
            {
                name: "مثال 4 - تخطيط متعرج (Masonry-like)",
                description: "تخطيط متعرج باستخدام grid-auto-flow: dense لملء الفراغات",
                values: [
                    { value: ".masonry { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-flow: dense; gap: 16px; } .item:nth-child(2n) { grid-row: span 2; }", description: "تخطيط متعرج مع ملء الفراغات" }
                ]
            },
            {
                name: "مثال 5 - رأس الموقع مع شعار وبحث وقائمة",
                description: "رأس موقع باستخدام الشبكة",
                values: [
                    { value: ".header { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 20px; padding: 16px; } .logo { grid-column: 1; } .nav { grid-column: 2; } .search { grid-column: 3; }", description: "رأس موقع مع شعار وبحث وقائمة" }
                ]
            },
            {
                name: "مثال 6 - شبكة بأعمدة متغيرة العرض",
                description: "أعمدة بعروض مختلفة باستخدام minmax و fr",
                values: [
                    { value: ".grid { display: grid; grid-template-columns: 200px minmax(300px, 1fr) 200px; gap: 16px; }", description: "ثلاثة أعمدة: ثابت، مرن، ثابت" }
                ]
            },
            {
                name: "مثال 7 - عنصر ممتد على كامل العرض",
                description: "عنصر يمتد على جميع الأعمدة",
                values: [
                    { value: ".full-width { grid-column: 1 / -1; }", description: "يمتد من العمود الأول إلى العمود الأخير" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. مقارنة Grid vs Flexbox
    // ============================================================
    {
        tag: "grid-vs-flexbox",
        description: "مقارنة بين CSS Grid و Flexbox، كل منهما مناسب لحالات استخدام مختلفة",
        properties: [
            {
                name: "Grid vs Flexbox",
                description: "الفرق بين Grid و Flexbox ومتى تستخدم كل منهما",
                values: [
                    { value: "Grid للتخطيطات ثنائية الأبعاد", description: "Grid مثالي للصفحات الكاملة والتخطيطات المعقدة" },
                    { value: "Flexbox للتخطيطات أحادية البعد", description: "Flexbox مثالي للقوائم والأشرطة والعناصر في سطر واحد" },
                    { value: "Grid يتحكم في الصفوف والأعمدة معاً", description: "يمكن تحديد مواقع العناصر في شبكة كاملة" },
                    { value: "Flexbox يتحكم في اتجاه واحد", description: "إما أفقي (row) أو عمودي (column)" },
                    { value: "Grid مناسب لتخطيط الصفحة", description: "رأس، محتوى، شريط جانبي، تذييل" },
                    { value: "Flexbox مناسب للمكونات الصغيرة", description: "قوائم، أزرار، بطاقات في صف واحد" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام شبكة CSS Grid بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لاستخدام Grid",
                values: [
                    { value: "استخدم repeat() للأعمدة المتكررة", description: "repeat(3, 1fr) أفضل من كتابة 1fr 1fr 1fr" },
                    { value: "استخدم minmax() للأحجام المرنة", description: "minmax(200px, 1fr) يضمن حداً أدنى للعرض" },
                    { value: "استخدم auto-fit و auto-fill للتصميم المتجاوب", description: "repeat(auto-fit, minmax(250px, 1fr)) لتخطيط متجاوب" },
                    { value: "استخدم grid-template-areas للقراءة", description: "يجعل التخطيط أكثر وضوحاً وقابلية للفهم" },
                    { value: "استخدم gap بدلاً من margin", description: "gap أفضل للتباعد بين عناصر الشبكة" }
                ]
            },
            {
                name: "نصائح التصميم المتجاوب",
                description: "نصائح لتصميم متجاوب باستخدام Grid",
                values: [
                    { value: "استخدم auto-fit مع minmax", description: "repeat(auto-fit, minmax(250px, 1fr)) لشبكة متجاوبة" },
                    { value: "استخدم media queries لتغيير التخطيط", description: "تغيير grid-template-columns في الشاشات المختلفة" },
                    { value: "استخدم subgrid للشبكات المتداخلة", description: "display: subgrid لوراثة الأعمدة من الشبكة الأب" },
                    { value: "استخدم fr بدلاً من النسب المئوية", description: "fr أكثر مرونة وأسهل في الحساب" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام Grid وكيفية تجنبها",
                values: [
                    { value: "نسيان display: grid", description: "بدونها لن تعمل خصائص Grid" },
                    { value: "استخدام auto-fit بدون minmax", description: "auto-fit يحتاج minmax ليعمل بشكل صحيح" },
                    { value: "تحديد grid-template-columns فقط", description: "قد تحتاج أيضاً إلى grid-template-rows" },
                    { value: "استخدام grid-area بدون grid-template-areas", description: "يجب تعريف المناطق أولاً" },
                    { value: "خلط fr مع px في repeat", description: "repeat(auto-fit, 1fr 200px) غير صحيح" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.gridData = gridData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gridData;
}