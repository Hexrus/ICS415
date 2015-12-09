/**
 * Created by Michael on 12/5/2015.
 */
Template.scheduler.helpers({
  options: function() {
    return {
      defaultView: 'basicWeek'
    };
  },
  render: function() {
  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
  });
  }
});