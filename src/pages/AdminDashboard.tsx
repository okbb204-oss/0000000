import React, { useState } from 'react';
import { Settings, Plus, Sparkles, FileJson, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function AdminDashboard() {
  const [craftName, setCraftName] = useState('');
  const [craftDesc, setCraftDesc] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const schemaJson = `{
  "craft_id": "string",
  "levels": [
    {
      "id": "lvl_1",
      "title": "string",
      "description": "string",
      "lessons": [
        {
          "id": "les_1_1",
          "title": "string",
          "visualType": "animation | illustration",
          "visualDescription": "string (صفي المشهد بدقة للرسام أو أداة التوليد)",
          "summary": ["string (5 نقاط)"],
          "task": {
            "title": "string",
            "description": "string"
          },
          "quiz": [
            {
              "id": "q1",
              "question": "string",
              "options": [
                { "id": "o1", "text": "string", "isCorrect": true/false }
              ],
              "explanation": "string"
            }
          ],
          "xpReward": 20
        }
      ]
    }
  ]
}`;

  const handleGeneratePrompt = () => {
    if (!craftName) return;
    
    // Leaving prompt in Arabic because it generates Arabic content specifically
    const prompt = `ولّد مساراً تعليمياً كاملاً لحرفة "${craftName}" من 4 مراحل، كل مرحلة 2-3 دروس. 
وصف الحرفة: ${craftDesc}

كل درس يحوي: 
- عنوان
- وصفاً لمشهد (visualDescription) متحرك أو ثابت قصير يشرح الخطوة الفنية المحددة. لا أشرطة فيديو، فقط رسوم مسطحة.
- 5 نقاط ملخص (summary).
- تمرين تطبيقي مصغر (task).
- 3 أسئلة اختبار (quiz) مع شرح مبسط للإجابة الصحيحة.

المحتوى بالعربية المبسطة، بنبرة مهنية دافئة وتوجيهية، مناسب للجزائريين البالغين. لا تستخدم أي أسلوب طفولي.
أعد المخرجات بصيغة JSON المطابقة تماماً للهيكل التالي:
` + schemaJson;

    setGeneratedPrompt(prompt);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-sand)] pb-24">
      <div className="bg-[var(--color-dark)] text-white pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg">
               <Settings className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h1 className="text-3xl font-heading font-bold">{isRTL ? 'لوحة تحكم النظام' : 'System Dashboard'}</h1>
          </div>
          <p className="text-gray-300">{isRTL ? 'أدوات إضافة مسارات تعليمية جديدة وتوليد المحتوى بذكاء.' : 'Tools to add new learning paths and dynamically generate content.'}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Form */}
            <div className="bg-[var(--color-card)] p-8 rounded-3xl shadow-sm border border-[var(--color-border)]">
               <h2 className="text-xl font-bold font-heading mb-6 flex items-center gap-2 text-[var(--color-dark)]">
                 <Plus className="w-5 h-5 text-[var(--color-primary)]" />
                 {isRTL ? 'إضافة مسار تعليمي جديد (توليد الذكاء الاصطناعي)' : 'Add New Learning Path (AI Generation)'}
               </h2>

               <div className="space-y-5">
                 <div>
                   <label className="block text-sm font-bold text-[var(--color-secondary)] mb-2">{isRTL ? 'اسم الحرفة' : 'Craft Name'}</label>
                   <input 
                     type="text" 
                     value={craftName}
                     onChange={e => setCraftName(e.target.value)}
                     placeholder={isRTL ? 'مثال: الخزف الفني، ميكانيك السيارات...' : 'E.g., Artisan Pottery, Auto Mechanics...'}
                     className={`w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors bg-[var(--color-bg-sand)] text-[var(--color-dark)] ${isRTL ? 'text-right' : 'text-left'}`}
                   />
                 </div>
                 
                 <div>
                   <label className="block text-sm font-bold text-[var(--color-secondary)] mb-2">{isRTL ? 'وصف مختصر' : 'Brief Description'}</label>
                   <textarea 
                     value={craftDesc}
                     onChange={e => setCraftDesc(e.target.value)}
                     placeholder={isRTL ? 'اشرح طبيعة الحرفة والمهارات الأساسية...' : 'Explain the craft specifics and basic skills...'}
                     rows={3}
                     className={`w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors bg-[var(--color-bg-sand)] text-[var(--color-dark)] ${isRTL ? 'text-right' : 'text-left'}`}
                   />
                 </div>

                 <button 
                    onClick={handleGeneratePrompt}
                    className="w-full bg-[var(--color-dark)] text-[var(--color-bg-sand)] font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors"
                 >
                    <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
                    {isRTL ? 'إنشاء طلب التوليد (Prompt)' : 'Generate Prompt'}
                 </button>
               </div>
            </div>

            {/* Prompt output */}
            <div className="bg-[#1A1816] rounded-3xl p-8 text-white flex flex-col relative overflow-hidden ring-1 ring-white/10 shadow-xl">
               <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} p-4 opacity-10 pointer-events-none`}>
                 <FileJson className="w-32 h-32" />
               </div>
               
               <h2 className="text-xl font-bold font-heading mb-4 text-[#c67b4b] relative z-10">{isRTL ? 'النص الجاهز لأداة التوليد' : 'Generated Prompt for AI Input'}</h2>
               <p className="text-sm text-gray-400 mb-6 relative z-10">{isRTL ? 'انسخ هذا النص وضعه في النموذج اللغوي المفضل لديك للحصول على المسار المهيكل بصيغة JSON.' : 'Copy this text and paste it into your favorite LLM to get the structured learning path in JSON.'}</p>
               
               <div className="flex-grow bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-sm text-gray-300 whitespace-pre-wrap overflow-y-auto relative z-10 select-all custom-scrollbar" dir="ltr" style={{ textAlign: 'left' }}>
                  {generatedPrompt ? generatedPrompt : '// ' + (isRTL ? 'أدخل اسم الحرفة واضغط توليد لرؤية الـ Prompt هنا' : 'Enter a craft name and click generate to see the prompt here')}
               </div>

               {generatedPrompt && (
                 <button 
                   onClick={() => navigator.clipboard.writeText(generatedPrompt)}
                   className="mt-4 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors relative z-10"
                 >
                   <CheckCircle2 className="w-5 h-5" />
                   {isRTL ? 'نسخ للمنصة الخارجية' : 'Copy to Clipboard'}
                 </button>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
