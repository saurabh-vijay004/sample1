// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
//facebook sdk initialization
Alloy.Globals.facebook = require('facebook');
Alloy.Globals.facebook.permissions = ['public_profile', 'email', 'user_birthday'];
// Alloy.Globals.facebook.setLoginBehavior(Alloy.Globals.facebook.LOGIN_BEHAVIOR_BROWSER);