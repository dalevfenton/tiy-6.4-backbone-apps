var Backbone = require('backbone');
var Handlebars = require('handlebars');
var $ = require('jquery');

var PostListItemView = require('./postlistitem');
var template = require('../../templates/sidebar.hbs');

var SidebarView = Backbone.View.extend({
  id: 'sidebarview',
  template: template,
  events: {
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderChild );
    this.render();
  },
  renderChild: function( model ){
    var post = new PostListItemView({ model: model });
    this.$el.find('ul').append( post.render().el );
  },
  render: function(){
    this.$el.html( template( ) );
    return this;
  }
});

module.exports = SidebarView;
