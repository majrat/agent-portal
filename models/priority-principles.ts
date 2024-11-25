/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";
import { type_of_priority_principles } from "types/priority_principles";

const priority_principles_schema = new Schema<type_of_priority_principles>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user id is Required"],
    },
    principle: {
      one_compliance: {
        anti_corruption_statement_and_policy: { type: Boolean, default: false },
      },
      two_humanities: {
        anti_slavery_human_trafficking_and_forced_labor_policy: {
          type: Boolean,
          default: false,
        },
        health_safety_security_and_environmental_policy: {
          type: Boolean,
          default: false,
        },
        human_rights_and_modern_slavery_statement: {
          type: Boolean,
          default: false,
        },
        whistleblower_policy: { type: Boolean, default: false },
      },
      three_sustainability: {
        international_standard_for_sustainable_procurement: {
          type: Boolean,
          default: false,
        },
        sustainable_procurement_policy: { type: Boolean, default: false },
      },
      four_supplier_code_of_conduct: {
        supply_chain_management_policy: { type: Boolean, default: false },
      },
      // principle_five_cargo_safety_and_security: {
      //   name_of_the_form: { type: Boolean, default: false };
      // };
    },
    status: { type: Number, required: true, default: 0 },
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
