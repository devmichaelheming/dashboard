import React, { useState, useEffect, useRef } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";

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
import "./demo.css";

import { ToastContainer, toast as notify } from "react-toastify";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { db } from "services/firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  // updateDoc,
} from "firebase/firestore";
// import { getProducts } from "./service";
// import { dataProducts } from "./data";

import { Container, Header, TitleHeader, IconUsers, Content } from "./styles";

interface IUsersProps {
  username: string;
  email: string;
  password: string;
}

interface IStateProps {
  amount?: string;
  password: string;
  weight?: string;
  weightRange?: string;
  showPassword?: boolean;
}

const Users = function () {
  const [users, setUsers] = useState<IUsersProps[]>([]);
  const collectionRef = collection(db, "users");
  const [globalFilter, setGlobalFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [values, setValues] = React.useState<IStateProps>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const toast = useRef(null);

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
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleShowFormCreate = () => {
    setOpen(true);
  };

  const handleShowFormUpdate = async (id: any) => {
    setOpen(true);

    const userDoc = doc(db, "users", id);
    const docSnap = await getDoc(userDoc);

    setUsername(docSnap.data()?.username);
    setEmail(docSnap.data()?.email);
    setValues({
      password: docSnap.data()?.password,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setValues({
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
    });
    setUsername("");
    setEmail("");
  };

  const handleCreateUser = async () => {
    const data = {
      username,
      email,
      password: values.password,
    };

    try {
      await addDoc(collectionRef, data);
      setUsers([...users, data]);

      handleClose();
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

  // const handleUpdateUser = async (id: any) => {
  //   setOpen(true);

  //   const data = {
  //     username,
  //     email,
  //     password: values.password,
  //   };

  //   const userDoc = doc(db, "users", id);
  //   updateDoc(userDoc, data);
  // };

  const handleConfirmDelete = (row: any) => {
    console.log(`confirm delete${row}`);
  };

  const actionBodyTemplate = (rowData: any) => {
    return (
      <>
        <IconButton
          aria-label="edit"
          color="success"
          onClick={() => handleShowFormUpdate(rowData.id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => handleConfirmDelete(rowData)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    );
  };

  const header = (
    <div className="table-header">
      <h5 className="p-mx-0 p-my-1">Informações dos usuários cadastrados</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionRef);
      setUsers(
        data.docs.map((value) => ({
          id: value.id,
          username: value.data().username,
          email: value.data().email,
          password: value.data().password,
        }))
      );
    };
    getUsers();
  }, [users]);

  return (
    <Container>
      {message ? <ToastContainer /> : ""}
      <Header>
        <TitleHeader>
          <IconUsers />
          <h4>Usuários</h4>
        </TitleHeader>
        <Button
          variant="contained"
          color="success"
          onClick={handleShowFormCreate}
        >
          <AddIcon />
          New
        </Button>
      </Header>
      <Content>
        <div className="datatable-crud-demo">
          <Toast ref={toast} />

          <div className="card">
            <DataTable
              value={users}
              dataKey="id"
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
              globalFilter={globalFilter}
              header={header}
              responsiveLayout="scroll"
            >
              <Column
                field="id"
                header="Id"
                sortable
                style={{ minWidth: "12rem" }}
              />
              <Column
                field="username"
                header="Name"
                sortable
                style={{ minWidth: "16rem" }}
              />
              <Column
                field="email"
                header="E-Mail"
                sortable
                style={{ minWidth: "16rem" }}
              />
              <Column
                header="Editar / Remover"
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "8rem" }}
              />
            </DataTable>

            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
              <DialogTitle>Cadastrar usuário</DialogTitle>
              <DialogContent>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    label="Username"
                    variant="outlined"
                    margin="dense"
                  />
                </FormControl>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id="outlined-basic"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    label="E-Mail"
                    variant="outlined"
                    margin="dense"
                  />
                </FormControl>
                <FormControl
                  sx={{ width: "100%", top: "6px" }}
                  variant="outlined"
                >
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
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
                <Button onClick={handleClose} color="error">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export { Users };
