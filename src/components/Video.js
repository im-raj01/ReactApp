import { useContext } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
function Video({ title, channel, views, time, verified, id, children,dispatch ,editVideo}) {
  // console.log(title)
  // bgColor = 'blue';
  // let channelJSX;
  // if(verified){
  //     channelJSX =   <div className='channel'>{channel} ✅</div>
  // }
  // else{
  //     channelJSX = <div className='channel'>{channel} </div>
  // }
  console.log("render Video");
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={`container ${theme}`}>
        <button className="close" onClick={() => dispatch({type: 'DELETE', payload : id})}>X</button>
        <button className="edit" onClick={() => editVideo(id)}>Edit</button>

        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/200/300`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title"> {title} Tutorial - Component</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
