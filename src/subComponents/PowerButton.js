import { PowerBtn } from "../components/AllSvgs";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaQueries } from "../components/Themes";

const Power = styled.button`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #00eded;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid black;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(235, 123, 192, 1);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  ${mediaQueries(40)`
   width: 2rem;
  height: 2rem;
      svg{
        width:20px;
        height:20px;
      }

  `};
`;
const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
