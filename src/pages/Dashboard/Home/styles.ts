import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const SectionWidget = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  /* @media (max-width: 1200px) {
    flex-direction: column;
  } */
`;

export const SectionCharts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .MuiGrid-item {
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.25rem 0.75rem rgb(18 38 63 / 8%);

    .p-chart {
      height: 400px;
    }

    @media (max-width: 1200px) {
      min-width: 100%;

      .p-chart {
        height: auto;
      }
      &:nth-child(2) {
        .p-chart {
          width: 40% !important;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const SectionTable = styled.div``;
