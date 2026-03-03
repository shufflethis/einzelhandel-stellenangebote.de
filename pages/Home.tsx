// HR-UPDATER: v1.0
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import JobBoard from '../components/JobBoard';
import { ViewState } from '../types';
import { CONTENT_TEXTS, FAQ_ITEMS, MOCK_JOBS } from '../constants';
import { Check, ArrowRight, Star, TrendingUp, Users, ShieldCheck, MapPin, Search, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'JOBS':
        return <JobBoard />;
      
      case 'EMPLOYERS':
        return (
          <div className="bg-white animate-fade-in">
             {/* Hero for Employers */}
             <div className="relative bg-slate-900 py-24 sm:py-32">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Meeting im Einzelhandel"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                  Finden Sie die besten Talente im Handel
                </h1>
                <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
                  {CONTENT_TEXTS.employers.intro}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => window.location.href = 'mailto:vertrieb@einzelhandel-stellenangebote.de'} className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/30">
                    Jetzt Stelle schalten
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold text-lg backdrop-blur-sm transition-all border border-white/20">
                    Preise & Konditionen
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900">Warum Einzelhandel-Stellenangebote.de?</h2>
                  <p className="mt-4 text-slate-600 text-lg">Wir sind der spezialisierte Partner für Ihre Personalbeschaffung.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {CONTENT_TEXTS.employers.benefits.map((benefit, idx) => (
                     <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="bg-primary-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                          <Check className="text-primary-600 w-6 h-6" />
                        </div>
                        <p className="font-medium text-slate-900 leading-relaxed">{benefit}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'CANDIDATES':
        return (
          <div className="bg-white animate-fade-in">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Karriere-Ratgeber</span>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-8 mt-2">Karrierewege im Einzelhandel</h1>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="Mitarbeiterin im Einzelhandel" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Vielfalt entdecken</p>
                  <p className="text-slate-200">Vom Minijob bis zum Management</p>
                </div>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light border-l-4 border-primary-500 pl-6 italic">
                  "{CONTENT_TEXTS.candidates.intro}"
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                     <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3"><Users className="text-blue-600 w-5 h-5"/></div>
                        <h3 className="text-xl font-bold m-0">Arbeitsalltag</h3>
                     </div>
                     <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                       {CONTENT_TEXTS.candidates.dailyLife.split('###')[1].replace('Der Arbeitsalltag im Einzelhandel', '').trim()} 
                     </div>
                  </div>
                   <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl shadow-lg">
                     <div className="flex items-center mb-4">
                        <div className="bg-slate-700 p-2 rounded-lg mr-3"><TrendingUp className="text-primary-400 w-5 h-5"/></div>
                        <h3 className="text-xl font-bold m-0 text-white">Aufstiegschancen</h3>
                     </div>
                     <div className="text-sm leading-relaxed whitespace-pre-line">
                       {CONTENT_TEXTS.candidates.careerPaths.split('###')[1].replace('Karrierechancen und Weiterbildung', '').trim()}
                     </div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-2xl p-8 mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-primary-600"/> Häufige Fragen (FAQ)
                  </h2>
                  <div className="space-y-4">
                    {FAQ_ITEMS.map((faq, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-primary-100">
                        <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                          <span className="text-primary-600 mr-2">?</span> {faq.question}
                        </h3>
                        <p className="text-slate-600 text-sm ml-5">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'KNOWLEDGE':
        return (
          <div className="bg-slate-50 min-h-screen py-16 animate-fade-in">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Blog & News</span>
                <h1 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">{CONTENT_TEXTS.knowledge.title}</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">Aktuelle Einblicke, Gehaltsanalysen und Bewerbungstipps für den deutschen Einzelhandelsmarkt.</p>
              </div>

              <div className="grid gap-8">
                {CONTENT_TEXTS.knowledge.articles.map((article, idx) => (
                  <article key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center mb-6">
                        <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">Ratgeber</span>
                        <span className="mx-2 text-slate-300">•</span>
                        <span className="text-slate-400 text-xs">Lesezeit: 3 Min.</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">{article.title}</h2>
                      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                        {article.content}
                      </div>
                      <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center text-sm text-slate-500">
                          <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
                          <span>Redaktionell geprüft</span>
                        </div>
                        <button className="text-primary-600 font-medium text-sm hover:underline">Artikel lesen →</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        );

      case 'IMPRESSUM':
        return (
          <div className="bg-white min-h-screen">
             <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Impressum & Rechtliches</h1>
              <div className="space-y-8 text-slate-700">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
                  <p className="font-bold text-slate-900">{CONTENT_TEXTS.impressum.name}</p>
                  <p>{CONTENT_TEXTS.impressum.address}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Kontakt</h2>
                    <p className="whitespace-pre-line">{CONTENT_TEXTS.impressum.contact.replace(' | ', '\n')}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Registereintrag</h2>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{CONTENT_TEXTS.impressum.legal.replace(' | ', '\n')}</p>
                  </div>
                </div>

                <div className="prose prose-sm prose-slate max-w-none pt-8 border-t">
                  <h3>Haftungsausschluss (Disclaimer)</h3>
                  <p>
                    <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  </p>
                  <p>
                    <strong>Datenschutz:</strong> Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
                  </p>
                  <p>
                    <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'HOME':
      default:
        return (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Ihr neuer Job im</span>{' '}
                        <span className="block text-primary-600 xl:inline">Einzelhandel</span>
                      </h1>
                      <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        {CONTENT_TEXTS.hero.subline}
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <button
                            onClick={() => setCurrentView('JOBS')}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg transition-colors"
                          >
                            Stellenangebote ansehen
                          </button>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            onClick={() => setCurrentView('EMPLOYERS')}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg transition-colors"
                          >
                            Für Arbeitgeber
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex items-center justify-center lg:justify-start text-sm text-slate-500">
                        <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 mr-2 fill-current" />
                        <span className="font-medium text-slate-700">Top-Bewertungen von Bewerbern</span>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Modern retail supermarket environment"
                />
              </div>
            </div>

            {/* Featured Jobs Teaser */}
            <div className="bg-slate-50 py-16 border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                   <div>
                     <h2 className="text-3xl font-bold text-slate-900">Aktuelle Top-Jobs</h2>
                     <p className="text-slate-500 mt-2">Bewerben Sie sich direkt bei führenden Handelsunternehmen.</p>
                   </div>
                   <button onClick={() => setCurrentView('JOBS')} className="text-primary-600 font-bold flex items-center hover:text-primary-800 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
                     Alle {MOCK_JOBS.length} Stellen ansehen <ArrowRight className="ml-2 w-5 h-5"/>
                   </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MOCK_JOBS.slice(0, 3).map((job) => (
                    <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all cursor-pointer group" onClick={() => setCurrentView('JOBS')}>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-1 rounded border border-primary-100">{job.type}</span>
                        <MapPin className="w-4 h-4 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">{job.title}</h3>
                      <p className="text-slate-500 text-sm mb-4 font-medium">{job.company} • {job.location}</p>
                      <div className="flex items-center text-primary-600 text-sm font-bold mt-auto">
                        Details ansehen <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SEO Content Block (GEO Optimized) */}
            <div className="py-20 bg-white">
               <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Karriere-Chancen im Handel</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                      Warum der Einzelhandel mehr als nur ein Job ist – entdecken Sie Ihre Perspektiven.
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                    <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
                       <div className="bg-primary-100 p-4 rounded-full mb-6">
                         <TrendingUp className="w-8 h-8 text-primary-600" />
                       </div>
                       <h3 className="text-xl font-bold mb-3 text-slate-900">Krisensicher & Relevant</h3>
                       <p className="text-slate-600 leading-relaxed">
                         Der Einzelhandel ist systemrelevant. Lebensmittel, Drogerie und Bedarfsgüter werden immer gebraucht. Sichern Sie sich einen Arbeitsplatz mit Zukunft.
                       </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
                       <div className="bg-primary-100 p-4 rounded-full mb-6">
                         <Users className="w-8 h-8 text-primary-600" />
                       </div>
                       <h3 className="text-xl font-bold mb-3 text-slate-900">Menschen & Kommunikation</h3>
                       <p className="text-slate-600 leading-relaxed">
                         Ideal für kommunikative Persönlichkeiten. Der direkte Kundenkontakt steht im Mittelpunkt – kein Tag ist wie der andere.
                       </p>
                    </div>
                 </div>

                 <div className="prose prose-lg prose-slate mx-auto text-slate-600">
                   <h3 className="text-slate-900 font-bold">Vielfältige Berufsfelder im modernen Handel</h3>
                   <p>
                     Die Zeiten, in denen es im Handel "nur" ums Regale einräumen ging, sind vorbei. Moderne POS-Systeme, E-Commerce-Anbindung (Omnichannel) und komplexe Logistikprozesse erfordern Fachwissen und Flexibilität.
                   </p>
                   <p>
                     Ob als <strong>Handelsfachwirt</strong>, <strong>Verkaufsleiter</strong> oder spezialisierter <strong>Fachberater</strong>: Die Aufstiegsmöglichkeiten sind transparent und leistungsbezogen. Besonders gefragt sind aktuell Mitarbeiter mit Kompetenzen im Bereich digitale Warenwirtschaft und Customer Experience.
                   </p>
                   
                   <h3 className="text-slate-900 font-bold mt-8">Regionale Schwerpunkte</h3>
                   <p>
                     Unsere Jobbörse listet Angebote aus ganz Deutschland. Besonders viele Vakanzen finden Sie aktuell in den Metropolregionen:
                   </p>
                   <ul className="grid grid-cols-2 gap-x-4 text-sm font-medium">
                     <li>Jobs im Einzelhandel Berlin</li>
                     <li>Stellenangebote Hamburg</li>
                     <li>Verkauf Jobs München</li>
                     <li>Einzelhandel Köln / Bonn</li>
                     <li>Filialleitung Frankfurt</li>
                     <li>Aushilfsjobs Stuttgart</li>
                   </ul>
                 </div>
                 
                 <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Bereit für den nächsten Schritt?</h4>
                    <p className="text-blue-800 mb-6">Erstellen Sie noch heute Ihre Bewerbung und finden Sie Ihren Traumjob.</p>
                    <button onClick={() => setCurrentView('JOBS')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md">
                      Jetzt Jobs finden
                    </button>
                 </div>
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

export default Home;