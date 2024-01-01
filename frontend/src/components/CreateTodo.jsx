import {useState} from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const AddTodo = ()=>{
        fetch("http://localhost:3000/todo",{
        method: "POST",
        body: JSON.stringify({
            title:title,
            description:description
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(async(res)=>{
        const json = await res.json();
        alert("Todo added");
    })
    }


    return <div>
        <input type="text" placeholder="title" style={{
            padding:10,
            margin:10
        }} onChange={(e)=>{
            const value = e.target.value;
            setTitle(value);

        }}></input> <br />
        <input type="text" placeholder="description" style={{
            padding:10,
            margin:10
        }} onChange={(e)=>{
            const value = e.target.value;
            setDescription(value);
        }}/> <br />

        <button style={{
            padding:10,
            margin:10
        }} onClick={AddTodo}>Add a todo</button>
    </div>


}

function AddTodo(){
    
}