import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { getProducts } from "./service";
import { dataProducts } from "./data";
import "./demo.css";

import { Container, Header, TitleHeader, IconUsers, Content } from "./styles";

interface IProductsProps {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string | "";
  rating: number;
}

const Users = function () {
  const emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  const [products, setProducts] = useState<IProductsProps[]>(dataProducts);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    getProducts.then((data: any) => setProducts(data));
  }, []);

  const formatCurrency = (value: any) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    console.log("salvar");
  };

  const editProduct = (row: string) => {
    console.log(`editar${row}`);
  };

  const confirmDeleteProduct = (row: string) => {
    console.log(`confirm delete${row}`);
  };

  const deleteProduct = () => {
    console.log("delete");
  };

  const deleteSelectedProducts = () => {
    console.log("delete seleted products");
  };

  const onCategoryChange = () => {
    console.log("category");
  };

  const onInputChange = (e: any, name: string) => {
    console.log(`onInputChange${e}${name}`);
  };

  const onInputNumberChange = (e: any, name: string) => {
    console.log(`onInputNumberChange${e}${name}`);
  };

  const priceBodyTemplate = (rowData: any) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData: any) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <span
        className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}
      >
        {rowData.inventoryStatus}
      </span>
    );
  };

  const actionBodyTemplate = (rowData: string) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </>
    );
  };

  const header = (
    <div className="table-header">
      <h5 className="p-mx-0 p-my-1">Manage Products</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveProduct}
      />
    </>
  );
  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </>
  );
  const deleteProductsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </>
  );

  return (
    <Container>
      <Header>
        <TitleHeader>
          <IconUsers />
          <h4>Usuários</h4>
        </TitleHeader>
        <Button
          label="New"
          icon="pi pi-plus"
          className="p-button-success p-mr-2"
          onClick={openNew}
        />
      </Header>
      <Content>
        <div className="datatable-crud-demo">
          <Toast ref={toast} />

          <div className="card">
            <DataTable
              ref={dt}
              value={products}
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
                header="#Id"
                sortable
                style={{ minWidth: "12rem" }}
              />
              <Column
                field="name"
                header="Name"
                sortable
                style={{ minWidth: "16rem" }}
              />
              <Column
                field="price"
                header="Price"
                body={priceBodyTemplate}
                sortable
                style={{ minWidth: "8rem" }}
              />
              <Column
                field="category"
                header="Category"
                sortable
                style={{ minWidth: "10rem" }}
              />
              <Column
                field="rating"
                header="Reviews"
                body={ratingBodyTemplate}
                sortable
                style={{ minWidth: "12rem" }}
              />
              <Column
                field="inventoryStatus"
                header="Status"
                body={statusBodyTemplate}
                sortable
                style={{ minWidth: "12rem" }}
              />
              <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "8rem" }}
              />
            </DataTable>
          </div>

          <Dialog
            visible={productDialog}
            style={{ width: "450px" }}
            header="Product Details"
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
          >
            <div className="p-field">
              <label>Name</label>
              <InputText
                id="name"
                value={product.name}
                onChange={e => onInputChange(e, "name")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && !product.name,
                })}
              />
              {submitted && !product.name && (
                <small className="p-error">Name is required.</small>
              )}
            </div>
            <div className="p-field">
              <label>Description</label>
              <InputTextarea
                id="description"
                value={product.description}
                onChange={e => onInputChange(e, "description")}
                required
                rows={3}
                cols={20}
              />
            </div>

            <div className="p-field">
              <label className="p-mb-3">Category</label>
              <div className="p-formgrid p-grid">
                <div className="p-field-radiobutton p-col-6">
                  <RadioButton
                    inputId="category1"
                    name="category"
                    value="Accessories"
                    onChange={onCategoryChange}
                    checked={product.category === "Accessories"}
                  />
                  <label>Accessories</label>
                </div>
                <div className="p-field-radiobutton p-col-6">
                  <RadioButton
                    inputId="category2"
                    name="category"
                    value="Clothing"
                    onChange={onCategoryChange}
                    checked={product.category === "Clothing"}
                  />
                  <label>Clothing</label>
                </div>
                <div className="p-field-radiobutton p-col-6">
                  <RadioButton
                    inputId="category3"
                    name="category"
                    value="Electronics"
                    onChange={onCategoryChange}
                    checked={product.category === "Electronics"}
                  />
                  <label>Electronics</label>
                </div>
                <div className="p-field-radiobutton p-col-6">
                  <RadioButton
                    inputId="category4"
                    name="category"
                    value="Fitness"
                    onChange={onCategoryChange}
                    checked={product.category === "Fitness"}
                  />
                  <label>Fitness</label>
                </div>
              </div>
            </div>

            <div className="p-formgrid p-grid">
              <div className="p-field p-col">
                <label>Price</label>
                <InputNumber
                  id="price"
                  value={product.price}
                  onValueChange={e => onInputNumberChange(e, "price")}
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                />
              </div>
              <div className="p-field p-col">
                <label>Quantity</label>
                <InputNumber
                  id="quantity"
                  value={product.quantity}
                  onValueChange={e => onInputNumberChange(e, "quantity")}
                />
              </div>
            </div>
          </Dialog>

          <Dialog
            visible={deleteProductDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductDialogFooter}
            onHide={hideDeleteProductDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle p-mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Are you sure you want to delete <b>{product.name}</b>?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteProductsDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductsDialogFooter}
            onHide={hideDeleteProductsDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle p-mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Are you sure you want to delete the selected products?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </Content>
    </Container>
  );
};

export { Users };
