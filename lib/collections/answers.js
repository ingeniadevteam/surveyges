Answers = new Mongo.Collection("answers");

Answer = new SimpleSchema({
  name:{
    type: String,
    label: "Pregunta"
  },
  survey:{
    type: String,
    label: "Encuesta"
  },
  answer:{
    type: String,
    label: "Respuesta"
  }
});

Answers.attachSchema(Answer);
