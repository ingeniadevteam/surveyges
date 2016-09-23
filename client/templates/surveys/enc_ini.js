Template.encIni.events({
  "click .btn-danger": function(event, template){
    Meteor.call("queryDelete", this._id, function(error, result){
      if(error){
        throwError(error);
      }
      Router.go('/');
    });
  }
});
