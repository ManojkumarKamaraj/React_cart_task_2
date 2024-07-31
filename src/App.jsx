import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

const App = () => {
  
  const data = [
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Fancy Product",
      price: " $40.00 - $80.00 ",
      text : "",
      rating: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Special Item",
      text : " $20.00 ",
      price: " $18.00 ",
      rating: true,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Sale Item",
      text : " $50.00 ",
      price: " $25.00 ",
      rating: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Popular Item",
      text : "",
      price: " $80.00 ",
      rating: true,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Sale Item",
      text : " $50.00 ",
      price: " $25.00 ",
      rating: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Fancy Product",
      text : "",
      price: " $120.00 - $280.00 ",
      rating: false,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Special Item",
      text : "$20.00",
      price: " $18.00 ",
      rating: true,
    },
    {
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item: "Popular Item",
      text : "",
      price: " $40.00 ",
      rating: true,
    },
  ];
  const[detail,setDetail]=useState(data)
  const [cart,setCart] = useState(0)
  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <Product detail={detail} setDetail={setDetail} cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default App;
