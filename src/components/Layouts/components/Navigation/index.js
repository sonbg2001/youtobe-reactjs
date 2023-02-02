import "./Navigation.scss";
import { Link } from "react-router-dom";
import images from "../../../../assets/images";
function Navigation() {
  let checkNavs = {
    home: false,
    shorts: true,
    subscribe: true,
    library: true,
  };
  const handleNavClick = (e) => {
    var navLinks = document.getElementsByClassName("home-navigation-link");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function () {
        var current = document.getElementsByClassName(
          "home-navigation-link active"
        );
        current[0].classList.toggle("active");

        this.classList.add("active");
      });
      if (navLinks[i].classList.contains("active")) {
        checkNavs.home = i === 0 ? false : true;
        checkNavs.shorts = i === 1 ? false : true;
        checkNavs.subscribe = i === 2 ? false : true;
        checkNavs.library = i === 3 ? false : true;
      }
    }
  };
  handleNavClick();
  return (
    <div id="navigation" className="home-navigation col-lg-2">
      <Link to="/" className="home-navigation-link active ">
        <img
          width={24}
          src={checkNavs.home ? images.houseYtb : images.houseYtbActive}
          alt="Trang chu"
        />
        <p>Trang chủ</p>
      </Link>
      <Link to="/shorts" className="home-navigation-link">
        <img
          width={24}
          src={checkNavs.shorts ? images.shorts : images.shortsYtbActive}
          alt="Shorts"
        />
        <p>Shorts</p>
      </Link>
      <Link to="/subscribe" className="home-navigation-link">
        <img
          width={24}
          src={
            checkNavs.subscribe
              ? images.subscribeYtb
              : images.subscribeYtbActive
          }
          alt="Subscribe"
        />
        <p>Đăng ký</p>
      </Link>
      <Link to="/library" className="home-navigation-link">
        <img
          width={24}
          src={checkNavs.library ? images.libraryYtb : images.libraryYtbActive}
          alt="Library"
        />
        <p>Thư viện</p>
      </Link>
    </div>
  );
}

export default Navigation;
