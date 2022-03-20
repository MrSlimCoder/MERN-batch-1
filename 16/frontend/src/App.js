import { useEffect } from "react";

import logo from './logo.svg';
import './App.css';

import axios from "axios";

function App() {

  async function userLogin() {
    return await axios.post("http://localhost:4000/user/login", {
      "email": "vivek@theslimcoder.com",
      "password": "123"
    });
  }

  async function getSingleTodo(token, title) {
    return await axios.get(`http://localhost:4000/todo?title=${title}`, {
      headers: {
        Authorization: token
      }
    });
  }

  async function addSingleTodo(token, detail) {
    return await axios.post("http://localhost:4000/todo", detail, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(async () => {
    // USER LOGIN
    const login = await userLogin();
    const token = login.data.data[1].token;
    console.log("USER TOKEN", token);

    // TODO GET
    const getSingleTodoResponse = await getSingleTodo(token, "ghar");
    console.log("GET SINGLE TODO", getSingleTodoResponse.data.data);

    // TODO ADD
    // const addSingleTodoResponse = await addSingleTodo(token, {
    //   title: "add todo",
    //   list: ["hello world", "hello world"]
    // })
    // console.log("ADD SINGLE TODO", addSingleTodoResponse.data.data);

  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
