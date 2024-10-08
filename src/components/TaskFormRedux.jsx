import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { Button } from "./Button";
import css from "./TaskFormRedux.module.css";

export const TaskFormRedux = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
