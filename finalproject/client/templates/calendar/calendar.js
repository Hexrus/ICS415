Session.setDefault('editing_classes', null);
Session.setDefault('showEditing', false);
Session.setDefault('lastMod', null);

Template.calendar.rendered = function(){
  /**$('#calendar').fullCalendar({
    dayClick: function (date, allDay, jsEvent, view) {
      Classes.insert({
        title: 'New Event',
        start: date,
        end: date,
        createdAt: new Date()
      });
      Session.set('lastMod', new Date());
    },
    eventClick: function (calEvent, jsEvent, view) {
      Session.set('editing_classes', calEvent.id);
      Session.set('showEditing', true);
    },
    eventDrop: function (calEvent) {
      Classes.update(calEvent.id, {$set: {start: calEvent.start, end: calEvent.end}});
    },
    events: function (start, end, callback) {
      var events = [];
      calEvents = Classes.find();
      calEvents.forEach(function (evt) {
        events.push({
          id: evt._id,
          title: evt.title,
          start: evt.start,
          end: evt.end
        })
      });
      callback(events);
    },
    editable: true,
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
  })*/
  $('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view, resourceObj) {
      $(this).css('background-color', 'green');
      Session.set('showEditing', true);
      $(this).innerHTML()
    }
  });
};

Template.calendar.helpers({
  showEditing: function() {
    return Session.get('showEditing');
  },
  lastMod: function() {
    return Session.get('lastMod');
  }
});


