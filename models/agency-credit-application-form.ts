const site_url = "http://localhost:3000";
export const survey_json = {
  "title": "AGENCY CREDIT APPLICATION",
  "completedHtml":
    `<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href=${site_url}/vendor-profile/nda'>Continue to Next Form</a></h3>`,
  "completedHtmlOnCondition": [
    {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
    },
    {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
    }
  ],
  "pages": [
    {
      "name": "page1",
      "title": "GENERAL INFORMATION",
      "elements": [
        {
          "type": "text",
          "name": "corporate_name",
          "title": "CORPORATE NAME",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "dba",
          "title": "DBA",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "year_founded",
          "title": "YEAR FOUNDED",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "corporate_hq_physical_address",
          "title": "CORPORATE HQ PHYSICAL ADDRESS",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "main_telephone",
          "title": "MAIN TELEPHONE",
          "isRequired": true,
          "inputType": "tel"
        },
        {
          "type": "text",
          "name": "main_fax",
          "title": "MAIN FAX",
          "isRequired": true,
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "main_email",
          "title": "MAIN EMAIL",
          "isRequired": true,
          "inputType": "email"
        },
        {
          "type": "comment",
          "name": "mailing_address",
          "title": "MAILING ADDRESS",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page2",
      "title": "BANK INFORMATION",
      "elements": [
        {
          "type": "text",
          "name": "bank_name",
          "title": "BANK NAME",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "bank_address",
          "title": "BANK ADDRESS",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "account_no",
          "title": "ACCOUNT NO.",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "telephone",
          "title": "TELEPHONE",
          "isRequired": true,
          "inputType": "tel"
        },
        {
          "type": "text",
          "name": "fax",
          "title": "FAX",
          "isRequired": true,
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "email",
          "title": "EMAIL",
          "isRequired": true,
          "inputType": "email"
        },
        {
          "type": "matrixdynamic",
          "name": "bank_branches",
          "title": " BANK BRANCHES",
          "columns": [
            {
              "name": "branch_locations",
              "title": "BRANCH LOCATIONS ",
              "cellType": "text"
            },
            {
              "name": "accounting_contact_name_email",
              "title": "ACCOUNTING CONTACT (NAME & EMAIL)",
              "cellType": "text"
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "cellType": "text",
          "rowCount": 1,
          "confirmDelete": true,
          "addRowText": "Add New Branch"
        }
      ]
    },
    {
      "name": "page3",
      "title": "TRADE REFERENCE INFORMATION",
      "description": "(PLEASE INCLUDE TEL, FAX, CONTACT, EMAIL, AND ACCT NO. IF APPLICABLE) *MIN 3 REQUIRED*",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "trade_reference_information",
          "title": "TRADE REFERENCE INFORMATION",
          "description": "(PLEASE INCLUDE TEL, FAX, CONTACT, EMAIL, AND ACCT NO. IF APPLICABLE) *MIN 3 REQUIRED*",
          "isRequired": true,
          "templateElements": [
            {
              "type": "text",
              "name": "trade_reference_information_name",
              "title": "NAME",
              "isRequired": true
            },
            {
              "type": "comment",
              "name": "trade_reference_information_address",
              "title": "ADDRESS",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "trade_reference_information_telephone",
              "title": "TELEPHONE",
              "isRequired": true,
              "inputType": "tel"
            },
            {
              "type": "text",
              "name": "trade_reference_information_fax",
              "title": "FAX",
              "isRequired": true,
              "inputType": "number"
            },
            {
              "type": "text",
              "name": "trade_reference_information_email",
              "title": "EMAIL",
              "isRequired": true,
              "inputType": "email"
            },
            {
              "type": "text",
              "name": "trade_reference_information_account_no",
              "title": "ACCOUNT NO."
            }
          ],
          "templateTabTitle": "No. {panelIndex}",
          "tabTitlePlaceholder": "Add New",
          "panelCount": 3,
          "minPanelCount": 3,
          "maxPanelCount": 99,
          "confirmDelete": true,
          "renderMode": "tab",
          "displayMode": "tab",
          "progressBarLocation": "topBottom"
        }
      ]
    },
    {
      "name": "page4",
      "title": "VOLUME & REVENUE",
      "elements": [
        {
          "type": "text",
          "name": "expected_annual_air_freight_volume",
          "title": " EXPECTED ANNUAL AIR FREIGHT VOLUME",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "expected_annual_ocean_freight_volume",
          "title": "EXPECTED ANNUAL OCEAN FREIGHT VOLUME",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "expected_annual_revenue",
          "title": "EXPECTED ANNUAL REVENUE",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page5",
      "title": "ACCOUNT DETAILS",
      "elements": [
        {
          "type": "text",
          "name": "who_is_the_primary_accounting_contact",
          "title": "WHO IS THE PRIMARY ACCOUNTING CONTACT?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "what_are_your_payment_terms",
          "title": "WHAT ARE YOUR PAYMENT TERMS?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "do_you_have_any_invoicing_requirements",
          "title": "DO YOU HAVE ANY INVOICING REQUIREMENTS?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "do_you_accept_invoices_via_email",
          "title": "DO YOU ACCEPT YOU INVOICES VIA EMAIL?",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page6",
      "title": "ADDITIONAL COMPANY DETAILS",
      "elements": [
        {
          "type": "text",
          "name": "current_agency_network_memberships",
          "title": "CURRENT AGENCY NETWORK MEMBERSHIPS",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "country_specific_requirements",
          "title": "COUNTRY SPECIFIC REQUIREMENTS",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "how_were_you_referred_to_pws",
          "title": "HOW WERE YOU REFERRED TO PWS?",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page7",
      "title": "NOTES OR ADDITIONAL INFORMATION",
      "elements": [
        {
          "type": "comment",
          "name": "notes_or_additional_information",
          "title": "NOTES OR ADDITIONAL INFORMATION",
          "isRequired": true
        }
      ]
    },
    {
      "name": "page8",
      "title": "AUTHORIZE",
      "description": "I HEARBY AUTHORIZE THE RELEASE OF CREDIT INFORMATION TO PRIORITY WORLDWIDE. PAYMENT TERMS ARE NET 30 DAYS. PAYMENTS NOT RECEIVED WITHIN 30 DAYS WILL BE SUBJECT TO FINANCE CHARGES. BY SIGNATURE BELOW, I ACKNOWLEDGE THAT I HAVE READ AND ACCEPT PRIORITY WORLDWIDE’S TERMS & CONDITIONS OF CONTRACT AND THAT IN THE EVENT OF LEGAL ACTION IS INSTITUTED TO ENFORCE COLLECTION, AGREE TO PAY REASONABLE ATTORNEY’S FEES AND COSTS FOR SUCH ACTION.",
      "elements": [
        {
          "type": "text",
          "name": "printed_name",
          "title": "PRINTED NAME",
          "isRequired": true
        },
        {
          "type": "signaturepad",
          "name": "signature",
          "title": "SIGNATURE",
          "description": "(must be an officer or controlling member)",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "title",
          "title": "TITLE",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "date",
          "title": "DATE",
          "isRequired": true,
          "inputType": "date"
        }
      ]
    }
  ],
  "showQuestionNumbers": "off"
}