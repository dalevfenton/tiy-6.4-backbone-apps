var Backbone = require('backbone');
var _ = require('underscore');

var template = require('../../templates/singlepost.hbs');
var editTemplate = require('../../templates/editpost.hbs');

var SinglePostView = Backbone.View.extend({
  template: template,
  events: {
    "click .edit-button": "edit",
    "click .delete-button": "delete",
    "click .cancel-edit-button": "cancelEdit",
    "click .do-edit-button": "doEdit"
  },
  initialize: function(){
    this.render();
  },
  edit: function(e){
    e.preventDefault();
    this.$el.html( editTemplate( this.model.toJSON() ));
  },
  delete: function(e){
    e.preventDefault();
    //we really should bring up a confirmation dialog before deleting
    this.model.destroy({wait: true});
    Backbone.history.navigate('', {trigger: true});
  },
  cancelEdit: function(e){
    e.preventDefault();
    this.render();
  },
  doEdit: function(e){
    e.preventDefault();
    var update = this.$el.find('form')
                        .serializeArray()
                        .reduce(function(memo, item){
                          memo[item.name] = item.value;
                          return memo;
                        }, {} );
    this.model.save( update );
    this.render();
  },
  render: function(){
    //we need to validate that we have a model that is in the collection and
    //that we haven't just ended up on a post that doesn't exist anymore or
    //never existed at all -- NOT IMPLEMENTED

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
