import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(135, 118, 110); /* 깊은 브라운 */
  color: #f5e9dc; /* 부드러운 베이지 */
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #4a3228; /* 어두운 브라운 */
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: transparent; /* 흐린 베이지 */
    color: rgb(108, 102, 93);
    border: none;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export const MonthButton = styled.button`
  background-color: rgb(171, 149, 139); /* 깊은 브라운 */
  color: #f5e9dc; /* 부드러운 베이지 */
  border: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgb(101, 70, 57); /* 어두운 브라운 */
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    visibility: hidden;
  }
`;
