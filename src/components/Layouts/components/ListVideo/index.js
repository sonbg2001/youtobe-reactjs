import "./ListVideo.scss";
import dataFetch from "../../../../dataFetch";
import { Link } from "react-router-dom";
function ListVideo() {
  const listVideo = dataFetch.listVideo || [];
  return (
    <div className="grid">
        <ul className="video-list row">
          {listVideo.map((item) => {
            return (
              <li key={item.id} className="video-list-item col col-lg-3">
                <Link to={"/watch/" + item.ytbId}
                  className="video-list-item--link"
                >
                  <img
                    className="video-list-item-img col-lg-12"
                    src={"https://i.ytimg.com/vi/" + item.ytbId + "/hq720.jpg"}
                    alt="img"
                  ></img>

                  <h2>Heading</h2>
                  <p>Tac gia</p>
                  <div>
                    <p>Tac gia</p>
                    <p>Tac gia</p>
                  </div>
                </Link>
              </li>
            );
          })}
          
        </ul>
      </div>
  );
}

export default ListVideo;
