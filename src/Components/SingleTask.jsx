import React from 'react'
import {format} from 'timeago.js'
export default function SingleTask({todo,onDelete}) {
    const date = new Date(todo.dateOfCompletion);
    
    return (
        <div className="w-100" >
            <h1>{todo.title}</h1>
            
            <p>{todo.desc}</p>
            <p>{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</p>
            <p>{format(todo.dateOfCompletion)}</p>
            
            <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}> Delete </button>
        </div>
    )
}
