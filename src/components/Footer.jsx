import GooglePlay from "../assets/googleplay.svg";
import Instagram from "../assets/Instagram.svg";
import Telegram from "../assets/telegram.svg";
import YouTube from "../assets/youtube.svg";
import Facebook from "../assets/facebook.svg";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <div className="footer-nav">
            <a href="#">{t("footer.about")}</a>
            <a href="#">{t("footer.delivery")}</a>
            <a href="#">{t("footer.vacancies")}</a>
          </div>

          <div className="footer-nav">
            <a href="#">{t("footer.toUsers")}</a>
            <a href="#">{t("footer.contactUs")}</a>
            <a href="#">{t("footer.terms")}</a>
          </div>

          <div className="footer-nav">
            <a href="#">{t("footer.entrepreneurs")}</a>
            <a href="#">{t("footer.sellOnUzum")}</a>
            <a href="#">{t("footer.adminPanel")}</a>
          </div>

          <div className="footer-social">
            <p>{t("footer.application")}</p>
            <div className="social-icons">
              <a href="#">
                <i className="fa-brands fa-apple"></i>
                AppStore
              </a>

              <a href="#">
                <img src={GooglePlay} alt="Google Play" />
                Google Play
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer.socialMedia")}</p>
          <div className="footer-smm">
            <a href="#">
              <img src={Instagram} alt="" />
            </a>

            <a href="#">
              <img src={Telegram} alt="" />
            </a>

            <a href="#">
              <img src={YouTube} alt="" />
            </a>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="footer-text">
            <p>{t("footer.copyright")}</p>

            <p>{t("footer.terms")}</p>
          </div>

          <div className="footer-text-2">
            <p>{t("footer.privacy")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
