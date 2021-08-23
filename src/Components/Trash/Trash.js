import React, { useCallback, useEffect, useState } from "react";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Colorpicker from "../../Core/Colorpicker/Colorpicker";
import AddAlertOutlined from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import { deleteMethod, getMethod, postMethod, putMethod } from "../Services/Axiosservice";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';



const Trash = () => {
  const [colour, setColour] = useState(false);
  const [trashNotes, setTrashNotes] = useState([{}]);
  const fetchData = useCallback(() => {
    getMethod("http://localhost:3000/notes").then((res) => {
      setTrashNotes(res.data);
      console.log(res);
    });
  }, []);

  const deleteForever = (id) => {
      deleteMethod(`http://localhost:3000/notes/${id} `)

  }
  const restoreNotes = (title,description,id) => {
      let data = {
        "title": title,
        "description": description,
        "id":id,
        "isDeleted":false,
        "isArchived":false
      }
     putMethod(`http://localhost:3000/notes/${id}`,data)

  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="notes-container">
      {" "}
      {trashNotes
        .filter((data) => data.isDeleted === true)
        .filter((data) => data.isArchive === false)
        .reverse()
        .map(({ title, description,id }, index) => {
          return (
            <>
              <div className="dfull">
                <input type="text" value={title} className="dtitle" />
                <input type="text" value={description} className="dnote" />
                <div className="dadd ">
                  <Tooltip title="Delete Forever">
                    <DeleteForeverIcon onClick = {()=>deleteForever(id)}/>
                  </Tooltip>
                </div>
                <div className="dper ">
                  <Tooltip title="Restore">
                    <RestoreFromTrashIcon onClick = {() => restoreNotes(title,description,id)}/>
                  </Tooltip>
                </div>
                
                {colour && <Colorpicker />}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Trash;
