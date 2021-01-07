import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function JumbotronComponent() {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>Whatever this is...</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default JumbotronComponent;
