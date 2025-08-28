import React from "react";

const PreviousImageButton = (props) => {

    return (
        <button {...props} className={"text-[30px] text-[55px] inline-block " + props.className}>
            &#9664;
        </button>
    )
}

const NextImageButton = (props) => {

    return (
        <button {...props} className={"text-[30px] text-[55px] inline-block " + props.className}>
            &#9654;
        </button>
    )
}

export { PreviousImageButton, NextImageButton };