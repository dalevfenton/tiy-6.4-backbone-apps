var Backbone = require('backbone');

var template = require('../../templates/header.hbs');

var HeaderView = Backbone.View.extend({
  template: template,

  events: {
    "submit": "search"
  },
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html( this.template( ) );
    return this;
  },
  search: function(e){
    e.preventDefault();
    console.log('searched for: ', e.target[0].value );
  }
});

module.exports = HeaderView;
