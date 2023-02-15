import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IoMdDownload } from "react-icons/io";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import { BrowserRouter as Router } from "react-router-dom";
import fileDownload from "js-file-download";
import axios from "axios";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const url = `${window.location.origin.toString()}/Anirban_Chakraborty_Resume.pdf`;
  const fileName = "CV.pdf";
  const handleDownload = async () => {
    console.log();
    const res = await axios.get(url, {
      responseType: "blob",
    });

    fileDownload(res.data, fileName);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={<logo>} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/anirbanc17/"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/canirban"
                >
                  <img src={navIcon2} alt="" />
                </a>
              </div>
              <button onClick={handleDownload}>
                <span>
                  Resume <IoMdDownload />
                </span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
export default NavBar;
