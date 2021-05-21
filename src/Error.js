import React from "react";
import "./Error.css";

const Err = (props) => {
  return (
    <div className="ui active dimmer">
        <h1 className="error-no">403</h1>
        <h2 className="error-type">{props.message}!</h2>
    </div>
  );
};

Err.defaultProps = {
  message: "Error",
};

export default Err;
