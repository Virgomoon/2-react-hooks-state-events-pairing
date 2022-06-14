import React from "react";

function ViewPort({url, title}){

    return (
    <div className="ViewPort">
      <iframe
        width="919"
        height="525"
        src={url}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{title}</h2>
    </div>
    )

}

export default ViewPort