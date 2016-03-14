var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Handlebars = require('handlebars');

var template = require('../../templates/postlist.hbs');

var PostList = Backbone.View.extend({
  id: "posts-list",
  template: template,

  events: {
  },

  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'change', this.render );
  },
  render: function(){
    this.$el.html( template ( this.collection.toJSON() ));
    return this;
  }
});

module.exports = PostList;
