import React from "react";

function CommentBlocks({ displayName, testimonial, index, userImage }) {
  console.log("User image is ", userImage);
  return (
    <div className="flex flex-col items-center py-10">
      <div className="space-y-4 w-full max-w-xl">
        <div
          className={`flex items-end ${index % 2 === 0 ? "justify-end" : ""}`}
        >
          <div className="flex -space-x-2 mr-2">
            <img
              className="w-10 h-10 rounded-full border border-gray-200"
              src={
                userImage
                  ? userImage
                  : "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&scale=200"
              }
              alt="Avatar"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-black pr-10 py-1">
              {displayName}
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-black">{testimonial}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentBlocks;
