var scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
]

Accounts.ui.config({
  'requestPermissions':{
    'google': scopes
  },
  'requestOfflineToken': {
    google: true
  },
  'forceApprovalPrompt': {
    google: true
  },
});
