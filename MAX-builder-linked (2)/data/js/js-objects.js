// ============================================================
// js-objects.js
// œÊ«· «·ﬂ«∆‰«  (Object Methods) ›Ì JavaScript
//  ‘—Õ Ã„Ì⁄ œÊ«· Object «·„œ„Ã… „⁄ √„À·… Ê«” Œœ«„« 
// ============================================================

const jsObjectsData = [
    // ============================================================
    // 1. ≈‰‘«¡ «·ﬂ«∆‰« 
    // ============================================================
    {
        tag: "object-creation",
        description: "ÿ—ﬁ ≈‰‘«¡ «·ﬂ«∆‰«  ›Ì JavaScript",
        properties: [
            {
                name: "Object literal",
                description: "≈‰‘«¡ ﬂ«∆‰ »«” Œœ«„ «·√ﬁÊ«” «·„Ã⁄œ…",
                values: [
                    { value: "{}", description: "ﬂ«∆‰ ›«—€" },
                    { value: "{ name: '√Õ„œ', age: 25 }", description: "ﬂ«∆‰ »Œ’«∆’" },
                    { value: "{ id: 1, 'first-name': '√Õ„œ' }", description: "Œ’«∆’ »√”„«¡ €Ì— ﬁÌ«”Ì…" },
                    { value: "{ method() { return this.name; } }", description: "ﬂ«∆‰ »œ«·…" }
                ]
            },
            {
                name: "new Object()",
                description: "≈‰‘«¡ ﬂ«∆‰ »«” Œœ«„ «·‹ constructor",
                values: [
                    { value: "new Object()", description: "ﬂ«∆‰ ›«—€" },
                    { value: "Object.create(null)", description: "ﬂ«∆‰ »œÊ‰ ‰„Ê–Ã √Ê·Ì" },
                    { value: "Object.create(proto)", description: "ﬂ«∆‰ »‰„Ê–Ã √Ê·Ì „Õœœ" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. œÊ«· «· ÕÊÌ· (Transformation)
    // ============================================================
    {
        tag: "transformation-methods",
        description: "œÊ«· · ÕÊÌ· «·ﬂ«∆‰« ",
        properties: [
            // -------- keys --------
            {
                name: "Object.keys",
                description: "Ìı—Ã⁄ „’›Ê›… »√”„«¡ ﬂ· Œ’«∆’ «·ﬂ«∆‰ («·ﬁ«»·… ·· ⁄œ«œ)",
                values: [
                    { value: "Object.keys({a: 1, b: 2}); // ['a', 'b']", description: "„›« ÌÕ «·ﬂ«∆‰" },
                    { value: "Object.keys(obj);", description: "«” Œ—«Ã «·„›« ÌÕ" },
                    { value: "const keys = Object.keys(user);", description: "„›« ÌÕ «·„” Œœ„" }
                ]
            },
            // -------- values --------
            {
                name: "Object.values",
                description: "Ìı—Ã⁄ „’›Ê›… »ﬂ· ﬁÌ„ Œ’«∆’ «·ﬂ«∆‰",
                values: [
                    { value: "Object.values({a: 1, b: 2}); // [1, 2]", description: "ﬁÌ„ «·ﬂ«∆‰" },
                    { value: "Object.values(obj);", description: "«” Œ—«Ã «·ﬁÌ„" },
                    { value: "const values = Object.values(user);", description: "ﬁÌ„ «·„” Œœ„" }
                ]
            },
            // -------- entries --------
            {
                name: "Object.entries",
                description: "Ìı—Ã⁄ „’›Ê›… „‰ √“Ê«Ã [„› «Õ, ﬁÌ„…] ·ﬂ· Œ«’Ì… ›Ì «·ﬂ«∆‰",
                values: [
                    { value: "Object.entries({a: 1, b: 2}); // [['a', 1], ['b', 2]]", description: "√“Ê«Ã «·ﬂ«∆‰" },
                    { value: "for (const [key, value] of Object.entries(obj)) { console.log(key, value); }", description: "«· ﬂ—«— ⁄·Ï «·√“Ê«Ã" },
                    { value: "const entries = Object.entries(user);", description: "√“Ê«Ã «·„” Œœ„" }
                ]
            },
            // -------- fromEntries --------
            {
                name: "Object.fromEntries",
                description: "Ì»‰Ì ﬂ«∆‰« „‰ „’›Ê›… √“Ê«Ã [„› «Õ, ﬁÌ„…] (⁄ﬂ” entries)",
                values: [
                    { value: "Object.fromEntries([['a', 1], ['b', 2]]); // {a: 1, b: 2}", description: "»‰«¡ ﬂ«∆‰ „‰ √“Ê«Ã" },
                    { value: "const obj = Object.fromEntries(entries);", description: " ÕÊÌ· «·√“Ê«Ã ≈·Ï ﬂ«∆‰" },
                    { value: "const user = Object.fromEntries([['name', '√Õ„œ'], ['age', 25]]);", description: "»‰«¡ ﬂ«∆‰" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. œÊ«· «·œ„Ã Ê«·‰”Œ
    // ============================================================
    {
        tag: "merge-copy-methods",
        description: "œÊ«· ·œ„Ã Ê‰”Œ «·ﬂ«∆‰« ",
        properties: [
            // -------- assign --------
            {
                name: "Object.assign",
                description: "Ìœ„Ã Œ’«∆’ ﬂ«∆‰ √Ê √ﬂÀ— ›Ì ﬂ«∆‰ Âœ› ÊÌı—Ã⁄Â",
                values: [
                    { value: "Object.assign({}, obj1, obj2);", description: "œ„Ã ﬂ«∆‰Ì‰" },
                    { value: "const merged = Object.assign({}, defaults, overrides);", description: "œ„Ã „⁄  Ã«Ê“" },
                    { value: "Object.assign(target, source1, source2);", description: "œ„Ã ›Ì «·Âœ›" },
                    { value: "const copy = Object.assign({}, original);", description: "‰”Œ ”ÿÕÌ…" }
                ]
            },
            // -------- spread operator --------
            {
                name: "Spread operator {...}",
                description: "‰‘— Œ’«∆’ «·ﬂ«∆‰ (»œÌ· ÕœÌÀ ·‹ assign)",
                values: [
                    { value: "const merged = { ...obj1, ...obj2 };", description: "œ„Ã ﬂ«∆‰Ì‰" },
                    { value: "const copy = { ...original };", description: "‰”Œ ”ÿÕÌ…" },
                    { value: "const newObj = { ...obj, extra: 'value' };", description: "≈÷«›… Œ«’Ì…" },
                    { value: "const override = { ...defaults, ...overrides };", description: " Ã«Ê“ «·ﬁÌ„" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. œÊ«· «· Ã„Ìœ Ê«·Õ„«Ì…
    // ============================================================
    {
        tag: "protection-methods",
        description: "œÊ«· ·Õ„«Ì… «·ﬂ«∆‰«  „‰ «· ⁄œÌ·",
        properties: [
            // -------- freeze --------
            {
                name: "Object.freeze",
                description: "ÌÃ„œ «·ﬂ«∆‰: Ì„‰⁄ ≈÷«›… √Ê Õ–› √Ê  ⁄œÌ· «·Œ’«∆’",
                values: [
                    { value: "Object.freeze(obj);", description: " Ã„Ìœ «·ﬂ«∆‰" },
                    { value: "const frozen = Object.freeze({ name: '√Õ„œ' });", description: "ﬂ«∆‰ „Ã„œ" },
                    { value: "Object.isFrozen(obj); // true", description: "«· Õﬁﬁ „‰ «· Ã„Ìœ" }
                ]
            },
            // -------- seal --------
            {
                name: "Object.seal",
                description: "Ì€·ﬁ «·ﬂ«∆‰: Ì„‰⁄ ≈÷«›… √Ê Õ–› «·Œ’«∆’° ·ﬂ‰ Ì”„Õ » ⁄œÌ· «·ﬁÌ„ «·„ÊÃÊœ…",
                values: [
                    { value: "Object.seal(obj);", description: "≈€·«ﬁ «·ﬂ«∆‰" },
                    { value: "const sealed = Object.seal({ name: '√Õ„œ' });", description: "ﬂ«∆‰ „€·ﬁ" },
                    { value: "Object.isSealed(obj); // true", description: "«· Õﬁﬁ „‰ «·≈€·«ﬁ" }
                ]
            },
            // -------- preventExtensions --------
            {
                name: "Object.preventExtensions",
                description: "Ì„‰⁄ ≈÷«›… Œ’«∆’ ÃœÌœ… ··ﬂ«∆‰° ·ﬂ‰ Ì”„Õ » ⁄œÌ· ÊÕ–› «·„ÊÃÊœ…",
                values: [
                    { value: "Object.preventExtensions(obj);", description: "„‰⁄ «·≈÷«›…" },
                    { value: "Object.isExtensible(obj); // false", description: "«· Õﬁﬁ" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. œÊ«· «· Õﬁﬁ (Validation)
    // ============================================================
    {
        tag: "validation-methods",
        description: "œÊ«· ·· Õﬁﬁ „‰ «·ﬂ«∆‰« ",
        properties: [
            // -------- hasOwn --------
            {
                name: "Object.hasOwn",
                description: "Ì Õﬁﬁ ≈‰ ﬂ«‰ «·ﬂ«∆‰ Ì„·ﬂ Œ«’Ì… „⁄Ì‰… „»«‘—… (Ê·Ì” „Ê—ÊÀ…)",
                values: [
                    { value: "Object.hasOwn(obj, 'name');", description: "Â· Ì„·ﬂ Œ«’Ì… nameø" },
                    { value: "Object.hasOwn(user, 'id');", description: "Â· «·„” Œœ„ Ì„·ﬂ idø" },
                    { value: "if (Object.hasOwn(obj, 'property')) { ... }", description: "«” Œœ«„ ›Ì «·‘—ÿ" }
                ]
            },
            // -------- hasOwnProperty (ﬁœÌ„) --------
            {
                name: "hasOwnProperty (ﬁœÌ„)",
                description: "«·ÿ—Ìﬁ… «·ﬁœÌ„… ·· Õﬁﬁ „‰ «·„·ﬂÌ… («” Œœ„ hasOwn »œ·« „‰Â«)",
                values: [
                    { value: "obj.hasOwnProperty('name');", description: "ﬁœÌ„" }
                ]
            },
            // -------- is --------
            {
                name: "Object.is",
                description: "Ìﬁ«—‰ ﬁÌ„ Ì‰ »œﬁ… √⁄·Ï „‰ === ( ı›—¯ﬁ »Ì‰ NaN ÊNaN Ê+0 Ê-0)",
                values: [
                    { value: "Object.is(NaN, NaN); // true", description: "NaN „”«ÊÌ… ·‰›”Â«" },
                    { value: "Object.is(+0, -0); // false", description: "+0 Ê-0 „Œ ·›«‰" },
                    { value: "Object.is(5, 5); // true", description: "„ﬁ«—‰… ⁄«œÌ…" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. œÊ«· «· ⁄—Ì› (Definition)
    // ============================================================
    {
        tag: "definition-methods",
        description: "œÊ«· · ⁄—Ì› «·Œ’«∆’ »œﬁ…",
        properties: [
            // -------- defineProperty --------
            {
                name: "Object.defineProperty",
                description: "Ì⁄—¯› Œ«’Ì… ÃœÌœ… √Ê Ìı⁄œ¯· Œ«’Ì… „ÊÃÊœ… „⁄  Õﬂ„ ﬂ«„· ›Ì ≈⁄œ«œ« Â«",
                values: [
                    { value: "Object.defineProperty(obj, 'name', { value: '√Õ„œ', writable: true, enumerable: true, configurable: true });", description: " ⁄—Ì› Œ«’Ì…" },
                    { value: "Object.defineProperty(obj, 'age', { get() { return this._age; }, set(value) { this._age = value; } });", description: "Œ«’Ì… „Õ”Ê»…" }
                ]
            },
            // -------- defineProperties --------
            {
                name: "Object.defineProperties",
                description: "Ì⁄—¯› ⁄œ… Œ’«∆’ œ›⁄… Ê«Õœ…",
                values: [
                    { value: "Object.defineProperties(obj, { name: { value: '√Õ„œ' }, age: { value: 25 } });", description: " ⁄—Ì› ⁄œ… Œ’«∆’" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. œÊ«· «·‰„Ê–Ã «·√Ê·Ì (Prototype)
    // ============================================================
    {
        tag: "prototype-methods",
        description: "œÊ«· ·· ⁄«„· „⁄ «·‰„«–Ã «·√Ê·Ì…",
        properties: [
            // -------- getPrototypeOf --------
            {
                name: "Object.getPrototypeOf",
                description: "Ìı—Ã⁄ «·‰„Ê–Ã «·√Ê·Ì (prototype) ··ﬂ«∆‰",
                values: [
                    { value: "Object.getPrototypeOf(obj);", description: "«·Õ’Ê· ⁄·Ï «·‰„Ê–Ã «·√Ê·Ì" }
                ]
            },
            // -------- setPrototypeOf --------
            {
                name: "Object.setPrototypeOf",
                description: "Ìı⁄Ì¯‰ «·‰„Ê–Ã «·√Ê·Ì ··ﬂ«∆‰ («” Œœ„ »Õ–—° ÌƒÀ— ⁄·Ï «·√œ«¡)",
                values: [
                    { value: "Object.setPrototypeOf(obj, proto);", description: " ⁄ÌÌ‰ «·‰„Ê–Ã «·√Ê·Ì" }
                ]
            },
            // -------- create --------
            {
                name: "Object.create",
                description: "Ìı‰‘∆ ﬂ«∆‰« ÃœÌœ« »‰„Ê–Ã √Ê·Ì „Õœœ",
                values: [
                    { value: "Object.create(proto);", description: "ﬂ«∆‰ »‰„Ê–Ã √Ê·Ì" },
                    { value: "Object.create(null);", description: "ﬂ«∆‰ »œÊ‰ ‰„Ê–Ã √Ê·Ì" },
                    { value: "Object.create(proto, { name: { value: '√Õ„œ' } });", description: "„⁄ Œ’«∆’" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. œÊ«· «·«” Œ—«Ã (Extraction)
    // ============================================================
    {
        tag: "extraction-methods",
        description: "œÊ«· ·«” Œ—«Ã „⁄·Ê„«  ⁄‰ «·ﬂ«∆‰",
        properties: [
            // -------- getOwnPropertyNames --------
            {
                name: "Object.getOwnPropertyNames",
                description: "Ìı—Ã⁄ √”„«¡ ﬂ· Œ’«∆’ «·ﬂ«∆‰ «·Œ«’… (»„« ›ÌÂ« €Ì— «·ﬁ«»·… ·· ⁄œ«œ)",
                values: [
                    { value: "Object.getOwnPropertyNames(obj);", description: "Ã„Ì⁄ √”„«¡ «·Œ’«∆’" }
                ]
            },
            // -------- getOwnPropertySymbols --------
            {
                name: "Object.getOwnPropertySymbols",
                description: "Ìı—Ã⁄ —„Ê“ (Symbols) «·Œ’«∆’ «·Œ«’… »«·ﬂ«∆‰",
                values: [
                    { value: "Object.getOwnPropertySymbols(obj);", description: "—„Ê“ «·Œ’«∆’" }
                ]
            },
            // -------- getOwnPropertyDescriptor --------
            {
                name: "Object.getOwnPropertyDescriptor",
                description: "Ìı—Ã⁄ Ê’› Œ«’Ì… „⁄Ì‰… ›Ì «·ﬂ«∆‰",
                values: [
                    { value: "Object.getOwnPropertyDescriptor(obj, 'name');", description: "Ê’› «·Œ«’Ì…" }
                ]
            },
            // -------- getOwnPropertyDescriptors --------
            {
                name: "Object.getOwnPropertyDescriptors",
                description: "Ìı—Ã⁄ Ê’› ﬂ· Œ’«∆’ «·ﬂ«∆‰",
                values: [
                    { value: "Object.getOwnPropertyDescriptors(obj);", description: "Ê’› ﬂ· «·Œ’«∆’" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. œÊ«· «· Ã„Ì⁄ (Grouping)
    // ============================================================
    {
        tag: "grouping-methods",
        description: "œÊ«· · Ã„Ì⁄ «·»Ì«‰« ",
        properties: [
            // -------- groupBy --------
            {
                name: "Object.groupBy",
                description: "ÌıÃ„¯⁄ ⁄‰«’— „’›Ê›… ›Ì ﬂ«∆‰ Õ”» „› «Õ  ıÕœ¯œÂ œ«·… (ES2024)",
                values: [
                    { value: "Object.groupBy(items, item => item.category);", description: " Ã„Ì⁄ Õ”» «· ’‰Ì›" },
                    { value: "const grouped = Object.groupBy(users, user => user.role);", description: " Ã„Ì⁄ «·„” Œœ„Ì‰ Õ”» «·œÊ—" }
                ]
            },
            {
                name: "Map.groupBy",
                description: "„À· Object.groupBy ·ﬂ‰ Ìı—Ã⁄ Map »œ·« „‰ ﬂ«∆‰",
                values: [
                    { value: "Map.groupBy(items, item => item.category);", description: " Ã„Ì⁄ ›Ì Map" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ œÊ«· «·ﬂ«∆‰« ",
        properties: [
            {
                name: "„À«· 1 - œ„Ã «·≈⁄œ«œ« ",
                description: "œ„Ã ≈⁄œ«œ«  „⁄ ﬁÌ„ «› —«÷Ì…",
                values: [
                    { value: "const defaults = { theme: 'light', lang: 'ar', timeout: 5000 }; const userSettings = { theme: 'dark' }; const config = { ...defaults, ...userSettings }; // { theme: 'dark', lang: 'ar', timeout: 5000 }", description: "œ„Ã «·≈⁄œ«œ« " }
                ]
            },
            {
                name: "„À«· 2 - ‰”Œ ﬂ«∆‰ ⁄„Ìﬁ",
                description: "‰”Œ ⁄„Ìﬁ ··ﬂ«∆‰",
                values: [
                    { value: "function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }", description: "‰”Œ ⁄„Ìﬁ" },
                    { value: "function deepClone(obj) { if (obj === null || typeof obj !== 'object') return obj; const copy = Array.isArray(obj) ? [] : {}; for (const key in obj) { copy[key] = deepClone(obj[key]); } return copy; }", description: "‰”Œ ⁄„Ìﬁ ÌœÊÌ" }
                ]
            },
            {
                name: "„À«· 3 -  ÕÊÌ· ﬂ«∆‰ ≈·Ï „’›Ê›… Ê«·⁄ﬂ”",
                description: " ÕÊÌ· »Ì‰ «·ﬂ«∆‰«  Ê«·„’›Ê›« ",
                values: [
                    { value: "const obj = { a: 1, b: 2, c: 3 }; const keys = Object.keys(obj); // ['a', 'b', 'c'] const values = Object.values(obj); // [1, 2, 3] const entries = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]] const newObj = Object.fromEntries(entries); // {a: 1, b: 2, c: 3}", description: " ÕÊÌ·« " }
                ]
            },
            {
                name: "„À«· 4 -  Ã„Ì⁄ «·»Ì«‰« ",
                description: " Ã„Ì⁄ Õ”» «· ’‰Ì›",
                values: [
                    { value: "const users = [ { name: '√Õ„œ', role: 'admin' }, { name: '”«—…', role: 'user' }, { name: '„Õ„œ', role: 'admin' } ]; const grouped = Object.groupBy(users, u => u.role); // { admin: [{name: '√Õ„œ'}, {name: '„Õ„œ'}], user: [{name: '”«—…'}] }", description: " Ã„Ì⁄ «·„” Œœ„Ì‰ Õ”» «·œÊ—" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ œÊ«· «·ﬂ«∆‰« ",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ «·ﬂ«∆‰« ",
                values: [
                    { value: "«” Œœ„ spread operator ··œ„Ã", description: "√”Â· „‰ Object.assign" },
                    { value: "«” Œœ„ Object.hasOwn ·· Õﬁﬁ", description: "»œ·« „‰ hasOwnProperty" },
                    { value: "«” Œœ„ Object.entries ·· ﬂ—«—", description: "„⁄ for...of" },
                    { value: "«” Œœ„ Object.freeze ·· Ã„Ìœ", description: "·„‰⁄ «· ⁄œÌ·" },
                    { value: "«” Œœ„ Object.create(null)", description: "·ﬂ«∆‰ »œÊ‰ ‰„Ê–Ã √Ê·Ì" }
                ]
            },
            {
                name: "‰’«∆Õ «·√œ«¡",
                description: "‰’«∆Õ · Õ”Ì‰ √œ«¡ «·ﬂ«∆‰« ",
                values: [
                    { value: " Ã‰» Object.keys ›Ì «·Õ·ﬁ«  «·ﬂ»Ì—…", description: "ﬁœ ÌﬂÊ‰ »ÿÌ∆«" },
                    { value: "«” Œœ„ «·„’›Ê›«  ··»Ì«‰«  «·ﬂ»Ì—…", description: "√”—⁄ „‰ «·ﬂ«∆‰« " },
                    { value: " Ã‰»  €ÌÌ— «·‰„Ê–Ã «·√Ê·Ì", description: "ÌƒÀ— ⁄·Ï «·√œ«¡" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ «·ﬂ«∆‰« ",
                values: [
                    { value: "«·Œ·ÿ »Ì‰ «·Œ’«∆’ «·„Ê—ÊÀ… Ê«·Œ«’…", description: "«” Œœ„ hasOwn" },
                    { value: " ⁄œÌ· ﬂ«∆‰ „Ã„œ", description: "Ì”»» Œÿ√ ›Ì «·Ê÷⁄ «·’«—„" },
                    { value: "‰”Ì«‰ √‰ Object.keys ·«  ‘„· «·„Ê—ÊÀ…", description: "›ﬁÿ «·Œ’«∆’ «·Œ«’…" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsObjectsData = jsObjectsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsObjectsData;
}