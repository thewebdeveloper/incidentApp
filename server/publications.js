Meteor.publish('allIncidents', function () {
  return Incidents.find({});
});

Meteor.publish('singleIncident', function (reportId) {
  return Incidents.find({ _id: reportId });
});
