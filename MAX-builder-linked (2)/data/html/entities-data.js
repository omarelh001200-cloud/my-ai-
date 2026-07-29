// ============================================================
// entities-data.js
// كيانات HTML (رموز خاصة، علامات، حروف محجوزة)
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const entitiesData = [
    // ============================================================
    // 1. الأحرف المحجوزة (Reserved Characters)
    // ============================================================
    {
        entity: "&lt;",
        character: "<",
        description: "علامة أصغر من (أقل من)، تستخدم لعرض رمز < في النص بدلاً من تفسيره كوسم HTML",
        category: "محجوزة"
    },
    {
        entity: "&gt;",
        character: ">",
        description: "علامة أكبر من (أكثر من)، تستخدم لعرض رمز > في النص بدلاً من تفسيره كوسم HTML",
        category: "محجوزة"
    },
    {
        entity: "&amp;",
        character: "&",
        description: "علامة العطف (و)، تستخدم لعرض رمز & في النص بدلاً من تفسيره كبداية لكيان HTML",
        category: "محجوزة"
    },
    {
        entity: "&quot;",
        character: '"',
        description: "علامة التنصيص المزدوجة، تستخدم لعرض علامة \" في النص دون أن تتداخل مع حدود السمات في HTML",
        category: "محجوزة"
    },
    {
        entity: "&apos;",
        character: "'",
        description: "علامة التنصيص المفردة (أبوستروف)، تستخدم لعرض علامة ' في النص دون أن تتداخل مع حدود السمات في HTML",
        category: "محجوزة"
    },

    // ============================================================
    // 2. المسافات والفراغات
    // ============================================================
    {
        entity: "&nbsp;",
        character: " ",
        description: "مسافة غير قابلة للكسر (Non-breaking Space)، تمنع المتصفح من كسر السطر عند هذه المسافة، تضمن بقاء الكلمات معاً في نفس السطر",
        category: "مسافات"
    },
    {
        entity: "&ensp;",
        character: "?",
        description: "مسافة بعرض نصف الحرف (En Space)، مسافة بعرض حرف n، تستخدم للفصل بين الكلمات بمسافة محددة",
        category: "مسافات"
    },
    {
        entity: "&emsp;",
        character: "?",
        description: "مسافة بعرض حرف كامل (Em Space)، مسافة بعرض حرف m، تستخدم للفصل بين الكلمات بمسافة كبيرة في النصوص المطبوعة",
        category: "مسافات"
    },
    {
        entity: "&thinsp;",
        character: "?",
        description: "مسافة رفيعة جداً (Thin Space)، مسافة صغيرة جداً تستخدم للفصل بين الأحرف في النصوص المطبوعة بدقة",
        category: "مسافات"
    },
    {
        entity: "&zwnj;",
        character: "‌",
        description: "فاصل عدم التصاق (Zero Width Non-Joiner)، يمنع الحروف من الالتصاق ببعضها في النصوص المتصلة مثل العربية والفارسية",
        category: "مسافات"
    },
    {
        entity: "&zwj;",
        character: "‍",
        description: "فاصل التصاق (Zero Width Joiner)، يجبر الحروف على الالتصاق ببعضها في النصوص المتصلة مثل العربية والفارسية",
        category: "مسافات"
    },
    {
        entity: "&lrm;",
        character: "‎",
        description: "علامة اتجاه يسار-يمين (Left-to-Right Mark)، تفرض اتجاه النص من اليسار إلى اليمين، تستخدم في النصوص متعددة الاتجاهات",
        category: "مسافات"
    },
    {
        entity: "&rlm;",
        character: "‏",
        description: "علامة اتجاه يمين-يسار (Right-to-Left Mark)، تفرض اتجاه النص من اليمين إلى اليسار، تستخدم في النصوص متعددة الاتجاهات",
        category: "مسافات"
    },

    // ============================================================
    // 3. علامات الترقيم
    // ============================================================
    {
        entity: "&copy;",
        character: "©",
        description: "علامة حقوق النشر (Copyright)، تستخدم للإشارة إلى حقوق النشر للمحتوى",
        category: "ترقيم"
    },
    {
        entity: "&reg;",
        character: "®",
        description: "علامة العلامة التجارية المسجلة (Registered Trademark)، تستخدم للإشارة إلى العلامات التجارية المسجلة رسمياً",
        category: "ترقيم"
    },
    {
        entity: "&trade;",
        character: "™",
        description: "علامة العلامة التجارية (Trademark)، تستخدم للإشارة إلى العلامات التجارية غير المسجلة أو قيد التسجيل",
        category: "ترقيم"
    },
    {
        entity: "&bull;",
        character: "•",
        description: "نقطة تعداد (Bullet)، تستخدم لإنشاء نقاط تعداد في القوائم غير المرتبة",
        category: "ترقيم"
    },
    {
        entity: "&hellip;",
        character: "…",
        description: "علامة حذف (Ellipsis)، تستخدم للإشارة إلى استمرارية أو حذف جزء من النص",
        category: "ترقيم"
    },
    {
        entity: "&mdash;",
        character: "—",
        description: "شرطة طويلة (Em Dash)، تستخدم للفصل بين الجمل أو للإشارة إلى تغيير في الفكرة",
        category: "ترقيم"
    },
    {
        entity: "&ndash;",
        character: "–",
        description: "شرطة متوسطة (En Dash)، تستخدم للإشارة إلى المدى (مثل 1990–2000) أو للربط بين الكلمات المركبة",
        category: "ترقيم"
    },
    {
        entity: "&minus;",
        character: "?",
        description: "علامة ناقص (Minus Sign)، تستخدم في العمليات الحسابية للدلالة على الطرح أو الأعداد السالبة",
        category: "ترقيم"
    },
    {
        entity: "&plusmn;",
        character: "±",
        description: "علامة زائد/ناقص (Plus-Minus Sign)، تستخدم للإشارة إلى القيم التقريبية أو هامش الخطأ",
        category: "ترقيم"
    },
    {
        entity: "&times;",
        character: "×",
        description: "علامة ضرب (Multiplication Sign)، تستخدم في العمليات الحسابية للدلالة على الضرب",
        category: "ترقيم"
    },
    {
        entity: "&divide;",
        character: "÷",
        description: "علامة قسمة (Division Sign)، تستخدم في العمليات الحسابية للدلالة على القسمة",
        category: "ترقيم"
    },
    {
        entity: "&equals;",
        character: "=",
        description: "علامة يساوي (Equals Sign)، تستخدم للمقارنة بين القيم أو في المعادلات الرياضية",
        category: "ترقيم"
    },
    {
        entity: "&not;",
        character: "¬",
        description: "علامة نفي (Not Sign)، تستخدم في المنطق للدلالة على النفي أو الاستثناء",
        category: "ترقيم"
    },
    {
        entity: "&dagger;",
        character: "†",
        description: "علامة خنجر (Dagger)، تستخدم للإشارة إلى الحواشي أو التعليقات الهامة",
        category: "ترقيم"
    },
    {
        entity: "&Dagger;",
        character: "‡",
        description: "علامة خنجر مزدوج (Double Dagger)، تستخدم للإشارة إلى الحواشي الثانوية أو التعليقات",
        category: "ترقيم"
    },
    {
        entity: "&sect;",
        character: "§",
        description: "علامة قسم (Section Sign)، تستخدم للإشارة إلى أقسام المستندات القانونية أو الفصول",
        category: "ترقيم"
    },
    {
        entity: "&para;",
        character: "¶",
        description: "علامة فقرة (Pilcrow)، تستخدم للإشارة إلى بداية فقرة جديدة في النصوص القانونية أو المحررة",
        category: "ترقيم"
    },
    {
        entity: "&iexcl;",
        character: "?",
        description: "علامة تعجب مقلوبة (Inverted Exclamation Mark)، تستخدم في اللغة الإسبانية في بداية الجمل التعجبية",
        category: "ترقيم"
    },
    {
        entity: "&iquest;",
        character: "?",
        description: "علامة استفهام مقلوبة (Inverted Question Mark)، تستخدم في اللغة الإسبانية في بداية الجمل الاستفهامية",
        category: "ترقيم"
    },
    {
        entity: "&laquo;",
        character: "«",
        description: "علامة تنصيص مزدوجة لليسار (Left Double Angle Quote)، تستخدم للاقتباس في اللغات الأوروبية",
        category: "ترقيم"
    },
    {
        entity: "&raquo;",
        character: "»",
        description: "علامة تنصيص مزدوجة لليمين (Right Double Angle Quote)، تستخدم للاقتباس في اللغات الأوروبية",
        category: "ترقيم"
    },
    {
        entity: "&lsquo;",
        character: "‘",
        description: "علامة تنصيص مفردة لليسار (Left Single Quote)، تستخدم للاقتباس أو الإشارة إلى الكلمات",
        category: "ترقيم"
    },
    {
        entity: "&rsquo;",
        character: "’",
        description: "علامة تنصيص مفردة لليمين (Right Single Quote)، تستخدم للاقتباس أو الإشارة إلى الكلمات",
        category: "ترقيم"
    },
    {
        entity: "&ldquo;",
        character: "“",
        description: "علامة تنصيص مزدوجة لليسار (Left Double Quote)، تستخدم للاقتباس المباشر في النصوص",
        category: "ترقيم"
    },
    {
        entity: "&rdquo;",
        character: "”",
        description: "علامة تنصيص مزدوجة لليمين (Right Double Quote)، تستخدم للاقتباس المباشر في النصوص",
        category: "ترقيم"
    },

    // ============================================================
    // 4. رموز العملات
    // ============================================================
    {
        entity: "&euro;",
        character: "€",
        description: "رمز اليورو (Euro Sign)، العملة الرسمية للاتحاد الأوروبي",
        category: "عملات"
    },
    {
        entity: "&pound;",
        character: "£",
        description: "رمز الجنيه الإسترليني (Pound Sign)، العملة الرسمية للمملكة المتحدة",
        category: "عملات"
    },
    {
        entity: "&yen;",
        character: "¥",
        description: "رمز الين (Yen Sign)، العملة الرسمية لليابان والصين (اليوان)",
        category: "عملات"
    },
    {
        entity: "&cent;",
        character: "¢",
        description: "رمز السنت (Cent Sign)، يستخدم للإشارة إلى أجزاء من العملات (مثل 1/100 من الدولار أو اليورو)",
        category: "عملات"
    },
    {
        entity: "&dollar;",
        character: "$",
        description: "رمز الدولار (Dollar Sign)، العملة الرسمية للولايات المتحدة والعديد من الدول الأخرى",
        category: "عملات"
    },
    {
        entity: "&real;",
        character: "R$",
        description: "رمز الريال البرازيلي (Brazilian Real)، العملة الرسمية للبرازيل",
        category: "عملات"
    },
    {
        entity: "&riyal;",
        character: "?",
        description: "رمز الريال السعودي (Saudi Riyal)، العملة الرسمية للمملكة العربية السعودية",
        category: "عملات"
    },
    {
        entity: "&dinar;",
        character: "د.ج",
        description: "رمز الدينار الجزائري (Algerian Dinar)، العملة الرسمية للجزائر",
        category: "عملات"
    },
    {
        entity: "&dirham;",
        character: "د.إ",
        description: "رمز الدرهم الإماراتي (UAE Dirham)، العملة الرسمية لدولة الإمارات العربية المتحدة",
        category: "عملات"
    },

    // ============================================================
    // 5. رموز رياضية
    // ============================================================
    {
        entity: "&sum;",
        character: "?",
        description: "رمز المجموع (Summation)، يستخدم في الرياضيات للدلالة على جمع سلسلة من الأرقام",
        category: "رياضية"
    },
    {
        entity: "&prod;",
        character: "?",
        description: "رمز الجداء (Product)، يستخدم في الرياضيات للدلالة على ضرب سلسلة من الأرقام",
        category: "رياضية"
    },
    {
        entity: "&radic;",
        character: "?",
        description: "رمز الجذر التربيعي (Square Root)، يستخدم في الرياضيات للدلالة على الجذر التربيعي لعدد",
        category: "رياضية"
    },
    {
        entity: "&infin;",
        character: "?",
        description: "رمز اللانهاية (Infinity)، يستخدم في الرياضيات للدلالة على قيمة غير محدودة أو كبيرة جداً",
        category: "رياضية"
    },
    {
        entity: "&int;",
        character: "?",
        description: "رمز التكامل (Integral)، يستخدم في الرياضيات للدلالة على عملية التكامل في التفاضل والتكامل",
        category: "رياضية"
    },
    {
        entity: "&part;",
        character: "?",
        description: "رمز المشتقة الجزئية (Partial Differential)، يستخدم في الرياضيات للدلالة على المشتقة الجزئية",
        category: "رياضية"
    },
    {
        entity: "&nabla;",
        character: "?",
        description: "رمز نابلا (Nabla)، يستخدم في الرياضيات للدلالة على التدرج أو المشتقة الاتجاهية",
        category: "رياضية"
    },
    {
        entity: "&deg;",
        character: "°",
        description: "رمز الدرجة (Degree Sign)، يستخدم للإشارة إلى درجات الحرارة أو الزوايا",
        category: "رياضية"
    },
    {
        entity: "&prime;",
        character: "?",
        description: "رمز أولي (Prime)، يستخدم في الرياضيات للدلالة على المشتقة الأولى أو الدقائق",
        category: "رياضية"
    },
    {
        entity: "&Prime;",
        character: "?",
        description: "رمز أولي مزدوج (Double Prime)، يستخدم في الرياضيات للدلالة على المشتقة الثانية أو الثواني",
        category: "رياضية"
    },
    {
        entity: "&permil;",
        character: "‰",
        description: "رمز لكل ألف (Per Mille)، يستخدم للإشارة إلى النسب المئوية للأجزاء من الألف",
        category: "رياضية"
    },
    {
        entity: "&micro;",
        character: "µ",
        description: "رمز ميكرو (Micro)، يستخدم في الفيزياء والكيمياء للدلالة على مليون جزء من الوحدة (10??)",
        category: "رياضية"
    },
    {
        entity: "&alpha;",
        character: "?",
        description: "حرف ألفا الإغريقي (Alpha)، يستخدم في الرياضيات والفيزياء كرمز لمتغيرات أو زوايا",
        category: "رياضية"
    },
    {
        entity: "&beta;",
        character: "?",
        description: "حرف بيتا الإغريقي (Beta)، يستخدم في الرياضيات والفيزياء كرمز لمتغيرات أو زوايا",
        category: "رياضية"
    },
    {
        entity: "&gamma;",
        character: "?",
        description: "حرف غاما الإغريقي (Gamma)، يستخدم في الرياضيات والفيزياء كرمز لمتغيرات أو زوايا",
        category: "رياضية"
    },
    {
        entity: "&delta;",
        character: "?",
        description: "حرف دلتا الإغريقي (Delta)، يستخدم في الرياضيات للدلالة على التغير أو الفرق",
        category: "رياضية"
    },
    {
        entity: "&epsilon;",
        character: "?",
        description: "حرف إبسيلون الإغريقي (Epsilon)، يستخدم في الرياضيات كرمز لمتغير صغير جداً",
        category: "رياضية"
    },
    {
        entity: "&pi;",
        character: "?",
        description: "حرف باي الإغريقي (Pi)، الثابت الرياضي 3.14159، يستخدم في حسابات الدائرة والزوايا",
        category: "رياضية"
    },
    {
        entity: "&sigma;",
        character: "?",
        description: "حرف سيغما الإغريقي (Sigma)، يستخدم في الإحصاء للدلالة على الانحراف المعياري",
        category: "رياضية"
    },
    {
        entity: "&tau;",
        character: "?",
        description: "حرف تاو الإغريقي (Tau)، يستخدم في الرياضيات كرمز للزمن أو الثوابت",
        category: "رياضية"
    },
    {
        entity: "&phi;",
        character: "?",
        description: "حرف فاي الإغريقي (Phi)، يستخدم في الرياضيات للدلالة على النسبة الذهبية أو الزوايا",
        category: "رياضية"
    },
    {
        entity: "&psi;",
        character: "?",
        description: "حرف ساي الإغريقي (Psi)، يستخدم في الفيزياء والرياضيات كرمز للموجات والدوال",
        category: "رياضية"
    },
    {
        entity: "&omega;",
        character: "?",
        description: "حرف أوميغا الإغريقي (Omega)، يستخدم في الفيزياء للدلالة على المقاومة الكهربائية أو التردد الزاوي",
        category: "رياضية"
    },
    {
        entity: "&forall;",
        character: "?",
        description: "رمز لكل (For All)، يستخدم في المنطق الرياضي للدلالة على أن العبارة صحيحة لكل القيم",
        category: "رياضية"
    },
    {
        entity: "&exist;",
        character: "?",
        description: "رمز يوجد (There Exists)، يستخدم في المنطق الرياضي للدلالة على وجود قيمة تحقق العبارة",
        category: "رياضية"
    },
    {
        entity: "&empty;",
        character: "?",
        description: "رمز المجموعة الفارغة (Empty Set)، يستخدم في الرياضيات للدلالة على مجموعة لا تحتوي على عناصر",
        category: "رياضية"
    },
    {
        entity: "&isin;",
        character: "?",
        description: "رمز ينتمي (Element Of)، يستخدم في الرياضيات للدلالة على أن عنصراً ينتمي إلى مجموعة",
        category: "رياضية"
    },
    {
        entity: "&notin;",
        character: "?",
        description: "رمز لا ينتمي (Not Element Of)، يستخدم في الرياضيات للدلالة على أن عنصراً لا ينتمي إلى مجموعة",
        category: "رياضية"
    },
    {
        entity: "&sub;",
        character: "?",
        description: "رمز مجموعة جزئية (Subset)، يستخدم في الرياضيات للدلالة على أن مجموعة جزء من مجموعة أخرى",
        category: "رياضية"
    },
    {
        entity: "&sup;",
        character: "?",
        description: "رمز مجموعة شاملة (Superset)، يستخدم في الرياضيات للدلالة على أن مجموعة تحتوي مجموعة أخرى",
        category: "رياضية"
    },
    {
        entity: "&sube;",
        character: "?",
        description: "رمز مجموعة جزئية أو مساوية (Subset or Equal)، يستخدم للدلالة على المجموعة الجزئية بما في ذلك التساوي",
        category: "رياضية"
    },
    {
        entity: "&supe;",
        character: "?",
        description: "رمز مجموعة شاملة أو مساوية (Superset or Equal)، يستخدم للدلالة على المجموعة الشاملة بما في ذلك التساوي",
        category: "رياضية"
    },
    {
        entity: "&perp;",
        character: "?",
        description: "رمز عمودي (Perpendicular)، يستخدم في الهندسة للدلالة على أن خطين متعامدين",
        category: "رياضية"
    },
    {
        entity: "&ang;",
        character: "?",
        description: "رمز زاوية (Angle)، يستخدم في الهندسة للدلالة على قياس الزوايا",
        category: "رياضية"
    },
    {
        entity: "&cong;",
        character: "?",
        description: "رمز متطابق (Congruent)، يستخدم في الهندسة للدلالة على أن شكلين متطابقين في الحجم والشكل",
        category: "رياضية"
    },
    {
        entity: "&asymp;",
        character: "?",
        description: "رمز تقريباً (Approximately Equal)، يستخدم للإشارة إلى قيم تقريبية أو مساوية تقريباً",
        category: "رياضية"
    },
    {
        entity: "&ne;",
        character: "?",
        description: "رمز لا يساوي (Not Equal)، يستخدم للدلالة على أن قيمتين غير متساويتين",
        category: "رياضية"
    },
    {
        entity: "&le;",
        character: "?",
        description: "رمز أقل أو يساوي (Less Than or Equal)، يستخدم للمقارنة بين القيم",
        category: "رياضية"
    },
    {
        entity: "&ge;",
        character: "?",
        description: "رمز أكبر أو يساوي (Greater Than or Equal)، يستخدم للمقارنة بين القيم",
        category: "رياضية"
    },

    // ============================================================
    // 6. رموز الأسهم
    // ============================================================
    {
        entity: "&larr;",
        character: "?",
        description: "سهم لليسار (Left Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى اليسار",
        category: "أسهم"
    },
    {
        entity: "&uarr;",
        character: "?",
        description: "سهم لأعلى (Up Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى الأعلى",
        category: "أسهم"
    },
    {
        entity: "&rarr;",
        character: "?",
        description: "سهم لليمين (Right Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى اليمين",
        category: "أسهم"
    },
    {
        entity: "&darr;",
        character: "?",
        description: "سهم لأسفل (Down Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى الأسفل",
        category: "أسهم"
    },
    {
        entity: "&harr;",
        character: "?",
        description: "سهم مزدوج (Left Right Arrow)، يستخدم للإشارة إلى اتجاهين أو معادلة",
        category: "أسهم"
    },
    {
        entity: "&crarr;",
        character: "?",
        description: "سهم إدخال (Carriage Return Arrow)، يستخدم للإشارة إلى مفتاح Enter أو بداية سطر جديد",
        category: "أسهم"
    },
    {
        entity: "&lArr;",
        character: "?",
        description: "سهم مزدوج لليسار (Left Double Arrow)، يستخدم في المنطق للدلالة على الاستلزام",
        category: "أسهم"
    },
    {
        entity: "&uArr;",
        character: "?",
        description: "سهم مزدوج لأعلى (Up Double Arrow)، يستخدم للإشارة إلى اتجاه قوي لأعلى",
        category: "أسهم"
    },
    {
        entity: "&rArr;",
        character: "?",
        description: "سهم مزدوج لليمين (Right Double Arrow)، يستخدم في المنطق للدلالة على الاستلزام",
        category: "أسهم"
    },
    {
        entity: "&dArr;",
        character: "?",
        description: "سهم مزدوج لأسفل (Down Double Arrow)، يستخدم للإشارة إلى اتجاه قوي لأسفل",
        category: "أسهم"
    },
    {
        entity: "&hArr;",
        character: "?",
        description: "سهم مزدوج اتجاهين (Left Right Double Arrow)، يستخدم في المنطق للدلالة على التكافؤ",
        category: "أسهم"
    },

    // ============================================================
    // 7. رموز الأشكال والرسوم
    // ============================================================
    {
        entity: "&loz;",
        character: "?",
        description: "رمز معين (Diamond)، يستخدم كرمز تجميعي أو في المنطق",
        category: "أشكال"
    },
    {
        entity: "&spades;",
        character: "?",
        description: "رمز البستوني (Spade)، يستخدم في أوراق اللعب أو كرمز زخرفي",
        category: "أشكال"
    },
    {
        entity: "&clubs;",
        character: "?",
        description: "رمز السباتي (Club)، يستخدم في أوراق اللعب أو كرمز زخرفي",
        category: "أشكال"
    },
    {
        entity: "&hearts;",
        character: "?",
        description: "رمز القلب (Heart)، يستخدم في أوراق اللعب أو كرمز للحب والعواطف",
        category: "أشكال"
    },
    {
        entity: "&diams;",
        character: "?",
        description: "رمز الديناري (Diamond)، يستخدم في أوراق اللعب أو كرمز زخرفي",
        category: "أشكال"
    },
    {
        entity: "&star;",
        character: "?",
        description: "نجمة مملوءة (Star)، تستخدم كرمز زخرفي أو للتقييم",
        category: "أشكال"
    },
    {
        entity: "&starf;",
        character: "?",
        description: "نجمة فارغة (Star Outline)، تستخدم كرمز زخرفي أو للتقييم",
        category: "أشكال"
    },
    {
        entity: "&phone;",
        character: "?",
        description: "رمز هاتف (Telephone)، يستخدم للإشارة إلى معلومات الاتصال أو أرقام الهواتف",
        category: "أشكال"
    },
    {
        entity: "&envelope;",
        character: "?",
        description: "رمز ظرف (Envelope)، يستخدم للإشارة إلى البريد الإلكتروني أو المراسلات",
        category: "أشكال"
    },
    {
        entity: "&check;",
        character: "?",
        description: "رمز صح (Check Mark)، يستخدم للإشارة إلى الصحة أو الموافقة أو الاكتمال",
        category: "أشكال"
    },
    {
        entity: "&cross;",
        character: "?",
        description: "رمز خطأ (Cross Mark)، يستخدم للإشارة إلى الخطأ أو الرفض أو عدم الاكتمال",
        category: "أشكال"
    },
    {
        entity: "&target;",
        character: "?",
        description: "رمز هدف (Target)، يستخدم للإشارة إلى الأهداف أو النقاط المركزية",
        category: "أشكال"
    },
    {
        entity: "&comp;",
        character: "?",
        description: "رمز مركب (Composition)، يستخدم في الرياضيات للدلالة على تركيب الدوال",
        category: "أشكال"
    },

    // ============================================================
    // 8. رموز XML و HTML
    // ============================================================
    {
        entity: "&lt;",
        character: "<",
        description: "علامة أصغر من، تستخدم في XML و HTML لعرض وسم البداية",
        category: "XML/HTML"
    },
    {
        entity: "&gt;",
        character: ">",
        description: "علامة أكبر من، تستخدم في XML و HTML لعرض وسم النهاية",
        category: "XML/HTML"
    },
    {
        entity: "&amp;",
        character: "&",
        description: "علامة العطف، تستخدم في XML و HTML لبدء الكيانات",
        category: "XML/HTML"
    },
    {
        entity: "&quot;",
        character: '"',
        description: "علامة التنصيص، تستخدم في XML و HTML للسمات النصية",
        category: "XML/HTML"
    },
    {
        entity: "&apos;",
        character: "'",
        description: "علامة التنصيص المفردة، تستخدم في XML و HTML للسمات النصية",
        category: "XML/HTML"
    },
    {
        entity: "&lt;",
        character: "<",
        description: "تمثيل آمن لعلامة < في XML و HTML لمنع تفسيرها كوسم",
        category: "XML/HTML"
    },
    {
        entity: "&gt;",
        character: ">",
        description: "تمثيل آمن لعلامة > في XML و HTML لمنع تفسيرها كوسم",
        category: "XML/HTML"
    },
    {
        entity: "&amp;",
        character: "&",
        description: "تمثيل آمن لعلامة & في XML و HTML لمنع تفسيرها كبداية كيان",
        category: "XML/HTML"
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.entitiesData = entitiesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = entitiesData;
}