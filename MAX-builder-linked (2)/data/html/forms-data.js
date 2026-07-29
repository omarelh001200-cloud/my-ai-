// ============================================================
// forms-data.js
// عناصر النماذج وحقول الإدخال
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const formsData = [
    // ============================================================
    // عناصر النماذج الأساسية
    // ============================================================

    // -------- form --------
    {
        tag: "form",
        description: "يحتوي على مجموعة من عناصر الإدخال لجمع بيانات المستخدم وإرسالها إلى الخادم للمعالجة",
        attributes: [
            {
                name: "action",
                description: "يحدد عنوان URL الذي سترسل إليه بيانات النموذج عند الضغط على زر الإرسال",
                values: [
                    { value: "/submit", description: "يرسل البيانات إلى صفحة داخل الموقع" },
                    { value: "/api/register", description: "يرسل البيانات إلى API داخل الموقع" },
                    { value: "https://example.com/api", description: "يرسل البيانات إلى موقع خارجي" },
                    { value: "https://example.com/process", description: "يرسل البيانات لمعالجتها خارجياً" },
                    { value: "#", description: "يرسل البيانات إلى نفس الصفحة" },
                    { value: "", description: "يرسل البيانات إلى نفس الصفحة (افتراضي)" }
                ],
                freeInput: true
            },
            {
                name: "method",
                description: "يحدد طريقة إرسال البيانات إلى الخادم، إما بإظهارها في الرابط (GET) أو إخفائها (POST)",
                values: [
                    { value: "GET", description: "يرسل البيانات في الرابط، يظهرها في شريط العنوان، مناسب للبحث" },
                    { value: "POST", description: "يرسل البيانات مخفية في الخلفية، مناسب للبيانات الحساسة أو الكبيرة" },
                    { value: "PUT", description: "يرسل البيانات لتعديل مورد موجود على الخادم" },
                    { value: "DELETE", description: "يرسل طلب لحذف مورد من الخادم" },
                    { value: "PATCH", description: "يرسل تحديثات جزئية لمورد موجود" },
                    { value: "HEAD", description: "يرسل طلب للحصول على معلومات الرأس فقط" }
                ]
            },
            {
                name: "enctype",
                description: "يحدد كيفية تشفير البيانات قبل إرسالها، مهم عند رفع الملفات",
                values: [
                    { value: "application/x-www-form-urlencoded", description: "التشفير الافتراضي، يرسل البيانات كنص" },
                    { value: "multipart/form-data", description: "يستخدم عند رفع الملفات، يرسل البيانات كأجزاء متعددة" },
                    { value: "text/plain", description: "يرسل البيانات كنص عادي، استخدام نادر" }
                ]
            },
            {
                name: "target",
                description: "يحدد أين يعرض نتيجة إرسال النموذج، مثل نفس النافذة أو نافذة جديدة",
                values: [
                    { value: "_blank", description: "يفتح النتيجة في نافذة أو تبويب جديد" },
                    { value: "_self", description: "يفتح النتيجة في نفس النافذة (الافتراضي)" },
                    { value: "_parent", description: "يفتح النتيجة في الإطار الأب" },
                    { value: "_top", description: "يفتح النتيجة في أعلى النافذة" },
                    { value: "iframeName", description: "يفتح النتيجة في إطار iframe باسم محدد" }
                ]
            },
            {
                name: "novalidate",
                description: "يلغي التحقق من صحة البيانات قبل الإرسال، يسمح بإرسال البيانات حتى لو كانت غير مكتملة",
                values: [
                    { value: "", description: "يلغي التحقق (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "autocomplete",
                description: "يسمح للمتصفح بتذكر البيانات التي أدخلها المستخدم سابقاً وإكمالها تلقائياً",
                values: [
                    { value: "on", description: "يفعّل الإكمال التلقائي للبيانات" },
                    { value: "off", description: "يلغي الإكمال التلقائي، للبيانات الحساسة" }
                ]
            },
            {
                name: "accept-charset",
                description: "يحدد ترميز الأحرف الذي يقبله الخادم عند إرسال بيانات النموذج، يمنع تشوه النصوص غير الإنجليزية",
                values: [
                    { value: "UTF-8", description: "يدعم كل اللغات بما فيها العربية، الترميز الموصى به دائماً" },
                    { value: "ISO-8859-1", description: "يدعم اللغات الأوروبية الغربية، لا يدعم العربية" },
                    { value: "windows-1256", description: "يدعم اللغة العربية" }
                ],
                freeInput: true
            },
            {
                name: "rel",
                description: "يحدد العلاقة بين الصفحة الحالية والوجهة التي سيرسل إليها النموذج، مشابه لخاصية rel في الروابط",
                values: [
                    { value: "nofollow", description: "يأمر محركات البحث بعدم متابعة وجهة الإرسال" },
                    { value: "noopener", description: "يمنع الصفحة الجديدة الناتجة عن الإرسال من التحكم بالصفحة الحالية" },
                    { value: "noreferrer", description: "يمنع إرسال معلومات المصدر مع طلب الإرسال" },
                    { value: "external", description: "يشير إلى أن وجهة الإرسال خارج الموقع" }
                ]
            },
            {
                name: "name",
                description: "يحدد اسماً فريداً للنموذج، يمكن استخدامه للوصول إليه عبر document.forms في جافاسكريبت",
                values: [
                    { value: "loginForm", description: "اسم نموذج تسجيل الدخول" },
                    { value: "contactForm", description: "اسم نموذج التواصل" },
                    { value: "registerForm", description: "اسم نموذج التسجيل" },
                    { value: "searchForm", description: "اسم نموذج البحث" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- input --------
    {
        tag: "input",
        description: "حقل إدخال بيانات يتغير شكله ووظيفته حسب نوعه، يستخدم لجمع النصوص والأرقام والتواريخ والملفات",
        attributes: [
            {
                name: "type",
                description: "يحدد نوع الحقل وشكل إدخال البيانات، يتغير حسب نوع البيانات المطلوبة",
                values: [
                    { value: "text", description: "حقل نص عادي لإدخال الكلمات والجمل" },
                    { value: "password", description: "حقل كلمة مرور، يخفي الأحرف بنقاط للحماية" },
                    { value: "email", description: "حقل بريد إلكتروني، يتحقق من صحة الإيميل" },
                    { value: "number", description: "حقل أرقام، يسمح بإدخال الأرقام فقط" },
                    { value: "tel", description: "حقل رقم هاتف، يفتح لوحة أرقام على الجوال" },
                    { value: "url", description: "حقل رابط، يتحقق من صحة الرابط" },
                    { value: "search", description: "حقل بحث، يظهر زر مسح للنص" },
                    { value: "date", description: "حقل تاريخ، يعرض منتقي تاريخ" },
                    { value: "datetime-local", description: "حقل تاريخ ووقت محلي" },
                    { value: "month", description: "حقل شهر وسنة" },
                    { value: "week", description: "حقل أسبوع وسنة" },
                    { value: "time", description: "حقل وقت" },
                    { value: "color", description: "حقل اختيار لون، يعرض منتقي ألوان" },
                    { value: "range", description: "شريط تمرير لاختيار قيمة من نطاق" },
                    { value: "checkbox", description: "خانة اختيار متعددة، يمكن تحديد أكثر من خيار" },
                    { value: "radio", description: "زر اختيار واحد، يمكن تحديد خيار واحد فقط" },
                    { value: "file", description: "حقل رفع ملفات، يفتح مستكشف الملفات" },
                    { value: "submit", description: "زر إرسال النموذج لإرسال البيانات" },
                    { value: "reset", description: "زر إعادة تعيين النموذج إلى القيم الافتراضية" },
                    { value: "button", description: "زر عادي، لا يفعل شيئاً دون سكريبت" },
                    { value: "image", description: "زر على شكل صورة، يستخدم لإرسال النموذج" },
                    { value: "hidden", description: "حقل مخفي، يخزن بيانات لا يراها المستخدم" }
                ]
            },
            {
                name: "name",
                description: "يحدد اسم الحقل الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
                values: [
                    { value: "username", description: "اسم المستخدم" },
                    { value: "email", description: "البريد الإلكتروني" },
                    { value: "password", description: "كلمة المرور" },
                    { value: "first_name", description: "الاسم الأول" },
                    { value: "last_name", description: "اسم العائلة" },
                    { value: "phone", description: "رقم الهاتف" },
                    { value: "age", description: "العمر" },
                    { value: "address", description: "العنوان" },
                    { value: "city", description: "المدينة" },
                    { value: "country", description: "الدولة" },
                    { value: "gender", description: "الجنس" },
                    { value: "birthdate", description: "تاريخ الميلاد" },
                    { value: "comment", description: "تعليق" },
                    { value: "search", description: "بحث" },
                    { value: "file", description: "ملف" }
                ],
                freeInput: true
            },
            {
                name: "value",
                description: "يحدد القيمة الافتراضية للحقل التي تظهر للمستخدم عند تحميل الصفحة",
                values: [
                    { value: "نص افتراضي", description: "قيمة تظهر في الحقل" },
                    { value: "example@email.com", description: "بريد افتراضي" },
                    { value: "123456", description: "رقم افتراضي" },
                    { value: "2026-07-28", description: "تاريخ افتراضي" }
                ],
                freeInput: true
            },
            {
                name: "placeholder",
                description: "يعرض نصاً تلميحياً داخل الحقل يختفي عند الكتابة، يوضح للمستخدم ما يجب كتابته",
                values: [
                    { value: "اكتب اسمك هنا", description: "نص تلميحي للحقل" },
                    { value: "example@email.com", description: "تلميح للبريد الإلكتروني" },
                    { value: "اختر تاريخاً", description: "تلميح للتاريخ" }
                ],
                freeInput: true
            },
            {
                name: "required",
                description: "يجعل الحقل إلزامياً، يمنع إرسال النموذج إذا كان الحقل فارغاً",
                values: [
                    { value: "", description: "يجعل الحقل إلزامياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "disabled",
                description: "يعطل الحقل ويجعله غير قابل للتفاعل، لا يمكن تغيير قيمته أو النقر عليه",
                values: [
                    { value: "", description: "يعطل الحقل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "readonly",
                description: "يجعل الحقل للقراءة فقط، يمكن رؤية النص ولكن لا يمكن تعديله",
                values: [
                    { value: "", description: "يجعل للقراءة فقط (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "checked",
                description: "يحدد أن خيار checkbox أو radio محدد مسبقاً عند تحميل الصفحة",
                values: [
                    { value: "", description: "يجعل الخيار محدداً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "maxlength",
                description: "يحدد أقصى عدد من الأحرف يمكن إدخالها في الحقل، يمنع إدخال نصوص طويلة",
                values: [
                    { value: "10", description: "حد أقصى 10 أحرف" },
                    { value: "20", description: "حد أقصى 20 حرف" },
                    { value: "50", description: "حد أقصى 50 حرف" },
                    { value: "100", description: "حد أقصى 100 حرف" },
                    { value: "255", description: "حد أقصى 255 حرف" },
                    { value: "500", description: "حد أقصى 500 حرف" }
                ],
                freeInput: true
            },
            {
                name: "minlength",
                description: "يحدد أقل عدد من الأحرف يجب إدخالها، يمنع إرسال النموذج بالنصوص القصيرة جداً",
                values: [
                    { value: "1", description: "حد أدنى حرف واحد" },
                    { value: "2", description: "حد أدنى حرفين" },
                    { value: "3", description: "حد أدنى 3 أحرف" },
                    { value: "6", description: "حد أدنى 6 أحرف" },
                    { value: "8", description: "حد أدنى 8 أحرف" },
                    { value: "10", description: "حد أدنى 10 أحرف" }
                ],
                freeInput: true
            },
            {
                name: "max",
                description: "يحدد القيمة القصوى للأرقام أو التاريخ، يمنع إدخال قيم أكبر من الحد",
                values: [
                    { value: "10", description: "الحد الأقصى 10" },
                    { value: "100", description: "الحد الأقصى 100" },
                    { value: "1000", description: "الحد الأقصى 1000" },
                    { value: "2026-12-31", description: "الحد الأقصى 31 ديسمبر 2026" },
                    { value: "2027-12-31", description: "الحد الأقصى 31 ديسمبر 2027" },
                    { value: "23:59", description: "الحد الأقصى 23:59" },
                    { value: "100%", description: "الحد الأقصى 100%" }
                ],
                freeInput: true
            },
            {
                name: "min",
                description: "يحدد القيمة الدنيا للأرقام أو التاريخ، يمنع إدخال قيم أقل من الحد",
                values: [
                    { value: "0", description: "الحد الأدنى 0" },
                    { value: "1", description: "الحد الأدنى 1" },
                    { value: "18", description: "الحد الأدنى 18" },
                    { value: "2026-01-01", description: "الحد الأدنى 1 يناير 2026" },
                    { value: "2025-01-01", description: "الحد الأدنى 1 يناير 2025" },
                    { value: "00:00", description: "الحد الأدنى 00:00" },
                    { value: "0%", description: "الحد الأدنى 0%" }
                ],
                freeInput: true
            },
            {
                name: "step",
                description: "يحدد الفرق بين القيم المسموحة في الحقل الرقمي، يتحكم في دقة الأرقام",
                values: [
                    { value: "1", description: "زيادة بواحد (أعداد صحيحة)" },
                    { value: "0.1", description: "زيادة بـ 0.1 (رقم عشري)" },
                    { value: "0.5", description: "زيادة بنصف (أرقام عشرية)" },
                    { value: "5", description: "زيادة بـ 5" },
                    { value: "10", description: "زيادة بعشرة" },
                    { value: "100", description: "زيادة بمئة" },
                    { value: "any", description: "أي قيمة (بدون تقييد)" }
                ],
                freeInput: true
            },
            {
                name: "pattern",
                description: "يحدد نمطاً معيناً (Regex) للتحقق من صحة الإدخال، يمنع إرسال بيانات غير مطابقة",
                values: [
                    { value: "[A-Za-z]{3,}", description: "ثلاثة أحرف إنجليزية على الأقل" },
                    { value: "[A-Za-z]+", description: "حرف إنجليزي واحد على الأقل" },
                    { value: "[0-9]{4}", description: "أربعة أرقام بالضبط" },
                    { value: "[0-9]{5}", description: "خمسة أرقام بالضبط (رمز بريدي)" },
                    { value: "[0-9]{10}", description: "عشرة أرقام بالضبط (رقم هاتف)" },
                    { value: "[A-Za-z0-9]+", description: "حروف وأرقام فقط" },
                    { value: "[A-Za-z0-9_]{3,20}", description: "اسم مستخدم صالح" },
                    { value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", description: "بريد إلكتروني" },
                    { value: "^[0-9]{2}/[0-9]{2}/[0-9]{4}$", description: "تاريخ بالتنسيق DD/MM/YYYY" }
                ],
                freeInput: true
            },
            {
                name: "accept",
                description: "يحدد أنواع الملفات المسموح رفعها، يرشح الملفات التي تظهر في مستكشف الملفات",
                values: [
                    { value: "image/*", description: "جميع أنواع الصور" },
                    { value: "image/png", description: "صور PNG فقط" },
                    { value: "image/jpeg", description: "صور JPEG فقط" },
                    { value: "image/png, image/jpeg", description: "صور PNG و JPEG فقط" },
                    { value: "video/*", description: "جميع أنواع الفيديو" },
                    { value: "audio/*", description: "جميع أنواع الصوت" },
                    { value: ".pdf", description: "ملفات PDF فقط" },
                    { value: ".doc,.docx", description: "ملفات Word" },
                    { value: ".xls,.xlsx", description: "ملفات Excel" },
                    { value: ".zip,.rar", description: "ملفات مضغوطة" }
                ],
                freeInput: true
            },
            {
                name: "multiple",
                description: "يسمح باختيار أكثر من قيمة أو رفع أكثر من ملف، يفعّل التحديد المتعدد",
                values: [
                    { value: "", description: "يفعّل التحديد المتعدد (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "autofocus",
                description: "يجعل هذا الحقل هو الأول الذي يحصل على التركيز عند تحميل الصفحة، يوفر على المستخدم النقر",
                values: [
                    { value: "", description: "يركز على الحقل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "autocomplete",
                description: "يسمح للمتصفح بتذكر قيمة هذا الحقل وإكمالها تلقائياً في المرات القادمة",
                values: [
                    { value: "on", description: "يفعّل الإكمال التلقائي" },
                    { value: "off", description: "يلغي الإكمال التلقائي، للبيانات الحساسة" },
                    { value: "username", description: "يقترح اسم مستخدم محفوظ" },
                    { value: "email", description: "يقترح بريداً إلكترونياً محفوظاً" },
                    { value: "name", description: "يقترح اسماً محفوظاً" },
                    { value: "given-name", description: "الاسم الأول" },
                    { value: "family-name", description: "اسم العائلة" },
                    { value: "nickname", description: "الاسم المستعار" },
                    { value: "organization", description: "المنظمة" },
                    { value: "street-address", description: "عنوان الشارع" },
                    { value: "address-line1", description: "سطر العنوان الأول" },
                    { value: "address-line2", description: "سطر العنوان الثاني" },
                    { value: "address-line3", description: "سطر العنوان الثالث" },
                    { value: "postal-code", description: "الرمز البريدي" },
                    { value: "country", description: "الدولة" },
                    { value: "tel", description: "رقم الهاتف" },
                    { value: "tel-country-code", description: "مفتاح الدولة" },
                    { value: "photo", description: "الصورة الشخصية" },
                    { value: "url", description: "الرابط" },
                    { value: "bday", description: "تاريخ الميلاد" },
                    { value: "bday-day", description: "اليوم" },
                    { value: "bday-month", description: "الشهر" },
                    { value: "bday-year", description: "السنة" },
                    { value: "sex", description: "الجنس" },
                    { value: "one-time-code", description: "رمز تحقق لمرة واحدة" }
                ]
            },
            {
                name: "list",
                description: "يربط الحقل بقائمة خيارات مقترحة معرّفة بعنصر datalist، تظهر كاقتراحات أثناء الكتابة",
                values: [
                    { value: "countries", description: "يربط الحقل بقائمة datalist معرفها countries" },
                    { value: "cities", description: "يربط الحقل بقائمة datalist معرفها cities" },
                    { value: "suggestions", description: "يربط الحقل بقائمة datalist معرفها suggestions" }
                ],
                freeInput: true
            },
            {
                name: "inputmode",
                description: "يحدد نوع لوحة المفاتيح التي تظهر على الجوال عند التركيز على الحقل، يسهل إدخال نوع بيانات معين",
                values: [
                    { value: "text", description: "لوحة مفاتيح نصية عادية" },
                    { value: "numeric", description: "لوحة أرقام فقط (بدون فاصلة أو سالب)" },
                    { value: "decimal", description: "لوحة أرقام مع فاصلة عشرية" },
                    { value: "tel", description: "لوحة أرقام هاتف" },
                    { value: "email", description: "لوحة تحتوي رمز @ لتسهيل كتابة البريد" },
                    { value: "url", description: "لوحة تحتوي / و .com لتسهيل كتابة الروابط" },
                    { value: "search", description: "لوحة نصية مع زر بحث بدل زر الإدخال" },
                    { value: "none", description: "يمنع ظهور لوحة المفاتيح، للحقول التي لها إدخال مخصص" }
                ]
            },
            {
                name: "size",
                description: "يحدد عرض الحقل المرئي بعدد الأحرف تقريباً، يختلف عن maxlength الذي يحدد الحد الأقصى الفعلي للإدخال",
                values: [
                    { value: "5", description: "عرض يتسع لـ 5 أحرف" },
                    { value: "10", description: "عرض يتسع لـ 10 أحرف" },
                    { value: "20", description: "عرض يتسع لعرض 20 حرفاً تقريباً" },
                    { value: "30", description: "عرض يتسع لـ 30 حرفاً" },
                    { value: "40", description: "عرض يتسع لعرض 40 حرفاً تقريباً" },
                    { value: "50", description: "عرض يتسع لـ 50 حرفاً" }
                ],
                freeInput: true
            },
            {
                name: "dirname",
                description: "يرسل اتجاه كتابة النص (rtl أو ltr) مع بيانات النموذج تحت اسم يحدده هذا الحقل، يفيد عند الحاجة لمعرفة الخادم لاتجاه النص المُدخل",
                values: [
                    { value: "message.dir", description: "يرسل اتجاه النص مع البيانات باسم message.dir" },
                    { value: "text.dir", description: "يرسل اتجاه النص مع البيانات باسم text.dir" }
                ],
                freeInput: true
            },
            {
                name: "capture",
                description: "يفتح الكاميرا أو الميكروفون مباشرة عند رفع ملف من الجوال بدل فتح مستكشف الملفات، يستخدم مع type='file'",
                values: [
                    { value: "user", description: "يفتح الكاميرا الأمامية (السيلفي)" },
                    { value: "environment", description: "يفتح الكاميرا الخلفية" }
                ]
            },
            {
                name: "alt",
                description: "يحدد نصاً بديلاً لزر الصورة، يظهر إذا تعذر تحميل الصورة، يستخدم فقط مع type='image'",
                values: [
                    { value: "إرسال النموذج", description: "نص بديل لزر صورة الإرسال" },
                    { value: "بحث", description: "نص بديل لزر صورة البحث" },
                    { value: "حفظ", description: "نص بديل لزر صورة الحفظ" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع زر الصورة بالبكسل، يستخدم فقط مع type='image'",
                values: [
                    { value: "20", description: "ارتفاع 20 بكسل" },
                    { value: "30", description: "ارتفاع 30 بكسل" },
                    { value: "40", description: "ارتفاع 40 بكسل" },
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "60", description: "ارتفاع 60 بكسل" },
                    { value: "80", description: "ارتفاع 80 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض زر الصورة بالبكسل، يستخدم فقط مع type='image'",
                values: [
                    { value: "50", description: "عرض 50 بكسل" },
                    { value: "80", description: "عرض 80 بكسل" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "120", description: "عرض 120 بكسل" },
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "250", description: "عرض 250 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "form",
                description: "يربط الحقل بنموذج معين بواسطة معرفه، يسمح للحقل بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
                values: [
                    { value: "myForm", description: "يربط الحقل بالنموذج ذي المعرف myForm" },
                    { value: "contactForm", description: "يربط الحقل بنموذج الاتصال" }
                ],
                freeInput: true
            },
            {
                name: "formaction",
                description: "يخالف عنوان action الخاص بالنموذج عند إرسال النموذج بهذا الحقل تحديداً (لأزرار type='submit' أو type='image')",
                values: [
                    { value: "/submit-draft", description: "يرسل البيانات لوجهة مختلفة كحفظ مسودة" },
                    { value: "/save", description: "يرسل البيانات لحفظها" },
                    { value: "/publish", description: "يرسل البيانات لنشرها" }
                ],
                freeInput: true
            },
            {
                name: "formenctype",
                description: "يخالف طريقة تشفير بيانات النموذج عند الإرسال بهذا الحقل تحديداً",
                values: [
                    { value: "multipart/form-data", description: "يشفر البيانات كأجزاء متعددة، مهم عند وجود ملفات" },
                    { value: "text/plain", description: "يرسل البيانات كنص عادي" }
                ]
            },
            {
                name: "formmethod",
                description: "يخالف طريقة الإرسال (GET أو POST) الخاصة بالنموذج عند الإرسال بهذا الحقل تحديداً",
                values: [
                    { value: "GET", description: "يرسل عبر GET بدل ما هو محدد في النموذج" },
                    { value: "POST", description: "يرسل عبر POST بدل ما هو محدد في النموذج" }
                ]
            },
            {
                name: "formnovalidate",
                description: "يلغي التحقق من صحة الحقول عند الإرسال بهذا الحقل تحديداً، مفيد لأزرار مثل 'حفظ كمسودة'",
                values: [
                    { value: "", description: "يلغي التحقق (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "formtarget",
                description: "يخالف مكان عرض نتيجة الإرسال الخاص بالنموذج عند الإرسال بهذا الحقل تحديداً",
                values: [
                    { value: "_blank", description: "يعرض النتيجة في نافذة جديدة" },
                    { value: "_self", description: "يعرض النتيجة في نفس النافذة" }
                ]
            },
            {
                name: "popovertarget",
                description: "يربط الحقل (عند type='button') بعنصر popover، فيفتحه أو يغلقه عند الضغط دون الحاجة لكتابة JavaScript",
                values: [
                    { value: "myPopover", description: "يتحكم بالعنصر ذي المعرف myPopover" },
                    { value: "dialog", description: "يتحكم بالعنصر ذي المعرف dialog" }
                ],
                freeInput: true
            },
            {
                name: "popovertargetaction",
                description: "يحدد نوع التحكم في popover المرتبط، سواء بفتحه أو إغلاقه أو التبديل بين الحالتين",
                values: [
                    { value: "show", description: "يظهر popover عند الضغط" },
                    { value: "hide", description: "يخفي popover عند الضغط" },
                    { value: "toggle", description: "يبدّل بين الإظهار والإخفاء (الافتراضي)" }
                ]
            }
        ]
    },

    // -------- label --------
    {
        tag: "label",
        description: "يربط نصاً وصفياً بحقل الإدخال، عند النقر على النص ينتقل التركيز إلى الحقل المرتبط",
        attributes: [
            {
                name: "for",
                description: "يربط التسمية بحقل معين بواسطة معرف الحقل، عند النقر على النص ينتقل للحقل",
                values: [
                    { value: "username", description: "مرتبط بحقل معرفه username" },
                    { value: "email", description: "مرتبط بحقل معرفه email" },
                    { value: "password", description: "مرتبط بحقل معرفه password" },
                    { value: "message", description: "مرتبط بحقل معرفه message" },
                    { value: "country", description: "مرتبط بحقل معرفه country" }
                ],
                freeInput: true
            },
            {
                name: "form",
                description: "يربط التسمية بنموذج معين بواسطة معرفه، يسمح لها بالانتماء لنموذج حتى لو لم تكن موضوعة داخله",
                values: [
                    { value: "myForm", description: "يربط التسمية بالنموذج ذي المعرف myForm" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- button --------
    {
        tag: "button",
        description: "ينشئ زراً تفاعلياً، يمكن استخدامه لإرسال النموذج أو تنفيذ أمر بواسطة JavaScript",
        attributes: [
            {
                name: "type",
                description: "يحدد وظيفة الزر، إما إرسال النموذج أو إعادة تعيينه أو زر عادي",
                values: [
                    { value: "submit", description: "زر إرسال النموذج، يرسل البيانات إلى الخادم" },
                    { value: "reset", description: "زر إعادة تعيين، يعيد النموذج إلى قيمه الافتراضية" },
                    { value: "button", description: "زر عادي، لا يفعل شيئاً دون سكريبت" }
                ]
            },
            {
                name: "name",
                description: "يحدد اسم الزر الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
                values: [
                    { value: "action", description: "اسم الزر" },
                    { value: "submit", description: "اسم زر الإرسال" },
                    { value: "save", description: "اسم زر الحفظ" },
                    { value: "delete", description: "اسم زر الحذف" },
                    { value: "edit", description: "اسم زر التعديل" }
                ],
                freeInput: true
            },
            {
                name: "value",
                description: "يحدد القيمة التي سترسل مع الزر عند الضغط عليه، تساعد في تحديد أي زر ضغط المستخدم",
                values: [
                    { value: "save", description: "قيمة الزر" },
                    { value: "publish", description: "قيمة زر النشر" },
                    { value: "draft", description: "قيمة زر الحفظ كمسودة" },
                    { value: "delete", description: "قيمة زر الحذف" }
                ],
                freeInput: true
            },
            {
                name: "disabled",
                description: "يعطل الزر ويجعله غير قابل للنقر، يمنع المستخدم من الضغط عليه",
                values: [
                    { value: "", description: "يعطل الزر (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "autofocus",
                description: "يجعل هذا الزر هو الأول الذي يحصل على التركيز عند تحميل الصفحة، يمكن الضغط عليه بالإنتر",
                values: [
                    { value: "", description: "يركز على الزر (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "formaction",
                description: "يخالف عنوان action الخاص بالنموذج لهذا الزر تحديداً، يرسل البيانات لوجهة مختلفة عند الضغط عليه",
                values: [
                    { value: "/submit-draft", description: "يرسل البيانات لوجهة مختلفة كحفظ مسودة" },
                    { value: "/save", description: "يرسل البيانات للحفظ" },
                    { value: "/publish", description: "يرسل البيانات للنشر" }
                ],
                freeInput: true
            },
            {
                name: "formmethod",
                description: "يخالف طريقة الإرسال الخاصة بالنموذج لهذا الزر تحديداً",
                values: [
                    { value: "GET", description: "يرسل عبر GET بدل ما هو محدد في النموذج" },
                    { value: "POST", description: "يرسل عبر POST بدل ما هو محدد في النموذج" }
                ]
            },
            {
                name: "formenctype",
                description: "يخالف طريقة تشفير البيانات لهذا الزر تحديداً",
                values: [
                    { value: "multipart/form-data", description: "يشفر البيانات كأجزاء متعددة" },
                    { value: "text/plain", description: "يرسل البيانات كنص عادي" }
                ]
            },
            {
                name: "formnovalidate",
                description: "يلغي التحقق من صحة الحقول عند الضغط على هذا الزر تحديداً، مفيد لأزرار مثل 'حفظ كمسودة'",
                values: [
                    { value: "", description: "يلغي التحقق لهذا الزر (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "formtarget",
                description: "يخالف مكان عرض نتيجة الإرسال الخاص بالنموذج لهذا الزر تحديداً",
                values: [
                    { value: "_blank", description: "يعرض النتيجة في نافذة جديدة لهذا الزر فقط" },
                    { value: "_self", description: "يعرض النتيجة في نفس النافذة" }
                ]
            },
            {
                name: "popovertarget",
                description: "يربط الزر بعنصر popover، فيفتحه أو يغلقه عند الضغط دون الحاجة لكتابة JavaScript",
                values: [
                    { value: "myPopover", description: "يتحكم بالعنصر ذي المعرف myPopover" },
                    { value: "dialog", description: "يتحكم بالعنصر ذي المعرف dialog" }
                ],
                freeInput: true
            },
            {
                name: "popovertargetaction",
                description: "يحدد نوع التحكم في popover المرتبط، سواء بفتحه أو إغلاقه أو التبديل بين الحالتين",
                values: [
                    { value: "show", description: "يظهر popover عند الضغط" },
                    { value: "hide", description: "يخفي popover عند الضغط" },
                    { value: "toggle", description: "يبدّل بين الإظهار والإخفاء (الافتراضي)" }
                ]
            },
            {
                name: "form",
                description: "يربط الزر بنموذج معين بواسطة معرفه، يسمح له بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
                values: [
                    { value: "myForm", description: "يربط الزر بالنموذج ذي المعرف myForm" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- select --------
    {
        tag: "select",
        description: "ينشئ قائمة منسدلة تسمح للمستخدم باختيار خيار واحد أو أكثر من قائمة محددة مسبقاً",
        attributes: [
            {
                name: "name",
                description: "يحدد اسم القائمة الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
                values: [
                    { value: "country", description: "اسم القائمة" },
                    { value: "city", description: "اسم القائمة" },
                    { value: "category", description: "اسم القائمة" },
                    { value: "language", description: "اسم القائمة" },
                    { value: "color", description: "اسم القائمة" }
                ],
                freeInput: true
            },
            {
                name: "required",
                description: "يجعل القائمة إلزامية، يمنع إرسال النموذج إذا لم يختر المستخدم أي خيار",
                values: [
                    { value: "", description: "يجعل القائمة إلزامية (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "multiple",
                description: "يسمح باختيار أكثر من خيار من القائمة، يفعّل التحديد المتعدد",
                values: [
                    { value: "", description: "يفعّل التحديد المتعدد (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "disabled",
                description: "يعطل القائمة ويجعلها غير قابلة للتفاعل، لا يمكن اختيار أي خيار",
                values: [
                    { value: "", description: "يعطل القائمة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "size",
                description: "يحدد عدد الخيارات الظاهرة في القائمة، إذا كان أكبر من 1 تظهر كقائمة مفتوحة",
                values: [
                    { value: "1", description: "يعرض خياراً واحداً (قائمة منسدلة)" },
                    { value: "2", description: "يعرض خيارين" },
                    { value: "3", description: "يعرض 3 خيارات" },
                    { value: "4", description: "يعرض 4 خيارات" },
                    { value: "5", description: "يعرض 5 خيارات" },
                    { value: "10", description: "يعرض 10 خيارات" }
                ],
                freeInput: true
            },
            {
                name: "autofocus",
                description: "يجعل هذه القائمة هي أول عنصر يحصل على التركيز عند تحميل الصفحة",
                values: [
                    { value: "", description: "يركز على القائمة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "autocomplete",
                description: "يسمح للمتصفح بتذكر آخر خيار اختاره المستخدم من هذه القائمة وتحديده تلقائياً في المرات القادمة",
                values: [
                    { value: "on", description: "يفعّل التذكر التلقائي للخيار" },
                    { value: "off", description: "يلغي التذكر التلقائي" }
                ]
            },
            {
                name: "form",
                description: "يربط القائمة بنموذج معين بواسطة معرفه، يسمح لها بالانتماء لنموذج حتى لو لم تكن موضوعة داخله في HTML",
                values: [
                    { value: "myForm", description: "يربط القائمة بالنموذج ذي المعرف myForm" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- option --------
    {
        tag: "option",
        description: "يمثل خياراً واحداً داخل قائمة select أو datalist، يعرض القيمة التي يمكن للمستخدم اختيارها",
        attributes: [
            {
                name: "value",
                description: "يحدد القيمة التي سترسل إلى الخادم عند اختيار هذا الخيار، تخلف عن النص المعروض",
                values: [
                    { value: "sa", description: "قيمة السعودية" },
                    { value: "eg", description: "قيمة مصر" },
                    { value: "ae", description: "قيمة الإمارات" },
                    { value: "kw", description: "قيمة الكويت" },
                    { value: "qa", description: "قيمة قطر" },
                    { value: "om", description: "قيمة عمان" },
                    { value: "bh", description: "قيمة البحرين" },
                    { value: "jo", description: "قيمة الأردن" },
                    { value: "lb", description: "قيمة لبنان" }
                ],
                freeInput: true
            },
            {
                name: "selected",
                description: "يجعل هذا الخيار هو المختار افتراضياً عند تحميل الصفحة، يظهر محدداً",
                values: [
                    { value: "", description: "يجعل الخيار مختاراً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "disabled",
                description: "يعطل الخيار ويجعله غير قابل للاختيار، يمنع المستخدم من اختياره",
                values: [
                    { value: "", description: "يعطل الخيار (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "label",
                description: "يحدد نصاً مختصراً يظهر بدل محتوى الخيار النصي، مفيد عند رغبتك بعرض نص مختلف عن القيمة الفعلية",
                values: [
                    { value: "السعودية", description: "نص مختصر يظهر للمستخدم بدل النص الطويل داخل العنصر" },
                    { value: "مصر", description: "نص مختصر" },
                    { value: "الإمارات", description: "نص مختصر" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- optgroup --------
    {
        tag: "optgroup",
        description: "يجمع خيارات متعددة تحت عنوان واحد في القائمة المنسدلة، ينظم الخيارات في مجموعات",
        attributes: [
            {
                name: "label",
                description: "يحدد عنوان المجموعة التي تظهر فوق الخيارات، يوضح تصنيف الخيارات",
                values: [
                    { value: "دول الخليج", description: "عنوان مجموعة" },
                    { value: "دول أفريقيا", description: "عنوان مجموعة" },
                    { value: "دول أوروبا", description: "عنوان مجموعة" },
                    { value: "دول آسيا", description: "عنوان مجموعة" },
                    { value: "الأقسام", description: "عنوان مجموعة" }
                ],
                freeInput: true
            },
            {
                name: "disabled",
                description: "يعطل المجموعة بأكملها ويجعل خياراتها غير قابلة للاختيار",
                values: [
                    { value: "", description: "يعطل المجموعة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // -------- textarea --------
    {
        tag: "textarea",
        description: "حقل إدخال نص متعدد الأسطر، يسمح للمستخدم بكتابة نصوص طويلة مثل الرسائل أو التعليقات",
        attributes: [
            {
                name: "name",
                description: "يحدد اسم الحقل الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
                values: [
                    { value: "message", description: "اسم الحقل" },
                    { value: "comment", description: "اسم الحقل" },
                    { value: "bio", description: "اسم الحقل" },
                    { value: "description", description: "اسم الحقل" },
                    { value: "feedback", description: "اسم الحقل" }
                ],
                freeInput: true
            },
            {
                name: "rows",
                description: "يحدد ارتفاع الحقل بعدد الأسطر، يتحكم في حجم منطقة النص المعروضة",
                values: [
                    { value: "2", description: "ارتفاع سطرين" },
                    { value: "3", description: "ارتفاع 3 أسطر" },
                    { value: "4", description: "ارتفاع 4 أسطر" },
                    { value: "5", description: "ارتفاع 5 أسطر" },
                    { value: "8", description: "ارتفاع 8 أسطر" },
                    { value: "10", description: "ارتفاع 10 أسطر" },
                    { value: "12", description: "ارتفاع 12 سطراً" },
                    { value: "15", description: "ارتفاع 15 سطراً" },
                    { value: "20", description: "ارتفاع 20 سطراً" }
                ],
                freeInput: true
            },
            {
                name: "cols",
                description: "يحدد عرض الحقل بعدد الأحرف، يتحكم في عرض منطقة النص المعروضة",
                values: [
                    { value: "10", description: "عرض 10 أحرف" },
                    { value: "20", description: "عرض 20 حرفاً" },
                    { value: "30", description: "عرض 30 حرفاً" },
                    { value: "40", description: "عرض 40 حرفاً" },
                    { value: "50", description: "عرض 50 حرفاً" },
                    { value: "60", description: "عرض 60 حرفاً" },
                    { value: "70", description: "عرض 70 حرفاً" },
                    { value: "80", description: "عرض 80 حرفاً" },
                    { value: "100", description: "عرض 100 حرف" }
                ],
                freeInput: true
            },
            {
                name: "placeholder",
                description: "يعرض نصاً تلميحياً داخل الحقل يختفي عند الكتابة، يوضح للمستخدم ما يجب كتابته",
                values: [
                    { value: "اكتب رسالتك هنا", description: "نص تلميحي" },
                    { value: "أخبرنا برأيك", description: "نص تلميحي" },
                    { value: "اكتب تعليقاً", description: "نص تلميحي" }
                ],
                freeInput: true
            },
            {
                name: "required",
                description: "يجعل الحقل إلزامياً، يمنع إرسال النموذج إذا كان الحقل فارغاً",
                values: [
                    { value: "", description: "يجعل الحقل إلزامياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "disabled",
                description: "يعطل الحقل ويجعله غير قابل للتفاعل، لا يمكن تعديل النص",
                values: [
                    { value: "", description: "يعطل الحقل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "readonly",
                description: "يجعل الحقل للقراءة فقط، يمكن رؤية النص ولكن لا يمكن تعديله",
                values: [
                    { value: "", description: "يجعل للقراءة فقط (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "maxlength",
                description: "يحدد أقصى عدد من الأحرف يمكن إدخالها، يمنع كتابة نصوص طويلة جداً",
                values: [
                    { value: "100", description: "حد أقصى 100 حرف" },
                    { value: "200", description: "حد أقصى 200 حرف" },
                    { value: "500", description: "حد أقصى 500 حرف" },
                    { value: "1000", description: "حد أقصى 1000 حرف" },
                    { value: "2000", description: "حد أقصى 2000 حرف" },
                    { value: "5000", description: "حد أقصى 5000 حرف" }
                ],
                freeInput: true
            },
            {
                name: "wrap",
                description: "يحدد كيف يتعامل الحقل مع النصوص الطويلة، إما بتقسيمها أو بظهور شريط تمرير",
                values: [
                    { value: "soft", description: "يقسم النص تلقائياً عند العرض لكن يرسل كنص واحد" },
                    { value: "hard", description: "يقسم النص عند الإرسال مع الحفاظ على فواصل الأسطر" }
                ]
            },
            {
                name: "autofocus",
                description: "يجعل هذا الحقل هو أول عنصر يحصل على التركيز عند تحميل الصفحة",
                values: [
                    { value: "", description: "يركز على الحقل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "dirname",
                description: "يرسل اتجاه كتابة النص (rtl أو ltr) مع بيانات النموذج تحت اسم يحدده هذا الحقل",
                values: [
                    { value: "message.dir", description: "يرسل اتجاه النص مع البيانات باسم message.dir" },
                    { value: "text.dir", description: "يرسل اتجاه النص مع البيانات باسم text.dir" }
                ],
                freeInput: true
            },
            {
                name: "autocomplete",
                description: "يسمح للمتصفح بتذكر النص الذي كتبه المستخدم سابقاً في هذا الحقل واقتراحه تلقائياً",
                values: [
                    { value: "on", description: "يفعّل الإكمال التلقائي" },
                    { value: "off", description: "يلغي الإكمال التلقائي" }
                ]
            },
            {
                name: "spellcheck",
                description: "يفعّل أو يعطل التدقيق الإملائي التلقائي للمتصفح داخل الحقل، يظهر خطوطاً حمراء تحت الكلمات الخاطئة",
                values: [
                    { value: "true", description: "يفعّل التدقيق الإملائي" },
                    { value: "false", description: "يعطل التدقيق الإملائي" }
                ]
            },
            {
                name: "form",
                description: "يربط الحقل بنموذج معين بواسطة معرفه، يسمح له بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
                values: [
                    { value: "myForm", description: "يربط الحقل بالنموذج ذي المعرف myForm" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- fieldset --------
    {
        tag: "fieldset",
        description: "يجمع مجموعة من عناصر النموذج المترابطة داخل إطار، ينظم الحقول ويوضح العلاقة بينها",
        attributes: [
            {
                name: "disabled",
                description: "يعطل جميع العناصر داخل المجموعة، يمنع التفاعل مع كل الحقول دفعة واحدة",
                values: [
                    { value: "", description: "يعطل المجموعة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "name",
                description: "يحدد اسماً للمجموعة، يمكن استخدامه للوصول إليها عبر جافاسكريبت أو ضمن مجموعة عناصر النموذج",
                values: [
                    { value: "userInfo", description: "اسم مجموعة بيانات المستخدم" },
                    { value: "personalInfo", description: "اسم مجموعة المعلومات الشخصية" },
                    { value: "addressInfo", description: "اسم مجموعة العنوان" },
                    { value: "preferences", description: "اسم مجموعة التفضيلات" }
                ],
                freeInput: true
            },
            {
                name: "form",
                description: "يربط المجموعة بنموذج معين بواسطة معرفه، يسمح لها بالانتماء لنموذج حتى لو لم تكن موضوعة داخله في HTML",
                values: [
                    { value: "myForm", description: "يربط المجموعة بالنموذج ذي المعرف myForm" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- legend --------
    {
        tag: "legend",
        description: "يحدد عنواناً وصفياً لمجموعة fieldset، يظهر داخل الإطار ويعبر عن محتوى المجموعة",
        attributes: []
    },

    // -------- datalist --------
    {
        tag: "datalist",
        description: "يوفر قائمة بخيارات مقترحة لحقل الإدخال، تظهر أثناء الكتابة لتسهيل الإكمال التلقائي",
        attributes: []
    },

    // -------- output --------
    {
        tag: "output",
        description: "يعرض نتيجة حساب أو عملية تفاعلية، يستخدم لعرض ناتج العمليات الحسابية أو ردود الفعل",
        attributes: [
            {
                name: "name",
                description: "يحدد اسم عنصر output، يمكن استخدامه في السكريبت للرجوع إليه",
                values: [
                    { value: "result", description: "اسم النتيجة" },
                    { value: "total", description: "اسم المجموع" },
                    { value: "output", description: "اسم المخرج" }
                ],
                freeInput: true
            },
            {
                name: "for",
                description: "يربط عناصر الإدخال التي تؤثر في هذه النتيجة، يوضح العلاقة بينها",
                values: [
                    { value: "input1 input2", description: "مرتبط بحقول الإدخال" },
                    { value: "a b", description: "مرتبط بحقلين a و b" },
                    { value: "range", description: "مرتبط بحقل range" }
                ],
                freeInput: true
            },
            {
                name: "form",
                description: "يربط عنصر output بنموذج معين بواسطة معرفه، يسمح له بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
                values: [
                    { value: "myForm", description: "يربط العنصر بالنموذج ذي المعرف myForm" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- progress --------
    {
        tag: "progress",
        description: "يعرض شريط تقدم لإنجاز مهمة، يوضح للمستخدم نسبة الإنجاز أو الوقت المتبقي",
        attributes: [
            {
                name: "value",
                description: "يحدد القيمة الحالية للتقدم، تحدد مقدار ما تم إنجازه",
                values: [
                    { value: "0", description: "لم يبدأ التقدم (0%)" },
                    { value: "10", description: "تم إنجاز 10%" },
                    { value: "25", description: "تم إنجاز 25%" },
                    { value: "50", description: "تم إنجاز 50%" },
                    { value: "70", description: "تم إنجاز 70% من المهمة" },
                    { value: "75", description: "تم إنجاز 75%" },
                    { value: "90", description: "تم إنجاز 90%" },
                    { value: "99", description: "تقريباً انتهى" },
                    { value: "100", description: "اكتمل التقدم (100%)" }
                ],
                freeInput: true
            },
            {
                name: "max",
                description: "يحدد القيمة القصوى للتقدم (100% عادة)، تحدد الهدف النهائي",
                values: [
                    { value: "10", description: "الحد الأقصى 10" },
                    { value: "50", description: "الحد الأقصى 50" },
                    { value: "100", description: "الحد الأقصى 100%" },
                    { value: "200", description: "الحد الأقصى 200" },
                    { value: "1000", description: "الحد الأقصى 1000" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- meter --------
    {
        tag: "meter",
        description: "يعرض قياساً ضمن نطاق معين، مثل نسبة الاستخدام أو مستوى الصوت أو درجة الحرارة",
        attributes: [
            {
                name: "value",
                description: "يحدد القيمة الحالية التي تظهر على المقياس، تحدد مستوى القياس",
                values: [
                    { value: "0", description: "القيمة الحالية 0" },
                    { value: "3", description: "القيمة الحالية 3" },
                    { value: "5", description: "القيمة الحالية 5" },
                    { value: "6", description: "القيمة الحالية 6" },
                    { value: "7", description: "القيمة الحالية 7" },
                    { value: "10", description: "القيمة الحالية 10" },
                    { value: "50", description: "القيمة الحالية 50%" },
                    { value: "75", description: "القيمة الحالية 75%" },
                    { value: "100", description: "القيمة الحالية 100%" }
                ],
                freeInput: true
            },
            {
                name: "min",
                description: "يحدد أقل قيمة يمكن أن يصل إليها المقياس، يحدد بداية النطاق",
                values: [
                    { value: "0", description: "الحد الأدنى 0" },
                    { value: "1", description: "الحد الأدنى 1" },
                    { value: "-10", description: "الحد الأدنى -10" }
                ],
                freeInput: true
            },
            {
                name: "max",
                description: "يحدد أعلى قيمة يمكن أن يصل إليها المقياس، يحدد نهاية النطاق",
                values: [
                    { value: "10", description: "الحد الأقصى 10" },
                    { value: "50", description: "الحد الأقصى 50" },
                    { value: "100", description: "الحد الأقصى 100%" },
                    { value: "200", description: "الحد الأقصى 200" }
                ],
                freeInput: true
            },
            {
                name: "low",
                description: "يحدد الحد الأدنى للنطاق المنخفض، يغير لون المقياس عند هذه النقطة",
                values: [
                    { value: "2", description: "حد النطاق المنخفض 2" },
                    { value: "3", description: "حد النطاق المنخفض 3" },
                    { value: "20", description: "حد النطاق المنخفض 20%" }
                ],
                freeInput: true
            },
            {
                name: "high",
                description: "يحدد الحد الأعلى للنطاق المرتفع، يغير لون المقياس عند هذه النقطة",
                values: [
                    { value: "7", description: "حد النطاق المرتفع 7" },
                    { value: "8", description: "حد النطاق المرتفع 8" },
                    { value: "80", description: "حد النطاق المرتفع 80%" }
                ],
                freeInput: true
            },
            {
                name: "optimum",
                description: "يحدد القيمة المثالية، يغير لون المقياس حسب قرب القيمة منها",
                values: [
                    { value: "3", description: "القيمة المثالية 3" },
                    { value: "5", description: "القيمة المثالية 5" },
                    { value: "7", description: "القيمة المثالية 7" },
                    { value: "50", description: "القيمة المثالية 50%" }
                ],
                freeInput: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.formsData = formsData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = formsData;
}