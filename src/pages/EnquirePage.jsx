import React from "react";
import "../styles/EnquirePage.scss";
import group from "../assets/pics/gg1.jpg";

const EnquirePage = () => {
  return (
    <div className="enquire-page">
      {/* Section 1: Image with Text */}
      <section className="enquire-section image-text-section">
        <div className="image-container">
          <img src={group} alt="group" />
        </div>
        <div className="text-container">
          <h1>CONTACT US...</h1>
        </div>
      </section>

      {/* Section 2: Paragraph, Enquire Form and Contact Details */}
      {/* <section className="heading-para">
        <div className="text">
          <h1>
            We support you to achieve your goals and realise your full potential
          </h1>
          <br />
          <p>
            For more information about Circle of Hope’s services and how we can
            best support you please contact us on 02 8559 0090 or complete the
            enquiry form below and one of our friendly staff will contact you
            shortly.
          </p>
        </div>
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Shop No: 123</p>
          <p>Phone: +123456789</p>
          <p>Email: contact@shop.com</p>
          <p>Social Media: @shophandle</p>
        </div>
        <div className="enquire-form">
          <h2>Enquire Now</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone No" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section> */}

      <section className="heading-para">
        <div className="text-container">
          <h1>
            We support you to achieve your goals and realise your full potential
          </h1>
          <p>
            For more information about Circle of Hope’s services and how we can
            best support you please contact us on 02 8559 0090 or complete the
            enquiry form below and one of our friendly staff will contact you
            shortly.
          </p>
        </div>
        <div className="form-contact-section">
          <div className="contact-details">
            <h2>Contact Details</h2>
            <p className="highlight">
              {" "}
              <i className="fas fa-phone-alt"></i> +02 8559 0090
            </p>
            <p className="highlight">
              <i className="fas fa-map-marker-alt"></i>
              Shop 2/3 - 24 Ellis Parade Yennora NSW 2161
            </p>
            <p>Follow us on Facebook and Instagram:</p>
            <p>
              <a
                href="https://facebook.com"
                target="_blank"
                className="social-icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </div>
          <div className="enquire-form">
            <h2>Enquire Now</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone No" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 3: Live Map */}
      <section className="enquire-section map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...your_map_data..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default EnquirePage;

// import React from "react";
// import "../styles/EnquirePage.scss";
// import group from "../assets/pics/group.avif";

// const EnquirePage = () => {
//   return (
//     <div className="enquire-page">
//       {/* Section 1: Image with Text */}
//       <section className="enquire-section image-text-section">
//         <div className="image-container">
//           <img src={group} alt="group" />
//         </div>
//         <div className="text-container">
//           <h1>Contact</h1>
//           {/* <p>Your descriptive text here.</p> */}
//         </div>
//       </section>

//       {/* Section 2: Enquire Form and Contact Details */}
//       <section className="enquire-section form-contact-section">
//         <div className="contact-details">
//           <h2>Contact Us</h2>
//           <p>Shop No: 123</p>
//           <p>Phone: +123456789</p>
//           <p>Email: contact@shop.com</p>
//           <p>Social Media: @shophandle</p>
//         </div>
//         <div className="enquire-form">
//           <h2>Enquire Now</h2>
//           <form>
//             <input type="text" placeholder="Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="tel" placeholder="Phone No" required />
//             <textarea placeholder="Message" required></textarea>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </section>

//       {/* Section 3: Live Map */}
//       <section className="enquire-section map-section">
//         <h2>Find Us Here</h2>
//         <div className="map-container">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...your_map_data..."
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EnquirePage;
