import { StatusFilter } from "./StatusFilter";
import { TaskCounter } from "./TaskCounter";
import css from "./AppBarRedux.module.css";

export default function AppBarRedux() {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
}
