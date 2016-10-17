Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

  waitOn: function() {
    return [
      Meteor.subscribe('surveys'),
      Meteor.subscribe('answers'),
      Meteor.subscribe('questions'),
      Meteor.subscribe('schemas'),
      Meteor.subscribe('answers')
   ];
  }
});
Router.route('/', {name: 'surveysList'});

Router.route('/encIni', {name: 'encIni'});

Router.route('/encOK', {name: 'encOk'});
Router.route('/crearEncuesta', {name: 'surveyAdd'});

Router.route('/encuesta/:_id/editar', {
  name: 'surveyEdit',

  data: function() {
    return Surveys.findOne(this.params._id);
  }
});

Router.route('/encuesta/:_id/mostrar', {
  name: 'surveyShow',

  data: function() {

    return Surveys.findOne(this.params._id);
  }
});

Router.route('/encuesta/:_id/respuestas',{
  name: 'showQuestions',

  data: function(){
    return Answers.find({survey:this.params._id}).fetch();
  }
});
