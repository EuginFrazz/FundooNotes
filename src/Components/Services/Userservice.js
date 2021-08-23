import { postMethod } from "./Axiosservice"



export const userRegistration = (data) =>{
return postMethod("http://localhost:3000/userDetails",data)
}

export const userLogin = (data) => {
    return postMethod("http://fundoonotes.incubation.bridgelabz.com/api/user/login",data)

}

