import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import ProfessionalExperience from "../../blocks/professional-experience";

const MainContent = () => (
  <div>
    <Container text>
      <Header as="h2">About me</Header>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
    </Container>
    <Divider />
    <Container text>
      <ProfessionalExperience />
    </Container>
  </div>
);

export default MainContent;
