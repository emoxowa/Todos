import { Input } from 'antd';
import styled from "styled-components";

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
  background-color: transparent;
  color: white;
  

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
    background-color: transparent;
  }

  &:hover {
    background-color: transparent;
    border-color: #157077;
  }
`;
