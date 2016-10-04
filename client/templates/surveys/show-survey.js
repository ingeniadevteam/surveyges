Template.surveyShow.events({
  "click .btn-danger": function(){
    console.log('here');
    Router.go("/");
  }
});

Template.surveyShow.helpers({
  unHelper: function(){
    console.log(this._id);
    return this._id;
  },
  optionsList: function(){
    console.log("--");
    console.log(this.options);
    return this.options.map( (c) => {
      return { label: c, value: c };
    });
  }
});

AutoForm.addHooks('submitSurvey', {
  // Called when any submit operation succeeds
  onSuccess: (formType, result) => {
    Alert('success', 'success');
    Router.go('/');
   },
   // Called when any submit operation fails
   onError: (formType, error) => {
     if (error.hasOwnProperty('reason')) {
       console.log(error.reason);
     }
   }
 });
