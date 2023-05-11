// import the os module
const os = require('os')


const freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory}`)

const totalMemory = os.totalmem();
console.log(`Total memory: ${totalMemory}`)

const usedMemory = totalMemory - freeMemory;
console.log(`The used memory in my system: ${usedMemory}`)

const platform = os.platform();
console.log(platform)

const Cpu = os.cpus();
console.log(Cpu)

const hostname = os.hostname();
console.log(hostname)

const userInformation = os.userInfo();
console.log(userInformation)

const Typeofsystem = os.type();
console.log(Typeofsystem)

// console.log("Architecture: " + os.arch)
