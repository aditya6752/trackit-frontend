import { useState } from 'react'
import axios from "axios"
import DateTimePicker from 'react-datetime-picker';
export default function NewTaskForm() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState(new Date());
    const submit = async (e) => {
        e.preventDefault()
        if (!title && !desc) {
            alert('title and description cant be blank');
        } else {
            console.log(title)
            console.log(desc)
            console.log(date)
            try {
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}task/createtask`,
                    data: {
                        title: title,
                        desc: desc,
                        dateOfCompletion: date
                    },
                });
                // alert("new todo created");
            } catch (err) {
                console.log(err);
            }
        }
    }
    console.log(date);
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
                <div className="form-group">
                    <DateTimePicker
                        onChange={(e)=>{setDate(e)}}
                        value={date}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
