import "./home.scss";
import ListVideo from "../../components/Layouts/components/ListVideo";
function Home() {
  return (
    <div className="home-container">
      <div className="home-category-container">
        <ul className="home-category">
          <li>
            <button className="home-category-button active">Tất cả</button>
          </li>
          <li>
            <button className="home-category-button">Âm nhạc</button>
          </li>
          <li>
            <button className="home-category-button">Danh sách kết hợp</button>
          </li>
          <li>
            <button className="home-category-button">Trò chơi</button>
          </li>
          <li>
            <button className="home-category-button">Trực tiếp</button>
          </li>
          <li>
            <button className="home-category-button">Văn học</button>
          </li>
        </ul>
      </div>

      <div className="home-list-video-container">
        <ListVideo />
        <ListVideo />
        <ListVideo />
      </div>
    </div>
  );
}

export default Home;
