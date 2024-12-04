const { SITE_BASE_URL } = process.env;

export const survey_json = {
  "title": "CTPAT/PIP/AEO",
  "completedHtml": `<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href='${SITE_BASE_URL}/code-of-conduct'>Continue to Next Form</a></h3>`,
  "completedHtmlOnCondition": [
    {
      "html": `<h5>Thank you for your feedback</h5> <h3 style='padding: 10px;'><a href='${SITE_BASE_URL}/code-of-conduct'>Continue to Next Form</a></h3>`,
    },
    {
      "html": "<h3>Thank you for your participation</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product and service better.</h4>",
    },
  ],
  "pages": [
    {
      "name": "assessmentQuesions",
      "elements": [
        {
          "type": "boolean",
          "name": "question10",
          "title":
            "Does your company veritatis ex quas perferendis ipsam repellendus itaque, numquam, accusamus magni amet. Exercitationem neque impedit ullam doloribus optio earum ipsum. Officia?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "comment",
          "name": "question12",
          "visibleIf": "{question10} = false",
          "title":
            "Please explain what veritatis ex quas perferendis ipsam repellendus itaque, numquam, accusamus magni amet",
          "requiredIf": "{question10} = false",
        },
        {
          "type": "boolean",
          "name": "question11",
          "title": "Does your company numquam, accusamus magni amet?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question13",
          "visibleIf": "{question11} = true",
          "title":
            "When praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question11} = true",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "comment",
          "name": "question13b",
          "visibleIf": "{question13} = false and {question11} = true",
          "title":
            "Please explain what praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur.",
          "isRequired": true,
          "requiredIf": "{question13} = false",
        },
        {
          "type": "boolean",
          "name": "question14",
          "title": "Does your company praesentium, quasi?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question15",
          "visibleIf": "{question14} = true",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question14} = true",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "comment",
          "name": "question15b",
          "visibleIf": "{question15} = false and {question14} = true",
          "title":
            "Please explain what praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur",
          "isRequired": true,
          "requiredIf": "{question15} = false",
        },
        {
          "type": "boolean",
          "name": "question16",
          "visibleIf": "{question14} = false",
          "title":
            "Does your company require all employees to wear company-issued identification at all times?",
          "isRequired": true,
          "requiredIf": "{question14} = false",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question17",
          "visibleIf": "{question14} = false",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question14} = false",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question18",
          "visibleIf": "{question14} = false",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question14} = false",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question19",
          "visibleIf": "{question14} = false",
          "title":
            "Is your facility praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question14} = false",
          "labelTrue": "Is",
          "labelFalse": "Is Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question20",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "comment",
          "name": "question21",
          "visibleIf": "{question20} = false",
          "title":
            "Please explain what praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur",
          "isRequired": true,
          "requiredIf": "{question20} = false",
        },
        {
          "type": "boolean",
          "name": "question22",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "comment",
          "name": "question23",
          "visibleIf": "{question22} = false",
          "title":
            "Please explain how praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur",
          "isRequired": true,
          "requiredIf": "{question22} = false",
        },
        {
          "type": "boolean",
          "name": "question24",
          "title": "Does your company praesentium, quasi?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question25",
          "visibleIf": "{question24} = true",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question24} = true",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question26",
          "visibleIf": "{question24} = true",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question24} = true",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question27",
          "visibleIf": "{question24} = true",
          "title":
            "Are your praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question24} = true",
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question28",
          "title":
            "Does your company praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question29",
          "title":
            "Is your facility praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "labelTrue": "Is",
          "labelFalse": "Is Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question30",
          "title":
            "Does the origin country praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question31",
          "visibleIf": "{question30} = true",
          "title":
            "Is your company a praesentium, quasi, commodi temporibus nam rem unde accusamus consectetur?",
          "isRequired": true,
          "requiredIf": "{question30} = true",
          "labelTrue": "Is",
          "labelFalse": "Is Not",
          "swapOrder": true,
        },
        {
          "type": "text",
          "name": "question32",
          "visibleIf": "{question31} = true",
          "title": "Name of Program",
          "isRequired": true,
          "requiredIf": "{question31} = true",
          "placeholder": "Enter your answer",
        },
        {
          "type": "rating",
          "name": "rating",
          "title": "How do you feel about this assessment?",
          "isRequired": true,
          "rateType": "stars",
        },
      ],
    },
  ],
  "showQuestionNumbers": "off",
};
