Surveys = new Mongo.Collection("surveys");

Survey = new SimpleSchema({
    name: {
        type: String,
        label: "Nombre de Encuesta"
    },
    answers: {
        type: [Question],
        label: "Preguntas"
    }
});

Surveys.attachSchema(Survey);
