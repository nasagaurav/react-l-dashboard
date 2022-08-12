import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const intialState = {
  menu: false,
};

function reducer(state = intialState, action) {
  return state;
}

const store = createStore(reducer);

export default function Redux(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
