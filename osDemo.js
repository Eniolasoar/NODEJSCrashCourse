import os from 'os';

//userInfo - object with user's information
console.log(os.userInfo());
console.log(os.userInfo().username);

//totalMem
console.log(os.totalmem());

//freemem
console.log(os.freemem());

// CPU INFORMATION
console.log(os.cpus())