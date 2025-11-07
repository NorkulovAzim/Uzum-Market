import GooglePlay from "../assets/googleplay.svg";
import Instagram from "../assets/Instagram.svg";
import Telegram from "../assets/telegram.svg";
import YouTube from "../assets/youtube.svg";
import Facebook from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <div className="footer-nav">
            <a href="#">Biz haqimizda</a>
            <a href="#">Topshirish punktlari</a>
            <a href="#">Vakansiyalar</a>
          </div>

          <div className="footer-nav">
            <a href="#">Foydalanuvchilarga</a>
            <a href="#">Biz bilan bogʻlanish</a>
            <a href="#">Savol-Javob</a>
          </div>

          <div className="footer-nav">
            <a href="#">Tadbirkorlarga</a>
            <a href="#">Uzumda soting</a>
            <a href="#">Sotuvchi kabinetiga kirish</a>
          </div>

          <div className="footer-social">
            <p>Ilovani yuklab olish</p>
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
          <p>Uzum ijtimoiy tarmoqlarda</p>
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
            <p>©Maxfiylik kelishuvi</p>

            <p>Foydalanuvchi kelishuvi</p>
          </div>

          <div className="footer-text-2">
            <p>
              «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
              himoyalangan»
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
