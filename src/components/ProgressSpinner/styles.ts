import styled from "styled-components";

export const Spinner = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: "";
    box-sizing: border-box;
    display: block;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-top-color: var(--button);
    animation: spinner 0.6s linear infinite;
  }
`;
