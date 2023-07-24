import { Button, Col, Collapse, Divider, Row, Space } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { RenderHeader, Text } from "../CommonComponents";
import { fAndQContents } from "../../constants/data";
import ChatsIcon from "../../assets/ChatsCircle.svg";
import "./index.css";

const FrequentlyAskedQuestions = () => {
  const customStyle = {
    text: {
      color: "#7f2d0f",
    },
    button: {
      background: "#FFF7ED",
      color: "#7f2d0f",
      border: "1px solid #7f2d0f",
      borderRadius: "0.5rem",
    },
  };

  return (
    <div className="help-container">
      <RenderHeader title="Frequently Asked Questions" />
      <Row justify="space-between">
        <Col span={15}>
          <Collapse
            className="custom-collapse"
            style={{ background: "white" }}
            bordered={false}
            defaultActiveKey={["1"]}
            expandIconPosition={"end"}
            items={fAndQContents}
            expandIcon={({ isActive }) =>
              isActive ? <MinusOutlined /> : <PlusOutlined />
            }
          />
        </Col>
        <Col span={6}>
          <Space direction="vertical" className="help-desk">
            <Row justify="space-between">
              <Col>
                <Row>
                  <Text strong style={{ ...customStyle["text"] }}>
                    Need help?
                  </Text>
                </Row>
                <Text style={{ ...customStyle["text"] }}>
                  We're here to help, 24*7
                </Text>
              </Col>
              <Col>
                <img src={ChatsIcon} alt="chat-circle" />
              </Col>
            </Row>
            <Button style={{ ...customStyle["button"] }}>Chat with us</Button>
          </Space>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default FrequentlyAskedQuestions;
