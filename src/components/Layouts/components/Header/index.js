import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faKeyboard,
  faMagnifyingGlass,
  faMicrophone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../../../assets/images";
import { useRef, useState } from "react";
function Header() {
  const [searchText, setSearchtext] = useState("");
  const searchRef = useRef();
  return (
    <div id="header">
      <div className="header-logo">
        <FontAwesomeIcon
          className="header-logo-bars"
          icon={faBars}
          onClick={() => {
            let navLink = document.getElementsByClassName(
              "home-navigation-link"
            );
            let nav = document.querySelector("#navigation");

            for (let i of navLink) {
              i.classList.toggle("grid");
              i.classList.toggle("mount");
            }
            nav.classList.toggle("col-lg-2");
          }}
        />
        <a className="header-logo-img" href="/">
          <img src={images.logo} alt="Youtobe" />
        </a>
      </div>

      <div className="header-center">
        <form className="header-search-form" action="search" method="get">
          <input
            ref={searchRef}
            className="header-search-input"
            type="text"
            spellCheck="false"
            placeholder="Tìm kiếm..."
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <FontAwesomeIcon
            className="header-search-keboard-icon"
            icon={faKeyboard}
          />
          {
            // Hiển thị dấu x khi có chữ
            searchText && (
              <FontAwesomeIcon
                className="header-search-keboard-icon"
                icon={faXmark}
                onClick={() => {
                  setSearchtext("");
                  searchRef.current.focus();
                }}
              />
            )
          }
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <FontAwesomeIcon className="header-center-icon" icon={faMicrophone} />
      </div>
      <div className="header-end">
        <a className="header-end-icon-link" href="/">
          <img
            className="header-end-icon"
            src={images.cameraYtb}
            alt="camera"
          />
        </a>
        <a className="header-end-icon-link" href="/">
          <img className="header-end-icon" src={images.bellYtb} alt="bell" />
        </a>

        <img
          className="header-user-img"
          src="https://i.ytimg.com/vi/-E8Hm_Hpa74/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTndv5PVproR6tkwbfH7hJl80Z1w"
          alt="User"
        />
      </div>
    </div>
  );
}

export default Header;
