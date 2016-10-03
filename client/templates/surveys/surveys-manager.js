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
            }
          ]
      };
  }
});
