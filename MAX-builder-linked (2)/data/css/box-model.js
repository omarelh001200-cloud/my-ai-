// ============================================================
// box-model.js
// خصائص نموذج الصندوق (Box Model) في CSS
// تتحكم في أبعاد العنصر والهوامش والحواف والمسافات الداخلية
// ============================================================

const boxModelData = [
    // ============================================================
    // 1. خصائص الأبعاد (Dimensions)
    // ============================================================
    {
        tag: "dimensions",
        description: "تحدد أبعاد العنصر (العرض والارتفاع) والحدود الدنيا والعليا، تتحكم في حجم العنصر المرئي",
        properties: [
            // -------- width --------
            {
                name: "width",
                description: "الخاصية الرئيسية لتحديد عرض العنصر، يمكن أن تكون ثابتة أو نسبية أو معتمدة على المحتوى",
                values: [
                    { value: "auto", description: "يحسب المتصفح العرض تلقائياً حسب المحتوى (القيمة الافتراضية)" },
                    { value: "10px", description: "عرض 10 بكسل - صغير جداً" },
                    { value: "20px", description: "عرض 20 بكسل" },
                    { value: "50px", description: "عرض 50 بكسل" },
                    { value: "100px", description: "عرض 100 بكسل" },
                    { value: "150px", description: "عرض 150 بكسل" },
                    { value: "200px", description: "عرض 200 بكسل" },
                    { value: "300px", description: "عرض 300 بكسل" },
                    { value: "400px", description: "عرض 400 بكسل" },
                    { value: "500px", description: "عرض 500 بكسل" },
                    { value: "600px", description: "عرض 600 بكسل" },
                    { value: "700px", description: "عرض 700 بكسل" },
                    { value: "800px", description: "عرض 800 بكسل" },
                    { value: "900px", description: "عرض 900 بكسل" },
                    { value: "1000px", description: "عرض 1000 بكسل" },
                    { value: "10%", description: "10% من عرض العنصر الأب" },
                    { value: "20%", description: "20% من عرض العنصر الأب" },
                    { value: "25%", description: "ربع عرض العنصر الأب" },
                    { value: "33%", description: "ثلث عرض العنصر الأب" },
                    { value: "50%", description: "نصف عرض العنصر الأب" },
                    { value: "66%", description: "ثلثي عرض العنصر الأب" },
                    { value: "75%", description: "ثلاثة أرباع عرض العنصر الأب" },
                    { value: "80%", description: "80% من عرض العنصر الأب" },
                    { value: "90%", description: "90% من عرض العنصر الأب" },
                    { value: "100%", description: "عرض كامل العنصر الأب" },
                    { value: "100vw", description: "العرض الكامل لنافذة المتصفح (viewport width)" },
                    { value: "50vw", description: "نصف عرض نافذة المتصفح" },
                    { value: "100svw", description: "العرض الكامل للنافذة الصغيرة (Small Viewport)" },
                    { value: "100lvw", description: "العرض الكامل للنافذة الكبيرة (Large Viewport)" },
                    { value: "100dvw", description: "العرض الكامل للنافذة الديناميكية (Dynamic Viewport)" },
                    { value: "max-content", description: "العرض حسب حجم المحتوى الداخلي بدون التفاف - يكبر حسب الحاجة" },
                    { value: "min-content", description: "أصغر عرض يمكن أن يأخذه المحتوى قبل الالتفاف إلى سطر جديد" },
                    { value: "fit-content", description: "عرض يناسب المحتوى لكن لا يتجاوز حجم الأب - أفضل من max-content" },
                    { value: "stretch", description: "يتمدد ليملأ العرض المتاح بالكامل (مرادف لـ 100%)" },
                    { value: "clamp(200px, 50%, 400px)", description: "عرض بين 200 و400 بكسل، و50% من عرض الأب" },
                    { value: "min(50%, 400px)", description: "أصغر قيمة بين 50% من الأب و400 بكسل" },
                    { value: "max(50%, 200px)", description: "أكبر قيمة بين 50% من الأب و200 بكسل" },
                    { value: "calc(100% - 40px)", description: "حساب عرض باستخدام العملية الحسابية" },
                    { value: "calc(50% + 20px)", description: "نصف عرض الأب زائد 20 بكسل" }
                ],
                freeInput: true
            },
            // -------- height --------
            {
                name: "height",
                description: "الخاصية الرئيسية لتحديد ارتفاع العنصر، يمكن أن تكون ثابتة أو نسبية أو معتمدة على المحتوى",
                values: [
                    { value: "auto", description: "يحسب المتصفح الارتفاع تلقائياً حسب المحتوى (القيمة الافتراضية)" },
                    { value: "10px", description: "ارتفاع 10 بكسل - صغير جداً" },
                    { value: "20px", description: "ارتفاع 20 بكسل" },
                    { value: "50px", description: "ارتفاع 50 بكسل" },
                    { value: "100px", description: "ارتفاع 100 بكسل" },
                    { value: "150px", description: "ارتفاع 150 بكسل" },
                    { value: "200px", description: "ارتفاع 200 بكسل" },
                    { value: "300px", description: "ارتفاع 300 بكسل" },
                    { value: "400px", description: "ارتفاع 400 بكسل" },
                    { value: "500px", description: "ارتفاع 500 بكسل" },
                    { value: "600px", description: "ارتفاع 600 بكسل" },
                    { value: "700px", description: "ارتفاع 700 بكسل" },
                    { value: "800px", description: "ارتفاع 800 بكسل" },
                    { value: "900px", description: "ارتفاع 900 بكسل" },
                    { value: "1000px", description: "ارتفاع 1000 بكسل" },
                    { value: "10%", description: "10% من ارتفاع العنصر الأب" },
                    { value: "20%", description: "20% من ارتفاع العنصر الأب" },
                    { value: "25%", description: "ربع ارتفاع العنصر الأب" },
                    { value: "33%", description: "ثلث ارتفاع العنصر الأب" },
                    { value: "50%", description: "نصف ارتفاع العنصر الأب" },
                    { value: "66%", description: "ثلثي ارتفاع العنصر الأب" },
                    { value: "75%", description: "ثلاثة أرباع ارتفاع العنصر الأب" },
                    { value: "80%", description: "80% من ارتفاع العنصر الأب" },
                    { value: "90%", description: "90% من ارتفاع العنصر الأب" },
                    { value: "100%", description: "ارتفاع كامل العنصر الأب" },
                    { value: "100vh", description: "الارتفاع الكامل لنافذة المتصفح (viewport height)" },
                    { value: "50vh", description: "نصف ارتفاع نافذة المتصفح" },
                    { value: "100svh", description: "الارتفاع الكامل للنافذة الصغيرة" },
                    { value: "100lvh", description: "الارتفاع الكامل للنافذة الكبيرة" },
                    { value: "100dvh", description: "الارتفاع الكامل للنافذة الديناميكية" },
                    { value: "max-content", description: "الارتفاع حسب حجم المحتوى الداخلي" },
                    { value: "min-content", description: "أصغر ارتفاع يمكن أن يأخذه المحتوى" },
                    { value: "fit-content", description: "ارتفاع يناسب المحتوى لكن لا يتجاوز حجم الأب" },
                    { value: "stretch", description: "يتمدد ليملأ الارتفاع المتاح بالكامل" },
                    { value: "clamp(100px, 50vh, 400px)", description: "ارتفاع بين 100 و400 بكسل، و50% من ارتفاع النافذة" },
                    { value: "calc(100% - 60px)", description: "حساب ارتفاع باستخدام العملية الحسابية" }
                ],
                freeInput: true
            },
            // -------- min-width --------
            {
                name: "min-width",
                description: "يحدد أقل عرض يمكن أن يأخذه العنصر، لا يمكن أن يصغر عنه مهما قل المحتوى، يحافظ على حد أدنى للحجم",
                values: [
                    { value: "0", description: "بدون حد أدنى - يمكن أن يصغر حتى الصفر (القيمة الافتراضية)" },
                    { value: "10px", description: "حد أدنى 10 بكسل" },
                    { value: "20px", description: "حد أدنى 20 بكسل" },
                    { value: "50px", description: "حد أدنى 50 بكسل" },
                    { value: "100px", description: "حد أدنى 100 بكسل" },
                    { value: "150px", description: "حد أدنى 150 بكسل" },
                    { value: "200px", description: "حد أدنى 200 بكسل" },
                    { value: "300px", description: "حد أدنى 300 بكسل" },
                    { value: "400px", description: "حد أدنى 400 بكسل" },
                    { value: "500px", description: "حد أدنى 500 بكسل" },
                    { value: "10%", description: "حد أدنى 10% من عرض الأب" },
                    { value: "20%", description: "حد أدنى 20% من عرض الأب" },
                    { value: "25%", description: "حد أدنى 25% من عرض الأب" },
                    { value: "50%", description: "حد أدنى 50% من عرض الأب" },
                    { value: "100%", description: "حد أدنى 100% من عرض الأب - لا يمكن أن يكون أصغر" },
                    { value: "min-content", description: "حد أدنى حسب أصغر محتوى" },
                    { value: "max-content", description: "حد أدنى حسب أكبر محتوى" }
                ],
                freeInput: true
            },
            // -------- max-width --------
            {
                name: "max-width",
                description: "يحدد أكبر عرض يمكن أن يأخذه العنصر، لا يمكن أن يكبر عنه مهما زاد المحتوى، يمنع التمدد المفرط",
                values: [
                    { value: "none", description: "بدون حد أقصى - يمكن أن يكبر بلا حدود (القيمة الافتراضية)" },
                    { value: "100px", description: "حد أقصى 100 بكسل" },
                    { value: "200px", description: "حد أقصى 200 بكسل" },
                    { value: "300px", description: "حد أقصى 300 بكسل" },
                    { value: "400px", description: "حد أقصى 400 بكسل" },
                    { value: "500px", description: "حد أقصى 500 بكسل" },
                    { value: "600px", description: "حد أقصى 600 بكسل" },
                    { value: "700px", description: "حد أقصى 700 بكسل" },
                    { value: "800px", description: "حد أقصى 800 بكسل" },
                    { value: "900px", description: "حد أقصى 900 بكسل" },
                    { value: "1000px", description: "حد أقصى 1000 بكسل" },
                    { value: "50%", description: "حد أقصى 50% من عرض الأب" },
                    { value: "75%", description: "حد أقصى 75% من عرض الأب" },
                    { value: "90%", description: "حد أقصى 90% من عرض الأب" },
                    { value: "100%", description: "حد أقصى 100% من عرض الأب - لا يمكن أن يتجاوز الأب" },
                    { value: "min-content", description: "حد أقصى حسب أصغر محتوى" },
                    { value: "max-content", description: "حد أقصى حسب أكبر محتوى" },
                    { value: "fit-content", description: "حد أقصى حسب المحتوى المناسب" }
                ],
                freeInput: true
            },
            // -------- min-height --------
            {
                name: "min-height",
                description: "يحدد أقل ارتفاع يمكن أن يأخذه العنصر، لا يمكن أن يصغر عنه مهما قل المحتوى، يحافظ على حد أدنى للارتفاع",
                values: [
                    { value: "0", description: "بدون حد أدنى - يمكن أن يصغر حتى الصفر (القيمة الافتراضية)" },
                    { value: "10px", description: "حد أدنى 10 بكسل" },
                    { value: "20px", description: "حد أدنى 20 بكسل" },
                    { value: "50px", description: "حد أدنى 50 بكسل" },
                    { value: "100px", description: "حد أدنى 100 بكسل" },
                    { value: "150px", description: "حد أدنى 150 بكسل" },
                    { value: "200px", description: "حد أدنى 200 بكسل" },
                    { value: "300px", description: "حد أدنى 300 بكسل" },
                    { value: "400px", description: "حد أدنى 400 بكسل" },
                    { value: "500px", description: "حد أدنى 500 بكسل" },
                    { value: "10%", description: "حد أدنى 10% من ارتفاع الأب" },
                    { value: "20%", description: "حد أدنى 20% من ارتفاع الأب" },
                    { value: "25%", description: "حد أدنى 25% من ارتفاع الأب" },
                    { value: "50%", description: "حد أدنى 50% من ارتفاع الأب" },
                    { value: "100%", description: "حد أدنى 100% من ارتفاع الأب" },
                    { value: "100vh", description: "حد أدنى ارتفاع كامل النافذة" },
                    { value: "50vh", description: "حد أدنى نصف ارتفاع النافذة" }
                ],
                freeInput: true
            },
            // -------- max-height --------
            {
                name: "max-height",
                description: "يحدد أكبر ارتفاع يمكن أن يأخذه العنصر، لا يمكن أن يكبر عنه مهما زاد المحتوى، يمنع التمدد المفرط",
                values: [
                    { value: "none", description: "بدون حد أقصى - يمكن أن يكبر بلا حدود (القيمة الافتراضية)" },
                    { value: "100px", description: "حد أقصى 100 بكسل" },
                    { value: "200px", description: "حد أقصى 200 بكسل" },
                    { value: "300px", description: "حد أقصى 300 بكسل" },
                    { value: "400px", description: "حد أقصى 400 بكسل" },
                    { value: "500px", description: "حد أقصى 500 بكسل" },
                    { value: "600px", description: "حد أقصى 600 بكسل" },
                    { value: "700px", description: "حد أقصى 700 بكسل" },
                    { value: "800px", description: "حد أقصى 800 بكسل" },
                    { value: "900px", description: "حد أقصى 900 بكسل" },
                    { value: "1000px", description: "حد أقصى 1000 بكسل" },
                    { value: "50%", description: "حد أقصى 50% من ارتفاع الأب" },
                    { value: "75%", description: "حد أقصى 75% من ارتفاع الأب" },
                    { value: "90%", description: "حد أقصى 90% من ارتفاع الأب" },
                    { value: "100%", description: "حد أقصى 100% من ارتفاع الأب" },
                    { value: "100vh", description: "حد أقصى ارتفاع كامل النافذة" },
                    { value: "50vh", description: "حد أقصى نصف ارتفاع النافذة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. aspect-ratio (نسبة العرض إلى الارتفاع)
    // ============================================================
    {
        tag: "aspect-ratio",
        description: "يحدد نسبة العرض إلى الارتفاع للعنصر تلقائياً، مفيد للصور والفيديوهات المتجاوبة بدون الحاجة لحيل padding-top القديمة",
        properties: [
            {
                name: "aspect-ratio",
                description: "يحدد نسبة العرض إلى الارتفاع للعنصر تلقائياً",
                values: [
                    { value: "auto", description: "نسبة طبيعية حسب المحتوى (القيمة الافتراضية)" },
                    { value: "1 / 1", description: "نسبة 1:1 - مربع تماماً (صورة مربعة)" },
                    { value: "4 / 3", description: "نسبة 4:3 - تقليدية للصور (أوسع من الطول)" },
                    { value: "3 / 2", description: "نسبة 3:2 - شائعة في الكاميرات" },
                    { value: "3 / 4", description: "نسبة 3:4 - صورة عمودية" },
                    { value: "16 / 9", description: "نسبة 16:9 - شائعة للفيديو وشاشات العرض" },
                    { value: "21 / 9", description: "نسبة 21:9 - عريضة جداً (شاشات فائقة العرض)" },
                    { value: "9 / 16", description: "نسبة 9:16 - فيديو عمودي (ستوري)" },
                    { value: "2 / 3", description: "نسبة 2:3 - صورة عمودية" },
                    { value: "5 / 4", description: "نسبة 5:4 - شاشات قديمة" },
                    { value: "5 / 3", description: "نسبة 5:3 - شاشات واسعة" },
                    { value: "1.618 / 1", description: "نسبة 1.618:1 - النسبة الذهبية" },
                    { value: "1 / 2", description: "نسبة 1:2 - مستطيل عمودي طويل" },
                    { value: "2 / 1", description: "نسبة 2:1 - مستطيل أفقي طويل" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. box-sizing (حساب الأبعاد)
    // ============================================================
    {
        tag: "box-sizing",
        description: "يحدد كيف تُحسب أبعاد العنصر: هل تشمل width/height الحواف والمسافات الداخلية أم لا، يؤثر على حجم العنصر الكلي",
        properties: [
            {
                name: "box-sizing",
                description: "يحدد كيف تُحسب أبعاد العنصر",
                values: [
                    { value: "content-box", description: "width/height تخص المحتوى فقط، تُضاف padding وborder فوقها (القيمة الافتراضية) - قد يؤدي إلى نتائج غير متوقعة" },
                    { value: "border-box", description: "width/height تشمل padding وborder، فلا يزيد الحجم الكلي عنها (الأكثر استخداماً عملياً) - يسهل التصميم" }
                ]
            },
            {
                name: "box-decoration-break",
                description: "يحدد كيفية تطبيق الخلفية والحدود والظلال عند تقسيم العنصر عبر عدة أسطر أو أعمدة أو صفحات",
                values: [
                    { value: "slice", description: "يعامل العنصر كقطعة واحدة مقسّمة - الخلفية والحدود كأنها مستمرة (القيمة الافتراضية)" },
                    { value: "clone", description: "يكرر الخلفية والحدود على كل جزء كأنه عنصر مستقل - مفيد للنصوص الطويلة" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. margin (الهوامش الخارجية)
    // ============================================================
    {
        tag: "margin",
        description: "يحدد المسافة الخارجية للعنصر، تفصله عن العناصر المجاورة له، تتحكم في التباعد بين العناصر",
        properties: [
            // -------- margin --------
            {
                name: "margin",
                description: "الخاصية المختصرة للهوامش الخارجية، تحدد المسافة بين العنصر والعناصر المجاورة له",
                values: [
                    { value: "0", description: "بدون هوامش - العنصر ملتصق بالعناصر المجاورة" },
                    { value: "2px", description: "هامش 2 بكسل من جميع الجهات - تباعد ضئيل" },
                    { value: "4px", description: "هامش 4 بكسل من جميع الجهات" },
                    { value: "5px", description: "هامش 5 بكسل من جميع الجهات" },
                    { value: "8px", description: "هامش 8 بكسل من جميع الجهات" },
                    { value: "10px", description: "هامش 10 بكسل من جميع الجهات - تباعد مريح" },
                    { value: "12px", description: "هامش 12 بكسل من جميع الجهات" },
                    { value: "15px", description: "هامش 15 بكسل من جميع الجهات" },
                    { value: "20px", description: "هامش 20 بكسل من جميع الجهات - تباعد واضح" },
                    { value: "25px", description: "هامش 25 بكسل من جميع الجهات" },
                    { value: "30px", description: "هامش 30 بكسل من جميع الجهات" },
                    { value: "40px", description: "هامش 40 بكسل من جميع الجهات - تباعد كبير" },
                    { value: "50px", description: "هامش 50 بكسل من جميع الجهات" },
                    { value: "100px", description: "هامش 100 بكسل من جميع الجهات" },
                    { value: "10px 20px", description: "أعلى/أسفل = 10px، يمين/يسار = 20px - تباعد عمودي وأفقي مختلف" },
                    { value: "10px 20px 30px", description: "أعلى=10px، يمين/يسار=20px، أسفل=30px" },
                    { value: "10px 20px 30px 40px", description: "أعلى=10px، يمين=20px، أسفل=30px، يسار=40px" },
                    { value: "auto", description: "يقسم الهامش تلقائياً لتوسيط العنصر أفقياً (يعمل مع عرض محدد)" },
                    { value: "0 auto", description: "توسيط العنصر أفقياً - أشهر استخدام للتوسيط" },
                    { value: "10%", description: "هامش 10% من عرض الأب" },
                    { value: "5% 10%", description: "هامش عمودي 5%، أفقي 10%" }
                ],
                freeInput: true
            },
            // -------- margin-top --------
            {
                name: "margin-top",
                description: "يحدد المسافة الخارجية من الجهة العلوية للعنصر، تفصله عن العنصر الذي فوقه",
                values: [
                    { value: "0", description: "بدون هامش علوي" },
                    { value: "5px", description: "هامش علوي 5 بكسل" },
                    { value: "10px", description: "هامش علوي 10 بكسل" },
                    { value: "15px", description: "هامش علوي 15 بكسل" },
                    { value: "20px", description: "هامش علوي 20 بكسل" },
                    { value: "30px", description: "هامش علوي 30 بكسل" },
                    { value: "50px", description: "هامش علوي 50 بكسل" },
                    { value: "auto", description: "يتحكم المتصفح بالهامش العلوي" },
                    { value: "10%", description: "10% من ارتفاع العنصر الأب" }
                ],
                freeInput: true
            },
            // -------- margin-right --------
            {
                name: "margin-right",
                description: "يحدد المسافة الخارجية من الجهة اليمنى للعنصر، تفصله عن العنصر الذي على يمينه",
                values: [
                    { value: "0", description: "بدون هامش أيمن" },
                    { value: "10px", description: "هامش أيمن 10 بكسل" },
                    { value: "20px", description: "هامش أيمن 20 بكسل" },
                    { value: "auto", description: "يتحكم المتصفح بالهامش الأيمن - مفيد للتوسيط" },
                    { value: "10%", description: "10% من عرض العنصر الأب" }
                ],
                freeInput: true
            },
            // -------- margin-bottom --------
            {
                name: "margin-bottom",
                description: "يحدد المسافة الخارجية من الجهة السفلية للعنصر، تفصله عن العنصر الذي تحته",
                values: [
                    { value: "0", description: "بدون هامش سفلي" },
                    { value: "10px", description: "هامش سفلي 10 بكسل" },
                    { value: "20px", description: "هامش سفلي 20 بكسل" },
                    { value: "30px", description: "هامش سفلي 30 بكسل" },
                    { value: "50px", description: "هامش سفلي 50 بكسل" },
                    { value: "auto", description: "يتحكم المتصفح بالهامش السفلي" },
                    { value: "10%", description: "10% من ارتفاع العنصر الأب" }
                ],
                freeInput: true
            },
            // -------- margin-left --------
            {
                name: "margin-left",
                description: "يحدد المسافة الخارجية من الجهة اليسرى للعنصر، تفصله عن العنصر الذي على يساره",
                values: [
                    { value: "0", description: "بدون هامش أيسر" },
                    { value: "10px", description: "هامش أيسر 10 بكسل" },
                    { value: "20px", description: "هامش أيسر 20 بكسل" },
                    { value: "auto", description: "يتحكم المتصفح بالهامش الأيسر - مفيد للتوسيط" },
                    { value: "10%", description: "10% من عرض العنصر الأب" }
                ],
                freeInput: true
            },
            // -------- margin collapse (ملاحظة) --------
            {
                name: "margin-collapse (ملاحظة)",
                description: "ظاهرة انهيار الهوامش: عندما يتلامس هامشان رأسيان، ينهاران إلى الهامش الأكبر منهما (وليس المجموع)",
                values: [
                    { value: "ملاحظة مهمة", description: "الهوامش الرأسية للأخوة المتجاورة تنهار، والهوامش بين الأب والابن الأولى تنهار أيضاً" },
                    { value: "حلول", description: "استخدم padding بدلاً من margin، أو أضف border أو overflow: auto لمنع الانهيار" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. padding (المسافات الداخلية)
    // ============================================================
    {
        tag: "padding",
        description: "يحدد المسافة الداخلية للعنصر بين المحتوى والحواف، تزيد من حجم العنصر من الداخل وتحمي المحتوى من الالتصاق بالحواف",
        properties: [
            // -------- padding --------
            {
                name: "padding",
                description: "الخاصية المختصرة للمسافات الداخلية، تحدد المسافة بين المحتوى وحافة العنصر",
                values: [
                    { value: "0", description: "بدون مسافات داخلية - المحتوى ملتصق بالحافة" },
                    { value: "2px", description: "مسافة 2 بكسل من جميع الجهات" },
                    { value: "4px", description: "مسافة 4 بكسل من جميع الجهات" },
                    { value: "5px", description: "مسافة 5 بكسل من جميع الجهات" },
                    { value: "8px", description: "مسافة 8 بكسل من جميع الجهات" },
                    { value: "10px", description: "مسافة 10 بكسل من جميع الجهات - مسافة مريحة" },
                    { value: "12px", description: "مسافة 12 بكسل من جميع الجهات" },
                    { value: "15px", description: "مسافة 15 بكسل من جميع الجهات" },
                    { value: "20px", description: "مسافة 20 بكسل من جميع الجهات - مسافة واضحة" },
                    { value: "25px", description: "مسافة 25 بكسل من جميع الجهات" },
                    { value: "30px", description: "مسافة 30 بكسل من جميع الجهات" },
                    { value: "40px", description: "مسافة 40 بكسل من جميع الجهات - مساحة واسعة" },
                    { value: "50px", description: "مسافة 50 بكسل من جميع الجهات" },
                    { value: "100px", description: "مسافة 100 بكسل من جميع الجهات" },
                    { value: "10px 20px", description: "أعلى/أسفل = 10px، يمين/يسار = 20px" },
                    { value: "10px 20px 30px", description: "أعلى=10px، يمين/يسار=20px، أسفل=30px" },
                    { value: "10px 20px 30px 40px", description: "أعلى=10px، يمين=20px، أسفل=30px، يسار=40px" },
                    { value: "10%", description: "مسافة 10% من عرض الأب" }
                ],
                freeInput: true
            },
            // -------- padding-top --------
            {
                name: "padding-top",
                description: "يحدد المسافة الداخلية من الجهة العلوية، تخلق فجوة بين المحتوى والحافة العلوية",
                values: [
                    { value: "0", description: "بدون مسافة داخلية علوية" },
                    { value: "5px", description: "مسافة 5 بكسل من الأعلى" },
                    { value: "10px", description: "مسافة 10 بكسل من الأعلى" },
                    { value: "15px", description: "مسافة 15 بكسل من الأعلى" },
                    { value: "20px", description: "مسافة 20 بكسل من الأعلى" },
                    { value: "30px", description: "مسافة 30 بكسل من الأعلى" },
                    { value: "10%", description: "10% من عرض العنصر الأب" }
                ],
                freeInput: true
            },
            // -------- padding-right --------
            {
                name: "padding-right",
                description: "يحدد المسافة الداخلية من الجهة اليمنى، تخلق فجوة بين المحتوى والحافة اليمنى",
                values: [
                    { value: "0", description: "بدون مسافة داخلية يمنى" },
                    { value: "10px", description: "مسافة 10 بكسل من اليمين" },
                    { value: "20px", description: "مسافة 20 بكسل من اليمين" },
                    { value: "10%", description: "10% من عرض العنصر الأب" }
                ],
                freeInput: true
            },
            // -------- padding-bottom --------
            {
                name: "padding-bottom",
                description: "يحدد المسافة الداخلية من الجهة السفلية، تخلق فجوة بين المحتوى والحافة السفلية",
                values: [
                    { value: "0", description: "بدون مسافة داخلية سفلية" },
                    { value: "10px", description: "مسافة 10 بكسل من الأسفل" },
                    { value: "20px", description: "مسافة 20 بكسل من الأسفل" },
                    { value: "30px", description: "مسافة 30 بكسل من الأسفل" },
                    { value: "10%", description: "10% من عرض العنصر الأب" }
                ],
                freeInput: true
            },
            // -------- padding-left --------
            {
                name: "padding-left",
                description: "يحدد المسافة الداخلية من الجهة اليسرى، تخلق فجوة بين المحتوى والحافة اليسرى",
                values: [
                    { value: "0", description: "بدون مسافة داخلية يسرى" },
                    { value: "10px", description: "مسافة 10 بكسل من اليسار" },
                    { value: "20px", description: "مسافة 20 بكسل من اليسار" },
                    { value: "10%", description: "10% من عرض العنصر الأب" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. border (الحواف) - مختصر
    // ============================================================
    {
        tag: "border",
        description: "يحدد خصائص الحواف (العرض، النمط، اللون) بشكل مختصر، تخلق حدوداً مرئية حول العنصر",
        properties: [
            // -------- border --------
            {
                name: "border",
                description: "الخاصية المختصرة للحواف، تجمع العرض، النمط، واللون في سطر واحد",
                values: [
                    { value: "none", description: "بدون حافة (القيمة الافتراضية)" },
                    { value: "1px solid black", description: "حافة سوداء صلبة سمك 1 بكسل" },
                    { value: "2px dashed red", description: "حافة حمراء متقطعة سمك 2 بكسل" },
                    { value: "3px dotted blue", description: "حافة زرقاء منقطة سمك 3 بكسل" },
                    { value: "4px double green", description: "حافة خضراء مزدوجة سمك 4 بكسل" },
                    { value: "5px groove gray", description: "حافة رمادية بظل تجويف سمك 5 بكسل" },
                    { value: "6px ridge gold", description: "حافة ذهبية بارزة سمك 6 بكسل" },
                    { value: "7px inset navy", description: "حافة غائرة باللون البحري" },
                    { value: "8px outset crimson", description: "حافة بارزة للخارج" },
                    { value: "2px solid transparent", description: "حافة شفافة - تحافظ على المساحة" },
                    { value: "1px solid #cccccc", description: "حافة رمادية فاتحة" }
                ],
                freeInput: true
            },
            // -------- border-width --------
            {
                name: "border-width",
                description: "يحدد سمك الحافة من جميع الجهات أو لكل جهة على حدة",
                values: [
                    { value: "thin", description: "سمك رفيع (عادة 1 بكسل)" },
                    { value: "medium", description: "سمك متوسط (عادة 3 بكسل) - القيمة الافتراضية" },
                    { value: "thick", description: "سمك سميك (عادة 5 بكسل)" },
                    { value: "1px", description: "سمك 1 بكسل" },
                    { value: "2px", description: "سمك 2 بكسل" },
                    { value: "3px", description: "سمك 3 بكسل" },
                    { value: "4px", description: "سمك 4 بكسل" },
                    { value: "5px", description: "سمك 5 بكسل" },
                    { value: "10px", description: "سمك 10 بكسل" },
                    { value: "1px 2px", description: "أعلى/أسفل = 1px، يمين/يسار = 2px" },
                    { value: "1px 2px 3px", description: "أعلى=1px، يمين/يسار=2px، أسفل=3px" },
                    { value: "1px 2px 3px 4px", description: "كل جهة بقيمة مختلفة" }
                ],
                freeInput: true
            },
            // -------- border-style --------
            {
                name: "border-style",
                description: "يحدد نمط الحافة من جميع الجهات",
                values: [
                    { value: "none", description: "بدون حافة" },
                    { value: "hidden", description: "يخفي الحافة (خاص بالجداول)" },
                    { value: "solid", description: "خط صلب - الأكثر استخداماً" },
                    { value: "dashed", description: "خط متقطع بشرطات" },
                    { value: "dotted", description: "خط منقط بنقاط" },
                    { value: "double", description: "خط مزدوج" },
                    { value: "groove", description: "خط ذو تجويف ثلاثي الأبعاد" },
                    { value: "ridge", description: "خط بارز ثلاثي الأبعاد" },
                    { value: "inset", description: "خط غائر ثلاثي الأبعاد" },
                    { value: "outset", description: "خط بارز للخارج ثلاثي الأبعاد" }
                ]
            },
            // -------- border-color --------
            {
                name: "border-color",
                description: "يحدد لون الحافة من جميع الجهات",
                values: [
                    { value: "transparent", description: "لون شفاف" },
                    { value: "currentColor", description: "نفس لون النص" },
                    { value: "black", description: "أسود" },
                    { value: "white", description: "أبيض" },
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" },
                    { value: "green", description: "أخضر" },
                    { value: "#ff0000", description: "أحمر (Hex)" },
                    { value: "rgb(255, 0, 0)", description: "أحمر (RGB)" },
                    { value: "rgba(255, 0, 0, 0.5)", description: "أحمر شفاف" },
                    { value: "hsl(0, 100%, 50%)", description: "أحمر (HSL)" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 7. border-radius (الزوايا الدائرية)
    // ============================================================
    {
        tag: "border-radius",
        description: "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء، يعطي مظهراً ناعماً وعصرياً",
        properties: [
            {
                name: "border-radius",
                description: "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء",
                values: [
                    { value: "0", description: "زوايا حادة (القيمة الافتراضية)" },
                    { value: "2px", description: "انحناء طفيف جداً" },
                    { value: "4px", description: "انحناء خفيف" },
                    { value: "6px", description: "انحناء خفيف متوسط" },
                    { value: "8px", description: "انحناء متوسط" },
                    { value: "10px", description: "انحناء متوسط - الأكثر استخداماً" },
                    { value: "12px", description: "انحناء متوسط واضح" },
                    { value: "15px", description: "انحناء واضح" },
                    { value: "20px", description: "انحناء كبير" },
                    { value: "25px", description: "انحناء كبير" },
                    { value: "30px", description: "انحناء كبير جداً" },
                    { value: "40px", description: "انحناء كبير جداً" },
                    { value: "50px", description: "انحناء كبير جداً - شبه دائري" },
                    { value: "100px", description: "انحناء 100 بكسل" },
                    { value: "50%", description: "يجعل العنصر دائرياً بالكامل (إذا كان مربعاً)" },
                    { value: "100%", description: "يجعل العنصر بيضاوياً" },
                    { value: "10px 20px", description: "زوايا متقابلة بنفس القيمة" },
                    { value: "10px 20px 30px 40px", description: "كل زاوية بقيمة مختلفة" },
                    { value: "10px / 20px", description: "انحناء أفقي 10px وعمودي 20px (بيضاوي)" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 8. الخصائص المنطقية (Logical Properties)
    // ============================================================
    {
        tag: "logical-properties",
        description: "الخصائص المنطقية لنموذج الصندوق، تتكيف مع اتجاه النص (RTL/LTR)، مهمة للدعم متعدد اللغات",
        properties: [
            // -------- margin-block --------
            {
                name: "margin-block",
                description: "يحدد الهوامش الخارجية في اتجاه الكتلة (الرأسي في اللغات الأفقية) بدلاً من top/bottom",
                values: [
                    { value: "10px", description: "هامش 10 بكسل في اتجاه الكتلة (أعلى وأسفل)" },
                    { value: "10px 20px", description: "بداية الكتلة=10px، نهاية الكتلة=20px" },
                    { value: "auto", description: "يقسم الهامش تلقائياً" }
                ],
                freeInput: true
            },
            // -------- margin-inline --------
            {
                name: "margin-inline",
                description: "يحدد الهوامش الخارجية في اتجاه الخط (الأفقي في اللغات الأفقية) بدلاً من left/right",
                values: [
                    { value: "10px", description: "هامش 10 بكسل في اتجاه الخط (يمين ويسار)" },
                    { value: "10px 20px", description: "بداية الخط=10px، نهاية الخط=20px" },
                    { value: "auto", description: "يقسم الهامش تلقائياً" }
                ],
                freeInput: true
            },
            // -------- padding-block --------
            {
                name: "padding-block",
                description: "يحدد المسافات الداخلية في اتجاه الكتلة (الرأسي) بدلاً من top/bottom",
                values: [
                    { value: "10px", description: "مسافة 10 بكسل في اتجاه الكتلة" },
                    { value: "10px 20px", description: "بداية الكتلة=10px، نهاية الكتلة=20px" }
                ],
                freeInput: true
            },
            // -------- padding-inline --------
            {
                name: "padding-inline",
                description: "يحدد المسافات الداخلية في اتجاه الخط (الأفقي) بدلاً من left/right",
                values: [
                    { value: "10px", description: "مسافة 10 بكسل في اتجاه الخط" },
                    { value: "10px 20px", description: "بداية الخط=10px، نهاية الخط=20px" }
                ],
                freeInput: true
            },
            // -------- border-block --------
            {
                name: "border-block",
                description: "يحدد الحافة في اتجاه الكتلة (أعلى وأسفل في اللغات الأفقية)",
                values: [
                    { value: "2px solid black", description: "حافة بداية ونهاية الكتلة معاً" },
                    { value: "3px dashed red", description: "حافة حمراء متقطعة" }
                ],
                freeInput: true
            },
            // -------- border-inline --------
            {
                name: "border-inline",
                description: "يحدد الحافة في اتجاه الخط (يمين ويسار في اللغات الأفقية)",
                values: [
                    { value: "2px solid black", description: "حافة بداية ونهاية السطر معاً" },
                    { value: "2px dashed green", description: "حافة خضراء متقطعة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 9. outline (المخطط الخارجي)
    // ============================================================
    {
        tag: "outline",
        description: "يحدد مخططاً خارجياً للعنصر (يظهر خارج الحافة ولا يأخذ مساحة)، مفيد للتأكيد على العناصر النشطة",
        properties: [
            // -------- outline --------
            {
                name: "outline",
                description: "الخاصية المختصرة للمخطط الخارجي، تجمع width, style, color",
                values: [
                    { value: "none", description: "بدون مخطط (القيمة الافتراضية)" },
                    { value: "2px solid red", description: "مخطط أحمر سمك 2 بكسل صلبة" },
                    { value: "3px dashed blue", description: "مخطط أزرق متقطع سمك 3 بكسل" },
                    { value: "4px dotted green", description: "مخطط أخضر منقط" },
                    { value: "5px double orange", description: "مخطط برتقالي مزدوج" }
                ],
                freeInput: true
            },
            // -------- outline-width --------
            {
                name: "outline-width",
                description: "يحدد سمك المخطط الخارجي",
                values: [
                    { value: "thin", description: "سمك رفيع (1 بكسل)" },
                    { value: "medium", description: "سمك متوسط (3 بكسل)" },
                    { value: "thick", description: "سمك سميك (5 بكسل)" },
                    { value: "2px", description: "سمك 2 بكسل" },
                    { value: "3px", description: "سمك 3 بكسل" },
                    { value: "4px", description: "سمك 4 بكسل" }
                ],
                freeInput: true
            },
            // -------- outline-style --------
            {
                name: "outline-style",
                description: "يحدد نمط المخطط الخارجي",
                values: [
                    { value: "none", description: "بدون مخطط" },
                    { value: "solid", description: "خط صلب" },
                    { value: "dashed", description: "متقطع" },
                    { value: "dotted", description: "منقط" },
                    { value: "double", description: "مزدوج" },
                    { value: "groove", description: "تجويف" },
                    { value: "ridge", description: "بارز" },
                    { value: "inset", description: "غائر" },
                    { value: "outset", description: "بارز للخارج" }
                ]
            },
            // -------- outline-color --------
            {
                name: "outline-color",
                description: "يحدد لون المخطط الخارجي",
                values: [
                    { value: "invert", description: "لون معكوس من خلفية العنصر" },
                    { value: "currentColor", description: "نفس لون النص (القيمة الافتراضية)" },
                    { value: "red", description: "أحمر" },
                    { value: "blue", description: "أزرق" }
                ],
                freeInput: true
            },
            // -------- outline-offset --------
            {
                name: "outline-offset",
                description: "يحدد المسافة بين المخطط الخارجي وحافة العنصر، تظهر فجوة بينهما",
                values: [
                    { value: "0", description: "بدون فجوة (القيمة الافتراضية)" },
                    { value: "2px", description: "فجوة 2 بكسل" },
                    { value: "5px", description: "فجوة 5 بكسل" },
                    { value: "10px", description: "فجوة 10 بكسل" },
                    { value: "-2px", description: "يتداخل المخطط مع الحافة (قيمة سالبة)" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 10. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "box-model-examples",
        description: "أمثلة عملية متقدمة لنموذج الصندوق تجمع بين عدة خصائص",
        properties: [
            {
                name: "مثال 1 - بطاقة محتوى أنيقة",
                description: "بطاقة مع هوامش ومسافات داخلية متوازنة",
                values: [
                    { value: ".card { width: 300px; padding: 20px; margin: 15px auto; border: 1px solid #e0e0e0; border-radius: 12px; box-sizing: border-box; }", description: "بطاقة بتصميم نظيف ومتوازن" }
                ]
            },
            {
                name: "مثال 2 - تخطيط مرن",
                description: "عناصر ذات عرض نسبي مع حدود دنيا وعليا",
                values: [
                    { value: ".container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 20px; box-sizing: border-box; }", description: "حاوية مركزية متجاوبة" }
                ]
            },
            {
                name: "مثال 3 - صورة متجاوبة",
                description: "صورة تحافظ على نسبها مع حدود قصوى",
                values: [
                    { value: ".responsive-image { width: 100%; max-width: 600px; height: auto; aspect-ratio: 16 / 9; border-radius: 8px; }", description: "صورة فيديو متجاوبة" }
                ]
            },
            {
                name: "مثال 4 - مربع دائري مع ظل",
                description: "عنصر دائري مع هوامش ومسافات داخلية",
                values: [
                    { value: ".avatar { width: 80px; height: 80px; border-radius: 50%; padding: 4px; border: 2px solid #0078ff; margin: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }", description: "صورة رمزية دائرية مع إطار" }
                ]
            },
            {
                name: "مثال 5 - فواصل عمودية",
                description: "استخدام الهوامش لإنشاء تباعد عمودي",
                values: [
                    { value: ".section { margin-bottom: 40px; padding: 20px; border-bottom: 2px solid #eee; } .section:last-child { margin-bottom: 0; border-bottom: none; }", description: "أقسام مفصولة بفواصل" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. نصائح وإرشادات
    // ============================================================
    {
        tag: "box-model-tips",
        description: "نصائح وإرشادات مهمة لاستخدام نموذج الصندوق بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لنموذج الصندوق",
                values: [
                    { value: "استخدم box-sizing: border-box عالمياً", description: "* { box-sizing: border-box; } يسهل حسابات الأبعاد بشكل كبير" },
                    { value: "افهم margin collapse", description: "الهوامش الرأسية تنهار إلى القيمة الأكبر، وليس المجموع" },
                    { value: "استخدم padding بدلاً من margin للتباعد الداخلي", description: "padding يضيف مسافة داخل العنصر، margin يضيف مسافة خارجه" }
                ]
            },
            {
                name: "نصائح التصميم المتجاوب",
                description: "نصائح للتصميم المتجاوب باستخدام نموذج الصندوق",
                values: [
                    { value: "استخدم وحدات نسبية", description: "%، vw، vh، rem، em أفضل من px في التصميم المتجاوب" },
                    { value: "حدد max-width للصور", description: "img { max-width: 100%; height: auto; } يمنع الصور من التجاوز" },
                    { value: "استخدم clamp() للأحجام", description: "clamp(200px, 50%, 400px) يوفر مرونة مع حدود" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء نموذج الصندوق",
                values: [
                    { value: "تجنب التغيير المتكرر للأبعاد", description: "تغيير width و height يسبب إعادة تدفق (reflow)" },
                    { value: "استخدم transform بدلاً من تغيير position", description: "transform لا يسبب إعادة تدفق" },
                    { value: "استخدم will-change للأبعاد المتغيرة", description: "will-change: width, height يحسن الأداء" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.boxModelData = boxModelData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = boxModelData;
}