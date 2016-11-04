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
      Meteor.subscribe('surveygesuser')
   ];
  }
});
Router.route('/', {
  name: 'surveysList',
  onBeforeAction: function() {
    if (!Meteor.userId()){
      this.render('accessDenied');
    } else this.next();
  },
  waitOn: function() {
    return [
      Meteor.subscribe('surveys'),
      Meteor.subscribe('schemas'),
      Meteor.subscribe('answers')
   ];
  }
});

Router.route('/encIni', {name: 'encIni'});

Router.route('/encOK', {name: 'encOk'});
Router.route('/crearEncuesta', {name: 'surveyAdd'});

Router.route('/encuesta/:_id/editar', {
  name: 'surveyEdit',

  data: function() {
    return Surveys.findOne(this.params._id);
  },
  waitOn: function() {
    return [
      Meteor.subscribe('surveys'),
      Meteor.subscribe('schemas'),
      Meteor.subscribe('answers')
   ];
  }
});

Router.route('/encuesta/:_id/mostrar', {
  name: 'surveyShow',

  data: function() {

    return Surveys.findOne(this.params._id);
  },
  waitOn: function() {
    return [
      Meteor.subscribe('surveys'),
      Meteor.subscribe('schemas'),
      Meteor.subscribe('answers')
   ];
  }
});

Router.route('/encuesta/:_id/respuestas',{
  name: 'showQuestions',

  data: function(){
    return Answers.find({survey:this.params._id}).fetch();
  },
  waitOn: function() {
    return [
      Meteor.subscribe('surveys'),
      Meteor.subscribe('schemas'),
      Meteor.subscribe('answers')
   ];
  }
});


var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      Router.go('/');
      this.render('accessDenied');
    }

  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin);
