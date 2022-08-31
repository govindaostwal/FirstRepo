import "./styles.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Row, Col, Form, Button } from "react-bootstrap";
export default function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <Form role="form" className=" ">
          <Form.Group>
            <Row>
              <Col lg={6} md={4} sm={12} xs={12}>
                <Form.Label>Select Color : </Form.Label>
                <Form.Control as="select" custom>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="black">Black</option>
                  <option value="orange">Orange</option>
                </Form.Control>
              </Col>
              <Col lg={6} md={4} sm={12} xs={12}>
                <Form.Label>Select Color : </Form.Label>
                <Form.Control as="select" custom>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="black">Black</option>
                  <option value="orange">Orange</option>
                </Form.Control>
              </Col>
              <Col lg={1} md={4} sm={12} xs={12}>
                <Form.Label>Select Color : </Form.Label>
                <Form.Control as="select" custom>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="black">Black</option>
                  <option value="orange">Orange</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Jumbotron>
    </Container>
  );
}
