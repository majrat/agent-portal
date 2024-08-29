export const surveyJson = {
  "title": "Sustainability Questionnaire - Environment",
  "description":
    "This sectlon focuses on questlons related to management of environmental Impacts, Including energy",
  "completedHtml":
    "<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href='http://localhost:3000/cargo-security-profile'>Continue to Next Form</a></h3>",
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
            "Do you have a publicly available Environmental/Sustainability Policy?",
          "choices": ["Yes", "No", "Partial"],
        },
        {
          "type": "radiogroup",
          "name": "question2",
          "isRequired": true,
          "title":
            "Has your company developed an Environmental Management System endorsed by management?",
          "choices": ["Yes", "No", "Partial"],
        },
        {
          "type": "radiogroup",
          "name": "question3",
          "isRequired": true,
          "title":
            "Does your company assess environmental risks or impacts before starting a new activity or project?",
          "choices": ["Yes", "No", "Partial"],
        },
        {
          "type": "comment",
          "name": "question4",
          "isRequired": true,
          "title":
            "How often is your company's environmental statutory compliance evaluated internally or externally?",
          "placeholder":
            "We are part of the UN Global Compact, so we are regularly reviewing our environmental compliance. We do not make a product, so a number of things do not apply to us.",
        },
        {
          "type": "radiogroup",
          "name": "question5",
          "isRequired": true,
          "title":
            "Has your company developed an emergency response procedure to reduce or mitigate environmental impacts of your business operations?",
          "choices": ["Yes", "No"],
        },
        {
          "type": "radiogroup",
          "name": "question6",
          "isRequired": true,
          "title":
            "Has your company been reported, charged or sanctioned for the violation of Environmental Laws over the past 5 years, or is the company currently facing any legal proceedings to that effect?",
          "choices": ["Yes", "No"],
        },
        {
          "type": "radiogroup",
          "name": "question7",
          "isRequired": true,
          "title":
            "Are measures in place to prevent spills and/or pollution (air, water, land, etc.)",
          "choices": ["Yes", "No"],
        },
        {
          "type": "radiogroup",
          "name": "question8",
          "isRequired": true,
          "title": "Does your company collect and report environmental data?",
          "choices": ["Yes", "No"],
        },
      ],
    },
  ],
};
