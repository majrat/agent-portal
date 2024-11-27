const { SITE_BASE_URL } = process.env;

export const survey_json = {
  "completedHtml":
    `<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href='${SITE_BASE_URL}/vendor-profile/nda'>Continue to Next Form</a></h3>`,
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
      "name": "NDA",
      "title": "Contracted Partner",

      "elements": [
        {
          "type": "text",
          "name": "date",
          "title": "Date",
          "isRequired": true,
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "printed_name",
          "title": "Printed Name",
          "isRequired": true
        },
        {
          "type": "signaturepad",
          "name": "signature",
          "title": "Signature",
          "isRequired": true
        }
      ]
    }
  ],
  "showQuestionNumbers": "off"
}