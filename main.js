var backboneMovie = {
  init: function(){
    backboneMovie.presentation();
    backboneMovie.events();
  },
  config: {
    movieCollection: new MovieCollection(data.movies)
  },
  presentation: function(){
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.container');
  },
  events: function(){},
  getTmpl: function(tmplName){
    return templates[tmplName];
  },
  buildTmpl: function(tmplName, data){
    var tmpl = _.template(backboneMovie.getTmpl(tmplName));
    return tmpl(data);
  },
  buildMovie: function(tmplName, data){
    data.attributes.id = data.cid;
    var output = backboneMovie.buildTmpl(tmplName, data);
    return output;
  },
  addMoviesToDom: function(arr, target){
    var output = "";
    arr.forEach(function(el){
      output += backboneMovie.buildMovie('movie', el);
    });
    $(target).html(output);
  },
  addMovie: function(data){
    backboneMovie.config.movieCollection.add(data);
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.container');
  },
  deleteMovie: function(id){
    backboneMovie.config.movieCollection.remove(id);
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.container');
  },
  editMovie: function(id, data){
    var edit = backboneMovie.getMovie(id);
    edit.set(data);
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.container');
  },
  getMovie: function(id){
    return backboneMovie.config.movieCollection.get(id);
  }
}

$(document).ready(function(){
  backboneMovie.init();
});
