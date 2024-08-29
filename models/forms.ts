/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";

export interface type_of_form {
  _id: String;
  user_id: Schema.Types.ObjectId;
  vendor_welcome: {
    status: Boolean;
  };
  priority_principles: {
    status: Boolean;
  };
  vendor_profile: {
    status: Boolean;
  };
  cargo_security_program: {
    status: Boolean;
  };
  code_of_conduct: {
    status: Boolean;
    id: Schema.Types.ObjectId;
  };
  supplier_sustainability_profile: {
    status: Boolean;
    id: Schema.Types.ObjectId;
  };
  cargo_security_profile: {
    status: Boolean;
    id: Schema.Types.ObjectId;
  };
  created_at: Date;
  updated_at: Date;
}

const form_schema = new Schema<type_of_form>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user id is Required"],
    },
    vendor_welcome: {
      status: { type: Boolean, default: false },
    },
    priority_principles: {
      status: { type: Boolean, default: false },
    },
    vendor_profile: {
      status: { type: Boolean, default: false },
    },
    cargo_security_program: {
      status: { type: Boolean, default: false },
    },
    code_of_conduct: {
      status: { type: Boolean, default: false },
      id: {
        type: Schema.Types.ObjectId,
        ref: "",
        required: [true, "id is Required"],
      },
    },
    supplier_sustainability_profile: {
      status: { type: Boolean, default: false },
      id: {
        type: Schema.Types.ObjectId,
        ref: "",
        required: [true, "id is Required"],
      },
    },
    cargo_security_profile: {
      status: { type: Boolean, default: false },
      id: {
        type: Schema.Types.ObjectId,
        ref: "",
        required: [true, "id is Required"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.models?.Form || model<type_of_form>("form", form_schema);
export default Form;
