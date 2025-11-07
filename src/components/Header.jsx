import { Link, NavLink } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";

import LocationSvg from "../assets/location.svg";
import UzbFlag from "../assets/uzb.svg";
import HeaderLogo from "../assets/header-logo.svg";
import CatalogImg from "../assets/catalog.svg";
import ProfileImg from "../assets/profile.svg";
import LikedImg from "../assets/Liked.svg";
import CartImg from "../assets/cart.svg";
import UnionSvg from "../assets/union.svg";

const Header = () => {
  const { cart } = useAppContext();

  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <header>
      <div className="container">
        <div className="upper-header">
          <div className="location">
            <img src={LocationSvg} alt="" />
            <p>
              Shahar: <a href="#">Toshkent</a>
            </p>
            <div className="order-place">
              <a href="#">Topshirish punktlari</a>
            </div>
          </div>

          <div className="status-bar">
            <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
          </div>

          <div className="faq-link">
            <a href="#">Savol-javoblar</a>
            <a href="#">Buyurtmalarim</a>
            <a className="lang" href="#">
              <img src={UzbFlag} alt="" />
              Оʻzbekcha
            </a>
          </div>
        </div>

        <div className="header-content">
          <div className="logo">
            <a href="#">
              <img src={HeaderLogo} alt="" />
            </a>
          </div>

          <div className="catalog">
            <a href="#">
              <img src={CatalogImg} alt="" />
              Katalog
            </a>

            <div className="search-box">
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
              />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          <div className="cart-section">
            <a href="#">
              <img src={ProfileImg} alt="" />
              Kirish
            </a>

            <a href="#">
              <img src={LikedImg} alt="" />
              Saralangan
            </a>

            <a href="#" className="cart-link">
              <img src={CartImg} alt="Cart" />
              Savat
              {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
              )}
            </a>
          </div>
        </div>

        <div className="header-category">
          <NavLink to="/">
            <img src={UnionSvg} alt="" />
            Muddatli to'lov
          </NavLink>
          <NavLink to="/Elektronika">Elektronika</NavLink>
          <NavLink to="/Maishiy-texnika">Maishiy texnika</NavLink>
          <NavLink to="/Kiyim">Kiyim</NavLink>
          <NavLink to="/Poyabzallar">Poyabzallar</NavLink>
          <NavLink to="/Aksessuarlar">Aksessuarlar</NavLink>
          <NavLink to="/Go'zallik-va-parvarish">Goʻzallik va parvarish</NavLink>
          <NavLink to="/Salomatlik">Salomatlik</NavLink>
          <NavLink to="/Uy-roʻzgʻor buyumlari">Uy-roʻzgʻor buyumlari</NavLink>
          <NavLink to="/Qurilish va taʼmirlash">Qurilish va taʼmirlash</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
