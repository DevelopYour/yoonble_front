import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import back from "../../images/back.gif";
import { MenuProps } from "./interface";

export const BackgroundDiv = styled.div<MenuProps>`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${back});
  background-size: cover;
  overflow: hidden;
  height: ${(props) => (props.isDesktop ? "79vh" : "79vh")};
  background-position: 100% 50%;
`;

export const Card = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  gap: 1vw;
  max-width: 75vw;
  width: 90%;
  padding-top: ${(props) => (props.isDesktop ? "0vh" : "25vh")};
`;

export const Content = styled.div`
  flex: 1;
  text-align: left;
  @media (max-width: 780px) {
    margin-bottom: 25vh;
  }
`;

export const Title = styled.h1`
  font-family: "Playfair Display", "Noto Sans", "Noto Sans KR", sans-serif;
  font-size: 60px;
  color: ${colors.brown3};
  margin-bottom: 20px;
  line-height: 1.1;
  @media (max-width: 780px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const Description = styled.p`
  font-size: 0.8rem;
  color: ${colors.brown2};
  line-height: 1.6;
  @media (max-width: 780px) {
    font-size: 0.7rem;
  }
`;

export const Bold = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${colors.brown0};
  @media (max-width: 780px) {
    font-size: 0.7rem;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 40vw;
  max-width: 500px;
  object-fit: cover;
`;

export const HomeMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 3열
  gap: 5px 5px;
  justify-content: center;
  width: 100%;
`;

export const HomeMenuBox = styled.div<MenuProps>`
  width: 100%;
  max-width: 250px;
  border-radius: 12px;
  background-color: ${colors.pink4};
  box-shadow: 0px 4px 12px rgba(170, 163, 156, 0.2);
  justify-items: center;
  text-align: center;
  transition: transform 0.3s ease;
`;

export const HomeMenuImage = styled.img<{ isDesktop?: boolean }>`
  border-radius: 10px;
  width: 100%;
  height: 20vh;
  min-height: 100px;
  object-fit: cover;
`;
