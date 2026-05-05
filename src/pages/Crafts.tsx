import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Hammer, ArrowLeft } from 'lucide-react';
import { crafts } from '../data/crafts';
import { motion } from 'motion/react';

export default function CraftsDir() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(crafts.map(c => c.category)));

  const filteredCrafts = crafts.filter(c => {
    const matchSearch = c.nameAR.includes(searchTerm) || c.nameFR.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory ? c.category === selectedCategory : true;
    return matchSearch && matchCat;
  });

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[var(--color-dark)] text-white pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">دليل الحرف الجزائرية</h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              اكتشف التخصصات المهنية المختلفة، تعرف على متطلباتها، فرصها في السوق، والمراكز التي توفرها.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 relative max-w-md">
             <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <Search className="text-gray-400 w-5 h-5" />
             </div>
             <input 
               type="text" 
               placeholder="ابحث عن حرفة (نجارة، ميكانيك...)" 
               value={searchTerm}
               onChange={e => setSearchTerm(e.target.value)}
               className="w-full bg-white/10 border border-white/20 text-white rounded-xl py-4 pr-12 pl-4 outline-none focus:bg-white/20 focus:border-white transition-all font-medium placeholder-gray-400"
             />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-[var(--color-dark)]">
               <Filter className="w-5 h-5 text-[var(--color-primary)]" />
               <h3 className="font-heading font-bold text-xl">تصفية حسب القطاع</h3>
            </div>
            
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-right px-4 py-2.5 rounded-lg transition-colors font-medium ${selectedCategory === null ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                الكل
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-right px-4 py-2.5 rounded-lg transition-colors font-medium ${selectedCategory === cat ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="w-full md:w-3/4">
          <div className="mb-6 text-gray-500 font-medium">
             عرض {filteredCrafts.length} حرفة
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredCrafts.map((craft, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                key={craft.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-white hover:border-[var(--color-primary)]/30 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={craft.image} 
                    alt={craft.nameAR} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-md shadow-sm">
                    {craft.duration.includes('18') || craft.duration.includes('24') ? 'تقني سامي' : 'كفاءة مهنية'}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading mb-1">{craft.nameAR}</h3>
                  <div className="text-gray-400 text-xs mb-3 font-sans" dir="ltr">{craft.nameFR}</div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{craft.shortDescription}</p>
                  
                  <Link to={`/craft/${craft.id}`} className="mt-auto inline-flex items-center justify-between w-full text-[var(--color-primary)] font-bold group/btn pt-4 border-t border-gray-100">
                    <span>عرض التفاصيل</span>
                    <span className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center group-hover/btn:bg-[var(--color-primary)] group-hover/btn:text-white transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
            
            {filteredCrafts.length === 0 && (
               <div className="col-span-1 md:col-span-2 text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                     <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-gray-700 mb-2">لم نجد أي حرفة مطابقة</h3>
                  <p className="text-gray-500">جرب البحث بكلمات أخرى أو تغيير الفئة لتوسيع النتائج.</p>
               </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
