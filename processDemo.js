console.log(process.argv)
console.log(process.argv[3])

console.log(process.env);

console.log(process.pid);

console.log(process.cwd())

console.log(process.title);

console.log(process.memoryUsage());

console.log(process.uptime());

process.on('exit',() =>{console.log('About to exit')})

process.exit() // Enter 0 or 1