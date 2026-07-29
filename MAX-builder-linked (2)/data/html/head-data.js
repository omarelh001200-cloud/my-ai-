// ============================================================
// head-data.js
// عناصر الـ Head - البيانات الوصفية للصفحة
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const headData = [
    // ============================================================
    // 1. عنصر <meta>
    // ============================================================
    {
        tag: "meta",
        description: "يضيف بيانات وصفية للصفحة، تؤثر على محركات البحث، وسائل التواصل، وعرض الصفحة على الأجهزة المختلفة",
        attributes: [
            // -------- charset --------
            {
                name: "charset",
                description: "يحدد ترميز النصوص في الصفحة. اختيار الترميز الصحيح يمنع ظهور النصوص مشوشة أو علامات استفهام",
                values: [
                    { value: "UTF-8", description: "يدعم كل لغات العالم بما فيها العربية والعبرية والصينية، وهو الترميز الأكثر استخداماً وأماناً" },
                    { value: "UTF-16", description: "ترميز يونيكود 16 بت، يدعم كل اللغات لكنه يستهلك مساحة أكبر" },
                    { value: "UTF-32", description: "ترميز يونيكود 32 بت، يستهلك مساحة كبيرة جداً نادر الاستخدام" },
                    { value: "windows-1256", description: "يدعم اللغة العربية فقط، مناسب للمواقع العربية القديمة" },
                    { value: "ISO-8859-6", description: "يدعم اللغة العربية، يستخدم في الأنظمة القديمة" },
                    { value: "windows-1252", description: "يدعم اللغات الأوروبية الغربية، لا يدعم العربية" },
                    { value: "GB2312", description: "يدعم اللغة الصينية المبسطة" },
                    { value: "GBK", description: "يدعم اللغة الصينية المبسطة والتقليدية معاً" },
                    { value: "GB18030", description: "يدعم اللغة الصينية بالكامل، الترميز الرسمي في الصين" },
                    { value: "Big5", description: "يدعم اللغة الصينية التقليدية (تايوان وهونغ كونغ)" },
                    { value: "Shift_JIS", description: "يدعم اللغة اليابانية" },
                    { value: "EUC-JP", description: "يدعم اللغة اليابانية، بديل لـ Shift_JIS" },
                    { value: "EUC-KR", description: "يدعم اللغة الكورية" },
                    { value: "ISO-8859-1", description: "يدعم اللغات الأوروبية الغربية، لا يدعم العربية" },
                    { value: "ISO-8859-2", description: "يدعم اللغات الأوروبية الشرقية (البولندية، التشيكية)" },
                    { value: "ISO-8859-3", description: "يدعم اللغات الأوروبية الجنوبية (التركية، المالطية)" },
                    { value: "ISO-8859-4", description: "يدعم اللغات البلطيقية (الليتوانية، اللاتفية)" },
                    { value: "ISO-8859-5", description: "يدعم اللغات السيريلية (الروسية، الأوكرانية)" },
                    { value: "ISO-8859-7", description: "يدعم اللغة اليونانية" },
                    { value: "ISO-8859-8", description: "يدعم اللغة العبرية" },
                    { value: "ISO-8859-9", description: "يدعم اللغة التركية" },
                    { value: "KOI8-R", description: "يدعم اللغة الروسية" },
                    { value: "KOI8-U", description: "يدعم اللغة الأوكرانية" },
                    { value: "TIS-620", description: "يدعم اللغة التايلاندية" },
                    { value: "VISCII", description: "يدعم اللغة الفيتنامية" }
                ]
            },
            // -------- name --------
            {
                name: "name",
                description: "يحدد نوع المعلومات الوصفية التي تريد إضافتها للصفحة",
                values: [
                    { value: "viewport", description: "يجعل الصفحة تظهر بشكل مناسب على الجوالات والأجهزة اللوحية، يمنع ظهور الصفحة مصغرة أو مكبرة" },
                    { value: "description", description: "يظهر هذا النص في نتائج محركات البحث (جوجل) تحت عنوان الصفحة، يساعد في جذب الزوار" },
                    { value: "keywords", description: "يحدد كلمات البحث التي تريد أن يجد بها محرك البحث صفحتك، لكن أهميتها حالياً قليلة" },
                    { value: "author", description: "يحدد اسم كاتب أو مالك الصفحة، يظهر في بعض أدوات التطوير" },
                    { value: "robots", description: "يأمر محركات البحث إما بفهرسة الصفحة أو تجاهلها، أو بمتابعة الروابط أو لا" },
                    { value: "theme-color", description: "يغير لون شريط عنوان المتصفح في الجوالات (كروم وفايرفوكس) ليتناسب مع لون موقعك" },
                    { value: "apple-mobile-web-app-capable", description: "يجعل موقعك يعمل كتطبيق على أجهزة آيفون وآيباد عند إضافته للشاشة الرئيسية" },
                    { value: "apple-mobile-web-app-status-bar-style", description: "يغير لون شريط الحالة (الأعلى) في آيفون عند تشغيل موقعك كتطبيق" },
                    { value: "apple-mobile-web-app-title", description: "يحدد الاسم الذي يظهر تحت أيقونة تطبيقك على شاشة آيفون الرئيسية" },
                    { value: "msapplication-TileColor", description: "يغير لون البلاطة (المربع) الذي يظهر في قائمة ابدأ في ويندوز عند تثبيت موقعك" },
                    { value: "msapplication-config", description: "يحدد ملف إعدادات يحتوي على شكل وألوان البلاطة في ويندوز" },
                    { value: "generator", description: "يحدد اسم البرنامج أو النظام الذي أُنشئت به الصفحة (ووردبريس مثلاً)، يُضاف تلقائياً من بعض الأنظمة" },
                    { value: "application-name", description: "يحدد اسم موقعك كتطبيق ويب، يظهر في بعض قوائم المتصفح والجوال" },
                    { value: "referrer", description: "يحدد مقدار معلومات الصفحة الحالية التي تُرسل عند الانتقال لروابط خارجية، يحمي الخصوصية" },
                    { value: "color-scheme", description: "يخبر المتصفح أن صفحتك تدعم الوضع الفاتح والداكن، فيعدّل شريط التمرير وعناصر النظام تلقائياً" },
                    { value: "format-detection", description: "يمنع الجوال من تحويل الأرقام (هاتف، تاريخ) تلقائياً إلى روابط قابلة للنقر" },
                    { value: "google", description: "يتحكم بسلوك جوجل تجاه صفحتك، مثل منع عرض مقتطف بحث مختلف عن الوصف الذي كتبته" },
                    { value: "google-site-verification", description: "يثبت ملكيتك للموقع أمام أدوات مشرفي المواقع من جوجل (Search Console)" },
                    { value: "rating", description: "يحدد التصنيف العمري لمحتوى الصفحة، مثل General أو Mature" },
                    { value: "twitter:card", description: "يحدد شكل المعاينة عند مشاركة رابط موقعك على تويتر/إكس (صورة كبيرة أو صغيرة)" },
                    { value: "twitter:site", description: "يحدد حساب تويتر/إكس الخاص بالموقع أو الشركة" },
                    { value: "twitter:creator", description: "يحدد حساب تويتر/إكس الخاص بكاتب المحتوى" },
                    { value: "twitter:title", description: "يحدد العنوان الذي يظهر عند مشاركة رابط موقعك على تويتر/إكس" },
                    { value: "twitter:description", description: "يحدد النص الذي يظهر تحت العنوان عند المشاركة على تويتر/إكس" },
                    { value: "twitter:image", description: "يحدد الصورة التي تظهر عند مشاركة رابط موقعك على تويتر/إكس" },
                    { value: "twitter:image:alt", description: "يحدد وصفاً نصياً لصورة تويتر، يفيد ضعاف البصر" },
                    { value: "twitter:player", description: "يحدد رابط فيديو أو مشغل يظهر ويعمل مباشرة داخل تغريدة تويتر/إكس" },
                    { value: "twitter:app:name:iphone", description: "يحدد اسم تطبيق آيفون المرتبط بالمحتوى عند مشاركته على تويتر" },
                    { value: "twitter:app:id:iphone", description: "يحدد معرف تطبيق آيفون في متجر آبل لفتحه مباشرة من تويتر" },
                    { value: "twitter:app:url:iphone", description: "يحدد رابط التطبيق الذي يفتح عند النقر على التغريدة من آيفون" },
                    { value: "twitter:app:name:googleplay", description: "يحدد اسم تطبيق أندرويد المرتبط بالمحتوى عند مشاركته على تويتر" },
                    { value: "twitter:app:id:googleplay", description: "يحدد معرف تطبيق أندرويد في متجر جوجل بلاي لفتحه مباشرة من تويتر" },
                    { value: "twitter:app:url:googleplay", description: "يحدد رابط التطبيق الذي يفتح عند النقر على التغريدة من أندرويد" },
                    { value: "twitter:label1", description: "يحدد تسمية لمعلومة إضافية تظهر في البطاقة (مثل 'المؤلف')" },
                    { value: "twitter:data1", description: "يحدد قيمة المعلومة الإضافية (مثل اسم المؤلف)" },
                    { value: "twitter:label2", description: "يحدد تسمية لمعلومة إضافية ثانية" },
                    { value: "twitter:data2", description: "يحدد قيمة المعلومة الإضافية الثانية" },
                    { value: "HandheldFriendly", description: "يخبر المتصفحات القديمة أن الصفحة مصممة لتعمل بشكل جيد على الأجهزة المحمولة" },
                    { value: "MobileOptimized", description: "يخبر متصفحات الجوال القديمة (مثل إنترنت إكسبلورر موبايل) بعرض الصفحة أصغر مما هي" },
                    { value: "renderer", description: "يحدد محرك العرض المستخدم في بعض المتصفحات الصينية (مثل 360 و QQ)، يجبره على استخدام محرك حديث بدل IE" },
                    { value: "revisit-after", description: "يقترح على محرك البحث عدد الأيام قبل إعادة زيارة الصفحة (قيمة قديمة، نادراً ما تُحترم اليوم)" },
                    { value: "distribution", description: "يحدد جمهور الصفحة المستهدف مثل global أو local (قيمة قديمة، لا تأثير فعلي لها في محركات البحث الحديثة)" },
                    { value: "google-adsense-account", description: "يربط الموقع بحساب جوجل أدسنس للتحقق من ملكيته وتفعيل الإعلانات" },
                    { value: "google-site-verification", description: "يثبت ملكيتك للموقع أمام أدوات مشرفي المواقع من جوجل (مكرر أعلاه للتوضيح ضمن أدوات التحقق)" },
                    { value: "msvalidate.01", description: "يثبت ملكية الموقع أمام أدوات Bing لمشرفي المواقع (Bing Webmaster Tools)" },
                    { value: "yandex-verification", description: "يثبت ملكية الموقع أمام محرك البحث الروسي يانديكس" },
                    { value: "p:domain_verify", description: "يثبت ملكية النطاق أمام بينترست لإدارة الحسابات المرتبطة بالموقع" },
                    { value: "facebook-domain-verification", description: "يثبت ملكية النطاق أمام فيسبوك لإدارة الإعلانات وأدوات الأعمال" },
                    { value: "norton-safeweb-site-verification", description: "يثبت ملكية الموقع أمام خدمة Norton Safe Web لتصنيفه كموقع آمن" },
                    { value: "apple-itunes-app", description: "يعرض بانراً في سفاري لتحميل تطبيق آيفون المرتبط بالصفحة الحالية" },
                    { value: "google-play-app", description: "يعرض بانراً في كروم على أندرويد لتحميل تطبيق الموقع من جوجل بلاي" },
                    { value: "mobile-web-app-capable", description: "يجعل موقعك يعمل كتطبيق ويب مستقل (بدون شريط المتصفح) عند إضافته للشاشة الرئيسية على أندرويد" },
                    { value: "handheldfriendly", description: "قيمة قديمة بديلة لـ HandheldFriendly، تخبر المتصفح أن الصفحة مهيأة للجوال" },
                    { value: "viewport-fit", description: "يتحكم في كيفية عرض المحتوى في منطقة الأمان على أجهزة آيفون ذات الشاشة الممتلئة (Notch)" }
                ]
            },
            // -------- property (Open Graph) --------
            {
                name: "property",
                description: "يضيف معلومات مخصصة لوسائل التواصل الاجتماعي (فيسبوك، تويتر، واتساب) عند مشاركة رابط موقعك",
                values: [
                    { value: "og:title", description: "يحدد العنوان الذي يظهر عندما يشارك أحدهم رابط موقعك على فيسبوك أو تويتر" },
                    { value: "og:description", description: "يحدد النص الذي يظهر تحت العنوان عند مشاركة رابط موقعك في وسائل التواصل" },
                    { value: "og:image", description: "يحدد الصورة التي تظهر بجانب الرابط عند مشاركته في فيسبوك وتويتر وواتساب" },
                    { value: "og:url", description: "يحدد الرابط الدائم للصفحة، يمنع كسر الرابط عند المشاركة" },
                    { value: "og:type", description: "يخبر فيسبوك بنوع المحتوى (مقال، منتج، فيديو...) ليظهر بالشكل المناسب" },
                    { value: "og:site_name", description: "يحدد اسم موقعك الذي يظهر بجانب الرابط عند المشاركة" },
                    { value: "og:locale", description: "يحدد لغة المحتوى لوسائل التواصل، مثلاً ar_AR للعربية أو en_US للإنجليزية" },
                    { value: "og:image:width", description: "يحدد عرض الصورة بالبكسل، يساعد فيسبوك على عرضها بسرعة دون انتظار تحميلها لمعرفة أبعادها" },
                    { value: "og:image:height", description: "يحدد ارتفاع الصورة بالبكسل، يُستخدم مع og:image:width" },
                    { value: "og:image:alt", description: "يحدد وصفاً نصياً للصورة، يفيد ضعاف البصر عند مشاركة الرابط" },
                    { value: "og:video", description: "يحدد رابط فيديو يظهر ويُشغَّل مباشرة عند مشاركة الرابط في وسائل التواصل" },
                    { value: "og:audio", description: "يحدد رابط ملف صوتي مرتبط بالصفحة عند مشاركتها" },
                    { value: "og:updated_time", description: "يحدد آخر وقت تم فيه تحديث محتوى الصفحة" },
                    { value: "article:published_time", description: "يحدد تاريخ نشر المقال، يستخدمه فيسبوك وجوجل لعرض تاريخ النشر" },
                    { value: "article:author", description: "يحدد رابط صفحة كاتب المقال" },
                    { value: "fb:app_id", description: "يربط الصفحة بتطبيق فيسبوك الخاص بك، يفعّل إحصائيات المشاركة والتحليلات" },
                    { value: "fb:pages", description: "يربط الصفحة بمعرف صفحة فيسبوك الرسمية لموقعك، يفيد في إدارة المحتوى المنشور" },
                    { value: "og:image:type", description: "يحدد نوع ملف الصورة (jpeg أو png)، يساعد فيسبوك على تحميلها وعرضها بسرعة أكبر" },
                    { value: "og:image:secure_url", description: "يحدد رابطاً آمناً (https) للصورة، يستخدم عند مشاركة الرابط في مواقع تتطلب اتصالاً آمناً" },
                    { value: "og:video:width", description: "يحدد عرض الفيديو بالبكسل، يساعد المتصفح على حجز المساحة المناسبة قبل تحميله" },
                    { value: "og:video:height", description: "يحدد ارتفاع الفيديو بالبكسل، يُستخدم مع og:video:width" },
                    { value: "og:video:type", description: "يحدد نوع ملف الفيديو (مثل video/mp4)، يساعد المشغل على التعامل معه بشكل صحيح" },
                    { value: "og:audio:type", description: "يحدد نوع الملف الصوتي (مثل audio/mpeg)" },
                    { value: "og:determiner", description: "يحدد أداة التعريف (a، an، the) التي تُضاف قبل اسم موقعك في بعض اللغات عند صياغة الجملة تلقائياً" },
                    { value: "og:see_also", description: "يحدد روابط لصفحات أو مقالات ذات صلة بمحتوى الصفحة الحالية" },
                    { value: "og:rich_attachment", description: "يخبر واتساب وفيسبوك بعرض معاينة غنية (صورة كبيرة) للرابط بدل معاينة صغيرة" },
                    { value: "article:modified_time", description: "يحدد تاريخ آخر تعديل على المقال، يفيد جوجل في معرفة حداثة المحتوى" },
                    { value: "article:section", description: "يحدد تصنيف أو قسم المقال (مثل رياضة أو تقنية)" },
                    { value: "article:tag", description: "يحدد وسماً أو كلمة مفتاحية مرتبطة بالمقال، يمكن تكرارها لعدة وسوم" },
                    { value: "article:publisher", description: "يحدد رابط صفحة الناشر (المؤسسة) على فيسبوك" },
                    { value: "profile:first_name", description: "يحدد الاسم الأول لصاحب الصفحة الشخصية، يستخدم مع og:type=profile" },
                    { value: "profile:last_name", description: "يحدد اسم العائلة لصاحب الصفحة الشخصية" },
                    { value: "profile:username", description: "يحدد اسم المستخدم لصاحب الصفحة الشخصية" },
                    { value: "product:price:amount", description: "يحدد سعر المنتج، يظهر عند مشاركة صفحة منتج في فيسبوك ومنصات التسوق" },
                    { value: "product:price:currency", description: "يحدد عملة سعر المنتج (مثل SAR أو USD)، يستخدم مع product:price:amount" },
                    { value: "product:availability", description: "يحدد إن كان المنتج متوفراً أو نافد المخزون" },
                    { value: "al:ios:url", description: "يفتح تطبيق آيفون مباشرة عند مشاركة الرابط إذا كان التطبيق مثبتاً على جهاز الزائر (Facebook App Links)" },
                    { value: "al:ios:app_store_id", description: "يحدد معرف تطبيق آيفون في متجر آبل، يستخدم مع al:ios:url" },
                    { value: "al:ios:app_name", description: "يحدد اسم تطبيق آيفون المرتبط بالرابط" },
                    { value: "al:android:url", description: "يفتح تطبيق أندرويد مباشرة عند مشاركة الرابط إذا كان التطبيق مثبتاً على جهاز الزائر" },
                    { value: "al:android:package", description: "يحدد اسم حزمة تطبيق أندرويد (Package Name)، يستخدم مع al:android:url" },
                    { value: "al:android:app_name", description: "يحدد اسم تطبيق أندرويد المرتبط بالرابط" },
                    { value: "al:web:url", description: "يحدد رابط النسخة العادية من الصفحة للأجهزة التي لا تملك التطبيق المثبت" },
                    { value: "og:locale:alternate", description: "يحدد لغات بديلة للمحتوى، يمكن تكرارها لعدة لغات" }
                ]
            },
            // -------- http-equiv --------
            {
                name: "http-equiv",
                description: "يحاكي إعدادات رأس HTTP، أي يأمر المتصفح بتنفيذ أوامر معينة",
                values: [
                    { value: "refresh", description: "يعيد تحميل الصفحة تلقائياً بعد عدد ثوانٍ، أو ينقل الزائر لصفحة أخرى" },
                    { value: "X-UA-Compatible", description: "يأمر متصفح Internet Explorer باستخدام أحدث إصدار لديه، يمنع ظهور الصفحة بشكل مشوه" },
                    { value: "content-type", description: "يحدد نوع المحتوى والترميز، يفيد في المتصفحات القديمة جداً" },
                    { value: "default-style", description: "يحدد أي ملف CSS سيكون الافتراضي إذا كان هناك عدة ملفات" },
                    { value: "content-language", description: "يحدد اللغة الافتراضية للصفحة، قد يؤثر على أدوات الترجمة" },
                    { value: "cache-control", description: "يأمر المتصفح بعدم حفظ نسخة من الصفحة (يمنع ظهور محتوى قديم)" },
                    { value: "expires", description: "يحدد تاريخ انتهاء صلاحية الصفحة، بعدها يعيد المتصفح تحميلها من الخادم" },
                    { value: "pragma", description: "يمنع المتصفح من تخزين الصفحة مؤقتاً (طريقة قديمة، استُبدلت بـ cache-control)" },
                    { value: "Content-Security-Policy", description: "يحدد مصادر موثوقة يُسمح للصفحة بتحميل السكريبتات والصور والملفات منها فقط، يحمي من هجمات حقن الأكواد (XSS)" },
                    { value: "imagetoolbar", description: "يخفي شريط أدوات الصور الذي كان يظهر في إنترنت إكسبلورر القديم عند تمرير الفأرة فوق صورة" },
                    { value: "Permissions-Policy", description: "يتحكم بالميزات التي يسمح للصفحة باستخدامها مثل الكاميرا أو الموقع الجغرافي أو الميكروفون" },
                    { value: "Cross-Origin-Opener-Policy", description: "يعزل نافذة الصفحة عن النوافذ الأخرى من مواقع مختلفة، يحمي من بعض هجمات القنوات الجانبية" },
                    { value: "Cross-Origin-Embedder-Policy", description: "يمنع تحميل موارد من مواقع أخرى لا تسمح صراحة بذلك، يحمي من هجمات معينة" },
                    { value: "Accept-CH", description: "يطلب من المتصفح إرسال تفاصيل إضافية عن الجهاز (مثل نوع الشاشة) في الطلبات القادمة" },
                    { value: "origin-trial", description: "يفعّل ميزة تجريبية في المتصفح ضمن برنامج Origin Trials من جوجل، يستخدم لاختبار مزايا جديدة قبل إطلاقها رسمياً" },
                    { value: "X-DNS-Prefetch-Control", description: "يتحكم في تحليل أسماء النطاقات مسبقاً، يسرع تحميل الروابط الخارجية" },
                    { value: "X-XSS-Protection", description: "يفعّل حماية مدمجة في المتصفح ضد هجمات XSS (تم إهمالها في المتصفحات الحديثة)" },
                    { value: "X-Content-Type-Options", description: "يمنع المتصفح من تخمين نوع الملف، يحمي من هجمات تحميل الملفات الخبيثة" },
                    { value: "X-Frame-Options", description: "يمنع عرض الصفحة داخل إطار (iframe) من مواقع أخرى، يحمي من هجمات Clickjacking" }
                ]
            },
            // -------- itemprop --------
            {
                name: "itemprop",
                description: "يضيف بيانات منظمة (Schema.org) داخل الـ head باستخدام Microdata، تساعد محركات البحث على فهم محتوى الصفحة بدقة أكبر (تظهر كنتائج غنية)",
                values: [
                    { value: "name", description: "يحدد اسم العنصر الموصوف (مثل اسم المنتج أو المقال)" },
                    { value: "description", description: "يحدد وصف العنصر ضمن البيانات المنظمة" },
                    { value: "image", description: "يحدد رابط صورة العنصر ضمن البيانات المنظمة" },
                    { value: "url", description: "يحدد رابط العنصر ضمن البيانات المنظمة" },
                    { value: "datePublished", description: "يحدد تاريخ نشر العنصر" },
                    { value: "dateModified", description: "يحدد تاريخ تعديل العنصر" },
                    { value: "author", description: "يحدد مؤلف العنصر" },
                    { value: "publisher", description: "يحدد ناشر العنصر" }
                ],
                freeInput: true
            },
            // -------- scheme --------
            {
                name: "scheme",
                description: "خاصية قديمة جداً كانت تحدد صيغة تفسير قيمة content (مثل تنسيق تاريخ معين)، أُلغيت من معايير HTML الحديثة ولم تعد تُستخدم",
                values: [
                    { value: "", description: "لا يوجد استخدام موصى به حالياً، ذُكرت للتوثيق التاريخي فقط" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. عنصر <link>
    // ============================================================
    {
        tag: "link",
        description: "يربط الصفحة بملفات خارجية مثل CSS، الخطوط، الأيقونات، أو يجهز اتصالات مسبقة لتحسين سرعة تحميل الصفحة",
        attributes: [
            // -------- rel --------
            {
                name: "rel",
                description: "يحدد العلاقة بين الصفحة والملف المرتبط، يخبر المتصفح كيف يتعامل مع هذا الملف",
                values: [
                    { value: "stylesheet", description: "يربط ملف CSS، أي يأمر المتصفح بتحميل وتطبيق التنسيقات على الصفحة" },
                    { value: "icon", description: "يحدد أيقونة الموقع التي تظهر في تبويب المتصفح وبجانب الرابط في المفضلة" },
                    { value: "apple-touch-icon", description: "يحدد أيقونة الموقع التي تظهر على شاشة آيفون الرئيسية عند إضافة الموقع" },
                    { value: "apple-touch-icon-precomposed", description: "مشابه لـ apple-touch-icon لكن يمنع إضافة تأثيرات خاصة على الأيقونة" },
                    { value: "manifest", description: "يربط ملف تطبيق PWA، يسمح بتثبيت موقعك كتطبيق على الجوال والكمبيوتر" },
                    { value: "preconnect", description: "يأمر المتصفح بفتح اتصال مسبق مع خادم خارجي، يسرع تحميل الموارد من هذا الخادم" },
                    { value: "preload", description: "يأمر المتصفح بتحميل ملف معين (صورة، خط، CSS) بشكل عاجل قبل أي شيء، يسرع ظهور المحتوى" },
                    { value: "prefetch", description: "يحمل ملفاً في الخلفية للصفحات التي سيزورها المستخدم بعد ذلك، يسرع الانتقال بين الصفحات" },
                    { value: "dns-prefetch", description: "يحل اسم النطاق (DNS) مسبقاً، يسرع الاتصال بالمواقع الخارجية" },
                    { value: "prerender", description: "يعرض صفحة كاملة في الخلفية قبل أن يضغط عليها المستخدم، يجعل الانتقال فورياً" },
                    { value: "modulepreload", description: "يحمل وحدات JavaScript مسبقاً، يسرع تشغيل التطبيقات الكبيرة" },
                    { value: "canonical", description: "يحدد الرابط الأصلي للصفحة، يمنع عقوبة المحتوى المكرر في محركات البحث" },
                    { value: "alternate", description: "يقدم نسخة بديلة من الصفحة، مثل نسخة مطبوعة أو نسخة بلغة أخرى أو نسخة RSS" },
                    { value: "author", description: "يربط بصفحة المؤلف، يفيد في المدونات والمقالات" },
                    { value: "help", description: "يربط بصفحة المساعدة، يفيد في المواقع الكبيرة" },
                    { value: "license", description: "يربط برخصة استخدام المحتوى، يوضح حقوق النشر" },
                    { value: "search", description: "يربط بصفحة البحث في الموقع" },
                    { value: "next", description: "يربط بالصفحة التالية في سلسلة مقالات أو نتائج بحث، يساعد في التنقل" },
                    { value: "prev", description: "يربط بالصفحة السابقة في سلسلة مقالات أو نتائج بحث" },
                    { value: "nofollow", description: "يأمر محركات البحث بعدم متابعة هذا الرابط، يمنع تمرير قيمة الموقع (SEO)" },
                    { value: "noopener", description: "يمنع الصفحة الجديدة من التحكم بالصفحة الحالية، يحمي من هجمات الاختراق" },
                    { value: "noreferrer", description: "يمنع إرسال معلومات الموقع المرجعي عند النقر على الرابط، يحمي الخصوصية" },
                    { value: "external", description: "يشير إلى أن الرابط لموقع خارجي، قد يساعد محركات البحث" },
                    { value: "mask-icon", description: "يحدد أيقونة SVG أحادية اللون تظهر في شريط التبويبات على متصفح سفاري بألوان مخصصة" },
                    { value: "sitemap", description: "يربط بملف خريطة الموقع، يساعد محركات البحث في اكتشاف كل صفحات موقعك" },
                    { value: "shortlink", description: "يوفر رابطاً مختصراً بديلاً لنفس الصفحة" },
                    { value: "amphtml", description: "يربط بنسخة AMP (المتسارعة) من الصفحة، تُستخدم من محركات البحث لعرض نسخة أسرع على الجوال" },
                    { value: "me", description: "يربط بحساب أو هوية صاحب الموقع على منصة أخرى، يستخدم في التحقق اللامركزي من الهوية (IndieWeb)" },
                    { value: "webmention", description: "يحدد نقطة استقبال لإشعارات Webmention عندما يشير موقع آخر إلى صفحتك" },
                    { value: "pingback", description: "يحدد رابط خدمة Pingback لإشعار موقعك تلقائياً عند وجود رابط له من مدونة أخرى" },
                    { value: "chrome-webstore-item", description: "خاصية قديمة كانت تربط بصفحة إضافة كروم في المتجر لعرض زر تثبيت مباشر من الموقع (أُوقفت من جوجل)" },
                    { value: "profile", description: "يربط بملف تعريف يوضح الفئات (metadata profile) المستخدمة في وسوم meta بالصفحة" },
                    { value: "index", description: "يربط بالصفحة الرئيسية أو صفحة الفهرس في تسلسل مستندات مرتبطة" },
                    { value: "up", description: "يربط بالصفحة الأعلى في التسلسل الهرمي للمحتوى (مثل قسم يحتوي المقال الحالي)" },
                    { value: "bookmark", description: "يحدد رابطاً دائماً (Permalink) لعنصر داخل الصفحة، شائع في المدونات" },
                    { value: "tag", description: "يربط بصفحة تصنيف أو وسم يتبع له المحتوى الحالي" },
                    { value: "serviceworker", description: "يربط بـ Service Worker لتشغيل تطبيق PWA في الخلفية" }
                ]
            },
            // -------- href --------
            {
                name: "href",
                description: "يحدد مكان الملف أو الرابط الذي تريد ربطه بالصفحة",
                values: [
                    { value: "style.css", description: "يربط بملف في نفس مجلد الصفحة" },
                    { value: "/css/style.css", description: "يربط بملف في مجلد css داخل الموقع" },
                    { value: "https://example.com/style.css", description: "يربط بملف من موقع آخر (خارجي)" },
                    { value: "favicon.ico", description: "يربط بأيقونة الموقع" },
                    { value: "/manifest.json", description: "يربط بملف تطبيق PWA" },
                    { value: "https://fonts.googleapis.com/css2?family=...", description: "يربط بخطوط Google، يجلب الخطوط ويطبقها على الصفحة" }
                ],
                freeInput: true
            },
            // -------- type --------
            {
                name: "type",
                description: "يخبر المتصفح بنوع الملف الذي يربطه، يساعد في التعامل الصحيح معه",
                values: [
                    { value: "text/css", description: "ملف تنسيق CSS" },
                    { value: "text/javascript", description: "ملف سكريبت JavaScript" },
                    { value: "application/javascript", description: "ملف سكريبت JavaScript (صيغة بديلة)" },
                    { value: "image/x-icon", description: "ملف أيقونة بصيغة ico" },
                    { value: "image/png", description: "صورة بصيغة PNG" },
                    { value: "image/svg+xml", description: "صورة بصيغة SVG، تكبر وتصغر بدون تشويه" },
                    { value: "font/woff2", description: "خط مضغوط بصيغة WOFF2، أسرع في التحميل" },
                    { value: "font/woff", description: "خط بصيغة WOFF، صيغة قديمة ولكن مدعومة" },
                    { value: "application/json", description: "ملف بيانات JSON" },
                    { value: "application/manifest+json", description: "ملف تطبيق PWA" },
                    { value: "application/rss+xml", description: "ملف RSS للتغذية" },
                    { value: "application/atom+xml", description: "ملف Atom للتغذية" }
                ]
            },
            // -------- sizes --------
            {
                name: "sizes",
                description: "يحدد حجم الأيقونة، يساعد المتصفح في اختيار الحجم المناسب للشاشة",
                values: [
                    { value: "16x16", description: "أيقونة صغيرة جداً (تستخدم في تبويب المتصفح)" },
                    { value: "32x32", description: "أيقونة صغيرة (تستخدم في شريط المفضلة)" },
                    { value: "48x48", description: "أيقونة متوسطة صغيرة" },
                    { value: "64x64", description: "أيقونة متوسطة" },
                    { value: "128x128", description: "أيقونة كبيرة" },
                    { value: "256x256", description: "أيقونة كبيرة جداً" },
                    { value: "512x512", description: "أيقونة تطبيق PWA، تظهر في متجر التطبيقات" },
                    { value: "any", description: "أيقونة SVG تتكيف مع أي حجم بدون تشويه" }
                ]
            },
            // -------- media --------
            {
                name: "media",
                description: "يحدد متى يتم تطبيق هذا الملف، يمنع تحميل ملفات غير ضرورية على جهاز معين",
                values: [
                    { value: "all", description: "يطبق الملف على جميع الأجهزة" },
                    { value: "print", description: "يطبق الملف فقط عند طباعة الصفحة" },
                    { value: "screen", description: "يطبق الملف فقط على شاشات العرض (كمبيوتر، جوال، تابلت)" },
                    { value: "speech", description: "يطبق الملف فقط على قارئات النص للمكفوفين" },
                    { value: "(max-width: 768px)", description: "يطبق الملف فقط على الشاشات الصغيرة (أقل من 768px) مثل الجوالات" },
                    { value: "(min-width: 769px)", description: "يطبق الملف فقط على الشاشات الكبيرة (أكبر من 769px) مثل الكمبيوتر" },
                    { value: "(orientation: portrait)", description: "يطبق الملف فقط عندما يكون الجهاز عمودياً (جوال)" },
                    { value: "(orientation: landscape)", description: "يطبق الملف فقط عندما يكون الجهاز أفقياً (كمبيوتر أو تابلت)" },
                    { value: "(max-width: 480px)", description: "يطبق الملف فقط على الشاشات الصغيرة جداً" },
                    { value: "(min-width: 1024px)", description: "يطبق الملف فقط على الشاشات الكبيرة جداً" }
                ],
                freeInput: true
            },
            // -------- as --------
            {
                name: "as",
                description: "عند استخدام preload، يحدد نوع الملف ليعطيه المتصفح الأولوية المناسبة",
                values: [
                    { value: "audio", description: "ملف صوتي، يعطيه أولوية تحميل الصوت" },
                    { value: "document", description: "مستند HTML، يعطيه أولوية تحميل الصفحة" },
                    { value: "embed", description: "محتوى مضمّن (فلاش أو PDF)" },
                    { value: "fetch", description: "طلب بيانات من الخادم (API)" },
                    { value: "font", description: "خط، يعطيه أولوية عالية لأن النصوص تحتاجه" },
                    { value: "image", description: "صورة، يعطيها أولوية متوسطة" },
                    { value: "object", description: "كائن خارجي" },
                    { value: "script", description: "ملف JavaScript، يعطيه أولوية لتنفيذ الأوامر مبكراً" },
                    { value: "style", description: "ملف CSS، يعطيه أولوية عالية لأن شكل الصفحة يعتمد عليه" },
                    { value: "track", description: "مسار ترجمة لفيديو" },
                    { value: "video", description: "ملف فيديو" },
                    { value: "worker", description: "ملف Service Worker لتشغيل تطبيق PWA" }
                ]
            },
            // -------- crossorigin --------
            {
                name: "crossorigin",
                description: "عند تحميل ملف من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
                values: [
                    { value: "anonymous", description: "لا يرسل أي معلومات عن المستخدم للموقع الآخر (كوكيز، هوية)" },
                    { value: "use-credentials", description: "يرسل معلومات المستخدم (كوكيز، هوية) للموقع الآخر إذا كان يثق به" }
                ]
            },
            // -------- integrity --------
            {
                name: "integrity",
                description: "يتحقق من أن الملف لم يتغير أو يُخترق، يحمي من هجمات التلاعب بالملفات",
                values: [
                    { value: "sha256-...", description: "يستخدم خوارزمية SHA-256 للتحقق، يمنع تحميل ملف معدل" },
                    { value: "sha384-...", description: "يستخدم خوارزمية SHA-384 للتحقق، أكثر أماناً" },
                    { value: "sha512-...", description: "يستخدم خوارزمية SHA-512 للتحقق، الأكثر أماناً" }
                ],
                freeInput: true
            },
            // -------- importance --------
            {
                name: "importance",
                description: "يحدد أولوية تحميل الملف، مهم عند تحميل عدة ملفات في نفس الوقت",
                values: [
                    { value: "high", description: "يحمل هذا الملف أولاً وقبل كل شيء، مهم للصفحات التي تحتاج لمورد أساسي" },
                    { value: "low", description: "يؤجل تحميل هذا الملف، مناسب للملفات غير المهمة" },
                    { value: "auto", description: "يترك المتصفح يقرر الأولوية (افتراضي)" }
                ]
            },
            // -------- fetchpriority --------
            {
                name: "fetchpriority",
                description: "يحدد أولوية تحميل الملف مقارنة بباقي الموارد، النسخة الحديثة التي حلّت محل importance في المتصفحات الجديدة",
                values: [
                    { value: "high", description: "يعطي الملف أولوية عالية، يفيد في preload لخط أو صورة رئيسية" },
                    { value: "low", description: "يعطي الملف أولوية منخفضة، يفيد في الملفات غير الحرجة" },
                    { value: "auto", description: "يترك المتصفح يقرر الأولوية تلقائياً (افتراضي)" }
                ]
            },
            // -------- hreflang --------
            {
                name: "hreflang",
                description: "يحدد لغة الصفحة المرتبطة، يستخدم مع rel='alternate' لإخبار محركات البحث بالنسخ اللغوية المختلفة لنفس المحتوى",
                values: [
                    { value: "ar", description: "النسخة العربية من الصفحة" },
                    { value: "en", description: "النسخة الإنجليزية من الصفحة" },
                    { value: "fr", description: "النسخة الفرنسية من الصفحة" },
                    { value: "en-US", description: "النسخة الإنجليزية الخاصة بالولايات المتحدة تحديداً" },
                    { value: "ar-SA", description: "النسخة العربية الخاصة بالسعودية تحديداً" },
                    { value: "x-default", description: "النسخة الافتراضية التي تظهر للزوار عندما لا تتطابق لغتهم مع أي نسخة محددة" },
                    { value: "es", description: "النسخة الإسبانية" },
                    { value: "de", description: "النسخة الألمانية" },
                    { value: "it", description: "النسخة الإيطالية" },
                    { value: "pt", description: "النسخة البرتغالية" },
                    { value: "ru", description: "النسخة الروسية" },
                    { value: "ja", description: "النسخة اليابانية" },
                    { value: "zh", description: "النسخة الصينية" },
                    { value: "ko", description: "النسخة الكورية" },
                    { value: "hi", description: "النسخة الهندية" }
                ],
                freeInput: true
            },
            // -------- title --------
            {
                name: "title",
                description: "يحدد اسماً وصفياً للملف المرتبط، يُستخدم خصوصاً مع أوراق الأنماط البديلة ليختار المستخدم بينها من قائمة عرض المتصفح",
                values: [
                    { value: "الوضع الافتراضي", description: "اسم يظهر للمستخدم يصف ورقة الأنماط هذه، مثل 'الوضع الداكن' أو 'خط كبير'" }
                ],
                freeInput: true
            },
            // -------- disabled --------
            {
                name: "disabled",
                description: "يمنع تطبيق ورقة الأنماط هذه مبدئياً، يفيد عند وجود عدة أنماط بديلة يتحكم بها المستخدم عبر جافاسكريبت",
                values: [
                    { value: "", description: "يعطّل ورقة الأنماط عند تحميل الصفحة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- color --------
            {
                name: "color",
                description: "يحدد لون أيقونة SVG أحادية اللون التي تظهر في شريط التبويبات على متصفح سفاري، يستخدم مع rel='mask-icon'",
                values: [
                    { value: "#5bbad5", description: "لون سماوي فاتح، مثال شائع في أدوات توليد الأيقونات" },
                    { value: "#000000", description: "لون أسود، يستخدم لأيقونة بسيطة عالية التباين" },
                    { value: "#ffffff", description: "لون أبيض، يستخدم في الخلفيات الداكنة" },
                    { value: "#ff0000", description: "لون أحمر" },
                    { value: "#3498db", description: "لون أزرق" }
                ],
                freeInput: true
            },
            // -------- referrerpolicy --------
            {
                name: "referrerpolicy",
                description: "يحدد مقدار معلومات الصفحة الحالية التي تُرسل عند تحميل الملف المرتبط من موقع آخر، يحمي الخصوصية",
                values: [
                    { value: "no-referrer", description: "لا يرسل أي معلومات عن الصفحة الحالية" },
                    { value: "no-referrer-when-downgrade", description: "يرسل المعلومات فقط إذا كان الموقع الآخر آمن (HTTPS)" },
                    { value: "origin", description: "يرسل اسم الموقع فقط (مثل example.com) وليس الرابط كاملاً" },
                    { value: "origin-when-cross-origin", description: "يرسل اسم الموقع فقط للمواقع الأخرى، والرابط كاملاً لنفس الموقع" },
                    { value: "same-origin", description: "يرسل المعلومات فقط إذا كان الملف من نفس الموقع" },
                    { value: "strict-origin", description: "يرسل اسم الموقع فقط، ولا يرسل إذا كان الموقع الآخر غير آمن" },
                    { value: "strict-origin-when-cross-origin", description: "يرسل اسم الموقع للمواقع الأخرى، والرابط كاملاً لنفس الموقع (السلوك الافتراضي في المتصفحات الحديثة)" },
                    { value: "unsafe-url", description: "يرسل الرابط كاملاً دائماً (غير آمن)" }
                ]
            }
        ]
    },

    // ============================================================
    // 3. عنصر <style>
    // ============================================================
    {
        tag: "style",
        description: "يسمح بكتابة أكواد CSS مباشرة داخل الصفحة لتنسيقها وتغيير ألوانها وخطوطها وأحجامها دون الحاجة لملف خارجي",
        attributes: [
            // -------- type --------
            {
                name: "type",
                description: "يخبر المتصفح بأن هذا الكود هو CSS ليتم تطبيقه على الصفحة",
                values: [
                    { value: "text/css", description: "كود CSS عادي (قيمته الافتراضية، يمكن حذفها)" }
                ]
            },
            // -------- media --------
            {
                name: "media",
                description: "يحدد متى يتم تطبيق هذه الأكواد، يمنع تطبيقها على أجهزة لا تحتاجها",
                values: [
                    { value: "all", description: "يطبق على جميع الأجهزة" },
                    { value: "print", description: "يطبق فقط عند الطباعة، مثلاً يغير الألوان ويخفي القوائم" },
                    { value: "screen", description: "يطبق فقط على الشاشات (كمبيوتر، جوال، تابلت)" },
                    { value: "speech", description: "يطبق فقط على قارئات النص للمكفوفين" },
                    { value: "(max-width: 768px)", description: "يطبق فقط على الشاشات الصغيرة" },
                    { value: "(min-width: 769px)", description: "يطبق فقط على الشاشات الكبيرة" }
                ]
            },
            // -------- nonce --------
            {
                name: "nonce",
                description: "يحدد رمزاً عشوائياً فريداً يُنشأ من الخادم مع كل تحميل للصفحة، يستخدم مع سياسة أمان المحتوى (CSP) للسماح بتطبيق هذا النمط تحديداً دون غيره",
                values: [
                    { value: "rAnd0mN0nceValue==", description: "مثال على رمز عشوائي، يجب أن يتطابق مع الرمز المذكور في رأس Content-Security-Policy" }
                ],
                freeInput: true
            },
            // -------- title --------
            {
                name: "title",
                description: "يحدد اسماً للورقة النمطية، يستخدم مع أوراق الأنماط البديلة لتمييزها",
                values: [
                    { value: "الوضع الداكن", description: "اسم ورقة الأنماط الداكنة" },
                    { value: "الوضع الفاتح", description: "اسم ورقة الأنماط الفاتحة" },
                    { value: "نسخة الطباعة", description: "اسم ورقة أنماط الطباعة" }
                ],
                freeInput: true
            },
            // -------- blocking --------
            {
                name: "blocking",
                description: "يمنع عرض الصفحة حتى يتم تطبيق هذه الأنماط بالكامل، يمنع ظهور الصفحة بدون تنسيق",
                values: [
                    { value: "render", description: "يمنع عرض الصفحة حتى تطبيق الأنماط" }
                ]
            }
        ]
    },

    // ============================================================
    // 4. عنصر <title>
    // ============================================================
    {
        tag: "title",
        description: "يحدد النص الذي يظهر في تبويب المتصفح، يساعد المستخدم في معرفة الصفحة ويساعد محركات البحث في فهم محتواها",
        attributes: [
            {
                name: "dir",
                description: "يحدد اتجاه النص في عنوان الصفحة",
                values: [
                    { value: "ltr", description: "من اليسار إلى اليمين (للغة الإنجليزية)" },
                    { value: "rtl", description: "من اليمين إلى اليسار (للغة العربية)" }
                ]
            },
            {
                name: "lang",
                description: "يحدد لغة عنوان الصفحة",
                values: [
                    { value: "ar", description: "لغة عربية" },
                    { value: "en", description: "لغة إنجليزية" }
                ],
                freeInput: true
            }
        ]
    },

    // ============================================================
    // 5. عنصر <base>
    // ============================================================
    {
        tag: "base",
        description: "يحدد رابطاً أساسياً يُضاف تلقائياً أمام كل رابط نسبي في الصفحة، يوفر عليك كتابة الرابط الكامل كل مرة",
        attributes: [
            // -------- href --------
            {
                name: "href",
                description: "يحدد رابطاً أساسياً يُضاف تلقائياً أمام كل رابط نسبي في الصفحة",
                values: [
                    { value: "https://example.com/", description: "جميع الروابط ستبدأ بهذا الرابط، مثلاً '/about' تصبح 'https://example.com/about'" },
                    { value: "https://example.com/folder/", description: "جميع الروابط ستبدأ بهذا المجلد" },
                    { value: "/", description: "جميع الروابط ستبدأ من جذر الموقع، مثلاً 'about.html' تصبح '/about.html'" },
                    { value: "./", description: "جميع الروابط ستبدأ من المجلد الحالي" },
                    { value: "../", description: "جميع الروابط ستبدأ من المجلد السابق" }
                ],
                freeInput: true
            },
            // -------- target --------
            {
                name: "target",
                description: "يحدد كيف تفتح جميع الروابط في الصفحة تلقائياً، يوفر عليك كتابة target لكل رابط",
                values: [
                    { value: "_blank", description: "يفتح جميع الروابط في نافذة أو تبويب جديد" },
                    { value: "_self", description: "يفتح جميع الروابط في نفس النافذة (افتراضي)" },
                    { value: "_parent", description: "يفتح جميع الروابط في الإطار الأب (إذا كانت الصفحة داخل إطار)" },
                    { value: "_top", description: "يفتح جميع الروابط في أعلى نافذة (يكسر الإطارات)" }
                ]
            }
        ]
    },

    // ============================================================
    // 6. عنصر <script>
    // ============================================================
    {
        tag: "script",
        description: "يضيف كود JavaScript إما مباشرة أو عن طريق ملف خارجي، يجعل الصفحة تفاعلية وتستجيب لأوامر المستخدم",
        attributes: [
            // -------- type --------
            {
                name: "type",
                description: "يحدد نوع الكود الذي ستكتبه، يغير كيفية تعامل المتصفح معه",
                values: [
                    { value: "text/javascript", description: "كود JavaScript عادي (افتراضي)" },
                    { value: "module", description: "كود JavaScript باستخدام نظام الوحدات، يسمح باستيراد وتصدير الأكواد" },
                    { value: "importmap", description: "يحدد أسماء مختصرة لوحدات JavaScript، يسهل كتابة الأكواد المعقدة" },
                    { value: "speculationrules", description: "يحدد قواعد لتحميل الصفحات مسبقاً، يسرع التنقل داخل الموقع" },
                    { value: "application/json", description: "بيانات JSON، يفيد في تخزين إعدادات" },
                    { value: "application/wasm", description: "كود WebAssembly، يشغل أكواد بلغات أخرى (C++, Rust) بسرعة عالية في المتصفح" },
                    { value: "text/plain", description: "نص عادي، يتجاهله المتصفح" },
                    { value: "text/html", description: "كود HTML، يتجاهله المتصفح" }
                ]
            },
            // -------- src --------
            {
                name: "src",
                description: "يربط بملف JavaScript خارجي بدل كتابة الكود داخل الصفحة، ينظم الأكواد ويجعلها قابلة لإعادة الاستخدام",
                values: [
                    { value: "app.js", description: "يربط بملف في نفس المجلد" },
                    { value: "/js/app.js", description: "يربط بملف في مجلد js" },
                    { value: "https://cdn.example.com/library.js", description: "يربط بملف من شبكة توزيع محتوى (CDN)، يحمله بسرعة ويوفر عليك رفعه" }
                ],
                freeInput: true
            },
            // -------- async --------
            {
                name: "async",
                description: "يحمل السكريبت في الخلفية أثناء تحميل الصفحة، وعندما ينتهي التحميل ينفذه فوراً، لا يمنع ظهور الصفحة",
                values: [
                    { value: "", description: "يفعّل التحميل غير المتزامن (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- defer --------
            {
                name: "defer",
                description: "يحمل السكريبت في الخلفية ويؤخر تنفيذه حتى تنتهي الصفحة من التحميل، يضمن ظهور الصفحة أولاً ثم تنفيذ الأكواد",
                values: [
                    { value: "", description: "يفعّل تأخير التنفيذ (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- nomodule --------
            {
                name: "nomodule",
                description: "يمنع تنفيذ السكريبت في المتصفحات الحديثة التي تدعم الوحدات، يستخدم لتشغيل كود بديل للمتصفحات القديمة",
                values: [
                    { value: "", description: "يفعّل (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            // -------- crossorigin --------
            {
                name: "crossorigin",
                description: "عند تحميل سكريبت من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
                values: [
                    { value: "anonymous", description: "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر" },
                    { value: "use-credentials", description: "يرسل معلومات المستخدم (كوكيز، هوية) للموقع الآخر إذا كان يثق به" }
                ]
            },
            // -------- integrity --------
            {
                name: "integrity",
                description: "يتحقق من أن ملف السكريبت لم يتغير أو يُخترق، يحمي من هجمات التلاعب بالملفات المستوردة",
                values: [
                    { value: "sha256-...", description: "يتحقق باستخدام SHA-256، يمنع تشغيل ملف معدل" },
                    { value: "sha384-...", description: "يتحقق باستخدام SHA-384، أكثر أماناً" },
                    { value: "sha512-...", description: "يتحقق باستخدام SHA-512، الأكثر أماناً" }
                ],
                freeInput: true
            },
            // -------- referrerpolicy --------
            {
                name: "referrerpolicy",
                description: "يحدد هل يرسل المتصفح عنوان الصفحة الحالية للموقع الآخر عند تحميل السكريبت، يحمي الخصوصية",
                values: [
                    { value: "no-referrer", description: "لا يرسل أي معلومات عن الصفحة الحالية، يخفي المصدر تماماً" },
                    { value: "no-referrer-when-downgrade", description: "يرسل المعلومات فقط إذا كان الموقع الآخر آمن (HTTPS)" },
                    { value: "origin", description: "يرسل اسم الموقع فقط (مثل example.com) وليس الرابط كاملاً" },
                    { value: "origin-when-cross-origin", description: "يرسل اسم الموقع فقط للمواقع الأخرى، والرابط كاملاً لنفس الموقع" },
                    { value: "same-origin", description: "يرسل المعلومات فقط إذا كان الموقع الآخر هو نفس الموقع" },
                    { value: "strict-origin", description: "يرسل اسم الموقع فقط، ولا يرسل إذا كان الموقع الآخر غير آمن" },
                    { value: "strict-origin-when-cross-origin", description: "يرسل اسم الموقع للمواقع الأخرى، والرابط كاملاً لنفس الموقع" },
                    { value: "unsafe-url", description: "يرسل الرابط كاملاً (غير آمن، قد يكشف معلومات حساسة)" }
                ]
            },
            // -------- fetchpriority --------
            {
                name: "fetchpriority",
                description: "يحدد أولوية تحميل ملف السكريبت مقارنة بباقي موارد الصفحة",
                values: [
                    { value: "high", description: "يحمّل السكريبت بأولوية عالية، يفيد الأكواد المهمة لظهور الصفحة" },
                    { value: "low", description: "يؤجل أولوية تحميل السكريبت، يفيد الأكواد غير الحرجة" },
                    { value: "auto", description: "يترك المتصفح يقرر الأولوية تلقائياً (افتراضي)" }
                ]
            },
            // -------- blocking --------
            {
                name: "blocking",
                description: "يجبر المتصفح على تأخير عرض الصفحة حتى ينتهي تحميل هذا السكريبت، عكس async وdefer",
                values: [
                    { value: "render", description: "يمنع عرض الصفحة حتى يتم تحميل وتنفيذ السكريبت بالكامل" }
                ]
            },
            // -------- nonce --------
            {
                name: "nonce",
                description: "يحدد رمزاً عشوائياً فريداً يُنشأ من الخادم مع كل تحميل للصفحة، يستخدم مع سياسة أمان المحتوى (CSP) للسماح بتنفيذ هذا السكريبت تحديداً دون غيره",
                values: [
                    { value: "rAnd0mN0nceValue==", description: "مثال على رمز عشوائي، يجب أن يتطابق مع الرمز المذكور في رأس Content-Security-Policy" }
                ],
                freeInput: true
            },
            // -------- charset --------
            {
                name: "charset",
                description: "خاصية قديمة تحدد ترميز ملف السكريبت الخارجي، أصبحت غير ضرورية لأن المتصفحات الحديثة تعتمد على ترميز الصفحة نفسها (UTF-8)",
                values: [
                    { value: "UTF-8", description: "الترميز الموصى به دوماً" }
                ]
            },
            // -------- language --------
            {
                name: "language",
                description: "خاصية قديمة جداً كانت تحدد لغة السكريبت، استُبدلت بـ type",
                values: [
                    { value: "JavaScript", description: "لغة جافا سكريبت" },
                    { value: "VBScript", description: "لغة VBScript (لمتصفح IE القديم)" }
                ]
            }
        ]
    },

    // ============================================================
    // 7. عنصر <noscript>
    // ============================================================
    {
        tag: "noscript",
        description: "يعرض محتوى بديلاً فقط عندما يكون JavaScript معطلاً في المتصفح، يعطي المستخدم تحذيراً أو بديلاً عن المحتوى التفاعلي",
        attributes: []
    },

    // ============================================================
    // 8. عنصر <template>
    // ============================================================
    {
        tag: "template",
        description: "يخزن قالب HTML مخفي لا يظهر في الصفحة، يستخدم لإنشاء عناصر HTML متكررة بواسطة JavaScript دون تكرار الكود",
        attributes: [
            {
                name: "shadowrootmode",
                description: "يحوّل القالب مباشرة إلى Shadow DOM معلن (Declarative Shadow DOM) للعنصر الأب دون الحاجة لـ JavaScript",
                values: [
                    { value: "open", description: "يسمح بالوصول إلى الـ Shadow DOM من JavaScript خارج العنصر" },
                    { value: "closed", description: "يمنع الوصول إلى الـ Shadow DOM من خارج العنصر" }
                ]
            },
            {
                name: "shadowrootclonable",
                description: "يحدد ما إذا كان يمكن نسخ جذر Shadow DOM أو لا",
                values: [
                    { value: "", description: "يجعل Shadow DOM قابلاً للنسخ (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "shadowrootdelegatesfocus",
                description: "يسمح لعناصر داخل Shadow DOM بأن تأخذ التركيز بدلاً من العنصر الأب",
                values: [
                    { value: "", description: "يفعّل تفويض التركيز (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // ============================================================
    // 9. عنصر <slot>
    // ============================================================
    {
        tag: "slot",
        description: "يحدد مكاناً في قالب المكون يمكنك إدخال محتوى مخصص فيه، يسهل إنشاء مكونات ويب قابلة لإعادة الاستخدام",
        attributes: [
            // -------- name --------
            {
                name: "name",
                description: "يحدد اسم الفتحة التي ستستقبل المحتوى المخصص في المكون",
                values: [
                    { value: "header", description: "فتحة مخصصة لوضع محتوى في أعلى المكون" },
                    { value: "content", description: "فتحة مخصصة لوضع المحتوى الرئيسي" },
                    { value: "footer", description: "فتحة مخصصة لوضع محتوى في أسفل المكون" },
                    { value: "sidebar", description: "فتحة مخصصة للشريط الجانبي" },
                    { value: "main", description: "فتحة مخصصة للمحتوى الرئيسي" }
                ],
                freeInput: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.headData = headData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = headData;
}