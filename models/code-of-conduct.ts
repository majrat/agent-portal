/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_code_of_conduct {
  _id: String;
  user_id: Schema.Types.ObjectId;
  questions: Map<string, string>;
  answers: Map<string, string>;
  status: Number;
  created_at: Date;
  updated_at: Date;
}

const code_of_conduct_schema = new Schema<type_of_code_of_conduct>(
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

const code_of_conduct =
  mongoose.models?.code_of_conduct ||
  model<type_of_code_of_conduct>("code_of_conduct", code_of_conduct_schema);
export default code_of_conduct;
