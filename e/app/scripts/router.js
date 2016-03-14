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
var SearchView = require('./views/search');
var NewPostView = require('./views/newpost');

//TEMPLATES - used only on static pages that don't need content
//            or events offered by Views
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
    this.header = new HeaderView({ collection: this.posts, router: this });
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
    //so other pages could check if user is logged in as well
    //as provide access to admin area
    console.log('should be login form');
  },
  singlePost: function(id){
    this.posts.fetch().done(function(){
      var post = new SinglePostView({ collection: this.posts, model: this.posts.get(id) });
      $('#app').html( post.el );
    }.bind(this));
  },
  newPost: function(){
    //form to write a new post
    var newpost = new NewPostView({ collection: this.posts });
    $('#app').html( newpost.el );
  },
  search: function(query){
    //search results view
    this.posts.fetch().done(function(){
      var search = new SearchView({ collection: this.posts, query: query });
      $('#app').html( search.el );
    }.bind(this));
    // console.log('searching for ', query);
  },
  fourOhFour: function( path ){
    //if we don't match a route then show a 404 page as that url
    //doesn't exist on our domain
    $('#app').html( fourOhFourTempl( {path: path} ) );
  }
});

//EXPORT ROUTER TO index.js
module.exports = new Router();
