import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>Vitaj na mojej stránke!</h1>
        <p>Toto je jednoduchá React + TypeScript stránka na skúšku.</p>
        <button onClick={() => setCount(count + 1)}>
          Klikni ma: {count}
        </button>
      </header>
    </div>
  );
}

export default App;
