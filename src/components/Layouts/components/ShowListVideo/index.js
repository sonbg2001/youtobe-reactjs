import ListVideo from "../ListVideo";
import "./ShowListVideo.scss";
// import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripHorizontal, faList } from "@fortawesome/free-solid-svg-icons";
function ShowListVideo() {
  return (
    <section className="show-list-video">
      <div className="show-list-video-component">
        <div className="show-list-video__header">
          <h1 className="show-list-video__header--heading">Hôm nay</h1>
          <div className="show-list-video__header--manager">
            <a href="/" className="show-list-video__header--manager__link">
              Quản lý
            </a>
            <FontAwesomeIcon
              className="show-list-video__header-icon"
              icon={faGripHorizontal}
            />
            <FontAwesomeIcon
              className="show-list-video__header-icon"
              icon={faList}
            />
          </div>
        </div>
        <ListVideo />
      </div>
      <div className="show-list-video__separate">video__separate</div>

      <div className="show-list-video-component">
        <div className="show-list-video__header">
          <h1 className="show-list-video__header--heading">Hôm qua</h1>          
        </div>
        <ListVideo />
      </div>
      <div className="show-list-video__separate">video__separate</div>
      <div className="show-list-video-component">
        <div className="show-list-video__header">
          <h1 className="show-list-video__header--heading">Tuần này</h1>          
        </div>
        <ListVideo />
      </div>

      <div className="show-list-video__separate">video__separate</div>
      <div className="show-list-video-component">
        <div className="show-list-video__header">
          <h1 className="show-list-video__header--heading">Tháng này</h1>          
        </div>
        <ListVideo />
      </div>


      <div className="show-list-video__separate">video__separate</div>
      <div className="show-list-video-component">
        <div className="show-list-video__header">
          <h1 className="show-list-video__header--heading">Cũ hơn</h1>          
        </div>
        <ListVideo />
      </div>
    </section>
  );
}

export default ShowListVideo;
