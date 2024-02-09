import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "@firebase/storage";
import { db, app } from "../firebaseconfig.js";

async function getImageUrl(imageRefPath) {
  const storage = getStorage(app);
  const imageRef = ref(storage, imageRefPath);

  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image: ", error);
    throw new Error("Failed to load image");
  }
}

async function getBlogs() {
  const blogsCol = collection(db, "dumbblog");
  const blogSnapshot = await getDocs(blogsCol);
  const blogList = blogSnapshot.docs.map((doc) => doc.data());
  const blogsPromise = blogList.map(async (blog) => {
    try {
      // Await the URL directly inside the map
      const url = await getImageUrl(blog.thumbnail_image);
      // Return a new object to avoid mutating the original blog object
      return { ...blog, thumbnail_image: url };
    } catch (error) {
      console.error("Error setting image URL: ", error);
      return { ...blog, thumbnail_image: "", error: true };
    }
  });
  // Promise.all to wait for all getImageUrl promises to resolve
  const modifiedBlogList = await Promise.all(blogsPromise);
  return modifiedBlogList;
}

export default getBlogs;
