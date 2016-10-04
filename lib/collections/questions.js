Questions = new Mongo.Collection("questions");

Question = new SimpleSchema({
    name: {
        type: String,
        label: "Pregunta"
    },
    options: {
        type: [String],
        label: "Opciones"
    }
});

Questions.attachSchema(Question);
