import { collection, getDocs } from "firebase/firestore";
import db from "../firbaseconfig";

async function getBlogs() {
  const blogsCol = collection(db, "dumbblog");
  const blogSnapshot = await getDocs(blogsCol);
  const blogList = blogSnapshot.docs.map((doc) => doc.data());
  return blogList;
}
export default getBlogs;
