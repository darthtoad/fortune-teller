$(document).ready(function(){
  $("#theForm").submit(function(event){
//    debugger;
    event.preventDefault();
    $("#output").empty();
    var activities = [];
    var food = [];
    var personality = [];
    $("input:checkbox[name=activities]:checked").each(function(){
      activities.push($(this).val());
    })
    $("input:checkbox[name=food]:checked").each(function(){
      food.push($(this).val());
    })
    $("input:checkbox[name=personality]:checked").each(function(){
      personality.push($(this).val());
    })
    if (activities.length > 3 && food.length > 3 && personality.length > 3) {
      $("#output").append("You will find true love and win a million dollars");
    } else if (activities.length > 3 && food.length > 3) {
      $("#output").append("You will be turned into a newt for a week, but you'll get better")
    } else if (activities.length > 3 && personality.length > 3) {
      $("#output").append("You will be visited by a mysterious stranger who will get you drunk")
    } else if (food.length > 3 && personality.length > 3) {
      $("#output").append("You will become a ninja")
    } else if (food.length > 3) {
      $("#output").append("You will eat a lot tonight")
    } else if (activities.length > 3) {
      $("#output").append("You will go on an adventure far away soon")
    } else if (personality.length > 3) {
      $("#output").append("You will die within five years")
    } else {
      $("#output").append("You will stay at home and do nothing this weekend")
    }
  })
})
