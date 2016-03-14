var Backbone = require('backbone');
var $ = require('jquery');

var template = require('../../templates/newpost.hbs');

var NewPostView = Backbone.View.extend({
  tagName: 'form',
  className: 'post-form',
  template: template,
  events: {
    "submit": "submit"
  },

  initialize: function(){
    this.listenTo(this.collection, 'add', this.postAdded );
    this.render();
  },
  submit: function(e){
    e.preventDefault();
    var atts = this.$el.serializeArray()
                        .reduce( function(memo, att){
                          memo[att.name] = att.value;
                          return memo;
                        }, {} );
    var newpost = this.collection.create( atts , { wait: true });
  },
  postAdded: function(model){
    Backbone.history.navigate('posts/' + model.id, {trigger: true});
  },
  render: function(){
    this.$el.html( this.template() );
    return this;
  }
});

module.exports = NewPostView;
