Answers = new Mongo.Collection("answers");

Answer = new SimpleSchema({
  answers:{
    type: [String],
    label: "Respuesta"
  }
});

Answers.attachSchema(Answer);
