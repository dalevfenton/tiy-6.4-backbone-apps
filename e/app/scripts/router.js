// 3RD PARTY LIBS
var Backbone = require('backbone');
var $ = require('jquery');

//==============================================================================
//                            MODELS AND VIEWS
//==============================================================================

//MODELS
var models = require('./models/models');

//VIEWS
var HeaderView = require('./views/header');
var IndexView = require('./views/index');
var SinglePostView = require('./views/singlepost');

//TEMPLATES
var fourOhFourTempl = require('../templates/fourOhFour.hbs');
//==============================================================================
//                            ROUTER
//==============================================================================

//ROUTER SETUP
var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "login": "login",
    "posts/:id": "singlePost",
    'search/:query': 'search',
    "new-post": 'newPost',
    '*path':  'fourOhFour'
  },
  initialize: function(){
    this.posts = new models.PostCollection();
    this.header = new HeaderView({ collection: this.posts });
    $('#header').html( this.header.el );
  },
  index: function(){
    this.posts.fetch().done(function(){
      var index = new IndexView({ collection: this.posts });
      $('#app').html( index.el );
    }.bind(this));
  },
  login: function(){
    //not implemented, would do user auth and setup a session
    //so other pages could check if user is loggedin
    console.log('should be login form');
  },
  singlePost: function(id){
    this.posts.fetch().done(function(){
      console.log(this.posts.get(id));
      var post = new SinglePostView({ collection: this.posts, model: this.posts.get(id) });
      $('#app').html( post.el );
    }.bind(this));
  },
  newPost: function(){
    //form to write a new post
    console.log('new post triggered');
  },
  search: function(query){
    //search results view
    console.log('searching for ', query);
  },
  fourOhFour: function( path ){
    //if we don't match a route then show a 404 page as that url
    //doesn't exist on our domain
    $('#app').html( fourOhFourTempl({path: path}) );
  }
});

//EXPORT ROUTER TO index.js
module.exports = new Router();
