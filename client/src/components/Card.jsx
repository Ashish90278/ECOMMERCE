import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <>
      <section className="card">
        <div className="cardUpper">
          <img src={props.img} className="cardImg" />
          <span className="cardImgDiscount">{props.discount}</span>
          <span className= "dil">
            <img src="../../public/Frame 575.svg" alt="" />
          </span>
        </div>
        <div className="addToCart">Add to Cart</div>
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
