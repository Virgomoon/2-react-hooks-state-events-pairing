import React from "react";
// import 

function LikesCounter({upvotes, downvotes, onUpvote, onDownvote}){
    // console.log(upvotes, downvotes, onUpvote)
    return (
        <div>
            <button onClick={onUpvote} name="upvotes" value={upvotes + ` 👍`} >{upvotes + ` 👍`}</button>
            <button onClick={onDownvote} name="downvotes" value={downvotes + ` 👎`}>{downvotes + ` 👎`}</button>
        </div>
    )
}

export default LikesCounter