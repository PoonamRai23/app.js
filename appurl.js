const http=require('http')
const Server=http.createServer((req,res)=>{
    const url=req.url
    if(url=='/home'){
        res.write('<html>')
        res.write('<head><title>My page</title><head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    }
    else if (url=='/about'){
        res.write('<html>')
        res.write('<head><title>My Second Page</title><head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    else if (url=='/node'){
        res.write('<html>')
        res.write('<head><title>My Third Page</title><head>')
        res.write('<body><h1>Welcome to My Node Js project</h1></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title><head>')
    res.write('<body><h1>Welcome to My Node Js</h1></body>')
    res.write('</html>')
     return res.end( )
})
Server.listen(5000)