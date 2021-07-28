import React, {useEffect} from 'react';
import Youtube from 'react-youtube';
import './video.css';
import TagArea from '../tag/tagArea';

const Video = ({video,getDescription,description,tagInfo,handleNotice,registerNotice,refresh})=>{

    //自動スクロール
    const autoScroll = ()=>{
        document.getElementById("player").scrollIntoView();
    }
  
    useEffect(()=>{
        autoScroll();
    },[video]);

    if(video !== null){

        console.log(video);

        const opts = {
            playerVars: {
                autoplay: 1
            }
        }

        return(
            <div id="playerWrapper">
                <div id="player">
                    <Youtube opts={opts} videoId={video.id.videoId} onReady={()=>getDescription(video.id.videoId)}/>

                    <TagArea tagInfo={tagInfo} videoId={video.id.videoId} key={video.id.videoId} handleNotice={handleNotice} registerNotice={registerNotice} refresh={refresh}/>

                    <div id="detail" style={{border: 'solid black 1px'}}>
                        <h3>{video.snippet.title}</h3>
                        <br/>
                        <p id="description">{description}</p>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div id="playerWrapper">
            <div id="player"></div>
            <div id="detail"></div>
        </div>
    );
}

export default Video;
