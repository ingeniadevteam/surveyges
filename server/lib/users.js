Accounts.onCreateUser(function(options, user) {

  console.log('usuario nuevo');
  // se ejecuta antes de crear el usario en la base de datos
/*
  // no users (empty app) first user is admin
  if (Meteor.users.find().count() === 0) {
    const firstCamposUser = {
      email: user.services.google.email,
    }
    CamposCorp.insert(firstCamposUser);
    // Defer (aka: poner en la cola del event loop) la function addUsersToRoles
    // de manera que la fucnión actual onCreateUser puede finalizar y el usuario
    // se ha creado antes de que addUsersToRoles se ejecute.
    Meteor.defer( () => {
      Roles.addUsersToRoles(user._id, ['admin']);
    });
    console.log('Admin account created for first app user', user.services.google.email);

    return user;
  }
  */
  // setup user role using CamposCorp collection
  const userCreate = SurveyGesUsers.findOne({email: user.services.google.email});

  if (!userCreate) {
    const userSurvey = {
      email: user.services.google.email
    }
    SurveyGesUsers.insert(userSurvey);
    return user;
  }
  return user;

});


Accounts.validateLoginAttempt(function (attempt) {
  if (attempt.type === 'resume') {
    // asumimos que si está logeado es porque tiene permisos
    // y devolvemos true (Hot Code Reload)
    return true;
  }

  if (attempt.type === 'google') {
    // get the Meteor user
    const user = Meteor.users.findOne(attempt.user._id);
    // get a valid users list from a collection
    const validUsers = SurveyGesUsers.find().fetch().map((user) => {
      return user.email
    });
    console.log(validUsers);
    // check if user email is in the list
    if (validUsers.indexOf(user.services.google.email) >= 0) {
      return true;
    }
  }

  console.log('here');
  // no other login type is allowed
  return false;
});
