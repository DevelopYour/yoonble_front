import { useState } from "react";
import { slide as Menu, Props as BurgerMenuProps } from "react-burger-menu";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import Translator from "../Translator";
import {
  CustomIcon,
  MenuStyles,
  StyledMenu,
  StyledMenuItem,
} from "./styled-components/HamburgerStyle";
import { AboutProps } from "./styled-components/interface";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useRecoilValue(isDesktopState);
  const location = useLocation();
  const BurgerMenu = Menu as React.ComponentType<BurgerMenuProps>;

  const closeMenu = () => setIsMenuOpen(false);

  if (isDesktop) {
    return null;
  }

  return (
    <>
      <BurgerMenu
        customBurgerIcon={
          isDesktop ? <></> : <GiHamburgerMenu size={"0.5vw"} />
        }
        customCrossIcon={isDesktop ? <></> : <FaArrowLeft size={"2.5vw"} />}
        width={isDesktop ? "20vw" : "35vw"}
        isOpen={isDesktop ? true : isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        styles={MenuStyles}
      >
        <br /><br />
        {/* <StyledMenu>ABOUT</StyledMenu> */}
        <StyledMenuItem
          isActive={location.pathname === "/about"}
          to="/about"
          state={{ selected: "Yoonble" } as AboutProps}
          onClick={closeMenu}
        >
          <CustomIcon>✶</CustomIcon>ABOUT
        </StyledMenuItem>
        <StyledMenuItem
          isActive={location.pathname === "/menu"}
          to="/menu"
          onClick={closeMenu}
        >
          <CustomIcon>✶</CustomIcon>MENU
        </StyledMenuItem>
        <StyledMenuItem
          isActive={location.pathname === "/faq"}
          to="/faq"
          onClick={closeMenu}
        >
          <CustomIcon>✶</CustomIcon>FAQ
        </StyledMenuItem>
        {/* <StyledMenu>BOOKING</StyledMenu> */}
        {/* <StyledMenuItem
          isActive={location.pathname === "/reservation"}
          to="/reservation"
          onClick={closeMenu}
        >
          <CustomIcon>✷</CustomIcon>RESERVATION
        </StyledMenuItem> */}
        <StyledMenuItem
          isActive={location.pathname === "/review"}
          to="/review"
          onClick={closeMenu}
        >
          <CustomIcon>✷</CustomIcon>REVIEW
        </StyledMenuItem>
        <br />
        <StyledMenuItem
          isActive={location.pathname === ""}
          to=""
        ></StyledMenuItem>
        <Translator />
      </BurgerMenu>
    </>
  );
}

export default NavigationBar;
