import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function Header() {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "0 0 20px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "15px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container flex flex-col justify-between items-center sm:flex-row">
        <Link to="/">
          <img
            src="/assets/images/logo.svg"
            alt="logo-img"
            className="w-[80px] h-[80px] min-w-[80px] object-contain"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-[40px] sm:gap-[30px] ">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`${link} opacity-[0.9] hover:opacity-[1] text-white font-normal hover:underline duration-200 transition-all`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
