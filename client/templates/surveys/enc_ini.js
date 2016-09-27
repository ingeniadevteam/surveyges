var mystring;

Template.encIni.events({

  'submit form':function(e){
    e.preventDefault();

    var checks = $(e.target).find('[name=chechbox]');

    var apps = [], disp = [];

    for (var i in checks){
      if(checks[i].id === 'app' && checks[i].checked) apps.push(checks[i].value);
      else if (checks[i].id === 'disp' && checks[i].checked) disp.push(checks[i].value);
    }
    var answer = {
      q1 : $(e.target).find('[name=age]').val(),
      q2 : $(e.target).find('[name=select1]').val(),
      q3 : apps,
      q4 : $(e.target).find('[name=readEmoticons]').val(),
      q5 : $(e.target).find('[name=entender]').val(),
      q6 : $(e.target).find('[name=writeEmoticons]').val(),
      q7 : $(e.target).find('[name=razonesNo]').val(),
      q8 : $(e.target).find('[name=automated]').val(),
      q9 : disp
    }
    Meteor.call("submitEncIni", answer);

    Router.go('/encOK');
  }
});
