Template.incidentsList.helpers({
  incidents: function() {
    return Incidents.find();
  },
  incident: function() {
    return Incidents.find( {
      "_id": this._id} );
  }
});
