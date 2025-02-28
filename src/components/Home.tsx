import axios from "axios";
import wp from "../images/Don't miss copy.png";
import wpt from "../images/Don't miss copy - thin.png";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";

const BackgroundDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 79vh;
`;

const Img = styled.img`
  width: 100vw;
  object-fit: cover;
`;

export default function Home() {
  const isDesktop = useRecoilValue(isDesktopState);
  const apiTest = async () => {
    const response = await axios.get<string>("/api/test");
    if (response.data) {
      alert(response.data);
    }
  };

  return (
    <>
      <BackgroundDiv>
        <Img src={isDesktop ? wpt : wp}></Img>
      </BackgroundDiv>
    </>
  );
}
