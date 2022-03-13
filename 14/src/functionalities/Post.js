import React, {useState, useEffect} from "react";

function Post() {

    const [getComment, setComment] = useState("");

    const post = {
        id: 0,
        title: "My first post",
        description: "My first post description",
        comments: ["hello1", "hello2"]
    };

    useEffect(() => {
        console.log("Post");

        // get from localstorage and then render

        // {
        //     email: "vivek@theslimcoder.com",
        //     password: "123456789",
        //     fullName: "Vivek Anand Sharma",
        //     posts:[{
    //         id: 0,
    //         title: "My first post",
    //         description: "My first post description",
    //         comments:[]
    //     }]
        // }
    })

    function submitComment() {
        console.log("Comment: " + getComment);

        // get from localstorage

        // push comment to array

        // set to localstorage
    }

    return (
        <div>
            <h1>Post</h1>

            <h1>Details</h1>
            
            <p>Title: {} </p>
            <p>Description</p>

            <h1>Comments</h1>
            <input type="text" placeholder="comment" onChange={(e) => setComment(e.target.value)}/>
            <button onClick={submitComment}>Submit</button>

            <h1>Comments</h1>
            {
                post.comments.map((comment, index) => {
                    return <div>
                        <h3>{index + 1} : {comment}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Post;