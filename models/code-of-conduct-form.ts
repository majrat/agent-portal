export const survey_json = {
  "title": "Supplier Code of Conduct",
  "description":
    "Please complete the Supplier Code of Conduct. Use the link below to download the document for review and sign.",
  "completedHtml":
    "<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href='http://pws-vendorportal-cra3fuh0hvh8bvgu.centralus-01.azurewebsites.net/supplier-sustainability-profile'>Continue to Next Form</a></h3>",
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
          "type": "html",
          "name": "CodeOfConductFile",
          "html": "<p><a href='https://drive.google.com/uc?export=download&id=1vorhqtGYzWhHVtCPoqe0-n9UNeSREGnA' download><b><big>Click Here to Download</big></a> Code of Conduct document for review and sign</p></b>",
        },
        {
          "type": "file",
          "name": "question1",
          "title": "Scan and upload the signed Supplier Code of Conduct:",
          "isRequired": true,
        },
        {
          "type": "comment",
          "name": "question2",
          "title":
            "If you are unable to upload a signed copy of the Code of Business Conduct, please upload an alternative document.",
          "description": "Give a brief description:",
          "placeholder":
            "The completed and signed KBR Supplier Code of Conduct from Priority Worldwide is attached.",
        },
        {
          "type": "text",
          "name": "question3",
          "title": "Signed By:",
          "isRequired": true,
          "placeholder": "Lauren Priddy",
        },
        {
          "type": "text",
          "name": "question4",
          "title": "Title:",
          "isRequired": true,
          "placeholder": "Director of Compliance/Corporate Secretary",
        },
        {
          "type": "text",
          "name": "question5",
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
