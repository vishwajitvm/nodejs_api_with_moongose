const os = require('os') ;
console.log(os.arch());  //OS architecture
console.log(os.freemem() / (1024 * 1024 * 1024)) ; //FREE MEMORY in os => RAM
console.log(os.totalmem() / (1024 * 1024 * 1024)) ; //TOTAL MEMORY in os => RAM
console.log(os.hostname()) ; //Hostname
console.log(os.userInfo()) ; //USER INFO