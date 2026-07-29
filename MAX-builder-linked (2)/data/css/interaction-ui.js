// ============================================================
// interaction-ui.js
// خصائص التفاعل وواجهة المستخدم (Interaction & UI) في CSS
// تتحكم في سلوك العناصر مع المستخدم مثل المؤشر، التمرير، اللمس، والاختيار
// ============================================================

const interactionUIData = [
    // ============================================================
    // 1. cursor (شكل المؤشر)
    // ============================================================
    {
        tag: "cursor",
        description: "يحدد شكل مؤشر الفأرة عند تمريره فوق العنصر، يساعد في إيصال وظيفة العنصر للمستخدم",
        properties: [
            {
                name: "cursor",
                description: "الخاصية الرئيسية لتحديد شكل المؤشر عند تمرير الماوس فوق العنصر",
                values: [
                    // المؤشرات الأساسية
                    { value: "auto", description: "يحدد المتصفح الشكل المناسب حسب السياق - القيمة الافتراضية" },
                    { value: "default", description: "مؤشر عادي (سهم) - يستخدم لمعظم العناصر" },
                    { value: "none", description: "يخفي المؤشر تماماً - مفيد للشاشات الكاملة والفيديوهات" },
                    
                    // المؤشرات التفاعلية
                    { value: "pointer", description: "يد (تشير إلى رابط قابل للنقر) - يستخدم للروابط والأزرار" },
                    { value: "text", description: "مؤشر نص (I-beam) - يستخدم لحقول النص والمناطق القابلة للكتابة" },
                    { value: "wait", description: "ساعة رملية أو دوران (في انتظار التحميل) - يشير إلى عملية جارية" },
                    { value: "progress", description: "سهم مع ساعة صغيرة (خلفية) - عملية جارية لكن يمكن التفاعل" },
                    { value: "crosshair", description: "تقاطع (+) - يستخدم للاختيار الدقيق" },
                    { value: "move", description: "أسهم متقاطعة (للنقل) - يشير إلى إمكانية السحب" },
                    { value: "not-allowed", description: "دائرة بخط مائل (ممنوع) - يشير إلى عدم صلاحية الإجراء" },
                    { value: "no-drop", description: "يد مع دائرة ممنوعة - يشير إلى عدم إمكانية الإسقاط" },
                    
                    // مؤشرات السحب
                    { value: "grab", description: "يد مفتوحة (للإمساك) - يشير إلى إمكانية الإمساك بالسحب" },
                    { value: "grabbing", description: "يد مغلقة (للسحب) - يشير إلى أن العنصر يُسحب حالياً" },
                    
                    // مؤشرات التكبير
                    { value: "zoom-in", description: "عدسة مكبرة مع علامة + - يشير إلى إمكانية التكبير" },
                    { value: "zoom-out", description: "عدسة مكبرة مع علامة - - يشير إلى إمكانية التصغير" },
                    
                    // مؤشرات متنوعة
                    { value: "help", description: "سهم مع علامة استفهام - يشير إلى وجود مساعدة أو معلومات" },
                    { value: "copy", description: "سهم مع علامة + (لنسخ) - يشير إلى إمكانية النسخ" },
                    { value: "alias", description: "سهم مع منحنى (لإنشاء اختصار) - يشير إلى إنشاء اختصار" },
                    { value: "context-menu", description: "سهم مع قائمة صغيرة - يشير إلى وجود قائمة سياقية" },
                    { value: "cell", description: "مؤشر جدول (اختيار خلية) - يستخدم في الجداول" },
                    
                    // مؤشرات تغيير الحجم - اتجاه واحد
                    { value: "e-resize", description: "سهم إلى اليمين - تغيير الحجم من الشرق" },
                    { value: "w-resize", description: "سهم إلى اليسار - تغيير الحجم من الغرب" },
                    { value: "n-resize", description: "سهم إلى الأعلى - تغيير الحجم من الشمال" },
                    { value: "s-resize", description: "سهم إلى الأسفل - تغيير الحجم من الجنوب" },
                    { value: "ne-resize", description: "سهم إلى أعلى اليمين - تغيير الحجم من الشمال الشرقي" },
                    { value: "nw-resize", description: "سهم إلى أعلى اليسار - تغيير الحجم من الشمال الغربي" },
                    { value: "se-resize", description: "سهم إلى أسفل اليمين - تغيير الحجم من الجنوب الشرقي" },
                    { value: "sw-resize", description: "سهم إلى أسفل اليسار - تغيير الحجم من الجنوب الغربي" },
                    
                    // مؤشرات تغيير الحجم - اتجاهان
                    { value: "ew-resize", description: "سهمان يمين ويسار - تغيير الحجم أفقياً" },
                    { value: "ns-resize", description: "سهمان أعلى وأسفل - تغيير الحجم عمودياً" },
                    { value: "nesw-resize", description: "سهمان قطريان (شمال شرق - جنوب غرب)" },
                    { value: "nwse-resize", description: "سهمان قطريان معاكسان (شمال غرب - جنوب شرق)" },
                    { value: "col-resize", description: "سهمان أفقياً - لتغيير عرض العمود" },
                    { value: "row-resize", description: "سهمان عمودياً - لتغيير ارتفاع الصف" },
                    
                    // مؤشرات مخصصة
                    { value: "url('cursor.png') 10 10, auto", description: "مؤشر مخصص من صورة مع نقطة مرجعية (x, y) وقيمة احتياطية" },
                    { value: "url('cursor.svg') 16 16, pointer", description: "مؤشر SVG مخصص مع نقطة مرجعية" },
                    { value: "url('cursor1.png'), url('cursor2.png'), auto", description: "عدة صور احتياطية للمؤشر" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. pointer-events (أحداث المؤشر)
    // ============================================================
    {
        tag: "pointer-events",
        description: "يتحكم في استجابة العنصر لأحداث الفأرة واللمس (النقر، التمرير، إلخ)، يسمح بتمرير الأحداث للعناصر التي خلفه",
        properties: [
            {
                name: "pointer-events",
                description: "يتحكم في استجابة العنصر لأحداث الفأرة واللمس",
                values: [
                    { value: "auto", description: "يتفاعل العنصر مع جميع الأحداث - القيمة الافتراضية" },
                    { value: "none", description: "يتجاهل العنصر جميع الأحداث، تمر الأحداث إلى العناصر التي خلفه - مفيد للطبقات الشفافة" },
                    
                    // قيم SVG (نادرة الاستخدام ولكنها موجودة)
                    { value: "visiblePainted", description: "يتفاعل فقط إذا كان العنصر مرئياً ومرسوماً (SVG)" },
                    { value: "visibleFill", description: "يتفاعل مع منطقة الحشوة فقط إذا كان مرئياً (SVG)" },
                    { value: "visibleStroke", description: "يتفاعل مع منطقة الحد فقط إذا كان مرئياً (SVG)" },
                    { value: "painted", description: "يتفاعل إذا كان مرسوماً (SVG)" },
                    { value: "fill", description: "يتفاعل مع منطقة الحشوة (SVG)" },
                    { value: "stroke", description: "يتفاعل مع منطقة الحد (SVG)" },
                    { value: "all", description: "يتفاعل مع جميع المناطق (SVG)" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. user-select (تحديد النص)
    // ============================================================
    {
        tag: "user-select",
        description: "يتحكم في قدرة المستخدم على تحديد النص بالماوس، مفيد لحماية المحتوى أو تحسين تجربة المستخدم",
        properties: [
            {
                name: "user-select",
                description: "يتحكم في قدرة المستخدم على تحديد النص بالماوس",
                values: [
                    { value: "auto", description: "يترك المتصفح يقرر متى يسمح بالتحديد - القيمة الافتراضية" },
                    { value: "none", description: "يمنع تحديد النص تماماً - مفيد للعناصر التفاعلية" },
                    { value: "text", description: "يسمح بتحديد النص - القيمة الافتراضية للنصوص" },
                    { value: "all", description: "يسمح بتحديد الكل بنقرة واحدة - مفيد لتحديد نصوص بسرعة" },
                    { value: "contain", description: "يسمح بالتحديد داخل العنصر فقط (بدعم محدود)" },
                    { value: "element", description: "يسمح بتحديد العنصر ككل (بدعم محدود)" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. scroll-behavior (سلوك التمرير)
    // ============================================================
    {
        tag: "scroll-behavior",
        description: "يحدد سلوك التمرير عند الانتقال إلى روابط داخلية (سلس أم فوري)، يحسن تجربة المستخدم في التنقل",
        properties: [
            {
                name: "scroll-behavior",
                description: "يحدد سلوك التمرير عند الانتقال إلى روابط داخلية",
                values: [
                    { value: "auto", description: "تمرير فوري ومباشر - القيمة الافتراضية" },
                    { value: "smooth", description: "تمرير سلس ومتدحرج - يوفر تجربة أكثر سلاسة" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. scroll-snap (التثبيت عند التمرير)
    // ============================================================
    {
        tag: "scroll-snap",
        description: "خصائص التثبيت عند التمرير، توقف التمرير عند نقاط محددة، مفيد للكورسلات وقوائم المنتجات",
        properties: [
            // -------- scroll-snap-type --------
            {
                name: "scroll-snap-type",
                description: "يحدد نوع التثبيت عند التمرير (يوقف التمرير عند نقاط محددة)",
                values: [
                    { value: "none", description: "بدون تثبيت - القيمة الافتراضية" },
                    { value: "x", description: "تثبيت على المحور الأفقي (يسار/يمين)" },
                    { value: "y", description: "تثبيت على المحور العمودي (أعلى/أسفل)" },
                    { value: "both", description: "تثبيت على كلا المحورين" },
                    { value: "x mandatory", description: "تثبيت إجباري على المحور الأفقي - يجب أن يتوقف عند نقطة تثبيت" },
                    { value: "y mandatory", description: "تثبيت إجباري على المحور العمودي" },
                    { value: "both mandatory", description: "تثبيت إجباري على كلا المحورين" },
                    { value: "x proximity", description: "تثبيت قريب على المحور الأفقي - يتوقف إذا كان قريباً من نقطة التثبيت" },
                    { value: "y proximity", description: "تثبيت قريب على المحور العمودي" },
                    { value: "both proximity", description: "تثبيت قريب على كلا المحورين" }
                ]
            },
            // -------- scroll-snap-align --------
            {
                name: "scroll-snap-align",
                description: "يحدد نقطة التثبيت للعنصر داخل الحاوية (يُستخدم مع scroll-snap-type)",
                values: [
                    { value: "none", description: "بدون تثبيت - القيمة الافتراضية" },
                    { value: "start", description: "يثبت العنصر عند بداية الحاوية (أعلى أو يسار)" },
                    { value: "end", description: "يثبت العنصر عند نهاية الحاوية (أسفل أو يمين)" },
                    { value: "center", description: "يثبت العنصر في منتصف الحاوية" }
                ]
            },
            // -------- scroll-snap-stop --------
            {
                name: "scroll-snap-stop",
                description: "يحدد ما إذا كان التمرير يجب أن يتوقف عند كل نقطة تثبيت أو يمكن تجاوزها",
                values: [
                    { value: "normal", description: "يمكن تجاوز نقاط التثبيت - القيمة الافتراضية" },
                    { value: "always", description: "يجب التوقف عند كل نقطة تثبيت - لا يمكن تجاوزها" }
                ]
            },
            // -------- scroll-margin (هوامش التثبيت) --------
            {
                name: "scroll-margin",
                description: "يحدد هامشاً حول نقطة التثبيت، يضيف مسافة إضافية قبل توقف التمرير",
                values: [
                    { value: "0", description: "بدون هامش إضافي - القيمة الافتراضية" },
                    { value: "20px", description: "هامش 20 بكسل حول نقطة التثبيت" },
                    { value: "10px 20px", description: "هامش عمودي 10 بكسل، أفقي 20 بكسل" }
                ],
                freeInput: true
            },
            // -------- scroll-padding (حشو التثبيت) --------
            {
                name: "scroll-padding",
                description: "يحدد حشواً داخل الحاوية عند التثبيت، يضيف مسافة بين نقطة التثبيت وحافة الحاوية",
                values: [
                    { value: "0", description: "بدون حشو - القيمة الافتراضية" },
                    { value: "20px", description: "حشو 20 بكسل من جميع الجهات" },
                    { value: "10px 20px", description: "حشو عمودي 10 بكسل، أفقي 20 بكسل" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. overscroll-behavior (سلوك التمرير الزائد)
    // ============================================================
    {
        tag: "overscroll-behavior",
        description: "يتحكم في سلوك التمرير عند الوصول إلى نهاية المحتوى (منع انتقال التمرير للعنصر الأب)، يحسن تجربة المستخدم في القوائم المضمنة",
        properties: [
            {
                name: "overscroll-behavior",
                description: "يتحكم في سلوك التمرير عند الوصول إلى نهاية المحتوى",
                values: [
                    { value: "auto", description: "سلوك تمرير طبيعي - ينتقل التمرير للعنصر الأب - القيمة الافتراضية" },
                    { value: "contain", description: "يمنع انتقال التمرير إلى الأب، لكن يسمح بتأثيرات المتصفح (مثل السحب الزائد)" },
                    { value: "none", description: "يمنع انتقال التمرير إلى الأب ويمنع تأثيرات المتصفح" }
                ]
            },
            {
                name: "overscroll-behavior-x",
                description: "يتحكم في سلوك التمرير الأفقي عند الوصول إلى النهاية",
                values: [
                    { value: "auto", description: "سلوك طبيعي - القيمة الافتراضية" },
                    { value: "contain", description: "يمنع انتقال التمرير" },
                    { value: "none", description: "يمنع انتقال التمرير والتأثيرات" }
                ]
            },
            {
                name: "overscroll-behavior-y",
                description: "يتحكم في سلوك التمرير العمودي عند الوصول إلى النهاية",
                values: [
                    { value: "auto", description: "سلوك طبيعي - القيمة الافتراضية" },
                    { value: "contain", description: "يمنع انتقال التمرير" },
                    { value: "none", description: "يمنع انتقال التمرير والتأثيرات" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. touch-action (تفاعلات اللمس)
    // ============================================================
    {
        tag: "touch-action",
        description: "يتحكم في كيفية استجابة العنصر للتفاعلات اللمسية (مثل التكبير والتمرير)، يحسن أداء اللمس على الجوال",
        properties: [
            {
                name: "touch-action",
                description: "يتحكم في كيفية استجابة العنصر للتفاعلات اللمسية",
                values: [
                    { value: "auto", description: "يسمح بجميع التفاعلات اللمسية (تمرير، تكبير، إلخ) - القيمة الافتراضية" },
                    { value: "none", description: "يمنع جميع التفاعلات اللمسية" },
                    { value: "pan-x", description: "يسمح بالتمرير الأفقي فقط" },
                    { value: "pan-y", description: "يسمح بالتمرير العمودي فقط" },
                    { value: "pan-left", description: "يسمح بالتمرير لليسار فقط" },
                    { value: "pan-right", description: "يسمح بالتمرير لليمين فقط" },
                    { value: "pan-up", description: "يسمح بالتمرير للأعلى فقط" },
                    { value: "pan-down", description: "يسمح بالتمرير للأسفل فقط" },
                    { value: "manipulation", description: "يسمح بالتمرير والتكبير، يمنع النقر المزدوج للتكبير - مفيد للعناصر التفاعلية" },
                    { value: "pan-x pan-y", description: "يسمح بالتمرير في كلا الاتجاهين" },
                    { value: "pinch-zoom", description: "يسمح بالتكبير باللمس (قرص الأصابع)" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. will-change (تحسين الأداء)
    // ============================================================
    {
        tag: "will-change",
        description: "يخبر المتصفح مسبقاً بأن خاصية معينة ستتغير، لتحسين الأداء وجعل التحريك أكثر سلاسة",
        properties: [
            {
                name: "will-change",
                description: "يخبر المتصفح مسبقاً بأن خاصية معينة ستتغير لتحسين الأداء",
                values: [
                    { value: "auto", description: "لا تحسين مسبق - يكتشف المتصفح بنفسه - القيمة الافتراضية" },
                    { value: "transform", description: "سيتم تغيير التحويلات (التدوير، التكبير، النقل) - يحسن أداء الرسوم المتحركة" },
                    { value: "opacity", description: "سيتم تغيير الشفافية - يحسن أداء تلاشي العناصر" },
                    { value: "top, left", description: "سيتم تغيير الموضع (top, left) - يحسن أداء التحرك" },
                    { value: "right, bottom", description: "سيتم تغيير الموضع (right, bottom)" },
                    { value: "width, height", description: "سيتم تغيير الأبعاد - يحسن أداء تغيير الحجم" },
                    { value: "margin, padding", description: "سيتم تغيير الهوامش والحشو" },
                    { value: "scroll-position", description: "سيتم تغيير موضع التمرير - يحسن أداء التمرير السلس" },
                    { value: "contents", description: "سيتم تغيير المحتوى - يحسن أداء تحديث المحتوى" },
                    { value: "transform, opacity", description: "سيتم تغيير التحويلات والشفافية معاً - الأكثر استخداماً" },
                    { value: "transform, opacity, filter", description: "سيتم تغيير عدة خصائص" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 9. caret-color (لون المؤشر)
    // ============================================================
    {
        tag: "caret-color",
        description: "يحدد لون مؤشر النص الوامض (Caret) في حقول الإدخال، يحسن وضوح المؤشر في التصاميم المخصصة",
        properties: [
            {
                name: "caret-color",
                description: "يحدد لون مؤشر النص الوامض في حقول الإدخال",
                values: [
                    { value: "auto", description: "لون تلقائي حسب المتصفح - القيمة الافتراضية" },
                    { value: "red", description: "مؤشر أحمر" },
                    { value: "blue", description: "مؤشر أزرق" },
                    { value: "green", description: "مؤشر أخضر" },
                    { value: "#007bff", description: "مؤشر أزرق مخصص (لون Bootstrap)" },
                    { value: "#ff0000", description: "مؤشر أحمر (Hex)" },
                    { value: "rgb(255, 0, 0)", description: "مؤشر أحمر (RGB)" },
                    { value: "transparent", description: "مؤشر شفاف - مفيد لتصاميم خاصة" },
                    { value: "currentColor", description: "نفس لون النص" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 10. accent-color (لون المميز)
    // ============================================================
    {
        tag: "accent-color",
        description: "يحدد لون المميز لعناصر النموذج (مربعات الاختيار، أزرار الراديو، شريط التمرير)، يوحد ألوان عناصر النموذج",
        properties: [
            {
                name: "accent-color",
                description: "يحدد لون المميز لعناصر النموذج مثل مربعات الاختيار وأزرار الراديو",
                values: [
                    { value: "auto", description: "لون تلقائي حسب المتصفح - القيمة الافتراضية" },
                    { value: "red", description: "لون أحمر لعناصر النموذج" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "green", description: "لون أخضر" },
                    { value: "#007bff", description: "لون أزرق مخصص" },
                    { value: "#28a745", description: "لون أخضر مخصص" },
                    { value: "#dc3545", description: "لون أحمر مخصص" },
                    { value: "#ffc107", description: "لون أصفر مخصص" },
                    { value: "#6f42c1", description: "لون بنفسجي مخصص" },
                    { value: "rgba(255, 0, 0, 0.8)", description: "أحمر شفاف 80%" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 11. appearance (مظهر العنصر)
    // ============================================================
    {
        tag: "appearance",
        description: "يتحكم في استخدام أو إزالة التصميم الافتراضي الخاص بنظام التشغيل/المتصفح لعناصر النموذج (مثل الأزرار والقوائم المنسدلة)",
        properties: [
            {
                name: "appearance",
                description: "يتحكم في استخدام أو إزالة التصميم الافتراضي لعناصر النموذج",
                values: [
                    { value: "auto", description: "يستخدم المظهر الافتراضي للمتصفح - القيمة الافتراضية" },
                    { value: "none", description: "يزيل المظهر الافتراضي بالكامل، يتيح تصميم العنصر من الصفر" },
                    { value: "menulist-button", description: "مظهر يشبه زر قائمة منسدلة" },
                    { value: "textfield", description: "مظهر حقل نص بسيط" },
                    { value: "button", description: "مظهر زر" },
                    { value: "checkbox", description: "مظهر مربع اختيار" },
                    { value: "radio", description: "مظهر زر راديو" },
                    { value: "listbox", description: "مظهر قائمة" },
                    { value: "meter", description: "مظهر عداد (مثل شريط التقدم)" },
                    { value: "progress-bar", description: "مظهر شريط تقدم" },
                    { value: "searchfield", description: "مظهر حقل بحث" },
                    { value: "textarea", description: "مظهر منطقة نص" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 12. scrollbar (شريط التمرير)
    // ============================================================
    {
        tag: "scrollbar",
        description: "خصائص تتحكم في مظهر شريط التمرير (العرض واللون)، توفر تحكماً أساسياً في شكل شريط التمرير",
        properties: [
            // -------- scrollbar-width --------
            {
                name: "scrollbar-width",
                description: "يحدد عرض شريط التمرير (دعم قياسي بديل عن أنماط ::-webkit-scrollbar غير القياسية)",
                values: [
                    { value: "auto", description: "العرض الافتراضي لشريط التمرير في المتصفح - القيمة الافتراضية" },
                    { value: "thin", description: "شريط تمرير أنحف - يعطي مظهراً أنظف" },
                    { value: "none", description: "إخفاء شريط التمرير مع بقاء إمكانية التمرير" }
                ]
            },
            // -------- scrollbar-color --------
            {
                name: "scrollbar-color",
                description: "يحدد لون شريط التمرير ولون مساره (thumb ثم track)",
                values: [
                    { value: "auto", description: "الألوان الافتراضية للمتصفح - القيمة الافتراضية" },
                    { value: "#888 #eee", description: "لون المقبض رمادي غامق، لون المسار رمادي فاتح" },
                    { value: "rebeccapurple lightgray", description: "ألوان مخصصة بأسماء" },
                    { value: "#007bff #f0f0f0", description: "مقبض أزرق، مسار رمادي فاتح" },
                    { value: "dark dark", description: "مقبض ومسار داكنين" },
                    { value: "transparent transparent", description: "شريط تمرير شفاف بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 13. field-sizing (حجم الحقل التلقائي)
    // ============================================================
    {
        tag: "field-sizing",
        description: "يسمح لعناصر الإدخال والنماذج (مثل textarea) بتغيير حجمها تلقائياً حسب المحتوى بدلاً من حجم ثابت",
        properties: [
            {
                name: "field-sizing",
                description: "يسمح لعناصر الإدخال بتغيير حجمها تلقائياً حسب المحتوى",
                values: [
                    { value: "fixed", description: "حجم ثابت لا يتغير حسب المحتوى - القيمة الافتراضية" },
                    { value: "content", description: "يتمدد الحقل تلقائياً حسب طول المحتوى المدخل - مفيد لحقول النص الطويلة" }
                ]
            }
        ]
    },

    // ============================================================
    // 14. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لخصائص التفاعل وواجهة المستخدم في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - تخصيص المؤشرات",
                description: "تغيير شكل المؤشر حسب نوع العنصر",
                values: [
                    { value: "button { cursor: pointer; }", description: "زر بمؤشر يد" },
                    { value: "input[type=\"text\"] { cursor: text; }", description: "حقل نص بمؤشر I-beam" },
                    { value: ".draggable { cursor: grab; } .draggable:active { cursor: grabbing; }", description: "عنصر قابل للسحب مع مؤشرات مخصصة" },
                    { value: ".disabled { cursor: not-allowed; }", description: "عنصر معطل بمؤشر ممنوع" }
                ]
            },
            {
                name: "مثال 2 - منع تحديد النص",
                description: "منع تحديد النص في عناصر معينة",
                values: [
                    { value: ".no-select { user-select: none; -webkit-user-select: none; }", description: "منع تحديد النص مع بادئة Safari" },
                    { value: "button, .ui-element { user-select: none; }", description: "منع تحديد النص في الأزرار والعناصر التفاعلية" }
                ]
            },
            {
                name: "مثال 3 - تمرير سلس",
                description: "تمكين التمرير السلس للصفحة",
                values: [
                    { value: "html { scroll-behavior: smooth; }", description: "تمكين التمرير السلس للصفحة بأكملها" }
                ]
            },
            {
                name: "مثال 4 - تثبيت التمرير (Scroll Snap)",
                description: "إنشاء كورسيل مع تثبيت التمرير",
                values: [
                    { value: ".carousel { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 16px; } .carousel-item { flex: 0 0 300px; scroll-snap-align: center; }", description: "كورسيل مع تثبيت تلقائي في المنتصف" }
                ]
            },
            {
                name: "مثال 5 - منع انتقال التمرير",
                description: "منع انتقال التمرير من قائمة منسدلة إلى الصفحة",
                values: [
                    { value: ".dropdown-menu { max-height: 200px; overflow-y: auto; overscroll-behavior: contain; }", description: "قائمة منسدلة بتمرير مستقل" }
                ]
            },
            {
                name: "مثال 6 - تحسين أداء الرسوم المتحركة",
                description: "استخدام will-change لتحسين أداء الحركات",
                values: [
                    { value: ".animated { will-change: transform, opacity; transition: transform 0.3s, opacity 0.3s; } .animated:hover { transform: scale(1.1); opacity: 0.9; }", description: "تحسين أداء التحويلات" }
                ]
            },
            {
                name: "مثال 7 - تخصيص عناصر النموذج",
                description: "تخصيص لون عناصر النموذج",
                values: [
                    { value: "input[type=\"checkbox\"] { accent-color: #28a745; } input[type=\"radio\"] { accent-color: #dc3545; }", description: "تخصيص لون المربعات وأزرار الراديو" }
                ]
            },
            {
                name: "مثال 8 - تخصيص شريط التمرير",
                description: "تخصيص مظهر شريط التمرير",
                values: [
                    { value: ".custom-scrollbar { scrollbar-width: thin; scrollbar-color: #888 #f0f0f0; }", description: "شريط تمرير أنحف بألوان مخصصة" }
                ]
            }
        ]
    },

    // ============================================================
    // 15. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام خصائص التفاعل وواجهة المستخدم بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لخصائص التفاعل",
                values: [
                    { value: "استخدم cursor: pointer للأزرار والروابط", description: "يساعد المستخدم في معرفة العناصر القابلة للنقر" },
                    { value: "استخدم user-select: none بحذر", description: "لا تمنع تحديد النص في المحتوى القابل للقراءة" },
                    { value: "استخدم scroll-behavior: smooth للتنقل الداخلي", description: "يحسن تجربة المستخدم في الصفحات الطويلة" },
                    { value: "استخدم will-change بحذر", description: "الإفراط في استخدامه قد يستهلك الذاكرة" }
                ]
            },
            {
                name: "نصائح للأجهزة اللمسية",
                description: "نصائح لتحسين التفاعل على الجوال والأجهزة اللمسية",
                values: [
                    { value: "استخدم touch-action: manipulation للأزرار", description: "يمنع التأخير من النقر المزدوج على الجوال" },
                    { value: "استخدم overscroll-behavior: contain للقوائم", description: "يمنع انتقال التمرير إلى الصفحة" },
                    { value: "استخدم scroll-snap للكورسلات", description: "يحسن تجربة التمرير على الجوال" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل التفاعل قابلاً للوصول للجميع",
                values: [
                    { value: "لا تعتمد على المؤشر فقط", description: "بعض المستخدمين يستخدمون لوحة المفاتيح" },
                    { value: "استخدم :focus-visible", description: "يظهر التركيز فقط عند استخدام لوحة المفاتيح" },
                    { value: "تجنب إخفاء المؤشر تماماً", description: "cursor: none قد يربك المستخدمين" },
                    { value: "احترم prefers-reduced-motion", description: "قلل الحركات للمستخدمين الذين يطلبون ذلك" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام خصائص التفاعل وكيفية تجنبها",
                values: [
                    { value: "استخدام pointer-events: none مع المحتوى المهم", description: "يجعل العنصر غير قابل للتفاعل بالكامل" },
                    { value: "نسيان بادئة -webkit-", description: "-webkit-user-select: none لـ Safari" },
                    { value: "استخدام will-change على عناصر كثيرة", description: "يستهلك ذاكرة وقد يبطئ الأداء" },
                    { value: "عدم اختبار اللمس", description: "اختبر التفاعلات على الجوال أيضاً" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.interactionUIData = interactionUIData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = interactionUIData;
}