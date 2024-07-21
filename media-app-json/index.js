const JSONServer=require('json-server')
const MPS=JSONServer.create()
const router=JSONServer.router('db.json')
const middleware=JSONServer.defaults()

const PORT=3000 || process.env.port

MPS.use(middleware)
MPS.use(router)

MPS.listen(PORT,()=>{
    console.log(`${PORT} is ported`);
})
