/**
 * Created by Michael on 12/6/2015.
 */

Template.editClass.helpers({
  evt: function() {
    var cls = Classes.findOne({id: Session.get('editing_classes')});
    return cls;
  }
});

Template.editClass.evt = function () {
  var cls = Classes.findOne({id: Session.get('editing_classes')});
  return cls;
};

Template.editClass.events({
  'click .save': function (evt, tmpl) {
    updateCal(Session.get('editing_classes', tmpl.find('.title').value));
    Session.set('editing_classes', null);
    Session.set('showEditing', false);
  }
});