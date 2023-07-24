import { Col, Collapse, Row } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { RenderHeader } from "../CommonComponents";
import { fAndQContents } from "../../constants/data";
import "./index.css";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="help-container">
      <RenderHeader title="Frequently Asked Questions" />
      <Row>
        <Col span={16}>
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
        <Col></Col>
      </Row>
    </div>
  );
};

export default FrequentlyAskedQuestions;
