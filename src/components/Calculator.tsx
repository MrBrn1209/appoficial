import React, { useState } from 'react';
import { Calculator as CalcIcon, Droplets, Clock, Weight } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dosage');
  const [dosageForm, setDosageForm] = useState({
    prescribedDose: '',
    availableDose: '',
    availableVolume: '',
    patientWeight: '',
    dosePerKg: ''
  });
  const [dilutionForm, setDilutionForm] = useState({
    medicationAmount: '',
    finalVolume: '',
    infusionRate: '',
    concentration: ''
  });
  const [infusionForm, setInfusionForm] = useState({
    totalVolume: '',
    infusionTime: '',
    dropFactor: '20'
  });

  const calculateDosage = () => {
    const prescribed = parseFloat(dosageForm.prescribedDose);
    const available = parseFloat(dosageForm.availableDose);
    const volume = parseFloat(dosageForm.availableVolume);
    
    if (prescribed && available && volume) {
      return (prescribed / available) * volume;
    }
    return 0;
  };

  const calculateDosageByWeight = () => {
    const weight = parseFloat(dosageForm.patientWeight);
    const dosePerKg = parseFloat(dosageForm.dosePerKg);
    
    if (weight && dosePerKg) {
      return weight * dosePerKg;
    }
    return 0;
  };

  const calculateDilution = () => {
    const medication = parseFloat(dilutionForm.medicationAmount);
    const finalVol = parseFloat(dilutionForm.finalVolume);
    
    if (medication && finalVol) {
      return (medication / finalVol) * 100; // Concentração em %
    }
    return 0;
  };

  const calculateInfusionRate = () => {
    const volume = parseFloat(infusionForm.totalVolume);
    const time = parseFloat(infusionForm.infusionTime);
    const dropFactor = parseFloat(infusionForm.dropFactor);
    
    if (volume && time && dropFactor) {
      return (volume * dropFactor) / (time * 60); // gotas por minuto
    }
    return 0;
  };

  const tabs = [
    { id: 'dosage', label: 'Dosagem', icon: CalcIcon },
    { id: 'dilution', label: 'Diluição', icon: Droplets },
    { id: 'infusion', label: 'Infusão', icon: Clock }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculadora de Medicamentos</h1>
        <p className="text-gray-600">
          Calcule dosagens, diluições e velocidades de infusão com precisão
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-2 border-emerald-500 text-emerald-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Dosage Calculator */}
          {activeTab === 'dosage' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Cálculo de Dosagem
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">Fórmula Básica</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dose Prescrita
                      </label>
                      <input
                        type="number"
                        value={dosageForm.prescribedDose}
                        onChange={(e) => setDosageForm({...dosageForm, prescribedDose: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 500 mg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dose Disponível
                      </label>
                      <input
                        type="number"
                        value={dosageForm.availableDose}
                        onChange={(e) => setDosageForm({...dosageForm, availableDose: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 250 mg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Volume Disponível (ml)
                      </label>
                      <input
                        type="number"
                        value={dosageForm.availableVolume}
                        onChange={(e) => setDosageForm({...dosageForm, availableVolume: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 5 ml"
                      />
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <p className="text-sm text-emerald-700 mb-2">Volume a administrar:</p>
                      <p className="text-2xl font-bold text-emerald-900">
                        {calculateDosage().toFixed(2)} ml
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">Dosagem por Peso</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Peso do Paciente (kg)
                      </label>
                      <input
                        type="number"
                        value={dosageForm.patientWeight}
                        onChange={(e) => setDosageForm({...dosageForm, patientWeight: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 70 kg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dose por kg
                      </label>
                      <input
                        type="number"
                        value={dosageForm.dosePerKg}
                        onChange={(e) => setDosageForm({...dosageForm, dosePerKg: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 10 mg/kg"
                      />
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-700 mb-2">Dose total:</p>
                      <p className="text-2xl font-bold text-blue-900">
                        {calculateDosageByWeight().toFixed(2)} mg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dilution Calculator */}
          {activeTab === 'dilution' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Cálculo de Diluição
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantidade do Medicamento (mg)
                      </label>
                      <input
                        type="number"
                        value={dilutionForm.medicationAmount}
                        onChange={(e) => setDilutionForm({...dilutionForm, medicationAmount: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 1000 mg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Volume Final (ml)
                      </label>
                      <input
                        type="number"
                        value={dilutionForm.finalVolume}
                        onChange={(e) => setDilutionForm({...dilutionForm, finalVolume: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 100 ml"
                      />
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-700 mb-2">Concentração:</p>
                      <p className="text-2xl font-bold text-purple-900">
                        {calculateDilution().toFixed(2)} mg/ml
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-3">Fórmula</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Concentração = Quantidade do medicamento ÷ Volume final
                    </p>
                    <p className="text-xs text-gray-500">
                      Resultado em mg/ml ou mcg/ml dependendo da unidade utilizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Infusion Calculator */}
          {activeTab === 'infusion' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Cálculo de Velocidade de Infusão
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Volume Total (ml)
                      </label>
                      <input
                        type="number"
                        value={infusionForm.totalVolume}
                        onChange={(e) => setInfusionForm({...infusionForm, totalVolume: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 500 ml"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tempo de Infusão (horas)
                      </label>
                      <input
                        type="number"
                        value={infusionForm.infusionTime}
                        onChange={(e) => setInfusionForm({...infusionForm, infusionTime: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ex: 8 horas"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fator de Gotejamento
                      </label>
                      <select
                        value={infusionForm.dropFactor}
                        onChange={(e) => setInfusionForm({...infusionForm, dropFactor: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="10">Macrogotas (10 gts/ml)</option>
                        <option value="20">Microgotas (20 gts/ml)</option>
                        <option value="60">Microgotas (60 gts/ml)</option>
                      </select>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-orange-700 mb-2">Velocidade de infusão:</p>
                      <p className="text-2xl font-bold text-orange-900">
                        {calculateInfusionRate().toFixed(0)} gotas/min
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-3">Fórmula</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Gotas/min = (Volume × Fator) ÷ (Tempo × 60)
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">Lembrete</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Macrogotas: 1 ml = 20 gotas</li>
                        <li>• Microgotas: 1 ml = 60 microgotas</li>
                        <li>• Sempre conferir o equipo utilizado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};