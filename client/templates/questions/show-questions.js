Template.showQuestions.helpers({
  getSurvey: function(){
    console.log(this);
    return this[0].survey;
  },
  getQuestions: function(){
    var enc = Surveys.findOne(this[0].survey);
    var ret = [];
    for(var i in enc.questions) ret.push('#'+enc.questions[i].name);
    return ret;
  }
});
