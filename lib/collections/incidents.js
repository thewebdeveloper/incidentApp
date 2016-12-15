Incidents = new Mongo.Collection('incidents');

IncidentSchema = new SimpleSchema({
  number: {
    type: Number,
    label: "Report Number"
  },
  date: {
    type: Date,
    label: "Report Date"
  },
  area: {
    type: String,
    label: "Areas of Incident"
  },
  priority: {
    type: String,
    label: "Incident Priority",
    allowedValues: ["Low", "Medium", "High"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select 'High', 'Medium', or 'Low' from the List)"
      }
    }
  },
  desc: {
    type: String,
    label: "Incident Description"
  },
  cause: {
    type: String,
    label: "Root Cause"
  },
  impact: {
    type: String,
    label: "Incident Impact / Financial Impact"
  },
  action: {
    type: String,
    label: "Suggested Corrective & Preventive Actions"
  },
  penalty: {
    type: String,
    label: "Punishments / Penalties (if required)"
  },
  // This is for user-level
  createdBy: {
    type: String,
    label: "User",
    autoValue: function(){
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Incidents.attachSchema( IncidentSchema );
