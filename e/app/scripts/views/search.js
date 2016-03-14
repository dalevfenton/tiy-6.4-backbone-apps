var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var template = require('../../templates/search.hbs');

var SearchView = Backbone.View.extend({
  template: template,
  id: "search-view",
  className: "",
  events: {
    "submit #search-search-form": "reSearch"
  },
  initialize: function(options){
    this.query = options.query;
    this.render();
  },
  reSearch: function(e){
    e.preventDefault();
    this.query = e.currentTarget[0].value;
    this.render();
  },
  render: function(){
    //set the query
    var query = this.query;
    //filter out matching posts
    var matches = this.collection.filter(function(model) {
      //loop over all attributes of the post and check if the query string
      //is present in any of them
      var atts = _.omit( model.attributes, "_id");
      var match = false;
      $.each( atts, function(att){
        if(model.get(att).toLowerCase().indexOf(query.toLowerCase()) > -1 ){
          match = true;
        }
      });
      return match;
    });
    //get the JSON object of the matching posts
    matches = matches.map(function(match){
      return match.toJSON();
    });

    //if we have matches send them to the template, otherwise just the query string
    if( matches.length ){
      this.$el.html( this.template( { results: matches, query: this.query, numResults: matches.length } ) );
    }else{
      this.$el.html( this.template( {  query: this.query } ) );
    }
    return this;
  }
});

module.exports = SearchView;
