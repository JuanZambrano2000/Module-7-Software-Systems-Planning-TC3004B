import React, { useState } from "react";
import Video from "./Video";
import Menu from "./Menu";
import videoFast from "./videos/react_video-fast.mp4";
import videoSlow from "./videos/react_video-slow.mp4";
import videoCute from "./videos/react_video-cute.mp4";
import videoEek from "./videos/react_video-eek.mp4";

const VIDEOS = {
  fast: videoFast,
  slow: videoSlow,
  cute: videoCute,
  eek: videoEek,
};

function App() {
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  };

  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideoHandler} />
      <Video src={src} />
    </div>
  );
}

export default App;
