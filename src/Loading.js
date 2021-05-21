import React from "react";

const Load = (props) => {
    return (
        <div className="ui active dimmer">
            <div className= "ui big text loader"><h1>{props.message}</h1></div>
        </div>
    );
};

Load.defaultProps = {
    message : "Loading..."
};

export default Load;