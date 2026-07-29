// ============================================================
// global-attributes-data.js
// السمات العامة (Global Attributes) — تُدمج تلقائياً مع خصائص كل عنصر
// أي عنصر HTML تقريباً يقبل هذه السمات بغض النظر عن نوعه
// ============================================================

const globalAttributesData = [
    {
        name: "id",
        description: "يعطي العنصر معرّفاً فريداً في كامل الصفحة، يُستخدم للربط معه من CSS أو JavaScript أو كوجهة رابط داخلي (#id)",
        values: [
            { value: "main-header", description: "معرف الترويسة الرئيسية" },
            { value: "content-wrapper", description: "معرف غلاف المحتوى" },
            { value: "submit-btn", description: "معرف زر الإرسال" },
            { value: "nav-menu", description: "معرف قائمة التنقل" },
            { value: "footer-section", description: "معرف قسم التذييل" },
            { value: "hero-image", description: "معرف الصورة الرئيسية" },
            { value: "contact-form", description: "معرف نموذج الاتصال" }
        ],
        freeInput: true
    },
    {
        name: "class",
        description: "يربط العنصر بواحد أو أكثر من أصناف CSS لتنسيقه، يمكن وضع عدة أصناف مفصولة بمسافة",
        values: [
            { value: "container", description: "فئة الحاوية" },
            { value: "row", description: "فئة الصف" },
            { value: "col", description: "فئة العمود" },
            { value: "flex", description: "فئة التنسيق المرن" },
            { value: "grid", description: "فئة التنسيق الشبكي" },
            { value: "card", description: "فئة البطاقة" },
            { value: "btn", description: "فئة الزر" },
            { value: "btn-primary", description: "فئة الزر الأساسي" },
            { value: "btn-secondary", description: "فئة الزر الثانوي" },
            { value: "text-center", description: "فئة توسيط النص" },
            { value: "text-right", description: "فئة محاذاة النص لليمين" },
            { value: "text-left", description: "فئة محاذاة النص لليسار" },
            { value: "hidden", description: "فئة الإخفاء" },
            { value: "visible", description: "فئة الإظهار" },
            { value: "active", description: "فئة الحالة النشطة" },
            { value: "disabled", description: "فئة الحالة المعطلة" },
            { value: "error", description: "فئة حالة الخطأ" },
            { value: "success", description: "فئة حالة النجاح" },
            { value: "warning", description: "فئة حالة التحذير" },
            { value: "info", description: "فئة حالة المعلومات" },
            { value: "dark", description: "فئة النمط الداكن" },
            { value: "light", description: "فئة النمط الفاتح" },
            { value: "navbar", description: "فئة شريط التنقل" },
            { value: "dropdown", description: "فئة القائمة المنسدلة" },
            { value: "modal", description: "فئة النافذة المنبثقة" },
            { value: "tooltip", description: "فئة التلميح" },
            { value: "alert", description: "فئة التنبيه" },
            { value: "badge", description: "فئة الشارة" },
            { value: "icon", description: "فئة الأيقونة" },
            { value: "avatar", description: "فئة الصورة الرمزية" }
        ],
        freeInput: true
    },
    {
        name: "style",
        description: "يطبّق تنسيق CSS مباشرة على هذا العنصر فقط دون الحاجة لملف أو وسم style منفصل",
        values: [
            { value: "color: red;", description: "لون النص أحمر" },
            { value: "color: #333;", description: "لون النص رمادي غامق" },
            { value: "background-color: #f0f0f0;", description: "خلفية رمادية فاتحة" },
            { value: "background-color: #3498db;", description: "خلفية زرقاء" },
            { value: "font-size: 16px;", description: "حجم الخط 16 بكسل" },
            { value: "font-weight: bold;", description: "خط عريض" },
            { value: "text-align: center;", description: "توسيط النص" },
            { value: "padding: 10px;", description: "حشوة داخلية 10 بكسل" },
            { value: "margin: 10px;", description: "هامش خارجي 10 بكسل" },
            { value: "border: 1px solid #ccc;", description: "إطار رمادي سمك 1 بكسل" },
            { value: "border-radius: 5px;", description: "زوايا مدورة 5 بكسل" },
            { value: "display: flex;", description: "عرض مرن" },
            { value: "display: none;", description: "إخفاء العنصر" },
            { value: "width: 100%;", description: "عرض كامل" },
            { value: "height: 100%;", description: "ارتفاع كامل" },
            { value: "max-width: 600px;", description: "أقصى عرض 600 بكسل" },
            { value: "opacity: 0.5;", description: "شفافية 50%" }
        ],
        freeInput: true
    },
    {
        name: "title",
        description: "نص إضافي يظهر كتلميح (tooltip) عند تمرير الماوس فوق العنصر، يفيد أيضاً في الشرح لقارئ الشاشة",
        values: [
            { value: "اضغط هنا للمزيد من المعلومات", description: "تلميح لزر" },
            { value: "رابط الصفحة الرئيسية", description: "تلميح لرابط" },
            { value: "صورة المنتج رقم 1", description: "تلميح لصورة" },
            { value: "حقل مطلوب", description: "تلميح لحقل نموذج" },
            { value: "اختر تاريخاً", description: "تلميح لحقل تاريخ" },
            { value: "انقر مرتين لتعديل النص", description: "تلميح لنص قابل للتحرير" }
        ],
        freeInput: true
    },
    {
        name: "lang",
        description: "يحدد لغة محتوى هذا العنصر تحديداً (قد تختلف عن لغة الصفحة)، يساعد قارئ الشاشة والمتصفح على النطق والترجمة الصحيحة",
        values: [
            { value: "ar", description: "العربية" },
            { value: "ar-SA", description: "العربية - السعودية" },
            { value: "ar-EG", description: "العربية - مصر" },
            { value: "en", description: "الإنجليزية" },
            { value: "en-US", description: "الإنجليزية - الولايات المتحدة" },
            { value: "en-GB", description: "الإنجليزية - المملكة المتحدة" },
            { value: "fr", description: "الفرنسية" },
            { value: "fr-FR", description: "الفرنسية - فرنسا" },
            { value: "es", description: "الإسبانية" },
            { value: "es-ES", description: "الإسبانية - إسبانيا" },
            { value: "de", description: "الألمانية" },
            { value: "de-DE", description: "الألمانية - ألمانيا" },
            { value: "it", description: "الإيطالية" },
            { value: "it-IT", description: "الإيطالية - إيطاليا" },
            { value: "pt", description: "البرتغالية" },
            { value: "pt-BR", description: "البرتغالية - البرازيل" },
            { value: "ru", description: "الروسية" },
            { value: "ru-RU", description: "الروسية - روسيا" },
            { value: "ja", description: "اليابانية" },
            { value: "ja-JP", description: "اليابانية - اليابان" },
            { value: "zh", description: "الصينية" },
            { value: "zh-CN", description: "الصينية - الصين" },
            { value: "zh-TW", description: "الصينية - تايوان" },
            { value: "ko", description: "الكورية" },
            { value: "ko-KR", description: "الكورية - كوريا" },
            { value: "hi", description: "الهندية" },
            { value: "hi-IN", description: "الهندية - الهند" },
            { value: "tr", description: "التركية" },
            { value: "tr-TR", description: "التركية - تركيا" },
            { value: "fa", description: "الفارسية" },
            { value: "fa-IR", description: "الفارسية - إيران" },
            { value: "ur", description: "الأردية" },
            { value: "ur-PK", description: "الأردية - باكستان" },
            { value: "he", description: "العبرية" },
            { value: "he-IL", description: "العبرية - إسرائيل" },
            { value: "bn", description: "البنغالية" },
            { value: "bn-BD", description: "البنغالية - بنغلاديش" }
        ],
        freeInput: true
    },
    {
        name: "dir",
        description: "يحدد اتجاه النص داخل هذا العنصر، من اليمين لليسار أو العكس، بغض النظر عن اتجاه الصفحة العام",
        values: [
            { value: "rtl", description: "من اليمين إلى اليسار (العربية، الفارسية، العبرية...)" },
            { value: "ltr", description: "من اليسار إلى اليمين (الإنجليزية، الفرنسية، الألمانية...)" },
            { value: "auto", description: "يترك المتصفح يحدد الاتجاه تلقائياً حسب محتوى النص" }
        ]
    },
    {
        name: "tabindex",
        description: "يحدد ترتيب العنصر عند التنقل بمفتاح Tab، أو يجعله قابلاً للتركيز عليه إن لم يكن كذلك أصلاً",
        values: [
            { value: "0", description: "قابل للتركيز، بترتيب طبيعي حسب مكانه في المستند" },
            { value: "-1", description: "قابل للتركيز برمجياً فقط (عبر JavaScript) وليس بـ Tab" },
            { value: "1", description: "يُركَّز عليه أولاً عند الضغط على Tab" },
            { value: "2", description: "يُركَّز عليه ثانياً عند الضغط على Tab" },
            { value: "3", description: "يُركَّز عليه ثالثاً عند الضغط على Tab" },
            { value: "10", description: "يُركَّز بعد جميع العناصر ذات الأرقام الأقل" },
            { value: "999", description: "يُركَّز في النهاية" }
        ],
        freeInput: true
    },
    {
        name: "hidden",
        description: "يخفي العنصر بالكامل من العرض (كأنه غير موجود في الصفحة)، بديل سريع لعرض: none في CSS",
        values: [
            { value: "", description: "يخفي العنصر (يكتب بدون قيمة)" },
            { value: "until-found", description: "يخفي العنصر لكنه يصبح مرئياً إذا بحث عنه المستخدم (ميزة حديثة)" }
        ],
        isBoolean: true
    },
    {
        name: "draggable",
        description: "يحدد إن كان يمكن سحب العنصر بالماوس (خاصية Drag and Drop)",
        values: [
            { value: "true", description: "يسمح بسحب العنصر" },
            { value: "false", description: "يمنع سحب العنصر" }
        ]
    },
    {
        name: "contenteditable",
        description: "يجعل محتوى العنصر قابلاً للتحرير مباشرة من قبل المستخدم داخل المتصفح، مثل محرر نصوص مصغّر",
        values: [
            { value: "true", description: "يسمح بتحرير المحتوى" },
            { value: "false", description: "يمنع التحرير" },
            { value: "plaintext-only", description: "يسمح بالتحرير كنص عادي فقط دون تنسيقات" }
        ]
    },
    {
        name: "spellcheck",
        description: "يحدد إن كان المتصفح يفحص الأخطاء الإملائية في نص هذا العنصر (يظهر خط أحمر متعرج تحت الأخطاء)",
        values: [
            { value: "true", description: "يفعّل التدقيق الإملائي" },
            { value: "false", description: "يلغي التدقيق الإملائي" }
        ]
    },
    {
        name: "translate",
        description: "يخبر أدوات الترجمة الآلية (مثل ترجمة جوجل) إن كان يجب ترجمة محتوى هذا العنصر أم تركه كما هو (مثل أسماء العلامات التجارية)",
        values: [
            { value: "yes", description: "يسمح بترجمة المحتوى" },
            { value: "no", description: "يمنع ترجمة المحتوى (أسماء أعلام، أكواد، مصطلحات تقنية...)" }
        ]
    },
    {
        name: "accesskey",
        description: "يحدد اختصار لوحة مفاتيح (حرفاً واحداً) للوصول السريع إلى هذا العنصر أو تفعيله (عادة مع Alt أو Alt+Shift حسب المتصفح)",
        values: [
            { value: "a", description: "اختصار بالحرف A" },
            { value: "b", description: "اختصار بالحرف B" },
            { value: "c", description: "اختصار بالحرف C" },
            { value: "s", description: "اختصار بالحرف S (مثل Save)" },
            { value: "h", description: "اختصار بالحرف H (مثل Home)" },
            { value: "1", description: "اختصار بالرقم 1" },
            { value: "9", description: "اختصار بالرقم 9" }
        ],
        freeInput: true
    },
    {
        name: "data-*",
        description: "سمة مخصّصة لتخزين بيانات إضافية داخل العنصر نفسه لاستخدامها لاحقاً في JavaScript، يمكن تسمية الجزء بعد data- بأي اسم مثل data-id أو data-status",
        values: [
            { value: "data-id=\"123\"", description: "تخزين معرف رقمي" },
            { value: "data-name=\"product\"", description: "تخزين اسم" },
            { value: "data-price=\"29.99\"", description: "تخزين سعر" },
            { value: "data-status=\"active\"", description: "تخزين حالة" },
            { value: "data-user-id=\"456\"", description: "تخزين معرف مستخدم" },
            { value: "data-product-id=\"789\"", description: "تخزين معرف منتج" },
            { value: "data-category=\"electronics\"", description: "تخزين تصنيف" },
            { value: "data-timestamp=\"2026-07-28\"", description: "تخزين تاريخ" },
            { value: "data-color=\"#ff0000\"", description: "تخزين لون" },
            { value: "data-size=\"large\"", description: "تخزين حجم" },
            { value: "data-role=\"admin\"", description: "تخزين دور المستخدم" }
        ],
        freeInput: true
    },
    {
        name: "role",
        description: "يحدد الدور الوظيفي أو الدلالي للعنصر لقارئات الشاشة (ARIA)، مفيد خاصة عند استخدام عناصر عامة مثل div بدل عناصر HTML الدلالية",
        values: [
            { value: "button", description: "يُعامل العنصر كزر" },
            { value: "link", description: "يُعامل العنصر كرابط" },
            { value: "navigation", description: "يُعامل العنصر كقسم تنقل" },
            { value: "banner", description: "يُعامل العنصر كترويسة رئيسية للصفحة" },
            { value: "main", description: "يُعامل العنصر كمحتوى رئيسي" },
            { value: "complementary", description: "يُعامل العنصر كمحتوى مكمل (جانبي)" },
            { value: "contentinfo", description: "يُعامل العنصر كمعلومات تذييل" },
            { value: "alert", description: "يُعامل العنصر كتنبيه يُعلن فوراً لقارئ الشاشة" },
            { value: "dialog", description: "يُعامل العنصر كنافذة حوار" },
            { value: "presentation", description: "يخبر قارئ الشاشة بتجاهل الدلالة الافتراضية للعنصر تماماً" },
            { value: "none", description: "مرادف لـ presentation" },
            { value: "list", description: "يُعامل العنصر كقائمة" },
            { value: "listitem", description: "يُعامل العنصر كعنصر في قائمة" },
            { value: "tab", description: "يُعامل العنصر كعلامة تبويب" },
            { value: "tabpanel", description: "يُعامل العنصر كلوحة تبويب" },
            { value: "tablist", description: "يُعامل العنصر كقائمة تبويبات" },
            { value: "menu", description: "يُعامل العنصر كقائمة منسدلة" },
            { value: "menuitem", description: "يُعامل العنصر كعنصر في قائمة منسدلة" },
            { value: "progressbar", description: "يُعامل العنصر كشريط تقدم" },
            { value: "slider", description: "يُعامل العنصر كمنزلق" },
            { value: "checkbox", description: "يُعامل العنصر كمربع اختيار" },
            { value: "radio", description: "يُعامل العنصر كزر راديو" },
            { value: "textbox", description: "يُعامل العنصر كمربع نص" },
            { value: "searchbox", description: "يُعامل العنصر كمربع بحث" },
            { value: "combobox", description: "يُعامل العنصر كمربع تحرير وسرد" },
            { value: "listbox", description: "يُعامل العنصر كمربع قائمة" },
            { value: "tree", description: "يُعامل العنصر كشجرة" },
            { value: "treeitem", description: "يُعامل العنصر كعنصر في شجرة" },
            { value: "grid", description: "يُعامل العنصر كشبكة" },
            { value: "gridcell", description: "يُعامل العنصر كخلية في شبكة" },
            { value: "row", description: "يُعامل العنصر كصف" },
            { value: "columnheader", description: "يُعامل العنصر كرأس عمود" },
            { value: "rowheader", description: "يُعامل العنصر كرأس صف" },
            { value: "tooltip", description: "يُعامل العنصر كتلميح" },
            { value: "figure", description: "يُعامل العنصر كشكل توضيحي" },
            { value: "img", description: "يُعامل العنصر كصورة" },
            { value: "heading", description: "يُعامل العنصر كعنوان" },
            { value: "form", description: "يُعامل العنصر كاستمارة" },
            { value: "search", description: "يُعامل العنصر كمنطقة بحث" },
            { value: "separator", description: "يُعامل العنصر كفاصل" }
        ],
        freeInput: true
    },
    {
        name: "aria-label",
        description: "يعطي العنصر تسمية نصية يقرأها قارئ الشاشة، تُستخدم عندما لا يوجد نص مرئي واضح يشرح وظيفة العنصر (مثل زر أيقونة فقط)",
        values: [
            { value: "إغلاق النافذة", description: "تسمية لزر إغلاق" },
            { value: "البحث في الموقع", description: "تسمية لزر بحث" },
            { value: "القائمة الرئيسية", description: "تسمية لقائمة التنقل" },
            { value: "تسجيل الدخول", description: "تسمية لزر تسجيل الدخول" },
            { value: "تسجيل الخروج", description: "تسمية لزر تسجيل الخروج" },
            { value: "إضافة إلى السلة", description: "تسمية لزر الإضافة للسلة" },
            { value: "مشاركة على فيسبوك", description: "تسمية لزر المشاركة" },
            { value: "طباعة الصفحة", description: "تسمية لزر الطباعة" },
            { value: "تحميل الملف", description: "تسمية لزر التحميل" },
            { value: "تأكيد العملية", description: "تسمية لزر التأكيد" },
            { value: "إلغاء العملية", description: "تسمية لزر الإلغاء" }
        ],
        freeInput: true
    },
    {
        name: "aria-hidden",
        description: "يخفي العنصر عن قارئات الشاشة فقط مع بقائه مرئياً بصرياً، يفيد لإخفاء عناصر زخرفية بحتة مثل الأيقونات",
        values: [
            { value: "true", description: "يخفي العنصر عن قارئ الشاشة" },
            { value: "false", description: "يبقيه ظاهراً لقارئ الشاشة" }
        ]
    },
    {
        name: "aria-live",
        description: "يخبر قارئ الشاشة بمراقبة هذا العنصر وإعلان أي تغيير يطرأ على محتواه تلقائياً دون الحاجة لإعادة تركيز المستخدم عليه",
        values: [
            { value: "polite", description: "يعلن التغيير بعد انتهاء ما يقرأه قارئ الشاشة حالياً" },
            { value: "assertive", description: "يقاطع القراءة الحالية ليعلن التغيير فوراً" },
            { value: "off", description: "لا يعلن أي تغيير" }
        ]
    },
    {
        name: "aria-describedby",
        description: "يربط العنصر بعنصر آخر (عبر معرّفه id) يحتوي على نص وصفي إضافي يقرأه قارئ الشاشة",
        values: [
            { value: "help-text", description: "معرف نص المساعدة" },
            { value: "error-message", description: "معرف رسالة الخطأ" },
            { value: "description-text", description: "معرف النص الوصفي" },
            { value: "tooltip-content", description: "معرف محتوى التلميح" }
        ],
        freeInput: true
    },
    {
        name: "aria-expanded",
        description: "يخبر قارئ الشاشة إن كان عنصر قابل للطي (كقائمة منسدلة أو أكورديون) مفتوحاً حالياً أم مغلقاً",
        values: [
            { value: "true", description: "العنصر مفتوح/موسّع حالياً" },
            { value: "false", description: "العنصر مطوي/مغلق حالياً" }
        ]
    },
    {
        name: "aria-controls",
        description: "يحدد العنصر الذي يتحكم فيه العنصر الحالي (عبر معرف id)، مثل زر يفتح ويغلق قائمة منسدلة",
        values: [
            { value: "dropdown-menu", description: "معرف القائمة المنسدلة" },
            { value: "panel-content", description: "معرف لوحة المحتوى" }
        ],
        freeInput: true
    },
    {
        name: "aria-pressed",
        description: "يخبر قارئ الشاشة إن كان زر ما مضغوطاً (مثل زر تشغيل/إيقاف) أو غير مضغوط",
        values: [
            { value: "true", description: "الزر مضغوط" },
            { value: "false", description: "الزر غير مضغوط" },
            { value: "mixed", description: "حالة مختلطة" }
        ]
    },
    {
        name: "aria-selected",
        description: "يخبر قارئ الشاشة إن كان عنصراً محدداً (مثل خيار في قائمة أو علامة تبويب)",
        values: [
            { value: "true", description: "العنصر محدد" },
            { value: "false", description: "العنصر غير محدد" }
        ]
    },
    {
        name: "aria-checked",
        description: "يخبر قارئ الشاشة بحالة عنصر قابل للتحديد (مثل مربع اختيار أو زر راديو)",
        values: [
            { value: "true", description: "محدد" },
            { value: "false", description: "غير محدد" },
            { value: "mixed", description: "حالة مختلطة" }
        ]
    },
    {
        name: "aria-disabled",
        description: "يخبر قارئ الشاشة بأن العنصر معطل ولا يمكن التفاعل معه، بديل دلالي لخاصية disabled في HTML",
        values: [
            { value: "true", description: "العنصر معطل" },
            { value: "false", description: "العنصر مفعّل" }
        ]
    },
    {
        name: "aria-required",
        description: "يخبر قارئ الشاشة بأن هذا الحقل مطلوب ولا يمكن إرسال النموذج بدونه",
        values: [
            { value: "true", description: "الحقل مطلوب" },
            { value: "false", description: "الحقل اختياري" }
        ]
    },
    {
        name: "aria-invalid",
        description: "يخبر قارئ الشاشة بأن قيمة الحقل غير صالحة (مثل خطأ في البريد الإلكتروني)",
        values: [
            { value: "true", description: "القيمة غير صالحة" },
            { value: "false", description: "القيمة صالحة" }
        ]
    },
    {
        name: "slot",
        description: "يحدد اسم الفتحة (slot) داخل مكوّن ويب (Web Component) التي يجب أن يظهر هذا العنصر داخلها",
        values: [
            { value: "header", description: "فتحة الترويسة" },
            { value: "content", description: "فتحة المحتوى" },
            { value: "footer", description: "فتحة التذييل" },
            { value: "sidebar", description: "فتحة الشريط الجانبي" },
            { value: "main", description: "فتحة المحتوى الرئيسي" }
        ],
        freeInput: true
    },
    {
        name: "inert",
        description: "يعطّل العنصر وكل ما بداخله بالكامل، يمنع التركيز عليه والنقر وقراءته من قارئ الشاشة، يفيد لتعطيل محتوى خلف نافذة حوار مفتوحة",
        values: [
            { value: "", description: "يعطّل العنصر (يكتب بدون قيمة)" }
        ],
        isBoolean: true
    },
    {
        name: "popover",
        description: "يحوّل العنصر إلى نافذة منبثقة (popover) حديثة يمكن إظهارها وإخفاؤها دون JavaScript إضافي أو مكتبات خارجية",
        values: [
            { value: "auto", description: "تُغلق تلقائياً عند النقر خارجها أو فتح popover آخر" },
            { value: "manual", description: "لا تُغلق إلا يدوياً عبر كود أو زر مخصص" }
        ]
    },
    {
        name: "exportparts",
        description: "يسمح بتصدير أجزاء داخلية (parts) من مكوّن ويب لتنسيقها من CSS خارج ذلك المكوّن",
        values: [
            { value: "part1 part2", description: "تصدير أجزاء متعددة" }
        ],
        freeInput: true
    },
    {
        name: "itemscope",
        description: "يبدأ نطاق بيانات مصغّرة (Microdata) جديداً حول هذا العنصر، يُستخدم عادة مع itemtype لمساعدة محركات البحث على فهم المحتوى",
        values: [
            { value: "", description: "يفعّل نطاق البيانات المصغرة (يكتب بدون قيمة)" }
        ],
        isBoolean: true
    },
    {
        name: "itemtype",
        description: "يحدد نوع البيانات المصغّرة لهذا العنصر حسب مفردات schema.org، يُستخدم مع itemscope",
        values: [
            { value: "https://schema.org/Product", description: "منتج" },
            { value: "https://schema.org/Article", description: "مقال" },
            { value: "https://schema.org/Person", description: "شخص" },
            { value: "https://schema.org/Organization", description: "منظمة" },
            { value: "https://schema.org/Event", description: "حدث" },
            { value: "https://schema.org/Recipe", description: "وصفة" },
            { value: "https://schema.org/Review", description: "مراجعة" },
            { value: "https://schema.org/Book", description: "كتاب" },
            { value: "https://schema.org/Movie", description: "فيلم" },
            { value: "https://schema.org/MusicAlbum", description: "ألبوم موسيقي" },
            { value: "https://schema.org/VideoGame", description: "لعبة فيديو" },
            { value: "https://schema.org/Place", description: "مكان" },
            { value: "https://schema.org/Service", description: "خدمة" },
            { value: "https://schema.org/CreativeWork", description: "عمل إبداعي" },
            { value: "https://schema.org/WebPage", description: "صفحة ويب" },
            { value: "https://schema.org/BreadcrumbList", description: "قائمة مسار التنقل" },
            { value: "https://schema.org/FAQPage", description: "صفحة أسئلة شائعة" }
        ],
        freeInput: true
    },
    {
        name: "itemprop",
        description: "يحدد اسم خاصية بيانات مصغّرة لهذا العنصر ضمن نطاق itemscope المحيط به، مثل name أو price أو description",
        values: [
            { value: "name", description: "اسم العنصر" },
            { value: "description", description: "وصف العنصر" },
            { value: "image", description: "صورة العنصر" },
            { value: "price", description: "سعر العنصر" },
            { value: "priceCurrency", description: "عملة السعر" },
            { value: "availability", description: "التوفر" },
            { value: "brand", description: "العلامة التجارية" },
            { value: "author", description: "المؤلف" },
            { value: "datePublished", description: "تاريخ النشر" },
            { value: "dateModified", description: "تاريخ التعديل" },
            { value: "publisher", description: "الناشر" },
            { value: "ratingValue", description: "قيمة التقييم" },
            { value: "reviewCount", description: "عدد المراجعات" },
            { value: "url", description: "الرابط" },
            { value: "telephone", description: "رقم الهاتف" },
            { value: "email", description: "البريد الإلكتروني" },
            { value: "address", description: "العنوان" },
            { value: "streetAddress", description: "عنوان الشارع" },
            { value: "addressLocality", description: "المدينة" },
            { value: "addressRegion", description: "المنطقة" },
            { value: "postalCode", description: "الرمز البريدي" },
            { value: "addressCountry", description: "الدولة" }
        ],
        freeInput: true
    },
    {
        name: "itemref",
        description: "يربط العنصر بخصائص بيانات مصغّرة موجودة في عناصر أخرى (عبر معرفاتها id) خارج نطاق itemscope الحالي",
        values: [
            { value: "prop1 prop2", description: "معرفات خصائص خارجية" }
        ],
        freeInput: true
    },
    {
        name: "part",
        description: "يحدد جزءاً (part) من المكوّن يمكن استهدافه بواسطة CSS من خارج المكوّن باستخدام ::part()",
        values: [
            { value: "header-part", description: "جزء الترويسة" },
            { value: "body-part", description: "جزء الجسم" },
            { value: "footer-part", description: "جزء التذييل" }
        ],
        freeInput: true
    },
    {
        name: "is",
        description: "يحدد أن هذا العنصر هو مكوّن ويب مخصص (Custom Element) ممتد من عنصر HTML أساسي، مثل <button is=\"custom-button\">",
        values: [
            { value: "custom-button", description: "اسم المكوّن المخصص" },
            { value: "custom-input", description: "اسم المكوّن المخصص" }
        ],
        freeInput: true
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.globalAttributesData = globalAttributesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = globalAttributesData;
}