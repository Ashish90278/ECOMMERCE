import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="upperHeader">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <NavLink to="flashSale">ShopNow</NavLink>
        </div>
        <div className="container">
          <nav>
            <section>
              <div className="logo">
                <h3>Exclusive</h3>
              </div>
              <div className="menu">
                <div className="menuItems">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="menuOptions">
                  <div>
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <NavLink>
                      <img src="../../public/Search.png" alt="" />
                    </NavLink>
                  </div>
                  <NavLink to="/product">
                    <img src="../../public/Wishlist.png" alt="" />
                  </NavLink>
                  <NavLink to="/cart">
                    <img src="../../public/Cart.png" alt="" />
                  </NavLink>
                  <NavLink to="/myaccount">
                    <img src="../../public/User.png" alt="" />
                  </NavLink>
                </div>
              </div>
            </section>
          </nav>
        </div>
        <div>
          <hr />
        </div>
      </header>
    </>
  );
};
