import React, { useReducer } from "react";

const initialState = {
  count: 0,
  showCountFlag: true,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add": {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case "subtract": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case "reset": {
      return {
        ...state,
        count: 0,
      };
    }

    case "showcount": {
      return {
        ...state,
        showCountFlag: !state.showCountFlag,
      };
    }

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <h1>UseReducerHook</h1>
      {state.showCountFlag ? <h3>coun is {state.count}</h3> : null}

      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={() => dispatch({ type: "add" })}>Increase</button>
        <button onClick={() => dispatch({ type: "subtract" })}>Decrease</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "showcount" })}>
          show count
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
