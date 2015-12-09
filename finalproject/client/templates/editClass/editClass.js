/**
 * Created by Michael on 12/6/2015.
 */
Template.editClass.events({
  'submit form': function(evt) {
    evt.preventDefault();
    var courseName = evt.target.title.value;
    var courseStart = evt.target.startHr.value + " " + evt.target.startMin.value + " " + evt.target.DayNight.value;
    var courseEnd = evt.target.endHr.value + " " + evt.target.endMin.value + " " + evt.target.AMPM.value;
    alert(courseName + " " + courseStart + " " + courseEnd);
    Classes.insert({
      name: courseName,
      start: courseStart,
      end: courseEnd
    });
  }
});