/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_cargo_security_profile {
  _id: String;
  user_id: Schema.Types.ObjectId;
  questions: Map<string, string>;
  answers: Map<string, string>;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

const cargo_security_profile_schema =
  new Schema<type_of_cargo_security_profile>(
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: [true, "user id is Required"],
      },
      questions: { type: Map, of: String },
      answers: { type: Map, of: String },
      status: { type: Number, required: true, default: 0 },
    },
    {
      timestamps: true,
    }
  );

const cargo_security_profile =
  mongoose.models?.cargo_security_profile ||
  model<type_of_cargo_security_profile>(
    "cargo_security_profile",
    cargo_security_profile_schema
  );
export default cargo_security_profile;
