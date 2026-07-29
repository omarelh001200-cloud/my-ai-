// ============================================================
// js-strings.js
// œÊ«· «·‰’Ê’ (String Methods) ›Ì JavaScript
//  ‘—Õ Ã„Ì⁄ œÊ«· String «·„œ„Ã… „⁄ √„À·… Ê«” Œœ«„« 
// ============================================================

const jsStringsData = [
    // ============================================================
    // 1. ≈‰‘«¡ «·‰’Ê’
    // ============================================================
    {
        tag: "string-creation",
        description: "ÿ—ﬁ ≈‰‘«¡ «·‰’Ê’ ›Ì JavaScript",
        properties: [
            {
                name: "String literals",
                description: "≈‰‘«¡ ‰’ »«” Œœ«„ ⁄·«„«  «· ‰’Ì’",
                values: [
                    { value: "'„—Õ»«'", description: "‰’ »«” Œœ«„ ⁄·«„«  „›—œ…" },
                    { value: "\"„—Õ»«\"", description: "‰’ »«” Œœ«„ ⁄·«„«  „“œÊÃ…" },
                    { value: "`„—Õ»«`", description: "‰’ »«” Œœ«„ Template Literal" },
                    { value: "''", description: "‰’ ›«—€" },
                    { value: "''''", description: "‰’ ›«—€" },
                    { value: "\"\"", description: "‰’ ›«—€" }
                ]
            },
            {
                name: "new String()",
                description: "≈‰‘«¡ ﬂ«∆‰ ‰’ (‰«œ— «·«” Œœ«„)",
                values: [
                    { value: "new String('hello')", description: "ﬂ«∆‰ ‰’" },
                    { value: "String('hello')", description: "‰’ (»œÊ‰ new)" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. œÊ«· «· ÕÊÌ· (Case Conversion)
    // ============================================================
    {
        tag: "case-conversion",
        description: "œÊ«· · ÕÊÌ· Õ«·… «·√Õ—›",
        properties: [
            // -------- toUpperCase --------
            {
                name: "toUpperCase",
                description: "ÌÕÊ¯· ﬂ· √Õ—› «·‰’ ≈·Ï √Õ—› ﬂ»Ì—… (≈‰Ã·Ì“Ì…)",
                values: [
                    { value: "'hello'.toUpperCase();", description: "'HELLO'" },
                    { value: "'„—Õ»«'.toUpperCase();", description: "'„—Õ»«' (·« Ì €Ì—)" },
                    { value: "str.toUpperCase();", description: " ÕÊÌ· „ €Ì—" }
                ]
            },
            // -------- toLowerCase --------
            {
                name: "toLowerCase",
                description: "ÌÕÊ¯· ﬂ· √Õ—› «·‰’ ≈·Ï √Õ—› ’€Ì—… (≈‰Ã·Ì“Ì…)",
                values: [
                    { value: "'HELLO'.toLowerCase();", description: "'hello'" },
                    { value: "'„—Õ»«'.toLowerCase();", description: "'„—Õ»«' (·« Ì €Ì—)" },
                    { value: "str.toLowerCase();", description: " ÕÊÌ· „ €Ì—" }
                ]
            },
            // -------- toLocaleUpperCase --------
            {
                name: "toLocaleUpperCase",
                description: "ÌÕÊ¯· ≈·Ï √Õ—› ﬂ»Ì—… Õ”» «··€… «·„Õ·Ì…",
                values: [
                    { value: "'i'.toLocaleUpperCase('tr');", description: "'?' ( —ﬂÌ)" }
                ]
            },
            // -------- toLocaleLowerCase --------
            {
                name: "toLocaleLowerCase",
                description: "ÌÕÊ¯· ≈·Ï √Õ—› ’€Ì—… Õ”» «··€… «·„Õ·Ì…",
                values: [
                    { value: "'?'.toLocaleLowerCase('tr');", description: "'i' ( —ﬂÌ)" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. œÊ«· «·»ÕÀ (Search Methods)
    // ============================================================
    {
        tag: "search-methods",
        description: "œÊ«· ··»ÕÀ ›Ì «·‰’Ê’",
        properties: [
            // -------- includes --------
            {
                name: "includes",
                description: "Ì Õﬁﬁ ≈‰ ﬂ«‰ «·‰’ ÌÕ ÊÌ ⁄·Ï Ã“¡ ‰’Ì „⁄Ì‰",
                values: [
                    { value: "'hello'.includes('ell'); // true", description: "Â· ÌÕ ÊÌ ⁄·Ï 'ell'ø" },
                    { value: "'hello'.includes('world'); // false", description: "Â· ÌÕ ÊÌ ⁄·Ï 'world'ø" },
                    { value: "str.includes('»ÕÀ', 2);", description: "„‰ „Ê÷⁄ „⁄Ì‰" }
                ]
            },
            // -------- indexOf --------
            {
                name: "indexOf",
                description: "Ìı—Ã⁄ „Ê÷⁄ √Ê· ŸÂÊ— ·Ã“¡ ‰’Ì° √Ê -1 ≈‰ ·„ ÌÊÃœ",
                values: [
                    { value: "'hello'.indexOf('l'); // 2", description: "√Ê· ŸÂÊ— ·‹ 'l'" },
                    { value: "'hello'.indexOf('z'); // -1", description: "€Ì— „ÊÃÊœ" },
                    { value: "str.indexOf('»ÕÀ', 5);", description: "„‰ „Ê÷⁄ „⁄Ì‰" }
                ]
            },
            // -------- lastIndexOf --------
            {
                name: "lastIndexOf",
                description: "Ìı—Ã⁄ „Ê÷⁄ ¬Œ— ŸÂÊ— ·Ã“¡ ‰’Ì° √Ê -1 ≈‰ ·„ ÌÊÃœ",
                values: [
                    { value: "'hello'.lastIndexOf('l'); // 3", description: "¬Œ— ŸÂÊ— ·‹ 'l'" },
                    { value: "str.lastIndexOf('»ÕÀ');", description: "¬Œ— ŸÂÊ—" }
                ]
            },
            // -------- startsWith --------
            {
                name: "startsWith",
                description: "Ì Õﬁﬁ ≈‰ ﬂ«‰ «·‰’ Ì»œ√ »Ã“¡ ‰’Ì „⁄Ì‰",
                values: [
                    { value: "'hello'.startsWith('he'); // true", description: "Ì»œ√ »‹ 'he'ø" },
                    { value: "'hello'.startsWith('lo'); // false", description: "Ì»œ√ »‹ 'lo'ø" },
                    { value: "str.startsWith('„', 1);", description: "„‰ „Ê÷⁄ „⁄Ì‰" }
                ]
            },
            // -------- endsWith --------
            {
                name: "endsWith",
                description: "Ì Õﬁﬁ ≈‰ ﬂ«‰ «·‰’ Ì‰ ÂÌ »Ã“¡ ‰’Ì „⁄Ì‰",
                values: [
                    { value: "'hello'.endsWith('lo'); // true", description: "Ì‰ ÂÌ »‹ 'lo'ø" },
                    { value: "'hello'.endsWith('he'); // false", description: "Ì‰ ÂÌ »‹ 'he'ø" },
                    { value: "str.endsWith('‰Â«Ì…', 10);", description: "›Ì ÿÊ· „⁄Ì‰" }
                ]
            },
            // -------- search --------
            {
                name: "search",
                description: "Ì»ÕÀ ⁄‰  ⁄»Ì— ‰„ÿÌ (regex) ÊÌı—Ã⁄ „Ê÷⁄ √Ê·  ÿ«»ﬁ° √Ê -1",
                values: [
                    { value: "'hello123'.search(/\\d+/); // 5", description: "„Ê÷⁄ √Ê· —ﬁ„" },
                    { value: "str.search(/pattern/);", description: "»ÕÀ » ⁄»Ì— ‰„ÿÌ" }
                ]
            },
            // -------- match --------
            {
                name: "match",
                description: "Ì»ÕÀ ⁄‰  ⁄»Ì— ‰„ÿÌ ÊÌı—Ã⁄ «· ÿ«»ﬁ« ",
                values: [
                    { value: "'hello123'.match(/\\d+/); // ['123']", description: "«·√—ﬁ«„" },
                    { value: "'hello123'.match(/[a-z]+/); // ['hello']", description: "«·Õ—Ê›" },
                    { value: "str.match(/pattern/g);", description: "ﬂ· «· ÿ«»ﬁ« " }
                ]
            },
            // -------- matchAll --------
            {
                name: "matchAll",
                description: "Ìı—Ã⁄ „ıﬂ—ˆ¯—« ⁄·Ï Ã„Ì⁄  ÿ«»ﬁ«   ⁄»Ì— ‰„ÿÌ („⁄ g)",
                values: [
                    { value: "const matches = str.matchAll(/\\d+/g);", description: "Ã„Ì⁄ «·√—ﬁ«„" },
                    { value: "for (const m of str.matchAll(/[aeiou]/g)) { console.log(m); }", description: "ﬂ· Õ—Ê› «·⁄·…" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. œÊ«· «· ﬁÿÌ⁄ Ê«·«” Œ—«Ã
    // ============================================================
    {
        tag: "extract-methods",
        description: "œÊ«· ·«” Œ—«Ã √Ã“«¡ „‰ «·‰’",
        properties: [
            // -------- slice --------
            {
                name: "slice",
                description: "Ìı—Ã⁄ Ã“¡« „‰ «·‰’ »Ì‰ „Ê÷⁄Ì‰ (Ìﬁ»· ﬁÌ„« ”«·»…)",
                values: [
                    { value: "'hello'.slice(1, 3); // 'el'", description: "„‰ 1 ≈·Ï 3" },
                    { value: "'hello'.slice(1); // 'ello'", description: "„‰ 1 ≈·Ï «·‰Â«Ì…" },
                    { value: "'hello'.slice(-2); // 'lo'", description: "¬Œ— Õ—›Ì‰" },
                    { value: "'hello'.slice(-3, -1); // 'll'", description: "»Ì‰ -3 Ê -1" }
                ]
            },
            // -------- substring --------
            {
                name: "substring",
                description: "Ìı—Ã⁄ Ã“¡« „‰ «·‰’ »Ì‰ „Ê÷⁄Ì‰ (·« Ìﬁ»· ﬁÌ„« ”«·»…)",
                values: [
                    { value: "'hello'.substring(1, 3); // 'el'", description: "„‰ 1 ≈·Ï 3" },
                    { value: "'hello'.substring(3, 1); // 'el'", description: "«· — Ì» €Ì— „Â„" },
                    { value: "'hello'.substring(1); // 'ello'", description: "„‰ 1 ≈·Ï «·‰Â«Ì…" }
                ]
            },
            // -------- substr (ﬁœÌ„) --------
            {
                name: "substr",
                description: "Ìı—Ã⁄ Ã“¡« „‰ «·‰’ »œ¡« „‰ „Ê÷⁄ »ÿÊ· „Õœœ (ﬁœÌ„° «” Œœ„ slice »œ·« „‰Â)",
                values: [
                    { value: "'hello'.substr(1, 3); // 'ell'", description: "„‰ 1 »ÿÊ· 3" },
                    { value: "'hello'.substr(-3); // 'llo'", description: "¬Œ— 3 √Õ—›" }
                ]
            },
            // -------- charAt --------
            {
                name: "charAt",
                description: "Ìı—Ã⁄ «·Õ—› «·„ÊÃÊœ ›Ì „Ê÷⁄ „Õœœ „‰ «·‰’",
                values: [
                    { value: "'hello'.charAt(1); // 'e'", description: "«·Õ—› ›Ì «·„Ê÷⁄ 1" },
                    { value: "'hello'.charAt(10); // ''", description: "Œ«—Ã «·‰ÿ«ﬁ" },
                    { value: "str.charAt(0);", description: "√Ê· Õ—›" }
                ]
            },
            // -------- at --------
            {
                name: "at",
                description: "Ìı—Ã⁄ «·Õ—› ⁄‰œ «·›Â—” «·„Õœœ (Ìﬁ»· «·”«·»)",
                values: [
                    { value: "'hello'.at(-1); // 'o'", description: "¬Œ— Õ—›" },
                    { value: "'hello'.at(0); // 'h'", description: "√Ê· Õ—›" },
                    { value: "'hello'.at(5); // undefined", description: "Œ«—Ã «·‰ÿ«ﬁ" }
                ]
            },
            // -------- charCodeAt --------
            {
                name: "charCodeAt",
                description: "Ìı—Ã⁄ «·—„“ «·—ﬁ„Ì (Unicode) ··Õ—› ⁄‰œ „Ê÷⁄ „⁄Ì‰",
                values: [
                    { value: "'A'.charCodeAt(0); // 65", description: "—„“ A" },
                    { value: "'a'.charCodeAt(0); // 97", description: "—„“ a" }
                ]
            },
            // -------- codePointAt --------
            {
                name: "codePointAt",
                description: "Ìı—Ã⁄ ‰ﬁÿ… Unicode «·ﬂ«„·… ··Õ—› ( œ⁄„ «·—„Ê“ «·≈÷«›Ì…)",
                values: [
                    { value: "'??'.codePointAt(0); // 128522", description: "—„“ «·‹ Emoji" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. œÊ«· «· ⁄œÌ· Ê«· ‰ŸÌ›
    // ============================================================
    {
        tag: "modify-methods",
        description: "œÊ«· · ⁄œÌ· Ê ‰ŸÌ› «·‰’Ê’",
        properties: [
            // -------- trim --------
            {
                name: "trim",
                description: "Ìı“Ì· «·›—«€«  «·“«∆œ… „‰ »œ«Ì… Ê‰Â«Ì… «·‰’",
                values: [
                    { value: "'  hello  '.trim(); // 'hello'", description: "≈“«·… «·›—«€« " },
                    { value: "str.trim();", description: " ‰ŸÌ› «·‰’" }
                ]
            },
            // -------- trimStart --------
            {
                name: "trimStart",
                description: "Ìı“Ì· «·›—«€«  «·“«∆œ… „‰ »œ«Ì… «·‰’ ›ﬁÿ",
                values: [
                    { value: "'  hello  '.trimStart(); // 'hello  '", description: "≈“«·… «·›—«€«  „‰ «·»œ«Ì…" }
                ]
            },
            // -------- trimEnd --------
            {
                name: "trimEnd",
                description: "Ìı“Ì· «·›—«€«  «·“«∆œ… „‰ ‰Â«Ì… «·‰’ ›ﬁÿ",
                values: [
                    { value: "'  hello  '.trimEnd(); // '  hello'", description: "≈“«·… «·›—«€«  „‰ «·‰Â«Ì…" }
                ]
            },
            // -------- replace --------
            {
                name: "replace",
                description: "Ì” »œ· √Ê·  ÿ«»ﬁ ·Ã“¡ „‰ «·‰’ »Ã“¡ ¬Œ—",
                values: [
                    { value: "'hello world'.replace('world', 'there'); // 'hello there'", description: "«” »œ«·" },
                    { value: "'hello world'.replace(/world/, 'there');", description: "»«” Œœ«„  ⁄»Ì— ‰„ÿÌ" },
                    { value: "'hello world'.replace(/o/g, '0'); // 'hell0 w0rld'", description: "«” »œ«· ﬂ· «· ÿ«»ﬁ«  („⁄ g)" }
                ]
            },
            // -------- replaceAll --------
            {
                name: "replaceAll",
                description: "Ì” »œ· ﬂ·  ÿ«»ﬁ«  Ã“¡ „‰ «·‰’ »Ã“¡ ¬Œ—",
                values: [
                    { value: "'a-a-a'.replaceAll('-', '+'); // 'a+a+a'", description: "«” »œ«· ﬂ· «·‘—ÿ« " },
                    { value: "'hello world'.replaceAll('o', '0'); // 'hell0 w0rld'", description: "«” »œ«· ﬂ· o" },
                    { value: "str.replaceAll(/pattern/g, 'new');", description: "»«” Œœ«„  ⁄»Ì— ‰„ÿÌ" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. œÊ«· «· ⁄»∆… Ê«· ﬂ—«—
    // ============================================================
    {
        tag: "padding-repeat",
        description: "œÊ«· · ⁄»∆… Ê ﬂ—«— «·‰’Ê’",
        properties: [
            // -------- padStart --------
            {
                name: "padStart",
                description: "Ì÷Ì› √Õ—›« ›Ì »œ«Ì… «·‰’ Õ Ï Ì’· ·ÿÊ· „⁄Ì‰",
                values: [
                    { value: "'5'.padStart(2, '0'); // '05'", description: "≈÷«›… ’›— ›Ì «·»œ«Ì…" },
                    { value: "'123'.padStart(5, '*'); // '**123'", description: "≈÷«›… ‰ÃÊ„" },
                    { value: "str.padStart(10, ' ');", description: "≈÷«›… „”«›« " }
                ]
            },
            // -------- padEnd --------
            {
                name: "padEnd",
                description: "Ì÷Ì› √Õ—›« ›Ì ‰Â«Ì… «·‰’ Õ Ï Ì’· ·ÿÊ· „⁄Ì‰",
                values: [
                    { value: "'5'.padEnd(2, '0'); // '50'", description: "≈÷«›… ’›— ›Ì «·‰Â«Ì…" },
                    { value: "'123'.padEnd(5, '*'); // '123**'", description: "≈÷«›… ‰ÃÊ„" },
                    { value: "str.padEnd(10, ' ');", description: "≈÷«›… „”«›« " }
                ]
            },
            // -------- repeat --------
            {
                name: "repeat",
                description: "Ìı‰‘∆ ‰’« ÃœÌœ« » ﬂ—«— «·‰’ «·√’·Ì ⁄œœ« „Õœœ« „‰ «·„—« ",
                values: [
                    { value: "'ab'.repeat(3); // 'ababab'", description: " ﬂ—«— 3 „—« " },
                    { value: "'*'.repeat(10); // '**********'", description: "10 ‰ÃÊ„" },
                    { value: "' '.repeat(4) + '‰’';", description: "≈÷«›… „”«›«  »«œ∆…" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. œÊ«· «· ﬁ”Ì„ Ê«·œ„Ã
    // ============================================================
    {
        tag: "split-join",
        description: "œÊ«· · ﬁ”Ì„ Êœ„Ã «·‰’Ê’",
        properties: [
            // -------- split --------
            {
                name: "split",
                description: "Ìﬁ”¯„ «·‰’ ≈·Ï „’›Ê›… „‰ «·√Ã“«¡ »‰«¡ ⁄·Ï ›«’· „Õœœ",
                values: [
                    { value: "'a,b,c'.split(','); // ['a', 'b', 'c']", description: " ﬁ”Ì„ »›«’·…" },
                    { value: "'hello world'.split(' '); // ['hello', 'world']", description: " ﬁ”Ì„ »„”«›…" },
                    { value: "'hello'.split(''); // ['h', 'e', 'l', 'l', 'o']", description: " ﬁ”Ì„ ≈·Ï √Õ—›" },
                    { value: "'a,b,c'.split(',', 2); // ['a', 'b']", description: "»Õœ √ﬁ’Ï" }
                ]
            },
            // -------- concat --------
            {
                name: "concat",
                description: "Ìœ„Ã ‰’« √Ê √ﬂÀ— „⁄ «·‰’ «·√’·Ì («” Œœ«„ + √‘Ì⁄)",
                values: [
                    { value: "'hello'.concat(' ', 'world'); // 'hello world'", description: "œ„Ã" },
                    { value: "str1.concat(str2, str3);", description: "œ„Ã ⁄œ… ‰’Ê’" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. œÊ«· À«» … (Static Methods)
    // ============================================================
    {
        tag: "static-string-methods",
        description: "œÊ«· À«» … ⁄·Ï String",
        properties: [
            // -------- String.fromCharCode --------
            {
                name: "fromCharCode",
                description: "Ìı‰‘∆ ‰’« „‰ —„Ê“ Unicode",
                values: [
                    { value: "String.fromCharCode(65); // 'A'", description: "—„“ 65 = A" },
                    { value: "String.fromCharCode(72, 101, 108, 108, 111); // 'Hello'", description: "⁄œ… —„Ê“" }
                ]
            },
            // -------- String.fromCodePoint --------
            {
                name: "fromCodePoint",
                description: "Ìı‰‘∆ ‰’« „‰ ‰ﬁ«ÿ Unicode ( œ⁄„ «·—„Ê“ «·≈÷«›Ì…)",
                values: [
                    { value: "String.fromCodePoint(128522); // '??'", description: "—„“ «·‹ Emoji" },
                    { value: "String.fromCodePoint(65, 66, 67); // 'ABC'", description: "⁄œ… ‰ﬁ«ÿ" }
                ]
            },
            // -------- String.raw --------
            {
                name: "raw",
                description: "Ìı‰‘∆ ‰’« Œ«„« »œÊ‰  ›”Ì— «·Â—Ê» (·‹ Template Literals)",
                values: [
                    { value: "String.raw`hello\\nworld`; // 'hello\\nworld'", description: "‰’ Œ«„" },
                    { value: "String.raw({ raw: ['hello', 'world'] }, ' ', '!'); // 'hello world!'", description: "„⁄ „ €Ì—« " }
                ]
            }
        ]
    },

    // ============================================================
    // 9. Template Literals
    // ============================================================
    {
        tag: "template-literals",
        description: "‰’Ê’ ﬁ«»·… ·· ‰”Ìﬁ „⁄ „ €Ì—«  ÊœÊ«·",
        properties: [
            {
                name: "Template Literals",
                description: "‰’Ê’ „⁄ ≈œ—«Ã „ €Ì—«  Ê√”ÿ— „ ⁄œœ…",
                values: [
                    { value: "`„—Õ»« ${name}`", description: "≈œ—«Ã „ €Ì—" },
                    { value: "`«·”⁄—: ${price} —Ì«·`", description: "„⁄ ÊÕœ« " },
                    { value: "`„—Õ»«\n«·⁄«·„`", description: "‰’ „ ⁄œœ «·√”ÿ—" },
                    { value: "`«·‰ ÌÃ…: ${a + b}`", description: " ⁄»Ì—" },
                    { value: "`„—Õ»« ${user ? user.name : '“«∆—'}`", description: "„⁄ ‘—ÿ" }
                ]
            },
            {
                name: "Tagged Templates",
                description: " „—Ì— «·‰’ ≈·Ï œ«·… ·„⁄«·Ã Â",
                values: [
                    { value: "function tag(strings, ...values) { return strings.join('') + values.join(''); } tag`„—Õ»« ${name}`", description: "œ«·… Ê”„" },
                    { value: "function highlight(strings, ...values) { return strings.reduce((acc, str, i) => acc + str + (values[i] ? `<strong>${values[i]}</strong>` : ''), ''); }", description: " Ÿ·Ì· «·‰’" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. œÊ«· ≈÷«›Ì…
    // ============================================================
    {
        tag: "additional-methods",
        description: "œÊ«· ≈÷«›Ì… „›Ìœ…",
        properties: [
            // -------- localeCompare --------
            {
                name: "localeCompare",
                description: "Ìﬁ«—‰ ‰’¯Ì‰ Õ”»  — Ì» «··€… «·„Õ·Ì…",
                values: [
                    { value: "'a'.localeCompare('b'); // -1", description: "a < b" },
                    { value: "'b'.localeCompare('a'); // 1", description: "b > a" },
                    { value: "'a'.localeCompare('a'); // 0", description: "„ ”«ÊÌ«‰" },
                    { value: "str1.localeCompare(str2, 'ar');", description: "„ﬁ«—‰… ⁄—»Ì…" }
                ]
            },
            // -------- normalize --------
            {
                name: "normalize",
                description: "ÌÊÕ¯œ  „ÀÌ· «·‰’ (··„ﬁ«—‰… »Ì‰ «·Õ—Ê› «·„‘ﬂ¯·…)",
                values: [
                    { value: "'È'.normalize('NFC');", description: " ÊÕÌœ NFC" },
                    { value: "'È'.normalize('NFD');", description: " ÊÕÌœ NFD" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ œÊ«· «·‰’Ê’",
        properties: [
            {
                name: "„À«· 1 - «· Õﬁﬁ „‰ ’Õ… «·»—Ìœ «·≈·ﬂ —Ê‰Ì",
                description: "«· Õﬁﬁ „‰ ’Õ… «·»—Ìœ «·≈·ﬂ —Ê‰Ì",
                values: [
                    { value: "function isValidEmail(email) { return email.includes('@') && email.includes('.'); }", description: "«· Õﬁﬁ „‰ «·»—Ìœ" },
                    { value: "function isValidEmail(email) { return email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/); }", description: "»«” Œœ«„  ⁄»Ì— ‰„ÿÌ" }
                ]
            },
            {
                name: "„À«· 2 - «” Œ—«Ã «”„ «·„·› „‰ «·„”«—",
                description: "«” Œ—«Ã «”„ «·„·›",
                values: [
                    { value: "function getFileName(path) { return path.split('/').pop(); }", description: "«”„ «·„·›" }
                ]
            },
            {
                name: "„À«· 3 -  ‰”Ìﬁ «·√—ﬁ«„ ﬂ⁄„·…",
                description: " ‰”Ìﬁ «·√—ﬁ«„",
                values: [
                    { value: "function formatCurrency(amount) { return amount.toFixed(2).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ','); }", description: "≈÷«›… ›Ê«’·" }
                ]
            },
            {
                name: "„À«· 4 - «Œ ’«— «·‰’Ê’",
                description: "«Œ ’«— «·‰’Ê’ «·ÿÊÌ·…",
                values: [
                    { value: "function truncate(str, maxLength) { return str.length > maxLength ? str.slice(0, maxLength) + '...' : str; }", description: "«Œ ’«— «·‰’" }
                ]
            }
        ]
    },

    // ============================================================
    // 12. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ œÊ«· «·‰’Ê’",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ «·‰’Ê’",
                values: [
                    { value: "«” Œœ„ Template Literals ··‰’Ê’ «·„⁄ﬁœ…", description: "·≈œ—«Ã „ €Ì—«  »”ÂÊ·…" },
                    { value: "«” Œœ„ includes »œ·« „‰ indexOf", description: "·· Õﬁﬁ „‰ «·ÊÃÊœ" },
                    { value: "«” Œœ„ startsWith Ê endsWith", description: "·· Õﬁﬁ „‰ «·»œ«Ì… Ê«·‰Â«Ì…" },
                    { value: "«” Œœ„ trim ·· ‰ŸÌ›", description: "≈“«·… «·›—«€«  «·“«∆œ…" },
                    { value: "«” Œœ„ replaceAll ··«” »œ«· «·ﬂ·Ì", description: "»œ·« „‰ replace „⁄ g" }
                ]
            },
            {
                name: "‰’«∆Õ «·√œ«¡",
                description: "‰’«∆Õ · Õ”Ì‰ √œ«¡ «·‰’Ê’",
                values: [
                    { value: " Ã‰» concat ›Ì «·Õ·ﬁ« ", description: "«” Œœ„ join √Ê Template Literals" },
                    { value: "«” Œœ„ split „⁄ limit", description: "··Õœ „‰ «·√Ã“«¡" },
                    { value: " Ã‰»  €ÌÌ— «·‰’Ê’ «·ﬂ»Ì—… »ﬂÀ—…", description: "Ì” Â·ﬂ –«ﬂ—…" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ «·‰’Ê’",
                values: [
                    { value: "‰”Ì«‰ √‰ «·‰’Ê’ €Ì— ﬁ«»·… ·· €ÌÌ—", description: "ﬂ· ⁄„·Ì…  ı—Ã⁄ ‰’« ÃœÌœ«" },
                    { value: "«” Œœ«„ == »œ·« „‰ ===", description: "Ìﬁ«—‰ „⁄  ÕÊÌ· «·‰Ê⁄" },
                    { value: "‰”Ì«‰ ≈÷«›… g ›Ì replace", description: "Ì” »œ· √Ê·  ÿ«»ﬁ ›ﬁÿ" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsStringsData = jsStringsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsStringsData;
}