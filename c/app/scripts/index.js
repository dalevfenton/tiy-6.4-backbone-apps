var $ = require('jquery');

var models = require('./models/models');
var SidebarView = require('./views/sidebar');

var posts = new models.PostCollection();
var sidebar = new SidebarView({ collection: posts });
$('#sidebar').html( sidebar.render().el );

$(function(){
  posts.fetch().done(function(){

  });
});
