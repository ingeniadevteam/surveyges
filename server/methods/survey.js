Meteor.methods({
  submitEncIni:function(answer){
    console.log(answer);
    var test = JSON.stringify(answer);
    console.log(test);
    Answers.insert(answer);
  },
  surveyAdd:function(survey){
    console.log(survey);
    //survey.schema = new SimpleSchema(schem);
    //for(var x in survey.questions) Questions.insert(survey.questions[x])
    var enc = Surveys.insert(survey);
    const user = Meteor.users.findOne(Meteor.userId());

    SurveyGesUsers.update({email:user.services.google.email},{$push: {allowedSurveys: enc}});

    if(survey.questions){
      var s = Meteor.call('createSchema', survey, enc);
      console.log(s);
      var insSchema = {
        survey: enc,
        schema: s
      }
      Schemas.insert(insSchema);
      console.log('Encuesta insertada con preguntas');
    }else{
    console.log('Encuesta insertada sin preguntas');
    }
  },
  surveyDelete: function(survey){

    var exists = Surveys.findOne({ _id: survey});
    if (exists) {
      Surveys.remove(exists);

      const user = Meteor.users.findOne(Meteor.userId());
      SurveyGesUsers.update({email:user.services.google.email},{$pull: {allowedSurveys: exists._id}});
      Schemas.remove({survey:exists._id});

      console.log("Encuesta borrada: "+survey);
    } else {
      throw new Meteor.Error("La encuesta no existe");
    }
  },
  submitSurvey:function(answers){

    console.log(answers);
    var arr = Object.values(answers);
    var survey = arr[0];
    var ans = arr.slice(1);

    console.log('encuesta: '+survey);
    console.log('answer: '+ans);
    var ob = {
      survey:survey,
      answers:ans
    }

    console.log('submitted answer... '+Answers.insert(ob));

  },
  surveyEdit: function(survey, id){
    //remove nulls from list of questions
    for (var i in survey['$set'].questions){

      if(survey['$set'].questions[i] === null){
        survey['$set'].questions.splice(i,1);
      }
    }
    if(survey['$set'].questions){
       var s = Meteor.call('createSchema', survey['$set'], id);
       Schemas.update({survey: id},{$set:{schema: s}});
    }
    var exists = Surveys.findOne({ _id: id});
    if (exists) {
      Surveys.update(id, survey);
    } else {
      throw new Meteor.Error("La encuesta no existe");
    }
    console.log('Encuesta Modificada: '+id);
  },
  createSchema: function(survey, enc){
    //JSON CREATION
    //"allowedValues":["'+enc+'"],"autoform": {"options":[{"label":"'+enc+'","value":"'+enc+'"}]}

    var schemaObject = '{"id":{"type":"String","defaultValue":"'+enc+'","autoform":{"type":"hidden"}},';
    for(var x in survey.questions){

      var opciones = ''
      var opcionesObject = '[';
      for(var i in survey.questions[x].options){
        opciones = opciones +'"'+survey.questions[x].options[i]+'",';
        opcionesObject = opcionesObject + '{"label":"'+survey.questions[x].options[i]+'","value":"'+survey.questions[x].options[i]+'"},';
      }
      var ind = parseInt(x)+1;
      opciones = opciones.slice(0,-1);
      opcionesObject = opcionesObject.slice(0,-1);
      opcionesObject = opcionesObject +']';
      console.log(opcionesObject);
      schemaObject = schemaObject + '"question'+ind+'"'+':{"type": "String","allowedValues": ['+opciones+'],"autoform": {"options":'+opcionesObject+', "firstOption":"(Seleccionar Una)"},"label":"'+survey.questions[x].name+'"},';
    }
    schemaObject = schemaObject.slice(0, -1);
    schemaObject = schemaObject + '}';
    return schemaObject;
  }
});
