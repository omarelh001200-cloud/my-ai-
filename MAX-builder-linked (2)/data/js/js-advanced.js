// ============================================================
// js-advanced.js
// «·„Ì“«  «·„ ﬁœ„… (Advanced Features) ›Ì JavaScript
//  ‘—Õ: Symbol, BigInt, Proxy, Reflect, WeakRef, Generators, Web Workers, IndexedDB
// ============================================================

const jsAdvancedData = [
    // ============================================================
    // 1. Symbol - «·—„Ê“ «·›—Ìœ…
    // ============================================================
    {
        tag: "symbol",
        description: "‰Ê⁄ »Ì«‰«  Ì‰ Ã ﬁÌ„… ›—Ìœ…  „«„«°  ı” Œœ„ €«·»« ﬂ„›« ÌÕ ﬂ«∆‰«  ·«   ⁄«—÷ √»œ«",
        properties: [
            {
                name: "Symbol",
                description: "≈‰‘«¡ —„“ ›—Ìœ",
                values: [
                    { value: "Symbol()", description: "—„“ ›—Ìœ" },
                    { value: "Symbol('description')", description: "—„“ „⁄ Ê’›" },
                    { value: "Symbol.for('key')", description: "—„“ ⁄«·„Ì („‘ —ﬂ)" },
                    { value: "Symbol.keyFor(sym)", description: "«·Õ’Ê· ⁄·Ï Ê’› «·—„“ «·⁄«·„Ì" }
                ]
            },
            {
                name: "Symbol - «·—„Ê“ «·„œ„Ã…",
                description: "—„Ê“ „œ„Ã… ›Ì JavaScript · Œ’Ì’ «·”·Êﬂ",
                values: [
                    { value: "Symbol.iterator", description: " ÕœÌœ ÿ—Ìﬁ… «· ﬂ—«—" },
                    { value: "Symbol.asyncIterator", description: " ÕœÌœ ÿ—Ìﬁ… «· ﬂ—«— €Ì— «·„ “«„‰" },
                    { value: "Symbol.hasInstance", description: " ÕœÌœ ”·Êﬂ instanceof" },
                    { value: "Symbol.isConcatSpreadable", description: "”·Êﬂ concat" },
                    { value: "Symbol.match", description: "”·Êﬂ match" },
                    { value: "Symbol.replace", description: "”·Êﬂ replace" },
                    { value: "Symbol.search", description: "”·Êﬂ search" },
                    { value: "Symbol.split", description: "”·Êﬂ split" },
                    { value: "Symbol.species", description: "≈‰‘«¡ ﬂ«∆‰«  „‘ ﬁ…" },
                    { value: "Symbol.toPrimitive", description: " ÕÊÌ· «·ﬂ«∆‰ ≈·Ï ﬁÌ„… »œ«∆Ì…" },
                    { value: "Symbol.toStringTag", description: " ÕœÌœ ﬁÌ„… toString" },
                    { value: "Symbol.unscopables", description: "«· Õﬂ„ ›Ì with" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. BigInt - «·√⁄œ«œ «·ﬂ»Ì—…
    // ============================================================
    {
        tag: "bigint",
        description: "‰Ê⁄ »Ì«‰«  Ì„À· √⁄œ«œ« ’ÕÌÕ… ﬂ»Ì—… Ãœ«   Ã«Ê“ ‰ÿ«ﬁ Number (Õ Ï 2?≥-1)",
        properties: [
            {
                name: "BigInt",
                description: "≈‰‘«¡ √⁄œ«œ ﬂ»Ì—…",
                values: [
                    { value: "9007199254740991n", description: "BigInt »«” Œœ«„ n" },
                    { value: "BigInt(Number.MAX_SAFE_INTEGER)", description: "„‰ —ﬁ„" },
                    { value: "BigInt('12345678901234567890')", description: "„‰ ‰’" },
                    { value: "10n + 20n", description: "Ã„⁄ BigInt" },
                    { value: "10n * 20n", description: "÷—» BigInt" },
                    { value: "10n ** 2n", description: "√” BigInt" }
                ]
            },
            {
                name: "BigInt - «· ÕÊÌ·« ",
                description: "«· ÕÊÌ· »Ì‰ BigInt Ê«·√‰Ê«⁄ «·√Œ—Ï",
                values: [
                    { value: "Number(10n)", description: " ÕÊÌ· BigInt ≈·Ï Number" },
                    { value: "BigInt(10)", description: " ÕÊÌ· Number ≈·Ï BigInt" },
                    { value: "String(10n)", description: " ÕÊÌ· BigInt ≈·Ï ‰’" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. Proxy - «·Ê”ÿ«¡
    // ============================================================
    {
        tag: "proxy",
        description: "Ì”„Õ »≈‰‘«¡ Ê”Ìÿ (wrapper) ÕÊ· ﬂ«∆‰ ¬Œ— ·«⁄ —«÷ Ê Œ’Ì’ «·⁄„·Ì«  «·√”«”Ì…",
        properties: [
            {
                name: "new Proxy",
                description: "≈‰‘«¡ Ê”Ìÿ ·ﬂ«∆‰",
                values: [
                    { value: "new Proxy(target, handler)", description: "≈‰‘«¡ Proxy" },
                    { value: "handler.get", description: "«⁄ —«÷ ﬁ—«¡… Œ«’Ì…" },
                    { value: "handler.set", description: "«⁄ —«÷ ﬂ «»… Œ«’Ì…" },
                    { value: "handler.has", description: "«⁄ —«÷ ⁄„·Ì… in" },
                    { value: "handler.deleteProperty", description: "«⁄ —«÷ delete" },
                    { value: "handler.apply", description: "«⁄ —«÷ «” œ⁄«¡ œ«·…" },
                    { value: "handler.construct", description: "«⁄ —«÷ new" }
                ]
            },
            {
                name: "Proxy - √„À·…",
                description: "√„À·… ⁄„·Ì… ·«” Œœ«„ Proxy",
                values: [
                    { value: "const validator = { set(target, key, value) { if (key === 'age' && value < 0) throw new Error('«·⁄„— ÌÃ» √‰ ÌﬂÊ‰ „ÊÃ»«'); target[key] = value; return true; } }; const user = new Proxy({}, validator);", description: "«· Õﬁﬁ „‰ ’Õ… «·»Ì«‰« " },
                    { value: "const logger = { get(target, key) { console.log(`ﬁ—«¡… ${key}`); return target[key]; } }; const obj = new Proxy({ name: '√Õ„œ' }, logger);", description: " ”ÃÌ· «·⁄„·Ì« " }
                ]
            }
        ]
    },

    // ============================================================
    // 4. Reflect - «·«‰⁄ﬂ«”
    // ============================================================
    {
        tag: "reflect",
        description: "ﬂ«∆‰ ÌÊ›— œÊ«·« ··⁄„·Ì«  «·√”«”Ì… «· Ì Ì„ﬂ‰ «⁄ —«÷Â« »Ê«”ÿ… Proxy",
        properties: [
            {
                name: "Reflect",
                description: "œÊ«· «·«‰⁄ﬂ«”",
                values: [
                    { value: "Reflect.get(target, key)", description: "ﬁ—«¡… Œ«’Ì…" },
                    { value: "Reflect.set(target, key, value)", description: "ﬂ «»… Œ«’Ì…" },
                    { value: "Reflect.has(target, key)", description: "«· Õﬁﬁ „‰ ÊÃÊœ Œ«’Ì…" },
                    { value: "Reflect.deleteProperty(target, key)", description: "Õ–› Œ«’Ì…" },
                    { value: "Reflect.apply(fn, thisArg, args)", description: "«” œ⁄«¡ œ«·…" },
                    { value: "Reflect.construct(target, args)", description: "≈‰‘«¡ ﬂ«∆‰" },
                    { value: "Reflect.ownKeys(target)", description: "„›« ÌÕ «·ﬂ«∆‰ «·Œ«’…" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. WeakRef - «·„—«Ã⁄ «·÷⁄Ì›…
    // ============================================================
    {
        tag: "weakref",
        description: "ÌÕ ›Ÿ »„—Ã⁄ ·ﬂ«∆‰ œÊ‰ „‰⁄ Ã«„⁄ «·ﬁ„«„… „‰ Õ–›Â ≈‰ ·„ Ìı” Œœ„ ›Ì „ﬂ«‰ ¬Œ—",
        properties: [
            {
                name: "new WeakRef",
                description: "≈‰‘«¡ „—Ã⁄ ÷⁄Ì›",
                values: [
                    { value: "const ref = new WeakRef(obj);", description: "„—Ã⁄ ÷⁄Ì› ·ﬂ«∆‰" },
                    { value: "const obj = ref.deref();", description: "«” —œ«œ «·ﬂ«∆‰ (√Ê undefined)" }
                ]
            },
            {
                name: "FinalizationRegistry",
                description: " ”ÃÌ· œ«·…  ı‰›Û¯– ⁄‰œ Õ–› ﬂ«∆‰ »Ê«”ÿ… Ã«„⁄ «·ﬁ„«„…",
                values: [
                    { value: "const registry = new FinalizationRegistry((held) => { console.log(' „ Õ–›', held); }); registry.register(obj, '»Ì«‰« ');", description: " ”ÃÌ· ﬂ«∆‰" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. Generators - «·„Ê·¯œ« 
    // ============================================================
    {
        tag: "generators",
        description: "œÊ«· Ì„ﬂ‰ ≈Ìﬁ«›  ‰›Ì–Â« „ƒﬁ « À„ «” ∆‰«›Â° Ê ı‰ Ã ﬁÌ„« Ê«Õœ…  ·Ê «·√Œ—Ï ⁄»— yield",
        properties: [
            {
                name: "function*",
                description: "œ«·… „Ê·¯œ…",
                values: [
                    { value: "function* counter() { yield 1; yield 2; yield 3; }", description: "„Ê·¯œ »”Ìÿ" },
                    { value: "function* range(start, end) { for (let i = start; i <= end; i++) yield i; }", description: "„Ê·¯œ ‰ÿ«ﬁ" }
                ]
            },
            {
                name: "yield",
                description: "≈‰ «Ã ﬁÌ„…",
                values: [
                    { value: "yield value;", description: "≈‰ «Ã ﬁÌ„…" },
                    { value: "const gen = counter(); gen.next(); // { value: 1, done: false }", description: "«” œ⁄«¡ «·„Ê·¯œ" }
                ]
            },
            {
                name: "yield*",
                description: " ›ÊÌ÷ «· Ê·Ìœ ·„Ê·¯œ ¬Œ—",
                values: [
                    { value: "function* nested() { yield* [1, 2, 3]; }", description: " ›ÊÌ÷ ≈·Ï „’›Ê›…" },
                    { value: "function* combined() { yield* range(1, 3); yield* range(5, 7); }", description: "œ„Ã „Ê·¯œÌ‰" }
                ]
            },
            {
                name: "async function*",
                description: "„Ê·¯œ €Ì— „ “«„‰",
                values: [
                    { value: "async function* asyncGenerator() { yield await fetchData(); }", description: "„Ê·¯œ €Ì— „ “«„‰" },
                    { value: "for await (const item of asyncGenerator()) { console.log(item); }", description: "«· ﬂ—«— ⁄·Ï „Ê·¯œ €Ì— „ “«„‰" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. Web Workers - «·⁄„«·
    // ============================================================
    {
        tag: "web-workers",
        description: "Ìı‘€¯· ﬂÊœ JavaScript ›Ì ŒÌÿ „‰›’· »«·Œ·›Ì… œÊ‰  Ã„Ìœ «·Ê«ÃÂ… «·—∆Ì”Ì…",
        properties: [
            {
                name: "new Worker",
                description: "≈‰‘«¡ Worker",
                values: [
                    { value: "const worker = new Worker('worker.js');", description: "≈‰‘«¡ Worker" },
                    { value: "worker.postMessage(data);", description: "≈—”«· —”«·…" },
                    { value: "worker.onmessage = (e) => { console.log(e.data); };", description: "«” ﬁ»«· —”«·…" },
                    { value: "worker.onerror = (e) => { console.error(e); };", description: "„⁄«·Ã… «·√Œÿ«¡" },
                    { value: "worker.terminate();", description: "≈Ìﬁ«› Worker" }
                ]
            },
            {
                name: "Worker - ›Ì «·„·›",
                description: "ﬂÊœ œ«Œ· Worker",
                values: [
                    { value: "self.onmessage = (e) => { self.postMessage(e.data * 2); };", description: "„⁄«·Ã… —”«·… Ê≈—”«· —œ" },
                    { value: "self.close();", description: "≈Ìﬁ«› Worker „‰ œ«Œ·Â" }
                ]
            },
            {
                name: "SharedWorker",
                description: "Worker „‘ —ﬂ »Ì‰ ⁄œ…  »ÊÌ»« ",
                values: [
                    { value: "const worker = new SharedWorker('shared.js');", description: "≈‰‘«¡ SharedWorker" },
                    { value: "worker.port.postMessage(data);", description: "≈—”«· —”«·…" },
                    { value: "worker.port.onmessage = (e) => { console.log(e.data); };", description: "«” ﬁ»«· —”«·…" },
                    { value: "worker.port.start();", description: "»œ¡ «·« ’«·" }
                ]
            },
            {
                name: "ServiceWorker",
                description: "Worker ·· Õﬂ„ ›Ì «·‘»ﬂ… Ê«· Œ“Ì‰ «·„ƒﬁ  (PWA)",
                values: [
                    { value: "navigator.serviceWorker.register('/sw.js');", description: " ”ÃÌ· ServiceWorker" },
                    { value: "navigator.serviceWorker.ready.then(reg => { console.log('Ã«Â“'); });", description: "«‰ Ÿ«— «·Ã«Â“Ì…" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. IndexedDB - ﬁ«⁄œ… »Ì«‰«  „Õ·Ì…
    // ============================================================
    {
        tag: "indexeddb",
        description: "ﬁ«⁄œ… »Ì«‰«  €Ì— ⁄·«∆ﬁÌ… (NoSQL) œ«Œ· «·„ ’›Õ · Œ“Ì‰ ﬂ„Ì«  ﬂ»Ì—… „‰ «·»Ì«‰« ",
        properties: [
            {
                name: "indexedDB.open",
                description: "› Õ ﬁ«⁄œ… »Ì«‰« ",
                values: [
                    { value: "const request = indexedDB.open('myDB', 1);", description: "› Õ ﬁ«⁄œ…" },
                    { value: "request.onsuccess = (e) => { const db = e.target.result; };", description: "⁄‰œ «·‰Ã«Õ" },
                    { value: "request.onerror = (e) => { console.error(e); };", description: "⁄‰œ «·›‘·" },
                    { value: "request.onupgradeneeded = (e) => { const db = e.target.result; db.createObjectStore('users', { keyPath: 'id' }); };", description: "≈‰‘«¡ „Œ“‰" }
                ]
            },
            {
                name: "IndexedDB - «·⁄„·Ì« ",
                description: "CRUD ⁄·Ï IndexedDB",
                values: [
                    { value: "const tx = db.transaction('users', 'readwrite');", description: "»œ¡ „⁄«„·…" },
                    { value: "const store = tx.objectStore('users');", description: "«·Ê’Ê· ≈·Ï «·„Œ“‰" },
                    { value: "store.add({ id: 1, name: '√Õ„œ' });", description: "≈÷«›… ”Ã·" },
                    { value: "store.get(1);", description: "Ã·» ”Ã·" },
                    { value: "store.put({ id: 1, name: '”«—…' });", description: " ÕœÌÀ ”Ã·" },
                    { value: "store.delete(1);", description: "Õ–› ”Ã·" },
                    { value: "store.getAll();", description: "Ã·» ﬂ· «·”Ã·« " }
                ]
            },
            {
                name: "IndexedDB - „À«· ﬂ«„·",
                description: "œ«·… ·≈÷«›… „” Œœ„",
                values: [
                    { value: "function addUser(db, user) { return new Promise((resolve, reject) => { const tx = db.transaction('users', 'readwrite'); const store = tx.objectStore('users'); const request = store.add(user); request.onsuccess = () => resolve(); request.onerror = () => reject(request.error); }); }", description: "≈÷«›… „” Œœ„" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. √„À·… ⁄„·Ì… „ ﬁœ„…
    // ============================================================
    {
        tag: "examples",
        description: "√„À·… ⁄„·Ì… „ ﬁœ„…",
        properties: [
            {
                name: "„À«· 1 - Proxy ·· Õﬁﬁ „‰ «·’Õ…",
                description: "«· Õﬁﬁ „‰ ’Õ… «·»Ì«‰«  »«” Œœ«„ Proxy",
                values: [
                    { value: "function createValidatedObject(schema) { return new Proxy({}, { set(target, key, value) { if (schema[key] && typeof value !== schema[key]) { throw new Error(`«·‰Ê⁄ €Ì— ’ÕÌÕ: ${key}`); } target[key] = value; return true; } }); }", description: "ﬂ«∆‰ „ Õﬁﬁ „‰ ’Õ Â" }
                ]
            },
            {
                name: "„À«· 2 - „Ê·¯œ · ”·”· ›Ì»Ê‰« ‘Ì",
                description: " Ê·Ìœ √—ﬁ«„ ›Ì»Ê‰« ‘Ì »«” Œœ«„ Generators",
                values: [
                    { value: "function* fibonacci() { let a = 0, b = 1; while (true) { yield a; [a, b] = [b, a + b]; } } const gen = fibonacci(); gen.next().value; // 0 gen.next().value; // 1 gen.next().value; // 1 gen.next().value; // 2", description: "„Ê·¯œ ›Ì»Ê‰« ‘Ì" }
                ]
            },
            {
                name: "„À«· 3 - Symbol.iterator ·ﬂ«∆‰ „Œ’’",
                description: "Ã⁄· ﬂ«∆‰ ﬁ«»·« ·· ﬂ—«—",
                values: [
                    { value: "class Range { constructor(start, end) { this.start = start; this.end = end; } [Symbol.iterator]() { let current = this.start; return { next: () => ({ value: current++, done: current > this.end }) }; } } const range = new Range(1, 5); for (const num of range) { console.log(num); } // 1, 2, 3, 4, 5", description: "ﬂ«∆‰ ﬁ«»· ·· ﬂ—«—" }
                ]
            },
            {
                name: "„À«· 4 - BigInt ›Ì «·Õ”«»«  «·„«·Ì…",
                description: "«” Œœ«„ BigInt ··œﬁ… «·„«·Ì…",
                values: [
                    { value: "const amount1 = 10000000000000000000n; const amount2 = 2000000000000000000n; const total = amount1 + amount2; console.log(total); // 12000000000000000000n", description: "Õ”«»«  „«·Ì… œﬁÌﬁ…" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. ‰’«∆Õ Ê≈—‘«œ« 
    // ============================================================
    {
        tag: "tips",
        description: "‰’«∆Õ Ê≈—‘«œ«  „Â„… ··„Ì“«  «·„ ﬁœ„…",
        properties: [
            {
                name: "‰’«∆Õ ⁄«„…",
                description: "‰’«∆Õ √”«”Ì… ··„Ì“«  «·„ ﬁœ„…",
                values: [
                    { value: "«” Œœ„ Symbol ··„›« ÌÕ «·›—Ìœ…", description: "· Ã‰»  ⁄«—÷ «·√”„«¡" },
                    { value: "«” Œœ„ Proxy ·· Õﬁﬁ „‰ «·’Õ…", description: "»œ·« „‰ «·œÊ«· «·ÌœÊÌ…" },
                    { value: "«” Œœ„ Web Workers ··⁄„·Ì«  «·ÀﬁÌ·…", description: "· Ã‰»  Ã„Ìœ «·Ê«ÃÂ…" },
                    { value: "«” Œœ„ IndexedDB ··»Ì«‰«  «·ﬂ»Ì—…", description: "»œ·« „‰ localStorage" },
                    { value: "«” Œœ„ Generators ··„Ã„Ê⁄«  «·ﬂ»Ì—…", description: "·· Ê›Ì— ›Ì «·–«ﬂ—…" }
                ]
            },
            {
                name: "‰’«∆Õ «·√œ«¡",
                description: "‰’«∆Õ · Õ”Ì‰ «·√œ«¡",
                values: [
                    { value: " Ã‰» Proxy ›Ì «·Õ·ﬁ«  «·ÀﬁÌ·…", description: "ÌƒÀ— ⁄·Ï «·√œ«¡" },
                    { value: "«” Œœ„ Generators ··»Ì«‰«  «·ﬂ»Ì—…", description: "Ìﬁ·· «” Â·«ﬂ «·–«ﬂ—…" },
                    { value: "«” Œœ„ Web Workers ··⁄„·Ì«  «·„ Ê«“Ì…", description: "Ì” ›Ìœ „‰ «·„⁄«·Ã«  «·„ ⁄œœ…" },
                    { value: "«” Œœ„ IndexedDB ·· Œ“Ì‰ «·ﬂ»Ì—", description: "√”—⁄ „‰ localStorage" }
                ]
            },
            {
                name: "«·√Œÿ«¡ «·‘«∆⁄…",
                description: "√Œÿ«¡ ‘«∆⁄… ⁄‰œ «” Œœ«„ «·„Ì“«  «·„ ﬁœ„…",
                values: [
                    { value: "Œ·ÿ BigInt „⁄ Number", description: "·« Ì„ﬂ‰ Ã„⁄Â„ „»«‘—…" },
                    { value: "‰”Ì«‰ √‰ Proxy ·« Ì⁄œ· «·ﬂ«∆‰ «·√’·Ì", description: "Ìı⁄œ¯· «·‹ Proxy" },
                    { value: "‰”Ì«‰ √‰ Web Workers ·«  ‘«—ﬂ «·–«ﬂ—…", description: "·« Ì„ﬂ‰ „‘«—ﬂ… «·ﬂ«∆‰« " },
                    { value: "‰”Ì«‰ √‰ IndexedDB €Ì— „ “«„‰", description: "«” Œœ„ Promises" }
                ]
            }
        ]
    }
];

//  ’œÌ— «·»Ì«‰« 
if (typeof window !== 'undefined') {
    window.jsAdvancedData = jsAdvancedData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsAdvancedData;
}