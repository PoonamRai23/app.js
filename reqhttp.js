const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)
    res.setHeader('Content-type','text/html')
    res.write('<html/>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to my Node js project</body>')
    res.write('</html>')
    res.end()
})
 server.listen(3000)   
   