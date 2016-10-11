Meteor.methods({
  submitEncIni:function(answer){
    console.log(answer);
    var test = JSON.stringify(answer);
    console.log(test);

    Answers.insert(answer);
  },
  surveyAdd:function(survey){

    //insert all answers
    //var schem = JSON.parse();

    Meteor.call('createSchema', survey);
    //survey.schema = new SimpleSchema(schem);
    //for(var x in survey.questions) Questions.insert(survey.questions[x])

    Surveys.insert(survey);
    console.log('Encuesta insertada');
  },
  surveyDelete: function(survey){

    var exists = Surveys.findOne({ _id: survey});

    if (exists) {
      Surveys.remove(exists);
      console.log("Encuesta borrada: "+survey);
    } else {
      throw new Meteor.Error("La encuesta no existe");
    }

  },
  surveyEdit: function(survey, id){

    //remove nulls from list of questions
    for (var i in survey['$set'].questions){

      if(survey['$set'].questions[i] === null){
        survey['$set'].questions.splice(i,1);
      }
    }

    var exists = Surveys.findOne({ _id: id});

    if (exists) {
      Surveys.update(id, survey);
    } else {
      throw new Meteor.Error("La encuesta no existe");
    }
  },
  createSchema: function(survey){

    //JSON CREATION
    var schemaObject = '{';
    for(var x in survey.questions){

      var opciones = ''
      for(var i in survey.questions[x].options) opciones = opciones +'"'+survey.questions[x].options[i]+'",';
      var ind = parseInt(x)+1;
      opciones = opciones.slice(0,-1);
      schemaObject = schemaObject + '"pregunta'+ind+'":{'+'"question'+ind+'"'+':{"type": "String","label": "'+survey.questions[x].name+'"},"options'+ind+'":{"type": "String","allowedValues": ['+opciones+'],"label": "Respuesta"}},';

    }
    schemaObject = schemaObject.slice(0, -1);
    schemaObject = schemaObject + '}';

    var object = JSON.parse(schemaObject);
    var jsonSchema = new JSONSchema(object);
    var simpleSchema = jsonSchema.toSimpleSchema();

    return simpleSchema;
  }
});
