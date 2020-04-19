import React,{useState,useEffect} from 'react';
import'./style.css';
import axios from 'axios'
import play from '../../assets/img/play.svg'
import heart from '../../assets/img/heart.svg'
import {Redirect} from 'react-router-dom'
import cover from '../../assets/img/cover.jpg'
import $ from 'jquery'
import {useParams} from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

export default function Artist() {

const [repos,setRepos] = useState([])
const [profile,setProfile] = useState({})
const [redirect,setRedirect] = useState(false);
const [load,setLoad] = useState(true)
const [display,setDisplay] = useState('flex')

let { id } = useParams();

  useEffect(()=>{
    $(document).ready(function(){
      $('.overview_menu ul li').click(function(){
        $('ul li').removeClass("active");
        $(this).addClass("active");
    });
    });
    axios.post(`http://localhost:3002/api/profile/${id}`,{"token":"09071993",})
    .then((response)=>{
      if(response.data.length === 0){
        setRedirect(true)
      }else{
        setRepos(response.data);
        setProfile(response.data[0]);
        setLoad(false)
        setDisplay('none')
      }
    }).catch((err)=>{
          document.addEventListener(err,setRedirect(true))
        })
  },[id]);

      if(!redirect){
        return (
          
          <div className="artist_wrapper">
            <div className="loading" style={{"display":display}}>
            <Loader className="load" active={load} inline='centered' />
            </div>

          <div className="top_container">
                <div className="artist_photo_wrapper">
                <div className="artist_photo">
                  <img src={profile.foto_artista} alt="artista"/>
                </div>
              </div>
                  <div className="artist_info_wrapper">
                  <div className="artist_container">
                    <div className="title_area">artist</div>
                     <div className="name_artist">{profile.nome_artista}</div>
                    <div className="button_wrapper">
                      <button>Play</button>
                      <button>seguir</button>
                      <button>...</button>
                      <button><img src={heart} alt="like"/></button>
                    </div>
                  </div>
                </div>
          </div>
          <div className="overview_wrapper">
            <div className="overview_menu">
              <ul>
                <li className="active">overview</li>
                <li>albuns</li>
                <li>about</li>
              </ul>
            </div>
          </div>
      
          <div className='playlist_wrapper'>
            <div className="playlist">
              <div className="title_category_wrapper">
              <div className="title_category">popular</div>
              <div className="title_category">likes</div>
              </div>
      
              {repos.map((item)=>{
                return(
                  <div className="track_playlist">
                  <div className="left">
                    <div className='cover'>
                      <img key={item.id_artista} src={item.foto_artista} alt="cover"/>
                    </div>
                    <button><img src={play} alt="play"/></button>
                      <div className ="music">{item.nome_musica}</div>
                  </div>
                    <div className="right">
                <div className="like">{item.genero_musica}</div>
                      <button><img src={heart} alt="like"/></button>
                    </div>
                </div>
                )
      
              })}
      
      
      
            </div>
            {/* <div className="albuns_artist_wrapper">
            <div className="title_category_wrapper">
              <div className="title_category">mais de beyoncé</div>
              <div className="title_category">tracks</div>
      
              </div>
      
              <div className="albuns_wrapper">
      
                <div className='albun_container'>
      
      
                  <div className="left">
                    <div className="cover">
                    <img src={cover} alt="cover"/>
                    </div>
                    <div className="albuns_name">
                    <div>homecoming</div> 
                    <div>album</div>
                      </div>
                  </div>
                  <div className="right">
                    <div className="full_tracks">12 tracks</div>
                  </div>
         
                </div>
      
      
      
                <div className='albun_container'>
      
                <div className="left">
                  <div className="cover">
                  <img src={cover} alt="cover"/>
                  </div>
                  <div className="albuns_name">
                  <div>the lion king</div>
                  <div>album</div>
                  </div>
                  </div>
      
                  <div className="right">
                    <div className="full_tracks">12 tracks</div>
                  </div>
                </div>
      
      
                <div className='albun_container'>
      
                <div className="left">
                  <div className="cover">
                  <img src={cover} alt="cover"/>
                  </div>
                  <div className="albuns_name">
                  <div>beyonce</div>
                  <div>album</div>
                  </div>
                  </div>
      
                  <div className="right">
                    <div className="full_tracks">12 tracks</div>
                  </div>
                </div>
      
      
                <div className='albun_container'>
                <div className="left">
                  <div className="cover">
                  <img src={cover} alt="cover"/>
                  </div>
                  <div className="albuns_name">
                  <div>b'day</div>
                    <div>album</div>
                    </div>
                    </div>
                    <div className="right">
                    <div className="full_tracks">12 tracks</div>
                  </div>
                </div>
      
      
                <div className='albun_container'>
                <div className="left">
                  <div className="cover">
                  <img src={cover} alt="cover"/>
                  </div>
                  <div className="albuns_name">
                  <div>dengerously in love</div>
                  <div>album</div>
                  </div>
                  </div>
      
                  <div className="right">
                    <div className="full_tracks">12 tracks</div>
                  </div>
                </div>
      
      
              </div>
      
            </div> */}
          </div>
            
        </div>
        );
      }else{
       return <Redirect to='/error'/>
      }

  
}
