Surveys = new Mongo.Collection("surveys");

Survey = new SimpleSchema({
    name: {
        type: String,
        label: "Nombre de Encuesta"
    },
    questions: {
        type: [Question],
        label: "Preguntas",
        optional: true
    }
});

Surveys.attachSchema(Survey);
