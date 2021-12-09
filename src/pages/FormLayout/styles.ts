import styled, { css } from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "styles/icons";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 119, 181);
  background: linear-gradient(
    90deg,
    rgba(0, 119, 181, 1) 20%,
    rgba(255, 255, 255, 1) 20%
  );
  padding: 60px;
  scrollbar-width: none;

  @media (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 900px) {
    padding: 0;
    height: auto;
    flex-direction: column;
  }
`;

export const SectionBanner = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  @media (max-width: 900px) {
    width: 100%;
    height: 100vh;
    padding: 0;
  }
`;

export const ImageBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.6);
`;

export const InfoBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  position: absolute;
  flex-direction: column;
`;

export const Descricao = styled.div`
  > h1 {
    text-align: center;
    color: #fff;
    font-size: 48px;
  }

  > p {
    text-align: center;
    font-size: 20px;
    padding-top: 20px;
    color: #f2f2f2;
  }
`;

export const SocialNetwork = styled.div`
  position: absolute;
  bottom: 40px;
`;

const IconCSS = css`
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 0.6;
    transition: all 0.2s ease-out;
  }
`;

export const IconFacebook = styled(AiFillFacebook)`
  ${IconCSS}
`;

export const IconTwitter = styled(AiFillTwitterCircle)`
  ${IconCSS}
  margin: 0 20px;
`;

export const IconInstagram = styled(AiFillInstagram)`
  ${IconCSS}
`;

export const SectionLogin = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  @media (max-width: 900px) {
    width: 100%;
    height: 100vh;
  }
`;
