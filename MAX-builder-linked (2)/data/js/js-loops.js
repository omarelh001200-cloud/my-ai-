// ============================================================
// js-loops.js
// «·Õ·ﬁ«  (Loops) ›Ì JavaScript
//  ‘—Õ Ã„Ì⁄ √‰Ê«⁄ «·Õ·ﬁ« : for, while, do...while, for...of, for...in
// ============================================================

const jsLoopsData = [
    // ============================================================
    // 1. for - «·Õ·ﬁ… «·√”«”Ì…
    // ============================================================
    {
        tag: "for",
        description: " ﬂ——  ‰›Ì– ﬂÊœ ⁄œœ« „Õœœ« „‰ «·„—«  »«” Œœ«„ ⁄œ¯«œ.   ﬂÊ‰ „‰ À·«À… √Ã“«¡: «· ÂÌ∆…° «·‘—ÿ° «· ÕœÌÀ",
        properties: [
            {
                name: "for",
                description: "«·Õ·ﬁ… «·√”«”Ì… „⁄ ⁄œ«œ",
                values: [
                    { value: "for (let i = 0; i < 10; i++) { body }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "for (let i = 0; i < 5; i++) { console.log(i); }", description: "ÿ»«⁄… 0 ≈·Ï 4" },
                    { value: "for (let i = 1; i <= 5; i++) { console.log(i); }", description: "ÿ»«⁄… 1 ≈·Ï 5" },
                    { value: "for (let i = 10; i > 0; i--) { console.log(i); }", description: "⁄œ  ‰«“·Ì „‰ 10 ≈·Ï 1" },
                    { value: "for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }", description: "«· ﬂ—«— ⁄·Ï „’›Ê›…" },
                    { value: "for (let i = 0; i < 10; i += 2) { console.log(i); }", description: "ŒÿÊ… 2 (0, 2, 4, 6, 8)" }
                ]
            },
            {
                name: "for - Õ–› «·√Ã“«¡",
                description: "Ì„ﬂ‰ Õ–› √Ì Ã“¡ „‰ √Ã“«¡ «·Õ·ﬁ…",
                values: [
                    { value: "let i = 0; for (; i < 5; i++) { console.log(i); }", description: "«· ÂÌ∆… Œ«—Ã «·Õ·ﬁ…" },
                    { value: "for (let i = 0; ; i++) { if (i >= 5) break; console.log(i); }", description: "«·‘—ÿ œ«Œ· «·Õ·ﬁ…" },
                    { value: "let i = 0; for (; i < 5; ) { console.log(i); i++; }", description: "«· ÕœÌÀ œ«Œ· «·Õ·ﬁ…" },
                    { value: "for (;;) { console.log('·« ‰Â«∆Ì'); break; }", description: "Õ·ﬁ… ·« ‰Â«∆Ì… „⁄ break" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. while - Õ·ﬁ… »Ì‰„«
    // ============================================================
    {
        tag: "while",
        description: " ﬂ——  ‰›Ì– ﬂÊœ ÿ«·„« »ﬁÌ «·‘—ÿ ’ÕÌÕ«.  ı›Õ’ «·‘—ÿ ﬁ»· ﬂ·  ﬂ—«—° Êﬁœ ·«  ‰›– √»œ« ≈–« ﬂ«‰ «·‘—ÿ Œ«ÿ∆« „‰ «·»œ«Ì…",
        properties: [
            {
                name: "while",
                description: " ﬂ—«— ÿ«·„« «·‘—ÿ ’ÕÌÕ",
                values: [
                    { value: "while (condition) { body }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "let i = 0; while (i < 5) { console.log(i); i++; }", description: "ÿ»«⁄… 0 ≈·Ï 4" },
                    { value: "while (isRunning) { process(); }", description: "«” „—«— ÿ«·„« «·‘—ÿ ’ÕÌÕ" },
                    { value: "while (data.length > 0) { processItem(data.pop()); }", description: "„⁄«·Ã… ⁄‰«’— Õ Ï «·›—«€" },
                    { value: "let count = 10; while (count > 0) { console.log(count); count--; }", description: "⁄œ  ‰«“·Ì" }
                ]
            },
            {
                name: "while - «” Œœ«„« ",
                description: "Õ«·«  «” Œœ«„ ‘«∆⁄…",
                values: [
                    { value: "while (x < 100) { x *= 2; }", description: "„÷«⁄›… Õ Ï «·Ê’Ê· ··Õœ" },
                    { value: "while (buffer.hasMoreData()) { process(buffer.read()); }", description: "ﬁ—«¡… »Ì«‰«  Õ Ï «·‰Â«Ì…" },
                    { value: "let userInput = null; while (userInput !== 'quit') { userInput = prompt('√œŒ· √„—«'); }", description: "«‰ Ÿ«— ≈œŒ«· «·„” Œœ„" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. do...while - Õ·ﬁ… ‰›¯–...»Ì‰„«
    // ============================================================
    {
        tag: "do-while",
        description: " ‰›¯– «·ﬂÊœ „—… Ê«Õœ… ⁄·Ï «·√ﬁ·° À„  ﬂ——Â ÿ«·„« «·‘—ÿ ’ÕÌÕ.  ›Õ’ «·‘—ÿ »⁄œ «· ‰›Ì–° ·–·ﬂ  ÷„‰  ‰›Ì– «·ﬂÊœ „—… Ê«Õœ… ⁄·Ï «·√ﬁ·",
        properties: [
            {
                name: "do...while",
                description: " ‰›Ì– „—… À„ «· ﬂ—«—",
                values: [
                    { value: "do { body } while (condition);", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "let i = 0; do { console.log(i); i++; } while (i < 5);", description: "ÿ»«⁄… 0 ≈·Ï 4" },
                    { value: "let i = 10; do { console.log(i); i++; } while (i < 5);", description: "Ì‰›– „—… Ê«Õœ… (ÌŸÂ— 10)" },
                    { value: "do { processItem(); } while (hasMoreItems());", description: "„⁄«·Ã… ⁄‰’— À„ «· Õﬁﬁ" },
                    { value: "let input; do { input = prompt('√œŒ· —ﬁ„«'); } while (isNaN(input));", description: "ÿ·» ≈œŒ«· ’ÕÌÕ" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. for...of - ·ﬂ· ⁄‰’— ›Ì «·„Ã„Ê⁄…
    // ============================================================
    {
        tag: "for-of",
        description: " „—¯ ⁄·Ï ﬂ· ﬁÌ„… ›Ì ⁄‰’— ﬁ«»· ·· ﬂ—«— (Iterable) „À· „’›Ê›…° ‰’° Map° Set° √Ê Generator",
        properties: [
            {
                name: "for...of",
                description: "«· ﬂ—«— ⁄·Ï «·ﬁÌ„",
                values: [
                    { value: "for (const item of iterable) { body }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "for (const num of [1, 2, 3]) { console.log(num); }", description: "«· ﬂ—«— ⁄·Ï „’›Ê›…" },
                    { value: "for (const char of 'hello') { console.log(char); }", description: "«· ﬂ—«— ⁄·Ï ‰’" },
                    { value: "for (const [key, value] of map) { console.log(key, value); }", description: "«· ﬂ—«— ⁄·Ï Map" },
                    { value: "for (const value of set) { console.log(value); }", description: "«· ﬂ—«— ⁄·Ï Set" },
                    { value: "for (const item of array) { process(item); }", description: "„⁄«·Ã… ﬂ· ⁄‰’— ›Ì «·„’›Ê›…" }
                ]
            },
            {
                name: "for...of „⁄ break/continue",
                description: "«” Œœ«„ break Ê continue ›Ì for...of",
                values: [
                    { value: "for (const num of [1, 2, 3, 4, 5]) { if (num > 3) break; console.log(num); }", description: "1, 2, 3" },
                    { value: "for (const num of [1, 2, 3, 4, 5]) { if (num === 2) continue; console.log(num); }", description: "1, 3, 4, 5" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. for...in - ·ﬂ· „› «Õ ›Ì «·ﬂ«∆‰
    // ============================================================
    {
        tag: "for-in",
        description: " „—¯ ⁄·Ï ﬂ· „› «Õ (Œ«’Ì…) ﬁ«»· ··⁄œ¯ (enumerable) ›Ì ﬂ«∆‰.  ‘„· «·Œ’«∆’ «·„Ê—ÊÀ… √Ì÷« («” Œœ„ hasOwnProperty ·· Õﬁﬁ)",
        properties: [
            {
                name: "for...in",
                description: "«· ﬂ—«— ⁄·Ï „›« ÌÕ «·ﬂ«∆‰",
                values: [
                    { value: "for (const key in object) { body }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "for (const key in {a: 1, b: 2}) { console.log(key, obj[key]); }", description: "a 1, b 2" },
                    { value: "for (const key in obj) { if (obj.hasOwnProperty(key)) { console.log(key); } }", description: "«· Õﬁﬁ „‰ «·„·ﬂÌ…" },
                    { value: "for (const key in person) { console.log(`${key}: ${person[key]}`); }", description: "ÿ»«⁄… Œ’«∆’ «·ﬂ«∆‰" }
                ]
            },
            {
                name: "for...in -  Õ–Ì—« ",
                description: "„ Ï  ” Œœ„ Ê„ Ï   Ã‰»",
                values: [
                    { value: " Ã‰» «” Œœ«„ for...in „⁄ «·„’›Ê›« ", description: "ﬁœ   ÷„‰ Œ’«∆’ ≈÷«›Ì…" },
                    { value: "«” Œœ„ hasOwnProperty ·· Õﬁﬁ", description: "· Ã‰» «·Œ’«∆’ «·„Ê—ÊÀ…" },
                    { value: "«” Œœ„ Object.keys() »œ·« „‰ for...in", description: "··„“Ìœ „‰ «· Õﬂ„" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. break - «· Êﬁ›
    // ============================================================
    {
        tag: "break",
        description: "Ìı‰ÂÌ «·Õ·ﬁ… √Ê switch ›Ê—« ÊÌŒ—Ã „‰Â«° ÊÌ Ã«Ê“ √Ì  ﬂ—«—«  „ »ﬁÌ…",
        properties: [
            {
                name: "break",
                description: "«·Œ—ÊÃ „‰ «·Õ·ﬁ…",
                values: [
                    { value: "if (condition) break;", description: "«·Œ—ÊÃ ⁄‰œ  Õﬁﬁ «·‘—ÿ" },
                    { value: "for (let i = 0; i < 10; i++) { if (i === 5) break; console.log(i); }", description: "0, 1, 2, 3, 4" },
                    { value: "while (true) { if (done) break; process(); }", description: "«·Œ—ÊÃ „‰ Õ·ﬁ… ·« ‰Â«∆Ì…" },
                    { value: "for (const item of items) { if (item.isComplete) break; process(item); }", description: "«· Êﬁ› ⁄‰œ ⁄‰’— „⁄Ì‰" }
                ]
            },
            {
                name: "labeled break",
                description: "«·Œ—ÊÃ „‰ Õ·ﬁ… „”„«… (··Õ·ﬁ«  «·„ œ«Œ·…)",
                values: [
                    { value: "outer: for (let i = 0; i < 3; i++) { for (let j = 0; j < 3; j++) { if (i === 1 && j === 1) break outer; console.log(i, j); } }", description: "0,0 0,1 0,2 1,0" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. continue - «· ŒÿÌ
    // ============================================================
    {
        tag: "continue",
        description: "Ì ŒÿÏ »ﬁÌ… «· ﬂ—«— «·Õ«·Ì ÊÌ‰ ﬁ· „»«‘—… ·· ﬂ—«— «· «·Ì ›Ì «·Õ·ﬁ…° œÊ‰ «·Œ—ÊÃ „‰ «·Õ·ﬁ…",
        properties: [
            {
                name: "continue",
                description: "«· ŒÿÌ ·· ﬂ—«— «· «·Ì",
                values: [
                    { value: "if (condition) continue;", description: "«· ŒÿÌ ⁄‰œ  Õﬁﬁ «·‘—ÿ" },
                    { value: "for (let i = 0; i < 10; i++) { if (i % 2 === 0) continue; console.log(i); }", description: "1, 3, 5, 7, 9 («·√⁄œ«œ «·›—œÌ…)" },
                    { value: "for (const item of items) { if (!item.isValid) continue; process(item); }", description: "„⁄«·Ã… «·⁄‰«’— «·’«·Õ… ›ﬁÿ" },
                    { value: "for (let i = 0; i < 5; i++) { if (i === 2) continue; console.log(i); }", description: "0, 1, 3, 4" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. forEach - «· ﬂ—«— ⁄·Ï «·„’›Ê›« 
    // ============================================================
    {
        tag: "forEach",
        description: "œ«·… „œ„Ã… ›Ì Array · ‰›Ì– ﬂÊœ ⁄·Ï ﬂ· ⁄‰’— ›Ì «·„’›Ê›…. ·«  ı—Ã⁄ ﬁÌ„… Ê·« Ì„ﬂ‰ «” Œœ«„ break √Ê continue ›ÌÂ« (Ì„ﬂ‰ «” Œœ«„ return ·· ŒÿÌ)",
        properties: [
            {
                name: "Array.forEach()",
                description: " ‰›Ì– œ«·… ⁄·Ï ﬂ· ⁄‰’—",
                values: [
                    { value: "array.forEach(item => { body });", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "[1, 2, 3].forEach(num => console.log(num));", description: "ÿ»«⁄… 1, 2, 3" },
                    { value: "items.forEach((item, index) => { console.log(index, item); });", description: "„⁄ «·›Â—”" },
                    { value: "data.forEach(item => { if (item.isActive) process(item); });", description: "„⁄«·Ã… «·⁄‰«’— «·‰‘ÿ…" },
                    { value: "array.forEach((item, index, arr) => { arr[index] = item * 2; });", description: " ⁄œÌ· «·„’›Ê›… «·√’·Ì…" }
                ]
            },
            {
                name: "forEach vs for...of",
                description: "„ﬁ«—‰… »Ì‰ forEach Ê for...of",
                values: [
                    { value: "«” Œœ„ forEach ··⁄„·Ì«  «·Ã«‰»Ì…", description: "„À· «·ÿ»«⁄… √Ê «· ⁄œÌ·" },
                    { value: "«” Œœ„ for...of „⁄ break/continue", description: "⁄‰œ «·Õ«Ã… ·· Õﬂ„ ›Ì «· œ›ﬁ" },
                    { value: "«” Œœ„ map/filter/reduce ·· ÕÊÌ·", description: "·≈‰‘«¡ „’›Ê›«  ÃœÌœ…" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ «·Õ·ﬁ« ",
        properties: [
            {
                name: "„À«· 1 - «·»ÕÀ ›Ì „’›Ê›…",
                description: "«·»ÕÀ ⁄‰ ⁄‰’— ›Ì „’›Ê›…",
                values: [
                    { value: "function findUser(users, id) { for (const user of users) { if (user.id === id) return user; } return null; }", description: "«·»ÕÀ ⁄‰ „” Œœ„" }
                ]
            },
            {
                name: "„À«· 2 -  ÕÊÌ· »Ì«‰« ",
                description: " ÕÊÌ· „’›Ê›… „‰ ﬂ«∆‰« ",
                values: [
                    { value: "const names = users.map(user => user.name);", description: "«” Œ—«Ã «·√”„«¡" },
                    { value: "const activeUsers = users.filter(user => user.isActive);", description: " ’›Ì… «·„” Œœ„Ì‰ «·‰‘ÿÌ‰" }
                ]
            },
            {
                name: "„À«· 3 -  Ã„Ì⁄ «·»Ì«‰« ",
                description: " Ã„Ì⁄ «·»Ì«‰«  »«” Œœ«„ Õ·ﬁ…",
                values: [
                    { value: "function groupByCategory(items) { const grouped = {}; for (const item of items) { if (!grouped[item.category]) { grouped[item.category] = []; } grouped[item.category].push(item); } return grouped; }", description: " Ã„Ì⁄ «·⁄‰«’— Õ”» «· ’‰Ì›" }
                ]
            },
            {
                name: "„À«· 4 -  ﬂ—«— Õ Ï «·‘—ÿ",
                description: "«” Œœ«„ while ··Õ·ﬁ«  €Ì— «·„ÕœÊœ…",
                values: [
                    { value: "let attempts = 0; let success = false; while (attempts < 3 && !success) { success = tryOperation(); attempts++; } if (!success) { console.log('›‘· »⁄œ 3 „Õ«Ê·« '); }", description: "≈⁄«œ… «·„Õ«Ê·… 3 „—« " }
                ]
            }
        ]
    },

    // ============================================================
    // 10. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ «·Õ·ﬁ« ",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ «·Õ·ﬁ« ",
                values: [
                    { value: "«” Œœ„ for...of „⁄ «·„’›Ê›« ", description: "√”Â· Ê√Ê÷ÊÕ „‰ for «· ﬁ·ÌœÌ…" },
                    { value: "«” Œœ„ for...in „⁄ «·ﬂ«∆‰«  ›ﬁÿ", description: "„⁄ hasOwnProperty ·· Õﬁﬁ" },
                    { value: "«” Œœ„ while ··‘—Êÿ «·œÌ‰«„ÌﬂÌ…", description: "⁄‰œ ⁄œ„ „⁄—›… ⁄œœ «· ﬂ—«—« " },
                    { value: "«” Œœ„ do...while · ﬂ—«— „—… Ê«Õœ… ⁄·Ï «·√ﬁ·", description: "· √ﬂÌœ  ‰›Ì– «·ﬂÊœ" },
                    { value: "«” Œœ„ forEach ··⁄„·Ì«  «·Ã«‰»Ì…", description: "„⁄ «·„’›Ê›« " },
                    { value: "«” Œœ„ map/filter/reduce ·· ÕÊÌ·", description: "»œ·« „‰ «·Õ·ﬁ«  «·ÌœÊÌ…" }
                ]
            },
            {
                name: "‰’«∆Õ «·√œ«¡",
                description: "‰’«∆Õ · Õ”Ì‰ √œ«¡ «·Õ·ﬁ« ",
                values: [
                    { value: "«Õ”» «·ÿÊ· Œ«—Ã «·Õ·ﬁ…", description: "const len = arr.length; for (let i = 0; i < len; i++)" },
                    { value: " Ã‰» «·Õ·ﬁ«  «·„ œ«Œ·… «·⁄„Ìﬁ…", description: "«” Œœ„ »‰Ì«  »Ì«‰«  √›÷·" },
                    { value: "«” Œœ„ for...of »œ·« „‰ forEach", description: "√”—⁄ ›Ì »⁄÷ «·„ ’›Õ« " }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ «·Õ·ﬁ« ",
                values: [
                    { value: "Õ·ﬁ… ·« ‰Â«∆Ì…", description: "while (true) »œÊ‰ break √Ê ‘—ÿ „ €Ì—" },
                    { value: " ⁄œÌ· «·„’›Ê›… √À‰«¡ «· ﬂ—«—", description: "ﬁœ Ì”»» ”·Êﬂ« €Ì— „ Êﬁ⁄" },
                    { value: "«” Œœ«„ == »œ·« „‰ ===", description: "›Ì ‘—Êÿ «·Õ·ﬁ« " },
                    { value: "‰”Ì«‰ let/const ›Ì ⁄œ«œ «·Õ·ﬁ…", description: "for (i = 0; i < 10; i++) // i  ’»Õ ⁄«„…" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsLoopsData = jsLoopsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsLoopsData;
}