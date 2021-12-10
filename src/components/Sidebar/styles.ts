import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100%;

  .MuiPaper-root {
    background: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: none;
    z-index: 1000;

    button {
      svg {
        fill: #000;
      }
    }

    .MuiTypography-root {
      color: #000;
    }
  }

  .toolbar {
    justify-content: space-between;

    .header {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      .header-profile {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;
