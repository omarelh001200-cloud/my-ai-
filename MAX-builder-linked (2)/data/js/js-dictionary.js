// js-dictionary.js
// قاموس شامل لأساسيات JavaScript والدوال المدمجة وواجهات DOM/المتصفح
// مع الترجمة والشرح والقالب القابل للتفاعل
//
// نفس بنية css-dictionary.js وhtml-dictionary.js:
// - term: الاسم الأصلي بالإنجليزية (ثابت، لا يُترجم أبداً)
// - category, arabic, explanation, example, status ("current"/"deprecated")
// - template: كود JS كامل، الأجزاء الثابتة لا تتغير، فقط {{متغير}} قابل للتعديل
// - variables: كل واحد فيه key/en/ar/label/default
//
// يُستورد مباشرة من واجهة البرنامج تماماً كملفي HTML وCSS.

const jsDictionary = [
  // ==================== المتغيرات والثوابت ====================
  {
    "term": "var",
    "category": "المتغيرات والثوابت",
    "arabic": "متغير (نطاق دالة)",
    "explanation": "يعرّف متغيراً قابلاً لإعادة التعيين، نطاقه الدالة كلها وليس الكتلة {}. أسلوب قديم، يُنصح باستخدام let أو const بدلاً منه",
    "example": "var x = 5;",
    "status": "deprecated",
    "template": "var {{name}} = {{value}};",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم المتغير", "label": "name = اسم المتغير", "default": "x" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "5" }
    ]
  },
  {
    "term": "let",
    "category": "المتغيرات والثوابت",
    "arabic": "متغير (نطاق كتلة)",
    "explanation": "يعرّف متغيراً قابلاً لإعادة التعيين، نطاقه محصور داخل الكتلة {} التي عُرّف فيها",
    "example": "let count = 0;",
    "status": "current",
    "template": "let {{name}} = {{value}};",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم المتغير", "label": "name = اسم المتغير", "default": "count" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "0" }
    ]
  },
  {
    "term": "const",
    "category": "المتغيرات والثوابت",
    "arabic": "ثابت",
    "explanation": "يعرّف ثابتاً لا يمكن إعادة تعيينه بعد التصريح، نطاقه محصور داخل الكتلة {}",
    "example": "const PI = 3.14;",
    "status": "current",
    "template": "const {{name}} = {{value}};",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الثابت", "label": "name = اسم الثابت", "default": "PI" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "3.14" }
    ]
  },

  // ==================== الشروط ====================
  {
    "term": "if",
    "category": "الشروط",
    "arabic": "إذا",
    "explanation": "ينفّذ كتلة من الكود فقط إذا كان الشرط صحيحاً",
    "example": "if (age >= 18) { ... }",
    "status": "current",
    "template": "if ({{condition}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "age >= 18" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(\"بالغ\");" }
    ]
  },
  {
    "term": "if...else",
    "category": "الشروط",
    "arabic": "إذا...وإلا",
    "explanation": "ينفّذ كتلة إذا كان الشرط صحيحاً، وكتلة أخرى إذا كان خاطئاً",
    "example": "if (x > 0) { ... } else { ... }",
    "status": "current",
    "template": "if ({{condition}}) {\n  {{ifBody}}\n} else {\n  {{elseBody}}\n}",
    "variables": [
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "x > 0" },
      { "key": "ifBody", "en": "if body", "ar": "جسم إذا", "label": "if body = جسم إذا", "default": "console.log(\"موجب\");" },
      { "key": "elseBody", "en": "else body", "ar": "جسم وإلا", "label": "else body = جسم وإلا", "default": "console.log(\"سالب أو صفر\");" }
    ]
  },
  {
    "term": "else if",
    "category": "الشروط",
    "arabic": "وإلا إذا",
    "explanation": "يضيف شرطاً إضافياً يُفحص فقط إذا فشل الشرط الأول",
    "example": "if (a) {...} else if (b) {...}",
    "status": "current",
    "template": "if ({{condition1}}) {\n  {{body1}}\n} else if ({{condition2}}) {\n  {{body2}}\n}",
    "variables": [
      { "key": "condition1", "en": "condition 1", "ar": "الشرط الأول", "label": "condition 1 = الشرط الأول", "default": "score >= 90" },
      { "key": "body1", "en": "body 1", "ar": "الجسم الأول", "label": "body 1 = الجسم الأول", "default": "grade = \"A\";" },
      { "key": "condition2", "en": "condition 2", "ar": "الشرط الثاني", "label": "condition 2 = الشرط الثاني", "default": "score >= 80" },
      { "key": "body2", "en": "body 2", "ar": "الجسم الثاني", "label": "body 2 = الجسم الثاني", "default": "grade = \"B\";" }
    ]
  },
  {
    "term": "switch",
    "category": "الشروط",
    "arabic": "تبديل",
    "explanation": "يقارن قيمة واحدة بعدة حالات محتملة وينفّذ الكود المطابق",
    "example": "switch (day) { case 1: ... break; }",
    "status": "current",
    "template": "switch ({{expression}}) {\n  case {{case1}}:\n    {{body1}}\n    break;\n  default:\n    {{defaultBody}}\n}",
    "variables": [
      { "key": "expression", "en": "expression", "ar": "التعبير", "label": "expression = التعبير", "default": "day" },
      { "key": "case1", "en": "case value", "ar": "قيمة الحالة", "label": "case value = قيمة الحالة", "default": "1" },
      { "key": "body1", "en": "case body", "ar": "جسم الحالة", "label": "case body = جسم الحالة", "default": "console.log(\"الأحد\");" },
      { "key": "defaultBody", "en": "default body", "ar": "الجسم الافتراضي", "label": "default body = الجسم الافتراضي", "default": "console.log(\"يوم آخر\");" }
    ]
  },
  {
    "term": "?: (ternary)",
    "category": "الشروط",
    "arabic": "الشرط المختصر",
    "explanation": "طريقة مختصرة لكتابة if...else في سطر واحد يُرجع قيمة",
    "example": "const result = age >= 18 ? \"بالغ\" : \"قاصر\";",
    "status": "current",
    "template": "const {{name}} = {{condition}} ? {{ifTrue}} : {{ifFalse}};",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم المتغير", "label": "name = اسم المتغير", "default": "result" },
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "age >= 18" },
      { "key": "ifTrue", "en": "if true", "ar": "إذا صحيح", "label": "if true = إذا صحيح", "default": "\"بالغ\"" },
      { "key": "ifFalse", "en": "if false", "ar": "إذا خطأ", "label": "if false = إذا خطأ", "default": "\"قاصر\"" }
    ]
  },

  // ==================== الحلقات ====================
  {
    "term": "for",
    "category": "الحلقات",
    "arabic": "حلقة for",
    "explanation": "تكرر تنفيذ كود عدداً محدداً من المرات باستخدام عدّاد",
    "example": "for (let i = 0; i < 10; i++) { ... }",
    "status": "current",
    "template": "for (let {{i}} = {{start}}; {{i}} < {{end}}; {{i}}++) {\n  {{body}}\n}",
    "variables": [
      { "key": "i", "en": "counter", "ar": "العدّاد", "label": "counter = العدّاد", "default": "i" },
      { "key": "start", "en": "start", "ar": "البداية", "label": "start = البداية", "default": "0" },
      { "key": "end", "en": "end", "ar": "النهاية", "label": "end = النهاية", "default": "10" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(i);" }
    ]
  },
  {
    "term": "while",
    "category": "الحلقات",
    "arabic": "حلقة بينما",
    "explanation": "تكرر تنفيذ كود طالما بقي الشرط صحيحاً",
    "example": "while (count < 5) { ... }",
    "status": "current",
    "template": "while ({{condition}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "count < 5" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "count++;" }
    ]
  },
  {
    "term": "do...while",
    "category": "الحلقات",
    "arabic": "حلقة نفّذ...بينما",
    "explanation": "تنفّذ الكود مرة واحدة على الأقل، ثم تكرره طالما الشرط صحيح",
    "example": "do { ... } while (x < 5);",
    "status": "current",
    "template": "do {\n  {{body}}\n} while ({{condition}});",
    "variables": [
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "x++;" },
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "x < 5" }
    ]
  },
  {
    "term": "for...of",
    "category": "الحلقات",
    "arabic": "لكل عنصر في",
    "explanation": "تمرّ على كل قيمة في عنصر قابل للتكرار مثل مصفوفة أو نص",
    "example": "for (const item of array) { ... }",
    "status": "current",
    "template": "for (const {{item}} of {{iterable}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "item" },
      { "key": "iterable", "en": "iterable", "ar": "المجموعة", "label": "iterable = المجموعة", "default": "array" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(item);" }
    ]
  },
  {
    "term": "for...in",
    "category": "الحلقات",
    "arabic": "لكل مفتاح في",
    "explanation": "تمرّ على كل مفتاح (خاصية) قابل للعدّ في كائن",
    "example": "for (const key in obj) { ... }",
    "status": "current",
    "template": "for (const {{key}} in {{object}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "key", "en": "key", "ar": "المفتاح", "label": "key = المفتاح", "default": "key" },
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "obj" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(key, obj[key]);" }
    ]
  },
  {
    "term": "break",
    "category": "الحلقات",
    "arabic": "توقّف",
    "explanation": "يُنهي الحلقة أو switch فوراً ويخرج منها",
    "example": "if (x === 5) break;",
    "status": "current",
    "template": "if ({{condition}}) {\n  break;\n}",
    "variables": [
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "x === 5" }
    ]
  },
  {
    "term": "continue",
    "category": "الحلقات",
    "arabic": "تابع",
    "explanation": "يتخطى بقية التكرار الحالي وينتقل مباشرة للتكرار التالي في الحلقة",
    "example": "if (x % 2 === 0) continue;",
    "status": "current",
    "template": "if ({{condition}}) {\n  continue;\n}",
    "variables": [
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "x % 2 === 0" }
    ]
  },

  // ==================== الدوال ====================
  {
    "term": "function",
    "category": "الدوال",
    "arabic": "دالة",
    "explanation": "تعرّف كتلة كود قابلة لإعادة الاستخدام يمكن استدعاؤها بمعطيات",
    "example": "function greet(name) { return \"مرحباً \" + name; }",
    "status": "current",
    "template": "function {{name}}({{params}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الدالة", "label": "name = اسم الدالة", "default": "greet" },
      { "key": "params", "en": "parameters", "ar": "المعطيات", "label": "parameters = المعطيات", "default": "name" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "return \"مرحباً \" + name;" }
    ]
  },
  {
    "term": "=> (arrow function)",
    "category": "الدوال",
    "arabic": "دالة سهمية",
    "explanation": "صيغة مختصرة لكتابة الدوال، ولا تملك this خاصاً بها",
    "example": "const add = (a, b) => a + b;",
    "status": "current",
    "template": "const {{name}} = ({{params}}) => {{body}};",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الدالة", "label": "name = اسم الدالة", "default": "add" },
      { "key": "params", "en": "parameters", "ar": "المعطيات", "label": "parameters = المعطيات", "default": "a, b" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "a + b" }
    ]
  },
  {
    "term": "return",
    "category": "الدوال",
    "arabic": "إرجاع",
    "explanation": "يُنهي تنفيذ الدالة ويُرجع قيمة إلى مكان استدعائها",
    "example": "return x + y;",
    "status": "current",
    "template": "return {{value}};",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "x + y" }
    ]
  },
  {
    "term": "default parameters",
    "category": "الدوال",
    "arabic": "معطيات افتراضية",
    "explanation": "تسمح بتحديد قيمة افتراضية للمعطى تُستخدم إذا لم يُمرَّر شيء عند الاستدعاء",
    "example": "function greet(name = \"صديق\") { ... }",
    "status": "current",
    "template": "function {{name}}({{param}} = {{defaultValue}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الدالة", "label": "name = اسم الدالة", "default": "greet" },
      { "key": "param", "en": "parameter", "ar": "المعطى", "label": "parameter = المعطى", "default": "name" },
      { "key": "defaultValue", "en": "default value", "ar": "القيمة الافتراضية", "label": "default value = القيمة الافتراضية", "default": "\"صديق\"" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "return \"مرحباً \" + name;" }
    ]
  },
  {
    "term": "...rest",
    "category": "الدوال",
    "arabic": "معطيات الباقي",
    "explanation": "يجمع كل المعطيات الزائدة المرسلة للدالة في مصفوفة واحدة",
    "example": "function sum(...numbers) { ... }",
    "status": "current",
    "template": "function {{name}}(...{{restName}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الدالة", "label": "name = اسم الدالة", "default": "sum" },
      { "key": "restName", "en": "rest name", "ar": "اسم مصفوفة الباقي", "label": "rest name = اسم مصفوفة الباقي", "default": "numbers" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "return numbers.reduce((a, b) => a + b, 0);" }
    ]
  },
  {
    "term": "...spread",
    "category": "الدوال",
    "arabic": "عامل النشر",
    "explanation": "يفكّك عناصر مصفوفة أو كائن ليُدرجها منفردة في مكان آخر (مصفوفة، كائن، أو استدعاء دالة)",
    "example": "const combined = [...arr1, ...arr2];",
    "status": "current",
    "template": "const {{name}} = [...{{source}}];",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "combined" },
      { "key": "source", "en": "source", "ar": "المصدر", "label": "source = المصدر", "default": "arr1, ...arr2" }
    ]
  },

  // ==================== الأصناف ====================
  {
    "term": "class",
    "category": "الأصناف",
    "arabic": "صنف",
    "explanation": "يعرّف قالباً لإنشاء كائنات تشترك في خصائص ودوال",
    "example": "class Person { constructor(name) { this.name = name; } }",
    "status": "current",
    "template": "class {{name}} {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الصنف", "label": "name = اسم الصنف", "default": "Person" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "constructor(name) {\n    this.name = name;\n  }" }
    ]
  },
  {
    "term": "constructor",
    "category": "الأصناف",
    "arabic": "الباني",
    "explanation": "دالة خاصة تُنفَّذ تلقائياً عند إنشاء كائن جديد من الصنف، وتُستخدم لتهيئة خصائصه",
    "example": "constructor(name) { this.name = name; }",
    "status": "current",
    "template": "constructor({{params}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "params", "en": "parameters", "ar": "المعطيات", "label": "parameters = المعطيات", "default": "name" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "this.name = name;" }
    ]
  },
  {
    "term": "extends",
    "category": "الأصناف",
    "arabic": "يرث من",
    "explanation": "يجعل صنفاً يرث خصائص ودوال صنف آخر (الوراثة)",
    "example": "class Student extends Person { ... }",
    "status": "current",
    "template": "class {{child}} extends {{parent}} {\n  {{body}}\n}",
    "variables": [
      { "key": "child", "en": "child class", "ar": "الصنف الوارث", "label": "child class = الصنف الوارث", "default": "Student" },
      { "key": "parent", "en": "parent class", "ar": "الصنف الأب", "label": "parent class = الصنف الأب", "default": "Person" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "" }
    ]
  },
  {
    "term": "super",
    "category": "الأصناف",
    "arabic": "الأب (سوبر)",
    "explanation": "يستدعي باني الصنف الأب أو دواله من داخل صنف وارث",
    "example": "super(name);",
    "status": "current",
    "template": "super({{args}});",
    "variables": [
      { "key": "args", "en": "arguments", "ar": "المعطيات", "label": "arguments = المعطيات", "default": "name" }
    ]
  },
  {
    "term": "static",
    "category": "الأصناف",
    "arabic": "ثابت (على مستوى الصنف)",
    "explanation": "يعرّف خاصية أو دالة تنتمي للصنف نفسه وليس لكائن معيّن مُنشأ منه",
    "example": "static create() { return new Person(); }",
    "status": "current",
    "template": "static {{name}}({{params}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الدالة", "label": "name = اسم الدالة", "default": "create" },
      { "key": "params", "en": "parameters", "ar": "المعطيات", "label": "parameters = المعطيات", "default": "" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "return new Person();" }
    ]
  },
  {
    "term": "get",
    "category": "الأصناف",
    "arabic": "دالة قراءة",
    "explanation": "تعرّف خاصية محسوبة تُقرأ كأنها متغير عادي دون استدعائها كدالة",
    "example": "get fullName() { return this.first + \" \" + this.last; }",
    "status": "current",
    "template": "get {{name}}() {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "fullName" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "return this.first + \" \" + this.last;" }
    ]
  },
  {
    "term": "set",
    "category": "الأصناف",
    "arabic": "دالة كتابة",
    "explanation": "تعرّف دالة تُنفَّذ تلقائياً عند إسناد قيمة لخاصية معيّنة",
    "example": "set fullName(value) { [this.first, this.last] = value.split(\" \"); }",
    "status": "current",
    "template": "set {{name}}({{param}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "fullName" },
      { "key": "param", "en": "parameter", "ar": "المعطى", "label": "parameter = المعطى", "default": "value" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "[this.first, this.last] = value.split(\" \");" }
    ]
  },

  // ==================== معالجة الأخطاء ====================
  {
    "term": "try...catch",
    "category": "معالجة الأخطاء",
    "arabic": "حاول...أمسك",
    "explanation": "ينفّذ كوداً قد يسبب خطأ، ويلتقط الخطأ بدلاً من إيقاف البرنامج",
    "example": "try { ... } catch (e) { console.log(e); }",
    "status": "current",
    "template": "try {\n  {{tryBody}}\n} catch ({{errorName}}) {\n  {{catchBody}}\n}",
    "variables": [
      { "key": "tryBody", "en": "try body", "ar": "جسم المحاولة", "label": "try body = جسم المحاولة", "default": "JSON.parse(data);" },
      { "key": "errorName", "en": "error name", "ar": "اسم الخطأ", "label": "error name = اسم الخطأ", "default": "e" },
      { "key": "catchBody", "en": "catch body", "ar": "جسم الالتقاط", "label": "catch body = جسم الالتقاط", "default": "console.log(e.message);" }
    ]
  },
  {
    "term": "finally",
    "category": "معالجة الأخطاء",
    "arabic": "أخيراً",
    "explanation": "كتلة تُنفَّذ دائماً بعد try/catch، سواء حدث خطأ أم لا",
    "example": "finally { console.log(\"انتهى\"); }",
    "status": "current",
    "template": "finally {\n  {{body}}\n}",
    "variables": [
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(\"انتهى\");" }
    ]
  },
  {
    "term": "throw",
    "category": "معالجة الأخطاء",
    "arabic": "ارمِ خطأ",
    "explanation": "يُنشئ خطأً مخصصاً ويوقف التنفيذ العادي، ليُلتقط لاحقاً بـ catch",
    "example": "throw new Error(\"قيمة غير صالحة\");",
    "status": "current",
    "template": "throw new Error({{message}});",
    "variables": [
      { "key": "message", "en": "message", "ar": "الرسالة", "label": "message = الرسالة", "default": "\"قيمة غير صالحة\"" }
    ]
  },

  // ==================== الوحدات ====================
  {
    "term": "import",
    "category": "الوحدات",
    "arabic": "استيراد",
    "explanation": "يستورد دوالاً أو قيماً مُصدَّرة من ملف آخر",
    "example": "import { greet } from \"./utils.js\";",
    "status": "current",
    "template": "import { {{names}} } from \"{{path}}\";",
    "variables": [
      { "key": "names", "en": "names", "ar": "الأسماء", "label": "names = الأسماء", "default": "greet" },
      { "key": "path", "en": "path", "ar": "المسار", "label": "path = المسار", "default": "./utils.js" }
    ]
  },
  {
    "term": "export",
    "category": "الوحدات",
    "arabic": "تصدير",
    "explanation": "يجعل دالة أو متغيراً قابلاً للاستيراد من ملفات أخرى",
    "example": "export function greet() { ... }",
    "status": "current",
    "template": "export {{declaration}}",
    "variables": [
      { "key": "declaration", "en": "declaration", "ar": "التصريح", "label": "declaration = التصريح", "default": "function greet() {}" }
    ]
  },
  {
    "term": "export default",
    "category": "الوحدات",
    "arabic": "تصدير افتراضي",
    "explanation": "يصدّر قيمة واحدة رئيسية من الملف تُستورد دون أقواس {}",
    "example": "export default function App() { ... }",
    "status": "current",
    "template": "export default {{declaration}}",
    "variables": [
      { "key": "declaration", "en": "declaration", "ar": "التصريح", "label": "declaration = التصريح", "default": "function App() {}" }
    ]
  },

  // ==================== البرمجة غير المتزامنة ====================
  {
    "term": "async",
    "category": "البرمجة غير المتزامنة",
    "arabic": "دالة غير متزامنة",
    "explanation": "تجعل الدالة تُرجع Promise دائماً وتسمح باستخدام await بداخلها",
    "example": "async function getData() { ... }",
    "status": "current",
    "template": "async function {{name}}({{params}}) {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم الدالة", "label": "name = اسم الدالة", "default": "getData" },
      { "key": "params", "en": "parameters", "ar": "المعطيات", "label": "parameters = المعطيات", "default": "" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "const res = await fetch(url);\n  return res.json();" }
    ]
  },
  {
    "term": "await",
    "category": "البرمجة غير المتزامنة",
    "arabic": "انتظر",
    "explanation": "يوقف تنفيذ الدالة غير المتزامنة حتى يكتمل Promise، ثم يُرجع نتيجته",
    "example": "const data = await fetch(url);",
    "status": "current",
    "template": "const {{name}} = await {{promiseExpression}};",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "data" },
      { "key": "promiseExpression", "en": "promise expression", "ar": "تعبير الوعد", "label": "promise expression = تعبير الوعد", "default": "fetch(url)" }
    ]
  },
  {
    "term": "Promise",
    "category": "البرمجة غير المتزامنة",
    "arabic": "الوعد",
    "explanation": "كائن يمثّل نتيجة عملية غير متزامنة ستكتمل لاحقاً بنجاح أو فشل",
    "example": "new Promise((resolve, reject) => { ... });",
    "status": "current",
    "template": "new Promise(({{resolve}}, {{reject}}) => {\n  {{body}}\n});",
    "variables": [
      { "key": "resolve", "en": "resolve", "ar": "دالة النجاح", "label": "resolve = دالة النجاح", "default": "resolve" },
      { "key": "reject", "en": "reject", "ar": "دالة الفشل", "label": "reject = دالة الفشل", "default": "reject" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "resolve(\"تم\");" }
    ]
  },
  {
    "term": "Promise.then",
    "category": "البرمجة غير المتزامنة",
    "arabic": "عند النجاح",
    "explanation": "يُنفَّذ عند اكتمال الـPromise بنجاح، ويستقبل النتيجة",
    "example": "promise.then(result => { ... });",
    "status": "current",
    "template": "{{promise}}.then({{param}} => {\n  {{body}}\n});",
    "variables": [
      { "key": "promise", "en": "promise", "ar": "الوعد", "label": "promise = الوعد", "default": "promise" },
      { "key": "param", "en": "parameter", "ar": "المعطى", "label": "parameter = المعطى", "default": "result" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(result);" }
    ]
  },
  {
    "term": "Promise.catch",
    "category": "البرمجة غير المتزامنة",
    "arabic": "عند الفشل",
    "explanation": "يُنفَّذ إذا فشل الـPromise أو حدث خطأ في سلسلة then",
    "example": "promise.catch(error => { ... });",
    "status": "current",
    "template": "{{promise}}.catch({{param}} => {\n  {{body}}\n});",
    "variables": [
      { "key": "promise", "en": "promise", "ar": "الوعد", "label": "promise = الوعد", "default": "promise" },
      { "key": "param", "en": "parameter", "ar": "المعطى", "label": "parameter = المعطى", "default": "error" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(error);" }
    ]
  },
  {
    "term": "Promise.all",
    "category": "البرمجة غير المتزامنة",
    "arabic": "جميع الوعود",
    "explanation": "ينتظر اكتمال مجموعة من الوعود معاً، ويفشل بمجرد فشل أي واحد منها",
    "example": "Promise.all([p1, p2, p3]).then(...)",
    "status": "current",
    "template": "Promise.all([{{promises}}]).then({{result}} => {\n  {{body}}\n});",
    "variables": [
      { "key": "promises", "en": "promises", "ar": "الوعود", "label": "promises = الوعود", "default": "p1, p2, p3" },
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "results" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(results);" }
    ]
  },

  // ==================== دوال المصفوفات (Array) ====================
  {
    "term": "Array.map",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تحويل كل عنصر",
    "explanation": "يُنشئ مصفوفة جديدة بتطبيق دالة على كل عنصر من المصفوفة الأصلية",
    "example": "const doubled = numbers.map(n => n * 2);",
    "status": "current",
    "template": "const {{result}} = {{array}}.map({{item}} => {{expression}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "doubled" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "numbers" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "n" },
      { "key": "expression", "en": "expression", "ar": "التعبير", "label": "expression = التعبير", "default": "n * 2" }
    ]
  },
  {
    "term": "Array.filter",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تصفية العناصر",
    "explanation": "يُنشئ مصفوفة جديدة تحتوي فقط على العناصر التي تحقق شرطاً معيناً",
    "example": "const evens = numbers.filter(n => n % 2 === 0);",
    "status": "current",
    "template": "const {{result}} = {{array}}.filter({{item}} => {{condition}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "evens" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "numbers" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "n" },
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "n % 2 === 0" }
    ]
  },
  {
    "term": "Array.reduce",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تجميع إلى قيمة واحدة",
    "explanation": "يدمج كل عناصر المصفوفة في قيمة واحدة عبر تراكم النتيجة خطوة بخطوة",
    "example": "const total = numbers.reduce((sum, n) => sum + n, 0);",
    "status": "current",
    "template": "const {{result}} = {{array}}.reduce(({{acc}}, {{item}}) => {{expression}}, {{initial}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "total" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "numbers" },
      { "key": "acc", "en": "accumulator", "ar": "المُجمِّع", "label": "accumulator = المُجمِّع", "default": "sum" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "n" },
      { "key": "expression", "en": "expression", "ar": "التعبير", "label": "expression = التعبير", "default": "sum + n" },
      { "key": "initial", "en": "initial value", "ar": "القيمة الابتدائية", "label": "initial value = القيمة الابتدائية", "default": "0" }
    ]
  },
  {
    "term": "Array.forEach",
    "category": "دوال المصفوفات (Array)",
    "arabic": "لكل عنصر",
    "explanation": "ينفّذ دالة على كل عنصر في المصفوفة دون إرجاع مصفوفة جديدة",
    "example": "numbers.forEach(n => console.log(n));",
    "status": "current",
    "template": "{{array}}.forEach({{item}} => {\n  {{body}}\n});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "numbers" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "n" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(n);" }
    ]
  },
  {
    "term": "Array.push",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إضافة للنهاية",
    "explanation": "يضيف عنصراً واحداً أو أكثر إلى نهاية المصفوفة ويُرجع الطول الجديد",
    "example": "arr.push(4);",
    "status": "current",
    "template": "{{array}}.push({{value}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "4" }
    ]
  },
  {
    "term": "Array.pop",
    "category": "دوال المصفوفات (Array)",
    "arabic": "حذف من النهاية",
    "explanation": "يحذف آخر عنصر من المصفوفة ويُرجعه",
    "example": "const last = arr.pop();",
    "status": "current",
    "template": "const {{result}} = {{array}}.pop();",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "last" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" }
    ]
  },
  {
    "term": "Array.shift",
    "category": "دوال المصفوفات (Array)",
    "arabic": "حذف من البداية",
    "explanation": "يحذف أول عنصر من المصفوفة ويُرجعه، ويُزيح باقي العناصر للأمام",
    "example": "const first = arr.shift();",
    "status": "current",
    "template": "const {{result}} = {{array}}.shift();",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "first" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" }
    ]
  },
  {
    "term": "Array.unshift",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إضافة للبداية",
    "explanation": "يضيف عنصراً واحداً أو أكثر إلى بداية المصفوفة",
    "example": "arr.unshift(0);",
    "status": "current",
    "template": "{{array}}.unshift({{value}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "0" }
    ]
  },
  {
    "term": "Array.slice",
    "category": "دوال المصفوفات (Array)",
    "arabic": "اقتطاع جزء",
    "explanation": "يُرجع جزءاً جديداً من المصفوفة بين فهرسين دون تعديل الأصلية",
    "example": "const part = arr.slice(1, 3);",
    "status": "current",
    "template": "const {{result}} = {{array}}.slice({{start}}, {{end}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "part" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "start", "en": "start", "ar": "البداية", "label": "start = البداية", "default": "1" },
      { "key": "end", "en": "end", "ar": "النهاية", "label": "end = النهاية", "default": "3" }
    ]
  },
  {
    "term": "Array.splice",
    "category": "دوال المصفوفات (Array)",
    "arabic": "حذف/إضافة في مكان",
    "explanation": "يحذف و/أو يضيف عناصر في مكان محدد من المصفوفة، ويُعدّل المصفوفة الأصلية مباشرة",
    "example": "arr.splice(1, 2, \"جديد\");",
    "status": "current",
    "template": "{{array}}.splice({{start}}, {{deleteCount}}, {{items}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "start", "en": "start", "ar": "موضع البداية", "label": "start = موضع البداية", "default": "1" },
      { "key": "deleteCount", "en": "delete count", "ar": "عدد المحذوفات", "label": "delete count = عدد المحذوفات", "default": "2" },
      { "key": "items", "en": "items to add", "ar": "عناصر الإضافة", "label": "items to add = عناصر الإضافة", "default": "\"جديد\"" }
    ]
  },
  {
    "term": "Array.concat",
    "category": "دوال المصفوفات (Array)",
    "arabic": "دمج مصفوفات",
    "explanation": "يُنشئ مصفوفة جديدة بدمج مصفوفتين أو أكثر دون تعديل الأصليتين",
    "example": "const merged = arr1.concat(arr2);",
    "status": "current",
    "template": "const {{result}} = {{array1}}.concat({{array2}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "merged" },
      { "key": "array1", "en": "array 1", "ar": "المصفوفة الأولى", "label": "array 1 = المصفوفة الأولى", "default": "arr1" },
      { "key": "array2", "en": "array 2", "ar": "المصفوفة الثانية", "label": "array 2 = المصفوفة الثانية", "default": "arr2" }
    ]
  },
  {
    "term": "Array.join",
    "category": "دوال المصفوفات (Array)",
    "arabic": "دمج إلى نص",
    "explanation": "يحوّل عناصر المصفوفة إلى نص واحد مفصول بفاصل محدد",
    "example": "const str = arr.join(\", \");",
    "status": "current",
    "template": "const {{result}} = {{array}}.join(\"{{separator}}\");",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "str" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "separator", "en": "separator", "ar": "الفاصل", "label": "separator = الفاصل", "default": ", " }
    ]
  },
  {
    "term": "Array.find",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إيجاد أول عنصر",
    "explanation": "يُرجع أول عنصر يحقق شرطاً معيناً، أو undefined إن لم يوجد",
    "example": "const found = users.find(u => u.id === 5);",
    "status": "current",
    "template": "const {{result}} = {{array}}.find({{item}} => {{condition}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "found" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "users" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "u" },
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "u.id === 5" }
    ]
  },
  {
    "term": "Array.findIndex",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إيجاد فهرس العنصر",
    "explanation": "يُرجع فهرس أول عنصر يحقق شرطاً معيناً، أو -1 إن لم يوجد",
    "example": "const index = users.findIndex(u => u.id === 5);",
    "status": "current",
    "template": "const {{result}} = {{array}}.findIndex({{item}} => {{condition}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "index" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "users" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "u" },
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "u.id === 5" }
    ]
  },
  {
    "term": "Array.includes",
    "category": "دوال المصفوفات (Array)",
    "arabic": "التحقق من الاحتواء",
    "explanation": "يتحقق إن كانت المصفوفة تحتوي على قيمة معينة، ويُرجع true أو false",
    "example": "arr.includes(3);",
    "status": "current",
    "template": "{{array}}.includes({{value}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "3" }
    ]
  },
  {
    "term": "Array.indexOf",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إيجاد فهرس القيمة",
    "explanation": "يُرجع فهرس أول ظهور لقيمة معينة، أو -1 إن لم توجد",
    "example": "arr.indexOf(\"a\");",
    "status": "current",
    "template": "{{array}}.indexOf({{value}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"a\"" }
    ]
  },
  {
    "term": "Array.sort",
    "category": "دوال المصفوفات (Array)",
    "arabic": "ترتيب",
    "explanation": "يرتّب عناصر المصفوفة في مكانها حسب دالة مقارنة اختيارية",
    "example": "numbers.sort((a, b) => a - b);",
    "status": "current",
    "template": "{{array}}.sort(({{a}}, {{b}}) => {{expression}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "numbers" },
      { "key": "a", "en": "a", "ar": "أ", "label": "a = أ", "default": "a" },
      { "key": "b", "en": "b", "ar": "ب", "label": "b = ب", "default": "b" },
      { "key": "expression", "en": "expression", "ar": "التعبير", "label": "expression = التعبير", "default": "a - b" }
    ]
  },
  {
    "term": "Array.reverse",
    "category": "دوال المصفوفات (Array)",
    "arabic": "عكس الترتيب",
    "explanation": "يعكس ترتيب عناصر المصفوفة في مكانها",
    "example": "arr.reverse();",
    "status": "current",
    "template": "{{array}}.reverse();",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" }
    ]
  },
  {
    "term": "Array.flat",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تسطيح المصفوفة",
    "explanation": "يُنشئ مصفوفة جديدة بدمج مصفوفات متداخلة إلى مستوى واحد بعمق محدد",
    "example": "const flat = nested.flat(1);",
    "status": "current",
    "template": "const {{result}} = {{array}}.flat({{depth}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "flat" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "nested" },
      { "key": "depth", "en": "depth", "ar": "العمق", "label": "depth = العمق", "default": "1" }
    ]
  },
  {
    "term": "Array.some",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تحقق من عنصر واحد على الأقل",
    "explanation": "يُرجع true إذا حقق عنصر واحد على الأقل في المصفوفة الشرط",
    "example": "const hasAdult = ages.some(a => a >= 18);",
    "status": "current",
    "template": "const {{result}} = {{array}}.some({{item}} => {{condition}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "hasAdult" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "ages" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "a" },
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "a >= 18" }
    ]
  },
  {
    "term": "Array.every",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تحقق من كل العناصر",
    "explanation": "يُرجع true فقط إذا حقق جميع عناصر المصفوفة الشرط",
    "example": "const allAdults = ages.every(a => a >= 18);",
    "status": "current",
    "template": "const {{result}} = {{array}}.every({{item}} => {{condition}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "allAdults" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "ages" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "a" },
      { "key": "condition", "en": "condition", "ar": "الشرط", "label": "condition = الشرط", "default": "a >= 18" }
    ]
  },
  {
    "term": "Array.isArray",
    "category": "دوال المصفوفات (Array)",
    "arabic": "التحقق من كونه مصفوفة",
    "explanation": "يتحقق إن كانت القيمة المُعطاة مصفوفة فعلاً",
    "example": "Array.isArray(value);",
    "status": "current",
    "template": "Array.isArray({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "value" }
    ]
  },

  // ==================== دوال النصوص (String) ====================
  {
    "term": "String.slice",
    "category": "دوال النصوص (String)",
    "arabic": "اقتطاع جزء من النص",
    "explanation": "يُرجع جزءاً من النص بين موضعين دون تعديل النص الأصلي",
    "example": "\"hello\".slice(1, 3);",
    "status": "current",
    "template": "{{str}}.slice({{start}}, {{end}});",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hello\"" },
      { "key": "start", "en": "start", "ar": "البداية", "label": "start = البداية", "default": "1" },
      { "key": "end", "en": "end", "ar": "النهاية", "label": "end = النهاية", "default": "3" }
    ]
  },
  {
    "term": "String.split",
    "category": "دوال النصوص (String)",
    "arabic": "تقسيم إلى مصفوفة",
    "explanation": "يقسّم النص إلى مصفوفة من الأجزاء بناءً على فاصل محدد",
    "example": "\"a,b,c\".split(\",\");",
    "status": "current",
    "template": "{{str}}.split(\"{{separator}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"a,b,c\"" },
      { "key": "separator", "en": "separator", "ar": "الفاصل", "label": "separator = الفاصل", "default": "," }
    ]
  },
  {
    "term": "String.replace",
    "category": "دوال النصوص (String)",
    "arabic": "استبدال أول تطابق",
    "explanation": "يستبدل أول تطابق لجزء من النص بجزء آخر، ويُرجع نصاً جديداً",
    "example": "\"hello world\".replace(\"world\", \"there\");",
    "status": "current",
    "template": "{{str}}.replace(\"{{search}}\", \"{{replacement}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hello world\"" },
      { "key": "search", "en": "search", "ar": "المطلوب استبداله", "label": "search = المطلوب استبداله", "default": "world" },
      { "key": "replacement", "en": "replacement", "ar": "البديل", "label": "replacement = البديل", "default": "there" }
    ]
  },
  {
    "term": "String.replaceAll",
    "category": "دوال النصوص (String)",
    "arabic": "استبدال كل التطابقات",
    "explanation": "يستبدل كل تطابقات جزء من النص بجزء آخر",
    "example": "\"a-a-a\".replaceAll(\"-\", \"+\");",
    "status": "current",
    "template": "{{str}}.replaceAll(\"{{search}}\", \"{{replacement}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"a-a-a\"" },
      { "key": "search", "en": "search", "ar": "المطلوب استبداله", "label": "search = المطلوب استبداله", "default": "-" },
      { "key": "replacement", "en": "replacement", "ar": "البديل", "label": "replacement = البديل", "default": "+" }
    ]
  },
  {
    "term": "String.trim",
    "category": "دوال النصوص (String)",
    "arabic": "إزالة الفراغات",
    "explanation": "يُزيل الفراغات الزائدة من بداية ونهاية النص",
    "example": "\"  hi  \".trim();",
    "status": "current",
    "template": "{{str}}.trim();",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"  hi  \"" }
    ]
  },
  {
    "term": "String.toUpperCase",
    "category": "دوال النصوص (String)",
    "arabic": "أحرف كبيرة",
    "explanation": "يحوّل كل أحرف النص إلى أحرف كبيرة (إنجليزية)",
    "example": "\"hi\".toUpperCase();",
    "status": "current",
    "template": "{{str}}.toUpperCase();",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hi\"" }
    ]
  },
  {
    "term": "String.toLowerCase",
    "category": "دوال النصوص (String)",
    "arabic": "أحرف صغيرة",
    "explanation": "يحوّل كل أحرف النص إلى أحرف صغيرة (إنجليزية)",
    "example": "\"HI\".toLowerCase();",
    "status": "current",
    "template": "{{str}}.toLowerCase();",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"HI\"" }
    ]
  },
  {
    "term": "String.includes",
    "category": "دوال النصوص (String)",
    "arabic": "التحقق من الاحتواء",
    "explanation": "يتحقق إن كان النص يحتوي على جزء نصي معين",
    "example": "\"hello\".includes(\"ell\");",
    "status": "current",
    "template": "{{str}}.includes(\"{{search}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hello\"" },
      { "key": "search", "en": "search", "ar": "المطلوب البحث عنه", "label": "search = المطلوب البحث عنه", "default": "ell" }
    ]
  },
  {
    "term": "String.indexOf",
    "category": "دوال النصوص (String)",
    "arabic": "إيجاد موضع النص",
    "explanation": "يُرجع موضع أول ظهور لجزء نصي، أو -1 إن لم يوجد",
    "example": "\"hello\".indexOf(\"l\");",
    "status": "current",
    "template": "{{str}}.indexOf(\"{{search}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hello\"" },
      { "key": "search", "en": "search", "ar": "المطلوب البحث عنه", "label": "search = المطلوب البحث عنه", "default": "l" }
    ]
  },
  {
    "term": "String.charAt",
    "category": "دوال النصوص (String)",
    "arabic": "الحرف عند موضع",
    "explanation": "يُرجع الحرف الموجود في موضع محدد من النص",
    "example": "\"hello\".charAt(1);",
    "status": "current",
    "template": "{{str}}.charAt({{index}});",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hello\"" },
      { "key": "index", "en": "index", "ar": "الموضع", "label": "index = الموضع", "default": "1" }
    ]
  },
  {
    "term": "String.repeat",
    "category": "دوال النصوص (String)",
    "arabic": "تكرار النص",
    "explanation": "يُنشئ نصاً جديداً بتكرار النص الأصلي عدداً محدداً من المرات",
    "example": "\"ab\".repeat(3);",
    "status": "current",
    "template": "{{str}}.repeat({{count}});",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"ab\"" },
      { "key": "count", "en": "count", "ar": "عدد المرات", "label": "count = عدد المرات", "default": "3" }
    ]
  },
  {
    "term": "String.padStart",
    "category": "دوال النصوص (String)",
    "arabic": "حشو من البداية",
    "explanation": "يضيف أحرفاً في بداية النص حتى يصل لطول معين",
    "example": "\"5\".padStart(2, \"0\");",
    "status": "current",
    "template": "{{str}}.padStart({{length}}, \"{{padChar}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"5\"" },
      { "key": "length", "en": "target length", "ar": "الطول المطلوب", "label": "target length = الطول المطلوب", "default": "2" },
      { "key": "padChar", "en": "pad character", "ar": "حرف الحشو", "label": "pad character = حرف الحشو", "default": "0" }
    ]
  },
  {
    "term": "String.startsWith",
    "category": "دوال النصوص (String)",
    "arabic": "يبدأ بـ",
    "explanation": "يتحقق إن كان النص يبدأ بجزء نصي معين",
    "example": "\"hello\".startsWith(\"he\");",
    "status": "current",
    "template": "{{str}}.startsWith(\"{{search}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hello\"" },
      { "key": "search", "en": "search", "ar": "المطلوب البحث عنه", "label": "search = المطلوب البحث عنه", "default": "he" }
    ]
  },
  {
    "term": "String.endsWith",
    "category": "دوال النصوص (String)",
    "arabic": "ينتهي بـ",
    "explanation": "يتحقق إن كان النص ينتهي بجزء نصي معين",
    "example": "\"hello\".endsWith(\"lo\");",
    "status": "current",
    "template": "{{str}}.endsWith(\"{{search}}\");",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"hello\"" },
      { "key": "search", "en": "search", "ar": "المطلوب البحث عنه", "label": "search = المطلوب البحث عنه", "default": "lo" }
    ]
  },
  {
    "term": "`template literal`",
    "category": "دوال النصوص (String)",
    "arabic": "النص المُهيّأ",
    "explanation": "يسمح بإدراج متغيرات مباشرة داخل النص باستخدام ${} وكتابة نصوص متعددة الأسطر",
    "example": "`مرحباً ${name}, لديك ${count} رسائل`",
    "status": "current",
    "template": "`{{textBefore}}${{{variable}}}{{textAfter}}`",
    "variables": [
      { "key": "textBefore", "en": "text before", "ar": "النص قبل", "label": "text before = النص قبل", "default": "مرحباً " },
      { "key": "variable", "en": "variable", "ar": "المتغير", "label": "variable = المتغير", "default": "name" },
      { "key": "textAfter", "en": "text after", "ar": "النص بعد", "label": "text after = النص بعد", "default": "" }
    ]
  },

  // ==================== دوال الكائنات (Object) ====================
  {
    "term": "Object.keys",
    "category": "دوال الكائنات (Object)",
    "arabic": "مفاتيح الكائن",
    "explanation": "يُرجع مصفوفة بأسماء كل خصائص الكائن",
    "example": "Object.keys({a: 1, b: 2});",
    "status": "current",
    "template": "Object.keys({{object}});",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "obj" }
    ]
  },
  {
    "term": "Object.values",
    "category": "دوال الكائنات (Object)",
    "arabic": "قيم الكائن",
    "explanation": "يُرجع مصفوفة بكل قيم خصائص الكائن",
    "example": "Object.values({a: 1, b: 2});",
    "status": "current",
    "template": "Object.values({{object}});",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "obj" }
    ]
  },
  {
    "term": "Object.entries",
    "category": "دوال الكائنات (Object)",
    "arabic": "أزواج الكائن",
    "explanation": "يُرجع مصفوفة من أزواج [مفتاح, قيمة] لكل خاصية في الكائن",
    "example": "Object.entries({a: 1, b: 2});",
    "status": "current",
    "template": "Object.entries({{object}});",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "obj" }
    ]
  },
  {
    "term": "Object.assign",
    "category": "دوال الكائنات (Object)",
    "arabic": "دمج الكائنات",
    "explanation": "يدمج خصائص كائن أو أكثر في كائن هدف ويُرجعه",
    "example": "Object.assign({}, obj1, obj2);",
    "status": "current",
    "template": "Object.assign({}, {{source1}}, {{source2}});",
    "variables": [
      { "key": "source1", "en": "source 1", "ar": "المصدر الأول", "label": "source 1 = المصدر الأول", "default": "obj1" },
      { "key": "source2", "en": "source 2", "ar": "المصدر الثاني", "label": "source 2 = المصدر الثاني", "default": "obj2" }
    ]
  },
  {
    "term": "Object.freeze",
    "category": "دوال الكائنات (Object)",
    "arabic": "تجميد الكائن",
    "explanation": "يمنع إضافة أو حذف أو تعديل خصائص الكائن بعد التجميد",
    "example": "Object.freeze(obj);",
    "status": "current",
    "template": "Object.freeze({{object}});",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "obj" }
    ]
  },
  {
    "term": "Object.hasOwnProperty",
    "category": "دوال الكائنات (Object)",
    "arabic": "التحقق من ملكية الخاصية",
    "explanation": "يتحقق إن كان الكائن يملك خاصية معينة مباشرة (وليست موروثة)",
    "example": "obj.hasOwnProperty(\"name\");",
    "status": "current",
    "template": "{{object}}.hasOwnProperty(\"{{property}}\");",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "obj" },
      { "key": "property", "en": "property", "ar": "الخاصية", "label": "property = الخاصية", "default": "name" }
    ]
  },

  // ==================== الرياضيات (Math) و JSON ====================
  {
    "term": "Math.round",
    "category": "الرياضيات (Math)",
    "arabic": "تقريب لأقرب عدد صحيح",
    "explanation": "يُقرِّب رقماً عشرياً لأقرب عدد صحيح",
    "example": "Math.round(4.5);",
    "status": "current",
    "template": "Math.round({{number}});",
    "variables": [
      { "key": "number", "en": "number", "ar": "الرقم", "label": "number = الرقم", "default": "4.5" }
    ]
  },
  {
    "term": "Math.floor",
    "category": "الرياضيات (Math)",
    "arabic": "تقريب لأسفل",
    "explanation": "يُقرِّب رقماً عشرياً لأقرب عدد صحيح أصغر منه أو يساويه",
    "example": "Math.floor(4.9);",
    "status": "current",
    "template": "Math.floor({{number}});",
    "variables": [
      { "key": "number", "en": "number", "ar": "الرقم", "label": "number = الرقم", "default": "4.9" }
    ]
  },
  {
    "term": "Math.ceil",
    "category": "الرياضيات (Math)",
    "arabic": "تقريب لأعلى",
    "explanation": "يُقرِّب رقماً عشرياً لأقرب عدد صحيح أكبر منه أو يساويه",
    "example": "Math.ceil(4.1);",
    "status": "current",
    "template": "Math.ceil({{number}});",
    "variables": [
      { "key": "number", "en": "number", "ar": "الرقم", "label": "number = الرقم", "default": "4.1" }
    ]
  },
  {
    "term": "Math.random",
    "category": "الرياضيات (Math)",
    "arabic": "رقم عشوائي",
    "explanation": "يُنتج رقماً عشرياً عشوائياً بين 0 (شامل) و1 (غير شامل)",
    "example": "Math.random();",
    "status": "current",
    "template": "Math.random();",
    "variables": []
  },
  {
    "term": "Math.max",
    "category": "الرياضيات (Math)",
    "arabic": "أكبر قيمة",
    "explanation": "يُرجع أكبر رقم من بين مجموعة أرقام مُمرَّرة",
    "example": "Math.max(3, 7, 2);",
    "status": "current",
    "template": "Math.max({{numbers}});",
    "variables": [
      { "key": "numbers", "en": "numbers", "ar": "الأرقام", "label": "numbers = الأرقام", "default": "3, 7, 2" }
    ]
  },
  {
    "term": "Math.min",
    "category": "الرياضيات (Math)",
    "arabic": "أصغر قيمة",
    "explanation": "يُرجع أصغر رقم من بين مجموعة أرقام مُمرَّرة",
    "example": "Math.min(3, 7, 2);",
    "status": "current",
    "template": "Math.min({{numbers}});",
    "variables": [
      { "key": "numbers", "en": "numbers", "ar": "الأرقام", "label": "numbers = الأرقام", "default": "3, 7, 2" }
    ]
  },
  {
    "term": "Math.pow",
    "category": "الرياضيات (Math)",
    "arabic": "رفع لأس",
    "explanation": "يرفع رقماً إلى قوة (أس) معينة",
    "example": "Math.pow(2, 3);",
    "status": "current",
    "template": "Math.pow({{base}}, {{exponent}});",
    "variables": [
      { "key": "base", "en": "base", "ar": "الأساس", "label": "base = الأساس", "default": "2" },
      { "key": "exponent", "en": "exponent", "ar": "الأس", "label": "exponent = الأس", "default": "3" }
    ]
  },
  {
    "term": "Math.sqrt",
    "category": "الرياضيات (Math)",
    "arabic": "الجذر التربيعي",
    "explanation": "يحسب الجذر التربيعي لرقم موجب. إن كان الرقم سالباً يُرجع NaN لأن الجذر التربيعي للأعداد السالبة غير معرَّف ضمن الأعداد الحقيقية",
    "example": "Math.sqrt(16);",
    "status": "current",
    "template": "Math.sqrt({{number}});",
    "variables": [
      { "key": "number", "en": "number", "ar": "الرقم", "label": "number = الرقم", "default": "16" }
    ]
  },
  {
    "term": "Math.abs",
    "category": "الرياضيات (Math)",
    "arabic": "القيمة المطلقة",
    "explanation": "يُرجع القيمة المطلقة (الموجبة دائماً) لرقم",
    "example": "Math.abs(-5);",
    "status": "current",
    "template": "Math.abs({{number}});",
    "variables": [
      { "key": "number", "en": "number", "ar": "الرقم", "label": "number = الرقم", "default": "-5" }
    ]
  },
  {
    "term": "JSON.stringify",
    "category": "JSON",
    "arabic": "تحويل إلى نص JSON",
    "explanation": "يحوّل كائن أو مصفوفة JavaScript إلى نص بصيغة JSON",
    "example": "JSON.stringify({name: \"سارة\"});",
    "status": "current",
    "template": "JSON.stringify({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "obj" }
    ]
  },
  {
    "term": "JSON.parse",
    "category": "JSON",
    "arabic": "تحليل نص JSON",
    "explanation": "يحوّل نص بصيغة JSON إلى كائن أو مصفوفة JavaScript فعلية",
    "example": "JSON.parse('{\"name\": \"سارة\"}');",
    "status": "current",
    "template": "JSON.parse({{jsonString}});",
    "variables": [
      { "key": "jsonString", "en": "JSON string", "ar": "نص JSON", "label": "JSON string = نص JSON", "default": "jsonText" }
    ]
  },

  // ==================== Map و Set ====================
  {
    "term": "new Map",
    "category": "Map و Set",
    "arabic": "إنشاء خريطة",
    "explanation": "يُنشئ بنية بيانات من أزواج مفتاح-قيمة، تحفظ ترتيب الإدخال وتقبل أي نوع كمفتاح",
    "example": "const map = new Map();",
    "status": "current",
    "template": "const {{name}} = new Map();",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "map" }
    ]
  },
  {
    "term": "Map.set",
    "category": "Map و Set",
    "arabic": "إضافة زوج مفتاح-قيمة",
    "explanation": "يضيف أو يُحدِّث زوج مفتاح-قيمة في الخريطة",
    "example": "map.set(\"name\", \"سارة\");",
    "status": "current",
    "template": "{{map}}.set({{key}}, {{value}});",
    "variables": [
      { "key": "map", "en": "map", "ar": "الخريطة", "label": "map = الخريطة", "default": "map" },
      { "key": "key", "en": "key", "ar": "المفتاح", "label": "key = المفتاح", "default": "\"name\"" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"سارة\"" }
    ]
  },
  {
    "term": "Map.get",
    "category": "Map و Set",
    "arabic": "قراءة قيمة من الخريطة",
    "explanation": "يُرجع القيمة المرتبطة بمفتاح معين في الخريطة",
    "example": "map.get(\"name\");",
    "status": "current",
    "template": "{{map}}.get({{key}});",
    "variables": [
      { "key": "map", "en": "map", "ar": "الخريطة", "label": "map = الخريطة", "default": "map" },
      { "key": "key", "en": "key", "ar": "المفتاح", "label": "key = المفتاح", "default": "\"name\"" }
    ]
  },
  {
    "term": "new Set",
    "category": "Map و Set",
    "arabic": "إنشاء مجموعة",
    "explanation": "يُنشئ بنية بيانات تحفظ قيماً فريدة فقط بدون تكرار",
    "example": "const set = new Set([1, 2, 2, 3]);",
    "status": "current",
    "template": "const {{name}} = new Set({{values}});",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "set" },
      { "key": "values", "en": "initial values", "ar": "القيم الابتدائية", "label": "initial values = القيم الابتدائية", "default": "[1, 2, 2, 3]" }
    ]
  },
  {
    "term": "Set.add",
    "category": "Map و Set",
    "arabic": "إضافة قيمة للمجموعة",
    "explanation": "يضيف قيمة جديدة للمجموعة إن لم تكن موجودة مسبقاً",
    "example": "set.add(4);",
    "status": "current",
    "template": "{{set}}.add({{value}});",
    "variables": [
      { "key": "set", "en": "set", "ar": "المجموعة", "label": "set = المجموعة", "default": "set" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "4" }
    ]
  },

  // ==================== اختيار عناصر DOM ====================
  {
    "term": "document.querySelector",
    "category": "اختيار عناصر DOM",
    "arabic": "اختيار أول عنصر مطابق",
    "explanation": "يُرجع أول عنصر في الصفحة يطابق محدد CSS معطى",
    "example": "document.querySelector(\".box\");",
    "status": "current",
    "template": "document.querySelector(\"{{selector}}\");",
    "variables": [
      { "key": "selector", "en": "selector", "ar": "المحدد", "label": "selector = المحدد", "default": ".box" }
    ]
  },
  {
    "term": "document.querySelectorAll",
    "category": "اختيار عناصر DOM",
    "arabic": "اختيار كل العناصر المطابقة",
    "explanation": "يُرجع قائمة بكل العناصر التي تطابق محدد CSS معطى",
    "example": "document.querySelectorAll(\".item\");",
    "status": "current",
    "template": "document.querySelectorAll(\"{{selector}}\");",
    "variables": [
      { "key": "selector", "en": "selector", "ar": "المحدد", "label": "selector = المحدد", "default": ".item" }
    ]
  },
  {
    "term": "document.getElementById",
    "category": "اختيار عناصر DOM",
    "arabic": "اختيار عنصر بالمعرّف",
    "explanation": "يُرجع العنصر الذي يحمل قيمة id المحددة",
    "example": "document.getElementById(\"main\");",
    "status": "current",
    "template": "document.getElementById(\"{{id}}\");",
    "variables": [
      { "key": "id", "en": "id", "ar": "المعرّف", "label": "id = المعرّف", "default": "main" }
    ]
  },
  {
    "term": "document.getElementsByClassName",
    "category": "اختيار عناصر DOM",
    "arabic": "اختيار عناصر بالصنف",
    "explanation": "يُرجع مجموعة حيّة بكل العناصر التي تحمل صنف CSS معيّن",
    "example": "document.getElementsByClassName(\"card\");",
    "status": "current",
    "template": "document.getElementsByClassName(\"{{className}}\");",
    "variables": [
      { "key": "className", "en": "class name", "ar": "اسم الصنف", "label": "class name = اسم الصنف", "default": "card" }
    ]
  },

  // ==================== التعامل مع عناصر DOM ====================
  {
    "term": "document.createElement",
    "category": "التعامل مع عناصر DOM",
    "arabic": "إنشاء عنصر جديد",
    "explanation": "يُنشئ عنصر HTML جديداً في الذاكرة لم يُدرج بعد في الصفحة",
    "example": "const div = document.createElement(\"div\");",
    "status": "current",
    "template": "const {{name}} = document.createElement(\"{{tag}}\");",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "div" },
      { "key": "tag", "en": "tag", "ar": "الوسم", "label": "tag = الوسم", "default": "div" }
    ]
  },
  {
    "term": "appendChild",
    "category": "التعامل مع عناصر DOM",
    "arabic": "إضافة عنصر ابن",
    "explanation": "يضيف عنصراً كآخر ابن داخل عنصر آخر في الصفحة",
    "example": "parent.appendChild(child);",
    "status": "current",
    "template": "{{parent}}.appendChild({{child}});",
    "variables": [
      { "key": "parent", "en": "parent", "ar": "الأب", "label": "parent = الأب", "default": "parent" },
      { "key": "child", "en": "child", "ar": "الابن", "label": "child = الابن", "default": "child" }
    ]
  },
  {
    "term": "removeChild",
    "category": "التعامل مع عناصر DOM",
    "arabic": "حذف عنصر ابن",
    "explanation": "يحذف عنصراً محدداً من داخل عنصر أب في الصفحة",
    "example": "parent.removeChild(child);",
    "status": "current",
    "template": "{{parent}}.removeChild({{child}});",
    "variables": [
      { "key": "parent", "en": "parent", "ar": "الأب", "label": "parent = الأب", "default": "parent" },
      { "key": "child", "en": "child", "ar": "الابن", "label": "child = الابن", "default": "child" }
    ]
  },
  {
    "term": "innerHTML",
    "category": "التعامل مع عناصر DOM",
    "arabic": "المحتوى الداخلي (HTML)",
    "explanation": "يقرأ أو يُعيّن محتوى العنصر كنص HTML يُفسَّر ويُعرض ككود",
    "example": "el.innerHTML = \"<b>مرحباً</b>\";",
    "status": "current",
    "template": "{{element}}.innerHTML = \"{{html}}\";",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "html", "en": "html", "ar": "كود HTML", "label": "html = كود HTML", "default": "<b>مرحباً</b>" }
    ]
  },
  {
    "term": "textContent",
    "category": "التعامل مع عناصر DOM",
    "arabic": "المحتوى النصي",
    "explanation": "يقرأ أو يُعيّن محتوى العنصر كنص عادي دون تفسير أي وسوم HTML",
    "example": "el.textContent = \"مرحباً\";",
    "status": "current",
    "template": "{{element}}.textContent = \"{{text}}\";",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "text", "en": "text", "ar": "النص", "label": "text = النص", "default": "مرحباً" }
    ]
  },
  {
    "term": "setAttribute",
    "category": "التعامل مع عناصر DOM",
    "arabic": "تعيين سمة",
    "explanation": "يُعيّن قيمة لسمة (attribute) معينة على العنصر",
    "example": "el.setAttribute(\"data-id\", \"5\");",
    "status": "current",
    "template": "{{element}}.setAttribute(\"{{attribute}}\", \"{{value}}\");",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "attribute", "en": "attribute", "ar": "السمة", "label": "attribute = السمة", "default": "data-id" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "5" }
    ]
  },
  {
    "term": "getAttribute",
    "category": "التعامل مع عناصر DOM",
    "arabic": "قراءة سمة",
    "explanation": "يُرجع قيمة سمة (attribute) معينة من العنصر",
    "example": "el.getAttribute(\"data-id\");",
    "status": "current",
    "template": "{{element}}.getAttribute(\"{{attribute}}\");",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "attribute", "en": "attribute", "ar": "السمة", "label": "attribute = السمة", "default": "data-id" }
    ]
  },
  {
    "term": "classList.add",
    "category": "التعامل مع عناصر DOM",
    "arabic": "إضافة صنف CSS",
    "explanation": "يضيف صنف CSS واحداً أو أكثر إلى العنصر",
    "example": "el.classList.add(\"active\");",
    "status": "current",
    "template": "{{element}}.classList.add(\"{{className}}\");",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "className", "en": "class name", "ar": "اسم الصنف", "label": "class name = اسم الصنف", "default": "active" }
    ]
  },
  {
    "term": "classList.remove",
    "category": "التعامل مع عناصر DOM",
    "arabic": "حذف صنف CSS",
    "explanation": "يحذف صنف CSS معيناً من العنصر",
    "example": "el.classList.remove(\"active\");",
    "status": "current",
    "template": "{{element}}.classList.remove(\"{{className}}\");",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "className", "en": "class name", "ar": "اسم الصنف", "label": "class name = اسم الصنف", "default": "active" }
    ]
  },
  {
    "term": "classList.toggle",
    "category": "التعامل مع عناصر DOM",
    "arabic": "تبديل صنف CSS",
    "explanation": "يضيف الصنف إن لم يكن موجوداً، أو يحذفه إن كان موجوداً",
    "example": "el.classList.toggle(\"active\");",
    "status": "current",
    "template": "{{element}}.classList.toggle(\"{{className}}\");",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "className", "en": "class name", "ar": "اسم الصنف", "label": "class name = اسم الصنف", "default": "active" }
    ]
  },
  {
    "term": "classList.contains",
    "category": "التعامل مع عناصر DOM",
    "arabic": "التحقق من وجود صنف",
    "explanation": "يتحقق إن كان العنصر يحمل صنف CSS معيناً",
    "example": "el.classList.contains(\"active\");",
    "status": "current",
    "template": "{{element}}.classList.contains(\"{{className}}\");",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "className", "en": "class name", "ar": "اسم الصنف", "label": "class name = اسم الصنف", "default": "active" }
    ]
  },

  // ==================== الأحداث (Events) ====================
  {
    "term": "addEventListener",
    "category": "الأحداث (Events)",
    "arabic": "إضافة مستمع حدث",
    "explanation": "يربط دالة بحدث معين على عنصر، بحيث تُنفَّذ الدالة عند وقوع الحدث",
    "example": "btn.addEventListener(\"click\", () => { ... });",
    "status": "current",
    "template": "{{element}}.addEventListener(\"{{event}}\", ({{param}}) => {\n  {{body}}\n});",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "btn" },
      { "key": "event", "en": "event", "ar": "الحدث", "label": "event = الحدث", "default": "click" },
      { "key": "param", "en": "event parameter", "ar": "معطى الحدث", "label": "event parameter = معطى الحدث", "default": "e" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(\"تم النقر\");" }
    ]
  },
  {
    "term": "removeEventListener",
    "category": "الأحداث (Events)",
    "arabic": "إزالة مستمع حدث",
    "explanation": "يفصل دالة كانت مرتبطة سابقاً بحدث معين على عنصر",
    "example": "btn.removeEventListener(\"click\", handler);",
    "status": "current",
    "template": "{{element}}.removeEventListener(\"{{event}}\", {{handler}});",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "btn" },
      { "key": "event", "en": "event", "ar": "الحدث", "label": "event = الحدث", "default": "click" },
      { "key": "handler", "en": "handler", "ar": "المُعالِج", "label": "handler = المُعالِج", "default": "handler" }
    ]
  },
  {
    "term": "preventDefault",
    "category": "الأحداث (Events)",
    "arabic": "منع السلوك الافتراضي",
    "explanation": "يمنع المتصفح من تنفيذ السلوك الافتراضي المرتبط بالحدث، مثل إرسال نموذج أو فتح رابط",
    "example": "form.addEventListener(\"submit\", e => e.preventDefault());",
    "status": "current",
    "template": "{{eventParam}}.preventDefault();",
    "variables": [
      { "key": "eventParam", "en": "event parameter", "ar": "معطى الحدث", "label": "event parameter = معطى الحدث", "default": "e" }
    ]
  },
  {
    "term": "stopPropagation",
    "category": "الأحداث (Events)",
    "arabic": "إيقاف انتشار الحدث",
    "explanation": "يمنع الحدث من الانتقال إلى العناصر الأب (فقاعة الحدث)",
    "example": "e.stopPropagation();",
    "status": "current",
    "template": "{{eventParam}}.stopPropagation();",
    "variables": [
      { "key": "eventParam", "en": "event parameter", "ar": "معطى الحدث", "label": "event parameter = معطى الحدث", "default": "e" }
    ]
  },

  // ==================== المتصفح (BOM) ====================
  {
    "term": "setTimeout",
    "category": "المتصفح (BOM)",
    "arabic": "تنفيذ مؤجّل",
    "explanation": "ينفّذ دالة مرة واحدة بعد مرور مدة زمنية محددة بالميلي ثانية",
    "example": "setTimeout(() => { ... }, 1000);",
    "status": "current",
    "template": "setTimeout(() => {\n  {{body}}\n}, {{delay}});",
    "variables": [
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(\"تم\");" },
      { "key": "delay", "en": "delay (ms)", "ar": "التأخير (بالميلي ثانية)", "label": "delay (ms) = التأخير (بالميلي ثانية)", "default": "1000" }
    ]
  },
  {
    "term": "setInterval",
    "category": "المتصفح (BOM)",
    "arabic": "تنفيذ متكرر",
    "explanation": "ينفّذ دالة بشكل متكرر كل مدة زمنية محددة حتى يتم إيقافه",
    "example": "setInterval(() => { ... }, 1000);",
    "status": "current",
    "template": "setInterval(() => {\n  {{body}}\n}, {{delay}});",
    "variables": [
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "console.log(\"تكرار\");" },
      { "key": "delay", "en": "delay (ms)", "ar": "التأخير (بالميلي ثانية)", "label": "delay (ms) = التأخير (بالميلي ثانية)", "default": "1000" }
    ]
  },
  {
    "term": "clearTimeout",
    "category": "المتصفح (BOM)",
    "arabic": "إلغاء التنفيذ المؤجّل",
    "explanation": "يُلغي تنفيذاً مؤجَّلاً تم جدولته سابقاً بـ setTimeout قبل أن يحدث",
    "example": "clearTimeout(timerId);",
    "status": "current",
    "template": "clearTimeout({{timerId}});",
    "variables": [
      { "key": "timerId", "en": "timer id", "ar": "معرّف المؤقّت", "label": "timer id = معرّف المؤقّت", "default": "timerId" }
    ]
  },
  {
    "term": "clearInterval",
    "category": "المتصفح (BOM)",
    "arabic": "إيقاف التنفيذ المتكرر",
    "explanation": "يُوقف تكراراً تم جدولته سابقاً بـ setInterval",
    "example": "clearInterval(intervalId);",
    "status": "current",
    "template": "clearInterval({{intervalId}});",
    "variables": [
      { "key": "intervalId", "en": "interval id", "ar": "معرّف التكرار", "label": "interval id = معرّف التكرار", "default": "intervalId" }
    ]
  },
  {
    "term": "localStorage.setItem",
    "category": "المتصفح (BOM)",
    "arabic": "حفظ في التخزين المحلي",
    "explanation": "يحفظ قيمة نصية في تخزين المتصفح المحلي، تبقى حتى بعد إغلاق الصفحة",
    "example": "localStorage.setItem(\"name\", \"سارة\");",
    "status": "current",
    "template": "localStorage.setItem(\"{{key}}\", \"{{value}}\");",
    "variables": [
      { "key": "key", "en": "key", "ar": "المفتاح", "label": "key = المفتاح", "default": "name" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "سارة" }
    ]
  },
  {
    "term": "localStorage.getItem",
    "category": "المتصفح (BOM)",
    "arabic": "قراءة من التخزين المحلي",
    "explanation": "يقرأ قيمة محفوظة مسبقاً في تخزين المتصفح المحلي عبر مفتاحها",
    "example": "localStorage.getItem(\"name\");",
    "status": "current",
    "template": "localStorage.getItem(\"{{key}}\");",
    "variables": [
      { "key": "key", "en": "key", "ar": "المفتاح", "label": "key = المفتاح", "default": "name" }
    ]
  },
  {
    "term": "fetch",
    "category": "المتصفح (BOM)",
    "arabic": "طلب شبكي",
    "explanation": "يُرسل طلباً عبر الشبكة (مثلاً لجلب بيانات من خادم) ويُرجع Promise",
    "example": "fetch(\"https://api.example.com/data\").then(res => res.json());",
    "status": "current",
    "template": "fetch(\"{{url}}\").then({{response}} => {{response}}.json());",
    "variables": [
      { "key": "url", "en": "url", "ar": "الرابط", "label": "url = الرابط", "default": "https://api.example.com/data" },
      { "key": "response", "en": "response", "ar": "الاستجابة", "label": "response = الاستجابة", "default": "res" }
    ]
  },
  {
    "term": "console.log",
    "category": "المتصفح (BOM)",
    "arabic": "طباعة في الطرفية",
    "explanation": "يطبع قيمة أو رسالة في أدوات المطوّر (Console) لأغراض التتبّع والتصحيح",
    "example": "console.log(\"مرحباً\", value);",
    "status": "current",
    "template": "console.log({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"مرحباً\"" }
    ]
  },
  {
    "term": "alert",
    "category": "المتصفح (BOM)",
    "arabic": "نافذة تنبيه",
    "explanation": "يعرض نافذة تنبيه منبثقة برسالة، وتوقف تنفيذ الكود حتى يُغلقها المستخدم",
    "example": "alert(\"تم الحفظ!\");",
    "status": "current",
    "template": "alert(\"{{message}}\");",
    "variables": [
      { "key": "message", "en": "message", "ar": "الرسالة", "label": "message = الرسالة", "default": "تم الحفظ!" }
    ]
  },

  // ==================== دوال عامة (Global) ====================
  {
    "term": "parseInt",
    "category": "دوال عامة (Global)",
    "arabic": "تحويل إلى عدد صحيح",
    "explanation": "يحوّل نصاً إلى عدد صحيح، ويتجاهل ما بعد أول جزء غير رقمي",
    "example": "parseInt(\"42px\");",
    "status": "current",
    "template": "parseInt({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"42px\"" }
    ]
  },
  {
    "term": "parseFloat",
    "category": "دوال عامة (Global)",
    "arabic": "تحويل إلى عدد عشري",
    "explanation": "يحوّل نصاً إلى عدد عشري بقراءة بدايته فقط، ويتجاهل أي أحرف غير رقمية تأتي بعد الرقم دون أن يُسبب خطأ. إن لم يبدأ النص برقم صالح يُرجع NaN",
    "example": "parseFloat(\"3.14m\");",
    "status": "current",
    "template": "parseFloat({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"3.14m\"" }
    ]
  },
  {
    "term": "isNaN",
    "category": "دوال عامة (Global)",
    "arabic": "التحقق من عدم كونه رقماً",
    "explanation": "يتحقق إن كانت القيمة ليست رقماً صالحاً (Not a Number)",
    "example": "isNaN(\"hello\");",
    "status": "current",
    "template": "isNaN({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"hello\"" }
    ]
  },
  {
    "term": "typeof",
    "category": "دوال عامة (Global)",
    "arabic": "نوع القيمة",
    "explanation": "يُرجع نصاً يصف نوع بيانات القيمة المُعطاة",
    "example": "typeof \"hello\";",
    "status": "current",
    "template": "typeof {{value}};",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"hello\"" }
    ]
  },

  // ==================== العوامل (Operators) ====================
  {
    "term": "+",
    "category": "العوامل (Operators)",
    "arabic": "الجمع / الدمج",
    "explanation": "يجمع رقمين، أو يدمج نصين إذا كان أحد الطرفين نصاً",
    "example": "5 + 3; // 8   \"a\" + \"b\"; // \"ab\"",
    "status": "current",
    "template": "{{a}} + {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "الطرف الأول", "label": "a = الطرف الأول", "default": "5" },
      { "key": "b", "en": "b", "ar": "الطرف الثاني", "label": "b = الطرف الثاني", "default": "3" }
    ]
  },
  {
    "term": "-",
    "category": "العوامل (Operators)",
    "arabic": "الطرح",
    "explanation": "يطرح الطرف الثاني من الطرف الأول ويُرجع الناتج. إن استُخدم مع نصوص يحاول جافا سكريبت تحويلها لأرقام قبل الطرح، وإن فشل التحويل يكون الناتج NaN",
    "example": "10 - 4; // 6",
    "status": "current",
    "template": "{{a}} - {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "الطرف الأول", "label": "a = الطرف الأول", "default": "10" },
      { "key": "b", "en": "b", "ar": "الطرف الثاني", "label": "b = الطرف الثاني", "default": "4" }
    ]
  },
  {
    "term": "*",
    "category": "العوامل (Operators)",
    "arabic": "الضرب",
    "explanation": "يضرب رقمين ببعضهما ويُرجع حاصل الضرب. مثل باقي العوامل الحسابية، إن كانت أحد القيم نصاً غير قابل للتحويل لرقم يكون الناتج NaN",
    "example": "6 * 7; // 42",
    "status": "current",
    "template": "{{a}} * {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "الطرف الأول", "label": "a = الطرف الأول", "default": "6" },
      { "key": "b", "en": "b", "ar": "الطرف الثاني", "label": "b = الطرف الثاني", "default": "7" }
    ]
  },
  {
    "term": "/",
    "category": "العوامل (Operators)",
    "arabic": "القسمة",
    "explanation": "يقسم المقسوم على المقسوم عليه ويُرجع الناتج، ويمكن أن يكون عشرياً. القسمة على صفر لا تُسبب خطأ في جافا سكريبت بل تُرجع Infinity أو -Infinity",
    "example": "10 / 4; // 2.5",
    "status": "current",
    "template": "{{a}} / {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "المقسوم", "label": "a = المقسوم", "default": "10" },
      { "key": "b", "en": "b", "ar": "المقسوم عليه", "label": "b = المقسوم عليه", "default": "4" }
    ]
  },
  {
    "term": "%",
    "category": "العوامل (Operators)",
    "arabic": "باقي القسمة",
    "explanation": "يُرجع الباقي من قسمة رقم على آخر",
    "example": "10 % 3; // 1",
    "status": "current",
    "template": "{{a}} % {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "المقسوم", "label": "a = المقسوم", "default": "10" },
      { "key": "b", "en": "b", "ar": "المقسوم عليه", "label": "b = المقسوم عليه", "default": "3" }
    ]
  },
  {
    "term": "**",
    "category": "العوامل (Operators)",
    "arabic": "الأس",
    "explanation": "يرفع رقماً إلى قوة معينة (بديل مختصر لـ Math.pow)",
    "example": "2 ** 3; // 8",
    "status": "current",
    "template": "{{base}} ** {{exponent}}",
    "variables": [
      { "key": "base", "en": "base", "ar": "الأساس", "label": "base = الأساس", "default": "2" },
      { "key": "exponent", "en": "exponent", "ar": "الأس", "label": "exponent = الأس", "default": "3" }
    ]
  },
  {
    "term": "=== / !==",
    "category": "العوامل (Operators)",
    "arabic": "التساوي الصارم / عدم التساوي الصارم",
    "explanation": "يقارن القيمة والنوع معاً دون تحويل ضمني (يُنصح به دائماً بدل == و!=)",
    "example": "5 === \"5\"; // false",
    "status": "current",
    "template": "{{a}} === {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "الطرف الأول", "label": "a = الطرف الأول", "default": "5" },
      { "key": "b", "en": "b", "ar": "الطرف الثاني", "label": "b = الطرف الثاني", "default": "\"5\"" }
    ]
  },
  {
    "term": "&&",
    "category": "العوامل (Operators)",
    "arabic": "و (المنطقية)",
    "explanation": "تُرجع الطرف الثاني إذا كان الأول صحيحاً (truthy)، وإلا تُرجع الأول",
    "example": "isLoggedIn && showDashboard();",
    "status": "current",
    "template": "{{a}} && {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "الشرط الأول", "label": "a = الشرط الأول", "default": "isLoggedIn" },
      { "key": "b", "en": "b", "ar": "الشرط الثاني", "label": "b = الشرط الثاني", "default": "showDashboard()" }
    ]
  },
  {
    "term": "||",
    "category": "العوامل (Operators)",
    "arabic": "أو (المنطقية)",
    "explanation": "تُرجع أول طرف صحيح (truthy)، وتُستخدم غالباً لإعطاء قيمة احتياطية",
    "example": "const name = userName || \"زائر\";",
    "status": "current",
    "template": "{{a}} || {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "الطرف الأول", "label": "a = الطرف الأول", "default": "userName" },
      { "key": "b", "en": "b", "ar": "الطرف الاحتياطي", "label": "b = الطرف الاحتياطي", "default": "\"زائر\"" }
    ]
  },
  {
    "term": "!",
    "category": "العوامل (Operators)",
    "arabic": "النفي المنطقي",
    "explanation": "يعكس القيمة المنطقية: يحوّل true إلى false والعكس",
    "example": "!isVisible;",
    "status": "current",
    "template": "!{{value}}",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "isVisible" }
    ]
  },
  {
    "term": "??",
    "category": "العوامل (Operators)",
    "arabic": "الدمج عند الفراغ",
    "explanation": "تُرجع الطرف الثاني فقط إذا كان الأول null أو undefined (بخلاف || التي تتجاهل أي قيمة falsy)",
    "example": "const count = value ?? 0;",
    "status": "current",
    "template": "{{a}} ?? {{b}}",
    "variables": [
      { "key": "a", "en": "a", "ar": "الطرف الأول", "label": "a = الطرف الأول", "default": "value" },
      { "key": "b", "en": "b", "ar": "الطرف الاحتياطي", "label": "b = الطرف الاحتياطي", "default": "0" }
    ]
  },
  {
    "term": "?.",
    "category": "العوامل (Operators)",
    "arabic": "السلسلة الآمنة",
    "explanation": "يقرأ خاصية متداخلة دون أن يُسبب خطأ إذا كان أحد المستويات null أو undefined",
    "example": "user?.address?.city;",
    "status": "current",
    "template": "{{object}}?.{{property}}",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "user" },
      { "key": "property", "en": "property", "ar": "الخاصية", "label": "property = الخاصية", "default": "address" }
    ]
  },

  // ==================== التفكيك (Destructuring) ====================
  {
    "term": "object destructuring",
    "category": "التفكيك (Destructuring)",
    "arabic": "تفكيك كائن",
    "explanation": "يستخرج خصائص من كائن ويضعها في متغيرات منفصلة بنفس أسماء الخصائص",
    "example": "const { name, age } = user;",
    "status": "current",
    "template": "const { {{keys}} } = {{object}};",
    "variables": [
      { "key": "keys", "en": "keys", "ar": "المفاتيح", "label": "keys = المفاتيح", "default": "name, age" },
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "user" }
    ]
  },
  {
    "term": "array destructuring",
    "category": "التفكيك (Destructuring)",
    "arabic": "تفكيك مصفوفة",
    "explanation": "يستخرج عناصر من مصفوفة ويضعها في متغيرات منفصلة حسب ترتيبها",
    "example": "const [first, second] = colors;",
    "status": "current",
    "template": "const [{{names}}] = {{array}};",
    "variables": [
      { "key": "names", "en": "names", "ar": "الأسماء", "label": "names = الأسماء", "default": "first, second" },
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "colors" }
    ]
  },

  // ==================== السياق والدوال (this / bind / call / apply) ====================
  {
    "term": "this",
    "category": "السياق والدوال",
    "arabic": "المرجع الذاتي",
    "explanation": "يشير إلى الكائن الذي يُستدعى منه الكود الحالي، وتختلف قيمته حسب طريقة الاستدعاء",
    "example": "this.name = \"سارة\";",
    "status": "current",
    "template": "this.{{property}} = {{value}};",
    "variables": [
      { "key": "property", "en": "property", "ar": "الخاصية", "label": "property = الخاصية", "default": "name" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"سارة\"" }
    ]
  },
  {
    "term": "Function.bind",
    "category": "السياق والدوال",
    "arabic": "ربط السياق",
    "explanation": "يُنشئ نسخة جديدة من الدالة يكون فيها this مربوطاً بشكل دائم بكائن محدد",
    "example": "const bound = greet.bind(user);",
    "status": "current",
    "template": "const {{result}} = {{fn}}.bind({{context}});",
    "variables": [
      { "key": "result", "en": "result", "ar": "النتيجة", "label": "result = النتيجة", "default": "bound" },
      { "key": "fn", "en": "function", "ar": "الدالة", "label": "function = الدالة", "default": "greet" },
      { "key": "context", "en": "context", "ar": "السياق", "label": "context = السياق", "default": "user" }
    ]
  },
  {
    "term": "Function.call",
    "category": "السياق والدوال",
    "arabic": "استدعاء بسياق محدد",
    "explanation": "ينفّذ الدالة فوراً مع تحديد this والمعطيات كلٌّ منفصل",
    "example": "greet.call(user, \"مرحباً\");",
    "status": "current",
    "template": "{{fn}}.call({{context}}, {{args}});",
    "variables": [
      { "key": "fn", "en": "function", "ar": "الدالة", "label": "function = الدالة", "default": "greet" },
      { "key": "context", "en": "context", "ar": "السياق", "label": "context = السياق", "default": "user" },
      { "key": "args", "en": "arguments", "ar": "المعطيات", "label": "arguments = المعطيات", "default": "\"مرحباً\"" }
    ]
  },
  {
    "term": "Function.apply",
    "category": "السياق والدوال",
    "arabic": "استدعاء بسياق ومصفوفة معطيات",
    "explanation": "مثل call تماماً لكن المعطيات تُمرَّر كمصفوفة واحدة بدل معطيات منفصلة",
    "example": "greet.apply(user, [\"مرحباً\"]);",
    "status": "current",
    "template": "{{fn}}.apply({{context}}, [{{args}}]);",
    "variables": [
      { "key": "fn", "en": "function", "ar": "الدالة", "label": "function = الدالة", "default": "greet" },
      { "key": "context", "en": "context", "ar": "السياق", "label": "context = السياق", "default": "user" },
      { "key": "args", "en": "arguments", "ar": "المعطيات", "label": "arguments = المعطيات", "default": "\"مرحباً\"" }
    ]
  },

  // ==================== الإغلاقات (Closures) ====================
  {
    "term": "closure",
    "category": "الإغلاقات (Closures)",
    "arabic": "الإغلاق",
    "explanation": "دالة داخلية تحتفظ بحق الوصول لمتغيرات الدالة الخارجية حتى بعد انتهاء تنفيذ تلك الدالة",
    "example": "function counter() { let n = 0; return () => ++n; }",
    "status": "current",
    "template": "function {{outer}}() {\n  let {{variable}} = {{initial}};\n  return () => ++{{variable}};\n}",
    "variables": [
      { "key": "outer", "en": "outer function", "ar": "الدالة الخارجية", "label": "outer function = الدالة الخارجية", "default": "counter" },
      { "key": "variable", "en": "variable", "ar": "المتغير", "label": "variable = المتغير", "default": "n" },
      { "key": "initial", "en": "initial value", "ar": "القيمة الابتدائية", "label": "initial value = القيمة الابتدائية", "default": "0" }
    ]
  },

  // ==================== أنواع متقدمة ====================
  {
    "term": "Symbol",
    "category": "أنواع متقدمة",
    "arabic": "الرمز",
    "explanation": "نوع بيانات ينتج قيمة فريدة تماماً، تُستخدم غالباً كمفاتيح كائنات لا تتعارض أبداً",
    "example": "const id = Symbol(\"id\");",
    "status": "current",
    "template": "const {{name}} = Symbol(\"{{description}}\");",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "id" },
      { "key": "description", "en": "description", "ar": "الوصف", "label": "description = الوصف", "default": "id" }
    ]
  },
  {
    "term": "WeakMap",
    "category": "أنواع متقدمة",
    "arabic": "الخريطة الضعيفة",
    "explanation": "مثل Map لكن مفاتيحها كائنات فقط، ولا تمنع جامع القمامة من حذفها عند عدم استخدامها",
    "example": "const cache = new WeakMap();",
    "status": "current",
    "template": "const {{name}} = new WeakMap();",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "cache" }
    ]
  },
  {
    "term": "WeakSet",
    "category": "أنواع متقدمة",
    "arabic": "المجموعة الضعيفة",
    "explanation": "مثل Set لكن عناصرها كائنات فقط، ولا تمنع جامع القمامة من حذفها عند عدم استخدامها",
    "example": "const visited = new WeakSet();",
    "status": "current",
    "template": "const {{name}} = new WeakSet();",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "visited" }
    ]
  },

  // ==================== المولّدات (Generators) ====================
  {
    "term": "function*",
    "category": "المولّدات (Generators)",
    "arabic": "دالة مولّدة",
    "explanation": "دالة يمكن إيقاف تنفيذها مؤقتاً ثم استئنافه، وتُنتج قيماً واحدة تلو الأخرى عبر yield",
    "example": "function* counter() { yield 1; yield 2; }",
    "status": "current",
    "template": "function* {{name}}() {\n  {{body}}\n}",
    "variables": [
      { "key": "name", "en": "name", "ar": "اسم المولّد", "label": "name = اسم المولّد", "default": "counter" },
      { "key": "body", "en": "body", "ar": "الجسم", "label": "body = الجسم", "default": "yield 1;\n  yield 2;" }
    ]
  },
  {
    "term": "yield",
    "category": "المولّدات (Generators)",
    "arabic": "أنتج قيمة",
    "explanation": "يُوقف تنفيذ الدالة المولّدة مؤقتاً ويُنتج قيمة، حتى يُطلب منها الاستمرار",
    "example": "yield 1;",
    "status": "current",
    "template": "yield {{value}};",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "1" }
    ]
  },

  // ==================== النماذج الأولية (Prototype) ====================
  {
    "term": "instanceof",
    "category": "النماذج الأولية (Prototype)",
    "arabic": "التحقق من الصنف",
    "explanation": "يتحقق إن كان كائن ما تم إنشاؤه من صنف معيّن",
    "example": "student instanceof Person;",
    "status": "current",
    "template": "{{object}} instanceof {{className}}",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "student" },
      { "key": "className", "en": "class", "ar": "الصنف", "label": "class = الصنف", "default": "Person" }
    ]
  },
  {
    "term": "Object.getPrototypeOf",
    "category": "النماذج الأولية (Prototype)",
    "arabic": "قراءة النموذج الأولي",
    "explanation": "يُرجع النموذج الأولي (prototype) الذي يرث منه الكائن خصائصه",
    "example": "Object.getPrototypeOf(student);",
    "status": "current",
    "template": "Object.getPrototypeOf({{object}});",
    "variables": [
      { "key": "object", "en": "object", "ar": "الكائن", "label": "object = الكائن", "default": "student" }
    ]
  },

  // ==================== الأرقام (Number) ====================
  {
    "term": "Number.toFixed",
    "category": "الأرقام (Number)",
    "arabic": "تقريب لعدد منازل عشرية",
    "explanation": "يُرجع نصاً يمثّل الرقم مقرّباً لعدد محدد من المنازل العشرية",
    "example": "(3.14159).toFixed(2);",
    "status": "current",
    "template": "({{number}}).toFixed({{digits}});",
    "variables": [
      { "key": "number", "en": "number", "ar": "الرقم", "label": "number = الرقم", "default": "3.14159" },
      { "key": "digits", "en": "digits", "ar": "عدد المنازل", "label": "digits = عدد المنازل", "default": "2" }
    ]
  },
  {
    "term": "Number.isInteger",
    "category": "الأرقام (Number)",
    "arabic": "التحقق من عدد صحيح",
    "explanation": "يتحقق إن كانت القيمة عدداً صحيحاً بدون كسور عشرية",
    "example": "Number.isInteger(5);",
    "status": "current",
    "template": "Number.isInteger({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "5" }
    ]
  },
  {
    "term": "Number()",
    "category": "الأرقام (Number)",
    "arabic": "تحويل إلى رقم",
    "explanation": "يحوّل قيمة (نص عادة) إلى رقم، ويُرجع NaN إن تعذّر التحويل",
    "example": "Number(\"42\");",
    "status": "current",
    "template": "Number({{value}});",
    "variables": [
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "\"42\"" }
    ]
  },

  // ==================== التاريخ والوقت (Date) ====================
  {
    "term": "new Date",
    "category": "التاريخ والوقت (Date)",
    "arabic": "إنشاء تاريخ",
    "explanation": "يُنشئ كائن تاريخ يمثّل اللحظة الحالية، أو تاريخاً محدداً إذا أُعطيت معطيات",
    "example": "const now = new Date();",
    "status": "current",
    "template": "const {{name}} = new Date({{args}});",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "now" },
      { "key": "args", "en": "arguments (optional)", "ar": "المعطيات (اختياري)", "label": "arguments (optional) = المعطيات (اختياري)", "default": "" }
    ]
  },
  {
    "term": "Date.now",
    "category": "التاريخ والوقت (Date)",
    "arabic": "الوقت الحالي بالميلي ثانية",
    "explanation": "يُرجع عدد الميلي ثانية المنقضية منذ بداية عام 1970 حتى اللحظة الحالية",
    "example": "Date.now();",
    "status": "current",
    "template": "Date.now();",
    "variables": []
  },
  {
    "term": "Date.getFullYear",
    "category": "التاريخ والوقت (Date)",
    "arabic": "استخراج السنة",
    "explanation": "يُرجع السنة الكاملة (4 أرقام) من كائن تاريخ",
    "example": "date.getFullYear();",
    "status": "current",
    "template": "{{date}}.getFullYear();",
    "variables": [
      { "key": "date", "en": "date", "ar": "التاريخ", "label": "date = التاريخ", "default": "date" }
    ]
  },
  {
    "term": "Date.toISOString",
    "category": "التاريخ والوقت (Date)",
    "arabic": "تحويل لصيغة ISO",
    "explanation": "يحوّل كائن التاريخ إلى نص بصيغة موحدة عالمياً (ISO 8601)",
    "example": "date.toISOString();",
    "status": "current",
    "template": "{{date}}.toISOString();",
    "variables": [
      { "key": "date", "en": "date", "ar": "التاريخ", "label": "date = التاريخ", "default": "date" }
    ]
  },

  // ==================== التعابير النمطية (RegExp) ====================
  {
    "term": "/pattern/flags",
    "category": "التعابير النمطية (RegExp)",
    "arabic": "التعبير النمطي",
    "explanation": "يُنشئ نمطاً للبحث عن تطابقات في النصوص وفق قواعد محددة",
    "example": "/^\\d+$/",
    "status": "current",
    "template": "/{{pattern}}/{{flags}}",
    "variables": [
      { "key": "pattern", "en": "pattern", "ar": "النمط", "label": "pattern = النمط", "default": "^\\\\d+$" },
      { "key": "flags", "en": "flags", "ar": "الخيارات", "label": "flags = الخيارات", "default": "g" }
    ]
  },
  {
    "term": "RegExp.test",
    "category": "التعابير النمطية (RegExp)",
    "arabic": "اختبار التطابق",
    "explanation": "يتحقق إن كان النص يطابق التعبير النمطي، ويُرجع true أو false",
    "example": "/\\d+/.test(\"abc123\");",
    "status": "current",
    "template": "{{regex}}.test({{str}});",
    "variables": [
      { "key": "regex", "en": "regex", "ar": "التعبير النمطي", "label": "regex = التعبير النمطي", "default": "/\\\\d+/" },
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"abc123\"" }
    ]
  },
  {
    "term": "String.match",
    "category": "دوال النصوص (String)",
    "arabic": "استخراج التطابقات",
    "explanation": "يبحث في النص عن تطابقات لتعبير نمطي ويُرجعها",
    "example": "\"abc123\".match(/\\d+/);",
    "status": "current",
    "template": "{{str}}.match({{regex}});",
    "variables": [
      { "key": "str", "en": "string", "ar": "النص", "label": "string = النص", "default": "\"abc123\"" },
      { "key": "regex", "en": "regex", "ar": "التعبير النمطي", "label": "regex = التعبير النمطي", "default": "/\\\\d+/" }
    ]
  },

  // ==================== مزيد من دوال المصفوفات (Array) ====================
  {
    "term": "Array.from",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إنشاء مصفوفة من عنصر مشابه",
    "explanation": "يُنشئ مصفوفة جديدة من كائن قابل للتكرار أو يشبه المصفوفة",
    "example": "Array.from(\"abc\");",
    "status": "current",
    "template": "Array.from({{source}});",
    "variables": [
      { "key": "source", "en": "source", "ar": "المصدر", "label": "source = المصدر", "default": "\"abc\"" }
    ]
  },
  {
    "term": "Array.fill",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تعبئة بقيمة ثابتة",
    "explanation": "يملأ كل عناصر المصفوفة (أو جزء منها) بقيمة ثابتة واحدة",
    "example": "new Array(3).fill(0);",
    "status": "current",
    "template": "{{array}}.fill({{value}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "new Array(3)" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "0" }
    ]
  },
  {
    "term": "Array.flatMap",
    "category": "دوال المصفوفات (Array)",
    "arabic": "تحويل ثم تسطيح",
    "explanation": "يُطبّق map على كل عنصر ثم يُسطّح النتيجة بمستوى واحد، في خطوة واحدة",
    "example": "arr.flatMap(x => [x, x * 2]);",
    "status": "current",
    "template": "{{array}}.flatMap({{item}} => {{expression}});",
    "variables": [
      { "key": "array", "en": "array", "ar": "المصفوفة", "label": "array = المصفوفة", "default": "arr" },
      { "key": "item", "en": "item", "ar": "العنصر", "label": "item = العنصر", "default": "x" },
      { "key": "expression", "en": "expression", "ar": "التعبير", "label": "expression = التعبير", "default": "[x, x * 2]" }
    ]
  },

  // ==================== مزيد من التعامل مع DOM ====================
  {
    "term": "insertBefore",
    "category": "التعامل مع عناصر DOM",
    "arabic": "إدراج قبل عنصر",
    "explanation": "يُدرج عنصراً جديداً قبل عنصر مرجعي محدد داخل نفس الأب",
    "example": "parent.insertBefore(newEl, refEl);",
    "status": "current",
    "template": "{{parent}}.insertBefore({{newElement}}, {{referenceElement}});",
    "variables": [
      { "key": "parent", "en": "parent", "ar": "الأب", "label": "parent = الأب", "default": "parent" },
      { "key": "newElement", "en": "new element", "ar": "العنصر الجديد", "label": "new element = العنصر الجديد", "default": "newEl" },
      { "key": "referenceElement", "en": "reference element", "ar": "العنصر المرجعي", "label": "reference element = العنصر المرجعي", "default": "refEl" }
    ]
  },
  {
    "term": "cloneNode",
    "category": "التعامل مع عناصر DOM",
    "arabic": "نسخ عنصر",
    "explanation": "يُنشئ نسخة من العنصر، وتشمل أبناءه إذا مُرِّرت true",
    "example": "el.cloneNode(true);",
    "status": "current",
    "template": "{{element}}.cloneNode({{deep}});",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "deep", "en": "deep", "ar": "نسخ عميق", "label": "deep = نسخ عميق", "default": "true" }
    ]
  },
  {
    "term": "closest",
    "category": "التعامل مع عناصر DOM",
    "arabic": "أقرب سلف مطابق",
    "explanation": "يبحث في العنصر نفسه ثم آبائه صعوداً عن أول عنصر يطابق محدد CSS معطى",
    "example": "el.closest(\".card\");",
    "status": "current",
    "template": "{{element}}.closest(\"{{selector}}\");",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "selector", "en": "selector", "ar": "المحدد", "label": "selector = المحدد", "default": ".card" }
    ]
  },
  {
    "term": "style",
    "category": "التعامل مع عناصر DOM",
    "arabic": "التنسيق المباشر",
    "explanation": "يقرأ أو يُعدّل خاصية CSS واحدة مباشرة على العنصر عبر JavaScript",
    "example": "el.style.color = \"red\";",
    "status": "current",
    "template": "{{element}}.style.{{property}} = \"{{value}}\";",
    "variables": [
      { "key": "element", "en": "element", "ar": "العنصر", "label": "element = العنصر", "default": "el" },
      { "key": "property", "en": "property", "ar": "الخاصية", "label": "property = الخاصية", "default": "color" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "red" }
    ]
  },

  // ==================== النماذج (Forms) ====================
  {
    "term": "input.value",
    "category": "النماذج (Forms)",
    "arabic": "قيمة حقل الإدخال",
    "explanation": "يقرأ أو يُعيّن النص الحالي داخل حقل إدخال",
    "example": "input.value = \"مرحباً\";",
    "status": "current",
    "elements": ["input", "textarea", "select"],
    "template": "{{input}}.value = \"{{value}}\";",
    "variables": [
      { "key": "input", "en": "input", "ar": "الحقل", "label": "input = الحقل", "default": "input" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "مرحباً" }
    ]
  },
  {
    "term": "checkbox.checked",
    "category": "النماذج (Forms)",
    "arabic": "حالة صندوق الاختيار",
    "explanation": "يقرأ أو يُعيّن إن كان صندوق الاختيار محدداً (true) أو لا (false)",
    "example": "checkbox.checked = true;",
    "status": "current",
    "elements": ["input"],
    "template": "{{checkbox}}.checked = {{value}};",
    "variables": [
      { "key": "checkbox", "en": "checkbox", "ar": "صندوق الاختيار", "label": "checkbox = صندوق الاختيار", "default": "checkbox" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "true" }
    ]
  },

  // ==================== مزيد من المتصفح (BOM) ====================
  {
    "term": "window.location",
    "category": "المتصفح (BOM)",
    "arabic": "عنوان الصفحة الحالية",
    "explanation": "يقرأ أو يُغيّر عنوان URL الحالي، وتغييره ينقل المتصفح لصفحة جديدة",
    "example": "window.location.href = \"https://example.com\";",
    "status": "current",
    "template": "window.location.href = \"{{url}}\";",
    "variables": [
      { "key": "url", "en": "url", "ar": "الرابط", "label": "url = الرابط", "default": "https://example.com" }
    ]
  },
  {
    "term": "window.history",
    "category": "المتصفح (BOM)",
    "arabic": "سجلّ التصفح",
    "explanation": "يسمح بالتنقل برمجياً بين صفحات سجلّ التصفح، مثل الرجوع خطوة للخلف",
    "example": "window.history.back();",
    "status": "current",
    "template": "window.history.back();",
    "variables": []
  },
  {
    "term": "sessionStorage.setItem",
    "category": "المتصفح (BOM)",
    "arabic": "حفظ في تخزين الجلسة",
    "explanation": "يحفظ قيمة نصية في تخزين المتصفح، وتُمحى تلقائياً عند إغلاق التبويب",
    "example": "sessionStorage.setItem(\"token\", \"abc\");",
    "status": "current",
    "template": "sessionStorage.setItem(\"{{key}}\", \"{{value}}\");",
    "variables": [
      { "key": "key", "en": "key", "ar": "المفتاح", "label": "key = المفتاح", "default": "token" },
      { "key": "value", "en": "value", "ar": "القيمة", "label": "value = القيمة", "default": "abc" }
    ]
  },
  {
    "term": "new WebSocket",
    "category": "المتصفح (BOM)",
    "arabic": "اتصال ويب سوكت",
    "explanation": "يفتح اتصالاً مستمراً بين المتصفح وخادم لتبادل البيانات فورياً في الاتجاهين",
    "example": "const socket = new WebSocket(\"wss://example.com\");",
    "status": "current",
    "template": "const {{name}} = new WebSocket(\"{{url}}\");",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "socket" },
      { "key": "url", "en": "url", "ar": "الرابط", "label": "url = الرابط", "default": "wss://example.com" }
    ]
  },

  // ==================== الاستيراد الديناميكي ====================
  {
    "term": "import()",
    "category": "الوحدات",
    "arabic": "الاستيراد الديناميكي",
    "explanation": "يستورد وحدة أثناء التنفيذ (وليس عند بداية الملف) ويُرجع Promise",
    "example": "const module = await import(\"./utils.js\");",
    "status": "current",
    "template": "const {{name}} = await import(\"{{path}}\");",
    "variables": [
      { "key": "name", "en": "name", "ar": "الاسم", "label": "name = الاسم", "default": "module" },
      { "key": "path", "en": "path", "ar": "المسار", "label": "path = المسار", "default": "./utils.js" }
    ]
  },

  // ==================== عوامل إضافية ====================
  {
    "term": "==",
    "category": "العوامل (Operators)",
    "arabic": "يساوي (تساهل بالنوع)",
    "explanation": "يقارن قيمتين ويحاول تحويل النوع قبل المقارنة، لذلك قد يعتبر قيمًا من أنواع مختلفة متساوية. يُفضَّل === بدلاً منه",
    "example": "5 == \"5\"; // true",
    "status": "current",
    "template": "{{a}} == {{b}}",
    "variables": [
      {
        "key": "a",
        "en": "value a",
        "ar": "القيمة الأولى",
        "label": "value a = القيمة الأولى",
        "default": "5"
      },
      {
        "key": "b",
        "en": "value b",
        "ar": "القيمة الثانية",
        "label": "value b = القيمة الثانية",
        "default": "\"5\""
      }
    ]
  },
  {
    "term": "!=",
    "category": "العوامل (Operators)",
    "arabic": "لا يساوي (تساهل بالنوع)",
    "explanation": "عكس ==، يقارن مع تحويل النوع. يُفضَّل !== بدلاً منه",
    "example": "5 != \"6\"; // true",
    "status": "current",
    "template": "{{a}} != {{b}}",
    "variables": [
      {
        "key": "a",
        "en": "value a",
        "ar": "القيمة الأولى",
        "label": "value a = القيمة الأولى",
        "default": "5"
      },
      {
        "key": "b",
        "en": "value b",
        "ar": "القيمة الثانية",
        "label": "value b = القيمة الثانية",
        "default": "\"6\""
      }
    ]
  },
  {
    "term": "< > <= >=",
    "category": "العوامل (Operators)",
    "arabic": "عوامل المقارنة",
    "explanation": "تقارن بين قيمتين وتُرجع true أو false: أصغر، أكبر، أصغر أو يساوي، أكبر أو يساوي",
    "example": "age >= 18",
    "status": "current",
    "template": "{{a}} {{op}} {{b}}",
    "variables": [
      {
        "key": "a",
        "en": "value a",
        "ar": "القيمة الأولى",
        "label": "value a = القيمة الأولى",
        "default": "age"
      },
      {
        "key": "op",
        "en": "operator",
        "ar": "العامل",
        "label": "operator = العامل",
        "default": ">="
      },
      {
        "key": "b",
        "en": "value b",
        "ar": "القيمة الثانية",
        "label": "value b = القيمة الثانية",
        "default": "18"
      }
    ]
  },
  {
    "term": "++",
    "category": "العوامل (Operators)",
    "arabic": "زيادة بواحد",
    "explanation": "يزيد قيمة المتغير بمقدار واحد. i++ يُرجع القيمة قبل الزيادة، ++i يُرجعها بعدها",
    "example": "i++;",
    "status": "current",
    "template": "{{name}}++;",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "اسم المتغير",
        "label": "name = اسم المتغير",
        "default": "i"
      }
    ]
  },
  {
    "term": "--",
    "category": "العوامل (Operators)",
    "arabic": "نقصان بواحد",
    "explanation": "يُنقص قيمة المتغير بمقدار واحد. i-- يُرجع القيمة قبل النقصان، --i يُرجعها بعده",
    "example": "i--;",
    "status": "current",
    "template": "{{name}}--;",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "اسم المتغير",
        "label": "name = اسم المتغير",
        "default": "i"
      }
    ]
  },
  {
    "term": "&&=",
    "category": "العوامل (Operators)",
    "arabic": "إسناد شرطي بـ AND",
    "explanation": "يُسند القيمة الجديدة فقط إذا كانت القيمة الحالية للمتغير صحيحة (truthy)",
    "example": "user.name &&= trimmedName;",
    "status": "current",
    "template": "{{name}} &&= {{value}};",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "اسم المتغير",
        "label": "name = اسم المتغير",
        "default": "user.name"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "trimmedName"
      }
    ]
  },
  {
    "term": "||=",
    "category": "العوامل (Operators)",
    "arabic": "إسناد شرطي بـ OR",
    "explanation": "يُسند القيمة الجديدة فقط إذا كانت القيمة الحالية للمتغير خاطئة (falsy)",
    "example": "config.timeout ||= 3000;",
    "status": "current",
    "template": "{{name}} ||= {{value}};",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "اسم المتغير",
        "label": "name = اسم المتغير",
        "default": "config.timeout"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "3000"
      }
    ]
  },
  {
    "term": "??=",
    "category": "العوامل (Operators)",
    "arabic": "إسناد عند عدم الوجود",
    "explanation": "يُسند القيمة الجديدة فقط إذا كانت القيمة الحالية null أو undefined",
    "example": "options.color ??= \"blue\";",
    "status": "current",
    "template": "{{name}} ??= {{value}};",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "اسم المتغير",
        "label": "name = اسم المتغير",
        "default": "options.color"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "\"blue\""
      }
    ]
  },
  {
    "term": "in",
    "category": "العوامل (Operators)",
    "arabic": "يفحص وجود مفتاح",
    "explanation": "يتحقق إن كان اسم الخاصية موجوداً في الكائن (أو الفهرس في المصفوفة)",
    "example": "\"name\" in user;",
    "status": "current",
    "template": "\"{{key}}\" in {{object}}",
    "variables": [
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "name"
      },
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "user"
      }
    ]
  },
  {
    "term": "delete",
    "category": "العوامل (Operators)",
    "arabic": "حذف خاصية",
    "explanation": "يحذف خاصية من كائن نهائياً",
    "example": "delete user.age;",
    "status": "current",
    "template": "delete {{object}}.{{property}};",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "user"
      },
      {
        "key": "property",
        "en": "property",
        "ar": "الخاصية",
        "label": "property = الخاصية",
        "default": "age"
      }
    ]
  },
  {
    "term": "void",
    "category": "العوامل (Operators)",
    "arabic": "إرجاع undefined دوماً",
    "explanation": "ينفّذ التعبير ثم يُرجع undefined دائماً بغض النظر عن نتيجته",
    "example": "void 0;",
    "status": "current",
    "template": "void {{expression}};",
    "variables": [
      {
        "key": "expression",
        "en": "expression",
        "ar": "التعبير",
        "label": "expression = التعبير",
        "default": "0"
      }
    ]
  },
  {
    "term": "& | ^ ~",
    "category": "العوامل (Operators)",
    "arabic": "عوامل البت (AND/OR/XOR/NOT)",
    "explanation": "تُجري عمليات منطقية على مستوى البتّات الثنائية للأرقام: & تقاطع، | اتحاد، ^ استبعاد، ~ نفي",
    "example": "5 & 1; // 1",
    "status": "current",
    "template": "{{a}} {{op}} {{b}}",
    "variables": [
      {
        "key": "a",
        "en": "value a",
        "ar": "القيمة الأولى",
        "label": "value a = القيمة الأولى",
        "default": "5"
      },
      {
        "key": "op",
        "en": "operator",
        "ar": "العامل",
        "label": "operator = العامل",
        "default": "&"
      },
      {
        "key": "b",
        "en": "value b",
        "ar": "القيمة الثانية",
        "label": "value b = القيمة الثانية",
        "default": "1"
      }
    ]
  },
  {
    "term": "<< >> >>>",
    "category": "العوامل (Operators)",
    "arabic": "عوامل الإزاحة البتّية",
    "explanation": "تُزيح بتّات الرقم الثنائي يساراً أو يميناً: << يسار، >> يمين مع الحفاظ على الإشارة، >>> يمين بدون إشارة",
    "example": "4 << 1; // 8",
    "status": "current",
    "template": "{{a}} {{op}} {{b}}",
    "variables": [
      {
        "key": "a",
        "en": "value a",
        "ar": "القيمة",
        "label": "value a = القيمة",
        "default": "4"
      },
      {
        "key": "op",
        "en": "operator",
        "ar": "العامل",
        "label": "operator = العامل",
        "default": "<<"
      },
      {
        "key": "b",
        "en": "value b",
        "ar": "عدد الإزاحات",
        "label": "value b = عدد الإزاحات",
        "default": "1"
      }
    ]
  },

  // ==================== Array إضافية ====================
  {
    "term": "Array.at",
    "category": "دوال المصفوفات (Array)",
    "arabic": "عنصر بالفهرس (يقبل السالب)",
    "explanation": "يُرجع العنصر عند الفهرس المحدد، ويقبل أرقاماً سالبة للعدّ من النهاية",
    "example": "arr.at(-1);",
    "status": "current",
    "template": "{{array}}.at({{index}});",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      },
      {
        "key": "index",
        "en": "index",
        "ar": "الفهرس",
        "label": "index = الفهرس",
        "default": "-1"
      }
    ]
  },
  {
    "term": "Array.of",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إنشاء مصفوفة من عناصر",
    "explanation": "يُنشئ مصفوفة جديدة من القيم المُمرّرة مباشرة كعناصر (بخلاف new Array الذي يفسّر رقماً واحداً كطول)",
    "example": "Array.of(7); // [7]",
    "status": "current",
    "template": "Array.of({{items}});",
    "variables": [
      {
        "key": "items",
        "en": "items",
        "ar": "العناصر",
        "label": "items = العناصر",
        "default": "7"
      }
    ]
  },
  {
    "term": "Array.lastIndexOf",
    "category": "دوال المصفوفات (Array)",
    "arabic": "آخر فهرس لعنصر",
    "explanation": "يبحث عن آخر ظهور لقيمة في المصفوفة ويُرجع فهرسها، أو -1 إن لم توجد",
    "example": "arr.lastIndexOf(2);",
    "status": "current",
    "template": "{{array}}.lastIndexOf({{value}});",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "2"
      }
    ]
  },
  {
    "term": "Array.findLast",
    "category": "دوال المصفوفات (Array)",
    "arabic": "إيجاد آخر عنصر مطابق",
    "explanation": "يبحث من نهاية المصفوفة عن أول عنصر يُحقّق الشرط ويُرجعه",
    "example": "arr.findLast(x => x > 2);",
    "status": "current",
    "template": "{{array}}.findLast({{item}} => {{condition}});",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      },
      {
        "key": "item",
        "en": "item",
        "ar": "العنصر",
        "label": "item = العنصر",
        "default": "x"
      },
      {
        "key": "condition",
        "en": "condition",
        "ar": "الشرط",
        "label": "condition = الشرط",
        "default": "x > 2"
      }
    ]
  },
  {
    "term": "Array.copyWithin",
    "category": "دوال المصفوفات (Array)",
    "arabic": "نسخ جزء داخل نفس المصفوفة",
    "explanation": "ينسخ جزءاً من المصفوفة إلى مكان آخر فيها نفسها ويُعدّلها مباشرة",
    "example": "arr.copyWithin(0, 2);",
    "status": "current",
    "template": "{{array}}.copyWithin({{target}}, {{start}});",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      },
      {
        "key": "target",
        "en": "target",
        "ar": "الوجهة",
        "label": "target = الوجهة",
        "default": "0"
      },
      {
        "key": "start",
        "en": "start",
        "ar": "بداية النسخ",
        "label": "start = بداية النسخ",
        "default": "2"
      }
    ]
  },
  {
    "term": "Array.entries",
    "category": "دوال المصفوفات (Array)",
    "arabic": "أزواج الفهرس والقيمة",
    "explanation": "يُرجع مُكرِّراً (iterator) على أزواج [فهرس, قيمة] لكل عنصر في المصفوفة",
    "example": "for (const [i, v] of arr.entries()) {}",
    "status": "current",
    "template": "for (const [{{i}}, {{v}}] of {{array}}.entries()) {\n  {{body}}\n}",
    "variables": [
      {
        "key": "i",
        "en": "index",
        "ar": "الفهرس",
        "label": "index = الفهرس",
        "default": "i"
      },
      {
        "key": "v",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "v"
      },
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      },
      {
        "key": "body",
        "en": "body",
        "ar": "الجسم",
        "label": "body = الجسم",
        "default": "console.log(i, v);"
      }
    ]
  },
  {
    "term": "Array.keys",
    "category": "دوال المصفوفات (Array)",
    "arabic": "مُكرِّر الفهارس",
    "explanation": "يُرجع مُكرِّراً على فهارس المصفوفة فقط",
    "example": "[...arr.keys()];",
    "status": "current",
    "template": "[...{{array}}.keys()];",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      }
    ]
  },
  {
    "term": "Array.length",
    "category": "دوال المصفوفات (Array)",
    "arabic": "عدد العناصر",
    "explanation": "خاصية تُرجع عدد العناصر في المصفوفة، ويمكن تعديلها لقصّ المصفوفة أو توسيعها",
    "example": "arr.length;",
    "status": "current",
    "template": "{{array}}.length",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      }
    ]
  },
  {
    "term": "Array.toSorted",
    "category": "دوال المصفوفات (Array)",
    "arabic": "ترتيب بدون تعديل الأصل",
    "explanation": "يُرجع نسخة جديدة مُرتّبة من المصفوفة دون تغيير المصفوفة الأصلية (بخلاف sort)",
    "example": "arr.toSorted();",
    "status": "current",
    "template": "{{array}}.toSorted();",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      }
    ]
  },
  {
    "term": "Array.toReversed",
    "category": "دوال المصفوفات (Array)",
    "arabic": "عكس بدون تعديل الأصل",
    "explanation": "يُرجع نسخة جديدة معكوسة الترتيب دون تغيير المصفوفة الأصلية (بخلاف reverse)",
    "example": "arr.toReversed();",
    "status": "current",
    "template": "{{array}}.toReversed();",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      }
    ]
  },

  // ==================== String إضافية ====================
  {
    "term": "String.at",
    "category": "دوال النصوص (String)",
    "arabic": "حرف بالفهرس (يقبل السالب)",
    "explanation": "يُرجع الحرف عند الفهرس المحدد، ويقبل أرقاماً سالبة للعدّ من نهاية النص",
    "example": "str.at(-1);",
    "status": "current",
    "template": "{{string}}.at({{index}});",
    "variables": [
      {
        "key": "string",
        "en": "string",
        "ar": "النص",
        "label": "string = النص",
        "default": "str"
      },
      {
        "key": "index",
        "en": "index",
        "ar": "الفهرس",
        "label": "index = الفهرس",
        "default": "-1"
      }
    ]
  },
  {
    "term": "String.charCodeAt",
    "category": "دوال النصوص (String)",
    "arabic": "رمز الحرف الرقمي",
    "explanation": "يُرجع الرمز الرقمي (Unicode) للحرف عند فهرس معيّن",
    "example": "str.charCodeAt(0);",
    "status": "current",
    "template": "{{string}}.charCodeAt({{index}});",
    "variables": [
      {
        "key": "string",
        "en": "string",
        "ar": "النص",
        "label": "string = النص",
        "default": "str"
      },
      {
        "key": "index",
        "en": "index",
        "ar": "الفهرس",
        "label": "index = الفهرس",
        "default": "0"
      }
    ]
  },
  {
    "term": "String.fromCharCode",
    "category": "دوال النصوص (String)",
    "arabic": "إنشاء حرف من رمز رقمي",
    "explanation": "يُنشئ نصاً من رمز أو أرمز Unicode رقمية معطاة",
    "example": "String.fromCharCode(65); // \"A\"",
    "status": "current",
    "template": "String.fromCharCode({{code}});",
    "variables": [
      {
        "key": "code",
        "en": "code",
        "ar": "الرمز",
        "label": "code = الرمز",
        "default": "65"
      }
    ]
  },
  {
    "term": "String.concat",
    "category": "دوال النصوص (String)",
    "arabic": "دمج نصوص",
    "explanation": "يدمج نصاً أو أكثر مع النص الأصلي ويُرجع نصاً جديداً (استخدام + أشيع)",
    "example": "str.concat(\" \", \"world\");",
    "status": "current",
    "template": "{{string}}.concat({{other}});",
    "variables": [
      {
        "key": "string",
        "en": "string",
        "ar": "النص",
        "label": "string = النص",
        "default": "str"
      },
      {
        "key": "other",
        "en": "other",
        "ar": "النص الآخر",
        "label": "other = النص الآخر",
        "default": "\" world\""
      }
    ]
  },
  {
    "term": "String.trimStart",
    "category": "دوال النصوص (String)",
    "arabic": "إزالة الفراغات من البداية",
    "explanation": "يُزيل الفراغات البيضاء من بداية النص فقط",
    "example": "\"  hi\".trimStart();",
    "status": "current",
    "template": "{{string}}.trimStart();",
    "variables": [
      {
        "key": "string",
        "en": "string",
        "ar": "النص",
        "label": "string = النص",
        "default": "str"
      }
    ]
  },
  {
    "term": "String.trimEnd",
    "category": "دوال النصوص (String)",
    "arabic": "إزالة الفراغات من النهاية",
    "explanation": "يُزيل الفراغات البيضاء من نهاية النص فقط",
    "example": "\"hi  \".trimEnd();",
    "status": "current",
    "template": "{{string}}.trimEnd();",
    "variables": [
      {
        "key": "string",
        "en": "string",
        "ar": "النص",
        "label": "string = النص",
        "default": "str"
      }
    ]
  },
  {
    "term": "String.substring",
    "category": "دوال النصوص (String)",
    "arabic": "استخراج جزء نصي",
    "explanation": "يستخرج جزءاً من النص بين فهرسين، ولا يقبل قيماً سالبة (بخلاف slice)",
    "example": "str.substring(0, 3);",
    "status": "current",
    "template": "{{string}}.substring({{start}}, {{end}});",
    "variables": [
      {
        "key": "string",
        "en": "string",
        "ar": "النص",
        "label": "string = النص",
        "default": "str"
      },
      {
        "key": "start",
        "en": "start",
        "ar": "البداية",
        "label": "start = البداية",
        "default": "0"
      },
      {
        "key": "end",
        "en": "end",
        "ar": "النهاية",
        "label": "end = النهاية",
        "default": "3"
      }
    ]
  },
  {
    "term": "String.matchAll",
    "category": "دوال النصوص (String)",
    "arabic": "كل التطابقات النمطية",
    "explanation": "يُرجع مُكرِّراً على جميع تطابقات تعبير نمطي (regex) في النص، مفيد مع الأنماط العامة g",
    "example": "[...str.matchAll(/\\d+/g)];",
    "status": "current",
    "template": "[...{{string}}.matchAll({{pattern}})];",
    "variables": [
      {
        "key": "string",
        "en": "string",
        "ar": "النص",
        "label": "string = النص",
        "default": "str"
      },
      {
        "key": "pattern",
        "en": "pattern",
        "ar": "النمط",
        "label": "pattern = النمط",
        "default": "/\\d+/g"
      }
    ]
  },
  {
    "term": "String.localeCompare",
    "category": "دوال النصوص (String)",
    "arabic": "مقارنة أبجدية حسب اللغة",
    "explanation": "يقارن نصّين حسب ترتيب اللغة المحلية ويُرجع -1 أو 0 أو 1",
    "example": "\"a\".localeCompare(\"b\");",
    "status": "current",
    "template": "{{a}}.localeCompare({{b}});",
    "variables": [
      {
        "key": "a",
        "en": "string a",
        "ar": "النص الأول",
        "label": "string a = النص الأول",
        "default": "\"a\""
      },
      {
        "key": "b",
        "en": "string b",
        "ar": "النص الثاني",
        "label": "string b = النص الثاني",
        "default": "\"b\""
      }
    ]
  },

  // ==================== Object إضافية ====================
  {
    "term": "Object.create",
    "category": "دوال الكائنات (Object)",
    "arabic": "إنشاء كائن بنموذج أولي محدد",
    "explanation": "يُنشئ كائناً جديداً ويحدد له نموذجاً أولياً (prototype) صراحة",
    "example": "Object.create(proto);",
    "status": "current",
    "template": "Object.create({{proto}});",
    "variables": [
      {
        "key": "proto",
        "en": "prototype",
        "ar": "النموذج الأولي",
        "label": "prototype = النموذج الأولي",
        "default": "proto"
      }
    ]
  },
  {
    "term": "Object.defineProperty",
    "category": "دوال الكائنات (Object)",
    "arabic": "تعريف خاصية بدقة",
    "explanation": "يضيف أو يُعدّل خاصية على كائن مع التحكم الكامل في إعداداتها (قابلة للكتابة، للتعداد...)",
    "example": "Object.defineProperty(obj, \"x\", { value: 1 });",
    "status": "current",
    "template": "Object.defineProperty({{object}}, \"{{key}}\", { value: {{value}} });",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "x"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "1"
      }
    ]
  },
  {
    "term": "Object.fromEntries",
    "category": "دوال الكائنات (Object)",
    "arabic": "بناء كائن من أزواج",
    "explanation": "يبني كائناً من مصفوفة أزواج [مفتاح, قيمة]، عكس Object.entries",
    "example": "Object.fromEntries([[\"a\", 1]]);",
    "status": "current",
    "template": "Object.fromEntries({{entries}});",
    "variables": [
      {
        "key": "entries",
        "en": "entries",
        "ar": "الأزواج",
        "label": "entries = الأزواج",
        "default": "[[\"a\", 1]]"
      }
    ]
  },
  {
    "term": "Object.is",
    "category": "دوال الكائنات (Object)",
    "arabic": "مقارنة صارمة للقيم",
    "explanation": "يقارن قيمتين بدقة أعلى من ===، ويُفرّق بين NaN وNaN (تُعتبر متساوية) و+0 و-0 (تُعتبر مختلفة)",
    "example": "Object.is(NaN, NaN); // true",
    "status": "current",
    "template": "Object.is({{a}}, {{b}});",
    "variables": [
      {
        "key": "a",
        "en": "value a",
        "ar": "القيمة الأولى",
        "label": "value a = القيمة الأولى",
        "default": "NaN"
      },
      {
        "key": "b",
        "en": "value b",
        "ar": "القيمة الثانية",
        "label": "value b = القيمة الثانية",
        "default": "NaN"
      }
    ]
  },
  {
    "term": "Object.seal",
    "category": "دوال الكائنات (Object)",
    "arabic": "إغلاق الكائن جزئياً",
    "explanation": "يمنع إضافة أو حذف خصائص من الكائن، لكن يسمح بتعديل القيم الموجودة",
    "example": "Object.seal(obj);",
    "status": "current",
    "template": "Object.seal({{object}});",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      }
    ]
  },
  {
    "term": "Object.isFrozen",
    "category": "دوال الكائنات (Object)",
    "arabic": "فحص التجميد",
    "explanation": "يتحقق إن كان الكائن مُجمَّداً بالكامل عبر Object.freeze",
    "example": "Object.isFrozen(obj);",
    "status": "current",
    "template": "Object.isFrozen({{object}});",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      }
    ]
  },
  {
    "term": "Object.getOwnPropertyNames",
    "category": "دوال الكائنات (Object)",
    "arabic": "كل أسماء الخصائص",
    "explanation": "يُرجع أسماء كل خصائص الكائن الخاصة به، بما فيها غير القابلة للتعداد",
    "example": "Object.getOwnPropertyNames(obj);",
    "status": "current",
    "template": "Object.getOwnPropertyNames({{object}});",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      }
    ]
  },

  // ==================== Number و Math إضافية ====================
  {
    "term": "Number.isFinite",
    "category": "الأرقام (Number)",
    "arabic": "فحص العدد المحدود",
    "explanation": "يتحقق إن كانت القيمة رقماً محدوداً (ليست Infinity أو NaN) دون تحويل النوع",
    "example": "Number.isFinite(10);",
    "status": "current",
    "template": "Number.isFinite({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "10"
      }
    ]
  },
  {
    "term": "Number.isNaN",
    "category": "الأرقام (Number)",
    "arabic": "فحص NaN بدقة",
    "explanation": "يتحقق إن كانت القيمة NaN تحديداً، دون تحويل النوع (أدق من isNaN العامة)",
    "example": "Number.isNaN(NaN);",
    "status": "current",
    "template": "Number.isNaN({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "NaN"
      }
    ]
  },
  {
    "term": "Number.toPrecision",
    "category": "الأرقام (Number)",
    "arabic": "عدد الأرقام المعنوية",
    "explanation": "يُرجع نصاً للرقم بعدد محدد من الأرقام المعنوية الكلية",
    "example": "(123.456).toPrecision(4);",
    "status": "current",
    "template": "({{number}}).toPrecision({{digits}});",
    "variables": [
      {
        "key": "number",
        "en": "number",
        "ar": "الرقم",
        "label": "number = الرقم",
        "default": "123.456"
      },
      {
        "key": "digits",
        "en": "digits",
        "ar": "عدد الأرقام",
        "label": "digits = عدد الأرقام",
        "default": "4"
      }
    ]
  },
  {
    "term": "Number.toString(radix)",
    "category": "الأرقام (Number)",
    "arabic": "تحويل لنظام عددي آخر",
    "explanation": "يحوّل الرقم لنص بنظام عددي مختلف مثل الثنائي أو السداسي عشر",
    "example": "(255).toString(16); // \"ff\"",
    "status": "current",
    "template": "({{number}}).toString({{radix}});",
    "variables": [
      {
        "key": "number",
        "en": "number",
        "ar": "الرقم",
        "label": "number = الرقم",
        "default": "255"
      },
      {
        "key": "radix",
        "en": "radix",
        "ar": "الأساس",
        "label": "radix = الأساس",
        "default": "16"
      }
    ]
  },
  {
    "term": "Math.trunc",
    "category": "الرياضيات (Math)",
    "arabic": "قطع الجزء العشري",
    "explanation": "يحذف الجزء العشري من الرقم دون تقريب، سواء كان موجباً أو سالباً",
    "example": "Math.trunc(4.9); // 4",
    "status": "current",
    "template": "Math.trunc({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "4.9"
      }
    ]
  },
  {
    "term": "Math.sign",
    "category": "الرياضيات (Math)",
    "arabic": "إشارة الرقم",
    "explanation": "يُرجع 1 إن كان الرقم موجباً، -1 إن كان سالباً، 0 إن كان صفراً",
    "example": "Math.sign(-5); // -1",
    "status": "current",
    "template": "Math.sign({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "-5"
      }
    ]
  },
  {
    "term": "Math.log",
    "category": "الرياضيات (Math)",
    "arabic": "اللوغاريتم الطبيعي",
    "explanation": "يحسب اللوغاريتم الطبيعي (أساس e) للرقم",
    "example": "Math.log(Math.E); // 1",
    "status": "current",
    "template": "Math.log({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "Math.E"
      }
    ]
  },
  {
    "term": "Math.log2",
    "category": "الرياضيات (Math)",
    "arabic": "لوغاريتم أساس 2",
    "explanation": "يحسب لوغاريتم الرقم بالأساس 2",
    "example": "Math.log2(8); // 3",
    "status": "current",
    "template": "Math.log2({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "8"
      }
    ]
  },
  {
    "term": "Math.hypot",
    "category": "الرياضيات (Math)",
    "arabic": "الوتر الإقليدي",
    "explanation": "يحسب الجذر التربيعي لمجموع مربعات الأرقام المُمرّرة (وتر المثلث القائم)",
    "example": "Math.hypot(3, 4); // 5",
    "status": "current",
    "template": "Math.hypot({{a}}, {{b}});",
    "variables": [
      {
        "key": "a",
        "en": "value a",
        "ar": "الضلع الأول",
        "label": "value a = الضلع الأول",
        "default": "3"
      },
      {
        "key": "b",
        "en": "value b",
        "ar": "الضلع الثاني",
        "label": "value b = الضلع الثاني",
        "default": "4"
      }
    ]
  },
  {
    "term": "Math.PI",
    "category": "الرياضيات (Math)",
    "arabic": "ثابت النسبة التقريبية π",
    "explanation": "ثابت رياضي يمثل قيمة النسبة التقريبية π (حوالي 3.14159)",
    "example": "Math.PI;",
    "status": "current",
    "template": "Math.PI",
    "variables": []
  },
  {
    "term": "Math.cbrt",
    "category": "الرياضيات (Math)",
    "arabic": "الجذر التكعيبي",
    "explanation": "يحسب الجذر التكعيبي للرقم",
    "example": "Math.cbrt(27); // 3",
    "status": "current",
    "template": "Math.cbrt({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "27"
      }
    ]
  },

  // ==================== Date إضافية ====================
  {
    "term": "Date.getMonth",
    "category": "التاريخ والوقت (Date)",
    "arabic": "استخراج الشهر",
    "explanation": "يُرجع رقم الشهر من التاريخ، بدءاً من 0 لشهر يناير وحتى 11 لديسمبر",
    "example": "date.getMonth();",
    "status": "current",
    "template": "{{date}}.getMonth();",
    "variables": [
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "date"
      }
    ]
  },
  {
    "term": "Date.getDate",
    "category": "التاريخ والوقت (Date)",
    "arabic": "استخراج يوم الشهر",
    "explanation": "يُرجع رقم اليوم من الشهر (من 1 إلى 31)",
    "example": "date.getDate();",
    "status": "current",
    "template": "{{date}}.getDate();",
    "variables": [
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "date"
      }
    ]
  },
  {
    "term": "Date.getDay",
    "category": "التاريخ والوقت (Date)",
    "arabic": "استخراج يوم الأسبوع",
    "explanation": "يُرجع رقم يوم الأسبوع، من 0 للأحد وحتى 6 للسبت",
    "example": "date.getDay();",
    "status": "current",
    "template": "{{date}}.getDay();",
    "variables": [
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "date"
      }
    ]
  },
  {
    "term": "Date.getHours",
    "category": "التاريخ والوقت (Date)",
    "arabic": "استخراج الساعة",
    "explanation": "يُرجع الساعة من التاريخ (نظام 24 ساعة، من 0 إلى 23)",
    "example": "date.getHours();",
    "status": "current",
    "template": "{{date}}.getHours();",
    "variables": [
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "date"
      }
    ]
  },
  {
    "term": "Date.getTime",
    "category": "التاريخ والوقت (Date)",
    "arabic": "الوقت بالميلي ثانية",
    "explanation": "يُرجع عدد الميلي ثانية المنقضية منذ بداية يناير 1970 (Unix epoch)",
    "example": "date.getTime();",
    "status": "current",
    "template": "{{date}}.getTime();",
    "variables": [
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "date"
      }
    ]
  },
  {
    "term": "Date.setFullYear",
    "category": "التاريخ والوقت (Date)",
    "arabic": "تعديل السنة",
    "explanation": "يُغيّر سنة كائن التاريخ ويُعدّله في مكانه",
    "example": "date.setFullYear(2030);",
    "status": "current",
    "template": "{{date}}.setFullYear({{year}});",
    "variables": [
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "date"
      },
      {
        "key": "year",
        "en": "year",
        "ar": "السنة",
        "label": "year = السنة",
        "default": "2030"
      }
    ]
  },
  {
    "term": "Date.toLocaleDateString",
    "category": "التاريخ والوقت (Date)",
    "arabic": "تنسيق التاريخ محلياً",
    "explanation": "يُرجع نص التاريخ منسّقاً حسب اللغة والمنطقة، دون الوقت",
    "example": "date.toLocaleDateString(\"ar\");",
    "status": "current",
    "template": "{{date}}.toLocaleDateString(\"{{locale}}\");",
    "variables": [
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "date"
      },
      {
        "key": "locale",
        "en": "locale",
        "ar": "اللغة/المنطقة",
        "label": "locale = اللغة/المنطقة",
        "default": "ar"
      }
    ]
  },
  {
    "term": "Date.parse",
    "category": "التاريخ والوقت (Date)",
    "arabic": "تحويل نص لوقت",
    "explanation": "يحوّل نص تاريخ إلى عدد الميلي ثانية منذ 1970، أو NaN إن كان غير صالح",
    "example": "Date.parse(\"2024-01-01\");",
    "status": "current",
    "template": "Date.parse(\"{{text}}\");",
    "variables": [
      {
        "key": "text",
        "en": "text",
        "ar": "النص",
        "label": "text = النص",
        "default": "2024-01-01"
      }
    ]
  },

  // ==================== Map و Set إضافية ====================
  {
    "term": "Map.has",
    "category": "Map و Set",
    "arabic": "فحص وجود مفتاح",
    "explanation": "يتحقق إن كان المفتاح موجوداً في Map",
    "example": "map.has(\"a\");",
    "status": "current",
    "template": "{{map}}.has({{key}});",
    "variables": [
      {
        "key": "map",
        "en": "map",
        "ar": "الخريطة",
        "label": "map = الخريطة",
        "default": "map"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "\"a\""
      }
    ]
  },
  {
    "term": "Map.delete",
    "category": "Map و Set",
    "arabic": "حذف مفتاح",
    "explanation": "يحذف مدخلاً من Map عبر مفتاحه ويُرجع true إن نجح",
    "example": "map.delete(\"a\");",
    "status": "current",
    "template": "{{map}}.delete({{key}});",
    "variables": [
      {
        "key": "map",
        "en": "map",
        "ar": "الخريطة",
        "label": "map = الخريطة",
        "default": "map"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "\"a\""
      }
    ]
  },
  {
    "term": "Map.size",
    "category": "Map و Set",
    "arabic": "عدد العناصر في Map",
    "explanation": "خاصية تُرجع عدد المدخلات الموجودة في Map",
    "example": "map.size;",
    "status": "current",
    "template": "{{map}}.size",
    "variables": [
      {
        "key": "map",
        "en": "map",
        "ar": "الخريطة",
        "label": "map = الخريطة",
        "default": "map"
      }
    ]
  },
  {
    "term": "Map.forEach",
    "category": "Map و Set",
    "arabic": "المرور على عناصر Map",
    "explanation": "ينفّذ دالة على كل زوج مفتاح/قيمة في Map",
    "example": "map.forEach((v, k) => {});",
    "status": "current",
    "template": "{{map}}.forEach(({{value}}, {{key}}) => {\n  {{body}}\n});",
    "variables": [
      {
        "key": "map",
        "en": "map",
        "ar": "الخريطة",
        "label": "map = الخريطة",
        "default": "map"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "v"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "k"
      },
      {
        "key": "body",
        "en": "body",
        "ar": "الجسم",
        "label": "body = الجسم",
        "default": "console.log(k, v);"
      }
    ]
  },
  {
    "term": "Set.has",
    "category": "Map و Set",
    "arabic": "فحص وجود قيمة",
    "explanation": "يتحقق إن كانت القيمة موجودة في Set",
    "example": "set.has(5);",
    "status": "current",
    "template": "{{set}}.has({{value}});",
    "variables": [
      {
        "key": "set",
        "en": "set",
        "ar": "المجموعة",
        "label": "set = المجموعة",
        "default": "set"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "5"
      }
    ]
  },
  {
    "term": "Set.delete",
    "category": "Map و Set",
    "arabic": "حذف قيمة من Set",
    "explanation": "يحذف قيمة محددة من Set ويُرجع true إن نجح",
    "example": "set.delete(5);",
    "status": "current",
    "template": "{{set}}.delete({{value}});",
    "variables": [
      {
        "key": "set",
        "en": "set",
        "ar": "المجموعة",
        "label": "set = المجموعة",
        "default": "set"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "5"
      }
    ]
  },
  {
    "term": "Set.size",
    "category": "Map و Set",
    "arabic": "عدد العناصر في Set",
    "explanation": "خاصية تُرجع عدد العناصر الفريدة في Set",
    "example": "set.size;",
    "status": "current",
    "template": "{{set}}.size",
    "variables": [
      {
        "key": "set",
        "en": "set",
        "ar": "المجموعة",
        "label": "set = المجموعة",
        "default": "set"
      }
    ]
  },

  // ==================== Promise إضافية ====================
  {
    "term": "Promise.race",
    "category": "البرمجة غير المتزامنة",
    "arabic": "أول وعد ينتهي",
    "explanation": "يُرجع نتيجة أول Promise ينتهي (نجاحاً أو فشلاً) من بين مجموعة وعود",
    "example": "Promise.race([p1, p2]);",
    "status": "current",
    "template": "Promise.race([{{promises}}]);",
    "variables": [
      {
        "key": "promises",
        "en": "promises",
        "ar": "الوعود",
        "label": "promises = الوعود",
        "default": "p1, p2"
      }
    ]
  },
  {
    "term": "Promise.allSettled",
    "category": "البرمجة غير المتزامنة",
    "arabic": "انتظار كل الوعود دون فشل مبكر",
    "explanation": "ينتظر انتهاء كل الوعود ويُرجع نتيجة كل واحد (نجح أو فشل) دون توقف عند أول فشل",
    "example": "Promise.allSettled([p1, p2]);",
    "status": "current",
    "template": "Promise.allSettled([{{promises}}]);",
    "variables": [
      {
        "key": "promises",
        "en": "promises",
        "ar": "الوعود",
        "label": "promises = الوعود",
        "default": "p1, p2"
      }
    ]
  },
  {
    "term": "Promise.any",
    "category": "البرمجة غير المتزامنة",
    "arabic": "أول وعد ينجح",
    "explanation": "يُرجع أول Promise ينجح من مجموعة، ويفشل فقط إذا فشلت كل الوعود",
    "example": "Promise.any([p1, p2]);",
    "status": "current",
    "template": "Promise.any([{{promises}}]);",
    "variables": [
      {
        "key": "promises",
        "en": "promises",
        "ar": "الوعود",
        "label": "promises = الوعود",
        "default": "p1, p2"
      }
    ]
  },
  {
    "term": "Promise.resolve",
    "category": "البرمجة غير المتزامنة",
    "arabic": "إنشاء وعد ناجح مباشرة",
    "explanation": "يُنشئ Promise ناجحاً فوراً بقيمة محددة",
    "example": "Promise.resolve(5);",
    "status": "current",
    "template": "Promise.resolve({{value}});",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "5"
      }
    ]
  },
  {
    "term": "Promise.reject",
    "category": "البرمجة غير المتزامنة",
    "arabic": "إنشاء وعد فاشل مباشرة",
    "explanation": "يُنشئ Promise فاشلاً فوراً بسبب محدد",
    "example": "Promise.reject(\"error\");",
    "status": "current",
    "template": "Promise.reject({{reason}});",
    "variables": [
      {
        "key": "reason",
        "en": "reason",
        "ar": "السبب",
        "label": "reason = السبب",
        "default": "\"error\""
      }
    ]
  },

  // ==================== معالجة الأخطاء إضافية ====================
  {
    "term": "throw new Error",
    "category": "معالجة الأخطاء",
    "arabic": "رمي كائن خطأ",
    "explanation": "يُنشئ كائن خطأ قياسياً برسالة محددة ويرميه، وهو الأسلوب الموصى به بدلاً من رمي نص عادي",
    "example": "throw new Error(\"حدث خطأ\");",
    "status": "current",
    "template": "throw new Error(\"{{message}}\");",
    "variables": [
      {
        "key": "message",
        "en": "message",
        "ar": "الرسالة",
        "label": "message = الرسالة",
        "default": "حدث خطأ"
      }
    ]
  },
  {
    "term": "error.message",
    "category": "معالجة الأخطاء",
    "arabic": "نص رسالة الخطأ",
    "explanation": "خاصية على كائن الخطأ تحتوي نص الرسالة الموضّحة للسبب",
    "example": "catch (e) { console.log(e.message); }",
    "status": "current",
    "template": "{{error}}.message",
    "variables": [
      {
        "key": "error",
        "en": "error",
        "ar": "الخطأ",
        "label": "error = الخطأ",
        "default": "e"
      }
    ]
  },
  {
    "term": "class MyError extends Error",
    "category": "معالجة الأخطاء",
    "arabic": "صنف خطأ مخصص",
    "explanation": "يُنشئ نوعاً مخصصاً من الأخطاء يرث من Error، مفيد لتمييز أنواع الأخطاء في try/catch",
    "example": "class MyError extends Error {}",
    "status": "current",
    "template": "class {{name}} extends Error {\n  constructor({{message}}) {\n    super({{message}});\n    this.name = \"{{name}}\";\n  }\n}",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "اسم الصنف",
        "label": "name = اسم الصنف",
        "default": "MyError"
      },
      {
        "key": "message",
        "en": "message",
        "ar": "الرسالة",
        "label": "message = الرسالة",
        "default": "message"
      }
    ]
  },

  // ==================== أنواع متقدمة إضافية ====================
  {
    "term": "BigInt",
    "category": "أنواع متقدمة",
    "arabic": "عدد صحيح كبير",
    "explanation": "نوع بيانات يمثّل أعداداً صحيحة كبيرة جداً تتجاوز حدود نوع Number العادي",
    "example": "10n + 20n;",
    "status": "current",
    "template": "{{value}}n",
    "variables": [
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "10"
      }
    ]
  },
  {
    "term": "globalThis",
    "category": "أنواع متقدمة",
    "arabic": "الكائن الشامل العام",
    "explanation": "يشير إلى الكائن العام الشامل بغض النظر عن البيئة (المتصفح أو Node.js)",
    "example": "globalThis.myVar = 5;",
    "status": "current",
    "template": "globalThis.{{property}}",
    "variables": [
      {
        "key": "property",
        "en": "property",
        "ar": "الخاصية",
        "label": "property = الخاصية",
        "default": "myVar"
      }
    ]
  },
  {
    "term": "new Proxy",
    "category": "أنواع متقدمة",
    "arabic": "كائن وسيط (Proxy)",
    "explanation": "يُنشئ غلافاً حول كائن يسمح باعتراض والتحكم في عمليات القراءة والكتابة عليه",
    "example": "new Proxy(target, handler);",
    "status": "current",
    "template": "new Proxy({{target}}, {{handler}});",
    "variables": [
      {
        "key": "target",
        "en": "target",
        "ar": "الكائن الهدف",
        "label": "target = الكائن الهدف",
        "default": "target"
      },
      {
        "key": "handler",
        "en": "handler",
        "ar": "المعالِج",
        "label": "handler = المعالِج",
        "default": "handler"
      }
    ]
  },
  {
    "term": "structuredClone",
    "category": "أنواع متقدمة",
    "arabic": "نسخ عميق للكائن",
    "explanation": "يُنشئ نسخة عميقة كاملة من كائن أو مصفوفة، بما فيها الكائنات المتداخلة",
    "example": "const copy = structuredClone(obj);",
    "status": "current",
    "template": "const {{name}} = structuredClone({{object}});",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "copy"
      },
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      }
    ]
  },
  {
    "term": "# (خاصية خاصة)",
    "category": "الأصناف",
    "arabic": "حقل خاص بالصنف",
    "explanation": "يُعرّف حقلاً داخل الصنف لا يمكن الوصول إليه إلا من داخل الصنف نفسه",
    "example": "class Counter { #count = 0; }",
    "status": "current",
    "template": "class {{className}} {\n  #{{field}} = {{value}};\n}",
    "variables": [
      {
        "key": "className",
        "en": "class name",
        "ar": "اسم الصنف",
        "label": "class name = اسم الصنف",
        "default": "Counter"
      },
      {
        "key": "field",
        "en": "field",
        "ar": "الحقل",
        "label": "field = الحقل",
        "default": "count"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "0"
      }
    ]
  },

  // ==================== الأحداث إضافية ====================
  {
    "term": "event.target",
    "category": "الأحداث (Events)",
    "arabic": "العنصر الذي أطلق الحدث",
    "explanation": "يشير إلى العنصر الفعلي الذي وقع عليه الحدث مباشرة",
    "example": "el.addEventListener(\"click\", e => console.log(e.target));",
    "status": "current",
    "template": "{{event}}.target",
    "variables": [
      {
        "key": "event",
        "en": "event",
        "ar": "الحدث",
        "label": "event = الحدث",
        "default": "e"
      }
    ]
  },
  {
    "term": "event.key",
    "category": "الأحداث (Events)",
    "arabic": "المفتاح المضغوط",
    "explanation": "في أحداث لوحة المفاتيح، يُرجع اسم المفتاح الذي ضغطه المستخدم",
    "example": "document.addEventListener(\"keydown\", e => console.log(e.key));",
    "status": "current",
    "template": "{{event}}.key",
    "variables": [
      {
        "key": "event",
        "en": "event",
        "ar": "الحدث",
        "label": "event = الحدث",
        "default": "e"
      }
    ]
  },
  {
    "term": "new CustomEvent",
    "category": "الأحداث (Events)",
    "arabic": "حدث مخصص",
    "explanation": "يُنشئ حدثاً مخصصاً باسمه وبياناته الخاصة يمكن إطلاقه لاحقاً على أي عنصر",
    "example": "new CustomEvent(\"saved\", { detail: { id: 1 } });",
    "status": "current",
    "template": "new CustomEvent(\"{{name}}\", { detail: {{detail}} });",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "اسم الحدث",
        "label": "name = اسم الحدث",
        "default": "saved"
      },
      {
        "key": "detail",
        "en": "detail",
        "ar": "البيانات المرفقة",
        "label": "detail = البيانات المرفقة",
        "default": "{ id: 1 }"
      }
    ]
  },
  {
    "term": "dispatchEvent",
    "category": "الأحداث (Events)",
    "arabic": "إطلاق حدث يدوياً",
    "explanation": "يُطلق حدثاً برمجياً على عنصر كأنه وقع فعلاً",
    "example": "el.dispatchEvent(new Event(\"click\"));",
    "status": "current",
    "template": "{{element}}.dispatchEvent({{event}});",
    "variables": [
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      },
      {
        "key": "event",
        "en": "event",
        "ar": "الحدث",
        "label": "event = الحدث",
        "default": "new Event(\"click\")"
      }
    ]
  },

  // ==================== DOM إضافية ====================
  {
    "term": "matches",
    "category": "التعامل مع عناصر DOM",
    "arabic": "فحص مطابقة محدد",
    "explanation": "يتحقق إن كان العنصر نفسه يطابق محدد CSS معطى",
    "example": "el.matches(\".active\");",
    "status": "current",
    "template": "{{element}}.matches(\"{{selector}}\");",
    "variables": [
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      },
      {
        "key": "selector",
        "en": "selector",
        "ar": "المحدد",
        "label": "selector = المحدد",
        "default": ".active"
      }
    ]
  },
  {
    "term": "contains",
    "category": "التعامل مع عناصر DOM",
    "arabic": "فحص احتواء عنصر",
    "explanation": "يتحقق إن كان عنصر معيّن هو نفسه أو أحد أبناء العنصر الحالي",
    "example": "parent.contains(child);",
    "status": "current",
    "template": "{{parent}}.contains({{child}});",
    "variables": [
      {
        "key": "parent",
        "en": "parent",
        "ar": "الأب",
        "label": "parent = الأب",
        "default": "parent"
      },
      {
        "key": "child",
        "en": "child",
        "ar": "الابن",
        "label": "child = الابن",
        "default": "child"
      }
    ]
  },
  {
    "term": "remove",
    "category": "التعامل مع عناصر DOM",
    "arabic": "حذف العنصر من الصفحة",
    "explanation": "يحذف العنصر مباشرة من الصفحة دون الحاجة لاستدعاء removeChild من الأب",
    "example": "el.remove();",
    "status": "current",
    "template": "{{element}}.remove();",
    "variables": [
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      }
    ]
  },
  {
    "term": "append",
    "category": "التعامل مع عناصر DOM",
    "arabic": "إضافة في النهاية",
    "explanation": "يضيف عنصراً أو نصاً في نهاية أبناء العنصر، ويقبل عدة عناصر أو نصوصاً مباشرة",
    "example": "parent.append(newEl);",
    "status": "current",
    "template": "{{parent}}.append({{content}});",
    "variables": [
      {
        "key": "parent",
        "en": "parent",
        "ar": "الأب",
        "label": "parent = الأب",
        "default": "parent"
      },
      {
        "key": "content",
        "en": "content",
        "ar": "المحتوى",
        "label": "content = المحتوى",
        "default": "newEl"
      }
    ]
  },
  {
    "term": "prepend",
    "category": "التعامل مع عناصر DOM",
    "arabic": "إضافة في البداية",
    "explanation": "يضيف عنصراً أو نصاً في بداية أبناء العنصر",
    "example": "parent.prepend(newEl);",
    "status": "current",
    "template": "{{parent}}.prepend({{content}});",
    "variables": [
      {
        "key": "parent",
        "en": "parent",
        "ar": "الأب",
        "label": "parent = الأب",
        "default": "parent"
      },
      {
        "key": "content",
        "en": "content",
        "ar": "المحتوى",
        "label": "content = المحتوى",
        "default": "newEl"
      }
    ]
  },
  {
    "term": "replaceWith",
    "category": "التعامل مع عناصر DOM",
    "arabic": "استبدال العنصر بآخر",
    "explanation": "يستبدل العنصر الحالي بعنصر أو نص آخر في نفس مكانه",
    "example": "oldEl.replaceWith(newEl);",
    "status": "current",
    "template": "{{oldElement}}.replaceWith({{newElement}});",
    "variables": [
      {
        "key": "oldElement",
        "en": "old element",
        "ar": "العنصر القديم",
        "label": "old element = العنصر القديم",
        "default": "oldEl"
      },
      {
        "key": "newElement",
        "en": "new element",
        "ar": "العنصر الجديد",
        "label": "new element = العنصر الجديد",
        "default": "newEl"
      }
    ]
  },
  {
    "term": "dataset",
    "category": "التعامل مع عناصر DOM",
    "arabic": "بيانات data-* المخصصة",
    "explanation": "يقرأ أو يُعدّل خصائص data-* المخصصة الموجودة على وسم HTML",
    "example": "el.dataset.userId = \"42\";",
    "status": "current",
    "template": "{{element}}.dataset.{{key}} = \"{{value}}\";",
    "variables": [
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "userId"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "42"
      }
    ]
  },
  {
    "term": "getBoundingClientRect",
    "category": "التعامل مع عناصر DOM",
    "arabic": "أبعاد وموقع العنصر",
    "explanation": "يُرجع حجم العنصر وموقعه بالنسبة لنافذة العرض (viewport)",
    "example": "el.getBoundingClientRect();",
    "status": "current",
    "template": "{{element}}.getBoundingClientRect();",
    "variables": [
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      }
    ]
  },
  {
    "term": "scrollIntoView",
    "category": "التعامل مع عناصر DOM",
    "arabic": "التمرير حتى ظهور العنصر",
    "explanation": "يُمرّر الصفحة تلقائياً حتى يصبح العنصر مرئياً ضمن نافذة العرض",
    "example": "el.scrollIntoView({ behavior: \"smooth\" });",
    "status": "current",
    "template": "{{element}}.scrollIntoView({ behavior: \"{{behavior}}\" });",
    "variables": [
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      },
      {
        "key": "behavior",
        "en": "behavior",
        "ar": "طريقة التمرير",
        "label": "behavior = طريقة التمرير",
        "default": "smooth"
      }
    ]
  },

  // ==================== اختيار عناصر DOM إضافية ====================
  {
    "term": "document.getElementsByTagName",
    "category": "اختيار عناصر DOM",
    "arabic": "اختيار حسب اسم الوسم",
    "explanation": "يُرجع كل العناصر التي تحمل اسم وسم معيّن في الصفحة",
    "example": "document.getElementsByTagName(\"p\");",
    "status": "current",
    "template": "document.getElementsByTagName(\"{{tag}}\");",
    "variables": [
      {
        "key": "tag",
        "en": "tag",
        "ar": "الوسم",
        "label": "tag = الوسم",
        "default": "p"
      }
    ]
  },

  // ==================== المتصفح BOM إضافية ====================
  {
    "term": "window.innerWidth / innerHeight",
    "category": "المتصفح (BOM)",
    "arabic": "أبعاد نافذة المتصفح",
    "explanation": "يقرآن العرض والارتفاع الحاليين لمنطقة عرض المتصفح بالبكسل",
    "example": "window.innerWidth;",
    "status": "current",
    "template": "window.{{dimension}}",
    "variables": [
      {
        "key": "dimension",
        "en": "dimension",
        "ar": "البُعد",
        "label": "dimension = البُعد",
        "default": "innerWidth"
      }
    ]
  },
  {
    "term": "navigator.userAgent",
    "category": "المتصفح (BOM)",
    "arabic": "معلومات المتصفح",
    "explanation": "نص يحتوي معلومات عن المتصفح ونظام التشغيل المستخدم",
    "example": "navigator.userAgent;",
    "status": "current",
    "template": "navigator.userAgent",
    "variables": []
  },
  {
    "term": "location.reload",
    "category": "المتصفح (BOM)",
    "arabic": "إعادة تحميل الصفحة",
    "explanation": "يُعيد تحميل الصفحة الحالية من جديد",
    "example": "location.reload();",
    "status": "current",
    "template": "location.reload();",
    "variables": []
  },
  {
    "term": "requestAnimationFrame",
    "category": "المتصفح (BOM)",
    "arabic": "جدولة إطار حركة",
    "explanation": "يطلب من المتصفح تنفيذ دالة قبل رسم الإطار التالي، مفيد للحركات السلسة",
    "example": "requestAnimationFrame(draw);",
    "status": "current",
    "template": "requestAnimationFrame({{callback}});",
    "variables": [
      {
        "key": "callback",
        "en": "callback",
        "ar": "الدالة",
        "label": "callback = الدالة",
        "default": "draw"
      }
    ]
  },
  {
    "term": "matchMedia",
    "category": "المتصفح (BOM)",
    "arabic": "فحص استعلام وسائط برمجياً",
    "explanation": "يتحقق برمجياً من تطابق استعلام وسائط CSS معيّن مثل حجم الشاشة",
    "example": "window.matchMedia(\"(max-width: 600px)\").matches;",
    "status": "current",
    "template": "window.matchMedia(\"{{query}}\").matches",
    "variables": [
      {
        "key": "query",
        "en": "query",
        "ar": "الاستعلام",
        "label": "query = الاستعلام",
        "default": "(max-width: 600px)"
      }
    ]
  },

  // ==================== الوحدات والتفكيك إضافية ====================
  {
    "term": "export *",
    "category": "الوحدات",
    "arabic": "تصدير الكل من وحدة أخرى",
    "explanation": "يُعيد تصدير كل الصادرات من وحدة أخرى دفعة واحدة",
    "example": "export * from \"./utils.js\";",
    "status": "current",
    "template": "export * from \"{{path}}\";",
    "variables": [
      {
        "key": "path",
        "en": "path",
        "ar": "المسار",
        "label": "path = المسار",
        "default": "./utils.js"
      }
    ]
  },
  {
    "term": "import * as",
    "category": "الوحدات",
    "arabic": "استيراد الكل باسم واحد",
    "explanation": "يستورد كل الصادرات من ملف ويجمعها في كائن واحد باسم محدد",
    "example": "import * as utils from \"./utils.js\";",
    "status": "current",
    "template": "import * as {{name}} from \"{{path}}\";",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "utils"
      },
      {
        "key": "path",
        "en": "path",
        "ar": "المسار",
        "label": "path = المسار",
        "default": "./utils.js"
      }
    ]
  },
  {
    "term": "destructuring with default",
    "category": "التفكيك (Destructuring)",
    "arabic": "تفكيك بقيمة افتراضية",
    "explanation": "يُعطي قيمة افتراضية للمتغير عند التفكيك إن كانت الخاصية غير موجودة",
    "example": "const { name = \"مجهول\" } = user;",
    "status": "current",
    "template": "const { {{key}} = {{defaultValue}} } = {{object}};",
    "variables": [
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "name"
      },
      {
        "key": "defaultValue",
        "en": "default value",
        "ar": "القيمة الافتراضية",
        "label": "default value = القيمة الافتراضية",
        "default": "\"مجهول\""
      },
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "user"
      }
    ]
  },
  {
    "term": "destructuring rename",
    "category": "التفكيك (Destructuring)",
    "arabic": "تفكيك مع إعادة تسمية",
    "explanation": "يُعيد تسمية المتغير الناتج عن التفكيك لاسم مختلف عن اسم الخاصية الأصلي",
    "example": "const { name: userName } = user;",
    "status": "current",
    "template": "const { {{key}}: {{newName}} } = {{object}};",
    "variables": [
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "name"
      },
      {
        "key": "newName",
        "en": "new name",
        "ar": "الاسم الجديد",
        "label": "new name = الاسم الجديد",
        "default": "userName"
      },
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "user"
      }
    ]
  },
  {
    "term": "swap variables",
    "category": "التفكيك (Destructuring)",
    "arabic": "تبديل قيمتي متغيرين",
    "explanation": "يُبدّل قيمتي متغيرين مباشرة باستخدام تفكيك المصفوفة دون متغير وسيط",
    "example": "[a, b] = [b, a];",
    "status": "current",
    "template": "[{{a}}, {{b}}] = [{{b}}, {{a}}];",
    "variables": [
      {
        "key": "a",
        "en": "a",
        "ar": "المتغير الأول",
        "label": "a = المتغير الأول",
        "default": "a"
      },
      {
        "key": "b",
        "en": "b",
        "ar": "المتغير الثاني",
        "label": "b = المتغير الثاني",
        "default": "b"
      }
    ]
  },

  // ==================== Intl (التدويل) ====================
  {
    "term": "Intl.NumberFormat",
    "category": "Intl (التدويل)",
    "arabic": "تنسيق الأرقام محلياً",
    "explanation": "يُنسّق رقماً حسب اللغة والمنطقة، مثل إضافة فواصل الآلاف أو رمز العملة",
    "example": "new Intl.NumberFormat(\"ar-EG\").format(1234);",
    "status": "current",
    "template": "new Intl.NumberFormat(\"{{locale}}\").format({{number}});",
    "variables": [
      {
        "key": "locale",
        "en": "locale",
        "ar": "اللغة/المنطقة",
        "label": "locale = اللغة/المنطقة",
        "default": "ar-EG"
      },
      {
        "key": "number",
        "en": "number",
        "ar": "الرقم",
        "label": "number = الرقم",
        "default": "1234"
      }
    ]
  },
  {
    "term": "Intl.NumberFormat (عملة)",
    "category": "Intl (التدويل)",
    "arabic": "تنسيق كعملة",
    "explanation": "يُنسّق رقماً كقيمة نقدية مع رمز العملة المناسب حسب اللغة",
    "example": "new Intl.NumberFormat(\"ar-EG\", { style: \"currency\", currency: \"EGP\" }).format(50);",
    "status": "current",
    "template": "new Intl.NumberFormat(\"{{locale}}\", { style: \"currency\", currency: \"{{currency}}\" }).format({{number}});",
    "variables": [
      {
        "key": "locale",
        "en": "locale",
        "ar": "اللغة/المنطقة",
        "label": "locale = اللغة/المنطقة",
        "default": "ar-EG"
      },
      {
        "key": "currency",
        "en": "currency",
        "ar": "العملة",
        "label": "currency = العملة",
        "default": "EGP"
      },
      {
        "key": "number",
        "en": "number",
        "ar": "الرقم",
        "label": "number = الرقم",
        "default": "50"
      }
    ]
  },
  {
    "term": "Intl.DateTimeFormat",
    "category": "Intl (التدويل)",
    "arabic": "تنسيق التاريخ والوقت محلياً",
    "explanation": "يُنسّق كائن تاريخ حسب اللغة والمنطقة بأسلوب مقروء للمستخدم",
    "example": "new Intl.DateTimeFormat(\"ar\").format(new Date());",
    "status": "current",
    "template": "new Intl.DateTimeFormat(\"{{locale}}\").format({{date}});",
    "variables": [
      {
        "key": "locale",
        "en": "locale",
        "ar": "اللغة/المنطقة",
        "label": "locale = اللغة/المنطقة",
        "default": "ar"
      },
      {
        "key": "date",
        "en": "date",
        "ar": "التاريخ",
        "label": "date = التاريخ",
        "default": "new Date()"
      }
    ]
  },
  {
    "term": "Intl.RelativeTimeFormat",
    "category": "Intl (التدويل)",
    "arabic": "وقت نسبي مقروء",
    "explanation": "يُحوّل فرقاً زمنياً رقمياً إلى عبارة مقروءة مثل \"منذ يومين\" أو \"بعد ٣ ساعات\"",
    "example": "new Intl.RelativeTimeFormat(\"ar\").format(-2, \"day\");",
    "status": "current",
    "template": "new Intl.RelativeTimeFormat(\"{{locale}}\").format({{value}}, \"{{unit}}\");",
    "variables": [
      {
        "key": "locale",
        "en": "locale",
        "ar": "اللغة/المنطقة",
        "label": "locale = اللغة/المنطقة",
        "default": "ar"
      },
      {
        "key": "value",
        "en": "value",
        "ar": "القيمة",
        "label": "value = القيمة",
        "default": "-2"
      },
      {
        "key": "unit",
        "en": "unit",
        "ar": "الوحدة",
        "label": "unit = الوحدة",
        "default": "day"
      }
    ]
  },
  {
    "term": "Intl.Collator",
    "category": "Intl (التدويل)",
    "arabic": "ترتيب أبجدي حسب اللغة",
    "explanation": "يقارن ويُرتّب النصوص حسب قواعد الأبجدية الصحيحة للغة معينة، أدق من الترتيب الافتراضي",
    "example": "arr.sort(new Intl.Collator(\"ar\").compare);",
    "status": "current",
    "template": "{{array}}.sort(new Intl.Collator(\"{{locale}}\").compare);",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "arr"
      },
      {
        "key": "locale",
        "en": "locale",
        "ar": "اللغة",
        "label": "locale = اللغة",
        "default": "ar"
      }
    ]
  },
  {
    "term": "Intl.PluralRules",
    "category": "Intl (التدويل)",
    "arabic": "قواعد صيغة الجمع",
    "explanation": "يحدد صيغة الجمع الصحيحة للغة معينة بناءً على رقم (مفرد، مثنى، جمع...)",
    "example": "new Intl.PluralRules(\"ar\").select(2); // \"two\"",
    "status": "current",
    "template": "new Intl.PluralRules(\"{{locale}}\").select({{number}});",
    "variables": [
      {
        "key": "locale",
        "en": "locale",
        "ar": "اللغة",
        "label": "locale = اللغة",
        "default": "ar"
      },
      {
        "key": "number",
        "en": "number",
        "ar": "الرقم",
        "label": "number = الرقم",
        "default": "2"
      }
    ]
  },

  // ==================== المولّدات المتقدمة ====================
  {
    "term": "yield*",
    "category": "المولّدات (Generators)",
    "arabic": "تفويض التوليد",
    "explanation": "يُفوّض التوليد لمولّد آخر أو عنصر قابل للتكرار، فيمرّ عبر كل قيمه واحدة تلو الأخرى",
    "example": "function* g() { yield* [1, 2, 3]; }",
    "status": "current",
    "template": "yield* {{iterable}};",
    "variables": [
      {
        "key": "iterable",
        "en": "iterable",
        "ar": "القابل للتكرار",
        "label": "iterable = القابل للتكرار",
        "default": "[1, 2, 3]"
      }
    ]
  },
  {
    "term": "async function*",
    "category": "المولّدات (Generators)",
    "arabic": "مولّد غير متزامن",
    "explanation": "يجمع بين async وfunction* لإنتاج قيم بشكل متتابع مع دعم الانتظار (await) بين كل قيمة والأخرى",
    "example": "async function* gen() { yield await fetchData(); }",
    "status": "current",
    "template": "async function* {{name}}() {\n  yield await {{expression}};\n}",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "gen"
      },
      {
        "key": "expression",
        "en": "expression",
        "ar": "التعبير",
        "label": "expression = التعبير",
        "default": "fetchData()"
      }
    ]
  },
  {
    "term": "for await...of",
    "category": "البرمجة غير المتزامنة",
    "arabic": "مرور غير متزامن على القيم",
    "explanation": "يمرّ على قيم مولّد غير متزامن أو مصدر بيانات متدفق، وينتظر كل قيمة قبل الانتقال للتالية",
    "example": "for await (const chunk of stream) {}",
    "status": "current",
    "template": "for await (const {{item}} of {{asyncIterable}}) {\n  {{body}}\n}",
    "variables": [
      {
        "key": "item",
        "en": "item",
        "ar": "العنصر",
        "label": "item = العنصر",
        "default": "chunk"
      },
      {
        "key": "asyncIterable",
        "en": "async iterable",
        "ar": "المصدر غير المتزامن",
        "label": "async iterable = المصدر غير المتزامن",
        "default": "stream"
      },
      {
        "key": "body",
        "en": "body",
        "ar": "الجسم",
        "label": "body = الجسم",
        "default": "console.log(chunk);"
      }
    ]
  },
  {
    "term": "Symbol.iterator",
    "category": "أنواع متقدمة",
    "arabic": "جعل الكائن قابلاً للتكرار",
    "explanation": "دالة خاصة تُعرَّف على كائن لتحديد كيف يتم المرور على قيمه باستخدام for...of",
    "example": "obj[Symbol.iterator] = function* () { yield 1; yield 2; };",
    "status": "current",
    "template": "{{object}}[Symbol.iterator] = function* () {\n  {{body}}\n};",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      },
      {
        "key": "body",
        "en": "body",
        "ar": "الجسم",
        "label": "body = الجسم",
        "default": "yield 1;\n  yield 2;"
      }
    ]
  },

  // ==================== Web Workers ====================
  {
    "term": "new Worker",
    "category": "Web Workers",
    "arabic": "إنشاء خيط عامل منفصل",
    "explanation": "يُشغّل ملف جافا سكريبت في خيط منفصل بالخلفية دون تجميد الواجهة الرئيسية",
    "example": "const worker = new Worker(\"task.js\");",
    "status": "current",
    "template": "const {{name}} = new Worker(\"{{path}}\");",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "worker"
      },
      {
        "key": "path",
        "en": "path",
        "ar": "المسار",
        "label": "path = المسار",
        "default": "task.js"
      }
    ]
  },
  {
    "term": "worker.postMessage",
    "category": "Web Workers",
    "arabic": "إرسال بيانات للعامل",
    "explanation": "يُرسل بيانات من الصفحة الرئيسية إلى الـ Worker (أو العكس داخل الـ Worker)",
    "example": "worker.postMessage({ type: \"start\" });",
    "status": "current",
    "template": "{{worker}}.postMessage({{data}});",
    "variables": [
      {
        "key": "worker",
        "en": "worker",
        "ar": "العامل",
        "label": "worker = العامل",
        "default": "worker"
      },
      {
        "key": "data",
        "en": "data",
        "ar": "البيانات",
        "label": "data = البيانات",
        "default": "{ type: \"start\" }"
      }
    ]
  },
  {
    "term": "worker.onmessage",
    "category": "Web Workers",
    "arabic": "استقبال رسالة من العامل",
    "explanation": "دالة تُستدعى تلقائياً عند وصول رسالة من الـ Worker",
    "example": "worker.onmessage = e => console.log(e.data);",
    "status": "current",
    "template": "{{worker}}.onmessage = {{param}} => {\n  {{body}}\n};",
    "variables": [
      {
        "key": "worker",
        "en": "worker",
        "ar": "العامل",
        "label": "worker = العامل",
        "default": "worker"
      },
      {
        "key": "param",
        "en": "event",
        "ar": "الحدث",
        "label": "event = الحدث",
        "default": "e"
      },
      {
        "key": "body",
        "en": "body",
        "ar": "الجسم",
        "label": "body = الجسم",
        "default": "console.log(e.data);"
      }
    ]
  },
  {
    "term": "worker.terminate",
    "category": "Web Workers",
    "arabic": "إيقاف العامل",
    "explanation": "يُنهي الـ Worker فوراً ويوقف تنفيذه بالكامل",
    "example": "worker.terminate();",
    "status": "current",
    "template": "{{worker}}.terminate();",
    "variables": [
      {
        "key": "worker",
        "en": "worker",
        "ar": "العامل",
        "label": "worker = العامل",
        "default": "worker"
      }
    ]
  },

  // ==================== IndexedDB ====================
  {
    "term": "indexedDB.open",
    "category": "IndexedDB",
    "arabic": "فتح قاعدة بيانات محلية",
    "explanation": "يفتح (أو يُنشئ إن لم تكن موجودة) قاعدة بيانات IndexedDB داخل المتصفح",
    "example": "const request = indexedDB.open(\"myDB\", 1);",
    "status": "current",
    "template": "const {{name}} = indexedDB.open(\"{{dbName}}\", {{version}});",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "request"
      },
      {
        "key": "dbName",
        "en": "database name",
        "ar": "اسم القاعدة",
        "label": "database name = اسم القاعدة",
        "default": "myDB"
      },
      {
        "key": "version",
        "en": "version",
        "ar": "الإصدار",
        "label": "version = الإصدار",
        "default": "1"
      }
    ]
  },
  {
    "term": "db.createObjectStore",
    "category": "IndexedDB",
    "arabic": "إنشاء مخزن كائنات",
    "explanation": "يُنشئ مخزناً جديداً (يشبه الجدول) داخل قاعدة IndexedDB لتخزين السجلات فيه",
    "example": "db.createObjectStore(\"users\", { keyPath: \"id\" });",
    "status": "current",
    "template": "{{db}}.createObjectStore(\"{{storeName}}\", { keyPath: \"{{keyPath}}\" });",
    "variables": [
      {
        "key": "db",
        "en": "database",
        "ar": "القاعدة",
        "label": "database = القاعدة",
        "default": "db"
      },
      {
        "key": "storeName",
        "en": "store name",
        "ar": "اسم المخزن",
        "label": "store name = اسم المخزن",
        "default": "users"
      },
      {
        "key": "keyPath",
        "en": "key path",
        "ar": "مسار المفتاح",
        "label": "key path = مسار المفتاح",
        "default": "id"
      }
    ]
  },
  {
    "term": "transaction.objectStore",
    "category": "IndexedDB",
    "arabic": "الوصول لمخزن ضمن معاملة",
    "explanation": "يفتح مخزن كائنات محدد ضمن معاملة قراءة أو كتابة قائمة",
    "example": "const store = tx.objectStore(\"users\");",
    "status": "current",
    "template": "const {{name}} = {{transaction}}.objectStore(\"{{storeName}}\");",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "store"
      },
      {
        "key": "transaction",
        "en": "transaction",
        "ar": "المعاملة",
        "label": "transaction = المعاملة",
        "default": "tx"
      },
      {
        "key": "storeName",
        "en": "store name",
        "ar": "اسم المخزن",
        "label": "store name = اسم المخزن",
        "default": "users"
      }
    ]
  },
  {
    "term": "store.add",
    "category": "IndexedDB",
    "arabic": "إضافة سجل جديد",
    "explanation": "يُضيف سجلاً جديداً إلى مخزن الكائنات، ويفشل إن كان المفتاح مكرراً",
    "example": "store.add({ id: 1, name: \"أحمد\" });",
    "status": "current",
    "template": "{{store}}.add({{record}});",
    "variables": [
      {
        "key": "store",
        "en": "store",
        "ar": "المخزن",
        "label": "store = المخزن",
        "default": "store"
      },
      {
        "key": "record",
        "en": "record",
        "ar": "السجل",
        "label": "record = السجل",
        "default": "{ id: 1, name: \"أحمد\" }"
      }
    ]
  },
  {
    "term": "store.get",
    "category": "IndexedDB",
    "arabic": "جلب سجل بالمفتاح",
    "explanation": "يجلب سجلاً واحداً من المخزن باستخدام مفتاحه",
    "example": "store.get(1);",
    "status": "current",
    "template": "{{store}}.get({{key}});",
    "variables": [
      {
        "key": "store",
        "en": "store",
        "ar": "المخزن",
        "label": "store = المخزن",
        "default": "store"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "1"
      }
    ]
  },

  // ==================== Reflect و WeakRef ====================
  {
    "term": "Reflect.get",
    "category": "أنواع متقدمة",
    "arabic": "قراءة خاصية بأسلوب موحّد",
    "explanation": "يقرأ قيمة خاصية من كائن بأسلوب دالة بدلاً من النقطة، مفيد مع Proxy",
    "example": "Reflect.get(obj, \"name\");",
    "status": "current",
    "template": "Reflect.get({{object}}, \"{{key}}\");",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "name"
      }
    ]
  },
  {
    "term": "Reflect.has",
    "category": "أنواع متقدمة",
    "arabic": "فحص وجود خاصية بأسلوب موحّد",
    "explanation": "يتحقق من وجود خاصية في كائن، بديل موحّد لعامل in",
    "example": "Reflect.has(obj, \"name\");",
    "status": "current",
    "template": "Reflect.has({{object}}, \"{{key}}\");",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      },
      {
        "key": "key",
        "en": "key",
        "ar": "المفتاح",
        "label": "key = المفتاح",
        "default": "name"
      }
    ]
  },
  {
    "term": "Reflect.ownKeys",
    "category": "أنواع متقدمة",
    "arabic": "كل مفاتيح الكائن الخاصة",
    "explanation": "يُرجع كل مفاتيح الكائن الخاصة به، بما فيها الرموز (Symbols) وغير القابلة للتعداد",
    "example": "Reflect.ownKeys(obj);",
    "status": "current",
    "template": "Reflect.ownKeys({{object}});",
    "variables": [
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      }
    ]
  },
  {
    "term": "new WeakRef",
    "category": "أنواع متقدمة",
    "arabic": "مرجع ضعيف لكائن",
    "explanation": "يحتفظ بمرجع لكائن دون منع جامع القمامة من حذفه إن لم يُستخدم في مكان آخر",
    "example": "const ref = new WeakRef(obj);",
    "status": "current",
    "template": "const {{name}} = new WeakRef({{object}});",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "ref"
      },
      {
        "key": "object",
        "en": "object",
        "ar": "الكائن",
        "label": "object = الكائن",
        "default": "obj"
      }
    ]
  },

  // ==================== مراقبات المتصفح (Observers) ====================
  {
    "term": "new IntersectionObserver",
    "category": "المتصفح (BOM)",
    "arabic": "مراقب ظهور العنصر بالشاشة",
    "explanation": "يراقب متى يدخل عنصر معيّن منطقة العرض المرئية، مفيد للتحميل الكسول والحركات عند التمرير",
    "example": "new IntersectionObserver(callback).observe(el);",
    "status": "current",
    "template": "new IntersectionObserver({{callback}}).observe({{element}});",
    "variables": [
      {
        "key": "callback",
        "en": "callback",
        "ar": "دالة الاستجابة",
        "label": "callback = دالة الاستجابة",
        "default": "callback"
      },
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      }
    ]
  },
  {
    "term": "new MutationObserver",
    "category": "المتصفح (BOM)",
    "arabic": "مراقب تغييرات DOM",
    "explanation": "يراقب أي تغييرات تطرأ على عنصر أو أبنائه في الصفحة (إضافة، حذف، تعديل خاصية)",
    "example": "new MutationObserver(callback).observe(el, { childList: true });",
    "status": "current",
    "template": "new MutationObserver({{callback}}).observe({{element}}, { childList: true });",
    "variables": [
      {
        "key": "callback",
        "en": "callback",
        "ar": "دالة الاستجابة",
        "label": "callback = دالة الاستجابة",
        "default": "callback"
      },
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      }
    ]
  },
  {
    "term": "new ResizeObserver",
    "category": "المتصفح (BOM)",
    "arabic": "مراقب تغيّر الحجم",
    "explanation": "يراقب متى يتغيّر حجم عنصر معيّن وينفّذ دالة عند كل تغيير",
    "example": "new ResizeObserver(callback).observe(el);",
    "status": "current",
    "template": "new ResizeObserver({{callback}}).observe({{element}});",
    "variables": [
      {
        "key": "callback",
        "en": "callback",
        "ar": "دالة الاستجابة",
        "label": "callback = دالة الاستجابة",
        "default": "callback"
      },
      {
        "key": "element",
        "en": "element",
        "ar": "العنصر",
        "label": "element = العنصر",
        "default": "el"
      }
    ]
  },

  // ==================== fetch متقدم ====================
  {
    "term": "fetch (POST)",
    "category": "المتصفح (BOM)",
    "arabic": "إرسال بيانات عبر fetch",
    "explanation": "يُرسل طلب POST مع بيانات JSON في جسم الطلب إلى الخادم",
    "example": "fetch(url, { method: \"POST\", body: JSON.stringify(data) });",
    "status": "current",
    "template": "fetch(\"{{url}}\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({{data}})\n});",
    "variables": [
      {
        "key": "url",
        "en": "url",
        "ar": "الرابط",
        "label": "url = الرابط",
        "default": "/api/users"
      },
      {
        "key": "data",
        "en": "data",
        "ar": "البيانات",
        "label": "data = البيانات",
        "default": "data"
      }
    ]
  },
  {
    "term": "response.json",
    "category": "المتصفح (BOM)",
    "arabic": "تحويل الاستجابة إلى JSON",
    "explanation": "يقرأ جسم استجابة fetch ويحوّله من نص إلى كائن JavaScript، ويُرجع Promise",
    "example": "const data = await response.json();",
    "status": "current",
    "template": "const {{name}} = await {{response}}.json();",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "data"
      },
      {
        "key": "response",
        "en": "response",
        "ar": "الاستجابة",
        "label": "response = الاستجابة",
        "default": "response"
      }
    ]
  },
  {
    "term": "response.ok",
    "category": "المتصفح (BOM)",
    "arabic": "فحص نجاح الاستجابة",
    "explanation": "خاصية منطقية تُخبر إن كانت حالة استجابة fetch ضمن نطاق النجاح (200-299)",
    "example": "if (!response.ok) throw new Error(\"فشل الطلب\");",
    "status": "current",
    "template": "if (!{{response}}.ok) {\n  {{body}}\n}",
    "variables": [
      {
        "key": "response",
        "en": "response",
        "ar": "الاستجابة",
        "label": "response = الاستجابة",
        "default": "response"
      },
      {
        "key": "body",
        "en": "body",
        "ar": "الجسم",
        "label": "body = الجسم",
        "default": "throw new Error(\"فشل الطلب\");"
      }
    ]
  },
  {
    "term": "new AbortController",
    "category": "المتصفح (BOM)",
    "arabic": "إلغاء طلب أو عملية",
    "explanation": "يُنشئ أداة تحكم تسمح بإلغاء طلب fetch أو عملية غير متزامنة أخرى قبل انتهائها",
    "example": "const controller = new AbortController();\nfetch(url, { signal: controller.signal });\ncontroller.abort();",
    "status": "current",
    "template": "const {{name}} = new AbortController();\nfetch({{url}}, { signal: {{name}}.signal });",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "controller"
      },
      {
        "key": "url",
        "en": "url",
        "ar": "الرابط",
        "label": "url = الرابط",
        "default": "url"
      }
    ]
  },

  // ==================== متفرقات ختامية ====================
  {
    "term": "crypto.randomUUID",
    "category": "دوال عامة (Global)",
    "arabic": "توليد معرّف فريد",
    "explanation": "يُولّد معرّفاً عشوائياً فريداً بصيغة UUID قياسية",
    "example": "crypto.randomUUID();",
    "status": "current",
    "template": "crypto.randomUUID();",
    "variables": []
  },
  {
    "term": "Object.groupBy",
    "category": "دوال الكائنات (Object)",
    "arabic": "تجميع عناصر مصفوفة حسب شرط",
    "explanation": "يُجمّع عناصر مصفوفة في كائن واحد بناءً على مفتاح تُحدّده دالة، كل مجموعة في مصفوفة منفصلة",
    "example": "Object.groupBy(items, item => item.type);",
    "status": "current",
    "template": "Object.groupBy({{array}}, {{item}} => {{keyExpression}});",
    "variables": [
      {
        "key": "array",
        "en": "array",
        "ar": "المصفوفة",
        "label": "array = المصفوفة",
        "default": "items"
      },
      {
        "key": "item",
        "en": "item",
        "ar": "العنصر",
        "label": "item = العنصر",
        "default": "item"
      },
      {
        "key": "keyExpression",
        "en": "key expression",
        "ar": "تعبير المفتاح",
        "label": "key expression = تعبير المفتاح",
        "default": "item.type"
      }
    ]
  },
  {
    "term": "tagged template",
    "category": "دوال عامة (Global)",
    "arabic": "قالب نصي موسوم",
    "explanation": "يمرّر أجزاء القالب النصي (النص والمتغيرات) كوسائط لدالة مخصصة لمعالجتها قبل الدمج",
    "example": "function tag(strings, ...values) {}\ntag`مرحباً ${name}`;",
    "status": "current",
    "template": "function {{tagName}}(strings, ...values) {\n  {{body}}\n}\n{{tagName}}`{{template}}`;",
    "variables": [
      {
        "key": "tagName",
        "en": "tag function",
        "ar": "دالة الوسم",
        "label": "tag function = دالة الوسم",
        "default": "tag"
      },
      {
        "key": "body",
        "en": "body",
        "ar": "الجسم",
        "label": "body = الجسم",
        "default": "return strings.join(\"\");"
      },
      {
        "key": "template",
        "en": "template",
        "ar": "القالب",
        "label": "template = القالب",
        "default": "مرحباً ${name}"
      }
    ]
  },
  {
    "term": "labeled break",
    "category": "الحلقات",
    "arabic": "كسر حلقة مُسمّاة",
    "explanation": "يُخرج من حلقة خارجية مباشرة عند وضع اسم (تسمية) عليها، مفيد مع الحلقات المتداخلة",
    "example": "outer: for (...) { for (...) { break outer; } }",
    "status": "current",
    "template": "{{label}}: for ({{outerLoop}}) {\n  for ({{innerLoop}}) {\n    break {{label}};\n  }\n}",
    "variables": [
      {
        "key": "label",
        "en": "label",
        "ar": "التسمية",
        "label": "label = التسمية",
        "default": "outer"
      },
      {
        "key": "outerLoop",
        "en": "outer loop",
        "ar": "الحلقة الخارجية",
        "label": "outer loop = الحلقة الخارجية",
        "default": "let i = 0; i < 3; i++"
      },
      {
        "key": "innerLoop",
        "en": "inner loop",
        "ar": "الحلقة الداخلية",
        "label": "inner loop = الحلقة الداخلية",
        "default": "let j = 0; j < 3; j++"
      }
    ]
  },
  {
    "term": "optional call ?.()",
    "category": "العوامل (Operators)",
    "arabic": "استدعاء دالة آمن",
    "explanation": "يستدعي الدالة فقط إذا كانت موجودة فعلاً (ليست null أو undefined)، وإلا يُرجع undefined دون خطأ",
    "example": "callback?.();",
    "status": "current",
    "template": "{{name}}?.({{args}});",
    "variables": [
      {
        "key": "name",
        "en": "name",
        "ar": "الاسم",
        "label": "name = الاسم",
        "default": "callback"
      },
      {
        "key": "args",
        "en": "arguments",
        "ar": "الوسائط",
        "label": "arguments = الوسائط",
        "default": ""
      }
    ]
  },
  {
    "term": "console.error",
    "category": "دوال عامة (Global)",
    "arabic": "طباعة خطأ في الطرفية",
    "explanation": "يطبع رسالة في طرفية المطوّر بتنسيق خاص بالأخطاء (عادة باللون الأحمر)",
    "example": "console.error(\"حدث خطأ!\");",
    "status": "current",
    "template": "console.error(\"{{message}}\");",
    "variables": [
      {
        "key": "message",
        "en": "message",
        "ar": "الرسالة",
        "label": "message = الرسالة",
        "default": "حدث خطأ!"
      }
    ]
  },
  {
    "term": "console.table",
    "category": "دوال عامة (Global)",
    "arabic": "عرض بيانات كجدول",
    "explanation": "يطبع مصفوفة أو كائناً على شكل جدول منظّم في طرفية المطوّر، مفيد لمراجعة البيانات",
    "example": "console.table(users);",
    "status": "current",
    "template": "console.table({{data}});",
    "variables": [
      {
        "key": "data",
        "en": "data",
        "ar": "البيانات",
        "label": "data = البيانات",
        "default": "users"
      }
    ]
  },
];


// تصدير البيانات (بقية ملفات data/html و data/css تفعل هذا، وكان غيابه هنا يمنع أي كود خارجي من الوصول لـ jsDictionary عبر window)
if (typeof window !== 'undefined') {
  window.jsDictionary = jsDictionary;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = jsDictionary;
}

function findTerm(term) {
  return jsDictionary.find(
    (entry) => entry.term.toLowerCase() === String(term).toLowerCase()
  );
}

function renderTemplate(entry, values = {}) {
  let out = entry.template;
  for (const variable of entry.variables) {
    const val = values[variable.key] ?? variable.default;
    out = out.replaceAll(`{{${variable.key}}}`, val);
  }
  return out;
}
