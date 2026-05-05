import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { crafts } from '../data/crafts';
import { ArrowRight, Clock, Banknote, Briefcase, MapPin, Wrench, PlayCircle, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function CraftSingle() {
  const { id } = useParams<{ id: string }>();
  const craft = crafts.find(c => c.id === id);

  if (!craft) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold font-heading mb-4">الحرفة غير موجودة</h2>
        <Link to="/crafts" className="text-[var(--color-primary)] font-bold">العودة لدليل الحرف</Link>
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
            <Link to="/crafts" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-5 h-5" />
              <span>العودة للدليل</span>
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
               <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-sm text-sm font-bold shadow-sm">
                 {craft.category}
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 leading-tight">
              {craft.nameAR}
            </h1>
            <p className="text-xl text-gray-300 font-sans" dir="ltr">{craft.nameFR}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
              نظرة عامة
            </h2>
            <p className="text-gray-600 text-lg leading-loose">
              {craft.fullDescription}
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
              <Wrench className="w-6 h-6 text-[var(--color-primary)]" />
              المعدات والمهارات
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-4 bg-gray-50 p-3 rounded-lg inline-block">الأدوات الأساسية:</h3>
                <ul className="space-y-3">
                  {craft.tools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-50" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4 bg-gray-50 p-3 rounded-lg inline-block">المهارات المطلوبة:</h3>
                <ul className="space-y-3">
                  {craft.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-50" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 pb-12">
             {/* Fake video placeholder */}
             <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer border-4 border-white shadow-lg">
                <img src={craft.image} className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" alt="Video demo" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-[var(--color-primary)]/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors shadow-[0_0_30px_rgba(198,123,75,0.4)]">
                     <PlayCircle className="w-10 h-10 text-white translate-x-0.5" />
                   </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white font-bold bg-black/60 px-3 py-1 rounded-md text-sm">
                   مقدمة عن المهنة (2:30)
                </div>
             </div>
          </section>
        </div>

        {/* Sidebar Info Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="font-heading font-bold text-xl mb-6 border-b border-gray-100 pb-4">بطاقة المعلومات المرجعية</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                   <Clock className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-1">مدة التكوين</h4>
                   <p className="text-gray-500 text-sm">{craft.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600">
                   <Banknote className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-1">متوسط الدخل</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{craft.averageIncome}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600">
                   <Briefcase className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-2">فرص العمل</h4>
                   <div className="flex flex-wrap gap-2">
                     {craft.careerOpportunities.map((op, i) => (
                       <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 flex items-center justify-center text-xs rounded-md">
                         {op}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white py-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2">
                 <MapPin className="w-5 h-5" />
                 ابحث عن مراكز التكوين
               </button>
               <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                 ابحث في ولايتك عن المؤسسات المتاحة
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
