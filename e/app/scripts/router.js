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
    "posts/:id": "singlePost",
    '*path':  'fourOhFour'
  },
  initialize: function(){
    this.posts = new models.PostCollection();
    this.header = new HeaderView({ collection: this.posts });
  },
  index: function(){
    $('#header').html( this.header.el );
    this.posts.fetch().done(function(){

      console.log(this.posts);
    }.bind(this));
  },
  singlePost: function(id){
    console.log('singlePost triggered');
  },
  fourOhFour: function(){
    console.log('nothing found at this address... Sorry!');
  }
});

module.exports = new Router();
