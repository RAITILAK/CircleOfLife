import React, { useEffect, useState } from "react";
import "../styles/HomePage.scss";
import bgImage from "../assets/pics/repl.png";
import bg2 from "../assets/pics/kid2.jpg";
import dkid1 from "../assets/pics/dkid1.webp";
import dkid2 from "../assets/pics/dkid2.avif";
import slider1 from "../assets/pics/slider1.webp";
import slider2 from "../assets/pics/slider2.jpg";
import slider3 from "../assets/pics/slider3.jpg";
import slider4 from "../assets/pics/slider4.webp";
import slider5 from "../assets/pics/slider5.webp";
import video from "../assets/video/kidplay.mp4";
import thumbnail from "../assets/pics/nail.jpg";

const HomePage = () => {
  // const allImages = [slider1, slider2, slider3, slider4, slider5];
  // const [displayedImages, setDisplayedImages] = useState([
  //   allImages[0],
  //   allImages[1],
  //   allImages[2],
  // ]);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // const handleImageClick = () => {
  //   setDisplayedImages((prevImages) => {
  //     const newImages = [
  //       ...prevImages.slice(1),
  //       allImages[(allImages.indexOf(prevImages[2]) + 1) % allImages.length],
  //     ];
  //     return newImages;
  //   });
  // };

  // const handleVideoClick = () => {
  //   const videoElement = document.getElementById("video-element");
  //   if (isVideoPlaying) {
  //     videoElement.pause();
  //   } else {
  //     videoElement.play();
  //   }
  //   setIsVideoPlaying(!isVideoPlaying);
  // };

  // const allImages = [slider1, slider2, slider3, slider4, slider5];
  // const [displayedImages, setDisplayedImages] = useState([allImages[0]]);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // const handleImageClick = () => {
  //   setDisplayedImages((prevImages) => {
  //     const newImage =
  //       allImages[(allImages.indexOf(prevImages[0]) + 1) % allImages.length];
  //     return [newImage]; // For mobile, always show one image
  //   });
  // };

  // const handleVideoClick = () => {
  //   const videoElement = document.getElementById("video-element");
  //   if (isVideoPlaying) {
  //     videoElement.pause();
  //   } else {
  //     videoElement.play();
  //   }
  //   setIsVideoPlaying(!isVideoPlaying);
  // };

  // const allImages = [slider1, slider2, slider3, slider4, slider5];
  // const [displayedImages, setDisplayedImages] = useState(allImages.slice(0, 3));
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const handleImageClick = () => {
  //   if (isMobileView) {
  //     setDisplayedImages((prevImages) => {
  //       const newImage =
  //         allImages[(allImages.indexOf(prevImages[0]) + 1) % allImages.length];
  //       return [newImage];
  //     });
  //   } else {
  //     setDisplayedImages((prevImages) => {
  //       const newImages = [
  //         ...prevImages.slice(1),
  //         allImages[(allImages.indexOf(prevImages[2]) + 1) % allImages.length],
  //       ];
  //       return newImages;
  //     });
  //   }
  // };

  // const handleVideoClick = () => {
  //   const videoElement = document.getElementById("video-element");
  //   if (isVideoPlaying) {
  //     videoElement.pause();
  //   } else {
  //     videoElement.play();
  //   }
  //   setIsVideoPlaying(!isVideoPlaying);
  // };

  const allImages = [slider1, slider2, slider3, slider4, slider5];
  const [displayedImages, setDisplayedImages] = useState(allImages.slice(0, 3));
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);

      // Reset displayed images based on view
      if (isMobile) {
        setDisplayedImages([allImages[0]]); // Display only one image in mobile view
      } else {
        setDisplayedImages(allImages.slice(0, 3)); // Display three images in large view
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageClick = () => {
    if (isMobileView) {
      setDisplayedImages((prevImages) => {
        const newImage =
          allImages[(allImages.indexOf(prevImages[0]) + 1) % allImages.length];
        return [newImage];
      });
    } else {
      setDisplayedImages((prevImages) => {
        const newImages = [
          ...prevImages.slice(1),
          allImages[(allImages.indexOf(prevImages[2]) + 1) % allImages.length],
        ];
        return newImages;
      });
    }
  };

  const handleVideoClick = () => {
    const videoElement = document.getElementById("video-element");
    if (isVideoPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="homepage">
      <div className="image-banner">
        <img src={bgImage} alt="bg" className="bg-image" />
        <h1>Unified hope & Strength in unity</h1>
        <h2>
          At Circle of Hope, we work to build independence, increase
          opportunities and social participation for people living with
          disability.
        </h2>
        <a href="/enquire" className="enquire-button">
          Enquire Now
        </a>
      </div>
      <div className="section2">
        <h1>Centre Activities</h1>
        <h2>
          Circle of Hope offers in-centre and community-based activities and
          programs. Feel free to enquire below.
        </h2>
        <div className="facilities-container">
          <div className="facility-box">
            <i
              className="fa-solid fa-users-rays"
              style={{ color: "#63E6BE" }}
            ></i>
            <span>Sensory Room</span>
          </div>
          <div className="facility-box">
            <i className="fa-solid fa-film" style={{ color: "#63E6BE" }}></i>
            <span>Cinema Room</span>
          </div>
          <div className="facility-box">
            <i
              className="fa-solid fa-computer"
              style={{ color: "#63E6BE" }}
            ></i>
            <span>Computer Room</span>
          </div>
          <div className="facility-box">
            <i className="fa-solid fa-palette" style={{ color: "#63E6BE" }}></i>
            <span>Arts & Crafts Area</span>
          </div>
          <div className="facility-box">
            <i
              className="fa-solid fa-football"
              style={{ color: "#63E6BE" }}
            ></i>
            <span>Sports & Recreational Area</span>
          </div>
          <div className="facility-box">
            <i className="fa-solid fa-tree" style={{ color: "#63E6BE" }}></i>
            <span>Garden Area</span>
          </div>
          <div className="facility-box">
            <i className="fa-solid fa-couch" style={{ color: "#63E6BE" }}></i>
            <span>Lounge Room</span>
          </div>
          <div className="facility-box">
            <i
              className="fa-solid fa-kitchen-set"
              style={{ color: "#63E6BE" }}
            ></i>
            <span>Kitchen</span>
          </div>
          <div className="facility-box">
            <i
              className="fa-solid fa-volume-xmark"
              style={{ color: "#63E6BE" }}
            ></i>
            <span>Quiet/Zen Room</span>
          </div>
          <div className="facility-box">
            <i
              className="fa-solid fa-infinity"
              style={{ color: "#63E6BE" }}
            ></i>
            <span>And Much More...</span>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="bg2">
          <img src={bg2} alt="bg2image" className="bg2" />
        </div>
      </div>
      <div className="info-box">
        <h1>It's that time of year again – School Holidays!</h1>
        <p>
          All School Holiday Program enquiries can be made to our Intake Officer
          via email: intake@circleofhope.com.au
          <br />
          <br />
          *Participants will be picked up from home, brought to the centre and
          will leave together from Circle of Hope.
          <br />
          <br />
          Consent forms can be obtained from the website or the office. Verbal
          consent via phone call to our Intake Officer is also accepted.
          <br />
          <br />
          Please provide your companion cards to the centre. These will be
          returned to you after the outing.
          <br />
          <br />
          Please provide details of any allergies the participant has.
        </p>
        <div className="info-box-buttons">
          <a href="/program" className="info-box-button program-button">
            Program
          </a>
          <a
            href="/consent-form"
            className="info-box-button consent-form-button"
          >
            Consent Form
          </a>
        </div>
      </div>
      <div className="section4">
        <div className="text-container">
          <h1>Circle of Hope's Story</h1>
          <p>
            Circle of Hope is a registered provider of the National Disability
            Insurance Scheme (NDIS) and was established in early 2019 to meet
            the needs of participants in the community of Southwestern Sydney.
            <br />
            <br />
            We provide high-quality and genuine support services to vulnerable
            people of all ages. The initial idea of Circle of Hope was first
            thought of by the Director in 2015 and was driven by the passion to
            give back to the community. By 2019, Circle of Hope started
            supporting their first participant (who is still with the
            organisation today), employed three (3) staff, and opened their
            first Centre. Since then, Circle of Hope now supports approximately
            350 participants, and employs around 100 staff.
            <br />
            <br />
            To ensure Circle of Hope’s services remain best practice and unique,
            they have a management team, which involves key people from various
            expertise, skills, and backgrounds. This collaborative approach to
            high quality services ensure that it sets Circle of Hope apart from
            other local providers.
            <br />
            <br />
            At Circle of Hope we work hard to build independence, increase
            opportunities and social participation for people living with
            disability in Australia.
          </p>
        </div>
        <div className="story-img">
          <img src={dkid1} alt="kid11" className="img1" />
          <img src={dkid2} alt="kid22" className="img2" />
        </div>
      </div>
      <div className="section5">
        <div className="slider-container">
          {displayedImages.map((image, index) => (
            <div className="slider-box" key={index} onClick={handleImageClick}>
              <img src={image} alt={`Slider ${index + 1}`} />
            </div>
          ))}
          <div className="box-video" onClick={handleVideoClick}>
            <video
              id="video-element"
              width="100%"
              height="auto"
              controls
              poster={thumbnail}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
