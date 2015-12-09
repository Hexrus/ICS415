/**
 * Created by Michael on 12/5/2015.
 */
/**Router.route('/', {
  name: 'home'
});

Router.route('/scheduler', {
  name: 'scheduler'
});*/

Router.configure({
  layoutTemplate: 'Layout'
});

Router.map(function() {
  this.route('home', {path:'/'});
  this.route('scheduler', {path:'/scheduler'});
  this.route('weeklyScheduler', {path:'/weeklyScheduler'});
});