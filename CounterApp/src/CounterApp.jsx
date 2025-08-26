import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter-container">
      <h1>CounterApp</h1>
      <h2>{ value }</h2>     
      <h3>{ counter }</h3>   
      <button onClick={handleAdd}>+1</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
