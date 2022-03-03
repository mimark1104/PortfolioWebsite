import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: 'Road Rage', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  font-size: 5.5rem;

  z-index: 3;

  ${mediaQueries(40)`
      font-size:2.2em;
      left:1rem;
      top:3.5rem;
  `};
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>&lt;Mark Presno /&gt;</Logo>;
};

export default LogoComponent;
