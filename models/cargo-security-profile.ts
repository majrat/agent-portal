/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";
import { type_of_survey_js_form_data } from "types/survey_js_form_data";

const cargo_security_profile_schema =
  new Schema<type_of_survey_js_form_data>(
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
  model<type_of_survey_js_form_data>(
    "cargo_security_profile",
    cargo_security_profile_schema
  );
export default cargo_security_profile;
