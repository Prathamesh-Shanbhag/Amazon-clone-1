import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { motion } from "framer-motion";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="checkout">
      <div classNames="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
          alt=""
        />

        <div>
          <h3>
            Hello,{" "}
            <strong>
              {user
                ? `${user.displayName !== null ? user.displayName : user.email}`
                : "Guest"}
            </strong>
          </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{
                scale: 1.2,
                rotate: 0,
                borderRadius: "1%",
              }}
            >
              
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
