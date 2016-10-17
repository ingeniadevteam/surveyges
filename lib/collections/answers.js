Answers = new Mongo.Collection("answers");

Answer = new SimpleSchema({
  survey:{
    type: String,
    label: "encuesta"
  },
  answers:{
    type: [String],
    label: "respuestas"    
  }
});

Answers.attachSchema(Answer);
