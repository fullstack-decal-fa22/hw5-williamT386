import { React, useState } from "react";
import axios from "axios";


const NewPost = (props) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = () => {
        console.log({
            id,
            title,
            body
        })

        // TODO: Posted result is not GOTTEN
        axios.post("http://localhost:3002/post", { id: id, title: title, body: body }).then((data) => props.display(data.data));
    }

    return <div>
        <div>
            <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
        </div>
        <div>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
            <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button style={{ marginTop: '4px' }} onClick={onSubmit}>
            Submit
        </button>
    </div>
}

export default NewPost;
