var Backbone = require('backbone');
var template = require('../../templates/reader.hbs');

var ReaderView = Backbone.View.extend({
  template: template,
  initialize: function(){
    this.listenTo( this.collection, 'change:showInReader', this.reset );
  },
  reset: function(newModel){
    this.model.set({ showInReader: false });
    this.model = newModel;
    this.render();
  },
  render: function(){
    this.$el.html( this.template( this.model.toJSON() ));
    return this;
  }
});

module.exports = ReaderView;
