import React, { useState, useEffect, FormEvent, useContext } from "react";
import { AuthContext } from "contexts/auth";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Loading, ButtonSubmit, ButtonRedirect } from "components";

import { Form, TitleForm } from "./styles";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const SignUp = function () {
  const { signUp } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: FormEvent) => {
    if (email && values.password !== "") {
      event.preventDefault();
      signUp(email, values.password);
    }
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
    <Form>
      <TitleForm>Sign Up</TitleForm>

      <FormControl variant="outlined" fullWidth>
        <TextField
          id="outlined-basic"
          label="E-Mail"
          onChange={e => setEmail(e.target.value)}
          value={email}
          fullWidth
        />
      </FormControl>

      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <ButtonSubmit title="SIGN UP" action={handleSubmit} />

      <ButtonRedirect type="signUp" />
    </Form>
  );
};

export { SignUp };
