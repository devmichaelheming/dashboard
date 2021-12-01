import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMail, BiLockAlt } from "styles/icons";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 40px 20px;
  border-radius: 8px;
  width: 500px;

  .p-inputgroup:nth-child(2) {
    padding: 20px 0;
  }

  .redirect {
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    &::before,
    &::after {
      content: "";
      display: block;
      width: 30%;
      height: 1px;
      background: var(--secondary);
    }

    &::before {
      margin-right: 8px;
    }
    &::after {
      margin-left: 8px;
    }
  }
`;

export const TitleForm = styled.h1``;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 40px;
  border: 0;
  background: var(--button);
  color: white;
  border-radius: 6px;
  margin: 20px 0;
  font-size: 16px;
  cursor: pointer;
`;

const iconsCSS = css`
  width: 20px;
  height: 20px;
`;

export const IconEmail = styled(AiOutlineMail)`
  ${iconsCSS}
`;

export const IconPassword = styled(BiLockAlt)`
  ${iconsCSS}
`;

export const Redirect = styled(Link)`
  color: var(--button);
  text-decoration: none;
`;
