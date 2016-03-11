var Backbone = require('backbone');

var template = require('../../templates/postlistitem.hbs');

var PostListItemView = Backbone.View.extend({
    template: template,
    events: {
      "click": "setDisplay"
    },
    setDisplay: function(){
      this.model.set({ showInReader: true });
      console.log(this.model);
    },
    initialize: function(){
    },
    render: function(){
      this.$el.html( this.template( this.model.toJSON() ));
      return this;
    }
});

module.exports = PostListItemView;
