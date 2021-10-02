import { useState } from 'react'
import axios from "axios"
export default function NewTaskForm() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const submit = async (e) => {
        e.preventDefault()
        if (!title && !desc) {
            alert('title and description cant be blank');
        } else {
            console.log(title)
            console.log(desc)
            try {
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}task/createtask`,
                    data: {
                        title: title,
                        desc: desc
                    },
                });
                alert("new todo created");
            } catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={title} onChange={(e) => { setTitle(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <textarea className="form-control" id="" cols="30" rows="10" value={desc} onChange={(e) => { setDesc(e.target.value) }} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
