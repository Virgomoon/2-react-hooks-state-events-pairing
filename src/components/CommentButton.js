import React from "react";

function CommentButton({isHidden, onIsHidden, number}) {

    const displayText = isHidden ? "Hide Comments" : "Show Comments"

    return (
        <>
        <button id="displayBTN" onClick={onIsHidden} >{displayText}</button>
        
        <div id="divider" style={{ borderTop: "2px solid gray ", marginLeft: 20, marginRight: 20 }}></div>

        <p className="user">{number} Comments</p>
        </>
    )

}

export default CommentButton