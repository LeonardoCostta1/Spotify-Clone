import React from 'react';

import'./style.css';
import logo from '../../assets/img/spotify-brands.svg'
import user from '../../assets/img/cover.jpg'
import {Link} from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function Menu() {


  return (
    <div className="menu_wrapper">
        <div className="logo_wrapper">
            <Link to='/'>
            <div className="logo">
                <img src={logo} alt="spotify"/>
                <div className="logo_name">Spotify</div>
            </div>
            </Link>
        </div>
        <div className="search_wrapper">
            {/* <Input icon='search' placeholder='Search...' /> */}
        </div>
        <div className="icons_wrapper"></div>
        <div className="user_wrapper">

            <div className="user_container">

            <div className="user_photo">
                <img src={user} alt="spotify"/>
            </div>
           
            <Dropdown text='Leonardo'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Account' />
                    <Dropdown.Item text='Log-out' />
               
                </Dropdown.Menu>
            </Dropdown>

            </div>
        </div>
    </div>
  );
}
