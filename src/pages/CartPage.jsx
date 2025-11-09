import React, { useMemo } from "react";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { t } = useTranslation();

  const { cart, setCart } = useAppContext();

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.count, 0),
    [cart]
  );

  const totalOldPrice = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.discountPercentage * item.count, 0),
    [cart]
  );

  const totalProducts = cart.length;

  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-title">
          <h2>
            {t("cart.yourCart")},{" "}
            <span>
              {totalProducts} {t("cart.yourProduct")}
            </span>
          </h2>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <p className="cart-empty">
              <i className="fa-solid fa-cart-shopping"></i>{" "}
              {t("cart.emptyCart")} :(
            </p>
          ) : (
            <div className="cart-wrap">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="cart-info">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <p>
                      {t("cart.quantity")}: {item.count}
                    </p>
                  </div>
                  <div className="cart-count">
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span className="count">{item.count}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="cart-total">
            <h3>{t("cart.yourOrder")}</h3>
            <p className="products-total">
              {t("cart.allProducts")}: {totalProducts} {t("cart.ta")}
            </p>
            <div className="cart-total-item">
              <p>
                {t("cart.noDiscount")}:{" "}
                <span className="old-price">${totalOldPrice}</span>
              </p>
              <p>
                {t("cart.total")}: ${totalPrice}
              </p>
            </div>
            <button>{t("cart.pay")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
