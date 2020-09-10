import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <Link className="header__image" to="/profile">
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
      <div calssName="header__option">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello,{" "}
              {user
                ? `${user.displayName !== null ? user.displayName : user.email}`
                : "Guest"}
            </span>
            <span className="headerd__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& orders</span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasket />
          <div className="header__basketCount">{basket?.length}</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
