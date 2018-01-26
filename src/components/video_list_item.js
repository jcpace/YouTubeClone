import React from 'react';

const VideoListItem = ({ video }) => {
  // const video = props.video; syntax in function parameter is same as this line. It's basically saying that within the props obect,
  // there is a property video. Make a variable of that with name of video.
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} alt="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading" />
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
