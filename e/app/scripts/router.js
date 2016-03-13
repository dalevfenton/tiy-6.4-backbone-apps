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


var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "login": "login",
    "posts/:id": "singlePost",
    'search/:query': 'search',
    '*path':  'fourOhFour'
  },
  initialize: function(){
    this.posts = new models.PostCollection();
    this.header = new HeaderView({ collection: this.posts });
    $('#header').html( this.header.el );
  },
  index: function(){
    this.posts.fetch().done(function(){

      console.log(this.posts);
    }.bind(this));
  },
  login: function(){
    console.log('should be login form');
  },
  singlePost: function(id){
    console.log('singlePost triggered');
  },
  search: function(query){
    console.log('searching for ', query);
  },
  fourOhFour: function(){
    console.log('nothing found at this address... Sorry!');
  }
});

module.exports = new Router();
