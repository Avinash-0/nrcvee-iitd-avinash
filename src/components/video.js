import React, { Component } from "react";
import video1 from "../nrc_videoes/VID-20190101-WA0007.mp4";
import video2 from "../nrc_videoes/VID-20190814-WA0019.mp4";
import video3 from "../nrc_videoes/VID-20191012-WA0003.mp4";

class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} />
        <video src={video2} />
        <video src={video3} />
      </div>
    );
  }
}

export default Video;