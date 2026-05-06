export interface QuizQuestion {
  id: string;
  question: string;
  questionEN?: string;
  options: { id: string; text: string; textEN?: string; isCorrect: boolean }[];
  explanation: string;
  explanationEN?: string;
}

export interface Lesson {
  id: string;
  title: string;
  titleEN?: string;
  visualType: 'animation' | 'illustration';
  visualUrls: string[];
  visualDescription?: string;
  visualDescriptionEN?: string;
  duration: string;
  summary: string[];
  summaryEN?: string[];
  tools?: { name: string; nameEN?: string; image: string }[];
  task?: { title: string; titleEN?: string; description: string; descriptionEN?: string };
  quiz?: QuizQuestion[];
  xpReward: number;
}

export interface Level {
  id: string;
  title: string;
  titleEN?: string;
  description: string;
  descriptionEN?: string;
  lessons: Lesson[];
}

export interface Course {
  craftId: string;
  title: string;
  titleEN?: string;
  description: string;
  descriptionEN?: string;
  levels: Level[];
  badges?: {
    started: { id: string; title: string; titleEN?: string; description: string; descriptionEN?: string; icon: string };
    completed: { id: string; title: string; titleEN?: string; description: string; descriptionEN?: string; icon: string };
  };
}

export const coursesData: Record<string, Course> = {
  'carpentry': {
    craftId: 'carpentry',
    title: 'أساسيات النجارة المعمارية',
    description: 'مسار تعليمي متكامل ينطلق بك من فهم أنواع الخشب إلى صناعة أول قطعة أثاث لك.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: عالم الأخشاب والأدوات',
        description: 'اكتشف أنواع الخشب المختلفة وتعرف على أدواتك الأساسية وكيفية استخدامها بأمان.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'مقدمة للنجارة المعمارية',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1610488251214-7227ab8bfeb9?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لورشة نجارة منظمة مع تسليط الضوء على أدوات السلامة.',
            duration: '04:30',
            summary: [
              'النجارة الجمع بين الفن والهندسة العملية.',
              'السلامة أولاً: نظارات الحماية، قفازات، ومحيط عمل نظيف.',
              'النجارة مهنة تتطلب صبراً، قياساً دقيقاً، ولمسة فنية.'
            ],
            task: {
              title: 'تجهيز مساحة العمل',
              description: 'قم بتخصيص زاوية صغيرة في منزلك لتكون مساحة عملك، تأكد من إضاءتها الجيدة وتهويتها.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي القاعدة الذهبية والأولى قبل البدء في أي عمل نجارة؟',
                options: [
                  { id: 'o1', text: 'اختيار أفضل نوع خشب', isCorrect: false },
                  { id: 'o2', text: 'ارتداء معدات السلامة الشخصية وتجهيز المكان', isCorrect: true },
                  { id: 'o3', text: 'شحذ المنشار بقوة', isCorrect: false }
                ],
                explanation: 'السلامة هي الأهم. لا شيء يسبق حماية نفسك من الشظايا أو الغبار.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_2',
            title: 'أدوات القياس ووضع العلامات',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1540340061722-f155c5dfc5b2?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'حركة ليد ترسم خطاً مستقيماً باستخدام زاوية قائمة وقلم رصاص على لوح خشبي.',
            duration: '06:15',
            summary: [
              'قس مرتين، واقطع مرة واحدة (القاعدة الذهبية).',
              'استخدام شريط القياس (المتر) والزاوية القائمة (L-square).',
              'كيفية وضع علامات دقيقة باستخدام قلم رصاص نجار.'
            ],
            tools: [
              { name: 'شريط قياس', image: 'https://images.unsplash.com/photo-1516131206008-e37367ceed1a?auto=format&fit=crop&w=400&q=80' },
              { name: 'زاوية قائمة', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=400&q=80' }
            ],
            task: {
              title: 'تطبيق القياس',
              description: 'أحضر أي قطعة خشب أو حتى كرتون مقوى، واستخدم شريط القياس لرسم خطوط متوازية تفصل بينها 5 سم بالضبط.'
            },
            quiz: [
              {
                id: 'q2',
                question: 'لماذا نستخدم الزاوية القائمة (L-square) في وضع العلامات؟',
                options: [
                  { id: 'o1', text: 'للتأكد من أن الطول كافٍ', isCorrect: false },
                  { id: 'o2', text: 'لضمان رسم خط عمودي مستقيم تماماً للقطع', isCorrect: true },
                  { id: 'o3', text: 'لرسم الدوائر والأقواس', isCorrect: false }
                ],
                explanation: 'الزاوية القائمة تضمن أن يكون القطع مستقيماً بزاوية 90 درجة لتسهيل تركيب القطع لاحقاً.'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: تقنيات القطع والتشكيل',
        description: 'كيفية استخدام المناشير اليدوية والكهربائية للحصول على حواف مستقيمة ونظيفة.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'المنشار اليدوي: القبضة والحركة',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم متحرك يوضح زاوية ميلان المنشار اليدوي الصحيحة (45 درجة) مع اتجاه الحركة.',
            duration: '05:40',
            summary: [
              'اختيار المنشار المناسب للعمل (قص طولي أو عرضي).',
              'وضعية الجسد: قف بثبات واجعل ذراعك كتلة واحدة مع المنشار.',
              'الاستعانة بقطعة خشبية دليلاً لضمان استقامة القطع.'
            ],
            task: {
              title: 'تصحيح القبضة',
              description: 'امسك بأي مقبض يشبه المنشار وتدرب على حركة الذراع بحيث يكون المرفق والرسغ في خط مستقيم.'
            },
            xpReward: 40
          }
        ]
      }
    ]
  },
  'data_entry': {
    craftId: 'data_entry',
    title: 'تكوين عون إدراج المعلومات',
    description: 'مسار تعليمي متكامل ينطلق بك من أساسيات التعامل مع الحاسوب حتى إتقان الإدخال السريع وبناء قواعد البيانات.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: أساسيات الحاسوب ومكان العمل',
        description: 'تجهيز مساحة العمل، التعامل مع الملفات، حماية العينين، أساسيات الأمن السيبراني.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'التجهيزات الأساسية وطريقة الجلوس الصحية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك لشخص يجلس أمام حاسوب. يظهر خط منقط من ظهره إلى الكرسي يوضح استقامة الظهر. ذراعاه بزاوية 90°. الشاشة على مستوى العين. يد تتحرك بلطف على لوحة مفاتيح.',
            duration: '05:00',
            summary: [
              'اجلس باستقامة ظهر على كرسي مريح.',
              'الشاشة يجب أن تكون على مستوى عينيك تماماً.',
              'قدماك مسطحتان على الأرض.',
              'الذراعان يشكلان زاوية قائمة مع لوحة المفاتيح.',
              'خذ استراحة 5 دقائق كل ساعة عمل.',
              'إضاءة الغرفة يجب أن تكون متوسطة وغير منعكسة على الشاشة.'
            ],
            task: {
              title: 'تجهيز مساحة العمل الخاصة بك',
              description: 'خذ صورة لمكان عملك الحالي (أو ارسمه). حدد 3 أشياء يمكنك تحسينها لتناسب وضعية الجلوس الصحية التي تعلمتها.'
            },
            quiz: [
              {
                id: 'q111',
                question: 'ما هي الزاوية الصحيحة لذراعيك عند الكتابة على لوحة المفاتيح؟',
                options: [
                  { id: 'o1', text: '45 درجة', isCorrect: false },
                  { id: 'o2', text: '90 درجة (زاوية قائمة)', isCorrect: true },
                  { id: 'o3', text: '180 درجة (مستقيمة تماماً)', isCorrect: false }
                ],
                explanation: 'الزاوية القائمة تمنع آلام الرسغ والكتف على المدى الطويل.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_2',
            title: 'التعامل مع نظام ويندوز – الملفات والمجلدات',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1614064641913-6b71f3016578?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة حاسوب تظهر سطح مكتب ويندوز. يد بالفأرة تنقر على "This PC". تظهر نافذة... يد تكتب اسماً لمجلد جديد.',
            duration: '06:00',
            summary: [
              'نظام التشغيل هو عقل الحاسوب.',
              'الملفات: مستندات، صور، جداول.',
              'المجلدات: أوعية لتنظيم الملفات.',
              'لإنشاء مجلد جديد: كليك يمين > New > Folder > اكتب اسماً.',
              'استخدم أسماء واضحة: "فواتير_2025" وليس "مجلد1".',
              'النسخ (Ctrl+C) واللصق (Ctrl+V) أساسيان.'
            ],
            task: {
              title: 'هيكلة مجلداتك الأولى',
              description: 'أنشئ على سطح مكتبك مجلداً رئيسياً اسمه "تكوين_عون_إدراج". بداخله، أنشئ 3 مجلدات فرعية: "تمارين"، "مشاريع"، "ملاحظات".'
            },
            quiz: [
              {
                id: 'q121',
                question: 'ما هو الاختصار المستخدم لعملية اللصق (Paste) في نظام الويندوز؟',
                options: [
                  { id: 'o1', text: 'Ctrl+C', isCorrect: false },
                  { id: 'o2', text: 'Ctrl+P', isCorrect: false },
                  { id: 'o3', text: 'Ctrl+V', isCorrect: true }
                ],
                explanation: 'Ctrl+C للنسخ، و Ctrl+V للصق.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_3',
            title: 'أساسيات لوحة المفاتيح واختصاراتها الذهبية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك للوحة مفاتيح كبيرة. أصابع تتحرك بنمط صحيح على مفاتيح الصف الأساسي. الاختصارات المفتاحية تضيء.',
            duration: '04:45',
            summary: [
              'صف الارتكاز: أَسَد (A S D F) لليد اليسرى، ك م ن (J K L ;) لليد اليمنى.',
              'Ctrl+C: نسخ | Ctrl+V: لصق | Ctrl+X: قص.',
              'Ctrl+Z: تراجع.',
              'Ctrl+S: حفظ (احفظ باستمرار لتفادي ضياع البيانات).',
              'Ctrl+A: تحديد الكل.'
            ],
            task: {
              title: 'تطبيق الاختصارات عملياً',
              description: 'افتح برنامج المفكرة (Notepad) واكتب فقرة من 5 أسطر. طبق كل اختصار مرة واحدة على الأقل. احفظ الملف باسم "يومي_الاختصارات.txt".'
            },
            quiz: [
              {
                id: 'q131',
                question: 'لماذا يُعتبر الاختصار (Ctrl+S) من أهم اختصارات عون الإدراج؟',
                options: [
                  { id: 'o1', text: 'لأنه يسرع التحديد', isCorrect: false },
                  { id: 'o2', text: 'لأنه يحفظ العمل باستمرار ويحميه من الضياع', isCorrect: true },
                  { id: 'o3', text: 'لأنه ينسخ النص فوراً', isCorrect: false }
                ],
                explanation: 'حفظ عملك باستمرار يجنبك فقدانه في حال انقطاع الكهرباء أو تعطل الحاسوب.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_4',
            title: 'حماية العينين والصحة خلال العمل الطويل',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي ثابت لشخص أمام شاشة مع إظهار قاعدة 20-20-20 وتمارين تمدد بسيطة.',
            duration: '03:30',
            summary: [
              'قاعدة 20-20-20: كل 20 دقيقة، انظر لمسافة 20 قدماً (6 أمتار)، لمدة 20 ثانية.',
              'أغمض عينيك بانتظام لترطيبها.',
              'استخدم قطرات العين المرطبة عند الحاجة.',
              'اضبط سطوع الشاشة ليكون مريحاً.',
              'قم بتمارين تمدد الرقبة كل ساعة.',
              'قف وتحرك لمدة دقيقتين كل ساعة.'
            ],
            task: {
              title: 'تطبيق قاعدة الـ 20',
              description: 'اضبط مؤقتاً على هاتفك لكل 20 دقيقة. في كل مرة يرن، طبق قاعدة 20-20-20. لاحظ كيف يخف الإجهاد عن عينيك.'
            },
            xpReward: 20
          },
          {
            id: 'les_1_5',
            title: 'أساسيات الأمن المعلوماتي وسرية البيانات',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: شاشة حاسوب يظهر عليها ملف بعنوان "سري". يد تضع قفلاً على الملف. في الخلفية أيقونة درع.',
            duration: '06:30',
            summary: [
              'كلمة المرور القوية: حروف كبيرة وصغيرة + أرقام + رموز، وطولها 8+.',
              'لا تشارك كلمة مرورك مع أي شخص.',
              'لا تفتح مرفقات من مرسلين مجهولين.',
              'احذر من رسائل التصيد (Phishing).',
              'أغلق جلسة الحاسوب عندما تبتعد (Windows+L).',
              'احترم سرية بيانات الزبائن والمؤسسة.'
            ],
            task: {
              title: 'تغيير كلمات المرور',
              description: 'غيّر كلمة مرور حاسوبك أو هاتفك إلى كلمة مرور قوية واكتب ملاحظة تفيد بـ 3 أشياء ستفعلها لحماية بياناتك.'
            },
            quiz: [
              {
                id: 'q151',
                question: 'ما هي مواصفات كلمة المرور القوية والموثوقة؟',
                options: [
                  { id: 'o1', text: 'تتكون من 8 أحرف وأرقام متتالية سهلة الحفظ', isCorrect: false },
                  { id: 'o2', text: 'لا تقل عن 8 خانات، وتجمع بين الحروف الكبيرة والصغيرة والأرقام والرموز', isCorrect: true },
                  { id: 'o3', text: 'أن تكون اسم تاريخ ميلادك لسهولة تذكرها', isCorrect: false }
                ],
                explanation: 'الجمع بين انواع الخانات المتعددة يصعب جدا من اختراق كلمة المرور.'
              }
            ],
            xpReward: 35
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: إتقان البرمجيات المكتبية',
        description: 'أساسيات Word و Excel، التنسيق، الجداول، والمعادلات البسيطة للبيانات.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'Microsoft Word – التنسيق الأساسي والجداول',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة تظهر واجهة Word وكيفية التنسيق الأساسي والنقر على الأيقونات المطلوبة وإدراج جدول وتخصيصه.',
            duration: '08:00',
            summary: [
              'التنسيق الأساسي: غامق (Ctrl+B)، مائل (Ctrl+I)، مسطر (Ctrl+U).',
              'المحاذاة: يمين، وسط، يسار، ضبط (مهم للوثائق الرسمية).',
              'استخدم خط Times New Roman أو Arial بحجم 12 للوثائق.',
              'إدراج جدول من قائمة Insert.',
              'يمكنك دمج الخلايا وتقسيمها وتلوينها.'
            ],
            task: {
              title: 'كتابة وتسجيل القوائم',
              description: 'أنشئ وثيقة Word جديدة وأدرج فيها جدول 4x3 بمنتجات ومواد بأسعارها مع تنسيق جيد.'
            },
            xpReward: 40
          },
          {
            id: 'les_2_2',
            title: 'Microsoft Excel – الخلايا والمعادلات الأولية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد لخليّة Excel مع إدخال معادلة فيها و تغير المجموع تلقائياً.',
            duration: '09:00',
            summary: [
              'إكسل = دفتر حسابات رقمي قوي وذكي.',
              'كل خلية لها عنوان (مثلاً A1).',
              'العمليات الأساسية: +, -, *, /',
              'المعادلة تبدأ بعلامة =',
              'يمكنك سحب المعادلة لتطبيقها برمشة عين.'
            ],
            task: {
              title: 'إعداد جدول حسابي',
              description: 'في جدول Excel مكوّن من يوم المصروفات قم بحساب مراجعة شاملة باستخدام SUM لكل العناصر.'
            },
            xpReward: 45
          },
          {
            id: 'les_2_3',
            title: 'Excel متقدم – التصفية والفرز والبحث',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة كبيرة تُجري تصفية البيانات في صفحة Excel مع توضيح أدوات الفرز.',
            duration: '07:30',
            summary: [
              'الفلترة (Filter): إظهار صفوف تحقق شرطاً معيناً فقط.',
              'الفرز (Sort): ترتيب البيانات أبجدياً أو رقمياً.',
              'البحث (Ctrl+F): العثور على القيمة المحددة.',
              'تجميد الألواح (Freeze Panes) للتركيز على العناوين.'
            ],
            task: {
              title: 'تطبيق الفلترة والتصفية',
              description: 'استخدم الجدول السابق لتطبيق التصفية بحسب المدينة واسم المصروف ليتراءى لك مدى مرونة الأداة.'
            },
            xpReward: 40
          },
          {
            id: 'les_2_4',
            title: 'Google Sheets – العمل التعاوني السحابي',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تفاعل بين مؤشرين (لفأرتين) في وقت واحد على جدول في الإنترنت، مما يوضّح التعاون المباشر.',
            duration: '06:00',
            summary: [
              'Google Sheets مجاني ومتوفر على مدار الساعة.',
              'العمل التعاوني في نفس الوقت بين مجموعة طاقم الموظفين.',
              'حفظ آلي للتغييرات.',
              'إمكانية المشاركة بالبريد الإلكتروني.'
            ],
            task: {
              title: 'بدء العمل الجماعي',
              description: 'أنشئ ملفاً جديداً وشاركه مع صديق لك وابدآ بتغيير البيانات في نفس الوقت.'
            },
            xpReward: 35
          },
          {
            id: 'les_2_5',
            title: 'تحويل الملفات بين الصيغ المختلفة',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تحويل أيقونة الملف من صيغة لأخرى بشكل متحرك تفاعلي يوضّح سير عمليات الحفظ التلقائي.',
            duration: '04:30',
            summary: [
              'امتدادات مثل .docx, .xlsx, .pdf, .csv',
              'استخدام الأمر (File > Save As) لتحويل نوع الملف للبيانات.',
              'أدوات OCR تساعد على استرجاع النص من الصور.',
              'الضغط ببرامج ZIP يوفر الوقت أثناء النقل.'
            ],
            task: {
              title: 'اختبار الصيغ',
              description: 'احفظ وثيقتك الأولى بصيغة .pdf ولاحظ اختلاف الطريقة حين لا يمكنك تحوير أي رقم.'
            },
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_3',
        title: 'المرحلة 3: سرعة ودقة الإدخال المهني',
        description: 'تحسين سرعتك في الكتابة، تحويل البيانات الورقية والصوتية، واكتساب منهجيات التدقيق.',
        lessons: [
          {
            id: 'les_3_1',
            title: 'تقنيات الكتابة السريعة دون أخطاء',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'لوحة التحكم ومؤشر السرعة والدقة مع أصابع متحركة تعزز مبدأ الكتابة العمياء.',
            duration: '08:45',
            summary: [
              'لا تنظر إلى لوحة المفاتيح. عيناك على الشاشة.',
              'استخدم جميع أصابعك العشرة بلمس وتدريب منتظم.',
              'التدرب عبر المنصات المتخصصة كموقع Ratatype.',
              'استهدف أولاً الدقة قبل السرعة.',
              'السرعة الممتازة لعون الإدراج لا تقل عن 30-50 WPM.'
            ],
            task: {
              title: 'اكتشاف سرعتك الأولية',
              description: 'قم بتسجيل حساب والعمل لـ 15 دقيقة على TypingClub ودوِّن معدل الكلمات الأول الخاص بك.'
            },
            quiz: [
              {
                id: 'q311',
                question: 'أيهما يحظى بالأولوية المطلقة في بداية التكوين لعون إدراج البيانات؟',
                options: [
                  { id: 'o1', text: 'سرعة الإدخال للحصول على إنتاجية أعلى', isCorrect: false },
                  { id: 'o2', text: 'الدقة العالية وتقليل أخطاء الطباعة', isCorrect: true },
                  { id: 'o3', text: 'استخدام الاختصارات فقط', isCorrect: false }
                ],
                explanation: 'الدقة توفر وقت المراجعة المضاعف، وتؤسس لمنهجية قوية في الإدخال اللاحق.'
              }
            ],
            xpReward: 50
          },
          {
            id: 'les_3_2',
            title: 'إدراج البيانات من مصادر ورقية وصوتية',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'من الورق والنص السمعي إلى الشاشة مباشرة مع ربط الأسهم بشكل منهجي مرتب.',
            duration: '06:15',
            summary: [
              'اقرأ الفقرة كاملة قبل نقلها لتفادي الأخطاء المتعلقة بالسياق.',
              'قسّم الصوت لمقاطع صغيرة لنسخه بهدوء.',
              'استفد من أدوات الإملاء الصوتي ثم راجعها.',
              'في حال عدم فهم كلمة، دوّن ملاحظة لمسؤولك.'
            ],
            task: {
              title: 'تمرين الإدخال المركب',
              description: 'حاول نقل صفحة من كتاب بسرعة وبدون أخطاء. ثم جرب الاستماع لمقطع أخبار وتحريره وتصحيح المخرجات.'
            },
            xpReward: 40
          },
          {
            id: 'les_3_3',
            title: 'قواعد التدقيق والمراجعة الذاتية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'المرور بالعدسة المكبرة على الأخطاء التي تم تظليلها بالأحمر ليتم تصحيحها تلقائياً.',
            duration: '05:40',
            summary: [
              'لا تعتمد كلياً على المدقق الإملائي الآلي.',
              'اقرأ النص بصوت عالٍ للتعرف على كسر الجمل وبنيتها.',
              'تحقق بقوة من الأرقام: الحسابات مهمة جداً.',
              'التدقيق المزدوج بين الزملاء يرفع مستوى المنتوج.'
            ],
            task: {
              title: 'اختبار دقة الملاحظة لديك',
              description: 'راجع مقالة طويلة وأحصِ عدد الأخطاء اللغوية المطبعية في أول 3 فقرات باستخدام قائمة المراجعات التي تعلمناها.'
            },
            xpReward: 40
          },
          {
            id: 'les_3_4',
            title: 'إدارة المهام اليومية وتقدير الوقت',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1484480974693-6ca0a78ae2da?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مكتب فيه تقويم وعناصر مهام مؤشرة بعلامة الإنجاز الخضراء لتعزيز أهمية التخطيط.',
            duration: '04:30',
            summary: [
              'تخطيط 5-7 مهام كبرى فقط كل يوم.',
              'تقنية البومودورو 25 دقيقة/5 دقائق، مريحة ونافعة للتركيز.',
              'تقنية تقدير الأوقات ومقارنة المستعمل منها.',
              'تعلم الفرز لأولوياتك قبل البدء.'
            ],
            task: {
              title: 'بناء خطة يومك الأول المهني',
              description: 'سجّل ثلاث ساعات من وقتك القادم وحدد أين وكيف سيتم الإنجاز فيها بفعالية بناءً على الوقت.'
            },
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_4',
        title: 'المرحلة 4: الاحتراف والعمل عن بعد',
        description: 'أخلاقيات العمل، حفظ السرية، تقديم الخدمات كمستقل، وإنجاز مشروعك النهائي.',
        lessons: [
          {
            id: 'les_4_1',
            title: 'أخلاقيات العمل وسرية البيانات',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ملف عليه ختم "سري" وأيقونات ميزان العدل ومصداقية التعاقد بين الأطراف.',
            duration: '06:00',
            summary: [
              'السرية واجب أخلاقي وقانوني صارم.',
              'عدم نقل الداتا للأنظمة والأجهزة الشخصية.',
              'عدم فتح الملفات السرية في أماكن عمومية كالمقاهي.',
              'الاحتراز من الاحتيال والإبلاغ عند شبهة الاختراق.'
            ],
            task: {
              title: 'تأليف الميثاق المهني لك',
              description: 'قم بكتابة 5 نقاط كـ "ميثاق العون المحترف" التي ينبغي أن تطبقها بحذافيرها.'
            },
            xpReward: 40
          },
          {
            id: 'les_4_2',
            title: 'كيف تقدم خدماتك كمستقل وتجذب زبائنك الأوائل',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة متصفحة لموقعي Upwork وخمسات تبرز اختيار عروض وتأليف ردود لزبائن وبدء حوار.',
            duration: '10:30',
            summary: [
              'استخدام منصات Upwork للعالمية أو خمسات للعربية.',
              'تأليف ملف شخصي متكامل الجودة ومسجل للثقة.',
              'ارسال عروض أصلية وغير منسوخة وتقديم قيمة مضافة فورية.',
              'أهمية تسليم العمل قبل الأوان للحصول على التقييم المرتفع.'
            ],
            task: {
              title: 'إنشاء حساب وتسويق نفسك',
              description: 'افتح حسابك في خمسات. ابحث عن مشاريع إدخال داتا. تدرب على صياغة رسالة عرض تغري العميل لتجربتك.'
            },
            quiz: [
              {
                id: 'q421',
                question: 'ما هي الوسيلة الأفضل للنجاح في أولى أعمالك على منصات العمل الحر؟',
                options: [
                  { id: 'o1', text: 'إرسال مئات العروض الجاهزة للشركات دون دراستها', isCorrect: false },
                  { id: 'o2', text: 'تقديم سعر رخيص جداً بشكل مبالغ فيه', isCorrect: false },
                  { id: 'o3', text: 'تقديم عروض مخصصة، وإنجاز عالي الجودة لضمان أقصى التقييمات الإيجابية', isCorrect: true }
                ],
                explanation: 'التقييمات المرتفعة هي بوابة الدخول لمشاريع أكثر حجماً وثقةً من قبل عملاء جدد.'
              }
            ],
            xpReward: 50
          },
          {
            id: 'les_4_3',
            title: 'مشروع التخرج – قاعدة بيانات متكاملة لمؤسسة افتراضية',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة حاسوب مع قاعدة بيانات Excel من 3 أوراق منتظمة وأيقونة لشهادة احتراف.',
            duration: 'مفتوح المهلة',
            summary: [
              'المشروع الختامي لتتويج مكتسباتك.',
              'ثبت مهاراتك، وصية المعارف، والمراجعة الذاتية.',
              'انطلق في أمان نحو أولى خطواتك العملية.'
            ],
            task: {
              title: 'أطلق العنان لمهارتك وجسد مشروع المكتبة!',
              description: 'تخيل أنك عينت في مكتبة محلية لتنظيم المخزون، الزبائن والمبيعات كلها معاً في كتاب Excel شامل مزود بالمعادلات والفلاتر. صمم المشروع وضعه في محفظتك وافخر بإنجازك.'
            },
            xpReward: 100
          }
        ]
      }
    ]
  },
  'sewing': {
    craftId: 'sewing',
    title: 'تكوين الخياطة والتفصيل',
    titleEN: 'Sewing and Tailoring Course',
    description: 'مسار تعليمي شامل يأخذك من الصفر حتى الاحتراف في فن الخياطة العصرية والتقليدية.',
    descriptionEN: 'A comprehensive educational path that takes you from zero to professional in modern and traditional sewing.',
    levels: [
      {
        id: 'sew_lvl_1',
        title: 'المرحلة الأولى: أساسيات الخياطة والأدوات',
        titleEN: 'Stage 1: Sewing Basics and Tools',
        description: 'التعرف على الورشة، الأدوات، الأقمشة، وتشغيل الماكينة.',
        descriptionEN: 'Getting to know the workshop, tools, fabrics, and machine operation.',
        lessons: [
          {
            id: 'sew_1_1',
            title: 'التجهيزات الأساسية وترتيب الورشة',
            titleEN: 'Basic Equipment and Workshop Layout',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك لورشة خياطة صغيرة مرتبة. طاولة خشبية واسعة، رفوف خيوط ملونة، إضاءة نهارية دافئة.',
            duration: '05:30',
            summary: [
              'رتّب ورشتك: منطقة للقص، منطقة للخياطة، منطقة للكي.',
              'الإضاءة الجيدة ضرورية: ضوء أبيض دافئ مباشر على منطقة العمل.',
              'احتفظ بالأدوات الحادة في مكان آمن ومخصص.',
              'الخيوط ترتب حسب اللون لسهولة الوصول.',
              'كرسي مريح يحمي ظهرك في جلسات العمل الطويلة.'
            ],
            summaryEN: [
              'Organize your workshop: cutting area, sewing area, and ironing area.',
              'Good lighting is essential: direct warm white light on the workspace.',
              'Keep sharp tools in a safe, designated place.',
              'Sort threads by color for easy access.',
              'A comfortable chair protects your back during long sessions.'
            ],
            task: {
              title: 'تجهيز ركن الخياطة',
              titleEN: 'Setting up your sewing corner',
              description: 'جهز ركناً في بيتك كورشة صغيرة. ضع طاولة قرب النافذة، نظف المساحة، واجمع أدواتك.',
              descriptionEN: 'Set up a small corner at home as a workshop. Place a table near a window, clean the space, and gather your tools.'
            },
            quiz: [
              {
                id: 'sew_1_1_q1',
                question: 'لماذا نفضل ترتيب الورشة إلى مناطق (قص، خياطة، كي)؟',
                questionEN: 'Why do we prefer organizing the workshop into zones (cutting, sewing, ironing)?',
                options: [
                  { id: 'o1', text: 'لجمالية المكان فقط', textEN: 'For aesthetics only', isCorrect: false },
                  { id: 'o2', text: 'لتنظيم تدفق العمل ومنع الفوضى والحوادث', textEN: 'To organize workflow and prevent clutter and accidents', isCorrect: true },
                  { id: 'o3', text: 'لأن مساحة القماش تتطلب ذلك', textEN: 'Because fabric size requires it', isCorrect: false }
                ],
                explanation: 'التقسيم يحافظ على نظافة القماش ويسهل الانتقال بين خطوات الإنتاج.',
                explanationEN: 'Zoning keeps the fabric clean and makes transitioning between production steps easier.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'sew_1_2',
            title: 'التعرف على أدوات الخياطة واستخداماتها',
            titleEN: 'Getting to Know Sewing Tools',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي كبير على شكل طاولة عرض، كل أداة مرسومة بدقة مع تسميتها: مقص، متر، طباشير، دبابيس.',
            duration: '06:45',
            summary: [
              'مقص القماش: حاد جداً، لا يستخدم إلا على القماش.',
              'مقص الورق: مخصص لقص الباترونات فقط.',
              'متر القياس: مرن، أساسي لأخذ المقاسات.',
              'طباشير التعليم: يترك أثراً يزول بالكي.',
              'الكشتبان: يحمي الإصبع عند الخياطة اليدوية.'
            ],
            summaryEN: [
              'Fabric Scissors: Very sharp, only use on fabric.',
              'Paper Scissors: Only for cutting patterns.',
              'Measuring Tape: Flexible, essential for measurements.',
              'Tailor\'s Chalk: Leaves a mark that vanishes with ironing.',
              'Thimble: Protects the finger during hand sewing.'
            ],
            task: {
              title: 'جرد الأدوات',
              titleEN: 'Tool Inventory',
              description: 'اجمع كل أدواتك، اكتب على ورقة اسم كل أداة ووظيفتها.',
              descriptionEN: 'Gather all your tools, write the name and function of each tool on a piece of paper.'
            },
            quiz: [
              {
                id: 'sew_1_2_q1',
                question: 'هل يمكن استخدام مقص القماش لقص ورق الباترون؟',
                questionEN: 'Can you use fabric scissors to cut pattern paper?',
                options: [
                  { id: 'o1', text: 'نعم، لا مشكلة', textEN: 'Yes, no problem', isCorrect: false },
                  { id: 'o2', text: 'لا، لأن الورق يفقد المقص حدته بسرعة', textEN: 'No, because paper dulls the blades quickly', isCorrect: true }
                ],
                explanation: 'الحفاظ على حدة مقص القماش ضروري لقص نظيف وسلس للأنسجة.',
                explanationEN: 'Maintaining the sharpness of fabric scissors is essential for clean, smooth fabric cuts.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'sew_1_3',
            title: 'أنواع الأقمشة والتعرف على النسيج',
            titleEN: 'Fabric Types and Understanding Texture',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'عينة قماش تظهر مع تكبير نسيجها: قطن، حرير، جينز، صوف.',
            duration: '07:15',
            summary: [
              'الأقمشة الطبيعية: قطن، كتان، صوف، حرير. مريحة وتتنفس.',
              'الأقمشة الاصطناعية: بوليستر، نايلون، أكرليك. متينة وسهلة العناية.',
              'انظر إلى اتجاه النسيج (خيوط الطول والعرض) قبل القص.',
              'تعرف على وجه القماش والظهر.',
              'بعض الأقمشة تحتاج لغسيل مسبق لتجنب الانكماش.'
            ],
            summaryEN: [
              'Natural fabrics: cotton, linen, wool, silk. Comfortable and breathable.',
              'Synthetic fabrics: polyester, nylon, acrylic. Durable and easy to care for.',
              'Look at the grain direction (warp and weft) before cutting.',
              'Identify the right and wrong sides of the fabric.',
              'Some fabrics need pre-washing to avoid shrinkage.'
            ],
            task: {
              title: 'تصنيف الأقمشة',
              titleEN: 'Fabric Classification',
              description: 'اجمع 5 قطع قماش مختلفة من ملابس قديمة. المسها، ادرس نسيجها، واكتب نوع كل قماش.',
              descriptionEN: 'Collect 5 different fabric scraps. Touch them, study the grain, and guess each fabric type.'
            },
            xpReward: 35
          },
          {
            id: 'sew_1_4',
            title: 'تشغيل ماكينة الخياطة وضبط الغرز',
            titleEN: 'Operating the Sewing Machine and Stitch Adjustment',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1520032484190-e5ef81d87978?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'يد تضع بكرة الخيط، تمرره عبر المسارات، وتضبط الغرزة المستقيمة والزكزاك.',
            duration: '10:00',
            summary: [
              'تركيب الخيط العلوي والسفلي (المكوك) بشكل صحيح.',
              'الغرزة المستقيمة: الأكثر استخداماً، طولها المثالي 2.5 مم.',
              'الغرزة المتعرجة (زكزاك): لمنع تنسيل الأقمشة حوافها.',
              'ضبط شد الخيط (Tension) حسب نوع القماش.',
              'اختبر الغرزة دائماً على عينة قماش تجريبية.'
            ],
            summaryEN: [
              'Correctly threading the top thread and bobbin.',
              'Straight stitch: Most used, ideal length is 2.5mm.',
              'Zigzag stitch: To prevent fabric fraying at the edges.',
              'Adjusting thread tension based on fabric type.',
              'Always test the stitch on a scrap piece of fabric.'
            ],
            task: {
              title: 'التمرن على الغرز',
              titleEN: 'Practicing Stitches',
              description: 'جرب الخياطة بخط مستقيم، ثم منحني، ثم زكزاك على قطعة قماش قديمة.',
              descriptionEN: 'Try sewing a straight line, then a curve, then a zigzag on a scrap piece of fabric.'
            },
            xpReward: 40
          }
        ]
      },
      {
        id: 'sew_lvl_2',
        title: 'المرحلة الثانية: تقنيات الخياطة الأساسية',
        titleEN: 'Stage 2: Core Sewing Techniques',
        description: 'أخذ القياسات، الباترونات، القص، والدرزات الاحترافية.',
        descriptionEN: 'Taking measurements, patterns, cutting, and professional seams.',
        lessons: [
          {
            id: 'sew_2_1',
            title: 'أخذ القياسات الصحيحة',
            titleEN: 'Taking Correct Measurements',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شخصية ظلية تظهر عليها خطوط قياس الصدر، الخصر، الأرداف، والأكتاف.',
            duration: '08:00',
            summary: [
              'استخدم متراً مرناً ولا تشده كثيراً (اترك مسافة إصبع).',
              'الصدر – الخصر – الأرداف – عرض الكتفين – طول الكم.',
              'سجّل الأرقام مباشرة في دفتر خاص.',
              'القياسات تؤخذ بملابس خفيفة لضمان الدقة.',
              'أضف "زيادة الراحة" (Ease) حسب نوع التصميم.'
            ],
            summaryEN: [
              'Use a flexible tape and don\'t pull too tight (leave a finger gap).',
              'Chest - Waist - Hips - Shoulder width - Sleeve length.',
              'Record the numbers directly in a dedicated notebook.',
              'Take measurements over light clothing for accuracy.',
              'Add "ease" depending on the design type.'
            ],
            task: {
              title: 'قياساتك الشخصية',
              titleEN: 'Your Personal Measurements',
              description: 'خذ قياساتك بنفسك أمام المرآة وسجلها في دفترك.',
              descriptionEN: 'Take your own measurements in front of a mirror and record them in your notebook.'
            },
            xpReward: 35
          },
          {
            id: 'sew_2_2',
            title: 'فهم الباترونات وقراءتها',
            titleEN: 'Understanding and Reading Patterns',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ورق باترون بني تظهر عليه علامات القص، الخياطة، وسهم اتجاه النسيج.',
            duration: '07:30',
            summary: [
              'الباترون هو قالب ورقي لقص القماش بدقة.',
              'خط القص (متصل) وخط الخياطة (متقطع).',
              'سهم اتجاه النسيج: يحدد وضعية الباترون على القماش.',
              'علامات المحاذاة (Notches): لتطابق القطع عند التجميع.',
              'قارن مقاس الباترون بقياساتك قبل البدء.'
            ],
            summaryEN: [
              'A pattern is a paper template for cutting fabric accurately.',
              'Cutting line (solid) and sewing line (dashed).',
              'Grainline arrow: Determines the pattern placement on fabric.',
              'Notches: Small marks to match pieces during assembly.',
              'Compare pattern size with your measurements before starting.'
            ],
            task: {
              title: 'تحليل باترون',
              titleEN: 'Pattern Analysis',
              description: 'ابحث عن باترون بسيط، وحدد عليه خط القص وسهم النسيج.',
              descriptionEN: 'Find a simple pattern and identify the cutting line and grainline arrow on it.'
            },
            xpReward: 35
          },
          {
            id: 'sew_2_3',
            title: 'قص القماش بدقة واحترافية',
            titleEN: 'Cutting Fabric with Precision',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1560762484-813fc97650a0?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مقص كبير يتحرك بسلاسة على القماش الموشّى بعلامات الطباشير.',
            duration: '09:00',
            summary: [
              'اغسل وكوي القماش قبل القص لتجنب المفاجآت.',
              'ثبت الباترون بالدبابيس في اتجاه النسيج الصحيح.',
              'ارسم حول الباترون بالطباشير، ثم أزله.',
              'قص بحركات طويلة ومستمرة بالمقص الحاد.',
              'ابدأ بالقطع الكبيرة ثم انتقل للصغيرة.'
            ],
            summaryEN: [
              'Pre-wash and iron fabric before cutting to avoid surprises.',
              'Pin the pattern in the correct grain direction.',
              'Trace around the pattern with chalk, then remove it.',
              'Cut with long, steady strokes using sharp scissors.',
              'Start with larger pieces then move to smaller ones.'
            ],
            task: {
              title: 'تمرين القص',
              titleEN: 'Cutting Exercise',
              description: 'ارسم مربعاً 20×20 سم على قماش قديم وقصه بدقة.',
              descriptionEN: 'Draw a 20x20cm square on scrap fabric and cut it precisely.'
            },
            xpReward: 40
          },
          {
            id: 'sew_2_4',
            title: 'الخياطة المستقيمة والمنحنية والزوايا',
            titleEN: 'Straight, Curved, and Corner Sewing',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'إبرة الماكينة وهي تخيط خطاً مستقيماً، ثم تلتف حول منحنی، ثم تتوقف عند زاوية.',
            duration: '08:30',
            summary: [
              'الخطوط المنحنية: خيط ببطء وأدر القماش تدريجياً.',
              'الزوايا: توقف والإبرة لأسفل، ارفع القدم، أدر القماش 90 درجة.',
              'ثبت البداية والنهاية دائماً بغرزة عكسية (Backstitch).',
              'حافظ على سرعة ثابتة، لا تستعجل في المنعطفات.',
              'استخدم خطوط التوجيه على الماكينة للحفاظ على المسافة.'
            ],
            summaryEN: [
              'Curved lines: Sew slowly and rotate the fabric gradually.',
              'Corners: Stop with the needle down, lift the foot, rotate the fabric 90°.',
              'Always secure the start and end with a backstitch.',
              'Maintain a constant speed; don\'t rush on turns.',
              'Use the guide lines on the machine to maintain distance.'
            ],
            task: {
              title: 'متاهة الخياطة',
              titleEN: 'Sewing Maze',
              description: 'ارسم خطاً متموجاً وزوايا حادة على قماش وخط فوقها بالماكينة.',
              descriptionEN: 'Draw a wavy line and sharp corners on fabric and sew over them.'
            },
            xpReward: 40
          },
          {
             id: 'sew_2_5',
             title: 'تشطيب الحواف ومنع التنسيل',
             titleEN: 'Finishing Edges and Preventing Fraying',
             visualType: 'illustration',
             visualUrls: ['https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=1200&q=80'],
             visualDescription: 'مقارنة بين حافة مشطبة بزكزاك، حافة مطوية، وحافة أوفرلوك.',
             duration: '06:00',
             summary: [
               'الحواف الخام تتنسل مع الغسيل ويجب حمايتها.',
               'أسهل طريقة: غرزة الزكزاك على حافة القماش.',
               'الثني المزدوج: طي الحافة مرتين ثم خياطتها.',
               'كوي الحواف المطوية يجعل الخياطة أسهل وأكثر نظافة.',
               'ماكينة الأوفرلوك تعطي لمسة احترافية وتجارية.'
             ],
             summaryEN: [
               'Raw edges fray with washing and must be protected.',
               'Easiest way: Zigzag stitch along the fabric edge.',
               'Double fold: Folding the edge twice then sewing it.',
               'Ironing folded edges makes sewing easier and cleaner.',
               'An overlock machine provides a professional, commercial finish.'
             ],
             task: {
               title: 'تطبيق التشطيب',
               titleEN: 'Edge Finish Application',
               description: 'شطّب حواف قطعة قماش صغيرة بغرزة زكزاك وأخرى بثني مزدوج.',
               descriptionEN: 'Finish edges of a fabric scrap with zigzag stitch and another with double fold.'
             },
             xpReward: 35
          }
        ]
      },
      {
        id: 'sew_lvl_3',
        title: 'المرحلة الثالثة: مشاريع تطبيقية بسيطة',
        titleEN: 'Stage 3: Simple Practical Projects',
        description: 'صناعة وسادة، حقيبة تسوق، وإصلاح الملابس والكي الاحترافي.',
        descriptionEN: 'Making pillows, tote bags, garment repairs, and professional ironing.',
        lessons: [
          {
            id: 'sew_3_1',
            title: 'خياطة وسادة بسيطة (مشروع 1)',
            titleEN: 'Sewing a Simple Pillow (Project 1)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'قطعة قماش تطوى وجهها للداخل، تخيط من 3 جوانب، ثم تقلب وتحشى.',
            duration: '12:00',
            summary: [
              'قص القماش بأبعاد الوسادة + 2 سم للخياطة.',
              'ضع وجهي القماش على بعضهما (الوجه الجيد للداخل).',
              'خيط 3 جوانب، واترك نصف الجانب الرابع مفتوحاً.',
              'اقلب الوسادة على وجهها، واحشُها جيداً.',
              'أغلق الفتحة بغرزة خفية (سلم) يدوياً.'
            ],
            summaryEN: [
              'Cut fabric to pillow dimensions + 2cm for seams.',
              'Place right sides together.',
              'Sew 3 sides, leaving half of the 4th side open.',
              'Turn right side out and stuff well.',
              'Close the opening with a hand-sewn ladder stitch.'
            ],
            task: {
              title: 'صناعة وسادتك الأولى',
              titleEN: 'Make your first pillow',
              description: 'اصنع وسادة صغيرة (30×30 سم) باستخدام قماش قديم.',
              descriptionEN: 'Create a small pillow (30x30cm) using scrap fabric.'
            },
            xpReward: 50
          },
          {
            id: 'sew_3_2',
            title: 'خياطة حقيبة تسوق قماشية (مشروع 2)',
            titleEN: 'Sewing a Canvas Tote Bag (Project 2)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544816155-12df964ac73c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'قطع قماش خارجي وبطانة تُخاط معاً مع تركيب الحمالات الطويلة.',
            duration: '15:00',
            summary: [
              'حقيبة التسوق القماشية مشروع سهل ومفيد ويُباع جيداً.',
              'تحتاج لقماش خارجي متين (جينز، كتان) وبطانة قطنية.',
              'الحمالات: شريحتان طويلتان تثبتان في الفتحة العلوية.',
              'يمكن إضافة جيب داخلي صغير.',
              'الدرزات تكون مزدوجة في مناطق الضغط لمتانة أكبر.'
            ],
            summaryEN: [
              'Canvas tote bags are easy, useful, and sell well.',
              'Requires durable outer fabric (denim, linen) and cotton lining.',
              'Handles: Two long strips fixed at the top opening.',
              'An optional small interior pocket can be added.',
              'Double stitch stress points for greater durability.'
            ],
            task: {
              title: 'حقيبة صديقة للبيئة',
              titleEN: 'Eco-friendly Bag',
              description: 'صمم حقيبة تسوق بسيطة، ارسم شكلها، ثم قص القماش وخيط.',
              descriptionEN: 'Design a simple shopping bag, draw its shape, cut the fabric, and sew.'
            },
            xpReward: 60
          },
          {
            id: 'sew_3_3',
            title: 'إصلاحات الملابس الشائعة',
            titleEN: 'Common Garment Repairs',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1528221321742-f9a71068075a?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم يظهر إصلاح زر مقطوع، إغلاق فتحة جانبية، وتقصير بنطال.',
            duration: '10:00',
            summary: [
              'إصلاح الملابس خدمة دخلها سريع ولا تحتاج رأس مال كبير.',
              'خياطة الزر: اصنع حلقة صغيرة تحت الزر ليتمدد الخيط.',
              'إغلاق الفتحات: غرزة خفية باليد أو زكزاك بالماكينة.',
              'تقصير البنطال: اطوِ، اكوي، خيط بطية حول الساق.',
              'استبدال السحاب يتطلب فتح الدرز القديم وتركيب الجديد بدقة.'
            ],
            summaryEN: [
              'Repair services provide quick income with little capital.',
              'Sewing buttons: Create a small shank under the button.',
              'Closing holes: Hand ladder stitch or machine zigzag.',
              'Hemming pants: Fold, iron, and stitch around the leg.',
              'Zippers require removing the old seam and careful replacement.'
            ],
            task: {
              title: 'مهمة الإنقاذ',
              titleEN: 'Rescue Mission',
              description: 'أصلح زر مقطوعاً أو فتحة في قطعة ملابس ببيتك.',
              descriptionEN: 'Repair a missing button or a hole in a garment at home.'
            },
            xpReward: 45
          },
          {
            id: 'sew_3_4',
            title: 'تقنيات الكي الاحترافي',
            titleEN: 'Professional Ironing Techniques',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'يد تكوي درزاً مفتوحاً بالإصبع ثم بالمكواة. بخار يخرج والمكواة تتحرك بهدوء.',
            duration: '06:00',
            summary: [
              'الكي نصف جمال الخياطة. لا تهمله.',
              'افتح الدرزات واكوها مسطحة بعد كل خطوة خياطة.',
              'استخدم قطعة قماش حماية للأنسجة الحساسة.',
              'اضبط درجة الحرارة حسب القماش (قطن عالي، بوليستر منخفض).',
              'لا تسحب المكواة بقوة، بل اضغط بحركات هادئة.'
            ],
            summaryEN: [
              'Ironing is half the beauty of sewing. Don\'t ignore it.',
              'Press seams open and flat after every sewing step.',
              'Use a pressing cloth for delicate fabrics.',
              'Set temperature by fabric (high for cotton, low for polyester).',
              'Don\'t drag the iron forcefully; press with calm motions.'
            ],
            task: {
              title: 'تحدي الكي',
              titleEN: 'Ironing Challenge',
              description: 'جرب كي درز مفتوح على قطعتين مخيطتين معاً ولاحظ الفرق في النتيجة.',
              descriptionEN: 'Try pressing a seam open on two sewn pieces and note the result.'
            },
            xpReward: 30
          }
        ]
      },
      {
        id: 'sew_lvl_4',
        title: 'المرحلة الرابعة: الاحتراف والمشاريع',
        titleEN: 'Stage 4: Professionalism and Projects',
        description: 'تفصيل القميص، اللمسات التقليدية، والتسويق لمشروعك.',
        descriptionEN: 'Shirt drafting, traditional touches, and marketing your project.',
        lessons: [
          {
            id: 'sew_4_1',
            title: 'تفصيل قميص أو بلوزة بسيطة (مشروع 3)',
            titleEN: 'Drafting a Simple Shirt or Blouse (Project 3)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1594932224828-b4b059b6f6ee?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تجميع أجزاء القميص من الباترون إلى المنتج النهائي على عارضة.',
            duration: '25:00',
            summary: [
              'تجميع الأجزاء: الأكتاف، ثم الأكمام، ثم الجوانب، والفتحات.',
              'استخدم باترون تجاري بمقاسك لضمان النتائج الأولى.',
              'الياقة اختيارية للمبتدئين ويمكن استبدالها بفتحة رقبة بسيطة.',
              'ثنيات الأكمام والذيل تشطب في النهاية.',
              'جرب الملابس على الجسم عدة مرات أثناء العمل للتعديل.'
            ],
            summaryEN: [
              'Assembly: Shoulders, then sleeves, then sides and openings.',
              'Use a commercial pattern in your size for best initial results.',
              'Collars are optional; beginners can start with simple necklines.',
              'Hem the sleeves and bottom at the very end.',
              'Try the garment on several times during construction for adjustments.'
            ],
            task: {
              title: 'قميصك الأول',
              titleEN: 'Your First Shirt',
              description: 'نفذ باترون قميص بسيط على قماش رخيص كتجربة أولى.',
              descriptionEN: 'Execute a simple shirt pattern on inexpensive fabric as a first try.'
            },
            xpReward: 100
          },
          {
            id: 'sew_4_2',
            title: 'لمسات تقليدية جزائرية – الكراكو والقفطان',
            titleEN: 'Algerian Traditional Touches – Karakou & Caftan',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لكراكو مطرز وقفطان جزائري أنيق مع تسميات العناصر التقليدية.',
            duration: '15:00',
            summary: [
              'الخياطة التقليدية فن مربح ومطلوب جداً في الجزائر.',
              'الكراكو: سترة مطرزة بالفتلة أو المجبود.',
              'القفطان: فستان طويل فخم يلبس بحزام مزين.',
              'التقنيات: التطريز اليدوي وتثبيت العقاش والخرز.',
              'تخصص في لمسة معينة لتمييز علامتك التجارية.'
            ],
            summaryEN: [
              'Traditional sewing is a highly profitable and in-demand art in Algeria.',
              'Karakou: A jacket embroidered with Fetla or Mejboud.',
              'Caftan: A luxurious long dress worn with a decorative belt.',
              'Techniques: Hand embroidery, beadwork, and sequin fixing.',
              'Specialize in a specific touch to distinguish your brand.'
            ],
            xpReward: 40
          },
          {
            id: 'sew_4_3',
            title: 'تسويق منتجاتك وبناء زبائنك',
            titleEN: 'Marketing Your Products and Building Clients',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'هاتف يعرض صفحة تواصل اجتماعي لعلامة خياطة مع صور احترافية لمنتجات.',
            duration: '12:00',
            summary: [
              'صور منتجاتك بتصوير جيد في ضوء النهار الطبيعي.',
              'أنشئ صفحة على إنستغرام أو فيسبوك واعرض أعمالك بانتظام.',
              'اطلب من زبائنك نشر صورهم بمنتجاتك وتقييم خدمتك.',
              'حدد مواعيد تسليم واقعية والتزم بها لبناء الثقة.',
              'قدم وصفاً واضحاً للخامات والمقاسات والأسعار.'
            ],
            summaryEN: [
              'Photograph your products well in natural daylight.',
              'Create Instagram/Facebook pages and showcase your work regularly.',
              'Ask clients to post photos of themselves in your creations and review you.',
              'Set realistic delivery dates and stick to them to build trust.',
              'Provide clear descriptions of materials, sizes, and pricing.'
            ],
            task: {
              title: 'هويتك الرقمية',
              titleEN: 'Your Digital Identity',
              description: 'أنشئ صفحة لعلامتك التجارية وانشر 3 صور لأعمالك التجريبية.',
              descriptionEN: 'Create a page for your brand and post 3 photos of your practice projects.'
            },
            xpReward: 50
          },
          {
            id: 'sew_4_4',
            title: 'مشروع التخرج – تصميم زي كامل حسب الطلب',
            titleEN: 'Final Project – Custom Design from Sketch to Finish',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'لوحة تصميم (Mood Board) تضم رسماً تخطيطياً، عينات قماش، والقطعة النهائية.',
            duration: 'مفتوح',
            summary: [
              'صمم الزي على الورق مع القياسات التقديرية.',
              'اختر نوع القماش واللون المناسب للمناسبة.',
              'ارسم الباترون الكامل للأمام والخلف والأكمام.',
              'قص وخيط القطعة مع الالتزام بتشطيب نظيف.',
              'قدم تقريراً عن رحلة العمل من الفكرة إلى التنفيذ.'
            ],
            summaryEN: [
              'Design the outfit on paper with estimated measurements.',
              'Choose appropriate fabric type and color for the occasion.',
              'Draft the full pattern for front, back, and sleeves.',
              'Cut and sew the piece, maintaining clean finishes.',
              'Submit a report on your journey from concept to creation.'
            ],
            task: {
              title: 'عرض التخرج',
              titleEN: 'Graduation Display',
              description: 'صمم ونفذ زياً كاملاً لزبون افتراضي وقدمه كعرض نهائي لموهبتك.',
              descriptionEN: 'Design and execute a full outfit for a hypothetical client as a final showcase of your talent.'
            },
            xpReward: 150
          }
        ]
      }
    ]
  },
  'ms_access': {
    craftId: 'ms_access',
    title: 'تصميم وإدارة قواعد البيانات بـ Microsoft Access',
    titleEN: 'Database Design & Management with Microsoft Access',
    description: 'مسار تعليمي متكامل ينطلق بك من فهم أساسيات البيانات إلى بناء أنظمة إدارة متكاملة للمؤسسات والشركات.',
    descriptionEN: 'A comprehensive educational path that takes you from understanding data basics to building integrated management systems for organizations and companies.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: أساسيات قواعد البيانات والجداول',
        titleEN: 'Stage 1: Database Basics & Tables',
        description: 'تعرف على بيئة Access وكيفية بناء الأساس المتين لأي قاعدة بيانات.',
        descriptionEN: 'Get to know the Access environment and how to build the solid foundation of any database.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'مقدمة في Microsoft Access والتخطيط',
            titleEN: 'Introduction to Microsoft Access & Planning',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لشخص يرسم مخططاً لقاعدة بيانات على سبورة بيضاء.',
            visualDescriptionEN: 'Illustration of a person drawing a database schematic on a whiteboard.',
            duration: '10:00',
            summary: [
              'قاعدة البيانات هي مستودع رقمي منظم للمعلومات.',
              'Access يربط البيانات، الواجهات، والتقارير في ملف واحد.',
              'التخطيط على الورق قبل فتح البرنامج يوفر الكثير من الوقت.'
            ],
            summaryEN: [
              'A database is an organized digital repository for information.',
              'Access connects data, interfaces, and reports in one file.',
              'Planning on paper before opening the software saves a lot of time.'
            ],
            task: {
              title: 'تخطيط نظام مصغر لحفظ جهات الاتصال',
              titleEN: 'Plan a mini contact management system',
              description: 'ارسم على ورقة الحقوق الأساسية (الاسم، اللقب، الهاتف، البريد) لتطبيق جهات اتصالك.',
              descriptionEN: 'Draw on paper the basic fields (Name, Last Name, Phone, Email) for your contacts app.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الخطوة الأهم قبل إنشاء قاعدة البيانات؟',
                questionEN: 'What is the most important step before creating a database?',
                options: [
                  { id: 'o1', text: 'شراء حاسوب جديد', textEN: 'Buying a new computer', isCorrect: false },
                  { id: 'o2', text: 'التخطيط الورقي للبيانات والعلاقات', textEN: 'Paper planning of data and relationships', isCorrect: true },
                  { id: 'o3', text: 'حفظ الملف', textEN: 'Saving the file', isCorrect: false }
                ],
                explanation: 'التخطيط السليم يمنع الأخطاء الهيكلية لاحقاً.',
                explanationEN: 'Proper planning prevents structural errors later.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_2',
            title: 'تشغيل Access والتعرف على الشريط والكائنات',
            titleEN: 'Opening Access & Understanding the Ribbon and Objects',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة حاسوب تظهر سطح المكتب، نقرة مزدوجة على أيقونة Access. تظهر شاشة البداية. سهم يتحرك نحو "قاعدة بيانات فارغة". تظهر بعدها نافذة التنقل (Navigation Pane) ويُشار إلى الأقسام: جداول، استعلامات، نماذج، تقارير.',
            visualDescriptionEN: 'Computer screen showing desktop, double click on Access icon. Start screen appears. Arrow moves to "Blank database". Navigation Pane appears and highlights: Tables, Queries, Forms, Reports.',
            duration: '08:00',
            summary: [
              'Access جزء من حزمة Microsoft Office.',
              'عند فتحه، تختار "قاعدة بيانات فارغة" لبدء مشروع جديد.',
              'احفظ ملفك فوراً باسم واضح ومكان تعرفه.',
              'الشريط الرئيسي يحتوي على تبويبات: إنشاء، بيانات خارجية، أدوات قاعدة البيانات.',
              'الكائنات الأربعة الرئيسية: جداول (Tables)، استعلامات (Queries)، نماذج (Forms)، تقارير (Reports).'
            ],
            summaryEN: [
              'Access is part of the Microsoft Office suite.',
              'Upon opening, choose "Blank database" to start a new project.',
              'Save your file immediately with a clear name in a known location.',
              'The main ribbon contains tabs: Create, External Data, Database Tools.',
              'The four main objects: Tables, Queries, Forms, Reports.'
            ],
            task: {
              title: 'إنشاء واستكشاف ملف جديد',
              titleEN: 'Create and explore a new file',
              description: 'افتح Access على حاسوبك. أنشئ قاعدة بيانات فارغة باسم \'تجربتي_الاولى.accdb\'. تصفح التبويبات وحدد مكان كل كائن.',
              descriptionEN: 'Open Access on your computer. Create a blank database named \'My_First_Experience.accdb\'. Browse the tabs and locate each object type.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'أين تجد أدوات تصميم الجداول والنماذج لبنائها من الصفر؟',
                questionEN: 'Where do you find the tools to design tables and forms from scratch?',
                options: [
                  { id: 'o1', text: 'تبويب بيانات خارجية', textEN: 'External Data tab', isCorrect: false },
                  { id: 'o2', text: 'الصفحة الرئيسية', textEN: 'Home tab', isCorrect: false },
                  { id: 'o3', text: 'تبويب إنشاء (Create)', textEN: 'Create tab', isCorrect: true }
                ],
                explanation: 'خيارات الإنشاء تتيح بناء جميع كائنات قاعدة البيانات بأشكالها المختلفة.',
                explanationEN: 'The Create tab provides tools to build all database objects in their various forms.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_3',
            title: 'إنشاء الجدول الأول – الحقول وأنواع البيانات',
            titleEN: 'Creating the First Table - Fields and Data Types',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: نافذة فارغة لجدول. تظهر أعمدة: "اسم الحقل" و"نوع البيانات". يد تكتب "الاسم الكامل" وتختار "نص قصير"، ثم تكتب "تاريخ الميلاد" وتختار "تاريخ/وقت"، ثم "الراتب" وتختار "عملة". بعدها يتم حفظ الجدول باسم "الموظفين".',
            visualDescriptionEN: 'Animated scene: Empty table window. Columns appear: "Field Name" and "Data Type". A hand types "Full Name" and selects "Short Text", then types "Date of Birth" and selects "Date/Time", then "Salary" and selects "Currency". The table is then saved as "Employees".',
            duration: '12:00',
            summary: [
              'الجدول هو اللبنة الأساسية: صفوف (سجلات) وأعمدة (حقول).',
              'كل حقل له اسم فريد ونوع بيانات محدد.',
              'أنواع شائعة: نص قصير، نص طويل، رقم، تاريخ/وقت، عملة، نعم/لا.',
              'اختر النوع المناسب بدقة لتجنب أخطاء لاحقة.',
              'احفظ الجدول باسم واضح مباشرة.'
            ],
            summaryEN: [
              'The table is the core building block: rows (records) and columns (fields).',
              'Each field has a unique name and a specific data type.',
              'Common types: Short Text, Long Text, Number, Date/Time, Currency, Yes/No.',
              'Choose the appropriate type accurately to avoid later errors.',
              'Save the table with a clear name immediately.'
            ],
            task: {
              title: 'إنشاء جدول الزبائن',
              titleEN: 'Create the Customers table',
              description: 'أنشئ جدولاً باسم \'الزبائن\' يحتوي على الحقول: معرف_الزبون (ترقيم تلقائي)، الاسم (نص قصير)، رقم_الهاتف (نص قصير)، تاريخ_التسجيل (تاريخ/وقت).',
              descriptionEN: 'Create a table named \'Customers\' containing fields: Customer_ID (AutoNumber), Name (Short Text), Phone_Number (Short Text), Registration_Date (Date/Time).'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا نستخدم نوع "نص قصير" لرقم الهاتف بدل "رقم"؟',
                questionEN: 'Why do we use "Short Text" for a phone number instead of "Number"?',
                options: [
                  { id: 'o1', text: 'البرنامج لا يقبل الأرقام الطويلة', textEN: 'The software does not accept long numbers', isCorrect: false },
                  { id: 'o2', text: 'لأننا لن نجري عليه عمليات حسابية وقد يبدأ بالصفر', textEN: 'Because we won\'t perform calculations on it and it might start with zero', isCorrect: true },
                  { id: 'o3', text: 'لتقليل حجم الملف', textEN: 'To reduce the file size', isCorrect: false }
                ],
                explanation: 'حقول الأرقام تُخزن القيم الرياضية. رقم الهاتف لا يُجمع ولا يُطرح، لذلك نقوم بحفظه كنص ليتم عرض الصفر البدائي.',
                explanationEN: 'Number fields store mathematical values. A phone number is not added or subtracted, so we save it as text to preserve leading zeros.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_4',
            title: 'المفتاح الأساسي والفهرسة – منع التكرار',
            titleEN: 'Primary Key & Indexing - Preventing Duplication',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'جدول يظهر فيه عمود "المعرف" بجانبه أيقونة مفتاح صغير. عند محاولة إدخال رقم مكرر، يظهر تنبيه أحمر لطيف. ثم مشهد يوضح أن الفهرسة تُسرّع البحث مثل فهرس الكتاب.',
            visualDescriptionEN: 'A table showing an "ID" column with a small key icon next to it. Trying to enter a duplicate number prompts a gentle red alert. Then a scene shows indexing speeding up search like a book\'s index.',
            duration: '09:00',
            summary: [
              'المفتاح الأساسي (Primary Key): حقل يميز كل سجل بشكل فريد.',
              'غالباً ما يكون "ترقيم تلقائي" ويتزايد تلقائياً.',
              'يمنع Access إدخال قيم مكررة في هذا الحقل.',
              'الفهرسة (Indexing) تسرّع البحث والفرز، استخدمها للحقول التي ستُبحث كثيراً (مثل الاسم).',
              'لا تفرط في الفهرسة لأنها تبطئ الإدخال والتعديل.'
            ],
            summaryEN: [
              'Primary Key: A field that uniquely identifies each record.',
              'Often an "AutoNumber" that increments automatically.',
              'Access prevents entering duplicate values in this field.',
              'Indexing speeds up search and sorting; use it for frequently searched fields (e.g., Name).',
              'Do not over-index as it slows down data entry and modification.'
            ],
            task: {
              title: 'تأمين الجداول وتقوية الأداء',
              titleEN: 'Securing tables and boosting performance',
              description: 'في جدول \'الزبائن\'، تأكد من أن \'معرف_الزبون\' هو المفتاح الأساسي. أضف فهرسة لحقل \'الاسم\'. أدخل 5 سجلات وهمية.',
              descriptionEN: 'In the \'Customers\' table, make sure \'Customer_ID\' is the primary key. Add an index to the \'Name\' field. Enter 5 dummy records.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الخاصية الرئيسية للمفتاح الأساسي؟',
                questionEN: 'What is the main property of a primary key?',
                options: [
                  { id: 'o1', text: 'لا يمكن أن يتكرر داخل الجدول أبداً', textEN: 'It can never be duplicated within the table', isCorrect: true },
                  { id: 'o2', text: 'يجب أن يكون دائماً نصوصاً', textEN: 'It must always be text', isCorrect: false },
                  { id: 'o3', text: 'يسهل عملية طباعة الجدول', textEN: 'It makes printing the table easier', isCorrect: false }
                ],
                explanation: 'وظيفة المفتاح الأساسي هي ضمان تمييز السجلات دون خلط بينها.',
                explanationEN: 'The primary key\'s function is to ensure records are distinguished without confusion.'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: العلاقات، الاستيراد، وإدخال البيانات',
        titleEN: 'Stage 2: Relationships, Importing, and Data Entry',
        description: 'اكتشف كيف ترتبط الجداول ببعضها، وكيف تستورد البيانات وتتحقق من صحتها.',
        descriptionEN: 'Discover how tables relate to each other, and how to import and validate data.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'العلاقات بين الجداول – ربط المعلومات',
            titleEN: 'Relationships Between Tables - Linking Information',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لثلاثة جداول: "زبائن"، "طلبات"، "منتجات". خطوط بينها: بين زبائن وطلبات (واحد-إلى-متعدد)، بين طلبات ومنتجات (متعدد-إلى-متعدد عبر جدول وسيط). أسهم صغيرة تشرح.',
            visualDescriptionEN: 'Illustration of three tables: "Customers", "Orders", "Products". Lines between them: between customers and orders (one-to-many), between orders and products (many-to-many via a junction table). Small arrows explain.',
            duration: '15:00',
            summary: [
              'العلاقات تمنع تكرار البيانات وتربط الجداول ببعضها.',
              'العلاقة الأكثر شيوعاً: واحد-إلى-متعدد (زبون واحد له عدة طلبات).',
              'تحتاج إلى حقل مشترك (مفتاح خارجي) في الجدول "ابن".',
              'لإنشاء علاقة: أدوات قاعدة البيانات > علاقات > اسحب الحقل المشترك.',
              'فعّل "التأكد من التكامل المرجعي" لضمان عدم حذف سجل أب مرتبط بأبناء.'
            ],
            summaryEN: [
              'Relationships prevent data duplication and link tables together.',
              'The most common relationship: One-to-Many (one customer has many orders).',
              'Requires a common field (foreign key) in the "child" table.',
              'To create a relationship: Database Tools > Relationships > Drag the common field.',
              'Enable "Enforce Referential Integrity" to ensure a parent record linked to children is not deleted.'
            ],
            task: {
              title: 'إنشاء علاقة واحد-إلى-متعدد',
              titleEN: 'Create a One-to-Many Relationship',
              description: 'أنشئ جدولاً جديداً \'طلبات\' يحتوي على: معرف_الطلب، تاريخ_الطلب، معرف_الزبون (رقم). اربطه بجدول \'الزبائن\' بعلاقة واحد-إلى-متعدد.',
              descriptionEN: 'Create a new table \'Orders\' containing: Order_ID, Order_Date, Customer_ID (Number). Link it to the \'Customers\' table with a one-to-many relationship.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما فائدة تفعيل "التأكد من التكامل المرجعي" (Enforce Referential Integrity)؟',
                questionEN: 'What is the benefit of enabling "Enforce Referential Integrity"?',
                options: [
                  { id: 'o1', text: 'يمنع حذف زبون إذا كان لديه طلبات مسجلة لتفادي ضياع البيانات المرجعية', textEN: 'Prevents deleting a customer if they have recorded orders to avoid losing reference data', isCorrect: true },
                  { id: 'o2', text: 'يسرع من عمل قاعدة البيانات', textEN: 'Speeds up the database', isCorrect: false },
                  { id: 'o3', text: 'ينسق ألوان الجداول لتكون متطابقة', textEN: 'Formats table colors to match', isCorrect: false }
                ],
                explanation: 'التكامل المرجعي يحمي علاقات الجداول ويمنع وجود سجلات يتيمة.',
                explanationEN: 'Referential integrity protects table relationships and prevents orphan records.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_2_2',
            title: 'استيراد البيانات من Excel و CSV',
            titleEN: 'Importing Data from Excel and CSV',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد: ملف Excel مفتوح بجانب Access. في Access، تبويب "بيانات خارجية" > "استيراد من Excel". نافذة معالج تظهر، يختار الملف، ثم الورقة، ثم يحدد إذا كان الصف الأول عناوين أعمدة. البيانات تظهر في جدول Access.',
            visualDescriptionEN: 'Scene: Excel file open next to Access. In Access, tab "External Data" > "Import from Excel". Wizard window appears, path chosen, sheet selected, specifies first row has column headings. Data appears in Access table.',
            duration: '08:30',
            summary: [
              'يمكنك استيراد بيانات جاهزة من Excel أو ملفات CSV.',
              'اذهب إلى: بيانات خارجية > ملف جديد > Excel.',
              'اتبع المعالج: اختر الملف، حدد الورقة، تأكد من أنواع البيانات.',
              'إذا كانت البيانات تحتوي على أخطاء، سيُنشئ Access جدول أخطاء منفصلاً.',
              'هذه المهارة توفر ساعات من الإدخال اليدوي.'
            ],
            summaryEN: [
              'You can easily import existing data from Excel or CSV files.',
              'Go to: External Data > New Data Source > From File > Excel.',
              'Follow the wizard: choose file, select sheet, verify data types.',
              'If the data contains errors, Access creates a separate error table.',
              'This skill saves hours of manual entry.'
            ],
            task: {
              title: 'تطبيق الاستيراد',
              titleEN: 'Apply Importing',
              description: 'أنشئ ملف Excel بسيطاً بـ 10 صفوف (منتج، سعر، كمية) واستورده إلى Access. صحح أي خطأ يظهر.',
              descriptionEN: 'Create a simple Excel file with 10 rows (Product, Price, Quantity) and import it into Access. Correct any errors that arise.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'عند استيراد جدول، ماذا يحدث إذا كانت بعض الخلايا في Excel تحتوي قيماً غير مطابقة لنوع الحقل (مثال: نصوص في حقل أرقام)؟',
                questionEN: 'When importing a table, what happens if some Excel cells contain values that don\'t match the field type (e.g., text in a number field)?',
                options: [
                  { id: 'o1', text: 'يفشل الاستيراد تماماً ويمسح Access الجدول', textEN: 'Import fails completely and Access deletes the table', isCorrect: false },
                  { id: 'o2', text: 'يقوم Access بإنشاء جدول خاص يحتوي على الأخطاء ويترك الخلايا الخاطئة فارغة في الجدول الأصلي', textEN: 'Access creates a special table containing the errors and leaves the wrong cells empty in the original table', isCorrect: true },
                  { id: 'o3', text: 'يحاول Access تخمين القيم الصحيحة', textEN: 'Access attempts to guess the correct values', isCorrect: false }
                ],
                explanation: 'لضمان عدم توقف عملية الاستيراد، يقوم Access بعزل الأخطاء لكي تقوم بمراجعتها لاحقاً.',
                explanationEN: 'To ensure the import process doesn\'t halt, Access isolates errors so you can review them later.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_3',
            title: 'إدخال البيانات يدوياً والتعامل مع الأوراق الفرعية',
            titleEN: 'Manual Data Entry and Handling Subdatasheets',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'جدول "طلبات" مفتوح. صف جديد يُملأ. أسفل الصف، تظهر ورقة بيانات فرعية (Subdatasheet) تلقائياً تظهر تفاصيل الطلب المرتبطة من جدول آخر. يد تكتب تاريخاً وتختار زبوناً من قائمة منسدلة.',
            visualDescriptionEN: 'Orders table open. New row being filled. Below the row, a Subdatasheet automatically appears showing related order details from another table. Hand typing a date and selecting a customer from a dropdown.',
            duration: '09:00',
            summary: [
              'لإدخال بيانات: افتح الجدول وابدأ الكتابة في الصف الفارغ الأخير.',
              'عند وجود علاقة، يمكن لـ Access عرض بيانات الجدول المرتبط تلقائياً.',
              'استخدم قوائم البحث (Lookup) لتسهيل اختيار القيم من جدول آخر.',
              'اختصارات: Ctrl+\' لنسخ قيمة الحقل العلوي، Ctrl+; لإدخال تاريخ اليوم.',
              'احفظ السجل بالانتقال إلى سجل آخر (لا زر حفظ منفصل).'
            ],
            summaryEN: [
              'To enter data: Open the table and start typing in the last empty row.',
              'When a relationship exists, Access can automatically display related table data.',
              'Use Lookup lists to easily select values from another table.',
              'Shortcuts: Ctrl+\' to copy value from above, Ctrl+; to insert today\'s date.',
              'Save the record by moving to another record (no separate save button).'
            ],
            task: {
              title: 'التدرب على الإدخال السريع',
              titleEN: 'Practice fast entry',
              description: 'أدخل 5 طلبات في جدول الطلبات، كل طلب مرتبط بزبون مختلف. استخدم قائمة البحث لاختيار الزبون.',
              descriptionEN: 'Enter 5 orders in the Orders table, each linked to a different customer. Use the lookup list to select the customer.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي وظيفة ورقة البيانات الفرعية (Subdatasheet)؟',
                questionEN: 'What is the function of a Subdatasheet?',
                options: [
                  { id: 'o1', text: 'طباعة البيانات بسرعة', textEN: 'Print data quickly', isCorrect: false },
                  { id: 'o2', text: 'تغيير ألوان الجدول', textEN: 'Change table colors', isCorrect: false },
                  { id: 'o3', text: 'عرض سجلات الجدول المرتبط (الجدول الفرعي) داخل الجدول الأساسي مباشرة', textEN: 'Display records of the related table (child table) directly inside the main table', isCorrect: true }
                ],
                explanation: 'هي تتيح عرض والتعامل مع التفاصيل المرتبطة (كطلبات الزبون) مباشرة من واجهة الزبون.',
                explanationEN: 'It allows viewing and interacting with related details (like customer orders) directly from the customer interface.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_4',
            title: 'التحقق من صحة البيانات وتنسيق الجداول',
            titleEN: 'Data Validation and Table Formatting',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'نافذة تصميم الجدول. في حقل "العمر"، في خصائص الحقل، قاعدة التحقق: "Bين 18 و65". رسالة تحقق: "العمر يجب أن يكون بين 18 و65 سنة". عند محاولة إدخال 70، تظهر رسالة لطيفة باللون البرتقالي.',
            visualDescriptionEN: 'Table Design window. For "Age", Validation Rule: "Between 18 and 65". Validation Text: "Age must be between 18 and 65". Trying to enter 70 prompts a nice orange message.',
            duration: '11:00',
            summary: [
              'قواعد التحقق تمنع إدخال بيانات خاطئة من البداية.',
              'أمثلة: ">0" للكمية، "Is Not Null" للحقول الإجبارية.',
              'يمكن وضع قناع إدخال (Input Mask) لأرقام الهاتف: "0999-99-99-99".',
              'التنسيق: يمكن عرض التاريخ بصيغ مختلفة، أو الأرقام بمنازل عشرية محددة.',
              'البيانات النظيفة توفر وقتاً هائلاً لاحقاً.'
            ],
            summaryEN: [
              'Validation rules prevent entering bad data from the start.',
              'Examples: ">0" for quantity, "Is Not Null" for required fields.',
              'An Input Mask can be set for phone numbers: "0999-99-99-99".',
              'Formatting: dates can be shown differently, numbers with specific decimal places.',
              'Clean data saves immense time later.'
            ],
            task: {
              title: 'تطبيق قواعد التحقق',
              titleEN: 'Apply Validation Rules',
              description: 'في قاعدة بياناتك، أضف قاعدة تحقق لحقل \'الراتب\' بحيث لا يقل عن 18000 دج. أضف قناع إدخال لحقل الهاتف.',
              descriptionEN: 'In your database, add a validation rule for \'Salary\' to be not less than 18000 DZD. Add an input mask to the phone field.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما الفرق بين قاعدة التحقق (Validation Rule) وقناع الإدخال (Input Mask)؟',
                questionEN: 'What is the difference between a Validation Rule and an Input Mask?',
                options: [
                  { id: 'o1', text: 'لا يوجد أية فروق، كلاهما لنفس الغرض', textEN: 'No differences, both serve the same purpose', isCorrect: false },
                  { id: 'o2', text: 'قناع الإدخال خاص بالتواريخ فقط', textEN: 'Input Mask is only for dates', isCorrect: false },
                  { id: 'o3', text: 'قاعدة التحقق تختبر قيمة البيانات منطقياً، أما قناع الإدخال فيتحكم في طريقة وشكل إدخال الأحرف والأرقام', textEN: 'Validation rule logically tests the data value, whereas Input Mask controls the format and pattern of entered characters', isCorrect: true }
                ],
                explanation: 'قناع الإدخال يحافظ على تناسق الأشكال (مثل نمط رقم الهاتف)، وقواعد التحقق تضمن منطقية القيم (مثل مبلغ أكبر من الصفر).',
                explanationEN: 'Input mask preserves format consistency, while validation rules ensure logical values.'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_3',
        title: 'المرحلة 3: الاستعلامات – استخراج الإجابات',
        titleEN: 'Stage 3: Queries - Extracting Answers',
        description: 'اسأل قاعدة بياناتك أسئلة ذكية للحصول على التقارير والنتائج بسرعة البرق.',
        descriptionEN: 'Ask your database smart questions to get reports and results at lightning speed.',
        lessons: [
          {
            id: 'les_3_1',
            title: 'استعلام التحديد البسيط (Select Query)',
            titleEN: 'Simple Select Query',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'نافذة تصميم الاستعلام. جدول "الزبائن" مضاف. حقول مزدوج عليها: الاسم، المدينة. في صف المعايير تحت "المدينة": "وهران". عند تشغيل الاستعلام، تظهر قائمة بالزبائن من وهران فقط.',
            visualDescriptionEN: 'Query Design window. "Customers" table added. Fields clicked: Name, City. In Criteria row under "City": "Oran". Running the query displays a list of customers strictly from Oran.',
            duration: '09:00',
            summary: [
              'الاستعلام هو سؤال توجهه لقاعدة البيانات.',
              'استعلام التحديد يعرض بيانات تطابق معايير معينة.',
              'أنشئه من: إنشاء > تصميم استعلام > أضف الجداول > اسحب الحقول > ضع المعايير.',
              'يمكنك عرض حقول محددة فقط، دون كشف كل الجدول.',
              'المعايير النصية توضع بين علامتي تنصيص في SQL، لكن في واجهة Access تكتب مباشرة.'
            ],
            summaryEN: [
              'A query is a question you ask the database.',
              'Select query displays data matching certain criteria.',
              'Create via: Create > Query Design > Add Tables > Drag Fields > Set Criteria.',
              'You can show specific fields only without exposing the whole table.',
              'Text criteria are in quotes in SQL, but directly typed in Access UI.'
            ],
            task: {
              title: 'أول استعلام لك',
              titleEN: 'Your first query',
              description: 'أنشئ استعلاماً يعرض أسماء الزبائن الذين سجلوا بعد تاريخ 1/1/2024. أظهر الاسم والتاريخ فقط.',
              descriptionEN: 'Create a query showing customer names who registered after 1/1/2024. Show only Name and Date.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا نستخدم الاستعلام (Query) بدلاً من البحث في الجداول مباشرة؟',
                questionEN: 'Why do we use a Query instead of searching tables directly?',
                options: [
                  { id: 'o1', text: 'لأن الجداول لا يمكن فتحها بعد إغلاقها', textEN: 'Because tables cannot be opened after closing', isCorrect: false },
                  { id: 'o2', text: 'لقدرته على تصفية، حساب، وعرض البيانات من عدة جداول في وجهة واحدة مخصصة', textEN: 'For its ability to filter, calculate, and display data from multiple tables in one custom view', isCorrect: true },
                  { id: 'o3', text: 'الاستعلام يحذف البيانات غير المهمة', textEN: 'A query deletes unimportant data', isCorrect: false }
                ],
                explanation: 'الاستعلام هو أداة فلترة قوية تُسهل ترتيب المعلومات واستدعائها بناء على شروط.',
                explanationEN: 'A query is a powerful filtering tool that makes ordering and retrieving conditioned data easy.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_3_2',
            title: 'الاستعلام بمعايير متعددة والفرز',
            titleEN: 'Querying with Multiple Criteria and Sorting',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'نافذة التصميم، لكن صف المعايير يحتوي: "وهران" تحت المدينة، و ">20" تحت تاريخ_التسجيل. النتيجة: زبائن من وهران سجلوا بعد 2020. عمود "الاسم" مُرتب أبجدياً.',
            visualDescriptionEN: 'Design window, criteria row has: "Oran" under City, and ">20" under Registration_Date. Result: Oran customers registered after 2020. "Name" column sorted alphabetically.',
            duration: '10:00',
            summary: [
              'يمكن الجمع بين عدة معايير في نفس الصف (AND) أو في صفوف مختلفة (OR).',
              'للفرز: اختر "تصاعدي" أو "تنازلي" في صف الفرز تحت الحقل.',
              'يمكنك استخدام رموز: >, <, >=, <=, <> (لا يساوي).',
              'لعرض الزبائن من وهران أو قسنطينة: ضع "وهران" في صف المعايير و"قسنطينة" في صف "أو".'
            ],
            summaryEN: [
              'Combine multiple criteria in the same row (AND) or different rows (OR).',
              'To sort: choose "Ascending" or "Descending" in the Sort row under the field.',
              'You can use symbols: >, <, >=, <=, <> (Not equal).',
              'To show customers from Oran or Constantine: place "Oran" in Criteria row and "Constantine" in the "or" row.'
            ],
            task: {
              title: 'تصميم استعلام مركب',
              titleEN: 'Design a complex query',
              description: 'أنشئ استعلاماً يعرض الطلبات التي تزيد قيمتها عن 5000 دج، مرتبة من الأحدث إلى الأقدم.',
              descriptionEN: 'Create a query showing orders exceeding 5000 DZD, sorted newest to oldest.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا وضعت شرطين في نفس السطر بمنطقة الشروط، ما هي العلاقة المنطقية بينهما؟',
                questionEN: 'If you put two conditions on the same criteria line, what is the logical relationship between them?',
                options: [
                  { id: 'o1', text: 'أو (OR)', textEN: 'OR', isCorrect: false },
                  { id: 'o2', text: 'و (AND)', textEN: 'AND', isCorrect: true },
                  { id: 'o3', text: 'لا (NOT)', textEN: 'NOT', isCorrect: false }
                ],
                explanation: 'كتابة شرطين على نفس الصف تعني أن كليهما يجب أن يتحققا معاً (AND).',
                explanationEN: 'Writing two conditions on the same row means both must be met together (AND).'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_3_3',
            title: 'الاستعلامات الحسابية والإجمالية',
            titleEN: 'Calculated and Totals Queries',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'في تصميم الاستعلام، زر "الإجماليات" (Σ) يظهر صفاً جديداً. تحت حقل "المبلغ" نختار "Sum"، تحت "معرف_الطلب" نختار "Count". النتيجة تظهر مجموع المبيعات وعدد الطلبات.',
            visualDescriptionEN: 'In query design, the "Totals" button (Σ) reveals a new row. Under "Amount" we pick "Sum", under "Order_ID" we pick "Count". Result shows total sales and order count.',
            duration: '11:30',
            summary: [
              'استعلامات الإجماليات تلخص البيانات: مجموع، متوسط، عدد، أعلى، أدنى.',
              'فعّل صف الإجماليات من زر "Sigma" في شريط التصميم.',
              'يمكن إنشاء حقل حسابي: "الإجمالي: [السعر] * [الكمية]".',
              'هذه الاستعلامات ضرورية للتقارير الشهرية والمحاسبة.',
              'جرب Group By لتجميع النتائج حسب فئة (مثلاً: مجموع المبيعات لكل مدينة).'
            ],
            summaryEN: [
              'Totals queries summarize data: Sum, Avg, Count, Max, Min.',
              'Enable the Totals row from the "Sigma" button in the Design ribbon.',
              'You can create a calculated field: "Total: [Price] * [Quantity]".',
              'These queries are essential for monthly reports and accounting.',
              'Try "Group By" to group results by category (e.g., total sales per city).'
            ],
            task: {
              title: 'إنشاء حقل حسابي',
              titleEN: 'Create a calculated field',
              description: 'أنشئ استعلاماً يحسب إجمالي قيمة الطلبات لكل زبون. أظهر اسم الزبون والمجموع.',
              descriptionEN: 'Create a query calculating total order values per customer. Show Customer Name and Sum.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لإيجاد عدد السجلات التي توافق شرطاً معيناً، أي دالة إجمال نستعمل؟',
                questionEN: 'To find the number of records meeting a certain condition, which total function do we use?',
                options: [
                  { id: 'o1', text: 'Sum (المجموع)', textEN: 'Sum', isCorrect: false },
                  { id: 'o2', text: 'Max (الحد الأقصى)', textEN: 'Max', isCorrect: false },
                  { id: 'o3', text: 'Count (العدد)', textEN: 'Count', isCorrect: true }
                ],
                explanation: 'Count تقوم بإحصاء وحساب عدد السجلات (الصفوف)، بينما Sum تجمع القيم الرقمية بداخلها.',
                explanationEN: 'Count tallies the number of records (rows), while Sum adds numeric values within them.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_3_4',
            title: 'استعلامات الإجراء (Action Queries) – تحديث، حذف، إلحاق',
            titleEN: 'Action Queries - Update, Delete, Append',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1614064641913-6b71f3016578?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'قائمة Access تظهر أنواع الاستعلامات. اختيار "استعلام تحديث" (Update Query). نافذة تصميم، صف "تحديث إلى" لحقل "السعر" بـ "[السعر]*1.1". عند التشغيل، تحذير "أنت على وشك تحديث 50 سجلاً". ثم تأكيد.',
            visualDescriptionEN: 'Access menu showing query types. Choosing "Update Query". Design window, "Update To" row for "Price" field with "[Price]*1.1". Upon running, warning "You are about to update 50 rows". Then confirmation.',
            duration: '10:00',
            summary: [
              'استعلامات الإجراء تغير البيانات فعلياً، استخدمها بحذر.',
              'تحديث: لتعديل مجموعة سجلات دفعة واحدة (مثلاً رفع الأسعار 10%).',
              'حذف: لحذف سجلات تنطبق عليها معايير.',
              'إلحاق: لإضافة سجلات من جدول لآخر.',
              'دائماً خذ نسخة احتياطية قبل تشغيلها.'
            ],
            summaryEN: [
              'Action queries permanently change data; use with caution.',
              'Update: Edit a batch of records at once (e.g., raise prices by 10%).',
              'Delete: Remove records meeting criteria.',
              'Append: Add records from one table to another.',
              'Always make a backup before running them.'
            ],
            task: {
              title: 'تنفيذ استعلام إجراء بحذر',
              titleEN: 'Execute an Action Query carefully',
              description: 'خذ نسخة من قاعدة بياناتك. أنشئ استعلام تحديث يضيف 1000 دج لراتب كل الموظفين الذين رواتبهم أقل من 25000 دج. نفذه ثم تحقق.',
              descriptionEN: 'Make a backup. Create an update query adding 1000 DZD to all employees with a salary below 25000 DZD. Run and verify.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي النصيحة الأهم دائماً قبل عمل استعلام حذف أو تحديث؟',
                questionEN: 'What is the most important advice before running a Delete or Update query?',
                options: [
                  { id: 'o1', text: 'أخذ نسخة احتياطية (Backup) قبل التنفيذ', textEN: 'Make a backup before executing', isCorrect: true },
                  { id: 'o2', text: 'التحويل إلى اللغة الإنجليزية', textEN: 'Switching to English', isCorrect: false },
                  { id: 'o3', text: 'تغيير ألوان الجدول', textEN: 'Changing table colors', isCorrect: false }
                ],
                explanation: 'لأن استعلام الإجراء يقوم بتعديلات أو حذوفات لا يمكن التراجع عنها بـ Ctrl+Z.',
                explanationEN: 'Because an Action Query makes irreversible modifications or deletions (Ctrl+Z won\'t work).'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_4',
        title: 'المرحلة 4: النماذج، التقارير، والتطبيق المتكامل',
        titleEN: 'Stage 4: Forms, Reports, and Integrated App',
        description: 'صمم واجهات إدخال جذابة وتقارير متطورة وأتمت أعمالك لتبني برنامجك الخاص.',
        descriptionEN: 'Design attractive input interfaces, sophisticated reports, and automate tasks to build your own app.',
        lessons: [
          {
            id: 'les_4_1',
            title: 'إنشاء نموذج إدخال بيانات بسيط',
            titleEN: 'Creating a Simple Data Entry Form',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: من تبويب "إنشاء" يختار "نموذج" (Form). يظهر نموذج تلقائي يعرض سجلات جدول الزبائن واحداً تلو الآخر. يد تنتقل بين السجلات بأزرار التنقل. ثم ينتقل إلى عرض التصميم ويُضبط حجم الحقول ومكانها.',
            visualDescriptionEN: 'Animated scene: From "Create" tab selects "Form". An automatic form appears showing Customers table records one by one. Hand navigates records with buttons. Then moves to Design View, adjusting field sizes and placements.',
            duration: '14:00',
            summary: [
              'النموذج واجهة سهلة لإدخال البيانات بدلاً من فتح الجدول مباشرة.',
              'لإنشائه بسرعة: حدد الجدول > إنشاء > نموذج.',
              'يمكن تخصيص التصميم: أضف شعاراً، غير ألوان الخلفية، رتب الحقول.',
              'أضف أزراراً (زر حفظ، زر سجل جديد) من خلال عرض التصميم.',
              'النموذج يقلل أخطاء الإدخال ويساعد المستخدمين غير التقنيين.'
            ],
            summaryEN: [
              'A Form is a user-friendly interface for data entry instead of opening tables directly.',
              'To build rapidly: Select table > Create > Form.',
              'Customize design: add a logo, change backgrounds, rearrange fields.',
              'Add buttons (Save, New Record) in Design View.',
              'Forms reduce entry errors and help non-technical users.'
            ],
            task: {
              title: 'تصميم أول نموذج لك',
              titleEN: 'Design your first form',
              description: 'أنشئ نموذجاً لجدول \'الطلبات\'. أضف عنواناً في الأعلى \'نموذج إدخال الطلبات\'. جرب إدخال طلب جديد باستخدامه.',
              descriptionEN: 'Create a form for the \'Orders\' table. Add a title at the top \'Order Input Form\'. Try entering a new order using it.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الهدف الأساسي من النماذج (Forms) في Access؟',
                questionEN: 'What is the main goal of Forms in Access?',
                options: [
                  { id: 'o1', text: 'بناء واجهات سهلة وآمنة للمستخدمين لإدخال وتعديل البيانات دون لمس الجداول الخام', textEN: 'Build easy and secure interfaces for users to enter and edit data without touching raw tables', isCorrect: true },
                  { id: 'o2', text: 'طباعة البيانات للمدير', textEN: 'Print data for the manager', isCorrect: false },
                  { id: 'o3', text: 'القيام بالعمليات الحسابية المعقدة', textEN: 'Perform complex calculations', isCorrect: false }
                ],
                explanation: 'النماذج هي الواجهة الأمامية التي تحمي تركيبة قاعدة البيانات وتجعل الاستخدام ممتعاً وسهلاً.',
                explanationEN: 'Forms are the frontend protecting the database structure, making usage enjoyable and easy.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_4_2',
            title: 'إنشاء تقرير احترافي للطباعة',
            titleEN: 'Creating a Professional Report for Printing',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1540340061722-f155c5dfc5b2?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'من تبويب "إنشاء" > "تقرير" (Report). يظهر تقرير ببيانات الزبائن في صفوف وأعمدة، مع ترويسة وتذييل تلقائيين. ثم عرض التصميم: تُضاف مسطرة، يُنسق الخط، يُضاف شعار في الترويسة.',
            visualDescriptionEN: 'From "Create" tab > "Report". Report appears with customer data organized in columns and rows, with automatic headers and footers. Then Design View: ruler added, font formatted, logo added in header.',
            duration: '11:00',
            summary: [
              'التقارير لعرض البيانات بصيغة قابلة للطباعة أو التصدير PDF.',
              'أنشئها بسرعة من الجدول أو الاستعلام > إنشاء > تقرير.',
              'في عرض التصميم، يمكنك تجميع البيانات (مثلاً: تقرير المبيعات مجمّع حسب المدينة).',
              'أضف أرقام الصفحات، التاريخ، والشعار.',
              'صدر التقرير إلى PDF لإرساله للزبون أو الإدارة.'
            ],
            summaryEN: [
              'Reports display data in a printable format or can be exported to PDF.',
              'Create quickly from table/query via: Create > Report.',
              'In Design View, you can group data (e.g., sales report grouped by city).',
              'Add page numbers, date, and a logo.',
              'Export the report to PDF to send to the client or management.'
            ],
            task: {
              title: 'تطوير تقرير للطباعة',
              titleEN: 'Develop a printable report',
              description: 'أنشئ تقريراً من استعلام مجموع الطلبات لكل زبون. جمّعه حسب المدينة. صدره إلى PDF.',
              descriptionEN: 'Create a report from the total orders per customer query. Group by City. Export to PDF.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا أردنا إعداد ورقة لطباعة فواتير آخر الشهر، فما هو الكائن المناسب لاستخدامه؟',
                questionEN: 'If we want to prepare a page to print end-of-month invoices, which object is best to use?',
                options: [
                  { id: 'o1', text: 'الجدول (Table)', textEN: 'Table', isCorrect: false },
                  { id: 'o2', text: 'التقرير (Report)', textEN: 'Report', isCorrect: true },
                  { id: 'o3', text: 'النموذج (Form)', textEN: 'Form', isCorrect: false }
                ],
                explanation: 'التقرير متخصص في تشكيل البيانات بالشكل الأنسب للطباعة على الورق واستخراج العروض.',
                explanationEN: 'Reports specialize in formatting data properly for paper printing and exporting presentations.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_4_3',
            title: 'أتمتة المهام باستخدام الماكرو (Macro)',
            titleEN: 'Automating Tasks using Macros',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1610488251214-7227ab8bfeb9?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'نافذة تصميم الماكرو. إجراء "OpenForm" لفتح نموذج الزبائن، ثم إجراء "MessageBox" لعرض رسالة ترحيب. بعدها يسند الماكرو إلى زر في النموذج الرئيسي. عند النقر، يُفتح النموذج وتظهر الرسالة.',
            visualDescriptionEN: 'Macro design window. "OpenForm" action targeting Customers form, then "MessageBox" action displaying a welcome message. Then the macro is bound to a button on the main form. On click, form opens and message shows.',
            duration: '10:45',
            summary: [
              'الماكرو يسجل سلسلة أوامر وينفذها بنقرة واحدة.',
              'استخدمه لأتمتة المهام المتكررة: فتح تقرير، تصدير بيانات، عرض رسالة.',
              'يمكن ربط الماكرو بزر في نموذج.',
              'لا يتطلب معرفة برمجية عميقة.',
              'مثالي لبناء تطبيقات Access سهلة الاستعمال للموظفين.'
            ],
            summaryEN: [
              'A Macro records a sequence of commands and executes them with a single click.',
              'Use it to automate repetitive tasks: opening reports, exporting, displaying messages.',
              'The macro can be bound to a button in a form.',
              'It does not require deep programming knowledge.',
              'Perfect for building user-friendly Access applications for employees.'
            ],
            task: {
              title: 'تشغيل الماكرو الأول',
              titleEN: 'Run your first macro',
              description: 'أنشئ ماكرو بسيطاً يفتح تقرير \'مجموع الطلبات\' ويعرض رسالة \'تم فتح التقرير\'. اربطه بزر في نموذج رئيسي.',
              descriptionEN: 'Create a simple macro that opens \'Total Orders\' report and shows message \'Report Opened\'. Bind it to a button on a main form.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي أهم فائدة لاستخدام وحدات الماكرو في تطبيقك؟',
                questionEN: 'What is the main benefit of using Macros in your application?',
                options: [
                  { id: 'o1', text: 'إنها ترسم تقارير بيانية تلقائياً', textEN: 'They draw graphic reports automatically', isCorrect: false },
                  { id: 'o2', text: 'أتمتة المهام المتكررة وتوفير الوقت بنقرات بسيطة، دون الحاجة لتعلم البرمجة المعقدة', textEN: 'Automating repetitive tasks and saving time with simple clicks, without learning complex coding', isCorrect: true },
                  { id: 'o3', text: 'الماكرو يقوم بإصلاح أخطاء ويندوز', textEN: 'A macro fixes Windows errors', isCorrect: false }
                ],
                explanation: 'الماكرو هو ببساطة مجموعة تعليمات مجهزة مسبقاً لتكون سهلة التشغيل بضغطة زر.',
                explanationEN: 'A macro is simply a pre-made set of instructions tailored for easy execution via button click.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_4_4',
            title: 'مشروع التخرج – نظام متكامل لمكتبة صغيرة',
            titleEN: 'Capstone Project - Complete System for a Small Library',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي كبير يظهر قاعدة بيانات Access مكتملة بنماذج أنيقة وتقارير. شعار مكتبة وهمية "مكتبة النور". جداول: كتب، أعضاء، إعارات. نموذج إعارة بسيط. تقرير بالكتب المعارة حالياً.',
            visualDescriptionEN: 'Large illustration showcasing a complete Access database with elegant forms and reports. Fictional "Al-Noor Library" logo. Tables: Books, Members, Loans. Simple loan form. Report of currently loaned books.',
            duration: '35:00',
            summary: [
              'دمج كل المهارات المكتسبة لبناء نظام فعال.',
              'بناء الجداول الأساسية: الكتب، الأعضاء، الإعارات.',
              'تأمين العلاقات والتكامل المرجعي.',
              'تصميم النماذج وتسهيل البحث بالإستعلامات.',
              'تنسيق التقارير النهائية للمدير.'
            ],
            summaryEN: [
              'Integrate all acquired skills to build an effective system.',
              'Build essential tables: Books, Members, Loans.',
              'Secure relationships and referential integrity.',
              'Design forms and simplify search with queries.',
              'Format final reports for the manager.'
            ],
            task: {
              title: 'تطوير تطبيق مكتبة النور',
              titleEN: 'Develop Al-Noor Library App',
              description: 'صمم قاعدة بيانات: 1- جداول (كتب، أعضاء، إعارات)، 2- نماذج بمفاتيح منسدلة، 3- تقرير للكتب غير المرجعة مع ماكرو يفتحه.',
              descriptionEN: 'Design a DB: 1- Tables (Books, Members, Loans), 2- Forms with dropdowns, 3- Unreturned books report with an opening macro.'
            },
            xpReward: 150
          }
        ]
      }
    ],
    badges: {
      started: {
        id: 'acc_starter',
        title: 'مخطط البيانات المبتدئ',
        titleEN: 'Beginner Data Planner',
        description: 'بدأت رحلتك في تنظيم البيانات مع Access.',
        descriptionEN: 'Started your journey in organizing data with Access.',
        icon: 'database'
      },
      completed: {
        id: 'acc_pro',
        title: 'محترف Microsoft Access',
        titleEN: 'Microsoft Access Professional',
        description: 'أتممت جميع المراحل وأصبحت قادراً على بناء أنظمة قواعد البيانت.',
        descriptionEN: 'Completed all stages and are now capable of building database systems.',
        icon: 'database'
      }
    }
  }
};

