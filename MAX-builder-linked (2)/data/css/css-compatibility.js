// ============================================================
// css-compatibility.js
// توافق المتصفحات (Browser Compatibility) في CSS
// تشرح توافق الخصائص الرئيسية مع المتصفحات المختلفة
// ============================================================

const cssCompatibilityData = [
    // ============================================================
    // 1. توافق الخصائص الرئيسية
    // ============================================================
    {
        tag: "feature-compatibility",
        description: "توافق خصائص CSS الرئيسية مع المتصفحات",
        properties: [
            {
                name: "Flexbox",
                description: "دعم Flexbox عبر المتصفحات",
                values: [
                    { value: "Chrome", description: "21+ (دعم كامل من 29)" },
                    { value: "Firefox", description: "22+ (دعم كامل من 28)" },
                    { value: "Safari", description: "6.1+ (دعم كامل من 9)" },
                    { value: "Edge", description: "12+ (دعم كامل)" },
                    { value: "IE", description: "10+ (جزئي مع بادئات)" },
                    { value: "Opera", description: "12.1+" }
                ]
            },
            {
                name: "CSS Grid",
                description: "دعم CSS Grid عبر المتصفحات",
                values: [
                    { value: "Chrome", description: "57+ (دعم كامل)" },
                    { value: "Firefox", description: "52+ (دعم كامل)" },
                    { value: "Safari", description: "10.1+ (دعم كامل)" },
                    { value: "Edge", description: "16+ (دعم كامل)" },
                    { value: "IE", description: "غير مدعوم (10-11 يدعم جزئياً ببادئات)" },
                    { value: "Opera", description: "44+ (دعم كامل)" }
                ]
            },
            {
                name: "Custom Properties (CSS Variables)",
                description: "دعم المتغيرات المخصصة",
                values: [
                    { value: "Chrome", description: "49+" },
                    { value: "Firefox", description: "31+" },
                    { value: "Safari", description: "9.1+" },
                    { value: "Edge", description: "15+" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "36+" }
                ]
            },
            {
                name: "CSS Animations",
                description: "دعم الرسوم المتحركة",
                values: [
                    { value: "Chrome", description: "43+ (بدون بادئات)" },
                    { value: "Firefox", description: "16+ (بدون بادئات)" },
                    { value: "Safari", description: "9+ (بدون بادئات)" },
                    { value: "Edge", description: "12+ (بدون بادئات)" },
                    { value: "IE", description: "10+ (مع بادئات)" },
                    { value: "Opera", description: "30+ (بدون بادئات)" }
                ]
            },
            {
                name: "CSS Transitions",
                description: "دعم الانتقالات",
                values: [
                    { value: "Chrome", description: "26+ (بدون بادئات)" },
                    { value: "Firefox", description: "16+ (بدون بادئات)" },
                    { value: "Safari", description: "9+ (بدون بادئات)" },
                    { value: "Edge", description: "12+ (بدون بادئات)" },
                    { value: "IE", description: "10+ (مع بادئات)" },
                    { value: "Opera", description: "12.1+ (بدون بادئات)" }
                ]
            },
            {
                name: "CSS Transforms",
                description: "دعم التحويلات 2D و 3D",
                values: [
                    { value: "Chrome", description: "36+ (بدون بادئات)" },
                    { value: "Firefox", description: "16+ (بدون بادئات)" },
                    { value: "Safari", description: "9+ (بدون بادئات)" },
                    { value: "Edge", description: "12+ (بدون بادئات)" },
                    { value: "IE", description: "10+ (مع بادئات للـ 2D)" },
                    { value: "Opera", description: "23+ (بدون بادئات)" }
                ]
            },
            {
                name: "Container Queries",
                description: "دعم استعلامات الحاويات",
                values: [
                    { value: "Chrome", description: "105+" },
                    { value: "Firefox", description: "110+" },
                    { value: "Safari", description: "16+" },
                    { value: "Edge", description: "105+" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "91+" }
                ]
            },
            {
                name: "Subgrid",
                description: "دعم Subgrid في CSS Grid",
                values: [
                    { value: "Chrome", description: "117+" },
                    { value: "Firefox", description: "71+" },
                    { value: "Safari", description: "16+" },
                    { value: "Edge", description: "117+" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "103+" }
                ]
            },
            {
                name: "backdrop-filter",
                description: "دعم تأثير الزجاج المصنفر",
                values: [
                    { value: "Chrome", description: "76+ (مع -webkit-)" },
                    { value: "Firefox", description: "103+ (مع -moz- لفترة)" },
                    { value: "Safari", description: "9+ (مع -webkit-)" },
                    { value: "Edge", description: "17+ (مع -webkit-)" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "63+ (مع -webkit-)" }
                ]
            },
            {
                name: "aspect-ratio",
                description: "دعم نسبة العرض إلى الارتفاع",
                values: [
                    { value: "Chrome", description: "88+" },
                    { value: "Firefox", description: "87+" },
                    { value: "Safari", description: "15+" },
                    { value: "Edge", description: "88+" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "74+" }
                ]
            },
            {
                name: "color-scheme",
                description: "دعم تفضيلات الألوان",
                values: [
                    { value: "Chrome", description: "81+" },
                    { value: "Firefox", description: "96+" },
                    { value: "Safari", description: "13+" },
                    { value: "Edge", description: "81+" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "68+" }
                ]
            },
            {
                name: "@property",
                description: "دعم تعريف المتغيرات المخصصة",
                values: [
                    { value: "Chrome", description: "85+" },
                    { value: "Firefox", description: "95+" },
                    { value: "Safari", description: "16.4+" },
                    { value: "Edge", description: "85+" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "71+" }
                ]
            },
            {
                name: "CSS Nesting",
                description: "دعم التضمين (Nesting) في CSS",
                values: [
                    { value: "Chrome", description: "120+" },
                    { value: "Firefox", description: "117+" },
                    { value: "Safari", description: "17.2+" },
                    { value: "Edge", description: "120+" },
                    { value: "IE", description: "غير مدعوم" },
                    { value: "Opera", description: "106+" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. البادئات (Vendor Prefixes)
    // ============================================================
    {
        tag: "vendor-prefixes",
        description: "البادئات الخاصة بالمتصفحات لضمان التوافق",
        properties: [
            {
                name: "البادئات الشائعة",
                description: "البادئات المستخدمة للخصائص التجريبية",
                values: [
                    { value: "-webkit-", description: "Safari, Chrome (ومعظم المتصفحات المبنية على WebKit/Blink)" },
                    { value: "-moz-", description: "Firefox" },
                    { value: "-ms-", description: "Internet Explorer, Edge (القديم)" },
                    { value: "-o-", description: "Opera (القديم)" },
                    { value: "-khtml-", description: "Konqueror (قديم جداً)" }
                ]
            },
            {
                name: "أمثلة على استخدام البادئات",
                description: "كيفية كتابة الخصائص مع البادئات",
                values: [
                    { value: "-webkit-border-radius: 10px; border-radius: 10px;", description: "زوايا دائرية" },
                    { value: "-webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2); box-shadow: 0 2px 4px rgba(0,0,0,0.2);", description: "ظل" },
                    { value: "-webkit-transition: all 0.3s; transition: all 0.3s;", description: "انتقال" },
                    { value: "-webkit-transform: rotate(45deg); transform: rotate(45deg);", description: "تحويل" },
                    { value: "-webkit-animation: slide 1s; animation: slide 1s;", description: "رسوم متحركة" },
                    { value: "-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);", description: "فلاتر الخلفية" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. نصائح للتوافق
    // ============================================================
    {
        tag: "compatibility-tips",
        description: "نصائح لضمان توافق CSS مع جميع المتصفحات",
        properties: [
            {
                name: "نصائح التوافق",
                description: "إرشادات لتحسين التوافق",
                values: [
                    { value: "استخدم @supports", description: "لكشف دعم الخصائص" },
                    { value: "قدم بدائل (Fallbacks)", description: "للمتصفحات القديمة" },
                    { value: "استخدم Autoprefixer", description: "لإضافة البادئات تلقائياً" },
                    { value: "اختبر في متصفحات متعددة", description: "استخدم BrowserStack أو أدوات مشابهة" },
                    { value: "استخدم CSS Reset", description: "لتوحيد الأنماط الافتراضية" }
                ]
            },
            {
                name: "الخصائص التي تحتاج بادئات",
                description: "خصائص قد تحتاج بادئات في بعض المتصفحات",
                values: [
                    { value: "backdrop-filter", description: "Safari و Chrome يحتاجان -webkit-" },
                    { value: "flexbox", description: "Safari 8- يحتاج -webkit-" },
                    { value: "grid", description: "IE 10-11 يحتاج -ms-" },
                    { value: "transform", description: "IE 9-10 يحتاج -ms-" },
                    { value: "transition", description: "IE 10 يحتاج -ms-" },
                    { value: "animation", description: "IE 10 يحتاج -ms-، Safari يحتاج -webkit-" },
                    { value: "user-select", description: "جميع المتصفحات تحتاج بادئات" },
                    { value: "appearance", description: "جميع المتصفحات تحتاج بادئات" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.cssCompatibilityData = cssCompatibilityData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cssCompatibilityData;
}