Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('surveys', function() {
  return Surveys.find();
});

Meteor.publish('answers', function() {
  return Surveys.find();
});
