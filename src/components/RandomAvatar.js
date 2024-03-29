import React, { useEffect, useState, useCallback } from "react";

function RandomAvatar() {
  const [avatarImage, setAvatarImage] = useState("");

  // Function to generate a random seed
  const generateSeed = useCallback(() => {
    return Math.random().toString(36).substring(2, 15);
  }, []);

  // Function to fetch a random avatar
  const fetchRandomAvatar = useCallback(() => {
    const seed = generateSeed(); // Generate a new seed for each call
    const apiUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&scale=160&translateY=10`;
    setAvatarImage(apiUrl);
  }, [generateSeed]);

  useEffect(() => {
    fetchRandomAvatar();
    const intervalId = setInterval(fetchRandomAvatar, 1000);
    return () => clearInterval(intervalId);
  }, [fetchRandomAvatar]);

  return (
    <>
      {avatarImage && (
        <img
          src={avatarImage}
          alt="Random Avatar"
          style={{ width: "7rem", height: "7rem", marginRight: "1rem" }}
        />
      )}
    </>
  );
}

export default RandomAvatar;
