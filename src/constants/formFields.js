import { Row } from "antd";

export const formFields = {
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
