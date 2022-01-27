import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <h1>There's Nothing Here!</h1>
      <NavLink to="/">Go Back</NavLink>
    </>
  );
}

export default Error;
