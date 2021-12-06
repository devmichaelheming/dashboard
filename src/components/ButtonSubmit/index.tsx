import React from "react";

import { Container } from "./styles";

type Props = {
  title: string;
  action: any;
};

const ButtonSubmit = function ({ title, action }: Props) {
  return (
    <Container onClick={action} type="submit">
      {title}
    </Container>
  );
};

export default ButtonSubmit;
