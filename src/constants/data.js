import { Text } from "../components/CommonComponents";

const formFields = {
  basic: {
    id: "basic--1",
    title: "Enter your details",
    subTitle:
      "We'll be sending your tickets to the details below. Booking for a friend? Add their details.",
    fields: [
      {
        id: "basic--1--1",
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Tickete Inc",
        required: true,
      },
      {
        id: "basic--1--2",
        name: "phone",
        label: "Phone number",
        type: "number",
        placeholder: "+85 2345345678",
        required: true,
      },
      {
        id: "basic--1--3",
        name: "fullName2",
        label: "Full Name",
        type: "text",
        placeholder: "hi@tickete.com",
        required: false,
      },
      {
        id: "basic--1--4",
        name: "fullName3",
        label: "Full Name",
        type: "text",
        placeholder: "hi@tickete.com",
        required: false,
      },
    ],
  },
  additional: {
    id: "additional--2",
    title: "Additional information",
    subTitle: "We need a few more details to complete your reservation.",
    fields: [
      {
        id: "additional--2--1",
        name: "fullName4",
        label: "Full Name",
        type: "text",
        placeholder: "<custom input>",
        required: false,
      },
      {
        id: "additional--2--2",
        name: "dropdown",
        label: "Dropdown",
        type: "select",
        placeholder: "<dropdown>",
        required: false,
      },
    ],
  },
  payment: {
    id: "payment--3",
    title: "Select your mode of payment",
    subTitle: "Payments with Tickete are secure and encrypted.",
    renderExtraFields: true,
    fields: [
      {
        id: "payment--3--1",
        name: "nameOnCard",
        label: "<Name on Card>",
        type: "text",
        placeholder: "Tickete Inc",
        required: true,
      },
      {
        id: "payment--3--2",
        name: "cardNumber",
        label: "<Card Number>",
        type: "number",
        placeholder: "1234 1234 1234 1234",
        required: true,
      },
      {
        id: "payment--3--3",
        name: "expiryDate",
        label: "<Expiry Date>",
        type: "date",
        placeholder: "06/26",
        required: true,
      },
      {
        id: "payment--3--4",
        name: "cvv",
        label: "<CVV/CVC>",
        type: "password",
        placeholder: "***",
        required: true,
      },
    ],
  },
};

const fAndQContents = [
  {
    key: "1",
    label: <Text style={{margin: '1rem 0'}} strong> Are my tickets transferable?</Text>,
    children: (
      <Text type="secondary">
        No. The tickets can only be used by the person(s) whose details are
        indicated on the voucher. If you’re booking for friends and family, make
        sure to key in their details.
      </Text>
    ),
  },
  {
    key: "2",
    label: <Text strong>How long will it take to receive my ticket?</Text>,
    children: (
      <Text type="secondary">
        The tickets will hit your inbox as soon as you complete making the
        payment.
      </Text>
    ),
  },
  {
    key: "3",
    label: <Text strong> Is my payment secure?</Text>,
    children: (
      <Text type="secondary">
        We use a PCI compliant payment gateway that is internationally
        recognized and protects against fraud and unauthorized transactions. In
        short, your payment is a 100% secure and you have nothing to worry!
      </Text>
    ),
  },
  {
    key: "4",
    label: <Text strong>What type of payment options do you offer?</Text>,
    children: (
      <Text type="secondary">
        We accept payments via all major international debit cards, credit
        cards, Google Pay and Apple Pay. Please note that Tickete being an
        online marketplace does not accept cash payments.
      </Text>
    ),
  },
  {
    key: "5",
    label: <Text strong> When will I be charged for my booking?</Text>,
    children: (
      <Text type="secondary">
        Your account will be charged immediately upon booking. If the booking is
        cancelled from your end or by our local tour operator, we will refund
        the entire amount to your account at no extra cost.
      </Text>
    ),
  },
  {
    key: "6",
    label: <Text strong>WWhy am I being charged in USD?</Text>,
    children: (
      <Text type="secondary">
        All payments on Tickete are charged in USD. Your accounted will be
        debited with the spot rate for the conversion rate from your local
        currency to USD. We understand this is less than ideal but, we’re
        working on accepting payments in currencies across the world.
      </Text>
    ),
  },
  {
    key: "7",
    label: (
      <Text strong> Will I get a complete refund if I cancel this ticket?</Text>
    ),
    children: (
      <Text type="secondary">
        The cancellation and refund policy varies per ticket. While some can be
        canceled up to 24, 48, or 72 hours before they start, several others
        can’t be canceled once the reservation has been confirmed. For the ones
        that can cancelled within the permissible cancellation period, you will
        receive a full refund.
      </Text>
    ),
  },
  {
    key: "8",
    label: (
      <Text strong>
        How long does it take for a refund to reflect in my account?
      </Text>
    ),
    children: (
      <Text type="secondary">
        Depending on your bank, it typically takes anywhere between 2-7 working
        days for the refunded amount to reflect in your account.
      </Text>
    ),
  },
];

export { formFields, fAndQContents };
