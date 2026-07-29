// ============================================================
// paged-media.js
// خصائص الطباعة والصفحات المطبوعة (Print & Paged Media) في CSS
// تتحكم في كيفية ظهور الصفحة عند طباعتها أو في وسائط الصفحات المطبوعة
// ============================================================

const pagedMediaData = [
    // ============================================================
    // 1. خصائص فواصل الصفحات (Page Breaks)
    // ============================================================
    {
        tag: "page-break",
        description: "خصائص التحكم في فواصل الصفحات عند الطباعة، تتحكم في مكان بدء صفحة جديدة",
        properties: [
            // -------- page-break-before --------
            {
                name: "page-break-before",
                description: "يحدد إدراج فاصل صفحة قبل العنصر عند الطباعة، يجبر العنصر على البدء في صفحة جديدة",
                values: [
                    { value: "auto", description: "تلقائي - يترك المتصفح يقرر ما إذا كان سيضيف فاصل صفحة - القيمة الافتراضية" },
                    { value: "always", description: "إدراج فاصل صفحة دائماً قبل العنصر - يجبر العنصر على البدء في صفحة جديدة" },
                    { value: "avoid", description: "تجنب فاصل الصفحة قبل العنصر إن أمكن - يحاول إبقاء العنصر في نفس الصفحة" },
                    { value: "left", description: "إدراج فاصل صفحة ليصبح العنصر في صفحة يسرى (صفحة فردية)" },
                    { value: "right", description: "إدراج فاصل صفحة ليصبح العنصر في صفحة يمنى (صفحة زوجية)" },
                    { value: "recto", description: "إدراج فاصل صفحة ليصبح العنصر في صفحة recto (في العربية هي الصفحة اليمنى)" },
                    { value: "verso", description: "إدراج فاصل صفحة ليصبح العنصر في صفحة verso (في العربية هي الصفحة اليسرى)" }
                ]
            },
            // -------- page-break-after --------
            {
                name: "page-break-after",
                description: "يحدد إدراج فاصل صفحة بعد العنصر عند الطباعة، يجبر المحتوى التالي على البدء في صفحة جديدة",
                values: [
                    { value: "auto", description: "تلقائي - يترك المتصفح يقرر - القيمة الافتراضية" },
                    { value: "always", description: "إدراج فاصل صفحة دائماً بعد العنصر" },
                    { value: "avoid", description: "تجنب فاصل الصفحة بعد العنصر إن أمكن" },
                    { value: "left", description: "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة يسرى" },
                    { value: "right", description: "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة يمنى" },
                    { value: "recto", description: "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة recto" },
                    { value: "verso", description: "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة verso" }
                ]
            },
            // -------- page-break-inside --------
            {
                name: "page-break-inside",
                description: "يحدد منع كسر العنصر عبر صفحتين (منع الفاصل داخله)، يحافظ على سلامة العنصر",
                values: [
                    { value: "auto", description: "تلقائي - يسمح بكسر العنصر عبر صفحات - القيمة الافتراضية" },
                    { value: "avoid", description: "تجنب كسر العنصر عبر صفحتين - يحاول إبقاء العنصر في صفحة واحدة" }
                ]
            },
            // -------- orphans --------
            {
                name: "orphans",
                description: "يحدد الحد الأدنى لعدد الأسطر التي يجب أن تبقى في أسفل الصفحة عند كسر الفقرة (الأيتام)",
                values: [
                    { value: "2", description: "سطران على الأقل في أسفل الصفحة - القيمة الافتراضية" },
                    { value: "3", description: "ثلاثة أسطر على الأقل في أسفل الصفحة" },
                    { value: "4", description: "أربعة أسطر على الأقل في أسفل الصفحة" },
                    { value: "5", description: "خمسة أسطر على الأقل في أسفل الصفحة" }
                ],
                freeInput: true
            },
            // -------- widows --------
            {
                name: "widows",
                description: "يحدد الحد الأدنى لعدد الأسطر التي يجب أن تبقى في أعلى الصفحة عند كسر الفقرة (الأرامل)",
                values: [
                    { value: "2", description: "سطران على الأقل في أعلى الصفحة - القيمة الافتراضية" },
                    { value: "3", description: "ثلاثة أسطر على الأقل في أعلى الصفحة" },
                    { value: "4", description: "أربعة أسطر على الأقل في أعلى الصفحة" },
                    { value: "5", description: "خمسة أسطر على الأقل في أعلى الصفحة" }
                ],
                freeInput: true
            },
            // -------- page --------
            {
                name: "page",
                description: "يحدد اسم الصفحة التي سيظهر فيها العنصر (يستخدم مع @page)، يسمح بتخصيص صفحات مختلفة",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "chapter", description: "يظهر العنصر في صفحة باسم 'chapter'" },
                    { value: "appendix", description: "يظهر العنصر في صفحة باسم 'appendix'" },
                    { value: "cover", description: "يظهر العنصر في صفحة باسم 'cover'" },
                    { value: "title", description: "يظهر العنصر في صفحة باسم 'title'" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. الخصائص الحديثة (break-*)
    // ============================================================
    {
        tag: "break-properties",
        description: "النسخة الحديثة والموحدة من page-break-*، تعمل عبر الطباعة وأيضاً عبر الأعمدة المتعددة (multi-column) والشبكات المجزأة",
        properties: [
            // -------- break-before --------
            {
                name: "break-before",
                description: "يحدد فاصل قبل العنصر (يعمل للطباعة والأعمدة والشبكات)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "page", description: "فاصل صفحة قبل العنصر (للكتابة)" },
                    { value: "column", description: "فاصل عمود قبل العنصر (للتخطيط متعدد الأعمدة)" },
                    { value: "region", description: "فاصل منطقة قبل العنصر" },
                    { value: "avoid", description: "تجنب الفاصل قبل العنصر إن أمكن" },
                    { value: "avoid-page", description: "تجنب فاصل الصفحة قبل العنصر" },
                    { value: "avoid-column", description: "تجنب فاصل العمود قبل العنصر" },
                    { value: "avoid-region", description: "تجنب فاصل المنطقة قبل العنصر" },
                    { value: "left", description: "فاصل صفحة ليكون العنصر في صفحة يسرى" },
                    { value: "right", description: "فاصل صفحة ليكون العنصر في صفحة يمنى" },
                    { value: "recto", description: "فاصل صفحة ليكون العنصر في صفحة recto" },
                    { value: "verso", description: "فاصل صفحة ليكون العنصر في صفحة verso" }
                ]
            },
            // -------- break-after --------
            {
                name: "break-after",
                description: "يحدد فاصل بعد العنصر (يعمل للطباعة والأعمدة والشبكات)",
                values: [
                    { value: "auto", description: "تلقائي - القيمة الافتراضية" },
                    { value: "page", description: "فاصل صفحة بعد العنصر" },
                    { value: "column", description: "فاصل عمود بعد العنصر" },
                    { value: "region", description: "فاصل منطقة بعد العنصر" },
                    { value: "avoid", description: "تجنب الفاصل بعد العنصر إن أمكن" },
                    { value: "avoid-page", description: "تجنب فاصل الصفحة بعد العنصر" },
                    { value: "avoid-column", description: "تجنب فاصل العمود بعد العنصر" },
                    { value: "avoid-region", description: "تجنب فاصل المنطقة بعد العنصر" },
                    { value: "left", description: "فاصل صفحة ليكون العنصر التالي في صفحة يسرى" },
                    { value: "right", description: "فاصل صفحة ليكون العنصر التالي في صفحة يمنى" },
                    { value: "recto", description: "فاصل صفحة ليكون العنصر التالي في صفحة recto" },
                    { value: "verso", description: "فاصل صفحة ليكون العنصر التالي في صفحة verso" }
                ]
            },
            // -------- break-inside --------
            {
                name: "break-inside",
                description: "يحدد منع كسر العنصر نفسه عبر صفحة أو عمود أو منطقة",
                values: [
                    { value: "auto", description: "تلقائي - يسمح بالكسر - القيمة الافتراضية" },
                    { value: "avoid", description: "تجنب كسر العنصر عبر الصفحات" },
                    { value: "avoid-page", description: "تجنب كسر العنصر عبر الصفحات" },
                    { value: "avoid-column", description: "تجنب كسر العنصر عبر الأعمدة" },
                    { value: "avoid-region", description: "تجنب كسر العنصر عبر المناطق" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. قاعدة @page
    // ============================================================
    {
        tag: "at-page",
        description: "قاعدة @page تُستخدم لتخصيص أبعاد وهوامش الصفحة المطبوعة نفسها، وتقبل محددات مثل :first أو :left/:right لتخصيص صفحات معينة",
        properties: [
            // -------- @page --------
            {
                name: "@page (قاعدة)",
                description: "تُستخدم لتخصيص خصائص الصفحة المطبوعة مثل الحجم والهوامش",
                values: [
                    { value: "@page { size: A4; margin: 2cm; }", description: "تحديد حجم الصفحة A4 وهامش 2 سم" },
                    { value: "@page { size: A5; margin: 1.5cm; }", description: "حجم A5 مع هامش 1.5 سم" },
                    { value: "@page { size: legal; margin: 2.5cm; }", description: "حجم Legal مع هامش 2.5 سم" },
                    { value: "@page { size: letter; margin: 1in; }", description: "حجم Letter مع هامش 1 بوصة" },
                    { value: "@page { size: landscape; }", description: "اتجاه أفقي للصفحة" },
                    { value: "@page { size: portrait; }", description: "اتجاه عمودي للصفحة - القيمة الافتراضية" },
                    { value: "@page { size: A4 landscape; }", description: "حجم A4 مع اتجاه أفقي" },
                    { value: "@page { size: 210mm 297mm; }", description: "حجم مخصص بالملليمتر" },
                    { value: "@page { size: 8.5in 11in; }", description: "حجم مخصص بالبوصة" },
                    { value: "@page { margin: 2cm 3cm; }", description: "هامش 2 سم أعلى/أسفل، 3 سم يمين/يسار" }
                ],
                freeInput: true
            },
            // -------- @page :first --------
            {
                name: "@page :first",
                description: "تخصيص الصفحة الأولى فقط (مثل صفحة العنوان)",
                values: [
                    { value: "@page :first { margin-top: 5cm; }", description: "هامش علوي مختلف للصفحة الأولى فقط" },
                    { value: "@page :first { margin: 4cm; }", description: "هامش أكبر للصفحة الأولى" },
                    { value: "@page :first { size: A4; }", description: "حجم خاص للصفحة الأولى" }
                ],
                freeInput: true
            },
            // -------- @page :left / :right --------
            {
                name: "@page :left / :right",
                description: "تخصيص الصفحات اليسرى واليمنى بشكل مختلف (للطباعة على الوجهين)",
                values: [
                    { value: "@page :left { margin-left: 3cm; margin-right: 2cm; }", description: "هامش أيسر أكبر للصفحات اليسرى" },
                    { value: "@page :right { margin-left: 2cm; margin-right: 3cm; }", description: "هامش أيمن أكبر للصفحات اليمنى" },
                    { value: "@page :left { margin: 2cm 3cm 2cm 4cm; }", description: "هوامش مختلفة للصفحات اليسرى" }
                ],
                freeInput: true
            },
            // -------- @page :blank --------
            {
                name: "@page :blank",
                description: "تخصيص الصفحات الفارغة (الصفحات التي لا تحتوي على محتوى)",
                values: [
                    { value: "@page :blank { margin: 0; }", description: "إزالة هوامش الصفحات الفارغة" },
                    { value: "@page :blank { display: none; }", description: "إخفاء الصفحات الفارغة" }
                ],
                freeInput: true
            },
            // -------- @page with named pages --------
            {
                name: "@page مع أسماء مخصصة",
                description: "تخصيص صفحات بأسماء محددة باستخدام العنصر page",
                values: [
                    { value: "@page chapter { size: A4; margin: 2cm; } .chapter { page: chapter; }", description: "صفحات الفصول بحجم A4" },
                    { value: "@page appendix { size: A5; } .appendix { page: appendix; }", description: "صفحات الملاحق بحجم A5" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. خصائص الطباعة الإضافية
    // ============================================================
    {
        tag: "print-properties",
        description: "خصائص إضافية مفيدة عند الطباعة",
        properties: [
            // -------- @media print --------
            {
                name: "@media print",
                description: "تطبيق أنماط خاصة بالطباعة فقط",
                values: [
                    { value: "@media print { .no-print { display: none; } }", description: "إخفاء عناصر معينة عند الطباعة" },
                    { value: "@media print { .print-only { display: block; } }", description: "إظهار عناصر فقط عند الطباعة" },
                    { value: "@media print { a[href]::after { content: ' (' attr(href) ')'; } }", description: "إظهار روابط URL عند الطباعة" },
                    { value: "@media print { body { font-size: 12pt; } }", description: "حجم خط مناسب للطباعة" },
                    { value: "@media print { .page-break { page-break-before: always; } }", description: "إضافة فاصل صفحة عند الطباعة" }
                ],
                freeInput: true
            },
            // -------- marks (علامات الطباعة) --------
            {
                name: "marks",
                description: "يضيف علامات طباعة مثل علامات القطع والعلامات المتقاطعة (للمطبوعات الاحترافية)",
                values: [
                    { value: "crop", description: "علامات القطع (Crop marks) لقص الصفحة" },
                    { value: "cross", description: "علامات متقاطعة للمحاذاة" },
                    { value: "crop cross", description: "كلتا العلامات معاً" }
                ],
                freeInput: true
            },
            // -------- bleed --------
            {
                name: "bleed",
                description: "يحدد مساحة التجاوز (Bleed) للطباعة الاحترافية، وهي المسافة التي تمتد خارج حافة الصفحة لضمان عدم وجود حدود بيضاء بعد القص",
                values: [
                    { value: "0", description: "بدون تجاوز - القيمة الافتراضية" },
                    { value: "3mm", description: "تجاوز 3 ملليمتر (شائع في الطباعة)" },
                    { value: "5mm", description: "تجاوز 5 ملليمتر" },
                    { value: "0.125in", description: "تجاوز 1/8 بوصة" }
                ],
                freeInput: true
            },
            // -------- color-adjust --------
            {
                name: "color-adjust",
                description: "يتحكم في كيفية تعديل الألوان عند الطباعة لتوفير الحبر أو تحسين القراءة",
                values: [
                    { value: "economy", description: "يضبط الألوان لتوفير الحبر عند الطباعة" },
                    { value: "exact", description: "يحافظ على الألوان الأصلية بدقة عند الطباعة" }
                ],
                freeInput: true
            },
            // -------- print-color-adjust --------
            {
                name: "print-color-adjust",
                description: "النسخة الحديثة من color-adjust، تتحكم في تحسين الألوان للطباعة",
                values: [
                    { value: "economy", description: "توفير الحبر عند الطباعة" },
                    { value: "exact", description: "الحفاظ على الألوان الأصلية" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لاستخدام خصائص الطباعة في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - إخفاء عناصر عند الطباعة",
                description: "إخفاء القوائم والأزرار والإعلانات عند الطباعة",
                values: [
                    { value: "@media print { .nav, .sidebar, .ad, .footer, .button { display: none; } .main-content { width: 100%; margin: 0; padding: 0; } }", description: "إخفاء العناصر غير الضرورية عند الطباعة" }
                ]
            },
            {
                name: "مثال 2 - إظهار روابط URL",
                description: "عرض روابط URL بجانب النص عند الطباعة",
                values: [
                    { value: "@media print { a[href]::after { content: ' (' attr(href) ')'; font-size: 0.9em; color: #666; } a[href^=\"#\"]::after { content: ''; } }", description: "عرض الروابط كاملة عند الطباعة" }
                ]
            },
            {
                name: "مثال 3 - تخصيص صفحة العنوان",
                description: "صفحة عنوان مع هامش خاص",
                values: [
                    { value: "@page title { margin: 5cm 3cm; } .title-page { page: title; }", description: "صفحة عنوان بهوامش واسعة" }
                ]
            },
            {
                name: "مثال 4 - طباعة على الوجهين",
                description: "هوامش مختلفة للصفحات اليسرى واليمنى",
                values: [
                    { value: "@page :left { margin-left: 3cm; margin-right: 2cm; } @page :right { margin-left: 2cm; margin-right: 3cm; }", description: "هوامش مناسبة للطباعة على الوجهين" }
                ]
            },
            {
                name: "مثال 5 - منع كسر الجداول",
                description: "منع تقسيم الجدول عبر صفحات متعددة",
                values: [
                    { value: "table { page-break-inside: avoid; } tr { page-break-inside: avoid; }", description: "الحفاظ على سلامة الجداول عند الطباعة" }
                ]
            },
            {
                name: "مثال 6 - إضافة فاصل صفحة للفصول",
                description: "بدء كل فصل في صفحة جديدة",
                values: [
                    { value: "h1.chapter { page-break-before: always; }", description: "كل فصل يبدأ في صفحة جديدة" }
                ]
            },
            {
                name: "مثال 7 - تحسين الصور للطباعة",
                description: "ضبط الصور للطباعة",
                values: [
                    { value: "@media print { img { max-width: 100%; page-break-inside: avoid; } }", description: "منع كسر الصور وضبط حجمها" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام خصائص الطباعة بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية للطباعة",
                values: [
                    { value: "استخدم @media print", description: "لفصل أنماط الطباعة عن أنماط الشاشة" },
                    { value: "استخدم page-break-inside: avoid", description: "للحفاظ على سلامة العناصر الكبيرة" },
                    { value: "استخدم orphans و widows", description: "لتحسين شكل الفقرات المطبوعة" },
                    { value: "اختبر الطباعة في المتصفح", description: "استخدم Print Preview للتحقق من النتائج" }
                ]
            },
            {
                name: "نصائح تحسين الطباعة",
                description: "نصائح لجعل المستندات المطبوعة أفضل",
                values: [
                    { value: "استخدم pt و cm و in", description: "وحدات الطباعة أفضل من px" },
                    { value: "تجنب الخلفيات الملونة", description: "تستهلك حبراً وتقلل القراءة" },
                    { value: "استخدم ألواناً داكنة على فاتحة", description: "أفضل للقراءة عند الطباعة" },
                    { value: "أضف روابط URL", description: "لتسهيل الوصول للمصادر" }
                ]
            },
            {
                name: "نصائح توفير الحبر",
                description: "نصائح لتوفير الحبر عند الطباعة",
                values: [
                    { value: "استخدم print-color-adjust: economy", description: "يضبط الألوان لتوفير الحبر" },
                    { value: "تجنب الخلفيات الكبيرة", description: "تستهلك حبراً كثيراً" },
                    { value: "استخدم الخطوط الرقيقة", description: "تستهلك حبراً أقل من الخطوط السميكة" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام خصائص الطباعة",
                values: [
                    { value: "نسيان @media print", description: "بدونها لا تنطبق أنماط الطباعة" },
                    { value: "استخدام page-break-before مع الجداول", description: "قد لا يعمل كما هو متوقع" },
                    { value: "نسيان width: 100% للطباعة", description: "قد يظهر المحتوى مقطوعاً" },
                    { value: "استخدام ألوان فاتحة على فاتحة", description: "غير مقروءة عند الطباعة" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.pagedMediaData = pagedMediaData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pagedMediaData;
}