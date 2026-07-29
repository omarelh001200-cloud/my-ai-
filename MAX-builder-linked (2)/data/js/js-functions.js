// ============================================================
// js-functions.js
// ÇáÏæÇá (Functions) İí JavaScript
// ÊÔÑÍ ÌãíÚ ÃäæÇÚ ÇáÏæÇá: function, arrow functions, methods, generators
// ============================================================

const jsFunctionsData = [
    // ============================================================
    // 1. function - ÇáÏÇáÉ ÇáÊŞáíÏíÉ
    // ============================================================
    {
        tag: "function",
        description: "ÊÚÑøİ ßÊáÉ ßæÏ ŞÇÈáÉ áÅÚÇÏÉ ÇáÇÓÊÎÏÇã íãßä ÇÓÊÏÚÇÄåÇ ÈãÚØíÇÊ. íãßä ÊÚÑíİåÇ ÈÅÚáÇä (Declaration) Ãæ ÊÚÈíÑ (Expression)",
        properties: [
            {
                name: "function declaration",
                description: "ÊÚÑíİ ÏÇáÉ ÈÇÓÊÎÏÇã ÇáßáãÉ function",
                values: [
                    { value: "function name(params) { body }", description: "ÇáÕíÛÉ ÇáÃÓÇÓíÉ" },
                    { value: "function greet(name) { return 'ãÑÍÈÇğ ' + name; }", description: "ÏÇáÉ ÊÑÍíÈ" },
                    { value: "function add(a, b) { return a + b; }", description: "ÏÇáÉ ÌãÚ" },
                    { value: "function isEven(num) { return num % 2 === 0; }", description: "ÇáÊÍŞŞ ãä ÇáÒæÌíÉ" },
                    { value: "function getFullName(user) { return user.firstName + ' ' + user.lastName; }", description: "ÇÓÊÎÑÇÌ ÇáÇÓã ÇáßÇãá" }
                ]
            },
            {
                name: "function expression",
                description: "ÊÚÑíİ ÏÇáÉ ßÊÚÈíÑ (íõÎÒä İí ãÊÛíÑ)",
                values: [
                    { value: "const name = function(params) { body }", description: "ÇáÕíÛÉ ÇáÃÓÇÓíÉ" },
                    { value: "const greet = function(name) { return 'ãÑÍÈÇğ ' + name; };", description: "ÏÇáÉ ãÌåæáÉ İí ãÊÛíÑ" },
                    { value: "const add = function(a, b) { return a + b; };", description: "ÏÇáÉ ÌãÚ ßÊÚÈíÑ" },
                    { value: "const factorial = function f(n) { return n <= 1 ? 1 : n * f(n - 1); };", description: "ÏÇáÉ ãÓãÇÉ (ÇÓÊÏÚÇÁ ĞÇÊí)" },
                    { value: "const fn = function() { console.log('Êã'); };", description: "ÏÇáÉ ÈÏæä ãÚØíÇÊ" }
                ]
            },
            {
                name: "function - ÇáÑİÚ (Hoisting)",
                description: "ÇáÏæÇá ÇáãÚáäÉ (declaration) ÊõÑİÚ Åáì ÃÚáì ÇáäØÇŞ¡ ÈíäãÇ ÊÚÈíÑÇÊ ÇáÏæÇá áÇ ÊõÑİÚ",
                values: [
                    { value: "greet('ÃÍãÏ'); function greet(name) { console.log(name); }", description: "íãßä ÇÓÊÏÚÇÄåÇ ŞÈá ÇáÊÚÑíİ (declaration)" },
                    { value: "greet('ÃÍãÏ'); // TypeError const greet = function(name) { console.log(name); };", description: "áÇ íãßä ÇÓÊÏÚÇÄåÇ ŞÈá ÇáÊÚÑíİ (expression)" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. Arrow Functions - ÇáÏæÇá ÇáÓåãíÉ
    // ============================================================
    {
        tag: "arrow-functions",
        description: "ÕíÛÉ ãÎÊÕÑÉ áßÊÇÈÉ ÇáÏæÇá¡ æáÇ Êãáß this ÎÇÕÇğ ÈåÇ (ÊÑË this ãä ÇáäØÇŞ ÇáãÍíØ). ÊÏÚã ÇáÕíÛÉ ÇáãÎÊÕÑÉ ({...}) æÇáÚæÏÉ ÇáÖãäíÉ",
        properties: [
            {
                name: "=> (Arrow Function)",
                description: "ÕíÛÉ ãÎÊÕÑÉ ááÏæÇá",
                values: [
                    { value: "() => expression", description: "ÕíÛÉ ãÎÊÕÑÉ (ÚæÏÉ ÖãäíÉ)" },
                    { value: "() => { body }", description: "ÕíÛÉ ãÚ ÌÓã" },
                    { value: "const add = (a, b) => a + b;", description: "ÏÇáÉ ÌãÚ (ÖãäíÉ)" },
                    { value: "const greet = name => 'ãÑÍÈÇğ ' + name;", description: "ãÚØì æÇÍÏ (ÈÏæä ÃŞæÇÓ)" },
                    { value: "const getFullName = (user) => user.firstName + ' ' + user.lastName;", description: "ãÚØì æÇÍÏ ãÚ ÃŞæÇÓ" },
                    { value: "const log = () => console.log('ãÑÍÈÇğ');", description: "ÈÏæä ãÚØíÇÊ" },
                    { value: "const process = (x, y) => { const result = x + y; return result * 2; }", description: "ãÚ ÌÓã ãÊÚÏÏ ÇáÃÓØÑ" }
                ]
            },
            {
                name: "Arrow Functions - ÇáÚæÏÉ ÇáÖãäíÉ",
                description: "ÇáÚæÏÉ ÇáÖãäíÉ (Implicit Return) ááŞíã ÇáÈÓíØÉ",
                values: [
                    { value: "const double = x => x * 2;", description: "ÅÑÌÇÚ x * 2" },
                    { value: "const square = x => x ** 2;", description: "ÅÑÌÇÚ x²" },
                    { value: "const toUpperCase = str => str.toUpperCase();", description: "ÅÑÌÇÚ ÇáäÕ ÈÃÍÑİ ßÈíÑÉ" },
                    { value: "const getAge = user => user.age;", description: "ÅÑÌÇÚ ÎÇÕíÉ" },
                    { value: "const sum = (a, b) => a + b;", description: "ÌãÚ ÑŞãíä" }
                ]
            },
            {
                name: "Arrow Functions - ÇáÚæÏÉ ÇáÕÑíÍÉ ááßÇÆäÇÊ",
                description: "áÅÑÌÇÚ ßÇÆä ãÈÇÔÑÉ¡ ÇÓÊÎÏã ÇáÃŞæÇÓ () áÊÌäÈ ÇáÎáØ ãÚ ÌÓã ÇáÏÇáÉ",
                values: [
                    { value: "const createUser = (name, age) => ({ name, age });", description: "ÅÑÌÇÚ ßÇÆä" },
                    { value: "const getConfig = () => ({ theme: 'dark', lang: 'ar' });", description: "ÅÑÌÇÚ ßÇÆä ÅÚÏÇÏÇÊ" },
                    { value: "const point = (x, y) => ({ x, y });", description: "ÅÑÌÇÚ äŞØÉ" }
                ]
            },
            {
                name: "Arrow Functions - this",
                description: "ÇáÏæÇá ÇáÓåãíÉ áÇ Êãáß this ÎÇÕÇğ ÈåÇ¡ Èá ÊÑËå ãä ÇáäØÇŞ ÇáãÍíØ",
                values: [
                    { value: "const obj = { name: 'ÃÍãÏ', greet: () => console.log(this.name) }; obj.greet(); // undefined", description: "this íÔíÑ Åáì ÇáäØÇŞ ÇáÎÇÑÌí" },
                    { value: "const obj = { name: 'ÃÍãÏ', greet() { console.log(this.name); } }; obj.greet(); // ÃÍãÏ", description: "function íÍÊİÙ ÈÜ this ÇáÎÇÕ Èå" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. return - ÇáÚæÏÉ
    // ============================================================
    {
        tag: "return",
        description: "íõäåí ÊäİíĞ ÇáÏÇáÉ æíõÑÌÚ ŞíãÉ Åáì ãßÇä ÇÓÊÏÚÇÆåÇ. ÅĞÇ áã ÊõÍÏÏ ŞíãÉ¡ ÊõÑÌÚ undefined",
        properties: [
            {
                name: "return",
                description: "ÅÑÌÇÚ ŞíãÉ ãä ÇáÏÇáÉ",
                values: [
                    { value: "return value;", description: "ÅÑÌÇÚ ŞíãÉ ãÍÏÏÉ" },
                    { value: "function add(a, b) { return a + b; }", description: "ÅÑÌÇÚ äÊíÌÉ ÇáÌãÚ" },
                    { value: "function getName() { return 'ÃÍãÏ'; }", description: "ÅÑÌÇÚ äÕ" },
                    { value: "function getConfig() { return { theme: 'dark' }; }", description: "ÅÑÌÇÚ ßÇÆä" },
                    { value: "function getItems() { return [1, 2, 3]; }", description: "ÅÑÌÇÚ ãÕİæİÉ" },
                    { value: "function process(x) { if (x < 0) return; console.log(x); }", description: "ÅäåÇÁ ãÈßÑ (return undefined)" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. Default Parameters - ÇáãÚØíÇÊ ÇáÇİÊÑÇÖíÉ
    // ============================================================
    {
        tag: "default-parameters",
        description: "ÊÓãÍ ÈÊÍÏíÏ ŞíãÉ ÇİÊÑÇÖíÉ ááãÚØì ÊõÓÊÎÏã ÅĞÇ áã íõãÑóøÑ ÔíÁ ÚäÏ ÇáÇÓÊÏÚÇÁ Ãæ ÅĞÇ ßÇäÊ ÇáŞíãÉ undefined",
        properties: [
            {
                name: "default parameters",
                description: "ãÚØíÇÊ ÇİÊÑÇÖíÉ",
                values: [
                    { value: "function greet(name = 'ÕÏíŞ') { return 'ãÑÍÈÇğ ' + name; }", description: "ŞíãÉ ÇİÊÑÇÖíÉ" },
                    { value: "function multiply(a, b = 1) { return a * b; }", description: "b = 1 ÇİÊÑÇÖí" },
                    { value: "function createUser(name = 'ãÌåæá', age = 0) { return { name, age }; }", description: "Şíã ÇİÊÑÇÖíÉ ãÊÚÏÏÉ" },
                    { value: "function log(message = 'ãÑÍÈÇğ') { console.log(message); }", description: "ÑÓÇáÉ ÇİÊÑÇÖíÉ" }
                ]
            },
            {
                name: "default parameters - ÊÚÈíÑÇÊ",
                description: "íãßä ÇÓÊÎÏÇã ÊÚÈíÑÇÊ ßŞíã ÇİÊÑÇÖíÉ",
                values: [
                    { value: "function getDefault() { return 'ÇİÊÑÇÖí'; } function greet(name = getDefault()) { return 'ãÑÍÈÇğ ' + name; }", description: "ÇÓÊÏÚÇÁ ÏÇáÉ ßŞíãÉ ÇİÊÑÇÖíÉ" },
                    { value: "function createId(prefix = 'user-', id = Date.now()) { return prefix + id; }", description: "ÇÓÊÎÏÇã Date.now()" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. Rest Parameters - ãÚØíÇÊ ÇáÈÇŞí
    // ============================================================
    {
        tag: "rest-parameters",
        description: "íÌãÚ ßá ÇáãÚØíÇÊ ÇáÒÇÆÏÉ ÇáãÑÓáÉ ááÏÇáÉ İí ãÕİæİÉ æÇÍÏÉ. íõÔÇÑ ÅáíåÇ ÈÜ ... ŞÈá ÇÓã ÇáãÚØì¡ æÊßæä ÏÇÆãÇğ ÂÎÑ ãÚØì İí ÇáÏÇáÉ",
        properties: [
            {
                name: "...rest",
                description: "ÌãÚ ÇáãÚØíÇÊ ÇáÒÇÆÏÉ İí ãÕİæİÉ",
                values: [
                    { value: "function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }", description: "ÌãÚ ßá ÇáÃÑŞÇã" },
                    { value: "function logAll(...args) { args.forEach(arg => console.log(arg)); }", description: "ØÈÇÚÉ ßá ÇáãÚØíÇÊ" },
                    { value: "function multiply(first, ...rest) { return rest.reduce((a, b) => a * b, first); }", description: "ÇáÖÑÈ ÈÚÏ ÇáÃæá" },
                    { value: "function format(separator, ...strings) { return strings.join(separator); }", description: "ÏãÌ äÕæÕ" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. Spread Operator - ÚÇãá ÇáäÔÑ
    // ============================================================
    {
        tag: "spread-operator",
        description: "íİßøß ÚäÇÕÑ ãÕİæİÉ Ãæ ßÇÆä áíõÏÑÌåÇ ãäİÑÏÉ İí ãßÇä ÂÎÑ (ãÕİæİÉ¡ ßÇÆä¡ Ãæ ÇÓÊÏÚÇÁ ÏÇáÉ)",
        properties: [
            {
                name: "...spread",
                description: "äÔÑ ÚäÇÕÑ ÇáãÕİæİÉ Ãæ ÇáßÇÆä",
                values: [
                    { value: "const combined = [...arr1, ...arr2];", description: "ÏãÌ ãÕİæİÊíä" },
                    { value: "const copy = [...original];", description: "äÓÎ ãÕİæİÉ" },
                    { value: "const merged = { ...obj1, ...obj2 };", description: "ÏãÌ ßÇÆäíä" },
                    { value: "const newObj = { ...obj, extra: 'value' };", description: "ÅÖÇİÉ ÎÇÕíÉ áßÇÆä" },
                    { value: "Math.max(...numbers);", description: "ÊãÑíÑ ÚäÇÕÑ ÇáãÕİæİÉ ßãÚØíÇÊ" },
                    { value: "const chars = [...'hello'];", description: "['h', 'e', 'l', 'l', 'o']" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. IIFE - Immediately Invoked Function Expression
    // ============================================================
    {
        tag: "iife",
        description: "ÏÇáÉ ÊõäİóøĞ İæÑÇğ ÈÚÏ ÊÚÑíİåÇ. ÊÓÊÎÏã áÅäÔÇÁ äØÇŞ ãÍáí ãäİÕá æÊÌäÈ ÇáÊáæË ÇáÚÇã (ÎÕæÕÇğ İí ÇáßæÏ ÇáŞÏíã)",
        properties: [
            {
                name: "IIFE",
                description: "ÏÇáÉ ãäİĞÉ İæÑÇğ",
                values: [
                    { value: "(function() { body })();", description: "ÇáÕíÛÉ ÇáÃÓÇÓíÉ" },
                    { value: "(function() { console.log('ãÑÍÈÇğ'); })();", description: "ØÈÇÚÉ İæÑíÉ" },
                    { value: "(function(name) { console.log('ãÑÍÈÇğ ' + name); })('ÃÍãÏ');", description: "ãÚ ãÚØíÇÊ" },
                    { value: "const result = (function(a, b) { return a + b; })(3, 5);", description: "ÊÎÒíä ÇáäÊíÌÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. Closure - ÇáÅÛáÇŞ
    // ============================================================
    {
        tag: "closure",
        description: "ÏÇáÉ ÏÇÎáíÉ ÊÍÊİÙ ÈÍŞ ÇáæÕæá áãÊÛíÑÇÊ ÇáÏÇáÉ ÇáÎÇÑÌíÉ ÍÊì ÈÚÏ ÇäÊåÇÁ ÊäİíĞ Êáß ÇáÏÇáÉ. ÊÓãÍ ÈÅäÔÇÁ ÏæÇá ÎÇÕÉ (private)",
        properties: [
            {
                name: "closure",
                description: "ÏÇáÉ ãÚ ãÊÛíÑÇÊ ãÍİæÙÉ",
                values: [
                    { value: "function counter() { let count = 0; return function() { return ++count; }; } const c = counter(); c(); // 1", description: "ÚÏÇÏ íÍÊİÙ ÈÇáŞíãÉ" },
                    { value: "function createGreeting(greeting) { return function(name) { return greeting + ' ' + name; }; } const greet = createGreeting('ãÑÍÈÇğ'); greet('ÃÍãÏ');", description: "ÏÇáÉ ÊæáíÏ ÏæÇá" },
                    { value: "function makeCounter(initial = 0) { let count = initial; return { increment: () => ++count, decrement: () => --count, get: () => count }; }", description: "ßÇÆä ãÚ ÏæÇá ÎÇÕÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. this - ÇáÓíÇŞ
    // ============================================================
    {
        tag: "this",
        description: "íÔíÑ Åáì ÇáßÇÆä ÇáĞí íõÓÊÏÚì ãäå ÇáßæÏ ÇáÍÇáí¡ æÊÎÊáİ ŞíãÊå ÍÓÈ ØÑíŞÉ ÇáÇÓÊÏÚÇÁ (ØÑíŞÉ ÇáßÇÆä¡ ÏÇáÉ ÚÇÏíÉ¡ ÏÇáÉ ÓåãíÉ¡ new)",
        properties: [
            {
                name: "this",
                description: "ÇáÓíÇŞ ÇáÍÇáí",
                values: [
                    { value: "this.name = 'ÃÍãÏ';", description: "İí ÇáäØÇŞ ÇáÚÇã (window/global)" },
                    { value: "const obj = { name: 'ÃÍãÏ', greet() { console.log(this.name); } }; obj.greet(); // ÃÍãÏ", description: "this íÔíÑ Åáì obj" },
                    { value: "function Person(name) { this.name = name; } const p = new Person('ÃÍãÏ');", description: "this İí constructor íÔíÑ Åáì ÇáßÇÆä ÇáÌÏíÏ" },
                    { value: "button.addEventListener('click', function() { console.log(this); });", description: "this íÔíÑ Åáì ÇáÚäÕÑ" },
                    { value: "button.addEventListener('click', () => { console.log(this); });", description: "this íÔíÑ Åáì ÇáäØÇŞ ÇáÎÇÑÌí" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. Function.bind, call, apply
    // ============================================================
    {
        tag: "bind-call-apply",
        description: "ÏæÇá ááÊÍßã İí ŞíãÉ this ÚäÏ ÇÓÊÏÚÇÁ ÇáÏæÇá. bind ÊõäÔÆ äÓÎÉ ÌÏíÏÉ ãä ÇáÏÇáÉ ãÚ this ãÑÈæØ¡ call æ apply ÊÓÊÏÚí ÇáÏÇáÉ İæÑÇğ ãÚ this ãÍÏÏ",
        properties: [
            {
                name: ".bind()",
                description: "ÑÈØ åĞÇ (this) ÈÔßá ÏÇÆã",
                values: [
                    { value: "const bound = fn.bind(context);", description: "ÑÈØ this" },
                    { value: "const greet = function() { console.log(this.name); }; const obj = { name: 'ÃÍãÏ' }; const boundGreet = greet.bind(obj); boundGreet(); // ÃÍãÏ", description: "ÑÈØ this ÈßÇÆä" },
                    { value: "const boundWithArgs = fn.bind(context, arg1, arg2);", description: "ÑÈØ ãÚ ãÚØíÇÊ" }
                ]
            },
            {
                name: ".call()",
                description: "ÇÓÊÏÚÇÁ ÏÇáÉ ãÚ this ãÍÏÏ æãÚØíÇÊ ãäİÕáÉ",
                values: [
                    { value: "fn.call(context, arg1, arg2);", description: "ÇáÕíÛÉ ÇáÃÓÇÓíÉ" },
                    { value: "greet.call(obj, 'ãÑÍÈÇğ');", description: "ÇÓÊÏÚÇÁ ãÚ this ãÍÏÏ" },
                    { value: "Array.prototype.slice.call(arguments);", description: "ÊÍæíá arguments Åáì ãÕİæİÉ" }
                ]
            },
            {
                name: ".apply()",
                description: "ÇÓÊÏÚÇÁ ÏÇáÉ ãÚ this ãÍÏÏ æãÚØíÇÊ ßãÕİæİÉ",
                values: [
                    { value: "fn.apply(context, [arg1, arg2]);", description: "ÇáÕíÛÉ ÇáÃÓÇÓíÉ" },
                    { value: "Math.max.apply(null, numbers);", description: "ÅíÌÇÏ ÃßÈÑ ÚÏÏ" },
                    { value: "greet.apply(obj, ['ãÑÍÈÇğ']);", description: "ÇÓÊÏÚÇÁ ãÚ this ãÍÏÏ" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. ÃãËáÉ ÚãáíÉ
    // ============================================================
    {
        tag: "examples",
        description: "ÃãËáÉ ÚãáíÉ áÇÓÊÎÏÇã ÇáÏæÇá",
        properties: [
            {
                name: "ãËÇá 1 - ÏæÇá ãÓÇÚÏÉ",
                description: "ãÌãæÚÉ ÏæÇá ãÓÇÚÏÉ ÔÇÆÚÉ",
                values: [
                    { value: "const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);", description: "ÊÓáÓá ÇáÏæÇá" },
                    { value: "const debounce = (fn, delay = 300) => { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; };", description: "ÊÃÎíÑ ÇáÊäİíĞ" },
                    { value: "const throttle = (fn, limit = 300) => { let inThrottle = false; return (...args) => { if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; };", description: "ÊÍÏíÏ ãÚÏá ÇáÊäİíĞ" }
                ]
            },
            {
                name: "ãËÇá 2 - ÏæÇá ÇáãÕäÚ",
                description: "ÏæÇá ÊäÔÆ ÏæÇáÇğ ÃÎÑì",
                values: [
                    { value: "function createValidator(rule) { return function(value) { return rule(value); }; } const isEmail = createValidator(v => v.includes('@')); isEmail('test@test.com'); // true", description: "ãÕäÚ ÏæÇá ÇáÊÍŞŞ" }
                ]
            },
            {
                name: "ãËÇá 3 - ÏæÇá ãÚ ĞÇßÑÉ (Memoization)",
                description: "ÊÎÒíä äÊÇÆÌ ÇáÏæÇá áÊÓÑíÚ ÇáÍÓÇÈÇÊ ÇáãÊßÑÑÉ",
                values: [
                    { value: "function memoize(fn) { const cache = new Map(); return function(...args) { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const result = fn(...args); cache.set(key, result); return result; }; } const factorial = memoize(function f(n) { return n <= 1 ? 1 : n * f(n - 1); });", description: "ÏÇáÉ ãÚ ÊÎÒíä ÇáäÊÇÆÌ" }
                ]
            }
        ]
    },

    // ============================================================
    // 12. äÕÇÆÍ æÅÑÔÇÏÇÊ
    // ============================================================
    {
        tag: "tips",
        description: "äÕÇÆÍ æÅÑÔÇÏÇÊ ãåãÉ áÇÓÊÎÏÇã ÇáÏæÇá",
        properties: [
            {
                name: "äÕÇÆÍ ÚÇãÉ",
                description: "äÕÇÆÍ ÃÓÇÓíÉ ááÊÚÇãá ãÚ ÇáÏæÇá",
                values: [
                    { value: "ÇÓÊÎÏã arrow functions ááÏæÇá ÇáÈÓíØÉ", description: "ÕíÛÉ ãÎÊÕÑÉ ææÇÖÍÉ" },
                    { value: "ÇÓÊÎÏã function ááÏæÇá ÇáÊí ÊÍÊÇÌ this", description: "ÎÇÕÉ İí ÇáÃÕäÇİ æÇáßÇÆäÇÊ" },
                    { value: "ÇÓÊÎÏã default parameters", description: "ÈÏáÇğ ãä ÇáÊÍŞŞ ÇáíÏæí" },
                    { value: "ÇÓÊÎÏã rest parameters", description: "áÌãÚ ÇáãÚØíÇÊ ÇáÒÇÆÏÉ" },
                    { value: "ÇÓÊÎÏã spread operator", description: "áäÓÎ æÏãÌ ÇáãÕİæİÇÊ æÇáßÇÆäÇÊ" },
                    { value: "ÇÓÊÎÏã closures ááÈíÇäÇÊ ÇáÎÇÕÉ", description: "áÅäÔÇÁ ãÊÛíÑÇÊ ÎÇÕÉ" },
                    { value: "ÇÓÊÎÏã arrow functions ááÜ callbacks", description: "ÊÍÇİÙ Úáì this" }
                ]
            },
            {
                name: "äÕÇÆÍ ÇáÃÏÇÁ",
                description: "äÕÇÆÍ áÊÍÓíä ÃÏÇÁ ÇáÏæÇá",
                values: [
                    { value: "ÊÌäÈ ÅäÔÇÁ ÏæÇá ÏÇÎá ÇáÍáŞÇÊ", description: "íÓÊåáß ĞÇßÑÉ" },
                    { value: "ÇÓÊÎÏã memoization ááÏæÇá ÇáËŞíáÉ", description: "íÎÒä ÇáäÊÇÆÌ" },
                    { value: "ÇÓÊÎÏã arrow functions ááÏæÇá ÇáÈÓíØÉ", description: "ÃŞá ÍÌãÇğ" }
                ]
            },
            {
                name: "ÇáÃÎØÇÁ ÇáÔÇÆÚÉ",
                description: "ÃÎØÇÁ ÔÇÆÚÉ ÚäÏ ÇÓÊÎÏÇã ÇáÏæÇá",
                values: [
                    { value: "äÓíÇä return İí ÇáÏæÇá", description: "ÊõÑÌÚ undefined" },
                    { value: "ÇÓÊÎÏÇã arrow function ßÜ constructor", description: "áÇ íãßä (TypeError)" },
                    { value: "ÇáÎáØ Èíä this İí ÇáÏæÇá ÇáÚÇÏíÉ æÇáÓåãíÉ", description: "this ãÎÊáİ" },
                    { value: "äÓíÇä ÇáÃŞæÇÓ ÚäÏ ÇÓÊÏÚÇÁ ÇáÏÇáÉ", description: "fn æáíÓ fn()" }
                ]
            }
        ]
    }
];

// ÊÕÏíÑ ÇáÈíÇäÇÊ
if (typeof window !== 'undefined') {
    window.jsFunctionsData = jsFunctionsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsFunctionsData;
}