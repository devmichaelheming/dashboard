import styled from "styled-components";
import { FaUsers } from "styles/icons";

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 0 20px;
  box-shadow: 0 0.25rem 0.75rem rgb(18 38 63 / 8%);

  .p-button-label {
    color: #fff;
  }
  .p-button-icon {
    color: #fff;
  }
`;

export const TitleHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const IconUsers = styled(FaUsers)`
  width: 40px;
  height: 40px;
  padding-right: 10px;
  fill: var(--quaternary);
`;

export const Content = styled.div`
  min-height: calc(100% - 70px);
  height: auto;
  width: 100%;
  margin-top: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0 0.25rem 0.75rem rgb(18 38 63 / 8%);

  .datatable-crud-demo {
    width: 100%;
    .p-datatable {
      .p-datatable-header {
        background: transparent;
      }
      .p-datatable-wrapper {
        .p-datatable-tbody {
          .p-button-editar {
            background: transparent;
            border: none;
            &:focus {
              box-shadow: none;
            }
            span {
              color: #16a34a;
            }
            &:hover {
              background: var(--primary);
            }
          }
          .p-button-deletar {
            background: transparent;
            border: none;
            &:focus {
              box-shadow: none;
            }
            span {
              color: #ef4444;
            }
            &:hover {
              background: var(--primary);
            }
          }
        }
      }
    }

    .p-column-title {
      color: #000;
    }
    .p-button-icon {
      color: #fff;
    }
    .p-datatable .p-paginator-bottom {
      border-radius: 6px;
    }
  }
`;
