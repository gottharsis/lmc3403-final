import React from "react";
import { Container, Image } from "semantic-ui-react";
import logo from "../assets/logo-large.png";

export default function Header() {
  return (
    <div>
      <Container textAlign="center">
        <Image size="medium" src={logo} style={{ display: 'inline' }}/>
      </Container>
    </div>
  );
}
