Questions = new Mongo.Collection("questions");

Question = new SimpleSchema({
    name: {
        type: String,
        label: "Pregunta"
    },
    options: {
        type: [String],
        label: "Opciones"
    },
    style: {
        type: String,
        label: "Estilo de Pregunta",
        allowedValues: ['select-radio', 'select'],
        autoform:{
          options: [
            { label: 'Radio Button', value: 'select-radio'},
            { label: 'Select', value: 'select'}
          ],
          firstOption: "(Seleccionar Uno)"
        }
    },
    type: {
      type: String,
      label: "Tipo de Pregunta",
      allowedValues: ['opcion multiple', 'unica opcion'],
      autoform:{
        options: [
          { label: 'Opción Múltiple', value: 'opcion multiple'},
          { label: 'Unica Opción', value: 'unica opcion'}
        ],
        firstOption: "(Seleccionar Uno)"
      }

    }
});

Questions.attachSchema(Question);
