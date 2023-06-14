import "./product.css";
import "../products.css";

function Product({ title, paragraph, imgSrc }) {
  return (
    <div className="product__container">
      <h3 className="product__header01">{title}</h3>
      <span className="line"></span>
      <p>{paragraph}</p>
      <img src={imgSrc} alt="Product Image" />
    </div>
  );
}

export default Product;
