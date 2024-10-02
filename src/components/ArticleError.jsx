import css from "./ArticleError.module.css";

export default function ArticleError() {
  return (
    <p className={css.error}>
      Whoops, something went wrong! Please try reloading this page!
    </p>
  );
}
