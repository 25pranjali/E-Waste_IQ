import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'What is the most common toxic element in old monitors (CRT)?',
      answerOptions: [
        { answerText: 'Iron', isCorrect: false },
        { answerValue: 'Lead', isCorrect: true },
        { answerText: 'Silver', isCorrect: false },
        { answerText: 'Plastic', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country generates the most e-waste per capita?',
      answerOptions: [
        { answerText: 'India', isCorrect: false },
        { answerText: 'USA', isCorrect: false },
        { answerValue: 'Norway', isCorrect: true },
        { answerText: 'China', isCorrect: false },
      ],
    },
    {
      questionText: 'What percentage of global e-waste is formally recycled?',
      answerOptions: [
        { answerText: 'Over 50%', isCorrect: false },
        { answerValue: 'Less than 20%', isCorrect: true },
        { answerText: 'Almost 80%', isCorrect: false },
        { answerText: '0%', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of these is NOT a Green IT principle?',
      answerOptions: [
        { answerText: 'Energy Efficiency', isCorrect: false },
        { answerValue: 'High Data Usage', isCorrect: true },
        { answerText: 'Minimal E-Waste', isCorrect: false },
        { answerText: 'Sustainable Sourcing', isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-page" style={{paddingTop: '100px'}}>
      <div className="container">
        <h1 className="section-title">E-Waste <span className="highlight">IQ Test</span></h1>
        
        <div className="quiz-container glass-card">
          {showScore ? (
            <div className="score-section">
              <h2>You scored {score} out of {questions.length}!</h2>
              <div className="badge-reward">
                {score === questions.length ? (
                  <div className="badge gold">🏆 Eco Warrior</div>
                ) : score >= 2 ? (
                  <div className="badge silver">🥈 Green Citizen</div>
                ) : (
                  <div className="badge bronze">🥉 Tech Learner</div>
                )}
              </div>
              <p>Keep educating yourself for a better planet!</p>
              <button className="btn-primary" onClick={restartQuiz}>Restart Quiz</button>
            </div>
          ) : (
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption, idx) => (
                  <button 
                    key={idx} 
                    className="answer-btn" 
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerValue || answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .section-title { font-size: 2.5rem; margin-bottom: 40px; text-align: center; color: var(--primary-dark); transition: var(--transition); }
        body.dark .section-title { color: var(--primary-light); }
        .highlight { color: var(--primary); }

        .quiz-container { max-width: 600px; margin: 0 auto 100px; padding: 40px; text-align: center; border: 1px solid var(--glass-border); }
        body.dark .quiz-container { border-color: var(--glass-border-dark); }
        
        .score-section h2 { font-size: 2rem; margin-bottom: 20px; color: var(--primary-dark); }
        body.dark .score-section h2 { color: var(--primary-light); }
        .badge-reward { margin: 30px 0; }
        .badge { display: inline-block; padding: 15px 30px; border-radius: 50px; font-weight: 800; font-size: 1.5rem; text-transform: uppercase; }
        .gold { background: #ffd700; color: #333; box-shadow: 0 0 20px rgba(255,215,0,0.5); }
        .silver { background: #c0c0c0; color: #333; }
        .bronze { background: #cd7f32; color: white; }

        .question-count { margin-bottom: 10px; font-size: 0.9rem; opacity: 0.7; }
        .question-text { font-size: 1.5rem; font-weight: 600; margin-bottom: 30px; line-height: 1.4; color: var(--primary-dark); transition: var(--transition); }
        body.dark .question-text { color: var(--primary-light); }
        .answer-section { display: flex; flex-direction: column; gap: 15px; }
        .answer-btn { 
          padding: 15px; background: rgba(255,255,255,0.5); border: 2px solid var(--primary-light); 
          border-radius: 10px; font-weight: 500; font-size: 1.1rem; transition: var(--transition); color: var(--text-light);
        }
        .answer-btn:hover { background: var(--primary); color: white; transform: translateY(-3px); }
        body.dark .answer-btn { background: rgba(255,255,255,0.05); color: var(--text-dark); border-color: var(--primary-dark); }
        body.dark .answer-btn:hover { background: var(--primary); color: white; }
      `}</style>
    </div>
  );
};

export default Quiz;
