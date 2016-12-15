Accounts.onLogin(function(){
   FlowRouter.go('reports');
});

Accounts.onLogout(function() {
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect){
            if(!Meteor.userId()){
                FlowRouter.go('home')
            }
        }]);


// Routes for 'Visitors'
FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('home');
  }
});

// Routes for 'Registered Users'
FlowRouter.route('/reports', {
  subscriptions: function (params, queryParams) {
    this.register('reports', Meteor.subscribe('allIncidents'));
  },
  action: function() {
    BlazeLayout.render('layout', {main: 'incidentsList'});
  },
  name: 'reports'
});

FlowRouter.route('/reports/:reportId', {
  subscriptions: function (params, queryParams) {
    this.register('report', Meteor.subscribe('singleIncident', params.reportId));
  },
  action: function(params, queryParams) {
    //console.log(params.reportId);
    BlazeLayout.render("layout", {main: "incidentDetails"});
  },
  name: 'reportId'
});

FlowRouter.route('/create', {
  name: 'create',
  action: function() {
    BlazeLayout.render('layout', {main: 'createForm'});
  }
});

FlowRouter.route('/edit', {
  name: 'edit',
  action: function() {
    BlazeLayout.render('layout', {main: 'editForm'});
  }
});
