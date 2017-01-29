Template.editForm.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var reportId = FlowRouter.getParam('reportId');
    self.subscribe('singleIncident', reportId);
  });
});


Template.editForm.helpers({
	incident: function() {
	    var reportId = FlowRouter.getParam('reportId');
	    var incident = Incidents.findOne({_id: reportId}) || {};
	    return incident;
	}
});

Template.editForm.events({
	'click .update-button': function(event) {
		event.preventDefault();
		var reportId = FlowRouter.getParam('reportId');
		Bert.alert({
			message: 'Your Report has been updated successfully',
			type: 'success',
			style: 'growl-top-right',
			icon: 'fa-check'
		});
		setTimeout(function() {
			FlowRouter.go('/reports/'+reportId);
		}, 3000);
	}
});