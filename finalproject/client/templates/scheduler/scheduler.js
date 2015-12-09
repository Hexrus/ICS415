/**
 * Created by Michael on 12/5/2015.
 */
Template.scheduler.helpers({
  options: function() {
    return {
      defaultView: 'basicWeek'
    };
  }
});

Template.scheduler.rendered = function() {
  $('#weekSched').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
  });
}