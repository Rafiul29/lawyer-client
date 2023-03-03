import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import SectionTitle from "./SectionTitle";


const Cart = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const getAllUser = async () => {
      const res = await fetch(
        "http://35.77.46.232:8080/admin/service-providers"
      );
      const json=await res.json()
        if(res.ok){
          setCartItem(json)
        }
    };
    getAllUser()
  },[]);

  return (
    <div className="cart container mx-auto py-10">
      <SectionTitle title="Clients rate Legal Consultants Rating 4.8/5 based on 3,522 client reviews" />
      <div className="cart-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 gap-4">
        {cartItem.map((cart) => (
          <CartItem key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
