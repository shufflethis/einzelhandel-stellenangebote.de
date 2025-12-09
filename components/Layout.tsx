import React from 'react';
import { NavItem, ViewState } from '../types';
import { NAVIGATION_ITEMS, CONTENT_TEXTS } from '../constants';
import { Menu, X, ShoppingBag, Linkedin, Facebook, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('HOME')}>
              <div className="bg-primary-600 p-2 rounded-lg mr-3">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                  Einzelhandel
                </span>
                <span className="text-sm font-medium text-primary-600 tracking-wide">
                  STELLENANGEBOTE
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentView === item.view
                      ? 'text-primary-700 border-b-2 border-primary-600'
                      : 'text-slate-500 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('JOBS')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Job finden
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                    currentView === item.view
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary-500 mr-2" />
                  <span className="text-lg font-bold text-white">Einzelhandel-Stellenangebote.de</span>
               </div>
               <p className="text-sm leading-relaxed mb-6">
                 Die Spezial-Jobbörse für den deutschen Einzelhandel. Wir verbinden Top-Arbeitgeber mit motivierten Talenten.
               </p>
               <div className="flex space-x-4">
                 <a href="#" className="hover:text-primary-400 transition-colors"><Linkedin size={20} /></a>
                 <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={20} /></a>
                 <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={20} /></a>
               </div>
            </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Für Bewerber</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavClick('JOBS')} className="hover:text-white transition-colors">Alle Stellenanzeigen</button></li>
                <li><button onClick={() => handleNavClick('CANDIDATES')} className="hover:text-white transition-colors">Karriere-Tipps</button></li>
                <li><button onClick={() => handleNavClick('CANDIDATES')} className="hover:text-white transition-colors">Gehaltsvergleich</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Für Arbeitgeber</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavClick('EMPLOYERS')} className="hover:text-white transition-colors">Stelle schalten</button></li>
                <li><button onClick={() => handleNavClick('EMPLOYERS')} className="hover:text-white transition-colors">Preise & Konditionen</button></li>
                <li><button onClick={() => handleNavClick('EMPLOYERS')} className="hover:text-white transition-colors">Partner werden</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold uppercase tracking-wider mb-4">Rechtliches</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavClick('IMPRESSUM')} className="hover:text-white transition-colors">Impressum</button></li>
                <li><button onClick={() => handleNavClick('IMPRESSUM')} className="hover:text-white transition-colors">Datenschutz</button></li>
                <li><button onClick={() => handleNavClick('IMPRESSUM')} className="hover:text-white transition-colors">AGB</button></li>
                <li><button onClick={() => handleNavClick('IMPRESSUM')} className="hover:text-white transition-colors">Kontakt</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {CONTENT_TEXTS.impressum.name}. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;