import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { auth } from "services/firebase";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import { loading } from "assets";
import {
  Container,
  Form,
  TitleForm,
  IconEmail,
  IconPassword,
  ButtonSubmit,
  Redirect,
} from "./styles";

const SignUp = function () {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        const { user } = userCredential;
        console.log(user);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });

    // setValues({
    //   email,
    //   password,
    // });
  };

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

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
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <ButtonSubmit onClick={handleSubmit}>Cadastrar</ButtonSubmit>

          <span className="redirect">
            já é registrado ?<Redirect to="/"> Entrar!</Redirect>
          </span>
        </Form>
      )}
    </Container>
  );
};

export default SignUp;
