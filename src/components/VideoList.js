import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({videos,dispatch,editVideo}){
    return (
        <>
        {videos.map((it) => (
            <Video
              key={it.id}
              title={it.title}
              views={it.views}
              time={it.time}
              channel={it.channel}
              verified={it.verified}
              id={it.id}
        
              editVideo = {editVideo}
              dispatch={dispatch}
            >
              <PlayButton
                onPlay={() => console.log("playyyy", it.title)}
                onPause={() => console.log("pause", it.title)}
              >
                {it.title}
              </PlayButton>
            </Video>
          ))}

          </>
    )
}
export default VideoList;