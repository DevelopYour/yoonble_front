import { useEffect, useState } from "react";
import styled from "styled-components";
import { getArtmakes, IArtmake } from "../fetcher";
import { SubTitle } from "./FAQ";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import img1 from "../images/img1.jpg";
import img2 from "../images/Keep it simple.png";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  width: 100%;
`;

const ContentBox = styled.div<MenuProps>`
  width: 100%;
  max-width: 320px;
  padding: 20px;
  border-radius: 12px;
  background-color: rgb(240, 236, 231);
  box-shadow: 0px 4px 12px rgba(117, 105, 94, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2<MenuProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(101, 80, 79);
  padding: 10px 0;
  margin-bottom: 10px;

  background: linear-gradient(
    to bottom,
    rgb(117, 105, 94, 0.6),
    rgba(117, 105, 94, 0)
  );
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 3px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export default function Artmake() {
  const [artmakes, setArtmakes] = useState<IArtmake[]>([]);
  const [imageStates, setImageStates] = useState<string[]>([]);
  const isDesktop = useRecoilValue(isDesktopState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedArtmakes = await getArtmakes();
        setArtmakes(await getArtmakes());
        setImageStates(fetchedArtmakes.map(() => img1));
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, []);

  const handleMouseOver = (index: number) => {
    if (isDesktop) {
      const newImageStates = [...imageStates];
      newImageStates[index] = img2;
      setImageStates(newImageStates);
    }
  };

  const handleMouseOut = (index: number) => {
    if (isDesktop) {
      const newImageStates = [...imageStates];
      newImageStates[index] = img1;
      setImageStates(newImageStates);
    }
  };

  const handleClick = (index: number) => {
    if (!isDesktop) {
      const newImageStates = [...imageStates];
      newImageStates[index] = newImageStates[index] === img2 ? img1 : img2;
      setImageStates(newImageStates);
    }
  };

  return (
    <Container>
      <SubTitle>시술 종류</SubTitle>
      <ContentWrapper>
        {artmakes.map((artmake, index) => (
          <ContentBox isDesktop={isDesktop} key={artmake.id}>
            <Image
              src={imageStates[index]}
              alt={artmake.name}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={() => handleMouseOut(index)}
              onClick={() => handleClick(index)}
            />
            <Title isDesktop={isDesktop}>{artmake.name}</Title>
            <Description>{artmake.description}</Description>
          </ContentBox>
        ))}
      </ContentWrapper>
    </Container>
  );
}
