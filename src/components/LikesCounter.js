import React from "react";
// import 

function LikesCounter({upvotes, downvotes}){
    return (
        <div>
            <button>{upvotes}{`👍`}</button>
            <button>{downvotes}{`👎`}</button>
        </div>
    )
}

export default LikesCounter