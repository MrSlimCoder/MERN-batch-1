import React, { useState } from "react";

function Signup() {
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getFullName, setFullName] = useState("");

    function submitSignup() {
        console.log("Email: " + getEmail,  " Password: " + getPassword , "Full Name: " + getFullName);
    
    // Add/set in localstorage

    // {
    //     email: "vivek@theslimcoder.com",
    //     password: "123456789",
    //     fullName: "Vivek Anand Sharma",
    //     posts:[{
    //         id: 0,
    //         title: "My first post",
    //         description: "My first post description",
    //         comments:["hello", "hello2"]
    //     }]
    // }
    }

    return (
        <main>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="full name" onChange={(e) => setFullName(e.target.value)} />
            <button onClick={submitSignup}>Submit</button>
        </main>
    )
}

export default Signup;