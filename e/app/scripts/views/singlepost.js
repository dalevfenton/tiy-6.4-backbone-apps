var Backbone = require('backbone');

var template = require('../../templates/singlepost.hbs');

var SinglePostView = Backbone.View.extend({
  template: template,

  initialize: function(){
    this.render();
  },
  render: function(){

    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  }
});

module.exports = SinglePostView;
