import Layout from "../components/Layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post() {
  return (
    <Layout>
      <h1>First Page</h1>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = getPostData(params.id);
//   return {
//     props: {
//       postData
//     }
//   };
// }
