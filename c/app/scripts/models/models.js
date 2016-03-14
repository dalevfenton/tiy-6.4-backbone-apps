var Backbone = require('backbone');
var _ = require('underscore');

var Post = Backbone.Model.extend({
  toJSON: function(){
    return _.extend({}, _.omit(this.attributes, '_id'), {id: this.id});
  },
  idAttribute: '_id'
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/daleposts'
});

module.exports = {
  Post: Post,
  PostCollection: PostCollection
};
