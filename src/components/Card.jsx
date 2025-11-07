import useAppContext from "../hooks/useAppContext";

const Card = ({ product }) => {
  const { setCart, cart } = useAppContext();
  const InCart = cart.find((p) => p.id === product.id);

  const handleAddToCart = () => {
    setCart([...cart, { ...product, count: 1 }]);
  };

  const handleIncrement = () => {
    setCart(
      cart.map((p) => (p.id === product.id ? { ...p, count: p.count + 1 } : p))
    );
  };

  const handleDecrement = () => {
    const updatedCart = cart
      .map((p) => (p.id === product.id ? { ...p, count: p.count - 1 } : p))
      .filter((p) => p.count > 0);
    setCart(updatedCart);
  };

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-info">
        <p className="price">${product.discountPercentage}</p>
        <p className="discount">${product.price}</p>
        <h3>{product.title}</h3>

        <div className="card-bottom">
          <p className="rating">
            <i className="fa-solid fa-star"></i> {product.rating}
          </p>
          <p>({product.stock} sharhlar)</p>
        </div>

        {!InCart && (
          <button onClick={handleAddToCart} className="add-to-cart">
            <i className="fa-solid fa-bag-shopping"></i> Ertaga
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
    </div>
  );
};

export default Card;
