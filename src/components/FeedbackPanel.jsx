/**
 * FeedbackPanel.jsx
 * Shown immediately after the user selects an answer.
 * Displays correct/incorrect result, explanation, and red flags.
 */

// Maps answer values to readable labels
const ANSWER_LABELS = {
  legit: "Legitimate ✅",
  suspicious: "Suspicious ⚠️",
  phishing: "Phishing ❌",
};

// Maps correct answers to a short consequence description
const CONSEQUENCES = {
  legit: "This was a safe message. No action needed other than normal use.",
  suspicious:
    "If this were real, clicking links without verifying could expose you to risk. Always go directly to official websites.",
  phishing:
    "If this were real and you clicked the link or provided information, you could have had your credentials stolen, your account compromised, or money taken.",
};

function FeedbackPanel({
  isCorrect,
  selectedAnswer,
  correctAnswer,
  explanation,
  redFlags,
  onNext,
  isLastQuestion,
}) {
  return (
    <div className={`feedback-panel ${isCorrect ? "feedback-correct" : "feedback-incorrect"}`}>
      {/* Correct / Incorrect indicator */}
      <div className="feedback-result">
        <span className="feedback-result-icon">{isCorrect ? "✅" : "❌"}</span>
        <span className="feedback-result-text">
          {isCorrect ? "Correct!" : "Not quite."}
        </span>
      </div>

      {/* Show what they picked vs the right answer */}
      {!isCorrect && (
        <div className="feedback-answer-comparison">
          <span className="answer-tag wrong">
            You chose: {ANSWER_LABELS[selectedAnswer]}
          </span>
          <span className="answer-tag correct">
            Correct answer: {ANSWER_LABELS[correctAnswer]}
          </span>
        </div>
      )}

      {/* Explanation */}
      <div className="feedback-explanation">
        <h3 className="feedback-section-title">Why?</h3>
        <p>{explanation}</p>
      </div>

      {/* Red flags list — only shown for suspicious/phishing */}
      {redFlags && redFlags.length > 0 && (
        <div className="feedback-red-flags">
          <h3 className="feedback-section-title">🚩 Red Flags to Watch For</h3>
          <ul className="red-flags-list">
            {redFlags.map((flag, i) => (
              <li key={i} className="red-flag-item">
                {flag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Consequence note */}
      <div className="feedback-consequence">
        <h3 className="feedback-section-title">What could happen?</h3>
        <p>{CONSEQUENCES[correctAnswer]}</p>
      </div>

      {/* Next button */}
      <button className="btn btn-primary" onClick={onNext}>
        {isLastQuestion ? "See My Results" : "Next Question →"}
      </button>
    </div>
  );
}

export default FeedbackPanel;
