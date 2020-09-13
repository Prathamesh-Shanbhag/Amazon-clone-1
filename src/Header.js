import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";




function Header() {
  

  

  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    
    <div className="header">
      <Link to="/" classname="header__link">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 0 }}
        whileTap={{
          scale: 0.8,
          rotate: 0,
        }}
      >
        <Link className="header__image header__link" to="/profile">
          <img
            src={
              user
                ? `${
                    user?.photoURL !== null
                      ? user?.photoURL
                      : "https://st.depositphotos.com/1052233/2815/v/450/depositphotos_28158459-stock-illustration-male-default-profile-picture.jpg"
                  }`
                : "https://st.depositphotos.com/1052233/2815/v/450/depositphotos_28158459-stock-illustration-male-default-profile-picture.jpg"
            }
          />
        </Link>
      </motion.div>
      <div calssName="header__option">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 0 }}
          whileTap={{
            scale: 0.8,
            rotate: 0,
          }}
        >
          <Link to={!user && "/login"} className="header__link">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello,{" "}
                {user
                  ? `${
                      user.displayName !== null ? user.displayName : user.email
                    }`
                  : "Guest"}
              </span>
              <span className="headerd__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 0 }}
        whileTap={{
          scale: 0.8,
          rotate: 0,
        }}
      >
        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 0 }}
        whileTap={{
          scale: 0.8,
          rotate: 0,
        }}
      >
        <Link to="/profile" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Profile</span>
          </div>
        </Link>{" "}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 0 }}
        whileTap={{
          scale: 0.8,
          rotate: 0,
        }}
      >
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <div className="header__basketCount">{basket?.length}</div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Header;
