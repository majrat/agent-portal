/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_supplier_sustainability_profile {
  _id: String;
  user_id: Schema.Types.ObjectId;
  questions: Map<string, string>;
  answers: Map<string, string>;
  created_at: Date;
  updated_at: Date;
}

const supplier_sustainability_profile_schema = new Schema<type_of_supplier_sustainability_profile>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user id is Required"],
    },
    questions: { type: Map, of: String },
    answers: { type: Map, of: String },
  },
  {
    timestamps: true,
  }
);

const supplier_sustainability_profile =
  mongoose.models?.supplier_sustainability_profile ||
  model<type_of_supplier_sustainability_profile>("supplier_sustainability_profile", supplier_sustainability_profile_schema);
export default supplier_sustainability_profile;
