Template.createForm.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('allIncidents');
  });
});


Template.createForm.helpers({
  setNumber: function() {
    var num = Incidents.find().count() + 1;
    return num;
  }
});


Template.createForm.events({

  "submit form": function(e){
    e.preventDefault();

    var priority;
    var date = moment(e.target[0].value).format('DD-MMM-YYYY');

    if(e.target[2].checked === true) {
    	priority = "Low";
    } else if (e.target[3].checked === true) {
    	priority = "Medium";
    } else if (e.target[4].checked === true) {
    	priority = "High";
    }

    var report = {
        date    : date,
        area    : e.target[1].value,
        desc    : e.target[5].value,
        cause   : e.target[6].value,
        impact  : e.target[7].value,
        action  : e.target[8].value,
        penalty : e.target[9].value,
        priority : priority
    };

    Meteor.call('incidents.insert', report, function(error, result) {
    	if(error) 
    		return alert(error.reason);
    	
    	var reportId = result._id;
    	FlowRouter.go('/reports/'+reportId);
   
    });
  },
  
  "click .js-reset-btn": function(e) {
    e.preventDefault();
    var reset = confirm("Are you sure you want to Reset the form? Doing so will erase all the data you have entered!");
    if (reset) {
        document.getElementById("incident-form").reset();
    }
  }
});
