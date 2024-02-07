import React, { useEffect, useState } from "react";

function RandomAvatar() {
  const [avatarImage, setAvatarImage] = useState("");

  // Function to generate a random seed
  const generateSeed = () => {
    // Generate a random string for the seed
    return Math.random().toString(36).substring(2, 15);
  };

  useEffect(() => {
    const fetchRandomAvatar = async () => {
      const seed = generateSeed(); // Generate a new seed for each call
      const apiUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&scale=160&translateY=10`;
      try {
        // Since it's an SVG, we can directly set the URL without fetching the binary data
        setAvatarImage(apiUrl);
      } catch (error) {
        console.error("Failed to fetch avatar", error);
      }
    };

    // Set up an interval to fetch a new avatar every 1 second (1000 milliseconds)
    const intervalId = setInterval(() => {
      fetchRandomAvatar();
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <>
      {avatarImage ? (
        <img src={avatarImage} alt="Random Avatar" className="w-20 h-20 mr-3" />
      ) : (
        <></>
      )}
    </>
  );
}

export default RandomAvatar;
