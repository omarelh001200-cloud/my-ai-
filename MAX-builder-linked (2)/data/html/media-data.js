// ============================================================
// media-data.js
// عناصر الوسائط المتعددة (الصور، الفيديو، الصوت، الخرائط)
// شرح الوظيفة (ماذا يفعل) وليس المعنى
// ============================================================

const mediaData = [
    // ============================================================
    // عناصر الوسائط المتعددة الأساسية
    // ============================================================

    // -------- img --------
    {
        tag: "img",
        description: "يضيف صورة إلى الصفحة، يعرض محتوى بصرياً مثل الصور الفوتوغرافية، الرسومات، أو الأيقونات",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار ملف الصورة، يخبر المتصفح أين يجد الصورة لعرضها في الصفحة",
                values: [
                    { value: "image.jpg", description: "صورة في نفس مجلد الصفحة" },
                    { value: "image.png", description: "صورة PNG في نفس المجلد" },
                    { value: "image.webp", description: "صورة WebP في نفس المجلد" },
                    { value: "image.gif", description: "صورة GIF في نفس المجلد" },
                    { value: "image.svg", description: "صورة SVG في نفس المجلد" },
                    { value: "/images/photo.png", description: "صورة في مجلد images" },
                    { value: "/assets/img/logo.jpg", description: "صورة في مجلد assets/img" },
                    { value: "https://example.com/pic.webp", description: "صورة من موقع آخر" },
                    { value: "data:image/png;base64,iVBORw0KGgo...", description: "صورة بصيغة Base64" }
                ],
                freeInput: true
            },
            {
                name: "alt",
                description: "يضيف نصاً بديلاً للصورة يظهر عندما لا تستطيع التحميل، يساعد المكفوفين ومحركات البحث في فهم محتوى الصورة",
                values: [
                    { value: "وصف الصورة", description: "نص يصف محتوى الصورة" },
                    { value: "شعار الشركة", description: "نص وصفي للشعار" },
                    { value: "صورة منتج", description: "نص وصفي للمنتج" },
                    { value: "رسم بياني يوضح المبيعات", description: "نص وصفي للرسم البياني" },
                    { value: "", description: "نص بديل فارغ للصور الزخرفية" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الصورة بالبكسل، يمنع الصورة من التسبب في تغيير حجم الصفحة أثناء التحميل",
                values: [
                    { value: "10", description: "عرض 10 بكسل" },
                    { value: "20", description: "عرض 20 بكسل" },
                    { value: "30", description: "عرض 30 بكسل" },
                    { value: "40", description: "عرض 40 بكسل" },
                    { value: "50", description: "عرض 50 بكسل" },
                    { value: "100", description: "عرض 100 بكسل" },
                    { value: "150", description: "عرض 150 بكسل" },
                    { value: "200", description: "عرض 200 بكسل" },
                    { value: "300", description: "عرض 300 بكسل" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" },
                    { value: "800", description: "عرض 800 بكسل" },
                    { value: "1000", description: "عرض 1000 بكسل" },
                    { value: "1200", description: "عرض 1200 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع الصورة بالبكسل، يحافظ على تناسق تخطيط الصفحة أثناء تحميل الصور",
                values: [
                    { value: "10", description: "ارتفاع 10 بكسل" },
                    { value: "20", description: "ارتفاع 20 بكسل" },
                    { value: "30", description: "ارتفاع 30 بكسل" },
                    { value: "40", description: "ارتفاع 40 بكسل" },
                    { value: "50", description: "ارتفاع 50 بكسل" },
                    { value: "100", description: "ارتفاع 100 بكسل" },
                    { value: "150", description: "ارتفاع 150 بكسل" },
                    { value: "200", description: "ارتفاع 200 بكسل" },
                    { value: "300", description: "ارتفاع 300 بكسل" },
                    { value: "400", description: "ارتفاع 400 بكسل" },
                    { value: "500", description: "ارتفاع 500 بكسل" },
                    { value: "600", description: "ارتفاع 600 بكسل" },
                    { value: "800", description: "ارتفاع 800 بكسل" },
                    { value: "1000", description: "ارتفاع 1000 بكسل" },
                    { value: "1200", description: "ارتفاع 1200 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "loading",
                description: "يحدد متى يتم تحميل الصورة، يؤخر تحميل الصور غير الظاهرة لتسريع ظهور الصفحة",
                values: [
                    { value: "lazy", description: "يؤخر تحميل الصورة حتى يقترب المستخدم من مكانها، يسرع تحميل الصفحة" },
                    { value: "eager", description: "يحمل الصورة فوراً بغض النظر عن مكانها (الافتراضي)" }
                ]
            },
            {
                name: "srcset",
                description: "يوفر عدة أحجام من الصورة، يسمح للمتصفح باختيار الحجم المناسب حسب شاشة المستخدم، يوفر البيانات",
                values: [
                    { value: "image- small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w", description: "أحجام مختلفة للصورة" },
                    { value: "photo-320w.jpg 320w, photo-640w.jpg 640w, photo-1280w.jpg 1280w", description: "أحجام مختلفة" },
                    { value: "icon-16.png 16w, icon-32.png 32w, icon-64.png 64w", description: "أيقونات بأحجام مختلفة" }
                ],
                freeInput: true
            },
            {
                name: "sizes",
                description: "يحدد حجم عرض الصورة حسب حجم الشاشة، يعمل مع srcset لاختيار الصورة المناسبة",
                values: [
                    { value: "(max-width: 600px) 480px, 800px", description: "حجم الصورة حسب عرض الشاشة" },
                    { value: "(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw", description: "أحجام متعددة" },
                    { value: "100vw", description: "عرض كامل الشاشة" },
                    { value: "50vw", description: "نصف عرض الشاشة" }
                ],
                freeInput: true
            },
            {
                name: "usemap",
                description: "يربط الصورة بخريطة تفاعلية معرّفة بعنصر map، يفعّل المناطق القابلة للنقر على الصورة",
                values: [
                    { value: "#map1", description: "يربط الصورة بالخريطة ذات الاسم map1" },
                    { value: "#map2", description: "يربط الصورة بالخريطة ذات الاسم map2" },
                    { value: "#map", description: "يربط الصورة بالخريطة ذات الاسم map" }
                ],
                freeInput: true
            },
            {
                name: "ismap",
                description: "يجعل الصورة كاملة قابلة للنقر كخريطة من جانب الخادم، يرسل إحداثيات النقرة للخادم (نادر الاستخدام حالياً)",
                values: [
                    { value: "", description: "يفعّل خاصية خريطة الخادم (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "crossorigin",
                description: "عند تحميل صورة من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
                values: [
                    { value: "anonymous", description: "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر" },
                    { value: "use-credentials", description: "يرسل معلومات المستخدم للموقع الآخر إذا كان يثق به" }
                ]
            },
            {
                name: "decoding",
                description: "يحدد كيف يفك المتصفح تشفير الصورة، يتحكم في توقيت ظهورها بالنسبة لباقي محتوى الصفحة",
                values: [
                    { value: "sync", description: "يفك تشفير الصورة فوراً، قد يؤخر ظهور بقية المحتوى" },
                    { value: "async", description: "يفك تشفير الصورة في الخلفية دون تأخير عرض بقية الصفحة" },
                    { value: "auto", description: "يترك المتصفح يقرر الطريقة الأنسب (افتراضي)" }
                ]
            },
            {
                name: "title",
                description: "يضيف تلميحاً يظهر عند تمرير الماوس فوق الصورة، يوضح معلومات إضافية عن الصورة",
                values: [
                    { value: "صورة المنتج رقم 1", description: "تلميح للصورة" },
                    { value: "اضغط للتكبير", description: "تلميح تفاعلي" }
                ],
                freeInput: true
            },
            {
                name: "style",
                description: "يضيف تنسيقاً مباشراً على الصورة (CSS)، يتحكم في مظهر الصورة",
                values: [
                    { value: "border: 2px solid red;", description: "إطار أحمر حول الصورة" },
                    { value: "border-radius: 50%;", description: "صورة دائرية" }
                ],
                freeInput: true
            },
            {
                name: "class",
                description: "يضيف فئة (class) للصورة، يمكن استهدافها بواسطة CSS أو JavaScript",
                values: [
                    { value: "product-image", description: "فئة صورة المنتج" },
                    { value: "logo", description: "فئة الشعار" },
                    { value: "responsive", description: "فئة الصورة المتجاوبة" }
                ],
                freeInput: true
            },
            {
                name: "id",
                description: "يضيف معرفاً فريداً للصورة، يمكن استهدافها بواسطة CSS أو JavaScript",
                values: [
                    { value: "main-image", description: "معرف الصورة الرئيسية" },
                    { value: "profile-pic", description: "معرف صورة الملف الشخصي" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- video --------
    {
        tag: "video",
        description: "يضيف فيديو إلى الصفحة مع عناصر تحكم للتشغيل والإيقاف وضبط الصوت، يعرض محتوى مرئي متحرك",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار ملف الفيديو، يخبر المتصفح أين يجد الفيديو لتشغيله",
                values: [
                    { value: "video.mp4", description: "فيديو في نفس مجلد الصفحة" },
                    { value: "video.webm", description: "فيديو بصيغة WebM" },
                    { value: "video.ogv", description: "فيديو بصيغة OGV" },
                    { value: "/videos/clip.mp4", description: "فيديو في مجلد videos" },
                    { value: "/assets/videos/movie.webm", description: "فيديو في مجلد assets/videos" },
                    { value: "https://example.com/video.mp4", description: "فيديو من موقع آخر" }
                ],
                freeInput: true
            },
            {
                name: "controls",
                description: "يعرض أزرار التحكم في الفيديو (تشغيل، إيقاف، صوت، تكبير)، يسمح للمستخدم بالتحكم في التشغيل",
                values: [
                    { value: "", description: "يعرض أزرار التحكم (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "autoplay",
                description: "يشغل الفيديو تلقائياً عند تحميل الصفحة، يجذب انتباه المستخدم فوراً (قد لا يعمل في بعض المتصفحات)",
                values: [
                    { value: "", description: "يشغل تلقائياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "loop",
                description: "يعيد تشغيل الفيديو تلقائياً عند انتهائه، يكرر المحتوى باستمرار مثل الفيديوهات القصيرة",
                values: [
                    { value: "", description: "يعيد التشغيل تلقائياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "muted",
                description: "يكتم صوت الفيديو عند التشغيل، مفيد للفيديوهات التي تشغل تلقائياً لتجنب إزعاج المستخدم",
                values: [
                    { value: "", description: "يكتم الصوت (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "poster",
                description: "يعرض صورة ثابتة قبل تشغيل الفيديو، توحي بمحتوى الفيديو وتجذب المستخدم للضغط للتشغيل",
                values: [
                    { value: "poster.jpg", description: "صورة غلاف الفيديو" },
                    { value: "cover.png", description: "صورة غلاف" },
                    { value: "/images/poster.webp", description: "صورة غلاف في مجلد images" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الفيديو بالبكسل، يتحكم في حجم الفيديو المعروض في الصفحة",
                values: [
                    { value: "320", description: "عرض 320 بكسل" },
                    { value: "480", description: "عرض 480 بكسل" },
                    { value: "640", description: "عرض 640 بكسل" },
                    { value: "720", description: "عرض 720 بكسل" },
                    { value: "854", description: "عرض 854 بكسل" },
                    { value: "960", description: "عرض 960 بكسل" },
                    { value: "1280", description: "عرض 1280 بكسل" },
                    { value: "1920", description: "عرض 1920 بكسل" },
                    { value: "100%", description: "عرض كامل (نسبة مئوية)" },
                    { value: "50%", description: "نصف العرض (نسبة مئوية)" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع الفيديو بالبكسل، يحافظ على نسب العرض إلى الارتفاع",
                values: [
                    { value: "180", description: "ارتفاع 180 بكسل" },
                    { value: "240", description: "ارتفاع 240 بكسل" },
                    { value: "360", description: "ارتفاع 360 بكسل" },
                    { value: "480", description: "ارتفاع 480 بكسل" },
                    { value: "540", description: "ارتفاع 540 بكسل" },
                    { value: "720", description: "ارتفاع 720 بكسل" },
                    { value: "1080", description: "ارتفاع 1080 بكسل" },
                    { value: "100%", description: "ارتفاع كامل (نسبة مئوية)" },
                    { value: "50%", description: "نصف الارتفاع (نسبة مئوية)" }
                ],
                freeInput: true
            },
            {
                name: "playsinline",
                description: "يمنع الفيديو من الدخول في وضع ملء الشاشة على الجوال، يجعله يعمل داخل الصفحة مباشرة",
                values: [
                    { value: "", description: "يمنع ملء الشاشة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "preload",
                description: "يخبر المتصفح كم من الفيديو يحمّل مسبقاً قبل أن يضغط المستخدم للتشغيل",
                values: [
                    { value: "auto", description: "يحمّل الفيديو كاملاً مسبقاً إذا كان جهاز المستخدم يسمح بذلك" },
                    { value: "metadata", description: "يحمّل فقط معلومات الفيديو (المدة، الأبعاد) دون محتواه" },
                    { value: "none", description: "لا يحمّل شيئاً حتى يضغط المستخدم للتشغيل، يوفر البيانات" }
                ]
            },
            {
                name: "crossorigin",
                description: "عند تحميل فيديو من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
                values: [
                    { value: "anonymous", description: "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر" },
                    { value: "use-credentials", description: "يرسل معلومات المستخدم للموقع الآخر إذا كان يثق به" }
                ]
            },
            {
                name: "disablePictureInPicture",
                description: "يمنع الفيديو من الدخول في وضع الصورة داخل الصورة (Picture-in-Picture)",
                values: [
                    { value: "", description: "يمنع وضع الصورة داخل الصورة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "disableRemotePlayback",
                description: "يمنع الفيديو من البث على أجهزة أخرى عن بعد (Chromecast، AirPlay)",
                values: [
                    { value: "", description: "يمنع البث عن بعد (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // -------- audio --------
    {
        tag: "audio",
        description: "يضيف ملفاً صوتياً إلى الصفحة مع عناصر تحكم للتشغيل والإيقاف وضبط مستوى الصوت",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار ملف الصوت، يخبر المتصفح أين يجد الملف الصوتي لتشغيله",
                values: [
                    { value: "audio.mp3", description: "ملف صوتي في نفس مجلد الصفحة" },
                    { value: "audio.ogg", description: "ملف صوتي بصيغة OGG" },
                    { value: "audio.wav", description: "ملف صوتي بصيغة WAV" },
                    { value: "audio.aac", description: "ملف صوتي بصيغة AAC" },
                    { value: "/sounds/song.mp3", description: "ملف صوتي في مجلد sounds" },
                    { value: "/assets/audio/music.ogg", description: "ملف صوتي في مجلد assets/audio" },
                    { value: "https://example.com/audio.mp3", description: "ملف صوتي من موقع آخر" }
                ],
                freeInput: true
            },
            {
                name: "controls",
                description: "يعرض أزرار التحكم في الصوت (تشغيل، إيقاف، صوت)، يسمح للمستخدم بالتحكم في التشغيل",
                values: [
                    { value: "", description: "يعرض أزرار التحكم (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "autoplay",
                description: "يشغل الصوت تلقائياً عند تحميل الصفحة (قد لا يعمل في بعض المتصفحات لحماية المستخدم)",
                values: [
                    { value: "", description: "يشغل تلقائياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "loop",
                description: "يعيد تشغيل الصوت تلقائياً عند انتهائه، يكرر المقطع الصوتي باستمرار",
                values: [
                    { value: "", description: "يعيد التشغيل تلقائياً (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "muted",
                description: "يكتم الصوت عند التشغيل، مفيد للصوتيات التي تشغل تلقائياً لتجنب إزعاج المستخدم",
                values: [
                    { value: "", description: "يكتم الصوت (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "preload",
                description: "يخبر المتصفح كم من الملف الصوتي يحمّل مسبقاً قبل أن يضغط المستخدم للتشغيل",
                values: [
                    { value: "auto", description: "يحمّل الملف كاملاً مسبقاً إذا كان جهاز المستخدم يسمح بذلك" },
                    { value: "metadata", description: "يحمّل فقط معلومات الملف (المدة) دون محتواه" },
                    { value: "none", description: "لا يحمّل شيئاً حتى يضغط المستخدم للتشغيل، يوفر البيانات" }
                ]
            },
            {
                name: "crossorigin",
                description: "عند تحميل صوت من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
                values: [
                    { value: "anonymous", description: "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر" },
                    { value: "use-credentials", description: "يرسل معلومات المستخدم للموقع الآخر إذا كان يثق به" }
                ]
            }
        ]
    },

    // -------- source --------
    {
        tag: "source",
        description: "يحدد مصدراً بديلاً للوسائط (صوت أو فيديو) بصيغ مختلفة، يسمح للمتصفح باختيار الصيغة المناسبة له",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار ملف الوسائط البديل، يقدم خياراً آخر إذا لم يدعم المتصفح الصيغة الأولى",
                values: [
                    { value: "video.mp4", description: "ملف فيديو بصيغة MP4" },
                    { value: "video.webm", description: "ملف فيديو بصيغة WebM" },
                    { value: "video.ogv", description: "ملف فيديو بصيغة OGV" },
                    { value: "audio.mp3", description: "ملف صوتي بصيغة MP3" },
                    { value: "audio.ogg", description: "ملف صوتي بصيغة OGG" },
                    { value: "audio.wav", description: "ملف صوتي بصيغة WAV" },
                    { value: "audio.aac", description: "ملف صوتي بصيغة AAC" }
                ],
                freeInput: true
            },
            {
                name: "type",
                description: "يحدد نوع الصيغة (MIME Type)، يساعد المتصفح في تحديد إذا كان يدعم هذا الملف قبل تحميله",
                values: [
                    { value: "video/mp4", description: "فيديو بصيغة MP4" },
                    { value: "video/webm", description: "فيديو بصيغة WebM" },
                    { value: "video/ogg", description: "فيديو بصيغة OGG" },
                    { value: "audio/mpeg", description: "صوت بصيغة MP3" },
                    { value: "audio/ogg", description: "صوت بصيغة OGG" },
                    { value: "audio/wav", description: "صوت بصيغة WAV" },
                    { value: "audio/aac", description: "صوت بصيغة AAC" },
                    { value: "audio/mp4", description: "صوت بصيغة MP4" }
                ]
            },
            {
                name: "srcset",
                description: "يوفر عدة أحجام من الصورة لـ picture، يسمح باختيار الحجم المناسب حسب الشاشة",
                values: [
                    { value: "image-small.jpg 480w, image-large.jpg 1200w", description: "أحجام مختلفة للصورة" },
                    { value: "photo-320w.jpg 320w, photo-640w.jpg 640w, photo-1280w.jpg 1280w", description: "أحجام مختلفة" }
                ],
                freeInput: true
            },
            {
                name: "media",
                description: "يحدد متى يتم استخدام هذا المصدر حسب حجم الشاشة، يعمل مع picture لاختيار الصورة المناسبة",
                values: [
                    { value: "(max-width: 600px)", description: "يستخدم للشاشات الصغيرة" },
                    { value: "(min-width: 601px)", description: "يستخدم للشاشات الكبيرة" },
                    { value: "(max-width: 480px)", description: "يستخدم للشاشات الصغيرة جداً" },
                    { value: "(min-width: 1024px)", description: "يستخدم للشاشات الكبيرة جداً" },
                    { value: "(orientation: portrait)", description: "يستخدم في الوضع العمودي" },
                    { value: "(orientation: landscape)", description: "يستخدم في الوضع الأفقي" }
                ],
                freeInput: true
            },
            {
                name: "sizes",
                description: "يحدد حجم عرض الصورة حسب حجم الشاشة، يعمل مع srcset",
                values: [
                    { value: "(max-width: 600px) 480px, 800px", description: "حجم الصورة حسب عرض الشاشة" },
                    { value: "100vw", description: "عرض كامل الشاشة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- track --------
    {
        tag: "track",
        description: "يضيف ترجمة أو تعليقات نصية إلى فيديو أو صوت، يساعد في فهم المحتوى للمستخدمين الصم أو متعددي اللغات",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار ملف الترجمة (بصيغة VTT)، يحتوي على النصوص المترجمة مع توقيتاتها",
                values: [
                    { value: "subtitles.vtt", description: "ملف ترجمة بصيغة VTT" },
                    { value: "captions.vtt", description: "ملف تعليقات بصيغة VTT" },
                    { value: "chapters.vtt", description: "ملف فصول بصيغة VTT" },
                    { value: "/subtitles/ar.vtt", description: "ملف ترجمة عربية في مجلد subtitles" },
                    { value: "https://example.com/subtitles/en.vtt", description: "ملف ترجمة من موقع آخر" }
                ],
                freeInput: true
            },
            {
                name: "kind",
                description: "يحدد نوع الترجمة أو التعليق، يخبر المتصفح كيف يعرض هذا الملف (ترجمة، وصف، فصول)",
                values: [
                    { value: "subtitles", description: "ترجمة نصية للحوار، تظهر في أسفل الفيديو" },
                    { value: "captions", description: "تعليقات توضيحية تشمل المؤثرات الصوتية، للمستخدمين الصم" },
                    { value: "descriptions", description: "وصف للمشاهد للمكفوفين، يقرأ بواسطة قارئ النص" },
                    { value: "chapters", description: "فصول للتنقل داخل الفيديو، يسمح بالانتقال لأجزاء محددة" },
                    { value: "metadata", description: "بيانات وصفية عن الفيديو، لا تظهر للمستخدم" }
                ]
            },
            {
                name: "srclang",
                description: "يحدد لغة الترجمة، يساعد المتصفح في اختيار الترجمة المناسبة حسب لغة المستخدم",
                values: [
                    { value: "ar", description: "لغة عربية" },
                    { value: "en", description: "لغة إنجليزية" },
                    { value: "fr", description: "لغة فرنسية" },
                    { value: "es", description: "لغة إسبانية" },
                    { value: "de", description: "لغة ألمانية" },
                    { value: "it", description: "لغة إيطالية" },
                    { value: "pt", description: "لغة برتغالية" },
                    { value: "ru", description: "لغة روسية" },
                    { value: "ja", description: "لغة يابانية" },
                    { value: "zh", description: "لغة صينية" },
                    { value: "ko", description: "لغة كورية" }
                ]
            },
            {
                name: "label",
                description: "يضيف اسماً للترجمة يظهر في قائمة الترجمات، يساعد المستخدم في اختيار الترجمة المناسبة",
                values: [
                    { value: "عربي", description: "اسم الترجمة العربية" },
                    { value: "English", description: "اسم الترجمة الإنجليزية" },
                    { value: "Français", description: "اسم الترجمة الفرنسية" },
                    { value: "Español", description: "اسم الترجمة الإسبانية" }
                ],
                freeInput: true
            },
            {
                name: "default",
                description: "يجعل هذه الترجمة هي الترجمة الافتراضية التي تظهر تلقائياً عند تشغيل الفيديو",
                values: [
                    { value: "", description: "يجعلها افتراضية (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            }
        ]
    },

    // -------- picture --------
    {
        tag: "picture",
        description: "يحتوي على عدة مصادر لصورة واحدة، يسمح للمتصفح باختيار الصورة المناسبة حسب حجم الشاشة أو نوع الجهاز",
        attributes: []
    },

    // -------- figure --------
    {
        tag: "figure",
        description: "يحتوي على محتوى مستقل مثل صورة أو رسم مع تعليق توضيحي، يربط المحتوى بالتعليق الخاص به",
        attributes: []
    },

    // -------- figcaption --------
    {
        tag: "figcaption",
        description: "يضيف تعليقاً أو وصفاً للصورة أو المحتوى داخل figure، يشرح محتوى الصورة أو مصدرها",
        attributes: []
    },

    // -------- map --------
    {
        tag: "map",
        description: "يعرّف خريطة تفاعلية على الصورة، يحدد مناطق قابلة للنقر تؤدي إلى روابط مختلفة حسب مكان النقر",
        attributes: [
            {
                name: "name",
                description: "يحدد اسم الخريطة، يربطها بالصورة عبر خاصية usemap لتفعيل المناطق التفاعلية",
                values: [
                    { value: "map1", description: "اسم الخريطة" },
                    { value: "map2", description: "اسم الخريطة" },
                    { value: "navigation", description: "اسم خريطة التنقل" },
                    { value: "imageMap", description: "اسم الخريطة" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- area --------
    {
        tag: "area",
        description: "يحدد منطقة قابلة للنقر داخل خريطة الصورة، عند النقر على هذه المنطقة ينتقل المستخدم إلى رابط محدد",
        attributes: [
            {
                name: "shape",
                description: "يحدد شكل المنطقة التفاعلية على الصورة، يحدد مكان النقر الفعال",
                values: [
                    { value: "rect", description: "منطقة مستطيلة، تحدد بإحداثيات x1,y1,x2,y2" },
                    { value: "rectangle", description: "منطقة مستطيلة (مرادف لـ rect)" },
                    { value: "circle", description: "منطقة دائرية، تحدد بمركز ونصف قطر" },
                    { value: "poly", description: "منطقة مضلعة، تحدد بعدة نقاط" },
                    { value: "polygon", description: "منطقة مضلعة (مرادف لـ poly)" },
                    { value: "default", description: "المنطقة الافتراضية، تغطي كل الصورة" }
                ]
            },
            {
                name: "coords",
                description: "يحدد إحداثيات المنطقة التفاعلية، يحدد مكان النقر الفعال على الصورة",
                values: [
                    { value: "0,0,50,50", description: "إحداثيات مستطيل (x1,y1,x2,y2)" },
                    { value: "10,20,80,90", description: "إحداثيات مستطيل" },
                    { value: "50,50,20", description: "إحداثيات دائرة (مركزx, مركزy, نصف القطر)" },
                    { value: "100,50,30", description: "إحداثيات دائرة" },
                    { value: "0,0,50,0,50,50,0,50", description: "إحداثيات مضلع (نقاط متعددة)" },
                    { value: "10,10,90,10,90,90,10,90", description: "إحداثيات مضلع" },
                    { value: "", description: "إحداثيات فارغة (للـ default)" }
                ],
                freeInput: true
            },
            {
                name: "href",
                description: "يحدد رابط الوجهة عند النقر على المنطقة، ينتقل المستخدم إلى هذه الصفحة أو الموقع",
                values: [
                    { value: "https://example.com", description: "رابط خارجي" },
                    { value: "/page", description: "صفحة داخل الموقع" },
                    { value: "#section", description: "جزء في نفس الصفحة" },
                    { value: "page.html", description: "صفحة في نفس الموقع" },
                    { value: "mailto:email@example.com", description: "يفتح برنامج البريد" },
                    { value: "tel:+123456789", description: "يفتح تطبيق الاتصال" }
                ],
                freeInput: true
            },
            {
                name: "alt",
                description: "يضيف نصاً وصفياً للمنطقة يظهر عند تمرير الماوس، يساعد في فهم وظيفة المنطقة",
                values: [
                    { value: "وصف المنطقة", description: "نص يصف المنطقة التفاعلية" },
                    { value: "انتقل إلى الصفحة الرئيسية", description: "نص وصفي" },
                    { value: "منطقة المنتج", description: "نص وصفي للمنتج" },
                    { value: "", description: "نص بديل فارغ" }
                ],
                freeInput: true
            },
            {
                name: "target",
                description: "يحدد كيف وأين يفتح الرابط عند النقر على المنطقة",
                values: [
                    { value: "_blank", description: "يفتح الرابط في نافذة جديدة" },
                    { value: "_self", description: "يفتح الرابط في نفس النافذة (الافتراضي)" },
                    { value: "_parent", description: "يفتح الرابط في الإطار الأب" },
                    { value: "_top", description: "يفتح الرابط في أعلى النافذة" }
                ]
            },
            {
                name: "download",
                description: "يجبر المتصفح على تحميل الملف بدلاً من فتحه عند النقر على المنطقة",
                values: [
                    { value: "filename.pdf", description: "يحمل الملف بهذا الاسم" },
                    { value: "", description: "يحمل الملف بالاسم الأصلي" }
                ],
                freeInput: true
            },
            {
                name: "rel",
                description: "يحدد علاقة الرابط بالصفحة الحالية، يساعد محركات البحث",
                values: [
                    { value: "nofollow", description: "يأمر محركات البحث بعدم متابعة الرابط" },
                    { value: "noopener", description: "يمنع الصفحة الجديدة من التحكم بالصفحة الحالية" },
                    { value: "noreferrer", description: "يمنع إرسال معلومات المصدر" }
                ]
            }
        ]
    },

    // -------- iframe --------
    {
        tag: "iframe",
        description: "يضمن صفحة HTML أخرى داخل الصفحة الحالية، يعرض محتوى من موقع آخر أو فيديو من يوتيوب",
        attributes: [
            {
                name: "src",
                description: "يحدد رابط الصفحة التي ستظهر داخل الإطار، يحدد المحتوى المضمن",
                values: [
                    { value: "https://www.youtube.com/embed/VIDEO_ID", description: "فيديو يوتيوب مضمن" },
                    { value: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "فيديو يوتيوب" },
                    { value: "https://www.google.com/maps/embed?pb=...", description: "خريطة جوجل مضمنة" },
                    { value: "https://example.com", description: "صفحة موقع آخر" },
                    { value: "page.html", description: "صفحة من نفس الموقع" },
                    { value: "about.html", description: "صفحة عن الموقع" }
                ],
                freeInput: true
            },
            {
                name: "width",
                description: "يحدد عرض الإطار بالبكسل، يتحكم في حجم المحتوى المضمن المعروض",
                values: [
                    { value: "320", description: "عرض 320 بكسل" },
                    { value: "480", description: "عرض 480 بكسل" },
                    { value: "640", description: "عرض 640 بكسل" },
                    { value: "854", description: "عرض 854 بكسل" },
                    { value: "960", description: "عرض 960 بكسل" },
                    { value: "1280", description: "عرض 1280 بكسل" },
                    { value: "100%", description: "عرض كامل (نسبة مئوية)" },
                    { value: "50%", description: "نصف العرض (نسبة مئوية)" },
                    { value: "75%", description: "ثلاثة أرباع العرض (نسبة مئوية)" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع الإطار بالبكسل، يتحكم في حجم المحتوى المضمن المعروض",
                values: [
                    { value: "180", description: "ارتفاع 180 بكسل" },
                    { value: "240", description: "ارتفاع 240 بكسل" },
                    { value: "360", description: "ارتفاع 360 بكسل" },
                    { value: "480", description: "ارتفاع 480 بكسل" },
                    { value: "720", description: "ارتفاع 720 بكسل" },
                    { value: "1080", description: "ارتفاع 1080 بكسل" },
                    { value: "100%", description: "ارتفاع كامل (نسبة مئوية)" },
                    { value: "50%", description: "نصف الارتفاع (نسبة مئوية)" }
                ],
                freeInput: true
            },
            {
                name: "allowfullscreen",
                description: "يسمح للمحتوى المضمن بالدخول في وضع ملء الشاشة، مفيد للفيديوهات والمشغلات",
                values: [
                    { value: "", description: "يسمح بملء الشاشة (يكتب بدون قيمة)" }
                ],
                isBoolean: true
            },
            {
                name: "sandbox",
                description: "يفرض قيوداً أمنية على المحتوى المضمن، يمنع تنفيذ سكريبتات أو نماذج أو روابط ضارة",
                values: [
                    { value: "allow-scripts", description: "يسمح بتنفيذ السكريبتات" },
                    { value: "allow-forms", description: "يسمح بإرسال النماذج" },
                    { value: "allow-same-origin", description: "يسمح بمشاركة المصدر" },
                    { value: "allow-popups", description: "يسمح بفتح نوافذ منبثقة" },
                    { value: "allow-modals", description: "يسمح بفتح نوافذ حوارية" },
                    { value: "allow-orientation-lock", description: "يسمح بقفل اتجاه الشاشة" },
                    { value: "allow-pointer-lock", description: "يسمح بقفل المؤشر" },
                    { value: "allow-presentation", description: "يسمح بالعرض" },
                    { value: "allow-top-navigation", description: "يسمح بتغيير رابط الصفحة الرئيسية" },
                    { value: "allow-top-navigation-by-user-activation", description: "يسمح بتغيير رابط الصفحة الرئيسية بتفاعل المستخدم" },
                    { value: "allow-downloads", description: "يسمح بتحميل الملفات" },
                    { value: "", description: "يمنع كل شيء (فارغ)" }
                ],
                freeInput: true
            },
            {
                name: "loading",
                description: "يحدد متى يتم تحميل الإطار، يؤخر تحميل الإطارات غير الظاهرة لتسريع الصفحة",
                values: [
                    { value: "lazy", description: "يؤخر تحميل الإطار حتى يقترب المستخدم منه" },
                    { value: "eager", description: "يحمل الإطار فوراً (الافتراضي)" }
                ]
            },
            {
                name: "referrerpolicy",
                description: "يحدد هل يرسل المتصفح عنوان الصفحة الحالية للموقع المضمّن، يحمي الخصوصية",
                values: [
                    { value: "no-referrer", description: "لا يرسل أي معلومات عن الصفحة الحالية" },
                    { value: "origin", description: "يرسل اسم الموقع فقط دون الرابط الكامل" },
                    { value: "origin-when-cross-origin", description: "يرسل اسم الموقع فقط للمواقع الأخرى" },
                    { value: "same-origin", description: "يرسل المعلومات الكاملة لنفس الموقع فقط" },
                    { value: "strict-origin", description: "يرسل اسم الموقع فقط، ولا يرسل للمواقع غير الآمنة" },
                    { value: "strict-origin-when-cross-origin", description: "يرسل اسم الموقع للمواقع الأخرى، والرابط كاملاً لنفس الموقع (افتراضي)" },
                    { value: "unsafe-url", description: "يرسل الرابط الكامل دائماً (غير آمن)" }
                ]
            },
            {
                name: "allow",
                description: "يمنح المحتوى المضمّن صلاحية استخدام ميزات معينة من المتصفح مثل الكاميرا أو الموقع الجغرافي",
                values: [
                    { value: "fullscreen", description: "يسمح بملء الشاشة" },
                    { value: "camera", description: "يسمح باستخدام الكاميرا" },
                    { value: "microphone", description: "يسمح باستخدام الميكروفون" },
                    { value: "geolocation", description: "يسمح بالوصول للموقع الجغرافي" },
                    { value: "autoplay", description: "يسمح بالتشغيل التلقائي للفيديو أو الصوت" },
                    { value: "encrypted-media", description: "يسمح بالوسائط المشفرة" },
                    { value: "payment", description: "يسمح بالدفع" },
                    { value: "accelerometer", description: "يسمح باستخدام مقياس التسارع" },
                    { value: "gyroscope", description: "يسمح باستخدام الجيروسكوب" },
                    { value: "magnetometer", description: "يسمح باستخدام المغناطيسية" },
                    { value: "ambient-light-sensor", description: "يسمح باستخدام حساس الضوء" },
                    { value: "battery", description: "يسمح بالوصول لمعلومات البطارية" },
                    { value: "display-capture", description: "يسمح بتسجيل الشاشة" },
                    { value: "clipboard-read", description: "يسمح بقراءة الحافظة" },
                    { value: "clipboard-write", description: "يسمح بالكتابة في الحافظة" }
                ],
                freeInput: true
            },
            {
                name: "name",
                description: "يحدد اسماً للإطار، يمكن استهدافه من رابط بخاصية target أو من كود JavaScript",
                values: [
                    { value: "myFrame", description: "اسم الإطار" },
                    { value: "videoFrame", description: "اسم إطار الفيديو" },
                    { value: "mapFrame", description: "اسم إطار الخريطة" }
                ],
                freeInput: true
            },
            {
                name: "title",
                description: "يضيف عنواناً للإطار يظهر عند تمرير الماوس، مفيد لسهولة الوصول",
                values: [
                    { value: "فيديو يوتيوب مضمن", description: "عنوان الإطار" },
                    { value: "خريطة جوجل", description: "عنوان الإطار" }
                ],
                freeInput: true
            },
            {
                name: "scrolling",
                description: "يحدد ما إذا كان الإطار سيظهر مع شريط تمرير أم لا (قديم، استُبدل بـ CSS)",
                values: [
                    { value: "yes", description: "يظهر شريط التمرير" },
                    { value: "no", description: "لا يظهر شريط التمرير" },
                    { value: "auto", description: "يظهر تلقائياً عند الحاجة (الافتراضي)" }
                ]
            },
            {
                name: "frameborder",
                description: "يحدد سمك إطار الإطار (قديم، استُبدل بـ CSS border)",
                values: [
                    { value: "0", description: "بدون إطار" },
                    { value: "1", description: "إطار رفيع (الافتراضي)" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- embed --------
    {
        tag: "embed",
        description: "يضمن محتوى خارجياً مثل ملف PDF أو فيديو فلاش أو تطبيق، يعرض محتوى تفاعلي من مصادر خارجية",
        attributes: [
            {
                name: "src",
                description: "يحدد مسار الملف الخارجي الذي سيتم تضمينه، يحدد المحتوى المعروض",
                values: [
                    { value: "file.pdf", description: "ملف PDF" },
                    { value: "document.pdf", description: "ملف PDF" },
                    { value: "game.swf", description: "تطبيق فلاش" },
                    { value: "animation.swf", description: "تطبيق فلاش" },
                    { value: "video.mp4", description: "فيديو" },
                    { value: "image.svg", description: "صورة SVG" }
                ],
                freeInput: true
            },
            {
                name: "type",
                description: "يحدد نوع الملف المضمن (MIME Type)، يساعد المتصفح في اختيار المشغل المناسب",
                values: [
                    { value: "application/pdf", description: "ملف PDF" },
                    { value: "application/x-shockwave-flash", description: "تطبيق فلاش" },
                    { value: "video/mp4", description: "فيديو MP4" },
                    { value: "video/webm", description: "فيديو WebM" },
                    { value: "image/svg+xml", description: "صورة SVG" }
                ]
            },
            {
                name: "width",
                description: "يحدد عرض المحتوى المضمن بالبكسل أو النسبة المئوية، يتحكم في حجم العرض",
                values: [
                    { value: "320", description: "عرض 320 بكسل" },
                    { value: "480", description: "عرض 480 بكسل" },
                    { value: "640", description: "عرض 640 بكسل" },
                    { value: "800", description: "عرض 800 بكسل" },
                    { value: "100%", description: "عرض كامل" },
                    { value: "50%", description: "نصف العرض" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع المحتوى المضمن بالبكسل أو النسبة المئوية، يتحكم في حجم الارتفاع",
                values: [
                    { value: "180", description: "ارتفاع 180 بكسل" },
                    { value: "240", description: "ارتفاع 240 بكسل" },
                    { value: "360", description: "ارتفاع 360 بكسل" },
                    { value: "480", description: "ارتفاع 480 بكسل" },
                    { value: "100%", description: "ارتفاع كامل" },
                    { value: "50%", description: "نصف الارتفاع" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- object --------
    {
        tag: "object",
        description: "يضمن مورداً خارجياً مثل PDF، فيديو، أو تطبيق، يمكن معالجته بواسطة إضافات المتصفح",
        attributes: [
            {
                name: "data",
                description: "يحدد مسار الملف الخارجي الذي سيتم تضمينه، يحدد المحتوى المعروض",
                values: [
                    { value: "file.pdf", description: "ملف PDF" },
                    { value: "document.pdf", description: "ملف PDF" },
                    { value: "video.mp4", description: "فيديو" },
                    { value: "image.svg", description: "صورة SVG" },
                    { value: "image.jpg", description: "صورة JPG" }
                ],
                freeInput: true
            },
            {
                name: "type",
                description: "يحدد نوع الملف المضمن (MIME Type)، يساعد المتصفح في اختيار المشغل المناسب",
                values: [
                    { value: "application/pdf", description: "ملف PDF" },
                    { value: "video/mp4", description: "فيديو MP4" },
                    { value: "video/webm", description: "فيديو WebM" },
                    { value: "image/svg+xml", description: "صورة SVG" },
                    { value: "image/jpeg", description: "صورة JPG" },
                    { value: "image/png", description: "صورة PNG" }
                ]
            },
            {
                name: "width",
                description: "يحدد عرض المحتوى المضمن بالبكسل، يتحكم في حجم العرض",
                values: [
                    { value: "320", description: "عرض 320 بكسل" },
                    { value: "480", description: "عرض 480 بكسل" },
                    { value: "640", description: "عرض 640 بكسل" },
                    { value: "800", description: "عرض 800 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع المحتوى المضمن بالبكسل، يتحكم في حجم الارتفاع",
                values: [
                    { value: "180", description: "ارتفاع 180 بكسل" },
                    { value: "240", description: "ارتفاع 240 بكسل" },
                    { value: "360", description: "ارتفاع 360 بكسل" },
                    { value: "480", description: "ارتفاع 480 بكسل" }
                ],
                freeInput: true
            }
        ]
    },

    // -------- canvas --------
    {
        tag: "canvas",
        description: "يوفر مساحة فارغة يمكن الرسم عليها بواسطة JavaScript، يستخدم للرسوم المتحركة، الألعاب، والرسوم البيانية",
        attributes: [
            {
                name: "width",
                description: "يحدد عرض مساحة الرسم بالبكسل، يحدد دقة الرسم وليس فقط حجم العرض على الصفحة",
                values: [
                    { value: "300", description: "عرض 300 بكسل (الافتراضي)" },
                    { value: "400", description: "عرض 400 بكسل" },
                    { value: "500", description: "عرض 500 بكسل" },
                    { value: "600", description: "عرض 600 بكسل" },
                    { value: "800", description: "عرض 800 بكسل" },
                    { value: "1024", description: "عرض 1024 بكسل" },
                    { value: "1280", description: "عرض 1280 بكسل" },
                    { value: "1920", description: "عرض 1920 بكسل" }
                ],
                freeInput: true
            },
            {
                name: "height",
                description: "يحدد ارتفاع مساحة الرسم بالبكسل، يحدد دقة الرسم وليس فقط حجم العرض على الصفحة",
                values: [
                    { value: "150", description: "ارتفاع 150 بكسل (الافتراضي)" },
                    { value: "200", description: "ارتفاع 200 بكسل" },
                    { value: "300", description: "ارتفاع 300 بكسل" },
                    { value: "400", description: "ارتفاع 400 بكسل" },
                    { value: "600", description: "ارتفاع 600 بكسل" },
                    { value: "768", description: "ارتفاع 768 بكسل" },
                    { value: "1024", description: "ارتفاع 1024 بكسل" },
                    { value: "1080", description: "ارتفاع 1080 بكسل" }
                ],
                freeInput: true
            }
        ]
    }
];

// تصدير البيانات
if (typeof window !== 'undefined') {
    window.mediaData = mediaData;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mediaData;
}