// ============================================================
// js-classes.js
// «·√’‰«› (Classes) ›Ì JavaScript
//  ‘—Õ Ã„Ì⁄ „›«ÂÌ„ «·√’‰«›: «· ⁄—Ì›° «·Ê—«À…° «·Œ’«∆’ «·À«» …° «·ÕﬁÊ· «·Œ«’…
// ============================================================

const jsClassesData = [
    // ============================================================
    // 1. class -  ⁄—Ì› «·’‰›
    // ============================================================
    {
        tag: "class",
        description: "Ì⁄—¯› ﬁ«·»« ·≈‰‘«¡ ﬂ«∆‰«   ‘ —ﬂ ›Ì Œ’«∆’ ÊœÊ«·. «·√’‰«› ›Ì JavaScript ÂÌ ”ﬂ— ﬂ” (Syntactic Sugar) ›Êﬁ «·‰„«–Ã «·√Ê·Ì… (Prototypes)",
        properties: [
            {
                name: "class",
                description: " ⁄—Ì› ’‰›",
                values: [
                    { value: "class ClassName { body }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "class Person { constructor(name) { this.name = name; } }", description: "’‰› Person" },
                    { value: "class Animal { constructor(type) { this.type = type; } }", description: "’‰› Animal" },
                    { value: "class Calculator { add(a, b) { return a + b; } }", description: "’‰› „⁄ œÊ«·" }
                ]
            },
            {
                name: "class - constructor",
                description: "œ«·… Œ«’…  ı‰›Û¯–  ·ﬁ«∆Ì« ⁄‰œ ≈‰‘«¡ ﬂ«∆‰ ÃœÌœ „‰ «·’‰›° Ê ı” Œœ„ · ÂÌ∆… Œ’«∆’Â",
                values: [
                    { value: "class Person { constructor(name, age) { this.name = name; this.age = age; } }", description: "constructor „⁄ „⁄ÿÌ« " },
                    { value: "class Person { constructor(name) { this.name = name; this.createdAt = new Date(); } }", description: "constructor „⁄ ﬁÌ„ «› —«÷Ì…" },
                    { value: "class Person { constructor(name = '„ÃÂÊ·') { this.name = name; } }", description: "constructor „⁄ ﬁÌ„… «› —«÷Ì…" }
                ]
            },
            {
                name: "class - methods",
                description: "œÊ«· œ«Œ· «·’‰› Ì„ﬂ‰ «” œ⁄«ƒÂ« ⁄·Ï «·ﬂ«∆‰« ",
                values: [
                    { value: "class Person { constructor(name) { this.name = name; } greet() { return '„—Õ»« ' + this.name; } }", description: "œ«·… greet" },
                    { value: "class Calculator { add(a, b) { return a + b; } subtract(a, b) { return a - b; } }", description: "⁄œ… œÊ«·" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. new - ≈‰‘«¡ ﬂ«∆‰
    // ============================================================
    {
        tag: "new",
        description: "Ìı‰‘∆ ﬂ«∆‰« ÃœÌœ« „‰ «·’‰›° ÊÌ” œ⁄Ì «·‹ constructor · ÂÌ∆ Â",
        properties: [
            {
                name: "new",
                description: "≈‰‘«¡ „ÀÌ· „‰ «·’‰›",
                values: [
                    { value: "const obj = new ClassName(args);", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "const person = new Person('√Õ„œ', 25);", description: "≈‰‘«¡ ‘Œ’" },
                    { value: "const calc = new Calculator();", description: "≈‰‘«¡ ¬·… Õ«”»…" },
                    { value: "const user = new User({ name: '”«—…' });", description: "„⁄ ﬂ«∆‰ ﬂ„⁄ÿÏ" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. extends - «·Ê—«À…
    // ============================================================
    {
        tag: "extends",
        description: "ÌÃ⁄· ’‰›« Ì—À Œ’«∆’ ÊœÊ«· ’‰› ¬Œ— («·Ê—«À…). «·’‰› «·«»‰ ÌÕ’· ⁄·Ï ﬂ· „« ›Ì «·’‰› «·√» ÊÌ„ﬂ‰Â ≈÷«›… √Ê  Ã«Ê“ (override)",
        properties: [
            {
                name: "extends",
                description: "Ê—«À… ’‰›",
                values: [
                    { value: "class Child extends Parent { body }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "class Student extends Person { constructor(name, grade) { super(name); this.grade = grade; } }", description: "ÿ«·» Ì—À „‰ ‘Œ’" },
                    { value: "class Animal { speak() { console.log('’Ê '); } } class Dog extends Animal { speak() { console.log('‰»«Õ'); } }", description: " Ã«Ê“ œ«·…" },
                    { value: "class Square extends Shape { constructor(size) { super('„—»⁄'); this.size = size; } }", description: "Ê—«À… „⁄ super" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. super - «·√»
    // ============================================================
    {
        tag: "super",
        description: "Ì” œ⁄Ì »«‰Ì (constructor) «·’‰› «·√» √Ê œÊ«·Â „‰ œ«Œ· ’‰› Ê«—À. ÌÃ» «” œ⁄«ƒÂ ﬁ»· «” Œœ«„ this ›Ì «·‹ constructor",
        properties: [
            {
                name: "super",
                description: "«·Ê’Ê· ≈·Ï «·√»",
                values: [
                    { value: "super(args);", description: "«” œ⁄«¡ constructor «·√»" },
                    { value: "super.method(args);", description: "«” œ⁄«¡ œ«·… «·√»" },
                    { value: "class Student extends Person { constructor(name, grade) { super(name); this.grade = grade; } }", description: "«” œ⁄«¡ constructor «·√»" },
                    { value: "class Dog extends Animal { speak() { super.speak(); console.log('‰»«Õ'); } }", description: "«” œ⁄«¡ œ«·… «·√»" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. static - Œ’«∆’ ÊœÊ«· À«» …
    // ============================================================
    {
        tag: "static",
        description: "Ì⁄—¯› Œ«’Ì… √Ê œ«·…  ‰ „Ì ··’‰› ‰›”Â Ê·Ì” ·ﬂ«∆‰ „⁄Ì¯‰ „ı‰‘√ „‰Â.  ı” œ⁄Ï »«”„ «·’‰› Ê·Ì” »«”„ «·ﬂ«∆‰",
        properties: [
            {
                name: "static",
                description: "Œ’«∆’ ÊœÊ«· À«» …",
                values: [
                    { value: "static property = value;", description: "Œ«’Ì… À«» …" },
                    { value: "static method() { body }", description: "œ«·… À«» …" },
                    { value: "class MathUtils { static PI = 3.14; static add(a, b) { return a + b; } }", description: "’‰› „⁄ Œ’«∆’ À«» …" },
                    { value: "MathUtils.PI; // 3.14", description: "«·Ê’Ê· ≈·Ï Œ«’Ì… À«» …" },
                    { value: "MathUtils.add(2, 3); // 5", description: "«” œ⁄«¡ œ«·… À«» …" },
                    { value: "class Person { static create(name) { return new Person(name); } }", description: "œ«·… „’‰⁄ À«» …" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. get Ê set - «·Œ’«∆’ «·„Õ”Ê»…
    // ============================================================
    {
        tag: "get-set",
        description: " ⁄—¯› Œ’«∆’ „Õ”Ê»…  ıﬁ—√ Ê ıﬂ » ﬂ√‰Â« „ €Ì—«  ⁄«œÌ…° ·ﬂ‰Â«  ‰›¯– œÊ«·« Œ·› «·ﬂÊ«·Ì”",
        properties: [
            {
                name: "get",
                description: "œ«·… ﬁ—«¡…  ı” œ⁄Ï ⁄‰œ ﬁ—«¡… «·Œ«’Ì…",
                values: [
                    { value: "get property() { return value; }", description: "œ«·… get" },
                    { value: "class Person { constructor(first, last) { this.first = first; this.last = last; } get fullName() { return this.first + ' ' + this.last; } }", description: "«·«”„ «·ﬂ«„·" },
                    { value: "const p = new Person('√Õ„œ', '„Õ„œ'); p.fullName; // √Õ„œ „Õ„œ", description: "«” Œœ«„ get" }
                ]
            },
            {
                name: "set",
                description: "œ«·… ﬂ «»…  ı” œ⁄Ï ⁄‰œ  ⁄ÌÌ‰ ﬁÌ„… ··Œ«’Ì…",
                values: [
                    { value: "set property(value) { body }", description: "œ«·… set" },
                    { value: "class Person { constructor() { this._name = ''; } get name() { return this._name; } set name(value) { this._name = value.trim(); } }", description: "set „⁄  ‰ŸÌ› «·ﬁÌ„…" },
                    { value: "const p = new Person(); p.name = ' √Õ„œ '; p.name; // √Õ„œ", description: "«” Œœ«„ set" },
                    { value: "class Circle { constructor(r) { this._radius = r; } get area() { return Math.PI * this._radius ** 2; } set radius(value) { this._radius = value; } }", description: "œ«∆—… „⁄ „”«Õ… „Õ”Ê»…" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. Private Fields - «·ÕﬁÊ· «·Œ«’… (#)
    // ============================================================
    {
        tag: "private-fields",
        description: "Ì⁄—¯› Õﬁ·« Œ«’« œ«Œ· «·’‰› ·« Ì„ﬂ‰ «·Ê’Ê· ≈·ÌÂ ≈·« „‰ œ«Œ· «·’‰› ‰›”Â. Ìı‘«— ≈·ÌÂ »‹ # ﬁ»· «·«”„",
        properties: [
            {
                name: "# (Private Fields)",
                description: "Œ’«∆’ Œ«’… »«·’‰›",
                values: [
                    { value: "#field = value;", description: "Õﬁ· Œ«’" },
                    { value: "#method() { body }", description: "œ«·… Œ«’…" },
                    { value: "class Counter { #count = 0; increment() { this.#count++; } get value() { return this.#count; } }", description: "⁄œ«œ „⁄ Õﬁ· Œ«’" },
                    { value: "const c = new Counter(); c.increment(); c.value; // 1", description: "«” Œœ«„ «·Õﬁ· «·Œ«’" },
                    { value: "class Person { #name; constructor(name) { this.#name = name; } getName() { return this.#name; } }", description: "«”„ Œ«’" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. instanceof - «· Õﬁﬁ „‰ «·‰Ê⁄
    // ============================================================
    {
        tag: "instanceof",
        description: "Ì Õﬁﬁ ≈‰ ﬂ«‰ ﬂ«∆‰ „«  „ ≈‰‘«ƒÂ „‰ ’‰› „⁄Ì¯‰ (√Ê „‰ ’‰› Ì—À „‰Â)",
        properties: [
            {
                name: "instanceof",
                description: "«· Õﬁﬁ „‰ ‰Ê⁄ «·ﬂ«∆‰",
                values: [
                    { value: "object instanceof Class", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "person instanceof Person; // true", description: "«· Õﬁﬁ „‰ «·‘Œ’" },
                    { value: "student instanceof Student; // true", description: "«· Õﬁﬁ „‰ «·ÿ«·»" },
                    { value: "student instanceof Person; // true", description: "«·Ê—«À… √Ì÷«" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ «·√’‰«›",
        properties: [
            {
                name: "„À«· 1 - ‰Ÿ«„ „” Œœ„Ì‰",
                description: "≈œ«—… «·„” Œœ„Ì‰ »√–Ê‰« ",
                values: [
                    { value: "class User { constructor(name) { this.name = name; this.role = 'user'; } canAccess() { return this.role === 'admin' || this.role === 'manager'; } } class Admin extends User { constructor(name) { super(name); this.role = 'admin'; } } class Manager extends User { constructor(name) { super(name); this.role = 'manager'; } }", description: "‰Ÿ«„ „” Œœ„Ì‰" }
                ]
            },
            {
                name: "„À«· 2 - ≈œ«—… „Â„… (Task)",
                description: "‰Ÿ«„ ≈œ«—… „Â«„ „⁄ Õ«·« ",
                values: [
                    { value: "class Task { #status = 'pending'; constructor(title, dueDate) { this.title = title; this.dueDate = dueDate; } complete() { this.#status = 'completed'; } get status() { return this.#status; } }", description: "„Â„… „⁄ Õ«·… Œ«’…" }
                ]
            },
            {
                name: "„À«· 3 - ÊÕœ…  Õﬂ„ API",
                description: "’‰› ·≈œ«—… ÿ·»«  API",
                values: [
                    { value: "class API { static baseURL = 'https://api.example.com'; static async get(endpoint) { const res = await fetch(this.baseURL + endpoint); return res.json(); } static async post(endpoint, data) { const res = await fetch(this.baseURL + endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); return res.json(); } }", description: "’‰› API „⁄ œÊ«· À«» …" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ «·√’‰«›",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ «·√’‰«›",
                values: [
                    { value: "«” Œœ„ class »œ·« „‰ prototypes", description: "√Ê÷ÊÕ Ê√”Â· ··›Â„" },
                    { value: "«” Œœ„ extends ··Ê—«À…", description: "»œ·« „‰ «· ·«⁄» »«·‰„«–Ã «·√Ê·Ì…" },
                    { value: "«” Œœ„ super ›Ì «·‹ constructor", description: "ﬁ»· «” Œœ«„ this" },
                    { value: "«” Œœ„ # ··ÕﬁÊ· «·Œ«’…", description: "·Õ„«Ì… «·»Ì«‰« " },
                    { value: "«” Œœ„ static ··Œ’«∆’ «·„‘ —ﬂ…", description: "«·»Ì«‰«  «· Ì ·«   €Ì— »Ì‰ «·ﬂ«∆‰« " },
                    { value: "«” Œœ„ get/set ··Œ’«∆’ «·„Õ”Ê»…", description: "·ﬁ—«¡… Êﬂ «»… »Ì«‰«  „Õ”Ê»…" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ «·√’‰«›",
                values: [
                    { value: "‰”Ì«‰ new ⁄‰œ ≈‰‘«¡ ﬂ«∆‰", description: "Ì”»» Œÿ√" },
                    { value: "‰”Ì«‰ super ›Ì «·‹ constructor", description: "Ì”»» Œÿ√" },
                    { value: "«” Œœ«„ this ﬁ»· super", description: "€Ì— „”„ÊÕ" },
                    { value: "«·Œ·ÿ »Ì‰ static Ê instance", description: "static  ı” œ⁄Ï ⁄·Ï «·’‰› Ê·Ì” «·ﬂ«∆‰" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsClassesData = jsClassesData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsClassesData;
}