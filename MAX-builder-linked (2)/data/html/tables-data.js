// ============================================================
// tables-data.js
// عناصر الجداول وبياناتها
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const tablesData = [
    // ============================================================
    // عناصر الجداول الأساسية
    // ============================================================

    // -------- table --------
    {
        tag: "table",
        description: "ينشئ جدولاً لعرض البيانات بشكل منظم في صفوف وأعمدة، يسهل مقارنة المعلومات وقراءتها",
        attributes: [
            {
                name: "border",
                description: "يضيف حدوداً حول الجدول وخلاياه، يظهرها بشكل واضح (يفضل استخدام CSS بدلاً منه)",
                values: [
                    { value: "0", description: "بدون حدود (افتراضي)" },
                    { value: "1", description: "يظهر حدوداً رفيعة" },
                    { value: "2", description: "يظهر حدوداً متوسطة" },
                    { value: "3", description: "يظهر حدوداً سميكة" },
                    { value: "5", description: "يظهر حدوداً سميكة جداً" },
                    { value: "10", description: "يظهر حدوداً سميكة جداً" }
                ],
                freeInput: true
            },
            {
                name: "summary",
                description: "يضيف وصفاً نصياً للجدول للمكفوفين، يساعد في فهم محتوى الجدول دون رؤيته",
                values: [
                    { value: "جدول يوضح المبيعات الشهرية", description: "وصف الجدول" },
                    { value: "جدول يوضح نتائج الطلاب", description: "وصف الجدول" },
                    { value: "جدول يوضح الإيرادات السنوية", description: "وصف الجدول" },
                    { value: "جدول مقارنة بين المنتجات", description: "وصف الجدول" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الجدول بالبكسل أو النسبة المئوية، يتحكم في حجم الجدول المعروض",
                values: [
                    { value: "100%", description: "عرض كامل للصفحة" },
                    { value: "75%", description: "ثلاثة أرباع عرض الصفحة" },
                    { value: "50%", description: "نصف عرض الصفحة" },
                    { value: "25%", description: "ربع عرض الصفحة" },
                    { value: "800", description: "عرض 800 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "auto", description: "عرض تلقائي حسب المحتوى" }
                ],
                freeInput: true
            },
            {
                name: "cellpadding",
                description: "يحدد المسافة الداخلية بين حدود الخلية ومحتواها بالبكسل (يفضل استخدام CSS بدلاً منه)",
                values: [
                    { value: "0", description: "بدون مسافة داخلية" },
                    { value: "1", description: "مسافة داخلية صغيرة جداً" },
                    { value: "2", description: "مسافة داخلية صغيرة" },
                    { value: "3", description: "مسافة داخلية صغيرة" },
                    { value: "4", description: "مسافة داخلية صغيرة" },
                    { value: "5", description: "مسافة داخلية صغيرة" },
                    { value: "6", description: "مسافة داخلية متوسطة" },
                    { value: "7", description: "مسافة داخلية متوسطة" },
                    { value: "8", description: "مسافة داخلية متوسطة" },
                    { value: "9", description: "مسافة داخلية متوسطة" },
                    { value: "10", description: "مسافة داخلية متوسطة" },
                    { value: "15", description: "مسافة داخلية كبيرة" },
                    { value: "20", description: "مسافة داخلية كبيرة جداً" }
                ],
                freeInput: true
            },
            {
                name: "cellspacing",
                description: "يحدد المسافة بين الخلايا المتجاورة بالبكسل (يفضل استخدام CSS بدلاً منه)",
                values: [
                    { value: "0", description: "بدون مسافة بين الخلايا" },
                    { value: "1", description: "مسافة صغيرة جداً بين الخلايا" },
                    { value: "2", description: "مسافة صغيرة بين الخلايا" },
                    { value: "3", description: "مسافة صغيرة بين الخلايا" },
                    { value: "4", description: "مسافة صغيرة بين الخلايا" },
                    { value: "5", description: "مسافة صغيرة بين الخلايا" },
                    { value: "6", description: "مسافة متوسطة بين الخلايا" },
                    { value: "7", description: "مسافة متوسطة بين الخلايا" },
                    { value: "8", description: "مسافة متوسطة بين الخلايا" },
                    { value: "9", description: "مسافة متوسطة بين الخلايا" },
                    { value: "10", description: "مسافة كبيرة بين الخلايا" },
                    { value: "15", description: "مسافة كبيرة بين الخلايا" },
                    { value: "20", description: "مسافة كبيرة جداً بين الخلايا" }
                ],
                freeInput: true
            },
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة الجدول كاملاً بالنسبة للنص المحيط به، استُبدلت بخاصية float أو margin في CSS",
                values: [
                    { value: "left", description: "يحاذي الجدول لليسار ويلتف النص حوله من اليمين" },
                    { value: "center", description: "يوسط الجدول في الصفحة" },
                    { value: "right", description: "يحاذي الجدول لليمين ويلتف النص حوله من اليسار" }
                ]
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة كانت تحدد لون خلفية الجدول كاملاً، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي فاتح" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#f0f0f0", description: "لون رمادي فاتح جداً" },
                    { value: "#e0e0e0", description: "لون رمادي فاتح" },
                    { value: "#d0d0d0", description: "لون رمادي" },
                    { value: "#c0c0c0", description: "لون رمادي" },
                    { value: "#808080", description: "لون رمادي" },
                    { value: "#ffcccc", description: "لون أحمر فاتح" },
                    { value: "#ccffcc", description: "لون أخضر فاتح" },
                    { value: "#ccccff", description: "لون أزرق فاتح" },
                    { value: "#ffffcc", description: "لون أصفر فاتح" },
                    { value: "#ffccff", description: "لون وردي فاتح" },
                    { value: "#ccffff", description: "لون سماوي فاتح" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "frame",
                description: "خاصية قديمة كانت تحدد أي جوانب الإطار الخارجي للجدول تظهر، استُبدلت بخاصية border في CSS",
                values: [
                    { value: "box", description: "يظهر الإطار من جميع الجهات" },
                    { value: "above", description: "يظهر الإطار من الأعلى فقط" },
                    { value: "below", description: "يظهر الإطار من الأسفل فقط" },
                    { value: "hsides", description: "يظهر الإطار من الأعلى والأسفل" },
                    { value: "vsides", description: "يظهر الإطار من اليمين واليسار" },
                    { value: "lhs", description: "يظهر الإطار من الجانب الأيسر فقط" },
                    { value: "rhs", description: "يظهر الإطار من الجانب الأيمن فقط" },
                    { value: "border", description: "يظهر الإطار من جميع الجهات" },
                    { value: "void", description: "لا يظهر أي إطار خارجي" }
                ]
            },
            {
                name: "rules",
                description: "خاصية قديمة كانت تحدد أي الخطوط الداخلية بين الخلايا تظهر، استُبدلت بخاصية border على th/td في CSS",
                values: [
                    { value: "all", description: "يظهر خطوطاً بين جميع الصفوف والأعمدة" },
                    { value: "rows", description: "يظهر خطوطاً أفقية بين الصفوف فقط" },
                    { value: "cols", description: "يظهر خطوطاً عمودية بين الأعمدة فقط" },
                    { value: "groups", description: "يظهر خطوطاً بين مجموعات الصفوف والأعمدة" },
                    { value: "none", description: "لا يظهر أي خطوط داخلية" }
                ]
            },
            {
                name: "bordercolor",
                description: "خاصية قديمة غير معيارية (مدعومة جزئياً) كانت تحدد لون حدود الجدول، استُبدلت بخاصية border-color في CSS",
                values: [
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي فاتح" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "خاصية قديمة كانت تحدد ارتفاع الجدول بالبكسل أو النسبة المئوية، استُبدلت بخاصية height في CSS",
                values: [
                    { value: "100%", description: "ارتفاع كامل للصفحة" },
                    { value: "75%", description: "ثلاثة أرباع ارتفاع الصفحة" },
                    { value: "50%", description: "نصف ارتفاع الصفحة" },
                    { value: "25%", description: "ربع ارتفاع الصفحة" },
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "200", description: "ارتفاع 200 بكسل" },
                    { value: "300", description: "ارتفاع 300 بكسل" },
                    { value: "400", description: "ارتفاع 400 بكسل" },
                    { value: "500", description: "ارتفاع 500 بكسل" },
                    { value: "600", description: "ارتفاع 600 بكسل" },
                    { value: "700", description: "ارتفاع 700 بكسل" },
                    { value: "800", description: "ارتفاع 800 بكسل" },
                    { value: "auto", description: "ارتفاع تلقائي حسب المحتوى" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- caption --------
    {
        tag: "caption",
        description: "يضيف عنواناً وصفياً للجدول يظهر في أعلاه، يوضح موضوع الجدول ومحتواه للقارئ",
        attributes: [
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد مكان ظهور العنوان بالنسبة للجدول، استُبدلت بخاصية caption-side في CSS",
                values: [
                    { value: "top", description: "يظهر العنوان أعلى الجدول (الافتراضي)" },
                    { value: "bottom", description: "يظهر العنوان أسفل الجدول" },
                    { value: "left", description: "يظهر العنوان على يسار الجدول" },
                    { value: "right", description: "يظهر العنوان على يمين الجدول" }
                ]
            }
        ]
    },

    // -------- thead --------
    {
        tag: "thead",
        description: "يجمع صفوف رأس الجدول في مجموعة واحدة، يحدد عناوين الأعمدة التي تظهر في أعلى الجدول",
        attributes: [
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل كل خلايا هذه المجموعة، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلايا، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة كانت تحدد لون خلفية جميع خلايا هذه المجموعة، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي فاتح" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#eeeeee", description: "لون رمادي فاتح جداً" },
                    { value: "#dddddd", description: "لون رمادي فاتح" },
                    { value: "#eeeeee", description: "لون رمادي فاتح جداً" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- tbody --------
    {
        tag: "tbody",
        description: "يجمع صفوف البيانات الرئيسية للجدول، يحتوي على المحتوى الفعلي للبيانات المعروضة",
        attributes: [
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل كل خلايا هذه المجموعة، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلايا، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة كانت تحدد لون خلفية جميع خلايا هذه المجموعة، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي فاتح" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- tfoot --------
    {
        tag: "tfoot",
        description: "يجمع صفوف الملخص في نهاية الجدول، يعرض إجماليات أو نتائج حسابية للبيانات",
        attributes: [
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل كل خلايا هذه المجموعة، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلايا، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة كانت تحدد لون خلفية جميع خلايا هذه المجموعة، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي فاتح" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#dddddd", description: "لون رمادي فاتح" },
                    { value: "#eeeeee", description: "لون رمادي فاتح جداً" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- tr --------
    {
        tag: "tr",
        description: "يمثل صفاً واحداً من الخلايا داخل الجدول، يحتوي على بيانات صف واحد من البيانات",
        attributes: [
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل خلايا هذا الصف، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل خلايا هذا الصف، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة كانت تحدد لون خلفية هذا الصف بالكامل، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي فاتح" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#f9f9f9", description: "لون رمادي فاتح جداً" },
                    { value: "#f5f5f5", description: "لون رمادي فاتح جداً" },
                    { value: "#f0f0f0", description: "لون رمادي فاتح جداً" },
                    { value: "#e8e8e8", description: "لون رمادي فاتح" },
                    { value: "#e0e0e0", description: "لون رمادي فاتح" },
                    { value: "#d8d8d8", description: "لون رمادي" },
                    { value: "#d0d0d0", description: "لون رمادي" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- th --------
    {
        tag: "th",
        description: "يمثل خلية عنوان لعمود أو صف في الجدول، يظهر بخط عريض ومتمركز لتمييزه عن بيانات الجدول",
        attributes: [
            {
                name: "scope",
                description: "يحدد نطاق خلية العنوان، يوضح ما إذا كانت عنواناً لعمود أو صف أو مجموعة، يساعد المكفوفين",
                values: [
                    { value: "col", description: "عنوان لعمود كامل" },
                    { value: "row", description: "عنوان لصف كامل" },
                    { value: "colgroup", description: "عنوان لمجموعة أعمدة" },
                    { value: "rowgroup", description: "عنوان لمجموعة صفوف" },
                    { value: "auto", description: "تحديد تلقائي" }
                ]
            },
            {
                name: "colspan",
                description: "يوسع الخلية لتغطي عدداً من الأعمدة، يدمج خلايا عدة أعمدة في خلية واحدة",
                values: [
                    { value: "1", description: "يمتد على عمود واحد (الافتراضي)" },
                    { value: "2", description: "يمتد على عمودين" },
                    { value: "3", description: "يمتد على 3 أعمدة" },
                    { value: "4", description: "يمتد على 4 أعمدة" },
                    { value: "5", description: "يمتد على 5 أعمدة" },
                    { value: "6", description: "يمتد على 6 أعمدة" },
                    { value: "7", description: "يمتد على 7 أعمدة" },
                    { value: "8", description: "يمتد على 8 أعمدة" },
                    { value: "9", description: "يمتد على 9 أعمدة" },
                    { value: "10", description: "يمتد على 10 أعمدة" }
                ],
                freeInput: true
            },
            {
                name: "rowspan",
                description: "يوسع الخلية لتغطي عدداً من الصفوف، يدمج خلايا عدة صفوف في خلية واحدة",
                values: [
                    { value: "1", description: "يمتد على صف واحد (الافتراضي)" },
                    { value: "2", description: "يمتد على صفين" },
                    { value: "3", description: "يمتد على 3 صفوف" },
                    { value: "4", description: "يمتد على 4 صفوف" },
                    { value: "5", description: "يمتد على 5 صفوف" },
                    { value: "6", description: "يمتد على 6 صفوف" },
                    { value: "7", description: "يمتد على 7 صفوف" },
                    { value: "8", description: "يمتد على 8 صفوف" },
                    { value: "9", description: "يمتد على 9 صفوف" },
                    { value: "10", description: "يمتد على 10 صفوف" }
                ],
                freeInput: true
            },
            {
                name: "abbr",
                description: "يضيف نسخة مختصرة من نص العنوان الطويل، تُستخدمها قارئات الشاشة بدل النص الكامل عند تكرار ذكر العنوان",
                values: [
                    { value: "الإيرادات", description: "نسخة مختصرة لعنوان طويل مثل 'إجمالي الإيرادات الشهرية بالدولار'" },
                    { value: "المبيعات", description: "نسخة مختصرة لعنوان طويل مثل 'إجمالي المبيعات السنوية'" },
                    { value: "الربح", description: "نسخة مختصرة لعنوان طويل مثل 'صافي الربح بعد الخصومات'" },
                    { value: "الخسارة", description: "نسخة مختصرة لعنوان طويل مثل 'إجمالي الخسائر'" },
                    { value: "المجموع", description: "نسخة مختصرة لعنوان طويل مثل 'المجموع الكلي'" },
                    { value: "المتوسط", description: "نسخة مختصرة لعنوان طويل مثل 'المتوسط الحسابي'" }
                ],
                freeInput: true
            },
            {
                name: "headers",
                description: "يربط خلية العنوان بعناوين أخرى تعلوها في الجداول المعقدة متعددة المستويات، يوضح التسلسل الهرمي للمكفوفين",
                values: [
                    { value: "header1 header2", description: "معرفات العناوين الأعلى في التسلسل" },
                    { value: "id1 id2 id3", description: "معرفات متعددة للعناوين" }
                ],
                freeInput: true
            },
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل الخلية، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي لخلايا العنوان)" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلية، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة كانت تحدد لون خلفية الخلية، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي" },
                    { value: "#cccccc", description: "لون رمادي" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#eeeeee", description: "لون رمادي فاتح جداً" },
                    { value: "#dddddd", description: "لون رمادي فاتح" },
                    { value: "#d0d0d0", description: "لون رمادي" },
                    { value: "#c0c0c0", description: "لون رمادي" },
                    { value: "#b0b0b0", description: "لون رمادي" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "خاصية قديمة كانت تحدد عرض الخلية بالبكسل أو النسبة المئوية، استُبدلت بخاصية width في CSS",
                values: [
                    { value: "auto", description: "عرض تلقائي حسب المحتوى" },
                    { value: "10%", description: "عرض 10% من الجدول" },
                    { value: "15%", description: "عرض 15% من الجدول" },
                    { value: "20%", description: "عرض 20% من الجدول" },
                    { value: "25%", description: "عرض 25% من الجدول" },
                    { value: "30%", description: "عرض 30% من الجدول" },
                    { value: "33%", description: "عرض 33% من الجدول" },
                    { value: "40%", description: "عرض 40% من الجدول" },
                    { value: "50%", description: "عرض 50% من الجدول" },
                    { value: "60%", description: "عرض 60% من الجدول" },
                    { value: "66%", description: "عرض 66% من الجدول" },
                    { value: "70%", description: "عرض 70% من الجدول" },
                    { value: "75%", description: "عرض 75% من الجدول" },
                    { value: "80%", description: "عرض 80% من الجدول" },
                    { value: "85%", description: "عرض 85% من الجدول" },
                    { value: "90%", description: "عرض 90% من الجدول" },
                    { value: "95%", description: "عرض 95% من الجدول" },
                    { value: "100%", description: "عرض كامل للجدول" },
                    { value: "10", description: "عرض 10 بكسل" },
                    { value: "20", description: "عرض 20 بكسل" },
                    { value: "30", description: "عرض 30 بكسل" },
                    { value: "40", description: "عرض 40 بكسل" },
                    { value: "50", description: "عرض 50 بكسل" },
                    { value: "60", description: "عرض 60 بكسل" },
                    { value: "70", description: "عرض 70 بكسل" },
                    { value: "80", description: "عرض 80 بكسل" },
                    { value: "90", description: "عرض 90 بكسل" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "120", description: "عرض 120 بكسل" },
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "250", description: "عرض 250 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "350", description: "عرض 350 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "خاصية قديمة كانت تحدد ارتفاع الخلية بالبكسل، استُبدلت بخاصية height في CSS",
                values: [
                    { value: "auto", description: "ارتفاع تلقائي حسب المحتوى" },
                    { value: "10", description: "ارتفاع 10 بكسل" },
                    { value: "15", description: "ارتفاع 15 بكسل" },
                    { value: "20", description: "ارتفاع 20 بكسل" },
                    { value: "25", description: "ارتفاع 25 بكسل" },
                    { value: "30", description: "ارتفاع 30 بكسل" },
                    { value: "35", description: "ارتفاع 35 بكسل" },
                    { value: "40", description: "ارتفاع 40 بكسل" },
                    { value: "45", description: "ارتفاع 45 بكسل" },
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "60", description: "ارتفاع 60 بكسل" },
                    { value: "70", description: "ارتفاع 70 بكسل" },
                    { value: "80", description: "ارتفاع 80 بكسل" },
                    { value: "90", description: "ارتفاع 90 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "nowrap",
                description: "خاصية قديمة كانت تمنع التفاف النص داخل الخلية على عدة أسطر، استُبدلت بخاصية white-space:nowrap في CSS",
                values: [
                    { value: "", description: "يمنع التفاف النص (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // -------- td --------
    {
        tag: "td",
        description: "يمثل خلية بيانات واحدة داخل صف الجدول، يحمل القيمة الفعلية للبيانات المعروضة",
        attributes: [
            {
                name: "colspan",
                description: "يوسع الخلية لتغطي عدداً من الأعمدة، يدمج خلايا عدة أعمدة في خلية واحدة",
                values: [
                    { value: "1", description: "يمتد على عمود واحد (الافتراضي)" },
                    { value: "2", description: "يمتد على عمودين" },
                    { value: "3", description: "يمتد على 3 أعمدة" },
                    { value: "4", description: "يمتد على 4 أعمدة" },
                    { value: "5", description: "يمتد على 5 أعمدة" },
                    { value: "6", description: "يمتد على 6 أعمدة" },
                    { value: "7", description: "يمتد على 7 أعمدة" },
                    { value: "8", description: "يمتد على 8 أعمدة" },
                    { value: "9", description: "يمتد على 9 أعمدة" },
                    { value: "10", description: "يمتد على 10 أعمدة" }
                ],
                freeInput: true
            },
            {
                name: "rowspan",
                description: "يوسع الخلية لتغطي عدداً من الصفوف، يدمج خلايا عدة صفوف في خلية واحدة",
                values: [
                    { value: "1", description: "يمتد على صف واحد (الافتراضي)" },
                    { value: "2", description: "يمتد على صفين" },
                    { value: "3", description: "يمتد على 3 صفوف" },
                    { value: "4", description: "يمتد على 4 صفوف" },
                    { value: "5", description: "يمتد على 5 صفوف" },
                    { value: "6", description: "يمتد على 6 صفوف" },
                    { value: "7", description: "يمتد على 7 صفوف" },
                    { value: "8", description: "يمتد على 8 صفوف" },
                    { value: "9", description: "يمتد على 9 صفوف" },
                    { value: "10", description: "يمتد على 10 صفوف" }
                ],
                freeInput: true
            },
            {
                name: "headers",
                description: "يربط خلية البيانات برأس الجدول المناسب لها، يساعد المكفوفين في فهم العلاقة",
                values: [
                    { value: "header1 header2", description: "معرفات رؤوس الأعمدة" },
                    { value: "id1 id2 id3", description: "معرفات متعددة للرؤوس" }
                ],
                freeInput: true
            },
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل الخلية، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار (الافتراضي لخلايا البيانات)" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلية، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة كانت تحدد لون خلفية الخلية، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#ffff99", description: "لون أصفر فاتح" },
                    { value: "#ffffcc", description: "لون أصفر فاتح جداً" },
                    { value: "#ffcccc", description: "لون أحمر فاتح" },
                    { value: "#ccffcc", description: "لون أخضر فاتح" },
                    { value: "#ccccff", description: "لون أزرق فاتح" },
                    { value: "#ffccff", description: "لون وردي فاتح" },
                    { value: "#ccffff", description: "لون سماوي فاتح" },
                    { value: "#ffebcd", description: "لون بيج" },
                    { value: "#f5f5dc", description: "لون بيج فاتح" },
                    { value: "#faf0e6", description: "لون عاجي" },
                    { value: "#fdf5e6", description: "لون قشدي" },
                    { value: "#fff8dc", description: "لون كريمي" },
                    { value: "#ffffe0", description: "لون أصفر فاتح جداً" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "خاصية قديمة كانت تحدد عرض الخلية بالبكسل أو النسبة المئوية، استُبدلت بخاصية width في CSS",
                values: [
                    { value: "auto", description: "عرض تلقائي حسب المحتوى" },
                    { value: "10%", description: "عرض 10% من الجدول" },
                    { value: "15%", description: "عرض 15% من الجدول" },
                    { value: "20%", description: "عرض 20% من الجدول" },
                    { value: "25%", description: "عرض 25% من الجدول" },
                    { value: "30%", description: "عرض 30% من الجدول" },
                    { value: "33%", description: "عرض 33% من الجدول" },
                    { value: "40%", description: "عرض 40% من الجدول" },
                    { value: "50%", description: "عرض 50% من الجدول" },
                    { value: "60%", description: "عرض 60% من الجدول" },
                    { value: "66%", description: "عرض 66% من الجدول" },
                    { value: "70%", description: "عرض 70% من الجدول" },
                    { value: "75%", description: "عرض 75% من الجدول" },
                    { value: "80%", description: "عرض 80% من الجدول" },
                    { value: "85%", description: "عرض 85% من الجدول" },
                    { value: "90%", description: "عرض 90% من الجدول" },
                    { value: "95%", description: "عرض 95% من الجدول" },
                    { value: "100%", description: "عرض كامل للجدول" },
                    { value: "10", description: "عرض 10 بكسل" },
                    { value: "20", description: "عرض 20 بكسل" },
                    { value: "30", description: "عرض 30 بكسل" },
                    { value: "40", description: "عرض 40 بكسل" },
                    { value: "50", description: "عرض 50 بكسل" },
                    { value: "60", description: "عرض 60 بكسل" },
                    { value: "70", description: "عرض 70 بكسل" },
                    { value: "80", description: "عرض 80 بكسل" },
                    { value: "90", description: "عرض 90 بكسل" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "120", description: "عرض 120 بكسل" },
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "250", description: "عرض 250 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "350", description: "عرض 350 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "خاصية قديمة كانت تحدد ارتفاع الخلية بالبكسل، استُبدلت بخاصية height في CSS",
                values: [
                    { value: "auto", description: "ارتفاع تلقائي حسب المحتوى" },
                    { value: "10", description: "ارتفاع 10 بكسل" },
                    { value: "15", description: "ارتفاع 15 بكسل" },
                    { value: "20", description: "ارتفاع 20 بكسل" },
                    { value: "25", description: "ارتفاع 25 بكسل" },
                    { value: "30", description: "ارتفاع 30 بكسل" },
                    { value: "35", description: "ارتفاع 35 بكسل" },
                    { value: "40", description: "ارتفاع 40 بكسل" },
                    { value: "45", description: "ارتفاع 45 بكسل" },
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "60", description: "ارتفاع 60 بكسل" },
                    { value: "70", description: "ارتفاع 70 بكسل" },
                    { value: "80", description: "ارتفاع 80 بكسل" },
                    { value: "90", description: "ارتفاع 90 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "nowrap",
                description: "خاصية قديمة كانت تمنع التفاف النص داخل الخلية على عدة أسطر، استُبدلت بخاصية white-space:nowrap في CSS",
                values: [
                    { value: "", description: "يمنع التفاف النص (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // -------- colgroup --------
    {
        tag: "colgroup",
        description: "يجمع مجموعة من الأعمدة لتطبيق تنسيق مشترك عليها، يحدد خصائص مجموعة أعمدة كاملة",
        attributes: [
            {
                name: "span",
                description: "يحدد عدد الأعمدة التي تشملها المجموعة، يطبق التنسيق على عدة أعمدة دفعة واحدة",
                values: [
                    { value: "1", description: "مجموعة من عمود واحد (الافتراضي)" },
                    { value: "2", description: "مجموعة من عمودين" },
                    { value: "3", description: "مجموعة من 3 أعمدة" },
                    { value: "4", description: "مجموعة من 4 أعمدة" },
                    { value: "5", description: "مجموعة من 5 أعمدة" },
                    { value: "6", description: "مجموعة من 6 أعمدة" },
                    { value: "7", description: "مجموعة من 7 أعمدة" },
                    { value: "8", description: "مجموعة من 8 أعمدة" },
                    { value: "9", description: "مجموعة من 9 أعمدة" },
                    { value: "10", description: "مجموعة من 10 أعمدة" }
                ],
                freeInput: true
            },
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً في كل خلايا أعمدة هذه المجموعة، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً في كل خلايا أعمدة هذه المجموعة، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "width",
                description: "خاصية قديمة كانت تحدد عرضاً موحداً لكل أعمدة هذه المجموعة، استُبدلت بتحديد width لكل عنصر col في CSS",
                values: [
                    { value: "auto", description: "عرض تلقائي" },
                    { value: "10%", description: "عرض 10% لكل عمود" },
                    { value: "15%", description: "عرض 15% لكل عمود" },
                    { value: "20%", description: "عرض 20% لكل عمود" },
                    { value: "25%", description: "عرض 25% لكل عمود" },
                    { value: "30%", description: "عرض 30% لكل عمود" },
                    { value: "33%", description: "عرض 33% لكل عمود" },
                    { value: "40%", description: "عرض 40% لكل عمود" },
                    { value: "50%", description: "عرض 50% لكل عمود" },
                    { value: "60%", description: "عرض 60% لكل عمود" },
                    { value: "66%", description: "عرض 66% لكل عمود" },
                    { value: "70%", description: "عرض 70% لكل عمود" },
                    { value: "75%", description: "عرض 75% لكل عمود" },
                    { value: "80%", description: "عرض 80% لكل عمود" },
                    { value: "85%", description: "عرض 85% لكل عمود" },
                    { value: "90%", description: "عرض 90% لكل عمود" },
                    { value: "95%", description: "عرض 95% لكل عمود" },
                    { value: "100%", description: "عرض كامل لكل عمود" },
                    { value: "10", description: "عرض 10 بكسل لكل عمود" },
                    { value: "20", description: "عرض 20 بكسل لكل عمود" },
                    { value: "30", description: "عرض 30 بكسل لكل عمود" },
                    { value: "40", description: "عرض 40 بكسل لكل عمود" },
                    { value: "50", description: "عرض 50 بكسل لكل عمود" },
                    { value: "60", description: "عرض 60 بكسل لكل عمود" },
                    { value: "70", description: "عرض 70 بكسل لكل عمود" },
                    { value: "80", description: "عرض 80 بكسل لكل عمود" },
                    { value: "90", description: "عرض 90 بكسل لكل عمود" },
                    { value: "100", description: "عرض 100 بكسل لكل عمود" },
                    { value: "120", description: "عرض 120 بكسل لكل عمود" },
                    { value: "150", description: "عرض 150 بكسل لكل عمود" },
                    { value: "200", description: "عرض 200 بكسل لكل عمود" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- col --------
    {
        tag: "col",
        description: "يحدد خصائص تنسيق لعمود واحد أو أكثر ضمن colgroup، يطبق أنماطاً على عمود محدد",
        attributes: [
            {
                name: "span",
                description: "يحدد عدد الأعمدة التي يشملها هذا العنصر، يطبق التنسيق على عدة أعمدة دفعة واحدة",
                values: [
                    { value: "1", description: "يشمل عمود واحد (الافتراضي)" },
                    { value: "2", description: "يشمل عمودين" },
                    { value: "3", description: "يشمل 3 أعمدة" },
                    { value: "4", description: "يشمل 4 أعمدة" },
                    { value: "5", description: "يشمل 5 أعمدة" },
                    { value: "6", description: "يشمل 6 أعمدة" },
                    { value: "7", description: "يشمل 7 أعمدة" },
                    { value: "8", description: "يشمل 8 أعمدة" },
                    { value: "9", description: "يشمل 9 أعمدة" },
                    { value: "10", description: "يشمل 10 أعمدة" }
                ],
                freeInput: true
            },
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة النص أفقياً في خلايا هذا العمود، استُبدلت بخاصية text-align في CSS",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "justify", description: "محاذاة بالتساوي" },
                    { value: "char", description: "محاذاة على حرف محدد" }
                ]
            },
            {
                name: "valign",
                description: "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً في خلايا هذا العمود، استُبدلت بخاصية vertical-align في CSS",
                values: [
                    { value: "top", description: "محاذاة لأعلى الخلية" },
                    { value: "middle", description: "محاذاة لمنتصف الخلية" },
                    { value: "bottom", description: "محاذاة لأسفل الخلية" },
                    { value: "baseline", description: "محاذاة على خط الأساس" }
                ]
            },
            {
                name: "width",
                description: "خاصية قديمة كانت تحدد عرض هذا العمود بالبكسل أو النسبة المئوية، استُبدلت بخاصية width في CSS",
                values: [
                    { value: "auto", description: "عرض تلقائي" },
                    { value: "10%", description: "عرض 10%" },
                    { value: "15%", description: "عرض 15%" },
                    { value: "20%", description: "عرض 20%" },
                    { value: "25%", description: "عرض 25%" },
                    { value: "30%", description: "عرض 30%" },
                    { value: "33%", description: "عرض 33%" },
                    { value: "40%", description: "عرض 40%" },
                    { value: "50%", description: "عرض 50%" },
                    { value: "60%", description: "عرض 60%" },
                    { value: "66%", description: "عرض 66%" },
                    { value: "70%", description: "عرض 70%" },
                    { value: "75%", description: "عرض 75%" },
                    { value: "80%", description: "عرض 80%" },
                    { value: "85%", description: "عرض 85%" },
                    { value: "90%", description: "عرض 90%" },
                    { value: "95%", description: "عرض 95%" },
                    { value: "100%", description: "عرض 100%" },
                    { value: "10", description: "عرض 10 بكسل" },
                    { value: "20", description: "عرض 20 بكسل" },
                    { value: "30", description: "عرض 30 بكسل" },
                    { value: "40", description: "عرض 40 بكسل" },
                    { value: "50", description: "عرض 50 بكسل" },
                    { value: "60", description: "عرض 60 بكسل" },
                    { value: "70", description: "عرض 70 بكسل" },
                    { value: "80", description: "عرض 80 بكسل" },
                    { value: "90", description: "عرض 90 بكسل" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "120", description: "عرض 120 بكسل" },
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "250", description: "عرض 250 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "350", description: "عرض 350 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "bgcolor",
                description: "خاصية قديمة غير معيارية كانت تحدد لون خلفية هذا العمود، استُبدلت بخاصية background-color في CSS",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#f5f5f5", description: "لون رمادي فاتح جداً" },
                    { value: "#eeeeee", description: "لون رمادي فاتح جداً" },
                    { value: "#e8e8e8", description: "لون رمادي فاتح" },
                    { value: "#e0e0e0", description: "لون رمادي فاتح" },
                    { value: "#d8d8d8", description: "لون رمادي" },
                    { value: "#d0d0d0", description: "لون رمادي" },
                    { value: "#c8c8c8", description: "لون رمادي" },
                    { value: "#c0c0c0", description: "لون رمادي" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.tablesData = tablesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tablesData;
}