/**
 * Created by Michael on 10/29/2015.
 */
Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});