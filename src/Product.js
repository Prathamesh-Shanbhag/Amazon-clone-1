import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

function Product({ id, title, image, price, rating }) {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
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
    <div className="product">
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 250,
        }}
      >
        <animated.div style={fade} className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p className="product__ratingStar">⭐</p>
              ))}
            <p></p>
          </div>
        </animated.div>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{
            scale: 2,
            zindex: 1,
            rotate: -720,
            borderRadius: "10%",
            
          }}
        >
          <img className="product__img item" src={image} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 0 }} whileTap={{ scale: 0.9 }}>
          <button className="product__button" onClick={addtoBasket}>
            Add to Cart
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Product;
