import { useState,useEffect } from "react"

export function Todos({todos}){
    return <div>
        {todos.map((todo)=>{
            return <div>
                <Todo todo={todo}/>
            </div>

        })}
    </div>
}


function Todo(props){
    const [id,setId] = useState("");
    const [buttonText,setButtonText] = useState("");

    const effect = useEffect(()=>{
        if(props.todo.completed){
            setButtonText("Mark as Completed")
        }else setButtonText("Completed");
        setId(props.todo._id);
    },[])
    const MarkCompleted = ()=>{
        fetch("http://localhost:3000/completed",{
        method: "PUT",
        body: JSON.stringify({
            id:id
        }),
        headers: {
            "Content-type": "application/json"
        }
        
    }).then(async(res)=>{
        const json = await res.json();
        
    })
    }
    return <div>
                <h1>{props.todo.title}</h1>
                <h2>{props.todo.description}</h2>
                <button onClick={MarkCompleted} >{buttonText }</button>
            </div>
}