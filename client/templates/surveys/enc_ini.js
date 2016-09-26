/*
AutoForm.addHooks('enc-ini', {
  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    console.log("ok");
  },
  // Called when any submit operation fails
  onError: function(formType, error) {
    console.log("no ok");
  }
});
*/
Template.encIni.events({
  'submit form':function(e){
    e.preventDefault();

    var answer = {
      q1 : $(e.target).find('[name=age]').val(),
      q2 : $(e.target).find('[name=select1]').val(),
      q3 : $(e.target).find('[name=readEmoticons]').val(),
      q4 : $(e.target).find('[name=entender]').val(),
      q5 : $(e.target).find('[name=writeEmoticons]').val(),
      q6 : $(e.target).find('[name=razonesNo]').val(),
      q7 : $(e.target).find('[name=automated]').val()
    }

    Meteor.call("submitEncIni", answer);
  }
});
