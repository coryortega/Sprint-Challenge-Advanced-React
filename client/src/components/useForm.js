import React from "react";
import { useInput } from "../hooks/useInput.js";

const CustomForm = () => {
    const [miss, setMiss] = useInput(0);
    const [foul, setFoul] = useInput(0);
    const [hit, setHit] = useInput(0);

    return (
        <div className="container">
            <div className="home">
              <div> Miss: {miss}</div>
              <div> Fouls: {foul}</div>
              <div> Hits: {hit}</div>
            </div>
        <section>
          <div className="buttons">
            <button onClick={() => {setMiss(miss + 1)}}>Miss</button>
            <button onClick={() => {setFoul(foul + 1)}}>Foul</button>
            <button onClick={() => {setHit(hit + 1)}}>Hit</button>
          </div>
        </section>
      </div>
    );
  };

  export default CustomForm;