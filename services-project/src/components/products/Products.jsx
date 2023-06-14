import Product from "./product/Product";
import "./products.css";

function Products() {
  return (
    <div className="container">
      <h3 className="product__header01">Take a look at</h3>
      <h3 className="product__header02">our products</h3>
      <div className="products__container">
        <Product
          title="Via"
          paragraph="Business travel automatization software."
          imgSrc="Group1098.png"
        />
        <Product
          title="Shift"
          paragraph="Central base of transfered mobile and fixed numbers."
          imgSrc="Group1911.png"
        />
      </div>
    </div>
  );
}

export default Products;
