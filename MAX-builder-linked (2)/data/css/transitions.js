// ============================================================
// transitions.js
// خصائص الانتقالات (Transitions) في CSS
// تتيح تغيير خصائص العنصر بشكل تدريجي وسلس عند حدوث تغيير (مثل تمرير الماوس)
// ============================================================

const transitionsData = [
    // ============================================================
    // 1. transition (الاختصار)
    // ============================================================
    {
        tag: "transition",
        description: "اختصار لتحديد خصائص الانتقال (الخاصية، المدة، دالة التوقيت، التأخير، والسلوك) في سطر واحد",
        properties: [
            // -------- transition (الاختصار) --------
            {
                name: "transition",
                description: "الخاصية المختصرة للانتقالات، تجمع كل الخصائص الفرعية في سطر واحد (الترتيب: property duration timing-function delay)",
                values: [
                    { value: "none", description: "بدون انتقال - القيمة الافتراضية" },
                    { value: "all 0.3s ease", description: "كل الخصائص تتغير خلال 0.3 ثانية بسلاسة" },
                    { value: "all 0.3s ease 0.1s", description: "كل الخصائص تتغير خلال 0.3 ثانية مع تأخير 0.1 ثانية" },
                    { value: "background-color 0.5s ease-in-out", description: "لون الخلفية فقط يتغير خلال 0.5 ثانية" },
                    { value: "opacity 0.4s ease-in 0.2s", description: "الشفافية تتغير خلال 0.4 ثانية مع تأخير 0.2 ثانية" },
                    { value: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)", description: "تحويلات باستخدام منحنى بيزييه مخصص" },
                    { value: "color 0.3s linear", description: "لون النص يتغير بسرعة ثابتة" },
                    { value: "width 0.3s, height 0.3s, background-color 0.5s", description: "انتقالات متعددة لخصائص مختلفة بنفس المدة" },
                    { value: "width 0.3s ease, height 0.5s ease-in, opacity 0.4s ease-out", description: "انتقالات متعددة بمدد ودوال مختلفة" },
                    { value: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)", description: "تأثير ارتداد (Bounce) باستخدام منحنى بيزييه" },
                    { value: "all 0.2s step-end", description: "انتقال فوري في النهاية (خطوات)" },
                    { value: "all 0.8s ease 0.2s, transform 0.6s ease-in", description: "خصائص مختلفة بمدد وتأخيرات مختلفة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. transition-property
    // ============================================================
    {
        tag: "transition-property",
        description: "يحدد أي الخصائص ستتغير بتأثير الانتقال (يمكن تحديد خاصية واحدة أو عدة خصائص)",
        properties: [
            {
                name: "transition-property",
                description: "يحدد أي الخصائص ستتغير بتأثير الانتقال",
                values: [
                    { value: "all", description: "جميع الخصائص القابلة للانتقال - القيمة الافتراضية" },
                    { value: "none", description: "لا شيء - لا يوجد انتقال" },
                    
                    // خصائص الحجم والموضع
                    { value: "width", description: "العرض فقط" },
                    { value: "height", description: "الارتفاع فقط" },
                    { value: "min-width", description: "الحد الأدنى للعرض" },
                    { value: "max-width", description: "الحد الأقصى للعرض" },
                    { value: "min-height", description: "الحد الأدنى للارتفاع" },
                    { value: "max-height", description: "الحد الأقصى للارتفاع" },
                    { value: "top, left, right, bottom", description: "خصائص الموضع" },
                    { value: "margin, padding", description: "الهوامش والحشو" },
                    
                    // خصائص الألوان
                    { value: "color", description: "لون النص" },
                    { value: "background-color", description: "لون الخلفية" },
                    { value: "border-color", description: "لون الحافة" },
                    { value: "outline-color", description: "لون المخطط الخارجي" },
                    { value: "box-shadow", description: "الظل" },
                    { value: "text-shadow", description: "ظل النص" },
                    
                    // خصائص الشفافية والرؤية
                    { value: "opacity", description: "الشفافية" },
                    { value: "visibility", description: "الرؤية (مع allow-discrete)" },
                    { value: "display", description: "نوع العرض (مع allow-discrete)" },
                    
                    // خصائص التحويلات
                    { value: "transform", description: "التحويلات (تدوير، تكبير، نقل)" },
                    { value: "translate, rotate, scale", description: "خصائص التحويل المنفصلة" },
                    { value: "transform-origin", description: "نقطة مركز التحويل" },
                    
                    // خصائص الخطوط والنصوص
                    { value: "font-size", description: "حجم الخط" },
                    { value: "font-weight", description: "وزن الخط" },
                    { value: "letter-spacing", description: "تباعد الحروف" },
                    { value: "word-spacing", description: "تباعد الكلمات" },
                    { value: "line-height", description: "ارتفاع السطر" },
                    { value: "text-indent", description: "إزاحة السطر الأول" },
                    
                    // خصائص الحواف
                    { value: "border-width", description: "سمك الحافة" },
                    { value: "border-radius", description: "انحناء الحافة" },
                    { value: "border-spacing", description: "تباعد حواف الجدول" },
                    
                    // خصائص أخرى
                    { value: "z-index", description: "ترتيب الطبقات" },
                    { value: "flex-grow, flex-shrink, flex-basis", description: "خصائص Flexbox" },
                    { value: "grid-template-columns, grid-template-rows", description: "خصائص Grid" },
                    { value: "clip-path", description: "مسار القص" },
                    { value: "filter", description: "الفلاتر" },
                    { value: "backdrop-filter", description: "فلاتر الخلفية" },
                    { value: "perspective", description: "المنظور" },
                    
                    // خصائص متعددة معاً
                    { value: "opacity, transform", description: "الشفافية والتحويلات معاً" },
                    { value: "width, height, margin", description: "الأبعاد والهوامش" },
                    { value: "background-color, color, border-color", description: "خصائص الألوان معاً" },
                    { value: "all", description: "جميع الخصائص" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. transition-duration
    // ============================================================
    {
        tag: "transition-duration",
        description: "يحدد المدة الزمنية التي يستغرقها الانتقال من البداية إلى النهاية",
        properties: [
            {
                name: "transition-duration",
                description: "يحدد المدة الزمنية التي يستغرقها الانتقال من البداية إلى النهاية",
                values: [
                    { value: "0s", description: "فوري بدون انتقال - القيمة الافتراضية" },
                    { value: "0.05s", description: "50 مللي ثانية - سريع جداً" },
                    { value: "0.1s", description: "100 مللي ثانية" },
                    { value: "0.15s", description: "150 مللي ثانية" },
                    { value: "0.2s", description: "200 مللي ثانية - سريع" },
                    { value: "0.25s", description: "250 مللي ثانية" },
                    { value: "0.3s", description: "300 مللي ثانية - شائع للتفاعلات البسيطة" },
                    { value: "0.35s", description: "350 مللي ثانية" },
                    { value: "0.4s", description: "400 مللي ثانية" },
                    { value: "0.45s", description: "450 مللي ثانية" },
                    { value: "0.5s", description: "500 مللي ثانية (نصف ثانية) - شائع للانتقالات" },
                    { value: "0.6s", description: "600 مللي ثانية" },
                    { value: "0.7s", description: "700 مللي ثانية" },
                    { value: "0.8s", description: "800 مللي ثانية" },
                    { value: "0.9s", description: "900 مللي ثانية" },
                    { value: "1s", description: "ثانية واحدة - بطيء" },
                    { value: "1.2s", description: "1.2 ثانية" },
                    { value: "1.5s", description: "1.5 ثانية" },
                    { value: "2s", description: "ثانيتان - بطيء جداً" },
                    { value: "3s", description: "ثلاث ثوان" },
                    { value: "5s", description: "خمس ثوان" },
                    { value: "100ms", description: "100 مللي ثانية" },
                    { value: "200ms", description: "200 مللي ثانية" },
                    { value: "300ms", description: "300 مللي ثانية" },
                    { value: "500ms", description: "500 مللي ثانية" },
                    { value: "750ms", description: "750 مللي ثانية" },
                    { value: "0.2s, 0.5s", description: "مدد مختلفة لخصائص مختلفة" },
                    { value: "0.3s, 0.6s, 0.9s", description: "ثلاث مدد مختلفة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. transition-timing-function
    // ============================================================
    {
        tag: "transition-timing-function",
        description: "يحدد منحنى سرعة الانتقال (كيف تتغير السرعة خلال المدة: ثابت، متسارع، متباطئ، إلخ)",
        properties: [
            {
                name: "transition-timing-function",
                description: "يحدد منحنى سرعة الانتقال (كيف تتغير السرعة خلال المدة)",
                values: [
                    // الكلمات المفتاحية الأساسية
                    { value: "ease", description: "يبدأ ببطء، يتسارع، ثم يتباطأ - القيمة الافتراضية، حركة طبيعية" },
                    { value: "ease-in", description: "يبدأ ببطء شديد ثم يتسارع تدريجياً - حركة تسارعية" },
                    { value: "ease-out", description: "يبدأ سريعاً ثم يتباطأ تدريجياً - حركة تباطؤية" },
                    { value: "ease-in-out", description: "يبدأ ببطء، يتسارع في المنتصف، ثم يتباطأ - حركة متوازنة" },
                    { value: "linear", description: "سرعة ثابتة من البداية إلى النهاية - حركة آلية" },
                    
                    // دالة steps (خطوات)
                    { value: "step-start", description: "يتغير فوراً في البداية ويبقى ثابتاً - حركة متقطعة" },
                    { value: "step-end", description: "يبقى ثابتاً ثم يتغير فوراً في النهاية" },
                    { value: "steps(2)", description: "يتغير على خطوتين متساويتين" },
                    { value: "steps(4)", description: "يتغير على 4 خطوات متساوية" },
                    { value: "steps(6)", description: "يتغير على 6 خطوات" },
                    { value: "steps(2, start)", description: "يتغير على خطوتين، التغيير عند بداية كل خطوة" },
                    { value: "steps(2, end)", description: "يتغير على خطوتين، التغيير عند نهاية كل خطوة" },
                    { value: "steps(4, jump-start)", description: "4 خطوات مع قفز في البداية" },
                    { value: "steps(4, jump-end)", description: "4 خطوات مع قفز في النهاية" },
                    { value: "steps(4, jump-none)", description: "4 خطوات بدون قفز" },
                    { value: "steps(4, jump-both)", description: "4 خطوات مع قفز في البداية والنهاية" },
                    
                    // منحنيات بيزييه المخصصة
                    { value: "cubic-bezier(0.25, 0.1, 0.25, 1)", description: "منحنى بيزييه مخصص (مكافئ لـ ease)" },
                    { value: "cubic-bezier(0.42, 0, 1, 1)", description: "منحنى بيزييه مخصص (مكافئ لـ ease-in)" },
                    { value: "cubic-bezier(0, 0, 0.58, 1)", description: "منحنى بيزييه مخصص (مكافئ لـ ease-out)" },
                    { value: "cubic-bezier(0.42, 0, 0.58, 1)", description: "منحنى بيزييه مخصص (مكافئ لـ ease-in-out)" },
                    { value: "cubic-bezier(0.47, 0, 0.745, 0.715)", description: "تسارع سريع" },
                    { value: "cubic-bezier(0.39, 0.575, 0.565, 1)", description: "تباطؤ سلس" },
                    { value: "cubic-bezier(0.55, 0.055, 0.675, 0.19)", description: "تسارع حاد" },
                    { value: "cubic-bezier(0.215, 0.61, 0.355, 1)", description: "تباطؤ حاد" },
                    { value: "cubic-bezier(0.95, 0.05, 0.795, 0.035)", description: "مرونة عالية" },
                    { value: "cubic-bezier(0.19, 1, 0.22, 1)", description: "تأثير مرن (Elastic)" },
                    { value: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", description: "تأثير ارتداد (Bounce)" },
                    { value: "cubic-bezier(0.6, -0.05, 0.735, 0.045)", description: "تأثير مرتد خفيف" },
                    { value: "cubic-bezier(0.85, 0, 0.15, 1)", description: "تأثير مرن متماثل" },
                    
                    // قيم متعددة
                    { value: "ease-in, ease-out", description: "دوال مختلفة لخصائص مختلفة" },
                    { value: "ease, linear, ease-in-out", description: "ثلاث دوال مختلفة" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. transition-delay
    // ============================================================
    {
        tag: "transition-delay",
        description: "يحدد وقت التأخير قبل بدء الانتقال (مدة الانتظار قبل التغيير)",
        properties: [
            {
                name: "transition-delay",
                description: "يحدد وقت التأخير قبل بدء الانتقال (مدة الانتظار قبل التغيير)",
                values: [
                    { value: "0s", description: "بدون تأخير، يبدأ فوراً - القيمة الافتراضية" },
                    { value: "0.05s", description: "تأخير 50 مللي ثانية" },
                    { value: "0.1s", description: "تأخير 100 مللي ثانية" },
                    { value: "0.15s", description: "تأخير 150 مللي ثانية" },
                    { value: "0.2s", description: "تأخير 200 مللي ثانية" },
                    { value: "0.25s", description: "تأخير 250 مللي ثانية" },
                    { value: "0.3s", description: "تأخير 300 مللي ثانية" },
                    { value: "0.4s", description: "تأخير 400 مللي ثانية" },
                    { value: "0.5s", description: "تأخير نصف ثانية - شائع" },
                    { value: "0.75s", description: "تأخير 750 مللي ثانية" },
                    { value: "1s", description: "تأخير ثانية واحدة" },
                    { value: "1.5s", description: "تأخير 1.5 ثانية" },
                    { value: "2s", description: "تأخير ثانيتين" },
                    { value: "3s", description: "تأخير ثلاث ثوان" },
                    { value: "5s", description: "تأخير خمس ثوان" },
                    { value: "100ms", description: "تأخير 100 مللي ثانية" },
                    { value: "200ms", description: "تأخير 200 مللي ثانية" },
                    { value: "500ms", description: "تأخير 500 مللي ثانية" },
                    { value: "0.2s, 0.5s", description: "تأخيرات مختلفة لخصائص مختلفة" },
                    { value: "0.1s, 0.2s, 0.3s", description: "ثلاث تأخيرات مختلفة" },
                    { value: "-0.5s", description: "قيمة سالبة - يبدأ الانتقال وكأنه بدأ قبل نصف ثانية (مقطوع)" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. transition-behavior
    // ============================================================
    {
        tag: "transition-behavior",
        description: "يحدد هل يشمل الانتقال الخصائص المنفصلة (Discrete) مثل display أو visibility التي تتغير دفعة واحدة عادة بدلاً من تدريجياً",
        properties: [
            {
                name: "transition-behavior",
                description: "يحدد هل يشمل الانتقال الخصائص المنفصلة (Discrete) مثل display أو visibility",
                values: [
                    { value: "normal", description: "لا انتقال للخصائص المنفصلة - القيمة الافتراضية" },
                    { value: "allow-discrete", description: "يسمح بتطبيق انتقال حتى على خصائص منفصلة مثل display و visibility" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لاستخدام الانتقالات في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - زر بتأثير hover",
                description: "زر يتغير لونه وحجمه عند التمرير",
                values: [
                    { value: ".button { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 8px; transition: all 0.3s ease; } .button:hover { background: #0056b3; transform: scale(1.05); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }", description: "زر بتأثير hover سلس" }
                ]
            },
            {
                name: "مثال 2 - تأثير تلاشي",
                description: "عنصر يظهر ويختفي بتلاشي",
                values: [
                    { value: ".fade { opacity: 0; transition: opacity 0.5s ease-in-out; } .fade.show { opacity: 1; }", description: "تأثير تلاشي سلس" }
                ]
            },
            {
                name: "مثال 3 - انتقال مع تأخير متسلسل",
                description: "عناصر تظهر بتأخير متتابع",
                values: [
                    { value: ".item { opacity: 0; transform: translateY(20px); transition: all 0.4s ease-out; } .item:nth-child(1) { transition-delay: 0.1s; } .item:nth-child(2) { transition-delay: 0.2s; } .item:nth-child(3) { transition-delay: 0.3s; } .item.visible { opacity: 1; transform: translateY(0); }", description: "عناصر تظهر بتسلسل زمني" }
                ]
            },
            {
                name: "مثال 4 - انتقال مرن (Bounce)",
                description: "تأثير ارتداد باستخدام cubic-bezier",
                values: [
                    { value: ".bounce { transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55); } .bounce:hover { transform: scale(1.2); }", description: "تأثير ارتداد عند التمرير" }
                ]
            },
            {
                name: "مثال 5 - انتقال مع allow-discrete",
                description: "انتقال خروج سلس مع display: none",
                values: [
                    { value: ".element { display: none; opacity: 0; transition: opacity 0.5s ease, display 0.5s ease allow-discrete; } .element.visible { display: block; opacity: 1; }", description: "انتقال سلس مع display: none" }
                ]
            },
            {
                name: "مثال 6 - انتقالات متعددة",
                description: "خصائص مختلفة بمدد وتأخيرات مختلفة",
                values: [
                    { value: ".multi-transition { transition: background-color 0.3s ease, transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 0.4s ease-in-out; } .multi-transition:hover { background-color: #007bff; transform: scale(1.1) rotate(5deg); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }", description: "انتقالات متعددة بتأثيرات مختلفة" }
                ]
            },
            {
                name: "مثال 7 - تأثير الـ Slide",
                description: "عنصر ينزلق من الجانب",
                values: [
                    { value: ".slide { transform: translateX(-100%); transition: transform 0.5s ease-in-out; } .slide.open { transform: translateX(0); }", description: "انزلاق من اليسار" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام الانتقالات بشكل فعال",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الانتقالات",
                values: [
                    { value: "استخدم transform و opacity", description: "هذه الخصائص تُعالج بواسطة GPU مما يعطي أداءً أفضل" },
                    { value: "تجنب transition: all", description: "قد يسبب انتقالات غير مرغوب فيها ويؤثر على الأداء" },
                    { value: "استخدم will-change", description: "will-change: transform, opacity يحسن أداء الانتقالات" },
                    { value: "حافظ على 60fps", description: "تأكد من أن الانتقالات تعمل بسلاسة" }
                ]
            },
            {
                name: "نصائح التصميم",
                description: "نصائح لتصميم انتقالات جذابة",
                values: [
                    { value: "استخدم ease-in-out للحركات الطبيعية", description: "تعطي شعوراً أكثر طبيعية" },
                    { value: "لا تفرط في استخدام الانتقالات", description: "استخدمها بشكل مدروس ومحدود" },
                    { value: "استخدم مدداً مختلفة", description: "0.2-0.5 ثانية للتفاعلات البسيطة، 0.5-1 ثانية للانتقالات المعقدة" },
                    { value: "استخدم cubic-bezier للتأثيرات المخصصة", description: "للحصول على تأثيرات فريدة مثل الارتداد" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل الانتقالات قابلة للوصول",
                values: [
                    { value: "احترم prefers-reduced-motion", description: "قلل الحركات للمستخدمين الذين يطلبون ذلك" },
                    { value: "تجنب الانتقالات السريعة جداً", description: "قد تسبب مشاكل للمستخدمين" },
                    { value: "تجنب الانتقالات البطيئة جداً", description: "قد تكون مزعجة للمستخدمين" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام الانتقالات",
                values: [
                    { value: "نسيان transition على الحالة الأصلية", description: "ضع transition على العنصر وليس على :hover" },
                    { value: "استخدام transition: all بدون تمييز", description: "قد يسبب انتقالات غير مرغوب فيها" },
                    { value: "نسيان cubic-bezier في التأثيرات المخصصة", description: "لا تعمل بدون تحديد منحنى" },
                    { value: "استخدام transition مع display: none", description: "display ليس خاصية قابلة للانتقال (استخدم allow-discrete)" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.transitionsData = transitionsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = transitionsData;
}