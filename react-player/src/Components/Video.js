import React from "react";
import ReactPlayer from "react-player";

export default function Video()
{
    const vid='https://www.youtube.com/watch?v=kCgn-7NBPSs&list=WL&index=3&t=1s&ab_channel=PIRATEKING'
    return(
        <ReactPlayer url={vid}
            playing={false}
            volume={0.5}
        />
    );
};