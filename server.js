const http = require('http');

const port = 4000;




const server = http.createServer((req,res)=>{
    if(req.url == '/')
    {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end(`<h1>Hello World</h1>`);
    }else{
     res.writeHead(404,{'Content-Type' : 'text/html'});
     res.end();
    }
});

server.listen(port, function() {
    console.log('the server is running on port ', port);
});