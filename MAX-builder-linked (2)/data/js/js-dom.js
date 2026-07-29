// ============================================================
// js-dom.js
// ÏæÇá DOM (Document Object Model) İí JavaScript
// ÊÔÑÍ ÌãíÚ ÏæÇá ÇáÊÚÇãá ãÚ ÚäÇÕÑ ÇáÕİÍÉ æÊÚÏíáåÇ
// ============================================================

const jsDomData = [
    // ============================================================
    // 1. ÇáÈÍË Úä ÇáÚäÇÕÑ (Selectors)
    // ============================================================
    {
        tag: "dom-selectors",
        description: "ÏæÇá ááÈÍË Úä ÚäÇÕÑ İí ÇáÕİÍÉ ÈÇÓÊÎÏÇã ãÍÏÏÇÊ ãÎÊáİÉ",
        properties: [
            // -------- getElementById --------
            {
                name: "document.getElementById",
                description: "íõÑÌÚ ÇáÚäÕÑ ÇáĞí íÍãá ŞíãÉ id ÇáãÍÏÏÉ (ÚäÕÑ æÇÍÏ)",
                values: [
                    { value: "document.getElementById('main');", description: "ÇáÍÕæá Úáì ÚäÕÑ ÈÇáãÚÑøİ main" },
                    { value: "const header = document.getElementById('header');", description: "ÊÎÒíä ÇáÚäÕÑ" },
                    { value: "if (element) { element.style.color = 'red'; }", description: "ÇáÊÍŞŞ ãä ÇáæÌæÏ" }
                ]
            },
            // -------- getElementsByClassName --------
            {
                name: "document.getElementsByClassName",
                description: "íõÑÌÚ ãÌãæÚÉ ÍíøÉ Èßá ÇáÚäÇÕÑ ÇáÊí ÊÍãá Õäİ CSS ãÚíøä",
                values: [
                    { value: "document.getElementsByClassName('card');", description: "ÇáÍÕæá Úáì ßá ÚäÇÕÑ ÇáÕäİ card" },
                    { value: "const items = document.getElementsByClassName('item');", description: "ÊÎÒíä ÇáãÌãæÚÉ" },
                    { value: "items[0].textContent = 'Êã';", description: "ÊÚÏíá Ãæá ÚäÕÑ" }
                ]
            },
            // -------- getElementsByTagName --------
            {
                name: "document.getElementsByTagName",
                description: "íõÑÌÚ ãÌãæÚÉ ÍíøÉ Èßá ÇáÚäÇÕÑ ÇáÊí ÊÍãá ÇÓã æÓã ãÚíøä",
                values: [
                    { value: "document.getElementsByTagName('p');", description: "ÇáÍÕæá Úáì ßá ÇáİŞÑÇÊ" },
                    { value: "const divs = document.getElementsByTagName('div');", description: "ÊÎÒíä ÇáãÌãæÚÉ" }
                ]
            },
            // -------- getElementsByName --------
            {
                name: "document.getElementsByName",
                description: "íõÑÌÚ ãÌãæÚÉ ÍíøÉ Èßá ÇáÚäÇÕÑ ÇáÊí ÊÍãá ÓãÉ name ãÚíøäÉ",
                values: [
                    { value: "document.getElementsByName('username');", description: "ÇáÍÕæá Úáì ÚäÇÕÑ ÈÇáÇÓã username" }
                ]
            },
            // -------- querySelector --------
            {
                name: "document.querySelector",
                description: "íõÑÌÚ Ãæá ÚäÕÑ İí ÇáÕİÍÉ íØÇÈŞ ãÍÏÏ CSS ãÚØì (Ãæ null Åä áã íæÌÏ)",
                values: [
                    { value: "document.querySelector('.box');", description: "Ãæá ÚäÕÑ ÈÇáÕäİ box" },
                    { value: "document.querySelector('#main .content');", description: "Ãæá ÚäÕÑ .content ÏÇÎá #main" },
                    { value: "document.querySelector('div[data-id=\"1\"]');", description: "Ãæá div ÈÇáÓãÉ data-id=1" }
                ]
            },
            // -------- querySelectorAll --------
            {
                name: "document.querySelectorAll",
                description: "íõÑÌÚ ŞÇÆãÉ (NodeList) Èßá ÇáÚäÇÕÑ ÇáÊí ÊØÇÈŞ ãÍÏÏ CSS ãÚØì",
                values: [
                    { value: "document.querySelectorAll('.item');", description: "ßá ÚäÇÕÑ ÇáÕäİ item" },
                    { value: "document.querySelectorAll('ul > li');", description: "ßá li ÇáÊí åí ÃÈäÇÁ ãÈÇÔÑíä áÜ ul" },
                    { value: "const items = document.querySelectorAll('.card'); items.forEach(item => { ... });", description: "ÇáÊßÑÇÑ Úáì ÇáÚäÇÕÑ" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. ÅäÔÇÁ ÇáÚäÇÕÑ
    // ============================================================
    {
        tag: "dom-creation",
        description: "ÏæÇá áÅäÔÇÁ ÚäÇÕÑ æÚŞÏ ÌÏíÏÉ İí ÇáÕİÍÉ",
        properties: [
            // -------- createElement --------
            {
                name: "document.createElement",
                description: "íõäÔÆ ÚäÕÑ HTML ÌÏíÏÇğ İí ÇáĞÇßÑÉ áã íõÏÑÌ ÈÚÏ İí ÇáÕİÍÉ",
                values: [
                    { value: "const div = document.createElement('div');", description: "ÅäÔÇÁ ÚäÕÑ div" },
                    { value: "const button = document.createElement('button');", description: "ÅäÔÇÁ ÒÑ" },
                    { value: "const input = document.createElement('input'); input.type = 'text';", description: "ÅäÔÇÁ ÍŞá ÅÏÎÇá" }
                ]
            },
            // -------- createTextNode --------
            {
                name: "document.createTextNode",
                description: "íõäÔÆ ÚŞÏÉ äÕíÉ ÌÏíÏÉ",
                values: [
                    { value: "const text = document.createTextNode('ãÑÍÈÇğ');", description: "ÅäÔÇÁ ÚŞÏÉ äÕíÉ" },
                    { value: "div.appendChild(document.createTextNode('äÕ'));", description: "ÅÖÇİÉ äÕ Åáì ÚäÕÑ" }
                ]
            },
            // -------- createDocumentFragment --------
            {
                name: "document.createDocumentFragment",
                description: "íõäÔÆ ÍÇæíÉ ãÄŞÊÉ ááÚäÇÕÑ áÊÍÓíä ÇáÃÏÇÁ ÚäÏ ÅÖÇİÉ ÚÏÉ ÚäÇÕÑ ÏİÚÉ æÇÍÏÉ",
                values: [
                    { value: "const fragment = document.createDocumentFragment();", description: "ÅäÔÇÁ ÌÒÁ ãÓÊäÏ" },
                    { value: "for (let i = 0; i < 100; i++) { const li = document.createElement('li'); li.textContent = i; fragment.appendChild(li); } list.appendChild(fragment);", description: "ÅÖÇİÉ 100 ÚäÕÑ ÏİÚÉ æÇÍÏÉ" }
                ]
            },
            // -------- cloneNode --------
            {
                name: "element.cloneNode",
                description: "íõäÔÆ äÓÎÉ ãä ÇáÚäÕÑ¡ æÊÔãá ÃÈäÇÁå ÅĞÇ ãõÑöøÑÊ true",
                values: [
                    { value: "const clone = element.cloneNode(true);", description: "äÓÎ ÚãíŞ (ãÚ ÇáÃÈäÇÁ)" },
                    { value: "const shallow = element.cloneNode(false);", description: "äÓÎ ÓØÍí (ÈÏæä ÃÈäÇÁ)" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. ÅÖÇİÉ æÍĞİ ÇáÚäÇÕÑ
    // ============================================================
    {
        tag: "dom-manipulation",
        description: "ÏæÇá áÅÖÇİÉ æÍĞİ æÊÚÏíá ÇáÚäÇÕÑ İí ÇáÕİÍÉ",
        properties: [
            // -------- appendChild --------
            {
                name: "element.appendChild",
                description: "íÖíİ ÚäÕÑÇğ ßÂÎÑ ÇÈä ÏÇÎá ÚäÕÑ ÂÎÑ İí ÇáÕİÍÉ",
                values: [
                    { value: "parent.appendChild(child);", description: "ÅÖÇİÉ ÇÈä" },
                    { value: "document.body.appendChild(div);", description: "ÅÖÇİÉ div Åáì body" },
                    { value: "list.appendChild(li);", description: "ÅÖÇİÉ ÚäÕÑ Åáì ŞÇÆãÉ" }
                ]
            },
            // -------- insertBefore --------
            {
                name: "element.insertBefore",
                description: "íõÏÑÌ ÚäÕÑÇğ ÌÏíÏÇğ ŞÈá ÚäÕÑ ãÑÌÚí ãÍÏÏ ÏÇÎá äİÓ ÇáÃÈ",
                values: [
                    { value: "parent.insertBefore(newEl, referenceEl);", description: "ÅÏÑÇÌ ŞÈá ÚäÕÑ" },
                    { value: "list.insertBefore(newItem, list.children[0]);", description: "ÅÏÑÇÌ İí ÇáÈÏÇíÉ" }
                ]
            },
            // -------- removeChild --------
            {
                name: "element.removeChild",
                description: "íÍĞİ ÚäÕÑÇğ ãÍÏÏÇğ ãä ÏÇÎá ÚäÕÑ ÃÈ İí ÇáÕİÍÉ",
                values: [
                    { value: "parent.removeChild(child);", description: "ÍĞİ ÇÈä" },
                    { value: "list.removeChild(list.children[0]);", description: "ÍĞİ Ãæá ÚäÕÑ" }
                ]
            },
            // -------- remove --------
            {
                name: "element.remove",
                description: "íÍĞİ ÇáÚäÕÑ ãÈÇÔÑÉ ãä ÇáÕİÍÉ Ïæä ÇáÍÇÌÉ áÇÓÊÏÚÇÁ removeChild ãä ÇáÃÈ",
                values: [
                    { value: "element.remove();", description: "ÍĞİ ÇáÚäÕÑ" },
                    { value: "document.querySelector('.old').remove();", description: "ÍĞİ ÚäÕÑ ÈÇáÕäİ old" }
                ]
            },
            // -------- replaceChild --------
            {
                name: "element.replaceChild",
                description: "íÓÊÈÏá ÚäÕÑÇğ ÈÇÈä ÂÎÑ İí ÇáÕİÍÉ",
                values: [
                    { value: "parent.replaceChild(newChild, oldChild);", description: "ÇÓÊÈÏÇá ÚäÕÑ" }
                ]
            },
            // -------- replaceWith --------
            {
                name: "element.replaceWith",
                description: "íÓÊÈÏá ÇáÚäÕÑ ÇáÍÇáí ÈÚäÕÑ Ãæ äÕ ÂÎÑ İí äİÓ ãßÇäå",
                values: [
                    { value: "oldEl.replaceWith(newEl);", description: "ÇÓÊÈÏÇá ÇáÚäÕÑ" },
                    { value: "element.replaceWith('äÕ ÌÏíÏ');", description: "ÇÓÊÈÏÇá ÈäÕ" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. ÊÚÏíá ÇáãÍÊæì
    // ============================================================
    {
        tag: "dom-content",
        description: "ÏæÇá áÊÚÏíá ãÍÊæì ÇáÚäÇÕÑ",
        properties: [
            // -------- textContent --------
            {
                name: "element.textContent",
                description: "íŞÑÃ Ãæ íõÚíøä ãÍÊæì ÇáÚäÕÑ ßäÕ ÚÇÏí Ïæä ÊİÓíÑ Ãí æÓæã HTML",
                values: [
                    { value: "element.textContent = 'ãÑÍÈÇğ';", description: "ÊÚííä ÇáäÕ" },
                    { value: "const text = element.textContent;", description: "ŞÑÇÁÉ ÇáäÕ" },
                    { value: "div.textContent = '';", description: "ÊİÑíÛ ÇáãÍÊæì" }
                ]
            },
            // -------- innerHTML --------
            {
                name: "element.innerHTML",
                description: "íŞÑÃ Ãæ íõÚíøä ãÍÊæì ÇáÚäÕÑ ßäÕ HTML íõİÓóøÑ æíõÚÑÖ ßßæÏ",
                values: [
                    { value: "element.innerHTML = '<b>ãÑÍÈÇğ</b>';", description: "ÊÚííä HTML" },
                    { value: "const html = element.innerHTML;", description: "ŞÑÇÁÉ HTML" },
                    { value: "div.innerHTML = '';", description: "ÊİÑíÛ ÇáãÍÊæì" }
                ]
            },
            // -------- innerText --------
            {
                name: "element.innerText",
                description: "ãÔÇÈå áÜ textContent áßä íÍÊÑã ÇáÊäÓíŞ ÇáãÑÆí æíõÚíÏ ÇáäÕ ßãÇ íÙåÑ ááãÓÊÎÏã",
                values: [
                    { value: "const text = element.innerText;", description: "ŞÑÇÁÉ ÇáäÕ ÇáãÑÆí" }
                ]
            },
            // -------- outerHTML --------
            {
                name: "element.outerHTML",
                description: "íŞÑÃ Ãæ íõÚíøä ãÍÊæì ÇáÚäÕÑ ÈãÇ İíå ÇáÚäÕÑ äİÓå",
                values: [
                    { value: "element.outerHTML = '<div>ÌÏíÏ</div>';", description: "ÇÓÊÈÏÇá ÇáÚäÕÑ" },
                    { value: "const html = element.outerHTML;", description: "ŞÑÇÁÉ HTML ãÚ ÇáÚäÕÑ" }
                ]
            }
        ]
    },

    // ============================================================
    // 5. ÊÚÏíá ÇáÓãÇÊ (Attributes)
    // ============================================================
    {
        tag: "dom-attributes",
        description: "ÏæÇá ááÊÚÇãá ãÚ ÓãÇÊ ÇáÚäÇÕÑ",
        properties: [
            // -------- setAttribute --------
            {
                name: "element.setAttribute",
                description: "íõÚíøä ŞíãÉ áÓãÉ (attribute) ãÚíäÉ Úáì ÇáÚäÕÑ",
                values: [
                    { value: "element.setAttribute('data-id', '5');", description: "ÊÚííä ÓãÉ" },
                    { value: "element.setAttribute('class', 'active');", description: "ÊÚííä ÇáÕäİ" },
                    { value: "img.setAttribute('src', 'image.jpg');", description: "ÊÚííä ãÕÏÑ ÇáÕæÑÉ" }
                ]
            },
            // -------- getAttribute --------
            {
                name: "element.getAttribute",
                description: "íõÑÌÚ ŞíãÉ ÓãÉ (attribute) ãÚíäÉ ãä ÇáÚäÕÑ",
                values: [
                    { value: "const id = element.getAttribute('data-id');", description: "ŞÑÇÁÉ ÓãÉ" },
                    { value: "const src = img.getAttribute('src');", description: "ŞÑÇÁÉ ãÕÏÑ ÇáÕæÑÉ" }
                ]
            },
            // -------- removeAttribute --------
            {
                name: "element.removeAttribute",
                description: "íÍĞİ ÓãÉ ãÚíäÉ ãä ÇáÚäÕÑ",
                values: [
                    { value: "element.removeAttribute('data-id');", description: "ÍĞİ ÓãÉ" },
                    { value: "img.removeAttribute('alt');", description: "ÍĞİ ÓãÉ alt" }
                ]
            },
            // -------- hasAttribute --------
            {
                name: "element.hasAttribute",
                description: "íÊÍŞŞ ãä æÌæÏ ÓãÉ ãÚíäÉ Úáì ÇáÚäÕÑ",
                values: [
                    { value: "if (element.hasAttribute('disabled')) { ... }", description: "ÇáÊÍŞŞ ãä æÌæÏ ÓãÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. ÊÚÏíá ÇáİÆÇÊ (Classes)
    // ============================================================
    {
        tag: "dom-classes",
        description: "ÏæÇá ááÊÚÇãá ãÚ İÆÇÊ CSS ááÚäÇÕÑ",
        properties: [
            // -------- classList.add --------
            {
                name: "element.classList.add",
                description: "íÖíİ Õäİ CSS æÇÍÏÇğ Ãæ ÃßËÑ Åáì ÇáÚäÕÑ",
                values: [
                    { value: "element.classList.add('active');", description: "ÅÖÇİÉ Õäİ" },
                    { value: "element.classList.add('active', 'highlight', 'selected');", description: "ÅÖÇİÉ ÚÏÉ ÃÕäÇİ" }
                ]
            },
            // -------- classList.remove --------
            {
                name: "element.classList.remove",
                description: "íÍĞİ Õäİ CSS ãÚíäÇğ ãä ÇáÚäÕÑ",
                values: [
                    { value: "element.classList.remove('active');", description: "ÍĞİ Õäİ" },
                    { value: "element.classList.remove('active', 'highlight');", description: "ÍĞİ ÚÏÉ ÃÕäÇİ" }
                ]
            },
            // -------- classList.toggle --------
            {
                name: "element.classList.toggle",
                description: "íÖíİ ÇáÕäİ Åä áã íßä ãæÌæÏÇğ¡ Ãæ íÍĞİå Åä ßÇä ãæÌæÏÇğ",
                values: [
                    { value: "element.classList.toggle('active');", description: "ÊÈÏíá ÇáÕäİ" },
                    { value: "element.classList.toggle('active', true);", description: "ÅÖÇİÉ (force)" },
                    { value: "element.classList.toggle('active', false);", description: "ÍĞİ (force)" }
                ]
            },
            // -------- classList.contains --------
            {
                name: "element.classList.contains",
                description: "íÊÍŞŞ Åä ßÇä ÇáÚäÕÑ íÍãá Õäİ CSS ãÚíäÇğ",
                values: [
                    { value: "if (element.classList.contains('active')) { ... }", description: "ÇáÊÍŞŞ ãä æÌæÏ Õäİ" }
                ]
            },
            // -------- classList.replace --------
            {
                name: "element.classList.replace",
                description: "íÓÊÈÏá ÕäİÇğ ÈÂÎÑ",
                values: [
                    { value: "element.classList.replace('old', 'new');", description: "ÇÓÊÈÏÇá Õäİ" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. ÊÚÏíá ÇáÃäãÇØ (Styles)
    // ============================================================
    {
        tag: "dom-styles",
        description: "ÏæÇá ááÊÚÇãá ãÚ ÃäãÇØ CSS ááÚäÇÕÑ",
        properties: [
            // -------- style.property --------
            {
                name: "element.style",
                description: "íŞÑÃ Ãæ íõÚÏøá ÎÇÕíÉ CSS ãÈÇÔÑÉ Úáì ÇáÚäÕÑ",
                values: [
                    { value: "element.style.color = 'red';", description: "ÊÛííÑ áæä ÇáäÕ" },
                    { value: "element.style.backgroundColor = '#f0f0f0';", description: "ÊÛííÑ áæä ÇáÎáİíÉ" },
                    { value: "element.style.display = 'none';", description: "ÅÎİÇÁ ÇáÚäÕÑ" },
                    { value: "element.style.fontSize = '20px';", description: "ÊÛííÑ ÍÌã ÇáÎØ" },
                    { value: "element.style.cssText = 'color: red; font-size: 20px;';", description: "ÊÚííä ÚÏÉ ÃäãÇØ ÏİÚÉ æÇÍÏÉ" }
                ]
            },
            // -------- getComputedStyle --------
            {
                name: "window.getComputedStyle",
                description: "íõÑÌÚ ÇáÃäãÇØ ÇáãÍÓæÈÉ (ÇáãØÈŞÉ İÚáíÇğ) ááÚäÕÑ",
                values: [
                    { value: "const styles = getComputedStyle(element);", description: "ÇáÍÕæá Úáì ÇáÃäãÇØ ÇáãÍÓæÈÉ" },
                    { value: "const color = getComputedStyle(element).color;", description: "ŞÑÇÁÉ áæä ÇáäÕ" },
                    { value: "const display = getComputedStyle(element).display;", description: "ŞÑÇÁÉ ŞíãÉ display" }
                ]
            }
        ]
    },

    // ============================================================
    // 8. ÇáÊäŞá Èíä ÇáÚäÇÕÑ (Traversal)
    // ============================================================
    {
        tag: "dom-traversal",
        description: "ÏæÇá ááÊäŞá Èíä ÇáÚäÇÕÑ İí ÔÌÑÉ DOM",
        properties: [
            // -------- parentNode --------
            {
                name: "element.parentNode",
                description: "íõÑÌÚ ÇáÚäÕÑ ÇáÃÈ ááÚäÕÑ ÇáÍÇáí",
                values: [
                    { value: "const parent = element.parentNode;", description: "ÇáÍÕæá Úáì ÇáÃÈ" }
                ]
            },
            // -------- children --------
            {
                name: "element.children",
                description: "íõÑÌÚ ãÌãæÚÉ ãä ÇáÃÈäÇÁ ÇáãÈÇÔÑíä (ÇáÚäÇÕÑ İŞØ)",
                values: [
                    { value: "const children = element.children;", description: "ÇáÍÕæá Úáì ÇáÃÈäÇÁ" },
                    { value: "for (const child of element.children) { console.log(child); }", description: "ÇáÊßÑÇÑ Úáì ÇáÃÈäÇÁ" }
                ]
            },
            // -------- childNodes --------
            {
                name: "element.childNodes",
                description: "íõÑÌÚ ãÌãæÚÉ ãä ÇáÚŞÏ ÇáÃÈäÇÁ (ÈãÇ İíåÇ ÇáäÕæÕ æÇáİÑÇÛÇÊ)",
                values: [
                    { value: "const nodes = element.childNodes;", description: "ÇáÍÕæá Úáì ÇáÚŞÏ ÇáÃÈäÇÁ" }
                ]
            },
            // -------- firstChild / lastChild --------
            {
                name: "element.firstChild / lastChild",
                description: "íõÑÌÚ Ãæá/ÂÎÑ ÚŞÏÉ ÇÈäÉ (ŞÏ Êßæä äÕÇğ)",
                values: [
                    { value: "const first = element.firstChild;", description: "Ãæá ÚŞÏÉ" },
                    { value: "const last = element.lastChild;", description: "ÂÎÑ ÚŞÏÉ" }
                ]
            },
            // -------- firstElementChild / lastElementChild --------
            {
                name: "element.firstElementChild / lastElementChild",
                description: "íõÑÌÚ Ãæá/ÂÎÑ ÚäÕÑ ÇÈä (íÊÌÇåá ÇáäÕæÕ)",
                values: [
                    { value: "const firstEl = element.firstElementChild;", description: "Ãæá ÚäÕÑ" },
                    { value: "const lastEl = element.lastElementChild;", description: "ÂÎÑ ÚäÕÑ" }
                ]
            },
            // -------- nextSibling / previousSibling --------
            {
                name: "element.nextSibling / previousSibling",
                description: "íõÑÌÚ ÇáÚŞÏÉ ÇáÊÇáíÉ/ÇáÓÇÈŞÉ İí äİÓ ÇáãÓÊæì",
                values: [
                    { value: "const next = element.nextSibling;", description: "ÇáÚŞÏÉ ÇáÊÇáíÉ" },
                    { value: "const prev = element.previousSibling;", description: "ÇáÚŞÏÉ ÇáÓÇÈŞÉ" }
                ]
            },
            // -------- nextElementSibling / previousElementSibling --------
            {
                name: "element.nextElementSibling / previousElementSibling",
                description: "íõÑÌÚ ÇáÚäÕÑ ÇáÊÇáí/ÇáÓÇÈŞ (íÊÌÇåá ÇáäÕæÕ)",
                values: [
                    { value: "const nextEl = element.nextElementSibling;", description: "ÇáÚäÕÑ ÇáÊÇáí" },
                    { value: "const prevEl = element.previousElementSibling;", description: "ÇáÚäÕÑ ÇáÓÇÈŞ" }
                ]
            },
            // -------- closest --------
            {
                name: "element.closest",
                description: "íÈÍË İí ÇáÚäÕÑ äİÓå Ëã ÂÈÇÆå ÕÚæÏÇğ Úä Ãæá ÚäÕÑ íØÇÈŞ ãÍÏÏ CSS ãÚØì",
                values: [
                    { value: "const card = element.closest('.card');", description: "ÇáÈÍË Úä ÃŞÑÈ ÚäÕÑ ÈÇáÕäİ card" },
                    { value: "const container = element.closest('#container');", description: "ÇáÈÍË Úä ÃŞÑÈ ÚäÕÑ ÈÇáãÚÑøİ container" }
                ]
            },
            // -------- contains --------
            {
                name: "element.contains",
                description: "íÊÍŞŞ Åä ßÇä ÚäÕÑ ãÚíøä åæ äİÓå Ãæ ÃÍÏ ÃÈäÇÁ ÇáÚäÕÑ ÇáÍÇáí",
                values: [
                    { value: "if (parent.contains(child)) { console.log('child ÏÇÎá parent'); }", description: "ÇáÊÍŞŞ ãä ÇáÇÍÊæÇÁ" }
                ]
            }
        ]
    },

    // ============================================================
    // 9. ÇáÃÍÏÇË (Events)
    // ============================================================
    {
        tag: "dom-events",
        description: "ÏæÇá ááÊÚÇãá ãÚ ÇáÃÍÏÇË İí DOM",
        properties: [
            // -------- addEventListener --------
            {
                name: "element.addEventListener",
                description: "íÑÈØ ÏÇáÉ ÈÍÏË ãÚíä Úáì ÚäÕÑ¡ ÈÍíË ÊõäİóøĞ ÇáÏÇáÉ ÚäÏ æŞæÚ ÇáÍÏË",
                values: [
                    { value: "element.addEventListener('click', () => { console.log('äŞÑ'); });", description: "ÅÖÇİÉ ãÓÊãÚ ÍÏË ÇáäŞÑ" },
                    { value: "button.addEventListener('click', handleClick);", description: "ÑÈØ ÏÇáÉ ãÓãÇÉ" },
                    { value: "input.addEventListener('input', (e) => { console.log(e.target.value); });", description: "ÇÓÊÎÏÇã ãÚØì ÇáÍÏË" },
                    { value: "element.addEventListener('mouseover', { handleEvent(e) { console.log(e); } });", description: "ßÇÆä ßãÚÇáÌ" },
                    { value: "element.addEventListener('click', handler, { once: true });", description: "ÊäİíĞ ãÑÉ æÇÍÏÉ" },
                    { value: "element.addEventListener('click', handler, { passive: true });", description: "ÊÍÓíä ÇáÃÏÇÁ (ááÊãÑíÑ)" }
                ]
            },
            // -------- removeEventListener --------
            {
                name: "element.removeEventListener",
                description: "íİÕá ÏÇáÉ ßÇäÊ ãÑÊÈØÉ ÓÇÈŞÇğ ÈÍÏË ãÚíä Úáì ÚäÕÑ",
                values: [
                    { value: "element.removeEventListener('click', handler);", description: "ÅÒÇáÉ ãÓÊãÚ ÇáÍÏË" }
                ]
            },
            // -------- dispatchEvent --------
            {
                name: "element.dispatchEvent",
                description: "íõØáŞ ÍÏËÇğ ÈÑãÌíÇğ Úáì ÚäÕÑ ßÃäå æŞÚ İÚáÇğ",
                values: [
                    { value: "element.dispatchEvent(new Event('click'));", description: "ÅØáÇŞ ÍÏË äŞÑ" },
                    { value: "element.dispatchEvent(new CustomEvent('custom', { detail: { data: 'ãÚáæãÇÊ' } }));", description: "ÅØáÇŞ ÍÏË ãÎÕÕ" }
                ]
            }
        ]
    },

    // ============================================================
    // 10. ãÚáæãÇÊ ÇáãæŞÚ æÇáÍÌã
    // ============================================================
    {
        tag: "dom-geometry",
        description: "ÏæÇá ááÍÕæá Úáì ãÚáæãÇÊ ãæŞÚ æÍÌã ÇáÚäÇÕÑ",
        properties: [
            // -------- getBoundingClientRect --------
            {
                name: "element.getBoundingClientRect",
                description: "íõÑÌÚ ÍÌã ÇáÚäÕÑ æãæŞÚå ÈÇáäÓÈÉ áäÇİĞÉ ÇáÚÑÖ (viewport)",
                values: [
                    { value: "const rect = element.getBoundingClientRect();", description: "ÇáÍÕæá Úáì ÇáãÓÊØíá" },
                    { value: "rect.top", description: "ÇáãÓÇİÉ ãä ÇáÃÚáì" },
                    { value: "rect.left", description: "ÇáãÓÇİÉ ãä ÇáíÓÇÑ" },
                    { value: "rect.width", description: "ÇáÚÑÖ" },
                    { value: "rect.height", description: "ÇáÇÑÊİÇÚ" },
                    { value: "rect.bottom", description: "ÇáãÓÇİÉ ãä ÇáÃÓİá" },
                    { value: "rect.right", description: "ÇáãÓÇİÉ ãä Çáíãíä" },
                    { value: "rect.x", description: "ÇáÅÍÏÇËí X" },
                    { value: "rect.y", description: "ÇáÅÍÏÇËí Y" }
                ]
            },
            // -------- getClientRects --------
            {
                name: "element.getClientRects",
                description: "íõÑÌÚ ãÌãæÚÉ ãä ÇáãÓÊØíáÇÊ ááÚäÇÕÑ ãÊÚÏÏÉ ÇáÃÓØÑ",
                values: [
                    { value: "const rects = element.getClientRects();", description: "ÇáÍÕæá Úáì ÇáãÓÊØíáÇÊ" }
                ]
            },
            // -------- scrollIntoView --------
            {
                name: "element.scrollIntoView",
                description: "íõãÑøÑ ÇáÕİÍÉ ÍÊì íÕÈÍ ÇáÚäÕÑ ãÑÆíÇğ Öãä äÇİĞÉ ÇáÚÑÖ",
                values: [
                    { value: "element.scrollIntoView();", description: "ÊãÑíÑ Åáì ÇáÚäÕÑ" },
                    { value: "element.scrollIntoView({ behavior: 'smooth' });", description: "ÊãÑíÑ ÓáÓ" },
                    { value: "element.scrollIntoView({ behavior: 'smooth', block: 'center' });", description: "ÊæÓíØ ÇáÚäÕÑ" },
                    { value: "element.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });", description: "ÃŞÑÈ ãÍÇĞÇÉ" }
                ]
            }
        ]
    },

    // ============================================================
    // 11. ÇáÈíÇäÇÊ ÇáãÎÕÕÉ (Data Attributes)
    // ============================================================
    {
        tag: "dom-dataset",
        description: "ÇáÊÚÇãá ãÚ ÓãÇÊ data-* ÇáãÎÕÕÉ",
        properties: [
            {
                name: "element.dataset",
                description: "íŞÑÃ Ãæ íõÚÏøá ÎÕÇÆÕ data-* ÇáãÎÕÕÉ ÇáãæÌæÏÉ Úáì æÓã HTML",
                values: [
                    { value: "element.dataset.userId = '42';", description: "ÊÚííä data-user-id" },
                    { value: "const id = element.dataset.userId;", description: "ŞÑÇÁÉ data-user-id" },
                    { value: "element.dataset.color = 'red';", description: "ÊÚííä data-color" },
                    { value: "delete element.dataset.old;", description: "ÍĞİ data-old" }
                ]
            }
        ]
    },

    // ============================================================
    // 12. ÃãËáÉ ÚãáíÉ
    // ============================================================
    {
        tag: "examples",
        description: "ÃãËáÉ ÚãáíÉ áÇÓÊÎÏÇã ÏæÇá DOM",
        properties: [
            {
                name: "ãËÇá 1 - ÅäÔÇÁ ÚäÕÑ æÅÖÇİÊå",
                description: "ÅäÔÇÁ ÚäÕÑ æÅÖÇİÊå Åáì ÇáÕİÍÉ",
                values: [
                    { value: "function createElement(tag, text, parent) { const el = document.createElement(tag); el.textContent = text; parent.appendChild(el); return el; }", description: "ÏÇáÉ ÅäÔÇÁ ÚäÕÑ" },
                    { value: "const newDiv = createElement('div', 'ãÑÍÈÇğ', document.body);", description: "ÅäÔÇÁ æÅÖÇİÉ" }
                ]
            },
            {
                name: "ãËÇá 2 - ÊÈÏíá ÇáÕäİ",
                description: "ÊÈÏíá Õäİ CSS ááäŞÑ",
                values: [
                    { value: "button.addEventListener('click', function() { this.classList.toggle('active'); });", description: "ÊÈÏíá ÇáÕäİ" }
                ]
            },
            {
                name: "ãËÇá 3 - ÅäÔÇÁ ŞÇÆãÉ ãä ãÕİæİÉ",
                description: "ÅäÔÇÁ ŞÇÆãÉ ÏíäÇãíßíÉ",
                values: [
                    { value: "function createList(items, target) { const ul = document.createElement('ul'); items.forEach(item => { const li = document.createElement('li'); li.textContent = item; ul.appendChild(li); }); target.appendChild(ul); }", description: "ÅäÔÇÁ ŞÇÆãÉ" }
                ]
            },
            {
                name: "ãËÇá 4 - ÊÃËíÑ ÊãÑíÑ ÓáÓ",
                description: "ÇáÊãÑíÑ ÇáÓáÓ Åáì ÚäÕÑ",
                values: [
                    { value: "function scrollToElement(selector) { const el = document.querySelector(selector); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }", description: "ÊãÑíÑ ÓáÓ" }
                ]
            },
            {
                name: "ãËÇá 5 - ãÚÇáÌÉ äãæĞÌ",
                description: "ãÚÇáÌÉ ÅÑÓÇá äãæĞÌ",
                values: [
                    { value: "form.addEventListener('submit', function(e) { e.preventDefault(); const data = new FormData(this); const name = data.get('name'); console.log(name); });", description: "ãÚÇáÌÉ ÇáäãæĞÌ" }
                ]
            }
        ]
    },

    // ============================================================
    // 13. äÕÇÆÍ æÅÑÔÇÏÇÊ
    // ============================================================
    {
        tag: "tips",
        description: "äÕÇÆÍ æÅÑÔÇÏÇÊ ãåãÉ áÇÓÊÎÏÇã ÏæÇá DOM",
        properties: [
            {
                name: "äÕÇÆÍ ÚÇãÉ",
                description: "äÕÇÆÍ ÃÓÇÓíÉ ááÊÚÇãá ãÚ DOM",
                values: [
                    { value: "ÇÓÊÎÏã querySelector ááÚäÇÕÑ ÇáİÑÏíÉ", description: "ÃÓåá ãä getElementById" },
                    { value: "ÇÓÊÎÏã querySelectorAll ááãÌãæÚÇÊ", description: "ãÚ forEach" },
                    { value: "ÇÓÊÎÏã textContent ÈÏáÇğ ãä innerHTML", description: "ÃÓÑÚ æÃßËÑ ÃãÇäÇğ" },
                    { value: "ÇÓÊÎÏã classList ÈÏáÇğ ãä className", description: "ÃÓåá ááÊÚÇãá ãÚ ÇáÃÕäÇİ" },
                    { value: "ÇÓÊÎÏã dataset ááÓãÇÊ ÇáãÎÕÕÉ", description: "ÈÏáÇğ ãä getAttribute" }
                ]
            },
            {
                name: "äÕÇÆÍ ÇáÃÏÇÁ",
                description: "äÕÇÆÍ áÊÍÓíä ÃÏÇÁ DOM",
                values: [
                    { value: "ÇÓÊÎÏã DocumentFragment ááÅÖÇİÇÊ ÇáãÊÚÏÏÉ", description: "íŞáá ÅÚÇÏÉ ÇáÑÓã" },
                    { value: "ÊÌäÈ querySelectorAll İí ÇáÍáŞÇÊ", description: "ÇÍİÙ ÇáäÊíÌÉ" },
                    { value: "ÇÓÊÎÏã ÇáÍÏË delegations", description: "áÊŞáíá ÚÏÏ ÇáãÓÊãÚíä" }
                ]
            },
            {
                name: "ÇáÃÎØÇÁ ÇáÔÇÆÚÉ",
                description: "ÃÎØÇÁ ÔÇÆÚÉ ÚäÏ ÇÓÊÎÏÇã DOM",
                values: [
                    { value: "äÓíÇä Ãä querySelector íõÑÌÚ null", description: "ÊÍŞŞ ŞÈá ÇáÇÓÊÎÏÇã" },
                    { value: "ÇÓÊÎÏÇã innerHTML ãÚ ÅÏÎÇá ÇáãÓÊÎÏã", description: "ÎØÑ Ããäí (XSS)" },
                    { value: "äÓíÇä ÅÒÇáÉ ÇáãÓÊãÚíä", description: "íÓÈÈ ÊÓÑÈ ĞÇßÑÉ" },
                    { value: "ÊÚÏíá DOM ÃËäÇÁ ÇáÊßÑÇÑ", description: "íÓÈÈ ÓáæßÇğ ÛíÑ ãÊæŞÚ" }
                ]
            }
        ]
    }
];

// ÊÕÏíÑ ÇáÈíÇäÇÊ
if (typeof window !== 'undefined') {
    window.jsDomData = jsDomData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsDomData;
}