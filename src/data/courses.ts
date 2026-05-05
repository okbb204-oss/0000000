export interface QuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl?: string;
  videoTitle?: string;
  duration: string;
  summary: string[];
  tools?: { name: string; image: string }[];
  task?: { title: string; description: string };
  quiz?: QuizQuestion[];
  xpReward: number;
}

export interface Level {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  craftId: string;
  title: string;
  description: string;
  levels: Level[];
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
            videoUrl: 'https://images.unsplash.com/photo-1610488251214-7227ab8bfeb9?auto=format&fit=crop&w=800&q=80', // Using image placeholder for video cover
            videoTitle: 'مقدمة في النجارة: ما تحتاج إلى معرفته للبدء',
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
            videoUrl: 'https://images.unsplash.com/photo-1540340061722-f155c5dfc5b2?auto=format&fit=crop&w=800&q=80',
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
            duration: '05:40',
            summary: [
              'اختيار المنشار المناسب للعمل (قص طولي أو عرضي).',
              'وضعية الجسد: قف بثبات واجعل ذراعك كتلة واحدة مع المنشار.',
              'الاستعانة بقطعة خشبية دليلاً لضمان استقامة القطع.'
            ],
            xpReward: 40
          }
        ]
      }
    ]
  }
};
