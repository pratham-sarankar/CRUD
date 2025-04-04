import express from 'express'

const app = express()
const port = 3000;

app.use(express.json())

const users = []

app.get("/",(req,res)=>{
    res.json({
        "users":users,
    })
});

app.post('/users',(req, res)=>{
    const user = req.body;
    users.push(user)
    res.json({
        "message": "User added successfully"
    })
})

app.delete("/users",(req,res)=>{
    users.pop()
    res.json({
        "message":"User deleted successfully!"
    })
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

