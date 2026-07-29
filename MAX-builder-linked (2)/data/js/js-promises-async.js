// ============================================================
// js-promises-async.js
// ÇáæÚæÏ (Promises) æÇáÈÑãÌÉ ÛíÑ ÇáãÊÒÇãäÉ (Async/Await) İí JavaScript
// ÊÔÑÍ ÌãíÚ ÏæÇá Promise æ async/await ãÚ ÃãËáÉ æÇÓÊÎÏÇãÇÊ
// ============================================================

const jsPromisesAsyncData = [
    // ============================================================
    // 1. Promise - ÇáæÚæÏ
    // ============================================================
    {
        tag: "promise",
        description: "ßÇÆä íãËá äÊíÌÉ ÚãáíÉ ÛíÑ ãÊÒÇãäÉ ÓÊßÊãá İí ÇáãÓÊŞÈá (äÌÇÍÇğ Ãæ İÔáÇğ). íæİÑ ÏæÇáÇğ ááÊÚÇãá ãÚ ÇáÚãáíÇÊ ÛíÑ ÇáãÊÒÇãäÉ ÈÔßá ÃäíŞ",
        properties: [
            {
                name: "new Promise",
                description: "ÅäÔÇÁ æÚÏ ÌÏíÏ",
                values: [
                    { value: "new Promise((resolve, reject) => { ... });", description: "ÅäÔÇÁ æÚÏ" },
                    { value: "new Promise(resolve => setTimeout(resolve, 1000));", description: "æÚÏ ãÚ ÊÃÎíÑ" },
                    { value: "new Promise((resolve, reject) => { if (success) resolve(data); else reject(error); });", description: "æÚÏ ãÚ äÌÇÍ Ãæ İÔá" },
                    { value: "const promise = new Promise((resolve) => resolve('Êã'));", description: "æÚÏ äÇÌÍ İæÑÇğ" }
                ]
            },
            {
                name: "Promise.resolve",
                description: "íõäÔÆ æÚÏÇğ äÇÌÍÇğ İæÑÇğ ÈŞíãÉ ãÍÏÏÉ",
                values: [
                    { value: "Promise.resolve(5);", description: "æÚÏ äÇÌÍ ÈÇáŞíãÉ 5" },
                    { value: "Promise.resolve('ãÑÍÈÇğ');", description: "æÚÏ äÇÌÍ ÈäÕ" },
                    { value: "Promise.resolve({ name: 'ÃÍãÏ' });", description: "æÚÏ äÇÌÍ ÈßÇÆä" }
                ]
            },
            {
                name: "Promise.reject",
                description: "íõäÔÆ æÚÏÇğ İÇÔáÇğ İæÑÇğ ÈÓÈÈ ãÍÏÏ",
                values: [
                    { value: "Promise.reject('ÎØÃ');", description: "æÚÏ İÇÔá" },
                    { value: "Promise.reject(new Error('ÍÏË ÎØÃ'));", description: "æÚÏ İÇÔá ÈßÇÆä ÎØÃ" }
                ]
            },
            {
                name: "Promise.then",
                description: "íõÍÏÏ ÏÇáÉ ÊõäİóøĞ ÚäÏ ÇßÊãÇá ÇáÜPromise ÈäÌÇÍ",
                values: [
                    { value: "promise.then(result => { console.log(result); });", description: "ãÚÇáÌÉ ÇáäÌÇÍ" },
                    { value: "promise.then(result => result * 2).then(result => console.log(result));", description: "ÊÓáÓá then" },
                    { value: "promise.then(result => { return result + 1; }).then(console.log);", description: "ÊÓáÓá ãÚ ÚæÏÉ ÖãäíÉ" }
                ]
            },
            {
                name: "Promise.catch",
                description: "íõÍÏÏ ÏÇáÉ ÊõäİóøĞ ÚäÏ İÔá ÇáÜPromise",
                values: [
                    { value: "promise.catch(error => { console.error(error); });", description: "ãÚÇáÌÉ ÇáİÔá" },
                    { value: "promise.then(handleSuccess).catch(handleError);", description: "ÓáÓáÉ ãÚ ãÚÇáÌÉ ÇáÃÎØÇÁ" },
                    { value: "promise.catch(error => { return 'ŞíãÉ ÇİÊÑÇÖíÉ'; });", description: "ÇáÚæÏÉ ÈŞíãÉ ÇİÊÑÇÖíÉ" }
                ]
            },
            {
                name: "Promise.finally",
                description: "íõÍÏÏ ÏÇáÉ ÊõäİóøĞ ÏÇÆãÇğ ÈÚÏ ÇäÊåÇÁ ÇáÜPromise (äÌÇÍÇğ Ãæ İÔáÇğ)",
                values: [
                    { value: "promise.finally(() => { console.log('ÇäÊåì'); });", description: "ÊäİíĞ ÏÇÆãÇğ" },
                    { value: "promise.then(handleSuccess).catch(handleError).finally(() => { loading = false; });", description: "ÅíŞÇİ ãÄÔÑ ÇáÊÍãíá" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. ÏæÇá Promise ÇáÌãÇÚíÉ
    // ============================================================
    {
        tag: "promise-static-methods",
        description: "ÏæÇá ËÇÈÊÉ ááÊÚÇãá ãÚ ãÌãæÚÉ ãä ÇáæÚæÏ",
        properties: [
            {
                name: "Promise.all",
                description: "íäÊÙÑ ÇßÊãÇá ÌãíÚ ÇáæÚæÏ¡ æíİÔá ÈãÌÑÏ İÔá Ãí æÇÍÏ ãäåÇ",
                values: [
                    { value: "Promise.all([p1, p2, p3]).then(results => { console.log(results); });", description: "ÇäÊÙÇÑ Çáßá" },
                    { value: "const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);", description: "ãÚ async/await" },
                    { value: "Promise.all([promise1, promise2]).then(([result1, result2]) => { ... });", description: "Êİßíß ÇáäÊÇÆÌ" }
                ]
            },
            {
                name: "Promise.allSettled",
                description: "íäÊÙÑ ÇäÊåÇÁ ßá ÇáæÚæÏ æíõÑÌÚ äÊíÌÉ ßá æÇÍÏ (äÌÍ Ãæ İÔá) Ïæä ÊæŞİ ÚäÏ Ãæá İÔá",
                values: [
                    { value: "Promise.allSettled([p1, p2]).then(results => { results.forEach(r => console.log(r.status, r.value || r.reason)); });", description: "äÊÇÆÌ ßá æÚÏ" },
                    { value: "const results = await Promise.allSettled([fetch1(), fetch2()]);", description: "ãÚ async/await" }
                ]
            },
            {
                name: "Promise.any",
                description: "íõÑÌÚ Ãæá Promise íäÌÍ ãä ãÌãæÚÉ¡ æíİÔá İŞØ ÅĞÇ İÔáÊ ßá ÇáæÚæÏ",
                values: [
                    { value: "Promise.any([p1, p2, p3]).then(result => { console.log(result); });", description: "Ãæá äÇÌÍ" },
                    { value: "const result = await Promise.any([fetch(url1), fetch(url2)]);", description: "ãÚ async/await" }
                ]
            },
            {
                name: "Promise.race",
                description: "íõÑÌÚ äÊíÌÉ Ãæá Promise íäÊåí (äÌÇÍÇğ Ãæ İÔáÇğ) ãä Èíä ÇáãÌãæÚÉ",
                values: [
                    { value: "Promise.race([p1, p2]).then(result => { console.log(result); });", description: "Ãæá ãä íäÊåí" },
                    { value: "const result = await Promise.race([fetch(url), timeout(5000)]);", description: "ãÚ ãåáÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. async/await - ÇáÏæÇá ÛíÑ ÇáãÊÒÇãäÉ
    // ============================================================
    {
        tag: "async-await",
        description: "async/await åí ÕíÛÉ ÍÏíËÉ ááÊÚÇãá ãÚ ÇáæÚæÏ ÈÔßá ÃßËÑ æÖæÍÇğ æÓåæáÉ¡ ÊÌÚá ÇáßæÏ ÛíÑ ÇáãÊÒÇãä íÈÏæ ßÇáßæÏ ÇáãÊÒÇãä",
        properties: [
            {
                name: "async function",
                description: "ÊõÚÑøİ ÏÇáÉ ÛíÑ ãÊÒÇãäÉ ÊõÑÌÚ Promise ÏÇÆãÇğ",
                values: [
                    { value: "async function getData() { return 'ÈíÇäÇÊ'; }", description: "ÏÇáÉ ÛíÑ ãÊÒÇãäÉ" },
                    { value: "const getData = async () => { return 'ÈíÇäÇÊ'; };", description: "ÏÇáÉ ÓåãíÉ ÛíÑ ãÊÒÇãäÉ" },
                    { value: "async function fetchUser(id) { const res = await fetch(`/api/users/${id}`); return res.json(); }", description: "ÌáÈ ÈíÇäÇÊ ãÓÊÎÏã" }
                ]
            },
            {
                name: "await",
                description: "íæŞİ ÊäİíĞ ÇáÏÇáÉ ÛíÑ ÇáãÊÒÇãäÉ ÍÊì íßÊãá ÇáÜPromise¡ Ëã íõÑÌÚ äÊíÌÊå",
                values: [
                    { value: "const data = await fetch(url);", description: "ÇäÊÙÇÑ äÊíÌÉ fetch" },
                    { value: "const result = await promise;", description: "ÇäÊÙÇÑ æÚÏ" },
                    { value: "const value = await Promise.resolve(5);", description: "ÇäÊÙÇÑ æÚÏ äÇÌÍ" }
                ]
            },
            {
                name: "try/catch ãÚ async/await",
                description: "ãÚÇáÌÉ ÇáÃÎØÇÁ İí ÇáÏæÇá ÛíÑ ÇáãÊÒÇãäÉ",
                values: [
                    { value: "try { const data = await fetch(url); } catch (error) { console.error(error); }", description: "ãÚÇáÌÉ ÇáÃÎØÇÁ" },
                    { value: "async function getData() { try { const res = await fetch(url); return await res.json(); } catch (error) { return null; } }", description: "ÏÇáÉ ãÚ ãÚÇáÌÉ ÃÎØÇÁ" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. fetch - ØáÈÇÊ ÇáÔÈßÉ
    // ============================================================
    {
        tag: "fetch-api",
        description: "æÇÌåÉ fetch ÊõÓÊÎÏã áÅÑÓÇá ØáÈÇÊ ÇáÔÈßÉ (HTTP) æÇÓÊŞÈÇá ÇáÑÏæÏ¡ æÊõÑÌÚ Promise",
        properties: [
            {
                name: "fetch (GET)",
                description: "ÅÑÓÇá ØáÈ GET áÌáÈ ÈíÇäÇÊ",
                values: [
                    { value: "fetch('/api/users').then(res => res.json());", description: "ÌáÈ ÈíÇäÇÊ" },
                    { value: "const response = await fetch('/api/users'); const data = await response.json();", description: "ãÚ async/await" }
                ]
            },
            {
                name: "fetch (POST)",
                description: "ÅÑÓÇá ØáÈ POST ãÚ ÈíÇäÇÊ JSON",
                values: [
                    { value: "fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(res => res.json());", description: "ÅÑÓÇá ÈíÇäÇÊ" },
                    { value: "const response = await fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newUser) });", description: "ãÚ async/await" }
                ]
            },
            {
                name: "fetch (PUT)",
                description: "ÅÑÓÇá ØáÈ PUT áÊÍÏíË ÈíÇäÇÊ",
                values: [
                    { value: "fetch('/api/users/1', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updatedUser) });", description: "ÊÍÏíË ÈíÇäÇÊ" }
                ]
            },
            {
                name: "fetch (DELETE)",
                description: "ÅÑÓÇá ØáÈ DELETE áÍĞİ ÈíÇäÇÊ",
                values: [
                    { value: "fetch('/api/users/1', { method: 'DELETE' });", description: "ÍĞİ ÈíÇäÇÊ" }
                ]
            },
            {
                name: "fetch - response methods",
                description: "ØÑŞ ŞÑÇÁÉ ÈíÇäÇÊ ÇáÇÓÊÌÇÈÉ",
                values: [
                    { value: "response.json()", description: "ÊÍæíá Åáì ßÇÆä JSON" },
                    { value: "response.text()", description: "ÊÍæíá Åáì äÕ" },
                    { value: "response.blob()", description: "ÊÍæíá Åáì Blob (ááÕæÑ)" },
                    { value: "response.arrayBuffer()", description: "ÊÍæíá Åáì ArrayBuffer" },
                    { value: "response.formData()", description: "ÊÍæíá Åáì FormData" }
                ]
            },
            {
                name: "fetch - response properties",
                description: "ÎÕÇÆÕ ÇáÇÓÊÌÇÈÉ",
                values: [
                    { value: "response.ok", description: "true ÅĞÇ ßÇäÊ ÇáÍÇáÉ 200-299" },
                    { value: "response.status", description: "ÑãÒ ÇáÍÇáÉ (200, 404, 500...)" },
                    { value: "response.statusText", description: "äÕ ÇáÍÇáÉ" },
                    { value: "response.headers", description: "ÑÄæÓ ÇáÇÓÊÌÇÈÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. AbortController - ÅáÛÇÁ ÇáØáÈÇÊ
    // ============================================================
    {
        tag: "abort-controller",
        description: "íÓãÍ ÈÅáÛÇÁ ØáÈ fetch Ãæ ÚãáíÉ ÛíÑ ãÊÒÇãäÉ ÃÎÑì ŞÈá ÇäÊåÇÆåÇ",
        properties: [
            {
                name: "new AbortController",
                description: "ÅäÔÇÁ ÃÏÇÉ ÊÍßã ááÅáÛÇÁ",
                values: [
                    { value: "const controller = new AbortController(); const signal = controller.signal;", description: "ÅäÔÇÁ" },
                    { value: "fetch(url, { signal }).then(res => res.json());", description: "ÊãÑíÑ ÇáÅÔÇÑÉ" },
                    { value: "controller.abort();", description: "ÅáÛÇÁ ÇáØáÈ" }
                ]
            },
            {
                name: "AbortController ãÚ async/await",
                description: "ÇÓÊÎÏÇã AbortController ãÚ async/await",
                values: [
                    { value: "const controller = new AbortController(); try { const response = await fetch(url, { signal: controller.signal }); } catch (error) { if (error.name === 'AbortError') { console.log('Êã ÇáÅáÛÇÁ'); } }", description: "ãÚÇáÌÉ ÇáÅáÛÇÁ" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. ÃãËáÉ ÚãáíÉ
    // ============================================================
    {
        tag: "examples",
        description: "ÃãËáÉ ÚãáíÉ áÇÓÊÎÏÇã ÇáæÚæÏ æÇáÈÑãÌÉ ÛíÑ ÇáãÊÒÇãäÉ",
        properties: [
            {
                name: "ãËÇá 1 - ÏÇáÉ ÊÃÎíÑ",
                description: "ÅäÔÇÁ ÏÇáÉ ÊÃÎíÑ ÈÇÓÊÎÏÇã Promise",
                values: [
                    { value: "function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } await delay(1000); console.log('ÈÚÏ ËÇäíÉ');", description: "ÊÃÎíÑ" }
                ]
            },
            {
                name: "ãËÇá 2 - ÌáÈ ÈíÇäÇÊ ãÊÚÏÏÉ",
                description: "ÌáÈ ÈíÇäÇÊ ãä ÚÏÉ ãÕÇÏÑ ãÊæÇÒíÉ",
                values: [
                    { value: "async function fetchMultiple() { const [users, posts, comments] = await Promise.all([ fetch('/api/users').then(r => r.json()), fetch('/api/posts').then(r => r.json()), fetch('/api/comments').then(r => r.json()) ]); return { users, posts, comments }; }", description: "ÌáÈ ãÊæÇÒí" }
                ]
            },
            {
                name: "ãËÇá 3 - ãÚÇáÌÉ ÇáÃÎØÇÁ İí ÓáÓáÉ ÇáæÚæÏ",
                description: "ãÚÇáÌÉ ÇáÃÎØÇÁ ÈÔßá ÃäíŞ",
                values: [
                    { value: "async function getData() { try { const response = await fetch('/api/data'); if (!response.ok) throw new Error('İÔá ÇáØáÈ'); return await response.json(); } catch (error) { console.error('ÎØÃ:', error.message); return null; } }", description: "ãÚÇáÌÉ ÇáÃÎØÇÁ" }
                ]
            },
            {
                name: "ãËÇá 4 - ÊäİíĞ ãÊÓáÓá",
                description: "ÊäİíĞ ÚãáíÇÊ ÛíÑ ãÊÒÇãäÉ ÈÇáÊÓáÓá",
                values: [
                    { value: "async function processSequentially() { const user = await fetchUser(); const profile = await fetchProfile(user.id); const settings = await fetchSettings(user.id); return { user, profile, settings }; }", description: "ÊäİíĞ ãÊÓáÓá" }
                ]
            },
            {
                name: "ãËÇá 5 - ØáÈ ãÚ ãåáÉ",
                description: "ÅÖÇİÉ ãåáÉ ááØáÈÇÊ ÈÇÓÊÎÏÇã Promise.race",
                values: [
                    { value: "function fetchWithTimeout(url, timeout = 5000) { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(), timeout); return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timeoutId)); }", description: "ØáÈ ãÚ ãåáÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. äÕÇÆÍ æÅÑÔÇÏÇÊ
    // ============================================================
    {
        tag: "tips",
        description: "äÕÇÆÍ æÅÑÔÇÏÇÊ ãåãÉ ááÊÚÇãá ãÚ ÇáæÚæÏ æÇáÈÑãÌÉ ÛíÑ ÇáãÊÒÇãäÉ",
        properties: [
            {
                name: "äÕÇÆÍ ÚÇãÉ",
                description: "äÕÇÆÍ ÃÓÇÓíÉ ááÊÚÇãá ãÚ ÇáÈÑãÌÉ ÛíÑ ÇáãÊÒÇãäÉ",
                values: [
                    { value: "ÇÓÊÎÏã async/await ÈÏáÇğ ãä then/catch", description: "ÃæÖæÍ æÓåæáÉ" },
                    { value: "ÇÓÊÎÏã try/catch ãÚ async/await", description: "áãÚÇáÌÉ ÇáÃÎØÇÁ" },
                    { value: "ÇÓÊÎÏã Promise.all ááÚãáíÇÊ ÇáãÊæÇÒíÉ", description: "áÊæİíÑ ÇáæŞÊ" },
                    { value: "ÇÓÊÎÏã Promise.allSettled ááÚãáíÇÊ ÇáãÊæÇÒíÉ ãÚ ÊÍãá ÇáİÔá", description: "ÚäÏãÇ áÇ ÊÑíÏ ÇáİÔá Çáßáí" },
                    { value: "ÇÓÊÎÏã AbortController áÅáÛÇÁ ÇáØáÈÇÊ", description: "áÊÌäÈ ÇáØáÈÇÊ ÇáãÚáŞÉ" }
                ]
            },
            {
                name: "äÕÇÆÍ ÇáÃÏÇÁ",
                description: "äÕÇÆÍ áÊÍÓíä ÃÏÇÁ ÇáÈÑãÌÉ ÛíÑ ÇáãÊÒÇãäÉ",
                values: [
                    { value: "ÇÓÊÎÏã Promise.all ááÚãáíÇÊ ÇáãÊæÇÒíÉ", description: "ÈÏáÇğ ãä await ãÊÓáÓá" },
                    { value: "ÊÌäÈ await İí ÇáÍáŞÇÊ", description: "ÇÓÊÎÏã Promise.all ãÚ map" },
                    { value: "ÇÓÊÎÏã AbortController áÅáÛÇÁ ÇáØáÈÇÊ ÛíÑ ÇáãÓÊÎÏãÉ", description: "áÊæİíÑ ÇáãæÇÑÏ" }
                ]
            },
            {
                name: "ÇáÃÎØÇÁ ÇáÔÇÆÚÉ",
                description: "ÃÎØÇÁ ÔÇÆÚÉ ÚäÏ ÇÓÊÎÏÇã ÇáæÚæÏ æÇáÈÑãÌÉ ÛíÑ ÇáãÊÒÇãäÉ",
                values: [
                    { value: "äÓíÇä await ŞÈá ÇáÏÇáÉ ÛíÑ ÇáãÊÒÇãäÉ", description: "íõÑÌÚ Promise æáíÓ ÇáŞíãÉ" },
                    { value: "äÓíÇä try/catch İí async/await", description: "íÓÈÈ ÃÎØÇÁ ÛíÑ ãÚÇáÌÉ" },
                    { value: "ÇÓÊÎÏÇã Promise.all ãÚ æÚæÏ İÇÔáÉ", description: "íİÔá Çáßá" },
                    { value: "äÓíÇä return İí then", description: "ÊõÑÌÚ undefined" }
                ]
            }
        ]
    }
];

// ÊÕÏíÑ ÇáÈíÇäÇÊ
if (typeof window !== 'undefined') {
    window.jsPromisesAsyncData = jsPromisesAsyncData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsPromisesAsyncData;
}