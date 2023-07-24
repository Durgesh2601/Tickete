import { Col, Row } from "antd";
import { CardComponent, RenderHeader } from "../CommonComponents";
import { ticketePromiseData } from "../../constants/data";
import "./index.css";

const TicketePromise = () => {
  return (
    <div className="tickete-container">
      <RenderHeader title="The Tickete promise" />
      <Row justify="space-between">
        {ticketePromiseData?.map((item) => (
          <Col key={item?.id} span={5}>
            <CardComponent data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TicketePromise;
