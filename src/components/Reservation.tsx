import { useEffect, useState } from "react";
import { AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getArtmakes, IArtmake } from "../fetcher";
import img1 from "../images/Notice.png";
import { selectedArtsState } from "../recoil/atom";
import { Button } from "./styled-components/ButtonStyle";
import {
  ServiceItem,
  ServiceItemContainer,
} from "./styled-components/CheckStyle";
import React from "react";
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

export default function Reservation() {
  const navigate = useNavigate();
  const [artmakes, setArtmakes] = useState<IArtmake[]>([]);
  const [selectedArts, setSelectedArts] = useRecoilState(selectedArtsState);

  // some(): 배열 속 존재 여부 반환
  const toggleSelection = (artmake: IArtmake) => {
    setSelectedArts((prevItems) =>
      prevItems.some((item) => item.id === artmake.id)
        ? prevItems.filter((item) => item.id !== artmake.id)
        : [...prevItems, artmake]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setArtmakes(await getArtmakes());
      } catch (err) {
        console.error("artmakes 불러오기 실패: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <SubTitle>예약하기</SubTitle>
      <Contents>
        <img width={"300"} src={img1} alt="Logo" />
        <ServiceItemContainer>
          {artmakes.map((artmake) => (
            <ServiceItem
              key={artmake.id}
              selected={selectedArts.includes(artmake)}
              onClick={() => toggleSelection(artmake)}
            >
              {selectedArts.some((item) => item.id === artmake.id) ? (
                <AiOutlineCheckSquare size={24} />
              ) : (
                <AiOutlineBorder size={24} />
              )}
              <span>
                {artmake.name} ({artmake.duration}분 소요)
              </span>
            </ServiceItem>
          ))}
        </ServiceItemContainer>
        <Button
          onClick={() => navigate("/book")}
          disabled={selectedArts.length === 0}
        >
          {selectedArts.length > 0 ? "예약하기" : "예약할 시술을 선택해 주세요"}
        </Button>
      </Contents>
    </Container>
  );
}
