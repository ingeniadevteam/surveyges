Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});
Router.route('/', {name: 'main'}, function() {
    this.render('layout');
});
