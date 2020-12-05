import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function Count() {
  return (
    <>
      <h1>BETHA</h1>
      <button onClick={() => alert('Betha is the best')}>PRESS BUTTON</button>
    </>
  );
}
export default Count;