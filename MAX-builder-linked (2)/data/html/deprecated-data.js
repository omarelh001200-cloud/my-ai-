// ============================================================
// deprecated-data.js
// العناصر المهملة (تحذير - لا تستخدمها)
// شرح الوظيفة السابقة ولماذا تم إهمالها مع البدائل الحديثة
// ============================================================

const deprecatedData = [
    // ============================================================
    // 1. عنصر <center>
    // ============================================================
    {
        tag: "center",
        description: "⚠️ عنصر مهمل - كان يوسّط المحتوى أفقياً في الصفحة. تم إهماله لأن التنسيق يجب أن يكون عبر CSS وليس في هيكل HTML",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر (يسار إلى يمين أو يمين إلى يسار)",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين (للغة الإنجليزية والعبرية)" },
                    { value: "rtl", description: "من اليمين إلى اليسار (للغة العربية والفارسية)" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر، يساعد في أدوات الترجمة وقارئات الشاشة",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" },
                    { value: "fr", description: "اللغة الفرنسية" },
                    { value: "es", description: "اللغة الإسبانية" },
                    { value: "de", description: "اللغة الألمانية" },
                    { value: "it", description: "اللغة الإيطالية" },
                    { value: "pt", description: "اللغة البرتغالية" },
                    { value: "ru", description: "اللغة الروسية" },
                    { value: "ja", description: "اللغة اليابانية" },
                    { value: "zh", description: "اللغة الصينية" },
                    { value: "ko", description: "اللغة الكورية" },
                    { value: "hi", description: "اللغة الهندية" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يحدد اسم فئة CSS لتطبيق أنماط مخصصة على العنصر",
                values: [],
                freeInput: true
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعنصر يمكن استخدامه في CSS أو JavaScript",
                values: [],
                freeInput: true
            },
            {
                name: "style",
                description: "يسمح بإضافة أنماط CSS مباشرة على العنصر",
                values: [],
                freeInput: true
            },
            {
                name: "title",
                description: "يضيف تلميحاً يظهر عند تمرير الماوس فوق العنصر",
                values: [],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS: text-align: center",
        severity: "high",
        removalVersion: "HTML 4.0 (تم إهماله رسمياً منذ 1997)"
    },

    // ============================================================
    // 2. عنصر <font>
    // ============================================================
    {
        tag: "font",
        description: "⚠️ عنصر مهمل - كان يحدد لون وحجم ونوع الخط للنص. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
        attributes: [
            {
                name: "color",
                description: "يحدد لون النص. يجب استخدام خاصية color في CSS بدلاً منه",
                values: [
                    { value: "red", description: "لون أحمر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "green", description: "لون أخضر" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "black", description: "لون أسود" },
                    { value: "white", description: "لون أبيض" },
                    { value: "gray", description: "لون رمادي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "brown", description: "لون بني" },
                    { value: "#FF0000", description: "أحمر (كود Hex)" },
                    { value: "#00FF00", description: "أخضر (كود Hex)" },
                    { value: "#0000FF", description: "أزرق (كود Hex)" },
                    { value: "#FFFF00", description: "أصفر (كود Hex)" },
                    { value: "#000000", description: "أسود (كود Hex)" },
                    { value: "#FFFFFF", description: "أبيض (كود Hex)" },
                    { value: "#FFA500", description: "برتقالي (كود Hex)" },
                    { value: "#800080", description: "بنفسجي (كود Hex)" },
                    { value: "#FFC0CB", description: "وردي (كود Hex)" },
                    { value: "#A52A2A", description: "بني (كود Hex)" },
                    { value: "#808080", description: "رمادي (كود Hex)" },
                    { value: "#C0C0C0", description: "فضي (كود Hex)" },
                    { value: "#FF69B4", description: "وردي ساخن (كود Hex)" },
                    { value: "#00FFFF", description: "سماوي (كود Hex)" },
                    { value: "#FF00FF", description: "أرجواني (كود Hex)" }
                ],
                freeInput: true
            },
            {
                name: "face",
                description: "يحدد نوع الخط المستخدم للنص. يجب استخدام font-family في CSS بدلاً منه",
                values: [
                    { value: "Arial", description: "خط Arial - شائع وسهل القراءة" },
                    { value: "Arial Black", description: "خط Arial Black - خط غامق" },
                    { value: "Helvetica", description: "خط Helvetica - مشابه لـ Arial" },
                    { value: "Times New Roman", description: "خط Times New Roman - يستخدم في النصوص المطبوعة" },
                    { value: "Times", description: "خط Times - مشابه لـ Times New Roman" },
                    { value: "Georgia", description: "خط Georgia - خط serif ممتاز للشاشات" },
                    { value: "Verdana", description: "خط Verdana - واضح على الشاشات" },
                    { value: "Tahoma", description: "خط Tahoma - يدعم العربية بشكل جيد" },
                    { value: "Trebuchet MS", description: "خط Trebuchet MS - خط sans-serif جميل" },
                    { value: "Courier New", description: "خط Courier New - خط أحادي التباعد" },
                    { value: "Courier", description: "خط Courier - خط أحادي التباعد" },
                    { value: "Impact", description: "خط Impact - خط غامق ومضغوط" },
                    { value: "Comic Sans MS", description: "خط Comic Sans MS - خط غير رسمي" },
                    { value: "Traditional Arabic", description: "خط عربي تقليدي" },
                    { value: "Arial Unicode MS", description: "خط يدعم أحرف يونيكود" },
                    { value: "Lucida Grande", description: "خط Lucida Grande - خط جميل على ماك" },
                    { value: "Geneva", description: "خط Geneva - خط sans-serif" },
                    { value: "Palatino", description: "خط Palatino - خط serif كلاسيكي" },
                    { value: "Bookman", description: "خط Bookman - خط serif مريح للقراءة" },
                    { value: "New York", description: "خط New York - خط serif لأجهزة آبل" },
                    { value: "SF Pro", description: "خط SF Pro - الخط الرسمي لأجهزة آبل" },
                    { value: "Roboto", description: "خط Roboto - الخط الرسمي لأندرويد" },
                    { value: "Open Sans", description: "خط Open Sans - شائع ومفتوح المصدر" },
                    { value: "Lato", description: "خط Lato - خط sans-serif شائع" },
                    { value: "Montserrat", description: "خط Montserrat - خط sans-serif عصري" },
                    { value: "Raleway", description: "خط Raleway - خط sans-serif أنيق" },
                    { value: "Merriweather", description: "خط Merriweather - خط serif ممتاز للقراءة" },
                    { value: "Playfair Display", description: "خط Playfair Display - خط serif راقٍ" },
                    { value: "Ubuntu", description: "خط Ubuntu - خط sans-serif مفتوح المصدر" },
                    { value: "Noto Sans", description: "خط Noto Sans - خط يدعم كل لغات العالم" }
                ],
                freeInput: true
            },
            {
                name: "size",
                description: "يحدد حجم الخط من 1 إلى 7. يجب استخدام font-size في CSS بدلاً منه",
                values: [
                    { value: "1", description: "أصغر حجم (صغير جداً - ≈10px)" },
                    { value: "2", description: "حجم صغير (≈12px)" },
                    { value: "3", description: "الحجم الافتراضي (≈14px)" },
                    { value: "4", description: "حجم متوسط (≈16px)" },
                    { value: "5", description: "حجم كبير (≈18px)" },
                    { value: "6", description: "حجم كبير جداً (≈22px)" },
                    { value: "7", description: "أكبر حجم (كبير جداً - ≈26px)" },
                    { value: "+1", description: "يكبر النص بمقدار درجة واحدة" },
                    { value: "+2", description: "يكبر النص بمقدار درجتين" },
                    { value: "-1", description: "يصغر النص بمقدار درجة واحدة" },
                    { value: "-2", description: "يصغر النص بمقدار درجتين" }
                ],
                freeInput: true
            },
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" },
                    { value: "fr", description: "اللغة الفرنسية" },
                    { value: "es", description: "اللغة الإسبانية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS: color, font-size, font-family",
        severity: "high",
        removalVersion: "HTML 4.0 (تم إهماله رسمياً منذ 1997)"
    },

    // ============================================================
    // 3. عنصر <big>
    // ============================================================
    {
        tag: "big",
        description: "⚠️ عنصر مهمل - كان يكبّر حجم النص مقارنة بالنص المحيط به. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS: font-size: larger",
        severity: "medium",
        removalVersion: "HTML 5 (تم إهماله في 2014)"
    },

    // ============================================================
    // 4. عنصر <strike>
    // ============================================================
    {
        tag: "strike",
        description: "⚠️ عنصر مهمل - كان يشطب النص بخط في وسطه. تم إهماله لوجود بدائل أفضل وأكثر دلالية",
        attributes: [
            {
                name: "cite",
                description: "يحدد رابطاً يشرح سبب شطب النص (مثل رابط سياسة التعديل)",
                values: [],
                freeInput: true
            },
            {
                name: "datetime",
                description: "يحدد تاريخ ووقت شطب النص بتنسيق ISO (YYYY-MM-DDTHH:MM:SS)",
                values: [
                    { value: "2024-01-15", description: "تاريخ الشطب" },
                    { value: "2024-01-15T14:30:00", description: "تاريخ ووقت الشطب" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <s> أو <del> أو CSS: text-decoration: line-through",
        severity: "medium",
        removalVersion: "HTML 4.0 (تم إهماله منذ 1997، وحل محله <del> و <s>)"
    },

    // ============================================================
    // 5. عنصر <tt>
    // ============================================================
    {
        tag: "tt",
        description: "⚠️ عنصر مهمل - كان يعرض نصاً بخط أحادي التباعد (Teletype). تم إهماله لوجود بدائل أفضل",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <code> أو <kbd> أو <samp> أو CSS: font-family: monospace",
        severity: "medium",
        removalVersion: "HTML 5 (تم إهماله في 2014)"
    },

    // ============================================================
    // 6. عنصر <marquee>
    // ============================================================
    {
        tag: "marquee",
        description: "⚠️ عنصر مهمل - كان يجعل النص يتحرك عبر الشاشة (نص متحرك). تم إهماله لأنه غير موصى به لإزعاجه للمستخدمين وتأثيره السلبي على إمكانية الوصول",
        attributes: [
            {
                name: "behavior",
                description: "يحدد نمط حركة النص",
                values: [
                    { value: "scroll", description: "يمر النص ويعاود الظهور من البداية (حركة مستمرة)" },
                    { value: "slide", description: "ينزلق النص مرة واحدة ثم يتوقف عند الحافة" },
                    { value: "alternate", description: "يتحرك النص ذهاباً وإياباً (كالبندول)" }
                ]
            },
            {
                name: "direction",
                description: "يحدد اتجاه حركة النص",
                values: [
                    { value: "left", description: "يتحرك النص من اليمين إلى اليسار" },
                    { value: "right", description: "يتحرك النص من اليسار إلى اليمين" },
                    { value: "up", description: "يتحرك النص من الأسفل إلى الأعلى" },
                    { value: "down", description: "يتحرك النص من الأعلى إلى الأسفل" }
                ]
            },
            {
                name: "scrollamount",
                description: "يحدد سرعة الحركة بوحدة البكسل لكل خطوة. القيم الأعلى = حركة أسرع",
                values: [
                    { value: "1", description: "حركة بطيئة جداً (≈1px لكل خطوة)" },
                    { value: "2", description: "حركة بطيئة جداً (≈2px لكل خطوة)" },
                    { value: "3", description: "حركة بطيئة (≈3px لكل خطوة)" },
                    { value: "4", description: "حركة بطيئة (≈4px لكل خطوة)" },
                    { value: "5", description: "حركة بطيئة (≈5px لكل خطوة)" },
                    { value: "6", description: "حركة متوسطة (≈6px لكل خطوة)" },
                    { value: "7", description: "حركة متوسطة (≈7px لكل خطوة)" },
                    { value: "8", description: "حركة متوسطة (≈8px لكل خطوة)" },
                    { value: "9", description: "حركة متوسطة (≈9px لكل خطوة)" },
                    { value: "10", description: "حركة سريعة (≈10px لكل خطوة)" },
                    { value: "12", description: "حركة سريعة (≈12px لكل خطوة)" },
                    { value: "15", description: "حركة سريعة (≈15px لكل خطوة)" },
                    { value: "20", description: "حركة سريعة جداً (≈20px لكل خطوة)" },
                    { value: "25", description: "حركة سريعة جداً (≈25px لكل خطوة)" },
                    { value: "30", description: "حركة سريعة جداً (≈30px لكل خطوة)" },
                    { value: "40", description: "حركة سريعة جداً (≈40px لكل خطوة)" },
                    { value: "50", description: "حركة سريعة جداً (≈50px لكل خطوة)" }
                ],
                freeInput: true
            },
            {
                name: "scrolldelay",
                description: "يحدد التأخير بالميلي ثانية بين كل خطوة حركة. القيم الأعلى = حركة أبطأ",
                values: [
                    { value: "10", description: "تأخير 10 ميللي ثانية (≈100 حركة/ثانية)" },
                    { value: "20", description: "تأخير 20 ميللي ثانية (≈50 حركة/ثانية)" },
                    { value: "30", description: "تأخير 30 ميللي ثانية (≈33 حركة/ثانية)" },
                    { value: "40", description: "تأخير 40 ميللي ثانية (≈25 حركة/ثانية)" },
                    { value: "50", description: "تأخير 50 ميللي ثانية (≈20 حركة/ثانية)" },
                    { value: "60", description: "تأخير 60 ميللي ثانية (≈16 حركة/ثانية) - قيمة افتراضية" },
                    { value: "80", description: "تأخير 80 ميللي ثانية (≈12.5 حركة/ثانية)" },
                    { value: "100", description: "تأخير 100 ميللي ثانية (≈10 حركات/ثانية)" },
                    { value: "120", description: "تأخير 120 ميللي ثانية (≈8 حركات/ثانية)" },
                    { value: "150", description: "تأخير 150 ميللي ثانية (≈6.6 حركات/ثانية)" },
                    { value: "200", description: "تأخير 200 ميللي ثانية (≈5 حركات/ثانية)" },
                    { value: "250", description: "تأخير 250 ميللي ثانية (≈4 حركات/ثانية)" },
                    { value: "300", description: "تأخير 300 ميللي ثانية (≈3.3 حركات/ثانية)" },
                    { value: "400", description: "تأخير 400 ميللي ثانية (≈2.5 حركة/ثانية)" },
                    { value: "500", description: "تأخير 500 ميللي ثانية (≈2 حركة/ثانية)" }
                ],
                freeInput: true
            },
            {
                name: "loop",
                description: "يحدد عدد مرات تكرار الحركة. -1 يعني تكرار لا نهائي",
                values: [
                    { value: "-1", description: "تكرار لا نهائي (∞)" },
                    { value: "0", description: "تكرار لا نهائي (∞)" },
                    { value: "1", description: "مرة واحدة فقط" },
                    { value: "2", description: "مرتين" },
                    { value: "3", description: "ثلاث مرات" },
                    { value: "4", description: "أربع مرات" },
                    { value: "5", description: "خمس مرات" },
                    { value: "10", description: "عشر مرات" },
                    { value: "20", description: "عشرون مرة" },
                    { value: "50", description: "خمسون مرة" },
                    { value: "100", description: "مائة مرة" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض شريط الحركة",
                values: [
                    { value: "100%", description: "عرض كامل الصفحة" },
                    { value: "90%", description: "90% من عرض الصفحة" },
                    { value: "80%", description: "80% من عرض الصفحة" },
                    { value: "75%", description: "75% من عرض الصفحة" },
                    { value: "70%", description: "70% من عرض الصفحة" },
                    { value: "60%", description: "60% من عرض الصفحة" },
                    { value: "50%", description: "نصف عرض الصفحة" },
                    { value: "40%", description: "40% من عرض الصفحة" },
                    { value: "30%", description: "30% من عرض الصفحة" },
                    { value: "25%", description: "ربع عرض الصفحة" },
                    { value: "20%", description: "20% من عرض الصفحة" },
                    { value: "10%", description: "10% من عرض الصفحة" },
                    { value: "100px", description: "عرض 100 بكسل" },
                    { value: "150px", description: "عرض 150 بكسل" },
                    { value: "200px", description: "عرض 200 بكسل" },
                    { value: "250px", description: "عرض 250 بكسل" },
                    { value: "300px", description: "عرض 300 بكسل" },
                    { value: "350px", description: "عرض 350 بكسل" },
                    { value: "400px", description: "عرض 400 بكسل" },
                    { value: "450px", description: "عرض 450 بكسل" },
                    { value: "500px", description: "عرض 500 بكسل" },
                    { value: "600px", description: "عرض 600 بكسل" },
                    { value: "700px", description: "عرض 700 بكسل" },
                    { value: "800px", description: "عرض 800 بكسل" },
                    { value: "900px", description: "عرض 900 بكسل" },
                    { value: "1000px", description: "عرض 1000 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع شريط الحركة",
                values: [
                    { value: "10px", description: "ارتفاع 10 بكسل" },
                    { value: "15px", description: "ارتفاع 15 بكسل" },
                    { value: "20px", description: "ارتفاع 20 بكسل" },
                    { value: "25px", description: "ارتفاع 25 بكسل" },
                    { value: "30px", description: "ارتفاع 30 بكسل" },
                    { value: "35px", description: "ارتفاع 35 بكسل" },
                    { value: "40px", description: "ارتفاع 40 بكسل" },
                    { value: "45px", description: "ارتفاع 45 بكسل" },
                    { value: "50px", description: "ارتفاع 50 بكسل" },
                    { value: "55px", description: "ارتفاع 55 بكسل" },
                    { value: "60px", description: "ارتفاع 60 بكسل" },
                    { value: "70px", description: "ارتفاع 70 بكسل" },
                    { value: "80px", description: "ارتفاع 80 بكسل" },
                    { value: "90px", description: "ارتفاع 90 بكسل" },
                    { value: "100px", description: "ارتفاع 100 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "bgcolor",
                description: "يحدد لون خلفية شريط الحركة",
                values: [
                    { value: "transparent", description: "خلفية شفافة" },
                    { value: "yellow", description: "خلفية صفراء" },
                    { value: "lightyellow", description: "خلفية صفراء فاتحة" },
                    { value: "gold", description: "خلفية ذهبية" },
                    { value: "orange", description: "خلفية برتقالية" },
                    { value: "lightblue", description: "خلفية زرقاء فاتحة" },
                    { value: "blue", description: "خلفية زرقاء" },
                    { value: "lightgreen", description: "خلفية خضراء فاتحة" },
                    { value: "green", description: "خلفية خضراء" },
                    { value: "lightpink", description: "خلفية وردية فاتحة" },
                    { value: "pink", description: "خلفية وردية" },
                    { value: "white", description: "خلفية بيضاء" },
                    { value: "gray", description: "خلفية رمادية" },
                    { value: "lightgray", description: "خلفية رمادية فاتحة" },
                    { value: "darkgray", description: "خلفية رمادية داكنة" },
                    { value: "black", description: "خلفية سوداء" },
                    { value: "#FFE4B5", description: "خلفية بيج فاتح (Moccasin)" },
                    { value: "#F0F8FF", description: "خلفية أزرق فاتح جداً (AliceBlue)" },
                    { value: "#FAFAD2", description: "خلفية أصفر فاتح جداً (LightGoldenrodYellow)" },
                    { value: "#E6E6FA", description: "خلفية خزامي (Lavender)" },
                    { value: "#FFE4E1", description: "خلفية وردي فاتح جداً (MistyRose)" },
                    { value: "#F5F5DC", description: "خلفية بيج (Beige)" },
                    { value: "#FFF8DC", description: "خلفية Cornsilk" }
                ],
                freeInput: true
            },
            {
                name: "hspace",
                description: "يحدد مسافة فارغة أفقية (يمين ويسار) حول شريط الحركة بوحدة البكسل",
                values: [
                    { value: "0", description: "بدون مسافة" },
                    { value: "2", description: "2 بكسل مسافة" },
                    { value: "5", description: "5 بكسل مسافة" },
                    { value: "8", description: "8 بكسل مسافة" },
                    { value: "10", description: "10 بكسل مسافة" },
                    { value: "12", description: "12 بكسل مسافة" },
                    { value: "15", description: "15 بكسل مسافة" },
                    { value: "18", description: "18 بكسل مسافة" },
                    { value: "20", description: "20 بكسل مسافة" },
                    { value: "25", description: "25 بكسل مسافة" },
                    { value: "30", description: "30 بكسل مسافة" },
                    { value: "40", description: "40 بكسل مسافة" },
                    { value: "50", description: "50 بكسل مسافة" }
                ],
                freeInput: true
            },
            {
                name: "vspace",
                description: "يحدد مسافة فارغة رأسية (أعلى وأسفل) حول شريط الحركة بوحدة البكسل",
                values: [
                    { value: "0", description: "بدون مسافة" },
                    { value: "2", description: "2 بكسل مسافة" },
                    { value: "5", description: "5 بكسل مسافة" },
                    { value: "8", description: "8 بكسل مسافة" },
                    { value: "10", description: "10 بكسل مسافة" },
                    { value: "12", description: "12 بكسل مسافة" },
                    { value: "15", description: "15 بكسل مسافة" },
                    { value: "18", description: "18 بكسل مسافة" },
                    { value: "20", description: "20 بكسل مسافة" },
                    { value: "25", description: "25 بكسل مسافة" },
                    { value: "30", description: "30 بكسل مسافة" },
                    { value: "40", description: "40 بكسل مسافة" },
                    { value: "50", description: "50 بكسل مسافة" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS Animations أو JavaScript للحركة (مع مراعاة إمكانية الوصول)",
        severity: "high",
        removalVersion: "غير موصى به منذ HTML 4.0، ولكنه لم يُزَل رسمياً حتى HTML 5"
    },

    // ============================================================
    // 7. عنصر <applet>
    // ============================================================
    {
        tag: "applet",
        description: "⚠️ عنصر مهمل - كان يضمّن تطبيقات Java Applet في الصفحة. تم إهماله لمشاكل أمانية وضعف أداء وتوقف دعم المتصفحات له",
        attributes: [
            {
                name: "code",
                description: "يحدد اسم ملف الـ class الخاص بالتطبيق المصغّر",
                values: [
                    { value: "MyApplet.class", description: "ملف الـ class الأساسي للتطبيق" },
                    { value: "Calculator.class", description: "تطبيق آلة حاسبة" },
                    { value: "Game.class", description: "تطبيق لعبة" },
                    { value: "ChatApplet.class", description: "تطبيق محادثة" }
                ],
                freeInput: true
            },
            {
                name: "codebase",
                description: "يحدد مسار المجلد الذي يحتوي على ملفات التطبيق المصغّر",
                values: [
                    { value: ".", description: "نفس مجلد الصفحة" },
                    { value: "/applets/", description: "مجلد applets داخل الموقع" },
                    { value: "https://example.com/applets/", description: "مجلد applets على موقع آخر" }
                ],
                freeInput: true
            },
            {
                name: "archive",
                description: "يحدد مسار ملف أرشيف jar يحتوي كل ملفات التطبيق المصغّر",
                values: [
                    { value: "applet.jar", description: "ملف أرشيف يحتوي كل التطبيق" },
                    { value: "applet.zip", description: "ملف مضغوط يحتوي كل التطبيق" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض منطقة عرض التطبيق بالبكسل أو النسبة المئوية",
                values: [
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "250", description: "عرض 250 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "350", description: "عرض 350 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" },
                    { value: "100%", description: "عرض كامل المنطقة" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع منطقة عرض التطبيق بالبكسل أو النسبة المئوية",
                values: [
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "150", description: "ارتفاع 150 بكسل" },
                    { value: "200", description: "ارتفاع 200 بكسل" },
                    { value: "250", description: "ارتفاع 250 بكسل" },
                    { value: "300", description: "ارتفاع 300 بكسل" },
                    { value: "350", description: "ارتفاع 350 بكسل" },
                    { value: "400", description: "ارتفاع 400 بكسل" },
                    { value: "500", description: "ارتفاع 500 بكسل" },
                    { value: "600", description: "ارتفاع 600 بكسل" },
                    { value: "100%", description: "ارتفاع كامل المنطقة" }
                ],
                freeInput: true
            },
            {
                name: "alt",
                description: "يحدد نصاً بديلاً يظهر للمستخدمين الذين لا يستطيعون تشغيل التطبيق (متصفحات لا تدعم Java)",
                values: [
                    { value: "تطبيق Java غير مدعوم في متصفحك", description: "رسالة توضيحية للمستخدم" },
                    { value: "برجاء تثبيت Java لتشغيل هذا التطبيق", description: "رسالة توجيهية" }
                ],
                freeInput: true
            },
            {
                name: "name",
                description: "يحدد اسماً للتطبيق يمكن استخدامه في JavaScript للتفاعل معه",
                values: [
                    { value: "myApplet", description: "اسم التطبيق" },
                    { value: "calculator", description: "اسم تطبيق الآلة الحاسبة" }
                ],
                freeInput: true
            },
            {
                name: "align",
                description: "يحدد محاذاة التطبيق بالنسبة للنص المحيط به",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "center", description: "توسيط" },
                    { value: "top", description: "محاذاة للأعلى" },
                    { value: "bottom", description: "محاذاة للأسفل" },
                    { value: "middle", description: "محاذاة للوسط" },
                    { value: "absmiddle", description: "محاذاة للوسط المطلق" },
                    { value: "absbottom", description: "محاذاة للأسفل المطلق" },
                    { value: "texttop", description: "محاذاة لأعلى النص" },
                    { value: "baseline", description: "محاذاة لخط الأساس" }
                ]
            },
            {
                name: "hspace",
                description: "يحدد مسافة فارغة أفقية (يمين ويسار) حول التطبيق",
                values: [
                    { value: "0", description: "بدون مسافة" },
                    { value: "5", description: "5 بكسل مسافة" },
                    { value: "10", description: "10 بكسل مسافة" },
                    { value: "15", description: "15 بكسل مسافة" },
                    { value: "20", description: "20 بكسل مسافة" }
                ],
                freeInput: true
            },
            {
                name: "vspace",
                description: "يحدد مسافة فارغة رأسية (أعلى وأسفل) حول التطبيق",
                values: [
                    { value: "0", description: "بدون مسافة" },
                    { value: "5", description: "5 بكسل مسافة" },
                    { value: "10", description: "10 بكسل مسافة" },
                    { value: "15", description: "15 بكسل مسافة" },
                    { value: "20", description: "20 بكسل مسافة" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم JavaScript أو WebAssembly لإنشاء تطبيقات ويب تفاعلية",
        severity: "critical",
        removalVersion: "تم إهماله في HTML 4.0 وإزالته من HTML 5 في 2014"
    },

    // ============================================================
    // 8. عنصر <frame>
    // ============================================================
    {
        tag: "frame",
        description: "⚠️ عنصر مهمل - كان يمثل إطاراً واحداً داخل مجموعة إطارات (frameset). تم إهماله لأنه يسبب مشاكل في SEO وإمكانية الوصول والتنقل",
        attributes: [
            {
                name: "src",
                description: "يحدد عنوان URL للصفحة المعروضة داخل هذا الإطار",
                values: [
                    { value: "page1.html", description: "صفحة في نفس المجلد" },
                    { value: "/pages/page1.html", description: "صفحة في مجلد pages" },
                    { value: "https://example.com/page.html", description: "صفحة من موقع آخر" }
                ],
                freeInput: true
            },
            {
                name: "name",
                description: "يحدد اسم الإطار لاستهدافه من الروابط أو النماذج باستخدام target",
                values: [
                    { value: "main", description: "الإطار الرئيسي" },
                    { value: "sidebar", description: "الإطار الجانبي" },
                    { value: "header", description: "الإطار العلوي" },
                    { value: "footer", description: "الإطار السفلي" },
                    { value: "navigation", description: "إطار التنقل" },
                    { value: "content", description: "إطار المحتوى" },
                    { value: "top", description: "الإطار العلوي" }
                ],
                freeInput: true
            },
            {
                name: "noresize",
                description: "يمنع المستخدم من تغيير حجم الإطار بالسحب بالفأرة",
                values: [
                    { value: "", description: "يمنع تغيير الحجم (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "scrolling",
                description: "يتحكم في إظهار أو إخفاء أشرطة التمرير داخل الإطار",
                values: [
                    { value: "yes", description: "يظهر أشرطة التمرير دائماً" },
                    { value: "no", description: "يمنع أشرطة التمرير نهائياً" },
                    { value: "auto", description: "يظهر أشرطة التمرير فقط عند الحاجة (افتراضي)" }
                ]
            },
            {
                name: "marginwidth",
                description: "يحدد الهامش الأيسر والأيمن داخل الإطار بوحدة البكسل",
                values: [
                    { value: "0", description: "بدون هامش" },
                    { value: "1", description: "هامش 1 بكسل" },
                    { value: "2", description: "هامش 2 بكسل" },
                    { value: "3", description: "هامش 3 بكسل" },
                    { value: "4", description: "هامش 4 بكسل" },
                    { value: "5", description: "هامش 5 بكسل" },
                    { value: "6", description: "هامش 6 بكسل" },
                    { value: "7", description: "هامش 7 بكسل" },
                    { value: "8", description: "هامش 8 بكسل" },
                    { value: "9", description: "هامش 9 بكسل" },
                    { value: "10", description: "هامش 10 بكسل" },
                    { value: "15", description: "هامش 15 بكسل" },
                    { value: "20", description: "هامش 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "marginheight",
                description: "يحدد الهامش العلوي والسفلي داخل الإطار بوحدة البكسل",
                values: [
                    { value: "0", description: "بدون هامش" },
                    { value: "1", description: "هامش 1 بكسل" },
                    { value: "2", description: "هامش 2 بكسل" },
                    { value: "3", description: "هامش 3 بكسل" },
                    { value: "4", description: "هامش 4 بكسل" },
                    { value: "5", description: "هامش 5 بكسل" },
                    { value: "6", description: "هامش 6 بكسل" },
                    { value: "7", description: "هامش 7 بكسل" },
                    { value: "8", description: "هامش 8 بكسل" },
                    { value: "9", description: "هامش 9 بكسل" },
                    { value: "10", description: "هامش 10 بكسل" },
                    { value: "15", description: "هامش 15 بكسل" },
                    { value: "20", description: "هامش 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "frameborder",
                description: "يتحكم في إظهار أو إخفاء حدود الإطار",
                values: [
                    { value: "1", description: "يظهر حدود الإطار (افتراضي)" },
                    { value: "0", description: "يخفي حدود الإطار" },
                    { value: "yes", description: "يظهر حدود الإطار" },
                    { value: "no", description: "يخفي حدود الإطار" }
                ]
            },
            {
                name: "bordercolor",
                description: "يحدد لون حدود الإطار",
                values: [
                    { value: "black", description: "لون أسود" },
                    { value: "gray", description: "لون رمادي" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "#000000", description: "أسود (كود Hex)" },
                    { value: "#808080", description: "رمادي (كود Hex)" },
                    { value: "#0000FF", description: "أزرق (كود Hex)" },
                    { value: "#FF0000", description: "أحمر (كود Hex)" },
                    { value: "#00FF00", description: "أخضر (كود Hex)" }
                ],
                freeInput: true
            },
            {
                name: "longdesc",
                description: "يحدد رابطاً لصفحة تحتوي وصفاً طويلاً لمحتوى الإطار (لمن لا يستطيعون رؤيته)",
                values: [
                    { value: "description.html", description: "صفحة وصف محتوى الإطار" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <iframe>",
        severity: "critical",
        removalVersion: "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5"
    },

    // ============================================================
    // 9. عنصر <frameset>
    // ============================================================
    {
        tag: "frameset",
        description: "⚠️ عنصر مهمل - كان يقسّم النافذة إلى عدة إطارات. تم إهماله لأنه يسبب مشاكل في SEO وإمكانية الوصول والتنقل",
        attributes: [
            {
                name: "rows",
                description: "يقسّم النافذة أفقياً إلى صفوف بارتفاعات محددة. يمكن استخدام بكسل، نسبة مئوية، أو * للباقي",
                values: [
                    { value: "100,200", description: "صفان: الأول 100 بكسل، الثاني 200 بكسل" },
                    { value: "50%,50%", description: "صفان متساويان في الارتفاع" },
                    { value: "25%,75%", description: "صفان: الأول 25%، الثاني 75%" },
                    { value: "33%,33%,33%", description: "ثلاثة صفوف متساوية" },
                    { value: "100,*", description: "صفان: الأول 100 بكسل، الثاني الباقي" },
                    { value: "*,200,*", description: "ثلاثة صفوف: الأول والثالث الباقي، الثاني 200 بكسل" },
                    { value: "2*,*", description: "نسبتين: الأول ضعف الثاني" },
                    { value: "100,200,300", description: "ثلاثة صفوف بارتفاعات محددة" },
                    { value: "100,*,200", description: "ثلاثة صفوف: الأول والثالث محددان، الثاني الباقي" }
                ],
                freeInput: true
            },
            {
                name: "cols",
                description: "يقسّم النافذة عمودياً إلى أعمدة بعروض محددة. يمكن استخدام بكسل، نسبة مئوية، أو * للباقي",
                values: [
                    { value: "100,200", description: "عمودان: الأول 100 بكسل، الثاني 200 بكسل" },
                    { value: "50%,50%", description: "عمودان متساويان في العرض" },
                    { value: "25%,75%", description: "عمودان: الأول 25%، الثاني 75%" },
                    { value: "33%,33%,33%", description: "ثلاثة أعمدة متساوية" },
                    { value: "100,*", description: "عمودان: الأول 100 بكسل، الثاني الباقي" },
                    { value: "*,200,*", description: "ثلاثة أعمدة: الأول والثالث الباقي، الثاني 200 بكسل" },
                    { value: "2*,*", description: "نسبتين: الأول ضعف الثاني" },
                    { value: "100,200,300", description: "ثلاثة أعمدة بعروض محددة" },
                    { value: "100,*,200", description: "ثلاثة أعمدة: الأول والثالث محددان، الثاني الباقي" }
                ],
                freeInput: true
            },
            {
                name: "border",
                description: "يحدد سمك الحدود بين الإطارات بوحدة البكسل",
                values: [
                    { value: "0", description: "بدون حدود" },
                    { value: "1", description: "حد 1 بكسل" },
                    { value: "2", description: "حد 2 بكسل" },
                    { value: "3", description: "حد 3 بكسل" },
                    { value: "5", description: "حد 5 بكسل" },
                    { value: "10", description: "حد 10 بكسل" },
                    { value: "15", description: "حد 15 بكسل" },
                    { value: "20", description: "حد 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "frameborder",
                description: "يتحكم في إظهار أو إخفاء حدود الإطارات",
                values: [
                    { value: "1", description: "يظهر حدود الإطارات (افتراضي)" },
                    { value: "0", description: "يخفي حدود الإطارات" },
                    { value: "yes", description: "يظهر حدود الإطارات" },
                    { value: "no", description: "يخفي حدود الإطارات" }
                ]
            },
            {
                name: "bordercolor",
                description: "يحدد لون حدود الإطارات",
                values: [
                    { value: "black", description: "لون أسود" },
                    { value: "gray", description: "لون رمادي" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "#000000", description: "أسود (كود Hex)" },
                    { value: "#808080", description: "رمادي (كود Hex)" },
                    { value: "#0000FF", description: "أزرق (كود Hex)" },
                    { value: "#FF0000", description: "أحمر (كود Hex)" },
                    { value: "#00FF00", description: "أخضر (كود Hex)" }
                ],
                freeInput: true
            },
            {
                name: "framespacing",
                description: "يحدد المسافة بين الإطارات بوحدة البكسل (خاص بمتصفح Internet Explorer)",
                values: [
                    { value: "0", description: "بدون مسافة" },
                    { value: "1", description: "مسافة 1 بكسل" },
                    { value: "2", description: "مسافة 2 بكسل" },
                    { value: "3", description: "مسافة 3 بكسل" },
                    { value: "5", description: "مسافة 5 بكسل" },
                    { value: "10", description: "مسافة 10 بكسل" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <iframe> أو CSS Grid/Flexbox للتقسيم",
        severity: "critical",
        removalVersion: "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5"
    },

    // ============================================================
    // 10. عنصر <noframes>
    // ============================================================
    {
        tag: "noframes",
        description: "⚠️ عنصر مهمل - كان محتوى بديلاً للمتصفحات التي لا تدعم frameset. أصبح غير ضروري مع إهمال frameset",
        attributes: [],
        deprecated: true,
        replacement: "استخدم <noscript> للبدائل عند الحاجة",
        severity: "low",
        removalVersion: "تم إهماله في HTML 5 (2014)"
    },

    // ============================================================
    // 11. عنصر <acronym>
    // ============================================================
    {
        tag: "acronym",
        description: "⚠️ عنصر مهمل - كان يعرض اختصاراً يظهر شرحه الكامل عند تمرير الماوس. تم إهماله لوجود عنصر abbr الذي يؤدي نفس الغرض بشكل موحّد",
        attributes: [
            {
                name: "title",
                description: "الشرح الكامل للاختصار الذي يظهر عند تمرير الماوس فوقه",
                values: [
                    { value: "HyperText Markup Language", description: "شرح اختصار HTML" },
                    { value: "Cascading Style Sheets", description: "شرح اختصار CSS" },
                    { value: "JavaScript", description: "شرح اختصار JS" },
                    { value: "Application Programming Interface", description: "شرح اختصار API" },
                    { value: "Document Object Model", description: "شرح اختصار DOM" }
                ],
                freeInput: true
            },
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <abbr>",
        severity: "medium",
        removalVersion: "تم إهماله في HTML 5 (2014)"
    },

    // ============================================================
    // 12. عنصر <dir>
    // ============================================================
    {
        tag: "dir",
        description: "⚠️ عنصر مهمل - كان ينشئ قائمة أدلة أو ملفات. فقد استخدامه المميز واستُبدل بعنصر ul العادي",
        attributes: [
            {
                name: "compact",
                description: "يعرض القائمة بتباعد أضيق بين العناصر",
                values: [
                    { value: "", description: "يفعّل العرض المضغوط (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <ul>",
        severity: "medium",
        removalVersion: "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5"
    },

    // ============================================================
    // 13. عنصر <basefont>
    // ============================================================
    {
        tag: "basefont",
        description: "⚠️ عنصر مهمل - كان يحدد حجم ولون ونوع الخط الافتراضي لكامل الصفحة. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
        attributes: [
            {
                name: "size",
                description: "يحدد حجم الخط الافتراضي للصفحة من 1 إلى 7",
                values: [
                    { value: "1", description: "أصغر حجم (صغير جداً - ≈10px)" },
                    { value: "2", description: "حجم صغير (≈12px)" },
                    { value: "3", description: "الحجم الافتراضي (≈14px)" },
                    { value: "4", description: "حجم متوسط (≈16px)" },
                    { value: "5", description: "حجم كبير (≈18px)" },
                    { value: "6", description: "حجم كبير جداً (≈22px)" },
                    { value: "7", description: "أكبر حجم (كبير جداً - ≈26px)" }
                ],
                freeInput: true
            },
            {
                name: "color",
                description: "يحدد اللون الافتراضي للنص في كل الصفحة",
                values: [
                    { value: "black", description: "لون أسود" },
                    { value: "gray", description: "لون رمادي" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "#000000", description: "أسود (كود Hex)" },
                    { value: "#333333", description: "رمادي داكن (كود Hex)" },
                    { value: "#0000FF", description: "أزرق (كود Hex)" },
                    { value: "#FF0000", description: "أحمر (كود Hex)" },
                    { value: "#00FF00", description: "أخضر (كود Hex)" }
                ],
                freeInput: true
            },
            {
                name: "face",
                description: "يحدد نوع الخط الافتراضي لكل الصفحة",
                values: [
                    { value: "Arial", description: "خط Arial" },
                    { value: "Times New Roman", description: "خط Times New Roman" },
                    { value: "Verdana", description: "خط Verdana" },
                    { value: "Tahoma", description: "خط Tahoma" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS: font-family, font-size, color على body",
        severity: "high",
        removalVersion: "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5"
    },

    // ============================================================
    // 14. عنصر <isindex>
    // ============================================================
    {
        tag: "isindex",
        description: "⚠️ عنصر مهمل - كان يضيف حقل بحث بسيطاً تلقائياً في الصفحة دون الحاجة لنموذج. تم إهماله لوجود نماذج HTML قياسية",
        attributes: [
            {
                name: "prompt",
                description: "النص الذي يظهر بجانب حقل البحث كتوجيه للمستخدم",
                values: [
                    { value: "ابحث هنا...", description: "نص توجيهي بالعربية" },
                    { value: "Search:", description: "نص توجيهي بالإنجليزية" }
                ],
                freeInput: true
            },
            {
                name: "action",
                description: "عنوان الصفحة التي تستقبل عبارة البحث المدخلة",
                values: [
                    { value: "/search", description: "صفحة بحث في الموقع" },
                    { value: "https://google.com/search", description: "صفحة بحث جوجل" }
                ],
                freeInput: true
            },
            {
                name: "name",
                description: "اسم حقل البحث عند الإرسال (افتراضي: isindex)",
                values: [
                    { value: "q", description: "اسم الحقل" },
                    { value: "search", description: "اسم الحقل" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <form> مع <input type=\"search\">",
        severity: "critical",
        removalVersion: "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5"
    },

    // ============================================================
    // 15. عنصر <nobr>
    // ============================================================
    {
        tag: "nobr",
        description: "⚠️ عنصر مهمل - كان يمنع التفاف النص إلى سطر جديد. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
        attributes: [],
        deprecated: true,
        replacement: "استخدم CSS: white-space: nowrap",
        severity: "medium",
        removalVersion: "HTML 5 (2014)"
    },

    // ============================================================
    // 16. عنصر <xmp>
    // ============================================================
    {
        tag: "xmp",
        description: "⚠️ عنصر مهمل - كان يعرض نصاً بتنسيقه الأصلي دون تفسير وسوم HTML بداخله. تم إهماله لوجود بدائل أفضل وأكثر أماناً",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <pre> مع ترميز &lt; و &gt;",
        severity: "medium",
        removalVersion: "تم إهماله منذ HTML 3.2 (1997)"
    },

    // ============================================================
    // 17. عنصر <blink>
    // ============================================================
    {
        tag: "blink",
        description: "⚠️ عنصر مهمل - كان يجعل النص يومض ويختفي بالتناوب. لم يكن معياراً قياسياً قط وأزيل تماماً لإزعاجه الشديد للمستخدمين وتأثيره السلبي على إمكانية الوصول",
        attributes: [],
        deprecated: true,
        replacement: "تجنب الوميض نهائياً، أو استخدم CSS animation بحذر شديد إن لزم",
        severity: "critical",
        removalVersion: "لم يكن جزءاً من أي معيار رسمي، أُهمل تماماً"
    },

    // ============================================================
    // 18. عنصر <keygen>
    // ============================================================
    {
        tag: "keygen",
        description: "⚠️ عنصر مهمل - كان ينشئ زوج مفاتيح تشفير (عام وخاص) للتحقق من الهوية داخل النماذج. أُزيل لضعف أمانه ولوجود بدائل أفضل",
        attributes: [
            {
                name: "name",
                description: "يحدد اسم الحقل عند إرسال النموذج",
                values: [
                    { value: "key", description: "اسم الحقل" },
                    { value: "publickey", description: "اسم الحقل" }
                ],
                freeInput: true
            },
            {
                name: "challenge",
                description: "نص تحدٍّ يُوقَّع بالمفتاح الخاص عند إنشاء زوج المفاتيح",
                values: [],
                freeInput: true
            },
            {
                name: "keytype",
                description: "يحدد نوع خوارزمية المفتاح المُنشأ",
                values: [
                    { value: "rsa", description: "خوارزمية RSA (الوحيدة المدعومة فعلياً)" },
                    { value: "dsa", description: "خوارزمية DSA (نادراً ما دُعمت)" },
                    { value: "ec", description: "خوارزمية المنحنيات الإهليلجية (لم تُطبَّق فعلياً)" }
                ]
            },
            {
                name: "disabled",
                description: "يعطل عنصر keygen عن الاستخدام",
                values: [
                    { value: "", description: "يعطّل العنصر (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ],
        deprecated: true,
        replacement: "استخدم واجهة Web Crypto API عبر JavaScript",
        severity: "critical",
        removalVersion: "تم إزالته من HTML 5.2 (2018)"
    },

    // ============================================================
    // 19. عنصر <bgsound>
    // ============================================================
    {
        tag: "bgsound",
        description: "⚠️ عنصر مهمل - كان يشغل ملفاً صوتياً في الخلفية تلقائياً عند فتح الصفحة (خاص بمتصفح Internet Explorer القديم). تم إهماله لوجود عنصر audio القياسي",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار الملف الصوتي المراد تشغيله في الخلفية",
                values: [
                    { value: "background.mp3", description: "ملف صوتي بصيغة MP3" },
                    { value: "background.wav", description: "ملف صوتي بصيغة WAV" },
                    { value: "background.mid", description: "ملف MIDI" },
                    { value: "music.mp3", description: "موسيقى خلفية" }
                ],
                freeInput: true
            },
            {
                name: "loop",
                description: "يحدد عدد مرات تكرار التشغيل. -1 أو infinite يعني تكرار لا نهائي",
                values: [
                    { value: "-1", description: "تكرار لا نهائي" },
                    { value: "infinite", description: "تكرار لا نهائي" },
                    { value: "0", description: "تشغيل مرة واحدة" },
                    { value: "1", description: "مرة واحدة" },
                    { value: "2", description: "مرتين" },
                    { value: "3", description: "ثلاث مرات" },
                    { value: "5", description: "خمس مرات" },
                    { value: "10", description: "عشر مرات" }
                ],
                freeInput: true
            },
            {
                name: "volume",
                description: "يحدد مستوى الصوت (من 0 إلى 100)",
                values: [
                    { value: "0", description: "صامت" },
                    { value: "25", description: "صوت منخفض" },
                    { value: "50", description: "صوت متوسط" },
                    { value: "75", description: "صوت مرتفع" },
                    { value: "100", description: "أعلى صوت" }
                ],
                freeInput: true
            },
            {
                name: "balance",
                description: "يحدد توازن الصوت بين السماعتين الأيمن والأيسر (من -10000 إلى 10000)",
                values: [
                    { value: "-10000", description: "صوت من اليسار فقط" },
                    { value: "0", description: "صوت متوازن" },
                    { value: "10000", description: "صوت من اليمين فقط" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <audio> بحذر عند الحاجة للتشغيل التلقائي",
        severity: "high",
        removalVersion: "لم يكن جزءاً من أي معيار رسمي، أُهمل تماماً مع Internet Explorer 11"
    },

    // ============================================================
    // 20. عنصر <menuitem>
    // ============================================================
    {
        tag: "menuitem",
        description: "⚠️ عنصر مهمل - كان يمثل عنصراً في قائمة سياقية أو شريط أدوات (مع menu type=\"context\"). طُبّق في فايرفوكس فقط ثم أُزيل من المعيار تماماً",
        attributes: [
            {
                name: "type",
                description: "يحدد نوع عنصر القائمة",
                values: [
                    { value: "command", description: "أمر عادي قابل للنقر (افتراضي)" },
                    { value: "checkbox", description: "خيار قابل للتفعيل والإلغاء" },
                    { value: "radio", description: "خيار ضمن مجموعة اختيار واحد" }
                ]
            },
            {
                name: "label",
                description: "يحدد النص الظاهر لعنصر القائمة",
                values: [
                    { value: "نسخ", description: "أمر نسخ" },
                    { value: "لصق", description: "أمر لصق" },
                    { value: "قص", description: "أمر قص" }
                ],
                freeInput: true
            },
            {
                name: "icon",
                description: "يحدد مسار أيقونة تظهر بجانب النص في القائمة",
                values: [
                    { value: "copy-icon.png", description: "أيقونة نسخ" },
                    { value: "paste-icon.png", description: "أيقونة لصق" },
                    { value: "cut-icon.png", description: "أيقونة قص" }
                ],
                freeInput: true
            },
            {
                name: "disabled",
                description: "يعطل عنصر القائمة عن الاستخدام",
                values: [
                    { value: "", description: "يعطّل العنصر (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "checked",
                description: "يحدد عنصر checkbox أو radio كمحدد افتراضياً",
                values: [
                    { value: "", description: "محدد افتراضياً (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "radiogroup",
                description: "يحدد اسم المجموعة التي ينتمي إليها عنصر radio",
                values: [
                    { value: "theme", description: "مجموعة اختيار الثيم" },
                    { value: "language", description: "مجموعة اختيار اللغة" }
                ],
                freeInput: true
            },
            {
                name: "default",
                description: "يحدد أن هذا العنصر هو الخيار الافتراضي في مجموعة radio",
                values: [
                    { value: "", description: "خيار افتراضي (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "command",
                description: "يربط عنصر القائمة بعنصر command آخر",
                values: [],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم قائمة سياق المتصفح الأصلية أو ابنِ قائمة مخصصة بـ HTML وCSS وJavaScript",
        severity: "critical",
        removalVersion: "تم إزالته من معيار HTML في 2021"
    },

    // ============================================================
    // 21. عنصر <spacer>
    // ============================================================
    {
        tag: "spacer",
        description: "⚠️ عنصر مهمل - عنصر خاص بمتصفح نتسكيب القديم كان يضيف مسافة فارغة غير مرئية للتحكم بتباعد التخطيط. أُزيل تماماً لوجود بدائل CSS أفضل",
        attributes: [
            {
                name: "type",
                description: "يحدد شكل المسافة المطلوبة",
                values: [
                    { value: "horizontal", description: "مسافة أفقية (عرض)" },
                    { value: "vertical", description: "مسافة رأسية (ارتفاع)" },
                    { value: "block", description: "مسافة بعرض وارتفاع معاً" }
                ]
            },
            {
                name: "size",
                description: "يحدد حجم المسافة بالبكسل عند استخدام النوع horizontal أو vertical",
                values: [
                    { value: "5", description: "مسافة 5 بكسل" },
                    { value: "10", description: "مسافة 10 بكسل" },
                    { value: "20", description: "مسافة 20 بكسل" },
                    { value: "50", description: "مسافة 50 بكسل" },
                    { value: "100", description: "مسافة 100 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض المسافة عند النوع block",
                values: [
                    { value: "10", description: "عرض 10 بكسل" },
                    { value: "50", description: "عرض 50 بكسل" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع المسافة عند النوع block",
                values: [
                    { value: "10", description: "ارتفاع 10 بكسل" },
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "200", description: "ارتفاع 200 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "align",
                description: "يحدد محاذاة المسافة",
                values: [
                    { value: "left", description: "محاذاة لليسار" },
                    { value: "right", description: "محاذاة لليمين" },
                    { value: "center", description: "توسيط" }
                ]
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS: margin أو padding أو gap",
        severity: "critical",
        removalVersion: "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape"
    },

    // ============================================================
    // 22. عنصر <multicol>
    // ============================================================
    {
        tag: "multicol",
        description: "⚠️ عنصر مهمل - عنصر خاص بمتصفح نتسكيب القديم كان يقسّم النص إلى عدة أعمدة تلقائياً. كان سابقاً لعصره ثم أُزيل لوجود CSS columns",
        attributes: [
            {
                name: "cols",
                description: "يحدد عدد الأعمدة المطلوب تقسيم النص إليها",
                values: [
                    { value: "2", description: "عمودان" },
                    { value: "3", description: "ثلاثة أعمدة" },
                    { value: "4", description: "أربعة أعمدة" },
                    { value: "5", description: "خمسة أعمدة" }
                ],
                freeInput: true
            },
            {
                name: "gutter",
                description: "يحدد المسافة الفاصلة بين الأعمدة بالبكسل",
                values: [
                    { value: "5", description: "مسافة 5 بكسل" },
                    { value: "10", description: "مسافة 10 بكسل" },
                    { value: "20", description: "مسافة 20 بكسل" },
                    { value: "30", description: "مسافة 30 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض كل عمود بالبكسل",
                values: [
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "250", description: "عرض 250 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم CSS: column-count أو column-width",
        severity: "medium",
        removalVersion: "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape"
    },

    // ============================================================
    // 23. عنصر <listing>
    // ============================================================
    {
        tag: "listing",
        description: "⚠️ عنصر مهمل - من أقدم عناصر HTML على الإطلاق (أقدم من pre)، كان يعرض نصاً أحادي التباعد يحافظ على المسافات. أُهمل منذ HTML 3.2",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <pre> أو <code>",
        severity: "low",
        removalVersion: "تم إهماله منذ HTML 3.2 (1997)"
    },

    // ============================================================
    // 24. عنصر <plaintext>
    // ============================================================
    {
        tag: "plaintext",
        description: "⚠️ عنصر مهمل وخطير - كان يعرض كل ما بعده في المستند كنص عادي حرفياً متجاهلاً أي وسوم HTML لاحقة، ولا يمكن إغلاقه (يكسر بقية الصفحة). أُزيل تماماً لخطورته",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر (يؤثر فقط على النص قبل إغلاقه - ولكنه لا يُغلق!)",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر (نفس مشكلة الإغلاق)",
                values: [
                    { value: "ar", description: "اللغة العربية" },
                    { value: "en", description: "اللغة الإنجليزية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <pre> مع ترميز الأحرف الخاصة &lt; و &gt;",
        severity: "critical",
        removalVersion: "تم إهماله منذ HTML 2.0 (1995) وإزالته من HTML 3.2"
    },

    // ============================================================
    // 25. عنصر <layer>
    // ============================================================
    {
        tag: "layer",
        description: "⚠️ عنصر مهمل - عنصر خاص بمتصفح نتسكيب 4 القديم كان ينشئ طبقة محتوى قابلة للتموضع والتحريك. لم يدعمه أي متصفح آخر وأُزيل تماماً",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار محتوى خارجي يُحمَّل داخل الطبقة",
                values: [
                    { value: "content.html", description: "صفحة تُحمَّل داخل الطبقة" }
                ],
                freeInput: true
            },
            {
                name: "left",
                description: "يحدد موضع الطبقة أفقياً بالبكسل أو النسبة المئوية من يسار الصفحة",
                values: [
                    { value: "0", description: "يسار الصفحة" },
                    { value: "50", description: "50 بكسل من اليسار" },
                    { value: "100", description: "100 بكسل من اليسار" },
                    { value: "50%", description: "منتصف الصفحة" }
                ],
                freeInput: true
            },
            {
                name: "top",
                description: "يحدد موضع الطبقة رأسياً بالبكسل أو النسبة المئوية من أعلى الصفحة",
                values: [
                    { value: "0", description: "أعلى الصفحة" },
                    { value: "50", description: "50 بكسل من الأعلى" },
                    { value: "100", description: "100 بكسل من الأعلى" },
                    { value: "50%", description: "منتصف الصفحة" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الطبقة بالبكسل أو النسبة المئوية",
                values: [
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "50%", description: "نصف عرض الصفحة" },
                    { value: "100%", description: "عرض كامل الصفحة" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع الطبقة بالبكسل أو النسبة المئوية",
                values: [
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "50%", description: "نصف ارتفاع الصفحة" },
                    { value: "100%", description: "ارتفاع كامل الصفحة" }
                ],
                freeInput: true
            },
            {
                name: "z-index",
                description: "يحدد ترتيب تراكب الطبقة فوق أو تحت طبقات أخرى (القيمة الأعلى = فوق)",
                values: [
                    { value: "1", description: "الطبقة الأولى (تحت)" },
                    { value: "5", description: "طبقة متوسطة" },
                    { value: "10", description: "طبقة عليا (فوق)" },
                    { value: "100", description: "أعلى طبقة" }
                ],
                freeInput: true
            },
            {
                name: "visibility",
                description: "يتحكم في إظهار أو إخفاء الطبقة",
                values: [
                    { value: "show", description: "تظهر الطبقة (افتراضي)" },
                    { value: "hide", description: "تختفي الطبقة" },
                    { value: "inherit", description: "ترث حالة الإظهار من العنصر الأب" }
                ]
            },
            {
                name: "bgcolor",
                description: "يحدد لون خلفية الطبقة",
                values: [
                    { value: "transparent", description: "خلفية شفافة" },
                    { value: "white", description: "خلفية بيضاء" },
                    { value: "yellow", description: "خلفية صفراء" },
                    { value: "lightgray", description: "خلفية رمادية فاتحة" }
                ],
                freeInput: true
            },
            {
                name: "background",
                description: "يحدد مسار صورة خلفية للطبقة",
                values: [
                    { value: "bg.png", description: "صورة خلفية" }
                ],
                freeInput: true
            },
            {
                name: "clip",
                description: "يحدد منطقة قص للطبقة (أعلى، يمين، أسفل، يسار)",
                values: [
                    { value: "10,20,100,50", description: "قص المنطقة المحددة" }
                ],
                freeInput: true
            },
            {
                name: "overflow",
                description: "يتحكم في ماذا يحدث إذا تجاوز المحتوى حدود الطبقة",
                values: [
                    { value: "visible", description: "يظهر المحتوى خارج الطبقة (افتراضي)" },
                    { value: "hidden", description: "يخفي المحتوى الزائد" },
                    { value: "scroll", description: "يظهر شريط تمرير" }
                ]
            },
            {
                name: "above",
                description: "يحدد اسم طبقة أخرى تظهر فوق هذه الطبقة",
                values: [],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <div> مع CSS: position: absolute/relative",
        severity: "critical",
        removalVersion: "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape 4"
    },

    // ============================================================
    // 26. عنصر <ilayer>
    // ============================================================
    {
        tag: "ilayer",
        description: "⚠️ عنصر مهمل - النسخة السطرية (inline) من عنصر layer الخاص بنتسكيب 4 القديم. أُزيل تماماً مع بقية عناصر الطبقات",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار محتوى خارجي يُحمَّل داخل الطبقة السطرية",
                values: [
                    { value: "content.html", description: "صفحة تُحمَّل داخل الطبقة" }
                ],
                freeInput: true
            },
            {
                name: "left",
                description: "يحدد موضع الطبقة أفقياً بالبكسل",
                values: [
                    { value: "0", description: "يسار الصفحة" },
                    { value: "50", description: "50 بكسل من اليسار" }
                ],
                freeInput: true
            },
            {
                name: "top",
                description: "يحدد موضع الطبقة رأسياً بالبكسل",
                values: [
                    { value: "0", description: "أعلى الصفحة" },
                    { value: "50", description: "50 بكسل من الأعلى" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الطبقة السطرية بالبكسل",
                values: [
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع الطبقة السطرية بالبكسل",
                values: [
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "z-index",
                description: "يحدد ترتيب تراكب الطبقة",
                values: [
                    { value: "1", description: "الطبقة الأولى" },
                    { value: "5", description: "طبقة متوسطة" },
                    { value: "10", description: "طبقة عليا" }
                ],
                freeInput: true
            },
            {
                name: "visibility",
                description: "يتحكم في إظهار أو إخفاء الطبقة",
                values: [
                    { value: "show", description: "تظهر الطبقة (افتراضي)" },
                    { value: "hide", description: "تختفي الطبقة" }
                ]
            },
            {
                name: "bgcolor",
                description: "يحدد لون خلفية الطبقة السطرية",
                values: [
                    { value: "transparent", description: "خلفية شفافة" },
                    { value: "yellow", description: "خلفية صفراء" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <span> مع CSS: position: relative",
        severity: "critical",
        removalVersion: "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape 4"
    },

    // ============================================================
    // 27. عنصر <noembed>
    // ============================================================
    {
        tag: "noembed",
        description: "⚠️ عنصر مهمل - كان يعرض محتوى بديلاً للمتصفحات التي لا تدعم عنصر embed. أصبح غير ضروري مع الدعم الواسع لـ embed وobject",
        attributes: [],
        deprecated: true,
        replacement: "استخدم محتوى بديلاً داخل <object> نفسه",
        severity: "low",
        removalVersion: "أُهمل مع توقف استخدام embed القديم"
    },

    // ============================================================
    // 28. عنصر <command>
    // ============================================================
    {
        tag: "command",
        description: "⚠️ عنصر مهمل - كان مقترحاً في مسودات HTML5 المبكرة لتمثيل أمر (زر أو مربع اختيار) يمكن استدعاؤه من قوائم أو أشرطة أدوات. أُزيل قبل أن يُطبَّق فعلياً في أي متصفح رئيسي",
        attributes: [
            {
                name: "type",
                description: "يحدد نوع الأمر",
                values: [
                    { value: "command", description: "أمر عادي (افتراضي)" },
                    { value: "checkbox", description: "أمر قابل للتفعيل والإلغاء" },
                    { value: "radio", description: "أمر ضمن مجموعة اختيار واحد" }
                ]
            },
            {
                name: "label",
                description: "يحدد النص الظاهر للأمر",
                values: [
                    { value: "حفظ", description: "أمر حفظ" },
                    { value: "حذف", description: "أمر حذف" },
                    { value: "تحرير", description: "أمر تحرير" }
                ],
                freeInput: true
            },
            {
                name: "icon",
                description: "يحدد مسار أيقونة الأمر",
                values: [
                    { value: "save.png", description: "أيقونة حفظ" },
                    { value: "delete.png", description: "أيقونة حذف" }
                ],
                freeInput: true
            },
            {
                name: "disabled",
                description: "يعطل الأمر عن الاستخدام",
                values: [
                    { value: "", description: "يعطّل الأمر (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "checked",
                description: "يحدد الأمر كمحدد افتراضياً عند النوع checkbox أو radio",
                values: [
                    { value: "", description: "محدد افتراضياً (يُكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "radiogroup",
                description: "يحدد اسم المجموعة التي ينتمي إليها أمر radio",
                values: [
                    { value: "options", description: "مجموعة خيارات" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "استخدم <button> أو عناصر ARIA المناسبة",
        severity: "medium",
        removalVersion: "تم إزالته من معيار HTML قبل إصدار HTML5 النهائي"
    },

    // ============================================================
    // 29. عنصر <rb>
    // ============================================================
    {
        tag: "rb",
        description: "⚠️ عنصر مهمل - كان يحدد صراحة النص الأساسي (Ruby Base) داخل عنصر ruby. أُلغي من معيار HTML الحديث لأن النص الموضوع مباشرة داخل ruby يُعامل تلقائياً كنص أساسي دون الحاجة له",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص داخل العنصر",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين" },
                    { value: "rtl", description: "من اليمين إلى اليسار" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة المحتوى داخل العنصر",
                values: [
                    { value: "ja", description: "اللغة اليابانية" },
                    { value: "zh", description: "اللغة الصينية" },
                    { value: "ko", description: "اللغة الكورية" }
                ],
                freeInput: true
            }
        ],
        deprecated: true,
        replacement: "ضع النص مباشرة داخل <ruby> بدون الحاجة لعنصر إضافي",
        severity: "low",
        removalVersion: "تم إزالته من HTML 5.2 (2018)"
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.deprecatedData = deprecatedData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = deprecatedData;
}