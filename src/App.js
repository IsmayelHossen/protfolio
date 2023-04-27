import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
import Header from "./Components/Segment/Header";
import Footer from "./Components/Segment/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Blog from "./Components/Social/Blog";
import NotFoundpage from "./Components/NotFoundpage";
import "./Style.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={<NotFoundpage />} />
        </>

        {/* <Route path="/events" element={<Users />} />
        <Route path="/dashboard" element={<Redirect to="/events" />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
