/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_bank_details {
  _id: String;
  beneficiary_payee_name: String;
  beneficiary_payee_address: String;
  bank_account_no: String;
  bank_name: String;
  bank_address: String;
  branch: String;
  swift_code: String;
  iban: String;
  currency: String;
  user_id: Schema.Types.ObjectId;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

const bank_details_schema = new Schema<type_of_bank_details>(
  {
    beneficiary_payee_name: {
      type: String,
      required: [true, "beneficiary_payee_name is required"],
    },
    beneficiary_payee_address: {
      type: String,
      required: [true, "beneficiary_payee_address is required"],
    },
    bank_account_no: {
      type: String,
      required: [true, "bank_account_no is required"],
    },
    bank_name: {
      type: String,
      required: [true, "bank_name is required"],
    },
    bank_address: {
      type: String,
      required: [true, "bank_address is required"],
    },
    branch: {
      type: String,
      required: [true, "branch is required"],
    },
    swift_code: {
      type: String,
      required: [true, "swift_code is required"],
    },
    iban: {
      type: String,
      required: [true, "iban is required"],
    },
    currency: {
      type: String,
      unique: true,
      required: [true, "currency is required"],
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

const bank_details =
  mongoose.models?.bank_details ||
  model<type_of_bank_details>("bank_details", bank_details_schema);
export default bank_details;
