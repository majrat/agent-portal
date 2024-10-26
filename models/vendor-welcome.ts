/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_vendor_welcome {
  _id: String;
  accepted: Boolean;
  user_id: Schema.Types.ObjectId;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

const vendor_welcome_schema = new Schema<type_of_vendor_welcome>(
  {
    accepted: {
      type: Boolean,
      default: false,
      required: [true, "agreed value is Required"],
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

const vendor_welcome =
  mongoose.models?.vendor_welcome ||
  model<type_of_vendor_welcome>("vendor_welcome", vendor_welcome_schema);
export default vendor_welcome;
