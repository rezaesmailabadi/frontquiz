import React, { Fragment } from "react";
import Quiz from "../components/Quiz/Quiz";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
