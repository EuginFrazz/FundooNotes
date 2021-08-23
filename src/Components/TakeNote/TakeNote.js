import React, { useCallback, useEffect, useState } from 'react';
import "./Takenote.css"
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import {faThumbtack} from '@fortawesome/free-solid-svg-icons'
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import AddAlertOutlined from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { getMethod, postMethod } from '../Services/Axiosservice';



const TakeNote = ({refetch : refetch1 ,setRefetch : setRefetch1}) => {
 

    const [notes,setNotes]=useState(true)
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [notes1,setNotes1]=useState("")
    const [refetch,setRefetch] = useState(false);

    
    const fetchData = useCallback(()=>{
      getMethod("http://localhost:3000/notes").then((res)=>{
          setNotes1(res.data)
          console.log(res);
      })
  },[])
  
  useEffect(() => {
      fetchData()
 },[fetchData,refetch])
    const postNotes =()=>{
      let data= {
        "title": title,
        "description": description,
        "isDeleted": false,
        "isArchive": false,
        "id":notes1.length + 1
      }
      title && description &&  postMethod("http://localhost:3000/notes",data).then((res)=>{
         setTitle("")
         setDescription("")
          console.log(res);
          setRefetch(!refetch)
          setRefetch1(!refetch1)
      })
      setNotes(!notes)

    }

    return (
        <div className="takeinput-wrapper">
      {notes && <>  <div onClick={()=>setNotes(!notes)} className="firstbox">
<input placeholder="Take a note..." className="firstinput" type="text" />
<Tooltip title="New List"><CheckBoxOutlinedIcon className="check"/></Tooltip>
<Tooltip title="New Note with Drawing"><BrushOutlinedIcon className="brush"/></Tooltip>
<Tooltip title="New Note"><ImageOutlinedIcon className="pic"/></Tooltip>
       </div></>}
       {!notes && <><div className="secondbox">
        <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}className="title" />
    
       <input type="text" placeholder="Take a note..." onChange={(e)=>setDescription(e.target.value)} className="note" />
       <div className="add"><Tooltip title="Remind Me"><AddAlertOutlined /></Tooltip></div>
       <div className="per"><Tooltip title="Collaborator"><PersonAddOutlinedIcon/></Tooltip></div>
       <div className="col"><Tooltip title="Change Color"><ColorLensOutlinedIcon/></Tooltip></div>
       <div className="img"><Tooltip title="Add Image"><ImageOutlinedIcon/></Tooltip></div>
       <div className="arc"><Tooltip title="Archive"><ArchiveOutlinedIcon/></Tooltip></div>
       <div className="mor"><Tooltip title="More"><MoreVertOutlinedIcon/></Tooltip></div>
       <div className="und"><Tooltip title="Undo"><UndoOutlinedIcon/></Tooltip></div>
       <div className="red"><Tooltip title="Redo"><RedoOutlinedIcon/></Tooltip></div>
       <div className="close" onClick={postNotes}>close</div>
       

       
  </div></>}
 
  </div>
    );
};

export default TakeNote;