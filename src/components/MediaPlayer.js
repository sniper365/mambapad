import React from "react";
import { Player, BigPlayButton,  ControlBar,PosterImage } from "video-react";
import mambavideo from "../assets/mamba.mp4";
import poster from "../assets/img/pngwing.com.png";


const MediaPlayer = () => {
  return (
    <div className="media-box">
      <Player src={mambavideo} fluid autoPlay rePlay muted poster={poster}>
        <BigPlayButton position="center" autoHide={true}/>
        <ControlBar autoHide={true} />
        <PosterImage src={poster}/>
      </Player>
    </div>
  );
};

export default MediaPlayer;
