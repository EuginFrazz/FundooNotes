import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';



import React from 'react';
const icon={
    menu:MenuIcon,
    search:SearchIcon,
    refresh:RefreshIcon,
    settings:SettingsOutlinedIcon
}
const Icon = ({title,iconName}) => {

    return (
        <div>
            <Tooltip title="Delete">
        <IconButton aria-label="delete">
        
        </IconButton>
      </Tooltip>
            
        </div>
    );
};

export default Icon;