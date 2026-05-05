import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, Hammer, BookOpen, ArrowLeft, CheckCircle2, Search } from 'lucide-react';
import { crafts } from '../data/crafts';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 pt-8 lg:pt-0"
            >
              <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm tracking-wide">
                اكتشف، تعلم، وانطلق 🚀
              </span>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 text-[var(--color-dark)]">
                مهنتك بيدك،<br/>
                <span className="text-[var(--color-primary)]">مستقبلك من صنعك.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                منصة جزائرية ذكية تساعدك لاكتشاف الحرفة التي تناسب ميولاتك وقدراتك، وترشدك لأفضل مراكز التكوين المهني في ولايتك.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/test" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  <Compass className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                  اكتشف الحرفة المناسبة لك
                </Link>
                <Link to="/crafts" className="bg-white hover:bg-gray-50 border-2 border-[var(--color-bg-sand)] text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  تصفح الحرف المتاحة
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl relative z-10 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1621643912166-ef1bf8efcc57?auto=format&fit=crop&w=1200&q=80" 
                  alt="حرفي جزائري يعمل بشغف" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:mb-20 mb-12">
            <h2 className="text-4xl font-heading font-bold text-[var(--color-dark)] mb-4">كيف تعمل المنصة؟</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">خطوات بسيطة تفصلك عن إيجاد مسارك الحرفي المثالي وبدء تكوينك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 border-t-2 border-dashed border-gray-200 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <Compass className="w-12 h-12 text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">1. أجب عن الأسئلة</h3>
              <p className="text-gray-600 leading-relaxed">أجب عن اختبار قصير يحلل ميولاتك، قدراتك البدنية، وطبيعة العمل التي تفضلها.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <Hammer className="w-12 h-12 text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">2. اكتشف حرفتك</h3>
              <p className="text-gray-600 leading-relaxed">يقوم نظامنا الذكي باقتراح أفضل 3 حرف تتطابق تمامًا مع شخصيتك من قاعدة بياناتنا.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                <BookOpen className="w-12 h-12 text-[var(--color-secondary)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">3. ابدأ التكوين</h3>
              <p className="text-gray-600 leading-relaxed">تعرف على مراكز التكوين المهني في ولايتك التي توفر التخصص، أو ابدأ التعلم الأولي هنا.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crafts */}
      <section className="py-24 bg-[var(--color-bg-sand)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between md:mb-16 mb-10 gap-6">
            <div>
              <h2 className="text-4xl font-heading font-bold text-[var(--color-dark)] mb-4">أكثر الحرف طلباً</h2>
              <p className="text-gray-600 text-lg max-w-2xl">تصفح مجموعة من الحرف التي تشهد طلباً متزايداً في سوق العمل الجزائري.</p>
            </div>
            <Link to="/crafts" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-bold flex items-center gap-2 group">
              عرض كل الحرف
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-3 gap-8">
            {crafts.slice(0, 3).map((craft, idx) => (
              <motion.div 
                key={craft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-white hover:border-[var(--color-primary)]/20"
              >
                <div className="h-56 relative overflow-hidden group">
                  <img 
                    src={craft.image} 
                    alt={craft.nameAR} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[var(--color-dark)] shadow-sm">
                    {craft.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-heading mb-2">{craft.nameAR}</h3>
                  <p className="text-gray-500 text-sm mb-4 font-sans dir-ltr text-left h-5 truncate" dir="ltr">{craft.nameFR}</p>
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{craft.shortDescription}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                      دورة: {craft.duration.split(' ')[1]}
                    </div>
                  </div>

                  <Link to={`/craft/${craft.id}`} className="block text-center w-full bg-[var(--color-bg-sand)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-dark)] py-3 rounded-xl font-bold transition-colors">
                    اكتشف التفاصيل
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--color-dark)] rounded-3xl overflow-hidden flex flex-col md:flex-row">
            
            <div className="p-12 md:p-16 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                الحرفة في اليد أمان من الفقر
              </h2>
              <ul className="space-y-4 mb-10 text-gray-300 text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                  <span>تكوين يضمن لك الاستقلالية المالية.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                  <span>فرص حقيقية لإنشاء مشروعك الخاص المدعوم.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0" />
                  <span>شهادة دولة معترف بها في التكوين المهني.</span>
                </li>
              </ul>
              <div>
                 <Link to="/test" className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                    ابدأ التقييم الآن
                 </Link>
              </div>
            </div>

            <div className="md:w-[45%] relative min-h-[300px] md:min-h-full">
               <img 
                 src="https://images.unsplash.com/photo-1542848972-e6e737cbe1eb?auto=format&fit=crop&w=800&q=80" 
                 alt="العمل الحرفي" 
                 className="absolute inset-0 w-full h-full object-cover clip-path-slant"
               />
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}