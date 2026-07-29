// ============================================================
// text-fonts.js
// خصائص النصوص والخطوط (Text & Fonts) في CSS
// تتحكم في شكل النصوص، نوع الخط، حجمه، لونه، محاذاته، وزخرفته
// ============================================================

const textFontsData = [
    // ============================================================
    // 1. خصائص الخطوط (Font Properties)
    // ============================================================
    {
        tag: "font",
        description: "يحدد خصائص الخط بشكل مختصر، يشمل الحجم، النمط، الوزن، العائلة",
        properties: [
            // -------- font-family --------
            {
                name: "font-family",
                description: "يحدد نوع الخط المستخدم في النص، يمكن تحديد عدة خطوط احتياطية بفاصلة، والأخير يجب أن يكون اسم عائلة عامة",
                values: [
                    // خطوط Sans-serif (بدون زوائد)
                    { value: "Arial, Helvetica, sans-serif", description: "خط Arial أولاً، ثم Helvetica، ثم أي خط sans-serif" },
                    { value: "Helvetica, Arial, sans-serif", description: "خط Helvetica أولاً" },
                    { value: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", description: "قائمة خطوط احتياطية متعددة للويندوز" },
                    { value: "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif", description: "خطوط أجهزة آبل" },
                    { value: "'Inter', 'Segoe UI', sans-serif", description: "خط Inter مع احتياطيات" },
                    { value: "'Roboto', 'Helvetica Neue', sans-serif", description: "خط Roboto (أندرويد)" },
                    { value: "'Open Sans', 'Helvetica Neue', sans-serif", description: "خط Open Sans" },
                    { value: "'Noto Sans', sans-serif", description: "خط يدعم كل اللغات" },
                    
                    // خطوط Serif (ذات زوائد)
                    { value: "'Times New Roman', Times, serif", description: "خط Times New Roman أولاً، ثم Times، ثم أي serif" },
                    { value: "'Georgia', 'Times New Roman', serif", description: "خط Georgia (ممتاز للشاشات)" },
                    { value: "'Merriweather', 'Georgia', serif", description: "خط Merriweather" },
                    { value: "'Playfair Display', 'Georgia', serif", description: "خط Playfair Display (راٍق)" },
                    { value: "'Palatino', 'Georgia', serif", description: "خط Palatino" },
                    { value: "'Baskerville', 'Georgia', serif", description: "خط Baskerville" },
                    
                    // خطوط Monospace (أحادية التباعد)
                    { value: "'Courier New', Courier, monospace", description: "خط Courier New" },
                    { value: "'Consolas', 'Courier New', monospace", description: "خط Consolas (مناسب للبرمجة)" },
                    { value: "'Fira Code', 'Consolas', monospace", description: "خط Fira Code مع دعم الـ Ligatures" },
                    { value: "'JetBrains Mono', 'Consolas', monospace", description: "خط JetBrains Mono" },
                    { value: "'Source Code Pro', monospace", description: "خط Source Code Pro" },
                    
                    // خطوط عربية
                    { value: "'Noto Naskh Arabic', 'Scheherazade', serif", description: "خط عربي تقليدي" },
                    { value: "'Noto Kufi Arabic', 'Amiri', sans-serif", description: "خط عربي كوفي" },
                    { value: "'Tahoma', 'Segoe UI', sans-serif", description: "خط Tahoma (يدعم العربية)" },
                    { value: "'Traditional Arabic', 'Arial', sans-serif", description: "خط عربي تقليدي" },
                    { value: "'Amiri', 'Times New Roman', serif", description: "خط Amiri (جميل للعربية)" },
                    { value: "'Cairo', sans-serif", description: "خط Cairo (حديث)" },
                    { value: "'Rubik', sans-serif", description: "خط Rubik (يدعم العربية)" },
                    
                    // عائلات عامة (Generic Families)
                    { value: "serif", description: "أي خط من عائلة serif (ذات زوائد) - كخيار أخير" },
                    { value: "sans-serif", description: "أي خط من عائلة sans-serif (بدون زوائد)" },
                    { value: "monospace", description: "أي خط من عائلة monospace (جميع الحروف بنفس العرض)" },
                    { value: "cursive", description: "أي خط من عائلة cursive (يشبه الكتابة اليدوية)" },
                    { value: "fantasy", description: "أي خط من عائلة fantasy (خطوط زخرفية)" },
                    { value: "system-ui", description: "الخط الافتراضي لنظام التشغيل" },
                    { value: "ui-serif", description: "خط serif الافتراضي للنظام" },
                    { value: "ui-sans-serif", description: "خط sans-serif الافتراضي للنظام" },
                    { value: "ui-monospace", description: "خط monospace الافتراضي للنظام" },
                    { value: "ui-rounded", description: "خط مدور الافتراضي للنظام" }
                ],
                freeInput: true
            },
            // -------- font-size --------
            {
                name: "font-size",
                description: "يحدد حجم الخط في النص، يمكن استخدام وحدات مختلفة (px, em, rem, %, vw, vh)",
                values: [
                    // وحدات مطلقة
                    { value: "8px", description: "حجم 8 بكسل - صغير جداً" },
                    { value: "10px", description: "حجم 10 بكسل" },
                    { value: "12px", description: "حجم 12 بكسل" },
                    { value: "14px", description: "حجم 14 بكسل" },
                    { value: "16px", description: "حجم 16 بكسل (الحجم الافتراضي في معظم المتصفحات)" },
                    { value: "18px", description: "حجم 18 بكسل" },
                    { value: "20px", description: "حجم 20 بكسل" },
                    { value: "24px", description: "حجم 24 بكسل" },
                    { value: "28px", description: "حجم 28 بكسل" },
                    { value: "32px", description: "حجم 32 بكسل" },
                    { value: "36px", description: "حجم 36 بكسل" },
                    { value: "40px", description: "حجم 40 بكسل" },
                    { value: "48px", description: "حجم 48 بكسل" },
                    { value: "56px", description: "حجم 56 بكسل" },
                    { value: "64px", description: "حجم 64 بكسل" },
                    { value: "72px", description: "حجم 72 بكسل" },
                    { value: "96px", description: "حجم 96 بكسل" },
                    { value: "144px", description: "حجم 144 بكسل" },
                    
                    // وحدات نسبية (em - نسبة إلى العنصر الأب)
                    { value: "0.5em", description: "نصف حجم الخط الأب" },
                    { value: "0.75em", description: "75% من حجم الخط الأب" },
                    { value: "0.875em", description: "87.5% من حجم الخط الأب (14/16)" },
                    { value: "1em", description: "نفس حجم الخط الأب" },
                    { value: "1.2em", description: "120% من حجم الخط الأب" },
                    { value: "1.5em", description: "150% من حجم الخط الأب" },
                    { value: "2em", description: "ضعف حجم الخط الأب" },
                    { value: "3em", description: "ثلاثة أضعاف حجم الخط الأب" },
                    
                    // وحدات نسبية (rem - نسبة إلى الجذر :root)
                    { value: "0.5rem", description: "نصف حجم الخط الجذري" },
                    { value: "0.75rem", description: "75% من حجم الخط الجذري" },
                    { value: "1rem", description: "نفس حجم الخط الجذري (عادة 16px)" },
                    { value: "1.25rem", description: "125% من حجم الخط الجذري" },
                    { value: "1.5rem", description: "150% من حجم الخط الجذري" },
                    { value: "2rem", description: "ضعف حجم الخط الجذري" },
                    { value: "3rem", description: "ثلاثة أضعاف حجم الخط الجذري" },
                    
                    // نسب مئوية
                    { value: "50%", description: "50% من حجم الخط الأب" },
                    { value: "75%", description: "75% من حجم الخط الأب" },
                    { value: "100%", description: "نفس حجم الخط الأب" },
                    { value: "125%", description: "125% من حجم الخط الأب" },
                    { value: "150%", description: "150% من حجم الخط الأب" },
                    { value: "200%", description: "200% من حجم الخط الأب" },
                    { value: "300%", description: "300% من حجم الخط الأب" },
                    
                    // وحدات Viewport
                    { value: "1vw", description: "1% من عرض نافذة المتصفح" },
                    { value: "2vw", description: "2% من عرض نافذة المتصفح" },
                    { value: "1vh", description: "1% من ارتفاع نافذة المتصفح" },
                    { value: "2vh", description: "2% من ارتفاع نافذة المتصفح" },
                    
                    // الكلمات المفتاحية المطلقة
                    { value: "xx-small", description: "صغير جداً جداً (≈9px)" },
                    { value: "x-small", description: "صغير جداً (≈10px)" },
                    { value: "small", description: "صغير (≈12px)" },
                    { value: "medium", description: "حجم متوسط - القيمة الافتراضية (≈16px)" },
                    { value: "large", description: "حجم كبير (≈18px)" },
                    { value: "x-large", description: "كبير جداً (≈24px)" },
                    { value: "xx-large", description: "كبير جداً جداً (≈32px)" },
                    { value: "xxx-large", description: "كبير جداً جداً جداً (≈48px)" },
                    
                    // الكلمات المفتاحية النسبية
                    { value: "larger", description: "أكبر من حجم الأب بنسبة محددة" },
                    { value: "smaller", description: "أصغر من حجم الأب بنسبة محددة" },
                    
                    // دوال رياضية
                    { value: "clamp(12px, 2vw, 24px)", description: "حجم بين 12 و24 بكسل، يتغير مع عرض الشاشة" },
                    { value: "clamp(14px, 1.5vw, 20px)", description: "حجم مرن للعناوين" },
                    { value: "clamp(10px, 1vw, 16px)", description: "حجم مرن للنصوص الصغيرة" },
                    { value: "min(2vw, 24px)", description: "أصغر بين 2vw و24px" },
                    { value: "max(12px, 1vw)", description: "أكبر بين 12px و1vw" }
                ],
                freeInput: true
            },
            // -------- font-weight --------
            {
                name: "font-weight",
                description: "يحدد سمك الخط (درجة الاسوداد) من رفيع إلى سميك جداً، يعتمد على دعم الخط للأوزان المختلفة",
                values: [
                    // الكلمات المفتاحية
                    { value: "normal", description: "وزن عادي (400) - القيمة الافتراضية" },
                    { value: "bold", description: "وزن سميك (700) - الأكثر استخداماً للعناوين" },
                    { value: "lighter", description: "أخف من وزن الأب - يتجاوز الوزن الوراثي" },
                    { value: "bolder", description: "أثقل من وزن الأب - يتجاوز الوزن الوراثي" },
                    
                    // الأوزان الرقمية (100-900)
                    { value: "100", description: "رفيع جداً (Thin / Hairline)" },
                    { value: "200", description: "رفيع (Extra Light / Ultra Light)" },
                    { value: "300", description: "خفيف (Light)" },
                    { value: "400", description: "عادي (Normal / Regular) - القيمة الافتراضية" },
                    { value: "500", description: "متوسط (Medium)" },
                    { value: "600", description: "شبه سميك (Semi Bold / Demi Bold)" },
                    { value: "700", description: "سميك (Bold) - الأكثر شيوعاً للعناوين" },
                    { value: "800", description: "سميك جداً (Extra Bold / Ultra Bold)" },
                    { value: "900", description: "أسود (Black / Heavy) - أثقل وزن ممكن" }
                ]
            },
            // -------- font-style --------
            {
                name: "font-style",
                description: "يحدد نمط الخط (مائل أو عادي)، يستخدم للتأكيد أو للتصميم",
                values: [
                    { value: "normal", description: "خط عادي (غير مائل) - القيمة الافتراضية" },
                    { value: "italic", description: "خط مائل (Italic) - نمط مائل مصمم خصيصاً للخط" },
                    { value: "oblique", description: "خط مائل بشكل مائل (Oblique) - إمالة آلية للخط" },
                    { value: "oblique 15deg", description: "خط مائل بزاوية 15 درجة" },
                    { value: "oblique -15deg", description: "خط مائل بزاوية 15 درجة في الاتجاه المعاكس" }
                ]
            },
            // -------- font-variant --------
            {
                name: "font-variant",
                description: "يتحكم في استخدام الأحرف الكبيرة الصغيرة (Small Caps) وغيرها من المتغيرات المتقدمة للخط",
                values: [
                    { value: "normal", description: "طبيعي - القيمة الافتراضية" },
                    { value: "small-caps", description: "يحول النص إلى أحرف كبيرة صغيرة الحجم (Small Caps) - أنيقة للعناوين" },
                    { value: "all-small-caps", description: "جميع الأحرف كبيرة صغيرة الحجم (حتى الأحرف الصغيرة الأصلية)" },
                    { value: "petite-caps", description: "أحرف كبيرة صغيرة جداً (Petite Caps) - أصغر من small-caps" },
                    { value: "all-petite-caps", description: "جميع الأحرف كبيرة صغيرة جداً" },
                    { value: "unicase", description: "مزيج من الأحرف الكبيرة والصغيرة بطريقة موحدة" },
                    { value: "titling-caps", description: "أحرف كبيرة مناسبة للعناوين الطويلة (Titling Caps)" }
                ]
            },
            // -------- font-stretch --------
            {
                name: "font-stretch",
                description: "يحدد مدى انبساط أو انضغاط الخط، يجعله أعرض أو أضيق (يعتمد على دعم الخط)",
                values: [
                    { value: "normal", description: "عرض طبيعي - القيمة الافتراضية" },
                    { value: "ultra-condensed", description: "مضغوط جداً - أضيق عرض ممكن" },
                    { value: "extra-condensed", description: "مضغوط إضافي" },
                    { value: "condensed", description: "مضغوط" },
                    { value: "semi-condensed", description: "مضغوط قليلاً" },
                    { value: "semi-expanded", description: "منبسط قليلاً" },
                    { value: "expanded", description: "منبسط" },
                    { value: "extra-expanded", description: "منبسط إضافي" },
                    { value: "ultra-expanded", description: "منبسط جداً - أعرض عرض ممكن" }
                ]
            },
            // -------- font-size-adjust --------
            {
                name: "font-size-adjust",
                description: "يضبط حجم الخط بحيث تحافظ الأحرف الصغيرة على نفس الحجم النسبي عند تغيير الخطوط",
                values: [
                    { value: "none", description: "بدون ضبط - القيمة الافتراضية" },
                    { value: "0.4", description: "نسبة ضبط 0.4" },
                    { value: "0.48", description: "نسبة ضبط مثالية لخط Times New Roman" },
                    { value: "0.5", description: "نسبة ضبط 0.5" },
                    { value: "0.52", description: "نسبة ضبط مثالية لخط Arial" },
                    { value: "0.58", description: "نسبة ضبط مثالية لخط Helvetica" },
                    { value: "0.66", description: "نسبة ضبط مثالية لخط Verdana" }
                ],
                freeInput: true
            },
            // -------- font-kerning --------
            {
                name: "font-kerning",
                description: "يتحكم في تباعد الأحرف (Kerning) لتحسين قابلية القراءة وجمالية النص",
                values: [
                    { value: "auto", description: "يترك المتصفح يقرر متى يستخدم التباعد - القيمة الافتراضية" },
                    { value: "normal", description: "يفعل تباعد الأحرف (Kerning) - تحسين جودة النص" },
                    { value: "none", description: "يعطل تباعد الأحرف - قد يقلل جودة النص" }
                ]
            },
            // -------- font-synthesis --------
            {
                name: "font-synthesis",
                description: "يحدد ما إذا كان المتصفح يمكنه تركيب خطوط بديلة (مائل أو سميك) إذا لم تكن موجودة في الخط الأصلي",
                values: [
                    { value: "none", description: "لا يركب خطوطاً بديلة - يستخدم فقط ما هو موجود" },
                    { value: "weight", description: "يسمح بتركيب وزن بديل (سميك) إذا لم يكن موجوداً" },
                    { value: "style", description: "يسمح بتركيب نمط بديل (مائل) إذا لم يكن موجوداً" },
                    { value: "small-caps", description: "يسمح بتركيب أحرف كبيرة صغيرة إذا لم تكن موجودة" },
                    { value: "weight style", description: "يسمح بتركيب وزن ونمط معاً" },
                    { value: "weight style small-caps", description: "يسمح بتركيب الثلاثة معاً" }
                ]
            },
            // -------- font-variant-ligatures --------
            {
                name: "font-variant-ligatures",
                description: "يتحكم في ربط الحروف في النصوص (Ligatures) مثل 'fi' و 'fl' في الإنجليزية، والربط في العربية",
                values: [
                    { value: "normal", description: "ربط عادي (افتراضي) - يستخدم الربط الشائع" },
                    { value: "none", description: "لا يربط الحروف - كل حرف منفصل" },
                    { value: "common-ligatures", description: "يربط الحروف الشائعة (مثل fi, fl, ff)" },
                    { value: "no-common-ligatures", description: "يعطل الربط الشائع" },
                    { value: "discretionary-ligatures", description: "يربط الحروف التجميلية (مثل ct, st)" },
                    { value: "no-discretionary-ligatures", description: "يعطل الربط التجميلي" },
                    { value: "historical-ligatures", description: "يربط الحروف التاريخية (مثل الألمانية القديمة)" },
                    { value: "no-historical-ligatures", description: "يعطل الربط التاريخي" },
                    { value: "contextual", description: "يربط حسب السياق (مناسب للعربية)" },
                    { value: "no-contextual", description: "يعطل الربط السياقي" }
                ]
            },
            // -------- font-variant-numeric --------
            {
                name: "font-variant-numeric",
                description: "يتحكم في شكل الأرقام (أرقام تقليدية أو ذات ارتفاع متساوٍ) والكسور",
                values: [
                    { value: "normal", description: "أرقام عادية - القيمة الافتراضية" },
                    { value: "lining-nums", description: "أرقام ذات ارتفاع متساوٍ (كلها بنفس الارتفاع) - مناسبة للجداول" },
                    { value: "oldstyle-nums", description: "أرقام تقليدية (بعضها ينزل تحت السطر) - مناسبة للنصوص" },
                    { value: "proportional-nums", description: "أرقام ذات عرض متناسب - كل رقم بعرض مختلف" },
                    { value: "tabular-nums", description: "أرقام ذات عرض ثابت - كل الأرقام بنفس العرض (مناسبة للجداول)" },
                    { value: "diagonal-fractions", description: "كسور مائلة (½, ¾) - تصميم مائل" },
                    { value: "stacked-fractions", description: "كسور متراصة (مع بعضها)" },
                    { value: "ordinal", description: "استخدام الترتيب (1st, 2nd, 3rd)" },
                    { value: "slashed-zero", description: "رقم صفر بشق مائل (لتجنب الخلط مع O)" }
                ]
            },
            // -------- font-variant-position --------
            {
                name: "font-variant-position",
                description: "يتحكم في موقع النص كمرتفع أو منخفض (Superscript/Subscript)",
                values: [
                    { value: "normal", description: "موقع طبيعي - القيمة الافتراضية" },
                    { value: "super", description: "مرتفع (أعلى من السطر) - مثل <sup>" },
                    { value: "sub", description: "منخفض (أسفل السطر) - مثل <sub>" }
                ]
            },
            // -------- font-variant-alternates --------
            {
                name: "font-variant-alternates",
                description: "يسمح باستخدام أشكال بديلة من الحروف (مثل الحروف المزخرفة) في الخطوط التي تدعمها",
                values: [
                    { value: "normal", description: "أشكال عادية - القيمة الافتراضية" },
                    { value: "historical-forms", description: "أشكال تاريخية (مثل الأحرف الألمانية القديمة)" },
                    { value: "stylistic(1)", description: "أسلوب معين رقم 1 (حسب الخط)" },
                    { value: "stylistic(2)", description: "أسلوب معين رقم 2 (حسب الخط)" },
                    { value: "stylistic(3)", description: "أسلوب معين رقم 3 (حسب الخط)" },
                    { value: "swash(1)", description: "أسلوب مزخرف (Swash) رقم 1" },
                    { value: "ornaments(1)", description: "زخارف رقم 1" },
                    { value: "annotation(1)", description: "تعليقات توضيحية رقم 1" }
                ],
                freeInput: true
            },
            // -------- font-display --------
            {
                name: "font-display",
                description: "يحدد كيف يتصرف المتصفح أثناء تحميل خط مخصص (@font-face) قبل اكتمال تنزيله",
                values: [
                    { value: "auto", description: "سلوك المتصفح الافتراضي (عادة block)" },
                    { value: "swap", description: "يعرض خطاً احتياطياً فوراً ثم يستبدله بالخط المخصص عند اكتمال تحميله - الأكثر شيوعاً" },
                    { value: "block", description: "يخفي النص لفترة قصيرة (3 ثوان) بانتظار الخط قبل عرضه" },
                    { value: "fallback", description: "فترة انتظار قصيرة (100ms) ثم يستخدم الخط الاحتياطي إذا تأخر التحميل" },
                    { value: "optional", description: "يستخدم الخط المخصص فقط إذا كان محملاً بسرعة (100ms)، وإلا يبقى على الاحتياطي نهائياً" }
                ]
            },
            // -------- font-variation-settings --------
            {
                name: "font-variation-settings",
                description: "يتحكم في محاور الخطوط المتغيرة (Variable Fonts) مثل الوزن أو العرض بدقة عالية",
                values: [
                    { value: "normal", description: "الإعدادات الافتراضية للخط - القيمة الافتراضية" },
                    { value: "'wght' 550", description: "ضبط محور الوزن (Weight) إلى قيمة دقيقة 550" },
                    { value: "'wght' 700", description: "ضبط الوزن إلى 700 (Bold)" },
                    { value: "'wdth' 80", description: "ضبط محور العرض (Width) إلى 80%" },
                    { value: "'wght' 700, 'wdth' 80", description: "ضبط الوزن والعرض معاً" },
                    { value: "'wght' 300, 'wdth' 120", description: "وزن خفيف وعرض منبسط" },
                    { value: "'opsz' 24", description: "ضبط محور البصريات (Optical Size)" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. خصائص تنسيق النصوص (Text Properties)
    // ============================================================
    {
        tag: "text",
        description: "خصائص تنسيق النصوص (المحاذاة، التزيين، الظل، التباعد، إلخ)",
        properties: [
            // -------- color --------
            {
                name: "color",
                description: "يحدد لون النص، يمكن استخدام أي نظام ألوان (أسماء، Hex، RGB، HSL)",
                values: [
                    // أسماء الألوان الأساسية
                    { value: "black", description: "أسود - القيمة الافتراضية" },
                    { value: "white", description: "أبيض" },
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" },
                    { value: "green", description: "أخضر" },
                    { value: "yellow", description: "أصفر" },
                    { value: "orange", description: "برتقالي" },
                    { value: "purple", description: "بنفسجي" },
                    { value: "pink", description: "وردي" },
                    { value: "gray", description: "رمادي" },
                    
                    // قيم خاصة
                    { value: "currentColor", description: "لون العنصر الأب - مفيد للتوحيد" },
                    { value: "transparent", description: "شفاف - النص غير مرئي" },
                    
                    // Hex
                    { value: "#000000", description: "أسود" },
                    { value: "#ffffff", description: "أبيض" },
                    { value: "#333333", description: "رمادي غامق" },
                    { value: "#666666", description: "رمادي متوسط" },
                    { value: "#999999", description: "رمادي فاتح" },
                    { value: "#cccccc", description: "رمادي فاتح جداً" },
                    { value: "#007bff", description: "أزرق Bootstrap" },
                    { value: "#28a745", description: "أخضر Bootstrap" },
                    { value: "#dc3545", description: "أحمر Bootstrap" },
                    { value: "#ffc107", description: "أصفر Bootstrap" },
                    { value: "#6f42c1", description: "بنفسجي Bootstrap" },
                    
                    // RGB/RGBA
                    { value: "rgb(0, 0, 0)", description: "أسود" },
                    { value: "rgb(255, 255, 255)", description: "أبيض" },
                    { value: "rgb(255, 0, 0)", description: "أحمر" },
                    { value: "rgba(255, 0, 0, 0.5)", description: "أحمر شفاف 50%" },
                    { value: "rgba(0, 0, 0, 0.5)", description: "أسود شفاف 50%" },
                    
                    // HSL/HSLA
                    { value: "hsl(0, 100%, 50%)", description: "أحمر" },
                    { value: "hsl(240, 100%, 50%)", description: "أزرق" },
                    { value: "hsla(0, 100%, 50%, 0.5)", description: "أحمر شفاف 50%" }
                ],
                freeInput: true
            },
            // -------- line-height --------
            {
                name: "line-height",
                description: "يحدد المسافة العمودية بين سطور النص (ارتفاع السطر)، يؤثر على قابلية القراءة",
                values: [
                    { value: "normal", description: "ارتفاع طبيعي (عادة 1.2) - القيمة الافتراضية" },
                    { value: "1", description: "ارتفاع يساوي حجم الخط - مدمج جداً" },
                    { value: "1.2", description: "ارتفاع 1.2 مرة من حجم الخط" },
                    { value: "1.4", description: "ارتفاع 1.4 مرة - قراءة مريحة" },
                    { value: "1.5", description: "ارتفاع 1.5 مرة - قراءة مريحة جداً" },
                    { value: "1.6", description: "ارتفاع 1.6 مرة" },
                    { value: "1.8", description: "ارتفاع 1.8 مرة - مريح للقراءة الطويلة" },
                    { value: "2", description: "ارتفاع ضعف حجم الخط - واسع جداً" },
                    { value: "24px", description: "ارتفاع ثابت 24 بكسل" },
                    { value: "150%", description: "ارتفاع 150% من حجم الخط" },
                    { value: "200%", description: "ارتفاع 200% من حجم الخط" }
                ],
                freeInput: true
            },
            // -------- letter-spacing --------
            {
                name: "letter-spacing",
                description: "يحدد المسافة بين الأحرف (تباعد الحروف)، يؤثر على كثافة النص",
                values: [
                    { value: "normal", description: "تباعد طبيعي حسب الخط - القيمة الافتراضية" },
                    { value: "0.5px", description: "زيادة التباعد بمقدار 0.5 بكسل" },
                    { value: "1px", description: "زيادة التباعد بمقدار 1 بكسل" },
                    { value: "2px", description: "زيادة التباعد بمقدار 2 بكسل" },
                    { value: "3px", description: "زيادة التباعد بمقدار 3 بكسل" },
                    { value: "5px", description: "زيادة التباعد بمقدار 5 بكسل" },
                    { value: "-0.5px", description: "تقريب الحروف بمقدار 0.5 بكسل" },
                    { value: "-1px", description: "تقريب الحروف بمقدار 1 بكسل" },
                    { value: "0.05em", description: "زيادة التباعد بنسبة 5% من حجم الخط" },
                    { value: "0.1em", description: "زيادة التباعد بنسبة 10% من حجم الخط" },
                    { value: "0.2em", description: "زيادة التباعد بنسبة 20% من حجم الخط" }
                ],
                freeInput: true
            },
            // -------- word-spacing --------
            {
                name: "word-spacing",
                description: "يحدد المسافة بين الكلمات في النص، يؤثر على كثافة النص",
                values: [
                    { value: "normal", description: "تباعد طبيعي حسب الخط - القيمة الافتراضية" },
                    { value: "1px", description: "زيادة التباعد بين الكلمات بمقدار 1 بكسل" },
                    { value: "2px", description: "زيادة التباعد بمقدار 2 بكسل" },
                    { value: "5px", description: "زيادة التباعد بمقدار 5 بكسل" },
                    { value: "-1px", description: "تقريب الكلمات بمقدار 1 بكسل" },
                    { value: "-2px", description: "تقريب الكلمات بمقدار 2 بكسل" },
                    { value: "0.1em", description: "زيادة التباعد بنسبة 10% من حجم الخط" },
                    { value: "0.2em", description: "زيادة التباعد بنسبة 20% من حجم الخط" }
                ],
                freeInput: true
            },
            // -------- text-align --------
            {
                name: "text-align",
                description: "يحدد محاذاة النص داخل العنصر (يسار، يمين، وسط، أو ضبط)",
                values: [
                    { value: "left", description: "محاذاة إلى اليسار - القيمة الافتراضية في اللغات الأفقية" },
                    { value: "right", description: "محاذاة إلى اليمين" },
                    { value: "center", description: "محاذاة إلى المنتصف - شائع للعناوين" },
                    { value: "justify", description: "ضبط النص بحيث يملأ العرض بالكامل - مناسب للفقرات" },
                    { value: "start", description: "محاذاة إلى بداية اتجاه النص (يسار في العربية، يمين في الإنجليزية)" },
                    { value: "end", description: "محاذاة إلى نهاية اتجاه النص (يمين في العربية، يسار في الإنجليزية)" },
                    { value: "justify-all", description: "ضبط النص بما في ذلك السطر الأخير" },
                    { value: "match-parent", description: "يطابق محاذاة العنصر الأب" }
                ]
            },
            // -------- text-align-last --------
            {
                name: "text-align-last",
                description: "يحدد محاذاة السطر الأخير في النص المضبوط (justify)",
                values: [
                    { value: "auto", description: "يتبع text-align - القيمة الافتراضية" },
                    { value: "left", description: "محاذاة السطر الأخير إلى اليسار" },
                    { value: "right", description: "محاذاة السطر الأخير إلى اليمين" },
                    { value: "center", description: "محاذاة السطر الأخير إلى المنتصف" },
                    { value: "justify", description: "ضبط السطر الأخير أيضاً" },
                    { value: "start", description: "محاذاة إلى بداية الاتجاه" },
                    { value: "end", description: "محاذاة إلى نهاية الاتجاه" }
                ]
            },
            // -------- text-decoration --------
            {
                name: "text-decoration",
                description: "يضيف زخرفة للنص مثل خط تحته أو فوقه أو خط وسطه (اختصار شامل)",
                values: [
                    { value: "none", description: "بدون زخرفة - القيمة الافتراضية" },
                    { value: "underline", description: "خط تحت النص - يستخدم للروابط" },
                    { value: "overline", description: "خط فوق النص" },
                    { value: "line-through", description: "خط في وسط النص (يتوسطه) - يستخدم للنصوص الملغاة" },
                    { value: "blink", description: "نص وامض (غير مستحسن)" },
                    { value: "underline overline", description: "خط تحت وفوق النص معاً" },
                    { value: "underline wavy red", description: "خط أحمر مموج تحت النص" },
                    { value: "underline dotted blue", description: "خط أزرق منقط تحت النص" },
                    { value: "underline double #007bff", description: "خط مزدوج أزرق تحت النص" },
                    { value: "line-through wavy red", description: "خط أحمر مموج في وسط النص" }
                ],
                freeInput: true
            },
            // -------- text-decoration-line --------
            {
                name: "text-decoration-line",
                description: "يحدد نوع خط الزخرفة (تحت، فوق، وسط، أو إلغاء)",
                values: [
                    { value: "none", description: "بدون خط - القيمة الافتراضية" },
                    { value: "underline", description: "خط تحت النص" },
                    { value: "overline", description: "خط فوق النص" },
                    { value: "line-through", description: "خط في وسط النص" },
                    { value: "blink", description: "نص وامض (غير مستحسن)" }
                ]
            },
            // -------- text-decoration-style --------
            {
                name: "text-decoration-style",
                description: "يحدد نمط خط الزخرفة (صلب، متقطع، منقط، مموج، مزدوج)",
                values: [
                    { value: "solid", description: "خط صلب - القيمة الافتراضية" },
                    { value: "double", description: "خط مزدوج" },
                    { value: "dotted", description: "خط منقط" },
                    { value: "dashed", description: "خط متقطع" },
                    { value: "wavy", description: "خط مموج - يعطي مظهراً ديناميكياً" }
                ]
            },
            // -------- text-decoration-color --------
            {
                name: "text-decoration-color",
                description: "يحدد لون خط الزخرفة بشكل منفصل عن لون النص",
                values: [
                    { value: "currentColor", description: "نفس لون النص - القيمة الافتراضية" },
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" },
                    { value: "#007bff", description: "أزرق مخصص" },
                    { value: "rgb(255, 0, 0)", description: "أحمر (RGB)" }
                ],
                freeInput: true
            },
            // -------- text-decoration-thickness --------
            {
                name: "text-decoration-thickness",
                description: "يحدد سمك خط الزخرفة",
                values: [
                    { value: "auto", description: "يحسب المتصفح السمك تلقائياً - القيمة الافتراضية" },
                    { value: "1px", description: "سمك 1 بكسل" },
                    { value: "2px", description: "سمك 2 بكسل" },
                    { value: "3px", description: "سمك 3 بكسل" },
                    { value: "0.05em", description: "سمك 5% من حجم الخط" },
                    { value: "0.1em", description: "سمك 10% من حجم الخط" },
                    { value: "from-font", description: "يستخدم سمك الخط الموصى به من ملف الخط" }
                ],
                freeInput: true
            },
            // -------- text-underline-offset --------
            {
                name: "text-underline-offset",
                description: "يحدد المسافة بين الخط تحت النص والنص نفسه",
                values: [
                    { value: "auto", description: "يحسب المتصفح المسافة تلقائياً - القيمة الافتراضية" },
                    { value: "1px", description: "مسافة 1 بكسل" },
                    { value: "2px", description: "مسافة 2 بكسل" },
                    { value: "3px", description: "مسافة 3 بكسل" },
                    { value: "5px", description: "مسافة 5 بكسل" },
                    { value: "0.1em", description: "مسافة 10% من حجم الخط" },
                    { value: "0.2em", description: "مسافة 20% من حجم الخط" }
                ],
                freeInput: true
            },
            // -------- text-transform --------
            {
                name: "text-transform",
                description: "يحول النص إلى أحرف كبيرة أو صغيرة أو العكس، مفيد لتوحيد تنسيق النصوص",
                values: [
                    { value: "none", description: "يبقي النص كما هو - القيمة الافتراضية" },
                    { value: "uppercase", description: "يحول النص إلى أحرف كبيرة (ABC) - مفيد للعناوين" },
                    { value: "lowercase", description: "يحول النص إلى أحرف صغيرة (abc)" },
                    { value: "capitalize", description: "يكتب الحرف الأول من كل كلمة كبيراً - مفيد لعناوين المقالات" },
                    { value: "full-width", description: "يحول الأحرف إلى عرض كامل (للغة الصينية واليابانية)" },
                    { value: "full-size-kana", description: "يحول أحرف الكانا اليابانية إلى حجم كامل" }
                ]
            },
            // -------- text-indent --------
            {
                name: "text-indent",
                description: "يحدد مسافة بادئة للسطر الأول من النص (مثل بداية الفقرة)",
                values: [
                    { value: "0", description: "بدون بادئة - القيمة الافتراضية" },
                    { value: "5px", description: "إزاحة السطر الأول 5 بكسل إلى اليمين" },
                    { value: "10px", description: "إزاحة 10 بكسل" },
                    { value: "20px", description: "إزاحة 20 بكسل" },
                    { value: "2em", description: "إزاحة السطر الأول بمقدار حرفين" },
                    { value: "1.5em", description: "إزاحة بمقدار 1.5 حرف" },
                    { value: "-20px", description: "إزاحة السطر الأول إلى اليسار (قيمة سالبة) - معلقة" },
                    { value: "10%", description: "10% من عرض العنصر" }
                ],
                freeInput: true
            },
            // -------- text-shadow --------
            {
                name: "text-shadow",
                description: "يضيف ظلاً خلف النص لتحسين القراءة أو للتأثيرات البصرية",
                values: [
                    { value: "none", description: "بدون ظل - القيمة الافتراضية" },
                    { value: "1px 1px 1px rgba(0,0,0,0.1)", description: "ظل خفيف جداً" },
                    { value: "2px 2px 4px rgba(0,0,0,0.3)", description: "ظل أسود شفاف بإزاحة 2 بكسل وضبابية 4 بكسل" },
                    { value: "2px 2px 4px rgba(0,0,0,0.5)", description: "ظل قوي" },
                    { value: "0 0 10px red", description: "ظل أحمر متوهج (Glow)" },
                    { value: "0 0 20px rgba(255,0,0,0.5)", description: "ظل أحمر متوهج شفاف" },
                    { value: "0 0 30px #007bff", description: "ظل أزرق متوهج" },
                    { value: "2px 2px 4px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.3)", description: "ظلال متعددة" },
                    { value: "-2px -2px 4px rgba(255,255,255,0.3)", description: "ظل لأعلى ولليسار (تأثير نتوء)" },
                    { value: "0 -2px 4px rgba(0,0,0,0.2)", description: "ظل للأعلى" },
                    { value: "0 4px 6px rgba(0,0,0,0.2)", description: "ظل طويل للأسفل" }
                ],
                freeInput: true
            },
            // -------- text-overflow --------
            {
                name: "text-overflow",
                description: "يتحكم في كيفية عرض النص الزائد عن حدود العنصر (يجب استخدامه مع overflow: hidden)",
                values: [
                    { value: "clip", description: "يقص النص الزائد - القيمة الافتراضية" },
                    { value: "ellipsis", description: "يضيف علامة ... في نهاية النص المقطوع - الأكثر شيوعاً" },
                    { value: "fade", description: "يخفي النص بتأثير تلاشي عند الحافة" },
                    { value: "\" →\"", description: "نص مخصص يظهر بدلاً من النص المقطوع" }
                ],
                freeInput: true
            },
            // -------- white-space --------
            {
                name: "white-space",
                description: "يتحكم في كيفية تعامل المتصفح مع المسافات البيضاء والأسطر الجديدة في النص",
                values: [
                    { value: "normal", description: "يضم المسافات المتعددة في مسافة واحدة ويلتف النص - القيمة الافتراضية" },
                    { value: "nowrap", description: "يمنع التفاف النص ويبقيه في سطر واحد" },
                    { value: "pre", description: "يحافظ على المسافات والأسطر الجديدة كما هي (مثل <pre>)" },
                    { value: "pre-wrap", description: "يحافظ على المسافات والأسطر الجديدة مع السماح بالتفاف" },
                    { value: "pre-line", description: "يضم المسافات المتعددة لكن يحافظ على الأسطر الجديدة" },
                    { value: "break-spaces", description: "يحافظ على المسافات ويسمح بالتفاف في أي مكان" }
                ]
            },
            // -------- word-break --------
            {
                name: "word-break",
                description: "يحدد كيف يتم كسر الكلمات الطويلة عند نهاية السطر",
                values: [
                    { value: "normal", description: "يكسر وفق قواعد اللغة - القيمة الافتراضية" },
                    { value: "break-all", description: "يكسر الكلمة في أي حرف عند الحاجة - يمنع التجاوز" },
                    { value: "keep-all", description: "لا يكسر الكلمات في اللغات الشرق آسيوية (الصينية، اليابانية، الكورية)" },
                    { value: "break-word", description: "يكسر الكلمة فقط إذا تجاوزت الحد (قديم، استُبدل بـ overflow-wrap)" }
                ]
            },
            // -------- overflow-wrap (النسخة الحديثة من word-wrap) --------
            {
                name: "overflow-wrap",
                description: "يحدد ما إذا كان يمكن كسر الكلمات الطويلة عند نهاية السطر (النسخة الحديثة من word-wrap)",
                values: [
                    { value: "normal", description: "يكسر فقط في المسافات - القيمة الافتراضية" },
                    { value: "break-word", description: "يكسر الكلمة إذا كانت طويلة جداً ولا توجد مسافة" },
                    { value: "anywhere", description: "يكسر الكلمة في أي مكان لتجنب تجاوز الحد" }
                ]
            },
            // -------- hyphens --------
            {
                name: "hyphens",
                description: "يتحكم في وصل الكلمات (شق الكلمات) عند نهاية السطر في النصوص العربية والإنجليزية",
                values: [
                    { value: "none", description: "لا يشق الكلمات - القيمة الافتراضية" },
                    { value: "manual", description: "يشق فقط عند وجود علامة واصل (­)" },
                    { value: "auto", description: "يشق الكلمات تلقائياً حسب قواعد اللغة (يتطلب تحديد اللغة)" }
                ]
            },
            // -------- direction --------
            {
                name: "direction",
                description: "يحدد اتجاه النص (من اليسار إلى اليمين أو العكس)",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين - القيمة الافتراضية (للغة الإنجليزية)" },
                    { value: "rtl", description: "من اليمين إلى اليسار (للغة العربية والعبرية)" }
                ]
            },
            // -------- unicode-bidi --------
            {
                name: "unicode-bidi",
                description: "يتحكم في كيفية عرض النصوص ثنائية الاتجاه (مثل العربية والإنجليزية معاً)",
                values: [
                    { value: "normal", description: "عرض طبيعي - القيمة الافتراضية" },
                    { value: "embed", description: "يدمج النص في سياق اتجاه جديد" },
                    { value: "bidi-override", description: "يتجاوز الاتجاه الطبيعي" },
                    { value: "isolate", description: "يعزل النص عن النصوص المحيطة" },
                    { value: "isolate-override", description: "يعزل ويتجاوز الاتجاه معاً" },
                    { value: "plaintext", description: "يحدد الاتجاه من أول حرف ذو اتجاه قوي" }
                ]
            },
            // -------- writing-mode --------
            {
                name: "writing-mode",
                description: "يحدد اتجاه الكتابة (أفقي من اليسار، أفقي من اليمين، أو عمودي)",
                values: [
                    { value: "horizontal-tb", description: "أفقي من الأعلى إلى الأسفل - القيمة الافتراضية" },
                    { value: "vertical-rl", description: "عمودي من اليمين إلى اليسار (للغات الشرق آسيوية)" },
                    { value: "vertical-lr", description: "عمودي من اليسار إلى اليمين" },
                    { value: "sideways-rl", description: "عمودي مع دوران النص 90 درجة" },
                    { value: "sideways-lr", description: "عمودي مع دوران النص 90 درجة بالاتجاه الآخر" }
                ]
            },
            // -------- text-orientation --------
            {
                name: "text-orientation",
                description: "يتحكم في اتجاه الأحرف في النصوص العمودية (مستخدم مع writing-mode)",
                values: [
                    { value: "mixed", description: "أحرف أفقية وعمودية مختلطة - القيمة الافتراضية" },
                    { value: "upright", description: "جميع الأحرف عمودية (واقفة)" },
                    { value: "sideways", description: "جميع الأحرف مائلة 90 درجة" },
                    { value: "sideways-right", description: "جميع الأحرف مائلة لليمين" }
                ]
            },
            // -------- tab-size --------
            {
                name: "tab-size",
                description: "يحدد عرض حرف التبويب (Tab) بعدد من المسافات",
                values: [
                    { value: "8", description: "عرض 8 مسافات - القيمة الافتراضية في معظم المتصفحات" },
                    { value: "4", description: "عرض 4 مسافات - الأكثر شيوعاً" },
                    { value: "2", description: "عرض مسافتين" },
                    { value: "3", description: "عرض 3 مسافات" }
                ],
                freeInput: true
            },
            // -------- hanging-punctuation --------
            {
                name: "hanging-punctuation",
                description: "يسمح لعلامات الترقيم (مثل التنصيص) بالخروج خارج هامش النص لتحسين المظهر",
                values: [
                    { value: "none", description: "بدون تعليق - القيمة الافتراضية" },
                    { value: "first", description: "تعليق علامات الترقيم في أول السطر" },
                    { value: "last", description: "تعليق علامات الترقيم في آخر السطر" },
                    { value: "allow-end", description: "يسمح بتعليق علامات الترقيم في النهاية" },
                    { value: "force-end", description: "يجبر تعليق علامات الترقيم في النهاية" },
                    { value: "first last", description: "تعليق في البداية والنهاية" }
                ]
            },
            // -------- text-justify --------
            {
                name: "text-justify",
                description: "يحدد طريقة ضبط النص (justify) عند محاذاته، يتحكم في تباعد الكلمات والأحرف",
                values: [
                    { value: "auto", description: "يختار المتصفح الطريقة المناسبة - القيمة الافتراضية" },
                    { value: "none", description: "لا يضبط النص" },
                    { value: "inter-word", description: "يضبط بتباعد الكلمات - مناسب للغات الغربية" },
                    { value: "inter-character", description: "يضبط بتباعد الأحرف - مناسب للغات الشرق آسيوية" },
                    { value: "distribute", description: "يوزع التباعد بين الأحرف" }
                ]
            },
            // -------- text-wrap --------
            {
                name: "text-wrap",
                description: "يتحكم في كيفية التفاف النص عبر عدة أسطر، مع خيارات حديثة تحسّن التوازن البصري للعناوين",
                values: [
                    { value: "wrap", description: "التفاف عادي - القيمة الافتراضية" },
                    { value: "nowrap", description: "بدون التفاف، سطر واحد فقط" },
                    { value: "balance", description: "يوازن عدد الأحرف بين الأسطر لمظهر أجمل (مناسب للعناوين القصيرة)" },
                    { value: "pretty", description: "يتجنب ترك كلمة واحدة يتيمة في آخر سطر (مناسب للفقرات)" }
                ]
            },
            // -------- text-emphasis --------
            {
                name: "text-emphasis",
                description: "يضيف علامة تشديد فوق أو تحت النص (شائعة في الكتابة الآسيوية)",
                values: [
                    { value: "none", description: "بدون تشديد - القيمة الافتراضية" },
                    { value: "filled dot", description: "نقطة مملوءة فوق كل حرف" },
                    { value: "open dot", description: "نقطة فارغة فوق كل حرف" },
                    { value: "filled circle", description: "دائرة مملوءة" },
                    { value: "open circle", description: "دائرة فارغة" },
                    { value: "filled double-circle", description: "دائرتان مملوءتان" },
                    { value: "open double-circle", description: "دائرتان فارغتان" },
                    { value: "filled triangle", description: "مثلث مملوء" },
                    { value: "open triangle", description: "مثلث فارغ" },
                    { value: "filled sesame", description: "سمسمة مملوءة" },
                    { value: "open sesame", description: "سمسمة فارغة" },
                    { value: "filled dot red", description: "نقطة مملوءة حمراء اللون" },
                    { value: "open circle blue", description: "دائرة فارغة زرقاء" }
                ],
                freeInput: true
            },
            // -------- text-emphasis-position --------
            {
                name: "text-emphasis-position",
                description: "يحدد موقع علامة التشديد (فوق أو تحت النص)",
                values: [
                    { value: "over", description: "فوق النص" },
                    { value: "under", description: "تحت النص" },
                    { value: "over right", description: "فوق النص إلى اليمين" },
                    { value: "under right", description: "تحت النص إلى اليمين" }
                ]
            },
            // -------- text-emphasis-color --------
            {
                name: "text-emphasis-color",
                description: "يحدد لون علامة التشديد",
                values: [
                    { value: "currentColor", description: "نفس لون النص - القيمة الافتراضية" },
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" }
                ],
                freeInput: true
            },
            // -------- line-break --------
            {
                name: "line-break",
                description: "يحدد صرامة قواعد التفاف الأسطر، مهم خصوصاً للغات مثل الصينية واليابانية والعربية",
                values: [
                    { value: "auto", description: "القواعد الافتراضية - القيمة الافتراضية" },
                    { value: "loose", description: "قواعد أقل صرامة (سطور أقصر لكن أسهل قراءة)" },
                    { value: "strict", description: "قواعد أكثر صرامة" },
                    { value: "anywhere", description: "يسمح بالكسر في أي مكان عند الحاجة" }
                ]
            },
            // -------- ruby-align --------
            {
                name: "ruby-align",
                description: "يتحكم في محاذاة النص التوضيحي (Ruby) فوق النص الأساسي في اللغات الشرق آسيوية",
                values: [
                    { value: "space-around", description: "توزيع متساوٍ - القيمة الافتراضية" },
                    { value: "start", description: "محاذاة إلى البداية" },
                    { value: "center", description: "محاذاة إلى المنتصف" },
                    { value: "space-between", description: "توزيع مع مسافات" }
                ]
            },
            // -------- ruby-position --------
            {
                name: "ruby-position",
                description: "يحدد موقع النص التوضيحي (Ruby) فوق أو تحت النص الأساسي",
                values: [
                    { value: "over", description: "فوق النص الأساسي" },
                    { value: "under", description: "تحت النص الأساسي" },
                    { value: "inter-character", description: "بين الأحرف (في النصوص العمودية)" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لاستخدام خصائص النصوص والخطوط في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - عنوان أنيق",
                description: "عنوان بتصميم عصري مع ظل وخط تحته",
                values: [
                    { value: ".heading { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); text-decoration: underline wavy #007bff; text-underline-offset: 8px; }", description: "عنوان أنيق مع ظل وخط مموج" }
                ]
            },
            {
                name: "مثال 2 - فقرة مريحة للقراءة",
                description: "فقرة بتنسيق مثالي للقراءة الطويلة",
                values: [
                    { value: ".paragraph { font-family: 'Georgia', serif; font-size: 1.125rem; line-height: 1.8; letter-spacing: 0.02em; text-align: justify; max-width: 700px; }", description: "فقرة مريحة للقراءة" }
                ]
            },
            {
                name: "مثال 3 - نص عربي مع خطوط مناسبة",
                description: "نص عربي بتنسيق صحيح",
                values: [
                    { value: ".arabic-text { font-family: 'Noto Naskh Arabic', 'Amiri', serif; direction: rtl; line-height: 2; font-size: 1.2rem; }", description: "نص عربي منسق" }
                ]
            },
            {
                name: "مثال 4 - تصميم نص مع تأثير النيون",
                description: "نص بتأثير نيون باستخدام text-shadow",
                values: [
                    { value: ".neon-text { color: #fff; font-size: 4rem; font-weight: bold; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff; }", description: "نص بتأثير نيون وردي" }
                ]
            },
            {
                name: "مثال 5 - نص مبتور مع علامة ...",
                description: "نص طويل مبتور مع إضافة ...",
                values: [
                    { value: ".truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }", description: "نص مبتور مع ..." }
                ]
            },
            {
                name: "مثال 6 - خطوط متغيرة (Variable Fonts)",
                description: "استخدام خط متغير مع تحكم في الوزن",
                values: [
                    { value: ".variable-text { font-family: 'VariableFont', sans-serif; font-variation-settings: 'wght' 650, 'wdth' 90; }", description: "خط متغير مع تحكم في الوزن والعرض" }
                ]
            },
            {
                name: "مثال 7 - تأثير الـ Drop Cap",
                description: "الحرف الأول من الفقرة بشكل مميز",
                values: [
                    { value: ".drop-cap::first-letter { font-size: 4em; font-weight: bold; float: left; margin-right: 8px; line-height: 1; color: #007bff; }", description: "الحرف الأول من الفقرة كبير ومميز" }
                ]
            },
            {
                name: "مثال 8 - نص عمودي (Vertical Text)",
                description: "نص يكتب عمودياً من الأعلى للأسفل",
                values: [
                    { value: ".vertical-text { writing-mode: vertical-rl; text-orientation: upright; font-size: 1.5rem; }", description: "نص عمودي" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام خصائص النصوص والخطوط بشكل فعال",
        properties: [
            {
                name: "نصائح اختيار الخطوط",
                description: "نصائح لاختيار الخطوط المناسبة",
                values: [
                    { value: "استخدم خطوط Sans-serif للنصوص الرقمية", description: "أسهل للقراءة على الشاشات" },
                    { value: "استخدم خطوط Serif للطباعة", description: "أفضل للقراءة الطويلة في المطبوعات" },
                    { value: "حدد خطوطاً احتياطية", description: "على الأقل 2-3 خطوط مع عائلة عامة" },
                    { value: "استخدم خطوط عربية مناسبة", description: "Noto Naskh Arabic, Amiri, Cairo" }
                ]
            },
            {
                name: "نصائح أداء النصوص",
                description: "نصائح لتحسين أداء النصوص",
                values: [
                    { value: "استخدم نظام الخطوط (system-ui)", description: "أسرع من تحميل خطوط مخصصة" },
                    { value: "استخدم font-display: swap", description: "يمنع Flash of Invisible Text (FOIT)" },
                    { value: "قلل عدد الخطوط المحملة", description: "كل خط إضافي يزيد وقت التحميل" },
                    { value: "استخدم صيغ WOFF2", description: "أفضل ضغط وأسرع تحميل" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل النصوص قابلة للوصول",
                values: [
                    { value: "استخدم حجم خط لا يقل عن 16px", description: "لتسهيل القراءة" },
                    { value: "حافظ على تباين عالٍ", description: "نسبة تباين 4.5:1 على الأقل" },
                    { value: "استخدم line-height: 1.5", description: "يحسن قراءة النصوص الطويلة" },
                    { value: "لا تستخدم text-transform: uppercase للفقرات", description: "يصعب قراءتها" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام خصائص النصوص والخطوط",
                values: [
                    { value: "نسيان علامات التنصيص حول الخطوط المركبة", description: "'Times New Roman' يحتاج إلى تنصيص" },
                    { value: "استخدام px للطباعة", description: "استخدم pt أو em أو rem للطباعة" },
                    { value: "نسيان font-display", description: "يسبب وميض النص أثناء التحميل" },
                    { value: "استخدام text-decoration: underline على كل الروابط", description: "قد يكون مزعجاً، استخدمه فقط عند التمرير" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.textFontsData = textFontsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = textFontsData;
}