import React, { useEffect, useState } from "react";

function RandomAvatar() {
  const [avatarImage, setAvatarImage] = useState("");

  // Function to generate a random seed
  const generateSeed = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  useEffect(() => {
    const fetchRandomAvatar = async () => {
      const seed = generateSeed(); // Generate a new seed for each call
      const apiUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&scale=160&translateY=10`;
      try {
        setAvatarImage(apiUrl);
      } catch (error) {
        console.error("Failed to fetch avatar", error);
      }
    };
    const intervalId = setInterval(() => {
      fetchRandomAvatar();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      {avatarImage ? (
        <img
          src={avatarImage}
          alt="Random Avatar"
          className="w-[7rem] h-[7rem] mr-3"
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default RandomAvatar;
