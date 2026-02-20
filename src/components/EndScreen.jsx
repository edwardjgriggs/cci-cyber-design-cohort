/**
 * EndScreen.jsx
 * Shown when all 10 questions are complete.
 * Displays final score, risk level, educational takeaway, and restart button.
 */

// Risk level thresholds based on score out of 10
function getRiskLevel(score, total) {
  const pct = score / total;
  if (pct >= 0.8) {
    return {
      level: "Low Risk",
      emoji: "🟢",
      className: "risk-low",
      message:
        "Great job! You have a strong ability to identify phishing attempts. Keep staying alert — scams are always evolving.",
    };
  } else if (pct >= 0.5) {
    return {
      level: "Moderate Risk",
      emoji: "🟡",
      className: "risk-moderate",
      message:
        "You caught some scams but missed a few. Review the red flags you encountered — with practice, you'll sharpen your instincts.",
    };
  } else {
    return {
      level: "High Risk",
      emoji: "🔴",
      className: "risk-high",
      message:
        "Many modern scams are designed to fool everyone. The good news: awareness is the first step to protection. Review what you missed and try again!",
    };
  }
}

// Key takeaways shown on the end screen
const TAKEAWAYS = [
  "Never click links in unsolicited emails or texts — go directly to official websites instead.",
  "Urgency and fear are manipulation tactics. Take a breath before you act.",
  "Always check sender domains carefully — one wrong letter can signal a scam.",
  "Legitimate organizations never ask for passwords via email.",
  "When in doubt, call the company directly using a number from their official website.",
];

function EndScreen({ score, total, onRestart }) {
  const risk = getRiskLevel(score, total);
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="screen end-screen">
      <div className="end-container">
        <h1 className="end-title">Game Complete!</h1>

        {/* Score display */}
        <div className="score-display">
          <div className="score-circle">
            <span className="score-number">{score}</span>
            <span className="score-divider">/</span>
            <span className="score-total">{total}</span>
          </div>
          <p className="score-percent">{percentage}% correct</p>
        </div>

        {/* Risk level badge */}
        <div className={`risk-badge ${risk.className}`}>
          <span className="risk-emoji">{risk.emoji}</span>
          <span className="risk-level">{risk.level}</span>
        </div>
        <p className="risk-message">{risk.message}</p>

        {/* Educational takeaways */}
        <div className="takeaways-section">
          <h2 className="takeaways-title">Key Takeaways</h2>
          <ul className="takeaways-list">
            {TAKEAWAYS.map((tip, i) => (
              <li key={i} className="takeaway-item">
                <span className="takeaway-icon">💡</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Restart button */}
        <button className="btn btn-primary btn-large" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default EndScreen;
