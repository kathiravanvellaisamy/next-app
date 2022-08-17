import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <div className={articleStyles.card}>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a>
          <h3>{article.title} &rarr;</h3>
        </a>
      </Link>
      <p>{article.excerpt}</p>
    </div>
  );
};

export default ArticleItem;
