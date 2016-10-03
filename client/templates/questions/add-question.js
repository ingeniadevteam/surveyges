Template.questionModalTemplate.events({
  'click #addQuestion':function(e){
      console.log("Pregunta Añadida");
      let options = $(e.target).find('[id=options]').val();

      var question = {
        name: $(e.target).find('[id=question]').val()
      }
      console.log(name);
      console.log(options);
  }
});
