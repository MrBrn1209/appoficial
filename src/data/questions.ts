import { Question } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    question: 'Qual é a frequência cardíaca normal para um adulto em repouso?',
    options: ['40-60 bpm', '60-100 bpm', '100-120 bpm', '120-140 bpm'],
    correctAnswer: 1,
    explanation: 'A frequência cardíaca normal para adultos em repouso varia entre 60 a 100 batimentos por minuto.',
    category: 'Sinais Vitais',
    difficulty: 'easy'
  },
  {
    id: '2',
    question: 'Qual é o valor normal da pressão arterial para adultos?',
    options: ['90/60 mmHg', '120/80 mmHg', '140/90 mmHg', '160/100 mmHg'],
    correctAnswer: 1,
    explanation: 'A pressão arterial normal para adultos é considerada 120/80 mmHg ou menor.',
    category: 'Sinais Vitais',
    difficulty: 'easy'
  },
  {
    id: '3',
    question: 'Qual é a técnica correta para lavagem das mãos?',
    options: [
      'Apenas água corrente por 10 segundos',
      'Água e sabão por pelo menos 20 segundos',
      'Apenas álcool gel',
      'Água quente por 5 segundos'
    ],
    correctAnswer: 1,
    explanation: 'A lavagem correta das mãos deve ser feita com água e sabão por pelo menos 20 segundos, esfregando todas as superfícies.',
    category: 'Controle de Infecção',
    difficulty: 'easy'
  },
  {
    id: '4',
    question: 'O que significa o termo "assepsia"?',
    options: [
      'Presença de microrganismos',
      'Ausência de microrganismos patogênicos',
      'Limpeza superficial',
      'Uso de antibióticos'
    ],
    correctAnswer: 1,
    explanation: 'Assepsia refere-se ao conjunto de medidas para manter o ambiente livre de microrganismos patogênicos.',
    category: 'Controle de Infecção',
    difficulty: 'medium'
  },
  {
    id: '5',
    question: 'Qual é a via de administração mais rápida para medicamentos em emergência?',
    options: ['Oral', 'Intramuscular', 'Endovenosa', 'Subcutânea'],
    correctAnswer: 2,
    explanation: 'A via endovenosa é a mais rápida pois o medicamento vai diretamente para a corrente sanguínea.',
    category: 'Farmacologia',
    difficulty: 'medium'
  },
  {
    id: '6',
    question: 'Qual é o ângulo correto para aplicação de injeção intramuscular?',
    options: ['15°', '45°', '90°', '180°'],
    correctAnswer: 2,
    explanation: 'A injeção intramuscular deve ser aplicada em ângulo de 90° para garantir que o medicamento atinja o músculo.',
    category: 'Procedimentos',
    difficulty: 'medium'
  },
  {
    id: '7',
    question: 'O que é bradicardia?',
    options: [
      'Frequência cardíaca acima de 100 bpm',
      'Frequência cardíaca abaixo de 60 bpm',
      'Pressão arterial alta',
      'Respiração rápida'
    ],
    correctAnswer: 1,
    explanation: 'Bradicardia é definida como frequência cardíaca abaixo de 60 batimentos por minuto em adultos.',
    category: 'Sinais Vitais',
    difficulty: 'easy'
  },
  {
    id: '8',
    question: 'Qual é a posição adequada para um paciente com dispneia?',
    options: ['Decúbito dorsal', 'Fowler', 'Trendelenburg', 'Sims'],
    correctAnswer: 1,
    explanation: 'A posição de Fowler (semi-sentado) facilita a respiração em pacientes com dispneia.',
    category: 'Posicionamento',
    difficulty: 'medium'
  },
  {
    id: '9',
    question: 'Qual é o tempo máximo recomendado para uso de um torniquete?',
    options: ['30 segundos', '1 minuto', '2 minutos', '5 minutos'],
    correctAnswer: 2,
    explanation: 'O torniquete não deve permanecer por mais de 2 minutos para evitar danos aos tecidos.',
    category: 'Procedimentos',
    difficulty: 'hard'
  },
  {
    id: '10',
    question: 'Qual é a concentração padrão de álcool para antissepsia?',
    options: ['50%', '70%', '90%', '100%'],
    correctAnswer: 1,
    explanation: 'O álcool a 70% é mais eficaz para antissepsia pois permite melhor penetração na parede celular dos microrganismos.',
    category: 'Controle de Infecção',
    difficulty: 'medium'
  },
  {
    id: '11',
    question: 'O que é taquipneia?',
    options: [
      'Respiração lenta',
      'Respiração rápida',
      'Falta de ar',
      'Respiração irregular'
    ],
    correctAnswer: 1,
    explanation: 'Taquipneia é o aumento da frequência respiratória acima dos valores normais.',
    category: 'Respiratório',
    difficulty: 'easy'
  },
  {
    id: '12',
    question: 'Qual é a sequência correta da Ressuscitação Cardiopulmonar (RCP)?',
    options: [
      'A-B-C (Airway-Breathing-Circulation)',
      'C-A-B (Circulation-Airway-Breathing)',
      'B-A-C (Breathing-Airway-Circulation)',
      'A-C-B (Airway-Circulation-Breathing)'
    ],
    correctAnswer: 1,
    explanation: 'A sequência atual da RCP é C-A-B, priorizando as compressões torácicas.',
    category: 'Emergência',
    difficulty: 'hard'
  },
  {
    id: '13',
    question: 'Qual é a profundidade correta das compressões torácicas em adultos?',
    options: ['2-3 cm', '4-5 cm', '5-6 cm', '7-8 cm'],
    correctAnswer: 2,
    explanation: 'As compressões torácicas em adultos devem ter profundidade de 5-6 cm.',
    category: 'Emergência',
    difficulty: 'medium'
  },
  {
    id: '14',
    question: 'O que significa o termo "iatrogenia"?',
    options: [
      'Cura natural',
      'Dano causado por tratamento médico',
      'Prevenção de doenças',
      'Diagnóstico precoce'
    ],
    correctAnswer: 1,
    explanation: 'Iatrogenia refere-se a danos ou complicações causados inadvertidamente por tratamento médico.',
    category: 'Ética e Segurança',
    difficulty: 'hard'
  },
  {
    id: '15',
    question: 'Qual é o local correto para verificação do pulso carotídeo?',
    options: [
      'Lateral do pescoço',
      'Anterior do pescoço',
      'Posterior do pescoço',
      'Base do pescoço'
    ],
    correctAnswer: 0,
    explanation: 'O pulso carotídeo é verificado na lateral do pescoço, entre a traqueia e o músculo esternocleidomastóideo.',
    category: 'Sinais Vitais',
    difficulty: 'easy'
  },
  {
    id: '16',
    question: 'Qual é a temperatura corporal normal em graus Celsius?',
    options: ['35,5°C', '36,5°C', '37,5°C', '38,5°C'],
    correctAnswer: 1,
    explanation: 'A temperatura corporal normal varia entre 36°C e 37°C, sendo 36,5°C considerada ideal.',
    category: 'Sinais Vitais',
    difficulty: 'easy'
  },
  {
    id: '17',
    question: 'O que é hipoxemia?',
    options: [
      'Excesso de oxigênio no sangue',
      'Diminuição de oxigênio no sangue',
      'Aumento de CO2 no sangue',
      'Diminuição de CO2 no sangue'
    ],
    correctAnswer: 1,
    explanation: 'Hipoxemia é a diminuição da concentração de oxigênio no sangue arterial.',
    category: 'Respiratório',
    difficulty: 'medium'
  },
  {
    id: '18',
    question: 'Qual é o volume normal de diurese em 24 horas para um adulto?',
    options: ['500-800 ml', '800-1200 ml', '1200-1800 ml', '1800-2400 ml'],
    correctAnswer: 2,
    explanation: 'O volume normal de diurese em adultos varia entre 1200-1800 ml em 24 horas.',
    category: 'Fisiologia',
    difficulty: 'medium'
  },
  {
    id: '19',
    question: 'O que é oligúria?',
    options: [
      'Ausência de urina',
      'Diminuição do volume urinário',
      'Aumento do volume urinário',
      'Presença de sangue na urina'
    ],
    correctAnswer: 1,
    explanation: 'Oligúria é a diminuição do volume urinário, geralmente abaixo de 400 ml em 24 horas.',
    category: 'Fisiologia',
    difficulty: 'medium'
  },
  {
    id: '20',
    question: 'Qual é a principal função dos rins?',
    options: [
      'Produzir hormônios',
      'Filtrar o sangue e produzir urina',
      'Armazenar nutrientes',
      'Regular a temperatura corporal'
    ],
    correctAnswer: 1,
    explanation: 'A principal função dos rins é filtrar o sangue, removendo resíduos e produzindo urina.',
    category: 'Fisiologia',
    difficulty: 'easy'
  }
];