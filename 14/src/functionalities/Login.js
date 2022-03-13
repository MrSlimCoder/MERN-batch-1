import React, { useState } from "react";

function Login() {
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");

    function submitLogin() {
        console.log("Email: " + getEmail + " Password: " + getPassword);
        // get from getstorage and then redirect to dashboard
        // window.history.pushState()    
    }

    return (
        <main>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submitLogin}>Submit</button>
        </main>
    )
}

export default Login;