export default function Feedback({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive: {positivePercentage}%</div>
    </div>
  );
}
