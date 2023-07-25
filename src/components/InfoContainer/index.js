import { Col, Divider, Form, Row, Space } from "antd";
import {
  Confirmation,
  CustomField,
  FieldRenderer,
  RenderHeader,
  Text,
  TicketOverview,
} from "../CommonComponents";
import DemoImg from "../../assets/demo1.jpg";
import { formFields, tikcetData } from "../../constants/data";
import "./index.css";

const InfoContainer = () => {
  return (
    <>
      <Row className="info-title">
        <RenderHeader title="Confirm and pay" titleLevel={2} />
      </Row>
      <Row>
        <Col xs={{ span: 24, order: 2 }} md={{ span: 14, order: 1 }}>
          <Space direction="vertical" className="info-container">
            {Object.keys(formFields)?.map((item) => {
              const fieldValue = formFields?.[item];
              return (
                <div key={fieldValue?.id}>
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
                        <Col xs={24} md={10} key={field?.id}>
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
        <Col xs={{ span: 0 }}>
          <Divider type="horizontal" className="info-divider" />
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={9}>
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
            {/* Tickets Overview */}
            <TicketOverview />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default InfoContainer;
