import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Hammer, ArrowLeft, ArrowRight } from 'lucide-react';
import { crafts } from '../data/crafts';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function CraftsDir() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const categories = Array.from(new Set(crafts.map(c => (!isRTL && c.categoryEN) ? c.categoryEN : c.category)));

  const filteredCrafts = crafts.filter(c => {
    const nameToSearch = (!isRTL && c.nameEN) ? c.nameEN : c.nameAR;
    const matchSearch = nameToSearch.toLowerCase().includes(searchTerm.toLowerCase()) || c.nameFR.toLowerCase().includes(searchTerm.toLowerCase());
    const catToMatch = (!isRTL && c.categoryEN) ? c.categoryEN : c.category;
    const matchCat = selectedCategory ? catToMatch === selectedCategory : true;
    return matchSearch && matchCat;
  });

  return (
    <div className="bg-[var(--color-bg-sand)] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[var(--color-dark)] text-white pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-[var(--color-bg-sand)]">{t('crafts.directory_title')}</h1>
            <p className="text-[var(--color-secondary)]/80 text-lg leading-relaxed max-w-lg">
              {t('crafts.directory_subtitle')}
            </p>
          </div>
          
          <div className="w-full md:w-1/2 relative max-w-md">
             <div className={`absolute inset-y-0 ${isRTL ? 'left-4' : 'right-4'} flex items-center pointer-events-none`}>
                <Search className="text-[var(--color-secondary)] w-5 h-5" />
             </div>
             <input 
               type="text" 
               placeholder={isRTL ? "ابحث عن حرفة (نجارة، ميكانيك...)" : "Search crafts (carpentry, mechanics...)"} 
               value={searchTerm}
               onChange={e => setSearchTerm(e.target.value)}
               className={`w-full bg-[var(--color-bg-sand)]/10 border border-[var(--color-bg-sand)]/20 text-[var(--color-bg-sand)] rounded-xl py-4 ${isRTL ? 'pl-12 pr-4' : 'pr-12 pl-4'} outline-none focus:bg-[var(--color-bg-sand)]/20 focus:border-[var(--color-bg-sand)] transition-all font-medium placeholder-[var(--color-secondary)]`}
             />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <div className="bg-[var(--color-card)] rounded-2xl p-6 shadow-sm border border-[var(--color-border)] sticky top-24">
            <div className="flex items-center gap-2 mb-6 text-[var(--color-dark)]">
               <Filter className="w-5 h-5 text-[var(--color-primary)]" />
               <h3 className="font-heading font-bold text-xl">{isRTL ? 'تصفية حسب القطاع' : 'Filter by category'}</h3>
            </div>
            
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-2.5 rounded-lg transition-colors font-medium border border-transparent ${selectedCategory === null ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20' : 'text-[var(--color-secondary)] hover:bg-[var(--color-bg-sand)]'}`}
              >
                {isRTL ? 'الكل' : 'All'}
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-2.5 rounded-lg transition-colors font-medium border border-transparent ${selectedCategory === cat ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20' : 'text-[var(--color-secondary)] hover:bg-[var(--color-bg-sand)]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="w-full md:w-3/4">
          <div className="mb-6 text-[var(--color-secondary)] font-medium">
             {isRTL ? 'عرض' : 'Showing'} {filteredCrafts.length} {isRTL ? 'حرفة' : 'crafts'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredCrafts.map((craft, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                key={craft.id}
                className="bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={craft.image} 
                    alt={craft.nameAR} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-[var(--color-bg-sand)]/90 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-md shadow-sm text-[var(--color-dark)]`}>
                    {craft.duration.includes('18') || craft.duration.includes('24') ? (isRTL ? 'تقني سامي' : 'Senior Tech') : (isRTL ? 'كفاءة مهنية' : 'Pro Eval')}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading mb-1 text-[var(--color-dark)]">{(!isRTL && craft.nameEN) ? craft.nameEN : craft.nameAR}</h3>
                  <div className="text-[var(--color-secondary)] opacity-70 text-xs mb-3 font-sans" dir="ltr">{craft.nameFR}</div>
                  <p className="text-[var(--color-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{(!isRTL && craft.shortDescriptionEN) ? craft.shortDescriptionEN : craft.shortDescription}</p>
                  
                  <Link to={`/craft/${craft.id}`} className="mt-auto flex items-center justify-between w-full text-[var(--color-primary)] font-bold group/btn pt-4 border-t border-[var(--color-border)]">
                    <span>{t('crafts.about_craft')}</span>
                    <span className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center group-hover/btn:bg-[var(--color-primary)] group-hover/btn:text-[var(--color-bg-sand)] transition-colors">
                      {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
            
            {filteredCrafts.length === 0 && (
               <div className="col-span-1 md:col-span-2 text-center py-20 bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] shadow-sm flex flex-col items-center">
                  <div className="w-16 h-16 bg-[var(--color-bg-sand)] rounded-full flex items-center justify-center mb-4">
                     <Search className="w-8 h-8 text-[var(--color-secondary)]" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[var(--color-dark)] mb-2">{isRTL ? 'لم نجد أي حرفة مطابقة' : 'No matching crafts found'}</h3>
                  <p className="text-[var(--color-secondary)]">{isRTL ? 'جرب البحث بكلمات أخرى أو تغيير الفئة لتوسيع النتائج.' : 'Try searching with different keywords or changing the category.'}</p>
               </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
