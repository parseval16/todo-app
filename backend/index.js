const express = require('express');
const cors = require("cors");
const {createTodo, updateTodo} = require('./types');
const {todo} = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo",async (req,res)=>{
    const createPayload = req.body
    if(!createTodo.safeParse(createPayload)){
        res.status(411).json({
            msg: "Wrong Input!"
        })
    }
    console.log(createPayload);

    console.log(await todo.create({
        title : createPayload.title,
        description: createPayload.description,
        completed: false
    }))

    res.json({
        msg:"Todo created!"
    })
})

app.get('/todos',async (req,res)=>{

    const todos = await todo.find({});
    res.json({todos});
})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    if(!updateTodo.safeParse(updatePayload).success){
        res.status(411).json({
            msg:"Wrong Input!"
        })
    }

    
    await todo.updateOne({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.send({msg:"Updated!!"});

})

app.use((err,req,res,next)=>{
    res.status(500).json({
        msg:"Internal Server error"
    })
})

app.listen(3000,()=>{
    console.log("Listening @ 3000!!!");
})