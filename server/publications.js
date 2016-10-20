Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('surveys', function() {
  if(this.userId){
    const user = Meteor.users.findOne(this.userId);
    const userGes = SurveyGesUsers.findOne({email: user.services.google.email});
    console.log(userGes.allowedSurveys);
    if (userGes.allowedSurveys)
      return Surveys.find({_id: {$in: userGes.allowedSurveys}});

    this.ready();
  }else {
    this.ready();
  }
});

Meteor.publish('answers', function() {
  return Answers.find();
});

Meteor.publish('schemas', function() {
  return Schemas.find();
});

Meteor.publish('surveygesuser', function() {
  return SurveyGesUsers.find();
});
