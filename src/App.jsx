/**
 * App.jsx — Root component for "Phish or Legit?" game
 * Manages the overall game state and screen transitions.
 */

import { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";
import scenarios from "./data/scenarios";
import "./App.css";

// Game screens
const SCREEN = {
  LANDING: "landing",
  GAME: "game",
  END: "end",
};

function App() {
  const [screen, setScreen] = useState(SCREEN.LANDING);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // track each answer for summary

  // Start the game from the landing screen
  const handleStart = () => {
    setScreen(SCREEN.GAME);
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
  };

  // Called when the user submits an answer on the game screen
  const handleAnswer = (selectedAnswer) => {
    const scenario = scenarios[currentIndex];
    const isCorrect = selectedAnswer === scenario.correctAnswer;

    setAnswers((prev) => [
      ...prev,
      { scenarioId: scenario.id, isCorrect, selected: selectedAnswer },
    ]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  // Move to the next question or end screen
  const handleNext = () => {
    if (currentIndex + 1 >= scenarios.length) {
      setScreen(SCREEN.END);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Restart the game
  const handleRestart = () => {
    setScreen(SCREEN.LANDING);
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
  };

  return (
    <div className="app-wrapper">
      {screen === SCREEN.LANDING && <LandingScreen onStart={handleStart} />}

      {screen === SCREEN.GAME && (
        <GameScreen
          scenario={scenarios[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={scenarios.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}

      {screen === SCREEN.END && (
        <EndScreen
          score={score}
          total={scenarios.length}
          answers={answers}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
