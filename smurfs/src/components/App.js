import React from "react";
import "./App.css";
import Form from "./form"
import List from "./list"
import { connect } from "react-redux";

const App = () => {
  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default connect(null, null)(App);
