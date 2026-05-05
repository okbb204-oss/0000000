import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PlayCircle, Star, Wrench, Target, ArrowLeft, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { coursesData } from '../data/courses';

export default function LessonDetail() {
  const { craftId, lessonId } = useParams<{ craftId: string, lessonId: string }>();
  const navigate = useNavigate();
  
  const course = craftId ? coursesData[craftId] : undefined;
  
  let lessonData;
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

  if (!course || !lessonData) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold font-heading mb-4">الدرس غير موجود</h2>
        <Link to={`/learn/${craftId}`} className="text-[var(--color-primary)] font-bold">العودة للمسار</Link>
      </div>
    );
  }

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    lessonData.quiz?.forEach(q => {
      const correctOpt = q.options.find(o => o.isCorrect);
      if (correctOpt && quizAnswers[q.id] === correctOpt.id) {
        correctCount++;
      }
    });

    // Minimal gamification logic per user constraints (no childish stuff, just XP)
    if (!lessonCompleted) {
      setLessonCompleted(true);
      setXpEarned(lessonData.xpReward);
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

  const nxtId = nextLessonId();

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-32">
      {/* Top Nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to={`/learn/${craftId}`} className="text-gray-500 hover:text-[var(--color-dark)] flex items-center gap-2 font-bold transition-colors">
            <ArrowRight className="w-5 h-5" />
            عودة للدروس
          </Link>
          <div className="hidden md:block font-bold text-[var(--color-dark)] font-heading">
            {course.levels[levelIndex].title}
          </div>
          <div className="text-sm font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-md">
            الدرس {lessonIndex + 1}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        
        {/* Header */}
        <div className="mb-8 relative">
           <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-dark)] leading-tight">{lessonData.title}</h1>
        </div>

        {/* Video Player Area */}
        <div className="bg-gray-950 rounded-2xl md:rounded-3xl overflow-hidden aspect-video relative shadow-lg mb-12 border border-gray-800">
           {/* Placeholder for real video embed */}
           {lessonData.videoUrl && (
             <>
                <img src={lessonData.videoUrl} alt="Video Thumbnail" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                   <div className="w-20 h-20 bg-[var(--color-primary)]/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(198,123,75,0.4)] cursor-pointer hover:scale-105 transition-transform">
                     <PlayCircle className="w-10 h-10 text-white translate-x-0.5" />
                   </div>
                   <p className="text-white mt-6 font-bold text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">{lessonData.videoTitle || "فيديو الدرس"}</p>
                </div>
             </>
           )}
        </div>

        {/* Content Tabs / Sections */}
        <div className="space-y-12">
          
          {/* Summary / Notes */}
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-gray-100 pb-4 text-gray-800">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
              أهم النقاط (الملخص)
            </h2>
            <ul className="space-y-4">
              {lessonData.summary.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-600 leading-relaxed text-lg">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tools if any */}
          {lessonData.tools && lessonData.tools.length > 0 && (
             <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-gray-100 pb-4 text-gray-800">
                <Wrench className="w-6 h-6 text-gray-500" />
                الأدوات المذكورة
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {lessonData.tools.map((tool, idx) => (
                   <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                     <div className="h-32 relative">
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="p-3 text-center font-bold text-gray-700 bg-white">
                        {tool.name}
                     </div>
                   </div>
                 ))}
              </div>
            </section>
          )}

          {/* Practical Task */}
          {lessonData.task && (
            <section className="bg-[var(--color-primary)]/5 rounded-3xl p-8 border border-[var(--color-primary)]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-primary)]"></div>
              <h2 className="text-2xl font-bold font-heading mb-4 flex items-center gap-3 text-[var(--color-dark)]">
                <Target className="w-6 h-6 text-[var(--color-primary)]" />
                جرّب بنفسك (مهمة تطبيقية)
              </h2>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{lessonData.task.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {lessonData.task.description}
              </p>
              
              <button 
                onClick={() => setTaskDone(!taskDone)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold transition-all w-full md:w-auto ${taskDone ? 'bg-green-100 text-green-700 border-2 border-green-200' : 'bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'}`}
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${taskDone ? 'bg-green-600 border-green-600 text-white' : 'border-current'}`}>
                  {taskDone && <CheckCircle2 className="w-4 h-4" />}
                </div>
                {taskDone ? 'أنجزت المهمة العمليّة بنجاح' : 'ضع علامة عند الإنجاز'}
              </button>
            </section>
          )}

          {/* Quick Quiz */}
          {lessonData.quiz && lessonData.quiz.length > 0 && (
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3 border-b border-gray-100 pb-4 text-[var(--color-dark)]">
                <Star className="w-6 h-6 text-[var(--color-accent)]" />
                تأكد من فهمك
              </h2>

              <div className="space-y-8">
                {lessonData.quiz.map((q, qIdx) => {
                  const userAnswer = quizAnswers[q.id];
                  const qSubmitted = quizSubmitted;
                  
                  return (
                    <div key={q.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h3 className="font-bold text-lg text-gray-800 mb-4">{qIdx + 1}. {q.question}</h3>
                      <div className="space-y-3">
                        {q.options.map(opt => {
                          const isSelected = userAnswer === opt.id;
                          let btnClass = isSelected ? 'bg-[var(--color-primary)]/10 border-[var(--color-primary)] text-[var(--color-primary)]' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100';
                          let icon = null;

                          if (qSubmitted) {
                            if (opt.isCorrect) {
                              btnClass = 'bg-green-50 border-green-500 text-green-700';
                              icon = <CheckCircle2 className="w-5 h-5 text-green-600" />;
                            } else if (isSelected && !opt.isCorrect) {
                              btnClass = 'bg-red-50 border-red-300 text-red-700 opacity-70';
                            } else {
                              btnClass = 'bg-white border-gray-200 text-gray-400 opacity-50';
                            }
                          }

                          return (
                            <button
                              key={opt.id}
                              disabled={qSubmitted}
                              onClick={() => setQuizAnswers(prev => ({...prev, [q.id]: opt.id}))}
                              className={`w-full text-right px-6 py-4 rounded-xl border-2 font-medium transition-all flex items-center justify-between ${btnClass}`}
                            >
                              <span>{opt.text}</span>
                              {icon}
                            </button>
                          )
                        })}
                      </div>

                      {qSubmitted && (
                         <motion.div 
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: 'auto' }}
                           className="mt-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-gray-700 text-sm leading-relaxed"
                         >
                           <strong className="text-[var(--color-dark)] block mb-1">توضيح:</strong>
                           {q.explanation}
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
                  className={`mt-8 px-8 py-4 rounded-xl font-bold w-full md:w-auto transition-all ${Object.keys(quizAnswers).length === lessonData.quiz.length ? 'bg-[var(--color-dark)] hover:bg-black text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  تحقق من الإجابات
                </button>
              )}
            </section>
          )}

        </div>

        {/* Completion Toast & Next Lesson */}
        <AnimatePresence>
          {lessonCompleted && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 bg-[var(--color-primary)] text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 text-center md:text-right">
                <div className="bg-white/20 p-3 rounded-full hidden md:block">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-1">أحسنت! أتممت الدرس بنجاح</h3>
                  <p className="text-white/80">مهارة جديدة تضاف لرصيدك المعرفي. مكتسباتك تزداد قوة.</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                 <span className="text-xl font-bold bg-white/20 px-4 py-2 rounded-lg">+{xpEarned} XP</span>
                 {nxtId ? (
                   <Link 
                     to={`/learn/${craftId}/lesson/${nxtId}`} 
                     className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
                   >
                     الدرس التالي <ArrowLeft className="w-5 h-5" />
                   </Link>
                 ) : (
                   <Link 
                     to={`/learn/${craftId}`} 
                     className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
                   >
                     العودة للمسار <ArrowLeft className="w-5 h-5" />
                   </Link>
                 )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
