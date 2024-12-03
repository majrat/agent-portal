import { Schema } from "mongoose";

export interface type_of_survey_js_form_data {
  _id: String;
  user_id: Schema.Types.ObjectId;
  questions: Map<string, string>;
  answers: Map<string, string>;
  status: Number;
  created_at: Date;
  updated_at: Date;
}
