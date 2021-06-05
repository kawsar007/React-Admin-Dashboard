import React from 'react';
import './Topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">DASHBOARD</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                     <NotificationsNone/>
                     <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                     <Language/>
                     <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                     <Settings/>
                    </div>
                    <img src="images/kawsar.jpg" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
