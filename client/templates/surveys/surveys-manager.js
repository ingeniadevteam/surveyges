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
                return new Spacebars.SafeString('<button name="show" id="'+id+'" class="btn btn-info">'+
                                                    '<span class="glyphicon glyphicon-file"></span></a> Mostrar Encuesta</button> '+
                                                '<button name="edit" id="'+id+'" class="btn btn-primary">'+
                                                    '<span class="glyphicon glyphicon-pencil"></span> Editar</button> '+
                                                '<button id="'+id+'" name="answers" class="btn btn-success">'+
                                                    '<span class="glyphicon glyphicon-list"></span> Respuestas</button>  '+
                                                '<button name="remove" id="'+id+'" class="btn btn-danger  title="Borrar Encuesta">'+
                                                    '<span class="glyphicon glyphicon-trash"></span> Borrar</button>  '
                                                );
              }
            }
          ]
      }
  }
});
//<a href="/encuesta/'+id+'/mostrar" title="Mostrar Encuenta" class="btn btn-default" enabled>


Template.surveysList.events({
  'click .reactive-table tbody tr': function (event) {
     if(event.target.name == "remove") {
       if(Meteor.isClient){
         Session.set('id',event.target.id);
         $('#deleteSurveyModal').modal('show');
       }
     }
     if(event.target.name == "answers"){
       if(Meteor.isClient){
         if(Answers.findOne({survey: event.target.id})){
           Router.go('showQuestions', {_id : event.target.id});
         }else{
           console.log('here 2');
           $('#noAnswerModal').modal('show');
         }
       }
     }
     if(event.target.name == "show"){
       Router.go('surveyShow', {_id : event.target.id});
     }
     if(event.target.name == "edit"){
       Router.go('surveyEdit', {_id : event.target.id});       
     }
  }
});
