// ============================================================
// js-map-set.js
// Map æ Set æ WeakMap æ WeakSet İí JavaScript
// ÊÔÑÍ ÌãíÚ ÏæÇá æÎæÇÕ Map æ Set ãÚ ÃãËáÉ æÇÓÊÎÏÇãÇÊ
// ============================================================

const jsMapSetData = [
    // ============================================================
    // 1. Map - ÇáÎÑíØÉ
    // ============================================================
    {
        tag: "map",
        description: "ßÇÆä íãËá ãÌãæÚÉ ãä ÃÒæÇÌ ÇáãİÊÇÍ-ÇáŞíãÉ. íÍÇİÙ Úáì ÊÑÊíÈ ÇáÅÏÑÇÌ æíŞÈá Ãí äæÚ ßãİÊÇÍ (ÈãÇ İí Ğáß ÇáßÇÆäÇÊ)",
        properties: [
            {
                name: "new Map()",
                description: "ÅäÔÇÁ ÎÑíØÉ ÌÏíÏÉ",
                values: [
                    { value: "new Map()", description: "ÎÑíØÉ İÇÑÛÉ" },
                    { value: "new Map([['a', 1], ['b', 2]])", description: "ÎÑíØÉ ãä ãÕİæİÉ ÃÒæÇÌ" },
                    { value: "const map = new Map();", description: "ÎÑíØÉ İÇÑÛÉ" }
                ]
            },
            {
                name: "Map.set",
                description: "íÖíİ Ãæ íõÍÏöøË ÒæÌ ãİÊÇÍ-ŞíãÉ İí ÇáÎÑíØÉ",
                values: [
                    { value: "map.set('key', 'value');", description: "ÅÖÇİÉ ÒæÌ" },
                    { value: "map.set(1, 'æÇÍÏ');", description: "ÈãİÊÇÍ ÑŞã" },
                    { value: "map.set({}, 'ßÇÆä');", description: "ÈãİÊÇÍ ßÇÆä" },
                    { value: "map.set('name', 'ÃÍãÏ').set('age', 25);", description: "ÅÖÇİÉ ãÊÚÏÏÉ (ÊÓáÓá)" }
                ]
            },
            {
                name: "Map.get",
                description: "íõÑÌÚ ÇáŞíãÉ ÇáãÑÊÈØÉ ÈãİÊÇÍ ãÚíä İí ÇáÎÑíØÉ¡ Ãæ undefined Åä áã íæÌÏ",
                values: [
                    { value: "map.get('key');", description: "ŞÑÇÁÉ ŞíãÉ" },
                    { value: "map.get(1);", description: "ŞÑÇÁÉ ÈãİÊÇÍ ÑŞã" },
                    { value: "const value = map.get('name');", description: "ÊÎÒíä ÇáŞíãÉ" }
                ]
            },
            {
                name: "Map.has",
                description: "íÊÍŞŞ ãä æÌæÏ ãİÊÇÍ İí ÇáÎÑíØÉ",
                values: [
                    { value: "map.has('key'); // true/false", description: "ÇáÊÍŞŞ ãä ÇáãİÊÇÍ" },
                    { value: "if (map.has('name')) { console.log(map.get('name')); }", description: "ÇÓÊÎÏÇã İí ÇáÔÑØ" }
                ]
            },
            {
                name: "Map.delete",
                description: "íÍĞİ ãİÊÇÍÇğ ãÚíäÇğ ãä ÇáÎÑíØÉ æíõÑÌÚ true Åä äÌÍ",
                values: [
                    { value: "map.delete('key');", description: "ÍĞİ ãİÊÇÍ" },
                    { value: "const deleted = map.delete('name');", description: "ÊÎÒíä ÇáäÊíÌÉ" }
                ]
            },
            {
                name: "Map.clear",
                description: "íÍĞİ ÌãíÚ ÇáÚäÇÕÑ ãä ÇáÎÑíØÉ",
                values: [
                    { value: "map.clear();", description: "ÊİÑíÛ ÇáÎÑíØÉ" }
                ]
            },
            {
                name: "Map.size",
                description: "ÎÇÕíÉ ÊõÑÌÚ ÚÏÏ ÇáãÏÎáÇÊ ÇáãæÌæÏÉ İí ÇáÎÑíØÉ",
                values: [
                    { value: "map.size;", description: "ÚÏÏ ÇáÚäÇÕÑ" },
                    { value: "if (map.size === 0) { console.log('ÇáÎÑíØÉ İÇÑÛÉ'); }", description: "ÇáÊÍŞŞ ãä ÇáİÑÇÛ" }
                ]
            },
            {
                name: "Map.keys",
                description: "íõÑÌÚ ãõßÑöøÑÇğ (iterator) Úáì ãİÇÊíÍ ÇáÎÑíØÉ",
                values: [
                    { value: "for (const key of map.keys()) { console.log(key); }", description: "ÇáÊßÑÇÑ Úáì ÇáãİÇÊíÍ" },
                    { value: "const keys = [...map.keys()];", description: "ÊÍæíá ÇáãİÇÊíÍ Åáì ãÕİæİÉ" }
                ]
            },
            {
                name: "Map.values",
                description: "íõÑÌÚ ãõßÑöøÑÇğ Úáì Şíã ÇáÎÑíØÉ",
                values: [
                    { value: "for (const value of map.values()) { console.log(value); }", description: "ÇáÊßÑÇÑ Úáì ÇáŞíã" },
                    { value: "const values = [...map.values()];", description: "ÊÍæíá ÇáŞíã Åáì ãÕİæİÉ" }
                ]
            },
            {
                name: "Map.entries",
                description: "íõÑÌÚ ãõßÑöøÑÇğ Úáì ÃÒæÇÌ [ãİÊÇÍ, ŞíãÉ] İí ÇáÎÑíØÉ",
                values: [
                    { value: "for (const [key, value] of map.entries()) { console.log(key, value); }", description: "ÇáÊßÑÇÑ Úáì ÇáÃÒæÇÌ" },
                    { value: "for (const [key, value] of map) { console.log(key, value); }", description: "äİÓ entries (ÇİÊÑÇÖí)" },
                    { value: "const entries = [...map.entries()];", description: "ÊÍæíá Åáì ãÕİæİÉ ÃÒæÇÌ" }
                ]
            },
            {
                name: "Map.forEach",
                description: "íäİøĞ ÏÇáÉ Úáì ßá ÒæÌ ãİÊÇÍ/ŞíãÉ İí ÇáÎÑíØÉ",
                values: [
                    { value: "map.forEach((value, key) => { console.log(key, value); });", description: "ÇáÊßÑÇÑ Úáì ÇáÚäÇÕÑ" },
                    { value: "map.forEach((value, key, map) => { console.log(key, value, map.size); });", description: "ãÚ ÇáÎÑíØÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. Set - ÇáãÌãæÚÉ
    // ============================================================
    {
        tag: "set",
        description: "ßÇÆä íãËá ãÌãæÚÉ ãä ÇáŞíã ÇáİÑíÏÉ (ÈÏæä ÊßÑÇÑ). íÍÇİÙ Úáì ÊÑÊíÈ ÇáÅÏÑÇÌ æíŞÈá Ãí äæÚ ãä ÇáŞíã",
        properties: [
            {
                name: "new Set()",
                description: "ÅäÔÇÁ ãÌãæÚÉ ÌÏíÏÉ",
                values: [
                    { value: "new Set()", description: "ãÌãæÚÉ İÇÑÛÉ" },
                    { value: "new Set([1, 2, 3])", description: "ãÌãæÚÉ ãä ãÕİæİÉ" },
                    { value: "new Set('hello')", description: "ãÌãæÚÉ ãä äÕ ('h', 'e', 'l', 'o')" }
                ]
            },
            {
                name: "Set.add",
                description: "íÖíİ ŞíãÉ ÌÏíÏÉ ááãÌãæÚÉ Åä áã Êßä ãæÌæÏÉ ãÓÈŞÇğ",
                values: [
                    { value: "set.add(5);", description: "ÅÖÇİÉ ÑŞã" },
                    { value: "set.add('hello');", description: "ÅÖÇİÉ äÕ" },
                    { value: "set.add({});", description: "ÅÖÇİÉ ßÇÆä" },
                    { value: "set.add(5).add(6).add(7);", description: "ÅÖÇİÉ ãÊÚÏÏÉ (ÊÓáÓá)" }
                ]
            },
            {
                name: "Set.has",
                description: "íÊÍŞŞ ãä æÌæÏ ŞíãÉ İí ÇáãÌãæÚÉ",
                values: [
                    { value: "set.has(5); // true/false", description: "ÇáÊÍŞŞ ãä ÇáŞíãÉ" },
                    { value: "if (set.has('hello')) { console.log('ãæÌæÏ'); }", description: "ÇÓÊÎÏÇã İí ÇáÔÑØ" }
                ]
            },
            {
                name: "Set.delete",
                description: "íÍĞİ ŞíãÉ ãÍÏÏÉ ãä ÇáãÌãæÚÉ æíõÑÌÚ true Åä äÌÍ",
                values: [
                    { value: "set.delete(5);", description: "ÍĞİ ŞíãÉ" },
                    { value: "const deleted = set.delete('hello');", description: "ÊÎÒíä ÇáäÊíÌÉ" }
                ]
            },
            {
                name: "Set.clear",
                description: "íÍĞİ ÌãíÚ ÇáÚäÇÕÑ ãä ÇáãÌãæÚÉ",
                values: [
                    { value: "set.clear();", description: "ÊİÑíÛ ÇáãÌãæÚÉ" }
                ]
            },
            {
                name: "Set.size",
                description: "ÎÇÕíÉ ÊõÑÌÚ ÚÏÏ ÇáÚäÇÕÑ ÇáİÑíÏÉ İí ÇáãÌãæÚÉ",
                values: [
                    { value: "set.size;", description: "ÚÏÏ ÇáÚäÇÕÑ" },
                    { value: "if (set.size === 0) { console.log('ÇáãÌãæÚÉ İÇÑÛÉ'); }", description: "ÇáÊÍŞŞ ãä ÇáİÑÇÛ" }
                ]
            },
            {
                name: "Set.values",
                description: "íõÑÌÚ ãõßÑöøÑÇğ Úáì Şíã ÇáãÌãæÚÉ",
                values: [
                    { value: "for (const value of set.values()) { console.log(value); }", description: "ÇáÊßÑÇÑ Úáì ÇáŞíã" },
                    { value: "const values = [...set.values()];", description: "ÊÍæíá Åáì ãÕİæİÉ" }
                ]
            },
            {
                name: "Set.keys",
                description: "İí Set¡ keys åí äİÓ values (ááÊæÇİŞ ãÚ Map)",
                values: [
                    { value: "for (const key of set.keys()) { console.log(key); }", description: "ÇáÊßÑÇÑ Úáì ÇáãİÇÊíÍ (äİÓ values)" }
                ]
            },
            {
                name: "Set.entries",
                description: "íõÑÌÚ ãõßÑöøÑÇğ Úáì ÃÒæÇÌ [ŞíãÉ, ŞíãÉ] (ááÊæÇİŞ ãÚ Map)",
                values: [
                    { value: "for (const [value, value2] of set.entries()) { console.log(value); }", description: "ÇáÊßÑÇÑ" },
                    { value: "const entries = [...set.entries()];", description: "ÊÍæíá Åáì ãÕİæİÉ" }
                ]
            },
            {
                name: "Set.forEach",
                description: "íäİøĞ ÏÇáÉ Úáì ßá ŞíãÉ İí ÇáãÌãæÚÉ",
                values: [
                    { value: "set.forEach(value => { console.log(value); });", description: "ÇáÊßÑÇÑ Úáì ÇáÚäÇÕÑ" },
                    { value: "set.forEach((value, key, set) => { console.log(value, key); });", description: "ãÚ ÇáãİÇÊíÍ" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. WeakMap - ÇáÎÑíØÉ ÇáÖÚíİÉ
    // ============================================================
    {
        tag: "weakmap",
        description: "ãËá Map áßä ãİÇÊíÍåÇ íÌÈ Ãä Êßæä ßÇÆäÇÊ İŞØ¡ æáÇ ÊãäÚ ÌÇãÚ ÇáŞãÇãÉ ãä ÍĞİåÇ ÚäÏ ÚÏã ÇÓÊÎÏÇãåÇ. ãİíÏ ááÊÎÒíä ÇáãÄŞÊ æÇáÈíÇäÇÊ ÇáÎÇÕÉ ÈÇáßÇÆäÇÊ",
        properties: [
            {
                name: "new WeakMap()",
                description: "ÅäÔÇÁ ÎÑíØÉ ÖÚíİÉ ÌÏíÏÉ",
                values: [
                    { value: "new WeakMap()", description: "ÎÑíØÉ ÖÚíİÉ İÇÑÛÉ" },
                    { value: "const weakMap = new WeakMap();", description: "ÅäÔÇÁ" }
                ]
            },
            {
                name: "WeakMap.set",
                description: "íÖíİ ÒæÌ ãİÊÇÍ-ŞíãÉ (íÌÈ Ãä íßæä ÇáãİÊÇÍ ßÇÆäÇğ)",
                values: [
                    { value: "const obj = {}; weakMap.set(obj, 'ÈíÇäÇÊ');", description: "ÅÖÇİÉ ÈßÇÆä ßãİÊÇÍ" },
                    { value: "weakMap.set(document.body, 'ãÚáæãÇÊ');", description: "ÈßÇÆä DOM" }
                ]
            },
            {
                name: "WeakMap.get",
                description: "íõÑÌÚ ÇáŞíãÉ ÇáãÑÊÈØÉ ÈãİÊÇÍ ßÇÆä ãÚíä",
                values: [
                    { value: "weakMap.get(obj);", description: "ŞÑÇÁÉ ŞíãÉ" }
                ]
            },
            {
                name: "WeakMap.has",
                description: "íÊÍŞŞ ãä æÌæÏ ãİÊÇÍ İí ÇáÎÑíØÉ ÇáÖÚíİÉ",
                values: [
                    { value: "weakMap.has(obj); // true/false", description: "ÇáÊÍŞŞ" }
                ]
            },
            {
                name: "WeakMap.delete",
                description: "íÍĞİ ãİÊÇÍÇğ ãÚíäÇğ ãä ÇáÎÑíØÉ ÇáÖÚíİÉ",
                values: [
                    { value: "weakMap.delete(obj);", description: "ÍĞİ" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. WeakSet - ÇáãÌãæÚÉ ÇáÖÚíİÉ
    // ============================================================
    {
        tag: "weakset",
        description: "ãËá Set áßä ÚäÇÕÑåÇ íÌÈ Ãä Êßæä ßÇÆäÇÊ İŞØ¡ æáÇ ÊãäÚ ÌÇãÚ ÇáŞãÇãÉ ãä ÍĞİåÇ ÚäÏ ÚÏã ÇÓÊÎÏÇãåÇ. ãİíÏ áÊÊÈÚ ÇáßÇÆäÇÊ Ïæä ÊÓÑíÈ ĞÇßÑÉ",
        properties: [
            {
                name: "new WeakSet()",
                description: "ÅäÔÇÁ ãÌãæÚÉ ÖÚíİÉ ÌÏíÏÉ",
                values: [
                    { value: "new WeakSet()", description: "ãÌãæÚÉ ÖÚíİÉ İÇÑÛÉ" },
                    { value: "const weakSet = new WeakSet();", description: "ÅäÔÇÁ" }
                ]
            },
            {
                name: "WeakSet.add",
                description: "íÖíİ ßÇÆäÇğ Åáì ÇáãÌãæÚÉ ÇáÖÚíİÉ",
                values: [
                    { value: "const obj = {}; weakSet.add(obj);", description: "ÅÖÇİÉ ßÇÆä" },
                    { value: "weakSet.add(document.body);", description: "ÅÖÇİÉ ßÇÆä DOM" }
                ]
            },
            {
                name: "WeakSet.has",
                description: "íÊÍŞŞ ãä æÌæÏ ßÇÆä İí ÇáãÌãæÚÉ ÇáÖÚíİÉ",
                values: [
                    { value: "weakSet.has(obj); // true/false", description: "ÇáÊÍŞŞ" }
                ]
            },
            {
                name: "WeakSet.delete",
                description: "íÍĞİ ßÇÆäÇğ ãÚíäÇğ ãä ÇáãÌãæÚÉ ÇáÖÚíİÉ",
                values: [
                    { value: "weakSet.delete(obj);", description: "ÍĞİ" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. ÃãËáÉ ÚãáíÉ
    // ============================================================
    {
        tag: "examples",
        description: "ÃãËáÉ ÚãáíÉ áÇÓÊÎÏÇã Map æ Set",
        properties: [
            {
                name: "ãËÇá 1 - ÇÓÊÎÏÇã Map ßĞÇßÑÉ ÊÎÒíä ãÄŞÊ",
                description: "ÊÎÒíä äÊÇÆÌ ÇáÏæÇá İí Map",
                values: [
                    { value: "const cache = new Map(); function memoize(fn) { return function(...args) { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const result = fn(...args); cache.set(key, result); return result; }; }", description: "ĞÇßÑÉ ÊÎÒíä" }
                ]
            },
            {
                name: "ãËÇá 2 - ÅÒÇáÉ ÇáÊßÑÇÑÇÊ ãä ãÕİæİÉ",
                description: "ÇÓÊÎÏÇã Set áÅÒÇáÉ ÇáÊßÑÇÑÇÊ",
                values: [
                    { value: "const unique = [...new Set([1, 2, 2, 3, 3, 4])]; // [1, 2, 3, 4]", description: "ÅÒÇáÉ ÇáÊßÑÇÑÇÊ" },
                    { value: "const uniqueNames = [...new Set(names)];", description: "ÅÒÇáÉ ÇáÃÓãÇÁ ÇáãßÑÑÉ" }
                ]
            },
            {
                name: "ãËÇá 3 - ÊÊÈÚ ÇáßÇÆäÇÊ ÈÇÓÊÎÏÇã WeakSet",
                description: "ÊÊÈÚ ÇáßÇÆäÇÊ Ïæä ÊÓÑíÈ ĞÇßÑÉ",
                values: [
                    { value: "const visited = new WeakSet(); function visit(obj) { if (visited.has(obj)) return; visited.add(obj); console.log('ÒíÇÑÉ ÌÏíÏÉ'); }", description: "ÊÊÈÚ ÇáÒíÇÑÇÊ" }
                ]
            },
            {
                name: "ãËÇá 4 - ÊÎÒíä ÈíÇäÇÊ ÎÇÕÉ ááßÇÆäÇÊ",
                description: "ÇÓÊÎÏÇã WeakMap áÊÎÒíä ÈíÇäÇÊ ÎÇÕÉ",
                values: [
                    { value: "const privateData = new WeakMap(); function setPrivate(obj, data) { privateData.set(obj, data); } function getPrivate(obj) { return privateData.get(obj); }", description: "ÈíÇäÇÊ ÎÇÕÉ" }
                ]
            },
            {
                name: "ãËÇá 5 - ÇáÚÏÇÏÇÊ ÈÇÓÊÎÏÇã Map",
                description: "ÊÚÏÇÏ ÊßÑÇÑ ÇáÚäÇÕÑ İí ãÕİæİÉ",
                values: [
                    { value: "function countOccurrences(arr) { const counts = new Map(); for (const item of arr) { counts.set(item, (counts.get(item) || 0) + 1); } return counts; }", description: "ÊÚÏÇÏ ÇáÊßÑÇÑÇÊ" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. äÕÇÆÍ æÅÑÔÇÏÇÊ
    // ============================================================
    {
        tag: "tips",
        description: "äÕÇÆÍ æÅÑÔÇÏÇÊ ãåãÉ áÇÓÊÎÏÇã Map æ Set",
        properties: [
            {
                name: "äÕÇÆÍ ÚÇãÉ",
                description: "äÕÇÆÍ ÃÓÇÓíÉ ááÊÚÇãá ãÚ Map æ Set",
                values: [
                    { value: "ÇÓÊÎÏã Map ÈÏáÇğ ãä ÇáßÇÆäÇÊ ááãİÇÊíÍ ÇáÏíäÇãíßíÉ", description: "Map íŞÈá Ãí äæÚ ßãİÊÇÍ" },
                    { value: "ÇÓÊÎÏã Set áÅÒÇáÉ ÇáÊßÑÇÑÇÊ", description: "ÃÓåá ØÑíŞÉ" },
                    { value: "ÇÓÊÎÏã WeakMap ááÈíÇäÇÊ ÇáÎÇÕÉ ÈÇáßÇÆäÇÊ", description: "ÊÌäÈ ÊÓÑíÈ ÇáĞÇßÑÉ" },
                    { value: "ÇÓÊÎÏã WeakSet áÊÊÈÚ ÇáßÇÆäÇÊ", description: "ÈÏæä ÊÓÑíÈ ĞÇßÑÉ" },
                    { value: "ÇÓÊÎÏã Map ááÊÎÒíä ÇáãÄŞÊ", description: "ãÚ ãİÇÊíÍ ãÚŞÏÉ" }
                ]
            },
            {
                name: "äÕÇÆÍ ÇáÃÏÇÁ",
                description: "äÕÇÆÍ áÊÍÓíä ÃÏÇÁ Map æ Set",
                values: [
                    { value: "Map ÃÓÑÚ ãä ÇáßÇÆäÇÊ ááÊÍÏíË ÇáãÊßÑÑ", description: "ÎÇÕÉ ãÚ ÇáãİÇÊíÍ ÇáÏíäÇãíßíÉ" },
                    { value: "Set ÃÓÑÚ ãä ÇáãÕİæİÇÊ ááÈÍË Úä ÇáŞíã", description: "ÈÇÓÊÎÏÇã has" },
                    { value: "ÇÓÊÎÏã size ÈÏáÇğ ãä count íÏæíÇğ", description: "ÃÓÑÚ" }
                ]
            },
            {
                name: "ÇáİÑŞ Èíä Map æ Object",
                description: "ãŞÇÑäÉ Èíä Map æ Object",
                values: [
                    { value: "Map íŞÈá Ãí äæÚ ßãİÊÇÍ", description: "Object íŞÈá äÕæÕÇğ æÑãæÒÇğ İŞØ" },
                    { value: "Map íÍÇİÙ Úáì ÊÑÊíÈ ÇáÅÏÑÇÌ", description: "Object íÍÇİÙ Úáì ÇáÊÑÊíÈ (ãä ES2015)" },
                    { value: "Map áå size", description: "Object íÓÊÎÏã Object.keys().length" },
                    { value: "Map ŞÇÈá ááÊßÑÇÑ ãÈÇÔÑÉğ", description: "Object íÍÊÇÌ Åáì Object.entries" }
                ]
            }
        ]
    }
];

// ÊÕÏíÑ ÇáÈíÇäÇÊ
if (typeof window !== 'undefined') {
    window.jsMapSetData = jsMapSetData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsMapSetData;
}