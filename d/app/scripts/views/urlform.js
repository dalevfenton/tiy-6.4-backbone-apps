var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var template = require('../../templates/urlform.hbs');

var URLForm = Backbone.View.extend({
  tagName: 'form',
  id: 'url-form-form',
  template: template,
  initialize: function(){
    this.render();
  },
  events: {
    "submit": "addBookmark"
  },
  addBookmark: function(e){
    e.preventDefault();
    console.log(this.$el.serializeArray() );
    var newMark = this.$el.serializeArray()
                    .reduce(function(memo, item){
                      memo[item.name] = item.value;
                      return memo;
                    }, {});
    console.log(newMark);
    this.collection.create( newMark );
    this.render();
  },
  render: function(){
    this.$el.html( this.template ( ) );
    return this;
  }
});

module.exports = URLForm;
