import React, { useEffect, useRef } from "react";
// import NetPlayer from "netplayer";

import Player from "@oplayer/core";
import ui from "@oplayer/ui";
import hls from "@oplayer/hls";

function VideoPlayer({ data }) {
  let autoQuality = data?.sources?.filter(
    (source) => source["quality"] == "default"
  );

  const playerContainerRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    if (playerRef.current) return;
    playerRef.current = Player.make(playerContainerRef.current, {
      source: {
        src: autoQuality[0].url,
        poster: ''
      },
      autoplay: true,
    })
      .use([
        ui({
          pictureInPicture: true,
          forceLandscapeOnFullscreen: true,
          autoFocus: true,
          screenshot: true,
          fullscreen: true,
          theme: { primaryColor: '#90ee90' },
          speed: ['2.0', '1.75', '1.25', '1.0', '0.75', '0.5'],
        }),
        hls(),
      ])
      .create()
  }, []);

  return (
    <div>
      <div className="w-full h-full p-0 m-0" ref={playerContainerRef} />
    </div>
  );
}

export default VideoPlayer;