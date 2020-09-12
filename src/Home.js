import React from "react";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="12321"
            title="Oculus Rift S PC-Powered VR Gaming Headset 
                    Oculus touch controllers: arm yourself with our updated Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic Precision, transporting your hands and gestures right into the game. 
                    "
            price={299.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71vFBR0SMRL._SX522_.jpg"
          />{" "}
          <Product
            id="12321"
            title="
                    Apple iPhone 11 Pro (64GB, Midnight Green) [Locked] + Carrier Subscription"
            price={879.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81mxun+6pEL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321"
            title="RUNMUS Stereo Gaming Headset"
            price={70.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX679_.jpg"
          />
          <Product
            id="12321"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI 
                    Upto 250 hours of battery life"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY741_.jpg"
          />
          <Product
            id="12321"
            title="Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM) 
                     
                    "
            price={180}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/814poe%2BIDsL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321"
            title="boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Raging Red, On the Ear)"
            price={40}
            rating={1}
            image="https://rukminim1.flixcart.com/image/416/416/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70"
          />
          <Product
            id="12321"
            title="AMD Ryzen 5 3600X 6-Core, 12-Thread Unlocked Desktop Processor "
            price={219}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/616i5Il16qL._AC_SL1000_.jpg"
          />
          <Product
            id="12321"
            title="Samsung Gear S3 Frontier Smartwatch (Bluetooth)"
            price={399}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg
"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321"
            title="USB 3.0 Universal Laptop Docking Station, Acodot Dual Monitor Dock Support Windows Equipped with Dual HDMI and DVI/VGA, Gigabit Ethernet, Audio, 6 USB Ports 
            "
            price={40}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/616Vux27VAL._AC_SL1500_.jpg
            "
          />
          <Product
            id="12321"
            title="Digital alarm clock with a 0.7-inch green LED display for easily checking the time at a glance
            "
            price={219}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
          />
          <Product
            id="12321"
            title="Dash Mini Maker: The Mini Waffle Maker Machine for Individual Waffles, Paninis, Hash browns, & other on the go Breakfast, Lunch, or Snacks - Red
            "
            price={399}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SL1500_.jpg

"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321"
            title="Instant Pot Lux 6-in-1 Electric Pressure Cooker, Sterilizer Slow Cooker, Rice Cooker, Steamer, Saute, and Warmer"
            price={40}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61IzKouqj1L._AC_SL1500_.jpg
            "
          />
          <Product
            id="12321"
            title="Crayola Colored Pencils, Long, 23-Pack, Multicolor 
            COLORED PENCIL SET: Includes 36 Crayola Colored Pencils "
            price={9}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81Vje4dOoKL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
