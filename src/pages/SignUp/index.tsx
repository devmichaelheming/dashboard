import React, { useState, useContext, useEffect } from "react";
import AuthContext from "contexts/auth";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import { Loading, ButtonSubmit, ButtonRedirect } from "components";

import { Container, Form, TitleForm, IconEmail, IconPassword } from "./styles";

const SignUp = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { signUp } = useContext(AuthContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    signUp(email, password);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <Container>
      <Form>
        <TitleForm>Cadastrar</TitleForm>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <IconEmail />
          </span>
          <InputText
            value={email}
            placeholder="E-Mail"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <IconPassword />
          </span>
          <Password
            value={password}
            toggleMask
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <ButtonSubmit title="Cadastrar" action={handleSubmit} />

        <ButtonRedirect type="signUp" />
      </Form>
    </Container>
  );
};

export default SignUp;
