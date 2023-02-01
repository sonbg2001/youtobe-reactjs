import "./home.scss";
import Navigation from "../../components/Layouts/components/Navigation";
import ListVideo from "../../components/Layouts/components/ListVideo";
function Home() {
  return (
    <div className="grid">
      <div className="row">
        <Navigation />
        <div className="col-10">
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
          <ListVideo />
        </div>
      </div>
    </div>
  );
}

export default Home;
