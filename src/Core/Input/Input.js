import React from 'react';
import TextField from '@material-ui/core/TextField';


const Input = ({label,helperText,error,onChangehandle,type="text",className=""}) => {
    return (
        <>
             <TextField
          error={error}
          id="outlined-error-helper-text"
          label={label}
          onChange={onChangehandle}
          helperText={helperText}
          variant="outlined"
          type={type}
          className={className}
        />
            
        </>
    );
};

export default Input;