import React from "react";

function ViewBar({views, timeStamp}){

    return (
        <div>
            <p>
                {views} Views | Uploaded {timeStamp}
            </p> 
        </div>
    )
}

export default ViewBar