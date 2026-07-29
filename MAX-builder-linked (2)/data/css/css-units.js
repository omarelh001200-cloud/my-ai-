// ============================================================
// css-units.js
// وحدات القياس (Units) في CSS
// تشرح جميع وحدات القياس المستخدمة في CSS مع أمثلة واستخدامات
// ============================================================

const cssUnitsData = [
    // ============================================================
    // 1. الوحدات المطلقة (Absolute Units)
    // ============================================================
    {
        tag: "absolute-units",
        description: "الوحدات المطلقة لها حجم ثابت لا يتغير بتغير الشاشة أو الخط، تستخدم للطباعة والتصاميم الثابتة",
        properties: [
            {
                name: "px",
                description: "بكسل (Pixel) - أصغر وحدة قياس في الشاشة، وحدة نسبية تعتمد على كثافة البكسلات في الشاشة، وتُستخدم للدقة العالية في التصميم الرقمي",
                values: [
                    { value: "1px", description: "بكسل واحد - أصغر وحدة قابلة للتمييز على الشاشة" },
                    { value: "16px", description: "16 بكسل - حجم الخط الافتراضي في معظم المتصفحات" },
                    { value: "100px", description: "100 بكسل - حجم شائع للعناصر" }
                ]
            },
            {
                name: "pt",
                description: "نقطة (Point) - 1pt = 1/72 بوصة، تستخدم بشكل أساسي في الطباعة والتصاميم المطبوعة، وليست شائعة في تصميم الويب الحديث",
                values: [
                    { value: "12pt", description: "12 نقطة - حجم خط شائع في الطباعة" },
                    { value: "72pt", description: "72 نقطة = 1 بوصة" }
                ]
            },
            {
                name: "pc",
                description: "بيكا (Pica) - 1pc = 12pt = 1/6 بوصة، تستخدم في الطباعة، وتعادل 12 نقطة، نادرة الاستخدام في الويب",
                values: [
                    { value: "1pc", description: "1 بيكا = 12 نقطة" },
                    { value: "6pc", description: "6 بيكا = 1 بوصة" }
                ]
            },
            {
                name: "in",
                description: "بوصة (Inch) - 1in = 2.54cm = 96px (تقريباً)، تستخدم في الطباعة وفي بعض التطبيقات الخاصة، نادرة الاستخدام في الويب الحديث",
                values: [
                    { value: "1in", description: "1 بوصة = 2.54 سم" },
                    { value: "0.5in", description: "نصف بوصة" }
                ]
            },
            {
                name: "cm",
                description: "سنتيمتر (Centimeter) - 1cm = 10mm = 37.8px (تقريباً)، تستخدم بشكل أساسي في الطباعة والتصاميم المطبوعة",
                values: [
                    { value: "1cm", description: "1 سنتيمتر" },
                    { value: "5cm", description: "5 سنتيمتر" }
                ]
            },
            {
                name: "mm",
                description: "ميليمتر (Millimeter) - 1mm = 0.1cm = 3.78px (تقريباً)، تستخدم في الطباعة والتصاميم المطبوعة، وتُستخدم للمسافات الدقيقة",
                values: [
                    { value: "1mm", description: "1 ميليمتر" },
                    { value: "10mm", description: "10 ميليمتر = 1 سم" }
                ]
            },
            {
                name: "Q",
                description: "ربع ميليمتر (Quarter-millimeter) - 1Q = 0.25mm، تستخدم في الطباعة اليابانية والتصاميم الدقيقة، نادرة الاستخدام في الويب",
                values: [
                    { value: "1Q", description: "ربع ميليمتر" },
                    { value: "4Q", description: "1 ميليمتر" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. الوحدات النسبية للخط (Relative to Font)
    // ============================================================
    {
        tag: "font-relative-units",
        description: "الوحدات النسبية للخط تعتمد على حجم الخط الحالي أو الجذري، مفيدة للتصميم المتجاوب وإمكانية الوصول",
        properties: [
            {
                name: "em",
                description: "نسبة إلى حجم الخط للعنصر الأب. 1em = حجم الخط الحالي للعنصر الأب (أو العنصر نفسه عند استخدامه في font-size)، مفيدة للتصميمات المتداخلة",
                values: [
                    { value: "1em", description: "نفس حجم الخط الأب" },
                    { value: "1.5em", description: "150% من حجم الخط الأب" },
                    { value: "2em", description: "ضعف حجم الخط الأب" },
                    { value: "0.5em", description: "نصف حجم الخط الأب" }
                ]
            },
            {
                name: "rem",
                description: "نسبة إلى حجم الخط الجذري (:root أو html)، 1rem = حجم الخط الأساسي للصفحة (عادة 16px)، وهي الوحدة الأكثر استخداماً في التصميم المتجاوب اليوم",
                values: [
                    { value: "1rem", description: "نفس حجم الخط الجذري (عادة 16px)" },
                    { value: "1.25rem", description: "125% من حجم الخط الجذري (?20px)" },
                    { value: "2rem", description: "ضعف حجم الخط الجذري (?32px)" },
                    { value: "0.75rem", description: "75% من حجم الخط الجذري (?12px)" }
                ]
            },
            {
                name: "ex",
                description: "نسبة إلى ارتفاع الحرف 'x' الصغير في الخط الحالي، مفيدة للتصميمات التي تعتمد على حجم الأحرف الصغيرة، مثل ضبط المسافات العمودية",
                values: [
                    { value: "1ex", description: "ارتفاع حرف x في الخط الحالي" },
                    { value: "2ex", description: "ضعف ارتفاع حرف x" }
                ]
            },
            {
                name: "ch",
                description: "نسبة إلى عرض الحرف '0' (صفر) في الخط الحالي، مفيدة لتحديد عرض النص بعدد معين من الأحرف، مثل عرض عمود النص بـ 40 حرفاً",
                values: [
                    { value: "1ch", description: "عرض الحرف 0 في الخط الحالي" },
                    { value: "40ch", description: "عرض 40 حرفاً - عرض مثالي للقراءة" },
                    { value: "60ch", description: "عرض 60 حرفاً - أقصى عرض مريح للقراءة" }
                ]
            },
            {
                name: "cap",
                description: "نسبة إلى ارتفاع الأحرف الكبيرة (Capital height) في الخط الحالي (أقل شيوعاً في الممارسة العملية اليوم)",
                values: [
                    { value: "1cap", description: "ارتفاع حرف كبير في الخط الحالي" }
                ]
            },
            {
                name: "lh",
                description: "نسبة إلى ارتفاع السطر (line-height) للعنصر الحالي، مفيدة للمحاذاة العمودية مع النص، وتُستخدم مع العناصر مثل القوائم والعناوين",
                values: [
                    { value: "1lh", description: "ارتفاع سطر واحد" },
                    { value: "2lh", description: "ارتفاع سطرين" }
                ]
            },
            {
                name: "rlh",
                description: "نسبة إلى ارتفاع السطر (line-height) للعنصر الجذري (root)، مفيدة للمحاذاة العمودية مع النص الجذري، وتُستخدم في التصميمات المتسقة",
                values: [
                    { value: "1rlh", description: "ارتفاع سطر جذري واحد" }
                ]
            },
            {
                name: "ic",
                description: "نسبة إلى عرض الحرف '?' (ماء) في الخط الحالي (للغات الشرق آسيوية)، تستخدم في التصميمات الخاصة باللغات الآسيوية لتحديد عرض النص بعدد معين من الأحرف",
                values: [
                    { value: "1ic", description: "عرض الحرف ? في الخط الحالي" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. الوحدات النسبية للشاشة (Viewport Units)
    // ============================================================
    {
        tag: "viewport-units",
        description: "الوحدات النسبية للشاشة تعتمد على حجم نافذة المتصفح، مفيدة للتصميم المتجاوب",
        properties: [
            {
                name: "vw",
                description: "نسبة إلى عرض نافذة المتصفح (Viewport Width). 1vw = 1% من عرض النافذة، مفيدة للتصميمات التي تتناسب مع عرض الشاشة",
                values: [
                    { value: "1vw", description: "1% من عرض النافذة" },
                    { value: "50vw", description: "نصف عرض النافذة" },
                    { value: "100vw", description: "عرض النافذة بالكامل" }
                ]
            },
            {
                name: "vh",
                description: "نسبة إلى ارتفاع نافذة المتصفح (Viewport Height). 1vh = 1% من ارتفاع النافذة، مفيدة للتصميمات التي تتناسب مع ارتفاع الشاشة",
                values: [
                    { value: "1vh", description: "1% من ارتفاع النافذة" },
                    { value: "50vh", description: "نصف ارتفاع النافذة" },
                    { value: "100vh", description: "ارتفاع النافذة بالكامل" }
                ]
            },
            {
                name: "vmin",
                description: "نسبة إلى أصغر قيمة بين العرض والارتفاع (min(vw, vh)). 1vmin = 1% من القيمة الأصغر، مفيدة للتصميمات التي تحافظ على النسب في كلا الاتجاهين",
                values: [
                    { value: "1vmin", description: "1% من القيمة الأصغر للشاشة" },
                    { value: "50vmin", description: "نصف القيمة الأصغر للشاشة" },
                    { value: "100vmin", description: "القيمة الأصغر للشاشة بالكامل" }
                ]
            },
            {
                name: "vmax",
                description: "نسبة إلى أكبر قيمة بين العرض والارتفاع (max(vw, vh)). 1vmax = 1% من القيمة الأكبر، مفيدة للتصميمات التي تتبع الاتجاه الأكبر للشاشة",
                values: [
                    { value: "1vmax", description: "1% من القيمة الأكبر للشاشة" },
                    { value: "50vmax", description: "نصف القيمة الأكبر للشاشة" },
                    { value: "100vmax", description: "القيمة الأكبر للشاشة بالكامل" }
                ]
            },
            {
                name: "svw / svh",
                description: "وحدات النافذة الصغيرة (Small Viewport) - تمثل الحجم الأدنى الذي يمكن أن تصل إليه النافذة، مفيدة لتجنب التغييرات المفاجئة عند ظهور شريط التنقل في المتصفحات المحمولة",
                values: [
                    { value: "1svw", description: "1% من العرض الصغير للنافذة" },
                    { value: "1svh", description: "1% من الارتفاع الصغير للنافذة" },
                    { value: "100svh", description: "الارتفاع الصغير للنافذة بالكامل" }
                ]
            },
            {
                name: "lvw / lvh",
                description: "وحدات النافذة الكبيرة (Large Viewport) - تمثل الحجم الأقصى الذي يمكن أن تصل إليه النافذة، مفيدة للتصميمات التي تحتاج إلى أقصى مساحة متاحة",
                values: [
                    { value: "1lvw", description: "1% من العرض الكبير للنافذة" },
                    { value: "1lvh", description: "1% من الارتفاع الكبير للنافذة" },
                    { value: "100lvh", description: "الارتفاع الكبير للنافذة بالكامل" }
                ]
            },
            {
                name: "dvw / dvh",
                description: "وحدات النافذة الديناميكية (Dynamic Viewport) - تتغير تلقائياً مع تغير حجم النافذة (عند ظهور/اختفاء شريط التنقل)، مفيدة للتصميمات الديناميكية على الجوال",
                values: [
                    { value: "1dvw", description: "1% من العرض الديناميكي للنافذة" },
                    { value: "1dvh", description: "1% من الارتفاع الديناميكي للنافذة" },
                    { value: "100dvh", description: "الارتفاع الديناميكي للنافذة بالكامل" }
                ]
            },
            {
                name: "vi",
                description: "نسبة إلى حجم النافذة في اتجاه النص (الاتجاه الخطي). 1vi = 1% من عرض النافذة في اللغات الأفقية، مفيدة لدعم اللغات ذات الاتجاه المختلف (RTL/LTR)",
                values: [
                    { value: "1vi", description: "1% من الحجم في الاتجاه الخطي" }
                ]
            },
            {
                name: "vb",
                description: "نسبة إلى حجم النافذة في اتجاه الكتلة (عمودي على اتجاه النص). 1vb = 1% من ارتفاع النافذة في اللغات الأفقية، مفيدة للتصميمات متعددة اللغات",
                values: [
                    { value: "1vb", description: "1% من الحجم في اتجاه الكتلة" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. وحدات الشبكة (Grid Units)
    // ============================================================
    {
        tag: "grid-units",
        description: "وحدات خاصة بشبكة CSS Grid",
        properties: [
            {
                name: "fr",
                description: "جزء من المساحة المتاحة (Fraction). 1fr = جزء واحد من المساحة المتاحة بعد طرح الأعمدة/الصفوف الثابتة، مفيدة جداً في تصميم الشبكات المرنة",
                values: [
                    { value: "1fr", description: "جزء واحد من المساحة المتاحة" },
                    { value: "2fr", description: "جزءان من المساحة المتاحة (ضعف 1fr)" },
                    { value: "3fr", description: "ثلاثة أجزاء من المساحة المتاحة" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. وحدات الزاوية (Angle Units)
    // ============================================================
    {
        tag: "angle-units",
        description: "وحدات قياس الزوايا في CSS، تستخدم في التحويلات والتدرجات",
        properties: [
            {
                name: "deg",
                description: "درجة (Degree) - 1deg = 1/360 من الدورة الكاملة. شائعة جداً في rotate, skew, linear-gradient, hue-rotate",
                values: [
                    { value: "45deg", description: "45 درجة" },
                    { value: "90deg", description: "90 درجة (ربع دورة)" },
                    { value: "180deg", description: "180 درجة (نصف دورة)" },
                    { value: "360deg", description: "360 درجة (دورة كاملة)" }
                ]
            },
            {
                name: "rad",
                description: "راديان (Radian) - 1rad = 57.2958 درجة. تستخدم في الدوال الرياضية مثل sin(), cos(), tan()",
                values: [
                    { value: "0.5rad", description: "نصف راديان" },
                    { value: "1rad", description: "راديان واحد" },
                    { value: "3.14159rad", description: "? 180 درجة" }
                ]
            },
            {
                name: "grad",
                description: "غراد (Gradian) - 1grad = 1/400 من الدورة الكاملة. نادر الاستخدام في الويب، شائع في بعض التطبيقات الهندسية",
                values: [
                    { value: "100grad", description: "100 غراد (ربع دورة)" },
                    { value: "200grad", description: "200 غراد (نصف دورة)" },
                    { value: "400grad", description: "400 غراد (دورة كاملة)" }
                ]
            },
            {
                name: "turn",
                description: "دورة كاملة (Turn) - 1turn = 360deg. مفيدة للدورات الكاملة أو الكسور، مثل 0.25turn = 90deg",
                values: [
                    { value: "0.25turn", description: "ربع دورة (90 درجة)" },
                    { value: "0.5turn", description: "نصف دورة (180 درجة)" },
                    { value: "0.75turn", description: "ثلاثة أرباع دورة (270 درجة)" },
                    { value: "1turn", description: "دورة كاملة (360 درجة)" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. وحدات الوقت (Time Units)
    // ============================================================
    {
        tag: "time-units",
        description: "وحدات قياس الوقت في CSS، تستخدم في الانتقالات والرسوم المتحركة",
        properties: [
            {
                name: "s",
                description: "ثانية (Second) - الوحدة الأساسية للوقت في CSS. تستخدم في transition-duration, animation-duration, transition-delay, animation-delay",
                values: [
                    { value: "0.3s", description: "0.3 ثانية - شائع للانتقالات" },
                    { value: "0.5s", description: "نصف ثانية" },
                    { value: "1s", description: "ثانية واحدة" },
                    { value: "2s", description: "ثانيتان" }
                ]
            },
            {
                name: "ms",
                description: "ميلي ثانية (Millisecond) - 1ms = 1/1000 ثانية. توفر دقة أعلى من الثواني، مفيدة للانتقالات السريعة جداً",
                values: [
                    { value: "100ms", description: "0.1 ثانية - سريع" },
                    { value: "200ms", description: "0.2 ثانية" },
                    { value: "300ms", description: "0.3 ثانية" },
                    { value: "500ms", description: "نصف ثانية" },
                    { value: "1000ms", description: "ثانية واحدة" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. وحدات التردد (Frequency Units)
    // ============================================================
    {
        tag: "frequency-units",
        description: "وحدات قياس التردد في CSS، نادرة الاستخدام، تستخدم بشكل أساسي في الصوتيات",
        properties: [
            {
                name: "Hz",
                description: "هيرتز (Hertz) - عدد الدورات في الثانية. تستخدم في خصائص الصوت مثل pitch و pitch-range، نادرة الاستخدام في الويب",
                values: [
                    { value: "440Hz", description: "440 هيرتز - نغمة A" },
                    { value: "1000Hz", description: "1000 هيرتز" }
                ]
            },
            {
                name: "kHz",
                description: "كيلوهيرتز (Kilohertz) - 1kHz = 1000Hz. تستخدم في خصائص الصوت، نادرة الاستخدام في الويب الحديث",
                values: [
                    { value: "1kHz", description: "1000 هيرتز" },
                    { value: "2.5kHz", description: "2500 هيرتز" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. وحدات الدقة (Resolution Units)
    // ============================================================
    {
        tag: "resolution-units",
        description: "وحدات قياس الدقة في CSS، تستخدم في استعلامات الوسائط للشاشات عالية الدقة",
        properties: [
            {
                name: "dpi",
                description: "نقطة لكل بوصة (Dots Per Inch) - 1dpi = 1 نقطة في البوصة. تستخدم في @media (min-resolution: 300dpi) للشاشات عالية الدقة",
                values: [
                    { value: "96dpi", description: "96 نقطة لكل بوصة - دقة قياسية" },
                    { value: "300dpi", description: "300 نقطة لكل بوصة - دقة عالية" }
                ]
            },
            {
                name: "dpcm",
                description: "نقطة لكل سنتيمتر (Dots Per Centimeter) - 1dpcm = 2.54dpi، تستخدم في استعلامات الدقة للشاشات عالية الدقة بدلاً من dpi في بعض المتصفحات",
                values: [
                    { value: "38dpcm", description: "? 96dpi" },
                    { value: "118dpcm", description: "? 300dpi" }
                ]
            },
            {
                name: "x",
                description: "عامل الدقة بالنسبة للدقة المرجعية (96dpi). 1x = 96dpi، مفيدة لاستعلامات الوسائط للشاشات عالية الدقة",
                values: [
                    { value: "1x", description: "دقة قياسية (96dpi)" },
                    { value: "2x", description: "دقة مزدوجة (? 192dpi) - شاشات Retina" },
                    { value: "3x", description: "دقة ثلاثية - شاشات عالية الدقة جداً" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. وحدات مرنة (Flexible Units)
    // ============================================================
    {
        tag: "flexible-units",
        description: "وحدات مرنة تستخدم في دوال CSS الحديثة لتحديد قيم بمرونة",
        properties: [
            {
                name: "flex",
                description: "وحدة مرنة في CSS Grid (fr) تُستخدم لتوزيع المساحة المتاحة في الشبكات المرنة بدلاً من القيم الثابتة",
                values: [
                    { value: "1fr", description: "جزء واحد من المساحة المتاحة" },
                    { value: "2fr", description: "جزءان من المساحة المتاحة" }
                ]
            },
            {
                name: "auto",
                description: "تحدد القيمة تلقائياً حسب السياق. قد تعني 'حسب المحتوى' في العرض/الارتفاع، أو 'حسب الموقع' في الموضع، أو 'تلقائي' في العديد من الخصائص مثل margin و overflow و grid-template-*",
                values: [
                    { value: "auto", description: "تحسب تلقائياً حسب السياق" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. أمثلة عملية
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية لاستخدام وحدات القياس المختلفة",
        properties: [
            {
                name: "مثال 1 - تصميم متجاوب بالكامل",
                description: "استخدام rem و vw و vh و clamp معاً",
                values: [
                    { value: "html { font-size: 16px; } body { font-size: 1rem; } h1 { font-size: clamp(1.5rem, 4vw, 3rem); } .container { width: min(100%, 1200px); padding: clamp(1rem, 4vw, 4rem); } .hero { min-height: 80vh; }", description: "تصميم متجاوب كامل يستخدم أفضل الممارسات للوحدات المرنة" }
                ]
            },
            {
                name: "مثال 2 - عرض مثالي للقراءة",
                description: "تحديد عرض النص لسهولة القراءة باستخدام وحدات ch (عرض الحروف)",
                values: [
                    { value: "article { max-width: 70ch; margin: 0 auto; padding: 2rem; line-height: 1.8; font-size: 1.125rem; }", description: "عرض مثالي للقراءة باستخدام وحدات ch" }
                ]
            },
            {
                name: "مثال 3 - مربع دائري متجاوب",
                description: "مربع دائري يحافظ على النسب باستخدام vmin للحفاظ على الشكل الدائري في كلا الاتجاهين",
                values: [
                    { value: ".circle { width: 30vmin; height: 30vmin; border-radius: 50%; background: #007bff; }", description: "مربع دائري بنسبة 30% من أصغر بعد للشاشة" }
                ]
            },
            {
                name: "مثال 4 - شبكة Grid مرنة",
                description: "استخدام وحدات fr لشبكة مرنة",
                values: [
                    { value: ".grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 1.5rem; }", description: "شبكة بأعمدة غير متساوية باستخدام fr" }
                ]
            },
            {
                name: "مثال 5 - شاشة كاملة مع منع التمرير",
                description: "استخدام dvh (ديناميكية) للحصول على ارتفاع شاشة كامل يتغير مع ظهور شريط التنقل في المتصفحات المحمولة",
                values: [
                    { value: ".fullscreen { height: 100dvh; overflow: hidden; }", description: "شاشة كاملة مع منع التمرير باستخدام dvh" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام وحدات القياس بشكل فعال",
        properties: [
            {
                name: "نصائح اختيار الوحدات",
                description: "نصائح لاختيار الوحدة المناسبة",
                values: [
                    { value: "استخدم rem للخطوط", description: "الخطوط بـ rem أفضل لإمكانية الوصول" },
                    { value: "استخدم em للعناصر الداخلية", description: "em مفيد للعناصر التي تتناسب مع حجم خط الأب" },
                    { value: "استخدم px للحدود والتفاصيل الدقيقة", description: "الحدود الصغيرة بـ px تبقى ثابتة" },
                    { value: "استخدم % للعناصر النسبية", description: "النسب المئوية مفيدة للعرض والارتفاع" },
                    { value: "استخدم vw/vh للتصميمات الكبيرة", description: "مفيد للصفحات الكاملة والبطولات" },
                    { value: "استخدم vmin/vmax للشاشات المختلفة", description: "يحافظ على النسب في كلا الاتجاهين" },
                    { value: "استخدم ch للنصوص", description: "مثالي لتحديد عرض النص المقروء" },
                    { value: "استخدم clamp() للتصميم المرن", description: "يجمع بين الحد الأدنى والمثالي والأقصى" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الوحدات",
                values: [
                    { value: "تجنب إعادة الحساب المفرط", description: "الوحدات النسبية تحتاج إلى حساب في كل مرة" },
                    { value: "استخدم will-change للعناصر المتغيرة", description: "يحسن أداء الوحدات الديناميكية" },
                    { value: "استخدم rem بدلاً من em للخطوط الكبيرة", description: "يمنع التراكم في الحجم" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام وحدات القياس",
                values: [
                    { value: "استخدام px للطباعة", description: "استخدم pt أو cm للطباعة" },
                    { value: "نسيان rem في الجذر", description: ":root { font-size: 16px; }" },
                    { value: "استخدام vh على الجوال", description: "vh تتغير عند ظهور شريط التنقل - استخدم dvh" },
                    { value: "استخدام ch دون معرفة الخط", description: "ch تعتمد على حجم الحرف 0 في الخط الحالي، وتختلف بين الخطوط المختلفة" },
                    { value: "خلط الوحدات في calc()", description: "تأكد من توافق الوحدات في العمليات الحسابية" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssUnitsData = cssUnitsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssUnitsData;
}