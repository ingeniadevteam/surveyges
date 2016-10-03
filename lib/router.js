Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

  waitOn: function() {
    return [
      Meteor.subscribe('surveys'),
   ];
  }
});
Router.route('/', {name: 'surveysList'});

Router.route('/encOK', {name: 'encOk'});
Router.route('/crearEncuesta', {name: 'surveyAdd'});
