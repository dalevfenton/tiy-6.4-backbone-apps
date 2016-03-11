var $ = require('jquery');

var models = require('./models/models');
var SidebarView = require('./views/sidebar');
var ReaderView = require('./views/reader');

var posts = new models.PostCollection();
var sidebar = new SidebarView({ collection: posts });
var reader = new ReaderView({ collection: posts, model: new models.Post() });
$('#sidebar').html( sidebar.render().el );
$('#reader').html( reader.render().el );

$(function(){
  posts.fetch().done(function(){

  });
});
