import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useAppContext from "../hooks/useAppContext";

import LocationSvg from "../assets/location.svg";
import HeaderLogo from "../assets/header-logo.svg";
import CatalogImg from "../assets/catalog.svg";
import ProfileImg from "../assets/profile.svg";
import LikedImg from "../assets/Liked.svg";
import CartImg from "../assets/Cart.svg";
import UnionSvg from "../assets/union.svg";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { cart } = useAppContext();

  useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng); // tilni saqlaymiz
  };

  const uniqueProducts = [
    ...new Map(cart.map((item) => [item.id, item])).values(),
  ];
  const totalCount = uniqueProducts.length;

  return (
    <header>
      <div className="container">
        <div className="upper-header">
          <div className="location">
            <img src={LocationSvg} alt="" />
            <p>
              {t("header.city")} <a href="#">Toshkent</a>
            </p>
            <div className="order-place">
              <a href="#">Topshirish punktlari</a>
            </div>
          </div>

          <div className="status-bar">
            <p>{t("header.order")}</p>
          </div>

          <div className="faq-link">
            <a href="#">{t("header.faq")}</a>
            <a href="#">{t("header.myOrder")}</a>

            <select
              className="language-select"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="uz">🇺🇿 O'zbek tili</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </div>
        </div>

        <div className="header-content">
          <div className="logo">
            <NavLink to="/">
              <img src={HeaderLogo} alt="" />
            </NavLink>
          </div>

          <div className="catalog">
            <a href="#">
              <img src={CatalogImg} alt="" />
              {t("headerBottom.catalog")}
            </a>

            <div className="search-box">
              <input type="text" placeholder={t("headerBottom.inputSearch")} />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          <div className="cart-section">
            <a href="#">
              <img src={ProfileImg} alt="" />
              {t("headerBottom.LogIn")}
            </a>

            <a href="#">
              <img src={LikedImg} alt="" />
              {t("headerBottom.liked")}
            </a>

            <NavLink to="/cart" className="cart-link">
              <img src={CartImg} alt="Cart" />
              {t("headerBottom.cart")}
              {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
              )}
            </NavLink>
          </div>
        </div>

        <div className="header-category">
          <NavLink to="/">
            <img src={UnionSvg} alt="" />
            {t("headerNav.payment")}
          </NavLink>
          <NavLink to="/Elektronika">{t("headerNav.electronics")}</NavLink>
          <NavLink to="/Maishiy-texnika">{t("headerNav.household")}</NavLink>
          <NavLink to="/Kiyim">{t("headerNav.clothes")}</NavLink>
          <NavLink to="/Poyabzallar">{t("headerNav.shoes")}</NavLink>
          <NavLink to="/Aksessuarlar">{t("headerNav.accessories")}</NavLink>
          <NavLink to="/Go'zallik-va-parvarish">
            {t("headerNav.beauty")}
          </NavLink>
          <NavLink to="/Salomatlik">{t("headerNav.health")}</NavLink>
          <NavLink to="/Uy-roʻzgʻor buyumlari">
            {t("headerNav.homeNeeds")}
          </NavLink>
          <NavLink to="/Qurilish va taʼmirlash">
            {t("headerNav.construction")}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
