import React, { useEffect, useRef } from "react";
import NetPlayer from "netplayer";

import Player from "@oplayer/core";
import ui from "@oplayer/ui";
import hls from "@oplayer/hls";

function VideoPlayer({ data }) {
  let autoQuality = data?.sources?.filter(
    (source) => source["quality"] == "default"
  );

  const playerContainerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) return;
    playerRef.current = Player.make(playerContainerRef.current, {
      source: {
        src: autoQuality[0].url,
        poster: ''
      },
      autoplay: true
    })
      .use([
        ui({
          pictureInPicture: true,
        }),
        hls(),
      ])
      .create()
      .on(["error", "pluginerror"], ({ type, payload }) => {
        if (payload?.fatal) {
          setSourceIndex(sourceIndex + 1);
        }
      });
  }, []);

  return (
    <div>
      <div className="w-full h-full p-0 m-0" ref={playerContainerRef} />
    </div>
  );
}

export default VideoPlayer;
