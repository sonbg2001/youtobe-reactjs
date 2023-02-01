import images from "../../../../assets/images";
function Navigation() {
  return (
    <div className="home-navigation col-2">
      {/* <ul className="grid">
        <li>
          <a href="/">
            <img
              src={false ? images.houseYtb : images.houseYtbActive}
              alt="Trang chu"
            />
            <h1>Trang chủ</h1>
          </a>
        </li>
        <li>
        <img src={true ? images.shorts : images.shortsYtbActive} alt="Shorts" />
        <h1>Shorts</h1>
        </li>

      </ul> */}

      <a href="/" className="home-navigation-link grid">
        <img
          src={false ? images.houseYtb : images.houseYtbActive}
          alt="Trang chu"
        />
        <p>Trang chủ</p>
      </a>
      <a href="/" className="home-navigation-link grid">
        <img src={true ? images.shorts : images.shortsYtbActive} alt="Shorts" />
        <p>Shorts</p>
      </a>
      <a href="/" className="home-navigation-link grid">
        <img
          src={true ? images.subscribeYtb : images.subscribeYtbActive}
          alt="Shorts"
        />
        <p>Đăng ký</p>
      </a>
      <a href="/" className="home-navigation-link grid">
        <img
          src={true ? images.libraryYtb : images.libraryYtbActive}
          alt="Shorts"
        />
        <p>Thư viện</p>
      </a>
    </div>
  );
}

export default Navigation;
