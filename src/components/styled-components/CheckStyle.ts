import styled from "styled-components";
import React from "react";

export const ServiceItemContainer = styled.div`
  display: grid;
  gap: 12px;
  width: 90%;
  max-width: 600px;
  margin: 20px auto;

  /* 모바일 (기본) → 1x6 */
  grid-template-columns: repeat(2, 1fr);

  /* 태블릿 (768px 이상) → 2x3 */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 데스크톱 (1024px 이상) → 3x2 */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ selected }) =>
    selected ? "rgb(169, 161, 154)" : "rgb(230, 220, 212)"};
  color: ${({ selected }) => (selected ? "rgb(241, 235, 227)" : "#666")};
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: rgb(167, 155, 143);
    color: rgb(241, 235, 227);
  }

  &:hover svg {
    color: rgb(241, 235, 227);
  }

  svg {
    color: ${({ selected }) => (selected ? "rgb(241, 235, 227)" : "#666")};
  }
`;
