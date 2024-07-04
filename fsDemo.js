// import fs from 'fs';
import fs from 'fs/promises'

//readFile- callback

// fs.readFile('./public/text.txt','utf8',(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

//readFile- promise
// fs.readFile('./public/text.txt','utf8')
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))

//readFile() - async/await
const readFile=async()=>{
    try{
        const data=await fs.readFile('./public/text.txt','utf8');
        console.log(data);
    } catch(error){
        console.log(error)
    }
}

const writeFile = async ()=>{
    try {
        await fs.writeFile('./public/text.txt','Hello,i AM WRITING TO YOU');
        console.log('file wriiten');
    } catch (error) {
        console.log(error);
    }
}

const appendFile= async ()=>{
    try {
        await fs.appendFile('./public/text.txt','\nThis is appended text');
        console.log('File appended');
    } catch (error) {
        console.log('FILE APPENDED');
    }
}

readFile();
writeFile();
readFile();
appendFile();