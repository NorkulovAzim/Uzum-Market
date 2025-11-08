import { OrbitProgress } from "react-loading-indicators";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useMemo } from "react";
import "react-loading-skeleton/dist/skeleton.css";

import "swiper/css";
import "swiper/css/navigation";

import MainBanner from "../assets/main-banner.svg";
import SecondBanner from "../assets/second-banner.jpg";
import ThirdBanner from "../assets/third-banner.jpg";
import Banner4 from "../assets/4banner.jpg";

import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import useAppContext from "../hooks/useAppContext";

const banners = [MainBanner, SecondBanner, ThirdBanner, Banner4];

const HomePage = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");

  console.log(isLoading, data, error);

  const { cart } = useAppContext();

  const TotalPrice = useMemo(() => {
    const total = cart.reduce((acc, currVal) => {
      acc += currVal.count * currVal.price;
      return acc;
    }, 0);
    return total;
  }, [cart]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <OrbitProgress
          color="rgb(104, 0, 174)"
          size="large"
          text="SABR..."
          textColor="rgb(104, 0, 174)"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message container">
        ❌ Xatolik yuz berdi: {error}
      </div>
    );
  }

  return (
    <main>
      <div className="container">
        <div className="total-price">
          <p>To'lov uchun: $ {TotalPrice}</p>
        </div>
        <div className="ad-banner">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="mySwiper"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <img src={banner} alt={`Banner ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="sale-products">
          <a href="#">
            Arzon narxlar
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="products">
          {data?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <div className="more-products">
          <button>Yana koʻrsatish 20</button>
        </div>

        <a className="back-to-top" href="#">
          <i
            className="fa-solid fa-arrow-up scroll-top"
            style={{
              top: "90%",
              right: "50px",
              fontSize: "1rem",
            }}
          ></i>
        </a>
      </div>
    </main>
  );
};

export default HomePage;
