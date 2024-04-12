import React from "react";
import "./Myaccount.css";
import { Button } from "../components/Button.jsx";

export const Myaccount = () => {
  return (
    <>
      <div className="container">
        <div className="userInfo">
          <div>
            <p style={{ color: "grey" }}>Home / </p>
            <p>&nbsp;My Account</p>
          </div>
          <div>
            <p>Welcome!&nbsp;</p>
            <p style={{ color: "rgba(219, 68, 68, 1)" }}>&nbsp;Md Rimel</p>
          </div>
        </div>
        <div className="editDashboard">
          <aside>
            <div>
              <p>Manage My Account</p>
              <ul>
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>
            <div>
              <p>My Orders</p>
              <ul>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
            </div>
            <div>
              <p>My WishList</p>
            </div>
          </aside>
          <form action="">
            <h3>Edit Your Profile</h3>
            <div className="userInfoUpper">
              <div className="userInfoLeft">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="First Name" />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="userInfoRight">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Last Name" />
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Address" />
              </div>
            </div>
            <div className="userPassword">
              <label htmlFor="">Password Changes</label>
              <input type="text" placeholder="Current Password" />
              <input type="text" placeholder="New Pasword" />
              <input type="text" placeholder="Confirm New Password" />
            </div>
            <div className ="userEditButton">
              <Button text="Saves Changes" />
              <Button id="cancel" text="Cancel" buttonColor="white" textColor="black" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
