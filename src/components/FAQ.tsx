import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";
const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

// const ImageWrapper = styled.div`
//   flex: 1;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Image = styled.img`
//   width: 100%;
//   border-radius: 10px;
// `;

const Content = styled.div``;

const FAQItem = styled.div`
  padding: 10px 0;
  min-height: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  // font-weight: bold;
  cursor: pointer;
  color: #333;
  padding: 10px;
  background: rgb(230, 220, 212);
  color: #666;
  width: 80vw;
  max-width: 800px;
  border-radius: 5px;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background-color: rgb(169, 161, 154);
    color: rgb(241, 235, 227);
  }
`;

const Answer = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  font-size: 12px;
  line-height: 1.6;
  color: #555;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 80vw;
  max-width: 800px;
  min-height: 60px;
`;

export const SubTitle = styled.div`
  text-align: center;
  font-family: "Diphylleia";
  font-style: italic;
  font-weight: bold;
  color: rgb(135, 121, 108);
  font-size: 1.7rem;
  margin-top: 3vh;
  margin-bottom: 5vh;
`;

const faqData = [
  {
    question: "시술 후 얼마나 유지되나요?",
    answer:
      "반영구 시술은 개인의 피부 타입, 생활 습관, 피부 재생 주기에 따라 유지 기간이 달라질 수 있습니다. 보통 8개월 ~1년 반 정도 유지되며, 자연스럽게 색이 연해지므로 필요에 따라 리터치 시술을 받으시면 됩니다.",
  },
  {
    question: "시술 후 바로 자연스러워지나요?",
    answer:
      "시술 직후에는 색상이 다소 진해 보일 수 있으며, 붓기나 각질 탈락 과정이 있을 수 있습니다. 일반적으로 약 7~10일 내로 자연스러워 집니다.",
  },
  {
    question: "통증이 심한가요?",
    answer:
      "개인 차가 있지만, 대체로 통증을 거의 느끼지 못하시며, 간혹 미세한 따끔거림이나 간지러운 느낌을 느끼실 수 있으나 참을 수 있는 수준입니다.",
  },
  {
    question:
      "메이크업을 하고 방문해도 되나요? 또 시술 후 메이크업은 언제부터 할 수 있나요?",
    answer:
      "방문 시 시술부위 클렌징은 도와드리기 때문에 메이크업을 하고 방문하셔도 됩니다(속눈썹파마 시엔 눈화장은 제거하고 오셔야합니다) 또한 시술 후 시술부위를 피한 당일화장이 가능합니다.",
  },
  {
    question: "시술 후 리터치는 필수인가요?",
    answer:
      "리터치는 필수가 아닌 개인의 선택입니다. 개인에 따라 탈각은 모두 다르게 진행되기 때문에 1차 시술 후 더 진하게 하고싶거나 수정할 부분이 있다고 느끼시면 리터치를 추천드립니다.",
  },
  {
    question: "시술이 불가능한 경우도 있나요?",
    answer:
      "임산부, 수유 중인 분들은 호르몬 변화로 인해 색소가 제대로 자리 잡지 않을 수 있으며, 피부가 예민해질 가능성이 있어 시술을 권장하지 않습니다. 또한 6개월 이내 성형수술을 하신 분들은 꼭 사전에 말씀을 해주시고 병원 상담 후 예약 부탁드립니다.",
  },
  {
    question: "기존에 한 반영구가 있는데 디자인, 색상 변경이 가능할까요?",
    answer:
      "기존 시술 상태에 따라 다르므로, 정확한 상담 후 결정하는 것이 좋습니다. 중화커버업으로 커버할 수 있는 경우가 대부분이지만 경우에 따라 제거 후 재시술을 권장할 수도 있습니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      {/* <ImageWrapper>
        <Image src={img1} alt="shop" />
      </ImageWrapper> */}
      <Content>
        <SubTitle>자주 묻는 질문</SubTitle>
        {faqData.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </Content>
    </Container>
  );
}
