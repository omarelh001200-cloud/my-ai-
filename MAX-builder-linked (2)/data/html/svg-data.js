// ============================================================
// svg-data.js
// عناصر الرسوم المتجهية (SVG) - الأشكال والمسارات والتحريك
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const svgData = [
    // ============================================================
    // عناصر SVG الأساسية
    // ============================================================

    // -------- svg --------
    {
        tag: "svg",
        description: "يحدد مساحة للرسم المتجهي، يمكن رسم أشكال ونصوص ورسومات تتكيف مع أي حجم بدون تشويه",
        attributes: [
            {
                name: "viewBox",
                description: "يحدد إحداثيات الرسم وقياساته، يسمح بتكبير وتصغير الرسم دون فقدان الجودة",
                values: [
                    { value: "0 0 100 100", description: "منطقة رسم 100×100 بكسل" },
                    { value: "0 0 200 200", description: "منطقة رسم 200×200 بكسل" },
                    { value: "0 0 300 300", description: "منطقة رسم 300×300 بكسل" },
                    { value: "0 0 400 400", description: "منطقة رسم 400×400 بكسل" },
                    { value: "0 0 500 500", description: "منطقة رسم 500×500 بكسل" },
                    { value: "0 0 800 600", description: "منطقة رسم 800×600 بكسل" },
                    { value: "0 0 1920 1080", description: "منطقة رسم بدقة Full HD" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض مساحة الرسم بالبكسل، يتحكم في حجم الرسم المعروض",
                values: [
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" },
                    { value: "800", description: "عرض 800 بكسل" },
                    { value: "100%", description: "عرض كامل الحاوية" },
                    { value: "50%", description: "نصف عرض الحاوية" },
                    { value: "auto", description: "عرض تلقائي" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع مساحة الرسم بالبكسل، يتحكم في حجم الرسم المعروض",
                values: [
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "200", description: "ارتفاع 200 بكسل" },
                    { value: "300", description: "ارتفاع 300 بكسل" },
                    { value: "400", description: "ارتفاع 400 بكسل" },
                    { value: "500", description: "ارتفاع 500 بكسل" },
                    { value: "600", description: "ارتفاع 600 بكسل" },
                    { value: "800", description: "ارتفاع 800 بكسل" },
                    { value: "100%", description: "ارتفاع كامل الحاوية" },
                    { value: "50%", description: "نصف ارتفاع الحاوية" },
                    { value: "auto", description: "ارتفاع تلقائي" }
                ],
                freeInput: true
            },
            {
                name: "xmlns",
                description: "يحدد مساحة الأسماء للرسم، يخبر المتصفح بأن هذا SVG ليتعامل معه بشكل صحيح",
                values: [
                    { value: "http://www.w3.org/2000/svg", description: "مساحة أسماء SVG" }
                ]
            },
            {
                name: "version",
                description: "يحدد إصدار SVG المستخدم في الرسم",
                values: [
                    { value: "1.0", description: "الإصدار 1.0" },
                    { value: "1.1", description: "الإصدار 1.1 (الافتراضي)" },
                    { value: "2.0", description: "الإصدار 2.0" }
                ]
            },
            {
                name: "preserveAspectRatio",
                description: "يتحكم في كيفية تكبير الرسم للحفاظ على نسبه عند تغيير الأبعاد",
                values: [
                    { value: "none", description: "عدم الحفاظ على النسب، يتمدد الرسم" },
                    { value: "xMidYMid meet", description: "الحفاظ على النسب وتوسيط الرسم (الافتراضي)" },
                    { value: "xMinYMin meet", description: "محاذاة لأعلى اليسار والحفاظ على النسب" },
                    { value: "xMaxYMax meet", description: "محاذاة لأسفل اليمين والحفاظ على النسب" },
                    { value: "xMidYMid slice", description: "تعبئة كاملة مع قص الأجزاء الزائدة" }
                ]
            }
        ]
    },

    // -------- circle --------
    {
        tag: "circle",
        description: "يرسم دائرة، تحدد بمركزها ونصف قطرها، تستخدم للرسوم الدائرية والنقاط",
        attributes: [
            {
                name: "cx",
                description: "يحدد موقع مركز الدائرة على المحور الأفقي (X)، يتحكم في مكان الدائرة",
                values: [
                    { value: "0", description: "مركز الدائرة عند 0" },
                    { value: "10", description: "مركز الدائرة عند 10" },
                    { value: "20", description: "مركز الدائرة عند 20" },
                    { value: "30", description: "مركز الدائرة عند 30" },
                    { value: "40", description: "مركز الدائرة عند 40" },
                    { value: "50", description: "مركز الدائرة عند 50" },
                    { value: "60", description: "مركز الدائرة عند 60" },
                    { value: "70", description: "مركز الدائرة عند 70" },
                    { value: "80", description: "مركز الدائرة عند 80" },
                    { value: "90", description: "مركز الدائرة عند 90" },
                    { value: "100", description: "مركز الدائرة عند 100" },
                    { value: "150", description: "مركز الدائرة عند 150" },
                    { value: "200", description: "مركز الدائرة عند 200" }
                ],
                freeInput: true
            },
            {
                name: "cy",
                description: "يحدد موقع مركز الدائرة على المحور الرأسي (Y)، يتحكم في مكان الدائرة",
                values: [
                    { value: "0", description: "مركز الدائرة عند 0" },
                    { value: "10", description: "مركز الدائرة عند 10" },
                    { value: "20", description: "مركز الدائرة عند 20" },
                    { value: "30", description: "مركز الدائرة عند 30" },
                    { value: "40", description: "مركز الدائرة عند 40" },
                    { value: "50", description: "مركز الدائرة عند 50" },
                    { value: "60", description: "مركز الدائرة عند 60" },
                    { value: "70", description: "مركز الدائرة عند 70" },
                    { value: "80", description: "مركز الدائرة عند 80" },
                    { value: "90", description: "مركز الدائرة عند 90" },
                    { value: "100", description: "مركز الدائرة عند 100" },
                    { value: "150", description: "مركز الدائرة عند 150" },
                    { value: "200", description: "مركز الدائرة عند 200" }
                ],
                freeInput: true
            },
            {
                name: "r",
                description: "يحدد نصف قطر الدائرة، يتحكم في حجم الدائرة",
                values: [
                    { value: "1", description: "نصف قطر 1" },
                    { value: "2", description: "نصف قطر 2" },
                    { value: "3", description: "نصف قطر 3" },
                    { value: "4", description: "نصف قطر 4" },
                    { value: "5", description: "نصف قطر 5" },
                    { value: "10", description: "نصف قطر 10" },
                    { value: "15", description: "نصف قطر 15" },
                    { value: "20", description: "نصف قطر 20" },
                    { value: "25", description: "نصف قطر 25" },
                    { value: "30", description: "نصف قطر 30" },
                    { value: "35", description: "نصف قطر 35" },
                    { value: "40", description: "نصف قطر 40" },
                    { value: "45", description: "نصف قطر 45" },
                    { value: "50", description: "نصف قطر 50" },
                    { value: "60", description: "نصف قطر 60" },
                    { value: "70", description: "نصف قطر 70" },
                    { value: "80", description: "نصف قطر 80" },
                    { value: "90", description: "نصف قطر 90" },
                    { value: "100", description: "نصف قطر 100" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون تعبئة الدائرة، يلون داخل الدائرة بلون معين",
                values: [
                    { value: "none", description: "بدون تعبئة (شفاف)" },
                    { value: "#000000", description: "تعبئة باللون الأسود" },
                    { value: "#ff0000", description: "تعبئة باللون الأحمر" },
                    { value: "#00ff00", description: "تعبئة باللون الأخضر" },
                    { value: "#0000ff", description: "تعبئة باللون الأزرق" },
                    { value: "#ffff00", description: "تعبئة باللون الأصفر" },
                    { value: "#ff00ff", description: "تعبئة باللون الوردي" },
                    { value: "#00ffff", description: "تعبئة باللون السماوي" },
                    { value: "#cccccc", description: "تعبئة باللون الرمادي" },
                    { value: "#999999", description: "تعبئة باللون الرمادي المتوسط" },
                    { value: "#666666", description: "تعبئة باللون الرمادي الداكن" },
                    { value: "#333333", description: "تعبئة باللون الرمادي الغامق" },
                    { value: "#3498db", description: "تعبئة بلون أزرق" },
                    { value: "#e74c3c", description: "تعبئة بلون أحمر" },
                    { value: "#2ecc71", description: "تعبئة بلون أخضر" },
                    { value: "#f39c12", description: "تعبئة بلون برتقالي" },
                    { value: "#9b59b6", description: "تعبئة بلون بنفسجي" },
                    { value: "#1abc9c", description: "تعبئة بلون أزرق مخضر" },
                    { value: "#34495e", description: "تعبئة بلون أزرق داكن" },
                    { value: "#e67e22", description: "تعبئة بلون برتقالي داكن" },
                    { value: "#c0392b", description: "تعبئة بلون أحمر داكن" },
                    { value: "#8e44ad", description: "تعبئة بلون بنفسجي داكن" },
                    { value: "red", description: "تعبئة باللون الأحمر" },
                    { value: "green", description: "تعبئة باللون الأخضر" },
                    { value: "blue", description: "تعبئة باللون الأزرق" },
                    { value: "yellow", description: "تعبئة باللون الأصفر" },
                    { value: "purple", description: "تعبئة باللون البنفسجي" },
                    { value: "orange", description: "تعبئة باللون البرتقالي" },
                    { value: "pink", description: "تعبئة باللون الوردي" },
                    { value: "cyan", description: "تعبئة باللون السماوي" },
                    { value: "magenta", description: "تعبئة باللون الأرجواني" },
                    { value: "lime", description: "تعبئة باللون الليموني" },
                    { value: "maroon", description: "تعبئة باللون الكستنائي" },
                    { value: "navy", description: "تعبئة باللون الأزرق البحري" },
                    { value: "olive", description: "تعبئة باللون الزيتوني" },
                    { value: "teal", description: "تعبئة باللون التيل" },
                    { value: "aqua", description: "تعبئة باللون الأزرق المائي" },
                    { value: "fuchsia", description: "تعبئة باللون الفوشيا" },
                    { value: "silver", description: "تعبئة باللون الفضي" },
                    { value: "gold", description: "تعبئة باللون الذهبي" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون حدود الدائرة، يلون محيط الدائرة بلون معين",
                values: [
                    { value: "none", description: "بدون حدود" },
                    { value: "#000000", description: "حدود باللون الأسود" },
                    { value: "#ff0000", description: "حدود باللون الأحمر" },
                    { value: "#00ff00", description: "حدود باللون الأخضر" },
                    { value: "#0000ff", description: "حدود باللون الأزرق" },
                    { value: "#ffff00", description: "حدود باللون الأصفر" },
                    { value: "#ff00ff", description: "حدود باللون الوردي" },
                    { value: "#00ffff", description: "حدود باللون السماوي" },
                    { value: "#cccccc", description: "حدود باللون الرمادي" },
                    { value: "#999999", description: "حدود باللون الرمادي المتوسط" },
                    { value: "#666666", description: "حدود باللون الرمادي الداكن" },
                    { value: "#333333", description: "حدود باللون الرمادي الغامق" },
                    { value: "#e74c3c", description: "حدود باللون الأحمر" },
                    { value: "#3498db", description: "حدود باللون الأزرق" },
                    { value: "#2ecc71", description: "حدود باللون الأخضر" },
                    { value: "#f39c12", description: "حدود باللون البرتقالي" },
                    { value: "#9b59b6", description: "حدود باللون البنفسجي" },
                    { value: "black", description: "حدود باللون الأسود" },
                    { value: "red", description: "حدود باللون الأحمر" },
                    { value: "green", description: "حدود باللون الأخضر" },
                    { value: "blue", description: "حدود باللون الأزرق" },
                    { value: "yellow", description: "حدود باللون الأصفر" },
                    { value: "purple", description: "حدود باللون البنفسجي" },
                    { value: "orange", description: "حدود باللون البرتقالي" },
                    { value: "pink", description: "حدود باللون الوردي" },
                    { value: "cyan", description: "حدود باللون السماوي" },
                    { value: "magenta", description: "حدود باللون الأرجواني" },
                    { value: "lime", description: "حدود باللون الليموني" },
                    { value: "maroon", description: "حدود باللون الكستنائي" },
                    { value: "navy", description: "حدود باللون الأزرق البحري" },
                    { value: "olive", description: "حدود باللون الزيتوني" },
                    { value: "teal", description: "حدود باللون التيل" },
                    { value: "aqua", description: "حدود باللون الأزرق المائي" },
                    { value: "fuchsia", description: "حدود باللون الفوشيا" },
                    { value: "silver", description: "حدود باللون الفضي" },
                    { value: "gold", description: "حدود باللون الذهبي" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك حدود الدائرة، يتحكم في سمك الخط المحيط",
                values: [
                    { value: "0.5", description: "سمك 0.5 بكسل" },
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" },
                    { value: "6", description: "سمك 6 بكسل" },
                    { value: "7", description: "سمك 7 بكسل" },
                    { value: "8", description: "سمك 8 بكسل" },
                    { value: "9", description: "سمك 9 بكسل" },
                    { value: "10", description: "سمك 10 بكسل" },
                    { value: "15", description: "سمك 15 بكسل" },
                    { value: "20", description: "سمك 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "stroke-dasharray",
                description: "يجعل حدود الدائرة منقطة أو متقطعة، يتحكم في نمط الخط",
                values: [
                    { value: "5,5", description: "نقاط متساوية 5 و 5" },
                    { value: "10,5", description: "نقاط 10 و 5" },
                    { value: "2,4", description: "نقاط صغيرة 2 و 4" },
                    { value: "10,10,2,10", description: "نقاط متعددة الأحجام" }
                ],
                freeInput: true
            },
            {
                name: "opacity",
                description: "يحدد شفافية الدائرة كاملة (من 0 إلى 1)، يتحكم في وضوح الدائرة",
                values: [
                    { value: "0", description: "شفاف بالكامل (غير مرئي)" },
                    { value: "0.1", description: "شفافية 10%" },
                    { value: "0.2", description: "شفافية 20%" },
                    { value: "0.3", description: "شفافية 30%" },
                    { value: "0.4", description: "شفافية 40%" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "0.6", description: "شفافية 60%" },
                    { value: "0.7", description: "شفافية 70%" },
                    { value: "0.8", description: "شفافية 80%" },
                    { value: "0.9", description: "شفافية 90%" },
                    { value: "1", description: "معتم بالكامل (الافتراضي)" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- rect --------
    {
        tag: "rect",
        description: "يرسم مستطيلاً، تحدد بموقعه وعرضه وارتفاعه، تستخدم للإطارات والمربعات",
        attributes: [
            {
                name: "x",
                description: "يحدد موقع المستطيل على المحور الأفقي (X)، يتحكم في مكان المستطيل",
                values: [
                    { value: "0", description: "الموضع الأفقي 0" },
                    { value: "10", description: "الموضع الأفقي 10" },
                    { value: "20", description: "الموضع الأفقي 20" },
                    { value: "30", description: "الموضع الأفقي 30" },
                    { value: "40", description: "الموضع الأفقي 40" },
                    { value: "50", description: "الموضع الأفقي 50" },
                    { value: "60", description: "الموضع الأفقي 60" },
                    { value: "70", description: "الموضع الأفقي 70" },
                    { value: "80", description: "الموضع الأفقي 80" },
                    { value: "90", description: "الموضع الأفقي 90" },
                    { value: "100", description: "الموضع الأفقي 100" }
                ],
                freeInput: true
            },
            {
                name: "y",
                description: "يحدد موقع المستطيل على المحور الرأسي (Y)، يتحكم في مكان المستطيل",
                values: [
                    { value: "0", description: "الموضع الرأسي 0" },
                    { value: "10", description: "الموضع الرأسي 10" },
                    { value: "20", description: "الموضع الرأسي 20" },
                    { value: "30", description: "الموضع الرأسي 30" },
                    { value: "40", description: "الموضع الرأسي 40" },
                    { value: "50", description: "الموضع الرأسي 50" },
                    { value: "60", description: "الموضع الرأسي 60" },
                    { value: "70", description: "الموضع الرأسي 70" },
                    { value: "80", description: "الموضع الرأسي 80" },
                    { value: "90", description: "الموضع الرأسي 90" },
                    { value: "100", description: "الموضع الرأسي 100" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض المستطيل، يتحكم في عرض الشكل",
                values: [
                    { value: "1", description: "عرض 1" },
                    { value: "5", description: "عرض 5" },
                    { value: "10", description: "عرض 10" },
                    { value: "20", description: "عرض 20" },
                    { value: "30", description: "عرض 30" },
                    { value: "40", description: "عرض 40" },
                    { value: "50", description: "عرض 50" },
                    { value: "60", description: "عرض 60" },
                    { value: "70", description: "عرض 70" },
                    { value: "80", description: "عرض 80" },
                    { value: "90", description: "عرض 90" },
                    { value: "100", description: "عرض 100" },
                    { value: "150", description: "عرض 150" },
                    { value: "200", description: "عرض 200" },
                    { value: "300", description: "عرض 300" },
                    { value: "400", description: "عرض 400" },
                    { value: "500", description: "عرض 500" },
                    { value: "100%", description: "عرض كامل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع المستطيل، يتحكم في ارتفاع الشكل",
                values: [
                    { value: "1", description: "ارتفاع 1" },
                    { value: "5", description: "ارتفاع 5" },
                    { value: "10", description: "ارتفاع 10" },
                    { value: "20", description: "ارتفاع 20" },
                    { value: "30", description: "ارتفاع 30" },
                    { value: "40", description: "ارتفاع 40" },
                    { value: "50", description: "ارتفاع 50" },
                    { value: "60", description: "ارتفاع 60" },
                    { value: "70", description: "ارتفاع 70" },
                    { value: "80", description: "ارتفاع 80" },
                    { value: "90", description: "ارتفاع 90" },
                    { value: "100", description: "ارتفاع 100" },
                    { value: "150", description: "ارتفاع 150" },
                    { value: "200", description: "ارتفاع 200" },
                    { value: "300", description: "ارتفاع 300" },
                    { value: "400", description: "ارتفاع 400" },
                    { value: "500", description: "ارتفاع 500" },
                    { value: "100%", description: "ارتفاع كامل" }
                ],
                freeInput: true
            },
            {
                name: "rx",
                description: "يحدد استدارة زوايا المستطيل أفقياً، يجعل الزوايا دائرية",
                values: [
                    { value: "0", description: "بدون استدارة (زوايا حادة)" },
                    { value: "1", description: "استدارة 1 بكسل" },
                    { value: "2", description: "استدارة 2 بكسل" },
                    { value: "3", description: "استدارة 3 بكسل" },
                    { value: "4", description: "استدارة 4 بكسل" },
                    { value: "5", description: "استدارة 5 بكسل" },
                    { value: "10", description: "استدارة 10 بكسل" },
                    { value: "15", description: "استدارة 15 بكسل" },
                    { value: "20", description: "استدارة 20 بكسل" },
                    { value: "25", description: "استدارة 25 بكسل" },
                    { value: "30", description: "استدارة 30 بكسل" },
                    { value: "40", description: "استدارة 40 بكسل" },
                    { value: "50", description: "استدارة 50 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "ry",
                description: "يحدد استدارة زوايا المستطيل رأسياً، يجعل الزوايا دائرية",
                values: [
                    { value: "0", description: "بدون استدارة (زوايا حادة)" },
                    { value: "1", description: "استدارة 1 بكسل" },
                    { value: "2", description: "استدارة 2 بكسل" },
                    { value: "3", description: "استدارة 3 بكسل" },
                    { value: "4", description: "استدارة 4 بكسل" },
                    { value: "5", description: "استدارة 5 بكسل" },
                    { value: "10", description: "استدارة 10 بكسل" },
                    { value: "15", description: "استدارة 15 بكسل" },
                    { value: "20", description: "استدارة 20 بكسل" },
                    { value: "25", description: "استدارة 25 بكسل" },
                    { value: "30", description: "استدارة 30 بكسل" },
                    { value: "40", description: "استدارة 40 بكسل" },
                    { value: "50", description: "استدارة 50 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون تعبئة المستطيل، يلون داخل المستطيل بلون معين",
                values: [
                    { value: "none", description: "بدون تعبئة (شفاف)" },
                    { value: "#000000", description: "تعبئة باللون الأسود" },
                    { value: "#ff0000", description: "تعبئة باللون الأحمر" },
                    { value: "#00ff00", description: "تعبئة باللون الأخضر" },
                    { value: "#0000ff", description: "تعبئة باللون الأزرق" },
                    { value: "#ffff00", description: "تعبئة باللون الأصفر" },
                    { value: "#ff00ff", description: "تعبئة باللون الوردي" },
                    { value: "#00ffff", description: "تعبئة باللون السماوي" },
                    { value: "#cccccc", description: "تعبئة باللون الرمادي" },
                    { value: "#999999", description: "تعبئة باللون الرمادي المتوسط" },
                    { value: "#666666", description: "تعبئة باللون الرمادي الداكن" },
                    { value: "#333333", description: "تعبئة باللون الرمادي الغامق" },
                    { value: "#3498db", description: "تعبئة باللون الأزرق" },
                    { value: "#e74c3c", description: "تعبئة باللون الأحمر" },
                    { value: "#2ecc71", description: "تعبئة باللون الأخضر" },
                    { value: "#f39c12", description: "تعبئة باللون البرتقالي" },
                    { value: "#9b59b6", description: "تعبئة باللون البنفسجي" },
                    { value: "blue", description: "تعبئة باللون الأزرق" },
                    { value: "red", description: "تعبئة باللون الأحمر" },
                    { value: "green", description: "تعبئة باللون الأخضر" },
                    { value: "yellow", description: "تعبئة باللون الأصفر" },
                    { value: "purple", description: "تعبئة باللون البنفسجي" },
                    { value: "orange", description: "تعبئة باللون البرتقالي" },
                    { value: "pink", description: "تعبئة باللون الوردي" },
                    { value: "cyan", description: "تعبئة باللون السماوي" },
                    { value: "magenta", description: "تعبئة باللون الأرجواني" },
                    { value: "lime", description: "تعبئة باللون الليموني" },
                    { value: "maroon", description: "تعبئة باللون الكستنائي" },
                    { value: "navy", description: "تعبئة باللون الأزرق البحري" },
                    { value: "olive", description: "تعبئة باللون الزيتوني" },
                    { value: "teal", description: "تعبئة باللون التيل" },
                    { value: "aqua", description: "تعبئة باللون الأزرق المائي" },
                    { value: "fuchsia", description: "تعبئة باللون الفوشيا" },
                    { value: "silver", description: "تعبئة باللون الفضي" },
                    { value: "gold", description: "تعبئة باللون الذهبي" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون حدود المستطيل، يلون محيط المستطيل بلون معين",
                values: [
                    { value: "none", description: "بدون حدود" },
                    { value: "#000000", description: "حدود باللون الأسود" },
                    { value: "#ff0000", description: "حدود باللون الأحمر" },
                    { value: "#00ff00", description: "حدود باللون الأخضر" },
                    { value: "#0000ff", description: "حدود باللون الأزرق" },
                    { value: "#ffff00", description: "حدود باللون الأصفر" },
                    { value: "#ff00ff", description: "حدود باللون الوردي" },
                    { value: "#00ffff", description: "حدود باللون السماوي" },
                    { value: "#cccccc", description: "حدود باللون الرمادي" },
                    { value: "#999999", description: "حدود باللون الرمادي المتوسط" },
                    { value: "#666666", description: "حدود باللون الرمادي الداكن" },
                    { value: "#333333", description: "حدود باللون الرمادي الغامق" },
                    { value: "#e74c3c", description: "حدود باللون الأحمر" },
                    { value: "#3498db", description: "حدود باللون الأزرق" },
                    { value: "#2ecc71", description: "حدود باللون الأخضر" },
                    { value: "#f39c12", description: "حدود باللون البرتقالي" },
                    { value: "black", description: "حدود باللون الأسود" },
                    { value: "red", description: "حدود باللون الأحمر" },
                    { value: "green", description: "حدود باللون الأخضر" },
                    { value: "blue", description: "حدود باللون الأزرق" },
                    { value: "yellow", description: "حدود باللون الأصفر" },
                    { value: "purple", description: "حدود باللون البنفسجي" },
                    { value: "orange", description: "حدود باللون البرتقالي" },
                    { value: "pink", description: "حدود باللون الوردي" },
                    { value: "cyan", description: "حدود باللون السماوي" },
                    { value: "magenta", description: "حدود باللون الأرجواني" },
                    { value: "lime", description: "حدود باللون الليموني" },
                    { value: "maroon", description: "حدود باللون الكستنائي" },
                    { value: "navy", description: "حدود باللون الأزرق البحري" },
                    { value: "olive", description: "حدود باللون الزيتوني" },
                    { value: "teal", description: "حدود باللون التيل" },
                    { value: "aqua", description: "حدود باللون الأزرق المائي" },
                    { value: "fuchsia", description: "حدود باللون الفوشيا" },
                    { value: "silver", description: "حدود باللون الفضي" },
                    { value: "gold", description: "حدود باللون الذهبي" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك حدود المستطيل، يتحكم في سمك الخط المحيط",
                values: [
                    { value: "0.5", description: "سمك 0.5 بكسل" },
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" },
                    { value: "6", description: "سمك 6 بكسل" },
                    { value: "7", description: "سمك 7 بكسل" },
                    { value: "8", description: "سمك 8 بكسل" },
                    { value: "9", description: "سمك 9 بكسل" },
                    { value: "10", description: "سمك 10 بكسل" },
                    { value: "15", description: "سمك 15 بكسل" },
                    { value: "20", description: "سمك 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "opacity",
                description: "يحدد شفافية المستطيل كاملة (من 0 إلى 1)، يتحكم في وضوح المستطيل",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.1", description: "شفافية 10%" },
                    { value: "0.2", description: "شفافية 20%" },
                    { value: "0.3", description: "شفافية 30%" },
                    { value: "0.4", description: "شفافية 40%" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "0.6", description: "شفافية 60%" },
                    { value: "0.7", description: "شفافية 70%" },
                    { value: "0.8", description: "شفافية 80%" },
                    { value: "0.9", description: "شفافية 90%" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- line --------
    {
        tag: "line",
        description: "يرسم خطاً مستقيماً بين نقطتين، يستخدم للرسومات الهندسية والخطوط",
        attributes: [
            {
                name: "x1",
                description: "يحدد النقطة الأولى على المحور الأفقي (X) لبداية الخط",
                values: [
                    { value: "0", description: "بداية الخط عند 0" },
                    { value: "10", description: "بداية الخط عند 10" },
                    { value: "20", description: "بداية الخط عند 20" },
                    { value: "30", description: "بداية الخط عند 30" },
                    { value: "40", description: "بداية الخط عند 40" },
                    { value: "50", description: "بداية الخط عند 50" },
                    { value: "60", description: "بداية الخط عند 60" },
                    { value: "70", description: "بداية الخط عند 70" },
                    { value: "80", description: "بداية الخط عند 80" },
                    { value: "90", description: "بداية الخط عند 90" },
                    { value: "100", description: "بداية الخط عند 100" }
                ],
                freeInput: true
            },
            {
                name: "y1",
                description: "يحدد النقطة الأولى على المحور الرأسي (Y) لبداية الخط",
                values: [
                    { value: "0", description: "بداية الخط عند 0" },
                    { value: "10", description: "بداية الخط عند 10" },
                    { value: "20", description: "بداية الخط عند 20" },
                    { value: "30", description: "بداية الخط عند 30" },
                    { value: "40", description: "بداية الخط عند 40" },
                    { value: "50", description: "بداية الخط عند 50" },
                    { value: "60", description: "بداية الخط عند 60" },
                    { value: "70", description: "بداية الخط عند 70" },
                    { value: "80", description: "بداية الخط عند 80" },
                    { value: "90", description: "بداية الخط عند 90" },
                    { value: "100", description: "بداية الخط عند 100" }
                ],
                freeInput: true
            },
            {
                name: "x2",
                description: "يحدد النقطة الثانية على المحور الأفقي (X) لنهاية الخط",
                values: [
                    { value: "0", description: "نهاية الخط عند 0" },
                    { value: "10", description: "نهاية الخط عند 10" },
                    { value: "20", description: "نهاية الخط عند 20" },
                    { value: "30", description: "نهاية الخط عند 30" },
                    { value: "40", description: "نهاية الخط عند 40" },
                    { value: "50", description: "نهاية الخط عند 50" },
                    { value: "60", description: "نهاية الخط عند 60" },
                    { value: "70", description: "نهاية الخط عند 70" },
                    { value: "80", description: "نهاية الخط عند 80" },
                    { value: "90", description: "نهاية الخط عند 90" },
                    { value: "100", description: "نهاية الخط عند 100" },
                    { value: "200", description: "نهاية الخط عند 200" },
                    { value: "300", description: "نهاية الخط عند 300" }
                ],
                freeInput: true
            },
            {
                name: "y2",
                description: "يحدد النقطة الثانية على المحور الرأسي (Y) لنهاية الخط",
                values: [
                    { value: "0", description: "نهاية الخط عند 0" },
                    { value: "10", description: "نهاية الخط عند 10" },
                    { value: "20", description: "نهاية الخط عند 20" },
                    { value: "30", description: "نهاية الخط عند 30" },
                    { value: "40", description: "نهاية الخط عند 40" },
                    { value: "50", description: "نهاية الخط عند 50" },
                    { value: "60", description: "نهاية الخط عند 60" },
                    { value: "70", description: "نهاية الخط عند 70" },
                    { value: "80", description: "نهاية الخط عند 80" },
                    { value: "90", description: "نهاية الخط عند 90" },
                    { value: "100", description: "نهاية الخط عند 100" },
                    { value: "200", description: "نهاية الخط عند 200" },
                    { value: "300", description: "نهاية الخط عند 300" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون الخط، يلون الخط بلون معين",
                values: [
                    { value: "#000000", description: "خط أسود" },
                    { value: "#ff0000", description: "خط أحمر" },
                    { value: "#00ff00", description: "خط أخضر" },
                    { value: "#0000ff", description: "خط أزرق" },
                    { value: "#ffff00", description: "خط أصفر" },
                    { value: "#ff00ff", description: "خط وردي" },
                    { value: "#00ffff", description: "خط سماوي" },
                    { value: "#cccccc", description: "خط رمادي" },
                    { value: "#999999", description: "خط رمادي متوسط" },
                    { value: "#666666", description: "خط رمادي داكن" },
                    { value: "#333333", description: "خط رمادي غامق" },
                    { value: "#e74c3c", description: "خط أحمر" },
                    { value: "#3498db", description: "خط أزرق" },
                    { value: "#2ecc71", description: "خط أخضر" },
                    { value: "#f39c12", description: "خط برتقالي" },
                    { value: "black", description: "خط أسود" },
                    { value: "red", description: "خط أحمر" },
                    { value: "green", description: "خط أخضر" },
                    { value: "blue", description: "خط أزرق" },
                    { value: "yellow", description: "خط أصفر" },
                    { value: "purple", description: "خط بنفسجي" },
                    { value: "orange", description: "خط برتقالي" },
                    { value: "pink", description: "خط وردي" },
                    { value: "cyan", description: "خط سماوي" },
                    { value: "magenta", description: "خط أرجواني" },
                    { value: "lime", description: "خط ليموني" },
                    { value: "maroon", description: "خط كستنائي" },
                    { value: "navy", description: "خط أزرق بحري" },
                    { value: "olive", description: "خط زيتوني" },
                    { value: "teal", description: "خط تيل" },
                    { value: "aqua", description: "خط أزرق مائي" },
                    { value: "fuchsia", description: "خط فوشيا" },
                    { value: "silver", description: "خط فضي" },
                    { value: "gold", description: "خط ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك الخط، يتحكم في سمك الخط المرسوم",
                values: [
                    { value: "0.5", description: "سمك 0.5 بكسل" },
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" },
                    { value: "6", description: "سمك 6 بكسل" },
                    { value: "7", description: "سمك 7 بكسل" },
                    { value: "8", description: "سمك 8 بكسل" },
                    { value: "9", description: "سمك 9 بكسل" },
                    { value: "10", description: "سمك 10 بكسل" },
                    { value: "15", description: "سمك 15 بكسل" },
                    { value: "20", description: "سمك 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "stroke-dasharray",
                description: "يجعل الخط منقطاً أو متقطعاً، يتحكم في نمط الخط",
                values: [
                    { value: "5,5", description: "نقاط متساوية 5 و 5" },
                    { value: "10,5", description: "نقاط 10 و 5" },
                    { value: "2,4", description: "نقاط صغيرة 2 و 4" }
                ],
                freeInput: true
            },
            {
                name: "opacity",
                description: "يحدد شفافية الخط (من 0 إلى 1)، يتحكم في وضوح الخط",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- path --------
    {
        tag: "path",
        description: "يرسم مساراً معقداً يتكون من خطوط ومنحنيات، يستخدم لإنشاء أشكال مخصصة ومعقدة",
        attributes: [
            {
                name: "d",
                description: "يحدد سلسلة من الأوامر لرسم المسار، يتحكم في شكل المسار بالكامل",
                values: [
                    { value: "M 10 10 L 90 90", description: "خط مستقيم من نقطة لنقطة" },
                    { value: "M 10 10 L 50 50 L 90 10", description: "مثلث" },
                    { value: "M 10 50 Q 50 10 90 50", description: "منحنى تربيعي" },
                    { value: "M 10 50 C 30 10 70 10 90 50", description: "منحنى مكعب" },
                    { value: "M 50 10 A 40 40 0 1 1 50 90", description: "قوس دائري" },
                    { value: "M 10 10 L 90 10 L 90 90 L 10 90 Z", description: "مربع" },
                    { value: "M 50 10 L 90 50 L 50 90 L 10 50 Z", description: "معين" },
                    { value: "M 50 10 A 40 40 0 1 1 50 90 A 40 40 0 1 1 50 10", description: "دائرة بمسار" },
                    { value: "M 50 10 Q 10 50 50 90 Q 90 50 50 10", description: "قلب" },
                    { value: "M 10 50 C 10 10 90 10 90 50 C 90 90 10 90 10 50", description: "بيضاوي" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون تعبئة المسار، يلون داخل المسار بلون معين",
                values: [
                    { value: "none", description: "بدون تعبئة" },
                    { value: "#000000", description: "تعبئة باللون الأسود" },
                    { value: "#ff0000", description: "تعبئة باللون الأحمر" },
                    { value: "#00ff00", description: "تعبئة باللون الأخضر" },
                    { value: "#0000ff", description: "تعبئة باللون الأزرق" },
                    { value: "#ffff00", description: "تعبئة باللون الأصفر" },
                    { value: "#ff00ff", description: "تعبئة باللون الوردي" },
                    { value: "#00ffff", description: "تعبئة باللون السماوي" },
                    { value: "#cccccc", description: "تعبئة باللون الرمادي" },
                    { value: "#999999", description: "تعبئة باللون الرمادي المتوسط" },
                    { value: "#666666", description: "تعبئة باللون الرمادي الداكن" },
                    { value: "#333333", description: "تعبئة باللون الرمادي الغامق" },
                    { value: "#3498db", description: "تعبئة باللون الأزرق" },
                    { value: "#e74c3c", description: "تعبئة باللون الأحمر" },
                    { value: "#2ecc71", description: "تعبئة باللون الأخضر" },
                    { value: "#f39c12", description: "تعبئة باللون البرتقالي" },
                    { value: "#9b59b6", description: "تعبئة باللون البنفسجي" },
                    { value: "red", description: "تعبئة باللون الأحمر" },
                    { value: "green", description: "تعبئة باللون الأخضر" },
                    { value: "blue", description: "تعبئة باللون الأزرق" },
                    { value: "yellow", description: "تعبئة باللون الأصفر" },
                    { value: "purple", description: "تعبئة باللون البنفسجي" },
                    { value: "orange", description: "تعبئة باللون البرتقالي" },
                    { value: "pink", description: "تعبئة باللون الوردي" },
                    { value: "cyan", description: "تعبئة باللون السماوي" },
                    { value: "magenta", description: "تعبئة باللون الأرجواني" },
                    { value: "lime", description: "تعبئة باللون الليموني" },
                    { value: "maroon", description: "تعبئة باللون الكستنائي" },
                    { value: "navy", description: "تعبئة باللون الأزرق البحري" },
                    { value: "olive", description: "تعبئة باللون الزيتوني" },
                    { value: "teal", description: "تعبئة باللون التيل" },
                    { value: "aqua", description: "تعبئة باللون الأزرق المائي" },
                    { value: "fuchsia", description: "تعبئة باللون الفوشيا" },
                    { value: "silver", description: "تعبئة باللون الفضي" },
                    { value: "gold", description: "تعبئة باللون الذهبي" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون حدود المسار، يلون محيط المسار بلون معين",
                values: [
                    { value: "none", description: "بدون حدود" },
                    { value: "#000000", description: "حدود باللون الأسود" },
                    { value: "#ff0000", description: "حدود باللون الأحمر" },
                    { value: "#00ff00", description: "حدود باللون الأخضر" },
                    { value: "#0000ff", description: "حدود باللون الأزرق" },
                    { value: "#ffff00", description: "حدود باللون الأصفر" },
                    { value: "#ff00ff", description: "حدود باللون الوردي" },
                    { value: "#00ffff", description: "حدود باللون السماوي" },
                    { value: "#cccccc", description: "حدود باللون الرمادي" },
                    { value: "#999999", description: "حدود باللون الرمادي المتوسط" },
                    { value: "#666666", description: "حدود باللون الرمادي الداكن" },
                    { value: "#333333", description: "حدود باللون الرمادي الغامق" },
                    { value: "#e74c3c", description: "حدود باللون الأحمر" },
                    { value: "#3498db", description: "حدود باللون الأزرق" },
                    { value: "#2ecc71", description: "حدود باللون الأخضر" },
                    { value: "#f39c12", description: "حدود باللون البرتقالي" },
                    { value: "black", description: "حدود سوداء" },
                    { value: "red", description: "حدود حمراء" },
                    { value: "green", description: "حدود خضراء" },
                    { value: "blue", description: "حدود زرقاء" },
                    { value: "yellow", description: "حدود صفراء" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك حدود المسار، يتحكم في سمك الخط المحيط",
                values: [
                    { value: "0.5", description: "سمك 0.5 بكسل" },
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" },
                    { value: "6", description: "سمك 6 بكسل" },
                    { value: "7", description: "سمك 7 بكسل" },
                    { value: "8", description: "سمك 8 بكسل" },
                    { value: "9", description: "سمك 9 بكسل" },
                    { value: "10", description: "سمك 10 بكسل" },
                    { value: "15", description: "سمك 15 بكسل" },
                    { value: "20", description: "سمك 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "stroke-dasharray",
                description: "يجعل حدود المسار منقطة أو متقطعة، يتحكم في نمط الخط",
                values: [
                    { value: "5,5", description: "نقاط متساوية 5 و 5" },
                    { value: "10,5", description: "نقاط 10 و 5" },
                    { value: "2,4", description: "نقاط صغيرة 2 و 4" }
                ],
                freeInput: true
            },
            {
                name: "opacity",
                description: "يحدد شفافية المسار كاملة (من 0 إلى 1)، يتحكم في وضوح المسار",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- text --------
    {
        tag: "text",
        description: "يضيف نصاً داخل الرسم SVG، يمكن تنسيقه وتحديد مكانه ولونه وحجمه",
        attributes: [
            {
                name: "x",
                description: "يحدد موقع النص على المحور الأفقي (X)، يتحكم في مكان النص",
                values: [
                    { value: "0", description: "الموضع الأفقي 0" },
                    { value: "10", description: "الموضع الأفقي 10" },
                    { value: "20", description: "الموضع الأفقي 20" },
                    { value: "30", description: "الموضع الأفقي 30" },
                    { value: "40", description: "الموضع الأفقي 40" },
                    { value: "50", description: "الموضع الأفقي 50" },
                    { value: "60", description: "الموضع الأفقي 60" },
                    { value: "70", description: "الموضع الأفقي 70" },
                    { value: "80", description: "الموضع الأفقي 80" },
                    { value: "90", description: "الموضع الأفقي 90" },
                    { value: "100", description: "الموضع الأفقي 100" },
                    { value: "150", description: "الموضع الأفقي 150" },
                    { value: "200", description: "الموضع الأفقي 200" }
                ],
                freeInput: true
            },
            {
                name: "y",
                description: "يحدد موقع النص على المحور الرأسي (Y)، يتحكم في مكان النص",
                values: [
                    { value: "0", description: "الموضع الرأسي 0" },
                    { value: "10", description: "الموضع الرأسي 10" },
                    { value: "20", description: "الموضع الرأسي 20" },
                    { value: "30", description: "الموضع الرأسي 30" },
                    { value: "40", description: "الموضع الرأسي 40" },
                    { value: "50", description: "الموضع الرأسي 50" },
                    { value: "60", description: "الموضع الرأسي 60" },
                    { value: "70", description: "الموضع الرأسي 70" },
                    { value: "80", description: "الموضع الرأسي 80" },
                    { value: "90", description: "الموضع الرأسي 90" },
                    { value: "100", description: "الموضع الرأسي 100" },
                    { value: "150", description: "الموضع الرأسي 150" },
                    { value: "200", description: "الموضع الرأسي 200" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون النص، يلون النص بلون معين",
                values: [
                    { value: "#000000", description: "نص أسود" },
                    { value: "#ff0000", description: "نص أحمر" },
                    { value: "#00ff00", description: "نص أخضر" },
                    { value: "#0000ff", description: "نص أزرق" },
                    { value: "#ffff00", description: "نص أصفر" },
                    { value: "#ff00ff", description: "نص وردي" },
                    { value: "#00ffff", description: "نص سماوي" },
                    { value: "#cccccc", description: "نص رمادي" },
                    { value: "#999999", description: "نص رمادي متوسط" },
                    { value: "#666666", description: "نص رمادي داكن" },
                    { value: "#333333", description: "نص رمادي غامق" },
                    { value: "#3498db", description: "نص أزرق" },
                    { value: "#e74c3c", description: "نص أحمر" },
                    { value: "#2ecc71", description: "نص أخضر" },
                    { value: "#f39c12", description: "نص برتقالي" },
                    { value: "#9b59b6", description: "نص بنفسجي" },
                    { value: "black", description: "نص أسود" },
                    { value: "red", description: "نص أحمر" },
                    { value: "green", description: "نص أخضر" },
                    { value: "blue", description: "نص أزرق" },
                    { value: "yellow", description: "نص أصفر" },
                    { value: "purple", description: "نص بنفسجي" },
                    { value: "orange", description: "نص برتقالي" },
                    { value: "pink", description: "نص وردي" },
                    { value: "cyan", description: "نص سماوي" },
                    { value: "magenta", description: "نص أرجواني" },
                    { value: "lime", description: "نص ليموني" },
                    { value: "maroon", description: "نص كستنائي" },
                    { value: "navy", description: "نص أزرق بحري" },
                    { value: "olive", description: "نص زيتوني" },
                    { value: "teal", description: "نص تيل" },
                    { value: "aqua", description: "نص أزرق مائي" },
                    { value: "fuchsia", description: "نص فوشيا" },
                    { value: "silver", description: "نص فضي" },
                    { value: "gold", description: "نص ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "font-size",
                description: "يحدد حجم النص، يتحكم في حجم الخط المعروض",
                values: [
                    { value: "8", description: "حجم 8 بكسل" },
                    { value: "10", description: "حجم 10 بكسل" },
                    { value: "12", description: "حجم 12 بكسل" },
                    { value: "14", description: "حجم 14 بكسل" },
                    { value: "16", description: "حجم 16 بكسل" },
                    { value: "18", description: "حجم 18 بكسل" },
                    { value: "20", description: "حجم 20 بكسل" },
                    { value: "24", description: "حجم 24 بكسل" },
                    { value: "28", description: "حجم 28 بكسل" },
                    { value: "32", description: "حجم 32 بكسل" },
                    { value: "36", description: "حجم 36 بكسل" },
                    { value: "40", description: "حجم 40 بكسل" },
                    { value: "48", description: "حجم 48 بكسل" },
                    { value: "56", description: "حجم 56 بكسل" },
                    { value: "64", description: "حجم 64 بكسل" },
                    { value: "72", description: "حجم 72 بكسل" },
                    { value: "96", description: "حجم 96 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "font-family",
                description: "يحدد نوع الخط المستخدم، يغير شكل النص",
                values: [
                    { value: "Arial", description: "خط Arial" },
                    { value: "Arial Black", description: "خط Arial Black" },
                    { value: "Verdana", description: "خط Verdana" },
                    { value: "Tahoma", description: "خط Tahoma" },
                    { value: "Times New Roman", description: "خط Times New Roman" },
                    { value: "Georgia", description: "خط Georgia" },
                    { value: "Courier New", description: "خط Courier New" },
                    { value: "Comic Sans MS", description: "خط Comic Sans MS" },
                    { value: "Impact", description: "خط Impact" },
                    { value: "Helvetica", description: "خط Helvetica" },
                    { value: "sans-serif", description: "خط عام بدون زخرفات" },
                    { value: "serif", description: "خط عام بزخرفات" },
                    { value: "monospace", description: "خط أحادي التباعد" },
                    { value: "cursive", description: "خط مائل" },
                    { value: "fantasy", description: "خط خيالي" }
                ],
                freeInput: true
            },
            {
                name: "font-weight",
                description: "يحدد سمك الخط، يتحكم في سُمك النص",
                values: [
                    { value: "normal", description: "سمك عادي (الافتراضي)" },
                    { value: "bold", description: "خط عريض" },
                    { value: "bolder", description: "خط أعرض من bold" },
                    { value: "lighter", description: "خط أخف من normal" },
                    { value: "100", description: "سمك 100" },
                    { value: "200", description: "سمك 200" },
                    { value: "300", description: "سمك 300" },
                    { value: "400", description: "سمك 400" },
                    { value: "500", description: "سمك 500" },
                    { value: "600", description: "سمك 600" },
                    { value: "700", description: "سمك 700" },
                    { value: "800", description: "سمك 800" },
                    { value: "900", description: "سمك 900" }
                ]
            },
            {
                name: "font-style",
                description: "يحدد نمط الخط، يتحكم في ميل النص",
                values: [
                    { value: "normal", description: "نمط عادي (الافتراضي)" },
                    { value: "italic", description: "خط مائل" },
                    { value: "oblique", description: "خط مائل بزاوية" }
                ]
            },
            {
                name: "text-anchor",
                description: "يحدد محاذاة النص بالنسبة للنقطة المحددة، يتحكم في مكان ظهور النص",
                values: [
                    { value: "start", description: "محاذاة لليسار (النقطة بداية النص)" },
                    { value: "middle", description: "محاذاة للوسط (النقطة وسط النص)" },
                    { value: "end", description: "محاذاة لليمين (النقطة نهاية النص)" }
                ]
            },
            {
                name: "opacity",
                description: "يحدد شفافية النص (من 0 إلى 1)، يتحكم في وضوح النص",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- g --------
    {
        tag: "g",
        description: "يجمع مجموعة من عناصر SVG لتطبيق تحويلات أو تنسيقات مشتركة عليها دفعة واحدة",
        attributes: [
            {
                name: "transform",
                description: "يطبق تحويلاً على جميع العناصر داخل المجموعة، مثل تدوير أو تكبير أو نقل",
                values: [
                    { value: "translate(10,10)", description: "ينقل المجموعة 10 بكسل في كل اتجاه" },
                    { value: "translate(50,50)", description: "ينقل المجموعة 50 بكسل في كل اتجاه" },
                    { value: "translate(100,100)", description: "ينقل المجموعة 100 بكسل في كل اتجاه" },
                    { value: "translate(50,0)", description: "ينقل المجموعة 50 بكسل أفقياً" },
                    { value: "translate(0,50)", description: "ينقل المجموعة 50 بكسل عمودياً" },
                    { value: "rotate(45)", description: "يدور المجموعة 45 درجة" },
                    { value: "rotate(90)", description: "يدور المجموعة 90 درجة" },
                    { value: "rotate(180)", description: "يدور المجموعة 180 درجة" },
                    { value: "rotate(270)", description: "يدور المجموعة 270 درجة" },
                    { value: "rotate(360)", description: "يدور المجموعة 360 درجة" },
                    { value: "scale(1.5)", description: "يكبر المجموعة بنسبة 150%" },
                    { value: "scale(2)", description: "يكبر المجموعة بنسبة 200%" },
                    { value: "scale(0.5)", description: "يصغر المجموعة بنسبة 50%" },
                    { value: "scale(1, 2)", description: "يكبر أفقياً بنسبة 100% وعمودياً بنسبة 200%" },
                    { value: "skewX(30)", description: "يميل المجموعة أفقياً 30 درجة" },
                    { value: "skewY(30)", description: "يميل المجموعة عمودياً 30 درجة" },
                    { value: "translate(50,50) rotate(45)", description: "ينقل ثم يدور المجموعة" },
                    { value: "rotate(45) translate(50,50)", description: "يدور ثم ينقل المجموعة" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون التعبئة لكل العناصر داخل المجموعة، يلونها بلون واحد",
                values: [
                    { value: "none", description: "بدون تعبئة" },
                    { value: "#000000", description: "تعبئة باللون الأسود" },
                    { value: "#ff0000", description: "تعبئة باللون الأحمر" },
                    { value: "#00ff00", description: "تعبئة باللون الأخضر" },
                    { value: "#0000ff", description: "تعبئة باللون الأزرق" },
                    { value: "#ffff00", description: "تعبئة باللون الأصفر" },
                    { value: "#ff00ff", description: "تعبئة باللون الوردي" },
                    { value: "#00ffff", description: "تعبئة باللون السماوي" },
                    { value: "#cccccc", description: "تعبئة باللون الرمادي" },
                    { value: "#999999", description: "تعبئة باللون الرمادي المتوسط" },
                    { value: "#666666", description: "تعبئة باللون الرمادي الداكن" },
                    { value: "#333333", description: "تعبئة باللون الرمادي الغامق" },
                    { value: "#3498db", description: "تعبئة باللون الأزرق" },
                    { value: "#e74c3c", description: "تعبئة باللون الأحمر" },
                    { value: "#2ecc71", description: "تعبئة باللون الأخضر" },
                    { value: "#f39c12", description: "تعبئة باللون البرتقالي" },
                    { value: "#9b59b6", description: "تعبئة باللون البنفسجي" },
                    { value: "red", description: "تعبئة باللون الأحمر" },
                    { value: "green", description: "تعبئة باللون الأخضر" },
                    { value: "blue", description: "تعبئة باللون الأزرق" },
                    { value: "yellow", description: "تعبئة باللون الأصفر" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون الحدود لكل العناصر داخل المجموعة، يلون حدودها بلون واحد",
                values: [
                    { value: "none", description: "بدون حدود" },
                    { value: "#000000", description: "حدود باللون الأسود" },
                    { value: "#ff0000", description: "حدود باللون الأحمر" },
                    { value: "#00ff00", description: "حدود باللون الأخضر" },
                    { value: "#0000ff", description: "حدود باللون الأزرق" },
                    { value: "#ffff00", description: "حدود باللون الأصفر" },
                    { value: "#ff00ff", description: "حدود باللون الوردي" },
                    { value: "#00ffff", description: "حدود باللون السماوي" },
                    { value: "#cccccc", description: "حدود باللون الرمادي" },
                    { value: "#999999", description: "حدود باللون الرمادي المتوسط" },
                    { value: "#666666", description: "حدود باللون الرمادي الداكن" },
                    { value: "#333333", description: "حدود باللون الرمادي الغامق" },
                    { value: "#e74c3c", description: "حدود باللون الأحمر" },
                    { value: "#3498db", description: "حدود باللون الأزرق" },
                    { value: "#2ecc71", description: "حدود باللون الأخضر" },
                    { value: "#f39c12", description: "حدود باللون البرتقالي" },
                    { value: "black", description: "حدود سوداء" },
                    { value: "red", description: "حدود حمراء" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك الحدود لكل العناصر داخل المجموعة",
                values: [
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "opacity",
                description: "يحدد شفافية المجموعة كاملة (من 0 إلى 1)",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- defs --------
    {
        tag: "defs",
        description: "يخزن تعريفات لعناصر SVG قابلة لإعادة الاستخدام، يمكن استدعاؤها عدة مرات دون تكرار الكود",
        attributes: []
    },

    // -------- use --------
    {
        tag: "use",
        description: "يعيد استخدام عنصر SVG معرف مسبقاً في defs، يوفر الوقت ويقلل حجم الكود",
        attributes: [
            {
                name: "href",
                description: "يحدد العنصر الذي سيتم إعادة استخدامه، ينسخ العنصر في مكانه",
                values: [
                    { value: "#icon", description: "يعيد استخدام العنصر ذو المعرف icon" },
                    { value: "#shape", description: "يعيد استخدام العنصر ذو المعرف shape" },
                    { value: "#circle", description: "يعيد استخدام العنصر ذو المعرف circle" },
                    { value: "#symbol", description: "يعيد استخدام العنصر ذو المعرف symbol" }
                ],
                freeInput: true
            },
            {
                name: "x",
                description: "يحدد موقع العنصر المستخدم على المحور الأفقي (X)",
                values: [
                    { value: "0", description: "الموضع الأفقي 0" },
                    { value: "10", description: "الموضع الأفقي 10" },
                    { value: "20", description: "الموضع الأفقي 20" },
                    { value: "30", description: "الموضع الأفقي 30" },
                    { value: "40", description: "الموضع الأفقي 40" },
                    { value: "50", description: "الموضع الأفقي 50" },
                    { value: "60", description: "الموضع الأفقي 60" },
                    { value: "70", description: "الموضع الأفقي 70" },
                    { value: "80", description: "الموضع الأفقي 80" },
                    { value: "90", description: "الموضع الأفقي 90" },
                    { value: "100", description: "الموضع الأفقي 100" },
                    { value: "150", description: "الموضع الأفقي 150" },
                    { value: "200", description: "الموضع الأفقي 200" }
                ],
                freeInput: true
            },
            {
                name: "y",
                description: "يحدد موقع العنصر المستخدم على المحور الرأسي (Y)",
                values: [
                    { value: "0", description: "الموضع الرأسي 0" },
                    { value: "10", description: "الموضع الرأسي 10" },
                    { value: "20", description: "الموضع الرأسي 20" },
                    { value: "30", description: "الموضع الرأسي 30" },
                    { value: "40", description: "الموضع الرأسي 40" },
                    { value: "50", description: "الموضع الرأسي 50" },
                    { value: "60", description: "الموضع الرأسي 60" },
                    { value: "70", description: "الموضع الرأسي 70" },
                    { value: "80", description: "الموضع الرأسي 80" },
                    { value: "90", description: "الموضع الرأسي 90" },
                    { value: "100", description: "الموضع الرأسي 100" },
                    { value: "150", description: "الموضع الرأسي 150" },
                    { value: "200", description: "الموضع الرأسي 200" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض العنصر المستخدم، يتحكم في حجمه",
                values: [
                    { value: "10", description: "عرض 10" },
                    { value: "20", description: "عرض 20" },
                    { value: "30", description: "عرض 30" },
                    { value: "40", description: "عرض 40" },
                    { value: "50", description: "عرض 50" },
                    { value: "60", description: "عرض 60" },
                    { value: "80", description: "عرض 80" },
                    { value: "100", description: "عرض 100" },
                    { value: "150", description: "عرض 150" },
                    { value: "200", description: "عرض 200" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع العنصر المستخدم، يتحكم في حجمه",
                values: [
                    { value: "10", description: "ارتفاع 10" },
                    { value: "20", description: "ارتفاع 20" },
                    { value: "30", description: "ارتفاع 30" },
                    { value: "40", description: "ارتفاع 40" },
                    { value: "50", description: "ارتفاع 50" },
                    { value: "60", description: "ارتفاع 60" },
                    { value: "80", description: "ارتفاع 80" },
                    { value: "100", description: "ارتفاع 100" },
                    { value: "150", description: "ارتفاع 150" },
                    { value: "200", description: "ارتفاع 200" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- image --------
    {
        tag: "image",
        description: "يضمّن صورة داخل رسم SVG، يمكن وضع صور داخل الرسوم المتجهية",
        attributes: [
            {
                name: "href",
                description: "يحدد مسار الصورة المضمنة، يحدد الصورة المعروضة",
                values: [
                    { value: "photo.jpg", description: "صورة في نفس المجلد" },
                    { value: "image.png", description: "صورة في نفس المجلد" },
                    { value: "assets/photo.jpg", description: "صورة في مجلد assets" },
                    { value: "https://example.com/image.jpg", description: "صورة من رابط خارجي" },
                    { value: "data:image/png;base64,iVBORw0KGgo...", description: "صورة بصيغة Base64" }
                ],
                freeInput: true
            },
            {
                name: "x",
                description: "يحدد موقع الصورة على المحور الأفقي (X)",
                values: [
                    { value: "0", description: "الموضع الأفقي 0" },
                    { value: "10", description: "الموضع الأفقي 10" },
                    { value: "20", description: "الموضع الأفقي 20" },
                    { value: "30", description: "الموضع الأفقي 30" },
                    { value: "40", description: "الموضع الأفقي 40" },
                    { value: "50", description: "الموضع الأفقي 50" },
                    { value: "100", description: "الموضع الأفقي 100" }
                ],
                freeInput: true
            },
            {
                name: "y",
                description: "يحدد موقع الصورة على المحور الرأسي (Y)",
                values: [
                    { value: "0", description: "الموضع الرأسي 0" },
                    { value: "10", description: "الموضع الرأسي 10" },
                    { value: "20", description: "الموضع الرأسي 20" },
                    { value: "30", description: "الموضع الرأسي 30" },
                    { value: "40", description: "الموضع الرأسي 40" },
                    { value: "50", description: "الموضع الرأسي 50" },
                    { value: "100", description: "الموضع الرأسي 100" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الصورة، يتحكم في حجم الصورة",
                values: [
                    { value: "10", description: "عرض 10 بكسل" },
                    { value: "20", description: "عرض 20 بكسل" },
                    { value: "30", description: "عرض 30 بكسل" },
                    { value: "40", description: "عرض 40 بكسل" },
                    { value: "50", description: "عرض 50 بكسل" },
                    { value: "80", description: "عرض 80 بكسل" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "100%", description: "عرض كامل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع الصورة، يتحكم في حجم الصورة",
                values: [
                    { value: "10", description: "ارتفاع 10 بكسل" },
                    { value: "20", description: "ارتفاع 20 بكسل" },
                    { value: "30", description: "ارتفاع 30 بكسل" },
                    { value: "40", description: "ارتفاع 40 بكسل" },
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "60", description: "ارتفاع 60 بكسل" },
                    { value: "80", description: "ارتفاع 80 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "150", description: "ارتفاع 150 بكسل" },
                    { value: "200", description: "ارتفاع 200 بكسل" },
                    { value: "300", description: "ارتفاع 300 بكسل" },
                    { value: "400", description: "ارتفاع 400 بكسل" },
                    { value: "500", description: "ارتفاع 500 بكسل" },
                    { value: "100%", description: "ارتفاع كامل" }
                ],
                freeInput: true
            },
            {
                name: "preserveAspectRatio",
                description: "يتحكم في كيفية تكبير الصورة للحفاظ على نسبها",
                values: [
                    { value: "none", description: "عدم الحفاظ على النسب" },
                    { value: "xMidYMid meet", description: "الحفاظ على النسب وتوسيط الصورة" },
                    { value: "xMinYMin meet", description: "محاذاة لأعلى اليسار" },
                    { value: "xMaxYMax meet", description: "محاذاة لأسفل اليمين" },
                    { value: "xMidYMid slice", description: "تعبئة كاملة مع قص الأجزاء الزائدة" }
                ]
            }
        ]
    },

    // -------- polygon --------
    {
        tag: "polygon",
        description: "يرسم مضلعاً مغلقاً بعدة نقاط، يستخدم لإنشاء أشكال متعددة الأضلاع",
        attributes: [
            {
                name: "points",
                description: "يحدد نقاط المضلع، تحدد رؤوس الشكل وتربط لتشكل مضلعاً",
                values: [
                    { value: "50,10 90,90 10,90", description: "مثلث" },
                    { value: "50,10 90,40 70,90 30,90 10,40", description: "خماسي" },
                    { value: "50,10 90,50 50,90 10,50", description: "معين" },
                    { value: "30,10 70,10 90,50 70,90 30,90 10,50", description: "سداسي" },
                    { value: "50,10 90,20 80,70 20,70 10,20", description: "نجمة" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون تعبئة المضلع، يلون داخل الشكل بلون معين",
                values: [
                    { value: "none", description: "بدون تعبئة" },
                    { value: "#ff0000", description: "تعبئة باللون الأحمر" },
                    { value: "#00ff00", description: "تعبئة باللون الأخضر" },
                    { value: "#0000ff", description: "تعبئة باللون الأزرق" },
                    { value: "#ffff00", description: "تعبئة باللون الأصفر" },
                    { value: "#ff00ff", description: "تعبئة باللون الوردي" },
                    { value: "#00ffff", description: "تعبئة باللون السماوي" },
                    { value: "#cccccc", description: "تعبئة باللون الرمادي" },
                    { value: "#3498db", description: "تعبئة باللون الأزرق" },
                    { value: "#e74c3c", description: "تعبئة باللون الأحمر" },
                    { value: "#2ecc71", description: "تعبئة باللون الأخضر" },
                    { value: "#f39c12", description: "تعبئة باللون البرتقالي" },
                    { value: "#9b59b6", description: "تعبئة باللون البنفسجي" },
                    { value: "red", description: "تعبئة باللون الأحمر" },
                    { value: "green", description: "تعبئة باللون الأخضر" },
                    { value: "blue", description: "تعبئة باللون الأزرق" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون حدود المضلع، يلون محيط الشكل بلون معين",
                values: [
                    { value: "none", description: "بدون حدود" },
                    { value: "#000000", description: "حدود باللون الأسود" },
                    { value: "#ff0000", description: "حدود باللون الأحمر" },
                    { value: "#00ff00", description: "حدود باللون الأخضر" },
                    { value: "#0000ff", description: "حدود باللون الأزرق" },
                    { value: "#ffff00", description: "حدود باللون الأصفر" },
                    { value: "#ff00ff", description: "حدود باللون الوردي" },
                    { value: "#00ffff", description: "حدود باللون السماوي" },
                    { value: "#cccccc", description: "حدود باللون الرمادي" },
                    { value: "#e74c3c", description: "حدود باللون الأحمر" },
                    { value: "#3498db", description: "حدود باللون الأزرق" },
                    { value: "#2ecc71", description: "حدود باللون الأخضر" },
                    { value: "black", description: "حدود سوداء" },
                    { value: "red", description: "حدود حمراء" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك حدود المضلع، يتحكم في سمك الخط المحيط",
                values: [
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "opacity",
                description: "يحدد شفافية المضلع (من 0 إلى 1)",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- polyline --------
    {
        tag: "polyline",
        description: "يرسم خطاً متعدد النقاط مفتوحاً، يصل بين نقاط متتالية بخطوط مستقيمة",
        attributes: [
            {
                name: "points",
                description: "يحدد نقاط الخط المتعدد، يصل بينها بخطوط مستقيمة",
                values: [
                    { value: "10,10 50,50 90,10", description: "خط على شكل V" },
                    { value: "10,10 50,10 90,50", description: "خط متعرج" },
                    { value: "10,10 30,30 50,10 70,30 90,10", description: "خط متعرج متسلسل" },
                    { value: "10,50 30,10 50,50 70,10 90,50", description: "خط متعرج" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون تعبئة الخط المتعدد، يلون المساحة داخل الخط",
                values: [
                    { value: "none", description: "بدون تعبئة" },
                    { value: "#ff0000", description: "تعبئة باللون الأحمر" },
                    { value: "#0000ff", description: "تعبئة باللون الأزرق" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون الخط، يلون الخط بلون معين",
                values: [
                    { value: "#000000", description: "خط أسود" },
                    { value: "#ff0000", description: "خط أحمر" },
                    { value: "#0000ff", description: "خط أزرق" },
                    { value: "#00ff00", description: "خط أخضر" },
                    { value: "#ffff00", description: "خط أصفر" },
                    { value: "#ff00ff", description: "خط وردي" },
                    { value: "#00ffff", description: "خط سماوي" },
                    { value: "#e74c3c", description: "خط أحمر" },
                    { value: "#3498db", description: "خط أزرق" },
                    { value: "#2ecc71", description: "خط أخضر" },
                    { value: "#f39c12", description: "خط برتقالي" },
                    { value: "blue", description: "خط أزرق" },
                    { value: "red", description: "خط أحمر" },
                    { value: "green", description: "خط أخضر" },
                    { value: "black", description: "خط أسود" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك الخط، يتحكم في سمك الخط المرسوم",
                values: [
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "stroke-dasharray",
                description: "يجعل الخط منقطاً أو متقطعاً",
                values: [
                    { value: "5,5", description: "نقاط متساوية 5 و 5" },
                    { value: "10,5", description: "نقاط 10 و 5" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- ellipse --------
    {
        tag: "ellipse",
        description: "يرسم قطعاً ناقصاً (بيضاوياً)، يشبه الدائرة ولكن بأقطار مختلفة",
        attributes: [
            {
                name: "cx",
                description: "يحدد مركز القطع الناقص على المحور الأفقي (X)",
                values: [
                    { value: "0", description: "المركز عند 0" },
                    { value: "10", description: "المركز عند 10" },
                    { value: "20", description: "المركز عند 20" },
                    { value: "30", description: "المركز عند 30" },
                    { value: "40", description: "المركز عند 40" },
                    { value: "50", description: "المركز عند 50" },
                    { value: "60", description: "المركز عند 60" },
                    { value: "70", description: "المركز عند 70" },
                    { value: "80", description: "المركز عند 80" },
                    { value: "90", description: "المركز عند 90" },
                    { value: "100", description: "المركز عند 100" }
                ],
                freeInput: true
            },
            {
                name: "cy",
                description: "يحدد مركز القطع الناقص على المحور الرأسي (Y)",
                values: [
                    { value: "0", description: "المركز عند 0" },
                    { value: "10", description: "المركز عند 10" },
                    { value: "20", description: "المركز عند 20" },
                    { value: "30", description: "المركز عند 30" },
                    { value: "40", description: "المركز عند 40" },
                    { value: "50", description: "المركز عند 50" },
                    { value: "60", description: "المركز عند 60" },
                    { value: "70", description: "المركز عند 70" },
                    { value: "80", description: "المركز عند 80" },
                    { value: "90", description: "المركز عند 90" },
                    { value: "100", description: "المركز عند 100" }
                ],
                freeInput: true
            },
            {
                name: "rx",
                description: "يحدد نصف القطر الأفقي للقطع الناقص، يتحكم في عرض الشكل",
                values: [
                    { value: "1", description: "نصف قطر أفقي 1" },
                    { value: "5", description: "نصف قطر أفقي 5" },
                    { value: "10", description: "نصف قطر أفقي 10" },
                    { value: "20", description: "نصف قطر أفقي 20" },
                    { value: "30", description: "نصف قطر أفقي 30" },
                    { value: "40", description: "نصف قطر أفقي 40" },
                    { value: "50", description: "نصف قطر أفقي 50" },
                    { value: "60", description: "نصف قطر أفقي 60" },
                    { value: "70", description: "نصف قطر أفقي 70" },
                    { value: "80", description: "نصف قطر أفقي 80" },
                    { value: "90", description: "نصف قطر أفقي 90" },
                    { value: "100", description: "نصف قطر أفقي 100" }
                ],
                freeInput: true
            },
            {
                name: "ry",
                description: "يحدد نصف القطر الرأسي للقطع الناقص، يتحكم في ارتفاع الشكل",
                values: [
                    { value: "1", description: "نصف قطر رأسي 1" },
                    { value: "5", description: "نصف قطر رأسي 5" },
                    { value: "10", description: "نصف قطر رأسي 10" },
                    { value: "20", description: "نصف قطر رأسي 20" },
                    { value: "25", description: "نصف قطر رأسي 25" },
                    { value: "30", description: "نصف قطر رأسي 30" },
                    { value: "40", description: "نصف قطر رأسي 40" },
                    { value: "50", description: "نصف قطر رأسي 50" },
                    { value: "60", description: "نصف قطر رأسي 60" },
                    { value: "70", description: "نصف قطر رأسي 70" },
                    { value: "80", description: "نصف قطر رأسي 80" },
                    { value: "90", description: "نصف قطر رأسي 90" },
                    { value: "100", description: "نصف قطر رأسي 100" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون تعبئة القطع الناقص، يلون داخله بلون معين",
                values: [
                    { value: "none", description: "بدون تعبئة" },
                    { value: "#ff0000", description: "تعبئة باللون الأحمر" },
                    { value: "#0000ff", description: "تعبئة باللون الأزرق" },
                    { value: "#00ff00", description: "تعبئة باللون الأخضر" },
                    { value: "#ffff00", description: "تعبئة باللون الأصفر" },
                    { value: "#ff00ff", description: "تعبئة باللون الوردي" },
                    { value: "#00ffff", description: "تعبئة باللون السماوي" },
                    { value: "#cccccc", description: "تعبئة باللون الرمادي" },
                    { value: "#9b59b6", description: "تعبئة باللون البنفسجي" },
                    { value: "#3498db", description: "تعبئة باللون الأزرق" },
                    { value: "#e74c3c", description: "تعبئة باللون الأحمر" },
                    { value: "#2ecc71", description: "تعبئة باللون الأخضر" },
                    { value: "#f39c12", description: "تعبئة باللون البرتقالي" },
                    { value: "purple", description: "تعبئة باللون البنفسجي" },
                    { value: "red", description: "تعبئة باللون الأحمر" },
                    { value: "blue", description: "تعبئة باللون الأزرق" },
                    { value: "green", description: "تعبئة باللون الأخضر" }
                ],
                freeInput: true
            },
            {
                name: "stroke",
                description: "يحدد لون حدود القطع الناقص، يلون محيطه بلون معين",
                values: [
                    { value: "none", description: "بدون حدود" },
                    { value: "#000000", description: "حدود باللون الأسود" },
                    { value: "#ff0000", description: "حدود باللون الأحمر" },
                    { value: "#0000ff", description: "حدود باللون الأزرق" },
                    { value: "#00ff00", description: "حدود باللون الأخضر" },
                    { value: "#ffff00", description: "حدود باللون الأصفر" },
                    { value: "#ff00ff", description: "حدود باللون الوردي" },
                    { value: "#00ffff", description: "حدود باللون السماوي" },
                    { value: "#cccccc", description: "حدود باللون الرمادي" },
                    { value: "#e74c3c", description: "حدود باللون الأحمر" },
                    { value: "#3498db", description: "حدود باللون الأزرق" },
                    { value: "#2ecc71", description: "حدود باللون الأخضر" },
                    { value: "black", description: "حدود سوداء" },
                    { value: "red", description: "حدود حمراء" }
                ],
                freeInput: true
            },
            {
                name: "stroke-width",
                description: "يحدد سمك حدود القطع الناقص",
                values: [
                    { value: "1", description: "سمك 1 بكسل" },
                    { value: "2", description: "سمك 2 بكسل" },
                    { value: "3", description: "سمك 3 بكسل" },
                    { value: "4", description: "سمك 4 بكسل" },
                    { value: "5", description: "سمك 5 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "opacity",
                description: "يحدد شفافية القطع الناقص (من 0 إلى 1)",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- clipPath --------
    {
        tag: "clipPath",
        description: "يحدد منطقة قص لعناصر SVG، يخفي الأجزاء خارج هذه المنطقة",
        attributes: [
            {
                name: "clipPathUnits",
                description: "يحدد نظام الإحداثيات المستخدم لتعريف منطقة القص",
                values: [
                    { value: "userSpaceOnUse", description: "إحداثيات مطلقة مثل باقي عناصر SVG (الافتراضي)" },
                    { value: "objectBoundingBox", description: "إحداثيات نسبية لصندوق العنصر المُطبَّق عليه القص (من 0 إلى 1)" }
                ]
            },
            {
                name: "id",
                description: "يحدد معرفاً فريداً لمنطقة القص، يُستدعى من خاصية clip-path في العنصر المراد قصه",
                values: [
                    { value: "clip1", description: "معرف منطقة القص" },
                    { value: "circleClip", description: "معرف منطقة القص الدائرية" },
                    { value: "rectClip", description: "معرف منطقة القص المستطيلة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- linearGradient --------
    {
        tag: "linearGradient",
        description: "يحدد تدرجاً لونياً خطياً بين لونين أو أكثر، يملأ الأشكال بألوان متدرجة",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للتدرج، يمكن استخدامه لتعبئة الأشكال",
                values: [
                    { value: "grad1", description: "معرف التدرج" },
                    { value: "grad2", description: "معرف التدرج" },
                    { value: "myGradient", description: "معرف التدرج" }
                ],
                freeInput: true
            },
            {
                name: "x1",
                description: "يحدد نقطة بداية التدرج على المحور الأفقي",
                values: [
                    { value: "0%", description: "بداية من اليسار" },
                    { value: "10%", description: "بداية من 10%" },
                    { value: "20%", description: "بداية من 20%" },
                    { value: "30%", description: "بداية من 30%" },
                    { value: "40%", description: "بداية من 40%" },
                    { value: "50%", description: "بداية من المنتصف" },
                    { value: "60%", description: "بداية من 60%" },
                    { value: "70%", description: "بداية من 70%" },
                    { value: "80%", description: "بداية من 80%" },
                    { value: "90%", description: "بداية من 90%" },
                    { value: "100%", description: "بداية من اليمين" }
                ],
                freeInput: true
            },
            {
                name: "y1",
                description: "يحدد نقطة بداية التدرج على المحور الرأسي",
                values: [
                    { value: "0%", description: "بداية من الأعلى" },
                    { value: "50%", description: "بداية من المنتصف" },
                    { value: "100%", description: "بداية من الأسفل" }
                ],
                freeInput: true
            },
            {
                name: "x2",
                description: "يحدد نقطة نهاية التدرج على المحور الأفقي",
                values: [
                    { value: "0%", description: "نهاية عند اليسار" },
                    { value: "50%", description: "نهاية عند المنتصف" },
                    { value: "100%", description: "نهاية عند اليمين" }
                ],
                freeInput: true
            },
            {
                name: "y2",
                description: "يحدد نقطة نهاية التدرج على المحور الرأسي",
                values: [
                    { value: "0%", description: "نهاية عند الأعلى" },
                    { value: "50%", description: "نهاية عند المنتصف" },
                    { value: "100%", description: "نهاية عند الأسفل" }
                ],
                freeInput: true
            },
            {
                name: "gradientUnits",
                description: "يحدد وحدات قياس التدرج",
                values: [
                    { value: "userSpaceOnUse", description: "وحدات مطلقة" },
                    { value: "objectBoundingBox", description: "وحدات نسبية لحجم العنصر (الافتراضي)" }
                ]
            },
            {
                name: "spreadMethod",
                description: "يحدد كيفية انتشار التدرج خارج حدوده",
                values: [
                    { value: "pad", description: "الاستمرار باللون الأخير (الافتراضي)" },
                    { value: "reflect", description: "عكس التدرج" },
                    { value: "repeat", description: "تكرار التدرج" }
                ]
            }
        ]
    },

    // -------- radialGradient --------
    {
        tag: "radialGradient",
        description: "يحدد تدرجاً لونياً شعاعياً من مركز إلى الخارج، يملأ الأشكال بألوان متدرجة من المركز",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للتدرج الشعاعي، يمكن استخدامه لتعبئة الأشكال",
                values: [
                    { value: "grad2", description: "معرف التدرج" },
                    { value: "radialGrad", description: "معرف التدرج الشعاعي" }
                ],
                freeInput: true
            },
            {
                name: "cx",
                description: "يحدد مركز التدرج الشعاعي على المحور الأفقي",
                values: [
                    { value: "0%", description: "المركز عند اليسار" },
                    { value: "25%", description: "المركز عند 25%" },
                    { value: "50%", description: "المركز في المنتصف" },
                    { value: "75%", description: "المركز عند 75%" },
                    { value: "100%", description: "المركز عند اليمين" }
                ],
                freeInput: true
            },
            {
                name: "cy",
                description: "يحدد مركز التدرج الشعاعي على المحور الرأسي",
                values: [
                    { value: "0%", description: "المركز عند الأعلى" },
                    { value: "25%", description: "المركز عند 25%" },
                    { value: "50%", description: "المركز في المنتصف" },
                    { value: "75%", description: "المركز عند 75%" },
                    { value: "100%", description: "المركز عند الأسفل" }
                ],
                freeInput: true
            },
            {
                name: "r",
                description: "يحدد نصف قطر التدرج الشعاعي، يتحكم في انتشار الألوان",
                values: [
                    { value: "10%", description: "نصف قطر 10%" },
                    { value: "25%", description: "نصف قطر 25%" },
                    { value: "50%", description: "نصف قطر 50%" },
                    { value: "75%", description: "نصف قطر 75%" },
                    { value: "100%", description: "نصف قطر 100%" }
                ],
                freeInput: true
            },
            {
                name: "fx",
                description: "يحدد نقطة محور التدرج على المحور الأفقي (نقطة بداية التدرج)",
                values: [
                    { value: "0%", description: "نقطة المحور عند اليسار" },
                    { value: "25%", description: "نقطة المحور عند 25%" },
                    { value: "50%", description: "نقطة المحور في المنتصف" },
                    { value: "75%", description: "نقطة المحور عند 75%" },
                    { value: "100%", description: "نقطة المحور عند اليمين" }
                ],
                freeInput: true
            },
            {
                name: "fy",
                description: "يحدد نقطة محور التدرج على المحور الرأسي (نقطة بداية التدرج)",
                values: [
                    { value: "0%", description: "نقطة المحور عند الأعلى" },
                    { value: "25%", description: "نقطة المحور عند 25%" },
                    { value: "50%", description: "نقطة المحور في المنتصف" },
                    { value: "75%", description: "نقطة المحور عند 75%" },
                    { value: "100%", description: "نقطة المحور عند الأسفل" }
                ],
                freeInput: true
            },
            {
                name: "gradientUnits",
                description: "يحدد وحدات قياس التدرج الشعاعي",
                values: [
                    { value: "userSpaceOnUse", description: "وحدات مطلقة" },
                    { value: "objectBoundingBox", description: "وحدات نسبية لحجم العنصر (الافتراضي)" }
                ]
            },
            {
                name: "spreadMethod",
                description: "يحدد كيفية انتشار التدرج خارج حدوده",
                values: [
                    { value: "pad", description: "الاستمرار باللون الأخير (الافتراضي)" },
                    { value: "reflect", description: "عكس التدرج" },
                    { value: "repeat", description: "تكرار التدرج" }
                ]
            }
        ]
    },

    // -------- stop --------
    {
        tag: "stop",
        description: "يحدد نقطة لون داخل التدرج (خطي أو شعاعي)، يتحكم في الألوان في نقاط معينة",
        attributes: [
            {
                name: "offset",
                description: "يحدد موقع النقطة في التدرج (0% إلى 100%)، يتحكم في مكان اللون",
                values: [
                    { value: "0%", description: "بداية التدرج" },
                    { value: "10%", description: "عند 10%" },
                    { value: "20%", description: "عند 20%" },
                    { value: "25%", description: "عند 25%" },
                    { value: "30%", description: "عند 30%" },
                    { value: "33%", description: "عند 33%" },
                    { value: "40%", description: "عند 40%" },
                    { value: "50%", description: "منتصف التدرج" },
                    { value: "60%", description: "عند 60%" },
                    { value: "66%", description: "عند 66%" },
                    { value: "70%", description: "عند 70%" },
                    { value: "75%", description: "عند 75%" },
                    { value: "80%", description: "عند 80%" },
                    { value: "90%", description: "عند 90%" },
                    { value: "100%", description: "نهاية التدرج" }
                ],
                freeInput: true
            },
            {
                name: "stop-color",
                description: "يحدد اللون عند هذه النقطة في التدرج، يحدد لون التدرج",
                values: [
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#cccccc", description: "لون رمادي" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#3498db", description: "لون أزرق" },
                    { value: "#e74c3c", description: "لون أحمر" },
                    { value: "#2ecc71", description: "لون أخضر" },
                    { value: "#f39c12", description: "لون برتقالي" },
                    { value: "#9b59b6", description: "لون بنفسجي" },
                    { value: "#1abc9c", description: "لون أزرق مخضر" },
                    { value: "#34495e", description: "لون أزرق داكن" },
                    { value: "#e67e22", description: "لون برتقالي داكن" },
                    { value: "#c0392b", description: "لون أحمر داكن" },
                    { value: "#8e44ad", description: "لون بنفسجي داكن" },
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
                name: "stop-opacity",
                description: "يحدد شفافية اللون عند هذه النقطة (0 إلى 1)، يتحكم في شفافية التدرج",
                values: [
                    { value: "0", description: "شفاف بالكامل" },
                    { value: "0.1", description: "شفافية 10%" },
                    { value: "0.2", description: "شفافية 20%" },
                    { value: "0.3", description: "شفافية 30%" },
                    { value: "0.4", description: "شفافية 40%" },
                    { value: "0.5", description: "نصف شفاف" },
                    { value: "0.6", description: "شفافية 60%" },
                    { value: "0.7", description: "شفافية 70%" },
                    { value: "0.8", description: "شفافية 80%" },
                    { value: "0.9", description: "شفافية 90%" },
                    { value: "1", description: "معتم بالكامل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- symbol --------
    {
        tag: "symbol",
        description: "يحدد رمزاً قابلاً لإعادة الاستخدام، مشابه لـ defs لكن يمكن استخدامه مع viewBox خاص به",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للرمز، يمكن استدعاؤه بواسطة use",
                values: [
                    { value: "icon", description: "معرف الرمز" },
                    { value: "star", description: "معرف الرمز" },
                    { value: "heart", description: "معرف الرمز" },
                    { value: "logo", description: "معرف الرمز" }
                ],
                freeInput: true
            },
            {
                name: "viewBox",
                description: "يحدد إحداثيات الرمز وقياساته، يسمح بتكبير وتصغير الرمز",
                values: [
                    { value: "0 0 24 24", description: "رمز بحجم 24×24" },
                    { value: "0 0 16 16", description: "رمز بحجم 16×16" },
                    { value: "0 0 32 32", description: "رمز بحجم 32×32" },
                    { value: "0 0 100 100", description: "رمز بحجم 100×100" },
                    { value: "0 0 48 48", description: "رمز بحجم 48×48" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد العرض الافتراضي للرمز",
                values: [
                    { value: "24", description: "عرض 24" },
                    { value: "32", description: "عرض 32" },
                    { value: "48", description: "عرض 48" },
                    { value: "64", description: "عرض 64" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد الارتفاع الافتراضي للرمز",
                values: [
                    { value: "24", description: "ارتفاع 24" },
                    { value: "32", description: "ارتفاع 32" },
                    { value: "48", description: "ارتفاع 48" },
                    { value: "64", description: "ارتفاع 64" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- foreignObject --------
    {
        tag: "foreignObject",
        description: "يضمّن محتوى HTML أو XML داخل SVG، يسمح بإضافة عناصر HTML داخل الرسم",
        attributes: [
            {
                name: "x",
                description: "يحدد موقع المحتوى المضمن على المحور الأفقي (X)",
                values: [
                    { value: "0", description: "الموضع الأفقي 0" },
                    { value: "10", description: "الموضع الأفقي 10" },
                    { value: "20", description: "الموضع الأفقي 20" },
                    { value: "30", description: "الموضع الأفقي 30" },
                    { value: "40", description: "الموضع الأفقي 40" },
                    { value: "50", description: "الموضع الأفقي 50" }
                ],
                freeInput: true
            },
            {
                name: "y",
                description: "يحدد موقع المحتوى المضمن على المحور الرأسي (Y)",
                values: [
                    { value: "0", description: "الموضع الرأسي 0" },
                    { value: "10", description: "الموضع الرأسي 10" },
                    { value: "20", description: "الموضع الرأسي 20" },
                    { value: "30", description: "الموضع الرأسي 30" },
                    { value: "40", description: "الموضع الرأسي 40" },
                    { value: "50", description: "الموضع الرأسي 50" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض المحتوى المضمن، يتحكم في حجم المحتوى",
                values: [
                    { value: "50", description: "عرض 50" },
                    { value: "100", description: "عرض 100" },
                    { value: "200", description: "عرض 200" },
                    { value: "300", description: "عرض 300" },
                    { value: "400", description: "عرض 400" },
                    { value: "500", description: "عرض 500" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع المحتوى المضمن، يتحكم في حجم المحتوى",
                values: [
                    { value: "50", description: "ارتفاع 50" },
                    { value: "100", description: "ارتفاع 100" },
                    { value: "200", description: "ارتفاع 200" },
                    { value: "300", description: "ارتفاع 300" },
                    { value: "400", description: "ارتفاع 400" },
                    { value: "500", description: "ارتفاع 500" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- mask --------
    {
        tag: "mask",
        description: "يحدد قناعاً لإخفاء أو إظهار أجزاء من العناصر، يتحكم في شفافية الأجزاء",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للقناع، يمكن تطبيقه على عناصر أخرى",
                values: [
                    { value: "mask1", description: "معرف القناع" },
                    { value: "circleMask", description: "معرف القناع الدائري" },
                    { value: "fadeMask", description: "معرف القناع المتدرج" }
                ],
                freeInput: true
            },
            {
                name: "maskUnits",
                description: "يحدد نظام الإحداثيات المستخدم للقناع",
                values: [
                    { value: "userSpaceOnUse", description: "وحدات مطلقة" },
                    { value: "objectBoundingBox", description: "وحدات نسبية لحجم العنصر (الافتراضي)" }
                ]
            },
            {
                name: "maskContentUnits",
                description: "يحدد نظام الإحداثيات المستخدم لمحتوى القناع",
                values: [
                    { value: "userSpaceOnUse", description: "وحدات مطلقة" },
                    { value: "objectBoundingBox", description: "وحدات نسبية لحجم العنصر (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- pattern --------
    {
        tag: "pattern",
        description: "يحدد نمطاً متكرراً (مربعات، خطوط) لتعبئة الأشكال، يملأ العناصر بنمط مكرر",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للنمط، يمكن استخدامه لتعبئة الأشكال",
                values: [
                    { value: "pattern1", description: "معرف النمط" },
                    { value: "dots", description: "معرف النمط المنقط" },
                    { value: "stripes", description: "معرف النمط المخطط" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض النمط المتكرر، يتحكم في حجم وحدة النمط",
                values: [
                    { value: "5", description: "عرض الوحدة 5" },
                    { value: "10", description: "عرض الوحدة 10" },
                    { value: "20", description: "عرض الوحدة 20" },
                    { value: "30", description: "عرض الوحدة 30" },
                    { value: "40", description: "عرض الوحدة 40" },
                    { value: "50", description: "عرض الوحدة 50" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع النمط المتكرر، يتحكم في حجم وحدة النمط",
                values: [
                    { value: "5", description: "ارتفاع الوحدة 5" },
                    { value: "10", description: "ارتفاع الوحدة 10" },
                    { value: "20", description: "ارتفاع الوحدة 20" },
                    { value: "30", description: "ارتفاع الوحدة 30" },
                    { value: "40", description: "ارتفاع الوحدة 40" },
                    { value: "50", description: "ارتفاع الوحدة 50" }
                ],
                freeInput: true
            },
            {
                name: "patternUnits",
                description: "يحدد وحدات قياس النمط، يتحكم في كيفية تطبيق النمط",
                values: [
                    { value: "userSpaceOnUse", description: "يقاس بالبكسل" },
                    { value: "objectBoundingBox", description: "يقاس بنسبة حجم العنصر" }
                ]
            },
            {
                name: "patternTransform",
                description: "يطبق تحويلاً على النمط (تدوير، تكبير، نقل)",
                values: [
                    { value: "rotate(45)", description: "يدور النمط 45 درجة" },
                    { value: "scale(1.5)", description: "يكبر النمط بنسبة 150%" },
                    { value: "translate(10,10)", description: "ينقل النمط 10 بكسل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- animate --------
    {
        tag: "animate",
        description: "يضيف حركة متحركة لعنصر SVG، يغير خصائص العنصر تدريجياً مع مرور الوقت",
        attributes: [
            {
                name: "attributeName",
                description: "يحدد الخاصية التي ستتحرك (مثل fill أو opacity أو transform)، يحدد ما سيتغير",
                values: [
                    { value: "fill", description: "يتغير لون التعبئة" },
                    { value: "opacity", description: "تتغير الشفافية" },
                    { value: "r", description: "يتغير نصف القطر" },
                    { value: "cx", description: "يتغير موقع المركز الأفقي" },
                    { value: "cy", description: "يتغير موقع المركز الرأسي" },
                    { value: "width", description: "يتغير العرض" },
                    { value: "height", description: "يتغير الارتفاع" },
                    { value: "x", description: "يتغير الموضع الأفقي" },
                    { value: "y", description: "يتغير الموضع الرأسي" },
                    { value: "stroke", description: "يتغير لون الحدود" },
                    { value: "stroke-width", description: "يتغير سمك الحدود" },
                    { value: "transform", description: "يتغير التحويل" }
                ],
                freeInput: true
            },
            {
                name: "from",
                description: "يحدد القيمة الابتدائية للخاصية، قيمة البداية للحركة",
                values: [
                    { value: "red", description: "يبدأ من اللون الأحمر" },
                    { value: "0", description: "يبدأ من 0" },
                    { value: "10", description: "يبدأ من 10" },
                    { value: "0%", description: "يبدأ من 0%" },
                    { value: "transparent", description: "يبدأ شفافاً" },
                    { value: "0 0", description: "يبدأ من الموقع 0,0" },
                    { value: "1", description: "يبدأ من 1" }
                ],
                freeInput: true
            },
            {
                name: "to",
                description: "يحدد القيمة النهائية للخاصية، قيمة النهاية للحركة",
                values: [
                    { value: "blue", description: "ينتهي باللون الأزرق" },
                    { value: "100", description: "ينتهي عند 100" },
                    { value: "50", description: "ينتهي عند 50" },
                    { value: "100%", description: "ينتهي عند 100%" },
                    { value: "opaque", description: "ينتهي معتماً" },
                    { value: "100 100", description: "ينتهي عند الموقع 100,100" },
                    { value: "2", description: "ينتهي عند 2" }
                ],
                freeInput: true
            },
            {
                name: "dur",
                description: "يحدد مدة الحركة بالثواني، يتحكم في سرعة الحركة",
                values: [
                    { value: "0.1s", description: "مدة الحركة 0.1 ثانية" },
                    { value: "0.5s", description: "مدة الحركة نصف ثانية" },
                    { value: "1s", description: "مدة الحركة ثانية واحدة" },
                    { value: "2s", description: "مدة الحركة ثانيتين" },
                    { value: "3s", description: "مدة الحركة 3 ثواني" },
                    { value: "4s", description: "مدة الحركة 4 ثواني" },
                    { value: "5s", description: "مدة الحركة 5 ثواني" },
                    { value: "10s", description: "مدة الحركة 10 ثواني" }
                ],
                freeInput: true
            },
            {
                name: "repeatCount",
                description: "يحدد عدد مرات تكرار الحركة، يتحكم في تكرار الرسوم المتحركة",
                values: [
                    { value: "indefinite", description: "تكرر إلى ما لا نهاية" },
                    { value: "1", description: "تكرر مرة واحدة" },
                    { value: "2", description: "تكرر مرتين" },
                    { value: "3", description: "تكرر 3 مرات" },
                    { value: "4", description: "تكرر 4 مرات" },
                    { value: "5", description: "تكرر 5 مرات" },
                    { value: "10", description: "تكرر 10 مرات" }
                ],
                freeInput: true
            },
            {
                name: "begin",
                description: "يحدد متى تبدأ الحركة، مثل وقت محدد أو عند حدث معين",
                values: [
                    { value: "0s", description: "تبدأ فوراً" },
                    { value: "1s", description: "تبدأ بعد ثانية واحدة" },
                    { value: "2s", description: "تبدأ بعد ثانيتين" },
                    { value: "click", description: "تبدأ عند النقر" },
                    { value: "mouseover", description: "تبدأ عند تمرير الماوس" },
                    { value: "indefinite", description: "لا تبدأ تلقائياً" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد ما يحدث بعد انتهاء الحركة",
                values: [
                    { value: "freeze", description: "يبقى على الحالة النهائية" },
                    { value: "remove", description: "يعود للحالة الأصلية (الافتراضي)" }
                ]
            },
            {
                name: "calcMode",
                description: "يحدد نمط حساب الحركة بين from و to",
                values: [
                    { value: "linear", description: "حركة خطية (الافتراضي)" },
                    { value: "discrete", description: "حركة متقطعة (قفزات)" },
                    { value: "paced", description: "حركة بسرعة ثابتة" },
                    { value: "spline", description: "حركة منحنية (مع keySplines)" }
                ]
            }
        ]
    },

    // -------- animateTransform --------
    {
        tag: "animateTransform",
        description: "يضيف حركة تحويل لعنصر SVG (تدوير، تكبير، نقل)، يحرك العنصر أو يدوره أو يكبره",
        attributes: [
            {
                name: "attributeName",
                description: "يحدد أن التحويل هو الذي سيتحرك، يشير إلى خاصية transform",
                values: [
                    { value: "transform", description: "تحريك خاصية التحويل" }
                ]
            },
            {
                name: "type",
                description: "يحدد نوع التحويل (تدوير، تكبير، نقل)، يحدد نوع الحركة",
                values: [
                    { value: "rotate", description: "تدوير العنصر" },
                    { value: "scale", description: "تكبير أو تصغير العنصر" },
                    { value: "translate", description: "نقل العنصر" },
                    { value: "skewX", description: "إمالة أفقية" },
                    { value: "skewY", description: "إمالة عمودية" }
                ]
            },
            {
                name: "from",
                description: "يحدد قيمة البداية للتحويل، بداية الحركة",
                values: [
                    { value: "0", description: "بداية التدوير من 0" },
                    { value: "1", description: "بداية التكبير من 1" },
                    { value: "0,0", description: "بداية النقل من 0,0" },
                    { value: "0 0", description: "بداية النقل من 0 0" },
                    { value: "0,0 0", description: "بداية التدوير من 0 حول 0,0" }
                ],
                freeInput: true
            },
            {
                name: "to",
                description: "يحدد قيمة النهاية للتحويل، نهاية الحركة",
                values: [
                    { value: "360", description: "نهاية التدوير عند 360" },
                    { value: "1.5", description: "نهاية التكبير عند 1.5" },
                    { value: "100,100", description: "نهاية النقل عند 100,100" },
                    { value: "100 100", description: "نهاية النقل عند 100 100" },
                    { value: "360,50,50", description: "نهاية التدوير عند 360 حول 50,50" }
                ],
                freeInput: true
            },
            {
                name: "dur",
                description: "يحدد مدة الحركة بالثواني، يتحكم في سرعة الحركة",
                values: [
                    { value: "0.5s", description: "مدة الحركة نصف ثانية" },
                    { value: "1s", description: "مدة الحركة ثانية واحدة" },
                    { value: "2s", description: "مدة الحركة ثانيتين" },
                    { value: "3s", description: "مدة الحركة 3 ثواني" },
                    { value: "5s", description: "مدة الحركة 5 ثواني" },
                    { value: "10s", description: "مدة الحركة 10 ثواني" }
                ],
                freeInput: true
            },
            {
                name: "repeatCount",
                description: "يحدد عدد مرات تكرار الحركة، يتحكم في تكرار الرسوم المتحركة",
                values: [
                    { value: "indefinite", description: "تكرر إلى ما لا نهاية" },
                    { value: "1", description: "تكرر مرة واحدة" },
                    { value: "2", description: "تكرر مرتين" },
                    { value: "3", description: "تكرر 3 مرات" },
                    { value: "5", description: "تكرر 5 مرات" },
                    { value: "10", description: "تكرر 10 مرات" }
                ],
                freeInput: true
            },
            {
                name: "begin",
                description: "يحدد متى تبدأ الحركة",
                values: [
                    { value: "0s", description: "تبدأ فوراً" },
                    { value: "1s", description: "تبدأ بعد ثانية واحدة" },
                    { value: "click", description: "تبدأ عند النقر" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد ما يحدث بعد انتهاء الحركة",
                values: [
                    { value: "freeze", description: "يبقى على الحالة النهائية" },
                    { value: "remove", description: "يعود للحالة الأصلية (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- animateMotion --------
    {
        tag: "animateMotion",
        description: "يحريك عنصر SVG على طول مسار محدد، يحرك العنصر على شكل مسار",
        attributes: [
            {
                name: "path",
                description: "يحدد المسار الذي سيتحرك عليه العنصر، يحدد طريق الحركة",
                values: [
                    { value: "M 10 10 L 90 90", description: "مسار خط مستقيم" },
                    { value: "M 10 50 C 30 10 70 10 90 50", description: "مسار منحني" },
                    { value: "M 50 10 A 40 40 0 1 1 50 90", description: "مسار دائري" },
                    { value: "M 10 10 L 50 50 L 90 10", description: "مسار مثلث" },
                    { value: "M 50 10 Q 10 50 50 90 Q 90 50 50 10", description: "مسار قلبي" }
                ],
                freeInput: true
            },
            {
                name: "dur",
                description: "يحدد مدة الحركة بالثواني، يتحكم في سرعة الحركة على المسار",
                values: [
                    { value: "1s", description: "مدة الحركة ثانية واحدة" },
                    { value: "2s", description: "مدة الحركة ثانيتين" },
                    { value: "3s", description: "مدة الحركة 3 ثواني" },
                    { value: "4s", description: "مدة الحركة 4 ثواني" },
                    { value: "5s", description: "مدة الحركة 5 ثواني" },
                    { value: "10s", description: "مدة الحركة 10 ثواني" }
                ],
                freeInput: true
            },
            {
                name: "repeatCount",
                description: "يحدد عدد مرات تكرار الحركة على المسار، يتحكم في تكرار الحركة",
                values: [
                    { value: "indefinite", description: "تكرر إلى ما لا نهاية" },
                    { value: "1", description: "تكرر مرة واحدة" },
                    { value: "2", description: "تكرر مرتين" },
                    { value: "3", description: "تكرر 3 مرات" },
                    { value: "5", description: "تكرر 5 مرات" },
                    { value: "10", description: "تكرر 10 مرات" }
                ],
                freeInput: true
            },
            {
                name: "rotate",
                description: "يحدد اتجاه العنصر أثناء الحركة، يدير العنصر باتجاه المسار",
                values: [
                    { value: "auto", description: "يدير العنصر تلقائياً باتجاه المسار" },
                    { value: "auto-reverse", description: "يدير العنصر عكس اتجاه المسار" },
                    { value: "0", description: "لا يدير العنصر (يبقى بزاوية ثابتة)" },
                    { value: "90", description: "يدير العنصر بزاوية 90 درجة" },
                    { value: "180", description: "يدير العنصر بزاوية 180 درجة" }
                ]
            },
            {
                name: "begin",
                description: "يحدد متى تبدأ الحركة على المسار",
                values: [
                    { value: "0s", description: "تبدأ فوراً" },
                    { value: "1s", description: "تبدأ بعد ثانية واحدة" },
                    { value: "click", description: "تبدأ عند النقر" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد ما يحدث بعد انتهاء الحركة",
                values: [
                    { value: "freeze", description: "يبقى على الحالة النهائية" },
                    { value: "remove", description: "يعود للحالة الأصلية (الافتراضي)" }
                ]
            }
        ]
    },

    // ============================================================
    // عناصر النصوص المتقدمة، الوصف، والتأثيرات
    // ============================================================

    // -------- title --------
    {
        tag: "title",
        description: "يضيف عنواناً نصياً للرسم أو لعنصر داخله، تستخدمه قارئات الشاشة ويظهر كتلميح عند تمرير الماوس فوق العنصر",
        attributes: []
    },

    // -------- desc --------
    {
        tag: "desc",
        description: "يضيف وصفاً نصياً تفصيلياً للرسم أو لعنصر داخله، يساعد قارئات الشاشة على شرح محتوى الرسم للمكفوفين",
        attributes: []
    },

    // -------- tspan --------
    {
        tag: "tspan",
        description: "يقسّم نص عنصر text إلى أجزاء صغيرة، يسمح بتنسيق كل جزء بشكل مستقل أو وضعه في موضع مختلف ضمن نفس السطر",
        attributes: [
            {
                name: "x",
                description: "يحدد موقع هذا الجزء من النص على المحور الأفقي (X)، يبدأ سطراً جديداً من هذا الموضع",
                values: [
                    { value: "0", description: "الموضع الأفقي 0" },
                    { value: "10", description: "الموضع الأفقي 10" },
                    { value: "20", description: "الموضع الأفقي 20" },
                    { value: "30", description: "الموضع الأفقي 30" },
                    { value: "40", description: "الموضع الأفقي 40" },
                    { value: "50", description: "الموضع الأفقي 50" },
                    { value: "100", description: "الموضع الأفقي 100" },
                    { value: "150", description: "الموضع الأفقي 150" },
                    { value: "200", description: "الموضع الأفقي 200" }
                ],
                freeInput: true
            },
            {
                name: "y",
                description: "يحدد موقع هذا الجزء من النص على المحور الرأسي (Y)",
                values: [
                    { value: "0", description: "الموضع الرأسي 0" },
                    { value: "10", description: "الموضع الرأسي 10" },
                    { value: "20", description: "الموضع الرأسي 20" },
                    { value: "30", description: "الموضع الرأسي 30" },
                    { value: "40", description: "الموضع الرأسي 40" },
                    { value: "50", description: "الموضع الرأسي 50" },
                    { value: "100", description: "الموضع الرأسي 100" },
                    { value: "150", description: "الموضع الرأسي 150" },
                    { value: "200", description: "الموضع الرأسي 200" }
                ],
                freeInput: true
            },
            {
                name: "dx",
                description: "يحدد إزاحة أفقية عن السطر السابق",
                values: [
                    { value: "0", description: "بدون إزاحة" },
                    { value: "5", description: "إزاحة 5 بكسل" },
                    { value: "10", description: "إزاحة 10 بكسل" },
                    { value: "20", description: "إزاحة 20 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "dy",
                description: "يحدد إزاحة رأسية عن السطر السابق، يستخدم للانتقال لسطر جديد داخل نفس عنصر text",
                values: [
                    { value: "0", description: "بدون إزاحة" },
                    { value: "5", description: "إزاحة 5 بكسل" },
                    { value: "10", description: "إزاحة 10 بكسل" },
                    { value: "20", description: "ينزل سطراً بمقدار 20 بكسل" },
                    { value: "30", description: "ينزل سطراً بمقدار 30 بكسل" },
                    { value: "1em", description: "إزاحة بحجم خط واحد" },
                    { value: "1.5em", description: "إزاحة بحجم خط ونصف" }
                ],
                freeInput: true
            },
            {
                name: "fill",
                description: "يحدد لون هذا الجزء من النص فقط، يخالف لون بقية النص",
                values: [
                    { value: "#ff0000", description: "يلون هذا الجزء بالأحمر" },
                    { value: "#0000ff", description: "يلون هذا الجزء بالأزرق" },
                    { value: "#00ff00", description: "يلون هذا الجزء بالأخضر" },
                    { value: "#ffff00", description: "يلون هذا الجزء بالأصفر" },
                    { value: "#ff00ff", description: "يلون هذا الجزء بالوردي" },
                    { value: "#00ffff", description: "يلون هذا الجزء بالسماوي" },
                    { value: "#cccccc", description: "يلون هذا الجزء بالرمادي" },
                    { value: "#3498db", description: "يلون هذا الجزء بالأزرق" },
                    { value: "#e74c3c", description: "يلون هذا الجزء بالأحمر" },
                    { value: "#2ecc71", description: "يلون هذا الجزء بالأخضر" },
                    { value: "#f39c12", description: "يلون هذا الجزء بالبرتقالي" },
                    { value: "#9b59b6", description: "يلون هذا الجزء بالبنفسجي" },
                    { value: "red", description: "يلون هذا الجزء بالأحمر" },
                    { value: "blue", description: "يلون هذا الجزء بالأزرق" },
                    { value: "green", description: "يلون هذا الجزء بالأخضر" }
                ],
                freeInput: true
            },
            {
                name: "font-size",
                description: "يحدد حجم هذا الجزء من النص فقط",
                values: [
                    { value: "10", description: "حجم 10 بكسل" },
                    { value: "12", description: "حجم 12 بكسل" },
                    { value: "14", description: "حجم 14 بكسل" },
                    { value: "16", description: "حجم 16 بكسل" },
                    { value: "18", description: "حجم 18 بكسل" },
                    { value: "20", description: "حجم 20 بكسل" },
                    { value: "24", description: "حجم 24 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "font-weight",
                description: "يحدد سمك هذا الجزء من النص",
                values: [
                    { value: "normal", description: "سمك عادي" },
                    { value: "bold", description: "خط عريض" }
                ]
            },
            {
                name: "font-style",
                description: "يحدد نمط هذا الجزء من النص",
                values: [
                    { value: "normal", description: "نمط عادي" },
                    { value: "italic", description: "خط مائل" }
                ]
            }
        ]
    },

    // -------- textPath --------
    {
        tag: "textPath",
        description: "يجعل النص يتبع شكل مسار مرسوم مسبقاً بدلاً من الظهور على خط مستقيم، يستخدم للنصوص الدائرية أو المنحنية",
        attributes: [
            {
                name: "href",
                description: "يحدد معرف المسار الذي سيتبعه النص",
                values: [
                    { value: "#curve1", description: "يتبع النص المسار ذو المعرف curve1" },
                    { value: "#path1", description: "يتبع النص المسار ذو المعرف path1" },
                    { value: "#circlePath", description: "يتبع النص المسار الدائري" }
                ],
                freeInput: true
            },
            {
                name: "startOffset",
                description: "يحدد مكان بداية النص على المسار (نسبة مئوية من طول المسار)",
                values: [
                    { value: "0%", description: "بداية المسار" },
                    { value: "25%", description: "ربع المسار" },
                    { value: "50%", description: "منتصف المسار" },
                    { value: "75%", description: "ثلاثة أرباع المسار" },
                    { value: "100%", description: "نهاية المسار" },
                    { value: "10%", description: "10% من المسار" },
                    { value: "30%", description: "30% من المسار" }
                ],
                freeInput: true
            },
            {
                name: "method",
                description: "يحدد كيفية عرض النص على المسار",
                values: [
                    { value: "align", description: "محاذاة النص على المسار (الافتراضي)" },
                    { value: "stretch", description: "تمديد النص ليتناسب مع المسار" }
                ]
            },
            {
                name: "spacing",
                description: "يحدد توزيع المسافات بين الحروف على المسار",
                values: [
                    { value: "auto", description: "تلقائي (الافتراضي)" },
                    { value: "exact", description: "دقيق" }
                ]
            }
        ]
    },

    // -------- marker --------
    {
        tag: "marker",
        description: "يحدد شكلاً صغيراً (كسهم أو دائرة) يوضع تلقائياً عند بداية أو نهاية أو زوايا الخطوط والمسارات",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للعلامة، يُستدعى من خاصية marker-end أو marker-start في خط أو مسار",
                values: [
                    { value: "arrow", description: "معرف علامة السهم" },
                    { value: "dot", description: "معرف علامة النقطة" },
                    { value: "circle", description: "معرف علامة الدائرة" },
                    { value: "triangle", description: "معرف علامة المثلث" }
                ],
                freeInput: true
            },
            {
                name: "markerWidth",
                description: "يحدد عرض مساحة رسم العلامة",
                values: [
                    { value: "5", description: "عرض 5" },
                    { value: "10", description: "عرض 10" },
                    { value: "15", description: "عرض 15" },
                    { value: "20", description: "عرض 20" }
                ],
                freeInput: true
            },
            {
                name: "markerHeight",
                description: "يحدد ارتفاع مساحة رسم العلامة",
                values: [
                    { value: "5", description: "ارتفاع 5" },
                    { value: "10", description: "ارتفاع 10" },
                    { value: "15", description: "ارتفاع 15" },
                    { value: "20", description: "ارتفاع 20" }
                ],
                freeInput: true
            },
            {
                name: "orient",
                description: "يحدد اتجاه دوران العلامة، يجعلها تتبع اتجاه الخط تلقائياً",
                values: [
                    { value: "auto", description: "تدور العلامة تلقائياً حسب اتجاه الخط" },
                    { value: "auto-start-reverse", description: "تدور تلقائياً مع عكس البداية" },
                    { value: "0", description: "بدون دوران، تبقى بنفس الاتجاه دائماً" },
                    { value: "45", description: "تدور 45 درجة" },
                    { value: "90", description: "تدور 90 درجة" },
                    { value: "180", description: "تدور 180 درجة" }
                ],
                freeInput: true
            },
            {
                name: "refX",
                description: "يحدد نقطة مرجع العلامة على المحور الأفقي (نقطة الارتكاز)",
                values: [
                    { value: "0", description: "المرجع عند 0" },
                    { value: "5", description: "المرجع عند 5" },
                    { value: "10", description: "المرجع عند 10" }
                ],
                freeInput: true
            },
            {
                name: "refY",
                description: "يحدد نقطة مرجع العلامة على المحور الرأسي (نقطة الارتكاز)",
                values: [
                    { value: "0", description: "المرجع عند 0" },
                    { value: "5", description: "المرجع عند 5" },
                    { value: "10", description: "المرجع عند 10" }
                ],
                freeInput: true
            },
            {
                name: "markerUnits",
                description: "يحدد وحدات قياس العلامة",
                values: [
                    { value: "strokeWidth", description: "نسبة لسمك الخط (الافتراضي)" },
                    { value: "userSpaceOnUse", description: "وحدات مطلقة" }
                ]
            }
        ]
    },

    // -------- filter --------
    {
        tag: "filter",
        description: "يحدد مجموعة من التأثيرات البصرية (ضبابية، ظل، ألوان) يمكن تطبيقها على أي عنصر SVG عبر خاصية filter",
        attributes: [
            {
                name: "id",
                description: "يحدد معرفاً فريداً للتأثير، يُستدعى من خاصية filter في العنصر المراد تأثيره",
                values: [
                    { value: "blur1", description: "معرف تأثير الضبابية" },
                    { value: "shadow", description: "معرف تأثير الظل" },
                    { value: "glow", description: "معرف تأثير التوهج" }
                ],
                freeInput: true
            },
            {
                name: "filterUnits",
                description: "يحدد نظام الإحداثيات المستخدم للتأثير",
                values: [
                    { value: "userSpaceOnUse", description: "وحدات مطلقة" },
                    { value: "objectBoundingBox", description: "وحدات نسبية لحجم العنصر (الافتراضي)" }
                ]
            },
            {
                name: "x",
                description: "يحدد موقع منطقة التأثير على المحور الأفقي",
                values: [
                    { value: "-10%", description: "-10% من حجم العنصر" },
                    { value: "0%", description: "بداية العنصر" },
                    { value: "10%", description: "10% من حجم العنصر" }
                ],
                freeInput: true
            },
            {
                name: "y",
                description: "يحدد موقع منطقة التأثير على المحور الرأسي",
                values: [
                    { value: "-10%", description: "-10% من حجم العنصر" },
                    { value: "0%", description: "بداية العنصر" },
                    { value: "10%", description: "10% من حجم العنصر" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض منطقة التأثير",
                values: [
                    { value: "120%", description: "120% من حجم العنصر" },
                    { value: "100%", description: "حجم العنصر" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع منطقة التأثير",
                values: [
                    { value: "120%", description: "120% من حجم العنصر" },
                    { value: "100%", description: "حجم العنصر" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- feGaussianBlur --------
    {
        tag: "feGaussianBlur",
        description: "يضيف تأثير ضبابية (تمويه) داخل عنصر filter، يستخدم للظلال الناعمة وتأثيرات التركيز",
        attributes: [
            {
                name: "stdDeviation",
                description: "يحدد قوة الضبابية، كلما زاد الرقم زادت درجة التمويه",
                values: [
                    { value: "0.5", description: "ضبابية خفيفة جداً" },
                    { value: "1", description: "ضبابية خفيفة" },
                    { value: "2", description: "ضبابية خفيفة" },
                    { value: "3", description: "ضبابية خفيفة" },
                    { value: "4", description: "ضبابية متوسطة" },
                    { value: "5", description: "ضبابية متوسطة" },
                    { value: "8", description: "ضبابية قوية" },
                    { value: "10", description: "ضبابية قوية جداً" },
                    { value: "15", description: "ضبابية شديدة" },
                    { value: "20", description: "ضبابية شديدة جداً" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- feOffset --------
    {
        tag: "feOffset",
        description: "ينقل نسخة من العنصر مسافة معينة داخل filter، يستخدم غالباً مع feGaussianBlur لصنع تأثير الظل المسقط",
        attributes: [
            {
                name: "dx",
                description: "يحدد مقدار الإزاحة الأفقية للنسخة المنقولة",
                values: [
                    { value: "0", description: "بدون إزاحة أفقية" },
                    { value: "1", description: "إزاحة 1 بكسل لليمين" },
                    { value: "2", description: "إزاحة 2 بكسل لليمين" },
                    { value: "3", description: "إزاحة 3 بكسل لليمين" },
                    { value: "4", description: "إزاحة 4 بكسل لليمين" },
                    { value: "5", description: "إزاحة 5 بكسل لليمين" },
                    { value: "10", description: "إزاحة 10 بكسل لليمين" },
                    { value: "-1", description: "إزاحة 1 بكسل لليسار" },
                    { value: "-5", description: "إزاحة 5 بكسل لليسار" }
                ],
                freeInput: true
            },
            {
                name: "dy",
                description: "يحدد مقدار الإزاحة الرأسية للنسخة المنقولة",
                values: [
                    { value: "0", description: "بدون إزاحة رأسية" },
                    { value: "1", description: "إزاحة 1 بكسل للأسفل" },
                    { value: "2", description: "إزاحة 2 بكسل للأسفل" },
                    { value: "3", description: "إزاحة 3 بكسل للأسفل" },
                    { value: "4", description: "إزاحة 4 بكسل للأسفل" },
                    { value: "5", description: "إزاحة 5 بكسل للأسفل" },
                    { value: "10", description: "إزاحة 10 بكسل للأسفل" },
                    { value: "-1", description: "إزاحة 1 بكسل للأعلى" },
                    { value: "-5", description: "إزاحة 5 بكسل للأعلى" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- set --------
    {
        tag: "set",
        description: "يغير قيمة خاصية معينة فجأة دون تدرج بعد وقت محدد، بديل بسيط عن animate عندما لا تحتاج لحركة تدريجية",
        attributes: [
            {
                name: "attributeName",
                description: "يحدد الخاصية التي ستتغير قيمتها فجأة",
                values: [
                    { value: "fill", description: "يغير لون التعبئة" },
                    { value: "visibility", description: "يغير الظهور والاختفاء" },
                    { value: "opacity", description: "يغير الشفافية" },
                    { value: "stroke", description: "يغير لون الحدود" },
                    { value: "r", description: "يغير نصف القطر" },
                    { value: "width", description: "يغير العرض" },
                    { value: "height", description: "يغير الارتفاع" },
                    { value: "x", description: "يغير الموضع الأفقي" },
                    { value: "y", description: "يغير الموضع الرأسي" }
                ],
                freeInput: true
            },
            {
                name: "to",
                description: "يحدد القيمة الجديدة التي ستُطبق فجأة",
                values: [
                    { value: "red", description: "يتغير إلى اللون الأحمر" },
                    { value: "blue", description: "يتغير إلى اللون الأزرق" },
                    { value: "hidden", description: "يختفي العنصر" },
                    { value: "visible", description: "يظهر العنصر" },
                    { value: "0", description: "يتغير إلى 0" },
                    { value: "50", description: "يتغير إلى 50" },
                    { value: "100", description: "يتغير إلى 100" },
                    { value: "0.5", description: "يتغير إلى 0.5" }
                ],
                freeInput: true
            },
            {
                name: "begin",
                description: "يحدد متى يبدأ هذا التغيير، مثل وقت محدد أو عند حدث معين",
                values: [
                    { value: "0s", description: "يبدأ فوراً" },
                    { value: "1s", description: "يبدأ بعد ثانية واحدة" },
                    { value: "2s", description: "يبدأ بعد ثانيتين" },
                    { value: "3s", description: "يبدأ بعد 3 ثواني" },
                    { value: "5s", description: "يبدأ بعد 5 ثواني" },
                    { value: "10s", description: "يبدأ بعد 10 ثواني" },
                    { value: "click", description: "يبدأ عند النقر على العنصر" },
                    { value: "mouseover", description: "يبدأ عند تمرير الماوس" },
                    { value: "indefinite", description: "لا يبدأ تلقائياً" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- a (SVG) --------
    {
        tag: "a",
        description: "ينشئ رابطاً تشعبياً حول عنصر أو مجموعة عناصر SVG، عند النقر عليه ينتقل المستخدم إلى وجهة الرابط",
        attributes: [
            {
                name: "href",
                description: "يحدد وجهة الرابط التي ينتقل إليها المستخدم عند النقر على عنصر SVG",
                values: [
                    { value: "https://example.com", description: "ينتقل إلى موقع خارجي" },
                    { value: "https://www.google.com", description: "ينتقل إلى موقع جوجل" },
                    { value: "https://www.youtube.com", description: "ينتقل إلى موقع يوتيوب" },
                    { value: "https://github.com", description: "ينتقل إلى موقع جيت هاب" },
                    { value: "#section", description: "ينتقل إلى جزء في نفس الصفحة" },
                    { value: "#top", description: "ينتقل إلى أعلى الصفحة" },
                    { value: "page.html", description: "ينتقل إلى صفحة داخل الموقع" },
                    { value: "/about", description: "ينتقل إلى صفحة حول" },
                    { value: "mailto:email@example.com", description: "يفتح برنامج البريد" },
                    { value: "tel:+123456789", description: "يفتح تطبيق الاتصال" }
                ],
                freeInput: true
            },
            {
                name: "target",
                description: "يحدد كيف وأين يفتح الرابط",
                values: [
                    { value: "_blank", description: "يفتح الرابط في نافذة جديدة" },
                    { value: "_self", description: "يفتح الرابط في نفس النافذة (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- style (SVG) --------
    {
        tag: "style",
        description: "يسمح بكتابة أكواد CSS مباشرة داخل SVG، يتيح تنسيق عدة عناصر بواسطة class دون تكرار الخصائص على كل عنصر",
        attributes: [
            {
                name: "type",
                description: "يحدد نوع لغة التنسيق المستخدمة داخل العنصر",
                values: [
                    { value: "text/css", description: "لغة CSS القياسية (الافتراضية)" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.svgData = svgData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = svgData;
}