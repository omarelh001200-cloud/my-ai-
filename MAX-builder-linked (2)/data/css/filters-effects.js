// ============================================================
// filters-effects.js
// خصائص المؤثرات البصرية (Filters & Effects) في CSS
// تتيح تطبيق تأثيرات بصرية على العناصر مثل التمويه، التدرج الرمادي، السطوع، التباين، والظلال
// ============================================================

const filtersEffectsData = [
    // ============================================================
    // 1. filter (الفلاتر على العنصر)
    // ============================================================
    {
        tag: "filter",
        description: "يطبق تأثيرات بصرية على العنصر (صورة، نص، أو أي عنصر آخر)، يمكن استخدام فلاتر متعددة معاً",
        properties: [
            // -------- filter (الخاصية الرئيسية) --------
            {
                name: "filter",
                description: "الخاصية الرئيسية لتطبيق الفلاتر على العنصر، يمكن دمج عدة فلاتر في نفس الخاصية",
                values: [
                    { value: "none", description: "بدون فلاتر - يعيد العنصر إلى حالته الطبيعية (القيمة الافتراضية)" },
                    
                    // ------ blur (تمويه) ------
                    { value: "blur(0px)", description: "بدون تمويه" },
                    { value: "blur(1px)", description: "تمويه خفيف جداً - 1 بكسل" },
                    { value: "blur(2px)", description: "تمويه خفيف - 2 بكسل" },
                    { value: "blur(3px)", description: "تمويه متوسط خفيف - 3 بكسل" },
                    { value: "blur(4px)", description: "تمويه متوسط - 4 بكسل" },
                    { value: "blur(5px)", description: "تمويه متوسط واضح - 5 بكسل" },
                    { value: "blur(6px)", description: "تمويه متوسط - 6 بكسل" },
                    { value: "blur(8px)", description: "تمويه واضح - 8 بكسل" },
                    { value: "blur(10px)", description: "تمويه قوي - 10 بكسل" },
                    { value: "blur(12px)", description: "تمويه قوي جداً - 12 بكسل" },
                    { value: "blur(15px)", description: "تمويه قوي جداً - 15 بكسل" },
                    { value: "blur(20px)", description: "تمويه شديد - 20 بكسل" },
                    { value: "blur(50px)", description: "تمويه شديد جداً - 50 بكسل" },
                    
                    // ------ brightness (سطوع) ------
                    { value: "brightness(0)", description: "أسود بالكامل - بدون سطوع" },
                    { value: "brightness(0.25)", description: "سطوع 25% - معتم جداً" },
                    { value: "brightness(0.5)", description: "سطوع 50% - نصف السطوع" },
                    { value: "brightness(0.75)", description: "سطوع 75% - مظلم قليلاً" },
                    { value: "brightness(1)", description: "سطوع طبيعي 100% (القيمة الافتراضية)" },
                    { value: "brightness(1.25)", description: "سطوع 125% - ساطع قليلاً" },
                    { value: "brightness(1.5)", description: "سطوع 150% - ساطع" },
                    { value: "brightness(1.75)", description: "سطوع 175% - ساطع جداً" },
                    { value: "brightness(2)", description: "سطوع 200% - ساطع جداً" },
                    { value: "brightness(2.5)", description: "سطوع 250% - شديد السطوع" },
                    { value: "brightness(3)", description: "سطوع 300% - شديد السطوع" },
                    { value: "brightness(500%)", description: "سطوع 500% - أبيض بالكامل" },
                    
                    // ------ contrast (تباين) ------
                    { value: "contrast(0)", description: "تباين صفر - رمادي بالكامل" },
                    { value: "contrast(0.25)", description: "تباين 25% - منخفض جداً" },
                    { value: "contrast(0.5)", description: "تباين 50% - منخفض" },
                    { value: "contrast(0.75)", description: "تباين 75% - منخفض قليلاً" },
                    { value: "contrast(1)", description: "تباين طبيعي 100% (القيمة الافتراضية)" },
                    { value: "contrast(1.25)", description: "تباين 125% - مرتفع قليلاً" },
                    { value: "contrast(1.5)", description: "تباين 150% - مرتفع" },
                    { value: "contrast(1.75)", description: "تباين 175% - مرتفع جداً" },
                    { value: "contrast(2)", description: "تباين 200% - مرتفع جداً" },
                    { value: "contrast(2.5)", description: "تباين 250% - شديد التباين" },
                    { value: "contrast(3)", description: "تباين 300% - شديد التباين" },
                    { value: "contrast(500%)", description: "تباين 500% - تباين مفرط" },
                    
                    // ------ grayscale (تدرج رمادي) ------
                    { value: "grayscale(0%)", description: "بدون تأثير - ألوان كاملة (القيمة الافتراضية)" },
                    { value: "grayscale(25%)", description: "تدرج رمادي 25% - ألوان باهتة" },
                    { value: "grayscale(50%)", description: "تدرج رمادي 50% - نصف رمادي" },
                    { value: "grayscale(75%)", description: "تدرج رمادي 75% - شبه رمادي" },
                    { value: "grayscale(100%)", description: "تدرج رمادي كامل - أبيض وأسود فقط" },
                    
                    // ------ hue-rotate (تدوير درجة اللون) ------
                    { value: "hue-rotate(0deg)", description: "بدون تدوير (القيمة الافتراضية)" },
                    { value: "hue-rotate(15deg)", description: "تدوير 15 درجة - تغير طفيف" },
                    { value: "hue-rotate(30deg)", description: "تدوير 30 درجة" },
                    { value: "hue-rotate(45deg)", description: "تدوير 45 درجة" },
                    { value: "hue-rotate(60deg)", description: "تدوير 60 درجة" },
                    { value: "hue-rotate(90deg)", description: "تدوير 90 درجة - تغير كبير" },
                    { value: "hue-rotate(120deg)", description: "تدوير 120 درجة" },
                    { value: "hue-rotate(150deg)", description: "تدوير 150 درجة" },
                    { value: "hue-rotate(180deg)", description: "تدوير 180 درجة - ألوان معكوسة" },
                    { value: "hue-rotate(210deg)", description: "تدوير 210 درجة" },
                    { value: "hue-rotate(240deg)", description: "تدوير 240 درجة" },
                    { value: "hue-rotate(270deg)", description: "تدوير 270 درجة" },
                    { value: "hue-rotate(300deg)", description: "تدوير 300 درجة" },
                    { value: "hue-rotate(330deg)", description: "تدوير 330 درجة" },
                    { value: "hue-rotate(360deg)", description: "تدوير كامل - يعود إلى الأصل" },
                    { value: "hue-rotate(-45deg)", description: "تدوير عكسي 45 درجة" },
                    { value: "hue-rotate(0.5turn)", description: "نصف دورة (180 درجة)" },
                    { value: "hue-rotate(1turn)", description: "دورة كاملة (360 درجة)" },
                    
                    // ------ invert (عكس الألوان) ------
                    { value: "invert(0%)", description: "بدون عكس - ألوان طبيعية (القيمة الافتراضية)" },
                    { value: "invert(25%)", description: "عكس 25% - تأثير خفيف" },
                    { value: "invert(50%)", description: "عكس 50% - تأثير متوسط" },
                    { value: "invert(75%)", description: "عكس 75% - تأثير قوي" },
                    { value: "invert(100%)", description: "عكس كامل - ألوان معكوسة بالكامل" },
                    
                    // ------ opacity (شفافية) ------
                    { value: "opacity(0)", description: "شفاف بالكامل - غير مرئي" },
                    { value: "opacity(0.1)", description: "شفاف 90% - بالكاد مرئي" },
                    { value: "opacity(0.25)", description: "شفاف 75% - مرئي قليلاً" },
                    { value: "opacity(0.5)", description: "شفاف 50% - نصف شفاف" },
                    { value: "opacity(0.75)", description: "شفاف 25% - شبه معتم" },
                    { value: "opacity(1)", description: "معتم بالكامل (القيمة الافتراضية)" },
                    { value: "opacity(0%)", description: "شفاف بالكامل - غير مرئي" },
                    { value: "opacity(100%)", description: "معتم بالكامل" },
                    
                    // ------ saturate (تشبع) ------
                    { value: "saturate(0%)", description: "بدون تشبع - تدرج رمادي" },
                    { value: "saturate(25%)", description: "تشبع 25% - باهت جداً" },
                    { value: "saturate(50%)", description: "تشبع 50% - باهت" },
                    { value: "saturate(75%)", description: "تشبع 75% - باهت قليلاً" },
                    { value: "saturate(100%)", description: "تشبع طبيعي (القيمة الافتراضية)" },
                    { value: "saturate(150%)", description: "تشبع 150% - مشبع" },
                    { value: "saturate(200%)", description: "تشبع 200% - مشبع جداً" },
                    { value: "saturate(250%)", description: "تشبع 250% - مشبع جداً" },
                    { value: "saturate(300%)", description: "تشبع 300% - شديد التشبع" },
                    { value: "saturate(500%)", description: "تشبع 500% - تشبع مفرط" },
                    
                    // ------ sepia (سيبيا - تأثير قديم) ------
                    { value: "sepia(0%)", description: "بدون تأثير (القيمة الافتراضية)" },
                    { value: "sepia(25%)", description: "تأثير سيبيا 25% - خفيف" },
                    { value: "sepia(50%)", description: "تأثير سيبيا 50% - متوسط" },
                    { value: "sepia(75%)", description: "تأثير سيبيا 75% - قوي" },
                    { value: "sepia(100%)", description: "تأثير سيبيا كامل - صورة قديمة" },
                    
                    // ------ drop-shadow (ظل مسقط) ------
                    { value: "drop-shadow(0 0 0 transparent)", description: "ظل شفاف - بدون ظل" },
                    { value: "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))", description: "ظل خفيف جداً" },
                    { value: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))", description: "ظل خفيف" },
                    { value: "drop-shadow(3px 3px 6px rgba(0,0,0,0.4))", description: "ظل متوسط" },
                    { value: "drop-shadow(4px 4px 8px rgba(0,0,0,0.5))", description: "ظل متوسط قوي" },
                    { value: "drop-shadow(5px 5px 10px rgba(0,0,0,0.6))", description: "ظل قوي" },
                    { value: "drop-shadow(8px 8px 16px rgba(0,0,0,0.7))", description: "ظل قوي جداً" },
                    { value: "drop-shadow(10px 10px 20px rgba(0,0,0,0.8))", description: "ظل شديد" },
                    { value: "drop-shadow(0 0 10px rgba(255,0,0,0.5))", description: "ظل أحمر متوهج" },
                    { value: "drop-shadow(0 0 20px rgba(0,0,255,0.5))", description: "ظل أزرق متوهج" },
                    { value: "drop-shadow(0 0 30px #ff6b6b)", description: "ظل متوهج بلون محدد" },
                    { value: "drop-shadow(0 0 40px rgba(255,215,0,0.6))", description: "ظل ذهبي متوهج" },
                    { value: "drop-shadow(0 -4px 8px rgba(0,0,0,0.3))", description: "ظل لأعلى" },
                    { value: "drop-shadow(4px 0 8px rgba(0,0,0,0.3))", description: "ظل لليمين" },
                    { value: "drop-shadow(-4px 0 8px rgba(0,0,0,0.3))", description: "ظل لليسار" },
                    
                    // ------ url (فلاتر SVG مخصصة) ------
                    { value: "url('#blur')", description: "فلتر مخصص من SVG باستخدام معرف" },
                    { value: "url('filters.svg#blur')", description: "فلتر مخصص من ملف SVG خارجي" },
                    
                    // ------ فلاتر متعددة معاً ------
                    { value: "brightness(1.2) contrast(150%)", description: "سطوع وتباين معاً" },
                    { value: "brightness(1.2) contrast(150%) blur(2px)", description: "ثلاثة فلاتر معاً" },
                    { value: "grayscale(100%) brightness(1.5)", description: "تدرج رمادي مع سطوع" },
                    { value: "sepia(50%) brightness(1.2) saturate(150%)", description: "ثلاثة فلاتر شائعة معاً" },
                    { value: "blur(5px) brightness(0.8) contrast(120%)", description: "تمويه مع سطوع وتباين" },
                    { value: "hue-rotate(45deg) saturate(200%)", description: "تدوير لون مع تشبع" },
                    { value: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) brightness(1.1)", description: "ظل مع سطوع" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 2. backdrop-filter (فلاتر الخلفية)
    // ============================================================
    {
        tag: "backdrop-filter",
        description: "يطبق فلاتر على الخلفية خلف العنصر (تأثير الزجاج المصنفر الشهير)، يجب أن يكون للعنصر خلفية شبه شفافة ليظهر التأثير",
        properties: [
            {
                name: "backdrop-filter",
                description: "يطبق فلاتر على الخلفية خلف العنصر، يخلق تأثيرات زجاجية وتأثيرات خلفية متقدمة",
                values: [
                    { value: "none", description: "بدون فلاتر على الخلفية (القيمة الافتراضية)" },
                    
                    // ------ blur (تمويه الخلفية) ------
                    { value: "blur(0px)", description: "بدون تمويه للخلفية" },
                    { value: "blur(1px)", description: "تمويه خلفية خفيف جداً" },
                    { value: "blur(2px)", description: "تمويه خلفية خفيف" },
                    { value: "blur(3px)", description: "تمويه خلفية متوسط خفيف" },
                    { value: "blur(4px)", description: "تمويه خلفية متوسط" },
                    { value: "blur(5px)", description: "تمويه خلفية متوسط واضح" },
                    { value: "blur(6px)", description: "تمويه خلفية متوسط" },
                    { value: "blur(8px)", description: "تمويه خلفية واضح" },
                    { value: "blur(10px)", description: "تمويه خلفية قوي - تأثير الزجاج المصنفر" },
                    { value: "blur(12px)", description: "تمويه خلفية قوي جداً" },
                    { value: "blur(15px)", description: "تمويه خلفية قوي جداً" },
                    { value: "blur(20px)", description: "تمويه خلفية شديد" },
                    { value: "blur(50px)", description: "تمويه خلفية شديد جداً" },
                    
                    // ------ brightness (سطوع الخلفية) ------
                    { value: "brightness(0.25)", description: "سطوع خلفية 25% - معتم جداً" },
                    { value: "brightness(0.5)", description: "سطوع خلفية 50% - معتم" },
                    { value: "brightness(0.75)", description: "سطوع خلفية 75% - معتم قليلاً" },
                    { value: "brightness(1)", description: "سطوع خلفية طبيعي (القيمة الافتراضية)" },
                    { value: "brightness(1.25)", description: "سطوع خلفية 125% - ساطع قليلاً" },
                    { value: "brightness(1.5)", description: "سطوع خلفية 150% - ساطع" },
                    { value: "brightness(2)", description: "سطوع خلفية 200% - ساطع جداً" },
                    
                    // ------ contrast (تباين الخلفية) ------
                    { value: "contrast(0.5)", description: "تباين خلفية 50% - منخفض" },
                    { value: "contrast(0.75)", description: "تباين خلفية 75% - منخفض قليلاً" },
                    { value: "contrast(1)", description: "تباين خلفية طبيعي (القيمة الافتراضية)" },
                    { value: "contrast(1.25)", description: "تباين خلفية 125% - مرتفع قليلاً" },
                    { value: "contrast(1.5)", description: "تباين خلفية 150% - مرتفع" },
                    { value: "contrast(2)", description: "تباين خلفية 200% - مرتفع جداً" },
                    
                    // ------ grayscale (تدرج رمادي للخلفية) ------
                    { value: "grayscale(25%)", description: "تدرج رمادي خلفية 25%" },
                    { value: "grayscale(50%)", description: "تدرج رمادي خلفية 50%" },
                    { value: "grayscale(75%)", description: "تدرج رمادي خلفية 75%" },
                    { value: "grayscale(100%)", description: "تدرج رمادي خلفية كامل" },
                    
                    // ------ hue-rotate (تدوير درجة لون الخلفية) ------
                    { value: "hue-rotate(15deg)", description: "تدوير لون الخلفية 15 درجة" },
                    { value: "hue-rotate(30deg)", description: "تدوير لون الخلفية 30 درجة" },
                    { value: "hue-rotate(45deg)", description: "تدوير لون الخلفية 45 درجة" },
                    { value: "hue-rotate(60deg)", description: "تدوير لون الخلفية 60 درجة" },
                    { value: "hue-rotate(90deg)", description: "تدوير لون الخلفية 90 درجة" },
                    { value: "hue-rotate(180deg)", description: "تدوير لون الخلفية 180 درجة" },
                    
                    // ------ invert (عكس ألوان الخلفية) ------
                    { value: "invert(25%)", description: "عكس ألوان الخلفية 25%" },
                    { value: "invert(50%)", description: "عكس ألوان الخلفية 50%" },
                    { value: "invert(75%)", description: "عكس ألوان الخلفية 75%" },
                    { value: "invert(100%)", description: "عكس ألوان الخلفية كامل" },
                    
                    // ------ saturate (تشبع الخلفية) ------
                    { value: "saturate(50%)", description: "تشبع خلفية 50% - باهت" },
                    { value: "saturate(75%)", description: "تشبع خلفية 75% - باهت قليلاً" },
                    { value: "saturate(100%)", description: "تشبع خلفية طبيعي (القيمة الافتراضية)" },
                    { value: "saturate(150%)", description: "تشبع خلفية 150% - مشبع" },
                    { value: "saturate(200%)", description: "تشبع خلفية 200% - مشبع جداً" },
                    
                    // ------ sepia (سيبيا للخلفية) ------
                    { value: "sepia(25%)", description: "تأثير سيبيا على الخلفية 25%" },
                    { value: "sepia(50%)", description: "تأثير سيبيا على الخلفية 50%" },
                    { value: "sepia(75%)", description: "تأثير سيبيا على الخلفية 75%" },
                    { value: "sepia(100%)", description: "تأثير سيبيا كامل على الخلفية" },
                    
                    // ------ فلاتر خلفية متعددة ------
                    { value: "blur(10px) brightness(0.8)", description: "تمويه مع تعتيم الخلفية" },
                    { value: "blur(10px) saturate(150%)", description: "تمويه مع تشبع الخلفية" },
                    { value: "blur(8px) contrast(120%) brightness(0.9)", description: "ثلاثة فلاتر خلفية معاً" },
                    { value: "blur(12px) sepia(30%)", description: "تمويه مع تأثير سيبيا" },
                    { value: "blur(6px) grayscale(50%)", description: "تمويه مع تدرج رمادي" },
                    { value: "blur(15px) hue-rotate(45deg)", description: "تمويه مع تدوير لون" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 3. البادئات الخاصة بالمتصفحات
    // ============================================================
    {
        tag: "vendor-prefixes",
        description: "البادئات الخاصة بالمتصفحات لضمان التوافق مع جميع المتصفحات، خاصة لميزة backdrop-filter",
        properties: [
            {
                name: "بادئات المتصفحات",
                description: "بعض المتصفحات تحتاج بادئات خاصة لتطبيق الفلاتر بشكل صحيح",
                values: [
                    { value: "-webkit-backdrop-filter", description: "بادئة لمتصفح Safari و Chrome القديم - تستخدم لخاصية backdrop-filter" },
                    { value: "-moz-backdrop-filter", description: "بادئة لمتصفح Firefox (نسخة قديمة) - نادراً ما تحتاج" },
                    { value: "-o-backdrop-filter", description: "بادئة لمتصفح Opera القديم" },
                    { value: "-ms-backdrop-filter", description: "بادئة لمتصفح Internet Explorer و Edge القديم" }
                ]
            },
            {
                name: "أمثلة للتوافق",
                description: "كيفية كتابة الفلاتر مع البادئات لضمان أوسع توافق",
                values: [
                    { value: "-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);", description: "طريقة كتابة backdrop-filter مع بادئة Safari" },
                    { value: "-webkit-filter: blur(5px); filter: blur(5px);", description: "طريقة كتابة filter مع بادئة Safari" },
                    { value: "-webkit-filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3)); filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));", description: "ظل مسقط مع بادئة" },
                    { value: "-webkit-filter: blur(5px) brightness(1.2); filter: blur(5px) brightness(1.2);", description: "فلاتر متعددة مع بادئة" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 4. تأثير الزجاج المصنفر (Glassmorphism)
    // ============================================================
    {
        tag: "glassmorphism",
        description: "تأثير الزجاج المصنفر الشهير باستخدام backdrop-filter مع خلفية شفافة، أحدث صيحات التصميم",
        properties: [
            {
                name: "تأثير الزجاج المصنفر",
                description: "مزيج من الشفافية والتمويه يخلق تأثيراً زجاجياً عصرياً",
                values: [
                    { value: "background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);", description: "تأثير زجاجي أساسي" },
                    { value: "background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px) saturate(180%); border-radius: 16px;", description: "زجاج مصنفر مع تشبع" },
                    { value: "background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(8px) brightness(1.1); border: 1px solid rgba(255, 255, 255, 0.15);", description: "زجاج مصنفر مع سطوع" },
                    { value: "background: rgba(0, 0, 0, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);", description: "زجاج مصنفر داكن" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. أمثلة عملية متقدمة
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية متقدمة للفلاتر والمؤثرات البصرية في سيناريوهات حقيقية",
        properties: [
            {
                name: "مثال 1 - تأثير التمرير على الصور",
                description: "تطبيق فلاتر عند تمرير الماوس على الصور",
                values: [
                    { value: ".image { transition: filter 0.3s ease; } .image:hover { filter: brightness(1.1) saturate(120%) drop-shadow(0 4px 12px rgba(0,0,0,0.3)); }", description: "تكبير سطوع وتشبع مع ظل عند التمرير" }
                ]
            },
            {
                name: "مثال 2 - تأثير الزجاج المصنفر الكامل",
                description: "تأثير زجاجي متكامل مع خلفية متدرجة",
                values: [
                    { value: ".glass { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px) saturate(180%); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }", description: "تأثير زجاج مصنفر كامل" }
                ]
            },
            {
                name: "مثال 3 - صورة بتدرج رمادي مع سطوع",
                description: "تحويل صورة إلى تدرج رمادي مع تحسين السطوع",
                values: [
                    { value: ".image { filter: grayscale(100%) brightness(1.2) contrast(120%); }", description: "تدرج رمادي مع سطوع وتباين" }
                ]
            },
            {
                name: "مثال 4 - تأثير الوهج (Glow) باستخدام drop-shadow",
                description: "تأثير توهج حول العنصر",
                values: [
                    { value: ".glow { filter: drop-shadow(0 0 20px rgba(255, 100, 0, 0.6)) drop-shadow(0 0 40px rgba(255, 100, 0, 0.4)); }", description: "توهج برتقالي متعدد الطبقات" }
                ]
            },
            {
                name: "مثال 5 - صور متحركة بتأثيرات متغيرة",
                description: "تغيير الفلاتر مع الحركة",
                values: [
                    { value: "@keyframes filterAnimation { 0% { filter: blur(0px) saturate(100%); } 50% { filter: blur(3px) saturate(200%); } 100% { filter: blur(0px) saturate(100%); } } .animated { animation: filterAnimation 3s ease-in-out infinite; }", description: "حركة دورية للفلاتر" }
                ]
            },
            {
                name: "مثال 6 - خلفية متحركة مع تأثير الزجاج",
                description: "خلفية متحركة مع تأثير زجاجي في المقدمة",
                values: [
                    { value: ".background { background: linear-gradient(45deg, #f093fb, #f5576c, #4facfe, #43e97b); background-size: 400% 400%; animation: gradient 10s ease infinite; } .glass-card { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.2); }", description: "خلفية متحركة مع بطاقة زجاجية" }
                ]
            },
            {
                name: "مثال 7 - تأثير النيون",
                description: "تأثير نيون باستخدام drop-shadow",
                values: [
                    { value: ".neon-text { color: #fff; filter: drop-shadow(0 0 10px #ff00ff) drop-shadow(0 0 20px #ff00ff) drop-shadow(0 0 40px #ff00ff); }", description: "نص بتأثير نيون وردي" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام الفلاتر والمؤثرات البصرية بشكل فعال",
        properties: [
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء الفلاتر",
                values: [
                    { value: "استخدم backdrop-filter بحذر", description: "يمكن أن يؤثر على الأداء، خاصة على الجوال" },
                    { value: "استخدم will-change", description: "will-change: filter, backdrop-filter يحسن الأداء للعناصر المتحركة" },
                    { value: "تجنب الفلاتر المتعددة الثقيلة", description: "كلما زاد عدد الفلاتر، زاد استهلاك المعالج" },
                    { value: "استخدم transform مع filter", description: "استخدام transform: translateZ(0) أو will-change يحفّز تسريع GPU" },
                    { value: "اختبر على الأجهزة الضعيفة", description: "تأكد من أن التأثيرات تعمل بسلاسة على الجوالات القديمة" }
                ]
            },
            {
                name: "نصائح إمكانية الوصول",
                description: "نصائح لجعل الفلاتر قابلة للوصول للجميع",
                values: [
                    { value: "دعم prefers-reduced-motion", description: "قلل الحركات للمستخدمين الذين يطلبون ذلك" },
                    { value: "تأكد من التباين", description: "بعض الفلاتر قد تقلل من تباين النص" },
                    { value: "لا تعتمد على الفلاتر فقط", description: "استخدم طرقاً إضافية لنقل المعلومات" }
                ]
            },
            {
                name: "نصائح التصميم",
                description: "نصائح لتصميم فلاتر جذابة",
                values: [
                    { value: "استخدم فلاتر خفيفة", description: "الفلاتر الثقيلة قد تبدو غير احترافية" },
                    { value: "جرب تأثير الزجاج المصنفر", description: "أحد أشهر اتجاهات التصميم حالياً" },
                    { value: "استخدم drop-shadow بدلاً من box-shadow", description: "drop-shadow يتبع شكل العنصر بدقة" },
                    { value: "أضف انتقالات", description: "استخدم transition: filter 0.3s ease لتحولات سلسة" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام الفلاتر وكيفية تجنبها",
                values: [
                    { value: "نسيان بادئة -webkit", description: "خاصة في Safari، يجب إضافة -webkit-backdrop-filter" },
                    { value: "استخدام relative units مع blur", description: "blur(50%) غير صحيح، استخدم px" },
                    { value: "استخدام drop-shadow مع box-shadow", description: "drop-shadow يختلف عن box-shadow في الشكل" },
                    { value: "نسيان backdrop-filter للزجاج", description: "بدون backdrop-filter يبقى العنصر شفافاً فقط" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.filtersEffectsData = filtersEffectsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = filtersEffectsData;
}