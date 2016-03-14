var Backbone = require('backbone');

var template = require('../../templates/bookmark.hbs');

var BookmarkView = Backbone.View.extend({
  className: "bookmark-item",
  template: template,
  initialize: function(){
    this.listenTo(this.model, "change:filtered", this.filter);
    this.render();
  },
  filter: function(){
    console.log('filter triggered');
    if( this.model.get('filtered') ){
      this.hide();
    }else{
      this.render();
    }
  },
  hide: function(){
    this.$el.addClass('hidden');
    return this;
  },
  render: function(){
    this.$el.removeClass('hidden');
    this.$el.html( template( this.model.toJSON() ));
    return this;
  }
});

module.exports = BookmarkView;
