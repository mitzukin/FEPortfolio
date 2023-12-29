
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(pathname); // Reset the pathname so that subsequent navigations trigger the effect
  }, [pathname, navigate]);

  return null;
};

export default ScrollToTop;
