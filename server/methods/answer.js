Meteor.methods({
  addAnswer:function(answer){
    console.log(answer);
    Answers.insert(answer);
  }
});
