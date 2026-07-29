// ============================================================
// custom-properties.js
// المتغيرات المخصصة (Custom Properties) في CSS
// تتيح تعريف قيم قابلة لإعادة الاستخدام وتحديثها بسهولة، مع دعم الميراث والتجاوز
// ============================================================

const customPropertiesData = [
    // ============================================================
    // 1. تعريف المتغيرات المخصصة (--*)
    // ============================================================
    {
        tag: "custom-properties",
        description: "المتغيرات المخصصة (المعروفة أيضاً بـ CSS Variables) تبدأ بـ -- وتستخدم مع var()، تسمح بتخزين قيم CSS وإعادة استخدامها",
        properties: [
            // -------- المتغيرات الأساسية --------
            {
                name: "--*",
                description: "أي اسم متغير مخصص يبدأ بشرطتين (--)، يمكن تخزين أي قيمة CSS فيه من ألوان، أحجام، خطوط، وغيرها",
                values: [
                    // ألوان
                    { value: "--primary-color: #007bff", description: "متغير لون أساسي - أزرق Bootstrap" },
                    { value: "--secondary-color: #6c757d", description: "متغير لون ثانوي - رمادي" },
                    { value: "--success-color: #28a745", description: "متغير لون نجاح - أخضر" },
                    { value: "--danger-color: #dc3545", description: "متغير لون خطر - أحمر" },
                    { value: "--warning-color: #ffc107", description: "متغير لون تحذير - أصفر" },
                    { value: "--info-color: #17a2b8", description: "متغير لون معلومات - أزرق فيروزي" },
                    { value: "--light-color: #f8f9fa", description: "متغير لون فاتح" },
                    { value: "--dark-color: #343a40", description: "متغير لون غامق" },
                    { value: "--text-color: #333333", description: "متغير لون النص الرئيسي" },
                    { value: "--bg-color: #ffffff", description: "متغير لون الخلفية الرئيسي" },
                    { value: "--link-color: #0066cc", description: "متغير لون الروابط" },
                    
                    // الأحجام والمسافات
                    { value: "--font-size-base: 16px", description: "متغير حجم الخط الأساسي" },
                    { value: "--font-size-small: 0.875rem", description: "متغير حجم الخط الصغير" },
                    { value: "--font-size-large: 1.25rem", description: "متغير حجم الخط الكبير" },
                    { value: "--font-size-h1: 2.5rem", description: "متغير حجم عنوان h1" },
                    { value: "--font-size-h2: 2rem", description: "متغير حجم عنوان h2" },
                    { value: "--font-size-h3: 1.75rem", description: "متغير حجم عنوان h3" },
                    { value: "--font-size-h4: 1.5rem", description: "متغير حجم عنوان h4" },
                    { value: "--font-size-h5: 1.25rem", description: "متغير حجم عنوان h5" },
                    { value: "--font-size-h6: 1rem", description: "متغير حجم عنوان h6" },
                    { value: "--spacing-unit: 8px", description: "متغير وحدة المسافات الأساسية" },
                    { value: "--spacing-xs: 4px", description: "متغير مسافة صغيرة جداً" },
                    { value: "--spacing-sm: 8px", description: "متغير مسافة صغيرة" },
                    { value: "--spacing-md: 16px", description: "متغير مسافة متوسطة" },
                    { value: "--spacing-lg: 24px", description: "متغير مسافة كبيرة" },
                    { value: "--spacing-xl: 32px", description: "متغير مسافة كبيرة جداً" },
                    { value: "--spacing-xxl: 48px", description: "متغير مسافة كبيرة جداً" },
                    
                    // الحواف والظلال
                    { value: "--border-radius-sm: 4px", description: "متغير انحناء صغير" },
                    { value: "--border-radius-md: 8px", description: "متغير انحناء متوسط" },
                    { value: "--border-radius-lg: 12px", description: "متغير انحناء كبير" },
                    { value: "--border-radius-xl: 20px", description: "متغير انحناء كبير جداً" },
                    { value: "--border-radius-full: 50%", description: "متغير انحناء كامل (دائري)" },
                    { value: "--shadow-sm: 0 2px 4px rgba(0,0,0,0.05)", description: "متغير ظل صغير" },
                    { value: "--shadow-md: 0 4px 12px rgba(0,0,0,0.1)", description: "متغير ظل متوسط" },
                    { value: "--shadow-lg: 0 8px 24px rgba(0,0,0,0.15)", description: "متغير ظل كبير" },
                    { value: "--shadow-xl: 0 16px 48px rgba(0,0,0,0.2)", description: "متغير ظل كبير جداً" },
                    
                    // الخطوط
                    { value: "--font-family-sans: 'Segoe UI', system-ui, -apple-system, sans-serif", description: "متغير خط sans-serif" },
                    { value: "--font-family-serif: 'Georgia', 'Times New Roman', serif", description: "متغير خط serif" },
                    { value: "--font-family-mono: 'Consolas', 'Courier New', monospace", description: "متغير خط أحادي التباعد" },
                    { value: "--font-family-arabic: 'Noto Naskh Arabic', 'Scheherazade', serif", description: "متغير خط عربي" },
                    { value: "--font-family-english: 'Inter', 'Roboto', sans-serif", description: "متغير خط إنجليزي" },
                    { value: "--font-weight-light: 300", description: "متغير وزن خط خفيف" },
                    { value: "--font-weight-normal: 400", description: "متغير وزن خط عادي" },
                    { value: "--font-weight-medium: 500", description: "متغير وزن خط متوسط" },
                    { value: "--font-weight-semibold: 600", description: "متغير وزن خط شبه غامق" },
                    { value: "--font-weight-bold: 700", description: "متغير وزن خط غامق" },
                    { value: "--font-weight-extrabold: 800", description: "متغير وزن خط غامق جداً" },
                    
                    // النقاط الفاصلة (Breakpoints)
                    { value: "--breakpoint-xs: 0px", description: "متغير نقطة توقف صغيرة جداً" },
                    { value: "--breakpoint-sm: 576px", description: "متغير نقطة توقف صغيرة (جوال)" },
                    { value: "--breakpoint-md: 768px", description: "متغير نقطة توقف متوسطة (تابلت)" },
                    { value: "--breakpoint-lg: 992px", description: "متغير نقطة توقف كبيرة (كمبيوتر)" },
                    { value: "--breakpoint-xl: 1200px", description: "متغير نقطة توقف كبيرة جداً" },
                    { value: "--breakpoint-xxl: 1400px", description: "متغير نقطة توقف كبيرة جداً" },
                    
                    // الانتقالات
                    { value: "--transition-fast: 0.15s", description: "متغير سرعة انتقال سريع" },
                    { value: "--transition-normal: 0.3s", description: "متغير سرعة انتقال عادي" },
                    { value: "--transition-slow: 0.5s", description: "متغير سرعة انتقال بطيء" },
                    { value: "--transition-very-slow: 0.8s", description: "متغير سرعة انتقال بطيء جداً" },
                    { value: "--transition-ease: ease-in-out", description: "متغير دالة انتقال" },
                    
                    // ترتيب الطبقات (z-index)
                    { value: "--z-index-dropdown: 1000", description: "متغير ترتيب القوائم المنسدلة" },
                    { value: "--z-index-sticky: 1020", description: "متغير ترتيب العناصر الثابتة" },
                    { value: "--z-index-modal: 1050", description: "متغير ترتيب النوافذ المنبثقة" },
                    { value: "--z-index-tooltip: 1070", description: "متغير ترتيب التلميحات" },
                    { value: "--z-index-popover: 1080", description: "متغير ترتيب النوافذ الصغيرة" },
                    { value: "--z-index-toast: 1090", description: "متغير ترتيب الإشعارات" },
                    { value: "--z-index-overlay: 1100", description: "متغير ترتيب الطبقات العلوية" },
                    
                    // أبعاد ثابتة
                    { value: "--header-height: 60px", description: "متغير ارتفاع الرأس" },
                    { value: "--footer-height: 80px", description: "متغير ارتفاع التذييل" },
                    { value: "--sidebar-width: 280px", description: "متغير عرض الشريط الجانبي" },
                    { value: "--container-width: 1200px", description: "متغير عرض الحاوية" },
                    { value: "--content-max-width: 800px", description: "متغير أقصى عرض للمحتوى" },
                    
                    // ألوان الوضع الداكن
                    { value: "--dark-bg: #1a1a2e", description: "متغير خلفية داكنة" },
                    { value: "--dark-surface: #16213e", description: "متغير سطح داكن" },
                    { value: "--dark-text: #eaeaea", description: "متغير نص داكن" },
                    { value: "--dark-border: #2a2a4a", description: "متغير حافة داكنة" },
                    
                    // ألوان الوضع الفاتح
                    { value: "--light-bg: #ffffff", description: "متغير خلفية فاتحة" },
                    { value: "--light-surface: #f8f9fa", description: "متغير سطح فاتح" },
                    { value: "--light-text: #212529", description: "متغير نص فاتح" },
                    { value: "--light-border: #dee2e6", description: "متغير حافة فاتحة" },
                    
                    // قيم متنوعة
                    { value: "--opacity-disabled: 0.65", description: "متغير شفافية العناصر المعطلة" },
                    { value: "--opacity-hover: 0.8", description: "متغير شفافية عند التمرير" },
                    { value: "--gap-columns: 20px", description: "متغير الفجوة بين الأعمدة" },
                    { value: "--gap-rows: 16px", description: "متغير الفجوة بين الصفوف" },
                    { value: "--border-width-default: 1px", description: "متغير سمك الحافة الافتراضي" }
                ],
                freeInput: true,
                isCustomProperty: true
            }
        ]
    },

    // ============================================================
    // 2. دالة var()
    // ============================================================
    {
        tag: "var-function",
        description: "دالة تستدعي قيمة متغير مخصص، يمكن استخدامها في أي خاصية CSS، وتدعم قيماً احتياطية",
        properties: [
            {
                name: "var()",
                description: "دالة تستدعي قيمة متغير مخصص، يمكن استخدامها في أي خاصية CSS مع دعم القيم الاحتياطية",
                values: [
                    // استخدام أساسي
                    { value: "color: var(--primary-color)", description: "يستخدم قيمة المتغير --primary-color كلون للنص" },
                    { value: "background-color: var(--bg-color)", description: "يستخدم قيمة المتغير --bg-color كلون خلفية" },
                    { value: "font-size: var(--font-size-base)", description: "يستخدم قيمة المتغير --font-size-base كحجم خط" },
                    { value: "margin: var(--spacing-md)", description: "يستخدم قيمة المتغير --spacing-md كهامش" },
                    { value: "border-radius: var(--border-radius-md)", description: "يستخدم قيمة المتغير --border-radius-md" },
                    { value: "box-shadow: var(--shadow-md)", description: "يستخدم قيمة المتغير --shadow-md كظل" },
                    { value: "padding: var(--spacing-lg) var(--spacing-md)", description: "يستخدم متغيرين في نفس القيمة" },
                    
                    // مع قيم احتياطية
                    { value: "color: var(--primary-color, #007bff)", description: "يستخدم المتغير، وإن لم يُعرف يستخدم #007bff" },
                    { value: "font-size: var(--font-size-base, 16px)", description: "يستخدم المتغير، وإن لم يُعرف يستخدم 16px" },
                    { value: "margin: var(--spacing-unit, 8px)", description: "يستخدم المتغير، وإن لم يُعرف يستخدم 8px" },
                    { value: "box-shadow: var(--shadow, none)", description: "يستخدم المتغير، وإن لم يُعرف يستخدم none" },
                    { value: "z-index: var(--z-index-dropdown, 100)", description: "يستخدم المتغير، وإن لم يُعرف يستخدم 100" },
                    { value: "font-family: var(--font-family-sans, 'Arial', sans-serif)", description: "يستخدم المتغير، وإن لم يُعرف يستخدم Arial" },
                    
                    // احتياطي متداخل
                    { value: "color: var(--primary-color, var(--secondary-color, blue))", description: "يحاول المتغير الأول، ثم الثاني، ثم القيمة الافتراضية" },
                    { value: "font-size: var(--font-size-large, var(--font-size-base, 16px))", description: "احتياطي متداخل مع متغيرين" },
                    { value: "margin: var(--spacing-xl, var(--spacing-lg, 20px))", description: "احتياطي متداخل ثلاثي المستويات" },
                    
                    // استخدام مع calc()
                    { value: "width: calc(100% - var(--sidebar-width, 280px))", description: "يحسب قيمة باستخدام المتغير" },
                    { value: "margin: calc(var(--spacing-unit) * 2)", description: "يحسب ضعف قيمة المتغير" },
                    { value: "padding: calc(var(--spacing-md) + var(--spacing-sm))", description: "يجمع متغيرين" },
                    { value: "font-size: calc(var(--font-size-base) * 1.25)", description: "يكبر الخط باستخدام عملية حسابية" },
                    
                    // استخدام مع clamp()
                    { value: "font-size: clamp(14px, var(--font-size-base), 24px)", description: "يحدد نطاقاً للقيمة مع المتغير" },
                    { value: "width: clamp(200px, var(--container-width, 800px), 100%)", description: "يحدد نطاقاً للعرض" },
                    
                    // استخدام مع max() و min()
                    { value: "width: min(100%, var(--container-width, 800px))", description: "يختار القيمة الأصغر" },
                    { value: "width: max(200px, var(--sidebar-width, 280px))", description: "يختار القيمة الأكبر" },
                    
                    // استخدامات متقدمة
                    { value: "transition: all var(--transition-normal) var(--transition-ease)", description: "يستخدم متغيرين في الانتقال" },
                    { value: "gap: var(--gap-columns, 20px) var(--gap-rows, 16px)", description: "يستخدم متغيرين للفجوات" },
                    { value: "background: linear-gradient(var(--gradient-start, #fff), var(--gradient-end, #000))", description: "يستخدم متغيرين للتدرج" },
                    { value: "border: var(--border-width-default, 1px) solid var(--border-color, #ccc)", description: "يستخدم متغيرين للحدود" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. قاعدة @property
    // ============================================================
    {
        tag: "at-property",
        description: "قاعدة @property تسمح بتعريف متغير مخصص بنوع بيانات محدد (مثل رقم أو لون) وقيمة أولية، وتحديد هل يرث القيمة من الأب أم لا، مما يتيح دمجه بسلاسة مع الحركات والانتقالات",
        properties: [
            {
                name: "@property (ملاحظة)",
                description: "قاعدة @property تسمح بتعريف متغير مخصص بنوع بيانات محدد، مما يمكن المتصفح من التعامل معه بشكل أفضل في الانتقالات والحركات",
                values: [
                    // أنواع البيانات (syntax)
                    { value: "syntax: '<color>'", description: "يحدد أن المتغير من نوع لون - يمكن استخدامه مع transition" },
                    { value: "syntax: '<length>'", description: "يحدد أن المتغير من نوع طول (px, em, rem, %)" },
                    { value: "syntax: '<number>'", description: "يحدد أن المتغير من نوع رقم" },
                    { value: "syntax: '<percentage>'", description: "يحدد أن المتغير من نوع نسبة مئوية" },
                    { value: "syntax: '<length-percentage>'", description: "يحدد أن المتغير من نوع طول أو نسبة مئوية" },
                    { value: "syntax: '<angle>'", description: "يحدد أن المتغير من نوع زاوية (deg, rad)" },
                    { value: "syntax: '<time>'", description: "يحدد أن المتغير من نوع وقت (s, ms)" },
                    { value: "syntax: '<integer>'", description: "يحدد أن المتغير من نوع عدد صحيح" },
                    { value: "syntax: '<url>'", description: "يحدد أن المتغير من نوع رابط" },
                    { value: "syntax: '<custom-ident>'", description: "يحدد أن المتغير من نوع معرف مخصص" },
                    { value: "syntax: '* | <color> | <length> | <number> | <percentage> | <length-percentage> | <angle> | <time> | <integer> | <url> | <custom-ident>'", description: "كل الأنواع المدعومة" },
                    
                    // الوراثة (inherits)
                    { value: "inherits: true", description: "يرث القيمة من العنصر الأب - السلوك الافتراضي للمتغيرات" },
                    { value: "inherits: false", description: "لا يرث القيمة من العنصر الأب - يحافظ على قيمته المستقلة" },
                    
                    // القيمة الأولية (initial-value)
                    { value: "initial-value: #000000", description: "القيمة الابتدائية إذا لم تُحدد قيمة للمتغير" },
                    { value: "initial-value: 16px", description: "قيمة أولية 16 بكسل" },
                    { value: "initial-value: 0", description: "قيمة أولية 0" },
                    { value: "initial-value: 100%", description: "قيمة أولية 100%" },
                    { value: "initial-value: 0deg", description: "قيمة أولية 0 درجة" },
                    { value: "initial-value: 0s", description: "قيمة أولية 0 ثانية" },
                    
                    // أمثلة كاملة
                    { value: "@property --primary-color { syntax: '<color>'; inherits: true; initial-value: #007bff; }", description: "تعريف متغير لون مع وراثة وقيمة أولية" },
                    { value: "@property --spacing-unit { syntax: '<length>'; inherits: false; initial-value: 8px; }", description: "تعريف متغير طول بدون وراثة" },
                    { value: "@property --animation-speed { syntax: '<time>'; inherits: true; initial-value: 0.3s; }", description: "تعريف متغير وقت مع وراثة" },
                    { value: "@property --opacity-level { syntax: '<number>'; inherits: false; initial-value: 1; }", description: "تعريف متغير رقم بدون وراثة" },
                    { value: "@property --rotation { syntax: '<angle>'; inherits: true; initial-value: 0deg; }", description: "تعريف متغير زاوية مع وراثة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. الوراثة والنطاق
    // ============================================================
    {
        tag: "scope-inheritance",
        description: "المتغيرات المخصصة تُعرَّف عادة على :root لتكون متاحة عالمياً في كل الصفحة، لكن يمكن إعادة تعريفها داخل أي محدد (selector) لتغيير قيمتها في نطاق ذلك العنصر وأبنائه فقط",
        properties: [
            {
                name: "النطاق والوراثة",
                description: "المتغيرات تتبع قواعد الوراثة في CSS: يمكن تعريفها في أي عنصر وتورث للأبناء، ويمكن تجاوزها في أي مستوى",
                values: [
                    // التعريف العام
                    { value: ":root { --primary-color: #007bff; --font-size: 16px; --spacing: 8px; }", description: "تعريف عام على مستوى الصفحة - متاح في كل العناصر" },
                    { value: ":root { --theme: 'light'; }", description: "تعريف متغير موضوع عام" },
                    { value: ":root { --brand-color: #ff6b6b; --brand-font: 'Poppins', sans-serif; }", description: "تعريف متغيرات العلامة التجارية" },
                    
                    // التعريف في عناصر محددة
                    { value: ".dark-theme { --primary-color: #ffffff; --bg-color: #1a1a2e; }", description: "إعادة تعريف داخل نطاق dark-theme فقط" },
                    { value: ".light-theme { --primary-color: #000000; --bg-color: #ffffff; }", description: "إعادة تعريف داخل نطاق light-theme" },
                    { value: ".header { --spacing: 16px; --font-size: 18px; }", description: "تعريف متغيرات خاصة بالرأس" },
                    { value: ".footer { --spacing: 8px; --font-size: 14px; }", description: "تعريف متغيرات خاصة بالتذييل" },
                    { value: ".sidebar { --width: 280px; --bg-color: #f8f9fa; }", description: "تعريف متغيرات خاصة بالشريط الجانبي" },
                    { value: ".container { --max-width: 1200px; --padding: 20px; }", description: "تعريف متغيرات خاصة بالحاوية" },
                    
                    // التعريف في وسائط الاستعلام
                    { value: "@media (min-width: 768px) { :root { --font-size: 18px; --spacing: 12px; } }", description: "تغيير قيم المتغيرات في الشاشات المتوسطة" },
                    { value: "@media (max-width: 576px) { :root { --font-size: 14px; --spacing: 6px; } }", description: "تغيير قيم المتغيرات في الشاشات الصغيرة" },
                    { value: "@media (prefers-color-scheme: dark) { :root { --bg-color: #1a1a2e; --text-color: #eaeaea; } }", description: "تغيير قيم المتغيرات في الوضع الداكن" },
                    { value: "@media (prefers-color-scheme: light) { :root { --bg-color: #ffffff; --text-color: #212529; } }", description: "تغيير قيم المتغيرات في الوضع الفاتح" },
                    
                    // التعريف في عناصر معينة
                    { value: "[data-theme='dark'] { --primary-color: #64b5f6; --secondary-color: #90a4ae; }", description: "تعريف متغيرات في عنصر يحمل data-theme='dark'" },
                    { value: "[data-theme='light'] { --primary-color: #1976d2; --secondary-color: #78909c; }", description: "تعريف متغيرات في عنصر يحمل data-theme='light'" },
                    
                    // تجاوز المتغيرات في العناصر الفرعية
                    { value: ".parent { --color: red; } .parent .child { --color: blue; }", description: "تجاوز قيمة المتغير في العنصر الفرعي" },
                    { value: ".container { --padding: 20px; } .container .inner { --padding: 10px; }", description: "تجاوز متغير padding في العنصر الداخلي" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. المتغيرات في وسائط الاستعلام (Media Queries)
    // ============================================================
    {
        tag: "media-queries",
        description: "يمكن استخدام المتغيرات المخصصة داخل وسائط الاستعلام، لكنها لا تدعم التغيير المباشر، يجب إعادة تعريفها على :root داخل الوسائط",
        properties: [
            {
                name: "استخدام المتغيرات في Media Queries",
                description: "يمكن إعادة تعريف المتغيرات داخل وسائط الاستعلام لتغيير التصميم حسب حجم الشاشة",
                values: [
                    { value: "@media (min-width: 768px) { :root { --font-size: 18px; --container-width: 720px; } }", description: "تغيير حجم الخط وعرض الحاوية للشاشات المتوسطة" },
                    { value: "@media (min-width: 992px) { :root { --font-size: 20px; --container-width: 960px; } }", description: "تغيير المتغيرات للشاشات الكبيرة" },
                    { value: "@media (min-width: 1200px) { :root { --font-size: 22px; --container-width: 1140px; --spacing-unit: 12px; } }", description: "تغيير المتغيرات للشاشات الكبيرة جداً" },
                    { value: "@media (max-width: 576px) { :root { --font-size: 14px; --spacing-unit: 4px; --header-height: 50px; } }", description: "تغيير المتغيرات للشاشات الصغيرة" },
                    { value: "@media (prefers-reduced-motion: reduce) { :root { --transition-normal: 0.01s; } }", description: "تقليل الحركة للمستخدمين الذين يطلبون ذلك" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. الفروقات بين المتغيرات والـ Sass/SCSS
    // ============================================================
    {
        tag: "vs-sass",
        description: "الفروقات الرئيسية بين CSS Variables و Sass Variables، لكل منهما استخداماته ومزاياه",
        properties: [
            {
                name: "CSS Variables vs Sass Variables",
                description: "المتغيرات المخصصة في CSS تعمل في وقت التشغيل وتدعم التحديث الديناميكي، بينما متغيرات Sass تعمل في وقت الترجمة فقط",
                values: [
                    { value: "تعمل في المتصفح", description: "CSS Variables تُعالج مباشرة في المتصفح ويمكن تغييرها بواسطة JavaScript" },
                    { value: "تعمل في وقت الترجمة", description: "Sass Variables تُعالج أثناء الترجمة إلى CSS ولا يمكن تغييرها ديناميكياً" },
                    { value: "تدعم الميراث", description: "CSS Variables تورث بين العناصر ويمكن تجاوزها" },
                    { value: "لا تدعم الميراث", description: "Sass Variables لا تورث، كل متغير مستقل" },
                    { value: "يمكن تغييرها بـ JS", description: "يمكن تغيير CSS Variables باستخدام JavaScript" },
                    { value: "لا يمكن تغييرها بـ JS", description: "Sass Variables لا يمكن تغييرها بواسطة JavaScript" },
                    { value: "تدعم Media Queries", description: "يمكن إعادة تعريف CSS Variables داخل Media Queries" },
                    { value: "تدعم جزئياً", description: "Sass Variables يمكن استخدامها في Media Queries ولكن بطرق محدودة" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة للمتغيرات المخصصة في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - نظام ألوان كامل",
                description: "نظام ألوان متكامل باستخدام المتغيرات المخصصة",
                values: [
                    { value: ":root { --color-primary: #007bff; --color-primary-dark: #0056b3; --color-primary-light: #66b0ff; --color-secondary: #6c757d; --color-success: #28a745; --color-danger: #dc3545; --color-warning: #ffc107; --color-info: #17a2b8; }", description: "نظام ألوان كامل" }
                ]
            },
            {
                name: "مثال 2 - نظام مسافات متكامل",
                description: "نظام مسافات متكامل للتصميم المتسق",
                values: [
                    { value: ":root { --space-xs: 0.25rem; --space-sm: 0.5rem; --space-md: 1rem; --space-lg: 1.5rem; --space-xl: 2rem; --space-xxl: 3rem; }", description: "نظام مسافات متكامل" }
                ]
            },
            {
                name: "مثال 3 - تبديل الثيمات",
                description: "تبديل بين الوضع الفاتح والداكن باستخدام المتغيرات",
                values: [
                    { value: ":root { --bg-color: #ffffff; --text-color: #212529; --border-color: #dee2e6; } [data-theme='dark'] { --bg-color: #1a1a2e; --text-color: #eaeaea; --border-color: #2a2a4a; }", description: "تبديل بين الثيمات" }
                ]
            },
            {
                name: "مثال 4 - تصميم متجاوب",
                description: "تصميم متجاوب باستخدام المتغيرات",
                values: [
                    { value: ":root { --font-size: 16px; --container-padding: 20px; } @media (min-width: 768px) { :root { --font-size: 18px; --container-padding: 40px; } } @media (min-width: 1200px) { :root { --font-size: 20px; --container-padding: 60px; } }", description: "تصميم متجاوب مع المتغيرات" }
                ]
            },
            {
                name: "مثال 5 - تغيير متغيرات بواسطة JS",
                description: "تغيير المتغيرات ديناميكياً باستخدام JavaScript",
                values: [
                    { value: "document.documentElement.style.setProperty('--primary-color', '#ff0000')", description: "تغيير اللون الأساسي بواسطة JS" },
                    { value: "document.documentElement.style.setProperty('--font-size', '20px')", description: "تغيير حجم الخط بواسطة JS" },
                    { value: "element.style.setProperty('--spacing', '20px')", description: "تغيير متغير على عنصر محدد" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام المتغيرات المخصصة بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لاستخدام المتغيرات المخصصة",
                values: [
                    { value: "استخدم :root للمتغيرات العامة", description: "ضع المتغيرات المستخدمة في كل الصفحة على :root" },
                    { value: "استخدم أسماء وصفية", description: "--primary-color أفضل من --color1, --spacing-unit أفضل من --s" },
                    { value: "قدم قيماً احتياطية", description: "var(--color, #000) يحمي من الأخطاء" },
                    { value: "استخدم @property للانتقالات", description: "@property تمكن من انتقال سلس للقيم المتغيرة" },
                    { value: "نظّم المتغيرات", description: "قسّم المتغيرات إلى مجموعات: ألوان، مسافات، خطوط، إلخ" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء المتغيرات المخصصة",
                values: [
                    { value: "استخدمها باعتدال", description: "الإفراط في استخدام المتغيرات قد يؤثر على الأداء" },
                    { value: "تجنب التغيير المتكرر", description: "تغيير المتغيرات في CSS باستمرار قد يسبب إعادة حساب" },
                    { value: "استخدم @property للأرقام", description: "@property يساعد المتصفح في تحسين الأداء" },
                    { value: "استخدم herits: false", description: "عندما لا تحتاج الوراثة، حدد inherits: false" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل المتغيرات المخصصة قابلة للوصول",
                values: [
                    { value: "دعم prefers-color-scheme", description: "استخدم media queries لضبط الألوان حسب تفضيل النظام" },
                    { value: "دعم prefers-reduced-motion", description: "قلل الحركات للمستخدمين الذين يطلبون ذلك" },
                    { value: "احرص على التباين", description: "تأكد من أن الألوان المتغيرة تحافظ على تباين جيد" }
                ]
            },
            {
                name: "أخطاء شائعة",
                description: "أخطاء شائعة عند استخدام المتغيرات المخصصة وكيفية تجنبها",
                values: [
                    { value: "نسيان الشرطتين", description: "--color ليس -color أو _color" },
                    { value: "استخدام var() بدون متغير", description: "var(--color) وليس var(color)" },
                    { value: "عدم استخدام قيمة احتياطية", description: "var(--color, #000) أفضل من var(--color) وحده" },
                    { value: "استخدامها في Media Queries مباشرة", description: "@media (min-width: var(--breakpoint)) لا يعمل، يجب إعادة التعريف" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.customPropertiesData = customPropertiesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = customPropertiesData;
}