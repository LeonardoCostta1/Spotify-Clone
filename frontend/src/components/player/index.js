import React,{useState,useEffect} from 'react';

import {useSelector,useDispatch} from 'react-redux'

import './style.css';
import prevImg from '../../assets/img/prev.svg'
import playImg from '../../assets/img/play.svg'
import pauseImg from '../../assets/img/pause.svg'
import nextImg from '../../assets/img/next.svg'
import volumeImg from '../../assets/img/volume.svg'

import secondsToMinutes from "../../Utils/duration";

export default function Player() {

    const dispatch = useDispatch()

    const [ prev] = useState(prevImg);
    const [ next] = useState(nextImg);
    const [ volume] = useState(volumeImg);

    const [ duration, setDuration] = useState('00:00');
    const [ currentTime, setcurrentTime] = useState('00:00');

    const track = useSelector(state =>{
        return state.spotify.album[0]
    });

    const index = useSelector(state=>{
        return state.spotify.index
    })

    const isPlaying = useSelector( state =>{
        return  state.spotify.playing
    })


    const isOpen = useSelector( state =>{
        return  state.spotify.open
    })

    function play(){
        const audioEl = document.getElementsByClassName("audio")[0]
        audioEl.play()
    }

    function pause(){
        const audioEl = document.getElementsByClassName("audio")[0]
        audioEl.pause()
    }

    function nextTrack(){ 
   
        if(index > track.length - 2){
            dispatch({type:"INDEX", payload:0})
            dispatch({type:'PLAYING',play:1})
        }else{
            dispatch({type:'NEXT'})
            dispatch({type:'PLAYING',play:1})
        }
    }

    function prevTrack(){ 
   
        if(index < 1){
            dispatch({type:"INDEX", payload:track.length - 1})
            dispatch({type:'PLAYING',play:1})
        }else{
            dispatch({type:'PREV'})
            dispatch({type:'PLAYING',play:1})
        }

    }

    function playRelative(){isPlaying === 0 ? pause() : play()}

    function togglePlay(){
        if(isPlaying === 0){
            play()
            dispatch({type:'PLAYING',play:1})
        }else{
            pause()
            dispatch({type:'PLAYING',play:0})
        }
    }

    function time(){
        const audioEl = document.getElementsByClassName("audio")[0]
        secondsToMinutes(audioEl.duration);
        setDuration(secondsToMinutes(audioEl.duration))
        setcurrentTime(secondsToMinutes(audioEl.currentTime))
    }


    useEffect(()=>{
        playRelative()
        setTimeout(()=>{
            time()
        },1000)
    },[index])

  return (
    <div className="player_wrapper" >

        <audio className="audio" src={track[index].url}/>
 
        <div className="info_music_container">
            <div className="info_wrapper">
                <div className="cover">
                <img src={track[index].foto_musica} alt="prev"/>
                </div>
                <div className="info">
                <div className="music">{track[index].nome_musica}</div>
                <div className="artist">{track[index].artista_musica}</div>
                </div>

            </div>
        </div>
        <div className="player_container">
            <div className="player_buttons_wrapper">
                <button onClick={prevTrack}><img src={prev} alt="prev"/></button>
                <button onClick={togglePlay}><img src={isPlaying === 0 ? playImg : pauseImg} alt="play"/></button>
                <button onClick={nextTrack}><img src={next} alt="prev"/></button>
            </div>
            <div className="seekbar_wrapper">
                <div className="seek_container">
                    <div className="time_music">{currentTime}</div>
                    <div className="seek_bg">
                    <div className="seek"></div>
                    </div>
                    <div className="time_music">{duration}</div>
                </div>
            </div>
        </div>
        <div className="volume_container">
        <button><img src={volume} alt="volume"/></button>
            <div className="volume_wrapper">
                <div className="volume"></div>
            </div>
        </div>

    </div>
  );
}
