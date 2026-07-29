// ============================================================
// js-json.js
// ÏæÇá JSON (JSON Methods) İí JavaScript
// ÊÔÑÍ ÏæÇá JSON.parse æ JSON.stringify ãÚ ÃãËáÉ æÇÓÊÎÏÇãÇÊ
// ============================================================

const jsJsonData = [
    // ============================================================
    // 1. JSON.stringify - ÊÍæíá Åáì äÕ JSON
    // ============================================================
    {
        tag: "json-stringify",
        description: "íÍæøá ßÇÆä Ãæ ãÕİæİÉ JavaScript Åáì äÕ ÈÕíÛÉ JSON. íÓÊÎÏã áäŞá ÇáÈíÇäÇÊ Ãæ ÊÎÒíäåÇ",
        properties: [
            {
                name: "JSON.stringify",
                description: "ÊÍæíá ÇáŞíãÉ Åáì äÕ JSON",
                values: [
                    { value: "JSON.stringify({ name: 'ÃÍãÏ', age: 25 });", description: "ÊÍæíá ßÇÆä" },
                    { value: "JSON.stringify([1, 2, 3]);", description: "ÊÍæíá ãÕİæİÉ" },
                    { value: "JSON.stringify('hello');", description: "ÊÍæíá äÕ" },
                    { value: "JSON.stringify(42);", description: "ÊÍæíá ÑŞã" },
                    { value: "JSON.stringify(true);", description: "ÊÍæíá ŞíãÉ ãäØŞíÉ" },
                    { value: "JSON.stringify(null);", description: "ÊÍæíá null" }
                ]
            },
            {
                name: "JSON.stringify - ãÚ ãÚØíÇÊ",
                description: "ÇÓÊÎÏÇã ÇáãÚØíÇÊ ÇáÅÖÇİíÉ ááÊÍßã İí ÇáäÇÊÌ",
                values: [
                    { value: "JSON.stringify(obj, null, 2);", description: "ãÚ ÊäÓíŞ Ìãíá (ãÓÇİÊÇä)" },
                    { value: "JSON.stringify(obj, null, 4);", description: "ãÚ ÊäÓíŞ Ìãíá (4 ãÓÇİÇÊ)" },
                    { value: "JSON.stringify(obj, ['name', 'age']);", description: "ÊÕİíÉ ÇáÎÕÇÆÕ" },
                    { value: "JSON.stringify(obj, (key, value) => { if (key === 'password') return undefined; return value; });", description: "ÊÕİíÉ ÈÇÓÊÎÏÇã ÏÇáÉ" },
                    { value: "JSON.stringify(obj, null, '\t');", description: "ãÚ ÊäÓíŞ ÈÇÓÊÎÏÇã ÚáÇãÉ ÊÈæíÈ" }
                ]
            },
            {
                name: "JSON.stringify - ÇáÊÚÇãá ãÚ ÇáŞíã ÇáÎÇÕÉ",
                description: "ßíİíÉ ÊÍæíá ÇáŞíã ÇáÎÇÕÉ",
                values: [
                    { value: "JSON.stringify({ fn: function() {} }); // '{}'", description: "ÇáÏæÇá ÊõÍĞİ" },
                    { value: "JSON.stringify({ undef: undefined }); // '{}'", description: "undefined ÊõÍĞİ" },
                    { value: "JSON.stringify({ nan: NaN }); // '{\"nan\":null}'", description: "NaN ÊÕÈÍ null" },
                    { value: "JSON.stringify({ inf: Infinity }); // '{\"inf\":null}'", description: "Infinity ÊÕÈÍ null" },
                    { value: "JSON.stringify({ date: new Date() });", description: "ÇáÊæÇÑíÎ ÊõÍæøá Åáì äÕæÕ ISO" }
                ]
            },
            {
                name: "JSON.stringify - toJSON",
                description: "ÊÎÕíÕ ÊÍæíá ÇáßÇÆä ÈÇÓÊÎÏÇã ÏÇáÉ toJSON",
                values: [
                    { value: "const obj = { name: 'ÃÍãÏ', toJSON() { return { name: this.name }; } }; JSON.stringify(obj); // '{\"name\":\"ÃÍãÏ\"}'", description: "ÊÎÕíÕ ÇáÊÍæíá" },
                    { value: "const user = { id: 1, password: 'secret', toJSON() { const { password, ...rest } = this; return rest; } };", description: "ÍĞİ ßáãÉ ÇáãÑæÑ" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. JSON.parse - ÊÍáíá äÕ JSON
    // ============================================================
    {
        tag: "json-parse",
        description: "íÍæøá äÕ ÈÕíÛÉ JSON Åáì ßÇÆä Ãæ ãÕİæİÉ JavaScript İÚáíÉ",
        properties: [
            {
                name: "JSON.parse",
                description: "ÊÍáíá äÕ JSON Åáì ßÇÆä",
                values: [
                    { value: "JSON.parse('{\"name\":\"ÃÍãÏ\",\"age\":25}');", description: "ÊÍæíá äÕ Åáì ßÇÆä" },
                    { value: "JSON.parse('[1, 2, 3]');", description: "ÊÍæíá äÕ Åáì ãÕİæİÉ" },
                    { value: "JSON.parse('\"hello\"');", description: "ÊÍæíá äÕ Åáì äÕ" },
                    { value: "JSON.parse('42');", description: "ÊÍæíá äÕ Åáì ÑŞã" },
                    { value: "JSON.parse('true');", description: "ÊÍæíá äÕ Åáì ŞíãÉ ãäØŞíÉ" },
                    { value: "JSON.parse('null');", description: "ÊÍæíá äÕ Åáì null" }
                ]
            },
            {
                name: "JSON.parse - ãÚ ÏÇáÉ ãÑÇÌÚÉ",
                description: "ÇÓÊÎÏÇã ÏÇáÉ ÇáãÑÇÌÚÉ (reviver) áÊÍæíá ÇáŞíã",
                values: [
                    { value: "JSON.parse('{\"date\":\"2024-01-01\"}', (key, value) => { if (key === 'date') return new Date(value); return value; });", description: "ÊÍæíá ÇáäÕ Åáì ßÇÆä Date" },
                    { value: "JSON.parse('{\"num\":\"123\"}', (key, value) => { if (typeof value === 'string' && /^\\d+$/.test(value)) return Number(value); return value; });", description: "ÊÍæíá ÇáÃÑŞÇã ÇáäÕíÉ Åáì ÃÑŞÇã" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. ÃãËáÉ ÚãáíÉ
    // ============================================================
    {
        tag: "examples",
        description: "ÃãËáÉ ÚãáíÉ áÇÓÊÎÏÇã JSON",
        properties: [
            {
                name: "ãËÇá 1 - ÊÎÒíä æÇÓÊÑÌÇÚ ãä localStorage",
                description: "ÇÓÊÎÏÇã JSON áÊÎÒíä ÇáÈíÇäÇÊ İí ÇáãÊÕİÍ",
                values: [
                    { value: "function saveData(key, data) { localStorage.setItem(key, JSON.stringify(data)); } function loadData(key) { const data = localStorage.getItem(key); return data ? JSON.parse(data) : null; }", description: "ÊÎÒíä æÇÓÊÑÌÇÚ" },
                    { value: "const user = { name: 'ÃÍãÏ', age: 25, preferences: { theme: 'dark' } }; saveData('user', user); const loaded = loadData('user');", description: "ÊÎÒíä ßÇÆä ßÇãá" }
                ]
            },
            {
                name: "ãËÇá 2 - ÅÑÓÇá ÈíÇäÇÊ Åáì ÇáÎÇÏã",
                description: "ÇÓÊÎÏÇã JSON İí ØáÈÇÊ API",
                values: [
                    { value: "async function sendData(data) { const response = await fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); return response.json(); }", description: "ÅÑÓÇá JSON" }
                ]
            },
            {
                name: "ãËÇá 3 - äÓÎ ÚãíŞ ááßÇÆä",
                description: "ÇÓÊÎÏÇã JSON ááäÓÎ ÇáÚãíŞ (ãÚ ŞíæÏ)",
                values: [
                    { value: "function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }", description: "äÓÎ ÚãíŞ" },
                    { value: "const original = { a: 1, b: { c: 2 } }; const copy = deepClone(original); copy.b.c = 3; console.log(original.b.c); // 2", description: "ÇáäÓÎ ÇáÚãíŞ íÍãí ÇáÃÕá" }
                ]
            },
            {
                name: "ãËÇá 4 - ÊäÓíŞ JSON ááŞÑÇÁÉ",
                description: "ÚÑÖ JSON ÈÔßá ãŞÑæÁ",
                values: [
                    { value: "function prettyJSON(obj) { return JSON.stringify(obj, null, 2); }", description: "ÊäÓíŞ Ìãíá" },
                    { value: "console.log(prettyJSON({ name: 'ÃÍãÏ', age: 25, hobbies: ['ŞÑÇÁÉ', 'ÈÑãÌÉ'] }));", description: "ØÈÇÚÉ ÈÊäÓíŞ" }
                ]
            },
            {
                name: "ãËÇá 5 - ÊÍæíá ÇáÊÇÑíÎ ÚäÏ ÇáÊÍáíá",
                description: "ÊÍæíá ÇáÊæÇÑíÎ ÊáŞÇÆíÇğ ÚäÏ parse",
                values: [
                    { value: "function parseWithDates(json) { return JSON.parse(json, (key, value) => { if (typeof value === 'string' && /^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}/.test(value)) return new Date(value); return value; }); }", description: "ÊÍáíá ãÚ ÊæÇÑíÎ" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. äÕÇÆÍ æÅÑÔÇÏÇÊ
    // ============================================================
    {
        tag: "tips",
        description: "äÕÇÆÍ æÅÑÔÇÏÇÊ ãåãÉ áÇÓÊÎÏÇã JSON",
        properties: [
            {
                name: "äÕÇÆÍ ÚÇãÉ",
                description: "äÕÇÆÍ ÃÓÇÓíÉ ááÊÚÇãá ãÚ JSON",
                values: [
                    { value: "ÇÓÊÎÏã JSON.stringify ãÚ null, 2 ááŞÑÇÁÉ", description: "ááÊäÓíŞ ÇáÌãíá" },
                    { value: "ÇÓÊÎÏã ÇáÏÇáÉ ÇáãÑÇÌÚÉ İí parse", description: "áÊÍæíá ÇáÊæÇÑíÎ" },
                    { value: "ÇÓÊÎÏã try/catch ãÚ JSON.parse", description: "ááÊŞÇØ ÃÎØÇÁ ÇáÕíÇÛÉ" },
                    { value: "ÊÌäÈ ÊÎÒíä ÇáÏæÇá İí JSON", description: "ÊõÍĞİ ÃËäÇÁ ÇáÊÕÛíÑ" }
                ]
            },
            {
                name: "äÕÇÆÍ ÇáÃãÇä",
                description: "äÕÇÆÍ ááÃãÇä ÚäÏ ÇÓÊÎÏÇã JSON",
                values: [
                    { value: "áÇ ÊÓÊÎÏã eval() áÊÍáíá JSON", description: "ÇÓÊÎÏã JSON.parse İŞØ" },
                    { value: "ÊÍŞŞ ãä ÕÍÉ JSON ŞÈá parse", description: "ÎÇÕÉ ãä ãÕÇÏÑ ÎÇÑÌíÉ" },
                    { value: "ÇÓÊÎÏã reviver áİáÊÑÉ ÇáÈíÇäÇÊ", description: "áãäÚ ÇáÈíÇäÇÊ ÇáÖÇÑÉ" }
                ]
            },
            {
                name: "ÇáÃÎØÇÁ ÇáÔÇÆÚÉ",
                description: "ÃÎØÇÁ ÔÇÆÚÉ ÚäÏ ÇÓÊÎÏÇã JSON",
                values: [
                    { value: "äÓíÇä ÚáÇãÇÊ ÇáÊäÕíÕ İí JSON", description: "JSON íÊØáÈ \"key\":\"value\"" },
                    { value: "ÇÓÊÎÏÇã JSON.stringify ãÚ ßÇÆä ÍáŞí", description: "íÓÈÈ ÎØÃ" },
                    { value: "äÓíÇä try/catch ãÚ JSON.parse", description: "íÓÈÈ ÎØÃ ÚäÏ JSON ÛíÑ ÕÍíÍ" },
                    { value: "ÇÓÊÎÏÇã JSON ááäÓÎ ÇáÚãíŞ ãÚ ÇáÊæÇÑíÎ", description: "ÊõÍæøá ÇáÊæÇÑíÎ Åáì äÕæÕ" }
                ]
            }
        ]
    }
];

// ÊÕÏíÑ ÇáÈíÇäÇÊ
if (typeof window !== 'undefined') {
    window.jsJsonData = jsJsonData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsJsonData;
}