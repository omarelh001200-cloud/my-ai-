// ============================================================
// js-arrays.js
// ÏæÇá ÇáãÕİæİÇÊ (Array Methods) İí JavaScript
// ÊÔÑÍ ÌãíÚ ÏæÇá Array ÇáãÏãÌÉ ãÚ ÃãËáÉ æÇÓÊÎÏÇãÇÊ
// ============================================================

const jsArraysData = [
    // ============================================================
    // 1. ÅäÔÇÁ ÇáãÕİæİÇÊ
    // ============================================================
    {
        tag: "array-creation",
        description: "ØÑŞ ÅäÔÇÁ ÇáãÕİæİÇÊ İí JavaScript",
        properties: [
            {
                name: "Array literal",
                description: "ÅäÔÇÁ ãÕİæİÉ ÈÇÓÊÎÏÇã ÇáÃŞæÇÓ ÇáãÑÈÚÉ",
                values: [
                    { value: "[]", description: "ãÕİæİÉ İÇÑÛÉ" },
                    { value: "[1, 2, 3]", description: "ãÕİæİÉ ÃÑŞÇã" },
                    { value: "['a', 'b', 'c']", description: "ãÕİæİÉ äÕæÕ" },
                    { value: "[1, 'a', true, null]", description: "ãÕİæİÉ ÈÃäæÇÚ ãÎÊáİÉ" },
                    { value: "[[1, 2], [3, 4]]", description: "ãÕİæİÉ ãÊÏÇÎáÉ" }
                ]
            },
            {
                name: "new Array()",
                description: "ÅäÔÇÁ ãÕİæİÉ ÈÇÓÊÎÏÇã ÇáÜ constructor",
                values: [
                    { value: "new Array()", description: "ãÕİæİÉ İÇÑÛÉ" },
                    { value: "new Array(5)", description: "ãÕİæİÉ ÈØæá 5 (ÚäÇÕÑ İÇÑÛÉ)" },
                    { value: "new Array(1, 2, 3)", description: "ãÕİæİÉ [1, 2, 3]" },
                    { value: "Array.from('hello')", description: "['h', 'e', 'l', 'l', 'o']" },
                    { value: "Array.of(1, 2, 3)", description: "[1, 2, 3]" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. ÏæÇá ÇáÊßÑÇÑ (Iteration Methods)
    // ============================================================
    {
        tag: "iteration-methods",
        description: "ÏæÇá ááÊßÑÇÑ Úáì ÚäÇÕÑ ÇáãÕİæİÉ",
        properties: [
            // -------- forEach --------
            {
                name: "forEach",
                description: "íäİøĞ ÏÇáÉ Úáì ßá ÚäÕÑ İí ÇáãÕİæİÉ. áÇ íõÑÌÚ ŞíãÉ ÌÏíÏÉ æáÇ íãßä ÇÓÊÎÏÇã break Ãæ continue (ÇÓÊÎÏã return ááÊÎØí)",
                values: [
                    { value: "array.forEach(item => { console.log(item); });", description: "ØÈÇÚÉ ßá ÚäÕÑ" },
                    { value: "array.forEach((item, index) => { console.log(index, item); });", description: "ãÚ ÇáİåÑÓ" },
                    { value: "array.forEach((item, index, arr) => { arr[index] = item * 2; });", description: "ÊÚÏíá ÇáãÕİæİÉ" },
                    { value: "[1, 2, 3].forEach(n => console.log(n));", description: "ØÈÇÚÉ 1, 2, 3" }
                ]
            },
            // -------- map --------
            {
                name: "map",
                description: "íõäÔÆ ãÕİæİÉ ÌÏíÏÉ ÈÊØÈíŞ ÏÇáÉ Úáì ßá ÚäÕÑ ãä ÇáãÕİæİÉ ÇáÃÕáíÉ. ÊõÑÌÚ ãÕİæİÉ ÈäİÓ ÇáØæá",
                values: [
                    { value: "const doubled = numbers.map(n => n * 2);", description: "ãÖÇÚİÉ ßá ÑŞã" },
                    { value: "const names = users.map(user => user.name);", description: "ÇÓÊÎÑÇÌ ÇáÃÓãÇÁ" },
                    { value: "const strings = [1, 2, 3].map(n => n.toString());", description: "ÊÍæíá Åáì äÕæÕ" },
                    { value: "const squares = [1, 2, 3].map(n => n ** 2);", description: "[1, 4, 9]" },
                    { value: "const formatted = items.map((item, i) => `${i}: ${item}`);", description: "ãÚ ÇáİåÑÓ" }
                ]
            },
            // -------- filter --------
            {
                name: "filter",
                description: "íõäÔÆ ãÕİæİÉ ÌÏíÏÉ ÊÍÊæí İŞØ Úáì ÇáÚäÇÕÑ ÇáÊí ÊÍŞŞ ÔÑØÇğ ãÚíäÇğ (ÊõÑÌÚ true)",
                values: [
                    { value: "const evens = numbers.filter(n => n % 2 === 0);", description: "ÇáÃÚÏÇÏ ÇáÒæÌíÉ" },
                    { value: "const activeUsers = users.filter(user => user.isActive);", description: "ÇáãÓÊÎÏãíä ÇáäÔØíä" },
                    { value: "const longNames = names.filter(name => name.length > 5);", description: "ÇáÃÓãÇÁ ÇáØæíáÉ" },
                    { value: "const adults = people.filter(person => person.age >= 18);", description: "ÇáÈÇáÛíä" },
                    { value: "const nonNull = items.filter(item => item !== null);", description: "ÅÒÇáÉ null" }
                ]
            },
            // -------- reduce --------
            {
                name: "reduce",
                description: "íÏãÌ ßá ÚäÇÕÑ ÇáãÕİæİÉ İí ŞíãÉ æÇÍÏÉ ÚÈÑ ÊÑÇßã ÇáäÊíÌÉ ÎØæÉ ÈÎØæÉ. ÊÓÊŞÈá ÏÇáÉ æãÈÏÆÇğ ááÊÑÇßã",
                values: [
                    { value: "const sum = numbers.reduce((acc, n) => acc + n, 0);", description: "ãÌãæÚ ÇáÃÑŞÇã" },
                    { value: "const max = numbers.reduce((a, b) => a > b ? a : b);", description: "ÃßÈÑ ÑŞã" },
                    { value: "const product = numbers.reduce((acc, n) => acc * n, 1);", description: "ÍÇÕá ÇáÖÑÈ" },
                    { value: "const grouped = items.reduce((acc, item) => { acc[item.category] = [...(acc[item.category] || []), item]; return acc; }, {});", description: "ÊÌãíÚ ÍÓÈ ÇáÊÕäíİ" },
                    { value: "const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);", description: "ÅÌãÇáí ÇáÓáÉ" }
                ]
            },
            // -------- reduceRight --------
            {
                name: "reduceRight",
                description: "ãËá reduce áßä íÈÏÃ ãä äåÇíÉ ÇáãÕİæİÉ (ãä Çáíãíä Åáì ÇáíÓÇÑ)",
                values: [
                    { value: "const result = [1, 2, 3].reduceRight((acc, n) => acc + n, 0);", description: "6" },
                    { value: "const reversed = arr.reduceRight((acc, item) => [...acc, item], []);", description: "ÚßÓ ÇáãÕİæİÉ" }
                ]
            },
            // -------- some --------
            {
                name: "some",
                description: "íõÑÌÚ true ÅĞÇ ÍŞŞ ÚäÕÑ æÇÍÏ Úáì ÇáÃŞá İí ÇáãÕİæİÉ ÇáÔÑØ",
                values: [
                    { value: "const hasAdult = ages.some(age => age >= 18);", description: "åá íæÌÏ ÈÇáÛ¿" },
                    { value: "const hasError = results.some(r => r.status === 'error');", description: "åá íæÌÏ ÎØÃ¿" },
                    { value: "const hasNegative = numbers.some(n => n < 0);", description: "åá íæÌÏ ÚÏÏ ÓÇáÈ¿" }
                ]
            },
            // -------- every --------
            {
                name: "every",
                description: "íõÑÌÚ true İŞØ ÅĞÇ ÍŞŞ ÌãíÚ ÚäÇÕÑ ÇáãÕİæİÉ ÇáÔÑØ",
                values: [
                    { value: "const allAdults = ages.every(age => age >= 18);", description: "ßáåã ÈÇáÛæä¿" },
                    { value: "const allValid = data.every(item => item.isValid);", description: "ßáåã ÕÇáÍæä¿" },
                    { value: "const allPositive = numbers.every(n => n > 0);", description: "ßáåã ãæÌÈæä¿" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. ÏæÇá ÇáÈÍË (Search Methods)
    // ============================================================
    {
        tag: "search-methods",
        description: "ÏæÇá ááÈÍË İí ÇáãÕİæİÇÊ",
        properties: [
            // -------- find --------
            {
                name: "find",
                description: "íõÑÌÚ Ãæá ÚäÕÑ íÍŞŞ ÔÑØÇğ ãÚíäÇğ¡ Ãæ undefined Åä áã íæÌÏ",
                values: [
                    { value: "const user = users.find(u => u.id === 5);", description: "ÇáÈÍË Úä ãÓÊÎÏã ÈÇáãÚÑİ" },
                    { value: "const firstAdult = people.find(p => p.age >= 18);", description: "Ãæá ÈÇáÛ" },
                    { value: "const item = items.find(i => i.name === 'ßÊÇÈ');", description: "ÇáÈÍË ÈÇÓã" }
                ]
            },
            // -------- findIndex --------
            {
                name: "findIndex",
                description: "íõÑÌÚ İåÑÓ Ãæá ÚäÕÑ íÍŞŞ ÔÑØÇğ ãÚíäÇğ¡ Ãæ -1 Åä áã íæÌÏ",
                values: [
                    { value: "const index = users.findIndex(u => u.id === 5);", description: "İåÑÓ ÇáãÓÊÎÏã" },
                    { value: "const idx = numbers.findIndex(n => n > 10);", description: "Ãæá ÑŞã > 10" }
                ]
            },
            // -------- findLast --------
            {
                name: "findLast",
                description: "íõÑÌÚ ÂÎÑ ÚäÕÑ íÍŞŞ ÔÑØÇğ ãÚíäÇğ (íÈÍË ãä ÇáäåÇíÉ)",
                values: [
                    { value: "const lastAdult = people.findLast(p => p.age >= 18);", description: "ÂÎÑ ÈÇáÛ" },
                    { value: "const last = numbers.findLast(n => n > 5);", description: "ÂÎÑ ÑŞã > 5" }
                ]
            },
            // -------- findLastIndex --------
            {
                name: "findLastIndex",
                description: "íõÑÌÚ İåÑÓ ÂÎÑ ÚäÕÑ íÍŞŞ ÔÑØÇğ ãÚíäÇğ (íÈÍË ãä ÇáäåÇíÉ)",
                values: [
                    { value: "const idx = numbers.findLastIndex(n => n > 5);", description: "İåÑÓ ÂÎÑ ÑŞã > 5" }
                ]
            },
            // -------- includes --------
            {
                name: "includes",
                description: "íÊÍŞŞ Åä ßÇäÊ ÇáãÕİæİÉ ÊÍÊæí Úáì ŞíãÉ ãÚíäÉ¡ æíõÑÌÚ true Ãæ false",
                values: [
                    { value: "arr.includes(3);", description: "åá íÍÊæí Úáì 3¿" },
                    { value: "names.includes('ÃÍãÏ');", description: "åá íæÌÏ ÇÓã ÃÍãÏ¿" },
                    { value: "colors.includes('red');", description: "åá íæÌÏ áæä ÃÍãÑ¿" }
                ]
            },
            // -------- indexOf --------
            {
                name: "indexOf",
                description: "íõÑÌÚ İåÑÓ Ãæá ÙåæÑ áŞíãÉ ãÚíäÉ¡ Ãæ -1 Åä áã ÊæÌÏ",
                values: [
                    { value: "arr.indexOf(3);", description: "İåÑÓ ÇáÑŞã 3" },
                    { value: "names.indexOf('ÃÍãÏ');", description: "İåÑÓ ÃÍãÏ" }
                ]
            },
            // -------- lastIndexOf --------
            {
                name: "lastIndexOf",
                description: "íõÑÌÚ İåÑÓ ÂÎÑ ÙåæÑ áŞíãÉ ãÚíäÉ¡ Ãæ -1 Åä áã ÊæÌÏ",
                values: [
                    { value: "arr.lastIndexOf(3);", description: "ÂÎÑ İåÑÓ ááÑŞã 3" },
                    { value: "names.lastIndexOf('ÃÍãÏ');", description: "ÂÎÑ İåÑÓ áÃÍãÏ" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. ÏæÇá ÇáÅÖÇİÉ æÇáÍĞİ
    // ============================================================
    {
        tag: "add-remove-methods",
        description: "ÏæÇá áÅÖÇİÉ æÍĞİ ÇáÚäÇÕÑ ãä ÇáãÕİæİÉ",
        properties: [
            // -------- push --------
            {
                name: "push",
                description: "íÖíİ ÚäÕÑÇğ æÇÍÏÇğ Ãæ ÃßËÑ Åáì äåÇíÉ ÇáãÕİæİÉ æíõÑÌÚ ÇáØæá ÇáÌÏíÏ",
                values: [
                    { value: "arr.push(4);", description: "ÅÖÇİÉ 4" },
                    { value: "arr.push(5, 6, 7);", description: "ÅÖÇİÉ ÚÏÉ ÚäÇÕÑ" },
                    { value: "arr.push(item);", description: "ÅÖÇİÉ ãÊÛíÑ" }
                ]
            },
            // -------- pop --------
            {
                name: "pop",
                description: "íÍĞİ ÂÎÑ ÚäÕÑ ãä ÇáãÕİæİÉ æíõÑÌÚå",
                values: [
                    { value: "const last = arr.pop();", description: "ÍĞİ æÅÑÌÇÚ ÂÎÑ ÚäÕÑ" }
                ]
            },
            // -------- shift --------
            {
                name: "shift",
                description: "íÍĞİ Ãæá ÚäÕÑ ãä ÇáãÕİæİÉ æíõÑÌÚå¡ æíõÒíÍ ÈÇŞí ÇáÚäÇÕÑ ááÃãÇã",
                values: [
                    { value: "const first = arr.shift();", description: "ÍĞİ æÅÑÌÇÚ Ãæá ÚäÕÑ" }
                ]
            },
            // -------- unshift --------
            {
                name: "unshift",
                description: "íÖíİ ÚäÕÑÇğ æÇÍÏÇğ Ãæ ÃßËÑ Åáì ÈÏÇíÉ ÇáãÕİæİÉ æíõÑÌÚ ÇáØæá ÇáÌÏíÏ",
                values: [
                    { value: "arr.unshift(0);", description: "ÅÖÇİÉ 0 İí ÇáÈÏÇíÉ" },
                    { value: "arr.unshift(-2, -1, 0);", description: "ÅÖÇİÉ ÚÏÉ ÚäÇÕÑ İí ÇáÈÏÇíÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. ÏæÇá ÇáÊŞØíÚ æÇáÏãÌ
    // ============================================================
    {
        tag: "slice-splice-methods",
        description: "ÏæÇá áÊŞØíÚ æÏãÌ ÇáãÕİæİÇÊ",
        properties: [
            // -------- slice --------
            {
                name: "slice",
                description: "íõÑÌÚ ÌÒÁÇğ ÌÏíÏÇğ ãä ÇáãÕİæİÉ Èíä İåÑÓíä Ïæä ÊÚÏíá ÇáÃÕáíÉ",
                values: [
                    { value: "const part = arr.slice(1, 3);", description: "ÇáÚäÇÕÑ ãä 1 Åáì 3" },
                    { value: "const copy = arr.slice();", description: "äÓÎ ÇáãÕİæİÉ" },
                    { value: "const lastTwo = arr.slice(-2);", description: "ÂÎÑ ÚäÕÑíä" }
                ]
            },
            // -------- splice --------
            {
                name: "splice",
                description: "íÍĞİ æ/Ãæ íÖíİ ÚäÇÕÑ İí ãßÇä ãÍÏÏ ãä ÇáãÕİæİÉ¡ æíõÚÏøá ÇáãÕİæİÉ ÇáÃÕáíÉ",
                values: [
                    { value: "arr.splice(1, 2);", description: "ÍĞİ ÚäÕÑíä ãä ÇáİåÑÓ 1" },
                    { value: "arr.splice(1, 0, 'new');", description: "ÅÖÇİÉ ÚäÕÑ İí ÇáİåÑÓ 1" },
                    { value: "arr.splice(1, 2, 'a', 'b');", description: "ÇÓÊÈÏÇá ÚäÕÑíä" }
                ]
            },
            // -------- concat --------
            {
                name: "concat",
                description: "íõäÔÆ ãÕİæİÉ ÌÏíÏÉ ÈÏãÌ ãÕİæİÊíä Ãæ ÃßËÑ Ïæä ÊÚÏíá ÇáÃÕáíÊíä",
                values: [
                    { value: "const merged = arr1.concat(arr2);", description: "ÏãÌ ãÕİæİÊíä" },
                    { value: "const combined = arr1.concat(arr2, arr3);", description: "ÏãÌ ËáÇË ãÕİæİÇÊ" },
                    { value: "const withItem = arr.concat('new');", description: "ÏãÌ ãÚ ÚäÕÑ" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. ÏæÇá ÇáÊÍæíá
    // ============================================================
    {
        tag: "transform-methods",
        description: "ÏæÇá áÊÍæíá ÇáãÕİæİÇÊ",
        properties: [
            // -------- join --------
            {
                name: "join",
                description: "íÍæøá ÚäÇÕÑ ÇáãÕİæİÉ Åáì äÕ æÇÍÏ ãİÕæá ÈİÇÕá ãÍÏÏ",
                values: [
                    { value: "const str = arr.join(', ');", description: "äÕ ãİÕæá ÈİÇÕáÉ" },
                    { value: "const text = words.join(' ');", description: "äÕ ãİÕæá ÈãÓÇİÉ" },
                    { value: "const html = items.join('');", description: "äÕ ÈÏæä İÇÕá" }
                ]
            },
            // -------- toString --------
            {
                name: "toString",
                description: "íÍæøá ÇáãÕİæİÉ Åáì äÕ (ãİÕæá ÈİæÇÕá)",
                values: [
                    { value: "const str = arr.toString();", description: "äÕ ÇáãÕİæİÉ" }
                ]
            },
            // -------- flat --------
            {
                name: "flat",
                description: "íõäÔÆ ãÕİæİÉ ÌÏíÏÉ ÈÏãÌ ãÕİæİÇÊ ãÊÏÇÎáÉ Åáì ãÓÊæì æÇÍÏ ÈÚãŞ ãÍÏÏ",
                values: [
                    { value: "const flat = nested.flat(1);", description: "ÊÓØíÍ ãÓÊæì æÇÍÏ" },
                    { value: "const deep = nested.flat(Infinity);", description: "ÊÓØíÍ ßÇãá" },
                    { value: "const two = nested.flat(2);", description: "ÊÓØíÍ ãÓÊæííä" }
                ]
            },
            // -------- flatMap --------
            {
                name: "flatMap",
                description: "íõØÈøŞ map Úáì ßá ÚäÕÑ Ëã íõÓØøÍ ÇáäÊíÌÉ ÈãÓÊæì æÇÍÏ",
                values: [
                    { value: "const result = arr.flatMap(x => [x, x * 2]);", description: "ÊæÓíÚ ßá ÚäÕÑ" },
                    { value: "const words = sentences.flatMap(s => s.split(' '));", description: "ÊŞÓíã ÇáÌãá" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. ÏæÇá ÇáÊÑÊíÈ
    // ============================================================
    {
        tag: "sort-methods",
        description: "ÏæÇá áÊÑÊíÈ ÇáãÕİæİÇÊ",
        properties: [
            // -------- sort --------
            {
                name: "sort",
                description: "íÑÊøÈ ÚäÇÕÑ ÇáãÕİæİÉ İí ãßÇäåÇ ÍÓÈ ÏÇáÉ ãŞÇÑäÉ ÇÎÊíÇÑíÉ",
                values: [
                    { value: "numbers.sort((a, b) => a - b);", description: "ÊÑÊíÈ ÊÕÇÚÏí" },
                    { value: "numbers.sort((a, b) => b - a);", description: "ÊÑÊíÈ ÊäÇÒáí" },
                    { value: "names.sort();", description: "ÊÑÊíÈ ÃÈÌÏí" },
                    { value: "users.sort((a, b) => a.name.localeCompare(b.name));", description: "ÊÑÊíÈ ÍÓÈ ÇáÇÓã" }
                ]
            },
            // -------- reverse --------
            {
                name: "reverse",
                description: "íÚßÓ ÊÑÊíÈ ÚäÇÕÑ ÇáãÕİæİÉ İí ãßÇäåÇ",
                values: [
                    { value: "arr.reverse();", description: "ÚßÓ ÇáãÕİæİÉ" }
                ]
            },
            // -------- toSorted --------
            {
                name: "toSorted",
                description: "íõÑÌÚ äÓÎÉ ÌÏíÏÉ ãõÑÊøÈÉ ãä ÇáãÕİæİÉ Ïæä ÊÛííÑ ÇáÃÕá (ÈÏíá áÇ íÚÏøá ÇáÃÕá)",
                values: [
                    { value: "const sorted = arr.toSorted();", description: "äÓÎÉ ãÑÊøÈÉ" },
                    { value: "const desc = arr.toSorted((a, b) => b - a);", description: "äÓÎÉ ÊäÇÒáíÉ" }
                ]
            },
            // -------- toReversed --------
            {
                name: "toReversed",
                description: "íõÑÌÚ äÓÎÉ ÌÏíÏÉ ãÚßæÓÉ ÇáÊÑÊíÈ Ïæä ÊÛííÑ ÇáÃÕá",
                values: [
                    { value: "const reversed = arr.toReversed();", description: "äÓÎÉ ãÚßæÓÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. ÏæÇá ÇáÊÍŞŞ æÇáãÓÇÚÏÉ
    // ============================================================
    {
        tag: "utility-methods",
        description: "ÏæÇá ãÓÇÚÏÉ ááÊÍŞŞ ãä ÇáãÕİæİÇÊ",
        properties: [
            // -------- isArray --------
            {
                name: "isArray",
                description: "íÊÍŞŞ Åä ßÇäÊ ÇáŞíãÉ ÇáãõÚØÇÉ ãÕİæİÉ İÚáÇğ",
                values: [
                    { value: "Array.isArray(value);", description: "ÇáÊÍŞŞ ãä ßæäå ãÕİæİÉ" },
                    { value: "Array.isArray([]); // true", description: "ãÕİæİÉ" },
                    { value: "Array.isArray({}); // false", description: "áíÓ ãÕİæİÉ" }
                ]
            },
            // -------- length --------
            {
                name: "length",
                description: "ÎÇÕíÉ ÊõÑÌÚ ÚÏÏ ÇáÚäÇÕÑ İí ÇáãÕİæİÉ¡ æíãßä ÊÚÏíáåÇ áŞÕø ÇáãÕİæİÉ Ãæ ÊæÓíÚåÇ",
                values: [
                    { value: "arr.length;", description: "ÚÏÏ ÇáÚäÇÕÑ" },
                    { value: "arr.length = 0;", description: "ÊİÑíÛ ÇáãÕİæİÉ" },
                    { value: "arr.length = 10;", description: "ÊæÓíÚ ÇáãÕİæİÉ" }
                ]
            },
            // -------- at --------
            {
                name: "at",
                description: "íõÑÌÚ ÇáÚäÕÑ ÚäÏ ÇáİåÑÓ ÇáãÍÏÏ¡ æíŞÈá ÃÑŞÇãÇğ ÓÇáÈÉ ááÚÏø ãä ÇáäåÇíÉ",
                values: [
                    { value: "arr.at(-1);", description: "ÂÎÑ ÚäÕÑ" },
                    { value: "arr.at(0);", description: "Ãæá ÚäÕÑ" },
                    { value: "arr.at(-2);", description: "ÇáÚäÕÑ ŞÈá ÇáÃÎíÑ" }
                ]
            },
            // -------- copyWithin --------
            {
                name: "copyWithin",
                description: "íäÓÎ ÌÒÁÇğ ãä ÇáãÕİæİÉ Åáì ãßÇä ÂÎÑ İíåÇ æíõÚÏøáåÇ ãÈÇÔÑÉ",
                values: [
                    { value: "arr.copyWithin(0, 2);", description: "äÓÎ ãä 2 Åáì ÇáÈÏÇíÉ" },
                    { value: "arr.copyWithin(2, 0, 3);", description: "äÓÎ Ãæá 3 ÚäÇÕÑ Åáì ÇáİåÑÓ 2" }
                ]
            },
            // -------- fill --------
            {
                name: "fill",
                description: "íãáÃ ßá ÚäÇÕÑ ÇáãÕİæİÉ (Ãæ ÌÒÁ ãäåÇ) ÈŞíãÉ ËÇÈÊÉ æÇÍÏÉ",
                values: [
                    { value: "new Array(5).fill(0);", description: "[0, 0, 0, 0, 0]" },
                    { value: "arr.fill(0, 1, 3);", description: "ãáÁ ãä 1 Åáì 3 ÈÇáŞíãÉ 0" }
                ]
            },
            // -------- entries --------
            {
                name: "entries",
                description: "íõÑÌÚ ãõßÑöøÑÇğ (iterator) Úáì ÃÒæÇÌ [İåÑÓ, ŞíãÉ] áßá ÚäÕÑ İí ÇáãÕİæİÉ",
                values: [
                    { value: "for (const [i, v] of arr.entries()) { console.log(i, v); }", description: "ÇáÊßÑÇÑ ãÚ ÇáİåÑÓ" }
                ]
            },
            // -------- keys --------
            {
                name: "keys",
                description: "íõÑÌÚ ãõßÑöøÑÇğ Úáì İåÇÑÓ ÇáãÕİæİÉ İŞØ",
                values: [
                    { value: "for (const key of arr.keys()) { console.log(key); }", description: "ØÈÇÚÉ ÇáİåÇÑÓ" }
                ]
            },
            // -------- values --------
            {
                name: "values",
                description: "íõÑÌÚ ãõßÑöøÑÇğ Úáì Şíã ÇáãÕİæİÉ İŞØ",
                values: [
                    { value: "for (const value of arr.values()) { console.log(value); }", description: "ØÈÇÚÉ ÇáŞíã" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. ÏæÇá ËÇÈÊÉ (Static Methods)
    // ============================================================
    {
        tag: "static-array-methods",
        description: "ÏæÇá ËÇÈÊÉ Úáì Array",
        properties: [
            // -------- Array.from --------
            {
                name: "Array.from",
                description: "íõäÔÆ ãÕİæİÉ ÌÏíÏÉ ãä ßÇÆä ŞÇÈá ááÊßÑÇÑ Ãæ íÔÈå ÇáãÕİæİÉ",
                values: [
                    { value: "Array.from('abc');", description: "['a', 'b', 'c']" },
                    { value: "Array.from(new Set([1, 2, 3]));", description: "[1, 2, 3]" },
                    { value: "Array.from({ length: 5 }, (_, i) => i);", description: "[0, 1, 2, 3, 4]" }
                ]
            },
            // -------- Array.of --------
            {
                name: "Array.of",
                description: "íõäÔÆ ãÕİæİÉ ÌÏíÏÉ ãä ÇáŞíã ÇáãõãÑøÑÉ ãÈÇÔÑÉ",
                values: [
                    { value: "Array.of(1, 2, 3);", description: "[1, 2, 3]" },
                    { value: "Array.of(7);", description: "[7] (ÈÎáÇİ new Array(7))" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. ÃãËáÉ ÚãáíÉ
    // ============================================================
    {
        tag: "examples",
        description: "ÃãËáÉ ÚãáíÉ áÇÓÊÎÏÇã ÏæÇá ÇáãÕİæİÇÊ",
        properties: [
            {
                name: "ãËÇá 1 - ãÚÇáÌÉ ÈíÇäÇÊ ÇáãÓÊÎÏãíä",
                description: "ÊÍæíá æÊÕİíÉ æÊÑÊíÈ ÈíÇäÇÊ ÇáãÓÊÎÏãíä",
                values: [
                    { value: "const users = [ { name: 'ÃÍãÏ', age: 25, active: true }, { name: 'ÓÇÑÉ', age: 30, active: false }, { name: 'ãÍãÏ', age: 20, active: true } ]; const activeNames = users.filter(u => u.active).map(u => u.name).sort();", description: "ÃÓãÇÁ ÇáãÓÊÎÏãíä ÇáäÔØíä ãÑÊÈÉ" }
                ]
            },
            {
                name: "ãËÇá 2 - ÍÓÇÈ ÇáÅÍÕÇÆíÇÊ",
                description: "ÍÓÇÈ ÇáãÊæÓØ æÇáÍÏ ÇáÃŞÕì æÇáÃÏäì",
                values: [
                    { value: "const numbers = [10, 20, 30, 40, 50]; const sum = numbers.reduce((a, b) => a + b, 0); const avg = sum / numbers.length; const max = Math.max(...numbers); const min = Math.min(...numbers);", description: "ÇáÅÍÕÇÆíÇÊ" }
                ]
            },
            {
                name: "ãËÇá 3 - ÅÒÇáÉ ÇáÊßÑÇÑÇÊ",
                description: "ÅÒÇáÉ ÇáŞíã ÇáãßÑÑÉ ãä ãÕİæİÉ",
                values: [
                    { value: "const unique = [...new Set([1, 2, 2, 3, 3, 4])]; // [1, 2, 3, 4]", description: "ÅÒÇáÉ ÇáÊßÑÇÑÇÊ" }
                ]
            },
            {
                name: "ãËÇá 4 - ÊÌãíÚ ÇáÈíÇäÇÊ",
                description: "ÊÌãíÚ ÚäÇÕÑ ÍÓÈ ÇáÊÕäíİ",
                values: [
                    { value: "const items = [ { category: 'İÇßåÉ', name: 'ÊİÇÍ' }, { category: 'İÇßåÉ', name: 'ãæÒ' }, { category: 'ÎÖÇÑ', name: 'ÌÒÑ' } ]; const grouped = items.reduce((acc, item) => { if (!acc[item.category]) acc[item.category] = []; acc[item.category].push(item.name); return acc; }, {});", description: "ÊÌãíÚ ÍÓÈ ÇáÊÕäíİ" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. äÕÇÆÍ æÅÑÔÇÏÇÊ
    // ============================================================
    {
        tag: "tips",
        description: "äÕÇÆÍ æÅÑÔÇÏÇÊ ãåãÉ áÇÓÊÎÏÇã ÏæÇá ÇáãÕİæİÇÊ",
        properties: [
            {
                name: "äÕÇÆÍ ÚÇãÉ",
                description: "äÕÇÆÍ ÃÓÇÓíÉ ááÊÚÇãá ãÚ ÇáãÕİæİÇÊ",
                values: [
                    { value: "ÇÓÊÎÏã map ááÊÍæíá", description: "ÈÏáÇğ ãä forEach ãÚ push" },
                    { value: "ÇÓÊÎÏã filter ááÊÕİíÉ", description: "ÈÏáÇğ ãä forEach ãÚ push" },
                    { value: "ÇÓÊÎÏã reduce ááÊÌãíÚ", description: "ááÍÕæá Úáì ŞíãÉ æÇÍÏÉ" },
                    { value: "ÇÓÊÎÏã find ááÈÍË Úä ÚäÕÑ", description: "ÈÏáÇğ ãä filter[0]" },
                    { value: "ÇÓÊÎÏã includes ááÊÍŞŞ ãä ÇáæÌæÏ", description: "ÈÏáÇğ ãä indexOf !== -1" },
                    { value: "ÇÓÊÎÏã spread operator ááäÓÎ", description: "[...arr] ÈÏáÇğ ãä slice()" }
                ]
            },
            {
                name: "äÕÇÆÍ ÇáÃÏÇÁ",
                description: "äÕÇÆÍ áÊÍÓíä ÃÏÇÁ ÇáãÕİæİÇÊ",
                values: [
                    { value: "ÊÌäÈ ÊÚÏíá ÇáãÕİæİÉ ÃËäÇÁ ÇáÊßÑÇÑ", description: "ŞÏ íÓÈÈ ÓáæßÇğ ÛíÑ ãÊæŞÚ" },
                    { value: "ÇÓÊÎÏã for...of ááãÕİæİÇÊ ÇáßÈíÑÉ", description: "ÃÓÑÚ ãä forEach" },
                    { value: "ÇÓÊÎÏã ÇáãÕİæİÇÊ ĞÇÊ ÇáØæá ÇáãÍÏÏ", description: "ÅĞÇ ßäÊ ÊÚÑİ ÇáÍÌã" }
                ]
            },
            {
                name: "ÇáÃÎØÇÁ ÇáÔÇÆÚÉ",
                description: "ÃÎØÇÁ ÔÇÆÚÉ ÚäÏ ÇÓÊÎÏÇã ÇáãÕİæİÇÊ",
                values: [
                    { value: "äÓíÇä Ãä map æ filter æ slice áÇ ÊõÚÏøá ÇáãÕİæİÉ", description: "ÊõÑÌÚ ãÕİæİÉ ÌÏíÏÉ" },
                    { value: "ÇÓÊÎÏÇã == ÈÏáÇğ ãä === İí find/filter", description: "íŞÇÑä ãÚ ÊÍæíá ÇáäæÚ" },
                    { value: "ÊÚÏíá ÇáãÕİæİÉ ÃËäÇÁ forEach", description: "ŞÏ íÓÈÈ ÓáæßÇğ ÛíÑ ãÊæŞÚ" }
                ]
            }
        ]
    }
];

// ÊÕÏíÑ ÇáÈíÇäÇÊ
if (typeof window !== 'undefined') {
    window.jsArraysData = jsArraysData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsArraysData;
}