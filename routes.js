const fs=require('fs')
const requestHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Enter a Message</title></head>')
        res.write('<body>')
        res.write('<form action="message">method="post"><input type="text" name="message"><button type="submit">send</button>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
        else if (url==='/message'&& method==="Post"){
            const body=[]
            req.on('data',(chunk)=>{
                console.log(chunk)
                body.push(chunk)
            })
            req.on('end',()=>{
                const parsedBody=Buffer.concat(body).toString()
                console.log(parsedBody)
                const message=parsedBody.split('=')[1]
                fs.writeFileSync('message.txt',message)
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end()
            })  
        } 
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>my page</title></head>')
        res.write('</html>')
        res.end()  
}
// module.exports={
//     handler:requestHandler,
//     SomeText:'Some hard coded text'   
// }

// module.exports.handler=requestHandler
// module.exports.SomeText='Some hard coded text'

exports.handler=requestHandler
exports.SomeText='Some hard coded text'
