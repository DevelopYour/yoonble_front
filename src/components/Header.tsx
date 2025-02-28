import { Link } from "react-router-dom";
import styled from "styled-components";
import logoIcon from "../images/yb_logo_icon.png";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";

export interface MenuProps {
  isDesktop: boolean;
}

export const HeaderContainer = styled.div<MenuProps>`
  height: ${(props) => (props.isDesktop ? "12vh" : "9vh")};
  display: flex;
  justify-content: ${(props) => (props.isDesktop ? 0 : "center")};
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.isDesktop ? "1vh 0" : 0)};
  z-index: 100;
  padding-top: ${(props) => (props.isDesktop ? "1px" : 0)};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div<MenuProps>`
  display: flex;
  gap: 2vw;
  margin-top: 2vh;
  justify-content: center;
  padding-bottom: ${(props) => (props.isDesktop ? 0 : "1rem")};
`;

const Title = styled.h1`
  /* color: rgb(101, 90, 79); */
  font-size: 2rem;
`;

const TitleImg = styled.img<MenuProps>`
  width: 20vw;
  margin-left: ${(props) => (props.isDesktop ? "8vw" : 0)};
  max-width: ${(props) => (props.isDesktop ? "60px" : "40px")};
`;

const Menu = styled.div<MenuProps>`
  margin-top: 1%;
  display: ${(props) => (props.isDesktop ? "flex" : "none")};
  gap: 2vw;
  justify-content: flex-start;
  align-items: center;
`;

const MenuTitle = styled.div`
  font-size: 1rem;
  color: rgb(135, 121, 108);
  padding-left: 2vw;
`;

const MenuItem = styled(Link)`
  font-size: 0.8rem;
  color: rgb(160, 143, 124);
  transition: color 0.3s ease;
  &:hover {
    color: rgb(101, 80, 79);
  }
`;

const CustomIcon = styled.b`
  color: rgb(101, 80, 79);
  padding-right: 0.5vw;
`;

export default function Header() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <HeaderContainer isDesktop={isDesktop}>
      <TitleContainer isDesktop={isDesktop}>
        <Title>
          <Link to="/">
            <TitleImg isDesktop={isDesktop} src={logoIcon}></TitleImg>
          </Link>
        </Title>
      </TitleContainer>
      <Menu isDesktop={isDesktop}>
        <MenuTitle>ABOUT</MenuTitle>
        <MenuItem to="/shop">
          <CustomIcon>✶</CustomIcon>SHOP
        </MenuItem>
        <MenuItem to="/artist">
          <CustomIcon>✶</CustomIcon>ARTIST
        </MenuItem>
        <MenuItem to="/artmake">
          <CustomIcon>✶</CustomIcon>ARTMAKE
        </MenuItem>
        <MenuItem to="/faq">
          <CustomIcon>✶</CustomIcon>FAQ
        </MenuItem>
        <MenuTitle>BOOKING</MenuTitle>
        <MenuItem to="/reservation">
          <CustomIcon>✷</CustomIcon>RESERVATION
        </MenuItem>
        <MenuItem to="/review">
          <CustomIcon>✷</CustomIcon>REVIEW
        </MenuItem>
        {/* <MenuItem to="">
            <Translater />
          </MenuItem> */}
      </Menu>
    </HeaderContainer>
  );
}
