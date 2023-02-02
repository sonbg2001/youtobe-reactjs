import "./watch.scss";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";
function Watch() {
  let { ytbId } = useParams();
  return (
    <div id="watch">
      <div className="watch-video-container">
        <Iframe
          className="watch-video"
          // width="100%" height="100%"
          url={"http://www.youtube.com/embed/" + ytbId + "?autoplay=1&mute=1"}
        />
        <h1>ALL IN ONE </h1>
      </div>
      <div className="watch-list-video">
        <h1>Tất cả các video</h1>
      </div>
    </div>
  );
}

export default Watch;
