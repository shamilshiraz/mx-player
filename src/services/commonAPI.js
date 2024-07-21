import axios from 'axios'

export const commonAPI= async(httpMethod,url,reqBody)=>{
    let reqConfig={
        methof:httpMethod,
        url,
        headers:{
          "Content-Type":"application.json"  
        },
        data:reqBody
    }
    await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })    
}
