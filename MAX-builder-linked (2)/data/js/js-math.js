// ============================================================
// js-math.js
// œÊ«· ÊÀÊ«»  «·—Ì«÷Ì«  (Math) ›Ì JavaScript
//  ‘—Õ Ã„Ì⁄ œÊ«· ÊÀÊ«»  Math «·„œ„Ã… „⁄ √„À·… Ê«” Œœ«„« 
// ============================================================

const jsMathData = [
    // ============================================================
    // 1. ÀÊ«»  Math
    // ============================================================
    {
        tag: "math-constants",
        description: "«·ÀÊ«»  «·—Ì«÷Ì… «·„œ„Ã… ›Ì ﬂ«∆‰ Math",
        properties: [
            {
                name: "Math.PI",
                description: "ﬁÌ„… «·‰”»… «· ﬁ—Ì»Ì… ? (ÕÊ«·Ì 3.14159)",
                values: [
                    { value: "Math.PI", description: "3.141592653589793" },
                    { value: "Math.PI * 2", description: "6.283185307179586 (2?)" },
                    { value: "Math.PI / 2", description: "1.5707963267948966 (?/2)" }
                ]
            },
            {
                name: "Math.E",
                description: "ﬁÌ„… e (√”«” «··Ê€«—Ì „ «·ÿ»Ì⁄Ì° ÕÊ«·Ì 2.71828)",
                values: [
                    { value: "Math.E", description: "2.718281828459045" },
                    { value: "Math.pow(Math.E, 1)", description: "2.718281828459045 (eπ)" }
                ]
            },
            {
                name: "Math.LN2",
                description: "«··Ê€«—Ì „ «·ÿ»Ì⁄Ì ··⁄œœ 2 (ÕÊ«·Ì 0.693)",
                values: [
                    { value: "Math.LN2", description: "0.6931471805599453" }
                ]
            },
            {
                name: "Math.LN10",
                description: "«··Ê€«—Ì „ «·ÿ»Ì⁄Ì ··⁄œœ 10 (ÕÊ«·Ì 2.302)",
                values: [
                    { value: "Math.LN10", description: "2.302585092994046" }
                ]
            },
            {
                name: "Math.LOG2E",
                description: "·Ê€«—Ì „ e ··√”«” 2 (ÕÊ«·Ì 1.442)",
                values: [
                    { value: "Math.LOG2E", description: "1.4426950408889634" }
                ]
            },
            {
                name: "Math.LOG10E",
                description: "·Ê€«—Ì „ e ··√”«” 10 (ÕÊ«·Ì 0.434)",
                values: [
                    { value: "Math.LOG10E", description: "0.4342944819032518" }
                ]
            },
            {
                name: "Math.SQRT1_2",
                description: "«·Ã–— «· —»Ì⁄Ì ·‹ 1/2 (ÕÊ«·Ì 0.707)",
                values: [
                    { value: "Math.SQRT1_2", description: "0.7071067811865476" }
                ]
            },
            {
                name: "Math.SQRT2",
                description: "«·Ã–— «· —»Ì⁄Ì ··⁄œœ 2 (ÕÊ«·Ì 1.414)",
                values: [
                    { value: "Math.SQRT2", description: "1.4142135623730951" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. œÊ«· «· ﬁ—Ì» (Rounding)
    // ============================================================
    {
        tag: "rounding-functions",
        description: "œÊ«· · ﬁ—Ì» «·√—ﬁ«„",
        properties: [
            // -------- round --------
            {
                name: "Math.round",
                description: "Ìıﬁ—ˆ¯» —ﬁ„« ⁄‘—Ì« ·√ﬁ—» ⁄œœ ’ÕÌÕ (0.5 Ìıﬁ—Û¯» ·√⁄·Ï)",
                values: [
                    { value: "Math.round(4.5); // 5", description: " ﬁ—Ì» 4.5" },
                    { value: "Math.round(4.4); // 4", description: " ﬁ—Ì» 4.4" },
                    { value: "Math.round(-4.5); // -4", description: " ﬁ—Ì» -4.5 (·√⁄·Ï)" },
                    { value: "Math.round(2.9); // 3", description: " ﬁ—Ì» 2.9" }
                ]
            },
            // -------- floor --------
            {
                name: "Math.floor",
                description: "Ìıﬁ—ˆ¯» —ﬁ„« ⁄‘—Ì« ·√ﬁ—» ⁄œœ ’ÕÌÕ √’€— „‰Â √Ê Ì”«ÊÌÂ",
                values: [
                    { value: "Math.floor(4.9); // 4", description: " ﬁ—Ì» 4.9 ·√”›·" },
                    { value: "Math.floor(4.1); // 4", description: " ﬁ—Ì» 4.1 ·√”›·" },
                    { value: "Math.floor(-4.1); // -5", description: " ﬁ—Ì» -4.1 ·√”›·" },
                    { value: "Math.floor(5.99); // 5", description: " ﬁ—Ì» 5.99 ·√”›·" }
                ]
            },
            // -------- ceil --------
            {
                name: "Math.ceil",
                description: "Ìıﬁ—ˆ¯» —ﬁ„« ⁄‘—Ì« ·√ﬁ—» ⁄œœ ’ÕÌÕ √ﬂ»— „‰Â √Ê Ì”«ÊÌÂ",
                values: [
                    { value: "Math.ceil(4.1); // 5", description: " ﬁ—Ì» 4.1 ·√⁄·Ï" },
                    { value: "Math.ceil(4.9); // 5", description: " ﬁ—Ì» 4.9 ·√⁄·Ï" },
                    { value: "Math.ceil(-4.1); // -4", description: " ﬁ—Ì» -4.1 ·√⁄·Ï" },
                    { value: "Math.ceil(5.01); // 6", description: " ﬁ—Ì» 5.01 ·√⁄·Ï" }
                ]
            },
            // -------- trunc --------
            {
                name: "Math.trunc",
                description: "ÌÕ–› «·Ã“¡ «·⁄‘—Ì „‰ «·—ﬁ„ œÊ‰  ﬁ—Ì»",
                values: [
                    { value: "Math.trunc(4.9); // 4", description: "Õ–› «·Ã“¡ «·⁄‘—Ì" },
                    { value: "Math.trunc(4.1); // 4", description: "Õ–› «·Ã“¡ «·⁄‘—Ì" },
                    { value: "Math.trunc(-4.1); // -4", description: "Õ–› «·Ã“¡ «·⁄‘—Ì" },
                    { value: "Math.trunc(5.99); // 5", description: "Õ–› «·Ã“¡ «·⁄‘—Ì" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. œÊ«· «·ﬁÊÏ Ê«·Ã–Ê—
    // ============================================================
    {
        tag: "power-functions",
        description: "œÊ«· ·Õ”«» «·ﬁÊÏ Ê«·Ã–Ê—",
        properties: [
            // -------- pow --------
            {
                name: "Math.pow",
                description: "Ì—›⁄ —ﬁ„« ≈·Ï ﬁÊ… (√”) „⁄Ì‰…",
                values: [
                    { value: "Math.pow(2, 3); // 8", description: "2≥" },
                    { value: "Math.pow(4, 0.5); // 2", description: "«·Ã–— «· —»Ì⁄Ì" },
                    { value: "Math.pow(10, 2); // 100", description: "10≤" },
                    { value: "Math.pow(5, 3); // 125", description: "5≥" }
                ]
            },
            // -------- sqrt --------
            {
                name: "Math.sqrt",
                description: "ÌÕ”» «·Ã–— «· —»Ì⁄Ì ·—ﬁ„ „ÊÃ»",
                values: [
                    { value: "Math.sqrt(16); // 4", description: "Ã–— 16" },
                    { value: "Math.sqrt(25); // 5", description: "Ã–— 25" },
                    { value: "Math.sqrt(2); // 1.414", description: "Ã–— 2" },
                    { value: "Math.sqrt(0); // 0", description: "Ã–— 0" }
                ]
            },
            // -------- cbrt --------
            {
                name: "Math.cbrt",
                description: "ÌÕ”» «·Ã–— «· ﬂ⁄Ì»Ì ··—ﬁ„",
                values: [
                    { value: "Math.cbrt(27); // 3", description: "Ã–—  ﬂ⁄Ì»Ì 27" },
                    { value: "Math.cbrt(8); // 2", description: "Ã–—  ﬂ⁄Ì»Ì 8" },
                    { value: "Math.cbrt(64); // 4", description: "Ã–—  ﬂ⁄Ì»Ì 64" }
                ]
            },
            // -------- hypot --------
            {
                name: "Math.hypot",
                description: "ÌÕ”» «·Ã–— «· —»Ì⁄Ì ·„Ã„Ê⁄ „—»⁄«  «·√—ﬁ«„ (Ê — «·„À·À «·ﬁ«∆„)",
                values: [
                    { value: "Math.hypot(3, 4); // 5", description: "3≤ + 4≤ = 25, ?25 = 5" },
                    { value: "Math.hypot(5, 12); // 13", description: "5≤ + 12≤ = 169, ?169 = 13" },
                    { value: "Math.hypot(1, 2, 3); // 3.741", description: "?(1+4+9)" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. œÊ«· «·„À·À«  (Trigonometry)
    // ============================================================
    {
        tag: "trigonometry-functions",
        description: "œÊ«· „À·ÀÌ… ··Õ”«»«  «·„ ﬁœ„…",
        properties: [
            // -------- sin --------
            {
                name: "Math.sin",
                description: "ÌÕ”» ÃÌ» «·“«ÊÌ… (»«·—«œÌ«‰)",
                values: [
                    { value: "Math.sin(Math.PI / 2); // 1", description: "sin(90∞)" },
                    { value: "Math.sin(0); // 0", description: "sin(0∞)" },
                    { value: "Math.sin(Math.PI); // 0", description: "sin(180∞)" }
                ]
            },
            // -------- cos --------
            {
                name: "Math.cos",
                description: "ÌÕ”» ÃÌ»  „«„ «·“«ÊÌ… (»«·—«œÌ«‰)",
                values: [
                    { value: "Math.cos(0); // 1", description: "cos(0∞)" },
                    { value: "Math.cos(Math.PI / 2); // 0", description: "cos(90∞)" },
                    { value: "Math.cos(Math.PI); // -1", description: "cos(180∞)" }
                ]
            },
            // -------- tan --------
            {
                name: "Math.tan",
                description: "ÌÕ”» Ÿ· «·“«ÊÌ… (»«·—«œÌ«‰)",
                values: [
                    { value: "Math.tan(Math.PI / 4); // 1", description: "tan(45∞)" },
                    { value: "Math.tan(0); // 0", description: "tan(0∞)" }
                ]
            },
            // -------- asin --------
            {
                name: "Math.asin",
                description: "ÌÕ”» ÃÌ» ⁄ﬂ”Ì (arcsin) («·ﬁÌ„… »«·—«œÌ«‰)",
                values: [
                    { value: "Math.asin(1); // ?/2", description: "arcsin(1)" },
                    { value: "Math.asin(0); // 0", description: "arcsin(0)" }
                ]
            },
            // -------- acos --------
            {
                name: "Math.acos",
                description: "ÌÕ”» ÃÌ»  „«„ ⁄ﬂ”Ì (arccos) («·ﬁÌ„… »«·—«œÌ«‰)",
                values: [
                    { value: "Math.acos(1); // 0", description: "arccos(1)" },
                    { value: "Math.acos(0); // ?/2", description: "arccos(0)" }
                ]
            },
            // -------- atan --------
            {
                name: "Math.atan",
                description: "ÌÕ”» Ÿ· ⁄ﬂ”Ì (arctan) («·ﬁÌ„… »«·—«œÌ«‰)",
                values: [
                    { value: "Math.atan(1); // ?/4", description: "arctan(1)" }
                ]
            },
            // -------- atan2 --------
            {
                name: "Math.atan2",
                description: "ÌÕ”» «·“«ÊÌ… »Ì‰ „ÕÊ— x Ê‰ﬁÿ… (y, x) (»«·—«œÌ«‰)",
                values: [
                    { value: "Math.atan2(1, 1); // ?/4", description: "45 œ—Ã…" },
                    { value: "Math.atan2(0, 1); // 0", description: "0 œ—Ã…" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. œÊ«· “«∆œÌ… (Hyperbolic)
    // ============================================================
    {
        tag: "hyperbolic-functions",
        description: "œÊ«· “«∆œÌ… ··Õ”«»«  «·„ ﬁœ„…",
        properties: [
            // -------- sinh --------
            {
                name: "Math.sinh",
                description: "ÌÕ”» «·ÃÌ» «·“«∆œÌ",
                values: [
                    { value: "Math.sinh(0); // 0", description: "sinh(0)" },
                    { value: "Math.sinh(1); // 1.175", description: "sinh(1)" }
                ]
            },
            // -------- cosh --------
            {
                name: "Math.cosh",
                description: "ÌÕ”» ÃÌ»  „«„ “«∆œÌ",
                values: [
                    { value: "Math.cosh(0); // 1", description: "cosh(0)" }
                ]
            },
            // -------- tanh --------
            {
                name: "Math.tanh",
                description: "ÌÕ”» «·Ÿ· «·“«∆œÌ",
                values: [
                    { value: "Math.tanh(0); // 0", description: "tanh(0)" }
                ]
            },
            // -------- asinh --------
            {
                name: "Math.asinh",
                description: "ÌÕ”» ÃÌ» ⁄ﬂ”Ì “«∆œÌ",
                values: [
                    { value: "Math.asinh(0); // 0", description: "asinh(0)" }
                ]
            },
            // -------- acosh --------
            {
                name: "Math.acosh",
                description: "ÌÕ”» ÃÌ»  „«„ ⁄ﬂ”Ì “«∆œÌ",
                values: [
                    { value: "Math.acosh(1); // 0", description: "acosh(1)" }
                ]
            },
            // -------- atanh --------
            {
                name: "Math.atanh",
                description: "ÌÕ”» Ÿ· ⁄ﬂ”Ì “«∆œÌ",
                values: [
                    { value: "Math.atanh(0); // 0", description: "atanh(0)" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. œÊ«· ·Ê€«—Ì „Ì… Ê√”Ì…
    // ============================================================
    {
        tag: "log-exp-functions",
        description: "œÊ«· ·Ê€«—Ì „Ì… Ê√”Ì…",
        properties: [
            // -------- log --------
            {
                name: "Math.log",
                description: "ÌÕ”» «··Ê€«—Ì „ «·ÿ»Ì⁄Ì (√”«” e) ··—ﬁ„",
                values: [
                    { value: "Math.log(Math.E); // 1", description: "log(e)" },
                    { value: "Math.log(1); // 0", description: "log(1)" },
                    { value: "Math.log(10); // 2.302", description: "log(10)" }
                ]
            },
            // -------- log10 --------
            {
                name: "Math.log10",
                description: "ÌÕ”» «··Ê€«—Ì „ ··√”«” 10",
                values: [
                    { value: "Math.log10(100); // 2", description: "log10(100)" },
                    { value: "Math.log10(10); // 1", description: "log10(10)" },
                    { value: "Math.log10(1); // 0", description: "log10(1)" }
                ]
            },
            // -------- log2 --------
            {
                name: "Math.log2",
                description: "ÌÕ”» «··Ê€«—Ì „ ··√”«” 2",
                values: [
                    { value: "Math.log2(8); // 3", description: "log2(8)" },
                    { value: "Math.log2(4); // 2", description: "log2(4)" },
                    { value: "Math.log2(1); // 0", description: "log2(1)" }
                ]
            },
            // -------- log1p --------
            {
                name: "Math.log1p",
                description: "ÌÕ”» «··Ê€«—Ì „ «·ÿ»Ì⁄Ì ·‹ (1 + x)",
                values: [
                    { value: "Math.log1p(0); // 0", description: "log(1)" },
                    { value: "Math.log1p(Math.E - 1); // 1", description: "log(e)" }
                ]
            },
            // -------- exp --------
            {
                name: "Math.exp",
                description: "ÌÕ”» e „—›Ê⁄… ·√” „⁄Ì‰",
                values: [
                    { value: "Math.exp(1); // 2.718", description: "eπ" },
                    { value: "Math.exp(0); // 1", description: "e?" },
                    { value: "Math.exp(2); // 7.389", description: "e≤" }
                ]
            },
            // -------- expm1 --------
            {
                name: "Math.expm1",
                description: "ÌÕ”» (e^x - 1)",
                values: [
                    { value: "Math.expm1(0); // 0", description: "e? - 1" },
                    { value: "Math.expm1(1); // 1.718", description: "eπ - 1" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. œÊ«· ≈Õ’«∆Ì…
    // ============================================================
    {
        tag: "statistical-functions",
        description: "œÊ«· ≈Õ’«∆Ì… √”«”Ì…",
        properties: [
            // -------- max --------
            {
                name: "Math.max",
                description: "Ìı—Ã⁄ √ﬂ»— —ﬁ„ „‰ »Ì‰ „Ã„Ê⁄… √—ﬁ«„ „ı„—Û¯—…",
                values: [
                    { value: "Math.max(3, 7, 2, 9, 1); // 9", description: "√ﬂ»— ﬁÌ„…" },
                    { value: "Math.max(...[3, 7, 2, 9, 1]); // 9", description: "„⁄ «·„’›Ê›« " },
                    { value: "Math.max(5, 10, 15); // 15", description: "√ﬂ»— »Ì‰ À·«À…" }
                ]
            },
            // -------- min --------
            {
                name: "Math.min",
                description: "Ìı—Ã⁄ √’€— —ﬁ„ „‰ »Ì‰ „Ã„Ê⁄… √—ﬁ«„ „ı„—Û¯—…",
                values: [
                    { value: "Math.min(3, 7, 2, 9, 1); // 1", description: "√’€— ﬁÌ„…" },
                    { value: "Math.min(...[3, 7, 2, 9, 1]); // 1", description: "„⁄ «·„’›Ê›« " },
                    { value: "Math.min(5, 10, 15); // 5", description: "√’€— »Ì‰ À·«À…" }
                ]
            },
            // -------- random --------
            {
                name: "Math.random",
                description: "Ìı‰ Ã —ﬁ„« ⁄‘—Ì« ⁄‘Ê«∆Ì« »Ì‰ 0 (‘«„·) Ê1 (€Ì— ‘«„·)",
                values: [
                    { value: "Math.random();", description: "—ﬁ„ ⁄‘Ê«∆Ì 0-1" },
                    { value: "Math.random() * 10;", description: "—ﬁ„ ⁄‘Ê«∆Ì 0-10" },
                    { value: "Math.floor(Math.random() * 100);", description: "⁄œœ ’ÕÌÕ ⁄‘Ê«∆Ì 0-99" },
                    { value: "Math.random() * (max - min) + min;", description: "—ﬁ„ ⁄‘Ê«∆Ì »Ì‰ min Êmax" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. œÊ«· √Œ—Ï
    // ============================================================
    {
        tag: "other-functions",
        description: "œÊ«· √Œ—Ï „›Ìœ…",
        properties: [
            // -------- abs --------
            {
                name: "Math.abs",
                description: "Ìı—Ã⁄ «·ﬁÌ„… «·„ÿ·ﬁ… («·„ÊÃ»… œ«∆„«) ·—ﬁ„",
                values: [
                    { value: "Math.abs(-5); // 5", description: "«·ﬁÌ„… «·„ÿ·ﬁ…" },
                    { value: "Math.abs(5); // 5", description: "«·ﬁÌ„… «·„ÿ·ﬁ…" },
                    { value: "Math.abs(0); // 0", description: "«·ﬁÌ„… «·„ÿ·ﬁ…" }
                ]
            },
            // -------- sign --------
            {
                name: "Math.sign",
                description: "Ìı—Ã⁄ 1 ≈‰ ﬂ«‰ «·—ﬁ„ „ÊÃ»«° -1 ≈‰ ﬂ«‰ ”«·»«° 0 ≈‰ ﬂ«‰ ’›—«",
                values: [
                    { value: "Math.sign(5); // 1", description: "„ÊÃ»" },
                    { value: "Math.sign(-5); // -1", description: "”«·»" },
                    { value: "Math.sign(0); // 0", description: "’›—" }
                ]
            },
            // -------- imul --------
            {
                name: "Math.imul",
                description: "Ì÷—» —ﬁ„Ì‰ ﬂ√⁄œ«œ ’ÕÌÕ… 32 »  ÊÌı—Ã⁄ «·‰« Ã („›Ìœ ··⁄„·Ì«  » ¯Ì…)",
                values: [
                    { value: "Math.imul(2, 3); // 6", description: "2 ◊ 3" },
                    { value: "Math.imul(0x7fffffff, 2); // -2", description: " Ã«Ê“ 32 » " }
                ]
            },
            // -------- clz32 --------
            {
                name: "Math.clz32",
                description: "Ìı—Ã⁄ ⁄œœ «·√’›«— «·»«œ∆… ›Ì  „ÀÌ· 32 »  ··—ﬁ„",
                values: [
                    { value: "Math.clz32(1); // 31", description: "√’›«— »«œ∆…" },
                    { value: "Math.clz32(0); // 32", description: "Ã„Ì⁄Â« √’›«—" }
                ]
            },
            // -------- fround --------
            {
                name: "Math.fround",
                description: "Ìıﬁ—ˆ¯» «·—ﬁ„ ≈·Ï √ﬁ—» ﬁÌ„… 32 »  (Float32)",
                values: [
                    { value: "Math.fround(1.337); // 1.337", description: " ﬁ—Ì» ≈·Ï 32 » " },
                    { value: "Math.fround(1.5); // 1.5", description: " ﬁ—Ì» ≈·Ï 32 » " }
                ]
            }
        ]
    },

    // ============================================================
    // 9. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ œÊ«· «·—Ì«÷Ì« ",
        properties: [
            {
                name: "„À«· 1 - Õ”«» „ÕÌÿ Ê„”«Õ… œ«∆—…",
                description: "«” Œœ«„ ? ›Ì «·Õ”«»«  «·Â‰œ”Ì…",
                values: [
                    { value: "function circleArea(radius) { return Math.PI * radius ** 2; } function circleCircumference(radius) { return 2 * Math.PI * radius; }", description: "„”«Õ… Ê„ÕÌÿ œ«∆—…" }
                ]
            },
            {
                name: "„À«· 2 - —ﬁ„ ⁄‘Ê«∆Ì »Ì‰ ﬁÌ„ Ì‰",
                description: " Ê·Ìœ —ﬁ„ ⁄‘Ê«∆Ì ›Ì ‰ÿ«ﬁ „Õœœ",
                values: [
                    { value: "function randomBetween(min, max) { return Math.random() * (max - min) + min; } function randomIntBetween(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }", description: "√—ﬁ«„ ⁄‘Ê«∆Ì…" }
                ]
            },
            {
                name: "„À«· 3 - Õ”«» «·„”«›… »Ì‰ ‰ﬁÿ Ì‰",
                description: "«” Œœ«„ Math.hypot ·Õ”«» «·„”«›… «·≈ﬁ·ÌœÌ…",
                values: [
                    { value: "function distance(x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); }", description: "«·„”«›… »Ì‰ ‰ﬁÿ Ì‰" }
                ]
            },
            {
                name: "„À«· 4 -  ﬁ—Ì» «·√—ﬁ«„",
                description: " ﬁ—Ì» «·√—ﬁ«„ ·„‰«“· ⁄‘—Ì… „Õœœ…",
                values: [
                    { value: "function roundTo(value, decimals) { const factor = Math.pow(10, decimals); return Math.round(value * factor) / factor; }", description: " ﬁ—Ì» ·„‰«“· ⁄‘—Ì…" }
                ]
            },
            {
                name: "„À«· 5 -  ÕÊÌ· «·œ—Ã«  ≈·Ï —«œÌ«‰ Ê«·⁄ﬂ”",
                description: "«· ÕÊÌ· »Ì‰ ÊÕœ«  «·“Ê«Ì«",
                values: [
                    { value: "function toRadians(degrees) { return degrees * Math.PI / 180; } function toDegrees(radians) { return radians * 180 / Math.PI; }", description: " ÕÊÌ· «·“Ê«Ì«" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ œÊ«· «·—Ì«÷Ì« ",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ «·—Ì«÷Ì« ",
                values: [
                    { value: "«” Œœ„ ** »œ·« „‰ Math.pow", description: "›Ì «·≈’œ«—«  «·ÕœÌÀ…" },
                    { value: "«” Œœ„ Math.hypot ··„”«›« ", description: "»œ·« „‰ sqrt ÌœÊÌ«" },
                    { value: "«” Œœ„ Math.trunc ·≈“«·… «·Ã“¡ «·⁄‘—Ì", description: "»œ·« „‰ parseInt" },
                    { value: "«” Œœ„ Math.sign ·≈‘«—… «·—ﬁ„", description: "·· Õﬁﬁ „‰ «·≈‘«—…" }
                ]
            },
            {
                name: "‰’«∆Õ «·√œ«¡",
                description: "‰’«∆Õ · Õ”Ì‰ √œ«¡ «·⁄„·Ì«  «·—Ì«÷Ì…",
                values: [
                    { value: " Ã‰» Math.pow ›Ì «·Õ·ﬁ«  «·ﬂ»Ì—…", description: "«” Œœ„ **" },
                    { value: "«” Œœ„ «·Ê’Ê· «·„»«‘— ··ÀÊ«» ", description: "Math.PI »œ·« „‰ «·Õ”«»" },
                    { value: " Ã‰» Math.random ›Ì «·Õ·ﬁ«  «·ÀﬁÌ·…", description: "≈–« ﬂ«‰ „„ﬂ‰«" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ œÊ«· «·—Ì«÷Ì« ",
                values: [
                    { value: "‰”Ì«‰ √‰ Math.sin/cos/tan  ﬁ»· »«·—«œÌ«‰", description: "Ê·Ì” «·œ—Ã« " },
                    { value: "‰”Ì«‰ √‰ Math.random  ı—Ã⁄ 0-1", description: "Ê·Ì” 0-100" },
                    { value: "«·Œ·ÿ »Ì‰ Math.floor Ê Math.trunc", description: "··√⁄œ«œ «·”«·»…" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsMathData = jsMathData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsMathData;
}