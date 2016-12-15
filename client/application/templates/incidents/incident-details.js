Template.incidentDetails.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var reportId = FlowRouter.getParam('reportId');
    self.subscribe('singleIncident', reportId);
  });
});


Template.incidentDetails.helpers({
  incident: function() {
    var reportId = FlowRouter.getParam('reportId');
    var incident = Incidents.findOne({_id: reportId}) || {};
    return incident;
  }
});
