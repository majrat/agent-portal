const { SITE_BASE_URL } = process.env;

export const surveyJson = {
  "title": "Sustainability Questionnaire - Environment",
  "description":
    "This sectlon focuses on questlons related to management of environmental Impacts, Including energy",
  "completedHtml":
    `<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href='${SITE_BASE_URL}/'>Continue to Dashboard</a></h3>`,
  "logoPosition": "right",
  "pages": [
    {
      "name": "Questionaire",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "isRequired": true,
          "title":
            "Do you have a publicly praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "choices": ["Yes", "No", "Partial"],
        },
        {
          "type": "radiogroup",
          "name": "question2",
          "isRequired": true,
          "title":
            "Has your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "choices": ["Yes", "No", "Partial"],
        },
        {
          "type": "radiogroup",
          "name": "question3",
          "isRequired": true,
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "choices": ["Yes", "No", "Partial"],
        },
        {
          "type": "comment",
          "name": "question4",
          "isRequired": true,
          "title":
            "How often is your company's praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "placeholder":
            "praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur",
        },
        {
          "type": "radiogroup",
          "name": "question5",
          "isRequired": true,
          "title":
            "Has your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "choices": ["Yes", "No"],
        },
        {
          "type": "radiogroup",
          "name": "question6",
          "isRequired": true,
          "title":
            "Has your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "choices": ["Yes", "No"],
        },
        {
          "type": "radiogroup",
          "name": "question7",
          "isRequired": true,
          "title":
            "Are measures praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur",
          "choices": ["Yes", "No"],
        },
        {
          "type": "radiogroup",
          "name": "question8",
          "isRequired": true,
          "title": "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "choices": ["Yes", "No"],
        },
      ],
    },
  ],
};
