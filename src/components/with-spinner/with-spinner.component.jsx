import React, { useState, useEffect } from "react";
import Spinner from "./spinner.component";

const WithLoadingSpinner = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <>{loading ? <Spinner /> : children}</>;
};

export default WithLoadingSpinner;
