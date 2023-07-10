const http=require('http')
const server=http.createServer((req,res)=>{
    console.log("poonam")
    res.write('<h1>hello</h1>')
    res.end()
})
server.listen(4000)
