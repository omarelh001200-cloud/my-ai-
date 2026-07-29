// ============================================================
// misc.js
// خصائص CSS المتنوعة (Miscellaneous)
// تشمل خصائص لا تندرج تحت تصنيف محدد بوضوح مثل التدرجات، المؤثرات، والتكامل مع SVG
// ============================================================

const miscData = [
    // ============================================================
    // 1. التدرجات اللونية (Gradients)
    // ============================================================
    {
        tag: "gradients",
        description: "التدرجات اللونية (تُستخدم كقيم لـ background-image و border-image وغيرها)",
        properties: [
            // -------- linear-gradient --------
            {
                name: "linear-gradient",
                description: "تدرج لوني خطي في اتجاه معين (أفقي، عمودي، أو بزاوية)",
                values: [
                    { value: "linear-gradient(red, blue)", description: "تدرج من الأحمر إلى الأزرق (من أعلى لأسفل)" },
                    { value: "linear-gradient(red 0%, blue 100%)", description: "تدرج من الأحمر إلى الأزرق مع نسب مئوية" },
                    { value: "linear-gradient(to right, red, blue)", description: "تدرج من اليسار إلى اليمين" },
                    { value: "linear-gradient(to left, red, blue)", description: "تدرج من اليمين إلى اليسار" },
                    { value: "linear-gradient(to top, red, blue)", description: "تدرج من الأسفل إلى الأعلى" },
                    { value: "linear-gradient(to bottom, red, blue)", description: "تدرج من الأعلى إلى الأسفل" },
                    { value: "linear-gradient(to top right, red, blue)", description: "تدرج قطري إلى أعلى اليمين" },
                    { value: "linear-gradient(to bottom left, red, blue)", description: "تدرج قطري إلى أسفل اليسار" },
                    { value: "linear-gradient(45deg, red, blue)", description: "تدرج بزاوية 45 درجة" },
                    { value: "linear-gradient(90deg, red, blue)", description: "تدرج بزاوية 90 درجة (أفقي)" },
                    { value: "linear-gradient(180deg, red, blue)", description: "تدرج بزاوية 180 درجة (عمودي)" },
                    { value: "linear-gradient(red 0%, blue 50%, green 100%)", description: "تدرج بثلاثة ألوان مع نسب" },
                    { value: "linear-gradient(red 30%, blue 70%)", description: "تدرج مع تحكم في نقاط الانتقال" },
                    { value: "linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))", description: "تدرج شفاف إلى معتم" },
                    { value: "linear-gradient(to right, #f093fb 0%, #f5576c 100%)", description: "تدرج وردي-أحمر عصري" },
                    { value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", description: "تدرج بنفسجي-أزرق أنيق" },
                    { value: "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)", description: "تدرج أخضر-فيروزي" },
                    { value: "repeating-linear-gradient(red 0px, blue 20px)", description: "تدرج خطي متكرر" },
                    { value: "repeating-linear-gradient(45deg, red 0px, blue 10px, red 20px)", description: "تدرج خطي متكرر بزاوية" }
                ],
                freeInput: true
            },
            // -------- radial-gradient --------
            {
                name: "radial-gradient",
                description: "تدرج لوني شعاعي (دائري أو بيضاوي) يبدأ من نقطة مركزية",
                values: [
                    { value: "radial-gradient(circle, red, blue)", description: "تدرج شعاعي دائري" },
                    { value: "radial-gradient(ellipse, red, blue)", description: "تدرج شعاعي بيضاوي" },
                    { value: "radial-gradient(circle at center, red, blue)", description: "تدرج دائري مركزه في المنتصف" },
                    { value: "radial-gradient(circle at 20% 50%, red, blue)", description: "تدرج دائري مركزه 20% من اليسار" },
                    { value: "radial-gradient(circle at top left, red, blue)", description: "تدرج دائري من أعلى اليسار" },
                    { value: "radial-gradient(circle at bottom right, red, blue)", description: "تدرج دائري من أسفل اليمين" },
                    { value: "radial-gradient(circle closest-side, red, blue)", description: "يتوقف عند أقرب حافة" },
                    { value: "radial-gradient(circle farthest-side, red, blue)", description: "يمتد لأبعد حافة" },
                    { value: "radial-gradient(circle closest-corner, red, blue)", description: "يتوقف عند أقرب زاوية" },
                    { value: "radial-gradient(circle farthest-corner, red, blue)", description: "يمتد لأبعد زاوية" },
                    { value: "radial-gradient(circle, red 30%, blue 70%)", description: "تدرج مع تحكم في النقاط" },
                    { value: "radial-gradient(circle at 50% 50%, red, blue, green)", description: "تدرج بثلاثة ألوان" },
                    { value: "repeating-radial-gradient(circle, red 0%, blue 20%)", description: "تدرج شعاعي متكرر" },
                    { value: "repeating-radial-gradient(circle at center, red 0px, blue 10px, red 20px)", description: "تدرج شعاعي متكرر بتأثير حلقي" }
                ],
                freeInput: true
            },
            // -------- conic-gradient --------
            {
                name: "conic-gradient",
                description: "تدرج لوني مخروطي (يدور حول نقطة مركزية مثل قطاع الدائرة)",
                values: [
                    { value: "conic-gradient(red, blue)", description: "تدرج مخروطي من الأحمر إلى الأزرق" },
                    { value: "conic-gradient(from 0deg, red, blue)", description: "تدرج مخروطي يبدأ من 0 درجة" },
                    { value: "conic-gradient(from 45deg, red, blue)", description: "يبدأ من زاوية 45 درجة" },
                    { value: "conic-gradient(from 90deg, red, blue)", description: "يبدأ من زاوية 90 درجة" },
                    { value: "conic-gradient(at 50% 50%, red, blue)", description: "مركزه في المنتصف" },
                    { value: "conic-gradient(at top left, red, blue)", description: "مركزه في أعلى اليسار" },
                    { value: "conic-gradient(red 0%, blue 50%, green 100%)", description: "تدرج مخروطي بثلاثة ألوان" },
                    { value: "conic-gradient(red 0deg 90deg, blue 90deg 180deg, green 180deg 360deg)", description: "أقسام محددة بألوان مختلفة" },
                    { value: "conic-gradient(red 0%, red 25%, blue 25%, blue 50%, green 50%, green 75%, yellow 75%)", description: "تدرج مخروطي بتأثير الدوائر القطاعية" },
                    { value: "repeating-conic-gradient(red 0%, blue 20%)", description: "تدرج مخروطي متكرر" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. خصائص SVG
    // ============================================================
    {
        tag: "svg",
        description: "خصائص خاصة بتكامل CSS مع SVG (الرسوميات المتجهية)",
        properties: [
            // -------- fill --------
            {
                name: "fill",
                description: "يحدد لون تعبئة الشكل في SVG (يمكن استخدامه في CSS للعناصر SVG)",
                values: [
                    { value: "none", description: "بدون تعبئة - شفاف" },
                    { value: "red", description: "لون أحمر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "green", description: "لون أخضر" },
                    { value: "#007bff", description: "لون مخصص باستخدام Hex" },
                    { value: "rgb(255, 0, 0)", description: "لون أحمر باستخدام RGB" },
                    { value: "rgba(255, 0, 0, 0.5)", description: "لون أحمر شفاف 50%" },
                    { value: "currentColor", description: "نفس لون النص" },
                    { value: "url('#gradient')", description: "تعبئة بتدرج لوني معرف في SVG" },
                    { value: "url('pattern.svg#pattern')", description: "تعبئة بنمط من SVG" }
                ],
                freeInput: true
            },
            // -------- stroke --------
            {
                name: "stroke",
                description: "يحدد لون حدود الشكل في SVG",
                values: [
                    { value: "none", description: "بدون حدود" },
                    { value: "black", description: "حدود سوداء" },
                    { value: "red", description: "حدود حمراء" },
                    { value: "#007bff", description: "لون مخصص" },
                    { value: "url('#gradient')", description: "حدود بتدرج لوني" }
                ],
                freeInput: true
            },
            // -------- stroke-width --------
            {
                name: "stroke-width",
                description: "يحدد سمك حدود الشكل في SVG",
                values: [
                    { value: "0.5", description: "سمك 0.5 بكسل - رفيع جداً" },
                    { value: "1", description: "سمك 1 بكسل - القيمة الافتراضية" },
                    { value: "1.5", description: "سمك 1.5 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "2px", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل - سميك" },
                    { value: "10", description: "سمك 10 بكسل - سميك جداً" }
                ],
                freeInput: true
            },
            // -------- stroke-linecap --------
            {
                name: "stroke-linecap",
                description: "يحدد شكل نهايات الخطوط في SVG",
                values: [
                    { value: "butt", description: "نهاية حادة ومقطوعة - القيمة الافتراضية" },
                    { value: "round", description: "نهاية دائرية - ناعمة" },
                    { value: "square", description: "نهاية مربعة - ممتدة قليلاً" }
                ]
            },
            // -------- stroke-linejoin --------
            {
                name: "stroke-linejoin",
                description: "يحدد شكل التقاء الخطوط في الزوايا في SVG",
                values: [
                    { value: "miter", description: "زاوية حادة - القيمة الافتراضية" },
                    { value: "round", description: "زاوية دائرية - ناعمة" },
                    { value: "bevel", description: "زاوية مشطوفة - مقطوعة" }
                ]
            },
            // -------- stroke-dasharray --------
            {
                name: "stroke-dasharray",
                description: "يحدد نمط الخط المتقطع في SVG (طول الشرطة والفراغ)",
                values: [
                    { value: "none", description: "بدون تقطيع - خط متصل" },
                    { value: "2", description: "شرطة 2 بكسل، فراغ 2 بكسل" },
                    { value: "5", description: "شرطة 5 بكسل، فراغ 5 بكسل" },
                    { value: "10", description: "شرطة 10 بكسل، فراغ 10 بكسل" },
                    { value: "5 10", description: "شرطة 5 بكسل، فراغ 10 بكسل" },
                    { value: "10 5", description: "شرطة 10 بكسل، فراغ 5 بكسل" },
                    { value: "10 5 2 5", description: "نمط معقد: شرطة 10، فراغ 5، شرطة 2، فراغ 5" },
                    { value: "20 10 5 10", description: "نمط معقد" }
                ],
                freeInput: true
            },
            // -------- stroke-dashoffset --------
            {
                name: "stroke-dashoffset",
                description: "يحدد إزاحة بداية نمط الخط المتقطع في SVG، يستخدم لتحريك الشرطات",
                values: [
                    { value: "0", description: "بدون إزاحة - القيمة الافتراضية" },
                    { value: "5px", description: "إزاحة 5 بكسل" },
                    { value: "10px", description: "إزاحة 10 بكسل" },
                    { value: "50%", description: "إزاحة 50%" },
                    { value: "100%", description: "إزاحة 100%" }
                ],
                freeInput: true
            },
            // -------- stroke-opacity --------
            {
                name: "stroke-opacity",
                description: "يحدد شفافية الحدود في SVG من 0 إلى 1",
                values: [
                    { value: "1", description: "معتم بالكامل - القيمة الافتراضية" },
                    { value: "0.5", description: "شفاف 50%" },
                    { value: "0", description: "شفاف بالكامل" }
                ],
                freeInput: true
            },
            // -------- fill-opacity --------
            {
                name: "fill-opacity",
                description: "يحدد شفافية التعبئة في SVG من 0 إلى 1",
                values: [
                    { value: "1", description: "معتم بالكامل - القيمة الافتراضية" },
                    { value: "0.5", description: "شفاف 50%" },
                    { value: "0", description: "شفاف بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. الدوال الرياضية (Math Functions)
    // ============================================================
    {
        tag: "math",
        description: "الدوال الرياضية في CSS (تُستخدم في أي قيمة رقمية)",
        properties: [
            // -------- calc() --------
            {
                name: "calc()",
                description: "يجري عمليات حسابية (جمع، طرح، ضرب، قسمة) بين قيم مختلفة",
                values: [
                    { value: "calc(100% - 20px)", description: "طرح 20 بكسل من 100%" },
                    { value: "calc(100% + 20px)", description: "إضافة 20 بكسل إلى 100%" },
                    { value: "calc(100vh - 60px)", description: "طرح 60 بكسل من ارتفاع النافذة" },
                    { value: "calc(100vw - 40px)", description: "طرح 40 بكسل من عرض النافذة" },
                    { value: "calc(1rem + 2px)", description: "جمع rem و بكسل" },
                    { value: "calc(50% - 20px)", description: "نصف العرض ناقص 20 بكسل" },
                    { value: "calc((100% - 40px) / 3)", description: "قسمة بعد الطرح" },
                    { value: "calc(100% / 4)", description: "ربع العرض" },
                    { value: "calc(2 * 10px)", description: "ضرب" },
                    { value: "calc(100% / 2 - 10px)", description: "عمليات مركبة" }
                ],
                freeInput: true
            },
            // -------- min() --------
            {
                name: "min()",
                description: "تأخذ أصغر قيمة من بين عدة قيم (تشبه Math.min)",
                values: [
                    { value: "min(100px, 50%)", description: "أصغر بين 100 بكسل و 50%" },
                    { value: "min(200px, 50vh, 80%)", description: "أصغر بين ثلاث قيم" },
                    { value: "min(2rem, 24px)", description: "أصغر بين 2rem و 24 بكسل" },
                    { value: "min(600px, 100%)", description: "لا يتجاوز 600 بكسل أو العرض الكامل" }
                ],
                freeInput: true
            },
            // -------- max() --------
            {
                name: "max()",
                description: "تأخذ أكبر قيمة من بين عدة قيم (تشبه Math.max)",
                values: [
                    { value: "max(100px, 50%)", description: "أكبر بين 100 بكسل و 50%" },
                    { value: "max(200px, 50vh, 80%)", description: "أكبر بين ثلاث قيم" },
                    { value: "max(2rem, 24px)", description: "أكبر بين 2rem و 24 بكسل" },
                    { value: "max(300px, 100%)", description: "على الأقل 300 بكسل أو العرض الكامل" }
                ],
                freeInput: true
            },
            // -------- clamp() --------
            {
                name: "clamp()",
                description: "تحدد قيمة بين حد أدنى وحد أقصى (توسيط القيم)",
                values: [
                    { value: "clamp(200px, 50%, 400px)", description: "بين 200 و400 بكسل، تفضل 50%" },
                    { value: "clamp(12px, 2vw, 24px)", description: "حجم خط يتغير مع الشاشة بين 12 و24" },
                    { value: "clamp(100px, 20vw, 300px)", description: "عرض يتناسب مع عرض الشاشة" },
                    { value: "clamp(1rem, 2.5vw, 2rem)", description: "حجم خط مرن" },
                    { value: "clamp(150px, 30%, 500px)", description: "عرض بين 150 و500 بكسل" }
                ],
                freeInput: true
            },
            // -------- round() --------
            {
                name: "round()",
                description: "تقرب القيمة إلى أقرب رقم صحيح أو إلى مضاعف معين",
                values: [
                    { value: "round(2.3)", description: "تقريب إلى 2" },
                    { value: "round(2.7)", description: "تقريب إلى 3" },
                    { value: "round(2.5)", description: "تقريب إلى 3 (في CSS)" },
                    { value: "round(5px, 10px)", description: "تقريب 5 بكسل إلى أقرب مضاعف 10 (تصبح 10)" },
                    { value: "round(12px, 10px)", description: "تقريب 12 بكسل إلى 10" },
                    { value: "round(18px, 10px)", description: "تقريب 18 بكسل إلى 20" }
                ],
                freeInput: true
            },
            // -------- sin() --------
            {
                name: "sin()",
                description: "تحسب جيب الزاوية (بالراديان أو الدرجات)",
                values: [
                    { value: "sin(0deg)", description: "جيب 0 = 0" },
                    { value: "sin(30deg)", description: "جيب 30 درجة = 0.5" },
                    { value: "sin(45deg)", description: "جيب 45 درجة ≈ 0.707" },
                    { value: "sin(90deg)", description: "جيب 90 درجة = 1" },
                    { value: "sin(0.5rad)", description: "جيب 0.5 راديان" }
                ],
                freeInput: true
            },
            // -------- cos() --------
            {
                name: "cos()",
                description: "تحسب جيب تمام الزاوية",
                values: [
                    { value: "cos(0deg)", description: "جيب تمام 0 = 1" },
                    { value: "cos(60deg)", description: "جيب تمام 60 درجة = 0.5" },
                    { value: "cos(45deg)", description: "جيب تمام 45 درجة ≈ 0.707" },
                    { value: "cos(90deg)", description: "جيب تمام 90 درجة = 0" },
                    { value: "cos(0.5rad)", description: "جيب تمام 0.5 راديان" }
                ],
                freeInput: true
            },
            // -------- tan() --------
            {
                name: "tan()",
                description: "تحسب ظل الزاوية",
                values: [
                    { value: "tan(0deg)", description: "ظل 0 = 0" },
                    { value: "tan(45deg)", description: "ظل 45 درجة = 1" },
                    { value: "tan(30deg)", description: "ظل 30 درجة ≈ 0.577" }
                ],
                freeInput: true
            },
            // -------- sqrt() --------
            {
                name: "sqrt()",
                description: "تحسب الجذر التربيعي للقيمة",
                values: [
                    { value: "sqrt(0)", description: "جذر 0 = 0" },
                    { value: "sqrt(1)", description: "جذر 1 = 1" },
                    { value: "sqrt(4)", description: "جذر 4 = 2" },
                    { value: "sqrt(9)", description: "جذر 9 = 3" },
                    { value: "sqrt(16)", description: "جذر 16 = 4" },
                    { value: "sqrt(2)", description: "جذر 2 ≈ 1.414" }
                ],
                freeInput: true
            },
            // -------- pow() --------
            {
                name: "pow()",
                description: "تحسب القوة (الأس) لقيمة",
                values: [
                    { value: "pow(2, 0)", description: "2 أس 0 = 1" },
                    { value: "pow(2, 1)", description: "2 أس 1 = 2" },
                    { value: "pow(2, 2)", description: "2 أس 2 = 4" },
                    { value: "pow(2, 3)", description: "2 أس 3 = 8" },
                    { value: "pow(10, 2)", description: "10 أس 2 = 100" }
                ],
                freeInput: true
            },
            // -------- abs() --------
            {
                name: "abs()",
                description: "تحسب القيمة المطلقة (تجاهل الإشارة السالبة)",
                values: [
                    { value: "abs(10px)", description: "تصبح 10 بكسل" },
                    { value: "abs(-10px)", description: "تصبح 10 بكسل (تجاهل الإشارة)" },
                    { value: "abs(-5)", description: "تصبح 5" },
                    { value: "abs(0)", description: "تصبح 0" }
                ],
                freeInput: true
            },
            // -------- sign() --------
            {
                name: "sign()",
                description: "ترجع 1 للقيم الموجبة، -1 للقيم السالبة، 0 للصفر",
                values: [
                    { value: "sign(5px)", description: "ترجع 1 (موجب)" },
                    { value: "sign(-5px)", description: "ترجع -1 (سالبة)" },
                    { value: "sign(0)", description: "ترجع 0" }
                ],
                freeInput: true
            },
            // -------- mod() / rem() --------
            {
                name: "mod() / rem()",
                description: "تحسب باقي القسمة (modulo)",
                values: [
                    { value: "mod(10, 3)", description: "باقي قسمة 10 على 3 = 1" },
                    { value: "rem(10, 3)", description: "باقي قسمة 10 على 3 = 1 (مع سلوك مختلف للقيم السالبة)" }
                ],
                freeInput: true
            },
            // -------- atan2() --------
            {
                name: "atan2()",
                description: "تحسب الزاوية بين محور x ونقطة محددة",
                values: [
                    { value: "atan2(1, 1)", description: "زاوية 45 درجة" },
                    { value: "atan2(0, 1)", description: "زاوية 0 درجة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. env() - متغيرات البيئة
    // ============================================================
    {
        tag: "environment",
        description: "خصائص ودوال متعلقة بالبيئة المحيطة بالصفحة (مثل المسافات الآمنة في الشاشات)",
        properties: [
            {
                name: "env()",
                description: "تأخذ قيمة من بيئة المتصفح (مثل المسافات الآمنة للشاشات المقطوعة)",
                values: [
                    { value: "env(safe-area-inset-top)", description: "المسافة الآمنة من الأعلى (للشاشات المقطوعة)" },
                    { value: "env(safe-area-inset-bottom)", description: "المسافة الآمنة من الأسفل" },
                    { value: "env(safe-area-inset-left)", description: "المسافة الآمنة من اليسار" },
                    { value: "env(safe-area-inset-right)", description: "المسافة الآمنة من اليمين" },
                    { value: "env(safe-area-inset-top, 0px)", description: "مع قيمة احتياطية" },
                    { value: "env(safe-area-inset-bottom, 20px)", description: "مع قيمة احتياطية" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. الفئات الزائفة (Pseudo-classes)
    // ============================================================
    {
        tag: "pseudo-classes",
        description: "الفئات الزائفة (Pseudo-classes) الشائعة التي تؤثر على التنسيق",
        properties: [
            // -------- :hover --------
            {
                name: ":hover",
                description: "يطبق التنسيق عند تمرير الماوس فوق العنصر - أشهر فئة زائفة",
                values: [
                    { value: "background-color: red", description: "يتغير لون الخلفية عند التمرير" },
                    { value: "transform: scale(1.05)", description: "تكبير العنصر عند التمرير" },
                    { value: "opacity: 0.8", description: "تخفيف العنصر عند التمرير" },
                    { value: "color: blue", description: "تغيير لون النص عند التمرير" }
                ],
                freeInput: true
            },
            // -------- :active --------
            {
                name: ":active",
                description: "يطبق التنسيق عند الضغط على العنصر (أثناء النقر)",
                values: [
                    { value: "transform: scale(0.95)", description: "يتقلص العنصر قليلاً عند النقر" },
                    { value: "background-color: darkblue", description: "لون خلفية غامق عند النقر" }
                ],
                freeInput: true
            },
            // -------- :focus --------
            {
                name: ":focus",
                description: "يطبق التنسيق عندما يكون العنصر في حالة التركيز (مثل حقل إدخال)",
                values: [
                    { value: "outline: 2px solid blue", description: "يظهر إطار أزرق عند التركيز" },
                    { value: "border-color: #007bff", description: "تغيير لون الحدود عند التركيز" },
                    { value: "box-shadow: 0 0 0 3px rgba(0,123,255,0.3)", description: "ظل عند التركيز" }
                ],
                freeInput: true
            },
            // -------- :visited --------
            {
                name: ":visited",
                description: "يطبق التنسيق على الروابط التي تمت زيارتها (محدود لأسباب أمنية)",
                values: [
                    { value: "color: purple", description: "لون الرابط يصبح بنفسجياً" },
                    { value: "color: #6c757d", description: "لون رمادي للروابط المزارة" }
                ],
                freeInput: true
            },
            // -------- :link --------
            {
                name: ":link",
                description: "يطبق التنسيق على الروابط غير المُزارة",
                values: [
                    { value: "color: blue", description: "لون الرابط أزرق" },
                    { value: "text-decoration: none", description: "إزالة التسطير" }
                ],
                freeInput: true
            },
            // -------- :disabled --------
            {
                name: ":disabled",
                description: "يطبق التنسيق على العناصر المعطلة (disabled)",
                values: [
                    { value: "opacity: 0.5", description: "تخفيف العنصر" },
                    { value: "cursor: not-allowed", description: "مؤشر ممنوع" },
                    { value: "background-color: #e9ecef", description: "خلفية رمادية" }
                ],
                freeInput: true
            },
            // -------- :checked --------
            {
                name: ":checked",
                description: "يطبق التنسيق على مربعات الاختيار وأزرار الراديو المحددة",
                values: [
                    { value: "accent-color: green", description: "لون المميز يصبح أخضر" },
                    { value: "background-color: #28a745", description: "لون خلفية عند التحديد" }
                ],
                freeInput: true
            },
            // -------- :nth-child() --------
            {
                name: ":nth-child()",
                description: "يحدد عناصر بناءً على ترتيبها بين إخوتها",
                values: [
                    { value: ":nth-child(odd)", description: "العناصر الفردية (1, 3, 5, ...)" },
                    { value: ":nth-child(even)", description: "العناصر الزوجية (2, 4, 6, ...)" },
                    { value: ":nth-child(2n)", description: "العناصر الزوجية" },
                    { value: ":nth-child(2n+1)", description: "العناصر الفردية" },
                    { value: ":nth-child(3n)", description: "3, 6, 9, ..." },
                    { value: ":nth-child(3n+1)", description: "1, 4, 7, ..." },
                    { value: ":nth-child(4n-1)", description: "3, 7, 11, ..." },
                    { value: ":nth-child(2)", description: "الثاني فقط" },
                    { value: ":nth-child(5)", description: "الخامس فقط" }
                ],
                freeInput: true
            },
            // -------- :not() --------
            {
                name: ":not()",
                description: "ينفي تطبيق التنسيق على عناصر معينة",
                values: [
                    { value: ":not(.special)", description: "جميع العناصر ما عدا ذات الصنف special" },
                    { value: ":not(:first-child)", description: "جميع العناصر ما عدا الأول" },
                    { value: ":not(div)", description: "جميع العناصر ما عدا div" }
                ],
                freeInput: true
            },
            // -------- :focus-visible --------
            {
                name: ":focus-visible",
                description: "يطبق تنسيق التركيز فقط عندما يكون ظاهراً للمستخدم بحكم المتصفح (مثل التنقل بلوحة المفاتيح)",
                values: [
                    { value: "outline: 3px solid blue", description: "إطار تركيز واضح عند التنقل بلوحة المفاتيح فقط" },
                    { value: "box-shadow: 0 0 0 4px rgba(0,123,255,0.4)", description: "ظل عند التركيز بلوحة المفاتيح" }
                ],
                freeInput: true
            },
            // -------- :focus-within --------
            {
                name: ":focus-within",
                description: "يطبق التنسيق على عنصر أب عندما يكون هو نفسه أو أي عنصر بداخله في حالة تركيز",
                values: [
                    { value: "border-color: blue", description: "تلوين حدود النموذج بأكمله عند التركيز على أي حقل بداخله" },
                    { value: "background-color: #f8f9fa", description: "تغيير خلفية الحاوية" }
                ],
                freeInput: true
            },
            // -------- :is() --------
            {
                name: ":is()",
                description: "دالة تجميع تُبسّط كتابة عدة محددات معاً بدل تكرارها",
                values: [
                    { value: ":is(h1, h2, h3)", description: "يطبق على h1 وh2 وh3 معاً" },
                    { value: "article :is(h1, h2)", description: "أي h1 أو h2 داخل article" },
                    { value: ".card :is(h1, h2, h3)", description: "أي عنوان داخل البطاقة" }
                ],
                freeInput: true
            },
            // -------- :where() --------
            {
                name: ":where()",
                description: "مثل :is() تماماً في الوظيفة، لكن مستوى تحديدها (specificity) يبقى صفراً دائماً",
                values: [
                    { value: ":where(h1, h2, h3)", description: "تجميع محددات بدون زيادة قوة التحديد" },
                    { value: ".card :where(h1, h2)", description: "تحديد منخفض - يسهل تجاوزه" }
                ],
                freeInput: true
            },
            // -------- :has() --------
            {
                name: ":has()",
                description: "يختار عنصراً بناءً على وجود عناصر معينة بداخله ('المحدد الأب')",
                values: [
                    { value: "div:has(> img)", description: "أي div يحتوي مباشرة على صورة" },
                    { value: "label:has(input:checked)", description: "تنسيق label عندما يكون input بداخله محدداً" },
                    { value: "article:has(h2)", description: "أي article يحتوي على h2" },
                    { value: "div:has(.active)", description: "أي div يحتوي على عنصر بالصنف active" }
                ],
                freeInput: true
            },
            // -------- :first-child / :last-child --------
            {
                name: ":first-child / :last-child",
                description: "يختار العنصر إن كان الأول أو الأخير بين إخوته",
                values: [
                    { value: ":first-child", description: "أول عنصر بين إخوته" },
                    { value: ":last-child", description: "آخر عنصر بين إخوته" },
                    { value: ":only-child", description: "العنصر الوحيد لأبيه (بدون إخوة)" },
                    { value: ":nth-child(1)", description: "أول عنصر (مثل first-child)" }
                ],
                freeInput: true
            },
            // -------- :nth-of-type() / :first-of-type / :last-of-type --------
            {
                name: ":nth-of-type()",
                description: "مثل nth-child لكنها تحسب فقط بين الإخوة من نفس نوع العنصر",
                values: [
                    { value: ":nth-of-type(2)", description: "ثاني عنصر من نفس النوع بين إخوته" },
                    { value: ":first-of-type", description: "أول عنصر من نفس النوع" },
                    { value: ":last-of-type", description: "آخر عنصر من نفس النوع" },
                    { value: ":nth-of-type(odd)", description: "العناصر الفردية من نفس النوع" }
                ],
                freeInput: true
            },
            // -------- :empty --------
            {
                name: ":empty",
                description: "يختار العناصر التي لا تحتوي على أي محتوى أو عناصر فرعية",
                values: [
                    { value: "display: none", description: "إخفاء العناصر الفارغة تماماً" },
                    { value: "background: #f8f9fa", description: "خلفية رمادية للعناصر الفارغة" }
                ],
                freeInput: true
            },
            // -------- :target --------
            {
                name: ":target",
                description: "يختار العنصر الذي يطابق معرّف الرابط الحالي في شريط العنوان",
                values: [
                    { value: "background: yellow", description: "تمييز القسم المستهدف بلون خلفية" },
                    { value: "animation: highlight 1s", description: "تأثير تمييز عند الانتقال" }
                ],
                freeInput: true
            },
            // -------- :root --------
            {
                name: ":root",
                description: "يختار العنصر الجذري للمستند (html)، يُستخدم لتعريف المتغيرات المخصصة عالمياً",
                values: [
                    { value: ":root { --main-color: blue; }", description: "تعريف متغير مخصص عام" },
                    { value: ":root { --font-size: 16px; }", description: "تعريف حجم خط أساسي" }
                ],
                freeInput: true
            },
            // -------- :lang() --------
            {
                name: ":lang()",
                description: "يختار العناصر بناءً على لغة المحتوى المحددة (عبر سمة lang)",
                values: [
                    { value: ":lang(ar)", description: "العناصر التي لغتها العربية" },
                    { value: ":lang(en)", description: "العناصر التي لغتها الإنجليزية" },
                    { value: ":lang(fr)", description: "العناصر التي لغتها الفرنسية" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. العناصر الزائفة (Pseudo-elements)
    // ============================================================
    {
        tag: "pseudo-elements",
        description: "العناصر الزائفة (Pseudo-elements) الشائعة",
        properties: [
            // -------- ::before --------
            {
                name: "::before",
                description: "يُنشئ عنصراً افتراضياً قبل محتوى العنصر الأصلي (يحتاج إلى content)",
                values: [
                    { value: "content: '★ '", description: "يضيف نجمة قبل النص" },
                    { value: "content: '▶ '", description: "يضيف مثلث قبل النص" },
                    { value: "content: '📌 '", description: "يضيف رمز دبوس قبل النص" },
                    { value: "content: ''", description: "عنصر فارغ للتصميم فقط" }
                ],
                freeInput: true
            },
            // -------- ::after --------
            {
                name: "::after",
                description: "يُنشئ عنصراً افتراضياً بعد محتوى العنصر الأصلي (يحتاج إلى content)",
                values: [
                    { value: "content: ' ✓'", description: "يضيف علامة صح بعد النص" },
                    { value: "content: ' →'", description: "يضيف سهم بعد النص" },
                    { value: "content: ''", description: "عنصر فارغ للتصميم فقط" }
                ],
                freeInput: true
            },
            // -------- ::first-letter --------
            {
                name: "::first-letter",
                description: "يطبق تنسيقاً على الحرف الأول من النص (مفيد للتصميم الفني)",
                values: [
                    { value: "font-size: 2em", description: "تكبير الحرف الأول" },
                    { value: "font-weight: bold", description: "جعل الحرف الأول سميكاً" },
                    { value: "color: red", description: "لون الحرف الأول أحمر" },
                    { value: "float: left", description: "الحرف الأول عائم (تأثير الـ Drop Cap)" }
                ],
                freeInput: true
            },
            // -------- ::first-line --------
            {
                name: "::first-line",
                description: "يطبق تنسيقاً على السطر الأول من النص",
                values: [
                    { value: "font-weight: bold", description: "جعل السطر الأول سميكاً" },
                    { value: "text-transform: uppercase", description: "تحويل السطر الأول إلى أحرف كبيرة" },
                    { value: "color: #007bff", description: "لون السطر الأول أزرق" }
                ],
                freeInput: true
            },
            // -------- ::selection --------
            {
                name: "::selection",
                description: "يطبق تنسيقاً على النص المحدد من قبل المستخدم",
                values: [
                    { value: "background: yellow", description: "خلفية صفراء للنص المحدد" },
                    { value: "background: #007bff; color: white", description: "خلفية زرقاء ونص أبيض" }
                ],
                freeInput: true
            },
            // -------- ::placeholder --------
            {
                name: "::placeholder",
                description: "يطبق تنسيقاً على النص المؤقت في حقول الإدخال",
                values: [
                    { value: "color: gray", description: "لون النص المؤقت رمادي" },
                    { value: "font-style: italic", description: "نص مائل" },
                    { value: "font-size: 14px", description: "حجم خط أصغر" },
                    { value: "opacity: 0.7", description: "شفافية 70%" }
                ],
                freeInput: true
            },
            // -------- ::marker --------
            {
                name: "::marker",
                description: "يطبق تنسيقاً على علامات التعداد في القوائم",
                values: [
                    { value: "color: red", description: "لون علامة التعداد أحمر" },
                    { value: "font-size: 1.2em", description: "تكبير علامة التعداد" },
                    { value: "color: #007bff", description: "لون أزرق للعلامة" }
                ],
                freeInput: true
            },
            // -------- ::backdrop --------
            {
                name: "::backdrop",
                description: "يطبق تنسيقاً على الخلفية خلف العناصر في وضع ملء الشاشة أو خلف dialog",
                values: [
                    { value: "background: rgba(0,0,0,0.7)", description: "تعتيم الصفحة خلف نافذة حوار" },
                    { value: "backdrop-filter: blur(5px)", description: "تأثير زجاجي على الخلفية" }
                ],
                freeInput: true
            },
            // -------- ::file-selector-button --------
            {
                name: "::file-selector-button",
                description: "يطبق تنسيقاً على زر اختيار الملف داخل حقل input type=file",
                values: [
                    { value: "background: #007bff; color: white", description: "تخصيص شكل زر اختيار الملف" },
                    { value: "padding: 8px 16px; border-radius: 4px", description: "تصميم الزر" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 7. قواعد @ (At-Rules)
    // ============================================================
    {
        tag: "at-rules",
        description: "قواعد @ (At-Rules) وهي تعليمات خاصة في CSS تبدأ بـ @ وتتحكم في كيفية تطبيق الأنماط",
        properties: [
            // -------- @media --------
            {
                name: "@media",
                description: "يطبق الأنماط فقط عند تحقق شرط معين متعلق بجهاز العرض",
                values: [
                    { value: "@media (max-width: 768px) { ... }", description: "أنماط للشاشات بعرض 768px فأقل" },
                    { value: "@media (min-width: 768px) { ... }", description: "أنماط للشاشات بعرض 768px فأكثر" },
                    { value: "@media (prefers-color-scheme: dark) { ... }", description: "أنماط للوضع الداكن حسب تفضيل النظام" },
                    { value: "@media (prefers-color-scheme: light) { ... }", description: "أنماط للوضع الفاتح" },
                    { value: "@media print { ... }", description: "أنماط خاصة بالطباعة فقط" },
                    { value: "@media (orientation: landscape) { ... }", description: "أنماط عند اتجاه الشاشة الأفقي" },
                    { value: "@media (orientation: portrait) { ... }", description: "أنماط عند اتجاه الشاشة العمودي" },
                    { value: "@media (prefers-reduced-motion: reduce) { ... }", description: "أنماط للمستخدمين الذين يفضلون تقليل الحركة" },
                    { value: "@media (hover: hover) { ... }", description: "أنماط للأجهزة التي تدعم التمرير" },
                    { value: "@media (pointer: coarse) { ... }", description: "أنماط للأجهزة التي تستخدم اللمس" }
                ],
                freeInput: true
            },
            // -------- @supports --------
            {
                name: "@supports",
                description: "يطبق الأنماط فقط إذا كان المتصفح يدعم خاصية CSS معينة",
                values: [
                    { value: "@supports (display: grid) { ... }", description: "أنماط إذا كان المتصفح يدعم Grid" },
                    { value: "@supports not (display: grid) { ... }", description: "أنماط بديلة للمتصفحات التي لا تدعم Grid" },
                    { value: "@supports (backdrop-filter: blur(10px)) { ... }", description: "أنماط إذا كان المتصفح يدعم backdrop-filter" },
                    { value: "@supports (scroll-behavior: smooth) { ... }", description: "أنماط إذا كان المتصفح يدعم التمرير السلس" }
                ],
                freeInput: true
            },
            // -------- @container --------
            {
                name: "@container",
                description: "مشابه لـ @media لكنه يطبق الأنماط بناءً على حجم عنصر حاوٍ محدد",
                values: [
                    { value: "@container (min-width: 400px) { ... }", description: "أنماط عندما يكون عرض الحاوية 400px فأكثر" },
                    { value: "@container (max-width: 400px) { ... }", description: "أنماط عندما يكون عرض الحاوية 400px فأقل" }
                ],
                freeInput: true
            },
            // -------- @font-face --------
            {
                name: "@font-face",
                description: "يُعرّف خطاً مخصصاً يمكن تحميله من ملف وربطه باسم",
                values: [
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2'); }", description: "تعريف خط من ملف woff2" },
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'), url('font.woff') format('woff'); }", description: "تعريف خط بصيغ متعددة" },
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2'); font-weight: bold; }", description: "تعريف خط بوزن محدد" },
                    { value: "@font-face { font-family: 'MyFont'; src: url('font.woff2'); font-style: italic; }", description: "تعريف خط مائل" }
                ],
                freeInput: true
            },
            // -------- @import --------
            {
                name: "@import",
                description: "يستورد ملف CSS خارجي آخر داخل ملف الأنماط الحالي",
                values: [
                    { value: "@import url('theme.css');", description: "استيراد ملف أنماط آخر" },
                    { value: "@import url('print.css') print;", description: "استيراد ملف أنماط خاص بالطباعة فقط" },
                    { value: "@import url('mobile.css') (max-width: 768px);", description: "استيراد ملف خاص بالجوال" }
                ],
                freeInput: true
            },
            // -------- @keyframes --------
            {
                name: "@keyframes",
                description: "يُعرّف مراحل حركة (animation) يمكن استدعاؤها لاحقاً",
                values: [
                    { value: "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }", description: "حركة تلاشي" },
                    { value: "@keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }", description: "حركة انزلاق" },
                    { value: "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }", description: "حركة نبض" },
                    { value: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }", description: "حركة دوران" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 8. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة للخصائص المتنوعة في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - خلفية بتدرج متعدد",
                description: "استخدام تدرجات متعددة في خلفية واحدة",
                values: [
                    { value: "background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3); background-size: 400% 400%; animation: gradient 10s ease infinite;", description: "خلفية متدرجة متحركة" }
                ]
            },
            {
                name: "مثال 2 - SVG متحرك",
                description: "تحريك حدود SVG باستخدام stroke-dasharray و stroke-dashoffset",
                values: [
                    { value: "svg path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 3s ease-in-out forwards; } @keyframes draw { to { stroke-dashoffset: 0; } }", description: "رسم حدود SVG بالحركة" }
                ]
            },
            {
                name: "مثال 3 - تأثير hover متقدم",
                description: "تأثير hover متعدد باستخدام الفئات الزائفة",
                values: [
                    { value: ".card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.2); transition: all 0.3s ease; }", description: "بطاقة ترتفع وتكبر عند التمرير" }
                ]
            },
            {
                name: "مثال 4 - تنسيق أول حرف من الفقرة",
                description: "تصميم أول حرف من الفقرة مثل المجلات",
                values: [
                    { value: "p::first-letter { font-size: 3em; font-weight: bold; color: #007bff; float: left; margin-right: 8px; line-height: 1; }", description: "تأثير الـ Drop Cap" }
                ]
            },
            {
                name: "مثال 5 - وضع داكن تلقائي",
                description: "دعم الوضع الداكن تلقائياً حسب تفضيل النظام",
                values: [
                    { value: ":root { --bg: #fff; --text: #333; } @media (prefers-color-scheme: dark) { :root { --bg: #1a1a2e; --text: #eaeaea; } } body { background: var(--bg); color: var(--text); }", description: "تبديل تلقائي بين الوضعين" }
                ]
            },
            {
                name: "مثال 6 - استخدام calc و clamp",
                description: "أحجام مرنة مع حدود",
                values: [
                    { value: ".container { width: clamp(300px, 80%, 1200px); padding: calc(20px + 2vw); font-size: clamp(14px, 2vw, 20px); }", description: "تصميم مرن مع حدود" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام الخصائص المتنوعة بشكل فعال",
        properties: [
            {
                name: "نصائح التدرجات",
                description: "نصائح لاستخدام التدرجات بشكل فعال",
                values: [
                    { value: "استخدم تدرجات متعددة", description: "دمج عدة تدرجات يخلق تأثيرات مذهلة" },
                    { value: "استخدم rgba للشفافية", description: "تدرجات شفافة تضيف عمقاً للتصميم" },
                    { value: "استخدم repeating gradients", description: "للأنماط المتكررة بدون صور" }
                ]
            },
            {
                name: "نصائح SVG",
                description: "نصائح لاستخدام SVG مع CSS",
                values: [
                    { value: "استخدم fill و stroke", description: "للتحكم في ألوان SVG بدون تعديل الملف" },
                    { value: "استخدم stroke-dasharray للحركة", description: "لتأثيرات رسم الحدود" },
                    { value: "استخدم currentColor", description: "لجعل SVG يتناسب مع لون النص" }
                ]
            },
            {
                name: "نصائح الفئات الزائفة",
                description: "نصائح لاستخدام الفئات الزائفة",
                values: [
                    { value: "ترتيب الروابط: LVFHA", description: "Link, Visited, Focus, Hover, Active" },
                    { value: "استخدم :focus-visible بدلاً من :focus", description: "يظهر التركيز فقط عند الحاجة" },
                    { value: "استخدم :is() لتبسيط المحددات", description: "يسهل كتابة محددات معقدة" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الخصائص المتنوعة",
                values: [
                    { value: "تجنب التدرجات الثقيلة", description: "التدرجات المعقدة قد تؤثر على الأداء" },
                    { value: "استخدم will-change مع SVG", description: "يحسن أداء الرسوم المتحركة" },
                    { value: "استخدم @supports بحكمة", description: "لا تفرط في استخدامها" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.miscData = miscData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = miscData;
}