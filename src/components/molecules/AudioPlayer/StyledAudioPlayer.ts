import { Breakpoints } from "constants/breakpoints";
import { styled } from "styled-components";

export const CatImage1 = styled.img`
  position: absolute;
  top: -10px;
  left: 40px;
  width: 60px;
  height: 60px;

  @media (min-width: ${Breakpoints.SM}px) {
    top: -10px;
    left: 40px;
    width: 60px;
    height: 60px;
  }

  @media (min-width: ${Breakpoints.MD}px) {
    top: -20px;
    left: 50px;
    width: 100px;
    height: 100px;
  }
`;

export const CatImage2 = styled.img`
  position: absolute;
  top: -25px;
  left: -185px;
  width: 80px;
  height: 80px;

  @media (min-width: ${Breakpoints.SM}px) {
    top: -25px;
    left: -220px;
    width: 80px;
    height: 80px;
  }

  @media (min-width: ${Breakpoints.MD}px) {
    top: -40px;
    left: -230px;
    width: 110px;
    height: 110px;
  }
`;
