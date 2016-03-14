var backboneMovie = {
  init: function(){
    backboneMovie.presentation();
    backboneMovie.events();
  },
  config: {
    movieCollection: new MovieCollection(data.movies)
  },
  presentation: function(){
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.movieContainer');
  },
  events: function(){
    $('button[name="add"]').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      backboneMovie.displayAddForm();
    });
    $('button[name="addMovie"]').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      backboneMovie.addMovieFromDom(event);
    });
    $('.movieContainer').on('click', 'button[name="delete"]', function(event) {
      event.preventDefault();
      event.stopPropagation();
      backboneMovie.deleteMovieFromDom(event);
    });
    $('.movieContainer').on('click', 'button[name="edit"]', function(event) {
      event.preventDefault();
      event.stopPropagation();
      backboneMovie.displayEditForm(event);
    });
    $('.movieContainer').on('click', 'button[name="editMovie"]', function(event) {
      event.preventDefault();
      event.stopPropagation();
      backboneMovie.submitEdit(event);
    });
  },
  displayAddForm: function(event){
    $selector = $('.addForm');
    window.glob = $selector;
    if($selector.hasClass('hide')){
      $selector.removeClass('hide');
    };
  },
  addMovieFromDom: function(event){
    var movieItem = $(event.target);
    var $parent = movieItem.parent();
    var addObj = {
      title: $parent.children('input[name="title"]').val(),
      desc: $parent.children('input[name="desc"]').val(),
      MPAA: $parent.children('input[name="MPAA"]').val(),
      poster: $parent.children('input[name="poster"]').val()
    };
    backboneMovie.addMovie(addObj);
  },
  deleteMovieFromDom: function(event){
    var movieItem = $(event.target);
    var id = movieItem.closest('div.movieItem').data('id');
    backboneMovie.deleteMovie(id);
  },
  displayEditForm: function(event){
    var movieItem = $(event.target);
    var $parent = movieItem.closest('div.movieItem');
    var editObj = {
      id: $parent.data('id'),
      title: $parent.children('h2').text(),
      desc: $parent.children('p').text(),
      MPAA: $parent.children('span').text(),
      poster: $parent.children('img').attr('src')
    };
    $parent.replaceWith(backboneMovie.buildItem('form', editObj));
  },
  submitEdit: function(event){
    var movieItem = $(event.target);
    var $parent = movieItem.closest('div.editForm');
    var id = $parent.data('id');
    var editObj = {
      title: $parent.children('input[name="title"]').val(),
      desc: $parent.children('input[name="desc"]').val(),
      MPAA: $parent.children('input[name="MPAA"]').val(),
      poster: $parent.children('input[name="poster"]').val()
    };
    backboneMovie.editMovie(id, editObj);
  },
  getTmpl: function(tmplName){
    return templates[tmplName];
  },
  buildTmpl: function(tmplName, data){
    var tmpl = _.template(backboneMovie.getTmpl(tmplName));
    return tmpl(data);
  },
  buildItem: function(tmplName, data){
    if(data.cid){
      data.attributes.id = data.cid;
    }
    var output = backboneMovie.buildTmpl(tmplName, data);
    return output;
  },
  addMoviesToDom: function(arr, target){
    var output = "";
    arr.forEach(function(el){
      output += backboneMovie.buildItem('movie', el);
    });
    $(target).html(output);
  },
  addMovie: function(data){
    backboneMovie.config.movieCollection.add(data);
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.movieContainer');
  },
  deleteMovie: function(id){
    backboneMovie.config.movieCollection.remove(id);
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.movieContainer');
  },
  editMovie: function(id, data){
    var edit = backboneMovie.getMovie(id);
    edit.set(data);
    backboneMovie.addMoviesToDom(backboneMovie.config.movieCollection.models, '.movieContainer');
  },
  getMovie: function(id){
    return backboneMovie.config.movieCollection.get(id);
  }
}

$(document).ready(function(){
  backboneMovie.init();
});
