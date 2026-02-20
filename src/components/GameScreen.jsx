/**
 * GameScreen.jsx
 * Displays the current scenario message and answer buttons.
 * Shows the FeedbackPanel after the user selects an answer.
 */

import { useState } from "react";
import FeedbackPanel from "./FeedbackPanel";

// Human-readable labels for each answer choice
const ANSWER_OPTIONS = [
  { value: "legit", label: "✅ Legitimate", className: "btn-legit" },
  { value: "suspicious", label: "⚠️ Suspicious", className: "btn-suspicious" },
  { value: "phishing", label: "❌ Phishing", className: "btn-phishing" },
];

function GameScreen({ scenario, questionNumber, totalQuestions, onAnswer, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Handle the user selecting an answer
  const handleSelect = (value) => {
    if (selectedAnswer !== null) return; // prevent re-answering
    setSelectedAnswer(value);
    onAnswer(value);
  };

  // Move to next question and reset local state
  const handleNext = () => {
    setSelectedAnswer(null);
    onNext();
  };

  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === scenario.correctAnswer;

  return (
    <div className="screen game-screen">
      <div className="game-container">
        {/* Progress bar */}
        <div className="progress-bar-wrapper" aria-label={`Question ${questionNumber} of ${totalQuestions}`}>
          <div className="progress-label">
            Question {questionNumber} of {totalQuestions}
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Message card — simulates email or SMS */}
        <div className={`message-card ${scenario.type}`}>
          <div className="message-header">
            <span className="message-type-badge">
              {scenario.type === "email" ? "📧 Email" : "💬 SMS"}
            </span>
            <div className="message-meta">
              <div className="meta-row">
                <span className="meta-label">From:</span>
                <span className="meta-value sender">{scenario.sender}</span>
              </div>
              {scenario.type === "email" && (
                <div className="meta-row">
                  <span className="meta-label">Subject:</span>
                  <span className="meta-value subject">{scenario.subject}</span>
                </div>
              )}
            </div>
          </div>

          <div className="message-body">
            {/* Render message with line breaks */}
            {scenario.message.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        {/* Answer buttons — disabled after selection */}
        {!isAnswered && (
          <div className="answer-section">
            <p className="answer-prompt">What type of message is this?</p>
            <div className="answer-buttons">
              {ANSWER_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  className={`btn ${option.className}`}
                  onClick={() => handleSelect(option.value)}
                  disabled={isAnswered}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Feedback panel shown after answering */}
        {isAnswered && (
          <FeedbackPanel
            isCorrect={isCorrect}
            selectedAnswer={selectedAnswer}
            correctAnswer={scenario.correctAnswer}
            explanation={scenario.explanation}
            redFlags={scenario.redFlags}
            onNext={handleNext}
            isLastQuestion={questionNumber === totalQuestions}
          />
        )}
      </div>
    </div>
  );
}

export default GameScreen;
