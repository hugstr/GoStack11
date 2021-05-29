import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/55287730?v=4"
            alt="Hugo Streppel"
          />
          <div>
            <strong>hugstr/GoStack11</strong>
            <p>GoStack11 classes</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
