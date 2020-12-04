import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { connect } from "react-redux";
// import { addCount } from "./store/counter/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>age:<span>{counter.age}</span>
      <button onClick={() => dispatch({
            type: "AGE_UP"
          })}>
        age Up
      </button>
      <button onClick={() => dispatch({
            type: "AGE_DOWN"
          })}>ageDown</button>
      </div>
    </div>
  );
}

export default App;
