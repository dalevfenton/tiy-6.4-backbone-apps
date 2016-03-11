var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var template = require('../../templates/taglist.hbs');
var TagListView = Backbone.View.extend({
  defaults: {
    tags: {}
  },
  events: {
    "click .tags-input": "submitForm",
    "submit": "setFiltered"
  },
  template: template,
  initialize: function(){
    this.listenTo(this.collection, 'add', this.getTags );
    this.render();
  },
  getTags: function(model){
    var tags = _.uniq( model.get('url_tags') );
    var tagsObj = tags.reduce(function(memo, tag){
      memo[tag] = false;
      return memo;
    }, {} );
    this.tags = $.extend({}, tagsObj, this.tags );
    this.render();
  },
  submitForm: function(e){
    $("#tags-form").trigger('submit');
  },
  setFiltered: function(e){
    e.preventDefault();
    var filterVals = this.$el.find(':input')
                        .serializeArray()
                        .reduce(function(memo, tag){
                          memo.push( tag.value );
                          return memo;
                        }, [] );
    if( !_.isEmpty(filterVals)){
      this.collection.each(function(model){
        if( _.isEmpty(_.difference( filterVals, model.get('url_tags'))) ){
          model.set({ 'filtered': false });
        }else{
          model.set({ 'filtered': true});
        }
      });
    }else{
      this.collection.each(function(model){
          model.set({ 'filtered': false});
      });
    }
  },
  render: function(){
    this.$el.html( this.template( _.omit(this.tags, "") ));
    return this;
  }
});

module.exports = TagListView;
