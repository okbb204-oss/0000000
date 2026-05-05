import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Lock, CheckCircle2, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { coursesData } from '../data/courses';
import { crafts } from '../data/crafts';

export default function CourseOverview() {
  const { craftId } = useParams<{ craftId: string }>();
  const course = craftId ? coursesData[craftId] : undefined;
  const craft = crafts.find(c => c.id === craftId);

  if (!course || !craft) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold font-heading mb-4">المسار غير متوفر</h2>
        <Link to="/learn" className="text-[var(--color-primary)] font-bold">العودة لمساحة التعلّم</Link>
      </div>
    );
  }

  // Mocking completed lessons for demo purposes. In real app, load from user state/DB.
  const completedLessonIds = ['les_1_1']; 

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative pt-16 pb-20 overflow-hidden bg-[var(--color-dark)]">
         <img src={craft.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] to-black/30" />
         
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Link to="/learn" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
             <ArrowRight className="w-5 h-5" />
             <span>العودة للوحة التعلّم</span>
           </Link>
           <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">{course.title}</h1>
           <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{course.description}</p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-12">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div>
               <h3 className="font-heading font-bold text-xl mb-2 text-gray-800">رحلتك التعليمية</h3>
               <p className="text-gray-500">أكمل المراحل خطوة بخطوة لفتح الشارة النهائية وتكون جاهزاً للتمهين.</p>
             </div>
             <div className="w-full md:w-1/3">
               <div className="flex justify-between text-sm text-[var(--color-primary)] font-bold mb-2">
                 <span>التقدم العام</span>
                 <span>15%</span>
               </div>
               <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-[var(--color-primary)] w-[15%]" />
               </div>
             </div>
           </div>
        </div>

        <div className="space-y-12">
          {course.levels.map((level, lvlIdx) => {
             // Just a simple mock lock logic: if previous level has unfinished lessons, lock it.
             // For demo, we just unlock level 1 and 2, but level 2 might feel locked visually if needed. Let's unlock all for preview.
             const isLocked = false; 

             return (
               <div key={level.id} className="relative">
                 {/* Connecting line for levels */}
                 {lvlIdx !== course.levels.length - 1 && (
                   <div className="absolute right-8 top-24 bottom-[-3rem] w-1 bg-gray-200 z-0 hidden md:block"></div>
                 )}

                 <div className="flex flex-col md:flex-row gap-6 relative z-10">
                   {/* Level Indicator */}
                   <div className="flex-shrink-0 flex items-start">
                     <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-2xl shadow-sm border-4 border-white ${isLocked ? 'bg-gray-200 text-gray-400' : 'bg-[var(--color-primary)] text-white'}`}>
                       {lvlIdx + 1}
                     </div>
                   </div>

                   {/* Level Content */}
                   <div className="flex-grow">
                     <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                       <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-4">
                         <div>
                           <h2 className="text-2xl font-bold font-heading text-gray-800 mb-2">{level.title}</h2>
                           <p className="text-gray-600 leading-relaxed max-w-2xl">{level.description}</p>
                         </div>
                         {isLocked && <Lock className="w-6 h-6 text-gray-300" />}
                       </div>

                       <div className="space-y-4">
                         {level.lessons.map((lesson, idx) => {
                            const isCompleted = completedLessonIds.includes(lesson.id);
                            return (
                              <Link 
                                key={lesson.id}
                                to={isLocked ? '#' : `/learn/${course.craftId}/lesson/${lesson.id}`}
                                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${isLocked ? 'border-gray-50 bg-gray-50 cursor-not-allowed opacity-60' : 'border-gray-100 hover:border-[var(--color-primary)] bg-white hover:shadow-sm group'}`}
                              >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-[var(--color-bg-sand)] text-gray-400 group-hover:text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/10'}`}>
                                   {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <PlayCircle className="w-6 h-6 ml-0.5" />}
                                </div>
                                <div className="flex-grow">
                                  <h4 className={`font-bold font-heading text-lg ${isCompleted ? 'text-gray-900' : 'text-gray-800'}`}>
                                    الدرس {idx + 1}: {lesson.title}
                                  </h4>
                                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 font-medium">
                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {lesson.duration}</span>
                                    {lesson.task && <span className="flex items-center gap-1.5 text-[var(--color-accent)]"><Hammer className="w-4 h-4" /> تطبيق عملي</span>}
                                  </div>
                                </div>
                                {!isLocked && (
                                   <div className="hidden sm:flex px-4 py-2 bg-gray-50 rounded-lg text-sm font-bold text-gray-500 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                                     {isCompleted ? 'مراجعة' : 'ابدأ الدرس'}
                                   </div>
                                )}
                              </Link>
                            )
                         })}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )
          })}

          <div className="bg-[var(--color-dark)] rounded-3xl p-8 flex flex-col items-center text-center mt-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
             <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
               <Trophy className="w-10 h-10 text-[var(--color-primary)]" />
             </div>
             <h3 className="text-2xl font-bold font-heading text-white mb-2">مشروع التخرج</h3>
             <p className="text-gray-400 max-w-lg mx-auto mb-6">بعد إكمال جميع المراحل، سيتم فتح المشروع النهائي لتقوم بتطبيقه واستلام شارتك الرقمية.</p>
             <button disabled className="bg-white/10 text-white/50 px-8 py-3 rounded-xl font-bold flex items-center gap-2 cursor-not-allowed">
               <Lock className="w-4 h-4" /> مقفل حالياً
             </button>
          </div>

        </div>
      </div>
    </div>
  )
}
