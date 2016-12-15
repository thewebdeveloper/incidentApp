// Meteor.startup(function(){
//   if (!Incidents.findOne()) {
//
//     console.log("No Incident Report Found, Creating Incidents In-Progress...");
//
//     Incidents.insert({
//       number: 1,
//       date: new Date(),
//       area: "In Production",
//       priority: "Low",
//       desc: "This is the first incident report, we are just adding some demo text",
//       cause: "This is the first CAUSE, we are just adding some demo text.",
//       impact: "This is the first IMPACT",
//       action: "none",
//       penalty: "none"
//     });
//
//     Incidents.insert({
//       number: 2,
//       date: new Date(),
//       area: "In Prepress",
//       priority: "High",
//       desc: "This is the SECOND incident report, we are just adding some demo text",
//       cause: "This is the SECOND CAUSE, we are just adding some demo text.",
//       impact: "This is the SECOND IMPACT",
//       action: "Final warning was given to the staff",
//       penalty: "AED 5000"
//     });
//
//     console.log("Two Records were created Successfully!");
//
//
//   }
// });
