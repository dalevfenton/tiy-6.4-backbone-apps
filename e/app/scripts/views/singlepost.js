var Backbone = require('backbone');
var _ = require('underscore');

var template = require('../../templates/singlepost.hbs');

var SinglePostView = Backbone.View.extend({
  template: template,

  initialize: function(){
    this.render();
  },
  render: function(){
    //get ids to include in links for next and previous posts
    var navs = {};
    var index = this.collection.indexOf( this.model );
    if( index > 0 ){
      navs.next = this.collection.at( index - 1 ).get('_id');
    }
    if( index < this.collection.length - 2 ){
      navs.prev = this.collection.at( index + 1 ).get('_id');
    }
    this.$el.html( this.template( _.extend( {}, this.model.toJSON(), navs ) ) );
    return this;
  }
});

module.exports = SinglePostView;
