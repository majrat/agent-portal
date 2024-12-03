/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_invitation {
  _id: String;
  email: String;
  org_code: String;
  admin_id: Schema.Types.ObjectId;
  subject: String;
  message: String;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

const invitation_schema = new Schema<type_of_invitation>(
  {
    email: {
      type: String,
      required: [true, "email is Required"],
    },
    org_code: {
      type: String,
      required: [true, "org_code is Required"],
    },
    admin_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user id is Required"],
    },
    subject: {
      type: String,
      required: [true, "subject is Required"],
    },
    message: {
      type: String,
      required: [true, "message is Required"],
    },
    status: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const invitation =
  mongoose.models?.invitation ||
  model<type_of_invitation>("invitation", invitation_schema);
export default invitation;
