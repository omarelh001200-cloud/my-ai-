// ============================================================
// css-color-systems.js
// أنظمة الألوان (Color Systems) في CSS
// تشرح جميع أنظمة الألوان المستخدمة في CSS مع مقارنات وأمثلة
// ============================================================

const cssColorSystemsData = [
    // ============================================================
    // 1. نظرة عامة على أنظمة الألوان
    // ============================================================
    {
        tag: "color-systems",
        description: "جميع أنظمة الألوان المتاحة في CSS مع شرح لكل نظام",
        properties: [
            {
                name: "نظرة عامة",
                description: "CSS تدعم العديد من أنظمة الألوان، كل منها مناسب لحالات استخدام مختلفة",
                values: [
                    { value: "أسماء الألوان", description: "أسهل طريقة - لكن عددها محدود (140 لوناً)" },
                    { value: "Hex (سداسي عشري)", description: "الأكثر شيوعاً - دقيق وسهل الاستخدام" },
                    { value: "RGB (أحمر، أخضر، أزرق)", description: "نظام ألوان الشاشات - دقيق وقابل للبرمجة" },
                    { value: "HSL (تدرج، تشبع، إضاءة)", description: "بديهي وسهل التعديل - مفيد للتصميم" },
                    { value: "HWB (تدرج، بياض، سواد)", description: "بديل لـ HSL - بديهي أيضاً" },
                    { value: "Lab (إضاءة، a، b)", description: "نظام يعتمد على إدراك العين - دقيق" },
                    { value: "LCH (إضاءة، تشبع لوني، تدرج)", description: "نظام حديث - دقيق جداً وبديهي" },
                    { value: "Display P3", description: "مساحة لونية أوسع من sRGB - ألوان أكثر حيوية" },
                    { value: "OKLCH", description: "نظام لوني حديث - أفضل من LCH في الانتقالات" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. أسماء الألوان (Color Names)
    // ============================================================
    {
        tag: "color-names",
        description: "أسماء الألوان المعرفة مسبقاً في CSS (140 لوناً)",
        properties: [
            {
                name: "أسماء الألوان الأساسية",
                description: "الأسماء الأكثر استخداماً",
                values: [
                    { value: "black", description: "#000000 - أسود" },
                    { value: "white", description: "#ffffff - أبيض" },
                    { value: "red", description: "#ff0000 - أحمر" },
                    { value: "green", description: "#008000 - أخضر" },
                    { value: "blue", description: "#0000ff - أزرق" },
                    { value: "yellow", description: "#ffff00 - أصفر" },
                    { value: "orange", description: "#ffa500 - برتقالي" },
                    { value: "purple", description: "#800080 - بنفسجي" },
                    { value: "pink", description: "#ffc0cb - وردي" },
                    { value: "gray", description: "#808080 - رمادي" },
                    { value: "brown", description: "#a52a2a - بني" },
                    { value: "cyan", description: "#00ffff - سماوي" },
                    { value: "magenta", description: "#ff00ff - أرجواني" },
                    { value: "lime", description: "#00ff00 - ليموني" },
                    { value: "maroon", description: "#800000 - كستنائي" },
                    { value: "navy", description: "#000080 - أزرق بحري" },
                    { value: "olive", description: "#808000 - زيتوني" },
                    { value: "teal", description: "#008080 - أزرق مخضر" }
                ]
            },
            {
                name: "أسماء الألوان الإضافية",
                description: "أسماء إضافية شائعة الاستخدام",
                values: [
                    { value: "aliceblue", description: "#f0f8ff - أزرق فاتح جداً" },
                    { value: "antiquewhite", description: "#faebd7 - أبيض عتيق" },
                    { value: "aqua", description: "#00ffff - مائي" },
                    { value: "aquamarine", description: "#7fffd4 - زمردي" },
                    { value: "azure", description: "#f0ffff - أزرق سماوي" },
                    { value: "beige", description: "#f5f5dc - بيج" },
                    { value: "bisque", description: "#ffe4c4 - بيج فاتح" },
                    { value: "blanchedalmond", description: "#ffebcd - لوزي" },
                    { value: "blueviolet", description: "#8a2be2 - بنفسجي أزرق" },
                    { value: "burlywood", description: "#deb887 - خشبي" },
                    { value: "cadetblue", description: "#5f9ea0 - أزرق كاديت" },
                    { value: "chartreuse", description: "#7fff00 - شارتروز" },
                    { value: "chocolate", description: "#d2691e - شوكولاتي" },
                    { value: "coral", description: "#ff7f50 - مرجاني" },
                    { value: "cornflowerblue", description: "#6495ed - أزرق ردة الذرة" },
                    { value: "cornsilk", description: "#fff8dc - حرير الذرة" },
                    { value: "crimson", description: "#dc143c - قرمزي" },
                    { value: "darkblue", description: "#00008b - أزرق غامق" },
                    { value: "darkcyan", description: "#008b8b - سماوي غامق" },
                    { value: "darkgoldenrod", description: "#b8860b - ذهبي غامق" },
                    { value: "darkgray", description: "#a9a9a9 - رمادي غامق" },
                    { value: "darkgreen", description: "#006400 - أخضر غامق" },
                    { value: "darkkhaki", description: "#bdb76b - كاكي غامق" },
                    { value: "darkmagenta", description: "#8b008b - أرجواني غامق" },
                    { value: "darkolivegreen", description: "#556b2f - زيتوني غامق" },
                    { value: "darkorange", description: "#ff8c00 - برتقالي غامق" },
                    { value: "darkorchid", description: "#9932cc - أوركيد غامق" },
                    { value: "darkred", description: "#8b0000 - أحمر غامق" },
                    { value: "darksalmon", description: "#e9967a - سلموني غامق" },
                    { value: "darkseagreen", description: "#8fbc8f - أخضر بحري غامق" },
                    { value: "darkslateblue", description: "#483d8b - أزرق أردوازي غامق" },
                    { value: "darkslategray", description: "#2f4f4f - رمادي أردوازي غامق" },
                    { value: "darkturquoise", description: "#00ced1 - فيروزي غامق" },
                    { value: "darkviolet", description: "#9400d3 - بنفسجي غامق" },
                    { value: "deeppink", description: "#ff1493 - وردي غامق" },
                    { value: "deepskyblue", description: "#00bfff - أزرق سماوي غامق" },
                    { value: "dimgray", description: "#696969 - رمادي خافت" },
                    { value: "dodgerblue", description: "#1e90ff - أزرق دودجر" },
                    { value: "firebrick", description: "#b22222 - طوبي" },
                    { value: "floralwhite", description: "#fffaf0 - أبيض زهري" },
                    { value: "forestgreen", description: "#228b22 - أخضر غابي" },
                    { value: "gainsboro", description: "#dcdcdc - رمادي فاتح" },
                    { value: "ghostwhite", description: "#f8f8ff - أبيض شبح" },
                    { value: "gold", description: "#ffd700 - ذهبي" },
                    { value: "goldenrod", description: "#daa520 - ذهبي داكن" },
                    { value: "greenyellow", description: "#adff2f - أخضر مصفر" },
                    { value: "honeydew", description: "#f0fff0 - عسلي" },
                    { value: "hotpink", description: "#ff69b4 - وردي ساخن" },
                    { value: "indianred", description: "#cd5c5c - أحمر هندي" },
                    { value: "indigo", description: "#4b0082 - نيلي" },
                    { value: "ivory", description: "#fffff0 - عاجي" },
                    { value: "khaki", description: "#f0e68c - كاكي" },
                    { value: "lavender", description: "#e6e6fa - خزامي" },
                    { value: "lavenderblush", description: "#fff0f5 - خزامي وردي" },
                    { value: "lawngreen", description: "#7cfc00 - أخضر عشبي" },
                    { value: "lemonchiffon", description: "#fffacd - ليموني" },
                    { value: "lightblue", description: "#add8e6 - أزرق فاتح" },
                    { value: "lightcoral", description: "#f08080 - مرجاني فاتح" },
                    { value: "lightcyan", description: "#e0ffff - سماوي فاتح" },
                    { value: "lightgoldenrodyellow", description: "#fafad2 - ذهبي فاتح" },
                    { value: "lightgray", description: "#d3d3d3 - رمادي فاتح" },
                    { value: "lightgreen", description: "#90ee90 - أخضر فاتح" },
                    { value: "lightpink", description: "#ffb6c1 - وردي فاتح" },
                    { value: "lightsalmon", description: "#ffa07a - سلموني فاتح" },
                    { value: "lightseagreen", description: "#20b2aa - أخضر بحري فاتح" },
                    { value: "lightskyblue", description: "#87cefa - أزرق سمائي فاتح" },
                    { value: "lightslategray", description: "#778899 - رمادي أردوازي فاتح" },
                    { value: "lightsteelblue", description: "#b0c4de - أزرق فولاذي فاتح" },
                    { value: "lightyellow", description: "#ffffe0 - أصفر فاتح" },
                    { value: "limegreen", description: "#32cd32 - أخضر ليموني" },
                    { value: "linen", description: "#faf0e6 - كتاني" },
                    { value: "mediumaquamarine", description: "#66cdaa - زمردي متوسط" },
                    { value: "mediumblue", description: "#0000cd - أزرق متوسط" },
                    { value: "mediumorchid", description: "#ba55d3 - أوركيد متوسط" },
                    { value: "mediumpurple", description: "#9370db - بنفسجي متوسط" },
                    { value: "mediumseagreen", description: "#3cb371 - أخضر بحري متوسط" },
                    { value: "mediumslateblue", description: "#7b68ee - أزرق أردوازي متوسط" },
                    { value: "mediumspringgreen", description: "#00fa9a - ربيعي متوسط" },
                    { value: "mediumturquoise", description: "#48d1cc - فيروزي متوسط" },
                    { value: "mediumvioletred", description: "#c71585 - بنفسجي أحمر متوسط" },
                    { value: "midnightblue", description: "#191970 - أزرق منتصف الليل" },
                    { value: "mintcream", description: "#f5fffa - نعناعي" },
                    { value: "mistyrose", description: "#ffe4e1 - وردي ضبابي" },
                    { value: "moccasin", description: "#ffe4b5 - موكاسين" },
                    { value: "navajowhite", description: "#ffdead - أبيض نافاجو" },
                    { value: "oldlace", description: "#fdf5e6 - دانتيل قديم" },
                    { value: "olivedrab", description: "#6b8e23 - زيتوني داكن" },
                    { value: "orangered", description: "#ff4500 - أحمر برتقالي" },
                    { value: "orchid", description: "#da70d6 - أوركيد" },
                    { value: "palegoldenrod", description: "#eee8aa - ذهبي شاحب" },
                    { value: "palegreen", description: "#98fb98 - أخضر شاحب" },
                    { value: "paleturquoise", description: "#afeeee - فيروزي شاحب" },
                    { value: "palevioletred", description: "#db7093 - بنفسجي أحمر شاحب" },
                    { value: "papayawhip", description: "#ffefd5 - بابايا" },
                    { value: "peachpuff", description: "#ffdab9 - خوخي" },
                    { value: "peru", description: "#cd853f - بيرو" },
                    { value: "plum", description: "#dda0dd - برقوقي" },
                    { value: "powderblue", description: "#b0e0e6 - أزرق بودرة" },
                    { value: "rosybrown", description: "#bc8f8f - بني وردي" },
                    { value: "royalblue", description: "#4169e1 - أزرق ملكي" },
                    { value: "saddlebrown", description: "#8b4513 - بني سرجي" },
                    { value: "salmon", description: "#fa8072 - سلموني" },
                    { value: "sandybrown", description: "#f4a460 - بني رملي" },
                    { value: "seagreen", description: "#2e8b57 - أخضر بحري" },
                    { value: "seashell", description: "#fff5ee - صدفية" },
                    { value: "sienna", description: "#a0522d - سيينا" },
                    { value: "silver", description: "#c0c0c0 - فضي" },
                    { value: "skyblue", description: "#87ceeb - أزرق سماوي" },
                    { value: "slateblue", description: "#6a5acd - أزرق أردوازي" },
                    { value: "slategray", description: "#708090 - رمادي أردوازي" },
                    { value: "snow", description: "#fffafa - ثلجي" },
                    { value: "springgreen", description: "#00ff7f - ربيعي" },
                    { value: "steelblue", description: "#4682b4 - أزرق فولاذي" },
                    { value: "tan", description: "#d2b48c - تان" },
                    { value: "thistle", description: "#d8bfd8 - شوكي" },
                    { value: "tomato", description: "#ff6347 - طماطمي" },
                    { value: "turquoise", description: "#40e0d0 - فيروزي" },
                    { value: "violet", description: "#ee82ee - بنفسجي" },
                    { value: "wheat", description: "#f5deb3 - قمحي" },
                    { value: "whitesmoke", description: "#f5f5f5 - دخاني" },
                    { value: "yellowgreen", description: "#9acd32 - أصفر مخضر" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. نظام Hex (سداسي عشري)
    // ============================================================
    {
        tag: "hex-colors",
        description: "نظام الألوان السداسي عشري (Hex) هو الأكثر شيوعاً في CSS",
        properties: [
            {
                name: "Hex Colors",
                description: "تمثيل الألوان بـ 6 أرقام سداسية عشري (RRGGBB) أو 3 أرقام (RGB)",
                values: [
                    { value: "#000000", description: "أسود" },
                    { value: "#ffffff", description: "أبيض" },
                    { value: "#ff0000", description: "أحمر" },
                    { value: "#00ff00", description: "أخضر" },
                    { value: "#0000ff", description: "أزرق" },
                    { value: "#ffff00", description: "أصفر" },
                    { value: "#ffa500", description: "برتقالي" },
                    { value: "#800080", description: "بنفسجي" },
                    { value: "#ffc0cb", description: "وردي" },
                    { value: "#808080", description: "رمادي" },
                    { value: "#a52a2a", description: "بني" },
                    { value: "#007bff", description: "أزرق Bootstrap" },
                    { value: "#28a745", description: "أخضر Bootstrap" },
                    { value: "#dc3545", description: "أحمر Bootstrap" },
                    { value: "#ffc107", description: "أصفر Bootstrap" },
                    { value: "#6f42c1", description: "بنفسجي Bootstrap" },
                    { value: "#f8f9fa", description: "رمادي فاتح جداً" },
                    { value: "#e9ecef", description: "رمادي فاتح" },
                    { value: "#dee2e6", description: "رمادي متوسط فاتح" },
                    { value: "#ced4da", description: "رمادي متوسط" },
                    { value: "#adb5bd", description: "رمادي متوسط غامق" },
                    { value: "#6c757d", description: "رمادي غامق" },
                    { value: "#343a40", description: "رمادي غامق جداً" },
                    { value: "#ff6b6b", description: "أحمر فاتح" },
                    { value: "#feca57", description: "أصفر دافئ" },
                    { value: "#48dbfb", description: "أزرق فاتح" },
                    { value: "#ff9ff3", description: "وردي فاتح" },
                    { value: "#54a0ff", description: "أزرق متوسط" },
                    { value: "#5f27cd", description: "بنفسجي غامق" },
                    { value: "#f368e0", description: "وردي غامق" },
                    { value: "#ff9f43", description: "برتقالي فاتح" },
                    { value: "#10ac84", description: "أخضر زمردي" },
                    { value: "#ee5a24", description: "أحمر برتقالي" },
                    
                    // الصيغة المختصرة (3 أرقام)
                    { value: "#f00", description: "#ff0000 - أحمر (مختصر)" },
                    { value: "#0f0", description: "#00ff00 - أخضر (مختصر)" },
                    { value: "#00f", description: "#0000ff - أزرق (مختصر)" },
                    { value: "#000", description: "#000000 - أسود (مختصر)" },
                    { value: "#fff", description: "#ffffff - أبيض (مختصر)" },
                    { value: "#ff0", description: "#ffff00 - أصفر (مختصر)" }
                ]
            },
            {
                name: "Hex مع شفافية (8 أرقام)",
                description: "تمثيل الألوان بـ 8 أرقام سداسية عشري (RRGGBBAA)",
                values: [
                    { value: "#ff0000ff", description: "أحمر معتم" },
                    { value: "#ff000080", description: "أحمر شفاف 50%" },
                    { value: "#ff000000", description: "أحمر شفاف بالكامل" },
                    { value: "#00000080", description: "أسود شفاف 50%" },
                    { value: "#ffffff80", description: "أبيض شفاف 50%" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. نظام RGB
    // ============================================================
    {
        tag: "rgb-colors",
        description: "نظام الألوان RGB (Red, Green, Blue)",
        properties: [
            {
                name: "RGB Colors",
                description: "تمثيل الألوان بقيم الأحمر والأخضر والأزرق (0-255)",
                values: [
                    { value: "rgb(0, 0, 0)", description: "أسود" },
                    { value: "rgb(255, 255, 255)", description: "أبيض" },
                    { value: "rgb(255, 0, 0)", description: "أحمر" },
                    { value: "rgb(0, 255, 0)", description: "أخضر" },
                    { value: "rgb(0, 0, 255)", description: "أزرق" },
                    { value: "rgb(255, 255, 0)", description: "أصفر" },
                    { value: "rgb(255, 165, 0)", description: "برتقالي" },
                    { value: "rgb(128, 0, 128)", description: "بنفسجي" },
                    { value: "rgb(255, 192, 203)", description: "وردي" },
                    { value: "rgb(128, 128, 128)", description: "رمادي" },
                    { value: "rgb(165, 42, 42)", description: "بني" },
                    { value: "rgb(0, 123, 255)", description: "أزرق Bootstrap" },
                    { value: "rgb(40, 167, 69)", description: "أخضر Bootstrap" },
                    { value: "rgb(220, 53, 69)", description: "أحمر Bootstrap" },
                    { value: "rgb(255, 193, 7)", description: "أصفر Bootstrap" },
                    { value: "rgb(111, 66, 193)", description: "بنفسجي Bootstrap" }
                ]
            },
            {
                name: "RGBA Colors",
                description: "RGB مع شفافية (Alpha 0-1)",
                values: [
                    { value: "rgba(255, 0, 0, 0.5)", description: "أحمر شفاف 50%" },
                    { value: "rgba(0, 0, 255, 0.3)", description: "أزرق شفاف 30%" },
                    { value: "rgba(0, 0, 0, 0.1)", description: "أسود شفاف 10%" },
                    { value: "rgba(255, 255, 255, 0.8)", description: "أبيض شفاف 80%" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. نظام HSL
    // ============================================================
    {
        tag: "hsl-colors",
        description: "نظام الألوان HSL (Hue, Saturation, Lightness)",
        properties: [
            {
                name: "HSL Colors",
                description: "تمثيل الألوان بالتدرج (0-360)، التشبع (0-100%)، والإضاءة (0-100%)",
                values: [
                    { value: "hsl(0, 0%, 0%)", description: "أسود" },
                    { value: "hsl(0, 0%, 100%)", description: "أبيض" },
                    { value: "hsl(0, 100%, 50%)", description: "أحمر" },
                    { value: "hsl(120, 100%, 50%)", description: "أخضر" },
                    { value: "hsl(240, 100%, 50%)", description: "أزرق" },
                    { value: "hsl(60, 100%, 50%)", description: "أصفر" },
                    { value: "hsl(30, 100%, 50%)", description: "برتقالي" },
                    { value: "hsl(300, 100%, 50%)", description: "أرجواني" },
                    { value: "hsl(350, 100%, 50%)", description: "وردي" },
                    { value: "hsl(0, 0%, 50%)", description: "رمادي" },
                    { value: "hsl(0, 0%, 20%)", description: "رمادي غامق" },
                    { value: "hsl(0, 0%, 80%)", description: "رمادي فاتح" },
                    { value: "hsl(210, 100%, 50%)", description: "أزرق Bootstrap" },
                    { value: "hsl(145, 60%, 40%)", description: "أخضر Bootstrap" },
                    { value: "hsl(355, 70%, 50%)", description: "أحمر Bootstrap" }
                ]
            },
            {
                name: "HSLA Colors",
                description: "HSL مع شفافية (Alpha 0-1)",
                values: [
                    { value: "hsla(0, 100%, 50%, 0.5)", description: "أحمر شفاف 50%" },
                    { value: "hsla(240, 100%, 50%, 0.3)", description: "أزرق شفاف 30%" },
                    { value: "hsla(0, 0%, 0%, 0.2)", description: "أسود شفاف 20%" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. نظام HWB
    // ============================================================
    {
        tag: "hwb-colors",
        description: "نظام الألوان HWB (Hue, Whiteness, Blackness)",
        properties: [
            {
                name: "HWB Colors",
                description: "تمثيل الألوان بالتدرج (0-360)، البياض (0-100%)، والسواد (0-100%)",
                values: [
                    { value: "hwb(0, 0%, 0%)", description: "أحمر" },
                    { value: "hwb(0, 50%, 0%)", description: "وردي" },
                    { value: "hwb(0, 0%, 50%)", description: "أحمر داكن" },
                    { value: "hwb(120, 0%, 0%)", description: "أخضر" },
                    { value: "hwb(240, 0%, 0%)", description: "أزرق" },
                    { value: "hwb(60, 0%, 0%)", description: "أصفر" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. أنظمة الألوان الحديثة (Lab, LCH, OKLCH)
    // ============================================================
    {
        tag: "modern-color-systems",
        description: "أنظمة الألوان الحديثة توفر دقة أعلى وألواناً أكثر حيوية",
        properties: [
            {
                name: "Lab Colors",
                description: "نظام Lab يعتمد على إدراك العين البشرية، دقيق جداً",
                values: [
                    { value: "lab(0% 0 0)", description: "أسود" },
                    { value: "lab(100% 0 0)", description: "أبيض" },
                    { value: "lab(50% 80 40)", description: "أحمر" },
                    { value: "lab(50% -80 40)", description: "أخضر" },
                    { value: "lab(30% 50 -20)", description: "أزرق مائل" },
                    { value: "lab(90% -40 30)", description: "أخضر فاتح" }
                ]
            },
            {
                name: "LCH Colors",
                description: "نظام LCH (Lightness, Chroma, Hue) - دقيق وبديهي",
                values: [
                    { value: "lch(0% 0 0)", description: "أسود" },
                    { value: "lch(100% 0 0)", description: "أبيض" },
                    { value: "lch(50% 80 20)", description: "برتقالي" },
                    { value: "lch(50% 80 300)", description: "بنفسجي" },
                    { value: "lch(60% 60 120)", description: "أخضر" },
                    { value: "lch(60% 60 240)", description: "أزرق" }
                ]
            },
            {
                name: "OKLCH Colors",
                description: "نظام OKLCH - نسخة محسّنة من LCH مع انتقالات أفضل",
                values: [
                    { value: "oklch(0% 0 0)", description: "أسود" },
                    { value: "oklch(100% 0 0)", description: "أبيض" },
                    { value: "oklch(0.5 0.2 20)", description: "برتقالي" },
                    { value: "oklch(0.5 0.2 300)", description: "بنفسجي" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. مساحات الألوان (Color Spaces)
    // ============================================================
    {
        tag: "color-spaces",
        description: "مساحات الألوان المختلفة في CSS",
        properties: [
            {
                name: "Color Spaces",
                description: "مساحات الألوان المتاحة في CSS",
                values: [
                    { value: "srgb", description: "مساحة الألوان القياسية - الأكثر شيوعاً" },
                    { value: "display-p3", description: "مساحة أوسع من sRGB - ألوان أكثر حيوية" },
                    { value: "lab", description: "مساحة Lab - دقيقة جداً" },
                    { value: "lch", description: "مساحة LCH - دقيقة وبديهية" },
                    { value: "oklab", description: "مساحة OKLab - محسّنة" },
                    { value: "oklch", description: "مساحة OKLCH - محسّنة" }
                ]
            },
            {
                name: "color() مع مساحة",
                description: "استخدام دالة color() لتحديد مساحة لونية",
                values: [
                    { value: "color(display-p3 1 0 0)", description: "أحمر في Display P3" },
                    { value: "color(display-p3 0 1 0)", description: "أخضر في Display P3" },
                    { value: "color(display-p3 0 0 1)", description: "أزرق في Display P3" },
                    { value: "color(srgb 1 0 0)", description: "أحمر في sRGB" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. دوال الألوان الإضافية
    // ============================================================
    {
        tag: "additional-color-functions",
        description: "دوال ألوان إضافية",
        properties: [
            {
                name: "color-mix()",
                description: "تخلط لونين معاً بنسب محددة",
                values: [
                    { value: "color-mix(in srgb, red 50%, blue 50%)", description: "مزيج 50/50" },
                    { value: "color-mix(in srgb, red 70%, blue 30%)", description: "أحمر أكثر" },
                    { value: "color-mix(in lab, red 50%, blue 50%)", description: "مزيج في Lab" }
                ]
            },
            {
                name: "contrast-color()",
                description: "تختار لوناً يتباين مع لون الخلفية (لإمكانية الوصول)",
                values: [
                    { value: "contrast-color(black)", description: "تختار لوناً يتباين مع الأسود" },
                    { value: "contrast-color(white)", description: "تختار لوناً يتباين مع الأبيض" }
                ]
            },
            {
                name: "light-dark()",
                description: "تختار لوناً حسب تفضيل الوضع (فاتح أو داكن) بناءً على prefers-color-scheme، مفيدة جداً للثيمات الديناميكية دون الحاجة لـ @media",
                values: [
                    { value: "light-dark(black, white)", description: "أسود في الوضع الفاتح، أبيض في الداكن" },
                    { value: "light-dark(#ffffff, #1a1a2e)", description: "أبيض في الفاتح، داكن في الداكن" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. مقارنة بين أنظمة الألوان
    // ============================================================
    {
        tag: "color-comparison",
        description: "مقارنة بين أنظمة الألوان المختلفة",
        properties: [
            {
                name: "متى تستخدم كل نظام؟",
                description: "إرشادات لاختيار نظام الألوان المناسب",
                values: [
                    { value: "Hex", description: "الأكثر شيوعاً - مناسب للاستخدام العام" },
                    { value: "RGB", description: "مفيد للبرمجة والتلاعب بالألوان" },
                    { value: "HSL", description: "مفيد لتعديل الإضاءة والتشبع" },
                    { value: "HWB", description: "بديهي مثل HSL" },
                    { value: "Lab / LCH", description: "دقيق جداً - مناسب للانتقالات" },
                    { value: "Display P3", description: "لألوان أكثر حيوية" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام أنظمة الألوان",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الألوان",
                values: [
                    { value: "استخدم Hex للكفاءة", description: "Hex أصغر حجماً وأسرع في التحميل" },
                    { value: "استخدم HSL للتعديل", description: "يسهل تغيير الإضاءة والتشبع" },
                    { value: "استخدم currentColor للمرونة", description: "يجعل الألوان متناسقة" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل الألوان قابلة للوصول",
                values: [
                    { value: "تحقق من التباين", description: "استخدم أدوات لفحص نسبة التباين 4.5:1" },
                    { value: "استخدم light-dark()", description: "للتبديل بين الوضعين بسهولة" },
                    { value: "لا تعتمد على اللون فقط", description: "استخدم إشارات إضافية" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام الألوان",
                values: [
                    { value: "نسيان # في Hex", description: "ff0000 (خاطئ) vs #ff0000 (صحيح)" },
                    { value: "استخدام RGB بدون أرقام", description: "rgb(255, 0, 0) صحيح" },
                    { value: "نسيان الفواصل في HSL", description: "hsl(0 100% 50%) vs hsl(0, 100%, 50%)" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssColorSystemsData = cssColorSystemsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssColorSystemsData;
}