import React from "react";

import { PanelMenu } from "primereact/panelmenu";

import { items } from "./context";

import { Container } from "./styles";

const Sidebar = function () {
  return (
    <Container>
      <PanelMenu model={items} />

      {/* <ul>
        <li>
          <SectionIcon>
            <div>
              <IconResumo src={IResumo} />
              <span>Resumo da carteira</span>
            </div>
            <IconChevronRight />
          </SectionIcon>
        </li>
        <li>
          <SectionIcon>
            <div>
              <IconProdutos src={IProdutos} />
              <span>Meus produtos</span>
            </div>
            <IconChevronRight />
          </SectionIcon>
        </li>
        <li>
          <SectionIcon>
            <div>
              <IconProventos src={IProventos} />
              <span>Meus proventos</span>
            </div>
            <IconChevronRight />
          </SectionIcon>
        </li>
        <li>
          <SectionIcon>
            <div className="active">
              <IconAtivos src={IAtivos} />
              <span>Classe de ativos</span>
            </div>
            <IconChevronRight />
          </SectionIcon>
          <ul>
            <li>
              <SectionIcon>
                <div>
                  <IconProventos src={IProventos} />
                  <span>Meus proventos</span>
                </div>
                <IconChevronRight />
              </SectionIcon>
            </li>
            <li>
              <SectionIcon>
                <div>
                  <IconProventos src={IProventos} />
                  <span>Meus proventos</span>
                </div>
                <IconChevronRight />
              </SectionIcon>
            </li>
            <li>
              <SectionIcon>
                <div>
                  <IconProventos src={IProventos} />
                  <span>Meus proventos</span>
                </div>
                <IconChevronRight />
              </SectionIcon>
            </li>
          </ul>
          <hr />
        </li>
        <li>
          <SectionIcon>
            <div>
              <IconProdutos src={IProdutos} />
              <span>Meus produtos</span>
            </div>
            <IconChevronRight />
          </SectionIcon>
        </li>
      </ul> */}
    </Container>
  );
};

export default Sidebar;
