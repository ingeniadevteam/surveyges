Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});
Router.route('/', {name: 'encIni'});

Router.route('/encOK', {name: 'encOk'});
