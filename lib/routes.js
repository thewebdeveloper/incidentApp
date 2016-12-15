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

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/reports', {
  name: 'reports',
  action: function() {
    BlazeLayout.render('layout', {main: 'incidentsList'});
  }
});

FlowRouter.route('/reports/:reportId', {
  name: 'reportId',
  action: function(params, queryParams) {
    //console.log(params.reportId);
    BlazeLayout.render("layout", {main: "incidentDetails"});
  }
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
    BlazeLayout.render('layout', {main: 'createForm'});
  }
});
