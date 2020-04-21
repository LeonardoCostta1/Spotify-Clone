import React,{useState} from 'react';

import './style.css';
import prevImg from '../../assets/img/prev.svg'
import playImg from '../../assets/img/play.svg'
import nextImg from '../../assets/img/next.svg'
import volumeImg from '../../assets/img/volume.svg'
import coverimg from '../../assets/img/cover.jpg'

export default function Player() {

    const [ prev] = useState(prevImg);
    const [ play] = useState(playImg);
    const [ next] = useState(nextImg);
    const [ volume] = useState(volumeImg);
    const [ cover] = useState(coverimg);

    function playAudio(){
        const audioEl = document.getElementsByClassName("audio")[0]
        audioEl.play()
      }
  return (
    <div className="player_wrapper">
        <audio className="audio">
          <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
        </audio>
        <div className="info_music_container">
            <div className="info_wrapper">
                <div className="cover">
                <img src={cover} alt="prev"/>
                </div>
                <div className="info">
                    <div className="music">mi gente homecoming (live)</div>
                    <div className="artist">beyonce, j balvin</div>
                </div>

            </div>
        </div>
        <div className="player_container">
            <div className="player_buttons_wrapper">
                <button><img src={prev} alt="prev"/></button>
                <button onClick={playAudio}><img src={play} alt="play"/></button>
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
