import "./Home.css";
import "../../public/Frame 560.svg";
import { TitleBar } from "../components/TitleBar.jsx";
import { Heading } from "../components/Heading.jsx";
import { Timer } from "../components/Timer.jsx";
import { Card } from "../components/Card.jsx";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className="container">
        <section className="heroSection">
          <aside className="side">
            <ul className="sideList">
              <li className="sideListArrowed">
                <NavLink to="/product">Women's Fashion</NavLink>
              </li>
              <li className="sideListArrowed">
                <NavLink to="/product">Men's Fashion</NavLink>
              </li>
              <li className="sideListNonArrowed">
                <NavLink to="/product">Electronics</NavLink>
              </li>
              <li className="sideListNonArrowed">
                <NavLink to="/product">Home & Lifestyle</NavLink>
              </li>
              <li className="sideListNonArrowed">
                <NavLink to="/product">Medicine</NavLink>
              </li>
              <li className="sideListNonArrowed">
                <NavLink to="/product">Sports & Outdoor</NavLink>
              </li>
              <li className="sideListNonArrowed">
                <NavLink to="/product">Baby’s & Toys</NavLink>
              </li>
              <li className="sideListNonArrowed">
                <NavLink to="/product">Groceries & Pets</NavLink>
              </li>
              <li className="sideListNonArrowed">
                <NavLink to="/product">Health & Beauty</NavLink>
              </li>
            </ul>
          </aside>
          <div className="verticalBar"></div>

          {/* IPHONE IMAGE SECTION */}

          <div className="carouselImg">
            <img src={"Frame 560.svg"} className="iPhoneImg" />
          </div>
        </section>

        <section className="flashSale">
          <Heading text="Today's" />
          <div>
            <TitleBar title="Flash Sales" />
            {/* <Timer /> */}
          </div>
          <div className="flashSaleItem">
            <Card
              img="joystick.png"
              discount="-40%"
              itemName="Controller"
              itemPrice="$120"
              star="Four Half Star.png"
            />
            <Card
              img="keyboard.png"
              discount="-35%"
              itemName="RGB Keyboard"
              itemPrice="$220"
              star="Five Star.png"
            />
            <Card
              img="monitor.png"
              discount="-30%"
              itemName="4K Mointor"
              itemPrice="$700"
              star="Five Star.png"
            />
            <Card
              img="chair.png"
              discount="-25%"
              itemName="Chair"
              itemPrice="$80"
              star="Four Half Star.png"
            />
          </div>
        </section>
      </div>
    </>
  );
};
