var templates = {
  movie: [
    "<div class='movieItem' data-id='<%=attributes.id%>'>",
      "<h2><%=attributes.title%></h2>",
      "<span><%=attributes.MPAA%></span>",
      "<img src='<%=attributes.poster%>'/>",
      "<p><%=attributes.desc%></p>",
      "<section class='buttons'>",
        "<button name='delete'>Delete</button>",
        "<button name='edit'>Edit</button>",
      "</section",
    "</div>"
  ].join('')

}
