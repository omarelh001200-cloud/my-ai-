// ============================================================
// js-primitive-types.js
// الأنواع الأساسية (Primitive Types) والكائنات العالمية (Global Objects) في JavaScript
// تشرح جميع أنواع البيانات الأساسية والكائنات المدمجة في اللغة
// ============================================================

const jsPrimitiveTypesData = [
    // ============================================================
    // 1. الأنواع الأساسية (Primitive Types)
    // ============================================================
    {
        tag: "primitive-types",
        description: "الأنواع الأساسية في JavaScript هي أنواع البيانات البدائية التي لا تحتوي على خصائص أو دوال (باستثناء الـ Wrapper objects)",
        properties: [
            // -------- string --------
            {
                name: "string",
                description: "نوع بيانات يمثل سلسلة من الأحرف (نص). يمكن تعريفه باستخدام علامات تنصيص مفردة '' أو مزدوجة \"\" أو backticks ``",
                values: [
                    { value: "'مرحباً'", description: "نص باستخدام علامات تنصيص مفردة" },
                    { value: "\"مرحباً\"", description: "نص باستخدام علامات تنصيص مزدوجة" },
                    { value: "`مرحباً ${name}`", description: "نص باستخدام Template Literal مع إدراج متغير" },
                    { value: "''", description: "نص فارغ" },
                    { value: "\"\"", description: "نص فارغ باستخدام علامات مزدوجة" },
                    { value: "`مرحباً\nالعالم`", description: "نص متعدد الأسطر باستخدام Template Literal" },
                    { value: "\"Hello\\nWorld\"", description: "نص مع حرف سطر جديد باستخدام Escape Sequence" },
                    { value: "'Hello\\tWorld'", description: "نص مع حرف Tab" },
                    { value: "'Hello\\'World'", description: "نص يحتوي على علامة تنصيص مفردة (مشوشة)" },
                    { value: "\"Hello\\\"World\"", description: "نص يحتوي على علامة تنصيص مزدوجة (مشوشة)" }
                ]
            },
            // -------- number --------
            {
                name: "number",
                description: "نوع بيانات يمثل أرقاماً (صحيحة أو عشرية) ضمن نطاق 64-bit floating point (IEEE 754)",
                values: [
                    { value: "42", description: "عدد صحيح" },
                    { value: "3.14", description: "عدد عشري (Float)" },
                    { value: "-10", description: "عدد سالب" },
                    { value: "0", description: "صفر" },
                    { value: "1.5e10", description: "تدوين علمي (1.5 × 10¹?)" },
                    { value: "Infinity", description: "ما لا نهاية (نتيجة القسمة على صفر أو رقم كبير جداً)" },
                    { value: "-Infinity", description: "ما لا نهاية سالب" },
                    { value: "NaN", description: "Not a Number - قيمة غير رقمية (نتيجة عملية رياضية غير صحيحة)" }
                ]
            },
            // -------- boolean --------
            {
                name: "boolean",
                description: "نوع بيانات يمثل قيمتين منطقيتين فقط: true (صحيح) أو false (خاطئ)",
                values: [
                    { value: "true", description: "قيمة صحيحة - تستخدم في الشروط والحلقات" },
                    { value: "false", description: "قيمة خاطئة - تستخدم في الشروط والحلقات" },
                    { value: "!!'hello'", description: "تحويل قيمة إلى boolean - true (لأن النص غير فارغ)" },
                    { value: "!!''", description: "تحويل قيمة إلى boolean - false (لأن النص فارغ)" },
                    { value: "!!0", description: "تحويل قيمة إلى boolean - false (لأن 0 يعتبر falsy)" },
                    { value: "!!1", description: "تحويل قيمة إلى boolean - true (لأن 1 يعتبر truthy)" }
                ]
            },
            // -------- undefined --------
            {
                name: "undefined",
                description: "نوع بيانات يمثل قيمة غير محددة. يظهر عند تعريف متغير دون إعطائه قيمة، أو عند محاولة الوصول لخاصية غير موجودة في كائن، أو عندما لا تُرجع دالة قيمة صراحة",
                values: [
                    { value: "undefined", description: "قيمة غير محددة - المتغير عُرف ولم تُعطى له قيمة" },
                    { value: "let x;", description: "x تكون undefined لأنها لم تُعطى قيمة" },
                    { value: "obj.missing", description: "تُرجع undefined لأن الخاصية غير موجودة في الكائن" },
                    { value: "function f() {}", description: "استدعاء f() يُرجع undefined" }
                ]
            },
            // -------- null --------
            {
                name: "null",
                description: "نوع بيانات يمثل قيمة فارغة أو غير موجودة بشكل متعمد. تُستخدم للإشارة إلى أن الكائن أو القيمة غير موجودة، وتختلف عن undefined التي تعني أن القيمة لم تُعرف بعد",
                values: [
                    { value: "null", description: "قيمة فارغة - متعمدة لإشارة إلى عدم وجود قيمة" },
                    { value: "let x = null;", description: "تعيين قيمة فارغة بشكل متعمد" },
                    { value: "document.getElementById('nonexistent')", description: "تُرجع null إذا لم يوجد العنصر" }
                ]
            },
            // -------- symbol --------
            {
                name: "symbol",
                description: "نوع بيانات فريد غير قابل للتغيير، يُستخدم غالباً كمفاتيح فريدة لخصائص الكائنات. كل رمز فريد حتى لو كان له نفس الوصف، ولا يمكن إنشاؤه باستخدام new",
                values: [
                    { value: "Symbol()", description: "إنشاء رمز فريد" },
                    { value: "Symbol('id')", description: "إنشاء رمز فريد مع وصف" },
                    { value: "Symbol.for('id')", description: "إنشاء رمز عالمي (Shared Symbol)" },
                    { value: "Symbol.iterator", description: "رمز مدمج لتحديد طريقة التكرار" },
                    { value: "Symbol.asyncIterator", description: "رمز مدمج لتحديد طريقة التكرار غير المتزامن" },
                    { value: "Symbol.hasInstance", description: "رمز مدمج لتحديد سلوك instanceof" },
                    { value: "Symbol.isConcatSpreadable", description: "رمز مدمج لسلوك concat" },
                    { value: "Symbol.match", description: "رمز مدمج لسلوك match" },
                    { value: "Symbol.replace", description: "رمز مدمج لسلوك replace" },
                    { value: "Symbol.search", description: "رمز مدمج لسلوك search" },
                    { value: "Symbol.split", description: "رمز مدمج لسلوك split" },
                    { value: "Symbol.species", description: "رمز مدمج لإنشاء كائنات مشتقة" },
                    { value: "Symbol.toPrimitive", description: "رمز مدمج لتحويل الكائن إلى قيمة بدائية" },
                    { value: "Symbol.toStringTag", description: "رمز مدمج لتحديد قيمة toString" },
                    { value: "Symbol.unscopables", description: "رمز مدمج للتحكم في with" }
                ]
            },
            // -------- bigint --------
            {
                name: "bigint",
                description: "نوع بيانات يمثل أعداداً صحيحة كبيرة جداً تتجاوز نطاق Number (حتى 2?³-1). تُستخدم للأعداد الضخمة مثل المعرفات أو الحسابات المالية الدقيقة، وتُكتب بإضافة n في النهاية أو باستخدام الدالة BigInt()",
                values: [
                    { value: "9007199254740991n", description: "BigInt أكبر من MAX_SAFE_INTEGER" },
                    { value: "BigInt(Number.MAX_SAFE_INTEGER) + 1n", description: "إنشاء BigInt من رقم" },
                    { value: "BigInt('12345678901234567890')", description: "إنشاء BigInt من نص" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. الكائنات العالمية (Global Objects)
    // ============================================================
    {
        tag: "global-objects",
        description: "الكائنات العالمية في JavaScript هي كائنات مدمجة في اللغة متاحة في أي مكان دون الحاجة لاستيرادها",
        properties: [
            // -------- Object --------
            {
                name: "Object",
                description: "الكائن الأساسي في JavaScript. جميع الكائنات الأخرى ترث من Object.prototype",
                values: [
                    { value: "Object", description: "الكائن الأساسي للغة" },
                    { value: "Object.prototype", description: "النموذج الأولي لجميع الكائنات" },
                    { value: "Object.assign()", description: "دمج الكائنات" },
                    { value: "Object.create()", description: "إنشاء كائن بنموذج أولي محدد" },
                    { value: "Object.defineProperty()", description: "تعريف خاصية بدقة" },
                    { value: "Object.entries()", description: "أزواج المفتاح/القيمة" },
                    { value: "Object.freeze()", description: "تجميد الكائن" },
                    { value: "Object.keys()", description: "مفاتيح الكائن" },
                    { value: "Object.values()", description: "قيم الكائن" }
                ]
            },
            // -------- Array --------
            {
                name: "Array",
                description: "كائن يمثل مصفوفة (قائمة) من العناصر المرتبة. يمكن أن تحتوي على عناصر من أي نوع، وتدعم دوالاً للتكرار والتحويل والتصفية والترتيب",
                values: [
                    { value: "Array", description: "الكائن الأساسي للمصفوفات" },
                    { value: "Array.prototype", description: "النموذج الأولي للمصفوفات" },
                    { value: "Array.from()", description: "إنشاء مصفوفة من كائن قابل للتكرار" },
                    { value: "Array.isArray()", description: "التحقق من كونه مصفوفة" },
                    { value: "Array.of()", description: "إنشاء مصفوفة من عناصر" },
                    { value: "[]", description: "مصفوفة فارغة (مختصر)" },
                    { value: "new Array(5)", description: "مصفوفة بطول 5" }
                ]
            },
            // -------- String --------
            {
                name: "String",
                description: "كائن يمثل سلسلة نصية. يوفّر دوالاً للتعامل مع النصوص مثل البحث، الاستبدال، التقطيع، والتحويل",
                values: [
                    { value: "String", description: "الكائن الأساسي للنصوص" },
                    { value: "String.prototype", description: "النموذج الأولي للنصوص" },
                    { value: "String.fromCharCode()", description: "إنشاء نص من رموز Unicode" },
                    { value: "String.fromCodePoint()", description: "إنشاء نص من نقاط Unicode" },
                    { value: "String.raw()", description: "نص خام بدون تفسير الهروب" },
                    { value: "''", description: "نص فارغ (مختصر)" },
                    { value: "new String('hello')", description: "كائن نص (نادر الاستخدام)" }
                ]
            },
            // -------- Number --------
            {
                name: "Number",
                description: "كائن يمثل قيمة رقمية. يوفّر دوالاً وثوابت للتعامل مع الأرقام مثل التحقق من السلامة والتقريب",
                values: [
                    { value: "Number", description: "الكائن الأساسي للأرقام" },
                    { value: "Number.prototype", description: "النموذج الأولي للأرقام" },
                    { value: "Number.MAX_SAFE_INTEGER", description: "أكبر عدد صحيح آمن (2?³-1)" },
                    { value: "Number.MIN_SAFE_INTEGER", description: "أصغر عدد صحيح آمن (-2?³+1)" },
                    { value: "Number.MAX_VALUE", description: "أكبر قيمة رقمية ممكنة" },
                    { value: "Number.MIN_VALUE", description: "أصغر قيمة رقمية موجبة" },
                    { value: "Number.EPSILON", description: "فجوة التقريب بين 1 وأكبر عدد أصغر منه" },
                    { value: "Number.NaN", description: "قيمة Not-a-Number" },
                    { value: "Number.POSITIVE_INFINITY", description: "ما لا نهاية موجب" },
                    { value: "Number.NEGATIVE_INFINITY", description: "ما لا نهاية سالب" }
                ]
            },
            // -------- Boolean --------
            {
                name: "Boolean",
                description: "كائن يمثل قيمة منطقية (true أو false). نادراً ما يُستخدم مباشرة، بل تُستخدم القيم البدائية true و false",
                values: [
                    { value: "Boolean", description: "الكائن الأساسي للقيم المنطقية" },
                    { value: "Boolean.prototype", description: "النموذج الأولي للقيم المنطقية" },
                    { value: "true", description: "قيمة صحيحة" },
                    { value: "false", description: "قيمة خاطئة" },
                    { value: "Boolean('hello')", description: "تحويل إلى boolean - true" },
                    { value: "Boolean('')", description: "تحويل إلى boolean - false" }
                ]
            },
            // -------- Function --------
            {
                name: "Function",
                description: "كائن يمثل دالة. جميع الدوال في JavaScript هي كائنات من نوع Function، وتورث من Function.prototype",
                values: [
                    { value: "Function", description: "الكائن الأساسي للدوال" },
                    { value: "Function.prototype", description: "النموذج الأولي للدوال" },
                    { value: "function() {}", description: "دالة عادية" },
                    { value: "() => {}", description: "دالة سهمية" }
                ]
            },
            // -------- Symbol --------
            {
                name: "Symbol",
                description: "كائن لإنشاء رموز فريدة. يُستخدم بشكل شائع كمفاتيح للكائنات لتجنب تعارض الأسماء",
                values: [
                    { value: "Symbol", description: "الكائن الأساسي للرموز" },
                    { value: "Symbol()", description: "رمز فريد" },
                    { value: "Symbol.for()", description: "رمز عالمي مشترك" },
                    { value: "Symbol.keyFor()", description: "الحصول على وصف الرمز العالمي" }
                ]
            },
            // -------- BigInt --------
            {
                name: "BigInt",
                description: "كائن لإنشاء أعداد صحيحة كبيرة جداً. يوفّر دوالاً للتعامل مع الأعداد الكبيرة التي تتجاوز سعة Number",
                values: [
                    { value: "BigInt", description: "الكائن الأساسي للأعداد الكبيرة" },
                    { value: "BigInt(10)", description: "إنشاء BigInt من رقم" },
                    { value: "BigInt('12345678901234567890')", description: "إنشاء BigInt من نص" },
                    { value: "10n", description: "مختصر لـ BigInt(10)" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. كائنات عالمية إضافية (Additional Global Objects)
    // ============================================================
    {
        tag: "additional-global-objects",
        description: "كائنات عالمية إضافية مدمجة في JavaScript",
        properties: [
            // -------- Date --------
            {
                name: "Date",
                description: "كائن للتعامل مع التاريخ والوقت. يُستخدم لإنشاء تواريخ، قراءة مكوناتها، تنسيقها، وإجراء عمليات حسابية عليها",
                values: [
                    { value: "Date", description: "الكائن الأساسي للتاريخ والوقت" },
                    { value: "Date.now()", description: "الوقت الحالي بالميلي ثانية" },
                    { value: "Date.parse()", description: "تحويل نص تاريخ إلى ميلي ثانية" },
                    { value: "Date.UTC()", description: "إنشاء تاريخ بصيغة UTC" },
                    { value: "new Date()", description: "تاريخ ووقت الحالي" },
                    { value: "new Date(2024, 0, 1)", description: "تاريخ محدد (يناير 2024)" },
                    { value: "new Date('2024-01-01')", description: "تاريخ من نص ISO" },
                    { value: "new Date(1704067200000)", description: "تاريخ من ميلي ثانية" },
                    { value: "date.toISOString()", description: "تحويل إلى صيغة ISO" },
                    { value: "date.toLocaleString()", description: "تحويل إلى صيغة محلية" },
                    { value: "date.getFullYear()", description: "استخراج السنة" },
                    { value: "date.getMonth()", description: "استخراج الشهر (0-11)" },
                    { value: "date.getDate()", description: "استخراج اليوم من الشهر" },
                    { value: "date.getDay()", description: "استخراج يوم الأسبوع (0-6)" },
                    { value: "date.getHours()", description: "استخراج الساعة" },
                    { value: "date.getMinutes()", description: "استخراج الدقائق" },
                    { value: "date.getSeconds()", description: "استخراج الثواني" },
                    { value: "date.getMilliseconds()", description: "استخراج الميلي ثانية" },
                    { value: "date.getTime()", description: "استخراج الوقت بالميلي ثانية" },
                    { value: "date.getTimezoneOffset()", description: "فارق التوقيت عن UTC" },
                    { value: "date.setFullYear()", description: "تعديل السنة" },
                    { value: "date.setMonth()", description: "تعديل الشهر" },
                    { value: "date.setDate()", description: "تعديل اليوم" },
                    { value: "date.setHours()", description: "تعديل الساعة" },
                    { value: "date.setMinutes()", description: "تعديل الدقائق" },
                    { value: "date.setSeconds()", description: "تعديل الثواني" },
                    { value: "date.setMilliseconds()", description: "تعديل الميلي ثانية" },
                    { value: "date.setTime()", description: "تعديل الوقت بالميلي ثانية" },
                    { value: "date.toDateString()", description: "تحويل إلى نص تاريخ" },
                    { value: "date.toTimeString()", description: "تحويل إلى نص وقت" },
                    { value: "date.toUTCString()", description: "تحويل إلى نص UTC" },
                    { value: "date.toLocaleDateString()", description: "تحويل إلى نص تاريخ محلي" },
                    { value: "date.toLocaleTimeString()", description: "تحويل إلى نص وقت محلي" }
                ]
            },
            // -------- RegExp --------
            {
                name: "RegExp",
                description: "كائن للتعامل مع التعبيرات النمطية (Regular Expressions). يُستخدم للبحث عن أنماط في النصوص واستبدالها والتحقق منها",
                values: [
                    { value: "RegExp", description: "الكائن الأساسي للتعبيرات النمطية" },
                    { value: "new RegExp('pattern', 'flags')", description: "إنشاء تعبير نمطي" },
                    { value: "/pattern/flags", description: "تعبير نمطي (مختصر)" },
                    { value: "regex.test(str)", description: "اختبار تطابق النص" },
                    { value: "str.match(regex)", description: "استخراج التطابقات" },
                    { value: "str.search(regex)", description: "بحث عن موضع التطابق" },
                    { value: "str.replace(regex, replacement)", description: "استبدال التطابقات" },
                    { value: "str.split(regex)", description: "تقسيم النص باستخدام النمط" },
                    { value: "regex.exec(str)", description: "استخراج التفاصيل الكاملة للتطابق" },
                    { value: "regex.flags", description: "خيارات التعبير النمطي" },
                    { value: "regex.source", description: "نص النمط" },
                    { value: "regex.global", description: "هل الخيار g مفعّل؟" },
                    { value: "regex.ignoreCase", description: "هل الخيار i مفعّل؟" },
                    { value: "regex.multiline", description: "هل الخيار m مفعّل؟" },
                    { value: "regex.dotAll", description: "هل الخيار s مفعّل؟" },
                    { value: "regex.unicode", description: "هل الخيار u مفعّل؟" },
                    { value: "regex.sticky", description: "هل الخيار y مفعّل؟" }
                ]
            },
            // -------- Error --------
            {
                name: "Error",
                description: "كائن أساسي لتمثيل الأخطاء. جميع أنواع الأخطاء في JavaScript ترث من Error",
                values: [
                    { value: "Error", description: "الكائن الأساسي للأخطاء" },
                    { value: "new Error('message')", description: "إنشاء خطأ برسالة" },
                    { value: "error.message", description: "رسالة الخطأ" },
                    { value: "error.name", description: "اسم الخطأ (مثل 'Error')" },
                    { value: "error.stack", description: "تتبع المكدس (Stack Trace)" },
                    { value: "error.cause", description: "سبب الخطأ (ES2022)" },
                    { value: "EvalError", description: "خطأ متعلق بـ eval()" },
                    { value: "RangeError", description: "خطأ عندما تكون قيمة خارج النطاق" },
                    { value: "ReferenceError", description: "خطأ عند الإشارة لمتغير غير معرّف" },
                    { value: "SyntaxError", description: "خطأ في بناء الجملة" },
                    { value: "TypeError", description: "خطأ عند استخدام نوع غير صحيح" },
                    { value: "URIError", description: "خطأ في دوال URI" },
                    { value: "AggregateError", description: "خطأ يجمع عدة أخطاء (ES2021)" }
                ]
            },
            // -------- Map --------
            {
                name: "Map",
                description: "كائن يمثل مجموعة من أزواج المفتاح-القيمة. يحافظ على ترتيب الإدراج ويقبل أي نوع كمفتاح (بما في ذلك الكائنات)",
                values: [
                    { value: "Map", description: "الكائن الأساسي للخريطة" },
                    { value: "new Map()", description: "إنشاء خريطة فارغة" },
                    { value: "map.set(key, value)", description: "إضافة زوج مفتاح-قيمة" },
                    { value: "map.get(key)", description: "قراءة قيمة مفتاح" },
                    { value: "map.has(key)", description: "التحقق من وجود مفتاح" },
                    { value: "map.delete(key)", description: "حذف مفتاح" },
                    { value: "map.clear()", description: "حذف جميع العناصر" },
                    { value: "map.size", description: "عدد العناصر" },
                    { value: "map.keys()", description: "مُكرِّر المفاتيح" },
                    { value: "map.values()", description: "مُكرِّر القيم" },
                    { value: "map.entries()", description: "مُكرِّر الأزواج" },
                    { value: "map.forEach(callback)", description: "التكرار على العناصر" }
                ]
            },
            // -------- Set --------
            {
                name: "Set",
                description: "كائن يمثل مجموعة من القيم الفريدة (بدون تكرار). يحافظ على ترتيب الإدراج ويقبل أي نوع من القيم",
                values: [
                    { value: "Set", description: "الكائن الأساسي للمجموعة" },
                    { value: "new Set()", description: "إنشاء مجموعة فارغة" },
                    { value: "set.add(value)", description: "إضافة قيمة" },
                    { value: "set.has(value)", description: "التحقق من وجود قيمة" },
                    { value: "set.delete(value)", description: "حذف قيمة" },
                    { value: "set.clear()", description: "حذف جميع العناصر" },
                    { value: "set.size", description: "عدد العناصر" },
                    { value: "set.keys()", description: "مُكرِّر القيم (مثل values)" },
                    { value: "set.values()", description: "مُكرِّر القيم" },
                    { value: "set.entries()", description: "مُكرِّر الأزواج" },
                    { value: "set.forEach(callback)", description: "التكرار على العناصر" },
                    { value: "new Set([1, 2, 3])", description: "إنشاء مجموعة من مصفوفة" }
                ]
            },
            // -------- WeakMap --------
            {
                name: "WeakMap",
                description: "كائن مشابه لـ Map لكن مفاتيحه يجب أن تكون كائنات فقط، ولا تمنع جامع القمامة (Garbage Collector) من حذفها عندما لا تُستخدم. مفيد للتخزين المؤقت والبيانات الخاصة بالكائنات دون تسريب ذاكرة",
                values: [
                    { value: "WeakMap", description: "الكائن الأساسي للخريطة الضعيفة" },
                    { value: "new WeakMap()", description: "إنشاء خريطة ضعيفة فارغة" },
                    { value: "weakMap.set(key, value)", description: "إضافة زوج مفتاح-قيمة (يجب أن يكون المفتاح كائناً)" },
                    { value: "weakMap.get(key)", description: "قراءة قيمة مفتاح" },
                    { value: "weakMap.has(key)", description: "التحقق من وجود مفتاح" },
                    { value: "weakMap.delete(key)", description: "حذف مفتاح" }
                ]
            },
            // -------- WeakSet --------
            {
                name: "WeakSet",
                description: "كائن مشابه لـ Set لكن عناصره يجب أن تكون كائنات فقط، ولا تمنع جامع القمامة من حذفها عندما لا تُستخدم. مفيد لتتبع الكائنات دون تسريب ذاكرة",
                values: [
                    { value: "WeakSet", description: "الكائن الأساسي للمجموعة الضعيفة" },
                    { value: "new WeakSet()", description: "إنشاء مجموعة ضعيفة فارغة" },
                    { value: "weakSet.add(value)", description: "إضافة كائن" },
                    { value: "weakSet.has(value)", description: "التحقق من وجود كائن" },
                    { value: "weakSet.delete(value)", description: "حذف كائن" }
                ]
            },
            // -------- Promise --------
            {
                name: "Promise",
                description: "كائن يمثل نتيجة عملية غير متزامنة ستكتمل في المستقبل (نجاحاً أو فشلاً). يوفر دوالاً للتعامل مع العمليات غير المتزامنة بشكل أنيق",
                values: [
                    { value: "Promise", description: "الكائن الأساسي للوعود" },
                    { value: "new Promise((resolve, reject) => {})", description: "إنشاء وعد" },
                    { value: "promise.then(onFulfilled)", description: "معالجة النجاح" },
                    { value: "promise.catch(onRejected)", description: "معالجة الفشل" },
                    { value: "promise.finally(onFinally)", description: "تنفيذ دائماً" },
                    { value: "Promise.all([p1, p2])", description: "انتظار كل الوعود" },
                    { value: "Promise.allSettled([p1, p2])", description: "انتظار كل الوعود دون فشل مبكر" },
                    { value: "Promise.race([p1, p2])", description: "أول وعد ينتهي" },
                    { value: "Promise.any([p1, p2])", description: "أول وعد ينجح" },
                    { value: "Promise.resolve(value)", description: "إنشاء وعد ناجح" },
                    { value: "Promise.reject(reason)", description: "إنشاء وعد فاشل" }
                ]
            },
            // -------- Proxy --------
            {
                name: "Proxy",
                description: "كائن يسمح بإنشاء وسيط (wrapper) حول كائن آخر لاعتراض وتخصيص العمليات الأساسية مثل القراءة والكتابة والاستدعاء. مفيد للمراقبة والتحقق والتصحيح",
                values: [
                    { value: "Proxy", description: "الكائن الأساسي للوسيط" },
                    { value: "new Proxy(target, handler)", description: "إنشاء وسيط لكائن" },
                    { value: "handler.get", description: "اعتراض قراءة خاصية" },
                    { value: "handler.set", description: "اعتراض كتابة خاصية" },
                    { value: "handler.has", description: "اعتراض عملية in" },
                    { value: "handler.deleteProperty", description: "اعتراض عملية delete" },
                    { value: "handler.apply", description: "اعتراض استدعاء دالة" },
                    { value: "handler.construct", description: "اعتراض new" },
                    { value: "handler.getPrototypeOf", description: "اعتراض قراءة النموذج الأولي" },
                    { value: "handler.setPrototypeOf", description: "اعتراض تعيين النموذج الأولي" },
                    { value: "handler.ownKeys", description: "اعتراض Object.keys" }
                ]
            },
            // -------- Reflect --------
            {
                name: "Reflect",
                description: "كائن يوفر دوالاً للعمليات الأساسية التي يمكن اعتراضها بواسطة Proxy. يُستخدم بدلاً من العوامل المباشرة (مثل delete, in) للحصول على سلوك موحّد وتفادي الأخطاء",
                values: [
                    { value: "Reflect", description: "الكائن الأساسي للانعكاس" },
                    { value: "Reflect.get(target, key)", description: "قراءة خاصية" },
                    { value: "Reflect.set(target, key, value)", description: "كتابة خاصية" },
                    { value: "Reflect.has(target, key)", description: "التحقق من وجود خاصية" },
                    { value: "Reflect.deleteProperty(target, key)", description: "حذف خاصية" },
                    { value: "Reflect.apply(fn, thisArg, args)", description: "استدعاء دالة" },
                    { value: "Reflect.construct(target, args)", description: "إنشاء كائن باستخدام new" },
                    { value: "Reflect.getPrototypeOf(target)", description: "قراءة النموذج الأولي" },
                    { value: "Reflect.setPrototypeOf(target, proto)", description: "تعيين النموذج الأولي" },
                    { value: "Reflect.ownKeys(target)", description: "مفاتيح الكائن الخاصة" }
                ]
            },
            // -------- JSON --------
            {
                name: "JSON",
                description: "كائن يوفر دوالاً لتحويل البيانات بين JavaScript و JSON (JavaScript Object Notation). يُستخدم لتبادل البيانات مع الخوادم وتخزينها",
                values: [
                    { value: "JSON", description: "الكائن الأساسي لـ JSON" },
                    { value: "JSON.parse(text)", description: "تحويل نص JSON إلى كائن" },
                    { value: "JSON.stringify(value)", description: "تحويل كائن إلى نص JSON" },
                    { value: "JSON.stringify(value, null, 2)", description: "تحويل مع تنسيق جميل" }
                ]
            },
            // -------- Math --------
            {
                name: "Math",
                description: "كائن يوفر دوالاً وثوابت رياضية للعمليات الحسابية المتقدمة. لا يمكن إنشاء مثيل منه، بل يُستخدم مباشرة كـ Math.xxx",
                values: [
                    { value: "Math", description: "الكائن الأساسي للرياضيات" },
                    { value: "Math.PI", description: "قيمة ? (3.14159...)" },
                    { value: "Math.E", description: "قيمة e (2.71828...)" },
                    { value: "Math.LN2", description: "لوغاريتم 2 الطبيعي" },
                    { value: "Math.LN10", description: "لوغاريتم 10 الطبيعي" },
                    { value: "Math.LOG2E", description: "لوغاريتم e للأساس 2" },
                    { value: "Math.LOG10E", description: "لوغاريتم e للأساس 10" },
                    { value: "Math.SQRT1_2", description: "جذر 1/2 (0.707...)" },
                    { value: "Math.SQRT2", description: "جذر 2 (1.414...)" },
                    { value: "Math.abs(x)", description: "القيمة المطلقة" },
                    { value: "Math.acos(x)", description: "جيب تمام عكسي" },
                    { value: "Math.acosh(x)", description: "جيب تمام عكسي زائدي" },
                    { value: "Math.asin(x)", description: "جيب عكسي" },
                    { value: "Math.asinh(x)", description: "جيب عكسي زائدي" },
                    { value: "Math.atan(x)", description: "ظل عكسي" },
                    { value: "Math.atan2(y, x)", description: "ظل عكسي مع إحداثيات" },
                    { value: "Math.atanh(x)", description: "ظل عكسي زائدي" },
                    { value: "Math.cbrt(x)", description: "جذر تكعيبي" },
                    { value: "Math.ceil(x)", description: "تقريب لأعلى" },
                    { value: "Math.clz32(x)", description: "عدد الأصفار البادئة في 32 بت" },
                    { value: "Math.cos(x)", description: "جيب تمام" },
                    { value: "Math.cosh(x)", description: "جيب تمام زائدي" },
                    { value: "Math.exp(x)", description: "e^x" },
                    { value: "Math.expm1(x)", description: "e^x - 1" },
                    { value: "Math.floor(x)", description: "تقريب لأسفل" },
                    { value: "Math.fround(x)", description: "تقريب إلى 32 بت" },
                    { value: "Math.hypot(...values)", description: "جذر مجموع المربعات" },
                    { value: "Math.imul(a, b)", description: "ضرب 32 بت" },
                    { value: "Math.log(x)", description: "لوغاريتم طبيعي" },
                    { value: "Math.log10(x)", description: "لوغاريتم أساس 10" },
                    { value: "Math.log1p(x)", description: "ln(1 + x)" },
                    { value: "Math.log2(x)", description: "لوغاريتم أساس 2" },
                    { value: "Math.max(...values)", description: "أكبر قيمة" },
                    { value: "Math.min(...values)", description: "أصغر قيمة" },
                    { value: "Math.pow(base, exponent)", description: "رفع لأس" },
                    { value: "Math.random()", description: "رقم عشوائي بين 0 و1" },
                    { value: "Math.round(x)", description: "تقريب لأقرب عدد صحيح" },
                    { value: "Math.sign(x)", description: "إشارة الرقم (-1, 0, 1)" },
                    { value: "Math.sin(x)", description: "جيب" },
                    { value: "Math.sinh(x)", description: "جيب زائدي" },
                    { value: "Math.sqrt(x)", description: "جذر تربيعي" },
                    { value: "Math.tan(x)", description: "ظل" },
                    { value: "Math.tanh(x)", description: "ظل زائدي" },
                    { value: "Math.trunc(x)", description: "قطع الجزء العشري" }
                ]
            },
            // -------- console --------
            {
                name: "console",
                description: "كائن يوفر دوالاً للطباعة في وحدة التحكم (Console) لأغراض التصحيح والتتبع. متاح في المتصفح و Node.js",
                values: [
                    { value: "console", description: "الكائن الأساسي للطباعة" },
                    { value: "console.log()", description: "طباعة رسالة" },
                    { value: "console.error()", description: "طباعة خطأ" },
                    { value: "console.warn()", description: "طباعة تحذير" },
                    { value: "console.info()", description: "طباعة معلومات" },
                    { value: "console.debug()", description: "طباعة تصحيح" },
                    { value: "console.table()", description: "طباعة كجدول" },
                    { value: "console.group()", description: "بدء مجموعة" },
                    { value: "console.groupEnd()", description: "إنهاء مجموعة" },
                    { value: "console.time()", description: "بدء مؤقت" },
                    { value: "console.timeEnd()", description: "إنهاء مؤقت" },
                    { value: "console.trace()", description: "طباعة تتبع المكدس" },
                    { value: "console.assert()", description: "طباعة خطأ إذا كان الشرط خاطئاً" },
                    { value: "console.count()", description: "عد التكرارات" },
                    { value: "console.clear()", description: "مسح الطرفية" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. الكائنات الخاصة بالبيئة (Environment Objects)
    // ============================================================
    {
        tag: "environment-objects",
        description: "كائنات خاصة بالبيئة التي يُشغّل فيها JavaScript (المتصفح أو Node.js)",
        properties: [
            // -------- window (Browser) --------
            {
                name: "window (Browser)",
                description: "الكائن العام في المتصفح. يمثل نافذة المتصفح ويحتوي على كل شيء في الصفحة. جميع المتغيرات العامة تصبح خصائص في window",
                values: [
                    { value: "window", description: "الكائن العام في المتصفح" },
                    { value: "window.document", description: "كائن المستند (DOM)" },
                    { value: "window.location", description: "معلومات عنوان URL الحالي" },
                    { value: "window.history", description: "سجل التصفح" },
                    { value: "window.navigator", description: "معلومات المتصفح" },
                    { value: "window.screen", description: "معلومات الشاشة" },
                    { value: "window.localStorage", description: "التخزين المحلي" },
                    { value: "window.sessionStorage", description: "تخزين الجلسة" },
                    { value: "window.fetch", description: "إرسال طلبات الشبكة" },
                    { value: "window.alert()", description: "نافذة تنبيه" },
                    { value: "window.confirm()", description: "نافذة تأكيد" },
                    { value: "window.prompt()", description: "نافذة إدخال" },
                    { value: "window.open()", description: "فتح نافذة جديدة" },
                    { value: "window.close()", description: "إغلاق النافذة" },
                    { value: "window.scrollTo()", description: "التمرير إلى موضع" },
                    { value: "window.scrollBy()", description: "التمرير بمقدار" },
                    { value: "window.setTimeout()", description: "تنفيذ مؤجل" },
                    { value: "window.setInterval()", description: "تنفيذ متكرر" },
                    { value: "window.requestAnimationFrame()", description: "جدولة إطار الحركة" },
                    { value: "window.requestIdleCallback()", description: "جدولة في وقت الخمول" },
                    { value: "window.innerWidth", description: "عرض نافذة العرض" },
                    { value: "window.innerHeight", description: "ارتفاع نافذة العرض" },
                    { value: "window.devicePixelRatio", description: "نسبة البكسلات" }
                ]
            },
            // -------- document (Browser) --------
            {
                name: "document (Browser)",
                description: "كائن يمثل صفحة HTML (DOM). يحتوي على دوال للوصول إلى عناصر الصفحة وتعديلها",
                values: [
                    { value: "document", description: "كائن المستند" },
                    { value: "document.getElementById()", description: "الحصول على عنصر بالمعرّف" },
                    { value: "document.querySelector()", description: "الحصول على أول عنصر يطابق محدد" },
                    { value: "document.querySelectorAll()", description: "الحصول على كل العناصر المطابقة" },
                    { value: "document.createElement()", description: "إنشاء عنصر جديد" },
                    { value: "document.createTextNode()", description: "إنشاء عقدة نصية" },
                    { value: "document.body", description: "عنصر body" },
                    { value: "document.head", description: "عنصر head" },
                    { value: "document.title", description: "عنوان الصفحة" },
                    { value: "document.cookie", description: "ملفات تعريف الارتباط" },
                    { value: "document.doctype", description: "نوع المستند" },
                    { value: "document.documentElement", description: "عنصر html" },
                    { value: "document.domain", description: "نطاق الصفحة" },
                    { value: "document.URL", description: "عنوان URL" },
                    { value: "document.referrer", description: "الصفحة المرجعية" }
                ]
            },
            // -------- navigator (Browser) --------
            {
                name: "navigator (Browser)",
                description: "كائن يحتوي على معلومات عن المتصفح ونظام التشغيل. يُستخدم للكشف عن إمكانيات المتصفح",
                values: [
                    { value: "navigator", description: "كائن معلومات المتصفح" },
                    { value: "navigator.userAgent", description: "نص معلومات المتصفح" },
                    { value: "navigator.language", description: "لغة المتصفح" },
                    { value: "navigator.onLine", description: "حالة الاتصال بالإنترنت" },
                    { value: "navigator.geolocation", description: "خدمة الموقع الجغرافي" },
                    { value: "navigator.clipboard", description: "خدمة الحافظة" },
                    { value: "navigator.mediaDevices", description: "أجهزة الوسائط" },
                    { value: "navigator.serviceWorker", description: "Service Worker" },
                    { value: "navigator.storage", description: "معلومات التخزين" },
                    { value: "navigator.connection", description: "معلومات الاتصال" },
                    { value: "navigator.battery", description: "معلومات البطارية" },
                    { value: "navigator.plugins", description: "الإضافات المثبتة" }
                ]
            },
            // -------- location (Browser) --------
            {
                name: "location (Browser)",
                description: "كائن يحتوي على معلومات عن عنوان URL الحالي وطرق للتنقل بين الصفحات",
                values: [
                    { value: "location", description: "كائن عنوان URL" },
                    { value: "location.href", description: "عنوان URL الكامل" },
                    { value: "location.protocol", description: "البروتوكول (http: / https:)" },
                    { value: "location.host", description: "المضيف مع المنفذ" },
                    { value: "location.hostname", description: "اسم المضيف" },
                    { value: "location.port", description: "المنفذ" },
                    { value: "location.pathname", description: "المسار" },
                    { value: "location.search", description: "معلمات الاستعلام" },
                    { value: "location.hash", description: "جزء الرابط (#)" },
                    { value: "location.assign()", description: "الانتقال إلى رابط" },
                    { value: "location.replace()", description: "استبدال الصفحة الحالية" },
                    { value: "location.reload()", description: "إعادة تحميل الصفحة" }
                ]
            },
            // -------- history (Browser) --------
            {
                name: "history (Browser)",
                description: "كائن يسمح بالتحكم في سجل التصفح والتنقل بين الصفحات السابقة والتالية",
                values: [
                    { value: "history", description: "كائن سجل التصفح" },
                    { value: "history.back()", description: "رجوع للخلف" },
                    { value: "history.forward()", description: "تقدم للأمام" },
                    { value: "history.go()", description: "الانتقال إلى صفحة في السجل" },
                    { value: "history.pushState()", description: "إضافة حالة جديدة للسجل" },
                    { value: "history.replaceState()", description: "استبدال الحالة الحالية" },
                    { value: "history.length", description: "طول السجل" },
                    { value: "history.state", description: "الحالة الحالية" }
                ]
            },
            // -------- localStorage (Browser) --------
            {
                name: "localStorage (Browser)",
                description: "تخزين محلي دائم في المتصفح. البيانات تبقى حتى بعد إغلاق المتصفح ولا تنتهي صلاحيتها تلقائياً. الحد الأقصى ~5-10 ميجابايت ويعتمد على المتصفح",
                values: [
                    { value: "localStorage", description: "كائن التخزين المحلي" },
                    { value: "localStorage.setItem(key, value)", description: "حفظ قيمة" },
                    { value: "localStorage.getItem(key)", description: "قراءة قيمة" },
                    { value: "localStorage.removeItem(key)", description: "حذف قيمة" },
                    { value: "localStorage.clear()", description: "حذف كل القيم" },
                    { value: "localStorage.length", description: "عدد العناصر" },
                    { value: "localStorage.key(index)", description: "المفتاح في موضع محدد" }
                ]
            },
            // -------- sessionStorage (Browser) --------
            {
                name: "sessionStorage (Browser)",
                description: "تخزين مؤقت في المتصفح. البيانات تبقى فقط أثناء الجلسة الحالية وتُحذف عند إغلاق التبويب أو المتصفح",
                values: [
                    { value: "sessionStorage", description: "كائن تخزين الجلسة" },
                    { value: "sessionStorage.setItem(key, value)", description: "حفظ قيمة" },
                    { value: "sessionStorage.getItem(key)", description: "قراءة قيمة" },
                    { value: "sessionStorage.removeItem(key)", description: "حذف قيمة" },
                    { value: "sessionStorage.clear()", description: "حذف كل القيم" },
                    { value: "sessionStorage.length", description: "عدد العناصر" },
                    { value: "sessionStorage.key(index)", description: "المفتاح في موضع محدد" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. نصائح وإرشادات
    // ============================================================
    {
        tag: "tips",
        description: "نصائح وإرشادات مهمة للتعامل مع الأنواع الأساسية والكائنات العالمية",
        properties: [
            {
                name: "نصائح عامة",
                description: "نصائح أساسية للتعامل مع الأنواع والكائنات",
                values: [
                    { value: "استخدم === بدلاً من ==", description: "لتجنب التحويل الضمني للأنواع" },
                    { value: "استخدم const بشكل افتراضي", description: "للمتغيرات التي لا تتغير" },
                    { value: "استخدم let عندما تحتاج إعادة التعيين", description: "بدلاً من var" },
                    { value: "تجنب استخدام var", description: "لأنه يسبب مشاكل في النطاق" },
                    { value: "استخدم typeof للتحقق من الأنواع", description: "مثل typeof value === 'string'" },
                    { value: "استخدم Array.isArray() للتحقق من المصفوفات", description: "بدلاً من typeof" },
                    { value: "استخدم Number.isNaN() بدلاً من isNaN()", description: "للتحقق من NaN بدون تحويل النوع" },
                    { value: "استخدم Number.isFinite() بدلاً من isFinite()", description: "للتحقق من الأعداد المحدودة" }
                ]
            },
            {
                name: "نصائح الأداء",
                description: "نصائح لتحسين أداء استخدام الأنواع والكائنات",
                values: [
                    { value: "تجنب إنشاء كائنات غير ضرورية", description: "استخدم القيم البدائية حيثما أمكن" },
                    { value: "استخدم Map للأزواج المفتاح-قيمة", description: "أسرع من الكائنات في بعض الحالات" },
                    { value: "استخدم Set للقيم الفريدة", description: "أسرع من المصفوفات للبحث" },
                    { value: "تجنب Object.keys() في الحلقات الكبيرة", description: "قد يكون بطيئاً" }
                ]
            },
            {
                name: "الأخطاء الشائعة",
                description: "أخطاء شائعة عند التعامل مع الأنواع والكائنات",
                values: [
                    { value: "مقارنة null مع undefined", description: "null == undefined (true) لكن null === undefined (false)" },
                    { value: "استخدام new مع الأنواع البدائية", description: "new Number(5) vs Number(5)" },
                    { value: "نسيان أن المصفوفات هي كائنات", description: "typeof [] === 'object'" },
                    { value: "نسيان أن null هو كائن", description: "typeof null === 'object'" },
                    { value: "استخدام delete مع المصفوفات", description: "يترك فجوات، استخدم splice" }
                ]
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.jsPrimitiveTypesData = jsPrimitiveTypesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsPrimitiveTypesData;
}