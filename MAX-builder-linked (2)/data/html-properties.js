// ============================================================
// html-properties.js — بيانات عناصر وسمات HTML لـ MAX Builder
// تم توليده تلقائياً بدمج ملفات data/html/*.js لتتوافق مع البنية التي يتوقعها MAX-builder.html
// ============================================================

var HTML_DATA = {
  "entities": [
  {
    "tag": "reserved",
    "description": "الأحرف المحجوزة في HTML التي يجب ترميزها ككيانات لتفادي تعارضها مع بنية الوسوم",
    "properties": [
      {
        "name": "&lt;",
        "description": "علامة أصغر من (أقل من)، تستخدم لعرض رمز < في النص بدلاً من تفسيره كوسم HTML",
        "values": [
          {
            "value": "<",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&gt;",
        "description": "علامة أكبر من (أكثر من)، تستخدم لعرض رمز > في النص بدلاً من تفسيره كوسم HTML",
        "values": [
          {
            "value": ">",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&amp;",
        "description": "علامة العطف (و)، تستخدم لعرض رمز & في النص بدلاً من تفسيره كبداية لكيان HTML",
        "values": [
          {
            "value": "&",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&quot;",
        "description": "علامة التنصيص المزدوجة، تستخدم لعرض علامة \" في النص دون أن تتداخل مع حدود السمات في HTML",
        "values": [
          {
            "value": "\"",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&apos;",
        "description": "علامة التنصيص المفردة (أبوستروف)، تستخدم لعرض علامة ' في النص دون أن تتداخل مع حدود السمات في HTML",
        "values": [
          {
            "value": "'",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  },
  {
    "tag": "spacing",
    "description": "كيانات المسافات والفواصل غير المرئية المستخدمة للتحكم في تباعد النص واتجاهه",
    "properties": [
      {
        "name": "&nbsp;",
        "description": "مسافة غير قابلة للكسر (Non-breaking Space)، تمنع المتصفح من كسر السطر عند هذه المسافة، تضمن بقاء الكلمات معاً في نفس السطر",
        "values": [
          {
            "value": " ",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&ensp;",
        "description": "مسافة بعرض نصف الحرف (En Space)، مسافة بعرض حرف n، تستخدم للفصل بين الكلمات بمسافة محددة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&emsp;",
        "description": "مسافة بعرض حرف كامل (Em Space)، مسافة بعرض حرف m، تستخدم للفصل بين الكلمات بمسافة كبيرة في النصوص المطبوعة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&thinsp;",
        "description": "مسافة رفيعة جداً (Thin Space)، مسافة صغيرة جداً تستخدم للفصل بين الأحرف في النصوص المطبوعة بدقة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&zwnj;",
        "description": "فاصل عدم التصاق (Zero Width Non-Joiner)، يمنع الحروف من الالتصاق ببعضها في النصوص المتصلة مثل العربية والفارسية",
        "values": [
          {
            "value": "‌",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&zwj;",
        "description": "فاصل التصاق (Zero Width Joiner)، يجبر الحروف على الالتصاق ببعضها في النصوص المتصلة مثل العربية والفارسية",
        "values": [
          {
            "value": "‍",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&lrm;",
        "description": "علامة اتجاه يسار-يمين (Left-to-Right Mark)، تفرض اتجاه النص من اليسار إلى اليمين، تستخدم في النصوص متعددة الاتجاهات",
        "values": [
          {
            "value": "‎",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&rlm;",
        "description": "علامة اتجاه يمين-يسار (Right-to-Left Mark)، تفرض اتجاه النص من اليمين إلى اليسار، تستخدم في النصوص متعددة الاتجاهات",
        "values": [
          {
            "value": "‏",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  },
  {
    "tag": "punctuation",
    "description": "كيانات علامات الترقيم والرموز الطباعية الشائعة في النصوص",
    "properties": [
      {
        "name": "&copy;",
        "description": "علامة حقوق النشر (Copyright)، تستخدم للإشارة إلى حقوق النشر للمحتوى",
        "values": [
          {
            "value": "©",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&reg;",
        "description": "علامة العلامة التجارية المسجلة (Registered Trademark)، تستخدم للإشارة إلى العلامات التجارية المسجلة رسمياً",
        "values": [
          {
            "value": "®",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&trade;",
        "description": "علامة العلامة التجارية (Trademark)، تستخدم للإشارة إلى العلامات التجارية غير المسجلة أو قيد التسجيل",
        "values": [
          {
            "value": "™",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&bull;",
        "description": "نقطة تعداد (Bullet)، تستخدم لإنشاء نقاط تعداد في القوائم غير المرتبة",
        "values": [
          {
            "value": "•",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&hellip;",
        "description": "علامة حذف (Ellipsis)، تستخدم للإشارة إلى استمرارية أو حذف جزء من النص",
        "values": [
          {
            "value": "…",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&mdash;",
        "description": "شرطة طويلة (Em Dash)، تستخدم للفصل بين الجمل أو للإشارة إلى تغيير في الفكرة",
        "values": [
          {
            "value": "—",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&ndash;",
        "description": "شرطة متوسطة (En Dash)، تستخدم للإشارة إلى المدى (مثل 1990–2000) أو للربط بين الكلمات المركبة",
        "values": [
          {
            "value": "–",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&minus;",
        "description": "علامة ناقص (Minus Sign)، تستخدم في العمليات الحسابية للدلالة على الطرح أو الأعداد السالبة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&plusmn;",
        "description": "علامة زائد/ناقص (Plus-Minus Sign)، تستخدم للإشارة إلى القيم التقريبية أو هامش الخطأ",
        "values": [
          {
            "value": "±",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&times;",
        "description": "علامة ضرب (Multiplication Sign)، تستخدم في العمليات الحسابية للدلالة على الضرب",
        "values": [
          {
            "value": "×",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&divide;",
        "description": "علامة قسمة (Division Sign)، تستخدم في العمليات الحسابية للدلالة على القسمة",
        "values": [
          {
            "value": "÷",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&equals;",
        "description": "علامة يساوي (Equals Sign)، تستخدم للمقارنة بين القيم أو في المعادلات الرياضية",
        "values": [
          {
            "value": "=",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&not;",
        "description": "علامة نفي (Not Sign)، تستخدم في المنطق للدلالة على النفي أو الاستثناء",
        "values": [
          {
            "value": "¬",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&dagger;",
        "description": "علامة خنجر (Dagger)، تستخدم للإشارة إلى الحواشي أو التعليقات الهامة",
        "values": [
          {
            "value": "†",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&Dagger;",
        "description": "علامة خنجر مزدوج (Double Dagger)، تستخدم للإشارة إلى الحواشي الثانوية أو التعليقات",
        "values": [
          {
            "value": "‡",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&sect;",
        "description": "علامة قسم (Section Sign)، تستخدم للإشارة إلى أقسام المستندات القانونية أو الفصول",
        "values": [
          {
            "value": "§",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&para;",
        "description": "علامة فقرة (Pilcrow)، تستخدم للإشارة إلى بداية فقرة جديدة في النصوص القانونية أو المحررة",
        "values": [
          {
            "value": "¶",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&iexcl;",
        "description": "علامة تعجب مقلوبة (Inverted Exclamation Mark)، تستخدم في اللغة الإسبانية في بداية الجمل التعجبية",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&iquest;",
        "description": "علامة استفهام مقلوبة (Inverted Question Mark)، تستخدم في اللغة الإسبانية في بداية الجمل الاستفهامية",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&laquo;",
        "description": "علامة تنصيص مزدوجة لليسار (Left Double Angle Quote)، تستخدم للاقتباس في اللغات الأوروبية",
        "values": [
          {
            "value": "«",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&raquo;",
        "description": "علامة تنصيص مزدوجة لليمين (Right Double Angle Quote)، تستخدم للاقتباس في اللغات الأوروبية",
        "values": [
          {
            "value": "»",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&lsquo;",
        "description": "علامة تنصيص مفردة لليسار (Left Single Quote)، تستخدم للاقتباس أو الإشارة إلى الكلمات",
        "values": [
          {
            "value": "‘",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&rsquo;",
        "description": "علامة تنصيص مفردة لليمين (Right Single Quote)، تستخدم للاقتباس أو الإشارة إلى الكلمات",
        "values": [
          {
            "value": "’",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&ldquo;",
        "description": "علامة تنصيص مزدوجة لليسار (Left Double Quote)، تستخدم للاقتباس المباشر في النصوص",
        "values": [
          {
            "value": "“",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&rdquo;",
        "description": "علامة تنصيص مزدوجة لليمين (Right Double Quote)، تستخدم للاقتباس المباشر في النصوص",
        "values": [
          {
            "value": "”",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  },
  {
    "tag": "currency",
    "description": "رموز العملات العالمية والعربية",
    "properties": [
      {
        "name": "&euro;",
        "description": "رمز اليورو (Euro Sign)، العملة الرسمية للاتحاد الأوروبي",
        "values": [
          {
            "value": "€",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&pound;",
        "description": "رمز الجنيه الإسترليني (Pound Sign)، العملة الرسمية للمملكة المتحدة",
        "values": [
          {
            "value": "£",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&yen;",
        "description": "رمز الين (Yen Sign)، العملة الرسمية لليابان والصين (اليوان)",
        "values": [
          {
            "value": "¥",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&cent;",
        "description": "رمز السنت (Cent Sign)، يستخدم للإشارة إلى أجزاء من العملات (مثل 1/100 من الدولار أو اليورو)",
        "values": [
          {
            "value": "¢",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&dollar;",
        "description": "رمز الدولار (Dollar Sign)، العملة الرسمية للولايات المتحدة والعديد من الدول الأخرى",
        "values": [
          {
            "value": "$",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&real;",
        "description": "رمز الريال البرازيلي (Brazilian Real)، العملة الرسمية للبرازيل",
        "values": [
          {
            "value": "R$",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&riyal;",
        "description": "رمز الريال السعودي (Saudi Riyal)، العملة الرسمية للمملكة العربية السعودية",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&dinar;",
        "description": "رمز الدينار الجزائري (Algerian Dinar)، العملة الرسمية للجزائر",
        "values": [
          {
            "value": "د.ج",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&dirham;",
        "description": "رمز الدرهم الإماراتي (UAE Dirham)، العملة الرسمية لدولة الإمارات العربية المتحدة",
        "values": [
          {
            "value": "د.إ",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  },
  {
    "tag": "math",
    "description": "الرموز والحروف الإغريقية المستخدمة في الرياضيات والفيزياء",
    "properties": [
      {
        "name": "&sum;",
        "description": "رمز المجموع (Summation)، يستخدم في الرياضيات للدلالة على جمع سلسلة من الأرقام",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&prod;",
        "description": "رمز الجداء (Product)، يستخدم في الرياضيات للدلالة على ضرب سلسلة من الأرقام",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&radic;",
        "description": "رمز الجذر التربيعي (Square Root)، يستخدم في الرياضيات للدلالة على الجذر التربيعي لعدد",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&infin;",
        "description": "رمز اللانهاية (Infinity)، يستخدم في الرياضيات للدلالة على قيمة غير محدودة أو كبيرة جداً",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&int;",
        "description": "رمز التكامل (Integral)، يستخدم في الرياضيات للدلالة على عملية التكامل في التفاضل والتكامل",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&part;",
        "description": "رمز المشتقة الجزئية (Partial Differential)، يستخدم في الرياضيات للدلالة على المشتقة الجزئية",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&nabla;",
        "description": "رمز نابلا (Nabla)، يستخدم في الرياضيات للدلالة على التدرج أو المشتقة الاتجاهية",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&deg;",
        "description": "رمز الدرجة (Degree Sign)، يستخدم للإشارة إلى درجات الحرارة أو الزوايا",
        "values": [
          {
            "value": "°",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&prime;",
        "description": "رمز أولي (Prime)، يستخدم في الرياضيات للدلالة على المشتقة الأولى أو الدقائق",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&Prime;",
        "description": "رمز أولي مزدوج (Double Prime)، يستخدم في الرياضيات للدلالة على المشتقة الثانية أو الثواني",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&permil;",
        "description": "رمز لكل ألف (Per Mille)، يستخدم للإشارة إلى النسب المئوية للأجزاء من الألف",
        "values": [
          {
            "value": "‰",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&micro;",
        "description": "رمز ميكرو (Micro)، يستخدم في الفيزياء والكيمياء للدلالة على مليون جزء من الوحدة (10??)",
        "values": [
          {
            "value": "µ",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&alpha;",
        "description": "حرف ألفا الإغريقي (Alpha)، يستخدم في الرياضيات والفيزياء كرمز لمتغيرات أو زوايا",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&beta;",
        "description": "حرف بيتا الإغريقي (Beta)، يستخدم في الرياضيات والفيزياء كرمز لمتغيرات أو زوايا",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&gamma;",
        "description": "حرف غاما الإغريقي (Gamma)، يستخدم في الرياضيات والفيزياء كرمز لمتغيرات أو زوايا",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&delta;",
        "description": "حرف دلتا الإغريقي (Delta)، يستخدم في الرياضيات للدلالة على التغير أو الفرق",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&epsilon;",
        "description": "حرف إبسيلون الإغريقي (Epsilon)، يستخدم في الرياضيات كرمز لمتغير صغير جداً",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&pi;",
        "description": "حرف باي الإغريقي (Pi)، الثابت الرياضي 3.14159، يستخدم في حسابات الدائرة والزوايا",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&sigma;",
        "description": "حرف سيغما الإغريقي (Sigma)، يستخدم في الإحصاء للدلالة على الانحراف المعياري",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&tau;",
        "description": "حرف تاو الإغريقي (Tau)، يستخدم في الرياضيات كرمز للزمن أو الثوابت",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&phi;",
        "description": "حرف فاي الإغريقي (Phi)، يستخدم في الرياضيات للدلالة على النسبة الذهبية أو الزوايا",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&psi;",
        "description": "حرف ساي الإغريقي (Psi)، يستخدم في الفيزياء والرياضيات كرمز للموجات والدوال",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&omega;",
        "description": "حرف أوميغا الإغريقي (Omega)، يستخدم في الفيزياء للدلالة على المقاومة الكهربائية أو التردد الزاوي",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&forall;",
        "description": "رمز لكل (For All)، يستخدم في المنطق الرياضي للدلالة على أن العبارة صحيحة لكل القيم",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&exist;",
        "description": "رمز يوجد (There Exists)، يستخدم في المنطق الرياضي للدلالة على وجود قيمة تحقق العبارة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&empty;",
        "description": "رمز المجموعة الفارغة (Empty Set)، يستخدم في الرياضيات للدلالة على مجموعة لا تحتوي على عناصر",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&isin;",
        "description": "رمز ينتمي (Element Of)، يستخدم في الرياضيات للدلالة على أن عنصراً ينتمي إلى مجموعة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&notin;",
        "description": "رمز لا ينتمي (Not Element Of)، يستخدم في الرياضيات للدلالة على أن عنصراً لا ينتمي إلى مجموعة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&sub;",
        "description": "رمز مجموعة جزئية (Subset)، يستخدم في الرياضيات للدلالة على أن مجموعة جزء من مجموعة أخرى",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&sup;",
        "description": "رمز مجموعة شاملة (Superset)، يستخدم في الرياضيات للدلالة على أن مجموعة تحتوي مجموعة أخرى",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&sube;",
        "description": "رمز مجموعة جزئية أو مساوية (Subset or Equal)، يستخدم للدلالة على المجموعة الجزئية بما في ذلك التساوي",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&supe;",
        "description": "رمز مجموعة شاملة أو مساوية (Superset or Equal)، يستخدم للدلالة على المجموعة الشاملة بما في ذلك التساوي",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&perp;",
        "description": "رمز عمودي (Perpendicular)، يستخدم في الهندسة للدلالة على أن خطين متعامدين",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&ang;",
        "description": "رمز زاوية (Angle)، يستخدم في الهندسة للدلالة على قياس الزوايا",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&cong;",
        "description": "رمز متطابق (Congruent)، يستخدم في الهندسة للدلالة على أن شكلين متطابقين في الحجم والشكل",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&asymp;",
        "description": "رمز تقريباً (Approximately Equal)، يستخدم للإشارة إلى قيم تقريبية أو مساوية تقريباً",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&ne;",
        "description": "رمز لا يساوي (Not Equal)، يستخدم للدلالة على أن قيمتين غير متساويتين",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&le;",
        "description": "رمز أقل أو يساوي (Less Than or Equal)، يستخدم للمقارنة بين القيم",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&ge;",
        "description": "رمز أكبر أو يساوي (Greater Than or Equal)، يستخدم للمقارنة بين القيم",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  },
  {
    "tag": "arrows",
    "description": "رموز الأسهم باتجاهاتها المختلفة، تُستخدم للدلالة على الاتجاه أو المنطق",
    "properties": [
      {
        "name": "&larr;",
        "description": "سهم لليسار (Left Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى اليسار",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&uarr;",
        "description": "سهم لأعلى (Up Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى الأعلى",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&rarr;",
        "description": "سهم لليمين (Right Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى اليمين",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&darr;",
        "description": "سهم لأسفل (Down Arrow)، يستخدم للإشارة إلى اتجاه أو انتقال إلى الأسفل",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&harr;",
        "description": "سهم مزدوج (Left Right Arrow)، يستخدم للإشارة إلى اتجاهين أو معادلة",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&crarr;",
        "description": "سهم إدخال (Carriage Return Arrow)، يستخدم للإشارة إلى مفتاح Enter أو بداية سطر جديد",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&lArr;",
        "description": "سهم مزدوج لليسار (Left Double Arrow)، يستخدم في المنطق للدلالة على الاستلزام",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&uArr;",
        "description": "سهم مزدوج لأعلى (Up Double Arrow)، يستخدم للإشارة إلى اتجاه قوي لأعلى",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&rArr;",
        "description": "سهم مزدوج لليمين (Right Double Arrow)، يستخدم في المنطق للدلالة على الاستلزام",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&dArr;",
        "description": "سهم مزدوج لأسفل (Down Double Arrow)، يستخدم للإشارة إلى اتجاه قوي لأسفل",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&hArr;",
        "description": "سهم مزدوج اتجاهين (Left Right Double Arrow)، يستخدم في المنطق للدلالة على التكافؤ",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  },
  {
    "tag": "shapes",
    "description": "رموز وأشكال زخرفية ورمزية شائعة الاستخدام",
    "properties": [
      {
        "name": "&loz;",
        "description": "رمز معين (Diamond)، يستخدم كرمز تجميعي أو في المنطق",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&spades;",
        "description": "رمز البستوني (Spade)، يستخدم في أوراق اللعب أو كرمز زخرفي",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&clubs;",
        "description": "رمز السباتي (Club)، يستخدم في أوراق اللعب أو كرمز زخرفي",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&hearts;",
        "description": "رمز القلب (Heart)، يستخدم في أوراق اللعب أو كرمز للحب والعواطف",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&diams;",
        "description": "رمز الديناري (Diamond)، يستخدم في أوراق اللعب أو كرمز زخرفي",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&star;",
        "description": "نجمة مملوءة (Star)، تستخدم كرمز زخرفي أو للتقييم",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&starf;",
        "description": "نجمة فارغة (Star Outline)، تستخدم كرمز زخرفي أو للتقييم",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&phone;",
        "description": "رمز هاتف (Telephone)، يستخدم للإشارة إلى معلومات الاتصال أو أرقام الهواتف",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&envelope;",
        "description": "رمز ظرف (Envelope)، يستخدم للإشارة إلى البريد الإلكتروني أو المراسلات",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&check;",
        "description": "رمز صح (Check Mark)، يستخدم للإشارة إلى الصحة أو الموافقة أو الاكتمال",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&cross;",
        "description": "رمز خطأ (Cross Mark)، يستخدم للإشارة إلى الخطأ أو الرفض أو عدم الاكتمال",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&target;",
        "description": "رمز هدف (Target)، يستخدم للإشارة إلى الأهداف أو النقاط المركزية",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&comp;",
        "description": "رمز مركب (Composition)، يستخدم في الرياضيات للدلالة على تركيب الدوال",
        "values": [
          {
            "value": "?",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  },
  {
    "tag": "xmlHtml",
    "description": "الكيانات الأساسية المشتركة بين XML وHTML لترميز الأحرف الخاصة بالوسوم",
    "properties": [
      {
        "name": "&lt;",
        "description": "علامة أصغر من، تستخدم في XML و HTML لعرض وسم البداية",
        "values": [
          {
            "value": "<",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&gt;",
        "description": "علامة أكبر من، تستخدم في XML و HTML لعرض وسم النهاية",
        "values": [
          {
            "value": ">",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&amp;",
        "description": "علامة العطف، تستخدم في XML و HTML لبدء الكيانات",
        "values": [
          {
            "value": "&",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&quot;",
        "description": "علامة التنصيص، تستخدم في XML و HTML للسمات النصية",
        "values": [
          {
            "value": "\"",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&apos;",
        "description": "علامة التنصيص المفردة، تستخدم في XML و HTML للسمات النصية",
        "values": [
          {
            "value": "'",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&lt;",
        "description": "تمثيل آمن لعلامة < في XML و HTML لمنع تفسيرها كوسم",
        "values": [
          {
            "value": "<",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&gt;",
        "description": "تمثيل آمن لعلامة > في XML و HTML لمنع تفسيرها كوسم",
        "values": [
          {
            "value": ">",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      },
      {
        "name": "&amp;",
        "description": "تمثيل آمن لعلامة & في XML و HTML لمنع تفسيرها كبداية كيان",
        "values": [
          {
            "value": "&",
            "description": "الحرف/الرمز الناتج عن هذا الكيان"
          }
        ]
      }
    ]
  }
],
  "layout": [
    {
      "tag": "header",
      "description": "يمثل مقدمة الصفحة أو القسم، يحتوي عادة على شعار الموقع والعنوان الرئيسي وقائمة التنقل، يظهر في أعلى الصفحة",
      "properties": []
    },
    {
      "tag": "nav",
      "description": "يحتوي على روابط التنقل الرئيسية في الموقع، تمكن المستخدم من الانتقال بين أقسام الموقع أو الصفحات المختلفة بسهولة",
      "properties": [
        {
          "name": "aria-label",
          "description": "يضيف اسماً لقائمة التنقل لمساعدة قارئات الشاشة في التعرف عليها",
          "values": [
            {
              "value": "القائمة الرئيسية",
              "description": "اسم قائمة التنقل الرئيسية"
            },
            {
              "value": "قائمة الموقع",
              "description": "اسم قائمة الموقع"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "main",
      "description": "يحدد المحتوى الأساسي والفريد للصفحة الذي لا يتكرر في صفحات أخرى، يستثنى منه القوائم والتذييل والأجزاء المكررة",
      "properties": []
    },
    {
      "tag": "section",
      "description": "يقسم الصفحة إلى أقسام مستقلة، كل قسم له موضوع واحد مثل فصل في كتاب أو جزء من صفحة رئيسية، ينظم المحتوى",
      "properties": [
        {
          "name": "aria-labelledby",
          "description": "يربط القسم بعنوان تعريفه بواسطة معرف (id)، يساعد قارئات الشاشة في فهم محتوى القسم",
          "values": [
            {
              "value": "section-title",
              "description": "معرف عنوان القسم"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "article",
      "description": "يمثل محتوى مستقلاً بذاته يمكن نشره أو توزيعه بشكل منفصل عن باقي الصفحة، مثل تدوينة، خبر، منتج، أو تعليق",
      "properties": [
        {
          "name": "aria-label",
          "description": "يضيف اسماً للمقالة لمساعدة قارئات الشاشة",
          "values": [
            {
              "value": "مقالة اليوم",
              "description": "اسم المقالة"
            },
            {
              "value": "أحدث الأخبار",
              "description": "اسم المقالة الإخبارية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "aside",
      "description": "يحتوي على محتوى جانبي مرتبط بالمحتوى الرئيسي لكن ليس أساسياً، مثل إعلانات، شريط جانبي، أو اقتباسات مرتبطة",
      "properties": []
    },
    {
      "tag": "footer",
      "description": "يمثل تذييل الصفحة أو القسم، يحتوي على معلومات حقوق النشر، روابط إضافية، بيانات الاتصال، أو خريطة الموقع",
      "properties": []
    },
    {
      "tag": "div",
      "description": "حاوية عامة تستخدم لتجميع عناصر أخرى وتنسيقها معاً باستخدام CSS، ليس لها معنى دلالي خاص وتستخدم للتقسيم فقط",
      "properties": [
        {
          "name": "style",
          "description": "يحدد تنسيقات CSS مباشرة داخل العنصر، يستخدم لتجميل الحاوية",
          "values": [
            {
              "value": "display: flex;",
              "description": "يجعل العناصر داخل الحاوية مرنة"
            },
            {
              "value": "display: grid;",
              "description": "يجعل العناصر داخل الحاوية شبكية"
            },
            {
              "value": "padding: 20px;",
              "description": "يضيف حشوة داخلية 20 بكسل"
            },
            {
              "value": "margin: 10px;",
              "description": "يضيف هامش خارجي 10 بكسل"
            },
            {
              "value": "background-color: #f0f0f0;",
              "description": "يضيف خلفية رمادية فاتحة"
            },
            {
              "value": "border: 1px solid #ccc;",
              "description": "يضيف إطاراً رمادياً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للحاوية لتطبيق تنسيقات CSS محددة",
          "values": [
            {
              "value": "container",
              "description": "فئة الحاوية"
            },
            {
              "value": "wrapper",
              "description": "فئة الغلاف"
            },
            {
              "value": "flex",
              "description": "فئة التنسيق المرن"
            },
            {
              "value": "grid",
              "description": "فئة التنسيق الشبكي"
            },
            {
              "value": "card",
              "description": "فئة البطاقة"
            },
            {
              "value": "section",
              "description": "فئة القسم"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للحاوية يمكن استهدافه بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "main-container",
              "description": "معرف الحاوية الرئيسية"
            },
            {
              "value": "content",
              "description": "معرف المحتوى"
            },
            {
              "value": "sidebar",
              "description": "معرف الشريط الجانبي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "address",
      "description": "يعرض معلومات الاتصال بصاحب الصفحة مثل البريد الإلكتروني، رقم الهاتف، العنوان الفعلي، أو حسابات التواصل الاجتماعي",
      "properties": []
    },
    {
      "tag": "hgroup",
      "description": "يجمع عنواناً رئيسياً مع عناوين فرعية أو وصف مرتبط به، يحسن البنية الدلالية للعناوين ويوضح العلاقة بينها",
      "properties": []
    },
    {
      "tag": "search",
      "description": "يحدد منطقة تحتوي على نموذج بحث أو أدوات للبحث داخل الموقع، يسهل على المستخدم العثور على المحتوى بسرعة",
      "properties": [
        {
          "name": "role",
          "description": "يحدد دور منطقة البحث للمساعدة في إمكانية الوصول",
          "values": [
            {
              "value": "search",
              "description": "دور البحث (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "details",
      "description": "ينشئ قسماً قابلاً للطي والفتح، يخفي المحتوى الإضافي حتى يضغط المستخدم عليه، يستخدم للأسئلة الشائعة والتفاصيل الاختيارية",
      "properties": [
        {
          "name": "open",
          "description": "يجعل القسم مفتوحاً وظاهر المحتوى منذ البداية بدل أن يكون مطوياً",
          "values": [
            {
              "value": "",
              "description": "يفتح القسم افتراضياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "name",
          "description": "يسمح بتجميع عدة عناصر details معاً بحيث فتح أحدها يغلق الآخر تلقائياً",
          "values": [
            {
              "value": "group1",
              "description": "اسم المجموعة"
            },
            {
              "value": "faq",
              "description": "مجموعة الأسئلة الشائعة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "summary",
      "description": "يحدد العنوان الظاهر دائماً لعنصر details، عند النقر عليه يفتح أو يطوي المحتوى المخفي بداخله",
      "properties": []
    },
    {
      "tag": "dialog",
      "description": "ينشئ نافذة حوار منبثقة (مثل نافذة تأكيد أو نموذج تسجيل)، يمكن إظهارها أو إخفاؤها وتظهر عادة فوق باقي محتوى الصفحة",
      "properties": [
        {
          "name": "open",
          "description": "يجعل نافذة الحوار ظاهرة على الصفحة، بدونها تبقى النافذة مخفية حتى تُفتح بواسطة JavaScript",
          "values": [
            {
              "value": "",
              "description": "يظهر نافذة الحوار (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "closedby",
          "description": "يحدد الطريقة التي يُغلق بها المستخدم نافذة الحوار (زر Esc أو النقر خارجها)",
          "values": [
            {
              "value": "any",
              "description": "يغلق بالنقر خارج النافذة أو بمفتاح Esc"
            },
            {
              "value": "closerequest",
              "description": "يغلق فقط بمفتاح Esc أو طلب إغلاق صريح"
            },
            {
              "value": "none",
              "description": "لا يغلق تلقائياً بأي طريقة"
            }
          ]
        },
        {
          "name": "role",
          "description": "يحدد دور نافذة الحوار للمساعدة في إمكانية الوصول",
          "values": [
            {
              "value": "dialog",
              "description": "دور الحوار (الافتراضي)"
            },
            {
              "value": "alertdialog",
              "description": "دور حوار التنبيه"
            }
          ]
        },
        {
          "name": "aria-label",
          "description": "يضيف اسماً لنافذة الحوار لمساعدة قارئات الشاشة",
          "values": [
            {
              "value": "تأكيد الحذف",
              "description": "اسم نافذة تأكيد الحذف"
            },
            {
              "value": "تسجيل الدخول",
              "description": "اسم نافذة تسجيل الدخول"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-modal",
          "description": "يحدد أن نافذة الحوار تمنع التفاعل مع بقية الصفحة أثناء ظهورها",
          "values": [
            {
              "value": "true",
              "description": "نافذة مشروطة (تمنع التفاعل مع الخلفية)"
            },
            {
              "value": "false",
              "description": "نافذة غير مشروطة"
            }
          ]
        }
      ]
    },
    {
      "tag": "h1",
      "description": "العنوان الرئيسي للصفحة، يعبر عن الموضوع الأساسي، يستخدم مرة واحدة في الصفحة، يساعد محركات البحث في فهم محتوى الصفحة",
      "properties": [
        {
          "name": "style",
          "description": "يحدد تنسيقات CSS مباشرة للعنوان، يتحكم في مظهره",
          "values": [
            {
              "value": "color: #333;",
              "description": "لون النص رمادي غامق"
            },
            {
              "value": "font-size: 2.5em;",
              "description": "حجم الخط 2.5em"
            },
            {
              "value": "text-align: center;",
              "description": "توسيط النص"
            },
            {
              "value": "font-weight: bold;",
              "description": "خط عريض"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للعنوان لتطبيق تنسيقات CSS محددة",
          "values": [
            {
              "value": "main-title",
              "description": "فئة العنوان الرئيسي"
            },
            {
              "value": "page-title",
              "description": "فئة عنوان الصفحة"
            },
            {
              "value": "heading",
              "description": "فئة العنوان"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعنوان يمكن استهدافه بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "page-title",
              "description": "معرف عنوان الصفحة"
            },
            {
              "value": "main-heading",
              "description": "معرف العنوان الرئيسي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "h2",
      "description": "عنوان فرعي للأقسام الرئيسية، ينظم المحتوى ويساعد القارئ في التنقل بين أجزاء الصفحة، يأتي تحت h1 مباشرة",
      "properties": [
        {
          "name": "style",
          "description": "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
          "values": [
            {
              "value": "color: #555;",
              "description": "لون النص رمادي"
            },
            {
              "value": "font-size: 2em;",
              "description": "حجم الخط 2em"
            },
            {
              "value": "margin-top: 20px;",
              "description": "هامش علوي 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للعنوان الفرعي",
          "values": [
            {
              "value": "section-title",
              "description": "فئة عنوان القسم"
            },
            {
              "value": "sub-heading",
              "description": "فئة العنوان الفرعي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعنوان الفرعي",
          "values": [
            {
              "value": "section-1",
              "description": "معرف القسم الأول"
            },
            {
              "value": "features",
              "description": "معرف قسم الميزات"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "h3",
      "description": "عنوان فرعي تحت h2، يستخدم لتقسيم المحتوى إلى أجزاء أكثر تفصيلاً داخل القسم، ينظم المعلومات بشكل هرمي",
      "properties": [
        {
          "name": "style",
          "description": "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
          "values": [
            {
              "value": "color: #777;",
              "description": "لون النص رمادي فاتح"
            },
            {
              "value": "font-size: 1.5em;",
              "description": "حجم الخط 1.5em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للعنوان الفرعي",
          "values": [
            {
              "value": "sub-section-title",
              "description": "فئة عنوان القسم الفرعي"
            },
            {
              "value": "detail-heading",
              "description": "فئة عنوان التفاصيل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعنوان الفرعي",
          "values": [
            {
              "value": "detail-1",
              "description": "معرف التفاصيل الأولى"
            },
            {
              "value": "feature-1",
              "description": "معرف الميزة الأولى"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "h4",
      "description": "عنوان فرعي تحت h3، يستخدم لتنظيم التفاصيل الدقيقة داخل المحتوى، يضيف مستوى آخر من التنظيم",
      "properties": [
        {
          "name": "style",
          "description": "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
          "values": [
            {
              "value": "font-size: 1.2em;",
              "description": "حجم الخط 1.2em"
            },
            {
              "value": "font-weight: bold;",
              "description": "خط عريض"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للعنوان الفرعي",
          "values": [
            {
              "value": "sub-detail",
              "description": "فئة التفاصيل الفرعية"
            },
            {
              "value": "minor-heading",
              "description": "فئة العنوان الثانوي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعنوان الفرعي",
          "values": [
            {
              "value": "sub-detail-1",
              "description": "معرف التفاصيل الفرعية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "h5",
      "description": "عنوان فرعي تحت h4، يستخدم لتفاصيل أكثر تحديداً في النصوص الطويلة، يساعد في تقسيم المعلومات المعقدة",
      "properties": [
        {
          "name": "style",
          "description": "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
          "values": [
            {
              "value": "font-size: 1em;",
              "description": "حجم الخط 1em"
            },
            {
              "value": "font-weight: bold;",
              "description": "خط عريض"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للعنوان الفرعي",
          "values": [
            {
              "value": "minor-detail",
              "description": "فئة التفاصيل البسيطة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعنوان الفرعي",
          "values": [
            {
              "value": "minor-1",
              "description": "معرف التفاصيل البسيطة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "h6",
      "description": "أدنى مستوى من العناوين، يستخدم للتفاصيل الدقيقة جداً أو الحواشي داخل النص، يكمل التسلسل الهرمي للعناوين",
      "properties": [
        {
          "name": "style",
          "description": "يحدد تنسيقات CSS مباشرة للعنوان الفرعي",
          "values": [
            {
              "value": "font-size: 0.85em;",
              "description": "حجم الخط 0.85em"
            },
            {
              "value": "color: #999;",
              "description": "لون النص رمادي فاتح"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للعنوان الفرعي",
          "values": [
            {
              "value": "footnote",
              "description": "فئة الحاشية"
            },
            {
              "value": "tiny-heading",
              "description": "فئة العنوان الصغير"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعنوان الفرعي",
          "values": [
            {
              "value": "footnote-1",
              "description": "معرف الحاشية الأولى"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "text": [
    {
      "tag": "p",
      "description": "يعرض فقرة نصية، يفصل بين كتل النص لتسهيل القراءة وتنظيم المحتوى في وحدات مفهومة",
      "properties": []
    },
    {
      "tag": "pre",
      "description": "يعرض النص بنفس التنسيق الذي كتب به، يحافظ على المسافات وفواصل الأسطر، يستخدم لعرض الأكواد البرمجية والنصوص المنسقة",
      "properties": [
        {
          "name": "width",
          "description": "خاصية قديمة كانت تحدد عدد الأحرف المسموح بها في السطر الواحد، استُبدلت بخاصية width في CSS",
          "values": [
            {
              "value": "1",
              "description": "يحدد عرض السطر بـ 1 حرف"
            },
            {
              "value": "5",
              "description": "يحدد عرض السطر بـ 5 أحرف"
            },
            {
              "value": "10",
              "description": "يحدد عرض السطر بـ 10 أحرف"
            },
            {
              "value": "20",
              "description": "يحدد عرض السطر بـ 20 حرفاً"
            },
            {
              "value": "30",
              "description": "يحدد عرض السطر بـ 30 حرفاً"
            },
            {
              "value": "40",
              "description": "يحدد عرض السطر بـ 40 حرفاً"
            },
            {
              "value": "50",
              "description": "يحدد عرض السطر بـ 50 حرفاً"
            },
            {
              "value": "60",
              "description": "يحدد عرض السطر بـ 60 حرفاً"
            },
            {
              "value": "70",
              "description": "يحدد عرض السطر بـ 70 حرفاً"
            },
            {
              "value": "80",
              "description": "يحدد عرض السطر بـ 80 حرفاً، القيمة التقليدية لعرض الطرفية (Terminal)"
            },
            {
              "value": "90",
              "description": "يحدد عرض السطر بـ 90 حرفاً"
            },
            {
              "value": "100",
              "description": "يحدد عرض السطر بـ 100 حرف"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "blockquote",
      "description": "يعرض اقتباساً طويلاً من مصدر آخر، يظهر بمسافة بادئة لتمييزه عن النص العادي وإبراز أنه منقول",
      "properties": [
        {
          "name": "cite",
          "description": "يضيف رابطاً لمصدر الاقتباس، يساعد في توثيق المصدر والرجوع إليه للتحقق من المعلومات",
          "values": [
            {
              "value": "https://example.com/source",
              "description": "رابط المصدر الذي تم الاقتباس منه"
            },
            {
              "value": "https://example.com/book",
              "description": "رابط كتاب"
            },
            {
              "value": "https://example.com/article",
              "description": "رابط مقالة"
            },
            {
              "value": "https://example.com/research",
              "description": "رابط بحث"
            },
            {
              "value": "https://example.com/document",
              "description": "رابط وثيقة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "hr",
      "description": "يرسم خطاً أفقياً يفصل بين أجزاء المحتوى، يستخدم لتغيير الموضوع أو إضافة فاصل بصري بين الأقسام",
      "properties": [
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة الخط أفقياً، استُبدلت بـ CSS",
          "values": [
            {
              "value": "left",
              "description": "يحاذي الخط لليسار"
            },
            {
              "value": "center",
              "description": "يحاذي الخط للوسط (الافتراضي)"
            },
            {
              "value": "right",
              "description": "يحاذي الخط لليمين"
            }
          ]
        },
        {
          "name": "color",
          "description": "خاصية قديمة كانت تحدد لون الخط، استُبدلت بخاصية border-color أو background-color في CSS",
          "values": [
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "noshade",
          "description": "خاصية قديمة كانت تزيل تأثير الظل ثلاثي الأبعاد عن الخط وتجعله مسطحاً بلون واحد",
          "values": [
            {
              "value": "",
              "description": "يزيل تأثير الظل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "size",
          "description": "خاصية قديمة كانت تحدد سماكة (ارتفاع) الخط بالبكسل، استُبدلت بخاصية height أو border-width في CSS",
          "values": [
            {
              "value": "1",
              "description": "خط رفيع جداً"
            },
            {
              "value": "2",
              "description": "خط رفيع"
            },
            {
              "value": "3",
              "description": "خط رفيع"
            },
            {
              "value": "4",
              "description": "خط رفيع"
            },
            {
              "value": "5",
              "description": "خط متوسط السماكة"
            },
            {
              "value": "6",
              "description": "خط متوسط السماكة"
            },
            {
              "value": "7",
              "description": "خط سميك"
            },
            {
              "value": "8",
              "description": "خط سميك"
            },
            {
              "value": "9",
              "description": "خط سميك"
            },
            {
              "value": "10",
              "description": "خط سميك جداً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "خاصية قديمة كانت تحدد طول الخط بالبكسل أو كنسبة مئوية، استُبدلت بخاصية width في CSS",
          "values": [
            {
              "value": "100%",
              "description": "خط بعرض كامل الحاوية"
            },
            {
              "value": "90%",
              "description": "خط بعرض 90% من الحاوية"
            },
            {
              "value": "80%",
              "description": "خط بعرض 80% من الحاوية"
            },
            {
              "value": "75%",
              "description": "خط بعرض 75% من الحاوية"
            },
            {
              "value": "70%",
              "description": "خط بعرض 70% من الحاوية"
            },
            {
              "value": "66%",
              "description": "خط بعرض 66% من الحاوية"
            },
            {
              "value": "60%",
              "description": "خط بعرض 60% من الحاوية"
            },
            {
              "value": "50%",
              "description": "خط بنصف عرض الحاوية"
            },
            {
              "value": "40%",
              "description": "خط بعرض 40% من الحاوية"
            },
            {
              "value": "33%",
              "description": "خط بعرض 33% من الحاوية"
            },
            {
              "value": "30%",
              "description": "خط بعرض 30% من الحاوية"
            },
            {
              "value": "25%",
              "description": "خط بربع عرض الحاوية"
            },
            {
              "value": "20%",
              "description": "خط بعرض 20% من الحاوية"
            },
            {
              "value": "10%",
              "description": "خط بعرض 10% من الحاوية"
            },
            {
              "value": "100",
              "description": "خط بطول 100 بكسل"
            },
            {
              "value": "200",
              "description": "خط بطول 200 بكسل"
            },
            {
              "value": "300",
              "description": "خط بطول 300 بكسل"
            },
            {
              "value": "400",
              "description": "خط بطول 400 بكسل"
            },
            {
              "value": "500",
              "description": "خط بطول 500 بكسل"
            },
            {
              "value": "600",
              "description": "خط بطول 600 بكسل"
            },
            {
              "value": "700",
              "description": "خط بطول 700 بكسل"
            },
            {
              "value": "800",
              "description": "خط بطول 800 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "ul",
      "description": "ينشئ قائمة غير مرتبة تعرض العناصر بنقاط، تستخدم للعناصر التي لا تحتاج ترتيب معين مثل قائمة المشتريات أو الميزات",
      "properties": [
        {
          "name": "type",
          "description": "خاصية قديمة كانت تحدد شكل النقطة أمام كل عنصر، استُبدلت بخاصية list-style-type في CSS",
          "values": [
            {
              "value": "disc",
              "description": "نقطة مملوءة (دائرة سوداء) - الشكل الافتراضي"
            },
            {
              "value": "circle",
              "description": "دائرة مفرغة غير مملوءة"
            },
            {
              "value": "square",
              "description": "مربع مملوء"
            }
          ]
        },
        {
          "name": "compact",
          "description": "خاصية قديمة جداً كانت تقلل المسافة بين عناصر القائمة، لم تعد مدعومة فعلياً في المتصفحات الحديثة، استُبدلت بـ CSS",
          "values": [
            {
              "value": "",
              "description": "يفعّل الوضع المضغوط (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "ol",
      "description": "ينشئ قائمة مرتبة تعرض العناصر بأرقام أو حروف، تستخدم للخطوات المتسلسلة أو التعليمات أو العناصر التي تحتاج ترتيب",
      "properties": [
        {
          "name": "reversed",
          "description": "يعكس ترتيب الأرقام في القائمة المرقمة، يبدأ من آخر رقم إلى الأول، مفيد للقوائم التنازلية",
          "values": [
            {
              "value": "",
              "description": "يفعّل الترتيب التنازلي (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "start",
          "description": "يحدد الرقم الذي تبدأ منه القائمة المرقمة، يستخدم عندما تريد البدء من رقم غير 1 مثل 5 أو 10",
          "values": [
            {
              "value": "1",
              "description": "يبدأ الترقيم من 1 (الافتراضي)"
            },
            {
              "value": "2",
              "description": "يبدأ الترقيم من 2"
            },
            {
              "value": "3",
              "description": "يبدأ الترقيم من 3"
            },
            {
              "value": "4",
              "description": "يبدأ الترقيم من 4"
            },
            {
              "value": "5",
              "description": "يبدأ الترقيم من 5"
            },
            {
              "value": "6",
              "description": "يبدأ الترقيم من 6"
            },
            {
              "value": "7",
              "description": "يبدأ الترقيم من 7"
            },
            {
              "value": "8",
              "description": "يبدأ الترقيم من 8"
            },
            {
              "value": "9",
              "description": "يبدأ الترقيم من 9"
            },
            {
              "value": "10",
              "description": "يبدأ الترقيم من 10"
            },
            {
              "value": "20",
              "description": "يبدأ الترقيم من 20"
            },
            {
              "value": "50",
              "description": "يبدأ الترقيم من 50"
            },
            {
              "value": "100",
              "description": "يبدأ الترقيم من 100"
            },
            {
              "value": "500",
              "description": "يبدأ الترقيم من 500"
            },
            {
              "value": "1000",
              "description": "يبدأ الترقيم من 1000"
            }
          ],
          "freeInput": true
        },
        {
          "name": "type",
          "description": "يغير نوع الترقيم في القائمة المرقمة، يمكن أن يكون أرقاماً عربية أو حروفاً إنجليزية أو رقماً رومانياً",
          "values": [
            {
              "value": "1",
              "description": "ترقيم بأرقام عربية (1، 2، 3) - الافتراضي"
            },
            {
              "value": "A",
              "description": "ترقيم بحروف إنجليزية كبيرة (A، B، C)"
            },
            {
              "value": "a",
              "description": "ترقيم بحروف إنجليزية صغيرة (a، b، c)"
            },
            {
              "value": "I",
              "description": "ترقيم بأرقام رومانية كبيرة (I، II، III)"
            },
            {
              "value": "i",
              "description": "ترقيم بأرقام رومانية صغيرة (i، ii، iii)"
            }
          ]
        },
        {
          "name": "compact",
          "description": "خاصية قديمة جداً كانت تقلل المسافة بين عناصر القائمة، لم تعد مدعومة فعلياً في المتصفحات الحديثة، استُبدلت بـ CSS",
          "values": [
            {
              "value": "",
              "description": "يفعّل الوضع المضغوط (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "li",
      "description": "يمثل عنصراً واحداً داخل قائمة مرتبة أو غير مرتبة، يحمل محتوى القائمة من نص أو صورة أو عناصر أخرى",
      "properties": [
        {
          "name": "value",
          "description": "يحدد رقم هذا العنصر في القائمة المرقمة، يتجاوز الترقيم التلقائي ويبدأ من الرقم المحدد",
          "values": [
            {
              "value": "1",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "2",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "3",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "4",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "5",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "6",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "7",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "8",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "9",
              "description": "يحدد رقم العنصر في القائمة"
            },
            {
              "value": "10",
              "description": "يحدد رقم العنصر في القائمة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "type",
          "description": "خاصية قديمة كانت تحدد شكل الترقيم لهذا العنصر تحديداً بدل القائمة كاملة، استُبدلت بـ CSS",
          "values": [
            {
              "value": "1",
              "description": "ترقيم بأرقام عربية"
            },
            {
              "value": "A",
              "description": "ترقيم بحروف إنجليزية كبيرة"
            },
            {
              "value": "a",
              "description": "ترقيم بحروف إنجليزية صغيرة"
            },
            {
              "value": "I",
              "description": "ترقيم بأرقام رومانية كبيرة"
            },
            {
              "value": "i",
              "description": "ترقيم بأرقام رومانية صغيرة"
            }
          ]
        }
      ]
    },
    {
      "tag": "dl",
      "description": "ينشئ قائمة تعريفات تحتوي على مصطلحات وتعريفاتها، تستخدم للقاموس، قائمة المصطلحات، أو الأسئلة الشائعة",
      "properties": []
    },
    {
      "tag": "dt",
      "description": "يحدد المصطلح أو الاسم في قائمة التعريفات، يظهر قبل التعريف ويمثل الكلمة أو المفهوم المراد شرحه",
      "properties": []
    },
    {
      "tag": "dd",
      "description": "يحتوي تعريف أو شرح المصطلح الذي يسبقه في قائمة التعريفات، يوضح معنى المصطلح أو يقدم تفاصيل عنه",
      "properties": []
    },
    {
      "tag": "menu",
      "description": "يعرض قائمة من الأوامر أو الخيارات التفاعلية، مشابه للقائمة النقطية لكن يستخدم للأزرار والأوامر التفاعلية",
      "properties": []
    },
    {
      "tag": "address",
      "description": "يعرض معلومات التواصل الخاصة بصاحب الصفحة أو المقال، مثل البريد أو العنوان أو رقم الهاتف، يظهر عادة بخط مائل",
      "properties": []
    },
    {
      "tag": "div",
      "description": "حاوية عامة لا تحمل معنى دلالياً، تستخدم لتجميع عناصر أخرى معاً لتنسيقها بـ CSS أو التحكم بها عبر جافاسكريبت",
      "properties": []
    },
    {
      "tag": "figure",
      "description": "يجمع محتوى مستقلاً مثل صورة أو رسم بياني أو كود مع شرحه، يظل مفهوماً حتى لو نُقل لمكان آخر في الصفحة أو المستند",
      "properties": []
    },
    {
      "tag": "figcaption",
      "description": "يعرض تسمية توضيحية أو شرحاً لمحتوى عنصر figure الذي يحتويه، يظهر عادة أعلى أو أسفل الصورة أو الرسم",
      "properties": []
    },
    {
      "tag": "a",
      "description": "ينشئ رابطاً تشعبياً، عند النقر عليه ينتقل المستخدم إلى صفحة أخرى أو موقع خارجي أو جزء معين من الصفحة الحالية",
      "properties": [
        {
          "name": "href",
          "description": "يحدد وجهة الرابط، عند النقر ينتقل المستخدم إلى هذه الوجهة (صفحة، موقع، بريد، هاتف)",
          "values": [
            {
              "value": "https://example.com",
              "description": "ينتقل إلى موقع خارجي"
            },
            {
              "value": "https://example.com/page",
              "description": "ينتقل إلى صفحة خارجية"
            },
            {
              "value": "https://www.google.com",
              "description": "ينتقل إلى موقع جوجل"
            },
            {
              "value": "https://www.youtube.com",
              "description": "ينتقل إلى موقع يوتيوب"
            },
            {
              "value": "https://github.com",
              "description": "ينتقل إلى موقع جيت هاب"
            },
            {
              "value": "/about",
              "description": "ينتقل إلى صفحة داخل الموقع"
            },
            {
              "value": "/contact",
              "description": "ينتقل إلى صفحة الاتصال"
            },
            {
              "value": "/products",
              "description": "ينتقل إلى صفحة المنتجات"
            },
            {
              "value": "/services",
              "description": "ينتقل إلى صفحة الخدمات"
            },
            {
              "value": "/blog",
              "description": "ينتقل إلى صفحة المدونة"
            },
            {
              "value": "#section",
              "description": "ينتقل إلى جزء معين في نفس الصفحة"
            },
            {
              "value": "#top",
              "description": "ينتقل إلى أعلى الصفحة"
            },
            {
              "value": "#footer",
              "description": "ينتقل إلى أسفل الصفحة"
            },
            {
              "value": "#content",
              "description": "ينتقل إلى محتوى الصفحة"
            },
            {
              "value": "mailto:email@example.com",
              "description": "يفتح برنامج البريد لإرسال رسالة"
            },
            {
              "value": "mailto:info@example.com",
              "description": "يفتح برنامج البريد"
            },
            {
              "value": "mailto:support@example.com",
              "description": "يفتح برنامج البريد للدعم"
            },
            {
              "value": "tel:+123456789",
              "description": "يفتح تطبيق الاتصال لطلب رقم"
            },
            {
              "value": "tel:+1234567890",
              "description": "يفتح تطبيق الاتصال"
            },
            {
              "value": "tel:0123456789",
              "description": "يفتح تطبيق الاتصال"
            }
          ],
          "freeInput": true
        },
        {
          "name": "target",
          "description": "يحدد كيف وأين يفتح الرابط، يتحكم في فتح الرابط في نفس النافذة أو نافذة جديدة أو إطار آخر",
          "values": [
            {
              "value": "_blank",
              "description": "يفتح الرابط في تبويب أو نافذة جديدة"
            },
            {
              "value": "_self",
              "description": "يفتح الرابط في نفس النافذة (الافتراضي)"
            },
            {
              "value": "_parent",
              "description": "يفتح الرابط في الإطار الأب (إذا كانت الصفحة داخل إطار)"
            },
            {
              "value": "_top",
              "description": "يفتح الرابط في أعلى النافذة (يكسر الإطارات)"
            }
          ]
        },
        {
          "name": "download",
          "description": "يجبر المتصفح على تحميل الملف بدلاً من فتحه، مفيد للروابط التي تؤدي لملفات PDF أو صور أو مستندات",
          "values": [
            {
              "value": "filename.pdf",
              "description": "يحمل الملف بهذا الاسم"
            },
            {
              "value": "file.pdf",
              "description": "يحمل الملف بهذا الاسم"
            },
            {
              "value": "document.pdf",
              "description": "يحمل الملف بهذا الاسم"
            },
            {
              "value": "image.jpg",
              "description": "يحمل الملف بهذا الاسم"
            },
            {
              "value": "file.png",
              "description": "يحمل الملف بهذا الاسم"
            },
            {
              "value": "archive.zip",
              "description": "يحمل الملف بهذا الاسم"
            },
            {
              "value": "",
              "description": "يحمل الملف بالاسم الأصلي (يكتب بدون قيمة)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rel",
          "description": "يحدد علاقة الرابط بالصفحة الحالية، يساعد محركات البحث والمتصفحات في فهم طبيعة الرابط",
          "values": [
            {
              "value": "nofollow",
              "description": "يأمر محركات البحث بعدم متابعة الرابط"
            },
            {
              "value": "noopener",
              "description": "يمنع الصفحة الجديدة من التحكم بالصفحة الحالية"
            },
            {
              "value": "noreferrer",
              "description": "يمنع إرسال معلومات المصدر للموقع الآخر"
            },
            {
              "value": "external",
              "description": "يشير إلى أن الرابط لموقع خارجي"
            },
            {
              "value": "nofollow noopener",
              "description": "يمنع متابعة الرابط ويمنع التحكم بالصفحة"
            },
            {
              "value": "nofollow noreferrer",
              "description": "يمنع متابعة الرابط ويمنع إرسال المعلومات"
            },
            {
              "value": "noopener noreferrer",
              "description": "يمنع التحكم بالصفحة ويمنع إرسال المعلومات"
            }
          ]
        }
      ]
    },
    {
      "tag": "span",
      "description": "حاوية نصية عامة تستخدم لتنسيق جزء صغير من النص أو مجموعة من الأحرف دون تغيير في تدفق النص",
      "properties": []
    },
    {
      "tag": "strong",
      "description": "يعطي أهمية قوية للنص، يظهر بخط عريض، يستخدم للتأكيد على كلمات مهمة في الجملة أو تحذير المستخدم",
      "properties": []
    },
    {
      "tag": "em",
      "description": "يعطي تشديداً نطقياً للنص، يظهر عادة مائلاً، يستخدم للتأكيد العاطفي أو تغيير نبرة القراءة",
      "properties": []
    },
    {
      "tag": "b",
      "description": "يعرض نصاً بخط عريض دون إعطائه أهمية إضافية، يستخدم للأغراض الجمالية أو تمييز الكلمات المفتاحية",
      "properties": []
    },
    {
      "tag": "i",
      "description": "يعرض نصاً مائلاً دون إعطائه أهمية إضافية، يستخدم للمصطلحات التقنية أو الأفكار أو الكلمات بلغة مختلفة",
      "properties": []
    },
    {
      "tag": "u",
      "description": "يعرض نصاً بخط تحته، يستخدم للإشارة إلى الأخطاء الإملائية أو النصوص التي تحتاج تمييز دون أن تكون روابط",
      "properties": []
    },
    {
      "tag": "s",
      "description": "يعرض نصاً مشطوباً للإشارة إلى أن النص لم يعد صحيحاً أو أنه ملغي أو قديم، مثل الأسعار المخفضة",
      "properties": []
    },
    {
      "tag": "ins",
      "description": "يعرض نصاً مضافاً حديثاً بخط تحته، يستخدم لتوضيح التعديلات والإضافات على مستند سبق نشره",
      "properties": [
        {
          "name": "cite",
          "description": "يضيف رابطاً لصفحة تشرح سبب هذا التعديل أو الإضافة",
          "values": [
            {
              "value": "https://example.com/changelog",
              "description": "رابط يوضح سبب الإضافة"
            },
            {
              "value": "https://example.com/update",
              "description": "رابط يوضح التحديث"
            },
            {
              "value": "https://example.com/revision",
              "description": "رابط يوضح المراجعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "datetime",
          "description": "يحدد تاريخ ووقت إجراء هذا التعديل بصيغة قياسية",
          "values": [
            {
              "value": "2026-07-26",
              "description": "تاريخ الإضافة"
            },
            {
              "value": "2026-07-27",
              "description": "تاريخ الإضافة"
            },
            {
              "value": "2026-07-28",
              "description": "تاريخ الإضافة"
            },
            {
              "value": "2026-07-26T10:30",
              "description": "تاريخ ووقت الإضافة"
            },
            {
              "value": "2026-07-26T14:30",
              "description": "تاريخ ووقت الإضافة"
            },
            {
              "value": "2026-07-26T18:00",
              "description": "تاريخ ووقت الإضافة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "del",
      "description": "يعرض نصاً محذوفاً بخط مشطوب عليه، يستخدم لتوضيح التعديلات التي أُزيلت من مستند سبق نشره دون إخفائها تماماً",
      "properties": [
        {
          "name": "cite",
          "description": "يضيف رابطاً لصفحة تشرح سبب هذا الحذف",
          "values": [
            {
              "value": "https://example.com/changelog",
              "description": "رابط يوضح سبب الحذف"
            },
            {
              "value": "https://example.com/update",
              "description": "رابط يوضح التحديث"
            },
            {
              "value": "https://example.com/revision",
              "description": "رابط يوضح المراجعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "datetime",
          "description": "يحدد تاريخ ووقت إجراء هذا الحذف بصيغة قياسية",
          "values": [
            {
              "value": "2026-07-26",
              "description": "تاريخ الحذف"
            },
            {
              "value": "2026-07-27",
              "description": "تاريخ الحذف"
            },
            {
              "value": "2026-07-28",
              "description": "تاريخ الحذف"
            },
            {
              "value": "2026-07-26T10:30",
              "description": "تاريخ ووقت الحذف"
            },
            {
              "value": "2026-07-26T14:30",
              "description": "تاريخ ووقت الحذف"
            },
            {
              "value": "2026-07-26T18:00",
              "description": "تاريخ ووقت الحذف"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "small",
      "description": "يعرض نصاً بحجم صغير، يستخدم للتعليقات الجانبية، حقوق النشر، أو التفاصيل القانونية الثانوية",
      "properties": []
    },
    {
      "tag": "mark",
      "description": "يظلل النص بلون خلفية مختلف، يستخدم لتمييز الكلمات المفتاحية أو نتائج البحث أو النص المهم",
      "properties": []
    },
    {
      "tag": "abbr",
      "description": "يمثل اختصاراً لكلمة أو عبارة، عند تمرير الماوس فوقه يظهر الشرح الكامل كتلميح لفهم الاختصار",
      "properties": [
        {
          "name": "title",
          "description": "يعرض الشرح الكامل للاختصار عند تمرير الماوس، يساعد المستخدم في فهم معنى الاختصار",
          "values": [
            {
              "value": "منظمة الصحة العالمية",
              "description": "شرح اختصار WHO"
            },
            {
              "value": "الصفحة الرئيسية",
              "description": "شرح اختصار Home"
            },
            {
              "value": "الأمم المتحدة",
              "description": "شرح اختصار UN"
            },
            {
              "value": "أسئلة شائعة",
              "description": "شرح اختصار FAQ"
            },
            {
              "value": "يرجى الرد",
              "description": "شرح اختصار RSVP"
            },
            {
              "value": "على سبيل المثال",
              "description": "شرح اختصار e.g."
            },
            {
              "value": "أي",
              "description": "شرح اختصار i.e."
            },
            {
              "value": "ملاحظة",
              "description": "شرح اختصار NB"
            },
            {
              "value": "وما إلى ذلك",
              "description": "شرح اختصار etc."
            },
            {
              "value": "بعد الميلاد",
              "description": "شرح اختصار AD"
            },
            {
              "value": "قبل الميلاد",
              "description": "شرح اختصار BC"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "code",
      "description": "يعرض النص بخط خاص يشبه الأكواد البرمجية، يستخدم لعرض أجزاء من الكود داخل النص العادي دون تنفيذها",
      "properties": []
    },
    {
      "tag": "kbd",
      "description": "يعرض النص بشكل يمثل مفتاحاً من لوحة المفاتيح، يستخدم لتعليم المستخدم الاختصارات أو الأزرار التي يجب ضغطها",
      "properties": []
    },
    {
      "tag": "samp",
      "description": "يعرض مخرجات من برنامج حاسوبي أو نظام، يستخدم لعرض نتائج الأكواد أو رسائل الخطأ أو مخرجات البرامج",
      "properties": []
    },
    {
      "tag": "var",
      "description": "يمثل اسم متغير في تعبير رياضي أو برمجي، يستخدم في الشروحات التقنية والعلمية للدلالة على متغير",
      "properties": []
    },
    {
      "tag": "cite",
      "description": "يشير إلى عنوان عمل تم الاستشهاد به مثل كتاب، مقالة، فيلم، أو أغنية، يعرض عادة بخط مائل",
      "properties": []
    },
    {
      "tag": "dfn",
      "description": "يحدد المصطلح الذي يتم تعريفه لأول مرة في النص، يساعد في توضيح المصطلحات الجديدة للقارئ",
      "properties": []
    },
    {
      "tag": "q",
      "description": "يعرض اقتباساً قصيراً ضمن النص، يضيف المتصفح علامات تنصيص تلقائياً حول النص المقتبس",
      "properties": [
        {
          "name": "cite",
          "description": "يضيف رابطاً لمصدر الاقتباس القصير، يساعد في توثيق المصدر والرجوع إليه",
          "values": [
            {
              "value": "https://example.com/source",
              "description": "رابط المصدر"
            },
            {
              "value": "https://example.com/book",
              "description": "رابط كتاب"
            },
            {
              "value": "https://example.com/article",
              "description": "رابط مقالة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "sub",
      "description": "يعرض النص منخفضاً (سفلياً) عن الخط العادي، يستخدم في المعادلات الكيميائية (H₂O) والأسس السفلية",
      "properties": []
    },
    {
      "tag": "sup",
      "description": "يعرض النص مرتفعاً (علوياً) عن الخط العادي، يستخدم في المعادلات الرياضية (x²) والعلامات الترتيبية",
      "properties": []
    },
    {
      "tag": "time",
      "description": "يعرض تاريخاً أو وقتاً بصيغة يمكن قراءتها آلياً، يساعد محركات البحث والتطبيقات في فهم الوقت والتاريخ",
      "properties": [
        {
          "name": "datetime",
          "description": "يحدد التاريخ والوقت بصيغة قياسية (YYYY-MM-DD)، حتى لو ظهر النص بشكل مختلف للمستخدم",
          "values": [
            {
              "value": "2026-07-26",
              "description": "تاريخ اليوم"
            },
            {
              "value": "2026-07-27",
              "description": "تاريخ"
            },
            {
              "value": "2026-07-28",
              "description": "تاريخ"
            },
            {
              "value": "2026-07-29",
              "description": "تاريخ"
            },
            {
              "value": "2026-07-30",
              "description": "تاريخ"
            },
            {
              "value": "2026-07-31",
              "description": "تاريخ"
            },
            {
              "value": "2026-08-01",
              "description": "تاريخ"
            },
            {
              "value": "2026-12-31",
              "description": "تاريخ"
            },
            {
              "value": "2027-01-01",
              "description": "تاريخ"
            },
            {
              "value": "2026-07-26T10:30",
              "description": "تاريخ ووقت محدد"
            },
            {
              "value": "2026-07-26T14:30",
              "description": "تاريخ ووقت محدد"
            },
            {
              "value": "2026-07-26T18:00",
              "description": "تاريخ ووقت محدد"
            },
            {
              "value": "2026-07-26T20:00",
              "description": "تاريخ ووقت محدد"
            },
            {
              "value": "2026-07-26T22:30",
              "description": "تاريخ ووقت محدد"
            },
            {
              "value": "2026-07",
              "description": "شهر وسنة فقط"
            },
            {
              "value": "2026-08",
              "description": "شهر وسنة فقط"
            },
            {
              "value": "2026-12",
              "description": "شهر وسنة فقط"
            },
            {
              "value": "2027-01",
              "description": "شهر وسنة فقط"
            },
            {
              "value": "2026",
              "description": "سنة فقط"
            },
            {
              "value": "2027",
              "description": "سنة فقط"
            },
            {
              "value": "PT2H30M",
              "description": "مدة زمنية (ساعتان ونصف)، تستخدم لعرض مدة فيديو أو زمن تحضير وصفة"
            },
            {
              "value": "PT1H",
              "description": "مدة زمنية (ساعة واحدة)"
            },
            {
              "value": "PT30M",
              "description": "مدة زمنية (نصف ساعة)"
            },
            {
              "value": "PT1H15M",
              "description": "مدة زمنية (ساعة وربع)"
            },
            {
              "value": "PT3H",
              "description": "مدة زمنية (3 ساعات)"
            },
            {
              "value": "PT45M",
              "description": "مدة زمنية (45 دقيقة)"
            },
            {
              "value": "20:00",
              "description": "وقت فقط بدون تاريخ (الساعة 8 مساءً)"
            },
            {
              "value": "08:00",
              "description": "وقت فقط بدون تاريخ (الساعة 8 صباحاً)"
            },
            {
              "value": "12:00",
              "description": "وقت فقط بدون تاريخ (الساعة 12)"
            },
            {
              "value": "18:30",
              "description": "وقت فقط بدون تاريخ"
            },
            {
              "value": "2026-07-26T10:30+03:00",
              "description": "تاريخ ووقت مع منطقة زمنية"
            },
            {
              "value": "2026-07-26T10:30Z",
              "description": "تاريخ ووقت بتوقيت UTC"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "data",
      "description": "يربط قيمة رقمية أو بيانات قابلة للقراءة آلياً بنص معروض، يستخدم للتطبيقات التي تحتاج معالجة آلية للبيانات",
      "properties": [
        {
          "name": "value",
          "description": "القيمة الرقمية أو البيانات التي ستعالج آلياً، تخفي خلف النص المعروض للمستخدم",
          "values": [
            {
              "value": "0",
              "description": "قيمة رقمية"
            },
            {
              "value": "1",
              "description": "قيمة رقمية"
            },
            {
              "value": "2",
              "description": "قيمة رقمية"
            },
            {
              "value": "3",
              "description": "قيمة رقمية"
            },
            {
              "value": "4",
              "description": "قيمة رقمية"
            },
            {
              "value": "5",
              "description": "قيمة رقمية"
            },
            {
              "value": "10",
              "description": "قيمة رقمية"
            },
            {
              "value": "20",
              "description": "قيمة رقمية"
            },
            {
              "value": "50",
              "description": "قيمة رقمية"
            },
            {
              "value": "100",
              "description": "قيمة رقمية"
            },
            {
              "value": "123",
              "description": "قيمة رقمية لمنتج"
            },
            {
              "value": "456",
              "description": "قيمة رقمية لمنتج"
            },
            {
              "value": "789",
              "description": "قيمة رقمية لمنتج"
            },
            {
              "value": "5.99",
              "description": "سعر منتج"
            },
            {
              "value": "9.99",
              "description": "سعر منتج"
            },
            {
              "value": "19.99",
              "description": "سعر منتج"
            },
            {
              "value": "29.99",
              "description": "سعر منتج"
            },
            {
              "value": "49.99",
              "description": "سعر منتج"
            },
            {
              "value": "99.99",
              "description": "سعر منتج"
            },
            {
              "value": "2026",
              "description": "سنة معينة"
            },
            {
              "value": "2027",
              "description": "سنة معينة"
            },
            {
              "value": "2028",
              "description": "سنة معينة"
            },
            {
              "value": "true",
              "description": "قيمة منطقية صحيحة"
            },
            {
              "value": "false",
              "description": "قيمة منطقية خاطئة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "bdi",
      "description": "يعزل جزءاً من النص اتجاه كتابته (يمين لليسار أو يسار لليمين) عن النص المحيط، يمنع تشوش النصوص متعددة الاتجاهات",
      "properties": []
    },
    {
      "tag": "bdo",
      "description": "يفرض اتجاه كتابة محدد على النص بغض النظر عن الاتجاه الافتراضي، يستخدم للنصوص متعددة الاتجاهات",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص الذي سيفرضه المتصفح، إما من اليمين لليسار أو من اليسار لليمين",
          "values": [
            {
              "value": "rtl",
              "description": "يفرض اتجاه النص من اليمين إلى اليسار (للغة العربية والعبرية)"
            },
            {
              "value": "ltr",
              "description": "يفرض اتجاه النص من اليسار إلى اليمين (للغة الإنجليزية)"
            }
          ]
        }
      ]
    },
    {
      "tag": "br",
      "description": "ينشئ فاصل سطر داخل النص، يبدأ السطر التالي من سطر جديد دون بدء فقرة جديدة، يستخدم للعناوين أو القصائد",
      "properties": [
        {
          "name": "clear",
          "description": "خاصية قديمة كانت تجبر السطر الجديد على النزول أسفل أي عنصر عائم (float) بدل الالتفاف حوله، استُبدلت بخاصية clear في CSS",
          "values": [
            {
              "value": "left",
              "description": "ينزل تحت أي عنصر عائم لليسار"
            },
            {
              "value": "right",
              "description": "ينزل تحت أي عنصر عائم لليمين"
            },
            {
              "value": "all",
              "description": "ينزل تحت جميع العناصر العائمة من الجهتين"
            },
            {
              "value": "none",
              "description": "لا يتأثر بالعناصر العائمة (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "wbr",
      "description": "يحدد نقطة يمكن للمتصفح كسر السطر عندها إذا احتاج الأمر، يستخدم للكلمات الطويلة أو الروابط الطويلة",
      "properties": []
    },
    {
      "tag": "font",
      "description": "خاصية قديمة كانت تتحكم بلون وحجم وخط النص مباشرة داخل HTML، مهجورة تماماً واستُبدلت بـ CSS، لا يجب استخدامها في مشاريع جديدة",
      "properties": [
        {
          "name": "color",
          "description": "كان يحدد لون النص، استُبدل بخاصية color في CSS",
          "values": [
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#ff6347",
              "description": "لون طماطم"
            },
            {
              "value": "#ffa500",
              "description": "لون برتقالي"
            },
            {
              "value": "#ffffe0",
              "description": "لون كريمي"
            },
            {
              "value": "#f5f5dc",
              "description": "لون بيج"
            },
            {
              "value": "#d2b48c",
              "description": "لون بني فاتح"
            },
            {
              "value": "#8b4513",
              "description": "لون بني داكن"
            },
            {
              "value": "#000080",
              "description": "لون أزرق بحري"
            },
            {
              "value": "#008000",
              "description": "لون أخضر غامق"
            },
            {
              "value": "#800000",
              "description": "لون كستنائي"
            },
            {
              "value": "#808000",
              "description": "لون زيتوني"
            },
            {
              "value": "#800080",
              "description": "لون بنفسجي"
            },
            {
              "value": "#008080",
              "description": "لون تيل"
            },
            {
              "value": "#c0c0c0",
              "description": "لون فضي"
            },
            {
              "value": "#ffd700",
              "description": "لون ذهبي"
            },
            {
              "value": "#ff69b4",
              "description": "لون وردي ساخن"
            },
            {
              "value": "#ff1493",
              "description": "لون وردي غامق"
            },
            {
              "value": "#4b0082",
              "description": "لون نيلي"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "face",
          "description": "كان يحدد نوع الخط المستخدم، استُبدل بخاصية font-family في CSS",
          "values": [
            {
              "value": "Arial",
              "description": "خط أريال"
            },
            {
              "value": "Tahoma",
              "description": "خط تاهوما"
            },
            {
              "value": "Verdana",
              "description": "خط فيردانا"
            },
            {
              "value": "Times New Roman",
              "description": "خط تايمز نيو رومان"
            },
            {
              "value": "Georgia",
              "description": "خط جورجيا"
            },
            {
              "value": "Courier New",
              "description": "خط كورير نيو"
            },
            {
              "value": "Comic Sans MS",
              "description": "خط كوميك سانس"
            },
            {
              "value": "Impact",
              "description": "خط إمباكت"
            },
            {
              "value": "Arial Black",
              "description": "خط أريال بلاك"
            },
            {
              "value": "Helvetica",
              "description": "خط هلفتيكا"
            },
            {
              "value": "Geneva",
              "description": "خط جنيف"
            },
            {
              "value": "Verdana, Arial, sans-serif",
              "description": "خطوط متعددة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "size",
          "description": "كان يحدد حجم الخط برقم من 1 إلى 7، استُبدل بخاصية font-size في CSS",
          "values": [
            {
              "value": "1",
              "description": "أصغر حجم"
            },
            {
              "value": "2",
              "description": "صغير جداً"
            },
            {
              "value": "3",
              "description": "صغير"
            },
            {
              "value": "4",
              "description": "متوسط"
            },
            {
              "value": "5",
              "description": "كبير"
            },
            {
              "value": "6",
              "description": "كبير جداً"
            },
            {
              "value": "7",
              "description": "أكبر حجم"
            },
            {
              "value": "+1",
              "description": "زيادة حجم واحد عن الحجم الحالي"
            },
            {
              "value": "+2",
              "description": "زيادة حجمين عن الحجم الحالي"
            },
            {
              "value": "-1",
              "description": "نقصان حجم واحد عن الحجم الحالي"
            },
            {
              "value": "-2",
              "description": "نقصان حجمين عن الحجم الحالي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "center",
      "description": "خاصية قديمة كانت توسّط محتواها أفقياً تلقائياً، مهجورة تماماً واستُبدلت بخاصية text-align أو margin:auto في CSS",
      "properties": []
    },
    {
      "tag": "acronym",
      "description": "خاصية قديمة كانت تمثل اختصاراً منطوقاً ككلمة واحدة (مثل NASA)، مهجورة واستُبدلت بعنصر abbr الذي يغطي جميع أنواع الاختصارات",
      "properties": [
        {
          "name": "title",
          "description": "كان يعرض الشرح الكامل للاختصار عند تمرير الماوس",
          "values": [
            {
              "value": "الإدارة الوطنية للملاحة الجوية والفضاء",
              "description": "شرح اختصار NASA"
            },
            {
              "value": "الرابطة الوطنية لكرة السلة",
              "description": "شرح اختصار NBA"
            },
            {
              "value": "رادار تحديد المواقع",
              "description": "شرح اختصار RADAR"
            },
            {
              "value": "صندوق النقد الدولي",
              "description": "شرح اختصار IMF"
            },
            {
              "value": "منظمة حلف شمال الأطلسي",
              "description": "شرح اختصار NATO"
            },
            {
              "value": "المنظمة الدولية للطاقة الذرية",
              "description": "شرح اختصار IAEA"
            },
            {
              "value": "الشرطة الدولية",
              "description": "شرح اختصار Interpol"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "big",
      "description": "خاصية قديمة كانت تكبر حجم خط النص درجة واحدة عن النص المحيط، مهجورة تماماً واستُبدلت بخاصية font-size في CSS",
      "properties": []
    },
    {
      "tag": "tt",
      "description": "خاصية قديمة كانت تعرض النص بخط أحادي التباعد يشبه الآلة الكاتبة، مهجورة واستُبدلت بعنصر code أو خاصية font-family:monospace في CSS",
      "properties": []
    },
    {
      "tag": "strike",
      "description": "خاصية قديمة كانت تعرض النص مشطوباً، مهجورة تماماً واستُبدلت بعنصر s أو del حسب المعنى المقصود",
      "properties": []
    },
    {
      "tag": "marquee",
      "description": "عنصر قديم غير معياري كان يجعل النص أو المحتوى يتحرك تلقائياً (يمرّ، يرتد، ينزلق) عبر الشاشة، مهجور تماماً ولا يجب استخدامه، الأنيميشن الحديث يتم عبر CSS أو JavaScript",
      "properties": [
        {
          "name": "behavior",
          "description": "كان يحدد نمط حركة المحتوى",
          "values": [
            {
              "value": "scroll",
              "description": "يمرر المحتوى بشكل متواصل من جهة لأخرى"
            },
            {
              "value": "slide",
              "description": "ينزلق المحتوى مرة واحدة ثم يتوقف عند الحافة"
            },
            {
              "value": "alternate",
              "description": "يرتد المحتوى ذهاباً وإياباً بين الحافتين"
            }
          ]
        },
        {
          "name": "direction",
          "description": "كان يحدد اتجاه حركة المحتوى",
          "values": [
            {
              "value": "left",
              "description": "يتحرك المحتوى نحو اليسار"
            },
            {
              "value": "right",
              "description": "يتحرك المحتوى نحو اليمين"
            },
            {
              "value": "up",
              "description": "يتحرك المحتوى نحو الأعلى"
            },
            {
              "value": "down",
              "description": "يتحرك المحتوى نحو الأسفل"
            }
          ]
        },
        {
          "name": "scrollamount",
          "description": "كان يحدد سرعة الحركة، كلما زاد الرقم زادت السرعة",
          "values": [
            {
              "value": "1",
              "description": "حركة بطيئة جداً"
            },
            {
              "value": "2",
              "description": "حركة بطيئة"
            },
            {
              "value": "3",
              "description": "حركة بطيئة"
            },
            {
              "value": "4",
              "description": "حركة متوسطة"
            },
            {
              "value": "5",
              "description": "حركة متوسطة"
            },
            {
              "value": "6",
              "description": "السرعة الافتراضية"
            },
            {
              "value": "7",
              "description": "حركة سريعة"
            },
            {
              "value": "8",
              "description": "حركة سريعة"
            },
            {
              "value": "9",
              "description": "حركة سريعة"
            },
            {
              "value": "10",
              "description": "حركة سريعة جداً"
            },
            {
              "value": "12",
              "description": "حركة سريعة جداً"
            },
            {
              "value": "15",
              "description": "حركة سريعة"
            },
            {
              "value": "20",
              "description": "حركة سريعة جداً جداً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "loop",
          "description": "كان يحدد عدد مرات تكرار الحركة",
          "values": [
            {
              "value": "-1",
              "description": "يكرر الحركة إلى ما لا نهاية (الافتراضي)"
            },
            {
              "value": "0",
              "description": "يكرر الحركة إلى ما لا نهاية"
            },
            {
              "value": "1",
              "description": "يكرر الحركة مرة واحدة فقط"
            },
            {
              "value": "2",
              "description": "يكرر الحركة مرتين فقط"
            },
            {
              "value": "3",
              "description": "يكرر الحركة 3 مرات فقط ثم يتوقف"
            },
            {
              "value": "4",
              "description": "يكرر الحركة 4 مرات فقط"
            },
            {
              "value": "5",
              "description": "يكرر الحركة 5 مرات فقط"
            },
            {
              "value": "10",
              "description": "يكرر الحركة 10 مرات فقط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "scrolldelay",
          "description": "كان يحدد التأخير بالمللي ثانية بين كل حركة وأخرى",
          "values": [
            {
              "value": "60",
              "description": "تأخير 60 مللي ثانية (الافتراضي)"
            },
            {
              "value": "85",
              "description": "تأخير 85 مللي ثانية"
            },
            {
              "value": "100",
              "description": "تأخير 100 مللي ثانية"
            },
            {
              "value": "200",
              "description": "تأخير 200 مللي ثانية"
            },
            {
              "value": "500",
              "description": "تأخير 500 مللي ثانية"
            },
            {
              "value": "1000",
              "description": "تأخير 1000 مللي ثانية (ثانية واحدة)"
            },
            {
              "value": "2000",
              "description": "تأخير 2000 مللي ثانية (ثانيتين)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "bgcolor",
          "description": "كان يحدد لون خلفية الماركي",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "كان يحدد ارتفاع الماركي بالبكسل أو النسبة المئوية",
          "values": [
            {
              "value": "auto",
              "description": "ارتفاع تلقائي"
            },
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "300",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "50%",
              "description": "نصف ارتفاع الحاوية"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "كان يحدد عرض الماركي بالبكسل أو النسبة المئوية",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "50%",
              "description": "نصف عرض الحاوية"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع عرض الحاوية"
            },
            {
              "value": "100%",
              "description": "عرض كامل الحاوية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "blink",
      "description": "عنصر قديم غير معياري كان يجعل النص يومض (يظهر ويختفي بشكل متكرر)، لم يدعمه سوى متصفح فايرفوكس قديماً، مهجور تماماً ومزعج لتجربة المستخدم، لا يجب استخدامه إطلاقاً",
      "properties": []
    },
    {
      "tag": "ruby",
      "description": "يعرض تعليقاً توضيحياً صغيراً فوق النص (أو بجانبه)، شائع في النصوص اليابانية والصينية لشرح طريقة النطق",
      "properties": []
    },
    {
      "tag": "rt",
      "description": "يعرض شرح النطق أو التفسير فوق النص داخل عنصر ruby، يوضح كيفية قراءة الكلمة أو نطقها",
      "properties": []
    },
    {
      "tag": "rp",
      "description": "يعرض أقواساً احتياطية حول شرح النطق للمتصفحات التي لا تدعم عنصر ruby، يمنع ظهور النص بشكل غير مفهوم",
      "properties": []
    }
  ],
  "forms": [
    {
      "tag": "form",
      "description": "يحتوي على مجموعة من عناصر الإدخال لجمع بيانات المستخدم وإرسالها إلى الخادم للمعالجة",
      "properties": [
        {
          "name": "action",
          "description": "يحدد عنوان URL الذي سترسل إليه بيانات النموذج عند الضغط على زر الإرسال",
          "values": [
            {
              "value": "/submit",
              "description": "يرسل البيانات إلى صفحة داخل الموقع"
            },
            {
              "value": "/api/register",
              "description": "يرسل البيانات إلى API داخل الموقع"
            },
            {
              "value": "https://example.com/api",
              "description": "يرسل البيانات إلى موقع خارجي"
            },
            {
              "value": "https://example.com/process",
              "description": "يرسل البيانات لمعالجتها خارجياً"
            },
            {
              "value": "#",
              "description": "يرسل البيانات إلى نفس الصفحة"
            },
            {
              "value": "",
              "description": "يرسل البيانات إلى نفس الصفحة (افتراضي)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "method",
          "description": "يحدد طريقة إرسال البيانات إلى الخادم، إما بإظهارها في الرابط (GET) أو إخفائها (POST)",
          "values": [
            {
              "value": "GET",
              "description": "يرسل البيانات في الرابط، يظهرها في شريط العنوان، مناسب للبحث"
            },
            {
              "value": "POST",
              "description": "يرسل البيانات مخفية في الخلفية، مناسب للبيانات الحساسة أو الكبيرة"
            },
            {
              "value": "PUT",
              "description": "يرسل البيانات لتعديل مورد موجود على الخادم"
            },
            {
              "value": "DELETE",
              "description": "يرسل طلب لحذف مورد من الخادم"
            },
            {
              "value": "PATCH",
              "description": "يرسل تحديثات جزئية لمورد موجود"
            },
            {
              "value": "HEAD",
              "description": "يرسل طلب للحصول على معلومات الرأس فقط"
            }
          ]
        },
        {
          "name": "enctype",
          "description": "يحدد كيفية تشفير البيانات قبل إرسالها، مهم عند رفع الملفات",
          "values": [
            {
              "value": "application/x-www-form-urlencoded",
              "description": "التشفير الافتراضي، يرسل البيانات كنص"
            },
            {
              "value": "multipart/form-data",
              "description": "يستخدم عند رفع الملفات، يرسل البيانات كأجزاء متعددة"
            },
            {
              "value": "text/plain",
              "description": "يرسل البيانات كنص عادي، استخدام نادر"
            }
          ]
        },
        {
          "name": "target",
          "description": "يحدد أين يعرض نتيجة إرسال النموذج، مثل نفس النافذة أو نافذة جديدة",
          "values": [
            {
              "value": "_blank",
              "description": "يفتح النتيجة في نافذة أو تبويب جديد"
            },
            {
              "value": "_self",
              "description": "يفتح النتيجة في نفس النافذة (الافتراضي)"
            },
            {
              "value": "_parent",
              "description": "يفتح النتيجة في الإطار الأب"
            },
            {
              "value": "_top",
              "description": "يفتح النتيجة في أعلى النافذة"
            },
            {
              "value": "iframeName",
              "description": "يفتح النتيجة في إطار iframe باسم محدد"
            }
          ]
        },
        {
          "name": "novalidate",
          "description": "يلغي التحقق من صحة البيانات قبل الإرسال، يسمح بإرسال البيانات حتى لو كانت غير مكتملة",
          "values": [
            {
              "value": "",
              "description": "يلغي التحقق (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "autocomplete",
          "description": "يسمح للمتصفح بتذكر البيانات التي أدخلها المستخدم سابقاً وإكمالها تلقائياً",
          "values": [
            {
              "value": "on",
              "description": "يفعّل الإكمال التلقائي للبيانات"
            },
            {
              "value": "off",
              "description": "يلغي الإكمال التلقائي، للبيانات الحساسة"
            }
          ]
        },
        {
          "name": "accept-charset",
          "description": "يحدد ترميز الأحرف الذي يقبله الخادم عند إرسال بيانات النموذج، يمنع تشوه النصوص غير الإنجليزية",
          "values": [
            {
              "value": "UTF-8",
              "description": "يدعم كل اللغات بما فيها العربية، الترميز الموصى به دائماً"
            },
            {
              "value": "ISO-8859-1",
              "description": "يدعم اللغات الأوروبية الغربية، لا يدعم العربية"
            },
            {
              "value": "windows-1256",
              "description": "يدعم اللغة العربية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rel",
          "description": "يحدد العلاقة بين الصفحة الحالية والوجهة التي سيرسل إليها النموذج، مشابه لخاصية rel في الروابط",
          "values": [
            {
              "value": "nofollow",
              "description": "يأمر محركات البحث بعدم متابعة وجهة الإرسال"
            },
            {
              "value": "noopener",
              "description": "يمنع الصفحة الجديدة الناتجة عن الإرسال من التحكم بالصفحة الحالية"
            },
            {
              "value": "noreferrer",
              "description": "يمنع إرسال معلومات المصدر مع طلب الإرسال"
            },
            {
              "value": "external",
              "description": "يشير إلى أن وجهة الإرسال خارج الموقع"
            }
          ]
        },
        {
          "name": "name",
          "description": "يحدد اسماً فريداً للنموذج، يمكن استخدامه للوصول إليه عبر document.forms في جافاسكريبت",
          "values": [
            {
              "value": "loginForm",
              "description": "اسم نموذج تسجيل الدخول"
            },
            {
              "value": "contactForm",
              "description": "اسم نموذج التواصل"
            },
            {
              "value": "registerForm",
              "description": "اسم نموذج التسجيل"
            },
            {
              "value": "searchForm",
              "description": "اسم نموذج البحث"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "input",
      "description": "حقل إدخال بيانات يتغير شكله ووظيفته حسب نوعه، يستخدم لجمع النصوص والأرقام والتواريخ والملفات",
      "properties": [
        {
          "name": "type",
          "description": "يحدد نوع الحقل وشكل إدخال البيانات، يتغير حسب نوع البيانات المطلوبة",
          "values": [
            {
              "value": "text",
              "description": "حقل نص عادي لإدخال الكلمات والجمل"
            },
            {
              "value": "password",
              "description": "حقل كلمة مرور، يخفي الأحرف بنقاط للحماية"
            },
            {
              "value": "email",
              "description": "حقل بريد إلكتروني، يتحقق من صحة الإيميل"
            },
            {
              "value": "number",
              "description": "حقل أرقام، يسمح بإدخال الأرقام فقط"
            },
            {
              "value": "tel",
              "description": "حقل رقم هاتف، يفتح لوحة أرقام على الجوال"
            },
            {
              "value": "url",
              "description": "حقل رابط، يتحقق من صحة الرابط"
            },
            {
              "value": "search",
              "description": "حقل بحث، يظهر زر مسح للنص"
            },
            {
              "value": "date",
              "description": "حقل تاريخ، يعرض منتقي تاريخ"
            },
            {
              "value": "datetime-local",
              "description": "حقل تاريخ ووقت محلي"
            },
            {
              "value": "month",
              "description": "حقل شهر وسنة"
            },
            {
              "value": "week",
              "description": "حقل أسبوع وسنة"
            },
            {
              "value": "time",
              "description": "حقل وقت"
            },
            {
              "value": "color",
              "description": "حقل اختيار لون، يعرض منتقي ألوان"
            },
            {
              "value": "range",
              "description": "شريط تمرير لاختيار قيمة من نطاق"
            },
            {
              "value": "checkbox",
              "description": "خانة اختيار متعددة، يمكن تحديد أكثر من خيار"
            },
            {
              "value": "radio",
              "description": "زر اختيار واحد، يمكن تحديد خيار واحد فقط"
            },
            {
              "value": "file",
              "description": "حقل رفع ملفات، يفتح مستكشف الملفات"
            },
            {
              "value": "submit",
              "description": "زر إرسال النموذج لإرسال البيانات"
            },
            {
              "value": "reset",
              "description": "زر إعادة تعيين النموذج إلى القيم الافتراضية"
            },
            {
              "value": "button",
              "description": "زر عادي، لا يفعل شيئاً دون سكريبت"
            },
            {
              "value": "image",
              "description": "زر على شكل صورة، يستخدم لإرسال النموذج"
            },
            {
              "value": "hidden",
              "description": "حقل مخفي، يخزن بيانات لا يراها المستخدم"
            }
          ]
        },
        {
          "name": "name",
          "description": "يحدد اسم الحقل الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
          "values": [
            {
              "value": "username",
              "description": "اسم المستخدم"
            },
            {
              "value": "email",
              "description": "البريد الإلكتروني"
            },
            {
              "value": "password",
              "description": "كلمة المرور"
            },
            {
              "value": "first_name",
              "description": "الاسم الأول"
            },
            {
              "value": "last_name",
              "description": "اسم العائلة"
            },
            {
              "value": "phone",
              "description": "رقم الهاتف"
            },
            {
              "value": "age",
              "description": "العمر"
            },
            {
              "value": "address",
              "description": "العنوان"
            },
            {
              "value": "city",
              "description": "المدينة"
            },
            {
              "value": "country",
              "description": "الدولة"
            },
            {
              "value": "gender",
              "description": "الجنس"
            },
            {
              "value": "birthdate",
              "description": "تاريخ الميلاد"
            },
            {
              "value": "comment",
              "description": "تعليق"
            },
            {
              "value": "search",
              "description": "بحث"
            },
            {
              "value": "file",
              "description": "ملف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "value",
          "description": "يحدد القيمة الافتراضية للحقل التي تظهر للمستخدم عند تحميل الصفحة",
          "values": [
            {
              "value": "نص افتراضي",
              "description": "قيمة تظهر في الحقل"
            },
            {
              "value": "example@email.com",
              "description": "بريد افتراضي"
            },
            {
              "value": "123456",
              "description": "رقم افتراضي"
            },
            {
              "value": "2026-07-28",
              "description": "تاريخ افتراضي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "placeholder",
          "description": "يعرض نصاً تلميحياً داخل الحقل يختفي عند الكتابة، يوضح للمستخدم ما يجب كتابته",
          "values": [
            {
              "value": "اكتب اسمك هنا",
              "description": "نص تلميحي للحقل"
            },
            {
              "value": "example@email.com",
              "description": "تلميح للبريد الإلكتروني"
            },
            {
              "value": "اختر تاريخاً",
              "description": "تلميح للتاريخ"
            }
          ],
          "freeInput": true
        },
        {
          "name": "required",
          "description": "يجعل الحقل إلزامياً، يمنع إرسال النموذج إذا كان الحقل فارغاً",
          "values": [
            {
              "value": "",
              "description": "يجعل الحقل إلزامياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "disabled",
          "description": "يعطل الحقل ويجعله غير قابل للتفاعل، لا يمكن تغيير قيمته أو النقر عليه",
          "values": [
            {
              "value": "",
              "description": "يعطل الحقل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "readonly",
          "description": "يجعل الحقل للقراءة فقط، يمكن رؤية النص ولكن لا يمكن تعديله",
          "values": [
            {
              "value": "",
              "description": "يجعل للقراءة فقط (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "checked",
          "description": "يحدد أن خيار checkbox أو radio محدد مسبقاً عند تحميل الصفحة",
          "values": [
            {
              "value": "",
              "description": "يجعل الخيار محدداً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "maxlength",
          "description": "يحدد أقصى عدد من الأحرف يمكن إدخالها في الحقل، يمنع إدخال نصوص طويلة",
          "values": [
            {
              "value": "10",
              "description": "حد أقصى 10 أحرف"
            },
            {
              "value": "20",
              "description": "حد أقصى 20 حرف"
            },
            {
              "value": "50",
              "description": "حد أقصى 50 حرف"
            },
            {
              "value": "100",
              "description": "حد أقصى 100 حرف"
            },
            {
              "value": "255",
              "description": "حد أقصى 255 حرف"
            },
            {
              "value": "500",
              "description": "حد أقصى 500 حرف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "minlength",
          "description": "يحدد أقل عدد من الأحرف يجب إدخالها، يمنع إرسال النموذج بالنصوص القصيرة جداً",
          "values": [
            {
              "value": "1",
              "description": "حد أدنى حرف واحد"
            },
            {
              "value": "2",
              "description": "حد أدنى حرفين"
            },
            {
              "value": "3",
              "description": "حد أدنى 3 أحرف"
            },
            {
              "value": "6",
              "description": "حد أدنى 6 أحرف"
            },
            {
              "value": "8",
              "description": "حد أدنى 8 أحرف"
            },
            {
              "value": "10",
              "description": "حد أدنى 10 أحرف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "max",
          "description": "يحدد القيمة القصوى للأرقام أو التاريخ، يمنع إدخال قيم أكبر من الحد",
          "values": [
            {
              "value": "10",
              "description": "الحد الأقصى 10"
            },
            {
              "value": "100",
              "description": "الحد الأقصى 100"
            },
            {
              "value": "1000",
              "description": "الحد الأقصى 1000"
            },
            {
              "value": "2026-12-31",
              "description": "الحد الأقصى 31 ديسمبر 2026"
            },
            {
              "value": "2027-12-31",
              "description": "الحد الأقصى 31 ديسمبر 2027"
            },
            {
              "value": "23:59",
              "description": "الحد الأقصى 23:59"
            },
            {
              "value": "100%",
              "description": "الحد الأقصى 100%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "min",
          "description": "يحدد القيمة الدنيا للأرقام أو التاريخ، يمنع إدخال قيم أقل من الحد",
          "values": [
            {
              "value": "0",
              "description": "الحد الأدنى 0"
            },
            {
              "value": "1",
              "description": "الحد الأدنى 1"
            },
            {
              "value": "18",
              "description": "الحد الأدنى 18"
            },
            {
              "value": "2026-01-01",
              "description": "الحد الأدنى 1 يناير 2026"
            },
            {
              "value": "2025-01-01",
              "description": "الحد الأدنى 1 يناير 2025"
            },
            {
              "value": "00:00",
              "description": "الحد الأدنى 00:00"
            },
            {
              "value": "0%",
              "description": "الحد الأدنى 0%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "step",
          "description": "يحدد الفرق بين القيم المسموحة في الحقل الرقمي، يتحكم في دقة الأرقام",
          "values": [
            {
              "value": "1",
              "description": "زيادة بواحد (أعداد صحيحة)"
            },
            {
              "value": "0.1",
              "description": "زيادة بـ 0.1 (رقم عشري)"
            },
            {
              "value": "0.5",
              "description": "زيادة بنصف (أرقام عشرية)"
            },
            {
              "value": "5",
              "description": "زيادة بـ 5"
            },
            {
              "value": "10",
              "description": "زيادة بعشرة"
            },
            {
              "value": "100",
              "description": "زيادة بمئة"
            },
            {
              "value": "any",
              "description": "أي قيمة (بدون تقييد)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "pattern",
          "description": "يحدد نمطاً معيناً (Regex) للتحقق من صحة الإدخال، يمنع إرسال بيانات غير مطابقة",
          "values": [
            {
              "value": "[A-Za-z]{3,}",
              "description": "ثلاثة أحرف إنجليزية على الأقل"
            },
            {
              "value": "[A-Za-z]+",
              "description": "حرف إنجليزي واحد على الأقل"
            },
            {
              "value": "[0-9]{4}",
              "description": "أربعة أرقام بالضبط"
            },
            {
              "value": "[0-9]{5}",
              "description": "خمسة أرقام بالضبط (رمز بريدي)"
            },
            {
              "value": "[0-9]{10}",
              "description": "عشرة أرقام بالضبط (رقم هاتف)"
            },
            {
              "value": "[A-Za-z0-9]+",
              "description": "حروف وأرقام فقط"
            },
            {
              "value": "[A-Za-z0-9_]{3,20}",
              "description": "اسم مستخدم صالح"
            },
            {
              "value": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
              "description": "بريد إلكتروني"
            },
            {
              "value": "^[0-9]{2}/[0-9]{2}/[0-9]{4}$",
              "description": "تاريخ بالتنسيق DD/MM/YYYY"
            }
          ],
          "freeInput": true
        },
        {
          "name": "accept",
          "description": "يحدد أنواع الملفات المسموح رفعها، يرشح الملفات التي تظهر في مستكشف الملفات",
          "values": [
            {
              "value": "image/*",
              "description": "جميع أنواع الصور"
            },
            {
              "value": "image/png",
              "description": "صور PNG فقط"
            },
            {
              "value": "image/jpeg",
              "description": "صور JPEG فقط"
            },
            {
              "value": "image/png, image/jpeg",
              "description": "صور PNG و JPEG فقط"
            },
            {
              "value": "video/*",
              "description": "جميع أنواع الفيديو"
            },
            {
              "value": "audio/*",
              "description": "جميع أنواع الصوت"
            },
            {
              "value": ".pdf",
              "description": "ملفات PDF فقط"
            },
            {
              "value": ".doc,.docx",
              "description": "ملفات Word"
            },
            {
              "value": ".xls,.xlsx",
              "description": "ملفات Excel"
            },
            {
              "value": ".zip,.rar",
              "description": "ملفات مضغوطة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "multiple",
          "description": "يسمح باختيار أكثر من قيمة أو رفع أكثر من ملف، يفعّل التحديد المتعدد",
          "values": [
            {
              "value": "",
              "description": "يفعّل التحديد المتعدد (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "autofocus",
          "description": "يجعل هذا الحقل هو الأول الذي يحصل على التركيز عند تحميل الصفحة، يوفر على المستخدم النقر",
          "values": [
            {
              "value": "",
              "description": "يركز على الحقل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "autocomplete",
          "description": "يسمح للمتصفح بتذكر قيمة هذا الحقل وإكمالها تلقائياً في المرات القادمة",
          "values": [
            {
              "value": "on",
              "description": "يفعّل الإكمال التلقائي"
            },
            {
              "value": "off",
              "description": "يلغي الإكمال التلقائي، للبيانات الحساسة"
            },
            {
              "value": "username",
              "description": "يقترح اسم مستخدم محفوظ"
            },
            {
              "value": "email",
              "description": "يقترح بريداً إلكترونياً محفوظاً"
            },
            {
              "value": "name",
              "description": "يقترح اسماً محفوظاً"
            },
            {
              "value": "given-name",
              "description": "الاسم الأول"
            },
            {
              "value": "family-name",
              "description": "اسم العائلة"
            },
            {
              "value": "nickname",
              "description": "الاسم المستعار"
            },
            {
              "value": "organization",
              "description": "المنظمة"
            },
            {
              "value": "street-address",
              "description": "عنوان الشارع"
            },
            {
              "value": "address-line1",
              "description": "سطر العنوان الأول"
            },
            {
              "value": "address-line2",
              "description": "سطر العنوان الثاني"
            },
            {
              "value": "address-line3",
              "description": "سطر العنوان الثالث"
            },
            {
              "value": "postal-code",
              "description": "الرمز البريدي"
            },
            {
              "value": "country",
              "description": "الدولة"
            },
            {
              "value": "tel",
              "description": "رقم الهاتف"
            },
            {
              "value": "tel-country-code",
              "description": "مفتاح الدولة"
            },
            {
              "value": "photo",
              "description": "الصورة الشخصية"
            },
            {
              "value": "url",
              "description": "الرابط"
            },
            {
              "value": "bday",
              "description": "تاريخ الميلاد"
            },
            {
              "value": "bday-day",
              "description": "اليوم"
            },
            {
              "value": "bday-month",
              "description": "الشهر"
            },
            {
              "value": "bday-year",
              "description": "السنة"
            },
            {
              "value": "sex",
              "description": "الجنس"
            },
            {
              "value": "one-time-code",
              "description": "رمز تحقق لمرة واحدة"
            }
          ]
        },
        {
          "name": "list",
          "description": "يربط الحقل بقائمة خيارات مقترحة معرّفة بعنصر datalist، تظهر كاقتراحات أثناء الكتابة",
          "values": [
            {
              "value": "countries",
              "description": "يربط الحقل بقائمة datalist معرفها countries"
            },
            {
              "value": "cities",
              "description": "يربط الحقل بقائمة datalist معرفها cities"
            },
            {
              "value": "suggestions",
              "description": "يربط الحقل بقائمة datalist معرفها suggestions"
            }
          ],
          "freeInput": true
        },
        {
          "name": "inputmode",
          "description": "يحدد نوع لوحة المفاتيح التي تظهر على الجوال عند التركيز على الحقل، يسهل إدخال نوع بيانات معين",
          "values": [
            {
              "value": "text",
              "description": "لوحة مفاتيح نصية عادية"
            },
            {
              "value": "numeric",
              "description": "لوحة أرقام فقط (بدون فاصلة أو سالب)"
            },
            {
              "value": "decimal",
              "description": "لوحة أرقام مع فاصلة عشرية"
            },
            {
              "value": "tel",
              "description": "لوحة أرقام هاتف"
            },
            {
              "value": "email",
              "description": "لوحة تحتوي رمز @ لتسهيل كتابة البريد"
            },
            {
              "value": "url",
              "description": "لوحة تحتوي / و .com لتسهيل كتابة الروابط"
            },
            {
              "value": "search",
              "description": "لوحة نصية مع زر بحث بدل زر الإدخال"
            },
            {
              "value": "none",
              "description": "يمنع ظهور لوحة المفاتيح، للحقول التي لها إدخال مخصص"
            }
          ]
        },
        {
          "name": "size",
          "description": "يحدد عرض الحقل المرئي بعدد الأحرف تقريباً، يختلف عن maxlength الذي يحدد الحد الأقصى الفعلي للإدخال",
          "values": [
            {
              "value": "5",
              "description": "عرض يتسع لـ 5 أحرف"
            },
            {
              "value": "10",
              "description": "عرض يتسع لـ 10 أحرف"
            },
            {
              "value": "20",
              "description": "عرض يتسع لعرض 20 حرفاً تقريباً"
            },
            {
              "value": "30",
              "description": "عرض يتسع لـ 30 حرفاً"
            },
            {
              "value": "40",
              "description": "عرض يتسع لعرض 40 حرفاً تقريباً"
            },
            {
              "value": "50",
              "description": "عرض يتسع لـ 50 حرفاً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dirname",
          "description": "يرسل اتجاه كتابة النص (rtl أو ltr) مع بيانات النموذج تحت اسم يحدده هذا الحقل، يفيد عند الحاجة لمعرفة الخادم لاتجاه النص المُدخل",
          "values": [
            {
              "value": "message.dir",
              "description": "يرسل اتجاه النص مع البيانات باسم message.dir"
            },
            {
              "value": "text.dir",
              "description": "يرسل اتجاه النص مع البيانات باسم text.dir"
            }
          ],
          "freeInput": true
        },
        {
          "name": "capture",
          "description": "يفتح الكاميرا أو الميكروفون مباشرة عند رفع ملف من الجوال بدل فتح مستكشف الملفات، يستخدم مع type='file'",
          "values": [
            {
              "value": "user",
              "description": "يفتح الكاميرا الأمامية (السيلفي)"
            },
            {
              "value": "environment",
              "description": "يفتح الكاميرا الخلفية"
            }
          ]
        },
        {
          "name": "alt",
          "description": "يحدد نصاً بديلاً لزر الصورة، يظهر إذا تعذر تحميل الصورة، يستخدم فقط مع type='image'",
          "values": [
            {
              "value": "إرسال النموذج",
              "description": "نص بديل لزر صورة الإرسال"
            },
            {
              "value": "بحث",
              "description": "نص بديل لزر صورة البحث"
            },
            {
              "value": "حفظ",
              "description": "نص بديل لزر صورة الحفظ"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع زر الصورة بالبكسل، يستخدم فقط مع type='image'",
          "values": [
            {
              "value": "20",
              "description": "ارتفاع 20 بكسل"
            },
            {
              "value": "30",
              "description": "ارتفاع 30 بكسل"
            },
            {
              "value": "40",
              "description": "ارتفاع 40 بكسل"
            },
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "60",
              "description": "ارتفاع 60 بكسل"
            },
            {
              "value": "80",
              "description": "ارتفاع 80 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض زر الصورة بالبكسل، يستخدم فقط مع type='image'",
          "values": [
            {
              "value": "50",
              "description": "عرض 50 بكسل"
            },
            {
              "value": "80",
              "description": "عرض 80 بكسل"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "120",
              "description": "عرض 120 بكسل"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "250",
              "description": "عرض 250 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "form",
          "description": "يربط الحقل بنموذج معين بواسطة معرفه، يسمح للحقل بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
          "values": [
            {
              "value": "myForm",
              "description": "يربط الحقل بالنموذج ذي المعرف myForm"
            },
            {
              "value": "contactForm",
              "description": "يربط الحقل بنموذج الاتصال"
            }
          ],
          "freeInput": true
        },
        {
          "name": "formaction",
          "description": "يخالف عنوان action الخاص بالنموذج عند إرسال النموذج بهذا الحقل تحديداً (لأزرار type='submit' أو type='image')",
          "values": [
            {
              "value": "/submit-draft",
              "description": "يرسل البيانات لوجهة مختلفة كحفظ مسودة"
            },
            {
              "value": "/save",
              "description": "يرسل البيانات لحفظها"
            },
            {
              "value": "/publish",
              "description": "يرسل البيانات لنشرها"
            }
          ],
          "freeInput": true
        },
        {
          "name": "formenctype",
          "description": "يخالف طريقة تشفير بيانات النموذج عند الإرسال بهذا الحقل تحديداً",
          "values": [
            {
              "value": "multipart/form-data",
              "description": "يشفر البيانات كأجزاء متعددة، مهم عند وجود ملفات"
            },
            {
              "value": "text/plain",
              "description": "يرسل البيانات كنص عادي"
            }
          ]
        },
        {
          "name": "formmethod",
          "description": "يخالف طريقة الإرسال (GET أو POST) الخاصة بالنموذج عند الإرسال بهذا الحقل تحديداً",
          "values": [
            {
              "value": "GET",
              "description": "يرسل عبر GET بدل ما هو محدد في النموذج"
            },
            {
              "value": "POST",
              "description": "يرسل عبر POST بدل ما هو محدد في النموذج"
            }
          ]
        },
        {
          "name": "formnovalidate",
          "description": "يلغي التحقق من صحة الحقول عند الإرسال بهذا الحقل تحديداً، مفيد لأزرار مثل 'حفظ كمسودة'",
          "values": [
            {
              "value": "",
              "description": "يلغي التحقق (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "formtarget",
          "description": "يخالف مكان عرض نتيجة الإرسال الخاص بالنموذج عند الإرسال بهذا الحقل تحديداً",
          "values": [
            {
              "value": "_blank",
              "description": "يعرض النتيجة في نافذة جديدة"
            },
            {
              "value": "_self",
              "description": "يعرض النتيجة في نفس النافذة"
            }
          ]
        },
        {
          "name": "popovertarget",
          "description": "يربط الحقل (عند type='button') بعنصر popover، فيفتحه أو يغلقه عند الضغط دون الحاجة لكتابة JavaScript",
          "values": [
            {
              "value": "myPopover",
              "description": "يتحكم بالعنصر ذي المعرف myPopover"
            },
            {
              "value": "dialog",
              "description": "يتحكم بالعنصر ذي المعرف dialog"
            }
          ],
          "freeInput": true
        },
        {
          "name": "popovertargetaction",
          "description": "يحدد نوع التحكم في popover المرتبط، سواء بفتحه أو إغلاقه أو التبديل بين الحالتين",
          "values": [
            {
              "value": "show",
              "description": "يظهر popover عند الضغط"
            },
            {
              "value": "hide",
              "description": "يخفي popover عند الضغط"
            },
            {
              "value": "toggle",
              "description": "يبدّل بين الإظهار والإخفاء (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "label",
      "description": "يربط نصاً وصفياً بحقل الإدخال، عند النقر على النص ينتقل التركيز إلى الحقل المرتبط",
      "properties": [
        {
          "name": "for",
          "description": "يربط التسمية بحقل معين بواسطة معرف الحقل، عند النقر على النص ينتقل للحقل",
          "values": [
            {
              "value": "username",
              "description": "مرتبط بحقل معرفه username"
            },
            {
              "value": "email",
              "description": "مرتبط بحقل معرفه email"
            },
            {
              "value": "password",
              "description": "مرتبط بحقل معرفه password"
            },
            {
              "value": "message",
              "description": "مرتبط بحقل معرفه message"
            },
            {
              "value": "country",
              "description": "مرتبط بحقل معرفه country"
            }
          ],
          "freeInput": true
        },
        {
          "name": "form",
          "description": "يربط التسمية بنموذج معين بواسطة معرفه، يسمح لها بالانتماء لنموذج حتى لو لم تكن موضوعة داخله",
          "values": [
            {
              "value": "myForm",
              "description": "يربط التسمية بالنموذج ذي المعرف myForm"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "button",
      "description": "ينشئ زراً تفاعلياً، يمكن استخدامه لإرسال النموذج أو تنفيذ أمر بواسطة JavaScript",
      "properties": [
        {
          "name": "type",
          "description": "يحدد وظيفة الزر، إما إرسال النموذج أو إعادة تعيينه أو زر عادي",
          "values": [
            {
              "value": "submit",
              "description": "زر إرسال النموذج، يرسل البيانات إلى الخادم"
            },
            {
              "value": "reset",
              "description": "زر إعادة تعيين، يعيد النموذج إلى قيمه الافتراضية"
            },
            {
              "value": "button",
              "description": "زر عادي، لا يفعل شيئاً دون سكريبت"
            }
          ]
        },
        {
          "name": "name",
          "description": "يحدد اسم الزر الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
          "values": [
            {
              "value": "action",
              "description": "اسم الزر"
            },
            {
              "value": "submit",
              "description": "اسم زر الإرسال"
            },
            {
              "value": "save",
              "description": "اسم زر الحفظ"
            },
            {
              "value": "delete",
              "description": "اسم زر الحذف"
            },
            {
              "value": "edit",
              "description": "اسم زر التعديل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "value",
          "description": "يحدد القيمة التي سترسل مع الزر عند الضغط عليه، تساعد في تحديد أي زر ضغط المستخدم",
          "values": [
            {
              "value": "save",
              "description": "قيمة الزر"
            },
            {
              "value": "publish",
              "description": "قيمة زر النشر"
            },
            {
              "value": "draft",
              "description": "قيمة زر الحفظ كمسودة"
            },
            {
              "value": "delete",
              "description": "قيمة زر الحذف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "disabled",
          "description": "يعطل الزر ويجعله غير قابل للنقر، يمنع المستخدم من الضغط عليه",
          "values": [
            {
              "value": "",
              "description": "يعطل الزر (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "autofocus",
          "description": "يجعل هذا الزر هو الأول الذي يحصل على التركيز عند تحميل الصفحة، يمكن الضغط عليه بالإنتر",
          "values": [
            {
              "value": "",
              "description": "يركز على الزر (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "formaction",
          "description": "يخالف عنوان action الخاص بالنموذج لهذا الزر تحديداً، يرسل البيانات لوجهة مختلفة عند الضغط عليه",
          "values": [
            {
              "value": "/submit-draft",
              "description": "يرسل البيانات لوجهة مختلفة كحفظ مسودة"
            },
            {
              "value": "/save",
              "description": "يرسل البيانات للحفظ"
            },
            {
              "value": "/publish",
              "description": "يرسل البيانات للنشر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "formmethod",
          "description": "يخالف طريقة الإرسال الخاصة بالنموذج لهذا الزر تحديداً",
          "values": [
            {
              "value": "GET",
              "description": "يرسل عبر GET بدل ما هو محدد في النموذج"
            },
            {
              "value": "POST",
              "description": "يرسل عبر POST بدل ما هو محدد في النموذج"
            }
          ]
        },
        {
          "name": "formenctype",
          "description": "يخالف طريقة تشفير البيانات لهذا الزر تحديداً",
          "values": [
            {
              "value": "multipart/form-data",
              "description": "يشفر البيانات كأجزاء متعددة"
            },
            {
              "value": "text/plain",
              "description": "يرسل البيانات كنص عادي"
            }
          ]
        },
        {
          "name": "formnovalidate",
          "description": "يلغي التحقق من صحة الحقول عند الضغط على هذا الزر تحديداً، مفيد لأزرار مثل 'حفظ كمسودة'",
          "values": [
            {
              "value": "",
              "description": "يلغي التحقق لهذا الزر (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "formtarget",
          "description": "يخالف مكان عرض نتيجة الإرسال الخاص بالنموذج لهذا الزر تحديداً",
          "values": [
            {
              "value": "_blank",
              "description": "يعرض النتيجة في نافذة جديدة لهذا الزر فقط"
            },
            {
              "value": "_self",
              "description": "يعرض النتيجة في نفس النافذة"
            }
          ]
        },
        {
          "name": "popovertarget",
          "description": "يربط الزر بعنصر popover، فيفتحه أو يغلقه عند الضغط دون الحاجة لكتابة JavaScript",
          "values": [
            {
              "value": "myPopover",
              "description": "يتحكم بالعنصر ذي المعرف myPopover"
            },
            {
              "value": "dialog",
              "description": "يتحكم بالعنصر ذي المعرف dialog"
            }
          ],
          "freeInput": true
        },
        {
          "name": "popovertargetaction",
          "description": "يحدد نوع التحكم في popover المرتبط، سواء بفتحه أو إغلاقه أو التبديل بين الحالتين",
          "values": [
            {
              "value": "show",
              "description": "يظهر popover عند الضغط"
            },
            {
              "value": "hide",
              "description": "يخفي popover عند الضغط"
            },
            {
              "value": "toggle",
              "description": "يبدّل بين الإظهار والإخفاء (الافتراضي)"
            }
          ]
        },
        {
          "name": "form",
          "description": "يربط الزر بنموذج معين بواسطة معرفه، يسمح له بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
          "values": [
            {
              "value": "myForm",
              "description": "يربط الزر بالنموذج ذي المعرف myForm"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "select",
      "description": "ينشئ قائمة منسدلة تسمح للمستخدم باختيار خيار واحد أو أكثر من قائمة محددة مسبقاً",
      "properties": [
        {
          "name": "name",
          "description": "يحدد اسم القائمة الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
          "values": [
            {
              "value": "country",
              "description": "اسم القائمة"
            },
            {
              "value": "city",
              "description": "اسم القائمة"
            },
            {
              "value": "category",
              "description": "اسم القائمة"
            },
            {
              "value": "language",
              "description": "اسم القائمة"
            },
            {
              "value": "color",
              "description": "اسم القائمة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "required",
          "description": "يجعل القائمة إلزامية، يمنع إرسال النموذج إذا لم يختر المستخدم أي خيار",
          "values": [
            {
              "value": "",
              "description": "يجعل القائمة إلزامية (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "multiple",
          "description": "يسمح باختيار أكثر من خيار من القائمة، يفعّل التحديد المتعدد",
          "values": [
            {
              "value": "",
              "description": "يفعّل التحديد المتعدد (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "disabled",
          "description": "يعطل القائمة ويجعلها غير قابلة للتفاعل، لا يمكن اختيار أي خيار",
          "values": [
            {
              "value": "",
              "description": "يعطل القائمة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "size",
          "description": "يحدد عدد الخيارات الظاهرة في القائمة، إذا كان أكبر من 1 تظهر كقائمة مفتوحة",
          "values": [
            {
              "value": "1",
              "description": "يعرض خياراً واحداً (قائمة منسدلة)"
            },
            {
              "value": "2",
              "description": "يعرض خيارين"
            },
            {
              "value": "3",
              "description": "يعرض 3 خيارات"
            },
            {
              "value": "4",
              "description": "يعرض 4 خيارات"
            },
            {
              "value": "5",
              "description": "يعرض 5 خيارات"
            },
            {
              "value": "10",
              "description": "يعرض 10 خيارات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "autofocus",
          "description": "يجعل هذه القائمة هي أول عنصر يحصل على التركيز عند تحميل الصفحة",
          "values": [
            {
              "value": "",
              "description": "يركز على القائمة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "autocomplete",
          "description": "يسمح للمتصفح بتذكر آخر خيار اختاره المستخدم من هذه القائمة وتحديده تلقائياً في المرات القادمة",
          "values": [
            {
              "value": "on",
              "description": "يفعّل التذكر التلقائي للخيار"
            },
            {
              "value": "off",
              "description": "يلغي التذكر التلقائي"
            }
          ]
        },
        {
          "name": "form",
          "description": "يربط القائمة بنموذج معين بواسطة معرفه، يسمح لها بالانتماء لنموذج حتى لو لم تكن موضوعة داخله في HTML",
          "values": [
            {
              "value": "myForm",
              "description": "يربط القائمة بالنموذج ذي المعرف myForm"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "option",
      "description": "يمثل خياراً واحداً داخل قائمة select أو datalist، يعرض القيمة التي يمكن للمستخدم اختيارها",
      "properties": [
        {
          "name": "value",
          "description": "يحدد القيمة التي سترسل إلى الخادم عند اختيار هذا الخيار، تخلف عن النص المعروض",
          "values": [
            {
              "value": "sa",
              "description": "قيمة السعودية"
            },
            {
              "value": "eg",
              "description": "قيمة مصر"
            },
            {
              "value": "ae",
              "description": "قيمة الإمارات"
            },
            {
              "value": "kw",
              "description": "قيمة الكويت"
            },
            {
              "value": "qa",
              "description": "قيمة قطر"
            },
            {
              "value": "om",
              "description": "قيمة عمان"
            },
            {
              "value": "bh",
              "description": "قيمة البحرين"
            },
            {
              "value": "jo",
              "description": "قيمة الأردن"
            },
            {
              "value": "lb",
              "description": "قيمة لبنان"
            }
          ],
          "freeInput": true
        },
        {
          "name": "selected",
          "description": "يجعل هذا الخيار هو المختار افتراضياً عند تحميل الصفحة، يظهر محدداً",
          "values": [
            {
              "value": "",
              "description": "يجعل الخيار مختاراً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "disabled",
          "description": "يعطل الخيار ويجعله غير قابل للاختيار، يمنع المستخدم من اختياره",
          "values": [
            {
              "value": "",
              "description": "يعطل الخيار (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "label",
          "description": "يحدد نصاً مختصراً يظهر بدل محتوى الخيار النصي، مفيد عند رغبتك بعرض نص مختلف عن القيمة الفعلية",
          "values": [
            {
              "value": "السعودية",
              "description": "نص مختصر يظهر للمستخدم بدل النص الطويل داخل العنصر"
            },
            {
              "value": "مصر",
              "description": "نص مختصر"
            },
            {
              "value": "الإمارات",
              "description": "نص مختصر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "optgroup",
      "description": "يجمع خيارات متعددة تحت عنوان واحد في القائمة المنسدلة، ينظم الخيارات في مجموعات",
      "properties": [
        {
          "name": "label",
          "description": "يحدد عنوان المجموعة التي تظهر فوق الخيارات، يوضح تصنيف الخيارات",
          "values": [
            {
              "value": "دول الخليج",
              "description": "عنوان مجموعة"
            },
            {
              "value": "دول أفريقيا",
              "description": "عنوان مجموعة"
            },
            {
              "value": "دول أوروبا",
              "description": "عنوان مجموعة"
            },
            {
              "value": "دول آسيا",
              "description": "عنوان مجموعة"
            },
            {
              "value": "الأقسام",
              "description": "عنوان مجموعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "disabled",
          "description": "يعطل المجموعة بأكملها ويجعل خياراتها غير قابلة للاختيار",
          "values": [
            {
              "value": "",
              "description": "يعطل المجموعة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "textarea",
      "description": "حقل إدخال نص متعدد الأسطر، يسمح للمستخدم بكتابة نصوص طويلة مثل الرسائل أو التعليقات",
      "properties": [
        {
          "name": "name",
          "description": "يحدد اسم الحقل الذي سيرسل به إلى الخادم، يحدد البيانات التي ستصل للخادم",
          "values": [
            {
              "value": "message",
              "description": "اسم الحقل"
            },
            {
              "value": "comment",
              "description": "اسم الحقل"
            },
            {
              "value": "bio",
              "description": "اسم الحقل"
            },
            {
              "value": "description",
              "description": "اسم الحقل"
            },
            {
              "value": "feedback",
              "description": "اسم الحقل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rows",
          "description": "يحدد ارتفاع الحقل بعدد الأسطر، يتحكم في حجم منطقة النص المعروضة",
          "values": [
            {
              "value": "2",
              "description": "ارتفاع سطرين"
            },
            {
              "value": "3",
              "description": "ارتفاع 3 أسطر"
            },
            {
              "value": "4",
              "description": "ارتفاع 4 أسطر"
            },
            {
              "value": "5",
              "description": "ارتفاع 5 أسطر"
            },
            {
              "value": "8",
              "description": "ارتفاع 8 أسطر"
            },
            {
              "value": "10",
              "description": "ارتفاع 10 أسطر"
            },
            {
              "value": "12",
              "description": "ارتفاع 12 سطراً"
            },
            {
              "value": "15",
              "description": "ارتفاع 15 سطراً"
            },
            {
              "value": "20",
              "description": "ارتفاع 20 سطراً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cols",
          "description": "يحدد عرض الحقل بعدد الأحرف، يتحكم في عرض منطقة النص المعروضة",
          "values": [
            {
              "value": "10",
              "description": "عرض 10 أحرف"
            },
            {
              "value": "20",
              "description": "عرض 20 حرفاً"
            },
            {
              "value": "30",
              "description": "عرض 30 حرفاً"
            },
            {
              "value": "40",
              "description": "عرض 40 حرفاً"
            },
            {
              "value": "50",
              "description": "عرض 50 حرفاً"
            },
            {
              "value": "60",
              "description": "عرض 60 حرفاً"
            },
            {
              "value": "70",
              "description": "عرض 70 حرفاً"
            },
            {
              "value": "80",
              "description": "عرض 80 حرفاً"
            },
            {
              "value": "100",
              "description": "عرض 100 حرف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "placeholder",
          "description": "يعرض نصاً تلميحياً داخل الحقل يختفي عند الكتابة، يوضح للمستخدم ما يجب كتابته",
          "values": [
            {
              "value": "اكتب رسالتك هنا",
              "description": "نص تلميحي"
            },
            {
              "value": "أخبرنا برأيك",
              "description": "نص تلميحي"
            },
            {
              "value": "اكتب تعليقاً",
              "description": "نص تلميحي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "required",
          "description": "يجعل الحقل إلزامياً، يمنع إرسال النموذج إذا كان الحقل فارغاً",
          "values": [
            {
              "value": "",
              "description": "يجعل الحقل إلزامياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "disabled",
          "description": "يعطل الحقل ويجعله غير قابل للتفاعل، لا يمكن تعديل النص",
          "values": [
            {
              "value": "",
              "description": "يعطل الحقل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "readonly",
          "description": "يجعل الحقل للقراءة فقط، يمكن رؤية النص ولكن لا يمكن تعديله",
          "values": [
            {
              "value": "",
              "description": "يجعل للقراءة فقط (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "maxlength",
          "description": "يحدد أقصى عدد من الأحرف يمكن إدخالها، يمنع كتابة نصوص طويلة جداً",
          "values": [
            {
              "value": "100",
              "description": "حد أقصى 100 حرف"
            },
            {
              "value": "200",
              "description": "حد أقصى 200 حرف"
            },
            {
              "value": "500",
              "description": "حد أقصى 500 حرف"
            },
            {
              "value": "1000",
              "description": "حد أقصى 1000 حرف"
            },
            {
              "value": "2000",
              "description": "حد أقصى 2000 حرف"
            },
            {
              "value": "5000",
              "description": "حد أقصى 5000 حرف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "wrap",
          "description": "يحدد كيف يتعامل الحقل مع النصوص الطويلة، إما بتقسيمها أو بظهور شريط تمرير",
          "values": [
            {
              "value": "soft",
              "description": "يقسم النص تلقائياً عند العرض لكن يرسل كنص واحد"
            },
            {
              "value": "hard",
              "description": "يقسم النص عند الإرسال مع الحفاظ على فواصل الأسطر"
            }
          ]
        },
        {
          "name": "autofocus",
          "description": "يجعل هذا الحقل هو أول عنصر يحصل على التركيز عند تحميل الصفحة",
          "values": [
            {
              "value": "",
              "description": "يركز على الحقل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "dirname",
          "description": "يرسل اتجاه كتابة النص (rtl أو ltr) مع بيانات النموذج تحت اسم يحدده هذا الحقل",
          "values": [
            {
              "value": "message.dir",
              "description": "يرسل اتجاه النص مع البيانات باسم message.dir"
            },
            {
              "value": "text.dir",
              "description": "يرسل اتجاه النص مع البيانات باسم text.dir"
            }
          ],
          "freeInput": true
        },
        {
          "name": "autocomplete",
          "description": "يسمح للمتصفح بتذكر النص الذي كتبه المستخدم سابقاً في هذا الحقل واقتراحه تلقائياً",
          "values": [
            {
              "value": "on",
              "description": "يفعّل الإكمال التلقائي"
            },
            {
              "value": "off",
              "description": "يلغي الإكمال التلقائي"
            }
          ]
        },
        {
          "name": "spellcheck",
          "description": "يفعّل أو يعطل التدقيق الإملائي التلقائي للمتصفح داخل الحقل، يظهر خطوطاً حمراء تحت الكلمات الخاطئة",
          "values": [
            {
              "value": "true",
              "description": "يفعّل التدقيق الإملائي"
            },
            {
              "value": "false",
              "description": "يعطل التدقيق الإملائي"
            }
          ]
        },
        {
          "name": "form",
          "description": "يربط الحقل بنموذج معين بواسطة معرفه، يسمح له بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
          "values": [
            {
              "value": "myForm",
              "description": "يربط الحقل بالنموذج ذي المعرف myForm"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "fieldset",
      "description": "يجمع مجموعة من عناصر النموذج المترابطة داخل إطار، ينظم الحقول ويوضح العلاقة بينها",
      "properties": [
        {
          "name": "disabled",
          "description": "يعطل جميع العناصر داخل المجموعة، يمنع التفاعل مع كل الحقول دفعة واحدة",
          "values": [
            {
              "value": "",
              "description": "يعطل المجموعة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "name",
          "description": "يحدد اسماً للمجموعة، يمكن استخدامه للوصول إليها عبر جافاسكريبت أو ضمن مجموعة عناصر النموذج",
          "values": [
            {
              "value": "userInfo",
              "description": "اسم مجموعة بيانات المستخدم"
            },
            {
              "value": "personalInfo",
              "description": "اسم مجموعة المعلومات الشخصية"
            },
            {
              "value": "addressInfo",
              "description": "اسم مجموعة العنوان"
            },
            {
              "value": "preferences",
              "description": "اسم مجموعة التفضيلات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "form",
          "description": "يربط المجموعة بنموذج معين بواسطة معرفه، يسمح لها بالانتماء لنموذج حتى لو لم تكن موضوعة داخله في HTML",
          "values": [
            {
              "value": "myForm",
              "description": "يربط المجموعة بالنموذج ذي المعرف myForm"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "legend",
      "description": "يحدد عنواناً وصفياً لمجموعة fieldset، يظهر داخل الإطار ويعبر عن محتوى المجموعة",
      "properties": []
    },
    {
      "tag": "datalist",
      "description": "يوفر قائمة بخيارات مقترحة لحقل الإدخال، تظهر أثناء الكتابة لتسهيل الإكمال التلقائي",
      "properties": []
    },
    {
      "tag": "output",
      "description": "يعرض نتيجة حساب أو عملية تفاعلية، يستخدم لعرض ناتج العمليات الحسابية أو ردود الفعل",
      "properties": [
        {
          "name": "name",
          "description": "يحدد اسم عنصر output، يمكن استخدامه في السكريبت للرجوع إليه",
          "values": [
            {
              "value": "result",
              "description": "اسم النتيجة"
            },
            {
              "value": "total",
              "description": "اسم المجموع"
            },
            {
              "value": "output",
              "description": "اسم المخرج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "for",
          "description": "يربط عناصر الإدخال التي تؤثر في هذه النتيجة، يوضح العلاقة بينها",
          "values": [
            {
              "value": "input1 input2",
              "description": "مرتبط بحقول الإدخال"
            },
            {
              "value": "a b",
              "description": "مرتبط بحقلين a و b"
            },
            {
              "value": "range",
              "description": "مرتبط بحقل range"
            }
          ],
          "freeInput": true
        },
        {
          "name": "form",
          "description": "يربط عنصر output بنموذج معين بواسطة معرفه، يسمح له بالانتماء لنموذج حتى لو لم يكن موضوعاً داخله في HTML",
          "values": [
            {
              "value": "myForm",
              "description": "يربط العنصر بالنموذج ذي المعرف myForm"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "progress",
      "description": "يعرض شريط تقدم لإنجاز مهمة، يوضح للمستخدم نسبة الإنجاز أو الوقت المتبقي",
      "properties": [
        {
          "name": "value",
          "description": "يحدد القيمة الحالية للتقدم، تحدد مقدار ما تم إنجازه",
          "values": [
            {
              "value": "0",
              "description": "لم يبدأ التقدم (0%)"
            },
            {
              "value": "10",
              "description": "تم إنجاز 10%"
            },
            {
              "value": "25",
              "description": "تم إنجاز 25%"
            },
            {
              "value": "50",
              "description": "تم إنجاز 50%"
            },
            {
              "value": "70",
              "description": "تم إنجاز 70% من المهمة"
            },
            {
              "value": "75",
              "description": "تم إنجاز 75%"
            },
            {
              "value": "90",
              "description": "تم إنجاز 90%"
            },
            {
              "value": "99",
              "description": "تقريباً انتهى"
            },
            {
              "value": "100",
              "description": "اكتمل التقدم (100%)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "max",
          "description": "يحدد القيمة القصوى للتقدم (100% عادة)، تحدد الهدف النهائي",
          "values": [
            {
              "value": "10",
              "description": "الحد الأقصى 10"
            },
            {
              "value": "50",
              "description": "الحد الأقصى 50"
            },
            {
              "value": "100",
              "description": "الحد الأقصى 100%"
            },
            {
              "value": "200",
              "description": "الحد الأقصى 200"
            },
            {
              "value": "1000",
              "description": "الحد الأقصى 1000"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "meter",
      "description": "يعرض قياساً ضمن نطاق معين، مثل نسبة الاستخدام أو مستوى الصوت أو درجة الحرارة",
      "properties": [
        {
          "name": "value",
          "description": "يحدد القيمة الحالية التي تظهر على المقياس، تحدد مستوى القياس",
          "values": [
            {
              "value": "0",
              "description": "القيمة الحالية 0"
            },
            {
              "value": "3",
              "description": "القيمة الحالية 3"
            },
            {
              "value": "5",
              "description": "القيمة الحالية 5"
            },
            {
              "value": "6",
              "description": "القيمة الحالية 6"
            },
            {
              "value": "7",
              "description": "القيمة الحالية 7"
            },
            {
              "value": "10",
              "description": "القيمة الحالية 10"
            },
            {
              "value": "50",
              "description": "القيمة الحالية 50%"
            },
            {
              "value": "75",
              "description": "القيمة الحالية 75%"
            },
            {
              "value": "100",
              "description": "القيمة الحالية 100%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "min",
          "description": "يحدد أقل قيمة يمكن أن يصل إليها المقياس، يحدد بداية النطاق",
          "values": [
            {
              "value": "0",
              "description": "الحد الأدنى 0"
            },
            {
              "value": "1",
              "description": "الحد الأدنى 1"
            },
            {
              "value": "-10",
              "description": "الحد الأدنى -10"
            }
          ],
          "freeInput": true
        },
        {
          "name": "max",
          "description": "يحدد أعلى قيمة يمكن أن يصل إليها المقياس، يحدد نهاية النطاق",
          "values": [
            {
              "value": "10",
              "description": "الحد الأقصى 10"
            },
            {
              "value": "50",
              "description": "الحد الأقصى 50"
            },
            {
              "value": "100",
              "description": "الحد الأقصى 100%"
            },
            {
              "value": "200",
              "description": "الحد الأقصى 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "low",
          "description": "يحدد الحد الأدنى للنطاق المنخفض، يغير لون المقياس عند هذه النقطة",
          "values": [
            {
              "value": "2",
              "description": "حد النطاق المنخفض 2"
            },
            {
              "value": "3",
              "description": "حد النطاق المنخفض 3"
            },
            {
              "value": "20",
              "description": "حد النطاق المنخفض 20%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "high",
          "description": "يحدد الحد الأعلى للنطاق المرتفع، يغير لون المقياس عند هذه النقطة",
          "values": [
            {
              "value": "7",
              "description": "حد النطاق المرتفع 7"
            },
            {
              "value": "8",
              "description": "حد النطاق المرتفع 8"
            },
            {
              "value": "80",
              "description": "حد النطاق المرتفع 80%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "optimum",
          "description": "يحدد القيمة المثالية، يغير لون المقياس حسب قرب القيمة منها",
          "values": [
            {
              "value": "3",
              "description": "القيمة المثالية 3"
            },
            {
              "value": "5",
              "description": "القيمة المثالية 5"
            },
            {
              "value": "7",
              "description": "القيمة المثالية 7"
            },
            {
              "value": "50",
              "description": "القيمة المثالية 50%"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "tables": [
    {
      "tag": "table",
      "description": "ينشئ جدولاً لعرض البيانات بشكل منظم في صفوف وأعمدة، يسهل مقارنة المعلومات وقراءتها",
      "properties": [
        {
          "name": "border",
          "description": "يضيف حدوداً حول الجدول وخلاياه، يظهرها بشكل واضح (يفضل استخدام CSS بدلاً منه)",
          "values": [
            {
              "value": "0",
              "description": "بدون حدود (افتراضي)"
            },
            {
              "value": "1",
              "description": "يظهر حدوداً رفيعة"
            },
            {
              "value": "2",
              "description": "يظهر حدوداً متوسطة"
            },
            {
              "value": "3",
              "description": "يظهر حدوداً سميكة"
            },
            {
              "value": "5",
              "description": "يظهر حدوداً سميكة جداً"
            },
            {
              "value": "10",
              "description": "يظهر حدوداً سميكة جداً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "summary",
          "description": "يضيف وصفاً نصياً للجدول للمكفوفين، يساعد في فهم محتوى الجدول دون رؤيته",
          "values": [
            {
              "value": "جدول يوضح المبيعات الشهرية",
              "description": "وصف الجدول"
            },
            {
              "value": "جدول يوضح نتائج الطلاب",
              "description": "وصف الجدول"
            },
            {
              "value": "جدول يوضح الإيرادات السنوية",
              "description": "وصف الجدول"
            },
            {
              "value": "جدول مقارنة بين المنتجات",
              "description": "وصف الجدول"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الجدول بالبكسل أو النسبة المئوية، يتحكم في حجم الجدول المعروض",
          "values": [
            {
              "value": "100%",
              "description": "عرض كامل للصفحة"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع عرض الصفحة"
            },
            {
              "value": "50%",
              "description": "نصف عرض الصفحة"
            },
            {
              "value": "25%",
              "description": "ربع عرض الصفحة"
            },
            {
              "value": "800",
              "description": "عرض 800 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "auto",
              "description": "عرض تلقائي حسب المحتوى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cellpadding",
          "description": "يحدد المسافة الداخلية بين حدود الخلية ومحتواها بالبكسل (يفضل استخدام CSS بدلاً منه)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة داخلية"
            },
            {
              "value": "1",
              "description": "مسافة داخلية صغيرة جداً"
            },
            {
              "value": "2",
              "description": "مسافة داخلية صغيرة"
            },
            {
              "value": "3",
              "description": "مسافة داخلية صغيرة"
            },
            {
              "value": "4",
              "description": "مسافة داخلية صغيرة"
            },
            {
              "value": "5",
              "description": "مسافة داخلية صغيرة"
            },
            {
              "value": "6",
              "description": "مسافة داخلية متوسطة"
            },
            {
              "value": "7",
              "description": "مسافة داخلية متوسطة"
            },
            {
              "value": "8",
              "description": "مسافة داخلية متوسطة"
            },
            {
              "value": "9",
              "description": "مسافة داخلية متوسطة"
            },
            {
              "value": "10",
              "description": "مسافة داخلية متوسطة"
            },
            {
              "value": "15",
              "description": "مسافة داخلية كبيرة"
            },
            {
              "value": "20",
              "description": "مسافة داخلية كبيرة جداً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cellspacing",
          "description": "يحدد المسافة بين الخلايا المتجاورة بالبكسل (يفضل استخدام CSS بدلاً منه)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة بين الخلايا"
            },
            {
              "value": "1",
              "description": "مسافة صغيرة جداً بين الخلايا"
            },
            {
              "value": "2",
              "description": "مسافة صغيرة بين الخلايا"
            },
            {
              "value": "3",
              "description": "مسافة صغيرة بين الخلايا"
            },
            {
              "value": "4",
              "description": "مسافة صغيرة بين الخلايا"
            },
            {
              "value": "5",
              "description": "مسافة صغيرة بين الخلايا"
            },
            {
              "value": "6",
              "description": "مسافة متوسطة بين الخلايا"
            },
            {
              "value": "7",
              "description": "مسافة متوسطة بين الخلايا"
            },
            {
              "value": "8",
              "description": "مسافة متوسطة بين الخلايا"
            },
            {
              "value": "9",
              "description": "مسافة متوسطة بين الخلايا"
            },
            {
              "value": "10",
              "description": "مسافة كبيرة بين الخلايا"
            },
            {
              "value": "15",
              "description": "مسافة كبيرة بين الخلايا"
            },
            {
              "value": "20",
              "description": "مسافة كبيرة جداً بين الخلايا"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة الجدول كاملاً بالنسبة للنص المحيط به، استُبدلت بخاصية float أو margin في CSS",
          "values": [
            {
              "value": "left",
              "description": "يحاذي الجدول لليسار ويلتف النص حوله من اليمين"
            },
            {
              "value": "center",
              "description": "يوسط الجدول في الصفحة"
            },
            {
              "value": "right",
              "description": "يحاذي الجدول لليمين ويلتف النص حوله من اليسار"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة كانت تحدد لون خلفية الجدول كاملاً، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#f0f0f0",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#e0e0e0",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#d0d0d0",
              "description": "لون رمادي"
            },
            {
              "value": "#c0c0c0",
              "description": "لون رمادي"
            },
            {
              "value": "#808080",
              "description": "لون رمادي"
            },
            {
              "value": "#ffcccc",
              "description": "لون أحمر فاتح"
            },
            {
              "value": "#ccffcc",
              "description": "لون أخضر فاتح"
            },
            {
              "value": "#ccccff",
              "description": "لون أزرق فاتح"
            },
            {
              "value": "#ffffcc",
              "description": "لون أصفر فاتح"
            },
            {
              "value": "#ffccff",
              "description": "لون وردي فاتح"
            },
            {
              "value": "#ccffff",
              "description": "لون سماوي فاتح"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "frame",
          "description": "خاصية قديمة كانت تحدد أي جوانب الإطار الخارجي للجدول تظهر، استُبدلت بخاصية border في CSS",
          "values": [
            {
              "value": "box",
              "description": "يظهر الإطار من جميع الجهات"
            },
            {
              "value": "above",
              "description": "يظهر الإطار من الأعلى فقط"
            },
            {
              "value": "below",
              "description": "يظهر الإطار من الأسفل فقط"
            },
            {
              "value": "hsides",
              "description": "يظهر الإطار من الأعلى والأسفل"
            },
            {
              "value": "vsides",
              "description": "يظهر الإطار من اليمين واليسار"
            },
            {
              "value": "lhs",
              "description": "يظهر الإطار من الجانب الأيسر فقط"
            },
            {
              "value": "rhs",
              "description": "يظهر الإطار من الجانب الأيمن فقط"
            },
            {
              "value": "border",
              "description": "يظهر الإطار من جميع الجهات"
            },
            {
              "value": "void",
              "description": "لا يظهر أي إطار خارجي"
            }
          ]
        },
        {
          "name": "rules",
          "description": "خاصية قديمة كانت تحدد أي الخطوط الداخلية بين الخلايا تظهر، استُبدلت بخاصية border على th/td في CSS",
          "values": [
            {
              "value": "all",
              "description": "يظهر خطوطاً بين جميع الصفوف والأعمدة"
            },
            {
              "value": "rows",
              "description": "يظهر خطوطاً أفقية بين الصفوف فقط"
            },
            {
              "value": "cols",
              "description": "يظهر خطوطاً عمودية بين الأعمدة فقط"
            },
            {
              "value": "groups",
              "description": "يظهر خطوطاً بين مجموعات الصفوف والأعمدة"
            },
            {
              "value": "none",
              "description": "لا يظهر أي خطوط داخلية"
            }
          ]
        },
        {
          "name": "bordercolor",
          "description": "خاصية قديمة غير معيارية (مدعومة جزئياً) كانت تحدد لون حدود الجدول، استُبدلت بخاصية border-color في CSS",
          "values": [
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "خاصية قديمة كانت تحدد ارتفاع الجدول بالبكسل أو النسبة المئوية، استُبدلت بخاصية height في CSS",
          "values": [
            {
              "value": "100%",
              "description": "ارتفاع كامل للصفحة"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع ارتفاع الصفحة"
            },
            {
              "value": "50%",
              "description": "نصف ارتفاع الصفحة"
            },
            {
              "value": "25%",
              "description": "ربع ارتفاع الصفحة"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "300",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "400",
              "description": "ارتفاع 400 بكسل"
            },
            {
              "value": "500",
              "description": "ارتفاع 500 بكسل"
            },
            {
              "value": "600",
              "description": "ارتفاع 600 بكسل"
            },
            {
              "value": "700",
              "description": "ارتفاع 700 بكسل"
            },
            {
              "value": "800",
              "description": "ارتفاع 800 بكسل"
            },
            {
              "value": "auto",
              "description": "ارتفاع تلقائي حسب المحتوى"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "caption",
      "description": "يضيف عنواناً وصفياً للجدول يظهر في أعلاه، يوضح موضوع الجدول ومحتواه للقارئ",
      "properties": [
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد مكان ظهور العنوان بالنسبة للجدول، استُبدلت بخاصية caption-side في CSS",
          "values": [
            {
              "value": "top",
              "description": "يظهر العنوان أعلى الجدول (الافتراضي)"
            },
            {
              "value": "bottom",
              "description": "يظهر العنوان أسفل الجدول"
            },
            {
              "value": "left",
              "description": "يظهر العنوان على يسار الجدول"
            },
            {
              "value": "right",
              "description": "يظهر العنوان على يمين الجدول"
            }
          ]
        }
      ]
    },
    {
      "tag": "thead",
      "description": "يجمع صفوف رأس الجدول في مجموعة واحدة، يحدد عناوين الأعمدة التي تظهر في أعلى الجدول",
      "properties": [
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل كل خلايا هذه المجموعة، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلايا، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة كانت تحدد لون خلفية جميع خلايا هذه المجموعة، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#eeeeee",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#dddddd",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#eeeeee",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "tbody",
      "description": "يجمع صفوف البيانات الرئيسية للجدول، يحتوي على المحتوى الفعلي للبيانات المعروضة",
      "properties": [
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل كل خلايا هذه المجموعة، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلايا، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة كانت تحدد لون خلفية جميع خلايا هذه المجموعة، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "tfoot",
      "description": "يجمع صفوف الملخص في نهاية الجدول، يعرض إجماليات أو نتائج حسابية للبيانات",
      "properties": [
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل كل خلايا هذه المجموعة، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلايا، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة كانت تحدد لون خلفية جميع خلايا هذه المجموعة، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#dddddd",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#eeeeee",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "tr",
      "description": "يمثل صفاً واحداً من الخلايا داخل الجدول، يحتوي على بيانات صف واحد من البيانات",
      "properties": [
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل خلايا هذا الصف، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل خلايا هذا الصف، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة كانت تحدد لون خلفية هذا الصف بالكامل، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#f9f9f9",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#f5f5f5",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#f0f0f0",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#e8e8e8",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#e0e0e0",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#d8d8d8",
              "description": "لون رمادي"
            },
            {
              "value": "#d0d0d0",
              "description": "لون رمادي"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "th",
      "description": "يمثل خلية عنوان لعمود أو صف في الجدول، يظهر بخط عريض ومتمركز لتمييزه عن بيانات الجدول",
      "properties": [
        {
          "name": "scope",
          "description": "يحدد نطاق خلية العنوان، يوضح ما إذا كانت عنواناً لعمود أو صف أو مجموعة، يساعد المكفوفين",
          "values": [
            {
              "value": "col",
              "description": "عنوان لعمود كامل"
            },
            {
              "value": "row",
              "description": "عنوان لصف كامل"
            },
            {
              "value": "colgroup",
              "description": "عنوان لمجموعة أعمدة"
            },
            {
              "value": "rowgroup",
              "description": "عنوان لمجموعة صفوف"
            },
            {
              "value": "auto",
              "description": "تحديد تلقائي"
            }
          ]
        },
        {
          "name": "colspan",
          "description": "يوسع الخلية لتغطي عدداً من الأعمدة، يدمج خلايا عدة أعمدة في خلية واحدة",
          "values": [
            {
              "value": "1",
              "description": "يمتد على عمود واحد (الافتراضي)"
            },
            {
              "value": "2",
              "description": "يمتد على عمودين"
            },
            {
              "value": "3",
              "description": "يمتد على 3 أعمدة"
            },
            {
              "value": "4",
              "description": "يمتد على 4 أعمدة"
            },
            {
              "value": "5",
              "description": "يمتد على 5 أعمدة"
            },
            {
              "value": "6",
              "description": "يمتد على 6 أعمدة"
            },
            {
              "value": "7",
              "description": "يمتد على 7 أعمدة"
            },
            {
              "value": "8",
              "description": "يمتد على 8 أعمدة"
            },
            {
              "value": "9",
              "description": "يمتد على 9 أعمدة"
            },
            {
              "value": "10",
              "description": "يمتد على 10 أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rowspan",
          "description": "يوسع الخلية لتغطي عدداً من الصفوف، يدمج خلايا عدة صفوف في خلية واحدة",
          "values": [
            {
              "value": "1",
              "description": "يمتد على صف واحد (الافتراضي)"
            },
            {
              "value": "2",
              "description": "يمتد على صفين"
            },
            {
              "value": "3",
              "description": "يمتد على 3 صفوف"
            },
            {
              "value": "4",
              "description": "يمتد على 4 صفوف"
            },
            {
              "value": "5",
              "description": "يمتد على 5 صفوف"
            },
            {
              "value": "6",
              "description": "يمتد على 6 صفوف"
            },
            {
              "value": "7",
              "description": "يمتد على 7 صفوف"
            },
            {
              "value": "8",
              "description": "يمتد على 8 صفوف"
            },
            {
              "value": "9",
              "description": "يمتد على 9 صفوف"
            },
            {
              "value": "10",
              "description": "يمتد على 10 صفوف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "abbr",
          "description": "يضيف نسخة مختصرة من نص العنوان الطويل، تُستخدمها قارئات الشاشة بدل النص الكامل عند تكرار ذكر العنوان",
          "values": [
            {
              "value": "الإيرادات",
              "description": "نسخة مختصرة لعنوان طويل مثل 'إجمالي الإيرادات الشهرية بالدولار'"
            },
            {
              "value": "المبيعات",
              "description": "نسخة مختصرة لعنوان طويل مثل 'إجمالي المبيعات السنوية'"
            },
            {
              "value": "الربح",
              "description": "نسخة مختصرة لعنوان طويل مثل 'صافي الربح بعد الخصومات'"
            },
            {
              "value": "الخسارة",
              "description": "نسخة مختصرة لعنوان طويل مثل 'إجمالي الخسائر'"
            },
            {
              "value": "المجموع",
              "description": "نسخة مختصرة لعنوان طويل مثل 'المجموع الكلي'"
            },
            {
              "value": "المتوسط",
              "description": "نسخة مختصرة لعنوان طويل مثل 'المتوسط الحسابي'"
            }
          ],
          "freeInput": true
        },
        {
          "name": "headers",
          "description": "يربط خلية العنوان بعناوين أخرى تعلوها في الجداول المعقدة متعددة المستويات، يوضح التسلسل الهرمي للمكفوفين",
          "values": [
            {
              "value": "header1 header2",
              "description": "معرفات العناوين الأعلى في التسلسل"
            },
            {
              "value": "id1 id2 id3",
              "description": "معرفات متعددة للعناوين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل الخلية، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي لخلايا العنوان)"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلية، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة كانت تحدد لون خلفية الخلية، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#eeeeee",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#dddddd",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#d0d0d0",
              "description": "لون رمادي"
            },
            {
              "value": "#c0c0c0",
              "description": "لون رمادي"
            },
            {
              "value": "#b0b0b0",
              "description": "لون رمادي"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "خاصية قديمة كانت تحدد عرض الخلية بالبكسل أو النسبة المئوية، استُبدلت بخاصية width في CSS",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي حسب المحتوى"
            },
            {
              "value": "10%",
              "description": "عرض 10% من الجدول"
            },
            {
              "value": "15%",
              "description": "عرض 15% من الجدول"
            },
            {
              "value": "20%",
              "description": "عرض 20% من الجدول"
            },
            {
              "value": "25%",
              "description": "عرض 25% من الجدول"
            },
            {
              "value": "30%",
              "description": "عرض 30% من الجدول"
            },
            {
              "value": "33%",
              "description": "عرض 33% من الجدول"
            },
            {
              "value": "40%",
              "description": "عرض 40% من الجدول"
            },
            {
              "value": "50%",
              "description": "عرض 50% من الجدول"
            },
            {
              "value": "60%",
              "description": "عرض 60% من الجدول"
            },
            {
              "value": "66%",
              "description": "عرض 66% من الجدول"
            },
            {
              "value": "70%",
              "description": "عرض 70% من الجدول"
            },
            {
              "value": "75%",
              "description": "عرض 75% من الجدول"
            },
            {
              "value": "80%",
              "description": "عرض 80% من الجدول"
            },
            {
              "value": "85%",
              "description": "عرض 85% من الجدول"
            },
            {
              "value": "90%",
              "description": "عرض 90% من الجدول"
            },
            {
              "value": "95%",
              "description": "عرض 95% من الجدول"
            },
            {
              "value": "100%",
              "description": "عرض كامل للجدول"
            },
            {
              "value": "10",
              "description": "عرض 10 بكسل"
            },
            {
              "value": "20",
              "description": "عرض 20 بكسل"
            },
            {
              "value": "30",
              "description": "عرض 30 بكسل"
            },
            {
              "value": "40",
              "description": "عرض 40 بكسل"
            },
            {
              "value": "50",
              "description": "عرض 50 بكسل"
            },
            {
              "value": "60",
              "description": "عرض 60 بكسل"
            },
            {
              "value": "70",
              "description": "عرض 70 بكسل"
            },
            {
              "value": "80",
              "description": "عرض 80 بكسل"
            },
            {
              "value": "90",
              "description": "عرض 90 بكسل"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "120",
              "description": "عرض 120 بكسل"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "250",
              "description": "عرض 250 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "350",
              "description": "عرض 350 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "خاصية قديمة كانت تحدد ارتفاع الخلية بالبكسل، استُبدلت بخاصية height في CSS",
          "values": [
            {
              "value": "auto",
              "description": "ارتفاع تلقائي حسب المحتوى"
            },
            {
              "value": "10",
              "description": "ارتفاع 10 بكسل"
            },
            {
              "value": "15",
              "description": "ارتفاع 15 بكسل"
            },
            {
              "value": "20",
              "description": "ارتفاع 20 بكسل"
            },
            {
              "value": "25",
              "description": "ارتفاع 25 بكسل"
            },
            {
              "value": "30",
              "description": "ارتفاع 30 بكسل"
            },
            {
              "value": "35",
              "description": "ارتفاع 35 بكسل"
            },
            {
              "value": "40",
              "description": "ارتفاع 40 بكسل"
            },
            {
              "value": "45",
              "description": "ارتفاع 45 بكسل"
            },
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "60",
              "description": "ارتفاع 60 بكسل"
            },
            {
              "value": "70",
              "description": "ارتفاع 70 بكسل"
            },
            {
              "value": "80",
              "description": "ارتفاع 80 بكسل"
            },
            {
              "value": "90",
              "description": "ارتفاع 90 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "nowrap",
          "description": "خاصية قديمة كانت تمنع التفاف النص داخل الخلية على عدة أسطر، استُبدلت بخاصية white-space:nowrap في CSS",
          "values": [
            {
              "value": "",
              "description": "يمنع التفاف النص (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "td",
      "description": "يمثل خلية بيانات واحدة داخل صف الجدول، يحمل القيمة الفعلية للبيانات المعروضة",
      "properties": [
        {
          "name": "colspan",
          "description": "يوسع الخلية لتغطي عدداً من الأعمدة، يدمج خلايا عدة أعمدة في خلية واحدة",
          "values": [
            {
              "value": "1",
              "description": "يمتد على عمود واحد (الافتراضي)"
            },
            {
              "value": "2",
              "description": "يمتد على عمودين"
            },
            {
              "value": "3",
              "description": "يمتد على 3 أعمدة"
            },
            {
              "value": "4",
              "description": "يمتد على 4 أعمدة"
            },
            {
              "value": "5",
              "description": "يمتد على 5 أعمدة"
            },
            {
              "value": "6",
              "description": "يمتد على 6 أعمدة"
            },
            {
              "value": "7",
              "description": "يمتد على 7 أعمدة"
            },
            {
              "value": "8",
              "description": "يمتد على 8 أعمدة"
            },
            {
              "value": "9",
              "description": "يمتد على 9 أعمدة"
            },
            {
              "value": "10",
              "description": "يمتد على 10 أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rowspan",
          "description": "يوسع الخلية لتغطي عدداً من الصفوف، يدمج خلايا عدة صفوف في خلية واحدة",
          "values": [
            {
              "value": "1",
              "description": "يمتد على صف واحد (الافتراضي)"
            },
            {
              "value": "2",
              "description": "يمتد على صفين"
            },
            {
              "value": "3",
              "description": "يمتد على 3 صفوف"
            },
            {
              "value": "4",
              "description": "يمتد على 4 صفوف"
            },
            {
              "value": "5",
              "description": "يمتد على 5 صفوف"
            },
            {
              "value": "6",
              "description": "يمتد على 6 صفوف"
            },
            {
              "value": "7",
              "description": "يمتد على 7 صفوف"
            },
            {
              "value": "8",
              "description": "يمتد على 8 صفوف"
            },
            {
              "value": "9",
              "description": "يمتد على 9 صفوف"
            },
            {
              "value": "10",
              "description": "يمتد على 10 صفوف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "headers",
          "description": "يربط خلية البيانات برأس الجدول المناسب لها، يساعد المكفوفين في فهم العلاقة",
          "values": [
            {
              "value": "header1 header2",
              "description": "معرفات رؤوس الأعمدة"
            },
            {
              "value": "id1 id2 id3",
              "description": "معرفات متعددة للرؤوس"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً داخل الخلية، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار (الافتراضي لخلايا البيانات)"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً داخل الخلية، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة كانت تحدد لون خلفية الخلية، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#ffff99",
              "description": "لون أصفر فاتح"
            },
            {
              "value": "#ffffcc",
              "description": "لون أصفر فاتح جداً"
            },
            {
              "value": "#ffcccc",
              "description": "لون أحمر فاتح"
            },
            {
              "value": "#ccffcc",
              "description": "لون أخضر فاتح"
            },
            {
              "value": "#ccccff",
              "description": "لون أزرق فاتح"
            },
            {
              "value": "#ffccff",
              "description": "لون وردي فاتح"
            },
            {
              "value": "#ccffff",
              "description": "لون سماوي فاتح"
            },
            {
              "value": "#ffebcd",
              "description": "لون بيج"
            },
            {
              "value": "#f5f5dc",
              "description": "لون بيج فاتح"
            },
            {
              "value": "#faf0e6",
              "description": "لون عاجي"
            },
            {
              "value": "#fdf5e6",
              "description": "لون قشدي"
            },
            {
              "value": "#fff8dc",
              "description": "لون كريمي"
            },
            {
              "value": "#ffffe0",
              "description": "لون أصفر فاتح جداً"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "خاصية قديمة كانت تحدد عرض الخلية بالبكسل أو النسبة المئوية، استُبدلت بخاصية width في CSS",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي حسب المحتوى"
            },
            {
              "value": "10%",
              "description": "عرض 10% من الجدول"
            },
            {
              "value": "15%",
              "description": "عرض 15% من الجدول"
            },
            {
              "value": "20%",
              "description": "عرض 20% من الجدول"
            },
            {
              "value": "25%",
              "description": "عرض 25% من الجدول"
            },
            {
              "value": "30%",
              "description": "عرض 30% من الجدول"
            },
            {
              "value": "33%",
              "description": "عرض 33% من الجدول"
            },
            {
              "value": "40%",
              "description": "عرض 40% من الجدول"
            },
            {
              "value": "50%",
              "description": "عرض 50% من الجدول"
            },
            {
              "value": "60%",
              "description": "عرض 60% من الجدول"
            },
            {
              "value": "66%",
              "description": "عرض 66% من الجدول"
            },
            {
              "value": "70%",
              "description": "عرض 70% من الجدول"
            },
            {
              "value": "75%",
              "description": "عرض 75% من الجدول"
            },
            {
              "value": "80%",
              "description": "عرض 80% من الجدول"
            },
            {
              "value": "85%",
              "description": "عرض 85% من الجدول"
            },
            {
              "value": "90%",
              "description": "عرض 90% من الجدول"
            },
            {
              "value": "95%",
              "description": "عرض 95% من الجدول"
            },
            {
              "value": "100%",
              "description": "عرض كامل للجدول"
            },
            {
              "value": "10",
              "description": "عرض 10 بكسل"
            },
            {
              "value": "20",
              "description": "عرض 20 بكسل"
            },
            {
              "value": "30",
              "description": "عرض 30 بكسل"
            },
            {
              "value": "40",
              "description": "عرض 40 بكسل"
            },
            {
              "value": "50",
              "description": "عرض 50 بكسل"
            },
            {
              "value": "60",
              "description": "عرض 60 بكسل"
            },
            {
              "value": "70",
              "description": "عرض 70 بكسل"
            },
            {
              "value": "80",
              "description": "عرض 80 بكسل"
            },
            {
              "value": "90",
              "description": "عرض 90 بكسل"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "120",
              "description": "عرض 120 بكسل"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "250",
              "description": "عرض 250 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "350",
              "description": "عرض 350 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "خاصية قديمة كانت تحدد ارتفاع الخلية بالبكسل، استُبدلت بخاصية height في CSS",
          "values": [
            {
              "value": "auto",
              "description": "ارتفاع تلقائي حسب المحتوى"
            },
            {
              "value": "10",
              "description": "ارتفاع 10 بكسل"
            },
            {
              "value": "15",
              "description": "ارتفاع 15 بكسل"
            },
            {
              "value": "20",
              "description": "ارتفاع 20 بكسل"
            },
            {
              "value": "25",
              "description": "ارتفاع 25 بكسل"
            },
            {
              "value": "30",
              "description": "ارتفاع 30 بكسل"
            },
            {
              "value": "35",
              "description": "ارتفاع 35 بكسل"
            },
            {
              "value": "40",
              "description": "ارتفاع 40 بكسل"
            },
            {
              "value": "45",
              "description": "ارتفاع 45 بكسل"
            },
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "60",
              "description": "ارتفاع 60 بكسل"
            },
            {
              "value": "70",
              "description": "ارتفاع 70 بكسل"
            },
            {
              "value": "80",
              "description": "ارتفاع 80 بكسل"
            },
            {
              "value": "90",
              "description": "ارتفاع 90 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "nowrap",
          "description": "خاصية قديمة كانت تمنع التفاف النص داخل الخلية على عدة أسطر، استُبدلت بخاصية white-space:nowrap في CSS",
          "values": [
            {
              "value": "",
              "description": "يمنع التفاف النص (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "colgroup",
      "description": "يجمع مجموعة من الأعمدة لتطبيق تنسيق مشترك عليها، يحدد خصائص مجموعة أعمدة كاملة",
      "properties": [
        {
          "name": "span",
          "description": "يحدد عدد الأعمدة التي تشملها المجموعة، يطبق التنسيق على عدة أعمدة دفعة واحدة",
          "values": [
            {
              "value": "1",
              "description": "مجموعة من عمود واحد (الافتراضي)"
            },
            {
              "value": "2",
              "description": "مجموعة من عمودين"
            },
            {
              "value": "3",
              "description": "مجموعة من 3 أعمدة"
            },
            {
              "value": "4",
              "description": "مجموعة من 4 أعمدة"
            },
            {
              "value": "5",
              "description": "مجموعة من 5 أعمدة"
            },
            {
              "value": "6",
              "description": "مجموعة من 6 أعمدة"
            },
            {
              "value": "7",
              "description": "مجموعة من 7 أعمدة"
            },
            {
              "value": "8",
              "description": "مجموعة من 8 أعمدة"
            },
            {
              "value": "9",
              "description": "مجموعة من 9 أعمدة"
            },
            {
              "value": "10",
              "description": "مجموعة من 10 أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً في كل خلايا أعمدة هذه المجموعة، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً في كل خلايا أعمدة هذه المجموعة، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "width",
          "description": "خاصية قديمة كانت تحدد عرضاً موحداً لكل أعمدة هذه المجموعة، استُبدلت بتحديد width لكل عنصر col في CSS",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي"
            },
            {
              "value": "10%",
              "description": "عرض 10% لكل عمود"
            },
            {
              "value": "15%",
              "description": "عرض 15% لكل عمود"
            },
            {
              "value": "20%",
              "description": "عرض 20% لكل عمود"
            },
            {
              "value": "25%",
              "description": "عرض 25% لكل عمود"
            },
            {
              "value": "30%",
              "description": "عرض 30% لكل عمود"
            },
            {
              "value": "33%",
              "description": "عرض 33% لكل عمود"
            },
            {
              "value": "40%",
              "description": "عرض 40% لكل عمود"
            },
            {
              "value": "50%",
              "description": "عرض 50% لكل عمود"
            },
            {
              "value": "60%",
              "description": "عرض 60% لكل عمود"
            },
            {
              "value": "66%",
              "description": "عرض 66% لكل عمود"
            },
            {
              "value": "70%",
              "description": "عرض 70% لكل عمود"
            },
            {
              "value": "75%",
              "description": "عرض 75% لكل عمود"
            },
            {
              "value": "80%",
              "description": "عرض 80% لكل عمود"
            },
            {
              "value": "85%",
              "description": "عرض 85% لكل عمود"
            },
            {
              "value": "90%",
              "description": "عرض 90% لكل عمود"
            },
            {
              "value": "95%",
              "description": "عرض 95% لكل عمود"
            },
            {
              "value": "100%",
              "description": "عرض كامل لكل عمود"
            },
            {
              "value": "10",
              "description": "عرض 10 بكسل لكل عمود"
            },
            {
              "value": "20",
              "description": "عرض 20 بكسل لكل عمود"
            },
            {
              "value": "30",
              "description": "عرض 30 بكسل لكل عمود"
            },
            {
              "value": "40",
              "description": "عرض 40 بكسل لكل عمود"
            },
            {
              "value": "50",
              "description": "عرض 50 بكسل لكل عمود"
            },
            {
              "value": "60",
              "description": "عرض 60 بكسل لكل عمود"
            },
            {
              "value": "70",
              "description": "عرض 70 بكسل لكل عمود"
            },
            {
              "value": "80",
              "description": "عرض 80 بكسل لكل عمود"
            },
            {
              "value": "90",
              "description": "عرض 90 بكسل لكل عمود"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل لكل عمود"
            },
            {
              "value": "120",
              "description": "عرض 120 بكسل لكل عمود"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل لكل عمود"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل لكل عمود"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "col",
      "description": "يحدد خصائص تنسيق لعمود واحد أو أكثر ضمن colgroup، يطبق أنماطاً على عمود محدد",
      "properties": [
        {
          "name": "span",
          "description": "يحدد عدد الأعمدة التي يشملها هذا العنصر، يطبق التنسيق على عدة أعمدة دفعة واحدة",
          "values": [
            {
              "value": "1",
              "description": "يشمل عمود واحد (الافتراضي)"
            },
            {
              "value": "2",
              "description": "يشمل عمودين"
            },
            {
              "value": "3",
              "description": "يشمل 3 أعمدة"
            },
            {
              "value": "4",
              "description": "يشمل 4 أعمدة"
            },
            {
              "value": "5",
              "description": "يشمل 5 أعمدة"
            },
            {
              "value": "6",
              "description": "يشمل 6 أعمدة"
            },
            {
              "value": "7",
              "description": "يشمل 7 أعمدة"
            },
            {
              "value": "8",
              "description": "يشمل 8 أعمدة"
            },
            {
              "value": "9",
              "description": "يشمل 9 أعمدة"
            },
            {
              "value": "10",
              "description": "يشمل 10 أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align",
          "description": "خاصية قديمة كانت تحدد محاذاة النص أفقياً في خلايا هذا العمود، استُبدلت بخاصية text-align في CSS",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "justify",
              "description": "محاذاة بالتساوي"
            },
            {
              "value": "char",
              "description": "محاذاة على حرف محدد"
            }
          ]
        },
        {
          "name": "valign",
          "description": "خاصية قديمة كانت تحدد محاذاة المحتوى عمودياً في خلايا هذا العمود، استُبدلت بخاصية vertical-align في CSS",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة لمنتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل الخلية"
            },
            {
              "value": "baseline",
              "description": "محاذاة على خط الأساس"
            }
          ]
        },
        {
          "name": "width",
          "description": "خاصية قديمة كانت تحدد عرض هذا العمود بالبكسل أو النسبة المئوية، استُبدلت بخاصية width في CSS",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي"
            },
            {
              "value": "10%",
              "description": "عرض 10%"
            },
            {
              "value": "15%",
              "description": "عرض 15%"
            },
            {
              "value": "20%",
              "description": "عرض 20%"
            },
            {
              "value": "25%",
              "description": "عرض 25%"
            },
            {
              "value": "30%",
              "description": "عرض 30%"
            },
            {
              "value": "33%",
              "description": "عرض 33%"
            },
            {
              "value": "40%",
              "description": "عرض 40%"
            },
            {
              "value": "50%",
              "description": "عرض 50%"
            },
            {
              "value": "60%",
              "description": "عرض 60%"
            },
            {
              "value": "66%",
              "description": "عرض 66%"
            },
            {
              "value": "70%",
              "description": "عرض 70%"
            },
            {
              "value": "75%",
              "description": "عرض 75%"
            },
            {
              "value": "80%",
              "description": "عرض 80%"
            },
            {
              "value": "85%",
              "description": "عرض 85%"
            },
            {
              "value": "90%",
              "description": "عرض 90%"
            },
            {
              "value": "95%",
              "description": "عرض 95%"
            },
            {
              "value": "100%",
              "description": "عرض 100%"
            },
            {
              "value": "10",
              "description": "عرض 10 بكسل"
            },
            {
              "value": "20",
              "description": "عرض 20 بكسل"
            },
            {
              "value": "30",
              "description": "عرض 30 بكسل"
            },
            {
              "value": "40",
              "description": "عرض 40 بكسل"
            },
            {
              "value": "50",
              "description": "عرض 50 بكسل"
            },
            {
              "value": "60",
              "description": "عرض 60 بكسل"
            },
            {
              "value": "70",
              "description": "عرض 70 بكسل"
            },
            {
              "value": "80",
              "description": "عرض 80 بكسل"
            },
            {
              "value": "90",
              "description": "عرض 90 بكسل"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "120",
              "description": "عرض 120 بكسل"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "250",
              "description": "عرض 250 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "350",
              "description": "عرض 350 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "bgcolor",
          "description": "خاصية قديمة غير معيارية كانت تحدد لون خلفية هذا العمود، استُبدلت بخاصية background-color في CSS",
          "values": [
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#f5f5f5",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#eeeeee",
              "description": "لون رمادي فاتح جداً"
            },
            {
              "value": "#e8e8e8",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#e0e0e0",
              "description": "لون رمادي فاتح"
            },
            {
              "value": "#d8d8d8",
              "description": "لون رمادي"
            },
            {
              "value": "#d0d0d0",
              "description": "لون رمادي"
            },
            {
              "value": "#c8c8c8",
              "description": "لون رمادي"
            },
            {
              "value": "#c0c0c0",
              "description": "لون رمادي"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "media": [
    {
      "tag": "img",
      "description": "يضيف صورة إلى الصفحة، يعرض محتوى بصرياً مثل الصور الفوتوغرافية، الرسومات، أو الأيقونات",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار ملف الصورة، يخبر المتصفح أين يجد الصورة لعرضها في الصفحة",
          "values": [
            {
              "value": "image.jpg",
              "description": "صورة في نفس مجلد الصفحة"
            },
            {
              "value": "image.png",
              "description": "صورة PNG في نفس المجلد"
            },
            {
              "value": "image.webp",
              "description": "صورة WebP في نفس المجلد"
            },
            {
              "value": "image.gif",
              "description": "صورة GIF في نفس المجلد"
            },
            {
              "value": "image.svg",
              "description": "صورة SVG في نفس المجلد"
            },
            {
              "value": "/images/photo.png",
              "description": "صورة في مجلد images"
            },
            {
              "value": "/assets/img/logo.jpg",
              "description": "صورة في مجلد assets/img"
            },
            {
              "value": "https://example.com/pic.webp",
              "description": "صورة من موقع آخر"
            },
            {
              "value": "data:image/png;base64,iVBORw0KGgo...",
              "description": "صورة بصيغة Base64"
            }
          ],
          "freeInput": true
        },
        {
          "name": "alt",
          "description": "يضيف نصاً بديلاً للصورة يظهر عندما لا تستطيع التحميل، يساعد المكفوفين ومحركات البحث في فهم محتوى الصورة",
          "values": [
            {
              "value": "وصف الصورة",
              "description": "نص يصف محتوى الصورة"
            },
            {
              "value": "شعار الشركة",
              "description": "نص وصفي للشعار"
            },
            {
              "value": "صورة منتج",
              "description": "نص وصفي للمنتج"
            },
            {
              "value": "رسم بياني يوضح المبيعات",
              "description": "نص وصفي للرسم البياني"
            },
            {
              "value": "",
              "description": "نص بديل فارغ للصور الزخرفية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الصورة بالبكسل، يمنع الصورة من التسبب في تغيير حجم الصفحة أثناء التحميل",
          "values": [
            {
              "value": "10",
              "description": "عرض 10 بكسل"
            },
            {
              "value": "20",
              "description": "عرض 20 بكسل"
            },
            {
              "value": "30",
              "description": "عرض 30 بكسل"
            },
            {
              "value": "40",
              "description": "عرض 40 بكسل"
            },
            {
              "value": "50",
              "description": "عرض 50 بكسل"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            },
            {
              "value": "800",
              "description": "عرض 800 بكسل"
            },
            {
              "value": "1000",
              "description": "عرض 1000 بكسل"
            },
            {
              "value": "1200",
              "description": "عرض 1200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع الصورة بالبكسل، يحافظ على تناسق تخطيط الصفحة أثناء تحميل الصور",
          "values": [
            {
              "value": "10",
              "description": "ارتفاع 10 بكسل"
            },
            {
              "value": "20",
              "description": "ارتفاع 20 بكسل"
            },
            {
              "value": "30",
              "description": "ارتفاع 30 بكسل"
            },
            {
              "value": "40",
              "description": "ارتفاع 40 بكسل"
            },
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "150",
              "description": "ارتفاع 150 بكسل"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "300",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "400",
              "description": "ارتفاع 400 بكسل"
            },
            {
              "value": "500",
              "description": "ارتفاع 500 بكسل"
            },
            {
              "value": "600",
              "description": "ارتفاع 600 بكسل"
            },
            {
              "value": "800",
              "description": "ارتفاع 800 بكسل"
            },
            {
              "value": "1000",
              "description": "ارتفاع 1000 بكسل"
            },
            {
              "value": "1200",
              "description": "ارتفاع 1200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "loading",
          "description": "يحدد متى يتم تحميل الصورة، يؤخر تحميل الصور غير الظاهرة لتسريع ظهور الصفحة",
          "values": [
            {
              "value": "lazy",
              "description": "يؤخر تحميل الصورة حتى يقترب المستخدم من مكانها، يسرع تحميل الصفحة"
            },
            {
              "value": "eager",
              "description": "يحمل الصورة فوراً بغض النظر عن مكانها (الافتراضي)"
            }
          ]
        },
        {
          "name": "srcset",
          "description": "يوفر عدة أحجام من الصورة، يسمح للمتصفح باختيار الحجم المناسب حسب شاشة المستخدم، يوفر البيانات",
          "values": [
            {
              "value": "image- small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w",
              "description": "أحجام مختلفة للصورة"
            },
            {
              "value": "photo-320w.jpg 320w, photo-640w.jpg 640w, photo-1280w.jpg 1280w",
              "description": "أحجام مختلفة"
            },
            {
              "value": "icon-16.png 16w, icon-32.png 32w, icon-64.png 64w",
              "description": "أيقونات بأحجام مختلفة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "sizes",
          "description": "يحدد حجم عرض الصورة حسب حجم الشاشة، يعمل مع srcset لاختيار الصورة المناسبة",
          "values": [
            {
              "value": "(max-width: 600px) 480px, 800px",
              "description": "حجم الصورة حسب عرض الشاشة"
            },
            {
              "value": "(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw",
              "description": "أحجام متعددة"
            },
            {
              "value": "100vw",
              "description": "عرض كامل الشاشة"
            },
            {
              "value": "50vw",
              "description": "نصف عرض الشاشة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "usemap",
          "description": "يربط الصورة بخريطة تفاعلية معرّفة بعنصر map، يفعّل المناطق القابلة للنقر على الصورة",
          "values": [
            {
              "value": "#map1",
              "description": "يربط الصورة بالخريطة ذات الاسم map1"
            },
            {
              "value": "#map2",
              "description": "يربط الصورة بالخريطة ذات الاسم map2"
            },
            {
              "value": "#map",
              "description": "يربط الصورة بالخريطة ذات الاسم map"
            }
          ],
          "freeInput": true
        },
        {
          "name": "ismap",
          "description": "يجعل الصورة كاملة قابلة للنقر كخريطة من جانب الخادم، يرسل إحداثيات النقرة للخادم (نادر الاستخدام حالياً)",
          "values": [
            {
              "value": "",
              "description": "يفعّل خاصية خريطة الخادم (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "crossorigin",
          "description": "عند تحميل صورة من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
          "values": [
            {
              "value": "anonymous",
              "description": "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر"
            },
            {
              "value": "use-credentials",
              "description": "يرسل معلومات المستخدم للموقع الآخر إذا كان يثق به"
            }
          ]
        },
        {
          "name": "decoding",
          "description": "يحدد كيف يفك المتصفح تشفير الصورة، يتحكم في توقيت ظهورها بالنسبة لباقي محتوى الصفحة",
          "values": [
            {
              "value": "sync",
              "description": "يفك تشفير الصورة فوراً، قد يؤخر ظهور بقية المحتوى"
            },
            {
              "value": "async",
              "description": "يفك تشفير الصورة في الخلفية دون تأخير عرض بقية الصفحة"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يقرر الطريقة الأنسب (افتراضي)"
            }
          ]
        },
        {
          "name": "title",
          "description": "يضيف تلميحاً يظهر عند تمرير الماوس فوق الصورة، يوضح معلومات إضافية عن الصورة",
          "values": [
            {
              "value": "صورة المنتج رقم 1",
              "description": "تلميح للصورة"
            },
            {
              "value": "اضغط للتكبير",
              "description": "تلميح تفاعلي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "style",
          "description": "يضيف تنسيقاً مباشراً على الصورة (CSS)، يتحكم في مظهر الصورة",
          "values": [
            {
              "value": "border: 2px solid red;",
              "description": "إطار أحمر حول الصورة"
            },
            {
              "value": "border-radius: 50%;",
              "description": "صورة دائرية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) للصورة، يمكن استهدافها بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "product-image",
              "description": "فئة صورة المنتج"
            },
            {
              "value": "logo",
              "description": "فئة الشعار"
            },
            {
              "value": "responsive",
              "description": "فئة الصورة المتجاوبة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يضيف معرفاً فريداً للصورة، يمكن استهدافها بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "main-image",
              "description": "معرف الصورة الرئيسية"
            },
            {
              "value": "profile-pic",
              "description": "معرف صورة الملف الشخصي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "video",
      "description": "يضيف فيديو إلى الصفحة مع عناصر تحكم للتشغيل والإيقاف وضبط الصوت، يعرض محتوى مرئي متحرك",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار ملف الفيديو، يخبر المتصفح أين يجد الفيديو لتشغيله",
          "values": [
            {
              "value": "video.mp4",
              "description": "فيديو في نفس مجلد الصفحة"
            },
            {
              "value": "video.webm",
              "description": "فيديو بصيغة WebM"
            },
            {
              "value": "video.ogv",
              "description": "فيديو بصيغة OGV"
            },
            {
              "value": "/videos/clip.mp4",
              "description": "فيديو في مجلد videos"
            },
            {
              "value": "/assets/videos/movie.webm",
              "description": "فيديو في مجلد assets/videos"
            },
            {
              "value": "https://example.com/video.mp4",
              "description": "فيديو من موقع آخر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "controls",
          "description": "يعرض أزرار التحكم في الفيديو (تشغيل، إيقاف، صوت، تكبير)، يسمح للمستخدم بالتحكم في التشغيل",
          "values": [
            {
              "value": "",
              "description": "يعرض أزرار التحكم (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "autoplay",
          "description": "يشغل الفيديو تلقائياً عند تحميل الصفحة، يجذب انتباه المستخدم فوراً (قد لا يعمل في بعض المتصفحات)",
          "values": [
            {
              "value": "",
              "description": "يشغل تلقائياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "loop",
          "description": "يعيد تشغيل الفيديو تلقائياً عند انتهائه، يكرر المحتوى باستمرار مثل الفيديوهات القصيرة",
          "values": [
            {
              "value": "",
              "description": "يعيد التشغيل تلقائياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "muted",
          "description": "يكتم صوت الفيديو عند التشغيل، مفيد للفيديوهات التي تشغل تلقائياً لتجنب إزعاج المستخدم",
          "values": [
            {
              "value": "",
              "description": "يكتم الصوت (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "poster",
          "description": "يعرض صورة ثابتة قبل تشغيل الفيديو، توحي بمحتوى الفيديو وتجذب المستخدم للضغط للتشغيل",
          "values": [
            {
              "value": "poster.jpg",
              "description": "صورة غلاف الفيديو"
            },
            {
              "value": "cover.png",
              "description": "صورة غلاف"
            },
            {
              "value": "/images/poster.webp",
              "description": "صورة غلاف في مجلد images"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الفيديو بالبكسل، يتحكم في حجم الفيديو المعروض في الصفحة",
          "values": [
            {
              "value": "320",
              "description": "عرض 320 بكسل"
            },
            {
              "value": "480",
              "description": "عرض 480 بكسل"
            },
            {
              "value": "640",
              "description": "عرض 640 بكسل"
            },
            {
              "value": "720",
              "description": "عرض 720 بكسل"
            },
            {
              "value": "854",
              "description": "عرض 854 بكسل"
            },
            {
              "value": "960",
              "description": "عرض 960 بكسل"
            },
            {
              "value": "1280",
              "description": "عرض 1280 بكسل"
            },
            {
              "value": "1920",
              "description": "عرض 1920 بكسل"
            },
            {
              "value": "100%",
              "description": "عرض كامل (نسبة مئوية)"
            },
            {
              "value": "50%",
              "description": "نصف العرض (نسبة مئوية)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع الفيديو بالبكسل، يحافظ على نسب العرض إلى الارتفاع",
          "values": [
            {
              "value": "180",
              "description": "ارتفاع 180 بكسل"
            },
            {
              "value": "240",
              "description": "ارتفاع 240 بكسل"
            },
            {
              "value": "360",
              "description": "ارتفاع 360 بكسل"
            },
            {
              "value": "480",
              "description": "ارتفاع 480 بكسل"
            },
            {
              "value": "540",
              "description": "ارتفاع 540 بكسل"
            },
            {
              "value": "720",
              "description": "ارتفاع 720 بكسل"
            },
            {
              "value": "1080",
              "description": "ارتفاع 1080 بكسل"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل (نسبة مئوية)"
            },
            {
              "value": "50%",
              "description": "نصف الارتفاع (نسبة مئوية)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "playsinline",
          "description": "يمنع الفيديو من الدخول في وضع ملء الشاشة على الجوال، يجعله يعمل داخل الصفحة مباشرة",
          "values": [
            {
              "value": "",
              "description": "يمنع ملء الشاشة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "preload",
          "description": "يخبر المتصفح كم من الفيديو يحمّل مسبقاً قبل أن يضغط المستخدم للتشغيل",
          "values": [
            {
              "value": "auto",
              "description": "يحمّل الفيديو كاملاً مسبقاً إذا كان جهاز المستخدم يسمح بذلك"
            },
            {
              "value": "metadata",
              "description": "يحمّل فقط معلومات الفيديو (المدة، الأبعاد) دون محتواه"
            },
            {
              "value": "none",
              "description": "لا يحمّل شيئاً حتى يضغط المستخدم للتشغيل، يوفر البيانات"
            }
          ]
        },
        {
          "name": "crossorigin",
          "description": "عند تحميل فيديو من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
          "values": [
            {
              "value": "anonymous",
              "description": "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر"
            },
            {
              "value": "use-credentials",
              "description": "يرسل معلومات المستخدم للموقع الآخر إذا كان يثق به"
            }
          ]
        },
        {
          "name": "disablePictureInPicture",
          "description": "يمنع الفيديو من الدخول في وضع الصورة داخل الصورة (Picture-in-Picture)",
          "values": [
            {
              "value": "",
              "description": "يمنع وضع الصورة داخل الصورة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "disableRemotePlayback",
          "description": "يمنع الفيديو من البث على أجهزة أخرى عن بعد (Chromecast، AirPlay)",
          "values": [
            {
              "value": "",
              "description": "يمنع البث عن بعد (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "audio",
      "description": "يضيف ملفاً صوتياً إلى الصفحة مع عناصر تحكم للتشغيل والإيقاف وضبط مستوى الصوت",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار ملف الصوت، يخبر المتصفح أين يجد الملف الصوتي لتشغيله",
          "values": [
            {
              "value": "audio.mp3",
              "description": "ملف صوتي في نفس مجلد الصفحة"
            },
            {
              "value": "audio.ogg",
              "description": "ملف صوتي بصيغة OGG"
            },
            {
              "value": "audio.wav",
              "description": "ملف صوتي بصيغة WAV"
            },
            {
              "value": "audio.aac",
              "description": "ملف صوتي بصيغة AAC"
            },
            {
              "value": "/sounds/song.mp3",
              "description": "ملف صوتي في مجلد sounds"
            },
            {
              "value": "/assets/audio/music.ogg",
              "description": "ملف صوتي في مجلد assets/audio"
            },
            {
              "value": "https://example.com/audio.mp3",
              "description": "ملف صوتي من موقع آخر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "controls",
          "description": "يعرض أزرار التحكم في الصوت (تشغيل، إيقاف، صوت)، يسمح للمستخدم بالتحكم في التشغيل",
          "values": [
            {
              "value": "",
              "description": "يعرض أزرار التحكم (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "autoplay",
          "description": "يشغل الصوت تلقائياً عند تحميل الصفحة (قد لا يعمل في بعض المتصفحات لحماية المستخدم)",
          "values": [
            {
              "value": "",
              "description": "يشغل تلقائياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "loop",
          "description": "يعيد تشغيل الصوت تلقائياً عند انتهائه، يكرر المقطع الصوتي باستمرار",
          "values": [
            {
              "value": "",
              "description": "يعيد التشغيل تلقائياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "muted",
          "description": "يكتم الصوت عند التشغيل، مفيد للصوتيات التي تشغل تلقائياً لتجنب إزعاج المستخدم",
          "values": [
            {
              "value": "",
              "description": "يكتم الصوت (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "preload",
          "description": "يخبر المتصفح كم من الملف الصوتي يحمّل مسبقاً قبل أن يضغط المستخدم للتشغيل",
          "values": [
            {
              "value": "auto",
              "description": "يحمّل الملف كاملاً مسبقاً إذا كان جهاز المستخدم يسمح بذلك"
            },
            {
              "value": "metadata",
              "description": "يحمّل فقط معلومات الملف (المدة) دون محتواه"
            },
            {
              "value": "none",
              "description": "لا يحمّل شيئاً حتى يضغط المستخدم للتشغيل، يوفر البيانات"
            }
          ]
        },
        {
          "name": "crossorigin",
          "description": "عند تحميل صوت من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
          "values": [
            {
              "value": "anonymous",
              "description": "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر"
            },
            {
              "value": "use-credentials",
              "description": "يرسل معلومات المستخدم للموقع الآخر إذا كان يثق به"
            }
          ]
        }
      ]
    },
    {
      "tag": "source",
      "description": "يحدد مصدراً بديلاً للوسائط (صوت أو فيديو) بصيغ مختلفة، يسمح للمتصفح باختيار الصيغة المناسبة له",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار ملف الوسائط البديل، يقدم خياراً آخر إذا لم يدعم المتصفح الصيغة الأولى",
          "values": [
            {
              "value": "video.mp4",
              "description": "ملف فيديو بصيغة MP4"
            },
            {
              "value": "video.webm",
              "description": "ملف فيديو بصيغة WebM"
            },
            {
              "value": "video.ogv",
              "description": "ملف فيديو بصيغة OGV"
            },
            {
              "value": "audio.mp3",
              "description": "ملف صوتي بصيغة MP3"
            },
            {
              "value": "audio.ogg",
              "description": "ملف صوتي بصيغة OGG"
            },
            {
              "value": "audio.wav",
              "description": "ملف صوتي بصيغة WAV"
            },
            {
              "value": "audio.aac",
              "description": "ملف صوتي بصيغة AAC"
            }
          ],
          "freeInput": true
        },
        {
          "name": "type",
          "description": "يحدد نوع الصيغة (MIME Type)، يساعد المتصفح في تحديد إذا كان يدعم هذا الملف قبل تحميله",
          "values": [
            {
              "value": "video/mp4",
              "description": "فيديو بصيغة MP4"
            },
            {
              "value": "video/webm",
              "description": "فيديو بصيغة WebM"
            },
            {
              "value": "video/ogg",
              "description": "فيديو بصيغة OGG"
            },
            {
              "value": "audio/mpeg",
              "description": "صوت بصيغة MP3"
            },
            {
              "value": "audio/ogg",
              "description": "صوت بصيغة OGG"
            },
            {
              "value": "audio/wav",
              "description": "صوت بصيغة WAV"
            },
            {
              "value": "audio/aac",
              "description": "صوت بصيغة AAC"
            },
            {
              "value": "audio/mp4",
              "description": "صوت بصيغة MP4"
            }
          ]
        },
        {
          "name": "srcset",
          "description": "يوفر عدة أحجام من الصورة لـ picture، يسمح باختيار الحجم المناسب حسب الشاشة",
          "values": [
            {
              "value": "image-small.jpg 480w, image-large.jpg 1200w",
              "description": "أحجام مختلفة للصورة"
            },
            {
              "value": "photo-320w.jpg 320w, photo-640w.jpg 640w, photo-1280w.jpg 1280w",
              "description": "أحجام مختلفة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "media",
          "description": "يحدد متى يتم استخدام هذا المصدر حسب حجم الشاشة، يعمل مع picture لاختيار الصورة المناسبة",
          "values": [
            {
              "value": "(max-width: 600px)",
              "description": "يستخدم للشاشات الصغيرة"
            },
            {
              "value": "(min-width: 601px)",
              "description": "يستخدم للشاشات الكبيرة"
            },
            {
              "value": "(max-width: 480px)",
              "description": "يستخدم للشاشات الصغيرة جداً"
            },
            {
              "value": "(min-width: 1024px)",
              "description": "يستخدم للشاشات الكبيرة جداً"
            },
            {
              "value": "(orientation: portrait)",
              "description": "يستخدم في الوضع العمودي"
            },
            {
              "value": "(orientation: landscape)",
              "description": "يستخدم في الوضع الأفقي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "sizes",
          "description": "يحدد حجم عرض الصورة حسب حجم الشاشة، يعمل مع srcset",
          "values": [
            {
              "value": "(max-width: 600px) 480px, 800px",
              "description": "حجم الصورة حسب عرض الشاشة"
            },
            {
              "value": "100vw",
              "description": "عرض كامل الشاشة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "track",
      "description": "يضيف ترجمة أو تعليقات نصية إلى فيديو أو صوت، يساعد في فهم المحتوى للمستخدمين الصم أو متعددي اللغات",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار ملف الترجمة (بصيغة VTT)، يحتوي على النصوص المترجمة مع توقيتاتها",
          "values": [
            {
              "value": "subtitles.vtt",
              "description": "ملف ترجمة بصيغة VTT"
            },
            {
              "value": "captions.vtt",
              "description": "ملف تعليقات بصيغة VTT"
            },
            {
              "value": "chapters.vtt",
              "description": "ملف فصول بصيغة VTT"
            },
            {
              "value": "/subtitles/ar.vtt",
              "description": "ملف ترجمة عربية في مجلد subtitles"
            },
            {
              "value": "https://example.com/subtitles/en.vtt",
              "description": "ملف ترجمة من موقع آخر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "kind",
          "description": "يحدد نوع الترجمة أو التعليق، يخبر المتصفح كيف يعرض هذا الملف (ترجمة، وصف، فصول)",
          "values": [
            {
              "value": "subtitles",
              "description": "ترجمة نصية للحوار، تظهر في أسفل الفيديو"
            },
            {
              "value": "captions",
              "description": "تعليقات توضيحية تشمل المؤثرات الصوتية، للمستخدمين الصم"
            },
            {
              "value": "descriptions",
              "description": "وصف للمشاهد للمكفوفين، يقرأ بواسطة قارئ النص"
            },
            {
              "value": "chapters",
              "description": "فصول للتنقل داخل الفيديو، يسمح بالانتقال لأجزاء محددة"
            },
            {
              "value": "metadata",
              "description": "بيانات وصفية عن الفيديو، لا تظهر للمستخدم"
            }
          ]
        },
        {
          "name": "srclang",
          "description": "يحدد لغة الترجمة، يساعد المتصفح في اختيار الترجمة المناسبة حسب لغة المستخدم",
          "values": [
            {
              "value": "ar",
              "description": "لغة عربية"
            },
            {
              "value": "en",
              "description": "لغة إنجليزية"
            },
            {
              "value": "fr",
              "description": "لغة فرنسية"
            },
            {
              "value": "es",
              "description": "لغة إسبانية"
            },
            {
              "value": "de",
              "description": "لغة ألمانية"
            },
            {
              "value": "it",
              "description": "لغة إيطالية"
            },
            {
              "value": "pt",
              "description": "لغة برتغالية"
            },
            {
              "value": "ru",
              "description": "لغة روسية"
            },
            {
              "value": "ja",
              "description": "لغة يابانية"
            },
            {
              "value": "zh",
              "description": "لغة صينية"
            },
            {
              "value": "ko",
              "description": "لغة كورية"
            }
          ]
        },
        {
          "name": "label",
          "description": "يضيف اسماً للترجمة يظهر في قائمة الترجمات، يساعد المستخدم في اختيار الترجمة المناسبة",
          "values": [
            {
              "value": "عربي",
              "description": "اسم الترجمة العربية"
            },
            {
              "value": "English",
              "description": "اسم الترجمة الإنجليزية"
            },
            {
              "value": "Français",
              "description": "اسم الترجمة الفرنسية"
            },
            {
              "value": "Español",
              "description": "اسم الترجمة الإسبانية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "default",
          "description": "يجعل هذه الترجمة هي الترجمة الافتراضية التي تظهر تلقائياً عند تشغيل الفيديو",
          "values": [
            {
              "value": "",
              "description": "يجعلها افتراضية (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "picture",
      "description": "يحتوي على عدة مصادر لصورة واحدة، يسمح للمتصفح باختيار الصورة المناسبة حسب حجم الشاشة أو نوع الجهاز",
      "properties": []
    },
    {
      "tag": "figure",
      "description": "يحتوي على محتوى مستقل مثل صورة أو رسم مع تعليق توضيحي، يربط المحتوى بالتعليق الخاص به",
      "properties": []
    },
    {
      "tag": "figcaption",
      "description": "يضيف تعليقاً أو وصفاً للصورة أو المحتوى داخل figure، يشرح محتوى الصورة أو مصدرها",
      "properties": []
    },
    {
      "tag": "map",
      "description": "يعرّف خريطة تفاعلية على الصورة، يحدد مناطق قابلة للنقر تؤدي إلى روابط مختلفة حسب مكان النقر",
      "properties": [
        {
          "name": "name",
          "description": "يحدد اسم الخريطة، يربطها بالصورة عبر خاصية usemap لتفعيل المناطق التفاعلية",
          "values": [
            {
              "value": "map1",
              "description": "اسم الخريطة"
            },
            {
              "value": "map2",
              "description": "اسم الخريطة"
            },
            {
              "value": "navigation",
              "description": "اسم خريطة التنقل"
            },
            {
              "value": "imageMap",
              "description": "اسم الخريطة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "area",
      "description": "يحدد منطقة قابلة للنقر داخل خريطة الصورة، عند النقر على هذه المنطقة ينتقل المستخدم إلى رابط محدد",
      "properties": [
        {
          "name": "shape",
          "description": "يحدد شكل المنطقة التفاعلية على الصورة، يحدد مكان النقر الفعال",
          "values": [
            {
              "value": "rect",
              "description": "منطقة مستطيلة، تحدد بإحداثيات x1,y1,x2,y2"
            },
            {
              "value": "rectangle",
              "description": "منطقة مستطيلة (مرادف لـ rect)"
            },
            {
              "value": "circle",
              "description": "منطقة دائرية، تحدد بمركز ونصف قطر"
            },
            {
              "value": "poly",
              "description": "منطقة مضلعة، تحدد بعدة نقاط"
            },
            {
              "value": "polygon",
              "description": "منطقة مضلعة (مرادف لـ poly)"
            },
            {
              "value": "default",
              "description": "المنطقة الافتراضية، تغطي كل الصورة"
            }
          ]
        },
        {
          "name": "coords",
          "description": "يحدد إحداثيات المنطقة التفاعلية، يحدد مكان النقر الفعال على الصورة",
          "values": [
            {
              "value": "0,0,50,50",
              "description": "إحداثيات مستطيل (x1,y1,x2,y2)"
            },
            {
              "value": "10,20,80,90",
              "description": "إحداثيات مستطيل"
            },
            {
              "value": "50,50,20",
              "description": "إحداثيات دائرة (مركزx, مركزy, نصف القطر)"
            },
            {
              "value": "100,50,30",
              "description": "إحداثيات دائرة"
            },
            {
              "value": "0,0,50,0,50,50,0,50",
              "description": "إحداثيات مضلع (نقاط متعددة)"
            },
            {
              "value": "10,10,90,10,90,90,10,90",
              "description": "إحداثيات مضلع"
            },
            {
              "value": "",
              "description": "إحداثيات فارغة (للـ default)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "href",
          "description": "يحدد رابط الوجهة عند النقر على المنطقة، ينتقل المستخدم إلى هذه الصفحة أو الموقع",
          "values": [
            {
              "value": "https://example.com",
              "description": "رابط خارجي"
            },
            {
              "value": "/page",
              "description": "صفحة داخل الموقع"
            },
            {
              "value": "#section",
              "description": "جزء في نفس الصفحة"
            },
            {
              "value": "page.html",
              "description": "صفحة في نفس الموقع"
            },
            {
              "value": "mailto:email@example.com",
              "description": "يفتح برنامج البريد"
            },
            {
              "value": "tel:+123456789",
              "description": "يفتح تطبيق الاتصال"
            }
          ],
          "freeInput": true
        },
        {
          "name": "alt",
          "description": "يضيف نصاً وصفياً للمنطقة يظهر عند تمرير الماوس، يساعد في فهم وظيفة المنطقة",
          "values": [
            {
              "value": "وصف المنطقة",
              "description": "نص يصف المنطقة التفاعلية"
            },
            {
              "value": "انتقل إلى الصفحة الرئيسية",
              "description": "نص وصفي"
            },
            {
              "value": "منطقة المنتج",
              "description": "نص وصفي للمنتج"
            },
            {
              "value": "",
              "description": "نص بديل فارغ"
            }
          ],
          "freeInput": true
        },
        {
          "name": "target",
          "description": "يحدد كيف وأين يفتح الرابط عند النقر على المنطقة",
          "values": [
            {
              "value": "_blank",
              "description": "يفتح الرابط في نافذة جديدة"
            },
            {
              "value": "_self",
              "description": "يفتح الرابط في نفس النافذة (الافتراضي)"
            },
            {
              "value": "_parent",
              "description": "يفتح الرابط في الإطار الأب"
            },
            {
              "value": "_top",
              "description": "يفتح الرابط في أعلى النافذة"
            }
          ]
        },
        {
          "name": "download",
          "description": "يجبر المتصفح على تحميل الملف بدلاً من فتحه عند النقر على المنطقة",
          "values": [
            {
              "value": "filename.pdf",
              "description": "يحمل الملف بهذا الاسم"
            },
            {
              "value": "",
              "description": "يحمل الملف بالاسم الأصلي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rel",
          "description": "يحدد علاقة الرابط بالصفحة الحالية، يساعد محركات البحث",
          "values": [
            {
              "value": "nofollow",
              "description": "يأمر محركات البحث بعدم متابعة الرابط"
            },
            {
              "value": "noopener",
              "description": "يمنع الصفحة الجديدة من التحكم بالصفحة الحالية"
            },
            {
              "value": "noreferrer",
              "description": "يمنع إرسال معلومات المصدر"
            }
          ]
        }
      ]
    },
    {
      "tag": "iframe",
      "description": "يضمن صفحة HTML أخرى داخل الصفحة الحالية، يعرض محتوى من موقع آخر أو فيديو من يوتيوب",
      "properties": [
        {
          "name": "src",
          "description": "يحدد رابط الصفحة التي ستظهر داخل الإطار، يحدد المحتوى المضمن",
          "values": [
            {
              "value": "https://www.youtube.com/embed/VIDEO_ID",
              "description": "فيديو يوتيوب مضمن"
            },
            {
              "value": "https://www.youtube.com/embed/dQw4w9WgXcQ",
              "description": "فيديو يوتيوب"
            },
            {
              "value": "https://www.google.com/maps/embed?pb=...",
              "description": "خريطة جوجل مضمنة"
            },
            {
              "value": "https://example.com",
              "description": "صفحة موقع آخر"
            },
            {
              "value": "page.html",
              "description": "صفحة من نفس الموقع"
            },
            {
              "value": "about.html",
              "description": "صفحة عن الموقع"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الإطار بالبكسل، يتحكم في حجم المحتوى المضمن المعروض",
          "values": [
            {
              "value": "320",
              "description": "عرض 320 بكسل"
            },
            {
              "value": "480",
              "description": "عرض 480 بكسل"
            },
            {
              "value": "640",
              "description": "عرض 640 بكسل"
            },
            {
              "value": "854",
              "description": "عرض 854 بكسل"
            },
            {
              "value": "960",
              "description": "عرض 960 بكسل"
            },
            {
              "value": "1280",
              "description": "عرض 1280 بكسل"
            },
            {
              "value": "100%",
              "description": "عرض كامل (نسبة مئوية)"
            },
            {
              "value": "50%",
              "description": "نصف العرض (نسبة مئوية)"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع العرض (نسبة مئوية)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع الإطار بالبكسل، يتحكم في حجم المحتوى المضمن المعروض",
          "values": [
            {
              "value": "180",
              "description": "ارتفاع 180 بكسل"
            },
            {
              "value": "240",
              "description": "ارتفاع 240 بكسل"
            },
            {
              "value": "360",
              "description": "ارتفاع 360 بكسل"
            },
            {
              "value": "480",
              "description": "ارتفاع 480 بكسل"
            },
            {
              "value": "720",
              "description": "ارتفاع 720 بكسل"
            },
            {
              "value": "1080",
              "description": "ارتفاع 1080 بكسل"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل (نسبة مئوية)"
            },
            {
              "value": "50%",
              "description": "نصف الارتفاع (نسبة مئوية)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "allowfullscreen",
          "description": "يسمح للمحتوى المضمن بالدخول في وضع ملء الشاشة، مفيد للفيديوهات والمشغلات",
          "values": [
            {
              "value": "",
              "description": "يسمح بملء الشاشة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "sandbox",
          "description": "يفرض قيوداً أمنية على المحتوى المضمن، يمنع تنفيذ سكريبتات أو نماذج أو روابط ضارة",
          "values": [
            {
              "value": "allow-scripts",
              "description": "يسمح بتنفيذ السكريبتات"
            },
            {
              "value": "allow-forms",
              "description": "يسمح بإرسال النماذج"
            },
            {
              "value": "allow-same-origin",
              "description": "يسمح بمشاركة المصدر"
            },
            {
              "value": "allow-popups",
              "description": "يسمح بفتح نوافذ منبثقة"
            },
            {
              "value": "allow-modals",
              "description": "يسمح بفتح نوافذ حوارية"
            },
            {
              "value": "allow-orientation-lock",
              "description": "يسمح بقفل اتجاه الشاشة"
            },
            {
              "value": "allow-pointer-lock",
              "description": "يسمح بقفل المؤشر"
            },
            {
              "value": "allow-presentation",
              "description": "يسمح بالعرض"
            },
            {
              "value": "allow-top-navigation",
              "description": "يسمح بتغيير رابط الصفحة الرئيسية"
            },
            {
              "value": "allow-top-navigation-by-user-activation",
              "description": "يسمح بتغيير رابط الصفحة الرئيسية بتفاعل المستخدم"
            },
            {
              "value": "allow-downloads",
              "description": "يسمح بتحميل الملفات"
            },
            {
              "value": "",
              "description": "يمنع كل شيء (فارغ)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "loading",
          "description": "يحدد متى يتم تحميل الإطار، يؤخر تحميل الإطارات غير الظاهرة لتسريع الصفحة",
          "values": [
            {
              "value": "lazy",
              "description": "يؤخر تحميل الإطار حتى يقترب المستخدم منه"
            },
            {
              "value": "eager",
              "description": "يحمل الإطار فوراً (الافتراضي)"
            }
          ]
        },
        {
          "name": "referrerpolicy",
          "description": "يحدد هل يرسل المتصفح عنوان الصفحة الحالية للموقع المضمّن، يحمي الخصوصية",
          "values": [
            {
              "value": "no-referrer",
              "description": "لا يرسل أي معلومات عن الصفحة الحالية"
            },
            {
              "value": "origin",
              "description": "يرسل اسم الموقع فقط دون الرابط الكامل"
            },
            {
              "value": "origin-when-cross-origin",
              "description": "يرسل اسم الموقع فقط للمواقع الأخرى"
            },
            {
              "value": "same-origin",
              "description": "يرسل المعلومات الكاملة لنفس الموقع فقط"
            },
            {
              "value": "strict-origin",
              "description": "يرسل اسم الموقع فقط، ولا يرسل للمواقع غير الآمنة"
            },
            {
              "value": "strict-origin-when-cross-origin",
              "description": "يرسل اسم الموقع للمواقع الأخرى، والرابط كاملاً لنفس الموقع (افتراضي)"
            },
            {
              "value": "unsafe-url",
              "description": "يرسل الرابط الكامل دائماً (غير آمن)"
            }
          ]
        },
        {
          "name": "allow",
          "description": "يمنح المحتوى المضمّن صلاحية استخدام ميزات معينة من المتصفح مثل الكاميرا أو الموقع الجغرافي",
          "values": [
            {
              "value": "fullscreen",
              "description": "يسمح بملء الشاشة"
            },
            {
              "value": "camera",
              "description": "يسمح باستخدام الكاميرا"
            },
            {
              "value": "microphone",
              "description": "يسمح باستخدام الميكروفون"
            },
            {
              "value": "geolocation",
              "description": "يسمح بالوصول للموقع الجغرافي"
            },
            {
              "value": "autoplay",
              "description": "يسمح بالتشغيل التلقائي للفيديو أو الصوت"
            },
            {
              "value": "encrypted-media",
              "description": "يسمح بالوسائط المشفرة"
            },
            {
              "value": "payment",
              "description": "يسمح بالدفع"
            },
            {
              "value": "accelerometer",
              "description": "يسمح باستخدام مقياس التسارع"
            },
            {
              "value": "gyroscope",
              "description": "يسمح باستخدام الجيروسكوب"
            },
            {
              "value": "magnetometer",
              "description": "يسمح باستخدام المغناطيسية"
            },
            {
              "value": "ambient-light-sensor",
              "description": "يسمح باستخدام حساس الضوء"
            },
            {
              "value": "battery",
              "description": "يسمح بالوصول لمعلومات البطارية"
            },
            {
              "value": "display-capture",
              "description": "يسمح بتسجيل الشاشة"
            },
            {
              "value": "clipboard-read",
              "description": "يسمح بقراءة الحافظة"
            },
            {
              "value": "clipboard-write",
              "description": "يسمح بالكتابة في الحافظة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "name",
          "description": "يحدد اسماً للإطار، يمكن استهدافه من رابط بخاصية target أو من كود JavaScript",
          "values": [
            {
              "value": "myFrame",
              "description": "اسم الإطار"
            },
            {
              "value": "videoFrame",
              "description": "اسم إطار الفيديو"
            },
            {
              "value": "mapFrame",
              "description": "اسم إطار الخريطة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "title",
          "description": "يضيف عنواناً للإطار يظهر عند تمرير الماوس، مفيد لسهولة الوصول",
          "values": [
            {
              "value": "فيديو يوتيوب مضمن",
              "description": "عنوان الإطار"
            },
            {
              "value": "خريطة جوجل",
              "description": "عنوان الإطار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "scrolling",
          "description": "يحدد ما إذا كان الإطار سيظهر مع شريط تمرير أم لا (قديم، استُبدل بـ CSS)",
          "values": [
            {
              "value": "yes",
              "description": "يظهر شريط التمرير"
            },
            {
              "value": "no",
              "description": "لا يظهر شريط التمرير"
            },
            {
              "value": "auto",
              "description": "يظهر تلقائياً عند الحاجة (الافتراضي)"
            }
          ]
        },
        {
          "name": "frameborder",
          "description": "يحدد سمك إطار الإطار (قديم، استُبدل بـ CSS border)",
          "values": [
            {
              "value": "0",
              "description": "بدون إطار"
            },
            {
              "value": "1",
              "description": "إطار رفيع (الافتراضي)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "embed",
      "description": "يضمن محتوى خارجياً مثل ملف PDF أو فيديو فلاش أو تطبيق، يعرض محتوى تفاعلي من مصادر خارجية",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار الملف الخارجي الذي سيتم تضمينه، يحدد المحتوى المعروض",
          "values": [
            {
              "value": "file.pdf",
              "description": "ملف PDF"
            },
            {
              "value": "document.pdf",
              "description": "ملف PDF"
            },
            {
              "value": "game.swf",
              "description": "تطبيق فلاش"
            },
            {
              "value": "animation.swf",
              "description": "تطبيق فلاش"
            },
            {
              "value": "video.mp4",
              "description": "فيديو"
            },
            {
              "value": "image.svg",
              "description": "صورة SVG"
            }
          ],
          "freeInput": true
        },
        {
          "name": "type",
          "description": "يحدد نوع الملف المضمن (MIME Type)، يساعد المتصفح في اختيار المشغل المناسب",
          "values": [
            {
              "value": "application/pdf",
              "description": "ملف PDF"
            },
            {
              "value": "application/x-shockwave-flash",
              "description": "تطبيق فلاش"
            },
            {
              "value": "video/mp4",
              "description": "فيديو MP4"
            },
            {
              "value": "video/webm",
              "description": "فيديو WebM"
            },
            {
              "value": "image/svg+xml",
              "description": "صورة SVG"
            }
          ]
        },
        {
          "name": "width",
          "description": "يحدد عرض المحتوى المضمن بالبكسل أو النسبة المئوية، يتحكم في حجم العرض",
          "values": [
            {
              "value": "320",
              "description": "عرض 320 بكسل"
            },
            {
              "value": "480",
              "description": "عرض 480 بكسل"
            },
            {
              "value": "640",
              "description": "عرض 640 بكسل"
            },
            {
              "value": "800",
              "description": "عرض 800 بكسل"
            },
            {
              "value": "100%",
              "description": "عرض كامل"
            },
            {
              "value": "50%",
              "description": "نصف العرض"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع المحتوى المضمن بالبكسل أو النسبة المئوية، يتحكم في حجم الارتفاع",
          "values": [
            {
              "value": "180",
              "description": "ارتفاع 180 بكسل"
            },
            {
              "value": "240",
              "description": "ارتفاع 240 بكسل"
            },
            {
              "value": "360",
              "description": "ارتفاع 360 بكسل"
            },
            {
              "value": "480",
              "description": "ارتفاع 480 بكسل"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل"
            },
            {
              "value": "50%",
              "description": "نصف الارتفاع"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "object",
      "description": "يضمن مورداً خارجياً مثل PDF، فيديو، أو تطبيق، يمكن معالجته بواسطة إضافات المتصفح",
      "properties": [
        {
          "name": "data",
          "description": "يحدد مسار الملف الخارجي الذي سيتم تضمينه، يحدد المحتوى المعروض",
          "values": [
            {
              "value": "file.pdf",
              "description": "ملف PDF"
            },
            {
              "value": "document.pdf",
              "description": "ملف PDF"
            },
            {
              "value": "video.mp4",
              "description": "فيديو"
            },
            {
              "value": "image.svg",
              "description": "صورة SVG"
            },
            {
              "value": "image.jpg",
              "description": "صورة JPG"
            }
          ],
          "freeInput": true
        },
        {
          "name": "type",
          "description": "يحدد نوع الملف المضمن (MIME Type)، يساعد المتصفح في اختيار المشغل المناسب",
          "values": [
            {
              "value": "application/pdf",
              "description": "ملف PDF"
            },
            {
              "value": "video/mp4",
              "description": "فيديو MP4"
            },
            {
              "value": "video/webm",
              "description": "فيديو WebM"
            },
            {
              "value": "image/svg+xml",
              "description": "صورة SVG"
            },
            {
              "value": "image/jpeg",
              "description": "صورة JPG"
            },
            {
              "value": "image/png",
              "description": "صورة PNG"
            }
          ]
        },
        {
          "name": "width",
          "description": "يحدد عرض المحتوى المضمن بالبكسل، يتحكم في حجم العرض",
          "values": [
            {
              "value": "320",
              "description": "عرض 320 بكسل"
            },
            {
              "value": "480",
              "description": "عرض 480 بكسل"
            },
            {
              "value": "640",
              "description": "عرض 640 بكسل"
            },
            {
              "value": "800",
              "description": "عرض 800 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع المحتوى المضمن بالبكسل، يتحكم في حجم الارتفاع",
          "values": [
            {
              "value": "180",
              "description": "ارتفاع 180 بكسل"
            },
            {
              "value": "240",
              "description": "ارتفاع 240 بكسل"
            },
            {
              "value": "360",
              "description": "ارتفاع 360 بكسل"
            },
            {
              "value": "480",
              "description": "ارتفاع 480 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "canvas",
      "description": "يوفر مساحة فارغة يمكن الرسم عليها بواسطة JavaScript، يستخدم للرسوم المتحركة، الألعاب، والرسوم البيانية",
      "properties": [
        {
          "name": "width",
          "description": "يحدد عرض مساحة الرسم بالبكسل، يحدد دقة الرسم وليس فقط حجم العرض على الصفحة",
          "values": [
            {
              "value": "300",
              "description": "عرض 300 بكسل (الافتراضي)"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            },
            {
              "value": "800",
              "description": "عرض 800 بكسل"
            },
            {
              "value": "1024",
              "description": "عرض 1024 بكسل"
            },
            {
              "value": "1280",
              "description": "عرض 1280 بكسل"
            },
            {
              "value": "1920",
              "description": "عرض 1920 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع مساحة الرسم بالبكسل، يحدد دقة الرسم وليس فقط حجم العرض على الصفحة",
          "values": [
            {
              "value": "150",
              "description": "ارتفاع 150 بكسل (الافتراضي)"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "300",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "400",
              "description": "ارتفاع 400 بكسل"
            },
            {
              "value": "600",
              "description": "ارتفاع 600 بكسل"
            },
            {
              "value": "768",
              "description": "ارتفاع 768 بكسل"
            },
            {
              "value": "1024",
              "description": "ارتفاع 1024 بكسل"
            },
            {
              "value": "1080",
              "description": "ارتفاع 1080 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "interactive": [
    {
      "tag": "details",
      "description": "ينشئ عنصراً تفاعلياً يمكن فتحه وإغلاقه، يخفي محتوى إضافياً حتى يضغط المستخدم لعرضه، مفيد للأسئلة الشائعة",
      "properties": [
        {
          "name": "open",
          "description": "يجعل محتوى details مفتوحاً وظاهراً عند تحميل الصفحة بدلاً من كونه مطوياً",
          "values": [
            {
              "value": "",
              "description": "يفتح المحتوى تلقائياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "name",
          "description": "يحدد مجموعة من عناصر details، عند فتح واحد في المجموعة يغلق الآخر تلقائياً، ينظم المحتوى القابل للطي",
          "values": [
            {
              "value": "faq",
              "description": "مجموعة الأسئلة الشائعة"
            },
            {
              "value": "accordion",
              "description": "مجموعة الأكورديون"
            },
            {
              "value": "group1",
              "description": "اسم المجموعة"
            },
            {
              "value": "sections",
              "description": "مجموعة الأقسام"
            },
            {
              "value": "tabs",
              "description": "مجموعة التبويبات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "style",
          "description": "يضيف تنسيقات CSS مباشرة لعنصر details، يتحكم في مظهره ومظهر محتواه",
          "values": [
            {
              "value": "border: 1px solid #ccc;",
              "description": "إطار رمادي حول العنصر"
            },
            {
              "value": "padding: 10px;",
              "description": "حشوة داخلية 10 بكسل"
            },
            {
              "value": "background-color: #f9f9f9;",
              "description": "خلفية رمادية فاتحة"
            },
            {
              "value": "border-radius: 5px;",
              "description": "زوايا مدورة"
            },
            {
              "value": "margin: 10px 0;",
              "description": "هامش علوي وسفلي 10 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) لعنصر details لتطبيق تنسيقات CSS محددة",
          "values": [
            {
              "value": "faq-item",
              "description": "فئة عنصر الأسئلة الشائعة"
            },
            {
              "value": "accordion-item",
              "description": "فئة عنصر الأكورديون"
            },
            {
              "value": "collapsible",
              "description": "فئة العنصر القابل للطي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً لعنصر details يمكن استهدافه بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "faq-1",
              "description": "معرف السؤال الأول"
            },
            {
              "value": "accordion-1",
              "description": "معرف الأكورديون الأول"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "summary",
      "description": "يحدد العنوان الظاهر دائماً لعنصر details، عند النقر عليه يفتح أو يغلق المحتوى المخفي",
      "properties": [
        {
          "name": "style",
          "description": "يضيف تنسيقات CSS مباشرة لعنوان summary، يتحكم في مظهر العنوان القابل للنقر",
          "values": [
            {
              "value": "font-weight: bold;",
              "description": "خط عريض"
            },
            {
              "value": "color: #333;",
              "description": "لون النص رمادي غامق"
            },
            {
              "value": "cursor: pointer;",
              "description": "مؤشر الفأرة على شكل يد"
            },
            {
              "value": "padding: 8px;",
              "description": "حشوة داخلية 8 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) لعنوان summary لتطبيق تنسيقات CSS محددة",
          "values": [
            {
              "value": "faq-title",
              "description": "فئة عنوان السؤال"
            },
            {
              "value": "accordion-title",
              "description": "فئة عنوان الأكورديون"
            },
            {
              "value": "collapsible-title",
              "description": "فئة العنوان القابل للطي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً لعنوان summary يمكن استهدافه بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "faq-title-1",
              "description": "معرف عنوان السؤال الأول"
            },
            {
              "value": "accordion-title-1",
              "description": "معرف عنوان الأكورديون الأول"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "dialog",
      "description": "ينشئ نافذة حوار أو نافذة منبثقة للتفاعل مع المستخدم، تظهر فوق محتوى الصفحة لجذب الانتباه",
      "properties": [
        {
          "name": "open",
          "description": "يجعل نافذة الحوار مفتوحة وظاهرة عند تحميل الصفحة، تظهر فوراً للمستخدم",
          "values": [
            {
              "value": "",
              "description": "يفتح النافذة تلقائياً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "closedby",
          "description": "يحدد الطرق المسموحة لإغلاق نافذة الحوار من طرف المستخدم، مثل الضغط خارجها أو زر Escape",
          "values": [
            {
              "value": "any",
              "description": "يسمح بالإغلاق بالنقر خارج النافذة أو بزر Escape"
            },
            {
              "value": "closerequest",
              "description": "يسمح بالإغلاق فقط بزر Escape أو طلب إغلاق صريح، وليس بالنقر خارجها"
            },
            {
              "value": "none",
              "description": "لا يسمح بإغلاق النافذة إلا عبر كود JavaScript صريح"
            }
          ]
        },
        {
          "name": "role",
          "description": "يحدد دور نافذة الحوار للمساعدة في إمكانية الوصول لقارئات الشاشة",
          "values": [
            {
              "value": "dialog",
              "description": "دور حوار عادي (الافتراضي)"
            },
            {
              "value": "alertdialog",
              "description": "دور حوار تنبيهي لجذب الانتباه"
            },
            {
              "value": "alert",
              "description": "دور تنبيهي"
            }
          ]
        },
        {
          "name": "aria-label",
          "description": "يضيف اسماً لنافذة الحوار لمساعدة قارئات الشاشة في التعرف على محتواها",
          "values": [
            {
              "value": "تأكيد الحذف",
              "description": "اسم نافذة تأكيد الحذف"
            },
            {
              "value": "تسجيل الدخول",
              "description": "اسم نافذة تسجيل الدخول"
            },
            {
              "value": "تنبيه",
              "description": "اسم نافذة التنبيه"
            },
            {
              "value": "نموذج الاتصال",
              "description": "اسم نافذة نموذج الاتصال"
            },
            {
              "value": "الإشعار",
              "description": "اسم نافذة الإشعار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-labelledby",
          "description": "يربط نافذة الحوار بعنوان تعريفها بواسطة معرف (id) لقارئات الشاشة",
          "values": [
            {
              "value": "dialog-title",
              "description": "معرف عنوان نافذة الحوار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-describedby",
          "description": "يربط نافذة الحوار بوصفها لتوضيح المحتوى لقارئات الشاشة",
          "values": [
            {
              "value": "dialog-description",
              "description": "معرف وصف نافذة الحوار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-modal",
          "description": "يحدد أن نافذة الحوار تمنع التفاعل مع بقية الصفحة أثناء ظهورها (نافذة مشروطة)",
          "values": [
            {
              "value": "true",
              "description": "نافذة مشروطة (تمنع التفاعل مع الخلفية)"
            },
            {
              "value": "false",
              "description": "نافذة غير مشروطة (تسمح بالتفاعل مع الخلفية)"
            }
          ]
        },
        {
          "name": "style",
          "description": "يضيف تنسيقات CSS مباشرة لنافذة الحوار، يتحكم في مظهرها وموقعها",
          "values": [
            {
              "value": "border: 2px solid #333;",
              "description": "إطار سميك حول النافذة"
            },
            {
              "value": "border-radius: 8px;",
              "description": "زوايا مدورة"
            },
            {
              "value": "padding: 20px;",
              "description": "حشوة داخلية 20 بكسل"
            },
            {
              "value": "background-color: white;",
              "description": "خلفية بيضاء"
            },
            {
              "value": "box-shadow: 0 4px 8px rgba(0,0,0,0.2);",
              "description": "ظل ناعم"
            },
            {
              "value": "width: 400px;",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "max-width: 90%;",
              "description": "أقصى عرض 90%"
            },
            {
              "value": "margin: auto;",
              "description": "توسيط النافذة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) لنافذة الحوار لتطبيق تنسيقات CSS محددة",
          "values": [
            {
              "value": "modal",
              "description": "فئة النافذة المشروطة"
            },
            {
              "value": "popup",
              "description": "فئة النافذة المنبثقة"
            },
            {
              "value": "dialog-box",
              "description": "فئة مربع الحوار"
            },
            {
              "value": "alert-box",
              "description": "فئة صندوق التنبيه"
            },
            {
              "value": "confirm-dialog",
              "description": "فئة نافذة التأكيد"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً لنافذة الحوار يمكن استهدافه بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "confirm-dialog",
              "description": "معرف نافذة التأكيد"
            },
            {
              "value": "login-dialog",
              "description": "معرف نافذة تسجيل الدخول"
            },
            {
              "value": "alert-dialog",
              "description": "معرف نافذة التنبيه"
            },
            {
              "value": "modal-dialog",
              "description": "معرف النافذة المشروطة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "returnvalue",
          "description": "يخزن قيمة ترجعية من نافذة الحوار بعد إغلاقها، تستخدم في JavaScript",
          "values": [
            {
              "value": "confirmed",
              "description": "قيمة التأكيد"
            },
            {
              "value": "cancelled",
              "description": "قيمة الإلغاء"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "components": [
    {
      "tag": "template",
      "description": "يخزن قالب HTML مخفي لا يظهر في الصفحة، يستخدم لإنشاء عناصر HTML متكررة بواسطة JavaScript دون تكرار الكود، يسهل إنشاء محتوى ديناميكي وإعادة استخدامه",
      "properties": [
        {
          "name": "shadowrootmode",
          "description": "يحدد وضع Shadow DOM للقالب، يسمح بإنشاء مكونات معزولة لا تتأثر بتنسيقات الصفحة الرئيسية، ويوفر تغليفاً كاملاً للعناصر والأنماط",
          "values": [
            {
              "value": "open",
              "description": "يسمح بالوصول إلى Shadow DOM من خلال JavaScript باستخدام element.shadowRoot، مفيد للتفاعل مع المكون"
            },
            {
              "value": "closed",
              "description": "يمنع الوصول إلى Shadow DOM من خلال JavaScript، يعيد null عند محاولة الوصول، يزيد الخصوصية والعزل"
            }
          ]
        },
        {
          "name": "shadowrootdelegatesfocus",
          "description": "يجعل التركيز (focus) ينتقل تلقائياً لأول عنصر قابل للتركيز داخل Shadow DOM عند التركيز على المكون نفسه، يحسن تجربة المستخدم مع النماذج والحقول التفاعلية",
          "values": [
            {
              "value": "",
              "description": "يفعّل تفويض التركيز (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "shadowrootclonable",
          "description": "يسمح بنسخ Shadow DOM الخاص بالمكون عند استخدام cloneNode، بدونها لا يُنسخ محتوى الـ Shadow DOM مع العنصر، مهم عند الحاجة لنسخ المكونات",
          "values": [
            {
              "value": "",
              "description": "يسمح بالنسخ (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "shadowrootserializable",
          "description": "يسمح بتضمين محتوى Shadow DOM عند حفظ أو تسلسل الصفحة (مثل قراءة innerHTML)، مفيد عند الحاجة لحفظ حالة المكون أو تصديره",
          "values": [
            {
              "value": "",
              "description": "يسمح بالتسلسل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "shadowrootavailable",
          "description": "يحدد أن القالب سيكون متاحاً كـ Shadow Root فوراً دون انتظار تحميل الصفحة، يفيد في تحميل المكونات مبكراً",
          "values": [
            {
              "value": "",
              "description": "يجعل القالب متاحاً فوراً (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "inert",
          "description": "يجعل جميع العناصر داخل القالب غير تفاعلية (لا يمكن النقر عليها أو التركيز عليها)، مفيد للقوالب التي تحتوي على أزرار أو روابط مؤقتة",
          "values": [
            {
              "value": "",
              "description": "يعطل التفاعل داخل القالب (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "hidden",
          "description": "يخفي القالب ولا يظهر في الصفحة، يفيد في إخفاء قوالب غير مستخدمة مؤقتاً",
          "values": [
            {
              "value": "",
              "description": "يخفي القالب (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للقالب يمكن استخدامه في CSS أو JavaScript للوصول إليه واستنساخه",
          "values": [
            {
              "value": "card-template",
              "description": "قالب بطاقة"
            },
            {
              "value": "list-item-template",
              "description": "قالب عنصر قائمة"
            },
            {
              "value": "modal-template",
              "description": "قالب نافذة منبثقة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يحدد فئات CSS لتطبيق أنماط مخصصة على القالب نفسه (وليس محتواه الداخلي)",
          "values": [],
          "freeInput": true
        },
        {
          "name": "data-*",
          "description": "يضيف بيانات مخصصة للقالب يمكن استخدامها في JavaScript لتحديد نوع القالب أو إعداداته",
          "values": [
            {
              "value": "data-type=\"product\"",
              "description": "يحدد نوع القالب كمنتج"
            },
            {
              "value": "data-count=\"5\"",
              "description": "يحدد عدد العناصر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "slot",
      "description": "يحدد مكاناً في قالب المكون يمكنك إدخال محتوى مخصص فيه، يسهل إنشاء مكونات ويب قابلة لإعادة الاستخدام بمحتوى مختلف، ويعزز فصل الهيكل عن المحتوى",
      "properties": [
        {
          "name": "name",
          "description": "يحدد اسم الفتحة التي ستستقبل المحتوى المخصص في المكون، يسمح بوضع محتوى مختلف في أماكن مختلفة من المكون، يجب أن يكون فريداً داخل المكون الواحد",
          "values": [
            {
              "value": "header",
              "description": "فتحة مخصصة لوضع محتوى في أعلى المكون (مثل العنوان أو الشعار)"
            },
            {
              "value": "content",
              "description": "فتحة مخصصة لوضع المحتوى الرئيسي للمكون"
            },
            {
              "value": "footer",
              "description": "فتحة مخصصة لوضع محتوى في أسفل المكون (مثل الحقوق أو الروابط)"
            },
            {
              "value": "sidebar",
              "description": "فتحة مخصصة للشريط الجانبي"
            },
            {
              "value": "main",
              "description": "فتحة مخصصة للمحتوى الرئيسي"
            },
            {
              "value": "title",
              "description": "فتحة مخصصة للعنوان"
            },
            {
              "value": "subtitle",
              "description": "فتحة مخصصة للعنوان الفرعي"
            },
            {
              "value": "description",
              "description": "فتحة مخصصة للوصف"
            },
            {
              "value": "image",
              "description": "فتحة مخصصة للصورة"
            },
            {
              "value": "icon",
              "description": "فتحة مخصصة للأيقونة"
            },
            {
              "value": "actions",
              "description": "فتحة مخصصة للأزرار والإجراءات"
            },
            {
              "value": "menu",
              "description": "فتحة مخصصة للقائمة"
            },
            {
              "value": "navigation",
              "description": "فتحة مخصصة للتنقل"
            },
            {
              "value": "toolbar",
              "description": "فتحة مخصصة لشريط الأدوات"
            },
            {
              "value": "left",
              "description": "فتحة مخصصة للجانب الأيسر"
            },
            {
              "value": "right",
              "description": "فتحة مخصصة للجانب الأيمن"
            },
            {
              "value": "top",
              "description": "فتحة مخصصة للأعلى"
            },
            {
              "value": "bottom",
              "description": "فتحة مخصصة للأسفل"
            },
            {
              "value": "center",
              "description": "فتحة مخصصة للوسط"
            },
            {
              "value": "prefix",
              "description": "فتحة مخصصة لما قبل المحتوى"
            },
            {
              "value": "suffix",
              "description": "فتحة مخصصة لما بعد المحتوى"
            },
            {
              "value": "label",
              "description": "فتحة مخصصة للتسمية"
            },
            {
              "value": "badge",
              "description": "فتحة مخصصة لشارة أو علامة"
            },
            {
              "value": "avatar",
              "description": "فتحة مخصصة للصورة الرمزية"
            },
            {
              "value": "status",
              "description": "فتحة مخصصة لحالة العنصر"
            },
            {
              "value": "price",
              "description": "فتحة مخصصة للسعر"
            },
            {
              "value": "rating",
              "description": "فتحة مخصصة للتقييم"
            },
            {
              "value": "date",
              "description": "فتحة مخصصة للتاريخ"
            },
            {
              "value": "time",
              "description": "فتحة مخصصة للوقت"
            },
            {
              "value": "author",
              "description": "فتحة مخصصة للمؤلف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للفتحة يمكن استخدامه في CSS أو JavaScript للوصول إليها",
          "values": [],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يحدد فئات CSS لتطبيق أنماط مخصصة على الفتحة (وليس محتواها المخصص)",
          "values": [],
          "freeInput": true
        },
        {
          "name": "style",
          "description": "يسمح بإضافة أنماط CSS مباشرة على الفتحة، يفيد في تحديد موضعها أو حجمها",
          "values": [],
          "freeInput": true
        },
        {
          "name": "hidden",
          "description": "يخفي الفتحة ولا تعرض أي محتوى فيها، يفيد لإخفاء فتحات غير مستخدمة مؤقتاً",
          "values": [
            {
              "value": "",
              "description": "يخفي الفتحة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "data-*",
          "description": "يضيف بيانات مخصصة للفتحة يمكن استخدامها في JavaScript لتحديد دورها أو إعداداتها",
          "values": [
            {
              "value": "data-position=\"top\"",
              "description": "يحدد موقع الفتحة"
            },
            {
              "value": "data-required=\"true\"",
              "description": "يحدد أن الفتحة مطلوبة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "custom-element",
      "description": "عنصر مخصص يتم إنشاؤه بواسطة JavaScript باستخدام Custom Elements API، يسمح بإنشاء عناصر HTML جديدة بسلوكيات وخصائص مخصصة، يعزز إعادة استخدام الكود",
      "properties": [
        {
          "name": "is",
          "description": "يحدد اسم العنصر المخصص عند استخدامه مع عناصر HTML القياسية (مثل <button is=\"my-button\">)، يسمح بتوسيع عناصر موجودة",
          "values": [
            {
              "value": "my-button",
              "description": "زر مخصص"
            },
            {
              "value": "my-input",
              "description": "حقل إدخال مخصص"
            },
            {
              "value": "my-card",
              "description": "بطاقة مخصصة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "data-*",
          "description": "يضيف بيانات مخصصة للمكون يمكن استخدامها في JavaScript لتمرير الإعدادات والمعلومات",
          "values": [
            {
              "value": "data-value=\"42\"",
              "description": "قيمة رقمية"
            },
            {
              "value": "data-user-id=\"123\"",
              "description": "معرف مستخدم"
            },
            {
              "value": "data-product-name=\"iPhone\"",
              "description": "اسم منتج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للمكون يمكن استخدامه في CSS أو JavaScript للوصول إليه",
          "values": [],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يحدد فئات CSS لتطبيق أنماط مخصصة على المكون",
          "values": [],
          "freeInput": true
        },
        {
          "name": "style",
          "description": "يسمح بإضافة أنماط CSS مباشرة على المكون لتخصيص مظهره",
          "values": [],
          "freeInput": true
        },
        {
          "name": "tabindex",
          "description": "يحدد ترتيب التنقل بين العناصر باستخدام مفتاح Tab، يفيد في تحسين إمكانية الوصول",
          "values": [
            {
              "value": "0",
              "description": "يمكن الوصول إليه بترتيب طبيعي"
            },
            {
              "value": "-1",
              "description": "يمكن التركيز عليه برمجياً فقط"
            },
            {
              "value": "1",
              "description": "أولوية عالية (أول عنصر)"
            },
            {
              "value": "2",
              "description": "أولوية متوسطة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-*",
          "description": "يضيف خصائص إمكانية الوصول للمكون لمساعدة قارئات الشاشة والمستخدمين ذوي الاحتياجات الخاصة",
          "values": [
            {
              "value": "aria-label=\"زر الإرسال\"",
              "description": "تسمية وصفية للزر"
            },
            {
              "value": "aria-disabled=\"true\"",
              "description": "يعطل المكون"
            },
            {
              "value": "aria-expanded=\"false\"",
              "description": "عنصر قابل للطي"
            },
            {
              "value": "aria-hidden=\"true\"",
              "description": "يخفي المكون عن قارئات الشاشة"
            },
            {
              "value": "aria-selected=\"true\"",
              "description": "عنصر محدد"
            },
            {
              "value": "aria-checked=\"false\"",
              "description": "عنصر غير محدد"
            },
            {
              "value": "aria-required=\"true\"",
              "description": "عنصر مطلوب"
            },
            {
              "value": "aria-invalid=\"false\"",
              "description": "عنصر صحيح"
            }
          ],
          "freeInput": true
        },
        {
          "name": "role",
          "description": "يحدد دور المكون في صفحة الويب، يساعد قارئات الشاشة في فهم وظيفة العنصر",
          "values": [
            {
              "value": "button",
              "description": "زر"
            },
            {
              "value": "link",
              "description": "رابط"
            },
            {
              "value": "checkbox",
              "description": "مربع اختيار"
            },
            {
              "value": "radio",
              "description": "زر اختيار"
            },
            {
              "value": "textbox",
              "description": "حقل نصي"
            },
            {
              "value": "listbox",
              "description": "قائمة"
            },
            {
              "value": "dialog",
              "description": "نافذة حوار"
            },
            {
              "value": "alert",
              "description": "تنبيه"
            },
            {
              "value": "tooltip",
              "description": "تلميح"
            },
            {
              "value": "tab",
              "description": "علامة تبويب"
            },
            {
              "value": "tabpanel",
              "description": "لوحة علامة تبويب"
            },
            {
              "value": "menu",
              "description": "قائمة"
            },
            {
              "value": "menuitem",
              "description": "عنصر قائمة"
            }
          ]
        },
        {
          "name": "autofocus",
          "description": "يجعل المكون يحصل على التركيز تلقائياً عند تحميل الصفحة",
          "values": [
            {
              "value": "",
              "description": "يفعّل التركيز التلقائي (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "disabled",
          "description": "يعطل المكون ويمنع التفاعل معه، شائع في الأزرار والحقول",
          "values": [
            {
              "value": "",
              "description": "يعطل المكون (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "hidden",
          "description": "يخفي المكون ولا يظهر في الصفحة",
          "values": [
            {
              "value": "",
              "description": "يخفي المكون (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "content",
      "description": "⚠️ عنصر قديم من الجيل الأول لـ Shadow DOM (v0)، كان يحدد مكان إسقاط محتوى المستخدم داخل القالب، مهجور تماماً واستُبدل بعنصر slot الأكثر مرونة وقوة في إدارة المحتوى المخصص",
      "deprecated": true,
      "replacement": "استخدم <slot>",
      "severity": "critical",
      "removalVersion": "تم إهماله في Chrome 53 (2016) وإزالته من معيار HTML",
      "properties": [
        {
          "name": "select",
          "description": "كان يحدد باستخدام محدد CSS أي عناصر من محتوى المستخدم يتم إسقاطها في هذا المكان تحديداً، يسمح بتصفية المحتوى حسب النوع أو الفئة",
          "values": [
            {
              "value": "*",
              "description": "يسقط جميع العناصر (الافتراضي)"
            },
            {
              "value": ".title",
              "description": "يسقط العناصر التي تحمل الفئة title فقط"
            },
            {
              "value": "h1, h2",
              "description": "يسقط عناصر العناوين h1 وh2 فقط"
            },
            {
              "value": "[data-type=\"header\"]",
              "description": "يسقط العناصر التي تحمل data-type=\"header\""
            },
            {
              "value": "p",
              "description": "يسقط عناصر الفقرة فقط"
            },
            {
              "value": ".item",
              "description": "يسقط العناصر التي تحمل الفئة item"
            },
            {
              "value": "#main-content",
              "description": "يسقط العنصر الذي يحمل المعرف main-content"
            },
            {
              "value": "[role=\"button\"]",
              "description": "يسقط العناصر التي تحمل دور button"
            },
            {
              "value": "header > *",
              "description": "يسقط جميع العناصر داخل header"
            },
            {
              "value": ".container .card",
              "description": "يسقط البطاقات داخل الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "كان يحدد معرفاً فريداً لعنصر content",
          "values": [],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "كان يحدد فئات CSS لعنصر content",
          "values": [],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "shadow",
      "description": "⚠️ عنصر قديم من الجيل الأول لـ Shadow DOM (v0)، كان يُستخدم لتضمين محتوى Shadow Root أقدم داخل شجرة ظل جديدة (تركيب متعدد الطبقات)، مهجور تماماً ولا بديل مباشر له لأن Shadow DOM الحديث لا يدعم هذا التركيب المتعدد",
      "deprecated": true,
      "replacement": "لا بديل مباشر - استخدم مكونات مستقلة بدلاً من التركيب المتعدد",
      "severity": "critical",
      "removalVersion": "تم إهماله في Chrome 53 (2016) وإزالته من معيار HTML",
      "properties": [
        {
          "name": "id",
          "description": "كان يحدد معرفاً فريداً لعنصر shadow",
          "values": [],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "كان يحدد فئات CSS لعنصر shadow",
          "values": [],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "part",
      "description": "يسمح بتحديد أجزاء داخل Shadow DOM يمكن تنسيقها من خارج المكون باستخدام CSS ::part()، يوفر طريقة آمنة لتخصيص مظهر المكونات دون كسر العزل",
      "properties": [
        {
          "name": "part",
          "description": "يحدد اسم الجزء الذي يمكن تنسيقه من خارج Shadow DOM، يمكن استخدام أسماء متعددة مفصولة بمسافات",
          "values": [
            {
              "value": "button",
              "description": "جزء الزر داخل المكون"
            },
            {
              "value": "icon",
              "description": "جزء الأيقونة"
            },
            {
              "value": "label",
              "description": "جزء التسمية"
            },
            {
              "value": "container",
              "description": "جزء الحاوية"
            },
            {
              "value": "header",
              "description": "جزء الرأس"
            },
            {
              "value": "content",
              "description": "جزء المحتوى"
            },
            {
              "value": "footer",
              "description": "جزء التذييل"
            },
            {
              "value": "wrapper",
              "description": "جزء الغلاف"
            },
            {
              "value": "input",
              "description": "جزء حقل الإدخال"
            },
            {
              "value": "checkbox",
              "description": "جزء مربع الاختيار"
            },
            {
              "value": "radio",
              "description": "جزء زر الاختيار"
            },
            {
              "value": "dropdown",
              "description": "جزء القائمة المنسدلة"
            },
            {
              "value": "menu",
              "description": "جزء القائمة"
            },
            {
              "value": "dialog",
              "description": "جزء النافذة المنبثقة"
            },
            {
              "value": "tooltip",
              "description": "جزء التلميح"
            },
            {
              "value": "card",
              "description": "جزء البطاقة"
            },
            {
              "value": "avatar",
              "description": "جزء الصورة الرمزية"
            },
            {
              "value": "badge",
              "description": "جزء الشارة"
            },
            {
              "value": "status",
              "description": "جزء الحالة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "exportparts",
          "description": "يصدّر الأجزاء الداخلية للمكون لجعلها قابلة للتنسيق من مستويات أعلى، مفيد في المكونات المتداخلة",
          "values": [
            {
              "value": "inner-button, inner-icon",
              "description": "يصدر أجزاء داخلية للمكون الأب"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "web-component",
      "description": "عنصر ويب مخصص يتم تعريفه باستخدام Custom Elements API، يمثل وحدة مستقلة قابلة لإعادة الاستخدام مع تغليف كامل للهيكل والسلوك والتصميم",
      "properties": [
        {
          "name": "is",
          "description": "يحدد اسم العنصر المخصص عند توسيع عنصر HTML موجود",
          "values": [
            {
              "value": "my-button",
              "description": "زر مخصص"
            },
            {
              "value": "my-input",
              "description": "حقل إدخال مخصص"
            },
            {
              "value": "my-card",
              "description": "بطاقة مخصصة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "shadowrootmode",
          "description": "يحدد وضع Shadow DOM للمكون، يوفر تغليفاً كاملاً للعناصر والأنماط",
          "values": [
            {
              "value": "open",
              "description": "Shadow DOM قابل للوصول"
            },
            {
              "value": "closed",
              "description": "Shadow DOM غير قابل للوصول"
            }
          ]
        },
        {
          "name": "shadowrootdelegatesfocus",
          "description": "يفوض التركيز لأول عنصر قابل للتركيز داخل المكون",
          "values": [
            {
              "value": "",
              "description": "يفعّل تفويض التركيز (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    }
  ],
  "document": [
    {
      "tag": "!DOCTYPE",
      "description": "يعلن عن نوع المستند وإصدار HTML المستخدم، يجب أن يكون أول سطر في أي صفحة HTML، يخبر المتصفح بكيفية تفسير وعرض الصفحة بشكل صحيح",
      "properties": [
        {
          "name": "html",
          "description": "يحدد أن المستند من نوع HTML، وهو الإعلان الوحيد المستخدم في HTML5",
          "values": [
            {
              "value": "html",
              "description": "يعلن أن المستند من نوع HTML5 (الوحيد المستخدم حالياً)"
            }
          ]
        },
        {
          "name": "PUBLIC",
          "description": "خاصية قديمة كانت تستخدم في HTML 4.01 و XHTML لتحديد DTD عام، لم تعد مستخدمة في HTML5",
          "values": [
            {
              "value": "-//W3C//DTD HTML 4.01//EN",
              "description": "DTD HTML 4.01 (قديم)"
            },
            {
              "value": "-//W3C//DTD XHTML 1.0 Strict//EN",
              "description": "DTD XHTML 1.0 Strict (قديم)"
            },
            {
              "value": "-//W3C//DTD XHTML 1.0 Transitional//EN",
              "description": "DTD XHTML 1.0 Transitional (قديم)"
            }
          ]
        },
        {
          "name": "SYSTEM",
          "description": "خاصية قديمة كانت تحدد رابط DTD النظامي، لم تعد مستخدمة في HTML5",
          "values": [
            {
              "value": "http://www.w3.org/TR/html4/strict.dtd",
              "description": "رابط DTD HTML 4.01 (قديم)"
            },
            {
              "value": "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd",
              "description": "رابط DTD XHTML 1.0 (قديم)"
            }
          ]
        }
      ]
    },
    {
      "tag": "html",
      "description": "العنصر الجذر لكل صفحة HTML، يحتوي على جميع محتويات الصفحة من بدايتها إلى نهايتها، يعتبر الأب الأعلى لجميع العناصر",
      "properties": [
        {
          "name": "lang",
          "description": "يحدد اللغة الأساسية لكل محتوى الصفحة، يساعد محركات البحث والمتصفحات وقارئات الشاشة في فهم لغة المحتوى ومعالجته بشكل صحيح",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "ar-SA",
              "description": "العربية - السعودية"
            },
            {
              "value": "ar-EG",
              "description": "العربية - مصر"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            },
            {
              "value": "en-US",
              "description": "الإنجليزية - الولايات المتحدة"
            },
            {
              "value": "en-GB",
              "description": "الإنجليزية - المملكة المتحدة"
            },
            {
              "value": "fr",
              "description": "اللغة الفرنسية"
            },
            {
              "value": "fr-FR",
              "description": "الفرنسية - فرنسا"
            },
            {
              "value": "es",
              "description": "اللغة الإسبانية"
            },
            {
              "value": "es-ES",
              "description": "الإسبانية - إسبانيا"
            },
            {
              "value": "de",
              "description": "اللغة الألمانية"
            },
            {
              "value": "de-DE",
              "description": "الألمانية - ألمانيا"
            },
            {
              "value": "it",
              "description": "اللغة الإيطالية"
            },
            {
              "value": "it-IT",
              "description": "الإيطالية - إيطاليا"
            },
            {
              "value": "pt",
              "description": "اللغة البرتغالية"
            },
            {
              "value": "pt-BR",
              "description": "البرتغالية - البرازيل"
            },
            {
              "value": "ru",
              "description": "اللغة الروسية"
            },
            {
              "value": "ru-RU",
              "description": "الروسية - روسيا"
            },
            {
              "value": "ja",
              "description": "اللغة اليابانية"
            },
            {
              "value": "ja-JP",
              "description": "اليابانية - اليابان"
            },
            {
              "value": "zh",
              "description": "اللغة الصينية"
            },
            {
              "value": "zh-CN",
              "description": "الصينية - الصين"
            },
            {
              "value": "zh-TW",
              "description": "الصينية - تايوان"
            },
            {
              "value": "ko",
              "description": "اللغة الكورية"
            },
            {
              "value": "ko-KR",
              "description": "الكورية - كوريا"
            },
            {
              "value": "hi",
              "description": "اللغة الهندية"
            },
            {
              "value": "hi-IN",
              "description": "الهندية - الهند"
            },
            {
              "value": "tr",
              "description": "اللغة التركية"
            },
            {
              "value": "tr-TR",
              "description": "التركية - تركيا"
            },
            {
              "value": "fa",
              "description": "اللغة الفارسية"
            },
            {
              "value": "fa-IR",
              "description": "الفارسية - إيران"
            },
            {
              "value": "ur",
              "description": "اللغة الأردية"
            },
            {
              "value": "ur-PK",
              "description": "الأردية - باكستان"
            },
            {
              "value": "he",
              "description": "اللغة العبرية"
            },
            {
              "value": "he-IL",
              "description": "العبرية - إسرائيل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dir",
          "description": "يحدد اتجاه النص الافتراضي في كل الصفحة، إما من اليمين إلى اليسار أو من اليسار إلى اليمين",
          "values": [
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار (للغة العربية، الفارسية، العبرية)"
            },
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين (للغة الإنجليزية، الفرنسية، الألمانية)"
            }
          ]
        },
        {
          "name": "xmlns",
          "description": "يحدد مساحة الأسماء للمستند، ضروري لصفحات XHTML ولكن ليس مطلوباً في HTML5",
          "values": [
            {
              "value": "http://www.w3.org/1999/xhtml",
              "description": "مساحة أسماء XHTML"
            }
          ]
        },
        {
          "name": "manifest",
          "description": "كان يربط بملف التطبيق المخبأ (Application Cache) لتشغيل الصفحة دون اتصال، تم إهماله واستُبدل بـ Service Workers",
          "values": [
            {
              "value": "app.manifest",
              "description": "ملف التطبيق المخبأ"
            },
            {
              "value": "cache.manifest",
              "description": "ملف التخزين المؤقت"
            }
          ],
          "freeInput": true
        },
        {
          "name": "version",
          "description": "يحدد إصدار HTML المستخدم، خاصية قديمة جداً لم تعد مستخدمة في HTML5",
          "values": [
            {
              "value": "-//W3C//DTD HTML 4.01//EN",
              "description": "HTML 4.01 (قديم)"
            }
          ]
        }
      ]
    },
    {
      "tag": "head",
      "description": "يحتوي على البيانات الوصفية للصفحة التي لا تظهر للمستخدم مباشرة، مثل عنوان الصفحة، الترميز، الروابط الخارجية، والأكواد البرمجية، يساعد محركات البحث والمتصفحات في فهم الصفحة",
      "properties": [
        {
          "name": "lang",
          "description": "يحدد لغة محتوى الرأس، عادة ما تكون نفس لغة الصفحة الرئيسية",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل الرأس، نادراً ما يحتاج للتحديد لأن المحتوى هنا ليس مرئياً للمستخدم",
          "values": [
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            },
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            }
          ]
        },
        {
          "name": "profile",
          "description": "خاصية قديمة كانت تحدد مسار ملف تعريف بيانات وصفية إضافية، لم تعد مستخدمة في HTML5",
          "values": [
            {
              "value": "http://www.w3.org/2002/06/profile",
              "description": "ملف تعريف قديم"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "body",
      "description": "يحتوي على كل المحتوى المرئي للصفحة الذي يراه المستخدم، مثل النصوص، الصور، الروابط، النماذج، الفيديوهات، وجميع العناصر التفاعلية",
      "properties": [
        {
          "name": "bgcolor",
          "description": "?? خاصية قديمة كانت تحدد لون خلفية الصفحة بأكملها، استُبدلت بخاصية background-color في CSS على عنصر body",
          "values": [
            {
              "value": "#ffffff",
              "description": "خلفية بيضاء"
            },
            {
              "value": "#000000",
              "description": "خلفية سوداء"
            },
            {
              "value": "#f0f0f0",
              "description": "خلفية رمادية فاتحة"
            },
            {
              "value": "#ffffff",
              "description": "خلفية بيضاء"
            },
            {
              "value": "#333333",
              "description": "خلفية رمادية داكنة"
            },
            {
              "value": "#ff0000",
              "description": "خلفية حمراء"
            },
            {
              "value": "#00ff00",
              "description": "خلفية خضراء"
            },
            {
              "value": "#0000ff",
              "description": "خلفية زرقاء"
            },
            {
              "value": "#ffff00",
              "description": "خلفية صفراء"
            },
            {
              "value": "#ff00ff",
              "description": "خلفية وردية"
            },
            {
              "value": "#00ffff",
              "description": "خلفية سماوية"
            },
            {
              "value": "#cccccc",
              "description": "خلفية رمادية"
            },
            {
              "value": "#999999",
              "description": "خلفية رمادية متوسطة"
            },
            {
              "value": "#666666",
              "description": "خلفية رمادية داكنة"
            },
            {
              "value": "#ffebcd",
              "description": "خلفية بيج"
            },
            {
              "value": "#f5f5dc",
              "description": "خلفية بيج فاتح"
            },
            {
              "value": "#fff8dc",
              "description": "خلفية كريمية"
            },
            {
              "value": "#faf0e6",
              "description": "خلفية عاجية"
            },
            {
              "value": "#fdf5e6",
              "description": "خلفية قشدية"
            },
            {
              "value": "#ffffe0",
              "description": "خلفية صفراء فاتحة جداً"
            },
            {
              "value": "red",
              "description": "خلفية حمراء"
            },
            {
              "value": "green",
              "description": "خلفية خضراء"
            },
            {
              "value": "blue",
              "description": "خلفية زرقاء"
            },
            {
              "value": "yellow",
              "description": "خلفية صفراء"
            },
            {
              "value": "white",
              "description": "خلفية بيضاء"
            },
            {
              "value": "black",
              "description": "خلفية سوداء"
            },
            {
              "value": "gray",
              "description": "خلفية رمادية"
            },
            {
              "value": "purple",
              "description": "خلفية بنفسجية"
            },
            {
              "value": "orange",
              "description": "خلفية برتقالية"
            },
            {
              "value": "pink",
              "description": "خلفية وردية"
            },
            {
              "value": "cyan",
              "description": "خلفية سماوية"
            },
            {
              "value": "magenta",
              "description": "خلفية أرجوانية"
            },
            {
              "value": "lime",
              "description": "خلفية ليمونية"
            },
            {
              "value": "maroon",
              "description": "خلفية كستنائية"
            },
            {
              "value": "navy",
              "description": "خلفية زرقاء بحرية"
            },
            {
              "value": "olive",
              "description": "خلفية زيتونية"
            },
            {
              "value": "teal",
              "description": "خلفية تيل"
            },
            {
              "value": "aqua",
              "description": "خلفية زرقاء مائية"
            },
            {
              "value": "fuchsia",
              "description": "خلفية فوشيا"
            },
            {
              "value": "silver",
              "description": "خلفية فضية"
            },
            {
              "value": "gold",
              "description": "خلفية ذهبية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text",
          "description": "?? خاصية قديمة كانت تحدد لون النص الافتراضي للصفحة بأكملها، استُبدلت بخاصية color في CSS على عنصر body",
          "values": [
            {
              "value": "#000000",
              "description": "نص أسود"
            },
            {
              "value": "#333333",
              "description": "نص رمادي غامق"
            },
            {
              "value": "#666666",
              "description": "نص رمادي"
            },
            {
              "value": "#ff0000",
              "description": "نص أحمر"
            },
            {
              "value": "#0000ff",
              "description": "نص أزرق"
            },
            {
              "value": "#00ff00",
              "description": "نص أخضر"
            },
            {
              "value": "#ffff00",
              "description": "نص أصفر"
            },
            {
              "value": "#ffffff",
              "description": "نص أبيض"
            },
            {
              "value": "#ff00ff",
              "description": "نص وردي"
            },
            {
              "value": "#00ffff",
              "description": "نص سماوي"
            },
            {
              "value": "#cccccc",
              "description": "نص رمادي فاتح"
            },
            {
              "value": "#999999",
              "description": "نص رمادي متوسط"
            },
            {
              "value": "#3498db",
              "description": "نص أزرق"
            },
            {
              "value": "#e74c3c",
              "description": "نص أحمر"
            },
            {
              "value": "#2ecc71",
              "description": "نص أخضر"
            },
            {
              "value": "#f39c12",
              "description": "نص برتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "نص بنفسجي"
            },
            {
              "value": "red",
              "description": "نص أحمر"
            },
            {
              "value": "green",
              "description": "نص أخضر"
            },
            {
              "value": "blue",
              "description": "نص أزرق"
            },
            {
              "value": "yellow",
              "description": "نص أصفر"
            },
            {
              "value": "black",
              "description": "نص أسود"
            },
            {
              "value": "white",
              "description": "نص أبيض"
            },
            {
              "value": "gray",
              "description": "نص رمادي"
            },
            {
              "value": "purple",
              "description": "نص بنفسجي"
            },
            {
              "value": "orange",
              "description": "نص برتقالي"
            },
            {
              "value": "pink",
              "description": "نص وردي"
            },
            {
              "value": "cyan",
              "description": "نص سماوي"
            },
            {
              "value": "magenta",
              "description": "نص أرجواني"
            },
            {
              "value": "lime",
              "description": "نص ليموني"
            },
            {
              "value": "maroon",
              "description": "نص كستنائي"
            },
            {
              "value": "navy",
              "description": "نص أزرق بحري"
            },
            {
              "value": "olive",
              "description": "نص زيتوني"
            },
            {
              "value": "teal",
              "description": "نص تيل"
            },
            {
              "value": "aqua",
              "description": "نص أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "نص فوشيا"
            },
            {
              "value": "silver",
              "description": "نص فضي"
            },
            {
              "value": "gold",
              "description": "نص ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "link",
          "description": "?? خاصية قديمة كانت تحدد لون الروابط غير المزرورة (غير المضغوط عليها)، استُبدلت بخاصية color في CSS على عنصر a",
          "values": [
            {
              "value": "#0000ff",
              "description": "رابط أزرق (الافتراضي قديماً)"
            },
            {
              "value": "#0066cc",
              "description": "رابط أزرق غامق"
            },
            {
              "value": "#ff0000",
              "description": "رابط أحمر"
            },
            {
              "value": "#0000ff",
              "description": "رابط أزرق"
            },
            {
              "value": "#3366cc",
              "description": "رابط أزرق"
            },
            {
              "value": "#003399",
              "description": "رابط أزرق داكن"
            },
            {
              "value": "blue",
              "description": "رابط أزرق"
            },
            {
              "value": "red",
              "description": "رابط أحمر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "vlink",
          "description": "?? خاصية قديمة كانت تحدد لون الروابط المزرورة (التي تم الضغط عليها سابقاً)، استُبدلت بخاصية color في CSS على عنصر a:visited",
          "values": [
            {
              "value": "#800080",
              "description": "رابط مزرور بنفسجي (الافتراضي قديماً)"
            },
            {
              "value": "#660066",
              "description": "رابط مزرور بنفسجي داكن"
            },
            {
              "value": "#990099",
              "description": "رابط مزرور بنفسجي"
            },
            {
              "value": "#800080",
              "description": "رابط مزرور بنفسجي"
            },
            {
              "value": "#663399",
              "description": "رابط مزرور بنفسجي مزرق"
            },
            {
              "value": "purple",
              "description": "رابط مزرور بنفسجي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "alink",
          "description": "?? خاصية قديمة كانت تحدد لون الرابط أثناء النقر عليه (الحالة النشطة)، استُبدلت بخاصية color في CSS على عنصر a:active",
          "values": [
            {
              "value": "#ff0000",
              "description": "رابط أحمر أثناء النقر (الافتراضي قديماً)"
            },
            {
              "value": "#ff3333",
              "description": "رابط أحمر فاتح أثناء النقر"
            },
            {
              "value": "#ff0000",
              "description": "رابط أحمر أثناء النقر"
            },
            {
              "value": "#cc0000",
              "description": "رابط أحمر داكن أثناء النقر"
            },
            {
              "value": "red",
              "description": "رابط أحمر أثناء النقر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "background",
          "description": "?? خاصية قديمة كانت تحدد صورة خلفية للصفحة بأكملها، استُبدلت بخاصية background-image في CSS على عنصر body",
          "values": [
            {
              "value": "bg.png",
              "description": "صورة خلفية في نفس المجلد"
            },
            {
              "value": "/images/background.jpg",
              "description": "صورة خلفية في مجلد images"
            },
            {
              "value": "https://example.com/bg.gif",
              "description": "صورة خلفية من موقع آخر"
            },
            {
              "value": "background.jpg",
              "description": "صورة خلفية"
            },
            {
              "value": "bg-image.png",
              "description": "صورة خلفية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "bgproperties",
          "description": "?? خاصية قديمة خاصة بـ Internet Explorer كانت تثبت صورة الخلفية بحيث لا تتحرك مع التمرير (fixed)، استُبدلت بخاصية background-attachment: fixed في CSS",
          "values": [
            {
              "value": "fixed",
              "description": "تثبيت صورة الخلفية"
            }
          ]
        },
        {
          "name": "marginwidth",
          "description": "?? خاصية قديمة كانت تحدد الهوامش الجانبية للصفحة بالبكسل، استُبدلت بخاصية margin في CSS على عنصر body",
          "values": [
            {
              "value": "0",
              "description": "بدون هوامش"
            },
            {
              "value": "5",
              "description": "هامش 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش 10 بكسل"
            },
            {
              "value": "15",
              "description": "هامش 15 بكسل"
            },
            {
              "value": "20",
              "description": "هامش 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "marginheight",
          "description": "?? خاصية قديمة كانت تحدد الهوامش العلوية والسفلية للصفحة بالبكسل، استُبدلت بخاصية margin في CSS على عنصر body",
          "values": [
            {
              "value": "0",
              "description": "بدون هوامش"
            },
            {
              "value": "5",
              "description": "هامش 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش 10 بكسل"
            },
            {
              "value": "15",
              "description": "هامش 15 بكسل"
            },
            {
              "value": "20",
              "description": "هامش 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "topmargin",
          "description": "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش العلوي للصفحة بالبكسل، استُبدلت بخاصية margin-top في CSS",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش علوي"
            },
            {
              "value": "5",
              "description": "هامش علوي 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش علوي 10 بكسل"
            },
            {
              "value": "20",
              "description": "هامش علوي 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "bottommargin",
          "description": "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش السفلي للصفحة بالبكسل، استُبدلت بخاصية margin-bottom في CSS",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش سفلي"
            },
            {
              "value": "5",
              "description": "هامش سفلي 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش سفلي 10 بكسل"
            },
            {
              "value": "20",
              "description": "هامش سفلي 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "leftmargin",
          "description": "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش الأيسر للصفحة بالبكسل، استُبدلت بخاصية margin-left في CSS",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش أيسر"
            },
            {
              "value": "5",
              "description": "هامش أيسر 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش أيسر 10 بكسل"
            },
            {
              "value": "20",
              "description": "هامش أيسر 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rightmargin",
          "description": "?? خاصية قديمة خاصة بـ Internet Explorer كانت تحدد الهامش الأيمن للصفحة بالبكسل، استُبدلت بخاصية margin-right في CSS",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش أيمن"
            },
            {
              "value": "5",
              "description": "هامش أيمن 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش أيمن 10 بكسل"
            },
            {
              "value": "20",
              "description": "هامش أيمن 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "style",
          "description": "يضيف تنسيقات CSS مباشرة إلى عنصر body، يتحكم في مظهر الصفحة بأكملها",
          "values": [
            {
              "value": "background-color: #f0f0f0;",
              "description": "خلفية رمادية فاتحة"
            },
            {
              "value": "color: #333;",
              "description": "نص رمادي غامق"
            },
            {
              "value": "font-family: Arial, sans-serif;",
              "description": "خط Arial"
            },
            {
              "value": "margin: 0; padding: 0;",
              "description": "إزالة الهوامش والحشوات"
            },
            {
              "value": "background-image: url('bg.jpg');",
              "description": "صورة خلفية"
            },
            {
              "value": "background-attachment: fixed;",
              "description": "تثبيت صورة الخلفية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يضيف فئة (class) لعنصر body لتطبيق تنسيقات CSS محددة أو لتحديد نمط الصفحة",
          "values": [
            {
              "value": "dark-theme",
              "description": "فئة الثيم الداكن"
            },
            {
              "value": "light-theme",
              "description": "فئة الثيم الفاتح"
            },
            {
              "value": "home-page",
              "description": "فئة الصفحة الرئيسية"
            },
            {
              "value": "rtl",
              "description": "فئة الاتجاه من اليمين لليسار"
            },
            {
              "value": "ltr",
              "description": "فئة الاتجاه من اليسار لليمين"
            },
            {
              "value": "admin-page",
              "description": "فئة صفحة المدير"
            },
            {
              "value": "user-page",
              "description": "فئة صفحة المستخدم"
            }
          ],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً لعنصر body يمكن استهدافه بواسطة CSS أو JavaScript",
          "values": [
            {
              "value": "app",
              "description": "معرف التطبيق"
            },
            {
              "value": "root",
              "description": "معرف الجذر"
            },
            {
              "value": "main-page",
              "description": "معرف الصفحة الرئيسية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "data-*",
          "description": "يضيف بيانات مخصصة لعنصر body يمكن استخدامها في JavaScript لتخزين معلومات عن الصفحة أو التطبيق",
          "values": [
            {
              "value": "data-theme=\"dark\"",
              "description": "تحديد الثيم الداكن"
            },
            {
              "value": "data-user-id=\"123\"",
              "description": "تخزين معرف المستخدم"
            },
            {
              "value": "data-page=\"home\"",
              "description": "تحديد الصفحة الحالية"
            },
            {
              "value": "data-lang=\"ar\"",
              "description": "تحديد اللغة"
            },
            {
              "value": "data-version=\"1.0\"",
              "description": "تحديد إصدار التطبيق"
            },
            {
              "value": "data-mode=\"edit\"",
              "description": "تحديد وضع التحرير"
            }
          ],
          "freeInput": true
        },
        {
          "name": "role",
          "description": "يحدد دور عنصر body للمساعدة في إمكانية الوصول لقارئات الشاشة",
          "values": [
            {
              "value": "document",
              "description": "دور المستند (الافتراضي)"
            },
            {
              "value": "application",
              "description": "دور التطبيق"
            }
          ]
        },
        {
          "name": "aria-*",
          "description": "يضيف خصائص إمكانية الوصول لعنصر body لمساعدة قارئات الشاشة والمستخدمين ذوي الاحتياجات الخاصة",
          "values": [
            {
              "value": "aria-live=\"polite\"",
              "description": "إعلان التغييرات بأدب"
            },
            {
              "value": "aria-atomic=\"true\"",
              "description": "إعلان المنطقة كاملة عند التغيير"
            },
            {
              "value": "aria-busy=\"false\"",
              "description": "الصفحة ليست مشغولة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "hidden",
          "description": "يخفي كل محتوى الصفحة، نادر الاستخدام ولكن قد يفيد في صفحات التحميل",
          "values": [
            {
              "value": "",
              "description": "يخفي الصفحة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "inert",
          "description": "يعطل كل التفاعل في الصفحة (يمنع النقر والتركيز)، يستخدم عند ظهور نافذة حوار مشروطة فوق الصفحة",
          "values": [
            {
              "value": "",
              "description": "يعطل التفاعل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "lang",
          "description": "يحدد لغة محتوى الصفحة، يغلب على خاصية lang في عنصر html إذا كانت مختلفة",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            },
            {
              "value": "fr",
              "description": "اللغة الفرنسية"
            },
            {
              "value": "es",
              "description": "اللغة الإسبانية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dir",
          "description": "يحدد اتجاه النص في الصفحة، يغلب على خاصية dir في عنصر html إذا كانت مختلفة",
          "values": [
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            },
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            }
          ]
        },
        {
          "name": "title",
          "description": "يضيف تلميحاً يظهر عند تمرير الماوس فوق الصفحة (نادر الاستخدام، وعادة ما يكون فارغاً)",
          "values": [
            {
              "value": "صفحة الموقع الرئيسية",
              "description": "عنوان الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "onload",
          "description": "يحدد كود JavaScript يُنفذ عند انتهاء تحميل الصفحة بالكامل (استُبدل بـ addEventListener('load', ...))",
          "values": [
            {
              "value": "alert('تم تحميل الصفحة');",
              "description": "ينفذ عند التحميل"
            },
            {
              "value": "init();",
              "description": "استدعاء دالة التهيئة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "onunload",
          "description": "يحدد كود JavaScript يُنفذ عند مغادرة الصفحة (استُبدل بـ addEventListener('beforeunload', ...))",
          "values": [
            {
              "value": "saveData();",
              "description": "حفظ البيانات عند المغادرة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "onbeforeunload",
          "description": "يحدد كود JavaScript يُنفذ قبل مغادرة الصفحة، يستخدم لعرض تأكيد المغادرة",
          "values": [
            {
              "value": "return 'هل أنت متأكد من المغادرة؟';",
              "description": "يعرض رسالة تأكيد"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "frameset",
      "description": "?? عنصر مهمل - كان يقسم النافذة إلى عدة إطارات (frames)، كل إطار يعرض صفحة مستقلة، تم إهماله لأنه يسبب مشاكل في SEO وإمكانية الوصول والتنقل، واستُبدل بـ iframe أو CSS Grid/Flexbox",
      "deprecated": true,
      "replacement": "استخدم <iframe> أو CSS Grid/Flexbox",
      "severity": "critical",
      "removalVersion": "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5",
      "properties": [
        {
          "name": "rows",
          "description": "كان يقسم النافذة أفقياً إلى صفوف بارتفاعات محددة",
          "values": [
            {
              "value": "100,200",
              "description": "صفان: الأول 100 بكسل، الثاني 200 بكسل"
            },
            {
              "value": "50%,50%",
              "description": "صفان متساويان"
            },
            {
              "value": "25%,75%",
              "description": "صفان بنسب مختلفة"
            },
            {
              "value": "33%,33%,33%",
              "description": "ثلاثة صفوف متساوية"
            },
            {
              "value": "100,*",
              "description": "صفان: الأول ثابت، الثاني الباقي"
            },
            {
              "value": "*,*",
              "description": "صفان متساويان"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cols",
          "description": "كان يقسم النافذة عمودياً إلى أعمدة بعروض محددة",
          "values": [
            {
              "value": "100,200",
              "description": "عمودان: الأول 100 بكسل، الثاني 200 بكسل"
            },
            {
              "value": "50%,50%",
              "description": "عمودان متساويان"
            },
            {
              "value": "25%,75%",
              "description": "عمودان بنسب مختلفة"
            },
            {
              "value": "33%,33%,33%",
              "description": "ثلاثة أعمدة متساوية"
            },
            {
              "value": "100,*",
              "description": "عمودان: الأول ثابت، الثاني الباقي"
            },
            {
              "value": "*,*",
              "description": "عمودان متساويان"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border",
          "description": "كان يحدد سمك الحدود بين الإطارات بالبكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون حدود"
            },
            {
              "value": "1",
              "description": "حد 1 بكسل"
            },
            {
              "value": "2",
              "description": "حد 2 بكسل"
            },
            {
              "value": "3",
              "description": "حد 3 بكسل"
            },
            {
              "value": "5",
              "description": "حد 5 بكسل"
            },
            {
              "value": "10",
              "description": "حد 10 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "frameborder",
          "description": "كان يتحكم في إظهار أو إخفاء حدود الإطارات",
          "values": [
            {
              "value": "1",
              "description": "يظهر حدود الإطارات (افتراضي)"
            },
            {
              "value": "0",
              "description": "يخفي حدود الإطارات"
            },
            {
              "value": "yes",
              "description": "يظهر حدود الإطارات"
            },
            {
              "value": "no",
              "description": "يخفي حدود الإطارات"
            }
          ]
        },
        {
          "name": "bordercolor",
          "description": "كان يحدد لون حدود الإطارات",
          "values": [
            {
              "value": "#000000",
              "description": "أسود"
            },
            {
              "value": "#ff0000",
              "description": "أحمر"
            },
            {
              "value": "#0000ff",
              "description": "أزرق"
            },
            {
              "value": "#cccccc",
              "description": "رمادي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "framespacing",
          "description": "كان يحدد المسافة بين الإطارات بوحدة البكسل (خاص بمتصفح Internet Explorer)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة"
            },
            {
              "value": "1",
              "description": "مسافة 1 بكسل"
            },
            {
              "value": "2",
              "description": "مسافة 2 بكسل"
            },
            {
              "value": "5",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10",
              "description": "مسافة 10 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "frame",
      "description": "?? عنصر مهمل - كان يمثل إطاراً واحداً داخل مجموعة إطارات (frameset)، يعرض صفحة مستقلة داخل الإطار، تم إهماله واستُبدل بـ iframe",
      "deprecated": true,
      "replacement": "استخدم <iframe>",
      "severity": "critical",
      "removalVersion": "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5",
      "properties": [
        {
          "name": "src",
          "description": "كان يحدد عنوان URL للصفحة المعروضة داخل هذا الإطار",
          "values": [
            {
              "value": "page1.html",
              "description": "صفحة في نفس المجلد"
            },
            {
              "value": "/pages/page1.html",
              "description": "صفحة في مجلد pages"
            },
            {
              "value": "https://example.com/page.html",
              "description": "صفحة من موقع آخر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "name",
          "description": "كان يحدد اسم الإطار لاستهدافه من الروابط أو النماذج باستخدام target",
          "values": [
            {
              "value": "main",
              "description": "الإطار الرئيسي"
            },
            {
              "value": "sidebar",
              "description": "الإطار الجانبي"
            },
            {
              "value": "header",
              "description": "الإطار العلوي"
            },
            {
              "value": "footer",
              "description": "الإطار السفلي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "noresize",
          "description": "كان يمنع المستخدم من تغيير حجم الإطار بالسحب بالفأرة",
          "values": [
            {
              "value": "",
              "description": "يمنع تغيير الحجم (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "scrolling",
          "description": "كان يتحكم في إظهار أو إخفاء أشرطة التمرير داخل الإطار",
          "values": [
            {
              "value": "yes",
              "description": "يظهر أشرطة التمرير دائماً"
            },
            {
              "value": "no",
              "description": "يمنع أشرطة التمرير نهائياً"
            },
            {
              "value": "auto",
              "description": "يظهر أشرطة التمرير فقط عند الحاجة (افتراضي)"
            }
          ]
        },
        {
          "name": "marginwidth",
          "description": "كان يحدد الهامش الأيسر والأيمن داخل الإطار بالبكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش"
            },
            {
              "value": "5",
              "description": "هامش 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش 10 بكسل"
            },
            {
              "value": "20",
              "description": "هامش 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "marginheight",
          "description": "كان يحدد الهامش العلوي والسفلي داخل الإطار بالبكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش"
            },
            {
              "value": "5",
              "description": "هامش 5 بكسل"
            },
            {
              "value": "10",
              "description": "هامش 10 بكسل"
            },
            {
              "value": "20",
              "description": "هامش 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "frameborder",
          "description": "كان يتحكم في إظهار أو إخفاء حدود الإطار",
          "values": [
            {
              "value": "1",
              "description": "يظهر حدود الإطار (افتراضي)"
            },
            {
              "value": "0",
              "description": "يخفي حدود الإطار"
            },
            {
              "value": "yes",
              "description": "يظهر حدود الإطار"
            },
            {
              "value": "no",
              "description": "يخفي حدود الإطار"
            }
          ]
        },
        {
          "name": "bordercolor",
          "description": "كان يحدد لون حدود الإطار",
          "values": [
            {
              "value": "#000000",
              "description": "أسود"
            },
            {
              "value": "#ff0000",
              "description": "أحمر"
            },
            {
              "value": "#0000ff",
              "description": "أزرق"
            },
            {
              "value": "#cccccc",
              "description": "رمادي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "noframes",
      "description": "?? عنصر مهمل - كان يعرض محتوى بديلاً للمتصفحات التي لا تدعم الإطارات (frames)، أصبح غير ضروري مع إهمال frameset نفسه",
      "deprecated": true,
      "replacement": "استخدم <noscript> للبدائل عند الحاجة",
      "severity": "low",
      "removalVersion": "تم إهماله في HTML 5 (2014)",
      "properties": []
    },
    {
      "tag": "basefont",
      "description": "?? عنصر مهمل - كان يحدد حجم ولون ونوع الخط الافتراضي لكامل الصفحة، تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
      "deprecated": true,
      "replacement": "استخدم CSS: font-family, font-size, color على عنصر body",
      "severity": "high",
      "removalVersion": "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5",
      "properties": [
        {
          "name": "size",
          "description": "كان يحدد حجم الخط الافتراضي للصفحة من 1 إلى 7",
          "values": [
            {
              "value": "1",
              "description": "أصغر حجم"
            },
            {
              "value": "2",
              "description": "حجم صغير"
            },
            {
              "value": "3",
              "description": "الحجم الافتراضي"
            },
            {
              "value": "4",
              "description": "حجم متوسط"
            },
            {
              "value": "5",
              "description": "حجم كبير"
            },
            {
              "value": "6",
              "description": "حجم كبير جداً"
            },
            {
              "value": "7",
              "description": "أكبر حجم"
            }
          ],
          "freeInput": true
        },
        {
          "name": "color",
          "description": "كان يحدد اللون الافتراضي للنص في كل الصفحة",
          "values": [
            {
              "value": "#000000",
              "description": "أسود"
            },
            {
              "value": "#333333",
              "description": "رمادي غامق"
            },
            {
              "value": "#0000ff",
              "description": "أزرق"
            },
            {
              "value": "#ff0000",
              "description": "أحمر"
            },
            {
              "value": "#00ff00",
              "description": "أخضر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "face",
          "description": "كان يحدد نوع الخط الافتراضي لكل الصفحة",
          "values": [
            {
              "value": "Arial",
              "description": "خط Arial"
            },
            {
              "value": "Times New Roman",
              "description": "خط Times New Roman"
            },
            {
              "value": "Verdana",
              "description": "خط Verdana"
            },
            {
              "value": "Tahoma",
              "description": "خط Tahoma"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "isindex",
      "description": "?? عنصر مهمل - كان يضيف حقل بحث بسيطاً تلقائياً في الصفحة دون الحاجة لنموذج، تم إهماله لوجود نماذج HTML القياسية",
      "deprecated": true,
      "replacement": "استخدم <form> مع <input type=\"search\">",
      "severity": "critical",
      "removalVersion": "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5",
      "properties": [
        {
          "name": "prompt",
          "description": "كان النص الذي يظهر بجانب حقل البحث كتوجيه للمستخدم",
          "values": [
            {
              "value": "ابحث هنا...",
              "description": "نص توجيهي بالعربية"
            },
            {
              "value": "Search:",
              "description": "نص توجيهي بالإنجليزية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "action",
          "description": "كان عنوان الصفحة التي تستقبل عبارة البحث المدخلة",
          "values": [
            {
              "value": "/search",
              "description": "صفحة بحث في الموقع"
            },
            {
              "value": "https://google.com/search",
              "description": "صفحة بحث جوجل"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "head": [
    {
      "tag": "meta",
      "description": "يضيف بيانات وصفية للصفحة، تؤثر على محركات البحث، وسائل التواصل، وعرض الصفحة على الأجهزة المختلفة",
      "properties": [
        {
          "name": "charset",
          "description": "يحدد ترميز النصوص في الصفحة. اختيار الترميز الصحيح يمنع ظهور النصوص مشوشة أو علامات استفهام",
          "values": [
            {
              "value": "UTF-8",
              "description": "يدعم كل لغات العالم بما فيها العربية والعبرية والصينية، وهو الترميز الأكثر استخداماً وأماناً"
            },
            {
              "value": "UTF-16",
              "description": "ترميز يونيكود 16 بت، يدعم كل اللغات لكنه يستهلك مساحة أكبر"
            },
            {
              "value": "UTF-32",
              "description": "ترميز يونيكود 32 بت، يستهلك مساحة كبيرة جداً نادر الاستخدام"
            },
            {
              "value": "windows-1256",
              "description": "يدعم اللغة العربية فقط، مناسب للمواقع العربية القديمة"
            },
            {
              "value": "ISO-8859-6",
              "description": "يدعم اللغة العربية، يستخدم في الأنظمة القديمة"
            },
            {
              "value": "windows-1252",
              "description": "يدعم اللغات الأوروبية الغربية، لا يدعم العربية"
            },
            {
              "value": "GB2312",
              "description": "يدعم اللغة الصينية المبسطة"
            },
            {
              "value": "GBK",
              "description": "يدعم اللغة الصينية المبسطة والتقليدية معاً"
            },
            {
              "value": "GB18030",
              "description": "يدعم اللغة الصينية بالكامل، الترميز الرسمي في الصين"
            },
            {
              "value": "Big5",
              "description": "يدعم اللغة الصينية التقليدية (تايوان وهونغ كونغ)"
            },
            {
              "value": "Shift_JIS",
              "description": "يدعم اللغة اليابانية"
            },
            {
              "value": "EUC-JP",
              "description": "يدعم اللغة اليابانية، بديل لـ Shift_JIS"
            },
            {
              "value": "EUC-KR",
              "description": "يدعم اللغة الكورية"
            },
            {
              "value": "ISO-8859-1",
              "description": "يدعم اللغات الأوروبية الغربية، لا يدعم العربية"
            },
            {
              "value": "ISO-8859-2",
              "description": "يدعم اللغات الأوروبية الشرقية (البولندية، التشيكية)"
            },
            {
              "value": "ISO-8859-3",
              "description": "يدعم اللغات الأوروبية الجنوبية (التركية، المالطية)"
            },
            {
              "value": "ISO-8859-4",
              "description": "يدعم اللغات البلطيقية (الليتوانية، اللاتفية)"
            },
            {
              "value": "ISO-8859-5",
              "description": "يدعم اللغات السيريلية (الروسية، الأوكرانية)"
            },
            {
              "value": "ISO-8859-7",
              "description": "يدعم اللغة اليونانية"
            },
            {
              "value": "ISO-8859-8",
              "description": "يدعم اللغة العبرية"
            },
            {
              "value": "ISO-8859-9",
              "description": "يدعم اللغة التركية"
            },
            {
              "value": "KOI8-R",
              "description": "يدعم اللغة الروسية"
            },
            {
              "value": "KOI8-U",
              "description": "يدعم اللغة الأوكرانية"
            },
            {
              "value": "TIS-620",
              "description": "يدعم اللغة التايلاندية"
            },
            {
              "value": "VISCII",
              "description": "يدعم اللغة الفيتنامية"
            }
          ]
        },
        {
          "name": "name",
          "description": "يحدد نوع المعلومات الوصفية التي تريد إضافتها للصفحة",
          "values": [
            {
              "value": "viewport",
              "description": "يجعل الصفحة تظهر بشكل مناسب على الجوالات والأجهزة اللوحية، يمنع ظهور الصفحة مصغرة أو مكبرة"
            },
            {
              "value": "description",
              "description": "يظهر هذا النص في نتائج محركات البحث (جوجل) تحت عنوان الصفحة، يساعد في جذب الزوار"
            },
            {
              "value": "keywords",
              "description": "يحدد كلمات البحث التي تريد أن يجد بها محرك البحث صفحتك، لكن أهميتها حالياً قليلة"
            },
            {
              "value": "author",
              "description": "يحدد اسم كاتب أو مالك الصفحة، يظهر في بعض أدوات التطوير"
            },
            {
              "value": "robots",
              "description": "يأمر محركات البحث إما بفهرسة الصفحة أو تجاهلها، أو بمتابعة الروابط أو لا"
            },
            {
              "value": "theme-color",
              "description": "يغير لون شريط عنوان المتصفح في الجوالات (كروم وفايرفوكس) ليتناسب مع لون موقعك"
            },
            {
              "value": "apple-mobile-web-app-capable",
              "description": "يجعل موقعك يعمل كتطبيق على أجهزة آيفون وآيباد عند إضافته للشاشة الرئيسية"
            },
            {
              "value": "apple-mobile-web-app-status-bar-style",
              "description": "يغير لون شريط الحالة (الأعلى) في آيفون عند تشغيل موقعك كتطبيق"
            },
            {
              "value": "apple-mobile-web-app-title",
              "description": "يحدد الاسم الذي يظهر تحت أيقونة تطبيقك على شاشة آيفون الرئيسية"
            },
            {
              "value": "msapplication-TileColor",
              "description": "يغير لون البلاطة (المربع) الذي يظهر في قائمة ابدأ في ويندوز عند تثبيت موقعك"
            },
            {
              "value": "msapplication-config",
              "description": "يحدد ملف إعدادات يحتوي على شكل وألوان البلاطة في ويندوز"
            },
            {
              "value": "generator",
              "description": "يحدد اسم البرنامج أو النظام الذي أُنشئت به الصفحة (ووردبريس مثلاً)، يُضاف تلقائياً من بعض الأنظمة"
            },
            {
              "value": "application-name",
              "description": "يحدد اسم موقعك كتطبيق ويب، يظهر في بعض قوائم المتصفح والجوال"
            },
            {
              "value": "referrer",
              "description": "يحدد مقدار معلومات الصفحة الحالية التي تُرسل عند الانتقال لروابط خارجية، يحمي الخصوصية"
            },
            {
              "value": "color-scheme",
              "description": "يخبر المتصفح أن صفحتك تدعم الوضع الفاتح والداكن، فيعدّل شريط التمرير وعناصر النظام تلقائياً"
            },
            {
              "value": "format-detection",
              "description": "يمنع الجوال من تحويل الأرقام (هاتف، تاريخ) تلقائياً إلى روابط قابلة للنقر"
            },
            {
              "value": "google",
              "description": "يتحكم بسلوك جوجل تجاه صفحتك، مثل منع عرض مقتطف بحث مختلف عن الوصف الذي كتبته"
            },
            {
              "value": "google-site-verification",
              "description": "يثبت ملكيتك للموقع أمام أدوات مشرفي المواقع من جوجل (Search Console)"
            },
            {
              "value": "rating",
              "description": "يحدد التصنيف العمري لمحتوى الصفحة، مثل General أو Mature"
            },
            {
              "value": "twitter:card",
              "description": "يحدد شكل المعاينة عند مشاركة رابط موقعك على تويتر/إكس (صورة كبيرة أو صغيرة)"
            },
            {
              "value": "twitter:site",
              "description": "يحدد حساب تويتر/إكس الخاص بالموقع أو الشركة"
            },
            {
              "value": "twitter:creator",
              "description": "يحدد حساب تويتر/إكس الخاص بكاتب المحتوى"
            },
            {
              "value": "twitter:title",
              "description": "يحدد العنوان الذي يظهر عند مشاركة رابط موقعك على تويتر/إكس"
            },
            {
              "value": "twitter:description",
              "description": "يحدد النص الذي يظهر تحت العنوان عند المشاركة على تويتر/إكس"
            },
            {
              "value": "twitter:image",
              "description": "يحدد الصورة التي تظهر عند مشاركة رابط موقعك على تويتر/إكس"
            },
            {
              "value": "twitter:image:alt",
              "description": "يحدد وصفاً نصياً لصورة تويتر، يفيد ضعاف البصر"
            },
            {
              "value": "twitter:player",
              "description": "يحدد رابط فيديو أو مشغل يظهر ويعمل مباشرة داخل تغريدة تويتر/إكس"
            },
            {
              "value": "twitter:app:name:iphone",
              "description": "يحدد اسم تطبيق آيفون المرتبط بالمحتوى عند مشاركته على تويتر"
            },
            {
              "value": "twitter:app:id:iphone",
              "description": "يحدد معرف تطبيق آيفون في متجر آبل لفتحه مباشرة من تويتر"
            },
            {
              "value": "twitter:app:url:iphone",
              "description": "يحدد رابط التطبيق الذي يفتح عند النقر على التغريدة من آيفون"
            },
            {
              "value": "twitter:app:name:googleplay",
              "description": "يحدد اسم تطبيق أندرويد المرتبط بالمحتوى عند مشاركته على تويتر"
            },
            {
              "value": "twitter:app:id:googleplay",
              "description": "يحدد معرف تطبيق أندرويد في متجر جوجل بلاي لفتحه مباشرة من تويتر"
            },
            {
              "value": "twitter:app:url:googleplay",
              "description": "يحدد رابط التطبيق الذي يفتح عند النقر على التغريدة من أندرويد"
            },
            {
              "value": "twitter:label1",
              "description": "يحدد تسمية لمعلومة إضافية تظهر في البطاقة (مثل 'المؤلف')"
            },
            {
              "value": "twitter:data1",
              "description": "يحدد قيمة المعلومة الإضافية (مثل اسم المؤلف)"
            },
            {
              "value": "twitter:label2",
              "description": "يحدد تسمية لمعلومة إضافية ثانية"
            },
            {
              "value": "twitter:data2",
              "description": "يحدد قيمة المعلومة الإضافية الثانية"
            },
            {
              "value": "HandheldFriendly",
              "description": "يخبر المتصفحات القديمة أن الصفحة مصممة لتعمل بشكل جيد على الأجهزة المحمولة"
            },
            {
              "value": "MobileOptimized",
              "description": "يخبر متصفحات الجوال القديمة (مثل إنترنت إكسبلورر موبايل) بعرض الصفحة أصغر مما هي"
            },
            {
              "value": "renderer",
              "description": "يحدد محرك العرض المستخدم في بعض المتصفحات الصينية (مثل 360 و QQ)، يجبره على استخدام محرك حديث بدل IE"
            },
            {
              "value": "revisit-after",
              "description": "يقترح على محرك البحث عدد الأيام قبل إعادة زيارة الصفحة (قيمة قديمة، نادراً ما تُحترم اليوم)"
            },
            {
              "value": "distribution",
              "description": "يحدد جمهور الصفحة المستهدف مثل global أو local (قيمة قديمة، لا تأثير فعلي لها في محركات البحث الحديثة)"
            },
            {
              "value": "google-adsense-account",
              "description": "يربط الموقع بحساب جوجل أدسنس للتحقق من ملكيته وتفعيل الإعلانات"
            },
            {
              "value": "google-site-verification",
              "description": "يثبت ملكيتك للموقع أمام أدوات مشرفي المواقع من جوجل (مكرر أعلاه للتوضيح ضمن أدوات التحقق)"
            },
            {
              "value": "msvalidate.01",
              "description": "يثبت ملكية الموقع أمام أدوات Bing لمشرفي المواقع (Bing Webmaster Tools)"
            },
            {
              "value": "yandex-verification",
              "description": "يثبت ملكية الموقع أمام محرك البحث الروسي يانديكس"
            },
            {
              "value": "p:domain_verify",
              "description": "يثبت ملكية النطاق أمام بينترست لإدارة الحسابات المرتبطة بالموقع"
            },
            {
              "value": "facebook-domain-verification",
              "description": "يثبت ملكية النطاق أمام فيسبوك لإدارة الإعلانات وأدوات الأعمال"
            },
            {
              "value": "norton-safeweb-site-verification",
              "description": "يثبت ملكية الموقع أمام خدمة Norton Safe Web لتصنيفه كموقع آمن"
            },
            {
              "value": "apple-itunes-app",
              "description": "يعرض بانراً في سفاري لتحميل تطبيق آيفون المرتبط بالصفحة الحالية"
            },
            {
              "value": "google-play-app",
              "description": "يعرض بانراً في كروم على أندرويد لتحميل تطبيق الموقع من جوجل بلاي"
            },
            {
              "value": "mobile-web-app-capable",
              "description": "يجعل موقعك يعمل كتطبيق ويب مستقل (بدون شريط المتصفح) عند إضافته للشاشة الرئيسية على أندرويد"
            },
            {
              "value": "handheldfriendly",
              "description": "قيمة قديمة بديلة لـ HandheldFriendly، تخبر المتصفح أن الصفحة مهيأة للجوال"
            },
            {
              "value": "viewport-fit",
              "description": "يتحكم في كيفية عرض المحتوى في منطقة الأمان على أجهزة آيفون ذات الشاشة الممتلئة (Notch)"
            }
          ]
        },
        {
          "name": "property",
          "description": "يضيف معلومات مخصصة لوسائل التواصل الاجتماعي (فيسبوك، تويتر، واتساب) عند مشاركة رابط موقعك",
          "values": [
            {
              "value": "og:title",
              "description": "يحدد العنوان الذي يظهر عندما يشارك أحدهم رابط موقعك على فيسبوك أو تويتر"
            },
            {
              "value": "og:description",
              "description": "يحدد النص الذي يظهر تحت العنوان عند مشاركة رابط موقعك في وسائل التواصل"
            },
            {
              "value": "og:image",
              "description": "يحدد الصورة التي تظهر بجانب الرابط عند مشاركته في فيسبوك وتويتر وواتساب"
            },
            {
              "value": "og:url",
              "description": "يحدد الرابط الدائم للصفحة، يمنع كسر الرابط عند المشاركة"
            },
            {
              "value": "og:type",
              "description": "يخبر فيسبوك بنوع المحتوى (مقال، منتج، فيديو...) ليظهر بالشكل المناسب"
            },
            {
              "value": "og:site_name",
              "description": "يحدد اسم موقعك الذي يظهر بجانب الرابط عند المشاركة"
            },
            {
              "value": "og:locale",
              "description": "يحدد لغة المحتوى لوسائل التواصل، مثلاً ar_AR للعربية أو en_US للإنجليزية"
            },
            {
              "value": "og:image:width",
              "description": "يحدد عرض الصورة بالبكسل، يساعد فيسبوك على عرضها بسرعة دون انتظار تحميلها لمعرفة أبعادها"
            },
            {
              "value": "og:image:height",
              "description": "يحدد ارتفاع الصورة بالبكسل، يُستخدم مع og:image:width"
            },
            {
              "value": "og:image:alt",
              "description": "يحدد وصفاً نصياً للصورة، يفيد ضعاف البصر عند مشاركة الرابط"
            },
            {
              "value": "og:video",
              "description": "يحدد رابط فيديو يظهر ويُشغَّل مباشرة عند مشاركة الرابط في وسائل التواصل"
            },
            {
              "value": "og:audio",
              "description": "يحدد رابط ملف صوتي مرتبط بالصفحة عند مشاركتها"
            },
            {
              "value": "og:updated_time",
              "description": "يحدد آخر وقت تم فيه تحديث محتوى الصفحة"
            },
            {
              "value": "article:published_time",
              "description": "يحدد تاريخ نشر المقال، يستخدمه فيسبوك وجوجل لعرض تاريخ النشر"
            },
            {
              "value": "article:author",
              "description": "يحدد رابط صفحة كاتب المقال"
            },
            {
              "value": "fb:app_id",
              "description": "يربط الصفحة بتطبيق فيسبوك الخاص بك، يفعّل إحصائيات المشاركة والتحليلات"
            },
            {
              "value": "fb:pages",
              "description": "يربط الصفحة بمعرف صفحة فيسبوك الرسمية لموقعك، يفيد في إدارة المحتوى المنشور"
            },
            {
              "value": "og:image:type",
              "description": "يحدد نوع ملف الصورة (jpeg أو png)، يساعد فيسبوك على تحميلها وعرضها بسرعة أكبر"
            },
            {
              "value": "og:image:secure_url",
              "description": "يحدد رابطاً آمناً (https) للصورة، يستخدم عند مشاركة الرابط في مواقع تتطلب اتصالاً آمناً"
            },
            {
              "value": "og:video:width",
              "description": "يحدد عرض الفيديو بالبكسل، يساعد المتصفح على حجز المساحة المناسبة قبل تحميله"
            },
            {
              "value": "og:video:height",
              "description": "يحدد ارتفاع الفيديو بالبكسل، يُستخدم مع og:video:width"
            },
            {
              "value": "og:video:type",
              "description": "يحدد نوع ملف الفيديو (مثل video/mp4)، يساعد المشغل على التعامل معه بشكل صحيح"
            },
            {
              "value": "og:audio:type",
              "description": "يحدد نوع الملف الصوتي (مثل audio/mpeg)"
            },
            {
              "value": "og:determiner",
              "description": "يحدد أداة التعريف (a، an، the) التي تُضاف قبل اسم موقعك في بعض اللغات عند صياغة الجملة تلقائياً"
            },
            {
              "value": "og:see_also",
              "description": "يحدد روابط لصفحات أو مقالات ذات صلة بمحتوى الصفحة الحالية"
            },
            {
              "value": "og:rich_attachment",
              "description": "يخبر واتساب وفيسبوك بعرض معاينة غنية (صورة كبيرة) للرابط بدل معاينة صغيرة"
            },
            {
              "value": "article:modified_time",
              "description": "يحدد تاريخ آخر تعديل على المقال، يفيد جوجل في معرفة حداثة المحتوى"
            },
            {
              "value": "article:section",
              "description": "يحدد تصنيف أو قسم المقال (مثل رياضة أو تقنية)"
            },
            {
              "value": "article:tag",
              "description": "يحدد وسماً أو كلمة مفتاحية مرتبطة بالمقال، يمكن تكرارها لعدة وسوم"
            },
            {
              "value": "article:publisher",
              "description": "يحدد رابط صفحة الناشر (المؤسسة) على فيسبوك"
            },
            {
              "value": "profile:first_name",
              "description": "يحدد الاسم الأول لصاحب الصفحة الشخصية، يستخدم مع og:type=profile"
            },
            {
              "value": "profile:last_name",
              "description": "يحدد اسم العائلة لصاحب الصفحة الشخصية"
            },
            {
              "value": "profile:username",
              "description": "يحدد اسم المستخدم لصاحب الصفحة الشخصية"
            },
            {
              "value": "product:price:amount",
              "description": "يحدد سعر المنتج، يظهر عند مشاركة صفحة منتج في فيسبوك ومنصات التسوق"
            },
            {
              "value": "product:price:currency",
              "description": "يحدد عملة سعر المنتج (مثل SAR أو USD)، يستخدم مع product:price:amount"
            },
            {
              "value": "product:availability",
              "description": "يحدد إن كان المنتج متوفراً أو نافد المخزون"
            },
            {
              "value": "al:ios:url",
              "description": "يفتح تطبيق آيفون مباشرة عند مشاركة الرابط إذا كان التطبيق مثبتاً على جهاز الزائر (Facebook App Links)"
            },
            {
              "value": "al:ios:app_store_id",
              "description": "يحدد معرف تطبيق آيفون في متجر آبل، يستخدم مع al:ios:url"
            },
            {
              "value": "al:ios:app_name",
              "description": "يحدد اسم تطبيق آيفون المرتبط بالرابط"
            },
            {
              "value": "al:android:url",
              "description": "يفتح تطبيق أندرويد مباشرة عند مشاركة الرابط إذا كان التطبيق مثبتاً على جهاز الزائر"
            },
            {
              "value": "al:android:package",
              "description": "يحدد اسم حزمة تطبيق أندرويد (Package Name)، يستخدم مع al:android:url"
            },
            {
              "value": "al:android:app_name",
              "description": "يحدد اسم تطبيق أندرويد المرتبط بالرابط"
            },
            {
              "value": "al:web:url",
              "description": "يحدد رابط النسخة العادية من الصفحة للأجهزة التي لا تملك التطبيق المثبت"
            },
            {
              "value": "og:locale:alternate",
              "description": "يحدد لغات بديلة للمحتوى، يمكن تكرارها لعدة لغات"
            }
          ]
        },
        {
          "name": "http-equiv",
          "description": "يحاكي إعدادات رأس HTTP، أي يأمر المتصفح بتنفيذ أوامر معينة",
          "values": [
            {
              "value": "refresh",
              "description": "يعيد تحميل الصفحة تلقائياً بعد عدد ثوانٍ، أو ينقل الزائر لصفحة أخرى"
            },
            {
              "value": "X-UA-Compatible",
              "description": "يأمر متصفح Internet Explorer باستخدام أحدث إصدار لديه، يمنع ظهور الصفحة بشكل مشوه"
            },
            {
              "value": "content-type",
              "description": "يحدد نوع المحتوى والترميز، يفيد في المتصفحات القديمة جداً"
            },
            {
              "value": "default-style",
              "description": "يحدد أي ملف CSS سيكون الافتراضي إذا كان هناك عدة ملفات"
            },
            {
              "value": "content-language",
              "description": "يحدد اللغة الافتراضية للصفحة، قد يؤثر على أدوات الترجمة"
            },
            {
              "value": "cache-control",
              "description": "يأمر المتصفح بعدم حفظ نسخة من الصفحة (يمنع ظهور محتوى قديم)"
            },
            {
              "value": "expires",
              "description": "يحدد تاريخ انتهاء صلاحية الصفحة، بعدها يعيد المتصفح تحميلها من الخادم"
            },
            {
              "value": "pragma",
              "description": "يمنع المتصفح من تخزين الصفحة مؤقتاً (طريقة قديمة، استُبدلت بـ cache-control)"
            },
            {
              "value": "Content-Security-Policy",
              "description": "يحدد مصادر موثوقة يُسمح للصفحة بتحميل السكريبتات والصور والملفات منها فقط، يحمي من هجمات حقن الأكواد (XSS)"
            },
            {
              "value": "imagetoolbar",
              "description": "يخفي شريط أدوات الصور الذي كان يظهر في إنترنت إكسبلورر القديم عند تمرير الفأرة فوق صورة"
            },
            {
              "value": "Permissions-Policy",
              "description": "يتحكم بالميزات التي يسمح للصفحة باستخدامها مثل الكاميرا أو الموقع الجغرافي أو الميكروفون"
            },
            {
              "value": "Cross-Origin-Opener-Policy",
              "description": "يعزل نافذة الصفحة عن النوافذ الأخرى من مواقع مختلفة، يحمي من بعض هجمات القنوات الجانبية"
            },
            {
              "value": "Cross-Origin-Embedder-Policy",
              "description": "يمنع تحميل موارد من مواقع أخرى لا تسمح صراحة بذلك، يحمي من هجمات معينة"
            },
            {
              "value": "Accept-CH",
              "description": "يطلب من المتصفح إرسال تفاصيل إضافية عن الجهاز (مثل نوع الشاشة) في الطلبات القادمة"
            },
            {
              "value": "origin-trial",
              "description": "يفعّل ميزة تجريبية في المتصفح ضمن برنامج Origin Trials من جوجل، يستخدم لاختبار مزايا جديدة قبل إطلاقها رسمياً"
            },
            {
              "value": "X-DNS-Prefetch-Control",
              "description": "يتحكم في تحليل أسماء النطاقات مسبقاً، يسرع تحميل الروابط الخارجية"
            },
            {
              "value": "X-XSS-Protection",
              "description": "يفعّل حماية مدمجة في المتصفح ضد هجمات XSS (تم إهمالها في المتصفحات الحديثة)"
            },
            {
              "value": "X-Content-Type-Options",
              "description": "يمنع المتصفح من تخمين نوع الملف، يحمي من هجمات تحميل الملفات الخبيثة"
            },
            {
              "value": "X-Frame-Options",
              "description": "يمنع عرض الصفحة داخل إطار (iframe) من مواقع أخرى، يحمي من هجمات Clickjacking"
            }
          ]
        },
        {
          "name": "itemprop",
          "description": "يضيف بيانات منظمة (Schema.org) داخل الـ head باستخدام Microdata، تساعد محركات البحث على فهم محتوى الصفحة بدقة أكبر (تظهر كنتائج غنية)",
          "values": [
            {
              "value": "name",
              "description": "يحدد اسم العنصر الموصوف (مثل اسم المنتج أو المقال)"
            },
            {
              "value": "description",
              "description": "يحدد وصف العنصر ضمن البيانات المنظمة"
            },
            {
              "value": "image",
              "description": "يحدد رابط صورة العنصر ضمن البيانات المنظمة"
            },
            {
              "value": "url",
              "description": "يحدد رابط العنصر ضمن البيانات المنظمة"
            },
            {
              "value": "datePublished",
              "description": "يحدد تاريخ نشر العنصر"
            },
            {
              "value": "dateModified",
              "description": "يحدد تاريخ تعديل العنصر"
            },
            {
              "value": "author",
              "description": "يحدد مؤلف العنصر"
            },
            {
              "value": "publisher",
              "description": "يحدد ناشر العنصر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "scheme",
          "description": "خاصية قديمة جداً كانت تحدد صيغة تفسير قيمة content (مثل تنسيق تاريخ معين)، أُلغيت من معايير HTML الحديثة ولم تعد تُستخدم",
          "values": [
            {
              "value": "",
              "description": "لا يوجد استخدام موصى به حالياً، ذُكرت للتوثيق التاريخي فقط"
            }
          ]
        }
      ]
    },
    {
      "tag": "link",
      "description": "يربط الصفحة بملفات خارجية مثل CSS، الخطوط، الأيقونات، أو يجهز اتصالات مسبقة لتحسين سرعة تحميل الصفحة",
      "properties": [
        {
          "name": "rel",
          "description": "يحدد العلاقة بين الصفحة والملف المرتبط، يخبر المتصفح كيف يتعامل مع هذا الملف",
          "values": [
            {
              "value": "stylesheet",
              "description": "يربط ملف CSS، أي يأمر المتصفح بتحميل وتطبيق التنسيقات على الصفحة"
            },
            {
              "value": "icon",
              "description": "يحدد أيقونة الموقع التي تظهر في تبويب المتصفح وبجانب الرابط في المفضلة"
            },
            {
              "value": "apple-touch-icon",
              "description": "يحدد أيقونة الموقع التي تظهر على شاشة آيفون الرئيسية عند إضافة الموقع"
            },
            {
              "value": "apple-touch-icon-precomposed",
              "description": "مشابه لـ apple-touch-icon لكن يمنع إضافة تأثيرات خاصة على الأيقونة"
            },
            {
              "value": "manifest",
              "description": "يربط ملف تطبيق PWA، يسمح بتثبيت موقعك كتطبيق على الجوال والكمبيوتر"
            },
            {
              "value": "preconnect",
              "description": "يأمر المتصفح بفتح اتصال مسبق مع خادم خارجي، يسرع تحميل الموارد من هذا الخادم"
            },
            {
              "value": "preload",
              "description": "يأمر المتصفح بتحميل ملف معين (صورة، خط، CSS) بشكل عاجل قبل أي شيء، يسرع ظهور المحتوى"
            },
            {
              "value": "prefetch",
              "description": "يحمل ملفاً في الخلفية للصفحات التي سيزورها المستخدم بعد ذلك، يسرع الانتقال بين الصفحات"
            },
            {
              "value": "dns-prefetch",
              "description": "يحل اسم النطاق (DNS) مسبقاً، يسرع الاتصال بالمواقع الخارجية"
            },
            {
              "value": "prerender",
              "description": "يعرض صفحة كاملة في الخلفية قبل أن يضغط عليها المستخدم، يجعل الانتقال فورياً"
            },
            {
              "value": "modulepreload",
              "description": "يحمل وحدات JavaScript مسبقاً، يسرع تشغيل التطبيقات الكبيرة"
            },
            {
              "value": "canonical",
              "description": "يحدد الرابط الأصلي للصفحة، يمنع عقوبة المحتوى المكرر في محركات البحث"
            },
            {
              "value": "alternate",
              "description": "يقدم نسخة بديلة من الصفحة، مثل نسخة مطبوعة أو نسخة بلغة أخرى أو نسخة RSS"
            },
            {
              "value": "author",
              "description": "يربط بصفحة المؤلف، يفيد في المدونات والمقالات"
            },
            {
              "value": "help",
              "description": "يربط بصفحة المساعدة، يفيد في المواقع الكبيرة"
            },
            {
              "value": "license",
              "description": "يربط برخصة استخدام المحتوى، يوضح حقوق النشر"
            },
            {
              "value": "search",
              "description": "يربط بصفحة البحث في الموقع"
            },
            {
              "value": "next",
              "description": "يربط بالصفحة التالية في سلسلة مقالات أو نتائج بحث، يساعد في التنقل"
            },
            {
              "value": "prev",
              "description": "يربط بالصفحة السابقة في سلسلة مقالات أو نتائج بحث"
            },
            {
              "value": "nofollow",
              "description": "يأمر محركات البحث بعدم متابعة هذا الرابط، يمنع تمرير قيمة الموقع (SEO)"
            },
            {
              "value": "noopener",
              "description": "يمنع الصفحة الجديدة من التحكم بالصفحة الحالية، يحمي من هجمات الاختراق"
            },
            {
              "value": "noreferrer",
              "description": "يمنع إرسال معلومات الموقع المرجعي عند النقر على الرابط، يحمي الخصوصية"
            },
            {
              "value": "external",
              "description": "يشير إلى أن الرابط لموقع خارجي، قد يساعد محركات البحث"
            },
            {
              "value": "mask-icon",
              "description": "يحدد أيقونة SVG أحادية اللون تظهر في شريط التبويبات على متصفح سفاري بألوان مخصصة"
            },
            {
              "value": "sitemap",
              "description": "يربط بملف خريطة الموقع، يساعد محركات البحث في اكتشاف كل صفحات موقعك"
            },
            {
              "value": "shortlink",
              "description": "يوفر رابطاً مختصراً بديلاً لنفس الصفحة"
            },
            {
              "value": "amphtml",
              "description": "يربط بنسخة AMP (المتسارعة) من الصفحة، تُستخدم من محركات البحث لعرض نسخة أسرع على الجوال"
            },
            {
              "value": "me",
              "description": "يربط بحساب أو هوية صاحب الموقع على منصة أخرى، يستخدم في التحقق اللامركزي من الهوية (IndieWeb)"
            },
            {
              "value": "webmention",
              "description": "يحدد نقطة استقبال لإشعارات Webmention عندما يشير موقع آخر إلى صفحتك"
            },
            {
              "value": "pingback",
              "description": "يحدد رابط خدمة Pingback لإشعار موقعك تلقائياً عند وجود رابط له من مدونة أخرى"
            },
            {
              "value": "chrome-webstore-item",
              "description": "خاصية قديمة كانت تربط بصفحة إضافة كروم في المتجر لعرض زر تثبيت مباشر من الموقع (أُوقفت من جوجل)"
            },
            {
              "value": "profile",
              "description": "يربط بملف تعريف يوضح الفئات (metadata profile) المستخدمة في وسوم meta بالصفحة"
            },
            {
              "value": "index",
              "description": "يربط بالصفحة الرئيسية أو صفحة الفهرس في تسلسل مستندات مرتبطة"
            },
            {
              "value": "up",
              "description": "يربط بالصفحة الأعلى في التسلسل الهرمي للمحتوى (مثل قسم يحتوي المقال الحالي)"
            },
            {
              "value": "bookmark",
              "description": "يحدد رابطاً دائماً (Permalink) لعنصر داخل الصفحة، شائع في المدونات"
            },
            {
              "value": "tag",
              "description": "يربط بصفحة تصنيف أو وسم يتبع له المحتوى الحالي"
            },
            {
              "value": "serviceworker",
              "description": "يربط بـ Service Worker لتشغيل تطبيق PWA في الخلفية"
            }
          ]
        },
        {
          "name": "href",
          "description": "يحدد مكان الملف أو الرابط الذي تريد ربطه بالصفحة",
          "values": [
            {
              "value": "style.css",
              "description": "يربط بملف في نفس مجلد الصفحة"
            },
            {
              "value": "/css/style.css",
              "description": "يربط بملف في مجلد css داخل الموقع"
            },
            {
              "value": "https://example.com/style.css",
              "description": "يربط بملف من موقع آخر (خارجي)"
            },
            {
              "value": "favicon.ico",
              "description": "يربط بأيقونة الموقع"
            },
            {
              "value": "/manifest.json",
              "description": "يربط بملف تطبيق PWA"
            },
            {
              "value": "https://fonts.googleapis.com/css2?family=...",
              "description": "يربط بخطوط Google، يجلب الخطوط ويطبقها على الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "type",
          "description": "يخبر المتصفح بنوع الملف الذي يربطه، يساعد في التعامل الصحيح معه",
          "values": [
            {
              "value": "text/css",
              "description": "ملف تنسيق CSS"
            },
            {
              "value": "text/javascript",
              "description": "ملف سكريبت JavaScript"
            },
            {
              "value": "application/javascript",
              "description": "ملف سكريبت JavaScript (صيغة بديلة)"
            },
            {
              "value": "image/x-icon",
              "description": "ملف أيقونة بصيغة ico"
            },
            {
              "value": "image/png",
              "description": "صورة بصيغة PNG"
            },
            {
              "value": "image/svg+xml",
              "description": "صورة بصيغة SVG، تكبر وتصغر بدون تشويه"
            },
            {
              "value": "font/woff2",
              "description": "خط مضغوط بصيغة WOFF2، أسرع في التحميل"
            },
            {
              "value": "font/woff",
              "description": "خط بصيغة WOFF، صيغة قديمة ولكن مدعومة"
            },
            {
              "value": "application/json",
              "description": "ملف بيانات JSON"
            },
            {
              "value": "application/manifest+json",
              "description": "ملف تطبيق PWA"
            },
            {
              "value": "application/rss+xml",
              "description": "ملف RSS للتغذية"
            },
            {
              "value": "application/atom+xml",
              "description": "ملف Atom للتغذية"
            }
          ]
        },
        {
          "name": "sizes",
          "description": "يحدد حجم الأيقونة، يساعد المتصفح في اختيار الحجم المناسب للشاشة",
          "values": [
            {
              "value": "16x16",
              "description": "أيقونة صغيرة جداً (تستخدم في تبويب المتصفح)"
            },
            {
              "value": "32x32",
              "description": "أيقونة صغيرة (تستخدم في شريط المفضلة)"
            },
            {
              "value": "48x48",
              "description": "أيقونة متوسطة صغيرة"
            },
            {
              "value": "64x64",
              "description": "أيقونة متوسطة"
            },
            {
              "value": "128x128",
              "description": "أيقونة كبيرة"
            },
            {
              "value": "256x256",
              "description": "أيقونة كبيرة جداً"
            },
            {
              "value": "512x512",
              "description": "أيقونة تطبيق PWA، تظهر في متجر التطبيقات"
            },
            {
              "value": "any",
              "description": "أيقونة SVG تتكيف مع أي حجم بدون تشويه"
            }
          ]
        },
        {
          "name": "media",
          "description": "يحدد متى يتم تطبيق هذا الملف، يمنع تحميل ملفات غير ضرورية على جهاز معين",
          "values": [
            {
              "value": "all",
              "description": "يطبق الملف على جميع الأجهزة"
            },
            {
              "value": "print",
              "description": "يطبق الملف فقط عند طباعة الصفحة"
            },
            {
              "value": "screen",
              "description": "يطبق الملف فقط على شاشات العرض (كمبيوتر، جوال، تابلت)"
            },
            {
              "value": "speech",
              "description": "يطبق الملف فقط على قارئات النص للمكفوفين"
            },
            {
              "value": "(max-width: 768px)",
              "description": "يطبق الملف فقط على الشاشات الصغيرة (أقل من 768px) مثل الجوالات"
            },
            {
              "value": "(min-width: 769px)",
              "description": "يطبق الملف فقط على الشاشات الكبيرة (أكبر من 769px) مثل الكمبيوتر"
            },
            {
              "value": "(orientation: portrait)",
              "description": "يطبق الملف فقط عندما يكون الجهاز عمودياً (جوال)"
            },
            {
              "value": "(orientation: landscape)",
              "description": "يطبق الملف فقط عندما يكون الجهاز أفقياً (كمبيوتر أو تابلت)"
            },
            {
              "value": "(max-width: 480px)",
              "description": "يطبق الملف فقط على الشاشات الصغيرة جداً"
            },
            {
              "value": "(min-width: 1024px)",
              "description": "يطبق الملف فقط على الشاشات الكبيرة جداً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "as",
          "description": "عند استخدام preload، يحدد نوع الملف ليعطيه المتصفح الأولوية المناسبة",
          "values": [
            {
              "value": "audio",
              "description": "ملف صوتي، يعطيه أولوية تحميل الصوت"
            },
            {
              "value": "document",
              "description": "مستند HTML، يعطيه أولوية تحميل الصفحة"
            },
            {
              "value": "embed",
              "description": "محتوى مضمّن (فلاش أو PDF)"
            },
            {
              "value": "fetch",
              "description": "طلب بيانات من الخادم (API)"
            },
            {
              "value": "font",
              "description": "خط، يعطيه أولوية عالية لأن النصوص تحتاجه"
            },
            {
              "value": "image",
              "description": "صورة، يعطيها أولوية متوسطة"
            },
            {
              "value": "object",
              "description": "كائن خارجي"
            },
            {
              "value": "script",
              "description": "ملف JavaScript، يعطيه أولوية لتنفيذ الأوامر مبكراً"
            },
            {
              "value": "style",
              "description": "ملف CSS، يعطيه أولوية عالية لأن شكل الصفحة يعتمد عليه"
            },
            {
              "value": "track",
              "description": "مسار ترجمة لفيديو"
            },
            {
              "value": "video",
              "description": "ملف فيديو"
            },
            {
              "value": "worker",
              "description": "ملف Service Worker لتشغيل تطبيق PWA"
            }
          ]
        },
        {
          "name": "crossorigin",
          "description": "عند تحميل ملف من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
          "values": [
            {
              "value": "anonymous",
              "description": "لا يرسل أي معلومات عن المستخدم للموقع الآخر (كوكيز، هوية)"
            },
            {
              "value": "use-credentials",
              "description": "يرسل معلومات المستخدم (كوكيز، هوية) للموقع الآخر إذا كان يثق به"
            }
          ]
        },
        {
          "name": "integrity",
          "description": "يتحقق من أن الملف لم يتغير أو يُخترق، يحمي من هجمات التلاعب بالملفات",
          "values": [
            {
              "value": "sha256-...",
              "description": "يستخدم خوارزمية SHA-256 للتحقق، يمنع تحميل ملف معدل"
            },
            {
              "value": "sha384-...",
              "description": "يستخدم خوارزمية SHA-384 للتحقق، أكثر أماناً"
            },
            {
              "value": "sha512-...",
              "description": "يستخدم خوارزمية SHA-512 للتحقق، الأكثر أماناً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "importance",
          "description": "يحدد أولوية تحميل الملف، مهم عند تحميل عدة ملفات في نفس الوقت",
          "values": [
            {
              "value": "high",
              "description": "يحمل هذا الملف أولاً وقبل كل شيء، مهم للصفحات التي تحتاج لمورد أساسي"
            },
            {
              "value": "low",
              "description": "يؤجل تحميل هذا الملف، مناسب للملفات غير المهمة"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يقرر الأولوية (افتراضي)"
            }
          ]
        },
        {
          "name": "fetchpriority",
          "description": "يحدد أولوية تحميل الملف مقارنة بباقي الموارد، النسخة الحديثة التي حلّت محل importance في المتصفحات الجديدة",
          "values": [
            {
              "value": "high",
              "description": "يعطي الملف أولوية عالية، يفيد في preload لخط أو صورة رئيسية"
            },
            {
              "value": "low",
              "description": "يعطي الملف أولوية منخفضة، يفيد في الملفات غير الحرجة"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يقرر الأولوية تلقائياً (افتراضي)"
            }
          ]
        },
        {
          "name": "hreflang",
          "description": "يحدد لغة الصفحة المرتبطة، يستخدم مع rel='alternate' لإخبار محركات البحث بالنسخ اللغوية المختلفة لنفس المحتوى",
          "values": [
            {
              "value": "ar",
              "description": "النسخة العربية من الصفحة"
            },
            {
              "value": "en",
              "description": "النسخة الإنجليزية من الصفحة"
            },
            {
              "value": "fr",
              "description": "النسخة الفرنسية من الصفحة"
            },
            {
              "value": "en-US",
              "description": "النسخة الإنجليزية الخاصة بالولايات المتحدة تحديداً"
            },
            {
              "value": "ar-SA",
              "description": "النسخة العربية الخاصة بالسعودية تحديداً"
            },
            {
              "value": "x-default",
              "description": "النسخة الافتراضية التي تظهر للزوار عندما لا تتطابق لغتهم مع أي نسخة محددة"
            },
            {
              "value": "es",
              "description": "النسخة الإسبانية"
            },
            {
              "value": "de",
              "description": "النسخة الألمانية"
            },
            {
              "value": "it",
              "description": "النسخة الإيطالية"
            },
            {
              "value": "pt",
              "description": "النسخة البرتغالية"
            },
            {
              "value": "ru",
              "description": "النسخة الروسية"
            },
            {
              "value": "ja",
              "description": "النسخة اليابانية"
            },
            {
              "value": "zh",
              "description": "النسخة الصينية"
            },
            {
              "value": "ko",
              "description": "النسخة الكورية"
            },
            {
              "value": "hi",
              "description": "النسخة الهندية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "title",
          "description": "يحدد اسماً وصفياً للملف المرتبط، يُستخدم خصوصاً مع أوراق الأنماط البديلة ليختار المستخدم بينها من قائمة عرض المتصفح",
          "values": [
            {
              "value": "الوضع الافتراضي",
              "description": "اسم يظهر للمستخدم يصف ورقة الأنماط هذه، مثل 'الوضع الداكن' أو 'خط كبير'"
            }
          ],
          "freeInput": true
        },
        {
          "name": "disabled",
          "description": "يمنع تطبيق ورقة الأنماط هذه مبدئياً، يفيد عند وجود عدة أنماط بديلة يتحكم بها المستخدم عبر جافاسكريبت",
          "values": [
            {
              "value": "",
              "description": "يعطّل ورقة الأنماط عند تحميل الصفحة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "color",
          "description": "يحدد لون أيقونة SVG أحادية اللون التي تظهر في شريط التبويبات على متصفح سفاري، يستخدم مع rel='mask-icon'",
          "values": [
            {
              "value": "#5bbad5",
              "description": "لون سماوي فاتح، مثال شائع في أدوات توليد الأيقونات"
            },
            {
              "value": "#000000",
              "description": "لون أسود، يستخدم لأيقونة بسيطة عالية التباين"
            },
            {
              "value": "#ffffff",
              "description": "لون أبيض، يستخدم في الخلفيات الداكنة"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#3498db",
              "description": "لون أزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "referrerpolicy",
          "description": "يحدد مقدار معلومات الصفحة الحالية التي تُرسل عند تحميل الملف المرتبط من موقع آخر، يحمي الخصوصية",
          "values": [
            {
              "value": "no-referrer",
              "description": "لا يرسل أي معلومات عن الصفحة الحالية"
            },
            {
              "value": "no-referrer-when-downgrade",
              "description": "يرسل المعلومات فقط إذا كان الموقع الآخر آمن (HTTPS)"
            },
            {
              "value": "origin",
              "description": "يرسل اسم الموقع فقط (مثل example.com) وليس الرابط كاملاً"
            },
            {
              "value": "origin-when-cross-origin",
              "description": "يرسل اسم الموقع فقط للمواقع الأخرى، والرابط كاملاً لنفس الموقع"
            },
            {
              "value": "same-origin",
              "description": "يرسل المعلومات فقط إذا كان الملف من نفس الموقع"
            },
            {
              "value": "strict-origin",
              "description": "يرسل اسم الموقع فقط، ولا يرسل إذا كان الموقع الآخر غير آمن"
            },
            {
              "value": "strict-origin-when-cross-origin",
              "description": "يرسل اسم الموقع للمواقع الأخرى، والرابط كاملاً لنفس الموقع (السلوك الافتراضي في المتصفحات الحديثة)"
            },
            {
              "value": "unsafe-url",
              "description": "يرسل الرابط كاملاً دائماً (غير آمن)"
            }
          ]
        }
      ]
    },
    {
      "tag": "style",
      "description": "يسمح بكتابة أكواد CSS مباشرة داخل الصفحة لتنسيقها وتغيير ألوانها وخطوطها وأحجامها دون الحاجة لملف خارجي",
      "properties": [
        {
          "name": "type",
          "description": "يخبر المتصفح بأن هذا الكود هو CSS ليتم تطبيقه على الصفحة",
          "values": [
            {
              "value": "text/css",
              "description": "كود CSS عادي (قيمته الافتراضية، يمكن حذفها)"
            }
          ]
        },
        {
          "name": "media",
          "description": "يحدد متى يتم تطبيق هذه الأكواد، يمنع تطبيقها على أجهزة لا تحتاجها",
          "values": [
            {
              "value": "all",
              "description": "يطبق على جميع الأجهزة"
            },
            {
              "value": "print",
              "description": "يطبق فقط عند الطباعة، مثلاً يغير الألوان ويخفي القوائم"
            },
            {
              "value": "screen",
              "description": "يطبق فقط على الشاشات (كمبيوتر، جوال، تابلت)"
            },
            {
              "value": "speech",
              "description": "يطبق فقط على قارئات النص للمكفوفين"
            },
            {
              "value": "(max-width: 768px)",
              "description": "يطبق فقط على الشاشات الصغيرة"
            },
            {
              "value": "(min-width: 769px)",
              "description": "يطبق فقط على الشاشات الكبيرة"
            }
          ]
        },
        {
          "name": "nonce",
          "description": "يحدد رمزاً عشوائياً فريداً يُنشأ من الخادم مع كل تحميل للصفحة، يستخدم مع سياسة أمان المحتوى (CSP) للسماح بتطبيق هذا النمط تحديداً دون غيره",
          "values": [
            {
              "value": "rAnd0mN0nceValue==",
              "description": "مثال على رمز عشوائي، يجب أن يتطابق مع الرمز المذكور في رأس Content-Security-Policy"
            }
          ],
          "freeInput": true
        },
        {
          "name": "title",
          "description": "يحدد اسماً للورقة النمطية، يستخدم مع أوراق الأنماط البديلة لتمييزها",
          "values": [
            {
              "value": "الوضع الداكن",
              "description": "اسم ورقة الأنماط الداكنة"
            },
            {
              "value": "الوضع الفاتح",
              "description": "اسم ورقة الأنماط الفاتحة"
            },
            {
              "value": "نسخة الطباعة",
              "description": "اسم ورقة أنماط الطباعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "blocking",
          "description": "يمنع عرض الصفحة حتى يتم تطبيق هذه الأنماط بالكامل، يمنع ظهور الصفحة بدون تنسيق",
          "values": [
            {
              "value": "render",
              "description": "يمنع عرض الصفحة حتى تطبيق الأنماط"
            }
          ]
        }
      ]
    },
    {
      "tag": "title",
      "description": "يحدد النص الذي يظهر في تبويب المتصفح، يساعد المستخدم في معرفة الصفحة ويساعد محركات البحث في فهم محتواها",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص في عنوان الصفحة",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين (للغة الإنجليزية)"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار (للغة العربية)"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة عنوان الصفحة",
          "values": [
            {
              "value": "ar",
              "description": "لغة عربية"
            },
            {
              "value": "en",
              "description": "لغة إنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "base",
      "description": "يحدد رابطاً أساسياً يُضاف تلقائياً أمام كل رابط نسبي في الصفحة، يوفر عليك كتابة الرابط الكامل كل مرة",
      "properties": [
        {
          "name": "href",
          "description": "يحدد رابطاً أساسياً يُضاف تلقائياً أمام كل رابط نسبي في الصفحة",
          "values": [
            {
              "value": "https://example.com/",
              "description": "جميع الروابط ستبدأ بهذا الرابط، مثلاً '/about' تصبح 'https://example.com/about'"
            },
            {
              "value": "https://example.com/folder/",
              "description": "جميع الروابط ستبدأ بهذا المجلد"
            },
            {
              "value": "/",
              "description": "جميع الروابط ستبدأ من جذر الموقع، مثلاً 'about.html' تصبح '/about.html'"
            },
            {
              "value": "./",
              "description": "جميع الروابط ستبدأ من المجلد الحالي"
            },
            {
              "value": "../",
              "description": "جميع الروابط ستبدأ من المجلد السابق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "target",
          "description": "يحدد كيف تفتح جميع الروابط في الصفحة تلقائياً، يوفر عليك كتابة target لكل رابط",
          "values": [
            {
              "value": "_blank",
              "description": "يفتح جميع الروابط في نافذة أو تبويب جديد"
            },
            {
              "value": "_self",
              "description": "يفتح جميع الروابط في نفس النافذة (افتراضي)"
            },
            {
              "value": "_parent",
              "description": "يفتح جميع الروابط في الإطار الأب (إذا كانت الصفحة داخل إطار)"
            },
            {
              "value": "_top",
              "description": "يفتح جميع الروابط في أعلى نافذة (يكسر الإطارات)"
            }
          ]
        }
      ]
    },
    {
      "tag": "script",
      "description": "يضيف كود JavaScript إما مباشرة أو عن طريق ملف خارجي، يجعل الصفحة تفاعلية وتستجيب لأوامر المستخدم",
      "properties": [
        {
          "name": "type",
          "description": "يحدد نوع الكود الذي ستكتبه، يغير كيفية تعامل المتصفح معه",
          "values": [
            {
              "value": "text/javascript",
              "description": "كود JavaScript عادي (افتراضي)"
            },
            {
              "value": "module",
              "description": "كود JavaScript باستخدام نظام الوحدات، يسمح باستيراد وتصدير الأكواد"
            },
            {
              "value": "importmap",
              "description": "يحدد أسماء مختصرة لوحدات JavaScript، يسهل كتابة الأكواد المعقدة"
            },
            {
              "value": "speculationrules",
              "description": "يحدد قواعد لتحميل الصفحات مسبقاً، يسرع التنقل داخل الموقع"
            },
            {
              "value": "application/json",
              "description": "بيانات JSON، يفيد في تخزين إعدادات"
            },
            {
              "value": "application/wasm",
              "description": "كود WebAssembly، يشغل أكواد بلغات أخرى (C++, Rust) بسرعة عالية في المتصفح"
            },
            {
              "value": "text/plain",
              "description": "نص عادي، يتجاهله المتصفح"
            },
            {
              "value": "text/html",
              "description": "كود HTML، يتجاهله المتصفح"
            }
          ]
        },
        {
          "name": "src",
          "description": "يربط بملف JavaScript خارجي بدل كتابة الكود داخل الصفحة، ينظم الأكواد ويجعلها قابلة لإعادة الاستخدام",
          "values": [
            {
              "value": "app.js",
              "description": "يربط بملف في نفس المجلد"
            },
            {
              "value": "/js/app.js",
              "description": "يربط بملف في مجلد js"
            },
            {
              "value": "https://cdn.example.com/library.js",
              "description": "يربط بملف من شبكة توزيع محتوى (CDN)، يحمله بسرعة ويوفر عليك رفعه"
            }
          ],
          "freeInput": true
        },
        {
          "name": "async",
          "description": "يحمل السكريبت في الخلفية أثناء تحميل الصفحة، وعندما ينتهي التحميل ينفذه فوراً، لا يمنع ظهور الصفحة",
          "values": [
            {
              "value": "",
              "description": "يفعّل التحميل غير المتزامن (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "defer",
          "description": "يحمل السكريبت في الخلفية ويؤخر تنفيذه حتى تنتهي الصفحة من التحميل، يضمن ظهور الصفحة أولاً ثم تنفيذ الأكواد",
          "values": [
            {
              "value": "",
              "description": "يفعّل تأخير التنفيذ (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "nomodule",
          "description": "يمنع تنفيذ السكريبت في المتصفحات الحديثة التي تدعم الوحدات، يستخدم لتشغيل كود بديل للمتصفحات القديمة",
          "values": [
            {
              "value": "",
              "description": "يفعّل (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "crossorigin",
          "description": "عند تحميل سكريبت من موقع آخر، يحدد كم من المعلومات يسمح للموقع الآخر برؤيتها",
          "values": [
            {
              "value": "anonymous",
              "description": "لا يرسل أي معلومات (كوكيز، هوية) للموقع الآخر"
            },
            {
              "value": "use-credentials",
              "description": "يرسل معلومات المستخدم (كوكيز، هوية) للموقع الآخر إذا كان يثق به"
            }
          ]
        },
        {
          "name": "integrity",
          "description": "يتحقق من أن ملف السكريبت لم يتغير أو يُخترق، يحمي من هجمات التلاعب بالملفات المستوردة",
          "values": [
            {
              "value": "sha256-...",
              "description": "يتحقق باستخدام SHA-256، يمنع تشغيل ملف معدل"
            },
            {
              "value": "sha384-...",
              "description": "يتحقق باستخدام SHA-384، أكثر أماناً"
            },
            {
              "value": "sha512-...",
              "description": "يتحقق باستخدام SHA-512، الأكثر أماناً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "referrerpolicy",
          "description": "يحدد هل يرسل المتصفح عنوان الصفحة الحالية للموقع الآخر عند تحميل السكريبت، يحمي الخصوصية",
          "values": [
            {
              "value": "no-referrer",
              "description": "لا يرسل أي معلومات عن الصفحة الحالية، يخفي المصدر تماماً"
            },
            {
              "value": "no-referrer-when-downgrade",
              "description": "يرسل المعلومات فقط إذا كان الموقع الآخر آمن (HTTPS)"
            },
            {
              "value": "origin",
              "description": "يرسل اسم الموقع فقط (مثل example.com) وليس الرابط كاملاً"
            },
            {
              "value": "origin-when-cross-origin",
              "description": "يرسل اسم الموقع فقط للمواقع الأخرى، والرابط كاملاً لنفس الموقع"
            },
            {
              "value": "same-origin",
              "description": "يرسل المعلومات فقط إذا كان الموقع الآخر هو نفس الموقع"
            },
            {
              "value": "strict-origin",
              "description": "يرسل اسم الموقع فقط، ولا يرسل إذا كان الموقع الآخر غير آمن"
            },
            {
              "value": "strict-origin-when-cross-origin",
              "description": "يرسل اسم الموقع للمواقع الأخرى، والرابط كاملاً لنفس الموقع"
            },
            {
              "value": "unsafe-url",
              "description": "يرسل الرابط كاملاً (غير آمن، قد يكشف معلومات حساسة)"
            }
          ]
        },
        {
          "name": "fetchpriority",
          "description": "يحدد أولوية تحميل ملف السكريبت مقارنة بباقي موارد الصفحة",
          "values": [
            {
              "value": "high",
              "description": "يحمّل السكريبت بأولوية عالية، يفيد الأكواد المهمة لظهور الصفحة"
            },
            {
              "value": "low",
              "description": "يؤجل أولوية تحميل السكريبت، يفيد الأكواد غير الحرجة"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يقرر الأولوية تلقائياً (افتراضي)"
            }
          ]
        },
        {
          "name": "blocking",
          "description": "يجبر المتصفح على تأخير عرض الصفحة حتى ينتهي تحميل هذا السكريبت، عكس async وdefer",
          "values": [
            {
              "value": "render",
              "description": "يمنع عرض الصفحة حتى يتم تحميل وتنفيذ السكريبت بالكامل"
            }
          ]
        },
        {
          "name": "nonce",
          "description": "يحدد رمزاً عشوائياً فريداً يُنشأ من الخادم مع كل تحميل للصفحة، يستخدم مع سياسة أمان المحتوى (CSP) للسماح بتنفيذ هذا السكريبت تحديداً دون غيره",
          "values": [
            {
              "value": "rAnd0mN0nceValue==",
              "description": "مثال على رمز عشوائي، يجب أن يتطابق مع الرمز المذكور في رأس Content-Security-Policy"
            }
          ],
          "freeInput": true
        },
        {
          "name": "charset",
          "description": "خاصية قديمة تحدد ترميز ملف السكريبت الخارجي، أصبحت غير ضرورية لأن المتصفحات الحديثة تعتمد على ترميز الصفحة نفسها (UTF-8)",
          "values": [
            {
              "value": "UTF-8",
              "description": "الترميز الموصى به دوماً"
            }
          ]
        },
        {
          "name": "language",
          "description": "خاصية قديمة جداً كانت تحدد لغة السكريبت، استُبدلت بـ type",
          "values": [
            {
              "value": "JavaScript",
              "description": "لغة جافا سكريبت"
            },
            {
              "value": "VBScript",
              "description": "لغة VBScript (لمتصفح IE القديم)"
            }
          ]
        }
      ]
    },
    {
      "tag": "noscript",
      "description": "يعرض محتوى بديلاً فقط عندما يكون JavaScript معطلاً في المتصفح، يعطي المستخدم تحذيراً أو بديلاً عن المحتوى التفاعلي",
      "properties": []
    },
    {
      "tag": "template",
      "description": "يخزن قالب HTML مخفي لا يظهر في الصفحة، يستخدم لإنشاء عناصر HTML متكررة بواسطة JavaScript دون تكرار الكود",
      "properties": [
        {
          "name": "shadowrootmode",
          "description": "يحوّل القالب مباشرة إلى Shadow DOM معلن (Declarative Shadow DOM) للعنصر الأب دون الحاجة لـ JavaScript",
          "values": [
            {
              "value": "open",
              "description": "يسمح بالوصول إلى الـ Shadow DOM من JavaScript خارج العنصر"
            },
            {
              "value": "closed",
              "description": "يمنع الوصول إلى الـ Shadow DOM من خارج العنصر"
            }
          ]
        },
        {
          "name": "shadowrootclonable",
          "description": "يحدد ما إذا كان يمكن نسخ جذر Shadow DOM أو لا",
          "values": [
            {
              "value": "",
              "description": "يجعل Shadow DOM قابلاً للنسخ (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "shadowrootdelegatesfocus",
          "description": "يسمح لعناصر داخل Shadow DOM بأن تأخذ التركيز بدلاً من العنصر الأب",
          "values": [
            {
              "value": "",
              "description": "يفعّل تفويض التركيز (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "slot",
      "description": "يحدد مكاناً في قالب المكون يمكنك إدخال محتوى مخصص فيه، يسهل إنشاء مكونات ويب قابلة لإعادة الاستخدام",
      "properties": [
        {
          "name": "name",
          "description": "يحدد اسم الفتحة التي ستستقبل المحتوى المخصص في المكون",
          "values": [
            {
              "value": "header",
              "description": "فتحة مخصصة لوضع محتوى في أعلى المكون"
            },
            {
              "value": "content",
              "description": "فتحة مخصصة لوضع المحتوى الرئيسي"
            },
            {
              "value": "footer",
              "description": "فتحة مخصصة لوضع محتوى في أسفل المكون"
            },
            {
              "value": "sidebar",
              "description": "فتحة مخصصة للشريط الجانبي"
            },
            {
              "value": "main",
              "description": "فتحة مخصصة للمحتوى الرئيسي"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "svg": [
    {
      "tag": "svg",
      "description": "يحدد مساحة للرسم المتجهي، يمكن رسم أشكال ونصوص ورسومات تتكيف مع أي حجم بدون تشويه",
      "properties": [
        {
          "name": "viewBox",
          "description": "يحدد إحداثيات الرسم وقياساته، يسمح بتكبير وتصغير الرسم دون فقدان الجودة",
          "values": [
            {
              "value": "0 0 100 100",
              "description": "منطقة رسم 100×100 بكسل"
            },
            {
              "value": "0 0 200 200",
              "description": "منطقة رسم 200×200 بكسل"
            },
            {
              "value": "0 0 300 300",
              "description": "منطقة رسم 300×300 بكسل"
            },
            {
              "value": "0 0 400 400",
              "description": "منطقة رسم 400×400 بكسل"
            },
            {
              "value": "0 0 500 500",
              "description": "منطقة رسم 500×500 بكسل"
            },
            {
              "value": "0 0 800 600",
              "description": "منطقة رسم 800×600 بكسل"
            },
            {
              "value": "0 0 1920 1080",
              "description": "منطقة رسم بدقة Full HD"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض مساحة الرسم بالبكسل، يتحكم في حجم الرسم المعروض",
          "values": [
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            },
            {
              "value": "800",
              "description": "عرض 800 بكسل"
            },
            {
              "value": "100%",
              "description": "عرض كامل الحاوية"
            },
            {
              "value": "50%",
              "description": "نصف عرض الحاوية"
            },
            {
              "value": "auto",
              "description": "عرض تلقائي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع مساحة الرسم بالبكسل، يتحكم في حجم الرسم المعروض",
          "values": [
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "300",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "400",
              "description": "ارتفاع 400 بكسل"
            },
            {
              "value": "500",
              "description": "ارتفاع 500 بكسل"
            },
            {
              "value": "600",
              "description": "ارتفاع 600 بكسل"
            },
            {
              "value": "800",
              "description": "ارتفاع 800 بكسل"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل الحاوية"
            },
            {
              "value": "50%",
              "description": "نصف ارتفاع الحاوية"
            },
            {
              "value": "auto",
              "description": "ارتفاع تلقائي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "xmlns",
          "description": "يحدد مساحة الأسماء للرسم، يخبر المتصفح بأن هذا SVG ليتعامل معه بشكل صحيح",
          "values": [
            {
              "value": "http://www.w3.org/2000/svg",
              "description": "مساحة أسماء SVG"
            }
          ]
        },
        {
          "name": "version",
          "description": "يحدد إصدار SVG المستخدم في الرسم",
          "values": [
            {
              "value": "1.0",
              "description": "الإصدار 1.0"
            },
            {
              "value": "1.1",
              "description": "الإصدار 1.1 (الافتراضي)"
            },
            {
              "value": "2.0",
              "description": "الإصدار 2.0"
            }
          ]
        },
        {
          "name": "preserveAspectRatio",
          "description": "يتحكم في كيفية تكبير الرسم للحفاظ على نسبه عند تغيير الأبعاد",
          "values": [
            {
              "value": "none",
              "description": "عدم الحفاظ على النسب، يتمدد الرسم"
            },
            {
              "value": "xMidYMid meet",
              "description": "الحفاظ على النسب وتوسيط الرسم (الافتراضي)"
            },
            {
              "value": "xMinYMin meet",
              "description": "محاذاة لأعلى اليسار والحفاظ على النسب"
            },
            {
              "value": "xMaxYMax meet",
              "description": "محاذاة لأسفل اليمين والحفاظ على النسب"
            },
            {
              "value": "xMidYMid slice",
              "description": "تعبئة كاملة مع قص الأجزاء الزائدة"
            }
          ]
        }
      ]
    },
    {
      "tag": "circle",
      "description": "يرسم دائرة، تحدد بمركزها ونصف قطرها، تستخدم للرسوم الدائرية والنقاط",
      "properties": [
        {
          "name": "cx",
          "description": "يحدد موقع مركز الدائرة على المحور الأفقي (X)، يتحكم في مكان الدائرة",
          "values": [
            {
              "value": "0",
              "description": "مركز الدائرة عند 0"
            },
            {
              "value": "10",
              "description": "مركز الدائرة عند 10"
            },
            {
              "value": "20",
              "description": "مركز الدائرة عند 20"
            },
            {
              "value": "30",
              "description": "مركز الدائرة عند 30"
            },
            {
              "value": "40",
              "description": "مركز الدائرة عند 40"
            },
            {
              "value": "50",
              "description": "مركز الدائرة عند 50"
            },
            {
              "value": "60",
              "description": "مركز الدائرة عند 60"
            },
            {
              "value": "70",
              "description": "مركز الدائرة عند 70"
            },
            {
              "value": "80",
              "description": "مركز الدائرة عند 80"
            },
            {
              "value": "90",
              "description": "مركز الدائرة عند 90"
            },
            {
              "value": "100",
              "description": "مركز الدائرة عند 100"
            },
            {
              "value": "150",
              "description": "مركز الدائرة عند 150"
            },
            {
              "value": "200",
              "description": "مركز الدائرة عند 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cy",
          "description": "يحدد موقع مركز الدائرة على المحور الرأسي (Y)، يتحكم في مكان الدائرة",
          "values": [
            {
              "value": "0",
              "description": "مركز الدائرة عند 0"
            },
            {
              "value": "10",
              "description": "مركز الدائرة عند 10"
            },
            {
              "value": "20",
              "description": "مركز الدائرة عند 20"
            },
            {
              "value": "30",
              "description": "مركز الدائرة عند 30"
            },
            {
              "value": "40",
              "description": "مركز الدائرة عند 40"
            },
            {
              "value": "50",
              "description": "مركز الدائرة عند 50"
            },
            {
              "value": "60",
              "description": "مركز الدائرة عند 60"
            },
            {
              "value": "70",
              "description": "مركز الدائرة عند 70"
            },
            {
              "value": "80",
              "description": "مركز الدائرة عند 80"
            },
            {
              "value": "90",
              "description": "مركز الدائرة عند 90"
            },
            {
              "value": "100",
              "description": "مركز الدائرة عند 100"
            },
            {
              "value": "150",
              "description": "مركز الدائرة عند 150"
            },
            {
              "value": "200",
              "description": "مركز الدائرة عند 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "r",
          "description": "يحدد نصف قطر الدائرة، يتحكم في حجم الدائرة",
          "values": [
            {
              "value": "1",
              "description": "نصف قطر 1"
            },
            {
              "value": "2",
              "description": "نصف قطر 2"
            },
            {
              "value": "3",
              "description": "نصف قطر 3"
            },
            {
              "value": "4",
              "description": "نصف قطر 4"
            },
            {
              "value": "5",
              "description": "نصف قطر 5"
            },
            {
              "value": "10",
              "description": "نصف قطر 10"
            },
            {
              "value": "15",
              "description": "نصف قطر 15"
            },
            {
              "value": "20",
              "description": "نصف قطر 20"
            },
            {
              "value": "25",
              "description": "نصف قطر 25"
            },
            {
              "value": "30",
              "description": "نصف قطر 30"
            },
            {
              "value": "35",
              "description": "نصف قطر 35"
            },
            {
              "value": "40",
              "description": "نصف قطر 40"
            },
            {
              "value": "45",
              "description": "نصف قطر 45"
            },
            {
              "value": "50",
              "description": "نصف قطر 50"
            },
            {
              "value": "60",
              "description": "نصف قطر 60"
            },
            {
              "value": "70",
              "description": "نصف قطر 70"
            },
            {
              "value": "80",
              "description": "نصف قطر 80"
            },
            {
              "value": "90",
              "description": "نصف قطر 90"
            },
            {
              "value": "100",
              "description": "نصف قطر 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون تعبئة الدائرة، يلون داخل الدائرة بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة (شفاف)"
            },
            {
              "value": "#000000",
              "description": "تعبئة باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "تعبئة باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "تعبئة باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "تعبئة باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "تعبئة باللون الرمادي الغامق"
            },
            {
              "value": "#3498db",
              "description": "تعبئة بلون أزرق"
            },
            {
              "value": "#e74c3c",
              "description": "تعبئة بلون أحمر"
            },
            {
              "value": "#2ecc71",
              "description": "تعبئة بلون أخضر"
            },
            {
              "value": "#f39c12",
              "description": "تعبئة بلون برتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "تعبئة بلون بنفسجي"
            },
            {
              "value": "#1abc9c",
              "description": "تعبئة بلون أزرق مخضر"
            },
            {
              "value": "#34495e",
              "description": "تعبئة بلون أزرق داكن"
            },
            {
              "value": "#e67e22",
              "description": "تعبئة بلون برتقالي داكن"
            },
            {
              "value": "#c0392b",
              "description": "تعبئة بلون أحمر داكن"
            },
            {
              "value": "#8e44ad",
              "description": "تعبئة بلون بنفسجي داكن"
            },
            {
              "value": "red",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "green",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "blue",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "yellow",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "purple",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "orange",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "pink",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "cyan",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "magenta",
              "description": "تعبئة باللون الأرجواني"
            },
            {
              "value": "lime",
              "description": "تعبئة باللون الليموني"
            },
            {
              "value": "maroon",
              "description": "تعبئة باللون الكستنائي"
            },
            {
              "value": "navy",
              "description": "تعبئة باللون الأزرق البحري"
            },
            {
              "value": "olive",
              "description": "تعبئة باللون الزيتوني"
            },
            {
              "value": "teal",
              "description": "تعبئة باللون التيل"
            },
            {
              "value": "aqua",
              "description": "تعبئة باللون الأزرق المائي"
            },
            {
              "value": "fuchsia",
              "description": "تعبئة باللون الفوشيا"
            },
            {
              "value": "silver",
              "description": "تعبئة باللون الفضي"
            },
            {
              "value": "gold",
              "description": "تعبئة باللون الذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون حدود الدائرة، يلون محيط الدائرة بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون حدود"
            },
            {
              "value": "#000000",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "حدود باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "حدود باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "حدود باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "حدود باللون الرمادي الغامق"
            },
            {
              "value": "#e74c3c",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#3498db",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#2ecc71",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "حدود باللون البرتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "حدود باللون البنفسجي"
            },
            {
              "value": "black",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "red",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "green",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "blue",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "yellow",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "purple",
              "description": "حدود باللون البنفسجي"
            },
            {
              "value": "orange",
              "description": "حدود باللون البرتقالي"
            },
            {
              "value": "pink",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "cyan",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "magenta",
              "description": "حدود باللون الأرجواني"
            },
            {
              "value": "lime",
              "description": "حدود باللون الليموني"
            },
            {
              "value": "maroon",
              "description": "حدود باللون الكستنائي"
            },
            {
              "value": "navy",
              "description": "حدود باللون الأزرق البحري"
            },
            {
              "value": "olive",
              "description": "حدود باللون الزيتوني"
            },
            {
              "value": "teal",
              "description": "حدود باللون التيل"
            },
            {
              "value": "aqua",
              "description": "حدود باللون الأزرق المائي"
            },
            {
              "value": "fuchsia",
              "description": "حدود باللون الفوشيا"
            },
            {
              "value": "silver",
              "description": "حدود باللون الفضي"
            },
            {
              "value": "gold",
              "description": "حدود باللون الذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك حدود الدائرة، يتحكم في سمك الخط المحيط",
          "values": [
            {
              "value": "0.5",
              "description": "سمك 0.5 بكسل"
            },
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            },
            {
              "value": "6",
              "description": "سمك 6 بكسل"
            },
            {
              "value": "7",
              "description": "سمك 7 بكسل"
            },
            {
              "value": "8",
              "description": "سمك 8 بكسل"
            },
            {
              "value": "9",
              "description": "سمك 9 بكسل"
            },
            {
              "value": "10",
              "description": "سمك 10 بكسل"
            },
            {
              "value": "15",
              "description": "سمك 15 بكسل"
            },
            {
              "value": "20",
              "description": "سمك 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-dasharray",
          "description": "يجعل حدود الدائرة منقطة أو متقطعة، يتحكم في نمط الخط",
          "values": [
            {
              "value": "5,5",
              "description": "نقاط متساوية 5 و 5"
            },
            {
              "value": "10,5",
              "description": "نقاط 10 و 5"
            },
            {
              "value": "2,4",
              "description": "نقاط صغيرة 2 و 4"
            },
            {
              "value": "10,10,2,10",
              "description": "نقاط متعددة الأحجام"
            }
          ],
          "freeInput": true
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية الدائرة كاملة (من 0 إلى 1)، يتحكم في وضوح الدائرة",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل (غير مرئي)"
            },
            {
              "value": "0.1",
              "description": "شفافية 10%"
            },
            {
              "value": "0.2",
              "description": "شفافية 20%"
            },
            {
              "value": "0.3",
              "description": "شفافية 30%"
            },
            {
              "value": "0.4",
              "description": "شفافية 40%"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "0.6",
              "description": "شفافية 60%"
            },
            {
              "value": "0.7",
              "description": "شفافية 70%"
            },
            {
              "value": "0.8",
              "description": "شفافية 80%"
            },
            {
              "value": "0.9",
              "description": "شفافية 90%"
            },
            {
              "value": "1",
              "description": "معتم بالكامل (الافتراضي)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "rect",
      "description": "يرسم مستطيلاً، تحدد بموقعه وعرضه وارتفاعه، تستخدم للإطارات والمربعات",
      "properties": [
        {
          "name": "x",
          "description": "يحدد موقع المستطيل على المحور الأفقي (X)، يتحكم في مكان المستطيل",
          "values": [
            {
              "value": "0",
              "description": "الموضع الأفقي 0"
            },
            {
              "value": "10",
              "description": "الموضع الأفقي 10"
            },
            {
              "value": "20",
              "description": "الموضع الأفقي 20"
            },
            {
              "value": "30",
              "description": "الموضع الأفقي 30"
            },
            {
              "value": "40",
              "description": "الموضع الأفقي 40"
            },
            {
              "value": "50",
              "description": "الموضع الأفقي 50"
            },
            {
              "value": "60",
              "description": "الموضع الأفقي 60"
            },
            {
              "value": "70",
              "description": "الموضع الأفقي 70"
            },
            {
              "value": "80",
              "description": "الموضع الأفقي 80"
            },
            {
              "value": "90",
              "description": "الموضع الأفقي 90"
            },
            {
              "value": "100",
              "description": "الموضع الأفقي 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y",
          "description": "يحدد موقع المستطيل على المحور الرأسي (Y)، يتحكم في مكان المستطيل",
          "values": [
            {
              "value": "0",
              "description": "الموضع الرأسي 0"
            },
            {
              "value": "10",
              "description": "الموضع الرأسي 10"
            },
            {
              "value": "20",
              "description": "الموضع الرأسي 20"
            },
            {
              "value": "30",
              "description": "الموضع الرأسي 30"
            },
            {
              "value": "40",
              "description": "الموضع الرأسي 40"
            },
            {
              "value": "50",
              "description": "الموضع الرأسي 50"
            },
            {
              "value": "60",
              "description": "الموضع الرأسي 60"
            },
            {
              "value": "70",
              "description": "الموضع الرأسي 70"
            },
            {
              "value": "80",
              "description": "الموضع الرأسي 80"
            },
            {
              "value": "90",
              "description": "الموضع الرأسي 90"
            },
            {
              "value": "100",
              "description": "الموضع الرأسي 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض المستطيل، يتحكم في عرض الشكل",
          "values": [
            {
              "value": "1",
              "description": "عرض 1"
            },
            {
              "value": "5",
              "description": "عرض 5"
            },
            {
              "value": "10",
              "description": "عرض 10"
            },
            {
              "value": "20",
              "description": "عرض 20"
            },
            {
              "value": "30",
              "description": "عرض 30"
            },
            {
              "value": "40",
              "description": "عرض 40"
            },
            {
              "value": "50",
              "description": "عرض 50"
            },
            {
              "value": "60",
              "description": "عرض 60"
            },
            {
              "value": "70",
              "description": "عرض 70"
            },
            {
              "value": "80",
              "description": "عرض 80"
            },
            {
              "value": "90",
              "description": "عرض 90"
            },
            {
              "value": "100",
              "description": "عرض 100"
            },
            {
              "value": "150",
              "description": "عرض 150"
            },
            {
              "value": "200",
              "description": "عرض 200"
            },
            {
              "value": "300",
              "description": "عرض 300"
            },
            {
              "value": "400",
              "description": "عرض 400"
            },
            {
              "value": "500",
              "description": "عرض 500"
            },
            {
              "value": "100%",
              "description": "عرض كامل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع المستطيل، يتحكم في ارتفاع الشكل",
          "values": [
            {
              "value": "1",
              "description": "ارتفاع 1"
            },
            {
              "value": "5",
              "description": "ارتفاع 5"
            },
            {
              "value": "10",
              "description": "ارتفاع 10"
            },
            {
              "value": "20",
              "description": "ارتفاع 20"
            },
            {
              "value": "30",
              "description": "ارتفاع 30"
            },
            {
              "value": "40",
              "description": "ارتفاع 40"
            },
            {
              "value": "50",
              "description": "ارتفاع 50"
            },
            {
              "value": "60",
              "description": "ارتفاع 60"
            },
            {
              "value": "70",
              "description": "ارتفاع 70"
            },
            {
              "value": "80",
              "description": "ارتفاع 80"
            },
            {
              "value": "90",
              "description": "ارتفاع 90"
            },
            {
              "value": "100",
              "description": "ارتفاع 100"
            },
            {
              "value": "150",
              "description": "ارتفاع 150"
            },
            {
              "value": "200",
              "description": "ارتفاع 200"
            },
            {
              "value": "300",
              "description": "ارتفاع 300"
            },
            {
              "value": "400",
              "description": "ارتفاع 400"
            },
            {
              "value": "500",
              "description": "ارتفاع 500"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rx",
          "description": "يحدد استدارة زوايا المستطيل أفقياً، يجعل الزوايا دائرية",
          "values": [
            {
              "value": "0",
              "description": "بدون استدارة (زوايا حادة)"
            },
            {
              "value": "1",
              "description": "استدارة 1 بكسل"
            },
            {
              "value": "2",
              "description": "استدارة 2 بكسل"
            },
            {
              "value": "3",
              "description": "استدارة 3 بكسل"
            },
            {
              "value": "4",
              "description": "استدارة 4 بكسل"
            },
            {
              "value": "5",
              "description": "استدارة 5 بكسل"
            },
            {
              "value": "10",
              "description": "استدارة 10 بكسل"
            },
            {
              "value": "15",
              "description": "استدارة 15 بكسل"
            },
            {
              "value": "20",
              "description": "استدارة 20 بكسل"
            },
            {
              "value": "25",
              "description": "استدارة 25 بكسل"
            },
            {
              "value": "30",
              "description": "استدارة 30 بكسل"
            },
            {
              "value": "40",
              "description": "استدارة 40 بكسل"
            },
            {
              "value": "50",
              "description": "استدارة 50 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "ry",
          "description": "يحدد استدارة زوايا المستطيل رأسياً، يجعل الزوايا دائرية",
          "values": [
            {
              "value": "0",
              "description": "بدون استدارة (زوايا حادة)"
            },
            {
              "value": "1",
              "description": "استدارة 1 بكسل"
            },
            {
              "value": "2",
              "description": "استدارة 2 بكسل"
            },
            {
              "value": "3",
              "description": "استدارة 3 بكسل"
            },
            {
              "value": "4",
              "description": "استدارة 4 بكسل"
            },
            {
              "value": "5",
              "description": "استدارة 5 بكسل"
            },
            {
              "value": "10",
              "description": "استدارة 10 بكسل"
            },
            {
              "value": "15",
              "description": "استدارة 15 بكسل"
            },
            {
              "value": "20",
              "description": "استدارة 20 بكسل"
            },
            {
              "value": "25",
              "description": "استدارة 25 بكسل"
            },
            {
              "value": "30",
              "description": "استدارة 30 بكسل"
            },
            {
              "value": "40",
              "description": "استدارة 40 بكسل"
            },
            {
              "value": "50",
              "description": "استدارة 50 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون تعبئة المستطيل، يلون داخل المستطيل بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة (شفاف)"
            },
            {
              "value": "#000000",
              "description": "تعبئة باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "تعبئة باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "تعبئة باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "تعبئة باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "تعبئة باللون الرمادي الغامق"
            },
            {
              "value": "#3498db",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#e74c3c",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#2ecc71",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "blue",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "red",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "green",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "yellow",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "purple",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "orange",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "pink",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "cyan",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "magenta",
              "description": "تعبئة باللون الأرجواني"
            },
            {
              "value": "lime",
              "description": "تعبئة باللون الليموني"
            },
            {
              "value": "maroon",
              "description": "تعبئة باللون الكستنائي"
            },
            {
              "value": "navy",
              "description": "تعبئة باللون الأزرق البحري"
            },
            {
              "value": "olive",
              "description": "تعبئة باللون الزيتوني"
            },
            {
              "value": "teal",
              "description": "تعبئة باللون التيل"
            },
            {
              "value": "aqua",
              "description": "تعبئة باللون الأزرق المائي"
            },
            {
              "value": "fuchsia",
              "description": "تعبئة باللون الفوشيا"
            },
            {
              "value": "silver",
              "description": "تعبئة باللون الفضي"
            },
            {
              "value": "gold",
              "description": "تعبئة باللون الذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون حدود المستطيل، يلون محيط المستطيل بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون حدود"
            },
            {
              "value": "#000000",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "حدود باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "حدود باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "حدود باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "حدود باللون الرمادي الغامق"
            },
            {
              "value": "#e74c3c",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#3498db",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#2ecc71",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "حدود باللون البرتقالي"
            },
            {
              "value": "black",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "red",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "green",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "blue",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "yellow",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "purple",
              "description": "حدود باللون البنفسجي"
            },
            {
              "value": "orange",
              "description": "حدود باللون البرتقالي"
            },
            {
              "value": "pink",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "cyan",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "magenta",
              "description": "حدود باللون الأرجواني"
            },
            {
              "value": "lime",
              "description": "حدود باللون الليموني"
            },
            {
              "value": "maroon",
              "description": "حدود باللون الكستنائي"
            },
            {
              "value": "navy",
              "description": "حدود باللون الأزرق البحري"
            },
            {
              "value": "olive",
              "description": "حدود باللون الزيتوني"
            },
            {
              "value": "teal",
              "description": "حدود باللون التيل"
            },
            {
              "value": "aqua",
              "description": "حدود باللون الأزرق المائي"
            },
            {
              "value": "fuchsia",
              "description": "حدود باللون الفوشيا"
            },
            {
              "value": "silver",
              "description": "حدود باللون الفضي"
            },
            {
              "value": "gold",
              "description": "حدود باللون الذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك حدود المستطيل، يتحكم في سمك الخط المحيط",
          "values": [
            {
              "value": "0.5",
              "description": "سمك 0.5 بكسل"
            },
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            },
            {
              "value": "6",
              "description": "سمك 6 بكسل"
            },
            {
              "value": "7",
              "description": "سمك 7 بكسل"
            },
            {
              "value": "8",
              "description": "سمك 8 بكسل"
            },
            {
              "value": "9",
              "description": "سمك 9 بكسل"
            },
            {
              "value": "10",
              "description": "سمك 10 بكسل"
            },
            {
              "value": "15",
              "description": "سمك 15 بكسل"
            },
            {
              "value": "20",
              "description": "سمك 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية المستطيل كاملة (من 0 إلى 1)، يتحكم في وضوح المستطيل",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.1",
              "description": "شفافية 10%"
            },
            {
              "value": "0.2",
              "description": "شفافية 20%"
            },
            {
              "value": "0.3",
              "description": "شفافية 30%"
            },
            {
              "value": "0.4",
              "description": "شفافية 40%"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "0.6",
              "description": "شفافية 60%"
            },
            {
              "value": "0.7",
              "description": "شفافية 70%"
            },
            {
              "value": "0.8",
              "description": "شفافية 80%"
            },
            {
              "value": "0.9",
              "description": "شفافية 90%"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "line",
      "description": "يرسم خطاً مستقيماً بين نقطتين، يستخدم للرسومات الهندسية والخطوط",
      "properties": [
        {
          "name": "x1",
          "description": "يحدد النقطة الأولى على المحور الأفقي (X) لبداية الخط",
          "values": [
            {
              "value": "0",
              "description": "بداية الخط عند 0"
            },
            {
              "value": "10",
              "description": "بداية الخط عند 10"
            },
            {
              "value": "20",
              "description": "بداية الخط عند 20"
            },
            {
              "value": "30",
              "description": "بداية الخط عند 30"
            },
            {
              "value": "40",
              "description": "بداية الخط عند 40"
            },
            {
              "value": "50",
              "description": "بداية الخط عند 50"
            },
            {
              "value": "60",
              "description": "بداية الخط عند 60"
            },
            {
              "value": "70",
              "description": "بداية الخط عند 70"
            },
            {
              "value": "80",
              "description": "بداية الخط عند 80"
            },
            {
              "value": "90",
              "description": "بداية الخط عند 90"
            },
            {
              "value": "100",
              "description": "بداية الخط عند 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y1",
          "description": "يحدد النقطة الأولى على المحور الرأسي (Y) لبداية الخط",
          "values": [
            {
              "value": "0",
              "description": "بداية الخط عند 0"
            },
            {
              "value": "10",
              "description": "بداية الخط عند 10"
            },
            {
              "value": "20",
              "description": "بداية الخط عند 20"
            },
            {
              "value": "30",
              "description": "بداية الخط عند 30"
            },
            {
              "value": "40",
              "description": "بداية الخط عند 40"
            },
            {
              "value": "50",
              "description": "بداية الخط عند 50"
            },
            {
              "value": "60",
              "description": "بداية الخط عند 60"
            },
            {
              "value": "70",
              "description": "بداية الخط عند 70"
            },
            {
              "value": "80",
              "description": "بداية الخط عند 80"
            },
            {
              "value": "90",
              "description": "بداية الخط عند 90"
            },
            {
              "value": "100",
              "description": "بداية الخط عند 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "x2",
          "description": "يحدد النقطة الثانية على المحور الأفقي (X) لنهاية الخط",
          "values": [
            {
              "value": "0",
              "description": "نهاية الخط عند 0"
            },
            {
              "value": "10",
              "description": "نهاية الخط عند 10"
            },
            {
              "value": "20",
              "description": "نهاية الخط عند 20"
            },
            {
              "value": "30",
              "description": "نهاية الخط عند 30"
            },
            {
              "value": "40",
              "description": "نهاية الخط عند 40"
            },
            {
              "value": "50",
              "description": "نهاية الخط عند 50"
            },
            {
              "value": "60",
              "description": "نهاية الخط عند 60"
            },
            {
              "value": "70",
              "description": "نهاية الخط عند 70"
            },
            {
              "value": "80",
              "description": "نهاية الخط عند 80"
            },
            {
              "value": "90",
              "description": "نهاية الخط عند 90"
            },
            {
              "value": "100",
              "description": "نهاية الخط عند 100"
            },
            {
              "value": "200",
              "description": "نهاية الخط عند 200"
            },
            {
              "value": "300",
              "description": "نهاية الخط عند 300"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y2",
          "description": "يحدد النقطة الثانية على المحور الرأسي (Y) لنهاية الخط",
          "values": [
            {
              "value": "0",
              "description": "نهاية الخط عند 0"
            },
            {
              "value": "10",
              "description": "نهاية الخط عند 10"
            },
            {
              "value": "20",
              "description": "نهاية الخط عند 20"
            },
            {
              "value": "30",
              "description": "نهاية الخط عند 30"
            },
            {
              "value": "40",
              "description": "نهاية الخط عند 40"
            },
            {
              "value": "50",
              "description": "نهاية الخط عند 50"
            },
            {
              "value": "60",
              "description": "نهاية الخط عند 60"
            },
            {
              "value": "70",
              "description": "نهاية الخط عند 70"
            },
            {
              "value": "80",
              "description": "نهاية الخط عند 80"
            },
            {
              "value": "90",
              "description": "نهاية الخط عند 90"
            },
            {
              "value": "100",
              "description": "نهاية الخط عند 100"
            },
            {
              "value": "200",
              "description": "نهاية الخط عند 200"
            },
            {
              "value": "300",
              "description": "نهاية الخط عند 300"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون الخط، يلون الخط بلون معين",
          "values": [
            {
              "value": "#000000",
              "description": "خط أسود"
            },
            {
              "value": "#ff0000",
              "description": "خط أحمر"
            },
            {
              "value": "#00ff00",
              "description": "خط أخضر"
            },
            {
              "value": "#0000ff",
              "description": "خط أزرق"
            },
            {
              "value": "#ffff00",
              "description": "خط أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "خط وردي"
            },
            {
              "value": "#00ffff",
              "description": "خط سماوي"
            },
            {
              "value": "#cccccc",
              "description": "خط رمادي"
            },
            {
              "value": "#999999",
              "description": "خط رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "خط رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "خط رمادي غامق"
            },
            {
              "value": "#e74c3c",
              "description": "خط أحمر"
            },
            {
              "value": "#3498db",
              "description": "خط أزرق"
            },
            {
              "value": "#2ecc71",
              "description": "خط أخضر"
            },
            {
              "value": "#f39c12",
              "description": "خط برتقالي"
            },
            {
              "value": "black",
              "description": "خط أسود"
            },
            {
              "value": "red",
              "description": "خط أحمر"
            },
            {
              "value": "green",
              "description": "خط أخضر"
            },
            {
              "value": "blue",
              "description": "خط أزرق"
            },
            {
              "value": "yellow",
              "description": "خط أصفر"
            },
            {
              "value": "purple",
              "description": "خط بنفسجي"
            },
            {
              "value": "orange",
              "description": "خط برتقالي"
            },
            {
              "value": "pink",
              "description": "خط وردي"
            },
            {
              "value": "cyan",
              "description": "خط سماوي"
            },
            {
              "value": "magenta",
              "description": "خط أرجواني"
            },
            {
              "value": "lime",
              "description": "خط ليموني"
            },
            {
              "value": "maroon",
              "description": "خط كستنائي"
            },
            {
              "value": "navy",
              "description": "خط أزرق بحري"
            },
            {
              "value": "olive",
              "description": "خط زيتوني"
            },
            {
              "value": "teal",
              "description": "خط تيل"
            },
            {
              "value": "aqua",
              "description": "خط أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "خط فوشيا"
            },
            {
              "value": "silver",
              "description": "خط فضي"
            },
            {
              "value": "gold",
              "description": "خط ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك الخط، يتحكم في سمك الخط المرسوم",
          "values": [
            {
              "value": "0.5",
              "description": "سمك 0.5 بكسل"
            },
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            },
            {
              "value": "6",
              "description": "سمك 6 بكسل"
            },
            {
              "value": "7",
              "description": "سمك 7 بكسل"
            },
            {
              "value": "8",
              "description": "سمك 8 بكسل"
            },
            {
              "value": "9",
              "description": "سمك 9 بكسل"
            },
            {
              "value": "10",
              "description": "سمك 10 بكسل"
            },
            {
              "value": "15",
              "description": "سمك 15 بكسل"
            },
            {
              "value": "20",
              "description": "سمك 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-dasharray",
          "description": "يجعل الخط منقطاً أو متقطعاً، يتحكم في نمط الخط",
          "values": [
            {
              "value": "5,5",
              "description": "نقاط متساوية 5 و 5"
            },
            {
              "value": "10,5",
              "description": "نقاط 10 و 5"
            },
            {
              "value": "2,4",
              "description": "نقاط صغيرة 2 و 4"
            }
          ],
          "freeInput": true
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية الخط (من 0 إلى 1)، يتحكم في وضوح الخط",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "path",
      "description": "يرسم مساراً معقداً يتكون من خطوط ومنحنيات، يستخدم لإنشاء أشكال مخصصة ومعقدة",
      "properties": [
        {
          "name": "d",
          "description": "يحدد سلسلة من الأوامر لرسم المسار، يتحكم في شكل المسار بالكامل",
          "values": [
            {
              "value": "M 10 10 L 90 90",
              "description": "خط مستقيم من نقطة لنقطة"
            },
            {
              "value": "M 10 10 L 50 50 L 90 10",
              "description": "مثلث"
            },
            {
              "value": "M 10 50 Q 50 10 90 50",
              "description": "منحنى تربيعي"
            },
            {
              "value": "M 10 50 C 30 10 70 10 90 50",
              "description": "منحنى مكعب"
            },
            {
              "value": "M 50 10 A 40 40 0 1 1 50 90",
              "description": "قوس دائري"
            },
            {
              "value": "M 10 10 L 90 10 L 90 90 L 10 90 Z",
              "description": "مربع"
            },
            {
              "value": "M 50 10 L 90 50 L 50 90 L 10 50 Z",
              "description": "معين"
            },
            {
              "value": "M 50 10 A 40 40 0 1 1 50 90 A 40 40 0 1 1 50 10",
              "description": "دائرة بمسار"
            },
            {
              "value": "M 50 10 Q 10 50 50 90 Q 90 50 50 10",
              "description": "قلب"
            },
            {
              "value": "M 10 50 C 10 10 90 10 90 50 C 90 90 10 90 10 50",
              "description": "بيضاوي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون تعبئة المسار، يلون داخل المسار بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة"
            },
            {
              "value": "#000000",
              "description": "تعبئة باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "تعبئة باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "تعبئة باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "تعبئة باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "تعبئة باللون الرمادي الغامق"
            },
            {
              "value": "#3498db",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#e74c3c",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#2ecc71",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "red",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "green",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "blue",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "yellow",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "purple",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "orange",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "pink",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "cyan",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "magenta",
              "description": "تعبئة باللون الأرجواني"
            },
            {
              "value": "lime",
              "description": "تعبئة باللون الليموني"
            },
            {
              "value": "maroon",
              "description": "تعبئة باللون الكستنائي"
            },
            {
              "value": "navy",
              "description": "تعبئة باللون الأزرق البحري"
            },
            {
              "value": "olive",
              "description": "تعبئة باللون الزيتوني"
            },
            {
              "value": "teal",
              "description": "تعبئة باللون التيل"
            },
            {
              "value": "aqua",
              "description": "تعبئة باللون الأزرق المائي"
            },
            {
              "value": "fuchsia",
              "description": "تعبئة باللون الفوشيا"
            },
            {
              "value": "silver",
              "description": "تعبئة باللون الفضي"
            },
            {
              "value": "gold",
              "description": "تعبئة باللون الذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون حدود المسار، يلون محيط المسار بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون حدود"
            },
            {
              "value": "#000000",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "حدود باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "حدود باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "حدود باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "حدود باللون الرمادي الغامق"
            },
            {
              "value": "#e74c3c",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#3498db",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#2ecc71",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "حدود باللون البرتقالي"
            },
            {
              "value": "black",
              "description": "حدود سوداء"
            },
            {
              "value": "red",
              "description": "حدود حمراء"
            },
            {
              "value": "green",
              "description": "حدود خضراء"
            },
            {
              "value": "blue",
              "description": "حدود زرقاء"
            },
            {
              "value": "yellow",
              "description": "حدود صفراء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك حدود المسار، يتحكم في سمك الخط المحيط",
          "values": [
            {
              "value": "0.5",
              "description": "سمك 0.5 بكسل"
            },
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            },
            {
              "value": "6",
              "description": "سمك 6 بكسل"
            },
            {
              "value": "7",
              "description": "سمك 7 بكسل"
            },
            {
              "value": "8",
              "description": "سمك 8 بكسل"
            },
            {
              "value": "9",
              "description": "سمك 9 بكسل"
            },
            {
              "value": "10",
              "description": "سمك 10 بكسل"
            },
            {
              "value": "15",
              "description": "سمك 15 بكسل"
            },
            {
              "value": "20",
              "description": "سمك 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-dasharray",
          "description": "يجعل حدود المسار منقطة أو متقطعة، يتحكم في نمط الخط",
          "values": [
            {
              "value": "5,5",
              "description": "نقاط متساوية 5 و 5"
            },
            {
              "value": "10,5",
              "description": "نقاط 10 و 5"
            },
            {
              "value": "2,4",
              "description": "نقاط صغيرة 2 و 4"
            }
          ],
          "freeInput": true
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية المسار كاملة (من 0 إلى 1)، يتحكم في وضوح المسار",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "text",
      "description": "يضيف نصاً داخل الرسم SVG، يمكن تنسيقه وتحديد مكانه ولونه وحجمه",
      "properties": [
        {
          "name": "x",
          "description": "يحدد موقع النص على المحور الأفقي (X)، يتحكم في مكان النص",
          "values": [
            {
              "value": "0",
              "description": "الموضع الأفقي 0"
            },
            {
              "value": "10",
              "description": "الموضع الأفقي 10"
            },
            {
              "value": "20",
              "description": "الموضع الأفقي 20"
            },
            {
              "value": "30",
              "description": "الموضع الأفقي 30"
            },
            {
              "value": "40",
              "description": "الموضع الأفقي 40"
            },
            {
              "value": "50",
              "description": "الموضع الأفقي 50"
            },
            {
              "value": "60",
              "description": "الموضع الأفقي 60"
            },
            {
              "value": "70",
              "description": "الموضع الأفقي 70"
            },
            {
              "value": "80",
              "description": "الموضع الأفقي 80"
            },
            {
              "value": "90",
              "description": "الموضع الأفقي 90"
            },
            {
              "value": "100",
              "description": "الموضع الأفقي 100"
            },
            {
              "value": "150",
              "description": "الموضع الأفقي 150"
            },
            {
              "value": "200",
              "description": "الموضع الأفقي 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y",
          "description": "يحدد موقع النص على المحور الرأسي (Y)، يتحكم في مكان النص",
          "values": [
            {
              "value": "0",
              "description": "الموضع الرأسي 0"
            },
            {
              "value": "10",
              "description": "الموضع الرأسي 10"
            },
            {
              "value": "20",
              "description": "الموضع الرأسي 20"
            },
            {
              "value": "30",
              "description": "الموضع الرأسي 30"
            },
            {
              "value": "40",
              "description": "الموضع الرأسي 40"
            },
            {
              "value": "50",
              "description": "الموضع الرأسي 50"
            },
            {
              "value": "60",
              "description": "الموضع الرأسي 60"
            },
            {
              "value": "70",
              "description": "الموضع الرأسي 70"
            },
            {
              "value": "80",
              "description": "الموضع الرأسي 80"
            },
            {
              "value": "90",
              "description": "الموضع الرأسي 90"
            },
            {
              "value": "100",
              "description": "الموضع الرأسي 100"
            },
            {
              "value": "150",
              "description": "الموضع الرأسي 150"
            },
            {
              "value": "200",
              "description": "الموضع الرأسي 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون النص، يلون النص بلون معين",
          "values": [
            {
              "value": "#000000",
              "description": "نص أسود"
            },
            {
              "value": "#ff0000",
              "description": "نص أحمر"
            },
            {
              "value": "#00ff00",
              "description": "نص أخضر"
            },
            {
              "value": "#0000ff",
              "description": "نص أزرق"
            },
            {
              "value": "#ffff00",
              "description": "نص أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "نص وردي"
            },
            {
              "value": "#00ffff",
              "description": "نص سماوي"
            },
            {
              "value": "#cccccc",
              "description": "نص رمادي"
            },
            {
              "value": "#999999",
              "description": "نص رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "نص رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "نص رمادي غامق"
            },
            {
              "value": "#3498db",
              "description": "نص أزرق"
            },
            {
              "value": "#e74c3c",
              "description": "نص أحمر"
            },
            {
              "value": "#2ecc71",
              "description": "نص أخضر"
            },
            {
              "value": "#f39c12",
              "description": "نص برتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "نص بنفسجي"
            },
            {
              "value": "black",
              "description": "نص أسود"
            },
            {
              "value": "red",
              "description": "نص أحمر"
            },
            {
              "value": "green",
              "description": "نص أخضر"
            },
            {
              "value": "blue",
              "description": "نص أزرق"
            },
            {
              "value": "yellow",
              "description": "نص أصفر"
            },
            {
              "value": "purple",
              "description": "نص بنفسجي"
            },
            {
              "value": "orange",
              "description": "نص برتقالي"
            },
            {
              "value": "pink",
              "description": "نص وردي"
            },
            {
              "value": "cyan",
              "description": "نص سماوي"
            },
            {
              "value": "magenta",
              "description": "نص أرجواني"
            },
            {
              "value": "lime",
              "description": "نص ليموني"
            },
            {
              "value": "maroon",
              "description": "نص كستنائي"
            },
            {
              "value": "navy",
              "description": "نص أزرق بحري"
            },
            {
              "value": "olive",
              "description": "نص زيتوني"
            },
            {
              "value": "teal",
              "description": "نص تيل"
            },
            {
              "value": "aqua",
              "description": "نص أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "نص فوشيا"
            },
            {
              "value": "silver",
              "description": "نص فضي"
            },
            {
              "value": "gold",
              "description": "نص ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-size",
          "description": "يحدد حجم النص، يتحكم في حجم الخط المعروض",
          "values": [
            {
              "value": "8",
              "description": "حجم 8 بكسل"
            },
            {
              "value": "10",
              "description": "حجم 10 بكسل"
            },
            {
              "value": "12",
              "description": "حجم 12 بكسل"
            },
            {
              "value": "14",
              "description": "حجم 14 بكسل"
            },
            {
              "value": "16",
              "description": "حجم 16 بكسل"
            },
            {
              "value": "18",
              "description": "حجم 18 بكسل"
            },
            {
              "value": "20",
              "description": "حجم 20 بكسل"
            },
            {
              "value": "24",
              "description": "حجم 24 بكسل"
            },
            {
              "value": "28",
              "description": "حجم 28 بكسل"
            },
            {
              "value": "32",
              "description": "حجم 32 بكسل"
            },
            {
              "value": "36",
              "description": "حجم 36 بكسل"
            },
            {
              "value": "40",
              "description": "حجم 40 بكسل"
            },
            {
              "value": "48",
              "description": "حجم 48 بكسل"
            },
            {
              "value": "56",
              "description": "حجم 56 بكسل"
            },
            {
              "value": "64",
              "description": "حجم 64 بكسل"
            },
            {
              "value": "72",
              "description": "حجم 72 بكسل"
            },
            {
              "value": "96",
              "description": "حجم 96 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-family",
          "description": "يحدد نوع الخط المستخدم، يغير شكل النص",
          "values": [
            {
              "value": "Arial",
              "description": "خط Arial"
            },
            {
              "value": "Arial Black",
              "description": "خط Arial Black"
            },
            {
              "value": "Verdana",
              "description": "خط Verdana"
            },
            {
              "value": "Tahoma",
              "description": "خط Tahoma"
            },
            {
              "value": "Times New Roman",
              "description": "خط Times New Roman"
            },
            {
              "value": "Georgia",
              "description": "خط Georgia"
            },
            {
              "value": "Courier New",
              "description": "خط Courier New"
            },
            {
              "value": "Comic Sans MS",
              "description": "خط Comic Sans MS"
            },
            {
              "value": "Impact",
              "description": "خط Impact"
            },
            {
              "value": "Helvetica",
              "description": "خط Helvetica"
            },
            {
              "value": "sans-serif",
              "description": "خط عام بدون زخرفات"
            },
            {
              "value": "serif",
              "description": "خط عام بزخرفات"
            },
            {
              "value": "monospace",
              "description": "خط أحادي التباعد"
            },
            {
              "value": "cursive",
              "description": "خط مائل"
            },
            {
              "value": "fantasy",
              "description": "خط خيالي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-weight",
          "description": "يحدد سمك الخط، يتحكم في سُمك النص",
          "values": [
            {
              "value": "normal",
              "description": "سمك عادي (الافتراضي)"
            },
            {
              "value": "bold",
              "description": "خط عريض"
            },
            {
              "value": "bolder",
              "description": "خط أعرض من bold"
            },
            {
              "value": "lighter",
              "description": "خط أخف من normal"
            },
            {
              "value": "100",
              "description": "سمك 100"
            },
            {
              "value": "200",
              "description": "سمك 200"
            },
            {
              "value": "300",
              "description": "سمك 300"
            },
            {
              "value": "400",
              "description": "سمك 400"
            },
            {
              "value": "500",
              "description": "سمك 500"
            },
            {
              "value": "600",
              "description": "سمك 600"
            },
            {
              "value": "700",
              "description": "سمك 700"
            },
            {
              "value": "800",
              "description": "سمك 800"
            },
            {
              "value": "900",
              "description": "سمك 900"
            }
          ]
        },
        {
          "name": "font-style",
          "description": "يحدد نمط الخط، يتحكم في ميل النص",
          "values": [
            {
              "value": "normal",
              "description": "نمط عادي (الافتراضي)"
            },
            {
              "value": "italic",
              "description": "خط مائل"
            },
            {
              "value": "oblique",
              "description": "خط مائل بزاوية"
            }
          ]
        },
        {
          "name": "text-anchor",
          "description": "يحدد محاذاة النص بالنسبة للنقطة المحددة، يتحكم في مكان ظهور النص",
          "values": [
            {
              "value": "start",
              "description": "محاذاة لليسار (النقطة بداية النص)"
            },
            {
              "value": "middle",
              "description": "محاذاة للوسط (النقطة وسط النص)"
            },
            {
              "value": "end",
              "description": "محاذاة لليمين (النقطة نهاية النص)"
            }
          ]
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية النص (من 0 إلى 1)، يتحكم في وضوح النص",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "g",
      "description": "يجمع مجموعة من عناصر SVG لتطبيق تحويلات أو تنسيقات مشتركة عليها دفعة واحدة",
      "properties": [
        {
          "name": "transform",
          "description": "يطبق تحويلاً على جميع العناصر داخل المجموعة، مثل تدوير أو تكبير أو نقل",
          "values": [
            {
              "value": "translate(10,10)",
              "description": "ينقل المجموعة 10 بكسل في كل اتجاه"
            },
            {
              "value": "translate(50,50)",
              "description": "ينقل المجموعة 50 بكسل في كل اتجاه"
            },
            {
              "value": "translate(100,100)",
              "description": "ينقل المجموعة 100 بكسل في كل اتجاه"
            },
            {
              "value": "translate(50,0)",
              "description": "ينقل المجموعة 50 بكسل أفقياً"
            },
            {
              "value": "translate(0,50)",
              "description": "ينقل المجموعة 50 بكسل عمودياً"
            },
            {
              "value": "rotate(45)",
              "description": "يدور المجموعة 45 درجة"
            },
            {
              "value": "rotate(90)",
              "description": "يدور المجموعة 90 درجة"
            },
            {
              "value": "rotate(180)",
              "description": "يدور المجموعة 180 درجة"
            },
            {
              "value": "rotate(270)",
              "description": "يدور المجموعة 270 درجة"
            },
            {
              "value": "rotate(360)",
              "description": "يدور المجموعة 360 درجة"
            },
            {
              "value": "scale(1.5)",
              "description": "يكبر المجموعة بنسبة 150%"
            },
            {
              "value": "scale(2)",
              "description": "يكبر المجموعة بنسبة 200%"
            },
            {
              "value": "scale(0.5)",
              "description": "يصغر المجموعة بنسبة 50%"
            },
            {
              "value": "scale(1, 2)",
              "description": "يكبر أفقياً بنسبة 100% وعمودياً بنسبة 200%"
            },
            {
              "value": "skewX(30)",
              "description": "يميل المجموعة أفقياً 30 درجة"
            },
            {
              "value": "skewY(30)",
              "description": "يميل المجموعة عمودياً 30 درجة"
            },
            {
              "value": "translate(50,50) rotate(45)",
              "description": "ينقل ثم يدور المجموعة"
            },
            {
              "value": "rotate(45) translate(50,50)",
              "description": "يدور ثم ينقل المجموعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون التعبئة لكل العناصر داخل المجموعة، يلونها بلون واحد",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة"
            },
            {
              "value": "#000000",
              "description": "تعبئة باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "تعبئة باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "تعبئة باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "تعبئة باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "تعبئة باللون الرمادي الغامق"
            },
            {
              "value": "#3498db",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#e74c3c",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#2ecc71",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "red",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "green",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "blue",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "yellow",
              "description": "تعبئة باللون الأصفر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون الحدود لكل العناصر داخل المجموعة، يلون حدودها بلون واحد",
          "values": [
            {
              "value": "none",
              "description": "بدون حدود"
            },
            {
              "value": "#000000",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "حدود باللون الرمادي"
            },
            {
              "value": "#999999",
              "description": "حدود باللون الرمادي المتوسط"
            },
            {
              "value": "#666666",
              "description": "حدود باللون الرمادي الداكن"
            },
            {
              "value": "#333333",
              "description": "حدود باللون الرمادي الغامق"
            },
            {
              "value": "#e74c3c",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#3498db",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#2ecc71",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "حدود باللون البرتقالي"
            },
            {
              "value": "black",
              "description": "حدود سوداء"
            },
            {
              "value": "red",
              "description": "حدود حمراء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك الحدود لكل العناصر داخل المجموعة",
          "values": [
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية المجموعة كاملة (من 0 إلى 1)",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "defs",
      "description": "يخزن تعريفات لعناصر SVG قابلة لإعادة الاستخدام، يمكن استدعاؤها عدة مرات دون تكرار الكود",
      "properties": []
    },
    {
      "tag": "use",
      "description": "يعيد استخدام عنصر SVG معرف مسبقاً في defs، يوفر الوقت ويقلل حجم الكود",
      "properties": [
        {
          "name": "href",
          "description": "يحدد العنصر الذي سيتم إعادة استخدامه، ينسخ العنصر في مكانه",
          "values": [
            {
              "value": "#icon",
              "description": "يعيد استخدام العنصر ذو المعرف icon"
            },
            {
              "value": "#shape",
              "description": "يعيد استخدام العنصر ذو المعرف shape"
            },
            {
              "value": "#circle",
              "description": "يعيد استخدام العنصر ذو المعرف circle"
            },
            {
              "value": "#symbol",
              "description": "يعيد استخدام العنصر ذو المعرف symbol"
            }
          ],
          "freeInput": true
        },
        {
          "name": "x",
          "description": "يحدد موقع العنصر المستخدم على المحور الأفقي (X)",
          "values": [
            {
              "value": "0",
              "description": "الموضع الأفقي 0"
            },
            {
              "value": "10",
              "description": "الموضع الأفقي 10"
            },
            {
              "value": "20",
              "description": "الموضع الأفقي 20"
            },
            {
              "value": "30",
              "description": "الموضع الأفقي 30"
            },
            {
              "value": "40",
              "description": "الموضع الأفقي 40"
            },
            {
              "value": "50",
              "description": "الموضع الأفقي 50"
            },
            {
              "value": "60",
              "description": "الموضع الأفقي 60"
            },
            {
              "value": "70",
              "description": "الموضع الأفقي 70"
            },
            {
              "value": "80",
              "description": "الموضع الأفقي 80"
            },
            {
              "value": "90",
              "description": "الموضع الأفقي 90"
            },
            {
              "value": "100",
              "description": "الموضع الأفقي 100"
            },
            {
              "value": "150",
              "description": "الموضع الأفقي 150"
            },
            {
              "value": "200",
              "description": "الموضع الأفقي 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y",
          "description": "يحدد موقع العنصر المستخدم على المحور الرأسي (Y)",
          "values": [
            {
              "value": "0",
              "description": "الموضع الرأسي 0"
            },
            {
              "value": "10",
              "description": "الموضع الرأسي 10"
            },
            {
              "value": "20",
              "description": "الموضع الرأسي 20"
            },
            {
              "value": "30",
              "description": "الموضع الرأسي 30"
            },
            {
              "value": "40",
              "description": "الموضع الرأسي 40"
            },
            {
              "value": "50",
              "description": "الموضع الرأسي 50"
            },
            {
              "value": "60",
              "description": "الموضع الرأسي 60"
            },
            {
              "value": "70",
              "description": "الموضع الرأسي 70"
            },
            {
              "value": "80",
              "description": "الموضع الرأسي 80"
            },
            {
              "value": "90",
              "description": "الموضع الرأسي 90"
            },
            {
              "value": "100",
              "description": "الموضع الرأسي 100"
            },
            {
              "value": "150",
              "description": "الموضع الرأسي 150"
            },
            {
              "value": "200",
              "description": "الموضع الرأسي 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض العنصر المستخدم، يتحكم في حجمه",
          "values": [
            {
              "value": "10",
              "description": "عرض 10"
            },
            {
              "value": "20",
              "description": "عرض 20"
            },
            {
              "value": "30",
              "description": "عرض 30"
            },
            {
              "value": "40",
              "description": "عرض 40"
            },
            {
              "value": "50",
              "description": "عرض 50"
            },
            {
              "value": "60",
              "description": "عرض 60"
            },
            {
              "value": "80",
              "description": "عرض 80"
            },
            {
              "value": "100",
              "description": "عرض 100"
            },
            {
              "value": "150",
              "description": "عرض 150"
            },
            {
              "value": "200",
              "description": "عرض 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع العنصر المستخدم، يتحكم في حجمه",
          "values": [
            {
              "value": "10",
              "description": "ارتفاع 10"
            },
            {
              "value": "20",
              "description": "ارتفاع 20"
            },
            {
              "value": "30",
              "description": "ارتفاع 30"
            },
            {
              "value": "40",
              "description": "ارتفاع 40"
            },
            {
              "value": "50",
              "description": "ارتفاع 50"
            },
            {
              "value": "60",
              "description": "ارتفاع 60"
            },
            {
              "value": "80",
              "description": "ارتفاع 80"
            },
            {
              "value": "100",
              "description": "ارتفاع 100"
            },
            {
              "value": "150",
              "description": "ارتفاع 150"
            },
            {
              "value": "200",
              "description": "ارتفاع 200"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "image",
      "description": "يضمّن صورة داخل رسم SVG، يمكن وضع صور داخل الرسوم المتجهية",
      "properties": [
        {
          "name": "href",
          "description": "يحدد مسار الصورة المضمنة، يحدد الصورة المعروضة",
          "values": [
            {
              "value": "photo.jpg",
              "description": "صورة في نفس المجلد"
            },
            {
              "value": "image.png",
              "description": "صورة في نفس المجلد"
            },
            {
              "value": "assets/photo.jpg",
              "description": "صورة في مجلد assets"
            },
            {
              "value": "https://example.com/image.jpg",
              "description": "صورة من رابط خارجي"
            },
            {
              "value": "data:image/png;base64,iVBORw0KGgo...",
              "description": "صورة بصيغة Base64"
            }
          ],
          "freeInput": true
        },
        {
          "name": "x",
          "description": "يحدد موقع الصورة على المحور الأفقي (X)",
          "values": [
            {
              "value": "0",
              "description": "الموضع الأفقي 0"
            },
            {
              "value": "10",
              "description": "الموضع الأفقي 10"
            },
            {
              "value": "20",
              "description": "الموضع الأفقي 20"
            },
            {
              "value": "30",
              "description": "الموضع الأفقي 30"
            },
            {
              "value": "40",
              "description": "الموضع الأفقي 40"
            },
            {
              "value": "50",
              "description": "الموضع الأفقي 50"
            },
            {
              "value": "100",
              "description": "الموضع الأفقي 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y",
          "description": "يحدد موقع الصورة على المحور الرأسي (Y)",
          "values": [
            {
              "value": "0",
              "description": "الموضع الرأسي 0"
            },
            {
              "value": "10",
              "description": "الموضع الرأسي 10"
            },
            {
              "value": "20",
              "description": "الموضع الرأسي 20"
            },
            {
              "value": "30",
              "description": "الموضع الرأسي 30"
            },
            {
              "value": "40",
              "description": "الموضع الرأسي 40"
            },
            {
              "value": "50",
              "description": "الموضع الرأسي 50"
            },
            {
              "value": "100",
              "description": "الموضع الرأسي 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الصورة، يتحكم في حجم الصورة",
          "values": [
            {
              "value": "10",
              "description": "عرض 10 بكسل"
            },
            {
              "value": "20",
              "description": "عرض 20 بكسل"
            },
            {
              "value": "30",
              "description": "عرض 30 بكسل"
            },
            {
              "value": "40",
              "description": "عرض 40 بكسل"
            },
            {
              "value": "50",
              "description": "عرض 50 بكسل"
            },
            {
              "value": "80",
              "description": "عرض 80 بكسل"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "100%",
              "description": "عرض كامل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع الصورة، يتحكم في حجم الصورة",
          "values": [
            {
              "value": "10",
              "description": "ارتفاع 10 بكسل"
            },
            {
              "value": "20",
              "description": "ارتفاع 20 بكسل"
            },
            {
              "value": "30",
              "description": "ارتفاع 30 بكسل"
            },
            {
              "value": "40",
              "description": "ارتفاع 40 بكسل"
            },
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "60",
              "description": "ارتفاع 60 بكسل"
            },
            {
              "value": "80",
              "description": "ارتفاع 80 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "150",
              "description": "ارتفاع 150 بكسل"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "300",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "400",
              "description": "ارتفاع 400 بكسل"
            },
            {
              "value": "500",
              "description": "ارتفاع 500 بكسل"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "preserveAspectRatio",
          "description": "يتحكم في كيفية تكبير الصورة للحفاظ على نسبها",
          "values": [
            {
              "value": "none",
              "description": "عدم الحفاظ على النسب"
            },
            {
              "value": "xMidYMid meet",
              "description": "الحفاظ على النسب وتوسيط الصورة"
            },
            {
              "value": "xMinYMin meet",
              "description": "محاذاة لأعلى اليسار"
            },
            {
              "value": "xMaxYMax meet",
              "description": "محاذاة لأسفل اليمين"
            },
            {
              "value": "xMidYMid slice",
              "description": "تعبئة كاملة مع قص الأجزاء الزائدة"
            }
          ]
        }
      ]
    },
    {
      "tag": "polygon",
      "description": "يرسم مضلعاً مغلقاً بعدة نقاط، يستخدم لإنشاء أشكال متعددة الأضلاع",
      "properties": [
        {
          "name": "points",
          "description": "يحدد نقاط المضلع، تحدد رؤوس الشكل وتربط لتشكل مضلعاً",
          "values": [
            {
              "value": "50,10 90,90 10,90",
              "description": "مثلث"
            },
            {
              "value": "50,10 90,40 70,90 30,90 10,40",
              "description": "خماسي"
            },
            {
              "value": "50,10 90,50 50,90 10,50",
              "description": "معين"
            },
            {
              "value": "30,10 70,10 90,50 70,90 30,90 10,50",
              "description": "سداسي"
            },
            {
              "value": "50,10 90,20 80,70 20,70 10,20",
              "description": "نجمة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون تعبئة المضلع، يلون داخل الشكل بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة"
            },
            {
              "value": "#ff0000",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "تعبئة باللون الرمادي"
            },
            {
              "value": "#3498db",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#e74c3c",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#2ecc71",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "red",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "green",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "blue",
              "description": "تعبئة باللون الأزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون حدود المضلع، يلون محيط الشكل بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون حدود"
            },
            {
              "value": "#000000",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#00ff00",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#0000ff",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#ffff00",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "حدود باللون الرمادي"
            },
            {
              "value": "#e74c3c",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#3498db",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#2ecc71",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "black",
              "description": "حدود سوداء"
            },
            {
              "value": "red",
              "description": "حدود حمراء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك حدود المضلع، يتحكم في سمك الخط المحيط",
          "values": [
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية المضلع (من 0 إلى 1)",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "polyline",
      "description": "يرسم خطاً متعدد النقاط مفتوحاً، يصل بين نقاط متتالية بخطوط مستقيمة",
      "properties": [
        {
          "name": "points",
          "description": "يحدد نقاط الخط المتعدد، يصل بينها بخطوط مستقيمة",
          "values": [
            {
              "value": "10,10 50,50 90,10",
              "description": "خط على شكل V"
            },
            {
              "value": "10,10 50,10 90,50",
              "description": "خط متعرج"
            },
            {
              "value": "10,10 30,30 50,10 70,30 90,10",
              "description": "خط متعرج متسلسل"
            },
            {
              "value": "10,50 30,10 50,50 70,10 90,50",
              "description": "خط متعرج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون تعبئة الخط المتعدد، يلون المساحة داخل الخط",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة"
            },
            {
              "value": "#ff0000",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#0000ff",
              "description": "تعبئة باللون الأزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون الخط، يلون الخط بلون معين",
          "values": [
            {
              "value": "#000000",
              "description": "خط أسود"
            },
            {
              "value": "#ff0000",
              "description": "خط أحمر"
            },
            {
              "value": "#0000ff",
              "description": "خط أزرق"
            },
            {
              "value": "#00ff00",
              "description": "خط أخضر"
            },
            {
              "value": "#ffff00",
              "description": "خط أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "خط وردي"
            },
            {
              "value": "#00ffff",
              "description": "خط سماوي"
            },
            {
              "value": "#e74c3c",
              "description": "خط أحمر"
            },
            {
              "value": "#3498db",
              "description": "خط أزرق"
            },
            {
              "value": "#2ecc71",
              "description": "خط أخضر"
            },
            {
              "value": "#f39c12",
              "description": "خط برتقالي"
            },
            {
              "value": "blue",
              "description": "خط أزرق"
            },
            {
              "value": "red",
              "description": "خط أحمر"
            },
            {
              "value": "green",
              "description": "خط أخضر"
            },
            {
              "value": "black",
              "description": "خط أسود"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك الخط، يتحكم في سمك الخط المرسوم",
          "values": [
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-dasharray",
          "description": "يجعل الخط منقطاً أو متقطعاً",
          "values": [
            {
              "value": "5,5",
              "description": "نقاط متساوية 5 و 5"
            },
            {
              "value": "10,5",
              "description": "نقاط 10 و 5"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "ellipse",
      "description": "يرسم قطعاً ناقصاً (بيضاوياً)، يشبه الدائرة ولكن بأقطار مختلفة",
      "properties": [
        {
          "name": "cx",
          "description": "يحدد مركز القطع الناقص على المحور الأفقي (X)",
          "values": [
            {
              "value": "0",
              "description": "المركز عند 0"
            },
            {
              "value": "10",
              "description": "المركز عند 10"
            },
            {
              "value": "20",
              "description": "المركز عند 20"
            },
            {
              "value": "30",
              "description": "المركز عند 30"
            },
            {
              "value": "40",
              "description": "المركز عند 40"
            },
            {
              "value": "50",
              "description": "المركز عند 50"
            },
            {
              "value": "60",
              "description": "المركز عند 60"
            },
            {
              "value": "70",
              "description": "المركز عند 70"
            },
            {
              "value": "80",
              "description": "المركز عند 80"
            },
            {
              "value": "90",
              "description": "المركز عند 90"
            },
            {
              "value": "100",
              "description": "المركز عند 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cy",
          "description": "يحدد مركز القطع الناقص على المحور الرأسي (Y)",
          "values": [
            {
              "value": "0",
              "description": "المركز عند 0"
            },
            {
              "value": "10",
              "description": "المركز عند 10"
            },
            {
              "value": "20",
              "description": "المركز عند 20"
            },
            {
              "value": "30",
              "description": "المركز عند 30"
            },
            {
              "value": "40",
              "description": "المركز عند 40"
            },
            {
              "value": "50",
              "description": "المركز عند 50"
            },
            {
              "value": "60",
              "description": "المركز عند 60"
            },
            {
              "value": "70",
              "description": "المركز عند 70"
            },
            {
              "value": "80",
              "description": "المركز عند 80"
            },
            {
              "value": "90",
              "description": "المركز عند 90"
            },
            {
              "value": "100",
              "description": "المركز عند 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rx",
          "description": "يحدد نصف القطر الأفقي للقطع الناقص، يتحكم في عرض الشكل",
          "values": [
            {
              "value": "1",
              "description": "نصف قطر أفقي 1"
            },
            {
              "value": "5",
              "description": "نصف قطر أفقي 5"
            },
            {
              "value": "10",
              "description": "نصف قطر أفقي 10"
            },
            {
              "value": "20",
              "description": "نصف قطر أفقي 20"
            },
            {
              "value": "30",
              "description": "نصف قطر أفقي 30"
            },
            {
              "value": "40",
              "description": "نصف قطر أفقي 40"
            },
            {
              "value": "50",
              "description": "نصف قطر أفقي 50"
            },
            {
              "value": "60",
              "description": "نصف قطر أفقي 60"
            },
            {
              "value": "70",
              "description": "نصف قطر أفقي 70"
            },
            {
              "value": "80",
              "description": "نصف قطر أفقي 80"
            },
            {
              "value": "90",
              "description": "نصف قطر أفقي 90"
            },
            {
              "value": "100",
              "description": "نصف قطر أفقي 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "ry",
          "description": "يحدد نصف القطر الرأسي للقطع الناقص، يتحكم في ارتفاع الشكل",
          "values": [
            {
              "value": "1",
              "description": "نصف قطر رأسي 1"
            },
            {
              "value": "5",
              "description": "نصف قطر رأسي 5"
            },
            {
              "value": "10",
              "description": "نصف قطر رأسي 10"
            },
            {
              "value": "20",
              "description": "نصف قطر رأسي 20"
            },
            {
              "value": "25",
              "description": "نصف قطر رأسي 25"
            },
            {
              "value": "30",
              "description": "نصف قطر رأسي 30"
            },
            {
              "value": "40",
              "description": "نصف قطر رأسي 40"
            },
            {
              "value": "50",
              "description": "نصف قطر رأسي 50"
            },
            {
              "value": "60",
              "description": "نصف قطر رأسي 60"
            },
            {
              "value": "70",
              "description": "نصف قطر رأسي 70"
            },
            {
              "value": "80",
              "description": "نصف قطر رأسي 80"
            },
            {
              "value": "90",
              "description": "نصف قطر رأسي 90"
            },
            {
              "value": "100",
              "description": "نصف قطر رأسي 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون تعبئة القطع الناقص، يلون داخله بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة"
            },
            {
              "value": "#ff0000",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#0000ff",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#00ff00",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#ffff00",
              "description": "تعبئة باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "تعبئة باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "تعبئة باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "تعبئة باللون الرمادي"
            },
            {
              "value": "#9b59b6",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "#3498db",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "#e74c3c",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "#2ecc71",
              "description": "تعبئة باللون الأخضر"
            },
            {
              "value": "#f39c12",
              "description": "تعبئة باللون البرتقالي"
            },
            {
              "value": "purple",
              "description": "تعبئة باللون البنفسجي"
            },
            {
              "value": "red",
              "description": "تعبئة باللون الأحمر"
            },
            {
              "value": "blue",
              "description": "تعبئة باللون الأزرق"
            },
            {
              "value": "green",
              "description": "تعبئة باللون الأخضر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون حدود القطع الناقص، يلون محيطه بلون معين",
          "values": [
            {
              "value": "none",
              "description": "بدون حدود"
            },
            {
              "value": "#000000",
              "description": "حدود باللون الأسود"
            },
            {
              "value": "#ff0000",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#0000ff",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#00ff00",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "#ffff00",
              "description": "حدود باللون الأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "حدود باللون الوردي"
            },
            {
              "value": "#00ffff",
              "description": "حدود باللون السماوي"
            },
            {
              "value": "#cccccc",
              "description": "حدود باللون الرمادي"
            },
            {
              "value": "#e74c3c",
              "description": "حدود باللون الأحمر"
            },
            {
              "value": "#3498db",
              "description": "حدود باللون الأزرق"
            },
            {
              "value": "#2ecc71",
              "description": "حدود باللون الأخضر"
            },
            {
              "value": "black",
              "description": "حدود سوداء"
            },
            {
              "value": "red",
              "description": "حدود حمراء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك حدود القطع الناقص",
          "values": [
            {
              "value": "1",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5",
              "description": "سمك 5 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "opacity",
          "description": "يحدد شفافية القطع الناقص (من 0 إلى 1)",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "clipPath",
      "description": "يحدد منطقة قص لعناصر SVG، يخفي الأجزاء خارج هذه المنطقة",
      "properties": [
        {
          "name": "clipPathUnits",
          "description": "يحدد نظام الإحداثيات المستخدم لتعريف منطقة القص",
          "values": [
            {
              "value": "userSpaceOnUse",
              "description": "إحداثيات مطلقة مثل باقي عناصر SVG (الافتراضي)"
            },
            {
              "value": "objectBoundingBox",
              "description": "إحداثيات نسبية لصندوق العنصر المُطبَّق عليه القص (من 0 إلى 1)"
            }
          ]
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً لمنطقة القص، يُستدعى من خاصية clip-path في العنصر المراد قصه",
          "values": [
            {
              "value": "clip1",
              "description": "معرف منطقة القص"
            },
            {
              "value": "circleClip",
              "description": "معرف منطقة القص الدائرية"
            },
            {
              "value": "rectClip",
              "description": "معرف منطقة القص المستطيلة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "linearGradient",
      "description": "يحدد تدرجاً لونياً خطياً بين لونين أو أكثر، يملأ الأشكال بألوان متدرجة",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للتدرج، يمكن استخدامه لتعبئة الأشكال",
          "values": [
            {
              "value": "grad1",
              "description": "معرف التدرج"
            },
            {
              "value": "grad2",
              "description": "معرف التدرج"
            },
            {
              "value": "myGradient",
              "description": "معرف التدرج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "x1",
          "description": "يحدد نقطة بداية التدرج على المحور الأفقي",
          "values": [
            {
              "value": "0%",
              "description": "بداية من اليسار"
            },
            {
              "value": "10%",
              "description": "بداية من 10%"
            },
            {
              "value": "20%",
              "description": "بداية من 20%"
            },
            {
              "value": "30%",
              "description": "بداية من 30%"
            },
            {
              "value": "40%",
              "description": "بداية من 40%"
            },
            {
              "value": "50%",
              "description": "بداية من المنتصف"
            },
            {
              "value": "60%",
              "description": "بداية من 60%"
            },
            {
              "value": "70%",
              "description": "بداية من 70%"
            },
            {
              "value": "80%",
              "description": "بداية من 80%"
            },
            {
              "value": "90%",
              "description": "بداية من 90%"
            },
            {
              "value": "100%",
              "description": "بداية من اليمين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y1",
          "description": "يحدد نقطة بداية التدرج على المحور الرأسي",
          "values": [
            {
              "value": "0%",
              "description": "بداية من الأعلى"
            },
            {
              "value": "50%",
              "description": "بداية من المنتصف"
            },
            {
              "value": "100%",
              "description": "بداية من الأسفل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "x2",
          "description": "يحدد نقطة نهاية التدرج على المحور الأفقي",
          "values": [
            {
              "value": "0%",
              "description": "نهاية عند اليسار"
            },
            {
              "value": "50%",
              "description": "نهاية عند المنتصف"
            },
            {
              "value": "100%",
              "description": "نهاية عند اليمين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y2",
          "description": "يحدد نقطة نهاية التدرج على المحور الرأسي",
          "values": [
            {
              "value": "0%",
              "description": "نهاية عند الأعلى"
            },
            {
              "value": "50%",
              "description": "نهاية عند المنتصف"
            },
            {
              "value": "100%",
              "description": "نهاية عند الأسفل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "gradientUnits",
          "description": "يحدد وحدات قياس التدرج",
          "values": [
            {
              "value": "userSpaceOnUse",
              "description": "وحدات مطلقة"
            },
            {
              "value": "objectBoundingBox",
              "description": "وحدات نسبية لحجم العنصر (الافتراضي)"
            }
          ]
        },
        {
          "name": "spreadMethod",
          "description": "يحدد كيفية انتشار التدرج خارج حدوده",
          "values": [
            {
              "value": "pad",
              "description": "الاستمرار باللون الأخير (الافتراضي)"
            },
            {
              "value": "reflect",
              "description": "عكس التدرج"
            },
            {
              "value": "repeat",
              "description": "تكرار التدرج"
            }
          ]
        }
      ]
    },
    {
      "tag": "radialGradient",
      "description": "يحدد تدرجاً لونياً شعاعياً من مركز إلى الخارج، يملأ الأشكال بألوان متدرجة من المركز",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للتدرج الشعاعي، يمكن استخدامه لتعبئة الأشكال",
          "values": [
            {
              "value": "grad2",
              "description": "معرف التدرج"
            },
            {
              "value": "radialGrad",
              "description": "معرف التدرج الشعاعي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cx",
          "description": "يحدد مركز التدرج الشعاعي على المحور الأفقي",
          "values": [
            {
              "value": "0%",
              "description": "المركز عند اليسار"
            },
            {
              "value": "25%",
              "description": "المركز عند 25%"
            },
            {
              "value": "50%",
              "description": "المركز في المنتصف"
            },
            {
              "value": "75%",
              "description": "المركز عند 75%"
            },
            {
              "value": "100%",
              "description": "المركز عند اليمين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cy",
          "description": "يحدد مركز التدرج الشعاعي على المحور الرأسي",
          "values": [
            {
              "value": "0%",
              "description": "المركز عند الأعلى"
            },
            {
              "value": "25%",
              "description": "المركز عند 25%"
            },
            {
              "value": "50%",
              "description": "المركز في المنتصف"
            },
            {
              "value": "75%",
              "description": "المركز عند 75%"
            },
            {
              "value": "100%",
              "description": "المركز عند الأسفل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "r",
          "description": "يحدد نصف قطر التدرج الشعاعي، يتحكم في انتشار الألوان",
          "values": [
            {
              "value": "10%",
              "description": "نصف قطر 10%"
            },
            {
              "value": "25%",
              "description": "نصف قطر 25%"
            },
            {
              "value": "50%",
              "description": "نصف قطر 50%"
            },
            {
              "value": "75%",
              "description": "نصف قطر 75%"
            },
            {
              "value": "100%",
              "description": "نصف قطر 100%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fx",
          "description": "يحدد نقطة محور التدرج على المحور الأفقي (نقطة بداية التدرج)",
          "values": [
            {
              "value": "0%",
              "description": "نقطة المحور عند اليسار"
            },
            {
              "value": "25%",
              "description": "نقطة المحور عند 25%"
            },
            {
              "value": "50%",
              "description": "نقطة المحور في المنتصف"
            },
            {
              "value": "75%",
              "description": "نقطة المحور عند 75%"
            },
            {
              "value": "100%",
              "description": "نقطة المحور عند اليمين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fy",
          "description": "يحدد نقطة محور التدرج على المحور الرأسي (نقطة بداية التدرج)",
          "values": [
            {
              "value": "0%",
              "description": "نقطة المحور عند الأعلى"
            },
            {
              "value": "25%",
              "description": "نقطة المحور عند 25%"
            },
            {
              "value": "50%",
              "description": "نقطة المحور في المنتصف"
            },
            {
              "value": "75%",
              "description": "نقطة المحور عند 75%"
            },
            {
              "value": "100%",
              "description": "نقطة المحور عند الأسفل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "gradientUnits",
          "description": "يحدد وحدات قياس التدرج الشعاعي",
          "values": [
            {
              "value": "userSpaceOnUse",
              "description": "وحدات مطلقة"
            },
            {
              "value": "objectBoundingBox",
              "description": "وحدات نسبية لحجم العنصر (الافتراضي)"
            }
          ]
        },
        {
          "name": "spreadMethod",
          "description": "يحدد كيفية انتشار التدرج خارج حدوده",
          "values": [
            {
              "value": "pad",
              "description": "الاستمرار باللون الأخير (الافتراضي)"
            },
            {
              "value": "reflect",
              "description": "عكس التدرج"
            },
            {
              "value": "repeat",
              "description": "تكرار التدرج"
            }
          ]
        }
      ]
    },
    {
      "tag": "stop",
      "description": "يحدد نقطة لون داخل التدرج (خطي أو شعاعي)، يتحكم في الألوان في نقاط معينة",
      "properties": [
        {
          "name": "offset",
          "description": "يحدد موقع النقطة في التدرج (0% إلى 100%)، يتحكم في مكان اللون",
          "values": [
            {
              "value": "0%",
              "description": "بداية التدرج"
            },
            {
              "value": "10%",
              "description": "عند 10%"
            },
            {
              "value": "20%",
              "description": "عند 20%"
            },
            {
              "value": "25%",
              "description": "عند 25%"
            },
            {
              "value": "30%",
              "description": "عند 30%"
            },
            {
              "value": "33%",
              "description": "عند 33%"
            },
            {
              "value": "40%",
              "description": "عند 40%"
            },
            {
              "value": "50%",
              "description": "منتصف التدرج"
            },
            {
              "value": "60%",
              "description": "عند 60%"
            },
            {
              "value": "66%",
              "description": "عند 66%"
            },
            {
              "value": "70%",
              "description": "عند 70%"
            },
            {
              "value": "75%",
              "description": "عند 75%"
            },
            {
              "value": "80%",
              "description": "عند 80%"
            },
            {
              "value": "90%",
              "description": "عند 90%"
            },
            {
              "value": "100%",
              "description": "نهاية التدرج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stop-color",
          "description": "يحدد اللون عند هذه النقطة في التدرج، يحدد لون التدرج",
          "values": [
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#ffffff",
              "description": "لون أبيض"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#3498db",
              "description": "لون أزرق"
            },
            {
              "value": "#e74c3c",
              "description": "لون أحمر"
            },
            {
              "value": "#2ecc71",
              "description": "لون أخضر"
            },
            {
              "value": "#f39c12",
              "description": "لون برتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "لون بنفسجي"
            },
            {
              "value": "#1abc9c",
              "description": "لون أزرق مخضر"
            },
            {
              "value": "#34495e",
              "description": "لون أزرق داكن"
            },
            {
              "value": "#e67e22",
              "description": "لون برتقالي داكن"
            },
            {
              "value": "#c0392b",
              "description": "لون أحمر داكن"
            },
            {
              "value": "#8e44ad",
              "description": "لون بنفسجي داكن"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stop-opacity",
          "description": "يحدد شفافية اللون عند هذه النقطة (0 إلى 1)، يتحكم في شفافية التدرج",
          "values": [
            {
              "value": "0",
              "description": "شفاف بالكامل"
            },
            {
              "value": "0.1",
              "description": "شفافية 10%"
            },
            {
              "value": "0.2",
              "description": "شفافية 20%"
            },
            {
              "value": "0.3",
              "description": "شفافية 30%"
            },
            {
              "value": "0.4",
              "description": "شفافية 40%"
            },
            {
              "value": "0.5",
              "description": "نصف شفاف"
            },
            {
              "value": "0.6",
              "description": "شفافية 60%"
            },
            {
              "value": "0.7",
              "description": "شفافية 70%"
            },
            {
              "value": "0.8",
              "description": "شفافية 80%"
            },
            {
              "value": "0.9",
              "description": "شفافية 90%"
            },
            {
              "value": "1",
              "description": "معتم بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "symbol",
      "description": "يحدد رمزاً قابلاً لإعادة الاستخدام، مشابه لـ defs لكن يمكن استخدامه مع viewBox خاص به",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للرمز، يمكن استدعاؤه بواسطة use",
          "values": [
            {
              "value": "icon",
              "description": "معرف الرمز"
            },
            {
              "value": "star",
              "description": "معرف الرمز"
            },
            {
              "value": "heart",
              "description": "معرف الرمز"
            },
            {
              "value": "logo",
              "description": "معرف الرمز"
            }
          ],
          "freeInput": true
        },
        {
          "name": "viewBox",
          "description": "يحدد إحداثيات الرمز وقياساته، يسمح بتكبير وتصغير الرمز",
          "values": [
            {
              "value": "0 0 24 24",
              "description": "رمز بحجم 24×24"
            },
            {
              "value": "0 0 16 16",
              "description": "رمز بحجم 16×16"
            },
            {
              "value": "0 0 32 32",
              "description": "رمز بحجم 32×32"
            },
            {
              "value": "0 0 100 100",
              "description": "رمز بحجم 100×100"
            },
            {
              "value": "0 0 48 48",
              "description": "رمز بحجم 48×48"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد العرض الافتراضي للرمز",
          "values": [
            {
              "value": "24",
              "description": "عرض 24"
            },
            {
              "value": "32",
              "description": "عرض 32"
            },
            {
              "value": "48",
              "description": "عرض 48"
            },
            {
              "value": "64",
              "description": "عرض 64"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد الارتفاع الافتراضي للرمز",
          "values": [
            {
              "value": "24",
              "description": "ارتفاع 24"
            },
            {
              "value": "32",
              "description": "ارتفاع 32"
            },
            {
              "value": "48",
              "description": "ارتفاع 48"
            },
            {
              "value": "64",
              "description": "ارتفاع 64"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "foreignObject",
      "description": "يضمّن محتوى HTML أو XML داخل SVG، يسمح بإضافة عناصر HTML داخل الرسم",
      "properties": [
        {
          "name": "x",
          "description": "يحدد موقع المحتوى المضمن على المحور الأفقي (X)",
          "values": [
            {
              "value": "0",
              "description": "الموضع الأفقي 0"
            },
            {
              "value": "10",
              "description": "الموضع الأفقي 10"
            },
            {
              "value": "20",
              "description": "الموضع الأفقي 20"
            },
            {
              "value": "30",
              "description": "الموضع الأفقي 30"
            },
            {
              "value": "40",
              "description": "الموضع الأفقي 40"
            },
            {
              "value": "50",
              "description": "الموضع الأفقي 50"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y",
          "description": "يحدد موقع المحتوى المضمن على المحور الرأسي (Y)",
          "values": [
            {
              "value": "0",
              "description": "الموضع الرأسي 0"
            },
            {
              "value": "10",
              "description": "الموضع الرأسي 10"
            },
            {
              "value": "20",
              "description": "الموضع الرأسي 20"
            },
            {
              "value": "30",
              "description": "الموضع الرأسي 30"
            },
            {
              "value": "40",
              "description": "الموضع الرأسي 40"
            },
            {
              "value": "50",
              "description": "الموضع الرأسي 50"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض المحتوى المضمن، يتحكم في حجم المحتوى",
          "values": [
            {
              "value": "50",
              "description": "عرض 50"
            },
            {
              "value": "100",
              "description": "عرض 100"
            },
            {
              "value": "200",
              "description": "عرض 200"
            },
            {
              "value": "300",
              "description": "عرض 300"
            },
            {
              "value": "400",
              "description": "عرض 400"
            },
            {
              "value": "500",
              "description": "عرض 500"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع المحتوى المضمن، يتحكم في حجم المحتوى",
          "values": [
            {
              "value": "50",
              "description": "ارتفاع 50"
            },
            {
              "value": "100",
              "description": "ارتفاع 100"
            },
            {
              "value": "200",
              "description": "ارتفاع 200"
            },
            {
              "value": "300",
              "description": "ارتفاع 300"
            },
            {
              "value": "400",
              "description": "ارتفاع 400"
            },
            {
              "value": "500",
              "description": "ارتفاع 500"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "mask",
      "description": "يحدد قناعاً لإخفاء أو إظهار أجزاء من العناصر، يتحكم في شفافية الأجزاء",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للقناع، يمكن تطبيقه على عناصر أخرى",
          "values": [
            {
              "value": "mask1",
              "description": "معرف القناع"
            },
            {
              "value": "circleMask",
              "description": "معرف القناع الدائري"
            },
            {
              "value": "fadeMask",
              "description": "معرف القناع المتدرج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "maskUnits",
          "description": "يحدد نظام الإحداثيات المستخدم للقناع",
          "values": [
            {
              "value": "userSpaceOnUse",
              "description": "وحدات مطلقة"
            },
            {
              "value": "objectBoundingBox",
              "description": "وحدات نسبية لحجم العنصر (الافتراضي)"
            }
          ]
        },
        {
          "name": "maskContentUnits",
          "description": "يحدد نظام الإحداثيات المستخدم لمحتوى القناع",
          "values": [
            {
              "value": "userSpaceOnUse",
              "description": "وحدات مطلقة"
            },
            {
              "value": "objectBoundingBox",
              "description": "وحدات نسبية لحجم العنصر (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "pattern",
      "description": "يحدد نمطاً متكرراً (مربعات، خطوط) لتعبئة الأشكال، يملأ العناصر بنمط مكرر",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للنمط، يمكن استخدامه لتعبئة الأشكال",
          "values": [
            {
              "value": "pattern1",
              "description": "معرف النمط"
            },
            {
              "value": "dots",
              "description": "معرف النمط المنقط"
            },
            {
              "value": "stripes",
              "description": "معرف النمط المخطط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض النمط المتكرر، يتحكم في حجم وحدة النمط",
          "values": [
            {
              "value": "5",
              "description": "عرض الوحدة 5"
            },
            {
              "value": "10",
              "description": "عرض الوحدة 10"
            },
            {
              "value": "20",
              "description": "عرض الوحدة 20"
            },
            {
              "value": "30",
              "description": "عرض الوحدة 30"
            },
            {
              "value": "40",
              "description": "عرض الوحدة 40"
            },
            {
              "value": "50",
              "description": "عرض الوحدة 50"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع النمط المتكرر، يتحكم في حجم وحدة النمط",
          "values": [
            {
              "value": "5",
              "description": "ارتفاع الوحدة 5"
            },
            {
              "value": "10",
              "description": "ارتفاع الوحدة 10"
            },
            {
              "value": "20",
              "description": "ارتفاع الوحدة 20"
            },
            {
              "value": "30",
              "description": "ارتفاع الوحدة 30"
            },
            {
              "value": "40",
              "description": "ارتفاع الوحدة 40"
            },
            {
              "value": "50",
              "description": "ارتفاع الوحدة 50"
            }
          ],
          "freeInput": true
        },
        {
          "name": "patternUnits",
          "description": "يحدد وحدات قياس النمط، يتحكم في كيفية تطبيق النمط",
          "values": [
            {
              "value": "userSpaceOnUse",
              "description": "يقاس بالبكسل"
            },
            {
              "value": "objectBoundingBox",
              "description": "يقاس بنسبة حجم العنصر"
            }
          ]
        },
        {
          "name": "patternTransform",
          "description": "يطبق تحويلاً على النمط (تدوير، تكبير، نقل)",
          "values": [
            {
              "value": "rotate(45)",
              "description": "يدور النمط 45 درجة"
            },
            {
              "value": "scale(1.5)",
              "description": "يكبر النمط بنسبة 150%"
            },
            {
              "value": "translate(10,10)",
              "description": "ينقل النمط 10 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "animate",
      "description": "يضيف حركة متحركة لعنصر SVG، يغير خصائص العنصر تدريجياً مع مرور الوقت",
      "properties": [
        {
          "name": "attributeName",
          "description": "يحدد الخاصية التي ستتحرك (مثل fill أو opacity أو transform)، يحدد ما سيتغير",
          "values": [
            {
              "value": "fill",
              "description": "يتغير لون التعبئة"
            },
            {
              "value": "opacity",
              "description": "تتغير الشفافية"
            },
            {
              "value": "r",
              "description": "يتغير نصف القطر"
            },
            {
              "value": "cx",
              "description": "يتغير موقع المركز الأفقي"
            },
            {
              "value": "cy",
              "description": "يتغير موقع المركز الرأسي"
            },
            {
              "value": "width",
              "description": "يتغير العرض"
            },
            {
              "value": "height",
              "description": "يتغير الارتفاع"
            },
            {
              "value": "x",
              "description": "يتغير الموضع الأفقي"
            },
            {
              "value": "y",
              "description": "يتغير الموضع الرأسي"
            },
            {
              "value": "stroke",
              "description": "يتغير لون الحدود"
            },
            {
              "value": "stroke-width",
              "description": "يتغير سمك الحدود"
            },
            {
              "value": "transform",
              "description": "يتغير التحويل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "from",
          "description": "يحدد القيمة الابتدائية للخاصية، قيمة البداية للحركة",
          "values": [
            {
              "value": "red",
              "description": "يبدأ من اللون الأحمر"
            },
            {
              "value": "0",
              "description": "يبدأ من 0"
            },
            {
              "value": "10",
              "description": "يبدأ من 10"
            },
            {
              "value": "0%",
              "description": "يبدأ من 0%"
            },
            {
              "value": "transparent",
              "description": "يبدأ شفافاً"
            },
            {
              "value": "0 0",
              "description": "يبدأ من الموقع 0,0"
            },
            {
              "value": "1",
              "description": "يبدأ من 1"
            }
          ],
          "freeInput": true
        },
        {
          "name": "to",
          "description": "يحدد القيمة النهائية للخاصية، قيمة النهاية للحركة",
          "values": [
            {
              "value": "blue",
              "description": "ينتهي باللون الأزرق"
            },
            {
              "value": "100",
              "description": "ينتهي عند 100"
            },
            {
              "value": "50",
              "description": "ينتهي عند 50"
            },
            {
              "value": "100%",
              "description": "ينتهي عند 100%"
            },
            {
              "value": "opaque",
              "description": "ينتهي معتماً"
            },
            {
              "value": "100 100",
              "description": "ينتهي عند الموقع 100,100"
            },
            {
              "value": "2",
              "description": "ينتهي عند 2"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dur",
          "description": "يحدد مدة الحركة بالثواني، يتحكم في سرعة الحركة",
          "values": [
            {
              "value": "0.1s",
              "description": "مدة الحركة 0.1 ثانية"
            },
            {
              "value": "0.5s",
              "description": "مدة الحركة نصف ثانية"
            },
            {
              "value": "1s",
              "description": "مدة الحركة ثانية واحدة"
            },
            {
              "value": "2s",
              "description": "مدة الحركة ثانيتين"
            },
            {
              "value": "3s",
              "description": "مدة الحركة 3 ثواني"
            },
            {
              "value": "4s",
              "description": "مدة الحركة 4 ثواني"
            },
            {
              "value": "5s",
              "description": "مدة الحركة 5 ثواني"
            },
            {
              "value": "10s",
              "description": "مدة الحركة 10 ثواني"
            }
          ],
          "freeInput": true
        },
        {
          "name": "repeatCount",
          "description": "يحدد عدد مرات تكرار الحركة، يتحكم في تكرار الرسوم المتحركة",
          "values": [
            {
              "value": "indefinite",
              "description": "تكرر إلى ما لا نهاية"
            },
            {
              "value": "1",
              "description": "تكرر مرة واحدة"
            },
            {
              "value": "2",
              "description": "تكرر مرتين"
            },
            {
              "value": "3",
              "description": "تكرر 3 مرات"
            },
            {
              "value": "4",
              "description": "تكرر 4 مرات"
            },
            {
              "value": "5",
              "description": "تكرر 5 مرات"
            },
            {
              "value": "10",
              "description": "تكرر 10 مرات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "begin",
          "description": "يحدد متى تبدأ الحركة، مثل وقت محدد أو عند حدث معين",
          "values": [
            {
              "value": "0s",
              "description": "تبدأ فوراً"
            },
            {
              "value": "1s",
              "description": "تبدأ بعد ثانية واحدة"
            },
            {
              "value": "2s",
              "description": "تبدأ بعد ثانيتين"
            },
            {
              "value": "click",
              "description": "تبدأ عند النقر"
            },
            {
              "value": "mouseover",
              "description": "تبدأ عند تمرير الماوس"
            },
            {
              "value": "indefinite",
              "description": "لا تبدأ تلقائياً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد ما يحدث بعد انتهاء الحركة",
          "values": [
            {
              "value": "freeze",
              "description": "يبقى على الحالة النهائية"
            },
            {
              "value": "remove",
              "description": "يعود للحالة الأصلية (الافتراضي)"
            }
          ]
        },
        {
          "name": "calcMode",
          "description": "يحدد نمط حساب الحركة بين from و to",
          "values": [
            {
              "value": "linear",
              "description": "حركة خطية (الافتراضي)"
            },
            {
              "value": "discrete",
              "description": "حركة متقطعة (قفزات)"
            },
            {
              "value": "paced",
              "description": "حركة بسرعة ثابتة"
            },
            {
              "value": "spline",
              "description": "حركة منحنية (مع keySplines)"
            }
          ]
        }
      ]
    },
    {
      "tag": "animateTransform",
      "description": "يضيف حركة تحويل لعنصر SVG (تدوير، تكبير، نقل)، يحرك العنصر أو يدوره أو يكبره",
      "properties": [
        {
          "name": "attributeName",
          "description": "يحدد أن التحويل هو الذي سيتحرك، يشير إلى خاصية transform",
          "values": [
            {
              "value": "transform",
              "description": "تحريك خاصية التحويل"
            }
          ]
        },
        {
          "name": "type",
          "description": "يحدد نوع التحويل (تدوير، تكبير، نقل)، يحدد نوع الحركة",
          "values": [
            {
              "value": "rotate",
              "description": "تدوير العنصر"
            },
            {
              "value": "scale",
              "description": "تكبير أو تصغير العنصر"
            },
            {
              "value": "translate",
              "description": "نقل العنصر"
            },
            {
              "value": "skewX",
              "description": "إمالة أفقية"
            },
            {
              "value": "skewY",
              "description": "إمالة عمودية"
            }
          ]
        },
        {
          "name": "from",
          "description": "يحدد قيمة البداية للتحويل، بداية الحركة",
          "values": [
            {
              "value": "0",
              "description": "بداية التدوير من 0"
            },
            {
              "value": "1",
              "description": "بداية التكبير من 1"
            },
            {
              "value": "0,0",
              "description": "بداية النقل من 0,0"
            },
            {
              "value": "0 0",
              "description": "بداية النقل من 0 0"
            },
            {
              "value": "0,0 0",
              "description": "بداية التدوير من 0 حول 0,0"
            }
          ],
          "freeInput": true
        },
        {
          "name": "to",
          "description": "يحدد قيمة النهاية للتحويل، نهاية الحركة",
          "values": [
            {
              "value": "360",
              "description": "نهاية التدوير عند 360"
            },
            {
              "value": "1.5",
              "description": "نهاية التكبير عند 1.5"
            },
            {
              "value": "100,100",
              "description": "نهاية النقل عند 100,100"
            },
            {
              "value": "100 100",
              "description": "نهاية النقل عند 100 100"
            },
            {
              "value": "360,50,50",
              "description": "نهاية التدوير عند 360 حول 50,50"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dur",
          "description": "يحدد مدة الحركة بالثواني، يتحكم في سرعة الحركة",
          "values": [
            {
              "value": "0.5s",
              "description": "مدة الحركة نصف ثانية"
            },
            {
              "value": "1s",
              "description": "مدة الحركة ثانية واحدة"
            },
            {
              "value": "2s",
              "description": "مدة الحركة ثانيتين"
            },
            {
              "value": "3s",
              "description": "مدة الحركة 3 ثواني"
            },
            {
              "value": "5s",
              "description": "مدة الحركة 5 ثواني"
            },
            {
              "value": "10s",
              "description": "مدة الحركة 10 ثواني"
            }
          ],
          "freeInput": true
        },
        {
          "name": "repeatCount",
          "description": "يحدد عدد مرات تكرار الحركة، يتحكم في تكرار الرسوم المتحركة",
          "values": [
            {
              "value": "indefinite",
              "description": "تكرر إلى ما لا نهاية"
            },
            {
              "value": "1",
              "description": "تكرر مرة واحدة"
            },
            {
              "value": "2",
              "description": "تكرر مرتين"
            },
            {
              "value": "3",
              "description": "تكرر 3 مرات"
            },
            {
              "value": "5",
              "description": "تكرر 5 مرات"
            },
            {
              "value": "10",
              "description": "تكرر 10 مرات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "begin",
          "description": "يحدد متى تبدأ الحركة",
          "values": [
            {
              "value": "0s",
              "description": "تبدأ فوراً"
            },
            {
              "value": "1s",
              "description": "تبدأ بعد ثانية واحدة"
            },
            {
              "value": "click",
              "description": "تبدأ عند النقر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد ما يحدث بعد انتهاء الحركة",
          "values": [
            {
              "value": "freeze",
              "description": "يبقى على الحالة النهائية"
            },
            {
              "value": "remove",
              "description": "يعود للحالة الأصلية (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "animateMotion",
      "description": "يحريك عنصر SVG على طول مسار محدد، يحرك العنصر على شكل مسار",
      "properties": [
        {
          "name": "path",
          "description": "يحدد المسار الذي سيتحرك عليه العنصر، يحدد طريق الحركة",
          "values": [
            {
              "value": "M 10 10 L 90 90",
              "description": "مسار خط مستقيم"
            },
            {
              "value": "M 10 50 C 30 10 70 10 90 50",
              "description": "مسار منحني"
            },
            {
              "value": "M 50 10 A 40 40 0 1 1 50 90",
              "description": "مسار دائري"
            },
            {
              "value": "M 10 10 L 50 50 L 90 10",
              "description": "مسار مثلث"
            },
            {
              "value": "M 50 10 Q 10 50 50 90 Q 90 50 50 10",
              "description": "مسار قلبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dur",
          "description": "يحدد مدة الحركة بالثواني، يتحكم في سرعة الحركة على المسار",
          "values": [
            {
              "value": "1s",
              "description": "مدة الحركة ثانية واحدة"
            },
            {
              "value": "2s",
              "description": "مدة الحركة ثانيتين"
            },
            {
              "value": "3s",
              "description": "مدة الحركة 3 ثواني"
            },
            {
              "value": "4s",
              "description": "مدة الحركة 4 ثواني"
            },
            {
              "value": "5s",
              "description": "مدة الحركة 5 ثواني"
            },
            {
              "value": "10s",
              "description": "مدة الحركة 10 ثواني"
            }
          ],
          "freeInput": true
        },
        {
          "name": "repeatCount",
          "description": "يحدد عدد مرات تكرار الحركة على المسار، يتحكم في تكرار الحركة",
          "values": [
            {
              "value": "indefinite",
              "description": "تكرر إلى ما لا نهاية"
            },
            {
              "value": "1",
              "description": "تكرر مرة واحدة"
            },
            {
              "value": "2",
              "description": "تكرر مرتين"
            },
            {
              "value": "3",
              "description": "تكرر 3 مرات"
            },
            {
              "value": "5",
              "description": "تكرر 5 مرات"
            },
            {
              "value": "10",
              "description": "تكرر 10 مرات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rotate",
          "description": "يحدد اتجاه العنصر أثناء الحركة، يدير العنصر باتجاه المسار",
          "values": [
            {
              "value": "auto",
              "description": "يدير العنصر تلقائياً باتجاه المسار"
            },
            {
              "value": "auto-reverse",
              "description": "يدير العنصر عكس اتجاه المسار"
            },
            {
              "value": "0",
              "description": "لا يدير العنصر (يبقى بزاوية ثابتة)"
            },
            {
              "value": "90",
              "description": "يدير العنصر بزاوية 90 درجة"
            },
            {
              "value": "180",
              "description": "يدير العنصر بزاوية 180 درجة"
            }
          ]
        },
        {
          "name": "begin",
          "description": "يحدد متى تبدأ الحركة على المسار",
          "values": [
            {
              "value": "0s",
              "description": "تبدأ فوراً"
            },
            {
              "value": "1s",
              "description": "تبدأ بعد ثانية واحدة"
            },
            {
              "value": "click",
              "description": "تبدأ عند النقر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد ما يحدث بعد انتهاء الحركة",
          "values": [
            {
              "value": "freeze",
              "description": "يبقى على الحالة النهائية"
            },
            {
              "value": "remove",
              "description": "يعود للحالة الأصلية (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "title",
      "description": "يضيف عنواناً نصياً للرسم أو لعنصر داخله، تستخدمه قارئات الشاشة ويظهر كتلميح عند تمرير الماوس فوق العنصر",
      "properties": []
    },
    {
      "tag": "desc",
      "description": "يضيف وصفاً نصياً تفصيلياً للرسم أو لعنصر داخله، يساعد قارئات الشاشة على شرح محتوى الرسم للمكفوفين",
      "properties": []
    },
    {
      "tag": "tspan",
      "description": "يقسّم نص عنصر text إلى أجزاء صغيرة، يسمح بتنسيق كل جزء بشكل مستقل أو وضعه في موضع مختلف ضمن نفس السطر",
      "properties": [
        {
          "name": "x",
          "description": "يحدد موقع هذا الجزء من النص على المحور الأفقي (X)، يبدأ سطراً جديداً من هذا الموضع",
          "values": [
            {
              "value": "0",
              "description": "الموضع الأفقي 0"
            },
            {
              "value": "10",
              "description": "الموضع الأفقي 10"
            },
            {
              "value": "20",
              "description": "الموضع الأفقي 20"
            },
            {
              "value": "30",
              "description": "الموضع الأفقي 30"
            },
            {
              "value": "40",
              "description": "الموضع الأفقي 40"
            },
            {
              "value": "50",
              "description": "الموضع الأفقي 50"
            },
            {
              "value": "100",
              "description": "الموضع الأفقي 100"
            },
            {
              "value": "150",
              "description": "الموضع الأفقي 150"
            },
            {
              "value": "200",
              "description": "الموضع الأفقي 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y",
          "description": "يحدد موقع هذا الجزء من النص على المحور الرأسي (Y)",
          "values": [
            {
              "value": "0",
              "description": "الموضع الرأسي 0"
            },
            {
              "value": "10",
              "description": "الموضع الرأسي 10"
            },
            {
              "value": "20",
              "description": "الموضع الرأسي 20"
            },
            {
              "value": "30",
              "description": "الموضع الرأسي 30"
            },
            {
              "value": "40",
              "description": "الموضع الرأسي 40"
            },
            {
              "value": "50",
              "description": "الموضع الرأسي 50"
            },
            {
              "value": "100",
              "description": "الموضع الرأسي 100"
            },
            {
              "value": "150",
              "description": "الموضع الرأسي 150"
            },
            {
              "value": "200",
              "description": "الموضع الرأسي 200"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dx",
          "description": "يحدد إزاحة أفقية عن السطر السابق",
          "values": [
            {
              "value": "0",
              "description": "بدون إزاحة"
            },
            {
              "value": "5",
              "description": "إزاحة 5 بكسل"
            },
            {
              "value": "10",
              "description": "إزاحة 10 بكسل"
            },
            {
              "value": "20",
              "description": "إزاحة 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dy",
          "description": "يحدد إزاحة رأسية عن السطر السابق، يستخدم للانتقال لسطر جديد داخل نفس عنصر text",
          "values": [
            {
              "value": "0",
              "description": "بدون إزاحة"
            },
            {
              "value": "5",
              "description": "إزاحة 5 بكسل"
            },
            {
              "value": "10",
              "description": "إزاحة 10 بكسل"
            },
            {
              "value": "20",
              "description": "ينزل سطراً بمقدار 20 بكسل"
            },
            {
              "value": "30",
              "description": "ينزل سطراً بمقدار 30 بكسل"
            },
            {
              "value": "1em",
              "description": "إزاحة بحجم خط واحد"
            },
            {
              "value": "1.5em",
              "description": "إزاحة بحجم خط ونصف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill",
          "description": "يحدد لون هذا الجزء من النص فقط، يخالف لون بقية النص",
          "values": [
            {
              "value": "#ff0000",
              "description": "يلون هذا الجزء بالأحمر"
            },
            {
              "value": "#0000ff",
              "description": "يلون هذا الجزء بالأزرق"
            },
            {
              "value": "#00ff00",
              "description": "يلون هذا الجزء بالأخضر"
            },
            {
              "value": "#ffff00",
              "description": "يلون هذا الجزء بالأصفر"
            },
            {
              "value": "#ff00ff",
              "description": "يلون هذا الجزء بالوردي"
            },
            {
              "value": "#00ffff",
              "description": "يلون هذا الجزء بالسماوي"
            },
            {
              "value": "#cccccc",
              "description": "يلون هذا الجزء بالرمادي"
            },
            {
              "value": "#3498db",
              "description": "يلون هذا الجزء بالأزرق"
            },
            {
              "value": "#e74c3c",
              "description": "يلون هذا الجزء بالأحمر"
            },
            {
              "value": "#2ecc71",
              "description": "يلون هذا الجزء بالأخضر"
            },
            {
              "value": "#f39c12",
              "description": "يلون هذا الجزء بالبرتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "يلون هذا الجزء بالبنفسجي"
            },
            {
              "value": "red",
              "description": "يلون هذا الجزء بالأحمر"
            },
            {
              "value": "blue",
              "description": "يلون هذا الجزء بالأزرق"
            },
            {
              "value": "green",
              "description": "يلون هذا الجزء بالأخضر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-size",
          "description": "يحدد حجم هذا الجزء من النص فقط",
          "values": [
            {
              "value": "10",
              "description": "حجم 10 بكسل"
            },
            {
              "value": "12",
              "description": "حجم 12 بكسل"
            },
            {
              "value": "14",
              "description": "حجم 14 بكسل"
            },
            {
              "value": "16",
              "description": "حجم 16 بكسل"
            },
            {
              "value": "18",
              "description": "حجم 18 بكسل"
            },
            {
              "value": "20",
              "description": "حجم 20 بكسل"
            },
            {
              "value": "24",
              "description": "حجم 24 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-weight",
          "description": "يحدد سمك هذا الجزء من النص",
          "values": [
            {
              "value": "normal",
              "description": "سمك عادي"
            },
            {
              "value": "bold",
              "description": "خط عريض"
            }
          ]
        },
        {
          "name": "font-style",
          "description": "يحدد نمط هذا الجزء من النص",
          "values": [
            {
              "value": "normal",
              "description": "نمط عادي"
            },
            {
              "value": "italic",
              "description": "خط مائل"
            }
          ]
        }
      ]
    },
    {
      "tag": "textPath",
      "description": "يجعل النص يتبع شكل مسار مرسوم مسبقاً بدلاً من الظهور على خط مستقيم، يستخدم للنصوص الدائرية أو المنحنية",
      "properties": [
        {
          "name": "href",
          "description": "يحدد معرف المسار الذي سيتبعه النص",
          "values": [
            {
              "value": "#curve1",
              "description": "يتبع النص المسار ذو المعرف curve1"
            },
            {
              "value": "#path1",
              "description": "يتبع النص المسار ذو المعرف path1"
            },
            {
              "value": "#circlePath",
              "description": "يتبع النص المسار الدائري"
            }
          ],
          "freeInput": true
        },
        {
          "name": "startOffset",
          "description": "يحدد مكان بداية النص على المسار (نسبة مئوية من طول المسار)",
          "values": [
            {
              "value": "0%",
              "description": "بداية المسار"
            },
            {
              "value": "25%",
              "description": "ربع المسار"
            },
            {
              "value": "50%",
              "description": "منتصف المسار"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع المسار"
            },
            {
              "value": "100%",
              "description": "نهاية المسار"
            },
            {
              "value": "10%",
              "description": "10% من المسار"
            },
            {
              "value": "30%",
              "description": "30% من المسار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "method",
          "description": "يحدد كيفية عرض النص على المسار",
          "values": [
            {
              "value": "align",
              "description": "محاذاة النص على المسار (الافتراضي)"
            },
            {
              "value": "stretch",
              "description": "تمديد النص ليتناسب مع المسار"
            }
          ]
        },
        {
          "name": "spacing",
          "description": "يحدد توزيع المسافات بين الحروف على المسار",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي (الافتراضي)"
            },
            {
              "value": "exact",
              "description": "دقيق"
            }
          ]
        }
      ]
    },
    {
      "tag": "marker",
      "description": "يحدد شكلاً صغيراً (كسهم أو دائرة) يوضع تلقائياً عند بداية أو نهاية أو زوايا الخطوط والمسارات",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعلامة، يُستدعى من خاصية marker-end أو marker-start في خط أو مسار",
          "values": [
            {
              "value": "arrow",
              "description": "معرف علامة السهم"
            },
            {
              "value": "dot",
              "description": "معرف علامة النقطة"
            },
            {
              "value": "circle",
              "description": "معرف علامة الدائرة"
            },
            {
              "value": "triangle",
              "description": "معرف علامة المثلث"
            }
          ],
          "freeInput": true
        },
        {
          "name": "markerWidth",
          "description": "يحدد عرض مساحة رسم العلامة",
          "values": [
            {
              "value": "5",
              "description": "عرض 5"
            },
            {
              "value": "10",
              "description": "عرض 10"
            },
            {
              "value": "15",
              "description": "عرض 15"
            },
            {
              "value": "20",
              "description": "عرض 20"
            }
          ],
          "freeInput": true
        },
        {
          "name": "markerHeight",
          "description": "يحدد ارتفاع مساحة رسم العلامة",
          "values": [
            {
              "value": "5",
              "description": "ارتفاع 5"
            },
            {
              "value": "10",
              "description": "ارتفاع 10"
            },
            {
              "value": "15",
              "description": "ارتفاع 15"
            },
            {
              "value": "20",
              "description": "ارتفاع 20"
            }
          ],
          "freeInput": true
        },
        {
          "name": "orient",
          "description": "يحدد اتجاه دوران العلامة، يجعلها تتبع اتجاه الخط تلقائياً",
          "values": [
            {
              "value": "auto",
              "description": "تدور العلامة تلقائياً حسب اتجاه الخط"
            },
            {
              "value": "auto-start-reverse",
              "description": "تدور تلقائياً مع عكس البداية"
            },
            {
              "value": "0",
              "description": "بدون دوران، تبقى بنفس الاتجاه دائماً"
            },
            {
              "value": "45",
              "description": "تدور 45 درجة"
            },
            {
              "value": "90",
              "description": "تدور 90 درجة"
            },
            {
              "value": "180",
              "description": "تدور 180 درجة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "refX",
          "description": "يحدد نقطة مرجع العلامة على المحور الأفقي (نقطة الارتكاز)",
          "values": [
            {
              "value": "0",
              "description": "المرجع عند 0"
            },
            {
              "value": "5",
              "description": "المرجع عند 5"
            },
            {
              "value": "10",
              "description": "المرجع عند 10"
            }
          ],
          "freeInput": true
        },
        {
          "name": "refY",
          "description": "يحدد نقطة مرجع العلامة على المحور الرأسي (نقطة الارتكاز)",
          "values": [
            {
              "value": "0",
              "description": "المرجع عند 0"
            },
            {
              "value": "5",
              "description": "المرجع عند 5"
            },
            {
              "value": "10",
              "description": "المرجع عند 10"
            }
          ],
          "freeInput": true
        },
        {
          "name": "markerUnits",
          "description": "يحدد وحدات قياس العلامة",
          "values": [
            {
              "value": "strokeWidth",
              "description": "نسبة لسمك الخط (الافتراضي)"
            },
            {
              "value": "userSpaceOnUse",
              "description": "وحدات مطلقة"
            }
          ]
        }
      ]
    },
    {
      "tag": "filter",
      "description": "يحدد مجموعة من التأثيرات البصرية (ضبابية، ظل، ألوان) يمكن تطبيقها على أي عنصر SVG عبر خاصية filter",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للتأثير، يُستدعى من خاصية filter في العنصر المراد تأثيره",
          "values": [
            {
              "value": "blur1",
              "description": "معرف تأثير الضبابية"
            },
            {
              "value": "shadow",
              "description": "معرف تأثير الظل"
            },
            {
              "value": "glow",
              "description": "معرف تأثير التوهج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "filterUnits",
          "description": "يحدد نظام الإحداثيات المستخدم للتأثير",
          "values": [
            {
              "value": "userSpaceOnUse",
              "description": "وحدات مطلقة"
            },
            {
              "value": "objectBoundingBox",
              "description": "وحدات نسبية لحجم العنصر (الافتراضي)"
            }
          ]
        },
        {
          "name": "x",
          "description": "يحدد موقع منطقة التأثير على المحور الأفقي",
          "values": [
            {
              "value": "-10%",
              "description": "-10% من حجم العنصر"
            },
            {
              "value": "0%",
              "description": "بداية العنصر"
            },
            {
              "value": "10%",
              "description": "10% من حجم العنصر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "y",
          "description": "يحدد موقع منطقة التأثير على المحور الرأسي",
          "values": [
            {
              "value": "-10%",
              "description": "-10% من حجم العنصر"
            },
            {
              "value": "0%",
              "description": "بداية العنصر"
            },
            {
              "value": "10%",
              "description": "10% من حجم العنصر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض منطقة التأثير",
          "values": [
            {
              "value": "120%",
              "description": "120% من حجم العنصر"
            },
            {
              "value": "100%",
              "description": "حجم العنصر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع منطقة التأثير",
          "values": [
            {
              "value": "120%",
              "description": "120% من حجم العنصر"
            },
            {
              "value": "100%",
              "description": "حجم العنصر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "feGaussianBlur",
      "description": "يضيف تأثير ضبابية (تمويه) داخل عنصر filter، يستخدم للظلال الناعمة وتأثيرات التركيز",
      "properties": [
        {
          "name": "stdDeviation",
          "description": "يحدد قوة الضبابية، كلما زاد الرقم زادت درجة التمويه",
          "values": [
            {
              "value": "0.5",
              "description": "ضبابية خفيفة جداً"
            },
            {
              "value": "1",
              "description": "ضبابية خفيفة"
            },
            {
              "value": "2",
              "description": "ضبابية خفيفة"
            },
            {
              "value": "3",
              "description": "ضبابية خفيفة"
            },
            {
              "value": "4",
              "description": "ضبابية متوسطة"
            },
            {
              "value": "5",
              "description": "ضبابية متوسطة"
            },
            {
              "value": "8",
              "description": "ضبابية قوية"
            },
            {
              "value": "10",
              "description": "ضبابية قوية جداً"
            },
            {
              "value": "15",
              "description": "ضبابية شديدة"
            },
            {
              "value": "20",
              "description": "ضبابية شديدة جداً"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "feOffset",
      "description": "ينقل نسخة من العنصر مسافة معينة داخل filter، يستخدم غالباً مع feGaussianBlur لصنع تأثير الظل المسقط",
      "properties": [
        {
          "name": "dx",
          "description": "يحدد مقدار الإزاحة الأفقية للنسخة المنقولة",
          "values": [
            {
              "value": "0",
              "description": "بدون إزاحة أفقية"
            },
            {
              "value": "1",
              "description": "إزاحة 1 بكسل لليمين"
            },
            {
              "value": "2",
              "description": "إزاحة 2 بكسل لليمين"
            },
            {
              "value": "3",
              "description": "إزاحة 3 بكسل لليمين"
            },
            {
              "value": "4",
              "description": "إزاحة 4 بكسل لليمين"
            },
            {
              "value": "5",
              "description": "إزاحة 5 بكسل لليمين"
            },
            {
              "value": "10",
              "description": "إزاحة 10 بكسل لليمين"
            },
            {
              "value": "-1",
              "description": "إزاحة 1 بكسل لليسار"
            },
            {
              "value": "-5",
              "description": "إزاحة 5 بكسل لليسار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dy",
          "description": "يحدد مقدار الإزاحة الرأسية للنسخة المنقولة",
          "values": [
            {
              "value": "0",
              "description": "بدون إزاحة رأسية"
            },
            {
              "value": "1",
              "description": "إزاحة 1 بكسل للأسفل"
            },
            {
              "value": "2",
              "description": "إزاحة 2 بكسل للأسفل"
            },
            {
              "value": "3",
              "description": "إزاحة 3 بكسل للأسفل"
            },
            {
              "value": "4",
              "description": "إزاحة 4 بكسل للأسفل"
            },
            {
              "value": "5",
              "description": "إزاحة 5 بكسل للأسفل"
            },
            {
              "value": "10",
              "description": "إزاحة 10 بكسل للأسفل"
            },
            {
              "value": "-1",
              "description": "إزاحة 1 بكسل للأعلى"
            },
            {
              "value": "-5",
              "description": "إزاحة 5 بكسل للأعلى"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "set",
      "description": "يغير قيمة خاصية معينة فجأة دون تدرج بعد وقت محدد، بديل بسيط عن animate عندما لا تحتاج لحركة تدريجية",
      "properties": [
        {
          "name": "attributeName",
          "description": "يحدد الخاصية التي ستتغير قيمتها فجأة",
          "values": [
            {
              "value": "fill",
              "description": "يغير لون التعبئة"
            },
            {
              "value": "visibility",
              "description": "يغير الظهور والاختفاء"
            },
            {
              "value": "opacity",
              "description": "يغير الشفافية"
            },
            {
              "value": "stroke",
              "description": "يغير لون الحدود"
            },
            {
              "value": "r",
              "description": "يغير نصف القطر"
            },
            {
              "value": "width",
              "description": "يغير العرض"
            },
            {
              "value": "height",
              "description": "يغير الارتفاع"
            },
            {
              "value": "x",
              "description": "يغير الموضع الأفقي"
            },
            {
              "value": "y",
              "description": "يغير الموضع الرأسي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "to",
          "description": "يحدد القيمة الجديدة التي ستُطبق فجأة",
          "values": [
            {
              "value": "red",
              "description": "يتغير إلى اللون الأحمر"
            },
            {
              "value": "blue",
              "description": "يتغير إلى اللون الأزرق"
            },
            {
              "value": "hidden",
              "description": "يختفي العنصر"
            },
            {
              "value": "visible",
              "description": "يظهر العنصر"
            },
            {
              "value": "0",
              "description": "يتغير إلى 0"
            },
            {
              "value": "50",
              "description": "يتغير إلى 50"
            },
            {
              "value": "100",
              "description": "يتغير إلى 100"
            },
            {
              "value": "0.5",
              "description": "يتغير إلى 0.5"
            }
          ],
          "freeInput": true
        },
        {
          "name": "begin",
          "description": "يحدد متى يبدأ هذا التغيير، مثل وقت محدد أو عند حدث معين",
          "values": [
            {
              "value": "0s",
              "description": "يبدأ فوراً"
            },
            {
              "value": "1s",
              "description": "يبدأ بعد ثانية واحدة"
            },
            {
              "value": "2s",
              "description": "يبدأ بعد ثانيتين"
            },
            {
              "value": "3s",
              "description": "يبدأ بعد 3 ثواني"
            },
            {
              "value": "5s",
              "description": "يبدأ بعد 5 ثواني"
            },
            {
              "value": "10s",
              "description": "يبدأ بعد 10 ثواني"
            },
            {
              "value": "click",
              "description": "يبدأ عند النقر على العنصر"
            },
            {
              "value": "mouseover",
              "description": "يبدأ عند تمرير الماوس"
            },
            {
              "value": "indefinite",
              "description": "لا يبدأ تلقائياً"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "a",
      "description": "ينشئ رابطاً تشعبياً حول عنصر أو مجموعة عناصر SVG، عند النقر عليه ينتقل المستخدم إلى وجهة الرابط",
      "properties": [
        {
          "name": "href",
          "description": "يحدد وجهة الرابط التي ينتقل إليها المستخدم عند النقر على عنصر SVG",
          "values": [
            {
              "value": "https://example.com",
              "description": "ينتقل إلى موقع خارجي"
            },
            {
              "value": "https://www.google.com",
              "description": "ينتقل إلى موقع جوجل"
            },
            {
              "value": "https://www.youtube.com",
              "description": "ينتقل إلى موقع يوتيوب"
            },
            {
              "value": "https://github.com",
              "description": "ينتقل إلى موقع جيت هاب"
            },
            {
              "value": "#section",
              "description": "ينتقل إلى جزء في نفس الصفحة"
            },
            {
              "value": "#top",
              "description": "ينتقل إلى أعلى الصفحة"
            },
            {
              "value": "page.html",
              "description": "ينتقل إلى صفحة داخل الموقع"
            },
            {
              "value": "/about",
              "description": "ينتقل إلى صفحة حول"
            },
            {
              "value": "mailto:email@example.com",
              "description": "يفتح برنامج البريد"
            },
            {
              "value": "tel:+123456789",
              "description": "يفتح تطبيق الاتصال"
            }
          ],
          "freeInput": true
        },
        {
          "name": "target",
          "description": "يحدد كيف وأين يفتح الرابط",
          "values": [
            {
              "value": "_blank",
              "description": "يفتح الرابط في نافذة جديدة"
            },
            {
              "value": "_self",
              "description": "يفتح الرابط في نفس النافذة (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "style",
      "description": "يسمح بكتابة أكواد CSS مباشرة داخل SVG، يتيح تنسيق عدة عناصر بواسطة class دون تكرار الخصائص على كل عنصر",
      "properties": [
        {
          "name": "type",
          "description": "يحدد نوع لغة التنسيق المستخدمة داخل العنصر",
          "values": [
            {
              "value": "text/css",
              "description": "لغة CSS القياسية (الافتراضية)"
            }
          ]
        }
      ]
    }
  ],
  "mathml": [
    {
      "tag": "math",
      "description": "يحدد منطقة لكتابة المعادلات الرياضية، يعرض الرموز والعمليات الحسابية بشكل احترافي",
      "properties": [
        {
          "name": "xmlns",
          "description": "يحدد مساحة الأسماء للرسم، يخبر المتصفح بأن هذه معادلة MathML ليتعامل معها بشكل صحيح",
          "values": [
            {
              "value": "http://www.w3.org/1998/Math/MathML",
              "description": "مساحة أسماء MathML"
            },
            {
              "value": "http://www.w3.org/1999/xhtml",
              "description": "مساحة أسماء XHTML"
            }
          ]
        },
        {
          "name": "display",
          "description": "يحدد إن كانت المعادلة تعرض ضمن سطر النص أو في كتلة منفصلة بحجم أكبر",
          "values": [
            {
              "value": "inline",
              "description": "تعرض المعادلة ضمن سطر النص (الافتراضي)"
            },
            {
              "value": "block",
              "description": "تعرض المعادلة في سطر منفصل وبحجم أكبر، مناسب للمعادلات الرئيسية"
            }
          ]
        },
        {
          "name": "mode",
          "description": "يحدد وضع عرض المعادلة (قديم، استُبدل بـ display)",
          "values": [
            {
              "value": "inline",
              "description": "وضع ضمن السطر"
            },
            {
              "value": "display",
              "description": "وضع كتلة منفصلة"
            }
          ]
        }
      ]
    },
    {
      "tag": "mi",
      "description": "يعرض معرفاً رياضياً مثل متغير (x، y، z)، يظهر بخط مائل لتمييز المتغيرات",
      "properties": [
        {
          "name": "mathvariant",
          "description": "يغير شكل المتغير الرياضي، يجعله عادياً أو غامقاً أو مائلاً",
          "values": [
            {
              "value": "normal",
              "description": "متغير عادي"
            },
            {
              "value": "bold",
              "description": "متغير غامق"
            },
            {
              "value": "italic",
              "description": "متغير مائل (الافتراضي)"
            },
            {
              "value": "bold-italic",
              "description": "متغير غامق مائل"
            },
            {
              "value": "sans-serif",
              "description": "متغير بخط sans-serif"
            },
            {
              "value": "bold-sans-serif",
              "description": "متغير غامق بخط sans-serif"
            },
            {
              "value": "sans-serif-italic",
              "description": "متغير مائل بخط sans-serif"
            },
            {
              "value": "sans-serif-bold-italic",
              "description": "متغير غامق مائل بخط sans-serif"
            },
            {
              "value": "monospace",
              "description": "متغير بخط monospace"
            },
            {
              "value": "initial",
              "description": "متغير بخط initial"
            },
            {
              "value": "tailed",
              "description": "متغير بخط tailed"
            },
            {
              "value": "looped",
              "description": "متغير بخط looped"
            },
            {
              "value": "stretched",
              "description": "متغير بخط stretched"
            },
            {
              "value": "double-struck",
              "description": "متغير بخط double-struck"
            }
          ]
        },
        {
          "name": "fontstyle",
          "description": "يحدد نمط الخط (قديم، استُبدل بـ mathvariant)",
          "values": [
            {
              "value": "normal",
              "description": "نمط عادي"
            },
            {
              "value": "italic",
              "description": "نمط مائل"
            }
          ]
        },
        {
          "name": "fontweight",
          "description": "يحدد سمك الخط (قديم، استُبدل بـ mathvariant)",
          "values": [
            {
              "value": "normal",
              "description": "سمك عادي"
            },
            {
              "value": "bold",
              "description": "سمك غامق"
            }
          ]
        }
      ]
    },
    {
      "tag": "mo",
      "description": "يعرض عاملاً رياضياً مثل + أو - أو =، يظهر الرموز الحسابية والعلائقية",
      "properties": [
        {
          "name": "form",
          "description": "يحدد شكل العامل حسب موقعه (بادئ، متوسط، لاحق)، يغير شكل الرمز حسب السياق",
          "values": [
            {
              "value": "prefix",
              "description": "عامل بادئ (مثل - في -5)"
            },
            {
              "value": "infix",
              "description": "عامل متوسط (مثل + في 2+3)"
            },
            {
              "value": "postfix",
              "description": "عامل لاحق (مثل ! في 5!)"
            }
          ]
        },
        {
          "name": "fence",
          "description": "يحدد أن العامل هو قوس أو فاصل، يعامله كأداة تجميع",
          "values": [
            {
              "value": "true",
              "description": "عامل تجميعي (قوس)"
            },
            {
              "value": "false",
              "description": "عامل عادي"
            }
          ]
        },
        {
          "name": "separator",
          "description": "يحدد أن العامل هو فاصل (مثل الفاصلة)، يعامله كمحدد بين العناصر",
          "values": [
            {
              "value": "true",
              "description": "عامل فاصل"
            },
            {
              "value": "false",
              "description": "عامل عادي"
            }
          ]
        },
        {
          "name": "stretchy",
          "description": "يحدد إذا كان العامل يتمدد ليتناسب مع المحتوى المحيط (مثل الأقواس الكبيرة)",
          "values": [
            {
              "value": "true",
              "description": "يتمدد العامل"
            },
            {
              "value": "false",
              "description": "لا يتمدد العامل"
            }
          ]
        },
        {
          "name": "symmetric",
          "description": "يحدد إذا كان العامل متماثلاً حول المحور الأفقي",
          "values": [
            {
              "value": "true",
              "description": "متماثل"
            },
            {
              "value": "false",
              "description": "غير متماثل"
            }
          ]
        },
        {
          "name": "maxsize",
          "description": "يحدد الحجم الأقصى للعامل المتمدد",
          "values": [
            {
              "value": "1.2em",
              "description": "حجم أقصى 1.2em"
            },
            {
              "value": "infinity",
              "description": "حجم غير محدود"
            }
          ],
          "freeInput": true
        },
        {
          "name": "minsize",
          "description": "يحدد الحجم الأدنى للعامل المتمدد",
          "values": [
            {
              "value": "0.8em",
              "description": "حجم أدنى 0.8em"
            },
            {
              "value": "1em",
              "description": "حجم أدنى 1em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "largeop",
          "description": "يحدد أن العامل هو عملية كبيرة (مثل ∑, ∏) فتظهر بحجم أكبر",
          "values": [
            {
              "value": "true",
              "description": "عملية كبيرة"
            },
            {
              "value": "false",
              "description": "عملية عادية"
            }
          ]
        },
        {
          "name": "movablelimits",
          "description": "يحدد إذا كانت حدود العملية الكبيرة تتحرك للخلف في وضع العرض",
          "values": [
            {
              "value": "true",
              "description": "حدود متحركة"
            },
            {
              "value": "false",
              "description": "حدود ثابتة"
            }
          ]
        },
        {
          "name": "accent",
          "description": "يحدد أن العامل هو علامة نبرة توضع فوق أو تحت العنصر",
          "values": [
            {
              "value": "true",
              "description": "علامة نبرة"
            },
            {
              "value": "false",
              "description": "عامل عادي"
            }
          ]
        }
      ]
    },
    {
      "tag": "mn",
      "description": "يعرض عدداً رياضياً (0-9، كسور، أعداد عشرية)، يمثل القيم الرقمية في المعادلات",
      "properties": [
        {
          "name": "mathvariant",
          "description": "يغير شكل العدد المعروض، يجعله عادياً أو غامقاً",
          "values": [
            {
              "value": "normal",
              "description": "عدد عادي (الافتراضي)"
            },
            {
              "value": "bold",
              "description": "عدد غامق"
            },
            {
              "value": "sans-serif",
              "description": "عدد بخط sans-serif"
            },
            {
              "value": "bold-sans-serif",
              "description": "عدد غامق بخط sans-serif"
            },
            {
              "value": "monospace",
              "description": "عدد بخط monospace"
            },
            {
              "value": "double-struck",
              "description": "عدد بخط double-struck"
            }
          ]
        }
      ]
    },
    {
      "tag": "mtext",
      "description": "يعرض نصاً عادياً داخل المعادلة الرياضية، يستخدم للتعليقات أو الشروحات",
      "properties": [
        {
          "name": "mathvariant",
          "description": "يغير شكل النص الرياضي، يجعله عادياً أو غامقاً",
          "values": [
            {
              "value": "normal",
              "description": "نص عادي"
            },
            {
              "value": "bold",
              "description": "نص غامق"
            },
            {
              "value": "italic",
              "description": "نص مائل"
            },
            {
              "value": "sans-serif",
              "description": "نص بخط sans-serif"
            },
            {
              "value": "monospace",
              "description": "نص بخط monospace"
            }
          ]
        }
      ]
    },
    {
      "tag": "mfrac",
      "description": "يعرض كسراً رياضياً، يضع بسطاً فوق مقام مع خط فاصل بينهما",
      "properties": [
        {
          "name": "linethickness",
          "description": "يحدد سمك خط الكسر، يتحكم في ظهور خط الفصل بين البسط والمقام",
          "values": [
            {
              "value": "thin",
              "description": "خط رفيع"
            },
            {
              "value": "medium",
              "description": "خط متوسط (الافتراضي)"
            },
            {
              "value": "thick",
              "description": "خط سميك"
            },
            {
              "value": "0",
              "description": "بدون خط (تظهر كسلسلة)"
            },
            {
              "value": "1px",
              "description": "سمك 1 بكسل"
            },
            {
              "value": "2px",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "0.5px",
              "description": "سمك 0.5 بكسل"
            },
            {
              "value": "0.1em",
              "description": "سمك 0.1 em"
            },
            {
              "value": "0.2em",
              "description": "سمك 0.2 em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "numalign",
          "description": "يحدد محاذاة البسط في الكسر، يتحكم في مكان ظهور البسط",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي)"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        },
        {
          "name": "denomalign",
          "description": "يحدد محاذاة المقام في الكسر، يتحكم في مكان ظهور المقام",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي)"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        },
        {
          "name": "bevelled",
          "description": "يعرض الكسر بخط مائل بدلاً من الأفقي، يعرض الكسر كـ a/b",
          "values": [
            {
              "value": "true",
              "description": "كسر مائل"
            },
            {
              "value": "false",
              "description": "كسر عادي (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "msqrt",
      "description": "يعرض جذراً تربيعياً، يضع رمز الجذر فوق المحتوى ويمده فوقه بخط",
      "properties": []
    },
    {
      "tag": "mroot",
      "description": "يعرض جذراً بأي درجة (تكعيبي، رباعي...) مع رقم صغير يحدد درجة الجذر، على عكس msqrt المخصص للجذر التربيعي فقط",
      "properties": []
    },
    {
      "tag": "mrow",
      "description": "يجمع عناصر MathML في صف واحد، يضمن ظهورها جنباً إلى جنب في نفس السطر",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل الصف",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        }
      ]
    },
    {
      "tag": "msub",
      "description": "يعرض رمزاً مع نص منخفض (سفلي)، مثل x₁ أو H₂O في الكيمياء",
      "properties": [
        {
          "name": "subscriptshift",
          "description": "يضبط موضع النص المنخفض رأسياً، يرفع أو يخفض النص السفلي",
          "values": [
            {
              "value": "0.5ex",
              "description": "إزاحة نصف ارتفاع الحرف"
            },
            {
              "value": "0.2ex",
              "description": "إزاحة 0.2ex"
            },
            {
              "value": "1ex",
              "description": "إزاحة 1ex"
            },
            {
              "value": "0.3em",
              "description": "إزاحة 0.3em"
            },
            {
              "value": "0.5em",
              "description": "إزاحة 0.5em"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "msup",
      "description": "يعرض رمزاً مع نص مرتفع (علوي)، مثل x² أو الأسس في الرياضيات",
      "properties": [
        {
          "name": "superscriptshift",
          "description": "يضبط موضع النص المرتفع رأسياً، يرفع أو يخفض النص العلوي",
          "values": [
            {
              "value": "0.5ex",
              "description": "إزاحة نصف ارتفاع الحرف"
            },
            {
              "value": "0.2ex",
              "description": "إزاحة 0.2ex"
            },
            {
              "value": "1ex",
              "description": "إزاحة 1ex"
            },
            {
              "value": "0.3em",
              "description": "إزاحة 0.3em"
            },
            {
              "value": "0.5em",
              "description": "إزاحة 0.5em"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "msubsup",
      "description": "يعرض رمزاً مع نص منخفض ونص مرتفع معاً، مثل ترميز المتسلسلات",
      "properties": [
        {
          "name": "subscriptshift",
          "description": "يضبط موضع النص المنخفض رأسياً، يتحكم في مكان النص السفلي",
          "values": [
            {
              "value": "0.5ex",
              "description": "إزاحة نصف ارتفاع الحرف"
            },
            {
              "value": "0.2ex",
              "description": "إزاحة 0.2ex"
            },
            {
              "value": "1ex",
              "description": "إزاحة 1ex"
            },
            {
              "value": "0.3em",
              "description": "إزاحة 0.3em"
            },
            {
              "value": "0.5em",
              "description": "إزاحة 0.5em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "superscriptshift",
          "description": "يضبط موضع النص المرتفع رأسياً، يتحكم في مكان النص العلوي",
          "values": [
            {
              "value": "0.5ex",
              "description": "إزاحة نصف ارتفاع الحرف"
            },
            {
              "value": "0.2ex",
              "description": "إزاحة 0.2ex"
            },
            {
              "value": "1ex",
              "description": "إزاحة 1ex"
            },
            {
              "value": "0.3em",
              "description": "إزاحة 0.3em"
            },
            {
              "value": "0.5em",
              "description": "إزاحة 0.5em"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "munder",
      "description": "يضع رمزاً أسفل تعبير رياضي، مثل وضع حد أدنى أسفل المجموع",
      "properties": [
        {
          "name": "accentunder",
          "description": "يحدد إذا كان الرمز السفلي يعامل كعلامة نبرة سفلية",
          "values": [
            {
              "value": "true",
              "description": "علامة نبرة سفلية"
            },
            {
              "value": "false",
              "description": "رمز عادي"
            }
          ]
        },
        {
          "name": "align",
          "description": "يحدد محاذاة الرمز السفلي",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي)"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        }
      ]
    },
    {
      "tag": "mover",
      "description": "يضع رمزاً فوق تعبير رياضي، مثل وضع حد أقصى فوق المجموع",
      "properties": [
        {
          "name": "accent",
          "description": "يحدد إذا كان الرمز العلوي يعامل كعلامة نبرة علوية",
          "values": [
            {
              "value": "true",
              "description": "علامة نبرة علوية"
            },
            {
              "value": "false",
              "description": "رمز عادي"
            }
          ]
        },
        {
          "name": "align",
          "description": "يحدد محاذاة الرمز العلوي",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي)"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        }
      ]
    },
    {
      "tag": "munderover",
      "description": "يضع رمزاً أسفل وفوق تعبير رياضي معاً، مثل وضع حدود دنيا وعليا",
      "properties": [
        {
          "name": "accent",
          "description": "يحدد إذا كان الرمز العلوي يعامل كعلامة نبرة",
          "values": [
            {
              "value": "true",
              "description": "علامة نبرة"
            },
            {
              "value": "false",
              "description": "رمز عادي"
            }
          ]
        },
        {
          "name": "accentunder",
          "description": "يحدد إذا كان الرمز السفلي يعامل كعلامة نبرة سفلية",
          "values": [
            {
              "value": "true",
              "description": "علامة نبرة سفلية"
            },
            {
              "value": "false",
              "description": "رمز عادي"
            }
          ]
        },
        {
          "name": "align",
          "description": "يحدد محاذاة الرموز العلوية والسفلية",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي)"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        }
      ]
    },
    {
      "tag": "mfenced",
      "description": "يضع أقواساً أو حدوداً حول تعبير رياضي، يحدد نطاق المعادلة",
      "properties": [
        {
          "name": "open",
          "description": "يحدد رمز الفتح (قوس، براكيت، قيمة مطلقة)، يحدد بداية التجميع",
          "values": [
            {
              "value": "(",
              "description": "قوس دائري فتح"
            },
            {
              "value": "[",
              "description": "قوس مربع فتح"
            },
            {
              "value": "{",
              "description": "قوس معقوف فتح"
            },
            {
              "value": "|",
              "description": "قيمة مطلقة فتح"
            },
            {
              "value": "||",
              "description": "معيار فتح"
            },
            {
              "value": "<",
              "description": "زاوية فتح"
            },
            {
              "value": "〈",
              "description": "زاوية فتح"
            },
            {
              "value": "❬",
              "description": "قوس زاوية فتح"
            }
          ]
        },
        {
          "name": "close",
          "description": "يحدد رمز الإغلاق (قوس، براكيت، قيمة مطلقة)، يحدد نهاية التجميع",
          "values": [
            {
              "value": ")",
              "description": "قوس دائري إغلاق"
            },
            {
              "value": "]",
              "description": "قوس مربع إغلاق"
            },
            {
              "value": "}",
              "description": "قوس معقوف إغلاق"
            },
            {
              "value": "|",
              "description": "قيمة مطلقة إغلاق"
            },
            {
              "value": "||",
              "description": "معيار إغلاق"
            },
            {
              "value": ">",
              "description": "زاوية إغلاق"
            },
            {
              "value": "〉",
              "description": "زاوية إغلاق"
            },
            {
              "value": "❭",
              "description": "قوس زاوية إغلاق"
            }
          ]
        },
        {
          "name": "separators",
          "description": "يحدد الرموز الفاصلة بين العناصر داخل الأقواس (مثل الفاصلة)، يحدد كيفية فصل العناصر",
          "values": [
            {
              "value": ",",
              "description": "فاصلة للفصل"
            },
            {
              "value": ";",
              "description": "فاصلة منقوطة للفصل"
            },
            {
              "value": ":",
              "description": "نقطتان للفصل"
            },
            {
              "value": "|",
              "description": "خط عمودي للفصل"
            },
            {
              "value": "",
              "description": "بدون فواصل"
            }
          ]
        }
      ]
    },
    {
      "tag": "menclose",
      "description": "يحيط التعبير الرياضي بإطار أو شكل محدد، يبرز المعادلة أو يجمعها",
      "properties": [
        {
          "name": "notation",
          "description": "يحدد شكل الإطار المحيط (مستطيل، دائرة، خط مائل)، يتحكم في شكل التجميع",
          "values": [
            {
              "value": "longdiv",
              "description": "قسمة طويلة"
            },
            {
              "value": "actuarial",
              "description": "رمز اكتواري"
            },
            {
              "value": "radical",
              "description": "جذر"
            },
            {
              "value": "box",
              "description": "إطار مستطيل"
            },
            {
              "value": "roundedbox",
              "description": "إطار مستطيل مدور"
            },
            {
              "value": "circle",
              "description": "إطار دائري"
            },
            {
              "value": "left",
              "description": "خط عمودي على اليسار"
            },
            {
              "value": "right",
              "description": "خط عمودي على اليمين"
            },
            {
              "value": "top",
              "description": "خط أفقي في الأعلى"
            },
            {
              "value": "bottom",
              "description": "خط أفقي في الأسفل"
            },
            {
              "value": "updiagonalstrike",
              "description": "خط مائل من أسفل اليسار إلى أعلى اليمين"
            },
            {
              "value": "downdiagonalstrike",
              "description": "خط مائل من أعلى اليسار إلى أسفل اليمين"
            },
            {
              "value": "verticalstrike",
              "description": "خط عمودي عبر المنتصف"
            },
            {
              "value": "horizontalstrike",
              "description": "خط أفقي عبر المنتصف"
            },
            {
              "value": "madruwb",
              "description": "رمز عربي"
            },
            {
              "value": "phasorangle",
              "description": "زاوية فازور"
            },
            {
              "value": "dash",
              "description": "إطار متقطع"
            }
          ]
        },
        {
          "name": "position",
          "description": "يحدد موضع الإطار",
          "values": [
            {
              "value": "top",
              "description": "في الأعلى"
            },
            {
              "value": "bottom",
              "description": "في الأسفل"
            },
            {
              "value": "left",
              "description": "على اليسار"
            },
            {
              "value": "right",
              "description": "على اليمين"
            }
          ]
        }
      ]
    },
    {
      "tag": "ms",
      "description": "يعرض سلسلة نصية في المعادلة، يستخدم للنصوص التي ليست رموزاً رياضية",
      "properties": [
        {
          "name": "lquote",
          "description": "يحدد علامة الاقتباس اليمنى، يحدد بداية النص المقتبس",
          "values": [
            {
              "value": "'",
              "description": "اقتباس مفرد"
            },
            {
              "value": "\"",
              "description": "اقتباس مزدوج"
            },
            {
              "value": "`",
              "description": "اقتباس خلفي"
            }
          ]
        },
        {
          "name": "rquote",
          "description": "يحدد علامة الاقتباس اليسرى، يحدد نهاية النص المقتبس",
          "values": [
            {
              "value": "'",
              "description": "اقتباس مفرد"
            },
            {
              "value": "\"",
              "description": "اقتباس مزدوج"
            },
            {
              "value": "`",
              "description": "اقتباس خلفي"
            }
          ]
        }
      ]
    },
    {
      "tag": "mtable",
      "description": "ينشئ جدولاً أو مصفوفة رياضية من صفوف وأعمدة، يستخدم لعرض المصفوفات وأنظمة المعادلات",
      "properties": [
        {
          "name": "align",
          "description": "يحدد محاذاة الجدول رأسياً بالنسبة للسطر المحيط به",
          "values": [
            {
              "value": "axis",
              "description": "يحاذي الجدول حسب محور الوسط (الافتراضي)"
            },
            {
              "value": "top",
              "description": "يحاذي من الأعلى"
            },
            {
              "value": "bottom",
              "description": "يحاذي من الأسفل"
            },
            {
              "value": "center",
              "description": "يحاذي من المنتصف"
            },
            {
              "value": "baseline",
              "description": "يحاذي حسب خط الأساس"
            }
          ]
        },
        {
          "name": "columnalign",
          "description": "يحدد محاذاة محتوى كل الأعمدة داخل الجدول",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي)"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        },
        {
          "name": "rowalign",
          "description": "يحدد محاذاة محتوى كل الصفوف داخل الجدول",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط (الافتراضي)"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل"
            },
            {
              "value": "baseline",
              "description": "محاذاة حسب خط الأساس"
            },
            {
              "value": "axis",
              "description": "محاذاة حسب المحور"
            }
          ]
        },
        {
          "name": "columnspacing",
          "description": "يحدد المسافة بين الأعمدة في الجدول",
          "values": [
            {
              "value": "1em",
              "description": "مسافة 1em"
            },
            {
              "value": "0.5em",
              "description": "مسافة 0.5em"
            },
            {
              "value": "2em",
              "description": "مسافة 2em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rowspacing",
          "description": "يحدد المسافة بين الصفوف في الجدول",
          "values": [
            {
              "value": "1em",
              "description": "مسافة 1em"
            },
            {
              "value": "0.5em",
              "description": "مسافة 0.5em"
            },
            {
              "value": "2em",
              "description": "مسافة 2em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الجدول",
          "values": [
            {
              "value": "100%",
              "description": "عرض كامل"
            },
            {
              "value": "auto",
              "description": "عرض تلقائي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "frame",
          "description": "يحدد إطار الجدول الخارجي",
          "values": [
            {
              "value": "none",
              "description": "بدون إطار (الافتراضي)"
            },
            {
              "value": "solid",
              "description": "إطار صلب"
            },
            {
              "value": "dashed",
              "description": "إطار متقطع"
            }
          ]
        },
        {
          "name": "framespacing",
          "description": "يحدد المسافة بين الإطار والجدول",
          "values": [
            {
              "value": "0.4em 0.5em",
              "description": "مسافة 0.4em أفقياً و 0.5em عمودياً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "equalrows",
          "description": "يحدد إذا كانت جميع الصفوف متساوية في الارتفاع",
          "values": [
            {
              "value": "true",
              "description": "صفوف متساوية"
            },
            {
              "value": "false",
              "description": "صفوف مختلفة (الافتراضي)"
            }
          ]
        },
        {
          "name": "equalcolumns",
          "description": "يحدد إذا كانت جميع الأعمدة متساوية في العرض",
          "values": [
            {
              "value": "true",
              "description": "أعمدة متساوية"
            },
            {
              "value": "false",
              "description": "أعمدة مختلفة (الافتراضي)"
            }
          ]
        },
        {
          "name": "displaystyle",
          "description": "يحدد إذا كانت المعادلات داخل الجدول تعرض بحجم العرض",
          "values": [
            {
              "value": "true",
              "description": "نمط عرض"
            },
            {
              "value": "false",
              "description": "نمط نص (الافتراضي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "mtr",
      "description": "يمثل صفاً واحداً داخل جدول mtable الرياضي، يحتوي على خلايا mtd لهذا الصف",
      "properties": [
        {
          "name": "rowalign",
          "description": "يحدد محاذاة هذا الصف تحديداً",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل"
            },
            {
              "value": "baseline",
              "description": "محاذاة حسب خط الأساس"
            },
            {
              "value": "axis",
              "description": "محاذاة حسب المحور"
            }
          ]
        },
        {
          "name": "columnalign",
          "description": "يحدد محاذاة أعمدة هذا الصف تحديداً",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        }
      ]
    },
    {
      "tag": "mtd",
      "description": "يمثل خلية واحدة داخل صف mtr في الجدول الرياضي، تحمل قيمة أو تعبيراً واحداً من المصفوفة",
      "properties": [
        {
          "name": "columnspan",
          "description": "يوسع الخلية لتغطي عدداً من الأعمدة، يدمج خلايا عدة أعمدة في خلية واحدة",
          "values": [
            {
              "value": "2",
              "description": "يمتد على عمودين"
            },
            {
              "value": "3",
              "description": "يمتد على 3 أعمدة"
            },
            {
              "value": "4",
              "description": "يمتد على 4 أعمدة"
            },
            {
              "value": "5",
              "description": "يمتد على 5 أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rowspan",
          "description": "يوسع الخلية لتغطي عدداً من الصفوف، يدمج خلايا عدة صفوف في خلية واحدة",
          "values": [
            {
              "value": "2",
              "description": "يمتد على صفين"
            },
            {
              "value": "3",
              "description": "يمتد على 3 صفوف"
            },
            {
              "value": "4",
              "description": "يمتد على 4 صفوف"
            },
            {
              "value": "5",
              "description": "يمتد على 5 صفوف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rowalign",
          "description": "يحدد محاذاة هذه الخلية تحديداً",
          "values": [
            {
              "value": "top",
              "description": "محاذاة لأعلى"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "bottom",
              "description": "محاذاة لأسفل"
            },
            {
              "value": "baseline",
              "description": "محاذاة حسب خط الأساس"
            },
            {
              "value": "axis",
              "description": "محاذاة حسب المحور"
            }
          ]
        },
        {
          "name": "columnalign",
          "description": "يحدد محاذاة هذه الخلية تحديداً",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        }
      ]
    },
    {
      "tag": "mspace",
      "description": "يضيف مسافة فارغة بأبعاد محددة داخل المعادلة، يستخدم للتحكم اليدوي بالمسافات بين الرموز",
      "properties": [
        {
          "name": "width",
          "description": "يحدد عرض المسافة الفارغة",
          "values": [
            {
              "value": "0.1em",
              "description": "مسافة 0.1em"
            },
            {
              "value": "0.2em",
              "description": "مسافة 0.2em"
            },
            {
              "value": "0.3em",
              "description": "مسافة 0.3em"
            },
            {
              "value": "0.5em",
              "description": "مسافة 0.5em"
            },
            {
              "value": "1em",
              "description": "مسافة بعرض حرف واحد تقريباً"
            },
            {
              "value": "2em",
              "description": "مسافة 2em"
            },
            {
              "value": "1ex",
              "description": "مسافة 1ex"
            },
            {
              "value": "1px",
              "description": "مسافة 1 بكسل"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع المسافة الفارغة فوق خط الأساس",
          "values": [
            {
              "value": "0.1ex",
              "description": "ارتفاع 0.1ex"
            },
            {
              "value": "0.5ex",
              "description": "ارتفاع 0.5ex"
            },
            {
              "value": "1ex",
              "description": "ارتفاع بمقدار ارتفاع حرف صغير"
            },
            {
              "value": "2ex",
              "description": "ارتفاع 2ex"
            }
          ],
          "freeInput": true
        },
        {
          "name": "depth",
          "description": "يحدد عمق المسافة الفارغة تحت خط الأساس",
          "values": [
            {
              "value": "0.1ex",
              "description": "عمق 0.1ex"
            },
            {
              "value": "0.5ex",
              "description": "عمق 0.5ex"
            },
            {
              "value": "1ex",
              "description": "عمق 1ex"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "mphantom",
      "description": "يحجز نفس مساحة محتواه دون أن يظهره فعلياً، يستخدم لمحاذاة عناصر معادلة أخرى بشكل دقيق",
      "properties": []
    },
    {
      "tag": "mstyle",
      "description": "يطبق إعدادات تنسيق مشتركة (اللون، الحجم) على كل ما بداخله من عناصر المعادلة دفعة واحدة",
      "properties": [
        {
          "name": "mathcolor",
          "description": "يحدد لون كل الرموز والنصوص داخل هذا العنصر",
          "values": [
            {
              "value": "#000000",
              "description": "لون أسود"
            },
            {
              "value": "#ff0000",
              "description": "لون أحمر"
            },
            {
              "value": "#00ff00",
              "description": "لون أخضر"
            },
            {
              "value": "#0000ff",
              "description": "لون أزرق"
            },
            {
              "value": "#ffff00",
              "description": "لون أصفر"
            },
            {
              "value": "#ff00ff",
              "description": "لون وردي"
            },
            {
              "value": "#00ffff",
              "description": "لون سماوي"
            },
            {
              "value": "#cccccc",
              "description": "لون رمادي"
            },
            {
              "value": "#999999",
              "description": "لون رمادي متوسط"
            },
            {
              "value": "#666666",
              "description": "لون رمادي داكن"
            },
            {
              "value": "#333333",
              "description": "لون رمادي غامق"
            },
            {
              "value": "#3498db",
              "description": "لون أزرق"
            },
            {
              "value": "#e74c3c",
              "description": "لون أحمر"
            },
            {
              "value": "#2ecc71",
              "description": "لون أخضر"
            },
            {
              "value": "#f39c12",
              "description": "لون برتقالي"
            },
            {
              "value": "#9b59b6",
              "description": "لون بنفسجي"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "cyan",
              "description": "لون سماوي"
            },
            {
              "value": "magenta",
              "description": "لون أرجواني"
            },
            {
              "value": "lime",
              "description": "لون ليموني"
            },
            {
              "value": "maroon",
              "description": "لون كستنائي"
            },
            {
              "value": "navy",
              "description": "لون أزرق بحري"
            },
            {
              "value": "olive",
              "description": "لون زيتوني"
            },
            {
              "value": "teal",
              "description": "لون تيل"
            },
            {
              "value": "aqua",
              "description": "لون أزرق مائي"
            },
            {
              "value": "fuchsia",
              "description": "لون فوشيا"
            },
            {
              "value": "silver",
              "description": "لون فضي"
            },
            {
              "value": "gold",
              "description": "لون ذهبي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "mathbackground",
          "description": "يحدد لون خلفية كل الرموز والنصوص داخل هذا العنصر",
          "values": [
            {
              "value": "#ffffff",
              "description": "خلفية بيضاء"
            },
            {
              "value": "#ffffcc",
              "description": "خلفية صفراء فاتحة"
            },
            {
              "value": "#ffcccc",
              "description": "خلفية حمراء فاتحة"
            },
            {
              "value": "red",
              "description": "خلفية حمراء"
            },
            {
              "value": "blue",
              "description": "خلفية زرقاء"
            },
            {
              "value": "yellow",
              "description": "خلفية صفراء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "mathsize",
          "description": "يحدد حجم كل الرموز والنصوص داخل هذا العنصر",
          "values": [
            {
              "value": "small",
              "description": "حجم صغير"
            },
            {
              "value": "normal",
              "description": "حجم عادي (الافتراضي)"
            },
            {
              "value": "big",
              "description": "حجم كبير"
            },
            {
              "value": "1em",
              "description": "حجم 1em"
            },
            {
              "value": "1.2em",
              "description": "حجم 1.2em"
            },
            {
              "value": "1.5em",
              "description": "حجم 1.5em"
            },
            {
              "value": "2em",
              "description": "حجم 2em"
            },
            {
              "value": "0.8em",
              "description": "حجم 0.8em"
            }
          ]
        },
        {
          "name": "fontfamily",
          "description": "يحدد نوع الخط لكل الرموز والنصوص داخل هذا العنصر",
          "values": [
            {
              "value": "Arial",
              "description": "خط Arial"
            },
            {
              "value": "Times New Roman",
              "description": "خط Times New Roman"
            },
            {
              "value": "Courier New",
              "description": "خط Courier New"
            },
            {
              "value": "Verdana",
              "description": "خط Verdana"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fontweight",
          "description": "يحدد سمك الخط لكل الرموز والنصوص داخل هذا العنصر",
          "values": [
            {
              "value": "normal",
              "description": "سمك عادي"
            },
            {
              "value": "bold",
              "description": "سمك غامق"
            }
          ]
        },
        {
          "name": "fontstyle",
          "description": "يحدد نمط الخط لكل الرموز والنصوص داخل هذا العنصر",
          "values": [
            {
              "value": "normal",
              "description": "نمط عادي"
            },
            {
              "value": "italic",
              "description": "نمط مائل"
            }
          ]
        },
        {
          "name": "displaystyle",
          "description": "يحدد إذا كانت المعادلات تعرض بحجم العرض",
          "values": [
            {
              "value": "true",
              "description": "نمط عرض"
            },
            {
              "value": "false",
              "description": "نمط نص"
            }
          ]
        },
        {
          "name": "scriptlevel",
          "description": "يحدد مستوى النص (للنصوص الصغيرة والمرتفعات)",
          "values": [
            {
              "value": "0",
              "description": "المستوى 0"
            },
            {
              "value": "1",
              "description": "المستوى 1"
            },
            {
              "value": "2",
              "description": "المستوى 2"
            },
            {
              "value": "-1",
              "description": "المستوى -1"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "maction",
      "description": "يسمح بإنشاء تفاعلات داخل المعادلة (إظهار/إخفاء، تغيير عند النقر)، يضيف حركة أو تفاعلاً للمعادلة",
      "properties": [
        {
          "name": "actiontype",
          "description": "يحدد نوع التفاعل المطلوب عند النقر أو التفاعل مع المعادلة",
          "values": [
            {
              "value": "toggle",
              "description": "يبدل بين المحتويات عند النقر"
            },
            {
              "value": "statusline",
              "description": "يظهر نصاً في شريط الحالة عند النقر"
            },
            {
              "value": "tooltip",
              "description": "يظهر تلميحاً عند تمرير الماوس"
            },
            {
              "value": "highlight",
              "description": "يبرز المحتوى عند النقر"
            }
          ]
        }
      ]
    },
    {
      "tag": "merror",
      "description": "يعرض رسالة خطأ في المعادلة عندما تكون الصياغة الرياضية غير صحيحة، يوضح مكان المشكلة",
      "properties": []
    },
    {
      "tag": "malign",
      "description": "يحدد نقطة محاذاة داخل التعبير، يستخدم لمحاذاة المعادلات المعقدة",
      "properties": [
        {
          "name": "edge",
          "description": "يحدد الحافة التي تتم المحاذاة عليها",
          "values": [
            {
              "value": "left",
              "description": "الحافة اليسرى"
            },
            {
              "value": "right",
              "description": "الحافة اليمنى"
            }
          ]
        }
      ]
    },
    {
      "tag": "maligngroup",
      "description": "يجمع عناصر المحاذاة في مجموعة واحدة، يستخدم لمحاذاة المعادلات المعقدة معاً",
      "properties": [
        {
          "name": "groupalign",
          "description": "يحدد محاذاة المجموعة",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "center",
              "description": "محاذاة للوسط"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            }
          ]
        }
      ]
    },
    {
      "tag": "malignmark",
      "description": "يضع علامة محاذاة في التعبير، تساعد في محاذاة المعادلات المعقدة",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً لعلامة المحاذاة",
          "values": [
            {
              "value": "mark1",
              "description": "معرف العلامة"
            },
            {
              "value": "align1",
              "description": "معرف المحاذاة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "semantics",
      "description": "يضيف معلومات دلالية إضافية للمعادلة للبرامج التي تقرأ الرياضيات آلياً، يخزن معاني إضافية",
      "properties": []
    },
    {
      "tag": "annotation",
      "description": "يخزن معلومة إضافية مثل التمثيل النصي للمعادلة بصيغة مثل LaTeX، يوضح معنى المعادلة",
      "properties": [
        {
          "name": "encoding",
          "description": "يحدد نوع الترميز المستخدم في التعليق (مثل LaTeX، XML)، يحدد كيفية قراءة البيانات الإضافية",
          "values": [
            {
              "value": "application/x-latex",
              "description": "ترميز LaTeX"
            },
            {
              "value": "application/xml",
              "description": "ترميز XML"
            },
            {
              "value": "text/plain",
              "description": "نص عادي"
            }
          ]
        }
      ]
    },
    {
      "tag": "annotation-xml",
      "description": "يخزن معلومة إضافية بصيغة XML للمعادلة، يستخدم لتخزين البيانات الدلالية",
      "properties": [
        {
          "name": "encoding",
          "description": "يحدد نوع الترميز المستخدم في التعليق XML",
          "values": [
            {
              "value": "application/x-latex",
              "description": "ترميز LaTeX"
            },
            {
              "value": "MathML-Presentation",
              "description": "ترميز MathML Presentation"
            },
            {
              "value": "MathML-Content",
              "description": "ترميز MathML Content"
            }
          ]
        }
      ]
    },
    {
      "tag": "none",
      "description": "يستخدم كمكان فارغ (لا شيء) في الحالات التي تتطلب عنصراً فارغاً، مثل تعبئة مكان في جدول",
      "properties": []
    },
    {
      "tag": "mpadded",
      "description": "يغير أبعاد محتواه بإضافة أو طرح مسافات، يستخدم لضبط حجم العناصر في المعادلة",
      "properties": [
        {
          "name": "width",
          "description": "يضبط عرض المحتوى بإضافة أو طرح مسافات",
          "values": [
            {
              "value": "+0.2em",
              "description": "إضافة 0.2em"
            },
            {
              "value": "-0.1em",
              "description": "طرح 0.1em"
            },
            {
              "value": "1.2em",
              "description": "تعيين مباشر 1.2em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يضبط ارتفاع المحتوى بإضافة أو طرح مسافات",
          "values": [
            {
              "value": "+0.2em",
              "description": "إضافة 0.2em"
            },
            {
              "value": "-0.1em",
              "description": "طرح 0.1em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "depth",
          "description": "يضبط عمق المحتوى بإضافة أو طرح مسافات",
          "values": [
            {
              "value": "+0.2em",
              "description": "إضافة 0.2em"
            },
            {
              "value": "-0.1em",
              "description": "طرح 0.1em"
            }
          ],
          "freeInput": true
        },
        {
          "name": "lspace",
          "description": "يضبط المسافة اليسرى للمحتوى",
          "values": [
            {
              "value": "+0.2em",
              "description": "إضافة 0.2em"
            },
            {
              "value": "0.5em",
              "description": "تعيين 0.5em"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "mfraction",
      "description": "مرادف لـ mfrac للتوافق، يعرض كسراً رياضياً",
      "properties": [
        {
          "name": "linethickness",
          "description": "يحدد سمك خط الكسر",
          "values": [
            {
              "value": "thin",
              "description": "خط رفيع"
            },
            {
              "value": "medium",
              "description": "خط متوسط"
            },
            {
              "value": "thick",
              "description": "خط سميك"
            },
            {
              "value": "0",
              "description": "بدون خط"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "mlabeledtr",
      "description": "يضيف تسمية لصف في الجدول الرياضي، يستخدم لترقيم المعادلات",
      "properties": [
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للصف المسمى",
          "values": [
            {
              "value": "eq1",
              "description": "معرف المعادلة"
            },
            {
              "value": "eq2",
              "description": "معرف المعادلة الثانية"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "deprecated": [
    {
      "tag": "center",
      "description": "⚠️ عنصر مهمل - كان يوسّط المحتوى أفقياً في الصفحة. تم إهماله لأن التنسيق يجب أن يكون عبر CSS وليس في هيكل HTML",
      "deprecated": true,
      "replacement": "استخدم CSS: text-align: center",
      "severity": "high",
      "removalVersion": "HTML 4.0 (تم إهماله رسمياً منذ 1997)",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر (يسار إلى يمين أو يمين إلى يسار)",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين (للغة الإنجليزية والعبرية)"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار (للغة العربية والفارسية)"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر، يساعد في أدوات الترجمة وقارئات الشاشة",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            },
            {
              "value": "fr",
              "description": "اللغة الفرنسية"
            },
            {
              "value": "es",
              "description": "اللغة الإسبانية"
            },
            {
              "value": "de",
              "description": "اللغة الألمانية"
            },
            {
              "value": "it",
              "description": "اللغة الإيطالية"
            },
            {
              "value": "pt",
              "description": "اللغة البرتغالية"
            },
            {
              "value": "ru",
              "description": "اللغة الروسية"
            },
            {
              "value": "ja",
              "description": "اللغة اليابانية"
            },
            {
              "value": "zh",
              "description": "اللغة الصينية"
            },
            {
              "value": "ko",
              "description": "اللغة الكورية"
            },
            {
              "value": "hi",
              "description": "اللغة الهندية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يحدد اسم فئة CSS لتطبيق أنماط مخصصة على العنصر",
          "values": [],
          "freeInput": true
        },
        {
          "name": "id",
          "description": "يحدد معرفاً فريداً للعنصر يمكن استخدامه في CSS أو JavaScript",
          "values": [],
          "freeInput": true
        },
        {
          "name": "style",
          "description": "يسمح بإضافة أنماط CSS مباشرة على العنصر",
          "values": [],
          "freeInput": true
        },
        {
          "name": "title",
          "description": "يضيف تلميحاً يظهر عند تمرير الماوس فوق العنصر",
          "values": [],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "font",
      "description": "⚠️ عنصر مهمل - كان يحدد لون وحجم ونوع الخط للنص. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
      "deprecated": true,
      "replacement": "استخدم CSS: color, font-size, font-family",
      "severity": "high",
      "removalVersion": "HTML 4.0 (تم إهماله رسمياً منذ 1997)",
      "properties": [
        {
          "name": "color",
          "description": "يحدد لون النص. يجب استخدام خاصية color في CSS بدلاً منه",
          "values": [
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "yellow",
              "description": "لون أصفر"
            },
            {
              "value": "black",
              "description": "لون أسود"
            },
            {
              "value": "white",
              "description": "لون أبيض"
            },
            {
              "value": "gray",
              "description": "لون رمادي"
            },
            {
              "value": "orange",
              "description": "لون برتقالي"
            },
            {
              "value": "purple",
              "description": "لون بنفسجي"
            },
            {
              "value": "pink",
              "description": "لون وردي"
            },
            {
              "value": "brown",
              "description": "لون بني"
            },
            {
              "value": "#FF0000",
              "description": "أحمر (كود Hex)"
            },
            {
              "value": "#00FF00",
              "description": "أخضر (كود Hex)"
            },
            {
              "value": "#0000FF",
              "description": "أزرق (كود Hex)"
            },
            {
              "value": "#FFFF00",
              "description": "أصفر (كود Hex)"
            },
            {
              "value": "#000000",
              "description": "أسود (كود Hex)"
            },
            {
              "value": "#FFFFFF",
              "description": "أبيض (كود Hex)"
            },
            {
              "value": "#FFA500",
              "description": "برتقالي (كود Hex)"
            },
            {
              "value": "#800080",
              "description": "بنفسجي (كود Hex)"
            },
            {
              "value": "#FFC0CB",
              "description": "وردي (كود Hex)"
            },
            {
              "value": "#A52A2A",
              "description": "بني (كود Hex)"
            },
            {
              "value": "#808080",
              "description": "رمادي (كود Hex)"
            },
            {
              "value": "#C0C0C0",
              "description": "فضي (كود Hex)"
            },
            {
              "value": "#FF69B4",
              "description": "وردي ساخن (كود Hex)"
            },
            {
              "value": "#00FFFF",
              "description": "سماوي (كود Hex)"
            },
            {
              "value": "#FF00FF",
              "description": "أرجواني (كود Hex)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "face",
          "description": "يحدد نوع الخط المستخدم للنص. يجب استخدام font-family في CSS بدلاً منه",
          "values": [
            {
              "value": "Arial",
              "description": "خط Arial - شائع وسهل القراءة"
            },
            {
              "value": "Arial Black",
              "description": "خط Arial Black - خط غامق"
            },
            {
              "value": "Helvetica",
              "description": "خط Helvetica - مشابه لـ Arial"
            },
            {
              "value": "Times New Roman",
              "description": "خط Times New Roman - يستخدم في النصوص المطبوعة"
            },
            {
              "value": "Times",
              "description": "خط Times - مشابه لـ Times New Roman"
            },
            {
              "value": "Georgia",
              "description": "خط Georgia - خط serif ممتاز للشاشات"
            },
            {
              "value": "Verdana",
              "description": "خط Verdana - واضح على الشاشات"
            },
            {
              "value": "Tahoma",
              "description": "خط Tahoma - يدعم العربية بشكل جيد"
            },
            {
              "value": "Trebuchet MS",
              "description": "خط Trebuchet MS - خط sans-serif جميل"
            },
            {
              "value": "Courier New",
              "description": "خط Courier New - خط أحادي التباعد"
            },
            {
              "value": "Courier",
              "description": "خط Courier - خط أحادي التباعد"
            },
            {
              "value": "Impact",
              "description": "خط Impact - خط غامق ومضغوط"
            },
            {
              "value": "Comic Sans MS",
              "description": "خط Comic Sans MS - خط غير رسمي"
            },
            {
              "value": "Traditional Arabic",
              "description": "خط عربي تقليدي"
            },
            {
              "value": "Arial Unicode MS",
              "description": "خط يدعم أحرف يونيكود"
            },
            {
              "value": "Lucida Grande",
              "description": "خط Lucida Grande - خط جميل على ماك"
            },
            {
              "value": "Geneva",
              "description": "خط Geneva - خط sans-serif"
            },
            {
              "value": "Palatino",
              "description": "خط Palatino - خط serif كلاسيكي"
            },
            {
              "value": "Bookman",
              "description": "خط Bookman - خط serif مريح للقراءة"
            },
            {
              "value": "New York",
              "description": "خط New York - خط serif لأجهزة آبل"
            },
            {
              "value": "SF Pro",
              "description": "خط SF Pro - الخط الرسمي لأجهزة آبل"
            },
            {
              "value": "Roboto",
              "description": "خط Roboto - الخط الرسمي لأندرويد"
            },
            {
              "value": "Open Sans",
              "description": "خط Open Sans - شائع ومفتوح المصدر"
            },
            {
              "value": "Lato",
              "description": "خط Lato - خط sans-serif شائع"
            },
            {
              "value": "Montserrat",
              "description": "خط Montserrat - خط sans-serif عصري"
            },
            {
              "value": "Raleway",
              "description": "خط Raleway - خط sans-serif أنيق"
            },
            {
              "value": "Merriweather",
              "description": "خط Merriweather - خط serif ممتاز للقراءة"
            },
            {
              "value": "Playfair Display",
              "description": "خط Playfair Display - خط serif راقٍ"
            },
            {
              "value": "Ubuntu",
              "description": "خط Ubuntu - خط sans-serif مفتوح المصدر"
            },
            {
              "value": "Noto Sans",
              "description": "خط Noto Sans - خط يدعم كل لغات العالم"
            }
          ],
          "freeInput": true
        },
        {
          "name": "size",
          "description": "يحدد حجم الخط من 1 إلى 7. يجب استخدام font-size في CSS بدلاً منه",
          "values": [
            {
              "value": "1",
              "description": "أصغر حجم (صغير جداً - ≈10px)"
            },
            {
              "value": "2",
              "description": "حجم صغير (≈12px)"
            },
            {
              "value": "3",
              "description": "الحجم الافتراضي (≈14px)"
            },
            {
              "value": "4",
              "description": "حجم متوسط (≈16px)"
            },
            {
              "value": "5",
              "description": "حجم كبير (≈18px)"
            },
            {
              "value": "6",
              "description": "حجم كبير جداً (≈22px)"
            },
            {
              "value": "7",
              "description": "أكبر حجم (كبير جداً - ≈26px)"
            },
            {
              "value": "+1",
              "description": "يكبر النص بمقدار درجة واحدة"
            },
            {
              "value": "+2",
              "description": "يكبر النص بمقدار درجتين"
            },
            {
              "value": "-1",
              "description": "يصغر النص بمقدار درجة واحدة"
            },
            {
              "value": "-2",
              "description": "يصغر النص بمقدار درجتين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            },
            {
              "value": "fr",
              "description": "اللغة الفرنسية"
            },
            {
              "value": "es",
              "description": "اللغة الإسبانية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "big",
      "description": "⚠️ عنصر مهمل - كان يكبّر حجم النص مقارنة بالنص المحيط به. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
      "deprecated": true,
      "replacement": "استخدم CSS: font-size: larger",
      "severity": "medium",
      "removalVersion": "HTML 5 (تم إهماله في 2014)",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "strike",
      "description": "⚠️ عنصر مهمل - كان يشطب النص بخط في وسطه. تم إهماله لوجود بدائل أفضل وأكثر دلالية",
      "deprecated": true,
      "replacement": "استخدم <s> أو <del> أو CSS: text-decoration: line-through",
      "severity": "medium",
      "removalVersion": "HTML 4.0 (تم إهماله منذ 1997، وحل محله <del> و <s>)",
      "properties": [
        {
          "name": "cite",
          "description": "يحدد رابطاً يشرح سبب شطب النص (مثل رابط سياسة التعديل)",
          "values": [],
          "freeInput": true
        },
        {
          "name": "datetime",
          "description": "يحدد تاريخ ووقت شطب النص بتنسيق ISO (YYYY-MM-DDTHH:MM:SS)",
          "values": [
            {
              "value": "2024-01-15",
              "description": "تاريخ الشطب"
            },
            {
              "value": "2024-01-15T14:30:00",
              "description": "تاريخ ووقت الشطب"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "tt",
      "description": "⚠️ عنصر مهمل - كان يعرض نصاً بخط أحادي التباعد (Teletype). تم إهماله لوجود بدائل أفضل",
      "deprecated": true,
      "replacement": "استخدم <code> أو <kbd> أو <samp> أو CSS: font-family: monospace",
      "severity": "medium",
      "removalVersion": "HTML 5 (تم إهماله في 2014)",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "marquee",
      "description": "⚠️ عنصر مهمل - كان يجعل النص يتحرك عبر الشاشة (نص متحرك). تم إهماله لأنه غير موصى به لإزعاجه للمستخدمين وتأثيره السلبي على إمكانية الوصول",
      "deprecated": true,
      "replacement": "استخدم CSS Animations أو JavaScript للحركة (مع مراعاة إمكانية الوصول)",
      "severity": "high",
      "removalVersion": "غير موصى به منذ HTML 4.0، ولكنه لم يُزَل رسمياً حتى HTML 5",
      "properties": [
        {
          "name": "behavior",
          "description": "يحدد نمط حركة النص",
          "values": [
            {
              "value": "scroll",
              "description": "يمر النص ويعاود الظهور من البداية (حركة مستمرة)"
            },
            {
              "value": "slide",
              "description": "ينزلق النص مرة واحدة ثم يتوقف عند الحافة"
            },
            {
              "value": "alternate",
              "description": "يتحرك النص ذهاباً وإياباً (كالبندول)"
            }
          ]
        },
        {
          "name": "direction",
          "description": "يحدد اتجاه حركة النص",
          "values": [
            {
              "value": "left",
              "description": "يتحرك النص من اليمين إلى اليسار"
            },
            {
              "value": "right",
              "description": "يتحرك النص من اليسار إلى اليمين"
            },
            {
              "value": "up",
              "description": "يتحرك النص من الأسفل إلى الأعلى"
            },
            {
              "value": "down",
              "description": "يتحرك النص من الأعلى إلى الأسفل"
            }
          ]
        },
        {
          "name": "scrollamount",
          "description": "يحدد سرعة الحركة بوحدة البكسل لكل خطوة. القيم الأعلى = حركة أسرع",
          "values": [
            {
              "value": "1",
              "description": "حركة بطيئة جداً (≈1px لكل خطوة)"
            },
            {
              "value": "2",
              "description": "حركة بطيئة جداً (≈2px لكل خطوة)"
            },
            {
              "value": "3",
              "description": "حركة بطيئة (≈3px لكل خطوة)"
            },
            {
              "value": "4",
              "description": "حركة بطيئة (≈4px لكل خطوة)"
            },
            {
              "value": "5",
              "description": "حركة بطيئة (≈5px لكل خطوة)"
            },
            {
              "value": "6",
              "description": "حركة متوسطة (≈6px لكل خطوة)"
            },
            {
              "value": "7",
              "description": "حركة متوسطة (≈7px لكل خطوة)"
            },
            {
              "value": "8",
              "description": "حركة متوسطة (≈8px لكل خطوة)"
            },
            {
              "value": "9",
              "description": "حركة متوسطة (≈9px لكل خطوة)"
            },
            {
              "value": "10",
              "description": "حركة سريعة (≈10px لكل خطوة)"
            },
            {
              "value": "12",
              "description": "حركة سريعة (≈12px لكل خطوة)"
            },
            {
              "value": "15",
              "description": "حركة سريعة (≈15px لكل خطوة)"
            },
            {
              "value": "20",
              "description": "حركة سريعة جداً (≈20px لكل خطوة)"
            },
            {
              "value": "25",
              "description": "حركة سريعة جداً (≈25px لكل خطوة)"
            },
            {
              "value": "30",
              "description": "حركة سريعة جداً (≈30px لكل خطوة)"
            },
            {
              "value": "40",
              "description": "حركة سريعة جداً (≈40px لكل خطوة)"
            },
            {
              "value": "50",
              "description": "حركة سريعة جداً (≈50px لكل خطوة)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "scrolldelay",
          "description": "يحدد التأخير بالميلي ثانية بين كل خطوة حركة. القيم الأعلى = حركة أبطأ",
          "values": [
            {
              "value": "10",
              "description": "تأخير 10 ميللي ثانية (≈100 حركة/ثانية)"
            },
            {
              "value": "20",
              "description": "تأخير 20 ميللي ثانية (≈50 حركة/ثانية)"
            },
            {
              "value": "30",
              "description": "تأخير 30 ميللي ثانية (≈33 حركة/ثانية)"
            },
            {
              "value": "40",
              "description": "تأخير 40 ميللي ثانية (≈25 حركة/ثانية)"
            },
            {
              "value": "50",
              "description": "تأخير 50 ميللي ثانية (≈20 حركة/ثانية)"
            },
            {
              "value": "60",
              "description": "تأخير 60 ميللي ثانية (≈16 حركة/ثانية) - قيمة افتراضية"
            },
            {
              "value": "80",
              "description": "تأخير 80 ميللي ثانية (≈12.5 حركة/ثانية)"
            },
            {
              "value": "100",
              "description": "تأخير 100 ميللي ثانية (≈10 حركات/ثانية)"
            },
            {
              "value": "120",
              "description": "تأخير 120 ميللي ثانية (≈8 حركات/ثانية)"
            },
            {
              "value": "150",
              "description": "تأخير 150 ميللي ثانية (≈6.6 حركات/ثانية)"
            },
            {
              "value": "200",
              "description": "تأخير 200 ميللي ثانية (≈5 حركات/ثانية)"
            },
            {
              "value": "250",
              "description": "تأخير 250 ميللي ثانية (≈4 حركات/ثانية)"
            },
            {
              "value": "300",
              "description": "تأخير 300 ميللي ثانية (≈3.3 حركات/ثانية)"
            },
            {
              "value": "400",
              "description": "تأخير 400 ميللي ثانية (≈2.5 حركة/ثانية)"
            },
            {
              "value": "500",
              "description": "تأخير 500 ميللي ثانية (≈2 حركة/ثانية)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "loop",
          "description": "يحدد عدد مرات تكرار الحركة. -1 يعني تكرار لا نهائي",
          "values": [
            {
              "value": "-1",
              "description": "تكرار لا نهائي (∞)"
            },
            {
              "value": "0",
              "description": "تكرار لا نهائي (∞)"
            },
            {
              "value": "1",
              "description": "مرة واحدة فقط"
            },
            {
              "value": "2",
              "description": "مرتين"
            },
            {
              "value": "3",
              "description": "ثلاث مرات"
            },
            {
              "value": "4",
              "description": "أربع مرات"
            },
            {
              "value": "5",
              "description": "خمس مرات"
            },
            {
              "value": "10",
              "description": "عشر مرات"
            },
            {
              "value": "20",
              "description": "عشرون مرة"
            },
            {
              "value": "50",
              "description": "خمسون مرة"
            },
            {
              "value": "100",
              "description": "مائة مرة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض شريط الحركة",
          "values": [
            {
              "value": "100%",
              "description": "عرض كامل الصفحة"
            },
            {
              "value": "90%",
              "description": "90% من عرض الصفحة"
            },
            {
              "value": "80%",
              "description": "80% من عرض الصفحة"
            },
            {
              "value": "75%",
              "description": "75% من عرض الصفحة"
            },
            {
              "value": "70%",
              "description": "70% من عرض الصفحة"
            },
            {
              "value": "60%",
              "description": "60% من عرض الصفحة"
            },
            {
              "value": "50%",
              "description": "نصف عرض الصفحة"
            },
            {
              "value": "40%",
              "description": "40% من عرض الصفحة"
            },
            {
              "value": "30%",
              "description": "30% من عرض الصفحة"
            },
            {
              "value": "25%",
              "description": "ربع عرض الصفحة"
            },
            {
              "value": "20%",
              "description": "20% من عرض الصفحة"
            },
            {
              "value": "10%",
              "description": "10% من عرض الصفحة"
            },
            {
              "value": "100px",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "150px",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200px",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "250px",
              "description": "عرض 250 بكسل"
            },
            {
              "value": "300px",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "350px",
              "description": "عرض 350 بكسل"
            },
            {
              "value": "400px",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "450px",
              "description": "عرض 450 بكسل"
            },
            {
              "value": "500px",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600px",
              "description": "عرض 600 بكسل"
            },
            {
              "value": "700px",
              "description": "عرض 700 بكسل"
            },
            {
              "value": "800px",
              "description": "عرض 800 بكسل"
            },
            {
              "value": "900px",
              "description": "عرض 900 بكسل"
            },
            {
              "value": "1000px",
              "description": "عرض 1000 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع شريط الحركة",
          "values": [
            {
              "value": "10px",
              "description": "ارتفاع 10 بكسل"
            },
            {
              "value": "15px",
              "description": "ارتفاع 15 بكسل"
            },
            {
              "value": "20px",
              "description": "ارتفاع 20 بكسل"
            },
            {
              "value": "25px",
              "description": "ارتفاع 25 بكسل"
            },
            {
              "value": "30px",
              "description": "ارتفاع 30 بكسل"
            },
            {
              "value": "35px",
              "description": "ارتفاع 35 بكسل"
            },
            {
              "value": "40px",
              "description": "ارتفاع 40 بكسل"
            },
            {
              "value": "45px",
              "description": "ارتفاع 45 بكسل"
            },
            {
              "value": "50px",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "55px",
              "description": "ارتفاع 55 بكسل"
            },
            {
              "value": "60px",
              "description": "ارتفاع 60 بكسل"
            },
            {
              "value": "70px",
              "description": "ارتفاع 70 بكسل"
            },
            {
              "value": "80px",
              "description": "ارتفاع 80 بكسل"
            },
            {
              "value": "90px",
              "description": "ارتفاع 90 بكسل"
            },
            {
              "value": "100px",
              "description": "ارتفاع 100 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "bgcolor",
          "description": "يحدد لون خلفية شريط الحركة",
          "values": [
            {
              "value": "transparent",
              "description": "خلفية شفافة"
            },
            {
              "value": "yellow",
              "description": "خلفية صفراء"
            },
            {
              "value": "lightyellow",
              "description": "خلفية صفراء فاتحة"
            },
            {
              "value": "gold",
              "description": "خلفية ذهبية"
            },
            {
              "value": "orange",
              "description": "خلفية برتقالية"
            },
            {
              "value": "lightblue",
              "description": "خلفية زرقاء فاتحة"
            },
            {
              "value": "blue",
              "description": "خلفية زرقاء"
            },
            {
              "value": "lightgreen",
              "description": "خلفية خضراء فاتحة"
            },
            {
              "value": "green",
              "description": "خلفية خضراء"
            },
            {
              "value": "lightpink",
              "description": "خلفية وردية فاتحة"
            },
            {
              "value": "pink",
              "description": "خلفية وردية"
            },
            {
              "value": "white",
              "description": "خلفية بيضاء"
            },
            {
              "value": "gray",
              "description": "خلفية رمادية"
            },
            {
              "value": "lightgray",
              "description": "خلفية رمادية فاتحة"
            },
            {
              "value": "darkgray",
              "description": "خلفية رمادية داكنة"
            },
            {
              "value": "black",
              "description": "خلفية سوداء"
            },
            {
              "value": "#FFE4B5",
              "description": "خلفية بيج فاتح (Moccasin)"
            },
            {
              "value": "#F0F8FF",
              "description": "خلفية أزرق فاتح جداً (AliceBlue)"
            },
            {
              "value": "#FAFAD2",
              "description": "خلفية أصفر فاتح جداً (LightGoldenrodYellow)"
            },
            {
              "value": "#E6E6FA",
              "description": "خلفية خزامي (Lavender)"
            },
            {
              "value": "#FFE4E1",
              "description": "خلفية وردي فاتح جداً (MistyRose)"
            },
            {
              "value": "#F5F5DC",
              "description": "خلفية بيج (Beige)"
            },
            {
              "value": "#FFF8DC",
              "description": "خلفية Cornsilk"
            }
          ],
          "freeInput": true
        },
        {
          "name": "hspace",
          "description": "يحدد مسافة فارغة أفقية (يمين ويسار) حول شريط الحركة بوحدة البكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة"
            },
            {
              "value": "2",
              "description": "2 بكسل مسافة"
            },
            {
              "value": "5",
              "description": "5 بكسل مسافة"
            },
            {
              "value": "8",
              "description": "8 بكسل مسافة"
            },
            {
              "value": "10",
              "description": "10 بكسل مسافة"
            },
            {
              "value": "12",
              "description": "12 بكسل مسافة"
            },
            {
              "value": "15",
              "description": "15 بكسل مسافة"
            },
            {
              "value": "18",
              "description": "18 بكسل مسافة"
            },
            {
              "value": "20",
              "description": "20 بكسل مسافة"
            },
            {
              "value": "25",
              "description": "25 بكسل مسافة"
            },
            {
              "value": "30",
              "description": "30 بكسل مسافة"
            },
            {
              "value": "40",
              "description": "40 بكسل مسافة"
            },
            {
              "value": "50",
              "description": "50 بكسل مسافة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "vspace",
          "description": "يحدد مسافة فارغة رأسية (أعلى وأسفل) حول شريط الحركة بوحدة البكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة"
            },
            {
              "value": "2",
              "description": "2 بكسل مسافة"
            },
            {
              "value": "5",
              "description": "5 بكسل مسافة"
            },
            {
              "value": "8",
              "description": "8 بكسل مسافة"
            },
            {
              "value": "10",
              "description": "10 بكسل مسافة"
            },
            {
              "value": "12",
              "description": "12 بكسل مسافة"
            },
            {
              "value": "15",
              "description": "15 بكسل مسافة"
            },
            {
              "value": "18",
              "description": "18 بكسل مسافة"
            },
            {
              "value": "20",
              "description": "20 بكسل مسافة"
            },
            {
              "value": "25",
              "description": "25 بكسل مسافة"
            },
            {
              "value": "30",
              "description": "30 بكسل مسافة"
            },
            {
              "value": "40",
              "description": "40 بكسل مسافة"
            },
            {
              "value": "50",
              "description": "50 بكسل مسافة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "applet",
      "description": "⚠️ عنصر مهمل - كان يضمّن تطبيقات Java Applet في الصفحة. تم إهماله لمشاكل أمانية وضعف أداء وتوقف دعم المتصفحات له",
      "deprecated": true,
      "replacement": "استخدم JavaScript أو WebAssembly لإنشاء تطبيقات ويب تفاعلية",
      "severity": "critical",
      "removalVersion": "تم إهماله في HTML 4.0 وإزالته من HTML 5 في 2014",
      "properties": [
        {
          "name": "code",
          "description": "يحدد اسم ملف الـ class الخاص بالتطبيق المصغّر",
          "values": [
            {
              "value": "MyApplet.class",
              "description": "ملف الـ class الأساسي للتطبيق"
            },
            {
              "value": "Calculator.class",
              "description": "تطبيق آلة حاسبة"
            },
            {
              "value": "Game.class",
              "description": "تطبيق لعبة"
            },
            {
              "value": "ChatApplet.class",
              "description": "تطبيق محادثة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "codebase",
          "description": "يحدد مسار المجلد الذي يحتوي على ملفات التطبيق المصغّر",
          "values": [
            {
              "value": ".",
              "description": "نفس مجلد الصفحة"
            },
            {
              "value": "/applets/",
              "description": "مجلد applets داخل الموقع"
            },
            {
              "value": "https://example.com/applets/",
              "description": "مجلد applets على موقع آخر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "archive",
          "description": "يحدد مسار ملف أرشيف jar يحتوي كل ملفات التطبيق المصغّر",
          "values": [
            {
              "value": "applet.jar",
              "description": "ملف أرشيف يحتوي كل التطبيق"
            },
            {
              "value": "applet.zip",
              "description": "ملف مضغوط يحتوي كل التطبيق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض منطقة عرض التطبيق بالبكسل أو النسبة المئوية",
          "values": [
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "250",
              "description": "عرض 250 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "350",
              "description": "عرض 350 بكسل"
            },
            {
              "value": "400",
              "description": "عرض 400 بكسل"
            },
            {
              "value": "500",
              "description": "عرض 500 بكسل"
            },
            {
              "value": "600",
              "description": "عرض 600 بكسل"
            },
            {
              "value": "100%",
              "description": "عرض كامل المنطقة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع منطقة عرض التطبيق بالبكسل أو النسبة المئوية",
          "values": [
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "150",
              "description": "ارتفاع 150 بكسل"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "250",
              "description": "ارتفاع 250 بكسل"
            },
            {
              "value": "300",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "350",
              "description": "ارتفاع 350 بكسل"
            },
            {
              "value": "400",
              "description": "ارتفاع 400 بكسل"
            },
            {
              "value": "500",
              "description": "ارتفاع 500 بكسل"
            },
            {
              "value": "600",
              "description": "ارتفاع 600 بكسل"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل المنطقة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "alt",
          "description": "يحدد نصاً بديلاً يظهر للمستخدمين الذين لا يستطيعون تشغيل التطبيق (متصفحات لا تدعم Java)",
          "values": [
            {
              "value": "تطبيق Java غير مدعوم في متصفحك",
              "description": "رسالة توضيحية للمستخدم"
            },
            {
              "value": "برجاء تثبيت Java لتشغيل هذا التطبيق",
              "description": "رسالة توجيهية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "name",
          "description": "يحدد اسماً للتطبيق يمكن استخدامه في JavaScript للتفاعل معه",
          "values": [
            {
              "value": "myApplet",
              "description": "اسم التطبيق"
            },
            {
              "value": "calculator",
              "description": "اسم تطبيق الآلة الحاسبة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align",
          "description": "يحدد محاذاة التطبيق بالنسبة للنص المحيط به",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "center",
              "description": "توسيط"
            },
            {
              "value": "top",
              "description": "محاذاة للأعلى"
            },
            {
              "value": "bottom",
              "description": "محاذاة للأسفل"
            },
            {
              "value": "middle",
              "description": "محاذاة للوسط"
            },
            {
              "value": "absmiddle",
              "description": "محاذاة للوسط المطلق"
            },
            {
              "value": "absbottom",
              "description": "محاذاة للأسفل المطلق"
            },
            {
              "value": "texttop",
              "description": "محاذاة لأعلى النص"
            },
            {
              "value": "baseline",
              "description": "محاذاة لخط الأساس"
            }
          ]
        },
        {
          "name": "hspace",
          "description": "يحدد مسافة فارغة أفقية (يمين ويسار) حول التطبيق",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة"
            },
            {
              "value": "5",
              "description": "5 بكسل مسافة"
            },
            {
              "value": "10",
              "description": "10 بكسل مسافة"
            },
            {
              "value": "15",
              "description": "15 بكسل مسافة"
            },
            {
              "value": "20",
              "description": "20 بكسل مسافة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "vspace",
          "description": "يحدد مسافة فارغة رأسية (أعلى وأسفل) حول التطبيق",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة"
            },
            {
              "value": "5",
              "description": "5 بكسل مسافة"
            },
            {
              "value": "10",
              "description": "10 بكسل مسافة"
            },
            {
              "value": "15",
              "description": "15 بكسل مسافة"
            },
            {
              "value": "20",
              "description": "20 بكسل مسافة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "frame",
      "description": "⚠️ عنصر مهمل - كان يمثل إطاراً واحداً داخل مجموعة إطارات (frameset). تم إهماله لأنه يسبب مشاكل في SEO وإمكانية الوصول والتنقل",
      "deprecated": true,
      "replacement": "استخدم <iframe>",
      "severity": "critical",
      "removalVersion": "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5",
      "properties": [
        {
          "name": "src",
          "description": "يحدد عنوان URL للصفحة المعروضة داخل هذا الإطار",
          "values": [
            {
              "value": "page1.html",
              "description": "صفحة في نفس المجلد"
            },
            {
              "value": "/pages/page1.html",
              "description": "صفحة في مجلد pages"
            },
            {
              "value": "https://example.com/page.html",
              "description": "صفحة من موقع آخر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "name",
          "description": "يحدد اسم الإطار لاستهدافه من الروابط أو النماذج باستخدام target",
          "values": [
            {
              "value": "main",
              "description": "الإطار الرئيسي"
            },
            {
              "value": "sidebar",
              "description": "الإطار الجانبي"
            },
            {
              "value": "header",
              "description": "الإطار العلوي"
            },
            {
              "value": "footer",
              "description": "الإطار السفلي"
            },
            {
              "value": "navigation",
              "description": "إطار التنقل"
            },
            {
              "value": "content",
              "description": "إطار المحتوى"
            },
            {
              "value": "top",
              "description": "الإطار العلوي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "noresize",
          "description": "يمنع المستخدم من تغيير حجم الإطار بالسحب بالفأرة",
          "values": [
            {
              "value": "",
              "description": "يمنع تغيير الحجم (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "scrolling",
          "description": "يتحكم في إظهار أو إخفاء أشرطة التمرير داخل الإطار",
          "values": [
            {
              "value": "yes",
              "description": "يظهر أشرطة التمرير دائماً"
            },
            {
              "value": "no",
              "description": "يمنع أشرطة التمرير نهائياً"
            },
            {
              "value": "auto",
              "description": "يظهر أشرطة التمرير فقط عند الحاجة (افتراضي)"
            }
          ]
        },
        {
          "name": "marginwidth",
          "description": "يحدد الهامش الأيسر والأيمن داخل الإطار بوحدة البكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش"
            },
            {
              "value": "1",
              "description": "هامش 1 بكسل"
            },
            {
              "value": "2",
              "description": "هامش 2 بكسل"
            },
            {
              "value": "3",
              "description": "هامش 3 بكسل"
            },
            {
              "value": "4",
              "description": "هامش 4 بكسل"
            },
            {
              "value": "5",
              "description": "هامش 5 بكسل"
            },
            {
              "value": "6",
              "description": "هامش 6 بكسل"
            },
            {
              "value": "7",
              "description": "هامش 7 بكسل"
            },
            {
              "value": "8",
              "description": "هامش 8 بكسل"
            },
            {
              "value": "9",
              "description": "هامش 9 بكسل"
            },
            {
              "value": "10",
              "description": "هامش 10 بكسل"
            },
            {
              "value": "15",
              "description": "هامش 15 بكسل"
            },
            {
              "value": "20",
              "description": "هامش 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "marginheight",
          "description": "يحدد الهامش العلوي والسفلي داخل الإطار بوحدة البكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش"
            },
            {
              "value": "1",
              "description": "هامش 1 بكسل"
            },
            {
              "value": "2",
              "description": "هامش 2 بكسل"
            },
            {
              "value": "3",
              "description": "هامش 3 بكسل"
            },
            {
              "value": "4",
              "description": "هامش 4 بكسل"
            },
            {
              "value": "5",
              "description": "هامش 5 بكسل"
            },
            {
              "value": "6",
              "description": "هامش 6 بكسل"
            },
            {
              "value": "7",
              "description": "هامش 7 بكسل"
            },
            {
              "value": "8",
              "description": "هامش 8 بكسل"
            },
            {
              "value": "9",
              "description": "هامش 9 بكسل"
            },
            {
              "value": "10",
              "description": "هامش 10 بكسل"
            },
            {
              "value": "15",
              "description": "هامش 15 بكسل"
            },
            {
              "value": "20",
              "description": "هامش 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "frameborder",
          "description": "يتحكم في إظهار أو إخفاء حدود الإطار",
          "values": [
            {
              "value": "1",
              "description": "يظهر حدود الإطار (افتراضي)"
            },
            {
              "value": "0",
              "description": "يخفي حدود الإطار"
            },
            {
              "value": "yes",
              "description": "يظهر حدود الإطار"
            },
            {
              "value": "no",
              "description": "يخفي حدود الإطار"
            }
          ]
        },
        {
          "name": "bordercolor",
          "description": "يحدد لون حدود الإطار",
          "values": [
            {
              "value": "black",
              "description": "لون أسود"
            },
            {
              "value": "gray",
              "description": "لون رمادي"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "#000000",
              "description": "أسود (كود Hex)"
            },
            {
              "value": "#808080",
              "description": "رمادي (كود Hex)"
            },
            {
              "value": "#0000FF",
              "description": "أزرق (كود Hex)"
            },
            {
              "value": "#FF0000",
              "description": "أحمر (كود Hex)"
            },
            {
              "value": "#00FF00",
              "description": "أخضر (كود Hex)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "longdesc",
          "description": "يحدد رابطاً لصفحة تحتوي وصفاً طويلاً لمحتوى الإطار (لمن لا يستطيعون رؤيته)",
          "values": [
            {
              "value": "description.html",
              "description": "صفحة وصف محتوى الإطار"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "frameset",
      "description": "⚠️ عنصر مهمل - كان يقسّم النافذة إلى عدة إطارات. تم إهماله لأنه يسبب مشاكل في SEO وإمكانية الوصول والتنقل",
      "deprecated": true,
      "replacement": "استخدم <iframe> أو CSS Grid/Flexbox للتقسيم",
      "severity": "critical",
      "removalVersion": "تم إهماله في HTML 4.01 (1999) وإزالته بالكامل من HTML 5",
      "properties": [
        {
          "name": "rows",
          "description": "يقسّم النافذة أفقياً إلى صفوف بارتفاعات محددة. يمكن استخدام بكسل، نسبة مئوية، أو * للباقي",
          "values": [
            {
              "value": "100,200",
              "description": "صفان: الأول 100 بكسل، الثاني 200 بكسل"
            },
            {
              "value": "50%,50%",
              "description": "صفان متساويان في الارتفاع"
            },
            {
              "value": "25%,75%",
              "description": "صفان: الأول 25%، الثاني 75%"
            },
            {
              "value": "33%,33%,33%",
              "description": "ثلاثة صفوف متساوية"
            },
            {
              "value": "100,*",
              "description": "صفان: الأول 100 بكسل، الثاني الباقي"
            },
            {
              "value": "*,200,*",
              "description": "ثلاثة صفوف: الأول والثالث الباقي، الثاني 200 بكسل"
            },
            {
              "value": "2*,*",
              "description": "نسبتين: الأول ضعف الثاني"
            },
            {
              "value": "100,200,300",
              "description": "ثلاثة صفوف بارتفاعات محددة"
            },
            {
              "value": "100,*,200",
              "description": "ثلاثة صفوف: الأول والثالث محددان، الثاني الباقي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cols",
          "description": "يقسّم النافذة عمودياً إلى أعمدة بعروض محددة. يمكن استخدام بكسل، نسبة مئوية، أو * للباقي",
          "values": [
            {
              "value": "100,200",
              "description": "عمودان: الأول 100 بكسل، الثاني 200 بكسل"
            },
            {
              "value": "50%,50%",
              "description": "عمودان متساويان في العرض"
            },
            {
              "value": "25%,75%",
              "description": "عمودان: الأول 25%، الثاني 75%"
            },
            {
              "value": "33%,33%,33%",
              "description": "ثلاثة أعمدة متساوية"
            },
            {
              "value": "100,*",
              "description": "عمودان: الأول 100 بكسل، الثاني الباقي"
            },
            {
              "value": "*,200,*",
              "description": "ثلاثة أعمدة: الأول والثالث الباقي، الثاني 200 بكسل"
            },
            {
              "value": "2*,*",
              "description": "نسبتين: الأول ضعف الثاني"
            },
            {
              "value": "100,200,300",
              "description": "ثلاثة أعمدة بعروض محددة"
            },
            {
              "value": "100,*,200",
              "description": "ثلاثة أعمدة: الأول والثالث محددان، الثاني الباقي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border",
          "description": "يحدد سمك الحدود بين الإطارات بوحدة البكسل",
          "values": [
            {
              "value": "0",
              "description": "بدون حدود"
            },
            {
              "value": "1",
              "description": "حد 1 بكسل"
            },
            {
              "value": "2",
              "description": "حد 2 بكسل"
            },
            {
              "value": "3",
              "description": "حد 3 بكسل"
            },
            {
              "value": "5",
              "description": "حد 5 بكسل"
            },
            {
              "value": "10",
              "description": "حد 10 بكسل"
            },
            {
              "value": "15",
              "description": "حد 15 بكسل"
            },
            {
              "value": "20",
              "description": "حد 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "frameborder",
          "description": "يتحكم في إظهار أو إخفاء حدود الإطارات",
          "values": [
            {
              "value": "1",
              "description": "يظهر حدود الإطارات (افتراضي)"
            },
            {
              "value": "0",
              "description": "يخفي حدود الإطارات"
            },
            {
              "value": "yes",
              "description": "يظهر حدود الإطارات"
            },
            {
              "value": "no",
              "description": "يخفي حدود الإطارات"
            }
          ]
        },
        {
          "name": "bordercolor",
          "description": "يحدد لون حدود الإطارات",
          "values": [
            {
              "value": "black",
              "description": "لون أسود"
            },
            {
              "value": "gray",
              "description": "لون رمادي"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "#000000",
              "description": "أسود (كود Hex)"
            },
            {
              "value": "#808080",
              "description": "رمادي (كود Hex)"
            },
            {
              "value": "#0000FF",
              "description": "أزرق (كود Hex)"
            },
            {
              "value": "#FF0000",
              "description": "أحمر (كود Hex)"
            },
            {
              "value": "#00FF00",
              "description": "أخضر (كود Hex)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "framespacing",
          "description": "يحدد المسافة بين الإطارات بوحدة البكسل (خاص بمتصفح Internet Explorer)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة"
            },
            {
              "value": "1",
              "description": "مسافة 1 بكسل"
            },
            {
              "value": "2",
              "description": "مسافة 2 بكسل"
            },
            {
              "value": "3",
              "description": "مسافة 3 بكسل"
            },
            {
              "value": "5",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10",
              "description": "مسافة 10 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "noframes",
      "description": "⚠️ عنصر مهمل - كان محتوى بديلاً للمتصفحات التي لا تدعم frameset. أصبح غير ضروري مع إهمال frameset",
      "deprecated": true,
      "replacement": "استخدم <noscript> للبدائل عند الحاجة",
      "severity": "low",
      "removalVersion": "تم إهماله في HTML 5 (2014)",
      "properties": []
    },
    {
      "tag": "acronym",
      "description": "⚠️ عنصر مهمل - كان يعرض اختصاراً يظهر شرحه الكامل عند تمرير الماوس. تم إهماله لوجود عنصر abbr الذي يؤدي نفس الغرض بشكل موحّد",
      "deprecated": true,
      "replacement": "استخدم <abbr>",
      "severity": "medium",
      "removalVersion": "تم إهماله في HTML 5 (2014)",
      "properties": [
        {
          "name": "title",
          "description": "الشرح الكامل للاختصار الذي يظهر عند تمرير الماوس فوقه",
          "values": [
            {
              "value": "HyperText Markup Language",
              "description": "شرح اختصار HTML"
            },
            {
              "value": "Cascading Style Sheets",
              "description": "شرح اختصار CSS"
            },
            {
              "value": "JavaScript",
              "description": "شرح اختصار JS"
            },
            {
              "value": "Application Programming Interface",
              "description": "شرح اختصار API"
            },
            {
              "value": "Document Object Model",
              "description": "شرح اختصار DOM"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "dir",
      "description": "⚠️ عنصر مهمل - كان ينشئ قائمة أدلة أو ملفات. فقد استخدامه المميز واستُبدل بعنصر ul العادي",
      "deprecated": true,
      "replacement": "استخدم <ul>",
      "severity": "medium",
      "removalVersion": "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5",
      "properties": [
        {
          "name": "compact",
          "description": "يعرض القائمة بتباعد أضيق بين العناصر",
          "values": [
            {
              "value": "",
              "description": "يفعّل العرض المضغوط (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "basefont",
      "description": "⚠️ عنصر مهمل - كان يحدد حجم ولون ونوع الخط الافتراضي لكامل الصفحة. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
      "deprecated": true,
      "replacement": "استخدم CSS: font-family, font-size, color على body",
      "severity": "high",
      "removalVersion": "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5",
      "properties": [
        {
          "name": "size",
          "description": "يحدد حجم الخط الافتراضي للصفحة من 1 إلى 7",
          "values": [
            {
              "value": "1",
              "description": "أصغر حجم (صغير جداً - ≈10px)"
            },
            {
              "value": "2",
              "description": "حجم صغير (≈12px)"
            },
            {
              "value": "3",
              "description": "الحجم الافتراضي (≈14px)"
            },
            {
              "value": "4",
              "description": "حجم متوسط (≈16px)"
            },
            {
              "value": "5",
              "description": "حجم كبير (≈18px)"
            },
            {
              "value": "6",
              "description": "حجم كبير جداً (≈22px)"
            },
            {
              "value": "7",
              "description": "أكبر حجم (كبير جداً - ≈26px)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "color",
          "description": "يحدد اللون الافتراضي للنص في كل الصفحة",
          "values": [
            {
              "value": "black",
              "description": "لون أسود"
            },
            {
              "value": "gray",
              "description": "لون رمادي"
            },
            {
              "value": "blue",
              "description": "لون أزرق"
            },
            {
              "value": "red",
              "description": "لون أحمر"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "#000000",
              "description": "أسود (كود Hex)"
            },
            {
              "value": "#333333",
              "description": "رمادي داكن (كود Hex)"
            },
            {
              "value": "#0000FF",
              "description": "أزرق (كود Hex)"
            },
            {
              "value": "#FF0000",
              "description": "أحمر (كود Hex)"
            },
            {
              "value": "#00FF00",
              "description": "أخضر (كود Hex)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "face",
          "description": "يحدد نوع الخط الافتراضي لكل الصفحة",
          "values": [
            {
              "value": "Arial",
              "description": "خط Arial"
            },
            {
              "value": "Times New Roman",
              "description": "خط Times New Roman"
            },
            {
              "value": "Verdana",
              "description": "خط Verdana"
            },
            {
              "value": "Tahoma",
              "description": "خط Tahoma"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "isindex",
      "description": "⚠️ عنصر مهمل - كان يضيف حقل بحث بسيطاً تلقائياً في الصفحة دون الحاجة لنموذج. تم إهماله لوجود نماذج HTML قياسية",
      "deprecated": true,
      "replacement": "استخدم <form> مع <input type=\"search\">",
      "severity": "critical",
      "removalVersion": "تم إهماله في HTML 4.0 (1997) وإزالته من HTML 5",
      "properties": [
        {
          "name": "prompt",
          "description": "النص الذي يظهر بجانب حقل البحث كتوجيه للمستخدم",
          "values": [
            {
              "value": "ابحث هنا...",
              "description": "نص توجيهي بالعربية"
            },
            {
              "value": "Search:",
              "description": "نص توجيهي بالإنجليزية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "action",
          "description": "عنوان الصفحة التي تستقبل عبارة البحث المدخلة",
          "values": [
            {
              "value": "/search",
              "description": "صفحة بحث في الموقع"
            },
            {
              "value": "https://google.com/search",
              "description": "صفحة بحث جوجل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "name",
          "description": "اسم حقل البحث عند الإرسال (افتراضي: isindex)",
          "values": [
            {
              "value": "q",
              "description": "اسم الحقل"
            },
            {
              "value": "search",
              "description": "اسم الحقل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "nobr",
      "description": "⚠️ عنصر مهمل - كان يمنع التفاف النص إلى سطر جديد. تم إهماله لأن التنسيق يجب أن يكون عبر CSS",
      "deprecated": true,
      "replacement": "استخدم CSS: white-space: nowrap",
      "severity": "medium",
      "removalVersion": "HTML 5 (2014)",
      "properties": []
    },
    {
      "tag": "xmp",
      "description": "⚠️ عنصر مهمل - كان يعرض نصاً بتنسيقه الأصلي دون تفسير وسوم HTML بداخله. تم إهماله لوجود بدائل أفضل وأكثر أماناً",
      "deprecated": true,
      "replacement": "استخدم <pre> مع ترميز &lt; و &gt;",
      "severity": "medium",
      "removalVersion": "تم إهماله منذ HTML 3.2 (1997)",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "blink",
      "description": "⚠️ عنصر مهمل - كان يجعل النص يومض ويختفي بالتناوب. لم يكن معياراً قياسياً قط وأزيل تماماً لإزعاجه الشديد للمستخدمين وتأثيره السلبي على إمكانية الوصول",
      "deprecated": true,
      "replacement": "تجنب الوميض نهائياً، أو استخدم CSS animation بحذر شديد إن لزم",
      "severity": "critical",
      "removalVersion": "لم يكن جزءاً من أي معيار رسمي، أُهمل تماماً",
      "properties": []
    },
    {
      "tag": "keygen",
      "description": "⚠️ عنصر مهمل - كان ينشئ زوج مفاتيح تشفير (عام وخاص) للتحقق من الهوية داخل النماذج. أُزيل لضعف أمانه ولوجود بدائل أفضل",
      "deprecated": true,
      "replacement": "استخدم واجهة Web Crypto API عبر JavaScript",
      "severity": "critical",
      "removalVersion": "تم إزالته من HTML 5.2 (2018)",
      "properties": [
        {
          "name": "name",
          "description": "يحدد اسم الحقل عند إرسال النموذج",
          "values": [
            {
              "value": "key",
              "description": "اسم الحقل"
            },
            {
              "value": "publickey",
              "description": "اسم الحقل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "challenge",
          "description": "نص تحدٍّ يُوقَّع بالمفتاح الخاص عند إنشاء زوج المفاتيح",
          "values": [],
          "freeInput": true
        },
        {
          "name": "keytype",
          "description": "يحدد نوع خوارزمية المفتاح المُنشأ",
          "values": [
            {
              "value": "rsa",
              "description": "خوارزمية RSA (الوحيدة المدعومة فعلياً)"
            },
            {
              "value": "dsa",
              "description": "خوارزمية DSA (نادراً ما دُعمت)"
            },
            {
              "value": "ec",
              "description": "خوارزمية المنحنيات الإهليلجية (لم تُطبَّق فعلياً)"
            }
          ]
        },
        {
          "name": "disabled",
          "description": "يعطل عنصر keygen عن الاستخدام",
          "values": [
            {
              "value": "",
              "description": "يعطّل العنصر (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        }
      ]
    },
    {
      "tag": "bgsound",
      "description": "⚠️ عنصر مهمل - كان يشغل ملفاً صوتياً في الخلفية تلقائياً عند فتح الصفحة (خاص بمتصفح Internet Explorer القديم). تم إهماله لوجود عنصر audio القياسي",
      "deprecated": true,
      "replacement": "استخدم <audio> بحذر عند الحاجة للتشغيل التلقائي",
      "severity": "high",
      "removalVersion": "لم يكن جزءاً من أي معيار رسمي، أُهمل تماماً مع Internet Explorer 11",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار الملف الصوتي المراد تشغيله في الخلفية",
          "values": [
            {
              "value": "background.mp3",
              "description": "ملف صوتي بصيغة MP3"
            },
            {
              "value": "background.wav",
              "description": "ملف صوتي بصيغة WAV"
            },
            {
              "value": "background.mid",
              "description": "ملف MIDI"
            },
            {
              "value": "music.mp3",
              "description": "موسيقى خلفية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "loop",
          "description": "يحدد عدد مرات تكرار التشغيل. -1 أو infinite يعني تكرار لا نهائي",
          "values": [
            {
              "value": "-1",
              "description": "تكرار لا نهائي"
            },
            {
              "value": "infinite",
              "description": "تكرار لا نهائي"
            },
            {
              "value": "0",
              "description": "تشغيل مرة واحدة"
            },
            {
              "value": "1",
              "description": "مرة واحدة"
            },
            {
              "value": "2",
              "description": "مرتين"
            },
            {
              "value": "3",
              "description": "ثلاث مرات"
            },
            {
              "value": "5",
              "description": "خمس مرات"
            },
            {
              "value": "10",
              "description": "عشر مرات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "volume",
          "description": "يحدد مستوى الصوت (من 0 إلى 100)",
          "values": [
            {
              "value": "0",
              "description": "صامت"
            },
            {
              "value": "25",
              "description": "صوت منخفض"
            },
            {
              "value": "50",
              "description": "صوت متوسط"
            },
            {
              "value": "75",
              "description": "صوت مرتفع"
            },
            {
              "value": "100",
              "description": "أعلى صوت"
            }
          ],
          "freeInput": true
        },
        {
          "name": "balance",
          "description": "يحدد توازن الصوت بين السماعتين الأيمن والأيسر (من -10000 إلى 10000)",
          "values": [
            {
              "value": "-10000",
              "description": "صوت من اليسار فقط"
            },
            {
              "value": "0",
              "description": "صوت متوازن"
            },
            {
              "value": "10000",
              "description": "صوت من اليمين فقط"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "menuitem",
      "description": "⚠️ عنصر مهمل - كان يمثل عنصراً في قائمة سياقية أو شريط أدوات (مع menu type=\"context\"). طُبّق في فايرفوكس فقط ثم أُزيل من المعيار تماماً",
      "deprecated": true,
      "replacement": "استخدم قائمة سياق المتصفح الأصلية أو ابنِ قائمة مخصصة بـ HTML وCSS وJavaScript",
      "severity": "critical",
      "removalVersion": "تم إزالته من معيار HTML في 2021",
      "properties": [
        {
          "name": "type",
          "description": "يحدد نوع عنصر القائمة",
          "values": [
            {
              "value": "command",
              "description": "أمر عادي قابل للنقر (افتراضي)"
            },
            {
              "value": "checkbox",
              "description": "خيار قابل للتفعيل والإلغاء"
            },
            {
              "value": "radio",
              "description": "خيار ضمن مجموعة اختيار واحد"
            }
          ]
        },
        {
          "name": "label",
          "description": "يحدد النص الظاهر لعنصر القائمة",
          "values": [
            {
              "value": "نسخ",
              "description": "أمر نسخ"
            },
            {
              "value": "لصق",
              "description": "أمر لصق"
            },
            {
              "value": "قص",
              "description": "أمر قص"
            }
          ],
          "freeInput": true
        },
        {
          "name": "icon",
          "description": "يحدد مسار أيقونة تظهر بجانب النص في القائمة",
          "values": [
            {
              "value": "copy-icon.png",
              "description": "أيقونة نسخ"
            },
            {
              "value": "paste-icon.png",
              "description": "أيقونة لصق"
            },
            {
              "value": "cut-icon.png",
              "description": "أيقونة قص"
            }
          ],
          "freeInput": true
        },
        {
          "name": "disabled",
          "description": "يعطل عنصر القائمة عن الاستخدام",
          "values": [
            {
              "value": "",
              "description": "يعطّل العنصر (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "checked",
          "description": "يحدد عنصر checkbox أو radio كمحدد افتراضياً",
          "values": [
            {
              "value": "",
              "description": "محدد افتراضياً (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "radiogroup",
          "description": "يحدد اسم المجموعة التي ينتمي إليها عنصر radio",
          "values": [
            {
              "value": "theme",
              "description": "مجموعة اختيار الثيم"
            },
            {
              "value": "language",
              "description": "مجموعة اختيار اللغة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "default",
          "description": "يحدد أن هذا العنصر هو الخيار الافتراضي في مجموعة radio",
          "values": [
            {
              "value": "",
              "description": "خيار افتراضي (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "command",
          "description": "يربط عنصر القائمة بعنصر command آخر",
          "values": [],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "spacer",
      "description": "⚠️ عنصر مهمل - عنصر خاص بمتصفح نتسكيب القديم كان يضيف مسافة فارغة غير مرئية للتحكم بتباعد التخطيط. أُزيل تماماً لوجود بدائل CSS أفضل",
      "deprecated": true,
      "replacement": "استخدم CSS: margin أو padding أو gap",
      "severity": "critical",
      "removalVersion": "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape",
      "properties": [
        {
          "name": "type",
          "description": "يحدد شكل المسافة المطلوبة",
          "values": [
            {
              "value": "horizontal",
              "description": "مسافة أفقية (عرض)"
            },
            {
              "value": "vertical",
              "description": "مسافة رأسية (ارتفاع)"
            },
            {
              "value": "block",
              "description": "مسافة بعرض وارتفاع معاً"
            }
          ]
        },
        {
          "name": "size",
          "description": "يحدد حجم المسافة بالبكسل عند استخدام النوع horizontal أو vertical",
          "values": [
            {
              "value": "5",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "20",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "50",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "100",
              "description": "مسافة 100 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض المسافة عند النوع block",
          "values": [
            {
              "value": "10",
              "description": "عرض 10 بكسل"
            },
            {
              "value": "50",
              "description": "عرض 50 بكسل"
            },
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع المسافة عند النوع block",
          "values": [
            {
              "value": "10",
              "description": "ارتفاع 10 بكسل"
            },
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "200",
              "description": "ارتفاع 200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align",
          "description": "يحدد محاذاة المسافة",
          "values": [
            {
              "value": "left",
              "description": "محاذاة لليسار"
            },
            {
              "value": "right",
              "description": "محاذاة لليمين"
            },
            {
              "value": "center",
              "description": "توسيط"
            }
          ]
        }
      ]
    },
    {
      "tag": "multicol",
      "description": "⚠️ عنصر مهمل - عنصر خاص بمتصفح نتسكيب القديم كان يقسّم النص إلى عدة أعمدة تلقائياً. كان سابقاً لعصره ثم أُزيل لوجود CSS columns",
      "deprecated": true,
      "replacement": "استخدم CSS: column-count أو column-width",
      "severity": "medium",
      "removalVersion": "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape",
      "properties": [
        {
          "name": "cols",
          "description": "يحدد عدد الأعمدة المطلوب تقسيم النص إليها",
          "values": [
            {
              "value": "2",
              "description": "عمودان"
            },
            {
              "value": "3",
              "description": "ثلاثة أعمدة"
            },
            {
              "value": "4",
              "description": "أربعة أعمدة"
            },
            {
              "value": "5",
              "description": "خمسة أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "gutter",
          "description": "يحدد المسافة الفاصلة بين الأعمدة بالبكسل",
          "values": [
            {
              "value": "5",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "20",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "30",
              "description": "مسافة 30 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض كل عمود بالبكسل",
          "values": [
            {
              "value": "150",
              "description": "عرض 150 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "250",
              "description": "عرض 250 بكسل"
            },
            {
              "value": "300",
              "description": "عرض 300 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "listing",
      "description": "⚠️ عنصر مهمل - من أقدم عناصر HTML على الإطلاق (أقدم من pre)، كان يعرض نصاً أحادي التباعد يحافظ على المسافات. أُهمل منذ HTML 3.2",
      "deprecated": true,
      "replacement": "استخدم <pre> أو <code>",
      "severity": "low",
      "removalVersion": "تم إهماله منذ HTML 3.2 (1997)",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "plaintext",
      "description": "⚠️ عنصر مهمل وخطير - كان يعرض كل ما بعده في المستند كنص عادي حرفياً متجاهلاً أي وسوم HTML لاحقة، ولا يمكن إغلاقه (يكسر بقية الصفحة). أُزيل تماماً لخطورته",
      "deprecated": true,
      "replacement": "استخدم <pre> مع ترميز الأحرف الخاصة &lt; و &gt;",
      "severity": "critical",
      "removalVersion": "تم إهماله منذ HTML 2.0 (1995) وإزالته من HTML 3.2",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر (يؤثر فقط على النص قبل إغلاقه - ولكنه لا يُغلق!)",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر (نفس مشكلة الإغلاق)",
          "values": [
            {
              "value": "ar",
              "description": "اللغة العربية"
            },
            {
              "value": "en",
              "description": "اللغة الإنجليزية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "layer",
      "description": "⚠️ عنصر مهمل - عنصر خاص بمتصفح نتسكيب 4 القديم كان ينشئ طبقة محتوى قابلة للتموضع والتحريك. لم يدعمه أي متصفح آخر وأُزيل تماماً",
      "deprecated": true,
      "replacement": "استخدم <div> مع CSS: position: absolute/relative",
      "severity": "critical",
      "removalVersion": "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape 4",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار محتوى خارجي يُحمَّل داخل الطبقة",
          "values": [
            {
              "value": "content.html",
              "description": "صفحة تُحمَّل داخل الطبقة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "left",
          "description": "يحدد موضع الطبقة أفقياً بالبكسل أو النسبة المئوية من يسار الصفحة",
          "values": [
            {
              "value": "0",
              "description": "يسار الصفحة"
            },
            {
              "value": "50",
              "description": "50 بكسل من اليسار"
            },
            {
              "value": "100",
              "description": "100 بكسل من اليسار"
            },
            {
              "value": "50%",
              "description": "منتصف الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "top",
          "description": "يحدد موضع الطبقة رأسياً بالبكسل أو النسبة المئوية من أعلى الصفحة",
          "values": [
            {
              "value": "0",
              "description": "أعلى الصفحة"
            },
            {
              "value": "50",
              "description": "50 بكسل من الأعلى"
            },
            {
              "value": "100",
              "description": "100 بكسل من الأعلى"
            },
            {
              "value": "50%",
              "description": "منتصف الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الطبقة بالبكسل أو النسبة المئوية",
          "values": [
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            },
            {
              "value": "50%",
              "description": "نصف عرض الصفحة"
            },
            {
              "value": "100%",
              "description": "عرض كامل الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع الطبقة بالبكسل أو النسبة المئوية",
          "values": [
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "50%",
              "description": "نصف ارتفاع الصفحة"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "z-index",
          "description": "يحدد ترتيب تراكب الطبقة فوق أو تحت طبقات أخرى (القيمة الأعلى = فوق)",
          "values": [
            {
              "value": "1",
              "description": "الطبقة الأولى (تحت)"
            },
            {
              "value": "5",
              "description": "طبقة متوسطة"
            },
            {
              "value": "10",
              "description": "طبقة عليا (فوق)"
            },
            {
              "value": "100",
              "description": "أعلى طبقة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "visibility",
          "description": "يتحكم في إظهار أو إخفاء الطبقة",
          "values": [
            {
              "value": "show",
              "description": "تظهر الطبقة (افتراضي)"
            },
            {
              "value": "hide",
              "description": "تختفي الطبقة"
            },
            {
              "value": "inherit",
              "description": "ترث حالة الإظهار من العنصر الأب"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "يحدد لون خلفية الطبقة",
          "values": [
            {
              "value": "transparent",
              "description": "خلفية شفافة"
            },
            {
              "value": "white",
              "description": "خلفية بيضاء"
            },
            {
              "value": "yellow",
              "description": "خلفية صفراء"
            },
            {
              "value": "lightgray",
              "description": "خلفية رمادية فاتحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "background",
          "description": "يحدد مسار صورة خلفية للطبقة",
          "values": [
            {
              "value": "bg.png",
              "description": "صورة خلفية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "clip",
          "description": "يحدد منطقة قص للطبقة (أعلى، يمين، أسفل، يسار)",
          "values": [
            {
              "value": "10,20,100,50",
              "description": "قص المنطقة المحددة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "overflow",
          "description": "يتحكم في ماذا يحدث إذا تجاوز المحتوى حدود الطبقة",
          "values": [
            {
              "value": "visible",
              "description": "يظهر المحتوى خارج الطبقة (افتراضي)"
            },
            {
              "value": "hidden",
              "description": "يخفي المحتوى الزائد"
            },
            {
              "value": "scroll",
              "description": "يظهر شريط تمرير"
            }
          ]
        },
        {
          "name": "above",
          "description": "يحدد اسم طبقة أخرى تظهر فوق هذه الطبقة",
          "values": [],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "ilayer",
      "description": "⚠️ عنصر مهمل - النسخة السطرية (inline) من عنصر layer الخاص بنتسكيب 4 القديم. أُزيل تماماً مع بقية عناصر الطبقات",
      "deprecated": true,
      "replacement": "استخدم <span> مع CSS: position: relative",
      "severity": "critical",
      "removalVersion": "لم يكن جزءاً من أي معيار رسمي، أُهمل مع متصفح Netscape 4",
      "properties": [
        {
          "name": "src",
          "description": "يحدد مسار محتوى خارجي يُحمَّل داخل الطبقة السطرية",
          "values": [
            {
              "value": "content.html",
              "description": "صفحة تُحمَّل داخل الطبقة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "left",
          "description": "يحدد موضع الطبقة أفقياً بالبكسل",
          "values": [
            {
              "value": "0",
              "description": "يسار الصفحة"
            },
            {
              "value": "50",
              "description": "50 بكسل من اليسار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "top",
          "description": "يحدد موضع الطبقة رأسياً بالبكسل",
          "values": [
            {
              "value": "0",
              "description": "أعلى الصفحة"
            },
            {
              "value": "50",
              "description": "50 بكسل من الأعلى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width",
          "description": "يحدد عرض الطبقة السطرية بالبكسل",
          "values": [
            {
              "value": "100",
              "description": "عرض 100 بكسل"
            },
            {
              "value": "200",
              "description": "عرض 200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "يحدد ارتفاع الطبقة السطرية بالبكسل",
          "values": [
            {
              "value": "50",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "100",
              "description": "ارتفاع 100 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "z-index",
          "description": "يحدد ترتيب تراكب الطبقة",
          "values": [
            {
              "value": "1",
              "description": "الطبقة الأولى"
            },
            {
              "value": "5",
              "description": "طبقة متوسطة"
            },
            {
              "value": "10",
              "description": "طبقة عليا"
            }
          ],
          "freeInput": true
        },
        {
          "name": "visibility",
          "description": "يتحكم في إظهار أو إخفاء الطبقة",
          "values": [
            {
              "value": "show",
              "description": "تظهر الطبقة (افتراضي)"
            },
            {
              "value": "hide",
              "description": "تختفي الطبقة"
            }
          ]
        },
        {
          "name": "bgcolor",
          "description": "يحدد لون خلفية الطبقة السطرية",
          "values": [
            {
              "value": "transparent",
              "description": "خلفية شفافة"
            },
            {
              "value": "yellow",
              "description": "خلفية صفراء"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "noembed",
      "description": "⚠️ عنصر مهمل - كان يعرض محتوى بديلاً للمتصفحات التي لا تدعم عنصر embed. أصبح غير ضروري مع الدعم الواسع لـ embed وobject",
      "deprecated": true,
      "replacement": "استخدم محتوى بديلاً داخل <object> نفسه",
      "severity": "low",
      "removalVersion": "أُهمل مع توقف استخدام embed القديم",
      "properties": []
    },
    {
      "tag": "command",
      "description": "⚠️ عنصر مهمل - كان مقترحاً في مسودات HTML5 المبكرة لتمثيل أمر (زر أو مربع اختيار) يمكن استدعاؤه من قوائم أو أشرطة أدوات. أُزيل قبل أن يُطبَّق فعلياً في أي متصفح رئيسي",
      "deprecated": true,
      "replacement": "استخدم <button> أو عناصر ARIA المناسبة",
      "severity": "medium",
      "removalVersion": "تم إزالته من معيار HTML قبل إصدار HTML5 النهائي",
      "properties": [
        {
          "name": "type",
          "description": "يحدد نوع الأمر",
          "values": [
            {
              "value": "command",
              "description": "أمر عادي (افتراضي)"
            },
            {
              "value": "checkbox",
              "description": "أمر قابل للتفعيل والإلغاء"
            },
            {
              "value": "radio",
              "description": "أمر ضمن مجموعة اختيار واحد"
            }
          ]
        },
        {
          "name": "label",
          "description": "يحدد النص الظاهر للأمر",
          "values": [
            {
              "value": "حفظ",
              "description": "أمر حفظ"
            },
            {
              "value": "حذف",
              "description": "أمر حذف"
            },
            {
              "value": "تحرير",
              "description": "أمر تحرير"
            }
          ],
          "freeInput": true
        },
        {
          "name": "icon",
          "description": "يحدد مسار أيقونة الأمر",
          "values": [
            {
              "value": "save.png",
              "description": "أيقونة حفظ"
            },
            {
              "value": "delete.png",
              "description": "أيقونة حذف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "disabled",
          "description": "يعطل الأمر عن الاستخدام",
          "values": [
            {
              "value": "",
              "description": "يعطّل الأمر (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "checked",
          "description": "يحدد الأمر كمحدد افتراضياً عند النوع checkbox أو radio",
          "values": [
            {
              "value": "",
              "description": "محدد افتراضياً (يُكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "radiogroup",
          "description": "يحدد اسم المجموعة التي ينتمي إليها أمر radio",
          "values": [
            {
              "value": "options",
              "description": "مجموعة خيارات"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "rb",
      "description": "⚠️ عنصر مهمل - كان يحدد صراحة النص الأساسي (Ruby Base) داخل عنصر ruby. أُلغي من معيار HTML الحديث لأن النص الموضوع مباشرة داخل ruby يُعامل تلقائياً كنص أساسي دون الحاجة له",
      "deprecated": true,
      "replacement": "ضع النص مباشرة داخل <ruby> بدون الحاجة لعنصر إضافي",
      "severity": "low",
      "removalVersion": "تم إزالته من HTML 5.2 (2018)",
      "properties": [
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل العنصر",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار"
            }
          ]
        },
        {
          "name": "lang",
          "description": "يحدد لغة المحتوى داخل العنصر",
          "values": [
            {
              "value": "ja",
              "description": "اللغة اليابانية"
            },
            {
              "value": "zh",
              "description": "اللغة الصينية"
            },
            {
              "value": "ko",
              "description": "اللغة الكورية"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ],
  "globalAttributes": [
    {
      "tag": "global",
      "description": "سمات عامة تنطبق تقريباً على جميع عناصر HTML بغض النظر عن نوعها",
      "properties": [
        {
          "name": "id",
          "description": "يعطي العنصر معرّفاً فريداً في كامل الصفحة، يُستخدم للربط معه من CSS أو JavaScript أو كوجهة رابط داخلي (#id)",
          "values": [
            {
              "value": "main-header",
              "description": "معرف الترويسة الرئيسية"
            },
            {
              "value": "content-wrapper",
              "description": "معرف غلاف المحتوى"
            },
            {
              "value": "submit-btn",
              "description": "معرف زر الإرسال"
            },
            {
              "value": "nav-menu",
              "description": "معرف قائمة التنقل"
            },
            {
              "value": "footer-section",
              "description": "معرف قسم التذييل"
            },
            {
              "value": "hero-image",
              "description": "معرف الصورة الرئيسية"
            },
            {
              "value": "contact-form",
              "description": "معرف نموذج الاتصال"
            }
          ],
          "freeInput": true
        },
        {
          "name": "class",
          "description": "يربط العنصر بواحد أو أكثر من أصناف CSS لتنسيقه، يمكن وضع عدة أصناف مفصولة بمسافة",
          "values": [
            {
              "value": "container",
              "description": "فئة الحاوية"
            },
            {
              "value": "row",
              "description": "فئة الصف"
            },
            {
              "value": "col",
              "description": "فئة العمود"
            },
            {
              "value": "flex",
              "description": "فئة التنسيق المرن"
            },
            {
              "value": "grid",
              "description": "فئة التنسيق الشبكي"
            },
            {
              "value": "card",
              "description": "فئة البطاقة"
            },
            {
              "value": "btn",
              "description": "فئة الزر"
            },
            {
              "value": "btn-primary",
              "description": "فئة الزر الأساسي"
            },
            {
              "value": "btn-secondary",
              "description": "فئة الزر الثانوي"
            },
            {
              "value": "text-center",
              "description": "فئة توسيط النص"
            },
            {
              "value": "text-right",
              "description": "فئة محاذاة النص لليمين"
            },
            {
              "value": "text-left",
              "description": "فئة محاذاة النص لليسار"
            },
            {
              "value": "hidden",
              "description": "فئة الإخفاء"
            },
            {
              "value": "visible",
              "description": "فئة الإظهار"
            },
            {
              "value": "active",
              "description": "فئة الحالة النشطة"
            },
            {
              "value": "disabled",
              "description": "فئة الحالة المعطلة"
            },
            {
              "value": "error",
              "description": "فئة حالة الخطأ"
            },
            {
              "value": "success",
              "description": "فئة حالة النجاح"
            },
            {
              "value": "warning",
              "description": "فئة حالة التحذير"
            },
            {
              "value": "info",
              "description": "فئة حالة المعلومات"
            },
            {
              "value": "dark",
              "description": "فئة النمط الداكن"
            },
            {
              "value": "light",
              "description": "فئة النمط الفاتح"
            },
            {
              "value": "navbar",
              "description": "فئة شريط التنقل"
            },
            {
              "value": "dropdown",
              "description": "فئة القائمة المنسدلة"
            },
            {
              "value": "modal",
              "description": "فئة النافذة المنبثقة"
            },
            {
              "value": "tooltip",
              "description": "فئة التلميح"
            },
            {
              "value": "alert",
              "description": "فئة التنبيه"
            },
            {
              "value": "badge",
              "description": "فئة الشارة"
            },
            {
              "value": "icon",
              "description": "فئة الأيقونة"
            },
            {
              "value": "avatar",
              "description": "فئة الصورة الرمزية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "style",
          "description": "يطبّق تنسيق CSS مباشرة على هذا العنصر فقط دون الحاجة لملف أو وسم style منفصل",
          "values": [
            {
              "value": "color: red;",
              "description": "لون النص أحمر"
            },
            {
              "value": "color: #333;",
              "description": "لون النص رمادي غامق"
            },
            {
              "value": "background-color: #f0f0f0;",
              "description": "خلفية رمادية فاتحة"
            },
            {
              "value": "background-color: #3498db;",
              "description": "خلفية زرقاء"
            },
            {
              "value": "font-size: 16px;",
              "description": "حجم الخط 16 بكسل"
            },
            {
              "value": "font-weight: bold;",
              "description": "خط عريض"
            },
            {
              "value": "text-align: center;",
              "description": "توسيط النص"
            },
            {
              "value": "padding: 10px;",
              "description": "حشوة داخلية 10 بكسل"
            },
            {
              "value": "margin: 10px;",
              "description": "هامش خارجي 10 بكسل"
            },
            {
              "value": "border: 1px solid #ccc;",
              "description": "إطار رمادي سمك 1 بكسل"
            },
            {
              "value": "border-radius: 5px;",
              "description": "زوايا مدورة 5 بكسل"
            },
            {
              "value": "display: flex;",
              "description": "عرض مرن"
            },
            {
              "value": "display: none;",
              "description": "إخفاء العنصر"
            },
            {
              "value": "width: 100%;",
              "description": "عرض كامل"
            },
            {
              "value": "height: 100%;",
              "description": "ارتفاع كامل"
            },
            {
              "value": "max-width: 600px;",
              "description": "أقصى عرض 600 بكسل"
            },
            {
              "value": "opacity: 0.5;",
              "description": "شفافية 50%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "title",
          "description": "نص إضافي يظهر كتلميح (tooltip) عند تمرير الماوس فوق العنصر، يفيد أيضاً في الشرح لقارئ الشاشة",
          "values": [
            {
              "value": "اضغط هنا للمزيد من المعلومات",
              "description": "تلميح لزر"
            },
            {
              "value": "رابط الصفحة الرئيسية",
              "description": "تلميح لرابط"
            },
            {
              "value": "صورة المنتج رقم 1",
              "description": "تلميح لصورة"
            },
            {
              "value": "حقل مطلوب",
              "description": "تلميح لحقل نموذج"
            },
            {
              "value": "اختر تاريخاً",
              "description": "تلميح لحقل تاريخ"
            },
            {
              "value": "انقر مرتين لتعديل النص",
              "description": "تلميح لنص قابل للتحرير"
            }
          ],
          "freeInput": true
        },
        {
          "name": "lang",
          "description": "يحدد لغة محتوى هذا العنصر تحديداً (قد تختلف عن لغة الصفحة)، يساعد قارئ الشاشة والمتصفح على النطق والترجمة الصحيحة",
          "values": [
            {
              "value": "ar",
              "description": "العربية"
            },
            {
              "value": "ar-SA",
              "description": "العربية - السعودية"
            },
            {
              "value": "ar-EG",
              "description": "العربية - مصر"
            },
            {
              "value": "en",
              "description": "الإنجليزية"
            },
            {
              "value": "en-US",
              "description": "الإنجليزية - الولايات المتحدة"
            },
            {
              "value": "en-GB",
              "description": "الإنجليزية - المملكة المتحدة"
            },
            {
              "value": "fr",
              "description": "الفرنسية"
            },
            {
              "value": "fr-FR",
              "description": "الفرنسية - فرنسا"
            },
            {
              "value": "es",
              "description": "الإسبانية"
            },
            {
              "value": "es-ES",
              "description": "الإسبانية - إسبانيا"
            },
            {
              "value": "de",
              "description": "الألمانية"
            },
            {
              "value": "de-DE",
              "description": "الألمانية - ألمانيا"
            },
            {
              "value": "it",
              "description": "الإيطالية"
            },
            {
              "value": "it-IT",
              "description": "الإيطالية - إيطاليا"
            },
            {
              "value": "pt",
              "description": "البرتغالية"
            },
            {
              "value": "pt-BR",
              "description": "البرتغالية - البرازيل"
            },
            {
              "value": "ru",
              "description": "الروسية"
            },
            {
              "value": "ru-RU",
              "description": "الروسية - روسيا"
            },
            {
              "value": "ja",
              "description": "اليابانية"
            },
            {
              "value": "ja-JP",
              "description": "اليابانية - اليابان"
            },
            {
              "value": "zh",
              "description": "الصينية"
            },
            {
              "value": "zh-CN",
              "description": "الصينية - الصين"
            },
            {
              "value": "zh-TW",
              "description": "الصينية - تايوان"
            },
            {
              "value": "ko",
              "description": "الكورية"
            },
            {
              "value": "ko-KR",
              "description": "الكورية - كوريا"
            },
            {
              "value": "hi",
              "description": "الهندية"
            },
            {
              "value": "hi-IN",
              "description": "الهندية - الهند"
            },
            {
              "value": "tr",
              "description": "التركية"
            },
            {
              "value": "tr-TR",
              "description": "التركية - تركيا"
            },
            {
              "value": "fa",
              "description": "الفارسية"
            },
            {
              "value": "fa-IR",
              "description": "الفارسية - إيران"
            },
            {
              "value": "ur",
              "description": "الأردية"
            },
            {
              "value": "ur-PK",
              "description": "الأردية - باكستان"
            },
            {
              "value": "he",
              "description": "العبرية"
            },
            {
              "value": "he-IL",
              "description": "العبرية - إسرائيل"
            },
            {
              "value": "bn",
              "description": "البنغالية"
            },
            {
              "value": "bn-BD",
              "description": "البنغالية - بنغلاديش"
            }
          ],
          "freeInput": true
        },
        {
          "name": "dir",
          "description": "يحدد اتجاه النص داخل هذا العنصر، من اليمين لليسار أو العكس، بغض النظر عن اتجاه الصفحة العام",
          "values": [
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار (العربية، الفارسية، العبرية...)"
            },
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين (الإنجليزية، الفرنسية، الألمانية...)"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يحدد الاتجاه تلقائياً حسب محتوى النص"
            }
          ]
        },
        {
          "name": "tabindex",
          "description": "يحدد ترتيب العنصر عند التنقل بمفتاح Tab، أو يجعله قابلاً للتركيز عليه إن لم يكن كذلك أصلاً",
          "values": [
            {
              "value": "0",
              "description": "قابل للتركيز، بترتيب طبيعي حسب مكانه في المستند"
            },
            {
              "value": "-1",
              "description": "قابل للتركيز برمجياً فقط (عبر JavaScript) وليس بـ Tab"
            },
            {
              "value": "1",
              "description": "يُركَّز عليه أولاً عند الضغط على Tab"
            },
            {
              "value": "2",
              "description": "يُركَّز عليه ثانياً عند الضغط على Tab"
            },
            {
              "value": "3",
              "description": "يُركَّز عليه ثالثاً عند الضغط على Tab"
            },
            {
              "value": "10",
              "description": "يُركَّز بعد جميع العناصر ذات الأرقام الأقل"
            },
            {
              "value": "999",
              "description": "يُركَّز في النهاية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "hidden",
          "description": "يخفي العنصر بالكامل من العرض (كأنه غير موجود في الصفحة)، بديل سريع لعرض: none في CSS",
          "values": [
            {
              "value": "",
              "description": "يخفي العنصر (يكتب بدون قيمة)"
            },
            {
              "value": "until-found",
              "description": "يخفي العنصر لكنه يصبح مرئياً إذا بحث عنه المستخدم (ميزة حديثة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "draggable",
          "description": "يحدد إن كان يمكن سحب العنصر بالماوس (خاصية Drag and Drop)",
          "values": [
            {
              "value": "true",
              "description": "يسمح بسحب العنصر"
            },
            {
              "value": "false",
              "description": "يمنع سحب العنصر"
            }
          ]
        },
        {
          "name": "contenteditable",
          "description": "يجعل محتوى العنصر قابلاً للتحرير مباشرة من قبل المستخدم داخل المتصفح، مثل محرر نصوص مصغّر",
          "values": [
            {
              "value": "true",
              "description": "يسمح بتحرير المحتوى"
            },
            {
              "value": "false",
              "description": "يمنع التحرير"
            },
            {
              "value": "plaintext-only",
              "description": "يسمح بالتحرير كنص عادي فقط دون تنسيقات"
            }
          ]
        },
        {
          "name": "spellcheck",
          "description": "يحدد إن كان المتصفح يفحص الأخطاء الإملائية في نص هذا العنصر (يظهر خط أحمر متعرج تحت الأخطاء)",
          "values": [
            {
              "value": "true",
              "description": "يفعّل التدقيق الإملائي"
            },
            {
              "value": "false",
              "description": "يلغي التدقيق الإملائي"
            }
          ]
        },
        {
          "name": "translate",
          "description": "يخبر أدوات الترجمة الآلية (مثل ترجمة جوجل) إن كان يجب ترجمة محتوى هذا العنصر أم تركه كما هو (مثل أسماء العلامات التجارية)",
          "values": [
            {
              "value": "yes",
              "description": "يسمح بترجمة المحتوى"
            },
            {
              "value": "no",
              "description": "يمنع ترجمة المحتوى (أسماء أعلام، أكواد، مصطلحات تقنية...)"
            }
          ]
        },
        {
          "name": "accesskey",
          "description": "يحدد اختصار لوحة مفاتيح (حرفاً واحداً) للوصول السريع إلى هذا العنصر أو تفعيله (عادة مع Alt أو Alt+Shift حسب المتصفح)",
          "values": [
            {
              "value": "a",
              "description": "اختصار بالحرف A"
            },
            {
              "value": "b",
              "description": "اختصار بالحرف B"
            },
            {
              "value": "c",
              "description": "اختصار بالحرف C"
            },
            {
              "value": "s",
              "description": "اختصار بالحرف S (مثل Save)"
            },
            {
              "value": "h",
              "description": "اختصار بالحرف H (مثل Home)"
            },
            {
              "value": "1",
              "description": "اختصار بالرقم 1"
            },
            {
              "value": "9",
              "description": "اختصار بالرقم 9"
            }
          ],
          "freeInput": true
        },
        {
          "name": "data-*",
          "description": "سمة مخصّصة لتخزين بيانات إضافية داخل العنصر نفسه لاستخدامها لاحقاً في JavaScript، يمكن تسمية الجزء بعد data- بأي اسم مثل data-id أو data-status",
          "values": [
            {
              "value": "data-id=\"123\"",
              "description": "تخزين معرف رقمي"
            },
            {
              "value": "data-name=\"product\"",
              "description": "تخزين اسم"
            },
            {
              "value": "data-price=\"29.99\"",
              "description": "تخزين سعر"
            },
            {
              "value": "data-status=\"active\"",
              "description": "تخزين حالة"
            },
            {
              "value": "data-user-id=\"456\"",
              "description": "تخزين معرف مستخدم"
            },
            {
              "value": "data-product-id=\"789\"",
              "description": "تخزين معرف منتج"
            },
            {
              "value": "data-category=\"electronics\"",
              "description": "تخزين تصنيف"
            },
            {
              "value": "data-timestamp=\"2026-07-28\"",
              "description": "تخزين تاريخ"
            },
            {
              "value": "data-color=\"#ff0000\"",
              "description": "تخزين لون"
            },
            {
              "value": "data-size=\"large\"",
              "description": "تخزين حجم"
            },
            {
              "value": "data-role=\"admin\"",
              "description": "تخزين دور المستخدم"
            }
          ],
          "freeInput": true
        },
        {
          "name": "role",
          "description": "يحدد الدور الوظيفي أو الدلالي للعنصر لقارئات الشاشة (ARIA)، مفيد خاصة عند استخدام عناصر عامة مثل div بدل عناصر HTML الدلالية",
          "values": [
            {
              "value": "button",
              "description": "يُعامل العنصر كزر"
            },
            {
              "value": "link",
              "description": "يُعامل العنصر كرابط"
            },
            {
              "value": "navigation",
              "description": "يُعامل العنصر كقسم تنقل"
            },
            {
              "value": "banner",
              "description": "يُعامل العنصر كترويسة رئيسية للصفحة"
            },
            {
              "value": "main",
              "description": "يُعامل العنصر كمحتوى رئيسي"
            },
            {
              "value": "complementary",
              "description": "يُعامل العنصر كمحتوى مكمل (جانبي)"
            },
            {
              "value": "contentinfo",
              "description": "يُعامل العنصر كمعلومات تذييل"
            },
            {
              "value": "alert",
              "description": "يُعامل العنصر كتنبيه يُعلن فوراً لقارئ الشاشة"
            },
            {
              "value": "dialog",
              "description": "يُعامل العنصر كنافذة حوار"
            },
            {
              "value": "presentation",
              "description": "يخبر قارئ الشاشة بتجاهل الدلالة الافتراضية للعنصر تماماً"
            },
            {
              "value": "none",
              "description": "مرادف لـ presentation"
            },
            {
              "value": "list",
              "description": "يُعامل العنصر كقائمة"
            },
            {
              "value": "listitem",
              "description": "يُعامل العنصر كعنصر في قائمة"
            },
            {
              "value": "tab",
              "description": "يُعامل العنصر كعلامة تبويب"
            },
            {
              "value": "tabpanel",
              "description": "يُعامل العنصر كلوحة تبويب"
            },
            {
              "value": "tablist",
              "description": "يُعامل العنصر كقائمة تبويبات"
            },
            {
              "value": "menu",
              "description": "يُعامل العنصر كقائمة منسدلة"
            },
            {
              "value": "menuitem",
              "description": "يُعامل العنصر كعنصر في قائمة منسدلة"
            },
            {
              "value": "progressbar",
              "description": "يُعامل العنصر كشريط تقدم"
            },
            {
              "value": "slider",
              "description": "يُعامل العنصر كمنزلق"
            },
            {
              "value": "checkbox",
              "description": "يُعامل العنصر كمربع اختيار"
            },
            {
              "value": "radio",
              "description": "يُعامل العنصر كزر راديو"
            },
            {
              "value": "textbox",
              "description": "يُعامل العنصر كمربع نص"
            },
            {
              "value": "searchbox",
              "description": "يُعامل العنصر كمربع بحث"
            },
            {
              "value": "combobox",
              "description": "يُعامل العنصر كمربع تحرير وسرد"
            },
            {
              "value": "listbox",
              "description": "يُعامل العنصر كمربع قائمة"
            },
            {
              "value": "tree",
              "description": "يُعامل العنصر كشجرة"
            },
            {
              "value": "treeitem",
              "description": "يُعامل العنصر كعنصر في شجرة"
            },
            {
              "value": "grid",
              "description": "يُعامل العنصر كشبكة"
            },
            {
              "value": "gridcell",
              "description": "يُعامل العنصر كخلية في شبكة"
            },
            {
              "value": "row",
              "description": "يُعامل العنصر كصف"
            },
            {
              "value": "columnheader",
              "description": "يُعامل العنصر كرأس عمود"
            },
            {
              "value": "rowheader",
              "description": "يُعامل العنصر كرأس صف"
            },
            {
              "value": "tooltip",
              "description": "يُعامل العنصر كتلميح"
            },
            {
              "value": "figure",
              "description": "يُعامل العنصر كشكل توضيحي"
            },
            {
              "value": "img",
              "description": "يُعامل العنصر كصورة"
            },
            {
              "value": "heading",
              "description": "يُعامل العنصر كعنوان"
            },
            {
              "value": "form",
              "description": "يُعامل العنصر كاستمارة"
            },
            {
              "value": "search",
              "description": "يُعامل العنصر كمنطقة بحث"
            },
            {
              "value": "separator",
              "description": "يُعامل العنصر كفاصل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-label",
          "description": "يعطي العنصر تسمية نصية يقرأها قارئ الشاشة، تُستخدم عندما لا يوجد نص مرئي واضح يشرح وظيفة العنصر (مثل زر أيقونة فقط)",
          "values": [
            {
              "value": "إغلاق النافذة",
              "description": "تسمية لزر إغلاق"
            },
            {
              "value": "البحث في الموقع",
              "description": "تسمية لزر بحث"
            },
            {
              "value": "القائمة الرئيسية",
              "description": "تسمية لقائمة التنقل"
            },
            {
              "value": "تسجيل الدخول",
              "description": "تسمية لزر تسجيل الدخول"
            },
            {
              "value": "تسجيل الخروج",
              "description": "تسمية لزر تسجيل الخروج"
            },
            {
              "value": "إضافة إلى السلة",
              "description": "تسمية لزر الإضافة للسلة"
            },
            {
              "value": "مشاركة على فيسبوك",
              "description": "تسمية لزر المشاركة"
            },
            {
              "value": "طباعة الصفحة",
              "description": "تسمية لزر الطباعة"
            },
            {
              "value": "تحميل الملف",
              "description": "تسمية لزر التحميل"
            },
            {
              "value": "تأكيد العملية",
              "description": "تسمية لزر التأكيد"
            },
            {
              "value": "إلغاء العملية",
              "description": "تسمية لزر الإلغاء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-hidden",
          "description": "يخفي العنصر عن قارئات الشاشة فقط مع بقائه مرئياً بصرياً، يفيد لإخفاء عناصر زخرفية بحتة مثل الأيقونات",
          "values": [
            {
              "value": "true",
              "description": "يخفي العنصر عن قارئ الشاشة"
            },
            {
              "value": "false",
              "description": "يبقيه ظاهراً لقارئ الشاشة"
            }
          ]
        },
        {
          "name": "aria-live",
          "description": "يخبر قارئ الشاشة بمراقبة هذا العنصر وإعلان أي تغيير يطرأ على محتواه تلقائياً دون الحاجة لإعادة تركيز المستخدم عليه",
          "values": [
            {
              "value": "polite",
              "description": "يعلن التغيير بعد انتهاء ما يقرأه قارئ الشاشة حالياً"
            },
            {
              "value": "assertive",
              "description": "يقاطع القراءة الحالية ليعلن التغيير فوراً"
            },
            {
              "value": "off",
              "description": "لا يعلن أي تغيير"
            }
          ]
        },
        {
          "name": "aria-describedby",
          "description": "يربط العنصر بعنصر آخر (عبر معرّفه id) يحتوي على نص وصفي إضافي يقرأه قارئ الشاشة",
          "values": [
            {
              "value": "help-text",
              "description": "معرف نص المساعدة"
            },
            {
              "value": "error-message",
              "description": "معرف رسالة الخطأ"
            },
            {
              "value": "description-text",
              "description": "معرف النص الوصفي"
            },
            {
              "value": "tooltip-content",
              "description": "معرف محتوى التلميح"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-expanded",
          "description": "يخبر قارئ الشاشة إن كان عنصر قابل للطي (كقائمة منسدلة أو أكورديون) مفتوحاً حالياً أم مغلقاً",
          "values": [
            {
              "value": "true",
              "description": "العنصر مفتوح/موسّع حالياً"
            },
            {
              "value": "false",
              "description": "العنصر مطوي/مغلق حالياً"
            }
          ]
        },
        {
          "name": "aria-controls",
          "description": "يحدد العنصر الذي يتحكم فيه العنصر الحالي (عبر معرف id)، مثل زر يفتح ويغلق قائمة منسدلة",
          "values": [
            {
              "value": "dropdown-menu",
              "description": "معرف القائمة المنسدلة"
            },
            {
              "value": "panel-content",
              "description": "معرف لوحة المحتوى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "aria-pressed",
          "description": "يخبر قارئ الشاشة إن كان زر ما مضغوطاً (مثل زر تشغيل/إيقاف) أو غير مضغوط",
          "values": [
            {
              "value": "true",
              "description": "الزر مضغوط"
            },
            {
              "value": "false",
              "description": "الزر غير مضغوط"
            },
            {
              "value": "mixed",
              "description": "حالة مختلطة"
            }
          ]
        },
        {
          "name": "aria-selected",
          "description": "يخبر قارئ الشاشة إن كان عنصراً محدداً (مثل خيار في قائمة أو علامة تبويب)",
          "values": [
            {
              "value": "true",
              "description": "العنصر محدد"
            },
            {
              "value": "false",
              "description": "العنصر غير محدد"
            }
          ]
        },
        {
          "name": "aria-checked",
          "description": "يخبر قارئ الشاشة بحالة عنصر قابل للتحديد (مثل مربع اختيار أو زر راديو)",
          "values": [
            {
              "value": "true",
              "description": "محدد"
            },
            {
              "value": "false",
              "description": "غير محدد"
            },
            {
              "value": "mixed",
              "description": "حالة مختلطة"
            }
          ]
        },
        {
          "name": "aria-disabled",
          "description": "يخبر قارئ الشاشة بأن العنصر معطل ولا يمكن التفاعل معه، بديل دلالي لخاصية disabled في HTML",
          "values": [
            {
              "value": "true",
              "description": "العنصر معطل"
            },
            {
              "value": "false",
              "description": "العنصر مفعّل"
            }
          ]
        },
        {
          "name": "aria-required",
          "description": "يخبر قارئ الشاشة بأن هذا الحقل مطلوب ولا يمكن إرسال النموذج بدونه",
          "values": [
            {
              "value": "true",
              "description": "الحقل مطلوب"
            },
            {
              "value": "false",
              "description": "الحقل اختياري"
            }
          ]
        },
        {
          "name": "aria-invalid",
          "description": "يخبر قارئ الشاشة بأن قيمة الحقل غير صالحة (مثل خطأ في البريد الإلكتروني)",
          "values": [
            {
              "value": "true",
              "description": "القيمة غير صالحة"
            },
            {
              "value": "false",
              "description": "القيمة صالحة"
            }
          ]
        },
        {
          "name": "slot",
          "description": "يحدد اسم الفتحة (slot) داخل مكوّن ويب (Web Component) التي يجب أن يظهر هذا العنصر داخلها",
          "values": [
            {
              "value": "header",
              "description": "فتحة الترويسة"
            },
            {
              "value": "content",
              "description": "فتحة المحتوى"
            },
            {
              "value": "footer",
              "description": "فتحة التذييل"
            },
            {
              "value": "sidebar",
              "description": "فتحة الشريط الجانبي"
            },
            {
              "value": "main",
              "description": "فتحة المحتوى الرئيسي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "inert",
          "description": "يعطّل العنصر وكل ما بداخله بالكامل، يمنع التركيز عليه والنقر وقراءته من قارئ الشاشة، يفيد لتعطيل محتوى خلف نافذة حوار مفتوحة",
          "values": [
            {
              "value": "",
              "description": "يعطّل العنصر (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "popover",
          "description": "يحوّل العنصر إلى نافذة منبثقة (popover) حديثة يمكن إظهارها وإخفاؤها دون JavaScript إضافي أو مكتبات خارجية",
          "values": [
            {
              "value": "auto",
              "description": "تُغلق تلقائياً عند النقر خارجها أو فتح popover آخر"
            },
            {
              "value": "manual",
              "description": "لا تُغلق إلا يدوياً عبر كود أو زر مخصص"
            }
          ]
        },
        {
          "name": "exportparts",
          "description": "يسمح بتصدير أجزاء داخلية (parts) من مكوّن ويب لتنسيقها من CSS خارج ذلك المكوّن",
          "values": [
            {
              "value": "part1 part2",
              "description": "تصدير أجزاء متعددة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "itemscope",
          "description": "يبدأ نطاق بيانات مصغّرة (Microdata) جديداً حول هذا العنصر، يُستخدم عادة مع itemtype لمساعدة محركات البحث على فهم المحتوى",
          "values": [
            {
              "value": "",
              "description": "يفعّل نطاق البيانات المصغرة (يكتب بدون قيمة)"
            }
          ],
          "isBoolean": true
        },
        {
          "name": "itemtype",
          "description": "يحدد نوع البيانات المصغّرة لهذا العنصر حسب مفردات schema.org، يُستخدم مع itemscope",
          "values": [
            {
              "value": "https://schema.org/Product",
              "description": "منتج"
            },
            {
              "value": "https://schema.org/Article",
              "description": "مقال"
            },
            {
              "value": "https://schema.org/Person",
              "description": "شخص"
            },
            {
              "value": "https://schema.org/Organization",
              "description": "منظمة"
            },
            {
              "value": "https://schema.org/Event",
              "description": "حدث"
            },
            {
              "value": "https://schema.org/Recipe",
              "description": "وصفة"
            },
            {
              "value": "https://schema.org/Review",
              "description": "مراجعة"
            },
            {
              "value": "https://schema.org/Book",
              "description": "كتاب"
            },
            {
              "value": "https://schema.org/Movie",
              "description": "فيلم"
            },
            {
              "value": "https://schema.org/MusicAlbum",
              "description": "ألبوم موسيقي"
            },
            {
              "value": "https://schema.org/VideoGame",
              "description": "لعبة فيديو"
            },
            {
              "value": "https://schema.org/Place",
              "description": "مكان"
            },
            {
              "value": "https://schema.org/Service",
              "description": "خدمة"
            },
            {
              "value": "https://schema.org/CreativeWork",
              "description": "عمل إبداعي"
            },
            {
              "value": "https://schema.org/WebPage",
              "description": "صفحة ويب"
            },
            {
              "value": "https://schema.org/BreadcrumbList",
              "description": "قائمة مسار التنقل"
            },
            {
              "value": "https://schema.org/FAQPage",
              "description": "صفحة أسئلة شائعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "itemprop",
          "description": "يحدد اسم خاصية بيانات مصغّرة لهذا العنصر ضمن نطاق itemscope المحيط به، مثل name أو price أو description",
          "values": [
            {
              "value": "name",
              "description": "اسم العنصر"
            },
            {
              "value": "description",
              "description": "وصف العنصر"
            },
            {
              "value": "image",
              "description": "صورة العنصر"
            },
            {
              "value": "price",
              "description": "سعر العنصر"
            },
            {
              "value": "priceCurrency",
              "description": "عملة السعر"
            },
            {
              "value": "availability",
              "description": "التوفر"
            },
            {
              "value": "brand",
              "description": "العلامة التجارية"
            },
            {
              "value": "author",
              "description": "المؤلف"
            },
            {
              "value": "datePublished",
              "description": "تاريخ النشر"
            },
            {
              "value": "dateModified",
              "description": "تاريخ التعديل"
            },
            {
              "value": "publisher",
              "description": "الناشر"
            },
            {
              "value": "ratingValue",
              "description": "قيمة التقييم"
            },
            {
              "value": "reviewCount",
              "description": "عدد المراجعات"
            },
            {
              "value": "url",
              "description": "الرابط"
            },
            {
              "value": "telephone",
              "description": "رقم الهاتف"
            },
            {
              "value": "email",
              "description": "البريد الإلكتروني"
            },
            {
              "value": "address",
              "description": "العنوان"
            },
            {
              "value": "streetAddress",
              "description": "عنوان الشارع"
            },
            {
              "value": "addressLocality",
              "description": "المدينة"
            },
            {
              "value": "addressRegion",
              "description": "المنطقة"
            },
            {
              "value": "postalCode",
              "description": "الرمز البريدي"
            },
            {
              "value": "addressCountry",
              "description": "الدولة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "itemref",
          "description": "يربط العنصر بخصائص بيانات مصغّرة موجودة في عناصر أخرى (عبر معرفاتها id) خارج نطاق itemscope الحالي",
          "values": [
            {
              "value": "prop1 prop2",
              "description": "معرفات خصائص خارجية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "part",
          "description": "يحدد جزءاً (part) من المكوّن يمكن استهدافه بواسطة CSS من خارج المكوّن باستخدام ::part()",
          "values": [
            {
              "value": "header-part",
              "description": "جزء الترويسة"
            },
            {
              "value": "body-part",
              "description": "جزء الجسم"
            },
            {
              "value": "footer-part",
              "description": "جزء التذييل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "is",
          "description": "يحدد أن هذا العنصر هو مكوّن ويب مخصص (Custom Element) ممتد من عنصر HTML أساسي، مثل <button is=\"custom-button\">",
          "values": [
            {
              "value": "custom-button",
              "description": "اسم المكوّن المخصص"
            },
            {
              "value": "custom-input",
              "description": "اسم المكوّن المخصص"
            }
          ],
          "freeInput": true
        }
      ]
    }
  ]
};
