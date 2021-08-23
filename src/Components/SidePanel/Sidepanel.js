import React from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import AddAlertOutlined from '@material-ui/icons/AddAlertOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import ArchiveOutlined from '@material-ui/icons/ArchiveOutlined';
import { BrowserRouter as Router, Route, Link, useHistory, useLocation } from "react-router-dom";


const Sidepanel = () => {
    const changeurl=(url)=>{
        window.location.href = url ;
    
    }
    let customStyle = ""    
    window.location.href === "http://localhost:3001/dashboard" ? customStyle = "dashboard" 
    : window.location.href === "http://localhost:3001/dashboard/archive" ? customStyle = "archive" : customStyle ="trash"
    return (
        <div className="sidepanel">
        <br/>
     <div  className={`wh ${customStyle === "dashboard" ? "customBackground":""}`} onClick={()=>changeurl("/dashboard")}>  <div ><EmojiObjectsOutlinedIcon /> Notes</div></div><br/>
     <div className="wh" ><AddAlertOutlined/> Reminders </div><br/>
     <div className="wh"><EditOutlined/> Edit Lables </div><br />
     <div  className={`wh ${customStyle === "archive" ? "customBackground":""}`} onClick={()=>changeurl("/dashboard/archive")}><ArchiveOutlined/> Archive </div> <br />
     <div className={`wh ${customStyle === "trash" ? "customBackground":""}`} onClick={()=>changeurl("/dashboard/trash")}><DeleteOutlineOutlinedIcon/> Trash </div>


</div>
    );
};

export default Sidepanel;