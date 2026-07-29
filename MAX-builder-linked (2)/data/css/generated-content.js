// ============================================================
// generated-content.js
// خصائص المحتوى المُنشأ (Generated Content) في CSS
// تتيح إضافة محتوى نصي أو صوري قبل أو بعد العناصر باستخدام ::before و ::after
// ============================================================

const generatedContentData = [
    // ============================================================
    // 1. content (المحتوى المُنشأ)
    // ============================================================
    {
        tag: "content",
        description: "يحدد المحتوى الذي سيظهر في العناصر المُنشأة (::before و ::after)، يمكن أن يكون نصاً، صورة، أو قيمة من العنصر الأصلي",
        properties: [
            // -------- content (الخاصية الرئيسية) --------
            {
                name: "content",
                description: "الخاصية الرئيسية لإضافة محتوى مُنشأ قبل أو بعد العنصر باستخدام ::before و ::after",
                values: [
                    // القيم الأساسية
                    { value: "none", description: "بدون محتوى - لا يظهر شيء (القيمة الافتراضية)" },
                    { value: "normal", description: "محتوى طبيعي (القيمة الافتراضية لـ ::before و ::after)" },
                    
                    // النصوص الثابتة
                    { value: "\"\"", description: "سلسلة نصية فارغة - يمكن استخدامها لعناصر CSS فقط (مثل أيقونات)" },
                    { value: "\"نص\"", description: "نص ثابت يظهر قبل أو بعد العنصر" },
                    { value: "\" مرحباً \"", description: "نص مع مسافات حوله" },
                    { value: "\"★ \"", description: "رمز نجمي كـ Unicode" },
                    { value: "\"✓ \"", description: "علامة صح كـ Unicode" },
                    { value: "\"• \"", description: "نقطة كـ Unicode" },
                    { value: "\"✗ \"", description: "علامة خطأ كـ Unicode" },
                    { value: "\"❝ \"", description: "علامة تنصيص مزدوجة" },
                    { value: "\"🔗 \"", description: "رمز رابط كـ Unicode" },
                    { value: "\"📌 \"", description: "رمز دبوس كـ Unicode" },
                    { value: "\"🔥 \"", description: "رمز نار كـ Unicode" },
                    { value: "\"💡 \"", description: "رمز فكرة كـ Unicode" },
                    { value: "\"⭐ \"", description: "رمز نجمة كـ Unicode" },
                    { value: "\"⚠️ \"", description: "رمز تحذير كـ Unicode" },
                    { value: "\"✅ \"", description: "رمز نجاح كـ Unicode" },
                    { value: "\"❌ \"", description: "رمز رفض كـ Unicode" },
                    
                    // الصور
                    { value: "url('image.png')", description: "صورة تظهر كمحتوى قبل أو بعد العنصر" },
                    { value: "url('icon.svg')", description: "صورة SVG" },
                    { value: "url('image.jpg')", description: "صورة JPG" },
                    { value: "url('data:image/svg+xml,...')", description: "صورة مشفرة في الـ CSS" },
                    
                    // دالة attr() - أخذ قيمة سمة
                    { value: "attr(href)", description: "يأخذ قيمة سمة href من العنصر الأصلي" },
                    { value: "attr(title)", description: "يأخذ قيمة سمة title" },
                    { value: "attr(data-tooltip)", description: "يأخذ قيمة سمة data-tooltip" },
                    { value: "attr(data-label)", description: "يأخذ قيمة سمة data-label" },
                    { value: "attr(alt)", description: "يأخذ قيمة سمة alt (خاص بالصور)" },
                    { value: "attr(src)", description: "يأخذ قيمة سمة src" },
                    { value: "\"نوع: \" attr(data-type)", description: "نص مع قيمة سمة" },
                    { value: "\"حجم: \" attr(data-size) \"px\"", description: "نص مع قيمة سمة ووحدة" },
                    
                    // العدادات
                    { value: "counter(chapter)", description: "يعرض قيمة عداد chapter" },
                    { value: "counter(page)", description: "يعرض قيمة عداد page" },
                    { value: "counter(section)", description: "يعرض قيمة عداد section" },
                    { value: "counter(chapter, upper-roman)", description: "يعرض العداد بأرقام رومانية كبيرة" },
                    { value: "counter(chapter, lower-roman)", description: "يعرض العداد بأرقام رومانية صغيرة" },
                    { value: "counter(chapter, upper-alpha)", description: "يعرض العداد بأحرف لاتينية كبيرة (A, B, C)" },
                    { value: "counter(chapter, lower-alpha)", description: "يعرض العداد بأحرف لاتينية صغيرة (a, b, c)" },
                    { value: "counter(chapter, decimal-leading-zero)", description: "يعرض العداد بأصفار بادئة (01, 02, 03)" },
                    { value: "counter(chapter, arabic-indic)", description: "يعرض العداد بالأرقام العربية الهندية" },
                    { value: "counters(section, '.')", description: "يعرض تسلسل العدادات المتداخلة مفصولة بنقطة، مثل 1.2.3" },
                    { value: "counters(section, '.') '. '", description: "تسلسل مع نقطة ومسافة" },
                    { value: "counters(section, '.', lower-alpha)", description: "تسلسل بأحرف لاتينية" },
                    
                    // علامات التنصيص
                    { value: "open-quote", description: "علامة تنصيص افتتاحية (حسب اللغة وتنسيق quotes)" },
                    { value: "close-quote", description: "علامة تنصيص اختتامية (حسب اللغة وتنسيق quotes)" },
                    { value: "no-open-quote", description: "يزيل علامة التنصيص الافتتاحية (لا تظهر لكن تؤثر على الترقيم)" },
                    { value: "no-close-quote", description: "يزيل علامة التنصيص الاختتامية (لا تظهر لكن تؤثر على الترقيم)" },
                    
                    // خلط القيم المختلفة
                    { value: "\"قبل: \" attr(data-tooltip)", description: "نص مع قيمة سمة" },
                    { value: "url('icon.svg') \" نص\"", description: "صورة ونص معاً" },
                    { value: "\"الفصل \" counter(chapter) \": \"", description: "نص مع عداد ونص" },
                    { value: "\"صفحة \" counter(page) \" من \" counter(total-pages)", description: "ترقيم صفحات مع العدد الكلي" },
                    { value: "open-quote attr(title) close-quote", description: "نص بين علامات تنصيص" },
                    { value: "\"\" url('icon.svg') \" \" attr(data-label)", description: "مزيج من قيم متعددة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. quotes (علامات التنصيص)
    // ============================================================
    {
        tag: "quotes",
        description: "يحدد علامات التنصيص المستخدمة مع open-quote و close-quote في خاصية content، يمكن تحديد عدة مستويات للتداخل",
        properties: [
            {
                name: "quotes",
                description: "يحدد علامات التنصيص المستخدمة مع open-quote و close-quote في المحتوى المُنشأ",
                values: [
                    { value: "auto", description: "علامات تنصيص تلقائية حسب لغة المستخدم (القيمة الافتراضية)" },
                    { value: "none", description: "بدون علامات تنصيص" },
                    { value: "\"\" \"\"", description: "علامات تنصيص فارغة - لا تظهر" },
                    { value: "\" \" \" \"", description: "علامات تنصيص بمسافات" },
                    
                    // علامات تنصيص عربية
                    { value: "\"“\" \"”\" \"‘\" \"’\"", description: "علامات تنصيص عربية (علامات اقتباس)" },
                    { value: "\"«\" \"»\" \"‹\" \"›\"", description: "علامات تنصيص فرنسية/عربية (أيضاً تستخدم في العربية)" },
                    
                    // علامات تنصيص إنجليزية
                    { value: "\"“\" \"”\" \"‘\" \"’\"", description: "علامات تنصيص إنجليزية (double quotes ثم single quotes)" },
                    { value: "\"'\" \"'\" \"\"\" \"\"\"", description: "علامات تنصيص إنجليزية مفردة ثم مزدوجة" },
                    { value: "\"“\" \"”\"", description: "علامات تنصيص إنجليزية فقط (مستوى واحد)" },
                    
                    // علامات تنصيص لغات أخرى
                    { value: "\"«\" \"»\" \"‹\" \"›\"", description: "علامات تنصيص فرنسية (guillemets)" },
                    { value: "\"„\" \"“\" \"‚\" \"‘\"", description: "علامات تنصيص ألمانية" },
                    { value: "\"»\" \"«\" \"›\" \"‹\"", description: "علامات تنصيص دانماركية" },
                    { value: "\"》\" \"《\"", description: "علامات تنصيص صينية" },
                    { value: "\"『\" \"』\" \"「\" \"」\"", description: "علامات تنصيص يابانية" },
                    
                    // علامات تنصيص مخصصة
                    { value: "\"[\" \"]\" \"{\" \"}\"", description: "علامات تنصيص بأقواس" },
                    { value: "\"<\" \">\" \"{\" \"}\"", description: "علامات تنصيص بزوايا" },
                    { value: "\"（\" \"）\" \"［\" \"］\"", description: "علامات تنصيص يابانية بأقواس واسعة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. counter-reset (إعادة تعيين العداد)
    // ============================================================
    {
        tag: "counter-reset",
        description: "يُنشئ عداداً جديداً أو يُعيد تعيين قيمته إلى قيمة محددة، يستخدم لترقيم العناصر تلقائياً",
        properties: [
            {
                name: "counter-reset",
                description: "يُنشئ عداداً جديداً أو يُعيد تعيين قيمته إلى قيمة محددة",
                values: [
                    { value: "none", description: "بدون إعادة تعيين - القيمة الافتراضية" },
                    
                    // تعيين عداد واحد
                    { value: "chapter", description: "يُنشئ عداداً باسم 'chapter' بقيمة 0" },
                    { value: "section", description: "يُنشئ عداداً باسم 'section' بقيمة 0" },
                    { value: "figure", description: "يُنشئ عداداً للشكل/الصورة بقيمة 0" },
                    { value: "table", description: "يُنشئ عداداً للجدول بقيمة 0" },
                    { value: "page", description: "يُنشئ عداداً للصفحة بقيمة 0" },
                    { value: "item", description: "يُنشئ عداداً للعنصر بقيمة 0" },
                    { value: "step", description: "يُنشئ عداداً للخطوة بقيمة 0" },
                    { value: "note", description: "يُنشئ عداداً للملاحظة بقيمة 0" },
                    
                    // تعيين عداد بقيمة ابتدائية
                    { value: "chapter 1", description: "يُنشئ عداداً 'chapter' بقيمة ابتدائية 1" },
                    { value: "section 0", description: "يُنشئ عداداً 'section' بقيمة 0" },
                    { value: "figure 5", description: "يُنشئ عداداً 'figure' بقيمة 5" },
                    { value: "page 10", description: "يُنشئ عداداً 'page' بقيمة 10" },
                    
                    // تعيين عدة عدادات
                    { value: "chapter 1 subsection 0", description: "يُنشئ عدادين: chapter=1, subsection=0" },
                    { value: "section 1 figure 0 table 0", description: "يُنشئ ثلاثة عدادات" },
                    { value: "part 1 chapter 0 section 0", description: "يُنشئ ثلاثة عدادات متسلسلة" },
                    
                    // تعيين عداد بقيمة سالبة
                    { value: "chapter -1", description: "يُنشئ عداداً بقيمة -1" },
                    { value: "counter -5", description: "يُنشئ عداداً بقيمة -5" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. counter-increment (زيادة العداد)
    // ============================================================
    {
        tag: "counter-increment",
        description: "يزيد قيمة العداد بمقدار معين (عادة 1) في كل مرة يُستخدم، يسمح بترقيم تلقائي للعناصر",
        properties: [
            {
                name: "counter-increment",
                description: "يزيد قيمة العداد بمقدار معين (عادة 1) في كل مرة يُستخدم",
                values: [
                    { value: "none", description: "بدون زيادة - القيمة الافتراضية" },
                    
                    // زيادة عداد واحد
                    { value: "chapter", description: "يزيد عداد 'chapter' بمقدار 1" },
                    { value: "section", description: "يزيد عداد 'section' بمقدار 1" },
                    { value: "figure", description: "يزيد عداد 'figure' بمقدار 1" },
                    { value: "table", description: "يزيد عداد 'table' بمقدار 1" },
                    { value: "item", description: "يزيد عداد 'item' بمقدار 1" },
                    
                    // زيادة بمقدار محدد
                    { value: "chapter 2", description: "يزيد عداد 'chapter' بمقدار 2" },
                    { value: "section 3", description: "يزيد عداد 'section' بمقدار 3" },
                    { value: "figure 5", description: "يزيد عداد 'figure' بمقدار 5" },
                    { value: "item -1", description: "ينقص عداد 'item' بمقدار 1 (قيمة سالبة)" },
                    
                    // زيادة عدة عدادات
                    { value: "chapter 1 subsection 1", description: "يزيد عدادين بمقدار 1" },
                    { value: "section 2 figure 1", description: "يزيد عداد 'section' بمقدار 2 و 'figure' بمقدار 1" },
                    { value: "part 1 chapter 1 section 1", description: "يزيد ثلاثة عدادات" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. counter-set (تعيين العداد)
    // ============================================================
    {
        tag: "counter-set",
        description: "يُحدد قيمة العداد مباشرة دون تغييرها (بدلاً من الزيادة أو إعادة التعيين)، يسمح بتعيين قيمة ثابتة",
        properties: [
            {
                name: "counter-set",
                description: "يُحدد قيمة العداد دون تغييرها (بدلاً من الزيادة أو إعادة التعيين)",
                values: [
                    { value: "none", description: "بدون تعيين - القيمة الافتراضية" },
                    
                    // تعيين عداد واحد
                    { value: "chapter 5", description: "يُعيّن عداد 'chapter' إلى 5" },
                    { value: "section 10", description: "يُعيّن عداد 'section' إلى 10" },
                    { value: "figure 3", description: "يُعيّن عداد 'figure' إلى 3" },
                    { value: "page 20", description: "يُعيّن عداد 'page' إلى 20" },
                    
                    // تعيين عدة عدادات
                    { value: "chapter 5 subsection 3", description: "يُعيّن عدادين: chapter=5, subsection=3" },
                    { value: "section 10 figure 2 table 0", description: "يُعيّن ثلاثة عدادات" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. counter() / counters() (دوال العرض)
    // ============================================================
    {
        tag: "counter-functions",
        description: "دالتان تُستخدمان داخل content لعرض قيمة العداد؛ counter() لعداد واحد بمستوى واحد، وcounters() لعرض تسلسل هرمي (مثل 1.2.3) مع فاصل مخصص",
        properties: [
            {
                name: "counter() / counters() (ملاحظة)",
                description: "دالتان لعرض قيم العدادات في المحتوى المُنشأ",
                values: [
                    // counter() - عرض عداد واحد
                    { value: "counter(chapter)", description: "يعرض قيمة عداد chapter فقط" },
                    { value: "counter(section)", description: "يعرض قيمة عداد section" },
                    { value: "counter(figure)", description: "يعرض قيمة عداد figure" },
                    
                    // counter() مع تنسيقات
                    { value: "counter(chapter, decimal)", description: "يعرض القيمة بالأرقام العادية (افتراضي)" },
                    { value: "counter(chapter, upper-roman)", description: "يعرض القيمة بأرقام رومانية كبيرة (I, II, III)" },
                    { value: "counter(chapter, lower-roman)", description: "يعرض القيمة بأرقام رومانية صغيرة (i, ii, iii)" },
                    { value: "counter(chapter, upper-alpha)", description: "يعرض القيمة بأحرف لاتينية كبيرة (A, B, C)" },
                    { value: "counter(chapter, lower-alpha)", description: "يعرض القيمة بأحرف لاتينية صغيرة (a, b, c)" },
                    { value: "counter(chapter, upper-greek)", description: "يعرض القيمة بأحرف يونانية كبيرة" },
                    { value: "counter(chapter, lower-greek)", description: "يعرض القيمة بأحرف يونانية صغيرة" },
                    { value: "counter(chapter, decimal-leading-zero)", description: "يعرض القيمة بأصفار بادئة (01, 02, 03...)" },
                    { value: "counter(chapter, arabic-indic)", description: "يعرض القيمة بالأرقام العربية الهندية (١, ٢, ٣)" },
                    { value: "counter(chapter, persian)", description: "يعرض القيمة بالأرقام الفارسية" },
                    { value: "counter(chapter, cjk-decimal)", description: "يعرض القيمة بالأرقام الصينية" },
                    
                    // counters() - عرض تسلسل هرمي
                    { value: "counters(section, '.')", description: "يعرض تسلسل العدادات المتداخلة مفصولة بنقطة، مثل 1.2.3" },
                    { value: "counters(section, '-')", description: "يعرض التسلسل مفصولاً بشرطة، مثل 1-2-3" },
                    { value: "counters(section, '/')", description: "يعرض التسلسل مفصولاً بشرطة مائلة" },
                    { value: "counters(section, ' > ')", description: "يعرض التسلسل مفصولاً بـ ' > '" },
                    { value: "counters(section, '.', decimal)", description: "تسلسل بأرقام عادية" },
                    { value: "counters(section, '.', lower-alpha)", description: "تسلسل بأحرف لاتينية صغيرة، مثل a.b.c" },
                    { value: "counters(section, '.', upper-roman)", description: "تسلسل بأرقام رومانية كبيرة، مثل I.II.III" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 7. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة للمحتوى المُنشأ في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - أيقونات قبل الروابط",
                description: "إضافة أيقونة قبل الروابط الخارجية",
                values: [
                    { value: "a[target=\"_blank\"]::after { content: \" 🔗\"; }", description: "إضافة رمز رابط خارجي" },
                    { value: "a[href^=\"https://\"]::before { content: \"🔒 \"; }", description: "إضافة رمز قفل للروابط الآمنة" },
                    { value: "a[href$=\".pdf\"]::after { content: \" 📄\"; }", description: "إضافة رمز ملف PDF" },
                    { value: "a[href$=\".doc\"]::after { content: \" 📝\"; }", description: "إضافة رمز ملف Word" },
                    { value: "a[href$=\".zip\"]::after { content: \" 📦\"; }", description: "إضافة رمز ملف مضغوط" }
                ]
            },
            {
                name: "مثال 2 - تسميات المدخلات",
                description: "إضافة تسميات قبل أو بعد حقول الإدخال",
                values: [
                    { value: "input[type=\"email\"]::before { content: \"📧 \"; }", description: "رمز بريد إلكتروني قبل الحقل" },
                    { value: "input[type=\"password\"]::before { content: \"🔑 \"; }", description: "رمز مفتاح قبل حقل كلمة المرور" },
                    { value: "input[type=\"search\"]::before { content: \"🔍 \"; }", description: "رمز بحث قبل حقل البحث" },
                    { value: "input[type=\"tel\"]::before { content: \"📱 \"; }", description: "رمز هاتف قبل حقل رقم الهاتف" }
                ]
            },
            {
                name: "مثال 3 - ترقيم تلقائي للفصول",
                description: "ترقيم تلقائي للعناوين باستخدام العدادات",
                values: [
                    { value: "body { counter-reset: section; } h2::before { counter-increment: section; content: counter(section) \". \"; }", description: "ترقيم تلقائي للعناوين h2" }
                ]
            },
            {
                name: "مثال 4 - ترقيم متسلسل (فصل.قسم.فقرة)",
                description: "ترقيم هرمي باستخدام counters()",
                values: [
                    { value: "body { counter-reset: chapter; } h1 { counter-reset: section; counter-increment: chapter; } h1::before { content: counter(chapter) \". \"; } h2 { counter-reset: subsection; counter-increment: section; } h2::before { content: counter(chapter) \".\" counter(section) \" \"; } h3 { counter-increment: subsection; } h3::before { content: counter(chapter) \".\" counter(section) \".\" counter(subsection) \" \"; }", description: "ترقيم ثلاثة مستويات (فصل.قسم.فقرة)" }
                ]
            },
            {
                name: "مثال 5 - علامات التنصيص التلقائية",
                description: "إضافة علامات تنصيص تلقائية حول النصوص",
                values: [
                    { value: "q { quotes: \"“\" \"”\" \"‘\" \"’\"; } q::before { content: open-quote; } q::after { content: close-quote; }", description: "علامات تنصيص تلقائية حول عنصر q" }
                ]
            },
            {
                name: "مثال 6 - عرض بيانات مخصصة",
                description: "عرض قيم السمات المخصصة كمحتوى",
                values: [
                    { value: ".tooltip::after { content: attr(data-tooltip); display: block; }", description: "عرض تلميح من data-tooltip" },
                    { value: ".status::before { content: attr(data-status); }", description: "عرض حالة من data-status" },
                    { value: ".product::after { content: \"السعر: \" attr(data-price) \" ريال\"; }", description: "عرض سعر المنتج" }
                ]
            },
            {
                name: "مثال 7 - تعداد الصفحات",
                description: "ترقيم الصفحات في المستندات المطبوعة",
                values: [
                    { value: "@page { counter-reset: page; } .page-number::after { content: counter(page); }", description: "ترقيم الصفحات" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام المحتوى المُنشأ بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لاستخدام المحتوى المُنشأ",
                values: [
                    { value: "استخدم ::before و ::after للعناصر غير التفاعلية", description: "لا تستخدمها على الروابط والأزرار إذا كانت تحتوي على محتوى تفاعلي" },
                    { value: "أضف content: '' لعناصر CSS البحتة", description: "تحتاج إلى content حتى تظهر العناصر الزائفة" },
                    { value: "استخدم attr() بعناية", description: "تأكد من وجود السمة في العنصر" },
                    { value: "استخدم unicode للرموز", description: "أسرع وأخف من الصور" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل المحتوى المُنشأ قابلاً للوصول",
                values: [
                    { value: "تجنب المحتوى الحرج في ::before/::after", description: "قارئات الشاشة قد لا تقرأ المحتوى المُنشأ" },
                    { value: "استخدم content للمحتوى الزخرفي فقط", description: "المحتوى المهم يجب أن يكون في HTML" },
                    { value: "أضف aria-label عند الحاجة", description: "للعناصر التي تعتمد على المحتوى المُنشأ" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام المحتوى المُنشأ وكيفية تجنبها",
                values: [
                    { value: "نسيان content: ''", description: "بدون content لن تظهر ::before و ::after" },
                    { value: "استخدام ::before مع عناصر void", description: "لا تعمل مع img, input, br, hr" },
                    { value: "نسيان علامات التنصيص حول النص", description: "content: نص (خطأ) بدلاً من content: \"نص\" (صحيح)" },
                    { value: "تداخل العدادات", description: "تأكد من reset و increment في المواقع الصحيحة" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.generatedContentData = generatedContentData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = generatedContentData;
}