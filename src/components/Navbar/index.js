import { QuestionCircleFilled } from "@ant-design/icons";
import { Text, Title } from "../CommonComponents";
import { Col, Row } from "antd";
import "./index.css";

const Navbar = () => {
  return (
    <Row align="middle" justify="space-between" className="navbar">
      <Col>
        <Title level={4}>tickete</Title>
      </Col>
      <Col>
        <QuestionCircleFilled className="help-icon" />
        <Text type="secondary">Help</Text>
      </Col>
    </Row>
  );
};

export default Navbar;
