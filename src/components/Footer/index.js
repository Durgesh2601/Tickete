import { Divider, Row, Space, Col } from "antd";
import {
  InstagramFilled,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Title } from "../CommonComponents";

const FooterComp = () => {
  return (
    <Space className="footer" direction="vertical">
      <Row>
        <Title level={3} style={{ color: "white" }}>
          tickete
        </Title>
      </Row>
      <Divider className="footer-divider" />
      <Row justify="space-between">
        <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
          <ul className="footer-col">
            <li>© Tickete Inc.</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cancellation policy</li>
          </ul>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          md={{ span: 2, order: 1 }}
          className="footer-icons"
        >
          <InstagramFilled />
          <FacebookOutlined />
          <TwitterOutlined />
        </Col>
      </Row>
    </Space>
  );
};

export default FooterComp;
