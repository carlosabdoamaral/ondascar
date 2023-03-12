import * as React from "react";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { colors } from "../enums/colors.enum";
import SpacerWidget from "../widgets/spacer.widget";
import "./sign-in.page.scss";

export default function SignInPage() {
  function renderHeader() {
    function getSalutMessage(): String {
      return "Boa noite,";
    }

    return (
      <>
        <Header as={"h3"} content={getSalutMessage()} />

        <Header as={"h1"} content={"Entre na sua conta"} />
      </>
    );
  }

  return (
    <Container className="sign-in-main-container">
      <Container>
        <SpacerWidget height={30} />
        {renderHeader()}
        <SpacerWidget height={30} />

        <Form>
          <Form.Input placeholder="E-mail" className="custom-form-field" />
          <Form.Input placeholder="E-mail" className="custom-form-field" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Container>
  );
}
