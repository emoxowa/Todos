import { Progress, Typography } from "antd";
import { Breakpoints } from "constants/breakpoints";
import styled, { keyframes } from "styled-components";

const { Title } = Typography;

export const Container = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    border-radius: inherit;
    z-index: -1;
    padding: 2px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    background-clip: border-box;
    animation: moveGradient 4s infinite alternate;
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }

  @media (min-width: ${Breakpoints.MD}px) {
    width: 600px;
    padding: 20px;
  }
`;

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(50px); }
`;

export const CatImage = styled.img`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 100px;
  height: 100px;
  animation: ${fadeInOut} 2s ease-in-out;
`;

export const StyledProgress = styled(Progress)`
  margin: 10px 0;
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  color: white !important;
  text-align: center;
`;
