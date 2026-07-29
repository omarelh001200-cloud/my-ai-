// ============================================================
// interactive-data.js
// العناصر التفاعلية (طي المحتوى، نوافذ الحوار)
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const interactiveData = [
    // ============================================================
    // عناصر تفاعلية
    // ============================================================

    // -------- details --------
    {
        tag: "details",
        description: "ينشئ عنصراً تفاعلياً يمكن فتحه وإغلاقه، يخفي محتوى إضافياً حتى يضغط المستخدم لعرضه، مفيد للأسئلة الشائعة",
        attributes: [
            {
                name: "open",
                description: "يجعل محتوى details مفتوحاً وظاهراً عند تحميل الصفحة بدلاً من كونه مطوياً",
                values: [
                    { value: "", description: "يفتح المحتوى تلقائياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "name",
                description: "يحدد مجموعة من عناصر details، عند فتح واحد في المجموعة يغلق الآخر تلقائياً، ينظم المحتوى القابل للطي",
                values: [
                    { value: "faq", description: "مجموعة الأسئلة الشائعة" },
                    { value: "accordion", description: "مجموعة الأكورديون" },
                    { value: "group1", description: "اسم المجموعة" },
                    { value: "sections", description: "مجموعة الأقسام" },
                    { value: "tabs", description: "مجموعة التبويبات" }
                ],
                freeInput: true
            },
            {
                name: "style",
                description: "يضيف تنسيقات CSS مباشرة لعنصر details، يتحكم في مظهره ومظهر محتواه",
                values: [
                    { value: "border: 1px solid #ccc;", description: "إطار رمادي حول العنصر" },
                    { value: "padding: 10px;", description: "حشوة داخلية 10 بكسل" },
                    { value: "background-color: #f9f9f9;", description: "خلفية رمادية فاتحة" },
                    { value: "border-radius: 5px;", description: "زوايا مدورة" },
                    { value: "margin: 10px 0;", description: "هامش علوي وسفلي 10 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) لعنصر details لتطبيق تنسيقات CSS محددة",
                values: [
                    { value: "faq-item", description: "فئة عنصر الأسئلة الشائعة" },
                    { value: "accordion-item", description: "فئة عنصر الأكورديون" },
                    { value: "collapsible", description: "فئة العنصر القابل للطي" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً لعنصر details يمكن استهدافه بواسطة CSS أو JavaScript",
                values: [
                    { value: "faq-1", description: "معرف السؤال الأول" },
                    { value: "accordion-1", description: "معرف الأكورديون الأول" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- summary --------
    {
        tag: "summary",
        description: "يحدد العنوان الظاهر دائماً لعنصر details، عند النقر عليه يفتح أو يغلق المحتوى المخفي",
        attributes: [
            {
                name: "style",
                description: "يضيف تنسيقات CSS مباشرة لعنوان summary، يتحكم في مظهر العنوان القابل للنقر",
                values: [
                    { value: "font-weight: bold;", description: "خط عريض" },
                    { value: "color: #333;", description: "لون النص رمادي غامق" },
                    { value: "cursor: pointer;", description: "مؤشر الفأرة على شكل يد" },
                    { value: "padding: 8px;", description: "حشوة داخلية 8 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) لعنوان summary لتطبيق تنسيقات CSS محددة",
                values: [
                    { value: "faq-title", description: "فئة عنوان السؤال" },
                    { value: "accordion-title", description: "فئة عنوان الأكورديون" },
                    { value: "collapsible-title", description: "فئة العنوان القابل للطي" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً لعنوان summary يمكن استهدافه بواسطة CSS أو JavaScript",
                values: [
                    { value: "faq-title-1", description: "معرف عنوان السؤال الأول" },
                    { value: "accordion-title-1", description: "معرف عنوان الأكورديون الأول" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- dialog --------
    {
        tag: "dialog",
        description: "ينشئ نافذة حوار أو نافذة منبثقة للتفاعل مع المستخدم، تظهر فوق محتوى الصفحة لجذب الانتباه",
        attributes: [
            {
                name: "open",
                description: "يجعل نافذة الحوار مفتوحة وظاهرة عند تحميل الصفحة، تظهر فوراً للمستخدم",
                values: [
                    { value: "", description: "يفتح النافذة تلقائياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "closedby",
                description: "يحدد الطرق المسموحة لإغلاق نافذة الحوار من طرف المستخدم، مثل الضغط خارجها أو زر Escape",
                values: [
                    { value: "any", description: "يسمح بالإغلاق بالنقر خارج النافذة أو بزر Escape" },
                    { value: "closerequest", description: "يسمح بالإغلاق فقط بزر Escape أو طلب إغلاق صريح، وليس بالنقر خارجها" },
                    { value: "none", description: "لا يسمح بإغلاق النافذة إلا عبر كود JavaScript صريح" }
                ]
            },
            {
                name: "role",
                description: "يحدد دور نافذة الحوار للمساعدة في إمكانية الوصول لقارئات الشاشة",
                values: [
                    { value: "dialog", description: "دور حوار عادي (الافتراضي)" },
                    { value: "alertdialog", description: "دور حوار تنبيهي لجذب الانتباه" },
                    { value: "alert", description: "دور تنبيهي" }
                ]
            },
            {
                name: "aria-label",
                description: "يضيف اسماً لنافذة الحوار لمساعدة قارئات الشاشة في التعرف على محتواها",
                values: [
                    { value: "تأكيد الحذف", description: "اسم نافذة تأكيد الحذف" },
                    { value: "تسجيل الدخول", description: "اسم نافذة تسجيل الدخول" },
                    { value: "تنبيه", description: "اسم نافذة التنبيه" },
                    { value: "نموذج الاتصال", description: "اسم نافذة نموذج الاتصال" },
                    { value: "الإشعار", description: "اسم نافذة الإشعار" }
                ],
                freeInput: true
            },
            {
                name: "aria-labelledby",
                description: "يربط نافذة الحوار بعنوان تعريفها بواسطة معرف (id) لقارئات الشاشة",
                values: [
                    { value: "dialog-title", description: "معرف عنوان نافذة الحوار" }
                ],
                freeInput: true
            },
            {
                name: "aria-describedby",
                description: "يربط نافذة الحوار بوصفها لتوضيح المحتوى لقارئات الشاشة",
                values: [
                    { value: "dialog-description", description: "معرف وصف نافذة الحوار" }
                ],
                freeInput: true
            },
            {
                name: "aria-modal",
                description: "يحدد أن نافذة الحوار تمنع التفاعل مع بقية الصفحة أثناء ظهورها (نافذة مشروطة)",
                values: [
                    { value: "true", description: "نافذة مشروطة (تمنع التفاعل مع الخلفية)" },
                    { value: "false", description: "نافذة غير مشروطة (تسمح بالتفاعل مع الخلفية)" }
                ]
            },
            {
                name: "style",
                description: "يضيف تنسيقات CSS مباشرة لنافذة الحوار، يتحكم في مظهرها وموقعها",
                values: [
                    { value: "border: 2px solid #333;", description: "إطار سميك حول النافذة" },
                    { value: "border-radius: 8px;", description: "زوايا مدورة" },
                    { value: "padding: 20px;", description: "حشوة داخلية 20 بكسل" },
                    { value: "background-color: white;", description: "خلفية بيضاء" },
                    { value: "box-shadow: 0 4px 8px rgba(0,0,0,0.2);", description: "ظل ناعم" },
                    { value: "width: 400px;", description: "عرض 400 بكسل" },
                    { value: "max-width: 90%;", description: "أقصى عرض 90%" },
                    { value: "margin: auto;", description: "توسيط النافذة" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) لنافذة الحوار لتطبيق تنسيقات CSS محددة",
                values: [
                    { value: "modal", description: "فئة النافذة المشروطة" },
                    { value: "popup", description: "فئة النافذة المنبثقة" },
                    { value: "dialog-box", description: "فئة مربع الحوار" },
                    { value: "alert-box", description: "فئة صندوق التنبيه" },
                    { value: "confirm-dialog", description: "فئة نافذة التأكيد" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً لنافذة الحوار يمكن استهدافه بواسطة CSS أو JavaScript",
                values: [
                    { value: "confirm-dialog", description: "معرف نافذة التأكيد" },
                    { value: "login-dialog", description: "معرف نافذة تسجيل الدخول" },
                    { value: "alert-dialog", description: "معرف نافذة التنبيه" },
                    { value: "modal-dialog", description: "معرف النافذة المشروطة" }
                ],
                freeInput: true
            },
            {
                name: "returnvalue",
                description: "يخزن قيمة ترجعية من نافذة الحوار بعد إغلاقها، تستخدم في JavaScript",
                values: [
                    { value: "confirmed", description: "قيمة التأكيد" },
                    { value: "cancelled", description: "قيمة الإلغاء" }
                ],
                freeInput: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.interactiveData = interactiveData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = interactiveData;
}