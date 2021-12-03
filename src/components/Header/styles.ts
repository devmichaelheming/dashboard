import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  left: 0px;
  padding: 0 40px;
  box-shadow: 1px 1px 13px #eee;
  z-index: 1;
`;

export const ContentLeft = styled.div``;

export const Logo = styled.img``;

export const ContentRight = styled.div`
  display: flex;
  gap: 40px;
  height: 100%;
  align-items: center;
`;

export const Widget = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconsCSS = css`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
`;

export const MoneyIcon = styled.img`
  ${IconsCSS}
`;

export const ArrowTopIcon = styled.img`
  ${IconsCSS}
`;

export const ArrowDiagonalIcon = styled.img`
  ${IconsCSS}
`;

export const ButtonProfile = styled.button`
  border: none;
  background: transparent;

  &:focus {
    outline: 0;
    cursor: pointer;
  }
`;

export const ArrowBottomIcon = styled.img`
  ${IconsCSS}
`;

export const Descricao = styled.div`
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: lighter;
`;

export const ButtonWallet = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export const BarsIcon = styled.img`
  ${IconsCSS}
`;
