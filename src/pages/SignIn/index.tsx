import React, { useEffect, useState, FormEvent, useContext } from "react";
import Lottie from "react-lottie";
import AuthContext from "contexts/auth";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import { loading } from "assets";
import { Container, Form, TitleForm, Redirect, ButtonSubmit } from "./styles";

const SignIn = function () {
  const { signed, signIn } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  console.log(signed, signIn);

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();

    signIn();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  return (
    <Container>
      {isLoading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <Form>
          <TitleForm>Acessar sistema</TitleForm>

          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user" />
            </span>
            <InputText
              value={username}
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock" />
            </span>
            <Password
              value={password}
              toggleMask
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <ButtonSubmit onClick={handleSignIn}>Acessar</ButtonSubmit>

          <span className="redirect">
            Não é registrado ?
            <Redirect to="/signUp"> Registre-se agora!</Redirect>
          </span>
        </Form>
      )}
    </Container>
  );
};

export default SignIn;
