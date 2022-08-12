import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const intialState = {
  menu: false,
  title: "",
  rows: [],
  cols: [],
};

function reducer(state = intialState, action) {
  switch (action.type) {
    case "menu":
      return { ...state, menu: !state.menu };
      
    case "table":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default function Redux(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
