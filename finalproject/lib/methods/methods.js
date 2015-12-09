/**
 * Created by Michael on 10/29/2015.
 */

Meteor.methods({
  addPost: function(event, title, url, id) {
    Posts.insert({
      title: title,
      url: url,
      owner: Meteor.userId(),
      rating: 0
    });
  }
});