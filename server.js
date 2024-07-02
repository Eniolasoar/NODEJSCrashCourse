import http from 'http';
// const PORT=process.env.PORT;
const PORT=8000;
import url from 'url';
import path from 'path';

//Getting current path
// __filename
// __dirname
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

import fs from 'fs/promises'

const server=http.createServer(async(req,res)=>{
// console.log(req.url);
// console.log(req.method)

try{
    if(req.method ==='GET'){
        let filePath;
        if(req.url ==='/'){
            // res.writeHead(200,{'Content-Type':'text/html'});
            //     res.end('<h1>Home Page!</h1>');
            filePath=path.join(__dirname,'public','index.html')
            } else if(req.url === '/about'){
                // res.writeHead(200,{'Content-Type':'text/html'});
                // res.end('<h1>About</h1>');
                filePath=path.join(__dirname,'public','about.html')
            }
            else{
                // res.writeHead(404,{'Content-Type':'text/html'});
                // res.end('<h1>Not Found!</h1>');
                filePath=path.join(__dirname,'public','notFound.html')
            }
        const data=await fs.readFile(filePath);
        //what type of data are we adding
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end();    
    }else{
        throw new Error('Method not allowed');
    }
}
catch(error){
    res.writeHead(500,{'Content-Type':'text/plain'});
    res.end('Server Error!');
}

    /*
       res.write('Hello World!');
    res.end();

    Instead of this,use res.end('Hello World!')
    */

// res.setHeader('Content-Type','text/html');
// res.statusCode=404;

// // res.writeHead(500,{'Content-Type':'application/json'});
// res.writeHead(200,{'Content-Type':'text/html'});

// // res.end(JSON.stringify({message:'Server Error'}))
//     res.end('<h1>Hello World!</h1>');
 
})

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})