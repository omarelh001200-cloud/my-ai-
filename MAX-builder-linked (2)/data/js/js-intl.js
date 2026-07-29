// ============================================================
// js-intl.js
// ÇáÊÏæíá (Internationalization - Intl) İí JavaScript
// ÊÔÑÍ ßÇÆäÇÊ Intl áÊäÓíŞ ÇáÃÑŞÇã æÇáÊæÇÑíÎ æÇáäÕæÕ ÍÓÈ ÇááÛÉ æÇáãäØŞÉ
// ============================================================

const jsIntlData = [
    // ============================================================
    // 1. Intl.NumberFormat - ÊäÓíŞ ÇáÃÑŞÇã
    // ============================================================
    {
        tag: "intl-numberformat",
        description: "íõäÓøŞ ÇáÃÑŞÇã ÍÓÈ ÇááÛÉ æÇáãäØŞÉ¡ ãËá ÅÖÇİÉ İæÇÕá ÇáÂáÇİ Ãæ ÑãÒ ÇáÚãáÉ",
        properties: [
            {
                name: "new Intl.NumberFormat",
                description: "ÅäÔÇÁ ßÇÆä ÊäÓíŞ ÇáÃÑŞÇã",
                values: [
                    { value: "new Intl.NumberFormat('ar-EG').format(1234.56);", description: "ÊäÓíŞ ÚÑÈí ãÕÑí" },
                    { value: "new Intl.NumberFormat('en-US').format(1234.56);", description: "ÊäÓíŞ ÅäÌáíÒí ÃãÑíßí" },
                    { value: "new Intl.NumberFormat('de-DE').format(1234.56);", description: "ÊäÓíŞ ÃáãÇäí" },
                    { value: "new Intl.NumberFormat('ar').format(1234.56);", description: "ÊäÓíŞ ÚÑÈí" }
                ]
            },
            {
                name: "Intl.NumberFormat - ÇáÎíÇÑÇÊ",
                description: "ÎíÇÑÇÊ ÊäÓíŞ ÇáÃÑŞÇã",
                values: [
                    { value: "new Intl.NumberFormat('ar', { style: 'currency', currency: 'EGP' }).format(50);", description: "ÚãáÉ ãÕÑíÉ" },
                    { value: "new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(50);", description: "ÏæáÇÑ ÃãÑíßí" },
                    { value: "new Intl.NumberFormat('ar', { style: 'percent' }).format(0.5);", description: "äÓÈÉ ãÆæíÉ" },
                    { value: "new Intl.NumberFormat('en', { style: 'unit', unit: 'kilometer' }).format(10);", description: "æÍÏÉ ŞíÇÓ" }
                ]
            },
            {
                name: "Intl.NumberFormat - ÎíÇÑÇÊ ãÊŞÏãÉ",
                description: "ÎíÇÑÇÊ ÅÖÇİíÉ áÊäÓíŞ ÇáÃÑŞÇã",
                values: [
                    { value: "new Intl.NumberFormat('ar', { maximumFractionDigits: 2 }).format(3.14159);", description: "ÚÏÏ ÇáãäÇÒá ÇáÚÔÑíÉ" },
                    { value: "new Intl.NumberFormat('en', { minimumIntegerDigits: 3 }).format(5);", description: "ÃÕİÇÑ ÈÇÏÆÉ" },
                    { value: "new Intl.NumberFormat('en', { useGrouping: false }).format(1000);", description: "ÈÏæä İæÇÕá" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. Intl.DateTimeFormat - ÊäÓíŞ ÇáÊæÇÑíÎ
    // ============================================================
    {
        tag: "intl-datetimeformat",
        description: "íõäÓøŞ ÇáÊæÇÑíÎ æÇáæŞÊ ÍÓÈ ÇááÛÉ æÇáãäØŞÉ",
        properties: [
            {
                name: "new Intl.DateTimeFormat",
                description: "ÅäÔÇÁ ßÇÆä ÊäÓíŞ ÇáÊÇÑíÎ",
                values: [
                    { value: "new Intl.DateTimeFormat('ar').format(new Date());", description: "ÊÇÑíÎ ÚÑÈí" },
                    { value: "new Intl.DateTimeFormat('en-US').format(new Date());", description: "ÊÇÑíÎ ÅäÌáíÒí ÃãÑíßí" },
                    { value: "new Intl.DateTimeFormat('ar-EG').format(new Date());", description: "ÊÇÑíÎ ÚÑÈí ãÕÑí" }
                ]
            },
            {
                name: "Intl.DateTimeFormat - ÇáÎíÇÑÇÊ",
                description: "ÎíÇÑÇÊ ÊäÓíŞ ÇáÊÇÑíÎ",
                values: [
                    { value: "new Intl.DateTimeFormat('ar', { dateStyle: 'full' }).format(new Date());", description: "ÊÇÑíÎ ßÇãá" },
                    { value: "new Intl.DateTimeFormat('ar', { dateStyle: 'long' }).format(new Date());", description: "ÊÇÑíÎ Øæíá" },
                    { value: "new Intl.DateTimeFormat('ar', { dateStyle: 'medium' }).format(new Date());", description: "ÊÇÑíÎ ãÊæÓØ" },
                    { value: "new Intl.DateTimeFormat('ar', { dateStyle: 'short' }).format(new Date());", description: "ÊÇÑíÎ ŞÕíÑ" }
                ]
            },
            {
                name: "Intl.DateTimeFormat - ÎíÇÑÇÊ ÇáæŞÊ",
                description: "ÎíÇÑÇÊ ÊäÓíŞ ÇáæŞÊ",
                values: [
                    { value: "new Intl.DateTimeFormat('ar', { timeStyle: 'full' }).format(new Date());", description: "æŞÊ ßÇãá" },
                    { value: "new Intl.DateTimeFormat('ar', { timeStyle: 'long' }).format(new Date());", description: "æŞÊ Øæíá" },
                    { value: "new Intl.DateTimeFormat('ar', { timeStyle: 'medium' }).format(new Date());", description: "æŞÊ ãÊæÓØ" },
                    { value: "new Intl.DateTimeFormat('ar', { timeStyle: 'short' }).format(new Date());", description: "æŞÊ ŞÕíÑ" }
                ]
            },
            {
                name: "Intl.DateTimeFormat - ÎíÇÑÇÊ ãÎÕÕÉ",
                description: "ÊÎÕíÕ ãßæäÇÊ ÇáÊÇÑíÎ æÇáæŞÊ",
                values: [
                    { value: "new Intl.DateTimeFormat('ar', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());", description: "ÓäÉ¡ ÔåÑ¡ íæã" },
                    { value: "new Intl.DateTimeFormat('ar', { hour: '2-digit', minute: '2-digit' }).format(new Date());", description: "ÓÇÚÉ¡ ÏŞíŞÉ" },
                    { value: "new Intl.DateTimeFormat('ar', { weekday: 'long', year: 'numeric', month: 'short' }).format(new Date());", description: "íæã ÇáÃÓÈæÚ¡ ÓäÉ¡ ÔåÑ" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. Intl.RelativeTimeFormat - ÇáæŞÊ ÇáäÓÈí
    // ============================================================
    {
        tag: "intl-relativetimeformat",
        description: "íÍæøá İÑŞÇğ ÒãäíÇğ ÑŞãíÇğ Åáì ÚÈÇÑÉ ãŞÑæÁÉ ãËá 'ãäĞ íæãíä'",
        properties: [
            {
                name: "new Intl.RelativeTimeFormat",
                description: "ÅäÔÇÁ ßÇÆä ÊäÓíŞ ÇáæŞÊ ÇáäÓÈí",
                values: [
                    { value: "new Intl.RelativeTimeFormat('ar').format(-2, 'day');", description: "ãäĞ íæãíä" },
                    { value: "new Intl.RelativeTimeFormat('ar').format(3, 'day');", description: "ÈÚÏ 3 ÃíÇã" },
                    { value: "new Intl.RelativeTimeFormat('en').format(-1, 'hour');", description: "1 hour ago (ÅäÌáíÒí)" }
                ]
            },
            {
                name: "Intl.RelativeTimeFormat - ÇáæÍÏÇÊ",
                description: "æÍÏÇÊ ÇáÒãä ÇáãÊÇÍÉ",
                values: [
                    { value: "new Intl.RelativeTimeFormat('ar').format(-5, 'second');", description: "ãäĞ 5 ËæÇä" },
                    { value: "new Intl.RelativeTimeFormat('ar').format(-10, 'minute');", description: "ãäĞ 10 ÏŞÇÆŞ" },
                    { value: "new Intl.RelativeTimeFormat('ar').format(-3, 'hour');", description: "ãäĞ 3 ÓÇÚÇÊ" },
                    { value: "new Intl.RelativeTimeFormat('ar').format(-7, 'day');", description: "ãäĞ 7 ÃíÇã" },
                    { value: "new Intl.RelativeTimeFormat('ar').format(-2, 'week');", description: "ãäĞ ÃÓÈæÚíä" },
                    { value: "new Intl.RelativeTimeFormat('ar').format(-3, 'month');", description: "ãäĞ 3 ÃÔåÑ" },
                    { value: "new Intl.RelativeTimeFormat('ar').format(-1, 'year');", description: "ãäĞ ÓäÉ" }
                ]
            },
            {
                name: "Intl.RelativeTimeFormat - ÇáÎíÇÑÇÊ",
                description: "ÎíÇÑÇÊ ÅÖÇİíÉ",
                values: [
                    { value: "new Intl.RelativeTimeFormat('ar', { numeric: 'always' }).format(-1, 'day');", description: "ŞÈá íæã" },
                    { value: "new Intl.RelativeTimeFormat('ar', { numeric: 'auto' }).format(-1, 'day');", description: "ÃãÓ" },
                    { value: "new Intl.RelativeTimeFormat('ar', { style: 'short' }).format(-2, 'day');", description: "ŞÈá íæãíä" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. Intl.Collator - ÇáÊÑÊíÈ ÇáÃÈÌÏí
    // ============================================================
    {
        tag: "intl-collator",
        description: "íŞÇÑä æíõÑÊøÈ ÇáäÕæÕ ÍÓÈ ŞæÇÚÏ ÇáÃÈÌÏíÉ ÇáÕÍíÍÉ ááÛÉ ãÚíäÉ",
        properties: [
            {
                name: "new Intl.Collator",
                description: "ÅäÔÇÁ ßÇÆä ÇáãŞÇÑäÉ",
                values: [
                    { value: "new Intl.Collator('ar').compare('Ã', 'È');", description: "ãŞÇÑäÉ ÚÑÈíÉ" },
                    { value: "new Intl.Collator('en').compare('a', 'b');", description: "ãŞÇÑäÉ ÅäÌáíÒíÉ" }
                ]
            },
            {
                name: "Intl.Collator - ÇáÇÓÊÎÏÇã",
                description: "ÇÓÊÎÏÇã Collator ááÊÑÊíÈ",
                values: [
                    { value: "const collator = new Intl.Collator('ar'); arr.sort(collator.compare);", description: "ÊÑÊíÈ ãÕİæİÉ ÚÑÈíÉ" },
                    { value: "const collator = new Intl.Collator('en', { sensitivity: 'base' }); arr.sort(collator.compare);", description: "ÊÑÊíÈ ÛíÑ ÍÓÇÓ ááÍÇáÉ" }
                ]
            },
            {
                name: "Intl.Collator - ÇáÎíÇÑÇÊ",
                description: "ÎíÇÑÇÊ ÇáãŞÇÑäÉ",
                values: [
                    { value: "new Intl.Collator('ar', { sensitivity: 'base' }).compare('Ã', 'Å');", description: "ãÊÓÇæíÇä (äİÓ ÇáÃÓÇÓ)" },
                    { value: "new Intl.Collator('ar', { sensitivity: 'accent' }).compare('Ã', 'Å');", description: "ãÎÊáİÇä (ÍÓÇÓ ááÊÔßíá)" },
                    { value: "new Intl.Collator('ar', { caseFirst: 'upper' }).compare('a', 'A');", description: "ÇáÃÍÑİ ÇáßÈíÑÉ ÃæáÇğ" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. Intl.PluralRules - ŞæÇÚÏ ÇáÌãÚ
    // ============================================================
    {
        tag: "intl-pluralrules",
        description: "íÍÏÏ ÕíÛÉ ÇáÌãÚ ÇáÕÍíÍÉ ááÛÉ ãÚíäÉ ÈäÇÁğ Úáì ÑŞã",
        properties: [
            {
                name: "new Intl.PluralRules",
                description: "ÅäÔÇÁ ßÇÆä ŞæÇÚÏ ÇáÌãÚ",
                values: [
                    { value: "new Intl.PluralRules('ar').select(1); // 'one'", description: "ãİÑÏ" },
                    { value: "new Intl.PluralRules('ar').select(2); // 'two'", description: "ãËäì" },
                    { value: "new Intl.PluralRules('ar').select(3); // 'few'", description: "ÌãÚ Şáíá (3-10)" },
                    { value: "new Intl.PluralRules('ar').select(11); // 'many'", description: "ÌãÚ ßËíÑ" },
                    { value: "new Intl.PluralRules('ar').select(0); // 'zero'", description: "ÕİÑ" }
                ]
            },
            {
                name: "Intl.PluralRules - ÇáÇÓÊÎÏÇã",
                description: "ÇÓÊÎÏÇã PluralRules ãÚ ÇáÊÑÌãÉ",
                values: [
                    { value: "function pluralize(count, singular, plural) { const rules = new Intl.PluralRules('ar'); const rule = rules.select(count); const forms = { one: singular, two: singular, few: plural, many: plural, zero: plural }; return forms[rule]; }", description: "ÏÇáÉ ÇáÌãÚ İí ÇáÚÑÈíÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. Intl.ListFormat - ÊäÓíŞ ÇáŞæÇÆã
    // ============================================================
    {
        tag: "intl-listformat",
        description: "íõäÓøŞ ŞÇÆãÉ ãä ÇáäÕæÕ ÈÕíÛÉ ãŞÑæÁÉ (ãËá 'ÃÍãÏ¡ ÓÇÑÉ¡ æãÍãÏ')",
        properties: [
            {
                name: "new Intl.ListFormat",
                description: "ÅäÔÇÁ ßÇÆä ÊäÓíŞ ÇáŞæÇÆã",
                values: [
                    { value: "new Intl.ListFormat('ar').format(['ÃÍãÏ', 'ÓÇÑÉ']);", description: "ÃÍãÏ æÓÇÑÉ" },
                    { value: "new Intl.ListFormat('ar').format(['ÃÍãÏ', 'ÓÇÑÉ', 'ãÍãÏ']);", description: "ÃÍãÏ æÓÇÑÉ æãÍãÏ" }
                ]
            },
            {
                name: "Intl.ListFormat - ÇáÎíÇÑÇÊ",
                description: "ÎíÇÑÇÊ ÊäÓíŞ ÇáŞæÇÆã",
                values: [
                    { value: "new Intl.ListFormat('ar', { style: 'short' }).format(['ÃÍãÏ', 'ÓÇÑÉ']);", description: "ÃÍãÏ & ÓÇÑÉ" },
                    { value: "new Intl.ListFormat('ar', { style: 'long' }).format(['ÃÍãÏ', 'ÓÇÑÉ']);", description: "ÃÍãÏ æÓÇÑÉ" },
                    { value: "new Intl.ListFormat('ar', { type: 'disjunction' }).format(['ÃÍãÏ', 'ÓÇÑÉ']);", description: "ÃÍãÏ Ãæ ÓÇÑÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. Intl.DisplayNames - ÃÓãÇÁ ÇááÛÇÊ æÇáãäÇØŞ
    // ============================================================
    {
        tag: "intl-displaynames",
        description: "íõÚíÏ ÃÓãÇÁ ÇááÛÇÊ æÇáãäÇØŞ æÇáÚãáÇÊ ÈáÛÉ ÇáãÓÊÎÏã",
        properties: [
            {
                name: "new Intl.DisplayNames",
                description: "ÅäÔÇÁ ßÇÆä ÃÓãÇÁ ÇáÚÑÖ",
                values: [
                    { value: "new Intl.DisplayNames('ar', { type: 'language' }).of('en');", description: "ÇáÅäÌáíÒíÉ" },
                    { value: "new Intl.DisplayNames('ar', { type: 'region' }).of('US');", description: "ÇáæáÇíÇÊ ÇáãÊÍÏÉ" },
                    { value: "new Intl.DisplayNames('ar', { type: 'currency' }).of('USD');", description: "ÏæáÇÑ ÃãÑíßí" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. Intl.DurationFormat - ÊäÓíŞ ÇáãÏÏ (ÊÌÑíÈí)
    // ============================================================
    {
        tag: "intl-durationformat",
        description: "íõäÓøŞ ÇáãÏÏ ÇáÒãäíÉ ÈÕíÛÉ ãŞÑæÁÉ (ãËá 'ÓÇÚÊÇä æ 30 ÏŞíŞÉ')",
        properties: [
            {
                name: "new Intl.DurationFormat",
                description: "ÅäÔÇÁ ßÇÆä ÊäÓíŞ ÇáãÏÏ",
                values: [
                    { value: "new Intl.DurationFormat('ar').format({ hours: 2, minutes: 30 });", description: "ÓÇÚÊÇä æ 30 ÏŞíŞÉ" },
                    { value: "new Intl.DurationFormat('ar').format({ days: 3, hours: 5 });", description: "3 ÃíÇã æ 5 ÓÇÚÇÊ" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. ÃãËáÉ ÚãáíÉ
    // ============================================================
    {
        tag: "examples",
        description: "ÃãËáÉ ÚãáíÉ áÇÓÊÎÏÇã Intl",
        properties: [
            {
                name: "ãËÇá 1 - ÊäÓíŞ ÓÚÑ ÇáãäÊÌ",
                description: "ÚÑÖ ÇáÓÚÑ ÈÊäÓíŞ ãÍáí",
                values: [
                    { value: "function formatPrice(amount, currency = 'EGP', locale = 'ar') { return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount); }", description: "ÊäÓíŞ ÇáÓÚÑ" }
                ]
            },
            {
                name: "ãËÇá 2 - ÚÑÖ ÊÇÑíÎ ãäÔæÑ",
                description: "ÚÑÖ ÊÇÑíÎ ÇáäÔÑ ÈÊäÓíŞ ãŞÑæÁ",
                values: [
                    { value: "function formatPostDate(date, locale = 'ar') { return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(date); }", description: "ÊäÓíŞ ÊÇÑíÎ ÇáäÔÑ" }
                ]
            },
            {
                name: "ãËÇá 3 - æŞÊ äÓÈí (ãäĞ ßã¿)",
                description: "ÚÑÖ ÇáæŞÊ ÇáäÓÈí",
                values: [
                    { value: "function timeAgo(date, locale = 'ar') { const diff = (Date.now() - date.getTime()) / 1000; const units = { year: 31536000, month: 2592000, week: 604800, day: 86400, hour: 3600, minute: 60 }; const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }); for (const [unit, seconds] of Object.entries(units)) { if (Math.abs(diff) >= seconds) { const value = Math.round(-diff / seconds); return rtf.format(value, unit); } } return rtf.format(-Math.round(diff), 'second'); }", description: "æŞÊ äÓÈí" }
                ]
            },
            {
                name: "ãËÇá 4 - ÊÑÊíÈ ÇáÃÓãÇÁ ÚÑÈíÇğ",
                description: "ÊÑÊíÈ ŞÇÆãÉ ÃÓãÇÁ ÚÑÈíÉ",
                values: [
                    { value: "function sortArabicNames(names) { const collator = new Intl.Collator('ar'); return names.sort(collator.compare); }", description: "ÊÑÊíÈ ÚÑÈí" }
                ]
            },
            {
                name: "ãËÇá 5 - ÚÑÖ ÅÔÚÇÑ ÈÚÏÏ ÇáÚäÇÕÑ",
                description: "ÅÔÚÇÑ ÈÚÏÏ ÇáÚäÇÕÑ ÈÕíÛÉ ÕÍíÍÉ",
                values: [
                    { value: "function notification(count, locale = 'ar') { const rules = new Intl.PluralRules(locale); const rule = rules.select(count); const messages = { one: 'ÚäÕÑ æÇÍÏ', two: 'ÚäÕÑÇä', few: `${count} ÚäÇÕÑ`, many: `${count} ÚäÕÑÇğ`, zero: 'áÇ ÊæÌÏ ÚäÇÕÑ' }; return messages[rule]; }", description: "ÅÔÚÇÑ" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. äÕÇÆÍ æÅÑÔÇÏÇÊ
    // ============================================================
    {
        tag: "tips",
        description: "äÕÇÆÍ æÅÑÔÇÏÇÊ ãåãÉ áÇÓÊÎÏÇã Intl",
        properties: [
            {
                name: "äÕÇÆÍ ÚÇãÉ",
                description: "äÕÇÆÍ ÃÓÇÓíÉ ááÊÚÇãá ãÚ Intl",
                values: [
                    { value: "ÇÓÊÎÏã Intl.NumberFormat ááÚãáÇÊ", description: "ÈÏáÇğ ãä ÇáÊäÓíŞ ÇáíÏæí" },
                    { value: "ÇÓÊÎÏã Intl.DateTimeFormat ááÊæÇÑíÎ", description: "íÍÊÑã ÊäÓíŞ ÇááÛÉ" },
                    { value: "ÇÓÊÎÏã Intl.RelativeTimeFormat ááæŞÊ ÇáäÓÈí", description: "ãËá 'ãäĞ ÓÇÚÉ'" },
                    { value: "ÇÓÊÎÏã Intl.Collator ááÊÑÊíÈ", description: "ÎÇÕÉ ááÛÉ ÇáÚÑÈíÉ" },
                    { value: "ÇÓÊÎÏã Intl.PluralRules ááÌãÚ", description: "ÎÇÕÉ ááÛÉ ÇáÚÑÈíÉ" }
                ]
            },
            {
                name: "äÕÇÆÍ ÇáÃÏÇÁ",
                description: "äÕÇÆÍ áÊÍÓíä ÃÏÇÁ Intl",
                values: [
                    { value: "ÃÚÏ ÇÓÊÎÏÇã ßÇÆäÇÊ Intl", description: "ÈÏáÇğ ãä ÅäÔÇÆåÇ ßá ãÑÉ" },
                    { value: "ÇÓÊÎÏã Intl İí ÇáÎÇÏã (Node.js) ÃíÖÇğ", description: "ááÍÕæá Úáì äİÓ ÇáÊäÓíŞ" }
                ]
            },
            {
                name: "ÇáÃÎØÇÁ ÇáÔÇÆÚÉ",
                description: "ÃÎØÇÁ ÔÇÆÚÉ ÚäÏ ÇÓÊÎÏÇã Intl",
                values: [
                    { value: "äÓíÇä ÊÍÏíÏ locale", description: "íÓÊÎÏã locale ÇáÇİÊÑÇÖí" },
                    { value: "ÇÓÊÎÏÇã Intl İí ãÊÕİÍÇÊ ŞÏíãÉ", description: "ŞÏ áÇ ÊÏÚã ßá ÇáãíÒÇÊ" },
                    { value: "äÓíÇä Ãä ÈÚÖ ÇáÎíÇÑÇÊ ÊÊØáÈ ÇáÏÚã", description: "ãËá DurationFormat" }
                ]
            }
        ]
    }
];

// ÊÕÏíÑ ÇáÈíÇäÇÊ
if (typeof window !== 'undefined') {
    window.jsIntlData = jsIntlData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsIntlData;
}