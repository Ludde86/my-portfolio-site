import React, { useEffect, useState } from "react";
import "./js4App2.css";

const Js4App2 = () => {
  const [sum, setSum] = useState(0);
  const [momsPercent, setMomsPercent] = useState(0);
  const [moms, setMoms] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setMoms((sum * momsPercent) / 100);
  }, [sum, momsPercent]);

  const onSetTotal = () => {
    console.log("sum: ", sum);

    console.log(typeof sum);
    console.log("momsPercent: ", momsPercent);
    setTotal(moms + sum);
  };

  return (
    <div className="app42-container">
      <div className="app42-container-tip_container">
        <h1>Räkna ut moms</h1>
        <p>Skriv pris utan moms för att räkna ut priset med moms.</p>
        <div className="app42-container-tip_container_form">
          <label>Pris utan moms:</label>
          <input
            type="number"
            placeholder="10000"
            onChange={(e) => setSum(e.target.valueAsNumber)}
          />
        </div>
        <div className="app42-container-tip_container_form">
          <label>Moms %:</label>
          <input
            type="number"
            placeholder="25"
            onChange={(e) => setMomsPercent(e.target.valueAsNumber)}
          />
        </div>
        <button onClick={onSetTotal}>Räkna ut</button>
        <h3>Pris med moms: {total}</h3>
      </div>
    </div>
  );
};

export default Js4App2;
