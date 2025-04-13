import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import logo from "../assets/logo/mainlogo.png";
import logo1 from "../assets/logo/mini logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close the sidebar if clicked outside of it
  const handleOutsideClick = (e) => {
    if (
      menuOpen &&
      !e.target.closest(".side-bar") &&
      !e.target.closest(".burger-menu")
    ) {
      closeMenu();
    }
  };

  React.useEffect(() => {
    // Add event listener for clicks outside the sidebar
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Site Logo" className="site-logo" />
          </Link>
          <div className="minilogo">
            <img src={logo1} alt="Mini Logo" />
          </div>
          <div className="contact-and-button">
            <span className="contact-number">
              <i
                className="fa-solid fa-phone fa-rotate-by"
                style={{ color: "#000000", "--fa-rotate-angle": "19deg" }}
              ></i>
              02 8559 0090
            </span>
            <div className="buttons">
              <div className="enquire-button">
                <Link to="/enquire">Enquire Now</Link>
              </div>
              <div className="tour-button">
                <Link to="/book">Book a Tour</Link>
              </div>
            </div>
          </div>
          <div className="burger-menu" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="side-bar">
          <span className="close-button" onClick={closeMenu}>
            &times;
          </span>
          <Link to="/" className="side-bar-item" onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="/sydney-services"
            className="side-bar-item"
            onClick={closeMenu}
          >
            Sydney Services
          </Link>
          <Link
            to="/newcastle-services"
            className="side-bar-item"
            onClick={closeMenu}
          >
            Newcastle Services
          </Link>
          <Link to="/our-story" className="side-bar-item" onClick={closeMenu}>
            Our Story
          </Link>
          <Link to="/our-future" className="side-bar-item" onClick={closeMenu}>
            Our Future
          </Link>
          <Link to="/our-friends" className="side-bar-item" onClick={closeMenu}>
            Our Friends
          </Link>
          <Link
            to="/child-safety"
            className="side-bar-item"
            onClick={closeMenu}
          >
            Child Safety
          </Link>
          <Link to="/ndis" className="side-bar-item" onClick={closeMenu}>
            NDIS
          </Link>
          <Link to="/careers" className="side-bar-item" onClick={closeMenu}>
            Careers
          </Link>
          <Link to="/contact" className="side-bar-item" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/aged-care" className="side-bar-item" onClick={closeMenu}>
            Aged Care
          </Link>
        </div>
      )}

      <div className="navbar-bottom">
        <div className="navbar-bottom-item1">Our Story</div>
        <div className="navbar-bottom-item2">Sydney Services</div>
        <div className="navbar-bottom-item3">Newcastle Services</div>
        <div className="navbar-bottom-item4">Our Future</div>
        <div class="navbar-bottom-item5">Our Friends</div>
        <div class="navbar-bottom-item6">Child Safety</div>
        <div class="navbar-bottom-item7">NDIS</div>
        <div class="navbar-bottom-item8">Careers</div>
        <div class="navbar-bottom-item9">Contact</div>
        <div class="navbar-bottom-item10">Aged Care</div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import "../styles/Navbar.scss";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo/mainlogo.png";
// import logo1 from "../assets/logo/mini logo.png";

// const Navbar = () => {
//   // const [menuOpen, setMenuOpen] = useState(false);

//   // const toggleMenu = () => {
//   //   setMenuOpen(!menuOpen);
//   // };

//   // const closeMenu = () => {
//   //   setMenuOpen(false);
//   // };

//   // const handleOverlayClick = () => {
//   //   // Close the menu when the overlay is clicked
//   //   setMenuOpen(false);
//   // };

//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = (e) => {
//     e.stopPropagation(); // Prevents event bubbling
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   // Close the sidebar if clicked outside of it
//   const handleOutsideClick = (e) => {
//     if (
//       menuOpen &&
//       !e.target.closest(".side-bar") &&
//       !e.target.closest(".burger-menu")
//     ) {
//       closeMenu();
//     }
//   };

//   React.useEffect(() => {
//     // Add event listener for clicks outside the sidebar
//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [menuOpen]);

//   return (
//     <div>
//       <div className="navbar">
//         <div className="navbar-content">
//           <Link to="/" className="logo-link">
//             <img src={logo} alt="Site Logo" className="site-logo" />
//           </Link>
//           <div className="minilogo">
//             <img src={logo1} alt="Mini Logo" />
//           </div>
//           <div className="contact-and-button">
//             <span className="contact-number">
//               <i
//                 className="fa-solid fa-phone fa-rotate-by"
//                 style={{ color: "#000000", "--fa-rotate-angle": "19deg" }}
//               ></i>
//               02 8559 0090
//             </span>
//             <div className="buttons">
//               <div className="enquire-button">
//                 <a href="/enquire">Enquire Now</a>
//               </div>
//               <div className="tour-button">
//                 <a href="/book">Book a Tour</a>
//               </div>
//             </div>
//           </div>
//           <div className="burger-menu" onClick={toggleMenu}>
//             &#9776;
//           </div>
//         </div>
//       </div>

//       {menuOpen && (
//         <>
//           {/* <div className="side-bar-overlay" onClick={handleOverlayClick}></div>
//           <div className="side-bar">
//             <span className="close-button" onClick={closeMenu}>
//               &times;
//             </span> */}
//           <div className="side-bar">
//             <span className="close-button" onClick={closeMenu}>
//               &times;
//             </span>
//             <Link to="/" className="side-bar-item" onClick={closeMenu}>
//               Home
//             </Link>
//             <Link
//               to="/sydney-services"
//               className="side-bar-item"
//               onClick={closeMenu}
//             >
//               Sydney Services
//             </Link>
//             <Link
//               to="/newcastle-services"
//               className="side-bar-item"
//               onClick={closeMenu}
//             >
//               Newcastle Services
//             </Link>
//             <Link to="/our-story" className="side-bar-item" onClick={closeMenu}>
//               Our Story
//             </Link>
//             <Link
//               to="/our-future"
//               className="side-bar-item"
//               onClick={closeMenu}
//             >
//               Our Future
//             </Link>
//             <Link
//               to="/our-friends"
//               className="side-bar-item"
//               onClick={closeMenu}
//             >
//               Our Friends
//             </Link>
//             <Link
//               to="/child-safety"
//               className="side-bar-item"
//               onClick={closeMenu}
//             >
//               Child Safety
//             </Link>
//             <Link to="/ndis" className="side-bar-item" onClick={closeMenu}>
//               NDIS
//             </Link>
//             <Link to="/careers" className="side-bar-item" onClick={closeMenu}>
//               Careers
//             </Link>
//             <Link to="/contact" className="side-bar-item" onClick={closeMenu}>
//               Contact
//             </Link>
//             <Link to="/aged-care" className="side-bar-item" onClick={closeMenu}>
//               Aged Care
//             </Link>
//           </div>
//         </>
//       )}

//       <div className="navbar-bottom">
//         <div className="navbar-bottom-item1">Our Story</div>
//         <div className="navbar-bottom-item2">Sydney Services</div>
//         <div className="navbar-bottom-item3">Newcastle Services</div>
//         <div className="navbar-bottom-item4">Our Future</div>
//         <div className="navbar-bottom-item5">Our Friends</div>
//         <div className="navbar-bottom-item6">Child Safety</div>
//         <div className="navbar-bottom-item7">NDIS</div>
//         <div className="navbar-bottom-item8">Careers</div>
//         <div className="navbar-bottom-item9">Contact</div>
//         <div className="navbar-bottom-item10">Aged Care</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
