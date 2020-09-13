import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { motion } from "framer-motion";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <strong>Order ID : </strong>
        <small> {order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <motion.div
          initial={{ scale: .5 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 70,
          }}
        >
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
              price={item.price}
              rating={item.rating}
              hideButton
            />
          </motion.div>
        </motion.div>
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
