/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_nda {
  _id: String;
  contracted_partner: { date: Date; printed_name: String; signature: String };
  priority_worldwide: { date: Date; printed_name: String; signature: String };
  user_id: Schema.Types.ObjectId;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

const nda_schema = new Schema<type_of_nda>(
  {
    contracted_partner: {
      date: {
        type: String,
        required: [true, "contracted_partner_date is required"],
      },
      printed_name: {
        type: String,
        required: [true, "contracted_partner_printed_name is required"],
      },
      signature: {
        type: String,
        required: [true, "contracted_partner_signature is required"],
      },
    },
    priority_worldwide: {
      date: {
        type: String,
        required: [true, "priority_worldwide_date is required"],
      },
      printed_name: {
        type: String,
        required: [true, "priority_worldwide_printed_name is required"],
      },
      signature: {
        type: String,
        required: [true, "priority_worldwide_signature is required"],
      },
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

const nda = mongoose.models?.nda || model<type_of_nda>("nda", nda_schema);
export default nda;
