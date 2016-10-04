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

  }
});
