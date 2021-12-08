import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: -16px;
  gap: 30px;
  display: flex;
  flex-direction: column;

  .MuiGrid-item {
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    @media (max-width: 1200px) {
      min-width: 100%;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
