/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_priority_principles {
  _id: String;
  email: Schema.Types.ObjectId;
  org_code: Boolean;
  created_at: Date;
  updated_at: Date;
}

const priority_principles_schema = new Schema<type_of_priority_principles>(
  {
    email: {
      type: String,
      required: [true, "email is Required"],
    },
    org_code: {
      type: String,
      required: [true, "email is Required"],
    },
  },
  {
    timestamps: true,
  }
);

const priority_principles =
  mongoose.models?.priority_principles ||
  model<type_of_priority_principles>(
    "priority_principles",
    priority_principles_schema
  );
export default priority_principles;
