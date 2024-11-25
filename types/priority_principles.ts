import { Schema } from "mongoose";

export interface type_of_priority_principles {
  _id: String;
  user_id: Schema.Types.ObjectId;
  principle: {
    one_compliance: {
      anti_corruption_statement_and_policy: Boolean;
    };
    two_humanities: {
      anti_slavery_human_trafficking_and_forced_labor_policy: Boolean;
      health_safety_security_and_environmental_policy: Boolean;
      human_rights_and_modern_slavery_statement: Boolean;
      whistleblower_policy: Boolean;
    };
    three_sustainability: {
      international_standard_for_sustainable_procurement: Boolean;
      sustainable_procurement_policy: Boolean;
    };
    four_supplier_code_of_conduct: {
      supply_chain_management_policy: Boolean;
    };
    // principle_five_cargo_safety_and_security: {
    //   name_of_the_form: Boolean;
    // };
  };
  status: Number;
  created_at: Date;
  updated_at: Date;
}
