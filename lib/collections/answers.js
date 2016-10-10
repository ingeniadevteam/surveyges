Answers = new Mongo.Collection("answers");

Answer = new SimpleSchema({
  answer:{
    type: String,
    label: "Respuesta"
  }
});

Answers.attachSchema(Answer);
