Meteor.publish('answers', function() {
  return Answers.find();
});

Meteor.publish('surveys', function() {
  return Surveys.find();
});
