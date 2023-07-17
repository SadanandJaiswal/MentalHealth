import React, { useState, useRef , useEffect} from 'react';
import ReactPlayer from 'react-player';
import "../style//Music.css";
import musicFile1 from "../components/songs/yt1s.com - Relaxing Sounds.mp3";
import musicFile2 from "../components/songs/04-Meydan-Surreal-Forest.mp3";
import musicFile3 from "../components/songs/burghrecords__birds-singing-forest-scotland.mp3";
import musicFile4 from "../components/songs/Calm-and-Peaceful.mp3";
import musicFile5 from "../components/songs/felix-blume__wave-on-the-beach-in-thailand-at-20-meters-form-the-water-during-the-night.mp3";
import musicFile6 from "../components/songs/plasterbrain__loop-by-the-sea.mp3";
import musicFile7 from "../components/songs/smand__nightingale-song.mp3";

const AudioPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playAllBtn,setPlayAll] = useState(false);
  const [musicLike,setMuiscLike] = useState([])


  const songs = 
  [
    {
      title: 'Krishna Flute',
      image: 'https://via.placeholder.com/150',
      link: 'https://music.youtube.com/embed/dzKqWDrp0Sc'
    },
    {
      title: 'Autumn Feel',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.youtube.com/embed/aE6EEATmVhs'
    },
    {
      title: 'Relaxing Sound',
      image: 'https://via.placeholder.com/150',
      link: musicFile1
    },
    {
      title: 'Meydan Surreal Forest',
      image: 'https://via.placeholder.com/150',
      link: musicFile2
    },
    {
      title: 'Birds Singing Forest Scotland',
      image: 'https://via.placeholder.com/150',
      link: musicFile3
    },
    {
      title: 'Calm and Peaceful',
      image: 'https://via.placeholder.com/150',
      link: musicFile4
    },
    {
      title: 'Wave on the beach',
      image: 'https://via.placeholder.com/150',
      link: musicFile5
    },
    {
      title: 'Loop by the sea',
      image: 'https://via.placeholder.com/150',
      link: musicFile6
    },
    {
      title: 'Nightingale Song',
      image: 'https://via.placeholder.com/150',
      link: musicFile7
    },
  ]
  ;

  const currentSong = songs[currentSongIndex];

  const playerRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
    setDuration(0);
  };

  const playPreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
    setDuration(0);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
    setDuration(progress.loadedSeconds);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    playerRef.current.seekTo(seekTime);
    setCurrentTime(seekTime);
  };

  const togglePlayAll = () => {
    setPlayAll(true);
    setIsPlaying(true);
    // setDuration(0);
    setCurrentTime(0);
  };

    // const handlePlayerReady = () => {
    //   setIsPlaying(true);
    // };

    const handlePlayerEnded = () => {
      playNextSong();
    };

    // const setInitialLikes = (index)=>{
    //   setMuiscLike((likes)=> [...likes,0]);
    // }

    useEffect(() => {
      // Initialize musicLike state once when the component mounts
      const initialLikes = songs.map(() => 0);
      setMuiscLike(initialLikes);
    }, []);



    const handelLike = (index)=>{
      setMuiscLike((likes)=>{
        return (
          likes.map((val,i)=>{
              if(i===index)
              {
                if(val===0)
                {
                  return 1;
                }
                return 0;
              }
              return val;
          })
        )
      })
    }


  return (
    <>
      <div className="audioPlayer">
        <center><h1>Welcome to Music</h1></center>
        <div className="music" id="music" style={{width:"100%"}}>
          {(!playAllBtn && !isPlaying)? 
          <div className="playAll">
            <button onClick={togglePlayAll} className="button-33">PlayAll</button>
          </div>
          :
          <div className="music-controls">
            <center>
              <div className="controls">
                <button className="prev" onClick={playPreviousSong}>{"|<"}</button>
                <button className="playPause" onClick={togglePlayPause}>{isPlaying ? '||' : '|>'}</button>
                <button className="next" onClick={playNextSong}>{">|"}</button>
              </div>
            <div className="progress-bar">
              <div className="current-time">{formatTime(currentTime)}</div>
              <input
                type="range"
                className="seek-bar"
                value={currentTime}
                max={duration}
                onChange={handleSeek}
              />
              <div className="duration">{formatTime(duration)}</div>
            </div>
            </center>
          </div>
        }
          <ReactPlayer
            ref={playerRef}
            url={currentSong.link}
            playing={isPlaying}
            onProgress={handleProgress}
            style={{display:'none'}}
            onEnded={handlePlayerEnded}
            // loop
            // config={{
            //   file: {
            //     attributes: {
            //       controlsList: 'nodownload', // Disable download option
            //       preload: 'auto', // Preload the video
            //     },
            //     tracks: [], // Disable subtitles
            //   },
            // }}
          />

          <div className="song-list">
            {songs.map((song, index) => (
              <div
                key={index}
                className={`song-item ${index === currentSongIndex ? 'active' : ''}`}
                onClick={() => {setCurrentSongIndex(index);
                  if(!isPlaying)
                  {
                    togglePlayPause();
                  }
                }}
              >
                {/* <img src={song.image} alt={song.title} /> */}
                <div>
                  <div className="song-title">{song.title}</div>
                  <div className="song-duration">{formatTime(duration)}m</div>
                </div>
                <div className="liked-song">
                  {
                    ((currentSongIndex==index) && isPlaying )?
                    
                    <div className="like_wave">
                      <div class="music-wave">
                        <div class="wave wave-1"></div>
                        <div class="wave wave-2"></div>
                        <div class="wave wave-3"></div>
                        <div class="wave wave-4"></div>
                        <div class="wave wave-5"></div>
                    </div>
                    <button className="like" onClick={()=> handelLike(index)}>{musicLike[index]===0?"🤍":"💗"}</button>
                    </div>
                  :
                  <button className="like" onClick={()=> handelLike(index)}>{musicLike[index]===0?"🤍":"💗"}</button>
                  
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AudioPlayer;