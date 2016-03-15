$(document).ready(function(){
  var movieCollection = new MovieCollection(data.movies);
  new ListView({collection: movieCollection});
  var addFormContent = new FormView({collection: movieCollection});
  $('button[name="add"]').on('click', function(){
    $('section.addForm').toggleClass('hide');
  })
});
