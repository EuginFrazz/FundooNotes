import React, { useCallback, useEffect, useState } from 'react';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Colorpicker from '../../Core/Colorpicker/Colorpicker';
import AddAlertOutlined from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import { getMethod } from '../Services/Axiosservice';


const Archieve = () => {
    const [colour,setColour]=useState(false)

    const [archiveNotes,setArchiveNotes] = useState([{}]);
    const fetchData = useCallback(()=>{
        getMethod("http://localhost:3000/notes").then((res)=>{
            setArchiveNotes(res.data)
            console.log(res);
        })
    },[])
    
    useEffect(() => {
        fetchData()
   },[fetchData])

    return (
        <div className="notes-container">
        { archiveNotes.filter((data) => data.isDeleted === false).filter((data) => data.isArchive === true).reverse().map(({title,description},index)=>{
            return(
                <>
                <div className="dfull">
   
                <input type="text" value={title
               } className="dtitle" />
       
       <input type="text" value={description} className="dnote" />
      
       <div className="dadd "><Tooltip title="Remind Me"><AddAlertOutlined /></Tooltip></div>
       <div className="dper "><Tooltip title="Collaborator"><PersonAddOutlinedIcon/></Tooltip></div>
       <div  onClick={()=>setColour(!colour)} className="dcol "><Tooltip title="Change Color"><ColorLensOutlinedIcon/></Tooltip></div>
       <div className="dimg "><Tooltip title="Add Image"><ImageOutlinedIcon/></Tooltip></div>
       <div className="darc "><Tooltip title="Archive"><ArchiveOutlinedIcon/></Tooltip></div>
       <div className="dmor "><Tooltip title="More"><MoreVertOutlinedIcon/></Tooltip></div>
       {colour && <Colorpicker />}
      
                </div>
                </>
            )
        }
   
        )    
   }
   </div>
   
    );
};

export default Archieve;