// ============================================================
// lists-tables.js
// خصائص القوائم والجداول (Lists & Tables) في CSS
// تتحكم في تنسيق القوائم (المرتبة وغير المرتبة) والجداول
// ============================================================

const listsTablesData = [
    // ============================================================
    // 1. خصائص القوائم (Lists)
    // ============================================================
    {
        tag: "lists",
        description: "خصائص تنسيق القوائم (Lists) المرتبة وغير المرتبة، تتحكم في علامات التعداد وأنواع الترقيم",
        properties: [
            // -------- list-style-type --------
            {
                name: "list-style-type",
                description: "يحدد نوع علامة التعداد في القوائم (نقطة، رقم، حرف، رمز، إلخ)",
                values: [
                    // علامات القوائم غير المرتبة (unordered)
                    { value: "disc", description: "دائرة مملوءة (•) - القيمة الافتراضية للقوائم غير المرتبة" },
                    { value: "circle", description: "دائرة فارغة (○)" },
                    { value: "square", description: "مربع مملوء (■)" },
                    
                    // الترقيم العشري
                    { value: "decimal", description: "أرقام عادية (1، 2، 3...) - القيمة الافتراضية للقوائم المرتبة" },
                    { value: "decimal-leading-zero", description: "أرقام بصفر بادئ (01، 02، 03...)" },
                    
                    // الترقيم الروماني
                    { value: "lower-roman", description: "أرقام رومانية صغيرة (i، ii، iii، iv...)" },
                    { value: "upper-roman", description: "أرقام رومانية كبيرة (I، II، III، IV...)" },
                    
                    // الترقيم الأبجدي (لاتيني)
                    { value: "lower-alpha", description: "حروف لاتينية صغيرة (a، b، c...)" },
                    { value: "upper-alpha", description: "حروف لاتينية كبيرة (A، B، C...)" },
                    { value: "lower-latin", description: "حروف لاتينية صغيرة (a، b، c...) - مرادف لـ lower-alpha" },
                    { value: "upper-latin", description: "حروف لاتينية كبيرة (A، B، C...) - مرادف لـ upper-alpha" },
                    
                    // الترقيم اليوناني
                    { value: "lower-greek", description: "حروف يونانية صغيرة (α، β، γ...)" },
                    { value: "upper-greek", description: "حروف يونانية كبيرة (Α، Β، Γ...)" },
                    
                    // الترقيم حسب اللغة
                    { value: "armenian", description: "ترقيم أرمني (Ա, Բ, Գ...)" },
                    { value: "georgian", description: "ترقيم جورجي (ა, ბ, გ...)" },
                    { value: "hebrew", description: "ترقيم عبري (א, ב, ג...)" },
                    { value: "cjk-ideographic", description: "ترقيم صيني/ياباني/كوري (一, 二, 三...)" },
                    { value: "japanese-formal", description: "ترقيم ياباني رسمي" },
                    { value: "japanese-informal", description: "ترقيم ياباني غير رسمي" },
                    { value: "korean-hangul-formal", description: "ترقيم كوري هانغول رسمي" },
                    { value: "korean-hanja-formal", description: "ترقيم كوري هانجا رسمي" },
                    { value: "simp-chinese-formal", description: "ترقيم صيني مبسط رسمي" },
                    { value: "simp-chinese-informal", description: "ترقيم صيني مبسط غير رسمي" },
                    { value: "trad-chinese-formal", description: "ترقيم صيني تقليدي رسمي" },
                    { value: "trad-chinese-informal", description: "ترقيم صيني تقليدي غير رسمي" },
                    
                    // الترقيم الياباني
                    { value: "hiragana", description: "ترقيم هيراغانا ياباني (あ, い, う...)" },
                    { value: "hiragana-iroha", description: "ترقيم هيراغانا ياباني (い, ろ, は...)" },
                    { value: "katakana", description: "ترقيم كاتاكانا ياباني (ア, イ, ウ...)" },
                    { value: "katakana-iroha", description: "ترقيم كاتاكانا ياباني (イ, ロ, ハ...)" },
                    
                    // قيم خاصة
                    { value: "none", description: "بدون علامة تعداد - يخفي علامات التعداد" },
                    { value: "inherit", description: "يرث قيمة العنصر الأب" },
                    { value: "initial", description: "يعيد إلى القيمة الافتراضية" },
                    { value: "unset", description: "يرث إذا كان ممكناً أو يعيد إلى الافتراضي" },
                    
                    // نص مخصص كعلامة تعداد
                    { value: "\"→ \"", description: "سهم كعلامة تعداد مخصصة" },
                    { value: "\"✦ \"", description: "نجمة كماسة كعلامة تعداد" },
                    { value: "\"✓ \"", description: "علامة صح كعلامة تعداد" },
                    { value: "\"• \"", description: "نقطة وسط كعلامة تعداد" },
                    { value: "\"▶ \"", description: "مثلث أيمن كعلامة تعداد" },
                    { value: "\"♦ \"", description: "ماسة كعلامة تعداد" },
                    { value: "\"❝ \"", description: "علامة تنصيص مزدوجة" },
                    { value: "\"★ \"", description: "نجمة كعلامة تعداد" }
                ],
                freeInput: true
            },
            // -------- list-style-position --------
            {
                name: "list-style-position",
                description: "يحدد موقع علامة التعداد (داخل العنصر أم خارجه) بالنسبة لنص العنصر",
                values: [
                    { value: "outside", description: "خارج العنصر (على يسار النص) - القيمة الافتراضية" },
                    { value: "inside", description: "داخل العنصر (على يسار النص داخل الحدود)" }
                ]
            },
            // -------- list-style-image --------
            {
                name: "list-style-image",
                description: "يستخدم صورة كعلامة تعداد بدلاً من النمط الافتراضي، يسمح بأيقونات مخصصة",
                values: [
                    { value: "none", description: "بدون صورة، يستخدم list-style-type - القيمة الافتراضية" },
                    { value: "url('bullet.png')", description: "صورة PNG كعلامة تعداد" },
                    { value: "url('bullet.svg')", description: "صورة SVG كعلامة تعداد (قابلة للتكبير)" },
                    { value: "url('bullet.jpg')", description: "صورة JPG كعلامة تعداد" },
                    { value: "url('https://example.com/icon.png')", description: "صورة من رابط خارجي" },
                    { value: "url('data:image/svg+xml,...')", description: "صورة مشفرة في الـ CSS" }
                ],
                freeInput: true
            },
            // -------- list-style (الاختصار) --------
            {
                name: "list-style",
                description: "اختصار لـ list-style-type و list-style-position و list-style-image في سطر واحد",
                values: [
                    { value: "disc outside", description: "دائرة خارج العنصر - القيمة الافتراضية" },
                    { value: "circle inside", description: "دائرة فارغة داخل العنصر" },
                    { value: "square outside", description: "مربع خارج العنصر" },
                    { value: "decimal inside", description: "أرقام داخل العنصر" },
                    { value: "lower-roman outside", description: "أرقام رومانية صغيرة خارج العنصر" },
                    { value: "upper-alpha outside", description: "حروف كبيرة خارج العنصر" },
                    { value: "disc outside url('bullet.png')", description: "دائرة مع صورة (الصورة تتجاوز النوع)" },
                    { value: "none", description: "بدون علامة تعداد" },
                    { value: "url('bullet.svg') inside", description: "صورة داخل العنصر" }
                ],
                freeInput: true
            },
            // -------- marker (خاصية جديدة) --------
            {
                name: "marker",
                description: "يحدد أنماطاً لعلامات التعداد، خاصية جديدة للتحكم في مظهر العلامات",
                values: [
                    { value: "none", description: "بدون علامة" },
                    { value: "auto", description: "تلقائي حسب list-style-type" },
                    { value: "inside", description: "داخل العنصر" },
                    { value: "outside", description: "خارج العنصر" }
                ]
            },
            // -------- counter-reset (للقوائم المخصصة) --------
            {
                name: "counter-reset (للقوائم)",
                description: "يُعيد تعيين عداد القائمة للبدء من رقم معين (للإصدارات المخصصة)",
                values: [
                    { value: "none", description: "بدون إعادة تعيين - القيمة الافتراضية" },
                    { value: "list-item", description: "يعيد تعيين عداد عناصر القائمة" },
                    { value: "list-item 5", description: "يبدأ الترقيم من الرقم 5" },
                    { value: "list-item 10", description: "يبدأ الترقيم من الرقم 10" }
                ],
                freeInput: true
            },
            // -------- counter-increment (للقوائم المخصصة) --------
            {
                name: "counter-increment (للقوائم)",
                description: "يزيد عداد القائمة لكل عنصر (للإصدارات المخصصة)",
                values: [
                    { value: "none", description: "بدون زيادة - القيمة الافتراضية" },
                    { value: "list-item", description: "يزيد عداد عناصر القائمة بمقدار 1" },
                    { value: "list-item 2", description: "يزيد بمقدار 2" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. خصائص الجداول (Tables)
    // ============================================================
    {
        tag: "tables",
        description: "خصائص تنسيق الجداول (Tables)، تتحكم في مظهر الخلايا والحواف والمسافات",
        properties: [
            // -------- border-collapse --------
            {
                name: "border-collapse",
                description: "يحدد هل تتحد حواف الخلايا المتجاورة في جدول واحد أم تبقى منفصلة",
                values: [
                    { value: "separate", description: "حواف منفصلة مع مسافة بينها - القيمة الافتراضية" },
                    { value: "collapse", description: "حواف متحدة في خط واحد - يمنع ظهور حواف مزدوجة" }
                ]
            },
            // -------- border-spacing --------
            {
                name: "border-spacing",
                description: "يحدد المسافة بين حواف الخلايا في الجدول (يعمل فقط مع border-collapse: separate)",
                values: [
                    { value: "0", description: "بدون مسافة بين الخلايا - القيمة الافتراضية" },
                    { value: "1px", description: "مسافة 1 بكسل بين الخلايا" },
                    { value: "2px", description: "مسافة 2 بكسل" },
                    { value: "3px", description: "مسافة 3 بكسل" },
                    { value: "4px", description: "مسافة 4 بكسل" },
                    { value: "5px", description: "مسافة 5 بكسل" },
                    { value: "8px", description: "مسافة 8 بكسل" },
                    { value: "10px", description: "مسافة 10 بكسل" },
                    { value: "15px", description: "مسافة 15 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "1rem", description: "مسافة 1rem" },
                    { value: "5px 10px", description: "5 بكسل أفقياً (بين الأعمدة)، 10 بكسل عمودياً (بين الصفوف)" },
                    { value: "10px 20px", description: "10 بكسل أفقياً، 20 بكسل عمودياً" }
                ],
                freeInput: true
            },
            // -------- caption-side --------
            {
                name: "caption-side",
                description: "يحدد موقع عنوان الجدول (فوق الجدول أم تحته)",
                values: [
                    { value: "top", description: "فوق الجدول - القيمة الافتراضية" },
                    { value: "bottom", description: "تحت الجدول" },
                    { value: "block-start", description: "في بداية الكتلة (فوق في اللغات الأفقية)" },
                    { value: "block-end", description: "في نهاية الكتلة (تحت في اللغات الأفقية)" },
                    { value: "inline-start", description: "في بداية السطر (يسار في اللغات LTR)" },
                    { value: "inline-end", description: "في نهاية السطر (يمين في اللغات LTR)" }
                ]
            },
            // -------- empty-cells --------
            {
                name: "empty-cells",
                description: "يحدد هل تظهر حواف الخلايا الفارغة في الجدول أم لا",
                values: [
                    { value: "show", description: "تظهر حواف الخلايا الفارغة وخلفيتها - القيمة الافتراضية" },
                    { value: "hide", description: "تخفي حواف وخلفية الخلايا الفارغة" }
                ]
            },
            // -------- table-layout --------
            {
                name: "table-layout",
                description: "يحدد كيفية حساب عرض أعمدة الجدول (تلقائي حسب المحتوى أو ثابت)",
                values: [
                    { value: "auto", description: "يحسب المتصفح العرض تلقائياً حسب المحتوى - القيمة الافتراضية" },
                    { value: "fixed", description: "عرض ثابت، العمود الأول يحدد العرض، يحسن الأداء بشكل كبير" }
                ]
            },
            // -------- vertical-align (للخلايا) --------
            {
                name: "vertical-align",
                description: "يحدد المحاذاة الرأسية لمحتوى خلايا الجدول (أو العناصر السطرية عموماً)",
                values: [
                    // قيم الجداول
                    { value: "baseline", description: "محاذاة حسب خط الأساس للنص - القيمة الافتراضية" },
                    { value: "top", description: "محاذاة إلى أعلى الخلية" },
                    { value: "middle", description: "محاذاة إلى منتصف الخلية" },
                    { value: "bottom", description: "محاذاة إلى أسفل الخلية" },
                    
                    // قيم النصوص
                    { value: "sub", description: "كنص منخفض (subscript) - مثل <sub>" },
                    { value: "super", description: "كنص مرتفع (superscript) - مثل <sup>" },
                    { value: "text-top", description: "محاذاة مع أعلى النص" },
                    { value: "text-bottom", description: "محاذاة مع أسفل النص" }
                ],
                freeInput: true
            },
            // -------- width (للجداول) --------
            {
                name: "width (للجداول)",
                description: "يحدد عرض الجدول أو الخلية، يمكن أن يكون ثابتاً أو نسبياً",
                values: [
                    { value: "auto", description: "عرض تلقائي حسب المحتوى - القيمة الافتراضية" },
                    { value: "100%", description: "عرض كامل الحاوية" },
                    { value: "800px", description: "عرض ثابت 800 بكسل" },
                    { value: "50%", description: "نصف عرض الحاوية" }
                ],
                freeInput: true
            },
            // -------- height (للجداول) --------
            {
                name: "height (للجداول)",
                description: "يحدد ارتفاع الجدول أو الخلية",
                values: [
                    { value: "auto", description: "ارتفاع تلقائي حسب المحتوى - القيمة الافتراضية" },
                    { value: "100%", description: "ارتفاع كامل الحاوية" },
                    { value: "100px", description: "ارتفاع ثابت 100 بكسل" }
                ],
                freeInput: true
            },
            // -------- border (للجداول) --------
            {
                name: "border (للجداول)",
                description: "يحدد حواف الجدول والخلايا، يمكن استخدام border-collapse لدمج الحواف",
                values: [
                    { value: "none", description: "بدون حواف - القيمة الافتراضية" },
                    { value: "1px solid black", description: "حافة سوداء صلبة" },
                    { value: "2px solid #ccc", description: "حافة رمادية فاتحة" }
                ],
                freeInput: true
            },
            // -------- padding (للخلايا) --------
            {
                name: "padding (للخلايا)",
                description: "يحدد المسافة الداخلية للخلايا، يضيف فجوة بين المحتوى والحواف",
                values: [
                    { value: "0", description: "بدون مسافة داخلية" },
                    { value: "4px", description: "مسافة 4 بكسل" },
                    { value: "8px", description: "مسافة 8 بكسل" },
                    { value: "10px", description: "مسافة 10 بكسل" },
                    { value: "12px", description: "مسافة 12 بكسل" },
                    { value: "16px", description: "مسافة 16 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "8px 12px", description: "8 بكسل أعلى/أسفل، 12 بكسل يمين/يسار" }
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
        description: "أمثلة عملية متقدمة لاستخدام خصائص القوائم والجداول في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - قائمة مخصصة بأيقونات",
                description: "قائمة غير مرتبة بأيقونات مخصصة بدلاً من النقاط",
                values: [
                    { value: "ul.custom { list-style: none; padding: 0; } ul.custom li { padding-left: 30px; background: url('icon.png') left center no-repeat; }", description: "قائمة بأيقونات مخصصة" },
                    { value: "ul.custom { list-style-type: '→ '; padding-left: 20px; }", description: "قائمة بسهم كعلامة تعداد" },
                    { value: "ul.custom li::marker { color: #007bff; font-size: 1.2em; }", description: "تخصيص لون وحجم العلامة" }
                ]
            },
            {
                name: "مثال 2 - قائمة مرقمة بتنسيق مخصص",
                description: "قائمة مرتبة مع تنسيق خاص للأرقام",
                values: [
                    { value: "ol.custom { list-style-type: upper-roman; font-weight: bold; } ol.custom li { margin-bottom: 8px; }", description: "قائمة بأرقام رومانية كبيرة" },
                    { value: "ol.custom { list-style-type: lower-alpha; padding-left: 30px; }", description: "قائمة بحروف صغيرة" },
                    { value: "ol.custom { list-style-type: decimal-leading-zero; }", description: "قائمة بأرقام بصفر بادئ" }
                ]
            },
            {
                name: "مثال 3 - جدول أنيق",
                description: "جدول بتصميم نظيف مع حواف مدمجة وتباعد مناسب",
                values: [
                    { value: "table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid #ddd; padding: 12px; text-align: left; } th { background: #f5f5f5; font-weight: bold; } tr:nth-child(even) { background: #f9f9f9; } tr:hover { background: #f0f0f0; }", description: "جدول أنيق مع تظليل الصفوف" }
                ]
            },
            {
                name: "مثال 4 - جدول بدون حواف",
                description: "جدول بتصميم نظيف بدون حواف مرئية",
                values: [
                    { value: "table { border-collapse: collapse; width: 100%; } th, td { padding: 12px 16px; border-bottom: 1px solid #eee; } th { border-bottom: 2px solid #333; }", description: "جدول بدون حواف جانبية" }
                ]
            },
            {
                name: "مثال 5 - جدول بعنوان في الأسفل",
                description: "جدول مع عنوان يظهر في الأسفل",
                values: [
                    { value: "table { caption-side: bottom; } caption { padding: 8px; font-style: italic; color: #666; }", description: "عنوان جدول في الأسفل" }
                ]
            },
            {
                name: "مثال 6 - قائمة متداخلة",
                description: "قوائم متداخلة بتنسيق مختلف لكل مستوى",
                values: [
                    { value: "ul { list-style-type: disc; } ul ul { list-style-type: circle; } ul ul ul { list-style-type: square; }", description: "قوائم متداخلة بعلامات مختلفة" }
                ]
            },
            {
                name: "مثال 7 - جدول بعرض ثابت",
                description: "جدول بعرض ثابت لتحسين الأداء",
                values: [
                    { value: "table { table-layout: fixed; width: 100%; } colgroup .col1 { width: 20%; } colgroup .col2 { width: 50%; } colgroup .col3 { width: 30%; }", description: "جدول بعرض ثابت للأعمدة" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام خصائص القوائم والجداول بشكل فعال",
        properties: [
            {
                name: "نصائح القوائم",
                description: "نصائح لتنسيق القوائم بشكل فعال",
                values: [
                    { value: "استخدم list-style: none لإزالة العلامات", description: "ثم استخدم background-image أو ::before لإضافة أيقونات مخصصة" },
                    { value: "استخدم list-style-position: inside", description: "يجعل العلامات جزءاً من المحتوى، مفيد للتباعد" },
                    { value: "استخدم ::marker لتخصيص العلامات", description: "::marker { color: red; font-size: 1.2em; } يغير لون وحجم العلامة" },
                    { value: "استخدم counter() للقوائم المخصصة", description: "يمكن إنشاء ترقيم مخصص باستخدام العدادات" }
                ]
            },
            {
                name: "نصائح الجداول",
                description: "نصائح لتنسيق الجداول بشكل فعال",
                values: [
                    { value: "استخدم border-collapse: collapse", description: "يجعل حواف الجدول أنظف بدمج الحواف" },
                    { value: "استخدم table-layout: fixed", description: "يحسن أداء الجداول الكبيرة بشكل كبير" },
                    { value: "استخدم padding للخلايا", description: "padding يجعل الجدول أكثر قابلية للقراءة" },
                    { value: "استخدم nth-child لتظليل الصفوف", description: "tr:nth-child(even) يسهل قراءة الجداول الطويلة" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل القوائم والجداول قابلة للوصول",
                values: [
                    { value: "استخدم <th> لرؤوس الأعمدة", description: "يساعد قارئات الشاشة في فهم هيكل الجدول" },
                    { value: "استخدم scope في <th>", description: "scope=\"col\" أو scope=\"row\" يوضح العلاقة" },
                    { value: "استخدم caption للجداول", description: "يصف محتوى الجدول للمستخدمين" },
                    { value: "استخدم <ul> و <ol> للقوائم", description: "تساعد قارئات الشاشة في التنقل" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام القوائم والجداول وكيفية تجنبها",
                values: [
                    { value: "نسيان border-collapse", description: "بدونها تظهر حواف مزدوجة" },
                    { value: "استخدام padding على <table> مباشرة", description: "استخدم padding على <td> و <th>" },
                    { value: "استخدام width: 100% مع table-layout: auto", description: "قد لا يعمل كما هو متوقع، استخدم fixed" },
                    { value: "نسيان <ul> أو <ol> للقوائم", description: "استخدم القوائم الصحيحة لعلامات التعداد" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.listsTablesData = listsTablesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = listsTablesData;
}