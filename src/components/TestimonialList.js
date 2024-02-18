import { useRealtimeCollection } from "../firebaseconfig/firedbutil";
import CommentBlocks from "./CommentBlocks";
import { Bounce } from "react-awesome-reveal";
import LoadingDots from "./LoadingDots";
function TestimonialList() {
  const { data: users, isLoading, error } = useRealtimeCollection("users");

  if (isLoading) return <LoadingDots />;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      {users.map(
        ({ uid, displayName, testimonial, userImage }, index) =>
          testimonial && (
            <Bounce key={uid}>
              {" "}
              <CommentBlocks
                displayName={displayName}
                testimonial={testimonial}
                index={index + 1}
                userImage={userImage}
              />
            </Bounce>
          )
      )}
    </>
  );
}

export default TestimonialList;
