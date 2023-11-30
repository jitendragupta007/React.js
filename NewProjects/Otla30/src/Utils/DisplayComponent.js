import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DisplayComponent = ({ children }) => {
  const location = useLocation();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setShowComponent(false);
    } else {
      setShowComponent(true);
    }
  }, [location]);

  return (
    <div>
      <div>{showComponent && children}</div>
    </div>
  );
};

export default DisplayComponent;