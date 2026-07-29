// ============================================================
// css-pseudo.js
// الفئات والعناصر الزائفة الإضافية (Pseudo-classes & Pseudo-elements)
// تشرح الفئات والعناصر الزائفة التي لم تغط في الملفات السابقة
// ============================================================

const cssPseudoData = [
    // ============================================================
    // 1. فئات زائفة للملاحة (Navigation Pseudo-classes)
    // ============================================================
    {
        tag: "navigation-pseudo",
        description: "فئات زائفة خاصة بالروابط والملاحة",
        properties: [
            {
                name: ":link",
                description: "تطبق على الروابط غير المزارة (التي لم يزرها المستخدم بعد)",
                values: [
                    { value: "a:link { color: #0066cc; }", description: "لون الروابط غير المزارة أزرق" },
                    { value: "a:link { text-decoration: none; }", description: "إزالة التسطير من الروابط غير المزارة" }
                ]
            },
            {
                name: ":visited",
                description: "تطبق على الروابط التي تمت زيارتها من قبل المستخدم (محدودة لأسباب أمنية)",
                values: [
                    { value: "a:visited { color: #6c757d; }", description: "لون الروابط المزارة رمادي" },
                    { value: "a:visited { color: purple; }", description: "لون الروابط المزارة بنفسجي" }
                ]
            },
            {
                name: ":hover",
                description: "تطبق عند تمرير الماوس فوق العنصر (أشهر فئة زائفة)",
                values: [
                    { value: "a:hover { text-decoration: underline; }", description: "تسطير الروابط عند التمرير" },
                    { value: ".btn:hover { background: #0056b3; }", description: "تغيير لون الزر عند التمرير" }
                ]
            },
            {
                name: ":active",
                description: "تطبق عند الضغط على العنصر (أثناء النقر)",
                values: [
                    { value: "a:active { color: red; }", description: "لون الرابط أحمر أثناء النقر" },
                    { value: ".btn:active { transform: scale(0.95); }", description: "تقلص الزر عند النقر" }
                ]
            },
            {
                name: ":focus",
                description: "تطبق عندما يكون العنصر في حالة التركيز (مثل حقل إدخال)",
                values: [
                    { value: "input:focus { border-color: #007bff; }", description: "تغيير لون الحدود عند التركيز" },
                    { value: "input:focus { outline: 2px solid #007bff; }", description: "إطار عند التركيز" }
                ]
            },
            {
                name: ":focus-visible",
                description: "تطبق فقط عندما يكون التركيز ظاهراً للمستخدم (مثل التنقل بلوحة المفاتيح)، وليس عند النقر بالماوس",
                values: [
                    { value: "a:focus-visible { outline: 3px solid #007bff; }", description: "إطار للتركيز بلوحة المفاتيح فقط" },
                    { value: "button:focus-visible { box-shadow: 0 0 0 4px rgba(0,123,255,0.4); }", description: "ظل للتركيز بلوحة المفاتيح" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. فئات زائفة للجداول (Table Pseudo-classes)
    // ============================================================
    {
        tag: "table-pseudo",
        description: "فئات زائفة خاصة بعناصر الجداول",
        properties: [
            {
                name: ":nth-child()",
                description: "تحدد عناصر بناءً على ترتيبها بين إخوتها (كل العناصر، وليس فقط من نفس النوع)",
                values: [
                    { value: "tr:nth-child(odd)", description: "الصفوف الفردية في الجدول" },
                    { value: "tr:nth-child(even)", description: "الصفوف الزوجية" },
                    { value: "tr:nth-child(3n)", description: "الصفوف 3, 6, 9, ..." },
                    { value: "tr:nth-child(3n+1)", description: "الصفوف 1, 4, 7, ..." },
                    { value: "tr:nth-child(n+4)", description: "الصفوف من الرابع فما فوق" },
                    { value: "tr:nth-child(-n+3)", description: "الصفوف الثلاثة الأولى" }
                ]
            },
            {
                name: ":nth-of-type()",
                description: "تحدد عناصر بناءً على ترتيبها بين إخوتها من نفس النوع (مثل كل عناصر li وليس كل العناصر)",
                values: [
                    { value: "li:nth-of-type(odd)", description: "عناصر li الفردية" },
                    { value: "li:nth-of-type(even)", description: "عناصر li الزوجية" },
                    { value: "p:nth-of-type(2)", description: "ثاني عنصر p" }
                ]
            },
            {
                name: ":first-child / :last-child",
                description: "تحدد العنصر الأول أو الأخير بين جميع إخوته (أي نوع)",
                values: [
                    { value: "li:first-child", description: "أول عنصر li" },
                    { value: "li:last-child", description: "آخر عنصر li" },
                    { value: "td:first-child", description: "أول خلية في كل صف" },
                    { value: "td:last-child", description: "آخر خلية في كل صف" }
                ]
            },
            {
                name: ":first-of-type / :last-of-type",
                description: "تحدد العنصر الأول أو الأخير من نوع معين بين إخوته",
                values: [
                    { value: "p:first-of-type", description: "أول عنصر p" },
                    { value: "p:last-of-type", description: "آخر عنصر p" },
                    { value: "h2:first-of-type", description: "أول عنصر h2" }
                ]
            },
            {
                name: ":only-child / :only-of-type",
                description: "تحدد العنصر الوحيد (بدون إخوة) من أي نوع أو من نوع معين",
                values: [
                    { value: "li:only-child", description: "عنصر li الوحيد في قائمته" },
                    { value: "p:only-of-type", description: "عنصر p الوحيد من نوعه" }
                ]
            },
            {
                name: ":empty",
                description: "تحدد العناصر التي لا تحتوي على أي محتوى أو عناصر فرعية",
                values: [
                    { value: "div:empty { display: none; }", description: "إخفاء العناصر الفارغة" },
                    { value: "td:empty { background: #f0f0f0; }", description: "خلفية رمادية للخلايا الفارغة" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. فئات زائفة للنماذج (Form Pseudo-classes)
    // ============================================================
    {
        tag: "form-pseudo",
        description: "فئات زائفة خاصة بعناصر النماذج",
        properties: [
            {
                name: ":enabled / :disabled",
                description: "تحدد العناصر الممكنة أو المعطلة في النماذج",
                values: [
                    { value: "input:enabled { background: white; }", description: "خلفية بيضاء للحقول الممكنة" },
                    { value: "input:disabled { opacity: 0.6; cursor: not-allowed; }", description: "تخفيف الحقول المعطلة" },
                    { value: "button:disabled { background: #ccc; }", description: "لون رمادي للأزرار المعطلة" }
                ]
            },
            {
                name: ":checked",
                description: "تحدد مربعات الاختيار وأزرار الراديو المحددة",
                values: [
                    { value: "input:checked { accent-color: #28a745; }", description: "لون أخضر للمربعات المحددة" },
                    { value: "input:checked + label { color: green; }", description: "تلوين التسمية عند التحديد" }
                ]
            },
            {
                name: ":required / :optional",
                description: "تحدد حقول النموذج الإلزامية أو الاختيارية",
                values: [
                    { value: "input:required { border-color: #dc3545; }", description: "حدود حمراء للحقول الإلزامية" },
                    { value: "input:optional { border-color: #6c757d; }", description: "حدود رمادية للحقول الاختيارية" }
                ]
            },
            {
                name: ":valid / :invalid",
                description: "تحدد حقول النموذج بناءً على صحة القيمة المدخلة (باستخدام validation من HTML5)",
                values: [
                    { value: "input:valid { border-color: #28a745; }", description: "حدود خضراء للقيم الصحيحة" },
                    { value: "input:invalid { border-color: #dc3545; }", description: "حدود حمراء للقيم الخاطئة" },
                    { value: "input:invalid + .error { display: block; }", description: "إظهار رسالة الخطأ" }
                ]
            },
            {
                name: ":in-range / :out-of-range",
                description: "تحدد الحقول الرقمية التي تكون ضمن النطاق المحدد أو خارجه",
                values: [
                    { value: "input:in-range { border-color: green; }", description: "حدود خضراء للقيم ضمن النطاق" },
                    { value: "input:out-of-range { border-color: red; }", description: "حدود حمراء للقيم خارج النطاق" }
                ]
            },
            {
                name: ":read-only / :read-write",
                description: "تحدد العناصر القابلة للقراءة فقط أو القابلة للكتابة",
                values: [
                    { value: "input:read-only { background: #e9ecef; }", description: "خلفية رمادية للحقول المقروءة فقط" },
                    { value: "input:read-write { background: white; }", description: "خلفية بيضاء للحقول القابلة للكتابة" }
                ]
            },
            {
                name: ":placeholder-shown",
                description: "تحدد حقل الإدخال عندما يكون النص المؤقت (placeholder) ظاهراً فيه (أي الحقل فارغ)",
                values: [
                    { value: "input:placeholder-shown { border-color: #ccc; }", description: "حدود رمادية للحقول الفارغة" },
                    { value: "input:placeholder-shown + label { opacity: 0.5; }", description: "تخفيف التسمية عند ظهور placeholder" }
                ]
            },
            {
                name: ":default",
                description: "تحدد العناصر الافتراضية في مجموعة (مثل زر الراديو المحدد افتراضياً)",
                values: [
                    { value: "input:default { border-color: #007bff; }", description: "حدود زرقاء للخيار الافتراضي" }
                ]
            },
            {
                name: ":indeterminate",
                description: "تحدد مربعات الاختيار التي تكون في حالة غير محددة (أو تابعة لخيارات فرعية غير محددة كلها)",
                values: [
                    { value: "input:indeterminate { accent-color: #ffc107; }", description: "لون أصفر للحالة غير المحددة" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. فئات زائفة للغة (Language Pseudo-classes)
    // ============================================================
    {
        tag: "language-pseudo",
        description: "فئات زائفة خاصة باللغة والاتجاه",
        properties: [
            {
                name: ":lang()",
                description: "تحدد العناصر بناءً على لغة المحتوى (عبر سمة lang في HTML)",
                values: [
                    { value: ":lang(ar)", description: "العناصر التي لغتها العربية" },
                    { value: ":lang(en)", description: "العناصر التي لغتها الإنجليزية" },
                    { value: ":lang(fr)", description: "العناصر التي لغتها الفرنسية" },
                    { value: ":lang(ar-SA)", description: "العربية السعودية" },
                    { value: "p:lang(ar) { direction: rtl; }", description: "اتجاه يمين لليسار للنصوص العربية" }
                ]
            },
            {
                name: ":dir()",
                description: "تحدد العناصر بناءً على اتجاه النص (ltr أو rtl) من سمة dir",
                values: [
                    { value: ":dir(ltr)", description: "العناصر ذات الاتجاه من اليسار لليمين" },
                    { value: ":dir(rtl)", description: "العناصر ذات الاتجاه من اليمين لليسار" },
                    { value: ":dir(rtl) { text-align: right; }", description: "محاذاة لليمين للنصوص العربية" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. فئات زائفة للصفحة (Page Pseudo-classes)
    // ============================================================
    {
        tag: "page-pseudo",
        description: "فئات زائفة خاصة بالصفحات المطبوعة",
        properties: [
            {
                name: ":target",
                description: "تحدد العنصر الذي يطابق معرّف (id) الرابط الحالي في شريط العنوان (بعد #)",
                values: [
                    { value: ":target { background: #fff3cd; }", description: "تمييز القسم المستهدف بلون خلفية" },
                    { value: ":target { animation: highlight 1s; }", description: "تأثير تمييز عند الانتقال" }
                ]
            },
            {
                name: ":scope",
                description: "تحدد العنصر الجذري للنطاق الحالي (مفيد مع querySelector و shadow DOM)",
                values: [
                    { value: ":scope { background: #f8f9fa; }", description: "خلفية للعنصر الجذري للنطاق" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. فئات زائفة للربط (Matching Pseudo-classes)
    // ============================================================
    {
        tag: "matching-pseudo",
        description: "فئات زائفة للربط والتجميع",
        properties: [
            {
                name: ":is()",
                description: "دالة تجميع (Matches-Any) تُبسّط كتابة عدة محددات معاً بدل تكرارها",
                values: [
                    { value: ":is(h1, h2, h3) { color: #007bff; }", description: "يطبق على h1 وh2 وh3 معاً" },
                    { value: "article :is(h1, h2) { margin-top: 2rem; }", description: "أي h1 أو h2 داخل article" },
                    { value: ".card :is(h1, h2, h3) { font-size: 1.5rem; }", description: "أي عنوان داخل البطاقة" }
                ]
            },
            {
                name: ":where()",
                description: "مثل :is() تماماً في الوظيفة، لكن مستوى تحديدها (specificity) يبقى صفراً دائماً",
                values: [
                    { value: ":where(h1, h2, h3) { color: #007bff; }", description: "تجميع محددات بدون زيادة قوة التحديد" },
                    { value: ".card :where(h1, h2) { font-size: 1.5rem; }", description: "تحديد منخفض - يسهل تجاوزه" }
                ]
            },
            {
                name: ":has()",
                description: "يختار عنصراً بناءً على وجود عناصر معينة بداخله (المحدد الأب)",
                values: [
                    { value: "div:has(> img) { border: 1px solid #ddd; }", description: "أي div يحتوي مباشرة على صورة" },
                    { value: "label:has(input:checked) { font-weight: bold; }", description: "تنسيق label عندما يكون input بداخله محدداً" },
                    { value: "article:has(h2) { margin-top: 2rem; }", description: "أي article يحتوي على h2" },
                    { value: "div:has(.active) { background: #f0f0f0; }", description: "أي div يحتوي على عنصر بالصنف active" },
                    { value: "section:has(> h1) { border-bottom: 2px solid #333; }", description: "أي section يحتوي على h1 مباشر" }
                ]
            },
            {
                name: ":not()",
                description: "ينفي تطبيق التنسيق على عناصر معينة",
                values: [
                    { value: ":not(.special) { color: #333; }", description: "جميع العناصر ما عدا ذات الصنف special" },
                    { value: "li:not(:first-child) { border-top: 1px solid #eee; }", description: "جميع عناصر li ما عدا الأول" },
                    { value: "p:not(:last-child) { margin-bottom: 1.5rem; }", description: "جميع الفقرات ما عدا الأخيرة" },
                    { value: "div:not([hidden]) { display: block; }", description: "جميع div ما عدا المخفية" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. عناصر زائفة إضافية (Additional Pseudo-elements)
    // ============================================================
    {
        tag: "additional-pseudo-elements",
        description: "عناصر زائفة إضافية لم تغط في الملفات السابقة",
        properties: [
            {
                name: "::before",
                description: "يُنشئ عنصراً افتراضياً قبل محتوى العنصر الأصلي (يحتاج إلى content)",
                values: [
                    { value: ".quote::before { content: '\"'; font-size: 3em; }", description: "علامة تنصيص قبل الاقتباس" },
                    { value: ".card::before { content: ''; display: block; height: 4px; background: #007bff; }", description: "شريط أعلى البطاقة" }
                ]
            },
            {
                name: "::after",
                description: "يُنشئ عنصراً افتراضياً بعد محتوى العنصر الأصلي (يحتاج إلى content)",
                values: [
                    { value: "a[target=\"_blank\"]::after { content: ' ?'; }", description: "سهم بعد الروابط الخارجية" },
                    { value: ".card::after { content: ''; display: block; clear: both; }", description: "تطهير العائمات" }
                ]
            },
            {
                name: "::first-letter",
                description: "يطبق تنسيقاً على الحرف الأول من النص (مفيد للتصميم الفني)",
                values: [
                    { value: "p::first-letter { font-size: 3em; font-weight: bold; color: #007bff; float: left; margin-right: 8px; }", description: "تأثير الـ Drop Cap" },
                    { value: "h1::first-letter { color: red; }", description: "لون الحرف الأول من العنوان أحمر" }
                ]
            },
            {
                name: "::first-line",
                description: "يطبق تنسيقاً على السطر الأول من النص",
                values: [
                    { value: "p::first-line { font-weight: bold; text-transform: uppercase; }", description: "السطر الأول من الفقرة بالخط العريض" },
                    { value: "p::first-line { color: #007bff; }", description: "لون السطر الأول أزرق" }
                ]
            },
            {
                name: "::selection",
                description: "يطبق تنسيقاً على النص المحدد من قبل المستخدم (النص المظلل)",
                values: [
                    { value: "::selection { background: #007bff; color: white; }", description: "خلفية زرقاء ونص أبيض للنص المحدد" },
                    { value: "::selection { background: yellow; color: black; }", description: "خلفية صفراء ونص أسود" }
                ]
            },
            {
                name: "::placeholder",
                description: "يطبق تنسيقاً على النص المؤقت في حقول الإدخال",
                values: [
                    { value: "input::placeholder { color: #6c757d; font-style: italic; }", description: "نص مؤقت رمادي مائل" },
                    { value: "textarea::placeholder { color: #999; font-size: 14px; }", description: "نص مؤقت بحجم أصغر" }
                ]
            },
            {
                name: "::marker",
                description: "يطبق تنسيقاً على علامات التعداد في القوائم (<li>)",
                values: [
                    { value: "li::marker { color: #007bff; font-size: 1.2em; }", description: "لون أزرق وحجم أكبر لعلامات القائمة" },
                    { value: "ul.custom li::marker { content: '? '; }", description: "رمز مخصص لعلامات القائمة" }
                ]
            },
            {
                name: "::backdrop",
                description: "يطبق تنسيقاً على الخلفية خلف العناصر في وضع ملء الشاشة أو خلف عنصر dialog",
                values: [
                    { value: "dialog::backdrop { background: rgba(0,0,0,0.7); backdrop-filter: blur(5px); }", description: "تأثير زجاجي على الخلفية خلف النافذة المنبثقة" },
                    { value: "video::backdrop { background: #000; }", description: "خلفية سوداء للفيديو في وضع ملء الشاشة" }
                ]
            },
            {
                name: "::file-selector-button",
                description: "يطبق تنسيقاً على زر اختيار الملف داخل حقل input من نوع file",
                values: [
                    { value: "input[type=\"file\"]::file-selector-button { background: #007bff; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }", description: "تخصيص زر اختيار الملف" },
                    { value: "input[type=\"file\"]::file-selector-button:hover { background: #0056b3; }", description: "تأثير hover لزر اختيار الملف" }
                ]
            },
            {
                name: "::cue",
                description: "يطبق تنسيقاً على الترجمة النصية (Subtitles) في عناصر <video> و <audio>",
                values: [
                    { value: "video::cue { color: white; background: rgba(0,0,0,0.8); font-size: 1.2rem; }", description: "تنسيق الترجمة في الفيديو" },
                    { value: "video::cue(v[voice=\" narrator\"]) { color: yellow; }", description: "تنسيق صوت معين" }
                ]
            },
            {
                name: "::spelling-error",
                description: "يطبق تنسيقاً على الكلمات التي بها أخطاء إملائية في النصوص القابلة للتحرير",
                values: [
                    { value: "::spelling-error { text-decoration: wavy red; }", description: "خط أحمر مموج تحت الكلمات الخاطئة" }
                ]
            },
            {
                name: "::grammar-error",
                description: "يطبق تنسيقاً على الكلمات التي بها أخطاء نحوية في النصوص القابلة للتحرير",
                values: [
                    { value: "::grammar-error { text-decoration: wavy blue; }", description: "خط أزرق مموج تحت الأخطاء النحوية" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام الفئات والعناصر الزائفة",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية",
                values: [
                    { value: "ترتيب الروابط: LVFHA", description: "Link, Visited, Focus, Hover, Active (ترتيب الكتابة)" },
                    { value: "استخدم :focus-visible بدلاً من :focus", description: "يظهر التركيز فقط عند الحاجة (لوحة المفاتيح)" },
                    { value: "استخدم ::selection للتخصيص", description: "يجعل تجربة تحديد النص أفضل" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل العناصر قابلة للوصول",
                values: [
                    { value: "لا تعتمد على :hover فقط", description: "بعض المستخدمين لا يستخدمون الماوس" },
                    { value: "استخدم :focus-visible", description: "للمستخدمين الذين يتنقلون بلوحة المفاتيح" },
                    { value: "احترم prefers-reduced-motion", description: "للمستخدمين الذين يطلبون تقليل الحركة" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssPseudoData = cssPseudoData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssPseudoData;
}