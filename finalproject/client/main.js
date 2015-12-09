/**
 * Created by Michael on 10/29/2015.
 */

Meteor.subscribe('posts');

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});