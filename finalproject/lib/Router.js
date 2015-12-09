/**
 * Created by Michael on 12/9/2015.
 */
Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('main', {path:'/'});
  this.route('myPuns', {path:'/myPuns'});
  this.route('about', {path: '/about'});
});