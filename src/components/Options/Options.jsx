export default function Options({
  feedbackHandler,
  resetHandler,
  totalFeedback,
}) {
  function callHandler(e, feedbackType) {
    e.preventDefault();
    feedbackHandler(feedbackType);
  }
  function callResetHandler(e) {
    e.preventDefault();
    resetHandler();
  }

  return (
    <div>
      <button onClick={(e) => callHandler(e, "good")}>Good</button>
      <button onClick={(e) => callHandler(e, "neutral")}>Neutral</button>
      <button onClick={(e) => callHandler(e, "bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={(e) => callResetHandler(e)}>Reset</button>
      )}
    </div>
  );
}
