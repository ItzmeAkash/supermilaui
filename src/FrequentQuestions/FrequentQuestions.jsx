import React from 'react';
import './FrequentQuestions.css';

const FrequentQuestions = () => {
  const questions = [
    {
      question: "What is Social Emotional Learning?",
    },
    {
      question: "I am feeling anxious. What should I do?",
    },
    {
      question: "What is HIV type 2?",
    },
    // Add more questions as needed
  ];

  return (
    <div className="FrequentQuestions">
      <h2>Frequent Questions</h2>
      {questions.map((q, index) => (
        <div key={index} className="question-item">
          <h3>{q.question}</h3>
        </div>
      ))}
    </div>
  );
};

export default FrequentQuestions;
