import React from "react";
import NetPlayer from "netplayer";

function Player({ data }) {
  console.log(data);
  let autoQuality = data?.sources?.filter(
    (source) => source["quality"] == "default"
  );
  return (
    <div>
      <NetPlayer
        className="object-contain w-full h-full text-white"
        autoPlay
        sources={[
          {
            file: autoQuality == null ? "" : autoQuality[0].url,
          },
        ]}
      />
      ;
    </div>
  );
}

export default Player;
