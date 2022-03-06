import React, { useState } from "react";

function Todo() {

    const [value, setValue] = useState("");
    const [todolist, setTodoList] = useState([]);

    function onTodoChange(e) {
        setValue(e.target.value);
    }

    function onSubmit() {
        todolist.push(value);
        setTodoList([...todolist]);
    }

    return <main>
        <input type="text" placeholder="Add Todo" onChange={(e) => onTodoChange(e)} />
        <button onClick={onSubmit}>Submit</button>
        {todolist.map((value, index) => {
            return <div key={index}>
                <p>{index + 1} : {value}</p>
                <br />
            </div>
        })}
    </main>
}

export default Todo;