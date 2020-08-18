import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
import firebase from "./firebaseConfig";
import { async } from "q";

export async function getSortedPostsData() {
  console.log("called");
  // Get file names under /posts
  //   const fileNames = fs.readdirSync(postsDirectory);
  //   const allPostsData = fileNames.map(fileName => {
  //     // Remove ".md" from file name to get id
  //     const id = fileName.replace(/\.md$/, "");

  //     // Read markdown file as string
  //     const fullPath = path.join(postsDirectory, fileName);
  //     const fileContents = fs.readFileSync(fullPath, "utf8");

  //     // Use gray-matter to parse the post metadata section
  //     const matterResult = matter(fileContents);

  //     // Combine the data with the id
  //     return {
  //       id,
  //       ...matterResult.data
  //     };
  //   });

  const db = firebase.firestore();
  let array = [];
  const docs = await db.collection("todos").get();
  // .then(docs =>
  docs.forEach(doc => {
    // console.log(doc.data());
    array.push(doc.data());
    console.log({ array });
  });
  // )
  // .catch(error => console.log(error));
  console.log("after array---", array);
  // Sort posts by date
  return {
    allPostsData: array
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    };
  });
}

// Get Data with ID
export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  };
}
