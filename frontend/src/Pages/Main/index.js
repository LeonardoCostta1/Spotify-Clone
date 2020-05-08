import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import './style.css';
import axios from 'axios'
import play from '../../assets/img/playa.svg';
export default function Main() {
    const [repos,setRepos] = useState([])
    const [redirect] = useState(false);
    const [load,setLoad] = useState(true)
    const [display,setDisplay] = useState('flex');

    const dispatch = useDispatch()

    function loadTracks(track){
        dispatch({type:'ASYNC_ADD_TRACK',payload:track});

    }

    useEffect(() => {
        axios.post('http://localhost:3002/api/artist/',{"token":"09071993"}).then((response) => {
            setRepos(response.data); 
            setLoad(false)
            setDisplay('none')
            
        }).catch((err)=>{
            console.log(err)
        })
      }, []);

      if(redirect){
        return <Redirect to='/error'/>
      }else{
        return (
            <div className='main_wrapper'>
                <div className="loading" style={{"display":display}}>
                <Loader className="load" active={load} inline='centered' />
                </div>
                <div className="main_container">
                    <div className="title_category">Recently played</div>
                    <div className="cards_artist">
                {repos.map((item,index)=>{
                    return(
                        <Link key={index} to={`/artist/${item.id_artista}`}>
                        <div key={index}  className="box_artist" onClick={loadTracks}>
                            <div className="photo_artist"><img src={item.foto_artista} alt="Artist"/></div>
                            <div className="name_artist">{item.nome_artista}</div>
                            <div className="genre_artist">{item.genero_artista}</div>
                            <div className="ball_play"><img src={play} alt="play"/></div>
                        </div>
                        </Link>
                    )
                })}
                </div>
                </div>
            </div>
          );
      }
 
       
}
