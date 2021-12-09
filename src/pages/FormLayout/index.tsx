import React, { ReactNode } from "react";

import bannerImg from "assets/banner.png";

import {
  Container,
  SectionBanner,
  ImageBanner,
  InfoBanner,
  Descricao,
  SocialNetwork,
  IconFacebook,
  IconTwitter,
  IconInstagram,
  SectionLogin,
} from "./styles";

type Props = {
  children: ReactNode;
};

const FormLayout = function ({ children }: Props) {
  return (
    <Container>
      <SectionBanner>
        <ImageBanner src={bannerImg} />
        <InfoBanner>
          <Descricao>
            <h1>Dashboard in ReactJs</h1>
            <p>
              This panel was developed in: React Js, Typescript, Styled
              Components, Firebase...
            </p>
          </Descricao>
          <SocialNetwork>
            <a href="https://www.facebook.com/">
              <IconFacebook />
            </a>
            <a href="https://twitter.com/">
              <IconTwitter />
            </a>
            <a href="https://www.instagram.com/">
              <IconInstagram />
            </a>
          </SocialNetwork>
        </InfoBanner>
      </SectionBanner>

      <SectionLogin>{children}</SectionLogin>
    </Container>
  );
};

export { FormLayout };
