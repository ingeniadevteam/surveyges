Template.surveyAdd.events({
  'click .btn-danger': function(event, template){
      Router.go('/');
    },
  'click #add': function(event){
      event.preventDefault();
      console.log('aqui');

      $('#questionModal').modal('show');
  }
});
