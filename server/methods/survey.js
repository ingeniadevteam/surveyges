Meteor.methods({
  submitEncIni:function(answer){
    console.log(answer);
    var test = JSON.stringify(answer);
    console.log(test);

    Answers.insert(answer);
  },
  surveyAdd:function(survey){

    //insert all answers
    for(var x in survey.questions) Questions.insert(survey.questions[x])

    Surveys.insert(survey);
    console.log('Encuesta insertada');
  },
  surveyDelete: function(survey){

    var exists = Surveys.findOne({ _id: survey});

    if (exists) {
      Surveys.remove(exists);
      console.log("Encuesta borrada: "+survey);
    } else {
      throw new Meteor.Error("La encuesta no existe");
    }

  },
  surveyEdit: function(survey, id){
    console.log(id);
    var exists = Surveys.findOne({ _id: id});

    if (exists) {
      Surveys.update(id, survey);
    } else {
      throw new Meteor.Error("La encuesta no existe");
    }
  }
});
