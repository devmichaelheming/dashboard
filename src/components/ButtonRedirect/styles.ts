import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 16px;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 20%;
    height: 1px;
    background: var(--secondary);
    @media (max-width: 500px) {
      width: 90%;
    }
  }

  &::before {
    margin-right: 8px;
    @media (max-width: 600px) {
      margin-right: 0px;
    }
  }
  &::after {
    margin-left: 8px;
    @media (max-width: 600px) {
      margin-left: 0px;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const Redirect = styled(Link)`
  color: var(--button);
  text-decoration: none;
`;
