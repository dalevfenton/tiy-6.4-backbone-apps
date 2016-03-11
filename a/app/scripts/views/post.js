var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Handlebars = require('handlebars');

var template = require('../../templates/postform.hbs');

var PostView = Backbone.View.extend({
  tagName: "form",
  id: "new-blog-form",
  template: template,

  events: {
    "submit": "addPost"
  },

  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(template( {url: this.collection.url} ));
    return this;
  },
  addPost: function(event){
    event.preventDefault();
    var formResult = this.$el.serializeArray().reduce(function(memo, obj){
      memo[obj.name] = obj.value;
      return memo;
    }, {});
    this.collection.create(formResult);
    this.render();
  }
});

module.exports = PostView;
