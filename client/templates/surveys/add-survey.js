Template.surveyAdd.events({
  'click .btn-danger': function(event, template){
      event.preventDefault();
      Router.go('/');
    }
});

AutoForm.addHooks('addSurveyForm', {
  onSuccess: function(formType, result){
    console.log(this.insertDoc);
   }
});
