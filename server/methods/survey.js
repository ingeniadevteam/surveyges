Meteor.methods({
  submitEncIni:function(answer){
    console.log(answer);
    var test = JSON.stringify(answer);
    console.log(test);

    Answers.insert(answer);
  },
  surveyAdd:function(survey){

    console.log('insertada');
  }
});
