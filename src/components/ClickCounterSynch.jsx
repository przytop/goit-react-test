export default function ClickCounterSynch({ value, onUpdate }) {
  return <button onClick={onUpdate}>Current: {value}</button>;
}
