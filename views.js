var FormView = Backbone.View.extend({
  collection: null,
  model: null,
  el: 'section.addForm.hide',
  template: _.template(templates.form),
  events: {
    'click button[name="submitForm"]': 'submitAdd'
  },
  submitAdd: function(event){
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      MPAA: this.$el.find('input[name="MPAA"]').val(),
      year: this.$el.find('input[name="year"]').val(),
      desc: this.$el.find('textarea[name="desc"]').val(),
      poster: this.$el.find('input[name="poster"]').val()
    });
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    this.collection.add(this.model);
    $('.addForm').addClass('hide');
    this.model = new MovieModel({});
  },
  initialize: function(){
    this.model = new MovieModel({});
    this.$el.append(this.render().el);
  },
  render: function(){
    var output = this.template({
      title: "",
      desc: "",
      MPAA: "",
      poster: "",
      year: ""
    });
    this.$el.html(output);
    return this;
  }
});

var MovieView = Backbone.View.extend({
  model: null,
  tagName: "div",
  className: "movieItem",
  template: _.template(templates.movie),
  events: {
    'click button[name="delete"]': 'deleteMovie',
    'click button[name="edit"]': 'editMovie',
    'click button[name="submitForm"]': 'submitEdit'
  },
  deleteMovie: function(){
    this.model.destroy();
  },
  editMovie: function(event){
    event.preventDefault();
    var formTmpl = _.template(templates.form);
    var output = formTmpl(this.model.toJSON());
    this.$el.find('.editForm').html(output);
  },
  submitEdit: function(event){
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      MPAA: this.$el.find('input[name="MPAA"]').val(),
      year: this.$el.find('input[name="year"]').val(),
      desc: this.$el.find('textarea[name="desc"]').val(),
      poster: this.$el.find('input[name="poster"]').val()
    });
    if(!this.model.hasChanged()){
      this.$el.find('.editForm').html('');
    };
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    var output = this.template(this.model.toJSON());
    this.$el.html(output);
    return this;
  }
});

var ListView = Backbone.View.extend({
  collection: null,
  el: '.movieContainer',
  initialize: function(){
    this.addMoviesToDom();
    this.listenTo(this.collection, 'update', this.addMoviesToDom);
  },
  addOneMovie: function(data){
    var modelView = new MovieView({model: data});
    this.$el.append(modelView.render().el);
  },
  addMoviesToDom: function(){
    $('.movieContainer').html('');
    _.each(this.collection.models, this.addOneMovie, this);
  }

});
