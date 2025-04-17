
import React, { useContext } from "react";
import { HeaderWrapper } from "./styled";
import Link from "next/link";
import AppContext from "@/contexts/app";
import Image from 'next/image';
import logo from '../../../public/img/bruh.svg';


interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { closeMobileNav, isMobileNavOpen, toggleMobileNav } = useContext(AppContext);


  return (
    <HeaderWrapper>
      <nav className="navbar mt-5 ">
        {isMobileNavOpen ? <Link href="/" className="logo" onClick={closeMobileNav}></Link> : ""}

        
        <Link href="/" >
          <Image
            priority
            src={logo}
            width={200}
            alt="Follow us on Twitter"
            className="header_logo_poseNsen -mb-14 -mt-14"
            onClick={()=>{}}
          /> 
        </Link>

        
        <div className={`nav-links ${isMobileNavOpen ? "open" : ""}`}>
          <Link href="/" onClick={closeMobileNav}>
            Home
          </Link>
          <Link href="/privacy-policy" onClick={closeMobileNav}>
            Privacy Policy
          </Link>
          <Link href="/contact" onClick={closeMobileNav}>
            Contact
          </Link>
        </div>

        <div className={`hamburger ${isMobileNavOpen ? "open" : ""}`} onClick={toggleMobileNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {isMobileNavOpen && <div className="overlay show" onClick={closeMobileNav}></div>}
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
