// ============================================================
// animations.js
// خصائص الرسوم المتحركة (Animations) في CSS
// تتيح إنشاء حركات معقدة ومستمرة باستخدام @keyframes
// ============================================================

const animationsData = [
    // ============================================================
    // 1. خاصية animation (الاختصار)
    // ============================================================
    {
        tag: "animation",
        description: "اختصار لتحديد جميع خصائص الرسوم المتحركة في سطر واحد، يسهل كتابة حركات معقدة بسرعة دون تكرار الكود",
        properties: [
            // -------- animation (الاختصار) --------
            {
                name: "animation",
                description: "الخاصية المختصرة للرسوم المتحركة، تجمع جميع الخصائص في قيمة واحدة بترتيب محدد",
                values: [
                    { value: "none", description: "بدون رسوم متحركة (القيمة الافتراضية)" },
                    { value: "slide 2s ease-in-out infinite", description: "حركة 'slide' لمدة 2 ثانية بسلاسة وبشكل لا نهائي" },
                    { value: "fade 1s forwards", description: "حركة 'fade' لمدة ثانية وتتوقف عند الحالة النهائية" },
                    { value: "spin 3s linear 0.5s 5", description: "حركة 'spin' لمدة 3 ثانية بسرعة ثابتة، تأخير 0.5 ثانية، تتكرر 5 مرات" },
                    { value: "bounce 0.8s ease-in-out infinite alternate", description: "حركة 'bounce' ذهاباً وإياباً بشكل لا نهائي" },
                    { value: "pulse 1.5s ease 0.2s infinite", description: "حركة 'pulse' لمدة 1.5 ثانية مع تأخير 0.2 ثانية" },
                    { value: "shake 0.5s ease-in-out 3", description: "حركة 'shake' تتكرر 3 مرات" },
                    { value: "fadeIn 2s ease-out forwards", description: "ظهور تدريجي لمدة 2 ثانية مع بقاء النتيجة النهائية" },
                    { value: "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both", description: "حركة مخصصة بمنحنى بيزييه مع تطبيق الأنماط قبل وبعد" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. animation-name
    // ============================================================
    {
        tag: "animation-name",
        description: "يحدد اسم الحركة التي تم تعريفها باستخدام @keyframes، يجب أن يتطابق الاسم مع ما هو معرف في القاعدة",
        properties: [
            {
                name: "animation-name",
                description: "يحدد اسم الحركة التي تم تعريفها باستخدام @keyframes",
                values: [
                    { value: "none", description: "بدون حركة (القيمة الافتراضية)" },
                    { value: "slideIn", description: "اسم حركة الدخول من الجانب" },
                    { value: "slideOut", description: "اسم حركة الخروج من الجانب" },
                    { value: "fadeIn", description: "اسم حركة الظهور التدريجي" },
                    { value: "fadeOut", description: "اسم حركة الاختفاء التدريجي" },
                    { value: "bounce", description: "اسم حركة الارتداد" },
                    { value: "spin", description: "اسم حركة الدوران" },
                    { value: "pulse", description: "اسم حركة النبض" },
                    { value: "shake", description: "اسم حركة الاهتزاز" },
                    { value: "zoomIn", description: "اسم حركة التكبير" },
                    { value: "zoomOut", description: "اسم حركة التصغير" },
                    { value: "rotate", description: "اسم حركة الدوران" },
                    { value: "scale", description: "اسم حركة تغيير الحجم" },
                    { value: "translate", description: "اسم حركة الانتقال" },
                    { value: "blur", description: "اسم حركة الضبابية" },
                    { value: "colorChange", description: "اسم حركة تغيير اللون" },
                    { value: "glow", description: "اسم حركة التوهج" },
                    { value: "float", description: "اسم حركة الطفو" },
                    { value: "swing", description: "اسم حركة التأرجح" },
                    { value: "wobble", description: "اسم حركة التمايل" },
                    { value: "flip", description: "اسم حركة التقليب" },
                    { value: "slideUp", description: "اسم حركة الصعود" },
                    { value: "slideDown", description: "اسم حركة النزول" },
                    { value: "slideLeft", description: "اسم حركة اليسار" },
                    { value: "slideRight", description: "اسم حركة اليمين" },
                    { value: "expand", description: "اسم حركة التوسع" },
                    { value: "collapse", description: "اسم حركة الانكماش" },
                    { value: "pulse", description: "اسم حركة النبض" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. animation-duration
    // ============================================================
    {
        tag: "animation-duration",
        description: "يحدد المدة الزمنية التي تستغرقها دورة واحدة من الحركة، تحدد سرعة الحركة الكلية",
        properties: [
            {
                name: "animation-duration",
                description: "يحدد المدة الزمنية التي تستغرقها دورة واحدة من الحركة",
                values: [
                    { value: "0s", description: "فوري بدون حركة (القيمة الافتراضية)" },
                    { value: "0.1s", description: "100 مللي ثانية - سريع جداً" },
                    { value: "0.2s", description: "200 مللي ثانية - سريع" },
                    { value: "0.3s", description: "300 مللي ثانية - سريع متوسط" },
                    { value: "0.4s", description: "400 مللي ثانية" },
                    { value: "0.5s", description: "نصف ثانية - متوسط سريع" },
                    { value: "0.6s", description: "600 مللي ثانية" },
                    { value: "0.7s", description: "700 مللي ثانية" },
                    { value: "0.8s", description: "800 مللي ثانية" },
                    { value: "0.9s", description: "900 مللي ثانية" },
                    { value: "1s", description: "ثانية واحدة - متوسط" },
                    { value: "1.5s", description: "ثانية ونصف - متوسط بطيء" },
                    { value: "2s", description: "ثانيتان - بطيء" },
                    { value: "2.5s", description: "ثانيتان ونصف" },
                    { value: "3s", description: "ثلاث ثوان - بطيء جداً" },
                    { value: "4s", description: "أربع ثوان" },
                    { value: "5s", description: "خمس ثوان" },
                    { value: "10s", description: "عشر ثوان" },
                    { value: "100ms", description: "100 مللي ثانية" },
                    { value: "200ms", description: "200 مللي ثانية" },
                    { value: "300ms", description: "300 مللي ثانية" },
                    { value: "500ms", description: "500 مللي ثانية" },
                    { value: "750ms", description: "750 مللي ثانية" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. animation-timing-function
    // ============================================================
    {
        tag: "animation-timing-function",
        description: "يحدد منحنى سرعة الحركة (كيف تتغير السرعة خلال مدة الحركة)، يؤثر على سلاسة الحركة وطبيعتها",
        properties: [
            {
                name: "animation-timing-function",
                description: "يحدد منحنى سرعة الحركة (كيف تتغير السرعة خلال مدة الحركة)",
                values: [
                    { value: "ease", description: "يبدأ ببطء، يتسارع، ثم يتباطأ (القيمة الافتراضية) - حركة طبيعية" },
                    { value: "ease-in", description: "يبدأ ببطء شديد ثم يتسارع تدريجياً - حركة تسارعية" },
                    { value: "ease-out", description: "يبدأ سريعاً ثم يتباطأ تدريجياً - حركة تباطؤية" },
                    { value: "ease-in-out", description: "يبدأ ببطء، يتسارع في المنتصف، ثم يتباطأ - حركة متوازنة" },
                    { value: "linear", description: "سرعة ثابتة من البداية إلى النهاية - حركة آلية" },
                    { value: "step-start", description: "يتغير فوراً في البداية ويبقى ثابتاً - حركة متقطعة" },
                    { value: "step-end", description: "يبقى ثابتاً ثم يتغير فوراً في النهاية" },
                    { value: "steps(2)", description: "يتغير على خطوتين متساويتين" },
                    { value: "steps(4)", description: "يتغير على 4 خطوات متساوية" },
                    { value: "steps(3, start)", description: "يتغير على 3 خطوات، التغيير عند بداية كل خطوة" },
                    { value: "steps(3, end)", description: "يتغير على 3 خطوات، التغيير عند نهاية كل خطوة" },
                    { value: "steps(6, jump-start)", description: "6 خطوات مع قفز في البداية" },
                    { value: "steps(6, jump-end)", description: "6 خطوات مع قفز في النهاية" },
                    { value: "steps(6, jump-none)", description: "6 خطوات بدون قفز" },
                    { value: "steps(6, jump-both)", description: "6 خطوات مع قفز في البداية والنهاية" },
                    { value: "cubic-bezier(0.25, 0.1, 0.25, 1)", description: "منحنى بيزييه مخصص (ease)" },
                    { value: "cubic-bezier(0.42, 0, 1, 1)", description: "منحنى بيزييه مخصص (ease-in)" },
                    { value: "cubic-bezier(0, 0, 0.58, 1)", description: "منحنى بيزييه مخصص (ease-out)" },
                    { value: "cubic-bezier(0.42, 0, 0.58, 1)", description: "منحنى بيزييه مخصص (ease-in-out)" },
                    { value: "cubic-bezier(0.47, 0, 0.745, 0.715)", description: "منحنى بيزييه - تسارع سريع" },
                    { value: "cubic-bezier(0.39, 0.575, 0.565, 1)", description: "منحنى بيزييه - تباطؤ سلس" },
                    { value: "cubic-bezier(0.55, 0.055, 0.675, 0.19)", description: "منحنى بيزييه - تسارع حاد" },
                    { value: "cubic-bezier(0.215, 0.61, 0.355, 1)", description: "منحنى بيزييه - تباطؤ حاد" },
                    { value: "cubic-bezier(0.95, 0.05, 0.795, 0.035)", description: "منحنى بيزييه - مرونة عالية" },
                    { value: "cubic-bezier(0.19, 1, 0.22, 1)", description: "منحنى بيزييه - تأثير مرن" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. animation-delay
    // ============================================================
    {
        tag: "animation-delay",
        description: "يحدد وقت التأخير قبل بدء الحركة، مفيد لتتابع الحركات أو الانتظار قبل البدء",
        properties: [
            {
                name: "animation-delay",
                description: "يحدد وقت التأخير قبل بدء الحركة",
                values: [
                    { value: "0s", description: "بدون تأخير، تبدأ فوراً (القيمة الافتراضية)" },
                    { value: "0.1s", description: "تأخير 100 مللي ثانية" },
                    { value: "0.2s", description: "تأخير 200 مللي ثانية" },
                    { value: "0.3s", description: "تأخير 300 مللي ثانية" },
                    { value: "0.4s", description: "تأخير 400 مللي ثانية" },
                    { value: "0.5s", description: "تأخير نصف ثانية" },
                    { value: "0.6s", description: "تأخير 600 مللي ثانية" },
                    { value: "0.7s", description: "تأخير 700 مللي ثانية" },
                    { value: "0.8s", description: "تأخير 800 مللي ثانية" },
                    { value: "0.9s", description: "تأخير 900 مللي ثانية" },
                    { value: "1s", description: "تأخير ثانية واحدة" },
                    { value: "1.5s", description: "تأخير ثانية ونصف" },
                    { value: "2s", description: "تأخير ثانيتين" },
                    { value: "3s", description: "تأخير ثلاث ثوان" },
                    { value: "5s", description: "تأخير خمس ثوان" },
                    { value: "10s", description: "تأخير عشر ثوان" },
                    { value: "100ms", description: "100 مللي ثانية" },
                    { value: "250ms", description: "250 مللي ثانية" },
                    { value: "500ms", description: "500 مللي ثانية" },
                    { value: "750ms", description: "750 مللي ثانية" },
                    { value: "-1s", description: "قيمة سالبة - تبدأ الحركة وكأنها بدأت قبل ثانية" },
                    { value: "-500ms", description: "قيمة سالبة - تبدأ الحركة وكأنها بدأت قبل 500 مللي ثانية" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. animation-iteration-count
    // ============================================================
    {
        tag: "animation-iteration-count",
        description: "يحدد عدد مرات تكرار الحركة، يسمح بتكرارها عدداً محدداً أو بشكل لا نهائي",
        properties: [
            {
                name: "animation-iteration-count",
                description: "يحدد عدد مرات تكرار الحركة",
                values: [
                    { value: "1", description: "مرة واحدة (القيمة الافتراضية)" },
                    { value: "2", description: "مرتين" },
                    { value: "3", description: "ثلاث مرات" },
                    { value: "4", description: "أربع مرات" },
                    { value: "5", description: "خمس مرات" },
                    { value: "6", description: "ست مرات" },
                    { value: "7", description: "سبع مرات" },
                    { value: "8", description: "ثمان مرات" },
                    { value: "9", description: "تسع مرات" },
                    { value: "10", description: "عشر مرات" },
                    { value: "20", description: "عشرون مرة" },
                    { value: "50", description: "خمسون مرة" },
                    { value: "100", description: "مائة مرة" },
                    { value: "infinite", description: "لا نهائي - يتكرر إلى الأبد" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 7. animation-direction
    // ============================================================
    {
        tag: "animation-direction",
        description: "يحدد اتجاه الحركة (طبيعي، معكوس، ذهاباً وإياباً)، يتحكم في ترتيب تنفيذ الإطارات المفتاحية",
        properties: [
            {
                name: "animation-direction",
                description: "يحدد اتجاه الحركة (طبيعي، معكوس، ذهاباً وإياباً)",
                values: [
                    { value: "normal", description: "اتجاه طبيعي من البداية إلى النهاية (القيمة الافتراضية)" },
                    { value: "reverse", description: "اتجاه معكوس من النهاية إلى البداية" },
                    { value: "alternate", description: "ذهاباً (طبيعي) ثم إياباً (معكوس) بالتناوب مع كل تكرار" },
                    { value: "alternate-reverse", description: "معكوس ثم طبيعي بالتناوب مع كل تكرار" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. animation-fill-mode
    // ============================================================
    {
        tag: "animation-fill-mode",
        description: "يحدد كيفية تطبيق أنماط الحركة قبل بدئها وبعد انتهائها، يتحكم في الحالة الافتراضية للعنصر",
        properties: [
            {
                name: "animation-fill-mode",
                description: "يحدد كيفية تطبيق أنماط الحركة قبل بدئها وبعد انتهائها",
                values: [
                    { value: "none", description: "لا تطبق الأنماط قبل أو بعد الحركة - يعود العنصر لحالته الأصلية (القيمة الافتراضية)" },
                    { value: "forwards", description: "يبقى العنصر على الحالة النهائية للحركة بعد انتهائها" },
                    { value: "backwards", description: "يطبق الحالة الأولية للحركة قبل بدئها (أثناء فترة التأخير)" },
                    { value: "both", description: "يطبق كلاً من forwards و backwards معاً" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. animation-play-state
    // ============================================================
    {
        tag: "animation-play-state",
        description: "يسمح بإيقاف الحركة مؤقتاً أو تشغيلها، يمكن التحكم بها بواسطة CSS أو JavaScript للتفاعل مع المستخدم",
        properties: [
            {
                name: "animation-play-state",
                description: "يسمح بإيقاف الحركة مؤقتاً أو تشغيلها",
                values: [
                    { value: "running", description: "الحركة قيد التشغيل (القيمة الافتراضية)" },
                    { value: "paused", description: "إيقاف الحركة مؤقتاً - تبقى في مكانها" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. animation-timeline
    // ============================================================
    {
        tag: "animation-timeline",
        description: "يربط الحركة بجدول زمني خارجي (مثل تمرير الصفحة أو حركة الماوس) بدلاً من الوقت الثابت، يوفر تحكماً ديناميكياً بالحركة",
        properties: [
            {
                name: "animation-timeline",
                description: "يربط الحركة بجدول زمني خارجي بدلاً من الوقت الثابت",
                values: [
                    { value: "auto", description: "جدول زمني تلقائي يعتمد على الوقت (القيمة الافتراضية)" },
                    { value: "scroll()", description: "يربط الحركة بتمرير الصفحة - تتقدم الحركة مع التمرير" },
                    { value: "scroll(nearest)", description: "يربط بأقرب حاوية قابلة للتمرير" },
                    { value: "scroll(root)", description: "يربط بجذر الصفحة (viewport)" },
                    { value: "scroll(self)", description: "يربط بالعنصر نفسه" },
                    { value: "view()", description: "يربط الحركة بظهور العنصر في نطاق الرؤية" },
                    { value: "view(nearest)", description: "يربط بظهور العنصر في أقرب حاوية" },
                    { value: "view(root)", description: "يربط بظهور العنصر في viewport" },
                    { value: "view(self)", description: "يربط بظهور العنصر في نفسه" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. animation-range
    // ============================================================
    {
        tag: "animation-range",
        description: "يحدد نطاق البداية والنهاية للحركة عندما تكون مرتبطة بـ animation-timeline (scroll/view)، يتحكم في متى تبدأ ومتى تنتهي الحركة",
        properties: [
            {
                name: "animation-range",
                description: "يحدد نطاق البداية والنهاية للحركة المرتبطة بجدول زمني خارجي",
                values: [
                    { value: "normal", description: "النطاق الكامل الافتراضي" },
                    { value: "entry", description: "يبدأ عندما يدخل العنصر نطاق الرؤية" },
                    { value: "exit", description: "يبدأ عندما يخرج العنصر من نطاق الرؤية" },
                    { value: "contain", description: "يبدأ عندما يكون العنصر داخل نطاق الرؤية" },
                    { value: "cover", description: "يبدأ عندما يغطي العنصر نطاق الرؤية" },
                    { value: "entry 0%", description: "يبدأ عند بداية دخول العنصر" },
                    { value: "entry 100%", description: "يبدأ عند نهاية دخول العنصر" },
                    { value: "exit 0%", description: "يبدأ عند بداية خروج العنصر" },
                    { value: "exit 100%", description: "يبدأ عند نهاية خروج العنصر" },
                    { value: "entry 0% cover 100%", description: "تبدأ الحركة عند دخول العنصر وتنتهي عند تغطيته الكاملة" },
                    { value: "0% 100%", description: "نطاق مخصص بالنسب المئوية" },
                    { value: "10% 80%", description: "تبدأ عند 10% وتنتهي عند 80%" },
                    { value: "0px 500px", description: "نطاق مخصص بالبكسل" },
                    { value: "0vh 100vh", description: "نطاق مخصص بوحدات viewport" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 12. animation-composition
    // ============================================================
    {
        tag: "animation-composition",
        description: "يحدد كيفية دمج قيم عدة حركات تؤثر على نفس الخاصية في آن واحد، يتحكم في كيفية تعامل الحركات المتداخلة",
        properties: [
            {
                name: "animation-composition",
                description: "يحدد كيفية دمج قيم عدة حركات تؤثر على نفس الخاصية في آن واحد",
                values: [
                    { value: "replace", description: "تستبدل القيمة السابقة بالقيمة الجديدة (القيمة الافتراضية)" },
                    { value: "add", description: "تُضاف القيمة الجديدة إلى القيم السابقة (مجموع)" },
                    { value: "accumulate", description: "تتراكم القيم مع بعضها البعض (تراكمي)" }
                ]
            }
        ]
    },

    // ============================================================
    // 13. @keyframes
    // ============================================================
    {
        tag: "@keyframes",
        description: "قاعدة CSS التي تُعرّف مراحل الحركة نفسها (from/to أو نسب مئوية) قبل استدعائها بواسطة animation-name، تحدد التغيرات في الخصائص عبر الزمن",
        properties: [
            {
                name: "@keyframes (ملاحظة)",
                description: "قاعدة @keyframes هي التي تُعرّف مراحل الحركة نفسها قبل استدعائها بواسطة animation-name",
                values: [
                    { value: "0% / from", description: "نقطة البداية للحركة، تحدد الحالة الأولى للعنصر" },
                    { value: "5%", description: "5% من مدة الحركة" },
                    { value: "10%", description: "10% من مدة الحركة" },
                    { value: "15%", description: "15% من مدة الحركة" },
                    { value: "20%", description: "20% من مدة الحركة" },
                    { value: "25%", description: "ربع مدة الحركة" },
                    { value: "30%", description: "30% من مدة الحركة" },
                    { value: "35%", description: "35% من مدة الحركة" },
                    { value: "40%", description: "40% من مدة الحركة" },
                    { value: "45%", description: "45% من مدة الحركة" },
                    { value: "50%", description: "نقطة منتصف الحركة، غالباً ما تكون نقطة التحول الرئيسية" },
                    { value: "55%", description: "55% من مدة الحركة" },
                    { value: "60%", description: "60% من مدة الحركة" },
                    { value: "65%", description: "65% من مدة الحركة" },
                    { value: "70%", description: "70% من مدة الحركة" },
                    { value: "75%", description: "ثلاثة أرباع مدة الحركة" },
                    { value: "80%", description: "80% من مدة الحركة" },
                    { value: "85%", description: "85% من مدة الحركة" },
                    { value: "90%", description: "90% من مدة الحركة" },
                    { value: "95%", description: "95% من مدة الحركة" },
                    { value: "100% / to", description: "نقطة النهاية للحركة، تحدد الحالة النهائية للعنصر" }
                ]
            },
            {
                name: "@keyframes - الخصائص المدعومة",
                description: "الخصائص التي يمكن استخدامها داخل @keyframes لتغييرها أثناء الحركة",
                values: [
                    { value: "transform", description: "تغيير حجم، دوران، انزلاق العنصر" },
                    { value: "opacity", description: "تغيير شفافية العنصر" },
                    { value: "color", description: "تغيير لون النص" },
                    { value: "background-color", description: "تغيير لون الخلفية" },
                    { value: "width", description: "تغيير العرض" },
                    { value: "height", description: "تغيير الارتفاع" },
                    { value: "margin", description: "تغيير الهامش" },
                    { value: "padding", description: "تغيير الحشو" },
                    { value: "top", description: "تغيير الموضع العلوي" },
                    { value: "right", description: "تغيير الموضع الأيمن" },
                    { value: "bottom", description: "تغيير الموضع السفلي" },
                    { value: "left", description: "تغيير الموضع الأيسر" },
                    { value: "font-size", description: "تغيير حجم الخط" },
                    { value: "border-radius", description: "تغيير استدارة الحدود" },
                    { value: "box-shadow", description: "تغيير الظل" },
                    { value: "text-shadow", description: "تغيير ظل النص" },
                    { value: "filter", description: "تغيير تأثيرات الفلتر" },
                    { value: "clip-path", description: "تغيير مسار القص" }
                ]
            },
            {
                name: "مثال @keyframes",
                description: "أمثلة عملية على تعريف حركات مختلفة باستخدام @keyframes",
                values: [
                    { value: "@keyframes slide { from { transform: translateX(-100%); } to { transform: translateX(0); } }", description: "حركة انزلاق من اليسار" },
                    { value: "@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; } }", description: "حركة ظهور تدريجي" },
                    { value: "@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }", description: "حركة ارتداد" },
                    { value: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }", description: "حركة دوران كامل" },
                    { value: "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }", description: "حركة نبض" },
                    { value: "@keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } }", description: "حركة اهتزاز" },
                    { value: "@keyframes glow { from { text-shadow: 0 0 5px #fff; } to { text-shadow: 0 0 20px #ff0; } }", description: "حركة توهج" },
                    { value: "@keyframes expand { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }", description: "حركة توسع مع ظهور" },
                    { value: "@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }", description: "حركة طفو" },
                    { value: "@keyframes swing { 20% { transform: rotate(15deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }", description: "حركة تأرجح" }
                ]
            }
        ]
    },

    // ============================================================
    // 14. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "animation-examples",
        description: "أمثلة عملية متقدمة للرسوم المتحركة تجمع بين عدة خصائص",
        properties: [
            {
                name: "مثال 1 - تحميل متقدم",
                description: "حركة تحميل مع دوران وشفافية متغيرة",
                values: [
                    { value: "@keyframes spin { 0% { transform: rotate(0deg); opacity: 1; } 50% { opacity: 0.5; } 100% { transform: rotate(360deg); opacity: 1; } } .loader { animation: spin 1.5s ease-in-out infinite; }", description: "دائرة تحميل متقدمة" }
                ]
            },
            {
                name: "مثال 2 - قائمة متسلسلة",
                description: "عناصر قائمة تظهر بتأخير متتابع",
                values: [
                    { value: "@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } } .list-item:nth-child(1) { animation: fadeInUp 0.5s ease-out 0.1s both; } .list-item:nth-child(2) { animation: fadeInUp 0.5s ease-out 0.2s both; } .list-item:nth-child(3) { animation: fadeInUp 0.5s ease-out 0.3s both; }", description: "قائمة تظهر بتسلسل زمني" }
                ]
            },
            {
                name: "مثال 3 - تمرير متقدم",
                description: "حركات مرتبطة بالتمرير باستخدام animation-timeline",
                values: [
                    { value: "@keyframes progress { from { width: 0%; } to { width: 100%; } } .progress-bar { animation: progress linear; animation-timeline: scroll(); animation-range: 0% 100%; }", description: "شريط تقدم مرتبط بالتمرير" }
                ]
            },
            {
                name: "مثال 4 - عناصر متعددة متزامنة",
                description: "حركات متعددة على نفس العنصر في وقت واحد",
                values: [
                    { value: "@keyframes moveAndFade { 0% { transform: translateX(0); opacity: 1; } 100% { transform: translateX(200px); opacity: 0; } } @keyframes scaleRotate { 0% { transform: scale(1) rotate(0deg); } 100% { transform: scale(1.5) rotate(180deg); } } .element { animation: moveAndFade 2s ease-in-out forwards, scaleRotate 2s ease-in-out forwards; }", description: "حركات متعددة متزامنة" }
                ]
            },
            {
                name: "مثال 5 - تأثير مكتشف",
                description: "تأثير كشف محتوى متحرك",
                values: [
                    { value: "@keyframes reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } } .reveal-text { animation: reveal 1.5s ease-in-out forwards; }", description: "كشف نص تدريجي" }
                ]
            }
        ]
    },

    // ============================================================
    // 15. نصائح وإرشادات
    // ============================================================
    {
        tag: "animation-tips",
        description: "نصائح وإرشادات مهمة لاستخدام الرسوم المتحركة بشكل فعال",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الرسوم المتحركة",
                values: [
                    { value: "استخدم transform و opacity", description: "هذه الخصائص تُعالج بواسطة GPU مما يعطي أداءً أفضل" },
                    { value: "تجنب إعادة التدفق (reflow)", description: "تجنب تغيير خصائص تسبب إعادة تخطيط الصفحة (width, height, margin, padding, top, left)" },
                    { value: "استخدم will-change", description: "أضف will-change: transform, opacity للعناصر المتحركة لتحسين الأداء" },
                    { value: "حافظ على 60fps", description: "تأكد من أن الحركات تعمل بسلاسة بتحديث 60 إطار في الثانية" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل الرسوم المتحركة قابلة للوصول للجميع",
                values: [
                    { value: "احترم prefers-reduced-motion", description: "استخدم @media (prefers-reduced-motion: reduce) لتقليل الحركات للمستخدمين الذين يطلبون ذلك" },
                    { value: "لا تستخدم الحركات المزعجة", description: "تجنب الحركات السريعة أو الوامضة التي قد تسبب الصرع" },
                    { value: "أضف عناصر تحكم", description: "قدم للمستخدمين إمكانية إيقاف أو تقليل الحركات" }
                ]
            },
            {
                name: "نصائح التصميم",
                description: "نصائح لتصميم حركات جذابة وفعالة",
                values: [
                    { value: "استخدم ease-in-out للحركات الطبيعية", description: "تعطي شعوراً طبيعياً أكثر من linear" },
                    { value: "لا تفرط في استخدام الحركات", description: "استخدم الحركات بشكل مدروس ومحدود" },
                    { value: "تتابع الحركات", description: "استخدم animation-delay لإنشاء تتابع طبيعي" },
                    { value: "مدد الحركات بين 300ms-800ms", description: "هذه المدى الزمني يعطي أفضل تجربة للمستخدم" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.animationsData = animationsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = animationsData;
}