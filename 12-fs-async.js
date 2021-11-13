// async approach it start the next task as the ongoing task is offloaded.

const {readFile,writeFile}=require('fs')
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first =result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second =result;

    writeFile(
        './content/result-async.txt',
        `here is the resukt:${first},${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with the task');
        }
        )
    })
})
console.log('strating the new task');
