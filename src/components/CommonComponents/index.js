import {
  Typography,
  Input,
  InputNumber,
  Select,
  Row,
  Col,
  Radio,
  Button,
} from "antd";
import { CreditCardFilled } from "@ant-design/icons";
import fieldIcon from "../../assets/fieldIcon.svg";
import ShieldIcon from "../../assets/ShieldIcon.svg";
const { Title, Text } = Typography;

const FieldRenderer = ({ field }) => {
  const { type = "text", placeholder = "", width } = field;

  const customStyle = {
    width: width || "100%",
  };
  const custopProps = {
    ...type,
    placeholder,
    size: "large",
    style: { ...customStyle },
  };

  const fieldMap = {
    text: <Input {...custopProps} />,
    number: <InputNumber {...custopProps} />,
    select: <Select {...custopProps} />,
    default: <Input {...custopProps} />,
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
const RenderHeader = ({ title = "", subTitle = "" }) => {
  return (
    <>
      <Title level={4}>{title}</Title>
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

export { Title, Text, FieldRenderer, RenderHeader, CustomField, Confirmation };
