import React, { useState } from "react";
import video from "../data/video.js";
import ViewPort from "./ViewPort.js";
import ViewBar from "./ViewsBar.js";
import LikesCounter from "./LikesCounter.js";
import Comments from "./Comments.js";
import CommentButton from "./CommentButton.js";

function App() {
  console.log("Here's your data:", video);

  const [vidData, setVidData] = useState(video)

  const [isHidden, setIsHidden] = useState(true)

  function handleIsHidden(){
    setIsHidden((isHidden) => !isHidden)
  }

  // console.log(vidData.embedUrl)

  return (
    <div className="App">
      <ViewPort url={vidData.embedUrl} title={vidData.title} />
      <ViewBar views={vidData.views} timeStamp={vidData.createdAt} />
      <LikesCounter upvotes={vidData.upvotes} downvotes={vidData.downvotes} />
      <CommentButton onIsHidden={handleIsHidden} isHidden={isHidden} comments={vidData.comments} />
      <Comments comments={vidData.comments} isHidden={isHidden} />
    </div>
  );
}

export default App;
