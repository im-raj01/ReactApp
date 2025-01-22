import { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/ThemeContext";
function PlayButton({ message, children, onPlay, onPause }) {
  // let playing = false; //Dont use this approach
  console.log("render PlayButton");

  const theme = useContext(ThemeContext)

  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // console.log(e)
    e.stopPropagation();
    // e.preventDefault();
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    // playing = !playing;
    setPlaying(!playing);
  }
  return (
    // <button onClick={()=>console.log('play')}>Play</button>
    <button className={theme} onClick={handleClick}>
      {children} :{playing ? "⏸️" : "⏯️"}
    </button>
  );
}

export default PlayButton;
