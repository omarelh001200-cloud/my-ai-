// ============================================================
// css-at-rules.js
// قواعد @ (At-Rules) في CSS
// تشرح جميع قواعد @ المستخدمة في CSS مع أمثلة واستخدامات
// ============================================================

const cssAtRulesData = [
    // ============================================================
    // 1. قواعد وسائط الاستعلام (Media Queries)
    // ============================================================
    {
        tag: "media-rules",
        description: "قواعد @media لتطبيق الأنماط بناءً على خصائص الجهاز أو المتصفح، وهي أساس التصميم المتجاوب (Responsive Design)",
        properties: [
            {
                name: "@media",
                description: "تطبق الأنماط فقط عند تحقق شرط معين متعلق بجهاز العرض (العرض، الارتفاع، الاتجاه، تفضيلات المستخدم، إلخ)",
                values: [
                    // أبعاد الشاشة
                    { value: "@media (max-width: 768px) { ... }", description: "أنماط للشاشات بعرض 768px فأقل" },
                    { value: "@media (min-width: 768px) { ... }", description: "أنماط للشاشات بعرض 768px فأكثر" },
                    { value: "@media (width: 1024px) { ... }", description: "أنماط للشاشات بعرض 1024px بالضبط" },
                    { value: "@media (max-height: 600px) { ... }", description: "أنماط للشاشات بارتفاع 600px فأقل" },
                    { value: "@media (min-height: 800px) { ... }", description: "أنماط للشاشات بارتفاع 800px فأكثر" },
                    
                    // اتجاه الشاشة
                    { value: "@media (orientation: landscape) { ... }", description: "أنماط عند اتجاه الشاشة الأفقي" },
                    { value: "@media (orientation: portrait) { ... }", description: "أنماط عند اتجاه الشاشة العمودي" },
                    
                    // تفضيلات المستخدم
                    { value: "@media (prefers-color-scheme: dark) { ... }", description: "أنماط للوضع الداكن حسب تفضيل النظام" },
                    { value: "@media (prefers-color-scheme: light) { ... }", description: "أنماط للوضع الفاتح" },
                    { value: "@media (prefers-reduced-motion: reduce) { ... }", description: "أنماط للمستخدمين الذين يفضلون تقليل الحركة" },
                    { value: "@media (prefers-reduced-transparency: reduce) { ... }", description: "أنماط للمستخدمين الذين يفضلون تقليل الشفافية" },
                    { value: "@media (prefers-contrast: high) { ... }", description: "أنماط للمستخدمين الذين يحتاجون تبايناً عالياً" },
                    { value: "@media (prefers-contrast: low) { ... }", description: "أنماط للتباين المنخفض" },
                    
                    // دقة الشاشة
                    { value: "@media (min-resolution: 2dppx) { ... }", description: "أنماط للشاشات عالية الدقة (Retina)" },
                    { value: "@media (min-resolution: 300dpi) { ... }", description: "أنماط للشاشات بدقة 300 نقطة في البوصة" },
                    { value: "@media (max-resolution: 1dppx) { ... }", description: "أنماط للشاشات ذات الدقة القياسية" },
                    
                    // نوع الجهاز
                    { value: "@media print { ... }", description: "أنماط خاصة بالطباعة فقط" },
                    { value: "@media screen { ... }", description: "أنماط خاصة بالشاشات فقط" },
                    { value: "@media speech { ... }", description: "أنماط خاصة بقارئات النص" },
                    { value: "@media all { ... }", description: "أنماط لجميع الأجهزة (افتراضي)" },
                    
                    // قدرات الجهاز
                    { value: "@media (hover: hover) { ... }", description: "أنماط للأجهزة التي تدعم التمرير (مثل الماوس)" },
                    { value: "@media (hover: none) { ... }", description: "أنماط للأجهزة التي لا تدعم التمرير (مثل الجوال)" },
                    { value: "@media (pointer: fine) { ... }", description: "أنماط لأجهزة التأشير الدقيقة (مثل الماوس)" },
                    { value: "@media (pointer: coarse) { ... }", description: "أنماط لأجهزة التأشير الخشنة (مثل اللمس)" },
                    { value: "@media (any-pointer: fine) { ... }", description: "أنماط إذا كان أي جهاز تأشير دقيق متوفراً" },
                    { value: "@media (any-pointer: coarse) { ... }", description: "أنماط إذا كان أي جهاز تأشير خشن متوفراً" },
                    
                    // خصائص أخرى
                    { value: "@media (display-mode: fullscreen) { ... }", description: "أنماط في وضع ملء الشاشة" },
                    { value: "@media (display-mode: standalone) { ... }", description: "أنماط في وضع PWA المستقل" },
                    { value: "@media (display-mode: minimal-ui) { ... }", description: "أنماط في وضع الواجهة المصغرة" },
                    { value: "@media (dynamic-range: high) { ... }", description: "أنماط للشاشات عالية الديناميكية (HDR)" },
                    { value: "@media (dynamic-range: standard) { ... }", description: "أنماط للشاشات القياسية (SDR)" },
                    
                    // الجمع بين الشروط
                    { value: "@media (min-width: 768px) and (max-width: 1024px) { ... }", description: "أنماط للشاشات المتوسطة (بين 768 و 1024)" },
                    { value: "@media (orientation: landscape) and (min-height: 500px) { ... }", description: "أنماط لأفقي بارتفاع كافٍ" },
                    { value: "@media (prefers-color-scheme: dark) and (min-width: 768px) { ... }", description: "أنماط للوضع الداكن على الشاشات الكبيرة" },
                    { value: "@media screen and (max-width: 480px), print and (max-width: 480px) { ... }", description: "أنماط للشاشات الصغيرة أو الطباعة" },
                    { value: "@media (not (max-width: 768px)) { ... }", description: "أنماط للشاشات الأكبر من 768px" },
                    { value: "@media (min-width: 768px) and (not (prefers-color-scheme: dark)) { ... }", description: "شاشات كبيرة مع وضع فاتح" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. قواعد الدعم (@supports)
    // ============================================================
    {
        tag: "supports-rules",
        description: "قواعد @supports لتطبيق الأنماط بناءً على دعم المتصفح لخصائص CSS معينة، مفيدة للتحسين التدريجي (Progressive Enhancement)",
        properties: [
            {
                name: "@supports",
                description: "تطبق الأنماط فقط إذا كان المتصفح يدعم خاصية CSS معينة (أو مجموعة من الخصائص)",
                values: [
                    { value: "@supports (display: grid) { ... }", description: "أنماط إذا كان المتصفح يدعم CSS Grid" },
                    { value: "@supports (display: flex) { ... }", description: "أنماط إذا كان المتصفح يدعم Flexbox" },
                    { value: "@supports (backdrop-filter: blur(10px)) { ... }", description: "أنماط إذا كان المتصفح يدعم backdrop-filter" },
                    { value: "@supports (scroll-behavior: smooth) { ... }", description: "أنماط إذا كان المتصفح يدعم التمرير السلس" },
                    { value: "@supports (color: oklch(0.5 0.2 0.1)) { ... }", description: "أنماط إذا كان المتصفح يدعم oklch" },
                    { value: "@supports (container: inline-size) { ... }", description: "أنماط إذا كان المتصفح يدعم Container Queries" },
                    { value: "@supports (aspect-ratio: 16/9) { ... }", description: "أنماط إذا كان المتصفح يدعم aspect-ratio" },
                    { value: "@supports not (display: grid) { ... }", description: "أنماط بديلة للمتصفحات التي لا تدعم Grid" },
                    { value: "@supports (display: flex) and (gap: 20px) { ... }", description: "أنماط إذا كان يدعم Flexbox و gap معاً" },
                    { value: "@supports (display: flex) or (display: grid) { ... }", description: "أنماط إذا كان يدعم Flexbox أو Grid" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. قواعد الحاويات (Container Queries)
    // ============================================================
    {
        tag: "container-rules",
        description: "قواعد @container لتطبيق الأنماط بناءً على حجم عنصر حاوٍ محدد بدلاً من حجم الشاشة، مما يسمح بتصميم مكونات متجاوبة تعتمد على حجم الحاوية الخاصة بها",
        properties: [
            {
                name: "@container",
                description: "تطبق الأنماط بناءً على حجم عنصر حاوٍ محدد (container) بدلاً من حجم الشاشة بأكملها",
                values: [
                    { value: "@container (min-width: 400px) { ... }", description: "أنماط عندما يكون عرض الحاوية 400px فأكثر" },
                    { value: "@container (max-width: 400px) { ... }", description: "أنماط عندما يكون عرض الحاوية 400px فأقل" },
                    { value: "@container (min-height: 300px) { ... }", description: "أنماط عندما يكون ارتفاع الحاوية 300px فأكثر" },
                    { value: "@container (width > 400px) { ... }", description: "أنماط عندما يكون عرض الحاوية أكبر من 400px" },
                    { value: "@container (width < 600px) { ... }", description: "أنماط عندما يكون عرض الحاوية أقل من 600px" },
                    { value: "@container (inline-size >= 500px) { ... }", description: "أنماط عندما يكون الحجم الخطي للحاوية 500px فأكثر" },
                    { value: "@container sidebar (min-width: 300px) { ... }", description: "أنماط لحاوية باسم sidebar" },
                    { value: "@container not (width > 400px) { ... }", description: "أنماط عندما يكون العرض ليس أكبر من 400px" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. قواعد الحركة (@keyframes)
    // ============================================================
    {
        tag: "keyframes-rules",
        description: "قواعد @keyframes لتعريف مراحل الحركة في CSS Animations، تحدد التغييرات في الخصائص عبر الزمن",
        properties: [
            {
                name: "@keyframes",
                description: "تُعرّف مراحل حركة (animation) يمكن استدعاؤها لاحقاً باستخدام animation-name",
                values: [
                    { value: "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }", description: "حركة تلاشي من شفاف إلى معتم" },
                    { value: "@keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }", description: "حركة انزلاق من اليسار" },
                    { value: "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }", description: "حركة نبض" },
                    { value: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }", description: "حركة دوران كامل" },
                    { value: "@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }", description: "حركة ارتداد" },
                    { value: "@keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } }", description: "حركة اهتزاز" },
                    { value: "@keyframes colorCycle { 0% { color: red; } 33% { color: green; } 66% { color: blue; } 100% { color: red; } }", description: "حركة تغيير لون دوري" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. قواعد الخطوط (@font-face)
    // ============================================================
    {
        tag: "font-face-rules",
        description: "قواعد @font-face لتعريف واستخدام خطوط مخصصة غير مثبتة على جهاز المستخدم",
        properties: [
            {
                name: "@font-face",
                description: "يُعرّف خطاً مخصصاً يمكن تحميله من ملف وربطه باسم لاستخدامه في font-family",
                values: [
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'); }", description: "تعريف خط من ملف woff2" },
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'), url('font.woff') format('woff'); font-weight: bold; }", description: "تعريف خط بصيغ متعددة ووزن محدد" },
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'); font-style: italic; }", description: "تعريف خط مائل" },
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'); font-display: swap; }", description: "تعريف خط مع font-display: swap لمنع FOIT" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. قواعد الصفحات (@page)
    // ============================================================
    {
        tag: "page-rules",
        description: "قواعد @page لتخصيص أبعاد وهوامش الصفحة المطبوعة، وتدعم محددات لصفحات محددة (الأولى، اليمنى، اليسرى)",
        properties: [
            {
                name: "@page",
                description: "تُستخدم لتخصيص خصائص الصفحة المطبوعة مثل الحجم والهوامش",
                values: [
                    { value: "@page { size: A4; margin: 2cm; }", description: "حجم A4 مع هامش 2 سم" },
                    { value: "@page { size: A5; margin: 1.5cm; }", description: "حجم A5" },
                    { value: "@page { size: letter; margin: 1in; }", description: "حجم Letter" },
                    { value: "@page { size: A4 landscape; }", description: "حجم A4 مع اتجاه أفقي" },
                    { value: "@page :first { margin-top: 5cm; }", description: "هامش خاص للصفحة الأولى" },
                    { value: "@page :left { margin-left: 3cm; margin-right: 2cm; }", description: "صفحات يسرى" },
                    { value: "@page :right { margin-left: 2cm; margin-right: 3cm; }", description: "صفحات يمنى" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. قواعد الاستيراد (@import)
    // ============================================================
    {
        tag: "import-rules",
        description: "قواعد @import لاستيراد ملفات CSS خارجية داخل ملف الأنماط الحالي، يُفضل عادة استخدام <link> بدلاً منها لأسباب أداء",
        properties: [
            {
                name: "@import",
                description: "يستورد ملف CSS خارجي آخر داخل ملف الأنماط الحالي (يفضل استخدام <link> بدلاً منه)",
                values: [
                    { value: "@import url('theme.css');", description: "استيراد ملف أنماط آخر" },
                    { value: "@import url('print.css') print;", description: "استيراد ملف أنماط خاص بالطباعة فقط" },
                    { value: "@import url('mobile.css') (max-width: 768px);", description: "استيراد ملف خاص بالجوال" },
                    { value: "@import 'style.css';", description: "استيراد بدون url()" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. قواعد الطبقات (@layer)
    // ============================================================
    {
        tag: "layer-rules",
        description: "قواعد @layer لتنظيم أولوية الأنماط في CSS (Cascade Layers)، تسمح بتحديد ترتيب تطبيق الأنماط بدقة",
        properties: [
            {
                name: "@layer",
                description: "تحدد طبقة من الأنماط (Cascade Layer) لتحديد أولوية التطبيق، الأنماط في الطبقات اللاحقة تتجاوز الطبقات السابقة",
                values: [
                    { value: "@layer reset { * { margin: 0; padding: 0; } }", description: "طبقة إعادة تعيين" },
                    { value: "@layer components { .btn { padding: 8px 16px; } }", description: "طبقة المكونات" },
                    { value: "@layer utilities { .text-center { text-align: center; } }", description: "طبقة الأدوات المساعدة" },
                    { value: "@import url('reset.css') layer(reset);", description: "استيراد ملف في طبقة reset" },
                    { value: "@layer reset, components, utilities;", description: "تحديد ترتيب الطبقات (reset ثم components ثم utilities)" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. قواعد أخرى
    // ============================================================
    {
        tag: "other-at-rules",
        description: "قواعد @ أخرى أقل استخداماً",
        properties: [
            {
                name: "@charset",
                description: "تحدد ترميز الأحرف لملف CSS، يجب أن تكون في بداية الملف قبل أي شيء آخر",
                values: [
                    { value: "@charset \"UTF-8\";", description: "ترميز UTF-8" }
                ]
            },
            {
                name: "@namespace",
                description: "تحدد مساحة اسم (namespace) لمحددات CSS، تستخدم مع SVG و XML",
                values: [
                    { value: "@namespace svg url('http://www.w3.org/2000/svg');", description: "مساحة اسم SVG" },
                    { value: "@namespace \"http://www.w3.org/1999/xhtml\";", description: "مساحة اسم XHTML" }
                ]
            },
            {
                name: "@property",
                description: "تُعرّف متغيراً مخصصاً (Custom Property) بنوع بيانات محدد وقيمة أولية، مما يتيح دمجه مع الانتقالات والرسوم المتحركة",
                values: [
                    { value: "@property --primary-color { syntax: '<color>'; inherits: true; initial-value: #007bff; }", description: "تعريف متغير لون" },
                    { value: "@property --spacing { syntax: '<length>'; inherits: false; initial-value: 8px; }", description: "تعريف متغير طول" }
                ]
            },
            {
                name: "@scope",
                description: "تحدد نطاقاً (Scope) للمحددات، يسمح بتقييد الأنماط على جزء معين من DOM وتسهيل إدارة التعارضات",
                values: [
                    { value: "@scope (.card) { .title { font-size: 1.5rem; } }", description: "أنماط لعناوين البطاقة فقط" },
                    { value: "@scope (.container) to (.content) { p { color: blue; } }", description: "أنماط بين الحاوية والمحتوى" }
                ]
            },
            {
                name: "@starting-style",
                description: "تحدد الأنماط الأولية للعنصر قبل بدء الانتقال أو الرسوم المتحركة، مفيدة لانتقالات الدخول (entry transitions)",
                values: [
                    { value: "@starting-style { opacity: 0; transform: scale(0.8); }", description: "أنماط بداية للظهور" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. أمثلة عملية
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية لاستخدام قواعد @ في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - تصميم متجاوب كامل",
                description: "استخدام @media لتصميم متجاوب مع الوضع الداكن",
                values: [
                    { value: "@media (max-width: 768px) { .container { padding: 16px; } .grid { grid-template-columns: 1fr; } } @media (prefers-color-scheme: dark) { body { background: #1a1a2e; color: #eaeaea; } }", description: "تصميم متجاوب مع دعم الوضع الداكن" }
                ]
            },
            {
                name: "مثال 2 - دعم المتصفحات المتقدم",
                description: "استخدام @supports لتوفير أنماط بديلة",
                values: [
                    { value: "@supports (display: grid) { .grid { display: grid; } } @supports not (display: grid) { .grid { display: flex; flex-wrap: wrap; } }", description: "أنماط بديلة للمتصفحات التي لا تدعم Grid" }
                ]
            },
            {
                name: "مثال 3 - Container Queries",
                description: "استخدام @container لتصميم مكونات متجاوبة",
                values: [
                    { value: ".card-container { container-type: inline-size; } @container (min-width: 500px) { .card { display: grid; grid-template-columns: 1fr 2fr; } }", description: "بطاقة تتغير تخطيطها حسب عرض الحاوية" }
                ]
            },
            {
                name: "مثال 4 - طبقات CSS",
                description: "استخدام @layer لتنظيم الأنماط",
                values: [
                    { value: "@layer reset { * { margin: 0; padding: 0; box-sizing: border-box; } } @layer base { body { font-family: sans-serif; } } @layer components { .btn { padding: 8px 16px; border-radius: 4px; } } @layer utilities { .text-center { text-align: center; } }", description: "تنظيم الأنماط في طبقات" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام قواعد @ بشكل فعال",
        properties: [
            {
                name: "نصائح التصميم المتجاوب",
                description: "نصائح لاستخدام @media",
                values: [
                    { value: "استخدم max-width للجوال أولاً (Mobile First)", description: "صمم للجوال أولاً ثم أضف تحسينات للشاشات الأكبر" },
                    { value: "استخدم وحدات نسبية", description: "rem, %, vw أفضل من px في الاستعلامات" },
                    { value: "اختبر على أجهزة حقيقية", description: "لا تعتمد فقط على أدوات المحاكاة" }
                ]
            },
            {
                name: "نصائح التحسين التدريجي",
                description: "نصائح لاستخدام @supports",
                values: [
                    { value: "استخدم @supports للخصائص الجديدة", description: "للحفاظ على التوافق مع المتصفحات القديمة" },
                    { value: "قدم بدائل متينة", description: "تأكد من أن البدائل تعمل بشكل جيد" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام قواعد @",
                values: [
                    { value: "نسيان الأقواس في @media", description: "@media (max-width: 768px) { ... }" },
                    { value: "وضع @import بعد أنماط أخرى", description: "@import يجب أن يكون في بداية الملف" },
                    { value: "نسيان @keyframes مع animation-name", description: "@keyframes يجب أن يُعرف قبل استخدامه" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssAtRulesData = cssAtRulesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssAtRulesData;
}