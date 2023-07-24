import {
  Typography,
  Input,
  InputNumber,
  Select,
  Row,
  Col,
  Radio,
  Button,
  Space,
  Divider,
} from "antd";
import { CreditCardFilled, TagFilled } from "@ant-design/icons";
import fieldIcon from "../../assets/fieldIcon.svg";
import ShieldIcon from "../../assets/ShieldIcon.svg";
import { taxData } from "../../constants/data";

const { Title, Text } = Typography;

const FieldRenderer = ({ field }) => {
  const { type = "text", placeholder = "", width } = field;

  const customStyle = {
    width: width || "100%",
  };

  const customProps = {
    placeholder,
    size: "large",
    style: customStyle,
  };

  const fieldMap = {
    text: <Input type="text" {...customProps} />,
    number: <InputNumber {...customProps} />,
    select: <Select {...customProps} />,
    default: <Input type="text" {...customProps} />,
  };
  return fieldMap[type] || fieldMap["default"];
};

const CustomField = ({ type = "primary", title = "" }) => {
  const isPrimary = type === "primary";
  const renderIcon = () => {
    return type === "primary" ? (
      <CreditCardFilled className="field-icon" />
    ) : (
      <img src={fieldIcon} alt="field-icon" className="field-img field-icon" />
    );
  };
  return (
    <Row className="fields-row" align="middle" justify="space-between">
      <Col>
        {renderIcon()}
        <Text strong>{title}</Text>
      </Col>
      <Col>
        <Radio checked={isPrimary} disabled={!isPrimary}></Radio>
      </Col>
    </Row>
  );
};
const RenderHeader = ({ title = "", subTitle = "", titleLevel = 4 }) => {
  return (
    <>
      <Title level={titleLevel}>{title}</Title>
      <Text type="secondary">{subTitle}</Text>
    </>
  );
};

const Confirmation = ({
  totalPrice = "<price>",
  currency = "<currency>",
  city = "<city>",
}) => {
  const btnStyle = {
    backgroundColor: "#0A0A0A",
    color: "#F6F6F7",
    border: 0,
  };

  return (
    <>
      <Row>
        <Title level={3}>Total: {totalPrice}</Title>
      </Row>
      <Text type="secondary">You will pay in {currency}</Text>
      <Row className="extra-info">
        <Radio checked disabled></Radio>
        <Text>
          Receive travel tips, suggestions and offers in {city} by email
        </Text>
      </Row>
      <Row className="fields-row">
        <Text type="secondary">
          With payment, you agree to the general{" "}
          <a href="/">terms and conditions of Tickete</a> & the{" "}
          <a href="/">activity provider</a>.
        </Text>
      </Row>
      <Row className="fields-row">
        <Button size="large" style={{ ...btnStyle }}>
          Confirm and pay
          <img src={ShieldIcon} alt="shield-icon" className="shield-icon" />
        </Button>
      </Row>
    </>
  );
};

const CardComponent = ({ data = {} }) => {
  const { title = "", subTitle = "", imgSrc = "" } = data || {};
  return (
    <Space direction="vertical" className="card-container">
      <Row>
        <img src={imgSrc} alt={title} />
      </Row>
      <Row className="card-title">
        <Text strong>{title}</Text>
      </Row>
      <Row>
        <Text type="secondary">{subTitle}</Text>
      </Row>
    </Space>
  );
};

const TicketOverview = () => {
  return (
    <>
      <Row>
        <Text strong>Tickets overview</Text>
      </Row>
      {taxData?.map((item) => (
        <Row justify="space-between" key={item?.id} className="tax-row">
          <Col className={item?.isDiscount ? "discount" : "tax"}>
            {item?.name}
          </Col>
          <Col className={item?.isDiscount ? "discount" : "tax"}>
            {item?.price}
          </Col>
        </Row>
      ))}
      <Divider />
      <Row>
        <TagFilled className="discount discount-icon" rotate={270} />
        <Col className="discount discount-col">Have a promo code?</Col>
      </Row>
      <Divider />
      <Row justify="space-between">
        <Col>
          <Text strong>Total</Text>
        </Col>
        <Col>
          <Text strong>{"<price>"}</Text>
        </Col>
      </Row>
      <Row className="tax-subrow">You will pay in {"<currency>"}</Row>
      <Row className="cancellation">
        <Col span={24}>
          <Text strong>Free cancellation</Text>
        </Col>
        <Text type="secondary">Cancel before {"<date>"} for a full refund</Text>
      </Row>
    </>
  );
};

export {
  Title,
  Text,
  FieldRenderer,
  RenderHeader,
  CustomField,
  Confirmation,
  CardComponent,
  TicketOverview,
};
