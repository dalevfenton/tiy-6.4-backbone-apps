var Backbone = require('backbone');

var template = require('../../templates/postlistitem.hbs');

var PostListItemView = Backbone.View.extend({
    template: template,
    initialize: function(){
    },
    render: function(){
      this.$el.html( this.template( this.model.toJSON() ));
      return this;
    }
});

module.exports = PostListItemView;
