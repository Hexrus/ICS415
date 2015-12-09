/**
 * Created by Michael on 12/9/2015.
 */
Template.myPuns.helpers({
  myPosts: function() {
    return Posts.find({owner: Meteor.userId()});
  }
});