import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { crafts } from '../data/crafts';
import { ArrowRight, ArrowLeft, Clock, Banknote, Briefcase, MapPin, Wrench, PlayCircle, Star, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function CraftSingle() {
  const { id } = useParams<{ id: string }>();
  const craft = crafts.find(c => c.id === id);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  if (!craft) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--color-bg-sand)]">
        <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--color-dark)]">{isRTL ? 'الحرفة غير موجودة' : 'Craft not found'}</h2>
        <Link to="/crafts" className="text-[var(--color-primary)] font-bold hover:underline">{isRTL ? 'العودة لدليل الحرف' : 'Back to Crafts Directory'}</Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] bg-[var(--color-dark)] overflow-hidden">
        <img 
          src={craft.image} 
          alt={craft.nameAR} 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] to-transparent" />
        
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/crafts" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors font-bold z-10 relative">
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              <span>{t('crafts.back_to_dir')}</span>
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
               <span className="bg-[var(--color-primary)] text-[var(--color-bg-sand)] px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
                 {(!isRTL && craft.categoryEN) ? craft.categoryEN : craft.category}
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 leading-tight">
              {(!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR}
            </h1>
            <p className="text-xl text-gray-300 font-sans" dir="ltr">{craft.nameFR}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-[var(--color-card)] rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
              {t('crafts.about_craft')}
            </h2>
            <p className="text-[var(--color-secondary)] text-lg leading-loose">
              {(!isRTL && craft.fullDescriptionEN) ? craft.fullDescriptionEN : craft.fullDescription}
            </p>
          </section>

          <section className="bg-[var(--color-card)] rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--color-border)]">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">
              <Wrench className="w-6 h-6 text-[var(--color-primary)]" />
              {t('crafts.skills')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[var(--color-dark)] mb-4 bg-[var(--color-bg-sand)] p-3 rounded-lg inline-block border border-[var(--color-border)]">{isRTL ? 'الأدوات الأساسية:' : 'Basic Tools:'}</h3>
                <ul className="space-y-3">
                  {((!isRTL && craft.toolsEN) ? craft.toolsEN : craft.tools).map((tool, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--color-secondary)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-50" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-dark)] mb-4 bg-[var(--color-bg-sand)] p-3 rounded-lg inline-block border border-[var(--color-border)]">{isRTL ? 'المهارات المطلوبة:' : 'Required Skills:'}</h3>
                <ul className="space-y-3">
                  {((!isRTL && craft.skillsEN) ? craft.skillsEN : craft.skills).map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-[var(--color-secondary)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-[var(--color-card)] rounded-3xl p-8 md:p-10 shadow-sm border border-[var(--color-border)] pb-12">
             {/* Fake video placeholder */}
             <div className="aspect-video bg-[var(--color-dark)] rounded-2xl overflow-hidden relative group cursor-pointer border-4 border-[var(--color-bg-sand)] shadow-lg">
                <img src={craft.image} className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" alt="Video demo" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-[var(--color-primary)]/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors shadow-[0_0_30px_rgba(198,123,75,0.4)]">
                     <PlayCircle className="w-10 h-10 text-[var(--color-bg-sand)] translate-x-0.5" />
                   </div>
                </div>
                <div className="absolute bottom-4 right-4 text-[var(--color-bg-sand)] font-bold bg-black/60 px-3 py-1 rounded-md text-sm">
                   {isRTL ? 'مقدمة عن المهنة' : 'Introduction video'} (2:30)
                </div>
             </div>
          </section>
        </div>

        {/* Sidebar Info Card */}
        <div className="lg:col-span-1">
          <div className="bg-[var(--color-card)] rounded-3xl p-8 shadow-sm border border-[var(--color-border)] sticky top-24">
            <h3 className="font-heading font-bold text-xl mb-6 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">{isRTL ? 'بطاقة المعلومات المرجعية' : 'Reference Info Card'}</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-sand)] flex items-center justify-center flex-shrink-0 text-blue-500 border border-[var(--color-border)]">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-[var(--color-dark)] mb-1">{t('crafts.duration')}</h4>
                   <p className="text-[var(--color-secondary)] text-sm">{(!isRTL && craft.durationEN) ? craft.durationEN : craft.duration}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-sand)] flex items-center justify-center flex-shrink-0 text-green-500 border border-[var(--color-border)]">
                   <Banknote className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-[var(--color-dark)] mb-1">{t('crafts.income')}</h4>
                   <p className="text-[var(--color-secondary)] text-sm leading-relaxed">{(!isRTL && craft.averageIncomeEN) ? craft.averageIncomeEN : craft.averageIncome}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-sand)] flex items-center justify-center flex-shrink-0 text-orange-500 border border-[var(--color-border)]">
                   <Briefcase className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-[var(--color-dark)] mb-2">{t('crafts.career')}</h4>
                   <div className="flex flex-wrap gap-2">
                     {((!isRTL && craft.careerOpportunitiesEN) ? craft.careerOpportunitiesEN : craft.careerOpportunities).map((op, i) => (
                       <span key={i} className="bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)] px-2 py-1 flex items-center justify-center text-xs rounded-md">
                         {op}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col gap-4">
               <Link to={`/learn/${craft.id}`} className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-bg-sand)] py-4 rounded-xl transition-all shadow-md flex flex-col items-center justify-center gap-1 group">
                 <div className="flex items-center gap-2 font-bold text-lg">
                   <BookOpen className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                   {t('crafts.start_learning')} {(!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR}
                 </div>
                 <span className="text-sm font-normal text-[var(--color-bg-sand)]/80 text-center">{t('crafts.interactive_lessons')}</span>
               </Link>
               
               <button className="w-full bg-[var(--color-bg-sand)] hover:bg-[var(--color-border)] text-[var(--color-dark)] py-4 rounded-xl font-bold transition-all border border-[var(--color-border)] flex items-center justify-center gap-2">
                 <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                 {t('crafts.search_centers')}
               </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
