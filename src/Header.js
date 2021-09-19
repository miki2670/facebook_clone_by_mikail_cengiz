import React from 'react';
import "./Header.css";
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle, Flag, Home, Search, Add, NotificationsActive, Forum, ExpandMore } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" 
                alt="" 
                />
                <div className="header__input">
                    <Search />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <Home fontSize="large" />
                </div>
                <div className="header__option">
                    <Flag fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>
        
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>

            </div>
        </div>
    )
}

export default Header;
