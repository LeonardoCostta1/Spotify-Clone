import React from 'react';

import  './style.css';
import like from '../../assets/img/like.svg'
import { Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar_wrapper">
        <div className="top_wrapper">
            <div className="box_container">
                <ul>
                <div className="title_category">sua biblioteca</div>
                    <Link to='/'><li><i className="fas fa-home"></i> Home</li></Link>
                    <li><i className="fas fa-search"></i> search</li>
                </ul>
            </div>

            <div className="box_container">
                <ul>
                <div className="title_category">sua biblioteca</div>
                <div className="add_playlist_wrapper">
                    <div className="box_add">+</div>
                    <div className="add_playlist_text">create playlist</div>
                </div>
                <div className="add_playlist_wrapper">
                    <div className="box_add"><img src={like} alt="like"/></div>
                    <div className="add_playlist_text">liked songs</div>
                </div>
     
                </ul>
            </div>

            <div className="box_container">
                <ul>
                <div className="title_category">Playlist</div>
                    <li>pagode</li>
                    <li>hip hop</li>
                    <li>trap</li>
                    <li>R&B</li>
                    <li>Sertanejo</li>
                    <li>axé</li>
                    <li>forro</li>
                </ul>
            </div>
        </div>
        <div className="bottom_wrapper"></div>
    </div>
  );
}
