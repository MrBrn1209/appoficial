import React, { useState } from 'react';
import { Search, X, BookOpen } from 'lucide-react';
import { technicalTerms } from '../data/technicalTerms';
import { TechnicalTerm } from '../types';

export const TechnicalTerms: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<TechnicalTerm | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(technicalTerms.map(term => term.category)))];

  const filteredTerms = technicalTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Termos Técnicos</h1>
        <p className="text-gray-600">
          Dicionário completo com termos essenciais da enfermagem
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar termos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all">Todas as categorias</option>
            {categories.slice(1).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.map((term) => (
          <div
            key={term.id}
            onClick={() => setSelectedTerm(term)}
            className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {term.term}
              </h3>
              <BookOpen className="h-4 w-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
            </div>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
              {term.definition}
            </p>
            <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
              {term.category}
            </span>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum termo encontrado</h3>
          <p className="text-gray-600">
            Tente ajustar sua pesquisa ou filtro para encontrar termos relevantes.
          </p>
        </div>
      )}

      {/* Modal */}
      {selectedTerm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {selectedTerm.term}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                    {selectedTerm.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedTerm(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedTerm.definition}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};