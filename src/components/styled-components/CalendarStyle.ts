import dayjs from "dayjs";
import styled from "styled-components";
import React from "react";

const today = dayjs().date();

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  gap: 5px;
`;

export const Day = styled.div<{ isAbled: boolean; isBlank: boolean }>`
  background-color: ${({ isBlank, isAbled }) =>
    isBlank ? "transparent" : isAbled ? "#fff" : "#e0e0e0"};
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  cursor: ${({ isAbled }) =>
    isAbled ? "pointer" : "default"}; // 오늘 이전이면 커서 비활성화
  pointer-events: ${({ isAbled }) => (isAbled ? "auto" : "none")}; // hover 막기

  &:hover {
    background-color: ${({ isAbled }) =>
      isAbled ? "rgb(252, 209, 216)" : "inherit"};
  }
`;
