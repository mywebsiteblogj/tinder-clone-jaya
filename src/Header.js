import React from 'react'
import "./Header.css"
import PersonPinIcon from '@material-ui/icons/PersonPin';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function header() {
    return (
        <div className="header">
            <IconButton>
            <PersonPinIcon fontSize="Large" className="header__icon"/>
            </IconButton>

            <img 
            className="header__logo" 
            src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" 
            alt="Tinder Logo"/>
<IconButton>
<ForumIcon  fontSize="Large" className="header__icon"/>
</IconButton>
        </div>

        
    )
}

export default header;
