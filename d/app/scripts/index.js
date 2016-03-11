var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var models = require('./models/models');

var URLForm = require('./views/urlform');
var BookmarkListView = require('./views/bookmarklistview');
var TagListView = require('./views/taglist');

var bookmarks = new models.BookmarkCollection();

var form = new URLForm({ collection: bookmarks });
var bookmarkList = new BookmarkListView({ collection: bookmarks, el: $('#bookmark-list') });
var tagList = new TagListView({ collection: bookmarks, el: $('#tag-list')});

$('#new-url-form').html( form.render().el );


$(function(){
  bookmarks.fetch().done(function(){

  });
});
