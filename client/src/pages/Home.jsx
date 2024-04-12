import "./Home.css";
import "../../public/Frame 560.svg";
import { TitleBar } from "../components/TitleBar.jsx";
import { Heading } from "../components/Heading.jsx";
import { Timer } from "../components/Timer.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
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
          </div>
          <div className="relatedItems">
            <Card
              img="joystick.png"
              discount="-40%"
              itemName="Controller"
              itemPrice="$120"
              star="Frame 922.svg"
            />
            <Card
              img="keyboard.png"
              discount="-35%"
              itemName="RGB Keyboard"
              itemPrice="$220"
              star="Frame 922.svg"
            />
            <Card
              img="monitor.png"
              discount="-30%"
              itemName="4K Mointor"
              itemPrice="$700"
              star="Frame 922.svg"
              />
            <Card
              img="chair.png"
              discount="-25%"
              itemName="Chair"
              itemPrice="$80"
              star="Frame 922.svg"
            />
          </div>
          <div className="viewProducts">
          <Button text="View All Products" width="22%"/>
          </div>
        </section>


        <section className="categories">
        <Heading text="Categories" />
          <div>
            <TitleBar title="Browse By Category" />
          </div>
          <hr />
        </section>


        <section className="flashSale">
          <Heading text="This Month" />
          <div>
            <TitleBar title="Best Selling Products" />
          </div>
          <div className="relatedItems">
            <Card
              img="joystick.png"
              discount="-40%"
              itemName="Controller"
              itemPrice="$120"
              star="Frame 922.svg"
            />
            <Card
              img="keyboard.png"
              discount="-35%"
              itemName="RGB Keyboard"
              itemPrice="$220"
              star="Frame 922.svg"
            />
            <Card
              img="monitor.png"
              discount="-30%"
              itemName="4K Mointor"
              itemPrice="$700"
              star="Frame 922.svg"
              />
            <Card
              img="chair.png"
              discount="-25%"
              itemName="Chair"
              itemPrice="$80"
              star="Frame 922.svg"
            />
          </div>
          <div className="viewProducts">
          <Button text="View All Products" width="22%"/>
          </div>
        </section>
      </div>
    </>
  );
};
