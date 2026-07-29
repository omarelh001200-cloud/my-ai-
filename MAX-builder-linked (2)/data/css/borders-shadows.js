// ============================================================
// borders-shadows.js
// خصائص الحدود والظلال (Borders & Shadows) في CSS
// تتحكم في حواف العناصر، وزواياها الدائرية، والظلال الداخلية والخارجية
// ============================================================

const bordersShadowsData = [
    // ============================================================
    // 1. خاصية border (الاختصار)
    // ============================================================
    {
        tag: "border",
        description: "تحدد خصائص الحواف (العرض، النمط، اللون) بشكل مختصر، وتتحكم في مظهر حدود العنصر من جميع الجهات",
        properties: [
            // -------- border (الاختصار) --------
            {
                name: "border",
                description: "الخاصية المختصرة للحواف، تجمع العرض، النمط، واللون في سطر واحد، الترتيب: width style color",
                values: [
                    { value: "none", description: "بدون حافة (القيمة الافتراضية)" },
                    { value: "1px solid black", description: "حافة سوداء صلبة سمك 1 بكسل - أساسية ونظيفة" },
                    { value: "2px dashed red", description: "حافة حمراء متقطعة سمك 2 بكسل - تعطي مظهراً ديناميكياً" },
                    { value: "3px dotted blue", description: "حافة زرقاء منقطة سمك 3 بكسل - مظهر مرح" },
                    { value: "4px double green", description: "حافة خضراء مزدوجة سمك 4 بكسل - مظهر أنيق" },
                    { value: "5px groove gray", description: "حافة رمادية بظل تجويف سمك 5 بكسل - تأثير ثلاثي الأبعاد" },
                    { value: "6px ridge gold", description: "حافة ذهبية بارزة سمك 6 بكسل - تأثير ثلاثي الأبعاد بارز" },
                    { value: "7px inset navy", description: "حافة غائرة باللون البحري - تأثير داخلي ثلاثي الأبعاد" },
                    { value: "8px outset crimson", description: "حافة بارزة للخارج باللون القرمزي - تأثير خارجي ثلاثي الأبعاد" },
                    { value: "2px solid transparent", description: "حافة شفافة - تحافظ على المساحة دون ظهور" },
                    { value: "3px solid currentColor", description: "حافة بنفس لون النص الحالي" },
                    { value: "1px solid #cccccc", description: "حافة رمادية فاتحة بتحديد Hex" },
                    { value: "2px solid rgb(255, 0, 0)", description: "حافة حمراء باستخدام RGB" },
                    { value: "3px solid hsl(240, 100%, 50%)", description: "حافة زرقاء باستخدام HSL" }
                ],
                freeInput: true
            },
            // -------- border-width --------
            {
                name: "border-width",
                description: "يحدد سمك الحافة من جميع الجهات أو لكل جهة على حدة، يمكن استخدام كلمات مفتاحية أو قيم رقمية",
                values: [
                    { value: "thin", description: "سمك رفيع (عادة 1 بكسل)" },
                    { value: "medium", description: "سمك متوسط (عادة 3 بكسل) - القيمة الافتراضية" },
                    { value: "thick", description: "سمك سميك (عادة 5 بكسل)" },
                    { value: "1px", description: "سمك 1 بكسل لجميع الجهات" },
                    { value: "2px", description: "سمك 2 بكسل لجميع الجهات" },
                    { value: "3px", description: "سمك 3 بكسل لجميع الجهات" },
                    { value: "4px", description: "سمك 4 بكسل لجميع الجهات" },
                    { value: "5px", description: "سمك 5 بكسل لجميع الجهات" },
                    { value: "10px", description: "سمك 10 بكسل لجميع الجهات" },
                    { value: "1px 2px", description: "علوي/سفلي = 1px، أيمن/أيسر = 2px" },
                    { value: "1px 2px 3px", description: "علوي=1px، أيمن/أيسر=2px، سفلي=3px" },
                    { value: "1px 2px 3px 4px", description: "علوي=1px، أيمن=2px، سفلي=3px، أيسر=4px" }
                ],
                freeInput: true
            },
            // -------- border-style --------
            {
                name: "border-style",
                description: "يحدد نمط الحافة من جميع الجهات، يحدد شكل الخط المرسوم كحدود",
                values: [
                    { value: "none", description: "بدون حافة - لا تظهر ولا تأخذ مساحة" },
                    { value: "hidden", description: "يخفي الحافة (خاص بالجداول) - مثل none لكن يحافظ على المساحة" },
                    { value: "solid", description: "خط صلب مستمر - الأكثر استخداماً" },
                    { value: "dashed", description: "خط متقطع بشرطات - مظهر ديناميكي" },
                    { value: "dotted", description: "خط منقط بنقاط - مظهر خفيف" },
                    { value: "double", description: "خط مزدوج - خطان متوازيان مع فجوة بينهما" },
                    { value: "groove", description: "خط ذو تجويف ثلاثي الأبعاد - يبدو غائراً" },
                    { value: "ridge", description: "خط بارز ثلاثي الأبعاد - عكس groove" },
                    { value: "inset", description: "خط غائر ثلاثي الأبعاد - كأن العنصر مدخل" },
                    { value: "outset", description: "خط بارز للخارج ثلاثي الأبعاد - كأن العنصر خارج" },
                    { value: "dashed dotted", description: "مزيج من الخطوط المتقطعة والمنقطة (غير مدعوم في كل المتصفحات)" }
                ]
            },
            // -------- border-color --------
            {
                name: "border-color",
                description: "يحدد لون الحافة من جميع الجهات، يمكن استخدام أسماء الألوان أو الرموز اللونية",
                values: [
                    { value: "transparent", description: "لون شفاف - الحافة موجودة لكن غير مرئية" },
                    { value: "currentColor", description: "نفس لون النص الحالي (القيمة الافتراضية)" },
                    { value: "black", description: "أسود - اللون الأساسي" },
                    { value: "white", description: "أبيض" },
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" },
                    { value: "green", description: "أخضر" },
                    { value: "yellow", description: "أصفر" },
                    { value: "orange", description: "برتقالي" },
                    { value: "purple", description: "بنفسجي" },
                    { value: "pink", description: "وردي" },
                    { value: "gray", description: "رمادي" },
                    { value: "lightgray", description: "رمادي فاتح" },
                    { value: "darkgray", description: "رمادي داكن" },
                    { value: "navy", description: "أزرق بحري" },
                    { value: "teal", description: "أزرق مخضر" },
                    { value: "maroon", description: "كستنائي" },
                    { value: "olive", description: "زيتوني" },
                    { value: "lime", description: "ليموني" },
                    { value: "gold", description: "ذهبي" },
                    { value: "silver", description: "فضي" },
                    { value: "#ff0000", description: "أحمر (Hex)" },
                    { value: "#00ff00", description: "أخضر (Hex)" },
                    { value: "#0000ff", description: "أزرق (Hex)" },
                    { value: "#000000", description: "أسود (Hex)" },
                    { value: "#ffffff", description: "أبيض (Hex)" },
                    { value: "#ffa500", description: "برتقالي (Hex)" },
                    { value: "#800080", description: "بنفسجي (Hex)" },
                    { value: "rgb(255, 0, 0)", description: "أحمر (RGB)" },
                    { value: "rgb(0, 255, 0)", description: "أخضر (RGB)" },
                    { value: "rgb(0, 0, 255)", description: "أزرق (RGB)" },
                    { value: "rgba(255, 0, 0, 0.5)", description: "أحمر شفاف (RGBA)" },
                    { value: "hsl(0, 100%, 50%)", description: "أحمر (HSL)" },
                    { value: "hsla(0, 100%, 50%, 0.5)", description: "أحمر شفاف (HSLA)" }
                ],
                freeInput: true
            },
            // -------- border-top --------
            {
                name: "border-top",
                description: "يحدد الحافة العلوية فقط (العرض، النمط، اللون)، مفيد لتخصيص جهة معينة",
                values: [
                    { value: "1px solid red", description: "حافة علوية حمراء صلبة سمك 1 بكسل" },
                    { value: "2px dashed blue", description: "حافة علوية زرقاء متقطعة سمك 2 بكسل" },
                    { value: "3px dotted green", description: "حافة علوية خضراء منقطة سمك 3 بكسل" },
                    { value: "4px double orange", description: "حافة علوية برتقالية مزدوجة" },
                    { value: "5px groove purple", description: "حافة علوية بنفسجية ذات تجويف" },
                    { value: "none", description: "بدون حافة علوية" }
                ],
                freeInput: true
            },
            // -------- border-right --------
            {
                name: "border-right",
                description: "يحدد الحافة اليمنى فقط، مفيد لتخصيص جهة معينة",
                values: [
                    { value: "1px solid red", description: "حافة يمنى حمراء صلبة" },
                    { value: "2px dashed blue", description: "حافة يمنى زرقاء متقطعة" }
                ],
                freeInput: true
            },
            // -------- border-bottom --------
            {
                name: "border-bottom",
                description: "يحدد الحافة السفلية فقط، مفيد لإنشاء خطوط فاصلة",
                values: [
                    { value: "1px solid #ccc", description: "حافة سفلية رمادية فاتحة - شائع للفواصل" },
                    { value: "2px solid red", description: "حافة سفلية حمراء صلبة" },
                    { value: "3px double blue", description: "حافة سفلية زرقاء مزدوجة" }
                ],
                freeInput: true
            },
            // -------- border-left --------
            {
                name: "border-left",
                description: "يحدد الحافة اليسرى فقط، مفيد لإضافة علامات جانبية",
                values: [
                    { value: "1px solid red", description: "حافة يسرى حمراء صلبة" },
                    { value: "4px solid #ff0000", description: "حافة يسرى حمراء سميكة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. خصائص الزوايا الدائرية (border-radius)
    // ============================================================
    {
        tag: "border-radius",
        description: "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء، يعطي مظهراً ناعماً وعصرياً للعناصر",
        properties: [
            // -------- border-radius --------
            {
                name: "border-radius",
                description: "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء بجميع الزوايا",
                values: [
                    { value: "0", description: "زوايا حادة (القيمة الافتراضية)" },
                    { value: "2px", description: "انحناء 2 بكسل - انحناء طفيف جداً" },
                    { value: "4px", description: "انحناء 4 بكسل - انحناء خفيف" },
                    { value: "6px", description: "انحناء 6 بكسل - انحناء متوسط خفيف" },
                    { value: "8px", description: "انحناء 8 بكسل" },
                    { value: "10px", description: "انحناء 10 بكسل - انحناء متوسط" },
                    { value: "12px", description: "انحناء 12 بكسل" },
                    { value: "15px", description: "انحناء 15 بكسل" },
                    { value: "20px", description: "انحناء 20 بكسل - انحناء واضح" },
                    { value: "25px", description: "انحناء 25 بكسل" },
                    { value: "30px", description: "انحناء 30 بكسل - انحناء كبير" },
                    { value: "40px", description: "انحناء 40 بكسل - انحناء كبير جداً" },
                    { value: "50px", description: "انحناء 50 بكسل" },
                    { value: "100px", description: "انحناء 100 بكسل - شبه دائري لعناصر كبيرة" },
                    { value: "50%", description: "يجعل العنصر دائرياً بالكامل (إذا كان مربعاً) - مثالي للأفاتار" },
                    { value: "100%", description: "يجعل العنصر بيضاوياً" },
                    { value: "10px 20px", description: "قطر علوي أيسر=10px، علوي أيمن=20px، سفلي أيمن=10px، سفلي أيسر=20px" },
                    { value: "10px 20px 30px", description: "علوي أيسر=10px، علوي أيمن=20px، سفلي أيمن=30px، سفلي أيسر=20px" },
                    { value: "10px 20px 30px 40px", description: "كل زاوية بقيمة مختلفة" },
                    { value: "10px 20px / 30px 40px", description: "انحناء أفقي 10,20 وعمودي 30,40 (بيضاوي)" },
                    { value: "10px / 20px", description: "انحناء أفقي 10px وعمودي 20px (بيضاوي)" }
                ],
                freeInput: true
            },
            // -------- border-top-left-radius --------
            {
                name: "border-top-left-radius",
                description: "يحدد انحناء الزاوية العلوية اليسرى فقط، للتحكم الدقيق في كل زاوية",
                values: [
                    { value: "10px", description: "انحناء 10 بكسل" },
                    { value: "10px 20px", description: "أفقي 10px، عمودي 20px (بيضاوي)" },
                    { value: "50%", description: "انحناء كامل للزاوية" }
                ],
                freeInput: true
            },
            // -------- border-top-right-radius --------
            {
                name: "border-top-right-radius",
                description: "يحدد انحناء الزاوية العلوية اليمنى فقط",
                values: [
                    { value: "10px", description: "انحناء 10 بكسل" },
                    { value: "10px 20px", description: "أفقي 10px، عمودي 20px" }
                ],
                freeInput: true
            },
            // -------- border-bottom-right-radius --------
            {
                name: "border-bottom-right-radius",
                description: "يحدد انحناء الزاوية السفلية اليمنى فقط",
                values: [
                    { value: "10px", description: "انحناء 10 بكسل" },
                    { value: "10px 20px", description: "أفقي 10px، عمودي 20px" }
                ],
                freeInput: true
            },
            // -------- border-bottom-left-radius --------
            {
                name: "border-bottom-left-radius",
                description: "يحدد انحناء الزاوية السفلية اليسرى فقط",
                values: [
                    { value: "10px", description: "انحناء 10 بكسل" },
                    { value: "10px 20px", description: "أفقي 10px، عمودي 20px" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. border-image (صورة الحافة)
    // ============================================================
    {
        tag: "border-image",
        description: "يستخدم صورة كحافة للعنصر بدلاً من اللون الصلب، يسمح بإنشاء حدود معقدة ومزخرفة باستخدام الصور",
        properties: [
            // -------- border-image --------
            {
                name: "border-image",
                description: "الخاصية المختصرة لصورة الحافة، تجمع source, slice, width, repeat في سطر واحد",
                values: [
                    { value: "none", description: "بدون صورة حافة (القيمة الافتراضية)" },
                    { value: "url('border.png') 30 repeat", description: "صورة متكررة كحافة مع تقسيم 30 بكسل" },
                    { value: "url('border.png') 30 stretch", description: "صورة متمددة كحافة" },
                    { value: "url('border.png') 30 round", description: "صورة متكررة مع تعديل حجم لتناسب الحافة" },
                    { value: "url('border.png') 30 space", description: "صورة متكررة مع مسافات متساوية" },
                    { value: "linear-gradient(red, blue) 30 stretch", description: "تدرج لوني كحافة" },
                    { value: "repeating-linear-gradient(45deg, red, blue 10px) 30 repeat", description: "تدرج متكرر كحافة" }
                ],
                freeInput: true
            },
            // -------- border-image-source --------
            {
                name: "border-image-source",
                description: "يحدد مصدر الصورة المستخدمة كحافة (جزء من خاصية border-image المختصرة)",
                values: [
                    { value: "none", description: "بدون مصدر (القيمة الافتراضية)" },
                    { value: "url('border.png')", description: "صورة من ملف" },
                    { value: "url('border.svg')", description: "صورة SVG" },
                    { value: "linear-gradient(red, blue)", description: "تدرج لوني كمصدر" },
                    { value: "repeating-linear-gradient(45deg, red, blue 10px)", description: "تدرج متكرر كمصدر" },
                    { value: "data:image/png;base64,...", description: "صورة مشفرة في الـ CSS نفسه" }
                ],
                freeInput: true
            },
            // -------- border-image-slice --------
            {
                name: "border-image-slice",
                description: "يحدد كيفية تقسيم صورة border-image إلى 9 أجزاء (زوايا 4، حواف 4، مركز 1)",
                values: [
                    { value: "100%", description: "تقسيم الصورة بالكامل (القيمة الافتراضية)" },
                    { value: "30", description: "تقسيم بمقدار 30 بكسل من كل جهة" },
                    { value: "30 fill", description: "مع تعبئة الجزء المركزي أيضاً" },
                    { value: "10 20 30 40", description: "تقسيم بقيم مختلفة لكل جهة (أعلى، يمين، أسفل، يسار)" },
                    { value: "10 20%", description: "تقسيم بمزيج من البكسل والنسبة المئوية" }
                ],
                freeInput: true
            },
            // -------- border-image-width --------
            {
                name: "border-image-width",
                description: "يحدد عرض صورة الحافة، قد يختلف عن border-width، يتحكم بحجم صورة الحافة",
                values: [
                    { value: "1", description: "نفس عرض border-width (القيمة الافتراضية)" },
                    { value: "10px", description: "عرض ثابت 10 بكسل" },
                    { value: "20px", description: "عرض ثابت 20 بكسل" },
                    { value: "2", description: "ضعف قيمة border-width" },
                    { value: "10%", description: "10% من عرض العنصر" },
                    { value: "auto", description: "يحسب تلقائياً" }
                ],
                freeInput: true
            },
            // -------- border-image-repeat --------
            {
                name: "border-image-repeat",
                description: "يحدد كيفية تكرار أجزاء صورة الحافة على طول الحافة، يتحكم في مظهر الحافة المزخرفة",
                values: [
                    { value: "stretch", description: "تمديد الصورة لتناسب الطول (القيمة الافتراضية)" },
                    { value: "repeat", description: "تكرار الصورة دون تعديل حجمها" },
                    { value: "round", description: "تكرار مع تعديل الحجم لتناسب بدون قطع" },
                    { value: "space", description: "تكرار مع مسافات متساوية بين النسخ" },
                    { value: "stretch repeat", description: "تمديد أفقياً وتكرار عمودياً" },
                    { value: "repeat stretch", description: "تكرار أفقياً وتمديد عمودياً" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. box-shadow (الظل)
    // ============================================================
    {
        tag: "box-shadow",
        description: "يضيف ظلاً خارجياً أو داخلياً للعنصر، يمكن تخصيص لونه وإزاحته وضبابيته وحجم انتشاره، يضيف عمقاً وأبعاداً للتصميم",
        properties: [
            // -------- box-shadow --------
            {
                name: "box-shadow",
                description: "يضيف ظلاً خارجياً أو داخلياً للعنصر، يضيف عمقاً ثلاثي الأبعاد للتصميم",
                values: [
                    { value: "none", description: "بدون ظل (القيمة الافتراضية)" },
                    { value: "2px 2px 4px rgba(0,0,0,0.3)", description: "ظل خارجي بإزاحة 2 بكسل وضبابية 4 بكسل وشفافية 30%" },
                    { value: "2px 2px 4px 0px rgba(0,0,0,0.3)", description: "ظل مع انتشار 0 (نفس السابق)" },
                    { value: "0 0 20px red", description: "ظل أحمر متوهج (تأثير الـ glow)" },
                    { value: "0 0 20px rgba(255, 0, 0, 0.5)", description: "ظل أحمر متوهج شفاف" },
                    { value: "inset 2px 2px 4px rgba(0,0,0,0.5)", description: "ظل داخلي (غائر) بإزاحة 2 بكسل" },
                    { value: "0 0 0 5px red", description: "ظل على شكل إطار أحمر (بدون ضبابية)" },
                    { value: "0 0 0 2px rgba(0,0,0,0.2)", description: "ظل على شكل إطار شفاف" },
                    { value: "2px 2px 4px rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.2)", description: "ظلال متعددة بتأثيرات مختلفة" },
                    { value: "0 4px 6px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)", description: "ظلال متعددة بتأثير متدرج" },
                    { value: "0 10px 20px rgba(0,0,0,0.2)", description: "ظل طويل للأسفل" },
                    { value: "-5px -5px 10px rgba(0,0,0,0.1)", description: "ظل لأعلى ولليسار" },
                    { value: "inset 0 -2px 0 rgba(0,0,0,0.1)", description: "ظل داخلي سفلي (تأثير خط فاصل)" },
                    { value: "inset 0 0 20px rgba(0,0,0,0.2)", description: "ظل داخلي توهجي" },
                    { value: "0 20px 40px rgba(0,0,0,0.3)", description: "ظل كبير عميق" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. outline (المخطط الخارجي)
    // ============================================================
    {
        tag: "outline",
        description: "يحدد مخططاً خارجياً للعنصر (يظهر خارج الحافة ولا يأخذ مساحة)، مفيد للتأكيد على العناصر النشطة وفي إمكانية الوصول",
        properties: [
            // -------- outline --------
            {
                name: "outline",
                description: "الخاصية المختصرة للمخطط الخارجي، تجمع width, style, color في سطر واحد",
                values: [
                    { value: "none", description: "بدون مخطط (القيمة الافتراضية)" },
                    { value: "2px solid red", description: "مخطط أحمر سمك 2 بكسل صلبة" },
                    { value: "3px dashed blue", description: "مخطط أزرق متقطع سمك 3 بكسل" },
                    { value: "4px dotted green", description: "مخطط أخضر منقط" },
                    { value: "5px double orange", description: "مخطط برتقالي مزدوج" },
                    { value: "2px solid #cccccc", description: "مخطط رمادي فاتح" },
                    { value: "2px solid currentColor", description: "مخطط بنفس لون النص" }
                ],
                freeInput: true
            },
            // -------- outline-width --------
            {
                name: "outline-width",
                description: "يحدد سمك المخطط الخارجي، يتحكم في وضوح المخطط",
                values: [
                    { value: "thin", description: "سمك رفيع (عادة 1 بكسل)" },
                    { value: "medium", description: "سمك متوسط (عادة 3 بكسل)" },
                    { value: "thick", description: "سمك سميك (عادة 5 بكسل)" },
                    { value: "1px", description: "سمك 1 بكسل" },
                    { value: "2px", description: "سمك 2 بكسل" },
                    { value: "3px", description: "سمك 3 بكسل" },
                    { value: "4px", description: "سمك 4 بكسل" },
                    { value: "5px", description: "سمك 5 بكسل" }
                ],
                freeInput: true
            },
            // -------- outline-style --------
            {
                name: "outline-style",
                description: "يحدد نمط المخطط الخارجي، يحدد شكل المخطط",
                values: [
                    { value: "none", description: "بدون مخطط" },
                    { value: "hidden", description: "مخطط مخفي" },
                    { value: "solid", description: "خط صلب - الأكثر استخداماً" },
                    { value: "dashed", description: "متقطع بشرطات" },
                    { value: "dotted", description: "منقط بنقاط" },
                    { value: "double", description: "مزدوج - خطان متوازيان" },
                    { value: "groove", description: "تجويف ثلاثي الأبعاد" },
                    { value: "ridge", description: "بارز ثلاثي الأبعاد" },
                    { value: "inset", description: "غائر ثلاثي الأبعاد" },
                    { value: "outset", description: "بارز للخارج ثلاثي الأبعاد" }
                ]
            },
            // -------- outline-color --------
            {
                name: "outline-color",
                description: "يحدد لون المخطط الخارجي، يمكن استخدام أي قيمة لونية",
                values: [
                    { value: "invert", description: "لون معكوس من خلفية العنصر - يضمن الرؤية دائماً" },
                    { value: "currentColor", description: "نفس لون النص (القيمة الافتراضية)" },
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" },
                    { value: "green", description: "أخضر" },
                    { value: "#ff0000", description: "أحمر (Hex)" },
                    { value: "rgb(255, 0, 0)", description: "أحمر (RGB)" }
                ],
                freeInput: true
            },
            // -------- outline-offset --------
            {
                name: "outline-offset",
                description: "يحدد المسافة بين المخطط الخارجي وحافة العنصر، يسمح بإضافة فجوة بين العنصر والمخطط",
                values: [
                    { value: "0", description: "بدون فجوة (القيمة الافتراضية)" },
                    { value: "1px", description: "فجوة 1 بكسل" },
                    { value: "2px", description: "فجوة 2 بكسل" },
                    { value: "3px", description: "فجوة 3 بكسل" },
                    { value: "4px", description: "فجوة 4 بكسل" },
                    { value: "5px", description: "فجوة 5 بكسل" },
                    { value: "10px", description: "فجوة 10 بكسل" },
                    { value: "20px", description: "فجوة 20 بكسل" },
                    { value: "-2px", description: "يتداخل المخطط مع الحافة (داخل العنصر)" },
                    { value: "-5px", description: "تداخل عميق" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. الخصائص المنطقية (Logical Properties)
    // ============================================================
    {
        tag: "logical-borders",
        description: "الخصائص المنطقية للحدود، تتكيف مع اتجاه النص (لغة RTL مثل العربية أو LTR مثل الإنجليزية)، مهمة للدعم متعدد اللغات",
        properties: [
            // -------- border-block --------
            {
                name: "border-block",
                description: "خاصية منطقية تحدد الحافة في اتجاه الكتلة (أعلى وأسفل في اللغات الأفقية) بدلاً من border-top/bottom",
                values: [
                    { value: "2px solid black", description: "حافة بداية ونهاية الكتلة معاً" },
                    { value: "3px dashed red", description: "حافة حمراء متقطعة في اتجاه الكتلة" },
                    { value: "1px solid blue", description: "حافة زرقاء" }
                ],
                freeInput: true
            },
            // -------- border-block-start --------
            {
                name: "border-block-start",
                description: "حافة بداية الكتلة (في الأعلى للغات الأفقية، في اليمين للغات العمودية)",
                values: [
                    { value: "2px solid red", description: "حافة بداية الكتلة" }
                ],
                freeInput: true
            },
            // -------- border-block-end --------
            {
                name: "border-block-end",
                description: "حافة نهاية الكتلة (في الأسفل للغات الأفقية، في اليسار للغات العمودية)",
                values: [
                    { value: "2px solid blue", description: "حافة نهاية الكتلة" }
                ],
                freeInput: true
            },
            // -------- border-inline --------
            {
                name: "border-inline",
                description: "خاصية منطقية تحدد الحافة في اتجاه الخط (يمين ويسار في اللغات الأفقية) بدلاً من border-left/right، مفيدة لدعم اللغات ذات الاتجاه من اليمين لليسار مثل العربية",
                values: [
                    { value: "2px solid black", description: "حافة بداية ونهاية السطر معاً" },
                    { value: "2px dashed green", description: "حافة خضراء متقطعة" }
                ],
                freeInput: true
            },
            // -------- border-inline-start --------
            {
                name: "border-inline-start",
                description: "حافة بداية السطر (في اليسار للغات LTR، في اليمين للغات RTL مثل العربية)",
                values: [
                    { value: "4px solid red", description: "حافة بداية السطر - تظهر يساراً في الإنجليزية ويميناً في العربية" }
                ],
                freeInput: true
            },
            // -------- border-inline-end --------
            {
                name: "border-inline-end",
                description: "حافة نهاية السطر (في اليمين للغات LTR، في اليسار للغات RTL مثل العربية)",
                values: [
                    { value: "4px solid blue", description: "حافة نهاية السطر" }
                ],
                freeInput: true
            },
            // -------- border-block-width --------
            {
                name: "border-block-width",
                description: "سمك الحافة في اتجاه الكتلة (أعلى وأسفل)",
                values: [
                    { value: "2px", description: "سمك 2 بكسل" },
                    { value: "thin", description: "سمك رفيع" }
                ],
                freeInput: true
            },
            // -------- border-block-style --------
            {
                name: "border-block-style",
                description: "نمط الحافة في اتجاه الكتلة",
                values: [
                    { value: "solid", description: "صلب" },
                    { value: "dashed", description: "متقطع" }
                ]
            },
            // -------- border-block-color --------
            {
                name: "border-block-color",
                description: "لون الحافة في اتجاه الكتلة",
                values: [
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" }
                ],
                freeInput: true
            },
            // -------- border-inline-width --------
            {
                name: "border-inline-width",
                description: "سمك الحافة في اتجاه السطر (يمين ويسار)",
                values: [
                    { value: "2px", description: "سمك 2 بكسل" }
                ],
                freeInput: true
            },
            // -------- border-inline-style --------
            {
                name: "border-inline-style",
                description: "نمط الحافة في اتجاه السطر",
                values: [
                    { value: "solid", description: "صلب" },
                    { value: "dotted", description: "منقط" }
                ]
            },
            // -------- border-inline-color --------
            {
                name: "border-inline-color",
                description: "لون الحافة في اتجاه السطر",
                values: [
                    { value: "green", description: "أخضر" },
                    { value: "#ff0000", description: "أحمر" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 7. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "border-examples",
        description: "أمثلة عملية متقدمة للحدود والظلال تجمع بين عدة خصائص",
        properties: [
            {
                name: "مثال 1 - بطاقة أنيقة",
                description: "بطاقة مزودة بظل جميل وحواف مستديرة",
                values: [
                    { value: ".card { border: 1px solid #e0e0e0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }", description: "بطاقة بتصميم نظيف وعصري" }
                ]
            },
            {
                name: "مثال 2 - زر ثلاثي الأبعاد",
                description: "زر بتأثير ثلاثي الأبعاد باستخدام الظلال والحدود",
                values: [
                    { value: ".button { border: none; border-radius: 8px; box-shadow: 0 4px 0 #d32f2f, 0 6px 12px rgba(0,0,0,0.2); } .button:active { transform: translateY(4px); box-shadow: 0 2px 0 #d32f2f, 0 6px 12px rgba(0,0,0,0.2); }", description: "زر ثلاثي الأبعاد مع تأثير الضغط" }
                ]
            },
            {
                name: "مثال 3 - توهج بالجلو",
                description: "تأثير توهج حول العنصر عند التمرير",
                values: [
                    { value: ".element:hover { box-shadow: 0 0 20px rgba(0, 120, 255, 0.4), 0 0 60px rgba(0, 120, 255, 0.2); border-color: #0078ff; }", description: "تأثير توهج أزرق" }
                ]
            },
            {
                name: "مثال 4 - حافة مزخرفة بصورة",
                description: "استخدام صورة كحافة للعنصر",
                values: [
                    { value: ".fancy-border { border: 20px solid transparent; border-image: url('border-pattern.png') 30 round; border-radius: 12px; }", description: "حافة مزخرفة بصورة" }
                ]
            },
            {
                name: "مثال 5 - ظل داخلي عصري",
                description: "ظل داخلي يعطي مظهراً غائراً للعنصر",
                values: [
                    { value: ".inset-shadow { box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.06); border: 1px solid #eaeaea; border-radius: 8px; }", description: "ظل داخلي ناعم" }
                ]
            },
            {
                name: "مثال 6 - حدود متعددة الألوان",
                description: "عنصر بحدود متعددة الألوان باستخدام box-shadow",
                values: [
                    { value: ".multi-border { border: 3px solid blue; box-shadow: 0 0 0 3px red, 0 0 0 6px green, 0 0 0 9px orange; }", description: "أربعة حدود متداخلة بألوان مختلفة" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. نصائح وإرشادات
    // ============================================================
    {
        tag: "border-tips",
        description: "نصائح وإرشادات مهمة لاستخدام الحدود والظلال بشكل فعال",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الحدود والظلال",
                values: [
                    { value: "استخدم box-shadow بحذر", description: "الظلال الثقيلة قد تؤثر على أداء الصفحة" },
                    { value: "استخدم border-radius مع will-change", description: "will-change: transform, border-radius يحسن أداء الزوايا الدائرية" },
                    { value: "تجنب box-shadow المتعددة الكبيرة", description: "الظلال المتعددة على نفس العنصر قد تبطئ الأداء" }
                ]
            },
            {
                name: "نصائح التصميم",
                description: "نصائح لتصميم حدود وظلال جذابة",
                values: [
                    { value: "استخدم الظلال الناعمة", description: "rgba(0,0,0,0.08) يعطي ظلاً ناعماً وأنيقاً" },
                    { value: "اختر ألوان حدود متناسقة", description: "تأكد من تناسق لون الحافة مع تصميمك العام" },
                    { value: "استخدم border-radius بشكل متناسب", description: "الزوايا الدائرية تمنح مظهراً عصرياً" },
                    { value: "أضف انتقالات سلسة", description: "استخدم transition للحدود والظلال لتغييرات ناعمة" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل الحدود والظلال قابلة للوصول",
                values: [
                    { value: "تأكد من تباين الحواف", description: "يجب أن تكون الحواف مرئية بوضوح" },
                    { value: "استخدم outline للحصول على التركيز", description: "outline مهم لتحديد العناصر النشطة" },
                    { value: "لا تعتمد على اللون فقط", description: "استخدم نمطاً مختلفاً لتحديد الحالة" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.bordersShadowsData = bordersShadowsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bordersShadowsData;
}