Meteor.methods({
	'incidents.insert': function(reportAttributes) {
		// checking & validating
		check(this.userId, String);
		
		check(reportAttributes, {
			//number: Number,
			date: String,
			area: String,
			priority: String,
			desc: String,
			cause: String,
			impact: String,
			action: String,
			penalty: String
		});

		var num = Incidents.find().count() + 1;
		var report = _.extend(reportAttributes, {
			number: num
		});

		// inserting the date
		var reportId = Incidents.insert(report);

		return {
			_id: reportId
		}
	},


	'incidents.update': function() {


		//var incident = Incidents.findOne(_id);
		// if (! incident.createdBy(this.userId)) {
		// 	throw new Meteor.Error('incidents.insert.unauthorized', 
		// 		'Cannot insert report in a private list that is not yours');
		// }


	}
});