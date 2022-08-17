import { server } from "../../../config";
import Head from "next/head";
import Link from "next/link";
// import { useRouter } from "next/router";
import articleStyles from "../../../styles/Article.module.css";

const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className={articleStyles.singlearticle}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back</Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/article/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/article`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
export default Article;
