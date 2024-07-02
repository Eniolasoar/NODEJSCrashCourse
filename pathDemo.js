import url from 'url'

const filePath = './dir1/dir2/test.txt';

//basename() - filename
console.log(path.basename(filePath))

//directory name
console.log(path.dirname(filePath));

//extension name
console.log(path.extname(filePath));

//parse
console.log(path.parse(filePath))

const __filename=url.fileURLToPath(import.meta.url);
const __dirname=url.dirname(__filename);

const filePath2= path.join(__dirname,'dir1','dir2','index.html')

//resolve
console.log(path.resolve(__dirname,'dir1','dir2','index.html'))