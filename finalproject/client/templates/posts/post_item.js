/**
 * Created by Michael on 10/29/2015.
 */
Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  rating: function() {
    var pun = Posts.findOne(this.title, {fields: {title: 1}});
    return pun.rating;
  }
});

Template.postItem.events({
  'click .post-content': function() {
    var punId = this._id;
    Session.set('selectPun', punId);
  },
  'click .clickPlus': function() {
    var selectPun = Session.get('selectPun');
    Posts.update(selectPun, {$inc: {rating: 1}});
  },
  'click .clickMinus': function() {
    var selectPun = Session.get('selectPun');
    Posts.update(selectPun, {$inc: {rating: -1}});
  }
});