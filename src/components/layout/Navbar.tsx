import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hammer, User, Menu, X, Compass, Search, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/', icon: <Hammer className="w-4 h-4 ml-2" /> },
    { name: 'اكتشف حِرفتك', path: '/test', icon: <Compass className="w-4 h-4 ml-2" /> },
    { name: 'دليل الحرف', path: '/crafts', icon: <Search className="w-4 h-4 ml-2" /> },
    { name: 'تعلم وإرشاد', path: '/learn', icon: <BookOpen className="w-4 h-4 ml-2" /> },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-[var(--color-bg-sand)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-[var(--color-primary)] text-white p-2 rounded-lg group-hover:bg-[var(--color-primary-hover)] transition-colors">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-3xl text-[var(--color-primary)]">حرفتي</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center text-lg font-medium transition-colors ${isActive ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] py-2' : 'text-gray-600 hover:text-[var(--color-primary)]'}`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
             <Link to="/test" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md flex items-center gap-2">
               ابدأ الاختبار الآن
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[var(--color-primary)] p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 px-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-3 rounded-md text-lg font-medium ${location.pathname === link.path ? 'bg-[var(--color-bg-sand)] text-[var(--color-primary)]' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Link to="/test" onClick={() => setIsOpen(false)} className="bg-[var(--color-primary)] text-white px-4 py-3 rounded-lg font-bold text-center mt-4">
              ابدأ الاختبار الآن
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
