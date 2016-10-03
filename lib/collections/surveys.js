Surveys = new Mongo.Collection("surveys");

Survey = new SimpleSchema({
    name: {
        type: String,
        label: "Nombre de Encuesta"
    }
});

Surveys.attachSchema(Survey);
