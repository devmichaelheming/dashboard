import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  background: white;
  min-height: 100vh;

  .p-panelmenu {
    .p-panelmenu-header > a {
      border-radius: 0;
      background: transparent;
      border: none;
      position: relative;
      .p-panelmenu-icon {
        position: absolute;
        right: 15px;
      }
    }
    .p-panelmenu-content {
      border-right: none;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;

      .p-menuitem-link:focus {
        box-shadow: none;
      }
    }
  }
`;
