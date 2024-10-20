"use client";

import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/counter.slice";

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div className={styles.page}>
      <h1 style={{color:"white"}}>{counter}</h1>
      <button onClick ={handleIncrement}>Aumentar</button>
      <button onClick ={handleDecrement}>Disminuir</button>

    </div>
  );
}
