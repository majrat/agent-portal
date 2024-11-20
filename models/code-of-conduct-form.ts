const { SITE_BASE_URL } = process.env;

export const survey_json = {
  "title": "Supplier Code of Conduct",
  "description":
    "Please complete the Supplier Code of Conduct. Use the link below to download the document for review and sign.",
  "completedHtml":
    `<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href='${SITE_BASE_URL}/supplier-sustainability-profile'>Continue to Next Form</a></h3>`,
  "completedHtmlOnCondition": [
    {
      "html": "<h3>Thank you for your participation</h3> <h4>We are glad that you love our product and service. Your ideas and suggestions will help us make it even better.</h4>",
    },
    {
      "html": "<h3>Thank you for your participation</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product and service better.</h4>",
    },
  ],
  "pages": [
    {
      "name": "CodeOfConduct",
      "elements": [
        {
          "type": "boolean",
          "name": "read_and_agree",
          "title":
            "Did you read and agree to the Supplier Code of Conduct Document?",
          "isRequired": true,
          "labelTrue": "I read & I Agree",
          "labelFalse": "I read & I Do Not Agree",
          "swapOrder": true,
        },
        {
          "type": "comment",
          "name": "remarks",
          "title":
            "Remarks",
          "description": "Give a brief description:",
          "placeholder":
            "I agree to Supplier Code of Conduct from Priority Worldwide.",
        },
        {
          "type": "text",
          "name": "signed_by",
          "title": "Signed By:",
          "isRequired": true,
          "placeholder": "Lauren Priddy",
        },
        {
          "type": "text",
          "name": "title",
          "title": "Title:",
          "isRequired": true,
          "placeholder": "Director of Compliance/Corporate Secretary",
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date: (MM/DD/YYYY)",
          "isRequired": true,
          "inputType": "date",
          "placeholder": "05/23/2024",
        },
      ],
    },
  ],
  "showQuestionNumbers": "off",
};
