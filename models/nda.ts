/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";
import { type_of_survey_js_form_data } from "types/survey_js_form_data";

const nda_schema = new Schema<type_of_survey_js_form_data>(
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

const nda =
  mongoose.models?.nda || model<type_of_survey_js_form_data>("nda", nda_schema);
export default nda;
