// ============================================================
// css-functions.js
// دوال (Functions) في CSS
// تشرح جميع الدوال المستخدمة في CSS مع أمثلة واستخدامات
// ============================================================

const cssFunctionsData = [
    // ============================================================
    // 1. دوال القيم (Value Functions)
    // ============================================================
    {
        tag: "value-functions",
        description: "دوال تُستخدم لتوليد أو حساب القيم في CSS",
        properties: [
            {
                name: "attr()",
                description: "تأخذ قيمة سمة HTML من العنصر الحالي وتستخدمها كقيمة في CSS، مفيدة لإضافة بيانات ديناميكية",
                values: [
                    { value: "attr(href)", description: "تأخذ قيمة سمة href" },
                    { value: "attr(title)", description: "تأخذ قيمة سمة title" },
                    { value: "attr(data-tooltip)", description: "تأخذ قيمة سمة data-tooltip" },
                    { value: "attr(data-label, 'نص افتراضي')", description: "تأخذ قيمة data-label مع قيمة افتراضية" },
                    { value: "attr(data-width, '100px')", description: "تأخذ قيمة data-width مع قيمة افتراضية" },
                    { value: "attr(data-type, 'text')", description: "تأخذ قيمة data-type مع قيمة افتراضية" }
                ]
            },
            {
                name: "url()",
                description: "تحدد رابطاً لملف خارجي (صورة، خط، SVG، إلخ). تُستخدم في background-image و list-style-image و border-image و @font-face و غيرها",
                values: [
                    { value: "url('image.jpg')", description: "رابط صورة JPG" },
                    { value: "url('image.png')", description: "رابط صورة PNG" },
                    { value: "url('image.svg')", description: "رابط صورة SVG" },
                    { value: "url('image.webp')", description: "رابط صورة WebP" },
                    { value: "url('font.woff2')", description: "رابط خط WOFF2" },
                    { value: "url('data:image/svg+xml,...')", description: "صورة مشفرة في CSS (Data URI)" },
                    { value: "url('https://example.com/image.jpg')", description: "رابط خارجي" },
                    { value: "url('icon.svg#icon-id')", description: "رابط SVG مع معرف (جزء في ملف SVG)" }
                ]
            },
            {
                name: "var()",
                description: "تستدعي قيمة متغير مخصص (Custom Property) تم تعريفه مسبقاً. يمكن استخدامها في أي خاصية CSS وتدعم القيم الاحتياطية",
                values: [
                    { value: "var(--primary-color)", description: "يستخدم قيمة المتغير --primary-color" },
                    { value: "var(--font-size-base, 16px)", description: "يستخدم المتغير مع قيمة احتياطية 16px" },
                    { value: "var(--spacing-unit, 8px)", description: "يستخدم المتغير مع قيمة احتياطية" }
                ]
            },
            {
                name: "env()",
                description: "تأخذ قيمة من بيئة المتصفح (مثل المسافات الآمنة للشاشات المقطوعة)",
                values: [
                    { value: "env(safe-area-inset-top)", description: "المسافة الآمنة من الأعلى" },
                    { value: "env(safe-area-inset-bottom, 0px)", description: "مع قيمة احتياطية" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. دوال الألوان (Color Functions)
    // ============================================================
    {
        tag: "color-functions",
        description: "دوال لتحديد الألوان بطرق مختلفة",
        properties: [
            {
                name: "rgb()",
                description: "تحدد لوناً باستخدام قيم الأحمر والأخضر والأزرق (0-255). تُستخدم في أي خاصية تقبل قيمة لونية مثل color و background-color و border-color",
                values: [
                    { value: "rgb(255, 0, 0)", description: "أحمر" },
                    { value: "rgb(0, 255, 0)", description: "أخضر" },
                    { value: "rgb(0, 0, 255)", description: "أزرق" },
                    { value: "rgb(255, 255, 255)", description: "أبيض" },
                    { value: "rgb(0, 0, 0)", description: "أسود" },
                    { value: "rgb(128, 128, 128)", description: "رمادي" },
                    { value: "rgb(255, 165, 0)", description: "برتقالي" },
                    { value: "rgb(128, 0, 128)", description: "بنفسجي" },
                    { value: "rgb(255, 192, 203)", description: "وردي" },
                    { value: "rgb(165, 42, 42)", description: "بني" }
                ]
            },
            {
                name: "rgba()",
                description: "تحدد لوناً مع شفافية (Alpha) من 0 (شفاف) إلى 1 (معتم). تُستخدم في أي خاصية تقبل لوناً مع شفافية مثل color و background-color",
                values: [
                    { value: "rgba(255, 0, 0, 0.5)", description: "أحمر شفاف 50%" },
                    { value: "rgba(0, 0, 255, 0.3)", description: "أزرق شفاف 30%" },
                    { value: "rgba(0, 0, 0, 0.1)", description: "أسود شفاف 10% - ظل خفيف جداً" },
                    { value: "rgba(255, 255, 255, 0.8)", description: "أبيض شفاف 80% - شبه معتم" },
                    { value: "rgba(0, 0, 0, 0.5)", description: "أسود شفاف 50% - نصف شفاف" },
                    { value: "rgba(255, 255, 255, 0.5)", description: "أبيض شفاف 50%" }
                ]
            },
            {
                name: "hsl()",
                description: "تحدد لوناً باستخدام Hue (درجة اللون 0-360)، Saturation (التشبع 0-100%)، Lightness (الإضاءة 0-100%). تُستخدم في أي خاصية تقبل قيمة لونية",
                values: [
                    { value: "hsl(0, 100%, 50%)", description: "أحمر" },
                    { value: "hsl(120, 100%, 50%)", description: "أخضر" },
                    { value: "hsl(240, 100%, 50%)", description: "أزرق" },
                    { value: "hsl(0, 0%, 100%)", description: "أبيض" },
                    { value: "hsl(0, 0%, 0%)", description: "أسود" },
                    { value: "hsl(30, 100%, 50%)", description: "برتقالي" },
                    { value: "hsl(300, 100%, 50%)", description: "أرجواني" },
                    { value: "hsl(200, 50%, 40%)", description: "أزرق متوسط" }
                ]
            },
            {
                name: "hsla()",
                description: "تحدد لوناً HSL مع شفافية (Alpha) من 0 إلى 1. تُستخدم في أي خاصية تقبل لوناً مع شفافية مثل color و background-color",
                values: [
                    { value: "hsla(0, 100%, 50%, 0.5)", description: "أحمر شفاف 50%" },
                    { value: "hsla(240, 100%, 50%, 0.3)", description: "أزرق شفاف 30%" },
                    { value: "hsla(0, 0%, 0%, 0.2)", description: "أسود شفاف 20%" }
                ]
            },
            {
                name: "hwb()",
                description: "تحدد لوناً باستخدام Hue (درجة اللون 0-360)، Whiteness (البياض 0-100%)، Blackness (السواد 0-100%). نظام ألوان آخر بديل لـ HSL",
                values: [
                    { value: "hwb(0, 0%, 0%)", description: "أحمر" },
                    { value: "hwb(0, 50%, 0%)", description: "وردي" },
                    { value: "hwb(0, 0%, 50%)", description: "أحمر داكن" }
                ]
            },
            {
                name: "lab()",
                description: "نظام ألوان Lab (Lightness, a, b) - يعتمد على إدراك العين البشرية، أكثر دقة من RGB و HSL",
                values: [
                    { value: "lab(50% 80 40)", description: "لون أحمر في نظام Lab" },
                    { value: "lab(30% 50 -20)", description: "لون أزرق مائل" },
                    { value: "lab(90% -40 30)", description: "لون أخضر فاتح" }
                ]
            },
            {
                name: "lch()",
                description: "نظام ألوان LCH (Lightness, Chroma, Hue) - يمثل الألوان بطريقة دائرية، مشابه لـ HSL لكن بدقة أوسع",
                values: [
                    { value: "lch(50% 80 20)", description: "لون برتقالي" },
                    { value: "lch(60% 60 300)", description: "لون بنفسجي" },
                    { value: "lch(70% 40 120)", description: "لون أخضر" }
                ]
            },
            {
                name: "color()",
                description: "تحدد لوناً باستخدام مساحة لونية مخصصة مثل display-p3 التي تدعم ألواناً أوسع من sRGB العادي (gamut أوسع)",
                values: [
                    { value: "color(display-p3 1 0 0)", description: "أحمر في مساحة Display P3 (أكثر إشراقاً من sRGB)" },
                    { value: "color(display-p3 0 1 0)", description: "أخضر في Display P3" },
                    { value: "color(display-p3 0 0 1)", description: "أزرق في Display P3" }
                ]
            },
            {
                name: "color-mix()",
                description: "تخلط لونين معاً بنسب محددة، مفيدة لإنشاء ألوان مشتقة ديناميكياً",
                values: [
                    { value: "color-mix(in srgb, red 50%, blue 50%)", description: "مزيج من الأحمر والأزرق بنسبة 50/50" },
                    { value: "color-mix(in srgb, red 70%, blue 30%)", description: "أحمر أكثر (70%)" },
                    { value: "color-mix(in lab, red 50%, blue 50%)", description: "مزيج في مساحة Lab" }
                ]
            },
            {
                name: "contrast-color()",
                description: "تختار لوناً يتباين بشكل جيد مع لون الخلفية (تحديد تلقائي للون المثالي للقراءة)، مفيدة لتحسين إمكانية الوصول",
                values: [
                    { value: "contrast-color(black)", description: "تختار لوناً يتباين مع الأسود" },
                    { value: "contrast-color(white)", description: "تختار لوناً يتباين مع الأبيض" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. دوال الصور (Image Functions)
    // ============================================================
    {
        tag: "image-functions",
        description: "دوال لإنشاء الصور ومعالجتها",
        properties: [
            {
                name: "image()",
                description: "تحدد صورة مع إمكانية تحديد لون خلفية احتياطي أو صورة بديلة، مفيدة للصور التي قد لا تظهر (مثل الصور المعطلة)",
                values: [
                    { value: "image('image.jpg')", description: "صورة عادية" },
                    { value: "image('image.jpg', 'fallback.jpg')", description: "صورة مع صورة بديلة" },
                    { value: "image('image.jpg', red)", description: "صورة مع لون احتياطي" }
                ]
            },
            {
                name: "image-set()",
                description: "تحدد مجموعة من الصور بدقة مختلفة، ويختار المتصفح المناسب منها حسب دقة الشاشة (Retina، إلخ)",
                values: [
                    { value: "image-set('image.jpg' 1x, 'image@2x.jpg' 2x)", description: "صور بدقة 1x و 2x" },
                    { value: "image-set('image.jpg' 1x, 'image@2x.jpg' 2x, 'image@3x.jpg' 3x)", description: "ثلاث دقات مختلفة" }
                ]
            },
            {
                name: "linear-gradient()",
                description: "تُنشئ تدرجاً خطياً، تستخدم كقيمة لـ background-image بشكل أساسي وتدعم عدة ألوان ونقاط توقف. تأخذ اتجاه التدرج (زاوية أو كلمة مفتاحية مثل to bottom) وقائمة بالألوان ونقاط توقفها",
                values: [
                    { value: "linear-gradient(red, blue)", description: "تدرج من الأحمر إلى الأزرق" },
                    { value: "linear-gradient(to right, red, blue)", description: "تدرج من اليسار إلى اليمين" },
                    { value: "linear-gradient(45deg, red, blue)", description: "تدرج بزاوية 45 درجة" },
                    { value: "linear-gradient(red 0%, blue 50%, green 100%)", description: "تدرج بثلاثة ألوان" }
                ]
            },
            {
                name: "radial-gradient()",
                description: "تُنشئ تدرجاً شعاعياً (دائرياً أو بيضاوياً) يبدأ من مركز محدد (أو أي نقطة) ويتوسع للخارج، تستخدم كقيمة لـ background-image مع إمكانية تحديد شكل التدرج (دائرة أو بيضاوي) وحجمه (closest-side، farthest-corner، إلخ)",
                values: [
                    { value: "radial-gradient(circle, red, blue)", description: "تدرج شعاعي دائري" },
                    { value: "radial-gradient(ellipse, red, blue)", description: "تدرج شعاعي بيضاوي" },
                    { value: "radial-gradient(circle at 20% 50%, red, blue)", description: "تدرج دائري مركزه 20% من اليسار" }
                ]
            },
            {
                name: "conic-gradient()",
                description: "تُنشئ تدرجاً مخروطياً يدور حول مركز محدد (مثل قطع البيتزا)، تستخدم كقيمة لـ background-image وتدعم تحديد زاوية البداية ونقطة المركز",
                values: [
                    { value: "conic-gradient(red, blue)", description: "تدرج مخروطي" },
                    { value: "conic-gradient(from 45deg, red, blue)", description: "تدرج مخروطي يبدأ من 45 درجة" },
                    { value: "conic-gradient(red 0%, blue 50%, green 100%)", description: "تدرج مخروطي بثلاثة ألوان" }
                ]
            },
            {
                name: "repeating-*()",
                description: "تُنشئ تدرجات متكررة (خطية، شعاعية، أو مخروطية) بنمط يتكرر باستمرار، تستخدم كقيمة لـ background-image لإنشاء أنماط متكررة",
                values: [
                    { value: "repeating-linear-gradient(red 0px, blue 20px)", description: "تدرج خطي متكرر" },
                    { value: "repeating-radial-gradient(circle, red 0%, blue 20%)", description: "تدرج شعاعي متكرر" },
                    { value: "repeating-conic-gradient(red 0%, blue 20%)", description: "تدرج مخروطي متكرر" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. دوال الرياضيات (Math Functions)
    // ============================================================
    {
        tag: "math-functions",
        description: "دوال لإجراء عمليات رياضية في CSS",
        properties: [
            {
                name: "calc()",
                description: "تُجري عمليات حسابية (جمع، طرح، ضرب، قسمة) بين قيم مختلفة (px, em, rem, %, إلخ) في أي خاصية تقبل قيمة رقمية، مثل width و margin و padding و font-size",
                values: [
                    { value: "calc(100% - 20px)", description: "طرح 20 بكسل من 100%" },
                    { value: "calc(100vh - 60px)", description: "طرح 60 بكسل من ارتفاع النافذة" },
                    { value: "calc(1rem + 2px)", description: "جمع rem و بكسل" },
                    { value: "calc((100% - 40px) / 3)", description: "قسمة بعد الطرح" }
                ]
            },
            {
                name: "min()",
                description: "تأخذ أصغر قيمة من بين عدة قيم (تشبه Math.min)، مفيدة لتحديد الحد الأقصى للقيمة (تأخذ الأصغر = لا تتجاوز الحد)",
                values: [
                    { value: "min(100px, 50%)", description: "أصغر بين 100 بكسل و 50%" },
                    { value: "min(2rem, 24px)", description: "أصغر بين 2rem و 24 بكسل" },
                    { value: "min(600px, 100%)", description: "لا يتجاوز 600 بكسل" }
                ]
            },
            {
                name: "max()",
                description: "تأخذ أكبر قيمة من بين عدة قيم (تشبه Math.max)، مفيدة لتحديد الحد الأدنى للقيمة (تأخذ الأكبر = لا تقل عن الحد)",
                values: [
                    { value: "max(100px, 50%)", description: "أكبر بين 100 بكسل و 50%" },
                    { value: "max(2rem, 24px)", description: "أكبر بين 2rem و 24 بكسل" },
                    { value: "max(300px, 100%)", description: "على الأقل 300 بكسل" }
                ]
            },
            {
                name: "clamp()",
                description: "تحدد قيمة بين حد أدنى وحد أقصى (توسيط القيم). الصيغة: clamp(الحد الأدنى, القيمة المفضلة, الحد الأقصى). مفيدة للأحجام المرنة التي لا تتجاوز حدوداً معينة",
                values: [
                    { value: "clamp(200px, 50%, 400px)", description: "بين 200 و400 بكسل، تفضل 50%" },
                    { value: "clamp(12px, 2vw, 24px)", description: "حجم خط يتغير مع الشاشة بين 12 و24" },
                    { value: "clamp(100px, 20vw, 300px)", description: "عرض يتناسب مع عرض الشاشة" }
                ]
            },
            {
                name: "round()",
                description: "تقرب القيمة إلى أقرب رقم صحيح أو إلى مضاعف معين، مفيدة للتأكد من أن القيم الناتجة عن عمليات حسابية تكون قيماً صحيحة أو مضاعفات محددة",
                values: [
                    { value: "round(2.3)", description: "تقريب إلى 2" },
                    { value: "round(2.7)", description: "تقريب إلى 3" },
                    { value: "round(5px, 10px)", description: "تقريب 5 بكسل إلى أقرب مضاعف 10 (تصبح 10)" }
                ]
            },
            {
                name: "sin()",
                description: "تحسب جيب الزاوية (بالراديان أو الدرجات)، تستخدم في الحسابات المتقدمة و CSS animations",
                values: [
                    { value: "sin(45deg)", description: "جيب 45 درجة ? 0.707" },
                    { value: "sin(0.5rad)", description: "جيب 0.5 راديان" }
                ]
            },
            {
                name: "cos()",
                description: "تحسب جيب تمام الزاوية، تستخدم في الحسابات المتقدمة و CSS animations",
                values: [
                    { value: "cos(45deg)", description: "جيب تمام 45 درجة ? 0.707" },
                    { value: "cos(0.5rad)", description: "جيب تمام 0.5 راديان" }
                ]
            },
            {
                name: "tan()",
                description: "تحسب ظل الزاوية، تستخدم في الحسابات المتقدمة",
                values: [
                    { value: "tan(45deg)", description: "ظل 45 درجة = 1" }
                ]
            },
            {
                name: "sqrt()",
                description: "تحسب الجذر التربيعي للقيمة، تستخدم في الحسابات المتقدمة",
                values: [
                    { value: "sqrt(16)", description: "جذر 16 = 4" }
                ]
            },
            {
                name: "pow()",
                description: "تحسب القوة (الأس) لقيمة، تستخدم في الحسابات المتقدمة",
                values: [
                    { value: "pow(2, 3)", description: "2 أس 3 = 8" }
                ]
            },
            {
                name: "abs()",
                description: "تحسب القيمة المطلقة (تجاهل الإشارة السالبة)، تستخدم في الحسابات المتقدمة",
                values: [
                    { value: "abs(-10px)", description: "تصبح 10 بكسل" }
                ]
            },
            {
                name: "sign()",
                description: "ترجع 1 للقيم الموجبة، -1 للقيم السالبة، 0 للصفر، تستخدم في الحسابات المتقدمة",
                values: [
                    { value: "sign(-5px)", description: "ترجع -1" }
                ]
            },
            {
                name: "mod() / rem()",
                description: "تحسب باقي القسمة (modulo)، تستخدم في الحسابات المتقدمة لتحديد الباقي من قسمة قيمة على أخرى",
                values: [
                    { value: "mod(10, 3)", description: "باقي قسمة 10 على 3 = 1" }
                ]
            },
            {
                name: "atan2()",
                description: "تحسب الزاوية بين محور x ونقطة محددة (x, y)، تستخدم في الحسابات المتقدمة لتحديد زاوية اتجاه",
                values: [
                    { value: "atan2(1, 1)", description: "زاوية 45 درجة" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. دوال الشبكات (Grid Functions)
    // ============================================================
    {
        tag: "grid-functions",
        description: "دوال خاصة بشبكة CSS Grid",
        properties: [
            {
                name: "repeat()",
                description: "تكرر نمطاً من الأعمدة أو الصفوف عدداً محدداً من المرات، مفيدة لتوفير الكتابة المتكررة في grid-template-columns و grid-template-rows",
                values: [
                    { value: "repeat(3, 1fr)", description: "ثلاثة أعمدة متساوية" },
                    { value: "repeat(4, 100px)", description: "أربعة أعمدة بعرض 100 بكسل" },
                    { value: "repeat(2, 1fr 2fr)", description: "نمط متكرر: 1fr, 2fr, 1fr, 2fr" },
                    { value: "repeat(auto-fill, 100px)", description: "يملأ أكبر عدد من الأعمدة بعرض 100px" },
                    { value: "repeat(auto-fit, minmax(150px, 1fr))", description: "تصميم متجاوب: أعمدة بعرض 150px على الأقل" }
                ]
            },
            {
                name: "minmax()",
                description: "تحدد نطاقاً من القيم بين حد أدنى وحد أقصى، تستخدم في grid-template-columns و grid-template-rows لتحكم دقيق في أحجام الأعمدة والصفوف",
                values: [
                    { value: "minmax(100px, 1fr)", description: "بين 100 بكسل ومرن" },
                    { value: "minmax(150px, 2fr)", description: "بين 150 بكسل ومرن (ضعف)" },
                    { value: "minmax(200px, 500px)", description: "بين 200 و500 بكسل" }
                ]
            },
            {
                name: "fit-content()",
                description: "تحدد قيمة تتناسب مع المحتوى مع حد أقصى محدد، تستخدم في grid-template-columns و grid-template-rows لتحديد حجم العمود/الصف بناءً على المحتوى مع عدم تجاوز حد معين",
                values: [
                    { value: "fit-content(200px)", description: "يتناسب مع المحتوى بحد أقصى 200 بكسل" },
                    { value: "fit-content(50%)", description: "يتناسب مع المحتوى بحد أقصى 50%" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. دوال المحتوى المُنشأ (Generated Content Functions)
    // ============================================================
    {
        tag: "generated-content-functions",
        description: "دوال خاصة بالمحتوى المُنشأ (::before و ::after)",
        properties: [
            {
                name: "counter()",
                description: "تعرض قيمة عداد واحد باسم محدد، تُستخدم في خاصية content مع ::before و ::after لترقيم العناصر",
                values: [
                    { value: "counter(section)", description: "يعرض قيمة عداد section" },
                    { value: "counter(chapter, upper-roman)", description: "يعرض بأرقام رومانية كبيرة" }
                ]
            },
            {
                name: "counters()",
                description: "تعرض تسلسل العدادات المتداخلة (مثل 1.2.3) مع فاصل محدد، تُستخدم في خاصية content مع ::before و ::after لترقيم هرمي",
                values: [
                    { value: "counters(section, '.')", description: "يعرض 1.2.3" },
                    { value: "counters(section, '.', lower-alpha)", description: "يعرض a.b.c" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. دوال التحويل (Transform Functions)
    // ============================================================
    {
        tag: "transform-functions",
        description: "دوال خاصة بالتحويلات",
        properties: [
            {
                name: "translate()",
                description: "تنقل العنصر في المحورين X و Y، تستخدم في transform لتحريك العنصر دون التأثير على تدفق الصفحة",
                values: [
                    { value: "translate(50px, 100px)", description: "نقل 50 بكسل يميناً و100 بكسل أسفل" },
                    { value: "translate(50%, 50%)", description: "نقل بنسبة 50%" }
                ]
            },
            {
                name: "rotate()",
                description: "تدور العنصر حول محور Z بمقدار زاوية محددة، تستخدم في transform لتدوير العنصر",
                values: [
                    { value: "rotate(45deg)", description: "تدوير 45 درجة" },
                    { value: "rotate(0.5turn)", description: "نصف دورة" }
                ]
            },
            {
                name: "scale()",
                description: "تكبر أو تصغر العنصر في المحورين X و Y، تستخدم في transform لتغيير حجم العنصر",
                values: [
                    { value: "scale(1.5)", description: "تكبير 150%" },
                    { value: "scale(2, 0.5)", description: "تكبير أفقي مضاعف، وتصغير عمودي للنصف" }
                ]
            },
            {
                name: "skew()",
                description: "تميل العنصر في المحورين X و Y، تستخدم في transform لإمالة العنصر",
                values: [
                    { value: "skew(10deg, 20deg)", description: "إمالة أفقية 10 درجات وعمودية 20 درجة" },
                    { value: "skewX(15deg)", description: "إمالة أفقية 15 درجة" }
                ]
            },
            {
                name: "matrix()",
                description: "تطبق تحويلاً باستخدام مصفوفة 6 قيم (a, b, c, d, e, f) لتجميع عدة تحويلات في مصفوفة واحدة، تستخدم في transform لتطبيق تحويلات مركبة",
                values: [
                    { value: "matrix(1, 0, 0, 1, 50, 50)", description: "نقل 50 بكسل" },
                    { value: "matrix(2, 0, 0, 2, 0, 0)", description: "تكبير الضعف" }
                ]
            },
            {
                name: "perspective()",
                description: "تضيف منظوراً ثلاثي الأبعاد للعنصر، تستخدم في transform لتأثيرات ثلاثية الأبعاد",
                values: [
                    { value: "perspective(500px)", description: "منظور 500 بكسل" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. دوال التدرج (Gradient Functions) - ملخص
    // ============================================================
    {
        tag: "gradient-summary",
        description: "ملخص دوال التدرج في CSS مع جميع المتغيرات الممكنة",
        properties: [
            {
                name: "linear-gradient()",
                description: "تدرج خطي في اتجاه محدد",
                values: [
                    { value: "linear-gradient(red, blue)", description: "أساسي" },
                    { value: "linear-gradient(to right, red, blue)", description: "من اليسار إلى اليمين" },
                    { value: "linear-gradient(45deg, red, blue)", description: "بزاوية 45 درجة" }
                ]
            },
            {
                name: "radial-gradient()",
                description: "تدرج شعاعي من مركز محدد",
                values: [
                    { value: "radial-gradient(circle, red, blue)", description: "دائري" },
                    { value: "radial-gradient(ellipse, red, blue)", description: "بيضاوي" },
                    { value: "radial-gradient(circle at 20% 50%, red, blue)", description: "مركزه 20% من اليسار" }
                ]
            },
            {
                name: "conic-gradient()",
                description: "تدرج مخروطي حول مركز محدد",
                values: [
                    { value: "conic-gradient(red, blue)", description: "أساسي" },
                    { value: "conic-gradient(from 45deg, red, blue)", description: "يبدأ من 45 درجة" }
                ]
            },
            {
                name: "repeating-*()",
                description: "أنماط متكررة من التدرجات",
                values: [
                    { value: "repeating-linear-gradient(red 0px, blue 20px)", description: "تدرج خطي متكرر" },
                    { value: "repeating-radial-gradient(circle, red 0%, blue 20%)", description: "تدرج شعاعي متكرر" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. دوال الشكل (Shape Functions)
    // ============================================================
    {
        tag: "shape-functions",
        description: "دوال لتحديد أشكال هندسية للقص والتغليف",
        properties: [
            {
                name: "circle()",
                description: "تحدد دائرة للقص (clip-path) أو لتغليف النص (shape-outside)، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل دائري",
                values: [
                    { value: "circle(50%)", description: "دائرة نصف قطرها 50%" },
                    { value: "circle(50% at 50% 50%)", description: "دائرة في المنتصف" }
                ]
            },
            {
                name: "ellipse()",
                description: "تحدد بيضاوياً للقص أو التغليف، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل بيضاوي",
                values: [
                    { value: "ellipse(50% 50%)", description: "بيضاوي بنصف قطر 50%" },
                    { value: "ellipse(30% 50% at 0% 50%)", description: "بيضاوي على اليسار" }
                ]
            },
            {
                name: "polygon()",
                description: "تحدد مضلعاً للقص أو التغليف، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل مضلع (مثلث، سداسي، إلخ)",
                values: [
                    { value: "polygon(0% 0%, 100% 0%, 50% 100%)", description: "مثلث" },
                    { value: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", description: "معين" },
                    { value: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)", description: "مثمن" }
                ]
            },
            {
                name: "inset()",
                description: "تحدد مستطيلاً مقطوعاً من الداخل، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل مستطيل مع إزاحة من الحواف",
                values: [
                    { value: "inset(10px)", description: "قص 10 بكسل من كل جهة" },
                    { value: "inset(10px 20px)", description: "قص 10 بكسل أعلى/أسفل، 20 بكسل يمين/يسار" }
                ]
            },
            {
                name: "path()",
                description: "تحدد مساراً مخصصاً باستخدام صيغة SVG، تُستخدم مع clip-path لتشكيل العناصر بشكل مسار SVG معقد (مثل clip-path: path('M0,0 L100,0 L50,100 Z'))",
                values: [
                    { value: "path('M0,0 L100,0 L50,100 Z')", description: "مثلث باستخدام مسار SVG" },
                    { value: "path('M10,10 H90 V90 H10 Z')", description: "مستطيل باستخدام مسار SVG" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. دوال أخرى
    // ============================================================
    {
        tag: "other-functions",
        description: "دوال أخرى لا تندرج تحت تصنيف محدد",
        properties: [
            {
                name: "element()",
                description: "تستخدم صورة من عنصر آخر في الصفحة كخلفية (تدعمها بعض المتصفحات مثل Firefox)",
                values: [
                    { value: "element(#header)", description: "تستخدم صورة من العنصر ذي المعرف header" }
                ]
            },
            {
                name: "cross-fade()",
                description: "تخلط صورتين معاً بنسب محددة, مفيدة لإنشاء انتقالات بين الصور",
                values: [
                    { value: "cross-fade(url('image1.jpg') 50%, url('image2.jpg') 50%)", description: "مزيج 50/50 بين صورتين" },
                    { value: "cross-fade(url('image1.jpg') 70%, url('image2.jpg') 30%)", description: "الصورة الأولى أكثر وضوحاً" }
                ]
            },
            {
                name: "symbols()",
                description: "تحدد رموزاً لتعداد القوائم (list-style-type) من Unicode، مفيدة لإنشاء علامات تعداد مخصصة باستخدام رموز أو أحرف خاصة",
                values: [
                    { value: "symbols('•' '?' '?')", description: "رموز مخصصة لتعداد القوائم" },
                    { value: "symbols(cyclic '?' '?' '?' '?')", description: "رموز دورية" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام دوال CSS بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لاستخدام دوال CSS",
                values: [
                    { value: "استخدم calc() للعمليات الحسابية", description: "يجمع بين وحدات مختلفة" },
                    { value: "استخدم clamp() للأحجام المرنة", description: "يحدد نطاقاً للقيم" },
                    { value: "استخدم var() للمتغيرات", description: "يسمح بإعادة الاستخدام" },
                    { value: "استخدم attr() للبيانات الديناميكية", description: "يأخذ قيماً من HTML" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الدوال",
                values: [
                    { value: "تجنب calc() المفرط", description: "إعادة الحساب قد تؤثر على الأداء" },
                    { value: "استخدم التدرجات بدلاً من الصور", description: "التدرجات أخف وزناً" },
                    { value: "استخدم var() بحكمة", description: "الإفراط في المتغيرات قد يبطئ الأداء" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام دوال CSS",
                values: [
                    { value: "نسيان المسافات في calc()", description: "calc(100%-20px) خاطئ، الصحيح calc(100% - 20px)" },
                    { value: "استخدام وحدات غير متوافقة", description: "لا تجمع px مع em في calc()" },
                    { value: "نسيان علامات التنصيص في url()", description: "url('image.jpg') صحيح" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssFunctionsData = cssFunctionsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssFunctionsData;
}