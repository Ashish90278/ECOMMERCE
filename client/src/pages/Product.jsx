import React from "react";
import "./Product.css";
import { useState } from "react";
import { Heading } from "../components/Heading.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";

export const Product = () => {
  const [border, setBorder] = useState(false);

  function toggleBorder() {
    setBorder((prevState) => !prevState);
  }

  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleMinus(prevCount) {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <div className="container">
        <div className="productName">
          <p>Account&nbsp; /&nbsp; Gaming&nbsp; / &nbsp;</p>
          <p>Havic HV G-92 Gamepad</p>
        </div>
        <aside className="game">
          <section className="productImages">
            <img src={"Frame 895.svg"} className="leftGameImg" />
            <img src={"Frame 896.svg"} className="leftGameImg" />
            <img src={"Frame 897.svg"} className="leftGameImg" />
            <img src={"Frame 919.svg"} className="leftGameImg" />
          </section>
          <div className="productImage">
            <img src={"Frame 894.svg"} />
          </div>

          <section className="productDescription">
            <div className="descriptionTop">
              <h2>Havic HV G-92 Gamepad</h2>
              <div className="rightProductRating">
                <img src={"Frame 922.svg"} />
              </div>
              <h2>$192.00</h2>
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <hr
                style={{
                  backgroundColor: "grey",
                  marginTop: "0.4rem",
                  width: "100%",
                  opacity: "1",
                  border: "1px solid transparent",
                }}
              />
            </div>

            {/* <br></br> */}

            <div className="descriptionBottom">
              <div className="chooseColor">
                <div>Colours: </div>
                <div className="colorFlex">
                  <div
                    className={border ? "borderOn" : "borderOff"}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#A0BCE0",
                    }}
                    onClick={toggleBorder}
                  ></div>
                  <div
                    className={border ? "borderOn" : "borderOff"}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#E07575",
                    }}
                    onClick={toggleBorder}
                  ></div>
                </div>
              </div>

              <div className="chooseSize">
                <div style={{ fontSize: "20px" }}>Size: </div>
                <div className="sizes">
                  <div className="singleSize">XS</div>
                  <div className="singleSize">S</div>
                  <div className="singleSize">M</div>
                  <div className="singleSize">L</div>
                  <div className="singleSize">XL</div>
                </div>
              </div>

              <div className="buyNow">
                <div className="productQuantity">
                  <button className="stateBtnM" onClick={handleMinus}>
                    -
                  </button>

                  <p>{count}</p>

                  <button className="stateBtnP" onClick={handlePlus}>
                    +
                  </button>
                </div>
                <Button
                  text="Buy Now"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                />
                <div>
                  <img src="../../public/Frame 904.svg" alt="" />
                </div>
              </div>

              <div>
                <img src={"Frame 911.svg"} className="productRightImg" />
              </div>
            </div>
          </section>
        </aside>
        <br></br>
        <br></br>
        <Heading text="Related Items" />
        <div className="relatedItems">
          <Card
            img="joystick.png"
            discount="-40%"
            itemName="HAVIT HV-G92 Gamepad"
            itemPrice="$120"
            star="Frame 922.svg"
          />
          <Card
            img="keyboard.png"
            discount="-35%"
            itemName="AK-900 Wired Keyboard"
            itemPrice="$960"
            star="Frame 922.svg"
          />
          <Card
            img="monitor.png"
            discount="-30%"
            itemName="IPS LCD Gaming Monitor"
            itemPrice="$370"
            star="Frame 922.svg"
          />
          <Card
            img="chair.png"
            discount="-10%"
            itemName="Chair"
            itemPrice="$80"
            star="Frame 922.svg"
          />
        </div>
      </div>
    </>
  );
};
