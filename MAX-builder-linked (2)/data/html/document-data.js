// ============================================================
// document-data.js
// عناصر هيكل المستند (الجذر، الرأس، الجسم)
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const documentData = [
    // ============================================================
    // 1. عنصر <!DOCTYPE>
    // ============================================================
    {
        tag: "!DOCTYPE",
        description: "يعلن عن نوع المستند وإصدار HTML المستخدم، يجب أن يكون أول سطر في أي صفحة HTML، يخبر المتصفح بكيفية تفسير وعرض الصفحة بشكل صحيح",
        attributes: [
            {
                name: "html",
                description: "يحدد أن المستند من نوع HTML، وهو الإعلان الوحيد المستخدم في HTML5",
                values: [
                    { value: "html", description: "يعلن أن المستند من نوع HTML5 (الوحيد المستخدم حالياً)" }
                ]
            },
            {
                name: "PUBLIC",
                description: "خاصية قديمة كانت تستخدم في HTML 4.01 و XHTML لتحديد DTD عام، لم تعد مستخدمة في HTML5",
                values: [
                    { value: "-//W3C//DTD HTML 4.01//EN", description: "DTD HTML 4.01 (قديم)" },
                    { value: "-//W3C//DTD XHTML 1.0 Strict//EN", description: "DTD XHTML 1.0 Strict (قديم)" },
                    { value: "-//W3C//DTD XHTML 1.0 Transitional//EN", description: "DTD XHTML 1.0 Transitional (قديم)" }
                ]
            },
            {
                name: "SYSTEM",
                description: "خاصية قديمة كانت تحدد رابط DTD النظامي، لم تعد مستخدمة في HTML5",
                values: [
                    { value: "http://www.w3.org/TR/html4/strict.dtd", description: "رابط DTD HTML 4.01 (قديم)" },
                    { value: "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd", description: "رابط DTD XHTML 1.0 (قديم)" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. عنصر <html>
    // ============================================================
    {
        tag: "html",
        description: "العنصر الجذر لكل صفحة HTML، يحتوي على جميع محتويات الصفحة من بدايتها إلى نهايتها، يعتبر الأب الأعلى لجميع العناصر",
        attributes: [
            {
                name: "lang",
                description: "يحدد اللغة الأساسية لكل محتوى الصفحة، يساعد محركات البحث والمتصفحات وقارئات الشاشة في فهم لغة المحتوى ومعالجته بشكل صحيح",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "ar-SA", description: "العربية - السعودية" },
                    { value: "ar-EG", description: "العربية - مصر" },
                    { value: "en", description: "اللغة الإنجليزية" },
                    { value: "en-US", description: "الإنجليزية - الولايات المتحدة" },
                    { value: "en-GB", description: "الإنجليزية - المملكة المتحدة" },
                    { value: "fr", description: "اللغة الفرنسية" },
                    { value: "fr-FR", description: "الفرنسية - فرنسا" },
                    { value: "es", description: "اللغة الإسبانية" },
                    { value: "es-ES", description: "الإسبانية - إسبانيا" },
                    { value: "de", description: "اللغة الألمانية" },
                    { value: "de-DE", description: "الألمانية - ألمانيا" },
                    { value: "it", description: "اللغة الإيطالية" },
                    { value: "it-IT", description: "الإيطالية - إيطاليا" },
                    { value: "pt", description: "اللغة البرتغالية" },
                    { value: "pt-BR", description: "البرتغالية - البرازيل" },
                    { value: "ru", description: "اللغة الروسية" },
                    { value: "ru-RU", description: "الروسية - روسيا" },
                    { value: "ja", description: "اللغة اليابانية" },
                    { value: "ja-JP", description: "اليابانية - اليابان" },
                    { value: "zh", description: "اللغة الصينية" },
                    { value: "zh-CN", description: "الصينية - الصين" },
                    { value: "zh-TW", description: "الصينية - تايوان" },
                    { value: "ko", description: "اللغة الكورية" },
                    { value: "ko-KR", description: "الكورية - كوريا" },
                    { value: "hi", description: "اللغة الهندية" },
                    { value: "hi-IN", description: "الهندية - الهند" },
                    { value: "tr", description: "اللغة التركية" },
                    { value: "tr-TR", description: "التركية - تركيا" },
                    { value: "fa", description: "اللغة الفارسية" },
                    { value: "fa-IR", description: "الفارسية - إيران" },
                    { value: "ur", description: "اللغة الأردية" },
                    { value: "ur-PK", description: "الأردية - باكستان" },
                    { value: "he", description: "اللغة العبرية" },
                    { value: "he-IL", description: "العبرية - إسرائيل" }
                ],
                freeInput: true
            },
            {
                name: "dir",
                description: "يحدد اتجاه النص الافتراضي في كل الصفحة، إما من اليمين إلى اليسار أو من اليسار إلى اليمين",
                values: [
                    { value: "rtl", description: "من اليمين إلى اليسار (للغة العربية، الفارسية، العبرية)" },
                    { value: "ltr", description: "من اليسار إلى اليمين (للغة الإنجليزية، الفرنسية، الألمانية)" }
                ]
            },
            {
                name: "xmlns",
                description: "يحدد مساحة الأسماء للمستند، ضروري لصفحات XHTML ولكن ليس مطلوباً في HTML5",
                values: [
                    { value: "http://www.w3.org/1999/xhtml", description: "مساحة أسماء XHTML" }
                ]
            },
            {
                name: "manifest",
                description: "كان يربط بملف التطبيق المخبأ (Application Cache) لتشغيل الصفحة دون اتصال، تم إهماله واستُبدل بـ Service Workers",
                values: [
                    { value: "app.manifest", description: "ملف التطبيق المخبأ" },
                    { value: "cache.manifest", description: "ملف التخزين المؤقت" }
                ],
                freeInput: true
            },
            {
                name: "version",
                description: "يحدد إصدار HTML المستخدم، خاصية قديمة جداً لم تعد مستخدمة في HTML5",
                values: [
                    { value: "-//W3C//DTD HTML 4.01//EN", description: "HTML 4.01 (قديم)" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. عنصر <head>
    // ============================================================
    {
        tag: "head",
        description: "يحتوي على البيانات الوصفية للصفحة التي لا تظهر للمستخدم مباشرة، مثل عنوان الصفحة، الترميز، الروابط الخارجية، والأكواد البرمجية، يساعد محركات البحث والمتصفحات في فهم الصفحة",
        attributes: [
            {
                name: "lang",
                description: "يحدد لغة محتوى الرأس، عادة ما تكون نفس لغة الصفحة الرئيسية",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            },
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل الرأس، نادراً ما يحتاج للتحديد لأن المحتوى هنا ليس مرئياً للمستخدم",
                values: [
                    { value: "rtl", description: "من اليمين إلى اليسار" },
                    { value: "ltr", description: "من اليسار إلى اليمين" }
                ]
            },
            {
                name: "profile",
                description: "خاصية قديمة كانت تحدد مسار ملف تعريف بيانات وصفية إضافية، لم تعد مستخدمة في HTML5",
                values: [
                    { value: "http://www.w3.org/2002/06/profile", description: "ملف تعريف قديم" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. عنصر <body>
    // ============================================================
    {
        tag: "body",
        description: "يحتوي على كل المحتوى المرئي للصفحة الذي يراه المستخدم، مثل النصوص، الصور، الروابط، النماذج، الفيديوهات، وجميع العناصر التفاعلية",
        attributes: [
            // -------- السمات القديمة (المهجورة) --------
            {
                name: "bgcolor",
                description: "?? خاصية قديمة كانت تحدد لون خلفية الصفحة بأكملها، استُبدلت بخاصية background-color في CSS على عنصر body",
                values: [
                    { value: "#ffffff", description: "خلفية بيضاء" },
                    { value: "#000000", description: "خلفية سوداء" },
                    { value: "#f0f0f0", description: "خلفية رمادية فاتحة" },
                    { value: "#ffffff", description: "خلفية بيضاء" },
                    { value: "#333333", description: "خلفية رمادية داكنة" },
                    { value: "#ff0000", description: "خلفية حمراء" },
                    { value: "#00ff00", description: "خلفية خضراء" },
                    { value: "#0000ff", description: "خلفية زرقاء" },
                    { value: "#ffff00", description: "خلفية صفراء" },
                    { value: "#ff00ff", description: "خلفية وردية" },
                    { value: "#00ffff", description: "خلفية سماوية" },
                    { value: "#cccccc", description: "خلفية رمادية" },
                    { value: "#999999", description: "خلفية رمادية متوسطة" },
                    { value: "#666666", description: "خلفية رمادية داكنة" },
                    { value: "#ffebcd", description: "خلفية بيج" },
                    { value: "#f5f5dc", description: "خلفية بيج فاتح" },
                    { value: "#fff8dc", description: "خلفية كريمية" },
                    { value: "#faf0e6", description: "خلفية عاجية" },
                    { value: "#fdf5e6", description: "خلفية قشدية" },
                    { value: "#ffffe0", description: "خلفية صفراء فاتحة جداً" },
                    { value: "red", description: "خلفية حمراء" },
                    { value: "green", description: "خلفية خضراء" },
                    { value: "blue", description: "خلفية زرقاء" },
                    { value: "yellow", description: "خلفية صفراء" },
                    { value: "white", description: "خلفية بيضاء" },
                    { value: "black", description: "خلفية سوداء" },
                    { value: "gray", description: "خلفية رمادية" },
                    { value: "purple", description: "خلفية بنفسجية" },
                    { value: "orange", description: "خلفية برتقالية" },
                    { value: "pink", description: "خلفية وردية" },
                    { value: "cyan", description: "خلفية سماوية" },
                    { value: "magenta", description: "خلفية أرجوانية" },
                    { value: "lime", description: "خلفية ليمونية" },
                    { value: "maroon", description: "خلفية كستنائية" },
                    { value: "navy", description: "خلفية زرقاء بحرية" },
                    { value: "olive", description: "خلفية زيتونية" },
                    { value: "teal", description: "خلفية تيل" },
                    { value: "aqua", description: "خلفية زرقاء مائية" },
                    { value: "fuchsia", description: "خلفية فوشيا" },
                    { value: "silver", description: "خلفية فضية" },
                    { value: "gold", description: "خلفية ذهبية" }
                ],
                freeInput: true
            },
            {
                name: "text",
                description: "?? خاصية قديمة كانت تحدد لون النص الافتراضي للصفحة بأكملها، استُبدلت بخاصية color في CSS على عنصر body",
                values: [
                    { value: "#000000", description: "نص أسود" },
                    { value: "#333333", description: "نص رمادي غامق" },
                    { value: "#666666", description: "نص رمادي" },
                    { value: "#ff0000", description: "نص أحمر" },
                    { value: "#0000ff", description: "نص أزرق" },
                    { value: "#00ff00", description: "نص أخضر" },
                    { value: "#ffff00", description: "نص أصفر" },
                    { value: "#ffffff", description: "نص أبيض" },
                    { value: "#ff00ff", description: "نص وردي" },
                    { value: "#00ffff", description: "نص سماوي" },
                    { value: "#cccccc", description: "نص رمادي فاتح" },
                    { value: "#999999", description: "نص رمادي متوسط" },
                    { value: "#3498db", description: "نص أزرق" },
                    { value: "#e74c3c", description: "نص أحمر" },
                    { value: "#2ecc71", description: "نص أخضر" },
                    { value: "#f39c12", description: "نص برتقالي" },
                    { value: "#9b59b6", description: "نص بنفسجي" },
                    { value: "red", description: "نص أحمر" },
                    { value: "green", description: "نص أخضر" },
                    { value: "blue", description: "نص أزرق" },
                    { value: "yellow", description: "نص أصفر" },
                    { value: "black", description: "نص أسود" },
                    { value: "white", description: "نص أبيض" },
                    { value: "gray", description: "نص رمادي" },
                    { value: "purple", description: "نص بنفسجي" },
                    { value: "orange", description: "نص برتقالي" },
                    { value: "pink", description: "نص وردي" },
                    { value: "cyan", description: "نص سماوي" },
                    { value: "magenta", description: "نص أرجواني" },
                    { value: "lime", description: "نص ليموني" },
                    { value: "maroon", description: "نص كستنائي" },
                    { value: "navy", description: "نص أزرق بحري" },
                    { value: "olive", description: "نص زيتوني" },
                    { value: "teal", description: "نص تيل" },
                    { value: "aqua", description: "نص أزرق مائي" },
                    { value: "fuchsia", description: "نص فوشيا" },
                    { value: "silver", description: "نص فضي" },
                    { value: "gold", description: "نص ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "link",
                description: "?? خاصية قديمة كانت تحدد لون الروابط غير المزرورة (غير المضغوط عليها)، استُبدلت بخاصية color في CSS على عنصر a",
                values: [
                    { value: "#0000ff", description: "رابط أزرق (الافتراضي قديماً)" },
                    { value: "#0066cc", description: "رابط أزرق غامق" },
                    { value: "#ff0000", description: "رابط أحمر" },
                    { value: "#0000ff", description: "رابط أزرق" },
                    { value: "#3366cc", description: "رابط أزرق" },
                    { value: "#003399", description: "رابط أزرق داكن" },
                    { value: "blue", description: "رابط أزرق" },
                    { value: "red", description: "رابط أحمر" }
                ],
                freeInput: true
            },
            {
                name: "vlink",
                description: "?? خاصية قديمة كانت تحدد لون الروابط المزرورة (التي تم الضغط عليها سابقاً)، استُبدلت بخاصية color في CSS على عنصر a:visited",
                values: [
                    { value: "#800080", description: "رابط مزرور بنفسجي (الافتراضي قديماً)" },
                    { value: "#660066", description: "رابط مزرور بنفسجي داكن" },
                    { value: "#990099", description: "رابط مزرور بنفسجي" },
                    { value: "#800080", description: "رابط مزرور بنفسجي" },
                    { value: "#663399", description: "رابط مزرور بنفسجي مزرق" },
                    { value: "purple", description: "رابط مزرور بنفسجي" }
                ],
                freeInput: true
            },
            {
                name: "alink",
                description: "?? خاصية قديمة كانت تحدد لون الرابط أثناء النقر عليه (الحالة النشطة)، استُبدلت بخاصية color في CSS على عنصر a:active",
                values: [
                    { value: "#ff0000", description: "رابط أحمر أثناء النقر (الافتراضي قديماً)" },
                    { value: "#ff3333", description: "رابط أحمر فاتح أثناء النقر" },
                    { value: "#ff0000", description: "رابط أحمر أثناء النقر" },
                    { value: "#cc0000", description: "رابط أحمر داكن أثناء النقر" },
                    { value: "red", description: "رابط أحمر أثناء النقر" }
                ],
                freeInput: true
            },
            {
                name: "background",
                description: "?? خاصية قديمة كانت تحدد صورة خلفية للصفحة بأكملها، استُبدلت بخاصية background-image في CSS على عنصر body",
                values: [
                    { value: "bg.png", description: "صورة خلفية في نفس المجلد" },
                    { value: "/images/background.jpg", description: "صورة خلفية في مجلد images" },
                    { value: "https://example.com/bg.gif", description: "صورة خلفية من موقع آخر" },
                    { value: "background.jpg", description: "صورة خلفية" },
                    { value: "bg-image.png", description: "صورة خلفية" }
                ],
                freeInput: true
            },
            {
                name: "bgproperties",
                description: "?? خاصية قديمة خاصة بـ Internet Explorer كانت تثبت صورة الخلفية بحيث لا تتحرك مع التمرير (fixed)، استُبدلت بخاصية background-attachment: fixed في CSS",
                values: [
                    { value: "fixed", description: "تثبيت صورة الخلفية" }
                ]
            },
            {
                name: "marginwidth",
                description: "?? خاصية قديمة كانت تحدد الهوامش الجانبية للصفحة بالبكسل، استُبدلت بخاصية margin في CSS على عنصر body",
                values: [
                    { value: "0", description: "بدون هوامش" },
                    { value: "5", description: "هامش 5 بكسل" },
                    { value: "10", description: "هامش 10 بكسل" },
                    { value: "15", description: "هامش 15 بكسل" },
                    { value: "20", description: "هامش 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "marginheight",
                description: "?? خاصية قديمة كانت تحدد الهوامش العلوية والسفلية للصفحة بالبكسل، استُبدلت بخاصية margin في CSS على عنصر body",
                values: [
                    { value: "0", description: "بدون هوامش" },
                    { value: "5", description: "هامش 5 بكسل" },
                    { value: "10", description: "هامش 10 بكسل" },
                    { value: "15", description: "هامش 15 بكسل" },
                    { value: "20", description: "هامش 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "topmargin",
                description: "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش العلوي للصفحة بالبكسل، استُبدلت بخاصية margin-top في CSS",
                values: [
                    { value: "0", description: "بدون هامش علوي" },
                    { value: "5", description: "هامش علوي 5 بكسل" },
                    { value: "10", description: "هامش علوي 10 بكسل" },
                    { value: "20", description: "هامش علوي 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "bottommargin",
                description: "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش السفلي للصفحة بالبكسل، استُبدلت بخاصية margin-bottom في CSS",
                values: [
                    { value: "0", description: "بدون هامش سفلي" },
                    { value: "5", description: "هامش سفلي 5 بكسل" },
                    { value: "10", description: "هامش سفلي 10 بكسل" },
                    { value: "20", description: "هامش سفلي 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "leftmargin",
                description: "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش الأيسر للصفحة بالبكسل، استُبدلت بخاصية margin-left في CSS",
                values: [
                    { value: "0", description: "بدون هامش أيسر" },
                    { value: "5", description: "هامش أيسر 5 بكسل" },
                    { value: "10", description: "هامش أيسر 10 بكسل" },
                    { value: "20", description: "هامش أيسر 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "rightmargin",
                description: "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش الأيمن للصفحة بالبكسل، استُبدلت بخاصية margin-right في CSS",
                values: [
                    { value: "0", description: "بدون هامش أيمن" },
                    { value: "5", description: "هامش أيمن 5 بكسل" },
                    { value: "10", description: "هامش أيمن 10 بكسل" },
                    { value: "20", description: "هامش أيمن 20 بكسل" }
                ],
                freeInput: true
            },
            // -------- السمات الحديثة --------
            {
                name: "style",
                description: "يضيف تنسيقات CSS مباشرة إلى عنصر body، يتحكم في مظهر الصفحة بأكملها",
                values: [
                    { value: "background-color: #f0f0f0;", description: "خلفية رمادية فاتحة" },
                    { value: "color: #333;", description: "نص رمادي غامق" },
                    { value: "font-family: Arial, sans-serif;", description: "خط Arial" },
                    { value: "margin: 0; padding: 0;", description: "إزالة الهوامش والحشوات" },
                    { value: "background-image: url('bg.jpg');", description: "صورة خلفية" },
                    { value: "background-attachment: fixed;", description: "تثبيت صورة الخلفية" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) لعنصر body لتطبيق تنسيقات CSS محددة أو لتحديد نمط الصفحة",
                values: [
                    { value: "dark-theme", description: "فئة الثيم الداكن" },
                    { value: "light-theme", description: "فئة الثيم الفاتح" },
                    { value: "home-page", description: "فئة الصفحة الرئيسية" },
                    { value: "rtl", description: "فئة الاتجاه من اليمين لليسار" },
                    { value: "ltr", description: "فئة الاتجاه من اليسار لليمين" },
                    { value: "admin-page", description: "فئة صفحة المدير" },
                    { value: "user-page", description: "فئة صفحة المستخدم" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً لعنصر body يمكن استهدافه بواسطة CSS أو JavaScript",
                values: [
                    { value: "app", description: "معرف التطبيق" },
                    { value: "root", description: "معرف الجذر" },
                    { value: "main-page", description: "معرف الصفحة الرئيسية" }
                ],
                freeInput: true
            },
            {
                name: "data-*",
                description: "يضيف بيانات مخصصة لعنصر body يمكن استخدامها في JavaScript لتخزين معلومات عن الصفحة أو التطبيق",
                values: [
                    { value: "data-theme=\"dark\"", description: "تحديد الثيم الداكن" },
                    { value: "data-user-id=\"123\"", description: "تخزين معرف المستخدم" },
                    { value: "data-page=\"home\"", description: "تحديد الصفحة الحالية" },
                    { value: "data-lang=\"ar\"", description: "تحديد اللغة" },
                    { value: "data-version=\"1.0\"", description: "تحديد إصدار التطبيق" },
                    { value: "data-mode=\"edit\"", description: "تحديد وضع التحرير" }
                ],
                freeInput: true
            },
            {
                name: "role",
                description: "يحدد دور عنصر body للمساعدة في إمكانية الوصول لقارئات الشاشة",
                values: [
                    { value: "document", description: "دور المستند (الافتراضي)" },
                    { value: "application", description: "دور التطبيق" }
                ]
            },
            {
                name: "aria-*",
                description: "يضيف خصائص إمكانية الوصول لعنصر body لمساعدة قارئات الشاشة والمستخدمين ذوي الاحتياجات الخاصة",
                values: [
                    { value: "aria-live=\"polite\"", description: "إعلان التغييرات بأدب" },
                    { value: "aria-atomic=\"true\"", description: "إعلان المنطقة كاملة عند التغيير" },
                    { value: "aria-busy=\"false\"", description: "الصفحة ليست مشغولة" }
                ],
                freeInput: true
            },
            {
                name: "hidden",
                description: "يخفي كل محتوى الصفحة، نادر الاستخدام ولكن قد يفيد في صفحات التحميل",
                values: [
                    { value: "", description: "يخفي الصفحة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "inert",
                description: "يعطل كل التفاعل في الصفحة (يمنع النقر والتركيز)، يستخدم عند ظهور نافذة حوار مشروطة فوق الصفحة",
                values: [
                    { value: "", description: "يعطل التفاعل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "lang",
                description: "يحدد لغة محتوى الصفحة، يغلب على خاصية lang في عنصر html إذا كانت مختلفة",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" },
                    { value: "fr", description: "اللغة الفرنسية" },
                    { value: "es", description: "اللغة الإسبانية" }
                ],
                freeInput: true
            },
            {
                name: "dir",
                description: "يحدد اتجاه النص في الصفحة، يغلب على خاصية dir في عنصر html إذا كانت مختلفة",
                values: [
                    { value: "rtl", description: "من اليمين إلى اليسار" },
                    { value: "ltr", description: "من اليسار إلى اليمين" }
                ]
            },
            {
                name: "title",
                description: "يضيف تلميحاً يظهر عند تمرير الماوس فوق الصفحة (نادر الاستخدام، وعادة ما يكون فارغاً)",
                values: [
                    { value: "صفحة الموقع الرئيسية", description: "عنوان الصفحة" }
                ],
                freeInput: true
            },
            {
                name: "onload",
                description: "يحدد كود JavaScript يُنفذ عند انتهاء تحميل الصفحة بالكامل (استُبدل بـ addEventListener('load', ...))",
                values: [
                    { value: "alert('تم تحميل الصفحة');", description: "ينفذ عند التحميل" },
                    { value: "init();", description: "استدعاء دالة التهيئة" }
                ],
                freeInput: true
            },
            {
                name: "onunload",
                description: "يحدد كود JavaScript يُنفذ عند مغادرة الصفحة (استُبدل بـ addEventListener('beforeunload', ...))",
                values: [
                    { value: "saveData();", description: "حفظ البيانات عند المغادرة" }
                ],
                freeInput: true
            },
            {
                name: "onbeforeunload",
                description: "يحدد كود JavaScript يُنفذ قبل مغادرة الصفحة، يستخدم لعرض تأكيد المغادرة",
                values: [
                    { value: "return 'هل أنت متأكد من المغادرة؟';", description: "يعرض رسالة تأكيد" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. عنصر <frameset> (مهمل) - للتوثيق
    // ============================================================
    {
        tag: "frameset",
        description: "?? عنصر مهمل - كان يقسم النافذة إلى عدة إطارات (frames)، كل إطار يعرض صفحة مستقلة، تم إهماله لأنه يسبب مشاكل في SEO وإمكانية الوصول والتنقل، واستُبدل بـ iframe أو CSS Grid/Flexbox",
        attributes: [
            {
                name: "rows",
                description: "كان يقسم النافذة أفقياً إلى صفوف بارتفاعات محددة",
                values: [
                    { value: "100,200", description: "صفان: الأول 100 بكسل، الثاني 200 بكسل" },
                    { value: "50%,50%", description: "صفان متساويان" },
                    { value: "25%,75%", description: "صفان بنسب مختلفة" },
                    { value: "33%,33%,33%", description: "ثلاثة صفوف متساوية" },
                    { value: "100,*", description: "صفان: الأول ثابت، الثاني الباقي" },
                    { value: "*,*", description: "صفان متساويان" }
                ],
                freeInput: true
            },
            {
                name: "cols",
                description: "كان يقسم النافذة عمودياً إلى أعمدة بعروض محددة",
                values: [
                    { value: "100,200", description: "عمودان: الأول 100 بكسل، الثاني 200 بكسل" },
                    { value: "50%,50%", description: "عمودان متساويان" },
                    { value: "25%,75%", description: "عمودان بنسب مختلفة" },
                    { value: "33%,33%,33%", description: "ثلاثة أعمدة متساوية" },
                    { value: "100,*", description: "عمودان: الأول ثابت، الثاني الباقي" },
                    { value: "*,*", description: "عمودان متساويان" }
                ],
                freeInput: true
            },
            {
                name: "border",
                description: "كان يحدد سمك الحدود بين الإطارات بالبكسل",
                values: [
                    { value: "0", description: "بدون حدود" },
                    { value: "1", description: "حد 1 بكسل" },
                    { value: "2", description: "حد 2 بكسل" },
                    { value: "3", description: "حد 3 بكسل" },
                    { value: "5", description: "حد 5 بكسل" },
                    { value: "10", description: "حد 10 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "frameborder",
                description: "كان يتحكم في إظهار أو إخفاء حدود الإطارات",
                values: [
                    { value: "1", description: "يظهر حدود الإطارات (افتراضي)" },
                    { value: "0", description: "يخفي حدود الإطارات" },
                    { value: "yes", description: "يظهر حدود الإطارات" },
                    { value: "no", description: "يخفي حدود الإطارات" }
                ]
            },
            {
                name: "bordercolor",
                description: "كان يحدد لون حدود الإطارات",
                values: [
                    { value: "#000000", description: "أسود" },
                    { value: "#ff0000", description: "أحمر" },
                    { value: "#0000ff", description: "أزرق" },
                    { value: "#cccccc", description: "رمادي" }
                ],
                freeInput: true
            },
            {
                name: "framespacing",
                description: "كان يحدد المسافة بين الإطارات بوحدة البكسل (خاص بمتصفح Internet Explorer)",
                values: [
                    { value: "0", description: "بدون مسافة" },
                    { value: "1", description: "مسافة 1 بكسل" },
                    { value: "2", description: "مسافة 2 بكسل" },
                    { value: "5", description: "مسافة 5 بكسل" },
                    { value: "10", description: "مسافة 10 بكسل" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <iframe> أو CSS Grid/Flexbox",
        severity: "critical",
        removalVersion: "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5"
    },

    // ============================================================
    // 6. عنصر <frame> (مهمل) - للتوثيق
    // ============================================================
    {
        tag: "frame",
        description: "?? عنصر مهمل - كان يمثل إطاراً واحداً داخل مجموعة إطارات (frameset)، يعرض صفحة مستقلة داخل الإطار، تم إهماله واستُبدل بـ iframe",
        attributes: [
            {
                name: "src",
                description: "كان يحدد عنوان URL للصفحة المعروضة داخل هذا الإطار",
                values: [
                    { value: "page1.html", description: "صفحة في نفس المجلد" },
                    { value: "/pages/page1.html", description: "صفحة في مجلد pages" },
                    { value: "https://example.com/page.html", description: "صفحة من موقع آخر" }
                ],
                freeInput: true
            },
            {
                name: "name",
                description: "كان يحدد اسم الإطار لاستهدافه من الروابط أو النماذج باستخدام target",
                values: [
                    { value: "main", description: "الإطار الرئيسي" },
                    { value: "sidebar", description: "الإطار الجانبي" },
                    { value: "header", description: "الإطار العلوي" },
                    { value: "footer", description: "الإطار السفلي" }
                ],
                freeInput: true
            },
            {
                name: "noresize",
                description: "كان يمنع المستخدم من تغيير حجم الإطار بالسحب بالفأرة",
                values: [
                    { value: "", description: "يمنع تغيير الحجم (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "scrolling",
                description: "كان يتحكم في إظهار أو إخفاء أشرطة التمرير داخل الإطار",
                values: [
                    { value: "yes", description: "يظهر أشرطة التمرير دائماً" },
                    { value: "no", description: "يمنع أشرطة التمرير نهائياً" },
                    { value: "auto", description: "يظهر أشرطة التمرير فقط عند الحاجة (افتراضي)" }
                ]
            },
            {
                name: "marginwidth",
                description: "كان يحدد الهامش الأيسر والأيمن داخل الإطار بالبكسل",
                values: [
                    { value: "0", description: "بدون هامش" },
                    { value: "5", description: "هامش 5 بكسل" },
                    { value: "10", description: "هامش 10 بكسل" },
                    { value: "20", description: "هامش 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "marginheight",
                description: "كان يحدد الهامش العلوي والسفلي داخل الإطار بالبكسل",
                values: [
                    { value: "0", description: "بدون هامش" },
                    { value: "5", description: "هامش 5 بكسل" },
                    { value: "10", description: "هامش 10 بكسل" },
                    { value: "20", description: "هامش 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "frameborder",
                description: "كان يتحكم في إظهار أو إخفاء حدود الإطار",
                values: [
                    { value: "1", description: "يظهر حدود الإطار (افتراضي)" },
                    { value: "0", description: "يخفي حدود الإطار" },
                    { value: "yes", description: "يظهر حدود الإطار" },
                    { value: "no", description: "يخفي حدود الإطار" }
                ]
            },
            {
                name: "bordercolor",
                description: "كان يحدد لون حدود الإطار",
                values: [
                    { value: "#000000", description: "أسود" },
                    { value: "#ff0000", description: "أحمر" },
                    { value: "#0000ff", description: "أزرق" },
                    { value: "#cccccc", description: "رمادي" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <iframe>",
        severity: "critical",
        removalVersion: "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5"
    },

    // ============================================================
    // 7. عنصر <noframes> (مهمل) - للتوثيق
    // ============================================================
    {
        tag: "noframes",
        description: "?? عنصر مهمل - كان يعرض محتوى بديلاً للمتصفحات التي لا تدعم الإطارات (frames)، أصبح غير ضروري مع إهمال frameset نفسه",
        attributes: [],
        deprecated: true,
        replacement: "استخدم <noscript> للبدائل عند الحاجة",
        severity: "low",
        removalVersion: "تم إهماله في HTML 5 (2014)"
    },

    // ============================================================
    // 8. عنصر <basefont> (مهمل) - للتوثيق
    // ============================================================
    {
        tag: "basefont",
        description: "?? عنصر مهمل - كان يحدد حجم ولون ونوع الخط الافتراضي لكامل الصفحة، تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
        attributes: [
            {
                name: "size",
                description: "كان يحدد حجم الخط الافتراضي للصفحة من 1 إلى 7",
                values: [
                    { value: "1", description: "أصغر حجم" },
                    { value: "2", description: "حجم صغير" },
                    { value: "3", description: "الحجم الافتراضي" },
                    { value: "4", description: "حجم متوسط" },
                    { value: "5", description: "حجم كبير" },
                    { value: "6", description: "حجم كبير جداً" },
                    { value: "7", description: "أكبر حجم" }
                ],
                freeInput: true
            },
            {
                name: "color",
                description: "كان يحدد اللون الافتراضي للنص في كل الصفحة",
                values: [
                    { value: "#000000", description: "أسود" },
                    { value: "#333333", description: "رمادي غامق" },
                    { value: "#0000ff", description: "أزرق" },
                    { value: "#ff0000", description: "أحمر" },
                    { value: "#00ff00", description: "أخضر" }
                ],
                freeInput: true
            },
            {
                name: "face",
                description: "كان يحدد نوع الخط الافتراضي لكل الصفحة",
                values: [
                    { value: "Arial", description: "خط Arial" },
                    { value: "Times New Roman", description: "خط Times New Roman" },
                    { value: "Verdana", description: "خط Verdana" },
                    { value: "Tahoma", description: "خط Tahoma" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS: font-family, font-size, color على عنصر body",
        severity: "high",
        removalVersion: "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5"
    },

    // ============================================================
    // 9. عنصر <isindex> (مهمل) - للتوثيق
    // ============================================================
    {
        tag: "isindex",
        description: "?? عنصر مهمل - كان يضيف حقل بحث بسيطاً تلقائياً في الصفحة دون الحاجة لنموذج، تم إهماله لوجود نماذج HTML القياسية",
        attributes: [
            {
                name: "prompt",
                description: "كان النص الذي يظهر بجانب حقل البحث كتوجيه للمستخدم",
                values: [
                    { value: "ابحث هنا...", description: "نص توجيهي بالعربية" },
                    { value: "Search:", description: "نص توجيهي بالإنجليزية" }
                ],
                freeInput: true
            },
            {
                name: "action",
                description: "كان عنوان الصفحة التي تستقبل عبارة البحث المدخلة",
                values: [
                    { value: "/search", description: "صفحة بحث في الموقع" },
                    { value: "https://google.com/search", description: "صفحة بحث جوجل" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <form> مع <input type=\"search\">",
        severity: "critical",
        removalVersion: "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5"
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.documentData = documentData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = documentData;
}