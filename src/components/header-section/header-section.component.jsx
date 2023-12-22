import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navigation from "../navigation/navigation.component";
import Header from "../header/header.component";

const HeaderSection = () => {
  const [scrolling, setScrolling] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => [
      "https://cdn.pixabay.com/photo/2020/12/27/14/37/woman-5864279_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/09/01/03/42/fashion-916400_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/07/31/14/55/black-and-white-2558273_1280.jpg",
      "https://images.unsplash.com/photo-1680200256120-8ac04eb6f01d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const tabletBreakpoint = 1024;

  const isSmallerScreen = window.innerWidth <= tabletBreakpoint;

  if (window.innerWidth <= tabletBreakpoint) {
    return (
      <>
        <Navigation
          className={`homepage-navigation ${
            scrolling && !isSmallerScreen ? "scrolled" : ""
          }`}
        />
        <div style={containerStyle}>
          <Header />
        </div>
      </>
    );
  }

  return (
    <div style={containerStyle}>
      <Navigation
        className={`homepage-navigation ${
          scrolling && !isSmallerScreen ? "scrolled" : ""
        }`}
      />
      <Header />
    </div>
  );
};

export default HeaderSection;
