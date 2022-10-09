require("dotenv").config();
const express = require('express')

const app = express()

app.use(express.json())

let posts=[
{
    id:1,
    name:'anjana'
},
{
    id:2,
    name:'arjun'
}
]


app.get('/', (req, res) =>{
    res.status(200).send("hello node app")
})

app.get('/posts', (req, res) =>{
    res.status(200).send(posts)
})

app.post('/post/create',(req, res)=>{
    if(posts.length){
        const id=posts[posts.length-1].id+1
        const name=req.body.name
        posts.push({
            id,name
        })
        res.status(200).send('post created successfully')
    }
    else{
        const name=req.body.name
        posts.push({
            id:1,
            name
        })
    }
})

app.get('/posts/:id', (req, res) =>{
    // console.log(posts)
    let id= parseInt(req.params.id)
    let result=posts.filter(post=>post.id===id)
    console.log(result)
    if(result.length){
        res.json(...result)
    }else{
        res.status(404).send({error:'no such post found'})
    }

})

app.listen(process.env.NODE_PORT, function(){
    console.log(`listening on port ${process.env.NODE_PORT}`)
})