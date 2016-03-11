var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var models = require('./models/models');

var URLForm = require('./views/urlform');
var bookmarks = new models.BookmarkCollection();
var form = new URLForm({ collection: bookmarks });

$('#new-url-form').html( form.render().el );
