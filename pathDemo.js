import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/test.txt';

//basename() - filename(test.txt)
console.log(path.basename(filePath))

//directory name
console.log(path.dirname(filePath));

//extension name
console.log(path.extname(filePath));

//parse - show full path details
console.log(path.parse(filePath))

// const __filename=url.fileURLToPath(import.meta.url);
// const __dirname=url.dirname(__filename);

// const filePath2= path.join(__dirname,'dir1','dir2','index.html')

// //resolve
// console.log(path.resolve(__dirname,'dir1','dir2','index.html'))