import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";
import bank from "../bank.png";

function Homepage() {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="BadBank Logo" src={bank} />
        <CardBody>
          <CardTitle tag="h5">BadBank</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Welcome
          </CardSubtitle>
          <CardText>
            BadBank is the future of banking. We use cutting-edge technology to
            make your banking experience smooth and secure
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Homepage;
