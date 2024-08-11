export default function Feedback({ good, bad, neutral }) {
  const totalFeedback = bad + good + neutral;
  const positivePercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {totalFeedback}</div>
      <div>Positive: {positivePercentage}%</div>
    </div>
  );
}
