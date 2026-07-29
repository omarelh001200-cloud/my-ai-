// ============================================================
// css-selectors.js
// المحددات (Selectors) في CSS
// تشرح جميع أنواع المحددات المستخدمة لتحديد العناصر في CSS
// ============================================================

const cssSelectorsData = [
    // ============================================================
    // 1. المحددات الأساسية (Basic Selectors)
    // ============================================================
    {
        tag: "basic-selectors",
        description: "المحددات الأساسية في CSS هي اللبنات الأولى لاختيار العناصر، وتشمل محددات النوع، والفئة، والمعرف، والعالمي",
        properties: [
            {
                name: "محدد النوع (Type Selector)",
                description: "يحدد جميع العناصر من نفس النوع (مثل جميع div أو جميع p)",
                values: [
                    { value: "div", description: "يختار جميع عناصر div" },
                    { value: "p", description: "يختار جميع عناصر p" },
                    { value: "h1", description: "يختار جميع عناصر h1" },
                    { value: "span", description: "يختار جميع عناصر span" },
                    { value: "a", description: "يختار جميع عناصر a" },
                    { value: "ul", description: "يختار جميع عناصر ul" },
                    { value: "li", description: "يختار جميع عناصر li" },
                    { value: "img", description: "يختار جميع عناصر img" },
                    { value: "button", description: "يختار جميع عناصر button" },
                    { value: "input", description: "يختار جميع عناصر input" },
                    { value: "section", description: "يختار جميع عناصر section" },
                    { value: "article", description: "يختار جميع عناصر article" },
                    { value: "nav", description: "يختار جميع عناصر nav" },
                    { value: "header", description: "يختار جميع عناصر header" },
                    { value: "footer", description: "يختار جميع عناصر footer" },
                    { value: "main", description: "يختار جميع عناصر main" },
                    { value: "aside", description: "يختار جميع عناصر aside" },
                    { value: "figure", description: "يختار جميع عناصر figure" },
                    { value: "figcaption", description: "يختار جميع عناصر figcaption" },
                    { value: "blockquote", description: "يختار جميع عناصر blockquote" },
                    { value: "pre", description: "يختار جميع عناصر pre" },
                    { value: "code", description: "يختار جميع عناصر code" },
                    { value: "em", description: "يختار جميع عناصر em" },
                    { value: "strong", description: "يختار جميع عناصر strong" },
                    { value: "table", description: "يختار جميع عناصر table" },
                    { value: "form", description: "يختار جميع عناصر form" },
                    { value: "label", description: "يختار جميع عناصر label" },
                    { value: "select", description: "يختار جميع عناصر select" },
                    { value: "textarea", description: "يختار جميع عناصر textarea" }
                ]
            },
            {
                name: "محدد الفئة (Class Selector)",
                description: "يحدد العناصر التي تحمل فئة معينة (باستخدام . قبل اسم الفئة)",
                values: [
                    { value: ".container", description: "يختار جميع العناصر ذات الفئة container" },
                    { value: ".active", description: "يختار جميع العناصر ذات الفئة active" },
                    { value: ".btn", description: "يختار جميع العناصر ذات الفئة btn" },
                    { value: ".nav", description: "يختار جميع العناصر ذات الفئة nav" },
                    { value: ".card", description: "يختار جميع العناصر ذات الفئة card" },
                    { value: ".header", description: "يختار جميع العناصر ذات الفئة header" },
                    { value: ".footer", description: "يختار جميع العناصر ذات الفئة footer" },
                    { value: ".main", description: "يختار جميع العناصر ذات الفئة main" },
                    { value: ".sidebar", description: "يختار جميع العناصر ذات الفئة sidebar" },
                    { value: ".hidden", description: "يختار جميع العناصر ذات الفئة hidden" },
                    { value: ".visible", description: "يختار جميع العناصر ذات الفئة visible" },
                    { value: ".error", description: "يختار جميع العناصر ذات الفئة error" },
                    { value: ".success", description: "يختار جميع العناصر ذات الفئة success" },
                    { value: ".warning", description: "يختار جميع العناصر ذات الفئة warning" },
                    { value: ".info", description: "يختار جميع العناصر ذات الفئة info" },
                    { value: ".primary", description: "يختار جميع العناصر ذات الفئة primary" },
                    { value: ".secondary", description: "يختار جميع العناصر ذات الفئة secondary" },
                    { value: ".dark", description: "يختار جميع العناصر ذات الفئة dark" },
                    { value: ".light", description: "يختار جميع العناصر ذات الفئة light" },
                    { value: ".large", description: "يختار جميع العناصر ذات الفئة large" },
                    { value: ".small", description: "يختار جميع العناصر ذات الفئة small" }
                ]
            },
            {
                name: "محدد المعرف (ID Selector)",
                description: "يحدد عنصراً واحداً يحمل معرفاً معيناً (باستخدام # قبل اسم المعرف)",
                values: [
                    { value: "#header", description: "يختار العنصر ذا المعرف header" },
                    { value: "#main", description: "يختار العنصر ذا المعرف main" },
                    { value: "#footer", description: "يختار العنصر ذا المعرف footer" },
                    { value: "#sidebar", description: "يختار العنصر ذا المعرف sidebar" },
                    { value: "#logo", description: "يختار العنصر ذا المعرف logo" },
                    { value: "#navigation", description: "يختار العنصر ذا المعرف navigation" },
                    { value: "#content", description: "يختار العنصر ذا المعرف content" },
                    { value: "#hero", description: "يختار العنصر ذا المعرف hero" },
                    { value: "#about", description: "يختار العنصر ذا المعرف about" },
                    { value: "#contact", description: "يختار العنصر ذا المعرف contact" }
                ]
            },
            {
                name: "المحدد العالمي (Universal Selector)",
                description: "يحدد جميع العناصر في الصفحة (باستخدام *)",
                values: [
                    { value: "*", description: "يختار جميع العناصر في الصفحة" },
                    { value: "* *", description: "يختار جميع العناصر الأحفاد (أبناء الأبناء)" },
                    { value: "div *", description: "يختار جميع العناصر داخل div" },
                    { value: "*.active", description: "يختار جميع العناصر ذات الفئة active (نفس .active)" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. المحددات المركبة (Combinators)
    // ============================================================
    {
        tag: "combinators",
        description: "المحددات المركبة تستخدم للجمع بين محددين أو أكثر لاختيار عناصر بناءً على العلاقة بينها",
        properties: [
            {
                name: "المحدد السليل (Descendant Combinator)",
                description: "يختار العناصر التي هي أحفاد (أبناء أو أحفاد) لعنصر آخر (مسافة بين المحددين)",
                values: [
                    { value: "div p", description: "يختار جميع عناصر p داخل div (أي عمق)" },
                    { value: ".container span", description: "يختار جميع عناصر span داخل .container" },
                    { value: "ul li", description: "يختار جميع عناصر li داخل ul" },
                    { value: "article p", description: "يختار جميع عناصر p داخل article" },
                    { value: ".nav a", description: "يختار جميع عناصر a داخل .nav" },
                    { value: "#main .content", description: "يختار جميع عناصر .content داخل #main" },
                    { value: "section article", description: "يختار جميع عناصر article داخل section" },
                    { value: "form input", description: "يختار جميع عناصر input داخل form" }
                ]
            },
            {
                name: "المحدد الابن المباشر (Child Combinator)",
                description: "يختار العناصر التي هي أبناء مباشرين لعنصر آخر (باستخدام >)",
                values: [
                    { value: "div > p", description: "يختار عناصر p التي هي أبناء مباشرين لـ div" },
                    { value: ".container > .item", description: "يختار .item التي هي أبناء مباشرين لـ .container" },
                    { value: "ul > li", description: "يختار عناصر li التي هي أبناء مباشرين لـ ul" },
                    { value: "nav > a", description: "يختار عناصر a التي هي أبناء مباشرين لـ nav" },
                    { value: "header > h1", description: "يختار h1 التي هي أبناء مباشرين لـ header" },
                    { value: "section > article", description: "يختار article التي هي أبناء مباشرين لـ section" },
                    { value: "form > input", description: "يختار input التي هي أبناء مباشرين لـ form" },
                    { value: ".card > .card-header", description: "يختار .card-header التي هي أبناء مباشرين لـ .card" }
                ]
            },
            {
                name: "المحدد الأخ التالي (Adjacent Sibling Combinator)",
                description: "يختار العنصر الذي يلي عنصراً آخر مباشرة في نفس المستوى (باستخدام +)",
                values: [
                    { value: "h1 + p", description: "يختار عنصر p الذي يلي h1 مباشرة" },
                    { value: "h2 + .description", description: "يختار .description الذي يلي h2 مباشرة" },
                    { value: "label + input", description: "يختار input الذي يلي label مباشرة" },
                    { value: ".item + .item", description: "يختار .item الذي يلي .item مباشرة" },
                    { value: "li + li", description: "يختار li الذي يلي li مباشرة (جميع li ما عدا الأول)" },
                    { value: "p + p", description: "يختار p الذي يلي p مباشرة" }
                ]
            },
            {
                name: "المحدد الأخ التالي العام (General Sibling Combinator)",
                description: "يختار العناصر التي تلي عنصراً آخر في نفس المستوى (جميع الأخوة التاليين) (باستخدام ~)",
                values: [
                    { value: "h1 ~ p", description: "يختار جميع عناصر p التي تلي h1" },
                    { value: ".active ~ .item", description: "يختار جميع .item التي تلي .active" },
                    { value: "h2 ~ .content", description: "يختار جميع .content التي تلي h2" },
                    { value: "li ~ li", description: "يختار جميع li التي تلي li الأولى" }
                ]
            },
            {
                name: "المحدد المركب (Compound Selector)",
                description: "يجمع بين عدة محددات على نفس العنصر (بدون مسافات)",
                values: [
                    { value: "div.container", description: "يختار div مع الفئة container" },
                    { value: "p.active", description: "يختار p مع الفئة active" },
                    { value: "a[href]", description: "يختار a مع سمة href" },
                    { value: "input[type=\"text\"]", description: "يختار input من نوع text" },
                    { value: "button.primary", description: "يختار button مع الفئة primary" },
                    { value: "div#header", description: "يختار div مع المعرف header" },
                    { value: "a.btn.primary", description: "يختار a مع الفئتين btn و primary" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. محددات السمات (Attribute Selectors)
    // ============================================================
    {
        tag: "attribute-selectors",
        description: "تحدد العناصر بناءً على وجود سمات معينة أو قيمها",
        properties: [
            {
                name: "[attr]",
                description: "يختار العناصر التي تحمل سمة معينة (بغض النظر عن قيمتها)",
                values: [
                    { value: "[href]", description: "يختار جميع العناصر ذات سمة href" },
                    { value: "[type]", description: "يختار جميع العناصر ذات سمة type" },
                    { value: "[data-*]", description: "يختار جميع العناصر ذات سمة data مخصصة" },
                    { value: "[disabled]", description: "يختار جميع العناصر ذات سمة disabled" },
                    { value: "[checked]", description: "يختار جميع العناصر ذات سمة checked" },
                    { value: "[required]", description: "يختار جميع العناصر ذات سمة required" },
                    { value: "[placeholder]", description: "يختار جميع العناصر ذات سمة placeholder" },
                    { value: "[readonly]", description: "يختار جميع العناصر ذات سمة readonly" }
                ]
            },
            {
                name: "[attr=\"value\"]",
                description: "يختار العناصر التي تساوي قيمة السمة قيمة محددة تماماً",
                values: [
                    { value: "[type=\"text\"]", description: "يختار عناصر input من نوع text" },
                    { value: "[type=\"submit\"]", description: "يختار عناصر input من نوع submit" },
                    { value: "[href=\"https://example.com\"]", description: "يختار روابط معينة" },
                    { value: "[data-status=\"active\"]", description: "يختار عناصر ذات data-status = active" },
                    { value: "[role=\"button\"]", description: "يختار عناصر ذات دور button" },
                    { value: "[lang=\"ar\"]", description: "يختار عناصر لغتها العربية" }
                ]
            },
            {
                name: "[attr~=\"value\"]",
                description: "يختار العناصر التي تحتوي قيمتها على كلمة محددة (مفصولة بمسافات)",
                values: [
                    { value: "[class~=\"btn\"]", description: "يختار عناصر ذات فئة btn" },
                    { value: "[data-tags~=\"important\"]", description: "يختار عناصر ذات علامة important" },
                    { value: "[rel~=\"nofollow\"]", description: "يختار روابط ذات nofollow" }
                ]
            },
            {
                name: "[attr|=\"value\"]",
                description: "يختار العناصر التي تبدأ قيمتها بقيمة محددة تليها شرطة (-)",
                values: [
                    { value: "[lang|=\"en\"]", description: "يختار en, en-US, en-GB" },
                    { value: "[data-lang|=\"ar\"]", description: "يختار ar, ar-SA" },
                    { value: "[hreflang|=\"fr\"]", description: "يختار fr, fr-CA" }
                ]
            },
            {
                name: "[attr^=\"value\"]",
                description: "يختار العناصر التي تبدأ قيمتها بقيمة محددة",
                values: [
                    { value: "[href^=\"https://\"]", description: "يختار الروابط الآمنة (HTTPS)" },
                    { value: "[href^=\"mailto:\"]", description: "يختار روابط البريد الإلكتروني" },
                    { value: "[class^=\"col-\"]", description: "يختار فئات تبدأ بـ col-" },
                    { value: "[data-id^=\"user-\"]", description: "يختار عناصر تبدأ بـ user-" }
                ]
            },
            {
                name: "[attr$=\"value\"]",
                description: "يختار العناصر التي تنتهي قيمتها بقيمة محددة",
                values: [
                    { value: "[href$=\".pdf\"]", description: "يختار روابط ملفات PDF" },
                    { value: "[href$=\".jpg\"]", description: "يختار روابط صور JPG" },
                    { value: "[src$=\".png\"]", description: "يختار صور PNG" },
                    { value: "[class$=\"-active\"]", description: "يختار فئات تنتهي بـ -active" },
                    { value: "[href$=\".html\"]", description: "يختار روابط صفحات HTML" }
                ]
            },
            {
                name: "[attr*=\"value\"]",
                description: "يختار العناصر التي تحتوي قيمتها على قيمة محددة (في أي مكان)",
                values: [
                    { value: "[href*=\"google\"]", description: "يختار روابط تحتوي على google" },
                    { value: "[class*=\"btn-\"]", description: "يختار فئات تحتوي على btn-" },
                    { value: "[src*=\"images/\"]", description: "يختار صور في مجلد images" },
                    { value: "[data-user*=\"admin\"]", description: "يختار عناصر تحتوي على admin" }
                ]
            },
            {
                name: "[attr i]",
                description: "يضيف i لجعل المقارنة غير حساسة لحالة الأحرف (Case-insensitive)",
                values: [
                    { value: "[href^=\"https://\" i]", description: "روابط HTTPS (بغض النظر عن حالة الأحرف)" },
                    { value: "[type*=\"text\" i]", description: "أنواع تحتوي على text (بغض النظر عن الحالة)" }
                ]
            },
            {
                name: "[attr s]",
                description: "يضيف s لجعل المقارنة حساسة لحالة الأحرف (Case-sensitive) - أقل استخداماً لأن المقارنة حساسة للحالة افتراضياً في معظم المتصفحات الحديثة",
                values: [
                    { value: "[class*=\"Btn\" s]", description: "فئات تحتوي على Btn (حساسة للحالة)" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. محددات المجموعة (Group Selectors)
    // ============================================================
    {
        tag: "group-selectors",
        description: "تسمح بتطبيق نفس الأنماط على عدة محددات مختلفة في نفس القاعدة",
        properties: [
            {
                name: "المحدد المجموع (Group Selector)",
                description: "يفصل بين المحددات بفاصلة لتطبيق نفس الأنماط على جميع المحددات المذكورة في قاعدة CSS واحدة",
                values: [
                    { value: "h1, h2, h3", description: "يطبق الأنماط على جميع العناوين h1, h2, h3" },
                    { value: "p, li, .description", description: "يطبق على الفقرات وعناصر القائمة والفئة description" },
                    { value: "div, section, article", description: "يطبق على div و section و article" },
                    { value: ".btn, .button, input[type=\"submit\"]", description: "يطبق على جميع الأزرار" },
                    { value: "header, main, footer", description: "يطبق على رأس ومحتوى وتذييل الصفحة" },
                    { value: ".active, .selected, [aria-selected=\"true\"]", description: "يطبق على العناصر النشطة" },
                    { value: "input[type=\"text\"], input[type=\"email\"], input[type=\"password\"]", description: "يطبق على حقول الإدخال النصية" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. أمثلة عملية
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية لاستخدام المحددات المختلفة",
        properties: [
            {
                name: "مثال 1 - تصميم روابط",
                description: "تخصيص الروابط حسب السمة",
                values: [
                    { value: "a[href^=\"https://\"] { color: green; } a[href$=\".pdf\"]::after { content: \" ??\"; } a[href*=\"twitter\"] { color: #1DA1F2; }", description: "روابط HTTPS باللون الأخضر، روابط PDF مع أيقونة، روابط تويتر باللون الأزرق" }
                ]
            },
            {
                name: "مثال 2 - تنسيق الجداول",
                description: "تحديد صفوف الجدول باستخدام المحددات المركبة",
                values: [
                    { value: "table tr:nth-child(even) { background: #f9f9f9; } table tr:hover { background: #f0f0f0; } table td:first-child { font-weight: bold; }", description: "تظليل الصفوف الزوجية والتمرير" }
                ]
            },
            {
                name: "مثال 3 - نموذج الإدخال",
                description: "تنسيق حقول النموذج حسب النوع والحالة",
                values: [
                    { value: "input[type=\"text\"]:focus { border-color: #007bff; outline: none; } input[type=\"checkbox\"]:checked + label { color: green; } input:disabled { opacity: 0.6; }", description: "تنسيق حقول النص عند التركيز، مربعات الاختيار المحددة، الحقول المعطلة" }
                ]
            },
            {
                name: "مثال 4 - تنسيق القوائم",
                description: "تحديد عناصر القائمة باستخدام المحددات المركبة",
                values: [
                    { value: "ul.nav > li { display: inline-block; } ul.nav > li + li { margin-left: 16px; } ul.nav > li:last-child { margin-right: 0; }", description: "قائمة تنقل مع تباعد بين العناصر" }
                ]
            },
            {
                name: "مثال 5 - تخصيص العناوين",
                description: "تحديد العناوين حسب المستوى والموقع",
                values: [
                    { value: "article h1:first-child { font-size: 2.5rem; } article h2:not(:first-child) { margin-top: 2rem; } section > h2 { border-bottom: 2px solid #eee; }", description: "تنسيق العناوين حسب الموقع" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام المحددات بشكل فعال",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء المحددات",
                values: [
                    { value: "تجنب المحددات العميقة جداً", description: "مثل div > ul > li > a - بطيئة" },
                    { value: "استخدم الفئات بدلاً من المحددات المعقدة", description: ".nav-link أسرع من nav ul li a" },
                    { value: "تجنب المحدد العالمي (*)", description: "بطيء في الصفحات الكبيرة" },
                    { value: "استخدم الفئات بشكل أساسي", description: "الفئات هي الأكثر كفاءة في الأداء" },
                    { value: "حدد المحددات بالجانب الأيمن (الأكثر تحديداً)", description: "ul li.active أفضل من .active li" }
                ]
            },
            {
                name: "نصائح الصيانة",
                description: "نصائح لجعل الكود قابلاً للصيانة",
                values: [
                    { value: "استخدم أسماء وصفية للفئات", description: ".header-nav أفضل من .nav1" },
                    { value: "تجنب المحددات الزائدة", description: "div.container أفضل من div.outer div.inner div.container" },
                    { value: "استخدم المحددات المركبة بحكمة", description: "لتجنب التعارضات" },
                    { value: "وثق المحددات المعقدة", description: "أضف تعليقات للفهم" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام المحددات",
                values: [
                    { value: "نسيان الفاصلة بين المحددات", description: "h1 h2 (خاطئ) vs h1, h2 (صحيح)" },
                    { value: "خلط بين > و (مسافة)", description: "div > p (ابن مباشر) vs div p (أي سليل)" },
                    { value: "استخدام #id بشكل مفرط", description: "استخدم الفئات بدلاً من المعرفات للأنماط المتكررة" },
                    { value: "محددات ذات خصوصية عالية جداً", description: "صعبة التجاوز لاحقاً" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssSelectorsData = cssSelectorsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssSelectorsData;
}