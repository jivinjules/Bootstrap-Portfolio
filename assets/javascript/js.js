$(document).ready(function () {
  var slides = [
    {
      "number": 1,
      "image": "assets/images/trainschedule-screenshot.png",
      "learn": "Click here to learn about Train Scheduler",
      "about": "Built with HTML, CSS, JavaScript, jquery, Firebase, Google Fonts, and moment.js, Train Scheduler allows the user to operate a fictional train station. Trains and their respective arrival times are stored in Firebase, and moment.js controls the timing.",
      "href1": "https://jivinjules.github.io/Train-Schedule/",
      "href2": "https://github.com/jivinjules/Train-Schedule"
    },
    {
      "number": 2,
      "image": "assets/images/hangman-screenshot.png",
      "learn": "Click here to learn about Hangman",
      "about": "Built with HTML, CSS, and JavaScript, Hangman randomly generates a word, converts it to blanks, and provides the user 10 guesses. If correct, the user will be provided with an image of the word.",
      "href1": "https://jivinjules.github.io/Hangman/",
      "href2": "https://github.com/jivinjules/Hangman"
    },
    {
      "number": 3,
      "image": "assets/images/groupproject-screenshot.png",
      "learn": "Click here to learn about What's for Dinner, DFW",
      "about": "What's for Dinner, DFW? is a collaborative effort of four developers. The site uses Zomato API, Yummly API, and Google Maps API make dinnertime easy for residents of DFW. The user can choose a cuisine and a city and is offered recipes to make (if they decide to eat at home) or restaurants which offer that cuisine (if they decide to eat out), and Google Maps shows the exact location of the restaurant.",
      "href1": "https://shayshae5482.github.io/group-project/",
      "href2": "https://github.com/jivinjules/group-project"
    },
    {
      "number": 4,
      "image": "assets/images/crysalcounter-screenshot.png",
      "learn": "Click here to learn about Crystal Counter",
      "about": "Crystal counter is an interactive game where the a random number is provided, and four crystal pictures are also given random values. The user must then try to match the random number by clicking on the crystals. Built with HTML, CSS, JavaScript, and jquery, the site provides a new number and values for each game.",
      "href1": "https://jivinjules.github.io/CrystalCounter",
      "href2": "https://github.com/jivinjules/CrystalCounter"
    },
    {
      "number": 5,
      "image": "assets/images/giphy-screenshot.png",
      "learn": "Click here to learn about Giphy",
      "about": "This giftastic site employs an AJAX call to the Giphy API to generate random Disney gifs. The user can start and stop Gifs as well as search and generate new Gif's.",
      "href1": "https://jivinjules.github.io/Giphy/",
      "href2": "https://github.com/jivinjules/Giphy"
    },
    {
      "number": 6,
      "image": "assets/images/triviagame-screenshot.png",
      "learn": "Click here to learn about Periodic Table Trivia",
      "about": "The Periodic Table Trivia Game is a timed, multiple choice trivia game. Built with jquery timers, the user has 15 seconds to correctly choose an answer. The game keeps track of the score and also provides the correct answer and image.",
      "href1": "https://jivinjules.github.io/TriviaGame/",
      "href2": "https://github.com/jivinjules/TriviaGame"
    },
    {
      "number": 7,
      "image": "assets/images/liri-screenshot.png",
      "learn": "Click here to learn about LIRI",
      "about": "LIRI (aka Language Interpretation and Recognition Interface) is a command line node app that takes in parameters and gives you back data (like SIRI but for language only). LIRI is built with npm and the following API's (bandsintown, OMDB, Spotify, and moment) and can return information about concerts, movies, and music.",
      "href1": "https://github.com/jivinjules/liri-node-app",
      "href2": "https://github.com/jivinjules/liri-node-app"
    },
    {
      "number": 8,
      "image": "assets/images/bamazon-screenshot.png",
      "learn": "Click here to learn about Bamazon",
      "about": "Bamazon is an Amazon-like storefront that runs as a command line node app. The user is able to operate as either the customer (view and order products) or Bamazon's manager (view products, view low inventory, add new inventory, or add new products). Built with MySQL database and multiple npms, Bamazon is fun, fictional store to operate or shop at.",
      "href1": "https://github.com/jivinjules/Bamazon",
      "href2": "https://github.com/jivinjules/Bamazon"
    },
    {
      "number": 9,
      "image": "assets/images/friend-finder.png",
      "learn": "Click here to learn about Friend-Finder",
      "about": "Friend-Finder is similar to a dating app. The user fills out a survey and is 'matched' on compatability with users listed in the 'friends API.' Built dynamically with express, node, javascript, jQuery, and Bootstrap, the app calls on a formula to search the API, match, and add to the API.",
      "href1": "https://infinite-river-79762.herokuapp.com/",
      "href2": "https://github.com/jivinjules/Friend-Finder"
    },
    {
      "number": 10,
      "image": "assets/images/screenshot-burger.png",
      "learn": "Click here to learn about Burger App",
      "about": "The Burger App was built dynamically with Node, Express, Handlebars, JavaScript, jQuery, Bootstrap, and MySQL. The user is able to view different hamburgers and move them from an 'Eat list' to an 'Eaten list.' The movement from the user also triggers an automatic update in the MySQL database.",
      "href1": "https://mighty-springs-79166.herokuapp.com/",
      "href2": "https://github.com/jivinjules/burger"
    },
    {
      "number": 11,
      "image": "assets/images/tg-screenshot.png",
      "learn": "Click here to learn about Trading Grounds",
      "about": "A joint effort among three developers, Trading Grounds is an educational app that simulates participation in the stock market. Trading Grounds functions as a mock portfolio which allows the user to 'purchase' or 'sell' stocks using real-time stock information as well as track the user's portfolio. Built with Node, Express, Handlebars, MySQL, Materialize CSS, Bootstrap, Sequelize and many npm packages and third-party APIs, Trading Grounds lives up to its tagline: All the experience. None of the risk.",
      "href1": "https://radiant-coast-91135.herokuapp.com/",
      "href2": "https://github.com/Trading-Grounds/Trading-Grounds"
    },
    {
      "number": 12,
      "image": "assets/images/BitMemory-screenshot.png",
      "learn": "Click here to learn about BitMemory",
      "about": "A game developed for the Lightning Network with React and Strike API, BitMemory uses Bitcoin-themed memes to give a fun spin to the classic memory game.  Full play is 1000 satoshis, with tippin.me option and lightning node connection option at the end.",
      "href1": "https://bitmemory.herokuapp.com",
      "href2": "https://github.com/TheRandomOneBTC/memememory"
    },
    {
      "number": 13,
      "image": "assets/images/BitWord-screenshot.png",
      "learn": "Click here to learn about BitWord Guess",
      "about": "Developed with React and Strike API, BitWord Guess was highlighted by Lapps.co as an interactive Lightning Network game. Full play is 1000 satoshis, with tippin.me option at end or connection to lightning node.",
      "href1": "https://bitword.herokuapp.com",
      "href2": "https://github.com/jivinjules/CryptoWordGuess"
    },
    {
      "number": 14,
      "image": "assets/images/screenshot-dashboard.png",
      "learn": "Click here to learn about pillBox",
      "about": "PillBox was developed as a joint effort to solve the need for tracking medications and prescriptions. Built with React, MySQL, Sequelize, Bootstrap, and third-party API's.",
      "href1": "https://pacific-hollows-45719.herokuapp.com/",
      "href2": "https://github.com/jivinjules/ProjectPillBox"
    }
  ]
  slideArray = []
  dotArray = []

  $(".about").hide();
  $('.container').hide()

  //Adding moment.js to get clock at the top of the screen
  var currentTime = moment();

  //displays current time on the jumbotron
  $('#clock').html(moment(currentTime).format('MMMM D, YYYY LT'));

  function update() {
    $('#clock').html(moment().format('MMMM D, YYYY LT'));
  }
  setInterval(update, 60000);

  $("#intro3").on("click", function () {
    $("#small-container").hide();
    $(".container").fadeIn();
  })

  $(".return").on("click", function () {
    $(".container").hide();
    $("#small-container").fadeIn();
  })


  function slideUpdate() {
    $('.slideshow-container').empty()
    var m = $('<div style="text-align:center">')

    for (var i = 0; i < slides.length; i++) {
      var container = $("<div class = 'mySlides.fade'>")
      var a = $("<div class = 'try'>")
      var b = $("<div class = 'numbertext'>").text(slides[i].number)
      var c = $("<img class ='slideImage'>").attr('src', slides[i].image)
      var d = $("<div class = 'carousel'>").text(slides[i].learn)
      var e = $("<div class = 'about'>")
      var f = $("<p class='insert'>").text(slides[i].about)
      var g = $("<br>")
      var h = $("<a class='inspect'>").attr('href', slides[i].href1)
      h.text('Visit site' + '    ')
      var o = $("<a class='inspect'id='left'>").attr('href', slides[i].href2)
      o.text('Inspect the code')
      var k = $("<a div class='prev'>").text('prev')
      k.click(function () {
        plusSlides(-1);
      });
      var l = $("<a div class='next'>").text('next')
      l.click(function () {
        plusSlides(1);
      });
      var n = $("<button class='return-btn'>").text("Return to Portfolio")
      e.prepend(f, g, h, o, g, n)
      a.prepend(b, c, d)
      a.prepend(k)
      a.prepend(l)

      e.hide()

      var j = $("<span class = 'dot'>").attr('id', slides[i].number).click(
        function () {
          showSlides(slideIndex = this.id)
        })
      m.append(j)
      dotArray.push(j)

      container.prepend(a, e)
      d.click(function () {
        $(".try").hide();
        $(".about").fadeIn();
      })

      n.click(function () {
        $(".about").hide();
        $(".try").fadeIn();
      })

      $('.slideshow-container').prepend(container)
      $('.slideshow-container').prepend(m)
      slideArray.push(container)

    }
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function showSlides(n) {
      var i;
      if (n > slideArray.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slideArray.length }
      for (i = 0; i < slideArray.length; i++) {
        for (var j = 0; j < slideArray[i].length; j++) {
          slideArray[i][j].style.display = "none";
        }
      }
      for (i = 0; i < dotArray.length; i++) {
        for (var j = 0; j < dotArray[i].length; j++) {
          dotArray[i][j].className = dotArray[i][j].className.replace(" active", "");
        }
      }
      for (i = 0; i < slideArray[slideIndex - 1].length; i++) {
        slideArray[slideIndex - 1][i].style.display = "block";
      }
      // for (i = 0; i < dotArray[slideIndex - 1].length; i++) {
      //   dotArray[slideIndex - 1][i].className += " active";
      // }
    }
  }

  slideUpdate()

})