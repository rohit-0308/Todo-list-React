import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("i am Delete");
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("I am added", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Job 1",
      desc: " Job1 todo ",
    },
    {
      sno: 2,
      title: "Job 2",
      desc: " Job2 todo ",
    },
    {
      sno: 3,
      title: "Job 3",
      desc: " Job3 todo ",
    },
  ]);

  return (
    <div className="App">
      <Header title="My Todo List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
