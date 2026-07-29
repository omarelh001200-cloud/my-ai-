// ============================================================
// css-properties.js — بيانات خصائص CSS لـ MAX Builder
// تم توليده تلقائياً بدمج ملفات data/css/*.js لتتوافق مع البنية التي يتوقعها MAX-builder.html
// ============================================================

var CSS_DATA = {
  "boxModel": [
    {
      "tag": "dimensions",
      "description": "تحدد أبعاد العنصر (العرض والارتفاع) والحدود الدنيا والعليا، تتحكم في حجم العنصر المرئي",
      "properties": [
        {
          "name": "width",
          "description": "الخاصية الرئيسية لتحديد عرض العنصر، يمكن أن تكون ثابتة أو نسبية أو معتمدة على المحتوى",
          "values": [
            {
              "value": "auto",
              "description": "يحسب المتصفح العرض تلقائياً حسب المحتوى (القيمة الافتراضية)"
            },
            {
              "value": "10px",
              "description": "عرض 10 بكسل - صغير جداً"
            },
            {
              "value": "20px",
              "description": "عرض 20 بكسل"
            },
            {
              "value": "50px",
              "description": "عرض 50 بكسل"
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
              "value": "300px",
              "description": "عرض 300 بكسل"
            },
            {
              "value": "400px",
              "description": "عرض 400 بكسل"
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
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            },
            {
              "value": "20%",
              "description": "20% من عرض العنصر الأب"
            },
            {
              "value": "25%",
              "description": "ربع عرض العنصر الأب"
            },
            {
              "value": "33%",
              "description": "ثلث عرض العنصر الأب"
            },
            {
              "value": "50%",
              "description": "نصف عرض العنصر الأب"
            },
            {
              "value": "66%",
              "description": "ثلثي عرض العنصر الأب"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع عرض العنصر الأب"
            },
            {
              "value": "80%",
              "description": "80% من عرض العنصر الأب"
            },
            {
              "value": "90%",
              "description": "90% من عرض العنصر الأب"
            },
            {
              "value": "100%",
              "description": "عرض كامل العنصر الأب"
            },
            {
              "value": "100vw",
              "description": "العرض الكامل لنافذة المتصفح (viewport width)"
            },
            {
              "value": "50vw",
              "description": "نصف عرض نافذة المتصفح"
            },
            {
              "value": "100svw",
              "description": "العرض الكامل للنافذة الصغيرة (Small Viewport)"
            },
            {
              "value": "100lvw",
              "description": "العرض الكامل للنافذة الكبيرة (Large Viewport)"
            },
            {
              "value": "100dvw",
              "description": "العرض الكامل للنافذة الديناميكية (Dynamic Viewport)"
            },
            {
              "value": "max-content",
              "description": "العرض حسب حجم المحتوى الداخلي بدون التفاف - يكبر حسب الحاجة"
            },
            {
              "value": "min-content",
              "description": "أصغر عرض يمكن أن يأخذه المحتوى قبل الالتفاف إلى سطر جديد"
            },
            {
              "value": "fit-content",
              "description": "عرض يناسب المحتوى لكن لا يتجاوز حجم الأب - أفضل من max-content"
            },
            {
              "value": "stretch",
              "description": "يتمدد ليملأ العرض المتاح بالكامل (مرادف لـ 100%)"
            },
            {
              "value": "clamp(200px, 50%, 400px)",
              "description": "عرض بين 200 و400 بكسل، و50% من عرض الأب"
            },
            {
              "value": "min(50%, 400px)",
              "description": "أصغر قيمة بين 50% من الأب و400 بكسل"
            },
            {
              "value": "max(50%, 200px)",
              "description": "أكبر قيمة بين 50% من الأب و200 بكسل"
            },
            {
              "value": "calc(100% - 40px)",
              "description": "حساب عرض باستخدام العملية الحسابية"
            },
            {
              "value": "calc(50% + 20px)",
              "description": "نصف عرض الأب زائد 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height",
          "description": "الخاصية الرئيسية لتحديد ارتفاع العنصر، يمكن أن تكون ثابتة أو نسبية أو معتمدة على المحتوى",
          "values": [
            {
              "value": "auto",
              "description": "يحسب المتصفح الارتفاع تلقائياً حسب المحتوى (القيمة الافتراضية)"
            },
            {
              "value": "10px",
              "description": "ارتفاع 10 بكسل - صغير جداً"
            },
            {
              "value": "20px",
              "description": "ارتفاع 20 بكسل"
            },
            {
              "value": "50px",
              "description": "ارتفاع 50 بكسل"
            },
            {
              "value": "100px",
              "description": "ارتفاع 100 بكسل"
            },
            {
              "value": "150px",
              "description": "ارتفاع 150 بكسل"
            },
            {
              "value": "200px",
              "description": "ارتفاع 200 بكسل"
            },
            {
              "value": "300px",
              "description": "ارتفاع 300 بكسل"
            },
            {
              "value": "400px",
              "description": "ارتفاع 400 بكسل"
            },
            {
              "value": "500px",
              "description": "ارتفاع 500 بكسل"
            },
            {
              "value": "600px",
              "description": "ارتفاع 600 بكسل"
            },
            {
              "value": "700px",
              "description": "ارتفاع 700 بكسل"
            },
            {
              "value": "800px",
              "description": "ارتفاع 800 بكسل"
            },
            {
              "value": "900px",
              "description": "ارتفاع 900 بكسل"
            },
            {
              "value": "1000px",
              "description": "ارتفاع 1000 بكسل"
            },
            {
              "value": "10%",
              "description": "10% من ارتفاع العنصر الأب"
            },
            {
              "value": "20%",
              "description": "20% من ارتفاع العنصر الأب"
            },
            {
              "value": "25%",
              "description": "ربع ارتفاع العنصر الأب"
            },
            {
              "value": "33%",
              "description": "ثلث ارتفاع العنصر الأب"
            },
            {
              "value": "50%",
              "description": "نصف ارتفاع العنصر الأب"
            },
            {
              "value": "66%",
              "description": "ثلثي ارتفاع العنصر الأب"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع ارتفاع العنصر الأب"
            },
            {
              "value": "80%",
              "description": "80% من ارتفاع العنصر الأب"
            },
            {
              "value": "90%",
              "description": "90% من ارتفاع العنصر الأب"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل العنصر الأب"
            },
            {
              "value": "100vh",
              "description": "الارتفاع الكامل لنافذة المتصفح (viewport height)"
            },
            {
              "value": "50vh",
              "description": "نصف ارتفاع نافذة المتصفح"
            },
            {
              "value": "100svh",
              "description": "الارتفاع الكامل للنافذة الصغيرة"
            },
            {
              "value": "100lvh",
              "description": "الارتفاع الكامل للنافذة الكبيرة"
            },
            {
              "value": "100dvh",
              "description": "الارتفاع الكامل للنافذة الديناميكية"
            },
            {
              "value": "max-content",
              "description": "الارتفاع حسب حجم المحتوى الداخلي"
            },
            {
              "value": "min-content",
              "description": "أصغر ارتفاع يمكن أن يأخذه المحتوى"
            },
            {
              "value": "fit-content",
              "description": "ارتفاع يناسب المحتوى لكن لا يتجاوز حجم الأب"
            },
            {
              "value": "stretch",
              "description": "يتمدد ليملأ الارتفاع المتاح بالكامل"
            },
            {
              "value": "clamp(100px, 50vh, 400px)",
              "description": "ارتفاع بين 100 و400 بكسل، و50% من ارتفاع النافذة"
            },
            {
              "value": "calc(100% - 60px)",
              "description": "حساب ارتفاع باستخدام العملية الحسابية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "min-width",
          "description": "يحدد أقل عرض يمكن أن يأخذه العنصر، لا يمكن أن يصغر عنه مهما قل المحتوى، يحافظ على حد أدنى للحجم",
          "values": [
            {
              "value": "0",
              "description": "بدون حد أدنى - يمكن أن يصغر حتى الصفر (القيمة الافتراضية)"
            },
            {
              "value": "10px",
              "description": "حد أدنى 10 بكسل"
            },
            {
              "value": "20px",
              "description": "حد أدنى 20 بكسل"
            },
            {
              "value": "50px",
              "description": "حد أدنى 50 بكسل"
            },
            {
              "value": "100px",
              "description": "حد أدنى 100 بكسل"
            },
            {
              "value": "150px",
              "description": "حد أدنى 150 بكسل"
            },
            {
              "value": "200px",
              "description": "حد أدنى 200 بكسل"
            },
            {
              "value": "300px",
              "description": "حد أدنى 300 بكسل"
            },
            {
              "value": "400px",
              "description": "حد أدنى 400 بكسل"
            },
            {
              "value": "500px",
              "description": "حد أدنى 500 بكسل"
            },
            {
              "value": "10%",
              "description": "حد أدنى 10% من عرض الأب"
            },
            {
              "value": "20%",
              "description": "حد أدنى 20% من عرض الأب"
            },
            {
              "value": "25%",
              "description": "حد أدنى 25% من عرض الأب"
            },
            {
              "value": "50%",
              "description": "حد أدنى 50% من عرض الأب"
            },
            {
              "value": "100%",
              "description": "حد أدنى 100% من عرض الأب - لا يمكن أن يكون أصغر"
            },
            {
              "value": "min-content",
              "description": "حد أدنى حسب أصغر محتوى"
            },
            {
              "value": "max-content",
              "description": "حد أدنى حسب أكبر محتوى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "max-width",
          "description": "يحدد أكبر عرض يمكن أن يأخذه العنصر، لا يمكن أن يكبر عنه مهما زاد المحتوى، يمنع التمدد المفرط",
          "values": [
            {
              "value": "none",
              "description": "بدون حد أقصى - يمكن أن يكبر بلا حدود (القيمة الافتراضية)"
            },
            {
              "value": "100px",
              "description": "حد أقصى 100 بكسل"
            },
            {
              "value": "200px",
              "description": "حد أقصى 200 بكسل"
            },
            {
              "value": "300px",
              "description": "حد أقصى 300 بكسل"
            },
            {
              "value": "400px",
              "description": "حد أقصى 400 بكسل"
            },
            {
              "value": "500px",
              "description": "حد أقصى 500 بكسل"
            },
            {
              "value": "600px",
              "description": "حد أقصى 600 بكسل"
            },
            {
              "value": "700px",
              "description": "حد أقصى 700 بكسل"
            },
            {
              "value": "800px",
              "description": "حد أقصى 800 بكسل"
            },
            {
              "value": "900px",
              "description": "حد أقصى 900 بكسل"
            },
            {
              "value": "1000px",
              "description": "حد أقصى 1000 بكسل"
            },
            {
              "value": "50%",
              "description": "حد أقصى 50% من عرض الأب"
            },
            {
              "value": "75%",
              "description": "حد أقصى 75% من عرض الأب"
            },
            {
              "value": "90%",
              "description": "حد أقصى 90% من عرض الأب"
            },
            {
              "value": "100%",
              "description": "حد أقصى 100% من عرض الأب - لا يمكن أن يتجاوز الأب"
            },
            {
              "value": "min-content",
              "description": "حد أقصى حسب أصغر محتوى"
            },
            {
              "value": "max-content",
              "description": "حد أقصى حسب أكبر محتوى"
            },
            {
              "value": "fit-content",
              "description": "حد أقصى حسب المحتوى المناسب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "min-height",
          "description": "يحدد أقل ارتفاع يمكن أن يأخذه العنصر، لا يمكن أن يصغر عنه مهما قل المحتوى، يحافظ على حد أدنى للارتفاع",
          "values": [
            {
              "value": "0",
              "description": "بدون حد أدنى - يمكن أن يصغر حتى الصفر (القيمة الافتراضية)"
            },
            {
              "value": "10px",
              "description": "حد أدنى 10 بكسل"
            },
            {
              "value": "20px",
              "description": "حد أدنى 20 بكسل"
            },
            {
              "value": "50px",
              "description": "حد أدنى 50 بكسل"
            },
            {
              "value": "100px",
              "description": "حد أدنى 100 بكسل"
            },
            {
              "value": "150px",
              "description": "حد أدنى 150 بكسل"
            },
            {
              "value": "200px",
              "description": "حد أدنى 200 بكسل"
            },
            {
              "value": "300px",
              "description": "حد أدنى 300 بكسل"
            },
            {
              "value": "400px",
              "description": "حد أدنى 400 بكسل"
            },
            {
              "value": "500px",
              "description": "حد أدنى 500 بكسل"
            },
            {
              "value": "10%",
              "description": "حد أدنى 10% من ارتفاع الأب"
            },
            {
              "value": "20%",
              "description": "حد أدنى 20% من ارتفاع الأب"
            },
            {
              "value": "25%",
              "description": "حد أدنى 25% من ارتفاع الأب"
            },
            {
              "value": "50%",
              "description": "حد أدنى 50% من ارتفاع الأب"
            },
            {
              "value": "100%",
              "description": "حد أدنى 100% من ارتفاع الأب"
            },
            {
              "value": "100vh",
              "description": "حد أدنى ارتفاع كامل النافذة"
            },
            {
              "value": "50vh",
              "description": "حد أدنى نصف ارتفاع النافذة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "max-height",
          "description": "يحدد أكبر ارتفاع يمكن أن يأخذه العنصر، لا يمكن أن يكبر عنه مهما زاد المحتوى، يمنع التمدد المفرط",
          "values": [
            {
              "value": "none",
              "description": "بدون حد أقصى - يمكن أن يكبر بلا حدود (القيمة الافتراضية)"
            },
            {
              "value": "100px",
              "description": "حد أقصى 100 بكسل"
            },
            {
              "value": "200px",
              "description": "حد أقصى 200 بكسل"
            },
            {
              "value": "300px",
              "description": "حد أقصى 300 بكسل"
            },
            {
              "value": "400px",
              "description": "حد أقصى 400 بكسل"
            },
            {
              "value": "500px",
              "description": "حد أقصى 500 بكسل"
            },
            {
              "value": "600px",
              "description": "حد أقصى 600 بكسل"
            },
            {
              "value": "700px",
              "description": "حد أقصى 700 بكسل"
            },
            {
              "value": "800px",
              "description": "حد أقصى 800 بكسل"
            },
            {
              "value": "900px",
              "description": "حد أقصى 900 بكسل"
            },
            {
              "value": "1000px",
              "description": "حد أقصى 1000 بكسل"
            },
            {
              "value": "50%",
              "description": "حد أقصى 50% من ارتفاع الأب"
            },
            {
              "value": "75%",
              "description": "حد أقصى 75% من ارتفاع الأب"
            },
            {
              "value": "90%",
              "description": "حد أقصى 90% من ارتفاع الأب"
            },
            {
              "value": "100%",
              "description": "حد أقصى 100% من ارتفاع الأب"
            },
            {
              "value": "100vh",
              "description": "حد أقصى ارتفاع كامل النافذة"
            },
            {
              "value": "50vh",
              "description": "حد أقصى نصف ارتفاع النافذة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "aspect-ratio",
      "description": "يحدد نسبة العرض إلى الارتفاع للعنصر تلقائياً، مفيد للصور والفيديوهات المتجاوبة بدون الحاجة لحيل padding-top القديمة",
      "properties": [
        {
          "name": "aspect-ratio",
          "description": "يحدد نسبة العرض إلى الارتفاع للعنصر تلقائياً",
          "values": [
            {
              "value": "auto",
              "description": "نسبة طبيعية حسب المحتوى (القيمة الافتراضية)"
            },
            {
              "value": "1 / 1",
              "description": "نسبة 1:1 - مربع تماماً (صورة مربعة)"
            },
            {
              "value": "4 / 3",
              "description": "نسبة 4:3 - تقليدية للصور (أوسع من الطول)"
            },
            {
              "value": "3 / 2",
              "description": "نسبة 3:2 - شائعة في الكاميرات"
            },
            {
              "value": "3 / 4",
              "description": "نسبة 3:4 - صورة عمودية"
            },
            {
              "value": "16 / 9",
              "description": "نسبة 16:9 - شائعة للفيديو وشاشات العرض"
            },
            {
              "value": "21 / 9",
              "description": "نسبة 21:9 - عريضة جداً (شاشات فائقة العرض)"
            },
            {
              "value": "9 / 16",
              "description": "نسبة 9:16 - فيديو عمودي (ستوري)"
            },
            {
              "value": "2 / 3",
              "description": "نسبة 2:3 - صورة عمودية"
            },
            {
              "value": "5 / 4",
              "description": "نسبة 5:4 - شاشات قديمة"
            },
            {
              "value": "5 / 3",
              "description": "نسبة 5:3 - شاشات واسعة"
            },
            {
              "value": "1.618 / 1",
              "description": "نسبة 1.618:1 - النسبة الذهبية"
            },
            {
              "value": "1 / 2",
              "description": "نسبة 1:2 - مستطيل عمودي طويل"
            },
            {
              "value": "2 / 1",
              "description": "نسبة 2:1 - مستطيل أفقي طويل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "box-sizing",
      "description": "يحدد كيف تُحسب أبعاد العنصر: هل تشمل width/height الحواف والمسافات الداخلية أم لا، يؤثر على حجم العنصر الكلي",
      "properties": [
        {
          "name": "box-sizing",
          "description": "يحدد كيف تُحسب أبعاد العنصر",
          "values": [
            {
              "value": "content-box",
              "description": "width/height تخص المحتوى فقط، تُضاف padding وborder فوقها (القيمة الافتراضية) - قد يؤدي إلى نتائج غير متوقعة"
            },
            {
              "value": "border-box",
              "description": "width/height تشمل padding وborder، فلا يزيد الحجم الكلي عنها (الأكثر استخداماً عملياً) - يسهل التصميم"
            }
          ]
        },
        {
          "name": "box-decoration-break",
          "description": "يحدد كيفية تطبيق الخلفية والحدود والظلال عند تقسيم العنصر عبر عدة أسطر أو أعمدة أو صفحات",
          "values": [
            {
              "value": "slice",
              "description": "يعامل العنصر كقطعة واحدة مقسّمة - الخلفية والحدود كأنها مستمرة (القيمة الافتراضية)"
            },
            {
              "value": "clone",
              "description": "يكرر الخلفية والحدود على كل جزء كأنه عنصر مستقل - مفيد للنصوص الطويلة"
            }
          ]
        }
      ]
    },
    {
      "tag": "margin",
      "description": "يحدد المسافة الخارجية للعنصر، تفصله عن العناصر المجاورة له، تتحكم في التباعد بين العناصر",
      "properties": [
        {
          "name": "margin",
          "description": "الخاصية المختصرة للهوامش الخارجية، تحدد المسافة بين العنصر والعناصر المجاورة له",
          "values": [
            {
              "value": "0",
              "description": "بدون هوامش - العنصر ملتصق بالعناصر المجاورة"
            },
            {
              "value": "2px",
              "description": "هامش 2 بكسل من جميع الجهات - تباعد ضئيل"
            },
            {
              "value": "4px",
              "description": "هامش 4 بكسل من جميع الجهات"
            },
            {
              "value": "5px",
              "description": "هامش 5 بكسل من جميع الجهات"
            },
            {
              "value": "8px",
              "description": "هامش 8 بكسل من جميع الجهات"
            },
            {
              "value": "10px",
              "description": "هامش 10 بكسل من جميع الجهات - تباعد مريح"
            },
            {
              "value": "12px",
              "description": "هامش 12 بكسل من جميع الجهات"
            },
            {
              "value": "15px",
              "description": "هامش 15 بكسل من جميع الجهات"
            },
            {
              "value": "20px",
              "description": "هامش 20 بكسل من جميع الجهات - تباعد واضح"
            },
            {
              "value": "25px",
              "description": "هامش 25 بكسل من جميع الجهات"
            },
            {
              "value": "30px",
              "description": "هامش 30 بكسل من جميع الجهات"
            },
            {
              "value": "40px",
              "description": "هامش 40 بكسل من جميع الجهات - تباعد كبير"
            },
            {
              "value": "50px",
              "description": "هامش 50 بكسل من جميع الجهات"
            },
            {
              "value": "100px",
              "description": "هامش 100 بكسل من جميع الجهات"
            },
            {
              "value": "10px 20px",
              "description": "أعلى/أسفل = 10px، يمين/يسار = 20px - تباعد عمودي وأفقي مختلف"
            },
            {
              "value": "10px 20px 30px",
              "description": "أعلى=10px، يمين/يسار=20px، أسفل=30px"
            },
            {
              "value": "10px 20px 30px 40px",
              "description": "أعلى=10px، يمين=20px، أسفل=30px، يسار=40px"
            },
            {
              "value": "auto",
              "description": "يقسم الهامش تلقائياً لتوسيط العنصر أفقياً (يعمل مع عرض محدد)"
            },
            {
              "value": "0 auto",
              "description": "توسيط العنصر أفقياً - أشهر استخدام للتوسيط"
            },
            {
              "value": "10%",
              "description": "هامش 10% من عرض الأب"
            },
            {
              "value": "5% 10%",
              "description": "هامش عمودي 5%، أفقي 10%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "margin-top",
          "description": "يحدد المسافة الخارجية من الجهة العلوية للعنصر، تفصله عن العنصر الذي فوقه",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش علوي"
            },
            {
              "value": "5px",
              "description": "هامش علوي 5 بكسل"
            },
            {
              "value": "10px",
              "description": "هامش علوي 10 بكسل"
            },
            {
              "value": "15px",
              "description": "هامش علوي 15 بكسل"
            },
            {
              "value": "20px",
              "description": "هامش علوي 20 بكسل"
            },
            {
              "value": "30px",
              "description": "هامش علوي 30 بكسل"
            },
            {
              "value": "50px",
              "description": "هامش علوي 50 بكسل"
            },
            {
              "value": "auto",
              "description": "يتحكم المتصفح بالهامش العلوي"
            },
            {
              "value": "10%",
              "description": "10% من ارتفاع العنصر الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "margin-right",
          "description": "يحدد المسافة الخارجية من الجهة اليمنى للعنصر، تفصله عن العنصر الذي على يمينه",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش أيمن"
            },
            {
              "value": "10px",
              "description": "هامش أيمن 10 بكسل"
            },
            {
              "value": "20px",
              "description": "هامش أيمن 20 بكسل"
            },
            {
              "value": "auto",
              "description": "يتحكم المتصفح بالهامش الأيمن - مفيد للتوسيط"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "margin-bottom",
          "description": "يحدد المسافة الخارجية من الجهة السفلية للعنصر، تفصله عن العنصر الذي تحته",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش سفلي"
            },
            {
              "value": "10px",
              "description": "هامش سفلي 10 بكسل"
            },
            {
              "value": "20px",
              "description": "هامش سفلي 20 بكسل"
            },
            {
              "value": "30px",
              "description": "هامش سفلي 30 بكسل"
            },
            {
              "value": "50px",
              "description": "هامش سفلي 50 بكسل"
            },
            {
              "value": "auto",
              "description": "يتحكم المتصفح بالهامش السفلي"
            },
            {
              "value": "10%",
              "description": "10% من ارتفاع العنصر الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "margin-left",
          "description": "يحدد المسافة الخارجية من الجهة اليسرى للعنصر، تفصله عن العنصر الذي على يساره",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش أيسر"
            },
            {
              "value": "10px",
              "description": "هامش أيسر 10 بكسل"
            },
            {
              "value": "20px",
              "description": "هامش أيسر 20 بكسل"
            },
            {
              "value": "auto",
              "description": "يتحكم المتصفح بالهامش الأيسر - مفيد للتوسيط"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "margin-collapse (ملاحظة)",
          "description": "ظاهرة انهيار الهوامش: عندما يتلامس هامشان رأسيان، ينهاران إلى الهامش الأكبر منهما (وليس المجموع)",
          "values": [
            {
              "value": "ملاحظة مهمة",
              "description": "الهوامش الرأسية للأخوة المتجاورة تنهار، والهوامش بين الأب والابن الأولى تنهار أيضاً"
            },
            {
              "value": "حلول",
              "description": "استخدم padding بدلاً من margin، أو أضف border أو overflow: auto لمنع الانهيار"
            }
          ]
        }
      ]
    },
    {
      "tag": "padding",
      "description": "يحدد المسافة الداخلية للعنصر بين المحتوى والحواف، تزيد من حجم العنصر من الداخل وتحمي المحتوى من الالتصاق بالحواف",
      "properties": [
        {
          "name": "padding",
          "description": "الخاصية المختصرة للمسافات الداخلية، تحدد المسافة بين المحتوى وحافة العنصر",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافات داخلية - المحتوى ملتصق بالحافة"
            },
            {
              "value": "2px",
              "description": "مسافة 2 بكسل من جميع الجهات"
            },
            {
              "value": "4px",
              "description": "مسافة 4 بكسل من جميع الجهات"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل من جميع الجهات"
            },
            {
              "value": "8px",
              "description": "مسافة 8 بكسل من جميع الجهات"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من جميع الجهات - مسافة مريحة"
            },
            {
              "value": "12px",
              "description": "مسافة 12 بكسل من جميع الجهات"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل من جميع الجهات"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل من جميع الجهات - مسافة واضحة"
            },
            {
              "value": "25px",
              "description": "مسافة 25 بكسل من جميع الجهات"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل من جميع الجهات"
            },
            {
              "value": "40px",
              "description": "مسافة 40 بكسل من جميع الجهات - مساحة واسعة"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل من جميع الجهات"
            },
            {
              "value": "100px",
              "description": "مسافة 100 بكسل من جميع الجهات"
            },
            {
              "value": "10px 20px",
              "description": "أعلى/أسفل = 10px، يمين/يسار = 20px"
            },
            {
              "value": "10px 20px 30px",
              "description": "أعلى=10px، يمين/يسار=20px، أسفل=30px"
            },
            {
              "value": "10px 20px 30px 40px",
              "description": "أعلى=10px، يمين=20px، أسفل=30px، يسار=40px"
            },
            {
              "value": "10%",
              "description": "مسافة 10% من عرض الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "padding-top",
          "description": "يحدد المسافة الداخلية من الجهة العلوية، تخلق فجوة بين المحتوى والحافة العلوية",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة داخلية علوية"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل من الأعلى"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من الأعلى"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل من الأعلى"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل من الأعلى"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل من الأعلى"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "padding-right",
          "description": "يحدد المسافة الداخلية من الجهة اليمنى، تخلق فجوة بين المحتوى والحافة اليمنى",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة داخلية يمنى"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من اليمين"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل من اليمين"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "padding-bottom",
          "description": "يحدد المسافة الداخلية من الجهة السفلية، تخلق فجوة بين المحتوى والحافة السفلية",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة داخلية سفلية"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من الأسفل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل من الأسفل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل من الأسفل"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            }
          ],
          "freeInput": true
        },
        {
          "name": "padding-left",
          "description": "يحدد المسافة الداخلية من الجهة اليسرى، تخلق فجوة بين المحتوى والحافة اليسرى",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة داخلية يسرى"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من اليسار"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل من اليسار"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "border",
      "description": "يحدد خصائص الحواف (العرض، النمط، اللون) بشكل مختصر، تخلق حدوداً مرئية حول العنصر",
      "properties": [
        {
          "name": "border",
          "description": "الخاصية المختصرة للحواف، تجمع العرض، النمط، واللون في سطر واحد",
          "values": [
            {
              "value": "none",
              "description": "بدون حافة (القيمة الافتراضية)"
            },
            {
              "value": "1px solid black",
              "description": "حافة سوداء صلبة سمك 1 بكسل"
            },
            {
              "value": "2px dashed red",
              "description": "حافة حمراء متقطعة سمك 2 بكسل"
            },
            {
              "value": "3px dotted blue",
              "description": "حافة زرقاء منقطة سمك 3 بكسل"
            },
            {
              "value": "4px double green",
              "description": "حافة خضراء مزدوجة سمك 4 بكسل"
            },
            {
              "value": "5px groove gray",
              "description": "حافة رمادية بظل تجويف سمك 5 بكسل"
            },
            {
              "value": "6px ridge gold",
              "description": "حافة ذهبية بارزة سمك 6 بكسل"
            },
            {
              "value": "7px inset navy",
              "description": "حافة غائرة باللون البحري"
            },
            {
              "value": "8px outset crimson",
              "description": "حافة بارزة للخارج"
            },
            {
              "value": "2px solid transparent",
              "description": "حافة شفافة - تحافظ على المساحة"
            },
            {
              "value": "1px solid #cccccc",
              "description": "حافة رمادية فاتحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-width",
          "description": "يحدد سمك الحافة من جميع الجهات أو لكل جهة على حدة",
          "values": [
            {
              "value": "thin",
              "description": "سمك رفيع (عادة 1 بكسل)"
            },
            {
              "value": "medium",
              "description": "سمك متوسط (عادة 3 بكسل) - القيمة الافتراضية"
            },
            {
              "value": "thick",
              "description": "سمك سميك (عادة 5 بكسل)"
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
              "value": "3px",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4px",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5px",
              "description": "سمك 5 بكسل"
            },
            {
              "value": "10px",
              "description": "سمك 10 بكسل"
            },
            {
              "value": "1px 2px",
              "description": "أعلى/أسفل = 1px، يمين/يسار = 2px"
            },
            {
              "value": "1px 2px 3px",
              "description": "أعلى=1px، يمين/يسار=2px، أسفل=3px"
            },
            {
              "value": "1px 2px 3px 4px",
              "description": "كل جهة بقيمة مختلفة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-style",
          "description": "يحدد نمط الحافة من جميع الجهات",
          "values": [
            {
              "value": "none",
              "description": "بدون حافة"
            },
            {
              "value": "hidden",
              "description": "يخفي الحافة (خاص بالجداول)"
            },
            {
              "value": "solid",
              "description": "خط صلب - الأكثر استخداماً"
            },
            {
              "value": "dashed",
              "description": "خط متقطع بشرطات"
            },
            {
              "value": "dotted",
              "description": "خط منقط بنقاط"
            },
            {
              "value": "double",
              "description": "خط مزدوج"
            },
            {
              "value": "groove",
              "description": "خط ذو تجويف ثلاثي الأبعاد"
            },
            {
              "value": "ridge",
              "description": "خط بارز ثلاثي الأبعاد"
            },
            {
              "value": "inset",
              "description": "خط غائر ثلاثي الأبعاد"
            },
            {
              "value": "outset",
              "description": "خط بارز للخارج ثلاثي الأبعاد"
            }
          ]
        },
        {
          "name": "border-color",
          "description": "يحدد لون الحافة من جميع الجهات",
          "values": [
            {
              "value": "transparent",
              "description": "لون شفاف"
            },
            {
              "value": "currentColor",
              "description": "نفس لون النص"
            },
            {
              "value": "black",
              "description": "أسود"
            },
            {
              "value": "white",
              "description": "أبيض"
            },
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            },
            {
              "value": "green",
              "description": "أخضر"
            },
            {
              "value": "#ff0000",
              "description": "أحمر (Hex)"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر (RGB)"
            },
            {
              "value": "rgba(255, 0, 0, 0.5)",
              "description": "أحمر شفاف"
            },
            {
              "value": "hsl(0, 100%, 50%)",
              "description": "أحمر (HSL)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "border-radius",
      "description": "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء، يعطي مظهراً ناعماً وعصرياً",
      "properties": [
        {
          "name": "border-radius",
          "description": "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء",
          "values": [
            {
              "value": "0",
              "description": "زوايا حادة (القيمة الافتراضية)"
            },
            {
              "value": "2px",
              "description": "انحناء طفيف جداً"
            },
            {
              "value": "4px",
              "description": "انحناء خفيف"
            },
            {
              "value": "6px",
              "description": "انحناء خفيف متوسط"
            },
            {
              "value": "8px",
              "description": "انحناء متوسط"
            },
            {
              "value": "10px",
              "description": "انحناء متوسط - الأكثر استخداماً"
            },
            {
              "value": "12px",
              "description": "انحناء متوسط واضح"
            },
            {
              "value": "15px",
              "description": "انحناء واضح"
            },
            {
              "value": "20px",
              "description": "انحناء كبير"
            },
            {
              "value": "25px",
              "description": "انحناء كبير"
            },
            {
              "value": "30px",
              "description": "انحناء كبير جداً"
            },
            {
              "value": "40px",
              "description": "انحناء كبير جداً"
            },
            {
              "value": "50px",
              "description": "انحناء كبير جداً - شبه دائري"
            },
            {
              "value": "100px",
              "description": "انحناء 100 بكسل"
            },
            {
              "value": "50%",
              "description": "يجعل العنصر دائرياً بالكامل (إذا كان مربعاً)"
            },
            {
              "value": "100%",
              "description": "يجعل العنصر بيضاوياً"
            },
            {
              "value": "10px 20px",
              "description": "زوايا متقابلة بنفس القيمة"
            },
            {
              "value": "10px 20px 30px 40px",
              "description": "كل زاوية بقيمة مختلفة"
            },
            {
              "value": "10px / 20px",
              "description": "انحناء أفقي 10px وعمودي 20px (بيضاوي)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "logical-properties",
      "description": "الخصائص المنطقية لنموذج الصندوق، تتكيف مع اتجاه النص (RTL/LTR)، مهمة للدعم متعدد اللغات",
      "properties": [
        {
          "name": "margin-block",
          "description": "يحدد الهوامش الخارجية في اتجاه الكتلة (الرأسي في اللغات الأفقية) بدلاً من top/bottom",
          "values": [
            {
              "value": "10px",
              "description": "هامش 10 بكسل في اتجاه الكتلة (أعلى وأسفل)"
            },
            {
              "value": "10px 20px",
              "description": "بداية الكتلة=10px، نهاية الكتلة=20px"
            },
            {
              "value": "auto",
              "description": "يقسم الهامش تلقائياً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "margin-inline",
          "description": "يحدد الهوامش الخارجية في اتجاه الخط (الأفقي في اللغات الأفقية) بدلاً من left/right",
          "values": [
            {
              "value": "10px",
              "description": "هامش 10 بكسل في اتجاه الخط (يمين ويسار)"
            },
            {
              "value": "10px 20px",
              "description": "بداية الخط=10px، نهاية الخط=20px"
            },
            {
              "value": "auto",
              "description": "يقسم الهامش تلقائياً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "padding-block",
          "description": "يحدد المسافات الداخلية في اتجاه الكتلة (الرأسي) بدلاً من top/bottom",
          "values": [
            {
              "value": "10px",
              "description": "مسافة 10 بكسل في اتجاه الكتلة"
            },
            {
              "value": "10px 20px",
              "description": "بداية الكتلة=10px، نهاية الكتلة=20px"
            }
          ],
          "freeInput": true
        },
        {
          "name": "padding-inline",
          "description": "يحدد المسافات الداخلية في اتجاه الخط (الأفقي) بدلاً من left/right",
          "values": [
            {
              "value": "10px",
              "description": "مسافة 10 بكسل في اتجاه الخط"
            },
            {
              "value": "10px 20px",
              "description": "بداية الخط=10px، نهاية الخط=20px"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-block",
          "description": "يحدد الحافة في اتجاه الكتلة (أعلى وأسفل في اللغات الأفقية)",
          "values": [
            {
              "value": "2px solid black",
              "description": "حافة بداية ونهاية الكتلة معاً"
            },
            {
              "value": "3px dashed red",
              "description": "حافة حمراء متقطعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-inline",
          "description": "يحدد الحافة في اتجاه الخط (يمين ويسار في اللغات الأفقية)",
          "values": [
            {
              "value": "2px solid black",
              "description": "حافة بداية ونهاية السطر معاً"
            },
            {
              "value": "2px dashed green",
              "description": "حافة خضراء متقطعة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "outline",
      "description": "يحدد مخططاً خارجياً للعنصر (يظهر خارج الحافة ولا يأخذ مساحة)، مفيد للتأكيد على العناصر النشطة",
      "properties": [
        {
          "name": "outline",
          "description": "الخاصية المختصرة للمخطط الخارجي، تجمع width, style, color",
          "values": [
            {
              "value": "none",
              "description": "بدون مخطط (القيمة الافتراضية)"
            },
            {
              "value": "2px solid red",
              "description": "مخطط أحمر سمك 2 بكسل صلبة"
            },
            {
              "value": "3px dashed blue",
              "description": "مخطط أزرق متقطع سمك 3 بكسل"
            },
            {
              "value": "4px dotted green",
              "description": "مخطط أخضر منقط"
            },
            {
              "value": "5px double orange",
              "description": "مخطط برتقالي مزدوج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "outline-width",
          "description": "يحدد سمك المخطط الخارجي",
          "values": [
            {
              "value": "thin",
              "description": "سمك رفيع (1 بكسل)"
            },
            {
              "value": "medium",
              "description": "سمك متوسط (3 بكسل)"
            },
            {
              "value": "thick",
              "description": "سمك سميك (5 بكسل)"
            },
            {
              "value": "2px",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "3px",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4px",
              "description": "سمك 4 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "outline-style",
          "description": "يحدد نمط المخطط الخارجي",
          "values": [
            {
              "value": "none",
              "description": "بدون مخطط"
            },
            {
              "value": "solid",
              "description": "خط صلب"
            },
            {
              "value": "dashed",
              "description": "متقطع"
            },
            {
              "value": "dotted",
              "description": "منقط"
            },
            {
              "value": "double",
              "description": "مزدوج"
            },
            {
              "value": "groove",
              "description": "تجويف"
            },
            {
              "value": "ridge",
              "description": "بارز"
            },
            {
              "value": "inset",
              "description": "غائر"
            },
            {
              "value": "outset",
              "description": "بارز للخارج"
            }
          ]
        },
        {
          "name": "outline-color",
          "description": "يحدد لون المخطط الخارجي",
          "values": [
            {
              "value": "invert",
              "description": "لون معكوس من خلفية العنصر"
            },
            {
              "value": "currentColor",
              "description": "نفس لون النص (القيمة الافتراضية)"
            },
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "outline-offset",
          "description": "يحدد المسافة بين المخطط الخارجي وحافة العنصر، تظهر فجوة بينهما",
          "values": [
            {
              "value": "0",
              "description": "بدون فجوة (القيمة الافتراضية)"
            },
            {
              "value": "2px",
              "description": "فجوة 2 بكسل"
            },
            {
              "value": "5px",
              "description": "فجوة 5 بكسل"
            },
            {
              "value": "10px",
              "description": "فجوة 10 بكسل"
            },
            {
              "value": "-2px",
              "description": "يتداخل المخطط مع الحافة (قيمة سالبة)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "box-model-examples",
      "description": "أمثلة عملية متقدمة لنموذج الصندوق تجمع بين عدة خصائص",
      "properties": [
        {
          "name": "مثال 1 - بطاقة محتوى أنيقة",
          "description": "بطاقة مع هوامش ومسافات داخلية متوازنة",
          "values": [
            {
              "value": ".card { width: 300px; padding: 20px; margin: 15px auto; border: 1px solid #e0e0e0; border-radius: 12px; box-sizing: border-box; }",
              "description": "بطاقة بتصميم نظيف ومتوازن"
            }
          ]
        },
        {
          "name": "مثال 2 - تخطيط مرن",
          "description": "عناصر ذات عرض نسبي مع حدود دنيا وعليا",
          "values": [
            {
              "value": ".container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 20px; box-sizing: border-box; }",
              "description": "حاوية مركزية متجاوبة"
            }
          ]
        },
        {
          "name": "مثال 3 - صورة متجاوبة",
          "description": "صورة تحافظ على نسبها مع حدود قصوى",
          "values": [
            {
              "value": ".responsive-image { width: 100%; max-width: 600px; height: auto; aspect-ratio: 16 / 9; border-radius: 8px; }",
              "description": "صورة فيديو متجاوبة"
            }
          ]
        },
        {
          "name": "مثال 4 - مربع دائري مع ظل",
          "description": "عنصر دائري مع هوامش ومسافات داخلية",
          "values": [
            {
              "value": ".avatar { width: 80px; height: 80px; border-radius: 50%; padding: 4px; border: 2px solid #0078ff; margin: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }",
              "description": "صورة رمزية دائرية مع إطار"
            }
          ]
        },
        {
          "name": "مثال 5 - فواصل عمودية",
          "description": "استخدام الهوامش لإنشاء تباعد عمودي",
          "values": [
            {
              "value": ".section { margin-bottom: 40px; padding: 20px; border-bottom: 2px solid #eee; } .section:last-child { margin-bottom: 0; border-bottom: none; }",
              "description": "أقسام مفصولة بفواصل"
            }
          ]
        }
      ]
    },
    {
      "tag": "box-model-tips",
      "description": "نصائح وإرشادات مهمة لاستخدام نموذج الصندوق بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لنموذج الصندوق",
          "values": [
            {
              "value": "استخدم box-sizing: border-box عالمياً",
              "description": "* { box-sizing: border-box; } يسهل حسابات الأبعاد بشكل كبير"
            },
            {
              "value": "افهم margin collapse",
              "description": "الهوامش الرأسية تنهار إلى القيمة الأكبر، وليس المجموع"
            },
            {
              "value": "استخدم padding بدلاً من margin للتباعد الداخلي",
              "description": "padding يضيف مسافة داخل العنصر، margin يضيف مسافة خارجه"
            }
          ]
        },
        {
          "name": "نصائح التصميم المتجاوب",
          "description": "نصائح للتصميم المتجاوب باستخدام نموذج الصندوق",
          "values": [
            {
              "value": "استخدم وحدات نسبية",
              "description": "%، vw، vh، rem، em أفضل من px في التصميم المتجاوب"
            },
            {
              "value": "حدد max-width للصور",
              "description": "img { max-width: 100%; height: auto; } يمنع الصور من التجاوز"
            },
            {
              "value": "استخدم clamp() للأحجام",
              "description": "clamp(200px, 50%, 400px) يوفر مرونة مع حدود"
            }
          ]
        },
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء نموذج الصندوق",
          "values": [
            {
              "value": "تجنب التغيير المتكرر للأبعاد",
              "description": "تغيير width و height يسبب إعادة تدفق (reflow)"
            },
            {
              "value": "استخدم transform بدلاً من تغيير position",
              "description": "transform لا يسبب إعادة تدفق"
            },
            {
              "value": "استخدم will-change للأبعاد المتغيرة",
              "description": "will-change: width, height يحسن الأداء"
            }
          ]
        }
      ]
    }
  ],
  "layout": [
    {
      "tag": "display",
      "description": "يحدد نوع صندوق العنصر وكيفية ظهوره في التدفق الأساسي للصفحة، يغير سلوك العنصر بالكامل",
      "properties": [
        {
          "name": "display",
          "description": "الخاصية الرئيسية التي تحدد نوع عرض العنصر وتغير سلوكه في التخطيط",
          "values": [
            {
              "value": "block",
              "description": "يحتل العنصر العرض الكامل ويبدأ في سطر جديد، مثله مثل <div> و <p>"
            },
            {
              "value": "inline",
              "description": "يأخذ حجم محتواه فقط ولا يبدأ سطراً جديداً، مثله مثل <span> و <a>"
            },
            {
              "value": "inline-block",
              "description": "مزيج بين inline و block، يأخذ حجم المحتوى لكن يمكن تعديل عرضه وارتفاعه"
            },
            {
              "value": "flex",
              "description": "يحول العنصر إلى حاوية مرنة (Flexbox)، تتيح ترتيب العناصر داخلها بمرونة عالية"
            },
            {
              "value": "inline-flex",
              "description": "حاوية مرنة ولكن تتصرف كعنصر inline، لا تبدأ سطراً جديداً"
            },
            {
              "value": "grid",
              "description": "يحول العنصر إلى شبكة (Grid)، تتيح ترتيب العناصر في صفوف وأعمدة بدقة"
            },
            {
              "value": "inline-grid",
              "description": "شبكة ولكن تتصرف كعنصر inline، لا تبدأ سطراً جديداً"
            },
            {
              "value": "subgrid",
              "description": "يسمح للعنصر بميراث شبكة العنصر الأب واستخدامها، مفيد في الشبكات المعقدة"
            },
            {
              "value": "table",
              "description": "يجعل العنصر يتصرف كجدول <table>"
            },
            {
              "value": "inline-table",
              "description": "يتصرف كجدول ولكن كعنصر inline"
            },
            {
              "value": "table-row",
              "description": "يتصرف كصف في الجدول <tr>"
            },
            {
              "value": "table-cell",
              "description": "يتصرف كخلية في الجدول <td>"
            },
            {
              "value": "table-caption",
              "description": "يتصرف كعنوان الجدول <caption>"
            },
            {
              "value": "table-column",
              "description": "يتصرف كعمود في الجدول <col>"
            },
            {
              "value": "table-column-group",
              "description": "يتصرف كمجموعة أعمدة <colgroup>"
            },
            {
              "value": "table-header-group",
              "description": "يتصرف كمجموعة رأس الجدول <thead>"
            },
            {
              "value": "table-footer-group",
              "description": "يتصرف كمجموعة تذييل الجدول <tfoot>"
            },
            {
              "value": "table-row-group",
              "description": "يتصرف كمجموعة صفوف الجدول <tbody>"
            },
            {
              "value": "ruby",
              "description": "يحدد عنصراً للنصوص الحروفية (Ruby annotations) المستخدمة في اللغات الشرق آسيوية"
            },
            {
              "value": "ruby-base",
              "description": "يحدد النص الأساسي في تعليقات Ruby"
            },
            {
              "value": "ruby-text",
              "description": "يحدد النص التوضيحي في تعليقات Ruby"
            },
            {
              "value": "ruby-base-container",
              "description": "حاوية للنصوص الأساسية في Ruby"
            },
            {
              "value": "ruby-text-container",
              "description": "حاوية للنصوص التوضيحية في Ruby"
            },
            {
              "value": "list-item",
              "description": "يجعل العنصر يتصرف كعنصر قائمة <li> مع ظهور علامة تعداد"
            },
            {
              "value": "none",
              "description": "يخفي العنصر تماماً ولا يشغل أي مساحة في الصفحة، كأنه غير موجود"
            },
            {
              "value": "contents",
              "description": "يجعل العنصر نفسه يختفي ولكن محتوياته الداخلية تظهر كأبناء للعنصر الأب مباشرة"
            },
            {
              "value": "flow-root",
              "description": "يخلق سياقاً جديداً لتنسيق التدفق، يحوي العناصر العائمة داخله ويمنع خروجها"
            }
          ]
        }
      ]
    },
    {
      "tag": "position",
      "description": "يحدد طريقة تحديد موقع العنصر في الصفحة، وكيفية تفاعله مع العناصر الأخرى",
      "properties": [
        {
          "name": "position",
          "description": "الخاصية الرئيسية لتحديد طريقة التموضع",
          "values": [
            {
              "value": "static",
              "description": "الوضع الافتراضي، العنصر يتبع تدفق الصفحة الطبيعي ولا يتأثر بـ top/left/right/bottom"
            },
            {
              "value": "relative",
              "description": "يحدد موقع العنصر نسبةً إلى موقعه الأصلي في التدفق، يمكن تحريكه باستخدام top/left"
            },
            {
              "value": "absolute",
              "description": "يزيل العنصر من التدفق ويحدد موقعه نسبةً إلى أقرب عنصر أب له position غير static"
            },
            {
              "value": "fixed",
              "description": "يثبت العنصر في مكانه نسبةً إلى نافذة المتصفح، لا يتحرك مع التمرير"
            },
            {
              "value": "sticky",
              "description": "مزيج بين relative و fixed، يلتصق العنصر عند تمرير الصفحة إلى موضع معين"
            }
          ]
        },
        {
          "name": "top",
          "description": "يحدد المسافة بين الحافة العلوية للعنصر والحافة العلوية للعنصر الأب أو النافذة (حسب position)",
          "values": [
            {
              "value": "0",
              "description": "يلصق العنصر بالحافة العلوية"
            },
            {
              "value": "2px",
              "description": "مسافة 2 بكسل من الأعلى"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "100px",
              "description": "مسافة 100 بكسل"
            },
            {
              "value": "10%",
              "description": "10% من ارتفاع العنصر الأب"
            },
            {
              "value": "25%",
              "description": "ربع ارتفاع العنصر الأب"
            },
            {
              "value": "50%",
              "description": "نصف ارتفاع العنصر الأب"
            },
            {
              "value": "100%",
              "description": "يساوي ارتفاع العنصر الأب"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية"
            },
            {
              "value": "-10px",
              "description": "قيمة سالبة - يتحرك للأعلى خارج الحدود"
            }
          ],
          "freeInput": true
        },
        {
          "name": "right",
          "description": "يحدد المسافة بين الحافة اليمنى للعنصر والحافة اليمنى للعنصر الأب أو النافذة (حسب position)",
          "values": [
            {
              "value": "0",
              "description": "يلصق العنصر بالحافة اليمنى"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من اليمين"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            },
            {
              "value": "25%",
              "description": "ربع عرض العنصر الأب"
            },
            {
              "value": "50%",
              "description": "نصف عرض العنصر الأب"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية"
            },
            {
              "value": "-10px",
              "description": "قيمة سالبة - يتحرك لليمين خارج الحدود"
            }
          ],
          "freeInput": true
        },
        {
          "name": "bottom",
          "description": "يحدد المسافة بين الحافة السفلية للعنصر والحافة السفلية للعنصر الأب أو النافذة (حسب position)",
          "values": [
            {
              "value": "0",
              "description": "يلصق العنصر بالحافة السفلية"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من الأسفل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "10%",
              "description": "10% من ارتفاع العنصر الأب"
            },
            {
              "value": "25%",
              "description": "ربع ارتفاع العنصر الأب"
            },
            {
              "value": "50%",
              "description": "نصف ارتفاع العنصر الأب"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية"
            },
            {
              "value": "-10px",
              "description": "قيمة سالبة - يتحرك للأسفل خارج الحدود"
            }
          ],
          "freeInput": true
        },
        {
          "name": "left",
          "description": "يحدد المسافة بين الحافة اليسرى للعنصر والحافة اليسرى للعنصر الأب أو النافذة (حسب position)",
          "values": [
            {
              "value": "0",
              "description": "يلصق العنصر بالحافة اليسرى"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل من اليسار"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر الأب"
            },
            {
              "value": "25%",
              "description": "ربع عرض العنصر الأب"
            },
            {
              "value": "50%",
              "description": "نصف عرض العنصر الأب"
            },
            {
              "value": "auto",
              "description": "يترك المتصفح يحسب الموضع تلقائياً - القيمة الافتراضية"
            },
            {
              "value": "-10px",
              "description": "قيمة سالبة - يتحرك لليسار خارج الحدود"
            }
          ],
          "freeInput": true
        },
        {
          "name": "inset",
          "description": "اختصار لتحديد top، right، bottom، left دفعة واحدة (مفيد مع position)",
          "values": [
            {
              "value": "0",
              "description": "تمدد العنصر من جميع الجهات (top=0, right=0, bottom=0, left=0)"
            },
            {
              "value": "10px",
              "description": "جميع الجهات بمسافة 10 بكسل"
            },
            {
              "value": "5px 10px",
              "description": "top و bottom = 5px، right و left = 10px"
            },
            {
              "value": "5px 10px 15px",
              "description": "top=5px, right=10px, bottom=15px, left=10px"
            },
            {
              "value": "5px 10px 15px 20px",
              "description": "top=5px, right=10px, bottom=15px, left=20px"
            }
          ],
          "freeInput": true
        },
        {
          "name": "z-index",
          "description": "يحدد ترتيب العنصر في المحور العمودي (الأمامي والخلفي)، القيمة الأعلى تظهر في المقدمة",
          "values": [
            {
              "value": "auto",
              "description": "يتبع ترتيب العنصر في الـ HTML - القيمة الافتراضية"
            },
            {
              "value": "0",
              "description": "المستوى الافتراضي"
            },
            {
              "value": "1",
              "description": "يظهر فوق العناصر ذات المستوى 0"
            },
            {
              "value": "2",
              "description": "يظهر فوق العناصر ذات المستوى 1"
            },
            {
              "value": "5",
              "description": "يظهر في المقدمة"
            },
            {
              "value": "10",
              "description": "يظهر في المقدمة جداً"
            },
            {
              "value": "100",
              "description": "يظهر في المقدمة جداً"
            },
            {
              "value": "999",
              "description": "يظهر في المقدمة جداً"
            },
            {
              "value": "9999",
              "description": "يظهر في المقدمة جداً - فوق كل شيء"
            },
            {
              "value": "-1",
              "description": "يظهر خلف العناصر الأخرى"
            },
            {
              "value": "-5",
              "description": "يظهر خلف العناصر الأخرى"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "float-clear",
      "description": "يجعل العنصر يطفو إلى اليسار أو اليمين، وتلتف النصوص حوله (مستخدم في التصميمات القديمة)",
      "properties": [
        {
          "name": "float",
          "description": "يجعل العنصر يطفو إلى اليسار أو اليمين، وتلتف النصوص حوله",
          "values": [
            {
              "value": "none",
              "description": "لا يطفو - القيمة الافتراضية"
            },
            {
              "value": "left",
              "description": "يطفو العنصر إلى اليسار وتلتف النصوص حوله من اليمين"
            },
            {
              "value": "right",
              "description": "يطفو العنصر إلى اليمين وتلتف النصوص حوله من اليسار"
            },
            {
              "value": "inline-start",
              "description": "يطفو في بداية الاتجاه الكتابي (يسار في العربية)"
            },
            {
              "value": "inline-end",
              "description": "يطفو في نهاية الاتجاه الكتابي (يمين في العربية)"
            }
          ]
        },
        {
          "name": "clear",
          "description": "يمنع العناصر من الالتفاف حول العناصر العائمة، يجبر العنصر على النزول تحتهم",
          "values": [
            {
              "value": "none",
              "description": "لا يمنع الالتفاف - القيمة الافتراضية"
            },
            {
              "value": "left",
              "description": "يمنع الالتفاف حول العناصر العائمة إلى اليسار"
            },
            {
              "value": "right",
              "description": "يمنع الالتفاف حول العناصر العائمة إلى اليمين"
            },
            {
              "value": "both",
              "description": "يمنع الالتفاف حول العناصر العائمة في كلا الاتجاهين"
            },
            {
              "value": "inline-start",
              "description": "يمنع الالتفاف حول العناصر العائمة في بداية الاتجاه"
            },
            {
              "value": "inline-end",
              "description": "يمنع الالتفاف حول العناصر العائمة في نهاية الاتجاه"
            }
          ]
        }
      ]
    },
    {
      "tag": "overflow",
      "description": "يتحكم في كيفية عرض المحتوى الذي يتجاوز حدود العنصر (زائد عن حجمه)",
      "properties": [
        {
          "name": "overflow",
          "description": "يتحكم في كيفية عرض المحتوى الذي يتجاوز حدود العنصر",
          "values": [
            {
              "value": "visible",
              "description": "يظهر المحتوى الزائد خارج حدود العنصر - القيمة الافتراضية"
            },
            {
              "value": "hidden",
              "description": "يخفي المحتوى الزائد ولا يظهر"
            },
            {
              "value": "scroll",
              "description": "يضيف أشرطة تمرير دائمة للسماح برؤية المحتوى الزائد"
            },
            {
              "value": "auto",
              "description": "يضيف أشرطة تمرير فقط عند الحاجة إليها"
            },
            {
              "value": "clip",
              "description": "يخفي المحتوى الزائد تماماً ولا يسمح بأي تمرير"
            }
          ]
        },
        {
          "name": "overflow-x",
          "description": "يتحكم في عرض المحتوى الزائد في الاتجاه الأفقي فقط",
          "values": [
            {
              "value": "visible",
              "description": "يظهر المحتوى الزائد أفقياً خارج الحدود - القيمة الافتراضية"
            },
            {
              "value": "hidden",
              "description": "يخفي المحتوى الزائد أفقياً"
            },
            {
              "value": "scroll",
              "description": "يضيف شريط تمرير أفقي"
            },
            {
              "value": "auto",
              "description": "يضيف شريط تمرير أفقي عند الحاجة"
            },
            {
              "value": "clip",
              "description": "يقص المحتوى الزائد ولا يسمح بالتمرير"
            }
          ]
        },
        {
          "name": "overflow-y",
          "description": "يتحكم في عرض المحتوى الزائد في الاتجاه الرأسي فقط",
          "values": [
            {
              "value": "visible",
              "description": "يظهر المحتوى الزائد عمودياً خارج الحدود - القيمة الافتراضية"
            },
            {
              "value": "hidden",
              "description": "يخفي المحتوى الزائد عمودياً"
            },
            {
              "value": "scroll",
              "description": "يضيف شريط تمرير عمودي"
            },
            {
              "value": "auto",
              "description": "يضيف شريط تمرير عمودي عند الحاجة"
            },
            {
              "value": "clip",
              "description": "يقص المحتوى الزائد ولا يسمح بالتمرير"
            }
          ]
        }
      ]
    },
    {
      "tag": "clip",
      "description": "يقطع جزءاً من العنصر بحيث يظهر فقط منطقة مستطيلة محددة (خاصية قديمة استُبدلت بـ clip-path)",
      "properties": [
        {
          "name": "clip (قديم)",
          "description": "يقطع العنصر بشكل مستطيل (خاصية قديمة، استخدم clip-path بدلاً منها)",
          "values": [
            {
              "value": "auto",
              "description": "لا يقطع - القيمة الافتراضية"
            },
            {
              "value": "rect(0px, 100px, 100px, 0px)",
              "description": "يحدد مستطيلاً للقطع، يظهر فقط المنطقة داخله"
            },
            {
              "value": "rect(10px, 200px, 150px, 20px)",
              "description": "مستطيل مخصص"
            }
          ],
          "freeInput": true
        },
        {
          "name": "clip-path",
          "description": "يقطع العنصر بشكل معين (دائرة، بيضاوي، مضلع) ويخفي الأجزاء خارج هذا الشكل",
          "values": [
            {
              "value": "none",
              "description": "لا يقطع - القيمة الافتراضية"
            },
            {
              "value": "circle(50%)",
              "description": "يقطع العنصر على شكل دائرة نصف قطرها 50% من حجم العنصر"
            },
            {
              "value": "circle(30%)",
              "description": "دائرة نصف قطرها 30%"
            },
            {
              "value": "circle(50% at 50% 50%)",
              "description": "دائرة في المنتصف"
            },
            {
              "value": "circle(50% at 0% 50%)",
              "description": "دائرة في منتصف اليسار"
            },
            {
              "value": "circle(50% at 50% 0%)",
              "description": "دائرة في منتصف الأعلى"
            },
            {
              "value": "ellipse(50% 50%)",
              "description": "يقطع العنصر على شكل بيضاوي"
            },
            {
              "value": "ellipse(30% 50%)",
              "description": "بيضاوي بعرض 30% وارتفاع 50%"
            },
            {
              "value": "ellipse(50% 50% at 50% 50%)",
              "description": "بيضاوي في المنتصف"
            },
            {
              "value": "ellipse(30% 50% at 0% 50%)",
              "description": "بيضاوي في منتصف اليسار"
            },
            {
              "value": "polygon(0% 0%, 100% 0%, 50% 100%)",
              "description": "يقطع العنصر على شكل مثلث"
            },
            {
              "value": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              "description": "مستطيل (لا تأثير)"
            },
            {
              "value": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              "description": "شكل معين (دائري)"
            },
            {
              "value": "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              "description": "شكل مثمن"
            },
            {
              "value": "polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)",
              "description": "شكل شبه منحرف"
            },
            {
              "value": "inset(10px)",
              "description": "يقطع العنصر من الداخل بمسافة 10 بكسل من كل حافة"
            },
            {
              "value": "inset(10px 20px)",
              "description": "مسافة 10 بكسل أعلى/أسفل، 20 بكسل يمين/يسار"
            },
            {
              "value": "inset(10px 20px 30px 40px)",
              "description": "مسافات مختلفة لكل حافة"
            },
            {
              "value": "inset(10px round 10px)",
              "description": "قطع مع زوايا مستديرة"
            },
            {
              "value": "url(#clipPathId)",
              "description": "يستخدم شكل قطع محدد في SVG"
            },
            {
              "value": "url('clip.svg#path')",
              "description": "شكل قطع من ملف SVG خارجي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "visibility",
      "description": "يتحكم في رؤية العنصر، يختلف عن display:none بأنه يبقي مساحة العنصر محجوزة",
      "properties": [
        {
          "name": "visibility",
          "description": "يتحكم في رؤية العنصر مع الاحتفاظ بمساحته",
          "values": [
            {
              "value": "visible",
              "description": "العنصر مرئي - القيمة الافتراضية"
            },
            {
              "value": "hidden",
              "description": "يخفي العنصر لكن يحتفظ بمساحته في الصفحة"
            },
            {
              "value": "collapse",
              "description": "خاص بالجداول، يخفي صف أو عمود ويقلص مساحته"
            }
          ]
        }
      ]
    },
    {
      "tag": "box-sizing",
      "description": "يحدد كيفية حساب عرض وارتفاع العنصر، هل يشمل الحواف والهوامش الداخلية أم لا",
      "properties": [
        {
          "name": "box-sizing",
          "description": "يحدد كيفية حساب عرض وارتفاع العنصر",
          "values": [
            {
              "value": "content-box",
              "description": "العرض والارتفاع يشملان المحتوى فقط، الحواف والهوامش الداخلية تضاف إليهما - القيمة الافتراضية"
            },
            {
              "value": "border-box",
              "description": "العرض والارتفاع يشملان المحتوى والحواف والهوامش الداخلية معاً، يسهل التحكم بالأبعاد"
            }
          ]
        }
      ]
    },
    {
      "tag": "resize",
      "description": "يسمح للمستخدم بتغيير حجم العنصر بسحب حافته بالماوس (يعمل مع overflow غير visible)",
      "properties": [
        {
          "name": "resize",
          "description": "يسمح للمستخدم بتغيير حجم العنصر بسحب حافته بالماوس",
          "values": [
            {
              "value": "none",
              "description": "لا يسمح بتغيير الحجم - القيمة الافتراضية"
            },
            {
              "value": "both",
              "description": "يسمح بتغيير الحجم في كلا الاتجاهين"
            },
            {
              "value": "horizontal",
              "description": "يسمح بتغيير العرض فقط"
            },
            {
              "value": "vertical",
              "description": "يسمح بتغيير الارتفاع فقط"
            },
            {
              "value": "block",
              "description": "يسمح بتغيير الحجم في اتجاه الكتلة (عمودي في اللغات الأفقية)"
            },
            {
              "value": "inline",
              "description": "يسمح بتغيير الحجم في اتجاه الخط (أفقي في اللغات الأفقية)"
            }
          ]
        }
      ]
    },
    {
      "tag": "object-fit",
      "description": "يحدد كيف تتناسب الصور أو الفيديوهات داخل عنصرها مع الحفاظ على نسبة الأبعاد",
      "properties": [
        {
          "name": "object-fit",
          "description": "يحدد كيف تتناسب الصور أو الفيديوهات داخل عنصرها",
          "values": [
            {
              "value": "fill",
              "description": "تملأ الصورة العنصر بالكامل وقد تتشوه إذا اختلفت النسب - القيمة الافتراضية"
            },
            {
              "value": "contain",
              "description": "تكبر الصورة لتلائم العنصر مع الحفاظ على نسبها، قد تظهر فراغات"
            },
            {
              "value": "cover",
              "description": "تكبر الصورة لتغطي العنصر بالكامل مع الحفاظ على نسبها، قد يُقص جزء منها"
            },
            {
              "value": "none",
              "description": "تبقى الصورة بحجمها الأصلي دون تكبير أو تصغير"
            },
            {
              "value": "scale-down",
              "description": "تأخذ الحجم الأصغر بين none و contain"
            }
          ]
        },
        {
          "name": "object-position",
          "description": "يحدد موقع الصورة أو الفيديو داخل العنصر عند استخدام object-fit",
          "values": [
            {
              "value": "50% 50%",
              "description": "تتمركز الصورة في المنتصف - القيمة الافتراضية"
            },
            {
              "value": "0% 0%",
              "description": "الصورة في أعلى اليسار"
            },
            {
              "value": "100% 100%",
              "description": "الصورة في أسفل اليمين"
            },
            {
              "value": "center top",
              "description": "الصورة في أعلى المنتصف"
            },
            {
              "value": "center bottom",
              "description": "الصورة في أسفل المنتصف"
            },
            {
              "value": "left center",
              "description": "الصورة في منتصف اليسار"
            },
            {
              "value": "right center",
              "description": "الصورة في منتصف اليمين"
            },
            {
              "value": "10px 20px",
              "description": "الصورة على بعد 10 بكسل من اليسار و20 بكسل من الأعلى"
            },
            {
              "value": "10% 20%",
              "description": "الصورة على بعد 10% من اليسار و20% من الأعلى"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "contain",
      "description": "يحدد سلوك العنصر في احتواء محتواه، يحسن الأداء بتقليل إعادة التخطيط",
      "properties": [
        {
          "name": "contain",
          "description": "يحدد سلوك العنصر في احتواء محتواه، يحسن الأداء",
          "values": [
            {
              "value": "none",
              "description": "لا يوجد احتواء خاص - القيمة الافتراضية"
            },
            {
              "value": "layout",
              "description": "يعزل تخطيط العنصر عن باقي الصفحة، يمنع تأثيره على غيره"
            },
            {
              "value": "paint",
              "description": "يمنع رسم محتوى العنصر خارج حدوده، يحسن الأداء"
            },
            {
              "value": "size",
              "description": "يحدد أن حجم العنصر لا يعتمد على محتواه، يحسن الأداء في التخطيط"
            },
            {
              "value": "style",
              "description": "يعزل تأثيرات الأنماط مثل العدادات والقوائم داخل العنصر"
            },
            {
              "value": "strict",
              "description": "يطبق جميع أنواع الاحتواء (layout, paint, size, style)"
            },
            {
              "value": "content",
              "description": "يطبق layout و paint و style"
            },
            {
              "value": "inline-size",
              "description": "يحدد أن العرض يعتمد على المحتوى ولكن الارتفاع لا يعتمد"
            }
          ]
        }
      ]
    },
    {
      "tag": "content-visibility",
      "description": "يؤخر تحميل وعرض المحتوى خارج نطاق الرؤية، يحسن أداء الصفحات الطويلة جداً",
      "properties": [
        {
          "name": "content-visibility",
          "description": "يؤخر تحميل وعرض المحتوى خارج نطاق الرؤية",
          "values": [
            {
              "value": "visible",
              "description": "يعرض المحتوى دائماً - القيمة الافتراضية"
            },
            {
              "value": "auto",
              "description": "يؤخر عرض المحتوى حتى يصبح قريباً من نافذة المتصفح"
            },
            {
              "value": "hidden",
              "description": "يخفي المحتوى ولا يعرضه أبداً، لكن يحتفظ بمساحته"
            }
          ]
        }
      ]
    },
    {
      "tag": "shape-outside",
      "description": "يحدد شكلاً هندسياً (مثل دائرة) تلتف حوله العناصر المجاورة لعنصر عائم (float)",
      "properties": [
        {
          "name": "shape-outside",
          "description": "يحدد شكلاً هندسياً تلتف حوله العناصر المجاورة",
          "values": [
            {
              "value": "none",
              "description": "الشكل المستطيل الافتراضي - القيمة الافتراضية"
            },
            {
              "value": "circle(50%)",
              "description": "التفاف النص حول دائرة نصف قطرها 50%"
            },
            {
              "value": "ellipse(50% 50%)",
              "description": "التفاف النص حول بيضاوي"
            },
            {
              "value": "polygon(0% 0%, 100% 0%, 50% 100%)",
              "description": "التفاف النص حول مثلث"
            },
            {
              "value": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              "description": "التفاف حول شكل معين"
            },
            {
              "value": "inset(10px)",
              "description": "التفاف حول شكل مستطيل من الداخل"
            },
            {
              "value": "url('shape.png')",
              "description": "التفاف حسب شفافية صورة PNG"
            },
            {
              "value": "url('shape.svg')",
              "description": "التفاف حسب شكل SVG"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "multi-column",
      "description": "خصائص التخطيط متعدد الأعمدة (Multi-column Layout)، تقسم المحتوى النصي إلى أعمدة تلقائياً كالصحف",
      "properties": [
        {
          "name": "columns",
          "description": "اختصار لـ column-width و column-count معاً",
          "values": [
            {
              "value": "auto",
              "description": "عمود واحد - القيمة الافتراضية"
            },
            {
              "value": "2",
              "description": "عمودان"
            },
            {
              "value": "3",
              "description": "3 أعمدة"
            },
            {
              "value": "4",
              "description": "4 أعمدة"
            },
            {
              "value": "200px",
              "description": "عرض عمود 200 بكسل"
            },
            {
              "value": "200px 3",
              "description": "عرض عمود 200px بحد أقصى 3 أعمدة"
            },
            {
              "value": "300px 2",
              "description": "عرض عمود 300px بحد أقصى عمودين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "column-count",
          "description": "يحدد عدد الأعمدة التي يُقسّم إليها المحتوى",
          "values": [
            {
              "value": "auto",
              "description": "عدد تلقائي حسب column-width - القيمة الافتراضية"
            },
            {
              "value": "2",
              "description": "تقسيم المحتوى إلى عمودين"
            },
            {
              "value": "3",
              "description": "تقسيم المحتوى إلى 3 أعمدة"
            },
            {
              "value": "4",
              "description": "تقسيم المحتوى إلى 4 أعمدة"
            },
            {
              "value": "5",
              "description": "تقسيم المحتوى إلى 5 أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "column-width",
          "description": "يحدد العرض المثالي لكل عمود، يحسب المتصفح العدد المناسب تلقائياً",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي - القيمة الافتراضية"
            },
            {
              "value": "100px",
              "description": "كل عمود بعرض 100 بكسل"
            },
            {
              "value": "150px",
              "description": "كل عمود بعرض 150 بكسل"
            },
            {
              "value": "200px",
              "description": "كل عمود بعرض 200 بكسل"
            },
            {
              "value": "250px",
              "description": "كل عمود بعرض 250 بكسل"
            },
            {
              "value": "300px",
              "description": "كل عمود بعرض 300 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "column-gap",
          "description": "يحدد المسافة بين الأعمدة",
          "values": [
            {
              "value": "normal",
              "description": "مسافة افتراضية (عادة 1em) - القيمة الافتراضية"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل بين الأعمدة"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem"
            },
            {
              "value": "5%",
              "description": "5% من عرض الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "column-rule",
          "description": "اختصار لرسم خط فاصل بين الأعمدة (عرض، نمط، لون) شبيه بخاصية border",
          "values": [
            {
              "value": "none",
              "description": "بدون خط فاصل - القيمة الافتراضية"
            },
            {
              "value": "1px solid gray",
              "description": "خط رمادي رفيع صلب بين الأعمدة"
            },
            {
              "value": "2px dashed red",
              "description": "خط أحمر متقطع سمك 2 بكسل"
            },
            {
              "value": "3px dotted blue",
              "description": "خط أزرق منقط سمك 3 بكسل"
            },
            {
              "value": "4px double green",
              "description": "خط أخضر مزدوج سمك 4 بكسل"
            },
            {
              "value": "1px solid #ccc",
              "description": "خط رمادي فاتح"
            }
          ],
          "freeInput": true
        },
        {
          "name": "column-span",
          "description": "يسمح لعنصر بالامتداد عبر جميع الأعمدة بدلاً من البقاء داخل عمود واحد",
          "values": [
            {
              "value": "none",
              "description": "يبقى ضمن عمود واحد - القيمة الافتراضية"
            },
            {
              "value": "all",
              "description": "يمتد عبر كل الأعمدة (مفيد للعناوين)"
            }
          ]
        },
        {
          "name": "column-fill",
          "description": "يحدد كيفية توزيع المحتوى على الأعمدة (متوازن أم يملأ الأعمدة بالترتيب)",
          "values": [
            {
              "value": "balance",
              "description": "يوزع المحتوى بالتساوي بين الأعمدة - القيمة الافتراضية"
            },
            {
              "value": "auto",
              "description": "يملأ الأعمدة بالترتيب حتى تمتلئ"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام خصائص التخطيط في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - توسيط عنصر بالكامل",
          "description": "توسيط عنصر في منتصف الصفحة باستخدام position",
          "values": [
            {
              "value": ".center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }",
              "description": "توسيط عنصر تماماً في المنتصف"
            },
            {
              "value": ".center { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }",
              "description": "توسيط عنصر ثابت في منتصف الشاشة"
            }
          ]
        },
        {
          "name": "مثال 2 - رأس ثابت",
          "description": "رأس يبقى في أعلى الصفحة عند التمرير",
          "values": [
            {
              "value": ".header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }",
              "description": "رأس ثابت في أعلى الصفحة"
            }
          ]
        },
        {
          "name": "مثال 3 - تذييل في الأسفل",
          "description": "تذييل يبقى في أسفل الصفحة حتى مع المحتوى القليل",
          "values": [
            {
              "value": ".page { display: flex; flex-direction: column; min-height: 100vh; } .content { flex: 1; } .footer { background: #333; color: white; padding: 20px; }",
              "description": "تذييل في أسفل الصفحة"
            }
          ]
        },
        {
          "name": "مثال 4 - عنصر لاصق (Sticky)",
          "description": "عنصر يلتصق عند التمرير إلى موضع معين",
          "values": [
            {
              "value": ".sticky-nav { position: sticky; top: 0; z-index: 100; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }",
              "description": "قائمة تنقل لاصقة"
            }
          ]
        },
        {
          "name": "مثال 5 - نص بأعمدة كالصحف",
          "description": "تقسيم النص إلى أعمدة متعددة",
          "values": [
            {
              "value": ".article { column-count: 3; column-gap: 40px; column-rule: 2px solid #eee; } .article h1 { column-span: all; }",
              "description": "نص مقسم إلى 3 أعمدة مع عنوان يمتد على الكل"
            }
          ]
        },
        {
          "name": "مثال 6 - طبقات متراكبة (Overlay)",
          "description": "طبقة تغطي الصفحة بالكامل",
          "values": [
            {
              "value": ".overlay { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; justify-content: center; align-items: center; }",
              "description": "طبقة تغطية مع توسيط المحتوى"
            }
          ]
        },
        {
          "name": "مثال 7 - قص الصورة بشكل دائري",
          "description": "جعل الصورة دائرية باستخدام clip-path",
          "values": [
            {
              "value": ".avatar { width: 150px; height: 150px; clip-path: circle(50%); }",
              "description": "صورة رمزية دائرية"
            },
            {
              "value": ".avatar { width: 150px; height: 150px; border-radius: 50%; object-fit: cover; }",
              "description": "صورة رمزية دائرية باستخدام border-radius"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام خصائص التخطيط بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لاستخدام خصائص التخطيط",
          "values": [
            {
              "value": "استخدم Flexbox للتخطيطات أحادية البعد",
              "description": "قوائم، أشرطة، عناصر في صف أو عمود واحد"
            },
            {
              "value": "استخدم Grid للتخطيطات ثنائية البعد",
              "description": "صفحات كاملة، شبكات، تخطيطات معقدة"
            },
            {
              "value": "استخدم position: sticky للعناصر اللاصقة",
              "description": "قوائم تنقل، عناوين تلتصق عند التمرير"
            },
            {
              "value": "استخدم box-sizing: border-box عالمياً",
              "description": "* { box-sizing: border-box; } يسهل حسابات الأبعاد"
            },
            {
              "value": "تجنب position: absolute كثيراً",
              "description": "قد يعقد التخطيط ويصعب الصيانة"
            }
          ]
        },
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء التخطيط",
          "values": [
            {
              "value": "استخدم content-visibility: auto",
              "description": "يحسن أداء الصفحات الطويلة بتأخير عرض المحتوى خارج الرؤية"
            },
            {
              "value": "استخدم contain: layout",
              "description": "يعزل تخطيط العنصر ويحسن الأداء"
            },
            {
              "value": "تجنب تغيير top/left في الرسوم المتحركة",
              "description": "استخدم transform بدلاً منها لتحسين الأداء"
            },
            {
              "value": "استخدم will-change للعناصر المتحركة",
              "description": "يحسن أداء الرسوم المتحركة"
            }
          ]
        },
        {
          "name": "نصائح التصميم المتجاوب",
          "description": "نصائح للتصميم المتجاوب باستخدام خصائص التخطيط",
          "values": [
            {
              "value": "استخدم وحدات نسبية",
              "description": "%، vh، vw، fr، rem أفضل من px في التصميم المتجاوب"
            },
            {
              "value": "استخدم media queries لتغيير التخطيط",
              "description": "تغيير display، grid-template-columns، flex-direction في الشاشات المختلفة"
            },
            {
              "value": "استخدم min-height: 100vh للصفحات الكاملة",
              "description": "يجعل الصفحة تأخذ ارتفاع الشاشة بالكامل"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام خصائص التخطيط وكيفية تجنبها",
          "values": [
            {
              "value": "نسيان position: relative للأب",
              "description": "absolute يحتاج إلى عنصر أب position غير static"
            },
            {
              "value": "استخدام position: absolute بدون تحديد موقع",
              "description": "يجب تحديد top/left/right/bottom"
            },
            {
              "value": "نسيان overflow لـ resize",
              "description": "resize لا يعمل إلا مع overflow غير visible"
            },
            {
              "value": "استخدام float في التخطيطات الحديثة",
              "description": "استخدم Flexbox أو Grid بدلاً من float"
            },
            {
              "value": "نسيان z-index مع position",
              "description": "z-index لا يعمل بدون position غير static"
            }
          ]
        }
      ]
    }
  ],
  "flexbox": [
    {
      "tag": "flex-container",
      "description": "خصائص الحاوية المرنة (Flex Container) التي تحوي العناصر المرنة، تتحكم في التخطيط العام",
      "properties": [
        {
          "name": "display",
          "description": "يحول العنصر إلى حاوية مرنة (Flex Container) ويكوّن سياق تنسيق مرن لعناصره الداخلية",
          "values": [
            {
              "value": "flex",
              "description": "يحول العنصر إلى حاوية مرنة (تبدأ في سطر جديد)"
            },
            {
              "value": "inline-flex",
              "description": "يحول العنصر إلى حاوية مرنة داخلية (مثل inline-block)"
            }
          ]
        },
        {
          "name": "flex-direction",
          "description": "يحدد اتجاه ترتيب العناصر داخل الحاوية المرنة (أفقي أو عمودي، وطبيعي أو معكوس) - المحور الرئيسي",
          "values": [
            {
              "value": "row",
              "description": "أفقي من اليسار إلى اليمين (في اللغات LTR) - القيمة الافتراضية"
            },
            {
              "value": "row-reverse",
              "description": "أفقي من اليمين إلى اليسار (معكوس في اللغات LTR)"
            },
            {
              "value": "column",
              "description": "عمودي من الأعلى إلى الأسفل"
            },
            {
              "value": "column-reverse",
              "description": "عمودي من الأسفل إلى الأعلى (معكوس)"
            }
          ]
        },
        {
          "name": "flex-wrap",
          "description": "يحدد هل تنتقل العناصر إلى سطر جديد عندما لا تتسع في السطر الحالي أم لا",
          "values": [
            {
              "value": "nowrap",
              "description": "لا تنتقل، تبقى في سطر واحد حتى لو ضاقت المساحة - القيمة الافتراضية"
            },
            {
              "value": "wrap",
              "description": "تنتقل إلى سطر جديد عند عدم وجود مساحة كافية"
            },
            {
              "value": "wrap-reverse",
              "description": "تنتقل إلى سطر جديد في الاتجاه المعكوس (من الأسفل للأعلى)"
            }
          ]
        },
        {
          "name": "flex-flow",
          "description": "اختصار لـ flex-direction و flex-wrap معاً في سطر واحد - الترتيب: direction ثم wrap",
          "values": [
            {
              "value": "row nowrap",
              "description": "أفقي بدون انتقال - القيمة الافتراضية"
            },
            {
              "value": "row wrap",
              "description": "أفقي مع انتقال إلى سطر جديد"
            },
            {
              "value": "row wrap-reverse",
              "description": "أفقي مع انتقال معكوس"
            },
            {
              "value": "row-reverse nowrap",
              "description": "أفقي معكوس بدون انتقال"
            },
            {
              "value": "row-reverse wrap",
              "description": "أفقي معكوس مع انتقال"
            },
            {
              "value": "column nowrap",
              "description": "عمودي بدون انتقال"
            },
            {
              "value": "column wrap",
              "description": "عمودي مع انتقال"
            },
            {
              "value": "column wrap-reverse",
              "description": "عمودي مع انتقال معكوس"
            },
            {
              "value": "column-reverse nowrap",
              "description": "عمودي معكوس بدون انتقال"
            },
            {
              "value": "column-reverse wrap",
              "description": "عمودي معكوس مع انتقال"
            }
          ],
          "freeInput": true
        },
        {
          "name": "justify-content",
          "description": "يحدد كيفية توزيع العناصر على المحور الرئيسي (الأفقي في row، العمودي في column)",
          "values": [
            {
              "value": "flex-start",
              "description": "تتجمع العناصر في بداية المحور الرئيسي (يسار في row) - القيمة الافتراضية"
            },
            {
              "value": "flex-end",
              "description": "تتجمع العناصر في نهاية المحور الرئيسي (يمين في row)"
            },
            {
              "value": "center",
              "description": "تتجمع العناصر في منتصف المحور الرئيسي"
            },
            {
              "value": "space-between",
              "description": "توزع بالتساوي، أول عنصر في البداية وآخر في النهاية"
            },
            {
              "value": "space-around",
              "description": "توزع مع مسافات متساوية حول كل عنصر (نصف مسافة في البداية والنهاية)"
            },
            {
              "value": "space-evenly",
              "description": "توزع مع مسافات متساوية بين العناصر وحولها (جميع المسافات متساوية)"
            }
          ]
        },
        {
          "name": "align-items",
          "description": "يحدد كيفية محاذاة العناصر على المحور المتقاطع (العمودي في row، الأفقي في column)",
          "values": [
            {
              "value": "stretch",
              "description": "تمتد العناصر لتملأ المحور المتقاطع بالكامل - القيمة الافتراضية"
            },
            {
              "value": "flex-start",
              "description": "محاذاة إلى بداية المحور المتقاطع (أعلى في row)"
            },
            {
              "value": "flex-end",
              "description": "محاذاة إلى نهاية المحور المتقاطع (أسفل في row)"
            },
            {
              "value": "center",
              "description": "محاذاة إلى منتصف المحور المتقاطع"
            },
            {
              "value": "baseline",
              "description": "محاذاة حسب خط الأساس للنص (أسفل النصوص)"
            }
          ]
        },
        {
          "name": "align-content",
          "description": "يحدد كيفية توزيع الصفوف المتعددة على المحور المتقاطع (يعمل فقط عند استخدام flex-wrap: wrap)",
          "values": [
            {
              "value": "stretch",
              "description": "تمتد الصفوف لتملأ المحور المتقاطع - القيمة الافتراضية"
            },
            {
              "value": "flex-start",
              "description": "تتجمع الصفوف في بداية المحور المتقاطع"
            },
            {
              "value": "flex-end",
              "description": "تتجمع الصفوف في نهاية المحور المتقاطع"
            },
            {
              "value": "center",
              "description": "تتجمع الصفوف في منتصف المحور المتقاطع"
            },
            {
              "value": "space-between",
              "description": "توزع الصفوف بالتساوي، أول صف في البداية وآخر في النهاية"
            },
            {
              "value": "space-around",
              "description": "توزع الصفوف مع مسافات متساوية حول كل صف"
            },
            {
              "value": "space-evenly",
              "description": "توزع الصفوف مع مسافات متساوية بينها وحولها"
            }
          ]
        },
        {
          "name": "gap",
          "description": "يحدد المسافة بين العناصر المرنة داخل الحاوية (على المحورين الرئيسي والمتقاطع)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافات بين العناصر - القيمة الافتراضية"
            },
            {
              "value": "2px",
              "description": "مسافة 2 بكسل بين العناصر"
            },
            {
              "value": "4px",
              "description": "مسافة 4 بكسل"
            },
            {
              "value": "6px",
              "description": "مسافة 6 بكسل"
            },
            {
              "value": "8px",
              "description": "مسافة 8 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "12px",
              "description": "مسافة 12 بكسل"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "25px",
              "description": "مسافة 25 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "40px",
              "description": "مسافة 40 بكسل"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem (حجم الخط الأساسي)"
            },
            {
              "value": "1.5rem",
              "description": "مسافة 1.5rem"
            },
            {
              "value": "2rem",
              "description": "مسافة 2rem"
            },
            {
              "value": "5%",
              "description": "5% من عرض الحاوية"
            },
            {
              "value": "10%",
              "description": "10% من عرض الحاوية"
            },
            {
              "value": "10px 20px",
              "description": "مسافة 10 بكسل بين الصفوف، 20 بكسل بين الأعمدة"
            },
            {
              "value": "1rem 2rem",
              "description": "مسافة 1rem بين الصفوف، 2rem بين الأعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "row-gap",
          "description": "يحدد المسافة بين صفوف العناصر المرنة فقط (المحور المتقاطع)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة بين الصفوف - القيمة الافتراضية"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل بين الصفوف"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل بين الصفوف"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem"
            },
            {
              "value": "5%",
              "description": "5% من عرض الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "column-gap",
          "description": "يحدد المسافة بين أعمدة العناصر المرنة فقط (المحور الرئيسي)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة بين الأعمدة - القيمة الافتراضية"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل بين الأعمدة"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل بين الأعمدة"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem"
            },
            {
              "value": "5%",
              "description": "5% من عرض الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "place-content",
          "description": "اختصار لـ align-content و justify-content معاً في خاصية واحدة (الترتيب: align-content ثم justify-content)",
          "values": [
            {
              "value": "center",
              "description": "محاذاة المحتوى في المنتصف على المحورين (align: center, justify: center)"
            },
            {
              "value": "flex-start flex-end",
              "description": "align-content: flex-start, justify-content: flex-end"
            },
            {
              "value": "space-between center",
              "description": "align-content: space-between, justify-content: center"
            },
            {
              "value": "center space-around",
              "description": "align-content: center, justify-content: space-around"
            },
            {
              "value": "stretch flex-start",
              "description": "align-content: stretch, justify-content: flex-start"
            }
          ],
          "freeInput": true
        },
        {
          "name": "place-items",
          "description": "اختصار لـ align-items و justify-items معاً (align-items ثم justify-items) - justify-items ليس له تأثير في Flexbox",
          "values": [
            {
              "value": "center",
              "description": "محاذاة العناصر في المنتصف على المحورين"
            },
            {
              "value": "flex-start flex-end",
              "description": "align-items: flex-start, justify-items: flex-end"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "flex-items",
      "description": "خصائص العناصر المرنة (Flex Items) داخل الحاوية، تتحكم في سلوك كل عنصر على حدة",
      "properties": [
        {
          "name": "flex-grow",
          "description": "يحدد قدرة العنصر على النمو وملء المساحة الزائدة في الحاوية (قيمة رقمية، 0 = لا ينمو)",
          "values": [
            {
              "value": "0",
              "description": "لا ينمو - يبقى بحجمه الأساسي (القيمة الافتراضية)"
            },
            {
              "value": "1",
              "description": "ينمو ليأخذ المساحة الزائدة - يحصل على جزء واحد"
            },
            {
              "value": "2",
              "description": "ينمو بمقدار ضعف العناصر ذات القيمة 1 - يحصل على جزئين"
            },
            {
              "value": "3",
              "description": "ينمو بثلاثة أضعاف"
            },
            {
              "value": "4",
              "description": "ينمو بأربعة أضعاف"
            },
            {
              "value": "5",
              "description": "ينمو بخمسة أضعاف"
            },
            {
              "value": "10",
              "description": "ينمو بعشرة أضعاف - يأخذ معظم المساحة"
            },
            {
              "value": "0.5",
              "description": "ينمو بنصف العناصر ذات القيمة 1"
            }
          ],
          "freeInput": true
        },
        {
          "name": "flex-shrink",
          "description": "يحدد قدرة العنصر على الانكماش عندما تضيق المساحة في الحاوية (قيمة رقمية، 0 = لا ينكمش)",
          "values": [
            {
              "value": "1",
              "description": "ينكمش عند الحاجة - القيمة الافتراضية"
            },
            {
              "value": "0",
              "description": "لا ينكمش أبداً - يحافظ على حجمه حتى لو ضاقت المساحة"
            },
            {
              "value": "2",
              "description": "ينكمش بمقدار ضعف العناصر ذات القيمة 1"
            },
            {
              "value": "3",
              "description": "ينكمش بثلاثة أضعاف"
            },
            {
              "value": "4",
              "description": "ينكمش بأربعة أضعاف"
            },
            {
              "value": "5",
              "description": "ينكمش بخمسة أضعاف"
            },
            {
              "value": "0.5",
              "description": "ينكمش بنصف العناصر ذات القيمة 1"
            }
          ],
          "freeInput": true
        },
        {
          "name": "flex-basis",
          "description": "يحدد الحجم الأساسي للعنصر قبل توزيع المساحة الزائدة (بديل عن width/height في Flexbox)",
          "values": [
            {
              "value": "auto",
              "description": "يعتمد على حجم المحتوى (القيمة الافتراضية)"
            },
            {
              "value": "0",
              "description": "حجم أساسي صفر - يعتمد كلياً على flex-grow"
            },
            {
              "value": "0%",
              "description": "حجم أساسي صفر"
            },
            {
              "value": "50px",
              "description": "حجم أساسي 50 بكسل"
            },
            {
              "value": "100px",
              "description": "حجم أساسي 100 بكسل"
            },
            {
              "value": "150px",
              "description": "حجم أساسي 150 بكسل"
            },
            {
              "value": "200px",
              "description": "حجم أساسي 200 بكسل"
            },
            {
              "value": "300px",
              "description": "حجم أساسي 300 بكسل"
            },
            {
              "value": "50%",
              "description": "نصف حجم الحاوية"
            },
            {
              "value": "25%",
              "description": "ربع حجم الحاوية"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع حجم الحاوية"
            },
            {
              "value": "100%",
              "description": "كامل حجم الحاوية"
            },
            {
              "value": "content",
              "description": "حجم أساسي يعتمد على المحتوى (مثل max-content تقريباً)"
            },
            {
              "value": "min-content",
              "description": "أصغر حجم ممكن للمحتوى بدون التفاف"
            },
            {
              "value": "max-content",
              "description": "الحجم الكامل للمحتوى بدون التفاف"
            },
            {
              "value": "fit-content",
              "description": "حجم يناسب المحتوى ضمن حدود الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "flex",
          "description": "اختصار لـ flex-grow، flex-shrink، flex-basis في سطر واحد (الترتيب: grow shrink basis)",
          "values": [
            {
              "value": "0 1 auto",
              "description": "لا ينمو، ينكمش، حجم تلقائي - القيمة الافتراضية"
            },
            {
              "value": "1",
              "description": "flex: 1 1 0 - ينمو وينكمش مع حجم أساسي صفر"
            },
            {
              "value": "2",
              "description": "flex: 2 1 0 - ينمو بضعف، ينكمش، حجم أساسي صفر"
            },
            {
              "value": "0 0 auto",
              "description": "لا ينمو ولا ينكمش - حجم ثابت حسب المحتوى"
            },
            {
              "value": "1 0 auto",
              "description": "ينمو لكن لا ينكمش - يتوسع فقط"
            },
            {
              "value": "0 1 100px",
              "description": "لا ينمو، ينكمش، حجم أساسي 100 بكسل"
            },
            {
              "value": "2 0 100px",
              "description": "ينمو بضعف، لا ينكمش، حجم أساسي 100 بكسل"
            },
            {
              "value": "1 1 200px",
              "description": "ينمو وينكمش، حجم أساسي 200 بكسل"
            },
            {
              "value": "auto",
              "description": "flex: 1 1 auto - ينمو وينكمش بحجم تلقائي"
            },
            {
              "value": "none",
              "description": "flex: 0 0 auto - لا ينمو ولا ينكمش"
            },
            {
              "value": "initial",
              "description": "flex: 0 1 auto - القيمة الافتراضية"
            },
            {
              "value": "1 2 0%",
              "description": "ينمو، ينكمش بضعف، حجم أساسي صفر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "align-self",
          "description": "يتجاوز محاذاة العنصر على المحور المتقاطع (تختلف عن align-items الخاصة بالحاوية)",
          "values": [
            {
              "value": "auto",
              "description": "يتبع align-items الخاصة بالحاوية - القيمة الافتراضية"
            },
            {
              "value": "stretch",
              "description": "يمتد ليملأ المحور المتقاطع بالكامل"
            },
            {
              "value": "flex-start",
              "description": "محاذاة إلى بداية المحور المتقاطع (أعلى في row)"
            },
            {
              "value": "flex-end",
              "description": "محاذاة إلى نهاية المحور المتقاطع (أسفل في row)"
            },
            {
              "value": "center",
              "description": "محاذاة إلى منتصف المحور المتقاطع"
            },
            {
              "value": "baseline",
              "description": "محاذاة حسب خط الأساس للنص"
            }
          ]
        },
        {
          "name": "order",
          "description": "يحدد ترتيب ظهور العنصر بين العناصر الأخرى (القيمة الأصغر تظهر أولاً)",
          "values": [
            {
              "value": "0",
              "description": "الترتيب الطبيعي حسب ظهوره في الـ HTML - القيمة الافتراضية"
            },
            {
              "value": "1",
              "description": "يظهر بعد جميع العناصر ذات الترتيب 0"
            },
            {
              "value": "2",
              "description": "يظهر بعد العناصر ذات الترتيب 1"
            },
            {
              "value": "3",
              "description": "يظهر بعد العناصر ذات الترتيب 2"
            },
            {
              "value": "5",
              "description": "يظهر متأخراً جداً"
            },
            {
              "value": "10",
              "description": "يظهر في النهاية"
            },
            {
              "value": "-1",
              "description": "يظهر قبل جميع العناصر ذات الترتيب 0"
            },
            {
              "value": "-2",
              "description": "يظهر أولاً جداً"
            },
            {
              "value": "-5",
              "description": "يظهر أولاً"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام Flexbox في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - تخطيط مرن أساسي",
          "description": "حاوية مرنة مع عناصر موزعة بالتساوي",
          "values": [
            {
              "value": ".flex-container { display: flex; justify-content: space-between; align-items: center; gap: 20px; }",
              "description": "عناصر موزعة بالتساوي مع محاذاة في المنتصف"
            }
          ]
        },
        {
          "name": "مثال 2 - رأس الموقع (Header)",
          "description": "تخطيط رأس موقع مع شعار وقائمة تنقل وأزرار",
          "values": [
            {
              "value": ".header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; } .nav { display: flex; gap: 16px; } .actions { display: flex; gap: 8px; }",
              "description": "رأس موقع بتخطيط مرن"
            }
          ]
        },
        {
          "name": "مثال 3 - بطاقات متجاوبة",
          "description": "شبكة بطاقات تنتقل لعدة صفوف عند عدم وجود مساحة",
          "values": [
            {
              "value": ".cards { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; } .card { flex: 1 1 280px; max-width: 400px; padding: 20px; }",
              "description": "بطاقات مرنة تنتقل لصفوف متعددة"
            }
          ]
        },
        {
          "name": "مثال 4 - عمود جانبي (Sidebar)",
          "description": "تخطيط مع عمود جانبي ومحتوى رئيسي",
          "values": [
            {
              "value": ".layout { display: flex; gap: 20px; } .sidebar { flex: 0 0 280px; } .main { flex: 1; }",
              "description": "عمود جانبي ثابت مع محتوى مرن"
            }
          ]
        },
        {
          "name": "مثال 5 - عنصر مركزي بالكامل",
          "description": "توسيط عنصر في منتصف الصفحة بالكامل",
          "values": [
            {
              "value": ".center { display: flex; justify-content: center; align-items: center; height: 100vh; }",
              "description": "توسيط كامل للعنصر"
            }
          ]
        },
        {
          "name": "مثال 6 - تذييل ثابت في الأسفل",
          "description": "تذييل يبقى في أسفل الصفحة حتى لو كان المحتوى قليلاً",
          "values": [
            {
              "value": ".page { display: flex; flex-direction: column; min-height: 100vh; } .content { flex: 1; }",
              "description": "تذييل يدفع للأسفل"
            }
          ]
        },
        {
          "name": "مثال 7 - قائمة تنقل مرنة",
          "description": "قائمة تنقل مع عناصر موزعة بالتساوي",
          "values": [
            {
              "value": ".nav { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; } .nav-item { flex: 0 1 auto; }",
              "description": "قائمة تنقل متجاوبة"
            }
          ]
        },
        {
          "name": "مثال 8 - تخطيط مع تغيير الترتيب",
          "description": "عناصر مرتبة بترتيب مختلف عن الـ HTML باستخدام order",
          "values": [
            {
              "value": ".container { display: flex; flex-direction: row; } .item:nth-child(1) { order: 3; } .item:nth-child(2) { order: 1; } .item:nth-child(3) { order: 2; }",
              "description": "تغيير ترتيب العناصر"
            }
          ]
        }
      ]
    },
    {
      "tag": "visual-summary",
      "description": "ملخص تصوّري لخصائص Flexbox يوضح العلاقة بين المحورين الرئيسي والمتقاطع",
      "properties": [
        {
          "name": "المحور الرئيسي (Main Axis)",
          "description": "الاتجاه الذي تنتظم فيه العناصر (أفقي في row، عمودي في column)",
          "values": [
            {
              "value": "flex-direction",
              "description": "يحدد اتجاه المحور الرئيسي"
            },
            {
              "value": "justify-content",
              "description": "يتحكم في توزيع العناصر على المحور الرئيسي"
            }
          ]
        },
        {
          "name": "المحور المتقاطع (Cross Axis)",
          "description": "الاتجاه العمودي على المحور الرئيسي (عمودي في row، أفقي في column)",
          "values": [
            {
              "value": "align-items",
              "description": "يتحكم في محاذاة العناصر على المحور المتقاطع"
            },
            {
              "value": "align-content",
              "description": "يتحكم في توزيع الصفوف على المحور المتقاطع"
            },
            {
              "value": "align-self",
              "description": "يتجاوز align-items لعنصر معين"
            }
          ]
        },
        {
          "name": "حجم العناصر",
          "description": "خصائص تتحكم في حجم العناصر المرنة",
          "values": [
            {
              "value": "flex-grow",
              "description": "قدرة العنصر على النمو"
            },
            {
              "value": "flex-shrink",
              "description": "قدرة العنصر على الانكماش"
            },
            {
              "value": "flex-basis",
              "description": "الحجم الأساسي للعنصر"
            },
            {
              "value": "flex",
              "description": "اختصار للخصائص الثلاث السابقة"
            }
          ]
        },
        {
          "name": "المسافات والترتيب",
          "description": "خصائص تتحكم في المسافات وترتيب العناصر",
          "values": [
            {
              "value": "gap, row-gap, column-gap",
              "description": "المسافات بين العناصر"
            },
            {
              "value": "order",
              "description": "ترتيب ظهور العنصر"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام Flexbox بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لاستخدام Flexbox",
          "values": [
            {
              "value": "استخدم gap بدلاً من margin",
              "description": "gap أفضل للتباعد بين العناصر المرنة"
            },
            {
              "value": "استخدم flex-wrap للتصميم المتجاوب",
              "description": "يجعل العناصر تنتقل للأسفل عند ضيق الشاشة"
            },
            {
              "value": "استخدم align-items: center للتوسيط العمودي",
              "description": "أسهل طريقة لتوسيط العناصر عمودياً"
            },
            {
              "value": "استخدم flex-basis: 0 مع flex-grow",
              "description": "يعطي تحكماً أفضل في توزيع المساحة"
            }
          ]
        },
        {
          "name": "نصائح التصميم المتجاوب",
          "description": "نصائح لتصميم متجاوب باستخدام Flexbox",
          "values": [
            {
              "value": "استخدم flex-wrap مع gap",
              "description": "العناصر تنتقل للأسفل مع الحفاظ على المسافات"
            },
            {
              "value": "استخدم flex: 1 1 200px",
              "description": "حد أدنى 200 بكسل مع نمو وانكماش"
            },
            {
              "value": "استخدم media queries مع flex-direction",
              "description": "تغيير الاتجاه من row إلى column للجوال"
            },
            {
              "value": "استخدم order للجوال",
              "description": "تغيير ترتيب العناصر في الشاشات الصغيرة"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام Flexbox وكيفية تجنبها",
          "values": [
            {
              "value": "نسيان display: flex",
              "description": "بدونها لن تعمل خصائص Flexbox"
            },
            {
              "value": "استخدام align-items مع align-content",
              "description": "align-content يعمل فقط مع flex-wrap: wrap"
            },
            {
              "value": "استخدام justify-content مع flex-direction: column",
              "description": "يعمل لكن التأثير يكون عمودياً"
            },
            {
              "value": "استخدام flex: 1 بدون flex-basis",
              "description": "flex: 1 = flex: 1 1 0"
            }
          ]
        },
        {
          "name": "الفرق بين justify-content و align-items",
          "description": "توضيح الفرق بين المحورين",
          "values": [
            {
              "value": "justify-content يعمل على المحور الرئيسي",
              "description": "يتحكم في توزيع العناصر على طول المحور الرئيسي"
            },
            {
              "value": "align-items يعمل على المحور المتقاطع",
              "description": "يتحكم في محاذاة العناصر على المحور المتقاطع"
            },
            {
              "value": "في flex-direction: row",
              "description": "justify-content = أفقي، align-items = عمودي"
            },
            {
              "value": "في flex-direction: column",
              "description": "justify-content = عمودي، align-items = أفقي"
            }
          ]
        }
      ]
    }
  ],
  "grid": [
    {
      "tag": "grid-container",
      "description": "خصائص الحاوية الشبكية (Grid Container) التي تحوي عناصر الشبكة، تتحكم في هيكل الأعمدة والصفوف",
      "properties": [
        {
          "name": "display",
          "description": "يحول العنصر إلى حاوية شبكية (Grid Container) ويكوّن سياق تنسيق شبكي لعناصره الداخلية",
          "values": [
            {
              "value": "grid",
              "description": "يحول العنصر إلى حاوية شبكية (تبدأ في سطر جديد)"
            },
            {
              "value": "inline-grid",
              "description": "يحول العنصر إلى حاوية شبكية داخلية (مثل inline-block)"
            },
            {
              "value": "subgrid",
              "description": "يجعل العنصر شبكة فرعية ترث من الشبكة الأب"
            }
          ]
        },
        {
          "name": "grid-template-columns",
          "description": "يحدد عدد وعرض الأعمدة في الشبكة، يمكن استخدام وحدات مختلفة (px, %, fr, minmax, repeat)",
          "values": [
            {
              "value": "none",
              "description": "بدون أعمدة محددة - القيمة الافتراضية"
            },
            {
              "value": "100px",
              "description": "عمود واحد بعرض 100 بكسل"
            },
            {
              "value": "100px 200px",
              "description": "عمودان: 100 بكسل و 200 بكسل"
            },
            {
              "value": "100px 200px 100px",
              "description": "ثلاثة أعمدة: 100، 200، 100 بكسل"
            },
            {
              "value": "1fr 2fr 1fr",
              "description": "ثلاثة أعمدة بنسب مرنة (fr = جزء من المساحة المتاحة)"
            },
            {
              "value": "1fr 1fr 1fr",
              "description": "ثلاثة أعمدة متساوية"
            },
            {
              "value": "2fr 1fr",
              "description": "عمودان: الأول ضعف الثاني"
            },
            {
              "value": "100px 1fr 200px",
              "description": "عمود ثابت، عمود مرن، عمود ثابت"
            },
            {
              "value": "auto 1fr auto",
              "description": "عمود تلقائي، عمود مرن، عمود تلقائي"
            },
            {
              "value": "minmax(100px, 1fr)",
              "description": "عمود بحد أدنى 100 بكسل وحد أقصى مرن"
            },
            {
              "value": "minmax(150px, 2fr)",
              "description": "عمود بحد أدنى 150 بكسل وحد أقصى 2fr"
            },
            {
              "value": "fit-content(200px)",
              "description": "عمود يتناسب مع المحتوى بحد أقصى 200 بكسل"
            },
            {
              "value": "fit-content(50%)",
              "description": "عمود يتناسب مع المحتوى بحد أقصى 50%"
            },
            {
              "value": "repeat(3, 1fr)",
              "description": "ثلاثة أعمدة متساوية باستخدام repeat"
            },
            {
              "value": "repeat(4, 100px)",
              "description": "أربعة أعمدة بعرض 100 بكسل"
            },
            {
              "value": "repeat(2, 1fr 2fr)",
              "description": "نمط متكرر: 1fr, 2fr, 1fr, 2fr"
            },
            {
              "value": "repeat(auto-fill, 100px)",
              "description": "يملأ أكبر عدد من الأعمدة بعرض 100 بكسل"
            },
            {
              "value": "repeat(auto-fill, minmax(150px, 1fr))",
              "description": "يملأ أكبر عدد من الأعمدة بعرض 150px على الأقل، مع ترك أعمدة فارغة"
            },
            {
              "value": "repeat(auto-fit, minmax(150px, 1fr))",
              "description": "يملأ أكبر عدد من الأعمدة ويمددها لملء الفراغ"
            },
            {
              "value": "repeat(auto-fit, minmax(200px, 1fr))",
              "description": "تصميم متجاوب: أعمدة بعرض 200px على الأقل"
            },
            {
              "value": "subgrid",
              "description": "يرث أعمدة الشبكة الأب (يستخدم مع display: subgrid)"
            },
            {
              "value": "100px 1fr minmax(200px, 1fr)",
              "description": "مزيج من أنواع مختلفة"
            },
            {
              "value": "200px repeat(2, 1fr) 100px",
              "description": "أعمدة: ثابت، مرنان، ثابت"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-template-rows",
          "description": "يحدد عدد وارتفاع الصفوف في الشبكة، يمكن استخدام وحدات مختلفة (px, %, fr, minmax, auto)",
          "values": [
            {
              "value": "none",
              "description": "بدون صفوف محددة - القيمة الافتراضية"
            },
            {
              "value": "100px",
              "description": "صف واحد بارتفاع 100 بكسل"
            },
            {
              "value": "100px 200px",
              "description": "صفان: 100 بكسل و 200 بكسل"
            },
            {
              "value": "100px 200px 100px",
              "description": "ثلاثة صفوف: 100، 200، 100 بكسل"
            },
            {
              "value": "1fr 2fr 1fr",
              "description": "ثلاثة صفوف بنسب مرنة"
            },
            {
              "value": "1fr 1fr 1fr",
              "description": "ثلاثة صفوف متساوية"
            },
            {
              "value": "100px 1fr 200px",
              "description": "صف ثابت، صف مرن، صف ثابت"
            },
            {
              "value": "auto 1fr auto",
              "description": "صف تلقائي، صف مرن، صف تلقائي"
            },
            {
              "value": "minmax(100px, 1fr)",
              "description": "صف بحد أدنى 100 بكسل وحد أقصى مرن"
            },
            {
              "value": "minmax(150px, 2fr)",
              "description": "صف بحد أدنى 150 بكسل وحد أقصى 2fr"
            },
            {
              "value": "fit-content(200px)",
              "description": "صف يتناسب مع المحتوى بحد أقصى 200 بكسل"
            },
            {
              "value": "repeat(3, 1fr)",
              "description": "ثلاثة صفوف متساوية باستخدام repeat"
            },
            {
              "value": "repeat(4, 100px)",
              "description": "أربعة صفوف بارتفاع 100 بكسل"
            },
            {
              "value": "repeat(auto-fill, minmax(100px, 1fr))",
              "description": "يملأ أكبر عدد من الصفوف"
            },
            {
              "value": "subgrid",
              "description": "يرث صفوف الشبكة الأب"
            },
            {
              "value": "200px repeat(2, 1fr) 100px",
              "description": "صفوف: ثابت، مرنان، ثابت"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-template-areas",
          "description": "يحدد أسماء لمناطق الشبكة لتسهيل وضع العناصر فيها، باستخدام سلسلة نصية تمثل تخطيط الشبكة",
          "values": [
            {
              "value": "none",
              "description": "بدون مناطق محددة - القيمة الافتراضية"
            },
            {
              "value": "'header header header' 'sidebar main main' 'footer footer footer'",
              "description": "شبكة 3×3: رأس، شريط جانبي، محتوى، تذييل"
            },
            {
              "value": "'header header' 'main sidebar' 'footer footer'",
              "description": "شبكة 3×2 مع شريط جانبي"
            },
            {
              "value": "'header header header header' 'sidebar main main main' 'footer footer footer footer'",
              "description": "شبكة 3×4: رأس، شريط جانبي، محتوى رئيسي"
            },
            {
              "value": "'header header' 'main main' 'footer footer'",
              "description": "شبكة 3×2 بسيطة"
            },
            {
              "value": "'sidebar main' 'sidebar main'",
              "description": "شبكة 2×2: شريط جانبي ومحتوى"
            },
            {
              "value": "'header header header' 'sidebar main main' 'sidebar main main' 'footer footer footer'",
              "description": "شبكة 4×3 مع شريط جانبي طويل"
            },
            {
              "value": "'title title' 'image description' 'footer footer'",
              "description": "شبكة 3×2 لعرض منتج"
            },
            {
              "value": "'. header .' '. main .' '. footer .'",
              "description": "شبكة مع نقاط للمساحات الفارغة"
            },
            {
              "value": "'header header header' 'sidebar . main' 'footer footer footer'",
              "description": "شبكة مع منطقة فارغة في المنتصف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-template",
          "description": "اختصار لـ grid-template-rows و grid-template-columns و grid-template-areas معاً في سطر واحد",
          "values": [
            {
              "value": "none",
              "description": "بدون قالب - القيمة الافتراضية"
            },
            {
              "value": "100px 1fr / 1fr 2fr",
              "description": "صفوف: 100px و 1fr، أعمدة: 1fr و 2fr"
            },
            {
              "value": "100px 200px / 1fr 2fr 1fr",
              "description": "صفان، ثلاثة أعمدة"
            },
            {
              "value": "'header header' 100px 'main sidebar' 1fr / 1fr 2fr",
              "description": "قالب كامل مع مناطق: صفوف 100px و 1fr، أعمدة 1fr و 2fr"
            },
            {
              "value": "'header header header' 100px 'sidebar main main' 1fr 'footer footer footer' 100px / 1fr 2fr 1fr",
              "description": "قالب كامل 3×3"
            },
            {
              "value": "'title title' 50px 'image description' 1fr 'footer footer' 50px / 1fr 2fr",
              "description": "قالب منتج"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid",
          "description": "الاختصار الشامل الذي يجمع كل خصائص القوالب (grid-template-*) وخصائص التوليد التلقائي (grid-auto-*) في تصريح واحد",
          "values": [
            {
              "value": "none",
              "description": "بدون قالب - القيمة الافتراضية"
            },
            {
              "value": "100px 1fr / 1fr 2fr",
              "description": "نفس صيغة grid-template"
            },
            {
              "value": "auto-flow / 1fr 1fr 1fr",
              "description": "أعمدة محددة مع صفوف تُنشأ تلقائياً"
            },
            {
              "value": "1fr 1fr / auto-flow",
              "description": "صفوف محددة مع أعمدة تُنشأ تلقائياً"
            },
            {
              "value": "auto-flow dense / 1fr 1fr",
              "description": "صفوف تلقائية مع ملء الفراغات"
            },
            {
              "value": "100px 200px / auto-flow 1fr",
              "description": "صفوف محددة مع أعمدة تلقائية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-auto-columns",
          "description": "يحدد عرض الأعمدة التي تُنشأ تلقائياً (عند وضع عناصر خارج الشبكة المحددة)",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي حسب المحتوى - القيمة الافتراضية"
            },
            {
              "value": "50px",
              "description": "عرض ثابت 50 بكسل"
            },
            {
              "value": "100px",
              "description": "عرض ثابت 100 بكسل"
            },
            {
              "value": "150px",
              "description": "عرض ثابت 150 بكسل"
            },
            {
              "value": "200px",
              "description": "عرض ثابت 200 بكسل"
            },
            {
              "value": "1fr",
              "description": "عمود مرن"
            },
            {
              "value": "2fr",
              "description": "عمود مرن بضعف"
            },
            {
              "value": "minmax(100px, 1fr)",
              "description": "بين 100 بكسل ومرن"
            },
            {
              "value": "minmax(150px, 2fr)",
              "description": "بين 150 بكسل ومرن"
            },
            {
              "value": "fit-content(200px)",
              "description": "يتناسب مع المحتوى بحد أقصى 200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-auto-rows",
          "description": "يحدد ارتفاع الصفوف التي تُنشأ تلقائياً (عند وضع عناصر خارج الشبكة المحددة)",
          "values": [
            {
              "value": "auto",
              "description": "ارتفاع تلقائي حسب المحتوى - القيمة الافتراضية"
            },
            {
              "value": "50px",
              "description": "ارتفاع ثابت 50 بكسل"
            },
            {
              "value": "100px",
              "description": "ارتفاع ثابت 100 بكسل"
            },
            {
              "value": "150px",
              "description": "ارتفاع ثابت 150 بكسل"
            },
            {
              "value": "200px",
              "description": "ارتفاع ثابت 200 بكسل"
            },
            {
              "value": "1fr",
              "description": "صف مرن"
            },
            {
              "value": "2fr",
              "description": "صف مرن بضعف"
            },
            {
              "value": "minmax(100px, 1fr)",
              "description": "بين 100 بكسل ومرن"
            },
            {
              "value": "fit-content(200px)",
              "description": "يتناسب مع المحتوى بحد أقصى 200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-auto-flow",
          "description": "يحدد كيفية ترتيب العناصر التي لم تحدد مواقعها (صف تلو صف أم عمود تلو عمود)",
          "values": [
            {
              "value": "row",
              "description": "ترتيب صف تلو صف - القيمة الافتراضية"
            },
            {
              "value": "column",
              "description": "ترتيب عمود تلو عمود"
            },
            {
              "value": "row dense",
              "description": "ترتيب صف تلو صف مع ملء الفراغات (يحاول ملء الفجوات)"
            },
            {
              "value": "column dense",
              "description": "ترتيب عمود تلو عمود مع ملء الفراغات"
            }
          ]
        },
        {
          "name": "gap",
          "description": "يحدد المسافة بين صفوف وأعمدة الشبكة في سطر واحد",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافات بين العناصر - القيمة الافتراضية"
            },
            {
              "value": "2px",
              "description": "مسافة 2 بكسل"
            },
            {
              "value": "4px",
              "description": "مسافة 4 بكسل"
            },
            {
              "value": "6px",
              "description": "مسافة 6 بكسل"
            },
            {
              "value": "8px",
              "description": "مسافة 8 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "12px",
              "description": "مسافة 12 بكسل"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "25px",
              "description": "مسافة 25 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "40px",
              "description": "مسافة 40 بكسل"
            },
            {
              "value": "50px",
              "description": "مسافة 50 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem"
            },
            {
              "value": "2rem",
              "description": "مسافة 2rem"
            },
            {
              "value": "5%",
              "description": "5% من عرض الحاوية"
            },
            {
              "value": "10%",
              "description": "10% من عرض الحاوية"
            },
            {
              "value": "10px 20px",
              "description": "مسافة 10 بكسل بين الصفوف، 20 بكسل بين الأعمدة"
            },
            {
              "value": "1rem 2rem",
              "description": "مسافة 1rem بين الصفوف، 2rem بين الأعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "row-gap",
          "description": "يحدد المسافة بين صفوف الشبكة فقط",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة بين الصفوف - القيمة الافتراضية"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem"
            },
            {
              "value": "5%",
              "description": "5% من عرض الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "column-gap",
          "description": "يحدد المسافة بين أعمدة الشبكة فقط",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة بين الأعمدة - القيمة الافتراضية"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "30px",
              "description": "مسافة 30 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem"
            },
            {
              "value": "5%",
              "description": "5% من عرض الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "justify-items",
          "description": "يحدد محاذاة العناصر أفقياً داخل خلايا الشبكة (على المحور الأفقي)",
          "values": [
            {
              "value": "stretch",
              "description": "تمتد العناصر لملء الخلية أفقياً - القيمة الافتراضية"
            },
            {
              "value": "start",
              "description": "محاذاة إلى بداية الخلية (يسار في LTR)"
            },
            {
              "value": "end",
              "description": "محاذاة إلى نهاية الخلية (يمين في LTR)"
            },
            {
              "value": "center",
              "description": "محاذاة إلى منتصف الخلية أفقياً"
            }
          ]
        },
        {
          "name": "align-items",
          "description": "يحدد محاذاة العناصر عمودياً داخل خلايا الشبكة (على المحور العمودي)",
          "values": [
            {
              "value": "stretch",
              "description": "تمتد العناصر لملء الخلية عمودياً - القيمة الافتراضية"
            },
            {
              "value": "start",
              "description": "محاذاة إلى بداية الخلية (أعلى)"
            },
            {
              "value": "end",
              "description": "محاذاة إلى نهاية الخلية (أسفل)"
            },
            {
              "value": "center",
              "description": "محاذاة إلى منتصف الخلية عمودياً"
            }
          ]
        },
        {
          "name": "place-items",
          "description": "اختصار لـ align-items و justify-items معاً (الترتيب: align-items ثم justify-items)",
          "values": [
            {
              "value": "stretch",
              "description": "تمتد العناصر في كلا الاتجاهين - القيمة الافتراضية"
            },
            {
              "value": "center",
              "description": "وسّط العناصر أفقياً وعمودياً (align: center, justify: center)"
            },
            {
              "value": "start end",
              "description": "align-items: start, justify-items: end"
            },
            {
              "value": "center stretch",
              "description": "align-items: center, justify-items: stretch"
            },
            {
              "value": "end start",
              "description": "align-items: end, justify-items: start"
            }
          ],
          "freeInput": true
        },
        {
          "name": "justify-content",
          "description": "يحدد محاذاة الشبكة ككل أفقياً عندما تكون أصغر من الحاوية (على المحور الأفقي)",
          "values": [
            {
              "value": "start",
              "description": "محاذاة الشبكة إلى بداية الحاوية أفقياً - القيمة الافتراضية"
            },
            {
              "value": "end",
              "description": "محاذاة الشبكة إلى نهاية الحاوية أفقياً"
            },
            {
              "value": "center",
              "description": "محاذاة الشبكة إلى منتصف الحاوية أفقياً"
            },
            {
              "value": "stretch",
              "description": "تمتد الشبكة لملء الحاوية أفقياً"
            },
            {
              "value": "space-between",
              "description": "توزع الأعمدة بالتساوي، أول عمود في البداية وآخر في النهاية"
            },
            {
              "value": "space-around",
              "description": "توزع الأعمدة مع مسافات متساوية حول كل عمود"
            },
            {
              "value": "space-evenly",
              "description": "توزع الأعمدة مع مسافات متساوية بينها وحولها"
            }
          ]
        },
        {
          "name": "align-content",
          "description": "يحدد محاذاة الشبكة ككل عمودياً عندما تكون أصغر من الحاوية (على المحور العمودي)",
          "values": [
            {
              "value": "start",
              "description": "محاذاة الشبكة إلى بداية الحاوية عمودياً - القيمة الافتراضية"
            },
            {
              "value": "end",
              "description": "محاذاة الشبكة إلى نهاية الحاوية عمودياً"
            },
            {
              "value": "center",
              "description": "محاذاة الشبكة إلى منتصف الحاوية عمودياً"
            },
            {
              "value": "stretch",
              "description": "تمتد الشبكة لملء الحاوية عمودياً"
            },
            {
              "value": "space-between",
              "description": "توزع الصفوف بالتساوي، أول صف في البداية وآخر في النهاية"
            },
            {
              "value": "space-around",
              "description": "توزع الصفوف مع مسافات متساوية حول كل صف"
            },
            {
              "value": "space-evenly",
              "description": "توزع الصفوف مع مسافات متساوية بينها وحولها"
            }
          ]
        },
        {
          "name": "place-content",
          "description": "اختصار لـ align-content و justify-content معاً (الترتيب: align-content ثم justify-content)",
          "values": [
            {
              "value": "start",
              "description": "محاذاة المحتوى إلى البداية في كلا الاتجاهين - القيمة الافتراضية"
            },
            {
              "value": "center",
              "description": "وسّط المحتوى أفقياً وعمودياً (align: center, justify: center)"
            },
            {
              "value": "space-between stretch",
              "description": "align-content: space-between, justify-content: stretch"
            },
            {
              "value": "center space-around",
              "description": "align-content: center, justify-content: space-around"
            },
            {
              "value": "end start",
              "description": "align-content: end, justify-content: start"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "grid-items",
      "description": "خصائص العناصر داخل الشبكة (Grid Items)، تتحكم في موقع وامتداد كل عنصر داخل الشبكة",
      "properties": [
        {
          "name": "grid-column-start",
          "description": "يحدد بداية العمود الذي سيبدأ منه العنصر (رقم العمود أو span)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "1",
              "description": "يبدأ من العمود الأول"
            },
            {
              "value": "2",
              "description": "يبدأ من العمود الثاني"
            },
            {
              "value": "3",
              "description": "يبدأ من العمود الثالث"
            },
            {
              "value": "4",
              "description": "يبدأ من العمود الرابع"
            },
            {
              "value": "5",
              "description": "يبدأ من العمود الخامس"
            },
            {
              "value": "-1",
              "description": "يبدأ من العمود الأخير (معكوس)"
            },
            {
              "value": "-2",
              "description": "يبدأ من العمود قبل الأخير"
            },
            {
              "value": "span 2",
              "description": "يمتد على عمودين (بداية تلقائية)"
            },
            {
              "value": "span 3",
              "description": "يمتد على ثلاثة أعمدة"
            },
            {
              "value": "span 1",
              "description": "يمتد على عمود واحد (نفسه)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-column-end",
          "description": "يحدد نهاية العمود الذي سينتهي عنده العنصر (رقم العمود أو span)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "2",
              "description": "ينتهي عند العمود الثاني"
            },
            {
              "value": "3",
              "description": "ينتهي عند العمود الثالث"
            },
            {
              "value": "4",
              "description": "ينتهي عند العمود الرابع"
            },
            {
              "value": "5",
              "description": "ينتهي عند العمود الخامس"
            },
            {
              "value": "-1",
              "description": "ينتهي عند العمود الأخير"
            },
            {
              "value": "-2",
              "description": "ينتهي عند العمود قبل الأخير"
            },
            {
              "value": "span 2",
              "description": "يمتد على عمودين (نهاية تلقائية)"
            },
            {
              "value": "span 3",
              "description": "يمتد على ثلاثة أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-column",
          "description": "اختصار لـ grid-column-start و grid-column-end (الترتيب: start / end)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "1 / 3",
              "description": "يبدأ من العمود 1 وينتهي عند العمود 3 (يمتد عمودين: 1 و 2)"
            },
            {
              "value": "2 / 4",
              "description": "يبدأ من العمود 2 وينتهي عند العمود 4 (يمتد عمودين: 2 و 3)"
            },
            {
              "value": "1 / span 2",
              "description": "يبدأ من العمود 1 ويمتد عمودين"
            },
            {
              "value": "span 3 / 5",
              "description": "يمتد 3 أعمدة وينتهي عند العمود 5"
            },
            {
              "value": "1 / -1",
              "description": "يمتد من العمود 1 إلى العمود الأخير"
            },
            {
              "value": "2 / -2",
              "description": "يمتد من العمود 2 إلى العمود قبل الأخير"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-row-start",
          "description": "يحدد بداية الصف الذي سيبدأ منه العنصر (رقم الصف أو span)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "1",
              "description": "يبدأ من الصف الأول"
            },
            {
              "value": "2",
              "description": "يبدأ من الصف الثاني"
            },
            {
              "value": "3",
              "description": "يبدأ من الصف الثالث"
            },
            {
              "value": "4",
              "description": "يبدأ من الصف الرابع"
            },
            {
              "value": "-1",
              "description": "يبدأ من الصف الأخير (معكوس)"
            },
            {
              "value": "-2",
              "description": "يبدأ من الصف قبل الأخير"
            },
            {
              "value": "span 2",
              "description": "يمتد على صفين (بداية تلقائية)"
            },
            {
              "value": "span 3",
              "description": "يمتد على ثلاثة صفوف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-row-end",
          "description": "يحدد نهاية الصف الذي سينتهي عنده العنصر (رقم الصف أو span)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "2",
              "description": "ينتهي عند الصف الثاني"
            },
            {
              "value": "3",
              "description": "ينتهي عند الصف الثالث"
            },
            {
              "value": "4",
              "description": "ينتهي عند الصف الرابع"
            },
            {
              "value": "-1",
              "description": "ينتهي عند الصف الأخير"
            },
            {
              "value": "-2",
              "description": "ينتهي عند الصف قبل الأخير"
            },
            {
              "value": "span 2",
              "description": "يمتد على صفين (نهاية تلقائية)"
            },
            {
              "value": "span 3",
              "description": "يمتد على ثلاثة صفوف"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-row",
          "description": "اختصار لـ grid-row-start و grid-row-end (الترتيب: start / end)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "1 / 3",
              "description": "يبدأ من الصف 1 وينتهي عند الصف 3"
            },
            {
              "value": "2 / 4",
              "description": "يبدأ من الصف 2 وينتهي عند الصف 4"
            },
            {
              "value": "1 / span 2",
              "description": "يبدأ من الصف 1 ويمتد صفين"
            },
            {
              "value": "span 3 / 5",
              "description": "يمتد 3 صفوف وينتهي عند الصف 5"
            },
            {
              "value": "1 / -1",
              "description": "يمتد من الصف 1 إلى الصف الأخير"
            },
            {
              "value": "2 / -2",
              "description": "يمتد من الصف 2 إلى الصف قبل الأخير"
            }
          ],
          "freeInput": true
        },
        {
          "name": "grid-area",
          "description": "يحدد موقع العنصر في الشبكة إما باستخدام اسم منطقة أو باستخدام خطوط البداية والنهاية (row-start / column-start / row-end / column-end)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "header",
              "description": "يوضع في المنطقة المسماة 'header'"
            },
            {
              "value": "sidebar",
              "description": "يوضع في المنطقة المسماة 'sidebar'"
            },
            {
              "value": "main",
              "description": "يوضع في المنطقة المسماة 'main'"
            },
            {
              "value": "footer",
              "description": "يوضع في المنطقة المسماة 'footer'"
            },
            {
              "value": "1 / 1 / 3 / 3",
              "description": "صف البداية / عمود البداية / صف النهاية / عمود النهاية"
            },
            {
              "value": "1 / 2 / 4 / 5",
              "description": "يبدأ من الصف 1، العمود 2، وينتهي عند الصف 4، العمود 5"
            },
            {
              "value": "2 / 1 / span 2 / span 3",
              "description": "يبدأ من الصف 2، العمود 1، ويمتد صفين و3 أعمدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "justify-self",
          "description": "يتجاوز محاذاة العنصر أفقياً داخل خليته (تختلف عن justify-items الخاصة بالحاوية)",
          "values": [
            {
              "value": "auto",
              "description": "يتبع justify-items الخاصة بالحاوية - القيمة الافتراضية"
            },
            {
              "value": "stretch",
              "description": "يمتد لملء الخلية أفقياً"
            },
            {
              "value": "start",
              "description": "محاذاة إلى بداية الخلية (يسار في LTR)"
            },
            {
              "value": "end",
              "description": "محاذاة إلى نهاية الخلية (يمين في LTR)"
            },
            {
              "value": "center",
              "description": "محاذاة إلى منتصف الخلية أفقياً"
            }
          ]
        },
        {
          "name": "align-self",
          "description": "يتجاوز محاذاة العنصر عمودياً داخل خليته (تختلف عن align-items الخاصة بالحاوية)",
          "values": [
            {
              "value": "auto",
              "description": "يتبع align-items الخاصة بالحاوية - القيمة الافتراضية"
            },
            {
              "value": "stretch",
              "description": "يمتد لملء الخلية عمودياً"
            },
            {
              "value": "start",
              "description": "محاذاة إلى بداية الخلية (أعلى)"
            },
            {
              "value": "end",
              "description": "محاذاة إلى نهاية الخلية (أسفل)"
            },
            {
              "value": "center",
              "description": "محاذاة إلى منتصف الخلية عمودياً"
            }
          ]
        },
        {
          "name": "place-self",
          "description": "اختصار لـ align-self و justify-self معاً (الترتيب: align-self ثم justify-self)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - يتبع إعدادات الحاوية - القيمة الافتراضية"
            },
            {
              "value": "stretch",
              "description": "يمتد في كلا الاتجاهين"
            },
            {
              "value": "center",
              "description": "وسّط العنصر أفقياً وعمودياً (align: center, justify: center)"
            },
            {
              "value": "start end",
              "description": "align-self: start, justify-self: end"
            },
            {
              "value": "center stretch",
              "description": "align-self: center, justify-self: stretch"
            },
            {
              "value": "end start",
              "description": "align-self: end, justify-self: start"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "named-lines",
      "description": "يمكن تسمية خطوط الشبكة باستخدام أقواس مربعة [name] في grid-template-columns و grid-template-rows، مما يسهل تحديد مواقع العناصر",
      "properties": [
        {
          "name": "تسمية الخطوط (ملاحظة)",
          "description": "يمكن تسمية خطوط الشبكة لتسهيل الإشارة إليها بدلاً من استخدام الأرقام",
          "values": [
            {
              "value": "[main-start] 1fr [main-end]",
              "description": "تسمية بداية ونهاية العمود الرئيسي"
            },
            {
              "value": "[header-start] auto [header-end]",
              "description": "تسمية بداية ونهاية صف الرأس"
            },
            {
              "value": "[col1] 100px [col2] 200px [col3] 100px",
              "description": "تسمية كل عمود باسمه"
            },
            {
              "value": "[row1] 100px [row2] 200px [row3] 100px",
              "description": "تسمية كل صف باسمه"
            },
            {
              "value": "[sidebar-start] 1fr [sidebar-end main-start] 2fr [main-end]",
              "description": "تسمية متعددة للخطوط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "استخدام الأسماء في العناصر",
          "description": "استخدام الأسماء في خصائص العناصر بدلاً من الأرقام",
          "values": [
            {
              "value": "grid-column: main-start / main-end",
              "description": "يمتد من بداية العمود الرئيسي إلى نهايته"
            },
            {
              "value": "grid-row: header-start / header-end",
              "description": "يمتد من بداية صف الرأس إلى نهايته"
            },
            {
              "value": "grid-area: row1 / col1 / row3 / col3",
              "description": "يمتد باستخدام أسماء الصفوف والأعمدة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام شبكة CSS Grid في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - تخطيط صفحة كامل",
          "description": "تخطيط صفحة ويب كامل باستخدام grid-template-areas",
          "values": [
            {
              "value": ".page { display: grid; grid-template-areas: 'header header header' 'sidebar main main' 'footer footer footer'; grid-template-columns: 250px 1fr 1fr; grid-template-rows: 80px 1fr 60px; gap: 16px; min-height: 100vh; } .header { grid-area: header; } .sidebar { grid-area: sidebar; } .main { grid-area: main; } .footer { grid-area: footer; }",
              "description": "تخطيط صفحة كامل مع رأس وشريط جانبي ومحتوى وتذييل"
            }
          ]
        },
        {
          "name": "مثال 2 - شبكة بطاقات متجاوبة",
          "description": "شبكة بطاقات تتجاوب مع حجم الشاشة باستخدام auto-fit",
          "values": [
            {
              "value": ".cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }",
              "description": "بطاقات متجاوبة بعرض 250px على الأقل"
            }
          ]
        },
        {
          "name": "مثال 3 - تخطيط معرض صور",
          "description": "معرض صور بأحجام مختلفة باستخدام grid-column و grid-row",
          "values": [
            {
              "value": ".gallery { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 200px; gap: 16px; } .image-large { grid-column: span 2; grid-row: span 2; } .image-wide { grid-column: span 2; } .image-tall { grid-row: span 2; }",
              "description": "معرض صور بأحجام مختلفة"
            }
          ]
        },
        {
          "name": "مثال 4 - تخطيط متعرج (Masonry-like)",
          "description": "تخطيط متعرج باستخدام grid-auto-flow: dense لملء الفراغات",
          "values": [
            {
              "value": ".masonry { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-flow: dense; gap: 16px; } .item:nth-child(2n) { grid-row: span 2; }",
              "description": "تخطيط متعرج مع ملء الفراغات"
            }
          ]
        },
        {
          "name": "مثال 5 - رأس الموقع مع شعار وبحث وقائمة",
          "description": "رأس موقع باستخدام الشبكة",
          "values": [
            {
              "value": ".header { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 20px; padding: 16px; } .logo { grid-column: 1; } .nav { grid-column: 2; } .search { grid-column: 3; }",
              "description": "رأس موقع مع شعار وبحث وقائمة"
            }
          ]
        },
        {
          "name": "مثال 6 - شبكة بأعمدة متغيرة العرض",
          "description": "أعمدة بعروض مختلفة باستخدام minmax و fr",
          "values": [
            {
              "value": ".grid { display: grid; grid-template-columns: 200px minmax(300px, 1fr) 200px; gap: 16px; }",
              "description": "ثلاثة أعمدة: ثابت، مرن، ثابت"
            }
          ]
        },
        {
          "name": "مثال 7 - عنصر ممتد على كامل العرض",
          "description": "عنصر يمتد على جميع الأعمدة",
          "values": [
            {
              "value": ".full-width { grid-column: 1 / -1; }",
              "description": "يمتد من العمود الأول إلى العمود الأخير"
            }
          ]
        }
      ]
    },
    {
      "tag": "grid-vs-flexbox",
      "description": "مقارنة بين CSS Grid و Flexbox، كل منهما مناسب لحالات استخدام مختلفة",
      "properties": [
        {
          "name": "Grid vs Flexbox",
          "description": "الفرق بين Grid و Flexbox ومتى تستخدم كل منهما",
          "values": [
            {
              "value": "Grid للتخطيطات ثنائية الأبعاد",
              "description": "Grid مثالي للصفحات الكاملة والتخطيطات المعقدة"
            },
            {
              "value": "Flexbox للتخطيطات أحادية البعد",
              "description": "Flexbox مثالي للقوائم والأشرطة والعناصر في سطر واحد"
            },
            {
              "value": "Grid يتحكم في الصفوف والأعمدة معاً",
              "description": "يمكن تحديد مواقع العناصر في شبكة كاملة"
            },
            {
              "value": "Flexbox يتحكم في اتجاه واحد",
              "description": "إما أفقي (row) أو عمودي (column)"
            },
            {
              "value": "Grid مناسب لتخطيط الصفحة",
              "description": "رأس، محتوى، شريط جانبي، تذييل"
            },
            {
              "value": "Flexbox مناسب للمكونات الصغيرة",
              "description": "قوائم، أزرار، بطاقات في صف واحد"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام شبكة CSS Grid بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لاستخدام Grid",
          "values": [
            {
              "value": "استخدم repeat() للأعمدة المتكررة",
              "description": "repeat(3, 1fr) أفضل من كتابة 1fr 1fr 1fr"
            },
            {
              "value": "استخدم minmax() للأحجام المرنة",
              "description": "minmax(200px, 1fr) يضمن حداً أدنى للعرض"
            },
            {
              "value": "استخدم auto-fit و auto-fill للتصميم المتجاوب",
              "description": "repeat(auto-fit, minmax(250px, 1fr)) لتخطيط متجاوب"
            },
            {
              "value": "استخدم grid-template-areas للقراءة",
              "description": "يجعل التخطيط أكثر وضوحاً وقابلية للفهم"
            },
            {
              "value": "استخدم gap بدلاً من margin",
              "description": "gap أفضل للتباعد بين عناصر الشبكة"
            }
          ]
        },
        {
          "name": "نصائح التصميم المتجاوب",
          "description": "نصائح لتصميم متجاوب باستخدام Grid",
          "values": [
            {
              "value": "استخدم auto-fit مع minmax",
              "description": "repeat(auto-fit, minmax(250px, 1fr)) لشبكة متجاوبة"
            },
            {
              "value": "استخدم media queries لتغيير التخطيط",
              "description": "تغيير grid-template-columns في الشاشات المختلفة"
            },
            {
              "value": "استخدم subgrid للشبكات المتداخلة",
              "description": "display: subgrid لوراثة الأعمدة من الشبكة الأب"
            },
            {
              "value": "استخدم fr بدلاً من النسب المئوية",
              "description": "fr أكثر مرونة وأسهل في الحساب"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام Grid وكيفية تجنبها",
          "values": [
            {
              "value": "نسيان display: grid",
              "description": "بدونها لن تعمل خصائص Grid"
            },
            {
              "value": "استخدام auto-fit بدون minmax",
              "description": "auto-fit يحتاج minmax ليعمل بشكل صحيح"
            },
            {
              "value": "تحديد grid-template-columns فقط",
              "description": "قد تحتاج أيضاً إلى grid-template-rows"
            },
            {
              "value": "استخدام grid-area بدون grid-template-areas",
              "description": "يجب تعريف المناطق أولاً"
            },
            {
              "value": "خلط fr مع px في repeat",
              "description": "repeat(auto-fit, 1fr 200px) غير صحيح"
            }
          ]
        }
      ]
    }
  ],
  "colorsBackgrounds": [
    {
      "tag": "color",
      "description": "يحدد لون النص الأمامي للعنصر، يتحكم في مظهر النصوص والرموز داخل العنصر",
      "properties": [
        {
          "name": "color",
          "description": "الخاصية الرئيسية لتحديد لون النص، يمكن استخدام أي نظام ألوان (أسماء، Hex، RGB، HSL، وغيرها)",
          "values": [
            {
              "value": "black",
              "description": "أسود (#000000) - اللون الأساسي"
            },
            {
              "value": "white",
              "description": "أبيض (#ffffff) - اللون الأساسي"
            },
            {
              "value": "red",
              "description": "أحمر (#ff0000) - لون ناري"
            },
            {
              "value": "green",
              "description": "أخضر (#00ff00) - لون الطبيعة"
            },
            {
              "value": "blue",
              "description": "أزرق (#0000ff) - لون السماء"
            },
            {
              "value": "yellow",
              "description": "أصفر (#ffff00) - لون مشرق"
            },
            {
              "value": "orange",
              "description": "برتقالي (#ffa500) - لون دافئ"
            },
            {
              "value": "purple",
              "description": "بنفسجي (#800080) - لون ملكي"
            },
            {
              "value": "pink",
              "description": "وردي (#ffc0cb) - لون ناعم"
            },
            {
              "value": "gray",
              "description": "رمادي (#808080) - لون محايد"
            },
            {
              "value": "brown",
              "description": "بني (#a52a2a) - لون ترابي"
            },
            {
              "value": "navy",
              "description": "أزرق بحري (#000080) - لون غامق"
            },
            {
              "value": "teal",
              "description": "أزرق مخضر (#008080) - لون هادئ"
            },
            {
              "value": "maroon",
              "description": "كستنائي (#800000) - لون غامق دافئ"
            },
            {
              "value": "olive",
              "description": "زيتوني (#808000) - لون طبيعي"
            },
            {
              "value": "lime",
              "description": "ليموني (#00ff00) - أخضر فاتح"
            },
            {
              "value": "gold",
              "description": "ذهبي (#ffd700) - لون براق"
            },
            {
              "value": "silver",
              "description": "فضي (#c0c0c0) - لون معدني"
            },
            {
              "value": "coral",
              "description": "مرجاني (#ff7f50) - لون دافئ"
            },
            {
              "value": "crimson",
              "description": "قرمزي (#dc143c) - أحمر غامق"
            },
            {
              "value": "indigo",
              "description": "نيلي (#4b0082) - بنفسجي غامق"
            },
            {
              "value": "salmon",
              "description": "سلموني (#fa8072) - وردي برتقالي"
            },
            {
              "value": "chocolate",
              "description": "شوكولاتي (#d2691e) - بني دافئ"
            },
            {
              "value": "tomato",
              "description": "طماطمي (#ff6347) - أحمر برتقالي"
            },
            {
              "value": "skyblue",
              "description": "أزرق سماوي (#87ceeb) - أزرق فاتح"
            },
            {
              "value": "lightblue",
              "description": "أزرق فاتح (#add8e6) - أزرق ناعم"
            },
            {
              "value": "lightgreen",
              "description": "أخضر فاتح (#90ee90) - أخضر ناعم"
            },
            {
              "value": "lightgray",
              "description": "رمادي فاتح (#d3d3d3) - رمادي ناعم"
            },
            {
              "value": "transparent",
              "description": "شفاف - لا لون، يظهر ما خلفه"
            },
            {
              "value": "currentColor",
              "description": "نفس لون العنصر الأب (القيمة الافتراضية) - مفيد لتوحيد الألوان"
            },
            {
              "value": "inherit",
              "description": "يرث لون العنصر الأب"
            },
            {
              "value": "initial",
              "description": "يعيد اللون إلى القيمة الافتراضية"
            },
            {
              "value": "unset",
              "description": "يرث إذا كان ممكناً أو يعيد إلى الافتراضي"
            },
            {
              "value": "#000000",
              "description": "أسود"
            },
            {
              "value": "#ffffff",
              "description": "أبيض"
            },
            {
              "value": "#ff0000",
              "description": "أحمر"
            },
            {
              "value": "#00ff00",
              "description": "أخضر"
            },
            {
              "value": "#0000ff",
              "description": "أزرق"
            },
            {
              "value": "#ffff00",
              "description": "أصفر"
            },
            {
              "value": "#ffa500",
              "description": "برتقالي"
            },
            {
              "value": "#800080",
              "description": "بنفسجي"
            },
            {
              "value": "#ffc0cb",
              "description": "وردي"
            },
            {
              "value": "#808080",
              "description": "رمادي"
            },
            {
              "value": "#a52a2a",
              "description": "بني"
            },
            {
              "value": "#333333",
              "description": "رمادي غامق"
            },
            {
              "value": "#666666",
              "description": "رمادي متوسط"
            },
            {
              "value": "#999999",
              "description": "رمادي فاتح"
            },
            {
              "value": "#cccccc",
              "description": "رمادي فاتح جداً"
            },
            {
              "value": "#f0f0f0",
              "description": "أبيض مائل للرمادي"
            },
            {
              "value": "#ff6600",
              "description": "برتقالي غامق"
            },
            {
              "value": "#ff3399",
              "description": "وردي ساخن"
            },
            {
              "value": "#00ccff",
              "description": "أزرق فاتح براق"
            },
            {
              "value": "rgb(0, 0, 0)",
              "description": "أسود"
            },
            {
              "value": "rgb(255, 255, 255)",
              "description": "أبيض"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر"
            },
            {
              "value": "rgb(0, 255, 0)",
              "description": "أخضر"
            },
            {
              "value": "rgb(0, 0, 255)",
              "description": "أزرق"
            },
            {
              "value": "rgb(255, 165, 0)",
              "description": "برتقالي"
            },
            {
              "value": "rgb(128, 0, 128)",
              "description": "بنفسجي"
            },
            {
              "value": "rgba(255, 0, 0, 0.5)",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "rgba(0, 0, 255, 0.3)",
              "description": "أزرق شفاف 30%"
            },
            {
              "value": "rgba(0, 0, 0, 0.1)",
              "description": "أسود شفاف 10% - ظل خفيف"
            },
            {
              "value": "rgba(255, 255, 255, 0.8)",
              "description": "أبيض شفاف 80% - شبه معتم"
            },
            {
              "value": "hsl(0, 100%, 50%)",
              "description": "أحمر"
            },
            {
              "value": "hsl(120, 100%, 50%)",
              "description": "أخضر"
            },
            {
              "value": "hsl(240, 100%, 50%)",
              "description": "أزرق"
            },
            {
              "value": "hsl(30, 100%, 50%)",
              "description": "برتقالي"
            },
            {
              "value": "hsl(0, 0%, 50%)",
              "description": "رمادي متوسط"
            },
            {
              "value": "hsl(200, 50%, 40%)",
              "description": "أزرق متوسط"
            },
            {
              "value": "hsla(0, 100%, 50%, 0.5)",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "hsla(240, 100%, 50%, 0.3)",
              "description": "أزرق شفاف 30%"
            },
            {
              "value": "hsla(0, 0%, 0%, 0.2)",
              "description": "أسود شفاف 20%"
            },
            {
              "value": "lab(50% 80 40)",
              "description": "نظام ألوان Lab - دقيق ومنتظم"
            },
            {
              "value": "lab(30% 50 -20)",
              "description": "نظام ألوان Lab - أزرق مائل"
            },
            {
              "value": "lch(50% 80 20)",
              "description": "نظام ألوان LCH - عرض أوسع من RGB"
            },
            {
              "value": "lch(60% 60 300)",
              "description": "نظام ألوان LCH - بنفسجي"
            },
            {
              "value": "color(display-p3 1 0 0)",
              "description": "نظام Display P3 - أحمر أوسع من sRGB"
            },
            {
              "value": "color(display-p3 0 1 0)",
              "description": "نظام Display P3 - أخضر أوسع"
            },
            {
              "value": "color(display-p3 0 0 1)",
              "description": "نظام Display P3 - أزرق أوسع"
            }
          ],
          "freeInput": true
        },
        {
          "name": "color-scheme",
          "description": "يخبر المتصفح بأنماط الألوان (فاتح/داكن) التي يدعمها العنصر لضبط عناصر واجهة المستخدم الافتراضية مثل شريط التمرير تلقائياً",
          "values": [
            {
              "value": "normal",
              "description": "لا تفضيل محدد - يستخدم المتصفح وضعه الافتراضي (القيمة الافتراضية)"
            },
            {
              "value": "light",
              "description": "يدعم الوضع الفاتح فقط - عناصر الواجهة ستكون فاتحة"
            },
            {
              "value": "dark",
              "description": "يدعم الوضع الداكن فقط - عناصر الواجهة ستكون داكنة"
            },
            {
              "value": "light dark",
              "description": "يدعم كلا الوضعين، يتبع تفضيل نظام المستخدم"
            },
            {
              "value": "dark light",
              "description": "يدعم كلا الوضعين، يفضل الداكن إن كان متاحاً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "forced-color-adjust",
          "description": "يتحكم في إمكانية تجاوز المتصفح لألوان العنصر عند تفعيل وضع الألوان القسري (Forced Colors mode) لإمكانية الوصول",
          "values": [
            {
              "value": "auto",
              "description": "يسمح للمتصفح بتعديل الألوان لتتناسب مع وضع القسري (القيمة الافتراضية)"
            },
            {
              "value": "none",
              "description": "يحافظ على الألوان الأصلية للعنصر ولا يسمح للمتصفح بتغييرها"
            }
          ]
        },
        {
          "name": "text-decoration-color",
          "description": "يحدد لون خط التزيين النصي (تسطير، خط فوق النص، خط خلال النص)",
          "values": [
            {
              "value": "currentColor",
              "description": "نفس لون النص (القيمة الافتراضية)"
            },
            {
              "value": "red",
              "description": "خط تزيين أحمر"
            },
            {
              "value": "#007bff",
              "description": "خط تزيين أزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-emphasis-color",
          "description": "يحدد لون علامات التأكيد على النص (النقاط أو الدوائر فوق النص في اللغات الآسيوية)",
          "values": [
            {
              "value": "currentColor",
              "description": "نفس لون النص (القيمة الافتراضية)"
            },
            {
              "value": "red",
              "description": "علامات تأكيد حمراء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "caret-color",
          "description": "يحدد لون مؤشر الكتابة (المؤشر الوامض) في حقول النص",
          "values": [
            {
              "value": "auto",
              "description": "يستخدم المتصفح اللون الافتراضي (القيمة الافتراضية)"
            },
            {
              "value": "red",
              "description": "مؤشر أحمر"
            },
            {
              "value": "transparent",
              "description": "مؤشر شفاف (مفيد للتصاميم الخاصة)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "background",
      "description": "اختصار لتحديد خصائص الخلفية دفعة واحدة (اللون، الصورة، الحجم، الموضع، التكرار، إلخ)",
      "properties": [
        {
          "name": "background",
          "description": "الخاصية المختصرة للخلفية، تجمع كل الخصائص في سطر واحد بترتيب محدد",
          "values": [
            {
              "value": "transparent",
              "description": "خلفية شفافة (القيمة الافتراضية)"
            },
            {
              "value": "red",
              "description": "خلفية حمراء صافية"
            },
            {
              "value": "#f0f0f0",
              "description": "خلفية رمادية فاتحة جداً"
            },
            {
              "value": "url('bg.png')",
              "description": "صورة خلفية بحجمها الطبيعي، تتكرر تلقائياً"
            },
            {
              "value": "linear-gradient(red, blue)",
              "description": "تدرج لوني من الأحمر إلى الأزرق"
            },
            {
              "value": "radial-gradient(circle, red, blue)",
              "description": "تدرج شعاعي دائري"
            },
            {
              "value": "conic-gradient(from 0deg, red, blue, green)",
              "description": "تدرج مخروطي"
            },
            {
              "value": "url('bg.png') no-repeat center/cover",
              "description": "صورة في المنتصف دون تكرار، تغطي العنصر بالكامل"
            },
            {
              "value": "url('bg.png') repeat-y right",
              "description": "صورة مكررة عمودياً في الجهة اليمنى"
            },
            {
              "value": "white url('bg.png') fixed",
              "description": "خلفية بيضاء مع صورة ثابتة لا تتحرك عند التمرير"
            },
            {
              "value": "url('bg.png') no-repeat 10px 20px/200px auto",
              "description": "صورة في موضع محدد بحجم معين"
            },
            {
              "value": "url('bg.png') repeat-x scroll 50% 0%/cover",
              "description": "صورة متكررة أفقياً مع تمرير"
            },
            {
              "value": "rgba(0,0,0,0.5) url('bg.png') no-repeat center/cover",
              "description": "صورة مع طبقة شفافية"
            },
            {
              "value": "url('image1.jpg'), url('image2.jpg')",
              "description": "صور خلفية متعددة (طبقات)"
            },
            {
              "value": "url('image.jpg'), linear-gradient(red, blue)",
              "description": "صورة فوق تدرج لوني"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "background-color",
      "description": "يحدد لون خلفية العنصر، يمكن استخدام أي لون أو شفافية، أساس أي تصميم خلفية",
      "properties": [
        {
          "name": "background-color",
          "description": "يحدد لون خلفية العنصر، يمكن استخدام أي نظام ألوان",
          "values": [
            {
              "value": "transparent",
              "description": "خلفية شفافة - يظهر ما خلف العنصر (القيمة الافتراضية)"
            },
            {
              "value": "white",
              "description": "خلفية بيضاء - أنظف خلفية"
            },
            {
              "value": "black",
              "description": "خلفية سوداء - جريئة وعصرية"
            },
            {
              "value": "red",
              "description": "خلفية حمراء - جذابة وملفتة"
            },
            {
              "value": "blue",
              "description": "خلفية زرقاء - هادئة ومريحة"
            },
            {
              "value": "green",
              "description": "خلفية خضراء - طبيعية ومنعشة"
            },
            {
              "value": "yellow",
              "description": "خلفية صفراء - مشرقة ومبهجة"
            },
            {
              "value": "gray",
              "description": "خلفية رمادية - محايدة واحترافية"
            },
            {
              "value": "lightgray",
              "description": "خلفية رمادية فاتحة - ناعمة"
            },
            {
              "value": "darkgray",
              "description": "خلفية رمادية داكنة - أنيقة"
            },
            {
              "value": "#ffffff",
              "description": "أبيض"
            },
            {
              "value": "#000000",
              "description": "أسود"
            },
            {
              "value": "#f8f9fa",
              "description": "رمادي فاتح جداً (مستخدم في Bootstrap)"
            },
            {
              "value": "#f0f0f0",
              "description": "رمادي فاتح جداً"
            },
            {
              "value": "#e9ecef",
              "description": "رمادي فاتح"
            },
            {
              "value": "#dee2e6",
              "description": "رمادي متوسط فاتح"
            },
            {
              "value": "#ced4da",
              "description": "رمادي متوسط"
            },
            {
              "value": "#adb5bd",
              "description": "رمادي متوسط غامق"
            },
            {
              "value": "#6c757d",
              "description": "رمادي غامق"
            },
            {
              "value": "#495057",
              "description": "رمادي غامق جداً"
            },
            {
              "value": "#343a40",
              "description": "رمادي أسود تقريباً"
            },
            {
              "value": "rgb(255, 255, 255)",
              "description": "أبيض"
            },
            {
              "value": "rgb(0, 0, 0)",
              "description": "أسود"
            },
            {
              "value": "rgba(0, 0, 0, 0.5)",
              "description": "أسود شفاف 50% - طبقة تعتيم"
            },
            {
              "value": "rgba(255, 255, 255, 0.5)",
              "description": "أبيض شفاف 50% - طبقة تفتيح"
            },
            {
              "value": "rgba(0, 0, 255, 0.3)",
              "description": "أزرق شفاف 30% - تأثير ناعم"
            },
            {
              "value": "hsl(0, 0%, 100%)",
              "description": "أبيض"
            },
            {
              "value": "hsl(0, 0%, 0%)",
              "description": "أسود"
            },
            {
              "value": "hsla(240, 100%, 50%, 0.3)",
              "description": "أزرق شفاف 30%"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "background-image",
      "description": "يحدد صورة أو تدرجاً لونياً كخلفية للعنصر، يمكن استخدام صور متعددة في طبقات",
      "properties": [
        {
          "name": "background-image",
          "description": "يحدد صورة أو تدرجاً لونياً كخلفية للعنصر",
          "values": [
            {
              "value": "none",
              "description": "بدون صورة خلفية (القيمة الافتراضية)"
            },
            {
              "value": "url('image.jpg')",
              "description": "صورة من ملف JPG"
            },
            {
              "value": "url('image.png')",
              "description": "صورة من ملف PNG (يدعم الشفافية)"
            },
            {
              "value": "url('image.svg')",
              "description": "صورة من ملف SVG (قابلة للتكبير)"
            },
            {
              "value": "url('image.webp')",
              "description": "صورة من ملف WebP (أفضل ضغط)"
            },
            {
              "value": "url('image.jpg') no-repeat",
              "description": "صورة بدون تكرار"
            },
            {
              "value": "linear-gradient(red, blue)",
              "description": "تدرج خطي من الأحمر إلى الأزرق (من أعلى لأسفل)"
            },
            {
              "value": "linear-gradient(to right, red, blue)",
              "description": "تدرج خطي من اليسار لليمين"
            },
            {
              "value": "linear-gradient(45deg, red, blue)",
              "description": "تدرج خطي بزاوية 45 درجة"
            },
            {
              "value": "linear-gradient(to top left, red, blue)",
              "description": "تدرج خطي باتجاه أعلى اليسار"
            },
            {
              "value": "linear-gradient(red 0%, yellow 50%, blue 100%)",
              "description": "تدرج متعدد الألوان"
            },
            {
              "value": "linear-gradient(red 30%, blue 70%)",
              "description": "تدرج مع تحكم في النقاط"
            },
            {
              "value": "linear-gradient(red, orange, yellow, green, blue)",
              "description": "تدرج قوس قزح"
            },
            {
              "value": "radial-gradient(circle, red, blue)",
              "description": "تدرج شعاعي دائري"
            },
            {
              "value": "radial-gradient(ellipse, red, blue)",
              "description": "تدرج شعاعي بيضاوي"
            },
            {
              "value": "radial-gradient(circle at top left, red, blue)",
              "description": "تدرج شعاعي من أعلى اليسار"
            },
            {
              "value": "radial-gradient(circle, red 30%, blue 70%)",
              "description": "تدرج شعاعي مع تحكم"
            },
            {
              "value": "radial-gradient(circle closest-side, red, blue)",
              "description": "تدرج شعاعي بأقرب حافة"
            },
            {
              "value": "radial-gradient(circle farthest-corner, red, blue)",
              "description": "تدرج شعاعي بأبعد زاوية"
            },
            {
              "value": "conic-gradient(red, blue)",
              "description": "تدرج مخروطي"
            },
            {
              "value": "conic-gradient(from 0deg, red, blue, green)",
              "description": "تدرج مخروطي متعدد"
            },
            {
              "value": "conic-gradient(red 0%, blue 50%, green 100%)",
              "description": "تدرج مخروطي مع تحكم"
            },
            {
              "value": "conic-gradient(from 45deg, red, blue)",
              "description": "تدرج مخروطي بزاوية بداية"
            },
            {
              "value": "repeating-linear-gradient(red 0px, blue 20px)",
              "description": "تدرج خطي متكرر"
            },
            {
              "value": "repeating-radial-gradient(circle, red 0px, blue 20px)",
              "description": "تدرج شعاعي متكرر"
            },
            {
              "value": "repeating-conic-gradient(red 0%, blue 20%)",
              "description": "تدرج مخروطي متكرر"
            },
            {
              "value": "url('image1.jpg'), url('image2.jpg')",
              "description": "صور خلفية متعددة (طبقات)"
            },
            {
              "value": "url('image.jpg'), linear-gradient(red, blue)",
              "description": "صورة فوق تدرج لوني"
            },
            {
              "value": "url('image1.jpg'), url('image2.jpg'), #f0f0f0",
              "description": "ثلاث طبقات: صورتين ولون"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "background-repeat",
      "description": "يحدد كيف تتكرر صورة الخلفية (أفقياً، عمودياً، أو لا تتكرر)، يتحكم في امتداد الصورة",
      "properties": [
        {
          "name": "background-repeat",
          "description": "يحدد كيف تتكرر صورة الخلفية",
          "values": [
            {
              "value": "repeat",
              "description": "تتكرر في كلا الاتجاهين (أفقي وعمودي) - القيمة الافتراضية"
            },
            {
              "value": "no-repeat",
              "description": "لا تتكرر، تظهر مرة واحدة فقط"
            },
            {
              "value": "repeat-x",
              "description": "تتكرر أفقياً فقط (يمين ويسار) - مفيد للأشرطة"
            },
            {
              "value": "repeat-y",
              "description": "تتكرر عمودياً فقط (أعلى وأسفل) - مفيد للخلفيات الجانبية"
            },
            {
              "value": "round",
              "description": "تتكرر وتتمدد لتملأ الفراغ بدون قص، يتغير حجم الصورة"
            },
            {
              "value": "space",
              "description": "تتكرر مع توزيع متساوٍ بين النسخ، تظهر كاملة بدون قص"
            },
            {
              "value": "round repeat",
              "description": "أفقي round، عمودي repeat"
            },
            {
              "value": "no-repeat repeat",
              "description": "أفقي no-repeat، عمودي repeat"
            }
          ]
        }
      ]
    },
    {
      "tag": "background-position",
      "description": "يحدد مكان ظهور صورة الخلفية داخل العنصر، يتحكم في مكان بداية الصورة",
      "properties": [
        {
          "name": "background-position",
          "description": "يحدد مكان ظهور صورة الخلفية داخل العنصر",
          "values": [
            {
              "value": "0% 0%",
              "description": "أعلى اليسار (القيمة الافتراضية)"
            },
            {
              "value": "0% 100%",
              "description": "أسفل اليسار"
            },
            {
              "value": "100% 0%",
              "description": "أعلى اليمين"
            },
            {
              "value": "100% 100%",
              "description": "أسفل اليمين"
            },
            {
              "value": "50% 50%",
              "description": "المنتصف بالضبط - أشهر قيمة"
            },
            {
              "value": "center",
              "description": "المنتصف (اختصار لـ 50% 50%)"
            },
            {
              "value": "top",
              "description": "أعلى المنتصف"
            },
            {
              "value": "bottom",
              "description": "أسفل المنتصف"
            },
            {
              "value": "left",
              "description": "منتصف اليسار"
            },
            {
              "value": "right",
              "description": "منتصف اليمين"
            },
            {
              "value": "right top",
              "description": "أعلى اليمين"
            },
            {
              "value": "left bottom",
              "description": "أسفل اليسار"
            },
            {
              "value": "10px 20px",
              "description": "10 بكسل من اليسار، 20 بكسل من الأعلى"
            },
            {
              "value": "50% 100%",
              "description": "أسفل المنتصف"
            },
            {
              "value": "25% 75%",
              "description": "ربع المسافة من اليسار، ثلاثة أرباع من الأعلى"
            },
            {
              "value": "-50px 100px",
              "description": "قيم سالبة - تخرج الصورة عن حدود العنصر"
            },
            {
              "value": "center 30px",
              "description": "منتصف أفقياً، 30 بكسل من الأعلى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "background-position-x",
          "description": "يحدد الموضع الأفقي لصورة الخلفية فقط (مستقل عن الموضع العمودي)",
          "values": [
            {
              "value": "left",
              "description": "أقصى اليسار"
            },
            {
              "value": "center",
              "description": "المنتصف أفقياً"
            },
            {
              "value": "right",
              "description": "أقصى اليمين"
            },
            {
              "value": "0%",
              "description": "أقصى اليسار"
            },
            {
              "value": "25%",
              "description": "ربع المسافة من اليسار"
            },
            {
              "value": "50%",
              "description": "المنتصف"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع المسافة"
            },
            {
              "value": "100%",
              "description": "أقصى اليمين"
            },
            {
              "value": "20px",
              "description": "20 بكسل من اليسار"
            },
            {
              "value": "-10px",
              "description": "قيمة سالبة - 10 بكسل يسار العنصر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "background-position-y",
          "description": "يحدد الموضع الرأسي لصورة الخلفية فقط (مستقل عن الموضع الأفقي)",
          "values": [
            {
              "value": "top",
              "description": "أعلى"
            },
            {
              "value": "center",
              "description": "المنتصف عمودياً"
            },
            {
              "value": "bottom",
              "description": "أسفل"
            },
            {
              "value": "0%",
              "description": "أعلى"
            },
            {
              "value": "25%",
              "description": "ربع المسافة من الأعلى"
            },
            {
              "value": "50%",
              "description": "المنتصف"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع المسافة"
            },
            {
              "value": "100%",
              "description": "أسفل"
            },
            {
              "value": "20px",
              "description": "20 بكسل من الأعلى"
            },
            {
              "value": "-10px",
              "description": "قيمة سالبة - 10 بكسل أعلى العنصر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "background-size",
      "description": "يحدد حجم صورة الخلفية (تكبير، تصغير، أو تغطية العنصر)، يتحكم في مقياس الصورة",
      "properties": [
        {
          "name": "background-size",
          "description": "يحدد حجم صورة الخلفية",
          "values": [
            {
              "value": "auto",
              "description": "الحجم الطبيعي للصورة - لا تغيير (القيمة الافتراضية)"
            },
            {
              "value": "50px 50px",
              "description": "حجم ثابت 50×50 بكسل"
            },
            {
              "value": "100px 100px",
              "description": "حجم ثابت 100×100 بكسل"
            },
            {
              "value": "200px 150px",
              "description": "حجم ثابت 200×150 بكسل"
            },
            {
              "value": "50% 50%",
              "description": "نصف حجم العنصر"
            },
            {
              "value": "100% 100%",
              "description": "نفس حجم العنصر (تمدد كامل)"
            },
            {
              "value": "100% auto",
              "description": "العرض كامل، الارتفاع تلقائي"
            },
            {
              "value": "auto 100%",
              "description": "العرض تلقائي، الارتفاع كامل"
            },
            {
              "value": "cover",
              "description": "تكبر الصورة لتغطي العنصر بالكامل (قد تُقص أجزاء من الصورة) - أشهر قيمة"
            },
            {
              "value": "contain",
              "description": "تكبر الصورة لتلائم العنصر مع الحفاظ على نسبها (قد تترك فراغات)"
            },
            {
              "value": "200% 200%",
              "description": "ضعف حجم العنصر - تكبير مفرط"
            },
            {
              "value": "150% 100%",
              "description": "تكبير أفقي فقط"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "background-attachment",
      "description": "يحدد هل تتحرك صورة الخلفية مع تمرير الصفحة أم تبقى ثابتة، يخلق تأثيرات بارالاكس",
      "properties": [
        {
          "name": "background-attachment",
          "description": "يحدد هل تتحرك صورة الخلفية مع تمرير الصفحة أم تبقى ثابتة",
          "values": [
            {
              "value": "scroll",
              "description": "تتحرك مع تمرير الصفحة (القيمة الافتراضية) - الصورة تتبع التمرير"
            },
            {
              "value": "fixed",
              "description": "تبقى ثابتة في مكانها عند التمرير (تأثير بارالاكس) - جميل للمشاهد"
            },
            {
              "value": "local",
              "description": "تتحرك مع تمرير محتوى العنصر نفسه - تتبع تمرير العنصر"
            }
          ]
        }
      ]
    },
    {
      "tag": "background-clip",
      "description": "يحدد إلى أي مدى تمتد الخلفية (تشمل الحواف، الهوامش الداخلية، أو المحتوى فقط)",
      "properties": [
        {
          "name": "background-clip",
          "description": "يحدد إلى أي مدى تمتد الخلفية",
          "values": [
            {
              "value": "border-box",
              "description": "تمتد الخلفية إلى الحواف الخارجية بما فيها الحافة (القيمة الافتراضية)"
            },
            {
              "value": "padding-box",
              "description": "تمتد الخلفية إلى الهوامش الداخلية فقط (لا تشمل الحافة)"
            },
            {
              "value": "content-box",
              "description": "تمتد الخلفية إلى المحتوى فقط (لا تشمل الحافة أو الهوامش الداخلية)"
            },
            {
              "value": "text",
              "description": "تظهر الخلفية خلف النص فقط (تأثير قطع النص) - تحتاج لـ color: transparent"
            }
          ]
        }
      ]
    },
    {
      "tag": "background-origin",
      "description": "يحدد النقطة المرجعية لبداية صورة الخلفية (من الحواف، الهوامش، أم المحتوى)",
      "properties": [
        {
          "name": "background-origin",
          "description": "يحدد النقطة المرجعية لبداية صورة الخلفية",
          "values": [
            {
              "value": "padding-box",
              "description": "تبدأ من الهوامش الداخلية (القيمة الافتراضية)"
            },
            {
              "value": "border-box",
              "description": "تبدأ من الحواف الخارجية"
            },
            {
              "value": "content-box",
              "description": "تبدأ من المحتوى"
            }
          ]
        }
      ]
    },
    {
      "tag": "opacity",
      "description": "يحدد شفافية العنصر بأكمله (النص والخلفية والحواف)، من 0 (شفاف بالكامل) إلى 1 (معتم)",
      "properties": [
        {
          "name": "opacity",
          "description": "يحدد شفافية العنصر بأكمله",
          "values": [
            {
              "value": "1",
              "description": "معتم بالكامل - لا شفافية (القيمة الافتراضية)"
            },
            {
              "value": "0.95",
              "description": "شفاف 5% - شبه معتم"
            },
            {
              "value": "0.9",
              "description": "شفاف 10%"
            },
            {
              "value": "0.85",
              "description": "شفاف 15%"
            },
            {
              "value": "0.8",
              "description": "شفاف 20%"
            },
            {
              "value": "0.75",
              "description": "شفاف 25%"
            },
            {
              "value": "0.7",
              "description": "شفاف 30%"
            },
            {
              "value": "0.65",
              "description": "شفاف 35%"
            },
            {
              "value": "0.6",
              "description": "شفاف 40%"
            },
            {
              "value": "0.55",
              "description": "شفاف 45%"
            },
            {
              "value": "0.5",
              "description": "شفاف 50% - نصف شفاف"
            },
            {
              "value": "0.45",
              "description": "شفاف 55%"
            },
            {
              "value": "0.4",
              "description": "شفاف 60%"
            },
            {
              "value": "0.35",
              "description": "شفاف 65%"
            },
            {
              "value": "0.3",
              "description": "شفاف 70%"
            },
            {
              "value": "0.25",
              "description": "شفاف 75%"
            },
            {
              "value": "0.2",
              "description": "شفاف 80%"
            },
            {
              "value": "0.15",
              "description": "شفاف 85%"
            },
            {
              "value": "0.1",
              "description": "شفاف 90% - شبه شفاف"
            },
            {
              "value": "0.05",
              "description": "شفاف 95%"
            },
            {
              "value": "0",
              "description": "شفاف بالكامل (غير مرئي) - يختفي العنصر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "accent-color",
      "description": "يحدد لون المميز لعناصر النموذج مثل مربعات الاختيار وأزرار الراديو والقوائم المنسدلة",
      "properties": [
        {
          "name": "accent-color",
          "description": "يحدد لون المميز لعناصر النموذج",
          "values": [
            {
              "value": "auto",
              "description": "يستخدم المتصفح لونه الافتراضي (القيمة الافتراضية)"
            },
            {
              "value": "red",
              "description": "لون أحمر لعناصر النموذج"
            },
            {
              "value": "blue",
              "description": "لون أزرق لعناصر النموذج"
            },
            {
              "value": "green",
              "description": "لون أخضر"
            },
            {
              "value": "#007bff",
              "description": "لون أزرق مخصص (Bootstrap)"
            },
            {
              "value": "#28a745",
              "description": "لون أخضر مخصص"
            },
            {
              "value": "#dc3545",
              "description": "لون أحمر مخصص"
            },
            {
              "value": "#ffc107",
              "description": "لون أصفر مخصص"
            },
            {
              "value": "#6f42c1",
              "description": "لون بنفسجي مخصص"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "background-blend-mode",
      "description": "يحدد كيفية مزج طبقات الخلفية المتعددة مع بعضها (عند وجود أكثر من صورة خلفية)",
      "properties": [
        {
          "name": "background-blend-mode",
          "description": "يحدد كيفية مزج طبقات الخلفية المتعددة مع بعضها",
          "values": [
            {
              "value": "normal",
              "description": "مزج عادي - لا تأثير خاص (القيمة الافتراضية)"
            },
            {
              "value": "multiply",
              "description": "ضرب الألوان - يغمق الصورة"
            },
            {
              "value": "screen",
              "description": "شاشة (تفتيح) - يفتح الصورة"
            },
            {
              "value": "overlay",
              "description": "تراكب - يزيد التباين"
            },
            {
              "value": "darken",
              "description": "تغميق - يختار اللون الأغمق"
            },
            {
              "value": "lighten",
              "description": "تفتيح - يختار اللون الأفتح"
            },
            {
              "value": "color-dodge",
              "description": "تفتيح الألوان - تأثير مشرق"
            },
            {
              "value": "color-burn",
              "description": "حرق الألوان - تأثير غامق"
            },
            {
              "value": "hard-light",
              "description": "ضوء صلب - تباين عالي"
            },
            {
              "value": "soft-light",
              "description": "ضوء ناعم - تباين منخفض"
            },
            {
              "value": "difference",
              "description": "فرق - تأثير عكسي"
            },
            {
              "value": "exclusion",
              "description": "استثناء - مشابه للفرق لكن أقل حدة"
            },
            {
              "value": "hue",
              "description": "تدرج لوني - يستخدم تدرج الطبقة العليا"
            },
            {
              "value": "saturation",
              "description": "تشبع - يستخدم تشبع الطبقة العليا"
            },
            {
              "value": "color",
              "description": "لون - يستخدم لون الطبقة العليا"
            },
            {
              "value": "luminosity",
              "description": "إضاءة - يستخدم إضاءة الطبقة العليا"
            }
          ]
        }
      ]
    },
    {
      "tag": "blend-modes",
      "description": "خصائص التحكم في مزج الألوان بين العناصر: isolation تخلق سياقاً منفصلاً، و mix-blend-mode تحدد كيفية مزج العنصر مع ما خلفه",
      "properties": [
        {
          "name": "isolation",
          "description": "يخلق سياق تركيب منفصل للعنصر، يمنع تأثير خلفيته على العناصر الفرعية (مهم مع mix-blend-mode)",
          "values": [
            {
              "value": "auto",
              "description": "لا سياق منفصل - المزج يؤثر على كل العناصر (القيمة الافتراضية)"
            },
            {
              "value": "isolate",
              "description": "يخلق سياق تركيب منفصل - يحمي العناصر الفرعية من مزج الخلفية"
            }
          ]
        },
        {
          "name": "mix-blend-mode",
          "description": "يحدد كيفية مزج لون العنصر مع لون الخلفية أو العناصر التي خلفه",
          "values": [
            {
              "value": "normal",
              "description": "مزج عادي - لا تأثير خاص (القيمة الافتراضية)"
            },
            {
              "value": "multiply",
              "description": "ضرب الألوان - يغمق الألوان"
            },
            {
              "value": "screen",
              "description": "شاشة (تفتيح) - يفتح الألوان"
            },
            {
              "value": "overlay",
              "description": "تراكب - يزيد التباين"
            },
            {
              "value": "darken",
              "description": "تغميق - يختار اللون الأغمق"
            },
            {
              "value": "lighten",
              "description": "تفتيح - يختار اللون الأفتح"
            },
            {
              "value": "color-dodge",
              "description": "تفتيح الألوان - تأثير مشرق"
            },
            {
              "value": "color-burn",
              "description": "حرق الألوان - تأثير غامق"
            },
            {
              "value": "hard-light",
              "description": "ضوء صلب - تباين عالي"
            },
            {
              "value": "soft-light",
              "description": "ضوء ناعم - تباين منخفض"
            },
            {
              "value": "difference",
              "description": "فرق - تأثير عكسي (مفيد للتصاميم الفنية)"
            },
            {
              "value": "exclusion",
              "description": "استثناء - مشابه للفرق لكن أقل حدة"
            },
            {
              "value": "hue",
              "description": "تدرج لوني - يستخدم تدرج العنصر العلوي"
            },
            {
              "value": "saturation",
              "description": "تشبع - يستخدم تشبع العنصر العلوي"
            },
            {
              "value": "color",
              "description": "لون - يستخدم لون العنصر العلوي مع إضاءة العنصر السفلي"
            },
            {
              "value": "luminosity",
              "description": "إضاءة - يستخدم إضاءة العنصر العلوي مع لون العنصر السفلي"
            }
          ]
        }
      ]
    },
    {
      "tag": "background-examples",
      "description": "أمثلة عملية متقدمة للألوان والخلفيات تجمع بين عدة خصائص",
      "properties": [
        {
          "name": "مثال 1 - خلفية متدرجة أنيقة",
          "description": "خلفية بتدرج خطي مع تباين جميل",
          "values": [
            {
              "value": ".gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }",
              "description": "تدرج بنفسجي - أزرق أنيق"
            },
            {
              "value": ".gradient-bg { background: linear-gradient(to right, #f093fb 0%, #f5576c 100%); }",
              "description": "تدرج وردي - أحمر"
            },
            {
              "value": ".gradient-bg { background: linear-gradient(45deg, #43e97b 0%, #38f9d7 100%); }",
              "description": "تدرج أخضر - فيروزي"
            }
          ]
        },
        {
          "name": "مثال 2 - صورة مع طبقة تعتيم",
          "description": "صورة خلفية مع طبقة شفافية لتحسين قراءة النص",
          "values": [
            {
              "value": ".hero { background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('hero.jpg') no-repeat center/cover; }",
              "description": "صورة مع طبقة تعتيم سوداء 50%"
            }
          ]
        },
        {
          "name": "مثال 3 - تأثير بارالاكس",
          "description": "خلفية ثابتة تتحرك ببطء مع التمرير",
          "values": [
            {
              "value": ".parallax { background: url('bg.jpg') no-repeat center/cover; background-attachment: fixed; }",
              "description": "تأثير بارالاكس جميل"
            }
          ]
        },
        {
          "name": "مثال 4 - قطع النص بالخلفية",
          "description": "نص مع خلفية متدرجة مقطوعة على النص",
          "values": [
            {
              "value": ".gradient-text { background: linear-gradient(45deg, #f093fb, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }",
              "description": "نص بتدرج لوني"
            }
          ]
        },
        {
          "name": "مثال 5 - خلفية بنقاط متكررة",
          "description": "نمط متكرر من النقاط للخلفية",
          "values": [
            {
              "value": ".dots { background: radial-gradient(circle at 50% 50%, #ccc 2px, transparent 2px); background-size: 20px 20px; background-color: #f8f9fa; }",
              "description": "خلفية بنمط نقطي"
            }
          ]
        }
      ]
    },
    {
      "tag": "background-tips",
      "description": "نصائح وإرشادات مهمة لاستخدام الألوان والخلفيات بشكل فعال",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الألوان والخلفيات",
          "values": [
            {
              "value": "استخدم صور خلفية مخففة",
              "description": "استخدم WebP بدلاً من PNG/JPG لتوفير الحجم"
            },
            {
              "value": "تجنب background-attachment: fixed",
              "description": "تسبب مشاكل أداء على الجوال، خاصة في Safari"
            },
            {
              "value": "استخدم التدرجات بدلاً من الصور",
              "description": "التدرجات أخف وزناً وأسرع في التحميل"
            },
            {
              "value": "حدد لون خلفية احتياطي",
              "description": "دائماً استخدم background-color مع background-image"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل الألوان والخلفيات قابلة للوصول",
          "values": [
            {
              "value": "احرص على تباين كافٍ",
              "description": "نسبة التباين يجب أن تكون 4.5:1 على الأقل للنص العادي"
            },
            {
              "value": "لا تعتمد على اللون فقط",
              "description": "استخدم إشارات إضافية بجانب اللون"
            },
            {
              "value": "دعم prefers-color-scheme",
              "description": "استخدم @media (prefers-color-scheme: dark) لضبط الألوان"
            },
            {
              "value": "استخدم forced-color-adjust: none",
              "description": "حافظ على الألوان المهمة في وضع الألوان القسري"
            }
          ]
        },
        {
          "name": "نصائح التصميم",
          "description": "نصائح لتصميم ألوان وخلفيات جذابة",
          "values": [
            {
              "value": "استخدم لوحة ألوان محدودة",
              "description": "2-3 ألوان رئيسية تكفي لتصميم احترافي"
            },
            {
              "value": "استخدم التدرجات الحديثة",
              "description": "التدرجات تضيف عمقاً واحترافية للتصاميم"
            },
            {
              "value": "جرب تأثير الـ Glassmorphism",
              "description": "استخدم خلفيات شفافة مع blur للتأثير الزجاجي"
            },
            {
              "value": "استخدم الظلال الناعمة",
              "description": "box-shadow بألوان خفيفة تعطي عمقاً"
            }
          ]
        }
      ]
    }
  ],
  "textFonts": [
    {
      "tag": "font",
      "description": "يحدد خصائص الخط بشكل مختصر، يشمل الحجم، النمط، الوزن، العائلة",
      "properties": [
        {
          "name": "font-family",
          "description": "يحدد نوع الخط المستخدم في النص، يمكن تحديد عدة خطوط احتياطية بفاصلة، والأخير يجب أن يكون اسم عائلة عامة",
          "values": [
            {
              "value": "Arial, Helvetica, sans-serif",
              "description": "خط Arial أولاً، ثم Helvetica، ثم أي خط sans-serif"
            },
            {
              "value": "Helvetica, Arial, sans-serif",
              "description": "خط Helvetica أولاً"
            },
            {
              "value": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              "description": "قائمة خطوط احتياطية متعددة للويندوز"
            },
            {
              "value": "'SF Pro Display', 'Helvetica Neue', Arial, sans-serif",
              "description": "خطوط أجهزة آبل"
            },
            {
              "value": "'Inter', 'Segoe UI', sans-serif",
              "description": "خط Inter مع احتياطيات"
            },
            {
              "value": "'Roboto', 'Helvetica Neue', sans-serif",
              "description": "خط Roboto (أندرويد)"
            },
            {
              "value": "'Open Sans', 'Helvetica Neue', sans-serif",
              "description": "خط Open Sans"
            },
            {
              "value": "'Noto Sans', sans-serif",
              "description": "خط يدعم كل اللغات"
            },
            {
              "value": "'Times New Roman', Times, serif",
              "description": "خط Times New Roman أولاً، ثم Times، ثم أي serif"
            },
            {
              "value": "'Georgia', 'Times New Roman', serif",
              "description": "خط Georgia (ممتاز للشاشات)"
            },
            {
              "value": "'Merriweather', 'Georgia', serif",
              "description": "خط Merriweather"
            },
            {
              "value": "'Playfair Display', 'Georgia', serif",
              "description": "خط Playfair Display (راٍق)"
            },
            {
              "value": "'Palatino', 'Georgia', serif",
              "description": "خط Palatino"
            },
            {
              "value": "'Baskerville', 'Georgia', serif",
              "description": "خط Baskerville"
            },
            {
              "value": "'Courier New', Courier, monospace",
              "description": "خط Courier New"
            },
            {
              "value": "'Consolas', 'Courier New', monospace",
              "description": "خط Consolas (مناسب للبرمجة)"
            },
            {
              "value": "'Fira Code', 'Consolas', monospace",
              "description": "خط Fira Code مع دعم الـ Ligatures"
            },
            {
              "value": "'JetBrains Mono', 'Consolas', monospace",
              "description": "خط JetBrains Mono"
            },
            {
              "value": "'Source Code Pro', monospace",
              "description": "خط Source Code Pro"
            },
            {
              "value": "'Noto Naskh Arabic', 'Scheherazade', serif",
              "description": "خط عربي تقليدي"
            },
            {
              "value": "'Noto Kufi Arabic', 'Amiri', sans-serif",
              "description": "خط عربي كوفي"
            },
            {
              "value": "'Tahoma', 'Segoe UI', sans-serif",
              "description": "خط Tahoma (يدعم العربية)"
            },
            {
              "value": "'Traditional Arabic', 'Arial', sans-serif",
              "description": "خط عربي تقليدي"
            },
            {
              "value": "'Amiri', 'Times New Roman', serif",
              "description": "خط Amiri (جميل للعربية)"
            },
            {
              "value": "'Cairo', sans-serif",
              "description": "خط Cairo (حديث)"
            },
            {
              "value": "'Rubik', sans-serif",
              "description": "خط Rubik (يدعم العربية)"
            },
            {
              "value": "serif",
              "description": "أي خط من عائلة serif (ذات زوائد) - كخيار أخير"
            },
            {
              "value": "sans-serif",
              "description": "أي خط من عائلة sans-serif (بدون زوائد)"
            },
            {
              "value": "monospace",
              "description": "أي خط من عائلة monospace (جميع الحروف بنفس العرض)"
            },
            {
              "value": "cursive",
              "description": "أي خط من عائلة cursive (يشبه الكتابة اليدوية)"
            },
            {
              "value": "fantasy",
              "description": "أي خط من عائلة fantasy (خطوط زخرفية)"
            },
            {
              "value": "system-ui",
              "description": "الخط الافتراضي لنظام التشغيل"
            },
            {
              "value": "ui-serif",
              "description": "خط serif الافتراضي للنظام"
            },
            {
              "value": "ui-sans-serif",
              "description": "خط sans-serif الافتراضي للنظام"
            },
            {
              "value": "ui-monospace",
              "description": "خط monospace الافتراضي للنظام"
            },
            {
              "value": "ui-rounded",
              "description": "خط مدور الافتراضي للنظام"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-size",
          "description": "يحدد حجم الخط في النص، يمكن استخدام وحدات مختلفة (px, em, rem, %, vw, vh)",
          "values": [
            {
              "value": "8px",
              "description": "حجم 8 بكسل - صغير جداً"
            },
            {
              "value": "10px",
              "description": "حجم 10 بكسل"
            },
            {
              "value": "12px",
              "description": "حجم 12 بكسل"
            },
            {
              "value": "14px",
              "description": "حجم 14 بكسل"
            },
            {
              "value": "16px",
              "description": "حجم 16 بكسل (الحجم الافتراضي في معظم المتصفحات)"
            },
            {
              "value": "18px",
              "description": "حجم 18 بكسل"
            },
            {
              "value": "20px",
              "description": "حجم 20 بكسل"
            },
            {
              "value": "24px",
              "description": "حجم 24 بكسل"
            },
            {
              "value": "28px",
              "description": "حجم 28 بكسل"
            },
            {
              "value": "32px",
              "description": "حجم 32 بكسل"
            },
            {
              "value": "36px",
              "description": "حجم 36 بكسل"
            },
            {
              "value": "40px",
              "description": "حجم 40 بكسل"
            },
            {
              "value": "48px",
              "description": "حجم 48 بكسل"
            },
            {
              "value": "56px",
              "description": "حجم 56 بكسل"
            },
            {
              "value": "64px",
              "description": "حجم 64 بكسل"
            },
            {
              "value": "72px",
              "description": "حجم 72 بكسل"
            },
            {
              "value": "96px",
              "description": "حجم 96 بكسل"
            },
            {
              "value": "144px",
              "description": "حجم 144 بكسل"
            },
            {
              "value": "0.5em",
              "description": "نصف حجم الخط الأب"
            },
            {
              "value": "0.75em",
              "description": "75% من حجم الخط الأب"
            },
            {
              "value": "0.875em",
              "description": "87.5% من حجم الخط الأب (14/16)"
            },
            {
              "value": "1em",
              "description": "نفس حجم الخط الأب"
            },
            {
              "value": "1.2em",
              "description": "120% من حجم الخط الأب"
            },
            {
              "value": "1.5em",
              "description": "150% من حجم الخط الأب"
            },
            {
              "value": "2em",
              "description": "ضعف حجم الخط الأب"
            },
            {
              "value": "3em",
              "description": "ثلاثة أضعاف حجم الخط الأب"
            },
            {
              "value": "0.5rem",
              "description": "نصف حجم الخط الجذري"
            },
            {
              "value": "0.75rem",
              "description": "75% من حجم الخط الجذري"
            },
            {
              "value": "1rem",
              "description": "نفس حجم الخط الجذري (عادة 16px)"
            },
            {
              "value": "1.25rem",
              "description": "125% من حجم الخط الجذري"
            },
            {
              "value": "1.5rem",
              "description": "150% من حجم الخط الجذري"
            },
            {
              "value": "2rem",
              "description": "ضعف حجم الخط الجذري"
            },
            {
              "value": "3rem",
              "description": "ثلاثة أضعاف حجم الخط الجذري"
            },
            {
              "value": "50%",
              "description": "50% من حجم الخط الأب"
            },
            {
              "value": "75%",
              "description": "75% من حجم الخط الأب"
            },
            {
              "value": "100%",
              "description": "نفس حجم الخط الأب"
            },
            {
              "value": "125%",
              "description": "125% من حجم الخط الأب"
            },
            {
              "value": "150%",
              "description": "150% من حجم الخط الأب"
            },
            {
              "value": "200%",
              "description": "200% من حجم الخط الأب"
            },
            {
              "value": "300%",
              "description": "300% من حجم الخط الأب"
            },
            {
              "value": "1vw",
              "description": "1% من عرض نافذة المتصفح"
            },
            {
              "value": "2vw",
              "description": "2% من عرض نافذة المتصفح"
            },
            {
              "value": "1vh",
              "description": "1% من ارتفاع نافذة المتصفح"
            },
            {
              "value": "2vh",
              "description": "2% من ارتفاع نافذة المتصفح"
            },
            {
              "value": "xx-small",
              "description": "صغير جداً جداً (≈9px)"
            },
            {
              "value": "x-small",
              "description": "صغير جداً (≈10px)"
            },
            {
              "value": "small",
              "description": "صغير (≈12px)"
            },
            {
              "value": "medium",
              "description": "حجم متوسط - القيمة الافتراضية (≈16px)"
            },
            {
              "value": "large",
              "description": "حجم كبير (≈18px)"
            },
            {
              "value": "x-large",
              "description": "كبير جداً (≈24px)"
            },
            {
              "value": "xx-large",
              "description": "كبير جداً جداً (≈32px)"
            },
            {
              "value": "xxx-large",
              "description": "كبير جداً جداً جداً (≈48px)"
            },
            {
              "value": "larger",
              "description": "أكبر من حجم الأب بنسبة محددة"
            },
            {
              "value": "smaller",
              "description": "أصغر من حجم الأب بنسبة محددة"
            },
            {
              "value": "clamp(12px, 2vw, 24px)",
              "description": "حجم بين 12 و24 بكسل، يتغير مع عرض الشاشة"
            },
            {
              "value": "clamp(14px, 1.5vw, 20px)",
              "description": "حجم مرن للعناوين"
            },
            {
              "value": "clamp(10px, 1vw, 16px)",
              "description": "حجم مرن للنصوص الصغيرة"
            },
            {
              "value": "min(2vw, 24px)",
              "description": "أصغر بين 2vw و24px"
            },
            {
              "value": "max(12px, 1vw)",
              "description": "أكبر بين 12px و1vw"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-weight",
          "description": "يحدد سمك الخط (درجة الاسوداد) من رفيع إلى سميك جداً، يعتمد على دعم الخط للأوزان المختلفة",
          "values": [
            {
              "value": "normal",
              "description": "وزن عادي (400) - القيمة الافتراضية"
            },
            {
              "value": "bold",
              "description": "وزن سميك (700) - الأكثر استخداماً للعناوين"
            },
            {
              "value": "lighter",
              "description": "أخف من وزن الأب - يتجاوز الوزن الوراثي"
            },
            {
              "value": "bolder",
              "description": "أثقل من وزن الأب - يتجاوز الوزن الوراثي"
            },
            {
              "value": "100",
              "description": "رفيع جداً (Thin / Hairline)"
            },
            {
              "value": "200",
              "description": "رفيع (Extra Light / Ultra Light)"
            },
            {
              "value": "300",
              "description": "خفيف (Light)"
            },
            {
              "value": "400",
              "description": "عادي (Normal / Regular) - القيمة الافتراضية"
            },
            {
              "value": "500",
              "description": "متوسط (Medium)"
            },
            {
              "value": "600",
              "description": "شبه سميك (Semi Bold / Demi Bold)"
            },
            {
              "value": "700",
              "description": "سميك (Bold) - الأكثر شيوعاً للعناوين"
            },
            {
              "value": "800",
              "description": "سميك جداً (Extra Bold / Ultra Bold)"
            },
            {
              "value": "900",
              "description": "أسود (Black / Heavy) - أثقل وزن ممكن"
            }
          ]
        },
        {
          "name": "font-style",
          "description": "يحدد نمط الخط (مائل أو عادي)، يستخدم للتأكيد أو للتصميم",
          "values": [
            {
              "value": "normal",
              "description": "خط عادي (غير مائل) - القيمة الافتراضية"
            },
            {
              "value": "italic",
              "description": "خط مائل (Italic) - نمط مائل مصمم خصيصاً للخط"
            },
            {
              "value": "oblique",
              "description": "خط مائل بشكل مائل (Oblique) - إمالة آلية للخط"
            },
            {
              "value": "oblique 15deg",
              "description": "خط مائل بزاوية 15 درجة"
            },
            {
              "value": "oblique -15deg",
              "description": "خط مائل بزاوية 15 درجة في الاتجاه المعاكس"
            }
          ]
        },
        {
          "name": "font-variant",
          "description": "يتحكم في استخدام الأحرف الكبيرة الصغيرة (Small Caps) وغيرها من المتغيرات المتقدمة للخط",
          "values": [
            {
              "value": "normal",
              "description": "طبيعي - القيمة الافتراضية"
            },
            {
              "value": "small-caps",
              "description": "يحول النص إلى أحرف كبيرة صغيرة الحجم (Small Caps) - أنيقة للعناوين"
            },
            {
              "value": "all-small-caps",
              "description": "جميع الأحرف كبيرة صغيرة الحجم (حتى الأحرف الصغيرة الأصلية)"
            },
            {
              "value": "petite-caps",
              "description": "أحرف كبيرة صغيرة جداً (Petite Caps) - أصغر من small-caps"
            },
            {
              "value": "all-petite-caps",
              "description": "جميع الأحرف كبيرة صغيرة جداً"
            },
            {
              "value": "unicase",
              "description": "مزيج من الأحرف الكبيرة والصغيرة بطريقة موحدة"
            },
            {
              "value": "titling-caps",
              "description": "أحرف كبيرة مناسبة للعناوين الطويلة (Titling Caps)"
            }
          ]
        },
        {
          "name": "font-stretch",
          "description": "يحدد مدى انبساط أو انضغاط الخط، يجعله أعرض أو أضيق (يعتمد على دعم الخط)",
          "values": [
            {
              "value": "normal",
              "description": "عرض طبيعي - القيمة الافتراضية"
            },
            {
              "value": "ultra-condensed",
              "description": "مضغوط جداً - أضيق عرض ممكن"
            },
            {
              "value": "extra-condensed",
              "description": "مضغوط إضافي"
            },
            {
              "value": "condensed",
              "description": "مضغوط"
            },
            {
              "value": "semi-condensed",
              "description": "مضغوط قليلاً"
            },
            {
              "value": "semi-expanded",
              "description": "منبسط قليلاً"
            },
            {
              "value": "expanded",
              "description": "منبسط"
            },
            {
              "value": "extra-expanded",
              "description": "منبسط إضافي"
            },
            {
              "value": "ultra-expanded",
              "description": "منبسط جداً - أعرض عرض ممكن"
            }
          ]
        },
        {
          "name": "font-size-adjust",
          "description": "يضبط حجم الخط بحيث تحافظ الأحرف الصغيرة على نفس الحجم النسبي عند تغيير الخطوط",
          "values": [
            {
              "value": "none",
              "description": "بدون ضبط - القيمة الافتراضية"
            },
            {
              "value": "0.4",
              "description": "نسبة ضبط 0.4"
            },
            {
              "value": "0.48",
              "description": "نسبة ضبط مثالية لخط Times New Roman"
            },
            {
              "value": "0.5",
              "description": "نسبة ضبط 0.5"
            },
            {
              "value": "0.52",
              "description": "نسبة ضبط مثالية لخط Arial"
            },
            {
              "value": "0.58",
              "description": "نسبة ضبط مثالية لخط Helvetica"
            },
            {
              "value": "0.66",
              "description": "نسبة ضبط مثالية لخط Verdana"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-kerning",
          "description": "يتحكم في تباعد الأحرف (Kerning) لتحسين قابلية القراءة وجمالية النص",
          "values": [
            {
              "value": "auto",
              "description": "يترك المتصفح يقرر متى يستخدم التباعد - القيمة الافتراضية"
            },
            {
              "value": "normal",
              "description": "يفعل تباعد الأحرف (Kerning) - تحسين جودة النص"
            },
            {
              "value": "none",
              "description": "يعطل تباعد الأحرف - قد يقلل جودة النص"
            }
          ]
        },
        {
          "name": "font-synthesis",
          "description": "يحدد ما إذا كان المتصفح يمكنه تركيب خطوط بديلة (مائل أو سميك) إذا لم تكن موجودة في الخط الأصلي",
          "values": [
            {
              "value": "none",
              "description": "لا يركب خطوطاً بديلة - يستخدم فقط ما هو موجود"
            },
            {
              "value": "weight",
              "description": "يسمح بتركيب وزن بديل (سميك) إذا لم يكن موجوداً"
            },
            {
              "value": "style",
              "description": "يسمح بتركيب نمط بديل (مائل) إذا لم يكن موجوداً"
            },
            {
              "value": "small-caps",
              "description": "يسمح بتركيب أحرف كبيرة صغيرة إذا لم تكن موجودة"
            },
            {
              "value": "weight style",
              "description": "يسمح بتركيب وزن ونمط معاً"
            },
            {
              "value": "weight style small-caps",
              "description": "يسمح بتركيب الثلاثة معاً"
            }
          ]
        },
        {
          "name": "font-variant-ligatures",
          "description": "يتحكم في ربط الحروف في النصوص (Ligatures) مثل 'fi' و 'fl' في الإنجليزية، والربط في العربية",
          "values": [
            {
              "value": "normal",
              "description": "ربط عادي (افتراضي) - يستخدم الربط الشائع"
            },
            {
              "value": "none",
              "description": "لا يربط الحروف - كل حرف منفصل"
            },
            {
              "value": "common-ligatures",
              "description": "يربط الحروف الشائعة (مثل fi, fl, ff)"
            },
            {
              "value": "no-common-ligatures",
              "description": "يعطل الربط الشائع"
            },
            {
              "value": "discretionary-ligatures",
              "description": "يربط الحروف التجميلية (مثل ct, st)"
            },
            {
              "value": "no-discretionary-ligatures",
              "description": "يعطل الربط التجميلي"
            },
            {
              "value": "historical-ligatures",
              "description": "يربط الحروف التاريخية (مثل الألمانية القديمة)"
            },
            {
              "value": "no-historical-ligatures",
              "description": "يعطل الربط التاريخي"
            },
            {
              "value": "contextual",
              "description": "يربط حسب السياق (مناسب للعربية)"
            },
            {
              "value": "no-contextual",
              "description": "يعطل الربط السياقي"
            }
          ]
        },
        {
          "name": "font-variant-numeric",
          "description": "يتحكم في شكل الأرقام (أرقام تقليدية أو ذات ارتفاع متساوٍ) والكسور",
          "values": [
            {
              "value": "normal",
              "description": "أرقام عادية - القيمة الافتراضية"
            },
            {
              "value": "lining-nums",
              "description": "أرقام ذات ارتفاع متساوٍ (كلها بنفس الارتفاع) - مناسبة للجداول"
            },
            {
              "value": "oldstyle-nums",
              "description": "أرقام تقليدية (بعضها ينزل تحت السطر) - مناسبة للنصوص"
            },
            {
              "value": "proportional-nums",
              "description": "أرقام ذات عرض متناسب - كل رقم بعرض مختلف"
            },
            {
              "value": "tabular-nums",
              "description": "أرقام ذات عرض ثابت - كل الأرقام بنفس العرض (مناسبة للجداول)"
            },
            {
              "value": "diagonal-fractions",
              "description": "كسور مائلة (½, ¾) - تصميم مائل"
            },
            {
              "value": "stacked-fractions",
              "description": "كسور متراصة (مع بعضها)"
            },
            {
              "value": "ordinal",
              "description": "استخدام الترتيب (1st, 2nd, 3rd)"
            },
            {
              "value": "slashed-zero",
              "description": "رقم صفر بشق مائل (لتجنب الخلط مع O)"
            }
          ]
        },
        {
          "name": "font-variant-position",
          "description": "يتحكم في موقع النص كمرتفع أو منخفض (Superscript/Subscript)",
          "values": [
            {
              "value": "normal",
              "description": "موقع طبيعي - القيمة الافتراضية"
            },
            {
              "value": "super",
              "description": "مرتفع (أعلى من السطر) - مثل <sup>"
            },
            {
              "value": "sub",
              "description": "منخفض (أسفل السطر) - مثل <sub>"
            }
          ]
        },
        {
          "name": "font-variant-alternates",
          "description": "يسمح باستخدام أشكال بديلة من الحروف (مثل الحروف المزخرفة) في الخطوط التي تدعمها",
          "values": [
            {
              "value": "normal",
              "description": "أشكال عادية - القيمة الافتراضية"
            },
            {
              "value": "historical-forms",
              "description": "أشكال تاريخية (مثل الأحرف الألمانية القديمة)"
            },
            {
              "value": "stylistic(1)",
              "description": "أسلوب معين رقم 1 (حسب الخط)"
            },
            {
              "value": "stylistic(2)",
              "description": "أسلوب معين رقم 2 (حسب الخط)"
            },
            {
              "value": "stylistic(3)",
              "description": "أسلوب معين رقم 3 (حسب الخط)"
            },
            {
              "value": "swash(1)",
              "description": "أسلوب مزخرف (Swash) رقم 1"
            },
            {
              "value": "ornaments(1)",
              "description": "زخارف رقم 1"
            },
            {
              "value": "annotation(1)",
              "description": "تعليقات توضيحية رقم 1"
            }
          ],
          "freeInput": true
        },
        {
          "name": "font-display",
          "description": "يحدد كيف يتصرف المتصفح أثناء تحميل خط مخصص (@font-face) قبل اكتمال تنزيله",
          "values": [
            {
              "value": "auto",
              "description": "سلوك المتصفح الافتراضي (عادة block)"
            },
            {
              "value": "swap",
              "description": "يعرض خطاً احتياطياً فوراً ثم يستبدله بالخط المخصص عند اكتمال تحميله - الأكثر شيوعاً"
            },
            {
              "value": "block",
              "description": "يخفي النص لفترة قصيرة (3 ثوان) بانتظار الخط قبل عرضه"
            },
            {
              "value": "fallback",
              "description": "فترة انتظار قصيرة (100ms) ثم يستخدم الخط الاحتياطي إذا تأخر التحميل"
            },
            {
              "value": "optional",
              "description": "يستخدم الخط المخصص فقط إذا كان محملاً بسرعة (100ms)، وإلا يبقى على الاحتياطي نهائياً"
            }
          ]
        },
        {
          "name": "font-variation-settings",
          "description": "يتحكم في محاور الخطوط المتغيرة (Variable Fonts) مثل الوزن أو العرض بدقة عالية",
          "values": [
            {
              "value": "normal",
              "description": "الإعدادات الافتراضية للخط - القيمة الافتراضية"
            },
            {
              "value": "'wght' 550",
              "description": "ضبط محور الوزن (Weight) إلى قيمة دقيقة 550"
            },
            {
              "value": "'wght' 700",
              "description": "ضبط الوزن إلى 700 (Bold)"
            },
            {
              "value": "'wdth' 80",
              "description": "ضبط محور العرض (Width) إلى 80%"
            },
            {
              "value": "'wght' 700, 'wdth' 80",
              "description": "ضبط الوزن والعرض معاً"
            },
            {
              "value": "'wght' 300, 'wdth' 120",
              "description": "وزن خفيف وعرض منبسط"
            },
            {
              "value": "'opsz' 24",
              "description": "ضبط محور البصريات (Optical Size)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "text",
      "description": "خصائص تنسيق النصوص (المحاذاة، التزيين، الظل، التباعد، إلخ)",
      "properties": [
        {
          "name": "color",
          "description": "يحدد لون النص، يمكن استخدام أي نظام ألوان (أسماء، Hex، RGB، HSL)",
          "values": [
            {
              "value": "black",
              "description": "أسود - القيمة الافتراضية"
            },
            {
              "value": "white",
              "description": "أبيض"
            },
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            },
            {
              "value": "green",
              "description": "أخضر"
            },
            {
              "value": "yellow",
              "description": "أصفر"
            },
            {
              "value": "orange",
              "description": "برتقالي"
            },
            {
              "value": "purple",
              "description": "بنفسجي"
            },
            {
              "value": "pink",
              "description": "وردي"
            },
            {
              "value": "gray",
              "description": "رمادي"
            },
            {
              "value": "currentColor",
              "description": "لون العنصر الأب - مفيد للتوحيد"
            },
            {
              "value": "transparent",
              "description": "شفاف - النص غير مرئي"
            },
            {
              "value": "#000000",
              "description": "أسود"
            },
            {
              "value": "#ffffff",
              "description": "أبيض"
            },
            {
              "value": "#333333",
              "description": "رمادي غامق"
            },
            {
              "value": "#666666",
              "description": "رمادي متوسط"
            },
            {
              "value": "#999999",
              "description": "رمادي فاتح"
            },
            {
              "value": "#cccccc",
              "description": "رمادي فاتح جداً"
            },
            {
              "value": "#007bff",
              "description": "أزرق Bootstrap"
            },
            {
              "value": "#28a745",
              "description": "أخضر Bootstrap"
            },
            {
              "value": "#dc3545",
              "description": "أحمر Bootstrap"
            },
            {
              "value": "#ffc107",
              "description": "أصفر Bootstrap"
            },
            {
              "value": "#6f42c1",
              "description": "بنفسجي Bootstrap"
            },
            {
              "value": "rgb(0, 0, 0)",
              "description": "أسود"
            },
            {
              "value": "rgb(255, 255, 255)",
              "description": "أبيض"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر"
            },
            {
              "value": "rgba(255, 0, 0, 0.5)",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "rgba(0, 0, 0, 0.5)",
              "description": "أسود شفاف 50%"
            },
            {
              "value": "hsl(0, 100%, 50%)",
              "description": "أحمر"
            },
            {
              "value": "hsl(240, 100%, 50%)",
              "description": "أزرق"
            },
            {
              "value": "hsla(0, 100%, 50%, 0.5)",
              "description": "أحمر شفاف 50%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "line-height",
          "description": "يحدد المسافة العمودية بين سطور النص (ارتفاع السطر)، يؤثر على قابلية القراءة",
          "values": [
            {
              "value": "normal",
              "description": "ارتفاع طبيعي (عادة 1.2) - القيمة الافتراضية"
            },
            {
              "value": "1",
              "description": "ارتفاع يساوي حجم الخط - مدمج جداً"
            },
            {
              "value": "1.2",
              "description": "ارتفاع 1.2 مرة من حجم الخط"
            },
            {
              "value": "1.4",
              "description": "ارتفاع 1.4 مرة - قراءة مريحة"
            },
            {
              "value": "1.5",
              "description": "ارتفاع 1.5 مرة - قراءة مريحة جداً"
            },
            {
              "value": "1.6",
              "description": "ارتفاع 1.6 مرة"
            },
            {
              "value": "1.8",
              "description": "ارتفاع 1.8 مرة - مريح للقراءة الطويلة"
            },
            {
              "value": "2",
              "description": "ارتفاع ضعف حجم الخط - واسع جداً"
            },
            {
              "value": "24px",
              "description": "ارتفاع ثابت 24 بكسل"
            },
            {
              "value": "150%",
              "description": "ارتفاع 150% من حجم الخط"
            },
            {
              "value": "200%",
              "description": "ارتفاع 200% من حجم الخط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "letter-spacing",
          "description": "يحدد المسافة بين الأحرف (تباعد الحروف)، يؤثر على كثافة النص",
          "values": [
            {
              "value": "normal",
              "description": "تباعد طبيعي حسب الخط - القيمة الافتراضية"
            },
            {
              "value": "0.5px",
              "description": "زيادة التباعد بمقدار 0.5 بكسل"
            },
            {
              "value": "1px",
              "description": "زيادة التباعد بمقدار 1 بكسل"
            },
            {
              "value": "2px",
              "description": "زيادة التباعد بمقدار 2 بكسل"
            },
            {
              "value": "3px",
              "description": "زيادة التباعد بمقدار 3 بكسل"
            },
            {
              "value": "5px",
              "description": "زيادة التباعد بمقدار 5 بكسل"
            },
            {
              "value": "-0.5px",
              "description": "تقريب الحروف بمقدار 0.5 بكسل"
            },
            {
              "value": "-1px",
              "description": "تقريب الحروف بمقدار 1 بكسل"
            },
            {
              "value": "0.05em",
              "description": "زيادة التباعد بنسبة 5% من حجم الخط"
            },
            {
              "value": "0.1em",
              "description": "زيادة التباعد بنسبة 10% من حجم الخط"
            },
            {
              "value": "0.2em",
              "description": "زيادة التباعد بنسبة 20% من حجم الخط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "word-spacing",
          "description": "يحدد المسافة بين الكلمات في النص، يؤثر على كثافة النص",
          "values": [
            {
              "value": "normal",
              "description": "تباعد طبيعي حسب الخط - القيمة الافتراضية"
            },
            {
              "value": "1px",
              "description": "زيادة التباعد بين الكلمات بمقدار 1 بكسل"
            },
            {
              "value": "2px",
              "description": "زيادة التباعد بمقدار 2 بكسل"
            },
            {
              "value": "5px",
              "description": "زيادة التباعد بمقدار 5 بكسل"
            },
            {
              "value": "-1px",
              "description": "تقريب الكلمات بمقدار 1 بكسل"
            },
            {
              "value": "-2px",
              "description": "تقريب الكلمات بمقدار 2 بكسل"
            },
            {
              "value": "0.1em",
              "description": "زيادة التباعد بنسبة 10% من حجم الخط"
            },
            {
              "value": "0.2em",
              "description": "زيادة التباعد بنسبة 20% من حجم الخط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-align",
          "description": "يحدد محاذاة النص داخل العنصر (يسار، يمين، وسط، أو ضبط)",
          "values": [
            {
              "value": "left",
              "description": "محاذاة إلى اليسار - القيمة الافتراضية في اللغات الأفقية"
            },
            {
              "value": "right",
              "description": "محاذاة إلى اليمين"
            },
            {
              "value": "center",
              "description": "محاذاة إلى المنتصف - شائع للعناوين"
            },
            {
              "value": "justify",
              "description": "ضبط النص بحيث يملأ العرض بالكامل - مناسب للفقرات"
            },
            {
              "value": "start",
              "description": "محاذاة إلى بداية اتجاه النص (يسار في العربية، يمين في الإنجليزية)"
            },
            {
              "value": "end",
              "description": "محاذاة إلى نهاية اتجاه النص (يمين في العربية، يسار في الإنجليزية)"
            },
            {
              "value": "justify-all",
              "description": "ضبط النص بما في ذلك السطر الأخير"
            },
            {
              "value": "match-parent",
              "description": "يطابق محاذاة العنصر الأب"
            }
          ]
        },
        {
          "name": "text-align-last",
          "description": "يحدد محاذاة السطر الأخير في النص المضبوط (justify)",
          "values": [
            {
              "value": "auto",
              "description": "يتبع text-align - القيمة الافتراضية"
            },
            {
              "value": "left",
              "description": "محاذاة السطر الأخير إلى اليسار"
            },
            {
              "value": "right",
              "description": "محاذاة السطر الأخير إلى اليمين"
            },
            {
              "value": "center",
              "description": "محاذاة السطر الأخير إلى المنتصف"
            },
            {
              "value": "justify",
              "description": "ضبط السطر الأخير أيضاً"
            },
            {
              "value": "start",
              "description": "محاذاة إلى بداية الاتجاه"
            },
            {
              "value": "end",
              "description": "محاذاة إلى نهاية الاتجاه"
            }
          ]
        },
        {
          "name": "text-decoration",
          "description": "يضيف زخرفة للنص مثل خط تحته أو فوقه أو خط وسطه (اختصار شامل)",
          "values": [
            {
              "value": "none",
              "description": "بدون زخرفة - القيمة الافتراضية"
            },
            {
              "value": "underline",
              "description": "خط تحت النص - يستخدم للروابط"
            },
            {
              "value": "overline",
              "description": "خط فوق النص"
            },
            {
              "value": "line-through",
              "description": "خط في وسط النص (يتوسطه) - يستخدم للنصوص الملغاة"
            },
            {
              "value": "blink",
              "description": "نص وامض (غير مستحسن)"
            },
            {
              "value": "underline overline",
              "description": "خط تحت وفوق النص معاً"
            },
            {
              "value": "underline wavy red",
              "description": "خط أحمر مموج تحت النص"
            },
            {
              "value": "underline dotted blue",
              "description": "خط أزرق منقط تحت النص"
            },
            {
              "value": "underline double #007bff",
              "description": "خط مزدوج أزرق تحت النص"
            },
            {
              "value": "line-through wavy red",
              "description": "خط أحمر مموج في وسط النص"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-decoration-line",
          "description": "يحدد نوع خط الزخرفة (تحت، فوق، وسط، أو إلغاء)",
          "values": [
            {
              "value": "none",
              "description": "بدون خط - القيمة الافتراضية"
            },
            {
              "value": "underline",
              "description": "خط تحت النص"
            },
            {
              "value": "overline",
              "description": "خط فوق النص"
            },
            {
              "value": "line-through",
              "description": "خط في وسط النص"
            },
            {
              "value": "blink",
              "description": "نص وامض (غير مستحسن)"
            }
          ]
        },
        {
          "name": "text-decoration-style",
          "description": "يحدد نمط خط الزخرفة (صلب، متقطع، منقط، مموج، مزدوج)",
          "values": [
            {
              "value": "solid",
              "description": "خط صلب - القيمة الافتراضية"
            },
            {
              "value": "double",
              "description": "خط مزدوج"
            },
            {
              "value": "dotted",
              "description": "خط منقط"
            },
            {
              "value": "dashed",
              "description": "خط متقطع"
            },
            {
              "value": "wavy",
              "description": "خط مموج - يعطي مظهراً ديناميكياً"
            }
          ]
        },
        {
          "name": "text-decoration-color",
          "description": "يحدد لون خط الزخرفة بشكل منفصل عن لون النص",
          "values": [
            {
              "value": "currentColor",
              "description": "نفس لون النص - القيمة الافتراضية"
            },
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            },
            {
              "value": "#007bff",
              "description": "أزرق مخصص"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر (RGB)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-decoration-thickness",
          "description": "يحدد سمك خط الزخرفة",
          "values": [
            {
              "value": "auto",
              "description": "يحسب المتصفح السمك تلقائياً - القيمة الافتراضية"
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
              "value": "3px",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "0.05em",
              "description": "سمك 5% من حجم الخط"
            },
            {
              "value": "0.1em",
              "description": "سمك 10% من حجم الخط"
            },
            {
              "value": "from-font",
              "description": "يستخدم سمك الخط الموصى به من ملف الخط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-underline-offset",
          "description": "يحدد المسافة بين الخط تحت النص والنص نفسه",
          "values": [
            {
              "value": "auto",
              "description": "يحسب المتصفح المسافة تلقائياً - القيمة الافتراضية"
            },
            {
              "value": "1px",
              "description": "مسافة 1 بكسل"
            },
            {
              "value": "2px",
              "description": "مسافة 2 بكسل"
            },
            {
              "value": "3px",
              "description": "مسافة 3 بكسل"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "0.1em",
              "description": "مسافة 10% من حجم الخط"
            },
            {
              "value": "0.2em",
              "description": "مسافة 20% من حجم الخط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-transform",
          "description": "يحول النص إلى أحرف كبيرة أو صغيرة أو العكس، مفيد لتوحيد تنسيق النصوص",
          "values": [
            {
              "value": "none",
              "description": "يبقي النص كما هو - القيمة الافتراضية"
            },
            {
              "value": "uppercase",
              "description": "يحول النص إلى أحرف كبيرة (ABC) - مفيد للعناوين"
            },
            {
              "value": "lowercase",
              "description": "يحول النص إلى أحرف صغيرة (abc)"
            },
            {
              "value": "capitalize",
              "description": "يكتب الحرف الأول من كل كلمة كبيراً - مفيد لعناوين المقالات"
            },
            {
              "value": "full-width",
              "description": "يحول الأحرف إلى عرض كامل (للغة الصينية واليابانية)"
            },
            {
              "value": "full-size-kana",
              "description": "يحول أحرف الكانا اليابانية إلى حجم كامل"
            }
          ]
        },
        {
          "name": "text-indent",
          "description": "يحدد مسافة بادئة للسطر الأول من النص (مثل بداية الفقرة)",
          "values": [
            {
              "value": "0",
              "description": "بدون بادئة - القيمة الافتراضية"
            },
            {
              "value": "5px",
              "description": "إزاحة السطر الأول 5 بكسل إلى اليمين"
            },
            {
              "value": "10px",
              "description": "إزاحة 10 بكسل"
            },
            {
              "value": "20px",
              "description": "إزاحة 20 بكسل"
            },
            {
              "value": "2em",
              "description": "إزاحة السطر الأول بمقدار حرفين"
            },
            {
              "value": "1.5em",
              "description": "إزاحة بمقدار 1.5 حرف"
            },
            {
              "value": "-20px",
              "description": "إزاحة السطر الأول إلى اليسار (قيمة سالبة) - معلقة"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-shadow",
          "description": "يضيف ظلاً خلف النص لتحسين القراءة أو للتأثيرات البصرية",
          "values": [
            {
              "value": "none",
              "description": "بدون ظل - القيمة الافتراضية"
            },
            {
              "value": "1px 1px 1px rgba(0,0,0,0.1)",
              "description": "ظل خفيف جداً"
            },
            {
              "value": "2px 2px 4px rgba(0,0,0,0.3)",
              "description": "ظل أسود شفاف بإزاحة 2 بكسل وضبابية 4 بكسل"
            },
            {
              "value": "2px 2px 4px rgba(0,0,0,0.5)",
              "description": "ظل قوي"
            },
            {
              "value": "0 0 10px red",
              "description": "ظل أحمر متوهج (Glow)"
            },
            {
              "value": "0 0 20px rgba(255,0,0,0.5)",
              "description": "ظل أحمر متوهج شفاف"
            },
            {
              "value": "0 0 30px #007bff",
              "description": "ظل أزرق متوهج"
            },
            {
              "value": "2px 2px 4px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.3)",
              "description": "ظلال متعددة"
            },
            {
              "value": "-2px -2px 4px rgba(255,255,255,0.3)",
              "description": "ظل لأعلى ولليسار (تأثير نتوء)"
            },
            {
              "value": "0 -2px 4px rgba(0,0,0,0.2)",
              "description": "ظل للأعلى"
            },
            {
              "value": "0 4px 6px rgba(0,0,0,0.2)",
              "description": "ظل طويل للأسفل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-overflow",
          "description": "يتحكم في كيفية عرض النص الزائد عن حدود العنصر (يجب استخدامه مع overflow: hidden)",
          "values": [
            {
              "value": "clip",
              "description": "يقص النص الزائد - القيمة الافتراضية"
            },
            {
              "value": "ellipsis",
              "description": "يضيف علامة ... في نهاية النص المقطوع - الأكثر شيوعاً"
            },
            {
              "value": "fade",
              "description": "يخفي النص بتأثير تلاشي عند الحافة"
            },
            {
              "value": "\" →\"",
              "description": "نص مخصص يظهر بدلاً من النص المقطوع"
            }
          ],
          "freeInput": true
        },
        {
          "name": "white-space",
          "description": "يتحكم في كيفية تعامل المتصفح مع المسافات البيضاء والأسطر الجديدة في النص",
          "values": [
            {
              "value": "normal",
              "description": "يضم المسافات المتعددة في مسافة واحدة ويلتف النص - القيمة الافتراضية"
            },
            {
              "value": "nowrap",
              "description": "يمنع التفاف النص ويبقيه في سطر واحد"
            },
            {
              "value": "pre",
              "description": "يحافظ على المسافات والأسطر الجديدة كما هي (مثل <pre>)"
            },
            {
              "value": "pre-wrap",
              "description": "يحافظ على المسافات والأسطر الجديدة مع السماح بالتفاف"
            },
            {
              "value": "pre-line",
              "description": "يضم المسافات المتعددة لكن يحافظ على الأسطر الجديدة"
            },
            {
              "value": "break-spaces",
              "description": "يحافظ على المسافات ويسمح بالتفاف في أي مكان"
            }
          ]
        },
        {
          "name": "word-break",
          "description": "يحدد كيف يتم كسر الكلمات الطويلة عند نهاية السطر",
          "values": [
            {
              "value": "normal",
              "description": "يكسر وفق قواعد اللغة - القيمة الافتراضية"
            },
            {
              "value": "break-all",
              "description": "يكسر الكلمة في أي حرف عند الحاجة - يمنع التجاوز"
            },
            {
              "value": "keep-all",
              "description": "لا يكسر الكلمات في اللغات الشرق آسيوية (الصينية، اليابانية، الكورية)"
            },
            {
              "value": "break-word",
              "description": "يكسر الكلمة فقط إذا تجاوزت الحد (قديم، استُبدل بـ overflow-wrap)"
            }
          ]
        },
        {
          "name": "overflow-wrap",
          "description": "يحدد ما إذا كان يمكن كسر الكلمات الطويلة عند نهاية السطر (النسخة الحديثة من word-wrap)",
          "values": [
            {
              "value": "normal",
              "description": "يكسر فقط في المسافات - القيمة الافتراضية"
            },
            {
              "value": "break-word",
              "description": "يكسر الكلمة إذا كانت طويلة جداً ولا توجد مسافة"
            },
            {
              "value": "anywhere",
              "description": "يكسر الكلمة في أي مكان لتجنب تجاوز الحد"
            }
          ]
        },
        {
          "name": "hyphens",
          "description": "يتحكم في وصل الكلمات (شق الكلمات) عند نهاية السطر في النصوص العربية والإنجليزية",
          "values": [
            {
              "value": "none",
              "description": "لا يشق الكلمات - القيمة الافتراضية"
            },
            {
              "value": "manual",
              "description": "يشق فقط عند وجود علامة واصل (­)"
            },
            {
              "value": "auto",
              "description": "يشق الكلمات تلقائياً حسب قواعد اللغة (يتطلب تحديد اللغة)"
            }
          ]
        },
        {
          "name": "direction",
          "description": "يحدد اتجاه النص (من اليسار إلى اليمين أو العكس)",
          "values": [
            {
              "value": "ltr",
              "description": "من اليسار إلى اليمين - القيمة الافتراضية (للغة الإنجليزية)"
            },
            {
              "value": "rtl",
              "description": "من اليمين إلى اليسار (للغة العربية والعبرية)"
            }
          ]
        },
        {
          "name": "unicode-bidi",
          "description": "يتحكم في كيفية عرض النصوص ثنائية الاتجاه (مثل العربية والإنجليزية معاً)",
          "values": [
            {
              "value": "normal",
              "description": "عرض طبيعي - القيمة الافتراضية"
            },
            {
              "value": "embed",
              "description": "يدمج النص في سياق اتجاه جديد"
            },
            {
              "value": "bidi-override",
              "description": "يتجاوز الاتجاه الطبيعي"
            },
            {
              "value": "isolate",
              "description": "يعزل النص عن النصوص المحيطة"
            },
            {
              "value": "isolate-override",
              "description": "يعزل ويتجاوز الاتجاه معاً"
            },
            {
              "value": "plaintext",
              "description": "يحدد الاتجاه من أول حرف ذو اتجاه قوي"
            }
          ]
        },
        {
          "name": "writing-mode",
          "description": "يحدد اتجاه الكتابة (أفقي من اليسار، أفقي من اليمين، أو عمودي)",
          "values": [
            {
              "value": "horizontal-tb",
              "description": "أفقي من الأعلى إلى الأسفل - القيمة الافتراضية"
            },
            {
              "value": "vertical-rl",
              "description": "عمودي من اليمين إلى اليسار (للغات الشرق آسيوية)"
            },
            {
              "value": "vertical-lr",
              "description": "عمودي من اليسار إلى اليمين"
            },
            {
              "value": "sideways-rl",
              "description": "عمودي مع دوران النص 90 درجة"
            },
            {
              "value": "sideways-lr",
              "description": "عمودي مع دوران النص 90 درجة بالاتجاه الآخر"
            }
          ]
        },
        {
          "name": "text-orientation",
          "description": "يتحكم في اتجاه الأحرف في النصوص العمودية (مستخدم مع writing-mode)",
          "values": [
            {
              "value": "mixed",
              "description": "أحرف أفقية وعمودية مختلطة - القيمة الافتراضية"
            },
            {
              "value": "upright",
              "description": "جميع الأحرف عمودية (واقفة)"
            },
            {
              "value": "sideways",
              "description": "جميع الأحرف مائلة 90 درجة"
            },
            {
              "value": "sideways-right",
              "description": "جميع الأحرف مائلة لليمين"
            }
          ]
        },
        {
          "name": "tab-size",
          "description": "يحدد عرض حرف التبويب (Tab) بعدد من المسافات",
          "values": [
            {
              "value": "8",
              "description": "عرض 8 مسافات - القيمة الافتراضية في معظم المتصفحات"
            },
            {
              "value": "4",
              "description": "عرض 4 مسافات - الأكثر شيوعاً"
            },
            {
              "value": "2",
              "description": "عرض مسافتين"
            },
            {
              "value": "3",
              "description": "عرض 3 مسافات"
            }
          ],
          "freeInput": true
        },
        {
          "name": "hanging-punctuation",
          "description": "يسمح لعلامات الترقيم (مثل التنصيص) بالخروج خارج هامش النص لتحسين المظهر",
          "values": [
            {
              "value": "none",
              "description": "بدون تعليق - القيمة الافتراضية"
            },
            {
              "value": "first",
              "description": "تعليق علامات الترقيم في أول السطر"
            },
            {
              "value": "last",
              "description": "تعليق علامات الترقيم في آخر السطر"
            },
            {
              "value": "allow-end",
              "description": "يسمح بتعليق علامات الترقيم في النهاية"
            },
            {
              "value": "force-end",
              "description": "يجبر تعليق علامات الترقيم في النهاية"
            },
            {
              "value": "first last",
              "description": "تعليق في البداية والنهاية"
            }
          ]
        },
        {
          "name": "text-justify",
          "description": "يحدد طريقة ضبط النص (justify) عند محاذاته، يتحكم في تباعد الكلمات والأحرف",
          "values": [
            {
              "value": "auto",
              "description": "يختار المتصفح الطريقة المناسبة - القيمة الافتراضية"
            },
            {
              "value": "none",
              "description": "لا يضبط النص"
            },
            {
              "value": "inter-word",
              "description": "يضبط بتباعد الكلمات - مناسب للغات الغربية"
            },
            {
              "value": "inter-character",
              "description": "يضبط بتباعد الأحرف - مناسب للغات الشرق آسيوية"
            },
            {
              "value": "distribute",
              "description": "يوزع التباعد بين الأحرف"
            }
          ]
        },
        {
          "name": "text-wrap",
          "description": "يتحكم في كيفية التفاف النص عبر عدة أسطر، مع خيارات حديثة تحسّن التوازن البصري للعناوين",
          "values": [
            {
              "value": "wrap",
              "description": "التفاف عادي - القيمة الافتراضية"
            },
            {
              "value": "nowrap",
              "description": "بدون التفاف، سطر واحد فقط"
            },
            {
              "value": "balance",
              "description": "يوازن عدد الأحرف بين الأسطر لمظهر أجمل (مناسب للعناوين القصيرة)"
            },
            {
              "value": "pretty",
              "description": "يتجنب ترك كلمة واحدة يتيمة في آخر سطر (مناسب للفقرات)"
            }
          ]
        },
        {
          "name": "text-emphasis",
          "description": "يضيف علامة تشديد فوق أو تحت النص (شائعة في الكتابة الآسيوية)",
          "values": [
            {
              "value": "none",
              "description": "بدون تشديد - القيمة الافتراضية"
            },
            {
              "value": "filled dot",
              "description": "نقطة مملوءة فوق كل حرف"
            },
            {
              "value": "open dot",
              "description": "نقطة فارغة فوق كل حرف"
            },
            {
              "value": "filled circle",
              "description": "دائرة مملوءة"
            },
            {
              "value": "open circle",
              "description": "دائرة فارغة"
            },
            {
              "value": "filled double-circle",
              "description": "دائرتان مملوءتان"
            },
            {
              "value": "open double-circle",
              "description": "دائرتان فارغتان"
            },
            {
              "value": "filled triangle",
              "description": "مثلث مملوء"
            },
            {
              "value": "open triangle",
              "description": "مثلث فارغ"
            },
            {
              "value": "filled sesame",
              "description": "سمسمة مملوءة"
            },
            {
              "value": "open sesame",
              "description": "سمسمة فارغة"
            },
            {
              "value": "filled dot red",
              "description": "نقطة مملوءة حمراء اللون"
            },
            {
              "value": "open circle blue",
              "description": "دائرة فارغة زرقاء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "text-emphasis-position",
          "description": "يحدد موقع علامة التشديد (فوق أو تحت النص)",
          "values": [
            {
              "value": "over",
              "description": "فوق النص"
            },
            {
              "value": "under",
              "description": "تحت النص"
            },
            {
              "value": "over right",
              "description": "فوق النص إلى اليمين"
            },
            {
              "value": "under right",
              "description": "تحت النص إلى اليمين"
            }
          ]
        },
        {
          "name": "text-emphasis-color",
          "description": "يحدد لون علامة التشديد",
          "values": [
            {
              "value": "currentColor",
              "description": "نفس لون النص - القيمة الافتراضية"
            },
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "line-break",
          "description": "يحدد صرامة قواعد التفاف الأسطر، مهم خصوصاً للغات مثل الصينية واليابانية والعربية",
          "values": [
            {
              "value": "auto",
              "description": "القواعد الافتراضية - القيمة الافتراضية"
            },
            {
              "value": "loose",
              "description": "قواعد أقل صرامة (سطور أقصر لكن أسهل قراءة)"
            },
            {
              "value": "strict",
              "description": "قواعد أكثر صرامة"
            },
            {
              "value": "anywhere",
              "description": "يسمح بالكسر في أي مكان عند الحاجة"
            }
          ]
        },
        {
          "name": "ruby-align",
          "description": "يتحكم في محاذاة النص التوضيحي (Ruby) فوق النص الأساسي في اللغات الشرق آسيوية",
          "values": [
            {
              "value": "space-around",
              "description": "توزيع متساوٍ - القيمة الافتراضية"
            },
            {
              "value": "start",
              "description": "محاذاة إلى البداية"
            },
            {
              "value": "center",
              "description": "محاذاة إلى المنتصف"
            },
            {
              "value": "space-between",
              "description": "توزيع مع مسافات"
            }
          ]
        },
        {
          "name": "ruby-position",
          "description": "يحدد موقع النص التوضيحي (Ruby) فوق أو تحت النص الأساسي",
          "values": [
            {
              "value": "over",
              "description": "فوق النص الأساسي"
            },
            {
              "value": "under",
              "description": "تحت النص الأساسي"
            },
            {
              "value": "inter-character",
              "description": "بين الأحرف (في النصوص العمودية)"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام خصائص النصوص والخطوط في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - عنوان أنيق",
          "description": "عنوان بتصميم عصري مع ظل وخط تحته",
          "values": [
            {
              "value": ".heading { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); text-decoration: underline wavy #007bff; text-underline-offset: 8px; }",
              "description": "عنوان أنيق مع ظل وخط مموج"
            }
          ]
        },
        {
          "name": "مثال 2 - فقرة مريحة للقراءة",
          "description": "فقرة بتنسيق مثالي للقراءة الطويلة",
          "values": [
            {
              "value": ".paragraph { font-family: 'Georgia', serif; font-size: 1.125rem; line-height: 1.8; letter-spacing: 0.02em; text-align: justify; max-width: 700px; }",
              "description": "فقرة مريحة للقراءة"
            }
          ]
        },
        {
          "name": "مثال 3 - نص عربي مع خطوط مناسبة",
          "description": "نص عربي بتنسيق صحيح",
          "values": [
            {
              "value": ".arabic-text { font-family: 'Noto Naskh Arabic', 'Amiri', serif; direction: rtl; line-height: 2; font-size: 1.2rem; }",
              "description": "نص عربي منسق"
            }
          ]
        },
        {
          "name": "مثال 4 - تصميم نص مع تأثير النيون",
          "description": "نص بتأثير نيون باستخدام text-shadow",
          "values": [
            {
              "value": ".neon-text { color: #fff; font-size: 4rem; font-weight: bold; text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff; }",
              "description": "نص بتأثير نيون وردي"
            }
          ]
        },
        {
          "name": "مثال 5 - نص مبتور مع علامة ...",
          "description": "نص طويل مبتور مع إضافة ...",
          "values": [
            {
              "value": ".truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px; }",
              "description": "نص مبتور مع ..."
            }
          ]
        },
        {
          "name": "مثال 6 - خطوط متغيرة (Variable Fonts)",
          "description": "استخدام خط متغير مع تحكم في الوزن",
          "values": [
            {
              "value": ".variable-text { font-family: 'VariableFont', sans-serif; font-variation-settings: 'wght' 650, 'wdth' 90; }",
              "description": "خط متغير مع تحكم في الوزن والعرض"
            }
          ]
        },
        {
          "name": "مثال 7 - تأثير الـ Drop Cap",
          "description": "الحرف الأول من الفقرة بشكل مميز",
          "values": [
            {
              "value": ".drop-cap::first-letter { font-size: 4em; font-weight: bold; float: left; margin-right: 8px; line-height: 1; color: #007bff; }",
              "description": "الحرف الأول من الفقرة كبير ومميز"
            }
          ]
        },
        {
          "name": "مثال 8 - نص عمودي (Vertical Text)",
          "description": "نص يكتب عمودياً من الأعلى للأسفل",
          "values": [
            {
              "value": ".vertical-text { writing-mode: vertical-rl; text-orientation: upright; font-size: 1.5rem; }",
              "description": "نص عمودي"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام خصائص النصوص والخطوط بشكل فعال",
      "properties": [
        {
          "name": "نصائح اختيار الخطوط",
          "description": "نصائح لاختيار الخطوط المناسبة",
          "values": [
            {
              "value": "استخدم خطوط Sans-serif للنصوص الرقمية",
              "description": "أسهل للقراءة على الشاشات"
            },
            {
              "value": "استخدم خطوط Serif للطباعة",
              "description": "أفضل للقراءة الطويلة في المطبوعات"
            },
            {
              "value": "حدد خطوطاً احتياطية",
              "description": "على الأقل 2-3 خطوط مع عائلة عامة"
            },
            {
              "value": "استخدم خطوط عربية مناسبة",
              "description": "Noto Naskh Arabic, Amiri, Cairo"
            }
          ]
        },
        {
          "name": "نصائح أداء النصوص",
          "description": "نصائح لتحسين أداء النصوص",
          "values": [
            {
              "value": "استخدم نظام الخطوط (system-ui)",
              "description": "أسرع من تحميل خطوط مخصصة"
            },
            {
              "value": "استخدم font-display: swap",
              "description": "يمنع Flash of Invisible Text (FOIT)"
            },
            {
              "value": "قلل عدد الخطوط المحملة",
              "description": "كل خط إضافي يزيد وقت التحميل"
            },
            {
              "value": "استخدم صيغ WOFF2",
              "description": "أفضل ضغط وأسرع تحميل"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل النصوص قابلة للوصول",
          "values": [
            {
              "value": "استخدم حجم خط لا يقل عن 16px",
              "description": "لتسهيل القراءة"
            },
            {
              "value": "حافظ على تباين عالٍ",
              "description": "نسبة تباين 4.5:1 على الأقل"
            },
            {
              "value": "استخدم line-height: 1.5",
              "description": "يحسن قراءة النصوص الطويلة"
            },
            {
              "value": "لا تستخدم text-transform: uppercase للفقرات",
              "description": "يصعب قراءتها"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام خصائص النصوص والخطوط",
          "values": [
            {
              "value": "نسيان علامات التنصيص حول الخطوط المركبة",
              "description": "'Times New Roman' يحتاج إلى تنصيص"
            },
            {
              "value": "استخدام px للطباعة",
              "description": "استخدم pt أو em أو rem للطباعة"
            },
            {
              "value": "نسيان font-display",
              "description": "يسبب وميض النص أثناء التحميل"
            },
            {
              "value": "استخدام text-decoration: underline على كل الروابط",
              "description": "قد يكون مزعجاً، استخدمه فقط عند التمرير"
            }
          ]
        }
      ]
    }
  ],
  "bordersShadows": [
    {
      "tag": "border",
      "description": "تحدد خصائص الحواف (العرض، النمط، اللون) بشكل مختصر، وتتحكم في مظهر حدود العنصر من جميع الجهات",
      "properties": [
        {
          "name": "border",
          "description": "الخاصية المختصرة للحواف، تجمع العرض، النمط، واللون في سطر واحد، الترتيب: width style color",
          "values": [
            {
              "value": "none",
              "description": "بدون حافة (القيمة الافتراضية)"
            },
            {
              "value": "1px solid black",
              "description": "حافة سوداء صلبة سمك 1 بكسل - أساسية ونظيفة"
            },
            {
              "value": "2px dashed red",
              "description": "حافة حمراء متقطعة سمك 2 بكسل - تعطي مظهراً ديناميكياً"
            },
            {
              "value": "3px dotted blue",
              "description": "حافة زرقاء منقطة سمك 3 بكسل - مظهر مرح"
            },
            {
              "value": "4px double green",
              "description": "حافة خضراء مزدوجة سمك 4 بكسل - مظهر أنيق"
            },
            {
              "value": "5px groove gray",
              "description": "حافة رمادية بظل تجويف سمك 5 بكسل - تأثير ثلاثي الأبعاد"
            },
            {
              "value": "6px ridge gold",
              "description": "حافة ذهبية بارزة سمك 6 بكسل - تأثير ثلاثي الأبعاد بارز"
            },
            {
              "value": "7px inset navy",
              "description": "حافة غائرة باللون البحري - تأثير داخلي ثلاثي الأبعاد"
            },
            {
              "value": "8px outset crimson",
              "description": "حافة بارزة للخارج باللون القرمزي - تأثير خارجي ثلاثي الأبعاد"
            },
            {
              "value": "2px solid transparent",
              "description": "حافة شفافة - تحافظ على المساحة دون ظهور"
            },
            {
              "value": "3px solid currentColor",
              "description": "حافة بنفس لون النص الحالي"
            },
            {
              "value": "1px solid #cccccc",
              "description": "حافة رمادية فاتحة بتحديد Hex"
            },
            {
              "value": "2px solid rgb(255, 0, 0)",
              "description": "حافة حمراء باستخدام RGB"
            },
            {
              "value": "3px solid hsl(240, 100%, 50%)",
              "description": "حافة زرقاء باستخدام HSL"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-width",
          "description": "يحدد سمك الحافة من جميع الجهات أو لكل جهة على حدة، يمكن استخدام كلمات مفتاحية أو قيم رقمية",
          "values": [
            {
              "value": "thin",
              "description": "سمك رفيع (عادة 1 بكسل)"
            },
            {
              "value": "medium",
              "description": "سمك متوسط (عادة 3 بكسل) - القيمة الافتراضية"
            },
            {
              "value": "thick",
              "description": "سمك سميك (عادة 5 بكسل)"
            },
            {
              "value": "1px",
              "description": "سمك 1 بكسل لجميع الجهات"
            },
            {
              "value": "2px",
              "description": "سمك 2 بكسل لجميع الجهات"
            },
            {
              "value": "3px",
              "description": "سمك 3 بكسل لجميع الجهات"
            },
            {
              "value": "4px",
              "description": "سمك 4 بكسل لجميع الجهات"
            },
            {
              "value": "5px",
              "description": "سمك 5 بكسل لجميع الجهات"
            },
            {
              "value": "10px",
              "description": "سمك 10 بكسل لجميع الجهات"
            },
            {
              "value": "1px 2px",
              "description": "علوي/سفلي = 1px، أيمن/أيسر = 2px"
            },
            {
              "value": "1px 2px 3px",
              "description": "علوي=1px، أيمن/أيسر=2px، سفلي=3px"
            },
            {
              "value": "1px 2px 3px 4px",
              "description": "علوي=1px، أيمن=2px، سفلي=3px، أيسر=4px"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-style",
          "description": "يحدد نمط الحافة من جميع الجهات، يحدد شكل الخط المرسوم كحدود",
          "values": [
            {
              "value": "none",
              "description": "بدون حافة - لا تظهر ولا تأخذ مساحة"
            },
            {
              "value": "hidden",
              "description": "يخفي الحافة (خاص بالجداول) - مثل none لكن يحافظ على المساحة"
            },
            {
              "value": "solid",
              "description": "خط صلب مستمر - الأكثر استخداماً"
            },
            {
              "value": "dashed",
              "description": "خط متقطع بشرطات - مظهر ديناميكي"
            },
            {
              "value": "dotted",
              "description": "خط منقط بنقاط - مظهر خفيف"
            },
            {
              "value": "double",
              "description": "خط مزدوج - خطان متوازيان مع فجوة بينهما"
            },
            {
              "value": "groove",
              "description": "خط ذو تجويف ثلاثي الأبعاد - يبدو غائراً"
            },
            {
              "value": "ridge",
              "description": "خط بارز ثلاثي الأبعاد - عكس groove"
            },
            {
              "value": "inset",
              "description": "خط غائر ثلاثي الأبعاد - كأن العنصر مدخل"
            },
            {
              "value": "outset",
              "description": "خط بارز للخارج ثلاثي الأبعاد - كأن العنصر خارج"
            },
            {
              "value": "dashed dotted",
              "description": "مزيج من الخطوط المتقطعة والمنقطة (غير مدعوم في كل المتصفحات)"
            }
          ]
        },
        {
          "name": "border-color",
          "description": "يحدد لون الحافة من جميع الجهات، يمكن استخدام أسماء الألوان أو الرموز اللونية",
          "values": [
            {
              "value": "transparent",
              "description": "لون شفاف - الحافة موجودة لكن غير مرئية"
            },
            {
              "value": "currentColor",
              "description": "نفس لون النص الحالي (القيمة الافتراضية)"
            },
            {
              "value": "black",
              "description": "أسود - اللون الأساسي"
            },
            {
              "value": "white",
              "description": "أبيض"
            },
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            },
            {
              "value": "green",
              "description": "أخضر"
            },
            {
              "value": "yellow",
              "description": "أصفر"
            },
            {
              "value": "orange",
              "description": "برتقالي"
            },
            {
              "value": "purple",
              "description": "بنفسجي"
            },
            {
              "value": "pink",
              "description": "وردي"
            },
            {
              "value": "gray",
              "description": "رمادي"
            },
            {
              "value": "lightgray",
              "description": "رمادي فاتح"
            },
            {
              "value": "darkgray",
              "description": "رمادي داكن"
            },
            {
              "value": "navy",
              "description": "أزرق بحري"
            },
            {
              "value": "teal",
              "description": "أزرق مخضر"
            },
            {
              "value": "maroon",
              "description": "كستنائي"
            },
            {
              "value": "olive",
              "description": "زيتوني"
            },
            {
              "value": "lime",
              "description": "ليموني"
            },
            {
              "value": "gold",
              "description": "ذهبي"
            },
            {
              "value": "silver",
              "description": "فضي"
            },
            {
              "value": "#ff0000",
              "description": "أحمر (Hex)"
            },
            {
              "value": "#00ff00",
              "description": "أخضر (Hex)"
            },
            {
              "value": "#0000ff",
              "description": "أزرق (Hex)"
            },
            {
              "value": "#000000",
              "description": "أسود (Hex)"
            },
            {
              "value": "#ffffff",
              "description": "أبيض (Hex)"
            },
            {
              "value": "#ffa500",
              "description": "برتقالي (Hex)"
            },
            {
              "value": "#800080",
              "description": "بنفسجي (Hex)"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر (RGB)"
            },
            {
              "value": "rgb(0, 255, 0)",
              "description": "أخضر (RGB)"
            },
            {
              "value": "rgb(0, 0, 255)",
              "description": "أزرق (RGB)"
            },
            {
              "value": "rgba(255, 0, 0, 0.5)",
              "description": "أحمر شفاف (RGBA)"
            },
            {
              "value": "hsl(0, 100%, 50%)",
              "description": "أحمر (HSL)"
            },
            {
              "value": "hsla(0, 100%, 50%, 0.5)",
              "description": "أحمر شفاف (HSLA)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-top",
          "description": "يحدد الحافة العلوية فقط (العرض، النمط، اللون)، مفيد لتخصيص جهة معينة",
          "values": [
            {
              "value": "1px solid red",
              "description": "حافة علوية حمراء صلبة سمك 1 بكسل"
            },
            {
              "value": "2px dashed blue",
              "description": "حافة علوية زرقاء متقطعة سمك 2 بكسل"
            },
            {
              "value": "3px dotted green",
              "description": "حافة علوية خضراء منقطة سمك 3 بكسل"
            },
            {
              "value": "4px double orange",
              "description": "حافة علوية برتقالية مزدوجة"
            },
            {
              "value": "5px groove purple",
              "description": "حافة علوية بنفسجية ذات تجويف"
            },
            {
              "value": "none",
              "description": "بدون حافة علوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-right",
          "description": "يحدد الحافة اليمنى فقط، مفيد لتخصيص جهة معينة",
          "values": [
            {
              "value": "1px solid red",
              "description": "حافة يمنى حمراء صلبة"
            },
            {
              "value": "2px dashed blue",
              "description": "حافة يمنى زرقاء متقطعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-bottom",
          "description": "يحدد الحافة السفلية فقط، مفيد لإنشاء خطوط فاصلة",
          "values": [
            {
              "value": "1px solid #ccc",
              "description": "حافة سفلية رمادية فاتحة - شائع للفواصل"
            },
            {
              "value": "2px solid red",
              "description": "حافة سفلية حمراء صلبة"
            },
            {
              "value": "3px double blue",
              "description": "حافة سفلية زرقاء مزدوجة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-left",
          "description": "يحدد الحافة اليسرى فقط، مفيد لإضافة علامات جانبية",
          "values": [
            {
              "value": "1px solid red",
              "description": "حافة يسرى حمراء صلبة"
            },
            {
              "value": "4px solid #ff0000",
              "description": "حافة يسرى حمراء سميكة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "border-radius",
      "description": "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء، يعطي مظهراً ناعماً وعصرياً للعناصر",
      "properties": [
        {
          "name": "border-radius",
          "description": "يجعل زوايا الحافة مستديرة، يحدد نصف قطر الانحناء بجميع الزوايا",
          "values": [
            {
              "value": "0",
              "description": "زوايا حادة (القيمة الافتراضية)"
            },
            {
              "value": "2px",
              "description": "انحناء 2 بكسل - انحناء طفيف جداً"
            },
            {
              "value": "4px",
              "description": "انحناء 4 بكسل - انحناء خفيف"
            },
            {
              "value": "6px",
              "description": "انحناء 6 بكسل - انحناء متوسط خفيف"
            },
            {
              "value": "8px",
              "description": "انحناء 8 بكسل"
            },
            {
              "value": "10px",
              "description": "انحناء 10 بكسل - انحناء متوسط"
            },
            {
              "value": "12px",
              "description": "انحناء 12 بكسل"
            },
            {
              "value": "15px",
              "description": "انحناء 15 بكسل"
            },
            {
              "value": "20px",
              "description": "انحناء 20 بكسل - انحناء واضح"
            },
            {
              "value": "25px",
              "description": "انحناء 25 بكسل"
            },
            {
              "value": "30px",
              "description": "انحناء 30 بكسل - انحناء كبير"
            },
            {
              "value": "40px",
              "description": "انحناء 40 بكسل - انحناء كبير جداً"
            },
            {
              "value": "50px",
              "description": "انحناء 50 بكسل"
            },
            {
              "value": "100px",
              "description": "انحناء 100 بكسل - شبه دائري لعناصر كبيرة"
            },
            {
              "value": "50%",
              "description": "يجعل العنصر دائرياً بالكامل (إذا كان مربعاً) - مثالي للأفاتار"
            },
            {
              "value": "100%",
              "description": "يجعل العنصر بيضاوياً"
            },
            {
              "value": "10px 20px",
              "description": "قطر علوي أيسر=10px، علوي أيمن=20px، سفلي أيمن=10px، سفلي أيسر=20px"
            },
            {
              "value": "10px 20px 30px",
              "description": "علوي أيسر=10px، علوي أيمن=20px، سفلي أيمن=30px، سفلي أيسر=20px"
            },
            {
              "value": "10px 20px 30px 40px",
              "description": "كل زاوية بقيمة مختلفة"
            },
            {
              "value": "10px 20px / 30px 40px",
              "description": "انحناء أفقي 10,20 وعمودي 30,40 (بيضاوي)"
            },
            {
              "value": "10px / 20px",
              "description": "انحناء أفقي 10px وعمودي 20px (بيضاوي)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-top-left-radius",
          "description": "يحدد انحناء الزاوية العلوية اليسرى فقط، للتحكم الدقيق في كل زاوية",
          "values": [
            {
              "value": "10px",
              "description": "انحناء 10 بكسل"
            },
            {
              "value": "10px 20px",
              "description": "أفقي 10px، عمودي 20px (بيضاوي)"
            },
            {
              "value": "50%",
              "description": "انحناء كامل للزاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-top-right-radius",
          "description": "يحدد انحناء الزاوية العلوية اليمنى فقط",
          "values": [
            {
              "value": "10px",
              "description": "انحناء 10 بكسل"
            },
            {
              "value": "10px 20px",
              "description": "أفقي 10px، عمودي 20px"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-bottom-right-radius",
          "description": "يحدد انحناء الزاوية السفلية اليمنى فقط",
          "values": [
            {
              "value": "10px",
              "description": "انحناء 10 بكسل"
            },
            {
              "value": "10px 20px",
              "description": "أفقي 10px، عمودي 20px"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-bottom-left-radius",
          "description": "يحدد انحناء الزاوية السفلية اليسرى فقط",
          "values": [
            {
              "value": "10px",
              "description": "انحناء 10 بكسل"
            },
            {
              "value": "10px 20px",
              "description": "أفقي 10px، عمودي 20px"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "border-image",
      "description": "يستخدم صورة كحافة للعنصر بدلاً من اللون الصلب، يسمح بإنشاء حدود معقدة ومزخرفة باستخدام الصور",
      "properties": [
        {
          "name": "border-image",
          "description": "الخاصية المختصرة لصورة الحافة، تجمع source, slice, width, repeat في سطر واحد",
          "values": [
            {
              "value": "none",
              "description": "بدون صورة حافة (القيمة الافتراضية)"
            },
            {
              "value": "url('border.png') 30 repeat",
              "description": "صورة متكررة كحافة مع تقسيم 30 بكسل"
            },
            {
              "value": "url('border.png') 30 stretch",
              "description": "صورة متمددة كحافة"
            },
            {
              "value": "url('border.png') 30 round",
              "description": "صورة متكررة مع تعديل حجم لتناسب الحافة"
            },
            {
              "value": "url('border.png') 30 space",
              "description": "صورة متكررة مع مسافات متساوية"
            },
            {
              "value": "linear-gradient(red, blue) 30 stretch",
              "description": "تدرج لوني كحافة"
            },
            {
              "value": "repeating-linear-gradient(45deg, red, blue 10px) 30 repeat",
              "description": "تدرج متكرر كحافة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-image-source",
          "description": "يحدد مصدر الصورة المستخدمة كحافة (جزء من خاصية border-image المختصرة)",
          "values": [
            {
              "value": "none",
              "description": "بدون مصدر (القيمة الافتراضية)"
            },
            {
              "value": "url('border.png')",
              "description": "صورة من ملف"
            },
            {
              "value": "url('border.svg')",
              "description": "صورة SVG"
            },
            {
              "value": "linear-gradient(red, blue)",
              "description": "تدرج لوني كمصدر"
            },
            {
              "value": "repeating-linear-gradient(45deg, red, blue 10px)",
              "description": "تدرج متكرر كمصدر"
            },
            {
              "value": "data:image/png;base64,...",
              "description": "صورة مشفرة في الـ CSS نفسه"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-image-slice",
          "description": "يحدد كيفية تقسيم صورة border-image إلى 9 أجزاء (زوايا 4، حواف 4، مركز 1)",
          "values": [
            {
              "value": "100%",
              "description": "تقسيم الصورة بالكامل (القيمة الافتراضية)"
            },
            {
              "value": "30",
              "description": "تقسيم بمقدار 30 بكسل من كل جهة"
            },
            {
              "value": "30 fill",
              "description": "مع تعبئة الجزء المركزي أيضاً"
            },
            {
              "value": "10 20 30 40",
              "description": "تقسيم بقيم مختلفة لكل جهة (أعلى، يمين، أسفل، يسار)"
            },
            {
              "value": "10 20%",
              "description": "تقسيم بمزيج من البكسل والنسبة المئوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-image-width",
          "description": "يحدد عرض صورة الحافة، قد يختلف عن border-width، يتحكم بحجم صورة الحافة",
          "values": [
            {
              "value": "1",
              "description": "نفس عرض border-width (القيمة الافتراضية)"
            },
            {
              "value": "10px",
              "description": "عرض ثابت 10 بكسل"
            },
            {
              "value": "20px",
              "description": "عرض ثابت 20 بكسل"
            },
            {
              "value": "2",
              "description": "ضعف قيمة border-width"
            },
            {
              "value": "10%",
              "description": "10% من عرض العنصر"
            },
            {
              "value": "auto",
              "description": "يحسب تلقائياً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-image-repeat",
          "description": "يحدد كيفية تكرار أجزاء صورة الحافة على طول الحافة، يتحكم في مظهر الحافة المزخرفة",
          "values": [
            {
              "value": "stretch",
              "description": "تمديد الصورة لتناسب الطول (القيمة الافتراضية)"
            },
            {
              "value": "repeat",
              "description": "تكرار الصورة دون تعديل حجمها"
            },
            {
              "value": "round",
              "description": "تكرار مع تعديل الحجم لتناسب بدون قطع"
            },
            {
              "value": "space",
              "description": "تكرار مع مسافات متساوية بين النسخ"
            },
            {
              "value": "stretch repeat",
              "description": "تمديد أفقياً وتكرار عمودياً"
            },
            {
              "value": "repeat stretch",
              "description": "تكرار أفقياً وتمديد عمودياً"
            }
          ]
        }
      ]
    },
    {
      "tag": "box-shadow",
      "description": "يضيف ظلاً خارجياً أو داخلياً للعنصر، يمكن تخصيص لونه وإزاحته وضبابيته وحجم انتشاره، يضيف عمقاً وأبعاداً للتصميم",
      "properties": [
        {
          "name": "box-shadow",
          "description": "يضيف ظلاً خارجياً أو داخلياً للعنصر، يضيف عمقاً ثلاثي الأبعاد للتصميم",
          "values": [
            {
              "value": "none",
              "description": "بدون ظل (القيمة الافتراضية)"
            },
            {
              "value": "2px 2px 4px rgba(0,0,0,0.3)",
              "description": "ظل خارجي بإزاحة 2 بكسل وضبابية 4 بكسل وشفافية 30%"
            },
            {
              "value": "2px 2px 4px 0px rgba(0,0,0,0.3)",
              "description": "ظل مع انتشار 0 (نفس السابق)"
            },
            {
              "value": "0 0 20px red",
              "description": "ظل أحمر متوهج (تأثير الـ glow)"
            },
            {
              "value": "0 0 20px rgba(255, 0, 0, 0.5)",
              "description": "ظل أحمر متوهج شفاف"
            },
            {
              "value": "inset 2px 2px 4px rgba(0,0,0,0.5)",
              "description": "ظل داخلي (غائر) بإزاحة 2 بكسل"
            },
            {
              "value": "0 0 0 5px red",
              "description": "ظل على شكل إطار أحمر (بدون ضبابية)"
            },
            {
              "value": "0 0 0 2px rgba(0,0,0,0.2)",
              "description": "ظل على شكل إطار شفاف"
            },
            {
              "value": "2px 2px 4px rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.2)",
              "description": "ظلال متعددة بتأثيرات مختلفة"
            },
            {
              "value": "0 4px 6px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)",
              "description": "ظلال متعددة بتأثير متدرج"
            },
            {
              "value": "0 10px 20px rgba(0,0,0,0.2)",
              "description": "ظل طويل للأسفل"
            },
            {
              "value": "-5px -5px 10px rgba(0,0,0,0.1)",
              "description": "ظل لأعلى ولليسار"
            },
            {
              "value": "inset 0 -2px 0 rgba(0,0,0,0.1)",
              "description": "ظل داخلي سفلي (تأثير خط فاصل)"
            },
            {
              "value": "inset 0 0 20px rgba(0,0,0,0.2)",
              "description": "ظل داخلي توهجي"
            },
            {
              "value": "0 20px 40px rgba(0,0,0,0.3)",
              "description": "ظل كبير عميق"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "outline",
      "description": "يحدد مخططاً خارجياً للعنصر (يظهر خارج الحافة ولا يأخذ مساحة)، مفيد للتأكيد على العناصر النشطة وفي إمكانية الوصول",
      "properties": [
        {
          "name": "outline",
          "description": "الخاصية المختصرة للمخطط الخارجي، تجمع width, style, color في سطر واحد",
          "values": [
            {
              "value": "none",
              "description": "بدون مخطط (القيمة الافتراضية)"
            },
            {
              "value": "2px solid red",
              "description": "مخطط أحمر سمك 2 بكسل صلبة"
            },
            {
              "value": "3px dashed blue",
              "description": "مخطط أزرق متقطع سمك 3 بكسل"
            },
            {
              "value": "4px dotted green",
              "description": "مخطط أخضر منقط"
            },
            {
              "value": "5px double orange",
              "description": "مخطط برتقالي مزدوج"
            },
            {
              "value": "2px solid #cccccc",
              "description": "مخطط رمادي فاتح"
            },
            {
              "value": "2px solid currentColor",
              "description": "مخطط بنفس لون النص"
            }
          ],
          "freeInput": true
        },
        {
          "name": "outline-width",
          "description": "يحدد سمك المخطط الخارجي، يتحكم في وضوح المخطط",
          "values": [
            {
              "value": "thin",
              "description": "سمك رفيع (عادة 1 بكسل)"
            },
            {
              "value": "medium",
              "description": "سمك متوسط (عادة 3 بكسل)"
            },
            {
              "value": "thick",
              "description": "سمك سميك (عادة 5 بكسل)"
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
              "value": "3px",
              "description": "سمك 3 بكسل"
            },
            {
              "value": "4px",
              "description": "سمك 4 بكسل"
            },
            {
              "value": "5px",
              "description": "سمك 5 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "outline-style",
          "description": "يحدد نمط المخطط الخارجي، يحدد شكل المخطط",
          "values": [
            {
              "value": "none",
              "description": "بدون مخطط"
            },
            {
              "value": "hidden",
              "description": "مخطط مخفي"
            },
            {
              "value": "solid",
              "description": "خط صلب - الأكثر استخداماً"
            },
            {
              "value": "dashed",
              "description": "متقطع بشرطات"
            },
            {
              "value": "dotted",
              "description": "منقط بنقاط"
            },
            {
              "value": "double",
              "description": "مزدوج - خطان متوازيان"
            },
            {
              "value": "groove",
              "description": "تجويف ثلاثي الأبعاد"
            },
            {
              "value": "ridge",
              "description": "بارز ثلاثي الأبعاد"
            },
            {
              "value": "inset",
              "description": "غائر ثلاثي الأبعاد"
            },
            {
              "value": "outset",
              "description": "بارز للخارج ثلاثي الأبعاد"
            }
          ]
        },
        {
          "name": "outline-color",
          "description": "يحدد لون المخطط الخارجي، يمكن استخدام أي قيمة لونية",
          "values": [
            {
              "value": "invert",
              "description": "لون معكوس من خلفية العنصر - يضمن الرؤية دائماً"
            },
            {
              "value": "currentColor",
              "description": "نفس لون النص (القيمة الافتراضية)"
            },
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            },
            {
              "value": "green",
              "description": "أخضر"
            },
            {
              "value": "#ff0000",
              "description": "أحمر (Hex)"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر (RGB)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "outline-offset",
          "description": "يحدد المسافة بين المخطط الخارجي وحافة العنصر، يسمح بإضافة فجوة بين العنصر والمخطط",
          "values": [
            {
              "value": "0",
              "description": "بدون فجوة (القيمة الافتراضية)"
            },
            {
              "value": "1px",
              "description": "فجوة 1 بكسل"
            },
            {
              "value": "2px",
              "description": "فجوة 2 بكسل"
            },
            {
              "value": "3px",
              "description": "فجوة 3 بكسل"
            },
            {
              "value": "4px",
              "description": "فجوة 4 بكسل"
            },
            {
              "value": "5px",
              "description": "فجوة 5 بكسل"
            },
            {
              "value": "10px",
              "description": "فجوة 10 بكسل"
            },
            {
              "value": "20px",
              "description": "فجوة 20 بكسل"
            },
            {
              "value": "-2px",
              "description": "يتداخل المخطط مع الحافة (داخل العنصر)"
            },
            {
              "value": "-5px",
              "description": "تداخل عميق"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "logical-borders",
      "description": "الخصائص المنطقية للحدود، تتكيف مع اتجاه النص (لغة RTL مثل العربية أو LTR مثل الإنجليزية)، مهمة للدعم متعدد اللغات",
      "properties": [
        {
          "name": "border-block",
          "description": "خاصية منطقية تحدد الحافة في اتجاه الكتلة (أعلى وأسفل في اللغات الأفقية) بدلاً من border-top/bottom",
          "values": [
            {
              "value": "2px solid black",
              "description": "حافة بداية ونهاية الكتلة معاً"
            },
            {
              "value": "3px dashed red",
              "description": "حافة حمراء متقطعة في اتجاه الكتلة"
            },
            {
              "value": "1px solid blue",
              "description": "حافة زرقاء"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-block-start",
          "description": "حافة بداية الكتلة (في الأعلى للغات الأفقية، في اليمين للغات العمودية)",
          "values": [
            {
              "value": "2px solid red",
              "description": "حافة بداية الكتلة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-block-end",
          "description": "حافة نهاية الكتلة (في الأسفل للغات الأفقية، في اليسار للغات العمودية)",
          "values": [
            {
              "value": "2px solid blue",
              "description": "حافة نهاية الكتلة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-inline",
          "description": "خاصية منطقية تحدد الحافة في اتجاه الخط (يمين ويسار في اللغات الأفقية) بدلاً من border-left/right، مفيدة لدعم اللغات ذات الاتجاه من اليمين لليسار مثل العربية",
          "values": [
            {
              "value": "2px solid black",
              "description": "حافة بداية ونهاية السطر معاً"
            },
            {
              "value": "2px dashed green",
              "description": "حافة خضراء متقطعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-inline-start",
          "description": "حافة بداية السطر (في اليسار للغات LTR، في اليمين للغات RTL مثل العربية)",
          "values": [
            {
              "value": "4px solid red",
              "description": "حافة بداية السطر - تظهر يساراً في الإنجليزية ويميناً في العربية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-inline-end",
          "description": "حافة نهاية السطر (في اليمين للغات LTR، في اليسار للغات RTL مثل العربية)",
          "values": [
            {
              "value": "4px solid blue",
              "description": "حافة نهاية السطر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-block-width",
          "description": "سمك الحافة في اتجاه الكتلة (أعلى وأسفل)",
          "values": [
            {
              "value": "2px",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "thin",
              "description": "سمك رفيع"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-block-style",
          "description": "نمط الحافة في اتجاه الكتلة",
          "values": [
            {
              "value": "solid",
              "description": "صلب"
            },
            {
              "value": "dashed",
              "description": "متقطع"
            }
          ]
        },
        {
          "name": "border-block-color",
          "description": "لون الحافة في اتجاه الكتلة",
          "values": [
            {
              "value": "red",
              "description": "أحمر"
            },
            {
              "value": "blue",
              "description": "أزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-inline-width",
          "description": "سمك الحافة في اتجاه السطر (يمين ويسار)",
          "values": [
            {
              "value": "2px",
              "description": "سمك 2 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border-inline-style",
          "description": "نمط الحافة في اتجاه السطر",
          "values": [
            {
              "value": "solid",
              "description": "صلب"
            },
            {
              "value": "dotted",
              "description": "منقط"
            }
          ]
        },
        {
          "name": "border-inline-color",
          "description": "لون الحافة في اتجاه السطر",
          "values": [
            {
              "value": "green",
              "description": "أخضر"
            },
            {
              "value": "#ff0000",
              "description": "أحمر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "border-examples",
      "description": "أمثلة عملية متقدمة للحدود والظلال تجمع بين عدة خصائص",
      "properties": [
        {
          "name": "مثال 1 - بطاقة أنيقة",
          "description": "بطاقة مزودة بظل جميل وحواف مستديرة",
          "values": [
            {
              "value": ".card { border: 1px solid #e0e0e0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }",
              "description": "بطاقة بتصميم نظيف وعصري"
            }
          ]
        },
        {
          "name": "مثال 2 - زر ثلاثي الأبعاد",
          "description": "زر بتأثير ثلاثي الأبعاد باستخدام الظلال والحدود",
          "values": [
            {
              "value": ".button { border: none; border-radius: 8px; box-shadow: 0 4px 0 #d32f2f, 0 6px 12px rgba(0,0,0,0.2); } .button:active { transform: translateY(4px); box-shadow: 0 2px 0 #d32f2f, 0 6px 12px rgba(0,0,0,0.2); }",
              "description": "زر ثلاثي الأبعاد مع تأثير الضغط"
            }
          ]
        },
        {
          "name": "مثال 3 - توهج بالجلو",
          "description": "تأثير توهج حول العنصر عند التمرير",
          "values": [
            {
              "value": ".element:hover { box-shadow: 0 0 20px rgba(0, 120, 255, 0.4), 0 0 60px rgba(0, 120, 255, 0.2); border-color: #0078ff; }",
              "description": "تأثير توهج أزرق"
            }
          ]
        },
        {
          "name": "مثال 4 - حافة مزخرفة بصورة",
          "description": "استخدام صورة كحافة للعنصر",
          "values": [
            {
              "value": ".fancy-border { border: 20px solid transparent; border-image: url('border-pattern.png') 30 round; border-radius: 12px; }",
              "description": "حافة مزخرفة بصورة"
            }
          ]
        },
        {
          "name": "مثال 5 - ظل داخلي عصري",
          "description": "ظل داخلي يعطي مظهراً غائراً للعنصر",
          "values": [
            {
              "value": ".inset-shadow { box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.06); border: 1px solid #eaeaea; border-radius: 8px; }",
              "description": "ظل داخلي ناعم"
            }
          ]
        },
        {
          "name": "مثال 6 - حدود متعددة الألوان",
          "description": "عنصر بحدود متعددة الألوان باستخدام box-shadow",
          "values": [
            {
              "value": ".multi-border { border: 3px solid blue; box-shadow: 0 0 0 3px red, 0 0 0 6px green, 0 0 0 9px orange; }",
              "description": "أربعة حدود متداخلة بألوان مختلفة"
            }
          ]
        }
      ]
    },
    {
      "tag": "border-tips",
      "description": "نصائح وإرشادات مهمة لاستخدام الحدود والظلال بشكل فعال",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الحدود والظلال",
          "values": [
            {
              "value": "استخدم box-shadow بحذر",
              "description": "الظلال الثقيلة قد تؤثر على أداء الصفحة"
            },
            {
              "value": "استخدم border-radius مع will-change",
              "description": "will-change: transform, border-radius يحسن أداء الزوايا الدائرية"
            },
            {
              "value": "تجنب box-shadow المتعددة الكبيرة",
              "description": "الظلال المتعددة على نفس العنصر قد تبطئ الأداء"
            }
          ]
        },
        {
          "name": "نصائح التصميم",
          "description": "نصائح لتصميم حدود وظلال جذابة",
          "values": [
            {
              "value": "استخدم الظلال الناعمة",
              "description": "rgba(0,0,0,0.08) يعطي ظلاً ناعماً وأنيقاً"
            },
            {
              "value": "اختر ألوان حدود متناسقة",
              "description": "تأكد من تناسق لون الحافة مع تصميمك العام"
            },
            {
              "value": "استخدم border-radius بشكل متناسب",
              "description": "الزوايا الدائرية تمنح مظهراً عصرياً"
            },
            {
              "value": "أضف انتقالات سلسة",
              "description": "استخدم transition للحدود والظلال لتغييرات ناعمة"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل الحدود والظلال قابلة للوصول",
          "values": [
            {
              "value": "تأكد من تباين الحواف",
              "description": "يجب أن تكون الحواف مرئية بوضوح"
            },
            {
              "value": "استخدم outline للحصول على التركيز",
              "description": "outline مهم لتحديد العناصر النشطة"
            },
            {
              "value": "لا تعتمد على اللون فقط",
              "description": "استخدم نمطاً مختلفاً لتحديد الحالة"
            }
          ]
        }
      ]
    }
  ],
  "transforms": [
    {
      "tag": "transform",
      "description": "يحدد تحويلاً واحداً أو أكثر يُطبق على العنصر (تدوير، تكبير، إمالة، نقل، إلخ)",
      "properties": [
        {
          "name": "transform",
          "description": "الخاصية الرئيسية لتطبيق التحويلات على العنصر، يمكن تطبيق تحويلات متعددة معاً",
          "values": [
            {
              "value": "none",
              "description": "بدون تحويل - القيمة الافتراضية"
            },
            {
              "value": "rotate(0deg)",
              "description": "بدون تدوير"
            },
            {
              "value": "rotate(5deg)",
              "description": "تدوير 5 درجات"
            },
            {
              "value": "rotate(10deg)",
              "description": "تدوير 10 درجات"
            },
            {
              "value": "rotate(15deg)",
              "description": "تدوير 15 درجة"
            },
            {
              "value": "rotate(20deg)",
              "description": "تدوير 20 درجة"
            },
            {
              "value": "rotate(30deg)",
              "description": "تدوير 30 درجة"
            },
            {
              "value": "rotate(45deg)",
              "description": "تدوير 45 درجة - شائع"
            },
            {
              "value": "rotate(60deg)",
              "description": "تدوير 60 درجة"
            },
            {
              "value": "rotate(90deg)",
              "description": "تدوير 90 درجة (ربع دورة)"
            },
            {
              "value": "rotate(120deg)",
              "description": "تدوير 120 درجة"
            },
            {
              "value": "rotate(135deg)",
              "description": "تدوير 135 درجة"
            },
            {
              "value": "rotate(180deg)",
              "description": "تدوير 180 درجة (نصف دورة)"
            },
            {
              "value": "rotate(270deg)",
              "description": "تدوير 270 درجة (ثلاثة أرباع دورة)"
            },
            {
              "value": "rotate(360deg)",
              "description": "تدوير 360 درجة (دورة كاملة)"
            },
            {
              "value": "rotate(-45deg)",
              "description": "تدوير عكسي 45 درجة"
            },
            {
              "value": "rotate(-90deg)",
              "description": "تدوير عكسي 90 درجة"
            },
            {
              "value": "rotate(0.25turn)",
              "description": "ربع دورة (90 درجة)"
            },
            {
              "value": "rotate(0.5turn)",
              "description": "نصف دورة (180 درجة)"
            },
            {
              "value": "rotate(0.75turn)",
              "description": "ثلاثة أرباع دورة (270 درجة)"
            },
            {
              "value": "rotate(1turn)",
              "description": "دورة كاملة (360 درجة)"
            },
            {
              "value": "rotateX(45deg)",
              "description": "يدور العنصر حول المحور X (أفقي) - تأثير ثلاثي الأبعاد"
            },
            {
              "value": "rotateX(90deg)",
              "description": "تدوير 90 درجة حول المحور X"
            },
            {
              "value": "rotateX(180deg)",
              "description": "تدوير 180 درجة حول المحور X"
            },
            {
              "value": "rotateY(45deg)",
              "description": "يدور العنصر حول المحور Y (عمودي) - تأثير ثلاثي الأبعاد"
            },
            {
              "value": "rotateY(90deg)",
              "description": "تدوير 90 درجة حول المحور Y"
            },
            {
              "value": "rotateY(180deg)",
              "description": "تدوير 180 درجة حول المحور Y"
            },
            {
              "value": "rotateZ(45deg)",
              "description": "يدور العنصر حول المحور Z - نفس rotate العادي"
            },
            {
              "value": "rotateZ(90deg)",
              "description": "تدوير 90 درجة حول المحور Z"
            },
            {
              "value": "rotate3d(1, 0, 0, 45deg)",
              "description": "يدور حول محور X بمقدار 45 درجة"
            },
            {
              "value": "rotate3d(0, 1, 0, 45deg)",
              "description": "يدور حول محور Y بمقدار 45 درجة"
            },
            {
              "value": "rotate3d(0, 0, 1, 45deg)",
              "description": "يدور حول محور Z بمقدار 45 درجة"
            },
            {
              "value": "rotate3d(1, 1, 0, 45deg)",
              "description": "يدور حول محور قطري (X,Y) بمقدار 45 درجة"
            },
            {
              "value": "rotate3d(1, 0, 1, 45deg)",
              "description": "يدور حول محور قطري (X,Z)"
            },
            {
              "value": "rotate3d(0, 1, 1, 45deg)",
              "description": "يدور حول محور قطري (Y,Z)"
            },
            {
              "value": "rotate3d(1, 1, 1, 45deg)",
              "description": "يدور حول محور قطري ثلاثي الأبعاد"
            },
            {
              "value": "scale(0)",
              "description": "يتلاشى العنصر تماماً (يصبح حجمه صفر)"
            },
            {
              "value": "scale(0.1)",
              "description": "تكبير إلى 10% من الحجم الأصلي"
            },
            {
              "value": "scale(0.25)",
              "description": "تكبير إلى 25%"
            },
            {
              "value": "scale(0.5)",
              "description": "تكبير إلى 50% (نصف الحجم)"
            },
            {
              "value": "scale(0.75)",
              "description": "تكبير إلى 75%"
            },
            {
              "value": "scale(1)",
              "description": "الحجم الطبيعي (بدون تغيير)"
            },
            {
              "value": "scale(1.1)",
              "description": "تكبير 110%"
            },
            {
              "value": "scale(1.25)",
              "description": "تكبير 125%"
            },
            {
              "value": "scale(1.5)",
              "description": "تكبير 150% (مرة ونصف)"
            },
            {
              "value": "scale(1.75)",
              "description": "تكبير 175%"
            },
            {
              "value": "scale(2)",
              "description": "تكبير الضعف (200%)"
            },
            {
              "value": "scale(2.5)",
              "description": "تكبير 250%"
            },
            {
              "value": "scale(3)",
              "description": "تكبير ثلاثة أضعاف (300%)"
            },
            {
              "value": "scale(-1)",
              "description": "عكس العنصر أفقياً (انعكاس)"
            },
            {
              "value": "scale(1, -1)",
              "description": "عكس العنصر عمودياً (انعكاس)"
            },
            {
              "value": "scale(-1, 1)",
              "description": "عكس العنصر أفقياً"
            },
            {
              "value": "scaleX(2)",
              "description": "يكبر العنصر أفقياً (عرض) بمقدار الضعف"
            },
            {
              "value": "scaleX(0.5)",
              "description": "يصغر العنصر أفقياً إلى النصف"
            },
            {
              "value": "scaleX(-1)",
              "description": "يعكس العنصر أفقياً"
            },
            {
              "value": "scaleY(2)",
              "description": "يكبر العنصر عمودياً (ارتفاع) بمقدار الضعف"
            },
            {
              "value": "scaleY(0.5)",
              "description": "يصغر العنصر عمودياً إلى النصف"
            },
            {
              "value": "scaleY(-1)",
              "description": "يعكس العنصر عمودياً"
            },
            {
              "value": "scaleZ(2)",
              "description": "يكبر في المحور Z (ثلاثي الأبعاد)"
            },
            {
              "value": "scaleZ(0.5)",
              "description": "يصغر في المحور Z"
            },
            {
              "value": "scale3d(1, 1.5, 2)",
              "description": "يكبر العنصر في الأبعاد الثلاثة"
            },
            {
              "value": "scale3d(2, 1, 1)",
              "description": "يكبر فقط في المحور X"
            },
            {
              "value": "scale3d(1, 2, 1)",
              "description": "يكبر فقط في المحور Y"
            },
            {
              "value": "scale3d(1, 1, 2)",
              "description": "يكبر فقط في المحور Z"
            },
            {
              "value": "scale3d(0.5, 0.5, 1)",
              "description": "يصغر في المحورين X,Y"
            },
            {
              "value": "translate(0, 0)",
              "description": "بدون نقل"
            },
            {
              "value": "translate(10px, 0)",
              "description": "نقل 10 بكسل يميناً"
            },
            {
              "value": "translate(-10px, 0)",
              "description": "نقل 10 بكسل يساراً"
            },
            {
              "value": "translate(0, 10px)",
              "description": "نقل 10 بكسل أسفل"
            },
            {
              "value": "translate(0, -10px)",
              "description": "نقل 10 بكسل أعلى"
            },
            {
              "value": "translate(20px, 20px)",
              "description": "نقل 20 بكسل يميناً و20 بكسل أسفل"
            },
            {
              "value": "translate(50px, 100px)",
              "description": "نقل 50 بكسل يميناً و100 بكسل أسفل"
            },
            {
              "value": "translate(100px, 50px)",
              "description": "نقل 100 بكسل يميناً و50 بكسل أسفل"
            },
            {
              "value": "translate(50%, 50%)",
              "description": "نقل بنسبة 50% من حجم العنصر"
            },
            {
              "value": "translate(-50%, -50%)",
              "description": "نقل عكسي بنسبة 50% - شائع للتوسيط"
            },
            {
              "value": "translate(10px, 20px)",
              "description": "نقل 10 بكسل يميناً و20 بكسل أسفل"
            },
            {
              "value": "translate(100px, -50px)",
              "description": "نقل 100 بكسل يميناً و50 بكسل أعلى"
            },
            {
              "value": "translateX(100px)",
              "description": "ينقل العنصر 100 بكسل يميناً"
            },
            {
              "value": "translateX(-100px)",
              "description": "ينقل العنصر 100 بكسل يساراً"
            },
            {
              "value": "translateX(50%)",
              "description": "ينقل العنصر بنسبة 50% من عرضه"
            },
            {
              "value": "translateX(-50%)",
              "description": "ينقل العنصر عكسياً بنسبة 50%"
            },
            {
              "value": "translateY(50px)",
              "description": "ينقل العنصر 50 بكسل أسفل"
            },
            {
              "value": "translateY(-50px)",
              "description": "ينقل العنصر 50 بكسل أعلى"
            },
            {
              "value": "translateY(50%)",
              "description": "ينقل العنصر بنسبة 50% من ارتفاعه"
            },
            {
              "value": "translateY(-50%)",
              "description": "ينقل العنصر عكسياً بنسبة 50%"
            },
            {
              "value": "translateZ(30px)",
              "description": "ينقل العنصر في المحور Z (ثلاثي الأبعاد)"
            },
            {
              "value": "translateZ(-30px)",
              "description": "ينقل العنصر عكسياً في المحور Z"
            },
            {
              "value": "translate3d(10px, 20px, 30px)",
              "description": "ينقل العنصر في الأبعاد الثلاثة"
            },
            {
              "value": "translate3d(50px, 0, 0)",
              "description": "ينقل فقط في المحور X"
            },
            {
              "value": "translate3d(0, 50px, 0)",
              "description": "ينقل فقط في المحور Y"
            },
            {
              "value": "translate3d(0, 0, 50px)",
              "description": "ينقل فقط في المحور Z"
            },
            {
              "value": "translate3d(-50px, -50px, 50px)",
              "description": "نقل في كل الأبعاد"
            },
            {
              "value": "skew(0deg, 0deg)",
              "description": "بدون إمالة"
            },
            {
              "value": "skew(10deg, 0deg)",
              "description": "إمالة أفقية 10 درجات"
            },
            {
              "value": "skew(0deg, 10deg)",
              "description": "إمالة عمودية 10 درجات"
            },
            {
              "value": "skew(10deg, 20deg)",
              "description": "إمالة أفقية 10 درجات وعمودية 20 درجة"
            },
            {
              "value": "skew(15deg, 15deg)",
              "description": "إمالة 15 درجة في كلا الاتجاهين"
            },
            {
              "value": "skew(30deg, 0deg)",
              "description": "إمالة أفقية 30 درجة"
            },
            {
              "value": "skew(0deg, 30deg)",
              "description": "إمالة عمودية 30 درجة"
            },
            {
              "value": "skew(-10deg, 0deg)",
              "description": "إمالة أفقية عكسية 10 درجات"
            },
            {
              "value": "skew(0deg, -10deg)",
              "description": "إمالة عمودية عكسية 10 درجات"
            },
            {
              "value": "skew(20deg, 10deg)",
              "description": "إمالة مختلفة في الاتجاهين"
            },
            {
              "value": "skewX(15deg)",
              "description": "يميل العنصر أفقياً 15 درجة"
            },
            {
              "value": "skewX(30deg)",
              "description": "يميل أفقياً 30 درجة"
            },
            {
              "value": "skewX(-15deg)",
              "description": "يميل أفقياً عكسياً 15 درجة"
            },
            {
              "value": "skewY(15deg)",
              "description": "يميل العنصر عمودياً 15 درجة"
            },
            {
              "value": "skewY(30deg)",
              "description": "يميل عمودياً 30 درجة"
            },
            {
              "value": "skewY(-15deg)",
              "description": "يميل عمودياً عكسياً 15 درجة"
            },
            {
              "value": "matrix(1, 0, 0, 1, 0, 0)",
              "description": "مصفوفة الوحدة (بدون تغيير)"
            },
            {
              "value": "matrix(1, 0, 0, 1, 50, 50)",
              "description": "نقل 50 بكسل في كلا الاتجاهين"
            },
            {
              "value": "matrix(2, 0, 0, 2, 0, 0)",
              "description": "تكبير الضعف"
            },
            {
              "value": "matrix(0.5, 0, 0, 0.5, 0, 0)",
              "description": "تصغير إلى النصف"
            },
            {
              "value": "matrix(1, 0.5, 0, 1, 0, 0)",
              "description": "إمالة أفقية"
            },
            {
              "value": "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)",
              "description": "تدوير 30 درجة"
            },
            {
              "value": "matrix(1, 0, 0, 1, 100, 200)",
              "description": "نقل 100 بكسل يميناً و200 بكسل أسفل"
            },
            {
              "value": "matrix(2, 0.5, 0.5, 2, 20, 30)",
              "description": "مصفوفة معقدة تجمع عدة تحويلات"
            },
            {
              "value": "perspective(1000px)",
              "description": "منظور 1000 بكسل - تأثير ثلاثي الأبعاد معتدل"
            },
            {
              "value": "perspective(500px)",
              "description": "منظور 500 بكسل - تأثير قوي"
            },
            {
              "value": "perspective(200px)",
              "description": "منظور 200 بكسل - تأثير قوي جداً"
            },
            {
              "value": "perspective(2000px)",
              "description": "منظور 2000 بكسل - تأثير خفيف"
            },
            {
              "value": "perspective(100px)",
              "description": "منظور 100 بكسل - تأثير مبالغ فيه"
            },
            {
              "value": "rotate(45deg) scale(1.5)",
              "description": "تدوير 45 درجة مع تكبير 1.5"
            },
            {
              "value": "rotate(45deg) scale(1.5) translate(20px)",
              "description": "ثلاثة تحويلات معاً - تُطبق بالترتيب (من اليمين لليسار)"
            },
            {
              "value": "translate(50px, 50px) rotate(45deg)",
              "description": "نقل ثم تدوير"
            },
            {
              "value": "rotate(45deg) translate(50px, 50px)",
              "description": "تدوير ثم نقل (نتيجة مختلفة)"
            },
            {
              "value": "scale(1.2) rotate(15deg) translate(30px)",
              "description": "تحويلات متعددة"
            },
            {
              "value": "rotateX(45deg) rotateY(45deg)",
              "description": "تدوير ثلاثي الأبعاد في اتجاهين"
            },
            {
              "value": "scale(2) rotate(30deg) translate(20px, 20px)",
              "description": "تحويلات معقدة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "transform-origin",
          "description": "يحدد نقطة المركز التي يدور أو يتكسر أو يتحرك حولها العنصر أثناء التحويل",
          "values": [
            {
              "value": "center",
              "description": "مركز العنصر - القيمة الافتراضية"
            },
            {
              "value": "center center",
              "description": "مركز العنصر (نفس center)"
            },
            {
              "value": "top",
              "description": "أعلى المنتصف"
            },
            {
              "value": "top center",
              "description": "أعلى المنتصف"
            },
            {
              "value": "bottom",
              "description": "أسفل المنتصف"
            },
            {
              "value": "bottom center",
              "description": "أسفل المنتصف"
            },
            {
              "value": "left",
              "description": "منتصف اليسار"
            },
            {
              "value": "left center",
              "description": "منتصف اليسار"
            },
            {
              "value": "right",
              "description": "منتصف اليمين"
            },
            {
              "value": "right center",
              "description": "منتصف اليمين"
            },
            {
              "value": "top left",
              "description": "أعلى الزاوية اليسرى"
            },
            {
              "value": "top right",
              "description": "أعلى الزاوية اليمنى"
            },
            {
              "value": "bottom left",
              "description": "أسفل الزاوية اليسرى"
            },
            {
              "value": "bottom right",
              "description": "أسفل الزاوية اليمنى"
            },
            {
              "value": "0% 0%",
              "description": "أعلى اليسار"
            },
            {
              "value": "0% 50%",
              "description": "منتصف اليسار"
            },
            {
              "value": "0% 100%",
              "description": "أسفل اليسار"
            },
            {
              "value": "50% 0%",
              "description": "أعلى المنتصف"
            },
            {
              "value": "50% 50%",
              "description": "المركز - القيمة الافتراضية"
            },
            {
              "value": "50% 100%",
              "description": "أسفل المنتصف"
            },
            {
              "value": "100% 0%",
              "description": "أعلى اليمين"
            },
            {
              "value": "100% 50%",
              "description": "منتصف اليمين"
            },
            {
              "value": "100% 100%",
              "description": "أسفل اليمين"
            },
            {
              "value": "20% 30%",
              "description": "20% من اليسار، 30% من الأعلى"
            },
            {
              "value": "75% 25%",
              "description": "75% من اليسار، 25% من الأعلى"
            },
            {
              "value": "10px 20px",
              "description": "10 بكسل من اليسار، 20 بكسل من الأعلى"
            },
            {
              "value": "50px 100px",
              "description": "50 بكسل من اليسار، 100 بكسل من الأعلى"
            },
            {
              "value": "0 0",
              "description": "أعلى اليسار"
            },
            {
              "value": "100px 0",
              "description": "100 بكسل من اليسار، أعلى"
            },
            {
              "value": "0 100px",
              "description": "يسار، 100 بكسل من الأعلى"
            },
            {
              "value": "center center 0",
              "description": "المركز بدون عمق - القيمة الافتراضية"
            },
            {
              "value": "center center 100px",
              "description": "المركز مع عمق 100 بكسل"
            },
            {
              "value": "top left 50px",
              "description": "أعلى اليسار مع عمق 50 بكسل"
            },
            {
              "value": "50% 50% 200px",
              "description": "المركز مع عمق 200 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "transform-style",
          "description": "يحدد كيف تتعامل العناصر الفرعية مع التحويلات ثلاثية الأبعاد (هل تحتفظ بموقعها ثلاثي الأبعاد أم تسطح)",
          "values": [
            {
              "value": "flat",
              "description": "تسطيح العناصر الفرعية في مستوى ثنائي الأبعاد - القيمة الافتراضية"
            },
            {
              "value": "preserve-3d",
              "description": "تحتفظ العناصر الفرعية بموقعها ثلاثي الأبعاد - ضروري للتأثيرات ثلاثية الأبعاد"
            }
          ]
        },
        {
          "name": "perspective",
          "description": "يضيف منظوراً ثلاثي الأبعاد للعنصر، يجعل الأجزاء البعيدة تبدو أصغر (تُطبق على العنصر الأب)",
          "values": [
            {
              "value": "none",
              "description": "بدون منظور - القيمة الافتراضية"
            },
            {
              "value": "100px",
              "description": "منظور 100 بكسل - تأثير قوي جداً (مبالغ فيه)"
            },
            {
              "value": "200px",
              "description": "منظور 200 بكسل - تأثير قوي"
            },
            {
              "value": "300px",
              "description": "منظور 300 بكسل"
            },
            {
              "value": "500px",
              "description": "منظور 500 بكسل - تأثير معتدل"
            },
            {
              "value": "800px",
              "description": "منظور 800 بكسل - تأثير خفيف"
            },
            {
              "value": "1000px",
              "description": "منظور 1000 بكسل - تأثير خفيف جداً"
            },
            {
              "value": "1500px",
              "description": "منظور 1500 بكسل"
            },
            {
              "value": "2000px",
              "description": "منظور 2000 بكسل - تأثير شبه معدوم"
            }
          ],
          "freeInput": true
        },
        {
          "name": "perspective-origin",
          "description": "يحدد نقطة النظر (مكان العين) التي يُرى منها العنصر ثلاثي الأبعاد",
          "values": [
            {
              "value": "center",
              "description": "المركز - القيمة الافتراضية"
            },
            {
              "value": "top",
              "description": "أعلى المنتصف"
            },
            {
              "value": "bottom",
              "description": "أسفل المنتصف"
            },
            {
              "value": "left",
              "description": "منتصف اليسار"
            },
            {
              "value": "right",
              "description": "منتصف اليمين"
            },
            {
              "value": "top left",
              "description": "أعلى اليسار"
            },
            {
              "value": "top right",
              "description": "أعلى اليمين"
            },
            {
              "value": "bottom left",
              "description": "أسفل اليسار"
            },
            {
              "value": "bottom right",
              "description": "أسفل اليمين"
            },
            {
              "value": "50% 50%",
              "description": "المركز"
            },
            {
              "value": "0% 0%",
              "description": "أعلى اليسار"
            },
            {
              "value": "100% 100%",
              "description": "أسفل اليمين"
            },
            {
              "value": "25% 75%",
              "description": "25% من اليسار، 75% من الأعلى"
            },
            {
              "value": "10px 20px",
              "description": "10 بكسل من اليسار، 20 بكسل من الأعلى"
            },
            {
              "value": "50px 100px",
              "description": "50 بكسل من اليسار، 100 بكسل من الأعلى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "backface-visibility",
          "description": "يحدد هل يظهر الوجه الخلفي للعنصر عند تدويره 180 درجة (مثل قلب بطاقة)",
          "values": [
            {
              "value": "visible",
              "description": "يظهر الوجه الخلفي (يمكن رؤية العنصر من الخلف) - القيمة الافتراضية"
            },
            {
              "value": "hidden",
              "description": "يخفي الوجه الخلفي (يبدو كأن العنصر اختفى عند الدوران 180 درجة)"
            }
          ]
        }
      ]
    },
    {
      "tag": "individual-transforms",
      "description": "خصائص منفصلة للتحويلات (translate, rotate, scale) تجعل كل تحويل مستقلاً عن الآخر، وتسهل الجمع بين عدة تحويلات في CSS Animations",
      "properties": [
        {
          "name": "translate",
          "description": "خاصية منفصلة للنقل (بديل حديث يجعل translate مستقلة عن transform)",
          "values": [
            {
              "value": "none",
              "description": "بدون نقل - القيمة الافتراضية"
            },
            {
              "value": "10px",
              "description": "نقل 10 بكسل في المحور X فقط (يمين)"
            },
            {
              "value": "-10px",
              "description": "نقل 10 بكسل يساراً"
            },
            {
              "value": "20px 30px",
              "description": "نقل 20 بكسل أفقياً و30 بكسل عمودياً"
            },
            {
              "value": "50px 100px",
              "description": "نقل 50 بكسل يميناً و100 بكسل أسفل"
            },
            {
              "value": "10px 20px 30px",
              "description": "نقل ثلاثي الأبعاد (x, y, z)"
            },
            {
              "value": "50%",
              "description": "نقل بنسبة 50% من العرض في المحور X"
            },
            {
              "value": "50% 50%",
              "description": "نقل بنسبة 50% في كلا الاتجاهين"
            }
          ],
          "freeInput": true
        },
        {
          "name": "rotate",
          "description": "خاصية منفصلة للتدوير، مستقلة عن transform مما يسهّل الجمع بين تدوير وحركات أخرى",
          "values": [
            {
              "value": "none",
              "description": "بدون تدوير - القيمة الافتراضية"
            },
            {
              "value": "45deg",
              "description": "تدوير 45 درجة حول المحور Z"
            },
            {
              "value": "90deg",
              "description": "تدوير 90 درجة"
            },
            {
              "value": "180deg",
              "description": "تدوير 180 درجة"
            },
            {
              "value": "360deg",
              "description": "تدوير 360 درجة (دورة كاملة)"
            },
            {
              "value": "x 45deg",
              "description": "تدوير حول المحور X بمقدار 45 درجة"
            },
            {
              "value": "y 45deg",
              "description": "تدوير حول المحور Y بمقدار 45 درجة"
            },
            {
              "value": "z 45deg",
              "description": "تدوير حول المحور Z بمقدار 45 درجة"
            },
            {
              "value": "1 1 0 45deg",
              "description": "تدوير حول محور مخصص ثلاثي الأبعاد"
            },
            {
              "value": "1 0 1 45deg",
              "description": "تدوير حول محور مخصص (X,Z)"
            },
            {
              "value": "0 1 1 45deg",
              "description": "تدوير حول محور مخصص (Y,Z)"
            },
            {
              "value": "1 1 1 45deg",
              "description": "تدوير حول محور مخصص ثلاثي الأبعاد"
            }
          ],
          "freeInput": true
        },
        {
          "name": "scale",
          "description": "خاصية منفصلة للتكبير/التصغير، مستقلة عن transform",
          "values": [
            {
              "value": "none",
              "description": "بدون تغيير حجم - القيمة الافتراضية"
            },
            {
              "value": "0.5",
              "description": "تصغير إلى 50% في كلا الاتجاهين"
            },
            {
              "value": "0.75",
              "description": "تصغير إلى 75%"
            },
            {
              "value": "1",
              "description": "الحجم الطبيعي"
            },
            {
              "value": "1.1",
              "description": "تكبير 110%"
            },
            {
              "value": "1.25",
              "description": "تكبير 125%"
            },
            {
              "value": "1.5",
              "description": "تكبير 150%"
            },
            {
              "value": "2",
              "description": "تكبير الضعف في كلا الاتجاهين"
            },
            {
              "value": "2 0.5",
              "description": "تكبير أفقي مضاعف، وتصغير عمودي للنصف"
            },
            {
              "value": "1.5 1",
              "description": "تكبير فقط في المحور X"
            },
            {
              "value": "1 1.5",
              "description": "تكبير فقط في المحور Y"
            },
            {
              "value": "1 1 2",
              "description": "تغيير حجم ثلاثي الأبعاد - تكبير في المحور Z"
            },
            {
              "value": "2 2 2",
              "description": "تكبير في الأبعاد الثلاثة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام التحويلات في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - تدوير صورة عند التمرير",
          "description": "صورة تدور عند تمرير الماوس فوقها",
          "values": [
            {
              "value": ".image { transition: transform 0.5s ease; } .image:hover { transform: rotate(15deg) scale(1.1); }",
              "description": "صورة تدور وتكبر عند التمرير"
            }
          ]
        },
        {
          "name": "مثال 2 - تأثير القفز (Bounce)",
          "description": "عنصر يقفز للأعلى عند التمرير",
          "values": [
            {
              "value": ".element { transition: transform 0.3s ease; } .element:hover { transform: translateY(-20px); }",
              "description": "قفزة للأعلى عند التمرير"
            }
          ]
        },
        {
          "name": "مثال 3 - قلب بطاقة (Flip Card)",
          "description": "بطاقة تنقلب عند التمرير باستخدام backface-visibility",
          "values": [
            {
              "value": ".card { perspective: 600px; } .card-inner { transform-style: preserve-3d; transition: transform 0.6s; } .card:hover .card-inner { transform: rotateY(180deg); } .card-front, .card-back { backface-visibility: hidden; } .card-back { transform: rotateY(180deg); }",
              "description": "بطاقة تنقلب 180 درجة"
            }
          ]
        },
        {
          "name": "مثال 4 - توسيط عنصر بالكامل",
          "description": "توسيط عنصر في المنتصف باستخدام transform",
          "values": [
            {
              "value": ".center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }",
              "description": "توسيط تام للعنصر"
            }
          ]
        },
        {
          "name": "مثال 5 - تأثير ثلاثي الأبعاد مع المنظور",
          "description": "عنصر ثلاثي الأبعاد يدور مع المنظور",
          "values": [
            {
              "value": ".cube { perspective: 800px; transform-style: preserve-3d; } .cube:hover { transform: rotateX(30deg) rotateY(30deg); }",
              "description": "مكعب ثلاثي الأبعاد"
            }
          ]
        },
        {
          "name": "مثال 6 - تأثير التكبير المتدرج",
          "description": "تكبير تدريجي مع دوران",
          "values": [
            {
              "value": "@keyframes zoomRotate { 0% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.2) rotate(180deg); } 100% { transform: scale(1) rotate(360deg); } } .animated { animation: zoomRotate 3s ease-in-out infinite; }",
              "description": "حركة تكبير مع دوران مستمر"
            }
          ]
        },
        {
          "name": "مثال 7 - إمالة النص",
          "description": "نص مائل لتأثير ديناميكي",
          "values": [
            {
              "value": ".skew-text { transform: skewX(-10deg); font-size: 2rem; }",
              "description": "نص مائل 10 درجات"
            }
          ]
        },
        {
          "name": "مثال 8 - تأثير التموج",
          "description": "سلسلة من العناصر بتحويلات متتابعة",
          "values": [
            {
              "value": ".wave span { display: inline-block; animation: wave 2s ease-in-out infinite; } .wave span:nth-child(1) { animation-delay: 0s; } .wave span:nth-child(2) { animation-delay: 0.2s; } .wave span:nth-child(3) { animation-delay: 0.4s; } @keyframes wave { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }",
              "description": "تأثير تموج"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام التحويلات بشكل فعال",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء التحويلات",
          "values": [
            {
              "value": "استخدم transform بدلاً من top/left",
              "description": "transform يستخدم GPU ولا يسبب إعادة تدفق (reflow)"
            },
            {
              "value": "استخدم will-change",
              "description": "will-change: transform يحسن أداء الرسوم المتحركة"
            },
            {
              "value": "استخدم translateZ(0) للتسريع",
              "description": "يحفّز تسريع GPU للعنصر"
            },
            {
              "value": "تجنب تحويلات متعددة ثقيلة",
              "description": "قد تؤثر على الأداء في الأجهزة الضعيفة"
            }
          ]
        },
        {
          "name": "نصائح ثلاثية الأبعاد",
          "description": "نصائح لاستخدام التحويلات ثلاثية الأبعاد",
          "values": [
            {
              "value": "استخدم perspective على الأب",
              "description": "لتطبيق المنظور على جميع العناصر الفرعية"
            },
            {
              "value": "استخدم transform-style: preserve-3d",
              "description": "للحفاظ على التأثير ثلاثي الأبعاد"
            },
            {
              "value": "استخدم backface-visibility: hidden",
              "description": "لإخفاء الوجه الخلفي في البطاقات"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل التحويلات قابلة للوصول",
          "values": [
            {
              "value": "استخدم prefers-reduced-motion",
              "description": "قلل الحركات للمستخدمين الذين يطلبون ذلك"
            },
            {
              "value": "تجنب التحويلات المزعجة",
              "description": "الحركات السريعة أو الوامضة قد تسبب مشاكل"
            },
            {
              "value": "أضف عناصر تحكم",
              "description": "قدم للمستخدمين إمكانية إيقاف الحركات"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام التحويلات",
          "values": [
            {
              "value": "نسيان transform-origin",
              "description": "قد يسبب تدويراً حول نقطة غير متوقعة"
            },
            {
              "value": "ترتيب التحويلات",
              "description": "ترتيب التحويلات يؤثر على النتيجة النهائية"
            },
            {
              "value": "نسيان perspective",
              "description": "بدون perspective لا يظهر التأثير ثلاثي الأبعاد"
            },
            {
              "value": "استخدام transform مع display: inline",
              "description": "قد لا يعمل كما هو متوقع"
            }
          ]
        }
      ]
    }
  ],
  "transitions": [
    {
      "tag": "transition",
      "description": "اختصار لتحديد خصائص الانتقال (الخاصية، المدة، دالة التوقيت، التأخير، والسلوك) في سطر واحد",
      "properties": [
        {
          "name": "transition",
          "description": "الخاصية المختصرة للانتقالات، تجمع كل الخصائص الفرعية في سطر واحد (الترتيب: property duration timing-function delay)",
          "values": [
            {
              "value": "none",
              "description": "بدون انتقال - القيمة الافتراضية"
            },
            {
              "value": "all 0.3s ease",
              "description": "كل الخصائص تتغير خلال 0.3 ثانية بسلاسة"
            },
            {
              "value": "all 0.3s ease 0.1s",
              "description": "كل الخصائص تتغير خلال 0.3 ثانية مع تأخير 0.1 ثانية"
            },
            {
              "value": "background-color 0.5s ease-in-out",
              "description": "لون الخلفية فقط يتغير خلال 0.5 ثانية"
            },
            {
              "value": "opacity 0.4s ease-in 0.2s",
              "description": "الشفافية تتغير خلال 0.4 ثانية مع تأخير 0.2 ثانية"
            },
            {
              "value": "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
              "description": "تحويلات باستخدام منحنى بيزييه مخصص"
            },
            {
              "value": "color 0.3s linear",
              "description": "لون النص يتغير بسرعة ثابتة"
            },
            {
              "value": "width 0.3s, height 0.3s, background-color 0.5s",
              "description": "انتقالات متعددة لخصائص مختلفة بنفس المدة"
            },
            {
              "value": "width 0.3s ease, height 0.5s ease-in, opacity 0.4s ease-out",
              "description": "انتقالات متعددة بمدد ودوال مختلفة"
            },
            {
              "value": "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              "description": "تأثير ارتداد (Bounce) باستخدام منحنى بيزييه"
            },
            {
              "value": "all 0.2s step-end",
              "description": "انتقال فوري في النهاية (خطوات)"
            },
            {
              "value": "all 0.8s ease 0.2s, transform 0.6s ease-in",
              "description": "خصائص مختلفة بمدد وتأخيرات مختلفة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "transition-property",
      "description": "يحدد أي الخصائص ستتغير بتأثير الانتقال (يمكن تحديد خاصية واحدة أو عدة خصائص)",
      "properties": [
        {
          "name": "transition-property",
          "description": "يحدد أي الخصائص ستتغير بتأثير الانتقال",
          "values": [
            {
              "value": "all",
              "description": "جميع الخصائص القابلة للانتقال - القيمة الافتراضية"
            },
            {
              "value": "none",
              "description": "لا شيء - لا يوجد انتقال"
            },
            {
              "value": "width",
              "description": "العرض فقط"
            },
            {
              "value": "height",
              "description": "الارتفاع فقط"
            },
            {
              "value": "min-width",
              "description": "الحد الأدنى للعرض"
            },
            {
              "value": "max-width",
              "description": "الحد الأقصى للعرض"
            },
            {
              "value": "min-height",
              "description": "الحد الأدنى للارتفاع"
            },
            {
              "value": "max-height",
              "description": "الحد الأقصى للارتفاع"
            },
            {
              "value": "top, left, right, bottom",
              "description": "خصائص الموضع"
            },
            {
              "value": "margin, padding",
              "description": "الهوامش والحشو"
            },
            {
              "value": "color",
              "description": "لون النص"
            },
            {
              "value": "background-color",
              "description": "لون الخلفية"
            },
            {
              "value": "border-color",
              "description": "لون الحافة"
            },
            {
              "value": "outline-color",
              "description": "لون المخطط الخارجي"
            },
            {
              "value": "box-shadow",
              "description": "الظل"
            },
            {
              "value": "text-shadow",
              "description": "ظل النص"
            },
            {
              "value": "opacity",
              "description": "الشفافية"
            },
            {
              "value": "visibility",
              "description": "الرؤية (مع allow-discrete)"
            },
            {
              "value": "display",
              "description": "نوع العرض (مع allow-discrete)"
            },
            {
              "value": "transform",
              "description": "التحويلات (تدوير، تكبير، نقل)"
            },
            {
              "value": "translate, rotate, scale",
              "description": "خصائص التحويل المنفصلة"
            },
            {
              "value": "transform-origin",
              "description": "نقطة مركز التحويل"
            },
            {
              "value": "font-size",
              "description": "حجم الخط"
            },
            {
              "value": "font-weight",
              "description": "وزن الخط"
            },
            {
              "value": "letter-spacing",
              "description": "تباعد الحروف"
            },
            {
              "value": "word-spacing",
              "description": "تباعد الكلمات"
            },
            {
              "value": "line-height",
              "description": "ارتفاع السطر"
            },
            {
              "value": "text-indent",
              "description": "إزاحة السطر الأول"
            },
            {
              "value": "border-width",
              "description": "سمك الحافة"
            },
            {
              "value": "border-radius",
              "description": "انحناء الحافة"
            },
            {
              "value": "border-spacing",
              "description": "تباعد حواف الجدول"
            },
            {
              "value": "z-index",
              "description": "ترتيب الطبقات"
            },
            {
              "value": "flex-grow, flex-shrink, flex-basis",
              "description": "خصائص Flexbox"
            },
            {
              "value": "grid-template-columns, grid-template-rows",
              "description": "خصائص Grid"
            },
            {
              "value": "clip-path",
              "description": "مسار القص"
            },
            {
              "value": "filter",
              "description": "الفلاتر"
            },
            {
              "value": "backdrop-filter",
              "description": "فلاتر الخلفية"
            },
            {
              "value": "perspective",
              "description": "المنظور"
            },
            {
              "value": "opacity, transform",
              "description": "الشفافية والتحويلات معاً"
            },
            {
              "value": "width, height, margin",
              "description": "الأبعاد والهوامش"
            },
            {
              "value": "background-color, color, border-color",
              "description": "خصائص الألوان معاً"
            },
            {
              "value": "all",
              "description": "جميع الخصائص"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "transition-duration",
      "description": "يحدد المدة الزمنية التي يستغرقها الانتقال من البداية إلى النهاية",
      "properties": [
        {
          "name": "transition-duration",
          "description": "يحدد المدة الزمنية التي يستغرقها الانتقال من البداية إلى النهاية",
          "values": [
            {
              "value": "0s",
              "description": "فوري بدون انتقال - القيمة الافتراضية"
            },
            {
              "value": "0.05s",
              "description": "50 مللي ثانية - سريع جداً"
            },
            {
              "value": "0.1s",
              "description": "100 مللي ثانية"
            },
            {
              "value": "0.15s",
              "description": "150 مللي ثانية"
            },
            {
              "value": "0.2s",
              "description": "200 مللي ثانية - سريع"
            },
            {
              "value": "0.25s",
              "description": "250 مللي ثانية"
            },
            {
              "value": "0.3s",
              "description": "300 مللي ثانية - شائع للتفاعلات البسيطة"
            },
            {
              "value": "0.35s",
              "description": "350 مللي ثانية"
            },
            {
              "value": "0.4s",
              "description": "400 مللي ثانية"
            },
            {
              "value": "0.45s",
              "description": "450 مللي ثانية"
            },
            {
              "value": "0.5s",
              "description": "500 مللي ثانية (نصف ثانية) - شائع للانتقالات"
            },
            {
              "value": "0.6s",
              "description": "600 مللي ثانية"
            },
            {
              "value": "0.7s",
              "description": "700 مللي ثانية"
            },
            {
              "value": "0.8s",
              "description": "800 مللي ثانية"
            },
            {
              "value": "0.9s",
              "description": "900 مللي ثانية"
            },
            {
              "value": "1s",
              "description": "ثانية واحدة - بطيء"
            },
            {
              "value": "1.2s",
              "description": "1.2 ثانية"
            },
            {
              "value": "1.5s",
              "description": "1.5 ثانية"
            },
            {
              "value": "2s",
              "description": "ثانيتان - بطيء جداً"
            },
            {
              "value": "3s",
              "description": "ثلاث ثوان"
            },
            {
              "value": "5s",
              "description": "خمس ثوان"
            },
            {
              "value": "100ms",
              "description": "100 مللي ثانية"
            },
            {
              "value": "200ms",
              "description": "200 مللي ثانية"
            },
            {
              "value": "300ms",
              "description": "300 مللي ثانية"
            },
            {
              "value": "500ms",
              "description": "500 مللي ثانية"
            },
            {
              "value": "750ms",
              "description": "750 مللي ثانية"
            },
            {
              "value": "0.2s, 0.5s",
              "description": "مدد مختلفة لخصائص مختلفة"
            },
            {
              "value": "0.3s, 0.6s, 0.9s",
              "description": "ثلاث مدد مختلفة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "transition-timing-function",
      "description": "يحدد منحنى سرعة الانتقال (كيف تتغير السرعة خلال المدة: ثابت، متسارع، متباطئ، إلخ)",
      "properties": [
        {
          "name": "transition-timing-function",
          "description": "يحدد منحنى سرعة الانتقال (كيف تتغير السرعة خلال المدة)",
          "values": [
            {
              "value": "ease",
              "description": "يبدأ ببطء، يتسارع، ثم يتباطأ - القيمة الافتراضية، حركة طبيعية"
            },
            {
              "value": "ease-in",
              "description": "يبدأ ببطء شديد ثم يتسارع تدريجياً - حركة تسارعية"
            },
            {
              "value": "ease-out",
              "description": "يبدأ سريعاً ثم يتباطأ تدريجياً - حركة تباطؤية"
            },
            {
              "value": "ease-in-out",
              "description": "يبدأ ببطء، يتسارع في المنتصف، ثم يتباطأ - حركة متوازنة"
            },
            {
              "value": "linear",
              "description": "سرعة ثابتة من البداية إلى النهاية - حركة آلية"
            },
            {
              "value": "step-start",
              "description": "يتغير فوراً في البداية ويبقى ثابتاً - حركة متقطعة"
            },
            {
              "value": "step-end",
              "description": "يبقى ثابتاً ثم يتغير فوراً في النهاية"
            },
            {
              "value": "steps(2)",
              "description": "يتغير على خطوتين متساويتين"
            },
            {
              "value": "steps(4)",
              "description": "يتغير على 4 خطوات متساوية"
            },
            {
              "value": "steps(6)",
              "description": "يتغير على 6 خطوات"
            },
            {
              "value": "steps(2, start)",
              "description": "يتغير على خطوتين، التغيير عند بداية كل خطوة"
            },
            {
              "value": "steps(2, end)",
              "description": "يتغير على خطوتين، التغيير عند نهاية كل خطوة"
            },
            {
              "value": "steps(4, jump-start)",
              "description": "4 خطوات مع قفز في البداية"
            },
            {
              "value": "steps(4, jump-end)",
              "description": "4 خطوات مع قفز في النهاية"
            },
            {
              "value": "steps(4, jump-none)",
              "description": "4 خطوات بدون قفز"
            },
            {
              "value": "steps(4, jump-both)",
              "description": "4 خطوات مع قفز في البداية والنهاية"
            },
            {
              "value": "cubic-bezier(0.25, 0.1, 0.25, 1)",
              "description": "منحنى بيزييه مخصص (مكافئ لـ ease)"
            },
            {
              "value": "cubic-bezier(0.42, 0, 1, 1)",
              "description": "منحنى بيزييه مخصص (مكافئ لـ ease-in)"
            },
            {
              "value": "cubic-bezier(0, 0, 0.58, 1)",
              "description": "منحنى بيزييه مخصص (مكافئ لـ ease-out)"
            },
            {
              "value": "cubic-bezier(0.42, 0, 0.58, 1)",
              "description": "منحنى بيزييه مخصص (مكافئ لـ ease-in-out)"
            },
            {
              "value": "cubic-bezier(0.47, 0, 0.745, 0.715)",
              "description": "تسارع سريع"
            },
            {
              "value": "cubic-bezier(0.39, 0.575, 0.565, 1)",
              "description": "تباطؤ سلس"
            },
            {
              "value": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
              "description": "تسارع حاد"
            },
            {
              "value": "cubic-bezier(0.215, 0.61, 0.355, 1)",
              "description": "تباطؤ حاد"
            },
            {
              "value": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
              "description": "مرونة عالية"
            },
            {
              "value": "cubic-bezier(0.19, 1, 0.22, 1)",
              "description": "تأثير مرن (Elastic)"
            },
            {
              "value": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              "description": "تأثير ارتداد (Bounce)"
            },
            {
              "value": "cubic-bezier(0.6, -0.05, 0.735, 0.045)",
              "description": "تأثير مرتد خفيف"
            },
            {
              "value": "cubic-bezier(0.85, 0, 0.15, 1)",
              "description": "تأثير مرن متماثل"
            },
            {
              "value": "ease-in, ease-out",
              "description": "دوال مختلفة لخصائص مختلفة"
            },
            {
              "value": "ease, linear, ease-in-out",
              "description": "ثلاث دوال مختلفة"
            }
          ]
        }
      ]
    },
    {
      "tag": "transition-delay",
      "description": "يحدد وقت التأخير قبل بدء الانتقال (مدة الانتظار قبل التغيير)",
      "properties": [
        {
          "name": "transition-delay",
          "description": "يحدد وقت التأخير قبل بدء الانتقال (مدة الانتظار قبل التغيير)",
          "values": [
            {
              "value": "0s",
              "description": "بدون تأخير، يبدأ فوراً - القيمة الافتراضية"
            },
            {
              "value": "0.05s",
              "description": "تأخير 50 مللي ثانية"
            },
            {
              "value": "0.1s",
              "description": "تأخير 100 مللي ثانية"
            },
            {
              "value": "0.15s",
              "description": "تأخير 150 مللي ثانية"
            },
            {
              "value": "0.2s",
              "description": "تأخير 200 مللي ثانية"
            },
            {
              "value": "0.25s",
              "description": "تأخير 250 مللي ثانية"
            },
            {
              "value": "0.3s",
              "description": "تأخير 300 مللي ثانية"
            },
            {
              "value": "0.4s",
              "description": "تأخير 400 مللي ثانية"
            },
            {
              "value": "0.5s",
              "description": "تأخير نصف ثانية - شائع"
            },
            {
              "value": "0.75s",
              "description": "تأخير 750 مللي ثانية"
            },
            {
              "value": "1s",
              "description": "تأخير ثانية واحدة"
            },
            {
              "value": "1.5s",
              "description": "تأخير 1.5 ثانية"
            },
            {
              "value": "2s",
              "description": "تأخير ثانيتين"
            },
            {
              "value": "3s",
              "description": "تأخير ثلاث ثوان"
            },
            {
              "value": "5s",
              "description": "تأخير خمس ثوان"
            },
            {
              "value": "100ms",
              "description": "تأخير 100 مللي ثانية"
            },
            {
              "value": "200ms",
              "description": "تأخير 200 مللي ثانية"
            },
            {
              "value": "500ms",
              "description": "تأخير 500 مللي ثانية"
            },
            {
              "value": "0.2s, 0.5s",
              "description": "تأخيرات مختلفة لخصائص مختلفة"
            },
            {
              "value": "0.1s, 0.2s, 0.3s",
              "description": "ثلاث تأخيرات مختلفة"
            },
            {
              "value": "-0.5s",
              "description": "قيمة سالبة - يبدأ الانتقال وكأنه بدأ قبل نصف ثانية (مقطوع)"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "transition-behavior",
      "description": "يحدد هل يشمل الانتقال الخصائص المنفصلة (Discrete) مثل display أو visibility التي تتغير دفعة واحدة عادة بدلاً من تدريجياً",
      "properties": [
        {
          "name": "transition-behavior",
          "description": "يحدد هل يشمل الانتقال الخصائص المنفصلة (Discrete) مثل display أو visibility",
          "values": [
            {
              "value": "normal",
              "description": "لا انتقال للخصائص المنفصلة - القيمة الافتراضية"
            },
            {
              "value": "allow-discrete",
              "description": "يسمح بتطبيق انتقال حتى على خصائص منفصلة مثل display و visibility"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام الانتقالات في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - زر بتأثير hover",
          "description": "زر يتغير لونه وحجمه عند التمرير",
          "values": [
            {
              "value": ".button { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 8px; transition: all 0.3s ease; } .button:hover { background: #0056b3; transform: scale(1.05); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }",
              "description": "زر بتأثير hover سلس"
            }
          ]
        },
        {
          "name": "مثال 2 - تأثير تلاشي",
          "description": "عنصر يظهر ويختفي بتلاشي",
          "values": [
            {
              "value": ".fade { opacity: 0; transition: opacity 0.5s ease-in-out; } .fade.show { opacity: 1; }",
              "description": "تأثير تلاشي سلس"
            }
          ]
        },
        {
          "name": "مثال 3 - انتقال مع تأخير متسلسل",
          "description": "عناصر تظهر بتأخير متتابع",
          "values": [
            {
              "value": ".item { opacity: 0; transform: translateY(20px); transition: all 0.4s ease-out; } .item:nth-child(1) { transition-delay: 0.1s; } .item:nth-child(2) { transition-delay: 0.2s; } .item:nth-child(3) { transition-delay: 0.3s; } .item.visible { opacity: 1; transform: translateY(0); }",
              "description": "عناصر تظهر بتسلسل زمني"
            }
          ]
        },
        {
          "name": "مثال 4 - انتقال مرن (Bounce)",
          "description": "تأثير ارتداد باستخدام cubic-bezier",
          "values": [
            {
              "value": ".bounce { transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55); } .bounce:hover { transform: scale(1.2); }",
              "description": "تأثير ارتداد عند التمرير"
            }
          ]
        },
        {
          "name": "مثال 5 - انتقال مع allow-discrete",
          "description": "انتقال خروج سلس مع display: none",
          "values": [
            {
              "value": ".element { display: none; opacity: 0; transition: opacity 0.5s ease, display 0.5s ease allow-discrete; } .element.visible { display: block; opacity: 1; }",
              "description": "انتقال سلس مع display: none"
            }
          ]
        },
        {
          "name": "مثال 6 - انتقالات متعددة",
          "description": "خصائص مختلفة بمدد وتأخيرات مختلفة",
          "values": [
            {
              "value": ".multi-transition { transition: background-color 0.3s ease, transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 0.4s ease-in-out; } .multi-transition:hover { background-color: #007bff; transform: scale(1.1) rotate(5deg); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }",
              "description": "انتقالات متعددة بتأثيرات مختلفة"
            }
          ]
        },
        {
          "name": "مثال 7 - تأثير الـ Slide",
          "description": "عنصر ينزلق من الجانب",
          "values": [
            {
              "value": ".slide { transform: translateX(-100%); transition: transform 0.5s ease-in-out; } .slide.open { transform: translateX(0); }",
              "description": "انزلاق من اليسار"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام الانتقالات بشكل فعال",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الانتقالات",
          "values": [
            {
              "value": "استخدم transform و opacity",
              "description": "هذه الخصائص تُعالج بواسطة GPU مما يعطي أداءً أفضل"
            },
            {
              "value": "تجنب transition: all",
              "description": "قد يسبب انتقالات غير مرغوب فيها ويؤثر على الأداء"
            },
            {
              "value": "استخدم will-change",
              "description": "will-change: transform, opacity يحسن أداء الانتقالات"
            },
            {
              "value": "حافظ على 60fps",
              "description": "تأكد من أن الانتقالات تعمل بسلاسة"
            }
          ]
        },
        {
          "name": "نصائح التصميم",
          "description": "نصائح لتصميم انتقالات جذابة",
          "values": [
            {
              "value": "استخدم ease-in-out للحركات الطبيعية",
              "description": "تعطي شعوراً أكثر طبيعية"
            },
            {
              "value": "لا تفرط في استخدام الانتقالات",
              "description": "استخدمها بشكل مدروس ومحدود"
            },
            {
              "value": "استخدم مدداً مختلفة",
              "description": "0.2-0.5 ثانية للتفاعلات البسيطة، 0.5-1 ثانية للانتقالات المعقدة"
            },
            {
              "value": "استخدم cubic-bezier للتأثيرات المخصصة",
              "description": "للحصول على تأثيرات فريدة مثل الارتداد"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل الانتقالات قابلة للوصول",
          "values": [
            {
              "value": "احترم prefers-reduced-motion",
              "description": "قلل الحركات للمستخدمين الذين يطلبون ذلك"
            },
            {
              "value": "تجنب الانتقالات السريعة جداً",
              "description": "قد تسبب مشاكل للمستخدمين"
            },
            {
              "value": "تجنب الانتقالات البطيئة جداً",
              "description": "قد تكون مزعجة للمستخدمين"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام الانتقالات",
          "values": [
            {
              "value": "نسيان transition على الحالة الأصلية",
              "description": "ضع transition على العنصر وليس على :hover"
            },
            {
              "value": "استخدام transition: all بدون تمييز",
              "description": "قد يسبب انتقالات غير مرغوب فيها"
            },
            {
              "value": "نسيان cubic-bezier في التأثيرات المخصصة",
              "description": "لا تعمل بدون تحديد منحنى"
            },
            {
              "value": "استخدام transition مع display: none",
              "description": "display ليس خاصية قابلة للانتقال (استخدم allow-discrete)"
            }
          ]
        }
      ]
    }
  ],
  "animations": [
    {
      "tag": "animation",
      "description": "اختصار لتحديد جميع خصائص الرسوم المتحركة في سطر واحد، يسهل كتابة حركات معقدة بسرعة دون تكرار الكود",
      "properties": [
        {
          "name": "animation",
          "description": "الخاصية المختصرة للرسوم المتحركة، تجمع جميع الخصائص في قيمة واحدة بترتيب محدد",
          "values": [
            {
              "value": "none",
              "description": "بدون رسوم متحركة (القيمة الافتراضية)"
            },
            {
              "value": "slide 2s ease-in-out infinite",
              "description": "حركة 'slide' لمدة 2 ثانية بسلاسة وبشكل لا نهائي"
            },
            {
              "value": "fade 1s forwards",
              "description": "حركة 'fade' لمدة ثانية وتتوقف عند الحالة النهائية"
            },
            {
              "value": "spin 3s linear 0.5s 5",
              "description": "حركة 'spin' لمدة 3 ثانية بسرعة ثابتة، تأخير 0.5 ثانية، تتكرر 5 مرات"
            },
            {
              "value": "bounce 0.8s ease-in-out infinite alternate",
              "description": "حركة 'bounce' ذهاباً وإياباً بشكل لا نهائي"
            },
            {
              "value": "pulse 1.5s ease 0.2s infinite",
              "description": "حركة 'pulse' لمدة 1.5 ثانية مع تأخير 0.2 ثانية"
            },
            {
              "value": "shake 0.5s ease-in-out 3",
              "description": "حركة 'shake' تتكرر 3 مرات"
            },
            {
              "value": "fadeIn 2s ease-out forwards",
              "description": "ظهور تدريجي لمدة 2 ثانية مع بقاء النتيجة النهائية"
            },
            {
              "value": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both",
              "description": "حركة مخصصة بمنحنى بيزييه مع تطبيق الأنماط قبل وبعد"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "animation-name",
      "description": "يحدد اسم الحركة التي تم تعريفها باستخدام @keyframes، يجب أن يتطابق الاسم مع ما هو معرف في القاعدة",
      "properties": [
        {
          "name": "animation-name",
          "description": "يحدد اسم الحركة التي تم تعريفها باستخدام @keyframes",
          "values": [
            {
              "value": "none",
              "description": "بدون حركة (القيمة الافتراضية)"
            },
            {
              "value": "slideIn",
              "description": "اسم حركة الدخول من الجانب"
            },
            {
              "value": "slideOut",
              "description": "اسم حركة الخروج من الجانب"
            },
            {
              "value": "fadeIn",
              "description": "اسم حركة الظهور التدريجي"
            },
            {
              "value": "fadeOut",
              "description": "اسم حركة الاختفاء التدريجي"
            },
            {
              "value": "bounce",
              "description": "اسم حركة الارتداد"
            },
            {
              "value": "spin",
              "description": "اسم حركة الدوران"
            },
            {
              "value": "pulse",
              "description": "اسم حركة النبض"
            },
            {
              "value": "shake",
              "description": "اسم حركة الاهتزاز"
            },
            {
              "value": "zoomIn",
              "description": "اسم حركة التكبير"
            },
            {
              "value": "zoomOut",
              "description": "اسم حركة التصغير"
            },
            {
              "value": "rotate",
              "description": "اسم حركة الدوران"
            },
            {
              "value": "scale",
              "description": "اسم حركة تغيير الحجم"
            },
            {
              "value": "translate",
              "description": "اسم حركة الانتقال"
            },
            {
              "value": "blur",
              "description": "اسم حركة الضبابية"
            },
            {
              "value": "colorChange",
              "description": "اسم حركة تغيير اللون"
            },
            {
              "value": "glow",
              "description": "اسم حركة التوهج"
            },
            {
              "value": "float",
              "description": "اسم حركة الطفو"
            },
            {
              "value": "swing",
              "description": "اسم حركة التأرجح"
            },
            {
              "value": "wobble",
              "description": "اسم حركة التمايل"
            },
            {
              "value": "flip",
              "description": "اسم حركة التقليب"
            },
            {
              "value": "slideUp",
              "description": "اسم حركة الصعود"
            },
            {
              "value": "slideDown",
              "description": "اسم حركة النزول"
            },
            {
              "value": "slideLeft",
              "description": "اسم حركة اليسار"
            },
            {
              "value": "slideRight",
              "description": "اسم حركة اليمين"
            },
            {
              "value": "expand",
              "description": "اسم حركة التوسع"
            },
            {
              "value": "collapse",
              "description": "اسم حركة الانكماش"
            },
            {
              "value": "pulse",
              "description": "اسم حركة النبض"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "animation-duration",
      "description": "يحدد المدة الزمنية التي تستغرقها دورة واحدة من الحركة، تحدد سرعة الحركة الكلية",
      "properties": [
        {
          "name": "animation-duration",
          "description": "يحدد المدة الزمنية التي تستغرقها دورة واحدة من الحركة",
          "values": [
            {
              "value": "0s",
              "description": "فوري بدون حركة (القيمة الافتراضية)"
            },
            {
              "value": "0.1s",
              "description": "100 مللي ثانية - سريع جداً"
            },
            {
              "value": "0.2s",
              "description": "200 مللي ثانية - سريع"
            },
            {
              "value": "0.3s",
              "description": "300 مللي ثانية - سريع متوسط"
            },
            {
              "value": "0.4s",
              "description": "400 مللي ثانية"
            },
            {
              "value": "0.5s",
              "description": "نصف ثانية - متوسط سريع"
            },
            {
              "value": "0.6s",
              "description": "600 مللي ثانية"
            },
            {
              "value": "0.7s",
              "description": "700 مللي ثانية"
            },
            {
              "value": "0.8s",
              "description": "800 مللي ثانية"
            },
            {
              "value": "0.9s",
              "description": "900 مللي ثانية"
            },
            {
              "value": "1s",
              "description": "ثانية واحدة - متوسط"
            },
            {
              "value": "1.5s",
              "description": "ثانية ونصف - متوسط بطيء"
            },
            {
              "value": "2s",
              "description": "ثانيتان - بطيء"
            },
            {
              "value": "2.5s",
              "description": "ثانيتان ونصف"
            },
            {
              "value": "3s",
              "description": "ثلاث ثوان - بطيء جداً"
            },
            {
              "value": "4s",
              "description": "أربع ثوان"
            },
            {
              "value": "5s",
              "description": "خمس ثوان"
            },
            {
              "value": "10s",
              "description": "عشر ثوان"
            },
            {
              "value": "100ms",
              "description": "100 مللي ثانية"
            },
            {
              "value": "200ms",
              "description": "200 مللي ثانية"
            },
            {
              "value": "300ms",
              "description": "300 مللي ثانية"
            },
            {
              "value": "500ms",
              "description": "500 مللي ثانية"
            },
            {
              "value": "750ms",
              "description": "750 مللي ثانية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "animation-timing-function",
      "description": "يحدد منحنى سرعة الحركة (كيف تتغير السرعة خلال مدة الحركة)، يؤثر على سلاسة الحركة وطبيعتها",
      "properties": [
        {
          "name": "animation-timing-function",
          "description": "يحدد منحنى سرعة الحركة (كيف تتغير السرعة خلال مدة الحركة)",
          "values": [
            {
              "value": "ease",
              "description": "يبدأ ببطء، يتسارع، ثم يتباطأ (القيمة الافتراضية) - حركة طبيعية"
            },
            {
              "value": "ease-in",
              "description": "يبدأ ببطء شديد ثم يتسارع تدريجياً - حركة تسارعية"
            },
            {
              "value": "ease-out",
              "description": "يبدأ سريعاً ثم يتباطأ تدريجياً - حركة تباطؤية"
            },
            {
              "value": "ease-in-out",
              "description": "يبدأ ببطء، يتسارع في المنتصف، ثم يتباطأ - حركة متوازنة"
            },
            {
              "value": "linear",
              "description": "سرعة ثابتة من البداية إلى النهاية - حركة آلية"
            },
            {
              "value": "step-start",
              "description": "يتغير فوراً في البداية ويبقى ثابتاً - حركة متقطعة"
            },
            {
              "value": "step-end",
              "description": "يبقى ثابتاً ثم يتغير فوراً في النهاية"
            },
            {
              "value": "steps(2)",
              "description": "يتغير على خطوتين متساويتين"
            },
            {
              "value": "steps(4)",
              "description": "يتغير على 4 خطوات متساوية"
            },
            {
              "value": "steps(3, start)",
              "description": "يتغير على 3 خطوات، التغيير عند بداية كل خطوة"
            },
            {
              "value": "steps(3, end)",
              "description": "يتغير على 3 خطوات، التغيير عند نهاية كل خطوة"
            },
            {
              "value": "steps(6, jump-start)",
              "description": "6 خطوات مع قفز في البداية"
            },
            {
              "value": "steps(6, jump-end)",
              "description": "6 خطوات مع قفز في النهاية"
            },
            {
              "value": "steps(6, jump-none)",
              "description": "6 خطوات بدون قفز"
            },
            {
              "value": "steps(6, jump-both)",
              "description": "6 خطوات مع قفز في البداية والنهاية"
            },
            {
              "value": "cubic-bezier(0.25, 0.1, 0.25, 1)",
              "description": "منحنى بيزييه مخصص (ease)"
            },
            {
              "value": "cubic-bezier(0.42, 0, 1, 1)",
              "description": "منحنى بيزييه مخصص (ease-in)"
            },
            {
              "value": "cubic-bezier(0, 0, 0.58, 1)",
              "description": "منحنى بيزييه مخصص (ease-out)"
            },
            {
              "value": "cubic-bezier(0.42, 0, 0.58, 1)",
              "description": "منحنى بيزييه مخصص (ease-in-out)"
            },
            {
              "value": "cubic-bezier(0.47, 0, 0.745, 0.715)",
              "description": "منحنى بيزييه - تسارع سريع"
            },
            {
              "value": "cubic-bezier(0.39, 0.575, 0.565, 1)",
              "description": "منحنى بيزييه - تباطؤ سلس"
            },
            {
              "value": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
              "description": "منحنى بيزييه - تسارع حاد"
            },
            {
              "value": "cubic-bezier(0.215, 0.61, 0.355, 1)",
              "description": "منحنى بيزييه - تباطؤ حاد"
            },
            {
              "value": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
              "description": "منحنى بيزييه - مرونة عالية"
            },
            {
              "value": "cubic-bezier(0.19, 1, 0.22, 1)",
              "description": "منحنى بيزييه - تأثير مرن"
            }
          ]
        }
      ]
    },
    {
      "tag": "animation-delay",
      "description": "يحدد وقت التأخير قبل بدء الحركة، مفيد لتتابع الحركات أو الانتظار قبل البدء",
      "properties": [
        {
          "name": "animation-delay",
          "description": "يحدد وقت التأخير قبل بدء الحركة",
          "values": [
            {
              "value": "0s",
              "description": "بدون تأخير، تبدأ فوراً (القيمة الافتراضية)"
            },
            {
              "value": "0.1s",
              "description": "تأخير 100 مللي ثانية"
            },
            {
              "value": "0.2s",
              "description": "تأخير 200 مللي ثانية"
            },
            {
              "value": "0.3s",
              "description": "تأخير 300 مللي ثانية"
            },
            {
              "value": "0.4s",
              "description": "تأخير 400 مللي ثانية"
            },
            {
              "value": "0.5s",
              "description": "تأخير نصف ثانية"
            },
            {
              "value": "0.6s",
              "description": "تأخير 600 مللي ثانية"
            },
            {
              "value": "0.7s",
              "description": "تأخير 700 مللي ثانية"
            },
            {
              "value": "0.8s",
              "description": "تأخير 800 مللي ثانية"
            },
            {
              "value": "0.9s",
              "description": "تأخير 900 مللي ثانية"
            },
            {
              "value": "1s",
              "description": "تأخير ثانية واحدة"
            },
            {
              "value": "1.5s",
              "description": "تأخير ثانية ونصف"
            },
            {
              "value": "2s",
              "description": "تأخير ثانيتين"
            },
            {
              "value": "3s",
              "description": "تأخير ثلاث ثوان"
            },
            {
              "value": "5s",
              "description": "تأخير خمس ثوان"
            },
            {
              "value": "10s",
              "description": "تأخير عشر ثوان"
            },
            {
              "value": "100ms",
              "description": "100 مللي ثانية"
            },
            {
              "value": "250ms",
              "description": "250 مللي ثانية"
            },
            {
              "value": "500ms",
              "description": "500 مللي ثانية"
            },
            {
              "value": "750ms",
              "description": "750 مللي ثانية"
            },
            {
              "value": "-1s",
              "description": "قيمة سالبة - تبدأ الحركة وكأنها بدأت قبل ثانية"
            },
            {
              "value": "-500ms",
              "description": "قيمة سالبة - تبدأ الحركة وكأنها بدأت قبل 500 مللي ثانية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "animation-iteration-count",
      "description": "يحدد عدد مرات تكرار الحركة، يسمح بتكرارها عدداً محدداً أو بشكل لا نهائي",
      "properties": [
        {
          "name": "animation-iteration-count",
          "description": "يحدد عدد مرات تكرار الحركة",
          "values": [
            {
              "value": "1",
              "description": "مرة واحدة (القيمة الافتراضية)"
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
              "value": "6",
              "description": "ست مرات"
            },
            {
              "value": "7",
              "description": "سبع مرات"
            },
            {
              "value": "8",
              "description": "ثمان مرات"
            },
            {
              "value": "9",
              "description": "تسع مرات"
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
            },
            {
              "value": "infinite",
              "description": "لا نهائي - يتكرر إلى الأبد"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "animation-direction",
      "description": "يحدد اتجاه الحركة (طبيعي، معكوس، ذهاباً وإياباً)، يتحكم في ترتيب تنفيذ الإطارات المفتاحية",
      "properties": [
        {
          "name": "animation-direction",
          "description": "يحدد اتجاه الحركة (طبيعي، معكوس، ذهاباً وإياباً)",
          "values": [
            {
              "value": "normal",
              "description": "اتجاه طبيعي من البداية إلى النهاية (القيمة الافتراضية)"
            },
            {
              "value": "reverse",
              "description": "اتجاه معكوس من النهاية إلى البداية"
            },
            {
              "value": "alternate",
              "description": "ذهاباً (طبيعي) ثم إياباً (معكوس) بالتناوب مع كل تكرار"
            },
            {
              "value": "alternate-reverse",
              "description": "معكوس ثم طبيعي بالتناوب مع كل تكرار"
            }
          ]
        }
      ]
    },
    {
      "tag": "animation-fill-mode",
      "description": "يحدد كيفية تطبيق أنماط الحركة قبل بدئها وبعد انتهائها، يتحكم في الحالة الافتراضية للعنصر",
      "properties": [
        {
          "name": "animation-fill-mode",
          "description": "يحدد كيفية تطبيق أنماط الحركة قبل بدئها وبعد انتهائها",
          "values": [
            {
              "value": "none",
              "description": "لا تطبق الأنماط قبل أو بعد الحركة - يعود العنصر لحالته الأصلية (القيمة الافتراضية)"
            },
            {
              "value": "forwards",
              "description": "يبقى العنصر على الحالة النهائية للحركة بعد انتهائها"
            },
            {
              "value": "backwards",
              "description": "يطبق الحالة الأولية للحركة قبل بدئها (أثناء فترة التأخير)"
            },
            {
              "value": "both",
              "description": "يطبق كلاً من forwards و backwards معاً"
            }
          ]
        }
      ]
    },
    {
      "tag": "animation-play-state",
      "description": "يسمح بإيقاف الحركة مؤقتاً أو تشغيلها، يمكن التحكم بها بواسطة CSS أو JavaScript للتفاعل مع المستخدم",
      "properties": [
        {
          "name": "animation-play-state",
          "description": "يسمح بإيقاف الحركة مؤقتاً أو تشغيلها",
          "values": [
            {
              "value": "running",
              "description": "الحركة قيد التشغيل (القيمة الافتراضية)"
            },
            {
              "value": "paused",
              "description": "إيقاف الحركة مؤقتاً - تبقى في مكانها"
            }
          ]
        }
      ]
    },
    {
      "tag": "animation-timeline",
      "description": "يربط الحركة بجدول زمني خارجي (مثل تمرير الصفحة أو حركة الماوس) بدلاً من الوقت الثابت، يوفر تحكماً ديناميكياً بالحركة",
      "properties": [
        {
          "name": "animation-timeline",
          "description": "يربط الحركة بجدول زمني خارجي بدلاً من الوقت الثابت",
          "values": [
            {
              "value": "auto",
              "description": "جدول زمني تلقائي يعتمد على الوقت (القيمة الافتراضية)"
            },
            {
              "value": "scroll()",
              "description": "يربط الحركة بتمرير الصفحة - تتقدم الحركة مع التمرير"
            },
            {
              "value": "scroll(nearest)",
              "description": "يربط بأقرب حاوية قابلة للتمرير"
            },
            {
              "value": "scroll(root)",
              "description": "يربط بجذر الصفحة (viewport)"
            },
            {
              "value": "scroll(self)",
              "description": "يربط بالعنصر نفسه"
            },
            {
              "value": "view()",
              "description": "يربط الحركة بظهور العنصر في نطاق الرؤية"
            },
            {
              "value": "view(nearest)",
              "description": "يربط بظهور العنصر في أقرب حاوية"
            },
            {
              "value": "view(root)",
              "description": "يربط بظهور العنصر في viewport"
            },
            {
              "value": "view(self)",
              "description": "يربط بظهور العنصر في نفسه"
            }
          ]
        }
      ]
    },
    {
      "tag": "animation-range",
      "description": "يحدد نطاق البداية والنهاية للحركة عندما تكون مرتبطة بـ animation-timeline (scroll/view)، يتحكم في متى تبدأ ومتى تنتهي الحركة",
      "properties": [
        {
          "name": "animation-range",
          "description": "يحدد نطاق البداية والنهاية للحركة المرتبطة بجدول زمني خارجي",
          "values": [
            {
              "value": "normal",
              "description": "النطاق الكامل الافتراضي"
            },
            {
              "value": "entry",
              "description": "يبدأ عندما يدخل العنصر نطاق الرؤية"
            },
            {
              "value": "exit",
              "description": "يبدأ عندما يخرج العنصر من نطاق الرؤية"
            },
            {
              "value": "contain",
              "description": "يبدأ عندما يكون العنصر داخل نطاق الرؤية"
            },
            {
              "value": "cover",
              "description": "يبدأ عندما يغطي العنصر نطاق الرؤية"
            },
            {
              "value": "entry 0%",
              "description": "يبدأ عند بداية دخول العنصر"
            },
            {
              "value": "entry 100%",
              "description": "يبدأ عند نهاية دخول العنصر"
            },
            {
              "value": "exit 0%",
              "description": "يبدأ عند بداية خروج العنصر"
            },
            {
              "value": "exit 100%",
              "description": "يبدأ عند نهاية خروج العنصر"
            },
            {
              "value": "entry 0% cover 100%",
              "description": "تبدأ الحركة عند دخول العنصر وتنتهي عند تغطيته الكاملة"
            },
            {
              "value": "0% 100%",
              "description": "نطاق مخصص بالنسب المئوية"
            },
            {
              "value": "10% 80%",
              "description": "تبدأ عند 10% وتنتهي عند 80%"
            },
            {
              "value": "0px 500px",
              "description": "نطاق مخصص بالبكسل"
            },
            {
              "value": "0vh 100vh",
              "description": "نطاق مخصص بوحدات viewport"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "animation-composition",
      "description": "يحدد كيفية دمج قيم عدة حركات تؤثر على نفس الخاصية في آن واحد، يتحكم في كيفية تعامل الحركات المتداخلة",
      "properties": [
        {
          "name": "animation-composition",
          "description": "يحدد كيفية دمج قيم عدة حركات تؤثر على نفس الخاصية في آن واحد",
          "values": [
            {
              "value": "replace",
              "description": "تستبدل القيمة السابقة بالقيمة الجديدة (القيمة الافتراضية)"
            },
            {
              "value": "add",
              "description": "تُضاف القيمة الجديدة إلى القيم السابقة (مجموع)"
            },
            {
              "value": "accumulate",
              "description": "تتراكم القيم مع بعضها البعض (تراكمي)"
            }
          ]
        }
      ]
    },
    {
      "tag": "@keyframes",
      "description": "قاعدة CSS التي تُعرّف مراحل الحركة نفسها (from/to أو نسب مئوية) قبل استدعائها بواسطة animation-name، تحدد التغيرات في الخصائص عبر الزمن",
      "properties": [
        {
          "name": "@keyframes (ملاحظة)",
          "description": "قاعدة @keyframes هي التي تُعرّف مراحل الحركة نفسها قبل استدعائها بواسطة animation-name",
          "values": [
            {
              "value": "0% / from",
              "description": "نقطة البداية للحركة، تحدد الحالة الأولى للعنصر"
            },
            {
              "value": "5%",
              "description": "5% من مدة الحركة"
            },
            {
              "value": "10%",
              "description": "10% من مدة الحركة"
            },
            {
              "value": "15%",
              "description": "15% من مدة الحركة"
            },
            {
              "value": "20%",
              "description": "20% من مدة الحركة"
            },
            {
              "value": "25%",
              "description": "ربع مدة الحركة"
            },
            {
              "value": "30%",
              "description": "30% من مدة الحركة"
            },
            {
              "value": "35%",
              "description": "35% من مدة الحركة"
            },
            {
              "value": "40%",
              "description": "40% من مدة الحركة"
            },
            {
              "value": "45%",
              "description": "45% من مدة الحركة"
            },
            {
              "value": "50%",
              "description": "نقطة منتصف الحركة، غالباً ما تكون نقطة التحول الرئيسية"
            },
            {
              "value": "55%",
              "description": "55% من مدة الحركة"
            },
            {
              "value": "60%",
              "description": "60% من مدة الحركة"
            },
            {
              "value": "65%",
              "description": "65% من مدة الحركة"
            },
            {
              "value": "70%",
              "description": "70% من مدة الحركة"
            },
            {
              "value": "75%",
              "description": "ثلاثة أرباع مدة الحركة"
            },
            {
              "value": "80%",
              "description": "80% من مدة الحركة"
            },
            {
              "value": "85%",
              "description": "85% من مدة الحركة"
            },
            {
              "value": "90%",
              "description": "90% من مدة الحركة"
            },
            {
              "value": "95%",
              "description": "95% من مدة الحركة"
            },
            {
              "value": "100% / to",
              "description": "نقطة النهاية للحركة، تحدد الحالة النهائية للعنصر"
            }
          ]
        },
        {
          "name": "@keyframes - الخصائص المدعومة",
          "description": "الخصائص التي يمكن استخدامها داخل @keyframes لتغييرها أثناء الحركة",
          "values": [
            {
              "value": "transform",
              "description": "تغيير حجم، دوران، انزلاق العنصر"
            },
            {
              "value": "opacity",
              "description": "تغيير شفافية العنصر"
            },
            {
              "value": "color",
              "description": "تغيير لون النص"
            },
            {
              "value": "background-color",
              "description": "تغيير لون الخلفية"
            },
            {
              "value": "width",
              "description": "تغيير العرض"
            },
            {
              "value": "height",
              "description": "تغيير الارتفاع"
            },
            {
              "value": "margin",
              "description": "تغيير الهامش"
            },
            {
              "value": "padding",
              "description": "تغيير الحشو"
            },
            {
              "value": "top",
              "description": "تغيير الموضع العلوي"
            },
            {
              "value": "right",
              "description": "تغيير الموضع الأيمن"
            },
            {
              "value": "bottom",
              "description": "تغيير الموضع السفلي"
            },
            {
              "value": "left",
              "description": "تغيير الموضع الأيسر"
            },
            {
              "value": "font-size",
              "description": "تغيير حجم الخط"
            },
            {
              "value": "border-radius",
              "description": "تغيير استدارة الحدود"
            },
            {
              "value": "box-shadow",
              "description": "تغيير الظل"
            },
            {
              "value": "text-shadow",
              "description": "تغيير ظل النص"
            },
            {
              "value": "filter",
              "description": "تغيير تأثيرات الفلتر"
            },
            {
              "value": "clip-path",
              "description": "تغيير مسار القص"
            }
          ]
        },
        {
          "name": "مثال @keyframes",
          "description": "أمثلة عملية على تعريف حركات مختلفة باستخدام @keyframes",
          "values": [
            {
              "value": "@keyframes slide { from { transform: translateX(-100%); } to { transform: translateX(0); } }",
              "description": "حركة انزلاق من اليسار"
            },
            {
              "value": "@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; } }",
              "description": "حركة ظهور تدريجي"
            },
            {
              "value": "@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }",
              "description": "حركة ارتداد"
            },
            {
              "value": "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
              "description": "حركة دوران كامل"
            },
            {
              "value": "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }",
              "description": "حركة نبض"
            },
            {
              "value": "@keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } }",
              "description": "حركة اهتزاز"
            },
            {
              "value": "@keyframes glow { from { text-shadow: 0 0 5px #fff; } to { text-shadow: 0 0 20px #ff0; } }",
              "description": "حركة توهج"
            },
            {
              "value": "@keyframes expand { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }",
              "description": "حركة توسع مع ظهور"
            },
            {
              "value": "@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }",
              "description": "حركة طفو"
            },
            {
              "value": "@keyframes swing { 20% { transform: rotate(15deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }",
              "description": "حركة تأرجح"
            }
          ]
        }
      ]
    },
    {
      "tag": "animation-examples",
      "description": "أمثلة عملية متقدمة للرسوم المتحركة تجمع بين عدة خصائص",
      "properties": [
        {
          "name": "مثال 1 - تحميل متقدم",
          "description": "حركة تحميل مع دوران وشفافية متغيرة",
          "values": [
            {
              "value": "@keyframes spin { 0% { transform: rotate(0deg); opacity: 1; } 50% { opacity: 0.5; } 100% { transform: rotate(360deg); opacity: 1; } } .loader { animation: spin 1.5s ease-in-out infinite; }",
              "description": "دائرة تحميل متقدمة"
            }
          ]
        },
        {
          "name": "مثال 2 - قائمة متسلسلة",
          "description": "عناصر قائمة تظهر بتأخير متتابع",
          "values": [
            {
              "value": "@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } } .list-item:nth-child(1) { animation: fadeInUp 0.5s ease-out 0.1s both; } .list-item:nth-child(2) { animation: fadeInUp 0.5s ease-out 0.2s both; } .list-item:nth-child(3) { animation: fadeInUp 0.5s ease-out 0.3s both; }",
              "description": "قائمة تظهر بتسلسل زمني"
            }
          ]
        },
        {
          "name": "مثال 3 - تمرير متقدم",
          "description": "حركات مرتبطة بالتمرير باستخدام animation-timeline",
          "values": [
            {
              "value": "@keyframes progress { from { width: 0%; } to { width: 100%; } } .progress-bar { animation: progress linear; animation-timeline: scroll(); animation-range: 0% 100%; }",
              "description": "شريط تقدم مرتبط بالتمرير"
            }
          ]
        },
        {
          "name": "مثال 4 - عناصر متعددة متزامنة",
          "description": "حركات متعددة على نفس العنصر في وقت واحد",
          "values": [
            {
              "value": "@keyframes moveAndFade { 0% { transform: translateX(0); opacity: 1; } 100% { transform: translateX(200px); opacity: 0; } } @keyframes scaleRotate { 0% { transform: scale(1) rotate(0deg); } 100% { transform: scale(1.5) rotate(180deg); } } .element { animation: moveAndFade 2s ease-in-out forwards, scaleRotate 2s ease-in-out forwards; }",
              "description": "حركات متعددة متزامنة"
            }
          ]
        },
        {
          "name": "مثال 5 - تأثير مكتشف",
          "description": "تأثير كشف محتوى متحرك",
          "values": [
            {
              "value": "@keyframes reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } } .reveal-text { animation: reveal 1.5s ease-in-out forwards; }",
              "description": "كشف نص تدريجي"
            }
          ]
        }
      ]
    },
    {
      "tag": "animation-tips",
      "description": "نصائح وإرشادات مهمة لاستخدام الرسوم المتحركة بشكل فعال",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الرسوم المتحركة",
          "values": [
            {
              "value": "استخدم transform و opacity",
              "description": "هذه الخصائص تُعالج بواسطة GPU مما يعطي أداءً أفضل"
            },
            {
              "value": "تجنب إعادة التدفق (reflow)",
              "description": "تجنب تغيير خصائص تسبب إعادة تخطيط الصفحة (width, height, margin, padding, top, left)"
            },
            {
              "value": "استخدم will-change",
              "description": "أضف will-change: transform, opacity للعناصر المتحركة لتحسين الأداء"
            },
            {
              "value": "حافظ على 60fps",
              "description": "تأكد من أن الحركات تعمل بسلاسة بتحديث 60 إطار في الثانية"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل الرسوم المتحركة قابلة للوصول للجميع",
          "values": [
            {
              "value": "احترم prefers-reduced-motion",
              "description": "استخدم @media (prefers-reduced-motion: reduce) لتقليل الحركات للمستخدمين الذين يطلبون ذلك"
            },
            {
              "value": "لا تستخدم الحركات المزعجة",
              "description": "تجنب الحركات السريعة أو الوامضة التي قد تسبب الصرع"
            },
            {
              "value": "أضف عناصر تحكم",
              "description": "قدم للمستخدمين إمكانية إيقاف أو تقليل الحركات"
            }
          ]
        },
        {
          "name": "نصائح التصميم",
          "description": "نصائح لتصميم حركات جذابة وفعالة",
          "values": [
            {
              "value": "استخدم ease-in-out للحركات الطبيعية",
              "description": "تعطي شعوراً طبيعياً أكثر من linear"
            },
            {
              "value": "لا تفرط في استخدام الحركات",
              "description": "استخدم الحركات بشكل مدروس ومحدود"
            },
            {
              "value": "تتابع الحركات",
              "description": "استخدم animation-delay لإنشاء تتابع طبيعي"
            },
            {
              "value": "مدد الحركات بين 300ms-800ms",
              "description": "هذه المدى الزمني يعطي أفضل تجربة للمستخدم"
            }
          ]
        }
      ]
    }
  ],
  "interactionUI": [
    {
      "tag": "cursor",
      "description": "يحدد شكل مؤشر الفأرة عند تمريره فوق العنصر، يساعد في إيصال وظيفة العنصر للمستخدم",
      "properties": [
        {
          "name": "cursor",
          "description": "الخاصية الرئيسية لتحديد شكل المؤشر عند تمرير الماوس فوق العنصر",
          "values": [
            {
              "value": "auto",
              "description": "يحدد المتصفح الشكل المناسب حسب السياق - القيمة الافتراضية"
            },
            {
              "value": "default",
              "description": "مؤشر عادي (سهم) - يستخدم لمعظم العناصر"
            },
            {
              "value": "none",
              "description": "يخفي المؤشر تماماً - مفيد للشاشات الكاملة والفيديوهات"
            },
            {
              "value": "pointer",
              "description": "يد (تشير إلى رابط قابل للنقر) - يستخدم للروابط والأزرار"
            },
            {
              "value": "text",
              "description": "مؤشر نص (I-beam) - يستخدم لحقول النص والمناطق القابلة للكتابة"
            },
            {
              "value": "wait",
              "description": "ساعة رملية أو دوران (في انتظار التحميل) - يشير إلى عملية جارية"
            },
            {
              "value": "progress",
              "description": "سهم مع ساعة صغيرة (خلفية) - عملية جارية لكن يمكن التفاعل"
            },
            {
              "value": "crosshair",
              "description": "تقاطع (+) - يستخدم للاختيار الدقيق"
            },
            {
              "value": "move",
              "description": "أسهم متقاطعة (للنقل) - يشير إلى إمكانية السحب"
            },
            {
              "value": "not-allowed",
              "description": "دائرة بخط مائل (ممنوع) - يشير إلى عدم صلاحية الإجراء"
            },
            {
              "value": "no-drop",
              "description": "يد مع دائرة ممنوعة - يشير إلى عدم إمكانية الإسقاط"
            },
            {
              "value": "grab",
              "description": "يد مفتوحة (للإمساك) - يشير إلى إمكانية الإمساك بالسحب"
            },
            {
              "value": "grabbing",
              "description": "يد مغلقة (للسحب) - يشير إلى أن العنصر يُسحب حالياً"
            },
            {
              "value": "zoom-in",
              "description": "عدسة مكبرة مع علامة + - يشير إلى إمكانية التكبير"
            },
            {
              "value": "zoom-out",
              "description": "عدسة مكبرة مع علامة - - يشير إلى إمكانية التصغير"
            },
            {
              "value": "help",
              "description": "سهم مع علامة استفهام - يشير إلى وجود مساعدة أو معلومات"
            },
            {
              "value": "copy",
              "description": "سهم مع علامة + (لنسخ) - يشير إلى إمكانية النسخ"
            },
            {
              "value": "alias",
              "description": "سهم مع منحنى (لإنشاء اختصار) - يشير إلى إنشاء اختصار"
            },
            {
              "value": "context-menu",
              "description": "سهم مع قائمة صغيرة - يشير إلى وجود قائمة سياقية"
            },
            {
              "value": "cell",
              "description": "مؤشر جدول (اختيار خلية) - يستخدم في الجداول"
            },
            {
              "value": "e-resize",
              "description": "سهم إلى اليمين - تغيير الحجم من الشرق"
            },
            {
              "value": "w-resize",
              "description": "سهم إلى اليسار - تغيير الحجم من الغرب"
            },
            {
              "value": "n-resize",
              "description": "سهم إلى الأعلى - تغيير الحجم من الشمال"
            },
            {
              "value": "s-resize",
              "description": "سهم إلى الأسفل - تغيير الحجم من الجنوب"
            },
            {
              "value": "ne-resize",
              "description": "سهم إلى أعلى اليمين - تغيير الحجم من الشمال الشرقي"
            },
            {
              "value": "nw-resize",
              "description": "سهم إلى أعلى اليسار - تغيير الحجم من الشمال الغربي"
            },
            {
              "value": "se-resize",
              "description": "سهم إلى أسفل اليمين - تغيير الحجم من الجنوب الشرقي"
            },
            {
              "value": "sw-resize",
              "description": "سهم إلى أسفل اليسار - تغيير الحجم من الجنوب الغربي"
            },
            {
              "value": "ew-resize",
              "description": "سهمان يمين ويسار - تغيير الحجم أفقياً"
            },
            {
              "value": "ns-resize",
              "description": "سهمان أعلى وأسفل - تغيير الحجم عمودياً"
            },
            {
              "value": "nesw-resize",
              "description": "سهمان قطريان (شمال شرق - جنوب غرب)"
            },
            {
              "value": "nwse-resize",
              "description": "سهمان قطريان معاكسان (شمال غرب - جنوب شرق)"
            },
            {
              "value": "col-resize",
              "description": "سهمان أفقياً - لتغيير عرض العمود"
            },
            {
              "value": "row-resize",
              "description": "سهمان عمودياً - لتغيير ارتفاع الصف"
            },
            {
              "value": "url('cursor.png') 10 10, auto",
              "description": "مؤشر مخصص من صورة مع نقطة مرجعية (x, y) وقيمة احتياطية"
            },
            {
              "value": "url('cursor.svg') 16 16, pointer",
              "description": "مؤشر SVG مخصص مع نقطة مرجعية"
            },
            {
              "value": "url('cursor1.png'), url('cursor2.png'), auto",
              "description": "عدة صور احتياطية للمؤشر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "pointer-events",
      "description": "يتحكم في استجابة العنصر لأحداث الفأرة واللمس (النقر، التمرير، إلخ)، يسمح بتمرير الأحداث للعناصر التي خلفه",
      "properties": [
        {
          "name": "pointer-events",
          "description": "يتحكم في استجابة العنصر لأحداث الفأرة واللمس",
          "values": [
            {
              "value": "auto",
              "description": "يتفاعل العنصر مع جميع الأحداث - القيمة الافتراضية"
            },
            {
              "value": "none",
              "description": "يتجاهل العنصر جميع الأحداث، تمر الأحداث إلى العناصر التي خلفه - مفيد للطبقات الشفافة"
            },
            {
              "value": "visiblePainted",
              "description": "يتفاعل فقط إذا كان العنصر مرئياً ومرسوماً (SVG)"
            },
            {
              "value": "visibleFill",
              "description": "يتفاعل مع منطقة الحشوة فقط إذا كان مرئياً (SVG)"
            },
            {
              "value": "visibleStroke",
              "description": "يتفاعل مع منطقة الحد فقط إذا كان مرئياً (SVG)"
            },
            {
              "value": "painted",
              "description": "يتفاعل إذا كان مرسوماً (SVG)"
            },
            {
              "value": "fill",
              "description": "يتفاعل مع منطقة الحشوة (SVG)"
            },
            {
              "value": "stroke",
              "description": "يتفاعل مع منطقة الحد (SVG)"
            },
            {
              "value": "all",
              "description": "يتفاعل مع جميع المناطق (SVG)"
            }
          ]
        }
      ]
    },
    {
      "tag": "user-select",
      "description": "يتحكم في قدرة المستخدم على تحديد النص بالماوس، مفيد لحماية المحتوى أو تحسين تجربة المستخدم",
      "properties": [
        {
          "name": "user-select",
          "description": "يتحكم في قدرة المستخدم على تحديد النص بالماوس",
          "values": [
            {
              "value": "auto",
              "description": "يترك المتصفح يقرر متى يسمح بالتحديد - القيمة الافتراضية"
            },
            {
              "value": "none",
              "description": "يمنع تحديد النص تماماً - مفيد للعناصر التفاعلية"
            },
            {
              "value": "text",
              "description": "يسمح بتحديد النص - القيمة الافتراضية للنصوص"
            },
            {
              "value": "all",
              "description": "يسمح بتحديد الكل بنقرة واحدة - مفيد لتحديد نصوص بسرعة"
            },
            {
              "value": "contain",
              "description": "يسمح بالتحديد داخل العنصر فقط (بدعم محدود)"
            },
            {
              "value": "element",
              "description": "يسمح بتحديد العنصر ككل (بدعم محدود)"
            }
          ]
        }
      ]
    },
    {
      "tag": "scroll-behavior",
      "description": "يحدد سلوك التمرير عند الانتقال إلى روابط داخلية (سلس أم فوري)، يحسن تجربة المستخدم في التنقل",
      "properties": [
        {
          "name": "scroll-behavior",
          "description": "يحدد سلوك التمرير عند الانتقال إلى روابط داخلية",
          "values": [
            {
              "value": "auto",
              "description": "تمرير فوري ومباشر - القيمة الافتراضية"
            },
            {
              "value": "smooth",
              "description": "تمرير سلس ومتدحرج - يوفر تجربة أكثر سلاسة"
            }
          ]
        }
      ]
    },
    {
      "tag": "scroll-snap",
      "description": "خصائص التثبيت عند التمرير، توقف التمرير عند نقاط محددة، مفيد للكورسلات وقوائم المنتجات",
      "properties": [
        {
          "name": "scroll-snap-type",
          "description": "يحدد نوع التثبيت عند التمرير (يوقف التمرير عند نقاط محددة)",
          "values": [
            {
              "value": "none",
              "description": "بدون تثبيت - القيمة الافتراضية"
            },
            {
              "value": "x",
              "description": "تثبيت على المحور الأفقي (يسار/يمين)"
            },
            {
              "value": "y",
              "description": "تثبيت على المحور العمودي (أعلى/أسفل)"
            },
            {
              "value": "both",
              "description": "تثبيت على كلا المحورين"
            },
            {
              "value": "x mandatory",
              "description": "تثبيت إجباري على المحور الأفقي - يجب أن يتوقف عند نقطة تثبيت"
            },
            {
              "value": "y mandatory",
              "description": "تثبيت إجباري على المحور العمودي"
            },
            {
              "value": "both mandatory",
              "description": "تثبيت إجباري على كلا المحورين"
            },
            {
              "value": "x proximity",
              "description": "تثبيت قريب على المحور الأفقي - يتوقف إذا كان قريباً من نقطة التثبيت"
            },
            {
              "value": "y proximity",
              "description": "تثبيت قريب على المحور العمودي"
            },
            {
              "value": "both proximity",
              "description": "تثبيت قريب على كلا المحورين"
            }
          ]
        },
        {
          "name": "scroll-snap-align",
          "description": "يحدد نقطة التثبيت للعنصر داخل الحاوية (يُستخدم مع scroll-snap-type)",
          "values": [
            {
              "value": "none",
              "description": "بدون تثبيت - القيمة الافتراضية"
            },
            {
              "value": "start",
              "description": "يثبت العنصر عند بداية الحاوية (أعلى أو يسار)"
            },
            {
              "value": "end",
              "description": "يثبت العنصر عند نهاية الحاوية (أسفل أو يمين)"
            },
            {
              "value": "center",
              "description": "يثبت العنصر في منتصف الحاوية"
            }
          ]
        },
        {
          "name": "scroll-snap-stop",
          "description": "يحدد ما إذا كان التمرير يجب أن يتوقف عند كل نقطة تثبيت أو يمكن تجاوزها",
          "values": [
            {
              "value": "normal",
              "description": "يمكن تجاوز نقاط التثبيت - القيمة الافتراضية"
            },
            {
              "value": "always",
              "description": "يجب التوقف عند كل نقطة تثبيت - لا يمكن تجاوزها"
            }
          ]
        },
        {
          "name": "scroll-margin",
          "description": "يحدد هامشاً حول نقطة التثبيت، يضيف مسافة إضافية قبل توقف التمرير",
          "values": [
            {
              "value": "0",
              "description": "بدون هامش إضافي - القيمة الافتراضية"
            },
            {
              "value": "20px",
              "description": "هامش 20 بكسل حول نقطة التثبيت"
            },
            {
              "value": "10px 20px",
              "description": "هامش عمودي 10 بكسل، أفقي 20 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "scroll-padding",
          "description": "يحدد حشواً داخل الحاوية عند التثبيت، يضيف مسافة بين نقطة التثبيت وحافة الحاوية",
          "values": [
            {
              "value": "0",
              "description": "بدون حشو - القيمة الافتراضية"
            },
            {
              "value": "20px",
              "description": "حشو 20 بكسل من جميع الجهات"
            },
            {
              "value": "10px 20px",
              "description": "حشو عمودي 10 بكسل، أفقي 20 بكسل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "overscroll-behavior",
      "description": "يتحكم في سلوك التمرير عند الوصول إلى نهاية المحتوى (منع انتقال التمرير للعنصر الأب)، يحسن تجربة المستخدم في القوائم المضمنة",
      "properties": [
        {
          "name": "overscroll-behavior",
          "description": "يتحكم في سلوك التمرير عند الوصول إلى نهاية المحتوى",
          "values": [
            {
              "value": "auto",
              "description": "سلوك تمرير طبيعي - ينتقل التمرير للعنصر الأب - القيمة الافتراضية"
            },
            {
              "value": "contain",
              "description": "يمنع انتقال التمرير إلى الأب، لكن يسمح بتأثيرات المتصفح (مثل السحب الزائد)"
            },
            {
              "value": "none",
              "description": "يمنع انتقال التمرير إلى الأب ويمنع تأثيرات المتصفح"
            }
          ]
        },
        {
          "name": "overscroll-behavior-x",
          "description": "يتحكم في سلوك التمرير الأفقي عند الوصول إلى النهاية",
          "values": [
            {
              "value": "auto",
              "description": "سلوك طبيعي - القيمة الافتراضية"
            },
            {
              "value": "contain",
              "description": "يمنع انتقال التمرير"
            },
            {
              "value": "none",
              "description": "يمنع انتقال التمرير والتأثيرات"
            }
          ]
        },
        {
          "name": "overscroll-behavior-y",
          "description": "يتحكم في سلوك التمرير العمودي عند الوصول إلى النهاية",
          "values": [
            {
              "value": "auto",
              "description": "سلوك طبيعي - القيمة الافتراضية"
            },
            {
              "value": "contain",
              "description": "يمنع انتقال التمرير"
            },
            {
              "value": "none",
              "description": "يمنع انتقال التمرير والتأثيرات"
            }
          ]
        }
      ]
    },
    {
      "tag": "touch-action",
      "description": "يتحكم في كيفية استجابة العنصر للتفاعلات اللمسية (مثل التكبير والتمرير)، يحسن أداء اللمس على الجوال",
      "properties": [
        {
          "name": "touch-action",
          "description": "يتحكم في كيفية استجابة العنصر للتفاعلات اللمسية",
          "values": [
            {
              "value": "auto",
              "description": "يسمح بجميع التفاعلات اللمسية (تمرير، تكبير، إلخ) - القيمة الافتراضية"
            },
            {
              "value": "none",
              "description": "يمنع جميع التفاعلات اللمسية"
            },
            {
              "value": "pan-x",
              "description": "يسمح بالتمرير الأفقي فقط"
            },
            {
              "value": "pan-y",
              "description": "يسمح بالتمرير العمودي فقط"
            },
            {
              "value": "pan-left",
              "description": "يسمح بالتمرير لليسار فقط"
            },
            {
              "value": "pan-right",
              "description": "يسمح بالتمرير لليمين فقط"
            },
            {
              "value": "pan-up",
              "description": "يسمح بالتمرير للأعلى فقط"
            },
            {
              "value": "pan-down",
              "description": "يسمح بالتمرير للأسفل فقط"
            },
            {
              "value": "manipulation",
              "description": "يسمح بالتمرير والتكبير، يمنع النقر المزدوج للتكبير - مفيد للعناصر التفاعلية"
            },
            {
              "value": "pan-x pan-y",
              "description": "يسمح بالتمرير في كلا الاتجاهين"
            },
            {
              "value": "pinch-zoom",
              "description": "يسمح بالتكبير باللمس (قرص الأصابع)"
            }
          ]
        }
      ]
    },
    {
      "tag": "will-change",
      "description": "يخبر المتصفح مسبقاً بأن خاصية معينة ستتغير، لتحسين الأداء وجعل التحريك أكثر سلاسة",
      "properties": [
        {
          "name": "will-change",
          "description": "يخبر المتصفح مسبقاً بأن خاصية معينة ستتغير لتحسين الأداء",
          "values": [
            {
              "value": "auto",
              "description": "لا تحسين مسبق - يكتشف المتصفح بنفسه - القيمة الافتراضية"
            },
            {
              "value": "transform",
              "description": "سيتم تغيير التحويلات (التدوير، التكبير، النقل) - يحسن أداء الرسوم المتحركة"
            },
            {
              "value": "opacity",
              "description": "سيتم تغيير الشفافية - يحسن أداء تلاشي العناصر"
            },
            {
              "value": "top, left",
              "description": "سيتم تغيير الموضع (top, left) - يحسن أداء التحرك"
            },
            {
              "value": "right, bottom",
              "description": "سيتم تغيير الموضع (right, bottom)"
            },
            {
              "value": "width, height",
              "description": "سيتم تغيير الأبعاد - يحسن أداء تغيير الحجم"
            },
            {
              "value": "margin, padding",
              "description": "سيتم تغيير الهوامش والحشو"
            },
            {
              "value": "scroll-position",
              "description": "سيتم تغيير موضع التمرير - يحسن أداء التمرير السلس"
            },
            {
              "value": "contents",
              "description": "سيتم تغيير المحتوى - يحسن أداء تحديث المحتوى"
            },
            {
              "value": "transform, opacity",
              "description": "سيتم تغيير التحويلات والشفافية معاً - الأكثر استخداماً"
            },
            {
              "value": "transform, opacity, filter",
              "description": "سيتم تغيير عدة خصائص"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "caret-color",
      "description": "يحدد لون مؤشر النص الوامض (Caret) في حقول الإدخال، يحسن وضوح المؤشر في التصاميم المخصصة",
      "properties": [
        {
          "name": "caret-color",
          "description": "يحدد لون مؤشر النص الوامض في حقول الإدخال",
          "values": [
            {
              "value": "auto",
              "description": "لون تلقائي حسب المتصفح - القيمة الافتراضية"
            },
            {
              "value": "red",
              "description": "مؤشر أحمر"
            },
            {
              "value": "blue",
              "description": "مؤشر أزرق"
            },
            {
              "value": "green",
              "description": "مؤشر أخضر"
            },
            {
              "value": "#007bff",
              "description": "مؤشر أزرق مخصص (لون Bootstrap)"
            },
            {
              "value": "#ff0000",
              "description": "مؤشر أحمر (Hex)"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "مؤشر أحمر (RGB)"
            },
            {
              "value": "transparent",
              "description": "مؤشر شفاف - مفيد لتصاميم خاصة"
            },
            {
              "value": "currentColor",
              "description": "نفس لون النص"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "accent-color",
      "description": "يحدد لون المميز لعناصر النموذج (مربعات الاختيار، أزرار الراديو، شريط التمرير)، يوحد ألوان عناصر النموذج",
      "properties": [
        {
          "name": "accent-color",
          "description": "يحدد لون المميز لعناصر النموذج مثل مربعات الاختيار وأزرار الراديو",
          "values": [
            {
              "value": "auto",
              "description": "لون تلقائي حسب المتصفح - القيمة الافتراضية"
            },
            {
              "value": "red",
              "description": "لون أحمر لعناصر النموذج"
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
              "value": "#007bff",
              "description": "لون أزرق مخصص"
            },
            {
              "value": "#28a745",
              "description": "لون أخضر مخصص"
            },
            {
              "value": "#dc3545",
              "description": "لون أحمر مخصص"
            },
            {
              "value": "#ffc107",
              "description": "لون أصفر مخصص"
            },
            {
              "value": "#6f42c1",
              "description": "لون بنفسجي مخصص"
            },
            {
              "value": "rgba(255, 0, 0, 0.8)",
              "description": "أحمر شفاف 80%"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "appearance",
      "description": "يتحكم في استخدام أو إزالة التصميم الافتراضي الخاص بنظام التشغيل/المتصفح لعناصر النموذج (مثل الأزرار والقوائم المنسدلة)",
      "properties": [
        {
          "name": "appearance",
          "description": "يتحكم في استخدام أو إزالة التصميم الافتراضي لعناصر النموذج",
          "values": [
            {
              "value": "auto",
              "description": "يستخدم المظهر الافتراضي للمتصفح - القيمة الافتراضية"
            },
            {
              "value": "none",
              "description": "يزيل المظهر الافتراضي بالكامل، يتيح تصميم العنصر من الصفر"
            },
            {
              "value": "menulist-button",
              "description": "مظهر يشبه زر قائمة منسدلة"
            },
            {
              "value": "textfield",
              "description": "مظهر حقل نص بسيط"
            },
            {
              "value": "button",
              "description": "مظهر زر"
            },
            {
              "value": "checkbox",
              "description": "مظهر مربع اختيار"
            },
            {
              "value": "radio",
              "description": "مظهر زر راديو"
            },
            {
              "value": "listbox",
              "description": "مظهر قائمة"
            },
            {
              "value": "meter",
              "description": "مظهر عداد (مثل شريط التقدم)"
            },
            {
              "value": "progress-bar",
              "description": "مظهر شريط تقدم"
            },
            {
              "value": "searchfield",
              "description": "مظهر حقل بحث"
            },
            {
              "value": "textarea",
              "description": "مظهر منطقة نص"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "scrollbar",
      "description": "خصائص تتحكم في مظهر شريط التمرير (العرض واللون)، توفر تحكماً أساسياً في شكل شريط التمرير",
      "properties": [
        {
          "name": "scrollbar-width",
          "description": "يحدد عرض شريط التمرير (دعم قياسي بديل عن أنماط ::-webkit-scrollbar غير القياسية)",
          "values": [
            {
              "value": "auto",
              "description": "العرض الافتراضي لشريط التمرير في المتصفح - القيمة الافتراضية"
            },
            {
              "value": "thin",
              "description": "شريط تمرير أنحف - يعطي مظهراً أنظف"
            },
            {
              "value": "none",
              "description": "إخفاء شريط التمرير مع بقاء إمكانية التمرير"
            }
          ]
        },
        {
          "name": "scrollbar-color",
          "description": "يحدد لون شريط التمرير ولون مساره (thumb ثم track)",
          "values": [
            {
              "value": "auto",
              "description": "الألوان الافتراضية للمتصفح - القيمة الافتراضية"
            },
            {
              "value": "#888 #eee",
              "description": "لون المقبض رمادي غامق، لون المسار رمادي فاتح"
            },
            {
              "value": "rebeccapurple lightgray",
              "description": "ألوان مخصصة بأسماء"
            },
            {
              "value": "#007bff #f0f0f0",
              "description": "مقبض أزرق، مسار رمادي فاتح"
            },
            {
              "value": "dark dark",
              "description": "مقبض ومسار داكنين"
            },
            {
              "value": "transparent transparent",
              "description": "شريط تمرير شفاف بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "field-sizing",
      "description": "يسمح لعناصر الإدخال والنماذج (مثل textarea) بتغيير حجمها تلقائياً حسب المحتوى بدلاً من حجم ثابت",
      "properties": [
        {
          "name": "field-sizing",
          "description": "يسمح لعناصر الإدخال بتغيير حجمها تلقائياً حسب المحتوى",
          "values": [
            {
              "value": "fixed",
              "description": "حجم ثابت لا يتغير حسب المحتوى - القيمة الافتراضية"
            },
            {
              "value": "content",
              "description": "يتمدد الحقل تلقائياً حسب طول المحتوى المدخل - مفيد لحقول النص الطويلة"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لخصائص التفاعل وواجهة المستخدم في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - تخصيص المؤشرات",
          "description": "تغيير شكل المؤشر حسب نوع العنصر",
          "values": [
            {
              "value": "button { cursor: pointer; }",
              "description": "زر بمؤشر يد"
            },
            {
              "value": "input[type=\"text\"] { cursor: text; }",
              "description": "حقل نص بمؤشر I-beam"
            },
            {
              "value": ".draggable { cursor: grab; } .draggable:active { cursor: grabbing; }",
              "description": "عنصر قابل للسحب مع مؤشرات مخصصة"
            },
            {
              "value": ".disabled { cursor: not-allowed; }",
              "description": "عنصر معطل بمؤشر ممنوع"
            }
          ]
        },
        {
          "name": "مثال 2 - منع تحديد النص",
          "description": "منع تحديد النص في عناصر معينة",
          "values": [
            {
              "value": ".no-select { user-select: none; -webkit-user-select: none; }",
              "description": "منع تحديد النص مع بادئة Safari"
            },
            {
              "value": "button, .ui-element { user-select: none; }",
              "description": "منع تحديد النص في الأزرار والعناصر التفاعلية"
            }
          ]
        },
        {
          "name": "مثال 3 - تمرير سلس",
          "description": "تمكين التمرير السلس للصفحة",
          "values": [
            {
              "value": "html { scroll-behavior: smooth; }",
              "description": "تمكين التمرير السلس للصفحة بأكملها"
            }
          ]
        },
        {
          "name": "مثال 4 - تثبيت التمرير (Scroll Snap)",
          "description": "إنشاء كورسيل مع تثبيت التمرير",
          "values": [
            {
              "value": ".carousel { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 16px; } .carousel-item { flex: 0 0 300px; scroll-snap-align: center; }",
              "description": "كورسيل مع تثبيت تلقائي في المنتصف"
            }
          ]
        },
        {
          "name": "مثال 5 - منع انتقال التمرير",
          "description": "منع انتقال التمرير من قائمة منسدلة إلى الصفحة",
          "values": [
            {
              "value": ".dropdown-menu { max-height: 200px; overflow-y: auto; overscroll-behavior: contain; }",
              "description": "قائمة منسدلة بتمرير مستقل"
            }
          ]
        },
        {
          "name": "مثال 6 - تحسين أداء الرسوم المتحركة",
          "description": "استخدام will-change لتحسين أداء الحركات",
          "values": [
            {
              "value": ".animated { will-change: transform, opacity; transition: transform 0.3s, opacity 0.3s; } .animated:hover { transform: scale(1.1); opacity: 0.9; }",
              "description": "تحسين أداء التحويلات"
            }
          ]
        },
        {
          "name": "مثال 7 - تخصيص عناصر النموذج",
          "description": "تخصيص لون عناصر النموذج",
          "values": [
            {
              "value": "input[type=\"checkbox\"] { accent-color: #28a745; } input[type=\"radio\"] { accent-color: #dc3545; }",
              "description": "تخصيص لون المربعات وأزرار الراديو"
            }
          ]
        },
        {
          "name": "مثال 8 - تخصيص شريط التمرير",
          "description": "تخصيص مظهر شريط التمرير",
          "values": [
            {
              "value": ".custom-scrollbar { scrollbar-width: thin; scrollbar-color: #888 #f0f0f0; }",
              "description": "شريط تمرير أنحف بألوان مخصصة"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام خصائص التفاعل وواجهة المستخدم بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لخصائص التفاعل",
          "values": [
            {
              "value": "استخدم cursor: pointer للأزرار والروابط",
              "description": "يساعد المستخدم في معرفة العناصر القابلة للنقر"
            },
            {
              "value": "استخدم user-select: none بحذر",
              "description": "لا تمنع تحديد النص في المحتوى القابل للقراءة"
            },
            {
              "value": "استخدم scroll-behavior: smooth للتنقل الداخلي",
              "description": "يحسن تجربة المستخدم في الصفحات الطويلة"
            },
            {
              "value": "استخدم will-change بحذر",
              "description": "الإفراط في استخدامه قد يستهلك الذاكرة"
            }
          ]
        },
        {
          "name": "نصائح للأجهزة اللمسية",
          "description": "نصائح لتحسين التفاعل على الجوال والأجهزة اللمسية",
          "values": [
            {
              "value": "استخدم touch-action: manipulation للأزرار",
              "description": "يمنع التأخير من النقر المزدوج على الجوال"
            },
            {
              "value": "استخدم overscroll-behavior: contain للقوائم",
              "description": "يمنع انتقال التمرير إلى الصفحة"
            },
            {
              "value": "استخدم scroll-snap للكورسلات",
              "description": "يحسن تجربة التمرير على الجوال"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل التفاعل قابلاً للوصول للجميع",
          "values": [
            {
              "value": "لا تعتمد على المؤشر فقط",
              "description": "بعض المستخدمين يستخدمون لوحة المفاتيح"
            },
            {
              "value": "استخدم :focus-visible",
              "description": "يظهر التركيز فقط عند استخدام لوحة المفاتيح"
            },
            {
              "value": "تجنب إخفاء المؤشر تماماً",
              "description": "cursor: none قد يربك المستخدمين"
            },
            {
              "value": "احترم prefers-reduced-motion",
              "description": "قلل الحركات للمستخدمين الذين يطلبون ذلك"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام خصائص التفاعل وكيفية تجنبها",
          "values": [
            {
              "value": "استخدام pointer-events: none مع المحتوى المهم",
              "description": "يجعل العنصر غير قابل للتفاعل بالكامل"
            },
            {
              "value": "نسيان بادئة -webkit-",
              "description": "-webkit-user-select: none لـ Safari"
            },
            {
              "value": "استخدام will-change على عناصر كثيرة",
              "description": "يستهلك ذاكرة وقد يبطئ الأداء"
            },
            {
              "value": "عدم اختبار اللمس",
              "description": "اختبر التفاعلات على الجوال أيضاً"
            }
          ]
        }
      ]
    }
  ],
  "misc": [
    {
      "tag": "gradients",
      "description": "التدرجات اللونية (تُستخدم كقيم لـ background-image و border-image وغيرها)",
      "properties": [
        {
          "name": "linear-gradient",
          "description": "تدرج لوني خطي في اتجاه معين (أفقي، عمودي، أو بزاوية)",
          "values": [
            {
              "value": "linear-gradient(red, blue)",
              "description": "تدرج من الأحمر إلى الأزرق (من أعلى لأسفل)"
            },
            {
              "value": "linear-gradient(red 0%, blue 100%)",
              "description": "تدرج من الأحمر إلى الأزرق مع نسب مئوية"
            },
            {
              "value": "linear-gradient(to right, red, blue)",
              "description": "تدرج من اليسار إلى اليمين"
            },
            {
              "value": "linear-gradient(to left, red, blue)",
              "description": "تدرج من اليمين إلى اليسار"
            },
            {
              "value": "linear-gradient(to top, red, blue)",
              "description": "تدرج من الأسفل إلى الأعلى"
            },
            {
              "value": "linear-gradient(to bottom, red, blue)",
              "description": "تدرج من الأعلى إلى الأسفل"
            },
            {
              "value": "linear-gradient(to top right, red, blue)",
              "description": "تدرج قطري إلى أعلى اليمين"
            },
            {
              "value": "linear-gradient(to bottom left, red, blue)",
              "description": "تدرج قطري إلى أسفل اليسار"
            },
            {
              "value": "linear-gradient(45deg, red, blue)",
              "description": "تدرج بزاوية 45 درجة"
            },
            {
              "value": "linear-gradient(90deg, red, blue)",
              "description": "تدرج بزاوية 90 درجة (أفقي)"
            },
            {
              "value": "linear-gradient(180deg, red, blue)",
              "description": "تدرج بزاوية 180 درجة (عمودي)"
            },
            {
              "value": "linear-gradient(red 0%, blue 50%, green 100%)",
              "description": "تدرج بثلاثة ألوان مع نسب"
            },
            {
              "value": "linear-gradient(red 30%, blue 70%)",
              "description": "تدرج مع تحكم في نقاط الانتقال"
            },
            {
              "value": "linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))",
              "description": "تدرج شفاف إلى معتم"
            },
            {
              "value": "linear-gradient(to right, #f093fb 0%, #f5576c 100%)",
              "description": "تدرج وردي-أحمر عصري"
            },
            {
              "value": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              "description": "تدرج بنفسجي-أزرق أنيق"
            },
            {
              "value": "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)",
              "description": "تدرج أخضر-فيروزي"
            },
            {
              "value": "repeating-linear-gradient(red 0px, blue 20px)",
              "description": "تدرج خطي متكرر"
            },
            {
              "value": "repeating-linear-gradient(45deg, red 0px, blue 10px, red 20px)",
              "description": "تدرج خطي متكرر بزاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "radial-gradient",
          "description": "تدرج لوني شعاعي (دائري أو بيضاوي) يبدأ من نقطة مركزية",
          "values": [
            {
              "value": "radial-gradient(circle, red, blue)",
              "description": "تدرج شعاعي دائري"
            },
            {
              "value": "radial-gradient(ellipse, red, blue)",
              "description": "تدرج شعاعي بيضاوي"
            },
            {
              "value": "radial-gradient(circle at center, red, blue)",
              "description": "تدرج دائري مركزه في المنتصف"
            },
            {
              "value": "radial-gradient(circle at 20% 50%, red, blue)",
              "description": "تدرج دائري مركزه 20% من اليسار"
            },
            {
              "value": "radial-gradient(circle at top left, red, blue)",
              "description": "تدرج دائري من أعلى اليسار"
            },
            {
              "value": "radial-gradient(circle at bottom right, red, blue)",
              "description": "تدرج دائري من أسفل اليمين"
            },
            {
              "value": "radial-gradient(circle closest-side, red, blue)",
              "description": "يتوقف عند أقرب حافة"
            },
            {
              "value": "radial-gradient(circle farthest-side, red, blue)",
              "description": "يمتد لأبعد حافة"
            },
            {
              "value": "radial-gradient(circle closest-corner, red, blue)",
              "description": "يتوقف عند أقرب زاوية"
            },
            {
              "value": "radial-gradient(circle farthest-corner, red, blue)",
              "description": "يمتد لأبعد زاوية"
            },
            {
              "value": "radial-gradient(circle, red 30%, blue 70%)",
              "description": "تدرج مع تحكم في النقاط"
            },
            {
              "value": "radial-gradient(circle at 50% 50%, red, blue, green)",
              "description": "تدرج بثلاثة ألوان"
            },
            {
              "value": "repeating-radial-gradient(circle, red 0%, blue 20%)",
              "description": "تدرج شعاعي متكرر"
            },
            {
              "value": "repeating-radial-gradient(circle at center, red 0px, blue 10px, red 20px)",
              "description": "تدرج شعاعي متكرر بتأثير حلقي"
            }
          ],
          "freeInput": true
        },
        {
          "name": "conic-gradient",
          "description": "تدرج لوني مخروطي (يدور حول نقطة مركزية مثل قطاع الدائرة)",
          "values": [
            {
              "value": "conic-gradient(red, blue)",
              "description": "تدرج مخروطي من الأحمر إلى الأزرق"
            },
            {
              "value": "conic-gradient(from 0deg, red, blue)",
              "description": "تدرج مخروطي يبدأ من 0 درجة"
            },
            {
              "value": "conic-gradient(from 45deg, red, blue)",
              "description": "يبدأ من زاوية 45 درجة"
            },
            {
              "value": "conic-gradient(from 90deg, red, blue)",
              "description": "يبدأ من زاوية 90 درجة"
            },
            {
              "value": "conic-gradient(at 50% 50%, red, blue)",
              "description": "مركزه في المنتصف"
            },
            {
              "value": "conic-gradient(at top left, red, blue)",
              "description": "مركزه في أعلى اليسار"
            },
            {
              "value": "conic-gradient(red 0%, blue 50%, green 100%)",
              "description": "تدرج مخروطي بثلاثة ألوان"
            },
            {
              "value": "conic-gradient(red 0deg 90deg, blue 90deg 180deg, green 180deg 360deg)",
              "description": "أقسام محددة بألوان مختلفة"
            },
            {
              "value": "conic-gradient(red 0%, red 25%, blue 25%, blue 50%, green 50%, green 75%, yellow 75%)",
              "description": "تدرج مخروطي بتأثير الدوائر القطاعية"
            },
            {
              "value": "repeating-conic-gradient(red 0%, blue 20%)",
              "description": "تدرج مخروطي متكرر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "svg",
      "description": "خصائص خاصة بتكامل CSS مع SVG (الرسوميات المتجهية)",
      "properties": [
        {
          "name": "fill",
          "description": "يحدد لون تعبئة الشكل في SVG (يمكن استخدامه في CSS للعناصر SVG)",
          "values": [
            {
              "value": "none",
              "description": "بدون تعبئة - شفاف"
            },
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
              "value": "#007bff",
              "description": "لون مخصص باستخدام Hex"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "لون أحمر باستخدام RGB"
            },
            {
              "value": "rgba(255, 0, 0, 0.5)",
              "description": "لون أحمر شفاف 50%"
            },
            {
              "value": "currentColor",
              "description": "نفس لون النص"
            },
            {
              "value": "url('#gradient')",
              "description": "تعبئة بتدرج لوني معرف في SVG"
            },
            {
              "value": "url('pattern.svg#pattern')",
              "description": "تعبئة بنمط من SVG"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke",
          "description": "يحدد لون حدود الشكل في SVG",
          "values": [
            {
              "value": "none",
              "description": "بدون حدود"
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
              "value": "#007bff",
              "description": "لون مخصص"
            },
            {
              "value": "url('#gradient')",
              "description": "حدود بتدرج لوني"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-width",
          "description": "يحدد سمك حدود الشكل في SVG",
          "values": [
            {
              "value": "0.5",
              "description": "سمك 0.5 بكسل - رفيع جداً"
            },
            {
              "value": "1",
              "description": "سمك 1 بكسل - القيمة الافتراضية"
            },
            {
              "value": "1.5",
              "description": "سمك 1.5 بكسل"
            },
            {
              "value": "2",
              "description": "سمك 2 بكسل"
            },
            {
              "value": "2px",
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
              "description": "سمك 5 بكسل - سميك"
            },
            {
              "value": "10",
              "description": "سمك 10 بكسل - سميك جداً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-linecap",
          "description": "يحدد شكل نهايات الخطوط في SVG",
          "values": [
            {
              "value": "butt",
              "description": "نهاية حادة ومقطوعة - القيمة الافتراضية"
            },
            {
              "value": "round",
              "description": "نهاية دائرية - ناعمة"
            },
            {
              "value": "square",
              "description": "نهاية مربعة - ممتدة قليلاً"
            }
          ]
        },
        {
          "name": "stroke-linejoin",
          "description": "يحدد شكل التقاء الخطوط في الزوايا في SVG",
          "values": [
            {
              "value": "miter",
              "description": "زاوية حادة - القيمة الافتراضية"
            },
            {
              "value": "round",
              "description": "زاوية دائرية - ناعمة"
            },
            {
              "value": "bevel",
              "description": "زاوية مشطوفة - مقطوعة"
            }
          ]
        },
        {
          "name": "stroke-dasharray",
          "description": "يحدد نمط الخط المتقطع في SVG (طول الشرطة والفراغ)",
          "values": [
            {
              "value": "none",
              "description": "بدون تقطيع - خط متصل"
            },
            {
              "value": "2",
              "description": "شرطة 2 بكسل، فراغ 2 بكسل"
            },
            {
              "value": "5",
              "description": "شرطة 5 بكسل، فراغ 5 بكسل"
            },
            {
              "value": "10",
              "description": "شرطة 10 بكسل، فراغ 10 بكسل"
            },
            {
              "value": "5 10",
              "description": "شرطة 5 بكسل، فراغ 10 بكسل"
            },
            {
              "value": "10 5",
              "description": "شرطة 10 بكسل، فراغ 5 بكسل"
            },
            {
              "value": "10 5 2 5",
              "description": "نمط معقد: شرطة 10، فراغ 5، شرطة 2، فراغ 5"
            },
            {
              "value": "20 10 5 10",
              "description": "نمط معقد"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-dashoffset",
          "description": "يحدد إزاحة بداية نمط الخط المتقطع في SVG، يستخدم لتحريك الشرطات",
          "values": [
            {
              "value": "0",
              "description": "بدون إزاحة - القيمة الافتراضية"
            },
            {
              "value": "5px",
              "description": "إزاحة 5 بكسل"
            },
            {
              "value": "10px",
              "description": "إزاحة 10 بكسل"
            },
            {
              "value": "50%",
              "description": "إزاحة 50%"
            },
            {
              "value": "100%",
              "description": "إزاحة 100%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "stroke-opacity",
          "description": "يحدد شفافية الحدود في SVG من 0 إلى 1",
          "values": [
            {
              "value": "1",
              "description": "معتم بالكامل - القيمة الافتراضية"
            },
            {
              "value": "0.5",
              "description": "شفاف 50%"
            },
            {
              "value": "0",
              "description": "شفاف بالكامل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "fill-opacity",
          "description": "يحدد شفافية التعبئة في SVG من 0 إلى 1",
          "values": [
            {
              "value": "1",
              "description": "معتم بالكامل - القيمة الافتراضية"
            },
            {
              "value": "0.5",
              "description": "شفاف 50%"
            },
            {
              "value": "0",
              "description": "شفاف بالكامل"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "math",
      "description": "الدوال الرياضية في CSS (تُستخدم في أي قيمة رقمية)",
      "properties": [
        {
          "name": "calc()",
          "description": "يجري عمليات حسابية (جمع، طرح، ضرب، قسمة) بين قيم مختلفة",
          "values": [
            {
              "value": "calc(100% - 20px)",
              "description": "طرح 20 بكسل من 100%"
            },
            {
              "value": "calc(100% + 20px)",
              "description": "إضافة 20 بكسل إلى 100%"
            },
            {
              "value": "calc(100vh - 60px)",
              "description": "طرح 60 بكسل من ارتفاع النافذة"
            },
            {
              "value": "calc(100vw - 40px)",
              "description": "طرح 40 بكسل من عرض النافذة"
            },
            {
              "value": "calc(1rem + 2px)",
              "description": "جمع rem و بكسل"
            },
            {
              "value": "calc(50% - 20px)",
              "description": "نصف العرض ناقص 20 بكسل"
            },
            {
              "value": "calc((100% - 40px) / 3)",
              "description": "قسمة بعد الطرح"
            },
            {
              "value": "calc(100% / 4)",
              "description": "ربع العرض"
            },
            {
              "value": "calc(2 * 10px)",
              "description": "ضرب"
            },
            {
              "value": "calc(100% / 2 - 10px)",
              "description": "عمليات مركبة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "min()",
          "description": "تأخذ أصغر قيمة من بين عدة قيم (تشبه Math.min)",
          "values": [
            {
              "value": "min(100px, 50%)",
              "description": "أصغر بين 100 بكسل و 50%"
            },
            {
              "value": "min(200px, 50vh, 80%)",
              "description": "أصغر بين ثلاث قيم"
            },
            {
              "value": "min(2rem, 24px)",
              "description": "أصغر بين 2rem و 24 بكسل"
            },
            {
              "value": "min(600px, 100%)",
              "description": "لا يتجاوز 600 بكسل أو العرض الكامل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "max()",
          "description": "تأخذ أكبر قيمة من بين عدة قيم (تشبه Math.max)",
          "values": [
            {
              "value": "max(100px, 50%)",
              "description": "أكبر بين 100 بكسل و 50%"
            },
            {
              "value": "max(200px, 50vh, 80%)",
              "description": "أكبر بين ثلاث قيم"
            },
            {
              "value": "max(2rem, 24px)",
              "description": "أكبر بين 2rem و 24 بكسل"
            },
            {
              "value": "max(300px, 100%)",
              "description": "على الأقل 300 بكسل أو العرض الكامل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "clamp()",
          "description": "تحدد قيمة بين حد أدنى وحد أقصى (توسيط القيم)",
          "values": [
            {
              "value": "clamp(200px, 50%, 400px)",
              "description": "بين 200 و400 بكسل، تفضل 50%"
            },
            {
              "value": "clamp(12px, 2vw, 24px)",
              "description": "حجم خط يتغير مع الشاشة بين 12 و24"
            },
            {
              "value": "clamp(100px, 20vw, 300px)",
              "description": "عرض يتناسب مع عرض الشاشة"
            },
            {
              "value": "clamp(1rem, 2.5vw, 2rem)",
              "description": "حجم خط مرن"
            },
            {
              "value": "clamp(150px, 30%, 500px)",
              "description": "عرض بين 150 و500 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "round()",
          "description": "تقرب القيمة إلى أقرب رقم صحيح أو إلى مضاعف معين",
          "values": [
            {
              "value": "round(2.3)",
              "description": "تقريب إلى 2"
            },
            {
              "value": "round(2.7)",
              "description": "تقريب إلى 3"
            },
            {
              "value": "round(2.5)",
              "description": "تقريب إلى 3 (في CSS)"
            },
            {
              "value": "round(5px, 10px)",
              "description": "تقريب 5 بكسل إلى أقرب مضاعف 10 (تصبح 10)"
            },
            {
              "value": "round(12px, 10px)",
              "description": "تقريب 12 بكسل إلى 10"
            },
            {
              "value": "round(18px, 10px)",
              "description": "تقريب 18 بكسل إلى 20"
            }
          ],
          "freeInput": true
        },
        {
          "name": "sin()",
          "description": "تحسب جيب الزاوية (بالراديان أو الدرجات)",
          "values": [
            {
              "value": "sin(0deg)",
              "description": "جيب 0 = 0"
            },
            {
              "value": "sin(30deg)",
              "description": "جيب 30 درجة = 0.5"
            },
            {
              "value": "sin(45deg)",
              "description": "جيب 45 درجة ≈ 0.707"
            },
            {
              "value": "sin(90deg)",
              "description": "جيب 90 درجة = 1"
            },
            {
              "value": "sin(0.5rad)",
              "description": "جيب 0.5 راديان"
            }
          ],
          "freeInput": true
        },
        {
          "name": "cos()",
          "description": "تحسب جيب تمام الزاوية",
          "values": [
            {
              "value": "cos(0deg)",
              "description": "جيب تمام 0 = 1"
            },
            {
              "value": "cos(60deg)",
              "description": "جيب تمام 60 درجة = 0.5"
            },
            {
              "value": "cos(45deg)",
              "description": "جيب تمام 45 درجة ≈ 0.707"
            },
            {
              "value": "cos(90deg)",
              "description": "جيب تمام 90 درجة = 0"
            },
            {
              "value": "cos(0.5rad)",
              "description": "جيب تمام 0.5 راديان"
            }
          ],
          "freeInput": true
        },
        {
          "name": "tan()",
          "description": "تحسب ظل الزاوية",
          "values": [
            {
              "value": "tan(0deg)",
              "description": "ظل 0 = 0"
            },
            {
              "value": "tan(45deg)",
              "description": "ظل 45 درجة = 1"
            },
            {
              "value": "tan(30deg)",
              "description": "ظل 30 درجة ≈ 0.577"
            }
          ],
          "freeInput": true
        },
        {
          "name": "sqrt()",
          "description": "تحسب الجذر التربيعي للقيمة",
          "values": [
            {
              "value": "sqrt(0)",
              "description": "جذر 0 = 0"
            },
            {
              "value": "sqrt(1)",
              "description": "جذر 1 = 1"
            },
            {
              "value": "sqrt(4)",
              "description": "جذر 4 = 2"
            },
            {
              "value": "sqrt(9)",
              "description": "جذر 9 = 3"
            },
            {
              "value": "sqrt(16)",
              "description": "جذر 16 = 4"
            },
            {
              "value": "sqrt(2)",
              "description": "جذر 2 ≈ 1.414"
            }
          ],
          "freeInput": true
        },
        {
          "name": "pow()",
          "description": "تحسب القوة (الأس) لقيمة",
          "values": [
            {
              "value": "pow(2, 0)",
              "description": "2 أس 0 = 1"
            },
            {
              "value": "pow(2, 1)",
              "description": "2 أس 1 = 2"
            },
            {
              "value": "pow(2, 2)",
              "description": "2 أس 2 = 4"
            },
            {
              "value": "pow(2, 3)",
              "description": "2 أس 3 = 8"
            },
            {
              "value": "pow(10, 2)",
              "description": "10 أس 2 = 100"
            }
          ],
          "freeInput": true
        },
        {
          "name": "abs()",
          "description": "تحسب القيمة المطلقة (تجاهل الإشارة السالبة)",
          "values": [
            {
              "value": "abs(10px)",
              "description": "تصبح 10 بكسل"
            },
            {
              "value": "abs(-10px)",
              "description": "تصبح 10 بكسل (تجاهل الإشارة)"
            },
            {
              "value": "abs(-5)",
              "description": "تصبح 5"
            },
            {
              "value": "abs(0)",
              "description": "تصبح 0"
            }
          ],
          "freeInput": true
        },
        {
          "name": "sign()",
          "description": "ترجع 1 للقيم الموجبة، -1 للقيم السالبة، 0 للصفر",
          "values": [
            {
              "value": "sign(5px)",
              "description": "ترجع 1 (موجب)"
            },
            {
              "value": "sign(-5px)",
              "description": "ترجع -1 (سالبة)"
            },
            {
              "value": "sign(0)",
              "description": "ترجع 0"
            }
          ],
          "freeInput": true
        },
        {
          "name": "mod() / rem()",
          "description": "تحسب باقي القسمة (modulo)",
          "values": [
            {
              "value": "mod(10, 3)",
              "description": "باقي قسمة 10 على 3 = 1"
            },
            {
              "value": "rem(10, 3)",
              "description": "باقي قسمة 10 على 3 = 1 (مع سلوك مختلف للقيم السالبة)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "atan2()",
          "description": "تحسب الزاوية بين محور x ونقطة محددة",
          "values": [
            {
              "value": "atan2(1, 1)",
              "description": "زاوية 45 درجة"
            },
            {
              "value": "atan2(0, 1)",
              "description": "زاوية 0 درجة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "environment",
      "description": "خصائص ودوال متعلقة بالبيئة المحيطة بالصفحة (مثل المسافات الآمنة في الشاشات)",
      "properties": [
        {
          "name": "env()",
          "description": "تأخذ قيمة من بيئة المتصفح (مثل المسافات الآمنة للشاشات المقطوعة)",
          "values": [
            {
              "value": "env(safe-area-inset-top)",
              "description": "المسافة الآمنة من الأعلى (للشاشات المقطوعة)"
            },
            {
              "value": "env(safe-area-inset-bottom)",
              "description": "المسافة الآمنة من الأسفل"
            },
            {
              "value": "env(safe-area-inset-left)",
              "description": "المسافة الآمنة من اليسار"
            },
            {
              "value": "env(safe-area-inset-right)",
              "description": "المسافة الآمنة من اليمين"
            },
            {
              "value": "env(safe-area-inset-top, 0px)",
              "description": "مع قيمة احتياطية"
            },
            {
              "value": "env(safe-area-inset-bottom, 20px)",
              "description": "مع قيمة احتياطية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "pseudo-classes",
      "description": "الفئات الزائفة (Pseudo-classes) الشائعة التي تؤثر على التنسيق",
      "properties": [
        {
          "name": ":hover",
          "description": "يطبق التنسيق عند تمرير الماوس فوق العنصر - أشهر فئة زائفة",
          "values": [
            {
              "value": "background-color: red",
              "description": "يتغير لون الخلفية عند التمرير"
            },
            {
              "value": "transform: scale(1.05)",
              "description": "تكبير العنصر عند التمرير"
            },
            {
              "value": "opacity: 0.8",
              "description": "تخفيف العنصر عند التمرير"
            },
            {
              "value": "color: blue",
              "description": "تغيير لون النص عند التمرير"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":active",
          "description": "يطبق التنسيق عند الضغط على العنصر (أثناء النقر)",
          "values": [
            {
              "value": "transform: scale(0.95)",
              "description": "يتقلص العنصر قليلاً عند النقر"
            },
            {
              "value": "background-color: darkblue",
              "description": "لون خلفية غامق عند النقر"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":focus",
          "description": "يطبق التنسيق عندما يكون العنصر في حالة التركيز (مثل حقل إدخال)",
          "values": [
            {
              "value": "outline: 2px solid blue",
              "description": "يظهر إطار أزرق عند التركيز"
            },
            {
              "value": "border-color: #007bff",
              "description": "تغيير لون الحدود عند التركيز"
            },
            {
              "value": "box-shadow: 0 0 0 3px rgba(0,123,255,0.3)",
              "description": "ظل عند التركيز"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":visited",
          "description": "يطبق التنسيق على الروابط التي تمت زيارتها (محدود لأسباب أمنية)",
          "values": [
            {
              "value": "color: purple",
              "description": "لون الرابط يصبح بنفسجياً"
            },
            {
              "value": "color: #6c757d",
              "description": "لون رمادي للروابط المزارة"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":link",
          "description": "يطبق التنسيق على الروابط غير المُزارة",
          "values": [
            {
              "value": "color: blue",
              "description": "لون الرابط أزرق"
            },
            {
              "value": "text-decoration: none",
              "description": "إزالة التسطير"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":disabled",
          "description": "يطبق التنسيق على العناصر المعطلة (disabled)",
          "values": [
            {
              "value": "opacity: 0.5",
              "description": "تخفيف العنصر"
            },
            {
              "value": "cursor: not-allowed",
              "description": "مؤشر ممنوع"
            },
            {
              "value": "background-color: #e9ecef",
              "description": "خلفية رمادية"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":checked",
          "description": "يطبق التنسيق على مربعات الاختيار وأزرار الراديو المحددة",
          "values": [
            {
              "value": "accent-color: green",
              "description": "لون المميز يصبح أخضر"
            },
            {
              "value": "background-color: #28a745",
              "description": "لون خلفية عند التحديد"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":nth-child()",
          "description": "يحدد عناصر بناءً على ترتيبها بين إخوتها",
          "values": [
            {
              "value": ":nth-child(odd)",
              "description": "العناصر الفردية (1, 3, 5, ...)"
            },
            {
              "value": ":nth-child(even)",
              "description": "العناصر الزوجية (2, 4, 6, ...)"
            },
            {
              "value": ":nth-child(2n)",
              "description": "العناصر الزوجية"
            },
            {
              "value": ":nth-child(2n+1)",
              "description": "العناصر الفردية"
            },
            {
              "value": ":nth-child(3n)",
              "description": "3, 6, 9, ..."
            },
            {
              "value": ":nth-child(3n+1)",
              "description": "1, 4, 7, ..."
            },
            {
              "value": ":nth-child(4n-1)",
              "description": "3, 7, 11, ..."
            },
            {
              "value": ":nth-child(2)",
              "description": "الثاني فقط"
            },
            {
              "value": ":nth-child(5)",
              "description": "الخامس فقط"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":not()",
          "description": "ينفي تطبيق التنسيق على عناصر معينة",
          "values": [
            {
              "value": ":not(.special)",
              "description": "جميع العناصر ما عدا ذات الصنف special"
            },
            {
              "value": ":not(:first-child)",
              "description": "جميع العناصر ما عدا الأول"
            },
            {
              "value": ":not(div)",
              "description": "جميع العناصر ما عدا div"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":focus-visible",
          "description": "يطبق تنسيق التركيز فقط عندما يكون ظاهراً للمستخدم بحكم المتصفح (مثل التنقل بلوحة المفاتيح)",
          "values": [
            {
              "value": "outline: 3px solid blue",
              "description": "إطار تركيز واضح عند التنقل بلوحة المفاتيح فقط"
            },
            {
              "value": "box-shadow: 0 0 0 4px rgba(0,123,255,0.4)",
              "description": "ظل عند التركيز بلوحة المفاتيح"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":focus-within",
          "description": "يطبق التنسيق على عنصر أب عندما يكون هو نفسه أو أي عنصر بداخله في حالة تركيز",
          "values": [
            {
              "value": "border-color: blue",
              "description": "تلوين حدود النموذج بأكمله عند التركيز على أي حقل بداخله"
            },
            {
              "value": "background-color: #f8f9fa",
              "description": "تغيير خلفية الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":is()",
          "description": "دالة تجميع تُبسّط كتابة عدة محددات معاً بدل تكرارها",
          "values": [
            {
              "value": ":is(h1, h2, h3)",
              "description": "يطبق على h1 وh2 وh3 معاً"
            },
            {
              "value": "article :is(h1, h2)",
              "description": "أي h1 أو h2 داخل article"
            },
            {
              "value": ".card :is(h1, h2, h3)",
              "description": "أي عنوان داخل البطاقة"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":where()",
          "description": "مثل :is() تماماً في الوظيفة، لكن مستوى تحديدها (specificity) يبقى صفراً دائماً",
          "values": [
            {
              "value": ":where(h1, h2, h3)",
              "description": "تجميع محددات بدون زيادة قوة التحديد"
            },
            {
              "value": ".card :where(h1, h2)",
              "description": "تحديد منخفض - يسهل تجاوزه"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":has()",
          "description": "يختار عنصراً بناءً على وجود عناصر معينة بداخله ('المحدد الأب')",
          "values": [
            {
              "value": "div:has(> img)",
              "description": "أي div يحتوي مباشرة على صورة"
            },
            {
              "value": "label:has(input:checked)",
              "description": "تنسيق label عندما يكون input بداخله محدداً"
            },
            {
              "value": "article:has(h2)",
              "description": "أي article يحتوي على h2"
            },
            {
              "value": "div:has(.active)",
              "description": "أي div يحتوي على عنصر بالصنف active"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":first-child / :last-child",
          "description": "يختار العنصر إن كان الأول أو الأخير بين إخوته",
          "values": [
            {
              "value": ":first-child",
              "description": "أول عنصر بين إخوته"
            },
            {
              "value": ":last-child",
              "description": "آخر عنصر بين إخوته"
            },
            {
              "value": ":only-child",
              "description": "العنصر الوحيد لأبيه (بدون إخوة)"
            },
            {
              "value": ":nth-child(1)",
              "description": "أول عنصر (مثل first-child)"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":nth-of-type()",
          "description": "مثل nth-child لكنها تحسب فقط بين الإخوة من نفس نوع العنصر",
          "values": [
            {
              "value": ":nth-of-type(2)",
              "description": "ثاني عنصر من نفس النوع بين إخوته"
            },
            {
              "value": ":first-of-type",
              "description": "أول عنصر من نفس النوع"
            },
            {
              "value": ":last-of-type",
              "description": "آخر عنصر من نفس النوع"
            },
            {
              "value": ":nth-of-type(odd)",
              "description": "العناصر الفردية من نفس النوع"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":empty",
          "description": "يختار العناصر التي لا تحتوي على أي محتوى أو عناصر فرعية",
          "values": [
            {
              "value": "display: none",
              "description": "إخفاء العناصر الفارغة تماماً"
            },
            {
              "value": "background: #f8f9fa",
              "description": "خلفية رمادية للعناصر الفارغة"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":target",
          "description": "يختار العنصر الذي يطابق معرّف الرابط الحالي في شريط العنوان",
          "values": [
            {
              "value": "background: yellow",
              "description": "تمييز القسم المستهدف بلون خلفية"
            },
            {
              "value": "animation: highlight 1s",
              "description": "تأثير تمييز عند الانتقال"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":root",
          "description": "يختار العنصر الجذري للمستند (html)، يُستخدم لتعريف المتغيرات المخصصة عالمياً",
          "values": [
            {
              "value": ":root { --main-color: blue; }",
              "description": "تعريف متغير مخصص عام"
            },
            {
              "value": ":root { --font-size: 16px; }",
              "description": "تعريف حجم خط أساسي"
            }
          ],
          "freeInput": true
        },
        {
          "name": ":lang()",
          "description": "يختار العناصر بناءً على لغة المحتوى المحددة (عبر سمة lang)",
          "values": [
            {
              "value": ":lang(ar)",
              "description": "العناصر التي لغتها العربية"
            },
            {
              "value": ":lang(en)",
              "description": "العناصر التي لغتها الإنجليزية"
            },
            {
              "value": ":lang(fr)",
              "description": "العناصر التي لغتها الفرنسية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "pseudo-elements",
      "description": "العناصر الزائفة (Pseudo-elements) الشائعة",
      "properties": [
        {
          "name": "::before",
          "description": "يُنشئ عنصراً افتراضياً قبل محتوى العنصر الأصلي (يحتاج إلى content)",
          "values": [
            {
              "value": "content: '★ '",
              "description": "يضيف نجمة قبل النص"
            },
            {
              "value": "content: '▶ '",
              "description": "يضيف مثلث قبل النص"
            },
            {
              "value": "content: '📌 '",
              "description": "يضيف رمز دبوس قبل النص"
            },
            {
              "value": "content: ''",
              "description": "عنصر فارغ للتصميم فقط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::after",
          "description": "يُنشئ عنصراً افتراضياً بعد محتوى العنصر الأصلي (يحتاج إلى content)",
          "values": [
            {
              "value": "content: ' ✓'",
              "description": "يضيف علامة صح بعد النص"
            },
            {
              "value": "content: ' →'",
              "description": "يضيف سهم بعد النص"
            },
            {
              "value": "content: ''",
              "description": "عنصر فارغ للتصميم فقط"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::first-letter",
          "description": "يطبق تنسيقاً على الحرف الأول من النص (مفيد للتصميم الفني)",
          "values": [
            {
              "value": "font-size: 2em",
              "description": "تكبير الحرف الأول"
            },
            {
              "value": "font-weight: bold",
              "description": "جعل الحرف الأول سميكاً"
            },
            {
              "value": "color: red",
              "description": "لون الحرف الأول أحمر"
            },
            {
              "value": "float: left",
              "description": "الحرف الأول عائم (تأثير الـ Drop Cap)"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::first-line",
          "description": "يطبق تنسيقاً على السطر الأول من النص",
          "values": [
            {
              "value": "font-weight: bold",
              "description": "جعل السطر الأول سميكاً"
            },
            {
              "value": "text-transform: uppercase",
              "description": "تحويل السطر الأول إلى أحرف كبيرة"
            },
            {
              "value": "color: #007bff",
              "description": "لون السطر الأول أزرق"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::selection",
          "description": "يطبق تنسيقاً على النص المحدد من قبل المستخدم",
          "values": [
            {
              "value": "background: yellow",
              "description": "خلفية صفراء للنص المحدد"
            },
            {
              "value": "background: #007bff; color: white",
              "description": "خلفية زرقاء ونص أبيض"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::placeholder",
          "description": "يطبق تنسيقاً على النص المؤقت في حقول الإدخال",
          "values": [
            {
              "value": "color: gray",
              "description": "لون النص المؤقت رمادي"
            },
            {
              "value": "font-style: italic",
              "description": "نص مائل"
            },
            {
              "value": "font-size: 14px",
              "description": "حجم خط أصغر"
            },
            {
              "value": "opacity: 0.7",
              "description": "شفافية 70%"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::marker",
          "description": "يطبق تنسيقاً على علامات التعداد في القوائم",
          "values": [
            {
              "value": "color: red",
              "description": "لون علامة التعداد أحمر"
            },
            {
              "value": "font-size: 1.2em",
              "description": "تكبير علامة التعداد"
            },
            {
              "value": "color: #007bff",
              "description": "لون أزرق للعلامة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::backdrop",
          "description": "يطبق تنسيقاً على الخلفية خلف العناصر في وضع ملء الشاشة أو خلف dialog",
          "values": [
            {
              "value": "background: rgba(0,0,0,0.7)",
              "description": "تعتيم الصفحة خلف نافذة حوار"
            },
            {
              "value": "backdrop-filter: blur(5px)",
              "description": "تأثير زجاجي على الخلفية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "::file-selector-button",
          "description": "يطبق تنسيقاً على زر اختيار الملف داخل حقل input type=file",
          "values": [
            {
              "value": "background: #007bff; color: white",
              "description": "تخصيص شكل زر اختيار الملف"
            },
            {
              "value": "padding: 8px 16px; border-radius: 4px",
              "description": "تصميم الزر"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "at-rules",
      "description": "قواعد @ (At-Rules) وهي تعليمات خاصة في CSS تبدأ بـ @ وتتحكم في كيفية تطبيق الأنماط",
      "properties": [
        {
          "name": "@media",
          "description": "يطبق الأنماط فقط عند تحقق شرط معين متعلق بجهاز العرض",
          "values": [
            {
              "value": "@media (max-width: 768px) { ... }",
              "description": "أنماط للشاشات بعرض 768px فأقل"
            },
            {
              "value": "@media (min-width: 768px) { ... }",
              "description": "أنماط للشاشات بعرض 768px فأكثر"
            },
            {
              "value": "@media (prefers-color-scheme: dark) { ... }",
              "description": "أنماط للوضع الداكن حسب تفضيل النظام"
            },
            {
              "value": "@media (prefers-color-scheme: light) { ... }",
              "description": "أنماط للوضع الفاتح"
            },
            {
              "value": "@media print { ... }",
              "description": "أنماط خاصة بالطباعة فقط"
            },
            {
              "value": "@media (orientation: landscape) { ... }",
              "description": "أنماط عند اتجاه الشاشة الأفقي"
            },
            {
              "value": "@media (orientation: portrait) { ... }",
              "description": "أنماط عند اتجاه الشاشة العمودي"
            },
            {
              "value": "@media (prefers-reduced-motion: reduce) { ... }",
              "description": "أنماط للمستخدمين الذين يفضلون تقليل الحركة"
            },
            {
              "value": "@media (hover: hover) { ... }",
              "description": "أنماط للأجهزة التي تدعم التمرير"
            },
            {
              "value": "@media (pointer: coarse) { ... }",
              "description": "أنماط للأجهزة التي تستخدم اللمس"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@supports",
          "description": "يطبق الأنماط فقط إذا كان المتصفح يدعم خاصية CSS معينة",
          "values": [
            {
              "value": "@supports (display: grid) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم Grid"
            },
            {
              "value": "@supports not (display: grid) { ... }",
              "description": "أنماط بديلة للمتصفحات التي لا تدعم Grid"
            },
            {
              "value": "@supports (backdrop-filter: blur(10px)) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم backdrop-filter"
            },
            {
              "value": "@supports (scroll-behavior: smooth) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم التمرير السلس"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@container",
          "description": "مشابه لـ @media لكنه يطبق الأنماط بناءً على حجم عنصر حاوٍ محدد",
          "values": [
            {
              "value": "@container (min-width: 400px) { ... }",
              "description": "أنماط عندما يكون عرض الحاوية 400px فأكثر"
            },
            {
              "value": "@container (max-width: 400px) { ... }",
              "description": "أنماط عندما يكون عرض الحاوية 400px فأقل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@font-face",
          "description": "يُعرّف خطاً مخصصاً يمكن تحميله من ملف وربطه باسم",
          "values": [
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2'); }",
              "description": "تعريف خط من ملف woff2"
            },
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'), url('font.woff') format('woff'); }",
              "description": "تعريف خط بصيغ متعددة"
            },
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2'); font-weight: bold; }",
              "description": "تعريف خط بوزن محدد"
            },
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2'); font-style: italic; }",
              "description": "تعريف خط مائل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@import",
          "description": "يستورد ملف CSS خارجي آخر داخل ملف الأنماط الحالي",
          "values": [
            {
              "value": "@import url('theme.css');",
              "description": "استيراد ملف أنماط آخر"
            },
            {
              "value": "@import url('print.css') print;",
              "description": "استيراد ملف أنماط خاص بالطباعة فقط"
            },
            {
              "value": "@import url('mobile.css') (max-width: 768px);",
              "description": "استيراد ملف خاص بالجوال"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@keyframes",
          "description": "يُعرّف مراحل حركة (animation) يمكن استدعاؤها لاحقاً",
          "values": [
            {
              "value": "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }",
              "description": "حركة تلاشي"
            },
            {
              "value": "@keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }",
              "description": "حركة انزلاق"
            },
            {
              "value": "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }",
              "description": "حركة نبض"
            },
            {
              "value": "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
              "description": "حركة دوران"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة للخصائص المتنوعة في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - خلفية بتدرج متعدد",
          "description": "استخدام تدرجات متعددة في خلفية واحدة",
          "values": [
            {
              "value": "background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3); background-size: 400% 400%; animation: gradient 10s ease infinite;",
              "description": "خلفية متدرجة متحركة"
            }
          ]
        },
        {
          "name": "مثال 2 - SVG متحرك",
          "description": "تحريك حدود SVG باستخدام stroke-dasharray و stroke-dashoffset",
          "values": [
            {
              "value": "svg path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 3s ease-in-out forwards; } @keyframes draw { to { stroke-dashoffset: 0; } }",
              "description": "رسم حدود SVG بالحركة"
            }
          ]
        },
        {
          "name": "مثال 3 - تأثير hover متقدم",
          "description": "تأثير hover متعدد باستخدام الفئات الزائفة",
          "values": [
            {
              "value": ".card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.2); transition: all 0.3s ease; }",
              "description": "بطاقة ترتفع وتكبر عند التمرير"
            }
          ]
        },
        {
          "name": "مثال 4 - تنسيق أول حرف من الفقرة",
          "description": "تصميم أول حرف من الفقرة مثل المجلات",
          "values": [
            {
              "value": "p::first-letter { font-size: 3em; font-weight: bold; color: #007bff; float: left; margin-right: 8px; line-height: 1; }",
              "description": "تأثير الـ Drop Cap"
            }
          ]
        },
        {
          "name": "مثال 5 - وضع داكن تلقائي",
          "description": "دعم الوضع الداكن تلقائياً حسب تفضيل النظام",
          "values": [
            {
              "value": ":root { --bg: #fff; --text: #333; } @media (prefers-color-scheme: dark) { :root { --bg: #1a1a2e; --text: #eaeaea; } } body { background: var(--bg); color: var(--text); }",
              "description": "تبديل تلقائي بين الوضعين"
            }
          ]
        },
        {
          "name": "مثال 6 - استخدام calc و clamp",
          "description": "أحجام مرنة مع حدود",
          "values": [
            {
              "value": ".container { width: clamp(300px, 80%, 1200px); padding: calc(20px + 2vw); font-size: clamp(14px, 2vw, 20px); }",
              "description": "تصميم مرن مع حدود"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام الخصائص المتنوعة بشكل فعال",
      "properties": [
        {
          "name": "نصائح التدرجات",
          "description": "نصائح لاستخدام التدرجات بشكل فعال",
          "values": [
            {
              "value": "استخدم تدرجات متعددة",
              "description": "دمج عدة تدرجات يخلق تأثيرات مذهلة"
            },
            {
              "value": "استخدم rgba للشفافية",
              "description": "تدرجات شفافة تضيف عمقاً للتصميم"
            },
            {
              "value": "استخدم repeating gradients",
              "description": "للأنماط المتكررة بدون صور"
            }
          ]
        },
        {
          "name": "نصائح SVG",
          "description": "نصائح لاستخدام SVG مع CSS",
          "values": [
            {
              "value": "استخدم fill و stroke",
              "description": "للتحكم في ألوان SVG بدون تعديل الملف"
            },
            {
              "value": "استخدم stroke-dasharray للحركة",
              "description": "لتأثيرات رسم الحدود"
            },
            {
              "value": "استخدم currentColor",
              "description": "لجعل SVG يتناسب مع لون النص"
            }
          ]
        },
        {
          "name": "نصائح الفئات الزائفة",
          "description": "نصائح لاستخدام الفئات الزائفة",
          "values": [
            {
              "value": "ترتيب الروابط: LVFHA",
              "description": "Link, Visited, Focus, Hover, Active"
            },
            {
              "value": "استخدم :focus-visible بدلاً من :focus",
              "description": "يظهر التركيز فقط عند الحاجة"
            },
            {
              "value": "استخدم :is() لتبسيط المحددات",
              "description": "يسهل كتابة محددات معقدة"
            }
          ]
        },
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الخصائص المتنوعة",
          "values": [
            {
              "value": "تجنب التدرجات الثقيلة",
              "description": "التدرجات المعقدة قد تؤثر على الأداء"
            },
            {
              "value": "استخدم will-change مع SVG",
              "description": "يحسن أداء الرسوم المتحركة"
            },
            {
              "value": "استخدم @supports بحكمة",
              "description": "لا تفرط في استخدامها"
            }
          ]
        }
      ]
    }
  ],
  "cssSelectors": [
    {
      "tag": "basic-selectors",
      "description": "المحددات الأساسية في CSS هي اللبنات الأولى لاختيار العناصر، وتشمل محددات النوع، والفئة، والمعرف، والعالمي",
      "properties": [
        {
          "name": "محدد النوع (Type Selector)",
          "description": "يحدد جميع العناصر من نفس النوع (مثل جميع div أو جميع p)",
          "values": [
            {
              "value": "div",
              "description": "يختار جميع عناصر div"
            },
            {
              "value": "p",
              "description": "يختار جميع عناصر p"
            },
            {
              "value": "h1",
              "description": "يختار جميع عناصر h1"
            },
            {
              "value": "span",
              "description": "يختار جميع عناصر span"
            },
            {
              "value": "a",
              "description": "يختار جميع عناصر a"
            },
            {
              "value": "ul",
              "description": "يختار جميع عناصر ul"
            },
            {
              "value": "li",
              "description": "يختار جميع عناصر li"
            },
            {
              "value": "img",
              "description": "يختار جميع عناصر img"
            },
            {
              "value": "button",
              "description": "يختار جميع عناصر button"
            },
            {
              "value": "input",
              "description": "يختار جميع عناصر input"
            },
            {
              "value": "section",
              "description": "يختار جميع عناصر section"
            },
            {
              "value": "article",
              "description": "يختار جميع عناصر article"
            },
            {
              "value": "nav",
              "description": "يختار جميع عناصر nav"
            },
            {
              "value": "header",
              "description": "يختار جميع عناصر header"
            },
            {
              "value": "footer",
              "description": "يختار جميع عناصر footer"
            },
            {
              "value": "main",
              "description": "يختار جميع عناصر main"
            },
            {
              "value": "aside",
              "description": "يختار جميع عناصر aside"
            },
            {
              "value": "figure",
              "description": "يختار جميع عناصر figure"
            },
            {
              "value": "figcaption",
              "description": "يختار جميع عناصر figcaption"
            },
            {
              "value": "blockquote",
              "description": "يختار جميع عناصر blockquote"
            },
            {
              "value": "pre",
              "description": "يختار جميع عناصر pre"
            },
            {
              "value": "code",
              "description": "يختار جميع عناصر code"
            },
            {
              "value": "em",
              "description": "يختار جميع عناصر em"
            },
            {
              "value": "strong",
              "description": "يختار جميع عناصر strong"
            },
            {
              "value": "table",
              "description": "يختار جميع عناصر table"
            },
            {
              "value": "form",
              "description": "يختار جميع عناصر form"
            },
            {
              "value": "label",
              "description": "يختار جميع عناصر label"
            },
            {
              "value": "select",
              "description": "يختار جميع عناصر select"
            },
            {
              "value": "textarea",
              "description": "يختار جميع عناصر textarea"
            }
          ]
        },
        {
          "name": "محدد الفئة (Class Selector)",
          "description": "يحدد العناصر التي تحمل فئة معينة (باستخدام . قبل اسم الفئة)",
          "values": [
            {
              "value": ".container",
              "description": "يختار جميع العناصر ذات الفئة container"
            },
            {
              "value": ".active",
              "description": "يختار جميع العناصر ذات الفئة active"
            },
            {
              "value": ".btn",
              "description": "يختار جميع العناصر ذات الفئة btn"
            },
            {
              "value": ".nav",
              "description": "يختار جميع العناصر ذات الفئة nav"
            },
            {
              "value": ".card",
              "description": "يختار جميع العناصر ذات الفئة card"
            },
            {
              "value": ".header",
              "description": "يختار جميع العناصر ذات الفئة header"
            },
            {
              "value": ".footer",
              "description": "يختار جميع العناصر ذات الفئة footer"
            },
            {
              "value": ".main",
              "description": "يختار جميع العناصر ذات الفئة main"
            },
            {
              "value": ".sidebar",
              "description": "يختار جميع العناصر ذات الفئة sidebar"
            },
            {
              "value": ".hidden",
              "description": "يختار جميع العناصر ذات الفئة hidden"
            },
            {
              "value": ".visible",
              "description": "يختار جميع العناصر ذات الفئة visible"
            },
            {
              "value": ".error",
              "description": "يختار جميع العناصر ذات الفئة error"
            },
            {
              "value": ".success",
              "description": "يختار جميع العناصر ذات الفئة success"
            },
            {
              "value": ".warning",
              "description": "يختار جميع العناصر ذات الفئة warning"
            },
            {
              "value": ".info",
              "description": "يختار جميع العناصر ذات الفئة info"
            },
            {
              "value": ".primary",
              "description": "يختار جميع العناصر ذات الفئة primary"
            },
            {
              "value": ".secondary",
              "description": "يختار جميع العناصر ذات الفئة secondary"
            },
            {
              "value": ".dark",
              "description": "يختار جميع العناصر ذات الفئة dark"
            },
            {
              "value": ".light",
              "description": "يختار جميع العناصر ذات الفئة light"
            },
            {
              "value": ".large",
              "description": "يختار جميع العناصر ذات الفئة large"
            },
            {
              "value": ".small",
              "description": "يختار جميع العناصر ذات الفئة small"
            }
          ]
        },
        {
          "name": "محدد المعرف (ID Selector)",
          "description": "يحدد عنصراً واحداً يحمل معرفاً معيناً (باستخدام # قبل اسم المعرف)",
          "values": [
            {
              "value": "#header",
              "description": "يختار العنصر ذا المعرف header"
            },
            {
              "value": "#main",
              "description": "يختار العنصر ذا المعرف main"
            },
            {
              "value": "#footer",
              "description": "يختار العنصر ذا المعرف footer"
            },
            {
              "value": "#sidebar",
              "description": "يختار العنصر ذا المعرف sidebar"
            },
            {
              "value": "#logo",
              "description": "يختار العنصر ذا المعرف logo"
            },
            {
              "value": "#navigation",
              "description": "يختار العنصر ذا المعرف navigation"
            },
            {
              "value": "#content",
              "description": "يختار العنصر ذا المعرف content"
            },
            {
              "value": "#hero",
              "description": "يختار العنصر ذا المعرف hero"
            },
            {
              "value": "#about",
              "description": "يختار العنصر ذا المعرف about"
            },
            {
              "value": "#contact",
              "description": "يختار العنصر ذا المعرف contact"
            }
          ]
        },
        {
          "name": "المحدد العالمي (Universal Selector)",
          "description": "يحدد جميع العناصر في الصفحة (باستخدام *)",
          "values": [
            {
              "value": "*",
              "description": "يختار جميع العناصر في الصفحة"
            },
            {
              "value": "* *",
              "description": "يختار جميع العناصر الأحفاد (أبناء الأبناء)"
            },
            {
              "value": "div *",
              "description": "يختار جميع العناصر داخل div"
            },
            {
              "value": "*.active",
              "description": "يختار جميع العناصر ذات الفئة active (نفس .active)"
            }
          ]
        }
      ]
    },
    {
      "tag": "combinators",
      "description": "المحددات المركبة تستخدم للجمع بين محددين أو أكثر لاختيار عناصر بناءً على العلاقة بينها",
      "properties": [
        {
          "name": "المحدد السليل (Descendant Combinator)",
          "description": "يختار العناصر التي هي أحفاد (أبناء أو أحفاد) لعنصر آخر (مسافة بين المحددين)",
          "values": [
            {
              "value": "div p",
              "description": "يختار جميع عناصر p داخل div (أي عمق)"
            },
            {
              "value": ".container span",
              "description": "يختار جميع عناصر span داخل .container"
            },
            {
              "value": "ul li",
              "description": "يختار جميع عناصر li داخل ul"
            },
            {
              "value": "article p",
              "description": "يختار جميع عناصر p داخل article"
            },
            {
              "value": ".nav a",
              "description": "يختار جميع عناصر a داخل .nav"
            },
            {
              "value": "#main .content",
              "description": "يختار جميع عناصر .content داخل #main"
            },
            {
              "value": "section article",
              "description": "يختار جميع عناصر article داخل section"
            },
            {
              "value": "form input",
              "description": "يختار جميع عناصر input داخل form"
            }
          ]
        },
        {
          "name": "المحدد الابن المباشر (Child Combinator)",
          "description": "يختار العناصر التي هي أبناء مباشرين لعنصر آخر (باستخدام >)",
          "values": [
            {
              "value": "div > p",
              "description": "يختار عناصر p التي هي أبناء مباشرين لـ div"
            },
            {
              "value": ".container > .item",
              "description": "يختار .item التي هي أبناء مباشرين لـ .container"
            },
            {
              "value": "ul > li",
              "description": "يختار عناصر li التي هي أبناء مباشرين لـ ul"
            },
            {
              "value": "nav > a",
              "description": "يختار عناصر a التي هي أبناء مباشرين لـ nav"
            },
            {
              "value": "header > h1",
              "description": "يختار h1 التي هي أبناء مباشرين لـ header"
            },
            {
              "value": "section > article",
              "description": "يختار article التي هي أبناء مباشرين لـ section"
            },
            {
              "value": "form > input",
              "description": "يختار input التي هي أبناء مباشرين لـ form"
            },
            {
              "value": ".card > .card-header",
              "description": "يختار .card-header التي هي أبناء مباشرين لـ .card"
            }
          ]
        },
        {
          "name": "المحدد الأخ التالي (Adjacent Sibling Combinator)",
          "description": "يختار العنصر الذي يلي عنصراً آخر مباشرة في نفس المستوى (باستخدام +)",
          "values": [
            {
              "value": "h1 + p",
              "description": "يختار عنصر p الذي يلي h1 مباشرة"
            },
            {
              "value": "h2 + .description",
              "description": "يختار .description الذي يلي h2 مباشرة"
            },
            {
              "value": "label + input",
              "description": "يختار input الذي يلي label مباشرة"
            },
            {
              "value": ".item + .item",
              "description": "يختار .item الذي يلي .item مباشرة"
            },
            {
              "value": "li + li",
              "description": "يختار li الذي يلي li مباشرة (جميع li ما عدا الأول)"
            },
            {
              "value": "p + p",
              "description": "يختار p الذي يلي p مباشرة"
            }
          ]
        },
        {
          "name": "المحدد الأخ التالي العام (General Sibling Combinator)",
          "description": "يختار العناصر التي تلي عنصراً آخر في نفس المستوى (جميع الأخوة التاليين) (باستخدام ~)",
          "values": [
            {
              "value": "h1 ~ p",
              "description": "يختار جميع عناصر p التي تلي h1"
            },
            {
              "value": ".active ~ .item",
              "description": "يختار جميع .item التي تلي .active"
            },
            {
              "value": "h2 ~ .content",
              "description": "يختار جميع .content التي تلي h2"
            },
            {
              "value": "li ~ li",
              "description": "يختار جميع li التي تلي li الأولى"
            }
          ]
        },
        {
          "name": "المحدد المركب (Compound Selector)",
          "description": "يجمع بين عدة محددات على نفس العنصر (بدون مسافات)",
          "values": [
            {
              "value": "div.container",
              "description": "يختار div مع الفئة container"
            },
            {
              "value": "p.active",
              "description": "يختار p مع الفئة active"
            },
            {
              "value": "a[href]",
              "description": "يختار a مع سمة href"
            },
            {
              "value": "input[type=\"text\"]",
              "description": "يختار input من نوع text"
            },
            {
              "value": "button.primary",
              "description": "يختار button مع الفئة primary"
            },
            {
              "value": "div#header",
              "description": "يختار div مع المعرف header"
            },
            {
              "value": "a.btn.primary",
              "description": "يختار a مع الفئتين btn و primary"
            }
          ]
        }
      ]
    },
    {
      "tag": "attribute-selectors",
      "description": "تحدد العناصر بناءً على وجود سمات معينة أو قيمها",
      "properties": [
        {
          "name": "[attr]",
          "description": "يختار العناصر التي تحمل سمة معينة (بغض النظر عن قيمتها)",
          "values": [
            {
              "value": "[href]",
              "description": "يختار جميع العناصر ذات سمة href"
            },
            {
              "value": "[type]",
              "description": "يختار جميع العناصر ذات سمة type"
            },
            {
              "value": "[data-*]",
              "description": "يختار جميع العناصر ذات سمة data مخصصة"
            },
            {
              "value": "[disabled]",
              "description": "يختار جميع العناصر ذات سمة disabled"
            },
            {
              "value": "[checked]",
              "description": "يختار جميع العناصر ذات سمة checked"
            },
            {
              "value": "[required]",
              "description": "يختار جميع العناصر ذات سمة required"
            },
            {
              "value": "[placeholder]",
              "description": "يختار جميع العناصر ذات سمة placeholder"
            },
            {
              "value": "[readonly]",
              "description": "يختار جميع العناصر ذات سمة readonly"
            }
          ]
        },
        {
          "name": "[attr=\"value\"]",
          "description": "يختار العناصر التي تساوي قيمة السمة قيمة محددة تماماً",
          "values": [
            {
              "value": "[type=\"text\"]",
              "description": "يختار عناصر input من نوع text"
            },
            {
              "value": "[type=\"submit\"]",
              "description": "يختار عناصر input من نوع submit"
            },
            {
              "value": "[href=\"https://example.com\"]",
              "description": "يختار روابط معينة"
            },
            {
              "value": "[data-status=\"active\"]",
              "description": "يختار عناصر ذات data-status = active"
            },
            {
              "value": "[role=\"button\"]",
              "description": "يختار عناصر ذات دور button"
            },
            {
              "value": "[lang=\"ar\"]",
              "description": "يختار عناصر لغتها العربية"
            }
          ]
        },
        {
          "name": "[attr~=\"value\"]",
          "description": "يختار العناصر التي تحتوي قيمتها على كلمة محددة (مفصولة بمسافات)",
          "values": [
            {
              "value": "[class~=\"btn\"]",
              "description": "يختار عناصر ذات فئة btn"
            },
            {
              "value": "[data-tags~=\"important\"]",
              "description": "يختار عناصر ذات علامة important"
            },
            {
              "value": "[rel~=\"nofollow\"]",
              "description": "يختار روابط ذات nofollow"
            }
          ]
        },
        {
          "name": "[attr|=\"value\"]",
          "description": "يختار العناصر التي تبدأ قيمتها بقيمة محددة تليها شرطة (-)",
          "values": [
            {
              "value": "[lang|=\"en\"]",
              "description": "يختار en, en-US, en-GB"
            },
            {
              "value": "[data-lang|=\"ar\"]",
              "description": "يختار ar, ar-SA"
            },
            {
              "value": "[hreflang|=\"fr\"]",
              "description": "يختار fr, fr-CA"
            }
          ]
        },
        {
          "name": "[attr^=\"value\"]",
          "description": "يختار العناصر التي تبدأ قيمتها بقيمة محددة",
          "values": [
            {
              "value": "[href^=\"https://\"]",
              "description": "يختار الروابط الآمنة (HTTPS)"
            },
            {
              "value": "[href^=\"mailto:\"]",
              "description": "يختار روابط البريد الإلكتروني"
            },
            {
              "value": "[class^=\"col-\"]",
              "description": "يختار فئات تبدأ بـ col-"
            },
            {
              "value": "[data-id^=\"user-\"]",
              "description": "يختار عناصر تبدأ بـ user-"
            }
          ]
        },
        {
          "name": "[attr$=\"value\"]",
          "description": "يختار العناصر التي تنتهي قيمتها بقيمة محددة",
          "values": [
            {
              "value": "[href$=\".pdf\"]",
              "description": "يختار روابط ملفات PDF"
            },
            {
              "value": "[href$=\".jpg\"]",
              "description": "يختار روابط صور JPG"
            },
            {
              "value": "[src$=\".png\"]",
              "description": "يختار صور PNG"
            },
            {
              "value": "[class$=\"-active\"]",
              "description": "يختار فئات تنتهي بـ -active"
            },
            {
              "value": "[href$=\".html\"]",
              "description": "يختار روابط صفحات HTML"
            }
          ]
        },
        {
          "name": "[attr*=\"value\"]",
          "description": "يختار العناصر التي تحتوي قيمتها على قيمة محددة (في أي مكان)",
          "values": [
            {
              "value": "[href*=\"google\"]",
              "description": "يختار روابط تحتوي على google"
            },
            {
              "value": "[class*=\"btn-\"]",
              "description": "يختار فئات تحتوي على btn-"
            },
            {
              "value": "[src*=\"images/\"]",
              "description": "يختار صور في مجلد images"
            },
            {
              "value": "[data-user*=\"admin\"]",
              "description": "يختار عناصر تحتوي على admin"
            }
          ]
        },
        {
          "name": "[attr i]",
          "description": "يضيف i لجعل المقارنة غير حساسة لحالة الأحرف (Case-insensitive)",
          "values": [
            {
              "value": "[href^=\"https://\" i]",
              "description": "روابط HTTPS (بغض النظر عن حالة الأحرف)"
            },
            {
              "value": "[type*=\"text\" i]",
              "description": "أنواع تحتوي على text (بغض النظر عن الحالة)"
            }
          ]
        },
        {
          "name": "[attr s]",
          "description": "يضيف s لجعل المقارنة حساسة لحالة الأحرف (Case-sensitive) - أقل استخداماً لأن المقارنة حساسة للحالة افتراضياً في معظم المتصفحات الحديثة",
          "values": [
            {
              "value": "[class*=\"Btn\" s]",
              "description": "فئات تحتوي على Btn (حساسة للحالة)"
            }
          ]
        }
      ]
    },
    {
      "tag": "group-selectors",
      "description": "تسمح بتطبيق نفس الأنماط على عدة محددات مختلفة في نفس القاعدة",
      "properties": [
        {
          "name": "المحدد المجموع (Group Selector)",
          "description": "يفصل بين المحددات بفاصلة لتطبيق نفس الأنماط على جميع المحددات المذكورة في قاعدة CSS واحدة",
          "values": [
            {
              "value": "h1, h2, h3",
              "description": "يطبق الأنماط على جميع العناوين h1, h2, h3"
            },
            {
              "value": "p, li, .description",
              "description": "يطبق على الفقرات وعناصر القائمة والفئة description"
            },
            {
              "value": "div, section, article",
              "description": "يطبق على div و section و article"
            },
            {
              "value": ".btn, .button, input[type=\"submit\"]",
              "description": "يطبق على جميع الأزرار"
            },
            {
              "value": "header, main, footer",
              "description": "يطبق على رأس ومحتوى وتذييل الصفحة"
            },
            {
              "value": ".active, .selected, [aria-selected=\"true\"]",
              "description": "يطبق على العناصر النشطة"
            },
            {
              "value": "input[type=\"text\"], input[type=\"email\"], input[type=\"password\"]",
              "description": "يطبق على حقول الإدخال النصية"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية لاستخدام المحددات المختلفة",
      "properties": [
        {
          "name": "مثال 1 - تصميم روابط",
          "description": "تخصيص الروابط حسب السمة",
          "values": [
            {
              "value": "a[href^=\"https://\"] { color: green; } a[href$=\".pdf\"]::after { content: \" ??\"; } a[href*=\"twitter\"] { color: #1DA1F2; }",
              "description": "روابط HTTPS باللون الأخضر، روابط PDF مع أيقونة، روابط تويتر باللون الأزرق"
            }
          ]
        },
        {
          "name": "مثال 2 - تنسيق الجداول",
          "description": "تحديد صفوف الجدول باستخدام المحددات المركبة",
          "values": [
            {
              "value": "table tr:nth-child(even) { background: #f9f9f9; } table tr:hover { background: #f0f0f0; } table td:first-child { font-weight: bold; }",
              "description": "تظليل الصفوف الزوجية والتمرير"
            }
          ]
        },
        {
          "name": "مثال 3 - نموذج الإدخال",
          "description": "تنسيق حقول النموذج حسب النوع والحالة",
          "values": [
            {
              "value": "input[type=\"text\"]:focus { border-color: #007bff; outline: none; } input[type=\"checkbox\"]:checked + label { color: green; } input:disabled { opacity: 0.6; }",
              "description": "تنسيق حقول النص عند التركيز، مربعات الاختيار المحددة، الحقول المعطلة"
            }
          ]
        },
        {
          "name": "مثال 4 - تنسيق القوائم",
          "description": "تحديد عناصر القائمة باستخدام المحددات المركبة",
          "values": [
            {
              "value": "ul.nav > li { display: inline-block; } ul.nav > li + li { margin-left: 16px; } ul.nav > li:last-child { margin-right: 0; }",
              "description": "قائمة تنقل مع تباعد بين العناصر"
            }
          ]
        },
        {
          "name": "مثال 5 - تخصيص العناوين",
          "description": "تحديد العناوين حسب المستوى والموقع",
          "values": [
            {
              "value": "article h1:first-child { font-size: 2.5rem; } article h2:not(:first-child) { margin-top: 2rem; } section > h2 { border-bottom: 2px solid #eee; }",
              "description": "تنسيق العناوين حسب الموقع"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام المحددات بشكل فعال",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء المحددات",
          "values": [
            {
              "value": "تجنب المحددات العميقة جداً",
              "description": "مثل div > ul > li > a - بطيئة"
            },
            {
              "value": "استخدم الفئات بدلاً من المحددات المعقدة",
              "description": ".nav-link أسرع من nav ul li a"
            },
            {
              "value": "تجنب المحدد العالمي (*)",
              "description": "بطيء في الصفحات الكبيرة"
            },
            {
              "value": "استخدم الفئات بشكل أساسي",
              "description": "الفئات هي الأكثر كفاءة في الأداء"
            },
            {
              "value": "حدد المحددات بالجانب الأيمن (الأكثر تحديداً)",
              "description": "ul li.active أفضل من .active li"
            }
          ]
        },
        {
          "name": "نصائح الصيانة",
          "description": "نصائح لجعل الكود قابلاً للصيانة",
          "values": [
            {
              "value": "استخدم أسماء وصفية للفئات",
              "description": ".header-nav أفضل من .nav1"
            },
            {
              "value": "تجنب المحددات الزائدة",
              "description": "div.container أفضل من div.outer div.inner div.container"
            },
            {
              "value": "استخدم المحددات المركبة بحكمة",
              "description": "لتجنب التعارضات"
            },
            {
              "value": "وثق المحددات المعقدة",
              "description": "أضف تعليقات للفهم"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام المحددات",
          "values": [
            {
              "value": "نسيان الفاصلة بين المحددات",
              "description": "h1 h2 (خاطئ) vs h1, h2 (صحيح)"
            },
            {
              "value": "خلط بين > و (مسافة)",
              "description": "div > p (ابن مباشر) vs div p (أي سليل)"
            },
            {
              "value": "استخدام #id بشكل مفرط",
              "description": "استخدم الفئات بدلاً من المعرفات للأنماط المتكررة"
            },
            {
              "value": "محددات ذات خصوصية عالية جداً",
              "description": "صعبة التجاوز لاحقاً"
            }
          ]
        }
      ]
    }
  ],
  "cssPseudo": [
    {
      "tag": "navigation-pseudo",
      "description": "فئات زائفة خاصة بالروابط والملاحة",
      "properties": [
        {
          "name": ":link",
          "description": "تطبق على الروابط غير المزارة (التي لم يزرها المستخدم بعد)",
          "values": [
            {
              "value": "a:link { color: #0066cc; }",
              "description": "لون الروابط غير المزارة أزرق"
            },
            {
              "value": "a:link { text-decoration: none; }",
              "description": "إزالة التسطير من الروابط غير المزارة"
            }
          ]
        },
        {
          "name": ":visited",
          "description": "تطبق على الروابط التي تمت زيارتها من قبل المستخدم (محدودة لأسباب أمنية)",
          "values": [
            {
              "value": "a:visited { color: #6c757d; }",
              "description": "لون الروابط المزارة رمادي"
            },
            {
              "value": "a:visited { color: purple; }",
              "description": "لون الروابط المزارة بنفسجي"
            }
          ]
        },
        {
          "name": ":hover",
          "description": "تطبق عند تمرير الماوس فوق العنصر (أشهر فئة زائفة)",
          "values": [
            {
              "value": "a:hover { text-decoration: underline; }",
              "description": "تسطير الروابط عند التمرير"
            },
            {
              "value": ".btn:hover { background: #0056b3; }",
              "description": "تغيير لون الزر عند التمرير"
            }
          ]
        },
        {
          "name": ":active",
          "description": "تطبق عند الضغط على العنصر (أثناء النقر)",
          "values": [
            {
              "value": "a:active { color: red; }",
              "description": "لون الرابط أحمر أثناء النقر"
            },
            {
              "value": ".btn:active { transform: scale(0.95); }",
              "description": "تقلص الزر عند النقر"
            }
          ]
        },
        {
          "name": ":focus",
          "description": "تطبق عندما يكون العنصر في حالة التركيز (مثل حقل إدخال)",
          "values": [
            {
              "value": "input:focus { border-color: #007bff; }",
              "description": "تغيير لون الحدود عند التركيز"
            },
            {
              "value": "input:focus { outline: 2px solid #007bff; }",
              "description": "إطار عند التركيز"
            }
          ]
        },
        {
          "name": ":focus-visible",
          "description": "تطبق فقط عندما يكون التركيز ظاهراً للمستخدم (مثل التنقل بلوحة المفاتيح)، وليس عند النقر بالماوس",
          "values": [
            {
              "value": "a:focus-visible { outline: 3px solid #007bff; }",
              "description": "إطار للتركيز بلوحة المفاتيح فقط"
            },
            {
              "value": "button:focus-visible { box-shadow: 0 0 0 4px rgba(0,123,255,0.4); }",
              "description": "ظل للتركيز بلوحة المفاتيح"
            }
          ]
        }
      ]
    },
    {
      "tag": "table-pseudo",
      "description": "فئات زائفة خاصة بعناصر الجداول",
      "properties": [
        {
          "name": ":nth-child()",
          "description": "تحدد عناصر بناءً على ترتيبها بين إخوتها (كل العناصر، وليس فقط من نفس النوع)",
          "values": [
            {
              "value": "tr:nth-child(odd)",
              "description": "الصفوف الفردية في الجدول"
            },
            {
              "value": "tr:nth-child(even)",
              "description": "الصفوف الزوجية"
            },
            {
              "value": "tr:nth-child(3n)",
              "description": "الصفوف 3, 6, 9, ..."
            },
            {
              "value": "tr:nth-child(3n+1)",
              "description": "الصفوف 1, 4, 7, ..."
            },
            {
              "value": "tr:nth-child(n+4)",
              "description": "الصفوف من الرابع فما فوق"
            },
            {
              "value": "tr:nth-child(-n+3)",
              "description": "الصفوف الثلاثة الأولى"
            }
          ]
        },
        {
          "name": ":nth-of-type()",
          "description": "تحدد عناصر بناءً على ترتيبها بين إخوتها من نفس النوع (مثل كل عناصر li وليس كل العناصر)",
          "values": [
            {
              "value": "li:nth-of-type(odd)",
              "description": "عناصر li الفردية"
            },
            {
              "value": "li:nth-of-type(even)",
              "description": "عناصر li الزوجية"
            },
            {
              "value": "p:nth-of-type(2)",
              "description": "ثاني عنصر p"
            }
          ]
        },
        {
          "name": ":first-child / :last-child",
          "description": "تحدد العنصر الأول أو الأخير بين جميع إخوته (أي نوع)",
          "values": [
            {
              "value": "li:first-child",
              "description": "أول عنصر li"
            },
            {
              "value": "li:last-child",
              "description": "آخر عنصر li"
            },
            {
              "value": "td:first-child",
              "description": "أول خلية في كل صف"
            },
            {
              "value": "td:last-child",
              "description": "آخر خلية في كل صف"
            }
          ]
        },
        {
          "name": ":first-of-type / :last-of-type",
          "description": "تحدد العنصر الأول أو الأخير من نوع معين بين إخوته",
          "values": [
            {
              "value": "p:first-of-type",
              "description": "أول عنصر p"
            },
            {
              "value": "p:last-of-type",
              "description": "آخر عنصر p"
            },
            {
              "value": "h2:first-of-type",
              "description": "أول عنصر h2"
            }
          ]
        },
        {
          "name": ":only-child / :only-of-type",
          "description": "تحدد العنصر الوحيد (بدون إخوة) من أي نوع أو من نوع معين",
          "values": [
            {
              "value": "li:only-child",
              "description": "عنصر li الوحيد في قائمته"
            },
            {
              "value": "p:only-of-type",
              "description": "عنصر p الوحيد من نوعه"
            }
          ]
        },
        {
          "name": ":empty",
          "description": "تحدد العناصر التي لا تحتوي على أي محتوى أو عناصر فرعية",
          "values": [
            {
              "value": "div:empty { display: none; }",
              "description": "إخفاء العناصر الفارغة"
            },
            {
              "value": "td:empty { background: #f0f0f0; }",
              "description": "خلفية رمادية للخلايا الفارغة"
            }
          ]
        }
      ]
    },
    {
      "tag": "form-pseudo",
      "description": "فئات زائفة خاصة بعناصر النماذج",
      "properties": [
        {
          "name": ":enabled / :disabled",
          "description": "تحدد العناصر الممكنة أو المعطلة في النماذج",
          "values": [
            {
              "value": "input:enabled { background: white; }",
              "description": "خلفية بيضاء للحقول الممكنة"
            },
            {
              "value": "input:disabled { opacity: 0.6; cursor: not-allowed; }",
              "description": "تخفيف الحقول المعطلة"
            },
            {
              "value": "button:disabled { background: #ccc; }",
              "description": "لون رمادي للأزرار المعطلة"
            }
          ]
        },
        {
          "name": ":checked",
          "description": "تحدد مربعات الاختيار وأزرار الراديو المحددة",
          "values": [
            {
              "value": "input:checked { accent-color: #28a745; }",
              "description": "لون أخضر للمربعات المحددة"
            },
            {
              "value": "input:checked + label { color: green; }",
              "description": "تلوين التسمية عند التحديد"
            }
          ]
        },
        {
          "name": ":required / :optional",
          "description": "تحدد حقول النموذج الإلزامية أو الاختيارية",
          "values": [
            {
              "value": "input:required { border-color: #dc3545; }",
              "description": "حدود حمراء للحقول الإلزامية"
            },
            {
              "value": "input:optional { border-color: #6c757d; }",
              "description": "حدود رمادية للحقول الاختيارية"
            }
          ]
        },
        {
          "name": ":valid / :invalid",
          "description": "تحدد حقول النموذج بناءً على صحة القيمة المدخلة (باستخدام validation من HTML5)",
          "values": [
            {
              "value": "input:valid { border-color: #28a745; }",
              "description": "حدود خضراء للقيم الصحيحة"
            },
            {
              "value": "input:invalid { border-color: #dc3545; }",
              "description": "حدود حمراء للقيم الخاطئة"
            },
            {
              "value": "input:invalid + .error { display: block; }",
              "description": "إظهار رسالة الخطأ"
            }
          ]
        },
        {
          "name": ":in-range / :out-of-range",
          "description": "تحدد الحقول الرقمية التي تكون ضمن النطاق المحدد أو خارجه",
          "values": [
            {
              "value": "input:in-range { border-color: green; }",
              "description": "حدود خضراء للقيم ضمن النطاق"
            },
            {
              "value": "input:out-of-range { border-color: red; }",
              "description": "حدود حمراء للقيم خارج النطاق"
            }
          ]
        },
        {
          "name": ":read-only / :read-write",
          "description": "تحدد العناصر القابلة للقراءة فقط أو القابلة للكتابة",
          "values": [
            {
              "value": "input:read-only { background: #e9ecef; }",
              "description": "خلفية رمادية للحقول المقروءة فقط"
            },
            {
              "value": "input:read-write { background: white; }",
              "description": "خلفية بيضاء للحقول القابلة للكتابة"
            }
          ]
        },
        {
          "name": ":placeholder-shown",
          "description": "تحدد حقل الإدخال عندما يكون النص المؤقت (placeholder) ظاهراً فيه (أي الحقل فارغ)",
          "values": [
            {
              "value": "input:placeholder-shown { border-color: #ccc; }",
              "description": "حدود رمادية للحقول الفارغة"
            },
            {
              "value": "input:placeholder-shown + label { opacity: 0.5; }",
              "description": "تخفيف التسمية عند ظهور placeholder"
            }
          ]
        },
        {
          "name": ":default",
          "description": "تحدد العناصر الافتراضية في مجموعة (مثل زر الراديو المحدد افتراضياً)",
          "values": [
            {
              "value": "input:default { border-color: #007bff; }",
              "description": "حدود زرقاء للخيار الافتراضي"
            }
          ]
        },
        {
          "name": ":indeterminate",
          "description": "تحدد مربعات الاختيار التي تكون في حالة غير محددة (أو تابعة لخيارات فرعية غير محددة كلها)",
          "values": [
            {
              "value": "input:indeterminate { accent-color: #ffc107; }",
              "description": "لون أصفر للحالة غير المحددة"
            }
          ]
        }
      ]
    },
    {
      "tag": "language-pseudo",
      "description": "فئات زائفة خاصة باللغة والاتجاه",
      "properties": [
        {
          "name": ":lang()",
          "description": "تحدد العناصر بناءً على لغة المحتوى (عبر سمة lang في HTML)",
          "values": [
            {
              "value": ":lang(ar)",
              "description": "العناصر التي لغتها العربية"
            },
            {
              "value": ":lang(en)",
              "description": "العناصر التي لغتها الإنجليزية"
            },
            {
              "value": ":lang(fr)",
              "description": "العناصر التي لغتها الفرنسية"
            },
            {
              "value": ":lang(ar-SA)",
              "description": "العربية السعودية"
            },
            {
              "value": "p:lang(ar) { direction: rtl; }",
              "description": "اتجاه يمين لليسار للنصوص العربية"
            }
          ]
        },
        {
          "name": ":dir()",
          "description": "تحدد العناصر بناءً على اتجاه النص (ltr أو rtl) من سمة dir",
          "values": [
            {
              "value": ":dir(ltr)",
              "description": "العناصر ذات الاتجاه من اليسار لليمين"
            },
            {
              "value": ":dir(rtl)",
              "description": "العناصر ذات الاتجاه من اليمين لليسار"
            },
            {
              "value": ":dir(rtl) { text-align: right; }",
              "description": "محاذاة لليمين للنصوص العربية"
            }
          ]
        }
      ]
    },
    {
      "tag": "page-pseudo",
      "description": "فئات زائفة خاصة بالصفحات المطبوعة",
      "properties": [
        {
          "name": ":target",
          "description": "تحدد العنصر الذي يطابق معرّف (id) الرابط الحالي في شريط العنوان (بعد #)",
          "values": [
            {
              "value": ":target { background: #fff3cd; }",
              "description": "تمييز القسم المستهدف بلون خلفية"
            },
            {
              "value": ":target { animation: highlight 1s; }",
              "description": "تأثير تمييز عند الانتقال"
            }
          ]
        },
        {
          "name": ":scope",
          "description": "تحدد العنصر الجذري للنطاق الحالي (مفيد مع querySelector و shadow DOM)",
          "values": [
            {
              "value": ":scope { background: #f8f9fa; }",
              "description": "خلفية للعنصر الجذري للنطاق"
            }
          ]
        }
      ]
    },
    {
      "tag": "matching-pseudo",
      "description": "فئات زائفة للربط والتجميع",
      "properties": [
        {
          "name": ":is()",
          "description": "دالة تجميع (Matches-Any) تُبسّط كتابة عدة محددات معاً بدل تكرارها",
          "values": [
            {
              "value": ":is(h1, h2, h3) { color: #007bff; }",
              "description": "يطبق على h1 وh2 وh3 معاً"
            },
            {
              "value": "article :is(h1, h2) { margin-top: 2rem; }",
              "description": "أي h1 أو h2 داخل article"
            },
            {
              "value": ".card :is(h1, h2, h3) { font-size: 1.5rem; }",
              "description": "أي عنوان داخل البطاقة"
            }
          ]
        },
        {
          "name": ":where()",
          "description": "مثل :is() تماماً في الوظيفة، لكن مستوى تحديدها (specificity) يبقى صفراً دائماً",
          "values": [
            {
              "value": ":where(h1, h2, h3) { color: #007bff; }",
              "description": "تجميع محددات بدون زيادة قوة التحديد"
            },
            {
              "value": ".card :where(h1, h2) { font-size: 1.5rem; }",
              "description": "تحديد منخفض - يسهل تجاوزه"
            }
          ]
        },
        {
          "name": ":has()",
          "description": "يختار عنصراً بناءً على وجود عناصر معينة بداخله (المحدد الأب)",
          "values": [
            {
              "value": "div:has(> img) { border: 1px solid #ddd; }",
              "description": "أي div يحتوي مباشرة على صورة"
            },
            {
              "value": "label:has(input:checked) { font-weight: bold; }",
              "description": "تنسيق label عندما يكون input بداخله محدداً"
            },
            {
              "value": "article:has(h2) { margin-top: 2rem; }",
              "description": "أي article يحتوي على h2"
            },
            {
              "value": "div:has(.active) { background: #f0f0f0; }",
              "description": "أي div يحتوي على عنصر بالصنف active"
            },
            {
              "value": "section:has(> h1) { border-bottom: 2px solid #333; }",
              "description": "أي section يحتوي على h1 مباشر"
            }
          ]
        },
        {
          "name": ":not()",
          "description": "ينفي تطبيق التنسيق على عناصر معينة",
          "values": [
            {
              "value": ":not(.special) { color: #333; }",
              "description": "جميع العناصر ما عدا ذات الصنف special"
            },
            {
              "value": "li:not(:first-child) { border-top: 1px solid #eee; }",
              "description": "جميع عناصر li ما عدا الأول"
            },
            {
              "value": "p:not(:last-child) { margin-bottom: 1.5rem; }",
              "description": "جميع الفقرات ما عدا الأخيرة"
            },
            {
              "value": "div:not([hidden]) { display: block; }",
              "description": "جميع div ما عدا المخفية"
            }
          ]
        }
      ]
    },
    {
      "tag": "additional-pseudo-elements",
      "description": "عناصر زائفة إضافية لم تغط في الملفات السابقة",
      "properties": [
        {
          "name": "::before",
          "description": "يُنشئ عنصراً افتراضياً قبل محتوى العنصر الأصلي (يحتاج إلى content)",
          "values": [
            {
              "value": ".quote::before { content: '\"'; font-size: 3em; }",
              "description": "علامة تنصيص قبل الاقتباس"
            },
            {
              "value": ".card::before { content: ''; display: block; height: 4px; background: #007bff; }",
              "description": "شريط أعلى البطاقة"
            }
          ]
        },
        {
          "name": "::after",
          "description": "يُنشئ عنصراً افتراضياً بعد محتوى العنصر الأصلي (يحتاج إلى content)",
          "values": [
            {
              "value": "a[target=\"_blank\"]::after { content: ' ?'; }",
              "description": "سهم بعد الروابط الخارجية"
            },
            {
              "value": ".card::after { content: ''; display: block; clear: both; }",
              "description": "تطهير العائمات"
            }
          ]
        },
        {
          "name": "::first-letter",
          "description": "يطبق تنسيقاً على الحرف الأول من النص (مفيد للتصميم الفني)",
          "values": [
            {
              "value": "p::first-letter { font-size: 3em; font-weight: bold; color: #007bff; float: left; margin-right: 8px; }",
              "description": "تأثير الـ Drop Cap"
            },
            {
              "value": "h1::first-letter { color: red; }",
              "description": "لون الحرف الأول من العنوان أحمر"
            }
          ]
        },
        {
          "name": "::first-line",
          "description": "يطبق تنسيقاً على السطر الأول من النص",
          "values": [
            {
              "value": "p::first-line { font-weight: bold; text-transform: uppercase; }",
              "description": "السطر الأول من الفقرة بالخط العريض"
            },
            {
              "value": "p::first-line { color: #007bff; }",
              "description": "لون السطر الأول أزرق"
            }
          ]
        },
        {
          "name": "::selection",
          "description": "يطبق تنسيقاً على النص المحدد من قبل المستخدم (النص المظلل)",
          "values": [
            {
              "value": "::selection { background: #007bff; color: white; }",
              "description": "خلفية زرقاء ونص أبيض للنص المحدد"
            },
            {
              "value": "::selection { background: yellow; color: black; }",
              "description": "خلفية صفراء ونص أسود"
            }
          ]
        },
        {
          "name": "::placeholder",
          "description": "يطبق تنسيقاً على النص المؤقت في حقول الإدخال",
          "values": [
            {
              "value": "input::placeholder { color: #6c757d; font-style: italic; }",
              "description": "نص مؤقت رمادي مائل"
            },
            {
              "value": "textarea::placeholder { color: #999; font-size: 14px; }",
              "description": "نص مؤقت بحجم أصغر"
            }
          ]
        },
        {
          "name": "::marker",
          "description": "يطبق تنسيقاً على علامات التعداد في القوائم (<li>)",
          "values": [
            {
              "value": "li::marker { color: #007bff; font-size: 1.2em; }",
              "description": "لون أزرق وحجم أكبر لعلامات القائمة"
            },
            {
              "value": "ul.custom li::marker { content: '? '; }",
              "description": "رمز مخصص لعلامات القائمة"
            }
          ]
        },
        {
          "name": "::backdrop",
          "description": "يطبق تنسيقاً على الخلفية خلف العناصر في وضع ملء الشاشة أو خلف عنصر dialog",
          "values": [
            {
              "value": "dialog::backdrop { background: rgba(0,0,0,0.7); backdrop-filter: blur(5px); }",
              "description": "تأثير زجاجي على الخلفية خلف النافذة المنبثقة"
            },
            {
              "value": "video::backdrop { background: #000; }",
              "description": "خلفية سوداء للفيديو في وضع ملء الشاشة"
            }
          ]
        },
        {
          "name": "::file-selector-button",
          "description": "يطبق تنسيقاً على زر اختيار الملف داخل حقل input من نوع file",
          "values": [
            {
              "value": "input[type=\"file\"]::file-selector-button { background: #007bff; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }",
              "description": "تخصيص زر اختيار الملف"
            },
            {
              "value": "input[type=\"file\"]::file-selector-button:hover { background: #0056b3; }",
              "description": "تأثير hover لزر اختيار الملف"
            }
          ]
        },
        {
          "name": "::cue",
          "description": "يطبق تنسيقاً على الترجمة النصية (Subtitles) في عناصر <video> و <audio>",
          "values": [
            {
              "value": "video::cue { color: white; background: rgba(0,0,0,0.8); font-size: 1.2rem; }",
              "description": "تنسيق الترجمة في الفيديو"
            },
            {
              "value": "video::cue(v[voice=\" narrator\"]) { color: yellow; }",
              "description": "تنسيق صوت معين"
            }
          ]
        },
        {
          "name": "::spelling-error",
          "description": "يطبق تنسيقاً على الكلمات التي بها أخطاء إملائية في النصوص القابلة للتحرير",
          "values": [
            {
              "value": "::spelling-error { text-decoration: wavy red; }",
              "description": "خط أحمر مموج تحت الكلمات الخاطئة"
            }
          ]
        },
        {
          "name": "::grammar-error",
          "description": "يطبق تنسيقاً على الكلمات التي بها أخطاء نحوية في النصوص القابلة للتحرير",
          "values": [
            {
              "value": "::grammar-error { text-decoration: wavy blue; }",
              "description": "خط أزرق مموج تحت الأخطاء النحوية"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام الفئات والعناصر الزائفة",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية",
          "values": [
            {
              "value": "ترتيب الروابط: LVFHA",
              "description": "Link, Visited, Focus, Hover, Active (ترتيب الكتابة)"
            },
            {
              "value": "استخدم :focus-visible بدلاً من :focus",
              "description": "يظهر التركيز فقط عند الحاجة (لوحة المفاتيح)"
            },
            {
              "value": "استخدم ::selection للتخصيص",
              "description": "يجعل تجربة تحديد النص أفضل"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل العناصر قابلة للوصول",
          "values": [
            {
              "value": "لا تعتمد على :hover فقط",
              "description": "بعض المستخدمين لا يستخدمون الماوس"
            },
            {
              "value": "استخدم :focus-visible",
              "description": "للمستخدمين الذين يتنقلون بلوحة المفاتيح"
            },
            {
              "value": "احترم prefers-reduced-motion",
              "description": "للمستخدمين الذين يطلبون تقليل الحركة"
            }
          ]
        }
      ]
    }
  ],
  "cssFunctions": [
    {
      "tag": "value-functions",
      "description": "دوال تُستخدم لتوليد أو حساب القيم في CSS",
      "properties": [
        {
          "name": "attr()",
          "description": "تأخذ قيمة سمة HTML من العنصر الحالي وتستخدمها كقيمة في CSS، مفيدة لإضافة بيانات ديناميكية",
          "values": [
            {
              "value": "attr(href)",
              "description": "تأخذ قيمة سمة href"
            },
            {
              "value": "attr(title)",
              "description": "تأخذ قيمة سمة title"
            },
            {
              "value": "attr(data-tooltip)",
              "description": "تأخذ قيمة سمة data-tooltip"
            },
            {
              "value": "attr(data-label, 'نص افتراضي')",
              "description": "تأخذ قيمة data-label مع قيمة افتراضية"
            },
            {
              "value": "attr(data-width, '100px')",
              "description": "تأخذ قيمة data-width مع قيمة افتراضية"
            },
            {
              "value": "attr(data-type, 'text')",
              "description": "تأخذ قيمة data-type مع قيمة افتراضية"
            }
          ]
        },
        {
          "name": "url()",
          "description": "تحدد رابطاً لملف خارجي (صورة، خط، SVG، إلخ). تُستخدم في background-image و list-style-image و border-image و @font-face و غيرها",
          "values": [
            {
              "value": "url('image.jpg')",
              "description": "رابط صورة JPG"
            },
            {
              "value": "url('image.png')",
              "description": "رابط صورة PNG"
            },
            {
              "value": "url('image.svg')",
              "description": "رابط صورة SVG"
            },
            {
              "value": "url('image.webp')",
              "description": "رابط صورة WebP"
            },
            {
              "value": "url('font.woff2')",
              "description": "رابط خط WOFF2"
            },
            {
              "value": "url('data:image/svg+xml,...')",
              "description": "صورة مشفرة في CSS (Data URI)"
            },
            {
              "value": "url('https://example.com/image.jpg')",
              "description": "رابط خارجي"
            },
            {
              "value": "url('icon.svg#icon-id')",
              "description": "رابط SVG مع معرف (جزء في ملف SVG)"
            }
          ]
        },
        {
          "name": "var()",
          "description": "تستدعي قيمة متغير مخصص (Custom Property) تم تعريفه مسبقاً. يمكن استخدامها في أي خاصية CSS وتدعم القيم الاحتياطية",
          "values": [
            {
              "value": "var(--primary-color)",
              "description": "يستخدم قيمة المتغير --primary-color"
            },
            {
              "value": "var(--font-size-base, 16px)",
              "description": "يستخدم المتغير مع قيمة احتياطية 16px"
            },
            {
              "value": "var(--spacing-unit, 8px)",
              "description": "يستخدم المتغير مع قيمة احتياطية"
            }
          ]
        },
        {
          "name": "env()",
          "description": "تأخذ قيمة من بيئة المتصفح (مثل المسافات الآمنة للشاشات المقطوعة)",
          "values": [
            {
              "value": "env(safe-area-inset-top)",
              "description": "المسافة الآمنة من الأعلى"
            },
            {
              "value": "env(safe-area-inset-bottom, 0px)",
              "description": "مع قيمة احتياطية"
            }
          ]
        }
      ]
    },
    {
      "tag": "color-functions",
      "description": "دوال لتحديد الألوان بطرق مختلفة",
      "properties": [
        {
          "name": "rgb()",
          "description": "تحدد لوناً باستخدام قيم الأحمر والأخضر والأزرق (0-255). تُستخدم في أي خاصية تقبل قيمة لونية مثل color و background-color و border-color",
          "values": [
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر"
            },
            {
              "value": "rgb(0, 255, 0)",
              "description": "أخضر"
            },
            {
              "value": "rgb(0, 0, 255)",
              "description": "أزرق"
            },
            {
              "value": "rgb(255, 255, 255)",
              "description": "أبيض"
            },
            {
              "value": "rgb(0, 0, 0)",
              "description": "أسود"
            },
            {
              "value": "rgb(128, 128, 128)",
              "description": "رمادي"
            },
            {
              "value": "rgb(255, 165, 0)",
              "description": "برتقالي"
            },
            {
              "value": "rgb(128, 0, 128)",
              "description": "بنفسجي"
            },
            {
              "value": "rgb(255, 192, 203)",
              "description": "وردي"
            },
            {
              "value": "rgb(165, 42, 42)",
              "description": "بني"
            }
          ]
        },
        {
          "name": "rgba()",
          "description": "تحدد لوناً مع شفافية (Alpha) من 0 (شفاف) إلى 1 (معتم). تُستخدم في أي خاصية تقبل لوناً مع شفافية مثل color و background-color",
          "values": [
            {
              "value": "rgba(255, 0, 0, 0.5)",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "rgba(0, 0, 255, 0.3)",
              "description": "أزرق شفاف 30%"
            },
            {
              "value": "rgba(0, 0, 0, 0.1)",
              "description": "أسود شفاف 10% - ظل خفيف جداً"
            },
            {
              "value": "rgba(255, 255, 255, 0.8)",
              "description": "أبيض شفاف 80% - شبه معتم"
            },
            {
              "value": "rgba(0, 0, 0, 0.5)",
              "description": "أسود شفاف 50% - نصف شفاف"
            },
            {
              "value": "rgba(255, 255, 255, 0.5)",
              "description": "أبيض شفاف 50%"
            }
          ]
        },
        {
          "name": "hsl()",
          "description": "تحدد لوناً باستخدام Hue (درجة اللون 0-360)، Saturation (التشبع 0-100%)، Lightness (الإضاءة 0-100%). تُستخدم في أي خاصية تقبل قيمة لونية",
          "values": [
            {
              "value": "hsl(0, 100%, 50%)",
              "description": "أحمر"
            },
            {
              "value": "hsl(120, 100%, 50%)",
              "description": "أخضر"
            },
            {
              "value": "hsl(240, 100%, 50%)",
              "description": "أزرق"
            },
            {
              "value": "hsl(0, 0%, 100%)",
              "description": "أبيض"
            },
            {
              "value": "hsl(0, 0%, 0%)",
              "description": "أسود"
            },
            {
              "value": "hsl(30, 100%, 50%)",
              "description": "برتقالي"
            },
            {
              "value": "hsl(300, 100%, 50%)",
              "description": "أرجواني"
            },
            {
              "value": "hsl(200, 50%, 40%)",
              "description": "أزرق متوسط"
            }
          ]
        },
        {
          "name": "hsla()",
          "description": "تحدد لوناً HSL مع شفافية (Alpha) من 0 إلى 1. تُستخدم في أي خاصية تقبل لوناً مع شفافية مثل color و background-color",
          "values": [
            {
              "value": "hsla(0, 100%, 50%, 0.5)",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "hsla(240, 100%, 50%, 0.3)",
              "description": "أزرق شفاف 30%"
            },
            {
              "value": "hsla(0, 0%, 0%, 0.2)",
              "description": "أسود شفاف 20%"
            }
          ]
        },
        {
          "name": "hwb()",
          "description": "تحدد لوناً باستخدام Hue (درجة اللون 0-360)، Whiteness (البياض 0-100%)، Blackness (السواد 0-100%). نظام ألوان آخر بديل لـ HSL",
          "values": [
            {
              "value": "hwb(0, 0%, 0%)",
              "description": "أحمر"
            },
            {
              "value": "hwb(0, 50%, 0%)",
              "description": "وردي"
            },
            {
              "value": "hwb(0, 0%, 50%)",
              "description": "أحمر داكن"
            }
          ]
        },
        {
          "name": "lab()",
          "description": "نظام ألوان Lab (Lightness, a, b) - يعتمد على إدراك العين البشرية، أكثر دقة من RGB و HSL",
          "values": [
            {
              "value": "lab(50% 80 40)",
              "description": "لون أحمر في نظام Lab"
            },
            {
              "value": "lab(30% 50 -20)",
              "description": "لون أزرق مائل"
            },
            {
              "value": "lab(90% -40 30)",
              "description": "لون أخضر فاتح"
            }
          ]
        },
        {
          "name": "lch()",
          "description": "نظام ألوان LCH (Lightness, Chroma, Hue) - يمثل الألوان بطريقة دائرية، مشابه لـ HSL لكن بدقة أوسع",
          "values": [
            {
              "value": "lch(50% 80 20)",
              "description": "لون برتقالي"
            },
            {
              "value": "lch(60% 60 300)",
              "description": "لون بنفسجي"
            },
            {
              "value": "lch(70% 40 120)",
              "description": "لون أخضر"
            }
          ]
        },
        {
          "name": "color()",
          "description": "تحدد لوناً باستخدام مساحة لونية مخصصة مثل display-p3 التي تدعم ألواناً أوسع من sRGB العادي (gamut أوسع)",
          "values": [
            {
              "value": "color(display-p3 1 0 0)",
              "description": "أحمر في مساحة Display P3 (أكثر إشراقاً من sRGB)"
            },
            {
              "value": "color(display-p3 0 1 0)",
              "description": "أخضر في Display P3"
            },
            {
              "value": "color(display-p3 0 0 1)",
              "description": "أزرق في Display P3"
            }
          ]
        },
        {
          "name": "color-mix()",
          "description": "تخلط لونين معاً بنسب محددة، مفيدة لإنشاء ألوان مشتقة ديناميكياً",
          "values": [
            {
              "value": "color-mix(in srgb, red 50%, blue 50%)",
              "description": "مزيج من الأحمر والأزرق بنسبة 50/50"
            },
            {
              "value": "color-mix(in srgb, red 70%, blue 30%)",
              "description": "أحمر أكثر (70%)"
            },
            {
              "value": "color-mix(in lab, red 50%, blue 50%)",
              "description": "مزيج في مساحة Lab"
            }
          ]
        },
        {
          "name": "contrast-color()",
          "description": "تختار لوناً يتباين بشكل جيد مع لون الخلفية (تحديد تلقائي للون المثالي للقراءة)، مفيدة لتحسين إمكانية الوصول",
          "values": [
            {
              "value": "contrast-color(black)",
              "description": "تختار لوناً يتباين مع الأسود"
            },
            {
              "value": "contrast-color(white)",
              "description": "تختار لوناً يتباين مع الأبيض"
            }
          ]
        }
      ]
    },
    {
      "tag": "image-functions",
      "description": "دوال لإنشاء الصور ومعالجتها",
      "properties": [
        {
          "name": "image()",
          "description": "تحدد صورة مع إمكانية تحديد لون خلفية احتياطي أو صورة بديلة، مفيدة للصور التي قد لا تظهر (مثل الصور المعطلة)",
          "values": [
            {
              "value": "image('image.jpg')",
              "description": "صورة عادية"
            },
            {
              "value": "image('image.jpg', 'fallback.jpg')",
              "description": "صورة مع صورة بديلة"
            },
            {
              "value": "image('image.jpg', red)",
              "description": "صورة مع لون احتياطي"
            }
          ]
        },
        {
          "name": "image-set()",
          "description": "تحدد مجموعة من الصور بدقة مختلفة، ويختار المتصفح المناسب منها حسب دقة الشاشة (Retina، إلخ)",
          "values": [
            {
              "value": "image-set('image.jpg' 1x, 'image@2x.jpg' 2x)",
              "description": "صور بدقة 1x و 2x"
            },
            {
              "value": "image-set('image.jpg' 1x, 'image@2x.jpg' 2x, 'image@3x.jpg' 3x)",
              "description": "ثلاث دقات مختلفة"
            }
          ]
        },
        {
          "name": "linear-gradient()",
          "description": "تُنشئ تدرجاً خطياً، تستخدم كقيمة لـ background-image بشكل أساسي وتدعم عدة ألوان ونقاط توقف. تأخذ اتجاه التدرج (زاوية أو كلمة مفتاحية مثل to bottom) وقائمة بالألوان ونقاط توقفها",
          "values": [
            {
              "value": "linear-gradient(red, blue)",
              "description": "تدرج من الأحمر إلى الأزرق"
            },
            {
              "value": "linear-gradient(to right, red, blue)",
              "description": "تدرج من اليسار إلى اليمين"
            },
            {
              "value": "linear-gradient(45deg, red, blue)",
              "description": "تدرج بزاوية 45 درجة"
            },
            {
              "value": "linear-gradient(red 0%, blue 50%, green 100%)",
              "description": "تدرج بثلاثة ألوان"
            }
          ]
        },
        {
          "name": "radial-gradient()",
          "description": "تُنشئ تدرجاً شعاعياً (دائرياً أو بيضاوياً) يبدأ من مركز محدد (أو أي نقطة) ويتوسع للخارج، تستخدم كقيمة لـ background-image مع إمكانية تحديد شكل التدرج (دائرة أو بيضاوي) وحجمه (closest-side، farthest-corner، إلخ)",
          "values": [
            {
              "value": "radial-gradient(circle, red, blue)",
              "description": "تدرج شعاعي دائري"
            },
            {
              "value": "radial-gradient(ellipse, red, blue)",
              "description": "تدرج شعاعي بيضاوي"
            },
            {
              "value": "radial-gradient(circle at 20% 50%, red, blue)",
              "description": "تدرج دائري مركزه 20% من اليسار"
            }
          ]
        },
        {
          "name": "conic-gradient()",
          "description": "تُنشئ تدرجاً مخروطياً يدور حول مركز محدد (مثل قطع البيتزا)، تستخدم كقيمة لـ background-image وتدعم تحديد زاوية البداية ونقطة المركز",
          "values": [
            {
              "value": "conic-gradient(red, blue)",
              "description": "تدرج مخروطي"
            },
            {
              "value": "conic-gradient(from 45deg, red, blue)",
              "description": "تدرج مخروطي يبدأ من 45 درجة"
            },
            {
              "value": "conic-gradient(red 0%, blue 50%, green 100%)",
              "description": "تدرج مخروطي بثلاثة ألوان"
            }
          ]
        },
        {
          "name": "repeating-*()",
          "description": "تُنشئ تدرجات متكررة (خطية، شعاعية، أو مخروطية) بنمط يتكرر باستمرار، تستخدم كقيمة لـ background-image لإنشاء أنماط متكررة",
          "values": [
            {
              "value": "repeating-linear-gradient(red 0px, blue 20px)",
              "description": "تدرج خطي متكرر"
            },
            {
              "value": "repeating-radial-gradient(circle, red 0%, blue 20%)",
              "description": "تدرج شعاعي متكرر"
            },
            {
              "value": "repeating-conic-gradient(red 0%, blue 20%)",
              "description": "تدرج مخروطي متكرر"
            }
          ]
        }
      ]
    },
    {
      "tag": "math-functions",
      "description": "دوال لإجراء عمليات رياضية في CSS",
      "properties": [
        {
          "name": "calc()",
          "description": "تُجري عمليات حسابية (جمع، طرح، ضرب، قسمة) بين قيم مختلفة (px, em, rem, %, إلخ) في أي خاصية تقبل قيمة رقمية، مثل width و margin و padding و font-size",
          "values": [
            {
              "value": "calc(100% - 20px)",
              "description": "طرح 20 بكسل من 100%"
            },
            {
              "value": "calc(100vh - 60px)",
              "description": "طرح 60 بكسل من ارتفاع النافذة"
            },
            {
              "value": "calc(1rem + 2px)",
              "description": "جمع rem و بكسل"
            },
            {
              "value": "calc((100% - 40px) / 3)",
              "description": "قسمة بعد الطرح"
            }
          ]
        },
        {
          "name": "min()",
          "description": "تأخذ أصغر قيمة من بين عدة قيم (تشبه Math.min)، مفيدة لتحديد الحد الأقصى للقيمة (تأخذ الأصغر = لا تتجاوز الحد)",
          "values": [
            {
              "value": "min(100px, 50%)",
              "description": "أصغر بين 100 بكسل و 50%"
            },
            {
              "value": "min(2rem, 24px)",
              "description": "أصغر بين 2rem و 24 بكسل"
            },
            {
              "value": "min(600px, 100%)",
              "description": "لا يتجاوز 600 بكسل"
            }
          ]
        },
        {
          "name": "max()",
          "description": "تأخذ أكبر قيمة من بين عدة قيم (تشبه Math.max)، مفيدة لتحديد الحد الأدنى للقيمة (تأخذ الأكبر = لا تقل عن الحد)",
          "values": [
            {
              "value": "max(100px, 50%)",
              "description": "أكبر بين 100 بكسل و 50%"
            },
            {
              "value": "max(2rem, 24px)",
              "description": "أكبر بين 2rem و 24 بكسل"
            },
            {
              "value": "max(300px, 100%)",
              "description": "على الأقل 300 بكسل"
            }
          ]
        },
        {
          "name": "clamp()",
          "description": "تحدد قيمة بين حد أدنى وحد أقصى (توسيط القيم). الصيغة: clamp(الحد الأدنى, القيمة المفضلة, الحد الأقصى). مفيدة للأحجام المرنة التي لا تتجاوز حدوداً معينة",
          "values": [
            {
              "value": "clamp(200px, 50%, 400px)",
              "description": "بين 200 و400 بكسل، تفضل 50%"
            },
            {
              "value": "clamp(12px, 2vw, 24px)",
              "description": "حجم خط يتغير مع الشاشة بين 12 و24"
            },
            {
              "value": "clamp(100px, 20vw, 300px)",
              "description": "عرض يتناسب مع عرض الشاشة"
            }
          ]
        },
        {
          "name": "round()",
          "description": "تقرب القيمة إلى أقرب رقم صحيح أو إلى مضاعف معين، مفيدة للتأكد من أن القيم الناتجة عن عمليات حسابية تكون قيماً صحيحة أو مضاعفات محددة",
          "values": [
            {
              "value": "round(2.3)",
              "description": "تقريب إلى 2"
            },
            {
              "value": "round(2.7)",
              "description": "تقريب إلى 3"
            },
            {
              "value": "round(5px, 10px)",
              "description": "تقريب 5 بكسل إلى أقرب مضاعف 10 (تصبح 10)"
            }
          ]
        },
        {
          "name": "sin()",
          "description": "تحسب جيب الزاوية (بالراديان أو الدرجات)، تستخدم في الحسابات المتقدمة و CSS animations",
          "values": [
            {
              "value": "sin(45deg)",
              "description": "جيب 45 درجة ? 0.707"
            },
            {
              "value": "sin(0.5rad)",
              "description": "جيب 0.5 راديان"
            }
          ]
        },
        {
          "name": "cos()",
          "description": "تحسب جيب تمام الزاوية، تستخدم في الحسابات المتقدمة و CSS animations",
          "values": [
            {
              "value": "cos(45deg)",
              "description": "جيب تمام 45 درجة ? 0.707"
            },
            {
              "value": "cos(0.5rad)",
              "description": "جيب تمام 0.5 راديان"
            }
          ]
        },
        {
          "name": "tan()",
          "description": "تحسب ظل الزاوية، تستخدم في الحسابات المتقدمة",
          "values": [
            {
              "value": "tan(45deg)",
              "description": "ظل 45 درجة = 1"
            }
          ]
        },
        {
          "name": "sqrt()",
          "description": "تحسب الجذر التربيعي للقيمة، تستخدم في الحسابات المتقدمة",
          "values": [
            {
              "value": "sqrt(16)",
              "description": "جذر 16 = 4"
            }
          ]
        },
        {
          "name": "pow()",
          "description": "تحسب القوة (الأس) لقيمة، تستخدم في الحسابات المتقدمة",
          "values": [
            {
              "value": "pow(2, 3)",
              "description": "2 أس 3 = 8"
            }
          ]
        },
        {
          "name": "abs()",
          "description": "تحسب القيمة المطلقة (تجاهل الإشارة السالبة)، تستخدم في الحسابات المتقدمة",
          "values": [
            {
              "value": "abs(-10px)",
              "description": "تصبح 10 بكسل"
            }
          ]
        },
        {
          "name": "sign()",
          "description": "ترجع 1 للقيم الموجبة، -1 للقيم السالبة، 0 للصفر، تستخدم في الحسابات المتقدمة",
          "values": [
            {
              "value": "sign(-5px)",
              "description": "ترجع -1"
            }
          ]
        },
        {
          "name": "mod() / rem()",
          "description": "تحسب باقي القسمة (modulo)، تستخدم في الحسابات المتقدمة لتحديد الباقي من قسمة قيمة على أخرى",
          "values": [
            {
              "value": "mod(10, 3)",
              "description": "باقي قسمة 10 على 3 = 1"
            }
          ]
        },
        {
          "name": "atan2()",
          "description": "تحسب الزاوية بين محور x ونقطة محددة (x, y)، تستخدم في الحسابات المتقدمة لتحديد زاوية اتجاه",
          "values": [
            {
              "value": "atan2(1, 1)",
              "description": "زاوية 45 درجة"
            }
          ]
        }
      ]
    },
    {
      "tag": "grid-functions",
      "description": "دوال خاصة بشبكة CSS Grid",
      "properties": [
        {
          "name": "repeat()",
          "description": "تكرر نمطاً من الأعمدة أو الصفوف عدداً محدداً من المرات، مفيدة لتوفير الكتابة المتكررة في grid-template-columns و grid-template-rows",
          "values": [
            {
              "value": "repeat(3, 1fr)",
              "description": "ثلاثة أعمدة متساوية"
            },
            {
              "value": "repeat(4, 100px)",
              "description": "أربعة أعمدة بعرض 100 بكسل"
            },
            {
              "value": "repeat(2, 1fr 2fr)",
              "description": "نمط متكرر: 1fr, 2fr, 1fr, 2fr"
            },
            {
              "value": "repeat(auto-fill, 100px)",
              "description": "يملأ أكبر عدد من الأعمدة بعرض 100px"
            },
            {
              "value": "repeat(auto-fit, minmax(150px, 1fr))",
              "description": "تصميم متجاوب: أعمدة بعرض 150px على الأقل"
            }
          ]
        },
        {
          "name": "minmax()",
          "description": "تحدد نطاقاً من القيم بين حد أدنى وحد أقصى، تستخدم في grid-template-columns و grid-template-rows لتحكم دقيق في أحجام الأعمدة والصفوف",
          "values": [
            {
              "value": "minmax(100px, 1fr)",
              "description": "بين 100 بكسل ومرن"
            },
            {
              "value": "minmax(150px, 2fr)",
              "description": "بين 150 بكسل ومرن (ضعف)"
            },
            {
              "value": "minmax(200px, 500px)",
              "description": "بين 200 و500 بكسل"
            }
          ]
        },
        {
          "name": "fit-content()",
          "description": "تحدد قيمة تتناسب مع المحتوى مع حد أقصى محدد، تستخدم في grid-template-columns و grid-template-rows لتحديد حجم العمود/الصف بناءً على المحتوى مع عدم تجاوز حد معين",
          "values": [
            {
              "value": "fit-content(200px)",
              "description": "يتناسب مع المحتوى بحد أقصى 200 بكسل"
            },
            {
              "value": "fit-content(50%)",
              "description": "يتناسب مع المحتوى بحد أقصى 50%"
            }
          ]
        }
      ]
    },
    {
      "tag": "generated-content-functions",
      "description": "دوال خاصة بالمحتوى المُنشأ (::before و ::after)",
      "properties": [
        {
          "name": "counter()",
          "description": "تعرض قيمة عداد واحد باسم محدد، تُستخدم في خاصية content مع ::before و ::after لترقيم العناصر",
          "values": [
            {
              "value": "counter(section)",
              "description": "يعرض قيمة عداد section"
            },
            {
              "value": "counter(chapter, upper-roman)",
              "description": "يعرض بأرقام رومانية كبيرة"
            }
          ]
        },
        {
          "name": "counters()",
          "description": "تعرض تسلسل العدادات المتداخلة (مثل 1.2.3) مع فاصل محدد، تُستخدم في خاصية content مع ::before و ::after لترقيم هرمي",
          "values": [
            {
              "value": "counters(section, '.')",
              "description": "يعرض 1.2.3"
            },
            {
              "value": "counters(section, '.', lower-alpha)",
              "description": "يعرض a.b.c"
            }
          ]
        }
      ]
    },
    {
      "tag": "transform-functions",
      "description": "دوال خاصة بالتحويلات",
      "properties": [
        {
          "name": "translate()",
          "description": "تنقل العنصر في المحورين X و Y، تستخدم في transform لتحريك العنصر دون التأثير على تدفق الصفحة",
          "values": [
            {
              "value": "translate(50px, 100px)",
              "description": "نقل 50 بكسل يميناً و100 بكسل أسفل"
            },
            {
              "value": "translate(50%, 50%)",
              "description": "نقل بنسبة 50%"
            }
          ]
        },
        {
          "name": "rotate()",
          "description": "تدور العنصر حول محور Z بمقدار زاوية محددة، تستخدم في transform لتدوير العنصر",
          "values": [
            {
              "value": "rotate(45deg)",
              "description": "تدوير 45 درجة"
            },
            {
              "value": "rotate(0.5turn)",
              "description": "نصف دورة"
            }
          ]
        },
        {
          "name": "scale()",
          "description": "تكبر أو تصغر العنصر في المحورين X و Y، تستخدم في transform لتغيير حجم العنصر",
          "values": [
            {
              "value": "scale(1.5)",
              "description": "تكبير 150%"
            },
            {
              "value": "scale(2, 0.5)",
              "description": "تكبير أفقي مضاعف، وتصغير عمودي للنصف"
            }
          ]
        },
        {
          "name": "skew()",
          "description": "تميل العنصر في المحورين X و Y، تستخدم في transform لإمالة العنصر",
          "values": [
            {
              "value": "skew(10deg, 20deg)",
              "description": "إمالة أفقية 10 درجات وعمودية 20 درجة"
            },
            {
              "value": "skewX(15deg)",
              "description": "إمالة أفقية 15 درجة"
            }
          ]
        },
        {
          "name": "matrix()",
          "description": "تطبق تحويلاً باستخدام مصفوفة 6 قيم (a, b, c, d, e, f) لتجميع عدة تحويلات في مصفوفة واحدة، تستخدم في transform لتطبيق تحويلات مركبة",
          "values": [
            {
              "value": "matrix(1, 0, 0, 1, 50, 50)",
              "description": "نقل 50 بكسل"
            },
            {
              "value": "matrix(2, 0, 0, 2, 0, 0)",
              "description": "تكبير الضعف"
            }
          ]
        },
        {
          "name": "perspective()",
          "description": "تضيف منظوراً ثلاثي الأبعاد للعنصر، تستخدم في transform لتأثيرات ثلاثية الأبعاد",
          "values": [
            {
              "value": "perspective(500px)",
              "description": "منظور 500 بكسل"
            }
          ]
        }
      ]
    },
    {
      "tag": "gradient-summary",
      "description": "ملخص دوال التدرج في CSS مع جميع المتغيرات الممكنة",
      "properties": [
        {
          "name": "linear-gradient()",
          "description": "تدرج خطي في اتجاه محدد",
          "values": [
            {
              "value": "linear-gradient(red, blue)",
              "description": "أساسي"
            },
            {
              "value": "linear-gradient(to right, red, blue)",
              "description": "من اليسار إلى اليمين"
            },
            {
              "value": "linear-gradient(45deg, red, blue)",
              "description": "بزاوية 45 درجة"
            }
          ]
        },
        {
          "name": "radial-gradient()",
          "description": "تدرج شعاعي من مركز محدد",
          "values": [
            {
              "value": "radial-gradient(circle, red, blue)",
              "description": "دائري"
            },
            {
              "value": "radial-gradient(ellipse, red, blue)",
              "description": "بيضاوي"
            },
            {
              "value": "radial-gradient(circle at 20% 50%, red, blue)",
              "description": "مركزه 20% من اليسار"
            }
          ]
        },
        {
          "name": "conic-gradient()",
          "description": "تدرج مخروطي حول مركز محدد",
          "values": [
            {
              "value": "conic-gradient(red, blue)",
              "description": "أساسي"
            },
            {
              "value": "conic-gradient(from 45deg, red, blue)",
              "description": "يبدأ من 45 درجة"
            }
          ]
        },
        {
          "name": "repeating-*()",
          "description": "أنماط متكررة من التدرجات",
          "values": [
            {
              "value": "repeating-linear-gradient(red 0px, blue 20px)",
              "description": "تدرج خطي متكرر"
            },
            {
              "value": "repeating-radial-gradient(circle, red 0%, blue 20%)",
              "description": "تدرج شعاعي متكرر"
            }
          ]
        }
      ]
    },
    {
      "tag": "shape-functions",
      "description": "دوال لتحديد أشكال هندسية للقص والتغليف",
      "properties": [
        {
          "name": "circle()",
          "description": "تحدد دائرة للقص (clip-path) أو لتغليف النص (shape-outside)، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل دائري",
          "values": [
            {
              "value": "circle(50%)",
              "description": "دائرة نصف قطرها 50%"
            },
            {
              "value": "circle(50% at 50% 50%)",
              "description": "دائرة في المنتصف"
            }
          ]
        },
        {
          "name": "ellipse()",
          "description": "تحدد بيضاوياً للقص أو التغليف، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل بيضاوي",
          "values": [
            {
              "value": "ellipse(50% 50%)",
              "description": "بيضاوي بنصف قطر 50%"
            },
            {
              "value": "ellipse(30% 50% at 0% 50%)",
              "description": "بيضاوي على اليسار"
            }
          ]
        },
        {
          "name": "polygon()",
          "description": "تحدد مضلعاً للقص أو التغليف، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل مضلع (مثلث، سداسي، إلخ)",
          "values": [
            {
              "value": "polygon(0% 0%, 100% 0%, 50% 100%)",
              "description": "مثلث"
            },
            {
              "value": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              "description": "معين"
            },
            {
              "value": "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              "description": "مثمن"
            }
          ]
        },
        {
          "name": "inset()",
          "description": "تحدد مستطيلاً مقطوعاً من الداخل، تُستخدم مع clip-path و shape-outside لتشكيل العناصر بشكل مستطيل مع إزاحة من الحواف",
          "values": [
            {
              "value": "inset(10px)",
              "description": "قص 10 بكسل من كل جهة"
            },
            {
              "value": "inset(10px 20px)",
              "description": "قص 10 بكسل أعلى/أسفل، 20 بكسل يمين/يسار"
            }
          ]
        },
        {
          "name": "path()",
          "description": "تحدد مساراً مخصصاً باستخدام صيغة SVG، تُستخدم مع clip-path لتشكيل العناصر بشكل مسار SVG معقد (مثل clip-path: path('M0,0 L100,0 L50,100 Z'))",
          "values": [
            {
              "value": "path('M0,0 L100,0 L50,100 Z')",
              "description": "مثلث باستخدام مسار SVG"
            },
            {
              "value": "path('M10,10 H90 V90 H10 Z')",
              "description": "مستطيل باستخدام مسار SVG"
            }
          ]
        }
      ]
    },
    {
      "tag": "other-functions",
      "description": "دوال أخرى لا تندرج تحت تصنيف محدد",
      "properties": [
        {
          "name": "element()",
          "description": "تستخدم صورة من عنصر آخر في الصفحة كخلفية (تدعمها بعض المتصفحات مثل Firefox)",
          "values": [
            {
              "value": "element(#header)",
              "description": "تستخدم صورة من العنصر ذي المعرف header"
            }
          ]
        },
        {
          "name": "cross-fade()",
          "description": "تخلط صورتين معاً بنسب محددة, مفيدة لإنشاء انتقالات بين الصور",
          "values": [
            {
              "value": "cross-fade(url('image1.jpg') 50%, url('image2.jpg') 50%)",
              "description": "مزيج 50/50 بين صورتين"
            },
            {
              "value": "cross-fade(url('image1.jpg') 70%, url('image2.jpg') 30%)",
              "description": "الصورة الأولى أكثر وضوحاً"
            }
          ]
        },
        {
          "name": "symbols()",
          "description": "تحدد رموزاً لتعداد القوائم (list-style-type) من Unicode، مفيدة لإنشاء علامات تعداد مخصصة باستخدام رموز أو أحرف خاصة",
          "values": [
            {
              "value": "symbols('•' '?' '?')",
              "description": "رموز مخصصة لتعداد القوائم"
            },
            {
              "value": "symbols(cyclic '?' '?' '?' '?')",
              "description": "رموز دورية"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام دوال CSS بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لاستخدام دوال CSS",
          "values": [
            {
              "value": "استخدم calc() للعمليات الحسابية",
              "description": "يجمع بين وحدات مختلفة"
            },
            {
              "value": "استخدم clamp() للأحجام المرنة",
              "description": "يحدد نطاقاً للقيم"
            },
            {
              "value": "استخدم var() للمتغيرات",
              "description": "يسمح بإعادة الاستخدام"
            },
            {
              "value": "استخدم attr() للبيانات الديناميكية",
              "description": "يأخذ قيماً من HTML"
            }
          ]
        },
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الدوال",
          "values": [
            {
              "value": "تجنب calc() المفرط",
              "description": "إعادة الحساب قد تؤثر على الأداء"
            },
            {
              "value": "استخدم التدرجات بدلاً من الصور",
              "description": "التدرجات أخف وزناً"
            },
            {
              "value": "استخدم var() بحكمة",
              "description": "الإفراط في المتغيرات قد يبطئ الأداء"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام دوال CSS",
          "values": [
            {
              "value": "نسيان المسافات في calc()",
              "description": "calc(100%-20px) خاطئ، الصحيح calc(100% - 20px)"
            },
            {
              "value": "استخدام وحدات غير متوافقة",
              "description": "لا تجمع px مع em في calc()"
            },
            {
              "value": "نسيان علامات التنصيص في url()",
              "description": "url('image.jpg') صحيح"
            }
          ]
        }
      ]
    }
  ],
  "cssUnits": [
    {
      "tag": "absolute-units",
      "description": "الوحدات المطلقة لها حجم ثابت لا يتغير بتغير الشاشة أو الخط، تستخدم للطباعة والتصاميم الثابتة",
      "properties": [
        {
          "name": "px",
          "description": "بكسل (Pixel) - أصغر وحدة قياس في الشاشة، وحدة نسبية تعتمد على كثافة البكسلات في الشاشة، وتُستخدم للدقة العالية في التصميم الرقمي",
          "values": [
            {
              "value": "1px",
              "description": "بكسل واحد - أصغر وحدة قابلة للتمييز على الشاشة"
            },
            {
              "value": "16px",
              "description": "16 بكسل - حجم الخط الافتراضي في معظم المتصفحات"
            },
            {
              "value": "100px",
              "description": "100 بكسل - حجم شائع للعناصر"
            }
          ]
        },
        {
          "name": "pt",
          "description": "نقطة (Point) - 1pt = 1/72 بوصة، تستخدم بشكل أساسي في الطباعة والتصاميم المطبوعة، وليست شائعة في تصميم الويب الحديث",
          "values": [
            {
              "value": "12pt",
              "description": "12 نقطة - حجم خط شائع في الطباعة"
            },
            {
              "value": "72pt",
              "description": "72 نقطة = 1 بوصة"
            }
          ]
        },
        {
          "name": "pc",
          "description": "بيكا (Pica) - 1pc = 12pt = 1/6 بوصة، تستخدم في الطباعة، وتعادل 12 نقطة، نادرة الاستخدام في الويب",
          "values": [
            {
              "value": "1pc",
              "description": "1 بيكا = 12 نقطة"
            },
            {
              "value": "6pc",
              "description": "6 بيكا = 1 بوصة"
            }
          ]
        },
        {
          "name": "in",
          "description": "بوصة (Inch) - 1in = 2.54cm = 96px (تقريباً)، تستخدم في الطباعة وفي بعض التطبيقات الخاصة، نادرة الاستخدام في الويب الحديث",
          "values": [
            {
              "value": "1in",
              "description": "1 بوصة = 2.54 سم"
            },
            {
              "value": "0.5in",
              "description": "نصف بوصة"
            }
          ]
        },
        {
          "name": "cm",
          "description": "سنتيمتر (Centimeter) - 1cm = 10mm = 37.8px (تقريباً)، تستخدم بشكل أساسي في الطباعة والتصاميم المطبوعة",
          "values": [
            {
              "value": "1cm",
              "description": "1 سنتيمتر"
            },
            {
              "value": "5cm",
              "description": "5 سنتيمتر"
            }
          ]
        },
        {
          "name": "mm",
          "description": "ميليمتر (Millimeter) - 1mm = 0.1cm = 3.78px (تقريباً)، تستخدم في الطباعة والتصاميم المطبوعة، وتُستخدم للمسافات الدقيقة",
          "values": [
            {
              "value": "1mm",
              "description": "1 ميليمتر"
            },
            {
              "value": "10mm",
              "description": "10 ميليمتر = 1 سم"
            }
          ]
        },
        {
          "name": "Q",
          "description": "ربع ميليمتر (Quarter-millimeter) - 1Q = 0.25mm، تستخدم في الطباعة اليابانية والتصاميم الدقيقة، نادرة الاستخدام في الويب",
          "values": [
            {
              "value": "1Q",
              "description": "ربع ميليمتر"
            },
            {
              "value": "4Q",
              "description": "1 ميليمتر"
            }
          ]
        }
      ]
    },
    {
      "tag": "font-relative-units",
      "description": "الوحدات النسبية للخط تعتمد على حجم الخط الحالي أو الجذري، مفيدة للتصميم المتجاوب وإمكانية الوصول",
      "properties": [
        {
          "name": "em",
          "description": "نسبة إلى حجم الخط للعنصر الأب. 1em = حجم الخط الحالي للعنصر الأب (أو العنصر نفسه عند استخدامه في font-size)، مفيدة للتصميمات المتداخلة",
          "values": [
            {
              "value": "1em",
              "description": "نفس حجم الخط الأب"
            },
            {
              "value": "1.5em",
              "description": "150% من حجم الخط الأب"
            },
            {
              "value": "2em",
              "description": "ضعف حجم الخط الأب"
            },
            {
              "value": "0.5em",
              "description": "نصف حجم الخط الأب"
            }
          ]
        },
        {
          "name": "rem",
          "description": "نسبة إلى حجم الخط الجذري (:root أو html)، 1rem = حجم الخط الأساسي للصفحة (عادة 16px)، وهي الوحدة الأكثر استخداماً في التصميم المتجاوب اليوم",
          "values": [
            {
              "value": "1rem",
              "description": "نفس حجم الخط الجذري (عادة 16px)"
            },
            {
              "value": "1.25rem",
              "description": "125% من حجم الخط الجذري (?20px)"
            },
            {
              "value": "2rem",
              "description": "ضعف حجم الخط الجذري (?32px)"
            },
            {
              "value": "0.75rem",
              "description": "75% من حجم الخط الجذري (?12px)"
            }
          ]
        },
        {
          "name": "ex",
          "description": "نسبة إلى ارتفاع الحرف 'x' الصغير في الخط الحالي، مفيدة للتصميمات التي تعتمد على حجم الأحرف الصغيرة، مثل ضبط المسافات العمودية",
          "values": [
            {
              "value": "1ex",
              "description": "ارتفاع حرف x في الخط الحالي"
            },
            {
              "value": "2ex",
              "description": "ضعف ارتفاع حرف x"
            }
          ]
        },
        {
          "name": "ch",
          "description": "نسبة إلى عرض الحرف '0' (صفر) في الخط الحالي، مفيدة لتحديد عرض النص بعدد معين من الأحرف، مثل عرض عمود النص بـ 40 حرفاً",
          "values": [
            {
              "value": "1ch",
              "description": "عرض الحرف 0 في الخط الحالي"
            },
            {
              "value": "40ch",
              "description": "عرض 40 حرفاً - عرض مثالي للقراءة"
            },
            {
              "value": "60ch",
              "description": "عرض 60 حرفاً - أقصى عرض مريح للقراءة"
            }
          ]
        },
        {
          "name": "cap",
          "description": "نسبة إلى ارتفاع الأحرف الكبيرة (Capital height) في الخط الحالي (أقل شيوعاً في الممارسة العملية اليوم)",
          "values": [
            {
              "value": "1cap",
              "description": "ارتفاع حرف كبير في الخط الحالي"
            }
          ]
        },
        {
          "name": "lh",
          "description": "نسبة إلى ارتفاع السطر (line-height) للعنصر الحالي، مفيدة للمحاذاة العمودية مع النص، وتُستخدم مع العناصر مثل القوائم والعناوين",
          "values": [
            {
              "value": "1lh",
              "description": "ارتفاع سطر واحد"
            },
            {
              "value": "2lh",
              "description": "ارتفاع سطرين"
            }
          ]
        },
        {
          "name": "rlh",
          "description": "نسبة إلى ارتفاع السطر (line-height) للعنصر الجذري (root)، مفيدة للمحاذاة العمودية مع النص الجذري، وتُستخدم في التصميمات المتسقة",
          "values": [
            {
              "value": "1rlh",
              "description": "ارتفاع سطر جذري واحد"
            }
          ]
        },
        {
          "name": "ic",
          "description": "نسبة إلى عرض الحرف '?' (ماء) في الخط الحالي (للغات الشرق آسيوية)، تستخدم في التصميمات الخاصة باللغات الآسيوية لتحديد عرض النص بعدد معين من الأحرف",
          "values": [
            {
              "value": "1ic",
              "description": "عرض الحرف ? في الخط الحالي"
            }
          ]
        }
      ]
    },
    {
      "tag": "viewport-units",
      "description": "الوحدات النسبية للشاشة تعتمد على حجم نافذة المتصفح، مفيدة للتصميم المتجاوب",
      "properties": [
        {
          "name": "vw",
          "description": "نسبة إلى عرض نافذة المتصفح (Viewport Width). 1vw = 1% من عرض النافذة، مفيدة للتصميمات التي تتناسب مع عرض الشاشة",
          "values": [
            {
              "value": "1vw",
              "description": "1% من عرض النافذة"
            },
            {
              "value": "50vw",
              "description": "نصف عرض النافذة"
            },
            {
              "value": "100vw",
              "description": "عرض النافذة بالكامل"
            }
          ]
        },
        {
          "name": "vh",
          "description": "نسبة إلى ارتفاع نافذة المتصفح (Viewport Height). 1vh = 1% من ارتفاع النافذة، مفيدة للتصميمات التي تتناسب مع ارتفاع الشاشة",
          "values": [
            {
              "value": "1vh",
              "description": "1% من ارتفاع النافذة"
            },
            {
              "value": "50vh",
              "description": "نصف ارتفاع النافذة"
            },
            {
              "value": "100vh",
              "description": "ارتفاع النافذة بالكامل"
            }
          ]
        },
        {
          "name": "vmin",
          "description": "نسبة إلى أصغر قيمة بين العرض والارتفاع (min(vw, vh)). 1vmin = 1% من القيمة الأصغر، مفيدة للتصميمات التي تحافظ على النسب في كلا الاتجاهين",
          "values": [
            {
              "value": "1vmin",
              "description": "1% من القيمة الأصغر للشاشة"
            },
            {
              "value": "50vmin",
              "description": "نصف القيمة الأصغر للشاشة"
            },
            {
              "value": "100vmin",
              "description": "القيمة الأصغر للشاشة بالكامل"
            }
          ]
        },
        {
          "name": "vmax",
          "description": "نسبة إلى أكبر قيمة بين العرض والارتفاع (max(vw, vh)). 1vmax = 1% من القيمة الأكبر، مفيدة للتصميمات التي تتبع الاتجاه الأكبر للشاشة",
          "values": [
            {
              "value": "1vmax",
              "description": "1% من القيمة الأكبر للشاشة"
            },
            {
              "value": "50vmax",
              "description": "نصف القيمة الأكبر للشاشة"
            },
            {
              "value": "100vmax",
              "description": "القيمة الأكبر للشاشة بالكامل"
            }
          ]
        },
        {
          "name": "svw / svh",
          "description": "وحدات النافذة الصغيرة (Small Viewport) - تمثل الحجم الأدنى الذي يمكن أن تصل إليه النافذة، مفيدة لتجنب التغييرات المفاجئة عند ظهور شريط التنقل في المتصفحات المحمولة",
          "values": [
            {
              "value": "1svw",
              "description": "1% من العرض الصغير للنافذة"
            },
            {
              "value": "1svh",
              "description": "1% من الارتفاع الصغير للنافذة"
            },
            {
              "value": "100svh",
              "description": "الارتفاع الصغير للنافذة بالكامل"
            }
          ]
        },
        {
          "name": "lvw / lvh",
          "description": "وحدات النافذة الكبيرة (Large Viewport) - تمثل الحجم الأقصى الذي يمكن أن تصل إليه النافذة، مفيدة للتصميمات التي تحتاج إلى أقصى مساحة متاحة",
          "values": [
            {
              "value": "1lvw",
              "description": "1% من العرض الكبير للنافذة"
            },
            {
              "value": "1lvh",
              "description": "1% من الارتفاع الكبير للنافذة"
            },
            {
              "value": "100lvh",
              "description": "الارتفاع الكبير للنافذة بالكامل"
            }
          ]
        },
        {
          "name": "dvw / dvh",
          "description": "وحدات النافذة الديناميكية (Dynamic Viewport) - تتغير تلقائياً مع تغير حجم النافذة (عند ظهور/اختفاء شريط التنقل)، مفيدة للتصميمات الديناميكية على الجوال",
          "values": [
            {
              "value": "1dvw",
              "description": "1% من العرض الديناميكي للنافذة"
            },
            {
              "value": "1dvh",
              "description": "1% من الارتفاع الديناميكي للنافذة"
            },
            {
              "value": "100dvh",
              "description": "الارتفاع الديناميكي للنافذة بالكامل"
            }
          ]
        },
        {
          "name": "vi",
          "description": "نسبة إلى حجم النافذة في اتجاه النص (الاتجاه الخطي). 1vi = 1% من عرض النافذة في اللغات الأفقية، مفيدة لدعم اللغات ذات الاتجاه المختلف (RTL/LTR)",
          "values": [
            {
              "value": "1vi",
              "description": "1% من الحجم في الاتجاه الخطي"
            }
          ]
        },
        {
          "name": "vb",
          "description": "نسبة إلى حجم النافذة في اتجاه الكتلة (عمودي على اتجاه النص). 1vb = 1% من ارتفاع النافذة في اللغات الأفقية، مفيدة للتصميمات متعددة اللغات",
          "values": [
            {
              "value": "1vb",
              "description": "1% من الحجم في اتجاه الكتلة"
            }
          ]
        }
      ]
    },
    {
      "tag": "grid-units",
      "description": "وحدات خاصة بشبكة CSS Grid",
      "properties": [
        {
          "name": "fr",
          "description": "جزء من المساحة المتاحة (Fraction). 1fr = جزء واحد من المساحة المتاحة بعد طرح الأعمدة/الصفوف الثابتة، مفيدة جداً في تصميم الشبكات المرنة",
          "values": [
            {
              "value": "1fr",
              "description": "جزء واحد من المساحة المتاحة"
            },
            {
              "value": "2fr",
              "description": "جزءان من المساحة المتاحة (ضعف 1fr)"
            },
            {
              "value": "3fr",
              "description": "ثلاثة أجزاء من المساحة المتاحة"
            }
          ]
        }
      ]
    },
    {
      "tag": "angle-units",
      "description": "وحدات قياس الزوايا في CSS، تستخدم في التحويلات والتدرجات",
      "properties": [
        {
          "name": "deg",
          "description": "درجة (Degree) - 1deg = 1/360 من الدورة الكاملة. شائعة جداً في rotate, skew, linear-gradient, hue-rotate",
          "values": [
            {
              "value": "45deg",
              "description": "45 درجة"
            },
            {
              "value": "90deg",
              "description": "90 درجة (ربع دورة)"
            },
            {
              "value": "180deg",
              "description": "180 درجة (نصف دورة)"
            },
            {
              "value": "360deg",
              "description": "360 درجة (دورة كاملة)"
            }
          ]
        },
        {
          "name": "rad",
          "description": "راديان (Radian) - 1rad = 57.2958 درجة. تستخدم في الدوال الرياضية مثل sin(), cos(), tan()",
          "values": [
            {
              "value": "0.5rad",
              "description": "نصف راديان"
            },
            {
              "value": "1rad",
              "description": "راديان واحد"
            },
            {
              "value": "3.14159rad",
              "description": "? 180 درجة"
            }
          ]
        },
        {
          "name": "grad",
          "description": "غراد (Gradian) - 1grad = 1/400 من الدورة الكاملة. نادر الاستخدام في الويب، شائع في بعض التطبيقات الهندسية",
          "values": [
            {
              "value": "100grad",
              "description": "100 غراد (ربع دورة)"
            },
            {
              "value": "200grad",
              "description": "200 غراد (نصف دورة)"
            },
            {
              "value": "400grad",
              "description": "400 غراد (دورة كاملة)"
            }
          ]
        },
        {
          "name": "turn",
          "description": "دورة كاملة (Turn) - 1turn = 360deg. مفيدة للدورات الكاملة أو الكسور، مثل 0.25turn = 90deg",
          "values": [
            {
              "value": "0.25turn",
              "description": "ربع دورة (90 درجة)"
            },
            {
              "value": "0.5turn",
              "description": "نصف دورة (180 درجة)"
            },
            {
              "value": "0.75turn",
              "description": "ثلاثة أرباع دورة (270 درجة)"
            },
            {
              "value": "1turn",
              "description": "دورة كاملة (360 درجة)"
            }
          ]
        }
      ]
    },
    {
      "tag": "time-units",
      "description": "وحدات قياس الوقت في CSS، تستخدم في الانتقالات والرسوم المتحركة",
      "properties": [
        {
          "name": "s",
          "description": "ثانية (Second) - الوحدة الأساسية للوقت في CSS. تستخدم في transition-duration, animation-duration, transition-delay, animation-delay",
          "values": [
            {
              "value": "0.3s",
              "description": "0.3 ثانية - شائع للانتقالات"
            },
            {
              "value": "0.5s",
              "description": "نصف ثانية"
            },
            {
              "value": "1s",
              "description": "ثانية واحدة"
            },
            {
              "value": "2s",
              "description": "ثانيتان"
            }
          ]
        },
        {
          "name": "ms",
          "description": "ميلي ثانية (Millisecond) - 1ms = 1/1000 ثانية. توفر دقة أعلى من الثواني، مفيدة للانتقالات السريعة جداً",
          "values": [
            {
              "value": "100ms",
              "description": "0.1 ثانية - سريع"
            },
            {
              "value": "200ms",
              "description": "0.2 ثانية"
            },
            {
              "value": "300ms",
              "description": "0.3 ثانية"
            },
            {
              "value": "500ms",
              "description": "نصف ثانية"
            },
            {
              "value": "1000ms",
              "description": "ثانية واحدة"
            }
          ]
        }
      ]
    },
    {
      "tag": "frequency-units",
      "description": "وحدات قياس التردد في CSS، نادرة الاستخدام، تستخدم بشكل أساسي في الصوتيات",
      "properties": [
        {
          "name": "Hz",
          "description": "هيرتز (Hertz) - عدد الدورات في الثانية. تستخدم في خصائص الصوت مثل pitch و pitch-range، نادرة الاستخدام في الويب",
          "values": [
            {
              "value": "440Hz",
              "description": "440 هيرتز - نغمة A"
            },
            {
              "value": "1000Hz",
              "description": "1000 هيرتز"
            }
          ]
        },
        {
          "name": "kHz",
          "description": "كيلوهيرتز (Kilohertz) - 1kHz = 1000Hz. تستخدم في خصائص الصوت، نادرة الاستخدام في الويب الحديث",
          "values": [
            {
              "value": "1kHz",
              "description": "1000 هيرتز"
            },
            {
              "value": "2.5kHz",
              "description": "2500 هيرتز"
            }
          ]
        }
      ]
    },
    {
      "tag": "resolution-units",
      "description": "وحدات قياس الدقة في CSS، تستخدم في استعلامات الوسائط للشاشات عالية الدقة",
      "properties": [
        {
          "name": "dpi",
          "description": "نقطة لكل بوصة (Dots Per Inch) - 1dpi = 1 نقطة في البوصة. تستخدم في @media (min-resolution: 300dpi) للشاشات عالية الدقة",
          "values": [
            {
              "value": "96dpi",
              "description": "96 نقطة لكل بوصة - دقة قياسية"
            },
            {
              "value": "300dpi",
              "description": "300 نقطة لكل بوصة - دقة عالية"
            }
          ]
        },
        {
          "name": "dpcm",
          "description": "نقطة لكل سنتيمتر (Dots Per Centimeter) - 1dpcm = 2.54dpi، تستخدم في استعلامات الدقة للشاشات عالية الدقة بدلاً من dpi في بعض المتصفحات",
          "values": [
            {
              "value": "38dpcm",
              "description": "? 96dpi"
            },
            {
              "value": "118dpcm",
              "description": "? 300dpi"
            }
          ]
        },
        {
          "name": "x",
          "description": "عامل الدقة بالنسبة للدقة المرجعية (96dpi). 1x = 96dpi، مفيدة لاستعلامات الوسائط للشاشات عالية الدقة",
          "values": [
            {
              "value": "1x",
              "description": "دقة قياسية (96dpi)"
            },
            {
              "value": "2x",
              "description": "دقة مزدوجة (? 192dpi) - شاشات Retina"
            },
            {
              "value": "3x",
              "description": "دقة ثلاثية - شاشات عالية الدقة جداً"
            }
          ]
        }
      ]
    },
    {
      "tag": "flexible-units",
      "description": "وحدات مرنة تستخدم في دوال CSS الحديثة لتحديد قيم بمرونة",
      "properties": [
        {
          "name": "flex",
          "description": "وحدة مرنة في CSS Grid (fr) تُستخدم لتوزيع المساحة المتاحة في الشبكات المرنة بدلاً من القيم الثابتة",
          "values": [
            {
              "value": "1fr",
              "description": "جزء واحد من المساحة المتاحة"
            },
            {
              "value": "2fr",
              "description": "جزءان من المساحة المتاحة"
            }
          ]
        },
        {
          "name": "auto",
          "description": "تحدد القيمة تلقائياً حسب السياق. قد تعني 'حسب المحتوى' في العرض/الارتفاع، أو 'حسب الموقع' في الموضع، أو 'تلقائي' في العديد من الخصائص مثل margin و overflow و grid-template-*",
          "values": [
            {
              "value": "auto",
              "description": "تحسب تلقائياً حسب السياق"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية لاستخدام وحدات القياس المختلفة",
      "properties": [
        {
          "name": "مثال 1 - تصميم متجاوب بالكامل",
          "description": "استخدام rem و vw و vh و clamp معاً",
          "values": [
            {
              "value": "html { font-size: 16px; } body { font-size: 1rem; } h1 { font-size: clamp(1.5rem, 4vw, 3rem); } .container { width: min(100%, 1200px); padding: clamp(1rem, 4vw, 4rem); } .hero { min-height: 80vh; }",
              "description": "تصميم متجاوب كامل يستخدم أفضل الممارسات للوحدات المرنة"
            }
          ]
        },
        {
          "name": "مثال 2 - عرض مثالي للقراءة",
          "description": "تحديد عرض النص لسهولة القراءة باستخدام وحدات ch (عرض الحروف)",
          "values": [
            {
              "value": "article { max-width: 70ch; margin: 0 auto; padding: 2rem; line-height: 1.8; font-size: 1.125rem; }",
              "description": "عرض مثالي للقراءة باستخدام وحدات ch"
            }
          ]
        },
        {
          "name": "مثال 3 - مربع دائري متجاوب",
          "description": "مربع دائري يحافظ على النسب باستخدام vmin للحفاظ على الشكل الدائري في كلا الاتجاهين",
          "values": [
            {
              "value": ".circle { width: 30vmin; height: 30vmin; border-radius: 50%; background: #007bff; }",
              "description": "مربع دائري بنسبة 30% من أصغر بعد للشاشة"
            }
          ]
        },
        {
          "name": "مثال 4 - شبكة Grid مرنة",
          "description": "استخدام وحدات fr لشبكة مرنة",
          "values": [
            {
              "value": ".grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 1.5rem; }",
              "description": "شبكة بأعمدة غير متساوية باستخدام fr"
            }
          ]
        },
        {
          "name": "مثال 5 - شاشة كاملة مع منع التمرير",
          "description": "استخدام dvh (ديناميكية) للحصول على ارتفاع شاشة كامل يتغير مع ظهور شريط التنقل في المتصفحات المحمولة",
          "values": [
            {
              "value": ".fullscreen { height: 100dvh; overflow: hidden; }",
              "description": "شاشة كاملة مع منع التمرير باستخدام dvh"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام وحدات القياس بشكل فعال",
      "properties": [
        {
          "name": "نصائح اختيار الوحدات",
          "description": "نصائح لاختيار الوحدة المناسبة",
          "values": [
            {
              "value": "استخدم rem للخطوط",
              "description": "الخطوط بـ rem أفضل لإمكانية الوصول"
            },
            {
              "value": "استخدم em للعناصر الداخلية",
              "description": "em مفيد للعناصر التي تتناسب مع حجم خط الأب"
            },
            {
              "value": "استخدم px للحدود والتفاصيل الدقيقة",
              "description": "الحدود الصغيرة بـ px تبقى ثابتة"
            },
            {
              "value": "استخدم % للعناصر النسبية",
              "description": "النسب المئوية مفيدة للعرض والارتفاع"
            },
            {
              "value": "استخدم vw/vh للتصميمات الكبيرة",
              "description": "مفيد للصفحات الكاملة والبطولات"
            },
            {
              "value": "استخدم vmin/vmax للشاشات المختلفة",
              "description": "يحافظ على النسب في كلا الاتجاهين"
            },
            {
              "value": "استخدم ch للنصوص",
              "description": "مثالي لتحديد عرض النص المقروء"
            },
            {
              "value": "استخدم clamp() للتصميم المرن",
              "description": "يجمع بين الحد الأدنى والمثالي والأقصى"
            }
          ]
        },
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الوحدات",
          "values": [
            {
              "value": "تجنب إعادة الحساب المفرط",
              "description": "الوحدات النسبية تحتاج إلى حساب في كل مرة"
            },
            {
              "value": "استخدم will-change للعناصر المتغيرة",
              "description": "يحسن أداء الوحدات الديناميكية"
            },
            {
              "value": "استخدم rem بدلاً من em للخطوط الكبيرة",
              "description": "يمنع التراكم في الحجم"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام وحدات القياس",
          "values": [
            {
              "value": "استخدام px للطباعة",
              "description": "استخدم pt أو cm للطباعة"
            },
            {
              "value": "نسيان rem في الجذر",
              "description": ":root { font-size: 16px; }"
            },
            {
              "value": "استخدام vh على الجوال",
              "description": "vh تتغير عند ظهور شريط التنقل - استخدم dvh"
            },
            {
              "value": "استخدام ch دون معرفة الخط",
              "description": "ch تعتمد على حجم الحرف 0 في الخط الحالي، وتختلف بين الخطوط المختلفة"
            },
            {
              "value": "خلط الوحدات في calc()",
              "description": "تأكد من توافق الوحدات في العمليات الحسابية"
            }
          ]
        }
      ]
    }
  ],
  "cssAtRules": [
    {
      "tag": "media-rules",
      "description": "قواعد @media لتطبيق الأنماط بناءً على خصائص الجهاز أو المتصفح، وهي أساس التصميم المتجاوب (Responsive Design)",
      "properties": [
        {
          "name": "@media",
          "description": "تطبق الأنماط فقط عند تحقق شرط معين متعلق بجهاز العرض (العرض، الارتفاع، الاتجاه، تفضيلات المستخدم، إلخ)",
          "values": [
            {
              "value": "@media (max-width: 768px) { ... }",
              "description": "أنماط للشاشات بعرض 768px فأقل"
            },
            {
              "value": "@media (min-width: 768px) { ... }",
              "description": "أنماط للشاشات بعرض 768px فأكثر"
            },
            {
              "value": "@media (width: 1024px) { ... }",
              "description": "أنماط للشاشات بعرض 1024px بالضبط"
            },
            {
              "value": "@media (max-height: 600px) { ... }",
              "description": "أنماط للشاشات بارتفاع 600px فأقل"
            },
            {
              "value": "@media (min-height: 800px) { ... }",
              "description": "أنماط للشاشات بارتفاع 800px فأكثر"
            },
            {
              "value": "@media (orientation: landscape) { ... }",
              "description": "أنماط عند اتجاه الشاشة الأفقي"
            },
            {
              "value": "@media (orientation: portrait) { ... }",
              "description": "أنماط عند اتجاه الشاشة العمودي"
            },
            {
              "value": "@media (prefers-color-scheme: dark) { ... }",
              "description": "أنماط للوضع الداكن حسب تفضيل النظام"
            },
            {
              "value": "@media (prefers-color-scheme: light) { ... }",
              "description": "أنماط للوضع الفاتح"
            },
            {
              "value": "@media (prefers-reduced-motion: reduce) { ... }",
              "description": "أنماط للمستخدمين الذين يفضلون تقليل الحركة"
            },
            {
              "value": "@media (prefers-reduced-transparency: reduce) { ... }",
              "description": "أنماط للمستخدمين الذين يفضلون تقليل الشفافية"
            },
            {
              "value": "@media (prefers-contrast: high) { ... }",
              "description": "أنماط للمستخدمين الذين يحتاجون تبايناً عالياً"
            },
            {
              "value": "@media (prefers-contrast: low) { ... }",
              "description": "أنماط للتباين المنخفض"
            },
            {
              "value": "@media (min-resolution: 2dppx) { ... }",
              "description": "أنماط للشاشات عالية الدقة (Retina)"
            },
            {
              "value": "@media (min-resolution: 300dpi) { ... }",
              "description": "أنماط للشاشات بدقة 300 نقطة في البوصة"
            },
            {
              "value": "@media (max-resolution: 1dppx) { ... }",
              "description": "أنماط للشاشات ذات الدقة القياسية"
            },
            {
              "value": "@media print { ... }",
              "description": "أنماط خاصة بالطباعة فقط"
            },
            {
              "value": "@media screen { ... }",
              "description": "أنماط خاصة بالشاشات فقط"
            },
            {
              "value": "@media speech { ... }",
              "description": "أنماط خاصة بقارئات النص"
            },
            {
              "value": "@media all { ... }",
              "description": "أنماط لجميع الأجهزة (افتراضي)"
            },
            {
              "value": "@media (hover: hover) { ... }",
              "description": "أنماط للأجهزة التي تدعم التمرير (مثل الماوس)"
            },
            {
              "value": "@media (hover: none) { ... }",
              "description": "أنماط للأجهزة التي لا تدعم التمرير (مثل الجوال)"
            },
            {
              "value": "@media (pointer: fine) { ... }",
              "description": "أنماط لأجهزة التأشير الدقيقة (مثل الماوس)"
            },
            {
              "value": "@media (pointer: coarse) { ... }",
              "description": "أنماط لأجهزة التأشير الخشنة (مثل اللمس)"
            },
            {
              "value": "@media (any-pointer: fine) { ... }",
              "description": "أنماط إذا كان أي جهاز تأشير دقيق متوفراً"
            },
            {
              "value": "@media (any-pointer: coarse) { ... }",
              "description": "أنماط إذا كان أي جهاز تأشير خشن متوفراً"
            },
            {
              "value": "@media (display-mode: fullscreen) { ... }",
              "description": "أنماط في وضع ملء الشاشة"
            },
            {
              "value": "@media (display-mode: standalone) { ... }",
              "description": "أنماط في وضع PWA المستقل"
            },
            {
              "value": "@media (display-mode: minimal-ui) { ... }",
              "description": "أنماط في وضع الواجهة المصغرة"
            },
            {
              "value": "@media (dynamic-range: high) { ... }",
              "description": "أنماط للشاشات عالية الديناميكية (HDR)"
            },
            {
              "value": "@media (dynamic-range: standard) { ... }",
              "description": "أنماط للشاشات القياسية (SDR)"
            },
            {
              "value": "@media (min-width: 768px) and (max-width: 1024px) { ... }",
              "description": "أنماط للشاشات المتوسطة (بين 768 و 1024)"
            },
            {
              "value": "@media (orientation: landscape) and (min-height: 500px) { ... }",
              "description": "أنماط لأفقي بارتفاع كافٍ"
            },
            {
              "value": "@media (prefers-color-scheme: dark) and (min-width: 768px) { ... }",
              "description": "أنماط للوضع الداكن على الشاشات الكبيرة"
            },
            {
              "value": "@media screen and (max-width: 480px), print and (max-width: 480px) { ... }",
              "description": "أنماط للشاشات الصغيرة أو الطباعة"
            },
            {
              "value": "@media (not (max-width: 768px)) { ... }",
              "description": "أنماط للشاشات الأكبر من 768px"
            },
            {
              "value": "@media (min-width: 768px) and (not (prefers-color-scheme: dark)) { ... }",
              "description": "شاشات كبيرة مع وضع فاتح"
            }
          ]
        }
      ]
    },
    {
      "tag": "supports-rules",
      "description": "قواعد @supports لتطبيق الأنماط بناءً على دعم المتصفح لخصائص CSS معينة، مفيدة للتحسين التدريجي (Progressive Enhancement)",
      "properties": [
        {
          "name": "@supports",
          "description": "تطبق الأنماط فقط إذا كان المتصفح يدعم خاصية CSS معينة (أو مجموعة من الخصائص)",
          "values": [
            {
              "value": "@supports (display: grid) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم CSS Grid"
            },
            {
              "value": "@supports (display: flex) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم Flexbox"
            },
            {
              "value": "@supports (backdrop-filter: blur(10px)) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم backdrop-filter"
            },
            {
              "value": "@supports (scroll-behavior: smooth) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم التمرير السلس"
            },
            {
              "value": "@supports (color: oklch(0.5 0.2 0.1)) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم oklch"
            },
            {
              "value": "@supports (container: inline-size) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم Container Queries"
            },
            {
              "value": "@supports (aspect-ratio: 16/9) { ... }",
              "description": "أنماط إذا كان المتصفح يدعم aspect-ratio"
            },
            {
              "value": "@supports not (display: grid) { ... }",
              "description": "أنماط بديلة للمتصفحات التي لا تدعم Grid"
            },
            {
              "value": "@supports (display: flex) and (gap: 20px) { ... }",
              "description": "أنماط إذا كان يدعم Flexbox و gap معاً"
            },
            {
              "value": "@supports (display: flex) or (display: grid) { ... }",
              "description": "أنماط إذا كان يدعم Flexbox أو Grid"
            }
          ]
        }
      ]
    },
    {
      "tag": "container-rules",
      "description": "قواعد @container لتطبيق الأنماط بناءً على حجم عنصر حاوٍ محدد بدلاً من حجم الشاشة، مما يسمح بتصميم مكونات متجاوبة تعتمد على حجم الحاوية الخاصة بها",
      "properties": [
        {
          "name": "@container",
          "description": "تطبق الأنماط بناءً على حجم عنصر حاوٍ محدد (container) بدلاً من حجم الشاشة بأكملها",
          "values": [
            {
              "value": "@container (min-width: 400px) { ... }",
              "description": "أنماط عندما يكون عرض الحاوية 400px فأكثر"
            },
            {
              "value": "@container (max-width: 400px) { ... }",
              "description": "أنماط عندما يكون عرض الحاوية 400px فأقل"
            },
            {
              "value": "@container (min-height: 300px) { ... }",
              "description": "أنماط عندما يكون ارتفاع الحاوية 300px فأكثر"
            },
            {
              "value": "@container (width > 400px) { ... }",
              "description": "أنماط عندما يكون عرض الحاوية أكبر من 400px"
            },
            {
              "value": "@container (width < 600px) { ... }",
              "description": "أنماط عندما يكون عرض الحاوية أقل من 600px"
            },
            {
              "value": "@container (inline-size >= 500px) { ... }",
              "description": "أنماط عندما يكون الحجم الخطي للحاوية 500px فأكثر"
            },
            {
              "value": "@container sidebar (min-width: 300px) { ... }",
              "description": "أنماط لحاوية باسم sidebar"
            },
            {
              "value": "@container not (width > 400px) { ... }",
              "description": "أنماط عندما يكون العرض ليس أكبر من 400px"
            }
          ]
        }
      ]
    },
    {
      "tag": "keyframes-rules",
      "description": "قواعد @keyframes لتعريف مراحل الحركة في CSS Animations، تحدد التغييرات في الخصائص عبر الزمن",
      "properties": [
        {
          "name": "@keyframes",
          "description": "تُعرّف مراحل حركة (animation) يمكن استدعاؤها لاحقاً باستخدام animation-name",
          "values": [
            {
              "value": "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }",
              "description": "حركة تلاشي من شفاف إلى معتم"
            },
            {
              "value": "@keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }",
              "description": "حركة انزلاق من اليسار"
            },
            {
              "value": "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }",
              "description": "حركة نبض"
            },
            {
              "value": "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
              "description": "حركة دوران كامل"
            },
            {
              "value": "@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }",
              "description": "حركة ارتداد"
            },
            {
              "value": "@keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } }",
              "description": "حركة اهتزاز"
            },
            {
              "value": "@keyframes colorCycle { 0% { color: red; } 33% { color: green; } 66% { color: blue; } 100% { color: red; } }",
              "description": "حركة تغيير لون دوري"
            }
          ]
        }
      ]
    },
    {
      "tag": "font-face-rules",
      "description": "قواعد @font-face لتعريف واستخدام خطوط مخصصة غير مثبتة على جهاز المستخدم",
      "properties": [
        {
          "name": "@font-face",
          "description": "يُعرّف خطاً مخصصاً يمكن تحميله من ملف وربطه باسم لاستخدامه في font-family",
          "values": [
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'); }",
              "description": "تعريف خط من ملف woff2"
            },
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'), url('font.woff') format('woff'); font-weight: bold; }",
              "description": "تعريف خط بصيغ متعددة ووزن محدد"
            },
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'); font-style: italic; }",
              "description": "تعريف خط مائل"
            },
            {
              "value": "@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'); font-display: swap; }",
              "description": "تعريف خط مع font-display: swap لمنع FOIT"
            }
          ]
        }
      ]
    },
    {
      "tag": "page-rules",
      "description": "قواعد @page لتخصيص أبعاد وهوامش الصفحة المطبوعة، وتدعم محددات لصفحات محددة (الأولى، اليمنى، اليسرى)",
      "properties": [
        {
          "name": "@page",
          "description": "تُستخدم لتخصيص خصائص الصفحة المطبوعة مثل الحجم والهوامش",
          "values": [
            {
              "value": "@page { size: A4; margin: 2cm; }",
              "description": "حجم A4 مع هامش 2 سم"
            },
            {
              "value": "@page { size: A5; margin: 1.5cm; }",
              "description": "حجم A5"
            },
            {
              "value": "@page { size: letter; margin: 1in; }",
              "description": "حجم Letter"
            },
            {
              "value": "@page { size: A4 landscape; }",
              "description": "حجم A4 مع اتجاه أفقي"
            },
            {
              "value": "@page :first { margin-top: 5cm; }",
              "description": "هامش خاص للصفحة الأولى"
            },
            {
              "value": "@page :left { margin-left: 3cm; margin-right: 2cm; }",
              "description": "صفحات يسرى"
            },
            {
              "value": "@page :right { margin-left: 2cm; margin-right: 3cm; }",
              "description": "صفحات يمنى"
            }
          ]
        }
      ]
    },
    {
      "tag": "import-rules",
      "description": "قواعد @import لاستيراد ملفات CSS خارجية داخل ملف الأنماط الحالي، يُفضل عادة استخدام <link> بدلاً منها لأسباب أداء",
      "properties": [
        {
          "name": "@import",
          "description": "يستورد ملف CSS خارجي آخر داخل ملف الأنماط الحالي (يفضل استخدام <link> بدلاً منه)",
          "values": [
            {
              "value": "@import url('theme.css');",
              "description": "استيراد ملف أنماط آخر"
            },
            {
              "value": "@import url('print.css') print;",
              "description": "استيراد ملف أنماط خاص بالطباعة فقط"
            },
            {
              "value": "@import url('mobile.css') (max-width: 768px);",
              "description": "استيراد ملف خاص بالجوال"
            },
            {
              "value": "@import 'style.css';",
              "description": "استيراد بدون url()"
            }
          ]
        }
      ]
    },
    {
      "tag": "layer-rules",
      "description": "قواعد @layer لتنظيم أولوية الأنماط في CSS (Cascade Layers)، تسمح بتحديد ترتيب تطبيق الأنماط بدقة",
      "properties": [
        {
          "name": "@layer",
          "description": "تحدد طبقة من الأنماط (Cascade Layer) لتحديد أولوية التطبيق، الأنماط في الطبقات اللاحقة تتجاوز الطبقات السابقة",
          "values": [
            {
              "value": "@layer reset { * { margin: 0; padding: 0; } }",
              "description": "طبقة إعادة تعيين"
            },
            {
              "value": "@layer components { .btn { padding: 8px 16px; } }",
              "description": "طبقة المكونات"
            },
            {
              "value": "@layer utilities { .text-center { text-align: center; } }",
              "description": "طبقة الأدوات المساعدة"
            },
            {
              "value": "@import url('reset.css') layer(reset);",
              "description": "استيراد ملف في طبقة reset"
            },
            {
              "value": "@layer reset, components, utilities;",
              "description": "تحديد ترتيب الطبقات (reset ثم components ثم utilities)"
            }
          ]
        }
      ]
    },
    {
      "tag": "other-at-rules",
      "description": "قواعد @ أخرى أقل استخداماً",
      "properties": [
        {
          "name": "@charset",
          "description": "تحدد ترميز الأحرف لملف CSS، يجب أن تكون في بداية الملف قبل أي شيء آخر",
          "values": [
            {
              "value": "@charset \"UTF-8\";",
              "description": "ترميز UTF-8"
            }
          ]
        },
        {
          "name": "@namespace",
          "description": "تحدد مساحة اسم (namespace) لمحددات CSS، تستخدم مع SVG و XML",
          "values": [
            {
              "value": "@namespace svg url('http://www.w3.org/2000/svg');",
              "description": "مساحة اسم SVG"
            },
            {
              "value": "@namespace \"http://www.w3.org/1999/xhtml\";",
              "description": "مساحة اسم XHTML"
            }
          ]
        },
        {
          "name": "@property",
          "description": "تُعرّف متغيراً مخصصاً (Custom Property) بنوع بيانات محدد وقيمة أولية، مما يتيح دمجه مع الانتقالات والرسوم المتحركة",
          "values": [
            {
              "value": "@property --primary-color { syntax: '<color>'; inherits: true; initial-value: #007bff; }",
              "description": "تعريف متغير لون"
            },
            {
              "value": "@property --spacing { syntax: '<length>'; inherits: false; initial-value: 8px; }",
              "description": "تعريف متغير طول"
            }
          ]
        },
        {
          "name": "@scope",
          "description": "تحدد نطاقاً (Scope) للمحددات، يسمح بتقييد الأنماط على جزء معين من DOM وتسهيل إدارة التعارضات",
          "values": [
            {
              "value": "@scope (.card) { .title { font-size: 1.5rem; } }",
              "description": "أنماط لعناوين البطاقة فقط"
            },
            {
              "value": "@scope (.container) to (.content) { p { color: blue; } }",
              "description": "أنماط بين الحاوية والمحتوى"
            }
          ]
        },
        {
          "name": "@starting-style",
          "description": "تحدد الأنماط الأولية للعنصر قبل بدء الانتقال أو الرسوم المتحركة، مفيدة لانتقالات الدخول (entry transitions)",
          "values": [
            {
              "value": "@starting-style { opacity: 0; transform: scale(0.8); }",
              "description": "أنماط بداية للظهور"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية لاستخدام قواعد @ في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - تصميم متجاوب كامل",
          "description": "استخدام @media لتصميم متجاوب مع الوضع الداكن",
          "values": [
            {
              "value": "@media (max-width: 768px) { .container { padding: 16px; } .grid { grid-template-columns: 1fr; } } @media (prefers-color-scheme: dark) { body { background: #1a1a2e; color: #eaeaea; } }",
              "description": "تصميم متجاوب مع دعم الوضع الداكن"
            }
          ]
        },
        {
          "name": "مثال 2 - دعم المتصفحات المتقدم",
          "description": "استخدام @supports لتوفير أنماط بديلة",
          "values": [
            {
              "value": "@supports (display: grid) { .grid { display: grid; } } @supports not (display: grid) { .grid { display: flex; flex-wrap: wrap; } }",
              "description": "أنماط بديلة للمتصفحات التي لا تدعم Grid"
            }
          ]
        },
        {
          "name": "مثال 3 - Container Queries",
          "description": "استخدام @container لتصميم مكونات متجاوبة",
          "values": [
            {
              "value": ".card-container { container-type: inline-size; } @container (min-width: 500px) { .card { display: grid; grid-template-columns: 1fr 2fr; } }",
              "description": "بطاقة تتغير تخطيطها حسب عرض الحاوية"
            }
          ]
        },
        {
          "name": "مثال 4 - طبقات CSS",
          "description": "استخدام @layer لتنظيم الأنماط",
          "values": [
            {
              "value": "@layer reset { * { margin: 0; padding: 0; box-sizing: border-box; } } @layer base { body { font-family: sans-serif; } } @layer components { .btn { padding: 8px 16px; border-radius: 4px; } } @layer utilities { .text-center { text-align: center; } }",
              "description": "تنظيم الأنماط في طبقات"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام قواعد @ بشكل فعال",
      "properties": [
        {
          "name": "نصائح التصميم المتجاوب",
          "description": "نصائح لاستخدام @media",
          "values": [
            {
              "value": "استخدم max-width للجوال أولاً (Mobile First)",
              "description": "صمم للجوال أولاً ثم أضف تحسينات للشاشات الأكبر"
            },
            {
              "value": "استخدم وحدات نسبية",
              "description": "rem, %, vw أفضل من px في الاستعلامات"
            },
            {
              "value": "اختبر على أجهزة حقيقية",
              "description": "لا تعتمد فقط على أدوات المحاكاة"
            }
          ]
        },
        {
          "name": "نصائح التحسين التدريجي",
          "description": "نصائح لاستخدام @supports",
          "values": [
            {
              "value": "استخدم @supports للخصائص الجديدة",
              "description": "للحفاظ على التوافق مع المتصفحات القديمة"
            },
            {
              "value": "قدم بدائل متينة",
              "description": "تأكد من أن البدائل تعمل بشكل جيد"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام قواعد @",
          "values": [
            {
              "value": "نسيان الأقواس في @media",
              "description": "@media (max-width: 768px) { ... }"
            },
            {
              "value": "وضع @import بعد أنماط أخرى",
              "description": "@import يجب أن يكون في بداية الملف"
            },
            {
              "value": "نسيان @keyframes مع animation-name",
              "description": "@keyframes يجب أن يُعرف قبل استخدامه"
            }
          ]
        }
      ]
    }
  ],
  "cssColorSystems": [
    {
      "tag": "color-systems",
      "description": "جميع أنظمة الألوان المتاحة في CSS مع شرح لكل نظام",
      "properties": [
        {
          "name": "نظرة عامة",
          "description": "CSS تدعم العديد من أنظمة الألوان، كل منها مناسب لحالات استخدام مختلفة",
          "values": [
            {
              "value": "أسماء الألوان",
              "description": "أسهل طريقة - لكن عددها محدود (140 لوناً)"
            },
            {
              "value": "Hex (سداسي عشري)",
              "description": "الأكثر شيوعاً - دقيق وسهل الاستخدام"
            },
            {
              "value": "RGB (أحمر، أخضر، أزرق)",
              "description": "نظام ألوان الشاشات - دقيق وقابل للبرمجة"
            },
            {
              "value": "HSL (تدرج، تشبع، إضاءة)",
              "description": "بديهي وسهل التعديل - مفيد للتصميم"
            },
            {
              "value": "HWB (تدرج، بياض، سواد)",
              "description": "بديل لـ HSL - بديهي أيضاً"
            },
            {
              "value": "Lab (إضاءة، a، b)",
              "description": "نظام يعتمد على إدراك العين - دقيق"
            },
            {
              "value": "LCH (إضاءة، تشبع لوني، تدرج)",
              "description": "نظام حديث - دقيق جداً وبديهي"
            },
            {
              "value": "Display P3",
              "description": "مساحة لونية أوسع من sRGB - ألوان أكثر حيوية"
            },
            {
              "value": "OKLCH",
              "description": "نظام لوني حديث - أفضل من LCH في الانتقالات"
            }
          ]
        }
      ]
    },
    {
      "tag": "color-names",
      "description": "أسماء الألوان المعرفة مسبقاً في CSS (140 لوناً)",
      "properties": [
        {
          "name": "أسماء الألوان الأساسية",
          "description": "الأسماء الأكثر استخداماً",
          "values": [
            {
              "value": "black",
              "description": "#000000 - أسود"
            },
            {
              "value": "white",
              "description": "#ffffff - أبيض"
            },
            {
              "value": "red",
              "description": "#ff0000 - أحمر"
            },
            {
              "value": "green",
              "description": "#008000 - أخضر"
            },
            {
              "value": "blue",
              "description": "#0000ff - أزرق"
            },
            {
              "value": "yellow",
              "description": "#ffff00 - أصفر"
            },
            {
              "value": "orange",
              "description": "#ffa500 - برتقالي"
            },
            {
              "value": "purple",
              "description": "#800080 - بنفسجي"
            },
            {
              "value": "pink",
              "description": "#ffc0cb - وردي"
            },
            {
              "value": "gray",
              "description": "#808080 - رمادي"
            },
            {
              "value": "brown",
              "description": "#a52a2a - بني"
            },
            {
              "value": "cyan",
              "description": "#00ffff - سماوي"
            },
            {
              "value": "magenta",
              "description": "#ff00ff - أرجواني"
            },
            {
              "value": "lime",
              "description": "#00ff00 - ليموني"
            },
            {
              "value": "maroon",
              "description": "#800000 - كستنائي"
            },
            {
              "value": "navy",
              "description": "#000080 - أزرق بحري"
            },
            {
              "value": "olive",
              "description": "#808000 - زيتوني"
            },
            {
              "value": "teal",
              "description": "#008080 - أزرق مخضر"
            }
          ]
        },
        {
          "name": "أسماء الألوان الإضافية",
          "description": "أسماء إضافية شائعة الاستخدام",
          "values": [
            {
              "value": "aliceblue",
              "description": "#f0f8ff - أزرق فاتح جداً"
            },
            {
              "value": "antiquewhite",
              "description": "#faebd7 - أبيض عتيق"
            },
            {
              "value": "aqua",
              "description": "#00ffff - مائي"
            },
            {
              "value": "aquamarine",
              "description": "#7fffd4 - زمردي"
            },
            {
              "value": "azure",
              "description": "#f0ffff - أزرق سماوي"
            },
            {
              "value": "beige",
              "description": "#f5f5dc - بيج"
            },
            {
              "value": "bisque",
              "description": "#ffe4c4 - بيج فاتح"
            },
            {
              "value": "blanchedalmond",
              "description": "#ffebcd - لوزي"
            },
            {
              "value": "blueviolet",
              "description": "#8a2be2 - بنفسجي أزرق"
            },
            {
              "value": "burlywood",
              "description": "#deb887 - خشبي"
            },
            {
              "value": "cadetblue",
              "description": "#5f9ea0 - أزرق كاديت"
            },
            {
              "value": "chartreuse",
              "description": "#7fff00 - شارتروز"
            },
            {
              "value": "chocolate",
              "description": "#d2691e - شوكولاتي"
            },
            {
              "value": "coral",
              "description": "#ff7f50 - مرجاني"
            },
            {
              "value": "cornflowerblue",
              "description": "#6495ed - أزرق ردة الذرة"
            },
            {
              "value": "cornsilk",
              "description": "#fff8dc - حرير الذرة"
            },
            {
              "value": "crimson",
              "description": "#dc143c - قرمزي"
            },
            {
              "value": "darkblue",
              "description": "#00008b - أزرق غامق"
            },
            {
              "value": "darkcyan",
              "description": "#008b8b - سماوي غامق"
            },
            {
              "value": "darkgoldenrod",
              "description": "#b8860b - ذهبي غامق"
            },
            {
              "value": "darkgray",
              "description": "#a9a9a9 - رمادي غامق"
            },
            {
              "value": "darkgreen",
              "description": "#006400 - أخضر غامق"
            },
            {
              "value": "darkkhaki",
              "description": "#bdb76b - كاكي غامق"
            },
            {
              "value": "darkmagenta",
              "description": "#8b008b - أرجواني غامق"
            },
            {
              "value": "darkolivegreen",
              "description": "#556b2f - زيتوني غامق"
            },
            {
              "value": "darkorange",
              "description": "#ff8c00 - برتقالي غامق"
            },
            {
              "value": "darkorchid",
              "description": "#9932cc - أوركيد غامق"
            },
            {
              "value": "darkred",
              "description": "#8b0000 - أحمر غامق"
            },
            {
              "value": "darksalmon",
              "description": "#e9967a - سلموني غامق"
            },
            {
              "value": "darkseagreen",
              "description": "#8fbc8f - أخضر بحري غامق"
            },
            {
              "value": "darkslateblue",
              "description": "#483d8b - أزرق أردوازي غامق"
            },
            {
              "value": "darkslategray",
              "description": "#2f4f4f - رمادي أردوازي غامق"
            },
            {
              "value": "darkturquoise",
              "description": "#00ced1 - فيروزي غامق"
            },
            {
              "value": "darkviolet",
              "description": "#9400d3 - بنفسجي غامق"
            },
            {
              "value": "deeppink",
              "description": "#ff1493 - وردي غامق"
            },
            {
              "value": "deepskyblue",
              "description": "#00bfff - أزرق سماوي غامق"
            },
            {
              "value": "dimgray",
              "description": "#696969 - رمادي خافت"
            },
            {
              "value": "dodgerblue",
              "description": "#1e90ff - أزرق دودجر"
            },
            {
              "value": "firebrick",
              "description": "#b22222 - طوبي"
            },
            {
              "value": "floralwhite",
              "description": "#fffaf0 - أبيض زهري"
            },
            {
              "value": "forestgreen",
              "description": "#228b22 - أخضر غابي"
            },
            {
              "value": "gainsboro",
              "description": "#dcdcdc - رمادي فاتح"
            },
            {
              "value": "ghostwhite",
              "description": "#f8f8ff - أبيض شبح"
            },
            {
              "value": "gold",
              "description": "#ffd700 - ذهبي"
            },
            {
              "value": "goldenrod",
              "description": "#daa520 - ذهبي داكن"
            },
            {
              "value": "greenyellow",
              "description": "#adff2f - أخضر مصفر"
            },
            {
              "value": "honeydew",
              "description": "#f0fff0 - عسلي"
            },
            {
              "value": "hotpink",
              "description": "#ff69b4 - وردي ساخن"
            },
            {
              "value": "indianred",
              "description": "#cd5c5c - أحمر هندي"
            },
            {
              "value": "indigo",
              "description": "#4b0082 - نيلي"
            },
            {
              "value": "ivory",
              "description": "#fffff0 - عاجي"
            },
            {
              "value": "khaki",
              "description": "#f0e68c - كاكي"
            },
            {
              "value": "lavender",
              "description": "#e6e6fa - خزامي"
            },
            {
              "value": "lavenderblush",
              "description": "#fff0f5 - خزامي وردي"
            },
            {
              "value": "lawngreen",
              "description": "#7cfc00 - أخضر عشبي"
            },
            {
              "value": "lemonchiffon",
              "description": "#fffacd - ليموني"
            },
            {
              "value": "lightblue",
              "description": "#add8e6 - أزرق فاتح"
            },
            {
              "value": "lightcoral",
              "description": "#f08080 - مرجاني فاتح"
            },
            {
              "value": "lightcyan",
              "description": "#e0ffff - سماوي فاتح"
            },
            {
              "value": "lightgoldenrodyellow",
              "description": "#fafad2 - ذهبي فاتح"
            },
            {
              "value": "lightgray",
              "description": "#d3d3d3 - رمادي فاتح"
            },
            {
              "value": "lightgreen",
              "description": "#90ee90 - أخضر فاتح"
            },
            {
              "value": "lightpink",
              "description": "#ffb6c1 - وردي فاتح"
            },
            {
              "value": "lightsalmon",
              "description": "#ffa07a - سلموني فاتح"
            },
            {
              "value": "lightseagreen",
              "description": "#20b2aa - أخضر بحري فاتح"
            },
            {
              "value": "lightskyblue",
              "description": "#87cefa - أزرق سمائي فاتح"
            },
            {
              "value": "lightslategray",
              "description": "#778899 - رمادي أردوازي فاتح"
            },
            {
              "value": "lightsteelblue",
              "description": "#b0c4de - أزرق فولاذي فاتح"
            },
            {
              "value": "lightyellow",
              "description": "#ffffe0 - أصفر فاتح"
            },
            {
              "value": "limegreen",
              "description": "#32cd32 - أخضر ليموني"
            },
            {
              "value": "linen",
              "description": "#faf0e6 - كتاني"
            },
            {
              "value": "mediumaquamarine",
              "description": "#66cdaa - زمردي متوسط"
            },
            {
              "value": "mediumblue",
              "description": "#0000cd - أزرق متوسط"
            },
            {
              "value": "mediumorchid",
              "description": "#ba55d3 - أوركيد متوسط"
            },
            {
              "value": "mediumpurple",
              "description": "#9370db - بنفسجي متوسط"
            },
            {
              "value": "mediumseagreen",
              "description": "#3cb371 - أخضر بحري متوسط"
            },
            {
              "value": "mediumslateblue",
              "description": "#7b68ee - أزرق أردوازي متوسط"
            },
            {
              "value": "mediumspringgreen",
              "description": "#00fa9a - ربيعي متوسط"
            },
            {
              "value": "mediumturquoise",
              "description": "#48d1cc - فيروزي متوسط"
            },
            {
              "value": "mediumvioletred",
              "description": "#c71585 - بنفسجي أحمر متوسط"
            },
            {
              "value": "midnightblue",
              "description": "#191970 - أزرق منتصف الليل"
            },
            {
              "value": "mintcream",
              "description": "#f5fffa - نعناعي"
            },
            {
              "value": "mistyrose",
              "description": "#ffe4e1 - وردي ضبابي"
            },
            {
              "value": "moccasin",
              "description": "#ffe4b5 - موكاسين"
            },
            {
              "value": "navajowhite",
              "description": "#ffdead - أبيض نافاجو"
            },
            {
              "value": "oldlace",
              "description": "#fdf5e6 - دانتيل قديم"
            },
            {
              "value": "olivedrab",
              "description": "#6b8e23 - زيتوني داكن"
            },
            {
              "value": "orangered",
              "description": "#ff4500 - أحمر برتقالي"
            },
            {
              "value": "orchid",
              "description": "#da70d6 - أوركيد"
            },
            {
              "value": "palegoldenrod",
              "description": "#eee8aa - ذهبي شاحب"
            },
            {
              "value": "palegreen",
              "description": "#98fb98 - أخضر شاحب"
            },
            {
              "value": "paleturquoise",
              "description": "#afeeee - فيروزي شاحب"
            },
            {
              "value": "palevioletred",
              "description": "#db7093 - بنفسجي أحمر شاحب"
            },
            {
              "value": "papayawhip",
              "description": "#ffefd5 - بابايا"
            },
            {
              "value": "peachpuff",
              "description": "#ffdab9 - خوخي"
            },
            {
              "value": "peru",
              "description": "#cd853f - بيرو"
            },
            {
              "value": "plum",
              "description": "#dda0dd - برقوقي"
            },
            {
              "value": "powderblue",
              "description": "#b0e0e6 - أزرق بودرة"
            },
            {
              "value": "rosybrown",
              "description": "#bc8f8f - بني وردي"
            },
            {
              "value": "royalblue",
              "description": "#4169e1 - أزرق ملكي"
            },
            {
              "value": "saddlebrown",
              "description": "#8b4513 - بني سرجي"
            },
            {
              "value": "salmon",
              "description": "#fa8072 - سلموني"
            },
            {
              "value": "sandybrown",
              "description": "#f4a460 - بني رملي"
            },
            {
              "value": "seagreen",
              "description": "#2e8b57 - أخضر بحري"
            },
            {
              "value": "seashell",
              "description": "#fff5ee - صدفية"
            },
            {
              "value": "sienna",
              "description": "#a0522d - سيينا"
            },
            {
              "value": "silver",
              "description": "#c0c0c0 - فضي"
            },
            {
              "value": "skyblue",
              "description": "#87ceeb - أزرق سماوي"
            },
            {
              "value": "slateblue",
              "description": "#6a5acd - أزرق أردوازي"
            },
            {
              "value": "slategray",
              "description": "#708090 - رمادي أردوازي"
            },
            {
              "value": "snow",
              "description": "#fffafa - ثلجي"
            },
            {
              "value": "springgreen",
              "description": "#00ff7f - ربيعي"
            },
            {
              "value": "steelblue",
              "description": "#4682b4 - أزرق فولاذي"
            },
            {
              "value": "tan",
              "description": "#d2b48c - تان"
            },
            {
              "value": "thistle",
              "description": "#d8bfd8 - شوكي"
            },
            {
              "value": "tomato",
              "description": "#ff6347 - طماطمي"
            },
            {
              "value": "turquoise",
              "description": "#40e0d0 - فيروزي"
            },
            {
              "value": "violet",
              "description": "#ee82ee - بنفسجي"
            },
            {
              "value": "wheat",
              "description": "#f5deb3 - قمحي"
            },
            {
              "value": "whitesmoke",
              "description": "#f5f5f5 - دخاني"
            },
            {
              "value": "yellowgreen",
              "description": "#9acd32 - أصفر مخضر"
            }
          ]
        }
      ]
    },
    {
      "tag": "hex-colors",
      "description": "نظام الألوان السداسي عشري (Hex) هو الأكثر شيوعاً في CSS",
      "properties": [
        {
          "name": "Hex Colors",
          "description": "تمثيل الألوان بـ 6 أرقام سداسية عشري (RRGGBB) أو 3 أرقام (RGB)",
          "values": [
            {
              "value": "#000000",
              "description": "أسود"
            },
            {
              "value": "#ffffff",
              "description": "أبيض"
            },
            {
              "value": "#ff0000",
              "description": "أحمر"
            },
            {
              "value": "#00ff00",
              "description": "أخضر"
            },
            {
              "value": "#0000ff",
              "description": "أزرق"
            },
            {
              "value": "#ffff00",
              "description": "أصفر"
            },
            {
              "value": "#ffa500",
              "description": "برتقالي"
            },
            {
              "value": "#800080",
              "description": "بنفسجي"
            },
            {
              "value": "#ffc0cb",
              "description": "وردي"
            },
            {
              "value": "#808080",
              "description": "رمادي"
            },
            {
              "value": "#a52a2a",
              "description": "بني"
            },
            {
              "value": "#007bff",
              "description": "أزرق Bootstrap"
            },
            {
              "value": "#28a745",
              "description": "أخضر Bootstrap"
            },
            {
              "value": "#dc3545",
              "description": "أحمر Bootstrap"
            },
            {
              "value": "#ffc107",
              "description": "أصفر Bootstrap"
            },
            {
              "value": "#6f42c1",
              "description": "بنفسجي Bootstrap"
            },
            {
              "value": "#f8f9fa",
              "description": "رمادي فاتح جداً"
            },
            {
              "value": "#e9ecef",
              "description": "رمادي فاتح"
            },
            {
              "value": "#dee2e6",
              "description": "رمادي متوسط فاتح"
            },
            {
              "value": "#ced4da",
              "description": "رمادي متوسط"
            },
            {
              "value": "#adb5bd",
              "description": "رمادي متوسط غامق"
            },
            {
              "value": "#6c757d",
              "description": "رمادي غامق"
            },
            {
              "value": "#343a40",
              "description": "رمادي غامق جداً"
            },
            {
              "value": "#ff6b6b",
              "description": "أحمر فاتح"
            },
            {
              "value": "#feca57",
              "description": "أصفر دافئ"
            },
            {
              "value": "#48dbfb",
              "description": "أزرق فاتح"
            },
            {
              "value": "#ff9ff3",
              "description": "وردي فاتح"
            },
            {
              "value": "#54a0ff",
              "description": "أزرق متوسط"
            },
            {
              "value": "#5f27cd",
              "description": "بنفسجي غامق"
            },
            {
              "value": "#f368e0",
              "description": "وردي غامق"
            },
            {
              "value": "#ff9f43",
              "description": "برتقالي فاتح"
            },
            {
              "value": "#10ac84",
              "description": "أخضر زمردي"
            },
            {
              "value": "#ee5a24",
              "description": "أحمر برتقالي"
            },
            {
              "value": "#f00",
              "description": "#ff0000 - أحمر (مختصر)"
            },
            {
              "value": "#0f0",
              "description": "#00ff00 - أخضر (مختصر)"
            },
            {
              "value": "#00f",
              "description": "#0000ff - أزرق (مختصر)"
            },
            {
              "value": "#000",
              "description": "#000000 - أسود (مختصر)"
            },
            {
              "value": "#fff",
              "description": "#ffffff - أبيض (مختصر)"
            },
            {
              "value": "#ff0",
              "description": "#ffff00 - أصفر (مختصر)"
            }
          ]
        },
        {
          "name": "Hex مع شفافية (8 أرقام)",
          "description": "تمثيل الألوان بـ 8 أرقام سداسية عشري (RRGGBBAA)",
          "values": [
            {
              "value": "#ff0000ff",
              "description": "أحمر معتم"
            },
            {
              "value": "#ff000080",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "#ff000000",
              "description": "أحمر شفاف بالكامل"
            },
            {
              "value": "#00000080",
              "description": "أسود شفاف 50%"
            },
            {
              "value": "#ffffff80",
              "description": "أبيض شفاف 50%"
            }
          ]
        }
      ]
    },
    {
      "tag": "rgb-colors",
      "description": "نظام الألوان RGB (Red, Green, Blue)",
      "properties": [
        {
          "name": "RGB Colors",
          "description": "تمثيل الألوان بقيم الأحمر والأخضر والأزرق (0-255)",
          "values": [
            {
              "value": "rgb(0, 0, 0)",
              "description": "أسود"
            },
            {
              "value": "rgb(255, 255, 255)",
              "description": "أبيض"
            },
            {
              "value": "rgb(255, 0, 0)",
              "description": "أحمر"
            },
            {
              "value": "rgb(0, 255, 0)",
              "description": "أخضر"
            },
            {
              "value": "rgb(0, 0, 255)",
              "description": "أزرق"
            },
            {
              "value": "rgb(255, 255, 0)",
              "description": "أصفر"
            },
            {
              "value": "rgb(255, 165, 0)",
              "description": "برتقالي"
            },
            {
              "value": "rgb(128, 0, 128)",
              "description": "بنفسجي"
            },
            {
              "value": "rgb(255, 192, 203)",
              "description": "وردي"
            },
            {
              "value": "rgb(128, 128, 128)",
              "description": "رمادي"
            },
            {
              "value": "rgb(165, 42, 42)",
              "description": "بني"
            },
            {
              "value": "rgb(0, 123, 255)",
              "description": "أزرق Bootstrap"
            },
            {
              "value": "rgb(40, 167, 69)",
              "description": "أخضر Bootstrap"
            },
            {
              "value": "rgb(220, 53, 69)",
              "description": "أحمر Bootstrap"
            },
            {
              "value": "rgb(255, 193, 7)",
              "description": "أصفر Bootstrap"
            },
            {
              "value": "rgb(111, 66, 193)",
              "description": "بنفسجي Bootstrap"
            }
          ]
        },
        {
          "name": "RGBA Colors",
          "description": "RGB مع شفافية (Alpha 0-1)",
          "values": [
            {
              "value": "rgba(255, 0, 0, 0.5)",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "rgba(0, 0, 255, 0.3)",
              "description": "أزرق شفاف 30%"
            },
            {
              "value": "rgba(0, 0, 0, 0.1)",
              "description": "أسود شفاف 10%"
            },
            {
              "value": "rgba(255, 255, 255, 0.8)",
              "description": "أبيض شفاف 80%"
            }
          ]
        }
      ]
    },
    {
      "tag": "hsl-colors",
      "description": "نظام الألوان HSL (Hue, Saturation, Lightness)",
      "properties": [
        {
          "name": "HSL Colors",
          "description": "تمثيل الألوان بالتدرج (0-360)، التشبع (0-100%)، والإضاءة (0-100%)",
          "values": [
            {
              "value": "hsl(0, 0%, 0%)",
              "description": "أسود"
            },
            {
              "value": "hsl(0, 0%, 100%)",
              "description": "أبيض"
            },
            {
              "value": "hsl(0, 100%, 50%)",
              "description": "أحمر"
            },
            {
              "value": "hsl(120, 100%, 50%)",
              "description": "أخضر"
            },
            {
              "value": "hsl(240, 100%, 50%)",
              "description": "أزرق"
            },
            {
              "value": "hsl(60, 100%, 50%)",
              "description": "أصفر"
            },
            {
              "value": "hsl(30, 100%, 50%)",
              "description": "برتقالي"
            },
            {
              "value": "hsl(300, 100%, 50%)",
              "description": "أرجواني"
            },
            {
              "value": "hsl(350, 100%, 50%)",
              "description": "وردي"
            },
            {
              "value": "hsl(0, 0%, 50%)",
              "description": "رمادي"
            },
            {
              "value": "hsl(0, 0%, 20%)",
              "description": "رمادي غامق"
            },
            {
              "value": "hsl(0, 0%, 80%)",
              "description": "رمادي فاتح"
            },
            {
              "value": "hsl(210, 100%, 50%)",
              "description": "أزرق Bootstrap"
            },
            {
              "value": "hsl(145, 60%, 40%)",
              "description": "أخضر Bootstrap"
            },
            {
              "value": "hsl(355, 70%, 50%)",
              "description": "أحمر Bootstrap"
            }
          ]
        },
        {
          "name": "HSLA Colors",
          "description": "HSL مع شفافية (Alpha 0-1)",
          "values": [
            {
              "value": "hsla(0, 100%, 50%, 0.5)",
              "description": "أحمر شفاف 50%"
            },
            {
              "value": "hsla(240, 100%, 50%, 0.3)",
              "description": "أزرق شفاف 30%"
            },
            {
              "value": "hsla(0, 0%, 0%, 0.2)",
              "description": "أسود شفاف 20%"
            }
          ]
        }
      ]
    },
    {
      "tag": "hwb-colors",
      "description": "نظام الألوان HWB (Hue, Whiteness, Blackness)",
      "properties": [
        {
          "name": "HWB Colors",
          "description": "تمثيل الألوان بالتدرج (0-360)، البياض (0-100%)، والسواد (0-100%)",
          "values": [
            {
              "value": "hwb(0, 0%, 0%)",
              "description": "أحمر"
            },
            {
              "value": "hwb(0, 50%, 0%)",
              "description": "وردي"
            },
            {
              "value": "hwb(0, 0%, 50%)",
              "description": "أحمر داكن"
            },
            {
              "value": "hwb(120, 0%, 0%)",
              "description": "أخضر"
            },
            {
              "value": "hwb(240, 0%, 0%)",
              "description": "أزرق"
            },
            {
              "value": "hwb(60, 0%, 0%)",
              "description": "أصفر"
            }
          ]
        }
      ]
    },
    {
      "tag": "modern-color-systems",
      "description": "أنظمة الألوان الحديثة توفر دقة أعلى وألواناً أكثر حيوية",
      "properties": [
        {
          "name": "Lab Colors",
          "description": "نظام Lab يعتمد على إدراك العين البشرية، دقيق جداً",
          "values": [
            {
              "value": "lab(0% 0 0)",
              "description": "أسود"
            },
            {
              "value": "lab(100% 0 0)",
              "description": "أبيض"
            },
            {
              "value": "lab(50% 80 40)",
              "description": "أحمر"
            },
            {
              "value": "lab(50% -80 40)",
              "description": "أخضر"
            },
            {
              "value": "lab(30% 50 -20)",
              "description": "أزرق مائل"
            },
            {
              "value": "lab(90% -40 30)",
              "description": "أخضر فاتح"
            }
          ]
        },
        {
          "name": "LCH Colors",
          "description": "نظام LCH (Lightness, Chroma, Hue) - دقيق وبديهي",
          "values": [
            {
              "value": "lch(0% 0 0)",
              "description": "أسود"
            },
            {
              "value": "lch(100% 0 0)",
              "description": "أبيض"
            },
            {
              "value": "lch(50% 80 20)",
              "description": "برتقالي"
            },
            {
              "value": "lch(50% 80 300)",
              "description": "بنفسجي"
            },
            {
              "value": "lch(60% 60 120)",
              "description": "أخضر"
            },
            {
              "value": "lch(60% 60 240)",
              "description": "أزرق"
            }
          ]
        },
        {
          "name": "OKLCH Colors",
          "description": "نظام OKLCH - نسخة محسّنة من LCH مع انتقالات أفضل",
          "values": [
            {
              "value": "oklch(0% 0 0)",
              "description": "أسود"
            },
            {
              "value": "oklch(100% 0 0)",
              "description": "أبيض"
            },
            {
              "value": "oklch(0.5 0.2 20)",
              "description": "برتقالي"
            },
            {
              "value": "oklch(0.5 0.2 300)",
              "description": "بنفسجي"
            }
          ]
        }
      ]
    },
    {
      "tag": "color-spaces",
      "description": "مساحات الألوان المختلفة في CSS",
      "properties": [
        {
          "name": "Color Spaces",
          "description": "مساحات الألوان المتاحة في CSS",
          "values": [
            {
              "value": "srgb",
              "description": "مساحة الألوان القياسية - الأكثر شيوعاً"
            },
            {
              "value": "display-p3",
              "description": "مساحة أوسع من sRGB - ألوان أكثر حيوية"
            },
            {
              "value": "lab",
              "description": "مساحة Lab - دقيقة جداً"
            },
            {
              "value": "lch",
              "description": "مساحة LCH - دقيقة وبديهية"
            },
            {
              "value": "oklab",
              "description": "مساحة OKLab - محسّنة"
            },
            {
              "value": "oklch",
              "description": "مساحة OKLCH - محسّنة"
            }
          ]
        },
        {
          "name": "color() مع مساحة",
          "description": "استخدام دالة color() لتحديد مساحة لونية",
          "values": [
            {
              "value": "color(display-p3 1 0 0)",
              "description": "أحمر في Display P3"
            },
            {
              "value": "color(display-p3 0 1 0)",
              "description": "أخضر في Display P3"
            },
            {
              "value": "color(display-p3 0 0 1)",
              "description": "أزرق في Display P3"
            },
            {
              "value": "color(srgb 1 0 0)",
              "description": "أحمر في sRGB"
            }
          ]
        }
      ]
    },
    {
      "tag": "additional-color-functions",
      "description": "دوال ألوان إضافية",
      "properties": [
        {
          "name": "color-mix()",
          "description": "تخلط لونين معاً بنسب محددة",
          "values": [
            {
              "value": "color-mix(in srgb, red 50%, blue 50%)",
              "description": "مزيج 50/50"
            },
            {
              "value": "color-mix(in srgb, red 70%, blue 30%)",
              "description": "أحمر أكثر"
            },
            {
              "value": "color-mix(in lab, red 50%, blue 50%)",
              "description": "مزيج في Lab"
            }
          ]
        },
        {
          "name": "contrast-color()",
          "description": "تختار لوناً يتباين مع لون الخلفية (لإمكانية الوصول)",
          "values": [
            {
              "value": "contrast-color(black)",
              "description": "تختار لوناً يتباين مع الأسود"
            },
            {
              "value": "contrast-color(white)",
              "description": "تختار لوناً يتباين مع الأبيض"
            }
          ]
        },
        {
          "name": "light-dark()",
          "description": "تختار لوناً حسب تفضيل الوضع (فاتح أو داكن) بناءً على prefers-color-scheme، مفيدة جداً للثيمات الديناميكية دون الحاجة لـ @media",
          "values": [
            {
              "value": "light-dark(black, white)",
              "description": "أسود في الوضع الفاتح، أبيض في الداكن"
            },
            {
              "value": "light-dark(#ffffff, #1a1a2e)",
              "description": "أبيض في الفاتح، داكن في الداكن"
            }
          ]
        }
      ]
    },
    {
      "tag": "color-comparison",
      "description": "مقارنة بين أنظمة الألوان المختلفة",
      "properties": [
        {
          "name": "متى تستخدم كل نظام؟",
          "description": "إرشادات لاختيار نظام الألوان المناسب",
          "values": [
            {
              "value": "Hex",
              "description": "الأكثر شيوعاً - مناسب للاستخدام العام"
            },
            {
              "value": "RGB",
              "description": "مفيد للبرمجة والتلاعب بالألوان"
            },
            {
              "value": "HSL",
              "description": "مفيد لتعديل الإضاءة والتشبع"
            },
            {
              "value": "HWB",
              "description": "بديهي مثل HSL"
            },
            {
              "value": "Lab / LCH",
              "description": "دقيق جداً - مناسب للانتقالات"
            },
            {
              "value": "Display P3",
              "description": "لألوان أكثر حيوية"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام أنظمة الألوان",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الألوان",
          "values": [
            {
              "value": "استخدم Hex للكفاءة",
              "description": "Hex أصغر حجماً وأسرع في التحميل"
            },
            {
              "value": "استخدم HSL للتعديل",
              "description": "يسهل تغيير الإضاءة والتشبع"
            },
            {
              "value": "استخدم currentColor للمرونة",
              "description": "يجعل الألوان متناسقة"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل الألوان قابلة للوصول",
          "values": [
            {
              "value": "تحقق من التباين",
              "description": "استخدم أدوات لفحص نسبة التباين 4.5:1"
            },
            {
              "value": "استخدم light-dark()",
              "description": "للتبديل بين الوضعين بسهولة"
            },
            {
              "value": "لا تعتمد على اللون فقط",
              "description": "استخدم إشارات إضافية"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام الألوان",
          "values": [
            {
              "value": "نسيان # في Hex",
              "description": "ff0000 (خاطئ) vs #ff0000 (صحيح)"
            },
            {
              "value": "استخدام RGB بدون أرقام",
              "description": "rgb(255, 0, 0) صحيح"
            },
            {
              "value": "نسيان الفواصل في HSL",
              "description": "hsl(0 100% 50%) vs hsl(0, 100%, 50%)"
            }
          ]
        }
      ]
    }
  ],
  "customProperties": [
    {
      "tag": "custom-properties",
      "description": "المتغيرات المخصصة (المعروفة أيضاً بـ CSS Variables) تبدأ بـ -- وتستخدم مع var()، تسمح بتخزين قيم CSS وإعادة استخدامها",
      "properties": [
        {
          "name": "--*",
          "description": "أي اسم متغير مخصص يبدأ بشرطتين (--)، يمكن تخزين أي قيمة CSS فيه من ألوان، أحجام، خطوط، وغيرها",
          "values": [
            {
              "value": "--primary-color: #007bff",
              "description": "متغير لون أساسي - أزرق Bootstrap"
            },
            {
              "value": "--secondary-color: #6c757d",
              "description": "متغير لون ثانوي - رمادي"
            },
            {
              "value": "--success-color: #28a745",
              "description": "متغير لون نجاح - أخضر"
            },
            {
              "value": "--danger-color: #dc3545",
              "description": "متغير لون خطر - أحمر"
            },
            {
              "value": "--warning-color: #ffc107",
              "description": "متغير لون تحذير - أصفر"
            },
            {
              "value": "--info-color: #17a2b8",
              "description": "متغير لون معلومات - أزرق فيروزي"
            },
            {
              "value": "--light-color: #f8f9fa",
              "description": "متغير لون فاتح"
            },
            {
              "value": "--dark-color: #343a40",
              "description": "متغير لون غامق"
            },
            {
              "value": "--text-color: #333333",
              "description": "متغير لون النص الرئيسي"
            },
            {
              "value": "--bg-color: #ffffff",
              "description": "متغير لون الخلفية الرئيسي"
            },
            {
              "value": "--link-color: #0066cc",
              "description": "متغير لون الروابط"
            },
            {
              "value": "--font-size-base: 16px",
              "description": "متغير حجم الخط الأساسي"
            },
            {
              "value": "--font-size-small: 0.875rem",
              "description": "متغير حجم الخط الصغير"
            },
            {
              "value": "--font-size-large: 1.25rem",
              "description": "متغير حجم الخط الكبير"
            },
            {
              "value": "--font-size-h1: 2.5rem",
              "description": "متغير حجم عنوان h1"
            },
            {
              "value": "--font-size-h2: 2rem",
              "description": "متغير حجم عنوان h2"
            },
            {
              "value": "--font-size-h3: 1.75rem",
              "description": "متغير حجم عنوان h3"
            },
            {
              "value": "--font-size-h4: 1.5rem",
              "description": "متغير حجم عنوان h4"
            },
            {
              "value": "--font-size-h5: 1.25rem",
              "description": "متغير حجم عنوان h5"
            },
            {
              "value": "--font-size-h6: 1rem",
              "description": "متغير حجم عنوان h6"
            },
            {
              "value": "--spacing-unit: 8px",
              "description": "متغير وحدة المسافات الأساسية"
            },
            {
              "value": "--spacing-xs: 4px",
              "description": "متغير مسافة صغيرة جداً"
            },
            {
              "value": "--spacing-sm: 8px",
              "description": "متغير مسافة صغيرة"
            },
            {
              "value": "--spacing-md: 16px",
              "description": "متغير مسافة متوسطة"
            },
            {
              "value": "--spacing-lg: 24px",
              "description": "متغير مسافة كبيرة"
            },
            {
              "value": "--spacing-xl: 32px",
              "description": "متغير مسافة كبيرة جداً"
            },
            {
              "value": "--spacing-xxl: 48px",
              "description": "متغير مسافة كبيرة جداً"
            },
            {
              "value": "--border-radius-sm: 4px",
              "description": "متغير انحناء صغير"
            },
            {
              "value": "--border-radius-md: 8px",
              "description": "متغير انحناء متوسط"
            },
            {
              "value": "--border-radius-lg: 12px",
              "description": "متغير انحناء كبير"
            },
            {
              "value": "--border-radius-xl: 20px",
              "description": "متغير انحناء كبير جداً"
            },
            {
              "value": "--border-radius-full: 50%",
              "description": "متغير انحناء كامل (دائري)"
            },
            {
              "value": "--shadow-sm: 0 2px 4px rgba(0,0,0,0.05)",
              "description": "متغير ظل صغير"
            },
            {
              "value": "--shadow-md: 0 4px 12px rgba(0,0,0,0.1)",
              "description": "متغير ظل متوسط"
            },
            {
              "value": "--shadow-lg: 0 8px 24px rgba(0,0,0,0.15)",
              "description": "متغير ظل كبير"
            },
            {
              "value": "--shadow-xl: 0 16px 48px rgba(0,0,0,0.2)",
              "description": "متغير ظل كبير جداً"
            },
            {
              "value": "--font-family-sans: 'Segoe UI', system-ui, -apple-system, sans-serif",
              "description": "متغير خط sans-serif"
            },
            {
              "value": "--font-family-serif: 'Georgia', 'Times New Roman', serif",
              "description": "متغير خط serif"
            },
            {
              "value": "--font-family-mono: 'Consolas', 'Courier New', monospace",
              "description": "متغير خط أحادي التباعد"
            },
            {
              "value": "--font-family-arabic: 'Noto Naskh Arabic', 'Scheherazade', serif",
              "description": "متغير خط عربي"
            },
            {
              "value": "--font-family-english: 'Inter', 'Roboto', sans-serif",
              "description": "متغير خط إنجليزي"
            },
            {
              "value": "--font-weight-light: 300",
              "description": "متغير وزن خط خفيف"
            },
            {
              "value": "--font-weight-normal: 400",
              "description": "متغير وزن خط عادي"
            },
            {
              "value": "--font-weight-medium: 500",
              "description": "متغير وزن خط متوسط"
            },
            {
              "value": "--font-weight-semibold: 600",
              "description": "متغير وزن خط شبه غامق"
            },
            {
              "value": "--font-weight-bold: 700",
              "description": "متغير وزن خط غامق"
            },
            {
              "value": "--font-weight-extrabold: 800",
              "description": "متغير وزن خط غامق جداً"
            },
            {
              "value": "--breakpoint-xs: 0px",
              "description": "متغير نقطة توقف صغيرة جداً"
            },
            {
              "value": "--breakpoint-sm: 576px",
              "description": "متغير نقطة توقف صغيرة (جوال)"
            },
            {
              "value": "--breakpoint-md: 768px",
              "description": "متغير نقطة توقف متوسطة (تابلت)"
            },
            {
              "value": "--breakpoint-lg: 992px",
              "description": "متغير نقطة توقف كبيرة (كمبيوتر)"
            },
            {
              "value": "--breakpoint-xl: 1200px",
              "description": "متغير نقطة توقف كبيرة جداً"
            },
            {
              "value": "--breakpoint-xxl: 1400px",
              "description": "متغير نقطة توقف كبيرة جداً"
            },
            {
              "value": "--transition-fast: 0.15s",
              "description": "متغير سرعة انتقال سريع"
            },
            {
              "value": "--transition-normal: 0.3s",
              "description": "متغير سرعة انتقال عادي"
            },
            {
              "value": "--transition-slow: 0.5s",
              "description": "متغير سرعة انتقال بطيء"
            },
            {
              "value": "--transition-very-slow: 0.8s",
              "description": "متغير سرعة انتقال بطيء جداً"
            },
            {
              "value": "--transition-ease: ease-in-out",
              "description": "متغير دالة انتقال"
            },
            {
              "value": "--z-index-dropdown: 1000",
              "description": "متغير ترتيب القوائم المنسدلة"
            },
            {
              "value": "--z-index-sticky: 1020",
              "description": "متغير ترتيب العناصر الثابتة"
            },
            {
              "value": "--z-index-modal: 1050",
              "description": "متغير ترتيب النوافذ المنبثقة"
            },
            {
              "value": "--z-index-tooltip: 1070",
              "description": "متغير ترتيب التلميحات"
            },
            {
              "value": "--z-index-popover: 1080",
              "description": "متغير ترتيب النوافذ الصغيرة"
            },
            {
              "value": "--z-index-toast: 1090",
              "description": "متغير ترتيب الإشعارات"
            },
            {
              "value": "--z-index-overlay: 1100",
              "description": "متغير ترتيب الطبقات العلوية"
            },
            {
              "value": "--header-height: 60px",
              "description": "متغير ارتفاع الرأس"
            },
            {
              "value": "--footer-height: 80px",
              "description": "متغير ارتفاع التذييل"
            },
            {
              "value": "--sidebar-width: 280px",
              "description": "متغير عرض الشريط الجانبي"
            },
            {
              "value": "--container-width: 1200px",
              "description": "متغير عرض الحاوية"
            },
            {
              "value": "--content-max-width: 800px",
              "description": "متغير أقصى عرض للمحتوى"
            },
            {
              "value": "--dark-bg: #1a1a2e",
              "description": "متغير خلفية داكنة"
            },
            {
              "value": "--dark-surface: #16213e",
              "description": "متغير سطح داكن"
            },
            {
              "value": "--dark-text: #eaeaea",
              "description": "متغير نص داكن"
            },
            {
              "value": "--dark-border: #2a2a4a",
              "description": "متغير حافة داكنة"
            },
            {
              "value": "--light-bg: #ffffff",
              "description": "متغير خلفية فاتحة"
            },
            {
              "value": "--light-surface: #f8f9fa",
              "description": "متغير سطح فاتح"
            },
            {
              "value": "--light-text: #212529",
              "description": "متغير نص فاتح"
            },
            {
              "value": "--light-border: #dee2e6",
              "description": "متغير حافة فاتحة"
            },
            {
              "value": "--opacity-disabled: 0.65",
              "description": "متغير شفافية العناصر المعطلة"
            },
            {
              "value": "--opacity-hover: 0.8",
              "description": "متغير شفافية عند التمرير"
            },
            {
              "value": "--gap-columns: 20px",
              "description": "متغير الفجوة بين الأعمدة"
            },
            {
              "value": "--gap-rows: 16px",
              "description": "متغير الفجوة بين الصفوف"
            },
            {
              "value": "--border-width-default: 1px",
              "description": "متغير سمك الحافة الافتراضي"
            }
          ],
          "freeInput": true,
          "isCustomProperty": true
        }
      ]
    },
    {
      "tag": "var-function",
      "description": "دالة تستدعي قيمة متغير مخصص، يمكن استخدامها في أي خاصية CSS، وتدعم قيماً احتياطية",
      "properties": [
        {
          "name": "var()",
          "description": "دالة تستدعي قيمة متغير مخصص، يمكن استخدامها في أي خاصية CSS مع دعم القيم الاحتياطية",
          "values": [
            {
              "value": "color: var(--primary-color)",
              "description": "يستخدم قيمة المتغير --primary-color كلون للنص"
            },
            {
              "value": "background-color: var(--bg-color)",
              "description": "يستخدم قيمة المتغير --bg-color كلون خلفية"
            },
            {
              "value": "font-size: var(--font-size-base)",
              "description": "يستخدم قيمة المتغير --font-size-base كحجم خط"
            },
            {
              "value": "margin: var(--spacing-md)",
              "description": "يستخدم قيمة المتغير --spacing-md كهامش"
            },
            {
              "value": "border-radius: var(--border-radius-md)",
              "description": "يستخدم قيمة المتغير --border-radius-md"
            },
            {
              "value": "box-shadow: var(--shadow-md)",
              "description": "يستخدم قيمة المتغير --shadow-md كظل"
            },
            {
              "value": "padding: var(--spacing-lg) var(--spacing-md)",
              "description": "يستخدم متغيرين في نفس القيمة"
            },
            {
              "value": "color: var(--primary-color, #007bff)",
              "description": "يستخدم المتغير، وإن لم يُعرف يستخدم #007bff"
            },
            {
              "value": "font-size: var(--font-size-base, 16px)",
              "description": "يستخدم المتغير، وإن لم يُعرف يستخدم 16px"
            },
            {
              "value": "margin: var(--spacing-unit, 8px)",
              "description": "يستخدم المتغير، وإن لم يُعرف يستخدم 8px"
            },
            {
              "value": "box-shadow: var(--shadow, none)",
              "description": "يستخدم المتغير، وإن لم يُعرف يستخدم none"
            },
            {
              "value": "z-index: var(--z-index-dropdown, 100)",
              "description": "يستخدم المتغير، وإن لم يُعرف يستخدم 100"
            },
            {
              "value": "font-family: var(--font-family-sans, 'Arial', sans-serif)",
              "description": "يستخدم المتغير، وإن لم يُعرف يستخدم Arial"
            },
            {
              "value": "color: var(--primary-color, var(--secondary-color, blue))",
              "description": "يحاول المتغير الأول، ثم الثاني، ثم القيمة الافتراضية"
            },
            {
              "value": "font-size: var(--font-size-large, var(--font-size-base, 16px))",
              "description": "احتياطي متداخل مع متغيرين"
            },
            {
              "value": "margin: var(--spacing-xl, var(--spacing-lg, 20px))",
              "description": "احتياطي متداخل ثلاثي المستويات"
            },
            {
              "value": "width: calc(100% - var(--sidebar-width, 280px))",
              "description": "يحسب قيمة باستخدام المتغير"
            },
            {
              "value": "margin: calc(var(--spacing-unit) * 2)",
              "description": "يحسب ضعف قيمة المتغير"
            },
            {
              "value": "padding: calc(var(--spacing-md) + var(--spacing-sm))",
              "description": "يجمع متغيرين"
            },
            {
              "value": "font-size: calc(var(--font-size-base) * 1.25)",
              "description": "يكبر الخط باستخدام عملية حسابية"
            },
            {
              "value": "font-size: clamp(14px, var(--font-size-base), 24px)",
              "description": "يحدد نطاقاً للقيمة مع المتغير"
            },
            {
              "value": "width: clamp(200px, var(--container-width, 800px), 100%)",
              "description": "يحدد نطاقاً للعرض"
            },
            {
              "value": "width: min(100%, var(--container-width, 800px))",
              "description": "يختار القيمة الأصغر"
            },
            {
              "value": "width: max(200px, var(--sidebar-width, 280px))",
              "description": "يختار القيمة الأكبر"
            },
            {
              "value": "transition: all var(--transition-normal) var(--transition-ease)",
              "description": "يستخدم متغيرين في الانتقال"
            },
            {
              "value": "gap: var(--gap-columns, 20px) var(--gap-rows, 16px)",
              "description": "يستخدم متغيرين للفجوات"
            },
            {
              "value": "background: linear-gradient(var(--gradient-start, #fff), var(--gradient-end, #000))",
              "description": "يستخدم متغيرين للتدرج"
            },
            {
              "value": "border: var(--border-width-default, 1px) solid var(--border-color, #ccc)",
              "description": "يستخدم متغيرين للحدود"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "at-property",
      "description": "قاعدة @property تسمح بتعريف متغير مخصص بنوع بيانات محدد (مثل رقم أو لون) وقيمة أولية، وتحديد هل يرث القيمة من الأب أم لا، مما يتيح دمجه بسلاسة مع الحركات والانتقالات",
      "properties": [
        {
          "name": "@property (ملاحظة)",
          "description": "قاعدة @property تسمح بتعريف متغير مخصص بنوع بيانات محدد، مما يمكن المتصفح من التعامل معه بشكل أفضل في الانتقالات والحركات",
          "values": [
            {
              "value": "syntax: '<color>'",
              "description": "يحدد أن المتغير من نوع لون - يمكن استخدامه مع transition"
            },
            {
              "value": "syntax: '<length>'",
              "description": "يحدد أن المتغير من نوع طول (px, em, rem, %)"
            },
            {
              "value": "syntax: '<number>'",
              "description": "يحدد أن المتغير من نوع رقم"
            },
            {
              "value": "syntax: '<percentage>'",
              "description": "يحدد أن المتغير من نوع نسبة مئوية"
            },
            {
              "value": "syntax: '<length-percentage>'",
              "description": "يحدد أن المتغير من نوع طول أو نسبة مئوية"
            },
            {
              "value": "syntax: '<angle>'",
              "description": "يحدد أن المتغير من نوع زاوية (deg, rad)"
            },
            {
              "value": "syntax: '<time>'",
              "description": "يحدد أن المتغير من نوع وقت (s, ms)"
            },
            {
              "value": "syntax: '<integer>'",
              "description": "يحدد أن المتغير من نوع عدد صحيح"
            },
            {
              "value": "syntax: '<url>'",
              "description": "يحدد أن المتغير من نوع رابط"
            },
            {
              "value": "syntax: '<custom-ident>'",
              "description": "يحدد أن المتغير من نوع معرف مخصص"
            },
            {
              "value": "syntax: '* | <color> | <length> | <number> | <percentage> | <length-percentage> | <angle> | <time> | <integer> | <url> | <custom-ident>'",
              "description": "كل الأنواع المدعومة"
            },
            {
              "value": "inherits: true",
              "description": "يرث القيمة من العنصر الأب - السلوك الافتراضي للمتغيرات"
            },
            {
              "value": "inherits: false",
              "description": "لا يرث القيمة من العنصر الأب - يحافظ على قيمته المستقلة"
            },
            {
              "value": "initial-value: #000000",
              "description": "القيمة الابتدائية إذا لم تُحدد قيمة للمتغير"
            },
            {
              "value": "initial-value: 16px",
              "description": "قيمة أولية 16 بكسل"
            },
            {
              "value": "initial-value: 0",
              "description": "قيمة أولية 0"
            },
            {
              "value": "initial-value: 100%",
              "description": "قيمة أولية 100%"
            },
            {
              "value": "initial-value: 0deg",
              "description": "قيمة أولية 0 درجة"
            },
            {
              "value": "initial-value: 0s",
              "description": "قيمة أولية 0 ثانية"
            },
            {
              "value": "@property --primary-color { syntax: '<color>'; inherits: true; initial-value: #007bff; }",
              "description": "تعريف متغير لون مع وراثة وقيمة أولية"
            },
            {
              "value": "@property --spacing-unit { syntax: '<length>'; inherits: false; initial-value: 8px; }",
              "description": "تعريف متغير طول بدون وراثة"
            },
            {
              "value": "@property --animation-speed { syntax: '<time>'; inherits: true; initial-value: 0.3s; }",
              "description": "تعريف متغير وقت مع وراثة"
            },
            {
              "value": "@property --opacity-level { syntax: '<number>'; inherits: false; initial-value: 1; }",
              "description": "تعريف متغير رقم بدون وراثة"
            },
            {
              "value": "@property --rotation { syntax: '<angle>'; inherits: true; initial-value: 0deg; }",
              "description": "تعريف متغير زاوية مع وراثة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "scope-inheritance",
      "description": "المتغيرات المخصصة تُعرَّف عادة على :root لتكون متاحة عالمياً في كل الصفحة، لكن يمكن إعادة تعريفها داخل أي محدد (selector) لتغيير قيمتها في نطاق ذلك العنصر وأبنائه فقط",
      "properties": [
        {
          "name": "النطاق والوراثة",
          "description": "المتغيرات تتبع قواعد الوراثة في CSS: يمكن تعريفها في أي عنصر وتورث للأبناء، ويمكن تجاوزها في أي مستوى",
          "values": [
            {
              "value": ":root { --primary-color: #007bff; --font-size: 16px; --spacing: 8px; }",
              "description": "تعريف عام على مستوى الصفحة - متاح في كل العناصر"
            },
            {
              "value": ":root { --theme: 'light'; }",
              "description": "تعريف متغير موضوع عام"
            },
            {
              "value": ":root { --brand-color: #ff6b6b; --brand-font: 'Poppins', sans-serif; }",
              "description": "تعريف متغيرات العلامة التجارية"
            },
            {
              "value": ".dark-theme { --primary-color: #ffffff; --bg-color: #1a1a2e; }",
              "description": "إعادة تعريف داخل نطاق dark-theme فقط"
            },
            {
              "value": ".light-theme { --primary-color: #000000; --bg-color: #ffffff; }",
              "description": "إعادة تعريف داخل نطاق light-theme"
            },
            {
              "value": ".header { --spacing: 16px; --font-size: 18px; }",
              "description": "تعريف متغيرات خاصة بالرأس"
            },
            {
              "value": ".footer { --spacing: 8px; --font-size: 14px; }",
              "description": "تعريف متغيرات خاصة بالتذييل"
            },
            {
              "value": ".sidebar { --width: 280px; --bg-color: #f8f9fa; }",
              "description": "تعريف متغيرات خاصة بالشريط الجانبي"
            },
            {
              "value": ".container { --max-width: 1200px; --padding: 20px; }",
              "description": "تعريف متغيرات خاصة بالحاوية"
            },
            {
              "value": "@media (min-width: 768px) { :root { --font-size: 18px; --spacing: 12px; } }",
              "description": "تغيير قيم المتغيرات في الشاشات المتوسطة"
            },
            {
              "value": "@media (max-width: 576px) { :root { --font-size: 14px; --spacing: 6px; } }",
              "description": "تغيير قيم المتغيرات في الشاشات الصغيرة"
            },
            {
              "value": "@media (prefers-color-scheme: dark) { :root { --bg-color: #1a1a2e; --text-color: #eaeaea; } }",
              "description": "تغيير قيم المتغيرات في الوضع الداكن"
            },
            {
              "value": "@media (prefers-color-scheme: light) { :root { --bg-color: #ffffff; --text-color: #212529; } }",
              "description": "تغيير قيم المتغيرات في الوضع الفاتح"
            },
            {
              "value": "[data-theme='dark'] { --primary-color: #64b5f6; --secondary-color: #90a4ae; }",
              "description": "تعريف متغيرات في عنصر يحمل data-theme='dark'"
            },
            {
              "value": "[data-theme='light'] { --primary-color: #1976d2; --secondary-color: #78909c; }",
              "description": "تعريف متغيرات في عنصر يحمل data-theme='light'"
            },
            {
              "value": ".parent { --color: red; } .parent .child { --color: blue; }",
              "description": "تجاوز قيمة المتغير في العنصر الفرعي"
            },
            {
              "value": ".container { --padding: 20px; } .container .inner { --padding: 10px; }",
              "description": "تجاوز متغير padding في العنصر الداخلي"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "media-queries",
      "description": "يمكن استخدام المتغيرات المخصصة داخل وسائط الاستعلام، لكنها لا تدعم التغيير المباشر، يجب إعادة تعريفها على :root داخل الوسائط",
      "properties": [
        {
          "name": "استخدام المتغيرات في Media Queries",
          "description": "يمكن إعادة تعريف المتغيرات داخل وسائط الاستعلام لتغيير التصميم حسب حجم الشاشة",
          "values": [
            {
              "value": "@media (min-width: 768px) { :root { --font-size: 18px; --container-width: 720px; } }",
              "description": "تغيير حجم الخط وعرض الحاوية للشاشات المتوسطة"
            },
            {
              "value": "@media (min-width: 992px) { :root { --font-size: 20px; --container-width: 960px; } }",
              "description": "تغيير المتغيرات للشاشات الكبيرة"
            },
            {
              "value": "@media (min-width: 1200px) { :root { --font-size: 22px; --container-width: 1140px; --spacing-unit: 12px; } }",
              "description": "تغيير المتغيرات للشاشات الكبيرة جداً"
            },
            {
              "value": "@media (max-width: 576px) { :root { --font-size: 14px; --spacing-unit: 4px; --header-height: 50px; } }",
              "description": "تغيير المتغيرات للشاشات الصغيرة"
            },
            {
              "value": "@media (prefers-reduced-motion: reduce) { :root { --transition-normal: 0.01s; } }",
              "description": "تقليل الحركة للمستخدمين الذين يطلبون ذلك"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "vs-sass",
      "description": "الفروقات الرئيسية بين CSS Variables و Sass Variables، لكل منهما استخداماته ومزاياه",
      "properties": [
        {
          "name": "CSS Variables vs Sass Variables",
          "description": "المتغيرات المخصصة في CSS تعمل في وقت التشغيل وتدعم التحديث الديناميكي، بينما متغيرات Sass تعمل في وقت الترجمة فقط",
          "values": [
            {
              "value": "تعمل في المتصفح",
              "description": "CSS Variables تُعالج مباشرة في المتصفح ويمكن تغييرها بواسطة JavaScript"
            },
            {
              "value": "تعمل في وقت الترجمة",
              "description": "Sass Variables تُعالج أثناء الترجمة إلى CSS ولا يمكن تغييرها ديناميكياً"
            },
            {
              "value": "تدعم الميراث",
              "description": "CSS Variables تورث بين العناصر ويمكن تجاوزها"
            },
            {
              "value": "لا تدعم الميراث",
              "description": "Sass Variables لا تورث، كل متغير مستقل"
            },
            {
              "value": "يمكن تغييرها بـ JS",
              "description": "يمكن تغيير CSS Variables باستخدام JavaScript"
            },
            {
              "value": "لا يمكن تغييرها بـ JS",
              "description": "Sass Variables لا يمكن تغييرها بواسطة JavaScript"
            },
            {
              "value": "تدعم Media Queries",
              "description": "يمكن إعادة تعريف CSS Variables داخل Media Queries"
            },
            {
              "value": "تدعم جزئياً",
              "description": "Sass Variables يمكن استخدامها في Media Queries ولكن بطرق محدودة"
            }
          ]
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة للمتغيرات المخصصة في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - نظام ألوان كامل",
          "description": "نظام ألوان متكامل باستخدام المتغيرات المخصصة",
          "values": [
            {
              "value": ":root { --color-primary: #007bff; --color-primary-dark: #0056b3; --color-primary-light: #66b0ff; --color-secondary: #6c757d; --color-success: #28a745; --color-danger: #dc3545; --color-warning: #ffc107; --color-info: #17a2b8; }",
              "description": "نظام ألوان كامل"
            }
          ]
        },
        {
          "name": "مثال 2 - نظام مسافات متكامل",
          "description": "نظام مسافات متكامل للتصميم المتسق",
          "values": [
            {
              "value": ":root { --space-xs: 0.25rem; --space-sm: 0.5rem; --space-md: 1rem; --space-lg: 1.5rem; --space-xl: 2rem; --space-xxl: 3rem; }",
              "description": "نظام مسافات متكامل"
            }
          ]
        },
        {
          "name": "مثال 3 - تبديل الثيمات",
          "description": "تبديل بين الوضع الفاتح والداكن باستخدام المتغيرات",
          "values": [
            {
              "value": ":root { --bg-color: #ffffff; --text-color: #212529; --border-color: #dee2e6; } [data-theme='dark'] { --bg-color: #1a1a2e; --text-color: #eaeaea; --border-color: #2a2a4a; }",
              "description": "تبديل بين الثيمات"
            }
          ]
        },
        {
          "name": "مثال 4 - تصميم متجاوب",
          "description": "تصميم متجاوب باستخدام المتغيرات",
          "values": [
            {
              "value": ":root { --font-size: 16px; --container-padding: 20px; } @media (min-width: 768px) { :root { --font-size: 18px; --container-padding: 40px; } } @media (min-width: 1200px) { :root { --font-size: 20px; --container-padding: 60px; } }",
              "description": "تصميم متجاوب مع المتغيرات"
            }
          ]
        },
        {
          "name": "مثال 5 - تغيير متغيرات بواسطة JS",
          "description": "تغيير المتغيرات ديناميكياً باستخدام JavaScript",
          "values": [
            {
              "value": "document.documentElement.style.setProperty('--primary-color', '#ff0000')",
              "description": "تغيير اللون الأساسي بواسطة JS"
            },
            {
              "value": "document.documentElement.style.setProperty('--font-size', '20px')",
              "description": "تغيير حجم الخط بواسطة JS"
            },
            {
              "value": "element.style.setProperty('--spacing', '20px')",
              "description": "تغيير متغير على عنصر محدد"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام المتغيرات المخصصة بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لاستخدام المتغيرات المخصصة",
          "values": [
            {
              "value": "استخدم :root للمتغيرات العامة",
              "description": "ضع المتغيرات المستخدمة في كل الصفحة على :root"
            },
            {
              "value": "استخدم أسماء وصفية",
              "description": "--primary-color أفضل من --color1, --spacing-unit أفضل من --s"
            },
            {
              "value": "قدم قيماً احتياطية",
              "description": "var(--color, #000) يحمي من الأخطاء"
            },
            {
              "value": "استخدم @property للانتقالات",
              "description": "@property تمكن من انتقال سلس للقيم المتغيرة"
            },
            {
              "value": "نظّم المتغيرات",
              "description": "قسّم المتغيرات إلى مجموعات: ألوان، مسافات، خطوط، إلخ"
            }
          ]
        },
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء المتغيرات المخصصة",
          "values": [
            {
              "value": "استخدمها باعتدال",
              "description": "الإفراط في استخدام المتغيرات قد يؤثر على الأداء"
            },
            {
              "value": "تجنب التغيير المتكرر",
              "description": "تغيير المتغيرات في CSS باستمرار قد يسبب إعادة حساب"
            },
            {
              "value": "استخدم @property للأرقام",
              "description": "@property يساعد المتصفح في تحسين الأداء"
            },
            {
              "value": "استخدم herits: false",
              "description": "عندما لا تحتاج الوراثة، حدد inherits: false"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل المتغيرات المخصصة قابلة للوصول",
          "values": [
            {
              "value": "دعم prefers-color-scheme",
              "description": "استخدم media queries لضبط الألوان حسب تفضيل النظام"
            },
            {
              "value": "دعم prefers-reduced-motion",
              "description": "قلل الحركات للمستخدمين الذين يطلبون ذلك"
            },
            {
              "value": "احرص على التباين",
              "description": "تأكد من أن الألوان المتغيرة تحافظ على تباين جيد"
            }
          ]
        },
        {
          "name": "أخطاء شائعة",
          "description": "أخطاء شائعة عند استخدام المتغيرات المخصصة وكيفية تجنبها",
          "values": [
            {
              "value": "نسيان الشرطتين",
              "description": "--color ليس -color أو _color"
            },
            {
              "value": "استخدام var() بدون متغير",
              "description": "var(--color) وليس var(color)"
            },
            {
              "value": "عدم استخدام قيمة احتياطية",
              "description": "var(--color, #000) أفضل من var(--color) وحده"
            },
            {
              "value": "استخدامها في Media Queries مباشرة",
              "description": "@media (min-width: var(--breakpoint)) لا يعمل، يجب إعادة التعريف"
            }
          ]
        }
      ]
    }
  ],
  "generatedContent": [
    {
      "tag": "content",
      "description": "يحدد المحتوى الذي سيظهر في العناصر المُنشأة (::before و ::after)، يمكن أن يكون نصاً، صورة، أو قيمة من العنصر الأصلي",
      "properties": [
        {
          "name": "content",
          "description": "الخاصية الرئيسية لإضافة محتوى مُنشأ قبل أو بعد العنصر باستخدام ::before و ::after",
          "values": [
            {
              "value": "none",
              "description": "بدون محتوى - لا يظهر شيء (القيمة الافتراضية)"
            },
            {
              "value": "normal",
              "description": "محتوى طبيعي (القيمة الافتراضية لـ ::before و ::after)"
            },
            {
              "value": "\"\"",
              "description": "سلسلة نصية فارغة - يمكن استخدامها لعناصر CSS فقط (مثل أيقونات)"
            },
            {
              "value": "\"نص\"",
              "description": "نص ثابت يظهر قبل أو بعد العنصر"
            },
            {
              "value": "\" مرحباً \"",
              "description": "نص مع مسافات حوله"
            },
            {
              "value": "\"★ \"",
              "description": "رمز نجمي كـ Unicode"
            },
            {
              "value": "\"✓ \"",
              "description": "علامة صح كـ Unicode"
            },
            {
              "value": "\"• \"",
              "description": "نقطة كـ Unicode"
            },
            {
              "value": "\"✗ \"",
              "description": "علامة خطأ كـ Unicode"
            },
            {
              "value": "\"❝ \"",
              "description": "علامة تنصيص مزدوجة"
            },
            {
              "value": "\"🔗 \"",
              "description": "رمز رابط كـ Unicode"
            },
            {
              "value": "\"📌 \"",
              "description": "رمز دبوس كـ Unicode"
            },
            {
              "value": "\"🔥 \"",
              "description": "رمز نار كـ Unicode"
            },
            {
              "value": "\"💡 \"",
              "description": "رمز فكرة كـ Unicode"
            },
            {
              "value": "\"⭐ \"",
              "description": "رمز نجمة كـ Unicode"
            },
            {
              "value": "\"⚠️ \"",
              "description": "رمز تحذير كـ Unicode"
            },
            {
              "value": "\"✅ \"",
              "description": "رمز نجاح كـ Unicode"
            },
            {
              "value": "\"❌ \"",
              "description": "رمز رفض كـ Unicode"
            },
            {
              "value": "url('image.png')",
              "description": "صورة تظهر كمحتوى قبل أو بعد العنصر"
            },
            {
              "value": "url('icon.svg')",
              "description": "صورة SVG"
            },
            {
              "value": "url('image.jpg')",
              "description": "صورة JPG"
            },
            {
              "value": "url('data:image/svg+xml,...')",
              "description": "صورة مشفرة في الـ CSS"
            },
            {
              "value": "attr(href)",
              "description": "يأخذ قيمة سمة href من العنصر الأصلي"
            },
            {
              "value": "attr(title)",
              "description": "يأخذ قيمة سمة title"
            },
            {
              "value": "attr(data-tooltip)",
              "description": "يأخذ قيمة سمة data-tooltip"
            },
            {
              "value": "attr(data-label)",
              "description": "يأخذ قيمة سمة data-label"
            },
            {
              "value": "attr(alt)",
              "description": "يأخذ قيمة سمة alt (خاص بالصور)"
            },
            {
              "value": "attr(src)",
              "description": "يأخذ قيمة سمة src"
            },
            {
              "value": "\"نوع: \" attr(data-type)",
              "description": "نص مع قيمة سمة"
            },
            {
              "value": "\"حجم: \" attr(data-size) \"px\"",
              "description": "نص مع قيمة سمة ووحدة"
            },
            {
              "value": "counter(chapter)",
              "description": "يعرض قيمة عداد chapter"
            },
            {
              "value": "counter(page)",
              "description": "يعرض قيمة عداد page"
            },
            {
              "value": "counter(section)",
              "description": "يعرض قيمة عداد section"
            },
            {
              "value": "counter(chapter, upper-roman)",
              "description": "يعرض العداد بأرقام رومانية كبيرة"
            },
            {
              "value": "counter(chapter, lower-roman)",
              "description": "يعرض العداد بأرقام رومانية صغيرة"
            },
            {
              "value": "counter(chapter, upper-alpha)",
              "description": "يعرض العداد بأحرف لاتينية كبيرة (A, B, C)"
            },
            {
              "value": "counter(chapter, lower-alpha)",
              "description": "يعرض العداد بأحرف لاتينية صغيرة (a, b, c)"
            },
            {
              "value": "counter(chapter, decimal-leading-zero)",
              "description": "يعرض العداد بأصفار بادئة (01, 02, 03)"
            },
            {
              "value": "counter(chapter, arabic-indic)",
              "description": "يعرض العداد بالأرقام العربية الهندية"
            },
            {
              "value": "counters(section, '.')",
              "description": "يعرض تسلسل العدادات المتداخلة مفصولة بنقطة، مثل 1.2.3"
            },
            {
              "value": "counters(section, '.') '. '",
              "description": "تسلسل مع نقطة ومسافة"
            },
            {
              "value": "counters(section, '.', lower-alpha)",
              "description": "تسلسل بأحرف لاتينية"
            },
            {
              "value": "open-quote",
              "description": "علامة تنصيص افتتاحية (حسب اللغة وتنسيق quotes)"
            },
            {
              "value": "close-quote",
              "description": "علامة تنصيص اختتامية (حسب اللغة وتنسيق quotes)"
            },
            {
              "value": "no-open-quote",
              "description": "يزيل علامة التنصيص الافتتاحية (لا تظهر لكن تؤثر على الترقيم)"
            },
            {
              "value": "no-close-quote",
              "description": "يزيل علامة التنصيص الاختتامية (لا تظهر لكن تؤثر على الترقيم)"
            },
            {
              "value": "\"قبل: \" attr(data-tooltip)",
              "description": "نص مع قيمة سمة"
            },
            {
              "value": "url('icon.svg') \" نص\"",
              "description": "صورة ونص معاً"
            },
            {
              "value": "\"الفصل \" counter(chapter) \": \"",
              "description": "نص مع عداد ونص"
            },
            {
              "value": "\"صفحة \" counter(page) \" من \" counter(total-pages)",
              "description": "ترقيم صفحات مع العدد الكلي"
            },
            {
              "value": "open-quote attr(title) close-quote",
              "description": "نص بين علامات تنصيص"
            },
            {
              "value": "\"\" url('icon.svg') \" \" attr(data-label)",
              "description": "مزيج من قيم متعددة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "quotes",
      "description": "يحدد علامات التنصيص المستخدمة مع open-quote و close-quote في خاصية content، يمكن تحديد عدة مستويات للتداخل",
      "properties": [
        {
          "name": "quotes",
          "description": "يحدد علامات التنصيص المستخدمة مع open-quote و close-quote في المحتوى المُنشأ",
          "values": [
            {
              "value": "auto",
              "description": "علامات تنصيص تلقائية حسب لغة المستخدم (القيمة الافتراضية)"
            },
            {
              "value": "none",
              "description": "بدون علامات تنصيص"
            },
            {
              "value": "\"\" \"\"",
              "description": "علامات تنصيص فارغة - لا تظهر"
            },
            {
              "value": "\" \" \" \"",
              "description": "علامات تنصيص بمسافات"
            },
            {
              "value": "\"“\" \"”\" \"‘\" \"’\"",
              "description": "علامات تنصيص عربية (علامات اقتباس)"
            },
            {
              "value": "\"«\" \"»\" \"‹\" \"›\"",
              "description": "علامات تنصيص فرنسية/عربية (أيضاً تستخدم في العربية)"
            },
            {
              "value": "\"“\" \"”\" \"‘\" \"’\"",
              "description": "علامات تنصيص إنجليزية (double quotes ثم single quotes)"
            },
            {
              "value": "\"'\" \"'\" \"\"\" \"\"\"",
              "description": "علامات تنصيص إنجليزية مفردة ثم مزدوجة"
            },
            {
              "value": "\"“\" \"”\"",
              "description": "علامات تنصيص إنجليزية فقط (مستوى واحد)"
            },
            {
              "value": "\"«\" \"»\" \"‹\" \"›\"",
              "description": "علامات تنصيص فرنسية (guillemets)"
            },
            {
              "value": "\"„\" \"“\" \"‚\" \"‘\"",
              "description": "علامات تنصيص ألمانية"
            },
            {
              "value": "\"»\" \"«\" \"›\" \"‹\"",
              "description": "علامات تنصيص دانماركية"
            },
            {
              "value": "\"》\" \"《\"",
              "description": "علامات تنصيص صينية"
            },
            {
              "value": "\"『\" \"』\" \"「\" \"」\"",
              "description": "علامات تنصيص يابانية"
            },
            {
              "value": "\"[\" \"]\" \"{\" \"}\"",
              "description": "علامات تنصيص بأقواس"
            },
            {
              "value": "\"<\" \">\" \"{\" \"}\"",
              "description": "علامات تنصيص بزوايا"
            },
            {
              "value": "\"（\" \"）\" \"［\" \"］\"",
              "description": "علامات تنصيص يابانية بأقواس واسعة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "counter-reset",
      "description": "يُنشئ عداداً جديداً أو يُعيد تعيين قيمته إلى قيمة محددة، يستخدم لترقيم العناصر تلقائياً",
      "properties": [
        {
          "name": "counter-reset",
          "description": "يُنشئ عداداً جديداً أو يُعيد تعيين قيمته إلى قيمة محددة",
          "values": [
            {
              "value": "none",
              "description": "بدون إعادة تعيين - القيمة الافتراضية"
            },
            {
              "value": "chapter",
              "description": "يُنشئ عداداً باسم 'chapter' بقيمة 0"
            },
            {
              "value": "section",
              "description": "يُنشئ عداداً باسم 'section' بقيمة 0"
            },
            {
              "value": "figure",
              "description": "يُنشئ عداداً للشكل/الصورة بقيمة 0"
            },
            {
              "value": "table",
              "description": "يُنشئ عداداً للجدول بقيمة 0"
            },
            {
              "value": "page",
              "description": "يُنشئ عداداً للصفحة بقيمة 0"
            },
            {
              "value": "item",
              "description": "يُنشئ عداداً للعنصر بقيمة 0"
            },
            {
              "value": "step",
              "description": "يُنشئ عداداً للخطوة بقيمة 0"
            },
            {
              "value": "note",
              "description": "يُنشئ عداداً للملاحظة بقيمة 0"
            },
            {
              "value": "chapter 1",
              "description": "يُنشئ عداداً 'chapter' بقيمة ابتدائية 1"
            },
            {
              "value": "section 0",
              "description": "يُنشئ عداداً 'section' بقيمة 0"
            },
            {
              "value": "figure 5",
              "description": "يُنشئ عداداً 'figure' بقيمة 5"
            },
            {
              "value": "page 10",
              "description": "يُنشئ عداداً 'page' بقيمة 10"
            },
            {
              "value": "chapter 1 subsection 0",
              "description": "يُنشئ عدادين: chapter=1, subsection=0"
            },
            {
              "value": "section 1 figure 0 table 0",
              "description": "يُنشئ ثلاثة عدادات"
            },
            {
              "value": "part 1 chapter 0 section 0",
              "description": "يُنشئ ثلاثة عدادات متسلسلة"
            },
            {
              "value": "chapter -1",
              "description": "يُنشئ عداداً بقيمة -1"
            },
            {
              "value": "counter -5",
              "description": "يُنشئ عداداً بقيمة -5"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "counter-increment",
      "description": "يزيد قيمة العداد بمقدار معين (عادة 1) في كل مرة يُستخدم، يسمح بترقيم تلقائي للعناصر",
      "properties": [
        {
          "name": "counter-increment",
          "description": "يزيد قيمة العداد بمقدار معين (عادة 1) في كل مرة يُستخدم",
          "values": [
            {
              "value": "none",
              "description": "بدون زيادة - القيمة الافتراضية"
            },
            {
              "value": "chapter",
              "description": "يزيد عداد 'chapter' بمقدار 1"
            },
            {
              "value": "section",
              "description": "يزيد عداد 'section' بمقدار 1"
            },
            {
              "value": "figure",
              "description": "يزيد عداد 'figure' بمقدار 1"
            },
            {
              "value": "table",
              "description": "يزيد عداد 'table' بمقدار 1"
            },
            {
              "value": "item",
              "description": "يزيد عداد 'item' بمقدار 1"
            },
            {
              "value": "chapter 2",
              "description": "يزيد عداد 'chapter' بمقدار 2"
            },
            {
              "value": "section 3",
              "description": "يزيد عداد 'section' بمقدار 3"
            },
            {
              "value": "figure 5",
              "description": "يزيد عداد 'figure' بمقدار 5"
            },
            {
              "value": "item -1",
              "description": "ينقص عداد 'item' بمقدار 1 (قيمة سالبة)"
            },
            {
              "value": "chapter 1 subsection 1",
              "description": "يزيد عدادين بمقدار 1"
            },
            {
              "value": "section 2 figure 1",
              "description": "يزيد عداد 'section' بمقدار 2 و 'figure' بمقدار 1"
            },
            {
              "value": "part 1 chapter 1 section 1",
              "description": "يزيد ثلاثة عدادات"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "counter-set",
      "description": "يُحدد قيمة العداد مباشرة دون تغييرها (بدلاً من الزيادة أو إعادة التعيين)، يسمح بتعيين قيمة ثابتة",
      "properties": [
        {
          "name": "counter-set",
          "description": "يُحدد قيمة العداد دون تغييرها (بدلاً من الزيادة أو إعادة التعيين)",
          "values": [
            {
              "value": "none",
              "description": "بدون تعيين - القيمة الافتراضية"
            },
            {
              "value": "chapter 5",
              "description": "يُعيّن عداد 'chapter' إلى 5"
            },
            {
              "value": "section 10",
              "description": "يُعيّن عداد 'section' إلى 10"
            },
            {
              "value": "figure 3",
              "description": "يُعيّن عداد 'figure' إلى 3"
            },
            {
              "value": "page 20",
              "description": "يُعيّن عداد 'page' إلى 20"
            },
            {
              "value": "chapter 5 subsection 3",
              "description": "يُعيّن عدادين: chapter=5, subsection=3"
            },
            {
              "value": "section 10 figure 2 table 0",
              "description": "يُعيّن ثلاثة عدادات"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "counter-functions",
      "description": "دالتان تُستخدمان داخل content لعرض قيمة العداد؛ counter() لعداد واحد بمستوى واحد، وcounters() لعرض تسلسل هرمي (مثل 1.2.3) مع فاصل مخصص",
      "properties": [
        {
          "name": "counter() / counters() (ملاحظة)",
          "description": "دالتان لعرض قيم العدادات في المحتوى المُنشأ",
          "values": [
            {
              "value": "counter(chapter)",
              "description": "يعرض قيمة عداد chapter فقط"
            },
            {
              "value": "counter(section)",
              "description": "يعرض قيمة عداد section"
            },
            {
              "value": "counter(figure)",
              "description": "يعرض قيمة عداد figure"
            },
            {
              "value": "counter(chapter, decimal)",
              "description": "يعرض القيمة بالأرقام العادية (افتراضي)"
            },
            {
              "value": "counter(chapter, upper-roman)",
              "description": "يعرض القيمة بأرقام رومانية كبيرة (I, II, III)"
            },
            {
              "value": "counter(chapter, lower-roman)",
              "description": "يعرض القيمة بأرقام رومانية صغيرة (i, ii, iii)"
            },
            {
              "value": "counter(chapter, upper-alpha)",
              "description": "يعرض القيمة بأحرف لاتينية كبيرة (A, B, C)"
            },
            {
              "value": "counter(chapter, lower-alpha)",
              "description": "يعرض القيمة بأحرف لاتينية صغيرة (a, b, c)"
            },
            {
              "value": "counter(chapter, upper-greek)",
              "description": "يعرض القيمة بأحرف يونانية كبيرة"
            },
            {
              "value": "counter(chapter, lower-greek)",
              "description": "يعرض القيمة بأحرف يونانية صغيرة"
            },
            {
              "value": "counter(chapter, decimal-leading-zero)",
              "description": "يعرض القيمة بأصفار بادئة (01, 02, 03...)"
            },
            {
              "value": "counter(chapter, arabic-indic)",
              "description": "يعرض القيمة بالأرقام العربية الهندية (١, ٢, ٣)"
            },
            {
              "value": "counter(chapter, persian)",
              "description": "يعرض القيمة بالأرقام الفارسية"
            },
            {
              "value": "counter(chapter, cjk-decimal)",
              "description": "يعرض القيمة بالأرقام الصينية"
            },
            {
              "value": "counters(section, '.')",
              "description": "يعرض تسلسل العدادات المتداخلة مفصولة بنقطة، مثل 1.2.3"
            },
            {
              "value": "counters(section, '-')",
              "description": "يعرض التسلسل مفصولاً بشرطة، مثل 1-2-3"
            },
            {
              "value": "counters(section, '/')",
              "description": "يعرض التسلسل مفصولاً بشرطة مائلة"
            },
            {
              "value": "counters(section, ' > ')",
              "description": "يعرض التسلسل مفصولاً بـ ' > '"
            },
            {
              "value": "counters(section, '.', decimal)",
              "description": "تسلسل بأرقام عادية"
            },
            {
              "value": "counters(section, '.', lower-alpha)",
              "description": "تسلسل بأحرف لاتينية صغيرة، مثل a.b.c"
            },
            {
              "value": "counters(section, '.', upper-roman)",
              "description": "تسلسل بأرقام رومانية كبيرة، مثل I.II.III"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة للمحتوى المُنشأ في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - أيقونات قبل الروابط",
          "description": "إضافة أيقونة قبل الروابط الخارجية",
          "values": [
            {
              "value": "a[target=\"_blank\"]::after { content: \" 🔗\"; }",
              "description": "إضافة رمز رابط خارجي"
            },
            {
              "value": "a[href^=\"https://\"]::before { content: \"🔒 \"; }",
              "description": "إضافة رمز قفل للروابط الآمنة"
            },
            {
              "value": "a[href$=\".pdf\"]::after { content: \" 📄\"; }",
              "description": "إضافة رمز ملف PDF"
            },
            {
              "value": "a[href$=\".doc\"]::after { content: \" 📝\"; }",
              "description": "إضافة رمز ملف Word"
            },
            {
              "value": "a[href$=\".zip\"]::after { content: \" 📦\"; }",
              "description": "إضافة رمز ملف مضغوط"
            }
          ]
        },
        {
          "name": "مثال 2 - تسميات المدخلات",
          "description": "إضافة تسميات قبل أو بعد حقول الإدخال",
          "values": [
            {
              "value": "input[type=\"email\"]::before { content: \"📧 \"; }",
              "description": "رمز بريد إلكتروني قبل الحقل"
            },
            {
              "value": "input[type=\"password\"]::before { content: \"🔑 \"; }",
              "description": "رمز مفتاح قبل حقل كلمة المرور"
            },
            {
              "value": "input[type=\"search\"]::before { content: \"🔍 \"; }",
              "description": "رمز بحث قبل حقل البحث"
            },
            {
              "value": "input[type=\"tel\"]::before { content: \"📱 \"; }",
              "description": "رمز هاتف قبل حقل رقم الهاتف"
            }
          ]
        },
        {
          "name": "مثال 3 - ترقيم تلقائي للفصول",
          "description": "ترقيم تلقائي للعناوين باستخدام العدادات",
          "values": [
            {
              "value": "body { counter-reset: section; } h2::before { counter-increment: section; content: counter(section) \". \"; }",
              "description": "ترقيم تلقائي للعناوين h2"
            }
          ]
        },
        {
          "name": "مثال 4 - ترقيم متسلسل (فصل.قسم.فقرة)",
          "description": "ترقيم هرمي باستخدام counters()",
          "values": [
            {
              "value": "body { counter-reset: chapter; } h1 { counter-reset: section; counter-increment: chapter; } h1::before { content: counter(chapter) \". \"; } h2 { counter-reset: subsection; counter-increment: section; } h2::before { content: counter(chapter) \".\" counter(section) \" \"; } h3 { counter-increment: subsection; } h3::before { content: counter(chapter) \".\" counter(section) \".\" counter(subsection) \" \"; }",
              "description": "ترقيم ثلاثة مستويات (فصل.قسم.فقرة)"
            }
          ]
        },
        {
          "name": "مثال 5 - علامات التنصيص التلقائية",
          "description": "إضافة علامات تنصيص تلقائية حول النصوص",
          "values": [
            {
              "value": "q { quotes: \"“\" \"”\" \"‘\" \"’\"; } q::before { content: open-quote; } q::after { content: close-quote; }",
              "description": "علامات تنصيص تلقائية حول عنصر q"
            }
          ]
        },
        {
          "name": "مثال 6 - عرض بيانات مخصصة",
          "description": "عرض قيم السمات المخصصة كمحتوى",
          "values": [
            {
              "value": ".tooltip::after { content: attr(data-tooltip); display: block; }",
              "description": "عرض تلميح من data-tooltip"
            },
            {
              "value": ".status::before { content: attr(data-status); }",
              "description": "عرض حالة من data-status"
            },
            {
              "value": ".product::after { content: \"السعر: \" attr(data-price) \" ريال\"; }",
              "description": "عرض سعر المنتج"
            }
          ]
        },
        {
          "name": "مثال 7 - تعداد الصفحات",
          "description": "ترقيم الصفحات في المستندات المطبوعة",
          "values": [
            {
              "value": "@page { counter-reset: page; } .page-number::after { content: counter(page); }",
              "description": "ترقيم الصفحات"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام المحتوى المُنشأ بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية لاستخدام المحتوى المُنشأ",
          "values": [
            {
              "value": "استخدم ::before و ::after للعناصر غير التفاعلية",
              "description": "لا تستخدمها على الروابط والأزرار إذا كانت تحتوي على محتوى تفاعلي"
            },
            {
              "value": "أضف content: '' لعناصر CSS البحتة",
              "description": "تحتاج إلى content حتى تظهر العناصر الزائفة"
            },
            {
              "value": "استخدم attr() بعناية",
              "description": "تأكد من وجود السمة في العنصر"
            },
            {
              "value": "استخدم unicode للرموز",
              "description": "أسرع وأخف من الصور"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل المحتوى المُنشأ قابلاً للوصول",
          "values": [
            {
              "value": "تجنب المحتوى الحرج في ::before/::after",
              "description": "قارئات الشاشة قد لا تقرأ المحتوى المُنشأ"
            },
            {
              "value": "استخدم content للمحتوى الزخرفي فقط",
              "description": "المحتوى المهم يجب أن يكون في HTML"
            },
            {
              "value": "أضف aria-label عند الحاجة",
              "description": "للعناصر التي تعتمد على المحتوى المُنشأ"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام المحتوى المُنشأ وكيفية تجنبها",
          "values": [
            {
              "value": "نسيان content: ''",
              "description": "بدون content لن تظهر ::before و ::after"
            },
            {
              "value": "استخدام ::before مع عناصر void",
              "description": "لا تعمل مع img, input, br, hr"
            },
            {
              "value": "نسيان علامات التنصيص حول النص",
              "description": "content: نص (خطأ) بدلاً من content: \"نص\" (صحيح)"
            },
            {
              "value": "تداخل العدادات",
              "description": "تأكد من reset و increment في المواقع الصحيحة"
            }
          ]
        }
      ]
    }
  ],
  "filtersEffects": [
    {
      "tag": "filter",
      "description": "يطبق تأثيرات بصرية على العنصر (صورة، نص، أو أي عنصر آخر)، يمكن استخدام فلاتر متعددة معاً",
      "properties": [
        {
          "name": "filter",
          "description": "الخاصية الرئيسية لتطبيق الفلاتر على العنصر، يمكن دمج عدة فلاتر في نفس الخاصية",
          "values": [
            {
              "value": "none",
              "description": "بدون فلاتر - يعيد العنصر إلى حالته الطبيعية (القيمة الافتراضية)"
            },
            {
              "value": "blur(0px)",
              "description": "بدون تمويه"
            },
            {
              "value": "blur(1px)",
              "description": "تمويه خفيف جداً - 1 بكسل"
            },
            {
              "value": "blur(2px)",
              "description": "تمويه خفيف - 2 بكسل"
            },
            {
              "value": "blur(3px)",
              "description": "تمويه متوسط خفيف - 3 بكسل"
            },
            {
              "value": "blur(4px)",
              "description": "تمويه متوسط - 4 بكسل"
            },
            {
              "value": "blur(5px)",
              "description": "تمويه متوسط واضح - 5 بكسل"
            },
            {
              "value": "blur(6px)",
              "description": "تمويه متوسط - 6 بكسل"
            },
            {
              "value": "blur(8px)",
              "description": "تمويه واضح - 8 بكسل"
            },
            {
              "value": "blur(10px)",
              "description": "تمويه قوي - 10 بكسل"
            },
            {
              "value": "blur(12px)",
              "description": "تمويه قوي جداً - 12 بكسل"
            },
            {
              "value": "blur(15px)",
              "description": "تمويه قوي جداً - 15 بكسل"
            },
            {
              "value": "blur(20px)",
              "description": "تمويه شديد - 20 بكسل"
            },
            {
              "value": "blur(50px)",
              "description": "تمويه شديد جداً - 50 بكسل"
            },
            {
              "value": "brightness(0)",
              "description": "أسود بالكامل - بدون سطوع"
            },
            {
              "value": "brightness(0.25)",
              "description": "سطوع 25% - معتم جداً"
            },
            {
              "value": "brightness(0.5)",
              "description": "سطوع 50% - نصف السطوع"
            },
            {
              "value": "brightness(0.75)",
              "description": "سطوع 75% - مظلم قليلاً"
            },
            {
              "value": "brightness(1)",
              "description": "سطوع طبيعي 100% (القيمة الافتراضية)"
            },
            {
              "value": "brightness(1.25)",
              "description": "سطوع 125% - ساطع قليلاً"
            },
            {
              "value": "brightness(1.5)",
              "description": "سطوع 150% - ساطع"
            },
            {
              "value": "brightness(1.75)",
              "description": "سطوع 175% - ساطع جداً"
            },
            {
              "value": "brightness(2)",
              "description": "سطوع 200% - ساطع جداً"
            },
            {
              "value": "brightness(2.5)",
              "description": "سطوع 250% - شديد السطوع"
            },
            {
              "value": "brightness(3)",
              "description": "سطوع 300% - شديد السطوع"
            },
            {
              "value": "brightness(500%)",
              "description": "سطوع 500% - أبيض بالكامل"
            },
            {
              "value": "contrast(0)",
              "description": "تباين صفر - رمادي بالكامل"
            },
            {
              "value": "contrast(0.25)",
              "description": "تباين 25% - منخفض جداً"
            },
            {
              "value": "contrast(0.5)",
              "description": "تباين 50% - منخفض"
            },
            {
              "value": "contrast(0.75)",
              "description": "تباين 75% - منخفض قليلاً"
            },
            {
              "value": "contrast(1)",
              "description": "تباين طبيعي 100% (القيمة الافتراضية)"
            },
            {
              "value": "contrast(1.25)",
              "description": "تباين 125% - مرتفع قليلاً"
            },
            {
              "value": "contrast(1.5)",
              "description": "تباين 150% - مرتفع"
            },
            {
              "value": "contrast(1.75)",
              "description": "تباين 175% - مرتفع جداً"
            },
            {
              "value": "contrast(2)",
              "description": "تباين 200% - مرتفع جداً"
            },
            {
              "value": "contrast(2.5)",
              "description": "تباين 250% - شديد التباين"
            },
            {
              "value": "contrast(3)",
              "description": "تباين 300% - شديد التباين"
            },
            {
              "value": "contrast(500%)",
              "description": "تباين 500% - تباين مفرط"
            },
            {
              "value": "grayscale(0%)",
              "description": "بدون تأثير - ألوان كاملة (القيمة الافتراضية)"
            },
            {
              "value": "grayscale(25%)",
              "description": "تدرج رمادي 25% - ألوان باهتة"
            },
            {
              "value": "grayscale(50%)",
              "description": "تدرج رمادي 50% - نصف رمادي"
            },
            {
              "value": "grayscale(75%)",
              "description": "تدرج رمادي 75% - شبه رمادي"
            },
            {
              "value": "grayscale(100%)",
              "description": "تدرج رمادي كامل - أبيض وأسود فقط"
            },
            {
              "value": "hue-rotate(0deg)",
              "description": "بدون تدوير (القيمة الافتراضية)"
            },
            {
              "value": "hue-rotate(15deg)",
              "description": "تدوير 15 درجة - تغير طفيف"
            },
            {
              "value": "hue-rotate(30deg)",
              "description": "تدوير 30 درجة"
            },
            {
              "value": "hue-rotate(45deg)",
              "description": "تدوير 45 درجة"
            },
            {
              "value": "hue-rotate(60deg)",
              "description": "تدوير 60 درجة"
            },
            {
              "value": "hue-rotate(90deg)",
              "description": "تدوير 90 درجة - تغير كبير"
            },
            {
              "value": "hue-rotate(120deg)",
              "description": "تدوير 120 درجة"
            },
            {
              "value": "hue-rotate(150deg)",
              "description": "تدوير 150 درجة"
            },
            {
              "value": "hue-rotate(180deg)",
              "description": "تدوير 180 درجة - ألوان معكوسة"
            },
            {
              "value": "hue-rotate(210deg)",
              "description": "تدوير 210 درجة"
            },
            {
              "value": "hue-rotate(240deg)",
              "description": "تدوير 240 درجة"
            },
            {
              "value": "hue-rotate(270deg)",
              "description": "تدوير 270 درجة"
            },
            {
              "value": "hue-rotate(300deg)",
              "description": "تدوير 300 درجة"
            },
            {
              "value": "hue-rotate(330deg)",
              "description": "تدوير 330 درجة"
            },
            {
              "value": "hue-rotate(360deg)",
              "description": "تدوير كامل - يعود إلى الأصل"
            },
            {
              "value": "hue-rotate(-45deg)",
              "description": "تدوير عكسي 45 درجة"
            },
            {
              "value": "hue-rotate(0.5turn)",
              "description": "نصف دورة (180 درجة)"
            },
            {
              "value": "hue-rotate(1turn)",
              "description": "دورة كاملة (360 درجة)"
            },
            {
              "value": "invert(0%)",
              "description": "بدون عكس - ألوان طبيعية (القيمة الافتراضية)"
            },
            {
              "value": "invert(25%)",
              "description": "عكس 25% - تأثير خفيف"
            },
            {
              "value": "invert(50%)",
              "description": "عكس 50% - تأثير متوسط"
            },
            {
              "value": "invert(75%)",
              "description": "عكس 75% - تأثير قوي"
            },
            {
              "value": "invert(100%)",
              "description": "عكس كامل - ألوان معكوسة بالكامل"
            },
            {
              "value": "opacity(0)",
              "description": "شفاف بالكامل - غير مرئي"
            },
            {
              "value": "opacity(0.1)",
              "description": "شفاف 90% - بالكاد مرئي"
            },
            {
              "value": "opacity(0.25)",
              "description": "شفاف 75% - مرئي قليلاً"
            },
            {
              "value": "opacity(0.5)",
              "description": "شفاف 50% - نصف شفاف"
            },
            {
              "value": "opacity(0.75)",
              "description": "شفاف 25% - شبه معتم"
            },
            {
              "value": "opacity(1)",
              "description": "معتم بالكامل (القيمة الافتراضية)"
            },
            {
              "value": "opacity(0%)",
              "description": "شفاف بالكامل - غير مرئي"
            },
            {
              "value": "opacity(100%)",
              "description": "معتم بالكامل"
            },
            {
              "value": "saturate(0%)",
              "description": "بدون تشبع - تدرج رمادي"
            },
            {
              "value": "saturate(25%)",
              "description": "تشبع 25% - باهت جداً"
            },
            {
              "value": "saturate(50%)",
              "description": "تشبع 50% - باهت"
            },
            {
              "value": "saturate(75%)",
              "description": "تشبع 75% - باهت قليلاً"
            },
            {
              "value": "saturate(100%)",
              "description": "تشبع طبيعي (القيمة الافتراضية)"
            },
            {
              "value": "saturate(150%)",
              "description": "تشبع 150% - مشبع"
            },
            {
              "value": "saturate(200%)",
              "description": "تشبع 200% - مشبع جداً"
            },
            {
              "value": "saturate(250%)",
              "description": "تشبع 250% - مشبع جداً"
            },
            {
              "value": "saturate(300%)",
              "description": "تشبع 300% - شديد التشبع"
            },
            {
              "value": "saturate(500%)",
              "description": "تشبع 500% - تشبع مفرط"
            },
            {
              "value": "sepia(0%)",
              "description": "بدون تأثير (القيمة الافتراضية)"
            },
            {
              "value": "sepia(25%)",
              "description": "تأثير سيبيا 25% - خفيف"
            },
            {
              "value": "sepia(50%)",
              "description": "تأثير سيبيا 50% - متوسط"
            },
            {
              "value": "sepia(75%)",
              "description": "تأثير سيبيا 75% - قوي"
            },
            {
              "value": "sepia(100%)",
              "description": "تأثير سيبيا كامل - صورة قديمة"
            },
            {
              "value": "drop-shadow(0 0 0 transparent)",
              "description": "ظل شفاف - بدون ظل"
            },
            {
              "value": "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))",
              "description": "ظل خفيف جداً"
            },
            {
              "value": "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
              "description": "ظل خفيف"
            },
            {
              "value": "drop-shadow(3px 3px 6px rgba(0,0,0,0.4))",
              "description": "ظل متوسط"
            },
            {
              "value": "drop-shadow(4px 4px 8px rgba(0,0,0,0.5))",
              "description": "ظل متوسط قوي"
            },
            {
              "value": "drop-shadow(5px 5px 10px rgba(0,0,0,0.6))",
              "description": "ظل قوي"
            },
            {
              "value": "drop-shadow(8px 8px 16px rgba(0,0,0,0.7))",
              "description": "ظل قوي جداً"
            },
            {
              "value": "drop-shadow(10px 10px 20px rgba(0,0,0,0.8))",
              "description": "ظل شديد"
            },
            {
              "value": "drop-shadow(0 0 10px rgba(255,0,0,0.5))",
              "description": "ظل أحمر متوهج"
            },
            {
              "value": "drop-shadow(0 0 20px rgba(0,0,255,0.5))",
              "description": "ظل أزرق متوهج"
            },
            {
              "value": "drop-shadow(0 0 30px #ff6b6b)",
              "description": "ظل متوهج بلون محدد"
            },
            {
              "value": "drop-shadow(0 0 40px rgba(255,215,0,0.6))",
              "description": "ظل ذهبي متوهج"
            },
            {
              "value": "drop-shadow(0 -4px 8px rgba(0,0,0,0.3))",
              "description": "ظل لأعلى"
            },
            {
              "value": "drop-shadow(4px 0 8px rgba(0,0,0,0.3))",
              "description": "ظل لليمين"
            },
            {
              "value": "drop-shadow(-4px 0 8px rgba(0,0,0,0.3))",
              "description": "ظل لليسار"
            },
            {
              "value": "url('#blur')",
              "description": "فلتر مخصص من SVG باستخدام معرف"
            },
            {
              "value": "url('filters.svg#blur')",
              "description": "فلتر مخصص من ملف SVG خارجي"
            },
            {
              "value": "brightness(1.2) contrast(150%)",
              "description": "سطوع وتباين معاً"
            },
            {
              "value": "brightness(1.2) contrast(150%) blur(2px)",
              "description": "ثلاثة فلاتر معاً"
            },
            {
              "value": "grayscale(100%) brightness(1.5)",
              "description": "تدرج رمادي مع سطوع"
            },
            {
              "value": "sepia(50%) brightness(1.2) saturate(150%)",
              "description": "ثلاثة فلاتر شائعة معاً"
            },
            {
              "value": "blur(5px) brightness(0.8) contrast(120%)",
              "description": "تمويه مع سطوع وتباين"
            },
            {
              "value": "hue-rotate(45deg) saturate(200%)",
              "description": "تدوير لون مع تشبع"
            },
            {
              "value": "drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) brightness(1.1)",
              "description": "ظل مع سطوع"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "backdrop-filter",
      "description": "يطبق فلاتر على الخلفية خلف العنصر (تأثير الزجاج المصنفر الشهير)، يجب أن يكون للعنصر خلفية شبه شفافة ليظهر التأثير",
      "properties": [
        {
          "name": "backdrop-filter",
          "description": "يطبق فلاتر على الخلفية خلف العنصر، يخلق تأثيرات زجاجية وتأثيرات خلفية متقدمة",
          "values": [
            {
              "value": "none",
              "description": "بدون فلاتر على الخلفية (القيمة الافتراضية)"
            },
            {
              "value": "blur(0px)",
              "description": "بدون تمويه للخلفية"
            },
            {
              "value": "blur(1px)",
              "description": "تمويه خلفية خفيف جداً"
            },
            {
              "value": "blur(2px)",
              "description": "تمويه خلفية خفيف"
            },
            {
              "value": "blur(3px)",
              "description": "تمويه خلفية متوسط خفيف"
            },
            {
              "value": "blur(4px)",
              "description": "تمويه خلفية متوسط"
            },
            {
              "value": "blur(5px)",
              "description": "تمويه خلفية متوسط واضح"
            },
            {
              "value": "blur(6px)",
              "description": "تمويه خلفية متوسط"
            },
            {
              "value": "blur(8px)",
              "description": "تمويه خلفية واضح"
            },
            {
              "value": "blur(10px)",
              "description": "تمويه خلفية قوي - تأثير الزجاج المصنفر"
            },
            {
              "value": "blur(12px)",
              "description": "تمويه خلفية قوي جداً"
            },
            {
              "value": "blur(15px)",
              "description": "تمويه خلفية قوي جداً"
            },
            {
              "value": "blur(20px)",
              "description": "تمويه خلفية شديد"
            },
            {
              "value": "blur(50px)",
              "description": "تمويه خلفية شديد جداً"
            },
            {
              "value": "brightness(0.25)",
              "description": "سطوع خلفية 25% - معتم جداً"
            },
            {
              "value": "brightness(0.5)",
              "description": "سطوع خلفية 50% - معتم"
            },
            {
              "value": "brightness(0.75)",
              "description": "سطوع خلفية 75% - معتم قليلاً"
            },
            {
              "value": "brightness(1)",
              "description": "سطوع خلفية طبيعي (القيمة الافتراضية)"
            },
            {
              "value": "brightness(1.25)",
              "description": "سطوع خلفية 125% - ساطع قليلاً"
            },
            {
              "value": "brightness(1.5)",
              "description": "سطوع خلفية 150% - ساطع"
            },
            {
              "value": "brightness(2)",
              "description": "سطوع خلفية 200% - ساطع جداً"
            },
            {
              "value": "contrast(0.5)",
              "description": "تباين خلفية 50% - منخفض"
            },
            {
              "value": "contrast(0.75)",
              "description": "تباين خلفية 75% - منخفض قليلاً"
            },
            {
              "value": "contrast(1)",
              "description": "تباين خلفية طبيعي (القيمة الافتراضية)"
            },
            {
              "value": "contrast(1.25)",
              "description": "تباين خلفية 125% - مرتفع قليلاً"
            },
            {
              "value": "contrast(1.5)",
              "description": "تباين خلفية 150% - مرتفع"
            },
            {
              "value": "contrast(2)",
              "description": "تباين خلفية 200% - مرتفع جداً"
            },
            {
              "value": "grayscale(25%)",
              "description": "تدرج رمادي خلفية 25%"
            },
            {
              "value": "grayscale(50%)",
              "description": "تدرج رمادي خلفية 50%"
            },
            {
              "value": "grayscale(75%)",
              "description": "تدرج رمادي خلفية 75%"
            },
            {
              "value": "grayscale(100%)",
              "description": "تدرج رمادي خلفية كامل"
            },
            {
              "value": "hue-rotate(15deg)",
              "description": "تدوير لون الخلفية 15 درجة"
            },
            {
              "value": "hue-rotate(30deg)",
              "description": "تدوير لون الخلفية 30 درجة"
            },
            {
              "value": "hue-rotate(45deg)",
              "description": "تدوير لون الخلفية 45 درجة"
            },
            {
              "value": "hue-rotate(60deg)",
              "description": "تدوير لون الخلفية 60 درجة"
            },
            {
              "value": "hue-rotate(90deg)",
              "description": "تدوير لون الخلفية 90 درجة"
            },
            {
              "value": "hue-rotate(180deg)",
              "description": "تدوير لون الخلفية 180 درجة"
            },
            {
              "value": "invert(25%)",
              "description": "عكس ألوان الخلفية 25%"
            },
            {
              "value": "invert(50%)",
              "description": "عكس ألوان الخلفية 50%"
            },
            {
              "value": "invert(75%)",
              "description": "عكس ألوان الخلفية 75%"
            },
            {
              "value": "invert(100%)",
              "description": "عكس ألوان الخلفية كامل"
            },
            {
              "value": "saturate(50%)",
              "description": "تشبع خلفية 50% - باهت"
            },
            {
              "value": "saturate(75%)",
              "description": "تشبع خلفية 75% - باهت قليلاً"
            },
            {
              "value": "saturate(100%)",
              "description": "تشبع خلفية طبيعي (القيمة الافتراضية)"
            },
            {
              "value": "saturate(150%)",
              "description": "تشبع خلفية 150% - مشبع"
            },
            {
              "value": "saturate(200%)",
              "description": "تشبع خلفية 200% - مشبع جداً"
            },
            {
              "value": "sepia(25%)",
              "description": "تأثير سيبيا على الخلفية 25%"
            },
            {
              "value": "sepia(50%)",
              "description": "تأثير سيبيا على الخلفية 50%"
            },
            {
              "value": "sepia(75%)",
              "description": "تأثير سيبيا على الخلفية 75%"
            },
            {
              "value": "sepia(100%)",
              "description": "تأثير سيبيا كامل على الخلفية"
            },
            {
              "value": "blur(10px) brightness(0.8)",
              "description": "تمويه مع تعتيم الخلفية"
            },
            {
              "value": "blur(10px) saturate(150%)",
              "description": "تمويه مع تشبع الخلفية"
            },
            {
              "value": "blur(8px) contrast(120%) brightness(0.9)",
              "description": "ثلاثة فلاتر خلفية معاً"
            },
            {
              "value": "blur(12px) sepia(30%)",
              "description": "تمويه مع تأثير سيبيا"
            },
            {
              "value": "blur(6px) grayscale(50%)",
              "description": "تمويه مع تدرج رمادي"
            },
            {
              "value": "blur(15px) hue-rotate(45deg)",
              "description": "تمويه مع تدوير لون"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "vendor-prefixes",
      "description": "البادئات الخاصة بالمتصفحات لضمان التوافق مع جميع المتصفحات، خاصة لميزة backdrop-filter",
      "properties": [
        {
          "name": "بادئات المتصفحات",
          "description": "بعض المتصفحات تحتاج بادئات خاصة لتطبيق الفلاتر بشكل صحيح",
          "values": [
            {
              "value": "-webkit-backdrop-filter",
              "description": "بادئة لمتصفح Safari و Chrome القديم - تستخدم لخاصية backdrop-filter"
            },
            {
              "value": "-moz-backdrop-filter",
              "description": "بادئة لمتصفح Firefox (نسخة قديمة) - نادراً ما تحتاج"
            },
            {
              "value": "-o-backdrop-filter",
              "description": "بادئة لمتصفح Opera القديم"
            },
            {
              "value": "-ms-backdrop-filter",
              "description": "بادئة لمتصفح Internet Explorer و Edge القديم"
            }
          ]
        },
        {
          "name": "أمثلة للتوافق",
          "description": "كيفية كتابة الفلاتر مع البادئات لضمان أوسع توافق",
          "values": [
            {
              "value": "-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);",
              "description": "طريقة كتابة backdrop-filter مع بادئة Safari"
            },
            {
              "value": "-webkit-filter: blur(5px); filter: blur(5px);",
              "description": "طريقة كتابة filter مع بادئة Safari"
            },
            {
              "value": "-webkit-filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3)); filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));",
              "description": "ظل مسقط مع بادئة"
            },
            {
              "value": "-webkit-filter: blur(5px) brightness(1.2); filter: blur(5px) brightness(1.2);",
              "description": "فلاتر متعددة مع بادئة"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "glassmorphism",
      "description": "تأثير الزجاج المصنفر الشهير باستخدام backdrop-filter مع خلفية شفافة، أحدث صيحات التصميم",
      "properties": [
        {
          "name": "تأثير الزجاج المصنفر",
          "description": "مزيج من الشفافية والتمويه يخلق تأثيراً زجاجياً عصرياً",
          "values": [
            {
              "value": "background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2);",
              "description": "تأثير زجاجي أساسي"
            },
            {
              "value": "background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px) saturate(180%); border-radius: 16px;",
              "description": "زجاج مصنفر مع تشبع"
            },
            {
              "value": "background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(8px) brightness(1.1); border: 1px solid rgba(255, 255, 255, 0.15);",
              "description": "زجاج مصنفر مع سطوع"
            },
            {
              "value": "background: rgba(0, 0, 0, 0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);",
              "description": "زجاج مصنفر داكن"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة للفلاتر والمؤثرات البصرية في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - تأثير التمرير على الصور",
          "description": "تطبيق فلاتر عند تمرير الماوس على الصور",
          "values": [
            {
              "value": ".image { transition: filter 0.3s ease; } .image:hover { filter: brightness(1.1) saturate(120%) drop-shadow(0 4px 12px rgba(0,0,0,0.3)); }",
              "description": "تكبير سطوع وتشبع مع ظل عند التمرير"
            }
          ]
        },
        {
          "name": "مثال 2 - تأثير الزجاج المصنفر الكامل",
          "description": "تأثير زجاجي متكامل مع خلفية متدرجة",
          "values": [
            {
              "value": ".glass { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px) saturate(180%); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }",
              "description": "تأثير زجاج مصنفر كامل"
            }
          ]
        },
        {
          "name": "مثال 3 - صورة بتدرج رمادي مع سطوع",
          "description": "تحويل صورة إلى تدرج رمادي مع تحسين السطوع",
          "values": [
            {
              "value": ".image { filter: grayscale(100%) brightness(1.2) contrast(120%); }",
              "description": "تدرج رمادي مع سطوع وتباين"
            }
          ]
        },
        {
          "name": "مثال 4 - تأثير الوهج (Glow) باستخدام drop-shadow",
          "description": "تأثير توهج حول العنصر",
          "values": [
            {
              "value": ".glow { filter: drop-shadow(0 0 20px rgba(255, 100, 0, 0.6)) drop-shadow(0 0 40px rgba(255, 100, 0, 0.4)); }",
              "description": "توهج برتقالي متعدد الطبقات"
            }
          ]
        },
        {
          "name": "مثال 5 - صور متحركة بتأثيرات متغيرة",
          "description": "تغيير الفلاتر مع الحركة",
          "values": [
            {
              "value": "@keyframes filterAnimation { 0% { filter: blur(0px) saturate(100%); } 50% { filter: blur(3px) saturate(200%); } 100% { filter: blur(0px) saturate(100%); } } .animated { animation: filterAnimation 3s ease-in-out infinite; }",
              "description": "حركة دورية للفلاتر"
            }
          ]
        },
        {
          "name": "مثال 6 - خلفية متحركة مع تأثير الزجاج",
          "description": "خلفية متحركة مع تأثير زجاجي في المقدمة",
          "values": [
            {
              "value": ".background { background: linear-gradient(45deg, #f093fb, #f5576c, #4facfe, #43e97b); background-size: 400% 400%; animation: gradient 10s ease infinite; } .glass-card { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(10px); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.2); }",
              "description": "خلفية متحركة مع بطاقة زجاجية"
            }
          ]
        },
        {
          "name": "مثال 7 - تأثير النيون",
          "description": "تأثير نيون باستخدام drop-shadow",
          "values": [
            {
              "value": ".neon-text { color: #fff; filter: drop-shadow(0 0 10px #ff00ff) drop-shadow(0 0 20px #ff00ff) drop-shadow(0 0 40px #ff00ff); }",
              "description": "نص بتأثير نيون وردي"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام الفلاتر والمؤثرات البصرية بشكل فعال",
      "properties": [
        {
          "name": "نصائح الأداء",
          "description": "نصائح لتحسين أداء الفلاتر",
          "values": [
            {
              "value": "استخدم backdrop-filter بحذر",
              "description": "يمكن أن يؤثر على الأداء، خاصة على الجوال"
            },
            {
              "value": "استخدم will-change",
              "description": "will-change: filter, backdrop-filter يحسن الأداء للعناصر المتحركة"
            },
            {
              "value": "تجنب الفلاتر المتعددة الثقيلة",
              "description": "كلما زاد عدد الفلاتر، زاد استهلاك المعالج"
            },
            {
              "value": "استخدم transform مع filter",
              "description": "استخدام transform: translateZ(0) أو will-change يحفّز تسريع GPU"
            },
            {
              "value": "اختبر على الأجهزة الضعيفة",
              "description": "تأكد من أن التأثيرات تعمل بسلاسة على الجوالات القديمة"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل الفلاتر قابلة للوصول للجميع",
          "values": [
            {
              "value": "دعم prefers-reduced-motion",
              "description": "قلل الحركات للمستخدمين الذين يطلبون ذلك"
            },
            {
              "value": "تأكد من التباين",
              "description": "بعض الفلاتر قد تقلل من تباين النص"
            },
            {
              "value": "لا تعتمد على الفلاتر فقط",
              "description": "استخدم طرقاً إضافية لنقل المعلومات"
            }
          ]
        },
        {
          "name": "نصائح التصميم",
          "description": "نصائح لتصميم فلاتر جذابة",
          "values": [
            {
              "value": "استخدم فلاتر خفيفة",
              "description": "الفلاتر الثقيلة قد تبدو غير احترافية"
            },
            {
              "value": "جرب تأثير الزجاج المصنفر",
              "description": "أحد أشهر اتجاهات التصميم حالياً"
            },
            {
              "value": "استخدم drop-shadow بدلاً من box-shadow",
              "description": "drop-shadow يتبع شكل العنصر بدقة"
            },
            {
              "value": "أضف انتقالات",
              "description": "استخدم transition: filter 0.3s ease لتحولات سلسة"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام الفلاتر وكيفية تجنبها",
          "values": [
            {
              "value": "نسيان بادئة -webkit",
              "description": "خاصة في Safari، يجب إضافة -webkit-backdrop-filter"
            },
            {
              "value": "استخدام relative units مع blur",
              "description": "blur(50%) غير صحيح، استخدم px"
            },
            {
              "value": "استخدام drop-shadow مع box-shadow",
              "description": "drop-shadow يختلف عن box-shadow في الشكل"
            },
            {
              "value": "نسيان backdrop-filter للزجاج",
              "description": "بدون backdrop-filter يبقى العنصر شفافاً فقط"
            }
          ]
        }
      ]
    }
  ],
  "listsTables": [
    {
      "tag": "lists",
      "description": "خصائص تنسيق القوائم (Lists) المرتبة وغير المرتبة، تتحكم في علامات التعداد وأنواع الترقيم",
      "properties": [
        {
          "name": "list-style-type",
          "description": "يحدد نوع علامة التعداد في القوائم (نقطة، رقم، حرف، رمز، إلخ)",
          "values": [
            {
              "value": "disc",
              "description": "دائرة مملوءة (•) - القيمة الافتراضية للقوائم غير المرتبة"
            },
            {
              "value": "circle",
              "description": "دائرة فارغة (○)"
            },
            {
              "value": "square",
              "description": "مربع مملوء (■)"
            },
            {
              "value": "decimal",
              "description": "أرقام عادية (1، 2، 3...) - القيمة الافتراضية للقوائم المرتبة"
            },
            {
              "value": "decimal-leading-zero",
              "description": "أرقام بصفر بادئ (01، 02، 03...)"
            },
            {
              "value": "lower-roman",
              "description": "أرقام رومانية صغيرة (i، ii، iii، iv...)"
            },
            {
              "value": "upper-roman",
              "description": "أرقام رومانية كبيرة (I، II، III، IV...)"
            },
            {
              "value": "lower-alpha",
              "description": "حروف لاتينية صغيرة (a، b، c...)"
            },
            {
              "value": "upper-alpha",
              "description": "حروف لاتينية كبيرة (A، B، C...)"
            },
            {
              "value": "lower-latin",
              "description": "حروف لاتينية صغيرة (a، b، c...) - مرادف لـ lower-alpha"
            },
            {
              "value": "upper-latin",
              "description": "حروف لاتينية كبيرة (A، B، C...) - مرادف لـ upper-alpha"
            },
            {
              "value": "lower-greek",
              "description": "حروف يونانية صغيرة (α، β، γ...)"
            },
            {
              "value": "upper-greek",
              "description": "حروف يونانية كبيرة (Α، Β، Γ...)"
            },
            {
              "value": "armenian",
              "description": "ترقيم أرمني (Ա, Բ, Գ...)"
            },
            {
              "value": "georgian",
              "description": "ترقيم جورجي (ა, ბ, გ...)"
            },
            {
              "value": "hebrew",
              "description": "ترقيم عبري (א, ב, ג...)"
            },
            {
              "value": "cjk-ideographic",
              "description": "ترقيم صيني/ياباني/كوري (一, 二, 三...)"
            },
            {
              "value": "japanese-formal",
              "description": "ترقيم ياباني رسمي"
            },
            {
              "value": "japanese-informal",
              "description": "ترقيم ياباني غير رسمي"
            },
            {
              "value": "korean-hangul-formal",
              "description": "ترقيم كوري هانغول رسمي"
            },
            {
              "value": "korean-hanja-formal",
              "description": "ترقيم كوري هانجا رسمي"
            },
            {
              "value": "simp-chinese-formal",
              "description": "ترقيم صيني مبسط رسمي"
            },
            {
              "value": "simp-chinese-informal",
              "description": "ترقيم صيني مبسط غير رسمي"
            },
            {
              "value": "trad-chinese-formal",
              "description": "ترقيم صيني تقليدي رسمي"
            },
            {
              "value": "trad-chinese-informal",
              "description": "ترقيم صيني تقليدي غير رسمي"
            },
            {
              "value": "hiragana",
              "description": "ترقيم هيراغانا ياباني (あ, い, う...)"
            },
            {
              "value": "hiragana-iroha",
              "description": "ترقيم هيراغانا ياباني (い, ろ, は...)"
            },
            {
              "value": "katakana",
              "description": "ترقيم كاتاكانا ياباني (ア, イ, ウ...)"
            },
            {
              "value": "katakana-iroha",
              "description": "ترقيم كاتاكانا ياباني (イ, ロ, ハ...)"
            },
            {
              "value": "none",
              "description": "بدون علامة تعداد - يخفي علامات التعداد"
            },
            {
              "value": "inherit",
              "description": "يرث قيمة العنصر الأب"
            },
            {
              "value": "initial",
              "description": "يعيد إلى القيمة الافتراضية"
            },
            {
              "value": "unset",
              "description": "يرث إذا كان ممكناً أو يعيد إلى الافتراضي"
            },
            {
              "value": "\"→ \"",
              "description": "سهم كعلامة تعداد مخصصة"
            },
            {
              "value": "\"✦ \"",
              "description": "نجمة كماسة كعلامة تعداد"
            },
            {
              "value": "\"✓ \"",
              "description": "علامة صح كعلامة تعداد"
            },
            {
              "value": "\"• \"",
              "description": "نقطة وسط كعلامة تعداد"
            },
            {
              "value": "\"▶ \"",
              "description": "مثلث أيمن كعلامة تعداد"
            },
            {
              "value": "\"♦ \"",
              "description": "ماسة كعلامة تعداد"
            },
            {
              "value": "\"❝ \"",
              "description": "علامة تنصيص مزدوجة"
            },
            {
              "value": "\"★ \"",
              "description": "نجمة كعلامة تعداد"
            }
          ],
          "freeInput": true
        },
        {
          "name": "list-style-position",
          "description": "يحدد موقع علامة التعداد (داخل العنصر أم خارجه) بالنسبة لنص العنصر",
          "values": [
            {
              "value": "outside",
              "description": "خارج العنصر (على يسار النص) - القيمة الافتراضية"
            },
            {
              "value": "inside",
              "description": "داخل العنصر (على يسار النص داخل الحدود)"
            }
          ]
        },
        {
          "name": "list-style-image",
          "description": "يستخدم صورة كعلامة تعداد بدلاً من النمط الافتراضي، يسمح بأيقونات مخصصة",
          "values": [
            {
              "value": "none",
              "description": "بدون صورة، يستخدم list-style-type - القيمة الافتراضية"
            },
            {
              "value": "url('bullet.png')",
              "description": "صورة PNG كعلامة تعداد"
            },
            {
              "value": "url('bullet.svg')",
              "description": "صورة SVG كعلامة تعداد (قابلة للتكبير)"
            },
            {
              "value": "url('bullet.jpg')",
              "description": "صورة JPG كعلامة تعداد"
            },
            {
              "value": "url('https://example.com/icon.png')",
              "description": "صورة من رابط خارجي"
            },
            {
              "value": "url('data:image/svg+xml,...')",
              "description": "صورة مشفرة في الـ CSS"
            }
          ],
          "freeInput": true
        },
        {
          "name": "list-style",
          "description": "اختصار لـ list-style-type و list-style-position و list-style-image في سطر واحد",
          "values": [
            {
              "value": "disc outside",
              "description": "دائرة خارج العنصر - القيمة الافتراضية"
            },
            {
              "value": "circle inside",
              "description": "دائرة فارغة داخل العنصر"
            },
            {
              "value": "square outside",
              "description": "مربع خارج العنصر"
            },
            {
              "value": "decimal inside",
              "description": "أرقام داخل العنصر"
            },
            {
              "value": "lower-roman outside",
              "description": "أرقام رومانية صغيرة خارج العنصر"
            },
            {
              "value": "upper-alpha outside",
              "description": "حروف كبيرة خارج العنصر"
            },
            {
              "value": "disc outside url('bullet.png')",
              "description": "دائرة مع صورة (الصورة تتجاوز النوع)"
            },
            {
              "value": "none",
              "description": "بدون علامة تعداد"
            },
            {
              "value": "url('bullet.svg') inside",
              "description": "صورة داخل العنصر"
            }
          ],
          "freeInput": true
        },
        {
          "name": "marker",
          "description": "يحدد أنماطاً لعلامات التعداد، خاصية جديدة للتحكم في مظهر العلامات",
          "values": [
            {
              "value": "none",
              "description": "بدون علامة"
            },
            {
              "value": "auto",
              "description": "تلقائي حسب list-style-type"
            },
            {
              "value": "inside",
              "description": "داخل العنصر"
            },
            {
              "value": "outside",
              "description": "خارج العنصر"
            }
          ]
        },
        {
          "name": "counter-reset (للقوائم)",
          "description": "يُعيد تعيين عداد القائمة للبدء من رقم معين (للإصدارات المخصصة)",
          "values": [
            {
              "value": "none",
              "description": "بدون إعادة تعيين - القيمة الافتراضية"
            },
            {
              "value": "list-item",
              "description": "يعيد تعيين عداد عناصر القائمة"
            },
            {
              "value": "list-item 5",
              "description": "يبدأ الترقيم من الرقم 5"
            },
            {
              "value": "list-item 10",
              "description": "يبدأ الترقيم من الرقم 10"
            }
          ],
          "freeInput": true
        },
        {
          "name": "counter-increment (للقوائم)",
          "description": "يزيد عداد القائمة لكل عنصر (للإصدارات المخصصة)",
          "values": [
            {
              "value": "none",
              "description": "بدون زيادة - القيمة الافتراضية"
            },
            {
              "value": "list-item",
              "description": "يزيد عداد عناصر القائمة بمقدار 1"
            },
            {
              "value": "list-item 2",
              "description": "يزيد بمقدار 2"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "tables",
      "description": "خصائص تنسيق الجداول (Tables)، تتحكم في مظهر الخلايا والحواف والمسافات",
      "properties": [
        {
          "name": "border-collapse",
          "description": "يحدد هل تتحد حواف الخلايا المتجاورة في جدول واحد أم تبقى منفصلة",
          "values": [
            {
              "value": "separate",
              "description": "حواف منفصلة مع مسافة بينها - القيمة الافتراضية"
            },
            {
              "value": "collapse",
              "description": "حواف متحدة في خط واحد - يمنع ظهور حواف مزدوجة"
            }
          ]
        },
        {
          "name": "border-spacing",
          "description": "يحدد المسافة بين حواف الخلايا في الجدول (يعمل فقط مع border-collapse: separate)",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة بين الخلايا - القيمة الافتراضية"
            },
            {
              "value": "1px",
              "description": "مسافة 1 بكسل بين الخلايا"
            },
            {
              "value": "2px",
              "description": "مسافة 2 بكسل"
            },
            {
              "value": "3px",
              "description": "مسافة 3 بكسل"
            },
            {
              "value": "4px",
              "description": "مسافة 4 بكسل"
            },
            {
              "value": "5px",
              "description": "مسافة 5 بكسل"
            },
            {
              "value": "8px",
              "description": "مسافة 8 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "15px",
              "description": "مسافة 15 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "1rem",
              "description": "مسافة 1rem"
            },
            {
              "value": "5px 10px",
              "description": "5 بكسل أفقياً (بين الأعمدة)، 10 بكسل عمودياً (بين الصفوف)"
            },
            {
              "value": "10px 20px",
              "description": "10 بكسل أفقياً، 20 بكسل عمودياً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "caption-side",
          "description": "يحدد موقع عنوان الجدول (فوق الجدول أم تحته)",
          "values": [
            {
              "value": "top",
              "description": "فوق الجدول - القيمة الافتراضية"
            },
            {
              "value": "bottom",
              "description": "تحت الجدول"
            },
            {
              "value": "block-start",
              "description": "في بداية الكتلة (فوق في اللغات الأفقية)"
            },
            {
              "value": "block-end",
              "description": "في نهاية الكتلة (تحت في اللغات الأفقية)"
            },
            {
              "value": "inline-start",
              "description": "في بداية السطر (يسار في اللغات LTR)"
            },
            {
              "value": "inline-end",
              "description": "في نهاية السطر (يمين في اللغات LTR)"
            }
          ]
        },
        {
          "name": "empty-cells",
          "description": "يحدد هل تظهر حواف الخلايا الفارغة في الجدول أم لا",
          "values": [
            {
              "value": "show",
              "description": "تظهر حواف الخلايا الفارغة وخلفيتها - القيمة الافتراضية"
            },
            {
              "value": "hide",
              "description": "تخفي حواف وخلفية الخلايا الفارغة"
            }
          ]
        },
        {
          "name": "table-layout",
          "description": "يحدد كيفية حساب عرض أعمدة الجدول (تلقائي حسب المحتوى أو ثابت)",
          "values": [
            {
              "value": "auto",
              "description": "يحسب المتصفح العرض تلقائياً حسب المحتوى - القيمة الافتراضية"
            },
            {
              "value": "fixed",
              "description": "عرض ثابت، العمود الأول يحدد العرض، يحسن الأداء بشكل كبير"
            }
          ]
        },
        {
          "name": "vertical-align",
          "description": "يحدد المحاذاة الرأسية لمحتوى خلايا الجدول (أو العناصر السطرية عموماً)",
          "values": [
            {
              "value": "baseline",
              "description": "محاذاة حسب خط الأساس للنص - القيمة الافتراضية"
            },
            {
              "value": "top",
              "description": "محاذاة إلى أعلى الخلية"
            },
            {
              "value": "middle",
              "description": "محاذاة إلى منتصف الخلية"
            },
            {
              "value": "bottom",
              "description": "محاذاة إلى أسفل الخلية"
            },
            {
              "value": "sub",
              "description": "كنص منخفض (subscript) - مثل <sub>"
            },
            {
              "value": "super",
              "description": "كنص مرتفع (superscript) - مثل <sup>"
            },
            {
              "value": "text-top",
              "description": "محاذاة مع أعلى النص"
            },
            {
              "value": "text-bottom",
              "description": "محاذاة مع أسفل النص"
            }
          ],
          "freeInput": true
        },
        {
          "name": "width (للجداول)",
          "description": "يحدد عرض الجدول أو الخلية، يمكن أن يكون ثابتاً أو نسبياً",
          "values": [
            {
              "value": "auto",
              "description": "عرض تلقائي حسب المحتوى - القيمة الافتراضية"
            },
            {
              "value": "100%",
              "description": "عرض كامل الحاوية"
            },
            {
              "value": "800px",
              "description": "عرض ثابت 800 بكسل"
            },
            {
              "value": "50%",
              "description": "نصف عرض الحاوية"
            }
          ],
          "freeInput": true
        },
        {
          "name": "height (للجداول)",
          "description": "يحدد ارتفاع الجدول أو الخلية",
          "values": [
            {
              "value": "auto",
              "description": "ارتفاع تلقائي حسب المحتوى - القيمة الافتراضية"
            },
            {
              "value": "100%",
              "description": "ارتفاع كامل الحاوية"
            },
            {
              "value": "100px",
              "description": "ارتفاع ثابت 100 بكسل"
            }
          ],
          "freeInput": true
        },
        {
          "name": "border (للجداول)",
          "description": "يحدد حواف الجدول والخلايا، يمكن استخدام border-collapse لدمج الحواف",
          "values": [
            {
              "value": "none",
              "description": "بدون حواف - القيمة الافتراضية"
            },
            {
              "value": "1px solid black",
              "description": "حافة سوداء صلبة"
            },
            {
              "value": "2px solid #ccc",
              "description": "حافة رمادية فاتحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "padding (للخلايا)",
          "description": "يحدد المسافة الداخلية للخلايا، يضيف فجوة بين المحتوى والحواف",
          "values": [
            {
              "value": "0",
              "description": "بدون مسافة داخلية"
            },
            {
              "value": "4px",
              "description": "مسافة 4 بكسل"
            },
            {
              "value": "8px",
              "description": "مسافة 8 بكسل"
            },
            {
              "value": "10px",
              "description": "مسافة 10 بكسل"
            },
            {
              "value": "12px",
              "description": "مسافة 12 بكسل"
            },
            {
              "value": "16px",
              "description": "مسافة 16 بكسل"
            },
            {
              "value": "20px",
              "description": "مسافة 20 بكسل"
            },
            {
              "value": "8px 12px",
              "description": "8 بكسل أعلى/أسفل، 12 بكسل يمين/يسار"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام خصائص القوائم والجداول في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - قائمة مخصصة بأيقونات",
          "description": "قائمة غير مرتبة بأيقونات مخصصة بدلاً من النقاط",
          "values": [
            {
              "value": "ul.custom { list-style: none; padding: 0; } ul.custom li { padding-left: 30px; background: url('icon.png') left center no-repeat; }",
              "description": "قائمة بأيقونات مخصصة"
            },
            {
              "value": "ul.custom { list-style-type: '→ '; padding-left: 20px; }",
              "description": "قائمة بسهم كعلامة تعداد"
            },
            {
              "value": "ul.custom li::marker { color: #007bff; font-size: 1.2em; }",
              "description": "تخصيص لون وحجم العلامة"
            }
          ]
        },
        {
          "name": "مثال 2 - قائمة مرقمة بتنسيق مخصص",
          "description": "قائمة مرتبة مع تنسيق خاص للأرقام",
          "values": [
            {
              "value": "ol.custom { list-style-type: upper-roman; font-weight: bold; } ol.custom li { margin-bottom: 8px; }",
              "description": "قائمة بأرقام رومانية كبيرة"
            },
            {
              "value": "ol.custom { list-style-type: lower-alpha; padding-left: 30px; }",
              "description": "قائمة بحروف صغيرة"
            },
            {
              "value": "ol.custom { list-style-type: decimal-leading-zero; }",
              "description": "قائمة بأرقام بصفر بادئ"
            }
          ]
        },
        {
          "name": "مثال 3 - جدول أنيق",
          "description": "جدول بتصميم نظيف مع حواف مدمجة وتباعد مناسب",
          "values": [
            {
              "value": "table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid #ddd; padding: 12px; text-align: left; } th { background: #f5f5f5; font-weight: bold; } tr:nth-child(even) { background: #f9f9f9; } tr:hover { background: #f0f0f0; }",
              "description": "جدول أنيق مع تظليل الصفوف"
            }
          ]
        },
        {
          "name": "مثال 4 - جدول بدون حواف",
          "description": "جدول بتصميم نظيف بدون حواف مرئية",
          "values": [
            {
              "value": "table { border-collapse: collapse; width: 100%; } th, td { padding: 12px 16px; border-bottom: 1px solid #eee; } th { border-bottom: 2px solid #333; }",
              "description": "جدول بدون حواف جانبية"
            }
          ]
        },
        {
          "name": "مثال 5 - جدول بعنوان في الأسفل",
          "description": "جدول مع عنوان يظهر في الأسفل",
          "values": [
            {
              "value": "table { caption-side: bottom; } caption { padding: 8px; font-style: italic; color: #666; }",
              "description": "عنوان جدول في الأسفل"
            }
          ]
        },
        {
          "name": "مثال 6 - قائمة متداخلة",
          "description": "قوائم متداخلة بتنسيق مختلف لكل مستوى",
          "values": [
            {
              "value": "ul { list-style-type: disc; } ul ul { list-style-type: circle; } ul ul ul { list-style-type: square; }",
              "description": "قوائم متداخلة بعلامات مختلفة"
            }
          ]
        },
        {
          "name": "مثال 7 - جدول بعرض ثابت",
          "description": "جدول بعرض ثابت لتحسين الأداء",
          "values": [
            {
              "value": "table { table-layout: fixed; width: 100%; } colgroup .col1 { width: 20%; } colgroup .col2 { width: 50%; } colgroup .col3 { width: 30%; }",
              "description": "جدول بعرض ثابت للأعمدة"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام خصائص القوائم والجداول بشكل فعال",
      "properties": [
        {
          "name": "نصائح القوائم",
          "description": "نصائح لتنسيق القوائم بشكل فعال",
          "values": [
            {
              "value": "استخدم list-style: none لإزالة العلامات",
              "description": "ثم استخدم background-image أو ::before لإضافة أيقونات مخصصة"
            },
            {
              "value": "استخدم list-style-position: inside",
              "description": "يجعل العلامات جزءاً من المحتوى، مفيد للتباعد"
            },
            {
              "value": "استخدم ::marker لتخصيص العلامات",
              "description": "::marker { color: red; font-size: 1.2em; } يغير لون وحجم العلامة"
            },
            {
              "value": "استخدم counter() للقوائم المخصصة",
              "description": "يمكن إنشاء ترقيم مخصص باستخدام العدادات"
            }
          ]
        },
        {
          "name": "نصائح الجداول",
          "description": "نصائح لتنسيق الجداول بشكل فعال",
          "values": [
            {
              "value": "استخدم border-collapse: collapse",
              "description": "يجعل حواف الجدول أنظف بدمج الحواف"
            },
            {
              "value": "استخدم table-layout: fixed",
              "description": "يحسن أداء الجداول الكبيرة بشكل كبير"
            },
            {
              "value": "استخدم padding للخلايا",
              "description": "padding يجعل الجدول أكثر قابلية للقراءة"
            },
            {
              "value": "استخدم nth-child لتظليل الصفوف",
              "description": "tr:nth-child(even) يسهل قراءة الجداول الطويلة"
            }
          ]
        },
        {
          "name": "نصائح إمكانية الوصول",
          "description": "نصائح لجعل القوائم والجداول قابلة للوصول",
          "values": [
            {
              "value": "استخدم <th> لرؤوس الأعمدة",
              "description": "يساعد قارئات الشاشة في فهم هيكل الجدول"
            },
            {
              "value": "استخدم scope في <th>",
              "description": "scope=\"col\" أو scope=\"row\" يوضح العلاقة"
            },
            {
              "value": "استخدم caption للجداول",
              "description": "يصف محتوى الجدول للمستخدمين"
            },
            {
              "value": "استخدم <ul> و <ol> للقوائم",
              "description": "تساعد قارئات الشاشة في التنقل"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام القوائم والجداول وكيفية تجنبها",
          "values": [
            {
              "value": "نسيان border-collapse",
              "description": "بدونها تظهر حواف مزدوجة"
            },
            {
              "value": "استخدام padding على <table> مباشرة",
              "description": "استخدم padding على <td> و <th>"
            },
            {
              "value": "استخدام width: 100% مع table-layout: auto",
              "description": "قد لا يعمل كما هو متوقع، استخدم fixed"
            },
            {
              "value": "نسيان <ul> أو <ol> للقوائم",
              "description": "استخدم القوائم الصحيحة لعلامات التعداد"
            }
          ]
        }
      ]
    }
  ],
  "pagedMedia": [
    {
      "tag": "page-break",
      "description": "خصائص التحكم في فواصل الصفحات عند الطباعة، تتحكم في مكان بدء صفحة جديدة",
      "properties": [
        {
          "name": "page-break-before",
          "description": "يحدد إدراج فاصل صفحة قبل العنصر عند الطباعة، يجبر العنصر على البدء في صفحة جديدة",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - يترك المتصفح يقرر ما إذا كان سيضيف فاصل صفحة - القيمة الافتراضية"
            },
            {
              "value": "always",
              "description": "إدراج فاصل صفحة دائماً قبل العنصر - يجبر العنصر على البدء في صفحة جديدة"
            },
            {
              "value": "avoid",
              "description": "تجنب فاصل الصفحة قبل العنصر إن أمكن - يحاول إبقاء العنصر في نفس الصفحة"
            },
            {
              "value": "left",
              "description": "إدراج فاصل صفحة ليصبح العنصر في صفحة يسرى (صفحة فردية)"
            },
            {
              "value": "right",
              "description": "إدراج فاصل صفحة ليصبح العنصر في صفحة يمنى (صفحة زوجية)"
            },
            {
              "value": "recto",
              "description": "إدراج فاصل صفحة ليصبح العنصر في صفحة recto (في العربية هي الصفحة اليمنى)"
            },
            {
              "value": "verso",
              "description": "إدراج فاصل صفحة ليصبح العنصر في صفحة verso (في العربية هي الصفحة اليسرى)"
            }
          ]
        },
        {
          "name": "page-break-after",
          "description": "يحدد إدراج فاصل صفحة بعد العنصر عند الطباعة، يجبر المحتوى التالي على البدء في صفحة جديدة",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - يترك المتصفح يقرر - القيمة الافتراضية"
            },
            {
              "value": "always",
              "description": "إدراج فاصل صفحة دائماً بعد العنصر"
            },
            {
              "value": "avoid",
              "description": "تجنب فاصل الصفحة بعد العنصر إن أمكن"
            },
            {
              "value": "left",
              "description": "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة يسرى"
            },
            {
              "value": "right",
              "description": "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة يمنى"
            },
            {
              "value": "recto",
              "description": "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة recto"
            },
            {
              "value": "verso",
              "description": "إدراج فاصل صفحة ليصبح العنصر التالي في صفحة verso"
            }
          ]
        },
        {
          "name": "page-break-inside",
          "description": "يحدد منع كسر العنصر عبر صفحتين (منع الفاصل داخله)، يحافظ على سلامة العنصر",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - يسمح بكسر العنصر عبر صفحات - القيمة الافتراضية"
            },
            {
              "value": "avoid",
              "description": "تجنب كسر العنصر عبر صفحتين - يحاول إبقاء العنصر في صفحة واحدة"
            }
          ]
        },
        {
          "name": "orphans",
          "description": "يحدد الحد الأدنى لعدد الأسطر التي يجب أن تبقى في أسفل الصفحة عند كسر الفقرة (الأيتام)",
          "values": [
            {
              "value": "2",
              "description": "سطران على الأقل في أسفل الصفحة - القيمة الافتراضية"
            },
            {
              "value": "3",
              "description": "ثلاثة أسطر على الأقل في أسفل الصفحة"
            },
            {
              "value": "4",
              "description": "أربعة أسطر على الأقل في أسفل الصفحة"
            },
            {
              "value": "5",
              "description": "خمسة أسطر على الأقل في أسفل الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "widows",
          "description": "يحدد الحد الأدنى لعدد الأسطر التي يجب أن تبقى في أعلى الصفحة عند كسر الفقرة (الأرامل)",
          "values": [
            {
              "value": "2",
              "description": "سطران على الأقل في أعلى الصفحة - القيمة الافتراضية"
            },
            {
              "value": "3",
              "description": "ثلاثة أسطر على الأقل في أعلى الصفحة"
            },
            {
              "value": "4",
              "description": "أربعة أسطر على الأقل في أعلى الصفحة"
            },
            {
              "value": "5",
              "description": "خمسة أسطر على الأقل في أعلى الصفحة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "page",
          "description": "يحدد اسم الصفحة التي سيظهر فيها العنصر (يستخدم مع @page)، يسمح بتخصيص صفحات مختلفة",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "chapter",
              "description": "يظهر العنصر في صفحة باسم 'chapter'"
            },
            {
              "value": "appendix",
              "description": "يظهر العنصر في صفحة باسم 'appendix'"
            },
            {
              "value": "cover",
              "description": "يظهر العنصر في صفحة باسم 'cover'"
            },
            {
              "value": "title",
              "description": "يظهر العنصر في صفحة باسم 'title'"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "break-properties",
      "description": "النسخة الحديثة والموحدة من page-break-*، تعمل عبر الطباعة وأيضاً عبر الأعمدة المتعددة (multi-column) والشبكات المجزأة",
      "properties": [
        {
          "name": "break-before",
          "description": "يحدد فاصل قبل العنصر (يعمل للطباعة والأعمدة والشبكات)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "page",
              "description": "فاصل صفحة قبل العنصر (للكتابة)"
            },
            {
              "value": "column",
              "description": "فاصل عمود قبل العنصر (للتخطيط متعدد الأعمدة)"
            },
            {
              "value": "region",
              "description": "فاصل منطقة قبل العنصر"
            },
            {
              "value": "avoid",
              "description": "تجنب الفاصل قبل العنصر إن أمكن"
            },
            {
              "value": "avoid-page",
              "description": "تجنب فاصل الصفحة قبل العنصر"
            },
            {
              "value": "avoid-column",
              "description": "تجنب فاصل العمود قبل العنصر"
            },
            {
              "value": "avoid-region",
              "description": "تجنب فاصل المنطقة قبل العنصر"
            },
            {
              "value": "left",
              "description": "فاصل صفحة ليكون العنصر في صفحة يسرى"
            },
            {
              "value": "right",
              "description": "فاصل صفحة ليكون العنصر في صفحة يمنى"
            },
            {
              "value": "recto",
              "description": "فاصل صفحة ليكون العنصر في صفحة recto"
            },
            {
              "value": "verso",
              "description": "فاصل صفحة ليكون العنصر في صفحة verso"
            }
          ]
        },
        {
          "name": "break-after",
          "description": "يحدد فاصل بعد العنصر (يعمل للطباعة والأعمدة والشبكات)",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - القيمة الافتراضية"
            },
            {
              "value": "page",
              "description": "فاصل صفحة بعد العنصر"
            },
            {
              "value": "column",
              "description": "فاصل عمود بعد العنصر"
            },
            {
              "value": "region",
              "description": "فاصل منطقة بعد العنصر"
            },
            {
              "value": "avoid",
              "description": "تجنب الفاصل بعد العنصر إن أمكن"
            },
            {
              "value": "avoid-page",
              "description": "تجنب فاصل الصفحة بعد العنصر"
            },
            {
              "value": "avoid-column",
              "description": "تجنب فاصل العمود بعد العنصر"
            },
            {
              "value": "avoid-region",
              "description": "تجنب فاصل المنطقة بعد العنصر"
            },
            {
              "value": "left",
              "description": "فاصل صفحة ليكون العنصر التالي في صفحة يسرى"
            },
            {
              "value": "right",
              "description": "فاصل صفحة ليكون العنصر التالي في صفحة يمنى"
            },
            {
              "value": "recto",
              "description": "فاصل صفحة ليكون العنصر التالي في صفحة recto"
            },
            {
              "value": "verso",
              "description": "فاصل صفحة ليكون العنصر التالي في صفحة verso"
            }
          ]
        },
        {
          "name": "break-inside",
          "description": "يحدد منع كسر العنصر نفسه عبر صفحة أو عمود أو منطقة",
          "values": [
            {
              "value": "auto",
              "description": "تلقائي - يسمح بالكسر - القيمة الافتراضية"
            },
            {
              "value": "avoid",
              "description": "تجنب كسر العنصر عبر الصفحات"
            },
            {
              "value": "avoid-page",
              "description": "تجنب كسر العنصر عبر الصفحات"
            },
            {
              "value": "avoid-column",
              "description": "تجنب كسر العنصر عبر الأعمدة"
            },
            {
              "value": "avoid-region",
              "description": "تجنب كسر العنصر عبر المناطق"
            }
          ]
        }
      ]
    },
    {
      "tag": "at-page",
      "description": "قاعدة @page تُستخدم لتخصيص أبعاد وهوامش الصفحة المطبوعة نفسها، وتقبل محددات مثل :first أو :left/:right لتخصيص صفحات معينة",
      "properties": [
        {
          "name": "@page (قاعدة)",
          "description": "تُستخدم لتخصيص خصائص الصفحة المطبوعة مثل الحجم والهوامش",
          "values": [
            {
              "value": "@page { size: A4; margin: 2cm; }",
              "description": "تحديد حجم الصفحة A4 وهامش 2 سم"
            },
            {
              "value": "@page { size: A5; margin: 1.5cm; }",
              "description": "حجم A5 مع هامش 1.5 سم"
            },
            {
              "value": "@page { size: legal; margin: 2.5cm; }",
              "description": "حجم Legal مع هامش 2.5 سم"
            },
            {
              "value": "@page { size: letter; margin: 1in; }",
              "description": "حجم Letter مع هامش 1 بوصة"
            },
            {
              "value": "@page { size: landscape; }",
              "description": "اتجاه أفقي للصفحة"
            },
            {
              "value": "@page { size: portrait; }",
              "description": "اتجاه عمودي للصفحة - القيمة الافتراضية"
            },
            {
              "value": "@page { size: A4 landscape; }",
              "description": "حجم A4 مع اتجاه أفقي"
            },
            {
              "value": "@page { size: 210mm 297mm; }",
              "description": "حجم مخصص بالملليمتر"
            },
            {
              "value": "@page { size: 8.5in 11in; }",
              "description": "حجم مخصص بالبوصة"
            },
            {
              "value": "@page { margin: 2cm 3cm; }",
              "description": "هامش 2 سم أعلى/أسفل، 3 سم يمين/يسار"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@page :first",
          "description": "تخصيص الصفحة الأولى فقط (مثل صفحة العنوان)",
          "values": [
            {
              "value": "@page :first { margin-top: 5cm; }",
              "description": "هامش علوي مختلف للصفحة الأولى فقط"
            },
            {
              "value": "@page :first { margin: 4cm; }",
              "description": "هامش أكبر للصفحة الأولى"
            },
            {
              "value": "@page :first { size: A4; }",
              "description": "حجم خاص للصفحة الأولى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@page :left / :right",
          "description": "تخصيص الصفحات اليسرى واليمنى بشكل مختلف (للطباعة على الوجهين)",
          "values": [
            {
              "value": "@page :left { margin-left: 3cm; margin-right: 2cm; }",
              "description": "هامش أيسر أكبر للصفحات اليسرى"
            },
            {
              "value": "@page :right { margin-left: 2cm; margin-right: 3cm; }",
              "description": "هامش أيمن أكبر للصفحات اليمنى"
            },
            {
              "value": "@page :left { margin: 2cm 3cm 2cm 4cm; }",
              "description": "هوامش مختلفة للصفحات اليسرى"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@page :blank",
          "description": "تخصيص الصفحات الفارغة (الصفحات التي لا تحتوي على محتوى)",
          "values": [
            {
              "value": "@page :blank { margin: 0; }",
              "description": "إزالة هوامش الصفحات الفارغة"
            },
            {
              "value": "@page :blank { display: none; }",
              "description": "إخفاء الصفحات الفارغة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "@page مع أسماء مخصصة",
          "description": "تخصيص صفحات بأسماء محددة باستخدام العنصر page",
          "values": [
            {
              "value": "@page chapter { size: A4; margin: 2cm; } .chapter { page: chapter; }",
              "description": "صفحات الفصول بحجم A4"
            },
            {
              "value": "@page appendix { size: A5; } .appendix { page: appendix; }",
              "description": "صفحات الملاحق بحجم A5"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "print-properties",
      "description": "خصائص إضافية مفيدة عند الطباعة",
      "properties": [
        {
          "name": "@media print",
          "description": "تطبيق أنماط خاصة بالطباعة فقط",
          "values": [
            {
              "value": "@media print { .no-print { display: none; } }",
              "description": "إخفاء عناصر معينة عند الطباعة"
            },
            {
              "value": "@media print { .print-only { display: block; } }",
              "description": "إظهار عناصر فقط عند الطباعة"
            },
            {
              "value": "@media print { a[href]::after { content: ' (' attr(href) ')'; } }",
              "description": "إظهار روابط URL عند الطباعة"
            },
            {
              "value": "@media print { body { font-size: 12pt; } }",
              "description": "حجم خط مناسب للطباعة"
            },
            {
              "value": "@media print { .page-break { page-break-before: always; } }",
              "description": "إضافة فاصل صفحة عند الطباعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "marks",
          "description": "يضيف علامات طباعة مثل علامات القطع والعلامات المتقاطعة (للمطبوعات الاحترافية)",
          "values": [
            {
              "value": "crop",
              "description": "علامات القطع (Crop marks) لقص الصفحة"
            },
            {
              "value": "cross",
              "description": "علامات متقاطعة للمحاذاة"
            },
            {
              "value": "crop cross",
              "description": "كلتا العلامات معاً"
            }
          ],
          "freeInput": true
        },
        {
          "name": "bleed",
          "description": "يحدد مساحة التجاوز (Bleed) للطباعة الاحترافية، وهي المسافة التي تمتد خارج حافة الصفحة لضمان عدم وجود حدود بيضاء بعد القص",
          "values": [
            {
              "value": "0",
              "description": "بدون تجاوز - القيمة الافتراضية"
            },
            {
              "value": "3mm",
              "description": "تجاوز 3 ملليمتر (شائع في الطباعة)"
            },
            {
              "value": "5mm",
              "description": "تجاوز 5 ملليمتر"
            },
            {
              "value": "0.125in",
              "description": "تجاوز 1/8 بوصة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "color-adjust",
          "description": "يتحكم في كيفية تعديل الألوان عند الطباعة لتوفير الحبر أو تحسين القراءة",
          "values": [
            {
              "value": "economy",
              "description": "يضبط الألوان لتوفير الحبر عند الطباعة"
            },
            {
              "value": "exact",
              "description": "يحافظ على الألوان الأصلية بدقة عند الطباعة"
            }
          ],
          "freeInput": true
        },
        {
          "name": "print-color-adjust",
          "description": "النسخة الحديثة من color-adjust، تتحكم في تحسين الألوان للطباعة",
          "values": [
            {
              "value": "economy",
              "description": "توفير الحبر عند الطباعة"
            },
            {
              "value": "exact",
              "description": "الحفاظ على الألوان الأصلية"
            }
          ],
          "freeInput": true
        }
      ]
    },
    {
      "tag": "examples",
      "description": "أمثلة عملية متقدمة لاستخدام خصائص الطباعة في سيناريوهات حقيقية",
      "properties": [
        {
          "name": "مثال 1 - إخفاء عناصر عند الطباعة",
          "description": "إخفاء القوائم والأزرار والإعلانات عند الطباعة",
          "values": [
            {
              "value": "@media print { .nav, .sidebar, .ad, .footer, .button { display: none; } .main-content { width: 100%; margin: 0; padding: 0; } }",
              "description": "إخفاء العناصر غير الضرورية عند الطباعة"
            }
          ]
        },
        {
          "name": "مثال 2 - إظهار روابط URL",
          "description": "عرض روابط URL بجانب النص عند الطباعة",
          "values": [
            {
              "value": "@media print { a[href]::after { content: ' (' attr(href) ')'; font-size: 0.9em; color: #666; } a[href^=\"#\"]::after { content: ''; } }",
              "description": "عرض الروابط كاملة عند الطباعة"
            }
          ]
        },
        {
          "name": "مثال 3 - تخصيص صفحة العنوان",
          "description": "صفحة عنوان مع هامش خاص",
          "values": [
            {
              "value": "@page title { margin: 5cm 3cm; } .title-page { page: title; }",
              "description": "صفحة عنوان بهوامش واسعة"
            }
          ]
        },
        {
          "name": "مثال 4 - طباعة على الوجهين",
          "description": "هوامش مختلفة للصفحات اليسرى واليمنى",
          "values": [
            {
              "value": "@page :left { margin-left: 3cm; margin-right: 2cm; } @page :right { margin-left: 2cm; margin-right: 3cm; }",
              "description": "هوامش مناسبة للطباعة على الوجهين"
            }
          ]
        },
        {
          "name": "مثال 5 - منع كسر الجداول",
          "description": "منع تقسيم الجدول عبر صفحات متعددة",
          "values": [
            {
              "value": "table { page-break-inside: avoid; } tr { page-break-inside: avoid; }",
              "description": "الحفاظ على سلامة الجداول عند الطباعة"
            }
          ]
        },
        {
          "name": "مثال 6 - إضافة فاصل صفحة للفصول",
          "description": "بدء كل فصل في صفحة جديدة",
          "values": [
            {
              "value": "h1.chapter { page-break-before: always; }",
              "description": "كل فصل يبدأ في صفحة جديدة"
            }
          ]
        },
        {
          "name": "مثال 7 - تحسين الصور للطباعة",
          "description": "ضبط الصور للطباعة",
          "values": [
            {
              "value": "@media print { img { max-width: 100%; page-break-inside: avoid; } }",
              "description": "منع كسر الصور وضبط حجمها"
            }
          ]
        }
      ]
    },
    {
      "tag": "tips",
      "description": "نصائح وإرشادات مهمة لاستخدام خصائص الطباعة بشكل فعال",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح أساسية للطباعة",
          "values": [
            {
              "value": "استخدم @media print",
              "description": "لفصل أنماط الطباعة عن أنماط الشاشة"
            },
            {
              "value": "استخدم page-break-inside: avoid",
              "description": "للحفاظ على سلامة العناصر الكبيرة"
            },
            {
              "value": "استخدم orphans و widows",
              "description": "لتحسين شكل الفقرات المطبوعة"
            },
            {
              "value": "اختبر الطباعة في المتصفح",
              "description": "استخدم Print Preview للتحقق من النتائج"
            }
          ]
        },
        {
          "name": "نصائح تحسين الطباعة",
          "description": "نصائح لجعل المستندات المطبوعة أفضل",
          "values": [
            {
              "value": "استخدم pt و cm و in",
              "description": "وحدات الطباعة أفضل من px"
            },
            {
              "value": "تجنب الخلفيات الملونة",
              "description": "تستهلك حبراً وتقلل القراءة"
            },
            {
              "value": "استخدم ألواناً داكنة على فاتحة",
              "description": "أفضل للقراءة عند الطباعة"
            },
            {
              "value": "أضف روابط URL",
              "description": "لتسهيل الوصول للمصادر"
            }
          ]
        },
        {
          "name": "نصائح توفير الحبر",
          "description": "نصائح لتوفير الحبر عند الطباعة",
          "values": [
            {
              "value": "استخدم print-color-adjust: economy",
              "description": "يضبط الألوان لتوفير الحبر"
            },
            {
              "value": "تجنب الخلفيات الكبيرة",
              "description": "تستهلك حبراً كثيراً"
            },
            {
              "value": "استخدم الخطوط الرقيقة",
              "description": "تستهلك حبراً أقل من الخطوط السميكة"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام خصائص الطباعة",
          "values": [
            {
              "value": "نسيان @media print",
              "description": "بدونها لا تنطبق أنماط الطباعة"
            },
            {
              "value": "استخدام page-break-before مع الجداول",
              "description": "قد لا يعمل كما هو متوقع"
            },
            {
              "value": "نسيان width: 100% للطباعة",
              "description": "قد يظهر المحتوى مقطوعاً"
            },
            {
              "value": "استخدام ألوان فاتحة على فاتحة",
              "description": "غير مقروءة عند الطباعة"
            }
          ]
        }
      ]
    }
  ],
  "sassFeatures": [
    {
      "tag": "sass-variables",
      "description": "المتغيرات في Sass تسمح بتخزين القيم وإعادة استخدامها، وهي مختلفة عن CSS Variables (تعمل في وقت الترجمة)",
      "properties": [
        {
          "name": "المتغيرات",
          "description": "تعريف واستخدام المتغيرات في Sass (تبدأ بـ $)",
          "values": [
            {
              "value": "$primary-color: #007bff;",
              "description": "تعريف متغير لون أساسي"
            },
            {
              "value": "$font-size-base: 16px;",
              "description": "تعريف متغير حجم خط"
            },
            {
              "value": "$spacing-unit: 8px;",
              "description": "تعريف متغير وحدة مسافات"
            },
            {
              "value": "$border-radius: 4px;",
              "description": "تعريف متغير انحناء"
            },
            {
              "value": "$shadow: 0 2px 4px rgba(0,0,0,0.1);",
              "description": "تعريف متغير ظل"
            },
            {
              "value": "color: $primary-color;",
              "description": "استخدام المتغير في خاصية"
            },
            {
              "value": "font-size: $font-size-base;",
              "description": "استخدام المتغير"
            },
            {
              "value": "margin: $spacing-unit * 2;",
              "description": "استخدام المتغير في عملية حسابية"
            }
          ]
        },
        {
          "name": "نطاق المتغيرات",
          "description": "المتغيرات في Sass لها نطاق (Scope) مثلها مثل لغات البرمجة",
          "values": [
            {
              "value": "$global-var: 10px; /* متغير عام */ .selector { $local-var: 20px; /* متغير محلي */ }",
              "description": "متغيرات عامة ومحلية"
            },
            {
              "value": "!default",
              "description": "تعريف متغير بقيمة افتراضية يمكن تجاوزها"
            },
            {
              "value": "!global",
              "description": "يجعل المتغير عاماً حتى لو عُرف داخل نطاق محلي"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-nesting",
      "description": "التضمين في Sass يسمح بكتابة المحددات المتداخلة بطريقة منظمة تشبه هرمية HTML",
      "properties": [
        {
          "name": "التضمين",
          "description": "كتابة المحددات المتداخلة",
          "values": [
            {
              "value": ".nav { ul { list-style: none; } li { display: inline-block; } a { text-decoration: none; } }",
              "description": "تضمين محددات القائمة"
            },
            {
              "value": ".card { .card-header { padding: 16px; } .card-body { padding: 20px; } .card-footer { padding: 12px; } }",
              "description": "تضمين أجزاء البطاقة"
            }
          ]
        },
        {
          "name": "المرجع الأب (&)",
          "description": "استخدام & للإشارة إلى المحدد الأب",
          "values": [
            {
              "value": ".btn { &:hover { background: darken(#007bff, 10%); } &:active { transform: scale(0.95); } }",
              "description": "تضمين :hover و :active"
            },
            {
              "value": ".card { &--primary { border-color: blue; } &--secondary { border-color: gray; } }",
              "description": "نمط BEM باستخدام &"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-mixins",
      "description": "المزج في Sass يسمح بتجميع مجموعة من الأنماط وإعادة استخدامها مع إمكانية تمرير معاملات",
      "properties": [
        {
          "name": "Mixins",
          "description": "تعريف واستخدام الـ Mixins",
          "values": [
            {
              "value": "@mixin flex-center { display: flex; justify-content: center; align-items: center; }",
              "description": "تعريف Mixin لتوسيط العناصر"
            },
            {
              "value": ".container { @include flex-center; }",
              "description": "استخدام Mixin"
            },
            {
              "value": "@mixin box-shadow($x, $y, $blur, $color) { box-shadow: $x $y $blur $color; }",
              "description": "Mixin مع معاملات"
            },
            {
              "value": ".card { @include box-shadow(0, 4px, 12px, rgba(0,0,0,0.1)); }",
              "description": "استخدام Mixin مع معاملات"
            }
          ]
        },
        {
          "name": "Mixins مع قيم افتراضية",
          "description": "تحديد قيم افتراضية للمعاملات",
          "values": [
            {
              "value": "@mixin border-radius($radius: 4px) { border-radius: $radius; }",
              "description": "Mixin مع قيمة افتراضية"
            },
            {
              "value": ".btn { @include border-radius(8px); }",
              "description": "استخدام بقيمة مخصصة"
            }
          ]
        },
        {
          "name": "Mixins مع Content",
          "description": "تمرير محتوى إلى الـ Mixin",
          "values": [
            {
              "value": "@mixin media($breakpoint) { @media (min-width: $breakpoint) { @content; } }",
              "description": "Mixin لاستعلامات الوسائط"
            },
            {
              "value": "@include media(768px) { .container { padding: 20px; } }",
              "description": "استخدام مع محتوى"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-functions",
      "description": "الدوال في Sass تسمح بإجراء عمليات حسابية ومنطقية وإرجاع قيم",
      "properties": [
        {
          "name": "دوال مخصصة",
          "description": "تعريف واستخدام الدوال في Sass",
          "values": [
            {
              "value": "@function double($value) { @return $value * 2; }",
              "description": "دالة تضاعف القيمة"
            },
            {
              "value": ".element { width: double(50px); }",
              "description": "استخدام الدالة"
            },
            {
              "value": "@function px-to-rem($px) { @return $px / 16px * 1rem; }",
              "description": "دالة تحويل px إلى rem"
            },
            {
              "value": "font-size: px-to-rem(16px);",
              "description": "استخدام دالة التحويل"
            }
          ]
        },
        {
          "name": "دوال مضمنة",
          "description": "دوال مضمنة في Sass",
          "values": [
            {
              "value": "darken(#007bff, 10%)",
              "description": "تغميق اللون"
            },
            {
              "value": "lighten(#000, 20%)",
              "description": "تفتيح اللون"
            },
            {
              "value": "rgba(#007bff, 0.5)",
              "description": "إضافة شفافية"
            },
            {
              "value": "percentage(0.5)",
              "description": "تحويل إلى نسبة مئوية"
            },
            {
              "value": "floor(12.7px)",
              "description": "تقريب لأسفل"
            },
            {
              "value": "ceil(12.3px)",
              "description": "تقريب لأعلى"
            },
            {
              "value": "round(12.5px)",
              "description": "تقريب لأقرب قيمة"
            },
            {
              "value": "random(100)",
              "description": "رقم عشوائي من 0 إلى 100"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-extend",
      "description": "الإرث في Sass يسمح بمشاركة الأنماط بين المحددات المختلفة (مشابه للوراثة في البرمجة)",
      "properties": [
        {
          "name": "@extend",
          "description": "وراثة الأنماط من محدد آخر",
          "values": [
            {
              "value": "%message-shared { border: 1px solid #ccc; padding: 10px; color: #333; }",
              "description": "Class placeholder"
            },
            {
              "value": ".success { @extend %message-shared; border-color: green; }",
              "description": "وراثة الأنماط وإضافة تعديلات"
            },
            {
              "value": ".error { @extend %message-shared; border-color: red; }",
              "description": "وراثة الأنماط وتخصيصها"
            }
          ]
        },
        {
          "name": "Placeholder Selectors",
          "description": "محددات مكان (Placeholder) لا تُترجم إلى CSS إلا عند استخدامها",
          "values": [
            {
              "value": "%flex-center { display: flex; align-items: center; justify-content: center; }",
              "description": "Placeholder"
            },
            {
              "value": ".header { @extend %flex-center; }",
              "description": "استخدام placeholder"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-operations",
      "description": "Sass تدعم العمليات الحسابية على القيم والألوان",
      "properties": [
        {
          "name": "العمليات الحسابية",
          "description": "إجراء عمليات حسابية على القيم",
          "values": [
            {
              "value": "width: 100% / 3;",
              "description": "قسمة"
            },
            {
              "value": "margin: 10px + 20px;",
              "description": "جمع"
            },
            {
              "value": "padding: 30px - 10px;",
              "description": "طرح"
            },
            {
              "value": "font-size: 16px * 1.5;",
              "description": "ضرب"
            },
            {
              "value": "color: #ff0000 + #0000ff;",
              "description": "جمع ألوان"
            }
          ]
        },
        {
          "name": "عمليات على الألوان",
          "description": "تعديل الألوان باستخدام العمليات",
          "values": [
            {
              "value": "color: #ff0000 + #0000ff;",
              "description": "#ff00ff"
            },
            {
              "value": "color: #ff0000 - #0000ff;",
              "description": "#ff00ff"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-import",
      "description": "استيراد ملفات Sass/SCSS أخرى",
      "properties": [
        {
          "name": "@import و @use و @forward",
          "description": "طرق استيراد الملفات في Sass",
          "values": [
            {
              "value": "@import 'variables';",
              "description": "استيراد ملف (قديم)"
            },
            {
              "value": "@use 'variables' as v;",
              "description": "استيراد ملف مع مساحة اسم"
            },
            {
              "value": "$primary-color: v.$primary-color;",
              "description": "استخدام متغير من ملف مستورد"
            },
            {
              "value": "@forward 'variables';",
              "description": "إعادة تصدير ملف"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-control-flow",
      "description": "أوامر التحكم في التدفق مثل الشرط والحلقات",
      "properties": [
        {
          "name": "@if / @else",
          "description": "شروط في Sass",
          "values": [
            {
              "value": "@if $theme == 'dark' { background: #1a1a2e; } @else { background: #ffffff; }",
              "description": "شرط للثيم"
            },
            {
              "value": "@if $size > 10px { font-size: $size; } @else { font-size: 10px; }",
              "description": "شرط على الحجم"
            }
          ]
        },
        {
          "name": "@each",
          "description": "التكرار على قائمة",
          "values": [
            {
              "value": "@each $color in red, blue, green { .color-#{$color} { color: $color; } }",
              "description": "إنشاء فئات لكل لون"
            },
            {
              "value": "@each $name, $color in (primary: #007bff, secondary: #6c757d) { .btn-#{$name} { background: $color; } }",
              "description": "تكرار على خريطة"
            }
          ]
        },
        {
          "name": "@for",
          "description": "حلقة for",
          "values": [
            {
              "value": "@for $i from 1 through 5 { .item-#{$i} { width: 20% * $i; } }",
              "description": "إنشاء 5 فئات بعروض مختلفة"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-examples",
      "description": "أمثلة عملية متقدمة لاستخدام Sass",
      "properties": [
        {
          "name": "نظام ألوان متكامل",
          "description": "إنشاء نظام ألوان باستخدام Sass",
          "values": [
            {
              "value": "$colors: ( primary: #007bff, secondary: #6c757d, success: #28a745, danger: #dc3545 ); @each $name, $color in $colors { .bg-#{$name} { background: $color; } .text-#{$name} { color: $color; } .border-#{$name} { border-color: $color; } }",
              "description": "نظام ألوان كامل"
            }
          ]
        },
        {
          "name": "نظام مسافات",
          "description": "إنشاء نظام مسافات باستخدام Sass",
          "values": [
            {
              "value": "$spacing: ( xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px ); @each $name, $value in $spacing { .m-#{$name} { margin: $value; } .p-#{$name} { padding: $value; } }",
              "description": "نظام مسافات كامل"
            }
          ]
        },
        {
          "name": "استعلامات وسائط",
          "description": "Mixins لاستعلامات الوسائط",
          "values": [
            {
              "value": "@mixin mobile { @media (max-width: 768px) { @content; } } @mixin tablet { @media (min-width: 769px) and (max-width: 1024px) { @content; } } @mixin desktop { @media (min-width: 1025px) { @content; } }",
              "description": "Mixins للتجاوب"
            }
          ]
        }
      ]
    },
    {
      "tag": "sass-tips",
      "description": "نصائح وإرشادات مهمة لاستخدام Sass",
      "properties": [
        {
          "name": "نصائح عامة",
          "description": "نصائح لاستخدام Sass بشكل فعال",
          "values": [
            {
              "value": "استخدم المتغيرات للألوان",
              "description": "يسهل تغيير الثيم"
            },
            {
              "value": "استخدم Mixins للأنماط المتكررة",
              "description": "يقلل التكرار"
            },
            {
              "value": "استخدم Placeholder للإرث",
              "description": "يقلل حجم الـ CSS"
            },
            {
              "value": "نظّم الملفات",
              "description": "قسّم إلى ملفات صغيرة"
            }
          ]
        },
        {
          "name": "الأخطاء الشائعة",
          "description": "أخطاء شائعة عند استخدام Sass",
          "values": [
            {
              "value": "نسيان $ في المتغيرات",
              "description": "$color وليس color"
            },
            {
              "value": "استخدام @extend مع محددات غير placeholder",
              "description": "قد ينتج كوداً زائداً"
            },
            {
              "value": "نسيان @include",
              "description": "استخدام mixin بدون @include"
            },
            {
              "value": "خلط بين @import و @use",
              "description": "@use هو الأحدث"
            }
          ]
        }
      ]
    }
  ],
  "cssCompatibility": [
    {
      "tag": "feature-compatibility",
      "description": "توافق خصائص CSS الرئيسية مع المتصفحات",
      "properties": [
        {
          "name": "Flexbox",
          "description": "دعم Flexbox عبر المتصفحات",
          "values": [
            {
              "value": "Chrome",
              "description": "21+ (دعم كامل من 29)"
            },
            {
              "value": "Firefox",
              "description": "22+ (دعم كامل من 28)"
            },
            {
              "value": "Safari",
              "description": "6.1+ (دعم كامل من 9)"
            },
            {
              "value": "Edge",
              "description": "12+ (دعم كامل)"
            },
            {
              "value": "IE",
              "description": "10+ (جزئي مع بادئات)"
            },
            {
              "value": "Opera",
              "description": "12.1+"
            }
          ]
        },
        {
          "name": "CSS Grid",
          "description": "دعم CSS Grid عبر المتصفحات",
          "values": [
            {
              "value": "Chrome",
              "description": "57+ (دعم كامل)"
            },
            {
              "value": "Firefox",
              "description": "52+ (دعم كامل)"
            },
            {
              "value": "Safari",
              "description": "10.1+ (دعم كامل)"
            },
            {
              "value": "Edge",
              "description": "16+ (دعم كامل)"
            },
            {
              "value": "IE",
              "description": "غير مدعوم (10-11 يدعم جزئياً ببادئات)"
            },
            {
              "value": "Opera",
              "description": "44+ (دعم كامل)"
            }
          ]
        },
        {
          "name": "Custom Properties (CSS Variables)",
          "description": "دعم المتغيرات المخصصة",
          "values": [
            {
              "value": "Chrome",
              "description": "49+"
            },
            {
              "value": "Firefox",
              "description": "31+"
            },
            {
              "value": "Safari",
              "description": "9.1+"
            },
            {
              "value": "Edge",
              "description": "15+"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "36+"
            }
          ]
        },
        {
          "name": "CSS Animations",
          "description": "دعم الرسوم المتحركة",
          "values": [
            {
              "value": "Chrome",
              "description": "43+ (بدون بادئات)"
            },
            {
              "value": "Firefox",
              "description": "16+ (بدون بادئات)"
            },
            {
              "value": "Safari",
              "description": "9+ (بدون بادئات)"
            },
            {
              "value": "Edge",
              "description": "12+ (بدون بادئات)"
            },
            {
              "value": "IE",
              "description": "10+ (مع بادئات)"
            },
            {
              "value": "Opera",
              "description": "30+ (بدون بادئات)"
            }
          ]
        },
        {
          "name": "CSS Transitions",
          "description": "دعم الانتقالات",
          "values": [
            {
              "value": "Chrome",
              "description": "26+ (بدون بادئات)"
            },
            {
              "value": "Firefox",
              "description": "16+ (بدون بادئات)"
            },
            {
              "value": "Safari",
              "description": "9+ (بدون بادئات)"
            },
            {
              "value": "Edge",
              "description": "12+ (بدون بادئات)"
            },
            {
              "value": "IE",
              "description": "10+ (مع بادئات)"
            },
            {
              "value": "Opera",
              "description": "12.1+ (بدون بادئات)"
            }
          ]
        },
        {
          "name": "CSS Transforms",
          "description": "دعم التحويلات 2D و 3D",
          "values": [
            {
              "value": "Chrome",
              "description": "36+ (بدون بادئات)"
            },
            {
              "value": "Firefox",
              "description": "16+ (بدون بادئات)"
            },
            {
              "value": "Safari",
              "description": "9+ (بدون بادئات)"
            },
            {
              "value": "Edge",
              "description": "12+ (بدون بادئات)"
            },
            {
              "value": "IE",
              "description": "10+ (مع بادئات للـ 2D)"
            },
            {
              "value": "Opera",
              "description": "23+ (بدون بادئات)"
            }
          ]
        },
        {
          "name": "Container Queries",
          "description": "دعم استعلامات الحاويات",
          "values": [
            {
              "value": "Chrome",
              "description": "105+"
            },
            {
              "value": "Firefox",
              "description": "110+"
            },
            {
              "value": "Safari",
              "description": "16+"
            },
            {
              "value": "Edge",
              "description": "105+"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "91+"
            }
          ]
        },
        {
          "name": "Subgrid",
          "description": "دعم Subgrid في CSS Grid",
          "values": [
            {
              "value": "Chrome",
              "description": "117+"
            },
            {
              "value": "Firefox",
              "description": "71+"
            },
            {
              "value": "Safari",
              "description": "16+"
            },
            {
              "value": "Edge",
              "description": "117+"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "103+"
            }
          ]
        },
        {
          "name": "backdrop-filter",
          "description": "دعم تأثير الزجاج المصنفر",
          "values": [
            {
              "value": "Chrome",
              "description": "76+ (مع -webkit-)"
            },
            {
              "value": "Firefox",
              "description": "103+ (مع -moz- لفترة)"
            },
            {
              "value": "Safari",
              "description": "9+ (مع -webkit-)"
            },
            {
              "value": "Edge",
              "description": "17+ (مع -webkit-)"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "63+ (مع -webkit-)"
            }
          ]
        },
        {
          "name": "aspect-ratio",
          "description": "دعم نسبة العرض إلى الارتفاع",
          "values": [
            {
              "value": "Chrome",
              "description": "88+"
            },
            {
              "value": "Firefox",
              "description": "87+"
            },
            {
              "value": "Safari",
              "description": "15+"
            },
            {
              "value": "Edge",
              "description": "88+"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "74+"
            }
          ]
        },
        {
          "name": "color-scheme",
          "description": "دعم تفضيلات الألوان",
          "values": [
            {
              "value": "Chrome",
              "description": "81+"
            },
            {
              "value": "Firefox",
              "description": "96+"
            },
            {
              "value": "Safari",
              "description": "13+"
            },
            {
              "value": "Edge",
              "description": "81+"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "68+"
            }
          ]
        },
        {
          "name": "@property",
          "description": "دعم تعريف المتغيرات المخصصة",
          "values": [
            {
              "value": "Chrome",
              "description": "85+"
            },
            {
              "value": "Firefox",
              "description": "95+"
            },
            {
              "value": "Safari",
              "description": "16.4+"
            },
            {
              "value": "Edge",
              "description": "85+"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "71+"
            }
          ]
        },
        {
          "name": "CSS Nesting",
          "description": "دعم التضمين (Nesting) في CSS",
          "values": [
            {
              "value": "Chrome",
              "description": "120+"
            },
            {
              "value": "Firefox",
              "description": "117+"
            },
            {
              "value": "Safari",
              "description": "17.2+"
            },
            {
              "value": "Edge",
              "description": "120+"
            },
            {
              "value": "IE",
              "description": "غير مدعوم"
            },
            {
              "value": "Opera",
              "description": "106+"
            }
          ]
        }
      ]
    },
    {
      "tag": "vendor-prefixes",
      "description": "البادئات الخاصة بالمتصفحات لضمان التوافق",
      "properties": [
        {
          "name": "البادئات الشائعة",
          "description": "البادئات المستخدمة للخصائص التجريبية",
          "values": [
            {
              "value": "-webkit-",
              "description": "Safari, Chrome (ومعظم المتصفحات المبنية على WebKit/Blink)"
            },
            {
              "value": "-moz-",
              "description": "Firefox"
            },
            {
              "value": "-ms-",
              "description": "Internet Explorer, Edge (القديم)"
            },
            {
              "value": "-o-",
              "description": "Opera (القديم)"
            },
            {
              "value": "-khtml-",
              "description": "Konqueror (قديم جداً)"
            }
          ]
        },
        {
          "name": "أمثلة على استخدام البادئات",
          "description": "كيفية كتابة الخصائص مع البادئات",
          "values": [
            {
              "value": "-webkit-border-radius: 10px; border-radius: 10px;",
              "description": "زوايا دائرية"
            },
            {
              "value": "-webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2); box-shadow: 0 2px 4px rgba(0,0,0,0.2);",
              "description": "ظل"
            },
            {
              "value": "-webkit-transition: all 0.3s; transition: all 0.3s;",
              "description": "انتقال"
            },
            {
              "value": "-webkit-transform: rotate(45deg); transform: rotate(45deg);",
              "description": "تحويل"
            },
            {
              "value": "-webkit-animation: slide 1s; animation: slide 1s;",
              "description": "رسوم متحركة"
            },
            {
              "value": "-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);",
              "description": "فلاتر الخلفية"
            }
          ]
        }
      ]
    },
    {
      "tag": "compatibility-tips",
      "description": "نصائح لضمان توافق CSS مع جميع المتصفحات",
      "properties": [
        {
          "name": "نصائح التوافق",
          "description": "إرشادات لتحسين التوافق",
          "values": [
            {
              "value": "استخدم @supports",
              "description": "لكشف دعم الخصائص"
            },
            {
              "value": "قدم بدائل (Fallbacks)",
              "description": "للمتصفحات القديمة"
            },
            {
              "value": "استخدم Autoprefixer",
              "description": "لإضافة البادئات تلقائياً"
            },
            {
              "value": "اختبر في متصفحات متعددة",
              "description": "استخدم BrowserStack أو أدوات مشابهة"
            },
            {
              "value": "استخدم CSS Reset",
              "description": "لتوحيد الأنماط الافتراضية"
            }
          ]
        },
        {
          "name": "الخصائص التي تحتاج بادئات",
          "description": "خصائص قد تحتاج بادئات في بعض المتصفحات",
          "values": [
            {
              "value": "backdrop-filter",
              "description": "Safari و Chrome يحتاجان -webkit-"
            },
            {
              "value": "flexbox",
              "description": "Safari 8- يحتاج -webkit-"
            },
            {
              "value": "grid",
              "description": "IE 10-11 يحتاج -ms-"
            },
            {
              "value": "transform",
              "description": "IE 9-10 يحتاج -ms-"
            },
            {
              "value": "transition",
              "description": "IE 10 يحتاج -ms-"
            },
            {
              "value": "animation",
              "description": "IE 10 يحتاج -ms-، Safari يحتاج -webkit-"
            },
            {
              "value": "user-select",
              "description": "جميع المتصفحات تحتاج بادئات"
            },
            {
              "value": "appearance",
              "description": "جميع المتصفحات تحتاج بادئات"
            }
          ]
        }
      ]
    }
  ]
};
