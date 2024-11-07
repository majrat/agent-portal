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
          "html": "<p><a href='https://drive.google.com/uc?export=download&id=1vorhqtGYzWhHVtCPoqe0-n9UNeSREGnA' download><b><big>Click Here to Download</big></a> </br> Code of Conduct document for review and acknowledgement</p></b>",
        },
        {
          "type": "boolean",
          "name": "question1",
          "title":
            "Did you read and agree to the Supplier Code of Conduct Document?",
          "isRequired": true,
          "labelTrue": "I read & I Agree",
          "labelFalse": "I read & I Do Not Agree",
          "swapOrder": true,
        },
        {
          "type": "comment",
          "name": "question2",
          "title":
            "Remarks",
          "description": "Give a brief description:",
          "placeholder":
            "I agree to Supplier Code of Conduct from Priority Worldwide.",
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
