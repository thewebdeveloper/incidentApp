Template.incidentDetails.helpers({
  incident: function() {
    return Incidents.findOne(_id);
  }
});
