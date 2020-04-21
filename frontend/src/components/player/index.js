import React,{useState,useEffect} from 'react';

import {useSelector} from 'react-redux'

import './style.css';
import prevImg from '../../assets/img/prev.svg'
import playImg from '../../assets/img/play.svg'
import pauseImg from '../../assets/img/pause.svg'
import nextImg from '../../assets/img/next.svg'
import volumeImg from '../../assets/img/volume.svg'
// import coverimg from '../../assets/img/cover.jpg'

export default function Player() {

    const [ prev] = useState(prevImg);
    const [ next] = useState(nextImg);
    const [ volume] = useState(volumeImg);
    const [playing, setPlaying ] = useState(0)

    const track = useSelector(state =>{

        return state.rootReducer.music
       
    })

    function playAudio(){
   
          console.log(track)
        const audioEl = document.getElementsByClassName("audio")[0]

            if(playing === 0){
                audioEl.play()
                setPlaying(1)
            }else{
                audioEl.pause()
                setPlaying(0)
            }
            return
          }

       useEffect(()=>{
            playAudio()
       },[track])
  return (
    <div className="player_wrapper">
        {track.map((track)=>{
        return(
            <>

        <audio className="audio" src={track.track}/>

{/* 
        <audio className="audio">
          <source src={track.track}></source>
        </audio> */}
 
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
                <button onClick={playAudio}><img src={playing === 0 ? playImg : pauseImg} alt="play"/></button>
                <button><img src={next} alt="prev"/></button>
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
