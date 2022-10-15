// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/ check
require("dotenv").config();
const app=require("./app")
app.listen(process.env.NODE_PORT, function(){
    console.log(`listening on port ${process.env.NODE_PORT}`)
})
