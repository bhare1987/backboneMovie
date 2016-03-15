var templates = {
  movie: [
      "<h2><%=title%><span>(<%=year%>)</span> <span><%=MPAA%></span></h2>",
      "<img src='<%=poster%>'/>",
      "<p><%=desc%></p>",
      "<section class='buttons'>",
        "<button name='delete'>Delete</button>",
        "<button name='edit'>Edit</button>",
      "</section>",
      "<div class='editForm'>",
      "</div>"
  ].join(''),
  form: [
    '<form>',
      '<label for="title">Title</label>',
      '<input type="text" name="title" placeholder="Title" value="<%=title%>">',
      '<label for="desc">Description</label>',
      '<textarea type="text" name="desc" placeholder="Description" rows="10" cols="50"><%=desc%></textarea>',
      '<label for="MPAA">MPAA Rating</label>',
      '<input type="text" name="MPAA" placeholder="MPAA Rating" value="<%=MPAA%>">',
      '<label for="poster">Movie Poster URL</label>',
      '<input type="text" name="poster" placeholder="Movie Poster" value="<%=poster%>">',
      '<label for="year">Year</label>',
      '<input type="text" name="year" placeholder="Year" value="<%=year%>">',
      '<button name="submitForm">Submit</button>',
    '</form>'
  ].join('')

}
