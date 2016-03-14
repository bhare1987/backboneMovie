var templates = {
  movie: [
    "<div class='movieItem' data-id='<%=attributes.id%>'>",
      "<h2><%=attributes.title%><span><%=attributes.year%></span> <span><%=attributes.MPAA%></span></h2>",
      "<img src='<%=attributes.poster%>'/>",
      "<p><%=attributes.desc%></p>",
      "<section class='buttons'>",
        "<button name='delete'>Delete</button>",
        "<button name='edit'>Edit</button>",
      "</section>",
    "</div>"
  ].join(''),
  form: [
    '<div class="editForm" data-id="<%=id%>">',
      '<input type="text" name="title" placeholder="Title" value="<%=title%>">',
      '<input type="text" name="desc" placeholder="Description" value="<%=desc%>">',
      '<input type="text" name="MPAA" placeholder="MPAA Rating" value="<%=MPAA%>">',
      '<input type="text" name="poster" placeholder="Movie Poster" value="<%=poster%>">',
      '<input type="text" name="year" placeholder="Year" value="<%=year%>">',
      '<button name="editMovie">Submit</button>',
    '</div>'
  ].join('')

}
