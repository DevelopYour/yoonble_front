import styled from "styled-components";
import img1 from "../images/img1.jpg";
import { SubTitle } from "./FAQ";
import { useRecoilValue } from "recoil";
import { isDesktopState } from "../recoil/atom";
import { MenuProps } from "./Header";

const Container = styled.div<MenuProps>`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div<MenuProps>`
  padding-right: ${(props) => (props.isDesktop ? "5vw" : 0)};
  display: ${(props) => (props.isDesktop ? "block" : "none")};
`;

const Image = styled.img`
  width: 12.5vw;
  max-width: 150px;
  border-radius: 10px;
`;

const Content = styled.div`
  max-width: 1200px;
`;

const Section = styled.div`
  width: 67.5vw;
  max-width: 800px;
  margin-bottom: 40px;
  text-align: left;
  display: flex;
  align-items: center;
`;

const Title = styled.h2<MenuProps>`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(101, 80, 79);
  text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  padding-left: ${(props) => (props.isDesktop ? "7px" : 0)};
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
  font-size: 0.8rem;
  line-height: 1.6;
  color: #555;
`;

const RepImageWrapper = styled.div<MenuProps>`
  display: ${(props) => (props.isDesktop ? "none" : "flex")};
  justify-content: center;
  margin-bottom: 50px;
`;

const RepImage = styled.img`
  width: 60vw;
  max-width: 300px;
  border-radius: 10px;
`;

const TaD = styled.div``;

export default function Shop() {
  const isDesktop = useRecoilValue(isDesktopState);
  return (
    <Container isDesktop={isDesktop}>
      <SubTitle>About Shop</SubTitle>
      <Content>
        <RepImageWrapper isDesktop={isDesktop}>
          <RepImage src={img1} alt="shop" />
        </RepImageWrapper>
        <Section>
          <ImageWrapper isDesktop={isDesktop}>
            <Image src={img1} alt="shop" />
          </ImageWrapper>
          <TaD>
            <Title isDesktop={isDesktop}>About</Title>
            <Description>
              세계적 수준의 디자인 감각과 정교한 기술력을 갖춘 프리미엄 디자인
              컨설팅 아트메이크 스튜디오입니다. 메이크업 아티스트 출신의
              전문가가 운영하며, 각국의 고객들에게 탁월한 디자인 실력으로 신뢰와
              사랑을 받고 있습니다. 한 사람 한 사람의 개성과 아름다움을
              극대화하는 맞춤형 아트메이크로, 차원이 다른 품격을 경험하세요.
            </Description>
          </TaD>
        </Section>
        <Section>
          <ImageWrapper isDesktop={isDesktop}>
            <Image src={img1} alt="shop" />
          </ImageWrapper>
          <TaD>
            <Title isDesktop={isDesktop}>Design</Title>
            <Description>
              대표원장이 상담부터 디자인, 시술까지 전 과정을 직접 진행하며, 고객
              한 분 한 분을 위한 최상의 결과를 제공합니다. 디자인 단계에서는
              얼굴형과 이미지를 정밀 분석하여 개개인의 조화로운 아름다움을
              극대화할 수 있는 디자인을 제안합니다. 고객님의 취향을 세심하게
              반영한 맞춤 컨설팅과 전문적인 심미적 접근을 통해, 완성도 높은
              결과를 약속드립니다.
            </Description>
          </TaD>
        </Section>
        <Section>
          <ImageWrapper isDesktop={isDesktop}>
            <Image src={img1} alt="shop" />
          </ImageWrapper>
          <TaD>
            <Title isDesktop={isDesktop}>1:1 예약제</Title>
            <Description>
              저희 살롱은 강남 도곡동 최상층 펜트하우스에 자리한 프라이빗
              아트메이크 스튜디오입니다. 아름다운 도심 전경과 함께 편안한 힐링
              공간을 제공하며, 시술 동안 최상의 안락함을 느끼실 수 있도록
              세심하게 관리합니다. 1:1 예약제로 운영되며, 오직 한 분만을 위한
              프리미엄 서비스를 제공합니다. 또한, 인천공항에서 출발하는
              공항버스를 이용하시면 살롱 바로 앞에서 편리하게 하차하실 수
              있습니다.
            </Description>
          </TaD>
        </Section>
      </Content>
    </Container>
  );
}
