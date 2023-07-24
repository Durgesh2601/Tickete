import { Col, Divider, Form, Row, Space } from "antd";
import "./index.css";
import {
  Confirmation,
  CustomField,
  FieldRenderer,
  RenderHeader,
  Text,
} from "../CommonComponents";
import DemoImg from "../../assets/demo1.jpg";
import { formFields, tikcetData } from "../../constants/data";

const InfoContainer = () => {
  return (
    <>
      <Row className="info-title">
        <RenderHeader title="Confirm and pay" titleLevel={2} />
      </Row>
      <Row>
        <Col span={14}>
          <Space direction="vertical" className="info-container">
            {Object.keys(formFields)?.map((item) => {
              const fieldValue = formFields?.[item];
              return (
                <div id={fieldValue?.id}>
                  <RenderHeader
                    title={fieldValue?.title}
                    subTitle={fieldValue?.subTitle}
                  />
                  <Form layout="vertical">
                    {fieldValue?.renderExtraFields && (
                      <CustomField type="primary" title="Credit & debit card" />
                    )}
                    <Row justify="space-between" className="fields-row">
                      {fieldValue?.fields?.map((field) => (
                        <Col span={10}>
                          <Form.Item
                            name={field?.name}
                            label={field?.label}
                            required={field?.required}
                          >
                            <FieldRenderer field={field} />
                          </Form.Item>
                        </Col>
                      ))}
                    </Row>
                    {fieldValue?.renderExtraFields && (
                      <>
                        <Divider />
                        <CustomField
                          type="secondary"
                          title="Credit & debit card"
                        />
                        <Divider />
                      </>
                    )}
                  </Form>
                </div>
              );
            })}
            <Confirmation />
            <Divider />
          </Space>
        </Col>
        <Col>
          <Divider type="horizontal" className="info-divider" />
        </Col>
        <Col span={9}>
          <Space direction="vertical" className="info-container">
            <Row>
              <img src={DemoImg} alt="shield-icon" className="demo-img" />
            </Row>
            <Row>
              <Text>
                Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk
                House
              </Text>
            </Row>
            {tikcetData?.map((item) => (
              <Row key={item?.id} align="middle">
                <Col>{item?.icon}</Col>
                <Col>
                  <Text type="secondary">{item?.title}</Text>
                </Col>
              </Row>
            ))}
            <Divider />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default InfoContainer;
