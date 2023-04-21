import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

export const ProductDetails = () => {
  const { productId } = useParams();
  console.log("id is", productId);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, price, category, image, description } = product;

  useEffect(() => {
    // if (productId && productId !== "") {
    //   fetchProductDetails();
    // }

    if (productId && productId !== "") {
      console.log("YES WE GOT");
      fetchProductDetails();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((e) => console.log(e));
    console.log("product details", product);
    dispatch(selectedProduct(response.data));
  };

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>Loading....</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
