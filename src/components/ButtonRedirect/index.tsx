import React from "react";

import { Container, Redirect } from "./styles";

type Props = {
  type: string;
};

const ButtonRedirect = function ({ type }: Props) {
  return (
    <Container>
      <span>
        {type === "signIn" ? (
          <>
            Não é registrado ?
            <Redirect to="/signUp"> Registre-se agora!</Redirect>
          </>
        ) : (
          <>
            já é registrado ?<Redirect to="/"> Entrar!</Redirect>
          </>
        )}
      </span>
    </Container>
  );
};

export { ButtonRedirect };
