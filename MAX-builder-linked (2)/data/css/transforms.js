// ============================================================
// transforms.js
// خصائص التحويلات (Transforms) في CSS
// تتيح تغيير شكل العنصر عن طريق التدوير، التكبير، التصغير، الإمالة، أو النقل
// ============================================================

const transformsData = [
    // ============================================================
    // 1. transform (الخاصية الرئيسية)
    // ============================================================
    {
        tag: "transform",
        description: "يحدد تحويلاً واحداً أو أكثر يُطبق على العنصر (تدوير، تكبير، إمالة، نقل، إلخ)",
        properties: [
            // -------- transform (الخاصية الرئيسية) --------
            {
                name: "transform",
                description: "الخاصية الرئيسية لتطبيق التحويلات على العنصر، يمكن تطبيق تحويلات متعددة معاً",
                values: [
                    { value: "none", description: "بدون تحويل - القيمة الافتراضية" },
                    
                    // ------ rotate (تدوير) ------
                    { value: "rotate(0deg)", description: "بدون تدوير" },
                    { value: "rotate(5deg)", description: "تدوير 5 درجات" },
                    { value: "rotate(10deg)", description: "تدوير 10 درجات" },
                    { value: "rotate(15deg)", description: "تدوير 15 درجة" },
                    { value: "rotate(20deg)", description: "تدوير 20 درجة" },
                    { value: "rotate(30deg)", description: "تدوير 30 درجة" },
                    { value: "rotate(45deg)", description: "تدوير 45 درجة - شائع" },
                    { value: "rotate(60deg)", description: "تدوير 60 درجة" },
                    { value: "rotate(90deg)", description: "تدوير 90 درجة (ربع دورة)" },
                    { value: "rotate(120deg)", description: "تدوير 120 درجة" },
                    { value: "rotate(135deg)", description: "تدوير 135 درجة" },
                    { value: "rotate(180deg)", description: "تدوير 180 درجة (نصف دورة)" },
                    { value: "rotate(270deg)", description: "تدوير 270 درجة (ثلاثة أرباع دورة)" },
                    { value: "rotate(360deg)", description: "تدوير 360 درجة (دورة كاملة)" },
                    { value: "rotate(-45deg)", description: "تدوير عكسي 45 درجة" },
                    { value: "rotate(-90deg)", description: "تدوير عكسي 90 درجة" },
                    { value: "rotate(0.25turn)", description: "ربع دورة (90 درجة)" },
                    { value: "rotate(0.5turn)", description: "نصف دورة (180 درجة)" },
                    { value: "rotate(0.75turn)", description: "ثلاثة أرباع دورة (270 درجة)" },
                    { value: "rotate(1turn)", description: "دورة كاملة (360 درجة)" },
                    
                    // ------ rotateX, rotateY, rotateZ (ثلاثي الأبعاد) ------
                    { value: "rotateX(45deg)", description: "يدور العنصر حول المحور X (أفقي) - تأثير ثلاثي الأبعاد" },
                    { value: "rotateX(90deg)", description: "تدوير 90 درجة حول المحور X" },
                    { value: "rotateX(180deg)", description: "تدوير 180 درجة حول المحور X" },
                    { value: "rotateY(45deg)", description: "يدور العنصر حول المحور Y (عمودي) - تأثير ثلاثي الأبعاد" },
                    { value: "rotateY(90deg)", description: "تدوير 90 درجة حول المحور Y" },
                    { value: "rotateY(180deg)", description: "تدوير 180 درجة حول المحور Y" },
                    { value: "rotateZ(45deg)", description: "يدور العنصر حول المحور Z - نفس rotate العادي" },
                    { value: "rotateZ(90deg)", description: "تدوير 90 درجة حول المحور Z" },
                    
                    // ------ rotate3d (محور مخصص) ------
                    { value: "rotate3d(1, 0, 0, 45deg)", description: "يدور حول محور X بمقدار 45 درجة" },
                    { value: "rotate3d(0, 1, 0, 45deg)", description: "يدور حول محور Y بمقدار 45 درجة" },
                    { value: "rotate3d(0, 0, 1, 45deg)", description: "يدور حول محور Z بمقدار 45 درجة" },
                    { value: "rotate3d(1, 1, 0, 45deg)", description: "يدور حول محور قطري (X,Y) بمقدار 45 درجة" },
                    { value: "rotate3d(1, 0, 1, 45deg)", description: "يدور حول محور قطري (X,Z)" },
                    { value: "rotate3d(0, 1, 1, 45deg)", description: "يدور حول محور قطري (Y,Z)" },
                    { value: "rotate3d(1, 1, 1, 45deg)", description: "يدور حول محور قطري ثلاثي الأبعاد" },
                    
                    // ------ scale (تكبير/تصغير) ------
                    { value: "scale(0)", description: "يتلاشى العنصر تماماً (يصبح حجمه صفر)" },
                    { value: "scale(0.1)", description: "تكبير إلى 10% من الحجم الأصلي" },
                    { value: "scale(0.25)", description: "تكبير إلى 25%" },
                    { value: "scale(0.5)", description: "تكبير إلى 50% (نصف الحجم)" },
                    { value: "scale(0.75)", description: "تكبير إلى 75%" },
                    { value: "scale(1)", description: "الحجم الطبيعي (بدون تغيير)" },
                    { value: "scale(1.1)", description: "تكبير 110%" },
                    { value: "scale(1.25)", description: "تكبير 125%" },
                    { value: "scale(1.5)", description: "تكبير 150% (مرة ونصف)" },
                    { value: "scale(1.75)", description: "تكبير 175%" },
                    { value: "scale(2)", description: "تكبير الضعف (200%)" },
                    { value: "scale(2.5)", description: "تكبير 250%" },
                    { value: "scale(3)", description: "تكبير ثلاثة أضعاف (300%)" },
                    { value: "scale(-1)", description: "عكس العنصر أفقياً (انعكاس)" },
                    { value: "scale(1, -1)", description: "عكس العنصر عمودياً (انعكاس)" },
                    { value: "scale(-1, 1)", description: "عكس العنصر أفقياً" },
                    
                    // ------ scaleX, scaleY, scaleZ ------
                    { value: "scaleX(2)", description: "يكبر العنصر أفقياً (عرض) بمقدار الضعف" },
                    { value: "scaleX(0.5)", description: "يصغر العنصر أفقياً إلى النصف" },
                    { value: "scaleX(-1)", description: "يعكس العنصر أفقياً" },
                    { value: "scaleY(2)", description: "يكبر العنصر عمودياً (ارتفاع) بمقدار الضعف" },
                    { value: "scaleY(0.5)", description: "يصغر العنصر عمودياً إلى النصف" },
                    { value: "scaleY(-1)", description: "يعكس العنصر عمودياً" },
                    { value: "scaleZ(2)", description: "يكبر في المحور Z (ثلاثي الأبعاد)" },
                    { value: "scaleZ(0.5)", description: "يصغر في المحور Z" },
                    
                    // ------ scale3d ------
                    { value: "scale3d(1, 1.5, 2)", description: "يكبر العنصر في الأبعاد الثلاثة" },
                    { value: "scale3d(2, 1, 1)", description: "يكبر فقط في المحور X" },
                    { value: "scale3d(1, 2, 1)", description: "يكبر فقط في المحور Y" },
                    { value: "scale3d(1, 1, 2)", description: "يكبر فقط في المحور Z" },
                    { value: "scale3d(0.5, 0.5, 1)", description: "يصغر في المحورين X,Y" },
                    
                    // ------ translate (نقل) ------
                    { value: "translate(0, 0)", description: "بدون نقل" },
                    { value: "translate(10px, 0)", description: "نقل 10 بكسل يميناً" },
                    { value: "translate(-10px, 0)", description: "نقل 10 بكسل يساراً" },
                    { value: "translate(0, 10px)", description: "نقل 10 بكسل أسفل" },
                    { value: "translate(0, -10px)", description: "نقل 10 بكسل أعلى" },
                    { value: "translate(20px, 20px)", description: "نقل 20 بكسل يميناً و20 بكسل أسفل" },
                    { value: "translate(50px, 100px)", description: "نقل 50 بكسل يميناً و100 بكسل أسفل" },
                    { value: "translate(100px, 50px)", description: "نقل 100 بكسل يميناً و50 بكسل أسفل" },
                    { value: "translate(50%, 50%)", description: "نقل بنسبة 50% من حجم العنصر" },
                    { value: "translate(-50%, -50%)", description: "نقل عكسي بنسبة 50% - شائع للتوسيط" },
                    { value: "translate(10px, 20px)", description: "نقل 10 بكسل يميناً و20 بكسل أسفل" },
                    { value: "translate(100px, -50px)", description: "نقل 100 بكسل يميناً و50 بكسل أعلى" },
                    
                    // ------ translateX, translateY, translateZ ------
                    { value: "translateX(100px)", description: "ينقل العنصر 100 بكسل يميناً" },
                    { value: "translateX(-100px)", description: "ينقل العنصر 100 بكسل يساراً" },
                    { value: "translateX(50%)", description: "ينقل العنصر بنسبة 50% من عرضه" },
                    { value: "translateX(-50%)", description: "ينقل العنصر عكسياً بنسبة 50%" },
                    { value: "translateY(50px)", description: "ينقل العنصر 50 بكسل أسفل" },
                    { value: "translateY(-50px)", description: "ينقل العنصر 50 بكسل أعلى" },
                    { value: "translateY(50%)", description: "ينقل العنصر بنسبة 50% من ارتفاعه" },
                    { value: "translateY(-50%)", description: "ينقل العنصر عكسياً بنسبة 50%" },
                    { value: "translateZ(30px)", description: "ينقل العنصر في المحور Z (ثلاثي الأبعاد)" },
                    { value: "translateZ(-30px)", description: "ينقل العنصر عكسياً في المحور Z" },
                    
                    // ------ translate3d ------
                    { value: "translate3d(10px, 20px, 30px)", description: "ينقل العنصر في الأبعاد الثلاثة" },
                    { value: "translate3d(50px, 0, 0)", description: "ينقل فقط في المحور X" },
                    { value: "translate3d(0, 50px, 0)", description: "ينقل فقط في المحور Y" },
                    { value: "translate3d(0, 0, 50px)", description: "ينقل فقط في المحور Z" },
                    { value: "translate3d(-50px, -50px, 50px)", description: "نقل في كل الأبعاد" },
                    
                    // ------ skew (إمالة) ------
                    { value: "skew(0deg, 0deg)", description: "بدون إمالة" },
                    { value: "skew(10deg, 0deg)", description: "إمالة أفقية 10 درجات" },
                    { value: "skew(0deg, 10deg)", description: "إمالة عمودية 10 درجات" },
                    { value: "skew(10deg, 20deg)", description: "إمالة أفقية 10 درجات وعمودية 20 درجة" },
                    { value: "skew(15deg, 15deg)", description: "إمالة 15 درجة في كلا الاتجاهين" },
                    { value: "skew(30deg, 0deg)", description: "إمالة أفقية 30 درجة" },
                    { value: "skew(0deg, 30deg)", description: "إمالة عمودية 30 درجة" },
                    { value: "skew(-10deg, 0deg)", description: "إمالة أفقية عكسية 10 درجات" },
                    { value: "skew(0deg, -10deg)", description: "إمالة عمودية عكسية 10 درجات" },
                    { value: "skew(20deg, 10deg)", description: "إمالة مختلفة في الاتجاهين" },
                    
                    // ------ skewX, skewY ------
                    { value: "skewX(15deg)", description: "يميل العنصر أفقياً 15 درجة" },
                    { value: "skewX(30deg)", description: "يميل أفقياً 30 درجة" },
                    { value: "skewX(-15deg)", description: "يميل أفقياً عكسياً 15 درجة" },
                    { value: "skewY(15deg)", description: "يميل العنصر عمودياً 15 درجة" },
                    { value: "skewY(30deg)", description: "يميل عمودياً 30 درجة" },
                    { value: "skewY(-15deg)", description: "يميل عمودياً عكسياً 15 درجة" },
                    
                    // ------ matrix (مصفوفة) ------
                    { value: "matrix(1, 0, 0, 1, 0, 0)", description: "مصفوفة الوحدة (بدون تغيير)" },
                    { value: "matrix(1, 0, 0, 1, 50, 50)", description: "نقل 50 بكسل في كلا الاتجاهين" },
                    { value: "matrix(2, 0, 0, 2, 0, 0)", description: "تكبير الضعف" },
                    { value: "matrix(0.5, 0, 0, 0.5, 0, 0)", description: "تصغير إلى النصف" },
                    { value: "matrix(1, 0.5, 0, 1, 0, 0)", description: "إمالة أفقية" },
                    { value: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)", description: "تدوير 30 درجة" },
                    { value: "matrix(1, 0, 0, 1, 100, 200)", description: "نقل 100 بكسل يميناً و200 بكسل أسفل" },
                    { value: "matrix(2, 0.5, 0.5, 2, 20, 30)", description: "مصفوفة معقدة تجمع عدة تحويلات" },
                    
                    // ------ perspective (منظور) ------
                    { value: "perspective(1000px)", description: "منظور 1000 بكسل - تأثير ثلاثي الأبعاد معتدل" },
                    { value: "perspective(500px)", description: "منظور 500 بكسل - تأثير قوي" },
                    { value: "perspective(200px)", description: "منظور 200 بكسل - تأثير قوي جداً" },
                    { value: "perspective(2000px)", description: "منظور 2000 بكسل - تأثير خفيف" },
                    { value: "perspective(100px)", description: "منظور 100 بكسل - تأثير مبالغ فيه" },
                    
                    // ------ تحويلات متعددة معاً ------
                    { value: "rotate(45deg) scale(1.5)", description: "تدوير 45 درجة مع تكبير 1.5" },
                    { value: "rotate(45deg) scale(1.5) translate(20px)", description: "ثلاثة تحويلات معاً - تُطبق بالترتيب (من اليمين لليسار)" },
                    { value: "translate(50px, 50px) rotate(45deg)", description: "نقل ثم تدوير" },
                    { value: "rotate(45deg) translate(50px, 50px)", description: "تدوير ثم نقل (نتيجة مختلفة)" },
                    { value: "scale(1.2) rotate(15deg) translate(30px)", description: "تحويلات متعددة" },
                    { value: "rotateX(45deg) rotateY(45deg)", description: "تدوير ثلاثي الأبعاد في اتجاهين" },
                    { value: "scale(2) rotate(30deg) translate(20px, 20px)", description: "تحويلات معقدة" }
                ],
                freeInput: true
            },
            // -------- transform-origin --------
            {
                name: "transform-origin",
                description: "يحدد نقطة المركز التي يدور أو يتكسر أو يتحرك حولها العنصر أثناء التحويل",
                values: [
                    // كلمات مفتاحية أساسية
                    { value: "center", description: "مركز العنصر - القيمة الافتراضية" },
                    { value: "center center", description: "مركز العنصر (نفس center)" },
                    { value: "top", description: "أعلى المنتصف" },
                    { value: "top center", description: "أعلى المنتصف" },
                    { value: "bottom", description: "أسفل المنتصف" },
                    { value: "bottom center", description: "أسفل المنتصف" },
                    { value: "left", description: "منتصف اليسار" },
                    { value: "left center", description: "منتصف اليسار" },
                    { value: "right", description: "منتصف اليمين" },
                    { value: "right center", description: "منتصف اليمين" },
                    
                    // الزوايا
                    { value: "top left", description: "أعلى الزاوية اليسرى" },
                    { value: "top right", description: "أعلى الزاوية اليمنى" },
                    { value: "bottom left", description: "أسفل الزاوية اليسرى" },
                    { value: "bottom right", description: "أسفل الزاوية اليمنى" },
                    
                    // نسب مئوية
                    { value: "0% 0%", description: "أعلى اليسار" },
                    { value: "0% 50%", description: "منتصف اليسار" },
                    { value: "0% 100%", description: "أسفل اليسار" },
                    { value: "50% 0%", description: "أعلى المنتصف" },
                    { value: "50% 50%", description: "المركز - القيمة الافتراضية" },
                    { value: "50% 100%", description: "أسفل المنتصف" },
                    { value: "100% 0%", description: "أعلى اليمين" },
                    { value: "100% 50%", description: "منتصف اليمين" },
                    { value: "100% 100%", description: "أسفل اليمين" },
                    { value: "20% 30%", description: "20% من اليسار، 30% من الأعلى" },
                    { value: "75% 25%", description: "75% من اليسار، 25% من الأعلى" },
                    
                    // وحدات مطلقة
                    { value: "10px 20px", description: "10 بكسل من اليسار، 20 بكسل من الأعلى" },
                    { value: "50px 100px", description: "50 بكسل من اليسار، 100 بكسل من الأعلى" },
                    { value: "0 0", description: "أعلى اليسار" },
                    { value: "100px 0", description: "100 بكسل من اليسار، أعلى" },
                    { value: "0 100px", description: "يسار، 100 بكسل من الأعلى" },
                    
                    // ثلاثي الأبعاد
                    { value: "center center 0", description: "المركز بدون عمق - القيمة الافتراضية" },
                    { value: "center center 100px", description: "المركز مع عمق 100 بكسل" },
                    { value: "top left 50px", description: "أعلى اليسار مع عمق 50 بكسل" },
                    { value: "50% 50% 200px", description: "المركز مع عمق 200 بكسل" }
                ],
                freeInput: true
            },
            // -------- transform-style --------
            {
                name: "transform-style",
                description: "يحدد كيف تتعامل العناصر الفرعية مع التحويلات ثلاثية الأبعاد (هل تحتفظ بموقعها ثلاثي الأبعاد أم تسطح)",
                values: [
                    { value: "flat", description: "تسطيح العناصر الفرعية في مستوى ثنائي الأبعاد - القيمة الافتراضية" },
                    { value: "preserve-3d", description: "تحتفظ العناصر الفرعية بموقعها ثلاثي الأبعاد - ضروري للتأثيرات ثلاثية الأبعاد" }
                ]
            },
            // -------- perspective (خاصية) --------
            {
                name: "perspective",
                description: "يضيف منظوراً ثلاثي الأبعاد للعنصر، يجعل الأجزاء البعيدة تبدو أصغر (تُطبق على العنصر الأب)",
                values: [
                    { value: "none", description: "بدون منظور - القيمة الافتراضية" },
                    { value: "100px", description: "منظور 100 بكسل - تأثير قوي جداً (مبالغ فيه)" },
                    { value: "200px", description: "منظور 200 بكسل - تأثير قوي" },
                    { value: "300px", description: "منظور 300 بكسل" },
                    { value: "500px", description: "منظور 500 بكسل - تأثير معتدل" },
                    { value: "800px", description: "منظور 800 بكسل - تأثير خفيف" },
                    { value: "1000px", description: "منظور 1000 بكسل - تأثير خفيف جداً" },
                    { value: "1500px", description: "منظور 1500 بكسل" },
                    { value: "2000px", description: "منظور 2000 بكسل - تأثير شبه معدوم" }
                ],
                freeInput: true
            },
            // -------- perspective-origin --------
            {
                name: "perspective-origin",
                description: "يحدد نقطة النظر (مكان العين) التي يُرى منها العنصر ثلاثي الأبعاد",
                values: [
                    // كلمات مفتاحية
                    { value: "center", description: "المركز - القيمة الافتراضية" },
                    { value: "top", description: "أعلى المنتصف" },
                    { value: "bottom", description: "أسفل المنتصف" },
                    { value: "left", description: "منتصف اليسار" },
                    { value: "right", description: "منتصف اليمين" },
                    { value: "top left", description: "أعلى اليسار" },
                    { value: "top right", description: "أعلى اليمين" },
                    { value: "bottom left", description: "أسفل اليسار" },
                    { value: "bottom right", description: "أسفل اليمين" },
                    
                    // نسب مئوية
                    { value: "50% 50%", description: "المركز" },
                    { value: "0% 0%", description: "أعلى اليسار" },
                    { value: "100% 100%", description: "أسفل اليمين" },
                    { value: "25% 75%", description: "25% من اليسار، 75% من الأعلى" },
                    
                    // وحدات مطلقة
                    { value: "10px 20px", description: "10 بكسل من اليسار، 20 بكسل من الأعلى" },
                    { value: "50px 100px", description: "50 بكسل من اليسار، 100 بكسل من الأعلى" }
                ],
                freeInput: true
            },
            // -------- backface-visibility --------
            {
                name: "backface-visibility",
                description: "يحدد هل يظهر الوجه الخلفي للعنصر عند تدويره 180 درجة (مثل قلب بطاقة)",
                values: [
                    { value: "visible", description: "يظهر الوجه الخلفي (يمكن رؤية العنصر من الخلف) - القيمة الافتراضية" },
                    { value: "hidden", description: "يخفي الوجه الخلفي (يبدو كأن العنصر اختفى عند الدوران 180 درجة)" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. الخصائص المنفصلة (translate, rotate, scale)
    // ============================================================
    {
        tag: "individual-transforms",
        description: "خصائص منفصلة للتحويلات (translate, rotate, scale) تجعل كل تحويل مستقلاً عن الآخر، وتسهل الجمع بين عدة تحويلات في CSS Animations",
        properties: [
            // -------- translate (خاصية منفصلة) --------
            {
                name: "translate",
                description: "خاصية منفصلة للنقل (بديل حديث يجعل translate مستقلة عن transform)",
                values: [
                    { value: "none", description: "بدون نقل - القيمة الافتراضية" },
                    { value: "10px", description: "نقل 10 بكسل في المحور X فقط (يمين)" },
                    { value: "-10px", description: "نقل 10 بكسل يساراً" },
                    { value: "20px 30px", description: "نقل 20 بكسل أفقياً و30 بكسل عمودياً" },
                    { value: "50px 100px", description: "نقل 50 بكسل يميناً و100 بكسل أسفل" },
                    { value: "10px 20px 30px", description: "نقل ثلاثي الأبعاد (x, y, z)" },
                    { value: "50%", description: "نقل بنسبة 50% من العرض في المحور X" },
                    { value: "50% 50%", description: "نقل بنسبة 50% في كلا الاتجاهين" }
                ],
                freeInput: true
            },
            // -------- rotate (خاصية منفصلة) --------
            {
                name: "rotate",
                description: "خاصية منفصلة للتدوير، مستقلة عن transform مما يسهّل الجمع بين تدوير وحركات أخرى",
                values: [
                    { value: "none", description: "بدون تدوير - القيمة الافتراضية" },
                    { value: "45deg", description: "تدوير 45 درجة حول المحور Z" },
                    { value: "90deg", description: "تدوير 90 درجة" },
                    { value: "180deg", description: "تدوير 180 درجة" },
                    { value: "360deg", description: "تدوير 360 درجة (دورة كاملة)" },
                    { value: "x 45deg", description: "تدوير حول المحور X بمقدار 45 درجة" },
                    { value: "y 45deg", description: "تدوير حول المحور Y بمقدار 45 درجة" },
                    { value: "z 45deg", description: "تدوير حول المحور Z بمقدار 45 درجة" },
                    { value: "1 1 0 45deg", description: "تدوير حول محور مخصص ثلاثي الأبعاد" },
                    { value: "1 0 1 45deg", description: "تدوير حول محور مخصص (X,Z)" },
                    { value: "0 1 1 45deg", description: "تدوير حول محور مخصص (Y,Z)" },
                    { value: "1 1 1 45deg", description: "تدوير حول محور مخصص ثلاثي الأبعاد" }
                ],
                freeInput: true
            },
            // -------- scale (خاصية منفصلة) --------
            {
                name: "scale",
                description: "خاصية منفصلة للتكبير/التصغير، مستقلة عن transform",
                values: [
                    { value: "none", description: "بدون تغيير حجم - القيمة الافتراضية" },
                    { value: "0.5", description: "تصغير إلى 50% في كلا الاتجاهين" },
                    { value: "0.75", description: "تصغير إلى 75%" },
                    { value: "1", description: "الحجم الطبيعي" },
                    { value: "1.1", description: "تكبير 110%" },
                    { value: "1.25", description: "تكبير 125%" },
                    { value: "1.5", description: "تكبير 150%" },
                    { value: "2", description: "تكبير الضعف في كلا الاتجاهين" },
                    { value: "2 0.5", description: "تكبير أفقي مضاعف، وتصغير عمودي للنصف" },
                    { value: "1.5 1", description: "تكبير فقط في المحور X" },
                    { value: "1 1.5", description: "تكبير فقط في المحور Y" },
                    { value: "1 1 2", description: "تغيير حجم ثلاثي الأبعاد - تكبير في المحور Z" },
                    { value: "2 2 2", description: "تكبير في الأبعاد الثلاثة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لاستخدام التحويلات في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - تدوير صورة عند التمرير",
                description: "صورة تدور عند تمرير الماوس فوقها",
                values: [
                    { value: ".image { transition: transform 0.5s ease; } .image:hover { transform: rotate(15deg) scale(1.1); }", description: "صورة تدور وتكبر عند التمرير" }
                ]
            },
            {
                name: "مثال 2 - تأثير القفز (Bounce)",
                description: "عنصر يقفز للأعلى عند التمرير",
                values: [
                    { value: ".element { transition: transform 0.3s ease; } .element:hover { transform: translateY(-20px); }", description: "قفزة للأعلى عند التمرير" }
                ]
            },
            {
                name: "مثال 3 - قلب بطاقة (Flip Card)",
                description: "بطاقة تنقلب عند التمرير باستخدام backface-visibility",
                values: [
                    { value: ".card { perspective: 600px; } .card-inner { transform-style: preserve-3d; transition: transform 0.6s; } .card:hover .card-inner { transform: rotateY(180deg); } .card-front, .card-back { backface-visibility: hidden; } .card-back { transform: rotateY(180deg); }", description: "بطاقة تنقلب 180 درجة" }
                ]
            },
            {
                name: "مثال 4 - توسيط عنصر بالكامل",
                description: "توسيط عنصر في المنتصف باستخدام transform",
                values: [
                    { value: ".center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }", description: "توسيط تام للعنصر" }
                ]
            },
            {
                name: "مثال 5 - تأثير ثلاثي الأبعاد مع المنظور",
                description: "عنصر ثلاثي الأبعاد يدور مع المنظور",
                values: [
                    { value: ".cube { perspective: 800px; transform-style: preserve-3d; } .cube:hover { transform: rotateX(30deg) rotateY(30deg); }", description: "مكعب ثلاثي الأبعاد" }
                ]
            },
            {
                name: "مثال 6 - تأثير التكبير المتدرج",
                description: "تكبير تدريجي مع دوران",
                values: [
                    { value: "@keyframes zoomRotate { 0% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.2) rotate(180deg); } 100% { transform: scale(1) rotate(360deg); } } .animated { animation: zoomRotate 3s ease-in-out infinite; }", description: "حركة تكبير مع دوران مستمر" }
                ]
            },
            {
                name: "مثال 7 - إمالة النص",
                description: "نص مائل لتأثير ديناميكي",
                values: [
                    { value: ".skew-text { transform: skewX(-10deg); font-size: 2rem; }", description: "نص مائل 10 درجات" }
                ]
            },
            {
                name: "مثال 8 - تأثير التموج",
                description: "سلسلة من العناصر بتحويلات متتابعة",
                values: [
                    { value: ".wave span { display: inline-block; animation: wave 2s ease-in-out infinite; } .wave span:nth-child(1) { animation-delay: 0s; } .wave span:nth-child(2) { animation-delay: 0.2s; } .wave span:nth-child(3) { animation-delay: 0.4s; } @keyframes wave { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }", description: "تأثير تموج" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام التحويلات بشكل فعال",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء التحويلات",
                values: [
                    { value: "استخدم transform بدلاً من top/left", description: "transform يستخدم GPU ولا يسبب إعادة تدفق (reflow)" },
                    { value: "استخدم will-change", description: "will-change: transform يحسن أداء الرسوم المتحركة" },
                    { value: "استخدم translateZ(0) للتسريع", description: "يحفّز تسريع GPU للعنصر" },
                    { value: "تجنب تحويلات متعددة ثقيلة", description: "قد تؤثر على الأداء في الأجهزة الضعيفة" }
                ]
            },
            {
                name: "نصائح ثلاثية الأبعاد",
                description: "نصائح لاستخدام التحويلات ثلاثية الأبعاد",
                values: [
                    { value: "استخدم perspective على الأب", description: "لتطبيق المنظور على جميع العناصر الفرعية" },
                    { value: "استخدم transform-style: preserve-3d", description: "للحفاظ على التأثير ثلاثي الأبعاد" },
                    { value: "استخدم backface-visibility: hidden", description: "لإخفاء الوجه الخلفي في البطاقات" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل التحويلات قابلة للوصول",
                values: [
                    { value: "استخدم prefers-reduced-motion", description: "قلل الحركات للمستخدمين الذين يطلبون ذلك" },
                    { value: "تجنب التحويلات المزعجة", description: "الحركات السريعة أو الوامضة قد تسبب مشاكل" },
                    { value: "أضف عناصر تحكم", description: "قدم للمستخدمين إمكانية إيقاف الحركات" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام التحويلات",
                values: [
                    { value: "نسيان transform-origin", description: "قد يسبب تدويراً حول نقطة غير متوقعة" },
                    { value: "ترتيب التحويلات", description: "ترتيب التحويلات يؤثر على النتيجة النهائية" },
                    { value: "نسيان perspective", description: "بدون perspective لا يظهر التأثير ثلاثي الأبعاد" },
                    { value: "استخدام transform مع display: inline", description: "قد لا يعمل كما هو متوقع" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.transformsData = transformsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = transformsData;
}