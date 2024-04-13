import axios from "axios"

export const SignUpApi =async (data)=>{
try{
    return await  axios.post(`http://localhost:8080/UserAPI/signup`,data)
}catch(err){
    console.log(("api call fail", err))
}
}

export const LoginApi = async (data)=>{
    try{
        return await axios.post("http://localhost:8080/UserAPI/Login",data)
    }catch(err){
        console.log("api error is", err)
    }
}

export const getProducts= async()=>{
    try{
return await axios.get("http://localhost:8080/UserAPI/getProduct")
    }catch(err){
        console.log("error while fetching", err)
    }
}

export const getJSONProducts= async()=>{
    try{
return await axios.get("https://dummyjson.com/products")
    }catch(err){
        console.log("error while fetching", err)
    }
}

export const getDetailedProducts=async(id)=>{
    try{
        return await axios.get(`http://localhost:8080/UserAPI/getDetailedProducts/${id}`)
    }catch(err){
        console.log("error while fetching api", err)
    }
}