const os =require('os')
//info abput current user
const user=os.userInfo()
console.log(user)

//method returns uptime of the sysytem
console.log(`the system uptime is :${os.uptime()} seconds`)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMen:os.freemem()
}
console.log(currentOS)