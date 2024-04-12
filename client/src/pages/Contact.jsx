import "./Contact.css";
import { Button } from "../components/Button.jsx";

export const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="userInfo">
          <div>
            <p style={{ color: "grey" }}>Home / </p>
            <p>&nbsp;Contact</p>
          </div>
          {/* <div>
            <p>Welcome!&nbsp;</p>
            <p style={{ color: "rgba(219, 68, 68, 1)" }}>&nbsp;Md Rimel</p>
          </div> */}
        </div>
        <div className="contactForm">
          <aside>
            <div>
                <div className="icon">
                  <img src="../../public/icons-phone.svg" alt="" />
                  <p>Call To Us</p>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>
            <hr />
            <div>
            <div className="icon">
              <img src="../../public/icons-mail.svg" alt="" />
              <p>Write To US</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
            </div>
          </aside>
          <form action="">
            <div className="contactInfo">
              <input type="text" placeholder="Your Name *"/>
              <input type="email" placeholder="Your Email *"/>
              <input type="text" placeholder="Your Phone *"/>
            </div>
              <textarea name="message" id="contactMessage" cols="60" rows="10" placeholder="Your Message"></textarea>
            <div className="userEditButton">
              <Button text="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
