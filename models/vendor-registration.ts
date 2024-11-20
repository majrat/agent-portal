/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_vendor_registration {
  _id: String;
  company_name: String;
  head_office_address: String;
  city: String;
  country: String;
  telephone: String;
  fax: String;
  agent_name: String;
  title: String;
  email: String;
  user_id: Schema.Types.ObjectId;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

const vendor_registration_schema = new Schema<type_of_vendor_registration>(
  {
    company_name: {
      type: String,
      required: [true, "Company name is required"],
    },
    head_office_address: {
      type: String,
      required: [true, "Head Office Address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    telephone: {
      type: String,
      required: [true, "Telephone is required"],
    },
    fax: {
      type: String,
      required: [true, "Fax is required"],
    },
    agent_name: {
      type: String,
      required: [true, "Company name is required"],
    },
    title: {
      type: String,
      required: [true, "Company name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user id is Required"],
    },
    status: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const vendor_registration =
  mongoose.models?.vendor_registration ||
  model<type_of_vendor_registration>("vendor_registration", vendor_registration_schema);
export default vendor_registration;
