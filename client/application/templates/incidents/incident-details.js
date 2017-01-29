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
  },
  username: function() {
    var username = Meteor.user().username;
    return username;
  }
});

Template.incidentDetails.events({

  'click .js-back': function(event) {
    event.preventDefault();
    FlowRouter.go('reports');
  },

  'click .js-edit': function(event) {
    event.preventDefault();
    var docId = FlowRouter.getParam('reportId');
    FlowRouter.go('/reports/'+docId+'/edit');
  },

  'click .js-file': function(event) {
    event.preventDefault();

  }
})
