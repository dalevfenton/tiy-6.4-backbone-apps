var Backbone = require('backbone');

var template = require('../../templates/index.hbs');

var IndexView = Backbone.View.extend({
  template: template,

  initialize: function(){
    this.render();
    // this.listenTo(this.collection, 'change', this.render );
  },
  render: function(){
    this.$el.html( this.template( this.collection.toJSON() ) );
    return this;
  }
});

module.exports = IndexView;
