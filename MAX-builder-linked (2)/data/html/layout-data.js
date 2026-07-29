// ============================================================
// layout-data.js
// عناصر التقسيم الهيكلي والعناوين
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const layoutData = [
    // ============================================================
    // عناصر التقسيم الهيكلي الأساسية
    // ============================================================

    // -------- header --------
    {
        tag: "header",
        description: "يمثل مقدمة الصفحة أو القسم، يحتوي عادة على شعار الموقع والعنوان الرئيسي وقائمة التنقل، يظهر في أعلى الصفحة",
        attributes: []
    },

    // -------- nav --------
    {
        tag: "nav",
        description: "يحتوي على روابط التنقل الرئيسية في الموقع، تمكن المستخدم من الانتقال بين أقسام الموقع أو الصفحات المختلفة بسهولة",
        attributes: [
            {
                name: "aria-label",
                description: "يضيف اسماً لقائمة التنقل لمساعدة قارئات الشاشة في التعرف عليها",
                values: [
                    { value: "القائمة الرئيسية", description: "اسم قائمة التنقل الرئيسية" },
                    { value: "قائمة الموقع", description: "اسم قائمة الموقع" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- main --------
    {
        tag: "main",
        description: "يحدد المحتوى الأساسي والفريد للصفحة الذي لا يتكرر في صفحات أخرى، يستثنى منه القوائم والتذييل والأجزاء المكررة",
        attributes: []
    },

    // -------- section --------
    {
        tag: "section",
        description: "يقسم الصفحة إلى أقسام مستقلة، كل قسم له موضوع واحد مثل فصل في كتاب أو جزء من صفحة رئيسية، ينظم المحتوى",
        attributes: [
            {
                name: "aria-labelledby",
                description: "يربط القسم بعنوان تعريفه بواسطة معرف (id)، يساعد قارئات الشاشة في فهم محتوى القسم",
                values: [
                    { value: "section-title", description: "معرف عنوان القسم" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- article --------
    {
        tag: "article",
        description: "يمثل محتوى مستقلاً بذاته يمكن نشره أو توزيعه بشكل منفصل عن باقي الصفحة، مثل تدوينة، خبر، منتج، أو تعليق",
        attributes: [
            {
                name: "aria-label",
                description: "يضيف اسماً للمقالة لمساعدة قارئات الشاشة",
                values: [
                    { value: "مقالة اليوم", description: "اسم المقالة" },
                    { value: "أحدث الأخبار", description: "اسم المقالة الإخبارية" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- aside --------
    {
        tag: "aside",
        description: "يحتوي على محتوى جانبي مرتبط بالمحتوى الرئيسي لكن ليس أساسياً، مثل إعلانات، شريط جانبي، أو اقتباسات مرتبطة",
        attributes: []
    },

    // -------- footer --------
    {
        tag: "footer",
        description: "يمثل تذييل الصفحة أو القسم، يحتوي على معلومات حقوق النشر، روابط إضافية، بيانات الاتصال، أو خريطة الموقع",
        attributes: []
    },

    // -------- div --------
    {
        tag: "div",
        description: "حاوية عامة تستخدم لتجميع عناصر أخرى وتنسيقها معاً باستخدام CSS، ليس لها معنى دلالي خاص وتستخدم للتقسيم فقط",
        attributes: [
            {
                name: "style",
                description: "يحدد تنسيقات CSS مباشرة داخل العنصر، يستخدم لتجميل الحاوية",
                values: [
                    { value: "display: flex;", description: "يجعل العناصر داخل الحاوية مرنة" },
                    { value: "display: grid;", description: "يجعل العناصر داخل الحاوية شبكية" },
                    { value: "padding: 20px;", description: "يضيف حشوة داخلية 20 بكسل" },
                    { value: "margin: 10px;", description: "يضيف هامش خارجي 10 بكسل" },
                    { value: "background-color: #f0f0f0;", description: "يضيف خلفية رمادية فاتحة" },
                    { value: "border: 1px solid #ccc;", description: "يضيف إطاراً رمادياً" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للحاوية لتطبيق تنسيقات CSS محددة",
                values: [
                    { value: "container", description: "فئة الحاوية" },
                    { value: "wrapper", description: "فئة الغلاف" },
                    { value: "flex", description: "فئة التنسيق المرن" },
                    { value: "grid", description: "فئة التنسيق الشبكي" },
                    { value: "card", description: "فئة البطاقة" },
                    { value: "section", description: "فئة القسم" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للحاوية يمكن استهدافه بواسطة CSS أو JavaScript",
                values: [
                    { value: "main-container", description: "معرف الحاوية الرئيسية" },
                    { value: "content", description: "معرف المحتوى" },
                    { value: "sidebar", description: "معرف الشريط الجانبي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- address --------
    {
        tag: "address",
        description: "يعرض معلومات الاتصال بصاحب الصفحة مثل البريد الإلكتروني، رقم الهاتف، العنوان الفعلي، أو حسابات التواصل الاجتماعي",
        attributes: []
    },

    // -------- hgroup --------
    {
        tag: "hgroup",
        description: "يجمع عنواناً رئيسياً مع عناوين فرعية أو وصف مرتبط به، يحسن البنية الدلالية للعناوين ويوضح العلاقة بينها",
        attributes: []
    },

    // -------- search --------
    {
        tag: "search",
        description: "يحدد منطقة تحتوي على نموذج بحث أو أدوات للبحث داخل الموقع، يسهل على المستخدم العثور على المحتوى بسرعة",
        attributes: [
            {
                name: "role",
                description: "يحدد دور منطقة البحث للمساعدة في إمكانية الوصول",
                values: [
                    { value: "search", description: "دور البحث (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- details --------
    {
        tag: "details",
        description: "ينشئ قسماً قابلاً للطي والفتح، يخفي المحتوى الإضافي حتى يضغط المستخدم عليه، يستخدم للأسئلة الشائعة والتفاصيل الاختيارية",
        attributes: [
            {
                name: "open",
                description: "يجعل القسم مفتوحاً وظاهر المحتوى منذ البداية بدل أن يكون مطوياً",
                values: [
                    { value: "", description: "يفتح القسم افتراضياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "name",
                description: "يسمح بتجميع عدة عناصر details معاً بحيث فتح أحدها يغلق الآخر تلقائياً",
                values: [
                    { value: "group1", description: "اسم المجموعة" },
                    { value: "faq", description: "مجموعة الأسئلة الشائعة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- summary --------
    {
        tag: "summary",
        description: "يحدد العنوان الظاهر دائماً لعنصر details، عند النقر عليه يفتح أو يطوي المحتوى المخفي بداخله",
        attributes: []
    },

    // -------- dialog --------
    {
        tag: "dialog",
        description: "ينشئ نافذة حوار منبثقة (مثل نافذة تأكيد أو نموذج تسجيل)، يمكن إظهارها أو إخفاؤها وتظهر عادة فوق باقي محتوى الصفحة",
        attributes: [
            {
                name: "open",
                description: "يجعل نافذة الحوار ظاهرة على الصفحة، بدونها تبقى النافذة مخفية حتى تُفتح بواسطة JavaScript",
                values: [
                    { value: "", description: "يظهر نافذة الحوار (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "closedby",
                description: "يحدد الطريقة التي يُغلق بها المستخدم نافذة الحوار (زر Esc أو النقر خارجها)",
                values: [
                    { value: "any", description: "يغلق بالنقر خارج النافذة أو بمفتاح Esc" },
                    { value: "closerequest", description: "يغلق فقط بمفتاح Esc أو طلب إغلاق صريح" },
                    { value: "none", description: "لا يغلق تلقائياً بأي طريقة" }
                ]
            },
            {
                name: "role",
                description: "يحدد دور نافذة الحوار للمساعدة في إمكانية الوصول",
                values: [
                    { value: "dialog", description: "دور الحوار (الافتراضي)" },
                    { value: "alertdialog", description: "دور حوار التنبيه" }
                ]
            },
            {
                name: "aria-label",
                description: "يضيف اسماً لنافذة الحوار لمساعدة قارئات الشاشة",
                values: [
                    { value: "تأكيد الحذف", description: "اسم نافذة تأكيد الحذف" },
                    { value: "تسجيل الدخول", description: "اسم نافذة تسجيل الدخول" }
                ],
                freeInput: true
            },
            {
                name: "aria-modal",
                description: "يحدد أن نافذة الحوار تمنع التفاعل مع بقية الصفحة أثناء ظهورها",
                values: [
                    { value: "true", description: "نافذة مشروطة (تمنع التفاعل مع الخلفية)" },
                    { value: "false", description: "نافذة غير مشروطة" }
                ]
            }
        ]
    },

    // ============================================================
    // العناوين (Headings) - ترتيب هرمي للمحتوى
    // ============================================================

    // -------- h1 --------
    {
        tag: "h1",
        description: "العنوان الرئيسي للصفحة، يعبر عن الموضوع الأساسي، يستخدم مرة واحدة في الصفحة، يساعد محركات البحث في فهم محتوى الصفحة",
        attributes: [
            {
                name: "style",
                description: "يحدد تنسيقات CSS مباشرة للعنوان، يتحكم في مظهره",
                values: [
                    { value: "color: #333;", description: "لون النص رمادي غامق" },
                    { value: "font-size: 2.5em;", description: "حجم الخط 2.5em" },
                    { value: "text-align: center;", description: "توسيط النص" },
                    { value: "font-weight: bold;", description: "خط عريض" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للعنوان لتطبيق تنسيقات CSS محددة",
                values: [
                    { value: "main-title", description: "فئة العنوان الرئيسي" },
                    { value: "page-title", description: "فئة عنوان الصفحة" },
                    { value: "heading", description: "فئة العنوان" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعنوان يمكن استهدافه بواسطة CSS أو JavaScript",
                values: [
                    { value: "page-title", description: "معرف عنوان الصفحة" },
                    { value: "main-heading", description: "معرف العنوان الرئيسي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- h2 --------
    {
        tag: "h2",
        description: "عنوان فرعي للأقسام الرئيسية، ينظم المحتوى ويساعد القارئ في التنقل بين أجزاء الصفحة، يأتي تحت h1 مباشرة",
        attributes: [
            {
                name: "style",
                description: "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
                values: [
                    { value: "color: #555;", description: "لون النص رمادي" },
                    { value: "font-size: 2em;", description: "حجم الخط 2em" },
                    { value: "margin-top: 20px;", description: "هامش علوي 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للعنوان الفرعي",
                values: [
                    { value: "section-title", description: "فئة عنوان القسم" },
                    { value: "sub-heading", description: "فئة العنوان الفرعي" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعنوان الفرعي",
                values: [
                    { value: "section-1", description: "معرف القسم الأول" },
                    { value: "features", description: "معرف قسم الميزات" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- h3 --------
    {
        tag: "h3",
        description: "عنوان فرعي تحت h2، يستخدم لتقسيم المحتوى إلى أجزاء أكثر تفصيلاً داخل القسم، ينظم المعلومات بشكل هرمي",
        attributes: [
            {
                name: "style",
                description: "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
                values: [
                    { value: "color: #777;", description: "لون النص رمادي فاتح" },
                    { value: "font-size: 1.5em;", description: "حجم الخط 1.5em" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للعنوان الفرعي",
                values: [
                    { value: "sub-section-title", description: "فئة عنوان القسم الفرعي" },
                    { value: "detail-heading", description: "فئة عنوان التفاصيل" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعنوان الفرعي",
                values: [
                    { value: "detail-1", description: "معرف التفاصيل الأولى" },
                    { value: "feature-1", description: "معرف الميزة الأولى" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- h4 --------
    {
        tag: "h4",
        description: "عنوان فرعي تحت h3، يستخدم لتنظيم التفاصيل الدقيقة داخل المحتوى، يضيف مستوى آخر من التنظيم",
        attributes: [
            {
                name: "style",
                description: "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
                values: [
                    { value: "font-size: 1.2em;", description: "حجم الخط 1.2em" },
                    { value: "font-weight: bold;", description: "خط عريض" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للعنوان الفرعي",
                values: [
                    { value: "sub-detail", description: "فئة التفاصيل الفرعية" },
                    { value: "minor-heading", description: "فئة العنوان الثانوي" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعنوان الفرعي",
                values: [
                    { value: "sub-detail-1", description: "معرف التفاصيل الفرعية" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- h5 --------
    {
        tag: "h5",
        description: "عنوان فرعي تحت h4، يستخدم لتفاصيل أكثر تحديداً في النصوص الطويلة، يساعد في تقسيم المعلومات المعقدة",
        attributes: [
            {
                name: "style",
                description: "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
                values: [
                    { value: "font-size: 1em;", description: "حجم الخط 1em" },
                    { value: "font-weight: bold;", description: "خط عريض" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للعنوان الفرعي",
                values: [
                    { value: "minor-detail", description: "فئة التفاصيل البسيطة" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعنوان الفرعي",
                values: [
                    { value: "minor-1", description: "معرف التفاصيل البسيطة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- h6 --------
    {
        tag: "h6",
        description: "أدنى مستوى من العناوين، يستخدم للتفاصيل الدقيقة جداً أو الحواشي داخل النص، يكمل التسلسل الهرمي للعناوين",
        attributes: [
            {
                name: "style",
                description: "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
                values: [
                    { value: "font-size: 0.85em;", description: "حجم الخط 0.85em" },
                    { value: "color: #999;", description: "لون النص رمادي فاتح" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للعنوان الفرعي",
                values: [
                    { value: "footnote", description: "فئة الحاشية" },
                    { value: "tiny-heading", description: "فئة العنوان الصغير" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعنوان الفرعي",
                values: [
                    { value: "footnote-1", description: "معرف الحاشية الأولى" }
                ],
                freeInput: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.layoutData = layoutData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = layoutData;
}