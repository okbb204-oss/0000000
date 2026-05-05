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
    nameAR: 'خيّاط / خيّاطة (الخياطة العصرية والتقليدية)',
    nameFR: 'Couture et Confection',
    nameEN: 'Seamstress / Tailor (Modern & Traditional Sewing)',
    category: 'حرف يدوية / فنية',
    categoryEN: 'Artisanal & Creative Crafts',
    shortDescription: 'فن تحويل القماش إلى إبداع، وتصميم الأزياء التقليدية والعصرية.',
    shortDescriptionEN: 'The art of transforming fabric into creation, designing traditional and modern attire.',
    fullDescription: 'الخياطة فن تحويل القماش إلى إبداع، وهي من أعرق الحرف وأكثرها طلباً في الجزائر. بين أزقة المدن العتيقة وورشات الأحياء الحديثة، ينسج الخيّاطون والخيّاطات قصصاً من القماش، يصنعون ملابس تعبّر عن الهوية وتواكب الموضة. خيّاط اليوم لم يعد مجرد مُصلح ملابس، بل صانع أناقة، قادر على تصميم الأزياء التقليدية كالقفطان والكراكو، أو العصرية كالفساتين والبدلات، وحتى مفروشات المنزل. تعمل الخياطة في ورشتها الخاصة، في بيتها، أو ضمن مشاغل جماعية، ويمكنها أن تحوّل شغفها إلى مشروع مربح يخدم زبائنها ويحقق استقلالها المالي. تتطلب الحرفة صبراً، دقة، حساً فنياً، وذوقاً رفيعاً. بتكوين مناسب وتدريب متواصل، يمكنك أن تتحول من هاوٍ إلى محترف يوقع باسمه على أجمل التصاميم.',
    fullDescriptionEN: 'Sewing is the art of transforming fabric into creation, and it remains one of the most timeless and in-demand crafts in Algeria. In the alleyways of ancient cities and the workshops of modern neighborhoods, tailors and seamstresses weave stories from cloth, crafting garments that express identity while embracing fashion. Today’s tailor is no longer just a mender, but a style maker, capable of designing traditional attire like the Karakou and Caftan, modern dresses and suits, and even home textiles. A seamstress can work in her own workshop, from home, or within collective ateliers, turning her passion into a profitable venture that serves clients and grants financial independence. The craft demands patience, precision, an artistic eye, and refined taste. With proper training and continuous practice, you can evolve from a beginner into a professional whose signature graces the finest designs.',
    tools: ['ماكينة خياطة كهربائية', 'مقص قماش حاد', 'متر قياس مرن', 'طباشير تعليم القماش', 'دبابيس ودباسة قماش', 'خيوط متنوعة الألوان', 'مكواة بخار', 'طاولة قص كبيرة', 'إبر يدوية متنوعة', 'ورق باترون'],
    toolsEN: ['Electric Sewing Machine', 'Fabric Scissors', 'Flexible Measuring Tape', 'Tailor\'s Chalk', 'Pins & Pin Cushion', 'Assorted Threads', 'Steam Iron', 'Large Cutting Table', 'Assorted Hand Needles', 'Pattern Paper'],
    skills: ['الدقة اليدوية وتحكم بالأصابع', 'أخذ القياسات وحساب الزيادات', 'قراءة وتنفيذ الباترونات', 'تشغيل ماكينة الخياطة', 'حس فني ولوني', 'الصبر والتركيز'],
    skillsEN: ['Fine motor precision', 'Accurate body measurement & ease calculation', 'Pattern reading & drafting', 'Sewing machine operation', 'Color & fabric coordination', 'Patience & focus'],
    duration: '6 إلى 12 شهراً (تأهيلي) أو سنتان (تقني متخصص)',
    durationEN: '6-12 months (Initial) or 2 years (Specialized)',
    careerOpportunities: ['ورشة منزلية أو مشغل خاص', 'المشاغل الجماعية والتعاونيات', 'محلات الأزياء والبدلات', 'مسارح وفنون أزياء العروض', 'البيع المباشر عبر الإنترنت'],
    careerOpportunitiesEN: ['Home or private atelier', 'Cooperatives and craft centers', 'Boutiques and fashion stores', 'Theater and event costume design', 'Online selling (Social Media)'],
    averageIncome: 'بداية بـ 15,000 دج، وتصل إلى 80,000+ دج للمحترفين والمصممين، وقد تتجاوز 100,000 دج في المواسم.',
    averageIncomeEN: 'Starting 15,000 DZD, up to 80,000+ DZD for pros. Can exceed 100,000 DZD in peak seasons.',
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
