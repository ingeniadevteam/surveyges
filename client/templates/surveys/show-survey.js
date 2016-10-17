Template.surveyShow.events({
  "click .btn-danger": function(){

    Router.go("/");
  }
});

Template.surveyShow.helpers({
  optionsList: function(){

    console.log("--");
    console.log(this.options);
    return this.options.map( (c) => {
      return { label: c, value: c };
    });
  },
  getSchema:function(){
  var schemaString = Schemas.findOne({survey: this._id});
  var object = JSON.parse(schemaString.schema);
  return new SimpleSchema(object);
  }
});


AutoForm.addHooks('submitSurvey', {

  onSuccess: (formType, result) => {
    Router.go('/');
   },
   onError: (formType, error) => {
     if (error.hasOwnProperty('reason')) {
       console.log(error.reason);
     }
   }
 });
