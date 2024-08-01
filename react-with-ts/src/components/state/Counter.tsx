import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
  // payload가 필요없는 액션이 있어 payload를 optional로 지정하면(payload?)
  // switch에서 aciton.payload가 쓰일 때 undefined일 수 있다고 불평한다
  // 그래서 payload가 아예 없는 타입을 따로 만들어서 Union을 해준다
  // called "Discriminated Unions"
};

type CounterAction = UpdateAction | ResetAction;

const initialState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset": // Don't need a payload
      return initialState;
    default:
      throw new Error("Unplanned action");
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
