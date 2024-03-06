import React, { useMemo } from "react";
import { useRealtimeCollection } from "../firebaseconfig/firedbutil";
import ReviewCommentBlocks from "./ReviewCommentBlocks";
import { Bounce } from "react-awesome-reveal";
import LoadingDots from "./LoadingDots";

function BlogReviewList({ blogId }) {
  const { data: users, isLoading, error } = useRealtimeCollection("users");

  const filteredUser = useMemo(() => {
    // Check if users data is loaded
    if (!users) return [];

    // Filter users who have commented on the specified blogId
    return users
      .filter(
        (user) =>
          user.comments &&
          user.comments.some((comment) => comment.blogId === blogId)
      )
      .map((user) => ({
        uid: user.uid,
        displayName: user.displayName,
        userImage: user.userImage,
        // Extract the comments for the specified blogId
        comments: user.comments.filter((comment) => comment.blogId === blogId),
      }));
  }, [users, blogId]); // Depend on users and blogId

  if (isLoading) return <LoadingDots />;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      {filteredUser && filteredUser.length > 0 ? (
        filteredUser.map(
          ({ uid, displayName, comments, userImage }) =>
            comments && (
              <Bounce key={uid}>
                {" "}
                <ReviewCommentBlocks
                  displayName={displayName}
                  comments={comments}
                  userImage={userImage}
                />
              </Bounce>
            )
        )
      ) : (
        <p className="leading-loose py-4">
          No comments on this dumb blog !! 🚗
        </p>
      )}
    </>
  );
}

export default BlogReviewList;
