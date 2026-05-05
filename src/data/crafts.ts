export interface Craft {
  id: string;
  nameAR: string;
  nameFR: string;
  nameEN?: string;
  category: string;
  categoryEN?: string;
  shortDescription: string;
  shortDescriptionEN?: string;
  fullDescription: string;
  fullDescriptionEN?: string;
  tools: string[];
  toolsEN?: string[];
  skills: string[];
  skillsEN?: string[];
  duration: string;
  durationEN?: string;
  careerOpportunities: string[];
  careerOpportunitiesEN?: string[];
  averageIncome: string;
  averageIncomeEN?: string;
  image: string;
}

export const crafts: Craft[] = [
  {
    id: 'carpentry',
    nameAR: 'النجارة المعمارية وصناعة الأثاث',
    nameFR: 'Menuiserie et Ébénisterie',
    category: 'صناعية وخشبية',
    shortDescription: 'تحويل الخشب إلى تحف فنية وأثاث عملي.',
    fullDescription: 'النجار ليس مجرد عامل، بل هو مهندس مساحات وفنان يحول الألواح الخشبية الصماء إلى قطع أثاث تنبض بالحياة للبيوت والمكاتب. يومه مليء برائحة الخشب والقياسات الدقيقة.',
    tools: ['منشار كهربائي', 'آلة الصنفرة', 'شريط قياس', 'مطرقة ودبابيس', 'مواد الطلاء'],
    skills: ['الدقة في القياس', 'الرؤية الهندسية ثلاثية الأبعاد', 'الصبر والانتباه للتفاصيل'],
    duration: 'من 12 إلى 18 شهراً',
    careerOpportunities: ['ورشة خاصة', 'مصانع الأثاث الكبرى', 'العمل الحر كمنفذ ديكورات'],
    averageIncome: 'بداية بـ 40,000 دج، وتصل إلى أكثر من 150,000 دج لأصحاب الورش والمقاولات.',
    image: 'https://images.unsplash.com/photo-1610488251214-7227ab8bfeb9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electrical_building',
    nameAR: 'كهرباء العمارات',
    nameFR: 'Électricité Bâtiment',
    category: 'البناء والأشغال العمومية',
    shortDescription: 'جلب النور والطاقة للمباني بطريقة آمنة وذكية.',
    fullDescription: 'عصب البناء الحديث، كهربائي العمارات هو من يخطط ويركب شبكات الأسلاك والإنارة. يضمن عمل كل جهاز وسلامة كل ساكن بفضل التخطيط والالتزام بمعايير الأمان.',
    tools: ['مقياس متعدد (Multimeter)', 'كماشة تجريد الأسلاك', 'مفكات براغي معزولة', 'جهاز حفر'],
    skills: ['القدرة على قراءة المخططات الكهربائية', 'التركيز العالي', 'الحذر والالتزام بالأمان'],
    duration: 'متوسط 12 شهراً',
    careerOpportunities: ['مؤسسات البناء', 'فرق الصيانة العامة', 'العمل الحر كمقاول كهرباء'],
    averageIncome: '45,000 دج كعامل، وقد يتجاوز 120,000 دج للعمل الحر والمشاريع.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sewing',
    nameAR: 'الخياطة والتفصيل (الألبسة الجاهزة)',
    nameFR: 'Couture et Confection',
    category: 'النسيج والجلود',
    shortDescription: 'تصميم وإبداع الأزياء بلمسة فنية ودقة متناهية.',
    fullDescription: 'من اختيار القماش إلى القص والخياطة، الخياط هو فنان يحول الأقمشة لملابس أنيقة ومناسبة. يمكن أن تكون الحرفة إبداعية جداً خصوصاً في تصميم الأزياء التقليدية الجزائرية أو العصرية.',
    tools: ['آلة خياطة', 'شريط قياس', 'مقص خاص بالقماش', 'مكواة بخارية', 'طباشير تعليم'],
    skills: ['الذوق الفني', 'التنسيق الحركي الدقيق', 'طول البال والصبر'],
    duration: 'من 6 إلى 12 شهراً (تكوين مهني)',
    careerOpportunities: ['دار أزياء', 'ورشات نسج، أو مشروع مصغر في المنزل', 'علامة تجارية خاصة'],
    averageIncome: 'ربح متغير جداً، يبدأ من 30,000 دج وقد يصل لمداخيل كبيرة للمصممين المعروفين.',
    image: 'https://images.unsplash.com/photo-1584347781845-d85c8ef78b30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mechanics',
    nameAR: 'ميكانيك وصيانة السيارات',
    nameFR: 'Mécanique et Maintenance Automobile',
    category: 'ميكانيك المحركات',
    shortDescription: 'تشخيص وإصلاح أعطال السيارات وإعادة الحياة لمحركاتها.',
    fullDescription: 'أطباء السيارات، يعتمد الميكانيكيون اليوم على أجهزة فحص إلكترونية بجانب خبرتهم اليدوية. إنها مهنة تتطور مع تطور التكنولوجيا في السيارات.',
    tools: ['أجهزة فحص إلكتروني (Scanner)', 'مفاتيح ربط متنوعة', 'رافعات هيدروليكية', 'أدوات قياس'],
    skills: ['التحليل وحل المشاكل', 'فهم الميكانيكا والكهرباء', 'القوة البدنية الجيدة'],
    duration: 'حوالي 18 إلى 24 شهراً',
    careerOpportunities: ['وكالات السيارات الكبرى', 'ورشات خاصة', 'فحص السيارات المتنقل'],
    averageIncome: 'بداية بـ 40,000 دج، وأكثر من 150,000 دج للورش الخاصة المزدحمة.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'agriculture',
    nameAR: 'الزراعة المحمية والمشاتل',
    nameFR: 'Agriculture Sous Serre et Pépinières',
    category: 'الفلاحة والزراعة',
    shortDescription: 'إنتاج النباتات والمحاصيل بتقنيات عصرية.',
    fullDescription: 'مهنة الشغوفين بالأرض والطبيعة. تعتمد الزراعة اليوم على تقنيات السقي الذكي، والبيوت البلاستيكية للحصول على مردود على مدار العام.',
    tools: ['أنظمة سقي متطورة', 'معدات حرث خفيفة', 'مقص شجر', 'أسمدة ومغذيات'],
    skills: ['الصبر ومراقبة النمو', 'المعرفة البيولوجية الأساسية', 'العمل البدني في الهواء الطلق'],
    duration: 'تكوينات قصيرة (3-6 أشهر) أو دبلوم 12 شهراً',
    careerOpportunities: ['مشروع زراعي خاص', 'مستثمرات فلاحية كبرى', 'مشاتل نباتات الزينة'],
    averageIncome: 'مرتبط بحصاد الموسم، لكنه قطاع مدعوم جداً في الجزائر وذو مردودية واعدة.',
    image: 'https://images.unsplash.com/photo-1592424001807-6bb932efbaac?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'data_entry',
    nameAR: 'عون إدراج المعلومات',
    nameFR: 'Data Entry Specialist',
    nameEN: 'Data Entry Specialist',
    category: 'خدماتية رقمية',
    categoryEN: 'Digital Services',
    shortDescription: 'إدخال البيانات وتنظيمها والتأكد من دقتها في أنظمة معلوماتية مختلفة.',
    shortDescriptionEN: 'Inputting, organizing, and verifying the accuracy of information across digital systems.',
    fullDescription: 'في عصر الرقمنة المتسارع الذي تعيشه الجزائر، تبرز حرفة عون إدراج المعلومات كبوابة ذهبية للشباب نحو عالم المهن الرقمية. عون الإدراج هو الشخص الذي يتولى إدخال البيانات وتنظيمها والتأكد من دقتها في أنظمة معلوماتية مختلفة. يعمل في بيئة مريحة داخل مكاتب الإدارات العمومية، الشركات الخاصة، العيادات، أو حتى من بيته كمستقل عبر الإنترنت. يومه يمضي بين لوحة المفاتيح والشاشة، منتبهاً لكل حرف ورقم، محولاً الأكوام الورقية إلى قواعد بيانات رقمية منظمة تسهل عمل المؤسسات. إنها حرفة تتطلب الدقة والصبر وحساً تنظيمياً عالياً، وتناسب الأشخاص الذين يحبون العمل الذهني الهادئ. مع تكوين بسيط وإرادة قوية، يمكنك أن تصبح عون إدراج محترفاً وتفتح لنفسك أبواب عمل واسعة في السوقين المحلي والعالمي.',
    fullDescriptionEN: 'In Algeria\'s fast-paced digital transformation era, the Data Entry Specialist profession emerges as a golden gateway for youth into the world of digital careers. A data entry agent is responsible for inputting, organizing, and verifying the accuracy of information across various digital systems. They work in comfortable environments—public administrations, private companies, clinics—or even from home as freelancers online. Their day flows between keyboard and screen, meticulously attending to every letter and number, transforming paper stacks into structured digital databases that empower organizations. This craft demands precision, patience, and strong organizational skills, suiting those who prefer calm, focused mental work. With straightforward training and determination, you can become a professional Data Entry Specialist, unlocking vast job opportunities in both local and global markets.',
    tools: ['حاسوب مكتبي أو محمول', 'لوحة مفاتيح مريحة', 'فأرة', 'اتصال بالإنترنت', 'طابعة – ماسح ضوئي'],
    toolsEN: ['Desktop or Laptop Computer', 'Ergonomic Keyboard', 'Mouse', 'Internet Connection', 'Printer - Scanner'],
    skills: ['سرعة الكتابة 30 كلمة/دقيقة كحد أدنى', 'الدقة (أقل من 2% خطأ)', 'الصبر والتركيز لساعات', 'حس تنظيمي وتصنيف'],
    skillsEN: ['Typing speed 30 WPM minimum', 'Accuracy (less than 2% error rate)', 'Sustained focus over hours', 'Systematic classification & formatting'],
    duration: 'من 6 إلى 12 شهراً',
    durationEN: '6 to 12 months',
    careerOpportunities: ['الإدارات العمومية', 'القطاع الصحي والقانوني', 'البنوك والشركات', 'العمل الحر'],
    careerOpportunitiesEN: ['Public Administrations', 'Health and Legal Sectors', 'Banks and Companies', 'Freelancing (Upwork, Fiverr)'],
    averageIncome: 'من 25,000 دج إلى 50,000+ دج للمحترفين، وقد يصل حتى 100,000+ دج في العمل الحر وعن بعد.',
    averageIncomeEN: 'Starting at 25,000 DZD up to 50,000+ DZD. Freelancers can earn 100,000+ DZD remote.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80'
  }
];
