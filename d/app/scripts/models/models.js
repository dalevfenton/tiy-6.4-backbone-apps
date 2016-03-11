var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Bookmark = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    'url_address': '',
    'url_tags': '',
    'url_title': ''
  },
  initialize: function(){
    var tags = _.uniq( this.get('url_tags').split(',') );
    tags = tags.map( function(tag){
      if(tag.slice(0,1) === ' '){ tag = tag.slice(1); }
      return tag;
    });
    this.set({'url_tags' : tags});
  }
});

var BookmarkCollection = Backbone.Collection.extend({
  model: Bookmark,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/dalebookmarks'
});

module.exports = {
  Bookmark: Bookmark,
  BookmarkCollection: BookmarkCollection
};
