import React, { useState, useMemo } from 'react';
import { MOCK_JOBS } from '../constants';
import { JobType, JobCategory } from '../types';
import { MapPin, Briefcase, Euro, Clock, CheckCircle2, Search } from 'lucide-react';

const JobBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<JobType | 'Alle'>('Alle');
  const [selectedCategory, setSelectedCategory] = useState<JobCategory | 'Alle'>('Alle');

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'Alle' || job.type === selectedType;
      const matchesCategory = selectedCategory === 'Alle' || job.category === selectedCategory;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [searchTerm, selectedType, selectedCategory]);

  return (
    <div className="bg-slate-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-4xl mb-3 sm:mb-4">Aktuelle Stellen im Einzelhandel</h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Finden Sie unter {MOCK_JOBS.length} offenen Positionen Ihren neuen Traumjob. Täglich aktualisiert.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-none">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-100 lg:sticky lg:top-24">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2 text-primary-600" /> Filter
              </h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Suchbegriff</label>
                <input
                  type="text"
                  placeholder="Jobtitel, Firma oder Stadt..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Anstellungsart</label>
                <select 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as JobType | 'Alle')}
                >
                  <option value="Alle">Alle Anstellungsarten</option>
                  <option value="Vollzeit">Vollzeit</option>
                  <option value="Teilzeit">Teilzeit</option>
                  <option value="Minijob">Minijob</option>
                  <option value="Ausbildung">Ausbildung</option>
                  <option value="Führungskraft">Führungskraft</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Kategorie</label>
                <select 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as JobCategory | 'Alle')}
                >
                  <option value="Alle">Alle Kategorien</option>
                  <option value="Verkauf">Verkauf & Beratung</option>
                  <option value="Filialleitung">Filialleitung & Management</option>
                  <option value="Logistik">Lager & Logistik</option>
                  <option value="Kasse">Kasse</option>
                </select>
              </div>

              <button 
                onClick={() => {setSearchTerm(''); setSelectedType('Alle'); setSelectedCategory('Alle');}}
                className="w-full py-2 text-sm text-slate-500 hover:text-primary-600 underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          </div>

          {/* Job List */}
          <div className="lg:col-span-3 space-y-4 order-1 lg:order-none">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow group">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                         <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded font-medium border border-primary-100">
                           {job.type}
                         </span>
                         <span className="text-xs text-slate-400">{job.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-slate-700 font-medium mb-3">{job.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                          {job.location}
                        </div>
                        {job.salary && (
                          <div className="flex items-center">
                            <Euro className="w-4 h-4 mr-1.5 text-slate-400" />
                            {job.salary}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1.5 text-slate-400" />
                          {job.category}
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className="flex items-center text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col items-center justify-center min-w-[140px]">
                      <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors mb-2">
                        Bewerben
                      </button>
                      <button className="w-full text-slate-500 hover:text-slate-900 text-sm font-medium py-1">
                        Merken
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900">Keine Jobs gefunden</h3>
                <p className="text-slate-500">Versuchen Sie, Ihre Filtereinstellungen zu ändern.</p>
              </div>
            )}
            
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
               <h4 className="font-bold text-blue-900 mb-2">Tipp für Ihre Suche:</h4>
               <p className="text-sm text-blue-800">
                 Nutzen Sie spezifische Begriffe wie "Verkäufer Teilzeit" oder "Filialleitung Berlin", um präzisere Ergebnisse zu erhalten. Unsere KI-gestützte Suche lernt stetig dazu, um Ihnen die relevantesten Angebote im Einzelhandel anzuzeigen.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;