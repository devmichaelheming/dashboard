import React, { useState, FormEvent, useContext, useEffect } from "react";
import AuthContext from "contexts/auth";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import { Loading, ButtonSubmit, ButtonRedirect } from "components";

import { Container, Form, TitleForm, IconEmail } from "./styles";

const SignIn = function () {
  const { signIn } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();
    signIn(email, password);
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
        <TitleForm>Acessar sistema</TitleForm>

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
            <i className="pi pi-lock" />
          </span>
          <Password
            value={password}
            toggleMask
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <ButtonSubmit title="Acessar" action={handleSignIn} />

        <ButtonRedirect type="signIn" />
      </Form>
    </Container>
  );
};

export default SignIn;
