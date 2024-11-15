import { Schema } from "mongoose";

export interface type_of_agency_credit_application {
    _id: String;
    general_information: {
      corporate_name: String;
      dba: String;
      year_founded: String;
      corporate_hq_physical_address: String;
      main_telephone: String;
      main_fax: String;
      main_email: String;
      mailing_address: String;
    };
    bank_information: {
      bank_name: String;
      bank_address: String;
      account_no: String;
      telephone: String;
      fax: String;
      email: String;
    };
    branch_info: [
      {
        branch_location: String;
        accounting_contact: {
          name: String;
          email: String;
        };
      }
    ];
    trade_reference_information: [
      {
        name: String;
        address: String;
        telephone: String;
        fax: String;
        email: String;
        account_number: String;
      }
    ];
    volume_and_revenue: {
      expected_annual_air_frieght_volume: String;
      expected_annual_ocean_frieght_volume: String;
      expected_annual_revenue: String;
    };
    account_details: {
      who_is_the_primary_accounting_contact: String;
      what_are_your_payment_terms: String;
      do_you_have_any_invoicing_requirements: String;
      do_you_accept_you_invoices_via_email: String;
    };
    additional_company_details: {
      current_agency_network_memberships: String;
      country_specific_requirements: String;
      how_were_you_referred_to_pws: String;
    };
    notes_or_additional_information: String;
    printed_name: String;
    signature: String;
    title: String;
    user_id: Schema.Types.ObjectId;
    status: Number;
    created_at: Date;
    updated_at: Date;
  }