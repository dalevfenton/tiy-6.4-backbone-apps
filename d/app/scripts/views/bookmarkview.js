var Backbone = require('backbone');

var template = require('../../templates/bookmark.hbs');

var BookmarkView = Backbone.View.extend({
  className: "bookmark-item",
  template: template,
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html( template( this.model.toJSON() ));
    return this;
  }
});

module.exports = BookmarkView;
