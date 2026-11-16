import "./productcard.css";

const ProductCard = (props) => {
  const { title, category, price, images } = props.element;

  return (
    <div className="card">
      <div className="profile">
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <div>{title}</div>
        <div>{category}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
