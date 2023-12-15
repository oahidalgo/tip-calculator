import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [pct1, setPct1] = useState(0);
  const [pct2, setPct2] = useState(0);
  const tip = bill * ((pct1 + pct2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setPct1(0);
    setPct2(0);
  }

  return (
    <div className="App">
      <Field title="How much was the bill?">
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />
      </Field>
      <Field title="How did you like the service?">
        <Values pct={pct1} onSelectPct={setPct1} />
      </Field>
      <Field title="How did your friend like the service?">
        <Values pct={pct2} onSelectPct={setPct2} />
      </Field>
      <Output bill={bill} tip={tip} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Field({ title, children }) {
  return (
    <div>
      <label>{title}</label>
      {children}
    </div>
  );
}

function Values({ pct, onSelectPct }) {
  return (
    <select value={pct} onChange={(e) => onSelectPct(Number(e.target.value))}>
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was ok! (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely Amazing! (20%)</option>
    </select>
  );
}

function Output({ bill, tip }) {
  return <h3>{`You pay $${bill + tip} ($${bill} + $${tip} tip)`}</h3>;
}

export default App;
