import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Product } from "./Product";
import { Mailbox } from "./Mailbox";
import { BookList } from "./BookList";
import { Alert } from "./Alert";
import { UserMenu } from "./UserMenu";
import ClickCounter from "./ClickCounter";
import ClickCounterSynch from "./ClickCounterSynch";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";
import LangSwitcher from "./LangSwitcher";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";
import LoginFormControlled from "./LoginFormControlled";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import initialTasks from "./tasks.json";
import FeedbackForm from "./FeedbackForm";
import Articles from "./Articles";
import VideoPlayer from "./VideoPlayer";
import { UserMenu2 } from "./UserMenu2";
import Store from "./Store";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [clicksSynch, setClicksSynch] = useState(0);
  const [clicksFixed, setClicksFixed] = useState(() => {
    const savedClicks = window.localStorage.getItem("fixed-clicks");
    return savedClicks !== null ? Number(savedClicks) : 0;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });
  const [lang, setLang] = useState("en");
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  useEffect(() => {
    console.log("ClicksSynch updated: ", clicksSynch);
  }, [clicksSynch]);

  useEffect(() => {
    window.localStorage.setItem("fixed-clicks", clicksFixed);
  }, [clicksFixed]);

  useEffect(() => {
    console.log("Values updated: ", values);
  }, [values]);

  useEffect(() => {
    console.log("Clicks or ClicksSynch updated: ", clicks + clicksSynch);
  }, [clicks, clicksSynch]);

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div>
        <h1>Best selling</h1>
        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
        <Product />
      </div>
      <div>
        <h1>Mailbox</h1>
        <Mailbox />
      </div>
      <div>
        <h1>Collection of Books</h1>
        <BookList books={favouriteBooks} />
      </div>
      <div>
        <h1>Alerts</h1>
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" outlined>
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" outlined elevated>
          Please update your profile contact information
        </Alert>
      </div>
      <div>
        <UserMenu />
      </div>
      <div>
        <button onClick={() => alert("I'm a button!")}>Click me!</button>
        <button onClick={() => setClicks(clicks + 1)}>Current: {clicks}</button>
        <button onClick={() => setClicks(clicks + 1)}>Current: {clicks}</button>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide" : "Show"}
        </button>
        {isOpen && <p>Now you can see me!</p>}
      </div>
      <div>
        <ClickCounter />
        <ClickCounter />
      </div>
      <div>
        <ClickCounterSynch
          value={clicksSynch}
          onUpdate={() => {
            setClicksSynch(clicksSynch + 1);
          }}
        />
        <ClickCounterSynch
          value={clicksSynch}
          onUpdate={() => {
            setClicksSynch(clicksSynch + 1);
          }}
        />
      </div>
      <div>
        <button onClick={() => setClicksFixed(clicksFixed + 1)}>
          Fixed clicks: {clicksFixed}
        </button>
        <button onClick={() => setClicksFixed(0)}>Reset</button>
      </div>
      <div>
        <p>
          X: {values.x}, Y: {values.y}
        </p>
        <button onClick={() => setValues({ ...values, x: values.x + 1 })}>
          Update X
        </button>
        <button onClick={() => setValues({ ...values, y: values.y + 1 })}>
          Update Y
        </button>
      </div>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close Modal" : "Open Modal"}
        </button>
        {isOpen && <Modal />}
      </div>
      <div>
        <h1>Please login to your account!</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
      <SearchBar />
      <div>
        <LangSwitcher value={lang} onSelect={setLang} />
        <p>Selected language: {lang}</p>
      </div>
      <RadioButton />
      <Checkbox />
      <div>
        <h1>Login Form Controlled</h1>
        <LoginFormControlled />
      </div>
      <div>
        <h1>Task List</h1>
        <TaskForm onAdd={addTask} />
        <TaskFilter value={filter} onFilter={setFilter} />
        <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      </div>
      <div>
        <FeedbackForm />
      </div>
      <Articles />
      <VideoPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      <UserMenu2 />
      <Store />
    </>
  );
}
