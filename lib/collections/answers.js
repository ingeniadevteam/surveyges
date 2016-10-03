Answers = new Mongo.Collection("answers");

Answer = new SimpleSchema({
    name: {
        type: String,
        label: "Pregunta"
    },
    options: {
        type: [String],
        label: "Opciones"
    }
});

Answers.attachSchema(Answer);
