import { useEffect } from "react";
import { useLocation } from "react-router-dom";
  
export default function GoToTop() {
  const routePath = useLocation();
  const onTop = () => {
    let id = window.location.toString().split("#",2)[1];
    //console.log(id);
    //console.log(document.getElementById(id).getBoundingClientRect().top);
    if (id) {
      window.scrollTo(0, (document.getElementById(id).getBoundingClientRect().top - 140));
    } else {
      window.scrollTo(0, 0);
    }
    
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  
  return null;
}

// https://www.geeksforgeeks.org/how-to-make-your-page-scroll-to-the-top-when-route-changes/