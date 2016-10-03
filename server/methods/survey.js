Meteor.methods({
  submitEncIni:function(answer){
    console.log(answer);
    var test = JSON.stringify(answer);
    console.log(test);

    Answers.insert(answer);
  },
  surveyAdd:function(survey){

    console.log(JSON.stringify(survey.answers[x]));
    //insert all answers
    for(var x in survey.answers) Answers.insert(survey.answers[x])

    Surveys.insert(survey);
    console.log('Encuesta insertada');


  }
});
