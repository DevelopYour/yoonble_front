import styled from "styled-components";
import img1 from "../images/artist.jpg";
import { MenuProps } from "./Header";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { SubTitle } from "./FAQ";

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  align-items: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  padding-right: 15px;
`;

const Image = styled.img<MenuProps>`
  max-width: 400px;
  width: ${(props) => (props.isDesktop ? "30vw" : "50vw")};
  border-radius: 10px;
`;

const Content = styled.div<MenuProps>`
  flex: 2;
  padding-left: ${(props) => (props.isDesktop ? "20px" : 0)};
  margin-bottom: 40px;
  text-align: left;
`;

const Title = styled.h2<MenuProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(101, 80, 79);
  text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  padding-left: ${(props) => (props.isDesktop ? "7px" : 0)};

  padding-top: ${(props) => (props.isDesktop ? 0 : "16px")};
  padding-bottom: 10px;
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
  font-size: 15px;
  line-height: 1.5;
  color: #555;
  padding-bottom: 7px;
`;

const Career = styled.div``;

const IaC = styled.div<MenuProps>`
  display: ${(props) => (props.isDesktop ? "flex" : "block")};
`;

const Year = styled.div`
  color: rgb(101, 80, 79);
  font-size: 1.1rem;
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 10px;
`;

export default function Artist() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <Container>
      <SubTitle>About Artist</SubTitle>
      <IaC isDesktop={isDesktop}>
        <ImageWrapper>
          <Image isDesktop={isDesktop} src={img1} alt="shop" />
        </ImageWrapper>
        <Content isDesktop={isDesktop}>
          <Title isDesktop={isDesktop}>윤, Yoon</Title>
          <Description>
            정교한 기술과 예술적 감각을 바탕으로, 자연스럽고 세련된 결과를
            제공합니다.
          </Description>
          <Description>
            ✶&nbsp;&nbsp;&nbsp;메이크업 국가 자격증 보유
          </Description>
          <Description>
            ✶&nbsp;&nbsp;&nbsp;한국/일본에서 최다 시술 경험 보유
          </Description>
          <Career>
            <Year>2025</Year>
            <Description>
              ✶&nbsp;&nbsp;&nbsp;국제 아트메이크 콘테스트 심사위원
            </Description>
            <Description>
              ✶&nbsp;&nbsp;&nbsp;국제 아트메이크 콘테스트 수상 경력
            </Description>
            <Year>2024</Year>
            <Description>
              ✶&nbsp;&nbsp;&nbsp;메이크업 아티스트 출신, 7년 이상의 미용 경력
            </Description>

            <Description>✶&nbsp;&nbsp;&nbsp;아트메이크 스쿨 운영 </Description>
          </Career>
        </Content>
      </IaC>
    </Container>
  );
}
