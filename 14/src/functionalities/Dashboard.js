import React, { useEffect, useState } from "react";

function Dashboard() {

    const [getDescription, setDescription] = useState("");
    const [getTitle, setTitle] = useState("");

    const posts = [{
        id: 0,
        title: "My first post",
        description: "My first post description",
        comments: ["hello1", "hello2"]
    },
    {
        id: 1,
        title: "My 2nd post",
        description: "My 2nd post description",
        comments: ["hello1", "hello2"]
    }];

    function submitPost() {
        console.log("Title: " + getTitle + " Description: " + getDescription);

        // get from localstorage

        // push post to array

        // set to localstorage
    }

    useEffect(() => {
        console.log("Dashboard");

        // get from localstorage and then render

        // {
        //     email: "vivek@theslimcoder.com",
        //     password: "123456789",
        //     fullName: "Vivek Anand Sharma",
        //     posts:[]
        // }
    })
    return (
        <div>
            <h1>Dashboard</h1>

            <h1>Details</h1>
            <ol>
                <li>Full Name: { } </li>
                <li>Email: { } </li>
            </ol>

            <h1>Create New Post</h1>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={submitPost}>Submit</button>

            <h1>Posts</h1>
            {
                posts.map((post, index) => {
                    return <div>
                        <a href={"/post?id="+index}>{post.title}</a>
                        <button>Delete Post</button>
                        <button>Update Post</button>
                    </div>
                })
            }
        </div>
    );
}

export default Dashboard;