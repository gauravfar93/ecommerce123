import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const CategoryProducts = () => {
  //getting id through params.
  const { name } = useParams();
  //saving the data here in products array
  const [products, setProducts] = useState([]);

  //Fteching data here throgh name here 
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProduct();
  }, []);
  //Passing condition here that if products is no more then sown loading
  if(products.length === 0 ) return <div>Loading...</div>

  return (
    <div>
    <ProductCard products={products}/>
  </div>
  )
};

export default CategoryProducts;
