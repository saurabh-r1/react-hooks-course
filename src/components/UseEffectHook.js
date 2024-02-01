import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [productList, setProductList] = useState([]);

  const fetchAllProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) {
        setProductList(result.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (count === 5) {
        fetchAllProduct();
    } 
  }, [count]);

  
 
  useEffect(() => {
    if (count === 5) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  }, [count]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <hr />
      <p>Count is {count} </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      {showText ? <p>Text is visible</p> : null}
      <hr />

      <ul>
        {productList && productList.length > 0
          ? productList.map((item) => <li> {item.title}</li>)
          : null}
      </ul>
    </div>
  );
}
