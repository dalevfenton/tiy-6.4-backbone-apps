var Backbone = require('backbone');
var Handlebars = require('handlebars');

var template = require('../../templates/sidebar.hbs');

var SidebarView = Backbone.View.extend({
  id: 'sidebarview',
  template: template,
  events: {
    "this.collection change": "render",
    "this.collection add": "render"
  },
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html( this.template( this.collection.toJSON() ) );
    return this;
  }
});

module.exports = SidebarView;
