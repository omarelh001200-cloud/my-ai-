// ============================================================
// colors-backgrounds.js
// خصائص الألوان والخلفيات (Colors & Backgrounds) في CSS
// تتحكم في ألوان النصوص والخلفيات، الصور الخلفية، وحجمها وموضعها
// ============================================================

const colorsBackgroundsData = [
    // ============================================================
    // 1. color (لون النص)
    // ============================================================
    {
        tag: "color",
        description: "يحدد لون النص الأمامي للعنصر، يتحكم في مظهر النصوص والرموز داخل العنصر",
        properties: [
            // -------- color --------
            {
                name: "color",
                description: "الخاصية الرئيسية لتحديد لون النص، يمكن استخدام أي نظام ألوان (أسماء، Hex، RGB، HSL، وغيرها)",
                values: [
                    // أسماء الألوان الأساسية
                    { value: "black", description: "أسود (#000000) - اللون الأساسي" },
                    { value: "white", description: "أبيض (#ffffff) - اللون الأساسي" },
                    { value: "red", description: "أحمر (#ff0000) - لون ناري" },
                    { value: "green", description: "أخضر (#00ff00) - لون الطبيعة" },
                    { value: "blue", description: "أزرق (#0000ff) - لون السماء" },
                    { value: "yellow", description: "أصفر (#ffff00) - لون مشرق" },
                    { value: "orange", description: "برتقالي (#ffa500) - لون دافئ" },
                    { value: "purple", description: "بنفسجي (#800080) - لون ملكي" },
                    { value: "pink", description: "وردي (#ffc0cb) - لون ناعم" },
                    { value: "gray", description: "رمادي (#808080) - لون محايد" },
                    { value: "brown", description: "بني (#a52a2a) - لون ترابي" },
                    { value: "navy", description: "أزرق بحري (#000080) - لون غامق" },
                    { value: "teal", description: "أزرق مخضر (#008080) - لون هادئ" },
                    { value: "maroon", description: "كستنائي (#800000) - لون غامق دافئ" },
                    { value: "olive", description: "زيتوني (#808000) - لون طبيعي" },
                    { value: "lime", description: "ليموني (#00ff00) - أخضر فاتح" },
                    { value: "gold", description: "ذهبي (#ffd700) - لون براق" },
                    { value: "silver", description: "فضي (#c0c0c0) - لون معدني" },
                    { value: "coral", description: "مرجاني (#ff7f50) - لون دافئ" },
                    { value: "crimson", description: "قرمزي (#dc143c) - أحمر غامق" },
                    { value: "indigo", description: "نيلي (#4b0082) - بنفسجي غامق" },
                    { value: "salmon", description: "سلموني (#fa8072) - وردي برتقالي" },
                    { value: "chocolate", description: "شوكولاتي (#d2691e) - بني دافئ" },
                    { value: "tomato", description: "طماطمي (#ff6347) - أحمر برتقالي" },
                    { value: "skyblue", description: "أزرق سماوي (#87ceeb) - أزرق فاتح" },
                    { value: "lightblue", description: "أزرق فاتح (#add8e6) - أزرق ناعم" },
                    { value: "lightgreen", description: "أخضر فاتح (#90ee90) - أخضر ناعم" },
                    { value: "lightgray", description: "رمادي فاتح (#d3d3d3) - رمادي ناعم" },
                    
                    // القيم الخاصة
                    { value: "transparent", description: "شفاف - لا لون، يظهر ما خلفه" },
                    { value: "currentColor", description: "نفس لون العنصر الأب (القيمة الافتراضية) - مفيد لتوحيد الألوان" },
                    { value: "inherit", description: "يرث لون العنصر الأب" },
                    { value: "initial", description: "يعيد اللون إلى القيمة الافتراضية" },
                    { value: "unset", description: "يرث إذا كان ممكناً أو يعيد إلى الافتراضي" },
                    
                    // Hex (سداسي عشري)
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
                    { value: "#333333", description: "رمادي غامق" },
                    { value: "#666666", description: "رمادي متوسط" },
                    { value: "#999999", description: "رمادي فاتح" },
                    { value: "#cccccc", description: "رمادي فاتح جداً" },
                    { value: "#f0f0f0", description: "أبيض مائل للرمادي" },
                    { value: "#ff6600", description: "برتقالي غامق" },
                    { value: "#ff3399", description: "وردي ساخن" },
                    { value: "#00ccff", description: "أزرق فاتح براق" },
                    
                    // RGB (Red, Green, Blue)
                    { value: "rgb(0, 0, 0)", description: "أسود" },
                    { value: "rgb(255, 255, 255)", description: "أبيض" },
                    { value: "rgb(255, 0, 0)", description: "أحمر" },
                    { value: "rgb(0, 255, 0)", description: "أخضر" },
                    { value: "rgb(0, 0, 255)", description: "أزرق" },
                    { value: "rgb(255, 165, 0)", description: "برتقالي" },
                    { value: "rgb(128, 0, 128)", description: "بنفسجي" },
                    
                    // RGBA (مع شفافية)
                    { value: "rgba(255, 0, 0, 0.5)", description: "أحمر شفاف 50%" },
                    { value: "rgba(0, 0, 255, 0.3)", description: "أزرق شفاف 30%" },
                    { value: "rgba(0, 0, 0, 0.1)", description: "أسود شفاف 10% - ظل خفيف" },
                    { value: "rgba(255, 255, 255, 0.8)", description: "أبيض شفاف 80% - شبه معتم" },
                    
                    // HSL (Hue, Saturation, Lightness)
                    { value: "hsl(0, 100%, 50%)", description: "أحمر" },
                    { value: "hsl(120, 100%, 50%)", description: "أخضر" },
                    { value: "hsl(240, 100%, 50%)", description: "أزرق" },
                    { value: "hsl(30, 100%, 50%)", description: "برتقالي" },
                    { value: "hsl(0, 0%, 50%)", description: "رمادي متوسط" },
                    { value: "hsl(200, 50%, 40%)", description: "أزرق متوسط" },
                    
                    // HSLA (مع شفافية)
                    { value: "hsla(0, 100%, 50%, 0.5)", description: "أحمر شفاف 50%" },
                    { value: "hsla(240, 100%, 50%, 0.3)", description: "أزرق شفاف 30%" },
                    { value: "hsla(0, 0%, 0%, 0.2)", description: "أسود شفاف 20%" },
                    
                    // أنظمة الألوان الحديثة
                    { value: "lab(50% 80 40)", description: "نظام ألوان Lab - دقيق ومنتظم" },
                    { value: "lab(30% 50 -20)", description: "نظام ألوان Lab - أزرق مائل" },
                    { value: "lch(50% 80 20)", description: "نظام ألوان LCH - عرض أوسع من RGB" },
                    { value: "lch(60% 60 300)", description: "نظام ألوان LCH - بنفسجي" },
                    { value: "color(display-p3 1 0 0)", description: "نظام Display P3 - أحمر أوسع من sRGB" },
                    { value: "color(display-p3 0 1 0)", description: "نظام Display P3 - أخضر أوسع" },
                    { value: "color(display-p3 0 0 1)", description: "نظام Display P3 - أزرق أوسع" }
                ],
                freeInput: true
            },
            // -------- color-scheme --------
            {
                name: "color-scheme",
                description: "يخبر المتصفح بأنماط الألوان (فاتح/داكن) التي يدعمها العنصر لضبط عناصر واجهة المستخدم الافتراضية مثل شريط التمرير تلقائياً",
                values: [
                    { value: "normal", description: "لا تفضيل محدد - يستخدم المتصفح وضعه الافتراضي (القيمة الافتراضية)" },
                    { value: "light", description: "يدعم الوضع الفاتح فقط - عناصر الواجهة ستكون فاتحة" },
                    { value: "dark", description: "يدعم الوضع الداكن فقط - عناصر الواجهة ستكون داكنة" },
                    { value: "light dark", description: "يدعم كلا الوضعين، يتبع تفضيل نظام المستخدم" },
                    { value: "dark light", description: "يدعم كلا الوضعين، يفضل الداكن إن كان متاحاً" }
                ],
                freeInput: true
            },
            // -------- forced-color-adjust --------
            {
                name: "forced-color-adjust",
                description: "يتحكم في إمكانية تجاوز المتصفح لألوان العنصر عند تفعيل وضع الألوان القسري (Forced Colors mode) لإمكانية الوصول",
                values: [
                    { value: "auto", description: "يسمح للمتصفح بتعديل الألوان لتتناسب مع وضع القسري (القيمة الافتراضية)" },
                    { value: "none", description: "يحافظ على الألوان الأصلية للعنصر ولا يسمح للمتصفح بتغييرها" }
                ]
            },
            // -------- text-decoration-color --------
            {
                name: "text-decoration-color",
                description: "يحدد لون خط التزيين النصي (تسطير، خط فوق النص، خط خلال النص)",
                values: [
                    { value: "currentColor", description: "نفس لون النص (القيمة الافتراضية)" },
                    { value: "red", description: "خط تزيين أحمر" },
                    { value: "#007bff", description: "خط تزيين أزرق" }
                ],
                freeInput: true
            },
            // -------- text-emphasis-color --------
            {
                name: "text-emphasis-color",
                description: "يحدد لون علامات التأكيد على النص (النقاط أو الدوائر فوق النص في اللغات الآسيوية)",
                values: [
                    { value: "currentColor", description: "نفس لون النص (القيمة الافتراضية)" },
                    { value: "red", description: "علامات تأكيد حمراء" }
                ],
                freeInput: true
            },
            // -------- caret-color --------
            {
                name: "caret-color",
                description: "يحدد لون مؤشر الكتابة (المؤشر الوامض) في حقول النص",
                values: [
                    { value: "auto", description: "يستخدم المتصفح اللون الافتراضي (القيمة الافتراضية)" },
                    { value: "red", description: "مؤشر أحمر" },
                    { value: "transparent", description: "مؤشر شفاف (مفيد للتصاميم الخاصة)" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. background (الخلفية) - الاختصار
    // ============================================================
    {
        tag: "background",
        description: "اختصار لتحديد خصائص الخلفية دفعة واحدة (اللون، الصورة، الحجم، الموضع، التكرار، إلخ)",
        properties: [
            // -------- background (الاختصار) --------
            {
                name: "background",
                description: "الخاصية المختصرة للخلفية، تجمع كل الخصائص في سطر واحد بترتيب محدد",
                values: [
                    { value: "transparent", description: "خلفية شفافة (القيمة الافتراضية)" },
                    { value: "red", description: "خلفية حمراء صافية" },
                    { value: "#f0f0f0", description: "خلفية رمادية فاتحة جداً" },
                    { value: "url('bg.png')", description: "صورة خلفية بحجمها الطبيعي، تتكرر تلقائياً" },
                    { value: "linear-gradient(red, blue)", description: "تدرج لوني من الأحمر إلى الأزرق" },
                    { value: "radial-gradient(circle, red, blue)", description: "تدرج شعاعي دائري" },
                    { value: "conic-gradient(from 0deg, red, blue, green)", description: "تدرج مخروطي" },
                    { value: "url('bg.png') no-repeat center/cover", description: "صورة في المنتصف دون تكرار، تغطي العنصر بالكامل" },
                    { value: "url('bg.png') repeat-y right", description: "صورة مكررة عمودياً في الجهة اليمنى" },
                    { value: "white url('bg.png') fixed", description: "خلفية بيضاء مع صورة ثابتة لا تتحرك عند التمرير" },
                    { value: "url('bg.png') no-repeat 10px 20px/200px auto", description: "صورة في موضع محدد بحجم معين" },
                    { value: "url('bg.png') repeat-x scroll 50% 0%/cover", description: "صورة متكررة أفقياً مع تمرير" },
                    { value: "rgba(0,0,0,0.5) url('bg.png') no-repeat center/cover", description: "صورة مع طبقة شفافية" },
                    { value: "url('image1.jpg'), url('image2.jpg')", description: "صور خلفية متعددة (طبقات)" },
                    { value: "url('image.jpg'), linear-gradient(red, blue)", description: "صورة فوق تدرج لوني" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. background-color (لون الخلفية)
    // ============================================================
    {
        tag: "background-color",
        description: "يحدد لون خلفية العنصر، يمكن استخدام أي لون أو شفافية، أساس أي تصميم خلفية",
        properties: [
            {
                name: "background-color",
                description: "يحدد لون خلفية العنصر، يمكن استخدام أي نظام ألوان",
                values: [
                    // أسماء الألوان
                    { value: "transparent", description: "خلفية شفافة - يظهر ما خلف العنصر (القيمة الافتراضية)" },
                    { value: "white", description: "خلفية بيضاء - أنظف خلفية" },
                    { value: "black", description: "خلفية سوداء - جريئة وعصرية" },
                    { value: "red", description: "خلفية حمراء - جذابة وملفتة" },
                    { value: "blue", description: "خلفية زرقاء - هادئة ومريحة" },
                    { value: "green", description: "خلفية خضراء - طبيعية ومنعشة" },
                    { value: "yellow", description: "خلفية صفراء - مشرقة ومبهجة" },
                    { value: "gray", description: "خلفية رمادية - محايدة واحترافية" },
                    { value: "lightgray", description: "خلفية رمادية فاتحة - ناعمة" },
                    { value: "darkgray", description: "خلفية رمادية داكنة - أنيقة" },
                    
                    // Hex
                    { value: "#ffffff", description: "أبيض" },
                    { value: "#000000", description: "أسود" },
                    { value: "#f8f9fa", description: "رمادي فاتح جداً (مستخدم في Bootstrap)" },
                    { value: "#f0f0f0", description: "رمادي فاتح جداً" },
                    { value: "#e9ecef", description: "رمادي فاتح" },
                    { value: "#dee2e6", description: "رمادي متوسط فاتح" },
                    { value: "#ced4da", description: "رمادي متوسط" },
                    { value: "#adb5bd", description: "رمادي متوسط غامق" },
                    { value: "#6c757d", description: "رمادي غامق" },
                    { value: "#495057", description: "رمادي غامق جداً" },
                    { value: "#343a40", description: "رمادي أسود تقريباً" },
                    
                    // RGB/RGBA
                    { value: "rgb(255, 255, 255)", description: "أبيض" },
                    { value: "rgb(0, 0, 0)", description: "أسود" },
                    { value: "rgba(0, 0, 0, 0.5)", description: "أسود شفاف 50% - طبقة تعتيم" },
                    { value: "rgba(255, 255, 255, 0.5)", description: "أبيض شفاف 50% - طبقة تفتيح" },
                    { value: "rgba(0, 0, 255, 0.3)", description: "أزرق شفاف 30% - تأثير ناعم" },
                    
                    // HSL/HSLA
                    { value: "hsl(0, 0%, 100%)", description: "أبيض" },
                    { value: "hsl(0, 0%, 0%)", description: "أسود" },
                    { value: "hsla(240, 100%, 50%, 0.3)", description: "أزرق شفاف 30%" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. background-image (صورة الخلفية)
    // ============================================================
    {
        tag: "background-image",
        description: "يحدد صورة أو تدرجاً لونياً كخلفية للعنصر، يمكن استخدام صور متعددة في طبقات",
        properties: [
            {
                name: "background-image",
                description: "يحدد صورة أو تدرجاً لونياً كخلفية للعنصر",
                values: [
                    { value: "none", description: "بدون صورة خلفية (القيمة الافتراضية)" },
                    { value: "url('image.jpg')", description: "صورة من ملف JPG" },
                    { value: "url('image.png')", description: "صورة من ملف PNG (يدعم الشفافية)" },
                    { value: "url('image.svg')", description: "صورة من ملف SVG (قابلة للتكبير)" },
                    { value: "url('image.webp')", description: "صورة من ملف WebP (أفضل ضغط)" },
                    { value: "url('image.jpg') no-repeat", description: "صورة بدون تكرار" },
                    
                    // التدرجات الخطية
                    { value: "linear-gradient(red, blue)", description: "تدرج خطي من الأحمر إلى الأزرق (من أعلى لأسفل)" },
                    { value: "linear-gradient(to right, red, blue)", description: "تدرج خطي من اليسار لليمين" },
                    { value: "linear-gradient(45deg, red, blue)", description: "تدرج خطي بزاوية 45 درجة" },
                    { value: "linear-gradient(to top left, red, blue)", description: "تدرج خطي باتجاه أعلى اليسار" },
                    { value: "linear-gradient(red 0%, yellow 50%, blue 100%)", description: "تدرج متعدد الألوان" },
                    { value: "linear-gradient(red 30%, blue 70%)", description: "تدرج مع تحكم في النقاط" },
                    { value: "linear-gradient(red, orange, yellow, green, blue)", description: "تدرج قوس قزح" },
                    
                    // التدرجات الشعاعية
                    { value: "radial-gradient(circle, red, blue)", description: "تدرج شعاعي دائري" },
                    { value: "radial-gradient(ellipse, red, blue)", description: "تدرج شعاعي بيضاوي" },
                    { value: "radial-gradient(circle at top left, red, blue)", description: "تدرج شعاعي من أعلى اليسار" },
                    { value: "radial-gradient(circle, red 30%, blue 70%)", description: "تدرج شعاعي مع تحكم" },
                    { value: "radial-gradient(circle closest-side, red, blue)", description: "تدرج شعاعي بأقرب حافة" },
                    { value: "radial-gradient(circle farthest-corner, red, blue)", description: "تدرج شعاعي بأبعد زاوية" },
                    
                    // التدرجات المخروطية
                    { value: "conic-gradient(red, blue)", description: "تدرج مخروطي" },
                    { value: "conic-gradient(from 0deg, red, blue, green)", description: "تدرج مخروطي متعدد" },
                    { value: "conic-gradient(red 0%, blue 50%, green 100%)", description: "تدرج مخروطي مع تحكم" },
                    { value: "conic-gradient(from 45deg, red, blue)", description: "تدرج مخروطي بزاوية بداية" },
                    
                    // التدرجات المتكررة
                    { value: "repeating-linear-gradient(red 0px, blue 20px)", description: "تدرج خطي متكرر" },
                    { value: "repeating-radial-gradient(circle, red 0px, blue 20px)", description: "تدرج شعاعي متكرر" },
                    { value: "repeating-conic-gradient(red 0%, blue 20%)", description: "تدرج مخروطي متكرر" },
                    
                    // صور خلفية متعددة (طبقات)
                    { value: "url('image1.jpg'), url('image2.jpg')", description: "صور خلفية متعددة (طبقات)" },
                    { value: "url('image.jpg'), linear-gradient(red, blue)", description: "صورة فوق تدرج لوني" },
                    { value: "url('image1.jpg'), url('image2.jpg'), #f0f0f0", description: "ثلاث طبقات: صورتين ولون" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. background-repeat (تكرار الخلفية)
    // ============================================================
    {
        tag: "background-repeat",
        description: "يحدد كيف تتكرر صورة الخلفية (أفقياً، عمودياً، أو لا تتكرر)، يتحكم في امتداد الصورة",
        properties: [
            {
                name: "background-repeat",
                description: "يحدد كيف تتكرر صورة الخلفية",
                values: [
                    { value: "repeat", description: "تتكرر في كلا الاتجاهين (أفقي وعمودي) - القيمة الافتراضية" },
                    { value: "no-repeat", description: "لا تتكرر، تظهر مرة واحدة فقط" },
                    { value: "repeat-x", description: "تتكرر أفقياً فقط (يمين ويسار) - مفيد للأشرطة" },
                    { value: "repeat-y", description: "تتكرر عمودياً فقط (أعلى وأسفل) - مفيد للخلفيات الجانبية" },
                    { value: "round", description: "تتكرر وتتمدد لتملأ الفراغ بدون قص، يتغير حجم الصورة" },
                    { value: "space", description: "تتكرر مع توزيع متساوٍ بين النسخ، تظهر كاملة بدون قص" },
                    { value: "round repeat", description: "أفقي round، عمودي repeat" },
                    { value: "no-repeat repeat", description: "أفقي no-repeat، عمودي repeat" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. background-position (موضع الخلفية)
    // ============================================================
    {
        tag: "background-position",
        description: "يحدد مكان ظهور صورة الخلفية داخل العنصر، يتحكم في مكان بداية الصورة",
        properties: [
            {
                name: "background-position",
                description: "يحدد مكان ظهور صورة الخلفية داخل العنصر",
                values: [
                    { value: "0% 0%", description: "أعلى اليسار (القيمة الافتراضية)" },
                    { value: "0% 100%", description: "أسفل اليسار" },
                    { value: "100% 0%", description: "أعلى اليمين" },
                    { value: "100% 100%", description: "أسفل اليمين" },
                    { value: "50% 50%", description: "المنتصف بالضبط - أشهر قيمة" },
                    { value: "center", description: "المنتصف (اختصار لـ 50% 50%)" },
                    { value: "top", description: "أعلى المنتصف" },
                    { value: "bottom", description: "أسفل المنتصف" },
                    { value: "left", description: "منتصف اليسار" },
                    { value: "right", description: "منتصف اليمين" },
                    { value: "right top", description: "أعلى اليمين" },
                    { value: "left bottom", description: "أسفل اليسار" },
                    { value: "10px 20px", description: "10 بكسل من اليسار، 20 بكسل من الأعلى" },
                    { value: "50% 100%", description: "أسفل المنتصف" },
                    { value: "25% 75%", description: "ربع المسافة من اليسار، ثلاثة أرباع من الأعلى" },
                    { value: "-50px 100px", description: "قيم سالبة - تخرج الصورة عن حدود العنصر" },
                    { value: "center 30px", description: "منتصف أفقياً، 30 بكسل من الأعلى" }
                ],
                freeInput: true
            },
            // -------- background-position-x --------
            {
                name: "background-position-x",
                description: "يحدد الموضع الأفقي لصورة الخلفية فقط (مستقل عن الموضع العمودي)",
                values: [
                    { value: "left", description: "أقصى اليسار" },
                    { value: "center", description: "المنتصف أفقياً" },
                    { value: "right", description: "أقصى اليمين" },
                    { value: "0%", description: "أقصى اليسار" },
                    { value: "25%", description: "ربع المسافة من اليسار" },
                    { value: "50%", description: "المنتصف" },
                    { value: "75%", description: "ثلاثة أرباع المسافة" },
                    { value: "100%", description: "أقصى اليمين" },
                    { value: "20px", description: "20 بكسل من اليسار" },
                    { value: "-10px", description: "قيمة سالبة - 10 بكسل يسار العنصر" }
                ],
                freeInput: true
            },
            // -------- background-position-y --------
            {
                name: "background-position-y",
                description: "يحدد الموضع الرأسي لصورة الخلفية فقط (مستقل عن الموضع الأفقي)",
                values: [
                    { value: "top", description: "أعلى" },
                    { value: "center", description: "المنتصف عمودياً" },
                    { value: "bottom", description: "أسفل" },
                    { value: "0%", description: "أعلى" },
                    { value: "25%", description: "ربع المسافة من الأعلى" },
                    { value: "50%", description: "المنتصف" },
                    { value: "75%", description: "ثلاثة أرباع المسافة" },
                    { value: "100%", description: "أسفل" },
                    { value: "20px", description: "20 بكسل من الأعلى" },
                    { value: "-10px", description: "قيمة سالبة - 10 بكسل أعلى العنصر" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 7. background-size (حجم الخلفية)
    // ============================================================
    {
        tag: "background-size",
        description: "يحدد حجم صورة الخلفية (تكبير، تصغير، أو تغطية العنصر)، يتحكم في مقياس الصورة",
        properties: [
            {
                name: "background-size",
                description: "يحدد حجم صورة الخلفية",
                values: [
                    { value: "auto", description: "الحجم الطبيعي للصورة - لا تغيير (القيمة الافتراضية)" },
                    { value: "50px 50px", description: "حجم ثابت 50×50 بكسل" },
                    { value: "100px 100px", description: "حجم ثابت 100×100 بكسل" },
                    { value: "200px 150px", description: "حجم ثابت 200×150 بكسل" },
                    { value: "50% 50%", description: "نصف حجم العنصر" },
                    { value: "100% 100%", description: "نفس حجم العنصر (تمدد كامل)" },
                    { value: "100% auto", description: "العرض كامل، الارتفاع تلقائي" },
                    { value: "auto 100%", description: "العرض تلقائي، الارتفاع كامل" },
                    { value: "cover", description: "تكبر الصورة لتغطي العنصر بالكامل (قد تُقص أجزاء من الصورة) - أشهر قيمة" },
                    { value: "contain", description: "تكبر الصورة لتلائم العنصر مع الحفاظ على نسبها (قد تترك فراغات)" },
                    { value: "200% 200%", description: "ضعف حجم العنصر - تكبير مفرط" },
                    { value: "150% 100%", description: "تكبير أفقي فقط" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 8. background-attachment (ثبات الخلفية)
    // ============================================================
    {
        tag: "background-attachment",
        description: "يحدد هل تتحرك صورة الخلفية مع تمرير الصفحة أم تبقى ثابتة، يخلق تأثيرات بارالاكس",
        properties: [
            {
                name: "background-attachment",
                description: "يحدد هل تتحرك صورة الخلفية مع تمرير الصفحة أم تبقى ثابتة",
                values: [
                    { value: "scroll", description: "تتحرك مع تمرير الصفحة (القيمة الافتراضية) - الصورة تتبع التمرير" },
                    { value: "fixed", description: "تبقى ثابتة في مكانها عند التمرير (تأثير بارالاكس) - جميل للمشاهد" },
                    { value: "local", description: "تتحرك مع تمرير محتوى العنصر نفسه - تتبع تمرير العنصر" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. background-clip (قص الخلفية)
    // ============================================================
    {
        tag: "background-clip",
        description: "يحدد إلى أي مدى تمتد الخلفية (تشمل الحواف، الهوامش الداخلية، أو المحتوى فقط)",
        properties: [
            {
                name: "background-clip",
                description: "يحدد إلى أي مدى تمتد الخلفية",
                values: [
                    { value: "border-box", description: "تمتد الخلفية إلى الحواف الخارجية بما فيها الحافة (القيمة الافتراضية)" },
                    { value: "padding-box", description: "تمتد الخلفية إلى الهوامش الداخلية فقط (لا تشمل الحافة)" },
                    { value: "content-box", description: "تمتد الخلفية إلى المحتوى فقط (لا تشمل الحافة أو الهوامش الداخلية)" },
                    { value: "text", description: "تظهر الخلفية خلف النص فقط (تأثير قطع النص) - تحتاج لـ color: transparent" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. background-origin (مرجع الخلفية)
    // ============================================================
    {
        tag: "background-origin",
        description: "يحدد النقطة المرجعية لبداية صورة الخلفية (من الحواف، الهوامش، أم المحتوى)",
        properties: [
            {
                name: "background-origin",
                description: "يحدد النقطة المرجعية لبداية صورة الخلفية",
                values: [
                    { value: "padding-box", description: "تبدأ من الهوامش الداخلية (القيمة الافتراضية)" },
                    { value: "border-box", description: "تبدأ من الحواف الخارجية" },
                    { value: "content-box", description: "تبدأ من المحتوى" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. opacity (الشفافية)
    // ============================================================
    {
        tag: "opacity",
        description: "يحدد شفافية العنصر بأكمله (النص والخلفية والحواف)، من 0 (شفاف بالكامل) إلى 1 (معتم)",
        properties: [
            {
                name: "opacity",
                description: "يحدد شفافية العنصر بأكمله",
                values: [
                    { value: "1", description: "معتم بالكامل - لا شفافية (القيمة الافتراضية)" },
                    { value: "0.95", description: "شفاف 5% - شبه معتم" },
                    { value: "0.9", description: "شفاف 10%" },
                    { value: "0.85", description: "شفاف 15%" },
                    { value: "0.8", description: "شفاف 20%" },
                    { value: "0.75", description: "شفاف 25%" },
                    { value: "0.7", description: "شفاف 30%" },
                    { value: "0.65", description: "شفاف 35%" },
                    { value: "0.6", description: "شفاف 40%" },
                    { value: "0.55", description: "شفاف 45%" },
                    { value: "0.5", description: "شفاف 50% - نصف شفاف" },
                    { value: "0.45", description: "شفاف 55%" },
                    { value: "0.4", description: "شفاف 60%" },
                    { value: "0.35", description: "شفاف 65%" },
                    { value: "0.3", description: "شفاف 70%" },
                    { value: "0.25", description: "شفاف 75%" },
                    { value: "0.2", description: "شفاف 80%" },
                    { value: "0.15", description: "شفاف 85%" },
                    { value: "0.1", description: "شفاف 90% - شبه شفاف" },
                    { value: "0.05", description: "شفاف 95%" },
                    { value: "0", description: "شفاف بالكامل (غير مرئي) - يختفي العنصر" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 12. accent-color (لون المميز)
    // ============================================================
    {
        tag: "accent-color",
        description: "يحدد لون المميز لعناصر النموذج مثل مربعات الاختيار وأزرار الراديو والقوائم المنسدلة",
        properties: [
            {
                name: "accent-color",
                description: "يحدد لون المميز لعناصر النموذج",
                values: [
                    { value: "auto", description: "يستخدم المتصفح لونه الافتراضي (القيمة الافتراضية)" },
                    { value: "red", description: "لون أحمر لعناصر النموذج" },
                    { value: "blue", description: "لون أزرق لعناصر النموذج" },
                    { value: "green", description: "لون أخضر" },
                    { value: "#007bff", description: "لون أزرق مخصص (Bootstrap)" },
                    { value: "#28a745", description: "لون أخضر مخصص" },
                    { value: "#dc3545", description: "لون أحمر مخصص" },
                    { value: "#ffc107", description: "لون أصفر مخصص" },
                    { value: "#6f42c1", description: "لون بنفسجي مخصص" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 13. background-blend-mode (مزج الخلفيات)
    // ============================================================
    {
        tag: "background-blend-mode",
        description: "يحدد كيفية مزج طبقات الخلفية المتعددة مع بعضها (عند وجود أكثر من صورة خلفية)",
        properties: [
            {
                name: "background-blend-mode",
                description: "يحدد كيفية مزج طبقات الخلفية المتعددة مع بعضها",
                values: [
                    { value: "normal", description: "مزج عادي - لا تأثير خاص (القيمة الافتراضية)" },
                    { value: "multiply", description: "ضرب الألوان - يغمق الصورة" },
                    { value: "screen", description: "شاشة (تفتيح) - يفتح الصورة" },
                    { value: "overlay", description: "تراكب - يزيد التباين" },
                    { value: "darken", description: "تغميق - يختار اللون الأغمق" },
                    { value: "lighten", description: "تفتيح - يختار اللون الأفتح" },
                    { value: "color-dodge", description: "تفتيح الألوان - تأثير مشرق" },
                    { value: "color-burn", description: "حرق الألوان - تأثير غامق" },
                    { value: "hard-light", description: "ضوء صلب - تباين عالي" },
                    { value: "soft-light", description: "ضوء ناعم - تباين منخفض" },
                    { value: "difference", description: "فرق - تأثير عكسي" },
                    { value: "exclusion", description: "استثناء - مشابه للفرق لكن أقل حدة" },
                    { value: "hue", description: "تدرج لوني - يستخدم تدرج الطبقة العليا" },
                    { value: "saturation", description: "تشبع - يستخدم تشبع الطبقة العليا" },
                    { value: "color", description: "لون - يستخدم لون الطبقة العليا" },
                    { value: "luminosity", description: "إضاءة - يستخدم إضاءة الطبقة العليا" }
                ]
            }
        ]
    },

    // ============================================================
    // 14. isolation و mix-blend-mode
    // ============================================================
    {
        tag: "blend-modes",
        description: "خصائص التحكم في مزج الألوان بين العناصر: isolation تخلق سياقاً منفصلاً، و mix-blend-mode تحدد كيفية مزج العنصر مع ما خلفه",
        properties: [
            // -------- isolation --------
            {
                name: "isolation",
                description: "يخلق سياق تركيب منفصل للعنصر، يمنع تأثير خلفيته على العناصر الفرعية (مهم مع mix-blend-mode)",
                values: [
                    { value: "auto", description: "لا سياق منفصل - المزج يؤثر على كل العناصر (القيمة الافتراضية)" },
                    { value: "isolate", description: "يخلق سياق تركيب منفصل - يحمي العناصر الفرعية من مزج الخلفية" }
                ]
            },
            // -------- mix-blend-mode --------
            {
                name: "mix-blend-mode",
                description: "يحدد كيفية مزج لون العنصر مع لون الخلفية أو العناصر التي خلفه",
                values: [
                    { value: "normal", description: "مزج عادي - لا تأثير خاص (القيمة الافتراضية)" },
                    { value: "multiply", description: "ضرب الألوان - يغمق الألوان" },
                    { value: "screen", description: "شاشة (تفتيح) - يفتح الألوان" },
                    { value: "overlay", description: "تراكب - يزيد التباين" },
                    { value: "darken", description: "تغميق - يختار اللون الأغمق" },
                    { value: "lighten", description: "تفتيح - يختار اللون الأفتح" },
                    { value: "color-dodge", description: "تفتيح الألوان - تأثير مشرق" },
                    { value: "color-burn", description: "حرق الألوان - تأثير غامق" },
                    { value: "hard-light", description: "ضوء صلب - تباين عالي" },
                    { value: "soft-light", description: "ضوء ناعم - تباين منخفض" },
                    { value: "difference", description: "فرق - تأثير عكسي (مفيد للتصاميم الفنية)" },
                    { value: "exclusion", description: "استثناء - مشابه للفرق لكن أقل حدة" },
                    { value: "hue", description: "تدرج لوني - يستخدم تدرج العنصر العلوي" },
                    { value: "saturation", description: "تشبع - يستخدم تشبع العنصر العلوي" },
                    { value: "color", description: "لون - يستخدم لون العنصر العلوي مع إضاءة العنصر السفلي" },
                    { value: "luminosity", description: "إضاءة - يستخدم إضاءة العنصر العلوي مع لون العنصر السفلي" }
                ]
            }
        ]
    },

    // ============================================================
    // 15. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "background-examples",
        description: "أمثلة عملية متقدمة للألوان والخلفيات تجمع بين عدة خصائص",
        properties: [
            {
                name: "مثال 1 - خلفية متدرجة أنيقة",
                description: "خلفية بتدرج خطي مع تباين جميل",
                values: [
                    { value: ".gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }", description: "تدرج بنفسجي - أزرق أنيق" },
                    { value: ".gradient-bg { background: linear-gradient(to right, #f093fb 0%, #f5576c 100%); }", description: "تدرج وردي - أحمر" },
                    { value: ".gradient-bg { background: linear-gradient(45deg, #43e97b 0%, #38f9d7 100%); }", description: "تدرج أخضر - فيروزي" }
                ]
            },
            {
                name: "مثال 2 - صورة مع طبقة تعتيم",
                description: "صورة خلفية مع طبقة شفافية لتحسين قراءة النص",
                values: [
                    { value: ".hero { background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('hero.jpg') no-repeat center/cover; }", description: "صورة مع طبقة تعتيم سوداء 50%" }
                ]
            },
            {
                name: "مثال 3 - تأثير بارالاكس",
                description: "خلفية ثابتة تتحرك ببطء مع التمرير",
                values: [
                    { value: ".parallax { background: url('bg.jpg') no-repeat center/cover; background-attachment: fixed; }", description: "تأثير بارالاكس جميل" }
                ]
            },
            {
                name: "مثال 4 - قطع النص بالخلفية",
                description: "نص مع خلفية متدرجة مقطوعة على النص",
                values: [
                    { value: ".gradient-text { background: linear-gradient(45deg, #f093fb, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }", description: "نص بتدرج لوني" }
                ]
            },
            {
                name: "مثال 5 - خلفية بنقاط متكررة",
                description: "نمط متكرر من النقاط للخلفية",
                values: [
                    { value: ".dots { background: radial-gradient(circle at 50% 50%, #ccc 2px, transparent 2px); background-size: 20px 20px; background-color: #f8f9fa; }", description: "خلفية بنمط نقطي" }
                ]
            }
        ]
    },

    // ============================================================
    // 16. نصائح وإرشادات
    // ============================================================
    {
        tag: "background-tips",
        description: "نصائح وإرشادات مهمة لاستخدام الألوان والخلفيات بشكل فعال",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الألوان والخلفيات",
                values: [
                    { value: "استخدم صور خلفية مخففة", description: "استخدم WebP بدلاً من PNG/JPG لتوفير الحجم" },
                    { value: "تجنب background-attachment: fixed", description: "تسبب مشاكل أداء على الجوال، خاصة في Safari" },
                    { value: "استخدم التدرجات بدلاً من الصور", description: "التدرجات أخف وزناً وأسرع في التحميل" },
                    { value: "حدد لون خلفية احتياطي", description: "دائماً استخدم background-color مع background-image" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل الألوان والخلفيات قابلة للوصول",
                values: [
                    { value: "احرص على تباين كافٍ", description: "نسبة التباين يجب أن تكون 4.5:1 على الأقل للنص العادي" },
                    { value: "لا تعتمد على اللون فقط", description: "استخدم إشارات إضافية بجانب اللون" },
                    { value: "دعم prefers-color-scheme", description: "استخدم @media (prefers-color-scheme: dark) لضبط الألوان" },
                    { value: "استخدم forced-color-adjust: none", description: "حافظ على الألوان المهمة في وضع الألوان القسري" }
                ]
            },
            {
                name: "نصائح التصميم",
                description: "نصائح لتصميم ألوان وخلفيات جذابة",
                values: [
                    { value: "استخدم لوحة ألوان محدودة", description: "2-3 ألوان رئيسية تكفي لتصميم احترافي" },
                    { value: "استخدم التدرجات الحديثة", description: "التدرجات تضيف عمقاً واحترافية للتصاميم" },
                    { value: "جرب تأثير الـ Glassmorphism", description: "استخدم خلفيات شفافة مع blur للتأثير الزجاجي" },
                    { value: "استخدم الظلال الناعمة", description: "box-shadow بألوان خفيفة تعطي عمقاً" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.colorsBackgroundsData = colorsBackgroundsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = colorsBackgroundsData;
}