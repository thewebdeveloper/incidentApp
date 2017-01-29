Template.incidentsList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('allIncidents');
  });
});

Template.incidentsList.helpers({
  incidents: function() {
    var user = Meteor.userId();
    return Incidents.find({ createdBy: user});
  }
});


Template.incidentItem.helpers({
	getBackground: function(priority) {
		
		if (priority === "High") {
			return 'red';
		} else if (priority === "Medium") {
			return 'orange';
		} else {
			return 'yellow';
		}
	}
})