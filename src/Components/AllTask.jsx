import SingleTask from './SingleTask'
import  { useState, useEffect } from 'react';
import axios from "axios"
export default function AllTask() {
    const[todo,setTodo] = useState([])
    //delete by calling the api
    const deleteTask = async (todo) => {try {
         await axios({
           method: 'delete',
           url: `${process.env.REACT_APP_API_URL}task/deletetask/${todo._id}`,
       });

   } catch (err) {
       console.log(err);
   }}
    useEffect(()=>{
        const fetchTask = async()=>{
            try {
                 const a1 = await axios({
                    method: 'get',
                    url: `${process.env.REACT_APP_API_URL}task/alltask`,
                });
                setTodo(a1.data);
                // console.log(a1);
            } catch (err) {
                console.log(err);
            }
        }
        fetchTask()
    },[]);
    

    //below one ise used for printifng all the possible task
    return (
        <div className="display-flex">
            {todo.map((todo)=>{
               return <SingleTask key={todo._id} todo={todo} onDelete={deleteTask}/>
            })}
            
        </div>
    )
}
