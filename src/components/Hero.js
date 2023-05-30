import React, { useState, useEffect } from "react";
// import logo
import LogoDark from "../assets/img/logo-dark.svg";
import LogoLight from "../assets/img/bg-light.svg";
// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";
//  import girl image
import Girlimage from "../assets/img/girl.png";

const Hero = () => {
  const [theme, setTheme] = useState("light");

  // if local storage is empty sasve theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);
  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);
  // change theme
  const changeTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      //
    }
  };
  return (
    <section className="min-h-[740px] w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark">
      <button
        className=" p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center"
        onClick={changeTheme}
      >
        {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
      </button>
    </section>
  );
};

export default Hero;
