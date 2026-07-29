// ============================================================
// sass-features.js
// ميزات Sass/SCSS (Sass Features)
// تشرح جميع ميزات Sass و SCSS مع أمثلة واستخدامات
// ============================================================

const sassFeaturesData = [
    // ============================================================
    // 1. المتغيرات (Variables)
    // ============================================================
    {
        tag: "sass-variables",
        description: "المتغيرات في Sass تسمح بتخزين القيم وإعادة استخدامها، وهي مختلفة عن CSS Variables (تعمل في وقت الترجمة)",
        properties: [
            {
                name: "المتغيرات",
                description: "تعريف واستخدام المتغيرات في Sass (تبدأ بـ $)",
                values: [
                    { value: "$primary-color: #007bff;", description: "تعريف متغير لون أساسي" },
                    { value: "$font-size-base: 16px;", description: "تعريف متغير حجم خط" },
                    { value: "$spacing-unit: 8px;", description: "تعريف متغير وحدة مسافات" },
                    { value: "$border-radius: 4px;", description: "تعريف متغير انحناء" },
                    { value: "$shadow: 0 2px 4px rgba(0,0,0,0.1);", description: "تعريف متغير ظل" },
                    { value: "color: $primary-color;", description: "استخدام المتغير في خاصية" },
                    { value: "font-size: $font-size-base;", description: "استخدام المتغير" },
                    { value: "margin: $spacing-unit * 2;", description: "استخدام المتغير في عملية حسابية" }
                ]
            },
            {
                name: "نطاق المتغيرات",
                description: "المتغيرات في Sass لها نطاق (Scope) مثلها مثل لغات البرمجة",
                values: [
                    { value: "$global-var: 10px; /* متغير عام */ .selector { $local-var: 20px; /* متغير محلي */ }", description: "متغيرات عامة ومحلية" },
                    { value: "!default", description: "تعريف متغير بقيمة افتراضية يمكن تجاوزها" },
                    { value: "!global", description: "يجعل المتغير عاماً حتى لو عُرف داخل نطاق محلي" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. التضمين (Nesting)
    // ============================================================
    {
        tag: "sass-nesting",
        description: "التضمين في Sass يسمح بكتابة المحددات المتداخلة بطريقة منظمة تشبه هرمية HTML",
        properties: [
            {
                name: "التضمين",
                description: "كتابة المحددات المتداخلة",
                values: [
                    { value: ".nav { ul { list-style: none; } li { display: inline-block; } a { text-decoration: none; } }", description: "تضمين محددات القائمة" },
                    { value: ".card { .card-header { padding: 16px; } .card-body { padding: 20px; } .card-footer { padding: 12px; } }", description: "تضمين أجزاء البطاقة" }
                ]
            },
            {
                name: "المرجع الأب (&)",
                description: "استخدام & للإشارة إلى المحدد الأب",
                values: [
                    { value: ".btn { &:hover { background: darken(#007bff, 10%); } &:active { transform: scale(0.95); } }", description: "تضمين :hover و :active" },
                    { value: ".card { &--primary { border-color: blue; } &--secondary { border-color: gray; } }", description: "نمط BEM باستخدام &" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. المزج (Mixins)
    // ============================================================
    {
        tag: "sass-mixins",
        description: "المزج في Sass يسمح بتجميع مجموعة من الأنماط وإعادة استخدامها مع إمكانية تمرير معاملات",
        properties: [
            {
                name: "Mixins",
                description: "تعريف واستخدام الـ Mixins",
                values: [
                    { value: "@mixin flex-center { display: flex; justify-content: center; align-items: center; }", description: "تعريف Mixin لتوسيط العناصر" },
                    { value: ".container { @include flex-center; }", description: "استخدام Mixin" },
                    { value: "@mixin box-shadow($x, $y, $blur, $color) { box-shadow: $x $y $blur $color; }", description: "Mixin مع معاملات" },
                    { value: ".card { @include box-shadow(0, 4px, 12px, rgba(0,0,0,0.1)); }", description: "استخدام Mixin مع معاملات" }
                ]
            },
            {
                name: "Mixins مع قيم افتراضية",
                description: "تحديد قيم افتراضية للمعاملات",
                values: [
                    { value: "@mixin border-radius($radius: 4px) { border-radius: $radius; }", description: "Mixin مع قيمة افتراضية" },
                    { value: ".btn { @include border-radius(8px); }", description: "استخدام بقيمة مخصصة" }
                ]
            },
            {
                name: "Mixins مع Content",
                description: "تمرير محتوى إلى الـ Mixin",
                values: [
                    { value: "@mixin media($breakpoint) { @media (min-width: $breakpoint) { @content; } }", description: "Mixin لاستعلامات الوسائط" },
                    { value: "@include media(768px) { .container { padding: 20px; } }", description: "استخدام مع محتوى" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. الدوال (Functions)
    // ============================================================
    {
        tag: "sass-functions",
        description: "الدوال في Sass تسمح بإجراء عمليات حسابية ومنطقية وإرجاع قيم",
        properties: [
            {
                name: "دوال مخصصة",
                description: "تعريف واستخدام الدوال في Sass",
                values: [
                    { value: "@function double($value) { @return $value * 2; }", description: "دالة تضاعف القيمة" },
                    { value: ".element { width: double(50px); }", description: "استخدام الدالة" },
                    { value: "@function px-to-rem($px) { @return $px / 16px * 1rem; }", description: "دالة تحويل px إلى rem" },
                    { value: "font-size: px-to-rem(16px);", description: "استخدام دالة التحويل" }
                ]
            },
            {
                name: "دوال مضمنة",
                description: "دوال مضمنة في Sass",
                values: [
                    { value: "darken(#007bff, 10%)", description: "تغميق اللون" },
                    { value: "lighten(#000, 20%)", description: "تفتيح اللون" },
                    { value: "rgba(#007bff, 0.5)", description: "إضافة شفافية" },
                    { value: "percentage(0.5)", description: "تحويل إلى نسبة مئوية" },
                    { value: "floor(12.7px)", description: "تقريب لأسفل" },
                    { value: "ceil(12.3px)", description: "تقريب لأعلى" },
                    { value: "round(12.5px)", description: "تقريب لأقرب قيمة" },
                    { value: "random(100)", description: "رقم عشوائي من 0 إلى 100" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. الإرث (Extend/Inheritance)
    // ============================================================
    {
        tag: "sass-extend",
        description: "الإرث في Sass يسمح بمشاركة الأنماط بين المحددات المختلفة (مشابه للوراثة في البرمجة)",
        properties: [
            {
                name: "@extend",
                description: "وراثة الأنماط من محدد آخر",
                values: [
                    { value: "%message-shared { border: 1px solid #ccc; padding: 10px; color: #333; }", description: "Class placeholder" },
                    { value: ".success { @extend %message-shared; border-color: green; }", description: "وراثة الأنماط وإضافة تعديلات" },
                    { value: ".error { @extend %message-shared; border-color: red; }", description: "وراثة الأنماط وتخصيصها" }
                ]
            },
            {
                name: "Placeholder Selectors",
                description: "محددات مكان (Placeholder) لا تُترجم إلى CSS إلا عند استخدامها",
                values: [
                    { value: "%flex-center { display: flex; align-items: center; justify-content: center; }", description: "Placeholder" },
                    { value: ".header { @extend %flex-center; }", description: "استخدام placeholder" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. العمليات الحسابية (Operations)
    // ============================================================
    {
        tag: "sass-operations",
        description: "Sass تدعم العمليات الحسابية على القيم والألوان",
        properties: [
            {
                name: "العمليات الحسابية",
                description: "إجراء عمليات حسابية على القيم",
                values: [
                    { value: "width: 100% / 3;", description: "قسمة" },
                    { value: "margin: 10px + 20px;", description: "جمع" },
                    { value: "padding: 30px - 10px;", description: "طرح" },
                    { value: "font-size: 16px * 1.5;", description: "ضرب" },
                    { value: "color: #ff0000 + #0000ff;", description: "جمع ألوان" }
                ]
            },
            {
                name: "عمليات على الألوان",
                description: "تعديل الألوان باستخدام العمليات",
                values: [
                    { value: "color: #ff0000 + #0000ff;", description: "#ff00ff" },
                    { value: "color: #ff0000 - #0000ff;", description: "#ff00ff" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. استيراد (Import)
    // ============================================================
    {
        tag: "sass-import",
        description: "استيراد ملفات Sass/SCSS أخرى",
        properties: [
            {
                name: "@import و @use و @forward",
                description: "طرق استيراد الملفات في Sass",
                values: [
                    { value: "@import 'variables';", description: "استيراد ملف (قديم)" },
                    { value: "@use 'variables' as v;", description: "استيراد ملف مع مساحة اسم" },
                    { value: "$primary-color: v.$primary-color;", description: "استخدام متغير من ملف مستورد" },
                    { value: "@forward 'variables';", description: "إعادة تصدير ملف" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. التحكم في التدفق (Control Flow)
    // ============================================================
    {
        tag: "sass-control-flow",
        description: "أوامر التحكم في التدفق مثل الشرط والحلقات",
        properties: [
            {
                name: "@if / @else",
                description: "شروط في Sass",
                values: [
                    { value: "@if $theme == 'dark' { background: #1a1a2e; } @else { background: #ffffff; }", description: "شرط للثيم" },
                    { value: "@if $size > 10px { font-size: $size; } @else { font-size: 10px; }", description: "شرط على الحجم" }
                ]
            },
            {
                name: "@each",
                description: "التكرار على قائمة",
                values: [
                    { value: "@each $color in red, blue, green { .color-#{$color} { color: $color; } }", description: "إنشاء فئات لكل لون" },
                    { value: "@each $name, $color in (primary: #007bff, secondary: #6c757d) { .btn-#{$name} { background: $color; } }", description: "تكرار على خريطة" }
                ]
            },
            {
                name: "@for",
                description: "حلقة for",
                values: [
                    { value: "@for $i from 1 through 5 { .item-#{$i} { width: 20% * $i; } }", description: "إنشاء 5 فئات بعروض مختلفة" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. أمثلة عملية
    // ============================================================
    {
        tag: "sass-examples",
        description: "أمثلة عملية متقدمة لاستخدام Sass",
        properties: [
            {
                name: "نظام ألوان متكامل",
                description: "إنشاء نظام ألوان باستخدام Sass",
                values: [
                    { value: "$colors: ( primary: #007bff, secondary: #6c757d, success: #28a745, danger: #dc3545 ); @each $name, $color in $colors { .bg-#{$name} { background: $color; } .text-#{$name} { color: $color; } .border-#{$name} { border-color: $color; } }", description: "نظام ألوان كامل" }
                ]
            },
            {
                name: "نظام مسافات",
                description: "إنشاء نظام مسافات باستخدام Sass",
                values: [
                    { value: "$spacing: ( xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px ); @each $name, $value in $spacing { .m-#{$name} { margin: $value; } .p-#{$name} { padding: $value; } }", description: "نظام مسافات كامل" }
                ]
            },
            {
                name: "استعلامات وسائط",
                description: "Mixins لاستعلامات الوسائط",
                values: [
                    { value: "@mixin mobile { @media (max-width: 768px) { @content; } } @mixin tablet { @media (min-width: 769px) and (max-width: 1024px) { @content; } } @mixin desktop { @media (min-width: 1025px) { @content; } }", description: "Mixins للتجاوب" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. نصائح وإرشادات
    // ============================================================
    {
        tag: "sass-tips",
        description: "نصائح وإرشادات مهمة لاستخدام Sass",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح لاستخدام Sass بشكل فعال",
                values: [
                    { value: "استخدم المتغيرات للألوان", description: "يسهل تغيير الثيم" },
                    { value: "استخدم Mixins للأنماط المتكررة", description: "يقلل التكرار" },
                    { value: "استخدم Placeholder للإرث", description: "يقلل حجم الـ CSS" },
                    { value: "نظّم الملفات", description: "قسّم إلى ملفات صغيرة" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام Sass",
                values: [
                    { value: "نسيان $ في المتغيرات", description: "$color وليس color" },
                    { value: "استخدام @extend مع محددات غير placeholder", description: "قد ينتج كوداً زائداً" },
                    { value: "نسيان @include", description: "استخدام mixin بدون @include" },
                    { value: "خلط بين @import و @use", description: "@use هو الأحدث" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.sassFeaturesData = sassFeaturesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sassFeaturesData;
}