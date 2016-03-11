var Backbone = require('backbone');

var TagListView = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.collection, 'add', this.showTag );
    this.render();
  },
  showTag: function(){
    var tags = this.collection;
    console.log('inside showTag');
    console.log(tags);
  },
  render: function(){
    this.$el.html('');
    return this;
  }
});

module.exports = TagListView;
