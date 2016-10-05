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
                console.log("ver encuesta");
                return new Spacebars.SafeString('<a href="/encuesta/'+id+'/mostrar" class="btn btn-primary" enabled>Ver Encuesta</a>'+
                                                '    <a href="/encuesta/'+id+'/editar" class="btn btn-success" enabled>Editar Encuesta</a>'+
                                                '    <a href="#" id="'+id+'" name="remove" class="btn btn-danger" enabled>Borrar Encuesta</a>');
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
