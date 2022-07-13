const express = require('express')
const app = express()
const prot = 5000

app.use((req,res,next)=>{
    console.log('有人请求服务器了')
    console.log('请求的资源是:',req.url)
    console.log('请求来自于:',req.get('Host'))
    next()
})

app.all('/students',(req, res)=>{
    const data = {name:'person',sex:'男',age:'18'};
    res.send(JSON.stringify(data))         //向客户端发送数据
}) 

app.listen(prot, (err)=>{                            //设置监听端口
    if(!err) console.log('服务器1启动成功,请求地址为:http://localhost:' + prot)
})