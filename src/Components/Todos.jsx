import React from 'react'
import AllTask from "./AllTask";
import NewTaskForm from "./NewTaskForm";
export default function Todos() {
    const formStyle={
        marginTop:"10px",

    }
    const contentStyle={
        marginTop:"10px",
    }
    return (
        <div className="container d-flex">
            <div className="col-6 m-10" style={formStyle}>
                <NewTaskForm />
            </div>
            <div className="col-6 m-10" style={contentStyle}>
                <AllTask />
            </div>
        </div>
    )
}
