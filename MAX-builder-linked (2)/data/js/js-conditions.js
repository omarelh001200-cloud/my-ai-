// ============================================================
// js-conditions.js
// «·‘—Êÿ (Conditions) ›Ì JavaScript
//  ‘—Õ Ã„Ì⁄ √œÊ«  «· Õﬂ„ ›Ì «· œ›ﬁ «·‘—ÿÌ: if, else, switch, ternary
// ============================================================

const jsConditionsData = [
    // ============================================================
    // 1. if - «·‘—ÿ «·√”«”Ì
    // ============================================================
    {
        tag: "if",
        description: "Ì‰›¯– ﬂ ·… „‰ «·ﬂÊœ ›ﬁÿ ≈–« ﬂ«‰ «·‘—ÿ ’ÕÌÕ« (true). ≈–« ﬂ«‰ «·‘—ÿ Œ«ÿ∆« (false)° Ì „  ŒÿÌ «·ﬂ ·… »«·ﬂ«„·",
        properties: [
            {
                name: "if",
                description: "«·‘—ÿ «·√”«”Ì",
                values: [
                    { value: "if (condition) { body }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "if (age >= 18) { console.log('»«·€'); }", description: "„À«·: «· Õﬁﬁ „‰ «·⁄„—" },
                    { value: "if (isLoggedIn) { showDashboard(); }", description: "„À«·: «· Õﬁﬁ „‰  ”ÃÌ· «·œŒÊ·" },
                    { value: "if (x > 0) { console.log('„ÊÃ»'); }", description: "„À«·: «· Õﬁﬁ „‰ «·≈‘«—…" },
                    { value: "if (user && user.name) { console.log(user.name); }", description: "«· Õﬁﬁ „‰ ÊÃÊœ Œ«’Ì…" },
                    { value: "if (data && data.length > 0) { processData(data); }", description: "«· Õﬁﬁ „‰ ÊÃÊœ »Ì«‰« " },
                    { value: "if (typeof value === 'string') { console.log('‰’'); }", description: "«· Õﬁﬁ „‰ «·‰Ê⁄" },
                    { value: "if (Array.isArray(items)) { items.forEach(process); }", description: "«· Õﬁﬁ „‰ ﬂÊ‰Â „’›Ê›…" },
                    { value: "if (value !== null && value !== undefined) { useValue(value); }", description: "«· Õﬁﬁ „‰ ⁄œ„ «·›—«€" }
                ]
            },
            {
                name: "if - ‘—Êÿ „—ﬂ»…",
                description: "«” Œœ«„ «·⁄Ê«„· «·„‰ÿﬁÌ… ›Ì «·‘—ÿ",
                values: [
                    { value: "if (age >= 18 && age <= 60) { ... }", description: "Ê (AND) - ﬂ· «·‘—Êÿ ’ÕÌÕ…" },
                    { value: "if (role === 'admin' || role === 'manager') { ... }", description: "√Ê (OR) - ‘—ÿ Ê«Õœ ’ÕÌÕ" },
                    { value: "if (!isDeleted) { ... }", description: "‰›Ì (NOT) - «·‘—ÿ Œ«ÿ∆" },
                    { value: "if (score > 90 && score <= 100) { grade = 'A'; }", description: "‰ÿ«ﬁ œ—Ã« " },
                    { value: "if (user && user.age >= 18) { ... }", description: "«· Õﬁﬁ „‰ ÊÃÊœ «·ﬂ«∆‰ √Ê·«" },
                    { value: "if ((x > 0 && x < 10) || (x > 20 && x < 30)) { ... }", description: "‘—Êÿ „—ﬂ»… „⁄ﬁœ…" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. if...else - ≈–«...Ê≈·«
    // ============================================================
    {
        tag: "if-else",
        description: "Ì‰›¯– ﬂ ·… ≈–« ﬂ«‰ «·‘—ÿ ’ÕÌÕ«° Êﬂ ·… √Œ—Ï ≈–« ﬂ«‰ «·‘—ÿ Œ«ÿ∆«",
        properties: [
            {
                name: "if...else",
                description: "›—⁄«‰: ’ÕÌÕ ÊŒ«ÿ∆",
                values: [
                    { value: "if (condition) { ifBody } else { elseBody }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "if (age >= 18) { console.log('»«·€'); } else { console.log('ﬁ«’—'); }", description: "„À«·: «·⁄„—" },
                    { value: "if (isLoggedIn) { showDashboard(); } else { showLogin(); }", description: "„À«·:  ”ÃÌ· «·œŒÊ·" },
                    { value: "if (score >= 50) { result = '‰Ã«Õ'; } else { result = '—”Ê»'; }", description: "„À«·: «·‰Ã«Õ Ê«·—”Ê»" },
                    { value: "if (hasPermission) { executeAction(); } else { showError('€Ì— „’—Õ'); }", description: "„À«·: «·’·«ÕÌ« " },
                    { value: "if (x > 0) { console.log('„ÊÃ»'); } else if (x < 0) { console.log('”«·»'); } else { console.log('’›—'); }", description: "if...else if...else" }
                ]
            },
            {
                name: "if...else - „ œ«Œ·",
                description: " œ«Œ· «·‘—Êÿ œ«Œ· »⁄÷Â«",
                values: [
                    { value: "if (age >= 18) { if (hasID) { console.log('„”„ÊÕ'); } else { console.log('„ÿ·Ê» ÂÊÌ…'); } }", description: "‘—ÿ œ«Œ· ‘—ÿ" },
                    { value: "if (user) { if (user.isActive) { console.log('‰‘ÿ'); } else { console.log('€Ì— ‰‘ÿ'); } }", description: "«· Õﬁﬁ „‰ «·ﬂ«∆‰ √Ê·«" },
                    { value: "if (loggedIn) { if (isAdmin) { showAdminPanel(); } else { showUserPanel(); } } else { showLoginPage(); }", description: "À·«À… „” ÊÌ« " }
                ]
            }
        ]
    },

    // ============================================================
    // 3. else if - Ê≈·« ≈–«
    // ============================================================
    {
        tag: "else-if",
        description: "Ì÷Ì› ‘—ÿ« ≈÷«›Ì« Ìı›Õ’ ›ﬁÿ ≈–« ›‘· «·‘—ÿ «·√Ê· (Ê«·‘—Êÿ «·”«»ﬁ…)",
        properties: [
            {
                name: "else if",
                description: "‘—Êÿ „ ⁄œœ…",
                values: [
                    { value: "if (score >= 90) { grade = 'A'; } else if (score >= 80) { grade = 'B'; } else if (score >= 70) { grade = 'C'; } else { grade = 'F'; }", description: " ÕœÌœ «·œ—Ã…" },
                    { value: "if (day === 1) { console.log('«·√Õœ'); } else if (day === 2) { console.log('«·≈À‰Ì‰'); } else if (day === 3) { console.log('«·À·«À«¡'); } else { console.log('ÌÊ„ ¬Œ—'); }", description: "√Ì«„ «·√”»Ê⁄" },
                    { value: "if (status === 'success') { handleSuccess(); } else if (status === 'error') { handleError(); } else if (status === 'loading') { showLoading(); } else { handleUnknown(); }", description: "Õ«·«  „Œ ·›…" },
                    { value: "if (temperature > 40) { console.log('Õ«— Ãœ«'); } else if (temperature > 30) { console.log('Õ«—'); } else if (temperature > 20) { console.log('„⁄ œ·'); } else { console.log('»«—œ'); }", description: " ’‰Ì› œ—Ã«  «·Õ—«—…" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. switch - «· »œÌ·
    // ============================================================
    {
        tag: "switch",
        description: "Ìﬁ«—‰ ﬁÌ„… Ê«Õœ… »⁄œ… Õ«·«  „Õ „·… ÊÌ‰›¯– «·ﬂÊœ «·„ÿ«»ﬁ ··Õ«·… «·√Ê·Ï «· Ì  ÿ«»ﬁ «·ﬁÌ„…  „«„« (===)",
        properties: [
            {
                name: "switch",
                description: "«· »œÌ· »Ì‰ ⁄œ… Õ«·« ",
                values: [
                    { value: "switch (day) { case 1: console.log('«·√Õœ'); break; case 2: console.log('«·≈À‰Ì‰'); break; default: console.log('ÌÊ„ ¬Œ—'); }", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "switch (status) { case 'success': handleSuccess(); break; case 'error': handleError(); break; default: handleUnknown(); }", description: "Õ«·«  „Œ ·›…" },
                    { value: "switch (color) { case 'red': case 'blue': console.log('·Ê‰ œ«›∆'); break; case 'green': console.log('·Ê‰ ÿ»Ì⁄…'); break; }", description: "Õ«·«  „ ⁄œœ… ·‰›” «·ﬂÊœ" },
                    { value: "switch (true) { case age >= 18: console.log('»«·€'); break; case age >= 13: console.log('„—«Âﬁ'); break; default: console.log('ÿ›·'); }", description: "«” Œœ«„ switch „⁄ true („ﬁ«—‰« )" },
                    { value: "switch (fruit) { case 'apple': case 'pear': console.log('›«ﬂÂ…'); break; case 'carrot': console.log('Œ÷«—'); break; default: console.log('€Ì— „⁄—Ê›'); }", description: " ’‰Ì› «·√ÿ⁄„…" },
                    { value: "switch (method) { case 'GET': return fetchData(); case 'POST': return createData(); case 'PUT': return updateData(); case 'DELETE': return deleteData(); default: throw new Error('ÿ—Ìﬁ… €Ì— „⁄—Ê›…'); }", description: "„⁄«·Ã… ÿ—ﬁ API" }
                ]
            },
            {
                name: "switch - break",
                description: "break Ì„‰⁄  ‰›Ì– «·Õ«·«  «· «·Ì… (Fall-through)",
                values: [
                    { value: "switch (x) { case 1: console.log('Ê«Õœ'); break; case 2: console.log('«À‰«‰'); break; }", description: "„⁄ break" },
                    { value: "switch (x) { case 1: console.log('Ê«Õœ'); case 2: console.log('«À‰«‰'); }", description: "»œÊ‰ break (Ì‰›– «·ﬂ·)" },
                    { value: "switch (x) { case 1: console.log('Ê«Õœ'); break; default: console.log('«› —«÷Ì'); }", description: "default ›Ì «·‰Â«Ì…" }
                ]
            },
            {
                name: "switch - default",
                description: "Õ«·… «› —«÷Ì…  ı‰›¯– ≈–« ·„  ÿ«»ﬁ √Ì Õ«·…",
                values: [
                    { value: "switch (fruit) { case 'apple': console.log(' ›«Õ'); break; default: console.log('›«ﬂÂ… √Œ—Ï'); }", description: "default" },
                    { value: "switch (grade) { case 'A': console.log('„„ «“'); break; default: console.log('ÃÌœ'); }", description: "default „⁄ Õ«·« " },
                    { value: "switch (lang) { case 'ar': return '„—Õ»«'; case 'en': return 'Hello'; default: return '„—Õ»«'; }", description: "default ﬂﬁÌ„… «Õ Ì«ÿÌ…" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. Ternary Operator - «·⁄«„· «·À·«ÀÌ
    // ============================================================
    {
        tag: "ternary",
        description: "ÿ—Ìﬁ… „Œ ’—… ·ﬂ «»… if...else ›Ì ”ÿ— Ê«Õœ Ìı—Ã⁄ ﬁÌ„…. «·’Ì€…: condition ? valueIfTrue : valueIfFalse",
        properties: [
            {
                name: "?: (Ternary Operator)",
                description: "«·‘—ÿ «·„Œ ’—",
                values: [
                    { value: "const result = age >= 18 ? '»«·€' : 'ﬁ«’—';", description: "«·’Ì€… «·√”«”Ì…" },
                    { value: "const message = isLoggedIn ? '„—Õ»«' : '«·—Ã«¡  ”ÃÌ· «·œŒÊ·';", description: "—”«∆· Õ«·…" },
                    { value: "const className = isActive ? 'active' : 'inactive';", description: "›∆«  CSS" },
                    { value: "const price = isMember ? 10 : 20;", description: "√”⁄«— Õ”» «·Õ«·…" },
                    { value: "const canVote = (age >= 18 && isCitizen) ? '‰⁄„' : '·«';", description: "‘—ÿ „—ﬂ»" },
                    { value: "const status = isLoading ? 'Ã«—Ì «· Õ„Ì·...' : data ? ' „ «· Õ„Ì·' : '·«  ÊÃœ »Ì«‰« ';", description: "À·«ÀÌ „ œ«Œ· »”Ìÿ" }
                ]
            },
            {
                name: "Ternary - „ œ«Œ·",
                description: " œ«Œ· «·⁄«„· «·À·«ÀÌ («” Œœ„ »Õ–—)",
                values: [
                    { value: "const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';", description: "À·«ÀÌ „ œ«Œ· („‘«»Â ·‹ if...else if)" },
                    { value: "const result = x > 0 ? '„ÊÃ»' : x < 0 ? '”«·»' : '’›—';", description: "À·«ÀÌ „ œ«Œ· »”Ìÿ" },
                    { value: "const message = user ? user.name ? `„—Õ»« ${user.name}` : '„—Õ»«' : '«·—Ã«¡  ”ÃÌ· «·œŒÊ·';", description: "À·«ÀÌ „ œ«Œ· „⁄ ﬂ«∆‰" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. «·‘—ÿ «·„Œ ’— (Short-circuit Evaluation)
    // ============================================================
    {
        tag: "short-circuit",
        description: "«” Œœ«„ «·⁄Ê«„· «·„‰ÿﬁÌ… && Ê || · ‰›Ì– ﬂÊœ ‘—ÿÌ »ÿ—Ìﬁ… „Œ ’—…",
        properties: [
            {
                name: "&& (AND) - «·‘—ÿ «·„Œ ’—",
                description: "Ì‰›¯– «·ÿ—› «·À«‰Ì ›ﬁÿ ≈–« ﬂ«‰ «·√Ê· ’ÕÌÕ« (truthy)",
                values: [
                    { value: "isLoggedIn && showDashboard();", description: "Ì⁄—÷ ·ÊÕ… «· Õﬂ„ ≈–« ﬂ«‰ „”Ã·«" },
                    { value: "user && user.name && console.log(user.name);", description: "«· Õﬁﬁ „‰ ÊÃÊœ «·ﬂ«∆‰ Ê«·Œ«’Ì…" },
                    { value: "isActive && isAdmin && showAdminPanel();", description: "‘—ÿ«‰ „⁄«" },
                    { value: "debug && console.log('Debug mode');", description: "ÿ»«⁄… ›ﬁÿ ›Ì Ê÷⁄ «· ’ÕÌÕ" },
                    { value: "data && data.length > 0 && processData(data);", description: "„⁄«·Ã… «·»Ì«‰«  ›ﬁÿ ≈–« ﬂ«‰  „ÊÃÊœ…" }
                ]
            },
            {
                name: "|| (OR) - «·ﬁÌ„… «·«Õ Ì«ÿÌ…",
                description: "Ì” Œœ„ «·ÿ—› «·À«‰Ì ≈–« ﬂ«‰ «·√Ê· Œ«ÿ∆« (falsy)",
                values: [
                    { value: "const name = userName || '“«∆—';", description: "«” Œœ«„ ﬁÌ„… «Õ Ì«ÿÌ…" },
                    { value: "const count = items || [];", description: "„’›Ê›… ›«—€… ≈–« ·„  ﬂ‰ „ÊÃÊœ…" },
                    { value: "const config = userConfig || defaultConfig;", description: "≈⁄œ«œ«  «› —«÷Ì…" },
                    { value: "const color = selectedColor || '#000';", description: "·Ê‰ «› —«÷Ì" },
                    { value: "const callback = fn || (() => {});", description: "œ«·… «› —«÷Ì… ›«—€…" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. Nullish Coalescing (??)
    // ============================================================
    {
        tag: "nullish-coalescing",
        description: "«·⁄«„· ?? Ìı—Ã⁄ «·ÿ—› «·À«‰Ì ›ﬁÿ ≈–« ﬂ«‰ «·√Ê· null √Ê undefined (⁄·Ï ⁄ﬂ” || «·–Ì Ì Ã«Â· √Ì ﬁÌ„… falsy)",
        properties: [
            {
                name: "?? (Nullish Coalescing)",
                description: "œ„Ã ⁄‰œ «·›—«€",
                values: [
                    { value: "const count = value ?? 0;", description: "0 ›ﬁÿ ≈–« ﬂ«‰  value null √Ê undefined" },
                    { value: "const name = input ?? '„ÃÂÊ·';", description: "ﬁÌ„… «› —«÷Ì…" },
                    { value: "const config = userSettings ?? defaultSettings;", description: "≈⁄œ«œ«  «› —«÷Ì…" },
                    { value: "const items = data ?? [];", description: "„’›Ê›… ›«—€…" },
                    { value: "const timeout = settings.timeout ?? 5000;", description: "ﬁÌ„… «› —«÷Ì… ·Œ«’Ì…" },
                    { value: "const cache = storage.get('key') ?? {};", description: "ﬂ«∆‰ ›«—€" }
                ]
            },
            {
                name: "«·›—ﬁ »Ì‰ ?? Ê ||",
                description: "?? Ì Õﬁﬁ ›ﬁÿ „‰ null Ê undefined° »Ì‰„« || Ì Õﬁﬁ „‰ ﬂ· «·ﬁÌ„ falsy",
                values: [
                    { value: "0 ?? 5; // 0", description: "?? Ì —ﬂ 0 ·√‰Â ·Ì” null Ê·« undefined" },
                    { value: "0 || 5; // 5", description: "|| Ì⁄ »— 0 falsy" },
                    { value: "\"\" ?? '‰’'; // ''", description: "?? Ì —ﬂ «·‰’ «·›«—€" },
                    { value: "\"\" || '‰’'; // '‰’'", description: "|| Ì⁄ »— «·‰’ «·›«—€ falsy" },
                    { value: "false ?? true; // false", description: "?? Ì —ﬂ false" },
                    { value: "false || true; // true", description: "|| Ì⁄ »— false falsy" },
                    { value: "null ?? '«› —«÷Ì'; // '«› —«÷Ì'", description: "?? Ì—Ï null" },
                    { value: "undefined ?? '«› —«÷Ì'; // '«› —«÷Ì'", description: "?? Ì—Ï undefined" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. Optional Chaining (?.) - «·”·”·… «·¬„‰…
    // ============================================================
    {
        tag: "optional-chaining",
        description: "Ìﬁ—√ Œ«’Ì… „ œ«Œ·… œÊ‰ √‰ Ìı”»» Œÿ√ ≈–« ﬂ«‰ √Õœ «·„” ÊÌ«  null √Ê undefined (Ì⁄Ìœ undefined »œ·« „‰ Œÿ√)",
        properties: [
            {
                name: "?. (Optional Chaining)",
                description: "«·Ê’Ê· «·¬„‰ ··Œ’«∆’",
                values: [
                    { value: "user?.name", description: "Ì⁄Ìœ undefined ≈–« ﬂ«‰ user null/undefined" },
                    { value: "user?.address?.city", description: "”·”·… ¬„‰…" },
                    { value: "user?.getFullName?.()", description: "«” œ⁄«¡ œ«·… ¬„‰" },
                    { value: "users?.[0]?.name", description: "«·Ê’Ê· ≈·Ï „’›Ê›… ¬„‰" },
                    { value: "config?.api?.timeout ?? 5000", description: "„⁄ ?? ·≈⁄ÿ«¡ ﬁÌ„… «› —«÷Ì…" },
                    { value: "obj?.nested?.property?.deep ?? '«› —«÷Ì'", description: "”·”·… ⁄„Ìﬁ… „⁄ ﬁÌ„… «› —«÷Ì…" }
                ]
            },
            {
                name: "Optional Chaining „⁄ «·œÊ«·",
                description: "«” œ⁄«¡ œÊ«· ¬„‰",
                values: [
                    { value: "obj?.method?.();", description: "Ì” œ⁄Ì method ›ﬁÿ ≈–« ﬂ«‰ „ÊÃÊœ«" },
                    { value: "array?.[0]?.toUpperCase?.();", description: "”·”·… ﬂ«„·… ¬„‰…" },
                    { value: "calculator?.add?.(2, 3) ?? '«·¬·… €Ì— „ Ê›—…';", description: "«” œ⁄«¡ ¬„‰ „⁄ ﬁÌ„… «› —«÷Ì…" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ «·‘—Êÿ",
        properties: [
            {
                name: "„À«· 1 - «· Õﬁﬁ „‰ ’Õ… «·‰„Ê–Ã",
                description: "«· Õﬁﬁ „‰ ’Õ… «·»Ì«‰« ",
                values: [
                    { value: "function validateForm(data) { if (!data.name) { return '«·«”„ „ÿ·Ê»'; } if (!data.email) { return '«·»—Ìœ „ÿ·Ê»'; } if (!data.email.includes('@')) { return '»—Ìœ €Ì— ’ÕÌÕ'; } if (!data.password || data.password.length < 6) { return 'ﬂ·„… «·„—Ê— ÌÃ» √‰  ﬂÊ‰ 6 √Õ—› ⁄·Ï «·√ﬁ·'; } return '’«·Õ'; }", description: "œ«·… «· Õﬁﬁ „‰ «·‰„Ê–Ã" }
                ]
            },
            {
                name: "„À«· 2 - „⁄«·Ã… Õ«·… API",
                description: "„⁄«·Ã… «” Ã«»«  API",
                values: [
                    { value: "async function fetchData(url) { try { const res = await fetch(url); if (!res.ok) { throw new Error('›‘· «·ÿ·»'); } const data = await res.json(); if (data && data.length > 0) { return data; } else { return []; } } catch (error) { console.error(error); return null; } }", description: "„⁄«·Ã… API ﬂ«„·…" }
                ]
            },
            {
                name: "„À«· 3 - ≈⁄œ«œ«  «· ÿ»Ìﬁ",
                description: "«” Œœ«„ «·ﬁÌ„ «·«Õ Ì«ÿÌ…",
                values: [
                    { value: "const appConfig = { theme: userSettings?.theme ?? 'light', language: userSettings?.language ?? 'ar', notifications: userSettings?.notifications ?? true, timeout: userSettings?.timeout ?? 5000, retryCount: userSettings?.retryCount ?? 3 };", description: "≈⁄œ«œ«  „⁄ ﬁÌ„ «› —«÷Ì…" }
                ]
            },
            {
                name: "„À«· 4 - ⁄—÷ „Õ ÊÏ ‘—ÿÌ",
                description: "⁄—÷ „Õ ÊÏ »‰«¡ ⁄·Ï Õ«·…",
                values: [
                    { value: "function render() { if (isLoading) return '<div>Ã«—Ì «· Õ„Ì·...</div>'; if (error) return '<div>ÕœÀ Œÿ√: ' + error.message + '</div>'; if (!data || data.length === 0) return '<div>·«  ÊÃœ »Ì«‰« </div>'; return data.map(item => `<div>${item.name}</div>`).join(''); }", description: "⁄—÷ „Õ ÊÏ Õ”» «·Õ«·…" }
                ]
            },
            {
                name: "„À«· 5 - „⁄«·Ã… «·√–Ê‰« ",
                description: "«· Õﬁﬁ „‰ «·’·«ÕÌ« ",
                values: [
                    { value: "function checkPermission(user, action) { if (!user) return false; if (user.role === 'admin') return true; if (user.role === 'manager' && action !== 'delete') return true; if (user.role === 'user' && action === 'view') return true; return false; }", description: "«· Õﬁﬁ „‰ ’·«ÕÌ«  «·„” Œœ„" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ «·‘—Êÿ",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ «·‘—Êÿ",
                values: [
                    { value: "«” Œœ„ switch ··Õ«·«  «·„ ⁄œœ…", description: "√Ê÷Õ „‰ if...else if «·„ ⁄œœ…" },
                    { value: "«” Œœ„ ternary ··ﬁÌ„ «·»”Ìÿ…", description: "··Õ«·«  «·»”Ìÿ… ›Ì «·”ÿ— ‰›”Â" },
                    { value: "«” Œœ„ && ·· ‰›Ì– «·‘—ÿÌ", description: "isLoggedIn && showDashboard()" },
                    { value: "«” Œœ„ || ··ﬁÌ„ «·«Õ Ì«ÿÌ…", description: "const name = input || '„ÃÂÊ·'" },
                    { value: "«” Œœ„ ?? »œ·« „‰ || ··ﬁÌ„ «·«Õ Ì«ÿÌ…", description: "·· ⁄«„· „⁄ 0 Ê '' »‘ﬂ· ’ÕÌÕ" },
                    { value: "«” Œœ„ ?. ··Ê’Ê· «·¬„‰", description: "user?.name »œ·« „‰ user && user.name" },
                    { value: " Ã‰» «·‘—Êÿ «·„⁄ﬁœ… Ãœ«", description: "ﬁ”¯„Â« ≈·Ï „ €Ì—« " },
                    { value: "«” Œœ„ «·√ﬁÊ«” ··Ê÷ÊÕ", description: "if ((x > 0 && x < 10) || (y > 0 && y < 10))" }
                ]
            },
            {
                name: "‰’«∆Õ «·√œ«¡",
                description: "‰’«∆Õ · Õ”Ì‰ √œ«¡ «·‘—Êÿ",
                values: [
                    { value: "÷⁄ «·‘—Êÿ «·√ﬂÀ— «Õ „«·« √Ê·«", description: "›Ì if...else if" },
                    { value: "«” Œœ„ switch »œ·« „‰ if...else if «·„ ⁄œœ…", description: "√”—⁄ ›Ì »⁄÷ «·Õ«·« " },
                    { value: " Ã‰» «·‘—Êÿ œ«Œ· «·Õ·ﬁ« ", description: "«Õ”»Â« Œ«—Ã «·Õ·ﬁ… ≈‰ √„ﬂ‰" },
                    { value: "«” Œœ„ «·⁄Ê«„· «·„Œ ’—… (&&, ||)", description: "√”—⁄ „‰ if ﬂ«„·" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ «·‘—Êÿ",
                values: [
                    { value: "«” Œœ«„ = »œ·« „‰ ===", description: "if (x = 5) // Ì⁄Ì‰ 5 Ê·Ì” Ìﬁ«—‰" },
                    { value: "‰”Ì«‰ «·√ﬁÊ«” ›Ì if", description: "if (x > 5) { }" },
                    { value: "‰”Ì«‰ break ›Ì switch", description: "Ì”»» Fall-through" },
                    { value: "«” Œœ«„ == »œ·« „‰ ===", description: "if (x == '5') // true Õ Ï ·Ê x = 5" },
                    { value: "‰”Ì«‰ «·⁄Êœ… (return) ›Ì «·œÊ«·", description: "ﬁœ Ì”»» ”·Êﬂ« €Ì— „ Êﬁ⁄" },
                    { value: "«·Œ·ÿ »Ì‰ && Ê ||", description: "«” Œœ„ «·√ﬁÊ«” ··Ê÷ÊÕ" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsConditionsData = jsConditionsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsConditionsData;
}