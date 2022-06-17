import React from "react";

function Comments({comments, isHidden}) {

    // console.log(comments.length)
    
      const showComments = (comments||[]).map((item)=>{
            return(
            <div key={item.id}>
                <p className="user">
                    {item.user}
                </p>
                <p>
                    {item.comment}
                </p>
            </div>
            )   
        })
        
        
        return (
            <div>
                <div className={isHidden ? "" : "hidden"}>
                    {showComments}
                </div>
            </div>
        )
}

export default Comments