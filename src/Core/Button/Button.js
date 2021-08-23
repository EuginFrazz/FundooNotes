import React from 'react';
import Button from '@material-ui/core/Button';
import { Children } from 'react';


const Button1 = ({onClickhandle,className="",children}) => {
    return (
        <>
             <Button variant="contained" color="primary" onClick={onClickhandle} className={className}>
        {children}
      </Button>
            
        </>
    );
};

export default Button1;