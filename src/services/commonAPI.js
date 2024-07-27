import axios from 'axios'

export const commonAPI= async(httpMethod,url,reqBody)=>{
    let reqConfig={
        method:httpMethod,
        url,
        headers:{
          "Content-Type":"application/json"  
        },
        data:reqBody
    }
    await await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })    
}
