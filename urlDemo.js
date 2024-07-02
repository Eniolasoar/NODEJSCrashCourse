import url from 'url';

const urlString='https://www.google.com/search?q=hello+world';

//give information on url
const urlObj=new URL(urlString);

//format

console.log(url.format(urlObj));

console.log(import.meta.url)

//fileURL TO PATH
console.log(url.fileURLToPath(import.meta.url))

console.log(urlObj.search)

const params=new URLSearchParams(urlObj.search);

