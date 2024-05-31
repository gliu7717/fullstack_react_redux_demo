import { useSelector,useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch({type:'increment'})
  };
  const decrementHandler = () => {
    dispatch({type:'decrement'})
  };
  const increaseHandler = () => {
  };
  const toggleCounterHandler = () => {
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
