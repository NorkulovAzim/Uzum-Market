import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const DetailedPage = () => {
  const [month, setMonth] = useState(null);
  const { t } = useTranslation();
  const location = useLocation();
  const { cart, setCart } = useAppContext();

  const [product, setProduct] = useState(location.state?.product || null);

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
    }
  }, [location.state]);

  const InCart = product ? cart.find((p) => p.id === product.id) : null;

  const handleAddToCart = () => {
    if (product) {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const handleIncrement = () => {
    if (product) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        )
      );
    }
  };

  const handleDecrement = () => {
    if (product) {
      const updatedCart = cart
        .map((p) => (p.id === product.id ? { ...p, count: p.count - 1 } : p))
        .filter((p) => p.count > 0);
      setCart(updatedCart);
    }
  };

  if (!product) {
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

  return (
    <div className="container detailed-page">
      <div className="detailed-content">
        <div className="detail-payment">
          <div className="detailed-info">
            <h1>{product.title}</h1>
            <p className="description">{product.description}</p>
            <div className="price-info">
              {/* <p className="price">${product.price}</p>
            <p className="discount">${product.discountPercentage}</p> */}
              <p className="rating">
                <i className="fa-solid fa-star"></i> {product.rating}
                <span></span>
                <span>
                  ({product.stock} {t("detailed.inStock")})
                </span>
              </p>
            </div>

            <div className="detailed-image">
              <img
                className="main-image"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </div>

          <div className="payment-detail">
            <div className="pay-sum">
              <p>${product.price}</p>

              <p>
                {t("detailed.withoutuzum")} ${product.discountPercentage} -
                <span>${product.price}</span>
              </p>
            </div>

            <div className="credit-month">
              <div className="credit-button">
                <button onClick={() => setMonth(24)}>
                  24 {t("detailed.month")}
                </button>
                <button onClick={() => setMonth(12)}>
                  12 {t("detailed.month")}
                </button>
                <button onClick={() => setMonth(6)}>
                  6 {t("detailed.month")}
                </button>
                <button onClick={() => setMonth(3)}>
                  3 {t("detailed.month")}
                </button>
              </div>

              <p className="credit-price">
                {month
                  ? `$${(product.price / month).toFixed(2)} x ${month} oy`
                  : `$${product.price}`}
              </p>
            </div>

            <div className="buyOnclick">
              <button className="oneclickbuy">1 klikda sotib olish</button>
              <button className="liked-credit">
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>

            <div className="detailed-button-credit">
              {!InCart && (
                <button onClick={handleAddToCart} className="add-to-cart">
                  <i className="fa-solid fa-bag-shopping"></i>{" "}
                  {t("detailed.addToCart")}
                </button>
              )}

              {InCart && (
                <div className="incart">
                  <button onClick={handleDecrement}>-</button>
                  <span>{InCart.count}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
              )}
            </div>

            <div className="credit-info">
              <div className="credit-info-1">
                <i className="fa-solid fa-check"></i>
                <span>{t("detailed.lastone")}</span>
              </div>
              <div className="credit-info-2">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>
                  {t("detailed.thisweek")} {product.minimumOrderQuantity}{" "}
                  {t("detailed.boughtperson")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="sharhlar">{t("detailed.comments")}</h3>
        <div className="detailed-comments">
          <div className="comment-title">
            <i className="fa-solid fa-star"></i> {product.rating}
            <span>
              ({product.stock} {t("detailed.inStock")})
            </span>
          </div>
          <div className="detailed-review">
            {product.reviews.map((review, index) => (
              <p className="comment-1" key={index}>
                {review.comment} — <strong>{review.reviewerName}</strong>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
