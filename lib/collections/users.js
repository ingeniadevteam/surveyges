SurveyGesUsers = new Mongo.Collection("surveygesuser");

SurveyGesUser = new SimpleSchema({
    email: {
        type: String,
        label: "Email"
    },
    allowedSurveys: {
      label: "Encuestas",
      type: Array,
      optional: true
    },
    'allowedSurveys.$': {
      type: String
    }
});

SurveyGesUsers.attachSchema(SurveyGesUser);
