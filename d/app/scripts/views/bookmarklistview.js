var Backbone = require('backbone');

var BookmarkView = require('./bookmarkview');

var BookmarkListView = Backbone.View.extend({
  //we pass the existing dom element to this so no need to set
  //a tagName / id / or className
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderChild );
    this.render();
  },
  renderChild: function( model ){
    var childView = new BookmarkView({ model: model });
    this.$el.append( childView.render().el );
  },
  render: function(){
    this.$el.html('');
    return this;
  }
});

module.exports = BookmarkListView;
