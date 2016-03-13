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
    console.log('new post triggered');
  },
  search: function(query){
    console.log('searching for ', query);
  },
  fourOhFour: function(){
    console.log('nothing found at this address... Sorry!');
  }
});

module.exports = new Router();
