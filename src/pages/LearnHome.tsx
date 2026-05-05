import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Clock, Hammer, ArrowLeft } from 'lucide-react';
import { coursesData } from '../data/courses';
import { crafts } from '../data/crafts';
import { motion } from 'motion/react';

export default function LearnHome() {
  const availableCourses = Object.values(coursesData);

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[var(--color-dark)] text-white pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
               <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h1 className="text-4xl font-heading font-bold">مساحة التعلّم</h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            رحلتك المهنية تبدأ هنا. تعلم المبادئ الأساسية، شاهد تطبيقات حقيقية، وطبّق بنفسك لتستعد لبدء تكوينك المهني بقوة.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Progress Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[var(--color-bg-sand)] rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
              <Trophy className="w-10 h-10 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-2xl font-bold font-heading mb-1 text-[var(--color-dark)]">ملف التقدّم</h2>
            <p className="text-gray-500 text-sm mb-8">أنت تبني خبرتك. هذه رحلتك المهنية.</p>

            <div className="w-full bg-[var(--color-bg-sand)] rounded-2xl p-6 flex justify-around mb-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold font-heading text-[var(--color-primary)]">0</span>
                <span className="text-gray-500 text-sm mt-1">نقاط الخبرة (XP)</span>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold font-heading text-green-600">0</span>
                <span className="text-gray-500 text-sm mt-1">دروس مكتملة</span>
              </div>
            </div>

            <div className="w-full text-right">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                 <Trophy className="w-4 h-4 text-gray-400" />
                 شارات الإنجاز
              </h3>
              <div className="flex justify-center gap-4 text-gray-300">
                 <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center filter grayscale opacity-50" title="المبتدئ الواثق">
                    <Hammer className="w-6 h-6" />
                 </div>
                 <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center filter grayscale opacity-50" title="الحرفي الصبور">
                    <Clock className="w-6 h-6" />
                 </div>
                 <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center filter grayscale opacity-50" title="صانع المستقبل">
                    <BookOpen className="w-6 h-6" />
                 </div>
              </div>
              <p className="text-xs text-center text-gray-400 mt-3">أكمل مساراتك لفتح الشارات المهنية</p>
            </div>
          </div>
        </div>

        {/* Available Courses */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold font-heading mb-6 border-b border-gray-200 pb-4">المسارات المتوفرة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCourses.map((course, idx) => {
              const craft = crafts.find(c => c.id === course.craftId);
              if (!craft) return null;

              return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={course.craftId}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img src={craft.image} alt={course.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                       <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-sm text-xs font-bold">
                         {craft.category}
                       </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold font-heading mb-2">{course.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6 font-medium">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <Trophy className="w-4 h-4 text-orange-500" />
                        {course.levels.length} مراحل
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        {course.levels.reduce((acc, lvl) => acc + lvl.lessons.length, 0)} دروس
                      </div>
                    </div>

                    <Link to={`/learn/${course.craftId}`} className="block text-center w-full bg-[var(--color-bg-sand)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-dark)] py-3 rounded-xl font-bold transition-colors">
                      استكشف المسار
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
