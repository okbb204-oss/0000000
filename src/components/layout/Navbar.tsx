import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hammer, User, Menu, X, Compass, Search, BookOpen, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useThemeSettings } from '../../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode, language, toggleLanguage } = useThemeSettings();

  const navLinks = [
    { name: t('nav.home'), path: '/', icon: <Hammer className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('nav.test'), path: '/test', icon: <Compass className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('nav.crafts'), path: '/crafts', icon: <Search className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
    { name: t('nav.learn'), path: '/learn', icon: <BookOpen className="w-4 h-4 rtl:ml-2 ltr:mr-2" /> },
  ];

  return (
    <nav className="bg-[var(--color-card)] shadow-sm border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/logo.png" 
                alt="Hirfati Logo" 
                className="h-16 w-auto object-contain transition-transform group-hover:scale-110"
                onError={(e) => {
                  // Fallback to text if image is missing
                  e.currentTarget.style.display = 'none';
                  const nextSib = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextSib) nextSib.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col rtl:items-end ltr:items-start group-hover:opacity-80 transition-opacity">
                <span className="font-heading font-bold text-2xl text-[var(--color-primary)] leading-tight">حرفتي</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-secondary)] uppercase leading-none">Hirfati</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center text-lg font-medium transition-colors ${isActive ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] py-2' : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'}`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
             <button 
                onClick={toggleDarkMode} 
                className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors relative"
                title={t(isDarkMode ? 'common.light_mode' : 'common.dark_mode')}
             >
                <div className={`transition-transform duration-500 ${isDarkMode ? 'rotate-[360deg]' : 'rotate-0'}`}>
                  {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </div>
             </button>
             
             <button 
                onClick={toggleLanguage}
                className="text-sm font-bold bg-[var(--color-bg-sand)] text-[var(--color-dark)] border border-[var(--color-border)] px-3 py-1.5 rounded-lg hover:border-[var(--color-primary)] transition-colors"
                title={language === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
             >
               {language === 'ar' ? 'EN' : 'AR'}
             </button>

             <Link to="/test" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-bg-sand)] px-6 py-2.5 rounded-full font-bold transition-all shadow-md flex items-center gap-2">
               {t('hero.start_test')}
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-3">
             <button onClick={toggleDarkMode} className="text-[var(--color-secondary)]">
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
             </button>
             <button onClick={toggleLanguage} className="text-sm font-bold bg-[var(--color-bg-sand)] px-2 py-1 rounded">
               {language === 'ar' ? 'EN' : 'AR'}
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-card)] border-t border-[var(--color-border)] pb-4 px-4 shadow-lg absolute w-full z-50">
          <div className="flex flex-col space-y-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-3 rounded-md text-lg font-medium ${location.pathname === link.path ? 'bg-[var(--color-bg-sand)] text-[var(--color-primary)]' : 'text-[var(--color-secondary)] hover:bg-[var(--color-bg-sand)]'}`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Link to="/test" onClick={() => setIsOpen(false)} className="bg-[var(--color-primary)] text-[var(--color-bg-sand)] px-4 py-3 rounded-lg font-bold text-center mt-4">
              {t('hero.start_test')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
