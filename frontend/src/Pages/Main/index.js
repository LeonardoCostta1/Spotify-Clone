import React,{useState,useEffect} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'

import './style.css';
import axios from 'axios'
import play from '../../assets/img/playa.svg';
export default function Main() {
    const id = useSelector(state=>{
        return state.rootReducer.id
    })
    console.log(id)
    const [repos,setRepos] = useState([])

    useEffect(() => {
        axios.post('http://localhost:3002/api/artist/',{"token":"09071993"}).then((response) => {
            setRepos(response.data); 
        });
      }, []);

      const dispatch = useDispatch()

      function toglePages(){
        dispatch({type:'TOGLE_PAGE',id:0});
      }
 
  return (
    <div className='main_wrapper'>
        <div className="main_container">
        {repos.map((item)=>{
            return(
                <Link to={`/artist/${item.id_artista}`}>
                <div className="box_artist" onClick={toglePages}>
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
  );
}
