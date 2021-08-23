export const FormValidation = ({firstNameValue,firstNameError,firstNameHelperText},{lastNameValue,lastNameError,lastNameHelperText},{emailValue,emailError,emailHelperText},{passwordValue,passwordError,passwordHelperText},{confrimPasswordValue,confrimPasswordError,confrimPasswordHelperText},setFirstName,setLastName,setEmail,setPassword,setConfrimPassword) => {

    let valid=true

    if(firstNameValue.length === 0){
        valid=false
        setFirstName({firstNameValue,firstNameError:true,firstNameHelperText:"Enter Firstname"})

    }
    if(lastNameValue.length === 0){
        valid=false
        setLastName({lastNameValue,lastNameError:true,lastNameHelperText:"Enter Lastname"})


    }
    if(emailValue.length === 0){
        valid=false
        setEmail({emailValue,emailError:true,emailHelperText:"Enter Your Valid Mail Id"})

    }
    if(passwordValue.length === 0){
        valid=false
        setPassword({passwordValue,passwordError:true,passwordHelperText:"Enter the Password"})

    }
    if(confrimPasswordValue.length === 0 ){
        valid=false
        setConfrimPassword({confrimPasswordValue,confrimPasswordError:true,confrimPasswordHelperText:"Enter the confirm password "})
    }

    if(passwordValue !== confrimPasswordValue){
        valid=false
        setConfrimPassword({confrimPasswordValue,confrimPasswordError:true,confrimPasswordHelperText:"Enter Same as Your Password"})
    }
return valid

};

