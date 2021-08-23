import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import "./Navbar.css"
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import AppsIcon from '@material-ui/icons/Apps';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Sidepanel from '../SidePanel/Sidepanel';




const Navbar = ({setShowSidePanel,showSidePanel}) => {
    const [search,setSearch]= useState("")
    const clear=() =>{
        if(search.length >= 1){
        setSearch("")
    }
}    
    return (
        <div className="navbar-items">
            <Tooltip title="Menu">

            < MenuIcon onClick={()=>setShowSidePanel(!showSidePanel)} className="menu" />
            </Tooltip>
            <div className="navbar-title"> Fundoo</div>
            <div className ="search-wrapper">
                <Tooltip title="Search">
                < SearchIcon />
                </Tooltip>
                <input onChange={(e) =>setSearch(e.target.value)} type ="text" value={search} className="input-box" />
                 {search.length > 0 &&  
          <ClearSharpIcon onClick={clear}  />  }
            
                
            </div>
            <Tooltip title="Refresh">
            <RefreshIcon className="refresh"/>
            </Tooltip>
            <Tooltip title="List View">
            <DnsRoundedIcon className="list"/>
            </Tooltip>
             <Tooltip title="Settings">
            <SettingsOutlinedIcon className="settings"/>
            </Tooltip>
             <Tooltip title="Apps">
            <AppsIcon className="apps"/>
            </Tooltip>
            <Tooltip title="Profile">
                <AccountCircleOutlinedIcon className="profile"/>
            </Tooltip>
        </div>
    );
};

export default Navbar;