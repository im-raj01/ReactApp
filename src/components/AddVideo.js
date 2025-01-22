import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1year ago",
  channel: "coderDost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ dispatch, editableVideo}) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type: 'UPDATE', payload : video})
    }
    else{
      dispatch({type: 'ADD', payload : video})
    }
    e.stopPropagation();
    setVideo(initialState);
    // console.log(video)
  }
  function handleChange(e) {
    e.stopPropagation();
    console.log(e.target.name, e.target.value);
    setVideo({
      ...video,
      [e.target.name]: e.target.value, // state agle render me update hoti h
    });
    // console.log(video)
  }

  useEffect(() => {
    if(editableVideo){
    setVideo(editableVideo)
    }
    // console.log('effect')
  },[editableVideo])

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        placeholder="title"
        name="title"
        value={video.title}
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="views"
        name="views"
        value={video.views}
      />
      <button onClick={handleSubmit}>
        {editableVideo ?'Edit' : 'Add' }Video
        
        </button>
    </form>
  );
}
export default AddVideo;
