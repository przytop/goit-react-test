import css from "./LayoutRedux.module.css";

export const LayoutRedux = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
