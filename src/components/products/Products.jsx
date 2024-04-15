import Product from "../product/Product";
const Products = ({ products }) => {
    return (
      <div>
        {products.map((productName, index) => (
          <Product key={index} productName={productName}/>
        ))}
      </div>
    );
  };
export default Products;