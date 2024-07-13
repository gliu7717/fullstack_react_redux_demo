import { useSelector,useDispatch } from "react-redux";
import { counterAction } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment())
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement())
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(5))
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
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
