/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_cargo_security_program {
  _id: String;
  accepted: Boolean;
  user_id: Schema.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}

const cargo_security_program_schema = new Schema<type_of_cargo_security_program>(
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
  },
  {
    timestamps: true,
  }
);

const cargo_security_program =
  mongoose.models?.cargo_security_program ||
  model<type_of_cargo_security_program>("cargo_security_program", cargo_security_program_schema);
export default cargo_security_program;
