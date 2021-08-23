import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMethod } from '../../Components/Services/Axiosservice';
import { userRegistration } from '../../Components/Services/Userservice';
import Button from '../../Core/Button/Button';
import Input from "../../Core/Input/Input"
import { FormValidation } from '../../Util/FormValidation';
import "./Registration.css"
const Registration = () => {
    const [firstName,setFirstName] = useState({firstNameValue:"",firstNameError:false,firstNameHelperText:""})
    const [lastName,setLastName] = useState({lastNameValue:"",lastNameError:false,lastNameHelperText:""})
    const [email,setEmail] = useState({emailValue:"",emailError:false,emailHelperText:""})
    const [password,setPassword] = useState({passwordValue:"",passwordError:false,passwordHelperText:""})
    const [confrimPassword,setConfrimPassword] = useState({confrimPasswordValue:"",confrimPasswordError:false,confrimPasswordHelperText:""})
    const [showPassword,setShowPassword] = useState(true)
    const [userDetails,setUserDetails] = useState([{}])

    
    const fetchData = useCallback(()=>{
        getMethod("http://localhost:3000/userDetails").then((res)=>{
            setUserDetails(res.data)
        })
    },[])
    
    useEffect(() => {
        fetchData()
   },[fetchData])
    
   const submit=()=>{
        if(FormValidation(firstName,lastName,email,password,confrimPassword,setFirstName,setLastName,setEmail,setPassword,setConfrimPassword)){
  console.log("sucess");
  let data={
      "firstName":firstName.firstNameValue,
      "lastName":lastName.lastNameValue,
      "email":email.emailValue,
      "password":password.passwordValue,
      "id":userDetails.length +1 
  }
  userRegistration(data).then((res)=>{console.log(res);})
  window.location.href="http://localhost:3001/login"          
        }

else console.log("login failed");

    }
    
    return (
        <div className="regwholebody">
        <div className="regfullbody">
            <div className="regdetails">
                    <h1><span className="F">F</span><span className="U">u</span><span className="N">n</span><span className="D">d</span><span className="O">o</span><span className="O">o</span><span className="n">N</span><span className="o">o</span><span className="t">t</span><span className="e">e</span><span className="s">s</span></h1>
                    <h1 className="title2">Create your FundooNotes Account</h1>
                    <h2 className="title1">to continue to Login Page</h2>
          
            <Input onChangehandle={(e)=> setFirstName({...firstName,firstNameValue:e.target.value})} label="First name" helperText={firstName.firstNameHelperText} error={firstName.firstNameError}/>
            <Input className="reglast" onChangehandle={(e)=> setLastName({...lastName,lastNameValue:e.target.value})} label="Last name" helperText={lastName.lastNameHelperText} error={lastName.lastNameError}/><br/><br/><br/>
            <Input onChangehandle={(e)=> setEmail({...email,emailValue:e.target.value})} label="Email" helperText={email.emailHelperText} error={email.emailError}/><br/><br/><br/>
            <Input onChangehandle={(e)=> setPassword({...password,passwordValue:e.target.value})} label="Password" type={showPassword?"password":"text"} helperText={password.passwordHelperText} error={password.passwordError}/>
            <Input  className="reglast" onChangehandle={(e)=> setConfrimPassword({...confrimPassword,confrimPasswordValue:e.target.value})} type={showPassword?"password":"text"} label="Confrim Password" helperText={confrimPassword.confrimPasswordHelperText} error={confrimPassword.confrimPasswordError}/><br/><br/><br/>
          <input className="regcheck" onClick ={()=> setShowPassword(!showPassword)} type = "checkbox" /><span className="regh">Show password</span><br/><br/><br/>
          <div className="reglogee"> <Link className="reglin" to="/login">Sign in Instead</Link>
            <Button className="regbut" onClickhandle={()=>submit()} >Next</Button></div>

            </div>
        </div>
        </div>
    );
};

export default Registration;