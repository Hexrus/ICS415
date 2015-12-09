Meteor.publish('Classes', function() {
  return Classes.find();
});