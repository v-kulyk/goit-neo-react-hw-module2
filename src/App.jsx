import { useEffect, useState } from "react";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [state, setState] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("feedback-state")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  const totalFeedback = state.good + state.neutral + state.bad;
  const positivePercentage = Math.round((state.good / totalFeedback) * 100);

  //on update
  useEffect(() => {
    if (totalFeedback === 0) {
      localStorage.removeItem("feedback-state");
    } else {
      localStorage.setItem("feedback-state", JSON.stringify(state));
    }
  }, [state]);

  function updateFeedback(feedbackType) {
    setState((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  }
  function resetFeedback() {
    setState({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <>
      <Description />
      <Options
        feedbackHandler={updateFeedback}
        resetHandler={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          good={state.good}
          bad={state.bad}
          neutral={state.neutral}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
