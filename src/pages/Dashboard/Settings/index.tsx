import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";

import { Button, IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { db } from "services/firebase";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import {
  Container,
  Header,
  TitleHeader,
  IconUsers,
  Content,
} from "../Users/styles";

import { Modal } from "./modal";

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

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [users, setUsers] = useState<IUsersProps[]>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [values, setValues] = React.useState<IStateProps>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const collectionRef = collection(db, "users");
  const toast = useRef(null);

  const handleShowFormUpdate = async (id: string) => {
    setOpen(true);

    const userDoc = doc(collectionRef, id);
    const docSnap = await getDoc(userDoc);

    setUsername(docSnap.data()?.username);
    setEmail(docSnap.data()?.email);
    setValues({
      password: docSnap.data()?.password,
    });
  };

  const handleConfirmDelete = (row: any) => {
    console.log(`confirm delete${row}`);
  };

  const handleShowFormCreate = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsername("");
    setEmail("");
    setValues({
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
    });
  };

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

  return (
    <Container>
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

            <Modal
              isVisible={open}
              hideModal={handleClose}
              username={username}
              onChangeUsername={(text) => setUsername(text)}
              email={email}
              onChangeEmail={(text) => setEmail(text)}
              values={values}
              setValues={setValues}
              setUsers={setUsers}
              users={users}
            />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export { Settings };
