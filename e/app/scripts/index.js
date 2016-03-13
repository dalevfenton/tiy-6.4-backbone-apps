var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var router = require('./router');
var models = require('./models/models');

var posts = new models.PostCollection();

// $(function(){
//   posts.fetch().done(function(){
//     console.log(posts);
//   });
// });


$(function(){
  Backbone.history.start();
});
