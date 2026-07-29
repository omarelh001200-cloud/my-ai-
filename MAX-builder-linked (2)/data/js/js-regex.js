// ============================================================
// js-regex.js
// «· ⁄»Ì—«  «·‰„ÿÌ… (Regular Expressions - RegExp) ›Ì JavaScript
//  ‘—Õ ≈‰‘«¡ Ê«” Œœ«„ «· ⁄»Ì—«  «·‰„ÿÌ… „⁄ √„À·…
// ============================================================

const jsRegexData = [
    // ============================================================
    // 1. ≈‰‘«¡ «· ⁄»Ì—«  «·‰„ÿÌ…
    // ============================================================
    {
        tag: "regex-creation",
        description: "ÿ—ﬁ ≈‰‘«¡ «· ⁄»Ì—«  «·‰„ÿÌ… ›Ì JavaScript",
        properties: [
            {
                name: "RegExp literal",
                description: "≈‰‘«¡  ⁄»Ì— ‰„ÿÌ »«” Œœ«„ «·‘—ÿ Ì‰ //",
                values: [
                    { value: "/pattern/", description: " ⁄»Ì— ‰„ÿÌ »”Ìÿ" },
                    { value: "/\\d+/", description: " ⁄»Ì— „⁄ Õ—› Â—Ê»" },
                    { value: "/hello/i", description: "„⁄ ŒÌ«— ignoreCase" },
                    { value: "/^start/g", description: "„⁄ ŒÌ«— global" },
                    { value: "/[a-z]/i", description: "ŒÌ«—«  „ ⁄œœ…" }
                ]
            },
            {
                name: "new RegExp()",
                description: "≈‰‘«¡  ⁄»Ì— ‰„ÿÌ »«” Œœ«„ «·‹ constructor",
                values: [
                    { value: "new RegExp('pattern')", description: " ⁄»Ì— ‰„ÿÌ „‰ ‰’" },
                    { value: "new RegExp('\\\\d+', 'g')", description: "„⁄ ŒÌ«—« " },
                    { value: "new RegExp(pattern, 'gi')", description: "„‰ „ €Ì—" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. ŒÌ«—«  «· ⁄»Ì—«  «·‰„ÿÌ… (Flags)
    // ============================================================
    {
        tag: "regex-flags",
        description: "«·ŒÌ«—«  (Flags) «· Ì  €Ì— ”·Êﬂ «· ⁄»Ì— «·‰„ÿÌ",
        properties: [
            {
                name: "Flags",
                description: "ŒÌ«—«  «· ⁄»Ì— «·‰„ÿÌ",
                values: [
                    { value: "g (global)", description: "Ì»ÕÀ ⁄‰ ﬂ· «· ÿ«»ﬁ«  (Ê·Ì” √Ê·  ÿ«»ﬁ ›ﬁÿ)" },
                    { value: "i (ignoreCase)", description: "Ì Ã«Â· Õ«·… «·√Õ—› (€Ì— Õ”«” ·Õ«·… «·√Õ—›)" },
                    { value: "m (multiline)", description: "ÌÃ⁄· ^ Ê $  ÿ«»ﬁ »œ«Ì… Ê‰Â«Ì… ﬂ· ”ÿ—" },
                    { value: "s (dotAll)", description: "ÌÃ⁄· . Ìÿ«»ﬁ √Ì Õ—› »„« ›Ì –·ﬂ ”ÿ— ÃœÌœ" },
                    { value: "u (unicode)", description: "Ìœ⁄„ Unicode »«·ﬂ«„·" },
                    { value: "y (sticky)", description: "Ì»ÕÀ „‰ „Ê÷⁄ lastIndex ›ﬁÿ" },
                    { value: "/pattern/gmi", description: "ŒÌ«—«  „ ⁄œœ… „⁄«" },
                    { value: "new RegExp('pattern', 'gmi')", description: "ŒÌ«—«  „⁄ «·‹ constructor" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. √‰„«ÿ ‘«∆⁄… (Patterns)
    // ============================================================
    {
        tag: "regex-patterns",
        description: "√‰„«ÿ ‘«∆⁄… «·«” Œœ«„ ›Ì «· ⁄»Ì—«  «·‰„ÿÌ…",
        properties: [
            // -------- «·√Õ—› «·Œ«’… --------
            {
                name: "Special Characters",
                description: "«·√Õ—› «·Œ«’… ›Ì «· ⁄»Ì—«  «·‰„ÿÌ…",
                values: [
                    { value: ".", description: "√Ì Õ—› („« ⁄œ« ”ÿ— ÃœÌœ)" },
                    { value: "\\d", description: "√Ì —ﬁ„ (0-9)" },
                    { value: "\\D", description: "√Ì Õ—› ·Ì” —ﬁ„«" },
                    { value: "\\w", description: "√Ì Õ—› ﬂ·„… (a-z, A-Z, 0-9, _)" },
                    { value: "\\W", description: "√Ì Õ—› ·Ì” „‰ Õ—Ê› «·ﬂ·„…" },
                    { value: "\\s", description: "√Ì „”«›… »Ì÷«¡ (space, tab, newline)" },
                    { value: "\\S", description: "√Ì Õ—› ·Ì” „”«›… »Ì÷«¡" },
                    { value: "\\t", description: "Õ—› Tab" },
                    { value: "\\n", description: "”ÿ— ÃœÌœ" },
                    { value: "\\r", description: "≈—Ã«⁄ ··Õ—›" },
                    { value: "\\f", description: " €–Ì… «·’›Õ…" },
                    { value: "\\v", description: "Tab ⁄„ÊœÌ" },
                    { value: "\\0", description: "Õ—› null" }
                ]
            },
            // -------- «· ﬂ—«— (Quantifiers) --------
            {
                name: "Quantifiers",
                description: " ÕœÌœ ⁄œœ „—«  «· ﬂ—«—",
                values: [
                    { value: "*", description: "0 √Ê √ﬂÀ—" },
                    { value: "+", description: "1 √Ê √ﬂÀ—" },
                    { value: "?", description: "0 √Ê 1" },
                    { value: "{n}", description: "»«·÷»ÿ n „—« " },
                    { value: "{n,}", description: "n √Ê √ﬂÀ—" },
                    { value: "{n,m}", description: "»Ì‰ n Ê m „—« " },
                    { value: "*?", description: "Lazy (√ﬁ· ⁄œœ „‰ «· ﬂ—«—« )" },
                    { value: "+?", description: "Lazy (√ﬁ· ⁄œœ „‰ «· ﬂ—«—« )" },
                    { value: "??", description: "Lazy (√ﬁ· ⁄œœ „‰ «· ﬂ—«—« )" }
                ]
            },
            // -------- «·„Ê«ﬁ⁄ (Anchors) --------
            {
                name: "Anchors",
                description: " ÕœÌœ „Ê«ﬁ⁄ ›Ì «·‰’",
                values: [
                    { value: "^", description: "»œ«Ì… «·‰’ (√Ê »œ«Ì… «·”ÿ— „⁄ m)" },
                    { value: "$", description: "‰Â«Ì… «·‰’ (√Ê ‰Â«Ì… «·”ÿ— „⁄ m)" },
                    { value: "\\b", description: "ÕœÊœ «·ﬂ·„… (word boundary)" },
                    { value: "\\B", description: "·Ì” ÕœÊœ ﬂ·„…" },
                    { value: "(?=...)", description: "Lookahead ≈ÌÃ«»Ì" },
                    { value: "(?!...)", description: "Lookahead ”·»Ì" },
                    { value: "(?<=...)", description: "Lookbehind ≈ÌÃ«»Ì" },
                    { value: "(?<!...)", description: "Lookbehind ”·»Ì" }
                ]
            },
            // -------- «·„Ã„Ê⁄«  (Groups) --------
            {
                name: "Groups",
                description: " Ã„Ì⁄ √Ã“«¡ „‰ «·‰„ÿ",
                values: [
                    { value: "(...)", description: "„Ã„Ê⁄… «· ﬁ«ÿ" },
                    { value: "(?:...)", description: "„Ã„Ê⁄… €Ì— „· ﬁÿ…" },
                    { value: "(?<name>...)", description: "„Ã„Ê⁄… „”„«…" },
                    { value: "[abc]", description: "√Ì Õ—› „‰ a,b,c" },
                    { value: "[a-z]", description: "√Ì Õ—› »Ì‰ a Ê z" },
                    { value: "[^abc]", description: "√Ì Õ—› ·Ì” a,b,c" },
                    { value: "|", description: "√Ê (OR)" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. œÊ«· RegExp
    // ============================================================
    {
        tag: "regex-methods",
        description: "œÊ«· «· ⁄»Ì—«  «·‰„ÿÌ…",
        properties: [
            // -------- test --------
            {
                name: "RegExp.test",
                description: "Ì Õﬁﬁ ≈‰ ﬂ«‰ «·‰’ Ìÿ«»ﬁ «· ⁄»Ì— «·‰„ÿÌ° ÊÌı—Ã⁄ true √Ê false",
                values: [
                    { value: "/\\d+/.test('abc123'); // true", description: "Â· ÌÊÃœ √—ﬁ«„ø" },
                    { value: "/hello/.test('world'); // false", description: "Â· ÌÊÃœ helloø" },
                    { value: "regex.test(str);", description: "«” Œœ«„ „ €Ì—" }
                ]
            },
            // -------- exec --------
            {
                name: "RegExp.exec",
                description: "Ì»ÕÀ ⁄‰  ÿ«»ﬁ ›Ì «·‰’ ÊÌı—Ã⁄  ›«’Ì· «· ÿ«»ﬁ «·√Ê· (√Ê null)",
                values: [
                    { value: "/\\d+/.exec('abc123'); // ['123']", description: "√Ê·  ÿ«»ﬁ" },
                    { value: "const match = regex.exec(str); match[0]; match.index; match.input;", description: " ›«’Ì· «· ÿ«»ﬁ" },
                    { value: "const matches = []; let match; while ((match = regex.exec(str)) !== null) { matches.push(match[0]); }", description: "Ã„Ì⁄ «· ÿ«»ﬁ« " }
                ]
            },
            // -------- properties --------
            {
                name: "RegExp Properties",
                description: "Œ’«∆’ «· ⁄»Ì— «·‰„ÿÌ",
                values: [
                    { value: "regex.source", description: "‰’ «·‰„ÿ" },
                    { value: "regex.flags", description: "«·ŒÌ«—« " },
                    { value: "regex.global", description: "Â· g „›⁄¯·ø" },
                    { value: "regex.ignoreCase", description: "Â· i „›⁄¯·ø" },
                    { value: "regex.multiline", description: "Â· m „›⁄¯·ø" },
                    { value: "regex.dotAll", description: "Â· s „›⁄¯·ø" },
                    { value: "regex.unicode", description: "Â· u „›⁄¯·ø" },
                    { value: "regex.sticky", description: "Â· y „›⁄¯·ø" },
                    { value: "regex.lastIndex", description: "„Ê÷⁄ «·»œ«Ì… ··»ÕÀ «· «·Ì" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. œÊ«· String „⁄ RegExp
    // ============================================================
    {
        tag: "string-regex-methods",
        description: "œÊ«· String «· Ì  ﬁ»·  ⁄»Ì—« ‰„ÿÌ«",
        properties: [
            // -------- match --------
            {
                name: "String.match",
                description: "Ì»ÕÀ ⁄‰  ÿ«»ﬁ«  «· ⁄»Ì— «·‰„ÿÌ ›Ì «·‰’",
                values: [
                    { value: "'abc123'.match(/\\d+/); // ['123']", description: "√Ê·  ÿ«»ﬁ" },
                    { value: "'abc123'.match(/\\d+/g); // ['123']", description: "ﬂ· «· ÿ«»ﬁ« " },
                    { value: "str.match(regex);", description: "«” Œœ«„ „ €Ì—" }
                ]
            },
            // -------- matchAll --------
            {
                name: "String.matchAll",
                description: "Ìı—Ã⁄ „ıﬂ—ˆ¯—« ⁄·Ï Ã„Ì⁄  ÿ«»ﬁ«  «· ⁄»Ì— «·‰„ÿÌ („⁄ g)",
                values: [
                    { value: "const matches = str.matchAll(/\\d+/g); for (const m of matches) { console.log(m[0]); }", description: "Ã„Ì⁄ «· ÿ«»ﬁ« " }
                ]
            },
            // -------- search --------
            {
                name: "String.search",
                description: "Ì»ÕÀ ⁄‰  ÿ«»ﬁ «· ⁄»Ì— «·‰„ÿÌ ÊÌı—Ã⁄ „Ê÷⁄ √Ê·  ÿ«»ﬁ° √Ê -1",
                values: [
                    { value: "'hello123'.search(/\\d+/); // 5", description: "„Ê÷⁄ √Ê· —ﬁ„" },
                    { value: "str.search(regex);", description: "«” Œœ«„ „ €Ì—" }
                ]
            },
            // -------- replace --------
            {
                name: "String.replace",
                description: "Ì” »œ·  ÿ«»ﬁ«  «· ⁄»Ì— «·‰„ÿÌ »‰’ ¬Œ—",
                values: [
                    { value: "'hello123'.replace(/\\d+/, 'X'); // 'helloX'", description: "«” »œ«· √Ê·  ÿ«»ﬁ" },
                    { value: "'hello123'.replace(/\\d+/g, 'X'); // 'helloX'", description: "«” »œ«· ﬂ· «· ÿ«»ﬁ« " },
                    { value: "'a1b2c3'.replace(/\\d/g, match => match * 2); // 'a2b4c6'", description: "»œ«·…" }
                ]
            },
            // -------- replaceAll --------
            {
                name: "String.replaceAll",
                description: "Ì” »œ· ﬂ·  ÿ«»ﬁ«  «· ⁄»Ì— «·‰„ÿÌ »‰’ ¬Œ—",
                values: [
                    { value: "'a1b2c3'.replaceAll(/\\d/g, 'X'); // 'aXbXcX'", description: "«” »œ«· ﬂ· «·√—ﬁ«„" }
                ]
            },
            // -------- split --------
            {
                name: "String.split",
                description: "Ìﬁ”¯„ «·‰’ »«” Œœ«„ «· ⁄»Ì— «·‰„ÿÌ ﬂ›«’·",
                values: [
                    { value: "'a,b,c'.split(/,/); // ['a', 'b', 'c']", description: " ﬁ”Ì„ »›«’·…" },
                    { value: "'a1b2c3'.split(/\\d/); // ['a', 'b', 'c']", description: " ﬁ”Ì„ »«·√—ﬁ«„" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. √‰„«ÿ ‘«∆⁄… (Common Patterns)
    // ============================================================
    {
        tag: "common-patterns",
        description: "√‰„«ÿ  ⁄»Ì—«  ‰„ÿÌ… ‘«∆⁄… «·«” Œœ«„",
        properties: [
            {
                name: "Email",
                description: "«· Õﬁﬁ „‰ ’Õ… «·»—Ìœ «·≈·ﬂ —Ê‰Ì",
                values: [
                    { value: "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/", description: "»—Ìœ ≈·ﬂ —Ê‰Ì »”Ìÿ" },
                    { value: "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/", description: "»—Ìœ ≈·ﬂ —Ê‰Ì „ ﬁœ„" }
                ]
            },
            {
                name: "URL",
                description: "«· Õﬁﬁ „‰ ’Õ… «·—«»ÿ",
                values: [
                    { value: "/^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/", description: "—«»ÿ URL" }
                ]
            },
            {
                name: "Phone",
                description: "«· Õﬁﬁ „‰ —ﬁ„ «·Â« ›",
                values: [
                    { value: "/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/", description: "—ﬁ„ Â« ›" }
                ]
            },
            {
                name: "IPv4",
                description: "«· Õﬁﬁ „‰ ⁄‰Ê«‰ IP",
                values: [
                    { value: "/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/", description: "⁄‰Ê«‰ IPv4" }
                ]
            },
            {
                name: "Hex Color",
                description: "«· Õﬁﬁ „‰ ·Ê‰ Hex",
                values: [
                    { value: "/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/", description: "·Ê‰ Hex" }
                ]
            },
            {
                name: "Date (YYYY-MM-DD)",
                description: "«· Õﬁﬁ „‰  «—ÌŒ",
                values: [
                    { value: "/^\\d{4}-\\d{2}-\\d{2}$/", description: " «—ÌŒ »’Ì€… ISO" }
                ]
            },
            {
                name: "Username",
                description: "«· Õﬁﬁ „‰ «”„ «·„” Œœ„",
                values: [
                    { value: "/^[a-zA-Z0-9_]{3,20}$/", description: "«”„ „” Œœ„ (3-20 Õ—›)" }
                ]
            },
            {
                name: "Password",
                description: "«· Õﬁﬁ „‰ ﬂ·„… «·„—Ê—",
                values: [
                    { value: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$/", description: "ﬂ·„… „—Ê— ﬁÊÌ…" }
                ]
            },
            {
                name: "Arabic Letters",
                description: "«· Õﬁﬁ „‰ «·Õ—Ê› «·⁄—»Ì…",
                values: [
                    { value: "/[\\u0600-\\u06FF]/", description: "√Õ—› ⁄—»Ì…" },
                    { value: "/^[\\u0600-\\u06FF\\s]+$/", description: "‰’ ⁄—»Ì ﬂ«„·" }
                ]
            },
            {
                name: "Digits Only",
                description: "√—ﬁ«„ ›ﬁÿ",
                values: [
                    { value: "/^\\d+$/", description: "√—ﬁ«„ ›ﬁÿ" }
                ]
            },
            {
                name: "Letters Only",
                description: "Õ—Ê› ›ﬁÿ",
                values: [
                    { value: "/^[a-zA-Z]+$/", description: "Õ—Ê› ≈‰Ã·Ì“Ì… ›ﬁÿ" }
                ]
            },
            {
                name: "Alphanumeric",
                description: "Õ—Ê› Ê√—ﬁ«„ ›ﬁÿ",
                values: [
                    { value: "/^[a-zA-Z0-9]+$/", description: "Õ—Ê› Ê√—ﬁ«„" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ «· ⁄»Ì—«  «·‰„ÿÌ…",
        properties: [
            {
                name: "„À«· 1 - «” Œ—«Ã «·√—ﬁ«„ „‰ ‰’",
                description: "«” Œ—«Ã Ã„Ì⁄ «·√—ﬁ«„ „‰ «·‰’",
                values: [
                    { value: "function extractNumbers(text) { const matches = text.match(/\\d+/g); return matches ? matches.map(Number) : []; }", description: "«” Œ—«Ã «·√—ﬁ«„" }
                ]
            },
            {
                name: "„À«· 2 - «· Õﬁﬁ „‰ ’Õ… «·»—Ìœ «·≈·ﬂ —Ê‰Ì",
                description: "«· Õﬁﬁ „‰ ’Õ… «·»—Ìœ «·≈·ﬂ —Ê‰Ì",
                values: [
                    { value: "function isValidEmail(email) { return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email); }", description: "«· Õﬁﬁ „‰ «·»—Ìœ" }
                ]
            },
            {
                name: "„À«· 3 - «” Œ—«Ã «·—Ê«»ÿ „‰ ‰’",
                description: "«” Œ—«Ã Ã„Ì⁄ «·—Ê«»ÿ „‰ «·‰’",
                values: [
                    { value: "function extractUrls(text) { const regex = /(https?:\\/\\/[^\\s]+)/g; return text.match(regex) || []; }", description: "«” Œ—«Ã «·—Ê«»ÿ" }
                ]
            },
            {
                name: "„À«· 4 -  ‰ŸÌ› «·‰’ „‰ ⁄·«„«  HTML",
                description: "≈“«·… ⁄·«„«  HTML „‰ «·‰’",
                values: [
                    { value: "function stripHtml(html) { return html.replace(/<[^>]*>/g, ''); }", description: "≈“«·… HTML" }
                ]
            },
            {
                name: "„À«· 5 -  ÕÊÌ· «·‰’ ≈·Ï Slug",
                description: " ÕÊÌ· «·‰’ ≈·Ï ’Ì€… „‰«”»… ··—Ê«»ÿ",
                values: [
                    { value: "function slugify(text) { return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }", description: " ÕÊÌ· ≈·Ï Slug" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ «· ⁄»Ì—«  «·‰„ÿÌ…",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ «· ⁄»Ì—«  «·‰„ÿÌ…",
                values: [
                    { value: "«” Œœ„ literal »œ·« „‰ constructor", description: "√”—⁄ Ê√”Â·" },
                    { value: "«Œ »— √‰„«ÿﬂ ⁄·Ï „Ê«ﬁ⁄ „À· regex101.com", description: "·· √ﬂœ „‰ ’Õ Â«" },
                    { value: "«” Œœ„ «· Ã„Ì⁄ (groups) ··«” Œ—«Ã", description: "·Ã·» √Ã“«¡ „Õœœ…" },
                    { value: "«” Œœ„ flags «·„‰«”»…", description: "g, i, m Õ”» «·Õ«Ã…" }
                ]
            },
            {
                name: "‰’«∆Õ «·√œ«¡",
                description: "‰’«∆Õ · Õ”Ì‰ √œ«¡ «· ⁄»Ì—«  «·‰„ÿÌ…",
                values: [
                    { value: " Ã‰» «·√‰„«ÿ «·„⁄ﬁœ… Ãœ«", description: "»ÿÌ∆…" },
                    { value: "«” Œœ„ ^ Ê $ · ﬁÌÌœ «·»ÕÀ", description: "Ì”—⁄ «·»ÕÀ" },
                    { value: " Ã‰» «· ﬂ—«— «·„›—ÿ", description: "Ì” Â·ﬂ „⁄«·Ã«" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ «· ⁄»Ì—«  «·‰„ÿÌ…",
                values: [
                    { value: "‰”Ì«‰ Õ—Ê› «·Â—Ê» (escaping)", description: "·‹ . * + ? ≈·Œ" },
                    { value: "«” Œœ«„ g „⁄ matchAll", description: "matchAll Ì ÿ·» g" },
                    { value: "‰”Ì«‰ √‰ . ·« Ìÿ«»ﬁ ”ÿ—« ÃœÌœ«", description: "«” Œœ„ s flag" },
                    { value: "‰”Ì«‰ ^ Ê $ „⁄ m flag", description: " ÿ«»ﬁ »œ«Ì…/‰Â«Ì… ﬂ· ”ÿ—" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsRegexData = jsRegexData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsRegexData;
}