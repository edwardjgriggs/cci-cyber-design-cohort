/**
 * LandingScreen.jsx
 * The intro screen shown before the game begins.
 */

function LandingScreen({ onStart }) {
  return (
    <div className="screen landing-screen">
      <div className="landing-card">
        {/* Game icon */}
        <div className="landing-icon" aria-hidden="true">🎣</div>

        <h1 className="landing-title">Phish or Legit?</h1>
        <p className="landing-subtitle">
          Can you spot a scam before it's too late?
        </p>

        <p className="landing-description">
          You'll be shown <strong>10 real-world style messages</strong> — emails
          and texts. Your job is to identify whether each one is:
        </p>

        {/* Answer type legend */}
        <ul className="legend-list">
          <li className="legend-item legit">
            <span className="legend-icon">✅</span>
            <span>
              <strong>Legitimate</strong> — Safe to interact with
            </span>
          </li>
          <li className="legend-item suspicious">
            <span className="legend-icon">⚠️</span>
            <span>
              <strong>Suspicious</strong> — Proceed with caution
            </span>
          </li>
          <li className="legend-item phishing">
            <span className="legend-icon">❌</span>
            <span>
              <strong>Phishing</strong> — A scam, do not engage
            </span>
          </li>
        </ul>

        <p className="landing-tip">
          After each answer, you'll learn <em>exactly</em> what to look for.
          No technical knowledge required!
        </p>

        <button className="btn btn-primary btn-large" onClick={onStart}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default LandingScreen;
