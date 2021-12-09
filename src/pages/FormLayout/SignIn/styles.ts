import styled from "styled-components";

export const Form = styled.form`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 20px;
  border-radius: 8px;
  width: 500px;
  gap: 20px;
  @media (max-width: 600px) {
    width: 90%;
  }

  .p-inputgroup:nth-child(2) {
    padding: 20px 0;
  }
`;

export const TitleForm = styled.h1`
  padding-bottom: 10px;
`;
