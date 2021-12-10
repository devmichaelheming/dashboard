import React from "react";

import { Container } from "./styles";

type Props = {
  title: string;
};

const Widget = function ({ title }: Props) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export { Widget };
