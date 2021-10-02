import React from 'react'
import AllTask from "./AllTask";
import NewTaskForm from "./NewTaskForm";
export default function Todos() {
    return (
        <div className="container">
            <div className="col-12 flex">
                <NewTaskForm />
            </div>
            <div className="container">
                <AllTask />
            </div>
        </div>
    )
}
