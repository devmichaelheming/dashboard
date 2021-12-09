import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 40px;
  border: 0;
  background: var(--button);
  color: white;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
  transition: all 0.2s ease-out;

  &:hover {
    background: var(--buttonHover);
    transition: all 0.2s ease-out;
  }
`;
