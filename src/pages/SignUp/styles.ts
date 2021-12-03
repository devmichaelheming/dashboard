import styled, { css } from "styled-components";
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
`;

export const TitleForm = styled.h1``;

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
