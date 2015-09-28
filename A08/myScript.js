/**
 * Created by Michael on 9/28/2015.
 */

$(document).ready(function() {

  var $answers = $('#a1, #a2, #a3, #a4, #a5');
  $answers.hide();

  var bool1 = true;
  var bool2 = true;
  var bool3 = true;
  var bool4 = true;
  var bool5 = true;

  $("li:first-child").click(function () {
    if (bool1) {
      $("#a1").toggle();
      $("#q1").text('-');
      bool1 = false;
    }
    else {
      $("#a1").hide();
      $("#q1").text('+');
      bool1 = true;
    }
  });

  $("li:nth-child(2)").click(function () {
    $("#a2").toggle();

    if (bool2) {
      $("#q2").text('-');
      bool2 = false;
    }
    else {
      $("#q2").text('+');
      bool2 = true;
    }
  });

  $("li:nth-child(3)").click(function () {
    $("#a3").toggle();

    if (bool3) {
      $("#q3").text('-');
      bool3 = false;
    }
    else {
      $("#q3").text('+');
      bool3 = true;
    }
  });

  $("li:nth-child(4)").click(function () {
    $("#a4").toggle();

    if (bool4) {
      $("#q4").text('-');
      bool4 = false;
    }
    else {
      $("#q4").text('+');
      bool4 = true;
    }
  });

  $("li:nth-child(5)").click(function () {
    $("#a5").toggle();

    if (bool5) {
      $("#q5").text('-');
      bool5 = false;
    }
    else {
      $("#q5").text('+');
      bool5 = true;
    }

  });
}