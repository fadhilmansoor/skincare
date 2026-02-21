"use client"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// import WOW from "wowjs";

const AnimationEffect = () => {
    const path = usePathname();  
  
    useEffect(() => {
        setTimeout(() => {
        const links = document.querySelectorAll('a[href="#"]');
        const handleClick = (event : any) => {
            event.preventDefault();
        };
        if (links) {
            links.forEach((link) => {
              link.addEventListener("click", handleClick);
            });
          }
        }, 600);
    }, [path]);

  useEffect(() => {
    setTimeout(() => {
      const { WOW } = require("wowjs");
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        once: true,
        live: false,
        callback: function (box : HTMLElement) {
          box.classList.add("will-animate");
          box.classList.add("animated");
        },
      });
      wow.init();
    }, 100);
  }, [path]);

  return null    
}
export default AnimationEffect;