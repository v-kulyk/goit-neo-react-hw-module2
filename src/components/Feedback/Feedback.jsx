export default function Feedback({ good, bad, neutral }) {
  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {bad + good + neutral}</div>
      <div>Positive: {Math.round((good / (bad + good + neutral)) * 100)}%</div>
    </div>
  );
}
