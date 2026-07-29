// ============================================================
// mathml-data.js
// عناصر المعادلات الرياضية (MathML)
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const mathmlData = [
    // ============================================================
    // عناصر MathML الأساسية
    // ============================================================

    // -------- math --------
    {
        tag: "math",
        description: "يحدد منطقة لكتابة المعادلات الرياضية، يعرض الرموز والعمليات الحسابية بشكل احترافي",
        attributes: [
            {
                name: "xmlns",
                description: "يحدد مساحة الأسماء للرسم، يخبر المتصفح بأن هذه معادلة MathML ليتعامل معها بشكل صحيح",
                values: [
                    { value: "http://www.w3.org/1998/Math/MathML", description: "مساحة أسماء MathML" },
                    { value: "http://www.w3.org/1999/xhtml", description: "مساحة أسماء XHTML" }
                ]
            },
            {
                name: "display",
                description: "يحدد إن كانت المعادلة تعرض ضمن سطر النص أو في كتلة منفصلة بحجم أكبر",
                values: [
                    { value: "inline", description: "تعرض المعادلة ضمن سطر النص (الافتراضي)" },
                    { value: "block", description: "تعرض المعادلة في سطر منفصل وبحجم أكبر، مناسب للمعادلات الرئيسية" }
                ]
            },
            {
                name: "mode",
                description: "يحدد وضع عرض المعادلة (قديم، استُبدل بـ display)",
                values: [
                    { value: "inline", description: "وضع ضمن السطر" },
                    { value: "display", description: "وضع كتلة منفصلة" }
                ]
            }
        ]
    },

    // -------- mi --------
    {
        tag: "mi",
        description: "يعرض معرفاً رياضياً مثل متغير (x، y، z)، يظهر بخط مائل لتمييز المتغيرات",
        attributes: [
            {
                name: "mathvariant",
                description: "يغير شكل المتغير الرياضي، يجعله عادياً أو غامقاً أو مائلاً",
                values: [
                    { value: "normal", description: "متغير عادي" },
                    { value: "bold", description: "متغير غامق" },
                    { value: "italic", description: "متغير مائل (الافتراضي)" },
                    { value: "bold-italic", description: "متغير غامق مائل" },
                    { value: "sans-serif", description: "متغير بخط sans-serif" },
                    { value: "bold-sans-serif", description: "متغير غامق بخط sans-serif" },
                    { value: "sans-serif-italic", description: "متغير مائل بخط sans-serif" },
                    { value: "sans-serif-bold-italic", description: "متغير غامق مائل بخط sans-serif" },
                    { value: "monospace", description: "متغير بخط monospace" },
                    { value: "initial", description: "متغير بخط initial" },
                    { value: "tailed", description: "متغير بخط tailed" },
                    { value: "looped", description: "متغير بخط looped" },
                    { value: "stretched", description: "متغير بخط stretched" },
                    { value: "double-struck", description: "متغير بخط double-struck" }
                ]
            },
            {
                name: "fontstyle",
                description: "يحدد نمط الخط (قديم، استُبدل بـ mathvariant)",
                values: [
                    { value: "normal", description: "نمط عادي" },
                    { value: "italic", description: "نمط مائل" }
                ]
            },
            {
                name: "fontweight",
                description: "يحدد سمك الخط (قديم، استُبدل بـ mathvariant)",
                values: [
                    { value: "normal", description: "سمك عادي" },
                    { value: "bold", description: "سمك غامق" }
                ]
            }
        ]
    },

    // -------- mo --------
    {
        tag: "mo",
        description: "يعرض عاملاً رياضياً مثل + أو - أو =، يظهر الرموز الحسابية والعلائقية",
        attributes: [
            {
                name: "form",
                description: "يحدد شكل العامل حسب موقعه (بادئ، متوسط، لاحق)، يغير شكل الرمز حسب السياق",
                values: [
                    { value: "prefix", description: "عامل بادئ (مثل - في -5)" },
                    { value: "infix", description: "عامل متوسط (مثل + في 2+3)" },
                    { value: "postfix", description: "عامل لاحق (مثل ! في 5!)" }
                ]
            },
            {
                name: "fence",
                description: "يحدد أن العامل هو قوس أو فاصل، يعامله كأداة تجميع",
                values: [
                    { value: "true", description: "عامل تجميعي (قوس)" },
                    { value: "false", description: "عامل عادي" }
                ]
            },
            {
                name: "separator",
                description: "يحدد أن العامل هو فاصل (مثل الفاصلة)، يعامله كمحدد بين العناصر",
                values: [
                    { value: "true", description: "عامل فاصل" },
                    { value: "false", description: "عامل عادي" }
                ]
            },
            {
                name: "stretchy",
                description: "يحدد إذا كان العامل يتمدد ليتناسب مع المحتوى المحيط (مثل الأقواس الكبيرة)",
                values: [
                    { value: "true", description: "يتمدد العامل" },
                    { value: "false", description: "لا يتمدد العامل" }
                ]
            },
            {
                name: "symmetric",
                description: "يحدد إذا كان العامل متماثلاً حول المحور الأفقي",
                values: [
                    { value: "true", description: "متماثل" },
                    { value: "false", description: "غير متماثل" }
                ]
            },
            {
                name: "maxsize",
                description: "يحدد الحجم الأقصى للعامل المتمدد",
                values: [
                    { value: "1.2em", description: "حجم أقصى 1.2em" },
                    { value: "infinity", description: "حجم غير محدود" }
                ],
                freeInput: true
            },
            {
                name: "minsize",
                description: "يحدد الحجم الأدنى للعامل المتمدد",
                values: [
                    { value: "0.8em", description: "حجم أدنى 0.8em" },
                    { value: "1em", description: "حجم أدنى 1em" }
                ],
                freeInput: true
            },
            {
                name: "largeop",
                description: "يحدد أن العامل هو عملية كبيرة (مثل ∑, ∏) فتظهر بحجم أكبر",
                values: [
                    { value: "true", description: "عملية كبيرة" },
                    { value: "false", description: "عملية عادية" }
                ]
            },
            {
                name: "movablelimits",
                description: "يحدد إذا كانت حدود العملية الكبيرة تتحرك للخلف في وضع العرض",
                values: [
                    { value: "true", description: "حدود متحركة" },
                    { value: "false", description: "حدود ثابتة" }
                ]
            },
            {
                name: "accent",
                description: "يحدد أن العامل هو علامة نبرة توضع فوق أو تحت العنصر",
                values: [
                    { value: "true", description: "علامة نبرة" },
                    { value: "false", description: "عامل عادي" }
                ]
            }
        ]
    },

    // -------- mn --------
    {
        tag: "mn",
        description: "يعرض عدداً رياضياً (0-9، كسور، أعداد عشرية)، يمثل القيم الرقمية في المعادلات",
        attributes: [
            {
                name: "mathvariant",
                description: "يغير شكل العدد المعروض، يجعله عادياً أو غامقاً",
                values: [
                    { value: "normal", description: "عدد عادي (الافتراضي)" },
                    { value: "bold", description: "عدد غامق" },
                    { value: "sans-serif", description: "عدد بخط sans-serif" },
                    { value: "bold-sans-serif", description: "عدد غامق بخط sans-serif" },
                    { value: "monospace", description: "عدد بخط monospace" },
                    { value: "double-struck", description: "عدد بخط double-struck" }
                ]
            }
        ]
    },

    // -------- mtext --------
    {
        tag: "mtext",
        description: "يعرض نصاً عادياً داخل المعادلة الرياضية، يستخدم للتعليقات أو الشروحات",
        attributes: [
            {
                name: "mathvariant",
                description: "يغير شكل النص الرياضي، يجعله عادياً أو غامقاً",
                values: [
                    { value: "normal", description: "نص عادي" },
                    { value: "bold", description: "نص غامق" },
                    { value: "italic", description: "نص مائل" },
                    { value: "sans-serif", description: "نص بخط sans-serif" },
                    { value: "monospace", description: "نص بخط monospace" }
                ]
            }
        ]
    },

    // -------- mfrac --------
    {
        tag: "mfrac",
        description: "يعرض كسراً رياضياً، يضع بسطاً فوق مقام مع خط فاصل بينهما",
        attributes: [
            {
                name: "linethickness",
                description: "يحدد سمك خط الكسر، يتحكم في ظهور خط الفصل بين البسط والمقام",
                values: [
                    { value: "thin", description: "خط رفيع" },
                    { value: "medium", description: "خط متوسط (الافتراضي)" },
                    { value: "thick", description: "خط سميك" },
                    { value: "0", description: "بدون خط (تظهر كسلسلة)" },
                    { value: "1px", description: "سمك 1 بكسل" },
                    { value: "2px", description: "سمك 2 بكسل" },
                    { value: "0.5px", description: "سمك 0.5 بكسل" },
                    { value: "0.1em", description: "سمك 0.1 em" },
                    { value: "0.2em", description: "سمك 0.2 em" }
                ],
                freeInput: true
            },
            {
                name: "numalign",
                description: "يحدد محاذاة البسط في الكسر، يتحكم في مكان ظهور البسط",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي)" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            },
            {
                name: "denomalign",
                description: "يحدد محاذاة المقام في الكسر، يتحكم في مكان ظهور المقام",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي)" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            },
            {
                name: "bevelled",
                description: "يعرض الكسر بخط مائل بدلاً من الأفقي، يعرض الكسر كـ a/b",
                values: [
                    { value: "true", description: "كسر مائل" },
                    { value: "false", description: "كسر عادي (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- msqrt --------
    {
        tag: "msqrt",
        description: "يعرض جذراً تربيعياً، يضع رمز الجذر فوق المحتوى ويمده فوقه بخط",
        attributes: []
    },

    // -------- mroot --------
    {
        tag: "mroot",
        description: "يعرض جذراً بأي درجة (تكعيبي، رباعي...) مع رقم صغير يحدد درجة الجذر، على عكس msqrt المخصص للجذر التربيعي فقط",
        attributes: []
    },

    // -------- mrow --------
    {
        tag: "mrow",
        description: "يجمع عناصر MathML في صف واحد، يضمن ظهورها جنباً إلى جنب في نفس السطر",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل الصف",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            }
        ]
    },

    // -------- msub --------
    {
        tag: "msub",
        description: "يعرض رمزاً مع نص منخفض (سفلي)، مثل x₁ أو H₂O في الكيمياء",
        attributes: [
            {
                name: "subscriptshift",
                description: "يضبط موضع النص المنخفض رأسياً، يرفع أو يخفض النص السفلي",
                values: [
                    { value: "0.5ex", description: "إزاحة نصف ارتفاع الحرف" },
                    { value: "0.2ex", description: "إزاحة 0.2ex" },
                    { value: "1ex", description: "إزاحة 1ex" },
                    { value: "0.3em", description: "إزاحة 0.3em" },
                    { value: "0.5em", description: "إزاحة 0.5em" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- msup --------
    {
        tag: "msup",
        description: "يعرض رمزاً مع نص مرتفع (علوي)، مثل x² أو الأسس في الرياضيات",
        attributes: [
            {
                name: "superscriptshift",
                description: "يضبط موضع النص المرتفع رأسياً، يرفع أو يخفض النص العلوي",
                values: [
                    { value: "0.5ex", description: "إزاحة نصف ارتفاع الحرف" },
                    { value: "0.2ex", description: "إزاحة 0.2ex" },
                    { value: "1ex", description: "إزاحة 1ex" },
                    { value: "0.3em", description: "إزاحة 0.3em" },
                    { value: "0.5em", description: "إزاحة 0.5em" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- msubsup --------
    {
        tag: "msubsup",
        description: "يعرض رمزاً مع نص منخفض ونص مرتفع معاً، مثل ترميز المتسلسلات",
        attributes: [
            {
                name: "subscriptshift",
                description: "يضبط موضع النص المنخفض رأسياً، يتحكم في مكان النص السفلي",
                values: [
                    { value: "0.5ex", description: "إزاحة نصف ارتفاع الحرف" },
                    { value: "0.2ex", description: "إزاحة 0.2ex" },
                    { value: "1ex", description: "إزاحة 1ex" },
                    { value: "0.3em", description: "إزاحة 0.3em" },
                    { value: "0.5em", description: "إزاحة 0.5em" }
                ],
                freeInput: true
            },
            {
                name: "superscriptshift",
                description: "يضبط موضع النص المرتفع رأسياً، يتحكم في مكان النص العلوي",
                values: [
                    { value: "0.5ex", description: "إزاحة نصف ارتفاع الحرف" },
                    { value: "0.2ex", description: "إزاحة 0.2ex" },
                    { value: "1ex", description: "إزاحة 1ex" },
                    { value: "0.3em", description: "إزاحة 0.3em" },
                    { value: "0.5em", description: "إزاحة 0.5em" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- munder --------
    {
        tag: "munder",
        description: "يضع رمزاً أسفل تعبير رياضي، مثل وضع حد أدنى أسفل المجموع",
        attributes: [
            {
                name: "accentunder",
                description: "يحدد إذا كان الرمز السفلي يعامل كعلامة نبرة سفلية",
                values: [
                    { value: "true", description: "علامة نبرة سفلية" },
                    { value: "false", description: "رمز عادي" }
                ]
            },
            {
                name: "align",
                description: "يحدد محاذاة الرمز السفلي",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي)" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            }
        ]
    },

    // -------- mover --------
    {
        tag: "mover",
        description: "يضع رمزاً فوق تعبير رياضي، مثل وضع حد أقصى فوق المجموع",
        attributes: [
            {
                name: "accent",
                description: "يحدد إذا كان الرمز العلوي يعامل كعلامة نبرة علوية",
                values: [
                    { value: "true", description: "علامة نبرة علوية" },
                    { value: "false", description: "رمز عادي" }
                ]
            },
            {
                name: "align",
                description: "يحدد محاذاة الرمز العلوي",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي)" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            }
        ]
    },

    // -------- munderover --------
    {
        tag: "munderover",
        description: "يضع رمزاً أسفل وفوق تعبير رياضي معاً، مثل وضع حدود دنيا وعليا",
        attributes: [
            {
                name: "accent",
                description: "يحدد إذا كان الرمز العلوي يعامل كعلامة نبرة",
                values: [
                    { value: "true", description: "علامة نبرة" },
                    { value: "false", description: "رمز عادي" }
                ]
            },
            {
                name: "accentunder",
                description: "يحدد إذا كان الرمز السفلي يعامل كعلامة نبرة سفلية",
                values: [
                    { value: "true", description: "علامة نبرة سفلية" },
                    { value: "false", description: "رمز عادي" }
                ]
            },
            {
                name: "align",
                description: "يحدد محاذاة الرموز العلوية والسفلية",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي)" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            }
        ]
    },

    // -------- mfenced --------
    {
        tag: "mfenced",
        description: "يضع أقواساً أو حدوداً حول تعبير رياضي، يحدد نطاق المعادلة",
        attributes: [
            {
                name: "open",
                description: "يحدد رمز الفتح (قوس، براكيت، قيمة مطلقة)، يحدد بداية التجميع",
                values: [
                    { value: "(", description: "قوس دائري فتح" },
                    { value: "[", description: "قوس مربع فتح" },
                    { value: "{", description: "قوس معقوف فتح" },
                    { value: "|", description: "قيمة مطلقة فتح" },
                    { value: "||", description: "معيار فتح" },
                    { value: "<", description: "زاوية فتح" },
                    { value: "〈", description: "زاوية فتح" },
                    { value: "❬", description: "قوس زاوية فتح" }
                ]
            },
            {
                name: "close",
                description: "يحدد رمز الإغلاق (قوس، براكيت، قيمة مطلقة)، يحدد نهاية التجميع",
                values: [
                    { value: ")", description: "قوس دائري إغلاق" },
                    { value: "]", description: "قوس مربع إغلاق" },
                    { value: "}", description: "قوس معقوف إغلاق" },
                    { value: "|", description: "قيمة مطلقة إغلاق" },
                    { value: "||", description: "معيار إغلاق" },
                    { value: ">", description: "زاوية إغلاق" },
                    { value: "〉", description: "زاوية إغلاق" },
                    { value: "❭", description: "قوس زاوية إغلاق" }
                ]
            },
            {
                name: "separators",
                description: "يحدد الرموز الفاصلة بين العناصر داخل الأقواس (مثل الفاصلة)، يحدد كيفية فصل العناصر",
                values: [
                    { value: ",", description: "فاصلة للفصل" },
                    { value: ";", description: "فاصلة منقوطة للفصل" },
                    { value: ":", description: "نقطتان للفصل" },
                    { value: "|", description: "خط عمودي للفصل" },
                    { value: "", description: "بدون فواصل" }
                ]
            }
        ]
    },

    // -------- menclose --------
    {
        tag: "menclose",
        description: "يحيط التعبير الرياضي بإطار أو شكل محدد، يبرز المعادلة أو يجمعها",
        attributes: [
            {
                name: "notation",
                description: "يحدد شكل الإطار المحيط (مستطيل، دائرة، خط مائل)، يتحكم في شكل التجميع",
                values: [
                    { value: "longdiv", description: "قسمة طويلة" },
                    { value: "actuarial", description: "رمز اكتواري" },
                    { value: "radical", description: "جذر" },
                    { value: "box", description: "إطار مستطيل" },
                    { value: "roundedbox", description: "إطار مستطيل مدور" },
                    { value: "circle", description: "إطار دائري" },
                    { value: "left", description: "خط عمودي على اليسار" },
                    { value: "right", description: "خط عمودي على اليمين" },
                    { value: "top", description: "خط أفقي في الأعلى" },
                    { value: "bottom", description: "خط أفقي في الأسفل" },
                    { value: "updiagonalstrike", description: "خط مائل من أسفل اليسار إلى أعلى اليمين" },
                    { value: "downdiagonalstrike", description: "خط مائل من أعلى اليسار إلى أسفل اليمين" },
                    { value: "verticalstrike", description: "خط عمودي عبر المنتصف" },
                    { value: "horizontalstrike", description: "خط أفقي عبر المنتصف" },
                    { value: "madruwb", description: "رمز عربي" },
                    { value: "phasorangle", description: "زاوية فازور" },
                    { value: "dash", description: "إطار متقطع" }
                ]
            },
            {
                name: "position",
                description: "يحدد موضع الإطار",
                values: [
                    { value: "top", description: "في الأعلى" },
                    { value: "bottom", description: "في الأسفل" },
                    { value: "left", description: "على اليسار" },
                    { value: "right", description: "على اليمين" }
                ]
            }
        ]
    },

    // -------- ms --------
    {
        tag: "ms",
        description: "يعرض سلسلة نصية في المعادلة، يستخدم للنصوص التي ليست رموزاً رياضية",
        attributes: [
            {
                name: "lquote",
                description: "يحدد علامة الاقتباس اليمنى، يحدد بداية النص المقتبس",
                values: [
                    { value: "'", description: "اقتباس مفرد" },
                    { value: '"', description: "اقتباس مزدوج" },
                    { value: "`", description: "اقتباس خلفي" }
                ]
            },
            {
                name: "rquote",
                description: "يحدد علامة الاقتباس اليسرى، يحدد نهاية النص المقتبس",
                values: [
                    { value: "'", description: "اقتباس مفرد" },
                    { value: '"', description: "اقتباس مزدوج" },
                    { value: "`", description: "اقتباس خلفي" }
                ]
            }
        ]
    },

    // -------- mtable --------
    {
        tag: "mtable",
        description: "ينشئ جدولاً أو مصفوفة رياضية من صفوف وأعمدة، يستخدم لعرض المصفوفات وأنظمة المعادلات",
        attributes: [
            {
                name: "align",
                description: "يحدد محاذاة الجدول رأسياً بالنسبة للسطر المحيط به",
                values: [
                    { value: "axis", description: "يحاذي الجدول حسب محور الوسط (الافتراضي)" },
                    { value: "top", description: "يحاذي من الأعلى" },
                    { value: "bottom", description: "يحاذي من الأسفل" },
                    { value: "center", description: "يحاذي من المنتصف" },
                    { value: "baseline", description: "يحاذي حسب خط الأساس" }
                ]
            },
            {
                name: "columnalign",
                description: "يحدد محاذاة محتوى كل الأعمدة داخل الجدول",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي)" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            },
            {
                name: "rowalign",
                description: "يحدد محاذاة محتوى كل الصفوف داخل الجدول",
                values: [
                    { value: "top", description: "محاذاة لأعلى" },
                    { value: "center", description: "محاذاة للوسط (الافتراضي)" },
                    { value: "bottom", description: "محاذاة لأسفل" },
                    { value: "baseline", description: "محاذاة حسب خط الأساس" },
                    { value: "axis", description: "محاذاة حسب المحور" }
                ]
            },
            {
                name: "columnspacing",
                description: "يحدد المسافة بين الأعمدة في الجدول",
                values: [
                    { value: "1em", description: "مسافة 1em" },
                    { value: "0.5em", description: "مسافة 0.5em" },
                    { value: "2em", description: "مسافة 2em" }
                ],
                freeInput: true
            },
            {
                name: "rowspacing",
                description: "يحدد المسافة بين الصفوف في الجدول",
                values: [
                    { value: "1em", description: "مسافة 1em" },
                    { value: "0.5em", description: "مسافة 0.5em" },
                    { value: "2em", description: "مسافة 2em" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الجدول",
                values: [
                    { value: "100%", description: "عرض كامل" },
                    { value: "auto", description: "عرض تلقائي" }
                ],
                freeInput: true
            },
            {
                name: "frame",
                description: "يحدد إطار الجدول الخارجي",
                values: [
                    { value: "none", description: "بدون إطار (الافتراضي)" },
                    { value: "solid", description: "إطار صلب" },
                    { value: "dashed", description: "إطار متقطع" }
                ]
            },
            {
                name: "framespacing",
                description: "يحدد المسافة بين الإطار والجدول",
                values: [
                    { value: "0.4em 0.5em", description: "مسافة 0.4em أفقياً و 0.5em عمودياً" }
                ],
                freeInput: true
            },
            {
                name: "equalrows",
                description: "يحدد إذا كانت جميع الصفوف متساوية في الارتفاع",
                values: [
                    { value: "true", description: "صفوف متساوية" },
                    { value: "false", description: "صفوف مختلفة (الافتراضي)" }
                ]
            },
            {
                name: "equalcolumns",
                description: "يحدد إذا كانت جميع الأعمدة متساوية في العرض",
                values: [
                    { value: "true", description: "أعمدة متساوية" },
                    { value: "false", description: "أعمدة مختلفة (الافتراضي)" }
                ]
            },
            {
                name: "displaystyle",
                description: "يحدد إذا كانت المعادلات داخل الجدول تعرض بحجم العرض",
                values: [
                    { value: "true", description: "نمط عرض" },
                    { value: "false", description: "نمط نص (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- mtr --------
    {
        tag: "mtr",
        description: "يمثل صفاً واحداً داخل جدول mtable الرياضي، يحتوي على خلايا mtd لهذا الصف",
        attributes: [
            {
                name: "rowalign",
                description: "يحدد محاذاة هذا الصف تحديداً",
                values: [
                    { value: "top", description: "محاذاة لأعلى" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "bottom", description: "محاذاة لأسفل" },
                    { value: "baseline", description: "محاذاة حسب خط الأساس" },
                    { value: "axis", description: "محاذاة حسب المحور" }
                ]
            },
            {
                name: "columnalign",
                description: "يحدد محاذاة أعمدة هذا الصف تحديداً",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            }
        ]
    },

    // -------- mtd --------
    {
        tag: "mtd",
        description: "يمثل خلية واحدة داخل صف mtr في الجدول الرياضي، تحمل قيمة أو تعبيراً واحداً من المصفوفة",
        attributes: [
            {
                name: "columnspan",
                description: "يوسع الخلية لتغطي عدداً من الأعمدة، يدمج خلايا عدة أعمدة في خلية واحدة",
                values: [
                    { value: "2", description: "يمتد على عمودين" },
                    { value: "3", description: "يمتد على 3 أعمدة" },
                    { value: "4", description: "يمتد على 4 أعمدة" },
                    { value: "5", description: "يمتد على 5 أعمدة" }
                ],
                freeInput: true
            },
            {
                name: "rowspan",
                description: "يوسع الخلية لتغطي عدداً من الصفوف، يدمج خلايا عدة صفوف في خلية واحدة",
                values: [
                    { value: "2", description: "يمتد على صفين" },
                    { value: "3", description: "يمتد على 3 صفوف" },
                    { value: "4", description: "يمتد على 4 صفوف" },
                    { value: "5", description: "يمتد على 5 صفوف" }
                ],
                freeInput: true
            },
            {
                name: "rowalign",
                description: "يحدد محاذاة هذه الخلية تحديداً",
                values: [
                    { value: "top", description: "محاذاة لأعلى" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "bottom", description: "محاذاة لأسفل" },
                    { value: "baseline", description: "محاذاة حسب خط الأساس" },
                    { value: "axis", description: "محاذاة حسب المحور" }
                ]
            },
            {
                name: "columnalign",
                description: "يحدد محاذاة هذه الخلية تحديداً",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            }
        ]
    },

    // -------- mspace --------
    {
        tag: "mspace",
        description: "يضيف مسافة فارغة بأبعاد محددة داخل المعادلة، يستخدم للتحكم اليدوي بالمسافات بين الرموز",
        attributes: [
            {
                name: "width",
                description: "يحدد عرض المسافة الفارغة",
                values: [
                    { value: "0.1em", description: "مسافة 0.1em" },
                    { value: "0.2em", description: "مسافة 0.2em" },
                    { value: "0.3em", description: "مسافة 0.3em" },
                    { value: "0.5em", description: "مسافة 0.5em" },
                    { value: "1em", description: "مسافة بعرض حرف واحد تقريباً" },
                    { value: "2em", description: "مسافة 2em" },
                    { value: "1ex", description: "مسافة 1ex" },
                    { value: "1px", description: "مسافة 1 بكسل" },
                    { value: "5px", description: "مسافة 5 بكسل" },
                    { value: "10px", description: "مسافة 10 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع المسافة الفارغة فوق خط الأساس",
                values: [
                    { value: "0.1ex", description: "ارتفاع 0.1ex" },
                    { value: "0.5ex", description: "ارتفاع 0.5ex" },
                    { value: "1ex", description: "ارتفاع بمقدار ارتفاع حرف صغير" },
                    { value: "2ex", description: "ارتفاع 2ex" }
                ],
                freeInput: true
            },
            {
                name: "depth",
                description: "يحدد عمق المسافة الفارغة تحت خط الأساس",
                values: [
                    { value: "0.1ex", description: "عمق 0.1ex" },
                    { value: "0.5ex", description: "عمق 0.5ex" },
                    { value: "1ex", description: "عمق 1ex" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- mphantom --------
    {
        tag: "mphantom",
        description: "يحجز نفس مساحة محتواه دون أن يظهره فعلياً، يستخدم لمحاذاة عناصر معادلة أخرى بشكل دقيق",
        attributes: []
    },

    // -------- mstyle --------
    {
        tag: "mstyle",
        description: "يطبق إعدادات تنسيق مشتركة (اللون، الحجم) على كل ما بداخله من عناصر المعادلة دفعة واحدة",
        attributes: [
            {
                name: "mathcolor",
                description: "يحدد لون كل الرموز والنصوص داخل هذا العنصر",
                values: [
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#3498db", description: "لون أزرق" },
                    { value: "#e74c3c", description: "لون أحمر" },
                    { value: "#2ecc71", description: "لون أخضر" },
                    { value: "#f39c12", description: "لون برتقالي" },
                    { value: "#9b59b6", description: "لون بنفسجي" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "mathbackground",
                description: "يحدد لون خلفية كل الرموز والنصوص داخل هذا العنصر",
                values: [
                    { value: "#ffffff", description: "خلفية بيضاء" },
                    { value: "#ffffcc", description: "خلفية صفراء فاتحة" },
                    { value: "#ffcccc", description: "خلفية حمراء فاتحة" },
                    { value: "red", description: "خلفية حمراء" },
                    { value: "blue", description: "خلفية زرقاء" },
                    { value: "yellow", description: "خلفية صفراء" }
                ],
                freeInput: true
            },
            {
                name: "mathsize",
                description: "يحدد حجم كل الرموز والنصوص داخل هذا العنصر",
                values: [
                    { value: "small", description: "حجم صغير" },
                    { value: "normal", description: "حجم عادي (الافتراضي)" },
                    { value: "big", description: "حجم كبير" },
                    { value: "1em", description: "حجم 1em" },
                    { value: "1.2em", description: "حجم 1.2em" },
                    { value: "1.5em", description: "حجم 1.5em" },
                    { value: "2em", description: "حجم 2em" },
                    { value: "0.8em", description: "حجم 0.8em" }
                ]
            },
            {
                name: "fontfamily",
                description: "يحدد نوع الخط لكل الرموز والنصوص داخل هذا العنصر",
                values: [
                    { value: "Arial", description: "خط Arial" },
                    { value: "Times New Roman", description: "خط Times New Roman" },
                    { value: "Courier New", description: "خط Courier New" },
                    { value: "Verdana", description: "خط Verdana" }
                ],
                freeInput: true
            },
            {
                name: "fontweight",
                description: "يحدد سمك الخط لكل الرموز والنصوص داخل هذا العنصر",
                values: [
                    { value: "normal", description: "سمك عادي" },
                    { value: "bold", description: "سمك غامق" }
                ]
            },
            {
                name: "fontstyle",
                description: "يحدد نمط الخط لكل الرموز والنصوص داخل هذا العنصر",
                values: [
                    { value: "normal", description: "نمط عادي" },
                    { value: "italic", description: "نمط مائل" }
                ]
            },
            {
                name: "displaystyle",
                description: "يحدد إذا كانت المعادلات تعرض بحجم العرض",
                values: [
                    { value: "true", description: "نمط عرض" },
                    { value: "false", description: "نمط نص" }
                ]
            },
            {
                name: "scriptlevel",
                description: "يحدد مستوى النص (للنصوص الصغيرة والمرتفعات)",
                values: [
                    { value: "0", description: "المستوى 0" },
                    { value: "1", description: "المستوى 1" },
                    { value: "2", description: "المستوى 2" },
                    { value: "-1", description: "المستوى -1" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- maction --------
    {
        tag: "maction",
        description: "يسمح بإنشاء تفاعلات داخل المعادلة (إظهار/إخفاء، تغيير عند النقر)، يضيف حركة أو تفاعلاً للمعادلة",
        attributes: [
            {
                name: "actiontype",
                description: "يحدد نوع التفاعل المطلوب عند النقر أو التفاعل مع المعادلة",
                values: [
                    { value: "toggle", description: "يبدل بين المحتويات عند النقر" },
                    { value: "statusline", description: "يظهر نصاً في شريط الحالة عند النقر" },
                    { value: "tooltip", description: "يظهر تلميحاً عند تمرير الماوس" },
                    { value: "highlight", description: "يبرز المحتوى عند النقر" }
                ]
            }
        ]
    },

    // -------- merror --------
    {
        tag: "merror",
        description: "يعرض رسالة خطأ في المعادلة عندما تكون الصياغة الرياضية غير صحيحة، يوضح مكان المشكلة",
        attributes: []
    },

    // -------- malign --------
    {
        tag: "malign",
        description: "يحدد نقطة محاذاة داخل التعبير، يستخدم لمحاذاة المعادلات المعقدة",
        attributes: [
            {
                name: "edge",
                description: "يحدد الحافة التي تتم المحاذاة عليها",
                values: [
                    { value: "left", description: "الحافة اليسرى" },
                    { value: "right", description: "الحافة اليمنى" }
                ]
            }
        ]
    },

    // -------- maligngroup --------
    {
        tag: "maligngroup",
        description: "يجمع عناصر المحاذاة في مجموعة واحدة، يستخدم لمحاذاة المعادلات المعقدة معاً",
        attributes: [
            {
                name: "groupalign",
                description: "يحدد محاذاة المجموعة",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "center", description: "محاذاة للوسط" },
                    { value: "right", description: "محاذاة لليمين" }
                ]
            }
        ]
    },

    // -------- malignmark --------
    {
        tag: "malignmark",
        description: "يضع علامة محاذاة في التعبير، تساعد في محاذاة المعادلات المعقدة",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً لعلامة المحاذاة",
                values: [
                    { value: "mark1", description: "معرف العلامة" },
                    { value: "align1", description: "معرف المحاذاة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- semantics --------
    {
        tag: "semantics",
        description: "يضيف معلومات دلالية إضافية للمعادلة للبرامج التي تقرأ الرياضيات آلياً، يخزن معاني إضافية",
        attributes: []
    },

    // -------- annotation --------
    {
        tag: "annotation",
        description: "يخزن معلومة إضافية مثل التمثيل النصي للمعادلة بصيغة مثل LaTeX، يوضح معنى المعادلة",
        attributes: [
            {
                name: "encoding",
                description: "يحدد نوع الترميز المستخدم في التعليق (مثل LaTeX، XML)، يحدد كيفية قراءة البيانات الإضافية",
                values: [
                    { value: "application/x-latex", description: "ترميز LaTeX" },
                    { value: "application/xml", description: "ترميز XML" },
                    { value: "text/plain", description: "نص عادي" }
                ]
            }
        ]
    },

    // -------- annotation-xml --------
    {
        tag: "annotation-xml",
        description: "يخزن معلومة إضافية بصيغة XML للمعادلة، يستخدم لتخزين البيانات الدلالية",
        attributes: [
            {
                name: "encoding",
                description: "يحدد نوع الترميز المستخدم في التعليق XML",
                values: [
                    { value: "application/x-latex", description: "ترميز LaTeX" },
                    { value: "MathML-Presentation", description: "ترميز MathML Presentation" },
                    { value: "MathML-Content", description: "ترميز MathML Content" }
                ]
            }
        ]
    },

    // -------- none --------
    {
        tag: "none",
        description: "يستخدم كمكان فارغ (لا شيء) في الحالات التي تتطلب عنصراً فارغاً، مثل تعبئة مكان في جدول",
        attributes: []
    },

    // -------- mpadded --------
    {
        tag: "mpadded",
        description: "يغير أبعاد محتواه بإضافة أو طرح مسافات، يستخدم لضبط حجم العناصر في المعادلة",
        attributes: [
            {
                name: "width",
                description: "يضبط عرض المحتوى بإضافة أو طرح مسافات",
                values: [
                    { value: "+0.2em", description: "إضافة 0.2em" },
                    { value: "-0.1em", description: "طرح 0.1em" },
                    { value: "1.2em", description: "تعيين مباشر 1.2em" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يضبط ارتفاع المحتوى بإضافة أو طرح مسافات",
                values: [
                    { value: "+0.2em", description: "إضافة 0.2em" },
                    { value: "-0.1em", description: "طرح 0.1em" }
                ],
                freeInput: true
            },
            {
                name: "depth",
                description: "يضبط عمق المحتوى بإضافة أو طرح مسافات",
                values: [
                    { value: "+0.2em", description: "إضافة 0.2em" },
                    { value: "-0.1em", description: "طرح 0.1em" }
                ],
                freeInput: true
            },
            {
                name: "lspace",
                description: "يضبط المسافة اليسرى للمحتوى",
                values: [
                    { value: "+0.2em", description: "إضافة 0.2em" },
                    { value: "0.5em", description: "تعيين 0.5em" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- mfraction --------
    {
        tag: "mfraction",
        description: "مرادف لـ mfrac للتوافق، يعرض كسراً رياضياً",
        attributes: [
            {
                name: "linethickness",
                description: "يحدد سمك خط الكسر",
                values: [
                    { value: "thin", description: "خط رفيع" },
                    { value: "medium", description: "خط متوسط" },
                    { value: "thick", description: "خط سميك" },
                    { value: "0", description: "بدون خط" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- mlabeledsomething --------
    {
        tag: "mlabeledtr",
        description: "يضيف تسمية لصف في الجدول الرياضي، يستخدم لترقيم المعادلات",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للصف المسمى",
                values: [
                    { value: "eq1", description: "معرف المعادلة" },
                    { value: "eq2", description: "معرف المعادلة الثانية" }
                ],
                freeInput: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.mathmlData = mathmlData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mathmlData;
}