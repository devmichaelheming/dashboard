import React, { useState } from "react";
import {
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { ToastContainer, toast as notify } from "react-toastify";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { db } from "services/firebase";
import { addDoc, collection } from "firebase/firestore";

interface IStateProps {
  amount?: string;
  password: string;
  weight?: string;
  weightRange?: string;
  showPassword?: boolean;
}

interface IValuesProps {
  amount?: string;
  password: string;
  weight?: string;
  weightRange?: string;
  showPassword?: boolean;
}

interface IUserProps {
  username: string;
  email: string;
  password: string;
}

interface Props {
  isVisible: boolean;
  username: string;
  email: string;
  values: IValuesProps;
  users: IUserProps[];
  hideModal(): void;
  onChangeUsername: (text: string) => void;
  onChangeEmail: (text: string) => void;
  setValues: (values: IValuesProps) => void;
  setUsers: (users: IUserProps) => void;
}

const Modal = function ({
  isVisible,
  hideModal,
  username,
  email,
  values,
  onChangeUsername,
  onChangeEmail,
  setValues,
  setUsers,
  users,
}: Props) {
  const collectionRef = collection(db, "users");
  const [message, setMessage] = useState(false);

  const configToast = {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  const handleChange =
    (prop: keyof IStateProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleCreateUser = async () => {
    const data: IUserProps = {
      username,
      email,
      password: values.password,
    };

    try {
      await addDoc(collectionRef, data);
      hideModal();
      setUsers([...users, data]);

      setMessage(true);
      notify.success("Usuário cadastrado com sucesso!.", {
        position: "top-right",
        theme: "colored",
        ...configToast,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {message ? <ToastContainer /> : ""}
      <Dialog fullWidth maxWidth="sm" open={isVisible} onClose={hideModal}>
        <DialogTitle>Cadastrar usuário</DialogTitle>
        <DialogContent>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="outlined-basic"
              onChange={e => onChangeUsername(e.target.value)}
              value={username}
              label="Username"
              variant="outlined"
              margin="dense"
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="outlined-basic"
              onChange={e => onChangeEmail(e.target.value)}
              value={email}
              label="E-Mail"
              variant="outlined"
              margin="dense"
            />
          </FormControl>
          <FormControl sx={{ width: "100%", top: "6px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
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
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleCreateUser}
            color="success"
          >
            Save
          </Button>
          <Button onClick={hideModal} className="btn-close" color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { Modal };
