// ============================================================
// text-data.js
// عناصر المحتوى النصي والتنسيق ضمن السطر
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const textData = [
    // ============================================================
    // عناصر المحتوى النصي الأساسية
    // ============================================================

    // -------- p --------
    {
        tag: "p",
        description: "يعرض فقرة نصية، يفصل بين كتل النص لتسهيل القراءة وتنظيم المحتوى في وحدات مفهومة",
        attributes: []
    },

    // -------- pre --------
    {
        tag: "pre",
        description: "يعرض النص بنفس التنسيق الذي كتب به، يحافظ على المسافات وفواصل الأسطر، يستخدم لعرض الأكواد البرمجية والنصوص المنسقة",
        attributes: [
            {
                name: "width",
                description: "خاصية قديمة كانت تحدد عدد الأحرف المسموح بها في السطر الواحد، استُبدلت بخاصية width في CSS",
                values: [
                    { value: "1", description: "يحدد عرض السطر بـ 1 حرف" },
                    { value: "5", description: "يحدد عرض السطر بـ 5 أحرف" },
                    { value: "10", description: "يحدد عرض السطر بـ 10 أحرف" },
                    { value: "20", description: "يحدد عرض السطر بـ 20 حرفاً" },
                    { value: "30", description: "يحدد عرض السطر بـ 30 حرفاً" },
                    { value: "40", description: "يحدد عرض السطر بـ 40 حرفاً" },
                    { value: "50", description: "يحدد عرض السطر بـ 50 حرفاً" },
                    { value: "60", description: "يحدد عرض السطر بـ 60 حرفاً" },
                    { value: "70", description: "يحدد عرض السطر بـ 70 حرفاً" },
                    { value: "80", description: "يحدد عرض السطر بـ 80 حرفاً، القيمة التقليدية لعرض الطرفية (Terminal)" },
                    { value: "90", description: "يحدد عرض السطر بـ 90 حرفاً" },
                    { value: "100", description: "يحدد عرض السطر بـ 100 حرف" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- blockquote --------
    {
        tag: "blockquote",
        description: "يعرض اقتباساً طويلاً من مصدر آخر، يظهر بمسافة بادئة لتمييزه عن النص العادي وإبراز أنه منقول",
        attributes: [
            {
                name: "cite",
                description: "يضيف رابطاً لمصدر الاقتباس، يساعد في توثيق المصدر والرجوع إليه للتحقق من المعلومات",
                values: [
                    { value: "https://example.com/source", description: "رابط المصدر الذي تم الاقتباس منه" },
                    { value: "https://example.com/book", description: "رابط كتاب" },
                    { value: "https://example.com/article", description: "رابط مقالة" },
                    { value: "https://example.com/research", description: "رابط بحث" },
                    { value: "https://example.com/document", description: "رابط وثيقة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- hr --------
    {
        tag: "hr",
        description: "يرسم خطاً أفقياً يفصل بين أجزاء المحتوى، يستخدم لتغيير الموضوع أو إضافة فاصل بصري بين الأقسام",
        attributes: [
            {
                name: "align",
                description: "خاصية قديمة كانت تحدد محاذاة الخط أفقياً، استُبدلت بـ CSS",
                values: [
                    { value: "left", description: "يحاذي الخط لليسار" },
                    { value: "center", description: "يحاذي الخط للوسط (الافتراضي)" },
                    { value: "right", description: "يحاذي الخط لليمين" }
                ]
            },
            {
                name: "color",
                description: "خاصية قديمة كانت تحدد لون الخط، استُبدلت بخاصية border-color أو background-color في CSS",
                values: [
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي فاتح" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "noshade",
                description: "خاصية قديمة كانت تزيل تأثير الظل ثلاثي الأبعاد عن الخط وتجعله مسطحاً بلون واحد",
                values: [
                    { value: "", description: "يزيل تأثير الظل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "size",
                description: "خاصية قديمة كانت تحدد سماكة (ارتفاع) الخط بالبكسل، استُبدلت بخاصية height أو border-width في CSS",
                values: [
                    { value: "1", description: "خط رفيع جداً" },
                    { value: "2", description: "خط رفيع" },
                    { value: "3", description: "خط رفيع" },
                    { value: "4", description: "خط رفيع" },
                    { value: "5", description: "خط متوسط السماكة" },
                    { value: "6", description: "خط متوسط السماكة" },
                    { value: "7", description: "خط سميك" },
                    { value: "8", description: "خط سميك" },
                    { value: "9", description: "خط سميك" },
                    { value: "10", description: "خط سميك جداً" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "خاصية قديمة كانت تحدد طول الخط بالبكسل أو كنسبة مئوية، استُبدلت بخاصية width في CSS",
                values: [
                    { value: "100%", description: "خط بعرض كامل الحاوية" },
                    { value: "90%", description: "خط بعرض 90% من الحاوية" },
                    { value: "80%", description: "خط بعرض 80% من الحاوية" },
                    { value: "75%", description: "خط بعرض 75% من الحاوية" },
                    { value: "70%", description: "خط بعرض 70% من الحاوية" },
                    { value: "66%", description: "خط بعرض 66% من الحاوية" },
                    { value: "60%", description: "خط بعرض 60% من الحاوية" },
                    { value: "50%", description: "خط بنصف عرض الحاوية" },
                    { value: "40%", description: "خط بعرض 40% من الحاوية" },
                    { value: "33%", description: "خط بعرض 33% من الحاوية" },
                    { value: "30%", description: "خط بعرض 30% من الحاوية" },
                    { value: "25%", description: "خط بربع عرض الحاوية" },
                    { value: "20%", description: "خط بعرض 20% من الحاوية" },
                    { value: "10%", description: "خط بعرض 10% من الحاوية" },
                    { value: "100", description: "خط بطول 100 بكسل" },
                    { value: "200", description: "خط بطول 200 بكسل" },
                    { value: "300", description: "خط بطول 300 بكسل" },
                    { value: "400", description: "خط بطول 400 بكسل" },
                    { value: "500", description: "خط بطول 500 بكسل" },
                    { value: "600", description: "خط بطول 600 بكسل" },
                    { value: "700", description: "خط بطول 700 بكسل" },
                    { value: "800", description: "خط بطول 800 بكسل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- ul --------
    {
        tag: "ul",
        description: "ينشئ قائمة غير مرتبة تعرض العناصر بنقاط، تستخدم للعناصر التي لا تحتاج ترتيب معين مثل قائمة المشتريات أو الميزات",
        attributes: [
            {
                name: "type",
                description: "خاصية قديمة كانت تحدد شكل النقطة أمام كل عنصر، استُبدلت بخاصية list-style-type في CSS",
                values: [
                    { value: "disc", description: "نقطة مملوءة (دائرة سوداء) - الشكل الافتراضي" },
                    { value: "circle", description: "دائرة مفرغة غير مملوءة" },
                    { value: "square", description: "مربع مملوء" }
                ]
            },
            {
                name: "compact",
                description: "خاصية قديمة جداً كانت تقلل المسافة بين عناصر القائمة، لم تعد مدعومة فعلياً في المتصفحات الحديثة، استُبدلت بـ CSS",
                values: [
                    { value: "", description: "يفعّل الوضع المضغوط (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // -------- ol --------
    {
        tag: "ol",
        description: "ينشئ قائمة مرتبة تعرض العناصر بأرقام أو حروف، تستخدم للخطوات المتسلسلة أو التعليمات أو العناصر التي تحتاج ترتيب",
        attributes: [
            {
                name: "reversed",
                description: "يعكس ترتيب الأرقام في القائمة المرقمة، يبدأ من آخر رقم إلى الأول، مفيد للقوائم التنازلية",
                values: [
                    { value: "", description: "يفعّل الترتيب التنازلي (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "start",
                description: "يحدد الرقم الذي تبدأ منه القائمة المرقمة، يستخدم عندما تريد البدء من رقم غير 1 مثل 5 أو 10",
                values: [
                    { value: "1", description: "يبدأ الترقيم من 1 (الافتراضي)" },
                    { value: "2", description: "يبدأ الترقيم من 2" },
                    { value: "3", description: "يبدأ الترقيم من 3" },
                    { value: "4", description: "يبدأ الترقيم من 4" },
                    { value: "5", description: "يبدأ الترقيم من 5" },
                    { value: "6", description: "يبدأ الترقيم من 6" },
                    { value: "7", description: "يبدأ الترقيم من 7" },
                    { value: "8", description: "يبدأ الترقيم من 8" },
                    { value: "9", description: "يبدأ الترقيم من 9" },
                    { value: "10", description: "يبدأ الترقيم من 10" },
                    { value: "20", description: "يبدأ الترقيم من 20" },
                    { value: "50", description: "يبدأ الترقيم من 50" },
                    { value: "100", description: "يبدأ الترقيم من 100" },
                    { value: "500", description: "يبدأ الترقيم من 500" },
                    { value: "1000", description: "يبدأ الترقيم من 1000" }
                ],
                freeInput: true
            },
            {
                name: "type",
                description: "يغير نوع الترقيم في القائمة المرقمة، يمكن أن يكون أرقاماً عربية أو حروفاً إنجليزية أو رقماً رومانياً",
                values: [
                    { value: "1", description: "ترقيم بأرقام عربية (1، 2، 3) - الافتراضي" },
                    { value: "A", description: "ترقيم بحروف إنجليزية كبيرة (A، B، C)" },
                    { value: "a", description: "ترقيم بحروف إنجليزية صغيرة (a، b، c)" },
                    { value: "I", description: "ترقيم بأرقام رومانية كبيرة (I، II، III)" },
                    { value: "i", description: "ترقيم بأرقام رومانية صغيرة (i، ii، iii)" }
                ]
            },
            {
                name: "compact",
                description: "خاصية قديمة جداً كانت تقلل المسافة بين عناصر القائمة، لم تعد مدعومة فعلياً في المتصفحات الحديثة، استُبدلت بـ CSS",
                values: [
                    { value: "", description: "يفعّل الوضع المضغوط (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // -------- li --------
    {
        tag: "li",
        description: "يمثل عنصراً واحداً داخل قائمة مرتبة أو غير مرتبة، يحمل محتوى القائمة من نص أو صورة أو عناصر أخرى",
        attributes: [
            {
                name: "value",
                description: "يحدد رقم هذا العنصر في القائمة المرقمة، يتجاوز الترقيم التلقائي ويبدأ من الرقم المحدد",
                values: [
                    { value: "1", description: "يحدد رقم العنصر في القائمة" },
                    { value: "2", description: "يحدد رقم العنصر في القائمة" },
                    { value: "3", description: "يحدد رقم العنصر في القائمة" },
                    { value: "4", description: "يحدد رقم العنصر في القائمة" },
                    { value: "5", description: "يحدد رقم العنصر في القائمة" },
                    { value: "6", description: "يحدد رقم العنصر في القائمة" },
                    { value: "7", description: "يحدد رقم العنصر في القائمة" },
                    { value: "8", description: "يحدد رقم العنصر في القائمة" },
                    { value: "9", description: "يحدد رقم العنصر في القائمة" },
                    { value: "10", description: "يحدد رقم العنصر في القائمة" }
                ],
                freeInput: true
            },
            {
                name: "type",
                description: "خاصية قديمة كانت تحدد شكل الترقيم لهذا العنصر تحديداً بدل القائمة كاملة، استُبدلت بـ CSS",
                values: [
                    { value: "1", description: "ترقيم بأرقام عربية" },
                    { value: "A", description: "ترقيم بحروف إنجليزية كبيرة" },
                    { value: "a", description: "ترقيم بحروف إنجليزية صغيرة" },
                    { value: "I", description: "ترقيم بأرقام رومانية كبيرة" },
                    { value: "i", description: "ترقيم بأرقام رومانية صغيرة" }
                ]
            }
        ]
    },

    // -------- dl --------
    {
        tag: "dl",
        description: "ينشئ قائمة تعريفات تحتوي على مصطلحات وتعريفاتها، تستخدم للقاموس، قائمة المصطلحات، أو الأسئلة الشائعة",
        attributes: []
    },

    // -------- dt --------
    {
        tag: "dt",
        description: "يحدد المصطلح أو الاسم في قائمة التعريفات، يظهر قبل التعريف ويمثل الكلمة أو المفهوم المراد شرحه",
        attributes: []
    },

    // -------- dd --------
    {
        tag: "dd",
        description: "يحتوي تعريف أو شرح المصطلح الذي يسبقه في قائمة التعريفات، يوضح معنى المصطلح أو يقدم تفاصيل عنه",
        attributes: []
    },

    // -------- menu --------
    {
        tag: "menu",
        description: "يعرض قائمة من الأوامر أو الخيارات التفاعلية، مشابه للقائمة النقطية لكن يستخدم للأزرار والأوامر التفاعلية",
        attributes: []
    },

    // -------- address --------
    {
        tag: "address",
        description: "يعرض معلومات التواصل الخاصة بصاحب الصفحة أو المقال، مثل البريد أو العنوان أو رقم الهاتف، يظهر عادة بخط مائل",
        attributes: []
    },

    // -------- div --------
    {
        tag: "div",
        description: "حاوية عامة لا تحمل معنى دلالياً، تستخدم لتجميع عناصر أخرى معاً لتنسيقها بـ CSS أو التحكم بها عبر جافاسكريبت",
        attributes: []
    },

    // -------- figure --------
    {
        tag: "figure",
        description: "يجمع محتوى مستقلاً مثل صورة أو رسم بياني أو كود مع شرحه، يظل مفهوماً حتى لو نُقل لمكان آخر في الصفحة أو المستند",
        attributes: []
    },

    // -------- figcaption --------
    {
        tag: "figcaption",
        description: "يعرض تسمية توضيحية أو شرحاً لمحتوى عنصر figure الذي يحتويه، يظهر عادة أعلى أو أسفل الصورة أو الرسم",
        attributes: []
    },

    // ============================================================
    // عناصر التنسيق ضمن السطر (Inline Text Formatting)
    // ============================================================

    // -------- a --------
    {
        tag: "a",
        description: "ينشئ رابطاً تشعبياً، عند النقر عليه ينتقل المستخدم إلى صفحة أخرى أو موقع خارجي أو جزء معين من الصفحة الحالية",
        attributes: [
            {
                name: "href",
                description: "يحدد وجهة الرابط، عند النقر ينتقل المستخدم إلى هذه الوجهة (صفحة، موقع، بريد، هاتف)",
                values: [
                    { value: "https://example.com", description: "ينتقل إلى موقع خارجي" },
                    { value: "https://example.com/page", description: "ينتقل إلى صفحة خارجية" },
                    { value: "https://www.google.com", description: "ينتقل إلى موقع جوجل" },
                    { value: "https://www.youtube.com", description: "ينتقل إلى موقع يوتيوب" },
                    { value: "https://github.com", description: "ينتقل إلى موقع جيت هاب" },
                    { value: "/about", description: "ينتقل إلى صفحة داخل الموقع" },
                    { value: "/contact", description: "ينتقل إلى صفحة الاتصال" },
                    { value: "/products", description: "ينتقل إلى صفحة المنتجات" },
                    { value: "/services", description: "ينتقل إلى صفحة الخدمات" },
                    { value: "/blog", description: "ينتقل إلى صفحة المدونة" },
                    { value: "#section", description: "ينتقل إلى جزء معين في نفس الصفحة" },
                    { value: "#top", description: "ينتقل إلى أعلى الصفحة" },
                    { value: "#footer", description: "ينتقل إلى أسفل الصفحة" },
                    { value: "#content", description: "ينتقل إلى محتوى الصفحة" },
                    { value: "mailto:email@example.com", description: "يفتح برنامج البريد لإرسال رسالة" },
                    { value: "mailto:info@example.com", description: "يفتح برنامج البريد" },
                    { value: "mailto:support@example.com", description: "يفتح برنامج البريد للدعم" },
                    { value: "tel:+123456789", description: "يفتح تطبيق الاتصال لطلب رقم" },
                    { value: "tel:+1234567890", description: "يفتح تطبيق الاتصال" },
                    { value: "tel:0123456789", description: "يفتح تطبيق الاتصال" }
                ],
                freeInput: true
            },
            {
                name: "target",
                description: "يحدد كيف وأين يفتح الرابط، يتحكم في فتح الرابط في نفس النافذة أو نافذة جديدة أو إطار آخر",
                values: [
                    { value: "_blank", description: "يفتح الرابط في تبويب أو نافذة جديدة" },
                    { value: "_self", description: "يفتح الرابط في نفس النافذة (الافتراضي)" },
                    { value: "_parent", description: "يفتح الرابط في الإطار الأب (إذا كانت الصفحة داخل إطار)" },
                    { value: "_top", description: "يفتح الرابط في أعلى النافذة (يكسر الإطارات)" }
                ]
            },
            {
                name: "download",
                description: "يجبر المتصفح على تحميل الملف بدلاً من فتحه، مفيد للروابط التي تؤدي لملفات PDF أو صور أو مستندات",
                values: [
                    { value: "filename.pdf", description: "يحمل الملف بهذا الاسم" },
                    { value: "file.pdf", description: "يحمل الملف بهذا الاسم" },
                    { value: "document.pdf", description: "يحمل الملف بهذا الاسم" },
                    { value: "image.jpg", description: "يحمل الملف بهذا الاسم" },
                    { value: "file.png", description: "يحمل الملف بهذا الاسم" },
                    { value: "archive.zip", description: "يحمل الملف بهذا الاسم" },
                    { value: "", description: "يحمل الملف بالاسم الأصلي (يكتب بدون قيمة)" }
                ],
                freeInput: true
            },
            {
                name: "rel",
                description: "يحدد علاقة الرابط بالصفحة الحالية، يساعد محركات البحث والمتصفحات في فهم طبيعة الرابط",
                values: [
                    { value: "nofollow", description: "يأمر محركات البحث بعدم متابعة الرابط" },
                    { value: "noopener", description: "يمنع الصفحة الجديدة من التحكم بالصفحة الحالية" },
                    { value: "noreferrer", description: "يمنع إرسال معلومات المصدر للموقع الآخر" },
                    { value: "external", description: "يشير إلى أن الرابط لموقع خارجي" },
                    { value: "nofollow noopener", description: "يمنع متابعة الرابط ويمنع التحكم بالصفحة" },
                    { value: "nofollow noreferrer", description: "يمنع متابعة الرابط ويمنع إرسال المعلومات" },
                    { value: "noopener noreferrer", description: "يمنع التحكم بالصفحة ويمنع إرسال المعلومات" }
                ]
            }
        ]
    },

    // -------- span --------
    {
        tag: "span",
        description: "حاوية نصية عامة تستخدم لتنسيق جزء صغير من النص أو مجموعة من الأحرف دون تغيير في تدفق النص",
        attributes: []
    },

    // -------- strong --------
    {
        tag: "strong",
        description: "يعطي أهمية قوية للنص، يظهر بخط عريض، يستخدم للتأكيد على كلمات مهمة في الجملة أو تحذير المستخدم",
        attributes: []
    },

    // -------- em --------
    {
        tag: "em",
        description: "يعطي تشديداً نطقياً للنص، يظهر عادة مائلاً، يستخدم للتأكيد العاطفي أو تغيير نبرة القراءة",
        attributes: []
    },

    // -------- b --------
    {
        tag: "b",
        description: "يعرض نصاً بخط عريض دون إعطائه أهمية إضافية، يستخدم للأغراض الجمالية أو تمييز الكلمات المفتاحية",
        attributes: []
    },

    // -------- i --------
    {
        tag: "i",
        description: "يعرض نصاً مائلاً دون إعطائه أهمية إضافية، يستخدم للمصطلحات التقنية أو الأفكار أو الكلمات بلغة مختلفة",
        attributes: []
    },

    // -------- u --------
    {
        tag: "u",
        description: "يعرض نصاً بخط تحته، يستخدم للإشارة إلى الأخطاء الإملائية أو النصوص التي تحتاج تمييز دون أن تكون روابط",
        attributes: []
    },

    // -------- s --------
    {
        tag: "s",
        description: "يعرض نصاً مشطوباً للإشارة إلى أن النص لم يعد صحيحاً أو أنه ملغي أو قديم، مثل الأسعار المخفضة",
        attributes: []
    },

    // -------- ins --------
    {
        tag: "ins",
        description: "يعرض نصاً مضافاً حديثاً بخط تحته، يستخدم لتوضيح التعديلات والإضافات على مستند سبق نشره",
        attributes: [
            {
                name: "cite",
                description: "يضيف رابطاً لصفحة تشرح سبب هذا التعديل أو الإضافة",
                values: [
                    { value: "https://example.com/changelog", description: "رابط يوضح سبب الإضافة" },
                    { value: "https://example.com/update", description: "رابط يوضح التحديث" },
                    { value: "https://example.com/revision", description: "رابط يوضح المراجعة" }
                ],
                freeInput: true
            },
            {
                name: "datetime",
                description: "يحدد تاريخ ووقت إجراء هذا التعديل بصيغة قياسية",
                values: [
                    { value: "2026-07-26", description: "تاريخ الإضافة" },
                    { value: "2026-07-27", description: "تاريخ الإضافة" },
                    { value: "2026-07-28", description: "تاريخ الإضافة" },
                    { value: "2026-07-26T10:30", description: "تاريخ ووقت الإضافة" },
                    { value: "2026-07-26T14:30", description: "تاريخ ووقت الإضافة" },
                    { value: "2026-07-26T18:00", description: "تاريخ ووقت الإضافة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- del --------
    {
        tag: "del",
        description: "يعرض نصاً محذوفاً بخط مشطوب عليه، يستخدم لتوضيح التعديلات التي أُزيلت من مستند سبق نشره دون إخفائها تماماً",
        attributes: [
            {
                name: "cite",
                description: "يضيف رابطاً لصفحة تشرح سبب هذا الحذف",
                values: [
                    { value: "https://example.com/changelog", description: "رابط يوضح سبب الحذف" },
                    { value: "https://example.com/update", description: "رابط يوضح التحديث" },
                    { value: "https://example.com/revision", description: "رابط يوضح المراجعة" }
                ],
                freeInput: true
            },
            {
                name: "datetime",
                description: "يحدد تاريخ ووقت إجراء هذا الحذف بصيغة قياسية",
                values: [
                    { value: "2026-07-26", description: "تاريخ الحذف" },
                    { value: "2026-07-27", description: "تاريخ الحذف" },
                    { value: "2026-07-28", description: "تاريخ الحذف" },
                    { value: "2026-07-26T10:30", description: "تاريخ ووقت الحذف" },
                    { value: "2026-07-26T14:30", description: "تاريخ ووقت الحذف" },
                    { value: "2026-07-26T18:00", description: "تاريخ ووقت الحذف" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- small --------
    {
        tag: "small",
        description: "يعرض نصاً بحجم صغير، يستخدم للتعليقات الجانبية، حقوق النشر، أو التفاصيل القانونية الثانوية",
        attributes: []
    },

    // -------- mark --------
    {
        tag: "mark",
        description: "يظلل النص بلون خلفية مختلف، يستخدم لتمييز الكلمات المفتاحية أو نتائج البحث أو النص المهم",
        attributes: []
    },

    // -------- abbr --------
    {
        tag: "abbr",
        description: "يمثل اختصاراً لكلمة أو عبارة، عند تمرير الماوس فوقه يظهر الشرح الكامل كتلميح لفهم الاختصار",
        attributes: [
            {
                name: "title",
                description: "يعرض الشرح الكامل للاختصار عند تمرير الماوس، يساعد المستخدم في فهم معنى الاختصار",
                values: [
                    { value: "منظمة الصحة العالمية", description: "شرح اختصار WHO" },
                    { value: "الصفحة الرئيسية", description: "شرح اختصار Home" },
                    { value: "الأمم المتحدة", description: "شرح اختصار UN" },
                    { value: "أسئلة شائعة", description: "شرح اختصار FAQ" },
                    { value: "يرجى الرد", description: "شرح اختصار RSVP" },
                    { value: "على سبيل المثال", description: "شرح اختصار e.g." },
                    { value: "أي", description: "شرح اختصار i.e." },
                    { value: "ملاحظة", description: "شرح اختصار NB" },
                    { value: "وما إلى ذلك", description: "شرح اختصار etc." },
                    { value: "بعد الميلاد", description: "شرح اختصار AD" },
                    { value: "قبل الميلاد", description: "شرح اختصار BC" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- code --------
    {
        tag: "code",
        description: "يعرض النص بخط خاص يشبه الأكواد البرمجية، يستخدم لعرض أجزاء من الكود داخل النص العادي دون تنفيذها",
        attributes: []
    },

    // -------- kbd --------
    {
        tag: "kbd",
        description: "يعرض النص بشكل يمثل مفتاحاً من لوحة المفاتيح، يستخدم لتعليم المستخدم الاختصارات أو الأزرار التي يجب ضغطها",
        attributes: []
    },

    // -------- samp --------
    {
        tag: "samp",
        description: "يعرض مخرجات من برنامج حاسوبي أو نظام، يستخدم لعرض نتائج الأكواد أو رسائل الخطأ أو مخرجات البرامج",
        attributes: []
    },

    // -------- var --------
    {
        tag: "var",
        description: "يمثل اسم متغير في تعبير رياضي أو برمجي، يستخدم في الشروحات التقنية والعلمية للدلالة على متغير",
        attributes: []
    },

    // -------- cite --------
    {
        tag: "cite",
        description: "يشير إلى عنوان عمل تم الاستشهاد به مثل كتاب، مقالة، فيلم، أو أغنية، يعرض عادة بخط مائل",
        attributes: []
    },

    // -------- dfn --------
    {
        tag: "dfn",
        description: "يحدد المصطلح الذي يتم تعريفه لأول مرة في النص، يساعد في توضيح المصطلحات الجديدة للقارئ",
        attributes: []
    },

    // -------- q --------
    {
        tag: "q",
        description: "يعرض اقتباساً قصيراً ضمن النص، يضيف المتصفح علامات تنصيص تلقائياً حول النص المقتبس",
        attributes: [
            {
                name: "cite",
                description: "يضيف رابطاً لمصدر الاقتباس القصير، يساعد في توثيق المصدر والرجوع إليه",
                values: [
                    { value: "https://example.com/source", description: "رابط المصدر" },
                    { value: "https://example.com/book", description: "رابط كتاب" },
                    { value: "https://example.com/article", description: "رابط مقالة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- sub --------
    {
        tag: "sub",
        description: "يعرض النص منخفضاً (سفلياً) عن الخط العادي، يستخدم في المعادلات الكيميائية (H₂O) والأسس السفلية",
        attributes: []
    },

    // -------- sup --------
    {
        tag: "sup",
        description: "يعرض النص مرتفعاً (علوياً) عن الخط العادي، يستخدم في المعادلات الرياضية (x²) والعلامات الترتيبية",
        attributes: []
    },

    // -------- time --------
    {
        tag: "time",
        description: "يعرض تاريخاً أو وقتاً بصيغة يمكن قراءتها آلياً، يساعد محركات البحث والتطبيقات في فهم الوقت والتاريخ",
        attributes: [
            {
                name: "datetime",
                description: "يحدد التاريخ والوقت بصيغة قياسية (YYYY-MM-DD)، حتى لو ظهر النص بشكل مختلف للمستخدم",
                values: [
                    { value: "2026-07-26", description: "تاريخ اليوم" },
                    { value: "2026-07-27", description: "تاريخ" },
                    { value: "2026-07-28", description: "تاريخ" },
                    { value: "2026-07-29", description: "تاريخ" },
                    { value: "2026-07-30", description: "تاريخ" },
                    { value: "2026-07-31", description: "تاريخ" },
                    { value: "2026-08-01", description: "تاريخ" },
                    { value: "2026-12-31", description: "تاريخ" },
                    { value: "2027-01-01", description: "تاريخ" },
                    { value: "2026-07-26T10:30", description: "تاريخ ووقت محدد" },
                    { value: "2026-07-26T14:30", description: "تاريخ ووقت محدد" },
                    { value: "2026-07-26T18:00", description: "تاريخ ووقت محدد" },
                    { value: "2026-07-26T20:00", description: "تاريخ ووقت محدد" },
                    { value: "2026-07-26T22:30", description: "تاريخ ووقت محدد" },
                    { value: "2026-07", description: "شهر وسنة فقط" },
                    { value: "2026-08", description: "شهر وسنة فقط" },
                    { value: "2026-12", description: "شهر وسنة فقط" },
                    { value: "2027-01", description: "شهر وسنة فقط" },
                    { value: "2026", description: "سنة فقط" },
                    { value: "2027", description: "سنة فقط" },
                    { value: "PT2H30M", description: "مدة زمنية (ساعتان ونصف)، تستخدم لعرض مدة فيديو أو زمن تحضير وصفة" },
                    { value: "PT1H", description: "مدة زمنية (ساعة واحدة)" },
                    { value: "PT30M", description: "مدة زمنية (نصف ساعة)" },
                    { value: "PT1H15M", description: "مدة زمنية (ساعة وربع)" },
                    { value: "PT3H", description: "مدة زمنية (3 ساعات)" },
                    { value: "PT45M", description: "مدة زمنية (45 دقيقة)" },
                    { value: "20:00", description: "وقت فقط بدون تاريخ (الساعة 8 مساءً)" },
                    { value: "08:00", description: "وقت فقط بدون تاريخ (الساعة 8 صباحاً)" },
                    { value: "12:00", description: "وقت فقط بدون تاريخ (الساعة 12)" },
                    { value: "18:30", description: "وقت فقط بدون تاريخ" },
                    { value: "2026-07-26T10:30+03:00", description: "تاريخ ووقت مع منطقة زمنية" },
                    { value: "2026-07-26T10:30Z", description: "تاريخ ووقت بتوقيت UTC" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- data --------
    {
        tag: "data",
        description: "يربط قيمة رقمية أو بيانات قابلة للقراءة آلياً بنص معروض، يستخدم للتطبيقات التي تحتاج معالجة آلية للبيانات",
        attributes: [
            {
                name: "value",
                description: "القيمة الرقمية أو البيانات التي ستعالج آلياً، تخفي خلف النص المعروض للمستخدم",
                values: [
                    { value: "0", description: "قيمة رقمية" },
                    { value: "1", description: "قيمة رقمية" },
                    { value: "2", description: "قيمة رقمية" },
                    { value: "3", description: "قيمة رقمية" },
                    { value: "4", description: "قيمة رقمية" },
                    { value: "5", description: "قيمة رقمية" },
                    { value: "10", description: "قيمة رقمية" },
                    { value: "20", description: "قيمة رقمية" },
                    { value: "50", description: "قيمة رقمية" },
                    { value: "100", description: "قيمة رقمية" },
                    { value: "123", description: "قيمة رقمية لمنتج" },
                    { value: "456", description: "قيمة رقمية لمنتج" },
                    { value: "789", description: "قيمة رقمية لمنتج" },
                    { value: "5.99", description: "سعر منتج" },
                    { value: "9.99", description: "سعر منتج" },
                    { value: "19.99", description: "سعر منتج" },
                    { value: "29.99", description: "سعر منتج" },
                    { value: "49.99", description: "سعر منتج" },
                    { value: "99.99", description: "سعر منتج" },
                    { value: "2026", description: "سنة معينة" },
                    { value: "2027", description: "سنة معينة" },
                    { value: "2028", description: "سنة معينة" },
                    { value: "true", description: "قيمة منطقية صحيحة" },
                    { value: "false", description: "قيمة منطقية خاطئة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- bdi --------
    {
        tag: "bdi",
        description: "يعزل جزءاً من النص اتجاه كتابته (يمين لليسار أو يسار لليمين) عن النص المحيط، يمنع تشوش النصوص متعددة الاتجاهات",
        attributes: []
    },

    // -------- bdo --------
    {
        tag: "bdo",
        description: "يفرض اتجاه كتابة محدد على النص بغض النظر عن الاتجاه الافتراضي، يستخدم للنصوص متعددة الاتجاهات",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص الذي سيفرضه المتصفح، إما من اليمين لليسار أو من اليسار لليمين",
                values: [
                    { value: "rtl", description: "يفرض اتجاه النص من اليمين إلى اليسار (للغة العربية والعبرية)" },
                    { value: "ltr", description: "يفرض اتجاه النص من اليسار إلى اليمين (للغة الإنجليزية)" }
                ]
            }
        ]
    },

    // -------- br --------
    {
        tag: "br",
        description: "ينشئ فاصل سطر داخل النص، يبدأ السطر التالي من سطر جديد دون بدء فقرة جديدة، يستخدم للعناوين أو القصائد",
        attributes: [
            {
                name: "clear",
                description: "خاصية قديمة كانت تجبر السطر الجديد على النزول أسفل أي عنصر عائم (float) بدل الالتفاف حوله، استُبدلت بخاصية clear في CSS",
                values: [
                    { value: "left", description: "ينزل تحت أي عنصر عائم لليسار" },
                    { value: "right", description: "ينزل تحت أي عنصر عائم لليمين" },
                    { value: "all", description: "ينزل تحت جميع العناصر العائمة من الجهتين" },
                    { value: "none", description: "لا يتأثر بالعناصر العائمة (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- wbr --------
    {
        tag: "wbr",
        description: "يحدد نقطة يمكن للمتصفح كسر السطر عندها إذا احتاج الأمر، يستخدم للكلمات الطويلة أو الروابط الطويلة",
        attributes: []
    },

    // ============================================================
    // عناصر قديمة ومهجورة (Obsolete / Deprecated) - للتوثيق فقط
    // ============================================================

    // -------- font --------
    {
        tag: "font",
        description: "خاصية قديمة كانت تتحكم بلون وحجم وخط النص مباشرة داخل HTML، مهجورة تماماً واستُبدلت بـ CSS، لا يجب استخدامها في مشاريع جديدة",
        attributes: [
            {
                name: "color",
                description: "كان يحدد لون النص، استُبدل بخاصية color في CSS",
                values: [
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" },
                    { value: "#ff00ff", description: "لون وردي" },
                    { value: "#00ffff", description: "لون سماوي" },
                    { value: "#cccccc", description: "لون رمادي" },
                    { value: "#999999", description: "لون رمادي متوسط" },
                    { value: "#666666", description: "لون رمادي داكن" },
                    { value: "#333333", description: "لون رمادي غامق" },
                    { value: "#ff6347", description: "لون طماطم" },
                    { value: "#ffa500", description: "لون برتقالي" },
                    { value: "#ffffe0", description: "لون كريمي" },
                    { value: "#f5f5dc", description: "لون بيج" },
                    { value: "#d2b48c", description: "لون بني فاتح" },
                    { value: "#8b4513", description: "لون بني داكن" },
                    { value: "#000080", description: "لون أزرق بحري" },
                    { value: "#008000", description: "لون أخضر غامق" },
                    { value: "#800000", description: "لون كستنائي" },
                    { value: "#808000", description: "لون زيتوني" },
                    { value: "#800080", description: "لون بنفسجي" },
                    { value: "#008080", description: "لون تيل" },
                    { value: "#c0c0c0", description: "لون فضي" },
                    { value: "#ffd700", description: "لون ذهبي" },
                    { value: "#ff69b4", description: "لون وردي ساخن" },
                    { value: "#ff1493", description: "لون وردي غامق" },
                    { value: "#4b0082", description: "لون نيلي" },
                    { value: "red", description: "لون أحمر" },
                    { value: "green", description: "لون أخضر" },
                    { value: "blue", description: "لون أزرق" },
                    { value: "yellow", description: "لون أصفر" },
                    { value: "purple", description: "لون بنفسجي" },
                    { value: "orange", description: "لون برتقالي" },
                    { value: "pink", description: "لون وردي" },
                    { value: "cyan", description: "لون سماوي" },
                    { value: "magenta", description: "لون أرجواني" },
                    { value: "lime", description: "لون ليموني" },
                    { value: "maroon", description: "لون كستنائي" },
                    { value: "navy", description: "لون أزرق بحري" },
                    { value: "olive", description: "لون زيتوني" },
                    { value: "teal", description: "لون تيل" },
                    { value: "aqua", description: "لون أزرق مائي" },
                    { value: "fuchsia", description: "لون فوشيا" },
                    { value: "silver", description: "لون فضي" },
                    { value: "gold", description: "لون ذهبي" }
                ],
                freeInput: true
            },
            {
                name: "face",
                description: "كان يحدد نوع الخط المستخدم، استُبدل بخاصية font-family في CSS",
                values: [
                    { value: "Arial", description: "خط أريال" },
                    { value: "Tahoma", description: "خط تاهوما" },
                    { value: "Verdana", description: "خط فيردانا" },
                    { value: "Times New Roman", description: "خط تايمز نيو رومان" },
                    { value: "Georgia", description: "خط جورجيا" },
                    { value: "Courier New", description: "خط كورير نيو" },
                    { value: "Comic Sans MS", description: "خط كوميك سانس" },
                    { value: "Impact", description: "خط إمباكت" },
                    { value: "Arial Black", description: "خط أريال بلاك" },
                    { value: "Helvetica", description: "خط هلفتيكا" },
                    { value: "Geneva", description: "خط جنيف" },
                    { value: "Verdana, Arial, sans-serif", description: "خطوط متعددة" }
                ],
                freeInput: true
            },
            {
                name: "size",
                description: "كان يحدد حجم الخط برقم من 1 إلى 7، استُبدل بخاصية font-size في CSS",
                values: [
                    { value: "1", description: "أصغر حجم" },
                    { value: "2", description: "صغير جداً" },
                    { value: "3", description: "صغير" },
                    { value: "4", description: "متوسط" },
                    { value: "5", description: "كبير" },
                    { value: "6", description: "كبير جداً" },
                    { value: "7", description: "أكبر حجم" },
                    { value: "+1", description: "زيادة حجم واحد عن الحجم الحالي" },
                    { value: "+2", description: "زيادة حجمين عن الحجم الحالي" },
                    { value: "-1", description: "نقصان حجم واحد عن الحجم الحالي" },
                    { value: "-2", description: "نقصان حجمين عن الحجم الحالي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- center --------
    {
        tag: "center",
        description: "خاصية قديمة كانت توسّط محتواها أفقياً تلقائياً، مهجورة تماماً واستُبدلت بخاصية text-align أو margin:auto في CSS",
        attributes: []
    },

    // -------- acronym --------
    {
        tag: "acronym",
        description: "خاصية قديمة كانت تمثل اختصاراً منطوقاً ككلمة واحدة (مثل NASA)، مهجورة واستُبدلت بعنصر abbr الذي يغطي جميع أنواع الاختصارات",
        attributes: [
            {
                name: "title",
                description: "كان يعرض الشرح الكامل للاختصار عند تمرير الماوس",
                values: [
                    { value: "الإدارة الوطنية للملاحة الجوية والفضاء", description: "شرح اختصار NASA" },
                    { value: "الرابطة الوطنية لكرة السلة", description: "شرح اختصار NBA" },
                    { value: "رادار تحديد المواقع", description: "شرح اختصار RADAR" },
                    { value: "صندوق النقد الدولي", description: "شرح اختصار IMF" },
                    { value: "منظمة حلف شمال الأطلسي", description: "شرح اختصار NATO" },
                    { value: "المنظمة الدولية للطاقة الذرية", description: "شرح اختصار IAEA" },
                    { value: "الشرطة الدولية", description: "شرح اختصار Interpol" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- big --------
    {
        tag: "big",
        description: "خاصية قديمة كانت تكبر حجم خط النص درجة واحدة عن النص المحيط، مهجورة تماماً واستُبدلت بخاصية font-size في CSS",
        attributes: []
    },

    // -------- tt --------
    {
        tag: "tt",
        description: "خاصية قديمة كانت تعرض النص بخط أحادي التباعد يشبه الآلة الكاتبة، مهجورة واستُبدلت بعنصر code أو خاصية font-family:monospace في CSS",
        attributes: []
    },

    // -------- strike --------
    {
        tag: "strike",
        description: "خاصية قديمة كانت تعرض النص مشطوباً، مهجورة تماماً واستُبدلت بعنصر s أو del حسب المعنى المقصود",
        attributes: []
    },

    // -------- marquee --------
    {
        tag: "marquee",
        description: "عنصر قديم غير معياري كان يجعل النص أو المحتوى يتحرك تلقائياً (يمرّ، يرتد، ينزلق) عبر الشاشة، مهجور تماماً ولا يجب استخدامه، الأنيميشن الحديث يتم عبر CSS أو JavaScript",
        attributes: [
            {
                name: "behavior",
                description: "كان يحدد نمط حركة المحتوى",
                values: [
                    { value: "scroll", description: "يمرر المحتوى بشكل متواصل من جهة لأخرى" },
                    { value: "slide", description: "ينزلق المحتوى مرة واحدة ثم يتوقف عند الحافة" },
                    { value: "alternate", description: "يرتد المحتوى ذهاباً وإياباً بين الحافتين" }
                ]
            },
            {
                name: "direction",
                description: "كان يحدد اتجاه حركة المحتوى",
                values: [
                    { value: "left", description: "يتحرك المحتوى نحو اليسار" },
                    { value: "right", description: "يتحرك المحتوى نحو اليمين" },
                    { value: "up", description: "يتحرك المحتوى نحو الأعلى" },
                    { value: "down", description: "يتحرك المحتوى نحو الأسفل" }
                ]
            },
            {
                name: "scrollamount",
                description: "كان يحدد سرعة الحركة، كلما زاد الرقم زادت السرعة",
                values: [
                    { value: "1", description: "حركة بطيئة جداً" },
                    { value: "2", description: "حركة بطيئة" },
                    { value: "3", description: "حركة بطيئة" },
                    { value: "4", description: "حركة متوسطة" },
                    { value: "5", description: "حركة متوسطة" },
                    { value: "6", description: "السرعة الافتراضية" },
                    { value: "7", description: "حركة سريعة" },
                    { value: "8", description: "حركة سريعة" },
                    { value: "9", description: "حركة سريعة" },
                    { value: "10", description: "حركة سريعة جداً" },
                    { value: "12", description: "حركة سريعة جداً" },
                    { value: "15", description: "حركة سريعة" },
                    { value: "20", description: "حركة سريعة جداً جداً" }
                ],
                freeInput: true
            },
            {
                name: "loop",
                description: "كان يحدد عدد مرات تكرار الحركة",
                values: [
                    { value: "-1", description: "يكرر الحركة إلى ما لا نهاية (الافتراضي)" },
                    { value: "0", description: "يكرر الحركة إلى ما لا نهاية" },
                    { value: "1", description: "يكرر الحركة مرة واحدة فقط" },
                    { value: "2", description: "يكرر الحركة مرتين فقط" },
                    { value: "3", description: "يكرر الحركة 3 مرات فقط ثم يتوقف" },
                    { value: "4", description: "يكرر الحركة 4 مرات فقط" },
                    { value: "5", description: "يكرر الحركة 5 مرات فقط" },
                    { value: "10", description: "يكرر الحركة 10 مرات فقط" }
                ],
                freeInput: true
            },
            {
                name: "scrolldelay",
                description: "كان يحدد التأخير بالمللي ثانية بين كل حركة وأخرى",
                values: [
                    { value: "60", description: "تأخير 60 مللي ثانية (الافتراضي)" },
                    { value: "85", description: "تأخير 85 مللي ثانية" },
                    { value: "100", description: "تأخير 100 مللي ثانية" },
                    { value: "200", description: "تأخير 200 مللي ثانية" },
                    { value: "500", description: "تأخير 500 مللي ثانية" },
                    { value: "1000", description: "تأخير 1000 مللي ثانية (ثانية واحدة)" },
                    { value: "2000", description: "تأخير 2000 مللي ثانية (ثانيتين)" }
                ],
                freeInput: true
            },
            {
                name: "bgcolor",
                description: "كان يحدد لون خلفية الماركي",
                values: [
                    { value: "#ffffff", description: "لون أبيض" },
                    { value: "#000000", description: "لون أسود" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#00ff00", description: "لون أخضر" },
                    { value: "#0000ff", description: "لون أزرق" },
                    { value: "#ffff00", description: "لون أصفر" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "كان يحدد ارتفاع الماركي بالبكسل أو النسبة المئوية",
                values: [
                    { value: "auto", description: "ارتفاع تلقائي" },
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "200", description: "ارتفاع 200 بكسل" },
                    { value: "300", description: "ارتفاع 300 بكسل" },
                    { value: "50%", description: "نصف ارتفاع الحاوية" },
                    { value: "100%", description: "ارتفاع كامل الحاوية" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "كان يحدد عرض الماركي بالبكسل أو النسبة المئوية",
                values: [
                    { value: "auto", description: "عرض تلقائي" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "50%", description: "نصف عرض الحاوية" },
                    { value: "75%", description: "ثلاثة أرباع عرض الحاوية" },
                    { value: "100%", description: "عرض كامل الحاوية" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- blink --------
    {
        tag: "blink",
        description: "عنصر قديم غير معياري كان يجعل النص يومض (يظهر ويختفي بشكل متكرر)، لم يدعمه سوى متصفح فايرفوكس قديماً، مهجور تماماً ومزعج لتجربة المستخدم، لا يجب استخدامه إطلاقاً",
        attributes: []
    },

    // -------- ruby --------
    {
        tag: "ruby",
        description: "يعرض تعليقاً توضيحياً صغيراً فوق النص (أو بجانبه)، شائع في النصوص اليابانية والصينية لشرح طريقة النطق",
        attributes: []
    },

    // -------- rt --------
    {
        tag: "rt",
        description: "يعرض شرح النطق أو التفسير فوق النص داخل عنصر ruby، يوضح كيفية قراءة الكلمة أو نطقها",
        attributes: []
    },

    // -------- rp --------
    {
        tag: "rp",
        description: "يعرض أقواساً احتياطية حول شرح النطق للمتصفحات التي لا تدعم عنصر ruby، يمنع ظهور النص بشكل غير مفهوم",
        attributes: []
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.textData = textData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = textData;
}