import React, { useContext } from "react";
import AuthContext from "contexts/auth";

import LogoKinvo from "assets/logo.svg";
import Money from "assets/money.svg";
import ArrowTop from "assets/arrowTop.svg";
import ArrowDiagonal from "assets/arrowDiagonal.svg";
import ArrowBottom from "assets/arrowBottom.svg";
import Bars from "assets/bars.svg";
import {
  Container,
  ContentLeft,
  Logo,
  ContentRight,
  Widget,
  MoneyIcon,
  ArrowTopIcon,
  ArrowDiagonalIcon,
  ButtonProfile,
  ArrowBottomIcon,
  Descricao,
  Title,
  ButtonWallet,
  BarsIcon,
} from "./styles";

const Header = function () {
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Container>
      <ContentLeft>
        <Logo src={LogoKinvo} alt="logo" />
      </ContentLeft>
      <ContentRight>
        <Widget>
          <MoneyIcon src={Money} alt="icon money" />
          <Descricao>
            <Title>SALDO BRUTO</Title>
            <span>130,000.00</span>
          </Descricao>
        </Widget>

        <Widget>
          <ArrowTopIcon src={ArrowTop} alt="icon arrow top" />
          <Descricao>
            <Title>SALDO BRUTO</Title>
            <span>130,000.00</span>
          </Descricao>
        </Widget>

        <Widget>
          <ArrowDiagonalIcon src={ArrowDiagonal} alt="icon Arrow diagonal" />
          <Descricao>
            <Title>SALDO BRUTO</Title>
            <span>130,000.00</span>
          </Descricao>
        </Widget>

        <Widget>
          <ButtonProfile>
            <ArrowBottomIcon src={ArrowBottom} alt="icon Arrow bottom" />
          </ButtonProfile>
          <Descricao>
            <Title>CARTEIRA</Title>
            <span>Minha Cateira</span>
          </Descricao>
        </Widget>

        <ButtonWallet onClick={handleSignOut}>
          <BarsIcon src={Bars} alt="icon bars" />
        </ButtonWallet>
      </ContentRight>
    </Container>
  );
};

export default Header;
