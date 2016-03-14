var Backbone = require('backbone');

var Person = Backbone.Model.extend({
  idAttribute: '_id'
});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/dalepeople'
});

module.exports = {
  Person: Person,
  PersonCollection: PersonCollection
};
