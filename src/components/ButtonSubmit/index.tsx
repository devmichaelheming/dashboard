import React from "react";

import { ProgressSpinner } from "../ProgressSpinner";
import { Container } from "./styles";

type Props = {
  title: string;
  loading: boolean;
};

const ButtonSubmit = function ({ title, loading }: Props) {
  return (
    <Container type="submit">
      {title}
      {loading ? <ProgressSpinner /> : ""}
    </Container>
  );
};

export { ButtonSubmit };
