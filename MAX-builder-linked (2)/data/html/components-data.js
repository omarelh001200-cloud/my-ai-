// ============================================================
// components-data.js
// عناصر مكونات الويب (قوالب، فتحات، مكونات مخصصة)
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const componentsData = [
    // ============================================================
    // 1. عنصر <template>
    // ============================================================
    {
        tag: "template",
        description: "يخزن قالب HTML مخفي لا يظهر في الصفحة، يستخدم لإنشاء عناصر HTML متكررة بواسطة JavaScript دون تكرار الكود، يسهل إنشاء محتوى ديناميكي وإعادة استخدامه",
        attributes: [
            // -------- shadowrootmode --------
            {
                name: "shadowrootmode",
                description: "يحدد وضع Shadow DOM للقالب، يسمح بإنشاء مكونات معزولة لا تتأثر بتنسيقات الصفحة الرئيسية، ويوفر تغليفاً كاملاً للعناصر والأنماط",
                values: [
                    { value: "open", description: "يسمح بالوصول إلى Shadow DOM من خلال JavaScript باستخدام element.shadowRoot، مفيد للتفاعل مع المكون" },
                    { value: "closed", description: "يمنع الوصول إلى Shadow DOM من خلال JavaScript، يعيد null عند محاولة الوصول، يزيد الخصوصية والعزل" }
                ]
            },
            // -------- shadowrootdelegatesfocus --------
            {
                name: "shadowrootdelegatesfocus",
                description: "يجعل التركيز (focus) ينتقل تلقائياً لأول عنصر قابل للتركيز داخل Shadow DOM عند التركيز على المكون نفسه، يحسن تجربة المستخدم مع النماذج والحقول التفاعلية",
                values: [
                    { value: "", description: "يفعّل تفويض التركيز (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- shadowrootclonable --------
            {
                name: "shadowrootclonable",
                description: "يسمح بنسخ Shadow DOM الخاص بالمكون عند استخدام cloneNode، بدونها لا يُنسخ محتوى الـ Shadow DOM مع العنصر، مهم عند الحاجة لنسخ المكونات",
                values: [
                    { value: "", description: "يسمح بالنسخ (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- shadowrootserializable --------
            {
                name: "shadowrootserializable",
                description: "يسمح بتضمين محتوى Shadow DOM عند حفظ أو تسلسل الصفحة (مثل قراءة innerHTML)، مفيد عند الحاجة لحفظ حالة المكون أو تصديره",
                values: [
                    { value: "", description: "يسمح بالتسلسل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- shadowrootavailable --------
            {
                name: "shadowrootavailable",
                description: "يحدد أن القالب سيكون متاحاً كـ Shadow Root فوراً دون انتظار تحميل الصفحة، يفيد في تحميل المكونات مبكراً",
                values: [
                    { value: "", description: "يجعل القالب متاحاً فوراً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- inert --------
            {
                name: "inert",
                description: "يجعل جميع العناصر داخل القالب غير تفاعلية (لا يمكن النقر عليها أو التركيز عليها)، مفيد للقوالب التي تحتوي على أزرار أو روابط مؤقتة",
                values: [
                    { value: "", description: "يعطل التفاعل داخل القالب (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- hidden --------
            {
                name: "hidden",
                description: "يخفي القالب ولا يظهر في الصفحة، يفيد في إخفاء قوالب غير مستخدمة مؤقتاً",
                values: [
                    { value: "", description: "يخفي القالب (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- id --------
            {
                name: "id",
                description: "يحدد معرفاً فريداً للقالب يمكن استخدامه في CSS أو JavaScript للوصول إليه واستنساخه",
                values: [
                    { value: "card-template", description: "قالب بطاقة" },
                    { value: "list-item-template", description: "قالب عنصر قائمة" },
                    { value: "modal-template", description: "قالب نافذة منبثقة" }
                ],
                freeInput: true
            },
            // -------- class --------
            {
                name: "class",
                description: "يحدد فئات CSS لتطبيق أنماط مخصصة على القالب نفسه (وليس محتواه الداخلي)",
                values: [],
                freeInput: true
            },
            // -------- data-* --------
            {
                name: "data-*",
                description: "يضيف بيانات مخصصة للقالب يمكن استخدامها في JavaScript لتحديد نوع القالب أو إعداداته",
                values: [
                    { value: "data-type=\"product\"", description: "يحدد نوع القالب كمنتج" },
                    { value: "data-count=\"5\"", description: "يحدد عدد العناصر" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. عنصر <slot>
    // ============================================================
    {
        tag: "slot",
        description: "يحدد مكاناً في قالب المكون يمكنك إدخال محتوى مخصص فيه، يسهل إنشاء مكونات ويب قابلة لإعادة الاستخدام بمحتوى مختلف، ويعزز فصل الهيكل عن المحتوى",
        attributes: [
            // -------- name --------
            {
                name: "name",
                description: "يحدد اسم الفتحة التي ستستقبل المحتوى المخصص في المكون، يسمح بوضع محتوى مختلف في أماكن مختلفة من المكون، يجب أن يكون فريداً داخل المكون الواحد",
                values: [
                    { value: "header", description: "فتحة مخصصة لوضع محتوى في أعلى المكون (مثل العنوان أو الشعار)" },
                    { value: "content", description: "فتحة مخصصة لوضع المحتوى الرئيسي للمكون" },
                    { value: "footer", description: "فتحة مخصصة لوضع محتوى في أسفل المكون (مثل الحقوق أو الروابط)" },
                    { value: "sidebar", description: "فتحة مخصصة للشريط الجانبي" },
                    { value: "main", description: "فتحة مخصصة للمحتوى الرئيسي" },
                    { value: "title", description: "فتحة مخصصة للعنوان" },
                    { value: "subtitle", description: "فتحة مخصصة للعنوان الفرعي" },
                    { value: "description", description: "فتحة مخصصة للوصف" },
                    { value: "image", description: "فتحة مخصصة للصورة" },
                    { value: "icon", description: "فتحة مخصصة للأيقونة" },
                    { value: "actions", description: "فتحة مخصصة للأزرار والإجراءات" },
                    { value: "menu", description: "فتحة مخصصة للقائمة" },
                    { value: "navigation", description: "فتحة مخصصة للتنقل" },
                    { value: "toolbar", description: "فتحة مخصصة لشريط الأدوات" },
                    { value: "left", description: "فتحة مخصصة للجانب الأيسر" },
                    { value: "right", description: "فتحة مخصصة للجانب الأيمن" },
                    { value: "top", description: "فتحة مخصصة للأعلى" },
                    { value: "bottom", description: "فتحة مخصصة للأسفل" },
                    { value: "center", description: "فتحة مخصصة للوسط" },
                    { value: "prefix", description: "فتحة مخصصة لما قبل المحتوى" },
                    { value: "suffix", description: "فتحة مخصصة لما بعد المحتوى" },
                    { value: "label", description: "فتحة مخصصة للتسمية" },
                    { value: "badge", description: "فتحة مخصصة لشارة أو علامة" },
                    { value: "avatar", description: "فتحة مخصصة للصورة الرمزية" },
                    { value: "status", description: "فتحة مخصصة لحالة العنصر" },
                    { value: "price", description: "فتحة مخصصة للسعر" },
                    { value: "rating", description: "فتحة مخصصة للتقييم" },
                    { value: "date", description: "فتحة مخصصة للتاريخ" },
                    { value: "time", description: "فتحة مخصصة للوقت" },
                    { value: "author", description: "فتحة مخصصة للمؤلف" }
                ],
                freeInput: true
            },
            // -------- id --------
            {
                name: "id",
                description: "يحدد معرفاً فريداً للفتحة يمكن استخدامه في CSS أو JavaScript للوصول إليها",
                values: [],
                freeInput: true
            },
            // -------- class --------
            {
                name: "class",
                description: "يحدد فئات CSS لتطبيق أنماط مخصصة على الفتحة (وليس محتواها المخصص)",
                values: [],
                freeInput: true
            },
            // -------- style --------
            {
                name: "style",
                description: "يسمح بإضافة أنماط CSS مباشرة على الفتحة، يفيد في تحديد موضعها أو حجمها",
                values: [],
                freeInput: true
            },
            // -------- hidden --------
            {
                name: "hidden",
                description: "يخفي الفتحة ولا تعرض أي محتوى فيها، يفيد لإخفاء فتحات غير مستخدمة مؤقتاً",
                values: [
                    { value: "", description: "يخفي الفتحة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- data-* --------
            {
                name: "data-*",
                description: "يضيف بيانات مخصصة للفتحة يمكن استخدامها في JavaScript لتحديد دورها أو إعداداتها",
                values: [
                    { value: "data-position=\"top\"", description: "يحدد موقع الفتحة" },
                    { value: "data-required=\"true\"", description: "يحدد أن الفتحة مطلوبة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. عناصر المكونات المخصصة (Custom Elements)
    // ============================================================
    {
        tag: "custom-element",
        description: "عنصر مخصص يتم إنشاؤه بواسطة JavaScript باستخدام Custom Elements API، يسمح بإنشاء عناصر HTML جديدة بسلوكيات وخصائص مخصصة، يعزز إعادة استخدام الكود",
        attributes: [
            {
                name: "is",
                description: "يحدد اسم العنصر المخصص عند استخدامه مع عناصر HTML القياسية (مثل <button is=\"my-button\">)، يسمح بتوسيع عناصر موجودة",
                values: [
                    { value: "my-button", description: "زر مخصص" },
                    { value: "my-input", description: "حقل إدخال مخصص" },
                    { value: "my-card", description: "بطاقة مخصصة" }
                ],
                freeInput: true
            },
            {
                name: "data-*",
                description: "يضيف بيانات مخصصة للمكون يمكن استخدامها في JavaScript لتمرير الإعدادات والمعلومات",
                values: [
                    { value: "data-value=\"42\"", description: "قيمة رقمية" },
                    { value: "data-user-id=\"123\"", description: "معرف مستخدم" },
                    { value: "data-product-name=\"iPhone\"", description: "اسم منتج" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للمكون يمكن استخدامه في CSS أو JavaScript للوصول إليه",
                values: [],
                freeInput: true
            },
            {
                name: "class",
                description: "يحدد فئات CSS لتطبيق أنماط مخصصة على المكون",
                values: [],
                freeInput: true
            },
            {
                name: "style",
                description: "يسمح بإضافة أنماط CSS مباشرة على المكون لتخصيص مظهره",
                values: [],
                freeInput: true
            },
            {
                name: "tabindex",
                description: "يحدد ترتيب التنقل بين العناصر باستخدام مفتاح Tab، يفيد في تحسين إمكانية الوصول",
                values: [
                    { value: "0", description: "يمكن الوصول إليه بترتيب طبيعي" },
                    { value: "-1", description: "يمكن التركيز عليه برمجياً فقط" },
                    { value: "1", description: "أولوية عالية (أول عنصر)" },
                    { value: "2", description: "أولوية متوسطة" }
                ],
                freeInput: true
            },
            {
                name: "aria-*",
                description: "يضيف خصائص إمكانية الوصول للمكون لمساعدة قارئات الشاشة والمستخدمين ذوي الاحتياجات الخاصة",
                values: [
                    { value: "aria-label=\"زر الإرسال\"", description: "تسمية وصفية للزر" },
                    { value: "aria-disabled=\"true\"", description: "يعطل المكون" },
                    { value: "aria-expanded=\"false\"", description: "عنصر قابل للطي" },
                    { value: "aria-hidden=\"true\"", description: "يخفي المكون عن قارئات الشاشة" },
                    { value: "aria-selected=\"true\"", description: "عنصر محدد" },
                    { value: "aria-checked=\"false\"", description: "عنصر غير محدد" },
                    { value: "aria-required=\"true\"", description: "عنصر مطلوب" },
                    { value: "aria-invalid=\"false\"", description: "عنصر صحيح" }
                ],
                freeInput: true
            },
            {
                name: "role",
                description: "يحدد دور المكون في صفحة الويب، يساعد قارئات الشاشة في فهم وظيفة العنصر",
                values: [
                    { value: "button", description: "زر" },
                    { value: "link", description: "رابط" },
                    { value: "checkbox", description: "مربع اختيار" },
                    { value: "radio", description: "زر اختيار" },
                    { value: "textbox", description: "حقل نصي" },
                    { value: "listbox", description: "قائمة" },
                    { value: "dialog", description: "نافذة حوار" },
                    { value: "alert", description: "تنبيه" },
                    { value: "tooltip", description: "تلميح" },
                    { value: "tab", description: "علامة تبويب" },
                    { value: "tabpanel", description: "لوحة علامة تبويب" },
                    { value: "menu", description: "قائمة" },
                    { value: "menuitem", description: "عنصر قائمة" }
                ]
            },
            {
                name: "autofocus",
                description: "يجعل المكون يحصل على التركيز تلقائياً عند تحميل الصفحة",
                values: [
                    { value: "", description: "يفعّل التركيز التلقائي (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "disabled",
                description: "يعطل المكون ويمنع التفاعل معه، شائع في الأزرار والحقول",
                values: [
                    { value: "", description: "يعطل المكون (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "hidden",
                description: "يخفي المكون ولا يظهر في الصفحة",
                values: [
                    { value: "", description: "يخفي المكون (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // ============================================================
    // 4. عناصر قديمة ومهجورة (Shadow DOM v0) - للتوثيق فقط
    // ============================================================

    // -------- content (مهجور) --------
    {
        tag: "content",
        description: "⚠️ عنصر قديم من الجيل الأول لـ Shadow DOM (v0)، كان يحدد مكان إسقاط محتوى المستخدم داخل القالب، مهجور تماماً واستُبدل بعنصر slot الأكثر مرونة وقوة في إدارة المحتوى المخصص",
        attributes: [
            // -------- select --------
            {
                name: "select",
                description: "كان يحدد باستخدام محدد CSS أي عناصر من محتوى المستخدم يتم إسقاطها في هذا المكان تحديداً، يسمح بتصفية المحتوى حسب النوع أو الفئة",
                values: [
                    { value: "*", description: "يسقط جميع العناصر (الافتراضي)" },
                    { value: ".title", description: "يسقط العناصر التي تحمل الفئة title فقط" },
                    { value: "h1, h2", description: "يسقط عناصر العناوين h1 وh2 فقط" },
                    { value: "[data-type=\"header\"]", description: "يسقط العناصر التي تحمل data-type=\"header\"" },
                    { value: "p", description: "يسقط عناصر الفقرة فقط" },
                    { value: ".item", description: "يسقط العناصر التي تحمل الفئة item" },
                    { value: "#main-content", description: "يسقط العنصر الذي يحمل المعرف main-content" },
                    { value: "[role=\"button\"]", description: "يسقط العناصر التي تحمل دور button" },
                    { value: "header > *", description: "يسقط جميع العناصر داخل header" },
                    { value: ".container .card", description: "يسقط البطاقات داخل الحاوية" }
                ],
                freeInput: true
            },
            // -------- id --------
            {
                name: "id",
                description: "كان يحدد معرفاً فريداً لعنصر content",
                values: [],
                freeInput: true
            },
            // -------- class --------
            {
                name: "class",
                description: "كان يحدد فئات CSS لعنصر content",
                values: [],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <slot>",
        severity: "critical",
        removalVersion: "تم إهماله في Chrome 53 (2016) وإزالته من معيار HTML"
    },

    // -------- shadow (مهجور) --------
    {
        tag: "shadow",
        description: "⚠️ عنصر قديم من الجيل الأول لـ Shadow DOM (v0)، كان يُستخدم لتضمين محتوى Shadow Root أقدم داخل شجرة ظل جديدة (تركيب متعدد الطبقات)، مهجور تماماً ولا بديل مباشر له لأن Shadow DOM الحديث لا يدعم هذا التركيب المتعدد",
        attributes: [
            // -------- id --------
            {
                name: "id",
                description: "كان يحدد معرفاً فريداً لعنصر shadow",
                values: [],
                freeInput: true
            },
            // -------- class --------
            {
                name: "class",
                description: "كان يحدد فئات CSS لعنصر shadow",
                values: [],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "لا بديل مباشر - استخدم مكونات مستقلة بدلاً من التركيب المتعدد",
        severity: "critical",
        removalVersion: "تم إهماله في Chrome 53 (2016) وإزالته من معيار HTML"
    },

    // ============================================================
    // 5. عناصر إضافية مرتبطة بالمكونات
    // ============================================================

    // -------- part --------
    {
        tag: "part",
        description: "يسمح بتحديد أجزاء داخل Shadow DOM يمكن تنسيقها من خارج المكون باستخدام CSS ::part()، يوفر طريقة آمنة لتخصيص مظهر المكونات دون كسر العزل",
        attributes: [
            {
                name: "part",
                description: "يحدد اسم الجزء الذي يمكن تنسيقه من خارج Shadow DOM، يمكن استخدام أسماء متعددة مفصولة بمسافات",
                values: [
                    { value: "button", description: "جزء الزر داخل المكون" },
                    { value: "icon", description: "جزء الأيقونة" },
                    { value: "label", description: "جزء التسمية" },
                    { value: "container", description: "جزء الحاوية" },
                    { value: "header", description: "جزء الرأس" },
                    { value: "content", description: "جزء المحتوى" },
                    { value: "footer", description: "جزء التذييل" },
                    { value: "wrapper", description: "جزء الغلاف" },
                    { value: "input", description: "جزء حقل الإدخال" },
                    { value: "checkbox", description: "جزء مربع الاختيار" },
                    { value: "radio", description: "جزء زر الاختيار" },
                    { value: "dropdown", description: "جزء القائمة المنسدلة" },
                    { value: "menu", description: "جزء القائمة" },
                    { value: "dialog", description: "جزء النافذة المنبثقة" },
                    { value: "tooltip", description: "جزء التلميح" },
                    { value: "card", description: "جزء البطاقة" },
                    { value: "avatar", description: "جزء الصورة الرمزية" },
                    { value: "badge", description: "جزء الشارة" },
                    { value: "status", description: "جزء الحالة" }
                ],
                freeInput: true
            },
            {
                name: "exportparts",
                description: "يصدّر الأجزاء الداخلية للمكون لجعلها قابلة للتنسيق من مستويات أعلى، مفيد في المكونات المتداخلة",
                values: [
                    { value: "inner-button, inner-icon", description: "يصدر أجزاء داخلية للمكون الأب" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. عناصر التحكم في المكونات
    // ============================================================

    // -------- web-component --------
    {
        tag: "web-component",
        description: "عنصر ويب مخصص يتم تعريفه باستخدام Custom Elements API، يمثل وحدة مستقلة قابلة لإعادة الاستخدام مع تغليف كامل للهيكل والسلوك والتصميم",
        attributes: [
            {
                name: "is",
                description: "يحدد اسم العنصر المخصص عند توسيع عنصر HTML موجود",
                values: [
                    { value: "my-button", description: "زر مخصص" },
                    { value: "my-input", description: "حقل إدخال مخصص" },
                    { value: "my-card", description: "بطاقة مخصصة" }
                ],
                freeInput: true
            },
            {
                name: "shadowrootmode",
                description: "يحدد وضع Shadow DOM للمكون، يوفر تغليفاً كاملاً للعناصر والأنماط",
                values: [
                    { value: "open", description: "Shadow DOM قابل للوصول" },
                    { value: "closed", description: "Shadow DOM غير قابل للوصول" }
                ]
            },
            {
                name: "shadowrootdelegatesfocus",
                description: "يفوض التركيز لأول عنصر قابل للتركيز داخل المكون",
                values: [
                    { value: "", description: "يفعّل تفويض التركيز (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.componentsData = componentsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = componentsData;
}