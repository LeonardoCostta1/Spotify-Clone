import React,{useState,useEffect} from 'react';

import {useSelector,useDispatch} from 'react-redux'

import './style.css';
import prevImg from '../../assets/img/prev.svg'
import playImg from '../../assets/img/play.svg'
import pauseImg from '../../assets/img/pause.svg'
import nextImg from '../../assets/img/next.svg'
import volumeImg from '../../assets/img/volume.svg'

export default function Player() {

    const dispatch = useDispatch()

    const [ prev] = useState(prevImg);
    const [ next] = useState(nextImg);
    const [ volume] = useState(volumeImg);

    const track = useSelector(state =>{
        return state.rootReducer.music
    })
    let nt = 0
    const isPlaying = useSelector( state =>{
        return  state.isplaying.playing
    })
  

    function togglePlay(){

        if(isPlaying === 0){
            play()
        }else{
            pause()
        }

          }

         function play(){
            dispatch({type:'PLAYING',play:1})
            const audioEl = document.getElementsByClassName("audio")[0]
            audioEl.play()
          }

        function pause(){
            dispatch({type:'PLAYING',play:0})
            const audioEl = document.getElementsByClassName("audio")[0]
            audioEl.pause()
          }

          function nextTrack(){
            nt++
            
            const audioEl = document.getElementsByClassName("audio")[0]
            audioEl.play()
            alert(nt)
          }

          useEffect(()=>{
            const audioEl = document.getElementsByClassName("audio")[0]
            audioEl.play()
          },[track])

          
  return (
    <div className="player_wrapper">
        {track.map((track)=>{
        return(
            <>

        <audio className="audio" src={track.track}/>
 
        <div className="info_music_container">
            <div className="info_wrapper">
                <div className="cover">
                <img src={track.album} alt="prev"/>
                </div>
                <div className="info">
                <div className="music">{track.musica}</div>
                <div className="artist">{track.artist}</div>
                </div>

            </div>
        </div>
        </>
         )
        })} 
        <div className="player_container">
            <div className="player_buttons_wrapper">
                <button><img src={prev} alt="prev"/></button>
                <button onClick={togglePlay}><img src={isPlaying === 0 ? playImg : pauseImg} alt="play"/></button>
                <button onClick={nextTrack}><img src={next} alt="prev"/></button>
            </div>
            <div className="seekbar_wrapper">

                <div className="seek_container">
                    <div className="time_music">0:20</div>
                    <div className="seek_bg">
                    <div className="seek"></div>
                    </div>
                    <div className="time_music">3:00</div>
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
