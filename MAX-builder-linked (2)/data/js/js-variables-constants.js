// ============================================================
// js-variables-constants.js
// المتغيرات والثوابت (Variables & Constants) في JavaScript
// تشرح جميع طرق تعريف المتغيرات والثوابت وقواعد النطاق (Scope)
// ============================================================

const jsVariablesConstantsData = [
    // ============================================================
    // 1. var - المتغير التقليدي
    // ============================================================
    {
        tag: "var",
        description: "يعرّف متغيراً قابلاً لإعادة التعيين، نطاقه الدالة (Function Scope) وليس الكتلة {}. أسلوب قديم، يُنصح باستخدام let أو const بدلاً منه",
        properties: [
            {
                name: "var",
                description: "تعريف متغير بنطاق دالة",
                values: [
                    { value: "var x = 5;", description: "تعريف متغير x بقيمة 5" },
                    { value: "var name = 'أحمد';", description: "تعريف متغير نصي" },
                    { value: "var isActive = true;", description: "تعريف متغير منطقي" },
                    { value: "var obj = {};", description: "تعريف كائن فارغ" },
                    { value: "var arr = [];", description: "تعريف مصفوفة فارغة" },
                    { value: "var a, b, c;", description: "تعريف عدة متغيرات بدون قيم" },
                    { value: "var a = 1, b = 2, c = 3;", description: "تعريف عدة متغيرات بقيم" },
                    { value: "var x;", description: "تعريف متغير بدون قيمة (تصبح undefined)" }
                ]
            },
            {
                name: "var - النطاق (Scope)",
                description: "نطاق var هو الدالة (Function Scope)، وليس الكتلة",
                values: [
                    { value: "function test() { var x = 5; } console.log(x); // ReferenceError", description: "x غير معرف خارج الدالة" },
                    { value: "if (true) { var x = 5; } console.log(x); // 5", description: "x معرف خارج الكتلة (لأن var لا يحترم الكتلة)" },
                    { value: "for (var i = 0; i < 10; i++) { } console.log(i); // 10", description: "i معرف خارج الحلقة" }
                ]
            },
            {
                name: "var - الرفع (Hoisting)",
                description: "var يتم رفعه إلى أعلى النطاق، مما يسمح باستخدامه قبل تعريفه (بقيمة undefined)",
                values: [
                    { value: "console.log(x); // undefined var x = 5;", description: "x موجود لكن قيمته undefined" },
                    { value: "function test() { console.log(y); // undefined var y = 10; }", description: "y موجود لكن undefined" }
                ]
            },
            {
                name: "var - إعادة التعريف",
                description: "يمكن إعادة تعريف var عدة مرات في نفس النطاق دون خطأ",
                values: [
                    { value: "var x = 5; var x = 10;", description: "إعادة تعريف x (مشكلة محتملة)" },
                    { value: "var x = 5; var x = 'hello';", description: "إعادة تعريف بنوع مختلف" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. let - المتغير بنطاق كتلة
    // ============================================================
    {
        tag: "let",
        description: "يعرّف متغيراً قابلاً لإعادة التعيين، نطاقه محصور داخل الكتلة {} التي عُرّف فيها (Block Scope)",
        properties: [
            {
                name: "let",
                description: "تعريف متغير بنطاق كتلة",
                values: [
                    { value: "let x = 5;", description: "تعريف متغير x بقيمة 5" },
                    { value: "let name = 'أحمد';", description: "تعريف متغير نصي" },
                    { value: "let isActive = true;", description: "تعريف متغير منطقي" },
                    { value: "let obj = {};", description: "تعريف كائن فارغ" },
                    { value: "let arr = [];", description: "تعريف مصفوفة فارغة" },
                    { value: "let a, b, c;", description: "تعريف عدة متغيرات بدون قيم" },
                    { value: "let a = 1, b = 2, c = 3;", description: "تعريف عدة متغيرات بقيم" },
                    { value: "let x;", description: "تعريف متغير بدون قيمة (تصبح undefined)" }
                ]
            },
            {
                name: "let - النطاق (Scope)",
                description: "نطاق let هو الكتلة (Block Scope) التي عُرف فيها",
                values: [
                    { value: "if (true) { let x = 5; } console.log(x); // ReferenceError", description: "x غير معرف خارج الكتلة" },
                    { value: "for (let i = 0; i < 10; i++) { } console.log(i); // ReferenceError", description: "i غير معرف خارج الحلقة" },
                    { value: "{ let x = 5; } console.log(x); // ReferenceError", description: "x غير معرف خارج الكتلة" }
                ]
            },
            {
                name: "let - Temporal Dead Zone (TDZ)",
                description: "المنطقة الميتة المؤقتة: لا يمكن استخدام let قبل تعريفه (عكس var)",
                values: [
                    { value: "console.log(x); // ReferenceError let x = 5;", description: "خطأ لأن x في TDZ" },
                    { value: "let x = 5; console.log(x); // 5", description: "يمكن استخدامه بعد التعريف" }
                ]
            },
            {
                name: "let - إعادة التعريف",
                description: "لا يمكن إعادة تعريف let في نفس النطاق",
                values: [
                    { value: "let x = 5; let x = 10; // SyntaxError", description: "خطأ: لا يمكن إعادة تعريف x" },
                    { value: "let x = 5; x = 10;", description: "يمكن تغيير القيمة" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. const - الثابت
    // ============================================================
    {
        tag: "const",
        description: "يعرّف ثابتاً لا يمكن إعادة تعيينه بعد التصريح، نطاقه محصور داخل الكتلة {} (Block Scope)",
        properties: [
            {
                name: "const",
                description: "تعريف ثابت (لا يمكن إعادة التعيين)",
                values: [
                    { value: "const PI = 3.14;", description: "تعريف ثابت رياضي" },
                    { value: "const NAME = 'أحمد';", description: "تعريف ثابت نصي" },
                    { value: "const IS_ACTIVE = true;", description: "تعريف ثابت منطقي" },
                    { value: "const MAX_SIZE = 100;", description: "تعريف ثابت رقمي" },
                    { value: "const COLORS = ['red', 'blue']", description: "تعريف ثابت مصفوفة (القيمة المرجعية ثابتة)" },
                    { value: "const CONFIG = { theme: 'dark' }", description: "تعريف ثابت كائن (القيمة المرجعية ثابتة)" }
                ]
            },
            {
                name: "const - النطاق (Scope)",
                description: "نطاق const هو الكتلة (Block Scope) مثل let",
                values: [
                    { value: "if (true) { const x = 5; } console.log(x); // ReferenceError", description: "x غير معرف خارج الكتلة" },
                    { value: "for (const i = 0; i < 10; i++) { } // خطأ", description: "const لا يمكن تغييره في الحلقة" }
                ]
            },
            {
                name: "const - Temporal Dead Zone (TDZ)",
                description: "const أيضاً في منطقة ميتة مؤقتة قبل التعريف",
                values: [
                    { value: "console.log(x); // ReferenceError const x = 5;", description: "خطأ لأن x في TDZ" },
                    { value: "const x = 5; console.log(x); // 5", description: "يمكن استخدامه بعد التعريف" }
                ]
            },
            {
                name: "const - إعادة التعيين",
                description: "لا يمكن إعادة تعيين const إطلاقاً",
                values: [
                    { value: "const x = 5; x = 10; // TypeError", description: "خطأ: لا يمكن إعادة تعيين const" },
                    { value: "const x = 5; const x = 10; // SyntaxError", description: "خطأ: لا يمكن إعادة تعريف const" }
                ]
            },
            {
                name: "const - التعديل على الكائنات والمصفوفات",
                description: "يمكن تعديل محتويات الكائنات والمصفوفات، لكن لا يمكن إعادة تعيين المرجع نفسه",
                values: [
                    { value: "const arr = [1, 2, 3]; arr.push(4);", description: "يمكن تعديل المصفوفة" },
                    { value: "const obj = { name: 'أحمد' }; obj.name = 'سارة';", description: "يمكن تعديل الكائن" },
                    { value: "const arr = [1, 2, 3]; arr = [4, 5, 6]; // TypeError", description: "لا يمكن إعادة تعيين المرجع" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. الكلمات المحجوزة (Reserved Words)
    // ============================================================
    {
        tag: "reserved-words",
        description: "الكلمات المحجوزة في JavaScript لا يمكن استخدامها كأسماء للمتغيرات أو الثوابت أو الدوال",
        properties: [
            {
                name: "الكلمات المحجوزة في ES5",
                description: "كلمات لا يمكن استخدامها كأسماء في JavaScript",
                values: [
                    { value: "break", description: "لإنهاء الحلقة أو switch" },
                    { value: "case", description: "في switch" },
                    { value: "catch", description: "في try/catch" },
                    { value: "class", description: "لتعريف صنف" },
                    { value: "const", description: "لتعريف ثابت" },
                    { value: "continue", description: "للتخطي في الحلقة" },
                    { value: "debugger", description: "للتوقف في المطور" },
                    { value: "default", description: "في switch" },
                    { value: "delete", description: "لحذف خاصية" },
                    { value: "do", description: "حلقة do...while" },
                    { value: "else", description: "في if" },
                    { value: "export", description: "لتصدير من وحدة" },
                    { value: "extends", description: "للوراثة في الأصناف" },
                    { value: "finally", description: "في try/catch" },
                    { value: "for", description: "حلقة for" },
                    { value: "function", description: "لتعريف دالة" },
                    { value: "if", description: "شرط if" },
                    { value: "import", description: "لاستيراد من وحدة" },
                    { value: "in", description: "للتكرار في for...in" },
                    { value: "instanceof", description: "للتأكد من النوع" },
                    { value: "new", description: "لإنشاء كائن" },
                    { value: "return", description: "لإرجاع قيمة من دالة" },
                    { value: "super", description: "للوصول للأب في الصنف" },
                    { value: "switch", description: "شرط switch" },
                    { value: "this", description: "السياق الحالي" },
                    { value: "throw", description: "لرمي خطأ" },
                    { value: "try", description: "للتجربة" },
                    { value: "typeof", description: "لمعرفة نوع القيمة" },
                    { value: "var", description: "لتعريف متغير" },
                    { value: "void", description: "لتقييم تعبير وإرجاع undefined" },
                    { value: "while", description: "حلقة while" },
                    { value: "with", description: "لتوسيع النطاق (مهمل)" },
                    { value: "yield", description: "في المولّدات" }
                ]
            },
            {
                name: "الكلمات المحجوزة في ES6+",
                description: "كلمات جديدة في الإصدارات الحديثة",
                values: [
                    { value: "await", description: "في الدوال غير المتزامنة" },
                    { value: "let", description: "لتعريف متغير" },
                    { value: "of", description: "في for...of" },
                    { value: "from", description: "في import" },
                    { value: "as", description: "في import/export" },
                    { value: "async", description: "لتعريف دالة غير متزامنة" },
                    { value: "static", description: "للخصائص الثابتة في الأصناف" },
                    { value: "get", description: "للخصائص المحسوبة (getter)" },
                    { value: "set", description: "للخصائص المحسوبة (setter)" },
                    { value: "constructor", description: "باني الصنف" },
                    { value: "has", description: "في Proxy (handler.has)" },
                    { value: "target", description: "في Proxy (المعطى الهدف)" },
                    { value: "meta", description: "في import.meta" }
                ]
            },
            {
                name: "الكلمات المحجوزة المستقبلية",
                description: "كلمات قد تصبح محجوزة في المستقبل (لا تستخدمها)",
                values: [
                    { value: "enum", description: "مقترح في المستقبل" },
                    { value: "implements", description: "مقترح في المستقبل" },
                    { value: "interface", description: "مقترح في المستقبل" },
                    { value: "package", description: "مقترح في المستقبل" },
                    { value: "private", description: "للحقول الخاصة (قيد التطوير)" },
                    { value: "protected", description: "للحقول المحمية (مقترح)" },
                    { value: "public", description: "للحقول العامة (قيد التطوير)" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. نطاق المتغيرات (Scope)
    // ============================================================
    {
        tag: "scope",
        description: "نطاق المتغيرات يحدد أين يمكن الوصول إلى المتغير في الكود",
        properties: [
            {
                name: "النطاق العام (Global Scope)",
                description: "المتغيرات المعرفة خارج أي دالة أو كتلة تكون عامة",
                values: [
                    { value: "var global = 5;", description: "متغير عام (var)" },
                    { value: "let global = 5;", description: "متغير عام (let)" },
                    { value: "const global = 5;", description: "ثابت عام (const)" },
                    { value: "window.global", description: "الوصول للمتغير العام (في المتصفح)" }
                ]
            },
            {
                name: "النطاق المحلي (Local Scope)",
                description: "المتغيرات المعرفة داخل دالة تكون محلية",
                values: [
                    { value: "function test() { var x = 5; }", description: "x محلي داخل الدالة" },
                    { value: "function test() { let x = 5; }", description: "x محلي داخل الدالة" },
                    { value: "function test() { const x = 5; }", description: "x محلي داخل الدالة" },
                    { value: "(function() { var x = 5; })();", description: "IIFE تنشئ نطاقاً محلياً" }
                ]
            },
            {
                name: "النطاق الكتلي (Block Scope)",
                description: "المتغيرات المعرفة بـ let أو const داخل {} تكون محصورة",
                values: [
                    { value: "if (true) { let x = 5; }", description: "x غير مرئي خارج if" },
                    { value: "for (let i = 0; i < 10; i++) { }", description: "i غير مرئي خارج الحلقة" },
                    { value: "{ let x = 5; }", description: "كتلة مستقلة" }
                ]
            },
            {
                name: "النطاق الهرمي (Scope Chain)",
                description: "المتغيرات تُبحث في النطاق الحالي ثم النطاقات الخارجية",
                values: [
                    { value: "let outer = 5; function inner() { console.log(outer); }", description: "الوصول لمتغير خارجي" },
                    { value: "function outer() { let x = 5; function inner() { console.log(x); } }", description: "سلسلة النطاقات" },
                    { value: "let x = 1; function test() { let x = 2; console.log(x); } // 2", description: "النطاق الداخلي يخفي الخارجي" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. القيم الحقيقية والخاطئة (Truthy & Falsy)
    // ============================================================
    {
        tag: "truthy-falsy",
        description: "القيم التي تُعتبر true أو false عند تحويلها إلى قيمة منطقية",
        properties: [
            {
                name: "Falsy Values",
                description: "القيم التي تُعتبر false في السياقات المنطقية",
                values: [
                    { value: "false", description: "القيمة المنطقية false" },
                    { value: "0", description: "الرقم صفر" },
                    { value: "-0", description: "صفر سالب" },
                    { value: "0n", description: "BigInt صفر" },
                    { value: "\"\"", description: "نص فارغ" },
                    { value: "null", description: "قيمة فارغة" },
                    { value: "undefined", description: "قيمة غير محددة" },
                    { value: "NaN", description: "Not a Number" }
                ]
            },
            {
                name: "Truthy Values",
                description: "القيم التي تُعتبر true في السياقات المنطقية",
                values: [
                    { value: "true", description: "القيمة المنطقية true" },
                    { value: "1", description: "أي رقم غير صفر" },
                    { value: "-1", description: "أرقام سالبة" },
                    { value: "\"hello\"", description: "نص غير فارغ" },
                    { value: "\"0\"", description: "نص يحتوي على صفر" },
                    { value: "\"false\"", description: "نص يحتوي على false" },
                    { value: "[]", description: "مصفوفة فارغة" },
                    { value: "{}", description: "كائن فارغ" },
                    { value: "function() {}", description: "دالة" }
                ]
            },
            {
                name: "التحويل الصريح",
                description: "طرق تحويل القيم إلى boolean",
                values: [
                    { value: "Boolean(value)", description: "تحويل صريح" },
                    { value: "!!value", description: "تحويل مزدوج (مختصر)" },
                    { value: "if (value) { }", description: "في الشرط" },
                    { value: "value ? true : false", description: "في العامل الثلاثي" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. أمثلة عملية
    // ============================================================
    {
        tag: "examples",
        description: "أمثلة عملية لاستخدام المتغيرات والثوابت",
        properties: [
            {
                name: "مثال 1 - استخدام const للمصفوفات",
                description: "const مع المصفوفات",
                values: [
                    { value: "const COLORS = ['red', 'blue', 'green']; COLORS.push('yellow');", description: "يمكن تعديل المصفوفة" },
                    { value: "const COLORS = ['red']; COLORS = ['blue']; // TypeError", description: "لا يمكن إعادة تعيين المرجع" },
                    { value: "const COLORS = Object.freeze(['red', 'blue']);", description: "تجميد المصفوفة لمنع التعديل" }
                ]
            },
            {
                name: "مثال 2 - استخدام const للكائنات",
                description: "const مع الكائنات",
                values: [
                    { value: "const CONFIG = { theme: 'dark' }; CONFIG.theme = 'light';", description: "يمكن تعديل خصائص الكائن" },
                    { value: "const CONFIG = { theme: 'dark' }; CONFIG = { theme: 'light' }; // TypeError", description: "لا يمكن إعادة تعيين المرجع" },
                    { value: "const CONFIG = Object.freeze({ theme: 'dark' });", description: "تجميد الكائن لمنع التعديل" }
                ]
            },
            {
                name: "مثال 3 - الفرق بين var و let في الحلقات",
                description: "سلوك مختلف في الحلقات",
                values: [
                    { value: "for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); } // 3, 3, 3", description: "var - i واحدة مشتركة" },
                    { value: "for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); } // 0, 1, 2", description: "let - لكل تكرار نسخة من i" }
                ]
            },
            {
                name: "مثال 4 - استخدام let في if",
                description: "let محصور في الكتلة",
                values: [
                    { value: "let x = 5; if (true) { let x = 10; console.log(x); // 10 } console.log(x); // 5", description: "let داخل if مختلف عن الخارج" },
                    { value: "var x = 5; if (true) { var x = 10; console.log(x); // 10 } console.log(x); // 10", description: "var يعيد تعريف x" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة لاستخدام المتغيرات والثوابت",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية للتعامل مع المتغيرات",
                values: [
                    { value: "استخدم const بشكل افتراضي", description: "للمتغيرات التي لا تتغير" },
                    { value: "استخدم let عندما تحتاج إعادة التعيين", description: "بدلاً من var" },
                    { value: "تجنب استخدام var", description: "لأنه يسبب مشاكل في النطاق" },
                    { value: "استخدم أسماء وصفية", description: "مثل userAge بدلاً من a" },
                    { value: "استخدم camelCase للمتغيرات", description: "مثل firstName" },
                    { value: "استخدم UPPER_SNAKE_CASE للثوابت", description: "مثل MAX_SIZE" },
                    { value: "أعلن المتغيرات في أعلى النطاق", description: "للوضوح" },
                    { value: "تجنب المتغيرات العامة", description: "لتجنب التعارض" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء المتغيرات",
                values: [
                    { value: "استخدم const للكائنات والمصفوفات", description: "يمنع إعادة التعيين" },
                    { value: "تجنب إنشاء متغيرات غير ضرورية", description: "يقلل استهلاك الذاكرة" },
                    { value: "استخدم let في الحلقات", description: "يحسن الأداء" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند استخدام المتغيرات والثوابت",
                values: [
                    { value: "استخدام var في الحلقات", description: "يسبب مشاكل في القيم" },
                    { value: "نسيان التعريف (let/const/var)", description: "يصبح المتغير عاماً" },
                    { value: "استخدام const مع المصفوفات ثم تعيينها", description: "const arr = []; arr = [1]; // خطأ" },
                    { value: "الخلط بين let و const", description: "استخدم const للثوابت" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.jsVariablesConstantsData = jsVariablesConstantsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsVariablesConstantsData;
}