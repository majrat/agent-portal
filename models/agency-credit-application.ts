/* eslint-disable quote-props */
import mongoose, { Schema, model } from "mongoose";
import { type_of_agency_credit_application } from "types/agency-credit-application";

const agency_credit_application_schema =
  new Schema<type_of_agency_credit_application>(
    {
      general_information: {
        corporate_name: {
          type: String,
          required: [true, "corporate_name is required"],
        },
        dba: {
          type: String,
          required: [true, "dba is required"],
        },
        year_founded: {
          type: String,
          required: [true, "year_founded is required"],
        },
        corporate_hq_physical_address: {
          type: String,
          required: [true, "corporate_hq_physical_address is required"],
        },
        main_telephone: {
          type: String,
          required: [true, "main_telephone is required"],
        },
        main_fax: {
          type: String,
          required: [true, "main_fax is required"],
        },
        main_email: {
          type: String,
          required: [true, "main_email is required"],
        },
        mailing_address: {
          type: String,
          required: [true, "mailing_address is required"],
        },
      },
      bank_information: {
        bank_name: {
          type: String,
          required: [true, "bank_information bank_name is required"],
        },
        bank_address: {
          type: String,
          required: [true, "bank_information bank_address is required"],
        },
        account_no: {
          type: String,
          required: [true, "bank_information account_no is required"],
        },
        telephone: {
          type: String,
          required: [true, "bank_information telephone is required"],
        },
        fax: {
          type: String,
          required: [true, "bank_information fax is required"],
        },
        email: {
          type: String,
          required: [true, "bank_information email is required"],
        },
      },
      branch_info: [
        {
          branch_location: {
            type: String,
            required: [true, "branch_location is required"],
            default: "none",
          },
          accounting_contact: {
            name: {
              type: String,
              required: [true, "accounting_contact name is required"],
              default: "none",
            },
            email: {
              type: String,
              required: [true, "accounting_contact email is required"],
              default: "none",
            },
          },
        },
      ],
      trade_reference_information: [
        {
          name: {
            type: String,
            required: [true, "trade_reference_information name is required"],
            default: "none",
          },
          address: {
            type: String,
            required: [true, "trade_reference_information address is required"],
            default: "none",
          },
          telephone: {
            type: String,
            required: [
              true,
              "trade_reference_information telephone is required",
            ],
            default: "none",
          },
          fax: {
            type: String,
            required: [true, "trade_reference_information fax is required"],
            default: "none",
          },
          email: {
            type: String,
            required: [true, "trade_reference_information email is required"],
            default: "none",
          },
          account_number: {
            type: String,
            required: [
              true,
              "trade_reference_information account_number is required",
            ],
            default: "none",
          },
        },
      ],
      volume_and_revenue: {
        expected_annual_air_frieght_volume: {
          type: String,
          required: [true, "expected_annual_air_frieght_volume is required"],
        },
        expected_annual_ocean_frieght_volume: {
          type: String,
          required: [true, "expected_annual_ocean_frieght_volume is required"],
        },
        expected_annual_revenue: {
          type: String,
          required: [true, "expected_annual_revenue is required"],
        },
      },
      account_details: {
        who_is_the_primary_accounting_contact: {
          type: String,
          required: [true, "who_is_the_primary_accounting_contact is required"],
        },
        what_are_your_payment_terms: {
          type: String,
          required: [true, "what_are_your_payment_terms is required"],
        },
        do_you_have_any_invoicing_requirements: {
          type: String,
          required: [
            true,
            "do_you_have_any_invoicing_requirements is required",
          ],
          default: "none",
        },
        do_you_accept_you_invoices_via_email: {
          type: String,
          required: [true, "do_you_accept_you_invoices_via_email is required"],
        },
      },
      additional_company_details: {
        current_agency_network_memberships: {
          type: String,
          required: [true, "current_agency_network_memberships is required"],
        },
        country_specific_requirements: {
          type: String,
          required: [true, "country_specific_requirements is required"],
        },
        how_were_you_referred_to_pws: {
          type: String,
          required: [true, "how_were_you_referred_to_pws is required"],
        },
      },
      notes_or_additional_information: {
        type: String,
        required: [true, "notes_or_additional_information is required"],
      },
      printed_name: {
        type: String,
        required: [true, "printed_name is required"],
      },
      signature: {
        type: String,
        required: [true, "signature is required"],
      },
      title: {
        type: String,
        required: [true, "title is required"],
      },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: [true, "user id is Required"],
      },
      status: { type: Number, required: true, default: 0 },
    },
    {
      timestamps: true,
    }
  );

const agency_credit_application =
  mongoose.models?.agency_credit_application ||
  model<type_of_agency_credit_application>(
    "agency_credit_application",
    agency_credit_application_schema
  );
export default agency_credit_application;
