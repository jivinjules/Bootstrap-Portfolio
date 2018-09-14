$(document).ready(function () {
  $("#intro-box").hide();
  $("#train-info").hide();
  $("#hangman-info").hide();
  $("#wfddfw-info").hide();
  $("#crystal-info").hide();
  $("#giphy-info").hide();
  $("#trivia-info").hide();
  $("#liri-info").hide();
  $("#bamazon-info").hide();
  $("#friend-finder-info").hide();

  //Adding moment.js to get clock at the top of the screen
  var currentTime = moment();

  //displays current time on the jumbotron
  $('#clock').html(moment(currentTime).format('MMMM D, YYYY LT'));

  function update() {
    $('#clock').html(moment().format('MMMM D, YYYY LT'));
  }
  setInterval(update, 60000);

  //Allows the user to see the intro box when they press "Meet Julie"
  $("#intro3").on("click", function () {
    $(".front-picture").hide();
    $("#intro-box").fadeIn();
  })


  //Updates the portfolio page. 
  //When the user clicks the "learn more about..." area, it reveals an info div
  //When they press the return button, the div is hidden and goes back to the carousel
  $(".text1").on("click", function () {
    $(".slideshow-container").hide();
    $("#train-info").fadeIn();
    $("#return-btn1").on("click", function () {
      $("#train-info").hide();
      $(".slideshow-container").fadeIn();
    });

  });

  $(".text2").on("click", function () {
    $(".slideshow-container").hide();
    $("#hangman-info").fadeIn();
    $("#return-btn2").on("click", function () {
      $("#hangman-info").hide();
      $(".slideshow-container").fadeIn();
    })

  });

  $(".text3").on("click", function () {
    $(".slideshow-container").hide();
    $("#wfddfw-info").fadeIn();
    $("#return-btn3").on("click", function () {
      $("#wfddfw-info").hide();
      $(".slideshow-container").fadeIn();

    });

  });

  $(".text4").on("click", function () {
    $(".slideshow-container").hide();
    $("#crystal-info").fadeIn();
    $("#return-btn4").on("click", function () {
      $("#crystal-info").hide();
      $(".slideshow-container").fadeIn();

    });

  });

  $(".text5").on("click", function () {
    $(".slideshow-container").hide();
    $("#giphy-info").fadeIn();
    $("#return-btn5").on("click", function () {
      $("#giphy-info").hide();
      $(".slideshow-container").fadeIn();

    });

  });

  $(".text6").on("click", function () {
    $(".slideshow-container").hide();
    $("#trivia-info").fadeIn();
    $("#return-btn6").on("click", function () {
      $("#trivia-info").hide();
      $(".slideshow-container").fadeIn();
    });

  });

  $(".text7").on("click", function () {
    $(".slideshow-container").hide();
    $("#liri-info").fadeIn();
    $("#return-btn7").on("click", function () {
      $("#liri-info").hide();
      $(".slideshow-container").fadeIn();
    });

  });

  $(".text8").on("click", function () {
    $(".slideshow-container").hide();
    $("#bamazon-info").fadeIn();
    $("#return-btn8").on("click", function () {
      $("#bamazon-info").hide();
      $(".slideshow-container").fadeIn();
    });

  });

  $(".text9").on("click", function () {
    $(".slideshow-container").hide();
    $("#friend-finder-info").fadeIn();
    $("#return-btn9").on("click", function () {
      $("#friend-finder-info").hide();
      $(".slideshow-container").fadeIn();
    });

  });



})