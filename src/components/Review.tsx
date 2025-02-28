import img1 from "../images/Review.png";
import { SubTitle } from "./FAQ";
import styled from "styled-components";

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Contents = styled.div`
  text-align: center;
`;

export default function Review() {
  return (
    <Container>
      <Contents>
        <SubTitle>리뷰</SubTitle>
        <img width={"400"} src={img1} alt="Logo" />
      </Contents>
    </Container>
  );
}
