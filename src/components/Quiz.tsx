import React, { useState, useEffect } from 'react';
import { Brain, Clock, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { questions } from '../data/questions';
import { Question, SimulationResult } from '../types';

export const Quiz: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && !showResult && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && quizStarted) {
      finishQuiz();
    }
    return () => clearInterval(timer);
  }, [quizStarted, showResult, timeLeft]);

  const startNewQuiz = () => {
    // Seleciona 20 questões aleatórias
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 20);
    
    setCurrentQuiz(selectedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setQuizStarted(true);
    setTimeLeft(1200);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishQuiz = () => {
    setShowResult(true);
    setQuizStarted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    currentQuiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!quizStarted && !showResult) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Simulados</h1>
          <p className="text-gray-600">
            Teste seus conhecimentos com questões de concursos públicos
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg text-center">
          <div className="mb-6">
            <Brain className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Pronto para o desafio?
            </h2>
            <p className="text-gray-600">
              Cada simulado contém 20 questões selecionadas aleatoriamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <Clock className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
              <p className="font-medium text-emerald-900">20 minutos</p>
              <p className="text-sm text-emerald-700">Tempo limite</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <Brain className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="font-medium text-blue-900">20 questões</p>
              <p className="text-sm text-blue-700">Seleção aleatória</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <Trophy className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="font-medium text-purple-900">Resultado</p>
              <p className="text-sm text-purple-700">Imediato</p>
            </div>
          </div>

          <button
            onClick={startNewQuiz}
            className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 md:px-8 py-4 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-600 transition-all"
          >
            Iniciar Simulado
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / currentQuiz.length) * 100);
    const wrongAnswers = currentQuiz.filter((_, index) => 
      selectedAnswers[index] !== currentQuiz[index].correctAnswer
    );

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              percentage >= 70 ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {percentage >= 70 ? (
                <Trophy className="h-8 w-8 text-green-600" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600" />
              )}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Simulado Concluído!
            </h2>
            <p className="text-gray-600">
              Você acertou {score} de {currentQuiz.length} questões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{score}</p>
              <p className="text-gray-600">Acertos</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{currentQuiz.length - score}</p>
              <p className="text-gray-600">Erros</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className={`text-2xl md:text-3xl font-bold ${percentage >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                {percentage}%
              </p>
              <p className="text-gray-600">Aproveitamento</p>
            </div>
          </div>

          {wrongAnswers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Questões que você errou:
              </h3>
              <div className="space-y-4">
                {wrongAnswers.map((question, index) => {
                  const originalIndex = currentQuiz.findIndex(q => q.id === question.id);
                  return (
                    <div key={question.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        {question.question}
                      </h4>
                      <div className="space-y-2 mb-3">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-2 rounded ${
                              optionIndex === question.correctAnswer
                                ? 'bg-green-100 text-green-800 border border-green-300'
                                : optionIndex === selectedAnswers[originalIndex]
                                ? 'bg-red-100 text-red-800 border border-red-300'
                                : 'bg-white'
                            }`}
                          >
                            {optionIndex === question.correctAnswer && (
                              <CheckCircle className="inline h-4 w-4 mr-2" />
                            )}
                            {optionIndex === selectedAnswers[originalIndex] && optionIndex !== question.correctAnswer && (
                              <XCircle className="inline h-4 w-4 mr-2" />
                            )}
                            {option}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        <strong>Explicação:</strong> {question.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={startNewQuiz}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-600 transition-all inline-flex items-center"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Novo Simulado
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuiz[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Questão {currentQuestionIndex + 1} de {currentQuiz.length}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-emerald-600">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg mb-6">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
              {currentQuestion.category}
            </span>
            <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
              currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
              currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {currentQuestion.difficulty === 'easy' ? 'Fácil' :
               currentQuestion.difficulty === 'medium' ? 'Médio' : 'Difícil'}
            </span>
          </div>
          
          <h2 className="text-xl font-medium text-gray-900 leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestionIndex] === index
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <span className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center text-sm font-medium ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : 'border-gray-300'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={previousQuestion}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Anterior
        </button>
        
        <div className="flex space-x-3">
          <button
            onClick={finishQuiz}
            className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-all"
          >
            Finalizar
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {currentQuestionIndex === currentQuiz.length - 1 ? 'Finalizar' : 'Próxima'}
          </button>
        </div>
      </div>
    </div>
  );
};