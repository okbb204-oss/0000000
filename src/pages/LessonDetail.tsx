import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, PlayCircle, Star, Wrench, Target, Trophy, Menu, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { coursesData, Lesson } from '../data/courses';
import { useTranslation } from 'react-i18next';
import { useProgress } from '../contexts/ProgressContext';

export default function LessonDetail() {
  const { craftId, lessonId } = useParams<{ craftId: string, lessonId: string }>();
  const navigate = useNavigate();
  const { progress, markLessonComplete, addXP } = useProgress();
  
  const course = craftId ? coursesData[craftId] : undefined;
  
  let lessonData: Lesson | undefined;
  let levelIndex = -1;
  let lessonIndex = -1;

  if (course) {
    for (let i = 0; i < course.levels.length; i++) {
      const idx = course.levels[i].lessons.findIndex(l => l.id === lessonId);
      if (idx !== -1) {
        lessonData = course.levels[i].lessons[idx];
        levelIndex = i;
        lessonIndex = idx;
        break;
      }
    }
  }

  const [taskDone, setTaskDone] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  if (!course || !lessonData) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[var(--color-bg-sand)]">
        <h2 className="text-3xl font-bold font-heading mb-4 text-[var(--color-dark)]">{isRTL ? 'الدرس غير موجود' : 'Lesson not found'}</h2>
        <Link to={`/learn/${craftId}`} className="text-[var(--color-primary)] font-bold">{t('learn.back_to_path')}</Link>
      </div>
    );
  }

  // Using the context for completed lessons
  const completedLessonIds = progress.completedLessons; 

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    lessonData?.quiz?.forEach(q => {
      const correctOpt = q.options.find(o => o.isCorrect);
      if (correctOpt && quizAnswers[q.id] === correctOpt.id) {
        correctCount++;
      }
    });

    if (!lessonCompleted) {
      setLessonCompleted(true);
      const reward = lessonData?.xpReward || 0;
      setXpEarned(reward);
      addXP(reward);
      markLessonComplete(lessonId!, course.levels[levelIndex].id, craftId);
    }
  };

  const nextLessonId = () => {
    if (lessonIndex < course.levels[levelIndex].lessons.length - 1) {
      return course.levels[levelIndex].lessons[lessonIndex + 1].id;
    } else if (levelIndex < course.levels.length - 1 && course.levels[levelIndex+1].lessons.length > 0) {
      return course.levels[levelIndex + 1].lessons[0].id;
    }
    return null;
  };

  const prevLessonId = () => {
    if (lessonIndex > 0) {
      return course.levels[levelIndex].lessons[lessonIndex - 1].id;
    } else if (levelIndex > 0) {
      const prevLevelLessons = course.levels[levelIndex - 1].lessons;
      if (prevLevelLessons.length > 0) {
         return prevLevelLessons[prevLevelLessons.length - 1].id;
      }
    }
    return null;
  };

  const nxtId = nextLessonId();
  const prId = prevLessonId();

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-32 flex flex-col">
      {/* Top Nav */}
      <div className="bg-[var(--color-card)] border-b border-[var(--color-border)] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden p-2 hover:bg-[var(--color-bg-sand)] rounded-lg text-[var(--color-secondary)]"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to={`/learn/${craftId}`} className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] flex items-center gap-2 font-bold transition-colors">
              {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
              <span className="hidden sm:inline">{t('learn.back_to_path')}</span>
            </Link>
          </div>
          
          <div className="hidden md:block font-bold text-[var(--color-dark)] font-heading">
            {isRTL ? course.levels[levelIndex].title : (course.levels[levelIndex].titleEN || course.levels[levelIndex].title)}
          </div>
          <div className="text-sm font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-md">
            {t('learn.lesson')} {lessonIndex + 1}
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full flex flex-col lg:flex-row relative">
         
         {/* Sidebar Navigation */}
         <div className={`fixed inset-y-0 ${isRTL ? 'right-0 border-l' : 'left-0 border-r'} z-30 transform lg:transform-none lg:static w-80 bg-[var(--color-card)] border-[var(--color-border)] overflow-y-auto transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : (isRTL ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')}`} style={{ top: '64px', height: 'calc(100vh - 64px)' }}>
           <div className="p-6">
             <h3 className="font-heading font-bold text-lg mb-6 text-[var(--color-dark)]">{t('learn.stages')}</h3>
             <div className="space-y-6">
               {course.levels.map((level, lIdx) => {
                 const isLevelCompleted = level.lessons.every(l => completedLessonIds.includes(l.id));
                 const completedInLevel = level.lessons.filter(l => completedLessonIds.includes(l.id)).length;
                 const progressPercent = Math.round((completedInLevel / level.lessons.length) * 100);

                 return (
                   <div key={level.id}>
                     <div className="mb-3">
                       <h4 className="font-bold text-sm text-[var(--color-dark)] mb-2">{isRTL ? level.title : (level.titleEN || level.title)}</h4>
                       <div className="h-1.5 w-full bg-[var(--color-bg-sand)] rounded-full overflow-hidden border border-[var(--color-border)]">
                         <div className="h-full bg-[var(--color-primary)]" style={{ width: `${progressPercent}%` }} />
                       </div>
                     </div>
                     <div className="space-y-1">
                       {level.lessons.map((lesson, idx) => {
                         const isActive = lesson.id === lessonId;
                         const isCompleted = completedLessonIds.includes(lesson.id);
                         const isLocked = !isCompleted && !isActive && (idx > 0 && !completedLessonIds.includes(level.lessons[idx-1].id)); // simplified locking

                         return (
                           <Link 
                             key={lesson.id}
                             to={isLocked ? '#' : `/learn/${course.craftId}/lesson/${lesson.id}`}
                             className={`flex items-center gap-3 p-3 rounded-xl transition-colors border border-transparent ${isActive ? 'bg-[var(--color-bg-sand)] border-[var(--color-primary)]/20' : (isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[var(--color-bg-sand)]')}`}
                           >
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isCompleted ? 'bg-green-100/50 text-green-500 border border-green-200' : (isActive ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]' : 'bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)]')}`}>
                               {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : (isLocked ? <Lock className="w-3 h-3" /> : <PlayCircle className={`w-4 h-4 ${isRTL ? 'mr-0.5' : 'ml-0.5'}`} />)}
                             </div>
                             <span className={`text-sm font-medium line-clamp-1 ${isActive ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-secondary)]'}`}>
                               {idx + 1}. {isRTL ? lesson.title : lesson.title}
                             </span>
                           </Link>
                         )
                       })}
                     </div>
                   </div>
                 )
               })}
             </div>
           </div>
         </div>

         {/* Overlay for mobile sidebar */}
         {showSidebar && (
           <div 
             className="fixed inset-0 bg-black/20 z-20 lg:hidden"
             style={{ top: '64px' }}
             onClick={() => setShowSidebar(false)}
           />
         )}

         {/* Main Content Area */}
         <div className="flex-grow p-4 sm:p-6 lg:p-10 w-full overflow-x-hidden">
            <div className="max-w-3xl mx-auto">
              
              {/* Header */}
              <div className="mb-8">
                 <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-dark)] leading-tight">
                   {isRTL ? lessonData.title : (lessonData.titleEN || lessonData.title)}
                 </h1>
              </div>

              {/* Visual Scene Area (Animation / Illustration) */}
              <div className="bg-[var(--color-card)] rounded-3xl overflow-hidden aspect-video relative shadow-sm border border-[var(--color-border)] mb-12 flex items-center justify-center">
                 {lessonData.visualType === 'animation' ? (
                   <div className="w-full h-full relative bg-[#F7F3EB] dark:bg-[#1A1816] flex items-center justify-center">
                      {lessonData.visualUrls && lessonData.visualUrls.length > 0 ? (
                        <div className="relative w-full h-full">
                           <img src={lessonData.visualUrls[0]} alt="Animation representation" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                           <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-sand)]/60 to-transparent"></div>
                           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[var(--color-card)]/80 backdrop-blur-sm px-4 py-2 flex items-center gap-3 rounded-full shadow-sm text-sm font-bold text-[var(--color-dark)] border border-[var(--color-border)]">
                              <motion.div 
                                animate={{ scale: [1, 1.2, 1] }} 
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-3 h-3 bg-green-500 rounded-full"
                              />
                              {isRTL ? 'رسم متحرك توضيحي يعمل' : 'Playing animation'}
                           </div>
                        </div>
                      ) : (
                        <div className="text-[var(--color-secondary)] font-bold flex flex-col items-center gap-4">
                           <PlayCircle className="w-16 h-16 opacity-50" />
                           <p>مساحة عرض الرسوم المتحركة الخفيفة (Lottie/SVG)</p>
                        </div>
                      )}
                   </div>
                 ) : (
                   <div className="w-full h-full relative bg-[var(--color-bg-sand)] flex items-center justify-center group cursor-pointer selection-none">
                      {lessonData.visualUrls && lessonData.visualUrls.length > 0 ? (
                        <img src={lessonData.visualUrls[0]} alt="Illustration" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-[var(--color-secondary)] font-bold">مساحة عرض الرسم التوضيحي الثابت</div>
                      )}
                      
                      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-[var(--color-card)]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-[var(--color-dark)] border border-[var(--color-border)]`}>
                        {isRTL ? 'رسم توضيحي' : 'Illustration'}
                      </div>
                   </div>
                 )}
              </div>

              {/* Content Tabs / Sections */}
              <div className="space-y-12">
                
                {/* Summary / Notes */}
                <section className="bg-[var(--color-card)] rounded-3xl p-8 shadow-sm border border-[var(--color-border)]">
                  <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">
                    <Star className="w-6 h-6 text-[var(--color-primary)]" />
                    {t('learn.summary')}
                  </h2>
                  <ul className="space-y-5">
                    {(isRTL ? lessonData.summary : (lessonData.summaryEN || lessonData.summary)).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[var(--color-secondary)] leading-relaxed text-lg">
                        <div className="mt-2 w-2 h-2 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Practical Task */}
                {lessonData.task && (
                  <section className="bg-[var(--color-primary)]/5 rounded-3xl p-8 border border-[var(--color-primary)]/20 relative overflow-hidden">
                    <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-2 h-full bg-[var(--color-primary)]`}></div>
                    <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-3 text-[var(--color-dark)]">
                      <Target className="w-6 h-6 text-[var(--color-primary)]" />
                      {t('learn.try_yourself')}
                    </h2>
                    <h3 className="font-bold text-lg mb-2 text-[var(--color-dark)]">
                      {isRTL ? lessonData.task.title : (lessonData.task.titleEN || lessonData.task.title)}
                    </h3>
                    <p className="text-[var(--color-secondary)] leading-relaxed mb-6">
                      {isRTL ? lessonData.task.description : (lessonData.task.descriptionEN || lessonData.task.description)}
                    </p>
                    
                    <button 
                      onClick={() => setTaskDone(true)}
                      className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold transition-all w-full md:w-auto ${taskDone ? 'bg-green-500/10 text-green-600 border-2 border-green-500/30' : 'bg-[var(--color-card)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg-sand)]'}`}
                    >
                      <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${taskDone ? 'bg-green-600 border-green-600 text-[var(--color-bg-sand)]' : 'border-current'}`}>
                        {taskDone && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      {taskDone ? t('learn.task_done') : t('learn.click_when_done')}
                    </button>
                  </section>
                )}

                {/* Quick Quiz */}
                {lessonData.quiz && lessonData.quiz.length > 0 && taskDone && (
                  <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[var(--color-card)] rounded-3xl p-8 shadow-sm border border-[var(--color-border)]"
                  >
                    <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-[var(--color-border)] pb-4 text-[var(--color-dark)]">
                      <Star className="w-6 h-6 text-[var(--color-accent)]" />
                      {t('learn.quick_quiz')}
                    </h2>

                    <div className="space-y-8">
                      {lessonData.quiz.map((q, qIdx) => {
                        const userAnswer = quizAnswers[q.id];
                        const qSubmitted = quizSubmitted;
                        
                        return (
                          <div key={q.id} className="bg-[var(--color-bg-sand)] rounded-2xl p-6 border border-[var(--color-border)]">
                            <h3 className="font-bold text-lg text-[var(--color-dark)] mb-4">{qIdx + 1}. {isRTL ? q.question : (q.questionEN || q.question)}</h3>
                            <div className="space-y-3">
                              {q.options.map(opt => {
                                const isSelected = userAnswer === opt.id;
                                let btnClass = isSelected ? 'bg-[var(--color-primary)]/10 border-[var(--color-primary)] text-[var(--color-primary)]' : 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-secondary)] hover:border-[var(--color-primary)]';
                                let icon = null;

                                if (qSubmitted) {
                                  if (opt.isCorrect) {
                                    btnClass = 'bg-green-500/10 border-green-500/50 text-green-600';
                                    icon = <CheckCircle2 className="w-5 h-5 text-green-500" />;
                                  } else if (isSelected && !opt.isCorrect) {
                                    btnClass = 'bg-orange-500/10 border-orange-500/50 text-orange-600 opacity-70'; 
                                  } else {
                                    btnClass = 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-secondary)] opacity-50';
                                  }
                                }

                                return (
                                  <button
                                    key={opt.id}
                                    disabled={qSubmitted}
                                    onClick={() => setQuizAnswers(prev => ({...prev, [q.id]: opt.id}))}
                                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-6 py-4 rounded-xl border-2 font-medium transition-all flex items-center justify-between ${btnClass}`}
                                  >
                                    <span>{isRTL ? opt.text : (opt.textEN || opt.text)}</span>
                                    {icon}
                                  </button>
                                )
                              })}
                            </div>

                            {qSubmitted && (
                               <motion.div 
                                 initial={{ opacity: 0, height: 0 }}
                                 animate={{ opacity: 1, height: 'auto' }}
                                 className="mt-4 p-4 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] text-[var(--color-secondary)] text-sm leading-relaxed"
                               >
                                 <strong className="text-[var(--color-dark)] block mb-1">{t('learn.explanation')}</strong>
                                 <span className={userAnswer === q.options.find(o => o.isCorrect)?.id ? 'text-green-600' : 'text-orange-600'}>
                                   {isRTL ? q.explanation : (q.explanationEN || q.explanation)}
                                 </span>
                               </motion.div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {!quizSubmitted && (
                      <button 
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(quizAnswers).length !== lessonData.quiz.length}
                        className={`mt-8 px-8 py-4 rounded-xl font-bold w-full md:w-auto transition-all ${Object.keys(quizAnswers).length === lessonData.quiz.length ? 'bg-[var(--color-dark)] hover:bg-black text-[var(--color-bg-sand)] shadow-md' : 'bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)] cursor-not-allowed'}`}
                      >
                        {t('learn.check_answers')}
                      </button>
                    )}
                  </motion.section>
                )}

              </div>

              {/* Navigation Arrows */}
              <div className="mt-12 flex items-center justify-between border-t border-[var(--color-border)] pt-8">
                 {prId ? (
                   <Link 
                    to={`/learn/${craftId}/lesson/${prId}`} 
                    title={isRTL ? 'العودة للدرس السابق' : 'Back to previous lesson'}
                    className="text-[var(--color-secondary)] hover:text-[var(--color-dark)] font-bold flex items-center gap-2 transition-colors group"
                   >
                     <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-sand)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                       {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                     </div>
                     {t('learn.prev_lesson')}
                   </Link>
                 ) : <div/>}

                 {nxtId ? (
                   <Link 
                     to={lessonCompleted ? `/learn/${craftId}/lesson/${nxtId}` : '#'} 
                     title={!lessonCompleted ? (isRTL ? 'أكمل المتطلبات لفتح هذا الدرس' : 'Complete prerequisites to unlock this lesson') : (isRTL ? 'الانتقال للدرس التالي' : 'Go to next lesson')}
                     onClick={(e) => {
                       if (!lessonCompleted) {
                         e.preventDefault();
                         alert(isRTL ? 'يجب إكمال التمرين والاختبار للانتقال للدرس التالي.' : 'You must complete the task and quiz to proceed to the next lesson.');
                       }
                     }}
                     className={`font-bold flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${lessonCompleted ? 'bg-[var(--color-primary)] text-[var(--color-bg-sand)] hover:bg-[var(--color-primary-hover)] shadow-md' : 'bg-[var(--color-bg-sand)] border border-[var(--color-border)] text-[var(--color-secondary)] cursor-not-allowed opacity-75'}`}
                   >
                     {!lessonCompleted && <Lock className="w-4 h-4" />}
                     {t('learn.next_lesson')} 
                     {lessonCompleted ? (isRTL ? <ArrowLeft className="w-5 h-5 ml-1" /> : <ArrowRight className="w-5 h-5 mr-1" />) : null}
                   </Link>
                 ) : (
                    lessonCompleted ? (
                      <Link to={`/learn/${craftId}`} className="font-bold flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-dark)] text-white hover:bg-black transition-colors shadow-sm animate-pulse">
                        {t('learn.finish_path')} <Trophy className="w-5 h-5" />
                      </Link>
                    ) : <div/>
                 )}
              </div>

              {/* Completion Toast */}
              <AnimatePresence>
                {lessonCompleted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--color-dark)] text-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-4 z-50 border border-gray-800"
                  >
                    <div className="bg-green-500/20 p-2 rounded-full border border-green-500/30">
                      <Trophy className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t('learn.lesson_completed')}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">+{xpEarned} {t('learn.xp_points').split(' ')[0]}</p>
                      <p className="text-[10px] text-green-400 mt-1 italic max-w-[180px]">
                        {craftId === 'sewing' ? t('sewing.lesson_done') : ''}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
         </div>
      </div>
    </div>
  )
}
