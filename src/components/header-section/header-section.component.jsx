import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navigation from "../navigation/navigation.component";
import Header from "../header/header.component";

const HeaderSection = () => {
  const [scrolling, setScrolling] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => [
      "https://preview.colorlib.com/theme/cozastore/images/slide-05.jpg.webp",
      "https://preview.colorlib.com/theme/cozastore/images/slide-07.jpg.webp",
      "https://preview.colorlib.com/theme/cozastore/images/slide-06.jpg.webp",
    ],
    []
  );

  const preloadImages = useCallback(() => {
    const imagePromises = images.map((imageSrc) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = resolve;
        image.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to preload images:", error);
      });
  }, [images]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);

      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      });

      return () => {
        window.removeEventListener("scroll", () => {
          if (window.scrollY > 0) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        });
        clearInterval(interval);
      };
    }
  }, [imagesLoaded, images]);

  const containerStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    transition: "background-image 1s ease",
  };

  return (
    <div className="container" style={containerStyle}>
      <Navigation
        className={`homepage-navigation ${scrolling ? "scrolled" : ""}`}
      />
      <Header />
    </div>
  );
};

export default HeaderSection;
