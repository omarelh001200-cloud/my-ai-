// ============================================================
// js-bom.js
// ﬂ«∆‰«  «·„ ’›Õ (Browser Object Model - BOM) ›Ì JavaScript
//  ‘—Õ Ã„Ì⁄ ﬂ«∆‰«  BOM ·· ⁄«„· „⁄ «·„ ’›Õ Ê«·‰«›–… Ê«·„ƒﬁ «  Ê«· Œ“Ì‰
// ============================================================

const jsBomData = [
    // ============================================================
    // 1. window - «·ﬂ«∆‰ «·⁄«„
    // ============================================================
    {
        tag: "window-object",
        description: "«·ﬂ«∆‰ «·⁄«„ ›Ì «·„ ’›Õ. Ì„À· ‰«›–… «·„ ’›Õ ÊÌÕ ÊÌ ⁄·Ï ﬂ· ‘Ì¡ ›Ì «·’›Õ…",
        properties: [
            {
                name: "window",
                description: "«·ﬂ«∆‰ «·⁄«„ ›Ì «·„ ’›Õ",
                values: [
                    { value: "window", description: "«·ﬂ«∆‰ «·⁄«„" },
                    { value: "window.document", description: "ﬂ«∆‰ «·„” ‰œ (DOM)" },
                    { value: "window.console", description: "ﬂ«∆‰ «·ÿ—›Ì…" },
                    { value: "window.innerWidth", description: "⁄—÷ ‰«›–… «·⁄—÷ (»«·»ﬂ”·)" },
                    { value: "window.innerHeight", description: "«— ›«⁄ ‰«›–… «·⁄—÷ (»«·»ﬂ”·)" },
                    { value: "window.outerWidth", description: "⁄—÷ «·‰«›–… «·ﬂ«„·" },
                    { value: "window.outerHeight", description: "«— ›«⁄ «·‰«›–… «·ﬂ«„·" },
                    { value: "window.screenX / screenY", description: "„Êﬁ⁄ «·‰«›–… ⁄·Ï «·‘«‘…" },
                    { value: "window.devicePixelRatio", description: "‰”»… ﬂÀ«›… «·»ﬂ”·« " }
                ]
            },
            {
                name: "window - œÊ«· «· ‰»ÌÂ",
                description: "œÊ«· ·⁄—÷ —”«∆· ··„” Œœ„",
                values: [
                    { value: "window.alert('—”«·…');", description: "‰«›–…  ‰»ÌÂ" },
                    { value: "window.confirm('Â· √‰  „ √ﬂœø');", description: "‰«›–…  √ﬂÌœ ( —Ã⁄ true/false)" },
                    { value: "window.prompt('√œŒ· «”„ﬂ:');", description: "‰«›–… ≈œŒ«· ( —Ã⁄ «·‰’ √Ê null)" }
                ]
            },
            {
                name: "window - œÊ«· «·‰«›–…",
                description: "œÊ«· ·· Õﬂ„ ›Ì «·‰«›–…",
                values: [
                    { value: "window.open('https://example.com');", description: "› Õ ‰«›–… ÃœÌœ…" },
                    { value: "window.close();", description: "≈€·«ﬁ «·‰«›–…" },
                    { value: "window.focus();", description: " —ﬂÌ“ «·‰«›–…" },
                    { value: "window.blur();", description: "≈·€«¡  —ﬂÌ“ «·‰«›–…" },
                    { value: "window.scrollTo(0, 0);", description: "«· „—Ì— ≈·Ï √⁄·Ï" },
                    { value: "window.scrollBy(0, 100);", description: "«· „—Ì— »„ﬁœ«— 100 »ﬂ”·" }
                ]
            },
            {
                name: "window - œÊ«· «· „—Ì—",
                description: "œÊ«· ·· Õﬂ„ ›Ì «· „—Ì—",
                values: [
                    { value: "window.scrollX", description: "„Ê÷⁄ «· „—Ì— «·√›ﬁÌ" },
                    { value: "window.scrollY", description: "„Ê÷⁄ «· „—Ì— «·⁄„ÊœÌ" },
                    { value: "window.scrollTo({ top: 0, behavior: 'smooth' });", description: " „—Ì— ”·” ≈·Ï «·√⁄·Ï" },
                    { value: "window.scrollBy({ top: 100, behavior: 'smooth' });", description: " „—Ì— ”·” »„ﬁœ«—" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. navigator - „⁄·Ê„«  «·„ ’›Õ
    // ============================================================
    {
        tag: "navigator-object",
        description: "ﬂ«∆‰ ÌÕ ÊÌ ⁄·Ï „⁄·Ê„«  ⁄‰ «·„ ’›Õ Ê‰Ÿ«„ «· ‘€Ì·",
        properties: [
            {
                name: "navigator",
                description: "„⁄·Ê„«  «·„ ’›Õ",
                values: [
                    { value: "navigator.userAgent", description: "‰’ „⁄·Ê„«  «·„ ’›Õ «·ﬂ«„·" },
                    { value: "navigator.language", description: "·€… «·„ ’›Õ („À· 'ar', 'en-US')" },
                    { value: "navigator.languages", description: "ﬁ«∆„… «··€«  «·„›÷·…" },
                    { value: "navigator.onLine", description: "Õ«·… «·« ’«· »«·≈‰ —‰  (true/false)" },
                    { value: "navigator.platform", description: "‰Ÿ«„ «· ‘€Ì· („À· 'Win32', 'MacIntel')" },
                    { value: "navigator.cookieEnabled", description: "Â· «·‹ Cookies „›⁄·…ø" },
                    { value: "navigator.doNotTrack", description: "Õ«·… Do Not Track" }
                ]
            },
            {
                name: "navigator - «·Œœ„« ",
                description: "Œœ„«  «·„ ’›Õ «·„ «Õ…",
                values: [
                    { value: "navigator.geolocation", description: "Œœ„… «·„Êﬁ⁄ «·Ã€—«›Ì" },
                    { value: "navigator.clipboard", description: "Œœ„… «·Õ«›Ÿ… (Clipboard API)" },
                    { value: "navigator.mediaDevices", description: "√ÃÂ“… «·Ê”«∆ÿ (ﬂ«„Ì—«/„Ìﬂ—Ê›Ê‰)" },
                    { value: "navigator.serviceWorker", description: "Service Worker" },
                    { value: "navigator.storage", description: "„⁄·Ê„«  «· Œ“Ì‰" },
                    { value: "navigator.connection", description: "„⁄·Ê„«  «·« ’«· (Network Information)" },
                    { value: "navigator.battery", description: "„⁄·Ê„«  «·»ÿ«—Ì…" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. location - ⁄‰Ê«‰ URL
    // ============================================================
    {
        tag: "location-object",
        description: "ﬂ«∆‰ ÌÕ ÊÌ ⁄·Ï „⁄·Ê„«  ⁄‰ ⁄‰Ê«‰ URL «·Õ«·Ì Êÿ—ﬁ ·· ‰ﬁ·",
        properties: [
            {
                name: "location",
                description: "„⁄·Ê„«  ⁄‰Ê«‰ URL",
                values: [
                    { value: "location.href", description: "⁄‰Ê«‰ URL «·ﬂ«„·" },
                    { value: "location.protocol", description: "«·»—Ê ÊﬂÊ· (http: / https:)" },
                    { value: "location.host", description: "«·„÷Ì› „⁄ «·„‰›– (example.com:8080)" },
                    { value: "location.hostname", description: "«”„ «·„÷Ì› (example.com)" },
                    { value: "location.port", description: "«·„‰›– (8080)" },
                    { value: "location.pathname", description: "«·„”«— (/page/about)" },
                    { value: "location.search", description: "„⁄·„«  «·«” ⁄·«„ (?id=5&name=ahmed)" },
                    { value: "location.hash", description: "Ã“¡ «·—«»ÿ (#section)" },
                    { value: "location.origin", description: "«·√’· (https://example.com)" }
                ]
            },
            {
                name: "location - œÊ«· «· ‰ﬁ·",
                description: "œÊ«· ·· ‰ﬁ· »Ì‰ «·’›Õ« ",
                values: [
                    { value: "location.assign('https://example.com');", description: "«·«‰ ﬁ«· ≈·Ï —«»ÿ („⁄ Õ›Ÿ ›Ì «·”Ã·)" },
                    { value: "location.replace('https://example.com');", description: "«” »œ«· «·’›Õ… «·Õ«·Ì… (»œÊ‰ Õ›Ÿ)" },
                    { value: "location.reload();", description: "≈⁄«œ…  Õ„Ì· «·’›Õ…" },
                    { value: "location.reload(true);", description: "≈⁄«œ…  Õ„Ì· „‰ «·Œ«œ„ ( Ã«Ê“ «·ﬂ«‘)" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. history - ”Ã· «· ’›Õ
    // ============================================================
    {
        tag: "history-object",
        description: "ﬂ«∆‰ Ì”„Õ »«· Õﬂ„ ›Ì ”Ã· «· ’›Õ Ê«· ‰ﬁ· »Ì‰ «·’›Õ« ",
        properties: [
            {
                name: "history",
                description: "”Ã· «· ’›Õ",
                values: [
                    { value: "history.length", description: "⁄œœ «·’›Õ«  ›Ì «·”Ã·" },
                    { value: "history.back();", description: "—ÃÊ⁄ ··Œ·› (’›Õ… Ê«Õœ…)" },
                    { value: "history.forward();", description: " ﬁœ„ ··√„«„ (’›Õ… Ê«Õœ…)" },
                    { value: "history.go(-2);", description: "«·—ÃÊ⁄ ’›Õ Ì‰" },
                    { value: "history.go(2);", description: "«· ﬁœ„ ’›Õ Ì‰" }
                ]
            },
            {
                name: "history - SPA (Single Page Application)",
                description: "œÊ«· ·≈œ«—… «·Õ«·… ›Ì  ÿ»Ìﬁ«  «·’›Õ… «·Ê«Õœ…",
                values: [
                    { value: "history.pushState({ page: 1 }, '⁄‰Ê«‰', '/page/1');", description: "≈÷«›… Õ«·… ÃœÌœ… ··”Ã·" },
                    { value: "history.replaceState({ page: 2 }, '⁄‰Ê«‰', '/page/2');", description: "«” »œ«· «·Õ«·… «·Õ«·Ì…" },
                    { value: "history.state", description: "«·Õ«·… «·Õ«·Ì…" },
                    { value: "window.onpopstate = function(event) { console.log(event.state); };", description: "„⁄«·Ã ÕœÀ «· €ÌÌ—" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. screen - „⁄·Ê„«  «·‘«‘…
    // ============================================================
    {
        tag: "screen-object",
        description: "ﬂ«∆‰ ÌÕ ÊÌ ⁄·Ï „⁄·Ê„«  ⁄‰ ‘«‘… «·„” Œœ„",
        properties: [
            {
                name: "screen",
                description: "„⁄·Ê„«  «·‘«‘…",
                values: [
                    { value: "screen.width", description: "⁄—÷ «·‘«‘… »«·»ﬂ”·" },
                    { value: "screen.height", description: "«— ›«⁄ «·‘«‘… »«·»ﬂ”·" },
                    { value: "screen.availWidth", description: "«·⁄—÷ «·„ «Õ (»œÊ‰ ‘—Ìÿ «·„Â«„)" },
                    { value: "screen.availHeight", description: "«·«— ›«⁄ «·„ «Õ (»œÊ‰ ‘—Ìÿ «·„Â«„)" },
                    { value: "screen.colorDepth", description: "⁄„ﬁ «·√·Ê«‰ (⁄œœ «·» « )" },
                    { value: "screen.pixelDepth", description: "⁄„ﬁ «·»ﬂ”·« " }
                ]
            }
        ]
    },

    // ============================================================
    // 6. «·„ƒﬁ «  (Timers)
    // ============================================================
    {
        tag: "timers",
        description: "œÊ«· «·„ƒﬁ «  · ‰›Ì– ﬂÊœ »⁄œ › —… “„‰Ì…",
        properties: [
            // -------- setTimeout --------
            {
                name: "setTimeout",
                description: "Ì‰›¯– œ«·… „—… Ê«Õœ… »⁄œ „—Ê— „œ… “„‰Ì… „Õœœ… »«·„Ì·Ì À«‰Ì…",
                values: [
                    { value: "setTimeout(() => { console.log(' „'); }, 1000);", description: " ‰›Ì– »⁄œ À«‰Ì…" },
                    { value: "const timerId = setTimeout(callback, 500);", description: " Œ“Ì‰ «·„⁄—›" },
                    { value: "setTimeout(handler, 2000, 'param1', 'param2');", description: "„⁄ „⁄ÿÌ« " }
                ]
            },
            // -------- clearTimeout --------
            {
                name: "clearTimeout",
                description: "Ìı·€Ì  ‰›Ì–« „ƒÃÛ¯·«  „ ÃœÊ· Â ”«»ﬁ« »‹ setTimeout ﬁ»· √‰ ÌÕœÀ",
                values: [
                    { value: "clearTimeout(timerId);", description: "≈·€«¡ «· ‰›Ì– «·„ƒÃ·" }
                ]
            },
            // -------- setInterval --------
            {
                name: "setInterval",
                description: "Ì‰›¯– œ«·… »‘ﬂ· „ ﬂ—— ﬂ· „œ… “„‰Ì… „Õœœ… Õ Ï Ì „ ≈Ìﬁ«›Â",
                values: [
                    { value: "setInterval(() => { console.log(' ﬂ—«—'); }, 1000);", description: " ‰›Ì– ﬂ· À«‰Ì…" },
                    { value: "const intervalId = setInterval(callback, 500);", description: " Œ“Ì‰ «·„⁄—›" },
                    { value: "setInterval(handler, 2000, 'param1');", description: "„⁄ „⁄ÿÌ« " }
                ]
            },
            // -------- clearInterval --------
            {
                name: "clearInterval",
                description: "ÌıÊﬁ›  ﬂ—«—«  „ ÃœÊ· Â ”«»ﬁ« »‹ setInterval",
                values: [
                    { value: "clearInterval(intervalId);", description: "≈Ìﬁ«› «· ﬂ—«—" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. œÊ«· «·≈ÿ«—«  (Animation Frames)
    // ============================================================
    {
        tag: "animation-frames",
        description: "œÊ«· ·· Õﬂ„ ›Ì «·—”Ê„ «·„ Õ—ﬂ… Ê«·≈ÿ«—« ",
        properties: [
            // -------- requestAnimationFrame --------
            {
                name: "requestAnimationFrame",
                description: "Ìÿ·» „‰ «·„ ’›Õ  ‰›Ì– œ«·… ﬁ»· —”„ «·≈ÿ«— «· «·Ì° „›Ìœ ··Õ—ﬂ«  «·”·”…",
                values: [
                    { value: "function animate() { console.log('≈ÿ«—'); requestAnimationFrame(animate); } requestAnimationFrame(animate);", description: "Õ·ﬁ… —”„" },
                    { value: "const id = requestAnimationFrame(callback);", description: " Œ“Ì‰ «·„⁄—›" },
                    { value: "requestAnimationFrame((timestamp) => { console.log(timestamp); });", description: "„⁄ ÿ«»⁄ “„‰Ì" }
                ]
            },
            // -------- cancelAnimationFrame --------
            {
                name: "cancelAnimationFrame",
                description: "Ì·€Ì ÿ·» «·≈ÿ«— «·„ÿ·Ê» „”»ﬁ« »‹ requestAnimationFrame",
                values: [
                    { value: "cancelAnimationFrame(id);", description: "≈·€«¡ ÿ·» «·≈ÿ«—" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. «· Œ“Ì‰ (Storage)
    // ============================================================
    {
        tag: "storage",
        description: "œÊ«· «· Œ“Ì‰ ›Ì «·„ ’›Õ (localStorage Ê sessionStorage)",
        properties: [
            // -------- localStorage --------
            {
                name: "localStorage",
                description: " Œ“Ì‰ „Õ·Ì œ«∆„ ›Ì «·„ ’›Õ. «·»Ì«‰«   »ﬁÏ Õ Ï »⁄œ ≈€·«ﬁ «·„ ’›Õ",
                values: [
                    { value: "localStorage.setItem('key', 'value');", description: "Õ›Ÿ ﬁÌ„…" },
                    { value: "const value = localStorage.getItem('key');", description: "ﬁ—«¡… ﬁÌ„…" },
                    { value: "localStorage.removeItem('key');", description: "Õ–› ﬁÌ„…" },
                    { value: "localStorage.clear();", description: "Õ–› ﬂ· «·ﬁÌ„" },
                    { value: "localStorage.length", description: "⁄œœ «·⁄‰«’—" },
                    { value: "const key = localStorage.key(0);", description: "«·„› «Õ ›Ì „Ê÷⁄ „Õœœ" },
                    { value: "localStorage.setItem('user', JSON.stringify({ name: '√Õ„œ' }));", description: " Œ“Ì‰ ﬂ«∆‰" },
                    { value: "const user = JSON.parse(localStorage.getItem('user'));", description: "ﬁ—«¡… ﬂ«∆‰" }
                ]
            },
            // -------- sessionStorage --------
            {
                name: "sessionStorage",
                description: " Œ“Ì‰ „ƒﬁ  ›Ì «·„ ’›Õ. «·»Ì«‰«   »ﬁÏ ›ﬁÿ √À‰«¡ «·Ã·”… «·Õ«·Ì…",
                values: [
                    { value: "sessionStorage.setItem('key', 'value');", description: "Õ›Ÿ ﬁÌ„…" },
                    { value: "const value = sessionStorage.getItem('key');", description: "ﬁ—«¡… ﬁÌ„…" },
                    { value: "sessionStorage.removeItem('key');", description: "Õ–› ﬁÌ„…" },
                    { value: "sessionStorage.clear();", description: "Õ–› ﬂ· «·ﬁÌ„" },
                    { value: "sessionStorage.length", description: "⁄œœ «·⁄‰«’—" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. WebSocket - «·« ’«· «·„»«‘—
    // ============================================================
    {
        tag: "websocket",
        description: "Ì› Õ « ’«·« „” „—« »Ì‰ «·„ ’›Õ ÊŒ«œ„ · »«œ· «·»Ì«‰«  ›Ê—Ì«",
        properties: [
            {
                name: "new WebSocket",
                description: "≈‰‘«¡ « ’«· WebSocket",
                values: [
                    { value: "const socket = new WebSocket('wss://example.com');", description: "≈‰‘«¡ « ’«·" },
                    { value: "socket.onopen = function() { console.log('„ ’·'); };", description: "„⁄«·Ã «·« ’«·" },
                    { value: "socket.onmessage = function(event) { console.log(event.data); };", description: "„⁄«·Ã «·—”«∆·" },
                    { value: "socket.onclose = function() { console.log('„€·ﬁ'); };", description: "„⁄«·Ã «·≈€·«ﬁ" },
                    { value: "socket.onerror = function(error) { console.error(error); };", description: "„⁄«·Ã «·√Œÿ«¡" },
                    { value: "socket.send('„—Õ»«');", description: "≈—”«· —”«·…" },
                    { value: "socket.close();", description: "≈€·«ﬁ «·« ’«·" },
                    { value: "socket.readyState", description: "Õ«·… «·« ’«·" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. Observers - «·„—«ﬁ»Ê‰
    // ============================================================
    {
        tag: "observers",
        description: "„—«ﬁ»Ê‰ ·  »⁄ «· €ÌÌ—«  ›Ì «·’›Õ…",
        properties: [
            // -------- IntersectionObserver --------
            {
                name: "IntersectionObserver",
                description: "Ì—«ﬁ» „ Ï ÌœŒ· ⁄‰’— „⁄Ì¯‰ „‰ÿﬁ… «·⁄—÷ «·„—∆Ì…° „›Ìœ ·· Õ„Ì· «·ﬂ”Ê·",
                values: [
                    { value: "const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { console.log('„—∆Ì'); } }); }); observer.observe(element);", description: "„—«ﬁ» «·ŸÂÊ—" },
                    { value: "observer.disconnect();", description: "≈Ìﬁ«› «·„—«ﬁ»…" },
                    { value: "observer.unobserve(element);", description: "≈Ìﬁ«› „—«ﬁ»… ⁄‰’— „⁄Ì‰" }
                ]
            },
            // -------- MutationObserver --------
            {
                name: "MutationObserver",
                description: "Ì—«ﬁ» √Ì  €ÌÌ—«   ÿ—√ ⁄·Ï ⁄‰’— √Ê √»‰«∆Â ›Ì «·’›Õ…",
                values: [
                    { value: "const observer = new MutationObserver((mutations) => { mutations.forEach(mutation => { console.log(mutation.type); }); }); observer.observe(element, { childList: true, attributes: true });", description: "„—«ﬁ» «· €ÌÌ—« " },
                    { value: "observer.disconnect();", description: "≈Ìﬁ«› «·„—«ﬁ»…" },
                    { value: "observer.takeRecords();", description: "Ã·» «· €ÌÌ—«  «·„⁄·ﬁ…" }
                ]
            },
            // -------- ResizeObserver --------
            {
                name: "ResizeObserver",
                description: "Ì—«ﬁ» „ Ï Ì €Ì¯— ÕÃ„ ⁄‰’— „⁄Ì¯‰ ÊÌ‰›¯– œ«·… ⁄‰œ ﬂ·  €ÌÌ—",
                values: [
                    { value: "const observer = new ResizeObserver((entries) => { entries.forEach(entry => { console.log('ÕÃ„ ÃœÌœ:', entry.contentRect.width); }); }); observer.observe(element);", description: "„—«ﬁ»  €ÌÌ— «·ÕÃ„" },
                    { value: "observer.disconnect();", description: "≈Ìﬁ«› «·„—«ﬁ»…" }
                ]
            },
            // -------- PerformanceObserver --------
            {
                name: "PerformanceObserver",
                description: "Ì—«ﬁ» „ﬁ«ÌÌ” «·√œ«¡ ›Ì «·’›Õ…",
                values: [
                    { value: "const observer = new PerformanceObserver((list) => { list.getEntries().forEach(entry => { console.log(entry.name, entry.duration); }); }); observer.observe({ entryTypes: ['navigation', 'paint'] });", description: "„—«ﬁ» «·√œ«¡" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. Media Query - «” ⁄·«„«  «·Ê”«∆ÿ
    // ============================================================
    {
        tag: "media-query",
        description: "›Õ’ «” ⁄·«„«  «·Ê”«∆ÿ »—„ÃÌ«",
        properties: [
            {
                name: "window.matchMedia",
                description: "Ì Õﬁﬁ »—„ÃÌ« „‰  ÿ«»ﬁ «” ⁄·«„ Ê”«∆ÿ CSS „⁄Ì¯‰",
                values: [
                    { value: "const mq = window.matchMedia('(max-width: 768px)');", description: "›Õ’ «” ⁄·«„" },
                    { value: "mq.matches", description: "Â· «·«” ⁄·«„ ’ÕÌÕø" },
                    { value: "mq.addListener((e) => { if (e.matches) { console.log('‘«‘… ’€Ì—…'); } });", description: "≈÷«›… „” „⁄" },
                    { value: "mq.removeListener(callback);", description: "≈“«·… „” „⁄" }
                ]
            }
        ]
    },

    // ============================================================
    // 12. √„À·… ⁄„·Ì…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… ·«” Œœ«„ BOM",
        properties: [
            {
                name: "„À«· 1 -  Œ“Ì‰  ›÷Ì·«  «·„” Œœ„",
                description: "Õ›Ÿ Ê«” —Ã«⁄  ›÷Ì·«  «·„” Œœ„",
                values: [
                    { value: "function saveUserPreferences(prefs) { localStorage.setItem('prefs', JSON.stringify(prefs)); } function loadUserPreferences() { const data = localStorage.getItem('prefs'); return data ? JSON.parse(data) : null; }", description: " Œ“Ì‰ «· ›÷Ì·« " }
                ]
            },
            {
                name: "„À«· 2 -  ‰›Ì– „Â·…",
                description: " ‰›Ì– ﬂÊœ »⁄œ › —… „⁄ „Â·…",
                values: [
                    { value: "function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } async function example() { console.log('»œ«Ì…'); await delay(2000); console.log('»⁄œ À«‰Ì Ì‰'); }", description: "œ«·…  √ŒÌ—" }
                ]
            },
            {
                name: "„À«· 3 -  ÕœÌÀ  ·ﬁ«∆Ì",
                description: " ÕœÌÀ «·„Õ ÊÏ  ·ﬁ«∆Ì« ﬂ· › —…",
                values: [
                    { value: "function autoRefresh(interval, callback) { setInterval(callback, interval); } autoRefresh(5000, () => { console.log(' ÕœÌÀ'); });", description: " ÕœÌÀ  ·ﬁ«∆Ì" }
                ]
            },
            {
                name: "„À«· 4 - ﬂ‘› «·« ’«· »«·≈‰ —‰ ",
                description: "ﬂ‘›  €ÌÌ— Õ«·… «·« ’«·",
                values: [
                    { value: "window.addEventListener('online', () => { console.log('„ ’·'); }); window.addEventListener('offline', () => { console.log('€Ì— „ ’·'); });", description: "ﬂ‘› «·« ’«·" }
                ]
            }
        ]
    },

    // ============================================================
    // 13. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ·«” Œœ«„ BOM",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ·· ⁄«„· „⁄ BOM",
                values: [
                    { value: "«” Œœ„ localStorage ·· Œ“Ì‰ «·œ«∆„", description: "··„›÷·… Ê«·≈⁄œ«œ« " },
                    { value: "«” Œœ„ sessionStorage ·· Œ“Ì‰ «·„ƒﬁ ", description: "··»Ì«‰«  «·„ƒﬁ …" },
                    { value: "«” Œœ„ requestAnimationFrame ··—”Ê„ «·„ Õ—ﬂ…", description: "»œ·« „‰ setInterval" },
                    { value: "«” Œœ„ IntersectionObserver ·· Õ„Ì· «·ﬂ”Ê·", description: "»œ·« „‰ «· „—Ì—" },
                    { value: " Ã‰» setInterval «·ÀﬁÌ·", description: "ÌƒÀ— ⁄·Ï «·√œ«¡" }
                ]
            },
            {
                name: "‰’«∆Õ «·√„«‰",
                description: "‰’«∆Õ ··√„«‰ ⁄‰œ «” Œœ«„ BOM",
                values: [
                    { value: "·«  Œ“‰ »Ì«‰«  Õ”«”… ›Ì localStorage", description: "€Ì— „‘›—…" },
                    { value: " Õﬁﬁ „‰ navigator.cookieEnabled", description: "ﬁ»· «” Œœ«„ «·‹ Cookies" },
                    { value: "«” Œœ„ HTTPS „⁄ WebSocket", description: "wss:// »œ·« „‰ ws://" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ BOM",
                values: [
                    { value: "‰”Ì«‰ √‰ localStorage ÌÕ›Ÿ ‰’Ê’« ›ﬁÿ", description: "«” Œœ„ JSON.stringify" },
                    { value: "«” Œœ«„ setInterval »œÊ‰ ≈Ìﬁ«›", description: "Ì”»»  ”—» –«ﬂ—…" },
                    { value: "‰”Ì«‰ «· Õﬁﬁ „‰ «· Ê«›ﬁ", description: "»⁄÷ «·„Ì“«  €Ì— „œ⁄Ê„… ›Ì ﬂ· «·„ ’›Õ« " }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsBomData = jsBomData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsBomData;
}