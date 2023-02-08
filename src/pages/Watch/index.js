import "./watch.scss";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import ListVideo from "../../components/Layouts/components/ListVideo";
function Watch() {
  // const [ytbId, setYtbId] = useState(useParams().ytbId);
  let ytbId = useParams().ytbId;
  const [video, setVideo] = useState("Nguen ");

  useLayoutEffect(() => {
    const getData = async () => {
      await axios
        .get(
          "https://www.googleapis.com/youtube/v3/videos?id=" +
            ytbId +
            "&key=AIzaSyDAwphqglBXUoB8Iip0RalyqvaHjkSq0Ls&part=snippet,statistics&fields=items(id,snippet,statistics)"
        )
        .then((res) => {
          if(res.data.items.length>0)
            setVideo(res.data.items[0]);
          console.log(res.data.items[0].snippet);
          console.log("video", video);

          return video;
        })

        .catch((error) => console.log(error));
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div id="watch">
      <div className="watch-video-container">
        <Iframe
          className="watch-video"
          // width="100%" height="100%"
          url={"http://www.youtube.com/embed/" + ytbId + "?autoplay=1&mute=1"}
        />
        <h3>{video.snippet && video.snippet.title}</h3>
        <h2>{video.snippet && video.snippet.title} </h2>
        <div className="author">
          <img
            id="img"
            alt=""
            width="40"
            src="https://yt3.ggpht.com/ytc/AL5GRJWEtIdCmnCSiutvh6KenKDYlv1PGNCBNGEaeah47Q=s48-c-k-c0x00ffffff-no-rj"
          />
          <h2>{video.snippet && video.snippet.channelTitle}</h2>
          <p>So nguoi dang ky</p>

          <div>
            <button>Tham gia</button>
            <button>Dang ky</button>
          </div>
          <h1>{video.snippet && video.snippet.description}</h1>
        </div>

        <div id="comment">
          <div className="comment-header">
            <h3>Số lượng bình luận</h3>
            <div>
              <i>icon</i>
              <label>Sap xep theo</label>
            </div>
          </div>
          <div className="comment-content">
            <ul>
              <li>comment something?</li>
              <li>comment something?</li>
              <li>comment something?</li>
              <li>comment something?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="watch-list-video">
        Danh sách video
        <ListVideo />
      </div>
    </div>
  );
}

// Watch = function () {
//   return (  );
// }

export default Watch;
