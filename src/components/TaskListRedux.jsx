import { useSelector } from "react-redux";
import { statusFilters } from "../redux/constants";
import { getTasks, getStatusFilter } from "../redux/selectors";
import { TaskRedux } from "./TaskRedux";
import css from "./TaskListRedux.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskListRedux = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <TaskRedux task={task} />
        </li>
      ))}
    </ul>
  );
};
