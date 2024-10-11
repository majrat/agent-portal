/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface user_document {
  _id: string;
  email: string;
  org_code: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  role: string;
  email_verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const user_schema = new Schema<user_document>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    //TODO: Uncommment org_code and include in api
    org_code: {
      type: String,
      required: [true, "Organisation Code is Required"],
      //unique: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
      required: [true, "role is required"],
      default: "USER",
    },
    email_verified: {
      type: Boolean,
      required: [true, "verification required"],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.models?.user || model<user_document>("user", user_schema);
export default user;
