import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct } from "../redux/actions/productActions";

const ProductComponent = () => {
  // useSelector  can access the state from any component
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return products.map((item) => (
    <div key={item.id}>
      <Link to={`/product/${item.id}`}>
        <div className="four column wide">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content">
                <div className="header">{item.title}</div>
                <div className="meta price"> ${item.price}</div>
                <div className="meta">{item.category}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
};

export default ProductComponent;
