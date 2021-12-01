import React from "react";
// import api from "services/api";

import { Header, Sidebar, Main } from "components";

import { Container, Wrapper } from "./styles";

const Dashboard = function () {
  // const handleMyIncome = useCallback(async () => {
  //   const response = await api.get("/");
  //   console.log(response);
  // }, []);

  // useEffect(() => {
  //   if (handleMyIncome) {
  //     handleMyIncome();
  //   }
  // }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
