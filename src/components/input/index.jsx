import React from "react";
import { InputContainer } from "./style-input";

const Input = () => (
  <InputContainer>
    <input min={5}  max={50}   placeholder="pesquise um repositorio " />
    <button> pesquisar </button>
  </InputContainer>
);

export default Input; 