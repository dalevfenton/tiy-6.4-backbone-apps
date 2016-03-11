//        THIRD PARTY LIBS
//------------------------------------------------------------------------------
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

//        BACKBONE MODELS AND VIEWS
//------------------------------------------------------------------------------
var models = require('./models/post');
var PostView = require('./views/post');
var PostList = require('./views/showposts.js');

//        INSTANTIATE BACKBONE INSTANCES
//------------------------------------------------------------------------------
var postCollection = new models.PostCollection();
var postView = new PostView({ collection: postCollection });
var postList = new PostList({ collection: postCollection });

//        RUN THE APP
//------------------------------------------------------------------------------
$(function(){
  $('#post-form-holder').html( postView.render().el );
  postCollection.fetch().done(function(){
    $('#existing-post-holder').html( postList.render().el );
  });
});
