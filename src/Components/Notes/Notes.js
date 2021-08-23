import React, { useCallback, useContext, useEffect, useState } from 'react';
import "./Notes.css"
import Navbar from '../../Components/Navbar/Navbar';
import Sidepanel from '../../Components/SidePanel/Sidepanel';
import TakeNote from '../../Components/TakeNote/TakeNote';
import AddAlertOutlined from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Colorpicker from '../../Core/Colorpicker/Colorpicker';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { getMethod, putMethod } from '../Services/Axiosservice';
import { context } from '../../Pages/Dashboard/Dashboard';
import { setRef } from '@material-ui/core';

var dummydata = [
  {
    "title": "doctor",
    "description": "he treats the people",
    "id": 1,
    "isDeleted": false,
    "isArchived": false
  },
  {
    "title": "doctor",
    "description": "he treats the people",
    "isDeleted": false,
    "isArchive": false,
    "id": 2
  },
  {
    "title": "doctor",
    "description": "he treats the people",
    "isDeleted": false,
    "isArchive": false,
    "id": 3
  },
  {
    "title": "new note",
    "description": "new ",
    "isDeleted": false,
    "isArchive": false,
    "id": 4
  }]


const Notes = () => {
    const [colour,setColour]=useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notes ,setNotes] = useState([{}]);
    const [refetch ,setRefetch] = useState(false);

    const sidepanel = useContext(context);
     let val = sidepanel.showSidePanel;

     console.log("im reloading ");
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const fetchData = useCallback(()=>{
        getMethod("http://localhost:3000/notes").then((res)=>{
            setNotes(res.data)
            console.log(res);
        })
    },[])
    
    useEffect(() => {
        fetchData()
   },[fetchData,refetch])
   const deleteNote =(id,title,description)=>{
    let data= {
        "title": title,
        "description": description,
        "isDeleted": true,
        "isArchive": false,
        "id": id 
      }

      putMethod(`http://localhost:3000/notes/${id}`,data).then((res)=>{
        setRefetch(!refetch)
      })

   }
   const archiveNotes =(id,title,description)=>{
    let data= {
        "title": title,
        "description": description,
        "isDeleted": false,
        "isArchive": true,
        "id": id 
      }

      putMethod(`http://localhost:3000/notes/${id}`,data)

   }
    
    return (
        <div className={` ${!val ? "notes-wrapper" : "w-88"} `}>
        
     <TakeNote refetch={refetch} setRefetch={setRefetch}/>
<div className="notes-container">
     { notes.filter((data) => data.isDeleted === false).filter((data) => data.isArchive === false).reverse().map(({title,description,id},index)=>{
         return(
             <>
             <div className="dfull">

             <input type="text" value={title
            } className="dtitle" />
    
    <input type="text" value={description} className="dnote" />
   
    <div className="dadd "><Tooltip title="Remind Me"><AddAlertOutlined /></Tooltip></div>
    <div className="dper "><Tooltip title="Collaborator"><PersonAddOutlinedIcon/></Tooltip></div>
    <div className="dcol"  ><Tooltip title="Change Color"><ColorLensOutlinedIcon   onClick={()=>setColour(!colour)}/></Tooltip></div>
    <div className="dimg "><Tooltip title="Add Image"><ImageOutlinedIcon/></Tooltip></div>
    <div className="darc "><Tooltip title="Archive"><ArchiveOutlinedIcon onClick={()=>archiveNotes(id,title,description)}/></Tooltip></div>
    <div className="dmor "><Tooltip title="More"><MoreVertOutlinedIcon onClick={handleClick} /></Tooltip></div>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem  onClick={(e)=>{
        deleteNote(id,title,description)
        handleClose(e)              
        }}>Delete Note</MenuItem>
        <MenuItem disabled onClick={handleClose}>Add label</MenuItem>
        <MenuItem disabled  onClick={handleClose}>Add drawing</MenuItem>
      </Menu>
    {colour && <Colorpicker />}
   
             </div>
             </>
         )
     }

     )    
}
</div>

        
        </div>
        
    );
};

export default Notes;