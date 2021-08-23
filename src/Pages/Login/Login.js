import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getMethod } from '../../Components/Services/Axiosservice';
import { userLogin } from '../../Components/Services/Userservice';
import Button from '../../Core/Button/Button';
import Input from "../../Core/Input/Input"
import "./Login.css"

const Login = () => {
    const [email,setEmail] = useState({emailValue:"",emailError:false,emailHelperText:""})
    const [password,setPassword] = useState({passwordValue:"",passwordError:false,passwordHelperText:""})
    const [showPassword,setShowPassword] = useState(true)
    const [redirect,setRedirect] = useState(true)
    const [userDetails,setUserDetails] = useState([{}])
    
    let history = useHistory();


    const validation=()=>{
         let valid= true      
        if(email.emailValue.length === 0){
            valid=false
            setEmail({...email,emailError:true,emailHelperText:"Enter Your Valid Mail Id"})}
            else setRedirect(false)
        
        if(password.passwordValue.length === 0 && redirect === false){
            valid=false
            setPassword({...password,passwordError:true,passwordHelperText:"Enter the Password"})
            }

            if(!redirect){
                console.log(userDetails);
               let found = userDetails.filter((value)=>email.emailValue === value.email)
                console.log(found);
                console.log("pass",found[0].password);
                if(found[0]?.password !== password.passwordValue){
                    valid =false;
                    setPassword({...password,passwordError:true,passwordHelperText:"Email and Password didn't match "}) 
                }
            }
            return valid
    
        }
        const login =() =>{
            if(validation() && !redirect){
                console.log("im here ");
                 localStorage.setItem("isLoggedIn",true)
                history.push("/dashboard")                      
        }
    }
    const fetchData = React.useCallback(()=>{
        getMethod("http://localhost:3000/userDetails").then((res)=>{
            setUserDetails(res.data)
            console.log(res);
        })
    },[])
   
    useEffect(() => {
        fetchData()
   },[fetchData])

    
    return (
        <div className="loginwholebody">
        <div className="loginfullbody">
            <div className="loginbody">
            <h1 className="loginhead"><span className="F">F</span><span className="U">u</span><span className="N">n</span><span className="D">d</span><span className="O">o</span><span className="O">o</span><span className="n">N</span><span className="o">o</span><span className="t">t</span><span className="e">e</span><span className="s">s</span></h1>
            <h1  className="loginhead">Sign in</h1>
            <h2 c className="loginhead">to countinue to FundooNotes</h2>
           { redirect && <> <Input className="logininput" onChangehandle={(e)=> setEmail({...email,emailValue:e.target.value})} label="Email"  helperText={email.emailHelperText} error={email.emailError}  /><br/>
           <div className="logfor">  <Link className="logema">Forget Email?</Link></div><h3 className="logwar">Not your computer? Use Guest mode to sign in privately.</h3>
           <div className="logmor"> <Link className="loglea">Learn More</Link></div><br/><br/><br/>
        <div className ="logcre">  <Link className="logacc" to="/">Create an Account</Link></div></> }         
            {!redirect && <> <Input className="logininput" onChangehandle={(e)=> setPassword({...password,passwordValue:e.target.value})} label="Password" type={showPassword?"password":"text"} helperText={password.passwordHelperText} error={password.passwordError}/><br/>
            <input className="logche" onClick ={()=> setShowPassword(!showPassword)} type = "checkbox" /><span className="logsho">Show password</span><br/><br/><br/><br/>
      <div className ="loglin">   <Link className="logfopa" >Forget Password?</Link></div> </>}
   
           < Button className="logval" onClickhandle ={login}>Next</Button>
           

            </div>
            
        </div>
        </div>
    );
};


export default Login;