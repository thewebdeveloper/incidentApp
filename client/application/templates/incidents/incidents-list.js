Template.incidentsList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('allIncidents');
  });
});

Template.incidentsList.helpers({
  incidents: function() {
    return Incidents.find();
  }
});
