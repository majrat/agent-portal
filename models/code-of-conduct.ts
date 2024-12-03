/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";
import { type_of_survey_js_form_data } from "types/survey_js_form_data";

const code_of_conduct_schema = new Schema<type_of_survey_js_form_data>(
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
  model<type_of_survey_js_form_data>("code_of_conduct", code_of_conduct_schema);
export default code_of_conduct;
