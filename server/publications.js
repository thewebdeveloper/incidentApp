Meteor.publish('allIncidents', function () {
	if(this.userId) {
		return Incidents.find({});
	}
});

Meteor.publish('singleIncident', function (reportId) {
	if (this.userId) {
		return Incidents.find({ _id: reportId });
	}
});
