$(function() {
  $("form#lists").submit(function(event) {
    event.preventDefault();

    var name = $("input#new-list").val();
    var list = {name: name, tasks: []};

    $("ul#to-do-lists").append("<li><span class='active-list'>"+ list.name + "</span></li>");


    $("input#new-list").val("");

    $("#to-do-lists li").last().click(function() {
      $("#tasks").show()
      $("ul#these-tasks").empty()
      $("h2.this-list").text(list.name);
    });

    $("form#tasks").submit(function(event) {
      event.preventDefault();
      var task = $("input.new-task").val();
      list.tasks.push(task);

      list.tasks.forEach(function(task) {
        $("ul#these-tasks").append("<li>" + task + "</li>");
      });
    });
  });
});
