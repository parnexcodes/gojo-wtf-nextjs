import React, { useEffect, useRef } from "react";
import { Player as VimePlayer, Video, Hls, DefaultUi } from "@vime/react";

function VideoPlayer({ data }) {
  let autoQuality = data?.sources?.filter(
    (source) => source["quality"] == "default"
  );

  return (
    <div>
      {data ? (
        <VimePlayer theme="dark" style={{ "--vm-player-theme": "#84cc16" }}>
          <Hls crossOrigin>
            <source data-src={autoQuality[0].url} type="application/x-mpegURL" />
          </Hls>
          <DefaultUi />
        </VimePlayer>
      ) : (
        <div className="flex justify-center">
          <svg
            className="fill-gray-300 h-9 w-9"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fillRule="nonzero"
                d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
          <p className="text-3xl text-gray-300 font-sans pl-2">
            No Stream Found ...
          </p>
          <p className="font-light text-gray-300 font-sans">Our API might be down, refresh few times.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
