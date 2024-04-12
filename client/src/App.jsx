import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Product } from "./pages/Product.jsx";
import { Myaccount } from "./pages/Myaccount.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<Product />} />
          <Route path="/myaccount" element={<Myaccount />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
