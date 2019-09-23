import React from "react";
import "./OrderSummary.css";

const mockData = [
  {
    name: "Play Station 4 Pro",
    qty: 2,
    image:
      "https://media.playstation.com/is/image/SCEA/playstation-4-pro-vertical-product-shot-01-us-07sep16?$native_t$",
    price: "$6,500.00"
  },
  {
    name: "Marvel's Spiderman for PS4",
    qty: 1,
    image:
      "https://i11d.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg",
    price: "$1,100.00"
  },
  {
    name: "Red Dead Redemption 2",
    qty: 1,
    image:
      "https://media.gamestop.com/i/gamestop/10138091/Red-Dead-Redemption-2",
    price: "$1,050.00"
  },
  {
    name: "God of War",
    qty: 1,
    image: "https://media.gamestop.com/i/gamestop/10131619/God-of-War",
    price: "$900.00"
  }
];

const mockTotal = "$16,050.00";

function getCartData() {
  return mockData;
}

const OrderSummary = () => {
  const cartItems = getCartData().map((item, index) => (
    <div className="orderSummaryItem" key={index}>
      <div className="productQuantity">{item.qty}</div>
      <div className="productImage">
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <p className="productName">{item.name}</p>
        <div className="extra">
          <p className="remove">Remove</p>
          <p className="priceTag">{item.price}</p>
        </div>
      </div>
    </div>
  ));
  const total = mockTotal;
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <div className="orderSummaryContainer">{cartItems}</div>
      <br />
      <p className="orderSummaryTotal">
        Total: <span>{total}</span>
      </p>
    </React.Fragment>
  );
};

export default OrderSummary;
