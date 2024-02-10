import React, { useEffect, useState } from "react";

function RandomAvatar() {
  const [avatarImage, setAvatarImage] = useState("");

  // Function to generate a random seed
  const generateSeed = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  // Function to fetch a random avatar
  const fetchRandomAvatar = () => {
    const seed = generateSeed(); // Generate a new seed for each call
    const apiUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&scale=160&translateY=10`;
    setAvatarImage(apiUrl); // Directly set the image URL since it's an external API call not requiring fetch()
  };

  useEffect(() => {
    fetchRandomAvatar(); // Fetch an avatar immediately on component mount

    // Set up an interval to fetch a new avatar every 1 second
    const intervalId = setInterval(fetchRandomAvatar, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {avatarImage ? (
        <img
          src={avatarImage}
          alt="Random Avatar"
          style={{ width: "7rem", height: "7rem", marginRight: "3rem" }} // Replaced className with style for direct demonstration
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default RandomAvatar;
