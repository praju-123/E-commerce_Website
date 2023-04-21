import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

export const ProductDetails = () => {
  const { productId } = useParams();
  console.log("id is", productId);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((e) => console.log(e));
    console.log("product details", response);
    dispatch(selectedProduct(response.data));
  };

  return <div>ProductDetails</div>;
};
