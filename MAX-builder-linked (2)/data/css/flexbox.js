// ============================================================
// flexbox.js
// خصائص Flexbox في CSS
// تتيح ترتيب العناصر في حاوية مرنة بسهولة مع التحكم في الاتجاه، المحاذاة، التوزيع، والترتيب
// ============================================================

const flexboxData = [
    // ============================================================
    // 1. خصائص الحاوية المرنة (Flex Container)
    // ============================================================
    {
        tag: "flex-container",
        description: "خصائص الحاوية المرنة (Flex Container) التي تحوي العناصر المرنة، تتحكم في التخطيط العام",
        properties: [
            // -------- display: flex --------
            {
                name: "display",
                description: "يحول العنصر إلى حاوية مرنة (Flex Container) ويكوّن سياق تنسيق مرن لعناصره الداخلية",
                values: [
                    { value: "flex", description: "يحول العنصر إلى حاوية مرنة (تبدأ في سطر جديد)" },
                    { value: "inline-flex", description: "يحول العنصر إلى حاوية مرنة داخلية (مثل inline-block)" }
                ]
            },
            // -------- flex-direction --------
            {
                name: "flex-direction",
                description: "يحدد اتجاه ترتيب العناصر داخل الحاوية المرنة (أفقي أو عمودي، وطبيعي أو معكوس) - المحور الرئيسي",
                values: [
                    { value: "row", description: "أفقي من اليسار إلى اليمين (في اللغات LTR) - القيمة الافتراضية" },
                    { value: "row-reverse", description: "أفقي من اليمين إلى اليسار (معكوس في اللغات LTR)" },
                    { value: "column", description: "عمودي من الأعلى إلى الأسفل" },
                    { value: "column-reverse", description: "عمودي من الأسفل إلى الأعلى (معكوس)" }
                ]
            },
            // -------- flex-wrap --------
            {
                name: "flex-wrap",
                description: "يحدد هل تنتقل العناصر إلى سطر جديد عندما لا تتسع في السطر الحالي أم لا",
                values: [
                    { value: "nowrap", description: "لا تنتقل، تبقى في سطر واحد حتى لو ضاقت المساحة - القيمة الافتراضية" },
                    { value: "wrap", description: "تنتقل إلى سطر جديد عند عدم وجود مساحة كافية" },
                    { value: "wrap-reverse", description: "تنتقل إلى سطر جديد في الاتجاه المعكوس (من الأسفل للأعلى)" }
                ]
            },
            // -------- flex-flow --------
            {
                name: "flex-flow",
                description: "اختصار لـ flex-direction و flex-wrap معاً في سطر واحد - الترتيب: direction ثم wrap",
                values: [
                    { value: "row nowrap", description: "أفقي بدون انتقال - القيمة الافتراضية" },
                    { value: "row wrap", description: "أفقي مع انتقال إلى سطر جديد" },
                    { value: "row wrap-reverse", description: "أفقي مع انتقال معكوس" },
                    { value: "row-reverse nowrap", description: "أفقي معكوس بدون انتقال" },
                    { value: "row-reverse wrap", description: "أفقي معكوس مع انتقال" },
                    { value: "column nowrap", description: "عمودي بدون انتقال" },
                    { value: "column wrap", description: "عمودي مع انتقال" },
                    { value: "column wrap-reverse", description: "عمودي مع انتقال معكوس" },
                    { value: "column-reverse nowrap", description: "عمودي معكوس بدون انتقال" },
                    { value: "column-reverse wrap", description: "عمودي معكوس مع انتقال" }
                ],
                freeInput: true
            },
            // -------- justify-content --------
            {
                name: "justify-content",
                description: "يحدد كيفية توزيع العناصر على المحور الرئيسي (الأفقي في row، العمودي في column)",
                values: [
                    { value: "flex-start", description: "تتجمع العناصر في بداية المحور الرئيسي (يسار في row) - القيمة الافتراضية" },
                    { value: "flex-end", description: "تتجمع العناصر في نهاية المحور الرئيسي (يمين في row)" },
                    { value: "center", description: "تتجمع العناصر في منتصف المحور الرئيسي" },
                    { value: "space-between", description: "توزع بالتساوي، أول عنصر في البداية وآخر في النهاية" },
                    { value: "space-around", description: "توزع مع مسافات متساوية حول كل عنصر (نصف مسافة في البداية والنهاية)" },
                    { value: "space-evenly", description: "توزع مع مسافات متساوية بين العناصر وحولها (جميع المسافات متساوية)" }
                ]
            },
            // -------- align-items --------
            {
                name: "align-items",
                description: "يحدد كيفية محاذاة العناصر على المحور المتقاطع (العمودي في row، الأفقي في column)",
                values: [
                    { value: "stretch", description: "تمتد العناصر لتملأ المحور المتقاطع بالكامل - القيمة الافتراضية" },
                    { value: "flex-start", description: "محاذاة إلى بداية المحور المتقاطع (أعلى في row)" },
                    { value: "flex-end", description: "محاذاة إلى نهاية المحور المتقاطع (أسفل في row)" },
                    { value: "center", description: "محاذاة إلى منتصف المحور المتقاطع" },
                    { value: "baseline", description: "محاذاة حسب خط الأساس للنص (أسفل النصوص)" }
                ]
            },
            // -------- align-content --------
            {
                name: "align-content",
                description: "يحدد كيفية توزيع الصفوف المتعددة على المحور المتقاطع (يعمل فقط عند استخدام flex-wrap: wrap)",
                values: [
                    { value: "stretch", description: "تمتد الصفوف لتملأ المحور المتقاطع - القيمة الافتراضية" },
                    { value: "flex-start", description: "تتجمع الصفوف في بداية المحور المتقاطع" },
                    { value: "flex-end", description: "تتجمع الصفوف في نهاية المحور المتقاطع" },
                    { value: "center", description: "تتجمع الصفوف في منتصف المحور المتقاطع" },
                    { value: "space-between", description: "توزع الصفوف بالتساوي، أول صف في البداية وآخر في النهاية" },
                    { value: "space-around", description: "توزع الصفوف مع مسافات متساوية حول كل صف" },
                    { value: "space-evenly", description: "توزع الصفوف مع مسافات متساوية بينها وحولها" }
                ]
            },
            // -------- gap (المسافات) --------
            {
                name: "gap",
                description: "يحدد المسافة بين العناصر المرنة داخل الحاوية (على المحورين الرئيسي والمتقاطع)",
                values: [
                    { value: "0", description: "بدون مسافات بين العناصر - القيمة الافتراضية" },
                    { value: "2px", description: "مسافة 2 بكسل بين العناصر" },
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
                    { value: "1rem", description: "مسافة 1rem (حجم الخط الأساسي)" },
                    { value: "1.5rem", description: "مسافة 1.5rem" },
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
                description: "يحدد المسافة بين صفوف العناصر المرنة فقط (المحور المتقاطع)",
                values: [
                    { value: "0", description: "بدون مسافة بين الصفوف - القيمة الافتراضية" },
                    { value: "5px", description: "مسافة 5 بكسل بين الصفوف" },
                    { value: "10px", description: "مسافة 10 بكسل بين الصفوف" },
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
                description: "يحدد المسافة بين أعمدة العناصر المرنة فقط (المحور الرئيسي)",
                values: [
                    { value: "0", description: "بدون مسافة بين الأعمدة - القيمة الافتراضية" },
                    { value: "5px", description: "مسافة 5 بكسل بين الأعمدة" },
                    { value: "10px", description: "مسافة 10 بكسل بين الأعمدة" },
                    { value: "15px", description: "مسافة 15 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "30px", description: "مسافة 30 بكسل" },
                    { value: "1rem", description: "مسافة 1rem" },
                    { value: "5%", description: "5% من عرض الحاوية" }
                ],
                freeInput: true
            },
            // -------- place-content --------
            {
                name: "place-content",
                description: "اختصار لـ align-content و justify-content معاً في خاصية واحدة (الترتيب: align-content ثم justify-content)",
                values: [
                    { value: "center", description: "محاذاة المحتوى في المنتصف على المحورين (align: center, justify: center)" },
                    { value: "flex-start flex-end", description: "align-content: flex-start, justify-content: flex-end" },
                    { value: "space-between center", description: "align-content: space-between, justify-content: center" },
                    { value: "center space-around", description: "align-content: center, justify-content: space-around" },
                    { value: "stretch flex-start", description: "align-content: stretch, justify-content: flex-start" }
                ],
                freeInput: true
            },
            // -------- place-items --------
            {
                name: "place-items",
                description: "اختصار لـ align-items و justify-items معاً (align-items ثم justify-items) - justify-items ليس له تأثير في Flexbox",
                values: [
                    { value: "center", description: "محاذاة العناصر في المنتصف على المحورين" },
                    { value: "flex-start flex-end", description: "align-items: flex-start, justify-items: flex-end" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. خصائص العناصر المرنة (Flex Items)
    // ============================================================
    {
        tag: "flex-items",
        description: "خصائص العناصر المرنة (Flex Items) داخل الحاوية، تتحكم في سلوك كل عنصر على حدة",
        properties: [
            // -------- flex-grow --------
            {
                name: "flex-grow",
                description: "يحدد قدرة العنصر على النمو وملء المساحة الزائدة في الحاوية (قيمة رقمية، 0 = لا ينمو)",
                values: [
                    { value: "0", description: "لا ينمو - يبقى بحجمه الأساسي (القيمة الافتراضية)" },
                    { value: "1", description: "ينمو ليأخذ المساحة الزائدة - يحصل على جزء واحد" },
                    { value: "2", description: "ينمو بمقدار ضعف العناصر ذات القيمة 1 - يحصل على جزئين" },
                    { value: "3", description: "ينمو بثلاثة أضعاف" },
                    { value: "4", description: "ينمو بأربعة أضعاف" },
                    { value: "5", description: "ينمو بخمسة أضعاف" },
                    { value: "10", description: "ينمو بعشرة أضعاف - يأخذ معظم المساحة" },
                    { value: "0.5", description: "ينمو بنصف العناصر ذات القيمة 1" }
                ],
                freeInput: true
            },
            // -------- flex-shrink --------
            {
                name: "flex-shrink",
                description: "يحدد قدرة العنصر على الانكماش عندما تضيق المساحة في الحاوية (قيمة رقمية، 0 = لا ينكمش)",
                values: [
                    { value: "1", description: "ينكمش عند الحاجة - القيمة الافتراضية" },
                    { value: "0", description: "لا ينكمش أبداً - يحافظ على حجمه حتى لو ضاقت المساحة" },
                    { value: "2", description: "ينكمش بمقدار ضعف العناصر ذات القيمة 1" },
                    { value: "3", description: "ينكمش بثلاثة أضعاف" },
                    { value: "4", description: "ينكمش بأربعة أضعاف" },
                    { value: "5", description: "ينكمش بخمسة أضعاف" },
                    { value: "0.5", description: "ينكمش بنصف العناصر ذات القيمة 1" }
                ],
                freeInput: true
            },
            // -------- flex-basis --------
            {
                name: "flex-basis",
                description: "يحدد الحجم الأساسي للعنصر قبل توزيع المساحة الزائدة (بديل عن width/height في Flexbox)",
                values: [
                    { value: "auto", description: "يعتمد على حجم المحتوى (القيمة الافتراضية)" },
                    { value: "0", description: "حجم أساسي صفر - يعتمد كلياً على flex-grow" },
                    { value: "0%", description: "حجم أساسي صفر" },
                    { value: "50px", description: "حجم أساسي 50 بكسل" },
                    { value: "100px", description: "حجم أساسي 100 بكسل" },
                    { value: "150px", description: "حجم أساسي 150 بكسل" },
                    { value: "200px", description: "حجم أساسي 200 بكسل" },
                    { value: "300px", description: "حجم أساسي 300 بكسل" },
                    { value: "50%", description: "نصف حجم الحاوية" },
                    { value: "25%", description: "ربع حجم الحاوية" },
                    { value: "75%", description: "ثلاثة أرباع حجم الحاوية" },
                    { value: "100%", description: "كامل حجم الحاوية" },
                    { value: "content", description: "حجم أساسي يعتمد على المحتوى (مثل max-content تقريباً)" },
                    { value: "min-content", description: "أصغر حجم ممكن للمحتوى بدون التفاف" },
                    { value: "max-content", description: "الحجم الكامل للمحتوى بدون التفاف" },
                    { value: "fit-content", description: "حجم يناسب المحتوى ضمن حدود الحاوية" }
                ],
                freeInput: true
            },
            // -------- flex (الاختصار) --------
            {
                name: "flex",
                description: "اختصار لـ flex-grow، flex-shrink، flex-basis في سطر واحد (الترتيب: grow shrink basis)",
                values: [
                    { value: "0 1 auto", description: "لا ينمو، ينكمش، حجم تلقائي - القيمة الافتراضية" },
                    { value: "1", description: "flex: 1 1 0 - ينمو وينكمش مع حجم أساسي صفر" },
                    { value: "2", description: "flex: 2 1 0 - ينمو بضعف، ينكمش، حجم أساسي صفر" },
                    { value: "0 0 auto", description: "لا ينمو ولا ينكمش - حجم ثابت حسب المحتوى" },
                    { value: "1 0 auto", description: "ينمو لكن لا ينكمش - يتوسع فقط" },
                    { value: "0 1 100px", description: "لا ينمو، ينكمش، حجم أساسي 100 بكسل" },
                    { value: "2 0 100px", description: "ينمو بضعف، لا ينكمش، حجم أساسي 100 بكسل" },
                    { value: "1 1 200px", description: "ينمو وينكمش، حجم أساسي 200 بكسل" },
                    { value: "auto", description: "flex: 1 1 auto - ينمو وينكمش بحجم تلقائي" },
                    { value: "none", description: "flex: 0 0 auto - لا ينمو ولا ينكمش" },
                    { value: "initial", description: "flex: 0 1 auto - القيمة الافتراضية" },
                    { value: "1 2 0%", description: "ينمو، ينكمش بضعف، حجم أساسي صفر" }
                ],
                freeInput: true
            },
            // -------- align-self --------
            {
                name: "align-self",
                description: "يتجاوز محاذاة العنصر على المحور المتقاطع (تختلف عن align-items الخاصة بالحاوية)",
                values: [
                    { value: "auto", description: "يتبع align-items الخاصة بالحاوية - القيمة الافتراضية" },
                    { value: "stretch", description: "يمتد ليملأ المحور المتقاطع بالكامل" },
                    { value: "flex-start", description: "محاذاة إلى بداية المحور المتقاطع (أعلى في row)" },
                    { value: "flex-end", description: "محاذاة إلى نهاية المحور المتقاطع (أسفل في row)" },
                    { value: "center", description: "محاذاة إلى منتصف المحور المتقاطع" },
                    { value: "baseline", description: "محاذاة حسب خط الأساس للنص" }
                ]
            },
            // -------- order --------
            {
                name: "order",
                description: "يحدد ترتيب ظهور العنصر بين العناصر الأخرى (القيمة الأصغر تظهر أولاً)",
                values: [
                    { value: "0", description: "الترتيب الطبيعي حسب ظهوره في الـ HTML - القيمة الافتراضية" },
                    { value: "1", description: "يظهر بعد جميع العناصر ذات الترتيب 0" },
                    { value: "2", description: "يظهر بعد العناصر ذات الترتيب 1" },
                    { value: "3", description: "يظهر بعد العناصر ذات الترتيب 2" },
                    { value: "5", description: "يظهر متأخراً جداً" },
                    { value: "10", description: "يظهر في النهاية" },
                    { value: "-1", description: "يظهر قبل جميع العناصر ذات الترتيب 0" },
                    { value: "-2", description: "يظهر أولاً جداً" },
                    { value: "-5", description: "يظهر أولاً" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لاستخدام Flexbox في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - تخطيط مرن أساسي",
                description: "حاوية مرنة مع عناصر موزعة بالتساوي",
                values: [
                    { value: ".flex-container { display: flex; justify-content: space-between; align-items: center; gap: 20px; }", description: "عناصر موزعة بالتساوي مع محاذاة في المنتصف" }
                ]
            },
            {
                name: "مثال 2 - رأس الموقع (Header)",
                description: "تخطيط رأس موقع مع شعار وقائمة تنقل وأزرار",
                values: [
                    { value: ".header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; } .nav { display: flex; gap: 16px; } .actions { display: flex; gap: 8px; }", description: "رأس موقع بتخطيط مرن" }
                ]
            },
            {
                name: "مثال 3 - بطاقات متجاوبة",
                description: "شبكة بطاقات تنتقل لعدة صفوف عند عدم وجود مساحة",
                values: [
                    { value: ".cards { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; } .card { flex: 1 1 280px; max-width: 400px; padding: 20px; }", description: "بطاقات مرنة تنتقل لصفوف متعددة" }
                ]
            },
            {
                name: "مثال 4 - عمود جانبي (Sidebar)",
                description: "تخطيط مع عمود جانبي ومحتوى رئيسي",
                values: [
                    { value: ".layout { display: flex; gap: 20px; } .sidebar { flex: 0 0 280px; } .main { flex: 1; }", description: "عمود جانبي ثابت مع محتوى مرن" }
                ]
            },
            {
                name: "مثال 5 - عنصر مركزي بالكامل",
                description: "توسيط عنصر في منتصف الصفحة بالكامل",
                values: [
                    { value: ".center { display: flex; justify-content: center; align-items: center; height: 100vh; }", description: "توسيط كامل للعنصر" }
                ]
            },
            {
                name: "مثال 6 - تذييل ثابت في الأسفل",
                description: "تذييل يبقى في أسفل الصفحة حتى لو كان المحتوى قليلاً",
                values: [
                    { value: ".page { display: flex; flex-direction: column; min-height: 100vh; } .content { flex: 1; }", description: "تذييل يدفع للأسفل" }
                ]
            },
            {
                name: "مثال 7 - قائمة تنقل مرنة",
                description: "قائمة تنقل مع عناصر موزعة بالتساوي",
                values: [
                    { value: ".nav { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; } .nav-item { flex: 0 1 auto; }", description: "قائمة تنقل متجاوبة" }
                ]
            },
            {
                name: "مثال 8 - تخطيط مع تغيير الترتيب",
                description: "عناصر مرتبة بترتيب مختلف عن الـ HTML باستخدام order",
                values: [
                    { value: ".container { display: flex; flex-direction: row; } .item:nth-child(1) { order: 3; } .item:nth-child(2) { order: 1; } .item:nth-child(3) { order: 2; }", description: "تغيير ترتيب العناصر" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. ملخص تصوري لـ Flexbox
    // ============================================================
    {
        tag: "visual-summary",
        description: "ملخص تصوّري لخصائص Flexbox يوضح العلاقة بين المحورين الرئيسي والمتقاطع",
        properties: [
            {
                name: "المحور الرئيسي (Main Axis)",
                description: "الاتجاه الذي تنتظم فيه العناصر (أفقي في row، عمودي في column)",
                values: [
                    { value: "flex-direction", description: "يحدد اتجاه المحور الرئيسي" },
                    { value: "justify-content", description: "يتحكم في توزيع العناصر على المحور الرئيسي" }
                ]
            },
            {
                name: "المحور المتقاطع (Cross Axis)",
                description: "الاتجاه العمودي على المحور الرئيسي (عمودي في row، أفقي في column)",
                values: [
                    { value: "align-items", description: "يتحكم في محاذاة العناصر على المحور المتقاطع" },
                    { value: "align-content", description: "يتحكم في توزيع الصفوف على المحور المتقاطع" },
                    { value: "align-self", description: "يتجاوز align-items لعنصر معين" }
                ]
            },
            {
                name: "حجم العناصر",
                description: "خصائص تتحكم في حجم العناصر المرنة",
                values: [
                    { value: "flex-grow", description: "قدرة العنصر على النمو" },
                    { value: "flex-shrink", description: "قدرة العنصر على الانكماش" },
                    { value: "flex-basis", description: "الحجم الأساسي للعنصر" },
                    { value: "flex", description: "اختصار للخصائص الثلاث السابقة" }
                ]
            },
            {
                name: "المسافات والترتيب",
                description: "خصائص تتحكم في المسافات وترتيب العناصر",
                values: [
                    { value: "gap, row-gap, column-gap", description: "المسافات بين العناصر" },
                    { value: "order", description: "ترتيب ظهور العنصر" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام Flexbox بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لاستخدام Flexbox",
                values: [
                    { value: "استخدم gap بدلاً من margin", description: "gap أفضل للتباعد بين العناصر المرنة" },
                    { value: "استخدم flex-wrap للتصميم المتجاوب", description: "يجعل العناصر تنتقل للأسفل عند ضيق الشاشة" },
                    { value: "استخدم align-items: center للتوسيط العمودي", description: "أسهل طريقة لتوسيط العناصر عمودياً" },
                    { value: "استخدم flex-basis: 0 مع flex-grow", description: "يعطي تحكماً أفضل في توزيع المساحة" }
                ]
            },
            {
                name: "نصائح التصميم المتجاوب",
                description: "نصائح لتصميم متجاوب باستخدام Flexbox",
                values: [
                    { value: "استخدم flex-wrap مع gap", description: "العناصر تنتقل للأسفل مع الحفاظ على المسافات" },
                    { value: "استخدم flex: 1 1 200px", description: "حد أدنى 200 بكسل مع نمو وانكماش" },
                    { value: "استخدم media queries مع flex-direction", description: "تغيير الاتجاه من row إلى column للجوال" },
                    { value: "استخدم order للجوال", description: "تغيير ترتيب العناصر في الشاشات الصغيرة" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام Flexbox وكيفية تجنبها",
                values: [
                    { value: "نسيان display: flex", description: "بدونها لن تعمل خصائص Flexbox" },
                    { value: "استخدام align-items مع align-content", description: "align-content يعمل فقط مع flex-wrap: wrap" },
                    { value: "استخدام justify-content مع flex-direction: column", description: "يعمل لكن التأثير يكون عمودياً" },
                    { value: "استخدام flex: 1 بدون flex-basis", description: "flex: 1 = flex: 1 1 0" }
                ]
            },
            {
                name: "الفرق بين justify-content و align-items",
                description: "توضيح الفرق بين المحورين",
                values: [
                    { value: "justify-content يعمل على المحور الرئيسي", description: "يتحكم في توزيع العناصر على طول المحور الرئيسي" },
                    { value: "align-items يعمل على المحور المتقاطع", description: "يتحكم في محاذاة العناصر على المحور المتقاطع" },
                    { value: "في flex-direction: row", description: "justify-content = أفقي، align-items = عمودي" },
                    { value: "في flex-direction: column", description: "justify-content = عمودي، align-items = أفقي" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.flexboxData = flexboxData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = flexboxData;
}