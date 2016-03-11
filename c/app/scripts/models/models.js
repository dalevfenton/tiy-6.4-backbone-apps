var Backbone = require('backbone');

var Post = Backbone.Model.extend({

});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/daleposts'
});

module.exports = {
  Post: Post,
  PostCollection: PostCollection
};
