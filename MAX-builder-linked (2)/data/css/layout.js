// ============================================================
// layout.js
// خصائص التخطيط (Layout) في CSS
// تتحكم في كيفية ترتيب العناصر وتحديد مواقعها على الصفحة
// ============================================================

const cssLayoutData = [
    // ============================================================
    // 1. display (نوع العرض)
    // ============================================================
    {
        tag: "display",
        description: "يحدد نوع صندوق العنصر وكيفية ظهوره في التدفق الأساسي للصفحة، يغير سلوك العنصر بالكامل",
        properties: [
            {
                name: "display",
                description: "الخاصية الرئيسية التي تحدد نوع عرض العنصر وتغير سلوكه في التخطيط",
                values: [
                    // قيم التدفق الأساسية
                    { value: "block", description: "يحتل العنصر العرض الكامل ويبدأ في سطر جديد، مثله مثل <div> و <p>" },
                    { value: "inline", description: "يأخذ حجم محتواه فقط ولا يبدأ سطراً جديداً، مثله مثل <span> و <a>" },
                    { value: "inline-block", description: "مزيج بين inline و block، يأخذ حجم المحتوى لكن يمكن تعديل عرضه وارتفاعه" },
                    
                    // قيم Flexbox
                    { value: "flex", description: "يحول العنصر إلى حاوية مرنة (Flexbox)، تتيح ترتيب العناصر داخلها بمرونة عالية" },
                    { value: "inline-flex", description: "حاوية مرنة ولكن تتصرف كعنصر inline، لا تبدأ سطراً جديداً" },
                    
                    // قيم Grid
                    { value: "grid", description: "يحول العنصر إلى شبكة (Grid)، تتيح ترتيب العناصر في صفوف وأعمدة بدقة" },
                    { value: "inline-grid", description: "شبكة ولكن تتصرف كعنصر inline، لا تبدأ سطراً جديداً" },
                    { value: "subgrid", description: "يسمح للعنصر بميراث شبكة العنصر الأب واستخدامها، مفيد في الشبكات المعقدة" },
                    
                    // قيم الجداول
                    { value: "table", description: "يجعل العنصر يتصرف كجدول <table>" },
                    { value: "inline-table", description: "يتصرف كجدول ولكن كعنصر inline" },
                    { value: "table-row", description: "يتصرف كصف في الجدول <tr>" },
                    { value: "table-cell", description: "يتصرف كخلية في الجدول <td>" },
                    { value: "table-caption", description: "يتصرف كعنوان الجدول <caption>" },
                    { value: "table-column", description: "يتصرف كعمود في الجدول <col>" },
                    { value: "table-column-group", description: "يتصرف كمجموعة أعمدة <colgroup>" },
                    { value: "table-header-group", description: "يتصرف كمجموعة رأس الجدول <thead>" },
                    { value: "table-footer-group", description: "يتصرف كمجموعة تذييل الجدول <tfoot>" },
                    { value: "table-row-group", description: "يتصرف كمجموعة صفوف الجدول <tbody>" },
                    
                    // قيم Ruby (للغات شرق آسيا)
                    { value: "ruby", description: "يحدد عنصراً للنصوص الحروفية (Ruby annotations) المستخدمة في اللغات الشرق آسيوية" },
                    { value: "ruby-base", description: "يحدد النص الأساسي في تعليقات Ruby" },
                    { value: "ruby-text", description: "يحدد النص التوضيحي في تعليقات Ruby" },
                    { value: "ruby-base-container", description: "حاوية للنصوص الأساسية في Ruby" },
                    { value: "ruby-text-container", description: "حاوية للنصوص التوضيحية في Ruby" },
                    
                    // قيم متنوعة
                    { value: "list-item", description: "يجعل العنصر يتصرف كعنصر قائمة <li> مع ظهور علامة تعداد" },
                    { value: "none", description: "يخفي العنصر تماماً ولا يشغل أي مساحة في الصفحة، كأنه غير موجود" },
                    { value: "contents", description: "يجعل العنصر نفسه يختفي ولكن محتوياته الداخلية تظهر كأبناء للعنصر الأب مباشرة" },
                    { value: "flow-root", description: "يخلق سياقاً جديداً لتنسيق التدفق، يحوي العناصر العائمة داخله ويمنع خروجها" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. position (التموضع)
    // ============================================================
    {
        tag: "position",
        description: "يحدد طريقة تحديد موقع العنصر في الصفحة، وكيفية تفاعله مع العناصر الأخرى",
        properties: [
            {
                name: "position",
                description: "الخاصية الرئيسية لتحديد طريقة التموضع",
                values: [
                    { value: "static", description: "الوضع الافتراضي، العنصر يتبع تدفق الصفحة الطبيعي ولا يتأثر بـ top/left/right/bottom" },
                    { value: "relative", description: "يحدد موقع العنصر نسبةً إلى موقعه الأصلي في التدفق، يمكن تحريكه باستخدام top/left" },
                    { value: "absolute", description: "يزيل العنصر من التدفق ويحدد موقعه نسبةً إلى أقرب عنصر أب له position غير static" },
                    { value: "fixed", description: "يثبت العنصر في مكانه نسبةً إلى نافذة المتصفح، لا يتحرك مع التمرير" },
                    { value: "sticky", description: "مزيج بين relative و fixed، يلتصق العنصر عند تمرير الصفحة إلى موضع معين" }
                ]
            },
            // -------- top --------
            {
                name: "top",
                description: "يحدد المسافة بين الحافة العلوية للعنصر والحافة العلوية للعنصر الأب أو النافذة (حسب position)",
                values: [
                    { value: "0", description: "يلصق العنصر بالحافة العلوية" },
                    { value: "2px", description: "مسافة 2 بكسل من الأعلى" },
                    { value: "5px", description: "مسافة 5 بكسل" },
                    { value: "10px", description: "مسافة 10 بكسل" },
                    { value: "15px", description: "مسافة 15 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "30px", description: "مسافة 30 بكسل" },
                    { value: "50px", description: "مسافة 50 بكسل" },
                    { value: "100px", description: "مسافة 100 بكسل" },
                    { value: "10%", description: "10% من ارتفاع العنصر الأب" },
                    { value: "25%", description: "ربع ارتفاع العنصر الأب" },
                    { value: "50%", description: "نصف ارتفاع العنصر الأب" },
                    { value: "100%", description: "يساوي ارتفاع العنصر الأب" },
                    { value: "auto", description: "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية" },
                    { value: "-10px", description: "قيمة سالبة - يتحرك للأعلى خارج الحدود" }
                ],
                freeInput: true
            },
            // -------- right --------
            {
                name: "right",
                description: "يحدد المسافة بين الحافة اليمنى للعنصر والحافة اليمنى للعنصر الأب أو النافذة (حسب position)",
                values: [
                    { value: "0", description: "يلصق العنصر بالحافة اليمنى" },
                    { value: "10px", description: "مسافة 10 بكسل من اليمين" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "50px", description: "مسافة 50 بكسل" },
                    { value: "10%", description: "10% من عرض العنصر الأب" },
                    { value: "25%", description: "ربع عرض العنصر الأب" },
                    { value: "50%", description: "نصف عرض العنصر الأب" },
                    { value: "auto", description: "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية" },
                    { value: "-10px", description: "قيمة سالبة - يتحرك لليمين خارج الحدود" }
                ],
                freeInput: true
            },
            // -------- bottom --------
            {
                name: "bottom",
                description: "يحدد المسافة بين الحافة السفلية للعنصر والحافة السفلية للعنصر الأب أو النافذة (حسب position)",
                values: [
                    { value: "0", description: "يلصق العنصر بالحافة السفلية" },
                    { value: "10px", description: "مسافة 10 بكسل من الأسفل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "50px", description: "مسافة 50 بكسل" },
                    { value: "10%", description: "10% من ارتفاع العنصر الأب" },
                    { value: "25%", description: "ربع ارتفاع العنصر الأب" },
                    { value: "50%", description: "نصف ارتفاع العنصر الأب" },
                    { value: "auto", description: "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية" },
                    { value: "-10px", description: "قيمة سالبة - يتحرك للأسفل خارج الحدود" }
                ],
                freeInput: true
            },
            // -------- left --------
            {
                name: "left",
                description: "يحدد المسافة بين الحافة اليسرى للعنصر والحافة اليسرى للعنصر الأب أو النافذة (حسب position)",
                values: [
                    { value: "0", description: "يلصق العنصر بالحافة اليسرى" },
                    { value: "10px", description: "مسافة 10 بكسل من اليسار" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "50px", description: "مسافة 50 بكسل" },
                    { value: "10%", description: "10% من عرض العنصر الأب" },
                    { value: "25%", description: "ربع عرض العنصر الأب" },
                    { value: "50%", description: "نصف عرض العنصر الأب" },
                    { value: "auto", description: "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية" },
                    { value: "-10px", description: "قيمة سالبة - يتحرك لليسار خارج الحدود" }
                ],
                freeInput: true
            },
            // -------- inset --------
            {
                name: "inset",
                description: "اختصار لتحديد top، right، bottom، left دفعة واحدة (مفيد مع position)",
                values: [
                    { value: "0", description: "تمدد العنصر من جميع الجهات (top=0, right=0, bottom=0, left=0)" },
                    { value: "10px", description: "جميع الجهات بمسافة 10 بكسل" },
                    { value: "5px 10px", description: "top و bottom = 5px، right و left = 10px" },
                    { value: "5px 10px 15px", description: "top=5px, right=10px, bottom=15px, left=10px" },
                    { value: "5px 10px 15px 20px", description: "top=5px, right=10px, bottom=15px, left=20px" }
                ],
                freeInput: true
            },
            // -------- z-index --------
            {
                name: "z-index",
                description: "يحدد ترتيب العنصر في المحور العمودي (الأمامي والخلفي)، القيمة الأعلى تظهر في المقدمة",
                values: [
                    { value: "auto", description: "يتبع ترتيب العنصر في الـ HTML - القيمة الافتراضية" },
                    { value: "0", description: "المستوى الافتراضي" },
                    { value: "1", description: "يظهر فوق العناصر ذات المستوى 0" },
                    { value: "2", description: "يظهر فوق العناصر ذات المستوى 1" },
                    { value: "5", description: "يظهر في المقدمة" },
                    { value: "10", description: "يظهر في المقدمة جداً" },
                    { value: "100", description: "يظهر في المقدمة جداً" },
                    { value: "999", description: "يظهر في المقدمة جداً" },
                    { value: "9999", description: "يظهر في المقدمة جداً - فوق كل شيء" },
                    { value: "-1", description: "يظهر خلف العناصر الأخرى" },
                    { value: "-5", description: "يظهر خلف العناصر الأخرى" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. float و clear (العائم والتطهير)
    // ============================================================
    {
        tag: "float-clear",
        description: "يجعل العنصر يطفو إلى اليسار أو اليمين، وتلتف النصوص حوله (مستخدم في التصميمات القديمة)",
        properties: [
            // -------- float --------
            {
                name: "float",
                description: "يجعل العنصر يطفو إلى اليسار أو اليمين، وتلتف النصوص حوله",
                values: [
                    { value: "none", description: "لا يطفو - القيمة الافتراضية" },
                    { value: "left", description: "يطفو العنصر إلى اليسار وتلتف النصوص حوله من اليمين" },
                    { value: "right", description: "يطفو العنصر إلى اليمين وتلتف النصوص حوله من اليسار" },
                    { value: "inline-start", description: "يطفو في بداية الاتجاه الكتابي (يسار في العربية)" },
                    { value: "inline-end", description: "يطفو في نهاية الاتجاه الكتابي (يمين في العربية)" }
                ]
            },
            // -------- clear --------
            {
                name: "clear",
                description: "يمنع العناصر من الالتفاف حول العناصر العائمة، يجبر العنصر على النزول تحتهم",
                values: [
                    { value: "none", description: "لا يمنع الالتفاف - القيمة الافتراضية" },
                    { value: "left", description: "يمنع الالتفاف حول العناصر العائمة إلى اليسار" },
                    { value: "right", description: "يمنع الالتفاف حول العناصر العائمة إلى اليمين" },
                    { value: "both", description: "يمنع الالتفاف حول العناصر العائمة في كلا الاتجاهين" },
                    { value: "inline-start", description: "يمنع الالتفاف حول العناصر العائمة في بداية الاتجاه" },
                    { value: "inline-end", description: "يمنع الالتفاف حول العناصر العائمة في نهاية الاتجاه" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. overflow (الفيضان)
    // ============================================================
    {
        tag: "overflow",
        description: "يتحكم في كيفية عرض المحتوى الذي يتجاوز حدود العنصر (زائد عن حجمه)",
        properties: [
            // -------- overflow --------
            {
                name: "overflow",
                description: "يتحكم في كيفية عرض المحتوى الذي يتجاوز حدود العنصر",
                values: [
                    { value: "visible", description: "يظهر المحتوى الزائد خارج حدود العنصر - القيمة الافتراضية" },
                    { value: "hidden", description: "يخفي المحتوى الزائد ولا يظهر" },
                    { value: "scroll", description: "يضيف أشرطة تمرير دائمة للسماح برؤية المحتوى الزائد" },
                    { value: "auto", description: "يضيف أشرطة تمرير فقط عند الحاجة إليها" },
                    { value: "clip", description: "يخفي المحتوى الزائد تماماً ولا يسمح بأي تمرير" }
                ]
            },
            // -------- overflow-x --------
            {
                name: "overflow-x",
                description: "يتحكم في عرض المحتوى الزائد في الاتجاه الأفقي فقط",
                values: [
                    { value: "visible", description: "يظهر المحتوى الزائد أفقياً خارج الحدود - القيمة الافتراضية" },
                    { value: "hidden", description: "يخفي المحتوى الزائد أفقياً" },
                    { value: "scroll", description: "يضيف شريط تمرير أفقي" },
                    { value: "auto", description: "يضيف شريط تمرير أفقي عند الحاجة" },
                    { value: "clip", description: "يقص المحتوى الزائد ولا يسمح بالتمرير" }
                ]
            },
            // -------- overflow-y --------
            {
                name: "overflow-y",
                description: "يتحكم في عرض المحتوى الزائد في الاتجاه الرأسي فقط",
                values: [
                    { value: "visible", description: "يظهر المحتوى الزائد عمودياً خارج الحدود - القيمة الافتراضية" },
                    { value: "hidden", description: "يخفي المحتوى الزائد عمودياً" },
                    { value: "scroll", description: "يضيف شريط تمرير عمودي" },
                    { value: "auto", description: "يضيف شريط تمرير عمودي عند الحاجة" },
                    { value: "clip", description: "يقص المحتوى الزائد ولا يسمح بالتمرير" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. clip و clip-path (القص)
    // ============================================================
    {
        tag: "clip",
        description: "يقطع جزءاً من العنصر بحيث يظهر فقط منطقة مستطيلة محددة (خاصية قديمة استُبدلت بـ clip-path)",
        properties: [
            // -------- clip (قديم) --------
            {
                name: "clip (قديم)",
                description: "يقطع العنصر بشكل مستطيل (خاصية قديمة، استخدم clip-path بدلاً منها)",
                values: [
                    { value: "auto", description: "لا يقطع - القيمة الافتراضية" },
                    { value: "rect(0px, 100px, 100px, 0px)", description: "يحدد مستطيلاً للقطع، يظهر فقط المنطقة داخله" },
                    { value: "rect(10px, 200px, 150px, 20px)", description: "مستطيل مخصص" }
                ],
                freeInput: true
            },
            // -------- clip-path --------
            {
                name: "clip-path",
                description: "يقطع العنصر بشكل معين (دائرة، بيضاوي، مضلع) ويخفي الأجزاء خارج هذا الشكل",
                values: [
                    { value: "none", description: "لا يقطع - القيمة الافتراضية" },
                    
                    // أشكال أساسية
                    { value: "circle(50%)", description: "يقطع العنصر على شكل دائرة نصف قطرها 50% من حجم العنصر" },
                    { value: "circle(30%)", description: "دائرة نصف قطرها 30%" },
                    { value: "circle(50% at 50% 50%)", description: "دائرة في المنتصف" },
                    { value: "circle(50% at 0% 50%)", description: "دائرة في منتصف اليسار" },
                    { value: "circle(50% at 50% 0%)", description: "دائرة في منتصف الأعلى" },
                    
                    { value: "ellipse(50% 50%)", description: "يقطع العنصر على شكل بيضاوي" },
                    { value: "ellipse(30% 50%)", description: "بيضاوي بعرض 30% وارتفاع 50%" },
                    { value: "ellipse(50% 50% at 50% 50%)", description: "بيضاوي في المنتصف" },
                    { value: "ellipse(30% 50% at 0% 50%)", description: "بيضاوي في منتصف اليسار" },
                    
                    { value: "polygon(0% 0%, 100% 0%, 50% 100%)", description: "يقطع العنصر على شكل مثلث" },
                    { value: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", description: "مستطيل (لا تأثير)" },
                    { value: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", description: "شكل معين (دائري)" },
                    { value: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)", description: "شكل مثمن" },
                    { value: "polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)", description: "شكل شبه منحرف" },
                    
                    { value: "inset(10px)", description: "يقطع العنصر من الداخل بمسافة 10 بكسل من كل حافة" },
                    { value: "inset(10px 20px)", description: "مسافة 10 بكسل أعلى/أسفل، 20 بكسل يمين/يسار" },
                    { value: "inset(10px 20px 30px 40px)", description: "مسافات مختلفة لكل حافة" },
                    { value: "inset(10px round 10px)", description: "قطع مع زوايا مستديرة" },
                    
                    { value: "url(#clipPathId)", description: "يستخدم شكل قطع محدد في SVG" },
                    { value: "url('clip.svg#path')", description: "شكل قطع من ملف SVG خارجي" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 6. visibility (الرؤية)
    // ============================================================
    {
        tag: "visibility",
        description: "يتحكم في رؤية العنصر، يختلف عن display:none بأنه يبقي مساحة العنصر محجوزة",
        properties: [
            {
                name: "visibility",
                description: "يتحكم في رؤية العنصر مع الاحتفاظ بمساحته",
                values: [
                    { value: "visible", description: "العنصر مرئي - القيمة الافتراضية" },
                    { value: "hidden", description: "يخفي العنصر لكن يحتفظ بمساحته في الصفحة" },
                    { value: "collapse", description: "خاص بالجداول، يخفي صف أو عمود ويقلص مساحته" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. box-sizing (حساب الأبعاد)
    // ============================================================
    {
        tag: "box-sizing",
        description: "يحدد كيفية حساب عرض وارتفاع العنصر، هل يشمل الحواف والهوامش الداخلية أم لا",
        properties: [
            {
                name: "box-sizing",
                description: "يحدد كيفية حساب عرض وارتفاع العنصر",
                values: [
                    { value: "content-box", description: "العرض والارتفاع يشملان المحتوى فقط، الحواف والهوامش الداخلية تضاف إليهما - القيمة الافتراضية" },
                    { value: "border-box", description: "العرض والارتفاع يشملان المحتوى والحواف والهوامش الداخلية معاً، يسهل التحكم بالأبعاد" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. resize (تغيير الحجم)
    // ============================================================
    {
        tag: "resize",
        description: "يسمح للمستخدم بتغيير حجم العنصر بسحب حافته بالماوس (يعمل مع overflow غير visible)",
        properties: [
            {
                name: "resize",
                description: "يسمح للمستخدم بتغيير حجم العنصر بسحب حافته بالماوس",
                values: [
                    { value: "none", description: "لا يسمح بتغيير الحجم - القيمة الافتراضية" },
                    { value: "both", description: "يسمح بتغيير الحجم في كلا الاتجاهين" },
                    { value: "horizontal", description: "يسمح بتغيير العرض فقط" },
                    { value: "vertical", description: "يسمح بتغيير الارتفاع فقط" },
                    { value: "block", description: "يسمح بتغيير الحجم في اتجاه الكتلة (عمودي في اللغات الأفقية)" },
                    { value: "inline", description: "يسمح بتغيير الحجم في اتجاه الخط (أفقي في اللغات الأفقية)" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. object-fit و object-position (الوسائط)
    // ============================================================
    {
        tag: "object-fit",
        description: "يحدد كيف تتناسب الصور أو الفيديوهات داخل عنصرها مع الحفاظ على نسبة الأبعاد",
        properties: [
            // -------- object-fit --------
            {
                name: "object-fit",
                description: "يحدد كيف تتناسب الصور أو الفيديوهات داخل عنصرها",
                values: [
                    { value: "fill", description: "تملأ الصورة العنصر بالكامل وقد تتشوه إذا اختلفت النسب - القيمة الافتراضية" },
                    { value: "contain", description: "تكبر الصورة لتلائم العنصر مع الحفاظ على نسبها، قد تظهر فراغات" },
                    { value: "cover", description: "تكبر الصورة لتغطي العنصر بالكامل مع الحفاظ على نسبها، قد يُقص جزء منها" },
                    { value: "none", description: "تبقى الصورة بحجمها الأصلي دون تكبير أو تصغير" },
                    { value: "scale-down", description: "تأخذ الحجم الأصغر بين none و contain" }
                ]
            },
            // -------- object-position --------
            {
                name: "object-position",
                description: "يحدد موقع الصورة أو الفيديو داخل العنصر عند استخدام object-fit",
                values: [
                    { value: "50% 50%", description: "تتمركز الصورة في المنتصف - القيمة الافتراضية" },
                    { value: "0% 0%", description: "الصورة في أعلى اليسار" },
                    { value: "100% 100%", description: "الصورة في أسفل اليمين" },
                    { value: "center top", description: "الصورة في أعلى المنتصف" },
                    { value: "center bottom", description: "الصورة في أسفل المنتصف" },
                    { value: "left center", description: "الصورة في منتصف اليسار" },
                    { value: "right center", description: "الصورة في منتصف اليمين" },
                    { value: "10px 20px", description: "الصورة على بعد 10 بكسل من اليسار و20 بكسل من الأعلى" },
                    { value: "10% 20%", description: "الصورة على بعد 10% من اليسار و20% من الأعلى" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 10. contain (احتواء المحتوى)
    // ============================================================
    {
        tag: "contain",
        description: "يحدد سلوك العنصر في احتواء محتواه، يحسن الأداء بتقليل إعادة التخطيط",
        properties: [
            {
                name: "contain",
                description: "يحدد سلوك العنصر في احتواء محتواه، يحسن الأداء",
                values: [
                    { value: "none", description: "لا يوجد احتواء خاص - القيمة الافتراضية" },
                    { value: "layout", description: "يعزل تخطيط العنصر عن باقي الصفحة، يمنع تأثيره على غيره" },
                    { value: "paint", description: "يمنع رسم محتوى العنصر خارج حدوده، يحسن الأداء" },
                    { value: "size", description: "يحدد أن حجم العنصر لا يعتمد على محتواه، يحسن الأداء في التخطيط" },
                    { value: "style", description: "يعزل تأثيرات الأنماط مثل العدادات والقوائم داخل العنصر" },
                    { value: "strict", description: "يطبق جميع أنواع الاحتواء (layout, paint, size, style)" },
                    { value: "content", description: "يطبق layout و paint و style" },
                    { value: "inline-size", description: "يحدد أن العرض يعتمد على المحتوى ولكن الارتفاع لا يعتمد" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. content-visibility (رؤية المحتوى المؤجلة)
    // ============================================================
    {
        tag: "content-visibility",
        description: "يؤخر تحميل وعرض المحتوى خارج نطاق الرؤية، يحسن أداء الصفحات الطويلة جداً",
        properties: [
            {
                name: "content-visibility",
                description: "يؤخر تحميل وعرض المحتوى خارج نطاق الرؤية",
                values: [
                    { value: "visible", description: "يعرض المحتوى دائماً - القيمة الافتراضية" },
                    { value: "auto", description: "يؤخر عرض المحتوى حتى يصبح قريباً من نافذة المتصفح" },
                    { value: "hidden", description: "يخفي المحتوى ولا يعرضه أبداً، لكن يحتفظ بمساحته" }
                ]
            }
        ]
    },

    // ============================================================
    // 12. shape-outside (التفاف النص حول الأشكال)
    // ============================================================
    {
        tag: "shape-outside",
        description: "يحدد شكلاً هندسياً (مثل دائرة) تلتف حوله العناصر المجاورة لعنصر عائم (float)",
        properties: [
            {
                name: "shape-outside",
                description: "يحدد شكلاً هندسياً تلتف حوله العناصر المجاورة",
                values: [
                    { value: "none", description: "الشكل المستطيل الافتراضي - القيمة الافتراضية" },
                    { value: "circle(50%)", description: "التفاف النص حول دائرة نصف قطرها 50%" },
                    { value: "ellipse(50% 50%)", description: "التفاف النص حول بيضاوي" },
                    { value: "polygon(0% 0%, 100% 0%, 50% 100%)", description: "التفاف النص حول مثلث" },
                    { value: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", description: "التفاف حول شكل معين" },
                    { value: "inset(10px)", description: "التفاف حول شكل مستطيل من الداخل" },
                    { value: "url('shape.png')", description: "التفاف حسب شفافية صورة PNG" },
                    { value: "url('shape.svg')", description: "التفاف حسب شكل SVG" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 13. التخطيط متعدد الأعمدة (Multi-column)
    // ============================================================
    {
        tag: "multi-column",
        description: "خصائص التخطيط متعدد الأعمدة (Multi-column Layout)، تقسم المحتوى النصي إلى أعمدة تلقائياً كالصحف",
        properties: [
            // -------- columns --------
            {
                name: "columns",
                description: "اختصار لـ column-width و column-count معاً",
                values: [
                    { value: "auto", description: "عمود واحد - القيمة الافتراضية" },
                    { value: "2", description: "عمودان" },
                    { value: "3", description: "3 أعمدة" },
                    { value: "4", description: "4 أعمدة" },
                    { value: "200px", description: "عرض عمود 200 بكسل" },
                    { value: "200px 3", description: "عرض عمود 200px بحد أقصى 3 أعمدة" },
                    { value: "300px 2", description: "عرض عمود 300px بحد أقصى عمودين" }
                ],
                freeInput: true
            },
            // -------- column-count --------
            {
                name: "column-count",
                description: "يحدد عدد الأعمدة التي يُقسّم إليها المحتوى",
                values: [
                    { value: "auto", description: "عدد تلقائي حسب column-width - القيمة الافتراضية" },
                    { value: "2", description: "تقسيم المحتوى إلى عمودين" },
                    { value: "3", description: "تقسيم المحتوى إلى 3 أعمدة" },
                    { value: "4", description: "تقسيم المحتوى إلى 4 أعمدة" },
                    { value: "5", description: "تقسيم المحتوى إلى 5 أعمدة" }
                ],
                freeInput: true
            },
            // -------- column-width --------
            {
                name: "column-width",
                description: "يحدد العرض المثالي لكل عمود، يحسب المتصفح العدد المناسب تلقائياً",
                values: [
                    { value: "auto", description: "عرض تلقائي - القيمة الافتراضية" },
                    { value: "100px", description: "كل عمود بعرض 100 بكسل" },
                    { value: "150px", description: "كل عمود بعرض 150 بكسل" },
                    { value: "200px", description: "كل عمود بعرض 200 بكسل" },
                    { value: "250px", description: "كل عمود بعرض 250 بكسل" },
                    { value: "300px", description: "كل عمود بعرض 300 بكسل" }
                ],
                freeInput: true
            },
            // -------- column-gap --------
            {
                name: "column-gap",
                description: "يحدد المسافة بين الأعمدة",
                values: [
                    { value: "normal", description: "مسافة افتراضية (عادة 1em) - القيمة الافتراضية" },
                    { value: "5px", description: "مسافة 5 بكسل بين الأعمدة" },
                    { value: "10px", description: "مسافة 10 بكسل" },
                    { value: "20px", description: "مسافة 20 بكسل" },
                    { value: "30px", description: "مسافة 30 بكسل" },
                    { value: "50px", description: "مسافة 50 بكسل" },
                    { value: "1rem", description: "مسافة 1rem" },
                    { value: "5%", description: "5% من عرض الحاوية" }
                ],
                freeInput: true
            },
            // -------- column-rule --------
            {
                name: "column-rule",
                description: "اختصار لرسم خط فاصل بين الأعمدة (عرض، نمط، لون) شبيه بخاصية border",
                values: [
                    { value: "none", description: "بدون خط فاصل - القيمة الافتراضية" },
                    { value: "1px solid gray", description: "خط رمادي رفيع صلب بين الأعمدة" },
                    { value: "2px dashed red", description: "خط أحمر متقطع سمك 2 بكسل" },
                    { value: "3px dotted blue", description: "خط أزرق منقط سمك 3 بكسل" },
                    { value: "4px double green", description: "خط أخضر مزدوج سمك 4 بكسل" },
                    { value: "1px solid #ccc", description: "خط رمادي فاتح" }
                ],
                freeInput: true
            },
            // -------- column-span --------
            {
                name: "column-span",
                description: "يسمح لعنصر بالامتداد عبر جميع الأعمدة بدلاً من البقاء داخل عمود واحد",
                values: [
                    { value: "none", description: "يبقى ضمن عمود واحد - القيمة الافتراضية" },
                    { value: "all", description: "يمتد عبر كل الأعمدة (مفيد للعناوين)" }
                ]
            },
            // -------- column-fill --------
            {
                name: "column-fill",
                description: "يحدد كيفية توزيع المحتوى على الأعمدة (متوازن أم يملأ الأعمدة بالترتيب)",
                values: [
                    { value: "balance", description: "يوزع المحتوى بالتساوي بين الأعمدة - القيمة الافتراضية" },
                    { value: "auto", description: "يملأ الأعمدة بالترتيب حتى تمتلئ" }
                ]
            }
        ]
    },

    // ============================================================
    // 14. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة لاستخدام خصائص التخطيط في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - توسيط عنصر بالكامل",
                description: "توسيط عنصر في منتصف الصفحة باستخدام position",
                values: [
                    { value: ".center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }", description: "توسيط عنصر تماماً في المنتصف" },
                    { value: ".center { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }", description: "توسيط عنصر ثابت في منتصف الشاشة" }
                ]
            },
            {
                name: "مثال 2 - رأس ثابت",
                description: "رأس يبقى في أعلى الصفحة عند التمرير",
                values: [
                    { value: ".header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }", description: "رأس ثابت في أعلى الصفحة" }
                ]
            },
            {
                name: "مثال 3 - تذييل في الأسفل",
                description: "تذييل يبقى في أسفل الصفحة حتى مع المحتوى القليل",
                values: [
                    { value: ".page { display: flex; flex-direction: column; min-height: 100vh; } .content { flex: 1; } .footer { background: #333; color: white; padding: 20px; }", description: "تذييل في أسفل الصفحة" }
                ]
            },
            {
                name: "مثال 4 - عنصر لاصق (Sticky)",
                description: "عنصر يلتصق عند التمرير إلى موضع معين",
                values: [
                    { value: ".sticky-nav { position: sticky; top: 0; z-index: 100; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }", description: "قائمة تنقل لاصقة" }
                ]
            },
            {
                name: "مثال 5 - نص بأعمدة كالصحف",
                description: "تقسيم النص إلى أعمدة متعددة",
                values: [
                    { value: ".article { column-count: 3; column-gap: 40px; column-rule: 2px solid #eee; } .article h1 { column-span: all; }", description: "نص مقسم إلى 3 أعمدة مع عنوان يمتد على الكل" }
                ]
            },
            {
                name: "مثال 6 - طبقات متراكبة (Overlay)",
                description: "طبقة تغطي الصفحة بالكامل",
                values: [
                    { value: ".overlay { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; justify-content: center; align-items: center; }", description: "طبقة تغطية مع توسيط المحتوى" }
                ]
            },
            {
                name: "مثال 7 - قص الصورة بشكل دائري",
                description: "جعل الصورة دائرية باستخدام clip-path",
                values: [
                    { value: ".avatar { width: 150px; height: 150px; clip-path: circle(50%); }", description: "صورة رمزية دائرية" },
                    { value: ".avatar { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; }", description: "صورة رمزية دائرية باستخدام border-radius" }
                ]
            }
        ]
    },

    // ============================================================
    // 15. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام خصائص التخطيط بشكل فعال",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية لاستخدام خصائص التخطيط",
                values: [
                    { value: "استخدم Flexbox للتخطيطات أحادية البعد", description: "قوائم، أشرطة، عناصر في صف أو عمود واحد" },
                    { value: "استخدم Grid للتخطيطات ثنائية البعد", description: "صفحات كاملة، شبكات، تخطيطات معقدة" },
                    { value: "استخدم position: sticky للعناصر اللاصقة", description: "قوائم تنقل، عناوين تلتصق عند التمرير" },
                    { value: "استخدم box-sizing: border-box عالمياً", description: "* { box-sizing: border-box; } يسهل حسابات الأبعاد" },
                    { value: "تجنب position: absolute كثيراً", description: "قد يعقد التخطيط ويصعب الصيانة" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء التخطيط",
                values: [
                    { value: "استخدم content-visibility: auto", description: "يحسن أداء الصفحات الطويلة بتأخير عرض المحتوى خارج الرؤية" },
                    { value: "استخدم contain: layout", description: "يعزل تخطيط العنصر ويحسن الأداء" },
                    { value: "تجنب تغيير top/left في الرسوم المتحركة", description: "استخدم transform بدلاً منها لتحسين الأداء" },
                    { value: "استخدم will-change للعناصر المتحركة", description: "يحسن أداء الرسوم المتحركة" }
                ]
            },
            {
                name: "نصائح التصميم المتجاوب",
                description: "نصائح للتصميم المتجاوب باستخدام خصائص التخطيط",
                values: [
                    { value: "استخدم وحدات نسبية", description: "%، vh، vw، fr، rem أفضل من px في التصميم المتجاوب" },
                    { value: "استخدم media queries لتغيير التخطيط", description: "تغيير display، grid-template-columns، flex-direction في الشاشات المختلفة" },
                    { value: "استخدم min-height: 100vh للصفحات الكاملة", description: "يجعل الصفحة تأخذ ارتفاع الشاشة بالكامل" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام خصائص التخطيط وكيفية تجنبها",
                values: [
                    { value: "نسيان position: relative للأب", description: "absolute يحتاج إلى عنصر أب position غير static" },
                    { value: "استخدام position: absolute بدون تحديد موقع", description: "يجب تحديد top/left/right/bottom" },
                    { value: "نسيان overflow لـ resize", description: "resize لا يعمل إلا مع overflow غير visible" },
                    { value: "استخدام float في التخطيطات الحديثة", description: "استخدم Flexbox أو Grid بدلاً من float" },
                    { value: "نسيان z-index مع position", description: "z-index لا يعمل بدون position غير static" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssLayoutData = cssLayoutData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssLayoutData;
}