import React from "react";
import { NavLink } from "react-router-dom";
import FasLogo from "../assets/elements/FAS_logo(black).png";

function Error() {
  const ErrorContainer = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const LogoStyle = {
    maxWidth: "400px",
    width: "100%",
    height: "auto",
    margin: "0 auto",
  };

  const LinkStyle = {
    color: "royalblue",
    textDecoration: "underline",
    marginTop: "40px",
  };

  return (
    <>
      <div style={ErrorContainer}>
        <img src={FasLogo} alt="Fas Logo" style={LogoStyle} />
        <h1>There's Nothing Here!</h1>
        <div style={LinkStyle}>
          <NavLink to="/">Go Back</NavLink>
        </div>
      </div>
    </>
  );
}

export default Error;
