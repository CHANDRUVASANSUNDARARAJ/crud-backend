const express=require('express')
const cors=require('cors')

const app=express();
app.use(cors({origin:"*"}))
app.use(express.json())
let data = [
   
]

app.get("/data",(req,res)=>{

    res.json(data)
})


app.post("/data",(req,res)=>{
    const {name,department,email,salary} = req.body
    data.push({name,department,email,salary,id:Date.now()})
    res.json(data)
})

app.delete("/:id",(req,res)=>{
    const id = req.params.id
    data = data.filter(el=>el.id != id)
    res.json("done")

})


app.put("/:id",(req,res)=>{
    
    let temp = data.find(el=>el.id ==  req.params.id)
    temp.name = req.body.name 
    temp.email = req.body.email 
    temp.department = req.body.department 
    temp.salary = req.body.salary 

    res.json("cd")
})
app.listen(8000,()=>{
    console.log('server created')
})

