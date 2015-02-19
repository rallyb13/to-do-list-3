// var List = {name: "", tasks:[]};


$(function() {
  var currentList = {name: "", task: []}
  // var currentList = Object.create(List);

  $("form#lists").submit(function(event) {
    event.preventDefault();

    var name = $("input#new-list").val();
    var newList = {name: name, tasks: []}

    $("ul#to-do-lists").append("<li><span class='active-list'>"+ newList.name + "</span></li>");

    $("input#new-list").val("");

    $(".active-list").last().click(function() {
      $("#tasks").show();
      $("h2.this-list").text(newList.name);
      $("ul#these-tasks").empty();
      newList.tasks.forEach(function(task) {
        $("ul#these-tasks").append("<li>" + task + "</li>");
      });
      currentList = newList;
    });
  });

  $("form#tasks").submit(function(event) {
    event.preventDefault();
    var task = $("input.new-task").val();
    currentList.tasks.push(task);
    $("ul#these-tasks").empty();
    currentList.tasks.forEach(function(task) {
      $("ul#these-tasks").append("<li>" + task + "</li>");
    $("input.new-task").val("");
    });
  });
});
