Template.surveysList.helpers({
  settings: function () {
      return {
          collection: Surveys,
          rowsPerPage: 50,
          showFilter: true,
          showNavigation: 'auto',
          fields: [
            {
              key: 'name',
              label: 'Nombre Encuesta',
              sortable: false
            },{
              key: '_id',
              label: 'Acciones',
              sortable: false,
              fn: function (id) {
                return new Spacebars.SafeString('<a href="/encuesta/'+id+'/mostrar" title="Mostrar Encuenta" class="glyphicon glyphicon-file" enabled></a>'+
                                                '    <a href="/encuesta/'+id+'/editar" title="Editar Encuenta" class="glyphicon glyphicon-pencil" enabled></a>'+
                                                '    <a href="/encuesta/'+id+'/respuestas" title="Ver Respuestas" class="glyphicon glyphicon-list" enabled></a>' +
                                                '    <a href="#" id="'+id+'" name="remove" title="Borrar Encuesta" class="glyphicon glyphicon-trash" enabled></a>');
              }
            }
          ]
      }
  }
});



Template.surveysList.events({
  'click .reactive-table tbody tr': function (event) {
     if(event.target.name == "remove") {
       if(Meteor.isClient){
         Session.set('id',event.target.id);
         $('#deleteSurveyModal').modal('show');
       }
     }
  }
});
