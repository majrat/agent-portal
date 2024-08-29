/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_priority_principles {
  _id: String;
  user_id: Schema.Types.ObjectId;
  accepted: Boolean;
  created_at: Date;
  updated_at: Date;
}

const priority_principles_schema = new Schema<type_of_priority_principles>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user id is Required"],
    },
    accepted: { type: Boolean, default: false },
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
