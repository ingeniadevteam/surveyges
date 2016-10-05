Template.deleteSurveyTemplate.helpers({
  survey: function(){
    return Session.get('id');
  }
});

Template.deleteSurveyTemplate.events({
  'click .btn-primary': function(e){

    Meteor.call('surveyDelete',e.target.id);
    $('#deleteSurveyModal').modal('hide');
  }
});
