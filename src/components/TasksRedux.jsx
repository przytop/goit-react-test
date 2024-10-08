import { LayoutRedux } from "./LayoutRedux";
import AppBarRedux from "./AppBarRedux";
import { TaskFormRedux } from "./TaskFormRedux";
import { TaskListRedux } from "./TaskListRedux";

export default function TasksRedux() {
  return (
    <LayoutRedux>
      <AppBarRedux />
      <TaskFormRedux />
      <TaskListRedux />
    </LayoutRedux>
  );
}
