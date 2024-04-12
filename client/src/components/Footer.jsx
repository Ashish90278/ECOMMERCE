import "./Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_container">
            <div className="footer_container_middle">
              <ul>
                <h4 style={{ fontWeight: 700 }}>Exclusive</h4>
                <h4>Subscribe</h4>
                <li>Get 10% off your first order</li>
                <input type="email" placeholder="Enter your email" />
              </ul>
            </div>
            <div className="footer_container_middle">
              <ul>
                <h4>Support</h4>
                <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </div>
            <div className="footer_container_middle">
              <ul>
                <h4>Account</h4>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="footer_container_middle">
              <ul>
                <h4>Quick Link</h4>
                <li>Privacy Policy</li>
                <li>Term Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer_container_middle">
              <ul>
                <h4>Download App</h4>
                <li style={{fontSize: "x-small", color: "grey"}}>Save $3 with App New User Only</li>
                <img src="../../public/Frame719.svg" alt="" />
                <div>
                    <img src="../../public/Icon-Facebook.svg" alt="" />
                    <img src="../../public/Icon-Twitter.svg" alt="" />
                    <img src="../../public/Icon-instagram.svg" alt="" />
                    <img src="../../public/Icon-Linkedin.svg" alt="" />
                </div>
              </ul>
            </div>
          </div>

          <div className="division">
            <hr />
            <div>
              {/* <h4>Created By : </h4> */}
              {/* <p>&nbsp; Ashish Gupta</p> */}
              <p>&nbsp;&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
