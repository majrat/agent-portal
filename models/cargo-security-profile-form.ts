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
            "Does your company screen sub-contractors (truckers, cartage agents) for their ability to meet requirements concerning physical and personnel security?",
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
            "Please explain what procedures are used by your organization to approve sub-contractors for use.",
          "requiredIf": "{question10} = false",
        },
        {
          "type": "boolean",
          "name": "question11",
          "title": "Does your company load containers?",
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
            "When loading containers, does your company perform a physical inspection and complete an integrity checklist (available upon request) prior to loading?",
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
            "Please explain what procedures are used by your organisation during and after container loading.",
          "isRequired": true,
          "requiredIf": "{question13} = false",
        },
        {
          "type": "boolean",
          "name": "question14",
          "title": "Does your company store containers?",
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
            "Does your company store containers in a secure area to prevent unauthorized access?",
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
            "Please explain what procedures are used by your organisation to secure containers",
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
            "Does your company verify the identification of all visitors to your facility?",
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
            "Does your company escort non-employees while they are in your facility?",
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
            "Is your facility kept locked at all times, preventing access by unauthorized persons?",
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
            "Does your company perform checks on employees, verifying identity, work history, and criminal background?",
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
            "Please explain what employment procedures are used by your organization to ensure an employee is not a threat to cargo security.",
          "isRequired": true,
          "requiredIf": "{question20} = false",
        },
        {
          "type": "boolean",
          "name": "question22",
          "title":
            "Does your company have procedures in place to safeguard documentation used in the movement of cargo from loss or the introduction of erroneous information, including computer access and information?",
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
            "Please explain how your organization protects itself from cyberthreats.",
          "isRequired": true,
          "requiredIf": "{question22} = false",
        },
        {
          "type": "boolean",
          "name": "question24",
          "title": "Does your company handle cargo at this facility?",
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
            "Does your company have procedures in place to reconcile cargo against the documentation accompanying it, including supplier, dimensions, and weight?",
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
            "Does your company physically screen cargo for threats that could be introduced to international cargo, including drugs, explosives, and stowaways?",
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
            "Are your cargo areas covered by a camera surveillance system?",
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
            "Does your company train employees in the identification of threats that could be introduced to international cargo, including drugs, explosives, and stowaways?",
          "isRequired": true,
          "labelTrue": "Does",
          "labelFalse": "Does Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question29",
          "title":
            "Is your facility protected by a security system, including alarms and/or cameras?",
          "isRequired": true,
          "labelTrue": "Is",
          "labelFalse": "Is Not",
          "swapOrder": true,
        },
        {
          "type": "boolean",
          "name": "question30",
          "title":
            "Does the origin country have a CTPAT/PIP/AEO equivalent program?",
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
            "Is your company a participant in a CTPAT/PIP or equivalent AEO program sponsored by your home country?",
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
