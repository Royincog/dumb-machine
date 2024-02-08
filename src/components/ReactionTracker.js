import React, { useEffect, useState } from "react";
import { getLikeCount, incrementLikeCount } from "../firebaseconfig/firedbutil";
import Button from "./Button";

function ReactionTracker() {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  //Function to increase the likes
  function increaseLikeCount() {
    if (!hasLiked) {
      setLikeCount((count) => count + 1);
      incrementLikeCount();
      setHasLiked(true);
    }
  }
  useEffect(() => {
    const num = getLikeCount(); //getting a promise
    num.then((likeCount) => setLikeCount(likeCount)); //setting the like count
  }, []);

  return (
    <>
      <p className="pb-3 font-semibold">
        Press the button if you are instructing a dumb <br /> machine like me 🍪☕
      </p>
      <Button
        onClick={increaseLikeCount}
        disabled={hasLiked}
        text="Hello World !!"
      />
      <br />
      <div className="py-4">
        <pre>
          Got total <span>{likeCount}</span> instructor instructing a dumb
          machine
        </pre>
      </div>
    </>
  );
}

export default ReactionTracker;
