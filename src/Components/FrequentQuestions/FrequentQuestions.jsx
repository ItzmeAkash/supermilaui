import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
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
    }
    // Add more questions as needed
  ];

  return (
    <div className="FrequentQuestions container">
      <h2 className="text-start">Frequent Questions</h2>
      <div className="row">
        {questions.map((q, index) => (
          <div key={index} className="question-item col-12">
            <h3>{q.question}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentQuestions;
