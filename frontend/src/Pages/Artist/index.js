import React,{useState,useEffect} from 'react';
import'./style.css';
import axios from 'axios'
import play from '../../assets/img/play.svg'
import heart from '../../assets/img/heart.svg'
import likedo from '../../assets/img/like.svg'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import $ from 'jquery'
import {useParams} from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

export default function Artist() {

const [artist,setArtist] = useState([])
const [album,setAlbum] = useState([])
const [tracks,setTracks] = useState([])
const [liked] = useState(likedo)
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


    axios.get(`http://localhost:3002/api/profile/${id}`)

    .then((response)=>{

      if(response.data.length === 0){

        setRedirect(true)

      }else{
        setArtist(response.data[0]);

        setAlbum(response.data[1]);

        setTracks(response.data[2]);


        setLoad(false)

        setDisplay('none')

      }
    }).catch((err)=>{

          document.addEventListener(err,setRedirect(true))
          
        })

  },[id]);

  const dispatch = useDispatch()

  function addTrack(track){
    dispatch({type:"ADD_TRACK", music:track})
  }


      if(!redirect){
        return (
          
          <div className="artist_wrapper">
            <div className="loading" style={{"display":display}}>
            <Loader className="load" active={load} inline='centered' />
            </div>


          {artist.map((art)=>{
            return(
              <div className="top_container">
              <div className="artist_photo_wrapper">
              <div className="artist_photo">
                <img src={art.foto_artista} alt="artista"/>
              </div>
            </div>
                <div className="artist_info_wrapper">
                <div className="artist_container">
                  <div className="title_area">artist</div>
                   <div className="name_artist">{art.nome_artista}</div>
                  <div className="button_wrapper">
                    <button>Play</button>
                    <button>seguir</button>
                    <button>...</button>
                    <button><img src={heart} alt="like"/></button>
                  </div>
                </div>
              </div>
        </div>

            )
          })}



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
              <div className="title_category">liked</div>
              </div>
      
              {tracks.map((item)=>{
                return(
                  <div className="track_playlist"onClick={()=> addTrack({ 
                    
                  track:item.url,
                  musica:item.nome_musica,
                  artist:item.artista_musica,
                  album:item.foto_musica})}>

                  <div className="left">
                    <div className='cover'>
                      <img key={item.id_musicasid_musicas} src={item.foto_musica} alt="cover"/>
                    </div>
                    
                    <button><img src={play} alt="play"/></button>
                      <div className ="music">{item.nome_musica}</div>
                  </div>
                    <div className="right">
                <div className="like">{item.duracao_musica}</div>
                      <button><img src={item.liked === 1 ? liked : heart} alt="like"/></button>
                    </div>
                </div>
                )
      
              })}
      
      
      
            </div>

            
            <div className="albuns_artist_wrapper">

            <div className="title_category_wrapper">
              <div className="title_category">album</div>
              <div className="title_category">tracks</div>
            </div>
      
              <div className="albuns_wrapper">

                {album.map((alb)=>{
                  return(
                    <div className='albun_container'>
    
                    <div className="left">
                      <div className="cover">
                      <img src={alb.foto_album} alt="cover"/>
                      </div>
                      <div className="albuns_name">
                      <div>{alb.nome_album}</div> 
                      <div>{alb.artista_album}</div>
                        </div>
                    </div>
                    <div className="right">
                      <div className="full_tracks">{alb.num_faixas_album}</div>
                    </div>
           
                  </div>
                  )
                })}
      

      

              </div>
      
            </div>
          </div>
            
        </div>
        );
      }else{
       return <Redirect to='/error'/>
      }

  
}
