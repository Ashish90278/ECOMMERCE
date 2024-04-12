import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <>
      <section className="card">
        <div className="cardUpper">
          <img src={props.img} className="cardImg" />
          <span className="cardImgDiscount">{props.discount}</span>
          <span class="material-symbols-outlined dil">HeartIcon</span>
          <span class="material-symbols-outlined eye">WishlistIcon</span>
          <span className="addToCart">Add to Cart!</span>
        </div>
        <div className="cardInfo">
          <div>{props.itemName}</div>
          <div style={{ color: "tomato", height: "24px" }}>
            {props.itemPrice}
          </div>
          <img src={props.star} className="cardStar" />
        </div>
      </section>
    </>
  );
};
