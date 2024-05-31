import { useSelector,useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({type:'increment'})
  };
  const decrementHandler = () => {
    dispatch({type:'decrement'})
  };
  const increaseHandler = () => {
    dispatch({type:'increase', amount: 5})
  };
  const toggleCounterHandler = () => {
    dispatch({type:'toggleCounter'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
